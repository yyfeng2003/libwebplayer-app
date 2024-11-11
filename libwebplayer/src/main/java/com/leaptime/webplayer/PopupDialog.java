package com.leaptime.webplayer;

import android.annotation.SuppressLint;
import android.app.Dialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.graphics.Point;
import android.graphics.drawable.BitmapDrawable;
import android.media.Image;
import android.os.Bundle;
import android.util.Log;
import android.view.Display;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.ImageView;

import java.io.IOException;
import java.io.InputStream;


/**
 * 自定义透明的试玩对话框
 */
public class PopupDialog extends Dialog {

    protected String imgUrl;

    /**
     *
     * @return
     */
    public static Dialog create(Context context, String imgUrl) {
        return new PopupDialog(context, imgUrl);
    }

    public PopupDialog(Context context, String imgUrl) {
        super(context, R.style.popup_dialog);

        this.imgUrl = imgUrl;
    }

    @Override
    @SuppressLint("NewApi")
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Context context = getContext();

        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.popup_dialog, null);// 得到加载view

        try {
            ImageView imageView = (ImageView)view.findViewById(R.id.img_dlg);
            InputStream is = context.getAssets().open(imgUrl);
            BitmapDrawable bd = (BitmapDrawable) BitmapDrawable.createFromStream(is, null);
            imageView.setBackground(bd);
        } catch (IOException e) {
            e.printStackTrace();
        }

        setContentView(view);
        getWindow().setLayout(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);

        // 虚拟键盘
        registerKeyboardReceiver();
    }

    @Override
    public void onStop() {
        super.onStop();

        // 虚拟键盘
        unregisterKeyboardReceiver();
    }

    @Override
    public void show() {
        super.show();

        /*try {
            //设置对话框的大小
            Window window = this.getWindow();
            WindowManager windowManager = window.getWindowManager();
            Display display = windowManager.getDefaultDisplay();
            Point outSize = new Point();
            display.getSize(outSize);

            WindowManager.LayoutParams lp = window.getAttributes();
            lp.width = (int) (outSize.x * 1.0); //设置宽度
            lp.height = (int) (outSize.y * 1.0); //设置宽度
            if (lp.width > 0 && lp.height > 0)
                window.setAttributes(lp);
        } catch(Exception e) {

        }*/
    }

    public boolean onKeyDown(int keyCode, KeyEvent event) {
        //Log.d("POPUP", "keydown: " + keyCode);

        if (keyCode == 4 || keyCode == 23 || keyCode == 66) {
            dismiss();
            return true;
        }

        return super.onKeyDown(keyCode, event);
    }


    /**
     * 虚拟键盘相关
     */
    private static final String KEYBOARD_RECEIVER_ACTION = "cn.hynoo.ott.KeyboardReceiver";
    private KeyboardReceiver keyboardReceiver;

    private void registerKeyboardReceiver() {
        keyboardReceiver = new KeyboardReceiver();
        IntentFilter filter = new IntentFilter(KEYBOARD_RECEIVER_ACTION);
        getContext().registerReceiver(keyboardReceiver, filter);
    }

    private void unregisterKeyboardReceiver() {
        getContext().unregisterReceiver(keyboardReceiver);
        keyboardReceiver = null;
    }

    private class KeyboardReceiver extends BroadcastReceiver {

        @Override
        public void onReceive(Context context, Intent intent) {
            if ( intent.getAction().equals(KEYBOARD_RECEIVER_ACTION) ){
                int keyAction = intent.getIntExtra("keyAction", 0);
                int keyCode = intent.getIntExtra("keyCode", 0);
                dispatchKeyEvent(new KeyEvent(keyAction, keyCode));
            }
        }
    }

}