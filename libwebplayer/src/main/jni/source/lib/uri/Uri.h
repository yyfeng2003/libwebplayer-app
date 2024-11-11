
/*
 * Modified from
 * http://stackoverflow.com/a/11044337/2206385
 */
#ifndef __URI__H__
#define __URI__H__

#include <string>

static const char* androidAssetName = "/android_asset/";

struct Uri 
{
	std::string href, protocol, domain, host, port, path, query, origin;

	std::string directory, filename;

	inline bool isAndroidAsset() 
	{
		return path.find(androidAssetName) == 0;
	}

	inline std::string filePath() 
	{
		return isAndroidAsset() ? path.substr(strlen(androidAssetName)) : path;
	}

	inline std::string basePath() 
	{
		return isAndroidAsset() ? directory.substr(strlen(androidAssetName)) : directory;
	}

	static Uri parse(const char* uri);
    static Uri parse(const std::string uri);

};

#endif