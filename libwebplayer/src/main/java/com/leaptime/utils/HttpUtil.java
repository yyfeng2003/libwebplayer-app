package com.leaptime.utils;

import android.util.Log;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.URL;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.http.NameValuePair;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.message.BasicNameValuePair;
import org.json.JSONObject;

public class HttpUtil {

	private static final String TAG = HttpUtil.class.getName();

	public static String httpGet(String url, Map<String, String> params) {

		List<NameValuePair> lst = new ArrayList<NameValuePair>();
		if (params != null) {
			Iterator<String> keyItors = params.keySet().iterator();
			while (keyItors.hasNext()) {
				String key = keyItors.next();
				String val = params.get(key);
				lst.add(new BasicNameValuePair(key, val));
			}
		}

		return httpGet(url, lst);
	}

	public static String httpGet(String urlStr, List<NameValuePair> params) {

		String paramsEncoded = "";
		if (params != null) {
			paramsEncoded = URLEncodedUtils.format(params, "UTF-8");
		}

		return httpGet(urlStr, paramsEncoded);
	}

	public static String httpGet(String urlStr, String params) {
		String fullUrl = urlStr;
		if (params != null || !params.isEmpty())
			fullUrl += "?" + params;

		String result = null;
		URL url = null;
		HttpURLConnection connection = null;
		InputStreamReader in = null;

		try {
			// StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
			// StrictMode.setThreadPolicy(policy);

			url = new URL(fullUrl);
			connection = (HttpURLConnection) url.openConnection();
			connection.setConnectTimeout(8000);
			connection.setReadTimeout(8000);
			in = new InputStreamReader(connection.getInputStream());
			BufferedReader bufferedReader = new BufferedReader(in);
			StringBuffer strBuffer = new StringBuffer();
			String line = null;
			while ((line = bufferedReader.readLine()) != null) {
				strBuffer.append(line);
			}
			result = strBuffer.toString();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				connection.disconnect();
			}
			if (in != null) {
				try {
					in.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

		}
		return result;
	}

	public static String httpPost(String url, Map<String, String> params) {

		List<NameValuePair> lst = new ArrayList<NameValuePair>();
		if (params != null) {
			Iterator<String> keyItors = params.keySet().iterator();
			while (keyItors.hasNext()) {
				String key = keyItors.next();
				String val = params.get(key);
				lst.add(new BasicNameValuePair(key, val));
			}
		}

		return httpPost(url, lst);
	}

	public static String httpPost(String urlStr, List<NameValuePair> params) {

		String paramsEncoded = "";
		if (params != null) {
			paramsEncoded = URLEncodedUtils.format(params, "UTF-8");
		}

		return httpPost(urlStr, paramsEncoded);
	}

	public static String httpPost(String urlStr, String content) {
		return httpPost(urlStr, content, "application/x-www-form-urlencoded");
	}

	public static String httpPostJson(String urlStr, String content) {
		return httpPost(urlStr, content, "application/json");
	}

	public static String httpPost(String urlStr, String content, String contentType) {

		String result = null;
		URL url = null;
		HttpURLConnection connection = null;
		InputStreamReader in = null;
		try {
			//StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
			//StrictMode.setThreadPolicy(policy);

			url = new URL(urlStr);
			connection = (HttpURLConnection) url.openConnection();
			connection.setDoInput(true);
			connection.setDoOutput(true);
			connection.setRequestMethod("POST");
			connection.setRequestProperty("Content-Type", contentType);
			connection.setRequestProperty("Charset", "utf-8");
			DataOutputStream dop = new DataOutputStream(connection.getOutputStream());
			dop.writeBytes(content);
			dop.flush();
			dop.close();

			in = new InputStreamReader(connection.getInputStream());
			BufferedReader bufferedReader = new BufferedReader(in);
			StringBuffer strBuffer = new StringBuffer();
			String line = null;
			while ((line = bufferedReader.readLine()) != null) {
				strBuffer.append(line);
			}
			result = strBuffer.toString();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (connection != null) {
				connection.disconnect();
			}
			if (in != null) {
				try {
					in.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

		}
		return result;
	}


	/**
	 * return json object from url
	 * @param url
	 * @return
	 */
	public static JSONObject getJsonFromUrl(String url) {

		HttpURLConnection httpURLConnection = null;
		InputStream inputStream = null;
		
		try {
			URL aURL = new URL(url);
			if (!HttpUtil.testDNS(aURL.getHost()))
				return null;
			
			httpURLConnection = (HttpURLConnection) aURL.openConnection();
			httpURLConnection.setRequestMethod("GET");
			httpURLConnection.setRequestProperty("Accept-Encoding", "identity");
			httpURLConnection.setDoOutput(false);  
			httpURLConnection.setDoInput(true);  
			httpURLConnection.setConnectTimeout(8000);
			httpURLConnection.setReadTimeout(8000);
			httpURLConnection.connect();
			
			int responseCode = httpURLConnection.getResponseCode();
			if (responseCode != 200) return null;
			
			inputStream = httpURLConnection.getInputStream();
			if (inputStream == null) return null;
			
			String result = readInputStream(inputStream); 
			return new JSONObject(result);
			
		} 
		catch (Exception e) {
			Log.e(TAG, "", e);
		}
		finally {
			try {
				if (inputStream != null) {
					inputStream.close();
				}
				if (httpURLConnection != null) {
					httpURLConnection.disconnect();
				}
			} catch (Exception e) {
				Log.e(TAG, "", e);
			}
		}
		
		return null;
	}
	
	public static String readInputStream(InputStream is) {
		byte[] result;
		try {
			ByteArrayOutputStream baos = new ByteArrayOutputStream();
			byte[] buffer = new byte[1024];
			int len;
			while ((len = is.read(buffer)) != -1) {
				baos.write(buffer, 0, len);
			}
			is.close();
			baos.close();
			result = baos.toByteArray();

		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
		return new String(result);
	}
	
	
	/**
	 * Using this I can first test if the device can resolve the host name, then
	 * if it successful to the full connectivity test.
	 * 
	 * @param hostname
	 * @return
	 */
	public static boolean testDNS(String hostname) {
		try {
			DNSResolver dnsRes = new DNSResolver(hostname);
			Thread t = new Thread(dnsRes);
			t.start();
			t.join(1000);
			InetAddress inetAddr = dnsRes.get();
			return inetAddr != null;
		} catch (Exception e) {
			return false;
		}
	}

	private static class DNSResolver implements Runnable {
		private String domain;
		private InetAddress inetAddr;

		public DNSResolver(String domain) {
			this.domain = domain;
		}

		public void run() {
			try {
				InetAddress addr = InetAddress.getByName(domain);
				set(addr);
			} catch (UnknownHostException e) {
			}
		}

		public synchronized void set(InetAddress inetAddr) {
			this.inetAddr = inetAddr;
		}

		public synchronized InetAddress get() {
			return inetAddr;
		}
	}
}
