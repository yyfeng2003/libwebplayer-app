#ifndef __ENCRYPT_H__
#define __ENCRYPT_H__

#include <string>

using namespace std;

string encrypt(string message);
string decrypt(string message);

long decryptData(unsigned char* data, long size);

#endif