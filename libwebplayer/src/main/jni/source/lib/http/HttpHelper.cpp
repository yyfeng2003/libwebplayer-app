#include <sys/stat.h>
#include <queue>
#include <pthread.h>
#include <errno.h>

#include <cctype>
#include <cwctype>
#include <iostream>
#include <clocale>
#include <cstdlib>
#include <unistd.h>
#include "HttpHelper.h"


static pthread_t        s_networkThread;
static pthread_mutex_t  s_requestQueueMutex;
static pthread_mutex_t  s_responseQueueMutex;

static pthread_mutex_t	s_sleepMutex;
static pthread_cond_t	s_sleepCondition;

static unsigned long    s_asyncRequestCount = 0;

#ifdef _WINDOWS
typedef int int32_t;
#endif

static bool need_quit = false;

static NSArray* s_requestQueue = NULL;
static NSArray* s_responseQueue = NULL;

static HttpClient *s_pHttpClient = NULL; // pointer to singleton

static char s_errorBuffer[CURL_ERROR_SIZE];

typedef size_t (*write_callback)(void * ptr, size_t size, size_t nmemb, void* stream);

// Callback function used by libcurl for collect response data
static size_t writeData(void *ptr, size_t size, size_t nmemb, void *stream) 
{
    std::vector<char> *recvBuffer = (std::vector<char>*)stream;
    size_t sizes = size * nmemb;
    
    // add data to the end of recvBuffer
    // write data maybe called more than once in a single request
    recvBuffer->insert(recvBuffer->end(), (char*)ptr, (char*)ptr+sizes);
    
    return sizes;
}

// Callback function used by libcurl for download response data
static size_t saveData(void * ptr, size_t size, size_t nmemb, void* stream) {  
   return fwrite(ptr, size, nmemb, (FILE*)stream);  
}  


// Prototypes
bool configureCURL(CURL *handle);
/*
int processGetTask(HttpRequest *request, write_callback callback, void *stream, int32_t *errorCode);
int processPostTask(HttpRequest *request, write_callback callback, void *stream, int32_t *errorCode);
int processPutTask(HttpRequest *request, write_callback callback, void *stream, int32_t *errorCode);
int processDeleteTask(HttpRequest *request, write_callback callback, void *stream, int32_t *errorCode);
int processDownloadTask(HttpRequest *task, write_callback callback, void *stream, int32_t *errorCode);
*/
int processGetTask(HttpRequest *request, HttpResponse *response);
int processPostTask(HttpRequest *request, HttpResponse *response);
int processPutTask(HttpRequest *request, HttpResponse *response);
int processDeleteTask(HttpRequest *request, HttpResponse *response);
int processDownloadTask(HttpRequest *request, HttpResponse *response);

//同步操作： 处理请求，返回响应
static HttpResponse* handleRequest(HttpRequest *request) 
{
    // NSLOG("handleRequest......");

	// Create a HttpResponse object, the default setting is http access failed
	HttpResponse *response = new HttpResponse(request);

	// request's refcount = 2 here, it's retained by HttpRespose
	request->release();
	// ok, refcount = 1 now, only HttpResponse hold it.
	
	//int32_t responseCode = -1;
	int retValue = 0;

	// Process the request -> get response packet
	switch (request->getRequestType()) {
		case HttpRequest::kHttpGet: // HTTP GET
			retValue = processGetTask(request, response);
			break;
		
		case HttpRequest::kHttpPost: // HTTP POST
			retValue = processPostTask(request, response);
			break;

		case HttpRequest::kHttpPut:	// HTTP PUT
			retValue = processPutTask(request, response);
			break;

		case HttpRequest::kHttpDelete: // HTTP DELETE
			retValue = processDeleteTask(request, response);
			break;
		
		case HttpRequest::kHttpDownload: // HTTP DOWNLOAD
			retValue = processDownloadTask(request, response);
			break;

		default:
			NSAssert(true, "HttpClient: unkown request type, only GET and POST are supported");
			break;
	}

	if (retValue != 0) {
		response->setSucceed(false);
		response->setErrorBuffer(s_errorBuffer);
	} else {
		response->setSucceed(true);
	}

    // NSLOG("handleRequest......done!");

	return response;
}

