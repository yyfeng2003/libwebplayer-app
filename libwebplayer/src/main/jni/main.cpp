
#include <jni.h>
#include <android/log.h>
#include <GLES/gl.h>
#include <string>
#include <set>
#include <signal.h>
#include <PCApp.h>


extern "C" {

	static bool s_ready = false;
	static jstring s_appPath;

    /* void SegfaultHandler(int signo)
    {
        void* callstack[128];
        size_t frames = backtrace(callstack, 128);
        char** symbols = backtrace_symbols(callstack, frames);
    
        __android_log_print(ANDROID_LOG_ERROR, LOG_TAG, "**** Start Backtrace ****");
        for (size_t i = 0; i < frames; ++i) {
            __android_log_print(ANDROID_LOG_ERROR, LOG_TAG, "%s", symbols[i]);
        }
        __android_log_print(ANDROID_LOG_ERROR, LOG_TAG, "**** End Backtrace ****");
        
        free(symbols);

        _exit(1);
    } */

	jint JNI_OnLoad(JavaVM *vm, void *reserved) {

		//signal(SIGSEGV, SegfaultHandler);

		return JNI_VERSION_1_4;
	}

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_surfaceCreated(JNIEnv* env, jobject thiz, jobject context, jobject appAssets, jstring appPath, jint width, jint height, jfloat density)
    {
		if (s_ready) return;

        const char *pszAppPath = env->GetStringUTFChars(appPath, 0);
        PCApp::instance()->init(env, context, appAssets, pszAppPath, width, height, density);
        env->ReleaseStringUTFChars(appPath, pszAppPath); 

        s_ready = true;
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_surfaceChanged(JNIEnv* env, jobject thiz, jint w, jint h, jfloat density)
    {
        if (!s_ready) return;

        PCApp::instance()->setScreenSize(w, h, density);
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_render(JNIEnv* env, jobject thiz)
    {
        if (!s_ready) return;

        PCApp::instance()->render();
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_pause(JNIEnv* env, jobject thiz)
    {
        if (!s_ready) return;

        PCApp::instance()->pause();
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_resume(JNIEnv* env, jobject thiz)
    {
        if (!s_ready) return;

        PCApp::instance()->resume();
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_destroy(JNIEnv* env, jobject thiz)
    {
        if (!s_ready) return;

        PCApp::finalize();

        s_ready = false;
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_loadUrl(JNIEnv* env, jobject thiz, jstring url)
    {
        if (!s_ready) return;

        const char *localUrl = env->GetStringUTFChars(url, 0);
        PCApp::instance()->asyncLoadRootUrl(localUrl);

        env->ReleaseStringUTFChars(url, localUrl);
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_eval(JNIEnv* env, jobject thiz, jstring script)
    {
        if (!s_ready) return;

        const char *localScript = env->GetStringUTFChars(script, 0);
        PCApp::instance()->asyncEvaluateScript(localScript);
        env->ReleaseStringUTFChars(script, localScript);
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_touch(JNIEnv* env, jobject thiz, jint action, jint id, jint x, jint y)
    {
		if (!s_ready) return;

        switch (action)
        {
        case 0: // ACTION_DOWN
            PCApp::instance()->touchesBegan(id, x, y);
            break;

        case 1: // ACTION_UP:
            PCApp::instance()->touchesEnded(id, x, y);
            break;

        case 2: // ACTION_MOVE:
            PCApp::instance()->touchesMoved(id, x, y);
            break;

        default:
            //PCApp::instance()->touchesCancelled(id, x, y);
            break;
        }
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_keyDown(JNIEnv* env, jobject thiz, jint key_code)
    {
        if (!s_ready) return;

		PCApp::instance()->keyDown(key_code);
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_keyUp(JNIEnv* env, jobject thiz, jint key_code)
    {
		if (!s_ready) return;

		PCApp::instance()->keyUp(key_code);
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_sensorChanged(JNIEnv* env, jobject thiz, jfloat x, jfloat y, jfloat z)
    {
		if (!s_ready) return;
    }

    JNIEXPORT jstring JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_decryptText(JNIEnv* env, jobject thiz, jstring text)
    {
		const char *localText = env->GetStringUTFChars(text, 0);
        string plainText = decrypt(localText);
        jstring result = env->NewStringUTF(plainText.c_str());
        env->ReleaseStringUTFChars(text, localText);
        return result;
    }

    JNIEXPORT int JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_getFps(JNIEnv* env, jobject thiz)
    {
        if (!s_ready) return 0;

        return PCApp::instance()->getFps();
    }

    JNIEXPORT void JNICALL Java_com_leaptime_webplayer_WebPlayerJNI_triggerGC(JNIEnv* env, jobject thiz)
    {
        if (!s_ready) return;

        PCApp::instance()->triggerV8GC();
    }

}
