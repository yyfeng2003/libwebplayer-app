package com.leaptime.webplayer;

import android.annotation.SuppressLint;
import android.app.ActionBar;
import android.app.Activity;
import android.content.ComponentCallbacks2;
import android.graphics.PixelFormat;
import android.graphics.Shader.TileMode;
import android.graphics.drawable.AnimationDrawable;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
//import android.support.v4.content.ContextCompat;
import android.util.Log;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.RelativeLayout;

import androidx.core.content.ContextCompat;

import com.leaptime.utils.Joystick;
import com.leaptime.webplayer.plugin.PluginManager;

import java.io.IOException;
import java.io.InputStream;


public class WebPlayerActivity extends Activity implements ComponentCallbacks2 {

	private static final String TAG = WebPlayerActivity.class.getName();

	protected FrameLayout layout;
	protected ImageView imageView; // background
	protected WebPlayerView canvasView;
	protected View topView;
	protected boolean isForeground = false;


	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		// Log.d(TAG, "onCreate...");

		PluginManager.init(this);

		// Use a RelativeLayout to overlap both SurfaceView and ImageView
		FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
				RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.MATCH_PARENT);
		layout = new FrameLayout(this);
		layout.setLayoutParams(params);

		// Setup background ImageView
		imageView = new ImageView(this);
		layout.addView(imageView, params);

		// create native canvas view
		canvasView = new WebPlayerView(this);
		canvasView.setZOrderOnTop(true);		//true: 才会显示背景,奇怪!!!
		//canvasView.setZOrderMediaOverlay(true);
		canvasView.getHolder().setFormat(PixelFormat.TRANSPARENT);
		canvasView.setListener(new WebPlayerRender.Listener() {
			@Override
			public void onReady() {
				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						WebPlayerActivity.this.onRenderReady();
					}
				});
			}
		});
		layout.addView(canvasView, params);

		// create top view
		topView = createTopView();
		if (topView != null) {
			layout.addView(topView);
			canvasView.setZOrderOnTop(false);	//不显示背景
		}

		//
		setContentView(layout);

		ActionBar ab = getActionBar();
		if (ab != null) ab.hide();

		Joystick.init(joystickListener);
	}

	@Override
	public void onResume() {
		super.onResume();

		// Log.d(TAG, "onResume...");

		if (canvasView != null) {
			canvasView.onResume();
		}

		isForeground = true;
	}

	@Override
	public void onPause() {
		super.onPause();

		// Log.d(TAG, "onPause...");

		if (canvasView != null) {
			canvasView.onPause();
		}

		isForeground = false;
	}

	@Override
	public void onTrimMemory(int level) {
		super.onTrimMemory(level);

		Log.w(TAG, "onTrimMemory...level = " + level);

		switch (level) {
			case TRIM_MEMORY_UI_HIDDEN:
				break;
			case TRIM_MEMORY_RUNNING_CRITICAL:
				// 系统内存非常低，正在杀死后台进程
				break;
			case TRIM_MEMORY_RUNNING_LOW:
				// 系统内存较低，但还没有到关键级别
				break;
			case TRIM_MEMORY_RUNNING_MODERATE:
				// 系统内存中等，但还没有到低级别
				break;
			case TRIM_MEMORY_BACKGROUND:
			case TRIM_MEMORY_MODERATE:
			case TRIM_MEMORY_COMPLETE:
				// 这些级别通常用于后台进程
				break;
		}
	}

	@Override
	public void onLowMemory() {
		super.onLowMemory();

		Log.w(TAG, "onLowMemory...");
	}

	@SuppressLint("NewApi")
	@Override
	public void onDestroy() {
		//Log.d(TAG, "onDestroy...");

		if (imageView != null) {
			imageView.setBackground(null);
			imageView = null;
		}

		layout.removeAllViews();

		super.onDestroy();
	}

	@Override
	public boolean dispatchKeyEvent(KeyEvent event) {
		// Log.d(TAG, "dispatchKeyEvent: " + event.getAction() + ", " + event.getKeyCode());

		if (canvasView != null)
			return canvasView.handleKeyEvent(event);
		else
			return false;
	}


	/**
	 * no Override
	 */
	public void onRenderReady() {
		//override by sub class
	}

	/**
	 * no Override, must be called in UI thread
	 * 已失效!!!
	 */
	@Deprecated
	public void destroy(boolean finish) {

		if (finish) finish();
	}

	protected View createTopView() {
		return null;
	}

	protected View getTopView() {
		return topView;
	}

	public void loadUrl(String url) {
		if (canvasView != null) {
			canvasView.loadUrl(url);
		}
	}

	public void eval(String script) {
		if (canvasView != null) {
			canvasView.eval(script);
		}
	}

	public int getFps() {
		return WebPlayerJNI.getFps();
	}

	@SuppressLint("NewApi")
	public void setBackground(int resId) {
		Drawable image = ContextCompat.getDrawable(this, resId);
		imageView.setBackground(image);
	}

	public void setBackground(AnimationDrawable drawable) {
		imageView.setBackground(drawable);
	}

	@SuppressLint("NewApi")
	public void setBackground(final String url, final boolean fromAsset, final boolean repeat) {

		runOnUiThread(new Runnable() {

			public void run() {
				try {
					BitmapDrawable bd = null;

					if (url != null) {
						if (fromAsset) {
							InputStream is = getAssets().open(url);
							bd = (BitmapDrawable)BitmapDrawable.createFromStream(is, null);
						} else {
							bd = (BitmapDrawable)BitmapDrawable.createFromPath(url);
						}

						if (bd != null && repeat) {
							bd.setTileModeXY(TileMode.REPEAT, TileMode.REPEAT);
							bd.setDither(true);
						}
					}

					imageView.setBackground(bd);

				} catch (IOException e) {
					e.printStackTrace();
				}
			}

		});

	}

	@SuppressLint("NewApi")
	public void clearBackground() {

		runOnUiThread(new Runnable() {

			public void run() {
				imageView.setBackground(null);
			}
		});
	}

	/**
	 * 手柄事件处理器
	 */
	@Override
	public boolean onGenericMotionEvent(MotionEvent event) {
		if (Joystick.handleGenericMotionEvent(event))
			return true;
		else
			return super.onGenericMotionEvent(event);
	}

	private Joystick.Listener joystickListener = new Joystick.Listener() {
		@Override
		public void onKeyDown(int keyCode) {
			// Log.d(TAG, "joystickListener.onKeyDown: " + keyCode);
			dispatchKeyEvent(new KeyEvent(KeyEvent.ACTION_DOWN, keyCode));
		}

		@Override
		public void onKeyUp(int keyCode) {
			// Log.d(TAG, "joystickListener.onKeyUp: " + keyCode);
			dispatchKeyEvent(new KeyEvent(KeyEvent.ACTION_UP, keyCode));
		}
	};

}
