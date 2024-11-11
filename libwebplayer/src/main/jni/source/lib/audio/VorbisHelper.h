/*
 * Taps of Fire
 * Copyright (C) 2009 Dmitry Skiba
 * 
 * This program is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as 
 * published by the Free Software Foundation, either version 3 of 
 * the License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
*/

#include <stdio.h>
#include <errno.h>
#include "ivorbisfile.h"

///////////////////////////////////////////////// VorbisHelper

class VorbisHelper {

public:

	static int decode(FILE *in, int16_t **pcmbuffer, int *length)
	{
		OggVorbis_File vf;
		if (ov_open(in, &vf, NULL, 0) < 0) {
			NSLOG("%s: %d: Error - Failed to open as vorbis\n",	__FILE__, __LINE__);
			return -1;
		}

		vorbis_info *vi = ov_info(&vf, -1);
		int nchannels = vi->channels;
		int sample_rate = vi->rate;
		if (nchannels != 2 || sample_rate != 44100)	{
			//NSLOG("Warn: decode ogg - channels = %d, samplerate = %d!", nchannels, sample_rate);
			NSLOG("Error: ogg data must be 2 stereo channels and 44100 sample rates!");
			return -1;
		}

		long nsamples = (long)ov_pcm_total(&vf, -1);
		long size = sizeof(int16_t) * nsamples * nchannels;
		// NSLOG("ogg decode: %d, %d, %ld, %ld", nchannels, sample_rate, nsamples, size);

		unsigned char *bufferptr = (unsigned char *)malloc(size);
		if (bufferptr == NULL) {
			NSLOG("%s: %d: Error - Failed to allocate memory\n", __FILE__, __LINE__);
			return -1;
		}
		memset(bufferptr, 0, size);

		*pcmbuffer = (int16_t *)bufferptr;
		*length = size;

        long left = size;
		char buf[4096] = {0};
		int current_section = 0;
		int ret;
		while ((ret = ov_read(&vf, buf, sizeof(buf), &current_section)) != 0) {
			if (ret > 0 ) {
                if (ret <= left) {
                    memcpy(bufferptr, buf, ret);
                    bufferptr += ret;
                    left -= ret;
                }
                else {
                    memcpy(bufferptr, buf, left);
                    NSLOG("ov_read error: left %ld bytes not read!", left);
                    break;
                }
            }
		}

		/* ov_clear closes the file, so don't fclose here, even though we fopen()ed.
		 * libvorbis is weird that way.
		 */
		ov_clear(&vf);

		return 0;
	}
};

