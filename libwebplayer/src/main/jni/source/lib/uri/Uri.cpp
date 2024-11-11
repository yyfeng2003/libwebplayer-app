
/*
 * Modified from
 * http://stackoverflow.com/a/11044337/2206385
 */

#include <algorithm> // find
#include "Uri.h"

#include "PCCocoa/support/NSPlatformMacros.h"


//static method
Uri Uri::parse(const char* uri)
{
	return Uri::parse(std::string(uri));
}

//static method
Uri Uri::parse(const std::string uri)
{
	// NSLOG("Uri::parse: %s", uri.c_str());
	
	// const std::string $uri = (uri[0] == '/' ? "file://" + uri : uri);

	size_t pos = uri.find("file://");
	const std::string $uri = (pos == 0 ? uri : "file://" + uri);

	Uri result;
	result.href = $uri;

	if ($uri.length() == 0)
		return result;

	typedef std::string::const_iterator iterator_t;

	iterator_t uriEnd = $uri.end();

	// Get query start
	iterator_t queryStart = std::find($uri.begin(), uriEnd, '?');

	// protocol
	iterator_t protocolStart = $uri.begin();
	// "://"
	iterator_t protocolEnd = std::find(protocolStart, uriEnd, ':');

	if (protocolEnd != uriEnd) {
		std::string prot = &*(protocolEnd);
		if ((prot.length() > 3) && (prot.substr(0, 3) == "://")) {
			result.protocol = std::string(protocolStart, protocolEnd);
			protocolEnd += 3;   // ://
		} else {
			// No protocol
			protocolEnd = $uri.begin();
		}
	} else {
		// No protocol
		protocolEnd = $uri.begin();
	}

	// host
	iterator_t hostStart = protocolEnd;
	// Get pathStart
	iterator_t pathStart = std::find(hostStart, uriEnd, '/');
	// Check for port
	iterator_t hostEnd = std::find(protocolEnd,
		(pathStart != uriEnd) ? pathStart : queryStart, ':');

	if (!result.protocol.empty()) {
		result.domain = result.host = std::string(hostStart, hostEnd);
	}

	if (!result.domain.empty() && result.domain.find("www.") == 0) {
		result.domain = result.domain.substr(4);
	}

	// port 
	if ((hostEnd != uriEnd) && ((&*(hostEnd))[0] == ':')) {
		// We have a port
		hostEnd++;
		iterator_t portEnd = (pathStart != uriEnd) ? pathStart : queryStart;
		result.port = std::string(hostEnd, portEnd);
	}
	// path
	if (pathStart != uriEnd) {
		result.path = std::string(pathStart, queryStart);
	}
	// Query
	if (queryStart != uriEnd) {
		result.query = std::string(queryStart, $uri.end());
	}

	// origin
	if (result.protocol == "file") {
		result.origin = "file://";
	} else {
		result.origin = result.protocol + "://" + result.host + ":" + result.port;
	}

	// short path and file name
	int n = result.path.find_last_of('/');
	if (n == std::string::npos) {
		result.directory = std::string("/") + result.path;
		n = 0;
	}

	result.directory = result.path.substr(0, n + 1);
	result.filename = result.path.substr(n + 1);

	return result;
}

