package com.leaptime.webplayer;

import android.content.Context;
import android.os.Handler;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;

import com.leaptime.utils.DeviceKeyboard;
import com.leaptime.utils.LocalStore;
import com.leaptime.utils.OS;

import javax.microedition.khronos.egl.EGL10;
import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.egl.EGLDisplay;


public class WebPlayerView extends EGLSurfaceView {

	private final static String TAG = WebPlayerView.class.getName();
	private WebPlayerRender mRenderer;
	
	class MyConfigChooser implements EGLSurfaceView.EGLConfigChooser {
	    @Override
	    public EGLConfig chooseConfig(EGL10 egl, EGLDisplay display) {
	        int attribs[] = {
	            EGL10.EGL_LEVEL, 0,
	            EGL10.EGL_RENDERABLE_TYPE, 4,  // EGL_OPENGL_ES2_BIT
	            EGL10.EGL_COLOR_BUFFER_TYPE, EGL10.EGL_RGB_BUFFER,
	            EGL10.EGL_RED_SIZE, 8,
	            EGL10.EGL_GREEN_SIZE, 8,
	            EGL10.EGL_BLUE_SIZE, 8,
				EGL10.EGL_ALPHA_SIZE, 8,
	            EGL10.EGL_DEPTH_SIZE, 24,
	            EGL10.EGL_STENCIL_SIZE, 8,
	            // EGL10.EGL_SAMPLE_BUFFERS, 1,
	            // EGL10.EGL_SAMPLES, 4,  // This is for 4x MSAA.
	            EGL10.EGL_NONE
	        };
	        
	        EGLConfig[] configs = new EGLConfig[1];
	        int[] configCounts = new int[1];
	        
	        egl.eglChooseConfig(display, attribs, configs, 1, configCounts);
	        
	        if (configCounts[0] == 0) {
	            // Failed! Error handling.
	            return null;
	        } else {
	            return configs[0];
	        }
	    }
	}	
	
	
	/**
	 * 
	 * @param context
	 */
	public WebPlayerView(Context context) {
		super(context);
		
		DisplayMetrics dm = getResources().getDisplayMetrics();
		int width = dm.widthPixels;
		int height = dm.heightPixels;
		float density = dm.density;
		
		// Sets OpenGLES 2.0 to be used
		setEGLContextClientVersion(2);
//		setEGLConfigChooser(8, 8, 8, 8, 24, 8);
		setEGLConfigChooser(new MyConfigChooser());
		setPreserveEGLContextOnPause(true);

		mRenderer = new WebPlayerRender(context, width, height, density);
		setRenderer(mRenderer);
		//setRenderMode(RENDERMODE_WHEN_DIRTY);

		requestFocus();
		setFocusableInTouchMode(true);
		 
		LocalStore.init(context);
		
		super.setOnTouchListener(touchListener);
	}
	
	@Override
	public void onPause() {
		if (mRenderer != null) {
			WebPlayerJNI.pause();
		}

		super.onPause();
	}

	@Override
	public void onResume() {
		super.onResume();

		if (mRenderer != null) {
			WebPlayerJNI.resume();
		}
	}

	/*@Override
	public void onDetachedFromWindow() {
		new Handler().postDelayed(new Runnable() {
			@Override
			public void run() {
				NativeCanvasView.super.onDetachedFromWindow();
			}
		}, 100);

		queueEvent(new Runnable() {
			@Override
			public void run() {
				NativeCanvasJNI.destroy();
			}
		});

		mRenderer.setListener(null);
		mRenderer = null;
	}*/


	@Override
	public void onDetachedFromWindow() {
		super.onDetachedFromWindow();

		mRenderer.setListener(null);
		mRenderer = null;
	}

	public void setListener(WebPlayerRender.Listener listener) {
		mRenderer.setListener(listener);
	}

	/**
	 * load html page from url	
	 * @param url
	 */
	public void loadUrl(String url) {
		WebPlayerJNI.loadUrl(url);
	}
	
	public void eval(String script) {
		WebPlayerJNI.eval(script);
	}
	
	/**
	 * called by app activity
	 * @param event
	 * @return
	 */
	public boolean handleKeyEvent(KeyEvent event) {
		int keyCode = event.getKeyCode();
		
		if (event.getAction() == KeyEvent.ACTION_DOWN) {
			if (keyCode == KeyEvent.KEYCODE_VOLUME_DOWN) {
				OS.ajustMediaVolume(-1);
			} 
			else if (keyCode == KeyEvent.KEYCODE_VOLUME_UP) {
				OS.ajustMediaVolume(1);
			} 
			WebPlayerJNI.keyDown(DeviceKeyboard.translateKeyCode(keyCode));
		} 
		else {
			WebPlayerJNI.keyUp(DeviceKeyboard.translateKeyCode(keyCode));
		}
		
		return true;
	}
	
	private OnTouchListener touchListener = new OnTouchListener() {

		@Override
		public boolean onTouch(View view, MotionEvent motionEvent) {

			int pointerIndex = motionEvent.getActionIndex();
			int pointerId = motionEvent.getPointerId(pointerIndex);
			int pointerX = (int) motionEvent.getX(pointerIndex);
			int pointerY = (int) motionEvent.getY(pointerIndex);
			int maskedAction = motionEvent.getActionMasked();
			
			//Log.d("libnativecanvas", "NativeCanvasView onTouch: " + pointerX + ", " + pointerY);
			
			switch (maskedAction) {
			case MotionEvent.ACTION_DOWN:
			case MotionEvent.ACTION_POINTER_DOWN:
				WebPlayerJNI.touch(MotionEvent.ACTION_DOWN, pointerId,  pointerX, pointerY);
				break;

			case MotionEvent.ACTION_UP:
			case MotionEvent.ACTION_POINTER_UP:	
				WebPlayerJNI.touch(MotionEvent.ACTION_UP, pointerId,  pointerX, pointerY);
				view.performClick();
				break;

			case MotionEvent.ACTION_MOVE:
				WebPlayerJNI.touch(MotionEvent.ACTION_MOVE, pointerId,  pointerX, pointerY);
				break;
			}

			// Get all touches, return true
			return true;
		}
	};
}
