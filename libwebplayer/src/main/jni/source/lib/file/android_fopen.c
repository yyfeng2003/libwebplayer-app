
#define _BSD_SOURCE 1

#include <errno.h>
#include "android_fopen.h"

static int android_fread(void* cookie, char* buf, int size) {
  return AAsset_read((AAsset*)cookie, buf, size);
}

static int android_fwrite(void* cookie, const char* buf, int size) {
  return EACCES; // can't provide write access to the apk
}

static fpos_t android_fseek(void* cookie, fpos_t offset, int whence) {
  return AAsset_seek((AAsset*)cookie, offset, whence);
}

static int android_fclose(void* cookie) {
  AAsset_close((AAsset*)cookie);
  return 0;
}




// must be established by someone else...
AAssetManager* android_asset_manager;

void android_fopen_set_asset_manager(AAssetManager* manager) {
	android_asset_manager = manager;
}


FILE* android_fopen(const char* fname, const char* mode) 
{
	if (fname[0] == '/'){
#undef fopen
		return fopen(fname, mode);
	}

#define fopen(name, mode) android_fopen(name, mode)
	AAsset* asset = AAssetManager_open(android_asset_manager, fname, 0);
	if (!asset) return NULL;
	return (FILE*)funopen(asset, android_fread, android_fwrite, android_fseek, android_fclose);
}

/**
* ouley: 20220520
* The funopen + fseek on 64bits OS will crash. Maybe funopen return int_32, but FILE* is 64bits pointer
*/