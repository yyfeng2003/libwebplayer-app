#include <sys/stat.h>
#include <errno.h>
#include <iostream>
#include <cstdlib>

#include "PCCocoa/support/NSPlatformMacros.h"
#include "FileHelper.h"
#include "md5/md5.h"
#include "encrypt.h"

AAssetManager* FileHelper::_assets = NULL;
std::string	FileHelper::_writablePath;

// 将一个路径字符串分割成两部分，第一部分为根节点，第二部分为子路径
void split_path(const char* path, char* root_node, char* remaining_path)
{
    const char* first_slash = strchr(path, '/');
    if (first_slash) {
        int length = first_slash - path;
        memcpy(root_node, path, length);
        root_node[length] = '\0';  // 添加字符串结束符
        strcpy(remaining_path, first_slash + 1);  // 复制剩余的路径
    } else {
        root_node[0] = '\0';  // 剩余的路径为空
        strcpy(remaining_path, path);  // 如果没有找到分隔符，整个路径就是第一个节点
    }
}

// load data file from local uri
bool FileHelper::loadDataFile(const char* filename, unsigned char** out, long* size) 
{
	Uri uri = Uri::parse(filename);
	auto path = uri.filePath();

	NSLOG("load file: %s", path.c_str());
	
	if (uri.isAndroidAsset()) {
		return loadDataFileFromAsset(path.c_str(), out, size);
	} else {
		return loadDataFileFromStorage(path.c_str(), out, size);
	}
}

// filename is a fullpath name
bool FileHelper::writeDataFile(const char* filename, const char* in, long size) 
{
	FILE* fp = fopen(filename, "wb");
	if (fp != NULL) {
		fwrite(in, size, 1, fp);
		fclose(fp);
		return true;
	}

	return false;
}

// filename is a fullpath name
bool FileHelper::loadDataFileFromAsset(const char* filename, unsigned char** out, long* size) 
{
	// Check file from main bundle - /assets/PCECTA_APP_FOLDER/
	if (_assets == NULL) {
		NSLOG("FileHelper: file load error, asset manager is null(%s)", filename);
		return false;
	}

	bool isEncryptedFile = false;

	// Open file
	AAsset* asset = AAssetManager_open(_assets, filename, AASSET_MODE_UNKNOWN);
	if (NULL == asset) {
	    // 是加密文件，走解密加载流程
	    char root_node[64] = {0}, remain_path[512] = {0};
	    split_path(filename, root_node, remain_path);

	    char encryptedFilename[512] = {0};
	    sprintf(encryptedFilename, "%s/%s.db", root_node, MD5(remain_path).toString().c_str());

	    asset = AAssetManager_open(_assets, encryptedFilename, AASSET_MODE_UNKNOWN);
	    if (NULL == asset) {
            NSLOG("FileHelper: file open error %s", filename);
            return false;
		}
		isEncryptedFile = true;
	} 

	long len = AAsset_getLength(asset);
	unsigned char *buffer = (unsigned char *) malloc(len + 1);
	if (buffer == NULL)	{
		NSLOG("FileHelper: memory malloc error when reading file %s", filename);
		AAsset_close(asset);
		return false;
	}

	memset(buffer, 0, len + 1);
	long result = AAsset_read(asset, buffer, len);
	AAsset_close(asset);

	if (result < 0) {
	   NSLOG("FileHelper: file read error %s", filename);
	   free(buffer);
	   return false;
	}

	if (isEncryptedFile) {
	    len = decryptData(buffer, len);
	}

	*out = buffer;
	*size = len;

	// NSLOG("load file done: %s, length = %ld", filename, len);

	return true;
}

// filename is a fullpath name
bool FileHelper::loadDataFileFromStorage(const char* filename, unsigned char** out, long* size) 
{
    bool isEncryptedFile = false;

	// Open file
	FILE* fp = fopen(filename, "rb");
	if (NULL == fp) {
	    // 是加密文件，走解密加载流程
        char root_node[64] = {0}, remain_path[512] = {0};
        split_path(filename, root_node, remain_path);

        char encryptedFilename[512] = {0};
        sprintf(encryptedFilename, "%s/%s.db", root_node, MD5(remain_path).toString().c_str());

        fp = fopen(encryptedFilename, "rb");
        if (NULL == fp) {
            NSLOG("FileHelper: file open error '%s'", filename);
            return false;
		}
		isEncryptedFile = true;
	} 

	fseek(fp, 0L, SEEK_END); 
	long len = ftell(fp);
	fseek(fp, 0L, SEEK_SET);

	unsigned char *buffer = (unsigned char *) malloc(len + 1);
	if (buffer == NULL)	{
		NSLOG("FileHelper: memory malloc error when reading file '%s'", filename);
		fclose(fp);
		return false;
	}

	memset(buffer, 0, len + 1);
	long result = fread(buffer, 1, len, fp);
	fclose(fp);

	if (result != len) {
	   NSLOG("FileHelper: file read error '%s'", filename);
	   free(buffer);
	   return false;
	}

	if (isEncryptedFile) {
        len = decryptData(buffer, len);
    }

	*out = buffer;
	*size = len;

	return true;
}

// filename is a fullpath name
bool FileHelper::isFileExist(const char* filename)
{
	Uri uri = Uri::parse(filename);
	auto path = uri.filePath();

	if (uri.isAndroidAsset()) {
		return isFileExistInAsset(path.c_str());
	} else {
		return isFileExistInStorage(path.c_str());
	}
}

// filename is a fullpath name
bool FileHelper::isFileExistInAsset(const char* filename)
{
	if (_assets == NULL)
		return false;

	AAsset *asset = AAssetManager_open(_assets, filename, AASSET_MODE_UNKNOWN);
	if (asset) {
		AAsset_close(asset);
		return true;
	} 

	return false;
}

// filename is a fullpath name
bool FileHelper::isFileExistInStorage(const char* filename)
{	
	struct stat st;
    return (stat(filename, &st)) == 0;
}
