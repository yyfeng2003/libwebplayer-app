package com.leaptime.utils;

import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.opengl.GLUtils;

import java.io.IOException;
import java.io.InputStream;

public class ImageUtil {

    // Bitmap can be destroyed after loading into GL.
    // Use bitmap.recycle() to free bitmap resources early

    // target is something like GLES20.GL_TEXTURE_2D
    // level is mipmap level (0=top level)
    // border: 0 = no border, 1 = border (used for GL_CLAMP)
    // formats and type are currently not supported
    public static int[]texImage2D(int target,int level,byte [] data,int border){
        System.out.println("Java: texImage2D: target="+target+" level="+level+" border="+border);
        Bitmap bitmap = BitmapFactory.decodeByteArray(data, 0, data.length);
        int[] dim = new int[] {bitmap.getWidth(),bitmap.getHeight()};
        if (bitmap == null) {
            System.err.println("Java: texImage2D: Could not decode bitmap!");
        } else {
            GLUtils.texImage2D(target, level, bitmap, border);
            bitmap.recycle();
        }
        return dim;
    }

    private static final String DATA_PREFIX = "data:image/png;base64,";

    public static int [] getImageDimensions(String assetname) {
        BitmapFactory.Options options = new BitmapFactory.Options();
        options.inJustDecodeBounds = true;
        try {

            if (assetname.startsWith(DATA_PREFIX)) {
                byte[] decodedByte = Base64.decode(assetname.substring(DATA_PREFIX.length()).toCharArray());
                BitmapFactory.decodeByteArray(decodedByte, 0, decodedByte.length, options);
            }
            else {
                //AssetFileDescriptor assetfd = assets.openFd(assetname);
                AssetManager assets = OS.getContext().getAssets();
                InputStream assetin = assets.open(assetname);
                //Returns null, sizes are in the options variable
                BitmapFactory.decodeStream(assetin, null, options);
            }
        } catch (IOException e) {
            System.err.println("Java: getImageDimensions: Could not decode bitmap "+assetname);
            return new int[] {0,0};
        }
        //System.out.println("Image:"+assetname+" "+ options.outWidth+" "+options.outHeight);
        return new int[] {options.outWidth,options.outHeight};
    }
}
