package com.leaptime.webplayer.plugin;

import java.util.HashMap;

import org.json.JSONException;
import org.json.JSONObject;

import android.content.Context;

public class PluginManager {
	private final static String TAG = PluginManager.class.getName();
	
	private static HashMap<String, PluginHandler> pluginHandlers;

	public static void init(Context context) {
		if (pluginHandlers != null) 
			pluginHandlers.clear();
		else 
			pluginHandlers = new HashMap<String, PluginHandler>();
	}
	
	public static void registerPluginHandler(String name, PluginHandler handler) {
		if (pluginHandlers.containsKey(name)) {
			pluginHandlers.remove(name);
		}
		pluginHandlers.put(name, handler);
	}
	
	public static void unregisterPluginHandler(String name) {
		if (pluginHandlers.containsKey(name)) {
			pluginHandlers.remove(name);
		}
	}
	
	public static void clearPluginHandlers() {
		pluginHandlers.clear();
	}
	
	/**
	 * called from C++)
	 * @param method: xxx.xxxx
	 * @param params: json string
	 * @throws JSONException
	 * @return json string 
	 */
	public static void handleNativeRequest(String method, String params, int sessionId) 
			throws JSONException 
	{
		if (method != null) {
			PluginHandler handler = pluginHandlers.get(method);
			if (handler != null) { 
				handler.action(params, sessionId);
			} else {
				JSONObject response = new JSONObject();
				response.put("error", method + " not registered!");
				nativeResponse(response, sessionId);
			}
		}
	}

	public static void nativeResponse(int sessionId) {
		nativeResponse("{}", sessionId);
	}

	public static void nativeResponse(JSONObject data, int sessionId) {
		nativeResponse(data.toString(), sessionId);
	}
	
	public static native void nativeResponse(String data, int sessionId);

	/**
	 * inner interface
	 * @author yyfeng2003
	 *
	 */
	public interface PluginHandler {
	    void action(String params, int sessionId) throws JSONException;
	}
}