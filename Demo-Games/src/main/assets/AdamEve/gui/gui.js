//md5
"use strict";function hex_md5(d){return binl2hex(core_md5(str2binl(d),d.length*chrsz))}function b64_md5(d){return binl2b64(core_md5(str2binl(d),d.length*chrsz))}function str_md5(d){return binl2str(core_md5(str2binl(d),d.length*chrsz))}function hex_hmac_md5(d,r){return binl2hex(core_hmac_md5(d,r))}function b64_hmac_md5(d,r){return binl2b64(core_hmac_md5(d,r))}function str_hmac_md5(d,r){return binl2str(core_hmac_md5(d,r))}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc")}function core_md5(d,r){d[r>>5]|=128<<r%32,d[14+(r+64>>>9<<4)]=r;for(var _=1732584193,m=-271733879,n=-1732584194,h=271733878,t=0;t<d.length;t+=16){var f=_,i=m,c=n,e=h;_=md5_ff(_,m,n,h,d[t+0],7,-680876936),h=md5_ff(h,_,m,n,d[t+1],12,-389564586),n=md5_ff(n,h,_,m,d[t+2],17,606105819),m=md5_ff(m,n,h,_,d[t+3],22,-1044525330),_=md5_ff(_,m,n,h,d[t+4],7,-176418897),h=md5_ff(h,_,m,n,d[t+5],12,1200080426),n=md5_ff(n,h,_,m,d[t+6],17,-1473231341),m=md5_ff(m,n,h,_,d[t+7],22,-45705983),_=md5_ff(_,m,n,h,d[t+8],7,1770035416),h=md5_ff(h,_,m,n,d[t+9],12,-1958414417),n=md5_ff(n,h,_,m,d[t+10],17,-42063),m=md5_ff(m,n,h,_,d[t+11],22,-1990404162),_=md5_ff(_,m,n,h,d[t+12],7,1804603682),h=md5_ff(h,_,m,n,d[t+13],12,-40341101),n=md5_ff(n,h,_,m,d[t+14],17,-1502002290),m=md5_ff(m,n,h,_,d[t+15],22,1236535329),_=md5_gg(_,m,n,h,d[t+1],5,-165796510),h=md5_gg(h,_,m,n,d[t+6],9,-1069501632),n=md5_gg(n,h,_,m,d[t+11],14,643717713),m=md5_gg(m,n,h,_,d[t+0],20,-373897302),_=md5_gg(_,m,n,h,d[t+5],5,-701558691),h=md5_gg(h,_,m,n,d[t+10],9,38016083),n=md5_gg(n,h,_,m,d[t+15],14,-660478335),m=md5_gg(m,n,h,_,d[t+4],20,-405537848),_=md5_gg(_,m,n,h,d[t+9],5,568446438),h=md5_gg(h,_,m,n,d[t+14],9,-1019803690),n=md5_gg(n,h,_,m,d[t+3],14,-187363961),m=md5_gg(m,n,h,_,d[t+8],20,1163531501),_=md5_gg(_,m,n,h,d[t+13],5,-1444681467),h=md5_gg(h,_,m,n,d[t+2],9,-51403784),n=md5_gg(n,h,_,m,d[t+7],14,1735328473),m=md5_gg(m,n,h,_,d[t+12],20,-1926607734),_=md5_hh(_,m,n,h,d[t+5],4,-378558),h=md5_hh(h,_,m,n,d[t+8],11,-2022574463),n=md5_hh(n,h,_,m,d[t+11],16,1839030562),m=md5_hh(m,n,h,_,d[t+14],23,-35309556),_=md5_hh(_,m,n,h,d[t+1],4,-1530992060),h=md5_hh(h,_,m,n,d[t+4],11,1272893353),n=md5_hh(n,h,_,m,d[t+7],16,-155497632),m=md5_hh(m,n,h,_,d[t+10],23,-1094730640),_=md5_hh(_,m,n,h,d[t+13],4,681279174),h=md5_hh(h,_,m,n,d[t+0],11,-358537222),n=md5_hh(n,h,_,m,d[t+3],16,-722521979),m=md5_hh(m,n,h,_,d[t+6],23,76029189),_=md5_hh(_,m,n,h,d[t+9],4,-640364487),h=md5_hh(h,_,m,n,d[t+12],11,-421815835),n=md5_hh(n,h,_,m,d[t+15],16,530742520),m=md5_hh(m,n,h,_,d[t+2],23,-995338651),_=md5_ii(_,m,n,h,d[t+0],6,-198630844),h=md5_ii(h,_,m,n,d[t+7],10,1126891415),n=md5_ii(n,h,_,m,d[t+14],15,-1416354905),m=md5_ii(m,n,h,_,d[t+5],21,-57434055),_=md5_ii(_,m,n,h,d[t+12],6,1700485571),h=md5_ii(h,_,m,n,d[t+3],10,-1894986606),n=md5_ii(n,h,_,m,d[t+10],15,-1051523),m=md5_ii(m,n,h,_,d[t+1],21,-2054922799),_=md5_ii(_,m,n,h,d[t+8],6,1873313359),h=md5_ii(h,_,m,n,d[t+15],10,-30611744),n=md5_ii(n,h,_,m,d[t+6],15,-1560198380),m=md5_ii(m,n,h,_,d[t+13],21,1309151649),_=md5_ii(_,m,n,h,d[t+4],6,-145523070),h=md5_ii(h,_,m,n,d[t+11],10,-1120210379),n=md5_ii(n,h,_,m,d[t+2],15,718787259),m=md5_ii(m,n,h,_,d[t+9],21,-343485551),_=safe_add(_,f),m=safe_add(m,i),n=safe_add(n,c),h=safe_add(h,e)}return Array(_,m,n,h)}function md5_cmn(d,r,_,m,n,h){return safe_add(bit_rol(safe_add(safe_add(r,d),safe_add(m,h)),n),_)}function md5_ff(d,r,_,m,n,h,t){return md5_cmn(r&_|~r&m,d,r,n,h,t)}function md5_gg(d,r,_,m,n,h,t){return md5_cmn(r&m|_&~m,d,r,n,h,t)}function md5_hh(d,r,_,m,n,h,t){return md5_cmn(r^_^m,d,r,n,h,t)}function md5_ii(d,r,_,m,n,h,t){return md5_cmn(_^(r|~m),d,r,n,h,t)}function core_hmac_md5(d,r){var _=str2binl(d);_.length>16&&(_=core_md5(_,d.length*chrsz));for(var m=Array(16),n=Array(16),h=0;h<16;h++)m[h]=909522486^_[h],n[h]=1549556828^_[h];var t=core_md5(m.concat(str2binl(r)),512+r.length*chrsz);return core_md5(n.concat(t),640)}function safe_add(d,r){var _=(65535&d)+(65535&r);return(d>>16)+(r>>16)+(_>>16)<<16|65535&_}function bit_rol(d,r){return d<<r|d>>>32-r}function str2binl(d){for(var r=Array(),_=(1<<chrsz)-1,m=0;m<d.length*chrsz;m+=chrsz)r[m>>5]|=(d.charCodeAt(m/chrsz)&_)<<m%32;return r}function binl2str(d){for(var r="",_=(1<<chrsz)-1,m=0;m<32*d.length;m+=chrsz)r+=String.fromCharCode(d[m>>5]>>>m%32&_);return r}function binl2hex(d){for(var r=hexcase?"0123456789ABCDEF":"0123456789abcdef",_="",m=0;m<4*d.length;m++)_+=r.charAt(d[m>>2]>>m%4*8+4&15)+r.charAt(d[m>>2]>>m%4*8&15);return _}function binl2b64(d){for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",_="",m=0;m<4*d.length;m+=3)for(var n=(d[m>>2]>>m%4*8&255)<<16|(d[m+1>>2]>>(m+1)%4*8&255)<<8|d[m+2>>2]>>(m+2)%4*8&255,h=0;h<4;h++)8*m+6*h>32*d.length?_+=b64pad:_+=r.charAt(n>>6*(3-h)&63);return _}var hexcase=0,b64pad="",chrsz=8;

