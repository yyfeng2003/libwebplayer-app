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

	init: function() {

		if (this.running) return;

		console.log("hn.gui.version: ", this.version);

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
            egret.MainContext.instance.stage.dirtyRegionPolicy = egret.DirtyRegionPolicy.OFF;
		}
	},

	valueFromUrl: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        return r != null ? r[2] : null;
	},

    showLoading: function(text) {
        if (window.NativeRequest) {
            var req = new window.NativeRequest();
            req.send('app.showLoading', text, null);
        }
    },

    hideLoading: function() {
        if (window.NativeRequest) {
            var req = new window.NativeRequest();
            req.send('app.hideLoading', null, null);
        }
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
            screencanvas.setStyle("left", (window.innerWidth - vw) / 2);
            screencanvas.setStyle("top", (window.innerHeight - vh) / 2);
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
			this.setDefaultButton(this.currLayer.name, this.focusButton.name);
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
	}
};

window.toast = function(text) {
    if (window.NativeRequest) {
        var req = new window.NativeRequest();
        req.send('app.toast', text, null);
	}
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
