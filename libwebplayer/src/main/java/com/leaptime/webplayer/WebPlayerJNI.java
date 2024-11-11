package com.leaptime.webplayer;

import android.content.Context;
import android.content.res.AssetManager;

public class WebPlayerJNI {
	
	public static native void surfaceCreated(Context ctx, AssetManager appAssets, String appPath, int width, int height, float density);

	public static native void surfaceChanged(int width, int height, float density);
	
	public static native void destroy();

	public static native void pause();

	public static native void resume();

	public static native void render();

	public static native void keyDown(int key_code);

	public static native void keyUp(int key_code);

	public static native void touch(int action, int pointerId, int x, int y);

	public static native void sensorChanged(float accle_x, float accle_y, float accle_z);

	public static native void eval(String script);

	public static native void loadUrl(String url);
	
	public static native String decryptText(String text);

	public static native int getFps();

	public static native void triggerGC();

	static {
		System.loadLibrary("webplayer");
	}

}