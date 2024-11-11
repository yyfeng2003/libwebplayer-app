package com.leaptime.utils;

import android.app.Activity;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.media.AudioManager;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.os.Environment;
import android.os.StatFs;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.view.Surface;

import com.leaptime.webplayer.WebActivity;

import org.json.JSONObject;

import java.io.File;
import java.lang.reflect.Field;


public class OS {

	private static final String TAG = OS.class.getName();
	
	public static final int OP_MOBILE = 1;
	public static final int OP_UNICOM = 2;
	public static final int OP_TELCOM = 3;

	private static Context context;


	public static void init(Context ctx) {

		//Log.d(TAG, "Platform init...");

		context = ctx;

		DeviceKeyboard.init();

		/*if (isEmulator()) {
			System.exit(0);
		}*/
	}

	public static Context getContext() {
	    return context;
    }

	/**
	 * 获取设备信息 
	 */
	public static String getDeviceInfo() {
		JSONObject deviceInfo = new JSONObject();
		
		try {
			//获取应用的包名
			String app = context.getPackageName();
			deviceInfo.put("app", app);

			// 获取包管理器
			PackageManager pm = context.getPackageManager();
			// 获取包信息
			PackageInfo pi = pm.getPackageInfo(app, PackageManager.GET_ACTIVITIES);
			if (pi != null) {
				// 版本号
				String versionName = pi.versionName == null ? "null" : pi.versionName;
				// 版本代码
				String versionCode = pi.versionCode + "";
				// 将版本信息存放到 成员变量 Map<String, String> mInfos 中
				deviceInfo.put("versionName", versionName);
				deviceInfo.put("versionCode", versionCode);
			}
		} catch (Exception e) {
			Log.e(TAG, "an error occured when collect package info", e);
		}

		// 获取 Build 中定义的变量, 使用反射方式获取, 该类中定义了设备相关的变量信息
		Field[] fields = Build.class.getDeclaredFields();
		for (Field field : fields) {
			try {
				// 设置 Build 成员变量可访问
				field.setAccessible(true);
				deviceInfo.put(field.getName(), field.get(null).toString());
			} catch (Exception e) {
				Log.e(TAG, "an error occured when collect device info", e);
			}
		}
		
		return deviceInfo.toString();
	}
	
	/**
	 * 获取设备信息 
	 */
	public static String getDeviceSimpleInfo() {
		JSONObject deviceInfo = new JSONObject();
		
		try {
			deviceInfo.put("deviceId", getDeviceId());
			deviceInfo.put("deviceName", getDeviceName());

			
			//获取应用的包名
			String app = context.getPackageName();
			deviceInfo.put("package", app);

			// 获取包管理器
			PackageManager pm = context.getPackageManager();
			// 获取包信息
			PackageInfo pi = pm.getPackageInfo(app, PackageManager.GET_ACTIVITIES);
			if (pi != null) {
				deviceInfo.put("versionName", pi.versionName);
				deviceInfo.put("versionCode", pi.versionCode);
			}
		} catch (Exception e) {
			Log.e(TAG, "an error occured when collect package info", e);
		}
		
		return deviceInfo.toString();
	}

	public static String getDeviceId() {
		WifiManager wifi = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
		WifiInfo info = wifi.getConnectionInfo();
		String mac = info.getMacAddress();
		return mac != null ? String.valueOf(mac.hashCode() & Integer.MAX_VALUE) : null;
	}

	public static String getDeviceMac() {
		WifiManager wifi = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
		WifiInfo info = wifi.getConnectionInfo();
		String mac = info.getMacAddress();
		return mac != null ? mac : "";
	}
	
    public static String getDeviceName(){
    	//return Build.BRAND;  /*设备厂商*/
        return Build.MODEL;		/*设备名称*/
    }

	public static int getNetworkProvider() {

		TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
		String operator = telephonyManager.getSimOperator();
		if (operator == null)
			return -1;

		if (operator.startsWith("46000") || operator.startsWith("46002") || operator.startsWith("46007")) {
			return OP_MOBILE;
		} else if (operator.startsWith("46001")) {
			return OP_UNICOM;
		} else if (operator.startsWith("46003")) {
			return OP_TELCOM;
		}

		return -1;
	}