//tween
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_Group=function(){this._tweens={},this._tweensAddedDuringUpdate={}};_Group.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(t,n){var e=Object.keys(this._tweens);if(0===e.length)return!1;for(t=void 0!==t?t:TWEEN.now();e.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<e.length;i++){var r=this._tweens[e[i]];r&&!1===r.update(t)&&(r._isPlaying=!1,n||delete this._tweens[e[i]])}e=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var TWEEN=new _Group;TWEEN.Group=_Group,TWEEN._nextId=0,TWEEN.nextId=function(){return TWEEN._nextId++},"undefined"==typeof window&&"undefined"!=typeof process?TWEEN.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?TWEEN.now=window.performance.now.bind(window.performance):void 0!==Date.now?TWEEN.now=Date.now:TWEEN.now=function(){return(new Date).getTime()},TWEEN.Tween=function(t,n){this._object=t,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=TWEEN.Easing.Linear.None,this._interpolationFunction=TWEEN.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=n||TWEEN,this._id=TWEEN.nextId()},TWEEN.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,n){return this._valuesEnd=t,void 0!==n&&(this._duration=n),this},start:function(t){this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==t?"string"==typeof t?TWEEN.now()+parseFloat(t):t:TWEEN.now(),this._startTime+=this._delayTime;for(var n in this._valuesEnd){if(this._valuesEnd[n]instanceof Array){if(0===this._valuesEnd[n].length)continue;this._valuesEnd[n]=[this._object[n]].concat(this._valuesEnd[n])}void 0!==this._object[n]&&(this._valuesStart[n]=this._object[n],this._valuesStart[n]instanceof Array==!1&&(this._valuesStart[n]*=1),this._valuesStartRepeat[n]=this._valuesStart[n]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(this._startTime+this._duration),this},stopChainedTweens:function(){for(var t=0,n=this._chainedTweens.length;t<n;t++)this._chainedTweens[t].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(t){var n,e,i;if(t<this._startTime)return!0;!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),e=(t-this._startTime)/this._duration,e=0===this._duration||e>1?1:e,i=this._easingFunction(e);for(n in this._valuesEnd)if(void 0!==this._valuesStart[n]){var r=this._valuesStart[n]||0,o=this._valuesEnd[n];o instanceof Array?this._object[n]=this._interpolationFunction(o,i):("string"==typeof o&&(o="+"===o.charAt(0)||"-"===o.charAt(0)?r+parseFloat(o):parseFloat(o)),"number"==typeof o&&(this._object[n]=r+(o-r)*i))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1===e){if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat){if("string"==typeof this._valuesEnd[n]&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo){var a=this._valuesStartRepeat[n];this._valuesStartRepeat[n]=this._valuesEnd[n],this._valuesEnd[n]=a}this._valuesStart[n]=this._valuesStartRepeat[n]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var s=0,u=this._chainedTweens.length;s<u;s++)this._chainedTweens[s].start(this._startTime+this._duration);return!1}return!0}},TWEEN.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},Back:{In:function(t){var n=1.70158;return t*t*((n+1)*t-n)},Out:function(t){var n=1.70158;return--t*t*((n+1)*t+n)+1},InOut:function(t){var n=2.5949095;return(t*=2)<1?t*t*((n+1)*t-n)*.5:.5*((t-=2)*t*((n+1)*t+n)+2)}},Bounce:{In:function(t){return 1-TWEEN.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*TWEEN.Easing.Bounce.In(2*t):.5*TWEEN.Easing.Bounce.Out(2*t-1)+.5}}},TWEEN.Interpolation={Linear:function(t,n){var e=t.length-1,i=e*n,r=Math.floor(i),o=TWEEN.Interpolation.Utils.Linear;return n<0?o(t[0],t[1],i):n>1?o(t[e],t[e-1],e-i):o(t[r],t[r+1>e?e:r+1],i-r)},Bezier:function(t,n){for(var e=0,i=t.length-1,r=Math.pow,o=TWEEN.Interpolation.Utils.Bernstein,a=0;a<=i;a++)e+=r(1-n,i-a)*r(n,a)*t[a]*o(i,a);return e},CatmullRom:function(t,n){var e=t.length-1,i=e*n,r=Math.floor(i),o=TWEEN.Interpolation.Utils.CatmullRom;return t[0]===t[e]?(n<0&&(r=Math.floor(i=e*(1+n))),o(t[(r-1+e)%e],t[r],t[(r+1)%e],t[(r+2)%e],i-r)):n<0?t[0]-(o(t[0],t[0],t[1],t[1],-i)-t[0]):n>1?t[e]-(o(t[e],t[e],t[e-1],t[e-1],i-e)-t[e]):o(t[r?r-1:0],t[r],t[e<r+1?e:r+1],t[e<r+2?e:r+2],i-r)},Utils:{Linear:function(t,n,e){return(n-t)*e+t},Bernstein:function(t,n){var e=TWEEN.Interpolation.Utils.Factorial;return e(t)/e(n)/e(t-n)},Factorial:function(){var t=[1];return function(n){var e=1;if(t[n])return t[n];for(var i=n;i>1;i--)e*=i;return t[n]=e,e}}(),CatmullRom:function(t,n,e,i,r){var o=.5*(e-t),a=.5*(i-n),s=r*r;return(2*n-2*e+o+a)*(r*s)+(-3*n+3*e-2*o-a)*s+o*r+n}}},function(t){"function"==typeof define&&define.amd?define([],function(){return TWEEN}):"undefined"!=typeof module&&"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=TWEEN:void 0!==t&&(t.TWEEN=TWEEN)}(void 0);


var hn = hn || {};

hn.gui = {

	version: "1.1.17",

	keyCodes: {
		"UP": 38, 
		"DOWN": 40, 
		"LEFT": 37, 
		"RIGHT": 39, 
		"ENTER": 13,
		"BACK": 27
	},

	dirs: {
		"NORTH": 0,
		"EAST": 1,
		"SOUTH": 2,
		"WEST": 3
	},

	debug: false,

	running: false,

	gameKeys: null,

	keyStates: {},
	keydownTime: 0,

	delay: 1000,

	context: null,

	//+ouley: viewport scale
	vscale: 1.0,

	cursor: null,
	cursorTween: null,

	touch: {id: 0, x: 0, y: 0, down: false},

	//demo layers
	layers: {
		"home": {type:'ui',   root: true, buttons:[{name:'start', x:180, y:440, target:'play', isDefault:true}]},
		"play": {type:'game', buttons:[{name:'left',  x:180, Y:400, bindKey:'LEFT'}]}
	},

	layerStack: null,	//[String]

	currLayer: null,	//Object

	focusButton: null,	    //Object
	lastFocusButton: null,  //Object

	home: null,

	settledTime: 0,			//结算时间
	settledTimerId: null,	//结算定时器id

	init: function() {

		if (this.running) return;

		console.log("hn.gui.version: ", this.version);

		this.home = this.valueFromUrl("home");

		//var isNativeCanvas = (window.navigator.userAgent.indexOf("nativecanvas") >= 0);
		//if (!isNativeCanvas) return;

		var self = this;

		window.addEventListener('keydown', function(event){
			var keyCode = event.keyCode;
			//console.log('keydown:', keyCode);
			if (!self.keyStates[keyCode])	{
				self.keyStates[keyCode] = 'down';
				self._onKeyDown(keyCode);
			}
		});

		window.addEventListener('keyup', function(event){
			var keyCode = event.keyCode;
			//console.log('keyup:', keyCode);
			self.keyStates[keyCode] = null;
			self._onKeyUp(keyCode);
		});

		// load gui json data
		var height = window.innerHeight;
		var options = window.loadJson(height <= 720 ? "gui/gui.json" : "gui/gui-" + height + ".json"); 
		if (!options) options = window.loadJson("gui/gui.json");

		this.debug = options.debug || false;
		this.delay = options.delay || 1000;
		this.gameKeys = options.gameKeys || {};
		this.vscale = options.vscale || 1.0;   // 0 ~ 1

		this.layerStack = [];

        this._initViewport(this.vscale);

		this._initLayers(options.layers);

		this._initCursor();

		//是否启动强制定时结算
		var timedSettle = options.timedSettle || false;
		timedSettle && setTimeout(function(){
			self._settle(true);
		}, 3000);

		//延时关闭加载等待对话框（毫秒）
		// var hideLoading = options.hideLoading || 0;
		// hideLoading >= 0 && setTimeout(function() {
		// 	self.hideLoading();
		// }, hideLoading);

		this.running = true;

		if (this.debug) {
			var screencanvas = window.screencanvas;
            console.log("window size:", window.innerWidth, window.innerHeight);
            console.log("canvas size:", screencanvas.width, screencanvas.height);
            console.log("canvas offset:", screencanvas.offsetLeft, screencanvas.offsetTop, screencanvas.offsetWidth, screencanvas.offsetHeight);

            window.addEventListener("touchstart", function(event) {
                var touch = event.changedTouches[0];
                var canvas = window.screencanvas;
                var sx = ((touch.clientX - canvas.offsetLeft) / canvas.offsetWidth).toFixed(3);
                var sy = ((touch.clientY - canvas.offsetTop) / canvas.offsetHeight).toFixed(3);
				var txt = '"x": ' + sx + ', "y": ' + sy;
                window.toast(txt);
				window.copyToClipboard(txt);
            });

            window.addEventListener("touchmove", function(event) {
                var touch = event.changedTouches[0];
                var canvas = window.screencanvas;
                var sx = (touch.clientX - canvas.offsetLeft) / canvas.offsetWidth;
                var sy = (touch.clientY - canvas.offsetTop) / canvas.offsetHeight;
                window.cursor.x = Math.floor(sx * window.screencanvas.width);
                window.cursor.y = Math.floor(sy * window.screencanvas.height);
                window.cursor.visible = true;
            });
		}

        if (window.egret) {
            var egretRender = egret.CanvasRenderer.prototype.render;
            egret.CanvasRenderer.prototype.render = function(ctx) {
                egretRender.apply(this, arguments);
                TWEEN.update();
            }
            egret.MainContext.instance.stage.dirtyRegionPolicy = egret.DirtyRegionPolicy.OFF;
		}
	},

	valueFromUrl: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        //return r != null ? unescape(r[2]) : null;
        return r != null ? r[2] : null;
	},

    showLoading: function(text) {
        var req = new window.NativeRequest();
        req.send('app.showLoading', text, null);
    },

    hideLoading: function() {
        var req = new window.NativeRequest();
        req.send('app.hideLoading', null, null);
    },

	createLayer: function(options) {
		var layer = options.value,
			name = options.name;

		if (name && layer) {
			this._initLayer(layer, name);
			this.layers[name] = layer;
		}
	},

	getLayer: function(layerName) {
	    return this.layers[layerName];
	},

	visitButtonsInLayer: function(layerName, cb) {
	    var layer = this.layers[layerName];
        layer && layer.buttons.forEach(cb);
	},

	getButtonInLayer: function(layerName, buttonName) {
		var layer = this.layers[layerName];

		if (layer) {
			var buttons = layer.buttons;
			if (buttons) for (var j = 0, l = buttons.length; j < l; j++) {
				var b = buttons[j];
				if (b && b.name == buttonName) return b;
			}
		}

		return null;
	},

	getButtonsInLayer: function(layerName) {
	    var layer = this.layers[layerName];
	    return layer ? layer.buttons : null;
	},

	addButtonToLayer: function(layerName, button) {
		var layer = this.layers[layerName];

		if (layer) {
			var buttons = layer.buttons;
			for (var i = 0, l = buttons.length; i < l; i++) {
				if (buttons[i].name == button.name)
					return buttons[i];
			}

			var w = window.screencanvas.width,
				h = window.screencanvas.height;

			button.x && button.x > 1 && (button.x /= w);
			button.y && button.y > 1 && (button.y /= h);

			buttons.push(button);
		}

		return button;
	},

	removeButtonFromLayer: function(layerName, buttonName) {
		var layer = this.layers[layerName];

		if (layer) {
			var buttons = layer.buttons;
			if (buttons) for (var j = 0, l = buttons.length; j < l; j++) {
				var b = buttons[j];
				if (b && b.name == buttonName) {
					buttons.splice(j, 1);
					return;
				}
			}
		}
	},

	removeButtonsByTag: function(layerName, tag) {
        var layer = this.layers[layerName];

        if (layer) {
            var buttons = layer.buttons;
            if (buttons) for (var j = buttons.length - 1; j >= 0; j--) {
                var b = buttons[j];
                if (b && tag == b.tag) {
                    buttons.splice(j, 1);
                }
            }
        }
    },

	activeButtonsByTag: function(layerName, tag, isActive) {
        var layer = this.layers[layerName];

        if (layer) {
            var buttons = layer.buttons;
            if (buttons) for (var j = buttons.length - 1; j >= 0; j--) {
                var b = buttons[j];
                if (b && tag == b.tag) {
                    b.hidden = !isActive;
                }
            }
        }
    },

    getButtonsByTag: function(layerName, tag) {
        var res = [];
        var layer = this.layers[layerName];

        if (layer) {
            var buttons = layer.buttons;
            if (buttons) for (var j = 0, l = buttons.length; j < l; j++) {
                var b = buttons[j];
                if (b && tag == b.tag) {
                    res.push(b);
                }
            }
        }
        return res;
    },

	setDefaultButton: function(layerName, buttonName) {
		//console.log("setDefaultButton....", buttonName);

		var layer = this.layers[layerName];
		if (!layer) return;

		var buttons = layer.buttons;
		for (var i = 0, l = buttons.length; i < l; i++) {
			var b = buttons[i];
			b.isDefault = (b.name == buttonName);
		}
	},

	activeButton: function(layerName, buttonName, isActive) {
		layerName = layerName || this.currLayer.name;
		var layer = this.layers[layerName];
		var buttonNames = buttonName.length ? buttonName : [buttonName];

		if (layer) {
			var buttons = layer.buttons;
			if (buttons) for (var i = 0, l = buttons.length; i < l; i++) {
				var b = buttons[i];
				if (b && buttonNames.indexOf(b.name) >= 0) {
					b.hidden = !isActive;
				}
			}
		}	
	},

	showLayer: function(name) {
		console.log("gui show layer....", name)

		//this.layerStack.lenth = 0;
		this.pushLayer(name);
	},

	pushLayer: function(name) {
		var layer = this.layers[name];
		var layerStack = this.layerStack;

		if (layer && layerStack) {
			var layerStack = this.layerStack;

			var index = (layer.root ? 0 : layerStack.indexOf(name));
			(index >= 0) && (layerStack.length = index)

			layerStack.push(name);

			console.log("gui push layer....", layerStack);

			this._setActiveLayer(name);

			return true;
		}

		return false;
	},

	/*
	 * pop layer with the specified name or pop the current layer if not specified name parameter
	 */
	popLayer: function(name, destroy) {
		name = name || this.currLayer.name;

		var layerStack = this.layerStack;
		if (!layerStack) return;

		var i = layerStack.indexOf(name);
		if (i < 0) return;

		layerStack.splice(i, 1);

		console.log("gui pop layer....", name, layerStack);

		if (this.currLayer.name == name) {
			var len = layerStack.length;
			len > 0 && this._setActiveLayer(layerStack[Math.min(i, len-1)]);
		}

		if (destroy) {
		    delete this.layers[name];
		}
	},

	/*
	 * replace last layer in layer stack with the named layer
	 */
	replaceLayer: function(name) {
		this.popLayer();
		this.pushLayer(name);
	},

	setFocusToButton: function(button, updateFocus) {
        if (typeof button == "string") {   //button name
            button = this._getButtonByName(button);
        }

        updateFocus && (this.focusButton = null);

        var lastFocusButton = this.lastFocusButton = this.focusButton;
        if (!button || lastFocusButton == button) {
            return;
        }

        if (lastFocusButton && lastFocusButton["onLostFocus"]) {
            lastFocusButton["onLostFocus"]();
        }

        if (button && button["onGetFocus"] && button["onGetFocus"](button.name)) {
            this.lastFocusButton = null;
            return;
        }

        this.lastFocusButton = null;

        console.log("setFocusToButton: " + button.name);

        if (this.cursor && !button.hidden && this.focusButton != button)	{
            this.focusButton = button;
            var x = button.x || -1000, y = button.y || -1000;
            // update cursor position
            x = Math.floor(x * window.screencanvas.width);
            y = Math.floor(y * window.screencanvas.height);
            this.cursor.x = x, this.cursor.y = y;
            this.cursorTween && this.cursorTween.stop().to({x: x + 8, y: y + 8},500).repeat(Infinity).yoyo(true).start();
            console.log("setFocusToButton: " + button.name, x, y);

            if (button.autoClick) {
                this._handleKeyDownOnUILayer(this.keyCodes.ENTER);
                this._handleKeyUpOnUILayer(this.keyCodes.ENTER);
            }
        }
    },

    /**
     *posToDefaultButton: boolean
     */
	showCursor: function(posToDefaultButton) {
		//console.log("showCursor: ", posToDefaultButton);

		this.cursor && (this.cursor.visible = true);

		if (posToDefaultButton) {
			var layer = this.currLayer;
			if (!layer) return;

			var buttons = layer.buttons;
			if (!buttons.length) return;

			var xb = null;
			for (var i = 0, l = buttons.length; i < l; i++) {
				var b = buttons[i];
				if (b.isDefault && !b.hidden) {
					xb = b;
					break;
				}
			}
			if (!xb) {
				for (var i = 0, l = buttons.length; i < l; i++) {
					var b = buttons[i];
					if (!b.hidden) {
						xb = b;
						break;
					}
				}
			}
			xb && this.setFocusToButton(xb);
		}

	},

	hideCursor: function() {
		this.cursor && (this.cursor.visible = false);
	},

	render: function(ctx) {
		return;

		/*if (!this.currLayer)
			return;

		if (!ctx) {
			this.context = this.context || window.screencanvas.getContext("2d");
			ctx = this.context;
		}

		if (!ctx) return;

		ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.globalAlpha = 1.0;
		ctx.globalCompositeOperation="source-over";
		//ctx.resetClip();

		if (this.debug) {
			ctx.textAlign = "center";
			ctx.font = "20px System";
			ctx.fillStyle = "blue";
			ctx.fillText(this.currLayer.name, window.screencanvas.width / 2, 35);
		}

		if (!this.running) {
			// show mask cover
			ctx.fillStyle = "rgba(0,0,0," + ctx.alpha + ")";
			ctx.fillRect(0, 0, ctx.width, ctx.height);
		}

		ctx.restore();

		TWEEN.update();*/
	},

    /** +ouley: 2023-2-3
      * scale the screen canvas viewport
      * vscale: 0 ~ 1
     **/
	_initViewport: function(vscale) {
	    var screencanvas = window.screencanvas;

	    if (screencanvas && screencanvas.setStyle) {
            var vw = window.innerWidth * vscale;
            var vh = window.innerHeight * vscale;
            screencanvas.setStyle("width", vw);
            screencanvas.setStyle("height", vh);
            //screencanvas.setStyle("left", (window.innerWidth - vw) / 2);
            //screencanvas.setStyle("top", (window.innerHeight - vh) / 2);
            screencanvas.setStyle("left", (window.innerWidth - vw) / 4);    //适配播测那盒子
            screencanvas.setStyle("top", (window.innerHeight - vh) / 4);    //适配播测那盒子
        }
    },

	_initLayers: function(layers) {
		this.layers = layers;
		for (var name in layers) {
			var layer = layers[name];
			this._initLayer(layer, name);
		}
	},

	_initLayer: function(layer, name) {
		layer.name = name;

		var w = window.screencanvas.width,
			h = window.screencanvas.height,
			buttons = layer.buttons;

		for (var j = 0; j < buttons.length; j++) {
			var b = buttons[j];
			b.x && b.x > 1 && (b.x /= w);
			b.y && b.y > 1 && (b.y /= h);
		}
	},

	_setActiveLayer: function(name) {	//layer name

		if (!this.layers || !name || (this.currLayer && this.currLayer.name == name))
			return;

		console.log("gui setActiveLayer:", name);

		// reset the touch and keyboard event
		this.touch.down && this._dispatchTouchEvent("touchend", 0, 10000, 10000);

		var nextLayer = this.layers[name];
		if (!nextLayer) return;

		// save the last focus button
		if (this.focusButton) {
			//this.setDefaultButton(this.currLayer.name, this.focusButton.name);
		}

		this.currLayer = nextLayer;

		this.hideCursor();

		this.focusButton = null;

		var self = this;

		setTimeout(function(){
			if (self.currLayer.type == 'ui') {
				self.showCursor(true);
			} else {
				self.hideCursor();
			}
		}, this.delay);
	},

	_initCursor: function() {
		var cursor = this.cursor = window.cursor || {};
		this.cursorTween = new TWEEN.Tween(cursor);
	},

	_onKeyDown: function(keyCode) {
		if (!this.running) return;

		var layer = this.currLayer;
		if (!layer) return;

		if (layer.type == 'ui') {
			this._handleKeyDownOnUILayer(keyCode);
		} else {
			this._handleKeyDownOnGameLayer(keyCode);
		}

		var self = this;
		var delay = this._keydownTimer ? 100 : 1000;
    if (this._keydownTimer) {
			clearTimeout(this._keydownTimer);
    }
		this._keydownTimer = setTimeout(function(){
			self._onKeyDown(keyCode)
		}, delay);
	},

	_onKeyUp: function(keyCode) {
		if (this._keydownTimer) {
			clearTimeout(this._keydownTimer);
			this._keydownTimer = null;
		}

		if (!this.running) 
			return;

		var layer = this.currLayer;
		if (!layer) return;

		if (keyCode == this.keyCodes.BACK && layer.root) {
		    return void this._exit();
		}

		if (layer.type == 'ui') {
			this._handleKeyUpOnUILayer(keyCode);
		} else {
			this._handleKeyUpOnGameLayer(keyCode);
		}
	},

	_handleKeyDownOnUILayer: function(keyCode) {
		//console.log("_handleKeyDownOnUILayer....", this.currLayer.name);

		if (!this.cursor.visible) return;

		var self = this;

		switch(keyCode) {
			case this.keyCodes.LEFT:
				this._moveFocusToButton(this.dirs.WEST);
				break;
			case this.keyCodes.RIGHT:
				this._moveFocusToButton(this.dirs.EAST);
				break;
			case this.keyCodes.UP:
				this._moveFocusToButton(this.dirs.NORTH);
				break;
			case this.keyCodes.DOWN:
				this._moveFocusToButton(this.dirs.SOUTH);
				break;
			case this.keyCodes.ENTER: {
					var xb = this.focusButton;
					_popLayer(self, self.currLayer.name, xb);   // pop current layer if needed
					//
					this._createTouch(this.cursor.x / window.screencanvas.width, this.cursor.y / window.screencanvas.height);
					this._dispatchTouchEvent("touchstart");
				}
				break;
			default:
				this._checkButtonByKey(keyCode, function(xb) {
					var gameKey = self.gameKeys[keyCode];
					if (gameKey) {
						self._dispatchKeyEvent("keydown", gameKey);
					} else if (xb && xb.x > 0 && xb.y > 0) {
						// pop current layer if needed
						_popLayer(self, self.currLayer.name, xb);
						//
						self._createTouch(xb.x, xb.y);
						self._dispatchTouchEvent("touchstart");
					}
				});
				break;
		}

		function _popLayer(self, layer, xb) {
			if (xb && xb.target == "pop") {
				setTimeout(function() {self.popLayer(layer)}, 0);
			}
		}
	},

	_handleKeyUpOnUILayer: function(keyCode) {
		//console.log("_handleKeyUpOnUILayer....", this.currLayer.name);

		if (!this.cursor.visible || !this.touch.down) return;

		if (keyCode >= this.keyCodes.UP && keyCode <= this.keyCodes.RIGHT)
			return;

		var self = this;

		if (keyCode == this.keyCodes.ENTER) {
			this._dispatchTouchEvent("touchend");
			var xb = this.focusButton;
			xb && xb.target && self._switchToLayer(xb.target);
		} else {
			this._checkButtonByKey(keyCode, function(xb) {
				var gameKey = self.gameKeys[keyCode];
				if (gameKey) {
					self._dispatchKeyEvent("keyup", gameKey);
				} else {
					self._dispatchTouchEvent("touchend");
					xb && xb.target && self._switchToLayer(xb.target);
				}
			});
		}
	},

	_handleKeyDownOnGameLayer: function(keyCode) {
		//console.log("_handleKeyDownOnGameLayer....", this.currLayer.name);

		var self = this;
		this._checkButtonByKey(keyCode, function(xb) {
			var gameKey = self.gameKeys[keyCode];
			if (gameKey) {
				self._dispatchKeyEvent("keydown", gameKey);
			} else if (xb && xb.x > 0 && xb.y > 0) {
				self._createTouch(xb.x, xb.y);
				self._dispatchTouchEvent("touchstart");
			}
		});
	},

	_handleKeyUpOnGameLayer: function(keyCode) {
		//console.log("_handleKeyUpOnGameLayer....", this.currLayer.name);

		var self = this;
		this._checkButtonByKey(keyCode, function(xb) {
			var gameKey = self.gameKeys[keyCode];
			if (gameKey) {
				self._dispatchKeyEvent("keyup", gameKey);
			} else {
				self._dispatchTouchEvent("touchend");
				xb && xb.target && self._switchToLayer(xb.target);
			}
		});
	},

	_switchToLayer: function(target) {
		//console.log("gui _switchToLayer: ", target);

		var typeofTarget = typeof target;
		if (typeofTarget == "string") {
			target == "pop" ? this.popLayer() : this.showLayer(target);
		}
		else if (typeofTarget == "object") {
			//为了兼容老版本
			target.name && (target.mode == "push" ? this.pushLayer(target.name) : this.showLayer(target.name));
		}
	},

	_moveFocusToButton: function(dir) {
		var focusButton = this.focusButton;
		if (!focusButton) {
		    focusButton = {
            x: window.cursor.x / window.screencanvas.width,
            y: window.cursor.y / window.screencanvas.height
		    }
		}

		var roundButtons = focusButton.round;
		/*if (roundButtons && roundButtons[dir]) {
            var xb = this._getButtonByName(roundButtons[dir]);
            xb && this.setFocusToButton(xb);
            return;
        }*/
		while(roundButtons && roundButtons[dir]) {
		    var xb = this._getButtonByName(roundButtons[dir]);
		    if (!xb) return;
		    if (!xb.hidden) {
		        return void this.setFocusToButton(xb);
		    }
		    roundButtons = xb.round;
		}

		var dirs = this.dirs;
		var buttons = this.currLayer.buttons;
		var maxDist = 10000, xb = null;

		for (var i = 0, l = buttons.length; i < l; i++) {
			var b = buttons[i];
			if (b.hidden) continue;
			var dx = b.x - focusButton.x, dy = b.y - focusButton.y;
			switch(dir) {
			case dirs.WEST:
				if (dx < 0) {
				    var dist = dx * dx + dy * dy;
				    dist < maxDist && (maxDist = dist, xb = b);
				}
				break;
			case dirs.EAST:
				if (dx > 0) {
					var dist = dx * dx + dy * dy;
                    dist < maxDist && (maxDist = dist, xb = b);
				}
				break;
			case dirs.NORTH:
				if (dy < 0) {
					var dist = dx * dx + dy * dy;
                    dist < maxDist && (maxDist = dist, xb = b);
				}
				break;
			case dirs.SOUTH:
				if (dy > 0) {
					var dist = dx * dx + dy * dy;
                    dist < maxDist && (maxDist = dist, xb = b);
				}
				break;
			}
		}

		console.log("moveFocusToButton...", xb ? xb.name : "none");

		if (xb) {
            if (this.currLayer.onToMoveFocus) {
                this.currLayer.onToMoveFocus(dir, function(){
                    this.setFocusToButton(xb);
                }, this);
            }
            else {
                this.setFocusToButton(xb);
            }
        }
	},

	_getButtonByName: function(name) {
		return this.getButtonInLayer(this.currLayer.name, name);
	},

	_getButtonByKey: function(keyCode) {
		var layer = this.currLayer;
		if (!layer) return null;

		var buttons = layer.buttons;
		for (var i = 0, l = buttons.length; i < l; i++) {
			var b = buttons[i];
			if (this.keyCodes[b.bindKey] == keyCode)
				return b;
		}

		return null;
	},

	_checkButtonByKey: function(keyCode, handler) {
		if (this.currLayer && this.currLayer.buttons)	{
			var buttons = this.currLayer.buttons;
			for (var i = 0, l = buttons.length; i < l; i++) {
				var b = buttons[i];
				if (this.keyCodes[b.bindKey] == keyCode) {
					return void handler(b);
				}
			}
		}
		handler(null);
	},

	/* internal method
	 * type{String}: touchstart, touchend
	 * id{Number}
	 * x{Number}
	 * y{Number}
	 */
	_dispatchTouchEvent: function(type, id, x, y) {
		//console.log("gui _dispatchTouchEvent: " + type + "," + id);

		try {
			this.touch.down = (type == "touchstart");

			id = id || 0;
			x = x || this.touch.x;
			y = y || this.touch.y;

			var screencanvas = window.screencanvas;
			var vscale = this.vscale;
			var px = x * screencanvas.offsetWidth / vscale + screencanvas.offsetLeft;
			var py = y * screencanvas.offsetHeight / vscale + screencanvas.offsetTop;
			//console.log("gui _dispatchTouchEvent: ", type, px, py);

			var touchEvent = new Event(type);
			touchEvent.target = touchEvent.currentTarget = screencanvas;
			touchEvent.changedTouches = touchEvent.touches = [{
				target: screencanvas,
				identifier: id,
				clientX: px,
				clientY: py,
				pageX: px,
				pageY: py,
				screenX: px,
				screenY: py
			}];
			window.dispatchEvent(touchEvent);
		}
		catch(e) {}
	},

	/*
	 * type{String}: keydown, keyup
	 * keyCode{Number}
	 */
	 _dispatchKeyEvent: function (type, keyCode) {
		var target = window.screencanvas;
		if (target) {
			//this.keydown = (type == "keydown");
			var keyEvent = new Event(type);
			keyEvent.target = target;
			keyEvent.currentTarget = target;
			keyEvent.keyCode = keyCode;
			window.dispatchEvent(keyEvent);
			target = null;
		}
    },

	_createTouch: function(x, y) {
	    this.touch.x = x,
	    this.touch.y = y;
	},

	_exit: function() {
		//console.log("_exit from: ", window.location.href);

		this.settledTimerId && clearInterval(this.settledTimerId);

		var home = this.home;
		if (home && home != window.location.href) {
			window.open(home);
		} else {
			window.close();
		}

	/*
		//window.removeAllListeners();

		var me = this;
		var delay = 800;
		var ctx = window.screencanvas.getContext("2d");
		ctx.alpha = 0.0;

		var tween = new TWEEN.Tween(ctx);
		//tween.to({alpha: 1.0}, delay).onUpdate(function(ctx){
		//	ctx.save(), ctx.fillStyle = "rgba(0,0,0," + ctx.alpha + ")", ctx.fillRect(0, 0, ctx.width, ctx.height), ctx.restore();
		//}).start();
		tween.to({alpha: 1.0}, delay).start();

		setTimeout(function(){
			tween.stop();
			if (home && home != window.location.href) {
				window.open(home);
			} else {
				window.close();
			}
		}, delay);
	*/
	},

	/* 体力结算相关 */
	_settle: function (force) {

		var self = this;
		var q = window.q;

		if (!q || !q.uid || !q.cost || !q.api)
			return;

		if (!force && self.currLayer.type != 'game')
			return;

		var now = Date.now();
		var settledTime = self.settledTime || 0;

		if (now - settledTime <= 5000)
			return;

		self.settledTime = now;

		if (q.hp - q.cost < 0) {
			setTimeout(function(){ self._exit() }, 3000);
			window.toast("体力不足了，即将结束游戏！");
			return;
		}

		console.log("gui _settle...");

		var data = {
			uid: q.uid,
			value: -q.cost,
			x_ca_nonce: uuid(16, 16),
			x_ca_ts: Date.now()
		};
		data.x_sign = signData(data);

		window.ajax({
			url: q.api + "/increaseHP",
			data: data,
			complete: function(data) {
				try {
					data && (data = JSON.parse(data));
				} catch(e) {
					data = null;
				}
				if (data && data.success) {
					q.hp = data.hp;
				}
			}
		});

		//另加5分钟定时结算，适用于玩家一直没有离开游戏的场景
		self.settledTimerId && clearInterval(self.settledTimerId);
		self.settledTimerId = setInterval(function(){
			self._settle(force);
		}, 5 * 60 * 1000);

	}
};

/*对象(数组)深拷贝*/
function deepCopy(arr) {
    var copyArr = (arr.constructor === Array) ? [] : {}; // 判断是数组还是对象
    for(var i in arr) {
        if(typeof arr[i] === 'object') {   // 判断是值类型还是引用类型
            copyArr[i] = deepCopy(arr[i]);  // 引用类型的话进行递归操作
        } else {
            copyArr[i] = arr[i];  // 值类型直接赋值
        }
    }
    return copyArr;
}

function signData(data) {
	var items = [];
	for (var key in data ) {
		items.push(key + "=" + data[key]);
	}
	data = (items.sort()).join("&");
	return hex_md5(data);
}

function uuid(len, radix) {
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
}

window.toast = function(text) {
	var req = new window.NativeRequest();
	req.send('app.toast', text, null);
}

window.copyToClipboard = function(text) {
	var req = new window.NativeRequest();
	req.send('app.copyToClipboard', text, null);
}

window.loadJson = window.loadJson || function(url) {
    try {
        var request = new XMLHttpRequest();
        request.open("GET", url, false);
        request.send(null);
        return JSON.parse(request.responseText);
	}
	catch(e) {}
	return null;
}