// Worker thread
static void* networkThread(void *data) 
{    
    HttpRequest *request = NULL;
    
    while (true) {

        if (need_quit) break;
        
        // step 1: send http request if the requestQueue isn't empty
        request = NULL;
        
        pthread_mutex_lock(&s_requestQueueMutex); //Get request task from queue

        if (0 != s_requestQueue->count()) {
            request = dynamic_cast<HttpRequest*>(s_requestQueue->objectAtIndex(0));
            s_requestQueue->removeObjectAtIndex(0);  
            // request's refcount = 1 here
        }

        pthread_mutex_unlock(&s_requestQueueMutex);
        
        if (NULL == request) {
        	// Wait for http request tasks from main thread
        	pthread_cond_wait(&s_sleepCondition, &s_sleepMutex);
            continue;
        }

        // step 2: libcurl sync access
		HttpResponse* response = handleRequest(request);

        // add response packet into queue
        pthread_mutex_lock(&s_responseQueueMutex);
        s_responseQueue->addObject(response);
        pthread_mutex_unlock(&s_responseQueueMutex);
    }

    // cleanup: if worker thread received quit signal, clean up un-completed request queue
    pthread_mutex_lock(&s_requestQueueMutex);
    s_requestQueue->removeAllObjects();
    s_asyncRequestCount -= s_requestQueue->count();
	pthread_mutex_unlock(&s_requestQueueMutex);
    
    if (s_requestQueue != NULL) {
        
        pthread_mutex_destroy(&s_requestQueueMutex);
        pthread_mutex_destroy(&s_responseQueueMutex);
        
        pthread_mutex_destroy(&s_sleepMutex);
        pthread_cond_destroy(&s_sleepCondition);

        s_requestQueue->release();
        s_requestQueue = NULL;

        s_responseQueue->release();
        s_responseQueue = NULL;
    }

	//-yyfeng: 2017-03-21
    //PCApp::instance()->ungetJniEnv();

    // pthread_exit(NULL);

	//NSLOG("networkThread exit!");

    return 0;
}

//Configure curl's timeout property
bool configureCURL(CURL *handle) {
    if (!handle) {
        return false;
    }
    
    int32_t code;
    code = curl_easy_setopt(handle, CURLOPT_ERRORBUFFER, s_errorBuffer);
    if (code != CURLE_OK) {
        return false;
    }
    code = curl_easy_setopt(handle, CURLOPT_TIMEOUT, HttpClient::instance()->getTimeoutForRead());
    if (code != CURLE_OK) {
        return false;
    }
    code = curl_easy_setopt(handle, CURLOPT_CONNECTTIMEOUT, HttpClient::instance()->getTimeoutForConnect());
    if (code != CURLE_OK) {
        return false;
    }
    
    return true;
}


class CURLRaii 
{
    /// Instance of CURL
    CURL *m_curl;

    /// Keeps custom header data
    curl_slist *m_headers;

public:
    CURLRaii() : m_curl(curl_easy_init()), m_headers(NULL)
    {
    }

    ~CURLRaii()
    {
        if (m_curl) {
            curl_easy_cleanup(m_curl);
		}

        /* free the linked list for header data */
        if (m_headers) {
            curl_slist_free_all(m_headers);
		}
    }

    template <class T>
    bool setOption(CURLoption option, T data) 
	{
        return CURLE_OK == curl_easy_setopt(m_curl, option, data);
    }

    /**
     * @brief Inits CURL instance for common usage
     * @param request Null not allowed
     * @param callback Response write callback
     * @param stream Response write stream
     */
    bool init(HttpRequest *request, write_callback callback, void *stream) 
	{
        if (!m_curl || !configureCURL(m_curl))
            return false;

        // get custom header data (if set)
       	std::vector<std::string> headers = request->getHeaders();
        if (!headers.empty()) {
            // append custom headers one by one
            for (std::vector<std::string>::iterator it = headers.begin(); it != headers.end(); ++it)
                m_headers = curl_slist_append(m_headers,it->c_str());
            // set custom headers for curl
            if (!setOption(CURLOPT_HTTPHEADER, m_headers))
                return false;
        }

        return setOption(CURLOPT_URL, request->getUrl())
                && setOption(CURLOPT_WRITEFUNCTION, callback)
                && setOption(CURLOPT_WRITEDATA, stream);
    }

    /// @param responseCode Null not allowed
    bool perform(int *responseCode, char** contentType) 
	{
        if (CURLE_OK != curl_easy_perform(m_curl))
            return false;

        CURLcode code = curl_easy_getinfo(m_curl, CURLINFO_RESPONSE_CODE, responseCode);
        if (code != CURLE_OK || *responseCode != 200)
            return false;

		if (contentType) 
			curl_easy_getinfo(m_curl, CURLINFO_CONTENT_TYPE, contentType);

        return true;
    }
};