	public static String getPackageName() {
		return context.getPackageName();
	}

	public static String getAppName() {
		try {
			PackageInfo pi = context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
			int labelRes = pi.applicationInfo.labelRes;
			return context.getResources().getString(labelRes);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 获取版本号
	 * 
	 * @return
	 */
	public static int getVersionCode() {
		try {
			String pn = context.getPackageName();
			PackageManager pm = context.getPackageManager();
			return pm.getPackageInfo(pn, 0).versionCode;
		} catch (NameNotFoundException e) {
			return 0;
		}
	}

	/**
	 * 获取版本名称
	 * 
	 * @return
	 */
	public static String getVersionName() {
		try {
			PackageInfo pi = context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
			return pi.versionName;
		} catch (NameNotFoundException e) {
			e.printStackTrace();
		}
		return "1.0.0";
	}

	public static String getLanguage() {
		String lan = context.getResources().getConfiguration().locale.getLanguage();
		return lan.endsWith("zh") ? "zh" : "en";
	}

	public static void ajustMediaVolume(int direction) {
		direction = (direction > 0 ? AudioManager.ADJUST_RAISE : AudioManager.ADJUST_LOWER);
		AudioManager audioManager = (AudioManager) context.getSystemService(Service.AUDIO_SERVICE);
		audioManager.adjustStreamVolume(AudioManager.STREAM_MUSIC, direction, AudioManager.FLAG_PLAY_SOUND
				| AudioManager.FLAG_SHOW_UI);
	}

	public static String getIP(Context context) {
		WifiManager wifiManager = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
		if (!wifiManager.isWifiEnabled()) {
			//wifiManager.setWifiEnabled(true);
			return null;
		}

		WifiInfo wifiInfo = wifiManager.getConnectionInfo();
		int ipAddress = wifiInfo.getIpAddress();

		return (ipAddress & 0xFF) + "." +
				((ipAddress >> 8) & 0xFF) + "." +
				((ipAddress >> 16) & 0xFF) + "." +
				(ipAddress >> 24 & 0xFF);

	}

	public static boolean isNetworkAvailable() {

		ConnectivityManager connectivityManager = (ConnectivityManager) context
				.getSystemService(Context.CONNECTIVITY_SERVICE);

		NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();

		return activeNetworkInfo != null && activeNetworkInfo.isConnected();
	}

	/**
	 * @return 返回boolean ,是否为wifi网络
	 *
	 */
	public static boolean hasWifiConnection() {

		ConnectivityManager connectivityManager = (ConnectivityManager) context.
				getSystemService(Context.CONNECTIVITY_SERVICE);

		NetworkInfo networkInfo = connectivityManager.getNetworkInfo(ConnectivityManager.TYPE_WIFI);

		//是否有网络并且已经连接
		return (networkInfo != null && networkInfo.isConnectedOrConnecting());
	}

	public static boolean isExternalStorageWritable() {
		String state = Environment.getExternalStorageState();
		if (Environment.MEDIA_MOUNTED.equals(state) || !Environment.isExternalStorageRemovable()) {
			return true;
		}
		return false;
	}


    /**
     * 得到外部存储空间的可用大小，单位：M
     * @return
     */
	public static long getFreeSpaceOfExternalStorage() {
		File externalStorageDir = Environment.getExternalStorageDirectory();
		long freeSpace = externalStorageDir.getFreeSpace() / 1024 / 1024;
		return freeSpace;
	}

    /**
     * 得到内部存储空间的可用大小，单位：M
     * @return
     */
    public static long getFreeSpaceOfInternalStorage(){
        String path = Environment.getDataDirectory().getPath();
        StatFs statFs = new StatFs(path);
        long blockSize = statFs.getBlockSize();
        //long totalBlocks = statFs.getBlockCount();
        long availableBlocks = statFs.getAvailableBlocks();
        return availableBlocks * blockSize / 1024 / 1024;
    }

	public static String getDiskCacheDir() {
	    String cachePath;

	    /*if (isExternalStorageWritable()) {
	        cachePath = context.getExternalCacheDir().getPath();
	    } else {  
	        cachePath = context.getCacheDir().getPath();
	    }*/

		cachePath = context.getCacheDir().getPath();
	    
	    if (!cachePath.endsWith("/")) cachePath += "/";

	    //Log.d(TAG, "getDiskCacheDir: " + cachePath);
	    
	    return cachePath;  
	}

	/**
	 * 获取设备缓存空间大小，单位M
	 * @param cacheDir
	 * @return
	 */
	public static long getAvailableCacheSpace(String cacheDir) {

		if (cacheDir.startsWith("/data/")) {
			return getFreeSpaceOfInternalStorage();
		} else {
			return getFreeSpaceOfExternalStorage();
		}
	}

	/**
	 * 判断当前设备是否是模拟器。如果返回TRUE，则当前是模拟器，不是返回FALSE
	 * 
	 * @param
	 * @return
	 */
	public static boolean isEmulator() {
		/*try {
			TelephonyManager tm = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
			String imei = tm.getDeviceId();

			if (imei == null || imei.equals("000000000000000"))
				return true;

			if (Build.MODEL.equals("sdk") || Build.MODEL.equals("google_sdk"))
				return true;

		} catch (Exception e) {

		}*/

		return false;
	}

	public static int getOrientation() {

		int degrees = 0;
		int rotation = ((Activity) context).getWindowManager().getDefaultDisplay().getRotation();

		switch (rotation) {
		case Surface.ROTATION_0:
			degrees = 0;
			break;
		case Surface.ROTATION_90:
			degrees = 90;
			break;
		case Surface.ROTATION_180:
			degrees = 180;
			break;
		case Surface.ROTATION_270:
			degrees = -90;
			break;
		}

		return degrees;
	}

	public static void lockOrientation(String orientation) {

		int ov = -1;

		if (orientation.indexOf("landscape") >= 0) {
			ov = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE;
		} else if (orientation.indexOf("portrait") >= 0) {
			ov = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT;
		} else {
			return;
		}

		((Activity) context).setRequestedOrientation(ov);
	}

	public static void unlockOrientation() {
		((Activity) context).setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
	}

	public static void openURL(final String url) {
		((Activity)context).runOnUiThread(new Runnable() {
			@Override
			public void run() {
				try {
					Thread.sleep(100);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
				Intent intent = new Intent(context, WebActivity.class);
				intent.putExtra("url", url);
				context.startActivity(intent); 
			}
		});
	}
	
	public static long getUsedMemorySize() {
	    long freeSize = 0L;
	    long totalSize = 0L;
	    long usedSize = -1L;
	    
	    try {
	        Runtime info = Runtime.getRuntime();
	        freeSize = info.freeMemory();
	        totalSize = info.totalMemory();
	        usedSize = totalSize - freeSize;
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return usedSize;
	}

	private static String appDataPath = null;

	public static String getAppDataPath() {

		if (appDataPath == null) {
			try {

			/*if (Platform.isExternalStorageWritable() && Platform.getFreeSpaceOfExternalStorage() >= 100) {  //100M
				appDataPath = Environment.getExternalStorageDirectory().getCanonicalPath();
				appDataPath += "/" + context.getPackageName();
			} else {
				String packageName = context.getPackageName();
				appDataPath = context.getPackageManager().getPackageInfo(packageName, 0).applicationInfo.dataDir;
			}*/

				String packageName = context.getPackageName();
				appDataPath = context.getPackageManager().getPackageInfo(packageName, 0).applicationInfo.dataDir;

				File file = new File(appDataPath);
				if (!file.exists()) {
					file.mkdirs();
				}
			}
			catch(Exception e) {
				System.out.println(e.getMessage());
			}
		}

		return appDataPath;
	}

}
