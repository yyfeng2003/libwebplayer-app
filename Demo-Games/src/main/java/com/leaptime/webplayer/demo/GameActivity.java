package com.leaptime.webplayer.demo;

import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.leaptime.utils.OS;
import com.leaptime.webplayer.WebPlayerActivity;
import com.leaptime.webplayer.plugin.PluginManager;

import org.json.JSONException;

public class GameActivity extends WebPlayerActivity {

	private static final String TAG = GameActivity.class.getName();

	private Handler handler = new Handler();

	private String mUrl;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		// get the url of game
		Bundle bundle = getIntent().getExtras();
		mUrl = bundle.getString("url");

		OS.init(this);

		registerPluginHandlers();

		if (BuildConfig.DEBUG) {
			showFps();
		}
	}

	@Override
	public void onDestroy() {
		super.onDestroy();

		if (handler != null) {
			handler.removeCallbacksAndMessages(null);
			handler = null;
		}
	}

	/**
	 * call on render thread
	 */
	@Override
	public void onRenderReady() {
		if (mUrl != null) {
			loadUrl(mUrl);
		}
	}
	
	private long exitTime = 0;

	@Override
	public boolean dispatchKeyEvent(KeyEvent event) {

		if (event.getAction() == KeyEvent.ACTION_DOWN) {
			if (event.getKeyCode() == KeyEvent.KEYCODE_BACK) {
				if ((System.currentTimeMillis() - exitTime) >= 500) {
					exitTime = System.currentTimeMillis();
					Toast.makeText(this, "Press the Back button twice to exit!", Toast.LENGTH_SHORT).show();
				} else {
					finish();
					return true;
				}
			}
		}

		return super.dispatchKeyEvent(event);
	}


	/**
	 * create a TextView on the top right of screen,
	 * used to show fps or trial time
	 * @return
	 */
	@Override
	public View createTopView() {
		if (BuildConfig.DEBUG) {
			FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
					ViewGroup.LayoutParams.WRAP_CONTENT,
					ViewGroup.LayoutParams.WRAP_CONTENT
			);
			params.gravity = Gravity.TOP | Gravity.RIGHT;
			params.rightMargin = 20;
			params.topMargin = 20;

			TextView textView = new TextView(this);
			textView.setTextSize(TypedValue.COMPLEX_UNIT_SP, 18);
			textView.setTextColor(Color.RED);
			textView.setLayoutParams(params);

			return textView;
		}

		return null;
	}

	private void showFps(){
		final TextView textView = (TextView)getTopView();
		if (textView == null) return;

		final int interval = 1000;  //one second

		handler.postDelayed(new Runnable() {
			@Override
			public void run() {
				textView.setText(String.format("FPS：%d", getFps()));
				handler.postDelayed(this, interval);
			}
		}, interval);
	}


	private void registerPluginHandlers() {
		PluginManager.registerPluginHandler("app.exit", new PluginManager.PluginHandler(){
			@Override
			public void action(String params, int sessionId) throws JSONException {
				PluginManager.nativeResponse(sessionId);

				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						 finish();
					}
				});
			}
		});

		PluginManager.registerPluginHandler("app.toast", new PluginManager.PluginHandler(){
			@Override
			public void action(final String params, int sessionId) throws JSONException {
				PluginManager.nativeResponse(sessionId);

				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						Toast.makeText(getApplicationContext(), params, Toast.LENGTH_SHORT).show();
					}
				});
			}
		});

		PluginManager.registerPluginHandler("app.showLoading", new PluginManager.PluginHandler() {
			@Override
			public void action(final String params, int sessionId) throws JSONException {
				PluginManager.nativeResponse(sessionId);

				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						// showLoading(params);
					}
				});
			}
		});

		PluginManager.registerPluginHandler("app.hideLoading", new PluginManager.PluginHandler() {
			@Override
			public void action(String params, int sessionId) throws JSONException {
				PluginManager.nativeResponse(sessionId);

				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						// hideLoading();
					}
				});
			}
		});
	}

	private void showLoadingDialog(String text) {
		// TODO
	}

	private void hideLoadingDialog() {
		// TODO
	}

}