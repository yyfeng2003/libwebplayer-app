1.Overview
- The libwebplayer is a light-weight and high-performance runtime library for running HTML5 game on Android device. 
Supported Android devices include smartphones, televisions, set-top boxes, etc., and supported Android systems include Android 4.4 to the latest version.

2.Features
- developed with C++, Javascript and Java
- used opengles, opensles and android V8
- compatible with HTML5 specification
- support armeabi-v7a and arm64-v8a
- support HTML5 games based on CANVAS and WebGL
- support websocket
- support interactive operation with touch, keyboard and joystick
- support interactive code between javascript and native java
- support file encryption for release version
- support .jpg/.png/.mp3/.ttf media type
- support HTML5 games build by Construct2/3, Phaser(PIXI), CreateJS, CocosCreator, Egret
- does not support WebAudio

3.Usage
- put the libwebplayer-release.aar file in libs directory under your project
  
- put the dependencies code into your module build.gradle file:
  <br/>
  ```
  dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])
  }
  
- create your GameActivity extends from WebPlayerActivity:
  <br/>
  ```
  public class GameActivity extends WebPlayerActivity {
      @Override
      public void onRenderReady() {
          String myGameUrl = "file:///android_asset/supertank-debug/index.html";
          loadUrl(myGameUrl);
      }
  }
  
- adapt to WebPlayer in the index.html
  ```
   <body>
    ...
    <canvas id="GameCanvas"></canvas>
    
    <script>
    (function() {
        var canvas = document.getElementById('GameCanvas');
        window.screencanvas = canvas;
    })()
    </script>
    ...
  </body>
   
4. Additional
- Due to the weblayer library still being optimized and upgraded, the source code is not yet fully open.
- You can try Demo-Games-release.apk under Demo-Games\build\outputs\apk\release directory. There are four demo games in it.
- The libwebplayer has been applied in 100+ HTML5 games.
- The HTML5 game codes in the demo project are sourced from the internet and should not be used for commercial purposes.
- Reference projects: ejecta and some webgl projects
- Please email to yyfeng2003@foxmail.com if you are interested in it and need any help.
  

