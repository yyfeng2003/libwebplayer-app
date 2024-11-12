<h2>README.md</h2>

- <a href="/README.md">English</a>
- <a href="/readme/README.zh-CN.md">简体中文</a>

<h2>1.Overview</h2>

The libwebplayer is a light-weight and high-performance runtime library for running HTML5 game on Android device. 
Supported Android devices include smartphones, televisions, set-top boxes, etc., and supported Android systems include Android 4.4 to the latest version.

<h2>2.Features</h2>

- Alternative to Android Webview for running HTML5 games, but with performance 2~3 times higher than webview
- Mainly developed in C++
- Use OpenGLES, OpenSLES and Android V8
- Compatible with HTML5 specification
- Support ES6 javascript specification
- Support Android 4.4+
- Support armeabi-v7a and arm64-v8a
- Support interactive operation with touch, keyboard and joystick
- Support interactive code between javascript and native java
- Support websocket
- Support .html/.js/.json/.jpg/.png/.mp3/.ttf media types
- Support running HTML5 games based on HTML5 CANVAS and WebGL
- Support running HTML5 games build by Construct2/3, Phaser(PIXI), CreateJS, CocosCreator, Egret
- Support game assets encryption for release
- Not support WebAudio yet

<h2>3.Usage</h2>

- Put the libwebplayer-release.aar file in libs directory of your android game project
  
- Put the dependencies code into your module build.gradle file:
  <br/>
  ```
  dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])
  }
  ```
  
- Create your GameActivity extends from WebPlayerActivity:
  <br/>
  ```
  public class GameActivity extends WebPlayerActivity {
      String myGameUrl = "file:///android_asset/supertank-debug/index.html";
	  
      @Override
      public void onRenderReady() {
          loadUrl(myGameUrl);
      }
  }
  ```
  
- Adapt to WebPlayer in your game index.html
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
  ```
  
<h2>4. Additional</h2> 

- Due to the weblayer library still being optimized and upgraded, the source code is not yet fully open.
- You can try Demo-Games-release.apk under Demo-Games\build\outputs\apk\release directory. There are four demo HTML5 games in it.
- The libwebplayer has been applied in 100+ HTML5 games.
- The HTML5 game codes in the demo project are sourced from the internet and should not be used for commercial purposes.
- Reference projects: ejecta
- Please email to yyfeng2003@foxmail.com if you are interested in it and need any help.
  

