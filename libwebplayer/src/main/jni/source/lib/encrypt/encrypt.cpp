#include <sys/time.h>
#include <sstream>
#include <algorithm>

#include "encrypt.h"
#include "base64.h"

string swap(string message) 
{
	string result = message;

	for (int i = 0, l = message.length(); i < l; i++) {
		char charNum = (char) (message[i]);

		//0 ~ 4
		if (charNum >= 48 && charNum <= 52 ) {
			result[i] = charNum + 5;
			continue;
		}
		//5 ~ 9
		if (charNum >= 53 && charNum <= 57 ) {
			result[i] = charNum - 5;
			continue;
		}

		//A ~ M
		if (charNum >= 65 && charNum <= 77) {
			result[i] = charNum + 13;
			continue;
		}
		//N ~ Z
		if (charNum >= 78 && charNum <= 90) {
			result[i] = charNum - 13;
			continue;
		}

		//a ~ m
		if (charNum >= 97 && charNum <= 109) {
			result[i] = charNum + 13;
			continue;
		}
		//n ~ z
		if (charNum >= 110 && charNum <= 122) {
			result[i] = charNum - 13;
			continue;
		}
	}
	
	return result;
}

string _xor_(string message, string key) 
{
	string result = message;

	int ml = message.length();
	int kl = key.length();

	for (int i = 0; i < ml; i++) {
		result[i] = (char) (message[i] ^ key[i % kl]);
	}
	
	return result;
} 

string encrypt(string message) 
{
	struct timeval tv;
    gettimeofday(&tv, NULL);
    long long now = ((tv.tv_sec * 1000) + (tv.tv_usec / 1000));

    std::ostringstream os ;
    os << (int)(now % 10000);

    string key = os.str();
	message = _xor_(message, key);

	message = base64_encode(message) + key;
	reverse(message.begin(), message.end());

	message = base64_encode(message);
	return swap(message);
}

string decrypt(string message) 
{
	message = swap(message);
	message = base64_decode(message);
	reverse(message.begin(), message.end());
	
	string key = message.substr(message.length() - 4);
	message = message.substr(0, message.length() - 4);
	message = base64_decode(message); 

	return _xor_(message, key);
}

// 解密数据，key为数据体最后的16个字节，返回解密后的数据长度，解密后的数据覆盖之前传入的数据体
long decryptData(unsigned char* data, long size)
{
    int keyLen = 16;
    long dataLen = size - keyLen;
    unsigned char* key = &data[dataLen];

    for (int i = 0; i < dataLen; i++) {
        data[i] = (char) (data[i] ^ key[i % keyLen]);
    }

    return dataLen;
}

