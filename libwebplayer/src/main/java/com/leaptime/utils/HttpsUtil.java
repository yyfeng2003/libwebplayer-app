package com.leaptime.utils;

import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.UnrecoverableKeyException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.HttpVersion;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ClientConnectionManager;
import org.apache.http.conn.scheme.PlainSocketFactory;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.scheme.SchemeRegistry;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.conn.tsccm.ThreadSafeClientConnManager;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.CoreConnectionPNames;
import org.apache.http.params.HttpParams;
import org.apache.http.params.HttpProtocolParams;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;

import android.app.AlertDialog;
import android.content.DialogInterface;
import android.util.Log;

public class HttpsUtil {
	
	private static final String TAG = "HttpsUtil";

	public static String httpGet(final String url, final String params) {
		String fullUrl = url;
		if (params != null || !params.isEmpty())
			fullUrl += "?" + params;

		byte[] res = _httpGet(fullUrl);
		return res != null ? new String(res) : null;
	}

	public static String httpPost(final String url, final String params) {
		byte[] res = _httpPost(url, params, "application/x-www-form-urlencoded");
		return res != null ? new String(res) : null;
	}

	public static String httpPostJson(final String url, final String params) {
		byte[] res = _httpPost(url, params, "application/json");
		return res != null ? new String(res) : null;
	}

	/**
	 * return json object from url
	 * @param url
	 * @return
	 */
	public static JSONObject getJsonFromUrl(String url) {
		byte[] bytes = _httpGet(url);

		try {
			if (bytes != null) {
				return new JSONObject(new String(bytes));
			}
		} catch(Exception e) {
		}

		return null;
	}

	private static byte[] _httpGet(final String url) {
		if (url == null || url.length() == 0) {
			Log.e(TAG, "httpGet, url is null");
			return null;
		}

		HttpClient httpClient = getNewHttpClient();

		httpClient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT,8000);//连接时间
		httpClient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT,8000);//数据传输时间

		HttpGet httpGet = new HttpGet(url);

		try {
			HttpResponse resp = httpClient.execute(httpGet);
			if (resp.getStatusLine().getStatusCode() != HttpStatus.SC_OK) {
				Log.e(TAG, "httpGet fail, status code = " + resp.getStatusLine().getStatusCode());
				return null;
			}

			return EntityUtils.toByteArray(resp.getEntity());

		} catch (Exception e) {
			Log.e(TAG, "httpGet exception, e = " + e.getMessage());
			e.printStackTrace();
			return null;
		}
	}

	/**
	 *
	 * @param url
	 * @param entity
	 * @param contentType: application/x-www-form-urlencoded,  application/json
	 * @return
	 */
	private static byte[] _httpPost(String url, String entity, String contentType) {
		if (url == null || url.length() == 0) {
			Log.e(TAG, "httpPost, url is null");
			return null;
		}

		HttpClient httpClient = getNewHttpClient();

		httpClient.getParams().setParameter(CoreConnectionPNames.CONNECTION_TIMEOUT,8000);//连接时间
		httpClient.getParams().setParameter(CoreConnectionPNames.SO_TIMEOUT,8000);//数据传输时间

		HttpPost httpPost = new HttpPost(url);

		try {
			httpPost.setEntity(new StringEntity(entity));
			// httpPost.setHeader("Accept", "application/json");
			// httpPost.setHeader("Content-type", "application/json");
			httpPost.setHeader("Content-Type", contentType);
			httpPost.setHeader("Charset", "utf-8");

			HttpResponse resp = httpClient.execute(httpPost);
			if (resp.getStatusLine().getStatusCode() != HttpStatus.SC_OK) {
				Log.e(TAG, "httpGet fail, status code = " + resp.getStatusLine().getStatusCode());
				return null;
			}

			return EntityUtils.toByteArray(resp.getEntity());
		} catch (Exception e) {
			Log.e(TAG, "httpPost exception, e = " + e.getMessage());
			e.printStackTrace();
			return null;
		}
	}
	
	private static class SSLSocketFactoryEx extends SSLSocketFactory {      
	      
	    SSLContext sslContext = SSLContext.getInstance("TLS");      
	      
	    public SSLSocketFactoryEx(KeyStore truststore)
				throws NoSuchAlgorithmException, KeyManagementException, KeyStoreException, UnrecoverableKeyException {

	        super(truststore);
	      
	        TrustManager tm = new X509TrustManager() {
	      
	            public X509Certificate[] getAcceptedIssuers() {      
					return new X509Certificate[0];
	            }      
	      
				@Override
				public void checkClientTrusted(X509Certificate[] chain, String authType)
						throws java.security.cert.CertificateException {
				}

				@Override
				public void checkServerTrusted(X509Certificate[] chain,	String authType)
						throws java.security.cert.CertificateException {

					if (chain == null || chain.length == 0)
						throw new IllegalArgumentException("certificate is null or empty");

					if (authType == null || authType.length() == 0)
						throw new IllegalArgumentException("certificate auth type is null or empty");

					if (!authType.toUpperCase().contains("RSA"))
						throw new java.security.cert.CertificateException("certificate is not trusted");

					try {
						chain[0].checkValidity();
					}
					catch (Exception e) {
						throw new java.security.cert.CertificateException("Certificate is not valid or trusted");
					}
				}  
	        };      
	      
	        sslContext.init(null, new TrustManager[] { tm }, new SecureRandom());
	    }      
	      
		@Override
		public Socket createSocket(Socket socket, String host, int port, boolean autoClose) throws IOException, UnknownHostException {
			return sslContext.getSocketFactory().createSocket(socket, host,	port, autoClose);
		}

		@Override
		public Socket createSocket() throws IOException {
			return sslContext.getSocketFactory().createSocket();
		} 
	}  

	private static HttpClient getNewHttpClient() { 
	   try { 
	       KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType()); 
	       trustStore.load(null, null); 

	       SSLSocketFactory sf = new SSLSocketFactoryEx(trustStore); 
	       sf.setHostnameVerifier(SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER); 

	       HttpParams params = new BasicHttpParams(); 
	       HttpProtocolParams.setVersion(params, HttpVersion.HTTP_1_1); 
	       HttpProtocolParams.setContentCharset(params, HTTP.UTF_8); 

	       SchemeRegistry registry = new SchemeRegistry(); 
	       registry.register(new Scheme("http", PlainSocketFactory.getSocketFactory(), 80)); 
	       registry.register(new Scheme("https", sf, 443)); 

	       ClientConnectionManager ccm = new ThreadSafeClientConnManager(params, registry); 

	       return new DefaultHttpClient(ccm, params); 
	   } catch (Exception e) { 
	       return new DefaultHttpClient(); 
	   } 
	}
	
}
