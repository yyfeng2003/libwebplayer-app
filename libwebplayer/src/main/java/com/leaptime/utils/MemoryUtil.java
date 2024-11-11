package com.leaptime.utils;

import android.content.Context;
import android.os.Debug;
import android.util.Log;

public class MemoryUtil {

    private static final String TAG = MemoryUtil.class.getCanonicalName();
    private static final long INTERVAL_MS = 5000;       //seconds
    private static final int MEMORY_THRESHOLD = 90;     //MB

    private static Context context;
    private static Listener listener = null;
    private static long lastMemoryCheckTime = 0;

    public static void init(Context ctx, Listener lis) {
        context = ctx;
        listener = lis;
        lastMemoryCheckTime = System.currentTimeMillis();
    }

    public static void checkMemoryAndTriggerGC() {
        long now = System.currentTimeMillis();

        if (now - lastMemoryCheckTime > INTERVAL_MS) {
            lastMemoryCheckTime = now;

            Debug.MemoryInfo memoryInfo = new Debug.MemoryInfo();
            Debug.getMemoryInfo(memoryInfo);

            int totalPss = memoryInfo.getTotalPss() / 1024;   //MB
            Log.d(TAG, "memory used(MB): " + totalPss);

            if (totalPss >= MEMORY_THRESHOLD) {
                listener.onLowMemoryNotification();
            }
        }
    }

    public interface Listener {
        void onLowMemoryNotification();
    }
}