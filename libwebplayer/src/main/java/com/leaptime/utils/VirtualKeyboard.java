package com.leaptime.utils;


import android.content.Context;
import android.util.Log;
import android.util.SparseIntArray;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;
import java.util.ArrayList;

public class VirtualKeyboard extends WebSocketServer {

    private static final String TAG = VirtualKeyboard.class.getName();

    private static final int keys[] = {
        19, 38,		//UP
        20, 40,		//DOWN
        21, 37,		//LEFT
        22, 39,		//RIGHT
        23, 13,		//ENTER
        4,  27,		//BACK
        23, 96,		//ENTER
        4,  100		//BACK
    };
    private static SparseIntArray keyMap;

    private static String serviceUrl;

    private static ArrayList<Listener> listeners = new ArrayList<>();

    private static VirtualKeyboard instance;


    public static void init(Context context, int port) {
        if (instance == null) {
            String host = OS.getIP(context);
            instance = new VirtualKeyboard(host, port);

            try {
                instance.start();
            } catch (Exception e) {
                Log.e(TAG, e.getMessage());
            }
        }
    }

     private VirtualKeyboard(String host, int port) {
        super( new InetSocketAddress(host, port) );

        serviceUrl = String.format("ws://%s:%d", host, port);
        Log.d(TAG, serviceUrl);
    }

    public synchronized static void addListener(Listener listener) {
        if (listeners != null)
            listeners.add(listener);
    }

    public synchronized static void removeListener(Listener listener) {
        if (listeners != null)
            listeners.remove(listener);
    }

    public static String getServiceUrl() {
        return serviceUrl;
    }

    public static void destroy() {
        try {
            if (instance != null) {
                instance.stop();
                instance = null;
            }
        } catch (Exception e) {
            Log.e(TAG, e.getMessage());
        }

        if (listeners != null) {
            listeners.clear();
            listeners = null;
        }
    }

    private static void initKeyMap() {
        keyMap = new SparseIntArray(8);

        for (int i = 0, l = keys.length; i < l; i += 2) {
            keyMap.put(keys[i+1], keys[i]);
        }
    }

    private static int translateKeyCode(int key) {
        if (keyMap == null) {
            initKeyMap();
        }

        int keyCode = keyMap.get(key);
        return (keyCode == 0 ? key : keyCode);
    }

     @Override
    public void onStart() {
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake ) {
        //System.out.println( conn.getRemoteSocketAddress().getAddress().getHostAddress() + " entered the room!" );
    }

    @Override
    public void onClose( WebSocket conn, int code, String reason, boolean remote ) {
    }

    @Override
    public void onMessage( WebSocket conn, String message ) {
        conn.send("\n");

        if (listeners.isEmpty()) return;

        int param = Integer.parseInt(message);
        int action = (int)(param & 0xFFFF) >> 8;
        int keyCode = (int)(param & 0x00FF);

        keyCode = translateKeyCode(keyCode);

        for (int i = 0, count = listeners.size(); i < count; i++) {
            Listener listener = listeners.get(i);
            if (listener.isActive()) {
                if (action == 1)
                    listener.onKeyDown(keyCode);
                else if (action == 0)
                    listener.onKeyUp(keyCode);
            }
        }
    }
/*
	@Override
	public void onFragment( WebSocket conn, Framedata fragment ) {
		System.out.println( "received fragment: " + fragment );
	}
*/

    @Override
    public void onError( WebSocket conn, Exception ex ) {
        //ex.printStackTrace();
        if( conn != null ) {
            // some errors like port binding failed may not be assignable to a specific websocket
        }
    }



    /**
     *
     */
    public interface Listener {
        boolean isActive();
        void onKeyDown(int keyCode);
        void onKeyUp(int keyCode);
    }
}
