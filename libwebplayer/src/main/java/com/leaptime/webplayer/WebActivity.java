package com.leaptime.webplayer;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.http.SslError;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.ViewGroup;
import android.webkit.SslErrorHandler;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.RelativeLayout;

public class WebActivity extends Activity {

	private RelativeLayout frameLayout;
	private WebView webView;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		//activity layout
		frameLayout = new RelativeLayout(this);
		RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(
				ViewGroup.LayoutParams.MATCH_PARENT,
				ViewGroup.LayoutParams.MATCH_PARENT);
		frameLayout.setLayoutParams(params);

		configureWebView();

		setContentView(frameLayout);
		
		Intent intent = getIntent();
		String url = intent.getStringExtra("url");
		webView.loadUrl(url);
	}

	@Override
	protected void onDestroy() {
		frameLayout.removeAllViews();

		webView.stopLoading();
		webView.loadDataWithBaseURL(null, "", "text/html", "utf-8", null);
		webView.setWebChromeClient(null);
		webView.setWebViewClient(null);
		webView.clearCache(true);
		webView.clearHistory();
		webView.removeAllViews();
		webView.destroy();

		super.onDestroy();
	}
	
	@Override
	public boolean onKeyDown(int keyCode, KeyEvent event) {
		if ((keyCode == KeyEvent.KEYCODE_BACK) && webView.canGoBack()) {       
            webView.goBack();       
            return true;       
        }       
        return super.onKeyDown(keyCode, event);  
	}

	@SuppressLint("SetJavaScriptEnabled")
	private WebView configureWebView() {
		RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(
				ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);

		webView = new WebView(this);

		// init web view layout
		webView.setLayoutParams(params);
		// add web view to container
		frameLayout.addView(webView);

		//webView.setBackgroundColor(Color.TRANSPARENT);

		WebSettings settings = webView.getSettings();
		settings.setJavaScriptEnabled(true);
		settings.setUseWideViewPort(true);//设置此属性，可任意比例缩放
		settings.setLoadWithOverviewMode(true);
		settings.setSupportZoom(true);
		//settings.setCacheMode(WebSettings.LOAD_CACHE_ELSE_NETWORK); //优先使用缓存
		settings.setCacheMode(WebSettings.LOAD_NO_CACHE); //不使用缓存
		
		// create loading progress bar
		final ProgressDialog progressBar = ProgressDialog.show(this, null, null);
		progressBar.setContentView(new ProgressBar(this));
		
		webView.setWebViewClient(new WebViewClient() {
			@Override
			public boolean shouldOverrideUrlLoading(WebView view, String url) {
				view.loadUrl(url);
				return true;
			}
			
			@Override
			public void onPageFinished(WebView view, String url) {  
                //Log.i(TAG, "Finished loading URL: " +url);  
            }  
   
			@Override
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {  
                //Log.e(TAG, "Error: " + description);  
            }
            
            @Override
			public void onReceivedSslError(WebView view, final SslErrorHandler handler, SslError error) {
				String message = "SSL Certificate invalid.";
				switch (error.getPrimaryError()) {
					case SslError.SSL_UNTRUSTED:
						message = "The certificate authority is not trusted.";
						break;
					case SslError.SSL_EXPIRED:
						message = "The certificate has expired.";
						break;
					case SslError.SSL_IDMISMATCH:
						message = "The certificate Hostname mismatch.";
						break;
					case SslError.SSL_NOTYETVALID:
						message = "The certificate is not yet valid.";
						break;
				}
				message += " Do you want to continue anyway?";

				final AlertDialog.Builder builder = new AlertDialog.Builder(WebActivity.this);
				builder.setTitle("SSL Certificate Error");
				builder.setMessage(message);
				builder.setPositiveButton("continue", new DialogInterface.OnClickListener() {
					@Override
					public void onClick(DialogInterface dialog, int which) {
						handler.proceed();
					}
				});
				builder.setNegativeButton("cancel", new DialogInterface.OnClickListener() {
					@Override
					public void onClick(DialogInterface dialog, int which) {
						handler.cancel();
					}
				});
				final AlertDialog dialog = builder.create();
				dialog.show();
			}
		});
		
		webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (newProgress == 100) {
                	if (progressBar.isShowing()) {  
                        progressBar.dismiss();  
                    }  
                } else {
                	//loading...
                }
            }
        });
		
		return webView;
	}
}
