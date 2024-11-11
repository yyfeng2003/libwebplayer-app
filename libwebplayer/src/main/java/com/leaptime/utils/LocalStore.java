package com.leaptime.utils;

import java.util.Map;

import android.content.Context;
import android.content.SharedPreferences;
import android.content.SharedPreferences.Editor;

public class LocalStore {
	
	@SuppressWarnings("unused")
	private static final String Tag = LocalStore.class.getName();

	private static SharedPreferences pref;
	
	public static void init(Context context) {
		if (pref == null) {
			pref = context.getSharedPreferences("localstore", Context.MODE_PRIVATE);
		}
	}
	
	public static String getItem(String id) {
		String defaultval = null;
		String value = pref.getString(id, defaultval);
		//Log.i(Tag, "localStorage getItem: " + id + " = " + value);
		return value;
	}

	public static void setItem(String id, String value) {
		//Log.i(Tag, "localStorage setItem: " + id + " = " + value);
		SharedPreferences.Editor editor = pref.edit();
		editor.putString(id, value);
		editor.commit();
	}


	public static void removeItem(String id) {
		//Log.i(Tag, "localStorage removeItem: " + id);
		SharedPreferences.Editor editor = pref.edit();
		editor.remove(id);
		editor.commit();
	}
	

	public static void clear(String prefix) {
		//Log.i(Tag, "localStorage clear: " + prefix);
		Editor editor = pref.edit();
		Map<String, ?> items = pref.getAll();
		for (String key : items.keySet()) {  
			if (key.startsWith(prefix)) {
				editor.remove(key);
			}
		} 
		editor.commit();

		//editor.clear();
		//editor.commit();
	}

	/** Not exposed to JS, used only to abstract away Ouya vs Android storage,
	 * in case we implement Ouya storage. */
	public static Map<String,?> storeGetAll() {
		return pref.getAll();
	}
	
	
	
	

	
//	public static void length(Uri uri, OutputStream out) throws JSONException {
//		Map<String,?> map = pref.getAll();
//		
//		JSONObject response = new JSONObject();
//		response.put("length", map.size());
//		// result
//		NativeInterface.handleResponse(response, out);
//	}
//
//	public static void key(Uri uri, OutputStream out) throws JSONException {
//		int index = Integer.parseInt(uri.getQueryParameter("index"));
//		
//		JSONObject response = new JSONObject();
//		
//		Map<String,?> map = pref.getAll();
//		Iterator entries = map.entrySet().iterator();  
//		while (entries.hasNext()) {
//		    Map.Entry entry = (Map.Entry) entries.next();
//		    if (index-- == 0) {
//				response.put("key", (String)entry.getKey());
//				// result
//				NativeInterface.handleResponse(response, out);
//				return;
//		    }
//		}
//		
//		//not exist
//		response.put("key", null);
//		NativeInterface.handleResponse(response, out);
//	}
//
//	public static void getItems(Uri uri, OutputStream out) throws JSONException {
//		JSONArray items = new JSONArray();
//		
//		Map<String,?> map = pref.getAll();
//		Iterator entries = map.entrySet().iterator();  
//		while (entries.hasNext()) {
//		    Map.Entry entry = (Map.Entry) entries.next();
//		    JSONObject item = new JSONObject();
//		    item.put((String)entry.getKey(), (String)entry.getValue());
//		    items.put(item);
//		}
//		
//		JSONObject response = new JSONObject();
//		response.put("items", items);
//
//		// result
//		NativeInterface.handleResponse(response, out);
//	}

}