// Process Get Request
int processGetTask(HttpRequest *request, HttpResponse *response) 
{
	int32_t responseCode = -1;

	if (request->isLocalHost()) {
		int ret = request->loadLocalFile(response->getResponseData(), &responseCode);
		response->setResponseCode(responseCode);
		return ret;
	} 
    else if (request->isDataUrl()){
        // response->setResponseCode(404);
        // response->setResponseData(request->getRequestData(), request->getRequestDataSize());
        return 1;
    }
	else {
		CURLRaii curl;
		char* contentType = NULL;
		bool ok = curl.init(request, writeData, response->getResponseData())
				&& curl.setOption(CURLOPT_FOLLOWLOCATION, true)
				&& curl.setOption(CURLOPT_SSL_VERIFYPEER, false)    /* support https */
				&& curl.setOption(CURLOPT_SSL_VERIFYHOST, false)	/* support https */
				&& curl.perform(&responseCode, &contentType);

		if (ok) {
			response->setResponseCode(responseCode);
			response->setResponseHeader("Content-Type", contentType);
		}

		return ok ? 0 : 1;
	}
}

// Process POST Request
int processPostTask(HttpRequest *request, HttpResponse *response) 
{
	CURLRaii curl;
	int32_t responseCode = -1;
	char* contentType = NULL;

	bool ok = curl.init(request, writeData, response->getResponseData())
			&& curl.setOption(CURLOPT_POST, 1)
			&& curl.setOption(CURLOPT_SSL_VERIFYPEER, false)	/* support https */
			&& curl.setOption(CURLOPT_SSL_VERIFYHOST, false)	/* support https */
            && curl.setOption(CURLOPT_POSTFIELDS, request->getRequestData())
            && curl.setOption(CURLOPT_POSTFIELDSIZE, request->getRequestDataSize())
			&& curl.perform(&responseCode, &contentType);

	if (ok) {
		response->setResponseCode(responseCode);
		response->setResponseHeader("Content-Type", contentType);
	}

	return ok ? 0 : 1;
}

// Process PUT Request
int processPutTask(HttpRequest *request, HttpResponse *response) 
{
    CURLRaii curl;
	int32_t responseCode = -1;

    bool ok = curl.init(request, writeData, response->getResponseData())
            && curl.setOption(CURLOPT_CUSTOMREQUEST, "PUT")
            && curl.setOption(CURLOPT_POSTFIELDS, request->getRequestData())
            && curl.setOption(CURLOPT_POSTFIELDSIZE, request->getRequestDataSize())
            && curl.perform(&responseCode, NULL);
    return ok ? 0 : 1;
}

//Process DELETE Request
int processDeleteTask(HttpRequest *request, HttpResponse *response) 
{
    CURLRaii curl;
	int32_t responseCode = -1;

    bool ok = curl.init(request, writeData, response->getResponseData())
            && curl.setOption(CURLOPT_CUSTOMREQUEST, "DELETE")
            && curl.setOption(CURLOPT_FOLLOWLOCATION, true)
            && curl.perform(&responseCode, NULL);
    return ok ? 0 : 1;
}

// Process download Request
int processDownloadTask(HttpRequest *request, HttpResponse *response) 
{
	const char* localFile = (const char*)request->getUserData();

	if (FileHelper::isFileExistInStorage(localFile))
		return 0;

	if (request->isLocalHost()) {
		// not exist in local file path
		return 1;
	} 
	else {
		FILE* fp = fopen(localFile, "wb"); 
		if (!fp) return 1;

		CURLRaii curl;
		int32_t responseCode = -1;

		bool ok = curl.init(request, saveData, fp)
				&& curl.setOption(CURLOPT_FOLLOWLOCATION, true)
				&& curl.perform(&responseCode, NULL);

		fclose(fp);

		return ok ? 0 : 1;
	}
}


// HttpClient implementation
HttpClient* HttpClient::instance()
{
    if (s_pHttpClient == NULL) {
        s_pHttpClient = new HttpClient();
    }

    return s_pHttpClient;
}

HttpClient::HttpClient() : 
	_timeoutForConnect(30), 
	_timeoutForRead(60)
{
	//NSLOG("HttpClient::HttpClient()");
}

HttpClient::~HttpClient() 
{
	// NSLOG("HttpClient::~HttpClient()");

    need_quit = true;
    
    if (s_requestQueue != NULL) {
    	pthread_cond_signal(&s_sleepCondition);

        //+ouley: 20240702
        pthread_join(s_networkThread, NULL);
        // usleep(200 * 1000);   //200ms
    }
    
    s_pHttpClient = NULL;

    // NSLOG("HttpClient::~HttpClient()......done!");
}

