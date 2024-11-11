#ifndef __FILE_HELPER_H__
#define __FILE_HELPER_H__

#include <string>
#include <android/asset_manager.h>
#include "android_fopen.h"
#include "Uri.h"



class FileHelper
{
public:
	static void initAssets(AAssetManager* assets) {
		_assets = assets;
		android_fopen_set_asset_manager(_assets);
	}

	static void initWritablePath(const char* path) {
		_writablePath = path;
	}

	static const char* getWritablePath() { 
		return _writablePath.c_str(); 
	};

	static bool loadDataFile(const char* filename, unsigned char** out, long* size);
	static bool writeDataFile(const char* filename, const char* in, long size) ;

	static bool isFileExist(const char* filename);

	static bool loadDataFileFromAsset(const char* filename, unsigned char** out, long* size);
	static bool loadDataFileFromStorage(const char* filename, unsigned char** out, long* size);

	static bool isFileExistInAsset(const char* filename);
	static bool isFileExistInStorage(const char* filename);
    
private:
	static AAssetManager*	_assets;
	static std::string		_writablePath;


};

#endif // __FILE_HELPER_H__
