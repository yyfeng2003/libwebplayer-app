package com.leaptime.utils;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;
import android.os.Looper;
import android.widget.Toast;

/**
 * 异常处理类 
 */
public class CrashHandler implements Thread.UncaughtExceptionHandler {
	@SuppressWarnings("unused")
	private static final String TAG = CrashHandler.class.getSimpleName();
	
	private Context mContext;
	private Thread.UncaughtExceptionHandler defalutHandler;

	public CrashHandler(Context context) {
		mContext = context.getApplicationContext();
		defalutHandler = Thread.getDefaultUncaughtExceptionHandler();
		// 获取系统默认的UncaughtException处理器
		Thread.setDefaultUncaughtExceptionHandler(this);
		// 设置该CrashHandler为程序的默认处理器
	}

	@Override
	public void uncaughtException(Thread thread, Throwable ex) {
		boolean hasHandle = handleException(ex);
		// 是否处理
		if (!hasHandle && defalutHandler != null) {
			defalutHandler.uncaughtException(thread, ex);
			// 如果用户没有处理则让系统默认的异常处理器来处理
		} else {
			android.os.Process.killProcess(android.os.Process.myPid());
			System.exit(1);
		}

	}

	/**
	 * 定制的异常处理
	 * 
	 * @param ex
	 * @return
	 */
	protected boolean handleException(final Throwable ex) {
		if (ex == null)
			return false;

		new Thread() {
			@Override
			public void run() {
				Looper.prepare();
				
				StringBuilder sb = new StringBuilder();
				sb.append(getStackInfo(ex));
				sb.append(getExceptionInfo(ex));
				//saveToFile(sb.toString());
				
				// String err = "[" + ex.getMessage() + "]";
				Toast.makeText(mContext, "程序出现异常,5秒后自动退出", Toast.LENGTH_LONG).show();
				
				Looper.loop();
			}
		}.start();

		return true;
	}

	/**
	 * 获取异常的出错信息
	 */
	public static String getExceptionInfo(Throwable ex) {
		Writer writer = new StringWriter();
		PrintWriter printWriter = new PrintWriter(writer);
		ex.printStackTrace(printWriter);
		
		Throwable cause = ex.getCause();
		while (cause != null) {
			cause.printStackTrace(printWriter);
			cause = cause.getCause();
		}
		printWriter.close();
		
		return writer.toString();
	}
	
	/**
	 * 获取异常的堆栈信息
	 */
	public static String getStackInfo(Throwable e) {
		JSONArray traces = new JSONArray();
		
		StackTraceElement[] stackTrace = e.getStackTrace();
		for (StackTraceElement element : stackTrace) {
			JSONObject trace = new JSONObject();
			try {
				trace.put("file", element.getFileName());
				trace.put("line", element.getLineNumber());
				trace.put("class", element.getClassName());
				trace.put("method", element.getMethodName());
				traces.put(trace);
			} catch (JSONException e1) {
				e1.printStackTrace();
			}
		}

		return traces.toString();
	}
	
}
