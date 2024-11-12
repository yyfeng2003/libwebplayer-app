<h2>README.md</h2>

- <a href="/README.md">English</a>
- <a href="/readme/README.zh-CN.md">简体中文</a>

<h2>1.概述</h2>

libwebplayer是一个轻量级、高性能的运行时库，用于在Android设备上运行HTML5游戏。支持的Android设备包括智能手机、电视机、游戏机和机顶盒等。

<h2>2.特性</h2>

- 可替代Android Webview运行HTML5游戏，但性能比Webview高出约2~3倍
- 运行时的库文件大小约为12M字节
- 主要用C++语言开发而成
- 使用了OpenGLES、OpenSLES和Android V8库
- 兼容HTML5规范
- 支持javascript ES6规范
- 支持安卓4.4+系统
- 支持armeabi-v7a和arm64-v8a
- 支持触摸、键盘、遥控器和游戏手柄的交互式操作
- 支持javascript和原生java之间的代码交互
- 支持websocket网络通讯
- 支持.html/.js/.json/.jpg/.png/.mp3/.ttf等媒体类型
- 支持运行基于HTML5 CANVAS和WebGL的HTML5游戏
- 支持运行由Construct2/3、Phaser（PIXI）、CreateJS、CocosCreator、Egret构建的HTML5游戏
- 支持游戏资产加密发布
- 暂不支持WebAudio

<h2>3.用法</h2>

- 将libwebplayer-release.aar文件放在Android游戏项目的libs目录中
  
- 将下述依赖代码放入您的游戏项目或模块的build.gradle文件中：
  <br/>
  ```
  dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar', '*.aar'])
  }
  ```
  
- 创建您的GameActivity，继承自WebPlayerActivity:
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
  
- 在您的HTML5游戏的index.html文件中，加入如下脚本代码以适配到WebPlayer：
  ```
   <body>
    ...
    <canvas id="MyGameCanvas"></canvas>
    ...
    
    <script>
    (function() {
        var canvas = document.getElementById('MyGameCanvas');
        window.screencanvas = canvas;
    })()
    </script>
    ...
  </body>
  ```
  
<h2>4. 补充</h2> 

- 由于WebPlayer运行库仍在优化和升级中，源代码尚未完全开放。
- 您可以在Demo Games 的\build\outputs\apk\release目录中找到Demo-Games-release.apk，在Android设备或模拟器上安装运行它，里面有四个HTML5演示游戏。
- libwebplayer已应用于100多个HTML5游戏。
- 演示项目Demo Games中的HTML5游戏代码来自互联网，请不要应用于商业目的。
- 参考项目: ejecta
- 请发送电子邮件至yyfeng2003@foxmail.com，如果您对此项目感兴趣并需要任何帮助。

  

