package com.leaptime.webplayer;

import android.content.Context;
import android.content.res.AssetManager;
import android.util.Log;

import com.leaptime.utils.MemoryUtil;

import javax.microedition.khronos.egl.EGLConfig;
import javax.microedition.khronos.opengles.GL10;

public class WebPlayerRender implements EGLSurfaceView.Renderer {

	private static String TAG = WebPlayerRender.class.getName();

	private Context context;
	
	private AssetManager appAssets;
	private String appPath;
	
	private int width;
	private int height;
	private float density;
	
	private Listener listener;
	
	public WebPlayerRender(Context ctx, int width, int height, float density) {
		
		this.context = ctx;
		
		this.width = width;
		this.height = height;
		this.density = density;

		appPath = ctx.getFilesDir().getParent();
		appAssets = ctx.getResources().getAssets();
	}
	
	public void setListener(Listener listener) {
		this.listener = listener;
	}

	/**
	 * called in GL thread
	 */
	@Override
	public void onSurfaceCreated(GL10 gl, EGLConfig config) {
		String version = gl.glGetString(GL10.GL_VERSION);
		Log.w(TAG, "GL Version: " + version );
		// The version format is displayed as: "OpenGL ES <major>.<minor>"
		// followed by optional content provided by the implementation.

		WebPlayerJNI.surfaceCreated(context, appAssets, appPath, width, height, density);
		
		if (listener != null) {
			listener.onReady();
		}

		MemoryUtil.init(context, new MemoryUtil.Listener() {
			@Override
			public void onLowMemoryNotification() {
				WebPlayerJNI.triggerGC();
			}
		});
	}
	/**
	 * called in GL thread
	 */
	@Override
	public void onSurfaceChanged(GL10 gl, int width, int height) {
		
		/*EGL14.eglSurfaceAttrib(EGL14.eglGetCurrentDisplay(),
                EGL14.getCurrentSurface(EGL14.EGL_DRAW),
                EGL14.EGL_SWAP_BEHAVIOR,
                EGL14.EGL_BUFFER_PRESERVED);*/
		
		WebPlayerJNI.surfaceChanged(width, height, density);
	}


	/**
	 * called in GL thread
	 */
	@Override
	public void onDrawFrame(GL10 gl) {
		// Log.d(TAG, "onDrawFrame");

		WebPlayerJNI.render();

		/*if (stopped) {
			gl.glClearColor(0, 0, 0, 1);
			gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
		}*/

		MemoryUtil.checkMemoryAndTriggerGC();
	}

	/**
	 * 2021-12-18
	 * called in GL thread
     * custom interface on EGLSurfaceView.Renderer
	 */
	@Override
	public void onDestroy() {
		// Log.d(TAG, "onDestroy...");

        WebPlayerJNI.destroy();

		context = null;
		appAssets = null;
		listener = null;
	}

	public interface Listener {
		void onReady();
	}
}