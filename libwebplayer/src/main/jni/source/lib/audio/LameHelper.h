/**********************************************************************************************
	* Author:	yyfeng
	* Date:		22th of May, 2016
	* Filename:	LameHelper.h

	A decode wrapper for the LAME library
***********************************************************************************************/
#include "lame.h"


class LameHelper
{
private:
	static const int PCM_SIZE = 4096 * 50;
	static const int MP3_SIZE = 1024;

public:
	//Decode a mp3 to pcm
	static int decode(unsigned char* mp3_in, int mp3_length, unsigned char** pcm_out, int* pcm_length)
	{
		lame_t lame = lame_init();
		lame_set_decode_only(lame, 1);

		if(lame_init_params(lame) == -1) {
			NSLOG("%s", "FATAL ERROR: parameters failed to initialize properly in lame. Aborting!\n");
			return -1;
		}

		char * buffer = (char*)malloc(mp3_length * 16);
		//memset(buffer, 0, sizeof(char) * BUF_SIZE);

		hip_t hip = hip_decode_init();
		
		mp3data_struct mp3data;
		memset(&mp3data, 0, sizeof(mp3data));
		
		bool got_header = false;
		int samples;
		int nChannels = -1;
		int nSampleRate = -1;

		unsigned char* mp3_buf = mp3_in;
		int mp3_len = 0, read = MP3_SIZE;
		
		static short int pcm_l[PCM_SIZE], pcm_r[PCM_SIZE];
		unsigned int pcm_len = 0;
		
		while((mp3_buf - mp3_in) < mp3_length)	{

			mp3_len = read = MIN(MP3_SIZE, mp3_in + mp3_length - mp3_buf);

			do {
				if( !got_header ) {
					samples = hip_decode1_headers(hip, mp3_buf, mp3_len, pcm_l, pcm_r, &mp3data);

					if(mp3data.header_parsed == 1)  { //header is gotten
						got_header = true;
						nChannels = mp3data.stereo;
						nSampleRate = mp3data.samplerate;
						if (nChannels != 2 || nSampleRate != 44100)	{
							//NSLOG("Warnning: decode mp3 with channels = %d, samplerate = %d", nChannels, nSampleRate);
							NSLOG("Error: mp3 data must be 2 stereo channels and 44100 sample rates!");
							hip_decode_exit(hip); lame_close(lame); free(buffer);
							return -1;
						}
						// NSLOG("decode: %d, %d, %d", mp3data.bitrate, mp3data.framesize, mp3data.totalframes);
					}
				}
				else {
					samples = hip_decode1(hip, mp3_buf, mp3_len, pcm_l, pcm_r);
				}

				// NSLOG("decode: samples = %d", samples);

				if(samples > 0) {
					for(int i = 0 ; i < samples; i++) {
						//fwrite((char*)&pcm_l[i], sizeof(char), sizeof(pcm_l[i]), pcm);
						memcpy(buffer + pcm_len, &pcm_l[i], sizeof(pcm_l[i]));
						pcm_len += sizeof(pcm_l[i]);

						if(nChannels == 2) {
							//fwrite((char*)&pcm_r[i], sizeof(char), sizeof(pcm_r[i]), pcm);
							memcpy(buffer + pcm_len, &pcm_r[i], sizeof(pcm_r[i]));
							pcm_len += sizeof(pcm_r[i]);
						}
					}
				}

				mp3_len = 0;

			} while(samples > 0);

			mp3_buf += read;
		}

		// output result
		*pcm_length = pcm_len;
		*pcm_out = (unsigned char *)malloc(sizeof(char) * pcm_len);
		memcpy(*pcm_out, buffer, pcm_len);

		hip_decode_exit(hip);
		lame_close(lame);

		free(buffer);

		return 0;
	}
};