void HttpClient::clear() 
{
	// clear response queue
	if (s_responseQueue) {
		pthread_mutex_lock(&s_responseQueueMutex);
		while (s_responseQueue->count() > 0) {
			HttpResponse* response = dynamic_cast<HttpResponse*>(s_responseQueue->objectAtIndex(0));
			s_responseQueue->removeObjectAtIndex(0, true);
		}
		pthread_mutex_unlock(&s_responseQueueMutex);
	}

	// clear request queue
	if (s_requestQueue) {
		pthread_mutex_lock(&s_requestQueueMutex); 
		while (s_requestQueue->count() > 0) {
			HttpRequest* request = dynamic_cast<HttpRequest*>(s_requestQueue->objectAtIndex(0));
			s_requestQueue->removeObjectAtIndex(0, true);  
		}
		pthread_mutex_unlock(&s_requestQueueMutex);
	}
}

// Lazy create semaphore & mutex & thread
bool HttpClient::lazyInitThreadSemphore() 
{
    if (s_requestQueue == NULL) {
        s_requestQueue = new NSArray();
        s_requestQueue->init();
        
        s_responseQueue = new NSArray();
        s_responseQueue->init();
        
        pthread_mutex_init(&s_requestQueueMutex, NULL);
        pthread_mutex_init(&s_responseQueueMutex, NULL);
        
        pthread_mutex_init(&s_sleepMutex, NULL);
        pthread_cond_init(&s_sleepCondition, NULL);

        pthread_create(&s_networkThread, NULL, networkThread, NULL);
        // pthread_detach(s_networkThread);
        
        need_quit = false;
    }

    return true;
}

//Add a get task to queue
void HttpClient::send(HttpRequest* request) 
{    
    if (false == lazyInitThreadSemphore())
        return;
    
    if (!request)
        return;
        
    request->retain();
        
    pthread_mutex_lock(&s_requestQueueMutex);
    ++s_asyncRequestCount;
    s_requestQueue->addObject(request);
    pthread_mutex_unlock(&s_requestQueueMutex);
    
    // Notify thread start to work
    pthread_cond_signal(&s_sleepCondition);
}

HttpResponse* HttpClient::sendSync(HttpRequest* request) 
{    
    if (!request) return NULL;
        
    request->retain();

	HttpResponse* response = handleRequest(request);
	response->autorelease();

	NSObject *pTarget = request->getTarget();
	SEL_HttpResponse pSelector = request->getSelector();

	if (pTarget && pSelector) {
		(pTarget->*pSelector)(this, response);
	}

	return response;
}

// Poll and notify main thread if responses exists in queue
int HttpClient::check() 
{
    if (0 == s_asyncRequestCount)
        return 0;

    pthread_mutex_lock(&s_responseQueueMutex);
    int c = s_responseQueue->count();
    pthread_mutex_unlock(&s_responseQueueMutex);
    
    return c;
}

// dispatch response callback if responses exists in queue
void HttpClient::dispatch() 
{
    if (0 == s_asyncRequestCount)
        return;

    //NSLOG("HttpClient::dispatchResponseCallbacks is running");
    
    HttpResponse* response = NULL;
    
    pthread_mutex_lock(&s_responseQueueMutex);

    if (s_responseQueue->count() > 0) {
        response = dynamic_cast<HttpResponse*>(s_responseQueue->objectAtIndex(0));
        s_responseQueue->removeObjectAtIndex(0);
    }
    
    if (response) {
        --s_asyncRequestCount;
        
        HttpRequest *request = response->getHttpRequest();
        NSObject *pTarget = request->getTarget();
        SEL_HttpResponse pSelector = request->getSelector();

        if (pTarget && pSelector) {
            (pTarget->*pSelector)(this, response);
        }

        response->release();
    }

	pthread_mutex_unlock(&s_responseQueueMutex);
}

/*
void HttpClient::downloadFromUrl(const char* url, const char* localFile, NSObject* pTarget, SEL_CallFuncND cb)
{
	HttpRequest* request = new HttpRequest();
	request->setUrl(url);
	request->setRequestType(HttpRequest::kHttpDownload);
	request->setResponseCallback(pTarget,  (SEL_HttpResponse)cb);
	request->setUserData((void*)localFile);

    this->setTimeoutForConnect(30000);
	this->send(request);

	request->release();
}*/