window.__require = function t(e, o, r) {
    function n(a, s) {
        if (!o[a]) {
            if (!e[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1],
                !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l)
                        return l(c, !0);
                    if (i)
                        return i(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var u = o[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function(t) {
                return n(e[a][1][t] || t)
            }, u, u.exports, t, e, o, r)
        }
        return o[a].exports
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < r.length; a++)
        n(r[a]);
    return n
}({
    AdConstants: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "326c70B//dJjKHMS9ftbfKY", "AdConstants"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.Advert_Id = o.Advert_Type = void 0,
        function(t) {
            t[t.video = 1] = "video",
            t[t.video_5s = 2] = "video_5s",
            t[t.insert = 3] = "insert",
            t[t.insert_video = 4] = "insert_video",
            t[t.insert_reward = 5] = "insert_reward",
            t[t.splash = 6] = "splash",
            t[t.banner = 7] = "banner",
            t[t.native = 8] = "native"
        }(o.Advert_Type || (o.Advert_Type = {})),
        function(t) {
            t[t.SIGN_DAYSIGN = 101] = "SIGN_DAYSIGN",
            t[t.SIGN_7_ACTIVITY = 102] = "SIGN_7_ACTIVITY",
            t[t.RED_PACK_BOX = 103] = "RED_PACK_BOX",
            t[t.RED_PACK_DRAW = 104] = "RED_PACK_DRAW",
            t[t.RED_PACK_LEVEUP = 105] = "RED_PACK_LEVEUP",
            t[t.RED_PACK_FACTION = 106] = "RED_PACK_FACTION",
            t[t.NEW_PLAYER_WELFARE = 111] = "NEW_PLAYER_WELFARE",
            t[t.RED_PACK_WMK = 120] = "RED_PACK_WMK",
            t[t.ADD_TX_SPEED = 121] = "ADD_TX_SPEED",
            t[t.TASK_NEW_REDPACK = 122] = "TASK_NEW_REDPACK",
            t[t.SUDDENT_ACT = 201] = "SUDDENT_ACT",
            t[t.UNLOCK_ROLE = 202] = "UNLOCK_ROLE",
            t[t.FREE_APPEND = 203] = "FREE_APPEND",
            t[t.REBIRTH_COOLDOWN = 204] = "REBIRTH_COOLDOWN",
            t[t.REBIRTH_WITH_LEVEL = 205] = "REBIRTH_WITH_LEVEL",
            t[t.INCOME_DOUBLE_FREE = 206] = "INCOME_DOUBLE_FREE",
            t[t.AIR_FLY_GOLD = 207] = "AIR_FLY_GOLD",
            t[t.GOLD_BOX = 301] = "GOLD_BOX",
            t[t.DIAMOND_BOX = 302] = "DIAMOND_BOX",
            t[t.SUPER_DRAW = 303] = "SUPER_DRAW",
            t[t.DIAMOND_TO_GOLD_1 = 304] = "DIAMOND_TO_GOLD_1",
            t[t.DIAMOND_MORE_MORE = 305] = "DIAMOND_MORE_MORE",
            t[t.OFFLINE_DOUBLE_AWARD = 410] = "OFFLINE_DOUBLE_AWARD",
            t[t.HW_PHONE_AD = 415] = "HW_PHONE_AD"
        }(o.Advert_Id || (o.Advert_Id = {})),
        cc._RF.pop()
    }
    , {}],
    AlertCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2b023P/DBdHdrcGBOVU7vmH", "AlertCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../G")
          , s = t("../view/JMAlertBase")
          , c = cc._decorator
          , l = c.ccclass
          , u = c.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._alertList = [],
                e
            }
            return n(e, t),
            e.prototype.onEnable = function() {
                this.node.on("e_alert_pop", this._handlePopAlert, this)
            }
            ,
            e.prototype.onDisable = function() {
                this.node.off("e_alert_pop", this._handlePopAlert, this)
            }
            ,
            e.prototype.backKeyOnClicked = function() {
                var t = this._alertList.length;
                return t > 0 && (this._alertList[t - 1].backKeyOnClicked(),
                !0)
            }
            ,
            e.prototype.pushAlert = function(t) {
                if (!cc.isValid(t) || !cc.isValid(this.node))
                    return !1;
                var e = t.alertZIndex;
                return this.node.addChild(t.node, e),
                this._alertList.push(t),
                cc.game.emit("e_ui_push_alert", {
                    alert: t
                }),
                !0
            }
            ,
            e.prototype.popAlert = function(t) {
                for (var e = this._alertList.length - 1; e >= 0; e--)
                    if (this._alertList[e] === t) {
                        this._alertList.splice(e, 1);
                        break
                    }
                t.node.destroy();
                var o = this._alertList[this._alertList.length - 1];
                cc.game.emit("e_ui_pop_alert", {
                    alertId: t.id,
                    alertData: t.data,
                    topAlert: o
                })
            }
            ,
            e.prototype.popAllAlert = function(t) {
                for (var e = this._alertList.length - 1; e >= 0; e--) {
                    var o = this._alertList[e];
                    (o.alertZIndex < 100 || t) && o.close()
                }
            }
            ,
            e.prototype.closeAlert = function(t) {
                for (var e = this._alertList.length - 1; e >= 0; e--) {
                    var o = this._alertList[e];
                    if (o.id === t) {
                        o.close();
                        break
                    }
                }
            }
            ,
            e.prototype.getAlert = function(t) {
                for (var e = 0, o = this._alertList; e < o.length; e++) {
                    var r = o[e];
                    if (r.id == t)
                        return r
                }
            }
            ,
            e.prototype.getAlertCount = function() {
                return this._alertList.length
            }
            ,
            e.prototype.showNormalAlert = function(t, e, o) {
                var r = e || {};
                this.showAlert("alert/normal/prefab_alert_normal", r, o, !0)
            }
            ,
            e.prototype.showAlert = function(t, e, o, r) {
                var n = this;
                void 0 === r && (r = !1),
                a.default.LogUtils.warn("showAlert", t),
                a.default.AppUtils.getSceneCtrl().showLoadingAlert();
                var i = void 0;
                cc.resources.load(t, cc.Prefab, function(t, e) {
                    i = a.default.AppUtils.getLoadProgressInfo(i, t, e),
                    a.default.AppUtils.getSceneCtrl().updateLoadingProgress(100 * i.precent, 100)
                }, function(t, r) {
                    if (a.default.AppUtils.getSceneCtrl().updateLoadingProgress(100, 100),
                    t)
                        return a.default.AppUtils.getSceneCtrl().addToast("showAlert error"),
                        a.default.LogUtils.error("[showAlert]", t),
                        void (o && o(void 0, "error", t));
                    var i = cc.instantiate(r).getComponent("JMAlertBase");
                    if (o && o(i, "willShow", void 0),
                    n.pushAlert(i))
                        try {
                            i.reloadData(e, o)
                        } catch (s) {
                            a.default.LogUtils.error("AlertCtrl showAlert error:", s)
                        }
                })
            }
            ,
            e.prototype._handlePopAlert = function(t) {
                var e = t.getUserData();
                this.popAlert(e)
            }
            ,
            i([u(s.default)], e.prototype, "_alertList", void 0),
            i([l], e)
        }(cc.Component);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../view/JMAlertBase": "JMAlertBase"
    }],
    AllOPConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "43960DfabFF6Y5Xjnc2hFDx", "AllOPConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.default = {
            ch997: {}
        },
        cc._RF.pop()
    }
    , {}],
    AllSDKConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "99a2cDUOZ9NbJ5sR6YPsGEg", "AllSDKConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.default = {
            ch997: {
                appName: "\u6e38\u620f\u540d",
                channel: "997",
                deviceVersion: "t.1.0.0",
                deviceVersionCode: "100001",
                sdkName: "web-default",
                uuidPrefix: "gy_"
            }
        },
        cc._RF.pop()
    }
    , {}],
    AppConstants: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d805bpJaWNM9qimwGnw3nTB", "AppConstants"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.AD_TYPE = o.ITEM_ID = o.PUBLIC_MSG_ORDER = o.PUBLIC_MSG = o.LOGIN_TYPE = o.AUTH_STATUS = o.ALERT_ID = void 0,
        function(t) {
            t[t.DEFAULT = 0] = "DEFAULT",
            t[t.SHOW_EXIT_GAME_ALERT = 1] = "SHOW_EXIT_GAME_ALERT",
            t[t.NETWORK_ANOMALY = 2] = "NETWORK_ANOMALY",
            t[t.SERVER_MAINTAIN_ALERT = 3] = "SERVER_MAINTAIN_ALERT",
            t[t.REOPEN_GAMEW = 4] = "REOPEN_GAMEW",
            t[t.PUBLIC_TIPS = 5] = "PUBLIC_TIPS"
        }(o.ALERT_ID || (o.ALERT_ID = {})),
        function(t) {
            t[t.NOT_INIT = 0] = "NOT_INIT",
            t[t.INITING = 1] = "INITING",
            t[t.INIT_SUCCESS = 2] = "INIT_SUCCESS",
            t[t.INIT_FAIL = 3] = "INIT_FAIL",
            t[t.LOGINING = 4] = "LOGINING",
            t[t.LOGIN_SUCCESS = 5] = "LOGIN_SUCCESS",
            t[t.LOGIN_FAIL = 6] = "LOGIN_FAIL"
        }(o.AUTH_STATUS || (o.AUTH_STATUS = {})),
        function(t) {
            t[t.NORMAL = 0] = "NORMAL",
            t[t.SMS = 1] = "SMS",
            t[t.WECHAT = 2] = "WECHAT",
            t[t.QTT = 3] = "QTT",
            t[t.BAIDU = 4] = "BAIDU"
        }(o.LOGIN_TYPE || (o.LOGIN_TYPE = {})),
        function(t) {
            t.LOGIN_SUCCESS = "login_success",
            t.DISCONNECTED = "disconnected"
        }(o.PUBLIC_MSG || (o.PUBLIC_MSG = {})),
        function(t) {
            t[t.LOGIN = 0] = "LOGIN",
            t[t.OP = 1] = "OP",
            t[t.BAG = 2] = "BAG",
            t[t.GAME = 3] = "GAME",
            t[t.ADVERTISEMEN = 4] = "ADVERTISEMEN",
            t[t.ACTIVITY = 5] = "ACTIVITY",
            t[t.WITHDRAW = 6] = "WITHDRAW",
            t[t.TASK = 7] = "TASK",
            t[t.MAIL = 8] = "MAIL",
            t[t.MARQUEE = 9] = "MARQUEE"
        }(o.PUBLIC_MSG_ORDER || (o.PUBLIC_MSG_ORDER = {})),
        function(t) {
            t[t.GOLD = 101] = "GOLD",
            t[t.DIAMOND = 201] = "DIAMOND",
            t[t.REDPACK = 202] = "REDPACK",
            t[t.SW_HB_PICE = 110] = "SW_HB_PICE",
            t[t.SW_OB_PICE = 111] = "SW_OB_PICE"
        }(o.ITEM_ID || (o.ITEM_ID = {})),
        function(t) {
            t[t.NATIVE = 1] = "NATIVE",
            t[t.INTERSTITIAL = 2] = "INTERSTITIAL",
            t[t.BANNER = 3] = "BANNER",
            t[t.NATIVE_TEMPLATE = 4] = "NATIVE_TEMPLATE",
            t[t.REWARD_VIDEO = 5] = "REWARD_VIDEO",
            t[t.SPLASH = 6] = "SPLASH",
            t[t.INTERSTITIAL_VIDEO = 7] = "INTERSTITIAL_VIDEO",
            t[t.NATIVE_BANNER = 8] = "NATIVE_BANNER"
        }(o.AD_TYPE || (o.AD_TYPE = {})),
        cc._RF.pop()
    }
    , {}],
    AppInit: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fad5bVafNBON7aHh7ezfKZi", "AppInit"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../core/network/NetworkMgr")
          , n = t("../core/model/PublicMgr")
          , i = t("../app/login/LoginMgr")
          , a = t("../core/utils/TimeUtils")
          , s = t("../core/model/UserMgr")
          , c = t("../app/game/GameMgr")
          , l = t("../G")
          , u = function() {
            function t() {}
            return t.init = function() {
                window.onerror = function(t, e, o, r) {
                    var n = cc.js.formatStr("%s|%s|%s:%s", t, e, o, r);
                    console.error(n)
                }
                ,
                l.default.NetworkMgr = new r.default,
                l.default.NetworkMgr.init(),
                l.default.PublicMgr = new n.default,
                l.default.PublicMgr.init(),
                l.default.LoginMgr = new i.default,
                l.default.LoginMgr.init(),
                l.default.TimeUtils = new a.default,
                l.default.UserMgr = new s.default,
                l.default.UserMgr.init(),
                l.default.GameMgr = new c.default,
                l.default.GameMgr.init()
            }
            ,
            t
        }();
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../G": "G",
        "../app/game/GameMgr": "GameMgr",
        "../app/login/LoginMgr": "LoginMgr",
        "../core/model/PublicMgr": "PublicMgr",
        "../core/model/UserMgr": "UserMgr",
        "../core/network/NetworkMgr": "NetworkMgr",
        "../core/utils/TimeUtils": "TimeUtils"
    }],
    AppUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "590eaWIoipGjaNif9cUIzq5", "AppUtils"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.LoadingTempInfo = void 0;
        var r = t("../../core/constants/StoragesConstants")
          , n = t("../../G")
          , i = t("../ctrl/SceneCtrlBase")
          , a = function() {
            function t() {
                this._sceneInitParams = void 0,
                this._lastSceneName = void 0
            }
            return t.prototype.getSceneCtrl = function() {
                return cc.director.getScene().getChildByName("ctrl").getComponent(i.default)
            }
            ,
            t.prototype.loadScene = function(t, e) {
                var o = this;
                n.default.LogUtils.warn("loadScene", t),
                this._sceneInitParams = e,
                n.default.AppUtils.getSceneCtrl().showLoadingAlert();
                var r = void 0;
                cc.director.preloadScene(t, function(t, e) {
                    r = o.getLoadProgressInfo(r, t, e),
                    o.getSceneCtrl().updateLoadingProgress(100 * r.precent, 100)
                }, function(e) {
                    e ? n.default.AppUtils.getSceneCtrl().addToast("net error") : cc.director.loadScene(t)
                })
            }
            ,
            t.prototype.runScene = function(t, e) {
                n.default.LogUtils.warn("runScene", t),
                this._sceneInitParams = e,
                cc.director.loadScene(t)
            }
            ,
            t.prototype.getLoadProgressInfo = function(t, e, o) {
                t || (t = new s),
                t.tickTimes = t.tickTimes + 1;
                var r = Math.min(t.tickTimes / 100, .4);
                if (0 == o)
                    return t.precent = r,
                    t;
                if (o == e)
                    return t.precent = 1,
                    t;
                o > t.totalCount && (t.lastCompletedCount = t.completedCount,
                t.lastPrecent = t.realPrecent);
                var n = (1 - t.lastPrecent) / (o - t.lastCompletedCount);
                return t.realPrecent = t.lastPrecent + (e - t.lastCompletedCount) * n,
                t.precent = Math.max(t.realPrecent, r),
                t.completedCount = e,
                t.totalCount = o,
                t
            }
            ,
            t.prototype.getSceneInitParams = function() {
                return this._sceneInitParams
            }
            ,
            t.prototype.getLastSceneName = function() {
                return this._lastSceneName
            }
            ,
            t.prototype.setLastSceneName = function(t) {
                this._lastSceneName = t
            }
            ,
            t.prototype.pauseGame = function() {
                cc.audioEngine.pauseAllEffects(),
                cc.audioEngine.pauseMusic(),
                n.default.LoginMgr._stopKeepalive(),
                cc.game.pause()
            }
            ,
            t.prototype.resumeGame = function() {
                cc.game.resume(),
                n.default.LSMgr.getValue(r.LSKey.SETTING_SOUND) && cc.audioEngine.resumeAllEffects(),
                n.default.LSMgr.getValue(r.LSKey.SETTING_MUSIC) && cc.audioEngine.resumeMusic();
                var t = n.default.AppUtils.getSceneCtrl();
                t && (0 == t.musicName.length ? n.default.AudioMgr.stopMusic() : n.default.AudioMgr.playMusic(t.musicName, !0)),
                n.default.LoginMgr._startKeepalive()
            }
            ,
            t
        }();
        o.default = a;
        var s = function() {};
        o.LoadingTempInfo = s,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/StoragesConstants": "StoragesConstants",
        "../ctrl/SceneCtrlBase": "SceneCtrlBase"
    }],
    AudioMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3be22qfm2VIeK5Nl4gSWyDR", "AudioMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../core/constants/StoragesConstants")
          , n = t("../../G")
          , i = function() {
            function t() {
                this._currMusic = "",
                this._lastMusic = "",
                this._preloadEffectMap = new Map,
                this._playingEffectIdMap = new Map
            }
            return t.prototype.init = function() {}
            ,
            t.prototype.playMusic = function(t, e) {
                var o = this;
                void 0 === e && (e = !1),
                n.default.LogUtils.log("AudioMgr.playMusic audio", t),
                t ? (this._lastMusic = t,
                t = "res_audio/mp3/music/" + t,
                n.default.LSMgr.getValue(r.LSKey.SETTING_MUSIC) && (this._currMusic != t ? (this._currMusic = t,
                cc.audioEngine.stopMusic(),
                cc.resources.load(t, cc.AudioClip, function(r, i) {
                    r ? n.default.LogUtils.log("err", r.stack) : cc.game.isPaused() ? n.default.LogUtils.error("AudioMgr.playMusic game is paused") : o._currMusic == t && cc.audioEngine.playMusic(i, e)
                })) : n.default.LogUtils.error("AudioMgr.playMusic same"))) : n.default.LogUtils.error("AudioMgr.playMusic param error")
            }
            ,
            t.prototype.pauseMusic = function() {
                cc.audioEngine.pauseMusic()
            }
            ,
            t.prototype.playLastMusic = function() {
                this._lastMusic.length > 0 && this.playMusic(this._lastMusic, !0)
            }
            ,
            t.prototype.resumeMusic = function() {
                n.default.LSMgr.getValue(r.LSKey.SETTING_MUSIC) && cc.audioEngine.resumeMusic()
            }
            ,
            t.prototype.stopMusic = function() {
                this._currMusic = void 0,
                cc.audioEngine.stopMusic()
            }
            ,
            t.prototype.preloadEffect = function(t) {
                t ? (t = "res_audio/mp3/sound/" + t,
                n.default.LSMgr.getValue(r.LSKey.SETTING_SOUND) && (this._preloadEffectMap.get(t) || (this._preloadEffectMap.set(t, !0),
                cc.resources.load(t, cc.AudioClip, function() {})))) : n.default.LogUtils.error("AudioMgr.preloadEffect param error")
            }
            ,
            t.prototype.playEffect = function(t, e, o) {
                var i = this;
                if (void 0 === e && (e = !1),
                void 0 === o && (o = .2),
                t) {
                    t = "res_audio/mp3/sound/" + t;
                    var a = n.default.LSMgr.getValue(r.LSKey.SETTING_SOUND);
                    a && (setTimeout(function() {
                        a = !1
                    }, 1e3 * o),
                    cc.resources.load(t, cc.AudioClip, function(o, r) {
                        if (o)
                            n.default.LogUtils.log("err", o.stack);
                        else if (!cc.game.isPaused() && a) {
                            var s = cc.audioEngine.playEffect(r, e);
                            i._playingEffectIdMap.get(t) && i._playingEffectIdMap.delete(t),
                            i._playingEffectIdMap.set(t, s)
                        }
                    }))
                } else
                    n.default.LogUtils.error("AudioMgr.playEffect param error")
            }
            ,
            t.prototype.stopEffect = function(t) {
                if (t) {
                    t = "res_audio/mp3/sound/" + t;
                    var e = this._playingEffectIdMap.get(t);
                    null != e && (cc.audioEngine.stopEffect(e),
                    this._playingEffectIdMap.delete(t))
                } else
                    this._playingEffectIdMap.clear(),
                    cc.audioEngine.stopAllEffects()
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/StoragesConstants": "StoragesConstants"
    }],
    BonusAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "10c3c2GNf5Icph2Vov0Dx+E", "BonusAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = t("../../../G")
          , c = t("./BonusItem")
          , l = cc._decorator
          , u = l.ccclass
          , p = l.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemNodes = [],
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.reloadView()
            }
            ,
            e.prototype.reloadView = function() {
                for (var t = s.default.UserMgr.getBonusDatas(), e = 0; e < t.length; e++)
                    this.itemNodes[e].getComponent(c.default).init(t[e], this)
            }
            ,
            e.prototype.receiptReward = function(t) {
                -1 == t.status ? s.default.AppUtils.getSceneCtrl().addToast("The reward has been claimed!") : 1 == t.status ? s.default.UserMgr.gainBonusData(t) : s.default.AppUtils.getSceneCtrl().addToast("It it not time yet!")
            }
            ,
            i([p(cc.Node)], e.prototype, "itemNodes", void 0),
            i([u], e)
        }(a.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/view/JMAlertBase": "JMAlertBase",
        "./BonusItem": "BonusItem"
    }],
    BonusItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4d4ccVk+2ZJjIAsYpS+wmZx", "BonusItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.nodeGot = null,
                e.nodeToday = null,
                e.labCount = null,
                e._data = null,
                e._target = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                this.node.on("click", this.onGotClicked, this)
            }
            ,
            e.prototype.init = function(t, e) {
                this._data = t,
                this._target = e,
                this.reloadView()
            }
            ,
            e.prototype.resetData = function(t) {
                this._data = t,
                this.reloadView()
            }
            ,
            e.prototype.reloadView = function() {
                this._data && (this.nodeToday.active = 1 == this._data.isToday,
                this.nodeGot.active = -1 == this._data.status,
                this.labCount.string = this._data.count + "",
                this.node.stopAllActions(),
                1 == this._data.isToday && 1 == this._data.status && cc.tween(this.node).to(.5, {
                    scale: 1.05
                }).to(.5, {
                    scale: .95
                }).union().repeatForever().start())
            }
            ,
            e.prototype.onGotClicked = function() {
                this._target && this._data && (this._target.receiptReward(this._data),
                this.reloadView())
            }
            ,
            i([c(cc.Node)], e.prototype, "nodeGot", void 0),
            i([c(cc.Node)], e.prototype, "nodeToday", void 0),
            i([c(cc.Label)], e.prototype, "labCount", void 0),
            i([s], e)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    BtnClickSoundAndDelay: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "66280ZF4DhAMb1rf1liuqV8", "BtnClickSoundAndDelay");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = t("./CommonAudioMgr")
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.unClickTime = 1,
                e._btnSoundRes = "res_audio/mp3/sound/click",
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                var t = this
                  , e = t.node.getComponent(cc.Button);
                e && (e._onTouchEnded = function(o) {
                    e.interactable && e.enabledInHierarchy && (l.default.playEffect(t._btnSoundRes),
                    e._pressed && (cc.Component.EventHandler.emitEvents(e.clickEvents, o),
                    e.node.emit("click", e)),
                    e._pressed = !1,
                    e._updateState(),
                    o.stopPropagation(),
                    e.interactable = !1,
                    t.node.runAction(cc.sequence(cc.delayTime(t.unClickTime), cc.callFunc(function() {
                        e.interactable = !0
                    }))))
                }
                )
            }
            ,
            i([c], e.prototype, "unClickTime", void 0),
            i([s], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "./CommonAudioMgr": "CommonAudioMgr"
    }],
    CanvasEx: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d4b7ebjcgRPeoWRP04HFNc0", "CanvasEx");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc.size(1280, 720)
          , s = a.width / a.height
          , c = cc._decorator
          , l = c.ccclass
          , u = c.property
          , p = c.menu
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._designResolution = a,
                e
            }
            return n(e, t),
            Object.defineProperty(e.prototype, "fitHeight", {
                get: function() {
                    var t = cc.view.getFrameSize();
                    return t.width / t.height > s
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(e.prototype, "fitWidth", {
                get: function() {
                    var t = cc.view.getFrameSize();
                    return t.width / t.height <= s
                },
                enumerable: !1,
                configurable: !0
            }),
            i([u({
                override: !0,
                visible: !1
            })], e.prototype, "_designResolution", void 0),
            i([u({
                override: !0,
                visible: !1
            })], e.prototype, "fitHeight", null),
            i([u({
                override: !0,
                visible: !1
            })], e.prototype, "fitWidth", null),
            i([l, p("Engine/CanvasEx")], e)
        }(cc.Canvas);
        o.default = d,
        cc._RF.pop()
    }
    , {}],
    ChessItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fe283OykiRLmqOe5lqg2vXT", "ChessItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.SPEED = void 0;
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = t("../../G")
          , u = t("./PlayerMgr");
        o.SPEED = 1;
        var p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.iconSpr = null,
                e.jiantou = null,
                e.labStep = null,
                e.labCount = null,
                e.iconSprframes = [],
                e.seatIdx = 0,
                e.idx = 0,
                e.step = 0,
                e.r = 0,
                e.c = 0,
                e.canMove = !1,
                e._gridType = 0,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.Init = function(t, e, o) {
                this.seatIdx = t,
                this._target = o,
                this.idx = e,
                this.iconSpr.spriteFrame = this.iconSprframes[this.seatIdx],
                this.labStep.string = "0",
                this.labStep.node.active = !1,
                this.jiantou.active = !1,
                this.labCount.string = ""
            }
            ,
            e.prototype.setSameCount = function(t, e) {
                this.labCount.string = t > 1 ? "" + t : "",
                this.node.scale = e
            }
            ,
            e.prototype.getChessSpr = function() {
                return this.iconSprframes[this.seatIdx]
            }
            ,
            e.prototype.setPosAndScale = function(t, e) {
                this.node.position = t,
                this.node.scale = e
            }
            ,
            e.prototype.backHome = function() {
                this.node.stopAllActions();
                var t = .2 * o.SPEED;
                this.r = 0,
                this.c = 0,
                this.step = 0,
                this.labStep.string = "" + this.step,
                this._gridType = 0;
                var e = this.node.position;
                this.node.scale = 1,
                this.node.y = e.y + 100,
                cc.tween(this.node).to(t, {
                    x: e.x,
                    y: e.y
                }).start()
            }
            ,
            e.prototype.playMove = function(t, e, r) {
                var n = this;
                this.node.stopAllActions(),
                this.node.zIndex = 200;
                var i = cc.tween(this.node)
                  , a = this.r
                  , s = this.c
                  , c = this
                  , p = this.step + t >= u.MAX_SIDE_POS;
                if (0 == a && 0 == s) {
                    var d = u.default.getFirstGrid(this.seatIdx);
                    i.then(cc.jumpTo(e, cc.v2(d.x, d.y), 20, 1)),
                    i.call(function() {
                        l.default.AudioMgr.playEffect("Ludo_safe_1"),
                        c.step++,
                        c.labStep.string = "" + c.step
                    }),
                    i.delay(.08),
                    a = d.r,
                    s = d.c
                } else {
                    e = .14 * o.SPEED;
                    for (var f = function(o) {
                        if (7 == a && 7 == s)
                            return "break";
                        var r = u.default.getNextGrid(a, s);
                        if (p) {
                            var n = u.default.getTurnGrid(h.seatIdx);
                            n.r == a && n.c == s && (r = u.default.getTopRootGrid(h.seatIdx))
                        }
                        i.then(cc.jumpTo(e, cc.v2(r.x, r.y), 20, 1)),
                        i.call(function() {
                            2 == r.t && o == t - 1 ? l.default.AudioMgr.playEffect("Ludo_safe_1") : l.default.AudioMgr.playEffect("Ludo_chess"),
                            c.step++,
                            c.labStep.string = "" + c.step
                        }),
                        i.delay(.08),
                        a = r.r,
                        s = r.c
                    }, h = this, _ = 0; _ < t && "break" !== f(_); _++)
                        ;
                }
                i.call(function() {
                    n.r = a,
                    n.c = s,
                    n._gridType = u.default.getGrid(a, s).t,
                    n.labStep.string = "" + n.step,
                    r && r(n.step)
                }),
                i.start()
            }
            ,
            e.prototype.backHomeByStep = function(t) {
                var e = this;
                this.node.stopAllActions();
                for (var o = this.r, r = this.c, n = cc.tween(this.node), i = u.default.getFirstGrid(this.seatIdx), a = u.default.getPrepGrid(o, r); a.r != i.r || a.c != i.c; )
                    n.to(.04, {
                        x: a.x,
                        y: a.y
                    }),
                    o = a.r,
                    r = a.c,
                    a = u.default.getPrepGrid(o, r);
                n.to(.04, {
                    x: i.x,
                    y: i.y
                });
                var s = this._target.getHomePosition(this.seatIdx, this.idx);
                n.to(.1, {
                    x: s.x,
                    y: s.y
                }),
                n.call(function() {
                    e.r = 0,
                    e.c = 0,
                    e._gridType = 0,
                    e.step = 0,
                    e.labStep.string = "" + e.step,
                    t && t()
                }),
                n.start()
            }
            ,
            e.prototype.getGridType = function() {
                return this._gridType
            }
            ,
            e.prototype.getDestData = function(t) {
                var e = this.r
                  , o = this.c;
                if (0 == e && 0 == o)
                    return {
                        grid: u.default.getFirstGrid(this.seatIdx),
                        moveCount: 1
                    };
                for (var r = 0, n = 0; n < t; n++) {
                    if (7 == e && 7 == o)
                        return {
                            grid: u.default.getGrid(e, o),
                            moveCount: r
                        };
                    var i = u.default.getNextGrid(e, o);
                    if (this.step + t >= u.MAX_SIDE_POS) {
                        var a = u.default.getTurnGrid(this.seatIdx);
                        a.r == e && a.c == o && (i = u.default.getTopRootGrid(this.seatIdx))
                    }
                    e = i.r,
                    o = i.c,
                    r++
                }
                return {
                    grid: u.default.getGrid(e, o),
                    moveCount: r
                }
            }
            ,
            e.prototype.setJiantou = function(t) {
                t ? (this.jiantou.active = !0,
                this.jiantou.setPosition(cc.v2(0, 54)),
                this.jiantou.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.4, cc.v2(0, 10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, 10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, 12)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -12)).easing(cc.easeOut(3)))))) : (this.jiantou.stopAllActions(),
                this.jiantou.active = !1),
                this.canMove = t
            }
            ,
            i([c(cc.Sprite)], e.prototype, "iconSpr", void 0),
            i([c(cc.Node)], e.prototype, "jiantou", void 0),
            i([c(cc.Label)], e.prototype, "labStep", void 0),
            i([c(cc.Label)], e.prototype, "labCount", void 0),
            i([c({
                type: [cc.SpriteFrame]
            })], e.prototype, "iconSprframes", void 0),
            i([s], e)
        }(cc.Component);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "./PlayerMgr": "PlayerMgr"
    }],
    CommonAudioMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "647ffmZtdVAIKhvLVpV/Qpr", "CommonAudioMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.playEffect = function(t) {
                cc.loader.loadRes(t, function(t, e) {
                    t || cc.audioEngine.play(e, !1, 1)
                }
                .bind(this))
            }
            ,
            t.playMusic = function(t) {
                cc.loader.loadRes(t, function(t, e) {
                    t || (cc.audioEngine.setMusicVolume(1),
                    cc.audioEngine.playMusic(e, !0))
                })
            }
            ,
            t.stopMusic = function() {
                cc.audioEngine.stopMusic()
            }
            ,
            t.pauseMusic = function() {
                cc.audioEngine.pauseMusic()
            }
            ,
            t.resumeMusic = function() {
                cc.audioEngine.resumeMusic()
            }
            ,
            t.pauseAll = function() {
                cc.audioEngine.pauseAll()
            }
            ,
            t.resumeAll = function() {
                cc.audioEngine.resumeAll()
            }
            ,
            t.stopAll = function() {
                cc.audioEngine.stopAll()
            }
            ,
            t
        }();
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    CoreInit: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2663cu7q0xIOq9X6jL84w3Q", "CoreInit"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("./model/AudioMgr")
          , n = t("./storage/LSMgr")
          , i = t("./storage/LSTodayMgr")
          , a = t("./storage/StorageMgr")
          , s = t("./utils/AppUtils")
          , c = t("./utils/FuncUtils")
          , l = t("./utils/LogUtils")
          , u = t("./utils/MgrUtils")
          , p = t("./utils/ViewUtils")
          , d = t("../G")
          , f = t("../core/constants/StoragesConstants");
        t("md5"),
        t("xxtea");
        var h = function() {
            function t() {}
            return t.init = function() {
                d.default.MgrUtils = new u.default,
                d.default.AppUtils = new s.default,
                d.default.ViewUtils = new p.default,
                d.default.LogUtils = new l.default,
                d.default.FuncUtils = new c.default,
                d.default.StorageMgr = new a.default,
                d.default.StorageMgr.init(f.LSConfig.STORAGES),
                d.default.LSMgr = new n.default,
                d.default.LSMgr.init(),
                d.default.LSTodayMgr = new i.default,
                d.default.LSTodayMgr.init(),
                d.default.AudioMgr = new r.default,
                d.default.AudioMgr.init()
            }
            ,
            t
        }();
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../G": "G",
        "../core/constants/StoragesConstants": "StoragesConstants",
        "./model/AudioMgr": "AudioMgr",
        "./storage/LSMgr": "LSMgr",
        "./storage/LSTodayMgr": "LSTodayMgr",
        "./storage/StorageMgr": "StorageMgr",
        "./utils/AppUtils": "AppUtils",
        "./utils/FuncUtils": "FuncUtils",
        "./utils/LogUtils": "LogUtils",
        "./utils/MgrUtils": "MgrUtils",
        "./utils/ViewUtils": "ViewUtils",
        md5: "md5",
        xxtea: "xxtea"
    }],
    FeedbackAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "70c4cYyaoxLN6EAyHfIXebJ", "FeedbackAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = cc._decorator
          , c = s.ccclass
          , l = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.start = function() {
                this.reloadView()
            }
            ,
            e.prototype.reloadView = function() {}
            ,
            i([c], e)
        }(a.default));
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    FuncUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7969bfSuvpERpJAIXhGPjup", "FuncUtils"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.prototype.isString = function(t) {
                return "[object String]" == Object.prototype.toString.call(t)
            }
            ,
            t.prototype.isNumber = function(t) {
                return "[object Number]" == Object.prototype.toString.call(t) && !isNaN(t)
            }
            ,
            t.prototype.prefixInteger = function(t, e) {
                return (Array(e).join("0") + t).slice(-e)
            }
            ,
            t.prototype.clone = function(t) {
                return JSON.parse(JSON.stringify(t))
            }
            ,
            t.prototype.stringToBuffer = function(t) {
                for (var e = new ArrayBuffer(2 * t.length), o = new Uint16Array(e), r = 0, n = t.length; r < n; r++)
                    o[r] = t.charCodeAt(r);
                return e
            }
            ,
            t.prototype.stringToUint8 = function(t) {
                for (var e = [], o = 0, r = t.length; o < r; ++o)
                    e.push(t.charCodeAt(o));
                return new Uint8Array(e)
            }
            ,
            t.prototype.stringToUTF8 = function(t) {
                var e, o = "", r = t.length, n = 0;
                for (n = 0; n < r; n++)
                    (e = t.charCodeAt(n)) >= 1 && e <= 127 ? o += t.charAt(n) : e > 2047 ? (o += String.fromCharCode(224 | e >> 12 & 15),
                    o += String.fromCharCode(128 | e >> 6 & 63),
                    o += String.fromCharCode(128 | e >> 0 & 63)) : (o += String.fromCharCode(192 | e >> 6 & 31),
                    o += String.fromCharCode(128 | e >> 0 & 63));
                return o
            }
            ,
            t.prototype.isIP = function(t) {
                return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(t)
            }
            ,
            t.prototype.isPort = function(t) {
                return /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/.test(t + "")
            }
            ,
            t.prototype.isDomain = function(t) {
                return /^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/.test(t)
            }
            ,
            t.prototype.isUrl = function(t) {
                return new RegExp("^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*().&=+$%-]+: )?[0-9a-z_!~*().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*().;?:@&=+$,%#-]+)+/?)$").test(t)
            }
            ,
            t.prototype.isEmail = function(t) {
                return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t)
            }
            ,
            t.prototype.isMobile = function(t) {
                return /^1[3456789]\d{9}$/.test(t)
            }
            ,
            t.prototype.isNickname = function(t) {
                return /^[\u4e00-\u9fa5A-Za-z0-9-_]*$/.test(t)
            }
            ,
            t.prototype.isRealName = function(t) {
                return /^[\u4E00-\u9FA5]{2,4}$/.test(t)
            }
            ,
            t.prototype.isPassword = function(t) {
                return /^[a-zA-Z]\w{5,17}$/.test(t)
            }
            ,
            t.prototype.isIdCard = function(t) {
                return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(t)
            }
            ,
            t.prototype.strToCamel = function(t) {
                return t.replace(/_(\w)/g, function(t, e) {
                    return e.toUpperCase()
                })
            }
            ,
            t.prototype.decodeByteToStr = function(t, e) {
                for (var o = this.stringToByte(e), r = o.length, n = 0; n < t.length; n++) {
                    var i = o[n % r]
                      , a = t[n] - i;
                    a < 0 && (a += 256),
                    t[n] = a
                }
                return this.byteToString(t)
            }
            ,
            t.prototype.encodeStrToByte = function(t, e) {
                for (var o = this.stringToByte(e), r = this.stringToByte(t), n = o.length, i = 0; i < r.length; i++) {
                    var a = o[i % n]
                      , s = r[i] + a;
                    s > 255 && (s -= 256),
                    r[i] = s
                }
                return r
            }
            ,
            t.prototype.stringToByte = function(t) {
                var e, o, r = new Array;
                e = t.length;
                for (var n = 0; n < e; n++)
                    (o = t.charCodeAt(n)) >= 65536 && o <= 1114111 ? (r.push(o >> 18 & 7 | 240),
                    r.push(o >> 12 & 63 | 128),
                    r.push(o >> 6 & 63 | 128),
                    r.push(63 & o | 128)) : o >= 2048 && o <= 65535 ? (r.push(o >> 12 & 15 | 224),
                    r.push(o >> 6 & 63 | 128),
                    r.push(63 & o | 128)) : o >= 128 && o <= 2047 ? (r.push(o >> 6 & 31 | 192),
                    r.push(63 & o | 128)) : r.push(255 & o);
                return r
            }
            ,
            t.prototype.byteToString = function(t) {
                if ("string" == typeof t)
                    return t;
                for (var e = "", o = t, r = 0; r < o.length; r++) {
                    var n = o[r].toString(2)
                      , i = n.match(/^1+?(?=0)/);
                    if (i && 8 == n.length) {
                        for (var a = i[0].length, s = o[r].toString(2).slice(7 - a), c = 1; c < a; c++)
                            s += o[c + r].toString(2).slice(2);
                        e += String.fromCharCode(parseInt(s, 2)),
                        r += a - 1
                    } else
                        e += String.fromCharCode(o[r])
                }
                return e
            }
            ,
            t
        }();
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    GameCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4458bFiWm5JT5bLaOtjnVD8", "GameCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../core/ctrl/SceneCtrlBase")
          , s = cc._decorator
          , c = s.ccclass
          , l = (s.property,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._stActiveSent = !1,
                e
            }
            return n(e, t),
            e.prototype.onEnable = function() {
                t.prototype.onEnable.call(this)
            }
            ,
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.start = function() {
                this.scheduleOnce(function() {}, 1)
            }
            ,
            i([c], e)
        }(a.default));
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../../core/ctrl/SceneCtrlBase": "SceneCtrlBase"
    }],
    GameItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c5b9647WppEtqLY3HBQPrFs", "GameItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = t("../../G")
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.labInfo = null,
                e.spriteGame = null,
                e.spriteFrames = [],
                e._target = null,
                e._chessNum = 0,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.Init = function(t, e) {
                this._target = e,
                this._chessNum = t.chessNum,
                this.labInfo.string = "",
                this.spriteGame.spriteFrame = this.spriteFrames[t.id - 1]
            }
            ,
            e.prototype.onItemClicked = function() {
                1 == this._chessNum || 2 == this._chessNum || 4 == this._chessNum ? this._target.onGameClicked(this._chessNum) : l.default.AppUtils.getSceneCtrl().addToast("We are sorry, this is only for higher level users")
            }
            ,
            i([c(cc.Label)], e.prototype, "labInfo", void 0),
            i([c(cc.Sprite)], e.prototype, "spriteGame", void 0),
            i([c(cc.SpriteFrame)], e.prototype, "spriteFrames", void 0),
            i([s], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    GameMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "222fbo9gIlMlqKmLj2W1AQJ", "GameMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = t("../../core/constants/StoragesConstants")
          , i = function() {
            function t() {
                this._localStorage = void 0
            }
            return t.prototype.init = function() {
                cc.game.on("e_mgr_remote_update_done", this.initConfig, this),
                this._initLocalStorage()
            }
            ,
            t.prototype._initLocalStorage = function() {
                var t = n.LSConfig.STORAGE_PREFIX + "GameStorage";
                this._localStorage = r.default.StorageMgr.getStorage(t)
            }
            ,
            t.prototype._clearLocalData = function() {
                this._localStorage ? this._localStorage.removeAll() : r.default.LogUtils.error("Bug: local storge not exist")
            }
            ,
            t.prototype._getStorageValue = function(t, e) {
                if (!this._localStorage)
                    return r.default.LogUtils.error("Bug: local storge not exist"),
                    e;
                var o = this._localStorage.getValue(t);
                return void 0 === o || null == o ? e : o
            }
            ,
            t.prototype._setStorageValue = function(t, e) {
                this._localStorage ? this._localStorage.setValue(t, e) : r.default.LogUtils.error("Bug: local storge not exist")
            }
            ,
            t.prototype.initConfig = function() {
                this.initData()
            }
            ,
            t.prototype.initData = function() {}
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/StoragesConstants": "StoragesConstants"
    }],
    GameScene: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a4d018b0b5N1qr5rRYNPYF4", "GameScene");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = t("../../core/model/UserMgr")
          , u = t("../../G")
          , p = t("./ChessItem")
          , d = t("./PlayerMgr")
          , f = [cc.v2(-480, -226), cc.v2(-480, 200), cc.v2(480, 200), cc.v2(480, -226)]
          , h = [[-33, 33], [33, 33], [33, -33], [-33, -33]]
          , _ = [cc.v2(-217, -220), cc.v2(-217, 220), cc.v2(217, 220), cc.v2(217, -220)]
          , g = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.chessPrefab = null,
                e.gridPrefab = null,
                e.playerPrefab = null,
                e.roadPrefab = null,
                e.starPrefab = null,
                e.chessPanel = null,
                e.jiantou = null,
                e.imgWins = [],
                e.labAuto = null,
                e.gameWins = [],
                e._userInfos = [],
                e._isAniming = !1,
                e._saiziNum = -1,
                e._actIdx = -1,
                e._winnerIdxs = [],
                e._gridArr = [],
                e._mapDatas = [],
                e._gameStatus = 0,
                e._isAuto = !1,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                var t = this;
                d.default.Init(),
                u.default.UserMgr.resetSeatIdx(),
                this._initGameView(),
                cc.game.on("event_continue_game", this._handleContinueGame, this),
                this.scheduleOnce(function() {
                    t.startGame()
                }, .5)
            }
            ,
            e.prototype._initGameView = function() {
                this._mapDatas = d.default.getQipanDatas(),
                this._isAuto = !1,
                this.labAuto.string = "\u542f\u52a8\u6258\u7ba1",
                this._gridArr = [];
                for (var t = 0; t < d.ROW; t++) {
                    this._gridArr[t] = [];
                    for (var e = 0; e < d.COL; e++) {
                        var o = this._mapDatas[t][e];
                        if (o.t >= 1 && o.t < 9) {
                            (c = cc.instantiate(this.gridPrefab)).parent = this.chessPanel;
                            var r = c.getComponent("GridItem");
                            r.Init(this._mapDatas[t][e], this),
                            this._gridArr[t][e] = r
                        }
                    }
                }
                for (var n = d.default.GetChessNum(), i = 0; i < 4; ++i) {
                    this.imgWins[i].spriteFrame = null;
                    for (var a = {
                        seatIdx: i,
                        chessList: [],
                        player: null,
                        winRank: 0,
                        rewardCount: 0,
                        killCount: 0,
                        beenKCount: 0,
                        reachCount: 0
                    }, s = 0; s < n; s++) {
                        var c;
                        (c = cc.instantiate(this.gridPrefab)).parent = this.chessPanel;
                        var l = c.getComponent("GridItem");
                        l.Init(this._mapDatas[i][s], this),
                        l.setHomeGrid(!0),
                        this._gridArr[i][s] = l;
                        var u = this.getHomePosition(i, s);
                        c.setPosition(u);
                        var p = cc.instantiate(this.chessPrefab);
                        p.parent = this.chessPanel;
                        var h = p.getComponent("ChessItem");
                        h.Init(i, s, this),
                        a.chessList.push(h)
                    }
                    var _ = cc.instantiate(this.playerPrefab);
                    _.parent = this.chessPanel,
                    _.setPosition(f[i]);
                    var g = _.getComponent("Player");
                    g.setData(i, this),
                    a.player = g,
                    this._userInfos.push(a)
                }
                this.jiantou.active = !1
            }
            ,
            e.prototype._handleContinueGame = function() {
                this.startGame()
            }
            ,
            e.prototype.onRestartClicked = function() {
                0 != this._actIdx || this._saiziNum > 0 || this._isAuto ? u.default.AppUtils.getSceneCtrl().addToast("Please do it at your turn") : this.startGame()
            }
            ,
            e.prototype.startGame = function() {
                this._isAniming = !1,
                this._saiziNum = -1,
                this._actIdx = -1,
                this._winnerIdxs = [];
                for (var t = 0; t < d.ROW; t++)
                    for (var e = 0; e < d.COL; e++) {
                        var o = this._gridArr[t][e];
                        o && o.clear()
                    }
                for (var r = 0, n = this.imgWins; r < n.length; r++)
                    n[r].spriteFrame = null;
                for (var i = 0, a = this._userInfos; i < a.length; i++) {
                    for (var s = a[i], c = 0; c < s.chessList.length; c++)
                        this._gridArr[s.seatIdx][c].addChess(s.chessList[c]),
                        s.chessList[c].backHome();
                    s.player.reset(),
                    s.winRank = 0,
                    s.rewardCount = 0,
                    s.killCount = 0,
                    s.beenKCount = 0,
                    s.reachCount = 0
                }
                this._gameStatus = 1,
                this.hideJiaotou(),
                this.nextRound(!1)
            }
            ,
            e.prototype.getHomePosition = function(t, e) {
                var o = _[t];
                return cc.v2(o.x + h[e][0], o.y + h[e][1])
            }
            ,
            e.prototype.autoOnClicked = function() {
                this._isAuto = !this._isAuto,
                this._isAuto ? this.labAuto.string = "\u505c\u6b62\u6258\u7ba1" : this.labAuto.string = "\u542f\u52a8\u6258\u7ba1"
            }
            ,
            e.prototype.drawRoad = function() {
                for (var t = 0; t < d.ROW; t++)
                    for (var e = 0; e < d.COL; e++) {
                        var o = this._mapDatas[t][e];
                        2 == o.t && this.drawSprite(o, this.starPrefab),
                        1 != o.t && 2 != o.t && 3 != o.t || this.drawSprite(o, this.roadPrefab)
                    }
            }
            ,
            e.prototype.drawSprite = function(t, e) {
                var o = cc.instantiate(e);
                o.parent = this.chessPanel,
                o.x = t.x,
                o.y = t.y;
                var r = 0;
                0 == t.dx && t.dy < 0 ? r = 0 : 0 == t.dx && t.dy > 0 ? r = -180 : t.dx < 0 && 0 == t.dy ? r = 90 : t.dx > 0 && 0 == t.dy ? r = -90 : t.dx > 0 && t.dy > 0 ? r = -135 : t.dx < 0 && t.dy > 0 ? r = 135 : t.dx > 0 && t.dy < 0 ? r = -45 : t.dx < 0 && t.dy < 0 && (r = 45),
                o.angle = r
            }
            ,
            e.prototype.clickCloseBtn = function() {
                1 == this._gameStatus ? u.default.AppUtils.getSceneCtrl().showAlert("alerts/quit/prefab_alert_quit", {}) : cc.director.loadScene("scene_home")
            }
            ,
            e.prototype.hideJiaotou = function() {
                this.jiantou.stopAllActions(),
                this.jiantou.active = !1
            }
            ,
            e.prototype.nextRound = function(t) {
                var e = this;
                if (this._saiziNum = -1,
                -1 == this._actIdx)
                    this._actIdx = 0;
                else {
                    var o = this._userInfos[this._actIdx];
                    if (t && o.rewardCount < 3)
                        o.rewardCount++,
                        u.default.LogUtils.log("reward again", o.rewardCount);
                    else {
                        o.rewardCount = 0;
                        for (var r = (this._actIdx + 1) % 4; r != this._actIdx && 0 != this._userInfos[r].winRank; )
                            r = (r + 1) % 4;
                        if (r == this._actIdx)
                            return void console.error("Program error!!");
                        this._actIdx = r
                    }
                }
                if (1 == this._gameStatus) {
                    var n = this._userInfos[this._actIdx].player.getSiziPos(this.chessPanel);
                    this.jiantou.active = !0,
                    this.jiantou.setPosition(cc.v2(n.x, n.y + 120)),
                    this.jiantou.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.4, cc.v2(0, 10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, 10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, 12)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -12)).easing(cc.easeOut(3))))),
                    (0 != this._actIdx || this._isAuto) && cc.tween(this.node).delay(.4 * p.SPEED).call(function() {
                        var t = Math.floor(6 * Math.random()) + 1;
                        e.randomSizi({
                            seatIdx: e._actIdx,
                            moveCount: t
                        })
                    }).start()
                }
            }
            ,
            e.prototype.handleSizi = function(t) {
                if (1 == this._gameStatus && !(0 != this._actIdx || this._saiziNum > 0 || t != this._actIdx || this._isAuto)) {
                    var e = Math.floor(6 * Math.random()) + 1;
                    this.randomSizi({
                        seatIdx: t,
                        moveCount: e
                    })
                }
            }
            ,
            e.prototype.handleChessClicked = function(t) {
                if (1 == this._gameStatus) {
                    var e = t.seatIdx;
                    console.log("handleChessClicked === ", this._saiziNum, e),
                    0 != this._actIdx || -1 == this._saiziNum || e != this._actIdx || this._isAniming || this._isAuto || 9 != t.getGridType() && t.canMove && (this._isAniming = !0,
                    this.hideChessJiantou(e),
                    this.moveChess({
                        seatIdx: e,
                        moveCount: this._saiziNum,
                        chessIdx: t.idx
                    }))
                }
            }
            ,
            e.prototype.hideChessJiantou = function(t) {
                for (var e = this._userInfos[t].chessList, o = 0; o < e.length; o++)
                    e[o].setJiantou(!1)
            }
            ,
            e.prototype.startChessAction = function(t, e) {
                for (var o = this, r = [], n = [], i = !1, a = !1, s = 0, c = 0, l = t.chessList; c < l.length; c++)
                    if (0 == (s = (g = l[c]).getGridType()) && 6 == e.moveCount)
                        r.push(g);
                    else if (1 == s || 2 == s || 3 == s) {
                        i = !1;
                        for (var u = 0, d = r; u < d.length; u++) {
                            var f = d[u];
                            if (f.r == g.r && f.c == g.c) {
                                i = !0;
                                break
                            }
                        }
                        i || r.push(g)
                    }
                for (var h = 0, _ = r; h < _.length; h++) {
                    var g;
                    a = !1,
                    0 == (s = (g = _[h]).getGridType()) && 6 == e.moveCount ? a = !0 : 1 == s || 2 == s ? a = !0 : 3 == s && g.step + e.moveCount <= 57 && (a = !0),
                    a && (g.setJiantou(!0),
                    n.push(g.idx))
                }
                if (0 != n.length) {
                    if (1 == this._gameStatus && (1 == n.length || this._isAuto || 0 != e.seatIdx && n.length > 0)) {
                        var y = this.aiGetBestChessIdx(e.seatIdx, n, e.moveCount);
                        cc.tween(this.node).delay(.3 * p.SPEED).call(function() {
                            o.hideChessJiantou(e.seatIdx),
                            o.moveChess({
                                seatIdx: e.seatIdx,
                                moveCount: e.moveCount,
                                chessIdx: y
                            })
                        }).start()
                    }
                } else
                    this.nextRound(!1)
            }
            ,
            e.prototype.randomSizi = function(t) {
                var e = this._userInfos[t.seatIdx];
                this._saiziNum = t.moveCount,
                u.default.LogUtils.log("seatIdx=" + t.seatIdx, "moveCount=" + t.moveCount);
                var o = this;
                e.player.playSiziAnim(t.moveCount, function() {
                    o.hideJiaotou(),
                    o.startChessAction(e, t)
                })
            }
            ,
            e.prototype.aiGetBestChessIdx = function(t, e, o) {
                for (var r = [], n = 0, i = e; n < i.length; n++) {
                    var a = i[n]
                      , s = this._userInfos[t].chessList[a]
                      , c = s.getDestData(o);
                    this.checkCanEatChess(t, c.grid) ? r.push({
                        idx: a,
                        score: 100
                    }) : 0 == c.grid.t ? r.push({
                        idx: a,
                        score: 90
                    }) : 2 == c.grid.t ? r.push({
                        idx: a,
                        score: 80
                    }) : 2 == s.getGridType() ? r.push({
                        idx: a,
                        score: 5
                    }) : r.push({
                        idx: a,
                        score: 10
                    })
                }
                r.sort(function(t, e) {
                    return e.score - t.score
                });
                for (var l = r[0].score, u = [], p = 0, d = r; p < d.length; p++) {
                    var f = d[p];
                    f.score == l && u.push(f.idx)
                }
                return u[Math.floor(Math.random() * u.length)]
            }
            ,
            e.prototype.moveChess = function(t) {
                var e = this._userInfos[t.seatIdx].chessList[t.chessIdx]
                  , o = this;
                e.setSameCount(1, 1);
                var r = this._gridArr[e.r][e.c];
                0 == e.getGridType() && (r = this._gridArr[e.seatIdx][e.idx]),
                r && r.delChess(e),
                e.playMove(t.moveCount, .2, function(r) {
                    o._isAniming = !1,
                    o._saiziNum = -1;
                    var n = o._gridArr[e.r][e.c];
                    if (n && n.addChess(e),
                    57 == r) {
                        var i = !0;
                        if (o.setWinChess(t.seatIdx, t.chessIdx)) {
                            i = !1,
                            o._winnerIdxs.push(t.seatIdx);
                            var a = o._winnerIdxs.length;
                            o._userInfos[t.seatIdx].winRank = a,
                            o.imgWins[t.seatIdx].spriteFrame = o.gameWins[a - 1],
                            u.default.AudioMgr.playEffect("Ludo_win")
                        }
                        o._winnerIdxs.length < 2 ? o.nextRound(i) : o.onGameOver()
                    } else
                        o.checkEatChess(t.seatIdx, t.chessIdx, t.moveCount)
                })
            }
            ,
            e.prototype.onGameOver = function() {
                console.error("Game Over!!"),
                this.node.stopAllActions(),
                this._gameStatus = -1,
                this._actIdx = -1,
                this._saiziNum = -1,
                this._isAuto = !1,
                this.labAuto.string = "\u542f\u52a8\u6258\u7ba1";
                for (var t = [], e = 0, o = this._userInfos; e < o.length; e++) {
                    var r = o[e]
                      , n = u.default.UserMgr.getPlayerData(r.seatIdx)
                      , i = r.killCount * l.EAT_RW_GOLD
                      , a = r.reachCount * l.WIN_RW_GOLD
                      , s = r.killCount * l.EAT_RW_GOLD + r.reachCount * l.WIN_RW_GOLD
                      , c = {
                        seatIdx: r.seatIdx,
                        name: n.name,
                        headIdx: n.headIdx,
                        killCount: r.killCount,
                        beenKCount: r.beenKCount,
                        reachCount: r.reachCount,
                        killScore: i,
                        reachScore: a,
                        totalScore: s
                    };
                    t.push(c)
                }
                t.sort(function(t, e) {
                    return e.totalScore - t.totalScore
                }),
                u.default.AppUtils.getSceneCtrl().showAlert("alerts/settle/prefab_alert_settle", {
                    settleDatas: t
                })
            }
            ,
            e.prototype.setWinChess = function(t, e) {
                var o = this._userInfos[t].chessList
                  , r = o[e]
                  , n = d.default.getChessEndPos(t, e);
                r.setPosAndScale(n, .5);
                for (var i = 0, a = 0, s = o; a < s.length; a++)
                    9 == s[a].getGridType() && (i += 1);
                return u.default.LogUtils.log("touch top", i, o),
                this._userInfos[t].reachCount++,
                u.default.UserMgr.addScore(t, l.WIN_RW_GOLD),
                i == o.length
            }
            ,
            e.prototype.checkEatChess = function(t, e, o) {
                var r = this
                  , n = this._userInfos[t].chessList[e]
                  , i = this._gridArr[n.r][n.c]
                  , a = this;
                if (i && 1 == i.t && 2 == i.getChessCount() && 2 == i.getUserCount()) {
                    var s = i.getEatChess(n);
                    if (s)
                        return i.delChess(s),
                        s.backHomeByStep(function() {
                            var t = r._gridArr[s.seatIdx][s.idx];
                            t && t.addChess(s),
                            a.nextRound(!0)
                        }),
                        u.default.UserMgr.addScore(t, l.EAT_RW_GOLD),
                        this._userInfos[t].killCount++,
                        this._userInfos[s.seatIdx].beenKCount++,
                        u.default.AudioMgr.playEffect("ludo_emoji_ani"),
                        !0
                }
                return this.nextRound(6 == o),
                !1
            }
            ,
            e.prototype.checkCanEatChess = function(t, e) {
                var o = this._gridArr[e.r][e.c];
                return !(!o || !o.getCanEatChess(t))
            }
            ,
            e.prototype.WinClose = function() {
                cc.director.loadScene("scene_home")
            }
            ,
            i([c(cc.Prefab)], e.prototype, "chessPrefab", void 0),
            i([c(cc.Prefab)], e.prototype, "gridPrefab", void 0),
            i([c(cc.Prefab)], e.prototype, "playerPrefab", void 0),
            i([c(cc.Prefab)], e.prototype, "roadPrefab", void 0),
            i([c(cc.Prefab)], e.prototype, "starPrefab", void 0),
            i([c(cc.Node)], e.prototype, "chessPanel", void 0),
            i([c(cc.Node)], e.prototype, "jiantou", void 0),
            i([c(cc.Sprite)], e.prototype, "imgWins", void 0),
            i([c(cc.Label)], e.prototype, "labAuto", void 0),
            i([c(cc.SpriteFrame)], e.prototype, "gameWins", void 0),
            i([s], e)
        }(cc.Component);
        o.default = g,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/model/UserMgr": "UserMgr",
        "./ChessItem": "ChessItem",
        "./PlayerMgr": "PlayerMgr"
    }],
    GoodsAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "73a2bJToABOlqWrsMAauQBh", "GoodsAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/constants/AppConstants")
          , s = t("../../../core/view/JMAlertBase")
          , c = t("../../../G")
          , l = cc._decorator
          , u = l.ccclass
          , p = l.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.nodeNormal = null,
                e.nodeRedpack = null,
                e.nodeMore = null,
                e.pnlContent = [],
                e.imgLight = [],
                e.btnClose = [],
                e.imgIcon = null,
                e.labGoods = null,
                e.labMutiple = null,
                e.labRedpack = null,
                e.prefabItem = null,
                e._data = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.nodeNormal.active = !1,
                this.nodeRedpack.active = !1,
                this.nodeMore.active = !1
            }
            ,
            e.prototype.start = function() {}
            ,
            e.prototype.reloadData = function(t) {
                t && (this._data = t,
                this.reloadView())
            }
            ,
            e.prototype.reloadView = function() {
                var t = this._data;
                if (1 == t.length) {
                    c.default.AudioMgr.playEffect("s005");
                    var e = t[0];
                    e.id != a.ITEM_ID.REDPACK ? this.showOneItemWith(e) : this.showRedpackWith(e)
                } else
                    this.showItemList()
            }
            ,
            e.prototype.getGoodsResWith = function(t) {
                return "prefab/public/goods/goods_id_" + t
            }
            ,
            e.prototype.showOneItemWith = function(t) {
                var e = this;
                this.nodeNormal.active = !0,
                this.nodeRedpack.active = !1,
                this.nodeMore.active = !1,
                this.imgLight[0].stopAllActions(),
                this.imgLight[0].runAction(cc.repeatForever(cc.rotateBy(1, 100)));
                var o = this.imgIcon
                  , r = this.getGoodsResWith(t.id);
                cc.resources.load(r, cc.SpriteFrame, function(t, e) {
                    if (t)
                        cc.error(t);
                    else {
                        o.spriteFrame = e;
                        var r = o.node.getContentSize()
                          , n = 168 / r.width
                          , i = 168 / r.height
                          , a = Math.min(n, i);
                        o.node.scale = a
                    }
                }),
                this.labGoods.string = "x " + t.count,
                t.rate && t.rate > 1 ? this.labMutiple.string = "x " + t.rate : this.labMutiple.string = "",
                this.pnlContent[0].stopAllActions(),
                this.pnlContent[0].scale = .1,
                this.btnClose[0].active = !1,
                this.pnlContent[0].runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, .8), cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1), cc.callFunc(function() {
                    e.btnClose[0].active = !0
                })))
            }
            ,
            e.prototype.showRedpackWith = function(t) {
                var e = this;
                this.nodeNormal.active = !1,
                this.nodeRedpack.active = !0,
                this.nodeMore.active = !1,
                this.imgLight[1].stopAllActions(),
                this.imgLight[1].runAction(cc.repeatForever(cc.rotateBy(1, 100))),
                this.labRedpack.string = "" + t.count,
                this.pnlContent[1].stopAllActions(),
                this.pnlContent[1].scale = .2,
                this.btnClose[1].active = !1,
                this.pnlContent[1].runAction(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.1, .8), cc.scaleTo(.1, 1.1), cc.scaleTo(.1, 1), cc.callFunc(function() {
                    e.btnClose[1].active = !0
                })))
            }
            ,
            e.prototype.showItemList = function() {
                var t = this
                  , e = this._data;
                this.nodeNormal.active = !1,
                this.nodeRedpack.active = !1,
                this.nodeMore.active = !0,
                this.pnlContent[2].removeAllChildren();
                for (var o = function(t) {
                    var o = e[t]
                      , n = cc.instantiate(r.prefabItem);
                    r.pnlContent[2].addChild(n),
                    n.opacity = 0,
                    n.scale = .5,
                    n.getChildByName("light").runAction(cc.repeatForever(cc.rotateBy(1, 100))),
                    n.getChildByName("labCount").getComponent(cc.Label).string = "" + o.count;
                    var i = "";
                    o.rate && o.rate > 1 && (i = "x " + o.rate),
                    n.getChildByName("labMutiple").getComponent(cc.Label).string = i;
                    var a = n.getChildByName("icon").getComponent(cc.Sprite)
                      , s = r.getGoodsResWith(o.id);
                    cc.resources.load(s, cc.SpriteFrame, function(t, e) {
                        if (t)
                            cc.error(t);
                        else {
                            a.spriteFrame = e;
                            var o = a.node.getContentSize()
                              , r = 100 / o.width
                              , n = 100 / o.height
                              , i = Math.min(r, n);
                            a.node.scale = i
                        }
                    }),
                    n.runAction(cc.sequence(cc.delayTime(.3 * t + .1), cc.fadeTo(.1, 255), cc.callFunc(function() {
                        c.default.AudioMgr.playEffect("s005")
                    }), cc.scaleTo(.2, 1.2), cc.scaleTo(.1, 1)))
                }, r = this, n = 0; n < e.length; n++)
                    o(n);
                this.btnClose[2].active = !1,
                this.pnlContent[2].stopAllActions(),
                this.pnlContent[2].runAction(cc.sequence(cc.delayTime(.3 * e.length), cc.callFunc(function() {
                    t.btnClose[2].active = !0
                })))
            }
            ,
            e.prototype.closeOnClicked = function() {
                t.prototype.closeOnClicked.call(this)
            }
            ,
            i([p(cc.Node)], e.prototype, "nodeNormal", void 0),
            i([p(cc.Node)], e.prototype, "nodeRedpack", void 0),
            i([p(cc.Node)], e.prototype, "nodeMore", void 0),
            i([p(cc.Node)], e.prototype, "pnlContent", void 0),
            i([p(cc.Node)], e.prototype, "imgLight", void 0),
            i([p(cc.Node)], e.prototype, "btnClose", void 0),
            i([p(cc.Sprite)], e.prototype, "imgIcon", void 0),
            i([p(cc.Label)], e.prototype, "labGoods", void 0),
            i([p(cc.Label)], e.prototype, "labMutiple", void 0),
            i([p(cc.Label)], e.prototype, "labRedpack", void 0),
            i([p(cc.Prefab)], e.prototype, "prefabItem", void 0),
            i([u], e)
        }(s.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/constants/AppConstants": "AppConstants",
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    GridItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4fbd3H31h1MwrxJcj9NiKEU", "GridItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.iconSpr = null,
                e.jiantou = null,
                e.r = 0,
                e.c = 0,
                e.t = 0,
                e._target = null,
                e._chessList = [],
                e._offsets = [[0, -10], [-10, 0], [0, 10], [10, 0]],
                e._zIndexs = [4, 3, 1, 2],
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.Init = function(t, e) {
                this._target = e,
                this.t = t.t,
                this.r = t.r,
                this.c = t.c,
                this.node.setPosition(t.x, t.y),
                this.iconSpr.node.active = !1,
                this.jiantou.active = !1
            }
            ,
            e.prototype.setHomeGrid = function() {}
            ,
            e.prototype.addChess = function(t) {
                this._chessList.push(t),
                this.reloadView()
            }
            ,
            e.prototype.delChess = function(t) {
                for (var e = 0; e < this._chessList.length; e++)
                    if (t == this._chessList[e]) {
                        this._chessList.splice(e, 1);
                        break
                    }
                this.reloadView()
            }
            ,
            e.prototype.clear = function() {
                this._chessList = [],
                this.reloadView()
            }
            ,
            e.prototype.getUserCount = function() {
                for (var t = [0, 0, 0, 0], e = 0, o = 0, r = this._chessList; o < r.length; o++) {
                    var n = r[o];
                    0 == t[n.seatIdx] && e++,
                    t[n.seatIdx]++
                }
                return e
            }
            ,
            e.prototype.getChessCount = function() {
                return this._chessList.length
            }
            ,
            e.prototype.reloadView = function() {
                for (var t = [0, 0, 0, 0], e = 0, o = 0, r = this._chessList; o < r.length; o++)
                    0 == t[(s = r[o]).seatIdx] && e++,
                    t[s.seatIdx]++;
                for (var n = e > 1 ? .6 : 1, i = 0, a = this._chessList; i < a.length; i++) {
                    var s;
                    (s = a[i]).setSameCount(t[s.seatIdx], n),
                    e > 1 ? (s.node.x = this.node.x + this._offsets[s.seatIdx][0],
                    s.node.y = this.node.y + this._offsets[s.seatIdx][1]) : (s.node.x = this.node.x,
                    s.node.y = this.node.y),
                    s.node.zIndex = 10 + 10 * this.r + this._zIndexs[s.seatIdx]
                }
            }
            ,
            e.prototype.getEatChess = function(t) {
                if (1 == this.t && 2 == this._chessList.length)
                    for (var e = 0, o = this._chessList; e < o.length; e++) {
                        var r = o[e];
                        if (r.seatIdx != t.seatIdx)
                            return r
                    }
                return null
            }
            ,
            e.prototype.getCanEatChess = function(t) {
                return 1 == this.t && 1 == this._chessList.length && this._chessList[0].seatIdx != t ? this._chessList[0] : null
            }
            ,
            e.prototype.clickBtn = function() {
                for (var t = 0, e = this._chessList; t < e.length; t++) {
                    var o = e[t];
                    if (0 == o.seatIdx && o.canMove)
                        return void this._target.handleChessClicked(o)
                }
            }
            ,
            e.prototype.setJiantou = function(t) {
                t ? (this.jiantou.active = !0,
                this.jiantou.setPosition(cc.v2(0, 54)),
                this.jiantou.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.4, cc.v2(0, 10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, 10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -10)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, 12)).easing(cc.easeOut(3)), cc.moveBy(.4, cc.v2(0, -12)).easing(cc.easeOut(3)))))) : (this.jiantou.stopAllActions(),
                this.jiantou.active = !1)
            }
            ,
            i([c(cc.Sprite)], e.prototype, "iconSpr", void 0),
            i([c(cc.Node)], e.prototype, "jiantou", void 0),
            i([s], e)
        }(cc.Component);
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    G: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b99afK11MNBGana8tMuNQTR", "G");
        var r = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator.ccclass
          , i = function() {
            function t() {}
            return t.APP_VERSION = "1.0",
            t.RES_VERSION = 100001,
            t.CONF_VERSION = 1,
            t.CUST_VERSION = 1,
            t.HX_CODE = 0,
            t.OPEN_DEBUG = !0,
            t.IOS_CHANNEL = 997,
            t.IS_PLAY_TEST_AD = !1,
            t.ANDROID_CHANNEL = 997,
            t.ChannelId = 0,
            t.DID_GAME_INIT = !1,
            t.UpdateCtrl = null,
            t.GameConfigs = null,
            t.CustDatas = null,
            t.IS_LOCAL_GAME = !1,
            t.IS_SHUTDOWN_HB = !1,
            t.AudioMgr = null,
            t.LSMgr = null,
            t.LSTodayMgr = null,
            t.StorageMgr = null,
            t.AppUtils = null,
            t.FuncUtils = null,
            t.LogUtils = null,
            t.MgrUtils = null,
            t.ViewUtils = null,
            t.didReportQttLoadFinish = !1,
            t.didReportQttRoleLoaded = !1,
            t.didReportQttLoadStart = !1,
            t.NetworkMgr = null,
            t.PublicMgr = null,
            t.LoginMgr = null,
            t.TimeUtils = null,
            t.UserMgr = null,
            t.GameMgr = null,
            t.MiddleDevice = null,
            t.MiddleAD = null,
            t.MiddleAuth = null,
            t.MiddleMgr = null,
            t.LaunchMgr = null,
            r([n], t)
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {}],
    HomeCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "eb495q9eLZEkJH+8HEe0K95", "HomeCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../G")
          , s = t("../../core/ctrl/SceneCtrlBase")
          , c = t("../game/PlayerMgr")
          , l = t("../game/GameItem")
          , u = cc._decorator
          , p = u.ccclass
          , d = u.property
          , f = u.menu
          , h = {
            setting: "alerts/setting/prefab_alert_setting",
            mail: "alerts/mail/prefab_alert_mail",
            service: "alerts/service/prefab_alert_service",
            rank: "alerts/rank/prefab_alert_rank",
            shop: "alerts/shop/prefab_alert_shop",
            bonus: "alerts/bonus/prefab_alert_bonus",
            profile: "alerts/profile/prefab_alert_profile",
            quit: "alerts/quit/prefab_alert_quit",
            settle: "alerts/settle/prefab_alert_settle"
        }
          , _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.gamePrefab = null,
                e.prefabGold = null,
                e.gamePanel = null,
                e.mailRedNode = null,
                e.bonusRedNode = null,
                e.spriteHead = null,
                e.labName = null,
                e.labScore = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                cc.game.on("event_headidx_changed", this.reloadHead, this),
                cc.game.on("event_username_changed", this.reloadView, this),
                cc.game.on("mgr_event_score_update", this.handleAddScore, this),
                cc.game.on("e_ui_pop_alert", this.handlePopAlert, this),
                this.initLayout(),
                this.reloadView(),
                this.reloadHead()
            }
            ,
            e.prototype.onDestroy = function() {
                cc.game.targetOff(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            e.prototype.initLayout = function() {
                this.gamePanel.removeAllChildren();
                for (var t = 0, e = [{
                    id: 1,
                    chessNum: 1,
                    name: ""
                }, {
                    id: 2,
                    chessNum: 2,
                    name: ""
                }, {
                    id: 3,
                    chessNum: 4,
                    name: ""
                }, {
                    id: 4,
                    chessNum: 0,
                    name: ""
                }]; t < e.length; t++) {
                    var o = e[t]
                      , r = cc.instantiate(this.gamePrefab);
                    r.parent = this.gamePanel,
                    r.getComponent(l.default).Init(o, this)
                }
            }
            ,
            e.prototype.reloadView = function() {
                var t = a.default.UserMgr.getUserData();
                this.labName.string = t.name,
                this.labScore.string = t.score + "";
                var e = a.default.LSMgr.getValue("k_mail_readed", !1);
                this.mailRedNode.active = !e,
                this.bonusRedNode.active = a.default.UserMgr.isBonusHasRed()
            }
            ,
            e.prototype.reloadHead = function() {
                a.default.UserMgr.showHeadSprite(this.spriteHead, a.default.UserMgr.getUserData().headIdx)
            }
            ,
            e.prototype.handlePopAlert = function() {
                this.reloadView()
            }
            ,
            e.prototype.handleAddScore = function(t) {
                var e = this;
                if (0 == t.seatIdx)
                    for (var o = this.labScore.node.convertToWorldSpaceAR(cc.v2(0, 0)), r = function(t) {
                        var r = cc.instantiate(n.prefabGold);
                        r.parent = n.node;
                        var i = cc.winSize.width / 2 + 140 - Math.floor(280 * Math.random())
                          , a = cc.winSize.height / 2 + 140 - Math.floor(280 * Math.random());
                        r.setPosition(i, a),
                        cc.tween(r).to(.6, {
                            x: o.x,
                            y: o.y
                        }, {
                            easing: "cubicIn"
                        }).call(function() {
                            r.removeFromParent(),
                            0 == t && e.reloadView()
                        }).start()
                    }, n = this, i = 0; i < 30; i++)
                        r(i)
            }
            ,
            e.prototype.onGameClicked = function(t) {
                c.default.SetChessNum(t),
                a.default.AppUtils.runScene("scene_game")
            }
            ,
            e.prototype.onFunctionClicked = function(t, e) {
                a.default.AppUtils.getSceneCtrl().showAlert(h[e], {})
            }
            ,
            i([d(cc.Prefab)], e.prototype, "gamePrefab", void 0),
            i([d(cc.Prefab)], e.prototype, "prefabGold", void 0),
            i([d(cc.Node)], e.prototype, "gamePanel", void 0),
            i([d(cc.Node)], e.prototype, "mailRedNode", void 0),
            i([d(cc.Node)], e.prototype, "bonusRedNode", void 0),
            i([d(cc.Sprite)], e.prototype, "spriteHead", void 0),
            i([d(cc.Label)], e.prototype, "labName", void 0),
            i([d(cc.Label)], e.prototype, "labScore", void 0),
            i([p, f("Ctrl/HomeCtrl")], e)
        }(s.default);
        o.default = _,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/ctrl/SceneCtrlBase": "SceneCtrlBase",
        "../game/GameItem": "GameItem",
        "../game/PlayerMgr": "PlayerMgr"
    }],
    HttpClient: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bd79a4D8dBM8oB/U7WO54c0", "HttpClient"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = function() {
            function t() {
                this._clientHost = void 0,
                this._clientSender = void 0,
                this._session = 0,
                this._host = void 0,
                this._port = void 0,
                this._path = "",
                this.method = "GET",
                this.secretCode = "",
                this.timeout = 1e4,
                this._hostSession = "",
                this._logAccessToken = "D4A1C5M8O52Q375X01T4D1",
                this._sdkAccessToken = "DSF34DF145AQ981248ASD1OA"
            }
            return t.prototype.isReadyDone = function() {
                return this._clientHost && this._clientSender
            }
            ,
            t.prototype.setURLArgs = function(t, e, o) {
                this._host = t,
                this._port = e,
                this._path = o || ""
            }
            ,
            t.prototype._isValidURLArgs = function() {
                return r.default.FuncUtils.isIP(this._host) && r.default.FuncUtils.isPort(this._port) || r.default.FuncUtils.isDomain(this._host)
            }
            ,
            t.prototype.c2sRequest = function(t, e, o, n, i) {
                var a = this;
                if (o && n) {
                    this._session++;
                    var s;
                    s = 2 == e ? this._create_sdkauth_package(n) : this._create_package(1, o, n, this._session);
                    var c = new XMLHttpRequest;
                    c.onreadystatechange = function() {
                        if (4 === c.readyState && 200 == c.status) {
                            var t = {
                                code: 0
                            };
                            try {
                                var e = JSON.parse(c.response);
                                (t = e.D || {}).code = e.E,
                                0 == t.code && (t.code = 200),
                                r.default.LogUtils.log("\n<-- response http session:", c.session, "name:", o, " response info:", JSON.stringify(t), "\n")
                            } catch (u) {
                                t = {
                                    code: 0
                                };
                                var n = c.response;
                                try {
                                    var s = JSON.parse(n)
                                      , l = a._getXHRErrorCodeDesc(s.E);
                                    r.default.LogUtils.error("\n<-- response error http session:", c.session, "proto name:", o, " http access error info:", l + n, "\n")
                                } catch (p) {
                                    r.default.LogUtils.error(u)
                                }
                            }
                            i ? i({
                                requestInfo: c.requestInfo,
                                responseInfo: t
                            }) : r.default.LogUtils.warn("Warn: HttpClient no callback function")
                        }
                    }
                    ,
                    c.ontimeout = function() {
                        r.default.LogUtils.warn("\n<-- ontimeout http session:", c.session, "proto name:", o, " ontimeout"),
                        i && i({
                            requestInfo: c.requestInfo,
                            responseInfo: {
                                code: 400
                            }
                        })
                    }
                    ,
                    c.onerror = function() {
                        r.default.LogUtils.warn("\n<-- onerror http session:", c.session, "proto name:", o, " onerror"),
                        i && i({
                            requestInfo: c.requestInfo,
                            responseInfo: {
                                code: 400
                            }
                        })
                    }
                    ,
                    c.onabort = function() {
                        r.default.LogUtils.warn("\n<-- onabort http session:", c.session, "proto name:", o, " onabort"),
                        i && i({
                            requestInfo: c.requestInfo,
                            responseInfo: {
                                code: 400
                            }
                        })
                    }
                    ,
                    c.timeout = this.timeout,
                    c.requestInfo = n,
                    c.session = this._session,
                    c.open(this.method, t),
                    r.default.LogUtils.log("--\x3e request http session:", this._session, "proto name:", o, " request info:", n, "url:", t, "sendData", s),
                    c.send(s)
                } else
                    r.default.LogUtils.error("Bug: HttpClient send msg error")
            }
            ,
            t.prototype._getXHRErrorCodeDesc = function(t) {
                return 500 == t ? "host data check error" : "errcode " + t + " not define"
            }
            ,
            t.prototype._create_package = function(t, e, o) {
                var n = JSON.stringify(o)
                  , i = r.default.TimeUtils.getCurrentTime()
                  , a = ""
                  , s = n + i + this._logAccessToken;
                1 == t && (a = window.MD5.hex(r.default.FuncUtils.stringToUTF8(s)));
                var c = {
                    tp: i,
                    sign: a,
                    body: n
                };
                return JSON.stringify(c)
            }
            ,
            t.prototype._create_sdkauth_package = function(t) {
                var e = t.authType
                  , o = {
                    ticket: t.ticket,
                    platform: t.platform,
                    app_id: t.appId,
                    svr_ticket: t.svrTicket
                }
                  , n = r.default.TimeUtils.getCurrentTime()
                  , i = JSON.stringify(o)
                  , a = e + i + n + this._sdkAccessToken
                  , s = {
                    tp: n,
                    t: e,
                    body: i,
                    sign: window.MD5.hex(r.default.FuncUtils.stringToUTF8(a))
                };
                return JSON.stringify(s)
            }
            ,
            t
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    Init: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ff5b72EFltGG4H4icbpYMVN", "Init"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("./G")
          , n = t("./app/AppInit")
          , i = t("./core/CoreInit")
          , a = t("./app/launch/LaunchInit")
          , s = t("./platform/PlatformInit");
        window.G = r.default;
        var c = function() {
            function e() {}
            return e.init = function() {
                t("VersionConfig").init(),
                i.default.init(),
                s.default.init(),
                a.default.init(),
                n.default.init()
            }
            ,
            e
        }();
        o.default = c,
        cc._RF.pop()
    }
    , {
        "./G": "G",
        "./app/AppInit": "AppInit",
        "./app/launch/LaunchInit": "LaunchInit",
        "./core/CoreInit": "CoreInit",
        "./platform/PlatformInit": "PlatformInit",
        VersionConfig: "VersionConfig"
    }],
    JMAlertBase: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6fc8aPGHs9PaI4+ncgQ1+4B", "JMAlertBase");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../core/constants/AppConstants")
          , s = t("../../G")
          , c = cc._decorator
          , l = c.ccclass
          , u = c.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.id = a.ALERT_ID.DEFAULT,
                e.enableOutside = !1,
                e.enableBack = !1,
                e.isBlockOutside = !0,
                e.autoPlayAnim = !1,
                e.isShowing = !1,
                e.isHiding = !1,
                e.alertZIndex = 0,
                e.rootNode = null,
                e._alertStartTime = 0,
                e.cb = null,
                e
            }
            return n(e, t),
            Object.defineProperty(e.prototype, "enableAction", {
                get: function() {
                    return !this.isShowing && !this.isHiding
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onLoad = function() {
                this._alertStartTime = s.default.TimeUtils.getCurrentTime(),
                this.isBlockOutside,
                this.isShowing = !1,
                this.isHiding = !1,
                this.autoPlayAnim && this.playShowAnim()
            }
            ,
            e.prototype.onEnable = function() {
                this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this)
            }
            ,
            e.prototype.onDisable = function() {
                this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this)
            }
            ,
            e.prototype.onDestroy = function() {
                var t = s.default.TimeUtils.getCurrentTime() - this._alertStartTime;
                this.stAlertTime(t)
            }
            ,
            e.prototype.stAlertTime = function() {}
            ,
            e.prototype.reloadData = function(t, e) {
                this.cb = e
            }
            ,
            e.prototype.alertCallback = function(t, e) {
                if (this.cb)
                    try {
                        this.cb(this, t, e)
                    } catch (o) {
                        s.default.LogUtils.error("alert call back error:", o)
                    }
                else
                    this.alertDefaultCallback(t, e)
            }
            ,
            e.prototype.alertDefaultCallback = function(t) {
                switch (t) {
                case "error":
                case "willShow":
                case "hideDone":
                    break;
                default:
                    this.close()
                }
            }
            ,
            e.prototype.blockOnClicked = function() {
                s.default.LogUtils.log("blockOnClicked"),
                this.enableOutside ? this.closeOnClicked() : s.default.LogUtils.log("!this.enableOutside")
            }
            ,
            e.prototype.backKeyOnClicked = function() {
                this.enableBack && this.closeOnClicked()
            }
            ,
            e.prototype.closeOnClicked = function() {
                this.enableAction && (s.default.AudioMgr.playEffect("button"),
                this.alertCallback("clickedClose"))
            }
            ,
            e.prototype.close = function() {
                var t = this;
                this.playHideAnim(function() {
                    t.alertCallback("hideDone");
                    var e = new cc.Event.EventCustom("e_alert_pop",!0);
                    e.setUserData(t),
                    t.node.dispatchEvent(e)
                })
            }
            ,
            e.prototype.playShowAnim = function(t) {
                var e = this;
                if (this.rootNode) {
                    if (!this.isShowing) {
                        this.isShowing = !0,
                        this.isHiding = !1;
                        var o = this.rootNode.scale;
                        this.rootNode.scale = .1,
                        cc.tween(this.rootNode).stop().to(.1, {
                            scale: 1.06
                        }).to(.07, {
                            scale: .98
                        }).to(.03, {
                            scale: o
                        }).start(),
                        this.node.opacity = 51,
                        cc.tween(this.node).stop().to(.2, {
                            opacity: 255
                        }).call(function() {
                            e.isShowing = !1,
                            t && t(e)
                        }).start()
                    }
                } else
                    t && t(this)
            }
            ,
            e.prototype.playHideAnim = function(t) {
                var e = this;
                this.rootNode ? this.isHiding || (this.isShowing = !1,
                this.isHiding = !0,
                cc.tween(this.rootNode).stop().to(.1, {
                    scale: 0
                }).start(),
                cc.tween(this.node).stop().to(.1, {
                    opacity: 0
                }).call(function() {
                    e.isHiding = !1,
                    t && t(e)
                }).start()) : t && t(this)
            }
            ,
            e.prototype.emitCustomEventData = function(t, e) {
                e ? this.alertCallback(e) : s.default.LogUtils.error("[emitCustomEventData] customEventData cannot be empty")
            }
            ,
            e.prototype._onTouchStart = function(t) {
                this.isBlockOutside && t.stopPropagation()
            }
            ,
            i([u({
                type: cc.Enum(a.ALERT_ID),
                tooltip: "\u5f39\u6846 Id"
            })], e.prototype, "id", void 0),
            i([u({
                tooltip: "\u662f\u5426\u54cd\u5e94\uff1a\u70b9\u51fb\u906e\u6321\u5173\u95ed\u5f39\u6846"
            })], e.prototype, "enableOutside", void 0),
            i([u({
                tooltip: "\u662f\u5426\u54cd\u5e94\uff1a\u70b9\u51fb\u8fd4\u56de\u952e\u5173\u95ed\u5f39\u6846"
            })], e.prototype, "enableBack", void 0),
            i([u({
                tooltip: "\u662f\u5426\u963b\u6321\uff1a\u70b9\u51fb\u7a7f\u900f\n\u6ce8\u610f\uff1a\u906e\u6321\u65f6\uff0c\u8bf7\u6dfb\u52a0 Button \u7ec4\u4ef6\u6765\u54cd\u5e94 blockOnClicked"
            })], e.prototype, "isBlockOutside", void 0),
            i([u({
                tooltip: "\u662f\u5426\u81ea\u52a8\u64ad\u653e\u5f39\u51fa/\u5173\u95ed\u52a8\u753b\uff08\u5728 onLoad \u64ad\u653e\uff09"
            })], e.prototype, "autoPlayAnim", void 0),
            i([u({
                tooltip: "\u5f39\u6846\u5f39\u51fa\u7684\u5c42\u6b21\uff0c\u8d8a\u5927\u503c\u8d8a\u5728\u9876\u5c42\u30020\u662f\u9ed8\u8ba4\u503c\uff0c\u503c>=100\u65f6\uff0cpopAllAlert\u63a5\u53e3\u5c06\u4e0d\u5904\u7406\u5b83"
            })], e.prototype, "alertZIndex", void 0),
            i([u(cc.Node)], e.prototype, "rootNode", void 0),
            i([l], e)
        }(cc.Component);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/AppConstants": "AppConstants"
    }],
    JMClickAudio: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b504aWBwU5CWLYwuGGtVJoP", "JMClickAudio");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../G")
          , s = cc._decorator
          , c = s.ccclass
          , l = (s.property,
        s.menu)
          , u = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                this.node.on("click", this._onClicked, this)
            }
            ,
            e.prototype._onClicked = function() {
                a.default.AudioMgr.playEffect("button")
            }
            ,
            i([c, l("\u5609\u7c73\u516c\u7528/JMClickAudio")], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    JMLoadProgressBar: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2fdbd/84BVPyKtIVmE/GSSq", "JMLoadProgressBar");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = (a.requireComponent,
        a.menu)
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.progressBar = null,
                e.progressMarkNode = null,
                e.progressLabel = null,
                e._totalTime = 0,
                e._currentTime = 0,
                e._progress = 0,
                e._currentProgress = 0,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                this._totalTime = 0,
                this._currentTime = 0,
                this._progress = 0,
                this._currentProgress = 0,
                this.updateUI()
            }
            ,
            e.prototype.update = function(t) {
                if (0 != this._totalTime) {
                    if (this._totalTime < this._currentTime + t)
                        return this._totalTime = 0,
                        this._currentTime = 0,
                        this._currentProgress = this._progress,
                        void this.updateUI();
                    var e = this._totalTime - this._currentTime
                      , o = t * (this._progress - this.progressBar.progress) / e;
                    this._currentProgress += o,
                    this._currentTime += t,
                    this.updateUI()
                }
            }
            ,
            e.prototype.updateUI = function() {
                var t = this._currentProgress;
                this.progressBar.progress = t;
                var e = this.progressBar.node.width * (t - .5);
                this.progressMarkNode.x = e,
                this.progressLabel.string = Math.floor(100 * t) + ""
            }
            ,
            e.prototype.setProgress = function(t, e) {
                this._totalTime = t,
                this._currentTime = 0,
                this._progress = e,
                0 == t && (this._currentProgress = e,
                this.updateUI())
            }
            ,
            i([c(cc.ProgressBar)], e.prototype, "progressBar", void 0),
            i([c(cc.Node)], e.prototype, "progressMarkNode", void 0),
            i([c(cc.Label)], e.prototype, "progressLabel", void 0),
            i([s, l("\u5609\u7c73\u516c\u7528/JMLoadProgressBar")], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {}],
    JMToastItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "974f9fG0mtGKY0J+xZPsAS/", "JMToastItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = (a.menu,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.label = null,
                e._msg = "",
                e
            }
            return n(e, t),
            Object.defineProperty(e.prototype, "msg", {
                get: function() {
                    return this._msg
                },
                set: function(t) {
                    var e = this;
                    this._msg !== t && (this._msg = t,
                    this.scheduleOnce(function() {
                        e.updateMsg()
                    }))
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.updateMsg = function() {
                this.label && (this.label.string = this.msg)
            }
            ,
            i([c(cc.RichText)], e.prototype, "label", void 0),
            i([c({
                type: cc.String,
                multiline: !0
            })], e.prototype, "msg", null),
            i([s], e)
        }(cc.Component));
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    LSMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "02e73skFElNSINiX+vjuKV9", "LSMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../core/constants/StoragesConstants")
          , n = t("../../G")
          , i = function() {
            function t() {
                this._localStorage = void 0,
                this._defaultValueMap = void 0
            }
            return t.prototype.init = function() {
                this._initLocalStorage()
            }
            ,
            t.prototype._initLocalStorage = function() {
                var t = r.LSConfig.STORAGE_PREFIX + "DefaultStorage";
                for (var e in this._localStorage = n.default.StorageMgr.getStorage(t),
                this._defaultValueMap = {},
                r.LSConfig.LS_DEFAULT_VALUE) {
                    var o = r.LSConfig.LS_DEFAULT_VALUE[e];
                    this._defaultValueMap[o.key] = o.default
                }
            }
            ,
            t.prototype.getDefaultValue = function(t) {
                return this._defaultValueMap[t]
            }
            ,
            t.prototype.getValue = function(t, e) {
                if (this._localStorage) {
                    var o = this._localStorage.getValue(t);
                    return void 0 === o && (o = void 0 !== e ? e : this.getDefaultValue(t)),
                    o
                }
                n.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.setValue = function(t, e) {
                this._localStorage ? this._localStorage.setValue(t, e) : n.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.setValues = function(t) {
                this._localStorage ? this._localStorage.setValues(t) : n.default.LogUtils.error("local storage not exist")
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/StoragesConstants": "StoragesConstants"
    }],
    LSTodayMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d2ef1KzUm9KbKU4dxYaOZIB", "LSTodayMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../core/constants/StoragesConstants")
          , n = t("../../G")
          , i = function() {
            function t() {
                this._localStorage = void 0,
                this._defaultValueMap = void 0
            }
            return t.prototype.init = function() {
                this._initLocalStorage()
            }
            ,
            t.prototype._initLocalStorage = function() {
                var t = r.LSConfig.STORAGE_PREFIX + "TodayStorage";
                for (var e in this._localStorage = n.default.StorageMgr.getStorage(t),
                this._defaultValueMap = {},
                r.LSConfig.LSTODAY_DEFAULT_VALUE) {
                    var o = r.LSConfig.LSTODAY_DEFAULT_VALUE[e];
                    this._defaultValueMap[o.key] = o.default
                }
            }
            ,
            t.prototype.getDefaultValue = function(t) {
                return this._defaultValueMap[t]
            }
            ,
            t.prototype.getValue = function(t) {
                if (this._localStorage) {
                    this.checkToday();
                    var e = this._localStorage.getValue(t);
                    return void 0 === e && (e = this.getDefaultValue(t)),
                    e
                }
                n.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.setValue = function(t, e) {
                var o = new Map([[t, e]]);
                this.setValues(o)
            }
            ,
            t.prototype.setValues = function(t) {
                if (this._localStorage) {
                    if (t) {
                        this.checkToday();
                        var e = n.default.TimeUtils.getCurrentTime();
                        t.set(r.LSTodayKey.LAST_SAVE_TIME, e),
                        this._localStorage.setValues(t)
                    }
                } else
                    n.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.checkToday = function() {
                var t = this._localStorage.getValue(r.LSTodayKey.LAST_SAVE_TIME);
                t && !n.default.TimeUtils.isToday(t) && this._localStorage.removeAll()
            }
            ,
            t.prototype.dump = function() {
                this._localStorage.dump()
            }
            ,
            t.prototype.remove = function() {
                this._localStorage.removeAll()
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/StoragesConstants": "StoragesConstants"
    }],
    LaunchCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1a556LIs+BEFJnJKw0w6xT4", "LaunchCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../G");
        t("../../Init").default.init();
        var s = cc._decorator
          , c = s.ccclass
          , l = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                a.default.OPEN_DEBUG ? cc.debug.setDisplayStats(!1) : cc.sys.isBrowser ? cc.game.setFrameRate(30) : cc.game.setFrameRate(60),
                cc.view.enableAutoFullScreen(!0),
                a.default.NetworkMgr.initConn(),
                cc.director.preloadScene("scene_login", function() {
                    a.default.LogUtils.log("[LaunchCtrl] loadLoginSceneDone");
                    a.default.AppUtils.runScene("scene_login")
                })
            }
            ,
            i([c], e)
        }(cc.Component));
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../Init": "Init"
    }],
    LaunchInit: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2cbe4pcPbBPzrCY/A9voz/y", "LaunchInit"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = t("./LaunchMgr")
          , i = function() {
            function t() {}
            return t.init = function() {
                r.default.LaunchMgr = new n.default,
                r.default.LaunchMgr.init()
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "./LaunchMgr": "LaunchMgr"
    }],
    LaunchMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6c5a2Q55eZO0oEIozz7PTqV", "LaunchMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.prototype.init = function() {}
            ,
            t.prototype.getPatform = function() {
                return cc.sys.platform == cc.sys.ANDROID ? "1" : "2"
            }
            ,
            t.prototype.getHotfixPath = function() {
                return jsb.fileUtils.getWritablePath() + this._getHotfixPathName()
            }
            ,
            t.prototype.getHotfixTempPath = function() {
                return jsb.fileUtils.getWritablePath() + this._getHotfixPathTempName()
            }
            ,
            t.prototype._getHotfixPathName = function() {
                return "remote-assets"
            }
            ,
            t.prototype._getHotfixPathTempName = function() {
                return this._getHotfixPathName() + "_temp"
            }
            ,
            t
        }();
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    LoadingCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7faa9BNr8BO6KmDVAqYBAk6", "LoadingCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../G")
          , s = cc._decorator
          , c = s.ccclass
          , l = s.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.loadPrecentLabel = null,
                e.icon = null,
                e.percent = 0,
                e.angle = 0,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                this.percent = 0,
                this.angle = 0
            }
            ,
            e.prototype.backKeyOnClicked = function() {
                return this.node.active
            }
            ,
            e.prototype.showLoadingAlert = function() {
                var t = this;
                this.percent = 0,
                this.loadPrecentLabel.string = "loaded" + this.percent + "%",
                this.node.active = !0;
                var e = this.node.getChildByName("bg")
                  , o = this.node.getChildByName("icon")
                  , r = this.node.getChildByName("precent");
                e && (e.active = !1),
                o && (o.active = !1),
                r && (r.active = !1),
                this.scheduleOnce(function() {
                    e && (e.active = !0),
                    o && (o.active = !0,
                    cc.tween(o).delay(.1).call(function() {
                        t.angle = t.angle + 30,
                        o.angle = -t.angle
                    }).union().repeatForever().start()),
                    r && (r.active = !0)
                }, 1)
            }
            ,
            e.prototype.updateLoadingProgress = function(t, e) {
                if (t == e)
                    return this.node.active = !1,
                    void (this.percent = 0);
                var o = Math.floor(t / e * 100);
                o > this.percent && (this.percent = o),
                this.loadPrecentLabel.string = "loaded" + this.percent + "%"
            }
            ,
            e.prototype.showTips = function(t, e, o) {
                var r = this;
                void 0 === e && (e = 1),
                this.node.active = !0,
                this.loadPrecentLabel.string = t,
                a.default.FuncUtils.isNumber(e) && e > 0 && cc.tween(this.node).delay(e).call(function() {
                    r.hideTips(),
                    o && o()
                }).start()
            }
            ,
            e.prototype.hideTips = function() {
                this.node.active = !1,
                this.node.stopAllActions()
            }
            ,
            i([l(cc.Label)], e.prototype, "loadPrecentLabel", void 0),
            i([l(cc.Sprite)], e.prototype, "icon", void 0),
            i([c], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    LocalTestData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "257f9pNmC1IbKIyalEe/MmS", "LocalTestData"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = t("../constants/StoragesConstants")
          , i = function() {
            function t() {}
            return t.prototype.doLocalRequest = function(t, e, o) {
                var r = this.getTestInfoWith(t);
                return o && setTimeout(function() {
                    o({
                        responseInfo: r,
                        requestInfo: e
                    })
                }, 1),
                !0
            }
            ,
            t.prototype.getTestInfoWith = function(t) {
                r.default.LogUtils.log("proto name => " + t);
                var e = {};
                switch (t) {
                case "Auth":
                    e = this.infoFromAuth();
                    break;
                case "Switch":
                    e = {};
                    break;
                case "FetchData":
                    e = this.infoFromFetchData()
                }
                return e.code = 200,
                e
            }
            ,
            t.prototype.infoFromAuth = function() {
                var t = {
                    pid: 0
                }
                  , e = r.default.LSMgr.getValue(n.LSKey.UID, 0);
                return t.pid = e > 0 ? Math.floor(1e5 * Math.random()) + 2e5 : e,
                t
            }
            ,
            t.prototype.infoFromFetchData = function() {
                var t = {
                    player: {
                        pid: null,
                        name: null,
                        reg_tp: null,
                        logout_tp: null,
                        login_day_total: null,
                        new_amount_flag: null,
                        amount: null,
                        diamond: null,
                        group_tag: null,
                        role_level: null,
                        ad_total: null,
                        id_card: null
                    },
                    sign: {},
                    mail: {},
                    amount_box: {},
                    luck_draw: {},
                    withdraw_free_task: {},
                    chop_phone: {},
                    role: {}
                }
                  , e = r.default.UserMgr.getUserData();
                if (e.pid > 0)
                    t.player.pid = e.pid,
                    t.player.name = e.name,
                    t.player.reg_tp = e.regTp,
                    t.player.ad_total = r.default.LSMgr.getValue("kSeeAdTotal", 0),
                    t.player.id_card = "";
                else {
                    var o = r.default.LSMgr.getValue(n.LSKey.UID, 0)
                      , i = r.default.TimeUtils.getCurrentTime();
                    t.player.pid = o,
                    t.player.name = "User_" + o,
                    t.player.reg_tp = i,
                    t.player.logout_tp = i - 1,
                    t.player.login_day_total = 1,
                    t.player.new_amount_flag = 0,
                    t.player.amount = 0,
                    t.player.diamond = 0,
                    t.player.group_tag = "a",
                    t.player.role_level = 0,
                    t.player.ad_total = 0,
                    t.player.id_card = ""
                }
                return t
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../constants/StoragesConstants": "StoragesConstants"
    }],
    LogUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fac77iSk8tGfqB+e917pjoj", "LogUtils"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = function() {
            function t() {}
            return t.prototype.log = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                r.default.OPEN_DEBUG && cc.log.apply(cc, t)
            }
            ,
            t.prototype.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                r.default.OPEN_DEBUG && cc.error.apply(cc, t)
            }
            ,
            t.prototype.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                r.default.OPEN_DEBUG && cc.warn.apply(cc, t)
            }
            ,
            t
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    LoginCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ce5a298efxDobAYtHdHaUwn", "LoginCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../G")
          , s = t("../../core/ctrl/SceneCtrlBase")
          , c = t("../../core/view/JMLoadProgressBar")
          , l = t("../../core/constants/StoragesConstants")
          , u = t("../../core/constants/NetworkConstants")
          , p = cc._decorator
          , d = p.ccclass
          , f = p.property
          , h = p.menu
          , _ = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.nodeLogin = null,
                e.txtPhone = null,
                e.txtCode = null,
                e.loadProgressBar = null,
                e.isLogining = !1,
                e.isPreLoading = !1,
                e.didLoadHomeScene = !1,
                e.downloadPercent = 0,
                e._alreadyEnterScene = !1,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                cc.game.on("e_socket_on_logined", this._handleSocketOnLogined, this),
                cc.game.on("e_socket_on_closed", this._handleSocketOnClosed, this),
                cc.game.on("e_nwk_usr_login", this._handleHttpLogined, this),
                cc.game.on("e_middle_auth_login_result", this._handleAuthLoginResult, this);
                this.initLayout(),
                this.initAuth();
            }
            ,
            e.prototype.onDestroy = function() {
                cc.game.targetOff(this),
                t.prototype.onDestroy.call(this)
            }
            ,
            e.prototype.initLayout = function() {
                cc.sys.isBrowser && document && document.getElementById && (document.getElementById("splash").style.display = "none"),
                this.showDownloadProgress(!1)
            }
            ,
            e.prototype.loginButtonOnClicked = function(t, e) {
                this.loadingCtrl.showTips("login...", 3),
                a.default.LSMgr.setValue(l.LSKey.AUTHORIZE_AUTO_TYPE, e),
                this.showDownloadProgress(!0),
                a.default.LoginMgr.login({})
            }
            ,
            e.prototype.tandcOnClicked = function() {
                a.default.AudioMgr.playEffect("button"),
                cc.sys.openURL(u.NetworkConfig.LaunchTAndCUrl)
            }
            ,
            e.prototype.privacyOnClicked = function() {
                a.default.AudioMgr.playEffect("button"),
                cc.sys.openURL(u.NetworkConfig.LaunchPrivacyUrl)
            }
            ,
            e.prototype.showDownloadProgress = function(t) {
                this.loadProgressBar.node.active = t,
                this.nodeLogin.active = !t,
                t && (this.loadProgressBar.setProgress(0, 0),
                this.loadProgressBar.setProgress(15, 1))
            }
            ,
            e.prototype.initAuth = function() {
                window.G.FIRST_TIMR_AUTO_LOGIN || (window.G.FIRST_TIMR_AUTO_LOGIN = !0)
            }
            ,
            e.prototype.login = function(t) {
                this.isLogining = !0,
                this.showDownloadProgress(!0),
                a.default.LoginMgr.login(t)
            }
            ,
            e.prototype.didLoginSuccessful = function() {
                a.default.LogUtils.log("didLoginSuccessful"),
                this.isLogining = !1,
                this.enterHomeScene()
            }
            ,
            e.prototype.didLoginFailed = function() {
                a.default.LogUtils.log("didLoginFailed"),
                this.isLogining = !1,
                this.showDownloadProgress(!1)
            }
            ,
            e.prototype.preLoadHomeScene = function() {
                var t = this;
                if (!this.didLoadHomeScene && !this.isPreLoading) {
                    this.isPreLoading = !0;
                    var e = void 0;
                    cc.director.preloadScene("scene_home", function(o, r) {
                        e = a.default.AppUtils.getLoadProgressInfo(e, o, r),
                        t.downloadPercent = Math.floor(100 * e.precent)
                    }, function(e) {
                        t.isPreLoading = !1,
                        e ? t.addToast("scene load error") : (t.didLoadHomeScene = !0,
                        t.enterHomeScene())
                    })
                }
            }
            ,
            e.prototype.enterHomeScene = function() {
                var t = this;
                if (!this._alreadyEnterScene && (this.preLoadHomeScene(),
                !this._checkLimitGoToHomeScene()))
                    if (this._alreadyEnterScene = !0,
                    a.default.OPEN_DEBUG)
                        this.loadProgressBar.setProgress(.1, 1),
                        this.scheduleOnce(function() {
                            a.default.AppUtils.runScene("scene_home")
                        }, .1);
                    else {
                        var e = 3 * Math.random();
                        this.loadProgressBar.setProgress(3, .8),
                        this.node.stopAllActions(),
                        cc.tween(this.node).delay(3).call(function() {
                            t.loadProgressBar.setProgress(e, 1)
                        }).delay(e).call(function() {
                            a.default.AppUtils.runScene("scene_home")
                        }).start()
                    }
            }
            ,
            e.prototype._checkLimitGoToHomeScene = function() {
                return this.isLogining ? (a.default.LogUtils.log("logining cannot enter home"),
                !0) : !this.didLoadHomeScene && (a.default.LogUtils.log("home scene not loaded, refuse enter home"),
                !0)
            }
            ,
            e.prototype._handleHttpLogined = function(t) {
                switch (t.responseInfo.code) {
                case 200:
                    break;
                default:
                    this.addToast("login fail!(" + t.responseInfo.code + ")"),
                    this.didLoginFailed()
                }
            }
            ,
            e.prototype._handleSocketOnLogined = function() {
                this.didLoginSuccessful()
            }
            ,
            e.prototype._handleSocketOnClosed = function() {
                this.didLoginFailed()
            }
            ,
            e.prototype._handleAuthLoginResult = function(t) {
                a.default.LogUtils.warn("\u8682\u8681\u8c03\u8bd5[LoginCtrl] _handleAuthLoginResult code =%s", t.code),
                this.loadingCtrl.hideTips();
                var e = t.errorMsg
                  , o = t.code
                  , r = t.data;
                e || (e = 200 == t.code ? "\u6388\u6743\u6210\u529f" : "\u6388\u6743\u5931\u8d25"),
                200 == o ? this.login(r) : (this.addToast(e),
                this.showDownloadProgress(!1))
            }
            ,
            i([f(cc.Node)], e.prototype, "nodeLogin", void 0),
            i([f(cc.EditBox)], e.prototype, "txtPhone", void 0),
            i([f(cc.EditBox)], e.prototype, "txtCode", void 0),
            i([f(c.default)], e.prototype, "loadProgressBar", void 0),
            i([d, h("Ctrl/LoginCtrl")], e)
        }(s.default);
        o.default = _,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/NetworkConstants": "NetworkConstants",
        "../../core/constants/StoragesConstants": "StoragesConstants",
        "../../core/ctrl/SceneCtrlBase": "SceneCtrlBase",
        "../../core/view/JMLoadProgressBar": "JMLoadProgressBar"
    }],
    LoginMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f8655fzzmdE0oZuUJywEzf+", "LoginMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = t("../../core/constants/StoragesConstants")
          , i = t("../../core/constants/AppConstants")
          , a = t("../../core/constants/NetworkConstants")
          , s = function() {
            function t() {
                this._localStorage = void 0,
                this.loginData = null,
                this.loginTimestamp = 0,
                this.reconnectTimes = 0,
                this.reconnectMaxTimes = 6,
                this.isOnline = !1,
                this._sdkAuthTypeInfoMap = null,
                this._authInfo = null,
                this._countDownTimer = 0,
                this.keepaliveTime = 0,
                this.keepaliveTimeoutCount = 0,
                this._keepaliveIntervalId = null
            }
            return t.prototype.init = function() {
                r.default.PublicMgr.on(i.PUBLIC_MSG.LOGIN_SUCCESS, i.PUBLIC_MSG_ORDER.LOGIN, this.handleDidLoginSuccess, this),
                r.default.PublicMgr.on(i.PUBLIC_MSG.DISCONNECTED, i.PUBLIC_MSG_ORDER.LOGIN, this.handleDidDisconnected, this),
                this._initLocalStorage(),
                this._initEventListener(),
                this._initPublishListener()
            }
            ,
            t.prototype.handleDidLoginSuccess = function() {
                this.isOnline = !0,
                this.reconnectTimes = 0,
                cc.game.emit("e_socket_on_logined")
            }
            ,
            t.prototype.handleDidDisconnected = function() {
                this.isOnline = !1
            }
            ,
            t.prototype._initLocalStorage = function() {
                var t = n.LSConfig.STORAGE_PREFIX + "LoginStorage";
                this._localStorage = r.default.StorageMgr.getStorage(t)
            }
            ,
            t.prototype.initLocalConfig = function() {}
            ,
            t.prototype._initEventListener = function() {
                cc.game.on("e_socket_on_connected", this._handleSocketOnConected, this),
                cc.game.on("e_socket_on_closed", this._handleSocketOnClosed, this)
            }
            ,
            t.prototype._initPublishListener = function() {}
            ,
            t.prototype.getStorageValue = function(t) {
                if (this._localStorage)
                    return this._localStorage.getValue(t);
                r.default.LogUtils.error("Bug: local storge not exist")
            }
            ,
            t.prototype.setStorageValue = function(t, e) {
                this._localStorage ? this._localStorage.setValue(t, e) : r.default.LogUtils.error("Bug: local storge not exist")
            }
            ,
            t.prototype.setStorageValues = function(t) {
                this._localStorage ? this._localStorage.setValues(t) : r.default.LogUtils.error("Bug: local storge not exist")
            }
            ,
            t.prototype.isGuest = function() {
                return !!this.loginData && this.loginData.isGuest
            }
            ,
            t.prototype.login = function(t) {
                var e = this;
                this._isLogining || (this._isLogining = !0,
                setTimeout(function() {
                    e._isLogining = !1
                }, 1e3),
                this.loginHttp(t))
            }
            ,
            t.prototype.doGetSdkCerCountdown = function() {}
            ,
            t.prototype._countDownCallback = function() {}
            ,
            t.prototype.handleSdkCerInfo = function() {}
            ,
            t.prototype.loginHttp = function(t) {
                switch (r.default.LogUtils.log("loginHttp", t),
                window.G.FIRST_TIMR_AUTO_LOGIN = !0,
                t.isGuest && (t.loginType = i.LOGIN_TYPE.NORMAL),
                null == t.loginType && (t.loginType = i.LOGIN_TYPE.NORMAL),
                this._authInfo = t,
                Number(t.loginType)) {
                case i.LOGIN_TYPE.NORMAL:
                    r.default.NetworkMgr.connectSocket(a.NetworkConfig.LaunchUserUrl);
                    break;
                case i.LOGIN_TYPE.QTT:
                    this.requestSdkAuthLogin(t);
                    break;
                default:
                    r.default.LogUtils.error("login type error", t)
                }
            }
            ,
            t.prototype.offline = function() {
                r.default.LogUtils.warn("ant debug", "offline !!!"),
                r.default.NetworkMgr.closeSocket(),
                r.default.PublicMgr.emit(i.PUBLIC_MSG.DISCONNECTED)
            }
            ,
            t.prototype._handleSocketOnConected = function() {
                this._stopKeepalive(),
                this.requestAuth()
            }
            ,
            t.prototype._handleSocketOnClosed = function() {
                this.isOnline = !1
            }
            ,
            t.prototype._responseLogin = function() {}
            ,
            t.prototype._startKeepalive = function() {
                var t = this;
                this._stopKeepalive(),
                r.default.NetworkMgr.setKeepAliveCallback(this._responseKeepalive.bind(this)),
                this.keepaliveTimeoutCount = 0,
                this._keepaliveIntervalId = setInterval(function() {
                    t.keepaliveTimeoutCount++,
                    r.default.IS_LOCAL_GAME && t._requestKeepalive(),
                    4 == t.keepaliveTimeoutCount ? t._requestKeepalive() : 5 == t.keepaliveTimeoutCount && (clearInterval(t._keepaliveIntervalId),
                    t._keepaliveIntervalId = void 0,
                    r.default.NetworkMgr.closeSocket(),
                    r.default.AppUtils.getSceneCtrl().showOfflineAlert())
                }, 1e4)
            }
            ,
            t.prototype._stopKeepalive = function() {
                this._keepaliveIntervalId && (clearInterval(this._keepaliveIntervalId),
                this._keepaliveIntervalId = void 0)
            }
            ,
            t.prototype._requestKeepalive = function() {}
            ,
            t.prototype._responseKeepalive = function() {
                this.keepaliveTimeoutCount = 0
            }
            ,
            t.prototype._handleAuthLogoutResult = function() {
                r.default.LoginMgr.offline(),
                cc.director.loadScene("scene_login")
            }
            ,
            t.prototype.requestSdkAuthLogin = function() {}
            ,
            t.prototype.requestAuth = function() {
                var t = {
                    t: this._authInfo.loginType || 0,
                    svr_ticket: "",
                    udid: r.default.MiddleMgr.getUDID(),
                    idfa: r.default.MiddleMgr.getIDFAEncode(),
                    channel: r.default.MiddleDevice.getChannelId(),
                    ver: r.default.MiddleMgr.getVersion(),
                    isp: r.default.MiddleDevice.getOperator(),
                    phone: r.default.MiddleDevice.getDeviceInfo(),
                    net_state: r.default.MiddleDevice.getApnType()
                };
                r.default.NetworkMgr.sendSocketRequest("Auth", t, this._responseAuth.bind(this))
            }
            ,
            t.prototype._responseAuth = function(t) {
                r.default.LogUtils.warn("ant debug", "auth response", t);
                var e = t.responseInfo;
                if (200 == e.code) {
                    var o = e.pid;
                    r.default.LSMgr.setValue(n.LSKey.UID, o),
                    this.requestSwitch(o)
                } else
                    cc.game.emit("e_nwk_usr_login", t)
            }
            ,
            t.prototype.requestSwitch = function() {
                r.default.LogUtils.warn("ant debug", "switch request"),
                r.default.NetworkMgr.sendSocketRequest("Switch", {
                    ab_flag: "A"
                }, this._responseSwitch.bind(this))
            }
            ,
            t.prototype._responseSwitch = function(t) {
                r.default.LogUtils.warn("ant debug", "switch response", t);
                var e = t.responseInfo;
                200 == e.code ? (e.svr_tp && e.svr_tp > 0 && r.default.TimeUtils.synTime(e.svr_tp),
                this.requestFetchData()) : cc.game.emit("e_nwk_usr_login", t)
            }
            ,
            t.prototype.requestFetchData = function() {
                r.default.LogUtils.warn("ant debug", "fetchData request"),
                r.default.NetworkMgr.sendSocketRequest("FetchData", {}, this._responseFetchData.bind(this))
            }
            ,
            t.prototype._responseFetchData = function(t) {
                r.default.LogUtils.warn("ant debug", "fetchData response", t),
                200 == t.responseInfo.code ? r.default.PublicMgr.emit(i.PUBLIC_MSG.LOGIN_SUCCESS) : cc.game.emit("e_nwk_usr_login", t)
            }
            ,
            t
        }();
        o.default = s,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/AppConstants": "AppConstants",
        "../../core/constants/NetworkConstants": "NetworkConstants",
        "../../core/constants/StoragesConstants": "StoragesConstants"
    }],
    MailAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "501d2DOPCxKyYHZPHsAnNYe", "MailAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = t("../../../G")
          , c = cc._decorator
          , l = c.ccclass
          , u = c.property
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.labTitle = null,
                e.labContent = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.reloadView()
            }
            ,
            e.prototype.reloadView = function() {
                this.labContent.node.active = !1
            }
            ,
            e.prototype.openOnClicked = function() {
                s.default.AudioMgr.playEffect("button"),
                this.labContent.node.active = !0,
                s.default.LSMgr.setValue("k_mail_readed", !0)
            }
            ,
            i([u(cc.Label)], e.prototype, "labTitle", void 0),
            i([u(cc.Label)], e.prototype, "labContent", void 0),
            i([l], e)
        }(a.default);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    MgrUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6d6ccxzNd5Ge6wAx8GtKhMe", "MgrUtils"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../core/constants/StoragesConstants")
          , n = t("../../G")
          , i = function() {
            function t() {}
            return t.prototype.getConfig = function(t) {
                if (n.default.GameConfigs && n.default.GameConfigs[t])
                    return n.default.GameConfigs[t]
            }
            ,
            t.prototype.loadLocalConfig = function() {
                n.default.LogUtils.log("loadLocalConfig"),
                this.loadGameConfig(),
                this.loadCustConfig()
            }
            ,
            t.prototype.loadGameConfig = function() {
                cc.log("local config loading...");
                var t = "GameConfigs" + n.default.CONF_VERSION + ".bin"
                  , e = cc.url.raw("resources/res_json/" + t);
                cc.loader.load({
                    url: e,
                    type: "binary"
                }, function(t, e) {
                    if (t)
                        cc.error(t.message);
                    else if (n.default.LSMgr.getValue("kDataVerNum", 0) > n.default.CONF_VERSION)
                        cc.log("local config ignore");
                    else {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var o = n.default.FuncUtils.decodeByteToStr(e, r.LSConfig.BINARY_DATA_ENCRYPTKEY);
                        n.default.GameConfigs = JSON.parse(o),
                        cc.game.emit("e_mgr_remote_update_done", {})
                    }
                })
            }
            ,
            t.prototype.loadCustConfig = function() {
                cc.log("local custdata loading...");
                var t = "CustDatas" + n.default.CUST_VERSION + ".bin"
                  , e = cc.url.raw("resources/res_json/" + t);
                cc.loader.load({
                    url: e,
                    type: "binary"
                }, function(t, e) {
                    if (t)
                        cc.error(t.message);
                    else if (n.default.LSMgr.getValue("kCustVerNum", 0) > n.default.CUST_VERSION)
                        cc.log("local cust data ignore");
                    else {
                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                        var o = n.default.FuncUtils.decodeByteToStr(e, r.LSConfig.BINARY_DATA_ENCRYPTKEY);
                        n.default.CustDatas = JSON.parse(o),
                        n.default.LSMgr.setValue("kCustDatas", n.default.CustDatas)
                    }
                })
            }
            ,
            t.prototype.getLocalStorageSize = function() {
                var t = 0;
                for (var e in window.localStorage)
                    window.localStorage.hasOwnProperty(e) && (t += window.localStorage.getItem(e).length);
                return (t / 1024).toFixed(2) + "KB"
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/StoragesConstants": "StoragesConstants"
    }],
    MiddleAD: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1736eCv5hVADaXOc3C7kdZu", "MiddleAD"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../G")
          , n = function() {
            function t() {}
            return t.prototype.handleEvent = function(t) {
                var e = t.eventKey;
                switch (t.data && t.sdkName && (t.data.sdkName = t.sdkName),
                e) {
                case "ad_error":
                    cc.game.emit("e_middle_ad_error", t);
                    break;
                case "ad_showed":
                    cc.game.emit("e_middle_ad_showed", t);
                    break;
                case "ad_closed":
                    cc.game.emit("e_middle_ad_closed", t);
                    break;
                case "ad_clicked":
                    cc.game.emit("e_middle_ad_clicked", t);
                    break;
                case "ad_award":
                    cc.game.emit("e_middle_ad_award", t);
                    break;
                case "ad_skip":
                    cc.game.emit("e_middle_ad_skip", t)
                }
            }
            ,
            t.prototype.doCommondFromChild = function(t) {
                var e, o, n, i, a, s = t.cmd;
                if (t.args) {
                    var c;
                    switch (e = t.args.adType,
                    o = t.args.positionId,
                    n = t.args.uiInfo,
                    a = t.args.visible,
                    t.args.value,
                    i = t.args.opIndex,
                    s) {
                    case "loadAndShowAD":
                        c = r.default.MiddleAD.loadAndShowAD(void 0, e, void 0, o, n, i);
                        break;
                    case "setADVisible":
                        c = r.default.MiddleAD.setADVisible(void 0, e, void 0, o, a)
                    }
                    return c
                }
            }
            ,
            t.prototype.loadAndShowAD = function() {}
            ,
            t.prototype.clearAD = function() {}
            ,
            t.prototype.clearAllAD = function() {}
            ,
            t.prototype.preloadAD = function() {}
            ,
            t.prototype.setADVisible = function() {}
            ,
            t.prototype.setAdUserProtocolAgreeState = function() {}
            ,
            t.prototype.initCustomMap = function() {}
            ,
            t
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {
        "../G": "G"
    }],
    MiddleAuth: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b704bJ6W6lAHZxEO1CL5eg0", "MiddleAuth"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../core/constants/AppConstants")
          , n = t("../G")
          , i = function() {
            function t() {}
            return t.prototype.handleEvent = function(t) {
                var e = t.eventKey;
                switch (e) {
                case "auth_login_result":
                    t.data || this.getAuthInfo(e.sdkName),
                    cc.game.emit("e_middle_auth_login_result", t);
                    break;
                case "auth_logout_result":
                    t.data || this.getAuthInfo(e.sdkName),
                    cc.game.emit("e_middle_auth_logout_result", t);
                    break;
                case "auth_change_account":
                    t.data || this.getAuthInfo(e.sdkName),
                    cc.game.emit("e_middle_auth_change_account", t);
                    break;
                case "auth_exit":
                    cc.game.end()
                }
            }
            ,
            t.prototype.doCommondFromChild = function(t) {
                switch (t.cmd) {
                case "exitGame":
                    cc.game.emit("e_middle_webview_exit")
                }
            }
            ,
            t.prototype.handleDidDoCommondFromParent = function(t) {
                cc.error("MiddleUpdate handleDidDoCommondFromParent \u672a\u5904\u7406", t)
            }
            ,
            t.prototype.login = function(t) {
                n.default.MiddleMgr.handleEvent({
                    module: "auth",
                    eventKey: "auth_login_result",
                    code: 200,
                    data: {
                        sdkName: "Web",
                        authType: t,
                        authStatus: r.AUTH_STATUS.LOGIN_SUCCESS,
                        isWaitAuth: !1,
                        loginType: r.LOGIN_TYPE.NORMAL,
                        uuid: "ssmjh5_" + n.default.MiddleDevice.getUDID(),
                        isGuest: !1
                    }
                })
            }
            ,
            t.prototype.logout = function() {
                return !1
            }
            ,
            t.prototype.getAuthInfo = function() {
                return {
                    sdkName: "Web\u6388\u6743",
                    authStatus: r.AUTH_STATUS.LOGIN_SUCCESS,
                    isWaitAuth: !1,
                    loginType: r.LOGIN_TYPE.NORMAL,
                    uuid: "ssmjh5_" + n.default.MiddleDevice.getUDID(),
                    tuid: "000",
                    tk: "000",
                    nickname: void 0,
                    headUrl: void 0
                }
            }
            ,
            t.prototype.isSupportRealName = function() {
                return !1
            }
            ,
            t.prototype.requestRealNameInfo = function() {
                n.default.MiddleMgr.handleEvent({
                    module: "auth",
                    eventKey: "auth_real_name_info",
                    code: 500,
                    errorMsg: "\u4e0d\u652f\u6301\u5b9e\u540d\u8ba4\u8bc1"
                })
            }
            ,
            t.prototype.isSupportOpenRealNameAlert = function() {
                return !1
            }
            ,
            t.prototype.openRealNameAlert = function() {
                return !1
            }
            ,
            t.prototype.showExitAlert = function() {
                return !1
            }
            ,
            t.prototype.exitGame = function() {
                return !1
            }
            ,
            t.prototype.isLaunchFromCenter = function() {
                return !1
            }
            ,
            t.prototype.openGameCenter = function() {
                return !1
            }
            ,
            t.prototype.openSocialCenter = function() {
                return !1
            }
            ,
            t.prototype.uploadPlayerInfo = function() {}
            ,
            t.prototype.uploadGameStart = function() {}
            ,
            t.prototype.showFeedback = function() {
                return !1
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../G": "G",
        "../core/constants/AppConstants": "AppConstants"
    }],
    MiddleDevice: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ceaa9MoPipFSZdybJlbV4la", "MiddleDevice"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../G")
          , n = window.MD5
          , i = function() {
            function t() {}
            return t.prototype.handleEvent = function(t) {
                switch (t.eventKey) {
                case "device_exit":
                    cc.game.end();
                    break;
                case "device_camera":
                    cc.game.emit("e_middle_device_camera_result", t);
                    break;
                case "device_on_configuration_changed":
                    cc.game.emit("e_middle_device_on_configuration_changed", t.data);
                    break;
                case "device_update_location":
                    cc.game.emit("e_middle_device_update_location", t.data)
                }
            }
            ,
            t.prototype.doCommondFromChild = function(t) {
                var e, o, n, i, a, s, c, l = t.cmd;
                switch (t.args && (e = t.args.orientation,
                o = t.args.uid,
                n = t.args.phoneNumber,
                i = t.args.msg,
                a = t.args.imageType,
                s = t.args.dt),
                l) {
                case "getConfig":
                    c = {};
                    break;
                case "getOperator":
                    c = r.default.MiddleDevice.getOperator();
                    break;
                case "getDeviceName":
                    c = r.default.MiddleDevice.getDeviceName();
                    break;
                case "getDeviceInfo":
                    c = r.default.MiddleDevice.getDeviceInfo();
                    break;
                case "getUserDataSavePath":
                    c = r.default.MiddleDevice.getUserDataSavePath();
                    break;
                case "getUDID":
                    c = r.default.MiddleDevice.getUDID();
                    break;
                case "getIMEI":
                    c = r.default.MiddleDevice.getIMEI();
                    break;
                case "getIDFA":
                    c = r.default.MiddleDevice.getIDFA();
                    break;
                case "setOrientation":
                    c = r.default.MiddleDevice.setOrientation(e);
                    break;
                case "callService":
                    c = r.default.MiddleDevice.callService(o, n);
                    break;
                case "toast":
                    c = r.default.MiddleDevice.toast(i);
                    break;
                case "camera":
                    c = r.default.MiddleDevice.camera(a);
                    break;
                case "vibrate":
                    c = r.default.MiddleDevice.vibrate(s);
                    break;
                case "requestLocation":
                    c = r.default.MiddleDevice.requestLocation()
                }
                return c
            }
            ,
            t.prototype.handleDidDoCommondFromParent = function(t) {
                cc.error("MiddleUpdate handleDidDoCommondFromParent \u672a\u5904\u7406", t)
            }
            ,
            t.prototype.isApplicationExist = function() {
                return !1
            }
            ,
            t.prototype.openMarketApp = function() {
                return !1
            }
            ,
            t.prototype.getVersionName = function() {
                return r.default.APP_VERSION
            }
            ,
            t.prototype.getVersionCode = function() {
                return r.default.RES_VERSION
            }
            ,
            t.prototype.getOperator = function() {
                return 0
            }
            ,
            t.prototype.getApnType = function() {
                var t = cc.sys.getNetworkType();
                return 0 == t && (t = -1),
                t
            }
            ,
            t.prototype.getDeviceName = function() {
                return "\u9ed8\u8ba4\u8bbe\u5907\u540d\u79f0"
            }
            ,
            t.prototype.getDeviceInfo = function() {
                var t = this.getDeviceName()
                  , e = cc.sys.os
                  , o = cc.sys.osVersion
                  , r = cc.sys.windowPixelResolution;
                return cc.js.formatStr("%s|%s%s|%s*%s", t, e, o, r.width, r.height)
            }
            ,
            t.prototype.getUserDataSavePath = function() {
                return ""
            }
            ,
            t.prototype.getUDID = function() {
                var t = this.getUserDataSavePath()
                  , e = cc.sys.localStorage.getItem("RANDOM_NUMBER");
                return e ? t = e : (t = Math.random() * (new Date).getTime() + "",
                cc.sys.localStorage.setItem("RANDOM_NUMBER", t)),
                n.hex(String(t))
            }
            ,
            t.prototype.getIMEI = function() {
                return "simulator"
            }
            ,
            t.prototype.getIDFA = function() {
                return ""
            }
            ,
            t.prototype.getChannelId = function() {
                return r.default.ChannelId
            }
            ,
            t.prototype.getAppName = function() {
                return r.default.MiddleMgr.sdkConfig.appName ? r.default.MiddleMgr.sdkConfig.appName : "\u672a\u914d\u7f6e"
            }
            ,
            t.prototype.getAppPackageName = function() {
                return "web"
            }
            ,
            t.prototype.setOrientation = function() {
                return !1
            }
            ,
            t.prototype.callService = function(t, e) {
                return window.location.href = "tel:" + e,
                !0
            }
            ,
            t.prototype.toast = function() {
                return !1
            }
            ,
            t.prototype.copyString = function() {
                return !1
            }
            ,
            t.prototype.getPasteString = function() {
                return ""
            }
            ,
            t.prototype.getSharedPreferencesForKey = function(t, e) {
                var o = cc.sys.localStorage.getItem(t);
                return void 0 === o && (o = e),
                o
            }
            ,
            t.prototype.setSharedPreferencesForKey = function(t, e) {
                cc.sys.localStorage.setItem(t, e)
            }
            ,
            t.prototype.camera = function() {
                return !1
            }
            ,
            t.prototype.getLaunchParams = function() {
                return {}
            }
            ,
            t.prototype.vibrate = function() {}
            ,
            t.prototype.requestLocation = function() {}
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../G": "G"
    }],
    MiddleMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "eb500CMrspPE7EZJWyfpTg1", "MiddleMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../G")
          , n = t("./MiddleAD")
          , i = t("./MiddleAuth")
          , a = t("./MiddleDevice")
          , s = window.MD5
          , c = function() {
            function t() {
                this.sdkConfig = null,
                this.opConfig = null,
                this.openId = null
            }
            return t.prototype.init = function() {
                r.default.MiddleDevice = new a.default,
                r.default.MiddleAuth = new i.default,
                r.default.MiddleAD = new n.default
            }
            ,
            t.prototype.handleEventJson = function(t) {
                if ("\u4e92\u63a8\u754c\u9762" != r.default.AppUtils.getSceneCtrl().sceneName) {
                    var e = JSON.parse(t);
                    this.handleEvent(e)
                } else
                    cc.game.emit("e_middle_event_json", t)
            }
            ,
            t.prototype.handleEvent = function(t) {
                switch (r.default.LogUtils.warn("MiddleMgr handleEvent", t),
                t.module) {
                case "device":
                    r.default.MiddleDevice.handleEvent(t);
                    break;
                case "auth":
                    r.default.MiddleAuth.handleEvent(t);
                    break;
                case "ad":
                    r.default.MiddleAD.handleEvent(t)
                }
            }
            ,
            t.prototype.getResVersion = function() {
                return r.default.RES_VERSION
            }
            ,
            t.prototype.getVersion = function() {
                var t = r.default.MiddleDevice.getVersionName()
                  , e = this.getResVersion();
                return cc.js.formatStr("%s.%s", t, e)
            }
            ,
            t.prototype.getOperatorName = function() {
                var t = {
                    1: "\u79fb\u52a8",
                    2: "\u8054\u901a",
                    3: "\u7535\u4fe1"
                }
                  , e = r.default.MiddleDevice.getOperator();
                return null == t[e = null == e ? 0 : e] ? "\u672a\u77e5" : t[e]
            }
            ,
            t.prototype.getApnTypeName = function() {
                var t = {
                    "-1": "\u65e0\u7f51\u7edc",
                    1: "WiFi",
                    2: "G",
                    3: "2/3G",
                    4: "4G"
                }
                  , e = r.default.MiddleDevice.getApnType();
                return null == t[e = null == e ? 0 : e] ? "\u672a\u77e5" : t[e]
            }
            ,
            t.prototype.isWhiteList = function() {
                return !1
            }
            ,
            t.prototype.getUDID = function() {
                var t = r.default.MiddleDevice.getUDID();
                return r.default.OPEN_DEBUG,
                t
            }
            ,
            t.prototype.getUUID = function() {
                return "originUUID"
            }
            ,
            t.prototype.getIDFAEncode = function() {
                var t = r.default.MiddleDevice.getIDFA().split("|")
                  , e = t[0]
                  , o = t[1]
                  , n = t[2]
                  , i = t[3]
                  , a = t[4]
                  , c = t[5]
                  , l = "";
                e && e.length > 0 && (l = s.hex(e));
                var u = "";
                return o && o.length > 0 && (u = s.hex(o)),
                null == n && (n = ""),
                null == i && (i = ""),
                null == a && (a = ""),
                null == c && (c = ""),
                cc.js.formatStr("%s|%s|%s|%s|%s|%s", l, u, n, i, a, c)
            }
            ,
            t.prototype.getStringForKey = function(t, e) {
                var o = this.opConfig[t];
                return void 0 === o && (o = e),
                o
            }
            ,
            t
        }();
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../G": "G",
        "./MiddleAD": "MiddleAD",
        "./MiddleAuth": "MiddleAuth",
        "./MiddleDevice": "MiddleDevice"
    }],
    NetworkConstants: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "affdfmhhzBGkp5QAJRx2erl", "NetworkConstants"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.NetworkConfig = void 0;
        var r = function() {
            function t() {}
            return t.LaunchDataVerNum = 1,
            t.LaunchCustVerNum = 1,
            t.LaunchUserUrl = "",
            t.LaunchLogUrl = "",
            t.LaunchAuthHttpUrl = "",
            t.LaunchTAndCUrl = "https://sites.google.com/view/rummy-plus-pro/terms",
            t.LaunchPrivacyUrl = "https://sites.google.com/view/rummy-plus-pro/privacy",
            t.LaunchEmail = "dtmzqak@gmail.com",
            t
        }();
        o.NetworkConfig = r,
        cc._RF.pop()
    }
    , {}],
    NetworkMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a82ccyQcg5JiIQpugOGKyjH", "NetworkMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = t("../../core/http/HttpClient")
          , i = t("../../core/socket/SocketClient")
          , a = t("../constants/StoragesConstants")
          , s = t("./LocalTestData")
          , c = function() {
            function t() {
                this.http = void 0,
                this.socket = void 0,
                this._localStorage = void 0,
                this._connections = [],
                this._httpLoginConn = void 0,
                this._httpLogConn = void 0,
                this._httpGameConn = void 0,
                this._socketGameConn = void 0,
                this._localTestData = null
            }
            return t.prototype.init = function() {
                this._initLocalStorage()
            }
            ,
            t.prototype.initConn = function() {
                this.createHttpClient(),
                this.createSocketClient()
            }
            ,
            t.prototype._initLocalStorage = function() {
                var t = a.LSConfig.STORAGE_PREFIX + "NetworkStorage";
                this._localStorage = r.default.StorageMgr.getStorage(t)
            }
            ,
            t.prototype.addConnection = function() {}
            ,
            t.prototype.setConnections = function() {}
            ,
            t.prototype.setKeepAliveCallback = function(t) {
                this.socket.setKeepAliveCallback(t)
            }
            ,
            t.prototype.getStorageValue = function(t) {
                if (this._localStorage)
                    return this._localStorage.getValue(t);
                r.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.setStorageValue = function(t, e) {
                this._localStorage ? this._localStorage.setValue(t, e) : r.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.setStorageValues = function(t) {
                this._localStorage ? this._localStorage.setValues(t) : r.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.createSocketClient = function() {
                return this.socket || (this.socket = new i.default,
                this.socket.connectTimeout = 2e4,
                this.socket.reconnectMaxTimes = 0),
                this.socket
            }
            ,
            t.prototype.connectSocket = function(t, e) {
                this.socket ? r.default.IS_LOCAL_GAME ? setTimeout(function() {
                    cc.game.emit("e_socket_on_connected")
                }, .2) : this.socket.connect(t, e) : r.default.LogUtils.warn("Warn: SocketClient need create")
            }
            ,
            t.prototype.isConnecting = function() {
                return this.socket.isReadyDone()
            }
            ,
            t.prototype.reconnectSocket = function() {
                r.default.LogUtils.warn("reconnectSocket  =+++++==> "),
                this.socket ? this.socket.reconnect() : r.default.LogUtils.warn("Warn: SocketClient not create")
            }
            ,
            t.prototype.closeSocket = function() {
                this.socket && this.socket.close()
            }
            ,
            t.prototype.sendSocketRequest = function(t, e, o) {
                return r.default.IS_LOCAL_GAME ? (this._localTestData || (this._localTestData = new s.default),
                this._localTestData.doLocalRequest(t, e, o)) : this.socket ? this.socket.c2sRequest(t, e, o) : void r.default.LogUtils.warn("Warn: SocketClient not create")
            }
            ,
            t.prototype.createHttpClient = function() {
                return this.http || (this.http = new n.default,
                this.http.method = "POST",
                this.http.secretCode = "0bdb9a5863c8c9063a42f38a9d5166fe"),
                this.http
            }
            ,
            t.prototype.sendHttpRequest = function(t, e, o, n) {
                this.http ? this.http.c2sRequest(n, 1, t, e, o) : r.default.LogUtils.warn("Warn: HttpClient not create")
            }
            ,
            t.prototype.sendHttpRequestToLoginServer = function(t, e, o) {
                this.sendHttpRequest(t, e, o, this._httpLoginConn)
            }
            ,
            t
        }();
        o.default = c,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/http/HttpClient": "HttpClient",
        "../../core/socket/SocketClient": "SocketClient",
        "../constants/StoragesConstants": "StoragesConstants",
        "./LocalTestData": "LocalTestData"
    }],
    NormalAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2d2a3Mc2oNP+5ATKy2yJCb4", "NormalAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = cc._decorator
          , c = s.ccclass
          , l = s.property
          , u = s.menu
          , p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.titleLabel = null,
                e.msgLabel = null,
                e.leftButton = null,
                e.rightButton = null,
                e.leftButtonLabel = null,
                e.rightButtonLabel = null,
                e.bottomLayout = null,
                e.closeButton = null,
                e.data = null,
                e
            }
            return n(e, t),
            e.prototype.reloadData = function(t, e) {
                this.data = t,
                this.cb = e;
                var o = t.id
                  , r = t.title
                  , n = t.msg
                  , i = t.leftBtnTitle
                  , a = t.rightBtnTitle
                  , s = t.enableBack
                  , c = t.needCloseBtn;
                this.id = o,
                this.enableBack = s,
                this.closeButton && (this.closeButton.node.active = c),
                this.titleLabel && (this.titleLabel.string = r),
                this.msgLabel && (this.msgLabel.string = n);
                var l = !1;
                i && i.length > 0 ? (this.leftButtonLabel.string = i,
                this.leftButton.node.active = !0,
                l = !0) : this.leftButton.node.active = !1,
                a && a.length > 0 ? (this.rightButtonLabel.string = a,
                this.rightButton.node.active = !0,
                l = !0) : this.rightButton.node.active = !1,
                this.bottomLayout.active = l
            }
            ,
            e.prototype.leftOnClicked = function() {
                this.enableAction && this.alertCallback("clickedLeft")
            }
            ,
            e.prototype.rightOnClicked = function() {
                this.enableAction && this.alertCallback("clickedRight")
            }
            ,
            i([l(cc.Label)], e.prototype, "titleLabel", void 0),
            i([l(cc.Label)], e.prototype, "msgLabel", void 0),
            i([l(cc.Button)], e.prototype, "leftButton", void 0),
            i([l(cc.Button)], e.prototype, "rightButton", void 0),
            i([l(cc.Label)], e.prototype, "leftButtonLabel", void 0),
            i([l(cc.Label)], e.prototype, "rightButtonLabel", void 0),
            i([l(cc.Node)], e.prototype, "bottomLayout", void 0),
            i([l(cc.Button)], e.prototype, "closeButton", void 0),
            i([c, u("Public/NormalAlert")], e)
        }(a.default);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    OPConfig: [function(t, e, o) {
        "use strict";
        var r;
        cc._RF.push(e, "ae44akJukFK/JXG9x7Pv9rV", "OPConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.OP_DEFAULT_VALUE = o.OP_KEY = void 0,
        function(t) {
            t.APP_ID = "appId",
            t.DOWNLOAD_URL = "downLoadUrl",
            t.SECURE_TLS = "secureTLS",
            t.SERVICE_RUL = "ServiceUrl",
            t.PRIVACY_RUL = "PrivacyUrl"
        }(r = o.OP_KEY || (o.OP_KEY = {})),
        o.OP_DEFAULT_VALUE = [{
            key: r.APP_ID,
            default: 10101,
            type: cc.Integer,
            name: "\u5e94\u7528Id"
        }, {
            key: r.DOWNLOAD_URL,
            default: "",
            type: cc.String,
            name: "\u4e0b\u8f7d\u94fe\u63a5"
        }, {
            key: r.SECURE_TLS,
            default: !1,
            type: "cc.Boolean",
            name: "\u5b89\u5168-\u4f20\u8f93\u52a0\u5bc6\u5f00\u5173"
        }, {
            key: r.SERVICE_RUL,
            default: "",
            type: "cc.String",
            name: "\u7528\u6237\u534f\u8bae\u94fe\u63a5"
        }, {
            key: r.PRIVACY_RUL,
            default: "",
            type: "cc.String",
            name: "\u9690\u79c1\u653f\u7b56\u94fe\u63a5"
        }],
        cc._RF.pop()
    }
    , {}],
    PlatformInit: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8dd58N5s8tEhIYGQLm39O6G", "PlatformInit"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../G")
          , n = t("./MiddleMgr")
          , i = function() {
            function t() {}
            return t.init = function() {
                r.default.MiddleMgr = new n.default,
                r.default.MiddleMgr.init()
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../G": "G",
        "./MiddleMgr": "MiddleMgr"
    }],
    PlayerMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5077cVA0zZNlI6LlKuI+lbq", "PlayerMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.MAX_SIDE_POS = o.OFFSET = o.COL = o.ROW = void 0;
        var r = [[[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 0], [1, 0], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, 1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, 1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, 1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, 1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, 2], [1, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, -1], [0, 0], [0, 0], [0, 0], [1, 0], [1, 0], [1, 0], [1, 0], [1, 0], [0, 1]], [[0, -1], [1, 0], [1, 0], [1, 0], [1, 0], [2, 0], [0, 0], [0, 0], [0, 0], [-2, 0], [-1, 0], [-1, 0], [-1, 0], [-1, 0], [0, 1]], [[0, -1], [-1, 0], [-1, 0], [-1, 0], [-1, 0], [-1, 0], [0, 0], [0, 0], [0, 0], [-1, 1], [-1, 0], [-1, 0], [-1, 0], [-1, 0], [-1, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [-1, -1], [0, -2], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, -1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, -1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, -1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [0, -1], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]], [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, -1], [-1, 0], [-1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]]
          , n = [[12, 2], [2, 2], [2, 12], [12, 12]]
          , i = [[13, 6], [6, 1], [1, 8], [8, 13]]
          , a = [[14, 7], [7, 0], [0, 7], [7, 14]]
          , s = [[13, 7], [7, 1], [1, 7], [7, 13]]
          , c = [[8, 7], [7, 6], [6, 7], [7, 8]];
        o.ROW = 15,
        o.COL = 15,
        o.OFFSET = 44,
        o.MAX_SIDE_POS = 52;
        var l = -7 * o.OFFSET
          , u = 7 * o.OFFSET
          , p = function() {
            function t() {}
            return t.SetChessNum = function(t) {
                this.chess_num = t
            }
            ,
            t.GetChessNum = function() {
                return this.chess_num
            }
            ,
            t.Init = function() {
                this._qipanDatas = [];
                for (var t = 0; t < o.ROW; t++) {
                    this._qipanDatas[t] = [];
                    for (var e = 0; e < o.COL; e++)
                        this._qipanDatas[t][e] = {
                            r: t,
                            c: e,
                            dx: r[t][e][0],
                            dy: r[t][e][1],
                            x: l + e * o.OFFSET,
                            y: u - t * o.OFFSET,
                            t: 0,
                            preR: 0,
                            preC: 0
                        }
                }
                for (var n = 0; n < o.ROW; n++)
                    for (var i = 0; i < o.COL; i++) {
                        var a = this._qipanDatas[n][i];
                        7 == a.r && 7 == a.c ? a.t = 9 : 7 == a.r && (a.c >= 1 && a.c <= 5 || a.c >= 9 && a.c <= 13) ? a.t = 3 : 7 == a.c && (a.r >= 1 && a.r <= 5 || a.r >= 9 && a.r <= 13) ? a.t = 3 : 0 == a.dx && 0 == a.dy ? a.t = -1 : a.t = 1
                    }
                for (var s = 0, c = [[2, 6], [1, 8], [6, 1], [8, 2], [6, 12], [8, 13], [13, 6], [12, 8]]; s < c.length; s++) {
                    var p = c[s];
                    this._qipanDatas[p[0]][p[1]].t = 2
                }
                for (var d = 0, f = 7, h = this._qipanDatas[d][f], _ = this.getNextGrid(d, f); 0 != _.r || 7 != _.c; )
                    _.preR = h.r,
                    _.preC = h.c,
                    d = _.r,
                    f = _.c,
                    h = this._qipanDatas[d][f],
                    _ = this.getNextGrid(d, f);
                _.preR = h.r,
                _.preC = h.c
            }
            ,
            t.getChessEndPos = function(t, e) {
                var o = [[-11, 7], [11, 7], [-11, -18], [11, -18]]
                  , r = c[t]
                  , n = this._qipanDatas[r[0]][r[1]]
                  , i = cc.v2(n.x, n.y);
                return cc.v2(i.x + o[e][0], i.y + o[e][1])
            }
            ,
            t.getQipanDatas = function() {
                return this._qipanDatas
            }
            ,
            t.getGrid = function(t, e) {
                return this._qipanDatas[t][e]
            }
            ,
            t.getHomeGrid = function(t) {
                var e = n[t];
                return this._qipanDatas[e[0]][e[1]]
            }
            ,
            t.getFirstGrid = function(t) {
                var e = i[t];
                return this._qipanDatas[e[0]][e[1]]
            }
            ,
            t.getTurnGrid = function(t) {
                var e = a[t];
                return this._qipanDatas[e[0]][e[1]]
            }
            ,
            t.getTopRootGrid = function(t) {
                var e = s[t];
                return this._qipanDatas[e[0]][e[1]]
            }
            ,
            t.getNextGrid = function(t, e) {
                var o = this._qipanDatas[t][e];
                return this._qipanDatas[o.r + o.dy][o.c + o.dx]
            }
            ,
            t.getPrepGrid = function(t, e) {
                var o = this._qipanDatas[t][e];
                return this._qipanDatas[o.preR][o.preC]
            }
            ,
            t.chess_num = 2,
            t.__side_board_pos = [],
            t.__center_board_pos = [],
            t._qipanDatas = [],
            t
        }();
        o.default = p,
        cc._RF.pop()
    }
    , {}],
    Player: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c6bb6YW9QVG1LryqfwIThLv", "Player");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = t("../../G")
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.headSpr = null,
                e.siziSpr = null,
                e.siziNode = null,
                e.headNode = null,
                e.scoreNode = null,
                e.labScore = null,
                e.labName = null,
                e.labAddScore = null,
                e.siziSprframes = [],
                e._seatIdx = 0,
                e._target = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                cc.game.on("mgr_event_score_update", this._handleUpdateScore, this),
                this.labAddScore.node.opacity = 0,
                this.labScore.string = ""
            }
            ,
            e.prototype.setData = function(t, e) {
                this._seatIdx = t,
                this._target = e,
                this.siziSpr.spriteFrame = this.siziSprframes[0];
                var o = this.headNode.getPosition()
                  , r = this.siziNode.getPosition()
                  , n = this.scoreNode.getPosition();
                2 != t && 3 != t || (this.headNode.setPosition(-o.x, o.y),
                this.siziNode.setPosition(-r.x, r.y),
                this.scoreNode.setPosition(-n.x, n.y));
                var i = l.default.UserMgr.getPlayerData(t);
                l.default.UserMgr.showHeadSprite(this.headSpr, i.headIdx),
                this.labScore.string = "" + i.score,
                this.labName.string = i.name
            }
            ,
            e.prototype.reset = function() {
                this.siziSpr.spriteFrame = this.siziSprframes[0];
                var t = l.default.UserMgr.getPlayerData(this._seatIdx);
                this.labScore.string = "" + t.score
            }
            ,
            e.prototype.playSiziAnim = function(t, e) {
                var o = this;
                l.default.AudioMgr.playEffect("Ludo_dice_1"),
                this.node.stopAllActions();
                for (var r = cc.tween(this.node), n = function(t) {
                    r.delay(.05),
                    r.call(function() {
                        o.siziSpr.spriteFrame = o.siziSprframes[t % 6 + 1]
                    })
                }, i = 0; i < 10; i++)
                    n(i);
                r.delay(.05),
                r.call(function() {
                    o.siziSpr.spriteFrame = o.siziSprframes[t]
                }),
                r.delay(.5),
                r.call(function() {
                    e && e()
                }),
                r.start()
            }
            ,
            e.prototype.clickBtn = function() {
                this._target.handleSizi(this._seatIdx)
            }
            ,
            e.prototype.getSiziPos = function(t) {
                var e = this.siziNode.parent.convertToWorldSpaceAR(this.siziNode.position);
                return t.convertToNodeSpaceAR(e)
            }
            ,
            e.prototype._handleUpdateScore = function(t) {
                var e = this;
                t.seatIdx == this._seatIdx && (this.labAddScore.string = "+" + t.addScore,
                this.labAddScore.node.stopAllActions(),
                this.labAddScore.node.y = 0,
                this.labAddScore.node.opacity = 255,
                cc.tween(this.labAddScore.node).to(.6, {
                    x: 0,
                    y: 20
                }).call(function() {
                    e.labScore.string = "" + t.score
                }).to(.2, {
                    opacity: 0
                }).start())
            }
            ,
            i([c(cc.Sprite)], e.prototype, "headSpr", void 0),
            i([c(cc.Sprite)], e.prototype, "siziSpr", void 0),
            i([c(cc.Node)], e.prototype, "siziNode", void 0),
            i([c(cc.Node)], e.prototype, "headNode", void 0),
            i([c(cc.Node)], e.prototype, "scoreNode", void 0),
            i([c(cc.Label)], e.prototype, "labScore", void 0),
            i([c(cc.Label)], e.prototype, "labName", void 0),
            i([c(cc.Label)], e.prototype, "labAddScore", void 0),
            i([c({
                type: [cc.SpriteFrame]
            })], e.prototype, "siziSprframes", void 0),
            i([s], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    ProfileAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "776c5Rei9pNkIplqdAhWDBG", "ProfileAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/model/UserMgr")
          , s = t("../../../core/view/JMAlertBase")
          , c = t("../../../G")
          , l = t("./ProfileItem")
          , u = cc._decorator
          , p = u.ccclass
          , d = u.property
          , f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.prefabItem = null,
                e.itemParent = null,
                e.txtName = null,
                e.btnChange = null,
                e.labName = null,
                e.imgHead = null,
                e._headItems = [],
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.reloadView()
            }
            ,
            e.prototype.onChangeNameClicked = function() {
                this.labName.node.active = !1,
                this.txtName.node.active = !0,
                this.txtName.focus(),
                this.btnChange.interactable = !1
            }
            ,
            e.prototype.onEditBoxEditingBegan = function() {
                this.txtName.string = this.labName.string
            }
            ,
            e.prototype.onEditBoxChangEnd = function() {
                var t = this.txtName.string;
                (t = t.trim()).length > 0 && (this.labName.string = t),
                this.txtName.node.active = !1,
                this.labName.node.active = !0,
                this.btnChange.interactable = !0
            }
            ,
            e.prototype.onHeadSelected = function(t) {
                c.default.UserMgr.setHeadIdx(t);
                for (var e = 0, o = this._headItems; e < o.length; e++)
                    o[e].refreshView(t);
                c.default.UserMgr.showHeadSprite(this.imgHead, t)
            }
            ,
            e.prototype.reloadView = function() {
                var t = c.default.UserMgr.getUserData();
                this._headItems = [],
                this.itemParent.removeAllChildren();
                for (var e = 1; e <= a.HEAD_COUNT; e++) {
                    var o = cc.instantiate(this.prefabItem);
                    o.parent = this.itemParent,
                    o.getComponent(l.default).init(e, t.headIdx, this),
                    this._headItems.push(o.getComponent(l.default))
                }
                c.default.UserMgr.showHeadSprite(this.imgHead, t.headIdx),
                this.labName.string = t.name,
                this.txtName.node.active = !1,
                this.btnChange.interactable = !0
            }
            ,
            e.prototype.closeOnClicked = function() {
                var e = c.default.UserMgr.getUserData()
                  , o = this.labName.string;
                o.length > 0 && e.name != o && c.default.UserMgr.setUserName(o),
                t.prototype.close.call(this)
            }
            ,
            i([d(cc.Prefab)], e.prototype, "prefabItem", void 0),
            i([d(cc.Node)], e.prototype, "itemParent", void 0),
            i([d(cc.EditBox)], e.prototype, "txtName", void 0),
            i([d(cc.Button)], e.prototype, "btnChange", void 0),
            i([d(cc.Label)], e.prototype, "labName", void 0),
            i([d(cc.Sprite)], e.prototype, "imgHead", void 0),
            i([p], e)
        }(s.default);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/model/UserMgr": "UserMgr",
        "../../../core/view/JMAlertBase": "JMAlertBase",
        "./ProfileItem": "ProfileItem"
    }],
    ProfileItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ff664OyNIhBLo5ZDgd1L59w", "ProfileItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../G")
          , s = cc._decorator
          , c = s.ccclass
          , l = s.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.spriteHead = null,
                e.nodeSelected = null,
                e.spriteFrameHeads = [],
                e._idx = 0,
                e._target = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.init = function(t, e, o) {
                this._idx = t,
                this._target = o,
                this.reloadView(e)
            }
            ,
            e.prototype.refreshView = function(t) {
                this.nodeSelected.active = this._idx == t
            }
            ,
            e.prototype.reloadView = function(t) {
                0 != this._idx && (a.default.UserMgr.showHeadSprite(this.spriteHead, this._idx),
                this.refreshView(t))
            }
            ,
            e.prototype.onNodeClicked = function() {
                this._idx > 0 && this._target && this._target.onHeadSelected(this._idx)
            }
            ,
            i([l(cc.Sprite)], e.prototype, "spriteHead", void 0),
            i([l(cc.Node)], e.prototype, "nodeSelected", void 0),
            i([l(cc.SpriteFrame)], e.prototype, "spriteFrameHeads", void 0),
            i([c], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../G": "G"
    }],
    PublicMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d511ckKMHhFzbOl3Rpa64+Z", "PublicMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = t("../constants/AppConstants")
          , i = function() {
            function t() {
                this.isDoneUserSelfInfo = !1,
                this.isDoneSystemInfo = !1,
                this.eventListeners = {}
            }
            return t.prototype.init = function() {
                this.isDoneUserSelfInfo = !1,
                this.isDoneSystemInfo = !1,
                this.initEventListeners()
            }
            ,
            t.prototype.initEventListeners = function() {
                this.eventListeners = {};
                for (var t = 0, e = Object.values(n.PUBLIC_MSG); t < e.length; t++) {
                    var o = e[t];
                    this.eventListeners["" + o] = []
                }
            }
            ,
            t.prototype.on = function(t, e, o, i) {
                n.PUBLIC_MSG.DISCONNECTED === t || n.PUBLIC_MSG.LOGIN_SUCCESS === t ? (this.eventListeners[t].push({
                    eventOrder: e,
                    listener: o,
                    target: i
                }),
                this.eventListeners[t].sort(function(t, e) {
                    return t.eventOrder - e.eventOrder
                })) : r.default.LogUtils.error("[PublicMgr]:unknow msg " + t + ",check PUBLIC_MSG")
            }
            ,
            t.prototype.emit = function(t) {
                if (n.PUBLIC_MSG.DISCONNECTED === t || n.PUBLIC_MSG.LOGIN_SUCCESS === t)
                    for (var e = 0, o = this.eventListeners[t]; e < o.length; e++) {
                        var i = o[e];
                        i.listener.call(i.target)
                    }
                else
                    r.default.LogUtils.error("[PublicMgr]:unknow msg " + t + ",check PUBLIC_MSG")
            }
            ,
            t.prototype.off = function(t, e, o) {
                if (void 0 !== n.PUBLIC_MSG[t])
                    for (var i = 0; i < this.eventListeners[t].length; i++) {
                        var a = this.eventListeners[t];
                        a.eventOrder == e && a.target == o && (this.eventListeners[t].splice(i, 1),
                        i -= 1)
                    }
                else
                    r.default.LogUtils.error("[PublicMgr]:unknow msg " + t + ",check PUBLIC_MSG")
            }
            ,
            t.prototype.targetOff = function(t) {
                for (var e in this.eventListeners)
                    for (var o = this.eventListeners[e], r = 0; r < o.length; r++)
                        o[r].target == t && (o.splice(r, 1),
                        r -= 1)
            }
            ,
            t.prototype.clear = function(t) {
                if (t) {
                    if (void 0 === n.PUBLIC_MSG[t])
                        return void r.default.LogUtils.error("[PublicMgr]:unknow msg " + t + ",check PUBLIC_MSG");
                    this.eventListeners[t] = []
                } else
                    for (var e = 0, o = Object.keys(this.eventListeners); e < o.length; e++) {
                        var i = o[e];
                        this.eventListeners[i] = []
                    }
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../constants/AppConstants": "AppConstants"
    }],
    QuitAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "eeb5dKrhx5N1ZiosWIvLnQg", "QuitAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = t("../../../G")
          , c = cc._decorator
          , l = c.ccclass
          , u = (c.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.quitOnClicked = function() {
                s.default.AppUtils.runScene("scene_home")
            }
            ,
            i([l], e)
        }(a.default));
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    RankAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "42796JXraJKZppYlsNcQPkq", "RankAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = t("../../../G")
          , c = t("./RankItem")
          , l = cc._decorator
          , u = l.ccclass
          , p = l.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.prefabItem = null,
                e.itemParent = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.enableBack = !0
            }
            ,
            e.prototype.start = function() {}
            ,
            e.prototype.reloadData = function(t, e) {
                this.cb = e;
                var o = s.default.UserMgr.getPlayerDatas();
                o.sort(function(t, e) {
                    return e.score - t.score
                }),
                this.itemParent.removeAllChildren();
                for (var r = 0, n = 0, i = o; n < i.length; n++) {
                    var a = i[n]
                      , l = {
                        name: a.name,
                        attack: 0,
                        score: a.score,
                        rank: ++r,
                        headIdx: a.headIdx
                    }
                      , u = cc.instantiate(this.prefabItem);
                    if (u.parent = this.itemParent,
                    u.getComponent(c.default).init(l),
                    r >= 5)
                        break
                }
            }
            ,
            i([p(cc.Prefab)], e.prototype, "prefabItem", void 0),
            i([p(cc.Node)], e.prototype, "itemParent", void 0),
            i([u], e)
        }(a.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/view/JMAlertBase": "JMAlertBase",
        "./RankItem": "RankItem"
    }],
    RankItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c269bKKE+BHF4KHOLx/5muA", "RankItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../G")
          , s = cc._decorator
          , c = s.ccclass
          , l = s.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.spriteRank = null,
                e.spriteHead = null,
                e.labName = null,
                e.labAttact = null,
                e.labScore = null,
                e.labRank = null,
                e.spriteFrameRanks = [],
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.init = function(t) {
                this.reloadView(t)
            }
            ,
            e.prototype.reloadView = function(t) {
                if (t) {
                    this.labName.string = t.name,
                    this.labScore.string = t.score + "";
                    var e = this.spriteFrameRanks[t.rank - 1];
                    e ? (this.spriteRank.spriteFrame = e,
                    this.labRank.string = "") : (this.spriteRank.spriteFrame = null,
                    this.labRank.string = t.rank + ""),
                    a.default.UserMgr.showHeadSprite(this.spriteHead, t.headIdx)
                }
            }
            ,
            i([l(cc.Sprite)], e.prototype, "spriteRank", void 0),
            i([l(cc.Sprite)], e.prototype, "spriteHead", void 0),
            i([l(cc.Label)], e.prototype, "labName", void 0),
            i([l(cc.Label)], e.prototype, "labAttact", void 0),
            i([l(cc.Label)], e.prototype, "labScore", void 0),
            i([l(cc.Label)], e.prototype, "labRank", void 0),
            i([l(cc.SpriteFrame)], e.prototype, "spriteFrameRanks", void 0),
            i([c], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../G": "G"
    }],
    ReconnCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "88e58ide0pM95KfqqeVsP60", "ReconnCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../core/constants/AppConstants")
          , s = t("../../G")
          , c = cc._decorator
          , l = c.ccclass
          , u = (c.property,
        c.menu)
          , p = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                cc.game.on("e_socket_on_logined", this._handleSocketOnLogined, this),
                cc.game.on("e_socket_on_closed", this._handleSocketOnClosed, this)
            }
            ,
            e.prototype.onDestroy = function() {
                cc.game.targetOff(this)
            }
            ,
            e.prototype._handleSocketOnLogined = function() {
                s.default.AppUtils.getSceneCtrl().loadingCtrl.hideTips(),
                s.default.AppUtils.getSceneCtrl().closeAlert(a.ALERT_ID.NETWORK_ANOMALY)
            }
            ,
            e.prototype._handleSocketOnClosed = function(t) {
                var e = this;
                if ("call_close" != t)
                    return 0 == s.default.LoginMgr.reconnectTimes ? (s.default.AppUtils.getSceneCtrl().loadingCtrl.showTips("reconnecting..."),
                    this.scheduleOnce(function() {
                        s.default.LoginMgr.isOnline || e._handleSocketOnClosed("call_reconnect")
                    }, 5),
                    void this.scheduleOnce(function() {
                        s.default.LoginMgr.reconnectTimes += 1,
                        s.default.NetworkMgr.reconnectSocket()
                    }, 1)) : void (s.default.LoginMgr.reconnectTimes >= s.default.LoginMgr.reconnectMaxTimes ? this.showServerMaintain(a.ALERT_ID.SERVER_MAINTAIN_ALERT) : this.showNetworkAnomaly(a.ALERT_ID.NETWORK_ANOMALY))
            }
            ,
            e.prototype.showServerMaintain = function() {}
            ,
            e.prototype.showNetworkAnomaly = function() {}
            ,
            e.prototype.reconnect = function(t) {
                var e = this;
                if (-1 != s.default.MiddleDevice.getApnType()) {
                    var o = s.default.TimeUtils.getCurrentTime()
                      , r = s.default.LoginMgr.loginTimestamp;
                    r && o - r >= 43200 ? s.default.AppUtils.loadScene("scene_login") : s.default.LoginMgr.loginTimestamp ? (s.default.LoginMgr.getStorageValue("uid"),
                    s.default.LoginMgr.getStorageValue("password"),
                    s.default.LoginMgr.reconnectTimes += 1,
                    s.default.AppUtils.getSceneCtrl().loadingCtrl.showTips("reconnecting..."),
                    this.scheduleOnce(function() {
                        s.default.LoginMgr.isOnline || e._handleSocketOnClosed("call_reconnect")
                    }, 5),
                    t.close()) : s.default.AppUtils.loadScene("scene_login")
                } else
                    s.default.AppUtils.getSceneCtrl().addToast("net error")
            }
            ,
            e.prototype.handleOffline = function() {
                var t = this;
                -1 == s.default.MiddleDevice.getApnType() ? s.default.AppUtils.getSceneCtrl().addToast("net error") : s.default.LoginMgr.loginTimestamp ? (s.default.AppUtils.getSceneCtrl().loadingCtrl.showTips("reconnecting...", 5, function() {
                    s.default.LoginMgr.isOnline || (s.default.LoginMgr.reconnectTimes = 1,
                    t._handleSocketOnClosed("call_reconnect"))
                }),
                s.default.NetworkMgr.isConnecting() || s.default.NetworkMgr.reconnectSocket()) : (s.default.LoginMgr.reconnectTimes = 1,
                this._handleSocketOnClosed("call_reconnect"))
            }
            ,
            e.prototype.showOfflineAlert = function() {
                this.showNetworkAnomaly(a.ALERT_ID.NETWORK_ANOMALY)
            }
            ,
            i([l, u("Ctrl/ReconnCtrl")], e)
        }(cc.Component);
        o.default = p,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/AppConstants": "AppConstants"
    }],
    SceneCtrlBase: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1dea2QxPyFIeLKD/vM1FhVh", "SceneCtrlBase");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../G")
          , s = t("./AlertCtrl")
          , c = t("./LoadingCtrl")
          , l = t("./ToastCtrl")
          , u = t("./ReconnCtrl")
          , p = cc._decorator
          , d = p.ccclass
          , f = p.property
          , h = (p.menu,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.alertCtrl = null,
                e.loadingCtrl = null,
                e.toastCtrl = null,
                e.reconnCtrl = null,
                e.sceneName = "",
                e.musicName = "",
                e._sceneStartTime = 0,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                a.default.DID_GAME_INIT || (a.default.DID_GAME_INIT = !0,
                a.default.NetworkMgr.initConn()),
                0 == this.musicName.length ? a.default.AudioMgr.stopMusic() : a.default.AudioMgr.playMusic(this.musicName, !0),
                a.default.AppUtils.setLastSceneName(this.sceneName),
                cc.find("Canvas").getComponent("CanvasEx") || a.default.LogUtils.error("Canvas ==> CanvasEx"),
                this.alertCtrl || a.default.LogUtils.error("add alertCtrl to Canvas ==> edt_prefab/ctrl/prefab_alert_ctrl"),
                this.loadingCtrl || a.default.LogUtils.error("add loadingCtrl to Canvas ==> edt_prefab/ctrl/prefab_loading_ctrl"),
                this.toastCtrl || a.default.LogUtils.error("add toastCtrl to Canvas ==> edt_prefab/ctrl/prefab_toast_ctrl")
            }
            ,
            e.prototype.onEnable = function() {
                cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._onKeyUp, this)
            }
            ,
            e.prototype.onDisable = function() {
                cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this._onKeyUp, this),
                cc.game.targetOff(this)
            }
            ,
            e.prototype.start = function() {
                this._sceneStartTime = a.default.TimeUtils.getCurrentTime()
            }
            ,
            e.prototype.onDestroy = function() {}
            ,
            e.prototype.handleOffline = function() {
                this.reconnCtrl && this.reconnCtrl.handleOffline()
            }
            ,
            e.prototype.showOfflineAlert = function() {
                this.reconnCtrl && this.reconnCtrl.showOfflineAlert()
            }
            ,
            e.prototype.showLoadingAlert = function() {
                this.loadingCtrl.showLoadingAlert()
            }
            ,
            e.prototype.updateLoadingProgress = function(t, e) {
                this.loadingCtrl.updateLoadingProgress(t, e)
            }
            ,
            e.prototype.backOnClicked = function() {}
            ,
            e.prototype.pushAlert = function(t) {
                this.alertCtrl && this.alertCtrl.pushAlert(t)
            }
            ,
            e.prototype.popAlert = function(t) {
                this.alertCtrl && this.alertCtrl.popAlert(t)
            }
            ,
            e.prototype.popAllAlert = function(t) {
                void 0 === t && (t = !1),
                this.alertCtrl && this.alertCtrl.popAllAlert(t)
            }
            ,
            e.prototype.closeAlert = function(t) {
                if (this.alertCtrl)
                    return this.alertCtrl.closeAlert(t)
            }
            ,
            e.prototype.getAlert = function(t) {
                if (this.alertCtrl)
                    return this.alertCtrl.getAlert(t)
            }
            ,
            e.prototype.getAlertCount = function() {
                return this.alertCtrl ? this.alertCtrl.getAlertCount() : 0
            }
            ,
            e.prototype.showNormalAlert = function(t, e, o) {
                this.alertCtrl && this.alertCtrl.showNormalAlert(t, e, o)
            }
            ,
            e.prototype.showAlert = function(t, e, o) {
                this.alertCtrl && this.alertCtrl.showAlert(t, e, o)
            }
            ,
            e.prototype.addToast = function(t, e, o) {
                this.toastCtrl && this.toastCtrl.addToast(t, e, o)
            }
            ,
            e.prototype._onKeyUp = function(t) {
                t.keyCode !== cc.macro.KEY.escape && t.keyCode !== cc.macro.KEY.back || this._backKeyOnClicked()
            }
            ,
            e.prototype._backKeyOnClicked = function() {
                this.loadingCtrl && this.loadingCtrl.backKeyOnClicked() || this.alertCtrl && this.alertCtrl.backKeyOnClicked() || this.backOnClicked()
            }
            ,
            i([f(s.default)], e.prototype, "alertCtrl", void 0),
            i([f(c.default)], e.prototype, "loadingCtrl", void 0),
            i([f(l.default)], e.prototype, "toastCtrl", void 0),
            i([f(u.default)], e.prototype, "reconnCtrl", void 0),
            i([f], e.prototype, "sceneName", void 0),
            i([f], e.prototype, "musicName", void 0),
            i([d], e)
        }(cc.Component));
        o.default = h,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "./AlertCtrl": "AlertCtrl",
        "./LoadingCtrl": "LoadingCtrl",
        "./ReconnCtrl": "ReconnCtrl",
        "./ToastCtrl": "ToastCtrl"
    }],
    ServiceAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f9fe6N+8pNHqYVB2YJRxtUu", "ServiceAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/constants/NetworkConstants")
          , s = t("../../../core/view/JMAlertBase")
          , c = t("../../../G")
          , l = cc._decorator
          , u = l.ccclass
          , p = l.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.labContact = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.labContact.string = a.NetworkConfig.LaunchEmail
            }
            ,
            e.prototype.serviceOnClicked = function() {
                var t = this.labContact.string
                  , e = document.createElement("textarea");
                e.value = t,
                e.setAttribute("readonly", ""),
                e.style.contain = "strict",
                e.style.position = "absolute",
                e.style.left = "-9999px",
                e.style.fontSize = "12pt";
                var o, r = getSelection();
                r.rangeCount > 0 && (o = r.getRangeAt(0)),
                document.body.appendChild(e),
                e.select(),
                e.selectionStart = 0,
                e.selectionEnd = t.length;
                var n = !1;
                try {
                    n = document.execCommand("copy")
                } catch (i) {}
                document.body.removeChild(e),
                o && (r.removeAllRanges(),
                r.addRange(o)),
                n && c.default.AppUtils.getSceneCtrl().addToast("Copy Ok"),
                console.log("copy complated")
            }
            ,
            i([p(cc.Label)], e.prototype, "labContact", void 0),
            i([u], e)
        }(s.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/constants/NetworkConstants": "NetworkConstants",
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    SettingAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f6c4eCjw11CKqRdA6Rnk5KZ", "SettingAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/constants/NetworkConstants")
          , s = t("../../../core/constants/StoragesConstants")
          , c = t("../../../core/view/JMAlertBase")
          , l = t("../../../G")
          , u = cc._decorator
          , p = u.ccclass
          , d = u.property
          , f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.musicToggle = null,
                e.musicToggleBg = null,
                e.soundToggle = null,
                e.soundToggleBg = null,
                e.version = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this),
                this.enableBack = !0
            }
            ,
            e.prototype.start = function() {
                this.reloadView()
            }
            ,
            e.prototype.reloadView = function() {
                l.default.LSMgr.getValue(s.LSKey.SETTING_MUSIC) ? this.musicToggle.check() : this.musicToggle.uncheck(),
                l.default.LSMgr.getValue(s.LSKey.SETTING_SOUND) ? this.soundToggle.check() : this.soundToggle.uncheck()
            }
            ,
            e.prototype.logoutOnClicked = function() {
                l.default.AppUtils.runScene("scene_login")
            }
            ,
            e.prototype.eulaOnClicked = function() {
                l.default.AudioMgr.playEffect("button"),
                cc.sys.openURL(a.NetworkConfig.LaunchTAndCUrl)
            }
            ,
            e.prototype.privacyOnClicked = function() {
                l.default.AudioMgr.playEffect("button"),
                cc.sys.openURL(a.NetworkConfig.LaunchPrivacyUrl)
            }
            ,
            e.prototype.quitOnClicked = function() {
                l.default.AudioMgr.playEffect("button"),
                l.default.MiddleAuth.showExitAlert() || l.default.LogUtils.log("Web, not need exit")
            }
            ,
            e.prototype.onClicked = function(t, e) {
                "SETTING_MUSIC" == e && (l.default.LSMgr.setValue(s.LSKey.SETTING_MUSIC, t.isChecked),
                t.isChecked ? l.default.AudioMgr.playLastMusic() : l.default.AudioMgr.stopMusic()),
                "SETTING_SOUND" == e && (l.default.LSMgr.setValue(s.LSKey.SETTING_SOUND, t.isChecked),
                t.isChecked && l.default.AudioMgr.playEffect("button"))
            }
            ,
            i([d(cc.Toggle)], e.prototype, "musicToggle", void 0),
            i([d(cc.Sprite)], e.prototype, "musicToggleBg", void 0),
            i([d(cc.Toggle)], e.prototype, "soundToggle", void 0),
            i([d(cc.Sprite)], e.prototype, "soundToggleBg", void 0),
            i([d(cc.Label)], e.prototype, "version", void 0),
            i([p], e)
        }(c.default);
        o.default = f,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/constants/NetworkConstants": "NetworkConstants",
        "../../../core/constants/StoragesConstants": "StoragesConstants",
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    SettleAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a9c16Lf4kBFCb1/j0W0GZUp", "SettleAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = t("../../../G")
          , c = t("./SettleItem")
          , l = cc._decorator
          , u = l.ccclass
          , p = l.property
          , d = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.prefabItem = null,
                e.itemParent = null,
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this)
            }
            ,
            e.prototype.reloadData = function(t, e) {
                this.cb = e;
                var o = t.settleDatas;
                this.itemParent.removeAllChildren();
                for (var r = 0, n = 0, i = o; n < i.length; n++) {
                    var a = i[n];
                    a.rank = ++r;
                    var s = cc.instantiate(this.prefabItem);
                    s.parent = this.itemParent,
                    s.getComponent(c.default).init(a)
                }
            }
            ,
            e.prototype.continueOnClicked = function() {
                this.close(),
                cc.game.emit("event_continue_game")
            }
            ,
            e.prototype.closeOnClicked = function() {
                t.prototype.close.call(this),
                s.default.AppUtils.runScene("scene_home")
            }
            ,
            i([p(cc.Prefab)], e.prototype, "prefabItem", void 0),
            i([p(cc.Node)], e.prototype, "itemParent", void 0),
            i([u], e)
        }(a.default);
        o.default = d,
        cc._RF.pop()
    }
    , {
        "../../../G": "G",
        "../../../core/view/JMAlertBase": "JMAlertBase",
        "./SettleItem": "SettleItem"
    }],
    SettleItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d3ebbvzZI9GZZRGTmaZmV6x", "SettleItem");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../G")
          , s = cc._decorator
          , c = s.ccclass
          , l = s.property
          , u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.spriteRank = null,
                e.spriteHead = null,
                e.labName = null,
                e.labAttact = null,
                e.labKill = null,
                e.labScore = null,
                e.spriteFrameRanks = [],
                e
            }
            return n(e, t),
            e.prototype.onLoad = function() {}
            ,
            e.prototype.init = function(t) {
                this.reloadView(t)
            }
            ,
            e.prototype.reloadView = function(t) {
                t && (this.labName.string = t.name,
                this.labAttact.string = t.killCount,
                this.labKill.string = t.beenKCount,
                this.labScore.string = t.totalScore,
                this.spriteRank.spriteFrame = this.spriteFrameRanks[t.rank - 1],
                a.default.UserMgr.showHeadSprite(this.spriteHead, t.headIdx))
            }
            ,
            i([l(cc.Sprite)], e.prototype, "spriteRank", void 0),
            i([l(cc.Sprite)], e.prototype, "spriteHead", void 0),
            i([l(cc.Label)], e.prototype, "labName", void 0),
            i([l(cc.Label)], e.prototype, "labAttact", void 0),
            i([l(cc.Label)], e.prototype, "labKill", void 0),
            i([l(cc.Label)], e.prototype, "labScore", void 0),
            i([l(cc.SpriteFrame)], e.prototype, "spriteFrameRanks", void 0),
            i([c], e)
        }(cc.Component);
        o.default = u,
        cc._RF.pop()
    }
    , {
        "../../../G": "G"
    }],
    ShopAlert: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a43a39LMk5J/7GlpmbgZIGq", "ShopAlert");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../core/view/JMAlertBase")
          , s = cc._decorator
          , c = s.ccclass
          , l = (s.property,
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t),
            e.prototype.onLoad = function() {
                t.prototype.onLoad.call(this)
            }
            ,
            i([c], e)
        }(a.default));
        o.default = l,
        cc._RF.pop()
    }
    , {
        "../../../core/view/JMAlertBase": "JMAlertBase"
    }],
    SocketClient: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "03e1e2yGRFBxZYKwLsBIw99", "SocketClient"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = function() {
            function t() {
                this._ws = void 0,
                this._session = 0,
                this._reconnectTimes = 0,
                this.reconnectMaxTimes = 3,
                this.connectTimeout = 1e4,
                this.host = void 0,
                this._requestCmds = void 0,
                this._requestModels = void 0,
                this._responseHandlers = void 0,
                this.keepalive = "user_keepalive",
                this._socketUrl = "",
                this._clientToken = "0ao2a5cty924mhbqxltcxlyf1y6dd6a2b4e14a",
                this._svrToken = "8oa2c521b5s5d63e14t5z453v524x15b53469",
                this._hostSession = "",
                this._connectCallback = void 0,
                this._keepAliveCallback = void 0,
                this._requestCmds = {},
                this._requestModels = {},
                this._responseHandlers = {}
            }
            return t.prototype.setKeepAliveCallback = function(t) {
                this._keepAliveCallback = t
            }
            ,
            t.prototype.isReadyDone = function() {
                return this._ws && this._ws.readyState === WebSocket.OPEN
            }
            ,
            t.prototype.connect = function(t, e) {
                void 0 !== t && "" !== t ? (this._ws && this.close(),
                r.default.LogUtils.warn("ant debug", "socket connect", t),
                this._socketUrl = t,
                this._connectCallback = e,
                this._ws = new WebSocket(t),
                this._ws.binaryType = "arraybuffer",
                this._ws.onopen = this._onConnect.bind(this),
                this._ws.onmessage = this._onMessage.bind(this),
                this._ws.onerror = this._onError.bind(this),
                this._ws.onclose = this._onClose.bind(this)) : r.default.LogUtils.error("Bug: SocketClient error")
            }
            ,
            t.prototype.reconnect = function() {
                this.connect(this._socketUrl)
            }
            ,
            t.prototype.close = function() {
                this._ws && (this._ws.onopen = void 0,
                this._ws.onmessage = void 0,
                this._ws.onerror = void 0,
                this._ws.onclose = void 0,
                this._ws.readyState != WebSocket.CONNECTING && this._ws.readyState != WebSocket.OPEN || (this._ws.close(),
                cc.game.emit("e_socket_on_closed", "call_close")),
                this._ws = void 0)
            }
            ,
            t.prototype.c2sRequest = function(t, e, o) {
                if (this.isReadyDone()) {
                    this._session++,
                    this._requestCmds[this._session] = t,
                    this._requestModels[this._session] = e,
                    this._responseHandlers[this._session] = o;
                    var n = "";
                    return t == this.keepalive ? n = "ping" : (r.default.LogUtils.log("--\x3e request socket session:", this._session, "rqt name:", t, " request info:", e),
                    n = this._create_package(t, e, this._session)),
                    this._ws.send(n),
                    !0
                }
            }
            ,
            t.prototype.c2sResponse = function(t) {
                var e = this._requestCmds[t.proId];
                r.default.LogUtils.log("<-- response socket session:", t.proId, "rqt name:", e, " response data:", t.body);
                var o = JSON.parse(t.body)
                  , n = o.D || [];
                n.code && (n.resCode = n.code),
                n.code = o.E,
                0 == n.code && (n.code = 200),
                n.session && (this._hostSession = n.session);
                var i = this._requestModels[t.proId]
                  , a = this._responseHandlers[t.proId];
                a && a({
                    requestInfo: i,
                    responseInfo: n
                })
            }
            ,
            t.prototype.s2cRequest = function(t) {
                r.default.LogUtils.log("<~~ s2c notice socket pname:", t.pname, " request info:", t.result),
                cc.game.emit(t.pname, t.result)
            }
            ,
            t.prototype._onConnect = function(t) {
                r.default.LogUtils.log("connect success ", t),
                cc.game.emit("e_socket_on_connected")
            }
            ,
            t.prototype._boolIsTimeStamp = function(t) {
                if ("string" == typeof t) {
                    var e = "" + r.default.TimeUtils.getCurrentTime();
                    if (t.length == e.length) {
                        var o = Number(t);
                        if (o && o > 0)
                            return !0
                    }
                }
                return !1
            }
            ,
            t.prototype._onMessage = function(t) {
                if ("pong" === t.data)
                    this._keepAliveCallback && this._keepAliveCallback();
                else {
                    var e = JSON.parse(t.data);
                    "REQUEST" === t.type ? this.s2cRequest(e) : "message" === t.type ? this.c2sResponse(e) : r.default.LogUtils.warn("data error", e)
                }
            }
            ,
            t.prototype._onError = function(t) {
                r.default.LogUtils.log("onError:", t),
                this._ws && (this._ws.onopen = void 0,
                this._ws.onmessage = void 0,
                this._ws.onerror = void 0,
                this._ws.onclose = void 0,
                this._ws = void 0),
                cc.game.emit("e_socket_on_closed", "on_error")
            }
            ,
            t.prototype._onClose = function(t) {
                r.default.LogUtils.log("onClose:", t),
                this._ws && (this._ws.onopen = void 0,
                this._ws.onmessage = void 0,
                this._ws.onerror = void 0,
                this._ws.onclose = void 0,
                this._ws = void 0),
                cc.game.emit("e_socket_on_closed", "on_close")
            }
            ,
            t.prototype._create_package = function(t, e, o) {
                var n = JSON.stringify({
                    D: e,
                    F: t
                })
                  , i = r.default.TimeUtils.getCurrentTime()
                  , a = this._hostSession || ""
                  , s = n + i + o + a + this._clientToken
                  , c = {
                    tp: i,
                    sign: window.MD5.hex(r.default.FuncUtils.stringToUTF8(s)),
                    session: a,
                    proId: o,
                    body: n
                };
                return JSON.stringify(c)
            }
            ,
            t
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    StorageData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ca82dX2IllLgKBN4DR60jw6", "StorageData"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = function() {
            function t(t, e) {
                var o;
                if (this._rootName = t,
                this._encryptKey = e,
                o = cc.sys.localStorage.getItem(this._rootName))
                    try {
                        this._encryptKey && window.XXTEA && (o = window.XXTEA.decryptFromBase64(o, this._encryptKey));
                        var n = JSON.parse(o);
                        this._rootObject = n
                    } catch (i) {
                        r.default.LogUtils.error("storageData load fail", i),
                        this._rootObject = {},
                        this.save()
                    }
                else
                    this._rootObject = {},
                    this.save();
                this.dump()
            }
            return t.prototype.save = function() {
                var t = JSON.stringify(this._rootObject);
                this._encryptKey && window.XXTEA && (t = window.XXTEA.encryptToBase64(t, this._encryptKey)),
                cc.sys.localStorage.setItem(this._rootName, t)
            }
            ,
            t.prototype.setValue = function(t, e) {
                t && (void 0 === e ? delete this._rootObject[t] : this._rootObject[t] = e,
                this.save())
            }
            ,
            t.prototype.setValues = function(t) {
                var e = this;
                t && (t.forEach(function(t, o) {
                    e._rootObject[o] = t
                }),
                this.save())
            }
            ,
            t.prototype.getValue = function(t) {
                var e = this._rootObject[t];
                if (void 0 !== e)
                    return JSON.parse(JSON.stringify(e))
            }
            ,
            t.prototype.removeValue = function(t) {
                delete this._rootObject[t],
                this.save()
            }
            ,
            t.prototype.removeAll = function() {
                this._rootObject = {},
                this.save()
            }
            ,
            t.prototype.dump = function() {
                for (var t in r.default.LogUtils.log("/**********  print began " + this._rootName + " key-val  **********/"),
                this._rootObject)
                    if (Object.prototype.hasOwnProperty.call(this._rootObject, t)) {
                        var e = this._rootObject[t];
                        r.default.LogUtils.log("key:", t, "        value:", e)
                    }
                r.default.LogUtils.log("/**********  print end " + this._rootName + " key-val  **********/")
            }
            ,
            t.prototype._getUserDataSavePath = function() {
                if (null == this._savePath) {
                    var t = jsb.fileUtils.getWritablePath();
                    this._savePath = t
                }
                return this._savePath
            }
            ,
            t.prototype._getLocalStorageByFile = function(t) {
                var e, o = this._getUserDataSavePath() + "/" + t + ".data";
                return jsb.fileUtils.isFileExist(o) && (e = jsb.fileUtils.getStringFromFile(o)),
                e
            }
            ,
            t.prototype._setLocalStorageToFile = function(t, e) {
                var o = this._getUserDataSavePath() + "/" + t + ".data";
                jsb.fileUtils.writeStringToFile(e, o)
            }
            ,
            t
        }();
        o.default = n,
        cc._RF.pop()
    }
    , {
        "../../G": "G"
    }],
    StorageMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1acc7e7k9JJPKXqkJOHiN1+", "StorageMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("./StorageData")
          , n = t("../../G")
          , i = function() {
            function t() {
                this.storageMap = new Map
            }
            return t.prototype.init = function(t) {
                var e = this;
                t && t.forEach(function(t) {
                    e.addStorage(t.name, t.encryptKey)
                })
            }
            ,
            t.prototype.addStorage = function(t, e) {
                if (t) {
                    var o = this.storageMap.get(t);
                    return o || (o = new r.default(t,e),
                    this.storageMap.set(t, o),
                    o)
                }
            }
            ,
            t.prototype.getStorage = function(t) {
                return this.storageMap.get(t)
            }
            ,
            t.prototype.removeStorage = function(t) {
                this.storageMap.has(t) && (this.storageMap.delete(t),
                cc.sys.localStorage.removeItem(t))
            }
            ,
            t.prototype.removeAll = function() {
                var t = this;
                this.storageMap.forEach(function(e, o) {
                    n.default.LogUtils.log("name => " + o),
                    t.storageMap.get(o).removeAll(),
                    cc.sys.localStorage.removeItem(o)
                }),
                this.storageMap.clear()
            }
            ,
            t.prototype.dump = function() {
                n.default.LogUtils.log("\n/***************  local saved data print (began)  ***************/");
                for (var t = 0; t < cc.sys.localStorage.length; t++) {
                    var e = cc.sys.localStorage.key(t)
                      , o = cc.sys.localStorage.getItem(e);
                    n.default.LogUtils.log("key:", e, "        value:", o)
                }
                n.default.LogUtils.log("/***************  local saved data print (end)  ***************/")
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "./StorageData": "StorageData"
    }],
    StoragesConstants: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8ed13qP0HxEnobLKf2I/3Iy", "StoragesConstants"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.LSConfig = o.LSTodayKey = o.LSKey = void 0;
        var r, n, i = "jmp4qjgUqMWTxDGXJ4oHeihLJWV1oFcR";
        (function(t) {
            t.AUTHORIZE_AUTO_TYPE = "AUTHORIZE_AUTO_TYPE",
            t.FIRST_ACTIVE_TIME = "FIRST_ACTIVE_TIME",
            t.JTDELTATIME = "JTDELTATIME",
            t.LAST_SUUID = "LAST_SUUID",
            t.REGISTER_TIME = "REGISTER_TIME",
            t.SETTING_MUSIC = "SETTING_MUSIC",
            t.SETTING_SOUND = "SETTING_SOUND",
            t.SETTING_VIBRATE = "SETTING_VIBRATE",
            t.UID = "UID",
            t.UUID = "UUID",
            t.DATA_VER_NUM = "DATA_VER_NUM",
            t.CUST_VER_NUM = "CUST_VER_NUM",
            t.SRV_PATH = "SRV_PATH",
            t.APP_LAUNCH_COUNT = "LAUNCH_TOTAL"
        }
        )(r = o.LSKey || (o.LSKey = {})),
        function(t) {
            t.LAST_SAVE_TIME = "LAST_SAVE_TIME"
        }(n = o.LSTodayKey || (o.LSTodayKey = {}));
        var a = function() {
            function t() {}
            return t.BINARY_DATA_ENCRYPTKEY = "6311ea3ff0ba6ea6d475da6418f254017911ea3ff0ba6ea6d475da6418f25442",
            t.STORAGE_PREFIX = "ovs",
            t.STORAGES = [{
                name: "ovsDefaultStorage",
                encryptKey: i
            }, {
                name: "ovsTodayStorage",
                encryptKey: i
            }, {
                name: "ovsNetworkStorage",
                encryptKey: i
            }, {
                name: "ovsGameStorage",
                encryptKey: i
            }, {
                name: "ovsLoginStorage",
                encryptKey: i
            }, {
                name: "ovsOpStorage",
                encryptKey: i
            }, {
                name: "ovsUserStorage",
                encryptKey: i
            }, {
                name: "ovsBaseStorage",
                encryptKey: i
            }],
            t.LS_DEFAULT_VALUE = [{
                key: r.AUTHORIZE_AUTO_TYPE,
                default: -1,
                type: "cc.Integer",
                name: "auto type"
            }, {
                key: r.FIRST_ACTIVE_TIME,
                default: 0,
                type: "cc.Integer",
                name: "first acttime"
            }, {
                key: r.JTDELTATIME,
                default: 0,
                type: "cc.Integer",
                name: "delay time"
            }, {
                key: r.LAST_SUUID,
                default: "",
                type: "cc.String",
                name: "last UUID"
            }, {
                key: r.REGISTER_TIME,
                default: 0,
                type: "cc.Integer",
                name: "reg-time"
            }, {
                key: r.SETTING_MUSIC,
                default: !0,
                type: "cc.Boolean",
                name: "setting-music"
            }, {
                key: r.SETTING_SOUND,
                default: !0,
                type: "cc.Boolean",
                name: "setting-sound"
            }, {
                key: r.SETTING_VIBRATE,
                default: !1,
                type: "cc.Boolean",
                name: "setting-vibrate"
            }, {
                key: r.UID,
                default: 0,
                type: "cc.Integer",
                name: "last login user uid"
            }, {
                key: r.UUID,
                default: "",
                type: "cc.String",
                name: "user-uuid"
            }],
            t.LSTODAY_DEFAULT_VALUE = [{
                key: n.LAST_SAVE_TIME,
                default: null,
                type: "cc.Integer",
                name: "today-lastsave-time"
            }],
            t
        }();
        o.LSConfig = a,
        cc._RF.pop()
    }
    , {}],
    TimeUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d32ccb9FV5Ci4TQ0dLKy8Se", "TimeUtils"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("../../G")
          , n = t("../constants/StoragesConstants")
          , i = function() {
            function t() {
                this._deltaTime = void 0,
                this._shicha = void 0,
                this._tmpCheckTime = void 0,
                this._iEnterBackGroundTime = 0
            }
            return t.prototype.getBackGroundTime = function() {
                return this._iEnterBackGroundTime
            }
            ,
            t.prototype.setBackGroundTime = function() {
                this._iEnterBackGroundTime = this.getDeviceCurrentTime()
            }
            ,
            t.prototype.clearBackGroundTime = function() {
                this._iEnterBackGroundTime = 0
            }
            ,
            t.prototype.GetTimeDiff = function() {
                if (!r.default.FuncUtils.isNumber(this._shicha)) {
                    var t = 60 * (new Date).getTimezoneOffset();
                    this._shicha = 28800 - t
                }
                return this._shicha
            }
            ,
            t.prototype.synTime = function(t) {
                if (!("number" != typeof t || t < 1e4)) {
                    this.clearBackGroundTime();
                    var e = new Date
                      , o = Math.round(e.getTime() / 1e3);
                    this._deltaTime = o - t,
                    r.default.LSMgr.getValue(n.LSKey.JTDELTATIME) != this._deltaTime && r.default.LSMgr.setValue(n.LSKey.JTDELTATIME, this._deltaTime)
                }
            }
            ,
            t.prototype.getCurrentTime = function() {
                if (this.getBackGroundTime() > 0)
                    return this.getBackGroundTime();
                var t = new Date
                  , e = Math.round(t.getTime() / 1e3)
                  , o = this._deltaTime || r.default.LSMgr.getValue(n.LSKey.JTDELTATIME)
                  , i = 0;
                return 0 != r.default.LSMgr.getValue("gameTestDelaTime", 0) && (i = r.default.LSMgr.getValue("gameTestDelaTime", 0)),
                e - o + i
            }
            ,
            t.prototype.getDeviceCurrentTime = function() {
                var t = new Date
                  , e = Math.round(t.getTime() / 1e3)
                  , o = this._deltaTime || r.default.LSMgr.getValue(n.LSKey.JTDELTATIME)
                  , i = 0;
                return 0 != r.default.LSMgr.getValue("gameTestDelaTime", 0) && (i = r.default.LSMgr.getValue("gameTestDelaTime", 0)),
                e - o + i
            }
            ,
            t.prototype.initCheckIsSameDay = function() {
                this._tmpCheckTime = this.getCurrentTime()
            }
            ,
            t.prototype.getCurrentYear = function() {
                var t = this.getCurrentTime();
                return new Date(1e3 * t).getFullYear()
            }
            ,
            t.prototype.isAcrossDay = function() {
                var t = !1
                  , e = this.getCurrentTime();
                return "number" == typeof this._tmpCheckTime && (t = this.isSameDay(e - 5, this._tmpCheckTime)),
                this._tmpCheckTime = e,
                t
            }
            ,
            t.prototype.isSameDay = function(t, e) {
                return this.getDay(t) == this.getDay(e)
            }
            ,
            t.prototype.getDay = function(t) {
                return Math.floor((t + 28800) / 86400)
            }
            ,
            t.prototype.getToday = function() {
                var t = this.getCurrentTime();
                return this.getDay(t)
            }
            ,
            t.prototype.isToday = function(t) {
                var e = !1;
                if ("number" == typeof t) {
                    var o = this.getDay(t);
                    this.getToday() === o && (e = !0)
                }
                return e
            }
            ,
            t.prototype.getDeltaDay = function(t, e) {
                return this.getDay(t) - this.getDay(e)
            }
            ,
            t.prototype.getTime = function(t, e, o) {
                var r = 0;
                return "number" == typeof t && (r += 3600 * t),
                "number" == typeof e && (r += 60 * t),
                "number" == typeof o && (r += o),
                r
            }
            ,
            t.prototype.getTimeWithCurrentTimeAndDeltaTime = function(t, e, o) {
                var r = this.getCurrentTime();
                return this.getTimeWithTimeAndDeltaTime(r, t, e, o)
            }
            ,
            t.prototype.getTimeWithTimeAndDeltaTime = function(t, e, o, r) {
                return t + this.getTime(e, o, r)
            }
            ,
            t.prototype.getTimeWithCurrentDayTimeAndDeltaTime = function(t, e, o) {
                var r = this.getCurrentTime();
                return this.getTimeWithDayTimeAndDeltaTime(r, t, e, o)
            }
            ,
            t.prototype.getTimeWithDayTimeAndDeltaTime = function(t, e, o, r) {
                return 86400 * this.getDay(t) + this.getTime(e, o, r)
            }
            ,
            t.prototype.getOneDayPastTime = function(t) {
                var e = new Date(1e3 * t);
                return e.setHours(0),
                e.setMinutes(0),
                e.setSeconds(0),
                t - Math.round(e.getTime() / 1e3)
            }
            ,
            t.prototype.getTimeZone = function(t, e) {
                var o = (new Date).getTimezoneOffset();
                return new Date(1e3 * t + 6e4 * o + 36e5 * e)
            }
            ,
            t.prototype.getCountdownText = function(t, e, o) {
                var r = this.getTimeZone(t, 8)
                  , n = this.getTimeZone(e, 8).getTime() - r.getTime();
                return this._getCountdownText(n, o)
            }
            ,
            t.prototype._getCountdownText = function(t, e) {
                if (t < 0)
                    return "";
                var o = 0
                  , r = 0
                  , n = 0
                  , i = 0;
                o = Math.floor(t / 1e3 / 3600 / 24),
                r = Math.floor(t / 1e3 / 60 / 60 % 24),
                n = Math.floor(t / 1e3 / 60 % 60),
                i = Math.floor(t / 1e3 % 60),
                e = e || "%s";
                var a = "";
                return o > 0 ? 1 === o && 0 === r ? a = "24\u5c0f\u65f6" + n + "\u5206" : (o > 1 && 0 == r && (o -= 1,
                r = 24),
                a = o + "\u5929" + r + "\u5c0f\u65f6") : r > 0 ? 1 === r && 0 === n ? a = "60\u5206" : (r > 1 && 0 === n && (r -= 1,
                n = 60),
                a = r + "\u5c0f\u65f6" + n + "\u5206") : n > 0 ? 1 === n && 0 === i ? a = "60\u79d2" : (n > 1 && 0 === i && (n -= 1,
                i = 60),
                a = n + "\u5206" + i + "\u79d2") : a += i + "\u79d2",
                cc.js.formatStr(e, a)
            }
            ,
            t.prototype.getCdTextByRemainTime = function(t, e) {
                return this._getCountdownText(t, e)
            }
            ,
            t.prototype.getGetZeroTomorrow = function() {
                var t = this.getCurrentTime()
                  , e = new Date(1e3 * t).toLocaleDateString();
                return new Date(e).getTime() / 1e3 + 86400
            }
            ,
            t.prototype.dateToTimestamp = function(t) {
                return new Date(t).getTime() / 1e3
            }
            ,
            t.prototype.formatToDate = function(t, e) {
                var o = this.getTimeZone(t, 8);
                return (e = (e = (e = (e = (e = (e = e || "%yyyy\u5e74%MM\u6708%dd\u65e5%HH\u65f6%mm\u5206%ss\u79d2").replace(/%yyyy/g, o.getFullYear() + "")).replace(/%MM/g, r.default.FuncUtils.prefixInteger(o.getMonth() + 1, 2))).replace(/%dd/g, r.default.FuncUtils.prefixInteger(o.getDate(), 2))).replace(/%HH/g, r.default.FuncUtils.prefixInteger(o.getHours(), 2))).replace(/%mm/g, r.default.FuncUtils.prefixInteger(o.getMinutes(), 2))).replace(/%ss/g, r.default.FuncUtils.prefixInteger(o.getSeconds(), 2))
            }
            ,
            t.prototype.getZeroClockTimestamp = function(t, e) {
                void 0 === e && (e = this.getCurrentTime());
                var o = e;
                return o || (o = this.getCurrentTime()),
                o - this.getOneDayPastTime(o) + 86400 * t
            }
            ,
            t.prototype.getTodayHourTimestamp = function(t) {
                return this.getZeroClockTimestamp(0) + 3600 * t
            }
            ,
            t.prototype.getCountdownRichText = function(t, e, o, r, n) {
                var i = this.getTimeZone(t, 8)
                  , a = this.getTimeZone(e, 8).getTime() - i.getTime();
                return this._getCountdownRichText(a, o, r, n)
            }
            ,
            t.prototype._getCountdownRichText = function(t, e, o, r) {
                if (t < 0)
                    return "";
                var n = 0
                  , i = 0
                  , a = 0
                  , s = 0;
                n = Math.floor(t / 1e3 / 3600 / 24),
                i = Math.floor(t / 1e3 / 60 / 60 % 24),
                a = Math.floor(t / 1e3 / 60 % 60),
                s = Math.floor(t / 1e3 % 60),
                r = r || "%s";
                var c = "";
                return n > 0 ? 1 === n && 0 === i ? c = "<color=" + e + ">24</c><color=" + o + ">\u5c0f\u65f6</c>" + a + "\u5206" : (n > 1 && 0 == i && (n -= 1,
                i = 24),
                c = "<color=" + e + ">" + n + "</c><color=" + o + ">\u5929</c><color=" + e + ">" + i + "</c><color=" + o + ">\u5c0f\u65f6</c>") : i > 0 ? 1 === i && 0 === a ? c = "<color=" + e + ">60</c><color=" + o + ">\u5206</c>" : (i > 1 && 0 === a && (i -= 1,
                a = 60),
                c = "<color=" + e + ">" + i + "</c><color=" + o + ">\u5c0f\u65f6</c><color=" + e + ">" + a + "</c><color=" + o + ">\u5206</c>") : a > 0 ? 1 === a && 0 === s ? c = "<color=" + e + ">60</c><color=" + o + ">\u79d2</c>" : (a > 1 && 0 === s && (a -= 1,
                s = 60),
                c = "<color=" + e + ">" + a + "</c><color=" + o + ">\u5206</c><color=" + e + ">" + s + "</c><color=" + o + ">\u79d2</c>") : c += "<color=" + e + ">" + s + "</c><color=" + o + ">\u79d2</c>",
                cc.js.formatStr(r, c)
            }
            ,
            t
        }();
        o.default = i,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../constants/StoragesConstants": "StoragesConstants"
    }],
    ToastCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "11bfctXL+lDLIkjLlr/PXlu", "ToastCtrl");
        var r, n = this && this.__extends || (r = function(t, e) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var o in e)
                    e.hasOwnProperty(o) && (t[o] = e[o])
            }
            )(t, e)
        }
        ,
        function(t, e) {
            function o() {
                this.constructor = t
            }
            r(t, e),
            t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
            new o)
        }
        ), i = this && this.__decorate || function(t, e, o, r) {
            var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, r);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
            return i > 3 && a && Object.defineProperty(e, o, a),
            a
        }
        ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
          , s = a.ccclass
          , c = a.property
          , l = (a.menu,
        function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.itemPrefab = null,
                e._holdTime = 2,
                e._showTime = .2,
                e._hideTime = .3,
                e._totalHeight = 0,
                e
            }
            return n(e, t),
            e.prototype.addToast = function(t, e, o) {
                e = e || this._holdTime;
                var r = cc.instantiate(this.itemPrefab);
                r.getComponent("JMToastItem").msg = t,
                this._showItem(r, e, o)
            }
            ,
            e.prototype._showItem = function(t, e, o) {
                var r = t.height;
                this._totalHeight = this._totalHeight + r,
                this.node.stopAllActions(),
                cc.tween(this.node).to(this._showTime, {
                    position: cc.v3(0, this._totalHeight - r / 2)
                }).start(),
                t.y = -this._totalHeight + r / 2,
                this.node.addChild(t),
                t.opacity = 0,
                cc.tween(t).to(this._showTime, {
                    opacity: 255
                }).delay(e).to(this._hideTime, {
                    opacity: 0
                }).call(function() {
                    t.destroy(),
                    o && o()
                }).start()
            }
            ,
            i([c(cc.Prefab)], e.prototype, "itemPrefab", void 0),
            i([c({
                tooltip: "\u5c55\u793a\u65f6\u95f4"
            })], e.prototype, "_holdTime", void 0),
            i([c({
                tooltip: "\u51fa\u73b0\u65f6\u95f4"
            })], e.prototype, "_showTime", void 0),
            i([c({
                tooltip: "\u5173\u95ed\u65f6\u95f4"
            })], e.prototype, "_hideTime", void 0),
            i([c({
                tooltip: "\u603b\u9ad8\u5ea6"
            })], e.prototype, "_totalHeight", void 0),
            i([s], e)
        }(cc.Component));
        o.default = l,
        cc._RF.pop()
    }
    , {}],
    UserMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c8829RY0wxEN5BpebL/iAhi", "UserMgr"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.WIN_RW_GOLD = o.EAT_RW_GOLD = o.BASE_GOLD = o.HEAD_COUNT = o.USER_COUNT = void 0;
        var r = t("../../G")
          , n = t("../../core/constants/StoragesConstants");
        o.USER_COUNT = 10,
        o.HEAD_COUNT = 10,
        o.BASE_GOLD = 5e3,
        o.EAT_RW_GOLD = 100,
        o.WIN_RW_GOLD = 150;
        var i = ["Megan Coyle", "Jennifer", "Alisa Pongput", "Kay Sea", "Kylie Julia", "John Stu", "Taylorg Helen", "Santa Chiara", "Emelio Gomez", "Sophia"]
          , a = function() {
            function t() {
                this._localStorage = void 0,
                this._userData = null,
                this._playerDatas = [],
                this._lstUpdTime = 0,
                this._bonusDatas = null
            }
            return t.prototype.init = function() {
                this._initLocalStorage(),
                this._initConfig(),
                this._initData(),
                cc.game.on("e_mgr_remote_update_done", this._initConfig, this),
                cc.game.on(cc.game.EVENT_HIDE, this._onHideGame, this),
                cc.game.on(cc.game.EVENT_SHOW, this._onShowGame, this)
            }
            ,
            t.prototype._initConfig = function() {}
            ,
            t.prototype._initData = function() {
                for (var t = [], e = 0; e < o.USER_COUNT; e++) {
                    var n = {
                        pid: e + 1,
                        name: i[e],
                        headIdx: e % o.HEAD_COUNT + 1,
                        seatIdx: e,
                        score: o.BASE_GOLD + Math.floor(o.BASE_GOLD * Math.random()),
                        regTp: 0
                    };
                    0 == e && (n.score = o.BASE_GOLD,
                    n.name = "User_" + (1e4 + Math.floor(1e4 * Math.random()))),
                    t.push(n)
                }
                this._playerDatas = this.getStorageValue("kPlayerDatas", t);
                var a = r.default.TimeUtils.getCurrentTime();
                this._lstUpdTime = this.getStorageValue("k_last_update_time", a);
                var s = a - this._lstUpdTime
                  , c = Math.floor(s / 600);
                if (c > 0) {
                    for (e = 1; e < this._playerDatas.length; e++) {
                        var l = Math.min(1e4, c * (100 + 1500 * Math.random()));
                        this._playerDatas[e].score += Math.floor(l),
                        r.default.LogUtils.error("offline reward", e, Math.floor(l))
                    }
                    this.setStorageValue("kPlayerDatas", this._playerDatas)
                }
                this._userData = this._playerDatas[0],
                this._userData.seatIdx = 0,
                this._bonusDatas = this.getStorageValue("k_bonus_datas", [{
                    dayIdx: 1,
                    headIdx: 1,
                    status: 0,
                    count: 1e3,
                    isToday: 0
                }, {
                    dayIdx: 2,
                    headIdx: 2,
                    status: 0,
                    count: 1e3,
                    isToday: 0
                }, {
                    dayIdx: 3,
                    headIdx: 3,
                    status: 0,
                    count: 2e3,
                    isToday: 0
                }, {
                    dayIdx: 4,
                    headIdx: 4,
                    status: 0,
                    count: 2e3,
                    isToday: 0
                }, {
                    dayIdx: 5,
                    headIdx: 5,
                    status: 0,
                    count: 3e3,
                    isToday: 0
                }, {
                    dayIdx: 6,
                    headIdx: 6,
                    status: 0,
                    count: 3e3,
                    isToday: 0
                }, {
                    dayIdx: 7,
                    headIdx: 6,
                    status: 0,
                    count: 1e4,
                    isToday: 0
                }])
            }
            ,
            t.prototype.resetSeatIdx = function() {
                for (var t = 0, e = this._playerDatas; t < e.length; t++)
                    e[t].seatIdx = Math.floor(100 * Math.random()) + 1;
                this._userData.seatIdx = 0,
                this._playerDatas.sort(function(t, e) {
                    return t.seatIdx - e.seatIdx
                });
                for (var o = 0, r = 0, n = this._playerDatas; r < n.length; r++)
                    n[r].seatIdx = o++
            }
            ,
            t.prototype.setHeadIdx = function(t) {
                this._userData.headIdx = t,
                this.setStorageValue("kPlayerDatas", this._playerDatas),
                cc.game.emit("event_headidx_changed")
            }
            ,
            t.prototype.setUserName = function(t) {
                this._userData.name = t,
                this.setStorageValue("kPlayerDatas", this._playerDatas),
                cc.game.emit("event_username_changed")
            }
            ,
            t.prototype.showHeadSprite = function(t, e) {
                var o = e < 10 ? "0" + e : "" + e;
                t.spriteFrame = null,
                cc.loader.loadRes("res_texture/home/head/head" + o, cc.SpriteFrame, function(e, o) {
                    e || (t.spriteFrame = o)
                })
            }
            ,
            t.prototype.getPlayerDatas = function() {
                return this._playerDatas
            }
            ,
            t.prototype.getPlayerData = function(t) {
                for (var e = 0, o = this._playerDatas; e < o.length; e++) {
                    var r = o[e];
                    if (r.seatIdx == t)
                        return r
                }
                return null
            }
            ,
            t.prototype.addScore = function(t, e) {
                var o = this.getPlayerData(t);
                return o.score += e,
                o.score < 0 && (o.score = 0),
                this.setStorageValue("kPlayerDatas", this._playerDatas),
                cc.game.emit("mgr_event_score_update", {
                    seatIdx: t,
                    score: o.score,
                    addScore: e
                }),
                o.score
            }
            ,
            t.prototype.getUserData = function() {
                return this._userData
            }
            ,
            t.prototype.getBonusDatas = function() {
                var t = r.default.TimeUtils.getToday()
                  , e = this.getStorageValue("k_reg_day", null);
                e || (e = t,
                this.setStorageValue("k_reg_day", e));
                for (var o = (t - e) % 7 + 1, n = 0, i = 0, a = this._bonusDatas; i < a.length; i++)
                    -1 == (u = a[i]).status && (n = u.dayIdx),
                    u.isToday = u.dayIdx == o ? 1 : 0;
                if (o < n)
                    for (var s = 0, c = this._bonusDatas; s < c.length; s++)
                        (u = c[s]).status = 0;
                for (var l = 0; l < this._bonusDatas.length; l++) {
                    var u;
                    1 == (u = this._bonusDatas[l]).isToday && 0 == u.status && (u.status = 1)
                }
                return this._bonusDatas
            }
            ,
            t.prototype.gainBonusData = function(t) {
                t.status = -1,
                this.setStorageValue("k_bonus_datas", this._bonusDatas),
                this.addScore(0, t.count)
            }
            ,
            t.prototype.isBonusHasRed = function() {
                for (var t = 0, e = this.getBonusDatas(); t < e.length; t++)
                    if (1 == e[t].status)
                        return !0;
                return !1
            }
            ,
            t.prototype._initLocalStorage = function() {
                var t = n.LSConfig.STORAGE_PREFIX + "BaseStorage";
                this._localStorage = r.default.StorageMgr.getStorage(t)
            }
            ,
            t.prototype.getStorageValue = function(t, e) {
                return this._localStorage ? this._localStorage.getValue(t) || e : (r.default.LogUtils.error("local storage not exist"),
                e)
            }
            ,
            t.prototype.setStorageValue = function(t, e) {
                if (this._localStorage) {
                    var o = r.default.TimeUtils.getCurrentTime();
                    this._localStorage.setValue(t, e),
                    this._localStorage.setValue("k_last_update_time", o)
                } else
                    r.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype._clearLocalData = function() {
                this._localStorage ? this._localStorage.removeAll() : r.default.LogUtils.error("local storage not exist")
            }
            ,
            t.prototype.getUid = function() {
                return this._userData.pid || 0
            }
            ,
            t.prototype._onHideGame = function() {
                r.default.TimeUtils.setBackGroundTime()
            }
            ,
            t.prototype._onShowGame = function() {
                var t = r.default.TimeUtils.getBackGroundTime()
                  , e = r.default.TimeUtils.getDeviceCurrentTime();
                if (t > 0) {
                    var o = e - t;
                    if (o < 0 || o > 1800)
                        return void cc.game.restart()
                }
            }
            ,
            t
        }();
        o.default = a,
        cc._RF.pop()
    }
    , {
        "../../G": "G",
        "../../core/constants/StoragesConstants": "StoragesConstants"
    }],
    VersionConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "de1b6ZAUwhDK6SoIkOmNJ2u", "VersionConfig"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = t("./G");
        e.exports = {
            init: function() {
                r.default.APP_VERSION = "1.0",
                r.default.RES_VERSION = 100001,
                r.default.CONF_VERSION = 3,
                r.default.CUST_VERSION = 1,
                r.default.OPEN_DEBUG = !1,
                r.default.ChannelId = 997,
                r.default.IS_PLAY_TEST_AD = !1,
                r.default.IS_LOCAL_GAME = !0,
                r.default.IS_SHUTDOWN_HB = !1
            }
        },
        cc._RF.pop()
    }
    , {
        "./G": "G"
    }],
    ViewUtils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1a06cMreP1EUo2/iyVHWRGq", "ViewUtils"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var r = function() {
            function t() {}
            return t.prototype.debounce = function(t, e, o) {
                var r;
                return function() {
                    var n = this
                      , i = arguments
                      , a = function() {
                        r = void 0,
                        o || t.apply(n, i)
                    }
                      , s = o && !r;
                    clearTimeout(r),
                    r = setTimeout(a, e),
                    s && t.apply(n, i)
                }
            }
            ,
            t
        }();
        o.default = r,
        cc._RF.pop()
    }
    , {}],
    md5: [function(t, e) {
        "use strict";
        cc._RF.push(e, "11675csgJ1HDYZTppHO3ivX", "md5");
        var o = 0
          , r = ""
          , n = 8;
        function i(t, e) {
            t[e >> 5] |= 128 << e % 32,
            t[14 + (e + 64 >>> 9 << 4)] = e;
            for (var o = 1732584193, r = -271733879, n = -1732584194, i = 271733878, a = 0; a < t.length; a += 16) {
                var p = o
                  , f = r
                  , h = n
                  , _ = i;
                o = s(o, r, n, i, t[a + 0], 7, -680876936),
                i = s(i, o, r, n, t[a + 1], 12, -389564586),
                n = s(n, i, o, r, t[a + 2], 17, 606105819),
                r = s(r, n, i, o, t[a + 3], 22, -1044525330),
                o = s(o, r, n, i, t[a + 4], 7, -176418897),
                i = s(i, o, r, n, t[a + 5], 12, 1200080426),
                n = s(n, i, o, r, t[a + 6], 17, -1473231341),
                r = s(r, n, i, o, t[a + 7], 22, -45705983),
                o = s(o, r, n, i, t[a + 8], 7, 1770035416),
                i = s(i, o, r, n, t[a + 9], 12, -1958414417),
                n = s(n, i, o, r, t[a + 10], 17, -42063),
                r = s(r, n, i, o, t[a + 11], 22, -1990404162),
                o = s(o, r, n, i, t[a + 12], 7, 1804603682),
                i = s(i, o, r, n, t[a + 13], 12, -40341101),
                n = s(n, i, o, r, t[a + 14], 17, -1502002290),
                o = c(o, r = s(r, n, i, o, t[a + 15], 22, 1236535329), n, i, t[a + 1], 5, -165796510),
                i = c(i, o, r, n, t[a + 6], 9, -1069501632),
                n = c(n, i, o, r, t[a + 11], 14, 643717713),
                r = c(r, n, i, o, t[a + 0], 20, -373897302),
                o = c(o, r, n, i, t[a + 5], 5, -701558691),
                i = c(i, o, r, n, t[a + 10], 9, 38016083),
                n = c(n, i, o, r, t[a + 15], 14, -660478335),
                r = c(r, n, i, o, t[a + 4], 20, -405537848),
                o = c(o, r, n, i, t[a + 9], 5, 568446438),
                i = c(i, o, r, n, t[a + 14], 9, -1019803690),
                n = c(n, i, o, r, t[a + 3], 14, -187363961),
                r = c(r, n, i, o, t[a + 8], 20, 1163531501),
                o = c(o, r, n, i, t[a + 13], 5, -1444681467),
                i = c(i, o, r, n, t[a + 2], 9, -51403784),
                n = c(n, i, o, r, t[a + 7], 14, 1735328473),
                o = l(o, r = c(r, n, i, o, t[a + 12], 20, -1926607734), n, i, t[a + 5], 4, -378558),
                i = l(i, o, r, n, t[a + 8], 11, -2022574463),
                n = l(n, i, o, r, t[a + 11], 16, 1839030562),
                r = l(r, n, i, o, t[a + 14], 23, -35309556),
                o = l(o, r, n, i, t[a + 1], 4, -1530992060),
                i = l(i, o, r, n, t[a + 4], 11, 1272893353),
                n = l(n, i, o, r, t[a + 7], 16, -155497632),
                r = l(r, n, i, o, t[a + 10], 23, -1094730640),
                o = l(o, r, n, i, t[a + 13], 4, 681279174),
                i = l(i, o, r, n, t[a + 0], 11, -358537222),
                n = l(n, i, o, r, t[a + 3], 16, -722521979),
                r = l(r, n, i, o, t[a + 6], 23, 76029189),
                o = l(o, r, n, i, t[a + 9], 4, -640364487),
                i = l(i, o, r, n, t[a + 12], 11, -421815835),
                n = l(n, i, o, r, t[a + 15], 16, 530742520),
                o = u(o, r = l(r, n, i, o, t[a + 2], 23, -995338651), n, i, t[a + 0], 6, -198630844),
                i = u(i, o, r, n, t[a + 7], 10, 1126891415),
                n = u(n, i, o, r, t[a + 14], 15, -1416354905),
                r = u(r, n, i, o, t[a + 5], 21, -57434055),
                o = u(o, r, n, i, t[a + 12], 6, 1700485571),
                i = u(i, o, r, n, t[a + 3], 10, -1894986606),
                n = u(n, i, o, r, t[a + 10], 15, -1051523),
                r = u(r, n, i, o, t[a + 1], 21, -2054922799),
                o = u(o, r, n, i, t[a + 8], 6, 1873313359),
                i = u(i, o, r, n, t[a + 15], 10, -30611744),
                n = u(n, i, o, r, t[a + 6], 15, -1560198380),
                r = u(r, n, i, o, t[a + 13], 21, 1309151649),
                o = u(o, r, n, i, t[a + 4], 6, -145523070),
                i = u(i, o, r, n, t[a + 11], 10, -1120210379),
                n = u(n, i, o, r, t[a + 2], 15, 718787259),
                r = u(r, n, i, o, t[a + 9], 21, -343485551),
                o = d(o, p),
                r = d(r, f),
                n = d(n, h),
                i = d(i, _)
            }
            return Array(o, r, n, i)
        }
        function a(t, e, o, r, n, i) {
            return d((a = d(d(e, t), d(r, i))) << (s = n) | a >>> 32 - s, o);
            var a, s
        }
        function s(t, e, o, r, n, i, s) {
            return a(e & o | ~e & r, t, e, n, i, s)
        }
        function c(t, e, o, r, n, i, s) {
            return a(e & r | o & ~r, t, e, n, i, s)
        }
        function l(t, e, o, r, n, i, s) {
            return a(e ^ o ^ r, t, e, n, i, s)
        }
        function u(t, e, o, r, n, i, s) {
            return a(o ^ (e | ~r), t, e, n, i, s)
        }
        function p(t, e) {
            var o = f(t);
            o.length > 16 && (o = i(o, t.length * n));
            for (var r = Array(16), a = Array(16), s = 0; s < 16; s++)
                r[s] = 909522486 ^ o[s],
                a[s] = 1549556828 ^ o[s];
            var c = i(r.concat(f(e)), 512 + e.length * n);
            return i(a.concat(c), 640)
        }
        function d(t, e) {
            var o = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o
        }
        function f(t) {
            for (var e = Array(), o = (1 << n) - 1, r = 0; r < t.length * n; r += n)
                e[r >> 5] |= (t.charCodeAt(r / n) & o) << r % 32;
            return e
        }
        function h(t) {
            for (var e = "", o = (1 << n) - 1, r = 0; r < 32 * t.length; r += n)
                e += String.fromCharCode(t[r >> 5] >>> r % 32 & o);
            return e
        }
        function _(t) {
            for (var e = o ? "0123456789ABCDEF" : "0123456789abcdef", r = "", n = 0; n < 4 * t.length; n++)
                r += e.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + e.charAt(t[n >> 2] >> n % 4 * 8 & 15);
            return r
        }
        function g(t) {
            for (var e = "", o = 0; o < 4 * t.length; o += 3)
                for (var n = (t[o >> 2] >> o % 4 * 8 & 255) << 16 | (t[o + 1 >> 2] >> (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >> 2] >> (o + 2) % 4 * 8 & 255, i = 0; i < 4; i++)
                    8 * o + 6 * i > 32 * t.length ? e += r : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6 * (3 - i) & 63);
            return e
        }
        window.MD5 = {
            hex: function(t) {
                return _(i(f(t), t.length * n))
            },
            b64: function(t) {
                return g(i(f(t), t.length * n))
            },
            str: function(t) {
                return h(i(f(t), t.length * n))
            },
            hexHmac: function(t, e) {
                return _(p(t, e))
            },
            b64Hmac: function(t, e) {
                return g(p(t, e))
            },
            strHmac: function(t, e) {
                return h(p(t, e))
            },
            vmTest: function() {
                return "900150983cd24fb0d6963f7d28e17f72" == this.hex("abc")
            }
        },
        cc._RF.pop()
    }
    , {}],
    xxtea: [function(t, e) {
        "use strict";
        cc._RF.push(e, "78fbeOmlkdHsqkNobuhQqOL", "xxtea"),
        function(t) {
            var e, o;
            void 0 === t.btoa && (t.btoa = (e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),
            function(t) {
                var o, r, n, i, a, s, c;
                for (r = n = 0,
                i = t.length,
                s = (i -= a = i % 3) / 3 << 2,
                a > 0 && (s += 4),
                o = new Array(s); r < i; )
                    c = t.charCodeAt(r++) << 16 | t.charCodeAt(r++) << 8 | t.charCodeAt(r++),
                    o[n++] = e[c >> 18] + e[c >> 12 & 63] + e[c >> 6 & 63] + e[63 & c];
                return 1 == a ? (c = t.charCodeAt(r++),
                o[n++] = e[c >> 2] + e[(3 & c) << 4] + "==") : 2 == a && (c = t.charCodeAt(r++) << 8 | t.charCodeAt(r++),
                o[n++] = e[c >> 10] + e[c >> 4 & 63] + e[(15 & c) << 2] + "="),
                o.join("")
            }
            )),
            void 0 === t.atob && (t.atob = (o = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1],
            function(t) {
                var e, r, n, i, a, s, c, l, u, p;
                if ((c = t.length) % 4 != 0)
                    return "";
                if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t))
                    return "";
                for (u = c,
                (l = "=" == t.charAt(c - 2) ? 1 : "=" == t.charAt(c - 1) ? 2 : 0) > 0 && (u -= 4),
                u = 3 * (u >> 2) + l,
                p = new Array(u),
                a = s = 0; a < c && -1 != (e = o[t.charCodeAt(a++)]) && -1 != (r = o[t.charCodeAt(a++)]) && (p[s++] = String.fromCharCode(e << 2 | (48 & r) >> 4),
                -1 != (n = o[t.charCodeAt(a++)])) && (p[s++] = String.fromCharCode((15 & r) << 4 | (60 & n) >> 2),
                -1 != (i = o[t.charCodeAt(a++)])); )
                    p[s++] = String.fromCharCode((3 & n) << 6 | i);
                return p.join("")
            }
            ));
            var r = 2654435769;
            function n(t, e) {
                var o = t.length
                  , r = o << 2;
                if (e) {
                    var n = t[o - 1];
                    if (n < (r -= 4) - 3 || n > r)
                        return null;
                    r = n
                }
                for (var i = 0; i < o; i++)
                    t[i] = String.fromCharCode(255 & t[i], t[i] >>> 8 & 255, t[i] >>> 16 & 255, t[i] >>> 24 & 255);
                var a = t.join("");
                return e ? a.substring(0, r) : a
            }
            function i(t, e) {
                var o, r = t.length, n = r >> 2;
                0 != (3 & r) && ++n,
                e ? (o = new Array(n + 1))[n] = r : o = new Array(n);
                for (var i = 0; i < r; ++i)
                    o[i >> 2] |= t.charCodeAt(i) << ((3 & i) << 3);
                return o
            }
            function a(t) {
                return 4294967295 & t
            }
            function s(t, e, o, r, n, i) {
                return (o >>> 5 ^ e << 2) + (e >>> 3 ^ o << 4) ^ (t ^ e) + (i[3 & r ^ n] ^ o)
            }
            function c(t) {
                return t.length < 4 && (t.length = 4),
                t
            }
            function l(t, e) {
                var o, n, i, c, l, u, p = t.length, d = p - 1;
                for (n = t[d],
                i = 0,
                u = 0 | Math.floor(6 + 52 / p); u > 0; --u) {
                    for (c = (i = a(i + r)) >>> 2 & 3,
                    l = 0; l < d; ++l)
                        o = t[l + 1],
                        n = t[l] = a(t[l] + s(i, o, n, l, c, e));
                    o = t[0],
                    n = t[d] = a(t[d] + s(i, o, n, d, c, e))
                }
                return t
            }
            function u(t, e) {
                var o, n, i, c, l, u = t.length, p = u - 1;
                for (o = t[0],
                i = a(Math.floor(6 + 52 / u) * r); 0 !== i; i = a(i - r)) {
                    for (c = i >>> 2 & 3,
                    l = p; l > 0; --l)
                        n = t[l - 1],
                        o = t[l] = a(t[l] - s(i, o, n, l, c, e));
                    n = t[p],
                    o = t[0] = a(t[0] - s(i, o, n, 0, c, e))
                }
                return t
            }
            function p(t) {
                if (/^[\x00-\x7f]*$/.test(t))
                    return t;
                for (var e = [], o = t.length, r = 0, n = 0; r < o; ++r,
                ++n) {
                    var i = t.charCodeAt(r);
                    if (i < 128)
                        e[n] = t.charAt(r);
                    else if (i < 2048)
                        e[n] = String.fromCharCode(192 | i >> 6, 128 | 63 & i);
                    else {
                        if (!(i < 55296 || i > 57343)) {
                            if (r + 1 < o) {
                                var a = t.charCodeAt(r + 1);
                                if (i < 56320 && 56320 <= a && a <= 57343) {
                                    var s = 65536 + ((1023 & i) << 10 | 1023 & a);
                                    e[n] = String.fromCharCode(240 | s >> 18 & 63, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s),
                                    ++r;
                                    continue
                                }
                            }
                            throw new Error("Malformed string")
                        }
                        e[n] = String.fromCharCode(224 | i >> 12, 128 | i >> 6 & 63, 128 | 63 & i)
                    }
                }
                return e.join("")
            }
            function d(t, e) {
                for (var o = new Array(e), r = 0, n = 0, i = t.length; r < e && n < i; r++) {
                    var a = t.charCodeAt(n++);
                    switch (a >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        o[r] = a;
                        break;
                    case 12:
                    case 13:
                        if (!(n < i))
                            throw new Error("Unfinished UTF-8 octet sequence");
                        o[r] = (31 & a) << 6 | 63 & t.charCodeAt(n++);
                        break;
                    case 14:
                        if (!(n + 1 < i))
                            throw new Error("Unfinished UTF-8 octet sequence");
                        o[r] = (15 & a) << 12 | (63 & t.charCodeAt(n++)) << 6 | 63 & t.charCodeAt(n++);
                        break;
                    case 15:
                        if (!(n + 2 < i))
                            throw new Error("Unfinished UTF-8 octet sequence");
                        var s = ((7 & a) << 18 | (63 & t.charCodeAt(n++)) << 12 | (63 & t.charCodeAt(n++)) << 6 | 63 & t.charCodeAt(n++)) - 65536;
                        if (!(0 <= s && s <= 1048575))
                            throw new Error("Character outside valid Unicode range: 0x" + s.toString(16));
                        o[r++] = s >> 10 & 1023 | 55296,
                        o[r] = 1023 & s | 56320;
                        break;
                    default:
                        throw new Error("Bad UTF-8 encoding 0x" + a.toString(16))
                    }
                }
                return r < e && (o.length = r),
                String.fromCharCode.apply(String, o)
            }
            function f(t, e) {
                for (var o = [], r = new Array(32768), n = 0, i = 0, a = t.length; n < e && i < a; n++) {
                    var s = t.charCodeAt(i++);
                    switch (s >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        r[n] = s;
                        break;
                    case 12:
                    case 13:
                        if (!(i < a))
                            throw new Error("Unfinished UTF-8 octet sequence");
                        r[n] = (31 & s) << 6 | 63 & t.charCodeAt(i++);
                        break;
                    case 14:
                        if (!(i + 1 < a))
                            throw new Error("Unfinished UTF-8 octet sequence");
                        r[n] = (15 & s) << 12 | (63 & t.charCodeAt(i++)) << 6 | 63 & t.charCodeAt(i++);
                        break;
                    case 15:
                        if (!(i + 2 < a))
                            throw new Error("Unfinished UTF-8 octet sequence");
                        var c = ((7 & s) << 18 | (63 & t.charCodeAt(i++)) << 12 | (63 & t.charCodeAt(i++)) << 6 | 63 & t.charCodeAt(i++)) - 65536;
                        if (!(0 <= c && c <= 1048575))
                            throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
                        r[n++] = c >> 10 & 1023 | 55296,
                        r[n] = 1023 & c | 56320;
                        break;
                    default:
                        throw new Error("Bad UTF-8 encoding 0x" + s.toString(16))
                    }
                    if (n >= 32766) {
                        var l = n + 1;
                        r.length = l,
                        o[o.length] = String.fromCharCode.apply(String, r),
                        e -= l,
                        n = -1
                    }
                }
                return n > 0 && (r.length = n,
                o[o.length] = String.fromCharCode.apply(String, r)),
                o.join("")
            }
            function h(t, e) {
                return (null == e || e < 0) && (e = t.length),
                0 === e ? "" : /^[\x00-\x7f]*$/.test(t) || !/^[\x00-\xff]*$/.test(t) ? e === t.length ? t : t.substr(0, e) : e < 65535 ? d(t, e) : f(t, e)
            }
            function _(t, e) {
                return null == t || 0 === t.length ? t : (t = p(t),
                e = p(e),
                n(l(i(t, !0), c(i(e, !1))), !1))
            }
            function g(t, e) {
                return null == t || 0 === t.length ? t : (e = p(e),
                h(n(u(i(t, !1), c(i(e, !1))), !0)))
            }
            t.XXTEA = {
                utf8Encode: p,
                utf8Decode: h,
                encrypt: _,
                encryptToBase64: function(e, o) {
                    return t.btoa(_(e, o))
                },
                decrypt: g,
                decryptFromBase64: function(e, o) {
                    return null == e || 0 === e.length ? e : g(t.atob(e), o)
                }
            }
        }(window),
        cc._RF.pop()
    }
    , {}]
}, {}, ["AllOPConfig", "AllSDKConfig", "BtnClickSoundAndDelay", "CommonAudioMgr", "G", "Init", "OPConfig", "VersionConfig", "AppInit", "ChessItem", "GameCtrl", "GameItem", "GameMgr", "GameScene", "GridItem", "Player", "PlayerMgr", "HomeCtrl", "LaunchCtrl", "LaunchInit", "LaunchMgr", "LoginCtrl", "LoginMgr", "BonusAlert", "BonusItem", "FeedbackAlert", "MailAlert", "NormalAlert", "ProfileAlert", "ProfileItem", "QuitAlert", "RankAlert", "RankItem", "ServiceAlert", "SettingAlert", "SettleAlert", "SettleItem", "ShopAlert", "GoodsAlert", "CoreInit", "AdConstants", "AppConstants", "NetworkConstants", "StoragesConstants", "md5", "xxtea", "AlertCtrl", "LoadingCtrl", "ReconnCtrl", "SceneCtrlBase", "ToastCtrl", "HttpClient", "AudioMgr", "PublicMgr", "UserMgr", "LocalTestData", "NetworkMgr", "SocketClient", "LSMgr", "LSTodayMgr", "StorageData", "StorageMgr", "AppUtils", "FuncUtils", "LogUtils", "MgrUtils", "TimeUtils", "ViewUtils", "JMAlertBase", "JMClickAudio", "JMLoadProgressBar", "JMToastItem", "CanvasEx", "MiddleAD", "MiddleAuth", "MiddleDevice", "MiddleMgr", "PlatformInit"]);
