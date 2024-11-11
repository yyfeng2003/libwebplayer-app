package com.leaptime.utils;


import android.content.Context;
import android.util.DisplayMetrics;
import android.util.Log;
import android.util.SparseIntArray;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

import java.net.InetSocketAddress;
import java.util.ArrayList;

public class VirtualMouse extends WebSocketServer {

    private static final String TAG = VirtualMouse.class.getName();

    private static String serviceUrl;

    private static ArrayList<Listener> listeners = new ArrayList<>();

    private static VirtualMouse instance;

    private static int screenWidth;
    private static int screenHeight;


    public static void init(Context context, int port) {
        if (instance == null) {
            DisplayMetrics dm = context.getResources().getDisplayMetrics();
            float density = dm.density;
            screenWidth = (int)(dm.widthPixels/density);
            screenHeight = (int)(dm.heightPixels/density);

            String host = OS.getIP(context);
            instance = new VirtualMouse(host, port);

            try {
                instance.start();
            } catch (Exception e) {
                Log.e(TAG, e.getMessage());
            }
        }
    }

     private VirtualMouse(String host, int port) {
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

     @Override
    public void onStart() {
    }

    @Override
    public void onOpen(WebSocket conn, ClientHandshake handshake ) {
        //System.out.println( conn.getRemoteSocketAddress().getAddress().getHostAddress() + " entered the room!" );
        Log.d(TAG, "websocket server: onOpen...");
    }

    @Override
    public void onClose( WebSocket conn, int code, String reason, boolean remote ) {
        Log.d(TAG, "websocket server: onClose...");
    }

    @Override
    public void onError( WebSocket conn, Exception ex ) {
        //ex.printStackTrace();
        Log.d(TAG, "websocket server: onError..." + ex.getLocalizedMessage());

        if( conn != null ) {
            // some errors like port binding failed may not be assignable to a specific websocket
        }
    }

    /*@Override
    public void onMessage( WebSocket conn, String message ) {
        conn.send("\n");

        if (listeners.isEmpty()) return;
        String[] params = message.split(",");
        String action = params[0];
        float sx = Float.parseFloat(params[1]);
        float sy = Float.parseFloat(params[2]);
        int x = (int) (sx * screenWidth);
        int y = (int) (sy * screenHeight);

        for (int i = 0, count = listeners.size(); i < count; i++) {
            Listener listener = listeners.get(i);
            if (listener.isActive()) {
                if (action.equals("mousedown"))
                    listener.onMouseDown(x, y);
                else if (action.equals("mouseup"))
                    listener.onMouseUp(x, y);
                else if (action.equals("mousemove"))
                    listener.onMouseMove(x, y);
            }
        }
    }*/

    @Override
    public void onMessage( WebSocket conn, String message ) {
        // Log.d(TAG, "websocket server: onMessage..." + message);

        conn.send("\n");

        if (listeners.isEmpty()) return;

        String[] params = message.split(",");
        String action = params[0];
        int x = Integer.parseInt(params[1]);
        int y = Integer.parseInt(params[2]);

        for (int i = 0, count = listeners.size(); i < count; i++) {
            Listener listener = listeners.get(i);
            if (listener.isActive()) {
                if (action.equals("mousedown"))
                    listener.onMouseDown(x, y);
                else if (action.equals("mouseup"))
                    listener.onMouseUp(x, y);
                else if (action.equals("mousemove"))
                    listener.onMouseMove(x, y);
            }
        }
    }
/*
	@Override
	public void onFragment( WebSocket conn, Framedata fragment ) {
		System.out.println( "received fragment: " + fragment );
	}
*/

    /**
     *
     */
    public interface Listener {
        boolean isActive();
        void onMouseDown(int x, int y);
        void onMouseUp(int x, int y);
        void onMouseMove(int x, int y);
    }
}
