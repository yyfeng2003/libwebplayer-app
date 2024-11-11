package com.leaptime.utils;

import android.util.SparseIntArray;

public class DeviceKeyboard {

    private static SparseIntArray keyMap;

    //系统默认按键映射表
    private static final int keys[] = {
            //遥控器按键映射
            19, 38,		//UP
            20, 40,		//DOWN
            21, 37,		//LEFT
            22, 39,		//RIGHT
            23, 13,		//ENTER
            66, 13,		//ENTER
            82, 10,     //MENU
             1, 10,     //MENU
             4, 27,		//BACK
             7, 48,     //0
             8, 49,     //1
             9, 50,     //2
            10, 51,     //3
            11, 52,     //4
            12, 53,     //5
            13, 54,     //6
            14, 55,     //7
            15, 56,     //8
            16, 57,     //8
            //手柄功能按键映射
            997, 38,	//UP
            996, 40,	//DOWN
            995, 37,	//LEFT
            994, 39,	//RIGHT
            96,  13,    //96: BUTTON_A
            99,  13,    //99: BUTTON_X
            97,  27,    //97: BUTTON_B
            100, 27     //100:BUTTON_Y
    };

    public static void init() {
        if (keyMap == null) {
            initKeyMap();
        }
    }

    public static boolean hasMapKeyCodes(int[] keyCodes) {
        if (keyMap != null) {
            for (int i = 0, l = keyCodes.length; i < l; i++) {
                if (keyMap.get(keyCodes[i]) != 0)
                    return true;
            }
        }
        return false;
    }

    /**
     * keyCodes: [from,to, from,to, from,to...]
     * @param keyCodes
     */
    public static void mapKeyCodes(int[] keyCodes) {
        int length = keyCodes.length;

        if (length % 2 == 0) {
            for (int i = 0; i < length; i += 2) {
                mapKeyCode(keyCodes[i], keyCodes[i+1]);
            }
        }
    }

    public static void mapKeyCode(int from, int to) {
        if (keyMap != null) {
            keyMap.put(from, to);
        }
    }

    /**
     *
     * @param key
     *            : device key code
     * @return Android key code
     */
    public static int translateKeyCode(int key) {
        int keyCode = keyMap.get(key);
        return (keyCode == 0 ? key : keyCode);
    }

    private static void initKeyMap() {
        keyMap = new SparseIntArray(32);

        for (int i = 0, l = keys.length; i < l; i += 2) {
            keyMap.put(keys[i], keys[i+1]);
        }
    }
}
