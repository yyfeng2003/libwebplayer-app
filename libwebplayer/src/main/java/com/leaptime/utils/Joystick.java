package com.leaptime.utils;

import android.view.KeyEvent;
import android.view.MotionEvent;

public class Joystick {

    private static Listener listener;

    private static int lastKeyCode = 0;

    private static int[] dirKeyCodes = {
            KeyEvent.KEYCODE_W, KeyEvent.KEYCODE_S, KeyEvent.KEYCODE_A, KeyEvent.KEYCODE_D
    };

    public static void init(Listener listener) {
        Joystick.listener = listener;
    }

    public static void setListener(Listener listener) {
        Joystick.listener = listener;
    }

    public static boolean hasMapKeyCodes() {
        return DeviceKeyboard.hasMapKeyCodes(dirKeyCodes);
    }

    public static boolean handleGenericMotionEvent(MotionEvent event) {

        if (listener == null || !hasMapKeyCodes())
            return false;

        //手柄摇杆方向计算，并映射为W，S，A，D四个方向键
        float x = event.getX(), y = event.getY();
        int keyCode = 0;

        if ( Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
            keyCode = 0;
        }
        else if (x - y > 0 &&  x + y  < 0) {
            //up
            keyCode = KeyEvent.KEYCODE_W;
        }
        else if (x - y < 0 && x + y > 0) {
            //down
            keyCode = KeyEvent.KEYCODE_S;
        }
        else if (x + y < 0 && x - y < 0) {
            //left
            keyCode = KeyEvent.KEYCODE_A;
        }
        else if (x - y > 0 && x + y > 0) {
            //right
            keyCode = KeyEvent.KEYCODE_D;
        }

        //Log.d(TAG, "onGenericMotionEvent>>>>>" + keyCode);

        if (keyCode != lastKeyCode) {
            if (lastKeyCode != 0) {
                listener.onKeyUp(lastKeyCode);
            }
            if (keyCode > 0) {
                listener.onKeyDown(keyCode);
            }
            lastKeyCode = keyCode;
        }

        return true;
    }


    /**
     *
     */
    public interface Listener {
        void onKeyDown(int keyCode);
        void onKeyUp(int keyCode);
    }
}
