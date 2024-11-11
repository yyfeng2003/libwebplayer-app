/**********************************************************************************************
	* Author:	yyfeng
	* Date:		22th of May, 2016
	* Filename:	WaveHelper.h

	A decode wrapper for the LAME library
***********************************************************************************************/

class WaveHelper
{
	typedef struct {
		unsigned char riff[4];					// RIFF string
		unsigned int overall_size   ;           // overall size of file in bytes
		unsigned char wave[4];                  // WAVE string
		unsigned char fmt_chunk_marker[4];      // fmt string with trailing null char
		unsigned int length_of_fmt;             // length of the format data
		unsigned int format_type;               // format type. 1-PCM, 3- IEEE float, 6 - 8bit A law, 7 - 8bit mu law
		unsigned int channels;                  // no.of channels
		unsigned int sample_rate;               // sampling rate (blocks per second)
		unsigned int byterate;                  // SampleRate * NumChannels * BitsPerSample/8
		unsigned int block_align;               // NumChannels * BitsPerSample/8
		unsigned int bits_per_sample;           // bits per sample, 8- 8bits, 16- 16 bits etc
		unsigned char data_chunk_header [4];    // DATA string or FLLR string
		unsigned int data_size;                 // NumSamples * NumChannels * BitsPerSample/8 - size of the next chunk that will be read
	} WAVE_HEADER;

public:
	//Decode a mp3 to pcm
	static int decode(unsigned char* wav_in, int wav_length, unsigned char** pcm_out, int* pcm_length)
	{
		WAVE_HEADER h;
		memcpy(&h, wav_in, sizeof(h));

		if (h.format_type != 1)	{
			NSLOG("Warnning: decode wav audio with not pcm format!");
			return -1;
		}

		if (h.bits_per_sample != 16 || h.channels != 2 || h.sample_rate != 44100) {
			NSLOG("Warnning: decode wav audio with channels = %d, samplerate = %d", h.channels, h.sample_rate);
			return -2;
		}

		unsigned char* buffer = (unsigned char*)malloc(h.data_size);
		memcpy(buffer, wav_in + sizeof(h), h.data_size);

		*pcm_length = h.data_size;
		*pcm_out = buffer;

		return 0;
	}
};
