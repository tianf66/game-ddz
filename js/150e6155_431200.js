var __reflect = this && this.__reflect ||
function(t, e, r) {
    t.__class__ = e,
    r ? r.push(e) : r = [e],
    t.__types__ = t.__types__ ? r.concat(t.__types__) : r

    console.log(t,e,r);
},
__extends = this && this.__extends ||
function(t, e) {
    function r() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    r.prototype = e.prototype,
    t.prototype = new r
},
egret; !
function(t) {
    var e = function() {
        function t() {}
        return t.BINARY = "binary",
        t.TEXT = "text",
        t.VARIABLES = "variables",
        t.TEXTURE = "texture",
        t.SOUND = "sound",
        t
    } ();
    t.URLLoaderDataFormat = e,
    __reflect(e.prototype, "egret.URLLoaderDataFormat")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(t) {
        function e(e, r, i) {
            var o = t.call(this) || this;
            return o._name = e,
            o._frame = 0 | r,
            i && (o._end = 0 | i),
            o
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "name", {
            get: function() {
                return this._name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "frame", {
            get: function() {
                return this._frame
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "end", {
            get: function() {
                return this._end
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.clone = function() {
            return new e(this._name, this._frame, this._end)
        },
        e
    } (t.EventDispatcher);
    t.FrameLabel = e,
    __reflect(e.prototype, "egret.FrameLabel")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r() {
            var t = e.call(this) || this;
            return t.$mcData = null,
            t.numFrames = 1,
            t.frames = [],
            t.labels = null,
            t.events = [],
            t.frameRate = 0,
            t.textureData = null,
            t.spriteSheet = null,
            t
        }
        return __extends(r, e),
        r.prototype.$init = function(t, e, r) {
            this.textureData = e,
            this.spriteSheet = r,
            this.setMCData(t)
        },
        r.prototype.getKeyFrameData = function(t) {
            var e = this.frames[t - 1];
            return e.frame && (e = this.frames[e.frame - 1]),
            e
        },
        r.prototype.getTextureByFrame = function(t) {
            var e = this.getKeyFrameData(t);
            if (e.res) {
                var r = this.getTextureByResName(e.res);
                return r
            }
            return null
        },
        r.prototype.$getOffsetByFrame = function(t, e) {
            var r = this.getKeyFrameData(t);
            r.res && e.setTo(0 | r.x, 0 | r.y)
        },
        r.prototype.getTextureByResName = function(t) {
            if (null == this.spriteSheet) return null;
            var e = this.spriteSheet.getTexture(t);
            if (!e) {
                var r = this.textureData[t];
                e = this.spriteSheet.createTexture(t, r.x, r.y, r.w, r.h)
            }
            return e
        },
        r.prototype.$isDataValid = function() {
            return this.frames.length > 0
        },
        r.prototype.$isTextureValid = function() {
            return null != this.textureData && null != this.spriteSheet
        },
        r.prototype.$fillMCData = function(t) {
            this.frameRate = t.frameRate || 24,
            this.fillFramesData(t.frames),
            this.fillFrameLabelsData(t.labels),
            this.fillFrameEventsData(t.events)
        },
        r.prototype.fillFramesData = function(t) {
            for (var e, r = this.frames,
            i = t ? t.length: 0, o = 0; i > o; o++) {
                var n = t[o];
                if (r.push(n), n.duration) {
                    var s = parseInt(n.duration);
                    if (s > 1) {
                        e = r.length;
                        for (var a = 1; s > a; a++) r.push({
                            frame: e
                        })
                    }
                }
            }
            this.numFrames = r.length
        },
        r.prototype.fillFrameLabelsData = function(e) {
            if (e) {
                var r = e.length;
                if (r > 0) {
                    this.labels = [];
                    for (var i = 0; r > i; i++) {
                        var o = e[i];
                        this.labels.push(new t.FrameLabel(o.name, o.frame, o.end))
                    }
                }
            }
        },
        r.prototype.fillFrameEventsData = function(t) {
            if (t) {
                var e = t.length;
                if (e > 0) {
                    this.events = [];
                    for (var r = 0; e > r; r++) {
                        var i = t[r];
                        this.events[i.frame] = i.name
                    }
                }
            }
        },
        Object.defineProperty(r.prototype, "mcData", {
            get: function() {
                return this.$mcData
            },
            set: function(t) {
                this.setMCData(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.setMCData = function(t) {
            this.$mcData != t && (this.$mcData = t, t && this.$fillMCData(t))
        },
        r
    } (t.HashObject);
    t.MovieClipData = e,
    __reflect(e.prototype, "egret.MovieClipData")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r(t, r) {
            var i = e.call(this) || this;
            return i.enableCache = !0,
            i.$mcDataCache = {},
            i.$mcDataSet = t,
            i.setTexture(r),
            i
        }
        return __extends(r, e),
        r.prototype.clearCache = function() {
            this.$mcDataCache = {}
        },
        r.prototype.generateMovieClipData = function(e) {
            if (void 0 === e && (e = ""), "" == e && this.$mcDataSet) for (e in this.$mcDataSet.mc) break;
            if ("" == e) return null;
            var r = this.findFromCache(e, this.$mcDataCache);
            return r || (r = new t.MovieClipData, this.fillData(e, r, this.$mcDataCache)),
            r
        },
        r.prototype.findFromCache = function(t, e) {
            return this.enableCache && e[t] ? e[t] : null
        },
        r.prototype.fillData = function(t, e, r) {
            if (this.$mcDataSet) {
                var i = this.$mcDataSet.mc[t];
                i && (e.$init(i, this.$mcDataSet.res, this.$spriteSheet), this.enableCache && (r[t] = e))
            }
        },
        Object.defineProperty(r.prototype, "mcDataSet", {
            get: function() {
                return this.$mcDataSet
            },
            set: function(t) {
                this.$mcDataSet = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "texture", {
            set: function(t) {
                this.setTexture(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "spriteSheet", {
            get: function() {
                return this.$spriteSheet
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.setTexture = function(e) {
            this.$spriteSheet = e ? new t.SpriteSheet(e) : null
        },
        r
    } (t.EventDispatcher);
    t.MovieClipDataFactory = e,
    __reflect(e.prototype, "egret.MovieClipDataFactory")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r(t, r, i, o) {
            void 0 === r && (r = !1),
            void 0 === i && (i = !1),
            void 0 === o && (o = null);
            var n = e.call(this, t, r, i) || this;
            return n.frameLabel = null,
            n.frameLabel = o,
            n
        }
        return __extends(r, e),
        r.dispatchMovieClipEvent = function(e, i, o) {
            void 0 === o && (o = null);
            var n = t.Event.create(r, i);
            n.frameLabel = o;
            var s = e.dispatchEvent(n);
            return t.Event.release(n),
            s
        },
        r.FRAME_LABEL = "frame_label",
        r
    } (t.Event);
    t.MovieClipEvent = e,
    __reflect(e.prototype, "egret.MovieClipEvent")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function() {
        function e() {
            t.$error(1014)
        }
        return e.get = function(t) {
            return - 1 > t && (t = -1),
            t > 1 && (t = 1),
            function(e) {
                return 0 == t ? e: 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
            }
        },
        e.getPowOut = function(t) {
            return function(e) {
                return 1 - Math.pow(1 - e, t)
            }
        },
        e.quintOut = e.getPowOut(5),
        e.quartOut = e.getPowOut(4),
        e
    } ();
    t.ScrollEase = e,
    __reflect(e.prototype, "egret.ScrollEase");
    var r = function(e) {
        function r(t, r, i) {
            var o = e.call(this) || this;
            return o._target = null,
            o._useTicks = !1,
            o.ignoreGlobalPause = !1,
            o.loop = !1,
            o.pluginData = null,
            o._steps = null,
            o._actions = null,
            o.paused = !1,
            o.duration = 0,
            o._prevPos = -1,
            o.position = null,
            o._prevPosition = 0,
            o._stepPosition = 0,
            o.passive = !1,
            o.initialize(t, r, i),
            o
        }
        return __extends(r, e),
        r.get = function(t, e, i, o) {
            return void 0 === e && (e = null),
            void 0 === i && (i = null),
            void 0 === o && (o = !1),
            o && r.removeTweens(t),
            new r(t, e, i)
        },
        r.removeTweens = function(t) {
            if (t.tween_count) {
                for (var e = r._tweens,
                i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !0, e.splice(i, 1));
                t.tween_count = 0
            }
        },
        r.tick = function(t, e) {
            void 0 === e && (e = !1);
            var i = t - r._lastTime;
            r._lastTime = t;
            for (var o = r._tweens.concat(), n = o.length - 1; n >= 0; n--) {
                var s = o[n];
                e && !s.ignoreGlobalPause || s.paused || s.tick(s._useTicks ? 1 : i)
            }
            return ! 1
        },
        r._register = function(e, i) {
            var o = e._target,
            n = r._tweens;
            if (i) o && (o.tween_count = o.tween_count > 0 ? o.tween_count + 1 : 1),
            n.push(e),
            r._inited || (r._lastTime = t.getTimer(), t.ticker.$startTick(r.tick, null), r._inited = !0);
            else {
                o && o.tween_count--;
                for (var s = n.length; s--;) if (n[s] == e) return void n.splice(s, 1)
            }
        },
        r.prototype.initialize = function(t, e, i) {
            this._target = t,
            e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && r.removeTweens(t)),
            this.pluginData = i || {},
            this._curQueueProps = {},
            this._initQueueProps = {},
            this._steps = [],
            this._actions = [],
            e && e.paused ? this.paused = !0 : r._register(this, !0),
            e && null != e.position && this.setPosition(e.position)
        },
        r.prototype.setPosition = function(t, e) {
            void 0 === e && (e = 1),
            0 > t && (t = 0);
            var r = t,
            i = !1;
            if (r >= this.duration && (this.loop ? r %= this.duration: (r = this.duration, i = !0)), r == this._prevPos) return i;
            var o = this._prevPos;
            if (this.position = this._prevPos = r, this._prevPosition = t, this._target) if (i) this._updateTargetProps(null, 1);
            else if (this._steps.length > 0) {
                var n = void 0,
                s = this._steps.length;
                for (n = 0; s > n && !(this._steps[n].t > r); n++);
                var a = this._steps[n - 1];
                this._updateTargetProps(a, (this._stepPosition = r - a.t) / a.d)
            }
            return i && this.setPaused(!0),
            0 != e && this._actions.length > 0 && (this._useTicks ? this._runActions(r, r) : 1 == e && o > r ? (o != this.duration && this._runActions(o, this.duration), this._runActions(0, r, !0)) : this._runActions(o, r)),
            this.dispatchEventWith("change"),
            i
        },
        r.prototype._runActions = function(t, e, r) {
            void 0 === r && (r = !1);
            var i = t,
            o = e,
            n = -1,
            s = this._actions.length,
            a = 1;
            for (t > e && (i = e, o = t, n = s, s = a = -1); (n += a) != s;) {
                var c = this._actions[n],
                l = c.t; (l == o || l > i && o > l || r && l == t) && c.f.apply(c.o, c.p)
            }
        },
        r.prototype._updateTargetProps = function(t, e) {
            var i, o, n, s, a, c;
            if (t || 1 != e) {
                if (this.passive = !!t.v, this.passive) return;
                t.e && (e = t.e(e, 0, 1, 1)),
                i = t.p0,
                o = t.p1
            } else this.passive = !1,
            i = o = this._curQueueProps;
            for (var l in this._initQueueProps) {
                null == (s = i[l]) && (i[l] = s = this._initQueueProps[l]),
                null == (a = o[l]) && (o[l] = a = s),
                n = s == a || 0 == e || 1 == e || "number" != typeof s ? 1 == e ? a: s: s + (a - s) * e;
                var h = !1;
                if (c = r._plugins[l]) for (var u = 0,
                p = c.length; p > u; u++) {
                    var _ = c[u].tween(this, l, n, i, o, e, !!t && i == o, !t);
                    _ == r.IGNORE ? h = !0 : n = _
                }
                h || (this._target[l] = n)
            }
        },
        r.prototype.setPaused = function(t) {
            return this.paused = t,
            r._register(this, !t),
            this
        },
        r.prototype._cloneProps = function(t) {
            var e = {};
            for (var r in t) e[r] = t[r];
            return e
        },
        r.prototype._addStep = function(t) {
            return t.d > 0 && (this._steps.push(t), t.t = this.duration, this.duration += t.d),
            this
        },
        r.prototype._appendQueueProps = function(t) {
            var e, i, o, n, s;
            for (var a in t) if (void 0 === this._initQueueProps[a]) {
                if (i = this._target[a], e = r._plugins[a]) for (o = 0, n = e.length; n > o; o++) i = e[o].init(this, a, i);
                this._initQueueProps[a] = this._curQueueProps[a] = void 0 === i ? null: i
            } else i = this._curQueueProps[a];
            for (var a in t) {
                if (i = this._curQueueProps[a], e = r._plugins[a]) for (s = s || {},
                o = 0, n = e.length; n > o; o++) e[o].step && e[o].step(this, a, i, t[a], s);
                this._curQueueProps[a] = t[a]
            }
            return s && this._appendQueueProps(s),
            this._curQueueProps
        },
        r.prototype._addAction = function(t) {
            return t.t = this.duration,
            this._actions.push(t),
            this
        },
        r.prototype.to = function(t, e, r) {
            return void 0 === r && (r = void 0),
            (isNaN(e) || 0 > e) && (e = 0),
            this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: r,
                p1: this._cloneProps(this._appendQueueProps(t))
            })
        },
        r.prototype.call = function(t, e, r) {
            return void 0 === e && (e = void 0),
            void 0 === r && (r = void 0),
            this._addAction({
                f: t,
                p: r ? r: [],
                o: e ? e: this._target
            })
        },
        r.prototype.tick = function(t) {
            this.paused || this.setPosition(this._prevPosition + t)
        },
        r._tweens = [],
        r.IGNORE = {},
        r._plugins = {},
        r._inited = !1,
        r._lastTime = 0,
        r
    } (t.EventDispatcher);
    t.ScrollTween = r,
    __reflect(r.prototype, "egret.ScrollTween")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r(r) {
            void 0 === r && (r = null);
            var i = e.call(this) || this;
            return i.scrollBeginThreshold = 10,
            i.scrollSpeed = 1,
            i._content = null,
            i.delayTouchBeginEvent = null,
            i.touchBeginTimer = null,
            i.touchEnabled = !0,
            i._ScrV_Props_ = new t.ScrollViewProperties,
            r && i.setContent(r),
            i
        }
        return __extends(r, e),
        Object.defineProperty(r.prototype, "bounces", {
            get: function() {
                return this._ScrV_Props_._bounces
            },
            set: function(t) {
                this._ScrV_Props_._bounces = !!t
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.setContent = function(t) {
            this._content !== t && (this.removeContent(), t && (this._content = t, e.prototype.addChild.call(this, t), this._addEvents()))
        },
        r.prototype.removeContent = function() {
            this._content && (this._removeEvents(), e.prototype.removeChildAt.call(this, 0)),
            this._content = null
        },
        Object.defineProperty(r.prototype, "verticalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._verticalScrollPolicy
            },
            set: function(t) {
                t != this._ScrV_Props_._verticalScrollPolicy && (this._ScrV_Props_._verticalScrollPolicy = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "horizontalScrollPolicy", {
            get: function() {
                return this._ScrV_Props_._horizontalScrollPolicy
            },
            set: function(t) {
                t != this._ScrV_Props_._horizontalScrollPolicy && (this._ScrV_Props_._horizontalScrollPolicy = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "scrollLeft", {
            get: function() {
                return this._ScrV_Props_._scrollLeft
            },
            set: function(t) {
                t != this._ScrV_Props_._scrollLeft && (this._ScrV_Props_._scrollLeft = t, this._validatePosition(!1, !0), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "scrollTop", {
            get: function() {
                return this._ScrV_Props_._scrollTop
            },
            set: function(t) {
                t != this._ScrV_Props_._scrollTop && (this._ScrV_Props_._scrollTop = t, this._validatePosition(!0, !1), this._updateContentPosition())
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.setScrollPosition = function(t, e, r) {
            if (void 0 === r && (r = !1), (!r || 0 != t || 0 != e) && (r || this._ScrV_Props_._scrollTop != t || this._ScrV_Props_._scrollLeft != e)) {
                var i = this._ScrV_Props_._scrollTop,
                o = this._ScrV_Props_._scrollLeft;
                if (r) {
                    var n = this.getMaxScrollLeft(),
                    s = this.getMaxScrollTop(); (0 >= i || i >= s) && (t /= 2),
                    (0 >= o || o >= n) && (e /= 2);
                    var a = i + t,
                    c = o + e,
                    l = this._ScrV_Props_._bounces;
                    l || ((0 >= a || a >= s) && (a = Math.max(0, Math.min(a, s))), (0 >= c || c >= n) && (c = Math.max(0, Math.min(c, n)))),
                    this._ScrV_Props_._scrollTop = a,
                    this._ScrV_Props_._scrollLeft = c
                } else this._ScrV_Props_._scrollTop = t,
                this._ScrV_Props_._scrollLeft = e;
                this._validatePosition(!0, !0),
                this._updateContentPosition()
            }
        },
        r.prototype._validatePosition = function(t, e) {
            if (void 0 === t && (t = !1), void 0 === e && (e = !1), t) {
                var r = this.height,
                i = this._getContentHeight();
                this._ScrV_Props_._scrollTop = Math.max(this._ScrV_Props_._scrollTop, (0 - r) / 2),
                this._ScrV_Props_._scrollTop = Math.min(this._ScrV_Props_._scrollTop, i > r ? i - r / 2 : r / 2)
            }
            if (e) {
                var o = this.width,
                n = this._getContentWidth();
                this._ScrV_Props_._scrollLeft = Math.max(this._ScrV_Props_._scrollLeft, (0 - o) / 2),
                this._ScrV_Props_._scrollLeft = Math.min(this._ScrV_Props_._scrollLeft, n > o ? n - o / 2 : o / 2)
            }
        },
        r.prototype.$setWidth = function(t) {
            this.$explicitWidth != t && (e.prototype.$setWidth.call(this, t), this._updateContentPosition())
        },
        r.prototype.$setHeight = function(t) {
            this.$explicitHeight != t && (e.prototype.$setHeight.call(this, t), this._updateContentPosition())
        },
        r.prototype._updateContentPosition = function() {
            var e = this.height,
            r = this.width;
            this.scrollRect = new t.Rectangle(Math.round(this._ScrV_Props_._scrollLeft), Math.round(this._ScrV_Props_._scrollTop), r, e),
            this.dispatchEvent(new t.Event(t.Event.CHANGE))
        },
        r.prototype._checkScrollPolicy = function() {
            var t = this._ScrV_Props_._horizontalScrollPolicy,
            e = this.__checkScrollPolicy(t, this._getContentWidth(), this.width);
            this._ScrV_Props_._hCanScroll = e;
            var r = this._ScrV_Props_._verticalScrollPolicy,
            i = this.__checkScrollPolicy(r, this._getContentHeight(), this.height);
            return this._ScrV_Props_._vCanScroll = i,
            e || i
        },
        r.prototype.__checkScrollPolicy = function(t, e, r) {
            return "on" == t ? !0 : "off" == t ? !1 : e > r
        },
        r.prototype._addEvents = function() {
            this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this),
            this.addEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0),
            this.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        },
        r.prototype._removeEvents = function() {
            this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBegin, this),
            this.removeEventListener(t.TouchEvent.TOUCH_BEGIN, this._onTouchBeginCapture, this, !0),
            this.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEndCapture, this, !0)
        },
        r.prototype._onTouchBegin = function(e) {
            if (!e.$isDefaultPrevented) {
                var r = this._checkScrollPolicy();
                r && (this._ScrV_Props_._touchStartPosition.x = e.stageX, this._ScrV_Props_._touchStartPosition.y = e.stageY, (this._ScrV_Props_._isHTweenPlaying || this._ScrV_Props_._isVTweenPlaying) && this._onScrollFinished(), this._tempStage = this.stage, this._tempStage.addEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this), this._tempStage.addEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this), this._tempStage.addEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this), this.addEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this), this._logTouchEvent(e), e.preventDefault())
            }
        },
        r.prototype._onTouchBeginCapture = function(e) {
            var r = this._checkScrollPolicy();
            if (r) {
                for (var i = e.target; i != this;) {
                    if ("_checkScrollPolicy" in i && (r = i._checkScrollPolicy())) return;
                    i = i.parent
                }
                e.stopPropagation();
                var o = this.cloneTouchEvent(e);
                this.delayTouchBeginEvent = o,
                this.touchBeginTimer || (this.touchBeginTimer = new t.Timer(100, 1), this.touchBeginTimer.addEventListener(t.TimerEvent.TIMER_COMPLETE, this._onTouchBeginTimer, this)),
                this.touchBeginTimer.start(),
                this._onTouchBegin(e)
            }
        },
        r.prototype._onTouchEndCapture = function(e) {
            var r = this;
            if (this.delayTouchBeginEvent) {
                this._onTouchBeginTimer(),
                e.stopPropagation();
                var i = this.cloneTouchEvent(e);
                t.callLater(function() {
                    r.stage && r.dispatchPropagationEvent(i)
                },
                this)
            }
        },
        r.prototype._onTouchBeginTimer = function() {
            this.touchBeginTimer.stop();
            var t = this.delayTouchBeginEvent;
            this.delayTouchBeginEvent = null,
            this.stage && this.dispatchPropagationEvent(t)
        },
        r.prototype.dispatchPropagationEvent = function(e) {
            for (var r = e.$target,
            i = this.$getPropagationList(r), o = i.length, n = .5 * i.length, s = -1, a = 0; o > a; a++) if (i[a] === this._content) {
                s = a;
                break
            }
            i.splice(0, s + 1),
            n -= s + 1,
            this.$dispatchPropagationEvent(e, i, n),
            t.Event.release(e)
        },
        r.prototype._onTouchMove = function(t) {
            if (this._ScrV_Props_._lastTouchPosition.x != t.stageX || this._ScrV_Props_._lastTouchPosition.y != t.stageY) {
                if (!this._ScrV_Props_._scrollStarted) {
                    var e = t.stageX - this._ScrV_Props_._touchStartPosition.x,
                    r = t.stageY - this._ScrV_Props_._touchStartPosition.y,
                    i = Math.sqrt(e * e + r * r);
                    if (i < this.scrollBeginThreshold) return void this._logTouchEvent(t)
                }
                this._ScrV_Props_._scrollStarted = !0,
                this.delayTouchBeginEvent && (this.delayTouchBeginEvent = null, this.touchBeginTimer.stop()),
                this.touchChildren = !1;
                var o = this._getPointChange(t);
                this.setScrollPosition(o.y, o.x, !0),
                this._calcVelocitys(t),
                this._logTouchEvent(t)
            }
        },
        r.prototype._onTouchEnd = function(e) {
            this.touchChildren = !0,
            this._ScrV_Props_._scrollStarted = !1,
            this._tempStage.removeEventListener(t.TouchEvent.TOUCH_MOVE, this._onTouchMove, this),
            this._tempStage.removeEventListener(t.TouchEvent.TOUCH_END, this._onTouchEnd, this),
            this._tempStage.removeEventListener(t.TouchEvent.LEAVE_STAGE, this._onTouchEnd, this),
            this.removeEventListener(t.Event.ENTER_FRAME, this._onEnterFrame, this),
            this._moveAfterTouchEnd()
        },
        r.prototype._onEnterFrame = function(e) {
            var r = t.getTimer();
            r - this._ScrV_Props_._lastTouchTime > 100 && r - this._ScrV_Props_._lastTouchTime < 300 && this._calcVelocitys(this._ScrV_Props_._lastTouchEvent)
        },
        r.prototype._logTouchEvent = function(e) {
            this._ScrV_Props_._lastTouchPosition.x = e.stageX,
            this._ScrV_Props_._lastTouchPosition.y = e.stageY,
            this._ScrV_Props_._lastTouchEvent = this.cloneTouchEvent(e),
            this._ScrV_Props_._lastTouchTime = t.getTimer()
        },
        r.prototype._getPointChange = function(t) {
            return {
                x: this._ScrV_Props_._hCanScroll === !1 ? 0 : this._ScrV_Props_._lastTouchPosition.x - t.stageX,
                y: this._ScrV_Props_._vCanScroll === !1 ? 0 : this._ScrV_Props_._lastTouchPosition.y - t.stageY
            }
        },
        r.prototype._calcVelocitys = function(e) {
            var r = t.getTimer();
            if (0 == this._ScrV_Props_._lastTouchTime) return void(this._ScrV_Props_._lastTouchTime = r);
            var i = this._getPointChange(e),
            o = r - this._ScrV_Props_._lastTouchTime;
            i.x /= o,
            i.y /= o,
            this._ScrV_Props_._velocitys.push(i),
            this._ScrV_Props_._velocitys.length > 5 && this._ScrV_Props_._velocitys.shift(),
            this._ScrV_Props_._lastTouchPosition.x = e.stageX,
            this._ScrV_Props_._lastTouchPosition.y = e.stageY
        },
        r.prototype._getContentWidth = function() {
            return this._content.$explicitWidth || this._content.width
        },
        r.prototype._getContentHeight = function() {
            return this._content.$explicitHeight || this._content.height
        },
        r.prototype.getMaxScrollLeft = function() {
            var t = this._getContentWidth() - this.width;
            return Math.max(0, t)
        },
        r.prototype.getMaxScrollTop = function() {
            var t = this._getContentHeight() - this.height;
            return Math.max(0, t)
        },
        r.prototype._moveAfterTouchEnd = function() {
            if (0 != this._ScrV_Props_._velocitys.length) {
                for (var t = {
                    x: 0,
                    y: 0
                },
                e = 0, i = 0; i < this._ScrV_Props_._velocitys.length; i++) {
                    var o = this._ScrV_Props_._velocitys[i],
                    n = r.weight[i];
                    t.x += o.x * n,
                    t.y += o.y * n,
                    e += n
                }
                this._ScrV_Props_._velocitys.length = 0,
                this.scrollSpeed <= 0 && (this.scrollSpeed = 1);
                var s = t.x / e * this.scrollSpeed,
                a = t.y / e * this.scrollSpeed,
                c = Math.abs(s),
                l = Math.abs(a),
                h = this.getMaxScrollLeft(),
                u = this.getMaxScrollTop(),
                p = c > .02 ? this.getAnimationDatas(s, this._ScrV_Props_._scrollLeft, h) : {
                    position: this._ScrV_Props_._scrollLeft,
                    duration: 1
                },
                _ = l > .02 ? this.getAnimationDatas(a, this._ScrV_Props_._scrollTop, u) : {
                    position: this._ScrV_Props_._scrollTop,
                    duration: 1
                };
                this.setScrollLeft(p.position, p.duration),
                this.setScrollTop(_.position, _.duration)
            }
        },
        r.prototype.onTweenFinished = function(t) {
            t == this._ScrV_Props_._vScrollTween && (this._ScrV_Props_._isVTweenPlaying = !1),
            t == this._ScrV_Props_._hScrollTween && (this._ScrV_Props_._isHTweenPlaying = !1),
            0 == this._ScrV_Props_._isHTweenPlaying && 0 == this._ScrV_Props_._isVTweenPlaying && this._onScrollFinished()
        },
        r.prototype._onScrollStarted = function() {},
        r.prototype._onScrollFinished = function() {
            t.ScrollTween.removeTweens(this),
            this._ScrV_Props_._hScrollTween = null,
            this._ScrV_Props_._vScrollTween = null,
            this._ScrV_Props_._isHTweenPlaying = !1,
            this._ScrV_Props_._isVTweenPlaying = !1,
            this.dispatchEvent(new t.Event(t.Event.COMPLETE))
        },
        r.prototype.setScrollTop = function(e, r) {
            void 0 === r && (r = 0);
            var i = Math.min(this.getMaxScrollTop(), Math.max(e, 0));
            if (0 == r) return void(this.scrollTop = i);
            0 == this._ScrV_Props_._bounces && (e = i);
            var o = t.ScrollTween.get(this).to({
                scrollTop: e
            },
            r, t.ScrollEase.quartOut);
            i != e && o.to({
                scrollTop: i
            },
            300, t.ScrollEase.quintOut),
            this._ScrV_Props_._isVTweenPlaying = !0,
            this._ScrV_Props_._vScrollTween = o,
            o.call(this.onTweenFinished, this, [o]),
            this._ScrV_Props_._isHTweenPlaying || this._onScrollStarted()
        },
        r.prototype.setScrollLeft = function(e, r) {
            void 0 === r && (r = 0);
            var i = Math.min(this.getMaxScrollLeft(), Math.max(e, 0));
            if (0 == r) return void(this.scrollLeft = i);
            0 == this._ScrV_Props_._bounces && (e = i);
            var o = t.ScrollTween.get(this).to({
                scrollLeft: e
            },
            r, t.ScrollEase.quartOut);
            i != e && o.to({
                scrollLeft: i
            },
            300, t.ScrollEase.quintOut),
            this._ScrV_Props_._isHTweenPlaying = !0,
            this._ScrV_Props_._hScrollTween = o,
            o.call(this.onTweenFinished, this, [o]),
            this._ScrV_Props_._isVTweenPlaying || this._onScrollStarted()
        },
        r.prototype.getAnimationDatas = function(t, e, r) {
            var i = Math.abs(t),
            o = .95,
            n = 0,
            s = .998,
            a = .02,
            c = e + 500 * t;
            if (0 > c || c > r) for (c = e; Math.abs(t) != 1 / 0 && Math.abs(t) > a;) c += t,
            t *= 0 > c || c > r ? s * o: s,
            n++;
            else n = 500 * -Math.log(a / i);
            var l = {
                position: Math.min(r + 50, Math.max(c, -50)),
                duration: n
            };
            return l
        },
        r.prototype.cloneTouchEvent = function(e) {
            var r = new t.TouchEvent(e.type, e.bubbles, e.cancelable);
            return r.touchPointID = e.touchPointID,
            r.$stageX = e.stageX,
            r.$stageY = e.stageY,
            r.touchDown = e.touchDown,
            r.$isDefaultPrevented = !1,
            r.$target = e.target,
            r
        },
        r.prototype.throwNotSupportedError = function() {
            t.$error(1023)
        },
        r.prototype.addChild = function(t) {
            return this.throwNotSupportedError(),
            null
        },
        r.prototype.addChildAt = function(t, e) {
            return this.throwNotSupportedError(),
            null
        },
        r.prototype.removeChild = function(t) {
            return this.throwNotSupportedError(),
            null
        },
        r.prototype.removeChildAt = function(t) {
            return this.throwNotSupportedError(),
            null
        },
        r.prototype.setChildIndex = function(t, e) {
            this.throwNotSupportedError()
        },
        r.prototype.swapChildren = function(t, e) {
            this.throwNotSupportedError()
        },
        r.prototype.swapChildrenAt = function(t, e) {
            this.throwNotSupportedError()
        },
        r.weight = [1, 1.33, 1.66, 2, 2.33],
        r
    } (t.DisplayObjectContainer);
    t.ScrollView = e,
    __reflect(e.prototype, "egret.ScrollView")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function() {
        function e() {
            this._verticalScrollPolicy = "auto",
            this._horizontalScrollPolicy = "auto",
            this._scrollLeft = 0,
            this._scrollTop = 0,
            this._hCanScroll = !1,
            this._vCanScroll = !1,
            this._lastTouchPosition = new t.Point(0, 0),
            this._touchStartPosition = new t.Point(0, 0),
            this._scrollStarted = !1,
            this._lastTouchTime = 0,
            this._lastTouchEvent = null,
            this._velocitys = [],
            this._isHTweenPlaying = !1,
            this._isVTweenPlaying = !1,
            this._hScrollTween = null,
            this._vScrollTween = null,
            this._bounces = !0
        }
        return e
    } ();
    t.ScrollViewProperties = e,
    __reflect(e.prototype, "egret.ScrollViewProperties")
} (egret || (egret = {}));
var egret; !
function(t) {
    function e(e) {
        var r = e.url;
        return - 1 == r.indexOf("?") && e.method == t.URLRequestMethod.GET && e.data && e.data instanceof t.URLVariables && (r = r + "?" + e.data.toString()),
        r
    }
    var r = function(r) {
        function i(e) {
            void 0 === e && (e = null);
            var i = r.call(this) || this;
            return i.dataFormat = t.URLLoaderDataFormat.TEXT,
            i.data = null,
            i._request = null,
            i._status = -1,
            e && i.load(e),
            i
        }
        return __extends(i, r),
        i.prototype.load = function(r) {
            this._request = r,
            this.data = null;
            var i = this;
            if (i.dataFormat == t.URLLoaderDataFormat.TEXTURE) return void this.loadTexture(i);
            if (i.dataFormat == t.URLLoaderDataFormat.SOUND) return void this.loadSound(i);
            var o = e(r),
            n = new t.HttpRequest;
            n.open(o, r.method == t.URLRequestMethod.POST ? t.HttpMethod.POST: t.HttpMethod.GET);
            var s;
            if (r.method != t.URLRequestMethod.GET && r.data) if (r.data instanceof t.URLVariables) {
                n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                var a = r.data;
                s = a.toString()
            } else n.setRequestHeader("Content-Type", "multipart/form-data"),
            s = r.data;
            else;
            for (var c = r.requestHeaders.length,
            l = 0; c > l; l++) {
                var h = r.requestHeaders[l];
                n.setRequestHeader(h.name, h.value)
            }
            n.addEventListener(t.Event.COMPLETE,
            function() {
                i.data = n.response,
                t.Event.dispatchEvent(i, t.Event.COMPLETE)
            },
            this),
            n.addEventListener(t.IOErrorEvent.IO_ERROR,
            function() {
                t.IOErrorEvent.dispatchIOErrorEvent(i)
            },
            this),
            n.responseType = i.dataFormat == t.URLLoaderDataFormat.BINARY ? t.HttpResponseType.ARRAY_BUFFER: t.HttpResponseType.TEXT,
            n.send(s)
        },
        i.prototype.getResponseType = function(e) {
            switch (e) {
            case t.URLLoaderDataFormat.TEXT:
            case t.URLLoaderDataFormat.VARIABLES:
                return t.URLLoaderDataFormat.TEXT;
            case t.URLLoaderDataFormat.BINARY:
                return "arraybuffer";
            default:
                return e
            }
        },
        i.prototype.loadSound = function(e) {
            function r(t) {
                e.dispatchEvent(t)
            }
            function i(t) {
                n(),
                e.dispatchEvent(t)
            }
            function o(r) {
                n(),
                e.data = c,
                window.setTimeout(function() {
                    e.dispatchEventWith(t.Event.COMPLETE)
                },
                0)
            }
            function n() {
                c.removeEventListener(t.Event.COMPLETE, o, s),
                c.removeEventListener(t.IOErrorEvent.IO_ERROR, i, s),
                c.removeEventListener(t.ProgressEvent.PROGRESS, r, s)
            }
            var s = this,
            a = e._request.url,
            c = new t.Sound;
            c.addEventListener(t.Event.COMPLETE, o, s),
            c.addEventListener(t.IOErrorEvent.IO_ERROR, i, s),
            c.addEventListener(t.ProgressEvent.PROGRESS, r, s),
            c.load(a)
        },
        i.prototype.loadTexture = function(e) {
            function r(t) {
                e.dispatchEvent(t)
            }
            function i(t) {
                n(),
                e.dispatchEvent(t)
            }
            function o(r) {
                n();
                var i = c.data;
                i.source.setAttribute("bitmapSrc", a);
                var o = new t.Texture;
                o._setBitmapData(i),
                e.data = o,
                window.setTimeout(function() {
                    e.dispatchEventWith(t.Event.COMPLETE)
                },
                s)
            }
            function n() {
                c.removeEventListener(t.Event.COMPLETE, o, s),
                c.removeEventListener(t.IOErrorEvent.IO_ERROR, i, s),
                c.removeEventListener(t.ProgressEvent.PROGRESS, r, s)
            }
            var s = this,
            a = e._request.url,
            c = new t.ImageLoader;
            c.addEventListener(t.Event.COMPLETE, o, s),
            c.addEventListener(t.IOErrorEvent.IO_ERROR, i, s),
            c.addEventListener(t.ProgressEvent.PROGRESS, r, s),
            c.load(a)
        },
        i.prototype.__recycle = function() {
            this._request = null,
            this.data = null
        },
        i
    } (t.EventDispatcher);
    t.URLLoader = r,
    __reflect(r.prototype, "egret.URLLoader")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r(r) {
            var i = e.call(this) || this;
            return i.$texture = null,
            i.offsetPoint = t.Point.create(0, 0),
            i.$movieClipData = null,
            i.frames = null,
            i.$totalFrames = 0,
            i.frameLabels = null,
            i.$frameLabelStart = 0,
            i.$frameLabelEnd = 0,
            i.frameEvents = null,
            i.frameIntervalTime = 0,
            i.$eventPool = null,
            i.$isPlaying = !1,
            i.isStopped = !0,
            i.playTimes = 0,
            i.$currentFrameNum = 0,
            i.$nextFrameNum = 1,
            i.displayedKeyFrameNum = 0,
            i.passedTime = 0,
            i.$frameRate = 0 / 0,
            i.lastTime = 0,
            i.$smoothing = t.Bitmap.defaultSmoothing,
            i.setMovieClipData(r),
            t.nativeRender || (i.$renderNode = new t.sys.NormalBitmapNode),
            i
        }
        return __extends(r, e),
        r.prototype.createNativeDisplayObject = function() {
            this.$nativeDisplayObject = new egret_native.NativeDisplayObject(11)
        },
        Object.defineProperty(r.prototype, "smoothing", {
            get: function() {
                return this.$smoothing
            },
            set: function(t) {
                t != this.$smoothing && (this.$smoothing = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.$init = function() {
            this.$reset();
            var t = this.$movieClipData;
            t && t.$isDataValid() && (this.frames = t.frames, this.$totalFrames = t.numFrames, this.frameLabels = t.labels, this.frameEvents = t.events, this.$frameRate = t.frameRate, this.frameIntervalTime = 1e3 / this.$frameRate, this._initFrame())
        },
        r.prototype.$reset = function() {
            this.frames = null,
            this.playTimes = 0,
            this.$isPlaying = !1,
            this.setIsStopped(!0),
            this.$currentFrameNum = 0,
            this.$nextFrameNum = 1,
            this.displayedKeyFrameNum = 0,
            this.passedTime = 0,
            this.$eventPool = []
        },
        r.prototype._initFrame = function() {
            this.$movieClipData.$isTextureValid() && (this.advanceFrame(), this.constructFrame())
        },
        r.prototype.$updateRenderNode = function() {
            var e = this.$texture;
            if (e) {
                var r = Math.round(this.offsetPoint.x),
                i = Math.round(this.offsetPoint.y),
                o = e.$bitmapWidth,
                n = e.$bitmapHeight,
                s = e.$getTextureWidth(),
                a = e.$getTextureHeight(),
                c = Math.round(e.$getScaleBitmapWidth()),
                l = Math.round(e.$getScaleBitmapHeight()),
                h = e.$sourceWidth,
                u = e.$sourceHeight;
                t.sys.BitmapNode.$updateTextureData(this.$renderNode, e.$bitmapData, e.$bitmapX, e.$bitmapY, o, n, r, i, s, a, c, l, h, u, t.BitmapFillMode.SCALE, this.$smoothing)
            }
        },
        r.prototype.$measureContentBounds = function(t) {
            var e = this.$texture;
            if (e) {
                var r = this.offsetPoint.x,
                i = this.offsetPoint.y,
                o = e.$getTextureWidth(),
                n = e.$getTextureHeight();
                t.setTo(r, i, o, n)
            } else t.setEmpty()
        },
        r.prototype.$onAddToStage = function(t, r) {
            e.prototype.$onAddToStage.call(this, t, r),
            this.$isPlaying && this.$totalFrames > 1 && this.setIsStopped(!1)
        },
        r.prototype.$onRemoveFromStage = function() {
            e.prototype.$onRemoveFromStage.call(this),
            this.setIsStopped(!0)
        },
        r.prototype.getFrameLabelByName = function(t, e) {
            void 0 === e && (e = !1),
            e && (t = t.toLowerCase());
            var r = this.frameLabels;
            if (r) for (var i = null,
            o = 0; o < r.length; o++) if (i = r[o], e ? i.name.toLowerCase() == t: i.name == t) return i;
            return null
        },
        r.prototype.getFrameStartEnd = function(t) {
            var e = this.frameLabels;
            if (e) for (var r = null,
            i = 0; i < e.length; i++) if (r = e[i], t == r.name) {
                this.$frameLabelStart = r.frame,
                this.$frameLabelEnd = r.end;
                break
            }
        },
        r.prototype.getFrameLabelByFrame = function(t) {
            var e = this.frameLabels;
            if (e) for (var r = null,
            i = 0; i < e.length; i++) if (r = e[i], r.frame == t) return r;
            return null
        },
        r.prototype.getFrameLabelForFrame = function(t) {
            var e = null,
            r = null,
            i = this.frameLabels;
            if (i) for (var o = 0; o < i.length; o++) {
                if (r = i[o], r.frame > t) return e;
                e = r
            }
            return e
        },
        r.prototype.play = function(e) {
            void 0 === e && (e = 0),
            this.lastTime = t.getTimer(),
            this.passedTime = 0,
            this.$isPlaying = !0,
            this.setPlayTimes(e),
            this.$totalFrames > 1 && this.$stage && this.setIsStopped(!1)
        },
        r.prototype.stop = function() {
            this.$isPlaying = !1,
            this.setIsStopped(!0)
        },
        r.prototype.prevFrame = function() {
            this.gotoAndStop(this.$currentFrameNum - 1)
        },
        r.prototype.nextFrame = function() {
            this.gotoAndStop(this.$currentFrameNum + 1)
        },
        r.prototype.gotoAndPlay = function(e, r) {
            void 0 === r && (r = 0),
            (0 == arguments.length || arguments.length > 2) && t.$error(1022, "MovieClip.gotoAndPlay()"),
            "string" == typeof e ? this.getFrameStartEnd(e) : (this.$frameLabelStart = 0, this.$frameLabelEnd = 0),
            this.play(r),
            this.gotoFrame(e)
        },
        r.prototype.gotoAndStop = function(e) {
            1 != arguments.length && t.$error(1022, "MovieClip.gotoAndStop()"),
            this.stop(),
            this.gotoFrame(e)
        },
        r.prototype.gotoFrame = function(e) {
            var r;
            "string" == typeof e ? r = this.getFrameLabelByName(e).frame: (r = parseInt(e + "", 10), r != e && t.$error(1022, "Frame Label Not Found")),
            1 > r ? r = 1 : r > this.$totalFrames && (r = this.$totalFrames),
            r != this.$nextFrameNum && (this.$nextFrameNum = r, this.advanceFrame(), this.constructFrame(), this.handlePendingEvent())
        },
        r.prototype.advanceTime = function(e) {
            var r = this,
            i = e - r.lastTime;
            r.lastTime = e;
            var o = r.frameIntervalTime,
            n = r.passedTime + i;
            r.passedTime = n % o;
            var s = n / o;
            if (1 > s) return ! 1;
            for (; s >= 1;) {
                if (s--, r.$nextFrameNum++, r.$nextFrameNum > r.$totalFrames || r.$frameLabelStart > 0 && r.$nextFrameNum > r.$frameLabelEnd) if ( - 1 == r.playTimes) r.$eventPool.push(t.Event.LOOP_COMPLETE),
                r.$nextFrameNum = 1;
                else {
                    if (r.playTimes--, !(r.playTimes > 0)) {
                        r.$nextFrameNum = r.$totalFrames,
                        r.$eventPool.push(t.Event.COMPLETE),
                        r.stop();
                        break
                    }
                    r.$eventPool.push(t.Event.LOOP_COMPLETE),
                    r.$nextFrameNum = 1
                }
                r.$currentFrameNum == r.$frameLabelEnd && (r.$nextFrameNum = r.$frameLabelStart),
                r.advanceFrame()
            }
            return r.constructFrame(),
            r.handlePendingEvent(),
            !1
        },
        r.prototype.advanceFrame = function() {
            this.$currentFrameNum = this.$nextFrameNum;
            var e = this.frameEvents[this.$nextFrameNum];
            e && "" != e && t.MovieClipEvent.dispatchMovieClipEvent(this, t.MovieClipEvent.FRAME_LABEL, e)
        },
        r.prototype.constructFrame = function() {
            var e = this,
            r = e.$currentFrameNum;
            if (e.displayedKeyFrameNum != r) {
                var i = e.$movieClipData.getTextureByFrame(r);
                if (e.$texture = i, e.$movieClipData.$getOffsetByFrame(r, e.offsetPoint), e.displayedKeyFrameNum = r, e.$renderDirty = !0, t.nativeRender) e.$nativeDisplayObject.setDataToBitmapNode(e.$nativeDisplayObject.id, i, [i.$bitmapX, i.$bitmapY, i.$bitmapWidth, i.$bitmapHeight, e.offsetPoint.x, e.offsetPoint.y, i.$getScaleBitmapWidth(), i.$getScaleBitmapHeight(), i.$sourceWidth, i.$sourceHeight]),
                e.$nativeDisplayObject.setWidth(i.$getTextureWidth() + e.offsetPoint.x),
                e.$nativeDisplayObject.setHeight(i.$getTextureHeight() + e.offsetPoint.y);
                else {
                    var o = e.$parent;
                    o && !o.$cacheDirty && (o.$cacheDirty = !0, o.$cacheDirtyUp());
                    var n = e.$maskedObject;
                    n && !n.$cacheDirty && (n.$cacheDirty = !0, n.$cacheDirtyUp())
                }
            }
        },
        r.prototype.$renderFrame = function() {
            var t = this;
            t.$texture = t.$movieClipData.getTextureByFrame(t.$currentFrameNum),
            t.$renderDirty = !0;
            var e = t.$parent;
            e && !e.$cacheDirty && (e.$cacheDirty = !0, e.$cacheDirtyUp());
            var r = t.$maskedObject;
            r && !r.$cacheDirty && (r.$cacheDirty = !0, r.$cacheDirtyUp())
        },
        r.prototype.handlePendingEvent = function() {
            if (0 != this.$eventPool.length) {
                this.$eventPool.reverse();
                for (var e = this.$eventPool,
                r = e.length,
                i = !1,
                o = !1,
                n = 0; r > n; n++) {
                    var s = e.pop();
                    s == t.Event.LOOP_COMPLETE ? o = !0 : s == t.Event.COMPLETE ? i = !0 : this.dispatchEventWith(s)
                }
                o && this.dispatchEventWith(t.Event.LOOP_COMPLETE),
                i && this.dispatchEventWith(t.Event.COMPLETE)
            }
        },
        Object.defineProperty(r.prototype, "totalFrames", {
            get: function() {
                return this.$totalFrames
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "currentFrame", {
            get: function() {
                return this.$currentFrameNum
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "currentFrameLabel", {
            get: function() {
                var t = this.getFrameLabelByFrame(this.$currentFrameNum);
                return t && t.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "currentLabel", {
            get: function() {
                var t = this.getFrameLabelForFrame(this.$currentFrameNum);
                return t ? t.name: null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "frameRate", {
            get: function() {
                return this.$frameRate
            },
            set: function(t) {
                t != this.$frameRate && (this.$frameRate = t, this.frameIntervalTime = 1e3 / this.$frameRate)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "isPlaying", {
            get: function() {
                return this.$isPlaying
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "movieClipData", {
            get: function() {
                return this.$movieClipData
            },
            set: function(t) {
                this.setMovieClipData(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.setMovieClipData = function(t) {
            this.$movieClipData != t && (this.$movieClipData = t, this.$init())
        },
        r.prototype.setPlayTimes = function(t) { (0 > t || t >= 1) && (this.playTimes = 0 > t ? -1 : Math.floor(t))
        },
        r.prototype.setIsStopped = function(e) {
            this.isStopped != e && (this.isStopped = e, e ? t.ticker.$stopTick(this.advanceTime, this) : (this.playTimes = 0 == this.playTimes ? 1 : this.playTimes, this.lastTime = t.getTimer(), t.ticker.$startTick(this.advanceTime, this)))
        },
        r
    } (t.DisplayObject);
    t.MovieClip = e,
    __reflect(e.prototype, "egret.MovieClip")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r(r) {
            void 0 === r && (r = null);
            var i = e.call(this) || this;
            return i.data = null,
            i.method = t.URLRequestMethod.GET,
            i.url = "",
            i.requestHeaders = [],
            i.url = r,
            i
        }
        return __extends(r, e),
        r
    } (t.HashObject);
    t.URLRequest = e,
    __reflect(e.prototype, "egret.URLRequest")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function() {
        function t(t, e) {
            this.name = "",
            this.value = "",
            this.name = t,
            this.value = e
        }
        return t
    } ();
    t.URLRequestHeader = e,
    __reflect(e.prototype, "egret.URLRequestHeader")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function() {
        function t() {}
        return t.GET = "get",
        t.POST = "post",
        t
    } ();
    t.URLRequestMethod = e,
    __reflect(e.prototype, "egret.URLRequestMethod")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(t) {
        function e(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return r.variables = null,
            null !== e && r.decode(e),
            r
        }
        return __extends(e, t),
        e.prototype.decode = function(t) {
            this.variables || (this.variables = {}),
            t = t.split("+").join(" ");
            for (var e, r = /[?&]?([^=]+)=([^&]*)/g; e = r.exec(t);) {
                var i = decodeURIComponent(e[1]),
                o = decodeURIComponent(e[2]);
                if (i in this.variables != 0) {
                    var n = this.variables[i];
                    n instanceof Array ? n.push(o) : this.variables[i] = [n, o]
                } else this.variables[i] = o
            }
        },
        e.prototype.toString = function() {
            if (!this.variables) return "";
            var t = this.variables,
            e = [];
            for (var r in t) e.push(this.encodeValue(r, t[r]));
            return e.join("&")
        },
        e.prototype.encodeValue = function(t, e) {
            return e instanceof Array ? this.encodeArray(t, e) : encodeURIComponent(t) + "=" + encodeURIComponent(e)
        },
        e.prototype.encodeArray = function(t, e) {
            return t ? 0 == e.length ? encodeURIComponent(t) + "=": e.map(function(e) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e)
            }).join("&") : ""
        },
        e
    } (t.HashObject);
    t.URLVariables = e,
    __reflect(e.prototype, "egret.URLVariables")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r() {
            var i = e.call(this) || this;
            return i._timeScale = 1,
            i._paused = !1,
            i._callIndex = -1,
            i._lastTime = 0,
            i.callBackList = [],
            null != r.instance,
            t.ticker.$startTick(i.update, i),
            i._lastTime = t.getTimer(),
            i
        }
        return __extends(r, e),
        r.prototype.update = function(t) {
            var e = t - this._lastTime;
            if (this._lastTime = t, this._paused) return ! 1;
            var r = e * this._timeScale;
            for (this._callList = this.callBackList.concat(), this._callIndex = 0; this._callIndex < this._callList.length; this._callIndex++) {
                var i = this._callList[this._callIndex];
                i.listener.call(i.thisObject, r)
            }
            return this._callIndex = -1,
            this._callList = null,
            !1
        },
        r.prototype.register = function(t, e, r) {
            void 0 === r && (r = 0),
            this.$insertEventBin(this.callBackList, "", t, e, !1, r, !1)
        },
        r.prototype.unregister = function(t, e) {
            this.$removeEventBin(this.callBackList, t, e)
        },
        r.prototype.setTimeScale = function(t) {
            this._timeScale = t
        },
        r.prototype.getTimeScale = function() {
            return this._timeScale
        },
        r.prototype.pause = function() {
            this._paused = !0
        },
        r.prototype.resume = function() {
            this._paused = !1
        },
        r.getInstance = function() {
            return null == r.instance && (r.instance = new r),
            r.instance
        },
        r
    } (t.EventDispatcher);
    t.Ticker = e,
    __reflect(e.prototype, "egret.Ticker")
} (egret || (egret = {}));
var egret; !
function(t) {
    var e = function(e) {
        function r() {
            return e.call(this) || this
        }
        return __extends(r, e),
        Object.defineProperty(r.prototype, "stage", {
            get: function() {
                return t.sys.$TempStage
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r, "instance", {
            get: function() {
                return null == r._instance && (r._instance = new r),
                r._instance
            },
            enumerable: !0,
            configurable: !0
        }),
        r.deviceType = null,
        r.DEVICE_PC = "web",
        r.DEVICE_MOBILE = "native",
        r
    } (t.EventDispatcher);
    t.MainContext = e,
    __reflect(e.prototype, "egret.MainContext")
} (egret || (egret = {})),
egret.testDeviceType1 = function() {
    if (!window.navigator) return ! 0;
    var t = navigator.userAgent.toLowerCase();
    return - 1 != t.indexOf("mobile") || -1 != t.indexOf("android")
},
egret.MainContext.deviceType = egret.testDeviceType1() ? egret.MainContext.DEVICE_MOBILE: egret.MainContext.DEVICE_PC,
delete egret.testDeviceType1;
var egret; !
function(t) {
    var e = function(e) {
        function r(t) {
            void 0 === t && (t = 300);
            var r = e.call(this) || this;
            return r.objectPool = [],
            r._length = 0,
            1 > t && (t = 1),
            r.autoDisposeTime = t,
            r.frameCount = 0,
            r
        }
        return __extends(r, e),
        r.$init = function() {
            t.ticker.$startTick(r.onUpdate, r)
        },
        r.onUpdate = function(t) {
            for (var e = r._callBackList,
            i = e.length - 1; i >= 0; i--) e[i].$checkFrame();
            return ! 1
        },
        r.prototype.$checkFrame = function() {
            this.frameCount--,
            this.frameCount <= 0 && this.dispose()
        },
        Object.defineProperty(r.prototype, "length", {
            get: function() {
                return this._length
            },
            enumerable: !0,
            configurable: !0
        }),
        r.prototype.push = function(t) {
            var e = this.objectPool; - 1 == e.indexOf(t) && (e.push(t), t.__recycle && t.__recycle(), this._length++, 0 == this.frameCount && (this.frameCount = this.autoDisposeTime, r._callBackList.push(this)))
        },
        r.prototype.pop = function() {
            return 0 == this._length ? null: (this._length--, this.objectPool.pop())
        },
        r.prototype.dispose = function() {
            this._length > 0 && (this.objectPool = [], this._length = 0),
            this.frameCount = 0;
            var t = r._callBackList,
            e = t.indexOf(this); - 1 != e && t.splice(e, 1)
        },
        r._callBackList = [],
        r
    } (t.HashObject);
    t.Recycler = e,
    __reflect(e.prototype, "egret.Recycler"),
    e.$init()
} (egret || (egret = {}));
var egret; !
function(t) {
    function e(e, r, c) {
        for (var l = [], h = 3; h < arguments.length; h++) l[h - 3] = arguments[h];
        var u = {
            listener: e,
            thisObject: r,
            delay: c,
            originDelay: c,
            params: l
        };
        return s++,
        1 == s && (a = t.getTimer(), t.ticker.$startTick(i, null)),
        n++,
        o[n] = u,
        n
    }
    function r(e) {
        o[e] && (s--, delete o[e], 0 == s && t.ticker.$stopTick(i, null))
    }
    function i(t) {
        var e = t - a;
        a = t;
        for (var r in o) {
            var i = o[r];
            i.delay -= e,
            i.delay <= 0 && (i.delay = i.originDelay, i.listener.apply(i.thisObject, i.params))
        }
        return ! 1
    }
    var o = {},
    n = 0,
    s = 0,
    a = 0;
    t.setInterval = e,
    t.clearInterval = r
} (egret || (egret = {}));
var egret; !
function(t) {
    function e(e, r, c) {
        for (var l = [], h = 3; h < arguments.length; h++) l[h - 3] = arguments[h];
        var u = {
            listener: e,
            thisObject: r,
            delay: c,
            params: l
        };
        return s++,
        1 == s && t.ticker && (a = t.getTimer(), t.ticker.$startTick(i, null)),
        n++,
        o[n] = u,
        n
    }
    function r(e) {
        o[e] && (s--, delete o[e], 0 == s && t.ticker && t.ticker.$stopTick(i, null))
    }
    function i(t) {
        var e = t - a;
        a = t;
        for (var i in o) {
            var n = i,
            s = o[n];
            s.delay -= e,
            s.delay <= 0 && (s.listener.apply(s.thisObject, s.params), r(n))
        }
        return ! 1
    }
    var o = {},
    n = 0,
    s = 0,
    a = 0;
    t.setTimeout = e,
    t.clearTimeout = r
} (egret || (egret = {}));
var __reflect = this && this.__reflect ||
function(e, t, r) {
    e.__class__ = t,
    r ? r.push(t) : r = [t],
    e.__types__ = e.__types__ ? r.concat(e.__types__) : r
},
__extends = this && this.__extends ||
function(e, t) {
    function r() {
        this.constructor = e
    }
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    r.prototype = t.prototype,
    e.prototype = new r
},
RES; !
function(e) {
    var t = function(t) {
        function r() {
            var r = t.call(this) || this;
            return r.resourceConfig = null,
            r.resourceConfig = e.configInstance,
            r
        }
        return __extends(r, t),
        r.prototype.addSubkey = function(e, t) {
            this.resourceConfig.addSubkey(e, t)
        },
        r.prototype.loadFile = function(e, t, r) {},
        r.prototype.getRes = function(e) {},
        r.prototype.destroyRes = function(e) {
            return ! 1
        },
        r.getStringPrefix = function(e) {
            if (!e) return "";
            var t = e.indexOf(".");
            return - 1 != t ? e.substring(0, t) : ""
        },
        r.getStringTail = function(e) {
            if (!e) return "";
            var t = e.indexOf(".");
            return - 1 != t ? e.substring(t + 1) : ""
        },
        r
    } (egret.HashObject);
    e.AnalyzerBase = t,
    __reflect(t.prototype, "RES.AnalyzerBase")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.fileDic = {},
            e.resItemDic = [],
            e._dataFormat = egret.HttpResponseType.ARRAY_BUFFER,
            e.recycler = [],
            e
        }
        return __extends(r, t),
        r.prototype.loadFile = function(t, r, i) {
            if (this.fileDic[t.name]) return void r.call(i, t);
            var n = this.getRequest();
            this.resItemDic[n.hashCode] = {
                item: t,
                func: r,
                thisObject: i
            },
            n.open(e.$getVirtualUrl(t.url)),
            n.send()
        },
        r.prototype.getRequest = function() {
            var e = this.recycler.pop();
            return e || (e = new egret.HttpRequest, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e.responseType = this._dataFormat,
            e
        },
        r.prototype.onLoadFinish = function(e) {
            var t = e.target,
            r = this.resItemDic[t.hashCode];
            delete this.resItemDic[t.hashCode];
            var i = r.item,
            n = r.func;
            i.loaded = e.type == egret.Event.COMPLETE,
            i.loaded && this.analyzeData(i, t.response),
            this.recycler.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeData = function(e, t) {
            var r = e.name;
            this.fileDic[r] || "" != t && !t || (this.fileDic[r] = t)
        },
        r.prototype.getRes = function(e) {
            return this.fileDic[e]
        },
        r.prototype.hasRes = function(e) {
            var t = this.getRes(e);
            return null != t
        },
        r.prototype.destroyRes = function(e) {
            return this.fileDic[e] ? (this.onResourceDestroy(this.fileDic[e]), delete this.fileDic[e], !0) : !1
        },
        r.prototype.onResourceDestroy = function(e) {},
        r
    } (e.AnalyzerBase);
    e.BinAnalyzer = t,
    __reflect(t.prototype, "RES.BinAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function() {
        function e(e, t, r) {
            this.groupName = "",
            this.data = null,
            this._loaded = !1,
            this.name = e,
            this.url = t,
            this.type = r
        }
        return Object.defineProperty(e.prototype, "loaded", {
            get: function() {
                return this.data ? this.data.loaded: this._loaded
            },
            set: function(e) {
                this.data && (this.data.loaded = e),
                this._loaded = e
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.toString = function() {
            return '[ResourceItem name="' + this.name + '" url="' + this.url + '" type="' + this.type + '"]'
        },
        e.TYPE_XML = "xml",
        e.TYPE_IMAGE = "image",
        e.TYPE_BIN = "bin",
        e.TYPE_TEXT = "text",
        e.TYPE_JSON = "json",
        e.TYPE_SHEET = "sheet",
        e.TYPE_FONT = "font",
        e.TYPE_SOUND = "sound",
        e
    } ();
    e.ResourceItem = t,
    __reflect(t.prototype, "RES.ResourceItem")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.sheetMap = {},
            e.textureMap = {},
            e.recyclerIamge = [],
            e._dataFormat = egret.HttpResponseType.TEXT,
            e
        }
        return __extends(r, t),
        r.prototype.getRes = function(t) {
            var r = this.fileDic[t];
            if (r || (r = this.textureMap[t]), !r) {
                var i = e.AnalyzerBase.getStringPrefix(t);
                if (r = this.fileDic[i]) {
                    var n = e.AnalyzerBase.getStringTail(t);
                    r = r.getTexture(n)
                }
            }
            return r
        },
        r.prototype.onLoadFinish = function(e) {
            var t = e.target,
            r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.hashCode];
            var i = r.item,
            n = r.func;
            if (i.loaded = e.type == egret.Event.COMPLETE, i.loaded) if (t instanceof egret.HttpRequest) {
                i.loaded = !1;
                var o = this.analyzeConfig(i, t.response);
                if (o) return this.loadImage(o, r),
                void this.recycler.push(t)
            } else {
                var s = new egret.Texture;
                s._setBitmapData(t.data),
                this.analyzeBitmap(i, s)
            }
            t instanceof egret.HttpRequest ? this.recycler.push(t) : this.recyclerIamge.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeConfig = function(e, t) {
            var r, i = e.name,
            n = "";
            try {
                var o = t;
                r = JSON.parse(o)
            } catch(s) {
                egret.$warn(1017, e.url, t)
            }
            return r && (this.sheetMap[i] = r, n = this.getRelativePath(e.url, r.file)),
            n
        },
        r.prototype.analyzeBitmap = function(e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                var i = this.sheetMap[r];
                delete this.sheetMap[r];
                var n = e.data && e.data.subkeys ? "": r,
                o = this.parseSpriteSheet(t, i, n);
                this.fileDic[r] = o
            }
        },
        r.prototype.getRelativePath = function(e, t) {
            e = e.split("\\").join("/");
            var r = e.match(/#.*|\?.*/),
            i = "";
            r && (i = r[0]);
            var n = e.lastIndexOf("/");
            return e = -1 != n ? e.substring(0, n + 1) + t: t,
            e + i
        },
        r.prototype.parseSpriteSheet = function(e, t, r) {
            var i = t.frames;
            if (!i) return null;
            var n = new egret.SpriteSheet(e),
            o = this.textureMap;
            for (var s in i) {
                var a = i[s],
                u = n.createTexture(s, a.x, a.y, a.w, a.h, a.offX, a.offY, a.sourceW, a.sourceH);
                if (a.scale9grid) {
                    var c = a.scale9grid,
                    l = c.split(",");
                    u.scale9Grid = new egret.Rectangle(parseInt(l[0]), parseInt(l[1]), parseInt(l[2]), parseInt(l[3]))
                }
                null == o[s] && (o[s] = u, r && this.addSubkey(s, r))
            }
            return n
        },
        r.prototype.destroyRes = function(e) {
            var t = this.fileDic[e];
            if (t) {
                delete this.fileDic[e];
                var r = void 0;
                for (var i in t._textureMap) null == r && (r = t._textureMap[i], this.onResourceDestroy(r), r = null),
                delete this.textureMap[i];
                return t.dispose && t.dispose(),
                !0
            }
            return ! 1
        },
        r.prototype.loadImage = function(t, r) {
            var i = this.getImageLoader();
            this.resItemDic[i.hashCode] = r,
            i.load(e.$getVirtualUrl(t))
        },
        r.prototype.getImageLoader = function() {
            var e = this.recyclerIamge.pop();
            return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e
        },
        r.prototype.onResourceDestroy = function(e) {
            e && e.dispose()
        },
        r
    } (e.BinAnalyzer);
    e.SheetAnalyzer = t,
    __reflect(t.prototype, "RES.SheetAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.fileDic = {},
            e.resItemDic = [],
            e.recycler = [],
            e
        }
        return __extends(r, t),
        r.prototype.loadFile = function(t, r, i) {
            if (this.fileDic[t.name]) return void r.call(i, t);
            var n = this.getLoader();
            this.resItemDic[n.$hashCode] = {
                item: t,
                func: r,
                thisObject: i
            },
            n.load(e.$getVirtualUrl(t.url))
        },
        r.prototype.getLoader = function() {
            var e = this.recycler.pop();
            return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e
        },
        r.prototype.onLoadFinish = function(e) {
            var t = e.$target,
            r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.$hashCode];
            var i = r.item,
            n = r.func;
            if (i.loaded = e.$type == egret.Event.COMPLETE, i.loaded) {
                var o = new egret.Texture;
                o._setBitmapData(t.data),
                this.analyzeData(i, o)
            }
            this.recycler.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeData = function(e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                this.fileDic[r] = t;
                var i = e.data;
                if (i && i.scale9grid) {
                    var n = i.scale9grid,
                    o = n.split(",");
                    t.scale9Grid = new egret.Rectangle(parseInt(o[0]), parseInt(o[1]), parseInt(o[2]), parseInt(o[3]))
                }
            }
        },
        r.prototype.getRes = function(e) {
            return this.fileDic[e]
        },
        r.prototype.hasRes = function(e) {
            var t = this.getRes(e);
            return null != t
        },
        r.prototype.destroyRes = function(e) {
            return this.fileDic[e] ? (this.onResourceDestroy(this.fileDic[e]), delete this.fileDic[e], !0) : !1
        },
        r.prototype.onResourceDestroy = function(e) {
            e.dispose()
        },
        r
    } (e.AnalyzerBase);
    e.ImageAnalyzer = t,
    __reflect(t.prototype, "RES.ImageAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._dataFormat = egret.HttpResponseType.TEXT,
            t
        }
        return __extends(t, e),
        t
    } (e.BinAnalyzer);
    e.TextAnalyzer = t,
    __reflect(t.prototype, "RES.TextAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._dataFormat = egret.HttpResponseType.TEXT,
            t
        }
        return __extends(t, e),
        t.prototype.analyzeData = function(e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) try {
                var i = t;
                this.fileDic[r] = JSON.parse(i)
            } catch(n) {
                egret.$warn(1017, e.url, t)
            }
        },
        t
    } (e.BinAnalyzer);
    e.JsonAnalyzer = t,
    __reflect(t.prototype, "RES.JsonAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.thread = 2,
            e.loadingCount = 0,
            e.callBack = null,
            e.resInstance = null,
            e.groupTotalDic = {},
            e.numLoadedDic = {},
            e.itemListDic = {},
            e.groupErrorDic = {},
            e.retryTimesDic = {},
            e.maxRetryTimes = 3,
            e.failedList = new Array,
            e.priorityQueue = {},
            e.lazyLoadList = new Array,
            e.analyzerDic = {},
            e.queueIndex = 0,
            e
        }
        return __extends(r, t),
        r.prototype.isGroupInLoading = function(e) {
            return void 0 !== this.itemListDic[e]
        },
        r.prototype.loadGroup = function(t, r, i) {
            if (void 0 === i && (i = 0), !this.itemListDic[r] && r) {
                if (!t || 0 == t.length) {
                    egret.$warn(3201, r);
                    var n = new e.ResourceEvent(e.ResourceEvent.GROUP_LOAD_ERROR);
                    return n.groupName = r,
                    void this.dispatchEvent(n)
                }
                this.priorityQueue[i] ? this.priorityQueue[i].push(r) : this.priorityQueue[i] = [r],
                this.itemListDic[r] = t;
                for (var o = t.length,
                s = 0; o > s; s++) {
                    var a = t[s];
                    a.groupName = r
                }
                this.groupTotalDic[r] = t.length,
                this.numLoadedDic[r] = 0,
                this.next()
            }
        },
        r.prototype.loadItem = function(e) {
            this.lazyLoadList.push(e),
            e.groupName = "",
            this.next()
        },
        r.prototype.next = function() {
            for (; this.loadingCount < this.thread;) {
                var e = this.getOneResourceItem();
                if (!e) break;
                if (this.loadingCount++, e.loaded) this.onItemComplete(e);
                else {
                    var t = this.resInstance.$getAnalyzerByType(e.type);
                    t.loadFile(e, this.onItemComplete, this)
                }
            }
        },
        r.prototype.getOneResourceItem = function() {
            if (this.failedList.length > 0) return this.failedList.shift();
            var e = Number.NEGATIVE_INFINITY;
            for (var t in this.priorityQueue) e = Math.max(e, t);
            var r = this.priorityQueue[e];
            if (!r || 0 == r.length) return 0 == this.lazyLoadList.length ? null: this.lazyLoadList.pop();
            for (var i, n = r.length,
            o = 0; n > o && (this.queueIndex >= n && (this.queueIndex = 0), i = this.itemListDic[r[this.queueIndex]], !(i.length > 0)); o++) this.queueIndex++;
            return 0 == i.length ? null: i.shift()
        },
        r.prototype.onItemComplete = function(t) {
            this.loadingCount--;
            var r = t.groupName;
            if (!t.loaded) {
                var i = this.retryTimesDic[t.name] || 1;
                if (! (i > this.maxRetryTimes)) return this.retryTimesDic[t.name] = i + 1,
                this.failedList.push(t),
                void this.next();
                delete this.retryTimesDic[t.name],
                e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.ITEM_LOAD_ERROR, r, t)
            }
            if (r) {
                this.numLoadedDic[r]++;
                var n = this.numLoadedDic[r],
                o = this.groupTotalDic[r];
                if (t.loaded || (this.groupErrorDic[r] = !0), e.ResourceEvent.dispatchResourceEvent(this.resInstance, e.ResourceEvent.GROUP_PROGRESS, r, t, n, o), n == o) {
                    var s = this.groupErrorDic[r];
                    this.removeGroupName(r),
                    delete this.groupTotalDic[r],
                    delete this.numLoadedDic[r],
                    delete this.itemListDic[r],
                    delete this.groupErrorDic[r],
                    s ? e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_LOAD_ERROR, r) : e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, r)
                }
            } else this.callBack.call(this.resInstance, t);
            this.next()
        },
        r.prototype.removeGroupName = function(e) {
            for (var t in this.priorityQueue) {
                for (var r = this.priorityQueue[t], i = 0, n = !1, o = r.length, s = 0; o > s; s++) {
                    var a = r[s];
                    if (a == e) {
                        r.splice(i, 1),
                        n = !0;
                        break
                    }
                    i++
                }
                if (n) {
                    0 == r.length && delete this.priorityQueue[t];
                    break
                }
            }
        },
        r
    } (egret.EventDispatcher);
    e.ResourceLoader = t,
    __reflect(t.prototype, "RES.ResourceLoader")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function() {
        function t() {
            this.keyMap = {},
            this.groupDic = {},
            e.configInstance = this
        }
        return t.prototype.getGroupByName = function(e) {
            var t = new Array;
            if (!this.groupDic[e]) return t;
            for (var r = this.groupDic[e], i = r.length, n = 0; i > n; n++) {
                var o = r[n];
                t.push(this.parseResourceItem(o))
            }
            return t
        },
        t.prototype.getRawGroupByName = function(e) {
            return this.groupDic[e] ? this.groupDic[e] : []
        },
        t.prototype.createGroup = function(e, t, r) {
            if (void 0 === r && (r = !1), !r && this.groupDic[e] || !t || 0 == t.length) return ! 1;
            for (var i = this.groupDic,
            n = [], o = t.length, s = 0; o > s; s++) {
                var a = t[s],
                u = i[a];
                if (u) for (var c = u.length,
                l = 0; c > l; l++) {
                    var p = u[l]; - 1 == n.indexOf(p) && n.push(p)
                } else {
                    var p = this.keyMap[a];
                    p ? -1 == n.indexOf(p) && n.push(p) : egret.$warn(3200, a)
                }
            }
            return 0 == n.length ? !1 : (this.groupDic[e] = n, !0)
        },
        t.prototype.parseConfig = function(e, t) {
            if (e) {
                var r = e.resources;
                if (r) for (var i = r.length,
                n = 0; i > n; n++) {
                    var o = r[n],
                    s = o.url;
                    s && -1 == s.indexOf("://") && (o.url = t + s),
                    this.addItemToKeyMap(o)
                }
                var a = e.groups;
                if (a) for (var u = a.length,
                n = 0; u > n; n++) {
                    for (var c = a[n], l = [], p = c.keys.split(","), h = p.length, f = 0; h > f; f++) {
                        var d = p[f].trim(),
                        o = this.keyMap[d];
                        o && -1 == l.indexOf(o) && l.push(o)
                    }
                    this.groupDic[c.name] = l
                }
            }
        },
        t.prototype.addSubkey = function(e, t) {
            var r = this.keyMap[t];
            r && !this.keyMap[e] && (this.keyMap[e] = r)
        },
        t.prototype.addItemToKeyMap = function(e) {
            if (this.keyMap[e.name] || (this.keyMap[e.name] = e), e.hasOwnProperty("subkeys")) {
                var t = e.subkeys.split(",");
                e.subkeys = t;
                for (var r = t.length,
                i = 0; r > i; i++) {
                    var n = t[i];
                    null == this.keyMap[n] && (this.keyMap[n] = e)
                }
            }
        },
        t.prototype.getName = function(e) {
            var t = this.keyMap[e];
            return t ? t.name: ""
        },
        t.prototype.getType = function(e) {
            var t = this.keyMap[e];
            return t ? t.type: ""
        },
        t.prototype.getRawResourceItem = function(e) {
            return this.keyMap[e]
        },
        t.prototype.getResourceItem = function(e) {
            var t = this.keyMap[e];
            return t ? this.parseResourceItem(t) : null
        },
        t.prototype.parseResourceItem = function(t) {
            var r = new e.ResourceItem(t.name, t.url, t.type);
            return r.data = t,
            r
        },
        t
    } ();
    e.ResourceConfig = t,
    __reflect(t.prototype, "RES.ResourceConfig")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.soundDic = {},
            e.resItemDic = [],
            e
        }
        return __extends(r, t),
        r.prototype.loadFile = function(t, r, i) {
            if (this.soundDic[t.name]) return void r.call(i, t);
            var n = new egret.Sound;
            n.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this),
            n.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this),
            this.resItemDic[n.$hashCode] = {
                item: t,
                func: r,
                thisObject: i
            },
            n.load(e.$getVirtualUrl(t.url)),
            t.data && (n.type = t.data.soundType)
        },
        r.prototype.onLoadFinish = function(e) {
            var t = e.$target;
            t.removeEventListener(egret.Event.COMPLETE, this.onLoadFinish, this),
            t.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this);
            var r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.$hashCode];
            var i = r.item,
            n = r.func;
            i.loaded = e.$type == egret.Event.COMPLETE,
            i.loaded && this.analyzeData(i, t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeData = function(e, t) {
            var r = e.name; ! this.soundDic[r] && t && (this.soundDic[r] = t)
        },
        r.prototype.getRes = function(e) {
            return this.soundDic[e]
        },
        r.prototype.hasRes = function(e) {
            return !! this.getRes(e)
        },
        r.prototype.destroyRes = function(e) {
            return this.soundDic[e] ? (delete this.soundDic[e], !0) : !1
        },
        r
    } (e.AnalyzerBase);
    e.SoundAnalyzer = t,
    __reflect(t.prototype, "RES.SoundAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(e) {
        function t() {
            var t = e.call(this) || this;
            return t._dataFormat = egret.HttpResponseType.TEXT,
            t
        }
        return __extends(t, e),
        t.prototype.analyzeData = function(e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) try {
                var i = t,
                n = egret.XML.parse(i);
                this.fileDic[r] = n
            } catch(o) {}
        },
        t
    } (e.BinAnalyzer);
    e.XMLAnalyzer = t,
    __reflect(t.prototype, "RES.XMLAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(e) {
        function t(t, r, i) {
            void 0 === r && (r = !1),
            void 0 === i && (i = !1);
            var n = e.call(this, t, r, i) || this;
            return n.itemsLoaded = 0,
            n.itemsTotal = 0,
            n.groupName = "",
            n.resItem = null,
            n
        }
        return __extends(t, e),
        t.dispatchResourceEvent = function(e, r, i, n, o, s) {
            void 0 === i && (i = ""),
            void 0 === n && (n = null),
            void 0 === o && (o = 0),
            void 0 === s && (s = 0);
            var a = egret.Event.create(t, r);
            a.groupName = i,
            a.resItem = n,
            a.itemsLoaded = o,
            a.itemsTotal = s;
            var u = e.dispatchEvent(a);
            return egret.Event.release(a),
            u
        },
        t.ITEM_LOAD_ERROR = "itemLoadError",
        t.CONFIG_COMPLETE = "configComplete",
        t.CONFIG_LOAD_ERROR = "configLoadError",
        t.GROUP_PROGRESS = "groupProgress",
        t.GROUP_COMPLETE = "groupComplete",
        t.GROUP_LOAD_ERROR = "groupLoadError",
        t
    } (egret.Event);
    e.ResourceEvent = t,
    __reflect(t.prototype, "RES.ResourceEvent")
} (RES || (RES = {}));
var RES; !
function(e) {
    var t; !
    function(t) {
        var r = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._versionInfo = {},
                t
            }
            return __extends(t, e),
            t.prototype.fetchVersion = function(e) {
                e.onSuccess(null)
            },
            t.prototype.getChangeList = function() {
                return []
            },
            t.prototype.getVirtualUrl = function(e) {
                return e
            },
            t
        } (egret.EventDispatcher);
        t.Html5VersionController = r,
        __reflect(r.prototype, "RES.web.Html5VersionController", ["RES.VersionController", "RES.IVersionController"]),
        e.VersionController = r
    } (t = e.web || (e.web = {}))
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(e) {
        function t() {
            return e.call(this) || this
        }
        return __extends(t, e),
        t.prototype.analyzeConfig = function(e, t) {
            var r, i = e.name,
            n = "";
            try {
                var o = t;
                r = JSON.parse(o)
            } catch(s) {}
            return r ? n = this.getRelativePath(e.url, r.file) : (r = t, n = this.getTexturePath(e.url, r)),
            this.sheetMap[i] = r,
            n
        },
        t.prototype.analyzeBitmap = function(e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                var i = this.sheetMap[r];
                delete this.sheetMap[r];
                var n = new egret.BitmapFont(t, i);
                this.fileDic[r] = n
            }
        },
        t.prototype.getTexturePath = function(e, t) {
            var r = "",
            i = t.split("\n"),
            n = i[2],
            o = n && n.indexOf('file="');
            return - 1 != o && (n = n.substring(o + 6), o = n.indexOf('"'), r = n.substring(0, o)),
            e = e.split("\\").join("/"),
            o = e.lastIndexOf("/"),
            e = -1 != o ? e.substring(0, o + 1) + r: r
        },
        t.prototype.onResourceDestroy = function(e) {
            e && e.dispose()
        },
        t
    } (e.SheetAnalyzer);
    e.FontAnalyzer = t,
    __reflect(t.prototype, "RES.FontAnalyzer")
} (RES || (RES = {}));
var RES; !
function(e) {
    function t(e, t) {
        L.registerAnalyzer(e, t)
    }
    function r(e) {
        return L.$getAnalyzerByType(e)
    }
    function i(e) {
        L.$registerVersionController(e)
    }
    function n() {
        return L.vcs
    }
    function o(e, t, r) {
        void 0 === t && (t = ""),
        void 0 === r && (r = "json"),
        L.loadConfig(e, t, r)
    }
    function s(e, t) {
        void 0 === t && (t = 0),
        L.loadGroup(e, t)
    }
    function a(e) {
        return L.isGroupLoaded(e)
    }
    function u(e) {
        return L.getGroupByName(e)
    }
    function c(e, t, r) {
        return void 0 === r && (r = !1),
        L.createGroup(e, t, r)
    }
    function l(e) {
        return L.hasRes(e)
    }
    function p(e, t) {
        void 0 === t && (t = ""),
        L.parseConfig(e, t)
    }
    function h(e) {
        return L.getRes(e)
    }
    function f(e, t, r) {
        L.getResAsync(e, t, r)
    }
    function d(e, t, r, i) {
        void 0 === i && (i = ""),
        L.getResByUrl(e, t, r, i)
    }
    function y(e, t) {
        return L.destroyRes(e, t)
    }
    function g(e) {
        L.setMaxLoadingThread(e)
    }
    function v(e) {
        L.setMaxRetryTimes(e)
    }
    function R(e, t, r, i, n) {
        void 0 === i && (i = !1),
        void 0 === n && (n = 0),
        L.addEventListener(e, t, r, i, n)
    }
    function m(e, t, r, i) {
        void 0 === i && (i = !1),
        L.removeEventListener(e, t, r, i)
    }
    function E(e) {
        return L.vcs ? L.vcs.getVirtualUrl(e) : e
    }
    e.registerAnalyzer = t,
    e.getAnalyzer = r,
    e.registerVersionController = i,
    e.getVersionController = n,
    e.loadConfig = o,
    e.loadGroup = s,
    e.isGroupLoaded = a,
    e.getGroupByName = u,
    e.createGroup = c,
    e.hasRes = l,
    e.parseConfig = p,
    e.getRes = h,
    e.getResAsync = f,
    e.getResByUrl = d,
    e.destroyRes = y,
    e.setMaxLoadingThread = g,
    e.setMaxRetryTimes = v,
    e.addEventListener = R,
    e.removeEventListener = m,
    e.$getVirtualUrl = E;
    var _ = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.analyzerDic = {},
            e.analyzerClassMap = {},
            e.configItemList = [],
            e.callLaterFlag = !1,
            e.configComplete = !1,
            e.loadedGroups = [],
            e.groupNameList = [],
            e.asyncDic = {},
            e._loadedUrlTypes = {},
            e.init(),
            e
        }
        return __extends(r, t),
        r.prototype.$getAnalyzerByType = function(e) {
            var t = this.analyzerDic[e];
            if (!t) {
                var r = this.analyzerClassMap[e];
                if (!r) return null;
                t = this.analyzerDic[e] = new r
            }
            return t
        },
        r.prototype.registerAnalyzer = function(e, t) {
            this.analyzerClassMap[e] = t
        },
        r.prototype.$registerVersionController = function(e) {
            this.vcs = e
        },
        r.prototype.init = function() {
            this.vcs = new e.VersionController;
            var t = this.analyzerClassMap;
            t[e.ResourceItem.TYPE_BIN] = e.BinAnalyzer,
            t[e.ResourceItem.TYPE_IMAGE] = e.ImageAnalyzer,
            t[e.ResourceItem.TYPE_TEXT] = e.TextAnalyzer,
            t[e.ResourceItem.TYPE_JSON] = e.JsonAnalyzer,
            t[e.ResourceItem.TYPE_SHEET] = e.SheetAnalyzer,
            t[e.ResourceItem.TYPE_FONT] = e.FontAnalyzer,
            t[e.ResourceItem.TYPE_SOUND] = e.SoundAnalyzer,
            t[e.ResourceItem.TYPE_XML] = e.XMLAnalyzer,
            this.resConfig = new e.ResourceConfig,
            this.resLoader = new e.ResourceLoader,
            this.resLoader.callBack = this.onResourceItemComp,
            this.resLoader.resInstance = this,
            this.resLoader.addEventListener(e.ResourceEvent.GROUP_COMPLETE, this.onGroupComp, this),
            this.resLoader.addEventListener(e.ResourceEvent.GROUP_LOAD_ERROR, this.onGroupError, this)
        },
        r.prototype.loadConfig = function(e, t, r) {
            void 0 === r && (r = "json");
            var i = {
                url: e,
                resourceRoot: t,
                type: r
            };
            this.configItemList.push(i),
            this.callLaterFlag || (egret.callLater(this.startLoadConfig, this), this.callLaterFlag = !0)
        },
        r.prototype.startLoadConfig = function() {
            var t = this;
            this.callLaterFlag = !1;
            var i = this.configItemList;
            this.configItemList = [],
            this.loadingConfigList = i;
            for (var n = i.length,
            o = [], s = 0; n > s; s++) {
                var a = i[s],
                u = new e.ResourceItem(a.url, a.url, a.type);
                o.push(u)
            }
            var c = {
                onSuccess: function(e) {
                    t.resLoader.loadGroup(o, r.GROUP_CONFIG, Number.MAX_VALUE)
                },
                onFail: function(r, i) {
                    e.ResourceEvent.dispatchResourceEvent(t, e.ResourceEvent.CONFIG_LOAD_ERROR)
                }
            };
            this.vcs ? this.vcs.fetchVersion(c) : this.resLoader.loadGroup(o, r.GROUP_CONFIG, Number.MAX_VALUE)
        },
        r.prototype.isGroupLoaded = function(e) {
            return - 1 != this.loadedGroups.indexOf(e)
        },
        r.prototype.getGroupByName = function(e) {
            return this.resConfig.getGroupByName(e)
        },
        r.prototype.loadGroup = function(t, r) {
            if (void 0 === r && (r = 0), -1 != this.loadedGroups.indexOf(t)) return void e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.GROUP_COMPLETE, t);
            if (!this.resLoader.isGroupInLoading(t)) if (this.configComplete) {
                var i = this.resConfig.getGroupByName(t);
                this.resLoader.loadGroup(i, t, r)
            } else this.groupNameList.push({
                name: t,
                priority: r
            })
        },
        r.prototype.createGroup = function(e, t, r) {
            if (void 0 === r && (r = !1), r) {
                var i = this.loadedGroups.indexOf(e); - 1 != i && this.loadedGroups.splice(i, 1)
            }
            return this.resConfig.createGroup(e, t, r)
        },
        r.prototype.onGroupComp = function(t) {
            if (t.groupName == r.GROUP_CONFIG) {
                for (var i = this.loadingConfigList.length,
                n = 0; i > n; n++) {
                    var o = this.loadingConfigList[n],
                    s = this.$getAnalyzerByType(o.type),
                    a = s.getRes(o.url);
                    s.destroyRes(o.url),
                    this.resConfig.parseConfig(a, o.resourceRoot)
                }
                this.configComplete = !0,
                this.loadingConfigList = null,
                e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_COMPLETE),
                this.loadDelayGroups()
            } else this.loadedGroups.push(t.groupName),
            this.dispatchEvent(t)
        },
        r.prototype.loadDelayGroups = function() {
            var e = this.groupNameList;
            this.groupNameList = [];
            for (var t = e.length,
            r = 0; t > r; r++) {
                var i = e[r];
                this.loadGroup(i.name, i.priority)
            }
        },
        r.prototype.onGroupError = function(t) {
            t.groupName == r.GROUP_CONFIG ? (this.loadingConfigList = null, e.ResourceEvent.dispatchResourceEvent(this, e.ResourceEvent.CONFIG_LOAD_ERROR)) : this.dispatchEvent(t)
        },
        r.prototype.hasRes = function(t) {
            var r = this.resConfig.getType(t);
            if ("" == r) {
                var i = e.AnalyzerBase.getStringTail(t);
                if (r = this.resConfig.getType(i), "" == r) return ! 1
            }
            return ! 0
        },
        r.prototype.parseConfig = function(e, t) {
            this.resConfig.parseConfig(e, t),
            this.configComplete || this.loadingConfigList || (this.configComplete = !0, this.loadDelayGroups())
        },
        r.prototype.getRes = function(t) {
            var r = this.resConfig.getType(t);
            if ("" == r) {
                var i = e.AnalyzerBase.getStringPrefix(t);
                if (r = this.resConfig.getType(i), "" == r) return null
            }
            var n = this.$getAnalyzerByType(r);
            return n.getRes(t)
        },
        r.prototype.getResAsync = function(t, r, i) {
            var n = this.resConfig.getType(t),
            o = this.resConfig.getName(t);
            if ("" == n && (o = e.AnalyzerBase.getStringPrefix(t), n = this.resConfig.getType(o), "" == n)) return void egret.$callAsync(r, i);
            var s = this.$getAnalyzerByType(n),
            a = s.getRes(t);
            if (a) return void egret.$callAsync(r, i, a, t);
            var u = {
                key: t,
                compFunc: r,
                thisObject: i
            };
            if (this.asyncDic[o]) this.asyncDic[o].push(u);
            else {
                this.asyncDic[o] = [u];
                var c = this.resConfig.getResourceItem(o);
                this.resLoader.loadItem(c)
            }
        },
        r.prototype.getResByUrl = function(t, r, i, n) {
            if (void 0 === n && (n = ""), !t) return void egret.$callAsync(r, i);
            n || (n = this.getTypeByUrl(t)),
            null != this._loadedUrlTypes[t] && this._loadedUrlTypes[t] != n && egret.$warn(3202),
            this._loadedUrlTypes[t] = n;
            var o = this.$getAnalyzerByType(n),
            s = t,
            a = o.getRes(s);
            if (a) return void egret.$callAsync(r, i, a, t);
            var u = {
                key: s,
                compFunc: r,
                thisObject: i
            };
            if (this.asyncDic[s]) this.asyncDic[s].push(u);
            else {
                this.asyncDic[s] = [u];
                var c = new e.ResourceItem(s, t, n);
                this.resLoader.loadItem(c)
            }
        },
        r.prototype.getTypeByUrl = function(t) {
            var r = t.substr(t.lastIndexOf(".") + 1);
            r && (r = r.toLowerCase());
            var i;
            switch (r) {
            case e.ResourceItem.TYPE_XML:
            case e.ResourceItem.TYPE_JSON:
            case e.ResourceItem.TYPE_SHEET:
                i = r;
                break;
            case "png":
            case "jpg":
            case "gif":
            case "jpeg":
            case "bmp":
                i = e.ResourceItem.TYPE_IMAGE;
                break;
            case "fnt":
                i = e.ResourceItem.TYPE_FONT;
                break;
            case "txt":
                i = e.ResourceItem.TYPE_TEXT;
                break;
            case "mp3":
            case "ogg":
            case "mpeg":
            case "wav":
            case "m4a":
            case "mp4":
            case "aiff":
            case "wma":
            case "mid":
                i = e.ResourceItem.TYPE_SOUND;
                break;
            default:
                i = e.ResourceItem.TYPE_BIN
            }
            return i
        },
        r.prototype.onResourceItemComp = function(e) {
            var t = this.asyncDic[e.name];
            delete this.asyncDic[e.name];
            for (var r = this.$getAnalyzerByType(e.type), i = t.length, n = 0; i > n; n++) {
                var o = t[n],
                s = r.getRes(o.key);
                o.compFunc.call(o.thisObject, s, o.key)
            }
        },
        r.prototype.destroyRes = function(e, t) {
            void 0 === t && (t = !0);
            var r = this.resConfig.getRawGroupByName(e);
            if (r && r.length > 0) {
                var i = this.loadedGroups.indexOf(e); - 1 != i && this.loadedGroups.splice(i, 1);
                for (var n = r.length,
                o = 0; n > o; o++) {
                    var s = r[o];
                    if (!t && this.isResInLoadedGroup(s.name));
                    else {
                        s.loaded = !1;
                        var a = this.$getAnalyzerByType(s.type);
                        a.destroyRes(s.name),
                        this.removeLoadedGroupsByItemName(s.name)
                    }
                }
                return ! 0
            }
            var u = this.resConfig.getType(e);
            if ("" == u) {
                if (u = this._loadedUrlTypes[e], null == u || "" == u) return ! 1;
                delete this._loadedUrlTypes[e];
                var c = this.$getAnalyzerByType(u);
                return c.destroyRes(e),
                !0
            }
            var s = this.resConfig.getRawResourceItem(e);
            s.loaded = !1;
            var a = this.$getAnalyzerByType(u),
            l = a.destroyRes(e);
            return this.removeLoadedGroupsByItemName(s.name),
            l
        },
        r.prototype.removeLoadedGroupsByItemName = function(e) {
            for (var t = this.loadedGroups,
            r = t.length,
            i = 0; r > i; i++) for (var n = this.resConfig.getRawGroupByName(t[i]), o = n.length, s = 0; o > s; s++) {
                var a = n[s];
                if (a.name == e) {
                    t.splice(i, 1),
                    i--,
                    r = t.length;
                    break
                }
            }
        },
        r.prototype.isResInLoadedGroup = function(e) {
            for (var t = this.loadedGroups,
            r = t.length,
            i = 0; r > i; i++) for (var n = this.resConfig.getRawGroupByName(t[i]), o = n.length, s = 0; o > s; s++) {
                var a = n[s];
                if (a.name == e) return ! 0
            }
            return ! 1
        },
        r.prototype.setMaxLoadingThread = function(e) {
            1 > e && (e = 1),
            this.resLoader.thread = e
        },
        r.prototype.setMaxRetryTimes = function(e) {
            e = Math.max(e, 0),
            this.resLoader.maxRetryTimes = e
        },
        r.GROUP_CONFIG = "RES__CONFIG",
        r
    } (egret.EventDispatcher);
    __reflect(_.prototype, "Resource");
    var L = new _
} (RES || (RES = {}));
var RES; !
function(e) {
    var t = function(t) {
        function r() {
            var e = t.call(this) || this;
            return e.sheetMap = {},
            e.recyclerIamge = [],
            e._dataFormat = egret.HttpResponseType.TEXT,
            e
        }
        return __extends(r, t),
        r.prototype.onLoadFinish = function(e) {
            var t = e.target,
            r = this.resItemDic[t.$hashCode];
            delete this.resItemDic[t.hashCode];
            var i = r.item,
            n = r.func;
            if (i.loaded = e.type == egret.Event.COMPLETE, i.loaded) if (t instanceof egret.HttpRequest) {
                i.loaded = !1;
                var o = this.analyzeConfig(i, t.response);
                if (o) return this.loadImage(o, r),
                void this.recycler.push(t)
            } else this.analyzeBitmap(i, t.data);
            t instanceof egret.HttpRequest ? this.recycler.push(t) : this.recyclerIamge.push(t),
            n.call(r.thisObject, i)
        },
        r.prototype.analyzeConfig = function(e, t) {
            var r, i = e.name,
            n = "";
            try {
                var o = t;
                r = JSON.parse(o)
            } catch(s) {
                egret.$warn(1017, e.url, t)
            }
            if (r) if (this.sheetMap[i] = r, r.file) n = this.getRelativePath(e.url, r.file);
            else {
                var a = e.url.split("?"),
                u = a[0].split("/");
                u[u.length - 1] = u[u.length - 1].split(".")[0] + ".png",
                n = "";
                for (var c = 0; c < u.length; c++) n += u[c] + (c < u.length - 1 ? "/": "");
                2 == a.length && (n += a[2])
            }
            return n
        },
        r.prototype.analyzeBitmap = function(e, t) {
            var r = e.name;
            if (!this.fileDic[r] && t) {
                var i = this.sheetMap[r];
                delete this.sheetMap[r];
                var n = e.data && e.data.subkeys ? "": r,
                o = this.parseAnimation(t, i, n);
                this.fileDic[r] = o
            }
        },
        r.prototype.getRelativePath = function(e, t) {
            e = e.split("\\").join("/");
            var r = e.lastIndexOf("/");
            return e = -1 != r ? e.substring(0, r + 1) + t: t
        },
        r.prototype.parseAnimation = function(e, t, r) {
            for (var i, n = Object.keys(t.mc), o = t.mc[n[0]].frames, s = o.length, a = [], u = 0; s > u; u++) {
                i = t.res[o[u].res];
                var c = new egret.Texture;
                c.$bitmapData = e,
                c.$initData(i.x, i.y, i.w, i.h, o[u].x, o[u].y, o[u].sourceW, o[u].sourceH, e.width, e.height)
            }
            return a
        },
        r.prototype.destroyRes = function(e) {
            var t = this.fileDic[e];
            return t ? (delete this.fileDic[e], !0) : !1
        },
        r.prototype.loadImage = function(t, r) {
            var i = this.getImageLoader();
            this.resItemDic[i.hashCode] = r,
            i.load(e.$getVirtualUrl(t))
        },
        r.prototype.getImageLoader = function() {
            var e = this.recyclerIamge.pop();
            return e || (e = new egret.ImageLoader, e.addEventListener(egret.Event.COMPLETE, this.onLoadFinish, this), e.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadFinish, this)),
            e
        },
        r
    } (e.BinAnalyzer);
    e.AnimationAnalyzer = t,
    __reflect(t.prototype, "RES.AnimationAnalyzer")
} (RES || (RES = {}));
var egret; !
function(e) {
    e.$locale_strings = e.$locale_strings || {},
    e.$locale_strings.en_US = e.$locale_strings.en_US || {};
    var t = e.$locale_strings.en_US;
    t[3200] = "RES.createGroup() passed in non-existed key value in configuration: {0}",
    t[3201] = 'RES loaded non-existed or empty resource group:"{0}"',
    t[3202] = "Do not use the different types of ways to load the same material!",
    t[3203] = "Can't find the analyzer of the specified file type:{0}。 Please register the specified analyzer in the initialization of the project first,then start the resource loading process。"
} (egret || (egret = {}));
var egret; !
function(e) {
    e.$locale_strings = e.$locale_strings || {},
    e.$locale_strings.zh_CN = e.$locale_strings.zh_CN || {};
    var t = e.$locale_strings.zh_CN;
    t[3200] = "RES.createGroup()传入了配置中不存在的键值: {0}",
    t[3201] = 'RES加载了不存在或空的资源组:"{0}"',
    t[3202] = "请不要使用不同的类型方式来加载同一个素材！",
    t[3203] = "找不到指定文件类型的解析器:{0}。 请先在项目初始化里注册指定文件类型的解析器，再启动资源加载。"
} (egret || (egret = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
egret; !
function(t) {
    var e = function() {
        function e() {
            t.$error(1014)
        }
        return e.get = function(t) {
            return - 1 > t && (t = -1),
            t > 1 && (t = 1),
            function(e) {
                return 0 == t ? e: 0 > t ? e * (e * -t + 1 + t) : e * ((2 - e) * t + (1 - t))
            }
        },
        e.getPowIn = function(t) {
            return function(e) {
                return Math.pow(e, t)
            }
        },
        e.getPowOut = function(t) {
            return function(e) {
                return 1 - Math.pow(1 - e, t)
            }
        },
        e.getPowInOut = function(t) {
            return function(e) {
                return (e *= 2) < 1 ? .5 * Math.pow(e, t) : 1 - .5 * Math.abs(Math.pow(2 - e, t))
            }
        },
        e.sineIn = function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        e.sineOut = function(t) {
            return Math.sin(t * Math.PI / 2)
        },
        e.sineInOut = function(t) {
            return - .5 * (Math.cos(Math.PI * t) - 1)
        },
        e.getBackIn = function(t) {
            return function(e) {
                return e * e * ((t + 1) * e - t)
            }
        },
        e.getBackOut = function(t) {
            return function(e) {
                return--e * e * ((t + 1) * e + t) + 1
            }
        },
        e.getBackInOut = function(t) {
            return t *= 1.525,
            function(e) {
                return (e *= 2) < 1 ? .5 * (e * e * ((t + 1) * e - t)) : .5 * ((e -= 2) * e * ((t + 1) * e + t) + 2)
            }
        },
        e.circIn = function(t) {
            return - (Math.sqrt(1 - t * t) - 1)
        },
        e.circOut = function(t) {
            return Math.sqrt(1 - --t * t)
        },
        e.circInOut = function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        e.bounceIn = function(t) {
            return 1 - e.bounceOut(1 - t)
        },
        e.bounceOut = function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t: 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        e.bounceInOut = function(t) {
            return.5 > t ? .5 * e.bounceIn(2 * t) : .5 * e.bounceOut(2 * t - 1) + .5
        },
        e.getElasticIn = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var s = e / n * Math.asin(1 / t);
                return - (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e))
            }
        },
        e.getElasticOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                if (0 == i || 1 == i) return i;
                var s = e / n * Math.asin(1 / t);
                return t * Math.pow(2, -10 * i) * Math.sin((i - s) * n / e) + 1
            }
        },
        e.getElasticInOut = function(t, e) {
            var n = 2 * Math.PI;
            return function(i) {
                var s = e / n * Math.asin(1 / t);
                return (i *= 2) < 1 ? -.5 * (t * Math.pow(2, 10 * (i -= 1)) * Math.sin((i - s) * n / e)) : t * Math.pow(2, -10 * (i -= 1)) * Math.sin((i - s) * n / e) * .5 + 1
            }
        },
        e
    } ();
    e.quadIn = e.getPowIn(2),
    e.quadOut = e.getPowOut(2),
    e.quadInOut = e.getPowInOut(2),
    e.cubicIn = e.getPowIn(3),
    e.cubicOut = e.getPowOut(3),
    e.cubicInOut = e.getPowInOut(3),
    e.quartIn = e.getPowIn(4),
    e.quartOut = e.getPowOut(4),
    e.quartInOut = e.getPowInOut(4),
    e.quintIn = e.getPowIn(5),
    e.quintOut = e.getPowOut(5),
    e.quintInOut = e.getPowInOut(5),
    e.backIn = e.getBackIn(1.7),
    e.backOut = e.getBackOut(1.7),
    e.backInOut = e.getBackInOut(1.7),
    e.elasticIn = e.getElasticIn(1, .3),
    e.elasticOut = e.getElasticOut(1, .3),
    e.elasticInOut = e.getElasticInOut(1, .3 * 1.5),
    t.Ease = e,
    __reflect(e.prototype, "egret.Ease")
} (egret || (egret = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
egret; !
function(t) {
    var e = function(e) {
        function n(t, n, i) {
            var s = e.call(this) || this;
            return s._target = null,
            s._useTicks = !1,
            s.ignoreGlobalPause = !1,
            s.loop = !1,
            s.pluginData = null,
            s._steps = null,
            s.paused = !1,
            s.duration = 0,
            s._prevPos = -1,
            s.position = null,
            s._prevPosition = 0,
            s._stepPosition = 0,
            s.passive = !1,
            s.initialize(t, n, i),
            s
        }
        return __extends(n, e),
        n.get = function(t, e, i, s) {
            return void 0 === i && (i = null),
            void 0 === s && (s = !1),
            s && n.removeTweens(t),
            new n(t, e, i)
        },
        n.removeTweens = function(t) {
            if (t.tween_count) {
                for (var e = n._tweens,
                i = e.length - 1; i >= 0; i--) e[i]._target == t && (e[i].paused = !0, e.splice(i, 1));
                t.tween_count = 0
            }
        },
        n.pauseTweens = function(e) {
            if (e.tween_count) for (var n = t.Tween._tweens,
            i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !0)
        },
        n.resumeTweens = function(e) {
            if (e.tween_count) for (var n = t.Tween._tweens,
            i = n.length - 1; i >= 0; i--) n[i]._target == e && (n[i].paused = !1)
        },
        n.tick = function(t, e) {
            void 0 === e && (e = !1);
            var i = t - n._lastTime;
            n._lastTime = t;
            for (var s = n._tweens.concat(), r = s.length - 1; r >= 0; r--) {
                var o = s[r];
                e && !o.ignoreGlobalPause || o.paused || o.$tick(o._useTicks ? 1 : i)
            }
            return ! 1
        },
        n._register = function(e, i) {
            var s = e._target,
            r = n._tweens;
            if (i) s && (s.tween_count = s.tween_count > 0 ? s.tween_count + 1 : 1),
            r.push(e),
            n._inited || (n._lastTime = t.getTimer(), tt.startTick(n.tick), n._inited = !0);
            else {
                s && s.tween_count--;
                for (var o = r.length; o--;) if (r[o] == e) return void r.splice(o, 1)
            }
        },
        n.removeAllTweens = function() {
            for (var t = n._tweens,
            e = 0,
            i = t.length; i > e; e++) {
                var s = t[e];
                s.paused = !0,
                s._target.tween_count = 0
            }
            t.length = 0
        },
        n.prototype.initialize = function(t, e, i) {
            this._target = t,
            e && (this._useTicks = e.useTicks, this.ignoreGlobalPause = e.ignoreGlobalPause, this.loop = e.loop, e.onChange && this.addEventListener("change", e.onChange, e.onChangeObj), e.override && n.removeTweens(t)),
            this.pluginData = i || {},
            this._curQueueProps = {},
            this._initQueueProps = {},
            this._steps = [],
            e && e.paused ? this.paused = !0 : n._register(this, !0),
            e && null != e.position && this.setPosition(e.position, n.NONE)
        },
        n.prototype.setPosition = function(t, e) {
            void 0 === e && (e = 1),
            0 > t && (t = 0);
            var n = t,
            i = !1;
            if (n >= this.duration) if (this.loop) {
                var s = n % this.duration;
                n = n > 0 && 0 === s ? this.duration: s
            } else n = this.duration,
            i = !0;
            if (n == this._prevPos) return i;
            i && this.setPaused(!0);
            var r = this._prevPos;
            if (this.position = this._prevPos = n, this._prevPosition = t, this._target && this._steps.length > 0) {
                for (var o = this._steps.length,
                u = -1,
                p = 0; o > p && !("step" == this._steps[p].type && (u = p, this._steps[p].t <= n && this._steps[p].t + this._steps[p].d >= n)); p++);
                for (var p = 0; o > p; p++) if ("action" == this._steps[p].type) 0 != e && (this._useTicks ? this._runAction(this._steps[p], n, n) : 1 == e && r > n ? (r != this.duration && this._runAction(this._steps[p], r, this.duration), this._runAction(this._steps[p], 0, n, !0)) : this._runAction(this._steps[p], r, n));
                else if ("step" == this._steps[p].type && u == p) {
                    var a = this._steps[u];
                    this._updateTargetProps(a, Math.min((this._stepPosition = n - a.t) / a.d, 1))
                }
            }
            return this.dispatchEventWith("change"),
            i
        },
        n.prototype._runAction = function(t, e, n, i) {
            void 0 === i && (i = !1);
            var s = e,
            r = n;
            e > n && (s = n, r = e);
            var o = t.t; (o == r || o > s && r > o || i && o == e) && t.f.apply(t.o, t.p)
        },
        n.prototype._updateTargetProps = function(t, e) {
            var i, s, r, o, u, p;
            if (t || 1 != e) {
                if (this.passive = !!t.v, this.passive) return;
                t.e && (e = t.e(e, 0, 1, 1)),
                i = t.p0,
                s = t.p1
            } else this.passive = !1,
            i = s = this._curQueueProps;
            for (var a in this._initQueueProps) {
                null == (o = i[a]) && (i[a] = o = this._initQueueProps[a]),
                null == (u = s[a]) && (s[a] = u = o),
                r = o == u || 0 == e || 1 == e || "number" != typeof o ? 1 == e ? u: o: o + (u - o) * e;
                var h = !1;
                if (p = n._plugins[a]) for (var c = 0,
                _ = p.length; _ > c; c++) {
                    var f = p[c].tween(this, a, r, i, s, e, !!t && i == s, !t);
                    f == n.IGNORE ? h = !0 : r = f
                }
                h || (this._target[a] = r)
            }
        },
        n.prototype.setPaused = function(t) {
            return this.paused == t ? this: (this.paused = t, n._register(this, !t), this)
        },
        n.prototype._cloneProps = function(t) {
            var e = {};
            for (var n in t) e[n] = t[n];
            return e
        },
        n.prototype._addStep = function(t) {
            return t.d > 0 && (t.type = "step", this._steps.push(t), t.t = this.duration, this.duration += t.d),
            this
        },
        n.prototype._appendQueueProps = function(t) {
            var e, i, s, r, o;
            for (var u in t) if (void 0 === this._initQueueProps[u]) {
                if (i = this._target[u], e = n._plugins[u]) for (s = 0, r = e.length; r > s; s++) i = e[s].init(this, u, i);
                this._initQueueProps[u] = this._curQueueProps[u] = void 0 === i ? null: i
            } else i = this._curQueueProps[u];
            for (var u in t) {
                if (i = this._curQueueProps[u], e = n._plugins[u]) for (o = o || {},
                s = 0, r = e.length; r > s; s++) e[s].step && e[s].step(this, u, i, t[u], o);
                this._curQueueProps[u] = t[u]
            }
            return o && this._appendQueueProps(o),
            this._curQueueProps
        },
        n.prototype._addAction = function(t) {
            return t.t = this.duration,
            t.type = "action",
            this._steps.push(t),
            this
        },
        n.prototype._set = function(t, e) {
            for (var n in t) e[n] = t[n]
        },
        n.prototype.wait = function(t, e) {
            if (null == t || 0 >= t) return this;
            var n = this._cloneProps(this._curQueueProps);
            return this._addStep({
                d: t,
                p0: n,
                p1: n,
                v: e
            })
        },
        n.prototype.to = function(t, e, n) {
            return void 0 === n && (n = void 0),
            (isNaN(e) || 0 > e) && (e = 0),
            this._addStep({
                d: e || 0,
                p0: this._cloneProps(this._curQueueProps),
                e: n,
                p1: this._cloneProps(this._appendQueueProps(t))
            }),
            this.set(t)
        },
        n.prototype.call = function(t, e, n) {
            return void 0 === e && (e = void 0),
            void 0 === n && (n = void 0),
            this._addAction({
                f: t,
                p: n ? n: [],
                o: e ? e: this._target
            })
        },
        n.prototype.set = function(t, e) {
            return void 0 === e && (e = null),
            this._appendQueueProps(t),
            this._addAction({
                f: this._set,
                o: this,
                p: [t, e ? e: this._target]
            })
        },
        n.prototype.play = function(t) {
            return t || (t = this),
            this.call(t.setPaused, t, [!1])
        },
        n.prototype.pause = function(t) {
            return t || (t = this),
            this.call(t.setPaused, t, [!0])
        },
        n.prototype.$tick = function(t) {
            this.paused || this.setPosition(this._prevPosition + t)
        },
        n
    } (t.EventDispatcher);
    e.NONE = 0,
    e.LOOP = 1,
    e.REVERSE = 2,
    e._tweens = [],
    e.IGNORE = {},
    e._plugins = {},
    e._inited = !1,
    e._lastTime = 0,
    t.Tween = e,
    __reflect(e.prototype, "egret.Tween")
} (egret || (egret = {}));
var tt; !
function(t) {
    function e(t) {
        egret.Capabilities.runtimeType == egret.RuntimeType.WEB ? window.setInterval(function() {
            t(egret.getTimer())
        },
        16) : egret.startTick(t, null)
    }
    t.startTick = e
} (tt || (tt = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
egret; !
function(t) {
    var e; !
    function(e) {
        function n(e) {
            if ("function" == typeof e) return e;
            var n = t.Ease[e];
            return "function" == typeof n ? n: null
        }
        function i(t, e, n, i) {
            var s = t.prototype;
            s.__meta__ = s.__meta__ || {},
            s.__meta__[e] = n,
            i && (s.__defaultProperty__ = e)
        }
        var s = function(t) {
            function e() {
                var e = t.apply(this, arguments) || this;
                return e.name = "",
                e
            }
            return __extends(e, t),
            e
        } (t.EventDispatcher);
        e.BasePath = s,
        __reflect(s.prototype, "egret.tween.BasePath");
        var r = function(t) {
            function e() {
                var e = t.apply(this, arguments) || this;
                return e.props = void 0,
                e.duration = 500,
                e.ease = void 0,
                e
            }
            return __extends(e, t),
            e
        } (s);
        e.To = r,
        __reflect(r.prototype, "egret.tween.To");
        var o = function(t) {
            function e() {
                var e = t.apply(this, arguments) || this;
                return e.duration = 500,
                e.passive = void 0,
                e
            }
            return __extends(e, t),
            e
        } (s);
        e.Wait = o,
        __reflect(o.prototype, "egret.tween.Wait");
        var u = function(t) {
            function e() {
                var e = t.apply(this, arguments) || this;
                return e.props = void 0,
                e
            }
            return __extends(e, t),
            e
        } (s);
        e.Set = u,
        __reflect(u.prototype, "egret.tween.Set");
        var p = function(t) {
            function e() {
                var e = t.apply(this, arguments) || this;
                return e.delta = 0,
                e
            }
            return __extends(e, t),
            e
        } (s);
        e.Tick = p,
        __reflect(p.prototype, "egret.tween.Tick");
        var a = function(e) {
            function i() {
                var t = e.call(this) || this;
                return t.isStop = !1,
                t
            }
            return __extends(i, e),
            Object.defineProperty(i.prototype, "props", {
                get: function() {
                    return this._props
                },
                set: function(t) {
                    this._props = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "target", {
                get: function() {
                    return this._target
                },
                set: function(t) {
                    this._target = t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(i.prototype, "paths", {
                get: function() {
                    return this._paths
                },
                set: function(t) {
                    this._paths = t || []
                },
                enumerable: !0,
                configurable: !0
            }),
            i.prototype.play = function(t) {
                this.tween ? (this.tween.setPaused(!1), this.isStop && void 0 == t && (t = 0, this.isStop = !1), void 0 !== t && null !== t && this.tween.setPosition(t)) : this.createTween(t)
            },
            i.prototype.pause = function() {
                this.tween && this.tween.setPaused(!0)
            },
            i.prototype.stop = function() {
                this.pause(),
                this.isStop = !0
            },
            i.prototype.createTween = function(e) {
                this.tween = t.Tween.get(this._target, this._props),
                this._paths && this.applyPaths(),
                void 0 !== e && null !== e && this.tween.setPosition(e)
            },
            i.prototype.applyPaths = function() {
                for (var t = 0; t < this._paths.length; t++) {
                    var e = this._paths[t];
                    this.applyPath(e)
                }
            },
            i.prototype.applyPath = function(t) {
                var e = this;
                t instanceof r ? this.tween.to(t.props, t.duration, n(t.ease)) : t instanceof o ? this.tween.wait(t.duration, t.passive) : t instanceof u ? this.tween.set(t.props) : t instanceof p && this.tween.$tick(t.delta),
                this.tween.call(function() {
                    return e.pathComplete(t)
                })
            },
            i.prototype.pathComplete = function(t) {
                t.dispatchEventWith("complete"),
                this.dispatchEventWith("pathComplete", !1, t);
                var e = this._paths.indexOf(t);
                e >= 0 && e === this._paths.length - 1 && this.dispatchEventWith("complete")
            },
            i
        } (t.EventDispatcher);
        e.TweenItem = a,
        __reflect(a.prototype, "egret.tween.TweenItem"),
        i(a, "paths", "Array", !0);
        var h = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.completeCount = 0,
                e
            }
            return __extends(e, t),
            Object.defineProperty(e.prototype, "items", {
                get: function() {
                    return this._items
                },
                set: function(t) {
                    this.completeCount = 0,
                    this.registerEvent(!1),
                    this._items = t,
                    this.registerEvent(!0)
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.registerEvent = function(t) {
                var e = this;
                this._items && this._items.forEach(function(n) {
                    t ? n.addEventListener("complete", e.itemComplete, e) : n.removeEventListener("complete", e.itemComplete, e)
                })
            },
            e.prototype.play = function(t) {
                if (this._items) for (var e = 0; e < this._items.length; e++) {
                    var n = this._items[e];
                    n.play(t)
                }
            },
            e.prototype.pause = function() {
                if (this._items) for (var t = 0; t < this._items.length; t++) {
                    var e = this._items[t];
                    e.pause()
                }
            },
            e.prototype.stop = function() {
                if (this._items) for (var t = 0; t < this._items.length; t++) {
                    var e = this._items[t];
                    e.stop()
                }
            },
            e.prototype.itemComplete = function(t) {
                var e = t.currentTarget;
                this.completeCount++,
                this.dispatchEventWith("itemComplete", !1, e),
                this.completeCount === this.items.length && (this.dispatchEventWith("complete"), this.completeCount = 0)
            },
            e
        } (t.EventDispatcher);
        e.TweenGroup = h,
        __reflect(h.prototype, "egret.tween.TweenGroup"),
        i(h, "items", "Array", !0)
    } (e = t.tween || (t.tween = {}))
} (egret || (egret = {}));
"use strict";
var __extends = this && this.__extends ||
function() {
    var t = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array &&
    function(t, e) {
        t.__proto__ = e
    } ||
    function(t, e) {
        for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a])
    };
    return function(e, a) {
        function i() {
            this.constructor = e
        }
        t(e, a),
        e.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype, new i)
    }
} (),
dragonBones; !
function(t) {} (dragonBones || (dragonBones = {}));
var dragonBones;
if (function(t) {
    var e = function() {
        function e(a) {
            this._clock = new t.WorldClock,
            this._events = [],
            this._objects = [],
            this._eventManager = null,
            this._eventManager = a,
            console.info("DragonBones: " + e.VERSION + "\nWebsite: http://dragonbones.com/\nSource and Demo: https://github.com/DragonBones/")
        }
        return e.prototype.advanceTime = function(e) {
            if (this._objects.length > 0) {
                for (var a = 0,
                i = this._objects; a < i.length; a++) {
                    var r = i[a];
                    r.returnToPool()
                }
                this._objects.length = 0
            }
            if (this._clock.advanceTime(e), this._events.length > 0) {
                for (var n = 0; n < this._events.length; ++n) {
                    var s = this._events[n],
                    o = s.armature;
                    null !== o._armatureData && (o.eventDispatcher.dispatchDBEvent(s.type, s), s.type === t.EventObject.SOUND_EVENT && this._eventManager.dispatchDBEvent(s.type, s)),
                    this.bufferObject(s)
                }
                this._events.length = 0
            }
        },
        e.prototype.bufferEvent = function(t) {
            this._events.indexOf(t) < 0 && this._events.push(t)
        },
        e.prototype.bufferObject = function(t) {
            this._objects.indexOf(t) < 0 && this._objects.push(t)
        },
        Object.defineProperty(e.prototype, "clock", {
            get: function() {
                return this._clock
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "eventManager", {
            get: function() {
                return this._eventManager
            },
            enumerable: !0,
            configurable: !0
        }),
        e.VERSION = "5.6.300",
        e.yDown = !0,
        e.debug = !1,
        e.debugDraw = !1,
        e.webAssembly = !1,
        e
    } ();
    t.DragonBones = e
} (dragonBones || (dragonBones = {})), "undefined" == typeof global) var global = window;
console.warn || (console.warn = function() {}),
console.assert || (console.assert = function() {}),
Date.now || (Date.now = function() {
    return (new Date).getTime()
});
var __extends = function(t, e) {
    function a() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    a.prototype = e.prototype,
    t.prototype = new a
},
dragonBones; !
function(t) {
    var e = function() {
        function t() {
            this.hashCode = t._hashCode++,
            this._isInPool = !1
        }
        return t._returnObject = function(e) {
            var a = String(e.constructor),
            i = a in t._maxCountMap ? t._maxCountMap[a] : t._defaultMaxCount,
            r = t._poolsMap[a] = t._poolsMap[a] || [];
            r.length < i && (e._isInPool ? console.warn("The object is already in the pool.") : (e._isInPool = !0, r.push(e)))
        },
        t.toString = function() {
            throw new Error
        },
        t.setMaxCount = function(e, a) {
            if ((0 > a || a !== a) && (a = 0), null !== e) {
                var i = String(e),
                r = i in t._poolsMap ? t._poolsMap[i] : null;
                null !== r && r.length > a && (r.length = a),
                t._maxCountMap[i] = a
            } else {
                t._defaultMaxCount = a;
                for (var i in t._poolsMap) {
                    var r = t._poolsMap[i];
                    r.length > a && (r.length = a),
                    i in t._maxCountMap && (t._maxCountMap[i] = a)
                }
            }
        },
        t.clearPool = function(e) {
            if (void 0 === e && (e = null), null !== e) {
                var a = String(e),
                i = a in t._poolsMap ? t._poolsMap[a] : null;
                null !== i && i.length > 0 && (i.length = 0)
            } else for (var r in t._poolsMap) {
                var i = t._poolsMap[r];
                i.length = 0
            }
        },
        t.borrowObject = function(e) {
            var a = String(e),
            i = a in t._poolsMap ? t._poolsMap[a] : null;
            if (null !== i && i.length > 0) {
                var r = i.pop();
                return r._isInPool = !1,
                r
            }
            var n = new e;
            return n._onClear(),
            n
        },
        t.prototype.returnToPool = function() {
            this._onClear(),
            t._returnObject(this)
        },
        t._hashCode = 0,
        t._defaultMaxCount = 3e3,
        t._maxCountMap = {},
        t._poolsMap = {},
        t
    } ();
    t.BaseObject = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function t(t, e, a, i, r, n) {
            void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === a && (a = 0),
            void 0 === i && (i = 1),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            this.a = t,
            this.b = e,
            this.c = a,
            this.d = i,
            this.tx = r,
            this.ty = n
        }
        return t.prototype.toString = function() {
            return "[object dragonBones.Matrix] a:" + this.a + " b:" + this.b + " c:" + this.c + " d:" + this.d + " tx:" + this.tx + " ty:" + this.ty
        },
        t.prototype.copyFrom = function(t) {
            return this.a = t.a,
            this.b = t.b,
            this.c = t.c,
            this.d = t.d,
            this.tx = t.tx,
            this.ty = t.ty,
            this
        },
        t.prototype.copyFromArray = function(t, e) {
            return void 0 === e && (e = 0),
            this.a = t[e],
            this.b = t[e + 1],
            this.c = t[e + 2],
            this.d = t[e + 3],
            this.tx = t[e + 4],
            this.ty = t[e + 5],
            this
        },
        t.prototype.identity = function() {
            return this.a = this.d = 1,
            this.b = this.c = 0,
            this.tx = this.ty = 0,
            this
        },
        t.prototype.concat = function(t) {
            var e = this.a * t.a,
            a = 0,
            i = 0,
            r = this.d * t.d,
            n = this.tx * t.a + t.tx,
            s = this.ty * t.d + t.ty;
            return (0 !== this.b || 0 !== this.c) && (e += this.b * t.c, a += this.b * t.d, i += this.c * t.a, r += this.c * t.b),
            (0 !== t.b || 0 !== t.c) && (a += this.a * t.b, i += this.d * t.c, n += this.ty * t.c, s += this.tx * t.b),
            this.a = e,
            this.b = a,
            this.c = i,
            this.d = r,
            this.tx = n,
            this.ty = s,
            this
        },
        t.prototype.invert = function() {
            var t = this.a,
            e = this.b,
            a = this.c,
            i = this.d,
            r = this.tx,
            n = this.ty;
            if (0 === e && 0 === a) return this.b = this.c = 0,
            0 === t || 0 === i ? this.a = this.b = this.tx = this.ty = 0 : (t = this.a = 1 / t, i = this.d = 1 / i, this.tx = -t * r, this.ty = -i * n),
            this;
            var s = t * i - e * a;
            if (0 === s) return this.a = this.d = 1,
            this.b = this.c = 0,
            this.tx = this.ty = 0,
            this;
            s = 1 / s;
            var o = this.a = i * s;
            return e = this.b = -e * s,
            a = this.c = -a * s,
            i = this.d = t * s,
            this.tx = -(o * r + a * n),
            this.ty = -(e * r + i * n),
            this
        },
        t.prototype.transformPoint = function(t, e, a, i) {
            void 0 === i && (i = !1),
            a.x = this.a * t + this.c * e,
            a.y = this.b * t + this.d * e,
            i || (a.x += this.tx, a.y += this.ty)
        },
        t.prototype.transformRectangle = function(t, e) {
            void 0 === e && (e = !1);
            var a = this.a,
            i = this.b,
            r = this.c,
            n = this.d,
            s = e ? 0 : this.tx,
            o = e ? 0 : this.ty,
            l = t.x,
            h = t.y,
            u = l + t.width,
            _ = h + t.height,
            f = a * l + r * h + s,
            c = i * l + n * h + o,
            p = a * u + r * h + s,
            m = i * u + n * h + o,
            d = a * u + r * _ + s,
            y = i * u + n * _ + o,
            g = a * l + r * _ + s,
            v = i * l + n * _ + o,
            b = 0;
            f > p && (b = f, f = p, p = b),
            d > g && (b = d, d = g, g = b),
            t.x = Math.floor(d > f ? f: d),
            t.width = Math.ceil((p > g ? p: g) - t.x),
            c > m && (b = c, c = m, m = b),
            y > v && (b = y, y = v, v = b),
            t.y = Math.floor(y > c ? c: y),
            t.height = Math.ceil((m > v ? m: v) - t.y)
        },
        t
    } ();
    t.Matrix = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function t(t, e, a, i, r, n) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === a && (a = 0),
            void 0 === i && (i = 0),
            void 0 === r && (r = 1),
            void 0 === n && (n = 1),
            this.x = t,
            this.y = e,
            this.skew = a,
            this.rotation = i,
            this.scaleX = r,
            this.scaleY = n
        }
        return t.normalizeRadian = function(t) {
            return t = (t + Math.PI) % (2 * Math.PI),
            t += t > 0 ? -Math.PI: Math.PI
        },
        t.prototype.toString = function() {
            return "[object dragonBones.Transform] x:" + this.x + " y:" + this.y + " skewX:" + 180 * this.skew / Math.PI + " skewY:" + 180 * this.rotation / Math.PI + " scaleX:" + this.scaleX + " scaleY:" + this.scaleY
        },
        t.prototype.copyFrom = function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.skew = t.skew,
            this.rotation = t.rotation,
            this.scaleX = t.scaleX,
            this.scaleY = t.scaleY,
            this
        },
        t.prototype.identity = function() {
            return this.x = this.y = 0,
            this.skew = this.rotation = 0,
            this.scaleX = this.scaleY = 1,
            this
        },
        t.prototype.add = function(t) {
            return this.x += t.x,
            this.y += t.y,
            this.skew += t.skew,
            this.rotation += t.rotation,
            this.scaleX *= t.scaleX,
            this.scaleY *= t.scaleY,
            this
        },
        t.prototype.minus = function(t) {
            return this.x -= t.x,
            this.y -= t.y,
            this.skew -= t.skew,
            this.rotation -= t.rotation,
            this.scaleX /= t.scaleX,
            this.scaleY /= t.scaleY,
            this
        },
        t.prototype.fromMatrix = function(e) {
            var a = this.scaleX,
            i = this.scaleY,
            r = t.PI_Q;
            this.x = e.tx,
            this.y = e.ty,
            this.rotation = Math.atan(e.b / e.a);
            var n = Math.atan( - e.c / e.d);
            return this.scaleX = this.rotation > -r && this.rotation < r ? e.a / Math.cos(this.rotation) : e.b / Math.sin(this.rotation),
            this.scaleY = n > -r && r > n ? e.d / Math.cos(n) : -e.c / Math.sin(n),
            a >= 0 && this.scaleX < 0 && (this.scaleX = -this.scaleX, this.rotation = this.rotation - Math.PI),
            i >= 0 && this.scaleY < 0 && (this.scaleY = -this.scaleY, n -= Math.PI),
            this.skew = n - this.rotation,
            this
        },
        t.prototype.toMatrix = function(t) {
            return 0 === this.rotation ? (t.a = 1, t.b = 0) : (t.a = Math.cos(this.rotation), t.b = Math.sin(this.rotation)),
            0 === this.skew ? (t.c = -t.b, t.d = t.a) : (t.c = -Math.sin(this.skew + this.rotation), t.d = Math.cos(this.skew + this.rotation)),
            1 !== this.scaleX && (t.a *= this.scaleX, t.b *= this.scaleX),
            1 !== this.scaleY && (t.c *= this.scaleY, t.d *= this.scaleY),
            t.tx = this.x,
            t.ty = this.y,
            this
        },
        t.PI = Math.PI,
        t.PI_D = 2 * Math.PI,
        t.PI_H = Math.PI / 2,
        t.PI_Q = Math.PI / 4,
        t.RAD_DEG = 180 / Math.PI,
        t.DEG_RAD = Math.PI / 180,
        t
    } ();
    t.Transform = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function t(t, e, a, i, r, n, s, o) {
            void 0 === t && (t = 1),
            void 0 === e && (e = 1),
            void 0 === a && (a = 1),
            void 0 === i && (i = 1),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            void 0 === s && (s = 0),
            void 0 === o && (o = 0),
            this.alphaMultiplier = t,
            this.redMultiplier = e,
            this.greenMultiplier = a,
            this.blueMultiplier = i,
            this.alphaOffset = r,
            this.redOffset = n,
            this.greenOffset = s,
            this.blueOffset = o
        }
        return t.prototype.copyFrom = function(t) {
            this.alphaMultiplier = t.alphaMultiplier,
            this.redMultiplier = t.redMultiplier,
            this.greenMultiplier = t.greenMultiplier,
            this.blueMultiplier = t.blueMultiplier,
            this.alphaOffset = t.alphaOffset,
            this.redOffset = t.redOffset,
            this.greenOffset = t.greenOffset,
            this.blueOffset = t.blueOffset
        },
        t.prototype.identity = function() {
            this.alphaMultiplier = this.redMultiplier = this.greenMultiplier = this.blueMultiplier = 1,
            this.alphaOffset = this.redOffset = this.greenOffset = this.blueOffset = 0
        },
        t
    } ();
    t.ColorTransform = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function t(t, e) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            this.x = t,
            this.y = e
        }
        return t.prototype.copyFrom = function(t) {
            this.x = t.x,
            this.y = t.y
        },
        t.prototype.clear = function() {
            this.x = this.y = 0
        },
        t
    } ();
    t.Point = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function t(t, e, a, i) {
            void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === a && (a = 0),
            void 0 === i && (i = 0),
            this.x = t,
            this.y = e,
            this.width = a,
            this.height = i
        }
        return t.prototype.copyFrom = function(t) {
            this.x = t.x,
            this.y = t.y,
            this.width = t.width,
            this.height = t.height
        },
        t.prototype.clear = function() {
            this.x = this.y = 0,
            this.width = this.height = 0
        },
        t
    } ();
    t.Rectangle = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ints = [],
            e.floats = [],
            e.strings = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.UserData]"
        },
        e.prototype._onClear = function() {
            this.ints.length = 0,
            this.floats.length = 0,
            this.strings.length = 0
        },
        e.prototype.addInt = function(t) {
            this.ints.push(t)
        },
        e.prototype.addFloat = function(t) {
            this.floats.push(t)
        },
        e.prototype.addString = function(t) {
            this.strings.push(t)
        },
        e.prototype.getInt = function(t) {
            return void 0 === t && (t = 0),
            t >= 0 && t < this.ints.length ? this.ints[t] : 0
        },
        e.prototype.getFloat = function(t) {
            return void 0 === t && (t = 0),
            t >= 0 && t < this.floats.length ? this.floats[t] : 0
        },
        e.prototype.getString = function(t) {
            return void 0 === t && (t = 0),
            t >= 0 && t < this.strings.length ? this.strings[t] : ""
        },
        e
    } (t.BaseObject);
    t.UserData = e;
    var a = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.data = null,
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.ActionData]"
        },
        e.prototype._onClear = function() {
            null !== this.data && this.data.returnToPool(),
            this.type = 0,
            this.name = "",
            this.bone = null,
            this.slot = null,
            this.data = null
        },
        e
    } (t.BaseObject);
    t.ActionData = a
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.frameIndices = [],
            e.cachedFrames = [],
            e.armatureNames = [],
            e.armatures = {},
            e.userData = null,
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.DragonBonesData]"
        },
        e.prototype._onClear = function() {
            for (var t in this.armatures) this.armatures[t].returnToPool(),
            delete this.armatures[t];
            null !== this.userData && this.userData.returnToPool(),
            this.autoSearch = !1,
            this.frameRate = 0,
            this.version = "",
            this.name = "",
            this.stage = null,
            this.frameIndices.length = 0,
            this.cachedFrames.length = 0,
            this.armatureNames.length = 0,
            this.binary = null,
            this.intArray = null,
            this.floatArray = null,
            this.frameIntArray = null,
            this.frameFloatArray = null,
            this.frameArray = null,
            this.timelineArray = null,
            this.userData = null
        },
        e.prototype.addArmature = function(t) {
            return t.name in this.armatures ? void console.warn("Same armature: " + t.name) : (t.parent = this, this.armatures[t.name] = t, void this.armatureNames.push(t.name))
        },
        e.prototype.getArmature = function(t) {
            return t in this.armatures ? this.armatures[t] : null
        },
        e.prototype.dispose = function() {
            console.warn("已废弃"),
            this.returnToPool()
        },
        e
    } (t.BaseObject);
    t.DragonBonesData = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.aabb = new t.Rectangle,
            a.animationNames = [],
            a.sortedBones = [],
            a.sortedSlots = [],
            a.defaultActions = [],
            a.actions = [],
            a.bones = {},
            a.slots = {},
            a.constraints = {},
            a.skins = {},
            a.animations = {},
            a.canvas = null,
            a.userData = null,
            a
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.ArmatureData]"
        },
        a.prototype._onClear = function() {
            for (var t = 0,
            e = this.defaultActions; t < e.length; t++) {
                var a = e[t];
                a.returnToPool()
            }
            for (var i = 0,
            r = this.actions; i < r.length; i++) {
                var a = r[i];
                a.returnToPool()
            }
            for (var n in this.bones) this.bones[n].returnToPool(),
            delete this.bones[n];
            for (var n in this.slots) this.slots[n].returnToPool(),
            delete this.slots[n];
            for (var n in this.constraints) this.constraints[n].returnToPool(),
            delete this.constraints[n];
            for (var n in this.skins) this.skins[n].returnToPool(),
            delete this.skins[n];
            for (var n in this.animations) this.animations[n].returnToPool(),
            delete this.animations[n];
            null !== this.canvas && this.canvas.returnToPool(),
            null !== this.userData && this.userData.returnToPool(),
            this.type = 0,
            this.frameRate = 0,
            this.cacheFrameRate = 0,
            this.scale = 1,
            this.name = "",
            this.aabb.clear(),
            this.animationNames.length = 0,
            this.sortedBones.length = 0,
            this.sortedSlots.length = 0,
            this.defaultActions.length = 0,
            this.actions.length = 0,
            this.defaultSkin = null,
            this.defaultAnimation = null,
            this.canvas = null,
            this.userData = null,
            this.parent = null
        },
        a.prototype.sortBones = function() {
            var t = this.sortedBones.length;
            if (! (0 >= t)) {
                var e = this.sortedBones.concat(),
                a = 0,
                i = 0;
                for (this.sortedBones.length = 0; t > i;) {
                    var r = e[a++];
                    if (a >= t && (a = 0), !(this.sortedBones.indexOf(r) >= 0)) {
                        var n = !1;
                        for (var s in this.constraints) {
                            var o = this.constraints[s];
                            if (o.root === r && this.sortedBones.indexOf(o.target) < 0) {
                                n = !0;
                                break
                            }
                        }
                        n || null !== r.parent && this.sortedBones.indexOf(r.parent) < 0 || (this.sortedBones.push(r), i++)
                    }
                }
            }
        },
        a.prototype.cacheFrames = function(t) {
            if (! (this.cacheFrameRate > 0)) {
                this.cacheFrameRate = t;
                for (var e in this.animations) this.animations[e].cacheFrames(this.cacheFrameRate)
            }
        },
        a.prototype.setCacheFrame = function(t, e) {
            var a = this.parent.cachedFrames,
            i = a.length;
            return a.length += 10,
            a[i] = t.a,
            a[i + 1] = t.b,
            a[i + 2] = t.c,
            a[i + 3] = t.d,
            a[i + 4] = t.tx,
            a[i + 5] = t.ty,
            a[i + 6] = e.rotation,
            a[i + 7] = e.skew,
            a[i + 8] = e.scaleX,
            a[i + 9] = e.scaleY,
            i
        },
        a.prototype.getCacheFrame = function(t, e, a) {
            var i = this.parent.cachedFrames;
            t.a = i[a],
            t.b = i[a + 1],
            t.c = i[a + 2],
            t.d = i[a + 3],
            t.tx = i[a + 4],
            t.ty = i[a + 5],
            e.rotation = i[a + 6],
            e.skew = i[a + 7],
            e.scaleX = i[a + 8],
            e.scaleY = i[a + 9],
            e.x = t.tx,
            e.y = t.ty
        },
        a.prototype.addBone = function(t) {
            return t.name in this.bones ? void console.warn("Same bone: " + t.name) : (this.bones[t.name] = t, void this.sortedBones.push(t))
        },
        a.prototype.addSlot = function(t) {
            return t.name in this.slots ? void console.warn("Same slot: " + t.name) : (this.slots[t.name] = t, void this.sortedSlots.push(t))
        },
        a.prototype.addConstraint = function(t) {
            return t.name in this.constraints ? void console.warn("Same constraint: " + t.name) : void(this.constraints[t.name] = t)
        },
        a.prototype.addSkin = function(t) {
            return t.name in this.skins ? void console.warn("Same skin: " + t.name) : (t.parent = this, this.skins[t.name] = t, null === this.defaultSkin && (this.defaultSkin = t), void("default" === t.name && (this.defaultSkin = t)))
        },
        a.prototype.addAnimation = function(t) {
            return t.name in this.animations ? void console.warn("Same animation: " + t.name) : (t.parent = this, this.animations[t.name] = t, this.animationNames.push(t.name), void(null === this.defaultAnimation && (this.defaultAnimation = t)))
        },
        a.prototype.addAction = function(t, e) {
            e ? this.defaultActions.push(t) : this.actions.push(t)
        },
        a.prototype.getBone = function(t) {
            return t in this.bones ? this.bones[t] : null
        },
        a.prototype.getSlot = function(t) {
            return t in this.slots ? this.slots[t] : null
        },
        a.prototype.getConstraint = function(t) {
            return t in this.constraints ? this.constraints[t] : null
        },
        a.prototype.getSkin = function(t) {
            return t in this.skins ? this.skins[t] : null
        },
        a.prototype.getMesh = function(t, e, a) {
            var i = this.getSkin(t);
            return null === i ? null: i.getDisplay(e, a)
        },
        a.prototype.getAnimation = function(t) {
            return t in this.animations ? this.animations[t] : null
        },
        a
    } (t.BaseObject);
    t.ArmatureData = e;
    var a = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.transform = new t.Transform,
            a.userData = null,
            a
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.BoneData]"
        },
        a.prototype._onClear = function() {
            null !== this.userData && this.userData.returnToPool(),
            this.inheritTranslation = !1,
            this.inheritRotation = !1,
            this.inheritScale = !1,
            this.inheritReflection = !1,
            this.type = 0,
            this.length = 0,
            this.name = "",
            this.transform.identity(),
            this.userData = null,
            this.parent = null
        },
        a
    } (t.BaseObject);
    t.BoneData = a;
    var i = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.vertices = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.SurfaceData]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.type = 1,
            this.segmentX = 0,
            this.segmentY = 0,
            this.vertices.length = 0
        },
        e
    } (a);
    t.SurfaceData = i;
    var r = function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.color = null,
            t.userData = null,
            t
        }
        return __extends(a, e),
        a.createColor = function() {
            return new t.ColorTransform
        },
        a.toString = function() {
            return "[class dragonBones.SlotData]"
        },
        a.prototype._onClear = function() {
            null !== this.userData && this.userData.returnToPool(),
            this.blendMode = 0,
            this.displayIndex = 0,
            this.zOrder = 0,
            this.name = "",
            this.color = null,
            this.userData = null,
            this.parent = null
        },
        a.DEFAULT_COLOR = new t.ColorTransform,
        a
    } (t.BaseObject);
    t.SlotData = r
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.CanvasData]"
        },
        e.prototype._onClear = function() {
            this.hasBackground = !1,
            this.color = 0,
            this.x = 0,
            this.y = 0,
            this.width = 0,
            this.height = 0
        },
        e
    } (t.BaseObject);
    t.CanvasData = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.displays = {},
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.SkinData]"
        },
        e.prototype._onClear = function() {
            for (var t in this.displays) {
                for (var e = this.displays[t], a = 0, i = e; a < i.length; a++) {
                    var r = i[a];
                    null !== r && r.returnToPool()
                }
                delete this.displays[t]
            }
            this.name = "",
            this.parent = null
        },
        e.prototype.addDisplay = function(t, e) {
            t in this.displays || (this.displays[t] = []),
            null !== e && (e.parent = this);
            var a = this.displays[t];
            a.push(e)
        },
        e.prototype.getDisplay = function(t, e) {
            var a = this.getDisplays(t);
            if (null !== a) for (var i = 0,
            r = a; i < r.length; i++) {
                var n = r[i];
                if (null !== n && n.name === e) return n
            }
            return null
        },
        e.prototype.getDisplays = function(t) {
            return t in this.displays ? this.displays[t] : null
        },
        e
    } (t.BaseObject);
    t.SkinData = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            this.order = 0,
            this.name = "",
            this.type = 0,
            this.target = null,
            this.root = null,
            this.bone = null
        },
        e
    } (t.BaseObject);
    t.ConstraintData = e;
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.IKConstraintData]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.scaleEnabled = !1,
            this.bendPositive = !1,
            this.weight = 1
        },
        e
    } (e);
    t.IKConstraintData = a;
    var i = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.bones = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.PathConstraintData]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.pathSlot = null,
            this.pathDisplayData = null,
            this.bones.length = 0,
            this.positionMode = 0,
            this.spacingMode = 1,
            this.rotateMode = 1,
            this.position = 0,
            this.spacing = 0,
            this.rotateOffset = 0,
            this.rotateMix = 0,
            this.translateMix = 0
        },
        e.prototype.AddBone = function(t) {
            this.bones.push(t)
        },
        e
    } (e);
    t.PathConstraintData = i
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function t() {
            this.weight = null
        }
        return t.prototype.clear = function() {
            this.isShared || null === this.weight || this.weight.returnToPool(),
            this.isShared = !1,
            this.inheritDeform = !1,
            this.offset = 0,
            this.data = null,
            this.weight = null
        },
        t.prototype.shareFrom = function(t) {
            this.isShared = !0,
            this.offset = t.offset,
            this.weight = t.weight
        },
        t
    } ();
    t.VerticesData = e;
    var a = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.transform = new t.Transform,
            a
        }
        return __extends(a, e),
        a.prototype._onClear = function() {
            this.name = "",
            this.path = "",
            this.transform.identity(),
            this.parent = null
        },
        a
    } (t.BaseObject);
    t.DisplayData = a;
    var i = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.pivot = new t.Point,
            a
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.ImageDisplayData]"
        },
        a.prototype._onClear = function() {
            e.prototype._onClear.call(this),
            this.type = 0,
            this.pivot.clear(),
            this.texture = null
        },
        a
    } (a);
    t.ImageDisplayData = i;
    var r = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.actions = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.ArmatureDisplayData]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this);
            for (var e = 0,
            a = this.actions; e < a.length; e++) {
                var i = a[e];
                i.returnToPool()
            }
            this.type = 1,
            this.inheritAnimation = !1,
            this.actions.length = 0,
            this.armature = null
        },
        e.prototype.addAction = function(t) {
            this.actions.push(t)
        },
        e
    } (a);
    t.ArmatureDisplayData = r;
    var n = function(t) {
        function a() {
            var a = null !== t && t.apply(this, arguments) || this;
            return a.vertices = new e,
            a
        }
        return __extends(a, t),
        a.toString = function() {
            return "[class dragonBones.MeshDisplayData]"
        },
        a.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.type = 2,
            this.vertices.clear(),
            this.texture = null
        },
        a
    } (a);
    t.MeshDisplayData = n;
    var s = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.boundingBox = null,
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.BoundingBoxDisplayData]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            null !== this.boundingBox && this.boundingBox.returnToPool(),
            this.type = 3,
            this.boundingBox = null
        },
        e
    } (a);
    t.BoundingBoxDisplayData = s;
    var o = function(t) {
        function a() {
            var a = null !== t && t.apply(this, arguments) || this;
            return a.vertices = new e,
            a.curveLengths = [],
            a
        }
        return __extends(a, t),
        a.toString = function() {
            return "[class dragonBones.PathDisplayData]"
        },
        a.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.type = 4,
            this.closed = !1,
            this.constantSpeed = !1,
            this.vertices.clear(),
            this.curveLengths.length = 0
        },
        a
    } (a);
    t.PathDisplayData = o;
    var l = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.bones = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.WeightData]"
        },
        e.prototype._onClear = function() {
            this.count = 0,
            this.offset = 0,
            this.bones.length = 0
        },
        e.prototype.addBone = function(t) {
            this.bones.push(t)
        },
        e
    } (t.BaseObject);
    t.WeightData = l
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            this.color = 0,
            this.width = 0,
            this.height = 0
        },
        e
    } (t.BaseObject);
    t.BoundingBoxData = e;
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.RectangleBoundingBoxData]"
        },
        e._computeOutCode = function(t, e, a, i, r, n) {
            var s = 0;
            return a > t ? s |= 1 : t > r && (s |= 2),
            i > e ? s |= 4 : e > n && (s |= 8),
            s
        },
        e.rectangleIntersectsSegment = function(t, a, i, r, n, s, o, l, h, u, _) {
            void 0 === h && (h = null),
            void 0 === u && (u = null),
            void 0 === _ && (_ = null);
            var f = t > n && o > t && a > s && l > a,
            c = i > n && o > i && r > s && l > r;
            if (f && c) return - 1;
            for (var p = 0,
            m = e._computeOutCode(t, a, n, s, o, l), d = e._computeOutCode(i, r, n, s, o, l);;) {
                if (0 === (m | d)) {
                    p = 2;
                    break
                }
                if (0 !== (m & d)) break;
                var y = 0,
                g = 0,
                v = 0,
                b = 0 !== m ? m: d;
                0 !== (4 & b) ? (y = t + (i - t) * (s - a) / (r - a), g = s, null !== _ && (v = .5 * -Math.PI)) : 0 !== (8 & b) ? (y = t + (i - t) * (l - a) / (r - a), g = l, null !== _ && (v = .5 * Math.PI)) : 0 !== (2 & b) ? (g = a + (r - a) * (o - t) / (i - t), y = o, null !== _ && (v = 0)) : 0 !== (1 & b) && (g = a + (r - a) * (n - t) / (i - t), y = n, null !== _ && (v = Math.PI)),
                b === m ? (t = y, a = g, m = e._computeOutCode(t, a, n, s, o, l), null !== _ && (_.x = v)) : (i = y, r = g, d = e._computeOutCode(i, r, n, s, o, l), null !== _ && (_.y = v))
            }
            return p && (f ? (p = 2, null !== h && (h.x = i, h.y = r), null !== u && (u.x = i, u.y = i), null !== _ && (_.x = _.y + Math.PI)) : c ? (p = 1, null !== h && (h.x = t, h.y = a), null !== u && (u.x = t, u.y = a), null !== _ && (_.y = _.x + Math.PI)) : (p = 3, null !== h && (h.x = t, h.y = a), null !== u && (u.x = i, u.y = r))),
            p
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.type = 0
        },
        e.prototype.containsPoint = function(t, e) {
            var a = .5 * this.width;
            if (t >= -a && a >= t) {
                var i = .5 * this.height;
                if (e >= -i && i >= e) return ! 0
            }
            return ! 1
        },
        e.prototype.intersectsSegment = function(t, a, i, r, n, s, o) {
            void 0 === n && (n = null),
            void 0 === s && (s = null),
            void 0 === o && (o = null);
            var l = .5 * this.width,
            h = .5 * this.height,
            u = e.rectangleIntersectsSegment(t, a, i, r, -l, -h, l, h, n, s, o);
            return u
        },
        e
    } (e);
    t.RectangleBoundingBoxData = a;
    var i = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.EllipseData]"
        },
        e.ellipseIntersectsSegment = function(t, e, a, i, r, n, s, o, l, h, u) {
            void 0 === l && (l = null),
            void 0 === h && (h = null),
            void 0 === u && (u = null);
            var _ = s / o,
            f = _ * _;
            e *= _,
            i *= _;
            var c = a - t,
            p = i - e,
            m = Math.sqrt(c * c + p * p),
            d = c / m,
            y = p / m,
            g = (r - t) * d + (n - e) * y,
            v = g * g,
            b = t * t + e * e,
            D = s * s,
            T = D - b + v,
            A = 0;
            if (T >= 0) {
                var x = Math.sqrt(T),
                O = g - x,
                P = g + x,
                E = 0 > O ? -1 : m >= O ? 0 : 1,
                S = 0 > P ? -1 : m >= P ? 0 : 1,
                M = E * S;
                if (0 > M) return - 1;
                0 === M && ( - 1 === E ? (A = 2, a = t + P * d, i = (e + P * y) / _, null !== l && (l.x = a, l.y = i), null !== h && (h.x = a, h.y = i), null !== u && (u.x = Math.atan2(i / D * f, a / D), u.y = u.x + Math.PI)) : 1 === S ? (A = 1, t += O * d, e = (e + O * y) / _, null !== l && (l.x = t, l.y = e), null !== h && (h.x = t, h.y = e), null !== u && (u.x = Math.atan2(e / D * f, t / D), u.y = u.x + Math.PI)) : (A = 3, null !== l && (l.x = t + O * d, l.y = (e + O * y) / _, null !== u && (u.x = Math.atan2(l.y / D * f, l.x / D))), null !== h && (h.x = t + P * d, h.y = (e + P * y) / _, null !== u && (u.y = Math.atan2(h.y / D * f, h.x / D)))))
            }
            return A
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.type = 1
        },
        e.prototype.containsPoint = function(t, e) {
            var a = .5 * this.width;
            if (t >= -a && a >= t) {
                var i = .5 * this.height;
                if (e >= -i && i >= e) return e *= a / i,
                Math.sqrt(t * t + e * e) <= a
            }
            return ! 1
        },
        e.prototype.intersectsSegment = function(t, a, i, r, n, s, o) {
            void 0 === n && (n = null),
            void 0 === s && (s = null),
            void 0 === o && (o = null);
            var l = e.ellipseIntersectsSegment(t, a, i, r, 0, 0, .5 * this.width, .5 * this.height, n, s, o);
            return l
        },
        e
    } (e);
    t.EllipseBoundingBoxData = i;
    var r = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.vertices = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.PolygonBoundingBoxData]"
        },
        e.polygonIntersectsSegment = function(t, e, a, i, r, n, s, o) {
            void 0 === n && (n = null),
            void 0 === s && (s = null),
            void 0 === o && (o = null),
            t === a && (t = a + 1e-6),
            e === i && (e = i + 1e-6);
            for (var l = r.length,
            h = t - a,
            u = e - i,
            _ = t * i - e * a,
            f = 0,
            c = r[l - 2], p = r[l - 1], m = 0, d = 0, y = 0, g = 0, v = 0, b = 0, D = 0; l > D; D += 2) {
                var T = r[D],
                A = r[D + 1];
                c === T && (c = T + 1e-4),
                p === A && (p = A + 1e-4);
                var x = c - T,
                O = p - A,
                P = c * A - p * T,
                E = h * O - u * x,
                S = (_ * x - h * P) / E;
                if ((S >= c && T >= S || S >= T && c >= S) && (0 === h || S >= t && a >= S || S >= a && t >= S)) {
                    var M = (_ * O - u * P) / E;
                    if ((M >= p && A >= M || M >= A && p >= M) && (0 === u || M >= e && i >= M || M >= i && e >= M)) {
                        if (null === s) {
                            y = S,
                            g = M,
                            v = S,
                            b = M,
                            f++,
                            null !== o && (o.x = Math.atan2(A - p, T - c) - .5 * Math.PI, o.y = o.x);
                            break
                        }
                        var B = S - t;
                        0 > B && (B = -B),
                        0 === f ? (m = B, d = B, y = S, g = M, v = S, b = M, null !== o && (o.x = Math.atan2(A - p, T - c) - .5 * Math.PI, o.y = o.x)) : (m > B && (m = B, y = S, g = M, null !== o && (o.x = Math.atan2(A - p, T - c) - .5 * Math.PI)), B > d && (d = B, v = S, b = M, null !== o && (o.y = Math.atan2(A - p, T - c) - .5 * Math.PI))),
                        f++
                    }
                }
                c = T,
                p = A
            }
            return 1 === f ? (null !== n && (n.x = y, n.y = g), null !== s && (s.x = y, s.y = g), null !== o && (o.y = o.x + Math.PI)) : f > 1 && (f++, null !== n && (n.x = y, n.y = g), null !== s && (s.x = v, s.y = b)),
            f
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.type = 2,
            this.x = 0,
            this.y = 0,
            this.vertices.length = 0
        },
        e.prototype.containsPoint = function(t, e) {
            var a = !1;
            if (t >= this.x && t <= this.width && e >= this.y && e <= this.height) for (var i = 0,
            r = this.vertices.length,
            n = r - 2; r > i; i += 2) {
                var s = this.vertices[n + 1],
                o = this.vertices[i + 1];
                if (e > o && s >= e || e > s && o >= e) {
                    var l = this.vertices[n],
                    h = this.vertices[i];
                    t > (e - o) * (l - h) / (s - o) + h && (a = !a)
                }
                n = i
            }
            return a
        },
        e.prototype.intersectsSegment = function(t, i, r, n, s, o, l) {
            void 0 === s && (s = null),
            void 0 === o && (o = null),
            void 0 === l && (l = null);
            var h = 0;
            return 0 !== a.rectangleIntersectsSegment(t, i, r, n, this.x, this.y, this.x + this.width, this.y + this.height, null, null, null) && (h = e.polygonIntersectsSegment(t, i, r, n, this.vertices, s, o, l)),
            h
        },
        e
    } (e);
    t.PolygonBoundingBoxData = r
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.cachedFrames = [],
            e.boneTimelines = {},
            e.surfaceTimelines = {},
            e.slotTimelines = {},
            e.constraintTimelines = {},
            e.animationTimelines = {},
            e.boneCachedFrameIndices = {},
            e.slotCachedFrameIndices = {},
            e.actionTimeline = null,
            e.zOrderTimeline = null,
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.AnimationData]"
        },
        e.prototype._onClear = function() {
            for (var t in this.boneTimelines) {
                for (var e = 0,
                a = this.boneTimelines[t]; e < a.length; e++) {
                    var i = a[e];
                    i.returnToPool()
                }
                delete this.boneTimelines[t]
            }
            for (var t in this.surfaceTimelines) {
                for (var r = 0,
                n = this.surfaceTimelines[t]; r < n.length; r++) {
                    var i = n[r];
                    i.returnToPool()
                }
                delete this.surfaceTimelines[t]
            }
            for (var t in this.slotTimelines) {
                for (var s = 0,
                o = this.slotTimelines[t]; s < o.length; s++) {
                    var i = o[s];
                    i.returnToPool()
                }
                delete this.slotTimelines[t]
            }
            for (var t in this.constraintTimelines) {
                for (var l = 0,
                h = this.constraintTimelines[t]; l < h.length; l++) {
                    var i = h[l];
                    i.returnToPool()
                }
                delete this.constraintTimelines[t]
            }
            for (var t in this.animationTimelines) {
                for (var u = 0,
                _ = this.animationTimelines[t]; u < _.length; u++) {
                    var i = _[u];
                    i.returnToPool()
                }
                delete this.animationTimelines[t]
            }
            for (var t in this.boneCachedFrameIndices) delete this.boneCachedFrameIndices[t];
            for (var t in this.slotCachedFrameIndices) delete this.slotCachedFrameIndices[t];
            null !== this.actionTimeline && this.actionTimeline.returnToPool(),
            null !== this.zOrderTimeline && this.zOrderTimeline.returnToPool(),
            this.frameIntOffset = 0,
            this.frameFloatOffset = 0,
            this.frameOffset = 0,
            this.frameCount = 0,
            this.playTimes = 0,
            this.duration = 0,
            this.scale = 1,
            this.fadeInTime = 0,
            this.cacheFrameRate = 0,
            this.name = "",
            this.cachedFrames.length = 0,
            this.actionTimeline = null,
            this.zOrderTimeline = null,
            this.parent = null
        },
        e.prototype.cacheFrames = function(t) {
            if (! (this.cacheFrameRate > 0)) {
                this.cacheFrameRate = Math.max(Math.ceil(t * this.scale), 1);
                var e = Math.ceil(this.cacheFrameRate * this.duration) + 1;
                this.cachedFrames.length = e;
                for (var a = 0,
                i = this.cacheFrames.length; i > a; ++a) this.cachedFrames[a] = !1;
                for (var r = 0,
                n = this.parent.sortedBones; r < n.length; r++) {
                    for (var s = n[r], o = new Array(e), a = 0, i = o.length; i > a; ++a) o[a] = -1;
                    this.boneCachedFrameIndices[s.name] = o
                }
                for (var l = 0,
                h = this.parent.sortedSlots; l < h.length; l++) {
                    for (var u = h[l], o = new Array(e), a = 0, i = o.length; i > a; ++a) o[a] = -1;
                    this.slotCachedFrameIndices[u.name] = o
                }
            }
        },
        e.prototype.addBoneTimeline = function(t, e) {
            var a = t.name in this.boneTimelines ? this.boneTimelines[t.name] : this.boneTimelines[t.name] = [];
            a.indexOf(e) < 0 && a.push(e)
        },
        e.prototype.addSurfaceTimeline = function(t, e) {
            var a = t.name in this.surfaceTimelines ? this.surfaceTimelines[t.name] : this.surfaceTimelines[t.name] = [];
            a.indexOf(e) < 0 && a.push(e)
        },
        e.prototype.addSlotTimeline = function(t, e) {
            var a = t.name in this.slotTimelines ? this.slotTimelines[t.name] : this.slotTimelines[t.name] = [];
            a.indexOf(e) < 0 && a.push(e)
        },
        e.prototype.addConstraintTimeline = function(t, e) {
            var a = t.name in this.constraintTimelines ? this.constraintTimelines[t.name] : this.constraintTimelines[t.name] = [];
            a.indexOf(e) < 0 && a.push(e)
        },
        e.prototype.addAnimationTimeline = function(t, e) {
            var a = t in this.animationTimelines ? this.animationTimelines[t] : this.animationTimelines[t] = [];
            a.indexOf(e) < 0 && a.push(e)
        },
        e.prototype.getBoneTimelines = function(t) {
            return t in this.boneTimelines ? this.boneTimelines[t] : null
        },
        e.prototype.getSurfaceTimelines = function(t) {
            return t in this.surfaceTimelines ? this.surfaceTimelines[t] : null
        },
        e.prototype.getSlotTimelines = function(t) {
            return t in this.slotTimelines ? this.slotTimelines[t] : null
        },
        e.prototype.getConstraintTimelines = function(t) {
            return t in this.constraintTimelines ? this.constraintTimelines[t] : null
        },
        e.prototype.getAnimationTimelines = function(t) {
            return t in this.animationTimelines ? this.animationTimelines[t] : null
        },
        e.prototype.getBoneCachedFrameIndices = function(t) {
            return t in this.boneCachedFrameIndices ? this.boneCachedFrameIndices[t] : null
        },
        e.prototype.getSlotCachedFrameIndices = function(t) {
            return t in this.slotCachedFrameIndices ? this.slotCachedFrameIndices[t] : null
        },
        e
    } (t.BaseObject);
    t.AnimationData = e;
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.TimelineData]"
        },
        e.prototype._onClear = function() {
            this.type = 10,
            this.offset = 0,
            this.frameIndicesOffset = -1
        },
        e
    } (t.BaseObject);
    t.TimelineData = a
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.boneMask = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.AnimationConfig]"
        },
        e.prototype._onClear = function() {
            this.pauseFadeOut = !0,
            this.fadeOutMode = 4,
            this.fadeOutTweenType = 1,
            this.fadeOutTime = -1,
            this.actionEnabled = !0,
            this.additiveBlending = !1,
            this.displayControl = !0,
            this.pauseFadeIn = !0,
            this.resetToPose = !0,
            this.fadeInTweenType = 1,
            this.playTimes = -1,
            this.layer = 0,
            this.position = 0,
            this.duration = -1,
            this.timeScale = -100,
            this.weight = 1,
            this.fadeInTime = -1,
            this.autoFadeOutTime = -1,
            this.name = "",
            this.animation = "",
            this.group = "",
            this.boneMask.length = 0
        },
        e.prototype.clear = function() {
            this._onClear()
        },
        e.prototype.copyFrom = function(t) {
            this.pauseFadeOut = t.pauseFadeOut,
            this.fadeOutMode = t.fadeOutMode,
            this.autoFadeOutTime = t.autoFadeOutTime,
            this.fadeOutTweenType = t.fadeOutTweenType,
            this.actionEnabled = t.actionEnabled,
            this.additiveBlending = t.additiveBlending,
            this.displayControl = t.displayControl,
            this.pauseFadeIn = t.pauseFadeIn,
            this.resetToPose = t.resetToPose,
            this.playTimes = t.playTimes,
            this.layer = t.layer,
            this.position = t.position,
            this.duration = t.duration,
            this.timeScale = t.timeScale,
            this.fadeInTime = t.fadeInTime,
            this.fadeOutTime = t.fadeOutTime,
            this.fadeInTweenType = t.fadeInTweenType,
            this.weight = t.weight,
            this.name = t.name,
            this.animation = t.animation,
            this.group = t.group,
            this.boneMask.length = t.boneMask.length;
            for (var e = 0,
            a = this.boneMask.length; a > e; ++e) this.boneMask[e] = t.boneMask[e]
        },
        e.prototype.containsBoneMask = function(t) {
            return 0 === this.boneMask.length || this.boneMask.indexOf(t) >= 0
        },
        e.prototype.addBoneMask = function(t, e, a) {
            void 0 === a && (a = !0);
            var i = t.getBone(e);
            if (null !== i && (this.boneMask.indexOf(e) < 0 && this.boneMask.push(e), a)) for (var r = 0,
            n = t.getBones(); r < n.length; r++) {
                var s = n[r];
                this.boneMask.indexOf(s.name) < 0 && i.contains(s) && this.boneMask.push(s.name)
            }
        },
        e.prototype.removeBoneMask = function(t, e, a) {
            void 0 === a && (a = !0);
            var i = this.boneMask.indexOf(e);
            if (i >= 0 && this.boneMask.splice(i, 1), a) {
                var r = t.getBone(e);
                if (null !== r) if (this.boneMask.length > 0) for (var n = 0,
                s = t.getBones(); n < s.length; n++) {
                    var o = s[n],
                    l = this.boneMask.indexOf(o.name);
                    l >= 0 && r.contains(o) && this.boneMask.splice(l, 1)
                } else for (var h = 0,
                u = t.getBones(); h < u.length; h++) {
                    var o = u[h];
                    o !== r && (r.contains(o) || this.boneMask.push(o.name))
                }
            }
        },
        e
    } (t.BaseObject);
    t.AnimationConfig = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.textures = {},
            e
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            for (var t in this.textures) this.textures[t].returnToPool(),
            delete this.textures[t];
            this.autoSearch = !1,
            this.width = 0,
            this.height = 0,
            this.scale = 1,
            this.name = "",
            this.imagePath = ""
        },
        e.prototype.copyFrom = function(t) {
            this.autoSearch = t.autoSearch,
            this.scale = t.scale,
            this.width = t.width,
            this.height = t.height,
            this.name = t.name,
            this.imagePath = t.imagePath;
            for (var e in this.textures) this.textures[e].returnToPool(),
            delete this.textures[e];
            for (var e in t.textures) {
                var a = this.createTexture();
                a.copyFrom(t.textures[e]),
                this.textures[e] = a
            }
        },
        e.prototype.addTexture = function(t) {
            return t.name in this.textures ? void console.warn("Same texture: " + t.name) : (t.parent = this, void(this.textures[t.name] = t))
        },
        e.prototype.getTexture = function(t) {
            return t in this.textures ? this.textures[t] : null
        },
        e
    } (t.BaseObject);
    t.TextureAtlasData = e;
    var a = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.region = new t.Rectangle,
            a.frame = null,
            a
        }
        return __extends(a, e),
        a.createRectangle = function() {
            return new t.Rectangle
        },
        a.prototype._onClear = function() {
            this.rotated = !1,
            this.name = "",
            this.region.clear(),
            this.parent = null,
            this.frame = null
        },
        a.prototype.copyFrom = function(t) {
            this.rotated = t.rotated,
            this.name = t.name,
            this.region.copyFrom(t.region),
            this.parent = t.parent,
            null === this.frame && null !== t.frame ? this.frame = a.createRectangle() : null !== this.frame && null === t.frame && (this.frame = null),
            null !== this.frame && null !== t.frame && this.frame.copyFrom(t.frame)
        },
        a
    } (t.BaseObject);
    t.TextureData = a
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.vertices = [],
            e.bones = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.DeformVertices]"
        },
        e.prototype._onClear = function() {
            this.verticesDirty = !1,
            this.vertices.length = 0,
            this.bones.length = 0,
            this.verticesData = null
        },
        e.prototype.init = function(t, e) {
            if (this.verticesData = t, null !== this.verticesData) {
                var a = 0;
                a = null !== this.verticesData.weight ? 2 * this.verticesData.weight.count: 2 * this.verticesData.data.intArray[this.verticesData.offset + 0],
                this.verticesDirty = !0,
                this.vertices.length = a,
                this.bones.length = 0;
                for (var i = 0,
                r = this.vertices.length; r > i; ++i) this.vertices[i] = 0;
                if (null !== this.verticesData.weight) for (var i = 0,
                r = this.verticesData.weight.bones.length; r > i; ++i) {
                    var n = e.getBone(this.verticesData.weight.bones[i].name);
                    this.bones.push(n)
                }
            } else this.verticesDirty = !1,
            this.vertices.length = 0,
            this.bones.length = 0,
            this.verticesData = null
        },
        e.prototype.isBonesUpdate = function() {
            for (var t = 0,
            e = this.bones; t < e.length; t++) {
                var a = e[t];
                if (null !== a && a._childrenTransformDirty) return ! 0
            }
            return ! 1
        },
        e
    } (t.BaseObject);
    t.DeformVertices = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._bones = [],
            t._slots = [],
            t._constraints = [],
            t._actions = [],
            t._animation = null,
            t._proxy = null,
            t._replaceTextureAtlasData = null,
            t._clock = null,
            t
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.Armature]"
        },
        a._onSortSlots = function(t, e) {
            return t._zOrder > e._zOrder ? 1 : -1
        },
        a.prototype._onClear = function() {
            null !== this._clock && this._clock.remove(this);
            for (var t = 0,
            e = this._bones; t < e.length; t++) {
                var a = e[t];
                a.returnToPool()
            }
            for (var i = 0,
            r = this._slots; i < r.length; i++) {
                var n = r[i];
                n.returnToPool()
            }
            for (var s = 0,
            o = this._constraints; s < o.length; s++) {
                var l = o[s];
                l.returnToPool()
            }
            for (var h = 0,
            u = this._actions; h < u.length; h++) {
                var _ = u[h];
                _.returnToPool()
            }
            null !== this._animation && this._animation.returnToPool(),
            null !== this._proxy && this._proxy.dbClear(),
            null !== this._replaceTextureAtlasData && this._replaceTextureAtlasData.returnToPool(),
            this.inheritAnimation = !0,
            this.userData = null,
            this._lockUpdate = !1,
            this._slotsDirty = !0,
            this._zOrderDirty = !1,
            this._flipX = !1,
            this._flipY = !1,
            this._cacheFrameIndex = -1,
            this._bones.length = 0,
            this._slots.length = 0,
            this._constraints.length = 0,
            this._actions.length = 0,
            this._armatureData = null,
            this._animation = null,
            this._proxy = null,
            this._display = null,
            this._replaceTextureAtlasData = null,
            this._replacedTexture = null,
            this._dragonBones = null,
            this._clock = null,
            this._parent = null
        },
        a.prototype._sortZOrder = function(t, e) {
            var a = this._armatureData.sortedSlots,
            i = null === t;
            if (this._zOrderDirty || !i) {
                for (var r = 0,
                n = a.length; n > r; ++r) {
                    var s = i ? r: t[e + r];
                    if (! (0 > s || s >= n)) {
                        var o = a[s],
                        l = this.getSlot(o.name);
                        null !== l && l._setZorder(r)
                    }
                }
                this._slotsDirty = !0,
                this._zOrderDirty = !i
            }
        },
        a.prototype._addBone = function(t) {
            this._bones.indexOf(t) < 0 && this._bones.push(t)
        },
        a.prototype._addSlot = function(t) {
            this._slots.indexOf(t) < 0 && this._slots.push(t)
        },
        a.prototype._addConstraint = function(t) {
            this._constraints.indexOf(t) < 0 && this._constraints.push(t)
        },
        a.prototype._bufferAction = function(t, e) {
            this._actions.indexOf(t) < 0 && (e ? this._actions.push(t) : this._actions.unshift(t))
        },
        a.prototype.dispose = function() {
            null !== this._armatureData && (this._lockUpdate = !0, this._dragonBones.bufferObject(this))
        },
        a.prototype.init = function(e, a, i, r) {
            null === this._armatureData && (this._armatureData = e, this._animation = t.BaseObject.borrowObject(t.Animation), this._proxy = a, this._display = i, this._dragonBones = r, this._proxy.dbInit(this), this._animation.init(this), this._animation.animations = this._armatureData.animations)
        },
        a.prototype.advanceTime = function(t) {
            if (!this._lockUpdate) {
                if (null === this._armatureData) return void console.warn("The armature has been disposed.");
                if (null === this._armatureData.parent) return void console.warn("The armature data has been disposed.\nPlease make sure dispose armature before call factory.clear().");
                var e = this._cacheFrameIndex;
                if (this._animation.advanceTime(t), this._slotsDirty && (this._slotsDirty = !1, this._slots.sort(a._onSortSlots)), this._cacheFrameIndex < 0 || this._cacheFrameIndex !== e) {
                    var i = 0,
                    r = 0;
                    for (i = 0, r = this._bones.length; r > i; ++i) this._bones[i].update(this._cacheFrameIndex);
                    for (i = 0, r = this._slots.length; r > i; ++i) this._slots[i].update(this._cacheFrameIndex)
                }
                if (this._actions.length > 0) {
                    this._lockUpdate = !0;
                    for (var n = 0,
                    s = this._actions; n < s.length; n++) {
                        var o = s[n],
                        l = o.actionData;
                        if (null !== l && 0 === l.type) if (null !== o.slot) {
                            var h = o.slot.childArmature;
                            null !== h && h.animation.fadeIn(l.name)
                        } else if (null !== o.bone) for (var u = 0,
                        _ = this.getSlots(); u < _.length; u++) {
                            var f = _[u];
                            if (f.parent === o.bone) {
                                var h = f.childArmature;
                                null !== h && h.animation.fadeIn(l.name)
                            }
                        } else this._animation.fadeIn(l.name);
                        o.returnToPool()
                    }
                    this._actions.length = 0,
                    this._lockUpdate = !1
                }
                this._proxy.dbUpdate()
            }
        },
        a.prototype.invalidUpdate = function(t, e) {
            if (void 0 === t && (t = null), void 0 === e && (e = !1), null !== t && t.length > 0) {
                var a = this.getBone(t);
                if (null !== a && (a.invalidUpdate(), e)) for (var i = 0,
                r = this._slots; i < r.length; i++) {
                    var n = r[i];
                    n.parent === a && n.invalidUpdate()
                }
            } else {
                for (var s = 0,
                o = this._bones; s < o.length; s++) {
                    var a = o[s];
                    a.invalidUpdate()
                }
                if (e) for (var l = 0,
                h = this._slots; l < h.length; l++) {
                    var n = h[l];
                    n.invalidUpdate()
                }
            }
        },
        a.prototype.containsPoint = function(t, e) {
            for (var a = 0,
            i = this._slots; a < i.length; a++) {
                var r = i[a];
                if (r.containsPoint(t, e)) return r
            }
            return null
        },
        a.prototype.intersectsSegment = function(t, e, a, i, r, n, s) {
            void 0 === r && (r = null),
            void 0 === n && (n = null),
            void 0 === s && (s = null);
            for (var o = t === a,
            l = 0,
            h = 0,
            u = 0,
            _ = 0,
            f = 0,
            c = 0,
            p = 0,
            m = 0,
            d = null,
            y = null,
            g = 0,
            v = this._slots; g < v.length; g++) {
                var b = v[g],
                D = b.intersectsSegment(t, e, a, i, r, n, s);
                if (D > 0) {
                    if (null === r && null === n) {
                        d = b;
                        break
                    }
                    if (null !== r) {
                        var T = o ? r.y - e: r.x - t;
                        0 > T && (T = -T),
                        (null === d || l > T) && (l = T, u = r.x, _ = r.y, d = b, s && (p = s.x))
                    }
                    if (null !== n) {
                        var T = n.x - t;
                        0 > T && (T = -T),
                        (null === y || T > h) && (h = T, f = n.x, c = n.y, y = b, null !== s && (m = s.y))
                    }
                }
            }
            return null !== d && null !== r && (r.x = u, r.y = _, null !== s && (s.x = p)),
            null !== y && null !== n && (n.x = f, n.y = c, null !== s && (s.y = m)),
            d
        },
        a.prototype.getBone = function(t) {
            for (var e = 0,
            a = this._bones; e < a.length; e++) {
                var i = a[e];
                if (i.name === t) return i
            }
            return null
        },
        a.prototype.getBoneByDisplay = function(t) {
            var e = this.getSlotByDisplay(t);
            return null !== e ? e.parent: null
        },
        a.prototype.getSlot = function(t) {
            for (var e = 0,
            a = this._slots; e < a.length; e++) {
                var i = a[e];
                if (i.name === t) return i
            }
            return null
        },
        a.prototype.getSlotByDisplay = function(t) {
            if (null !== t) for (var e = 0,
            a = this._slots; e < a.length; e++) {
                var i = a[e];
                if (i.display === t) return i
            }
            return null
        },
        a.prototype.getBones = function() {
            return this._bones
        },
        a.prototype.getSlots = function() {
            return this._slots
        },
        Object.defineProperty(a.prototype, "flipX", {
            get: function() {
                return this._flipX
            },
            set: function(t) {
                this._flipX !== t && (this._flipX = t, this.invalidUpdate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "flipY", {
            get: function() {
                return this._flipY
            },
            set: function(t) {
                this._flipY !== t && (this._flipY = t, this.invalidUpdate())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "cacheFrameRate", {
            get: function() {
                return this._armatureData.cacheFrameRate
            },
            set: function(t) {
                if (this._armatureData.cacheFrameRate !== t) {
                    this._armatureData.cacheFrames(t);
                    for (var e = 0,
                    a = this._slots; e < a.length; e++) {
                        var i = a[e],
                        r = i.childArmature;
                        null !== r && (r.cacheFrameRate = t)
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "name", {
            get: function() {
                return this._armatureData.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "armatureData", {
            get: function() {
                return this._armatureData
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animation", {
            get: function() {
                return this._animation
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "proxy", {
            get: function() {
                return this._proxy
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "eventDispatcher", {
            get: function() {
                return this._proxy
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "display", {
            get: function() {
                return this._display
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "replacedTexture", {
            get: function() {
                return this._replacedTexture
            },
            set: function(t) {
                if (this._replacedTexture !== t) {
                    null !== this._replaceTextureAtlasData && (this._replaceTextureAtlasData.returnToPool(), this._replaceTextureAtlasData = null),
                    this._replacedTexture = t;
                    for (var e = 0,
                    a = this._slots; e < a.length; e++) {
                        var i = a[e];
                        i.invalidUpdate(),
                        i.update( - 1)
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "clock", {
            get: function() {
                return this._clock
            },
            set: function(t) {
                if (this._clock !== t) {
                    null !== this._clock && this._clock.remove(this),
                    this._clock = t,
                    this._clock && this._clock.add(this);
                    for (var e = 0,
                    a = this._slots; e < a.length; e++) {
                        var i = a[e],
                        r = i.childArmature;
                        null !== r && (r.clock = this._clock)
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "parent", {
            get: function() {
                return this._parent
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.replaceTexture = function(t) {
            this.replacedTexture = t
        },
        a.prototype.hasEventListener = function(t) {
            return console.warn("Deprecated."),
            this._proxy.hasDBEventListener(t)
        },
        a.prototype.addEventListener = function(t, e, a) {
            console.warn("Deprecated."),
            this._proxy.addDBEventListener(t, e, a)
        },
        a.prototype.removeEventListener = function(t, e, a) {
            console.warn("Deprecated."),
            this._proxy.removeDBEventListener(t, e, a)
        },
        a.prototype.enableAnimationCache = function(t) {
            console.warn("Deprecated."),
            this.cacheFrameRate = t
        },
        a.prototype.getDisplay = function() {
            return this._display
        },
        a
    } (t.BaseObject);
    t.Armature = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.globalTransformMatrix = new t.Matrix,
            a.global = new t.Transform,
            a.offset = new t.Transform,
            a
        }
        return __extends(a, e),
        a.prototype._onClear = function() {
            this.globalTransformMatrix.identity(),
            this.global.identity(),
            this.offset.identity(),
            this.origin = null,
            this.userData = null,
            this._globalDirty = !1,
            this._armature = null
        },
        a.prototype.updateGlobalTransform = function() {
            this._globalDirty && (this._globalDirty = !1, this.global.fromMatrix(this.globalTransformMatrix))
        },
        Object.defineProperty(a.prototype, "armature", {
            get: function() {
                return this._armature
            },
            enumerable: !0,
            configurable: !0
        }),
        a._helpMatrix = new t.Matrix,
        a._helpTransform = new t.Transform,
        a._helpPoint = new t.Point,
        a
    } (t.BaseObject);
    t.TransformObject = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.animationPose = new t.Transform,
            a._blendState = new t.BlendState,
            a
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.Bone]"
        },
        a.prototype._onClear = function() {
            e.prototype._onClear.call(this),
            this.offsetMode = 1,
            this.animationPose.identity(),
            this._transformDirty = !1,
            this._childrenTransformDirty = !1,
            this._localDirty = !0,
            this._hasConstraint = !1,
            this._visible = !0,
            this._cachedFrameIndex = -1,
            this._blendState.clear(),
            this._boneData = null,
            this._parent = null,
            this._cachedFrameIndices = null
        },
        a.prototype._updateGlobalTransformMatrix = function(e) {
            var a = this._boneData,
            i = this.global,
            r = this.globalTransformMatrix,
            n = this.origin,
            s = this.offset,
            o = this.animationPose,
            l = this._parent,
            h = this._armature.flipX,
            u = this._armature.flipY === t.DragonBones.yDown,
            _ = null !== l,
            f = 0;
            if (1 === this.offsetMode ? null !== n ? (i.x = n.x + s.x + o.x, i.y = n.y + s.y + o.y, i.skew = n.skew + s.skew + o.skew, i.rotation = n.rotation + s.rotation + o.rotation, i.scaleX = n.scaleX * s.scaleX * o.scaleX, i.scaleY = n.scaleY * s.scaleY * o.scaleY) : i.copyFrom(s).add(o) : 0 === this.offsetMode ? null !== n ? i.copyFrom(n).add(o) : i.copyFrom(o) : (_ = !1, i.copyFrom(s)), _) {
                var c = 0 === l._boneData.type ? l.globalTransformMatrix: l._getGlobalTransformMatrix(i.x, i.y);
                if (a.inheritScale) a.inheritRotation || (l.updateGlobalTransform(), f = h && u ? i.rotation - (l.global.rotation + Math.PI) : h ? i.rotation + l.global.rotation + Math.PI: u ? i.rotation + l.global.rotation: i.rotation - l.global.rotation, i.rotation = f),
                i.toMatrix(r),
                r.concat(c),
                a.inheritTranslation ? (i.x = r.tx, i.y = r.ty) : (r.tx = i.x, r.ty = i.y),
                e ? i.fromMatrix(r) : this._globalDirty = !0;
                else {
                    if (a.inheritTranslation) {
                        var p = i.x,
                        m = i.y;
                        i.x = c.a * p + c.c * m + c.tx,
                        i.y = c.b * p + c.d * m + c.ty
                    } else h && (i.x = -i.x),
                    u && (i.y = -i.y);
                    a.inheritRotation ? (l.updateGlobalTransform(), f = l.global.scaleX < 0 ? i.rotation + l.global.rotation + Math.PI: i.rotation + l.global.rotation, c.a * c.d - c.b * c.c < 0 && (f -= 2 * i.rotation, (h !== u || a.inheritReflection) && (i.skew += Math.PI)), i.rotation = f) : (h || u) && (h && u ? f = i.rotation + Math.PI: (f = h ? Math.PI - i.rotation: -i.rotation, i.skew += Math.PI), i.rotation = f),
                    i.toMatrix(r)
                }
            } else(h || u) && (h && (i.x = -i.x), u && (i.y = -i.y), h && u ? f = i.rotation + Math.PI: (f = h ? Math.PI - i.rotation: -i.rotation, i.skew += Math.PI), i.rotation = f),
            i.toMatrix(r)
        },
        a.prototype.init = function(t, e) {
            null === this._boneData && (this._boneData = t, this._armature = e, null !== this._boneData.parent && (this._parent = this._armature.getBone(this._boneData.parent.name)), this._armature._addBone(this), this.origin = this._boneData.transform)
        },
        a.prototype.update = function(t) {
            if (this._blendState.dirty = !1, t >= 0 && null !== this._cachedFrameIndices) {
                var e = this._cachedFrameIndices[t];
                if (e >= 0 && this._cachedFrameIndex === e) this._transformDirty = !1;
                else if (e >= 0) this._transformDirty = !0,
                this._cachedFrameIndex = e;
                else {
                    if (this._hasConstraint) for (var a = 0,
                    i = this._armature._constraints; a < i.length; a++) {
                        var r = i[a];
                        r._root === this && r.update()
                    }
                    this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty ? (this._transformDirty = !0, this._cachedFrameIndex = -1) : this._cachedFrameIndex >= 0 ? (this._transformDirty = !1, this._cachedFrameIndices[t] = this._cachedFrameIndex) : (this._transformDirty = !0, this._cachedFrameIndex = -1)
                }
            } else {
                if (this._hasConstraint) for (var n = 0,
                s = this._armature._constraints; n < s.length; n++) {
                    var r = s[n];
                    r._root === this && r.update()
                } (this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty) && (t = -1, this._transformDirty = !0, this._cachedFrameIndex = -1)
            }
            if (this._transformDirty) if (this._transformDirty = !1, this._childrenTransformDirty = !0, this._cachedFrameIndex < 0) {
                var o = t >= 0;
                this._localDirty && this._updateGlobalTransformMatrix(o),
                o && null !== this._cachedFrameIndices && (this._cachedFrameIndex = this._cachedFrameIndices[t] = this._armature._armatureData.setCacheFrame(this.globalTransformMatrix, this.global))
            } else this._armature._armatureData.getCacheFrame(this.globalTransformMatrix, this.global, this._cachedFrameIndex);
            else this._childrenTransformDirty && (this._childrenTransformDirty = !1);
            this._localDirty = !0
        },
        a.prototype.updateByConstraint = function() {
            this._localDirty && (this._localDirty = !1, (this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty) && this._updateGlobalTransformMatrix(!0), this._transformDirty = !0)
        },
        a.prototype.invalidUpdate = function() {
            this._transformDirty = !0
        },
        a.prototype.contains = function(t) {
            if (t === this) return ! 1;
            for (var e = t; e !== this && null !== e;) e = e.parent;
            return e === this
        },
        Object.defineProperty(a.prototype, "boneData", {
            get: function() {
                return this._boneData
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(t) {
                if (this._visible !== t) {
                    this._visible = t;
                    for (var e = 0,
                    a = this._armature.getSlots(); e < a.length; e++) {
                        var i = a[e];
                        i.parent === this && i._updateVisible()
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "name", {
            get: function() {
                return this._boneData.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "parent", {
            get: function() {
                return this._parent
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.getBones = function() {
            console.warn("Deprecated.");
            for (var t = new Array,
            e = 0,
            a = this._armature.getBones(); e < a.length; e++) {
                var i = a[e];
                i.parent === this && t.push(i)
            }
            return t
        },
        a.prototype.getSlots = function() {
            console.warn("Deprecated.");
            for (var t = new Array,
            e = 0,
            a = this._armature.getSlots(); e < a.length; e++) {
                var i = a[e];
                i.parent === this && t.push(i)
            }
            return t
        },
        Object.defineProperty(a.prototype, "slot", {
            get: function() {
                console.warn("Deprecated.");
                for (var t = 0,
                e = this._armature.getSlots(); t < e.length; t++) {
                    var a = e[t];
                    if (a.parent === this) return a
                }
                return null
            },
            enumerable: !0,
            configurable: !0
        }),
        a
    } (t.TransformObject);
    t.Bone = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._vertices = [],
            e._deformVertices = [],
            e._hullCache = [],
            e._matrixCahce = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.Surface]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this._dX = 0,
            this._dY = 0,
            this._k = 0,
            this._kX = 0,
            this._kY = 0,
            this._vertices.length = 0,
            this._deformVertices.length = 0,
            this._matrixCahce.length = 0,
            this._hullCache.length = 0
        },
        e.prototype._getAffineTransform = function(t, e, a, i, r, n, s, o, l, h, u, _, f) {
            var c = s - r,
            p = o - n,
            m = l - r,
            d = h - n;
            u.rotation = Math.atan2(p, c),
            u.skew = Math.atan2(d, m) - .5 * Math.PI - u.rotation,
            f && (u.rotation += Math.PI),
            u.scaleX = Math.sqrt(c * c + p * p) / a,
            u.scaleY = Math.sqrt(m * m + d * d) / i,
            u.toMatrix(_),
            u.x = _.tx = r - (_.a * t + _.c * e),
            u.y = _.ty = n - (_.b * t + _.d * e)
        },
        e.prototype._updateVertices = function() {
            var t = this._boneData.vertices,
            e = this._vertices,
            a = this._deformVertices;
            if (null !== this._parent) if (1 === this._parent._boneData.type) for (var i = 0,
            r = t.length; r > i; i += 2) {
                var n = t[i] + a[i],
                s = t[i + 1] + a[i],
                o = this._parent._getGlobalTransformMatrix(n, s);
                e[i] = o.a * n + o.c * s + o.tx,
                e[i + 1] = o.b * n + o.d * s + o.ty
            } else for (var l = this._parent.globalTransformMatrix,
            i = 0,
            r = t.length; r > i; i += 2) {
                var n = t[i] + a[i],
                s = t[i + 1] + a[i + 1];
                e[i] = l.a * n + l.c * s + l.tx,
                e[i + 1] = l.b * n + l.d * s + l.ty
            } else for (var i = 0,
            r = t.length; r > i; i += 2) e[i] = t[i] + a[i],
            e[i + 1] = t[i + 1] + a[i + 1]
        },
        e.prototype._updateGlobalTransformMatrix = function(t) {
            var e = 2 * this._boneData.segmentX,
            a = this._vertices.length - 2,
            i = 200,
            r = this._vertices[0],
            n = this._vertices[1],
            s = this._vertices[e],
            o = this._vertices[e + 1],
            l = this._vertices[a],
            h = this._vertices[a + 1],
            u = this._vertices[a - e],
            _ = this._vertices[a - e + 1],
            f = r + .5 * (l - r),
            c = n + .5 * (h - n),
            p = s + .5 * (u - s),
            m = o + .5 * (_ - o),
            d = f + .5 * (p - f),
            y = c + .5 * (m - c),
            g = s + .5 * (l - s),
            v = o + .5 * (h - o),
            b = u + .5 * (l - u),
            D = _ + .5 * (h - _);
            this._globalDirty = !1,
            this._getAffineTransform(0, 0, i, i, d, y, g, v, b, D, this.global, this.globalTransformMatrix, !1)
        },
        e.prototype._getGlobalTransformMatrix = function(t, a) {
            var i = 1e3;
            if ( - i > t || t > i || -i > a || a > i) return this.globalTransformMatrix;
            var r = !1,
            n = 200,
            s = this._boneData,
            o = s.segmentX,
            l = s.segmentY,
            h = 2 * s.segmentX,
            u = this._dX,
            _ = this._dY,
            f = Math.floor((t + n) / u),
            c = Math.floor((a + n) / _),
            p = 0,
            m = f * u - n,
            d = c * _ - n,
            y = this._matrixCahce,
            g = e._helpMatrix;
            if ( - n > t) {
                if ( - n > a || a >= n) return this.globalTransformMatrix;
                if (r = a > this._kX * (t + n) + d, p = 7 * (2 * (o * (l + 1) + 2 * o + l + c) + (r ? 1 : 0)), this._matrixCahce[p] > 0) g.copyFromArray(y, p + 1);
                else {
                    var v = c * (h + 2),
                    b = this._hullCache[4],
                    D = this._hullCache[5],
                    T = this._hullCache[2] - (l - c) * b,
                    A = this._hullCache[3] - (l - c) * D,
                    x = this._vertices;
                    r ? this._getAffineTransform( - n, d + _, i - n, _, x[v + h + 2], x[v + h + 3], T + b, A + D, x[v], x[v + 1], e._helpTransform, g, !0) : this._getAffineTransform( - i, d, i - n, _, T, A, x[v], x[v + 1], T + b, A + D, e._helpTransform, g, !1),
                    y[p] = 1,
                    y[p + 1] = g.a,
                    y[p + 2] = g.b,
                    y[p + 3] = g.c,
                    y[p + 4] = g.d,
                    y[p + 5] = g.tx,
                    y[p + 6] = g.ty
                }
            } else if (t >= n) {
                if ( - n > a || a >= n) return this.globalTransformMatrix;
                if (r = a > this._kX * (t - i) + d, p = 7 * (2 * (o * (l + 1) + o + c) + (r ? 1 : 0)), this._matrixCahce[p] > 0) g.copyFromArray(y, p + 1);
                else {
                    var v = (c + 1) * (h + 2) - 2,
                    b = this._hullCache[4],
                    D = this._hullCache[5],
                    T = this._hullCache[0] + c * b,
                    A = this._hullCache[1] + c * D,
                    x = this._vertices;
                    r ? this._getAffineTransform(i, d + _, i - n, _, T + b, A + D, x[v + h + 2], x[v + h + 3], T, A, e._helpTransform, g, !0) : this._getAffineTransform(n, d, i - n, _, x[v], x[v + 1], T, A, x[v + h + 2], x[v + h + 3], e._helpTransform, g, !1),
                    y[p] = 1,
                    y[p + 1] = g.a,
                    y[p + 2] = g.b,
                    y[p + 3] = g.c,
                    y[p + 4] = g.d,
                    y[p + 5] = g.tx,
                    y[p + 6] = g.ty
                }
            } else if ( - n > a) {
                if ( - n > t || t >= n) return this.globalTransformMatrix;
                if (r = a > this._kY * (t - m - u) - i, p = 7 * (o * (l + 1) + 2 * f + (r ? 1 : 0)), this._matrixCahce[p] > 0) g.copyFromArray(y, p + 1);
                else {
                    var v = 2 * f,
                    b = this._hullCache[10],
                    D = this._hullCache[11],
                    T = this._hullCache[8] + f * b,
                    A = this._hullCache[9] + f * D,
                    x = this._vertices;
                    r ? this._getAffineTransform(m + u, -n, u, i - n, x[v + 2], x[v + 3], x[v], x[v + 1], T + b, A + D, e._helpTransform, g, !0) : this._getAffineTransform(m, -i, u, i - n, T, A, T + b, A + D, x[v], x[v + 1], e._helpTransform, g, !1),
                    y[p] = 1,
                    y[p + 1] = g.a,
                    y[p + 2] = g.b,
                    y[p + 3] = g.c,
                    y[p + 4] = g.d,
                    y[p + 5] = g.tx,
                    y[p + 6] = g.ty
                }
            } else if (a >= n) {
                if ( - n > t || t >= n) return this.globalTransformMatrix;
                if (r = a > this._kY * (t - m - u) + n, p = 7 * (2 * (o * (l + 1) + o + l + c) + (r ? 1 : 0)), this._matrixCahce[p] > 0) g.copyFromArray(y, p + 1);
                else {
                    var v = l * (h + 2) + 2 * f,
                    b = this._hullCache[10],
                    D = this._hullCache[11],
                    T = this._hullCache[6] - (o - f) * b,
                    A = this._hullCache[7] - (o - f) * D,
                    x = this._vertices;
                    r ? this._getAffineTransform(m + u, i, u, i - n, T + b, A + D, T, A, x[v + 2], x[v + 3], e._helpTransform, g, !0) : this._getAffineTransform(m, n, u, i - n, x[v], x[v + 1], x[v + 2], x[v + 3], T, A, e._helpTransform, g, !1),
                    y[p] = 1,
                    y[p + 1] = g.a,
                    y[p + 2] = g.b,
                    y[p + 3] = g.c,
                    y[p + 4] = g.d,
                    y[p + 5] = g.tx,
                    y[p + 6] = g.ty
                }
            } else if (r = a > this._k * (t - m - u) + d, p = 7 * (2 * (o * c + f) + (r ? 1 : 0)), this._matrixCahce[p] > 0) g.copyFromArray(y, p + 1);
            else {
                var v = 2 * f + c * (h + 2),
                x = this._vertices;
                r ? this._getAffineTransform(m + u, d + _, u, _, x[v + h + 4], x[v + h + 5], x[v + h + 2], x[v + h + 3], x[v + 2], x[v + 3], e._helpTransform, g, !0) : this._getAffineTransform(m, d, u, _, x[v], x[v + 1], x[v + 2], x[v + 3], x[v + h + 2], x[v + h + 3], e._helpTransform, g, !1),
                y[p] = 1,
                y[p + 1] = g.a,
                y[p + 2] = g.b,
                y[p + 3] = g.c,
                y[p + 4] = g.d,
                y[p + 5] = g.tx,
                y[p + 6] = g.ty
            }
            return g
        },
        e.prototype.init = function(e, a) {
            if (null === this._boneData) {
                t.prototype.init.call(this, e, a);
                var i = e.segmentX,
                r = e.segmentY,
                n = e.vertices.length,
                s = 1e3,
                o = 200;
                this._dX = 2 * o / i,
                this._dY = 2 * o / r,
                this._k = -this._dY / this._dX,
                this._kX = -this._dY / (s - o),
                this._kY = -(s - o) / this._dX,
                this._vertices.length = n,
                this._deformVertices.length = n,
                this._matrixCahce.length = 2 * (i * r + 2 * i + 2 * r) * 7,
                this._hullCache.length = 10;
                for (var l = 0; n > l; ++l) this._deformVertices[l] = 0
            }
        },
        e.prototype.update = function(t) {
            if (this._blendState.dirty = !1, t >= 0 && null !== this._cachedFrameIndices) {
                var a = this._cachedFrameIndices[t];
                if (a >= 0 && this._cachedFrameIndex === a) this._transformDirty = !1;
                else if (a >= 0) this._transformDirty = !0,
                this._cachedFrameIndex = a;
                else {
                    if (this._hasConstraint) for (var i = 0,
                    r = this._armature._constraints; i < r.length; i++) {
                        var n = r[i];
                        n._root === this && n.update()
                    }
                    this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty ? (this._transformDirty = !0, this._cachedFrameIndex = -1) : this._cachedFrameIndex >= 0 ? (this._transformDirty = !1, this._cachedFrameIndices[t] = this._cachedFrameIndex) : (this._transformDirty = !0, this._cachedFrameIndex = -1)
                }
            } else {
                if (this._hasConstraint) for (var s = 0,
                o = this._armature._constraints; s < o.length; s++) {
                    var n = o[s];
                    n._root === this && n.update()
                } (this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty) && (t = -1, this._transformDirty = !0, this._cachedFrameIndex = -1)
            }
            if (this._transformDirty) {
                this._transformDirty = !1,
                this._childrenTransformDirty = !0;
                for (var l = 0,
                h = this._matrixCahce.length; h > l; l += 7) this._matrixCahce[l] = -1;
                if (this._updateVertices(), this._cachedFrameIndex < 0) {
                    var u = t >= 0;
                    this._localDirty && this._updateGlobalTransformMatrix(u),
                    u && null !== this._cachedFrameIndices && (this._cachedFrameIndex = this._cachedFrameIndices[t] = this._armature._armatureData.setCacheFrame(this.globalTransformMatrix, this.global))
                } else this._armature._armatureData.getCacheFrame(this.globalTransformMatrix, this.global, this._cachedFrameIndex);
                var _ = 1e3,
                f = 200,
                c = 2 * this.global.x,
                p = 2 * this.global.y,
                m = e._helpPoint;
                this.globalTransformMatrix.transformPoint(_, -f, m),
                this._hullCache[0] = m.x,
                this._hullCache[1] = m.y,
                this._hullCache[2] = c - m.x,
                this._hullCache[3] = p - m.y,
                this.globalTransformMatrix.transformPoint(0, this._dY, m, !0),
                this._hullCache[4] = m.x,
                this._hullCache[5] = m.y,
                this.globalTransformMatrix.transformPoint(f, _, m),
                this._hullCache[6] = m.x,
                this._hullCache[7] = m.y,
                this._hullCache[8] = c - m.x,
                this._hullCache[9] = p - m.y,
                this.globalTransformMatrix.transformPoint(this._dX, 0, m, !0),
                this._hullCache[10] = m.x,
                this._hullCache[11] = m.y
            } else this._childrenTransformDirty && (this._childrenTransformDirty = !1);
            this._localDirty = !0
        },
        e
    } (t.Bone);
    t.Surface = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a._localMatrix = new t.Matrix,
            a._colorTransform = new t.ColorTransform,
            a._displayDatas = [],
            a._displayList = [],
            a._deformVertices = null,
            a._rawDisplay = null,
            a._meshDisplay = null,
            a
        }
        return __extends(a, e),
        a.prototype._onClear = function() {
            e.prototype._onClear.call(this);
            for (var a = [], i = 0, r = this._displayList; i < r.length; i++) {
                var n = r[i];
                null !== n && n !== this._rawDisplay && n !== this._meshDisplay && a.indexOf(n) < 0 && a.push(n)
            }
            for (var s = 0,
            o = a; s < o.length; s++) {
                var n = o[s];
                n instanceof t.Armature ? n.dispose() : this._disposeDisplay(n, !0)
            }
            null !== this._deformVertices && this._deformVertices.returnToPool(),
            null !== this._meshDisplay && this._meshDisplay !== this._rawDisplay && this._disposeDisplay(this._meshDisplay, !1),
            null !== this._rawDisplay && this._disposeDisplay(this._rawDisplay, !1),
            this.displayController = null,
            this._displayDirty = !1,
            this._zOrderDirty = !1,
            this._blendModeDirty = !1,
            this._colorDirty = !1,
            this._transformDirty = !1,
            this._visible = !0,
            this._blendMode = 0,
            this._displayIndex = -1,
            this._animationDisplayIndex = -1,
            this._zOrder = 0,
            this._cachedFrameIndex = -1,
            this._pivotX = 0,
            this._pivotY = 0,
            this._localMatrix.identity(),
            this._colorTransform.identity(),
            this._displayList.length = 0,
            this._displayDatas.length = 0,
            this._slotData = null,
            this._rawDisplayDatas = null,
            this._displayData = null,
            this._boundingBoxData = null,
            this._textureData = null,
            this._deformVertices = null,
            this._rawDisplay = null,
            this._meshDisplay = null,
            this._display = null,
            this._childArmature = null,
            this._parent = null,
            this._cachedFrameIndices = null
        },
        a.prototype._getDefaultRawDisplayData = function(t) {
            var e = this._armature._armatureData.defaultSkin;
            if (null !== e) {
                var a = e.getDisplays(this._slotData.name);
                if (null !== a) return t < a.length ? a[t] : null
            }
            return null
        },
        a.prototype._updateDisplayData = function() {
            var e = this._displayData,
            i = null !== this._deformVertices ? this._deformVertices.verticesData: null,
            r = this._textureData,
            n = null,
            s = null;
            if (this._displayData = null, this._boundingBoxData = null, this._textureData = null, this._displayIndex >= 0 && (null !== this._rawDisplayDatas && (n = this._displayIndex < this._rawDisplayDatas.length ? this._rawDisplayDatas[this._displayIndex] : null), null === n && (n = this._getDefaultRawDisplayData(this._displayIndex)), this._displayIndex < this._displayDatas.length && (this._displayData = this._displayDatas[this._displayIndex])), null !== this._displayData && (2 === this._displayData.type ? s = this._displayData.vertices: 4 === this._displayData.type ? s = this._displayData.vertices: null !== n && (2 === n.type ? s = n.vertices: 4 === n.type && (s = n.vertices)), 3 === this._displayData.type ? this._boundingBoxData = this._displayData.boundingBox: null !== n && 3 === n.type && (this._boundingBoxData = n.boundingBox), 0 === this._displayData.type ? this._textureData = this._displayData.texture: 2 === this._displayData.type && (this._textureData = this._displayData.texture)), this._displayData !== e || s !== i || this._textureData !== r) {
                if (null === s && null !== this._textureData) {
                    var o = this._displayData,
                    l = this._textureData.parent.scale * this._armature._armatureData.scale,
                    h = this._textureData.frame;
                    this._pivotX = o.pivot.x,
                    this._pivotY = o.pivot.y;
                    var u = null !== h ? h: this._textureData.region,
                    _ = u.width,
                    f = u.height;
                    this._textureData.rotated && null === h && (_ = u.height, f = u.width),
                    this._pivotX *= _ * l,
                    this._pivotY *= f * l,
                    null !== h && (this._pivotX += h.x * l, this._pivotY += h.y * l),
                    null !== this._displayData && null !== n && this._displayData !== n && (n.transform.toMatrix(a._helpMatrix), a._helpMatrix.invert(), a._helpMatrix.transformPoint(0, 0, a._helpPoint), this._pivotX -= a._helpPoint.x, this._pivotY -= a._helpPoint.y, this._displayData.transform.toMatrix(a._helpMatrix), a._helpMatrix.invert(), a._helpMatrix.transformPoint(0, 0, a._helpPoint), this._pivotX += a._helpPoint.x, this._pivotY += a._helpPoint.y),
                    t.DragonBones.yDown || (this._pivotY = (this._textureData.rotated ? this._textureData.region.width: this._textureData.region.height) * l - this._pivotY)
                } else this._pivotX = 0,
                this._pivotY = 0;
                null !== n ? this.origin = n.transform: null !== this._displayData ? this.origin = this._displayData.transform: this.origin = null,
                s !== i ? (null === this._deformVertices && (this._deformVertices = t.BaseObject.borrowObject(t.DeformVertices)), this._deformVertices.init(s, this._armature)) : null !== this._deformVertices && this._textureData !== r && (this._deformVertices.verticesDirty = !0),
                this._displayDirty = !0,
                this._transformDirty = !0
            }
        },
        a.prototype._updateDisplay = function() {
            var e = null !== this._display ? this._display: this._rawDisplay,
            a = this._childArmature;
            this._displayIndex >= 0 && this._displayIndex < this._displayList.length ? (this._display = this._displayList[this._displayIndex], null !== this._display && this._display instanceof t.Armature ? (this._childArmature = this._display, this._display = this._childArmature.display) : this._childArmature = null) : (this._display = null, this._childArmature = null);
            var i = null !== this._display ? this._display: this._rawDisplay;
            if (i !== e && (this._onUpdateDisplay(), this._replaceDisplay(e), this._transformDirty = !0, this._visibleDirty = !0, this._blendModeDirty = !0, this._colorDirty = !0), (i === this._rawDisplay || i === this._meshDisplay) && this._updateFrame(), this._childArmature !== a && (null !== a && (a._parent = null, a.clock = null, a.inheritAnimation && a.animation.reset()), null !== this._childArmature && (this._childArmature._parent = this, this._childArmature.clock = this._armature.clock, this._childArmature.inheritAnimation))) {
                if (0 === this._childArmature.cacheFrameRate) {
                    var r = this._armature.cacheFrameRate;
                    0 !== r && (this._childArmature.cacheFrameRate = r)
                }
                var n = null;
                if (null !== this._displayData && 1 === this._displayData.type) n = this._displayData.actions;
                else if (this._displayIndex >= 0 && null !== this._rawDisplayDatas) {
                    var s = this._displayIndex < this._rawDisplayDatas.length ? this._rawDisplayDatas[this._displayIndex] : null;
                    null === s && (s = this._getDefaultRawDisplayData(this._displayIndex)),
                    null !== s && 1 === s.type && (n = s.actions)
                }
                if (null !== n && n.length > 0) for (var o = 0,
                l = n; o < l.length; o++) {
                    var h = l[o],
                    u = t.BaseObject.borrowObject(t.EventObject);
                    t.EventObject.actionDataToInstance(h, u, this._armature),
                    u.slot = this,
                    this._armature._bufferAction(u, !1)
                } else this._childArmature.animation.play()
            }
        },
        a.prototype._updateGlobalTransformMatrix = function(t) {
            var e = 0 === this._parent._boneData.type ? this._parent.globalTransformMatrix: this._parent._getGlobalTransformMatrix(this.global.x, this.global.y);
            this.globalTransformMatrix.copyFrom(this._localMatrix),
            this.globalTransformMatrix.concat(e),
            t ? this.global.fromMatrix(this.globalTransformMatrix) : this._globalDirty = !0
        },
        a.prototype._setDisplayIndex = function(t, e) {
            if (void 0 === e && (e = !1), e) {
                if (this._animationDisplayIndex === t) return ! 1;
                this._animationDisplayIndex = t
            }
            return this._displayIndex === t ? !1 : (this._displayIndex = t, this._displayDirty = !0, this._updateDisplayData(), this._displayDirty)
        },
        a.prototype._setZorder = function(t) {
            return this._zOrder === t,
            this._zOrder = t,
            this._zOrderDirty = !0,
            this._zOrderDirty
        },
        a.prototype._setColor = function(t) {
            return this._colorTransform.copyFrom(t),
            this._colorDirty = !0,
            this._colorDirty
        },
        a.prototype._setDisplayList = function(e) {
            if (null !== e && e.length > 0) {
                this._displayList.length !== e.length && (this._displayList.length = e.length);
                for (var a = 0,
                i = e.length; i > a; ++a) {
                    var r = e[a];
                    null !== r && r !== this._rawDisplay && r !== this._meshDisplay && !(r instanceof t.Armature) && this._displayList.indexOf(r) < 0 && this._initDisplay(r, !0),
                    this._displayList[a] = r
                }
            } else this._displayList.length > 0 && (this._displayList.length = 0);
            return this._displayIndex >= 0 && this._displayIndex < this._displayList.length ? this._displayDirty = this._display !== this._displayList[this._displayIndex] : this._displayDirty = null !== this._display,
            this._updateDisplayData(),
            this._displayDirty
        },
        a.prototype.init = function(t, e, a, i) {
            if (null === this._slotData) {
                this._slotData = t,
                this._visibleDirty = !0,
                this._blendModeDirty = !0,
                this._colorDirty = !0,
                this._blendMode = this._slotData.blendMode,
                this._zOrder = this._slotData.zOrder,
                this._colorTransform.copyFrom(this._slotData.color),
                this._rawDisplay = a,
                this._meshDisplay = i,
                this._armature = e;
                var r = this._armature.getBone(this._slotData.parent.name);
                null !== r && (this._parent = r),
                this._armature._addSlot(this),
                this._initDisplay(this._rawDisplay, !1),
                this._rawDisplay !== this._meshDisplay && this._initDisplay(this._meshDisplay, !1),
                this._onUpdateDisplay(),
                this._addDisplay()
            }
        },
        a.prototype.update = function(t) {
            if (this._displayDirty && (this._displayDirty = !1, this._updateDisplay(), this._transformDirty && (null !== this.origin ? this.global.copyFrom(this.origin).add(this.offset).toMatrix(this._localMatrix) : this.global.copyFrom(this.offset).toMatrix(this._localMatrix))), this._zOrderDirty && (this._zOrderDirty = !1, this._updateZOrder()), t >= 0 && null !== this._cachedFrameIndices) {
                var e = this._cachedFrameIndices[t];
                e >= 0 && this._cachedFrameIndex === e ? this._transformDirty = !1 : e >= 0 ? (this._transformDirty = !0, this._cachedFrameIndex = e) : this._transformDirty || this._parent._childrenTransformDirty ? (this._transformDirty = !0, this._cachedFrameIndex = -1) : this._cachedFrameIndex >= 0 ? (this._transformDirty = !1, this._cachedFrameIndices[t] = this._cachedFrameIndex) : (this._transformDirty = !0, this._cachedFrameIndex = -1)
            } else(this._transformDirty || this._parent._childrenTransformDirty) && (t = -1, this._transformDirty = !0, this._cachedFrameIndex = -1);
            if (null !== this._display) {
                if (this._visibleDirty && (this._visibleDirty = !1, this._updateVisible()), this._blendModeDirty && (this._blendModeDirty = !1, this._updateBlendMode()), this._colorDirty && (this._colorDirty = !1, this._updateColor()), null !== this._deformVertices && null !== this._deformVertices.verticesData && this._display === this._meshDisplay) {
                    var a = null !== this._deformVertices.verticesData.weight,
                    i = 0 !== this._parent._boneData.type;
                    if ((this._deformVertices.verticesDirty || a && this._deformVertices.isBonesUpdate() || i && this._parent._childrenTransformDirty) && (this._deformVertices.verticesDirty = !1, this._updateMesh()), a || i) return
                }
                if (this._transformDirty) {
                    if (this._transformDirty = !1, this._cachedFrameIndex < 0) {
                        var r = t >= 0;
                        this._updateGlobalTransformMatrix(r),
                        r && null !== this._cachedFrameIndices && (this._cachedFrameIndex = this._cachedFrameIndices[t] = this._armature._armatureData.setCacheFrame(this.globalTransformMatrix, this.global))
                    } else this._armature._armatureData.getCacheFrame(this.globalTransformMatrix, this.global, this._cachedFrameIndex);
                    this._updateTransform()
                }
            }
        },
        a.prototype.updateTransformAndMatrix = function() {
            this._transformDirty && (this._transformDirty = !1, this._updateGlobalTransformMatrix(!1))
        },
        a.prototype.replaceDisplayData = function(t, e) {
            if (void 0 === e && (e = -1), 0 > e && (e = this._displayIndex < 0 ? 0 : this._displayIndex), this._displayDatas.length <= e) {
                this._displayDatas.length = e + 1;
                for (var a = 0,
                i = this._displayDatas.length; i > a; ++a) this._displayDatas[a] || (this._displayDatas[a] = null)
            }
            this._displayDatas[e] = t
        },
        a.prototype.containsPoint = function(t, e) {
            return null === this._boundingBoxData ? !1 : (this.updateTransformAndMatrix(), a._helpMatrix.copyFrom(this.globalTransformMatrix), a._helpMatrix.invert(), a._helpMatrix.transformPoint(t, e, a._helpPoint), this._boundingBoxData.containsPoint(a._helpPoint.x, a._helpPoint.y))
        },
        a.prototype.intersectsSegment = function(t, e, i, r, n, s, o) {
            if (void 0 === n && (n = null), void 0 === s && (s = null), void 0 === o && (o = null), null === this._boundingBoxData) return 0;
            this.updateTransformAndMatrix(),
            a._helpMatrix.copyFrom(this.globalTransformMatrix),
            a._helpMatrix.invert(),
            a._helpMatrix.transformPoint(t, e, a._helpPoint),
            t = a._helpPoint.x,
            e = a._helpPoint.y,
            a._helpMatrix.transformPoint(i, r, a._helpPoint),
            i = a._helpPoint.x,
            r = a._helpPoint.y;
            var l = this._boundingBoxData.intersectsSegment(t, e, i, r, n, s, o);
            return l > 0 && (1 === l || 2 === l ? null !== n ? (this.globalTransformMatrix.transformPoint(n.x, n.y, n), null !== s && (s.x = n.x, s.y = n.y)) : null !== s && this.globalTransformMatrix.transformPoint(s.x, s.y, s) : (null !== n && this.globalTransformMatrix.transformPoint(n.x, n.y, n), null !== s && this.globalTransformMatrix.transformPoint(s.x, s.y, s)), null !== o && (this.globalTransformMatrix.transformPoint(Math.cos(o.x), Math.sin(o.x), a._helpPoint, !0), o.x = Math.atan2(a._helpPoint.y, a._helpPoint.x), this.globalTransformMatrix.transformPoint(Math.cos(o.y), Math.sin(o.y), a._helpPoint, !0), o.y = Math.atan2(a._helpPoint.y, a._helpPoint.x))),
            l
        },
        a.prototype.invalidUpdate = function() {
            this._displayDirty = !0,
            this._transformDirty = !0
        },
        Object.defineProperty(a.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(t) {
                this._visible !== t && (this._visible = t, this._updateVisible())
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "displayIndex", {
            get: function() {
                return this._displayIndex
            },
            set: function(t) {
                this._setDisplayIndex(t) && this.update( - 1)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "name", {
            get: function() {
                return this._slotData.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "displayList", {
            get: function() {
                return this._displayList.concat()
            },
            set: function(e) {
                var a = this._displayList.concat(),
                i = new Array;
                this._setDisplayList(e) && this.update( - 1);
                for (var r = 0,
                n = a; r < n.length; r++) {
                    var s = n[r];
                    null !== s && s !== this._rawDisplay && s !== this._meshDisplay && this._displayList.indexOf(s) < 0 && i.indexOf(s) < 0 && i.push(s)
                }
                for (var o = 0,
                l = i; o < l.length; o++) {
                    var s = l[o];
                    s instanceof t.Armature || this._disposeDisplay(s, !0)
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "slotData", {
            get: function() {
                return this._slotData
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "rawDisplayDatas", {
            get: function() {
                return this._rawDisplayDatas
            },
            set: function(t) {
                if (this._rawDisplayDatas !== t) if (this._displayDirty = !0, this._rawDisplayDatas = t, null !== this._rawDisplayDatas) {
                    this._displayDatas.length = this._rawDisplayDatas.length;
                    for (var e = 0,
                    a = this._displayDatas.length; a > e; ++e) {
                        var i = this._rawDisplayDatas[e];
                        null === i && (i = this._getDefaultRawDisplayData(e)),
                        this._displayDatas[e] = i
                    }
                } else this._displayDatas.length = 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "displayData", {
            get: function() {
                return this._displayData
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "boundingBoxData", {
            get: function() {
                return this._boundingBoxData
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "rawDisplay", {
            get: function() {
                return this._rawDisplay
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "meshDisplay", {
            get: function() {
                return this._meshDisplay
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "display", {
            get: function() {
                return this._display
            },
            set: function(t) {
                if (this._display !== t) {
                    var e = this._displayList.length;
                    if (this._displayIndex < 0 && 0 === e && (this._displayIndex = 0), !(this._displayIndex < 0)) {
                        var a = this.displayList;
                        e <= this._displayIndex && (a.length = this._displayIndex + 1),
                        a[this._displayIndex] = t,
                        this.displayList = a
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "childArmature", {
            get: function() {
                return this._childArmature
            },
            set: function(t) {
                this._childArmature !== t && (this.display = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "parent", {
            get: function() {
                return this._parent
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.getDisplay = function() {
            return this._display
        },
        a.prototype.setDisplay = function(t) {
            this.display = t
        },
        a
    } (t.TransformObject);
    t.Slot = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(a, e),
        a.prototype._onClear = function() {
            this._armature = null,
            this._target = null,
            this._root = null,
            this._bone = null
        },
        Object.defineProperty(a.prototype, "name", {
            get: function() {
                return this._constraintData.name
            },
            enumerable: !0,
            configurable: !0
        }),
        a._helpMatrix = new t.Matrix,
        a._helpTransform = new t.Transform,
        a._helpPoint = new t.Point,
        a
    } (t.BaseObject);
    t.Constraint = e;
    var a = function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.IKConstraint]"
        },
        a.prototype._onClear = function() {
            e.prototype._onClear.call(this),
            this._scaleEnabled = !1,
            this._bendPositive = !1,
            this._weight = 1,
            this._constraintData = null
        },
        a.prototype._computeA = function() {
            var e = this._target.global,
            a = this._root.global,
            i = this._root.globalTransformMatrix,
            r = Math.atan2(e.y - a.y, e.x - a.x);
            a.scaleX < 0 && (r += Math.PI),
            a.rotation += t.Transform.normalizeRadian(r - a.rotation) * this._weight,
            a.toMatrix(i)
        },
        a.prototype._computeB = function() {
            var e = this._bone._boneData.length,
            a = this._root,
            i = this._target.global,
            r = a.global,
            n = this._bone.global,
            s = this._bone.globalTransformMatrix,
            o = s.a * e,
            l = s.b * e,
            h = o * o + l * l,
            u = Math.sqrt(h),
            _ = n.x - r.x,
            f = n.y - r.y,
            c = _ * _ + f * f,
            p = Math.sqrt(c),
            m = n.rotation,
            d = r.rotation,
            y = Math.atan2(f, _);
            _ = i.x - r.x,
            f = i.y - r.y;
            var g = _ * _ + f * f,
            v = Math.sqrt(g),
            b = 0;
            if (v >= u + p || p >= v + u || u >= v + p) b = Math.atan2(i.y - r.y, i.x - r.x),
            v >= u + p || u > p && (b += Math.PI);
            else {
                var D = (c - h + g) / (2 * g),
                T = Math.sqrt(c - D * D * g) / v,
                A = r.x + _ * D,
                x = r.y + f * D,
                O = -f * T,
                P = _ * T,
                E = !1,
                S = a.parent;
                if (null !== S) {
                    var M = S.globalTransformMatrix;
                    E = M.a * M.d - M.b * M.c < 0
                }
                E !== this._bendPositive ? (n.x = A - O, n.y = x - P) : (n.x = A + O, n.y = x + P),
                b = Math.atan2(n.y - r.y, n.x - r.x)
            }
            var B = t.Transform.normalizeRadian(b - y);
            r.rotation = d + B * this._weight,
            r.toMatrix(a.globalTransformMatrix);
            var C = y + B * this._weight;
            n.x = r.x + Math.cos(C) * p,
            n.y = r.y + Math.sin(C) * p;
            var w = Math.atan2(i.y - n.y, i.x - n.x);
            n.scaleX < 0 && (w += Math.PI),
            n.rotation = r.rotation + m - d + t.Transform.normalizeRadian(w - B - m) * this._weight,
            n.toMatrix(s)
        },
        a.prototype.init = function(t, e) {
            if (null === this._constraintData) {
                this._constraintData = t,
                this._armature = e,
                this._target = this._armature.getBone(this._constraintData.target.name),
                this._root = this._armature.getBone(this._constraintData.root.name),
                this._bone = null !== this._constraintData.bone ? this._armature.getBone(this._constraintData.bone.name) : null;
                var a = this._constraintData;
                this._scaleEnabled = a.scaleEnabled,
                this._bendPositive = a.bendPositive,
                this._weight = a.weight,
                this._root._hasConstraint = !0
            }
        },
        a.prototype.update = function() {
            this._root.updateByConstraint(),
            null !== this._bone ? (this._bone.updateByConstraint(), this._computeB()) : this._computeA()
        },
        a.prototype.invalidUpdate = function() {
            this._root.invalidUpdate(),
            null !== this._bone && this._bone.invalidUpdate()
        },
        a
    } (e);
    t.IKConstraint = a;
    var i = function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._bones = [],
            t._spaces = [],
            t._positions = [],
            t._curves = [],
            t._boneLengths = [],
            t._pathGlobalVertices = [],
            t._segments = [10],
            t
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.PathConstraint]"
        },
        a.prototype._onClear = function() {
            e.prototype._onClear.call(this),
            this.dirty = !1,
            this.pathOffset = 0,
            this.position = 0,
            this.spacing = 0,
            this.rotateOffset = 0,
            this.rotateMix = 1,
            this.translateMix = 1,
            this._pathSlot = null,
            this._bones.length = 0,
            this._spaces.length = 0,
            this._positions.length = 0,
            this._curves.length = 0,
            this._boneLengths.length = 0,
            this._pathGlobalVertices.length = 0
        },
        a.prototype._updatePathVertices = function(t) {
            var e = this._armature,
            a = e.armatureData.parent,
            i = e.armatureData.scale,
            r = a.intArray,
            n = a.floatArray,
            s = t.offset,
            o = r[s + 0],
            l = r[s + 2];
            this._pathGlobalVertices.length = 2 * o;
            var h = t.weight;
            if (null !== h) for (var u = this._pathSlot._deformVertices.bones,
            _ = h.bones.length,
            f = h.offset,
            c = r[f + 1], p = c, m = f + 2 + _, d = 0, y = 0; o > d; d++) {
                for (var g = r[m++], v = 0, b = 0, D = 0, T = g; T > D; D++) {
                    var A = r[m++],
                    x = u[A];
                    if (null !== x) {
                        x.updateByConstraint();
                        var O = x.globalTransformMatrix,
                        P = n[p++],
                        E = n[p++] * i,
                        S = n[p++] * i;
                        v += (O.a * E + O.c * S + O.tx) * P,
                        b += (O.b * E + O.d * S + O.ty) * P
                    }
                }
                this._pathGlobalVertices[y++] = v,
                this._pathGlobalVertices[y++] = b
            } else {
                var M = this._pathSlot.parent;
                M.updateByConstraint();
                for (var O = M.globalTransformMatrix,
                d = 0,
                B = l; o > d; d += 2) {
                    var E = n[B++] * i,
                    S = n[B++] * i,
                    C = O.a * E + O.c * S + O.tx,
                    w = O.b * E + O.d * S + O.ty;
                    this._pathGlobalVertices[d] = C,
                    this._pathGlobalVertices[d + 1] = w
                }
            }
        },
        a.prototype._computeVertices = function(t, e, a, i) {
            for (var r = a,
            n = t; e > r; r += 2) i[r] = this._pathGlobalVertices[n++],
            i[r + 1] = this._pathGlobalVertices[n++]
        },
        a.prototype._computeBezierCurve = function(t, e, a, i, r) {
            var n = this._armature,
            s = n.armatureData.parent.intArray,
            o = s[t.vertices.offset + 0],
            l = this._positions,
            h = this._spaces,
            u = t.closed,
            _ = Array(),
            f = 2 * o,
            c = f / 6,
            p = -1,
            m = this.position;
            l.length = 3 * e + 2;
            var d = 0;
            if (t.constantSpeed) {
                u ? (f += 2, _.length = o, this._computeVertices(2, f - 4, 0, _), this._computeVertices(0, 2, f - 4, _), _[f - 2] = _[0], _[f - 1] = _[1]) : (c--, f -= 4, _.length = f, this._computeVertices(2, f, 0, _));
                var y = new Array(c);
                d = 0;
                for (var g, v, b, D, T, A, x, O, P = _[0], E = _[1], S = 0, M = 0, B = 0, C = 0, w = 0, I = 0, F = 0, N = 2; c > F; F++, N += 6) S = _[N],
                M = _[N + 1],
                B = _[N + 2],
                C = _[N + 3],
                w = _[N + 4],
                I = _[N + 5],
                g = .1875 * (P - 2 * S + B),
                v = .1875 * (E - 2 * M + C),
                b = .09375 * (3 * (S - B) - P + w),
                D = .09375 * (3 * (M - C) - E + I),
                T = 2 * g + b,
                A = 2 * v + D,
                x = .75 * (S - P) + g + .16666667 * b,
                O = .75 * (M - E) + v + .16666667 * D,
                d += Math.sqrt(x * x + O * O),
                x += T,
                O += A,
                T += b,
                A += D,
                d += Math.sqrt(x * x + O * O),
                x += T,
                O += A,
                d += Math.sqrt(x * x + O * O),
                x += T + b,
                O += A + D,
                d += Math.sqrt(x * x + O * O),
                y[F] = d,
                P = w,
                E = I;
                if (i && (m *= d), r) for (var F = 0; e > F; F++) h[F] *= d;
                for (var R = this._segments,
                j = 0,
                F = 0,
                k = 0,
                L = 0,
                V = 0; e > F; F++, k += 3) {
                    var U = h[F];
                    m += U;
                    var Y = m;
                    if (u) Y %= d,
                    0 > Y && (Y += d),
                    L = 0;
                    else {
                        if (0 > Y) continue;
                        if (Y > d) continue
                    }
                    for (;; L++) {
                        var X = y[L];
                        if (! (Y > X)) {
                            if (0 === L) Y /= X;
                            else {
                                var G = y[L - 1];
                                Y = (Y - G) / (X - G)
                            }
                            break
                        }
                    }
                    if (L !== p) {
                        p = L;
                        var H = 6 * L;
                        for (P = _[H], E = _[H + 1], S = _[H + 2], M = _[H + 3], B = _[H + 4], C = _[H + 5], w = _[H + 6], I = _[H + 7], g = .03 * (P - 2 * S + B), v = .03 * (E - 2 * M + C), b = .006 * (3 * (S - B) - P + w), D = .006 * (3 * (M - C) - E + I), T = 2 * g + b, A = 2 * v + D, x = .3 * (S - P) + g + .16666667 * b, O = .3 * (M - E) + v + .16666667 * D, j = Math.sqrt(x * x + O * O), R[0] = j, H = 1; 8 > H; H++) x += T,
                        O += A,
                        T += b,
                        A += D,
                        j += Math.sqrt(x * x + O * O),
                        R[H] = j;
                        x += T,
                        O += A,
                        j += Math.sqrt(x * x + O * O),
                        R[8] = j,
                        x += T + b,
                        O += A + D,
                        j += Math.sqrt(x * x + O * O),
                        R[9] = j,
                        V = 0
                    }
                    for (Y *= j;; V++) {
                        var $ = R[V];
                        if (! (Y > $)) {
                            if (0 === V) Y /= $;
                            else {
                                var G = R[V - 1];
                                Y = V + (Y - G) / ($ - G)
                            }
                            break
                        }
                    }
                    this.addCurvePosition(.1 * Y, P, E, S, M, B, C, w, I, l, k, a)
                }
            } else {
                var W = t.curveLengths;
                if (c -= u ? 1 : 2, d = W[c], i && (m *= d), r) for (var F = 0; e > F; F++) h[F] *= d;
                _.length = 8;
                for (var F = 0,
                k = 0,
                L = 0; e > F; F++, k += 3) {
                    var U = h[F];
                    if (m += U, u) m %= d,
                    0 > m && (m += d),
                    L = 0;
                    else {
                        if (0 > m) continue;
                        if (m > d) continue
                    }
                    for (var z = 0;; L++) {
                        var K = W[L];
                        if (! (m > K)) {
                            if (0 === L) z = m / K;
                            else {
                                var Z = W[L - 1];
                                z = (m - Z) / (K - Z)
                            }
                            break
                        }
                    }
                    L !== p && (p = L, u && L === c ? (this._computeVertices(f - 4, 4, 0, _), this._computeVertices(0, 4, 4, _)) : this._computeVertices(6 * L + 2, 8, 0, _)),
                    this.addCurvePosition(z, _[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7], l, k, a)
                }
            }
        },
        a.prototype.addCurvePosition = function(t, e, a, i, r, n, s, o, l, h, u, _) {
            if (0 === t) return h[u] = e,
            h[u + 1] = a,
            void(h[u + 2] = 0);
            if (1 === t) return h[u] = o,
            h[u + 1] = l,
            void(h[u + 2] = 0);
            var f = 1 - t,
            c = f * f,
            p = t * t,
            m = c * f,
            d = c * t * 3,
            y = f * p * 3,
            g = t * p,
            v = m * e + d * i + y * n + g * o,
            b = m * a + d * r + y * s + g * l;
            h[u] = v,
            h[u + 1] = b,
            _ ? h[u + 2] = Math.atan2(b - (m * a + d * r + y * s), v - (m * e + d * i + y * n)) : h[u + 2] = 0
        },
        a.prototype.init = function(t, e) {
            this._constraintData = t,
            this._armature = e;
            var a = t;
            this.pathOffset = a.pathDisplayData.vertices.offset,
            this.position = a.position,
            this.spacing = a.spacing,
            this.rotateOffset = a.rotateOffset,
            this.rotateMix = a.rotateMix,
            this.translateMix = a.translateMix,
            this._root = this._armature.getBone(a.root.name),
            this._target = this._armature.getBone(a.target.name),
            this._pathSlot = this._armature.getSlot(a.pathSlot.name);
            for (var i = 0,
            r = a.bones.length; r > i; i++) {
                var n = this._armature.getBone(a.bones[i].name);
                null !== n && this._bones.push(n)
            }
            2 === a.rotateMode && (this._boneLengths.length = this._bones.length),
            this._root._hasConstraint = !0
        },
        a.prototype.update = function() {
            var e = this._pathSlot;
            if (null !== e._deformVertices && null !== e._deformVertices.verticesData && e._deformVertices.verticesData.offset === this.pathOffset) {
                var a = this._constraintData,
                i = e._displayData,
                r = !1,
                n = e._deformVertices;
                if (this._root._childrenTransformDirty ? (this._updatePathVertices(i.vertices), r = !0) : null !== n && (n.verticesDirty || n.isBonesUpdate()) && (this._updatePathVertices(i.vertices), n.verticesDirty = !1, r = !0), r || this.dirty) {
                    var s = a.positionMode,
                    o = a.spacingMode,
                    l = a.rotateMode,
                    h = this._bones,
                    u = 0 === o,
                    _ = 2 === l,
                    f = 0 === l,
                    c = h.length,
                    p = f ? c: c + 1,
                    m = this.spacing,
                    d = this._spaces;
                    if (d.length = p, _ || u) {
                        d[0] = 0;
                        for (var y = 0,
                        g = p - 1; g > y; y++) {
                            var v = h[y];
                            v.updateByConstraint();
                            var b = v._boneData.length,
                            D = v.globalTransformMatrix,
                            T = b * D.a,
                            A = b * D.b,
                            x = Math.sqrt(T * T + A * A);
                            _ && (this._boneLengths[y] = x),
                            d[y + 1] = (b + m) * x / b
                        }
                    } else for (var y = 0; p > y; y++) d[y] = m;
                    this._computeBezierCurve(i, p, f, 1 === s, 2 === o);
                    var O, P = this._positions,
                    E = this.rotateOffset,
                    S = P[0],
                    M = P[1];
                    if (0 === E) O = 1 === l;
                    else {
                        O = !1;
                        var v = e.parent;
                        if (null !== v) {
                            var D = v.globalTransformMatrix;
                            E *= D.a * D.d - D.b * D.c > 0 ? t.Transform.DEG_RAD: -t.Transform.DEG_RAD
                        }
                    }
                    for (var B = this.rotateMix,
                    C = this.translateMix,
                    y = 0,
                    w = 3; c > y; y++, w += 3) {
                        var v = h[y];
                        v.updateByConstraint();
                        var D = v.globalTransformMatrix;
                        D.tx += (S - D.tx) * C,
                        D.ty += (M - D.ty) * C;
                        var T = P[w],
                        A = P[w + 1],
                        I = T - S,
                        F = A - M;
                        if (_) {
                            var N = this._boneLengths[y],
                            R = (Math.sqrt(I * I + F * F) / N - 1) * B + 1;
                            D.a *= R,
                            D.b *= R
                        }
                        if (S = T, M = A, B > 0) {
                            var j = D.a,
                            k = D.b,
                            L = D.c,
                            V = D.d,
                            U = void 0,
                            Y = void 0,
                            X = void 0;
                            if (U = f ? P[w - 1] : Math.atan2(F, I), U -= Math.atan2(k, j), O) {
                                Y = Math.cos(U),
                                X = Math.sin(U);
                                var G = v._boneData.length;
                                S += (G * (Y * j - X * k) - I) * B,
                                M += (G * (X * j + Y * k) - F) * B
                            } else U += E;
                            U > t.Transform.PI ? U -= t.Transform.PI_D: U < -t.Transform.PI && (U += t.Transform.PI_D),
                            U *= B,
                            Y = Math.cos(U),
                            X = Math.sin(U),
                            D.a = Y * j - X * k,
                            D.b = X * j + Y * k,
                            D.c = Y * L - X * V,
                            D.d = X * L + Y * V
                        }
                        v.global.fromMatrix(D)
                    }
                    this.dirty = !1
                }
            }
        },
        a.prototype.invalidUpdate = function() {},
        a
    } (e);
    t.PathConstraint = i
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function t(t) {
            void 0 === t && (t = 0),
            this.time = 0,
            this.timeScale = 1,
            this._systemTime = 0,
            this._animatebles = [],
            this._clock = null,
            this.time = t,
            this._systemTime = .001 * (new Date).getTime()
        }
        return t.prototype.advanceTime = function(t) {
            t !== t && (t = 0);
            var e = .001 * Date.now();
            if (0 > t && (t = e - this._systemTime), this._systemTime = e, 1 !== this.timeScale && (t *= this.timeScale), 0 !== t) {
                0 > t ? this.time -= t: this.time += t;
                for (var a = 0,
                i = 0,
                r = this._animatebles.length; r > a; ++a) {
                    var n = this._animatebles[a];
                    null !== n ? (i > 0 && (this._animatebles[a - i] = n, this._animatebles[a] = null), n.advanceTime(t)) : i++
                }
                if (i > 0) {
                    for (r = this._animatebles.length; r > a; ++a) {
                        var s = this._animatebles[a];
                        null !== s ? this._animatebles[a - i] = s: i++
                    }
                    this._animatebles.length -= i
                }
            }
        },
        t.prototype.contains = function(t) {
            if (t === this) return ! 1;
            for (var e = t; e !== this && null !== e;) e = e.clock;
            return e === this
        },
        t.prototype.add = function(t) {
            this._animatebles.indexOf(t) < 0 && (this._animatebles.push(t), t.clock = this)
        },
        t.prototype.remove = function(t) {
            var e = this._animatebles.indexOf(t);
            e >= 0 && (this._animatebles[e] = null, t.clock = null)
        },
        t.prototype.clear = function() {
            for (var t = 0,
            e = this._animatebles; t < e.length; t++) {
                var a = e[t];
                null !== a && (a.clock = null)
            }
        },
        Object.defineProperty(t.prototype, "clock", {
            get: function() {
                return this._clock
            },
            set: function(t) {
                this._clock !== t && (null !== this._clock && this._clock.remove(this), this._clock = t, null !== this._clock && this._clock.add(this))
            },
            enumerable: !0,
            configurable: !0
        }),
        t.clock = new t,
        t
    } ();
    t.WorldClock = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._animationNames = [],
            t._animationStates = [],
            t._animations = {},
            t._animationConfig = null,
            t
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.Animation]"
        },
        a.prototype._onClear = function() {
            for (var t = 0,
            e = this._animationStates; t < e.length; t++) {
                var a = e[t];
                a.returnToPool()
            }
            for (var i in this._animations) delete this._animations[i];
            null !== this._animationConfig && this._animationConfig.returnToPool(),
            this.timeScale = 1,
            this._lockUpdate = !1,
            this._animationDirty = !1,
            this._inheritTimeScale = 1,
            this._animationNames.length = 0,
            this._animationStates.length = 0,
            this._armature = null,
            this._animationConfig = null,
            this._lastAnimationState = null
        },
        a.prototype._fadeOut = function(t) {
            switch (t.fadeOutMode) {
            case 1:
                for (var e = 0,
                a = this._animationStates; e < a.length; e++) {
                    var i = a[e];
                    null === i._parent && i.layer === t.layer && i.fadeOut(t.fadeOutTime, t.pauseFadeOut)
                }
                break;
            case 2:
                for (var r = 0,
                n = this._animationStates; r < n.length; r++) {
                    var i = n[r];
                    null === i._parent && i.group === t.group && i.fadeOut(t.fadeOutTime, t.pauseFadeOut)
                }
                break;
            case 3:
                for (var s = 0,
                o = this._animationStates; s < o.length; s++) {
                    var i = o[s];
                    null === i._parent && i.layer === t.layer && i.group === t.group && i.fadeOut(t.fadeOutTime, t.pauseFadeOut)
                }
                break;
            case 4:
                for (var l = 0,
                h = this._animationStates; l < h.length; l++) {
                    var i = h[l];
                    null === i._parent && i.fadeOut(t.fadeOutTime, t.pauseFadeOut)
                }
                break;
            case 0:
            case 5:
            }
        },
        a.prototype.init = function(e) {
            null === this._armature && (this._armature = e, this._animationConfig = t.BaseObject.borrowObject(t.AnimationConfig))
        },
        a.prototype.advanceTime = function(t) {
            0 > t && (t = -t),
            this._armature.inheritAnimation && null !== this._armature._parent ? this._inheritTimeScale = this._armature._parent._armature.animation._inheritTimeScale * this.timeScale: this._inheritTimeScale = this.timeScale,
            1 !== this._inheritTimeScale && (t *= this._inheritTimeScale);
            var e = this._animationStates.length;
            if (1 === e) {
                var a = this._animationStates[0];
                if (a._fadeState > 0 && a._subFadeState > 0) this._armature._dragonBones.bufferObject(a),
                this._animationStates.length = 0,
                this._lastAnimationState = null;
                else {
                    var i = a._animationData,
                    r = i.cacheFrameRate;
                    if (this._animationDirty && r > 0) {
                        this._animationDirty = !1;
                        for (var n = 0,
                        s = this._armature.getBones(); n < s.length; n++) {
                            var o = s[n];
                            o._cachedFrameIndices = i.getBoneCachedFrameIndices(o.name)
                        }
                        for (var l = 0,
                        h = this._armature.getSlots(); l < h.length; l++) {
                            var u = h[l],
                            _ = u.rawDisplayDatas;
                            if (null !== _ && _.length > 0) {
                                var f = _[0];
                                if (null !== f && f.parent === this._armature.armatureData.defaultSkin) {
                                    u._cachedFrameIndices = i.getSlotCachedFrameIndices(u.name);
                                    continue
                                }
                            }
                            u._cachedFrameIndices = null
                        }
                    }
                    a.advanceTime(t, r)
                }
            } else if (e > 1) {
                for (var c = 0,
                p = 0; e > c; ++c) {
                    var a = this._animationStates[c];
                    a._fadeState > 0 && a._subFadeState > 0 ? (p++, this._armature._dragonBones.bufferObject(a), this._animationDirty = !0, this._lastAnimationState === a && (this._lastAnimationState = null)) : (p > 0 && (this._animationStates[c - p] = a), a.advanceTime(t, 0)),
                    c === e - 1 && p > 0 && (this._animationStates.length -= p, null === this._lastAnimationState && this._animationStates.length > 0 && (this._lastAnimationState = this._animationStates[this._animationStates.length - 1]))
                }
                this._armature._cacheFrameIndex = -1
            } else this._armature._cacheFrameIndex = -1
        },
        a.prototype.reset = function() {
            for (var t = 0,
            e = this._animationStates; t < e.length; t++) {
                var a = e[t];
                a.returnToPool()
            }
            this._animationDirty = !1,
            this._animationConfig.clear(),
            this._animationStates.length = 0,
            this._lastAnimationState = null
        },
        a.prototype.stop = function(t) {
            if (void 0 === t && (t = null), null !== t) {
                var e = this.getState(t);
                null !== e && e.stop()
            } else for (var a = 0,
            i = this._animationStates; a < i.length; a++) {
                var e = i[a];
                e.stop()
            }
        },
        a.prototype.playConfig = function(e) {
            var a = e.animation;
            if (! (a in this._animations)) return console.warn("Non-existent animation.\n", "DragonBones name: " + this._armature.armatureData.parent.name, "Armature name: " + this._armature.name, "Animation name: " + a),
            null;
            var i = this._animations[a];
            if (5 === e.fadeOutMode) for (var r = 0,
            n = this._animationStates; r < n.length; r++) {
                var s = n[r];
                if (s._animationData === i) return s
            }
            0 === this._animationStates.length ? e.fadeInTime = 0 : e.fadeInTime < 0 && (e.fadeInTime = i.fadeInTime),
            e.fadeOutTime < 0 && (e.fadeOutTime = e.fadeInTime),
            e.timeScale <= -100 && (e.timeScale = 1 / i.scale),
            i.frameCount > 1 ? (e.position < 0 ? (e.position %= i.duration, e.position = i.duration - e.position) : e.position === i.duration ? e.position -= 1e-6: e.position > i.duration && (e.position %= i.duration), e.duration > 0 && e.position + e.duration > i.duration && (e.duration = i.duration - e.position), e.playTimes < 0 && (e.playTimes = i.playTimes)) : (e.playTimes = 1, e.position = 0, e.duration > 0 && (e.duration = 0)),
            0 === e.duration && (e.duration = -1),
            this._fadeOut(e);
            var o = t.BaseObject.borrowObject(t.AnimationState);
            if (o.init(this._armature, i, e), this._animationDirty = !0, this._armature._cacheFrameIndex = -1, this._animationStates.length > 0) {
                for (var l = !1,
                h = 0,
                u = this._animationStates.length; u > h; ++h) {
                    if (o.layer > this._animationStates[h].layer) {
                        l = !0,
                        this._animationStates.splice(h, 0, o);
                        break
                    }
                    if (h !== u - 1 && o.layer > this._animationStates[h + 1].layer) {
                        l = !0,
                        this._animationStates.splice(h + 1, 0, o);
                        break
                    }
                }
                l || this._animationStates.push(o)
            } else this._animationStates.push(o);
            for (var _ = 0,
            f = this._armature.getSlots(); _ < f.length; _++) {
                var c = f[_],
                p = c.childArmature;
                null !== p && p.inheritAnimation && p.animation.hasAnimation(a) && null === p.animation.getState(a) && p.animation.fadeIn(a)
            }
            var m = !1;
            for (var d in i.animationTimelines) {
                this._lockUpdate || (m = !0, this._lockUpdate = !0);
                var y = this.fadeIn(d, e.fadeInTime, 1, o.layer, null, 0);
                null !== y && (y.resetToPose = !1, y._parent = o, y.stop())
            }
            return m && (this._lockUpdate = !1),
            this._lockUpdate || (e.fadeInTime <= 0 && this._armature.advanceTime(0), this._lastAnimationState = o),
            o
        },
        a.prototype.play = function(t, e) {
            if (void 0 === t && (t = null), void 0 === e && (e = -1), this._animationConfig.clear(), this._animationConfig.resetToPose = !0, this._animationConfig.playTimes = e, this._animationConfig.fadeInTime = 0, this._animationConfig.animation = null !== t ? t: "", null !== t && t.length > 0) this.playConfig(this._animationConfig);
            else if (null === this._lastAnimationState) {
                var a = this._armature.armatureData.defaultAnimation;
                null !== a && (this._animationConfig.animation = a.name, this.playConfig(this._animationConfig))
            } else this._lastAnimationState.isPlaying || this._lastAnimationState.isCompleted ? (this._animationConfig.animation = this._lastAnimationState.name, this.playConfig(this._animationConfig)) : this._lastAnimationState.play();
            return this._lastAnimationState
        },
        a.prototype.fadeIn = function(t, e, a, i, r, n) {
            return void 0 === e && (e = -1),
            void 0 === a && (a = -1),
            void 0 === i && (i = 0),
            void 0 === r && (r = null),
            void 0 === n && (n = 3),
            this._animationConfig.clear(),
            this._animationConfig.fadeOutMode = n,
            this._animationConfig.playTimes = a,
            this._animationConfig.layer = i,
            this._animationConfig.fadeInTime = e,
            this._animationConfig.animation = t,
            this._animationConfig.group = null !== r ? r: "",
            this.playConfig(this._animationConfig)
        },
        a.prototype.gotoAndPlayByTime = function(t, e, a) {
            return void 0 === e && (e = 0),
            void 0 === a && (a = -1),
            this._animationConfig.clear(),
            this._animationConfig.resetToPose = !0,
            this._animationConfig.playTimes = a,
            this._animationConfig.position = e,
            this._animationConfig.fadeInTime = 0,
            this._animationConfig.animation = t,
            this.playConfig(this._animationConfig)
        },
        a.prototype.gotoAndPlayByFrame = function(t, e, a) {
            void 0 === e && (e = 0),
            void 0 === a && (a = -1),
            this._animationConfig.clear(),
            this._animationConfig.resetToPose = !0,
            this._animationConfig.playTimes = a,
            this._animationConfig.fadeInTime = 0,
            this._animationConfig.animation = t;
            var i = t in this._animations ? this._animations[t] : null;
            return null !== i && (this._animationConfig.position = i.duration * e / i.frameCount),
            this.playConfig(this._animationConfig)
        },
        a.prototype.gotoAndPlayByProgress = function(t, e, a) {
            void 0 === e && (e = 0),
            void 0 === a && (a = -1),
            this._animationConfig.clear(),
            this._animationConfig.resetToPose = !0,
            this._animationConfig.playTimes = a,
            this._animationConfig.fadeInTime = 0,
            this._animationConfig.animation = t;
            var i = t in this._animations ? this._animations[t] : null;
            return null !== i && (this._animationConfig.position = i.duration * (e > 0 ? e: 0)),
            this.playConfig(this._animationConfig)
        },
        a.prototype.gotoAndStopByTime = function(t, e) {
            void 0 === e && (e = 0);
            var a = this.gotoAndPlayByTime(t, e, 1);
            return null !== a && a.stop(),
            a
        },
        a.prototype.gotoAndStopByFrame = function(t, e) {
            void 0 === e && (e = 0);
            var a = this.gotoAndPlayByFrame(t, e, 1);
            return null !== a && a.stop(),
            a
        },
        a.prototype.gotoAndStopByProgress = function(t, e) {
            void 0 === e && (e = 0);
            var a = this.gotoAndPlayByProgress(t, e, 1);
            return null !== a && a.stop(),
            a
        },
        a.prototype.getState = function(t) {
            for (var e = this._animationStates.length; e--;) {
                var a = this._animationStates[e];
                if (a.name === t) return a
            }
            return null
        },
        a.prototype.hasAnimation = function(t) {
            return t in this._animations
        },
        a.prototype.getStates = function() {
            return this._animationStates
        },
        Object.defineProperty(a.prototype, "isPlaying", {
            get: function() {
                for (var t = 0,
                e = this._animationStates; t < e.length; t++) {
                    var a = e[t];
                    if (a.isPlaying) return ! 0
                }
                return ! 1
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "isCompleted", {
            get: function() {
                for (var t = 0,
                e = this._animationStates; t < e.length; t++) {
                    var a = e[t];
                    if (!a.isCompleted) return ! 1
                }
                return this._animationStates.length > 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "lastAnimationName", {
            get: function() {
                return null !== this._lastAnimationState ? this._lastAnimationState.name: ""
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animationNames", {
            get: function() {
                return this._animationNames
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animations", {
            get: function() {
                return this._animations
            },
            set: function(t) {
                if (this._animations !== t) {
                    this._animationNames.length = 0;
                    for (var e in this._animations) delete this._animations[e];
                    for (var e in t) this._animationNames.push(e),
                    this._animations[e] = t[e]
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animationConfig", {
            get: function() {
                return this._animationConfig.clear(),
                this._animationConfig
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "lastAnimationState", {
            get: function() {
                return this._lastAnimationState
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.gotoAndPlay = function(t, e, a, i, r, n, s, o, l) {
            void 0 === e && (e = -1),
            void 0 === a && (a = -1),
            void 0 === i && (i = -1),
            void 0 === r && (r = 0),
            void 0 === n && (n = null),
            void 0 === s && (s = 3),
            void 0 === o && (o = !0),
            void 0 === l && (l = !0),
            this._animationConfig.clear(),
            this._animationConfig.resetToPose = !0,
            this._animationConfig.fadeOutMode = s,
            this._animationConfig.playTimes = i,
            this._animationConfig.layer = r,
            this._animationConfig.fadeInTime = e,
            this._animationConfig.animation = t,
            this._animationConfig.group = null !== n ? n: "";
            var h = this._animations[t];
            return h && a > 0 && (this._animationConfig.timeScale = h.duration / a),
            this.playConfig(this._animationConfig)
        },
        a.prototype.gotoAndStop = function(t, e) {
            return void 0 === e && (e = 0),
            console.warn("Deprecated."),
            this.gotoAndStopByTime(t, e)
        },
        Object.defineProperty(a.prototype, "animationList", {
            get: function() {
                return console.warn("Deprecated."),
                this._animationNames
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animationDataList", {
            get: function() {
                console.warn("Deprecated.");
                for (var t = [], e = 0, a = this._animationNames.length; a > e; ++e) t.push(this._animations[this._animationNames[e]]);
                return t
            },
            enumerable: !0,
            configurable: !0
        }),
        a
    } (t.BaseObject);
    t.Animation = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function r() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._blendState = new i,
            t._boneMask = [],
            t._boneTimelines = [],
            t._surfaceTimelines = [],
            t._slotTimelines = [],
            t._constraintTimelines = [],
            t._animationTimelines = [],
            t._poseTimelines = [],
            t._bonePoses = {},
            t._actionTimeline = null,
            t._zOrderTimeline = null,
            t._parent = null,
            t
        }
        return __extends(r, e),
        r.toString = function() {
            return "[class dragonBones.AnimationState]"
        },
        r.prototype._onClear = function() {
            for (var t = 0,
            e = this._boneTimelines; t < e.length; t++) {
                var a = e[t];
                a.returnToPool()
            }
            for (var i = 0,
            r = this._surfaceTimelines; i < r.length; i++) {
                var a = r[i];
                a.returnToPool()
            }
            for (var n = 0,
            s = this._slotTimelines; n < s.length; n++) {
                var a = s[n];
                a.returnToPool()
            }
            for (var o = 0,
            l = this._constraintTimelines; o < l.length; o++) {
                var a = l[o];
                a.returnToPool()
            }
            for (var h = 0,
            u = this._animationTimelines; h < u.length; h++) {
                var a = u[h];
                a.returnToPool()
            }
            for (var _ in this._bonePoses) this._bonePoses[_].returnToPool(),
            delete this._bonePoses[_];
            null !== this._actionTimeline && this._actionTimeline.returnToPool(),
            null !== this._zOrderTimeline && this._zOrderTimeline.returnToPool(),
            this.actionEnabled = !1,
            this.additiveBlending = !1,
            this.displayControl = !1,
            this.resetToPose = !1,
            this.playTimes = 1,
            this.layer = 0,
            this.timeScale = 1,
            this.weight = 1,
            this.autoFadeOutTime = 0,
            this.fadeTotalTime = 0,
            this.name = "",
            this.group = "",
            this._timelineDirty = 2,
            this._playheadState = 0,
            this._fadeState = -1,
            this._subFadeState = -1,
            this._position = 0,
            this._duration = 0,
            this._fadeTime = 0,
            this._time = 0,
            this._fadeProgress = 0,
            this._weightResult = 0,
            this._blendState.clear(),
            this._boneMask.length = 0,
            this._boneTimelines.length = 0,
            this._surfaceTimelines.length = 0,
            this._slotTimelines.length = 0,
            this._constraintTimelines.length = 0,
            this._animationTimelines.length = 0,
            this._poseTimelines.length = 0,
            this._animationData = null,
            this._armature = null,
            this._actionTimeline = null,
            this._zOrderTimeline = null,
            this._parent = null
        },
        r.prototype._updateTimelines = function() {
            for (var e = 0,
            a = this._armature._constraints; e < a.length; e++) {
                var i = a[e],
                r = this._animationData.getConstraintTimelines(i.name);
                if (null !== r) for (var n = 0,
                s = r; n < s.length; n++) {
                    var o = s[n];
                    switch (o.type) {
                    case 30:
                        var l = t.BaseObject.borrowObject(t.IKConstraintTimelineState);
                        l.constraint = i,
                        l.init(this._armature, this, o),
                        this._constraintTimelines.push(l)
                    }
                } else if (this.resetToPose) {
                    var l = t.BaseObject.borrowObject(t.IKConstraintTimelineState);
                    l.constraint = i,
                    l.init(this._armature, this, null),
                    this._constraintTimelines.push(l),
                    this._poseTimelines.push(l)
                }
            }
            for (var h = 0,
            u = this._armature.animation.getStates(); h < u.length; h++) {
                var _ = u[h];
                if (_._parent === this) {
                    var r = this._animationData.getAnimationTimelines(_.name);
                    if (null !== r) for (var f = 0,
                    c = r; f < c.length; f++) {
                        var o = c[f];
                        switch (o.type) {
                        case 40:
                            var l = t.BaseObject.borrowObject(t.AnimationTimelineState);
                            l.animationState = _,
                            l.init(this._armature, this, o),
                            this._animationTimelines.push(l)
                        }
                    }
                }
            }
        },
        r.prototype._updateBoneAndSlotTimelines = function() {
            for (var e = {},
            i = 0,
            r = this._boneTimelines; i < r.length; i++) {
                var n = r[i],
                s = n.bone.name;
                s in e || (e[s] = []),
                e[s].push(n)
            }
            for (var o = 0,
            l = this._armature.getBones(); o < l.length; o++) {
                var h = l[o],
                s = h.name;
                if (this.containsBoneMask(s)) if (s in e) delete e[s];
                else if (0 === h._boneData.type) {
                    var u = this._animationData.getBoneTimelines(s),
                    _ = s in this._bonePoses ? this._bonePoses[s] : this._bonePoses[s] = t.BaseObject.borrowObject(a);
                    if (null !== u) for (var f = 0,
                    c = u; f < c.length; f++) {
                        var p = c[f];
                        switch (p.type) {
                        case 10:
                            var n = t.BaseObject.borrowObject(t.BoneAllTimelineState);
                            n.bone = h,
                            n.bonePose = _,
                            n.init(this._armature, this, p),
                            this._boneTimelines.push(n);
                            break;
                        case 11:
                            var n = t.BaseObject.borrowObject(t.BoneTranslateTimelineState);
                            n.bone = h,
                            n.bonePose = _,
                            n.init(this._armature, this, p),
                            this._boneTimelines.push(n);
                            break;
                        case 12:
                            var n = t.BaseObject.borrowObject(t.BoneRotateTimelineState);
                            n.bone = h,
                            n.bonePose = _,
                            n.init(this._armature, this, p),
                            this._boneTimelines.push(n);
                            break;
                        case 13:
                            var n = t.BaseObject.borrowObject(t.BoneScaleTimelineState);
                            n.bone = h,
                            n.bonePose = _,
                            n.init(this._armature, this, p),
                            this._boneTimelines.push(n)
                        }
                    } else if (this.resetToPose) {
                        var n = t.BaseObject.borrowObject(t.BoneAllTimelineState);
                        n.bone = h,
                        n.bonePose = _,
                        n.init(this._armature, this, null),
                        this._boneTimelines.push(n),
                        this._poseTimelines.push(n)
                    }
                } else if (1 === h._boneData.type) {
                    var u = this._animationData.getSurfaceTimelines(s);
                    if (null !== u) for (var m = 0,
                    d = u; m < d.length; m++) {
                        var p = d[m];
                        switch (p.type) {
                        case 50:
                            var n = t.BaseObject.borrowObject(t.SurfaceTimelineState);
                            n.surface = h,
                            n.init(this._armature, this, p),
                            this._surfaceTimelines.push(n)
                        }
                    } else if (this.resetToPose) {
                        var n = t.BaseObject.borrowObject(t.SurfaceTimelineState);
                        n.surface = h,
                        n.init(this._armature, this, null),
                        this._surfaceTimelines.push(n),
                        this._poseTimelines.push(n)
                    }
                }
            }
            for (var y in e) for (var g = 0,
            v = e[y]; g < v.length; g++) {
                var n = v[g];
                this._boneTimelines.splice(this._boneTimelines.indexOf(n), 1),
                n.returnToPool()
            }
            for (var b = {},
            D = [], T = 0, A = this._slotTimelines; T < A.length; T++) {
                var n = A[T],
                s = n.slot.name;
                s in b || (b[s] = []),
                b[s].push(n)
            }
            for (var x = 0,
            O = this._armature.getSlots(); x < O.length; x++) {
                var P = O[x],
                E = P.parent.name;
                if (this.containsBoneMask(E)) {
                    var s = P.name,
                    u = this._animationData.getSlotTimelines(s);
                    if (s in b) delete b[s];
                    else {
                        var S = !1,
                        M = !1;
                        if (D.length = 0, null !== u) for (var B = 0,
                        C = u; B < C.length; B++) {
                            var p = C[B];
                            switch (p.type) {
                            case 20:
                                var n = t.BaseObject.borrowObject(t.SlotDislayTimelineState);
                                n.slot = P,
                                n.init(this._armature, this, p),
                                this._slotTimelines.push(n),
                                S = !0;
                                break;
                            case 21:
                                var n = t.BaseObject.borrowObject(t.SlotColorTimelineState);
                                n.slot = P,
                                n.init(this._armature, this, p),
                                this._slotTimelines.push(n),
                                M = !0;
                                break;
                            case 22:
                                var n = t.BaseObject.borrowObject(t.DeformTimelineState);
                                n.slot = P,
                                n.init(this._armature, this, p),
                                this._slotTimelines.push(n),
                                D.push(n.vertexOffset)
                            }
                        }
                        if (this.resetToPose) {
                            if (!S) {
                                var n = t.BaseObject.borrowObject(t.SlotDislayTimelineState);
                                n.slot = P,
                                n.init(this._armature, this, null),
                                this._slotTimelines.push(n),
                                this._poseTimelines.push(n)
                            }
                            if (!M) {
                                var n = t.BaseObject.borrowObject(t.SlotColorTimelineState);
                                n.slot = P,
                                n.init(this._armature, this, null),
                                this._slotTimelines.push(n),
                                this._poseTimelines.push(n)
                            }
                            if (null !== P.rawDisplayDatas) for (var w = 0,
                            I = P.rawDisplayDatas; w < I.length; w++) {
                                var F = I[w];
                                if (null !== F && 2 === F.type) {
                                    var N = F.vertices.offset;
                                    if (D.indexOf(N) < 0) {
                                        var n = t.BaseObject.borrowObject(t.DeformTimelineState);
                                        n.vertexOffset = N,
                                        n.slot = P,
                                        n.init(this._armature, this, null),
                                        this._slotTimelines.push(n),
                                        this._poseTimelines.push(n)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            for (var y in b) for (var R = 0,
            j = b[y]; R < j.length; R++) {
                var n = j[R];
                this._slotTimelines.splice(this._slotTimelines.indexOf(n), 1),
                n.returnToPool()
            }
        },
        r.prototype._advanceFadeTime = function(e) {
            var a = this._fadeState > 0;
            if (this._subFadeState < 0) {
                this._subFadeState = 0;
                var i = a ? t.EventObject.FADE_OUT: t.EventObject.FADE_IN;
                if (this._armature.eventDispatcher.hasDBEventListener(i)) {
                    var r = t.BaseObject.borrowObject(t.EventObject);
                    r.type = i,
                    r.armature = this._armature,
                    r.animationState = this,
                    this._armature._dragonBones.bufferEvent(r)
                }
            }
            if (0 > e && (e = -e), this._fadeTime += e, this._fadeTime >= this.fadeTotalTime ? (this._subFadeState = 1, this._fadeProgress = a ? 0 : 1) : this._fadeTime > 0 ? this._fadeProgress = a ? 1 - this._fadeTime / this.fadeTotalTime: this._fadeTime / this.fadeTotalTime: this._fadeProgress = a ? 1 : 0, this._subFadeState > 0) {
                a || (this._playheadState |= 1, this._fadeState = 0);
                var i = a ? t.EventObject.FADE_OUT_COMPLETE: t.EventObject.FADE_IN_COMPLETE;
                if (this._armature.eventDispatcher.hasDBEventListener(i)) {
                    var r = t.BaseObject.borrowObject(t.EventObject);
                    r.type = i,
                    r.armature = this._armature,
                    r.animationState = this,
                    this._armature._dragonBones.bufferEvent(r)
                }
            }
        },
        r.prototype.init = function(e, a, i) {
            if (null === this._armature) {
                if (this._armature = e, this._animationData = a, this.resetToPose = i.resetToPose, this.additiveBlending = i.additiveBlending, this.displayControl = i.displayControl, this.actionEnabled = i.actionEnabled, this.layer = i.layer, this.playTimes = i.playTimes, this.timeScale = i.timeScale, this.fadeTotalTime = i.fadeInTime, this.autoFadeOutTime = i.autoFadeOutTime, this.weight = i.weight, this.name = i.name.length > 0 ? i.name: i.animation, this.group = i.group, i.pauseFadeIn ? this._playheadState = 2 : this._playheadState = 3, i.duration < 0 ? (this._position = 0, this._duration = this._animationData.duration, 0 !== i.position ? this.timeScale >= 0 ? this._time = i.position: this._time = i.position - this._duration: this._time = 0) : (this._position = i.position, this._duration = i.duration, this._time = 0), this.timeScale < 0 && 0 === this._time && (this._time = -1e-6), this.fadeTotalTime <= 0 && (this._fadeProgress = .999999), i.boneMask.length > 0) {
                    this._boneMask.length = i.boneMask.length;
                    for (var r = 0,
                    n = this._boneMask.length; n > r; ++r) this._boneMask[r] = i.boneMask[r]
                }
                this._actionTimeline = t.BaseObject.borrowObject(t.ActionTimelineState),
                this._actionTimeline.init(this._armature, this, this._animationData.actionTimeline),
                this._actionTimeline.currentTime = this._time,
                this._actionTimeline.currentTime < 0 && (this._actionTimeline.currentTime = this._duration - this._actionTimeline.currentTime),
                null !== this._animationData.zOrderTimeline && (this._zOrderTimeline = t.BaseObject.borrowObject(t.ZOrderTimelineState), this._zOrderTimeline.init(this._armature, this, this._animationData.zOrderTimeline))
            }
        },
        r.prototype.advanceTime = function(e, a) {
            if (this._blendState.dirty = !1, (0 !== this._fadeState || 0 !== this._subFadeState) && this._advanceFadeTime(e), 3 === this._playheadState && (1 !== this.timeScale && (e *= this.timeScale), this._time += e), 0 !== this._timelineDirty && (2 === this._timelineDirty && this._updateTimelines(), this._timelineDirty = 0, this._updateBoneAndSlotTimelines()), 0 !== this.weight) {
                var i = 0 === this._fadeState && a > 0,
                r = !0,
                n = !0,
                s = this._time;
                if (this._weightResult = this.weight * this._fadeProgress, null !== this._parent && (this._weightResult *= this._parent._weightResult / this._parent._fadeProgress), this._actionTimeline.playState <= 0 && this._actionTimeline.update(s), i) {
                    var o = 2 * a;
                    this._actionTimeline.currentTime = Math.floor(this._actionTimeline.currentTime * o) / o
                }
                if (null !== this._zOrderTimeline && this._zOrderTimeline.playState <= 0 && this._zOrderTimeline.update(s), i) {
                    var l = Math.floor(this._actionTimeline.currentTime * a);
                    this._armature._cacheFrameIndex === l ? (r = !1, n = !1) : (this._armature._cacheFrameIndex = l, this._animationData.cachedFrames[l] ? n = !1 : this._animationData.cachedFrames[l] = !0)
                }
                if (r) {
                    if (n) for (var h = 0,
                    u = this._boneTimelines.length; u > h; ++h) {
                        var _ = this._boneTimelines[h];
                        if (_.playState <= 0 && _.update(s), h === u - 1 || _.bone !== this._boneTimelines[h + 1].bone) {
                            var f = _.bone._blendState.update(this._weightResult, this.layer);
                            0 !== f && _.blend(f)
                        }
                    }
                    for (var h = 0,
                    u = this._surfaceTimelines.length; u > h; ++h) {
                        var _ = this._surfaceTimelines[h],
                        f = _.surface._blendState.update(this._weightResult, this.layer);
                        _.playState <= 0 && _.update(s),
                        0 !== f && _.blend(f)
                    }
                    if (this.displayControl) for (var h = 0,
                    u = this._slotTimelines.length; u > h; ++h) {
                        var _ = this._slotTimelines[h],
                        c = _.slot.displayController; (null === c || c === this.name || c === this.group) && _.playState <= 0 && _.update(s)
                    }
                    for (var h = 0,
                    u = this._constraintTimelines.length; u > h; ++h) {
                        var _ = this._constraintTimelines[h];
                        _.playState <= 0 && _.update(s)
                    }
                    for (var h = 0,
                    u = this._animationTimelines.length; u > h; ++h) {
                        var _ = this._animationTimelines[h],
                        f = _.animationState._blendState.update(this._weightResult, this.layer);
                        _.playState <= 0 && _.update(s),
                        0 !== f && _.blend(f)
                    }
                }
                if (0 === this._fadeState) {
                    if (this._subFadeState > 0 && (this._subFadeState = 0, this._poseTimelines.length > 0)) {
                        for (var p = 0,
                        m = this._poseTimelines; p < m.length; p++) {
                            var _ = m[p];
                            _ instanceof t.BoneTimelineState ? this._boneTimelines.splice(this._boneTimelines.indexOf(_), 1) : _ instanceof t.SurfaceTimelineState ? this._surfaceTimelines.splice(this._surfaceTimelines.indexOf(_), 1) : _ instanceof t.SlotTimelineState ? this._slotTimelines.splice(this._slotTimelines.indexOf(_), 1) : _ instanceof t.ConstraintTimelineState && this._constraintTimelines.splice(this._constraintTimelines.indexOf(_), 1),
                            _.returnToPool()
                        }
                        this._poseTimelines.length = 0
                    }
                    this._actionTimeline.playState > 0 && this.autoFadeOutTime >= 0 && this.fadeOut(this.autoFadeOutTime)
                }
            }
        },
        r.prototype.play = function() {
            this._playheadState = 3
        },
        r.prototype.stop = function() {
            this._playheadState &= 1
        },
        r.prototype.fadeOut = function(t, e) {
            if (void 0 === e && (e = !0), 0 > t && (t = 0), e && (this._playheadState &= 2), this._fadeState > 0) {
                if (t > this.fadeTotalTime - this._fadeTime) return
            } else {
                this._fadeState = 1,
                this._subFadeState = -1,
                (0 >= t || this._fadeProgress <= 0) && (this._fadeProgress = 1e-6);
                for (var a = 0,
                i = this._boneTimelines; a < i.length; a++) {
                    var r = i[a];
                    r.fadeOut()
                }
                for (var n = 0,
                s = this._surfaceTimelines; n < s.length; n++) {
                    var r = s[n];
                    r.fadeOut()
                }
                for (var o = 0,
                l = this._slotTimelines; o < l.length; o++) {
                    var r = l[o];
                    r.fadeOut()
                }
                for (var h = 0,
                u = this._constraintTimelines; h < u.length; h++) {
                    var r = u[h];
                    r.fadeOut()
                }
                for (var _ = 0,
                f = this._animationTimelines; _ < f.length; _++) {
                    var r = f[_];
                    r.animationState.fadeOut(t, e),
                    r.fadeOut()
                }
            }
            this.displayControl = !1,
            this.fadeTotalTime = this._fadeProgress > 1e-6 ? t / this._fadeProgress: 0,
            this._fadeTime = this.fadeTotalTime * (1 - this._fadeProgress)
        },
        r.prototype.containsBoneMask = function(t) {
            return 0 === this._boneMask.length || this._boneMask.indexOf(t) >= 0
        },
        r.prototype.addBoneMask = function(t, e) {
            void 0 === e && (e = !0);
            var a = this._armature.getBone(t);
            if (null !== a) {
                if (this._boneMask.indexOf(t) < 0 && this._boneMask.push(t), e) for (var i = 0,
                r = this._armature.getBones(); i < r.length; i++) {
                    var n = r[i];
                    this._boneMask.indexOf(n.name) < 0 && a.contains(n) && this._boneMask.push(n.name)
                }
                this._timelineDirty = 1
            }
        },
        r.prototype.removeBoneMask = function(t, e) {
            void 0 === e && (e = !0);
            var a = this._boneMask.indexOf(t);
            if (a >= 0 && this._boneMask.splice(a, 1), e) {
                var i = this._armature.getBone(t);
                if (null !== i) {
                    var r = this._armature.getBones();
                    if (this._boneMask.length > 0) for (var n = 0,
                    s = r; n < s.length; n++) {
                        var o = s[n],
                        l = this._boneMask.indexOf(o.name);
                        l >= 0 && i.contains(o) && this._boneMask.splice(l, 1)
                    } else for (var h = 0,
                    u = r; h < u.length; h++) {
                        var o = u[h];
                        o !== i && (i.contains(o) || this._boneMask.push(o.name))
                    }
                }
            }
            this._timelineDirty = 1
        },
        r.prototype.removeAllBoneMask = function() {
            this._boneMask.length = 0,
            this._timelineDirty = 1
        },
        Object.defineProperty(r.prototype, "isFadeIn", {
            get: function() {
                return this._fadeState < 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "isFadeOut", {
            get: function() {
                return this._fadeState > 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "isFadeComplete", {
            get: function() {
                return 0 === this._fadeState
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "isPlaying", {
            get: function() {
                return 0 !== (2 & this._playheadState) && this._actionTimeline.playState <= 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "isCompleted", {
            get: function() {
                return this._actionTimeline.playState > 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "currentPlayTimes", {
            get: function() {
                return this._actionTimeline.currentPlayTimes
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "totalTime", {
            get: function() {
                return this._duration
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "currentTime", {
            get: function() {
                return this._actionTimeline.currentTime
            },
            set: function(t) {
                var e = this._actionTimeline.currentPlayTimes - (this._actionTimeline.playState > 0 ? 1 : 0);
                if ((0 > t || this._duration < t) && (t = t % this._duration + e * this._duration, 0 > t && (t += this._duration)), this.playTimes > 0 && e === this.playTimes - 1 && t === this._duration && (t = this._duration - 1e-6), this._time !== t) {
                    this._time = t,
                    this._actionTimeline.setCurrentTime(this._time),
                    null !== this._zOrderTimeline && (this._zOrderTimeline.playState = -1);
                    for (var a = 0,
                    i = this._boneTimelines; a < i.length; a++) {
                        var r = i[a];
                        r.playState = -1
                    }
                    for (var n = 0,
                    s = this._slotTimelines; n < s.length; n++) {
                        var r = s[n];
                        r.playState = -1
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(r.prototype, "animationData", {
            get: function() {
                return this._animationData
            },
            enumerable: !0,
            configurable: !0
        }),
        r
    } (t.BaseObject);
    t.AnimationState = e;
    var a = function(e) {
        function a() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a.current = new t.Transform,
            a.delta = new t.Transform,
            a.result = new t.Transform,
            a
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.BonePose]"
        },
        a.prototype._onClear = function() {
            this.current.identity(),
            this.delta.identity(),
            this.result.identity()
        },
        a
    } (t.BaseObject);
    t.BonePose = a;
    var i = function() {
        function t() {}
        return t.prototype.update = function(t, e) {
            if (this.dirty) {
                if (! (this.leftWeight > 0)) return 0;
                if (this.layer !== e) {
                    if (this.layerWeight >= this.leftWeight) return this.leftWeight = 0,
                    0;
                    this.layer = e,
                    this.leftWeight -= this.layerWeight,
                    this.layerWeight = 0
                }
                return t *= this.leftWeight,
                this.layerWeight += t,
                this.blendWeight = t,
                2
            }
            return this.dirty = !0,
            this.layer = e,
            this.layerWeight = t,
            this.leftWeight = 1,
            this.blendWeight = t,
            1
        },
        t.prototype.clear = function() {
            this.dirty = !1,
            this.layer = 0,
            this.leftWeight = 0,
            this.layerWeight = 0,
            this.blendWeight = 0
        },
        t
    } ();
    t.BlendState = i
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            this.playState = -1,
            this.currentPlayTimes = -1,
            this.currentTime = -1,
            this._tweenState = 0,
            this._frameRate = 0,
            this._frameValueOffset = 0,
            this._frameCount = 0,
            this._frameOffset = 0,
            this._frameIndex = -1,
            this._frameRateR = 0,
            this._position = 0,
            this._duration = 0,
            this._timeScale = 1,
            this._timeOffset = 0,
            this._dragonBonesData = null,
            this._animationData = null,
            this._timelineData = null,
            this._armature = null,
            this._animationState = null,
            this._actionTimeline = null,
            this._frameArray = null,
            this._frameIntArray = null,
            this._frameFloatArray = null,
            this._timelineArray = null,
            this._frameIndices = null
        },
        e.prototype._setCurrentTime = function(t) {
            var e = this.playState,
            a = this.currentPlayTimes,
            i = this.currentTime;
            if (null !== this._actionTimeline && this._frameCount <= 1) this.playState = this._actionTimeline.playState >= 0 ? 1 : -1,
            this.currentPlayTimes = 1,
            this.currentTime = this._actionTimeline.currentTime;
            else if (null === this._actionTimeline || 1 !== this._timeScale || 0 !== this._timeOffset) {
                var r = this._animationState.playTimes,
                n = r * this._duration;
                t *= this._timeScale,
                0 !== this._timeOffset && (t += this._timeOffset * this._animationData.duration),
                r > 0 && (t >= n || -n >= t) ? (this.playState <= 0 && 3 === this._animationState._playheadState && (this.playState = 1), this.currentPlayTimes = r, 0 > t ? this.currentTime = 0 : this.currentTime = this._duration + 1e-6) : (0 !== this.playState && 3 === this._animationState._playheadState && (this.playState = 0), 0 > t ? (t = -t, this.currentPlayTimes = Math.floor(t / this._duration), this.currentTime = this._duration - t % this._duration) : (this.currentPlayTimes = Math.floor(t / this._duration), this.currentTime = t % this._duration)),
                this.currentTime += this._position
            } else this.playState = this._actionTimeline.playState,
            this.currentPlayTimes = this._actionTimeline.currentPlayTimes,
            this.currentTime = this._actionTimeline.currentTime;
            return this.currentPlayTimes === a && this.currentTime === i ? !1 : ((0 > e && this.playState !== e || this.playState <= 0 && this.currentPlayTimes !== a) && (this._frameIndex = -1), !0)
        },
        e.prototype.init = function(t, e, a) {
            this._armature = t,
            this._animationState = e,
            this._timelineData = a,
            this._actionTimeline = this._animationState._actionTimeline,
            this === this._actionTimeline && (this._actionTimeline = null),
            this._animationData = this._animationState._animationData,
            this._frameRate = this._animationData.parent.frameRate,
            this._frameRateR = 1 / this._frameRate,
            this._position = this._animationState._position,
            this._duration = this._animationState._duration,
            this._dragonBonesData = this._animationData.parent.parent,
            null !== this._timelineData && (this._frameIntArray = this._dragonBonesData.frameIntArray, this._frameFloatArray = this._dragonBonesData.frameFloatArray, this._frameArray = this._dragonBonesData.frameArray, this._timelineArray = this._dragonBonesData.timelineArray, this._frameIndices = this._dragonBonesData.frameIndices, this._frameCount = this._timelineArray[this._timelineData.offset + 2], this._frameValueOffset = this._timelineArray[this._timelineData.offset + 4], this._timeScale = 100 / this._timelineArray[this._timelineData.offset + 0], this._timeOffset = .01 * this._timelineArray[this._timelineData.offset + 1])
        },
        e.prototype.fadeOut = function() {},
        e.prototype.update = function(t) {
            if (this._setCurrentTime(t)) {
                if (this._frameCount > 1) {
                    var e = Math.floor(this.currentTime * this._frameRate),
                    a = this._frameIndices[this._timelineData.frameIndicesOffset + e];
                    this._frameIndex !== a && (this._frameIndex = a, this._frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 + this._frameIndex], this._onArriveAtFrame())
                } else this._frameIndex < 0 && (this._frameIndex = 0, null !== this._timelineData && (this._frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5]), this._onArriveAtFrame());
                0 !== this._tweenState && this._onUpdateFrame()
            }
        },
        e
    } (t.BaseObject);
    t.TimelineState = e;
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e._getEasingValue = function(t, e, a) {
            var i = e;
            switch (t) {
            case 3:
                i = Math.pow(e, 2);
                break;
            case 4:
                i = 1 - Math.pow(1 - e, 2);
                break;
            case 5:
                i = .5 * (1 - Math.cos(e * Math.PI))
            }
            return (i - e) * a + e
        },
        e._getEasingCurveValue = function(t, e, a, i) {
            if (0 >= t) return 0;
            if (t >= 1) return 1;
            var r = a + 1,
            n = Math.floor(t * r),
            s = 0 === n ? 0 : e[i + n - 1],
            o = n === r - 1 ? 1e4: e[i + n];
            return 1e-4 * (s + (o - s) * (t * r - n))
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this._tweenType = 0,
            this._curveCount = 0,
            this._framePosition = 0,
            this._frameDurationR = 0,
            this._tweenProgress = 0,
            this._tweenEasing = 0
        },
        e.prototype._onArriveAtFrame = function() {
            if (this._frameCount > 1 && (this._frameIndex !== this._frameCount - 1 || 0 === this._animationState.playTimes || this._animationState.currentPlayTimes < this._animationState.playTimes - 1)) if (this._tweenType = this._frameArray[this._frameOffset + 1], this._tweenState = 0 === this._tweenType ? 1 : 2, 2 === this._tweenType ? this._curveCount = this._frameArray[this._frameOffset + 2] : 0 !== this._tweenType && 1 !== this._tweenType && (this._tweenEasing = .01 * this._frameArray[this._frameOffset + 2]), this._framePosition = this._frameArray[this._frameOffset] * this._frameRateR, this._frameIndex === this._frameCount - 1) this._frameDurationR = 1 / (this._animationData.duration - this._framePosition);
            else {
                var t = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 + this._frameIndex + 1],
                e = this._frameArray[t] * this._frameRateR - this._framePosition;
                e > 0 ? this._frameDurationR = 1 / e: this._frameDurationR = 0
            } else this._tweenState = 1
        },
        e.prototype._onUpdateFrame = function() {
            2 === this._tweenState ? (this._tweenProgress = (this.currentTime - this._framePosition) * this._frameDurationR, 2 === this._tweenType ? this._tweenProgress = e._getEasingCurveValue(this._tweenProgress, this._frameArray, this._curveCount, this._frameOffset + 3) : 1 !== this._tweenType && (this._tweenProgress = e._getEasingValue(this._tweenType, this._tweenProgress, this._tweenEasing))) : this._tweenProgress = 0
        },
        e
    } (e);
    t.TweenTimelineState = a;
    var i = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.bone = null,
            this.bonePose = null
        },
        e.prototype.blend = function(t) {
            var e = this.bone._blendState.blendWeight,
            a = this.bone.animationPose,
            i = this.bonePose.result;
            2 === t ? (a.x += i.x * e, a.y += i.y * e, a.rotation += i.rotation * e, a.skew += i.skew * e, a.scaleX += (i.scaleX - 1) * e, a.scaleY += (i.scaleY - 1) * e) : 1 !== e ? (a.x = i.x * e, a.y = i.y * e, a.rotation = i.rotation * e, a.skew = i.skew * e, a.scaleX = (i.scaleX - 1) * e + 1, a.scaleY = (i.scaleY - 1) * e + 1) : (a.x = i.x, a.y = i.y, a.rotation = i.rotation, a.skew = i.skew, a.scaleX = i.scaleX, a.scaleY = i.scaleY),
            (0 !== this._animationState._fadeState || 0 !== this._animationState._subFadeState) && (this.bone._transformDirty = !0)
        },
        e
    } (a);
    t.BoneTimelineState = i;
    var r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.slot = null
        },
        e
    } (a);
    t.SlotTimelineState = r;
    var n = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.constraint = null
        },
        e
    } (a);
    t.ConstraintTimelineState = n
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.ActionTimelineState]"
        },
        a.prototype._onCrossFrame = function(e) {
            var a = this._armature.eventDispatcher;
            if (this._animationState.actionEnabled) for (var i = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 + e], r = this._frameArray[i + 1], n = this._animationData.parent.actions, s = 0; r > s; ++s) {
                var o = this._frameArray[i + 2 + s],
                l = n[o];
                if (0 === l.type) {
                    var h = t.BaseObject.borrowObject(t.EventObject);
                    h.time = this._frameArray[i] / this._frameRate,
                    h.animationState = this._animationState,
                    t.EventObject.actionDataToInstance(l, h, this._armature),
                    this._armature._bufferAction(h, !0)
                } else {
                    var u = 10 === l.type ? t.EventObject.FRAME_EVENT: t.EventObject.SOUND_EVENT;
                    if (11 === l.type || a.hasDBEventListener(u)) {
                        var h = t.BaseObject.borrowObject(t.EventObject);
                        h.time = this._frameArray[i] / this._frameRate,
                        h.animationState = this._animationState,
                        t.EventObject.actionDataToInstance(l, h, this._armature),
                        this._armature._dragonBones.bufferEvent(h)
                    }
                }
            }
        },
        a.prototype._onArriveAtFrame = function() {},
        a.prototype._onUpdateFrame = function() {},
        a.prototype.update = function(e) {
            var a = this.playState,
            i = this.currentPlayTimes,
            r = this.currentTime;
            if (this._setCurrentTime(e)) {
                var n = this._armature.eventDispatcher;
                if (0 > a) {
                    if (this.playState === a) return;
                    if (this._animationState.displayControl && this._animationState.resetToPose && this._armature._sortZOrder(null, 0), i = this.currentPlayTimes, n.hasDBEventListener(t.EventObject.START)) {
                        var s = t.BaseObject.borrowObject(t.EventObject);
                        s.type = t.EventObject.START,
                        s.armature = this._armature,
                        s.animationState = this._animationState,
                        this._armature._dragonBones.bufferEvent(s)
                    }
                }
                var o = this._animationState.timeScale < 0,
                l = null,
                h = null;
                if (this.currentPlayTimes !== i && (n.hasDBEventListener(t.EventObject.LOOP_COMPLETE) && (l = t.BaseObject.borrowObject(t.EventObject), l.type = t.EventObject.LOOP_COMPLETE, l.armature = this._armature, l.animationState = this._animationState), this.playState > 0 && n.hasDBEventListener(t.EventObject.COMPLETE) && (h = t.BaseObject.borrowObject(t.EventObject), h.type = t.EventObject.COMPLETE, h.armature = this._armature, h.animationState = this._animationState)), this._frameCount > 1) {
                    var u = this._timelineData,
                    _ = Math.floor(this.currentTime * this._frameRate),
                    f = this._frameIndices[u.frameIndicesOffset + _];
                    if (this._frameIndex !== f) {
                        var c = this._frameIndex;
                        if (this._frameIndex = f, null !== this._timelineArray) if (this._frameOffset = this._animationData.frameOffset + this._timelineArray[u.offset + 5 + this._frameIndex], o) {
                            if (0 > c) {
                                var p = Math.floor(r * this._frameRate);
                                c = this._frameIndices[u.frameIndicesOffset + p],
                                this.currentPlayTimes === i && c === f && (c = -1)
                            }
                            for (; c >= 0;) {
                                var m = this._animationData.frameOffset + this._timelineArray[u.offset + 5 + c],
                                d = this._frameArray[m] / this._frameRate;
                                if (this._position <= d && d <= this._position + this._duration && this._onCrossFrame(c), null !== l && 0 === c && (this._armature._dragonBones.bufferEvent(l), l = null), c > 0 ? c--:c = this._frameCount - 1, c === f) break
                            }
                        } else {
                            if (0 > c) {
                                var p = Math.floor(r * this._frameRate);
                                c = this._frameIndices[u.frameIndicesOffset + p];
                                var m = this._animationData.frameOffset + this._timelineArray[u.offset + 5 + c],
                                d = this._frameArray[m] / this._frameRate;
                                this.currentPlayTimes === i && (d >= r ? c > 0 ? c--:c = this._frameCount - 1 : c === f && (c = -1))
                            }
                            for (; c >= 0;) {
                                c < this._frameCount - 1 ? c++:c = 0;
                                var m = this._animationData.frameOffset + this._timelineArray[u.offset + 5 + c],
                                d = this._frameArray[m] / this._frameRate;
                                if (this._position <= d && d <= this._position + this._duration && this._onCrossFrame(c), null !== l && 0 === c && (this._armature._dragonBones.bufferEvent(l), l = null), c === f) break
                            }
                        }
                    }
                } else if (this._frameIndex < 0 && (this._frameIndex = 0, null !== this._timelineData)) {
                    this._frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5];
                    var d = this._frameArray[this._frameOffset] / this._frameRate;
                    this.currentPlayTimes === i ? d >= r && this._onCrossFrame(this._frameIndex) : this._position <= d && (o || null === l || (this._armature._dragonBones.bufferEvent(l), l = null), this._onCrossFrame(this._frameIndex))
                }
                null !== l && this._armature._dragonBones.bufferEvent(l),
                null !== h && this._armature._dragonBones.bufferEvent(h)
            }
        },
        a.prototype.setCurrentTime = function(t) {
            this._setCurrentTime(t),
            this._frameIndex = -1
        },
        a
    } (t.TimelineState);
    t.ActionTimelineState = e;
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.ZOrderTimelineState]"
        },
        e.prototype._onArriveAtFrame = function() {
            if (this.playState >= 0) {
                var t = this._frameArray[this._frameOffset + 1];
                t > 0 ? this._armature._sortZOrder(this._frameArray, this._frameOffset + 2) : this._armature._sortZOrder(null, 0)
            }
        },
        e.prototype._onUpdateFrame = function() {},
        e
    } (t.TimelineState);
    t.ZOrderTimelineState = a;
    var i = function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.BoneAllTimelineState]"
        },
        a.prototype._onArriveAtFrame = function() {
            if (e.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var t = this._animationData.frameFloatOffset + this._frameValueOffset + 6 * this._frameIndex,
                a = this._armature._armatureData.scale,
                i = this._frameFloatArray,
                r = this.bonePose.current,
                n = this.bonePose.delta;
                r.x = i[t++] * a,
                r.y = i[t++] * a,
                r.rotation = i[t++],
                r.skew = i[t++],
                r.scaleX = i[t++],
                r.scaleY = i[t++],
                2 === this._tweenState ? (this._frameIndex === this._frameCount - 1 && (t = this._animationData.frameFloatOffset + this._frameValueOffset), n.x = i[t++] * a - r.x, n.y = i[t++] * a - r.y, n.rotation = i[t++] - r.rotation, n.skew = i[t++] - r.skew, n.scaleX = i[t++] - r.scaleX, n.scaleY = i[t++] - r.scaleY) : (n.x = 0, n.y = 0, n.rotation = 0, n.skew = 0, n.scaleX = 0, n.scaleY = 0)
            } else {
                var r = this.bonePose.current,
                n = this.bonePose.delta;
                r.x = 0,
                r.y = 0,
                r.rotation = 0,
                r.skew = 0,
                r.scaleX = 1,
                r.scaleY = 1,
                n.x = 0,
                n.y = 0,
                n.rotation = 0,
                n.skew = 0,
                n.scaleX = 0,
                n.scaleY = 0
            }
        },
        a.prototype._onUpdateFrame = function() {
            e.prototype._onUpdateFrame.call(this);
            var t = this.bonePose.current,
            a = this.bonePose.delta,
            i = this.bonePose.result;
            this.bone._transformDirty = !0,
            2 !== this._tweenState && (this._tweenState = 0),
            i.x = t.x + a.x * this._tweenProgress,
            i.y = t.y + a.y * this._tweenProgress,
            i.rotation = t.rotation + a.rotation * this._tweenProgress,
            i.skew = t.skew + a.skew * this._tweenProgress,
            i.scaleX = t.scaleX + a.scaleX * this._tweenProgress,
            i.scaleY = t.scaleY + a.scaleY * this._tweenProgress
        },
        a.prototype.fadeOut = function() {
            var e = this.bonePose.result;
            e.rotation = t.Transform.normalizeRadian(e.rotation),
            e.skew = t.Transform.normalizeRadian(e.skew)
        },
        a
    } (t.BoneTimelineState);
    t.BoneAllTimelineState = i;
    var r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.BoneTranslateTimelineState]"
        },
        e.prototype._onArriveAtFrame = function() {
            if (t.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var e = this._animationData.frameFloatOffset + this._frameValueOffset + 2 * this._frameIndex,
                a = this._armature._armatureData.scale,
                i = this._frameFloatArray,
                r = this.bonePose.current,
                n = this.bonePose.delta;
                r.x = i[e++] * a,
                r.y = i[e++] * a,
                2 === this._tweenState ? (this._frameIndex === this._frameCount - 1 && (e = this._animationData.frameFloatOffset + this._frameValueOffset), n.x = i[e++] * a - r.x, n.y = i[e++] * a - r.y) : (n.x = 0, n.y = 0)
            } else {
                var r = this.bonePose.current,
                n = this.bonePose.delta;
                r.x = 0,
                r.y = 0,
                n.x = 0,
                n.y = 0
            }
        },
        e.prototype._onUpdateFrame = function() {
            t.prototype._onUpdateFrame.call(this);
            var e = this.bonePose.current,
            a = this.bonePose.delta,
            i = this.bonePose.result;
            this.bone._transformDirty = !0,
            2 !== this._tweenState && (this._tweenState = 0),
            i.x = e.x + a.x * this._tweenProgress,
            i.y = e.y + a.y * this._tweenProgress
        },
        e
    } (t.BoneTimelineState);
    t.BoneTranslateTimelineState = r;
    var n = function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.BoneRotateTimelineState]"
        },
        a.prototype._onArriveAtFrame = function() {
            if (e.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var a = this._animationData.frameFloatOffset + this._frameValueOffset + 2 * this._frameIndex,
                i = this._frameFloatArray,
                r = this.bonePose.current,
                n = this.bonePose.delta;
                r.rotation = i[a++],
                r.skew = i[a++],
                2 === this._tweenState ? (this._frameIndex === this._frameCount - 1 ? (a = this._animationData.frameFloatOffset + this._frameValueOffset, n.rotation = t.Transform.normalizeRadian(i[a++] - r.rotation)) : n.rotation = i[a++] - r.rotation, n.skew = i[a++] - r.skew) : (n.rotation = 0, n.skew = 0)
            } else {
                var r = this.bonePose.current,
                n = this.bonePose.delta;
                r.rotation = 0,
                r.skew = 0,
                n.rotation = 0,
                n.skew = 0
            }
        },
        a.prototype._onUpdateFrame = function() {
            e.prototype._onUpdateFrame.call(this);
            var t = this.bonePose.current,
            a = this.bonePose.delta,
            i = this.bonePose.result;
            this.bone._transformDirty = !0,
            2 !== this._tweenState && (this._tweenState = 0),
            i.rotation = t.rotation + a.rotation * this._tweenProgress,
            i.skew = t.skew + a.skew * this._tweenProgress
        },
        a.prototype.fadeOut = function() {
            var e = this.bonePose.result;
            e.rotation = t.Transform.normalizeRadian(e.rotation),
            e.skew = t.Transform.normalizeRadian(e.skew)
        },
        a
    } (t.BoneTimelineState);
    t.BoneRotateTimelineState = n;
    var s = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.BoneScaleTimelineState]"
        },
        e.prototype._onArriveAtFrame = function() {
            if (t.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var e = this._animationData.frameFloatOffset + this._frameValueOffset + 2 * this._frameIndex,
                a = this._frameFloatArray,
                i = this.bonePose.current,
                r = this.bonePose.delta;
                i.scaleX = a[e++],
                i.scaleY = a[e++],
                2 === this._tweenState ? (this._frameIndex === this._frameCount - 1 && (e = this._animationData.frameFloatOffset + this._frameValueOffset), r.scaleX = a[e++] - i.scaleX, r.scaleY = a[e++] - i.scaleY) : (r.scaleX = 0, r.scaleY = 0)
            } else {
                var i = this.bonePose.current,
                r = this.bonePose.delta;
                i.scaleX = 1,
                i.scaleY = 1,
                r.scaleX = 0,
                r.scaleY = 0
            }
        },
        e.prototype._onUpdateFrame = function() {
            t.prototype._onUpdateFrame.call(this);
            var e = this.bonePose.current,
            a = this.bonePose.delta,
            i = this.bonePose.result;
            this.bone._transformDirty = !0,
            2 !== this._tweenState && (this._tweenState = 0),
            i.scaleX = e.scaleX + a.scaleX * this._tweenProgress,
            i.scaleY = e.scaleY + a.scaleY * this._tweenProgress
        },
        e
    } (t.BoneTimelineState);
    t.BoneScaleTimelineState = s;
    var o = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._current = [],
            e._delta = [],
            e._result = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.SurfaceTimelineState]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.surface = null,
            this._frameFloatOffset = 0,
            this._valueCount = 0,
            this._deformCount = 0,
            this._valueOffset = 0,
            this._current.length = 0,
            this._delta.length = 0,
            this._result.length = 0
        },
        e.prototype._onArriveAtFrame = function() {
            if (t.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var e = this._animationData.frameFloatOffset + this._frameValueOffset + this._frameIndex * this._valueCount,
                a = this._armature._armatureData.scale,
                i = this._frameFloatArray;
                if (2 === this._tweenState) {
                    var r = e + this._valueCount;
                    this._frameIndex === this._frameCount - 1 && (r = this._animationData.frameFloatOffset + this._frameValueOffset);
                    for (var n = 0; n < this._valueCount; ++n) this._delta[n] = i[r + n] * a - (this._current[n] = i[e + n] * a)
                } else for (var n = 0; n < this._valueCount; ++n) this._current[n] = i[e + n] * a
            } else for (var n = 0; n < this._valueCount; ++n) this._current[n] = 0
        },
        e.prototype._onUpdateFrame = function() {
            t.prototype._onUpdateFrame.call(this),
            this.surface._transformDirty = !0,
            2 !== this._tweenState && (this._tweenState = 0);
            for (var e = 0; e < this._valueCount; ++e) this._result[e] = this._current[e] + this._delta[e] * this._tweenProgress
        },
        e.prototype.init = function(e, a, i) {
            if (t.prototype.init.call(this, e, a, i), null !== this._timelineData) {
                var r = this._animationData.frameIntOffset + this._timelineArray[this._timelineData.offset + 3];
                this._deformCount = this._frameIntArray[r + 1],
                this._valueCount = this._frameIntArray[r + 2],
                this._valueOffset = this._frameIntArray[r + 3],
                this._frameFloatOffset = this._frameIntArray[r + 4] + this._animationData.frameFloatOffset
            } else this._deformCount = this.surface._deformVertices.length,
            this._valueCount = this._deformCount,
            this._valueOffset = 0,
            this._frameFloatOffset = 0;
            this._current.length = this._valueCount,
            this._delta.length = this._valueCount,
            this._result.length = this._valueCount;
            for (var n = 0; n < this._valueCount; ++n) this._delta[n] = 0
        },
        e.prototype.blend = function(t) {
            for (var e = this.surface._blendState.blendWeight,
            a = this.surface._deformVertices,
            i = 0; i < this._deformCount; ++i) {
                var r = 0;
                r = i < this._valueOffset ? this._frameFloatArray[this._frameFloatOffset + i] : i < this._valueOffset + this._valueCount ? this._result[i - this._valueOffset] : this._frameFloatArray[this._frameFloatOffset + i - this._valueCount],
                2 === t ? a[i] += r * e: 1 !== e ? a[i] = r * e: a[i] = r
            } (0 !== this._animationState._fadeState || 0 !== this._animationState._subFadeState) && (this.surface._transformDirty = !0)
        },
        e
    } (t.TweenTimelineState);
    t.SurfaceTimelineState = o;
    var l = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.SlotDislayTimelineState]"
        },
        e.prototype._onArriveAtFrame = function() {
            if (this.playState >= 0) {
                var t = null !== this._timelineData ? this._frameArray[this._frameOffset + 1] : this.slot._slotData.displayIndex;
                this.slot.displayIndex !== t && this.slot._setDisplayIndex(t, !0)
            }
        },
        e
    } (t.SlotTimelineState);
    t.SlotDislayTimelineState = l;
    var h = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._current = [0, 0, 0, 0, 0, 0, 0, 0],
            e._delta = [0, 0, 0, 0, 0, 0, 0, 0],
            e._result = [0, 0, 0, 0, 0, 0, 0, 0],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.SlotColorTimelineState]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this._dirty = !1
        },
        e.prototype._onArriveAtFrame = function() {
            if (t.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var e = this._dragonBonesData.intArray,
                a = this._frameIntArray,
                i = this._animationData.frameIntOffset + this._frameValueOffset + 1 * this._frameIndex,
                r = a[i];
                0 > r && (r += 65536),
                this._current[0] = e[r++],
                this._current[1] = e[r++],
                this._current[2] = e[r++],
                this._current[3] = e[r++],
                this._current[4] = e[r++],
                this._current[5] = e[r++],
                this._current[6] = e[r++],
                this._current[7] = e[r++],
                2 === this._tweenState && (r = this._frameIndex === this._frameCount - 1 ? a[this._animationData.frameIntOffset + this._frameValueOffset] : a[i + 1], 0 > r && (r += 65536), this._delta[0] = e[r++] - this._current[0], this._delta[1] = e[r++] - this._current[1], this._delta[2] = e[r++] - this._current[2], this._delta[3] = e[r++] - this._current[3], this._delta[4] = e[r++] - this._current[4], this._delta[5] = e[r++] - this._current[5], this._delta[6] = e[r++] - this._current[6], this._delta[7] = e[r++] - this._current[7])
            } else {
                var n = this.slot._slotData.color;
                this._current[0] = 100 * n.alphaMultiplier,
                this._current[1] = 100 * n.redMultiplier,
                this._current[2] = 100 * n.greenMultiplier,
                this._current[3] = 100 * n.blueMultiplier,
                this._current[4] = n.alphaOffset,
                this._current[5] = n.redOffset,
                this._current[6] = n.greenOffset,
                this._current[7] = n.blueOffset
            }
        },
        e.prototype._onUpdateFrame = function() {
            t.prototype._onUpdateFrame.call(this),
            this._dirty = !0,
            2 !== this._tweenState && (this._tweenState = 0),
            this._result[0] = .01 * (this._current[0] + this._delta[0] * this._tweenProgress),
            this._result[1] = .01 * (this._current[1] + this._delta[1] * this._tweenProgress),
            this._result[2] = .01 * (this._current[2] + this._delta[2] * this._tweenProgress),
            this._result[3] = .01 * (this._current[3] + this._delta[3] * this._tweenProgress),
            this._result[4] = this._current[4] + this._delta[4] * this._tweenProgress,
            this._result[5] = this._current[5] + this._delta[5] * this._tweenProgress,
            this._result[6] = this._current[6] + this._delta[6] * this._tweenProgress,
            this._result[7] = this._current[7] + this._delta[7] * this._tweenProgress
        },
        e.prototype.fadeOut = function() {
            this._tweenState = 0,
            this._dirty = !1
        },
        e.prototype.update = function(e) {
            if (t.prototype.update.call(this, e), 0 !== this._tweenState || this._dirty) {
                var a = this.slot._colorTransform;
                if (0 !== this._animationState._fadeState || 0 !== this._animationState._subFadeState) {
                    if (a.alphaMultiplier !== this._result[0] || a.redMultiplier !== this._result[1] || a.greenMultiplier !== this._result[2] || a.blueMultiplier !== this._result[3] || a.alphaOffset !== this._result[4] || a.redOffset !== this._result[5] || a.greenOffset !== this._result[6] || a.blueOffset !== this._result[7]) {
                        var i = Math.pow(this._animationState._fadeProgress, 4);
                        a.alphaMultiplier += (this._result[0] - a.alphaMultiplier) * i,
                        a.redMultiplier += (this._result[1] - a.redMultiplier) * i,
                        a.greenMultiplier += (this._result[2] - a.greenMultiplier) * i,
                        a.blueMultiplier += (this._result[3] - a.blueMultiplier) * i,
                        a.alphaOffset += (this._result[4] - a.alphaOffset) * i,
                        a.redOffset += (this._result[5] - a.redOffset) * i,
                        a.greenOffset += (this._result[6] - a.greenOffset) * i,
                        a.blueOffset += (this._result[7] - a.blueOffset) * i,
                        this.slot._colorDirty = !0
                    }
                } else this._dirty && (this._dirty = !1, (a.alphaMultiplier !== this._result[0] || a.redMultiplier !== this._result[1] || a.greenMultiplier !== this._result[2] || a.blueMultiplier !== this._result[3] || a.alphaOffset !== this._result[4] || a.redOffset !== this._result[5] || a.greenOffset !== this._result[6] || a.blueOffset !== this._result[7]) && (a.alphaMultiplier = this._result[0], a.redMultiplier = this._result[1], a.greenMultiplier = this._result[2], a.blueMultiplier = this._result[3], a.alphaOffset = this._result[4], a.redOffset = this._result[5], a.greenOffset = this._result[6], a.blueOffset = this._result[7], this.slot._colorDirty = !0))
            }
        },
        e
    } (t.SlotTimelineState);
    t.SlotColorTimelineState = h;
    var u = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._current = [],
            e._delta = [],
            e._result = [],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.DeformTimelineState]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.vertexOffset = 0,
            this._dirty = !1,
            this._frameFloatOffset = 0,
            this._valueCount = 0,
            this._deformCount = 0,
            this._valueOffset = 0,
            this._current.length = 0,
            this._delta.length = 0,
            this._result.length = 0
        },
        e.prototype._onArriveAtFrame = function() {
            if (t.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var e = this._animationData.frameFloatOffset + this._frameValueOffset + this._frameIndex * this._valueCount,
                a = this._armature._armatureData.scale,
                i = this._frameFloatArray;
                if (2 === this._tweenState) {
                    var r = e + this._valueCount;
                    this._frameIndex === this._frameCount - 1 && (r = this._animationData.frameFloatOffset + this._frameValueOffset);
                    for (var n = 0; n < this._valueCount; ++n) this._delta[n] = i[r + n] * a - (this._current[n] = i[e + n] * a)
                } else for (var n = 0; n < this._valueCount; ++n) this._current[n] = i[e + n] * a
            } else for (var n = 0; n < this._valueCount; ++n) this._current[n] = 0
        },
        e.prototype._onUpdateFrame = function() {
            t.prototype._onUpdateFrame.call(this),
            this._dirty = !0,
            2 !== this._tweenState && (this._tweenState = 0);
            for (var e = 0; e < this._valueCount; ++e) this._result[e] = this._current[e] + this._delta[e] * this._tweenProgress
        },
        e.prototype.init = function(e, a, i) {
            if (t.prototype.init.call(this, e, a, i), null !== this._timelineData) {
                var r = this._animationData.frameIntOffset + this._timelineArray[this._timelineData.offset + 3];
                this.vertexOffset = this._frameIntArray[r + 0],
                this.vertexOffset < 0 && (this.vertexOffset += 65536),
                this._deformCount = this._frameIntArray[r + 1],
                this._valueCount = this._frameIntArray[r + 2],
                this._valueOffset = this._frameIntArray[r + 3],
                this._frameFloatOffset = this._frameIntArray[r + 4] + this._animationData.frameFloatOffset
            } else {
                var n = this.slot._deformVertices;
                this._deformCount = null !== n ? n.vertices.length: 0,
                this._valueCount = this._deformCount,
                this._valueOffset = 0,
                this._frameFloatOffset = 0
            }
            this._current.length = this._valueCount,
            this._delta.length = this._valueCount,
            this._result.length = this._valueCount;
            for (var s = 0; s < this._valueCount; ++s) this._delta[s] = 0
        },
        e.prototype.fadeOut = function() {
            this._tweenState = 0,
            this._dirty = !1
        },
        e.prototype.update = function(e) {
            var a = this.slot._deformVertices;
            if (null !== a && null !== a.verticesData && a.verticesData.offset === this.vertexOffset && (t.prototype.update.call(this, e), 0 !== this._tweenState || this._dirty)) {
                var i = a.vertices;
                if (0 !== this._animationState._fadeState || 0 !== this._animationState._subFadeState) {
                    for (var r = Math.pow(this._animationState._fadeProgress, 2), n = 0; n < this._deformCount; ++n) n < this._valueOffset ? i[n] += (this._frameFloatArray[this._frameFloatOffset + n] - i[n]) * r: n < this._valueOffset + this._valueCount ? i[n] += (this._result[n - this._valueOffset] - i[n]) * r: i[n] += (this._frameFloatArray[this._frameFloatOffset + n - this._valueCount] - i[n]) * r;
                    a.verticesDirty = !0
                } else if (this._dirty) {
                    this._dirty = !1;
                    for (var n = 0; n < this._deformCount; ++n) n < this._valueOffset ? i[n] = this._frameFloatArray[this._frameFloatOffset + n] : n < this._valueOffset + this._valueCount ? i[n] = this._result[n - this._valueOffset] : i[n] = this._frameFloatArray[this._frameFloatOffset + n - this._valueCount];
                    a.verticesDirty = !0
                }
            }
        },
        e
    } (t.SlotTimelineState);
    t.DeformTimelineState = u;
    var _ = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.IKConstraintTimelineState]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this._current = 0,
            this._delta = 0
        },
        e.prototype._onArriveAtFrame = function() {
            t.prototype._onArriveAtFrame.call(this);
            var e = this.constraint;
            if (null !== this._timelineData) {
                var a = this._animationData.frameIntOffset + this._frameValueOffset + 2 * this._frameIndex,
                i = this._frameIntArray,
                r = 0 !== i[a++];
                this._current = .01 * i[a++],
                2 === this._tweenState ? (this._frameIndex === this._frameCount - 1 && (a = this._animationData.frameIntOffset + this._frameValueOffset), this._delta = .01 * i[a + 1] - this._current) : this._delta = 0,
                e._bendPositive = r
            } else {
                var n = e._constraintData;
                this._current = n.weight,
                this._delta = 0,
                e._bendPositive = n.bendPositive
            }
            e.invalidUpdate()
        },
        e.prototype._onUpdateFrame = function() {
            t.prototype._onUpdateFrame.call(this),
            2 !== this._tweenState && (this._tweenState = 0);
            var e = this.constraint;
            e._weight = this._current + this._delta * this._tweenProgress,
            e.invalidUpdate()
        },
        e
    } (t.ConstraintTimelineState);
    t.IKConstraintTimelineState = _;
    var f = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e._floats = [0, 0, 0, 0, 0, 0],
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.AnimationTimelineState]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.animationState = null
        },
        e.prototype._onArriveAtFrame = function() {
            if (t.prototype._onArriveAtFrame.call(this), null !== this._timelineData) {
                var e = this._animationData.frameIntOffset + this._frameValueOffset + 2 * this._frameIndex,
                a = 1 / this.animationState._animationData.parent.frameRate,
                i = this._frameIntArray;
                this._floats[0] = i[e++] * a,
                this._floats[3] = .01 * i[e++],
                2 === this._tweenState ? (this._frameIndex === this._frameCount - 1 && (e = this._animationData.frameIntOffset + this._frameValueOffset), this._floats[1] = i[e++] * a - this._floats[0], this._floats[4] = .01 * i[e++] - this._floats[3]) : (this._floats[1] = 0, this._floats[4] = 0)
            }
        },
        e.prototype._onUpdateFrame = function() {
            t.prototype._onUpdateFrame.call(this),
            2 !== this._tweenState && (this._tweenState = 0),
            this._floats[0] >= 0 && (this._floats[2] = this._floats[0] + this._floats[1] * this._tweenProgress),
            this._floats[5] = this._floats[3] + this._floats[4] * this._tweenProgress
        },
        e.prototype.blend = function(t) {
            var e = this.animationState,
            a = e._blendState.blendWeight;
            2 === t ? (e.weight += this._floats[5] * a, e.currentTime += this._floats[2] * a) : (e.weight = this._floats[5] * a, e.currentTime = this._floats[2] * a)
        },
        e
    } (t.TweenTimelineState);
    t.AnimationTimelineState = f
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.actionDataToInstance = function(t, a, i) {
            0 === t.type ? a.type = e.FRAME_EVENT: a.type = 10 === t.type ? e.FRAME_EVENT: e.SOUND_EVENT,
            a.name = t.name,
            a.armature = i,
            a.actionData = t,
            a.data = t.data,
            null !== t.bone && (a.bone = i.getBone(t.bone.name)),
            null !== t.slot && (a.slot = i.getSlot(t.slot.name))
        },
        e.toString = function() {
            return "[class dragonBones.EventObject]"
        },
        e.prototype._onClear = function() {
            this.time = 0,
            this.type = "",
            this.name = "",
            this.armature = null,
            this.bone = null,
            this.slot = null,
            this.animationState = null,
            this.actionData = null,
            this.data = null
        },
        e.START = "start",
        e.LOOP_COMPLETE = "loopComplete",
        e.COMPLETE = "complete",
        e.FADE_IN = "fadeIn",
        e.FADE_IN_COMPLETE = "fadeInComplete",
        e.FADE_OUT = "fadeOut",
        e.FADE_OUT_COMPLETE = "fadeOutComplete",
        e.FRAME_EVENT = "frameEvent",
        e.SOUND_EVENT = "soundEvent",
        e
    } (t.BaseObject);
    t.EventObject = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function e() {}
        return e._getArmatureType = function(t) {
            switch (t.toLowerCase()) {
            case "stage":
                return 2;
            case "armature":
                return 0;
            case "movieclip":
                return 1;
            default:
                return 0
            }
        },
        e._getBoneType = function(t) {
            switch (t.toLowerCase()) {
            case "bone":
                return 0;
            case "surface":
                return 1;
            default:
                return 0
            }
        },
        e._getDisplayType = function(t) {
            switch (t.toLowerCase()) {
            case "image":
                return 0;
            case "mesh":
                return 2;
            case "armature":
                return 1;
            case "boundingbox":
                return 3;
            case "path":
                return 4;
            default:
                return 0
            }
        },
        e._getBoundingBoxType = function(t) {
            switch (t.toLowerCase()) {
            case "rectangle":
                return 0;
            case "ellipse":
                return 1;
            case "polygon":
                return 2;
            default:
                return 0
            }
        },
        e._getActionType = function(t) {
            switch (t.toLowerCase()) {
            case "play":
                return 0;
            case "frame":
                return 10;
            case "sound":
                return 11;
            default:
                return 0
            }
        },
        e._getBlendMode = function(t) {
            switch (t.toLowerCase()) {
            case "normal":
                return 0;
            case "add":
                return 1;
            case "alpha":
                return 2;
            case "darken":
                return 3;
            case "difference":
                return 4;
            case "erase":
                return 5;
            case "hardlight":
                return 6;
            case "invert":
                return 7;
            case "layer":
                return 8;
            case "lighten":
                return 9;
            case "multiply":
                return 10;
            case "overlay":
                return 11;
            case "screen":
                return 12;
            case "subtract":
                return 13;
            default:
                return 0
            }
        },
        e._getPositionMode = function(t) {
            switch (t.toLocaleLowerCase()) {
            case "percent":
                return 1;
            case "fixed":
                return 0;
            default:
                return 1
            }
        },
        e._getSpacingMode = function(t) {
            switch (t.toLocaleLowerCase()) {
            case "length":
                return 0;
            case "percent":
                return 2;
            case "fixed":
                return 1;
            default:
                return 0
            }
        },
        e._getRotateMode = function(t) {
            switch (t.toLocaleLowerCase()) {
            case "tangent":
                return 0;
            case "chain":
                return 1;
            case "chainscale":
                return 2;
            default:
                return 0
            }
        },
        e.parseDragonBonesData = function(e) {
            return console.warn("Deprecated."),
            e instanceof ArrayBuffer ? t.BinaryDataParser.getInstance().parseDragonBonesData(e) : t.ObjectDataParser.getInstance().parseDragonBonesData(e)
        },
        e.parseTextureAtlasData = function(a, i) {
            void 0 === i && (i = 1),
            console.warn("已废弃");
            for (var r = {},
            n = a[e.SUB_TEXTURE], s = 0, o = n.length; o > s; s++) {
                var l = n[s],
                h = l[e.NAME],
                u = new t.Rectangle,
                _ = null;
                u.x = l[e.X] / i,
                u.y = l[e.Y] / i,
                u.width = l[e.WIDTH] / i,
                u.height = l[e.HEIGHT] / i,
                e.FRAME_WIDTH in l && (_ = new t.Rectangle, _.x = l[e.FRAME_X] / i, _.y = l[e.FRAME_Y] / i, _.width = l[e.FRAME_WIDTH] / i, _.height = l[e.FRAME_HEIGHT] / i),
                r[h] = {
                    region: u,
                    frame: _,
                    rotated: !1
                }
            }
            return r
        },
        e.DATA_VERSION_2_3 = "2.3",
        e.DATA_VERSION_3_0 = "3.0",
        e.DATA_VERSION_4_0 = "4.0",
        e.DATA_VERSION_4_5 = "4.5",
        e.DATA_VERSION_5_0 = "5.0",
        e.DATA_VERSION_5_5 = "5.5",
        e.DATA_VERSION = e.DATA_VERSION_5_5,
        e.DATA_VERSIONS = [e.DATA_VERSION_4_0, e.DATA_VERSION_4_5, e.DATA_VERSION_5_0, e.DATA_VERSION_5_5],
        e.TEXTURE_ATLAS = "textureAtlas",
        e.SUB_TEXTURE = "SubTexture",
        e.FORMAT = "format",
        e.IMAGE_PATH = "imagePath",
        e.WIDTH = "width",
        e.HEIGHT = "height",
        e.ROTATED = "rotated",
        e.FRAME_X = "frameX",
        e.FRAME_Y = "frameY",
        e.FRAME_WIDTH = "frameWidth",
        e.FRAME_HEIGHT = "frameHeight",
        e.DRADON_BONES = "dragonBones",
        e.USER_DATA = "userData",
        e.ARMATURE = "armature",
        e.BONE = "bone",
        e.SURFACE = "surface",
        e.SLOT = "slot",
        e.CONSTRAINT = "constraint",
        e.IK = "ik",
        e.PATH_CONSTRAINT = "path",
        e.SKIN = "skin",
        e.DISPLAY = "display",
        e.ANIMATION = "animation",
        e.Z_ORDER = "zOrder",
        e.FFD = "ffd",
        e.FRAME = "frame",
        e.TRANSLATE_FRAME = "translateFrame",
        e.ROTATE_FRAME = "rotateFrame",
        e.SCALE_FRAME = "scaleFrame",
        e.DISPLAY_FRAME = "displayFrame",
        e.COLOR_FRAME = "colorFrame",
        e.DEFAULT_ACTIONS = "defaultActions",
        e.ACTIONS = "actions",
        e.EVENTS = "events",
        e.INTS = "ints",
        e.FLOATS = "floats",
        e.STRINGS = "strings",
        e.CANVAS = "canvas",
        e.TRANSFORM = "transform",
        e.PIVOT = "pivot",
        e.AABB = "aabb",
        e.COLOR = "color",
        e.VERSION = "version",
        e.COMPATIBLE_VERSION = "compatibleVersion",
        e.FRAME_RATE = "frameRate",
        e.TYPE = "type",
        e.SUB_TYPE = "subType",
        e.NAME = "name",
        e.PARENT = "parent",
        e.TARGET = "target",
        e.STAGE = "stage",
        e.SHARE = "share",
        e.PATH = "path",
        e.LENGTH = "length",
        e.DISPLAY_INDEX = "displayIndex",
        e.BLEND_MODE = "blendMode",
        e.INHERIT_TRANSLATION = "inheritTranslation",
        e.INHERIT_ROTATION = "inheritRotation",
        e.INHERIT_SCALE = "inheritScale",
        e.INHERIT_REFLECTION = "inheritReflection",
        e.INHERIT_ANIMATION = "inheritAnimation",
        e.INHERIT_DEFORM = "inheritDeform",
        e.SEGMENT_X = "segmentX",
        e.SEGMENT_Y = "segmentY",
        e.BEND_POSITIVE = "bendPositive",
        e.CHAIN = "chain",
        e.WEIGHT = "weight",
        e.FADE_IN_TIME = "fadeInTime",
        e.PLAY_TIMES = "playTimes",
        e.SCALE = "scale",
        e.OFFSET = "offset",
        e.POSITION = "position",
        e.DURATION = "duration",
        e.TWEEN_EASING = "tweenEasing",
        e.TWEEN_ROTATE = "tweenRotate",
        e.TWEEN_SCALE = "tweenScale",
        e.CLOCK_WISE = "clockwise",
        e.CURVE = "curve",
        e.SOUND = "sound",
        e.EVENT = "event",
        e.ACTION = "action",
        e.X = "x",
        e.Y = "y",
        e.SKEW_X = "skX",
        e.SKEW_Y = "skY",
        e.SCALE_X = "scX",
        e.SCALE_Y = "scY",
        e.VALUE = "value",
        e.ROTATE = "rotate",
        e.SKEW = "skew",
        e.ALPHA_OFFSET = "aO",
        e.RED_OFFSET = "rO",
        e.GREEN_OFFSET = "gO",
        e.BLUE_OFFSET = "bO",
        e.ALPHA_MULTIPLIER = "aM",
        e.RED_MULTIPLIER = "rM",
        e.GREEN_MULTIPLIER = "gM",
        e.BLUE_MULTIPLIER = "bM",
        e.UVS = "uvs",
        e.VERTICES = "vertices",
        e.TRIANGLES = "triangles",
        e.WEIGHTS = "weights",
        e.SLOT_POSE = "slotPose",
        e.BONE_POSE = "bonePose",
        e.GLUE_WEIGHTS = "glueWeights",
        e.GLUE_MESHES = "glueMeshes",
        e.BONES = "bones",
        e.POSITION_MODE = "positionMode",
        e.SPACING_MODE = "spacingMode",
        e.ROTATE_MODE = "rotateMode",
        e.SPACING = "spacing",
        e.ROTATE_OFFSET = "rotateOffset",
        e.ROTATE_MIX = "rotateMix",
        e.TRANSLATE_MIX = "translateMix",
        e.TARGET_DISPLAY = "targetDisplay",
        e.CLOSED = "closed",
        e.CONSTANT_SPEED = "constantSpeed",
        e.VERTEX_COUNT = "vertexCount",
        e.LENGTHS = "lengths",
        e.GOTO_AND_PLAY = "gotoAndPlay",
        e.DEFAULT_NAME = "default",
        e
    } ();
    t.DataParser = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function i() {
            var a = null !== e && e.apply(this, arguments) || this;
            return a._rawTextureAtlasIndex = 0,
            a._rawBones = [],
            a._data = null,
            a._armature = null,
            a._bone = null,
            a._surface = null,
            a._slot = null,
            a._skin = null,
            a._mesh = null,
            a._animation = null,
            a._timeline = null,
            a._rawTextureAtlases = null,
            a._defaultColorOffset = -1,
            a._prevClockwise = 0,
            a._prevRotation = 0,
            a._helpMatrixA = new t.Matrix,
            a._helpMatrixB = new t.Matrix,
            a._helpTransform = new t.Transform,
            a._helpColorTransform = new t.ColorTransform,
            a._helpPoint = new t.Point,
            a._helpArray = [],
            a._intArray = [],
            a._floatArray = [],
            a._frameIntArray = [],
            a._frameFloatArray = [],
            a._frameArray = [],
            a._timelineArray = [],
            a._cacheRawMeshes = [],
            a._cacheMeshes = [],
            a._actionFrames = [],
            a._weightSlotPose = {},
            a._weightBonePoses = {},
            a._cacheBones = {},
            a._slotChildActions = {},
            a
        }
        return __extends(i, e),
        i._getBoolean = function(t, e, a) {
            if (e in t) {
                var i = t[e],
                r = typeof i;
                if ("boolean" === r) return i;
                if ("string" !== r) return !! i;
                switch (i) {
                case "0":
                case "NaN":
                case "":
                case "false":
                case "null":
                case "undefined":
                    return ! 1;
                default:
                    return ! 0
                }
            }
            return a
        },
        i._getNumber = function(t, e, a) {
            if (e in t) {
                var i = t[e];
                return null === i || "NaN" === i ? a: +i || 0
            }
            return a
        },
        i._getString = function(e, a, i) {
            if (a in e) {
                var r = e[a],
                n = typeof r;
                if ("string" === n) {
                    if (t.DragonBones.webAssembly) for (var s = 0,
                    o = r.length; o > s; ++s) if (r.charCodeAt(s) > 255) return encodeURI(r);
                    return r
                }
                return String(r)
            }
            return i
        },
        i.prototype._getCurvePoint = function(t, e, a, i, r, n, s, o, l, h) {
            var u = 1 - l,
            _ = u * u,
            f = l * l,
            c = u * _,
            p = 3 * l * _,
            m = 3 * u * f,
            d = l * f;
            h.x = c * t + p * a + m * r + d * s,
            h.y = c * e + p * i + m * n + d * o
        },
        i.prototype._samplingEasingCurve = function(t, e) {
            for (var a = t.length,
            i = -2,
            r = 0,
            n = e.length; n > r; ++r) {
                for (var s = (r + 1) / (n + 1); (a > i + 6 ? t[i + 6] : 1) < s;) i += 6;
                for (var o = i >= 0 && a > i + 6,
                l = o ? t[i] : 0, h = o ? t[i + 1] : 0, u = t[i + 2], _ = t[i + 3], f = t[i + 4], c = t[i + 5], p = o ? t[i + 6] : 1, m = o ? t[i + 7] : 1, d = 0, y = 1; y - d > 1e-4;) {
                    var g = .5 * (y + d);
                    this._getCurvePoint(l, h, u, _, f, c, p, m, g, this._helpPoint),
                    s - this._helpPoint.x > 0 ? d = g: y = g
                }
                e[r] = this._helpPoint.y
            }
        },
        i.prototype._parseActionDataInFrame = function(e, a, i, r) {
            t.DataParser.EVENT in e && this._mergeActionFrame(e[t.DataParser.EVENT], a, 10, i, r),
            t.DataParser.SOUND in e && this._mergeActionFrame(e[t.DataParser.SOUND], a, 11, i, r),
            t.DataParser.ACTION in e && this._mergeActionFrame(e[t.DataParser.ACTION], a, 0, i, r),
            t.DataParser.EVENTS in e && this._mergeActionFrame(e[t.DataParser.EVENTS], a, 10, i, r),
            t.DataParser.ACTIONS in e && this._mergeActionFrame(e[t.DataParser.ACTIONS], a, 0, i, r)
        },
        i.prototype._mergeActionFrame = function(e, i, r, n, s) {
            for (var o = t.DragonBones.webAssembly ? this._armature.actions.size() : this._armature.actions.length, l = this._parseActionData(e, r, n, s), h = 0, u = null, _ = 0, f = l; _ < f.length; _++) {
                var c = f[_];
                this._armature.addAction(c, !1)
            }
            0 === this._actionFrames.length && (u = new a, u.frameStart = 0, this._actionFrames.push(u), u = null);
            for (var p = 0,
            m = this._actionFrames; p < m.length; p++) {
                var d = m[p];
                if (d.frameStart === i) {
                    u = d;
                    break
                }
                if (d.frameStart > i) break;
                h++
            }
            null === u && (u = new a, u.frameStart = i, this._actionFrames.splice(h + 1, 0, u));
            for (var y = 0; y < l.length; ++y) u.actions.push(o + y)
        },
        i.prototype._parseArmature = function(e, a) {
            var r = t.BaseObject.borrowObject(t.ArmatureData);
            if (r.name = i._getString(e, t.DataParser.NAME, ""), r.frameRate = i._getNumber(e, t.DataParser.FRAME_RATE, this._data.frameRate), r.scale = a, t.DataParser.TYPE in e && "string" == typeof e[t.DataParser.TYPE] ? r.type = t.DataParser._getArmatureType(e[t.DataParser.TYPE]) : r.type = i._getNumber(e, t.DataParser.TYPE, 0), 0 === r.frameRate && (r.frameRate = 24), this._armature = r, t.DataParser.CANVAS in e) {
                var n = e[t.DataParser.CANVAS],
                s = t.BaseObject.borrowObject(t.CanvasData);
                t.DataParser.COLOR in n ? s.hasBackground = !0 : s.hasBackground = !1,
                s.color = i._getNumber(n, t.DataParser.COLOR, 0),
                s.x = i._getNumber(n, t.DataParser.X, 0) * r.scale,
                s.y = i._getNumber(n, t.DataParser.Y, 0) * r.scale,
                s.width = i._getNumber(n, t.DataParser.WIDTH, 0) * r.scale,
                s.height = i._getNumber(n, t.DataParser.HEIGHT, 0) * r.scale,
                r.canvas = s
            }
            if (t.DataParser.AABB in e) {
                var o = e[t.DataParser.AABB];
                r.aabb.x = i._getNumber(o, t.DataParser.X, 0) * r.scale,
                r.aabb.y = i._getNumber(o, t.DataParser.Y, 0) * r.scale,
                r.aabb.width = i._getNumber(o, t.DataParser.WIDTH, 0) * r.scale,
                r.aabb.height = i._getNumber(o, t.DataParser.HEIGHT, 0) * r.scale
            }
            if (t.DataParser.BONE in e) for (var l = e[t.DataParser.BONE], h = 0, u = l; h < u.length; h++) {
                var _ = u[h],
                f = i._getString(_, t.DataParser.PARENT, ""),
                c = this._parseBone(_);
                if (f.length > 0) {
                    var p = r.getBone(f);
                    null !== p ? c.parent = p: (f in this._cacheBones || (this._cacheBones[f] = []), this._cacheBones[f].push(c))
                }
                if (c.name in this._cacheBones) {
                    for (var m = 0,
                    d = this._cacheBones[c.name]; m < d.length; m++) {
                        var y = d[m];
                        y.parent = c
                    }
                    delete this._cacheBones[c.name]
                }
                r.addBone(c),
                this._rawBones.push(c)
            }
            if (t.DataParser.IK in e) for (var g = e[t.DataParser.IK], v = 0, b = g; v < b.length; v++) {
                var D = b[v],
                T = this._parseIKConstraint(D);
                T && r.addConstraint(T)
            }
            if (r.sortBones(), t.DataParser.SLOT in e) for (var A = 0,
            x = e[t.DataParser.SLOT], O = 0, P = x; O < P.length; O++) {
                var E = P[O];
                r.addSlot(this._parseSlot(E, A++))
            }
            if (t.DataParser.SKIN in e) for (var S = e[t.DataParser.SKIN], M = 0, B = S; M < B.length; M++) {
                var C = B[M];
                r.addSkin(this._parseSkin(C))
            }
            if (t.DataParser.PATH_CONSTRAINT in e) for (var w = e[t.DataParser.PATH_CONSTRAINT], I = 0, F = w; I < F.length; I++) {
                var N = F[I],
                T = this._parsePathConstraint(N);
                T && r.addConstraint(T)
            }
            for (var R = 0,
            j = this._cacheRawMeshes.length; j > R; ++R) {
                var k = this._cacheRawMeshes[R];
                t.DataParser.GLUE_WEIGHTS in k && t.DataParser.GLUE_MESHES in k && this._parseMeshGlue(k, this._cacheMeshes[R])
            }
            for (var R = 0,
            j = this._cacheRawMeshes.length; j > R; ++R) {
                var L = this._cacheRawMeshes[R],
                V = i._getString(L, t.DataParser.SHARE, "");
                if (0 !== V.length) {
                    var U = i._getString(L, t.DataParser.SKIN, t.DataParser.DEFAULT_NAME);
                    0 === U.length && (U = t.DataParser.DEFAULT_NAME);
                    var Y = r.getMesh(U, "", V);
                    if (null !== Y) {
                        var X = this._cacheMeshes[R];
                        X.vertices.shareFrom(Y.vertices)
                    }
                }
            }
            if (t.DataParser.ANIMATION in e) for (var G = e[t.DataParser.ANIMATION], H = 0, $ = G; H < $.length; H++) {
                var W = $[H],
                z = this._parseAnimation(W);
                r.addAnimation(z)
            }
            if (t.DataParser.DEFAULT_ACTIONS in e) for (var K = this._parseActionData(e[t.DataParser.DEFAULT_ACTIONS], 0, null, null), Z = 0, q = K; Z < q.length; Z++) {
                var J = q[Z];
                if (r.addAction(J, !0), 0 === J.type) {
                    var z = r.getAnimation(J.name);
                    null !== z && (r.defaultAnimation = z)
                }
            }
            if (t.DataParser.ACTIONS in e) for (var K = this._parseActionData(e[t.DataParser.ACTIONS], 0, null, null), Q = 0, te = K; Q < te.length; Q++) {
                var J = te[Q];
                r.addAction(J, !1)
            }
            this._rawBones.length = 0,
            this._cacheRawMeshes.length = 0,
            this._cacheMeshes.length = 0,
            this._armature = null;
            for (var ee in this._weightSlotPose) delete this._weightSlotPose[ee];
            for (var ee in this._weightBonePoses) delete this._weightBonePoses[ee];
            for (var ee in this._cacheBones) delete this._cacheBones[ee];
            for (var ee in this._slotChildActions) delete this._slotChildActions[ee];
            return r
        },
        i.prototype._parseBone = function(e) {
            var a = 0,
            r = this._armature.scale;
            if (a = t.DataParser.TYPE in e && "string" == typeof e[t.DataParser.TYPE] ? t.DataParser._getBoneType(e[t.DataParser.TYPE]) : i._getNumber(e, t.DataParser.TYPE, 0), 0 === a) {
                var n = t.BaseObject.borrowObject(t.BoneData);
                return n.inheritTranslation = i._getBoolean(e, t.DataParser.INHERIT_TRANSLATION, !0),
                n.inheritRotation = i._getBoolean(e, t.DataParser.INHERIT_ROTATION, !0),
                n.inheritScale = i._getBoolean(e, t.DataParser.INHERIT_SCALE, !0),
                n.inheritReflection = i._getBoolean(e, t.DataParser.INHERIT_REFLECTION, !0),
                n.length = i._getNumber(e, t.DataParser.LENGTH, 0) * r,
                n.name = i._getString(e, t.DataParser.NAME, ""),
                t.DataParser.TRANSFORM in e && this._parseTransform(e[t.DataParser.TRANSFORM], n.transform, r),
                n
            }
            var s = t.BaseObject.borrowObject(t.SurfaceData);
            if (s.name = i._getString(e, t.DataParser.NAME, ""), s.segmentX = i._getNumber(e, t.DataParser.SEGMENT_X, 0), s.segmentY = i._getNumber(e, t.DataParser.SEGMENT_Y, 0), s.vertices.length = (s.segmentX + 1) * (s.segmentY + 1) * 2, t.DataParser.VERTICES in e) for (var o = e[t.DataParser.VERTICES], l = 0, h = s.vertices.length; h > l; ++l) l < o.length ? s.vertices[l] = o[l] * r: s.vertices[l] = 0;
            return s
        },
        i.prototype._parseIKConstraint = function(e) {
            var a = this._armature.getBone(i._getString(e, t.DataParser.BONE, ""));
            if (null === a) return null;
            var r = this._armature.getBone(i._getString(e, t.DataParser.TARGET, ""));
            if (null === r) return null;
            var n = t.BaseObject.borrowObject(t.IKConstraintData);
            n.scaleEnabled = i._getBoolean(e, t.DataParser.SCALE, !1),
            n.bendPositive = i._getBoolean(e, t.DataParser.BEND_POSITIVE, !0),
            n.weight = i._getNumber(e, t.DataParser.WEIGHT, 1),
            n.name = i._getString(e, t.DataParser.NAME, ""),
            n.type = 0,
            n.target = r;
            var s = i._getNumber(e, t.DataParser.CHAIN, 0);
            return s > 0 && null !== a.parent ? (n.root = a.parent, n.bone = a) : (n.root = a, n.bone = null),
            n
        },
        i.prototype._parsePathConstraint = function(e) {
            var a = this._armature.getSlot(i._getString(e, t.DataParser.TARGET, ""));
            if (null === a) return null;
            var r = this._armature.defaultSkin;
            if (null === r) return null;
            var n = r.getDisplay(a.name, i._getString(e, t.DataParser.TARGET_DISPLAY, a.name));
            if (null === n || !(n instanceof t.PathDisplayData)) return null;
            var s = e[t.DataParser.BONES];
            if (null === s || 0 === s.length) return null;
            var o = t.BaseObject.borrowObject(t.PathConstraintData);
            o.name = i._getString(e, t.DataParser.NAME, ""),
            o.type = 1,
            o.pathSlot = a,
            o.pathDisplayData = n,
            o.target = a.parent,
            o.positionMode = t.DataParser._getPositionMode(i._getString(e, t.DataParser.POSITION_MODE, "")),
            o.spacingMode = t.DataParser._getSpacingMode(i._getString(e, t.DataParser.SPACING_MODE, "")),
            o.rotateMode = t.DataParser._getRotateMode(i._getString(e, t.DataParser.ROTATE_MODE, "")),
            o.position = i._getNumber(e, t.DataParser.POSITION, 0),
            o.spacing = i._getNumber(e, t.DataParser.SPACING, 0),
            o.rotateOffset = i._getNumber(e, t.DataParser.ROTATE_OFFSET, 0),
            o.rotateMix = i._getNumber(e, t.DataParser.ROTATE_MIX, 1),
            o.translateMix = i._getNumber(e, t.DataParser.TRANSLATE_MIX, 1);
            for (var l = 0,
            h = s; l < h.length; l++) {
                var u = h[l],
                _ = this._armature.getBone(u);
                null !== _ && (o.AddBone(_), null === o.root && (o.root = _))
            }
            return o
        },
        i.prototype._parseSlot = function(e, a) {
            var r = t.BaseObject.borrowObject(t.SlotData);
            return r.displayIndex = i._getNumber(e, t.DataParser.DISPLAY_INDEX, 0),
            r.zOrder = a,
            r.name = i._getString(e, t.DataParser.NAME, ""),
            r.parent = this._armature.getBone(i._getString(e, t.DataParser.PARENT, "")),
            t.DataParser.BLEND_MODE in e && "string" == typeof e[t.DataParser.BLEND_MODE] ? r.blendMode = t.DataParser._getBlendMode(e[t.DataParser.BLEND_MODE]) : r.blendMode = i._getNumber(e, t.DataParser.BLEND_MODE, 0),
            t.DataParser.COLOR in e ? (r.color = t.SlotData.createColor(), this._parseColorTransform(e[t.DataParser.COLOR], r.color)) : r.color = t.SlotData.DEFAULT_COLOR,
            t.DataParser.ACTIONS in e && (this._slotChildActions[r.name] = this._parseActionData(e[t.DataParser.ACTIONS], 0, null, null)),
            r
        },
        i.prototype._parseSkin = function(e) {
            var a = t.BaseObject.borrowObject(t.SkinData);
            if (a.name = i._getString(e, t.DataParser.NAME, t.DataParser.DEFAULT_NAME), 0 === a.name.length && (a.name = t.DataParser.DEFAULT_NAME), t.DataParser.SLOT in e) {
                var r = e[t.DataParser.SLOT];
                this._skin = a;
                for (var n = 0,
                s = r; n < s.length; n++) {
                    var o = s[n],
                    l = i._getString(o, t.DataParser.NAME, ""),
                    h = this._armature.getSlot(l);
                    if (null !== h) {
                        if (this._slot = h, t.DataParser.DISPLAY in o) for (var u = o[t.DataParser.DISPLAY], _ = 0, f = u; _ < f.length; _++) {
                            var c = f[_];
                            c ? a.addDisplay(l, this._parseDisplay(c)) : a.addDisplay(l, null)
                        }
                        this._slot = null
                    }
                }
                this._skin = null
            }
            return a
        },
        i.prototype._parseDisplay = function(e) {
            var a = i._getString(e, t.DataParser.NAME, ""),
            r = i._getString(e, t.DataParser.PATH, ""),
            n = 0,
            s = null;
            switch (n = t.DataParser.TYPE in e && "string" == typeof e[t.DataParser.TYPE] ? t.DataParser._getDisplayType(e[t.DataParser.TYPE]) : i._getNumber(e, t.DataParser.TYPE, n)) {
            case 0:
                var o = s = t.BaseObject.borrowObject(t.ImageDisplayData);
                o.name = a,
                o.path = r.length > 0 ? r: a,
                this._parsePivot(e, o);
                break;
            case 1:
                var l = s = t.BaseObject.borrowObject(t.ArmatureDisplayData);
                if (l.name = a, l.path = r.length > 0 ? r: a, l.inheritAnimation = !0, t.DataParser.ACTIONS in e) for (var h = this._parseActionData(e[t.DataParser.ACTIONS], 0, null, null), u = 0, _ = h; u < _.length; u++) {
                    var f = _[u];
                    l.addAction(f)
                } else if (this._slot.name in this._slotChildActions) {
                    var c = this._skin.getDisplays(this._slot.name);
                    if (null === c ? 0 === this._slot.displayIndex: this._slot.displayIndex === c.length) {
                        for (var p = 0,
                        m = this._slotChildActions[this._slot.name]; p < m.length; p++) {
                            var f = m[p];
                            l.addAction(f)
                        }
                        delete this._slotChildActions[this._slot.name]
                    }
                }
                break;
            case 2:
                var d = s = t.BaseObject.borrowObject(t.MeshDisplayData);
                d.vertices.inheritDeform = i._getBoolean(e, t.DataParser.INHERIT_DEFORM, !0),
                d.name = a,
                d.path = r.length > 0 ? r: a,
                d.vertices.data = this._data,
                t.DataParser.SHARE in e ? (this._cacheRawMeshes.push(e), this._cacheMeshes.push(d)) : this._parseMesh(e, d),
                t.DataParser.GLUE_WEIGHTS in e && t.DataParser.GLUE_MESHES in e && (this._cacheRawMeshes.push(e), this._cacheMeshes.push(d));
                break;
            case 3:
                var y = this._parseBoundingBox(e);
                if (null !== y) {
                    var g = s = t.BaseObject.borrowObject(t.BoundingBoxDisplayData);
                    g.name = a,
                    g.path = r.length > 0 ? r: a,
                    g.boundingBox = y
                }
                break;
            case 4:
                var v = e[t.DataParser.LENGTHS],
                b = s = t.BaseObject.borrowObject(t.PathDisplayData);
                b.closed = i._getBoolean(e, t.DataParser.CLOSED, !1),
                b.constantSpeed = i._getBoolean(e, t.DataParser.CONSTANT_SPEED, !1),
                b.name = a,
                b.path = r.length > 0 ? r: a,
                b.vertices.data = this._data,
                b.curveLengths.length = v.length;
                for (var D = 0,
                T = v.length; T > D; ++D) b.curveLengths[D] = v[D];
                this._parsePath(e, b)
            }
            return null !== s && t.DataParser.TRANSFORM in e && this._parseTransform(e[t.DataParser.TRANSFORM], s.transform, this._armature.scale),
            s
        },
        i.prototype._parsePath = function(e, a) {
            var r = e[t.DataParser.VERTICES],
            n = i._getNumber(e, t.DataParser.VERTEX_COUNT, 0),
            s = this._floatArray.length,
            o = this._intArray.length;
            if (a.vertices.offset = o, this._intArray.length += 2, this._intArray[o + 0] = n, this._intArray[o + 2] = s, t.DataParser.WEIGHTS in e) {
                var l = e[t.DataParser.WEIGHTS],
                h = e[t.DataParser.BONES],
                u = h.length,
                _ = Math.floor(l.length - n) / 2,
                f = this._intArray.length,
                c = this._floatArray.length,
                p = this._armature.sortedBones,
                m = t.BaseObject.borrowObject(t.WeightData);
                m.count = _,
                m.offset = f,
                this._intArray.length += 2 + u + n + _,
                this._intArray[f + 0] = u,
                this._intArray[f + 1] = c;
                for (var d = 0; u > d; d++) {
                    var y = h[d],
                    g = this._rawBones[y];
                    m.addBone(g),
                    this._intArray[f + 2 + d] = p.indexOf(g)
                }
                this._floatArray.length += 3 * _;
                for (var d = 0,
                v = 0,
                b = 0,
                D = f + 2 + u,
                T = c; _ > d; d++) {
                    var A = l[v++];
                    this._intArray[D++] = A;
                    for (var x = 0; A > x; x++) {
                        var O = l[v++],
                        P = l[v++],
                        E = r[b++],
                        S = r[b++];
                        this._intArray[D++] = h.indexOf(O),
                        this._floatArray[T++] = P,
                        this._floatArray[T++] = E,
                        this._floatArray[T++] = S
                    }
                }
                a.vertices.weight = m
            } else {
                this._floatArray.length += r.length;
                for (var d = 0,
                M = r.length; M > d; ++d) this._floatArray[s + d] = r[d]
            }
        },
        i.prototype._parsePivot = function(e, a) {
            if (t.DataParser.PIVOT in e) {
                var r = e[t.DataParser.PIVOT];
                a.pivot.x = i._getNumber(r, t.DataParser.X, 0),
                a.pivot.y = i._getNumber(r, t.DataParser.Y, 0)
            } else a.pivot.x = .5,
            a.pivot.y = .5
        },
        i.prototype._parseMesh = function(e, a) {
            var i = e[t.DataParser.VERTICES],
            r = e[t.DataParser.UVS],
            n = e[t.DataParser.TRIANGLES],
            s = Math.floor(i.length / 2),
            o = Math.floor(n.length / 3),
            l = this._floatArray.length,
            h = l + 2 * s,
            u = this._intArray.length,
            _ = this._skin.name + "_" + this._slot.name + "_" + a.name;
            a.vertices.offset = u,
            this._intArray.length += 4 + 3 * o,
            this._intArray[u + 0] = s,
            this._intArray[u + 1] = o,
            this._intArray[u + 2] = l;
            for (var f = 0,
            c = 3 * o; c > f; ++f) this._intArray[u + 4 + f] = n[f];
            this._floatArray.length += 2 * s + 2 * s;
            for (var f = 0,
            c = 2 * s; c > f; ++f) this._floatArray[l + f] = i[f],
            this._floatArray[h + f] = r[f];
            if (t.DataParser.WEIGHTS in e) {
                var p = e[t.DataParser.WEIGHTS],
                m = e[t.DataParser.SLOT_POSE],
                d = e[t.DataParser.BONE_POSE],
                y = this._armature.sortedBones,
                g = new Array,
                v = Math.floor(d.length / 7),
                b = this._floatArray.length,
                D = Math.floor(p.length - s) / 2,
                T = this._intArray.length,
                A = t.BaseObject.borrowObject(t.WeightData);
                A.count = D,
                A.offset = T,
                g.length = v,
                this._intArray.length += 2 + v + s + D,
                this._intArray[T + 1] = b;
                for (var f = 0; v > f; ++f) {
                    var x = d[7 * f],
                    O = this._rawBones[x];
                    A.addBone(O),
                    g[f] = x,
                    this._intArray[T + 2 + f] = y.indexOf(O)
                }
                this._floatArray.length += 3 * D,
                this._helpMatrixA.copyFromArray(m, 0);
                for (var f = 0,
                P = 0,
                E = T + 2 + v,
                S = b; s > f; ++f) {
                    var M = 2 * f,
                    B = this._intArray[E++] = p[P++],
                    C = this._floatArray[l + M],
                    w = this._floatArray[l + M + 1];
                    this._helpMatrixA.transformPoint(C, w, this._helpPoint),
                    C = this._helpPoint.x,
                    w = this._helpPoint.y;
                    for (var I = 0; B > I; ++I) {
                        var x = p[P++],
                        F = g.indexOf(x);
                        this._helpMatrixB.copyFromArray(d, 7 * F + 1),
                        this._helpMatrixB.invert(),
                        this._helpMatrixB.transformPoint(C, w, this._helpPoint),
                        this._intArray[E++] = F,
                        this._floatArray[S++] = p[P++],
                        this._floatArray[S++] = this._helpPoint.x,
                        this._floatArray[S++] = this._helpPoint.y
                    }
                }
                a.vertices.weight = A,
                this._weightSlotPose[_] = m,
                this._weightBonePoses[_] = d
            }
        },
        i.prototype._parseMeshGlue = function(t, e) {},
        i.prototype._parseBoundingBox = function(e) {
            var a = null,
            r = 0;
            switch (r = t.DataParser.SUB_TYPE in e && "string" == typeof e[t.DataParser.SUB_TYPE] ? t.DataParser._getBoundingBoxType(e[t.DataParser.SUB_TYPE]) : i._getNumber(e, t.DataParser.SUB_TYPE, r)) {
            case 0:
                a = t.BaseObject.borrowObject(t.RectangleBoundingBoxData);
                break;
            case 1:
                a = t.BaseObject.borrowObject(t.EllipseBoundingBoxData);
                break;
            case 2:
                a = this._parsePolygonBoundingBox(e)
            }
            return null !== a && (a.color = i._getNumber(e, t.DataParser.COLOR, 0), (0 === a.type || 1 === a.type) && (a.width = i._getNumber(e, t.DataParser.WIDTH, 0), a.height = i._getNumber(e, t.DataParser.HEIGHT, 0))),
            a
        },
        i.prototype._parsePolygonBoundingBox = function(e) {
            var a = t.BaseObject.borrowObject(t.PolygonBoundingBoxData);
            if (t.DataParser.VERTICES in e) {
                var i = this._armature.scale,
                r = e[t.DataParser.VERTICES],
                n = a.vertices;
                t.DragonBones.webAssembly ? n.resize(r.length, 0) : n.length = r.length;
                for (var s = 0,
                o = r.length; o > s; s += 2) {
                    var l = r[s] * i,
                    h = r[s + 1] * i;
                    t.DragonBones.webAssembly ? (n.set(s, l), n.set(s + 1, h)) : (n[s] = l, n[s + 1] = h),
                    0 === s ? (a.x = l, a.y = h, a.width = l, a.height = h) : (l < a.x ? a.x = l: l > a.width && (a.width = l), h < a.y ? a.y = h: h > a.height && (a.height = h))
                }
                a.width -= a.x,
                a.height -= a.y
            } else console.warn("Data error.\n Please reexport DragonBones Data to fixed the bug.");
            return a
        },
        i.prototype._parseAnimation = function(e) {
            var a = t.BaseObject.borrowObject(t.AnimationData);
            if (a.frameCount = Math.max(i._getNumber(e, t.DataParser.DURATION, 1), 1), a.playTimes = i._getNumber(e, t.DataParser.PLAY_TIMES, 1), a.duration = a.frameCount / this._armature.frameRate, a.fadeInTime = i._getNumber(e, t.DataParser.FADE_IN_TIME, 0), a.scale = i._getNumber(e, t.DataParser.SCALE, 1), a.name = i._getString(e, t.DataParser.NAME, t.DataParser.DEFAULT_NAME), 0 === a.name.length && (a.name = t.DataParser.DEFAULT_NAME), a.frameIntOffset = this._frameIntArray.length, a.frameFloatOffset = this._frameFloatArray.length, a.frameOffset = this._frameArray.length, this._animation = a, t.DataParser.FRAME in e) {
                var r = e[t.DataParser.FRAME],
                n = r.length;
                if (n > 0) for (var s = 0,
                o = 0; n > s; ++s) {
                    var l = r[s];
                    this._parseActionDataInFrame(l, o, null, null),
                    o += i._getNumber(l, t.DataParser.DURATION, 1)
                }
            }
            if (t.DataParser.Z_ORDER in e && (this._animation.zOrderTimeline = this._parseTimeline(e[t.DataParser.Z_ORDER], null, t.DataParser.FRAME, 1, !1, !1, 0, this._parseZOrderFrame)), t.DataParser.BONE in e) for (var h = e[t.DataParser.BONE], u = 0, _ = h; u < _.length; u++) {
                var f = _[u];
                this._parseBoneTimeline(f)
            }
            if (t.DataParser.SURFACE in e) for (var h = e[t.DataParser.SURFACE], c = 0, p = h; c < p.length; c++) {
                var f = p[c],
                m = i._getString(f, t.DataParser.NAME, "");
                if (this._surface = this._armature.getBone(m), null !== this._surface) {
                    var d = this._parseTimeline(f, null, t.DataParser.FRAME, 50, !1, !0, 0, this._parseSurfaceFrame);
                    null !== d && this._animation.addSurfaceTimeline(this._surface, d),
                    this._surface = null
                }
            }
            if (t.DataParser.SLOT in e) for (var h = e[t.DataParser.SLOT], y = 0, g = h; y < g.length; y++) {
                var f = g[y];
                this._parseSlotTimeline(f)
            }
            if (t.DataParser.FFD in e) for (var h = e[t.DataParser.FFD], v = 0, b = h; v < b.length; v++) {
                var f = b[v],
                D = i._getString(f, t.DataParser.SKIN, t.DataParser.DEFAULT_NAME),
                T = i._getString(f, t.DataParser.SLOT, ""),
                A = i._getString(f, t.DataParser.NAME, "");
                if (0 === D.length && (D = t.DataParser.DEFAULT_NAME), this._slot = this._armature.getSlot(T), this._mesh = this._armature.getMesh(D, T, A), null !== this._slot && null !== this._mesh) {
                    var d = this._parseTimeline(f, null, t.DataParser.FRAME, 22, !1, !0, 0, this._parseSlotFFDFrame);
                    null !== d && this._animation.addSlotTimeline(this._slot, d),
                    this._slot = null,
                    this._mesh = null
                }
            }
            if (t.DataParser.IK in e) for (var h = e[t.DataParser.IK], x = 0, O = h; x < O.length; x++) {
                var f = O[x],
                P = i._getString(f, t.DataParser.NAME, ""),
                E = this._armature.getConstraint(P);
                if (null !== E) {
                    var d = this._parseTimeline(f, null, t.DataParser.FRAME, 30, !0, !1, 2, this._parseIKConstraintFrame);
                    null !== d && this._animation.addConstraintTimeline(E, d)
                }
            }
            if (t.DataParser.ANIMATION in e) for (var h = e[t.DataParser.ANIMATION], S = 0, M = h; S < M.length; S++) {
                var f = M[S],
                B = i._getString(f, t.DataParser.NAME, ""),
                d = this._parseTimeline(f, null, t.DataParser.FRAME, 40, !0, !1, 2, this._parseAnimationFrame);
                null !== d && this._animation.addAnimationTimeline(B, d)
            }
            return this._actionFrames.length > 0 && (this._animation.actionTimeline = this._parseTimeline(null, this._actionFrames, "", 0, !1, !1, 0, this._parseActionFrame), this._actionFrames.length = 0),
            this._animation = null,
            a
        },
        i.prototype._parseTimeline = function(e, r, n, s, o, l, h, u) {
            if (null !== e && n.length > 0 && n in e && (r = e[n]), null === r) return null;
            var _ = r.length;
            if (0 === _) return null;
            var f = this._frameIntArray.length,
            c = this._frameFloatArray.length,
            p = t.BaseObject.borrowObject(t.TimelineData),
            m = this._timelineArray.length;
            if (this._timelineArray.length += 5 + _, null !== e ? (this._timelineArray[m + 0] = Math.round(100 * i._getNumber(e, t.DataParser.SCALE, 1)), this._timelineArray[m + 1] = Math.round(100 * i._getNumber(e, t.DataParser.OFFSET, 0))) : (this._timelineArray[m + 0] = 100, this._timelineArray[m + 1] = 0), this._timelineArray[m + 2] = _, this._timelineArray[m + 3] = h, o ? this._timelineArray[m + 4] = f - this._animation.frameIntOffset: l ? this._timelineArray[m + 4] = c - this._animation.frameFloatOffset: this._timelineArray[m + 4] = 0, this._timeline = p, p.type = s, p.offset = m, 1 === _) p.frameIndicesOffset = -1,
            this._timelineArray[m + 5 + 0] = u.call(this, r[0], 0, 0) - this._animation.frameOffset;
            else {
                var d = this._animation.frameCount + 1,
                y = this._data.frameIndices,
                g = 0;
                t.DragonBones.webAssembly ? (g = y.size(), y.resize(g + d, 0)) : (g = y.length, y.length += d),
                p.frameIndicesOffset = g;
                for (var v = 0,
                b = 0,
                D = 0,
                T = 0; d > v; ++v) {
                    if (v >= D + T && _ > b) {
                        var A = r[b];
                        D = v,
                        T = b === _ - 1 ? this._animation.frameCount - D: A instanceof a ? this._actionFrames[b + 1].frameStart - D: i._getNumber(A, t.DataParser.DURATION, 1),
                        this._timelineArray[m + 5 + b] = u.call(this, A, D, T) - this._animation.frameOffset,
                        b++
                    }
                    t.DragonBones.webAssembly ? y.set(g + v, b - 1) : y[g + v] = b - 1
                }
            }
            return this._timeline = null,
            p
        },
        i.prototype._parseBoneTimeline = function(e) {
            var a = this._armature.getBone(i._getString(e, t.DataParser.NAME, ""));
            if (null !== a) {
                if (this._bone = a, this._slot = this._armature.getSlot(this._bone.name), t.DataParser.TRANSLATE_FRAME in e) {
                    var r = this._parseTimeline(e, null, t.DataParser.TRANSLATE_FRAME, 11, !1, !0, 2, this._parseBoneTranslateFrame);
                    null !== r && this._animation.addBoneTimeline(a, r)
                }
                if (t.DataParser.ROTATE_FRAME in e) {
                    var r = this._parseTimeline(e, null, t.DataParser.ROTATE_FRAME, 12, !1, !0, 2, this._parseBoneRotateFrame);
                    null !== r && this._animation.addBoneTimeline(a, r)
                }
                if (t.DataParser.SCALE_FRAME in e) {
                    var r = this._parseTimeline(e, null, t.DataParser.SCALE_FRAME, 13, !1, !0, 2, this._parseBoneScaleFrame);
                    null !== r && this._animation.addBoneTimeline(a, r)
                }
                if (t.DataParser.FRAME in e) {
                    var r = this._parseTimeline(e, null, t.DataParser.FRAME, 10, !1, !0, 6, this._parseBoneAllFrame);
                    null !== r && this._animation.addBoneTimeline(a, r)
                }
                this._bone = null,
                this._slot = null
            }
        },
        i.prototype._parseSlotTimeline = function(e) {
            var a = this._armature.getSlot(i._getString(e, t.DataParser.NAME, ""));
            if (null !== a) {
                this._slot = a;
                var r = null;
                r = t.DataParser.DISPLAY_FRAME in e ? this._parseTimeline(e, null, t.DataParser.DISPLAY_FRAME, 20, !1, !1, 0, this._parseSlotDisplayFrame) : this._parseTimeline(e, null, t.DataParser.FRAME, 20, !1, !1, 0, this._parseSlotDisplayFrame),
                null !== r && this._animation.addSlotTimeline(a, r);
                var n = null;
                n = t.DataParser.COLOR_FRAME in e ? this._parseTimeline(e, null, t.DataParser.COLOR_FRAME, 21, !0, !1, 1, this._parseSlotColorFrame) : this._parseTimeline(e, null, t.DataParser.FRAME, 21, !0, !1, 1, this._parseSlotColorFrame),
                null !== n && this._animation.addSlotTimeline(a, n),
                this._slot = null
            }
        },
        i.prototype._parseFrame = function(t, e, a) {
            var i = this._frameArray.length;
            return this._frameArray.length += 1,
            this._frameArray[i + 0] = e,
            i
        },
        i.prototype._parseTweenFrame = function(e, a, r) {
            var n = this._parseFrame(e, a, r);
            if (r > 0) if (t.DataParser.CURVE in e) {
                var s = r + 1;
                this._helpArray.length = s,
                this._samplingEasingCurve(e[t.DataParser.CURVE], this._helpArray),
                this._frameArray.length += 2 + this._helpArray.length,
                this._frameArray[n + 1] = 2,
                this._frameArray[n + 2] = s;
                for (var o = 0; s > o; ++o) this._frameArray[n + 3 + o] = Math.round(1e4 * this._helpArray[o])
            } else {
                var l = -2,
                h = l;
                t.DataParser.TWEEN_EASING in e && (h = i._getNumber(e, t.DataParser.TWEEN_EASING, l)),
                h === l ? (this._frameArray.length += 1, this._frameArray[n + 1] = 0) : 0 === h ? (this._frameArray.length += 1, this._frameArray[n + 1] = 1) : 0 > h ? (this._frameArray.length += 2, this._frameArray[n + 1] = 3, this._frameArray[n + 2] = Math.round(100 * -h)) : 1 >= h ? (this._frameArray.length += 2, this._frameArray[n + 1] = 4, this._frameArray[n + 2] = Math.round(100 * h)) : (this._frameArray.length += 2, this._frameArray[n + 1] = 5, this._frameArray[n + 2] = Math.round(100 * h - 100))
            } else this._frameArray.length += 1,
            this._frameArray[n + 1] = 0;
            return n
        },
        i.prototype._parseActionFrame = function(t, e, a) {
            var i = this._frameArray.length,
            r = t.actions.length;
            this._frameArray.length += 2 + r,
            this._frameArray[i + 0] = e,
            this._frameArray[i + 0 + 1] = r;
            for (var n = 0; r > n; ++n) this._frameArray[i + 0 + 2 + n] = t.actions[n];
            return i
        },
        i.prototype._parseZOrderFrame = function(e, a, i) {
            var r = this._parseFrame(e, a, i);
            if (t.DataParser.Z_ORDER in e) {
                var n = e[t.DataParser.Z_ORDER];
                if (n.length > 0) {
                    for (var s = this._armature.sortedSlots.length,
                    o = new Array(s - n.length / 2), l = new Array(s), h = 0; h < o.length; ++h) o[h] = 0;
                    for (var u = 0; s > u; ++u) l[u] = -1;
                    for (var _ = 0,
                    f = 0,
                    c = 0,
                    p = n.length; p > c; c += 2) {
                        for (var m = n[c], d = n[c + 1]; _ !== m;) o[f++] = _++;
                        var y = _ + d;
                        l[y] = _++
                    }
                    for (; s > _;) o[f++] = _++;
                    this._frameArray.length += 1 + s,
                    this._frameArray[r + 1] = s;
                    for (var g = s; g--;) - 1 === l[g] ? this._frameArray[r + 2 + g] = o[--f] || 0 : this._frameArray[r + 2 + g] = l[g] || 0;
                    return r
                }
            }
            return this._frameArray.length += 1,
            this._frameArray[r + 1] = 0,
            r
        },
        i.prototype._parseBoneAllFrame = function(e, a, r) {
            this._helpTransform.identity(),
            t.DataParser.TRANSFORM in e && this._parseTransform(e[t.DataParser.TRANSFORM], this._helpTransform, 1);
            var n = this._helpTransform.rotation;
            0 !== a && (0 === this._prevClockwise ? n = this._prevRotation + t.Transform.normalizeRadian(n - this._prevRotation) : ((this._prevClockwise > 0 ? n >= this._prevRotation: n <= this._prevRotation) && (this._prevClockwise = this._prevClockwise > 0 ? this._prevClockwise - 1 : this._prevClockwise + 1), n = this._prevRotation + n - this._prevRotation + t.Transform.PI_D * this._prevClockwise)),
            this._prevClockwise = i._getNumber(e, t.DataParser.TWEEN_ROTATE, 0),
            this._prevRotation = n;
            var s = this._parseTweenFrame(e, a, r),
            o = this._frameFloatArray.length;
            return this._frameFloatArray.length += 6,
            this._frameFloatArray[o++] = this._helpTransform.x,
            this._frameFloatArray[o++] = this._helpTransform.y,
            this._frameFloatArray[o++] = n,
            this._frameFloatArray[o++] = this._helpTransform.skew,
            this._frameFloatArray[o++] = this._helpTransform.scaleX,
            this._frameFloatArray[o++] = this._helpTransform.scaleY,
            this._parseActionDataInFrame(e, a, this._bone, this._slot),
            s
        },
        i.prototype._parseBoneTranslateFrame = function(e, a, r) {
            var n = this._parseTweenFrame(e, a, r),
            s = this._frameFloatArray.length;
            return this._frameFloatArray.length += 2,
            this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.X, 0),
            this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.Y, 0),
            n
        },
        i.prototype._parseBoneRotateFrame = function(e, a, r) {
            var n = i._getNumber(e, t.DataParser.ROTATE, 0) * t.Transform.DEG_RAD;
            0 !== a && (0 === this._prevClockwise ? n = this._prevRotation + t.Transform.normalizeRadian(n - this._prevRotation) : ((this._prevClockwise > 0 ? n >= this._prevRotation: n <= this._prevRotation) && (this._prevClockwise = this._prevClockwise > 0 ? this._prevClockwise - 1 : this._prevClockwise + 1), n = this._prevRotation + n - this._prevRotation + t.Transform.PI_D * this._prevClockwise)),
            this._prevClockwise = i._getNumber(e, t.DataParser.CLOCK_WISE, 0),
            this._prevRotation = n;
            var s = this._parseTweenFrame(e, a, r),
            o = this._frameFloatArray.length;
            return this._frameFloatArray.length += 2,
            this._frameFloatArray[o++] = n,
            this._frameFloatArray[o++] = i._getNumber(e, t.DataParser.SKEW, 0) * t.Transform.DEG_RAD,
            s
        },
        i.prototype._parseBoneScaleFrame = function(e, a, r) {
            var n = this._parseTweenFrame(e, a, r),
            s = this._frameFloatArray.length;
            return this._frameFloatArray.length += 2,
            this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.X, 1),
            this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.Y, 1),
            n
        },
        i.prototype._parseSurfaceFrame = function(e, a, r) {
            var n = this._frameFloatArray.length,
            s = this._parseTweenFrame(e, a, r),
            o = e[t.DataParser.VERTICES],
            l = i._getNumber(e, t.DataParser.OFFSET, 0),
            h = this._surface.vertices.length / 2,
            u = 0,
            _ = 0;
            this._frameFloatArray.length += 2 * h;
            for (var f = 0; 2 * h > f; f += 2) u = l > f || f - l >= o.length ? 0 : o[f - l],
            _ = l > f + 1 || f + 1 - l >= o.length ? 0 : o[f + 1 - l],
            this._frameFloatArray[n + f] = u,
            this._frameFloatArray[n + f + 1] = _;
            if (0 === a) {
                var c = this._frameIntArray.length;
                this._frameIntArray.length += 5,
                this._frameIntArray[c + 0] = 0,
                this._frameIntArray[c + 1] = this._frameFloatArray.length - n,
                this._frameIntArray[c + 2] = this._frameFloatArray.length - n,
                this._frameIntArray[c + 3] = 0,
                this._frameIntArray[c + 4] = n - this._animation.frameFloatOffset,
                this._timelineArray[this._timeline.offset + 3] = c - this._animation.frameIntOffset
            }
            return s
        },
        i.prototype._parseSlotDisplayFrame = function(e, a, r) {
            var n = this._parseFrame(e, a, r);
            return this._frameArray.length += 1,
            t.DataParser.VALUE in e ? this._frameArray[n + 1] = i._getNumber(e, t.DataParser.VALUE, 0) : this._frameArray[n + 1] = i._getNumber(e, t.DataParser.DISPLAY_INDEX, 0),
            this._parseActionDataInFrame(e, a, this._slot.parent, this._slot),
            n
        },
        i.prototype._parseSlotColorFrame = function(e, a, i) {
            var r = this._parseTweenFrame(e, a, i),
            n = -1;
            if (t.DataParser.VALUE in e || t.DataParser.COLOR in e) {
                var s = t.DataParser.VALUE in e ? e[t.DataParser.VALUE] : e[t.DataParser.COLOR];
                for (var o in s) {
                    this._parseColorTransform(s, this._helpColorTransform),
                    n = this._intArray.length,
                    this._intArray.length += 8,
                    this._intArray[n++] = Math.round(100 * this._helpColorTransform.alphaMultiplier),
                    this._intArray[n++] = Math.round(100 * this._helpColorTransform.redMultiplier),
                    this._intArray[n++] = Math.round(100 * this._helpColorTransform.greenMultiplier),
                    this._intArray[n++] = Math.round(100 * this._helpColorTransform.blueMultiplier),
                    this._intArray[n++] = Math.round(this._helpColorTransform.alphaOffset),
                    this._intArray[n++] = Math.round(this._helpColorTransform.redOffset),
                    this._intArray[n++] = Math.round(this._helpColorTransform.greenOffset),
                    this._intArray[n++] = Math.round(this._helpColorTransform.blueOffset),
                    n -= 8;
                    break
                }
            }
            0 > n && (this._defaultColorOffset < 0 && (this._defaultColorOffset = n = this._intArray.length, this._intArray.length += 8, this._intArray[n++] = 100, this._intArray[n++] = 100, this._intArray[n++] = 100, this._intArray[n++] = 100, this._intArray[n++] = 0, this._intArray[n++] = 0, this._intArray[n++] = 0, this._intArray[n++] = 0), n = this._defaultColorOffset);
            var l = this._frameIntArray.length;
            return this._frameIntArray.length += 1,
            this._frameIntArray[l] = n,
            r
        },
        i.prototype._parseSlotFFDFrame = function(e, a, r) {
            var n = this._frameFloatArray.length,
            s = this._parseTweenFrame(e, a, r),
            o = t.DataParser.VERTICES in e ? e[t.DataParser.VERTICES] : null,
            l = i._getNumber(e, t.DataParser.OFFSET, 0),
            h = this._intArray[this._mesh.vertices.offset + 0],
            u = this._mesh.parent.name + "_" + this._slot.name + "_" + this._mesh.name,
            _ = this._mesh.vertices.weight,
            f = 0,
            c = 0,
            p = 0,
            m = 0;
            if (null !== _) {
                var d = this._weightSlotPose[u];
                this._helpMatrixA.copyFromArray(d, 0),
                this._frameFloatArray.length += 2 * _.count,
                p = _.offset + 2 + _.bones.length
            } else this._frameFloatArray.length += 2 * h;
            for (var y = 0; 2 * h > y; y += 2) if (null === o ? (f = 0, c = 0) : (f = l > y || y - l >= o.length ? 0 : o[y - l], c = l > y + 1 || y + 1 - l >= o.length ? 0 : o[y + 1 - l]), null !== _) {
                var g = this._weightBonePoses[u],
                v = this._intArray[p++];
                this._helpMatrixA.transformPoint(f, c, this._helpPoint, !0),
                f = this._helpPoint.x,
                c = this._helpPoint.y;
                for (var b = 0; v > b; ++b) {
                    var D = this._intArray[p++];
                    this._helpMatrixB.copyFromArray(g, 7 * D + 1),
                    this._helpMatrixB.invert(),
                    this._helpMatrixB.transformPoint(f, c, this._helpPoint, !0),
                    this._frameFloatArray[n + m++] = this._helpPoint.x,
                    this._frameFloatArray[n + m++] = this._helpPoint.y
                }
            } else this._frameFloatArray[n + y] = f,
            this._frameFloatArray[n + y + 1] = c;
            if (0 === a) {
                var T = this._frameIntArray.length;
                this._frameIntArray.length += 5,
                this._frameIntArray[T + 0] = this._mesh.vertices.offset,
                this._frameIntArray[T + 1] = this._frameFloatArray.length - n,
                this._frameIntArray[T + 2] = this._frameFloatArray.length - n,
                this._frameIntArray[T + 3] = 0,
                this._frameIntArray[T + 4] = n - this._animation.frameFloatOffset,
                this._timelineArray[this._timeline.offset + 3] = T - this._animation.frameIntOffset
            }
            return s
        },
        i.prototype._parseIKConstraintFrame = function(e, a, r) {
            var n = this._parseTweenFrame(e, a, r),
            s = this._frameIntArray.length;
            return this._frameIntArray.length += 2,
            this._frameIntArray[s++] = i._getBoolean(e, t.DataParser.BEND_POSITIVE, !0) ? 1 : 0,
            this._frameIntArray[s++] = Math.round(100 * i._getNumber(e, t.DataParser.WEIGHT, 1)),
            n
        },
        i.prototype._parseAnimationFrame = function(e, a, r) {
            var n = this._parseTweenFrame(e, a, r),
            s = this._frameIntArray.length;
            return this._frameIntArray.length += 2,
            this._frameIntArray[s++] = i._getNumber(e, t.DataParser.VALUE, 0),
            this._frameIntArray[s++] = Math.round(100 * i._getNumber(e, t.DataParser.WEIGHT, 1)),
            n
        },
        i.prototype._parseActionData = function(e, a, r, n) {
            var s = new Array;
            if ("string" == typeof e) {
                var o = t.BaseObject.borrowObject(t.ActionData);
                o.type = a,
                o.name = e,
                o.bone = r,
                o.slot = n,
                s.push(o)
            } else if (e instanceof Array) for (var l = 0,
            h = e; l < h.length; l++) {
                var u = h[l],
                o = t.BaseObject.borrowObject(t.ActionData);
                if (t.DataParser.GOTO_AND_PLAY in u ? (o.type = 0, o.name = i._getString(u, t.DataParser.GOTO_AND_PLAY, "")) : (t.DataParser.TYPE in u && "string" == typeof u[t.DataParser.TYPE] ? o.type = t.DataParser._getActionType(u[t.DataParser.TYPE]) : o.type = i._getNumber(u, t.DataParser.TYPE, a), o.name = i._getString(u, t.DataParser.NAME, "")), t.DataParser.BONE in u) {
                    var _ = i._getString(u, t.DataParser.BONE, "");
                    o.bone = this._armature.getBone(_)
                } else o.bone = r;
                if (t.DataParser.SLOT in u) {
                    var f = i._getString(u, t.DataParser.SLOT, "");
                    o.slot = this._armature.getSlot(f)
                } else o.slot = n;
                var c = null;
                if (t.DataParser.INTS in u) {
                    null === c && (c = t.BaseObject.borrowObject(t.UserData));
                    for (var p = u[t.DataParser.INTS], m = 0, d = p; m < d.length; m++) {
                        var y = d[m];
                        c.addInt(y)
                    }
                }
                if (t.DataParser.FLOATS in u) {
                    null === c && (c = t.BaseObject.borrowObject(t.UserData));
                    for (var g = u[t.DataParser.FLOATS], v = 0, b = g; v < b.length; v++) {
                        var y = b[v];
                        c.addFloat(y)
                    }
                }
                if (t.DataParser.STRINGS in u) {
                    null === c && (c = t.BaseObject.borrowObject(t.UserData));
                    for (var D = u[t.DataParser.STRINGS], T = 0, A = D; T < A.length; T++) {
                        var y = A[T];
                        c.addString(y)
                    }
                }
                o.data = c,
                s.push(o)
            }
            return s
        },
        i.prototype._parseTransform = function(e, a, r) {
            a.x = i._getNumber(e, t.DataParser.X, 0) * r,
            a.y = i._getNumber(e, t.DataParser.Y, 0) * r,
            t.DataParser.ROTATE in e || t.DataParser.SKEW in e ? (a.rotation = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.ROTATE, 0) * t.Transform.DEG_RAD), a.skew = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.SKEW, 0) * t.Transform.DEG_RAD)) : (t.DataParser.SKEW_X in e || t.DataParser.SKEW_Y in e) && (a.rotation = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.SKEW_Y, 0) * t.Transform.DEG_RAD), a.skew = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.SKEW_X, 0) * t.Transform.DEG_RAD) - a.rotation),
            a.scaleX = i._getNumber(e, t.DataParser.SCALE_X, 1),
            a.scaleY = i._getNumber(e, t.DataParser.SCALE_Y, 1)
        },
        i.prototype._parseColorTransform = function(e, a) {
            a.alphaMultiplier = .01 * i._getNumber(e, t.DataParser.ALPHA_MULTIPLIER, 100),
            a.redMultiplier = .01 * i._getNumber(e, t.DataParser.RED_MULTIPLIER, 100),
            a.greenMultiplier = .01 * i._getNumber(e, t.DataParser.GREEN_MULTIPLIER, 100),
            a.blueMultiplier = .01 * i._getNumber(e, t.DataParser.BLUE_MULTIPLIER, 100),
            a.alphaOffset = i._getNumber(e, t.DataParser.ALPHA_OFFSET, 0),
            a.redOffset = i._getNumber(e, t.DataParser.RED_OFFSET, 0),
            a.greenOffset = i._getNumber(e, t.DataParser.GREEN_OFFSET, 0),
            a.blueOffset = i._getNumber(e, t.DataParser.BLUE_OFFSET, 0)
        },
        i.prototype._parseArray = function(t) {
            this._intArray.length = 0,
            this._floatArray.length = 0,
            this._frameIntArray.length = 0,
            this._frameFloatArray.length = 0,
            this._frameArray.length = 0,
            this._timelineArray.length = 0
        },
        i.prototype._modifyArray = function() {
            this._intArray.length % Int16Array.BYTES_PER_ELEMENT !== 0 && this._intArray.push(0),
            this._frameIntArray.length % Int16Array.BYTES_PER_ELEMENT !== 0 && this._frameIntArray.push(0),
            this._frameArray.length % Int16Array.BYTES_PER_ELEMENT !== 0 && this._frameArray.push(0),
            this._timelineArray.length % Uint16Array.BYTES_PER_ELEMENT !== 0 && this._timelineArray.push(0);
            var e = this._intArray.length * Int16Array.BYTES_PER_ELEMENT,
            a = this._floatArray.length * Float32Array.BYTES_PER_ELEMENT,
            i = this._frameIntArray.length * Int16Array.BYTES_PER_ELEMENT,
            r = this._frameFloatArray.length * Float32Array.BYTES_PER_ELEMENT,
            n = this._frameArray.length * Int16Array.BYTES_PER_ELEMENT,
            s = this._timelineArray.length * Uint16Array.BYTES_PER_ELEMENT,
            o = e + a + i + r + n + s;
            if (t.DragonBones.webAssembly) {
                for (var l = t.webAssemblyModule.HEAP16.buffer,
                h = t.webAssemblyModule._malloc(o), u = new Int16Array(l, h, this._intArray.length), _ = new Float32Array(l, h + e, this._floatArray.length), f = new Int16Array(l, h + e + a, this._frameIntArray.length), c = new Float32Array(l, h + e + a + i, this._frameFloatArray.length), p = new Int16Array(l, h + e + a + i + r, this._frameArray.length), m = new Uint16Array(l, h + e + a + i + r + n, this._timelineArray.length), d = 0, y = this._intArray.length; y > d; ++d) u[d] = this._intArray[d];
                for (var d = 0,
                y = this._floatArray.length; y > d; ++d) _[d] = this._floatArray[d];
                for (var d = 0,
                y = this._frameIntArray.length; y > d; ++d) f[d] = this._frameIntArray[d];
                for (var d = 0,
                y = this._frameFloatArray.length; y > d; ++d) c[d] = this._frameFloatArray[d];
                for (var d = 0,
                y = this._frameArray.length; y > d; ++d) p[d] = this._frameArray[d];
                for (var d = 0,
                y = this._timelineArray.length; y > d; ++d) m[d] = this._timelineArray[d];
                t.webAssemblyModule.setDataBinary(this._data, h, e, a, i, r, n, s)
            } else {
                for (var g = new ArrayBuffer(o), u = new Int16Array(g, 0, this._intArray.length), _ = new Float32Array(g, e, this._floatArray.length), f = new Int16Array(g, e + a, this._frameIntArray.length), c = new Float32Array(g, e + a + i, this._frameFloatArray.length), p = new Int16Array(g, e + a + i + r, this._frameArray.length), m = new Uint16Array(g, e + a + i + r + n, this._timelineArray.length), d = 0, y = this._intArray.length; y > d; ++d) u[d] = this._intArray[d];
                for (var d = 0,
                y = this._floatArray.length; y > d; ++d) _[d] = this._floatArray[d];
                for (var d = 0,
                y = this._frameIntArray.length; y > d; ++d) f[d] = this._frameIntArray[d];
                for (var d = 0,
                y = this._frameFloatArray.length; y > d; ++d) c[d] = this._frameFloatArray[d];
                for (var d = 0,
                y = this._frameArray.length; y > d; ++d) p[d] = this._frameArray[d];
                for (var d = 0,
                y = this._timelineArray.length; y > d; ++d) m[d] = this._timelineArray[d];
                this._data.binary = g,
                this._data.intArray = u,
                this._data.floatArray = _,
                this._data.frameIntArray = f,
                this._data.frameFloatArray = c,
                this._data.frameArray = p,
                this._data.timelineArray = m
            }
            this._defaultColorOffset = -1
        },
        i.prototype.parseDragonBonesData = function(e, a) {
            void 0 === a && (a = 1),
            console.assert(null !== e && void 0 !== e, "Data error.");
            var r = i._getString(e, t.DataParser.VERSION, ""),
            n = i._getString(e, t.DataParser.COMPATIBLE_VERSION, "");
            if (t.DataParser.DATA_VERSIONS.indexOf(r) >= 0 || t.DataParser.DATA_VERSIONS.indexOf(n) >= 0) {
                var s = t.BaseObject.borrowObject(t.DragonBonesData);
                if (s.version = r, s.name = i._getString(e, t.DataParser.NAME, ""), s.frameRate = i._getNumber(e, t.DataParser.FRAME_RATE, 24), 0 === s.frameRate && (s.frameRate = 24), t.DataParser.ARMATURE in e) {
                    this._data = s,
                    this._parseArray(e);
                    for (var o = e[t.DataParser.ARMATURE], l = 0, h = o; l < h.length; l++) {
                        var u = h[l];
                        s.addArmature(this._parseArmature(u, a))
                    }
                    this._data.binary || this._modifyArray(),
                    t.DataParser.STAGE in e ? s.stage = s.getArmature(i._getString(e, t.DataParser.STAGE, "")) : s.armatureNames.length > 0 && (s.stage = s.getArmature(s.armatureNames[0])),
                    this._data = null
                }
                return t.DataParser.TEXTURE_ATLAS in e && (this._rawTextureAtlases = e[t.DataParser.TEXTURE_ATLAS]),
                s
            }
            return console.assert(!1, "Nonsupport data version: " + r + "\nPlease convert DragonBones data to support version.\nRead more: https://github.com/DragonBones/Tools/"),
            null
        },
        i.prototype.parseTextureAtlasData = function(e, a, r) {
            if (void 0 === r && (r = 1), console.assert(void 0 !== e), null === e) {
                if (null === this._rawTextureAtlases || 0 === this._rawTextureAtlases.length) return ! 1;
                var n = this._rawTextureAtlases[this._rawTextureAtlasIndex++];
                return this.parseTextureAtlasData(n, a, r),
                this._rawTextureAtlasIndex >= this._rawTextureAtlases.length && (this._rawTextureAtlasIndex = 0, this._rawTextureAtlases = null),
                !0
            }
            if (a.width = i._getNumber(e, t.DataParser.WIDTH, 0), a.height = i._getNumber(e, t.DataParser.HEIGHT, 0), a.scale = 1 === r ? 1 / i._getNumber(e, t.DataParser.SCALE, 1) : r, a.name = i._getString(e, t.DataParser.NAME, ""), a.imagePath = i._getString(e, t.DataParser.IMAGE_PATH, ""), t.DataParser.SUB_TEXTURE in e) for (var s = e[t.DataParser.SUB_TEXTURE], o = 0, l = s.length; l > o; ++o) {
                var h = s[o],
                u = a.createTexture();
                u.rotated = i._getBoolean(h, t.DataParser.ROTATED, !1),
                u.name = i._getString(h, t.DataParser.NAME, ""),
                u.region.x = i._getNumber(h, t.DataParser.X, 0),
                u.region.y = i._getNumber(h, t.DataParser.Y, 0),
                u.region.width = i._getNumber(h, t.DataParser.WIDTH, 0),
                u.region.height = i._getNumber(h, t.DataParser.HEIGHT, 0);
                var _ = i._getNumber(h, t.DataParser.FRAME_WIDTH, -1),
                f = i._getNumber(h, t.DataParser.FRAME_HEIGHT, -1);
                _ > 0 && f > 0 && (u.frame = t.TextureData.createRectangle(), u.frame.x = i._getNumber(h, t.DataParser.FRAME_X, 0), u.frame.y = i._getNumber(h, t.DataParser.FRAME_Y, 0), u.frame.width = _, u.frame.height = f),
                a.addTexture(u)
            }
            return ! 0
        },
        i.getInstance = function() {
            return null === i._objectDataParserInstance && (i._objectDataParserInstance = new i),
            i._objectDataParserInstance
        },
        i._objectDataParserInstance = null,
        i
    } (t.DataParser);
    t.ObjectDataParser = e;
    var a = function() {
        function t() {
            this.frameStart = 0,
            this.actions = []
        }
        return t
    } ();
    t.ActionFrame = a
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(a, e),
        a.prototype._inRange = function(t, e, a) {
            return t >= e && a >= t
        },
        a.prototype._decodeUTF8 = function(t) {
            for (var e, a = -1,
            i = -1,
            r = 65533,
            n = 0,
            s = "",
            o = 0,
            l = 0,
            h = 0,
            u = 0; t.length > n;) {
                var _ = t[n++];
                if (_ === a) e = 0 !== l ? r: i;
                else if (0 === l) this._inRange(_, 0, 127) ? e = _: (this._inRange(_, 194, 223) ? (l = 1, u = 128, o = _ - 192) : this._inRange(_, 224, 239) ? (l = 2, u = 2048, o = _ - 224) : this._inRange(_, 240, 244) && (l = 3, u = 65536, o = _ - 240), o *= Math.pow(64, l), e = null);
                else if (this._inRange(_, 128, 191)) if (h += 1, o += (_ - 128) * Math.pow(64, l - h), h !== l) e = null;
                else {
                    var f = o,
                    c = u;
                    o = 0,
                    l = 0,
                    h = 0,
                    u = 0,
                    e = this._inRange(f, c, 1114111) && !this._inRange(f, 55296, 57343) ? f: _
                } else o = 0,
                l = 0,
                h = 0,
                u = 0,
                n--,
                e = _;
                null !== e && e !== i && (65535 >= e ? e > 0 && (s += String.fromCharCode(e)) : (e -= 65536, s += String.fromCharCode(55296 + (e >> 10 & 1023)), s += String.fromCharCode(56320 + (1023 & e))))
            }
            return s
        },
        a.prototype._getUTF16Key = function(t) {
            for (var e = 0,
            a = t.length; a > e; ++e) if (t.charCodeAt(e) > 255) return encodeURI(t);
            return t
        },
        a.prototype._parseBinaryTimeline = function(e, a, i) {
            void 0 === i && (i = null);
            var r = null !== i ? i: t.BaseObject.borrowObject(t.TimelineData);
            r.type = e,
            r.offset = a,
            this._timeline = r;
            var n = this._timelineArrayBuffer[r.offset + 2];
            if (1 === n) r.frameIndicesOffset = -1;
            else {
                var s = 0,
                o = this._animation.frameCount + 1,
                l = this._data.frameIndices;
                t.DragonBones.webAssembly ? (s = l.size(), l.resize(s + o, 0)) : (s = l.length, l.length += o),
                r.frameIndicesOffset = s;
                for (var h = 0,
                u = 0,
                _ = 0,
                f = 0; o > h; ++h) h >= _ + f && n > u && (_ = this._frameArrayBuffer[this._animation.frameOffset + this._timelineArrayBuffer[r.offset + 5 + u]], f = u === n - 1 ? this._animation.frameCount - _: this._frameArrayBuffer[this._animation.frameOffset + this._timelineArrayBuffer[r.offset + 5 + u + 1]] - _, u++),
                t.DragonBones.webAssembly ? l.set(s + h, u - 1) : l[s + h] = u - 1
            }
            return this._timeline = null,
            r
        },
        a.prototype._parseVertices = function(e, a) {
            a.offset = e[t.DataParser.OFFSET];
            var i = this._intArrayBuffer[a.offset + 3];
            if (i >= 0) {
                var r = t.BaseObject.borrowObject(t.WeightData),
                n = this._intArrayBuffer[a.offset + 0],
                s = this._intArrayBuffer[i + 0];
                r.offset = i;
                for (var o = 0; s > o; ++o) {
                    var l = this._intArrayBuffer[i + 2 + o];
                    r.addBone(this._rawBones[l])
                }
                for (var h = i + 2 + s,
                u = 0,
                o = 0,
                _ = n; _ > o; ++o) {
                    var f = this._intArrayBuffer[h++];
                    u += f,
                    h += f
                }
                r.count = u,
                a.weight = r
            }
        },
        a.prototype._parseMesh = function(t, e) {
            this._parseVertices(t, e.vertices)
        },
        a.prototype._parsePath = function(t, e) {
            this._parseVertices(t, e.vertices)
        },
        a.prototype._parseAnimation = function(e) {
            var a = t.BaseObject.borrowObject(t.AnimationData);
            a.frameCount = Math.max(t.ObjectDataParser._getNumber(e, t.DataParser.DURATION, 1), 1),
            a.playTimes = t.ObjectDataParser._getNumber(e, t.DataParser.PLAY_TIMES, 1),
            a.duration = a.frameCount / this._armature.frameRate,
            a.fadeInTime = t.ObjectDataParser._getNumber(e, t.DataParser.FADE_IN_TIME, 0),
            a.scale = t.ObjectDataParser._getNumber(e, t.DataParser.SCALE, 1),
            a.name = t.ObjectDataParser._getString(e, t.DataParser.NAME, t.DataParser.DEFAULT_NAME),
            0 === a.name.length && (a.name = t.DataParser.DEFAULT_NAME);
            var i = e[t.DataParser.OFFSET];
            if (a.frameIntOffset = i[0], a.frameFloatOffset = i[1], a.frameOffset = i[2], this._animation = a, t.DataParser.ACTION in e && (a.actionTimeline = this._parseBinaryTimeline(0, e[t.DataParser.ACTION])), t.DataParser.Z_ORDER in e && (a.zOrderTimeline = this._parseBinaryTimeline(1, e[t.DataParser.Z_ORDER])), t.DataParser.BONE in e) {
                var r = e[t.DataParser.BONE];
                for (var n in r) {
                    var s = r[n];
                    t.DragonBones.webAssembly && (n = this._getUTF16Key(n));
                    var o = this._armature.getBone(n);
                    if (null !== o) for (var l = 0,
                    h = s.length; h > l; l += 2) {
                        var u = s[l],
                        _ = s[l + 1],
                        f = this._parseBinaryTimeline(u, _);
                        this._animation.addBoneTimeline(o, f)
                    }
                }
            }
            if (t.DataParser.SURFACE in e) {
                var r = e[t.DataParser.SURFACE];
                for (var n in r) {
                    var s = r[n];
                    t.DragonBones.webAssembly && (n = this._getUTF16Key(n));
                    var c = this._armature.getBone(n);
                    if (null !== c) for (var l = 0,
                    h = s.length; h > l; l += 2) {
                        var u = s[l],
                        _ = s[l + 1],
                        f = this._parseBinaryTimeline(u, _);
                        this._animation.addSurfaceTimeline(c, f)
                    }
                }
            }
            if (t.DataParser.SLOT in e) {
                var r = e[t.DataParser.SLOT];
                for (var n in r) {
                    var s = r[n];
                    t.DragonBones.webAssembly && (n = this._getUTF16Key(n));
                    var p = this._armature.getSlot(n);
                    if (null !== p) for (var l = 0,
                    h = s.length; h > l; l += 2) {
                        var u = s[l],
                        _ = s[l + 1],
                        f = this._parseBinaryTimeline(u, _);
                        this._animation.addSlotTimeline(p, f)
                    }
                }
            }
            if (t.DataParser.CONSTRAINT in e) {
                var r = e[t.DataParser.CONSTRAINT];
                for (var n in r) {
                    var s = r[n];
                    t.DragonBones.webAssembly && (n = this._getUTF16Key(n));
                    var m = this._armature.getConstraint(n);
                    if (null !== m) for (var l = 0,
                    h = s.length; h > l; l += 2) {
                        var u = s[l],
                        _ = s[l + 1],
                        f = this._parseBinaryTimeline(u, _);
                        this._animation.addConstraintTimeline(m, f)
                    }
                }
            }
            if (t.DataParser.ANIMATION in e) {
                var r = e[t.DataParser.ANIMATION];
                for (var n in r) {
                    var s = r[n];
                    t.DragonBones.webAssembly && (n = this._getUTF16Key(n));
                    for (var l = 0,
                    h = s.length; h > l; l += 2) {
                        var u = s[l],
                        _ = s[l + 1],
                        f = this._parseBinaryTimeline(u, _);
                        this._animation.addAnimationTimeline(n, f)
                    }
                }
            }
            return this._animation = null,
            a
        },
        a.prototype._parseArray = function(e) {
            var a = e[t.DataParser.OFFSET],
            i = a[1],
            r = a[3],
            n = a[5],
            s = a[7],
            o = a[9],
            l = a[11],
            h = new Int16Array(this._binary, this._binaryOffset + a[0], i / Int16Array.BYTES_PER_ELEMENT),
            u = new Float32Array(this._binary, this._binaryOffset + a[2], r / Float32Array.BYTES_PER_ELEMENT),
            _ = new Int16Array(this._binary, this._binaryOffset + a[4], n / Int16Array.BYTES_PER_ELEMENT),
            f = new Float32Array(this._binary, this._binaryOffset + a[6], s / Float32Array.BYTES_PER_ELEMENT),
            c = new Int16Array(this._binary, this._binaryOffset + a[8], o / Int16Array.BYTES_PER_ELEMENT),
            p = new Uint16Array(this._binary, this._binaryOffset + a[10], l / Uint16Array.BYTES_PER_ELEMENT);
            if (t.DragonBones.webAssembly) {
                for (var m = i + r + n + s + o + l,
                d = t.webAssemblyModule._malloc(m), y = new Uint8Array(this._binary, this._binaryOffset, m / Uint8Array.BYTES_PER_ELEMENT), g = new Uint8Array(t.webAssemblyModule.HEAP16.buffer, d, y.length), v = 0, b = y.length; b > v; ++v) g[v] = y[v];
                t.webAssemblyModule.setDataBinary(this._data, d, i, r, n, s, o, l),
                this._intArrayBuffer = h,
                this._floatArrayBuffer = u,
                this._frameIntArrayBuffer = _,
                this._frameFloatArrayBuffer = f,
                this._frameArrayBuffer = c,
                this._timelineArrayBuffer = p
            } else this._data.binary = this._binary,
            this._data.intArray = this._intArrayBuffer = h,
            this._data.floatArray = this._floatArrayBuffer = u,
            this._data.frameIntArray = this._frameIntArrayBuffer = _,
            this._data.frameFloatArray = this._frameFloatArrayBuffer = f,
            this._data.frameArray = this._frameArrayBuffer = c,
            this._data.timelineArray = this._timelineArrayBuffer = p
        },
        a.prototype.parseDragonBonesData = function(t, a) {
            void 0 === a && (a = 1),
            console.assert(null !== t && void 0 !== t && t instanceof ArrayBuffer, "Data error.");
            var i = new Uint8Array(t, 0, 8);
            if (i[0] !== "D".charCodeAt(0) || i[1] !== "B".charCodeAt(0) || i[2] !== "D".charCodeAt(0) || i[3] !== "T".charCodeAt(0)) return console.assert(!1, "Nonsupport data."),
            null;
            var r = new Uint32Array(t, 8, 1)[0],
            n = new Uint8Array(t, 12, r),
            s = this._decodeUTF8(n),
            o = JSON.parse(s);
            return this._binaryOffset = 12 + r,
            this._binary = t,
            e.prototype.parseDragonBonesData.call(this, o, a)
        },
        a.getInstance = function() {
            return null === a._binaryDataParserInstance && (a._binaryDataParserInstance = new a),
            a._binaryDataParserInstance
        },
        a._binaryDataParserInstance = null,
        a
    } (t.ObjectDataParser);
    t.BinaryDataParser = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function() {
        function e(a) {
            void 0 === a && (a = null),
            this.autoSearch = !1,
            this._dragonBonesDataMap = {},
            this._textureAtlasDataMap = {},
            this._dragonBones = null,
            this._dataParser = null,
            null === e._objectParser && (e._objectParser = new t.ObjectDataParser),
            null === e._binaryParser && (e._binaryParser = new t.BinaryDataParser),
            this._dataParser = null !== a ? a: e._objectParser
        }
        return e.prototype._isSupportMesh = function() {
            return ! 0
        },
        e.prototype._getTextureData = function(t, e) {
            if (t in this._textureAtlasDataMap) for (var a = 0,
            i = this._textureAtlasDataMap[t]; a < i.length; a++) {
                var r = i[a],
                n = r.getTexture(e);
                if (null !== n) return n
            }
            if (this.autoSearch) for (var s in this._textureAtlasDataMap) for (var o = 0,
            l = this._textureAtlasDataMap[s]; o < l.length; o++) {
                var r = l[o];
                if (r.autoSearch) {
                    var n = r.getTexture(e);
                    if (null !== n) return n
                }
            }
            return null
        },
        e.prototype._fillBuildArmaturePackage = function(t, e, a, i, r) {
            var n = null,
            s = null;
            if (e.length > 0 && e in this._dragonBonesDataMap && (n = this._dragonBonesDataMap[e], s = n.getArmature(a)), null === s && (0 === e.length || this.autoSearch)) for (var o in this._dragonBonesDataMap) if (n = this._dragonBonesDataMap[o], (0 === e.length || n.autoSearch) && (s = n.getArmature(a), null !== s)) {
                e = o;
                break
            }
            if (null !== s) {
                if (t.dataName = e, t.textureAtlasName = r, t.data = n, t.armature = s, t.skin = null, i.length > 0 && (t.skin = s.getSkin(i), null === t.skin && this.autoSearch)) for (var o in this._dragonBonesDataMap) {
                    var l = this._dragonBonesDataMap[o],
                    h = l.getArmature(i);
                    if (null !== h) {
                        t.skin = h.defaultSkin;
                        break
                    }
                }
                return null === t.skin && (t.skin = s.defaultSkin),
                !0
            }
            return ! 1
        },
        e.prototype._buildBones = function(e, a) {
            for (var i = 0,
            r = e.armature.sortedBones; i < r.length; i++) {
                var n = r[i],
                s = t.BaseObject.borrowObject(0 === n.type ? t.Bone: t.Surface);
                s.init(n, a)
            }
        },
        e.prototype._buildSlots = function(e, a) {
            var i = e.skin,
            r = e.armature.defaultSkin;
            if (null !== i && null !== r) {
                var n = {};
                for (var s in r.displays) {
                    var o = r.getDisplays(s);
                    n[s] = o
                }
                if (i !== r) for (var s in i.displays) {
                    var o = i.getDisplays(s);
                    n[s] = o
                }
                for (var l = 0,
                h = e.armature.sortedSlots; l < h.length; l++) {
                    var u = h[l],
                    _ = u.name in n ? n[u.name] : null,
                    f = this._buildSlot(e, u, a);
                    if (f.rawDisplayDatas = _, null !== _) {
                        for (var c = new Array,
                        p = 0,
                        m = t.DragonBones.webAssembly ? _.size() : _.length; m > p; ++p) {
                            var d = t.DragonBones.webAssembly ? _.get(p) : _[p];
                            null !== d ? c.push(this._getSlotDisplay(e, d, null, f)) : c.push(null)
                        }
                        f._setDisplayList(c)
                    }
                    f._setDisplayIndex(u.displayIndex, !0)
                }
            }
        },
        e.prototype._buildConstraints = function(e, a) {
            var i = e.armature.constraints;
            for (var r in i) {
                var n = i[r];
                switch (n.type) {
                case 0:
                    var s = t.BaseObject.borrowObject(t.IKConstraint);
                    s.init(n, a),
                    a._addConstraint(s);
                    break;
                case 1:
                    var o = t.BaseObject.borrowObject(t.PathConstraint);
                    o.init(n, a),
                    a._addConstraint(o);
                    break;
                default:
                    var l = t.BaseObject.borrowObject(t.IKConstraint);
                    l.init(n, a),
                    a._addConstraint(l)
                }
            }
        },
        e.prototype._buildChildArmature = function(t, e, a) {
            return this.buildArmature(a.path, null !== t ? t.dataName: "", "", null !== t ? t.textureAtlasName: "")
        },
        e.prototype._getSlotDisplay = function(e, a, i, r) {
            var n = null !== e ? e.dataName: a.parent.parent.parent.name,
            s = null;
            switch (a.type) {
            case 0:
                var o = a;
                null === o.texture ? o.texture = this._getTextureData(n, a.path) : null !== e && e.textureAtlasName.length > 0 && (o.texture = this._getTextureData(e.textureAtlasName, a.path)),
                s = null !== i && 2 === i.type && this._isSupportMesh() ? r.meshDisplay: r.rawDisplay;
                break;
            case 2:
                var l = a;
                null === l.texture ? l.texture = this._getTextureData(n, l.path) : null !== e && e.textureAtlasName.length > 0 && (l.texture = this._getTextureData(e.textureAtlasName, l.path)),
                s = this._isSupportMesh() ? r.meshDisplay: r.rawDisplay;
                break;
            case 1:
                var h = a,
                u = this._buildChildArmature(e, r, a);
                if (null !== u) {
                    if (u.inheritAnimation = h.inheritAnimation, !u.inheritAnimation) {
                        var _ = h.actions.length > 0 ? h.actions: u.armatureData.defaultActions;
                        if (_.length > 0) for (var f = 0,
                        c = _; f < c.length; f++) {
                            var p = c[f],
                            m = t.BaseObject.borrowObject(t.EventObject);
                            t.EventObject.actionDataToInstance(p, m, r.armature),
                            m.slot = r,
                            r.armature._bufferAction(m, !1)
                        } else u.animation.play()
                    }
                    h.armature = u.armatureData
                }
                s = u;
                break;
            case 3:
            }
            return s
        },
        e.prototype.parseDragonBonesData = function(t, a, i) {
            void 0 === a && (a = null),
            void 0 === i && (i = 1);
            for (var r = t instanceof ArrayBuffer ? e._binaryParser: this._dataParser, n = r.parseDragonBonesData(t, i);;) {
                var s = this._buildTextureAtlasData(null, null);
                if (!r.parseTextureAtlasData(null, s, i)) {
                    s.returnToPool();
                    break
                }
                this.addTextureAtlasData(s, a)
            }
            return null !== n && this.addDragonBonesData(n, a),
            n
        },
        e.prototype.parseTextureAtlasData = function(t, e, a, i) {
            void 0 === a && (a = null),
            void 0 === i && (i = 1);
            var r = this._buildTextureAtlasData(null, null);
            return this._dataParser.parseTextureAtlasData(t, r, i),
            this._buildTextureAtlasData(r, e || null),
            this.addTextureAtlasData(r, a),
            r
        },
        e.prototype.updateTextureAtlasData = function(t, e) {
            var a = this.getTextureAtlasData(t);
            if (null !== a) for (var i = 0,
            r = a.length; r > i; ++i) i < e.length && this._buildTextureAtlasData(a[i], e[i])
        },
        e.prototype.getDragonBonesData = function(t) {
            return t in this._dragonBonesDataMap ? this._dragonBonesDataMap[t] : null
        },
        e.prototype.addDragonBonesData = function(t, e) {
            if (void 0 === e && (e = null), e = null !== e ? e: t.name, e in this._dragonBonesDataMap) {
                if (this._dragonBonesDataMap[e] === t) return;
                return void console.warn("Can not add same name data: " + e)
            }
            this._dragonBonesDataMap[e] = t
        },
        e.prototype.removeDragonBonesData = function(t, e) {
            void 0 === e && (e = !0),
            t in this._dragonBonesDataMap && (e && this._dragonBones.bufferObject(this._dragonBonesDataMap[t]), delete this._dragonBonesDataMap[t])
        },
        e.prototype.getTextureAtlasData = function(t) {
            return t in this._textureAtlasDataMap ? this._textureAtlasDataMap[t] : null
        },
        e.prototype.addTextureAtlasData = function(t, e) {
            void 0 === e && (e = null),
            e = null !== e ? e: t.name;
            var a = e in this._textureAtlasDataMap ? this._textureAtlasDataMap[e] : this._textureAtlasDataMap[e] = [];
            a.indexOf(t) < 0 && a.push(t)
        },
        e.prototype.removeTextureAtlasData = function(t, e) {
            if (void 0 === e && (e = !0), t in this._textureAtlasDataMap) {
                var a = this._textureAtlasDataMap[t];
                if (e) for (var i = 0,
                r = a; i < r.length; i++) {
                    var n = r[i];
                    this._dragonBones.bufferObject(n)
                }
                delete this._textureAtlasDataMap[t]
            }
        },
        e.prototype.getArmatureData = function(t, e) {
            void 0 === e && (e = "");
            var i = new a;
            return this._fillBuildArmaturePackage(i, e, t, "", "") ? i.armature: null
        },
        e.prototype.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e in this._dragonBonesDataMap) t && this._dragonBones.bufferObject(this._dragonBonesDataMap[e]),
            delete this._dragonBonesDataMap[e];
            for (var e in this._textureAtlasDataMap) {
                if (t) for (var a = this._textureAtlasDataMap[e], i = 0, r = a; i < r.length; i++) {
                    var n = r[i];
                    this._dragonBones.bufferObject(n)
                }
                delete this._textureAtlasDataMap[e]
            }
        },
        e.prototype.buildArmature = function(t, e, i, r) {
            void 0 === e && (e = ""),
            void 0 === i && (i = ""),
            void 0 === r && (r = "");
            var n = new a;
            if (!this._fillBuildArmaturePackage(n, e || "", t, i || "", r || "")) return console.warn("No armature data: " + t + ", " + (null !== e ? e: "")),
            null;
            var s = this._buildArmature(n);
            return this._buildBones(n, s),
            this._buildSlots(n, s),
            this._buildConstraints(n, s),
            s.invalidUpdate(null, !0),
            s.advanceTime(0),
            s
        },
        e.prototype.replaceDisplay = function(e, a, i) {
            void 0 === i && (i = -1),
            0 > i && (i = e.displayIndex),
            0 > i && (i = 0),
            e.replaceDisplayData(a, i);
            var r = e.displayList;
            if (r.length <= i) {
                r.length = i + 1;
                for (var n = 0,
                s = r.length; s > n; ++n) r[n] || (r[n] = null)
            }
            if (null !== a) {
                var o = e.rawDisplayDatas,
                l = null;
                o && (t.DragonBones.webAssembly ? i < o.size() && (l = o.get(i)) : i < o.length && (l = o[i])),
                r[i] = this._getSlotDisplay(null, a, l, e)
            } else r[i] = null;
            e.displayList = r
        },
        e.prototype.replaceSlotDisplay = function(t, e, a, i, r, n) {
            void 0 === n && (n = -1);
            var s = this.getArmatureData(e, t || "");
            if (!s || !s.defaultSkin) return ! 1;
            var o = s.defaultSkin.getDisplay(a, i);
            return o ? (this.replaceDisplay(r, o, n), !0) : !1
        },
        e.prototype.replaceSlotDisplayList = function(e, a, i, r) {
            var n = this.getArmatureData(a, e || "");
            if (!n || !n.defaultSkin) return ! 1;
            var s = n.defaultSkin.getDisplays(i);
            if (!s) return ! 1;
            for (var o = 0,
            l = 0,
            h = t.DragonBones.webAssembly ? s.size() : s.length; h > l; ++l) {
                var u = t.DragonBones.webAssembly ? s.get(l) : s[l];
                this.replaceDisplay(r, u, o++)
            }
            return ! 0
        },
        e.prototype.replaceSkin = function(e, a, i, r) {
            void 0 === i && (i = !1),
            void 0 === r && (r = null);
            for (var n = !1,
            s = a.parent.defaultSkin,
            o = 0,
            l = e.getSlots(); o < l.length; o++) {
                var h = l[o];
                if (! (null !== r && r.indexOf(h.name) >= 0)) {
                    var u = a.getDisplays(h.name);
                    if (u || (null !== s && a !== s && (u = s.getDisplays(h.name)), u)) {
                        var _ = t.DragonBones.webAssembly ? u.size() : u.length,
                        f = h.displayList;
                        f.length = _;
                        for (var c = 0,
                        p = _; p > c; ++c) {
                            var m = t.DragonBones.webAssembly ? u.get(c) : u[c];
                            null !== m ? f[c] = this._getSlotDisplay(null, m, null, h) : f[c] = null
                        }
                        n = !0,
                        h.rawDisplayDatas = u,
                        h.displayList = f
                    } else i && (h.rawDisplayDatas = null, h.displayList = [])
                }
            }
            return n
        },
        e.prototype.replaceAnimation = function(e, a, i) {
            void 0 === i && (i = !0);
            var r = a.defaultSkin;
            if (null === r) return ! 1;
            if (i) e.animation.animations = a.animations;
            else {
                var n = e.animation.animations,
                s = {};
                for (var o in n) s[o] = n[o];
                for (var o in a.animations) s[o] = a.animations[o];
                e.animation.animations = s
            }
            for (var l = 0,
            h = e.getSlots(); l < h.length; l++) for (var u = h[l], _ = 0, f = 0, c = u.displayList; f < c.length; f++) {
                var p = c[f];
                if (p instanceof t.Armature) {
                    var m = r.getDisplays(u.name);
                    if (null !== m && _ < (t.DragonBones.webAssembly ? m.size() : m.length)) {
                        var d = t.DragonBones.webAssembly ? m.get(_) : m[_];
                        if (null !== d && 1 === d.type) {
                            var y = this.getArmatureData(d.path, d.parent.parent.parent.name);
                            y && this.replaceAnimation(p, y, i)
                        }
                    }
                }
                _++
            }
            return ! 0
        },
        e.prototype.getAllDragonBonesData = function() {
            return this._dragonBonesDataMap
        },
        e.prototype.getAllTextureAtlasData = function() {
            return this._textureAtlasDataMap
        },
        Object.defineProperty(e.prototype, "clock", {
            get: function() {
                return this._dragonBones.clock
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "dragonBones", {
            get: function() {
                return this._dragonBones
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.changeSkin = function(t, e, a) {
            return void 0 === a && (a = null),
            this.replaceSkin(t, e, !1, a)
        },
        e.prototype.copyAnimationsToArmature = function(t, e, a, i, r) {
            void 0 === a && (a = ""),
            void 0 === i && (i = ""),
            void 0 === r && (r = !0);
            var n = this.getArmatureData(e, i);
            return n ? this.replaceAnimation(t, n, r) : !1
        },
        e._objectParser = null,
        e._binaryParser = null,
        e
    } ();
    t.BaseFactory = e;
    var a = function() {
        function t() {
            this.dataName = "",
            this.textureAtlasName = "",
            this.skin = null
        }
        return t
    } ();
    t.BuildArmaturePackage = a
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._renderTexture = null,
            t
        }
        return __extends(i, e),
        i.toString = function() {
            return "[class dragonBones.EgretTextureAtlasData]"
        },
        i.prototype._onClear = function() {
            e.prototype._onClear.call(this),
            this.disposeEnabled && null !== this._renderTexture && this._renderTexture.dispose(),
            this.disposeEnabled = !1,
            this._renderTexture = null
        },
        i.prototype.createTexture = function() {
            return t.BaseObject.borrowObject(a)
        },
        Object.defineProperty(i.prototype, "renderTexture", {
            get: function() {
                return this._renderTexture
            },
            set: function(t) {
                if (this._renderTexture !== t) if (this._renderTexture = t, null !== this._renderTexture) {
                    var e = this._renderTexture.bitmapData,
                    a = this.width > 0 ? this.width: e.width,
                    i = this.height > 0 ? this.height: e.height;
                    for (var r in this.textures) {
                        var n = egret.$TextureScaleFactor,
                        s = this.textures[r],
                        o = s.region.width,
                        l = s.region.height;
                        null === s.renderTexture && (s.renderTexture = new egret.Texture),
                        s.renderTexture.bitmapData = e,
                        s.rotated ? s.renderTexture.$initData(s.region.x * n, s.region.y * n, l * n, o * n, 0, 0, l * n, o * n, a, i, s.rotated) : s.renderTexture.$initData(s.region.x * n, s.region.y * n, o * n, l * n, 0, 0, o * n, l * n, a, i)
                    }
                } else for (var r in this.textures) {
                    var s = this.textures[r];
                    s.renderTexture = null
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.dispose = function() {
            console.warn("已废弃。"),
            this.returnToPool()
        },
        Object.defineProperty(i.prototype, "texture", {
            get: function() {
                return console.warn("已废弃。"),
                this.renderTexture
            },
            enumerable: !0,
            configurable: !0
        }),
        i
    } (t.TextureAtlasData);
    t.EgretTextureAtlasData = e;
    var a = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.renderTexture = null,
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.EgretTextureData]"
        },
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            null !== this.renderTexture,
            this.renderTexture = null
        },
        e
    } (t.TextureData);
    t.EgretTextureData = a
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(a, e),
        Object.defineProperty(a.prototype, "eventObject", {
            get: function() {
                return this.data
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animationName", {
            get: function() {
                var t = this.eventObject.animationState;
                return null !== t ? t.name: ""
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "armature", {
            get: function() {
                return this.eventObject.armature
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "bone", {
            get: function() {
                return this.eventObject.bone
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "slot", {
            get: function() {
                return this.eventObject.slot
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animationState", {
            get: function() {
                return this.eventObject.animationState
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "frameLabel", {
            get: function() {
                return this.eventObject.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "sound", {
            get: function() {
                return this.eventObject.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "movementID", {
            get: function() {
                return this.animationName
            },
            enumerable: !0,
            configurable: !0
        }),
        a.START = t.EventObject.START,
        a.LOOP_COMPLETE = t.EventObject.LOOP_COMPLETE,
        a.COMPLETE = t.EventObject.COMPLETE,
        a.FADE_IN = t.EventObject.FADE_IN,
        a.FADE_IN_COMPLETE = t.EventObject.FADE_IN_COMPLETE,
        a.FADE_OUT = t.EventObject.FADE_OUT,
        a.FADE_OUT_COMPLETE = t.EventObject.FADE_OUT_COMPLETE,
        a.FRAME_EVENT = t.EventObject.FRAME_EVENT,
        a.SOUND_EVENT = t.EventObject.SOUND_EVENT,
        a.ANIMATION_FRAME_EVENT = t.EventObject.FRAME_EVENT,
        a.BONE_FRAME_EVENT = t.EventObject.FRAME_EVENT,
        a.MOVEMENT_FRAME_EVENT = t.EventObject.FRAME_EVENT,
        a.SOUND = t.EventObject.SOUND_EVENT,
        a
    } (egret.Event);
    t.EgretEvent = e;
    var a = function(a) {
        function i() {
            var t = null !== a && a.apply(this, arguments) || this;
            return t.debugDraw = !1,
            t._batchEnabled = !(global.nativeRender || global.bricks),
            t._childDirty = !0,
            t._debugDraw = !1,
            t._armature = null,
            t._bounds = null,
            t._debugDrawer = null,
            t
        }
        return __extends(i, a),
        i._cleanBeforeRender = function() {},
        i.prototype.dbInit = function(t) {
            this._armature = t,
            this._batchEnabled && (this.$renderNode = new egret.sys.GroupNode, this.$renderNode.cleanBeforeRender = i._cleanBeforeRender)
        },
        i.prototype.dbClear = function() {
            this._armature = null,
            this._bounds = null,
            this._debugDrawer = null
        },
        i.prototype.dbUpdate = function() {
            var e = t.DragonBones.debugDraw || this.debugDraw;
            if (e || this._debugDraw) if (this._debugDraw = e, this._debugDraw) {
                null === this._debugDrawer && (this._debugDrawer = new egret.Sprite),
                this._debugDrawer.parent !== this && this.addChild(this._debugDrawer);
                var a = 2,
                i = this._debugDrawer.graphics;
                i.clear();
                for (var r = 0,
                n = this._armature.getBones(); r < n.length; r++) {
                    var s = n[r];
                    if (0 === s.boneData.type) {
                        var o = Math.max(s.boneData.length, a),
                        l = s.globalTransformMatrix.tx,
                        h = s.globalTransformMatrix.ty,
                        u = l - s.globalTransformMatrix.a * a,
                        _ = h - s.globalTransformMatrix.b * a,
                        f = l + s.globalTransformMatrix.a * o,
                        c = h + s.globalTransformMatrix.b * o,
                        p = l + _ - h,
                        m = h + u - l,
                        d = l - _ + h,
                        y = h - u + l;
                        i.lineStyle(2, 65535, .7),
                        i.moveTo(u, _),
                        i.lineTo(f, c),
                        i.moveTo(p, m),
                        i.lineTo(d, y)
                    } else {
                        var g = s,
                        v = g._boneData,
                        b = v.segmentX,
                        D = v.segmentY,
                        T = g._vertices;
                        i.lineStyle(2, 16776960, .7);
                        for (var A = 0; D > A; ++A) for (var x = 0; b > x; ++x) {
                            var O = 2 * (x + A * (b + 1)),
                            P = T[O],
                            E = T[O + 1];
                            i.moveTo(P, E),
                            i.lineTo(T[O + 2], T[O + 3]),
                            i.moveTo(P, E),
                            i.lineTo(T[O + 2 * (b + 1)], T[O + 2 * (b + 1) + 1]),
                            x === b - 1 && (i.moveTo(T[O + 2], T[O + 3]), i.lineTo(T[O + 2 * (b + 2)], T[O + 2 * (b + 2) + 1])),
                            A === D - 1 && (i.moveTo(T[O + 2 * (b + 1)], T[O + 2 * (b + 1) + 1]), i.lineTo(T[O + 2 * (b + 2)], T[O + 2 * (b + 2) + 1]))
                        }
                    }
                }
                for (var S = 0,
                M = this._armature.getSlots(); S < M.length; S++) {
                    var B = M[S],
                    C = B.boundingBoxData;
                    if (null !== C) {
                        var w = this._debugDrawer.getChildByName(B.name);
                        switch (null === w && (w = new egret.Shape, w.name = B.name, this._debugDrawer.addChild(w)), w.graphics.clear(), w.graphics.lineStyle(2, 16711935, .7), C.type) {
                        case 0:
                            w.graphics.drawRect(.5 * -C.width, .5 * -C.height, C.width, C.height);
                            break;
                        case 1:
                            w.graphics.drawEllipse(.5 * -C.width, .5 * -C.height, C.width, C.height);
                            break;
                        case 2:
                            for (var T = C.vertices,
                            I = 0; I < T.length; I += 2) {
                                var P = T[I],
                                E = T[I + 1];
                                0 === I ? w.graphics.moveTo(P, E) : w.graphics.lineTo(P, E)
                            }
                            w.graphics.lineTo(T[0], T[1])
                        }
                        B.updateTransformAndMatrix(),
                        B.updateGlobalTransform(),
                        w.$setMatrix(B.globalTransformMatrix, !1)
                    } else {
                        var w = this._debugDrawer.getChildByName(B.name);
                        null !== w && this._debugDrawer.removeChild(w)
                    }
                }
            } else null !== this._debugDrawer && this._debugDrawer.parent === this && this.removeChild(this._debugDrawer); ! t.isV5 && this._batchEnabled && this._childDirty && this.$invalidateContentBounds()
        },
        i.prototype.dispose = function(t) {
            void 0 === t && (t = !0),
            null !== this._armature && (this._armature.dispose(), this._armature = null)
        },
        i.prototype.dispatchDBEvent = function(t, i) {
            var r = egret.Event.create(e, t);
            r.data = i,
            a.prototype.dispatchEvent.call(this, r),
            egret.Event.release(r)
        },
        i.prototype.hasDBEventListener = function(t) {
            return this.hasEventListener(t)
        },
        i.prototype.addDBEventListener = function(t, e, a) {
            this.addEventListener(t, e, a)
        },
        i.prototype.removeDBEventListener = function(t, e, a) {
            this.removeEventListener(t, e, a)
        },
        i.prototype.disableBatch = function() {
            if (this._batchEnabled && this._armature) {
                for (var t = 0,
                e = this._armature.getSlots(); t < e.length; t++) {
                    var a = e[t],
                    i = a._deformVertices && a._deformVertices.verticesData ? a.meshDisplay: a.rawDisplay;
                    a.display || i !== a.meshDisplay || (i = a.rawDisplay);
                    var r = i.$renderNode;
                    r.matrix && i.$setMatrix(a.globalTransformMatrix, !1),
                    this.addChild(i)
                }
                this._batchEnabled = !1,
                this.$renderNode.cleanBeforeRender = null,
                this.$renderNode = null,
                this.armature.invalidUpdate(null, !0)
            }
        },
        Object.defineProperty(i.prototype, "armature", {
            get: function() {
                return this._armature
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(i.prototype, "animation", {
            get: function() {
                return this._armature.animation
            },
            enumerable: !0,
            configurable: !0
        }),
        i.prototype.$measureContentBounds = function(e) {
            if (this._batchEnabled && this._armature) {
                if (this._childDirty) {
                    this._childDirty = !1;
                    for (var i = !0,
                    r = new egret.Rectangle,
                    n = 0,
                    s = this._armature.getSlots(); n < s.length; n++) {
                        var o = s[n],
                        l = o.display;
                        if (l && l.$renderNode && l.$renderNode.image) {
                            var h = l.$renderNode.matrix;
                            if (l === o.meshDisplay) {
                                var u = l.$renderNode.vertices;
                                if (! (u && u.length > 0)) continue;
                                r.setTo(999999, 999999, -999999, -999999);
                                for (var _ = 0,
                                f = u.length; f > _; _ += 2) {
                                    var c = u[_],
                                    p = u[_ + 1];
                                    r.x > c && (r.x = c),
                                    r.width < c && (r.width = c),
                                    r.y > p && (r.y = p),
                                    r.height < p && (r.height = p)
                                }
                                r.width -= r.x,
                                r.height -= r.y
                            } else {
                                var m = o.displayData;
                                if (! (m && m instanceof t.ImageDisplayData && m.texture)) continue;
                                var d = m.texture.parent.scale;
                                r.x = 0,
                                r.y = 0,
                                r.width = m.texture.region.width * d,
                                r.height = m.texture.region.height * d
                            }
                            h.$transformBounds(r);
                            var y = r.x,
                            g = r.y,
                            v = r.x + r.width,
                            b = r.y + r.height;
                            i ? (i = !1, e.x = y, e.y = g, e.width = v, e.height = b) : (y < e.x && (e.x = y), g < e.y && (e.y = g), v > e.width && (e.width = v), b > e.height && (e.height = b))
                        }
                    }
                    e.width -= e.x,
                    e.height -= e.y,
                    t.isV5 && (null === this._bounds && (this._bounds = new egret.Rectangle), this._bounds.copyFrom(e))
                } else t.isV5 && (null === this._bounds && (this._bounds = new egret.Rectangle), e.copyFrom(this._bounds));
                return e
            }
            return a.prototype.$measureContentBounds.call(this, e)
        },
        i.prototype.hasEvent = function(t) {
            return this.hasDBEventListener(t)
        },
        i.prototype.addEvent = function(t, e, a) {
            this.addDBEventListener(t, e, a)
        },
        i.prototype.removeEvent = function(t, e, a) {
            this.removeDBEventListener(t, e, a)
        },
        i.prototype.advanceTimeBySelf = function(e) {
            e ? this._armature.clock = t.EgretFactory.factory.clock: this._armature.clock = null
        },
        i
    } (egret.DisplayObjectContainer);
    t.EgretArmatureDisplay = a;
    var i = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    } (e);
    t.Event = i;
    var r = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    } (e);
    t.ArmatureEvent = r;
    var n = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    } (e);
    t.AnimationEvent = n;
    var s = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    } (e);
    t.FrameEvent = s;
    var o = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    } (e);
    t.SoundEvent = o;
    var l = function(e) {
        function a(a, i, r) {
            void 0 === r && (r = 1);
            var n = e.call(this) || this;
            return console.warn("已废弃"),
            n._onClear(),
            t.ObjectDataParser.getInstance().parseTextureAtlasData(i, n, r),
            n.renderTexture = a,
            n
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.EgretTextureAtlas]"
        },
        a
    } (t.EgretTextureAtlasData);
    t.EgretTextureAtlas = l;
    var h = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    } (l);
    t.EgretSheetAtlas = h;
    var u = function() {
        function e() {}
        return e.getInstance = function() {
            return console.warn("已废弃"),
            t.EgretFactory.factory.soundEventManager
        },
        e
    } ();
    t.SoundEventManager = u;
    var _ = function() {
        function t() {
            console.warn("已废弃")
        }
        return t
    } ();
    t.AnimationCacheManager = _
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    var e = function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.transformUpdateEnabled = !1,
            t._armatureDisplay = null,
            t._renderDisplay = null,
            t._colorFilter = null,
            t
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class dragonBones.EgretSlot]"
        },
        a.prototype.init = function(a, i, r, n) {
            e.prototype.init.call(this, a, i, r, n),
            t.isV5 ? this._updateTransform = this._updateTransformV5: this._updateTransform = this._updateTransformV4
        },
        a.prototype._onClear = function() {
            e.prototype._onClear.call(this),
            this._armatureDisplay = null,
            this._renderDisplay = null,
            this._colorFilter = null
        },
        a.prototype._initDisplay = function(t, e) {},
        a.prototype._disposeDisplay = function(t, e) {},
        a.prototype._onUpdateDisplay = function() {
            if (this._armatureDisplay = this._armature.display, this._renderDisplay = null !== this._display ? this._display: this._rawDisplay, t.isV5 && this._armatureDisplay._batchEnabled && (this._renderDisplay !== this._rawDisplay || this._renderDisplay.$renderNode instanceof egret.sys.BitmapNode || (this._renderDisplay.$renderNode = new egret.sys.BitmapNode)), this._armatureDisplay._batchEnabled) if (this._renderDisplay !== this._rawDisplay && this._renderDisplay !== this._meshDisplay) this._armatureDisplay.disableBatch();
            else {
                var e = this._renderDisplay.$renderNode;
                e.matrix || (e.matrix = new egret.Matrix)
            }
        },
        a.prototype._addDisplay = function() {
            this._armatureDisplay._batchEnabled ? this._armatureDisplay.$renderNode.addNode(this._renderDisplay.$renderNode) : this._armatureDisplay.addChild(this._renderDisplay)
        },
        a.prototype._replaceDisplay = function(t) {
            var e = t;
            if (this._armatureDisplay._batchEnabled) {
                var a = this._armatureDisplay.$renderNode.drawData;
                a[a.indexOf(e.$renderNode)] = this._renderDisplay.$renderNode
            } else this._armatureDisplay.addChild(this._renderDisplay),
            this._armatureDisplay.swapChildren(this._renderDisplay, e),
            this._armatureDisplay.removeChild(e)
        },
        a.prototype._removeDisplay = function() {
            if (this._armatureDisplay._batchEnabled) {
                var t = this._armatureDisplay.$renderNode.drawData;
                t.splice(t.indexOf(this._renderDisplay.$renderNode), 1)
            } else this._renderDisplay.parent.removeChild(this._renderDisplay)
        },
        a.prototype._updateZOrder = function() {
            if (this._armatureDisplay._batchEnabled) {
                var t = this._armatureDisplay.$renderNode.drawData;
                t[this._zOrder] = this._renderDisplay.$renderNode
            } else {
                var e = this._armatureDisplay.getChildIndex(this._renderDisplay);
                if (e === this._zOrder) return;
                this._armatureDisplay.addChildAt(this._renderDisplay, this._zOrder)
            }
        },
        a.prototype._updateVisible = function() {
            var t = this._parent.visible && this._visible;
            if (this._armatureDisplay._batchEnabled) {
                var e = this._renderDisplay.$renderNode;
                e.alpha = t ? 1 : 0
            } else this._renderDisplay.visible = t
        },
        a.prototype._updateBlendMode = function() {
            switch (this._blendMode) {
            case 0:
                this._renderDisplay.blendMode = egret.BlendMode.NORMAL;
                break;
            case 1:
                this._renderDisplay.blendMode = egret.BlendMode.ADD;
                break;
            case 5:
                this._renderDisplay.blendMode = egret.BlendMode.ERASE
            }
            if (this._armatureDisplay._batchEnabled) {
                var t = this._renderDisplay.$renderNode;
                t.blendMode = egret.sys.blendModeToNumber(this._renderDisplay.blendMode)
            }
        },
        a.prototype._updateColor = function() {
            if (1 !== this._colorTransform.redMultiplier || 1 !== this._colorTransform.greenMultiplier || 1 !== this._colorTransform.blueMultiplier || 0 !== this._colorTransform.redOffset || 0 !== this._colorTransform.greenOffset || 0 !== this._colorTransform.blueOffset || 0 !== this._colorTransform.alphaOffset) {
                null === this._colorFilter && (this._colorFilter = new egret.ColorMatrixFilter);
                var t = this._colorFilter.matrix;
                if (t[0] = this._colorTransform.redMultiplier, t[6] = this._colorTransform.greenMultiplier, t[12] = this._colorTransform.blueMultiplier, t[18] = this._colorTransform.alphaMultiplier, t[4] = this._colorTransform.redOffset, t[9] = this._colorTransform.greenOffset, t[14] = this._colorTransform.blueOffset, t[19] = this._colorTransform.alphaOffset, this._colorFilter.matrix = t, this._armatureDisplay._batchEnabled) {
                    var e = this._renderDisplay.$renderNode;
                    e.filter = this._colorFilter,
                    e.alpha = 1
                }
                var a = this._renderDisplay.filters;
                a || (a = []),
                a.indexOf(this._colorFilter) < 0 && a.push(this._colorFilter),
                this._renderDisplay.filters = a,
                this._renderDisplay.alpha = 1
            } else {
                if (this._armatureDisplay._batchEnabled) {
                    var e = this._renderDisplay.$renderNode;
                    e.filter = null,
                    e.alpha = this._colorTransform.alphaMultiplier
                }
                this._renderDisplay.filters = null,
                this._renderDisplay.alpha = this._colorTransform.alphaMultiplier
            }
        },
        a.prototype._updateFrame = function() {
            var e = null !== this._deformVertices && this._display === this._meshDisplay ? this._deformVertices.verticesData: null,
            a = this._textureData;
            if (this._displayIndex >= 0 && null !== this._display && null !== a) {
                if (null !== this._armature.replacedTexture && null !== this._rawDisplayDatas && this._rawDisplayDatas.indexOf(this._displayData) >= 0) {
                    var i = a.parent;
                    null === this._armature._replaceTextureAtlasData ? (i = t.BaseObject.borrowObject(t.EgretTextureAtlasData), i.copyFrom(a.parent), i.renderTexture = this._armature.replacedTexture, this._armature._replaceTextureAtlasData = i) : i = this._armature._replaceTextureAtlasData,
                    a = i.getTexture(a.name)
                }
                if (null !== a.renderTexture) {
                    if (null !== e) {
                        var r = e.data,
                        n = r.intArray,
                        s = r.floatArray,
                        o = n[e.offset + 0],
                        l = n[e.offset + 1],
                        h = n[e.offset + 2];
                        0 > h && (h += 65536);
                        var u = h + 2 * o,
                        _ = this._armature._armatureData.scale,
                        f = this._renderDisplay,
                        c = f.$renderNode;
                        c.uvs.length = 2 * o,
                        c.vertices.length = 2 * o,
                        c.indices.length = 3 * l;
                        for (var p = 0,
                        m = 2 * o; m > p; ++p) c.vertices[p] = s[h + p] * _,
                        c.uvs[p] = s[u + p];
                        for (var p = 0; 3 * l > p; ++p) c.indices[p] = n[e.offset + 4 + p];
                        if (this._armatureDisplay._batchEnabled) {
                            var d = a.renderTexture,
                            y = this._renderDisplay.$renderNode;
                            if (egret.sys.RenderNode.prototype.cleanBeforeRender.call(y), y.image = d.bitmapData, t.isV5) y.drawMesh(d.$bitmapX, d.$bitmapY, d.$bitmapWidth, d.$bitmapHeight, d.$offsetX, d.$offsetY, d.textureWidth, d.textureHeight),
                            y.imageWidth = d.$sourceWidth,
                            y.imageHeight = d.$sourceHeight;
                            else {
                                var g = d;
                                y.drawMesh(g._bitmapX, g._bitmapY, g._bitmapWidth, g._bitmapHeight, g._offsetX, g._offsetY, g.textureWidth, g.textureHeight),
                                y.imageWidth = g._sourceWidth,
                                y.imageHeight = g._sourceHeight
                            }
                            this._blendModeDirty = !0,
                            this._colorDirty = !0
                        }
                        f.texture = a.renderTexture,
                        f.anchorOffsetX = this._pivotX,
                        f.anchorOffsetY = this._pivotY,
                        f.$updateVertices(),
                        t.isV5 || f.$invalidateTransform();
                        var v = null !== e.weight,
                        b = 0 !== this._parent._boneData.type; (v || b) && this._identityTransform()
                    } else {
                        var _ = a.parent.scale * this._armature._armatureData.scale,
                        D = (a.rotated ? a.region.height: a.region.width) * _,
                        T = (a.rotated ? a.region.width: a.region.height) * _,
                        A = this._renderDisplay,
                        d = a.renderTexture;
                        if (A.texture = d, this._armatureDisplay._batchEnabled) {
                            var y = this._renderDisplay.$renderNode;
                            if (egret.sys.RenderNode.prototype.cleanBeforeRender.call(y), y.image = d.bitmapData, t.isV5) y.drawImage(d.$bitmapX, d.$bitmapY, d.$bitmapWidth, d.$bitmapHeight, d.$offsetX, d.$offsetY, D, T),
                            y.imageWidth = d.$sourceWidth,
                            y.imageHeight = d.$sourceHeight;
                            else {
                                var g = d;
                                y.drawImage(g._bitmapX, g._bitmapY, g._bitmapWidth, g._bitmapHeight, g._offsetX, g._offsetY, D, T),
                                y.imageWidth = g._sourceWidth,
                                y.imageHeight = g._sourceHeight
                            }
                            this._blendModeDirty = !0,
                            this._colorDirty = !0
                        } else A.width = D,
                        A.height = T;
                        A.anchorOffsetX = this._pivotX,
                        A.anchorOffsetY = this._pivotY
                    }
                    return void(this._visibleDirty = !0)
                }
            }
            this._armatureDisplay._batchEnabled && (this._renderDisplay.$renderNode.image = null);
            var x = this._renderDisplay;
            x.texture = null,
            x.x = 0,
            x.y = 0,
            x.visible = !1
        },
        a.prototype._updateMesh = function() {
            var e = this._armature._armatureData.scale,
            a = this._deformVertices.vertices,
            i = this._deformVertices.bones,
            r = this._deformVertices.verticesData,
            n = r.weight,
            s = a.length > 0 && r.inheritDeform,
            o = this._renderDisplay,
            l = o.$renderNode;
            if (null !== n) {
                var h = r.data,
                u = h.intArray,
                _ = h.floatArray,
                f = u[r.offset + 0],
                c = u[n.offset + 1];
                0 > c && (c += 65536);
                for (var p = 0,
                m = 0,
                d = n.offset + 2 + i.length,
                y = c,
                g = 0; f > p; ++p) {
                    for (var v = u[d++], b = 0, D = 0, T = 0; v > T; ++T) {
                        var A = u[d++],
                        x = i[A];
                        if (null !== x) {
                            var O = x.globalTransformMatrix,
                            P = _[y++],
                            E = _[y++] * e,
                            S = _[y++] * e;
                            s && (E += a[g++], S += a[g++]),
                            b += (O.a * E + O.c * S + O.tx) * P,
                            D += (O.b * E + O.d * S + O.ty) * P
                        }
                    }
                    l.vertices[m++] = b,
                    l.vertices[m++] = D
                }
                o.$updateVertices(),
                t.isV5 || o.$invalidateTransform()
            } else if (s) {
                var M = 0 !== this._parent._boneData.type,
                h = r.data,
                u = h.intArray,
                _ = h.floatArray,
                f = u[r.offset + 0],
                B = u[r.offset + 2];
                0 > B && (B += 65536);
                for (var p = 0,
                C = 2 * f; C > p; p += 2) {
                    var w = _[B + p] * e + a[p],
                    I = _[B + p + 1] * e + a[p + 1];
                    if (M) {
                        var O = this._parent._getGlobalTransformMatrix(w, I);
                        l.vertices[p] = O.a * w + O.c * I + O.tx,
                        l.vertices[p + 1] = O.b * w + O.d * I + O.ty
                    } else l.vertices[p] = w,
                    l.vertices[p + 1] = I
                }
                o.$updateVertices(),
                t.isV5 || o.$invalidateTransform()
            }
            this._armatureDisplay._batchEnabled && (this._armatureDisplay._childDirty = !0)
        },
        a.prototype._updateGlueMesh = function() {},
        a.prototype._updateTransform = function() {
            throw new Error
        },
        a.prototype._identityTransform = function() {
            if (this._armatureDisplay._batchEnabled) {
                this._armatureDisplay._childDirty = !0;
                var t = this._renderDisplay.$renderNode.matrix;
                t.a = 1,
                t.b = 0,
                t.c = 0,
                t.d = 1,
                t.tx = 0,
                t.ty = 0
            } else egret.$TempMatrix.identity(),
            this._renderDisplay.$setMatrix(egret.$TempMatrix, this.transformUpdateEnabled)
        },
        a.prototype._updateTransformV4 = function() {
            var t = this.globalTransformMatrix;
            if (this._armatureDisplay._batchEnabled) {
                this._armatureDisplay._childDirty = !0;
                var e = this._renderDisplay.$renderNode.matrix;
                e.a = t.a,
                e.b = t.b,
                e.c = t.c,
                e.d = t.d,
                e.tx = this.globalTransformMatrix.tx - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY),
                e.ty = this.globalTransformMatrix.ty - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY)
            } else if (this.transformUpdateEnabled) this._renderDisplay.$setMatrix(t, !0);
            else {
                var a = this._renderDisplay.$DisplayObject,
                e = a[6];
                e.a = this.globalTransformMatrix.a,
                e.b = this.globalTransformMatrix.b,
                e.c = this.globalTransformMatrix.c,
                e.d = this.globalTransformMatrix.d,
                e.tx = this.globalTransformMatrix.tx,
                e.ty = this.globalTransformMatrix.ty,
                this._renderDisplay.$removeFlags(8),
                this._renderDisplay.$invalidatePosition()
            }
        },
        a.prototype._updateTransformV5 = function() {
            var t = this.globalTransformMatrix;
            if (this._armatureDisplay._batchEnabled) {
                this._armatureDisplay._childDirty = !0;
                var e = this._renderDisplay.$renderNode.matrix;
                e.a = t.a,
                e.b = t.b,
                e.c = t.c,
                e.d = t.d,
                e.tx = this.globalTransformMatrix.tx - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY),
                e.ty = this.globalTransformMatrix.ty - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY)
            } else this._renderDisplay.$setMatrix(t, this.transformUpdateEnabled)
        },
        a
    } (t.Slot);
    t.EgretSlot = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    t.isV5 = Number(egret.Capabilities.engineVersion.substr(0, 3)) >= 5.1;
    var e = function(e) {
        function a(i) {
            void 0 === i && (i = null);
            var r = e.call(this, i) || this;
            if (null === a._dragonBonesInstance) {
                var n = new t.EgretArmatureDisplay;
                a._dragonBonesInstance = new t.DragonBones(n),
                a._time = .001 * egret.getTimer(),
                egret.startTick(a._clockHandler, a)
            }
            return r._dragonBones = a._dragonBonesInstance,
            r
        }
        return __extends(a, e),
        a._clockHandler = function(t) {
            t *= .001;
            var e = t - this._time;
            return a._dragonBonesInstance.advanceTime(e),
            this._time = t,
            !1
        },
        Object.defineProperty(a, "factory", {
            get: function() {
                return null === a._factory && (a._factory = new a),
                a._factory
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype._isSupportMesh = function() {
            return "webgl" === egret.Capabilities.renderMode || egret.Capabilities.runtimeType === egret.RuntimeType.NATIVE ? !0 : (console.warn("Canvas can not support mesh, please change renderMode to webgl."), !1)
        },
        a.prototype._buildTextureAtlasData = function(e, a) {
            if (null !== e) if (a instanceof egret.Texture) e.renderTexture = a;
            else {
                var i = new egret.Texture;
                i.bitmapData = new egret.BitmapData(a),
                e.disposeEnabled = !0,
                e.renderTexture = i
            } else e = t.BaseObject.borrowObject(t.EgretTextureAtlasData);
            return e
        },
        a.prototype._buildArmature = function(e) {
            var a = t.BaseObject.borrowObject(t.Armature),
            i = new t.EgretArmatureDisplay;
            return a.init(e.armature, i, i, this._dragonBones),
            a
        },
        a.prototype._buildSlot = function(e, a, i) {
            var r = t.BaseObject.borrowObject(t.EgretSlot);
            return r.init(a, i, new egret.Bitmap, new egret.Mesh),
            r
        },
        a.prototype.buildArmatureDisplay = function(t, e, a, i) {
            void 0 === e && (e = ""),
            void 0 === a && (a = ""),
            void 0 === i && (i = "");
            var r = this.buildArmature(t, e || "", a || "", i || "");
            return null !== r ? (this._dragonBones.clock.add(r), r.display) : null
        },
        a.prototype.getTextureDisplay = function(t, e) {
            void 0 === e && (e = null);
            var a = this._getTextureData(null !== e ? e: "", t);
            if (null !== a && null !== a.renderTexture) {
                var i = a.renderTexture,
                r = new egret.Bitmap(i);
                return r.width = i.textureWidth * a.parent.scale,
                r.height = i.textureHeight * a.parent.scale,
                r
            }
            return null
        },
        Object.defineProperty(a.prototype, "soundEventManager", {
            get: function() {
                return this._dragonBones.eventManager
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a, "clock", {
            get: function() {
                return a.factory.clock
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.addSkeletonData = function(t, e) {
            void 0 === e && (e = null),
            console.warn("已废弃"),
            this.addDragonBonesData(t, e)
        },
        a.prototype.getSkeletonData = function(t) {
            return console.warn("已废弃"),
            this.getDragonBonesData(t)
        },
        a.prototype.removeSkeletonData = function(t) {
            console.warn("已废弃"),
            this.removeDragonBonesData(t)
        },
        a.prototype.addTextureAtlas = function(t, e) {
            void 0 === e && (e = null),
            console.warn("已废弃"),
            this.addTextureAtlasData(t, e)
        },
        a.prototype.getTextureAtlas = function(t) {
            return console.warn("已废弃"),
            this.getTextureAtlasData(t)
        },
        a.prototype.removeTextureAtlas = function(t) {
            console.warn("已废弃"),
            this.removeTextureAtlasData(t)
        },
        a.prototype.buildFastArmature = function(t, e, a) {
            return void 0 === e && (e = ""),
            void 0 === a && (a = ""),
            console.warn("已废弃"),
            this.buildArmature(t, e || "", a || "")
        },
        a.prototype.dispose = function() {
            console.warn("已废弃"),
            this.clear()
        },
        a._time = 0,
        a._dragonBonesInstance = null,
        a._factory = null,
        a
    } (t.BaseFactory);
    t.EgretFactory = e
} (dragonBones || (dragonBones = {}));
var dragonBones; !
function(t) {
    function e(t, e) {
        for (var a = 0,
        i = t.length; i > a; ++a) {
            var r = t[a];
            if (r.name === e) return r
        }
        return null
    }
    function a(t) {
        if (t.groupName) {
            var a = _[t.groupName];
            if (a) {
                var i = e(a.movie || a.animation, t.movieName);
                if (i) return t.groupConfig = a,
                t.movieConfig = i,
                !0
            }
        }
        if (!t.groupName) for (var r in _) {
            var a = _[r];
            if (!t.groupName) {
                var i = e(a.movie || a.animation, t.movieName);
                if (i) return t.groupName = r,
                t.groupConfig = a,
                t.movieConfig = i,
                !0
            }
        }
        return ! 1
    }
    function i(t) {
        return t in _
    }
    function r(t, e, a) {
        if (void 0 === a && (a = null), !t) throw new Error;
        var i = new egret.ByteArray(t);
        i.endian = egret.Endian.LITTLE_ENDIAN,
        i.position = 8;
        var r = JSON.parse(i.readUTF());
        r.offset = i.position,
        r.arrayBuffer = t,
        r.textures = [];
        var n = r.offset % 4;
        n && (r.offset += 4 - n);
        for (var s = 0,
        o = r.position.length; o > s; s += 3) switch (s / 3) {
        case 1:
            r.displayFrameArray = new Int16Array(r.arrayBuffer, r.offset + r.position[s], r.position[s + 1] / r.position[s + 2]);
            break;
        case 2:
            r.rectangleArray = new Float32Array(r.arrayBuffer, r.offset + r.position[s], r.position[s + 1] / r.position[s + 2]);
            break;
        case 3:
            r.transformArray = new Float32Array(r.arrayBuffer, r.offset + r.position[s], r.position[s + 1] / r.position[s + 2]);
            break;
        case 4:
            r.colorArray = new Int16Array(r.arrayBuffer, r.offset + r.position[s], r.position[s + 1] / r.position[s + 2])
        }
        if (a = a || r.name, _[a] && console.warn("Replace group: " + a), _[a] = r, e instanceof Array) for (var s = 0,
        o = e.length; o > s; ++s) {
            var l = e[s];
            r.textures.push(l)
        } else r.textures.push(e)
    }
    function n(t) {
        var e = _[t];
        e && delete _[t]
    }
    function s() {
        for (var t in _) delete _[t]
    }
    function o(e, i) {
        void 0 === i && (i = null);
        var r = {
            movieName: e,
            groupName: i
        };
        if (a(r)) {
            var n = new p(r);
            return n.clock = t.EgretFactory.factory.clock,
            n
        }
        return console.warn("No movie named: " + e),
        null
    }
    function l(t) {
        var e = _[t];
        if (e) {
            for (var a = [], i = e.movie || e.animation, r = 0, n = i.length; n > r; ++r) a.push(i[r].name);
            return a
        }
        return console.warn("No group named: " + t),
        null
    }
    var h = new egret.Rectangle,
    u = new egret.Matrix,
    _ = {};
    t.hasMovieGroup = i,
    t.addMovieGroup = r,
    t.removeMovieGroup = n,
    t.removeAllMovieGroup = s,
    t.buildMovie = o,
    t.getMovieNames = l;
    var f = function(t) {
        function e(e) {
            var a = t.call(this, e) || this;
            return a.name = "",
            a.slotName = "",
            a.clipName = "",
            a
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "armature", {
            get: function() {
                return this.movie
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "bone", {
            get: function() {
                return null
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "animationState", {
            get: function() {
                return {
                    name: this.clipName
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "frameLabel", {
            get: function() {
                return this.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "movementID", {
            get: function() {
                return this.clipName
            },
            enumerable: !0,
            configurable: !0
        }),
        e.START = "start",
        e.LOOP_COMPLETE = "loopComplete",
        e.COMPLETE = "complete",
        e.FRAME_EVENT = "frameEvent",
        e.SOUND_EVENT = "soundEvent",
        e
    } (egret.Event);
    t.MovieEvent = f;
    var c = function(t) {
        function e(e) {
            var a = t.call(this) || this;
            return a.displayIndex = -1,
            a.colorIndex = -1,
            a.transformIndex = -1,
            a.rawDisplay = new egret.Bitmap,
            a.childMovies = {},
            a.displayConfig = null,
            a.childMovie = null,
            a.colorFilter = null,
            a.display = a.rawDisplay,
            a.config = e,
            a.rawDisplay.name = a.config.name,
            a.config.blendMode || (a.config.blendMode = 0),
            a
        }
        return __extends(e, t),
        e.prototype.dispose = function() {
            this.rawDisplay = null,
            this.childMovies = null,
            this.config = null,
            this.displayConfig = null,
            this.display = null,
            this.childMovie = null,
            this.colorFilter = null
        },
        e
    } (egret.HashObject),
    p = function(e) {
        function a(t) {
            var i = e.call(this) || this;
            i.timeScale = 1,
            i.clipTimeScale = 1,
            i._batchEnabled = !0,
            i._isLockDispose = !1,
            i._isDelayDispose = !1,
            i._isStarted = !1,
            i._isPlaying = !1,
            i._isReversing = !1,
            i._isCompleted = !1,
            i._playTimes = 0,
            i._time = 0,
            i._currentTime = 0,
            i._currentPlayTimes = 0,
            i._cacheFrameIndex = 0,
            i._frameSize = 0,
            i._cacheRectangle = null,
            i._clock = null,
            i._currentFrameConfig = null,
            i._clipNames = [],
            i._slots = [],
            i._childMovies = [],
            i._groupConfig = t.groupConfig,
            i._config = t.movieConfig,
            i._batchEnabled = !(i._config.isNested || i._config.hasChildAnimation),
            i._batchEnabled && (i.$renderNode = new egret.sys.GroupNode, i.$renderNode.cleanBeforeRender = a._cleanBeforeRender),
            i._clipNames.length = 0;
            for (var r = 0,
            n = i._config.clip.length; n > r; ++r) i._clipNames.push(i._config.clip[r].name);
            for (var r = 0,
            n = i._config.slot.length; n > r; ++r) {
                var s = new c(i._config.slot[r]);
                i._updateSlotBlendMode(s),
                i._slots.push(s),
                i._batchEnabled ? i.$renderNode.addNode(s.rawDisplay.$renderNode) : i.addChild(s.rawDisplay)
            }
            return i._frameSize = 2 * i._slots.length,
            i.name = i._config.name,
            i.play(),
            i.advanceTime(1e-6),
            i.stop(),
            i
        }
        return __extends(a, e),
        a._cleanBeforeRender = function() {},
        a.prototype._configToEvent = function(t, e) {
            e.movie = this,
            e.clipName = this._clipConfig.name,
            e.name = t.name,
            e.slotName = t.slot || ""
        },
        a.prototype._onCrossFrame = function(e) {
            for (var a = 0,
            i = e.actionAndEvent.length; i > a; ++a) {
                var r = e.actionAndEvent[a];
                if (r) switch (r.type) {
                case 11:
                    if (t.EgretFactory.factory.soundEventManager.hasEventListener(f.SOUND_EVENT)) {
                        var n = egret.Event.create(f, f.SOUND_EVENT);
                        this._configToEvent(r, n),
                        t.EgretFactory.factory.soundEventManager.dispatchEvent(n),
                        egret.Event.release(n)
                    }
                    break;
                case 10:
                    if (this.hasEventListener(f.FRAME_EVENT)) {
                        var s = egret.Event.create(f, f.FRAME_EVENT);
                        this._configToEvent(r, s),
                        this.dispatchEvent(s),
                        egret.Event.release(s)
                    }
                    break;
                case 0:
                    if (r.slot) {
                        var o = this._getSlot(r.slot);
                        o && o.childMovie && o.childMovie.play(r.name)
                    } else this.play(r.name)
                }
            }
        },
        a.prototype._updateSlotBlendMode = function(t) {
            var e = "";
            switch (t.config.blendMode) {
            case 0:
                e = egret.BlendMode.NORMAL;
                break;
            case 1:
                e = egret.BlendMode.ADD;
                break;
            case 5:
                e = egret.BlendMode.ERASE
            }
            e && (this._batchEnabled ? t.display.$renderNode.blendMode = egret.sys.blendModeToNumber(e) : t.display.blendMode = e)
        },
        a.prototype._updateSlotColor = function(t, e, a, i, r, n, s, o, l) {
            if (1 !== a || 1 !== i || 1 !== r || 0 !== s || 0 !== o || 0 !== l || 0 !== n) {
                t.colorFilter || (t.colorFilter = new egret.ColorMatrixFilter);
                var h = t.colorFilter.matrix;
                if (h[0] = a, h[6] = i, h[12] = r, h[18] = e, h[4] = s, h[9] = o, h[14] = l, h[19] = n, t.colorFilter.matrix = h, this._batchEnabled) t.display.$renderNode.filter = t.colorFilter,
                t.display.$renderNode.alpha = 1;
                else {
                    var u = t.display.filters;
                    u || (u = []),
                    u.indexOf(t.colorFilter) < 0 && u.push(t.colorFilter),
                    t.display.filters = u,
                    t.display.$setAlpha(1)
                }
            } else t.colorFilter && (t.colorFilter = null),
            this._batchEnabled ? (t.display.$renderNode.filter = null, t.display.$renderNode.alpha = e) : (t.display.filters = null, t.display.$setAlpha(e))
        },
        a.prototype._updateSlotDisplay = function(e) {
            var a = e.display || e.rawDisplay,
            i = e.childMovie;
            if (e.displayIndex >= 0) if (e.displayConfig = this._groupConfig.display[e.displayIndex], 1 === e.displayConfig.type) {
                var r = e.displayConfig.name in e.childMovies ? e.childMovies[e.displayConfig.name] : null;
                r || (r = o(e.displayConfig.name, this._groupConfig.name), r && (e.childMovies[e.displayConfig.name] = r)),
                r ? (e.display = r, e.childMovie = r) : (e.display = e.rawDisplay, e.childMovie = null)
            } else e.display = e.rawDisplay,
            e.childMovie = null;
            else e.displayConfig = null,
            e.display = e.rawDisplay,
            e.childMovie = null;
            if (e.display !== a && (a && (this.addChild(e.display), this.swapChildren(e.display, a), this.removeChild(a)), this._updateSlotBlendMode(e)), e.display === e.rawDisplay) if (e.displayConfig && null !== e.displayConfig.regionIndex && void 0 !== e.displayConfig.regionIndex) {
                if (!e.displayConfig.texture) {
                    var n = this._groupConfig.textures[e.displayConfig.textureIndex || 0],
                    s = 4 * e.displayConfig.regionIndex,
                    l = this._groupConfig.rectangleArray[s],
                    h = this._groupConfig.rectangleArray[s + 1],
                    u = this._groupConfig.rectangleArray[s + 2],
                    _ = this._groupConfig.rectangleArray[s + 3];
                    e.displayConfig.texture = new egret.Texture,
                    e.displayConfig.texture.bitmapData = n.bitmapData,
                    e.displayConfig.texture.$initData(l, h, Math.min(u, n.textureWidth - l), Math.min(_, n.textureHeight - h), 0, 0, Math.min(u, n.textureWidth - l), Math.min(_, n.textureHeight - h), n.textureWidth, n.textureHeight)
                }
                if (this._batchEnabled) {
                    var f = e.displayConfig.texture,
                    c = e.rawDisplay.$renderNode;
                    if (egret.sys.RenderNode.prototype.cleanBeforeRender.call(e.rawDisplay.$renderNode), c.image = f.bitmapData, t.isV5) c.drawImage(f.$bitmapX, f.$bitmapY, f.$bitmapWidth, f.$bitmapHeight, f.$offsetX, f.$offsetY, f.textureWidth, f.textureHeight),
                    c.imageWidth = f._sourceWidth,
                    c.imageHeight = f._sourceHeight;
                    else {
                        var p = f;
                        c.drawImage(p._bitmapX, p._bitmapY, p._bitmapWidth, p._bitmapHeight, p._offsetX, p._offsetY, f.textureWidth, f.textureHeight),
                        c.imageWidth = p._sourceWidth,
                        c.imageHeight = p._sourceHeight
                    }
                } else e.rawDisplay.visible = !0,
                e.rawDisplay.$setBitmapData(e.displayConfig.texture)
            } else this._batchEnabled ? e.rawDisplay.$renderNode.image = null: (e.rawDisplay.visible = !1, e.rawDisplay.$setBitmapData(null));
            e.childMovie !== i && (i && (i.stop(), this._childMovies.slice(this._childMovies.indexOf(i), 1)), e.childMovie && (this._childMovies.indexOf(e.childMovie) < 0 && this._childMovies.push(e.childMovie), e.config.action ? e.childMovie.play(e.config.action) : e.childMovie.play(e.childMovie._config.action)))
        },
        a.prototype._getSlot = function(t) {
            for (var e = 0,
            a = this._slots.length; a > e; ++e) {
                var i = this._slots[e];
                if (i.config.name === t) return i
            }
            return null
        },
        a.prototype.$render = function() {
            this._batchEnabled || e.prototype.$render.call(this)
        },
        a.prototype.$updateRenderNode = function() {
            this._batchEnabled || e.prototype.$updateRenderNode.call(this)
        },
        a.prototype.$measureContentBounds = function(t) {
            this._batchEnabled && this._cacheRectangle ? t.setTo(this._cacheRectangle.x, this._cacheRectangle.y, this._cacheRectangle.width - this._cacheRectangle.x, this._cacheRectangle.height - this._cacheRectangle.y) : e.prototype.$measureContentBounds.call(this, t)
        },
        a.prototype.$doAddChild = function(t, a, i) {
            return this._batchEnabled ? (console.warn("Can not add child."), null) : e.prototype.$doAddChild.call(this, t, a, i)
        },
        a.prototype.$doRemoveChild = function(t, a) {
            return this._batchEnabled ? (console.warn("Can not remove child."), null) : e.prototype.$doRemoveChild.call(this, t, a)
        },
        a.prototype.dispose = function() {
            if (this._isLockDispose) this._isDelayDispose = !0;
            else {
                if (this._clock && this._clock.remove(this), this._slots) for (var t = 0,
                e = this._slots.length; e > t; ++t) this._slots[t].dispose();
                this._isPlaying = !1,
                this._cacheRectangle = null,
                this._clock = null,
                this._groupConfig = null,
                this._config = null,
                this._clipConfig = null,
                this._currentFrameConfig = null,
                this._clipArray = null,
                this._clipNames = null,
                this._slots = null,
                this._childMovies = null
            }
        },
        a.prototype.advanceTime = function(e) {
            if (this._isPlaying) {
                this._isLockDispose = !0,
                0 > e && (e = -e),
                e *= this.timeScale,
                this._time += e * this.clipTimeScale;
                var a = this._clipConfig.duration,
                i = a * this._playTimes,
                r = this._time,
                n = this._currentPlayTimes;
                if (this._playTimes > 0 && (r >= i || -i >= r) ? (this._isCompleted = !0, n = this._playTimes, r = 0 > r ? 0 : a) : (this._isCompleted = !1, 0 > r ? (n = Math.floor( - r / a), r = a - -r % a) : (n = Math.floor(r / a), r %= a), this._playTimes > 0 && n > this._playTimes && (n = this._playTimes)), this._currentTime === r) return;
                var s = Math.floor(r * this._clipConfig.cacheTimeToFrameScale);
                if (this._cacheFrameIndex !== s) {
                    this._cacheFrameIndex = s;
                    var o = this._groupConfig.displayFrameArray,
                    l = this._groupConfig.transformArray,
                    _ = this._groupConfig.colorArray,
                    c = !0,
                    p = !1,
                    m = !1,
                    d = this._cacheRectangle;
                    this._cacheRectangle = this._clipConfig.cacheRectangles[this._cacheFrameIndex],
                    this._batchEnabled && !this._cacheRectangle && (m = !0, this._cacheRectangle = new egret.Rectangle, this._clipConfig.cacheRectangles[this._cacheFrameIndex] = this._cacheRectangle);
                    for (var y = 0,
                    g = this._slots.length; g > y; ++y) {
                        var v = this._slots[y],
                        b = this._frameSize * this._cacheFrameIndex + 2 * y;
                        b >= this._clipArray.length && (b = this._frameSize * (this._cacheFrameIndex - 1) + 2 * y);
                        var D = 2 * this._clipArray[b];
                        if (D >= 0) {
                            var T = o[D],
                            A = 8 * o[D + 1],
                            x = 6 * this._clipArray[b + 1],
                            O = !1;
                            if (v.displayIndex !== T && (v.displayIndex = T, O = !0, this._updateSlotDisplay(v)), (v.colorIndex !== A || O) && (v.colorIndex = A, v.colorIndex >= 0 ? this._updateSlotColor(v, .01 * _[A], .01 * _[A + 1], .01 * _[A + 2], .01 * _[A + 3], _[A + 4], _[A + 5], _[A + 6], _[A + 7]) : this._updateSlotColor(v, 1, 1, 1, 1, 0, 0, 0, 0)), p = !0, v.transformIndex !== x) if (v.transformIndex = x, this._batchEnabled) {
                                var P = v.display.$renderNode.matrix;
                                P || (P = v.display.$renderNode.matrix = new egret.Matrix),
                                P.a = l[x],
                                P.b = l[x + 1],
                                P.c = l[x + 2],
                                P.d = l[x + 3],
                                P.tx = l[x + 4],
                                P.ty = l[x + 5]
                            } else u.a = l[x],
                            u.b = l[x + 1],
                            u.c = l[x + 2],
                            u.d = l[x + 3],
                            u.tx = l[x + 4],
                            u.ty = l[x + 5],
                            v.display.$setMatrix(u);
                            if (this._batchEnabled && m && v.displayConfig) {
                                var P = v.display.$renderNode.matrix;
                                h.x = 0,
                                h.y = 0,
                                h.width = v.displayConfig.texture.textureWidth,
                                h.height = v.displayConfig.texture.textureHeight,
                                P.$transformBounds(h),
                                c ? (c = !1, this._cacheRectangle.x = h.x, this._cacheRectangle.width = h.x + h.width, this._cacheRectangle.y = h.y, this._cacheRectangle.height = h.y + h.height) : (this._cacheRectangle.x = Math.min(this._cacheRectangle.x, h.x), this._cacheRectangle.width = Math.max(this._cacheRectangle.width, h.x + h.width), this._cacheRectangle.y = Math.min(this._cacheRectangle.y, h.y), this._cacheRectangle.height = Math.max(this._cacheRectangle.height, h.y + h.height))
                            }
                        } else - 1 !== v.displayIndex && (v.displayIndex = -1, this._updateSlotDisplay(v))
                    }
                    this._cacheRectangle && (p && m && c && d && (this._cacheRectangle.x = d.x, this._cacheRectangle.y = d.y, this._cacheRectangle.width = d.width, this._cacheRectangle.height = d.height), t.isV5 || this.$invalidateContentBounds())
                }
                if (this._isCompleted && (this._isPlaying = !1), !this._isStarted && (this._isStarted = !0, this.hasEventListener(f.START))) {
                    var E = egret.Event.create(f, f.START);
                    E.movie = this,
                    E.clipName = this._clipConfig.name,
                    E.name = "",
                    E.slotName = "",
                    this.dispatchEvent(E)
                }
                this._isReversing = this._currentTime > r && this._currentPlayTimes === n,
                this._currentTime = r;
                var S = this._clipConfig.frame ? this._clipConfig.frame.length: 0;
                if (S > 0) {
                    var M = Math.floor(this._currentTime * this._config.frameRate),
                    B = this._groupConfig.frame[this._clipConfig.frame[M]];
                    if (this._currentFrameConfig !== B) if (S > 1) {
                        var C = this._currentFrameConfig;
                        if (this._currentFrameConfig = B, !C) {
                            var w = Math.floor(this._currentTime * this._config.frameRate);
                            C = this._groupConfig.frame[this._clipConfig.frame[w]],
                            this._isReversing || (this._currentTime <= C.position || this._currentPlayTimes !== n) && (C = this._groupConfig.frame[C.prev])
                        }
                        if (this._isReversing) for (; C !== B;) this._onCrossFrame(C),
                        C = this._groupConfig.frame[C.prev];
                        else for (; C !== B;) C = this._groupConfig.frame[C.next],
                        this._onCrossFrame(C)
                    } else this._currentFrameConfig = B,
                    this._currentFrameConfig && this._onCrossFrame(this._currentFrameConfig)
                }
                if (this._currentPlayTimes !== n) {
                    if (this._currentPlayTimes = n, this.hasEventListener(f.LOOP_COMPLETE)) {
                        var I = egret.Event.create(f, f.LOOP_COMPLETE);
                        I.movie = this,
                        I.clipName = this._clipConfig.name,
                        I.name = "",
                        I.slotName = "",
                        this.dispatchEvent(I),
                        egret.Event.release(I)
                    }
                    if (this._isCompleted && this.hasEventListener(f.COMPLETE)) {
                        var F = egret.Event.create(f, f.COMPLETE);
                        F.movie = this,
                        F.clipName = this._clipConfig.name,
                        F.name = "",
                        F.slotName = "",
                        this.dispatchEvent(F),
                        egret.Event.release(F)
                    }
                }
            }
            this._isLockDispose = !1,
            this._isDelayDispose && this.dispose()
        },
        a.prototype.play = function(t, e) {
            if (void 0 === t && (t = null), void 0 === e && (e = -1), t) {
                for (var a = null,
                i = 0,
                r = this._config.clip.length; r > i; ++i) {
                    var n = this._config.clip[i];
                    n.name === t && (a = n)
                }
                a ? (this._clipConfig = a, this._clipArray = new Int16Array(this._groupConfig.arrayBuffer, this._groupConfig.offset + this._groupConfig.position[0] + this._clipConfig.p, this._clipConfig.s / this._groupConfig.position[2]), this._clipConfig.cacheRectangles || (this._clipConfig.cacheRectangles = []), this._isPlaying = !0, this._isStarted = !1, this._isCompleted = !1, 0 > e || e !== e ? this._playTimes = this._clipConfig.playTimes: this._playTimes = e, this._time = 0, this._currentTime = 0, this._currentPlayTimes = 0, this._cacheFrameIndex = -1, this._currentFrameConfig = null, this._cacheRectangle = null, this.clipTimeScale = 1 / this._clipConfig.scale) : console.warn("No clip in movie.", this._config.name, t)
            } else this._clipConfig ? this._isPlaying || this._isCompleted ? this.play(this._clipConfig.name, this._playTimes) : this._isPlaying = !0 : this._config.action && this.play(this._config.action, e)
        },
        a.prototype.stop = function() {
            this._isPlaying = !1
        },
        a.prototype.gotoAndPlay = function(t, e, a) {
            void 0 === t && (t = null),
            void 0 === a && (a = -1),
            e %= this._clipConfig.duration,
            0 > e && (e += this._clipConfig.duration),
            this.play(t, a),
            this._time = e,
            this._currentTime = e
        },
        a.prototype.gotoAndStop = function(t, e) {
            void 0 === t && (t = null),
            e %= this._clipConfig.duration,
            0 > e && (e += this._clipConfig.duration),
            this.play(t, 1),
            this._time = e,
            this._currentTime = e,
            this.advanceTime(.001),
            this.stop()
        },
        a.prototype.hasClip = function(t) {
            for (var e = 0,
            a = this._config.clip.length; a > e; ++e) {
                var i = this._config.clip[e];
                if (i.name === t) return ! 0
            }
            return ! 1
        },
        Object.defineProperty(a.prototype, "isPlaying", {
            get: function() {
                return this._isPlaying && !this._isCompleted
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "isComplete", {
            get: function() {
                return this._isCompleted
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "currentTime", {
            get: function() {
                return this._currentTime
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "totalTime", {
            get: function() {
                return this._clipConfig ? this._clipConfig.duration: 0
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "currentPlayTimes", {
            get: function() {
                return this._currentPlayTimes
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "playTimes", {
            get: function() {
                return this._playTimes
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "groupName", {
            get: function() {
                return this._groupConfig.name
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "clipName", {
            get: function() {
                return this._clipConfig ? this._clipConfig.name: ""
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "clipNames", {
            get: function() {
                return this._clipNames
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "clock", {
            get: function() {
                return this._clock
            },
            set: function(t) {
                if (this._clock !== t) {
                    var e = this._clock;
                    e && e.remove(this),
                    this._clock = t,
                    this._clock && this._clock.add(this)
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.advanceTimeBySelf = function(e) {
            e ? this.clock = t.EgretFactory.clock: this.clock = null
        },
        Object.defineProperty(a.prototype, "display", {
            get: function() {
                return this
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animation", {
            get: function() {
                return this
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "armature", {
            get: function() {
                return this
            },
            enumerable: !0,
            configurable: !0
        }),
        a.prototype.getAnimation = function() {
            return this
        },
        a.prototype.getArmature = function() {
            return this
        },
        a.prototype.getDisplay = function() {
            return this
        },
        a.prototype.hasAnimation = function(t) {
            return this.hasClip(t)
        },
        a.prototype.invalidUpdate = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
        },
        Object.defineProperty(a.prototype, "lastAnimationName", {
            get: function() {
                return this.clipName
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animationNames", {
            get: function() {
                return this.clipNames
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "animationList", {
            get: function() {
                return this.clipNames
            },
            enumerable: !0,
            configurable: !0
        }),
        a
    } (egret.DisplayObjectContainer);
    t.Movie = p
} (dragonBones || (dragonBones = {}));
var __reflect = this && this.__reflect ||
function(t, e, a) {
    t.__class__ = e,
    a ? a.push(e) : a = [e],
    t.__types__ = t.__types__ ? a.concat(t.__types__) : a
},
__extends = this && this.__extends ||
function(t, e) {
    function a() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a)
},
one; !
function(t) {
    var e = function(t) {
        function e(e, a, i) {
            var r = t.call(this) || this;
            return r.count = 0,
            r.isStop = !1,
            r.stopTime = 0,
            r.timescale = 1,
            r.change(e, a, i),
            r.addEventListener(egret.Event.ADDED_TO_STAGE, r.onAddTo, r),
            r.addEventListener(egret.Event.REMOVED_FROM_STAGE, r.onRmoveFrom, r),
            r
        }
        return __extends(e, t),
        e.setSpeedScale = function(t) {
            this.speed = t
        },
        e.destroy = function(t) {
            delete this.ArmatureData[t],
            delete this.Factories[t]
        },
        e.prototype.change = function(t, e, a) {
            this.key = t,
            this.arName = e,
            this.skinName = a,
            this.destroy(),
            "" != t && (this.count++, this.load(t, e, this.count))
        },
        e.prototype.load = function(t, e, a) {
            var i = this,
            r = !1,
            n = !1,
            s = !1;
            RES.getResAsync(t + "_ske_json",
            function() {
                s && n && i.createMovie(t, e, a),
                r = !0
            },
            this),
            RES.getResAsync(t + "_tex_json",
            function() {
                s && r && i.createMovie(t, e, a),
                n = !0
            },
            this),
            RES.getResAsync(t + "_tex_png",
            function() {
                r && n && i.createMovie(t, e, a),
                s = !0
            },
            this)
        },
        e.prototype.createMovie = function(t, a, i) {
            if (this.count == i) {
                if (null == e.Factories[t]) {
                    var r = new dragonBones.EgretFactory;
                    e.ArmatureData[t] = r.parseDragonBonesData(RES.getRes(t + "_ske_json")),
                    r.parseTextureAtlasData(RES.getRes(t + "_tex_json"), RES.getRes(t + "_tex_png")),
                    e.Factories[t] = r
                }
                null != this.stage && (this.ar = e.Factories[t].buildArmatureDisplay(a, void 0, this.skinName), this.addChild(this.ar), this.ar.animation.timeScale = this.timescale * e.speed, this.frame && (this.isStop ? this.stopTime >= 0 ? this.ar.animation.gotoAndStopByTime(this.frame, this.stopTime) : this.ar.animation.stop() : this.ar.animation.play(this.frame, this.playTimes)), this.addListeners(), this.dispatchEventWith(e.LOAD_COMPLETE))
            }
        },
        e.prototype.onAddTo = function(t) {
            this.addListeners()
        },
        e.prototype.onRmoveFrom = function(t) {
            t.currentTarget == t.target && this.destroy()
        },
        e.prototype.addListeners = function() {
            this.ar && (this.ar.removeEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onListener, this), this.ar.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.onListener, this), this.ar.addEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onListener, this), this.ar.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onListener, this), this.ar.addEventListener(dragonBones.AnimationEvent.ANIMATION_FRAME_EVENT, this.onListener, this))
        },
        e.prototype.onListener = function(t) {
            t.type == dragonBones.AnimationEvent.LOOP_COMPLETE && this.dispatchEventWith(e.LOOP_COMPLETE),
            t.type == dragonBones.AnimationEvent.COMPLETE ? this.dispatchEventWith(e.COMPLETE) : t.type == dragonBones.AnimationEvent.ANIMATION_FRAME_EVENT && this.dispatchEventWith(e.ANIMATION_FRAME_EVENT, !1, {
                frameLabel: t.frameLabel
            })
        },
        e.prototype.destroy = function() {
            this.ar && (this.ar.removeEventListener(dragonBones.AnimationEvent.LOOP_COMPLETE, this.onListener, this), this.ar.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.onListener, this), this.ar.removeEventListener(dragonBones.AnimationEvent.ANIMATION_FRAME_EVENT, this.onListener, this), this.ar.parent.removeChild(this.ar), this.ar.armature.clock = null, this.ar.dispose(!0), this.ar = null)
        },
        e.prototype.play = function(t, e, a) {
            void 0 === a && (a = 0),
            this.frame = t,
            this.playTimes = e,
            this.isStop = !1,
            this.ar && (0 == a ? this.ar.animation.play(t, e) : this.ar.animation.gotoAndPlay(t, 0, a, e))
        },
        e.prototype.stop = function(t) {
            this.isStop = !0,
            this.stopTime = t,
            this.ar && (t >= 0 ? this.ar.animation.gotoAndStopByTime(this.frame, this.stopTime) : this.ar.animation.stop(this.frame))
        },
        e.prototype.setScale = function(t) {
            this.timescale = t,
            this.ar && this.ar.animation && (this.ar.animation.timeScale = t * e.speed)
        },
        e.prototype.changeSlot = function(t, a, i, r, n) {
            var s = e.Factories[t];
            if (s && this.ar) {
                var o = this.ar.armature.getSlot(n);
                return o && (r ? (o.visible = !0, o.displayIndex = 0, s.replaceSlotDisplay(t, a, i, r, o)) : o.visible = !1),
                !0
            }
            return ! 1
        },
        e.prototype.changeSlotByDisplay = function(t, e) {
            if (this.ar && this.ar.armature) {
                var a = this.ar.armature.getSlot(t);
                a && (a.display = e)
            }
        },
        e
    } (egret.DisplayObjectContainer);
    e.Factories = {},
    e.ArmatureData = {},
    e.LOAD_COMPLETE = "onLoadComplete",
    e.LOOP_COMPLETE = "onLoopComplete",
    e.COMPLETE = "onComplete",
    e.ANIMATION_FRAME_EVENT = "onANIMATION_FRAME_EVENT",
    e.speed = 1,
    t.DynamicDB = e,
    __reflect(e.prototype, "one.DynamicDB")
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, r, h) {
    t.__class__ = r,
    h ? h.push(r) : h = [r],
    t.__types__ = t.__types__ ? h.concat(t.__types__) : h
},
md5 = function() {
    function t() {
        this.hexcase = 0,
        this.b64pad = ""
    }
    return t.prototype.hex_md5 = function(t) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)))
    },
    t.prototype.b64_md5 = function(t) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)))
    },
    t.prototype.any_md5 = function(t, r) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), r)
    },
    t.prototype.hex_hmac_md5 = function(t, r) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(r)))
    },
    t.prototype.b64_hmac_md5 = function(t, r) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(r)))
    },
    t.prototype.any_hmac_md5 = function(t, r, h) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(r)), h)
    },
    t.prototype.md5_vm_test = function() {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase()
    },
    t.prototype.rstr_md5 = function(t) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length))
    },
    t.prototype.rstr_hmac_md5 = function(t, r) {
        var h = this.rstr2binl(t);
        h.length > 16 && (h = this.binl_md5(h, 8 * t.length));
        for (var i = Array(16), s = Array(16), _ = 0; 16 > _; _++) i[_] = 909522486 ^ h[_],
        s[_] = 1549556828 ^ h[_];
        var d = this.binl_md5(i.concat(this.rstr2binl(r)), 512 + 8 * r.length);
        return this.binl2rstr(this.binl_md5(s.concat(d), 640))
    },
    t.prototype.rstr2hex = function(t) {
        try {
            this.hexcase
        } catch(r) {
            this.hexcase = 0
        }
        for (var h, i = this.hexcase ? "0123456789ABCDEF": "0123456789abcdef", s = "", _ = 0; _ < t.length; _++) h = t.charCodeAt(_),
        s += i.charAt(h >>> 4 & 15) + i.charAt(15 & h);
        return s
    },
    t.prototype.rstr2b64 = function(t) {
        try {
            this.b64pad
        } catch(r) {
            this.b64pad = ""
        }
        for (var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = "",
        s = t.length,
        _ = 0; s > _; _ += 3) for (var d = t.charCodeAt(_) << 16 | (s > _ + 1 ? t.charCodeAt(_ + 1) << 8 : 0) | (s > _ + 2 ? t.charCodeAt(_ + 2) : 0), n = 0; 4 > n; n++) i += 8 * _ + 6 * n > 8 * t.length ? this.b64pad: h.charAt(d >>> 6 * (3 - n) & 63);
        return i
    },
    t.prototype.rstr2any = function(t, r) {
        var h, i, s, _, d, n = r.length,
        e = Array(Math.ceil(t.length / 2));
        for (h = 0; h < e.length; h++) e[h] = t.charCodeAt(2 * h) << 8 | t.charCodeAt(2 * h + 1);
        var o = Math.ceil(8 * t.length / (Math.log(r.length) / Math.log(2))),
        m = Array(o);
        for (i = 0; o > i; i++) {
            for (d = Array(), _ = 0, h = 0; h < e.length; h++) _ = (_ << 16) + e[h],
            s = Math.floor(_ / n),
            _ -= s * n,
            (d.length > 0 || s > 0) && (d[d.length] = s);
            m[i] = _,
            e = d
        }
        var f = "";
        for (h = m.length - 1; h >= 0; h--) f += r.charAt(m[h]);
        return f
    },
    t.prototype.str2rstr_utf8 = function(t) {
        for (var r, h, i = "",
        s = -1; ++s < t.length;) r = t.charCodeAt(s),
        h = s + 1 < t.length ? t.charCodeAt(s + 1) : 0,
        r >= 55296 && 56319 >= r && h >= 56320 && 57343 >= h && (r = 65536 + ((1023 & r) << 10) + (1023 & h), s++),
        127 >= r ? i += String.fromCharCode(r) : 2047 >= r ? i += String.fromCharCode(192 | r >>> 6 & 31, 128 | 63 & r) : 65535 >= r ? i += String.fromCharCode(224 | r >>> 12 & 15, 128 | r >>> 6 & 63, 128 | 63 & r) : 2097151 >= r && (i += String.fromCharCode(240 | r >>> 18 & 7, 128 | r >>> 12 & 63, 128 | r >>> 6 & 63, 128 | 63 & r));
        return i
    },
    t.prototype.str2rstr_utf16le = function(t) {
        for (var r = "",
        h = 0; h < t.length; h++) r += String.fromCharCode(255 & t.charCodeAt(h), t.charCodeAt(h) >>> 8 & 255);
        return r
    },
    t.prototype.str2rstr_utf16be = function(t) {
        for (var r = "",
        h = 0; h < t.length; h++) r += String.fromCharCode(t.charCodeAt(h) >>> 8 & 255, 255 & t.charCodeAt(h));
        return r
    },
    t.prototype.rstr2binl = function(t) {
        for (var r = Array(t.length >> 2), h = 0; h < r.length; h++) r[h] = 0;
        for (var h = 0; h < 8 * t.length; h += 8) r[h >> 5] |= (255 & t.charCodeAt(h / 8)) << h % 32;
        return r
    },
    t.prototype.binl2rstr = function(t) {
        for (var r = "",
        h = 0; h < 32 * t.length; h += 8) r += String.fromCharCode(t[h >> 5] >>> h % 32 & 255);
        return r
    },
    t.prototype.binl_md5 = function(t, r) {
        t[r >> 5] |= 128 << r % 32,
        t[(r + 64 >>> 9 << 4) + 14] = r;
        for (var h = 1732584193,
        i = -271733879,
        s = -1732584194,
        _ = 271733878,
        d = 0; d < t.length; d += 16) {
            var n = h,
            e = i,
            o = s,
            m = _;
            h = this.md5_ff(h, i, s, _, t[d + 0], 7, -680876936),
            _ = this.md5_ff(_, h, i, s, t[d + 1], 12, -389564586),
            s = this.md5_ff(s, _, h, i, t[d + 2], 17, 606105819),
            i = this.md5_ff(i, s, _, h, t[d + 3], 22, -1044525330),
            h = this.md5_ff(h, i, s, _, t[d + 4], 7, -176418897),
            _ = this.md5_ff(_, h, i, s, t[d + 5], 12, 1200080426),
            s = this.md5_ff(s, _, h, i, t[d + 6], 17, -1473231341),
            i = this.md5_ff(i, s, _, h, t[d + 7], 22, -45705983),
            h = this.md5_ff(h, i, s, _, t[d + 8], 7, 1770035416),
            _ = this.md5_ff(_, h, i, s, t[d + 9], 12, -1958414417),
            s = this.md5_ff(s, _, h, i, t[d + 10], 17, -42063),
            i = this.md5_ff(i, s, _, h, t[d + 11], 22, -1990404162),
            h = this.md5_ff(h, i, s, _, t[d + 12], 7, 1804603682),
            _ = this.md5_ff(_, h, i, s, t[d + 13], 12, -40341101),
            s = this.md5_ff(s, _, h, i, t[d + 14], 17, -1502002290),
            i = this.md5_ff(i, s, _, h, t[d + 15], 22, 1236535329),
            h = this.md5_gg(h, i, s, _, t[d + 1], 5, -165796510),
            _ = this.md5_gg(_, h, i, s, t[d + 6], 9, -1069501632),
            s = this.md5_gg(s, _, h, i, t[d + 11], 14, 643717713),
            i = this.md5_gg(i, s, _, h, t[d + 0], 20, -373897302),
            h = this.md5_gg(h, i, s, _, t[d + 5], 5, -701558691),
            _ = this.md5_gg(_, h, i, s, t[d + 10], 9, 38016083),
            s = this.md5_gg(s, _, h, i, t[d + 15], 14, -660478335),
            i = this.md5_gg(i, s, _, h, t[d + 4], 20, -405537848),
            h = this.md5_gg(h, i, s, _, t[d + 9], 5, 568446438),
            _ = this.md5_gg(_, h, i, s, t[d + 14], 9, -1019803690),
            s = this.md5_gg(s, _, h, i, t[d + 3], 14, -187363961),
            i = this.md5_gg(i, s, _, h, t[d + 8], 20, 1163531501),
            h = this.md5_gg(h, i, s, _, t[d + 13], 5, -1444681467),
            _ = this.md5_gg(_, h, i, s, t[d + 2], 9, -51403784),
            s = this.md5_gg(s, _, h, i, t[d + 7], 14, 1735328473),
            i = this.md5_gg(i, s, _, h, t[d + 12], 20, -1926607734),
            h = this.md5_hh(h, i, s, _, t[d + 5], 4, -378558),
            _ = this.md5_hh(_, h, i, s, t[d + 8], 11, -2022574463),
            s = this.md5_hh(s, _, h, i, t[d + 11], 16, 1839030562),
            i = this.md5_hh(i, s, _, h, t[d + 14], 23, -35309556),
            h = this.md5_hh(h, i, s, _, t[d + 1], 4, -1530992060),
            _ = this.md5_hh(_, h, i, s, t[d + 4], 11, 1272893353),
            s = this.md5_hh(s, _, h, i, t[d + 7], 16, -155497632),
            i = this.md5_hh(i, s, _, h, t[d + 10], 23, -1094730640),
            h = this.md5_hh(h, i, s, _, t[d + 13], 4, 681279174),
            _ = this.md5_hh(_, h, i, s, t[d + 0], 11, -358537222),
            s = this.md5_hh(s, _, h, i, t[d + 3], 16, -722521979),
            i = this.md5_hh(i, s, _, h, t[d + 6], 23, 76029189),
            h = this.md5_hh(h, i, s, _, t[d + 9], 4, -640364487),
            _ = this.md5_hh(_, h, i, s, t[d + 12], 11, -421815835),
            s = this.md5_hh(s, _, h, i, t[d + 15], 16, 530742520),
            i = this.md5_hh(i, s, _, h, t[d + 2], 23, -995338651),
            h = this.md5_ii(h, i, s, _, t[d + 0], 6, -198630844),
            _ = this.md5_ii(_, h, i, s, t[d + 7], 10, 1126891415),
            s = this.md5_ii(s, _, h, i, t[d + 14], 15, -1416354905),
            i = this.md5_ii(i, s, _, h, t[d + 5], 21, -57434055),
            h = this.md5_ii(h, i, s, _, t[d + 12], 6, 1700485571),
            _ = this.md5_ii(_, h, i, s, t[d + 3], 10, -1894986606),
            s = this.md5_ii(s, _, h, i, t[d + 10], 15, -1051523),
            i = this.md5_ii(i, s, _, h, t[d + 1], 21, -2054922799),
            h = this.md5_ii(h, i, s, _, t[d + 8], 6, 1873313359),
            _ = this.md5_ii(_, h, i, s, t[d + 15], 10, -30611744),
            s = this.md5_ii(s, _, h, i, t[d + 6], 15, -1560198380),
            i = this.md5_ii(i, s, _, h, t[d + 13], 21, 1309151649),
            h = this.md5_ii(h, i, s, _, t[d + 4], 6, -145523070),
            _ = this.md5_ii(_, h, i, s, t[d + 11], 10, -1120210379),
            s = this.md5_ii(s, _, h, i, t[d + 2], 15, 718787259),
            i = this.md5_ii(i, s, _, h, t[d + 9], 21, -343485551),
            h = this.safe_add(h, n),
            i = this.safe_add(i, e),
            s = this.safe_add(s, o),
            _ = this.safe_add(_, m)
        }
        return [h, i, s, _]
    },
    t.prototype.md5_cmn = function(t, r, h, i, s, _) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(r, t), this.safe_add(i, _)), s), h)
    },
    t.prototype.md5_ff = function(t, r, h, i, s, _, d) {
        return this.md5_cmn(r & h | ~r & i, t, r, s, _, d)
    },
    t.prototype.md5_gg = function(t, r, h, i, s, _, d) {
        return this.md5_cmn(r & i | h & ~i, t, r, s, _, d)
    },
    t.prototype.md5_hh = function(t, r, h, i, s, _, d) {
        return this.md5_cmn(r ^ h ^ i, t, r, s, _, d)
    },
    t.prototype.md5_ii = function(t, r, h, i, s, _, d) {
        return this.md5_cmn(h ^ (r | ~i), t, r, s, _, d)
    },
    t.prototype.safe_add = function(t, r) {
        var h = (65535 & t) + (65535 & r),
        i = (t >> 16) + (r >> 16) + (h >> 16);
        return i << 16 | 65535 & h
    },
    t.prototype.bit_rol = function(t, r) {
        return t << r | t >>> 32 - r
    },
    t
} ();
__reflect(md5.prototype, "md5");
var __extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two_pk; !
function(t) {
    function e() {
        return {
            type: n.NONE,
            value: {
                value: 0,
                cardID: 0
            }
        }
    }
    var n; !
    function(t) {
        t[t.NONE = 0] = "NONE",
        t[t.SINGLE = 1] = "SINGLE",
        t[t.LINE = 2] = "LINE",
        t[t.THREE_APP = 3] = "THREE_APP",
        t[t.FOUR_APP = 4] = "FOUR_APP",
        t[t.THREE_APP_LINE = 5] = "THREE_APP_LINE",
        t[t.BOMB_ONE = 6] = "BOMB_ONE",
        t[t.BOMB = 7] = "BOMB",
        t[t.Flower_BOMB = 8] = "Flower_BOMB",
        t[t.MAX_BOMB = 9] = "MAX_BOMB"
    } (n = t.ChuType || (t.ChuType = {})),
    t.getNone = e;
    var r = function() {
        function e() {}
        return e.prototype.getStyle = function(t, e, n, r) {
            throw new Error("需要重写此方法")
        },
        e.prototype.getSameTypeCards = function(t, e, n, r) {
            throw new Error("需要重写此方法")
        },
        e.prototype.getDiffTypeCards = function(t, e, n) {
            throw new Error("需要重写此方法")
        },
        e.prototype.getValueCardIDs = function(e) {
            function n(t, e) {
                null == r[e] && (r[e] = []),
                r[e].push(t)
            }
            for (var r = {},
            u = 0; u < e.length; u++) {
                var a = e[u] % 20;
                n(e[u], a),
                1 == a ? n(e[u], 14) : a == t.StyleChain.zhuID && n(e[u], 15)
            }
            return r
        },
        e
    } ();
    t.BaseStyle = r
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    function e(e, n) {
        if (void 0 === n && (n = 0), e[e.length - 1] >= 15) return 0;
        if (!t.StyleChain.Can_Zhu_In_Line && e.indexOf(t.StyleChain.zhuID) >= 0) return 0;
        var r = e.length + n;
        return 1 == e.length ? 1 == e[0] ? 15 - r: Math.min(15 - r, e[0]) : 1 == e[0] && e[1] >= 15 - r ? 15 - r: e[e.length - 1] - e[0] <= r - 1 ? Math.min(15 - r, e[0]) : 0
    }
    var n = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.minLength = t.minLength,
            n.maxLength = t.maxLength,
            n.count = t.count,
            n
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            if (e.length % this.count != 0) return null;
            var a = e.length / this.count;
            if (a < this.minLength || a > this.maxLength) return null;
            var o = [];
            for (var l in u.counts) {
                var h = parseInt(l),
                i = u.counts[l];
                if (i <= this.count) r -= this.count - i,
                o.push(h);
                else if (i > this.count) return null
            }
            if (0 > r) return null;
            if (r % this.count != 0) return null;
            var s = t.checkLine(o, r / this.count);
            return 0 >= s ? null: this.getValue(s, a)
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            return this.count != r.count ? [] : t.getLineCardIDs(n, r.length, this.count, u, r.value + 1)
        },
        n.prototype.getDiffTypeCards = function(t, e, n) {
            return []
        },
        n.prototype.getValue = function(e, n) {
            return {
                type: t.ChuType.LINE,
                value: {
                    value: e,
                    cardID: e,
                    count: this.count,
                    length: n
                }
            }
        },
        n
    } (t.BaseStyle);
    t.LineStyle = n,
    t.checkLine = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    function e(t, e, n, r, u) {
        for (var a = [], o = u; 14 - e + 1 >= o; o++) {
            for (var l = 0,
            h = 0; e > h; h++) {
                var i = t[o + h] ? t[o + h].length: 0;
                if (n > i && (l += n - i, l > r.length)) break
            }
            if (l <= r.length) {
                for (var s = [], p = 0, f = 0; e > f; f++) for (var c = 0; n > c; c++) t[o + f] && t[o + f].length > c ? s.push(t[o + f][c]) : (s.push(r[p]), p++);
                a.push(s)
            }
        }
        return a
    }
    function n(e, n, u, a, o) {
        for (var l = [], h = [], i = a; 17 >= i; i++) if (1 != i && i != t.StyleChain.zhuID) {
            var s = e[i];
            null != s && 0 != s.length && (o && s.length >= 4 || (15 >= i ? (s.length + u.length == n && h.push(r(e, i, n, u)), s.length + u.length > n && l.push(r(e, i, n, u))) : (s.length == n && h.push(r(e, i, n, u)), s.length > n && l.push(r(e, i, n, u)))))
        }
        return u.length >= n && (null == e[15] || 0 == e[15].length) && 15 > a && l.push(r(e, 15, n, u)),
        h.concat(l)
    }
    function r(t, e, n, r) {
        for (var u = [], a = 0, o = 0; n > o; o++) t[e] && t[e].length > o ? u.push(t[e][o]) : (u.push(r[a]), a++);
        return u
    }
    t.getLineCardIDs = e,
    t.getSingleCardIDs = n;
    var u = function() {
        function e() {}
        return e.getCards = function(e, n, r, u) {
            function a(t, e) {
                null == s[e] && (s[e] = []),
                s[e].push(t)
            }
            function o(t, e, r) {
                for (var u = [], a = i; 14 - t + 1 >= a; a++) {
                    for (var o = 0,
                    l = 0; t > l; l++) {
                        var h = s[a + l] ? s[a + l].length: 0;
                        if (e > h && (o += e - h, o > r)) break
                    }
                    if (r >= o) {
                        for (var p = [], f = 0; t > f; f++) for (var c = 0; e > c; c++) s[a + f] && s[a + f].length > c ? p.push(s[a + f][c]) : p.push(n + 20);
                        u.push(p)
                    }
                }
                return u
            }
            function l(t, e, r) {
                for (var u = [], a = 0; e > a; a++) s[t] && s[t].length > a ? u.push(s[t][a]) : u.push(n + 20);
                return u
            }
            function h(t, e, n, r) {
                for (var u = [], a = [], o = n; 17 >= o; o++) {
                    var h = s[o];
                    null != h && 0 != h.length && (r && h.length >= 4 || (15 >= o ? (h.length + e == t && a.push(l(o, t, e)), h.length + e > t && u.push(l(o, t, e))) : (h.length == t && a.push(l(o, t, e)), h.length > t && u.push(l(o, t, e)))))
                }
                return e >= t && (null == s[15] || 0 == s[15].length) && 15 > n && u.push(l(15, t, e)),
                a.concat(u)
            }
            for (var i = u.value.value + 1,
            s = {},
            p = 0; p < e.length; p++) {
                var f = e[p] % 20;
                if (1 == f) switch (a(e[p], 14), u.type) {
                case t.ChuType.LINE:
                    a(e[p], 1)
                } else if (f == n) switch (u.type) {
                case t.ChuType.SINGLE:
                case t.ChuType.THREE_APP:
                    a(e[p], 15);
                    break;
                case t.ChuType.LINE:
                    a(e[p], n)
                } else if (f >= 16) switch (u.type) {
                case t.ChuType.SINGLE:
                case t.ChuType.THREE_APP:
                    a(e[p], f)
                } else a(e[p], f)
            }
            if (u.type == t.ChuType.SINGLE) {
                var c = h(u.value.count, r.length, i, !0);
                return c
            }
            if (u.type == t.ChuType.LINE) {
                var c = o(u.value.length, u.value.count, r.length);
                return c
            }
            if (u.type == t.ChuType.THREE_APP) {
                for (var c = [], p = 0; p <= r.length; p++) {
                    var g = h(3, p, i, !0),
                    v = void 0;
                    v = 1 == u.value.count ? h(1, r.length - p, 2, !0) : h(2, r.length - p, 2, !0);
                    for (var y = 0; y < g.length; y++) for (var d = g[y].concat(), C = 0; C < v.length; C++) v[C][0] % 20 != g[y][0] % 20 && c.push(d.concat(v[C]))
                }
                return c
            }
            if (u.type == t.ChuType.THREE_APP_LINE) {
                for (var c = [], p = 0; p <= r.length; p++) {
                    var g = o(u.value.length, 3, p),
                    v = void 0;
                    v = 1 == u.value.count ? h(1, r.length - p, 2, !0) : h(2, r.length - p, 2, !0);
                    for (var y = 0; y < g.length; y++) for (var d = g[y].concat(), I = 0, C = 0; C < v.length; C++) if (v[C][0] % 20 != g[y][0] % 20 && (I++, I == u.value.length)) {
                        c.push(d.concat(v[C]));
                        break
                    }
                }
                return c
            }
            return []
        },
        e
    } ();
    t.CardUtils = u
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function(e) {
        function n() {
            return e.call(this, {
                minLength: 5,
                maxLength: 5,
                count: 1
            }) || this
        }
        return __extends(n, e),
        n.prototype.getStyle = function(n, r, u, a) {
            if (r.length + u != 5) return null;
            var o = e.prototype.getStyle.call(this, n, r, u, a);
            if (null == o) return null;
            if (o.type == t.ChuType.LINE) {
                for (var l = -1,
                h = 0; h < n.length; h++) {
                    var i = n[h] % 20;
                    if (r.indexOf(i) >= 0) if ( - 1 == l) l = (n[h] - i) / 20;
                    else if (l != (n[h] - i) / 20) {
                        l = -2;
                        break
                    }
                }
                if (l >= 0) return {
                    type: t.ChuType.Flower_BOMB,
                    value: {
                        value: o.value.value,
                        cardID: 20 * l + o.value.value,
                        length: 5
                    }
                }
            }
            return null
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            return t.BombUtils.getFlowerBombs(e, r.value + 1, u)
        },
        n.prototype.getDiffTypeCards = function(e, n, r) {
            if (n.type == t.ChuType.BOMB) {
                var u = n.value.length;
                if (u >= 6) return []
            }
            return t.BombUtils.getFlowerBombs(e, 1, r)
        },
        n
    } (t.LineStyle);
    t.FlowerBombStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.threeCardIDs = t.threeCardIDs,
            n.zhuID = t.zhuID,
            n
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            if (4 == e.length && u.cards[3] && 1 == u.cards[3].length) {
                var a = u.cards[3][0],
                o = this.threeCardIDs[a];
                if (null == o) return null;
                for (var l = 0; l < o.length; l++) if (e.indexOf(o[l]) < 0) return null;
                return {
                    type: t.ChuType.BOMB_ONE,
                    value: {
                        value: t.getValue(a, !0, this.zhuID),
                        cardID: a
                    }
                }
            }
            if (5 != e.length) return null;
            if (null == u.cards[4 - r] || 0 == u.cards[4 - r].length) return null;
            var h = u.cards[4 - r][0];
            return {
                type: t.ChuType.BOMB_ONE,
                value: {
                    cardID: h,
                    value: t.getValue(h, !0, this.zhuID)
                }
            }
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            var a = r.value,
            o = [];
            for (var l in this.threeCardIDs) n[l] && 3 == n[l].length && parseInt(l) > a && o.push(this.threeCardIDs[l].concat());
            var h = t.BombUtils.getBombs(e, this.zhuID, a + 1, 4, 4, u);
            o = o.concat(h);
            for (var i = [], s = 0; s < o.length; s++) {
                for (var p = o[s], f = t.clone(n), c = u.concat(), g = 0; g < p.length; g++) {
                    var v = c.indexOf(p[g]);
                    if (v >= 0) c.splice(v, 1);
                    else for (var y in f) {
                        var d = f[y],
                        C = d.indexOf(p[g]);
                        C >= 0 && d.splice(C, 1)
                    }
                }
                var I = t.getSingleCardIDs(f, 1, c, 1, !0);
                if (I.length > 0) for (var _ = 0; _ < I.length; _++) i.push(p.concat(I[_]))
            }
            return i
        },
        n.prototype.getDiffTypeCards = function(t, e, n) {
            return this.getSameTypeCards(t, this.getValueCardIDs(t), {
                value: 0,
                cardID: 0
            },
            n)
        },
        n
    } (t.BaseStyle);
    t.FourOneBombStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.appCount = t.count,
            n.zhuID = t.zhuID,
            n
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            if (n.length + r != 4 + 2 * this.appCount) return null;
            var a = 0,
            o = [];
            for (var l in u.cards) {
                a += u.cards[l].length;
                for (var h = 0; h < u.cards[l].length; h++) o.push({
                    cardID: u.cards[l][h],
                    length: parseInt(l)
                })
            }
            if (a > 3 || 1 == a) return null;
            var i = 0,
            s = o[0].length,
            p = o[1].length;
            if (2 == a) 4 >= s && p <= 2 * this.appCount && (i = o[0].cardID),
            4 >= p && s <= 2 * this.appCount && t.getValue(o[1].cardID, !0, this.zhuID) > t.getValue(i, !0, this.zhuID) && (i = o[1].cardID);
            else {
                var f = o[2].length;
                4 >= s && p <= this.appCount && f <= this.appCount && (i = o[0].cardID),
                4 >= p && s <= this.appCount && f <= this.appCount && t.getValue(o[1].cardID, !0, this.zhuID) > t.getValue(i, !0, this.zhuID) && (i = o[1].cardID),
                4 >= f && s <= this.appCount && p <= this.appCount && t.getValue(o[2].cardID, !0, this.zhuID) > t.getValue(i, !0, this.zhuID) && (i = o[2].cardID)
            }
            return 0 != i ? {
                type: t.ChuType.FOUR_APP,
                value: {
                    cardID: i,
                    value: t.getValue(i, !0, this.zhuID),
                    count: this.appCount
                }
            }: null
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            if (this.appCount != r.count) return [];
            for (var a = t.getSingleCardIDs(n, 4, u, r.value + 1, !1), o = [], l = 0; l < a.length; l++) {
                for (var h = a[l], i = t.clone(n), s = u.concat(), p = 0; p < h.length; p++) {
                    var f = s.indexOf(h[p]);
                    if (f >= 0) s.splice(f, 1);
                    else for (var c in i) {
                        var g = i[c],
                        v = g.indexOf(h[p]);
                        v >= 0 && g.splice(v, 1)
                    }
                }
                var y = t.getSingleCardIDs(i, this.appCount, s, 1, !0);
                if (y.length >= 2) {
                    for (var p = 0; 2 > p; p++) h = h.concat(y[p]);
                    o.push(h)
                }
            }
            return o
        },
        n.prototype.getDiffTypeCards = function(t, e, n) {
            return []
        },
        n
    } (t.BaseStyle);
    t.FourStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.zhuID = t.zhuID,
            n.minLength = t.minLength,
            n.maxLength = t.maxLength,
            n
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            return 1 != u.kinds ? null: 1 != u.cards[u.maxCount].length ? null: n.length + r < 4 ? null: {
                type: t.ChuType.BOMB,
                value: {
                    cardID: n[0],
                    value: t.getValue(n[0], !0, this.zhuID),
                    length: n.length + r
                }
            }
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            var a = r.length;
            return a > this.maxLength ? [] : t.BombUtils.getBombs(e, this.zhuID, r.value + 1, a, this.maxLength, u)
        },
        n.prototype.getDiffTypeCards = function(e, n, r) {
            return n.type == t.ChuType.Flower_BOMB ? 6 > this.maxLength ? [] : t.BombUtils.getBombs(e, this.zhuID, 1, 6, this.maxLength, r) : t.BombUtils.getBombs(e, this.zhuID, 1, this.minLength, this.maxLength, r)
        },
        n
    } (t.BaseStyle);
    t.BombStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function() {
        function e() {}
        return e.getBombs = function(n, r, u, a, o, l) {
            for (var h = [], i = {},
            s = 0; s < n.length; s++) {
                var p = e.getValue(n[s] % 20, r);
                15 >= p && (h.push(p), null == i[p] && (i[p] = []), i[p].push(n[s]))
            }
            for (var f = t.zhengli(h).cards, c = [], g = {},
            s = a; o >= s; s++) for (var v = 0; v <= l.length; v++) for (var y = f[s - v], d = 0; y && d < y.length; d++) if (s > a || y[d] >= u) {
                var C = y[d] % 20;
                if (c.indexOf(C) >= 0) continue;
                c.push(C),
                null == g[s] && (g[s] = []),
                g[s].indexOf(y[d]) < 0 && g[s].push(y[d])
            }
            var I = [];
            for (var _ in g) for (var B = parseInt(_), s = 0; s < g[_].length; s++) {
                var p = g[_][s],
                y = e.getCardIDs(i[p], B, l);
                I.push(y)
            }
            return n.length == t.maxBombCnt && 116 == n[0] && (2 == t.maxBombCnt ? I.push([116, 117]) : I.push([116, 116, 117, 117])),
            I
        },
        e.getValue = function(t, e) {
            var n = t;
            return 1 == t ? n = 14 : t == e && (n = 15),
            n
        },
        e.getCardID = function(t, e) {
            return 14 == t ? t = 1 : 15 == t && (t = e),
            t
        },
        e.getCardIDs = function(t, e, n) {
            for (var r = [], u = 0, a = 0; e > a; a++) if (t.length > 0 && a < t.length) r.push(t[a]);
            else {
                if (! (u < n.length)) return [];
                r.push(n[u]),
                u++
            }
            return r
        },
        e.getFlowerBombs = function(t, n, r) {
            for (var u = [[], [], [], []], a = 0; a < t.length; a++) if (0 == a || t[a] != t[a - 1]) {
                var o = Math.floor(t[a] / 20);
                4 > o && u[o].push(t[a] % 20)
            }
            for (var l = [], a = 0; a < u.length; a++) if (u[a].length > 0) for (var h = e.getFBombs(u[a], n, r.length), i = 0; i < h.length; i++) l.push(h[i] + 20 * a);
            for (var s = [], a = 0; a < l.length; a++) s.push(e.getFCardIDs(t, l[a], r));
            return s
        },
        e.getFBombs = function(t, e, n) {
            1 == t[0] && t.push(14);
            for (var r = [], u = 5 - n, a = !1, o = 0; o < t.length - u + 1; o++) if (t[o + u - 1] - t[o] <= 4 && t[o] >= e) {
                if (t[o] >= 10) {
                    if (a) break;
                    a = !0
                }
                r.push(t[o])
            }
            return r
        },
        e.getFCardIDs = function(t, e, n) {
            for (var r = 0,
            u = [], a = 0; 5 > a; a++) t.indexOf(e + a) >= 0 ? u.push(e + a) : (e + a) % 20 == 14 && t.indexOf(e + a - 13) >= 0 ? u.push(e + a - 13) : (r >= n.length, u.push(n[r]), r++);
            return u
        },
        e
    } ();
    t.BombUtils = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    t.maxBombCnt = 0;
    var e = function(e) {
        function n(n) {
            var r = e.call(this) || this;
            return r.count = n.count,
            t.maxBombCnt = r.count,
            r
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            if (e.length != this.count) return null;
            for (var a = 0; a < e.length; a++) if (e[a] < 116) return null;
            return {
                type: t.ChuType.MAX_BOMB,
                value: {
                    cardID: 116,
                    value: 16
                }
            }
        },
        n.prototype.getSameTypeCards = function(t, e, n, r) {
            return []
        },
        n.prototype.getDiffTypeCards = function(t, e, n) {
            return t.length >= this.count && 116 == t[t.length - this.count] ? 2 == this.count ? [[116, 117]] : [[116, 116, 117, 117]] : []
        },
        n
    } (t.BaseStyle);
    t.MaxBombStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.count = t.count,
            n.zhuID = t.zhuID,
            n
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            if (u.kinds > 1) return null;
            if (null == u.cards[this.count - r] || 1 != u.cards[this.count - r].length) return null;
            var a = n[0];
            return {
                type: t.ChuType.SINGLE,
                value: {
                    value: t.getValue(a, !0, this.zhuID),
                    cardID: a,
                    count: this.count
                }
            }
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            return this.count != r.count ? [] : t.getSingleCardIDs(n, this.count, u, r.value + 1, !0)
        },
        n.prototype.getDiffTypeCards = function(t, e, n) {
            return []
        },
        n
    } (t.BaseStyle);
    t.SingleStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function() {
        function e() {
            this.hasFlower = !1,
            this.styles = []
        }
        return e.prototype.initStyles = function(t, n, r) {
            void 0 === r && (r = !0),
            e.zhuID = t,
            e.guiCardIDs = n,
            e.Can_Zhu_In_Line = r
        },
        e.prototype.addType = function(e, n) {
            var r;
            switch (e) {
            case t.ChuType.SINGLE:
                r = this.addStyle(t.SingleStyle, n);
                break;
            case t.ChuType.LINE:
                r = this.addStyle(t.LineStyle, n);
                break;
            case t.ChuType.THREE_APP:
                r = this.addStyle(t.ThreeStyle, n);
                break;
            case t.ChuType.FOUR_APP:
                r = this.addStyle(t.FourStyle, n);
                break;
            case t.ChuType.THREE_APP_LINE:
                r = this.addStyle(t.ThreeLineStyle, n);
                break;
            case t.ChuType.BOMB_ONE:
                r = this.addStyle(t.FourOneBombStyle, n);
                break;
            case t.ChuType.BOMB:
                r = this.addStyle(t.BombStyle, n);
                break;
            case t.ChuType.Flower_BOMB:
                r = this.addStyle(t.FlowerBombStyle, n);
                break;
            case t.ChuType.MAX_BOMB:
                r = this.addStyle(t.MaxBombStyle, n);
                break;
            default:
                r = this.addStyle(t.SingleStyle, n)
            }
            this.styles.push({
                type: e,
                style: r
            })
        },
        e.prototype.addStyle = function(t, e) {
            var n = new t(e);
            return n
        },
        e.prototype.getCardStyle = function(n) {
            for (var r = [], u = 0, a = 0; a < n.length; a++) e.guiCardIDs.indexOf(n[a]) >= 0 ? u++:r.push(n[a] % 20);
            r.sort(function(t, e) {
                return t > e ? 1 : -1
            });
            for (var o = t.zhengli(r), a = 0; a < this.styles.length; a++) {
                var l = this.styles[a],
                h = l.style.getStyle(n, r, u, o);
                if (h) return h
            }
            return {
                type: t.ChuType.NONE,
                value: {
                    value: 0,
                    cardID: 0
                }
            }
        },
        e.prototype.getSuggestCards = function(n, r, u) {
            function a(t) {
                for (var e = 0; e < t.length; e++) s.push(t[e])
            }
            if (void 0 === u && (u = !0), r.type == t.ChuType.MAX_BOMB) return [];
            for (var o = [], l = [], h = 0; h < n.length; h++) e.guiCardIDs.indexOf(n[h]) >= 0 ? l.push(n[h]) : o.push(n[h]);
            o.sort(function(t, e) {
                return t > e ? 1 : -1
            });
            for (var i = this.getValueCardIDs(o), s = [], h = 0; h < this.styles.length; h++) {
                var p = this.styles[h];
                if (p.type == r.type) {
                    var f = p.style.getSameTypeCards(o, i, r.value, l);
                    a(f)
                }
            }
            if (u) for (var h = 0; h < this.styles.length; h++) {
                var p = this.styles[h];
                if (p.type != r.type) {
                    var f = p.style.getDiffTypeCards(o, r, l);
                    a(f)
                }
            }
            return s
        },
        e.prototype.getValueCardIDs = function(t) {
            function n(t, e) {
                null == r[e] && (r[e] = []),
                r[e].push(t)
            }
            for (var r = {},
            u = 0; u < t.length; u++) {
                var a = t[u] % 20;
                n(t[u], a),
                1 == a ? n(t[u], 14) : a == e.zhuID && n(t[u], 15)
            }
            return r
        },
        e
    } ();
    e.Can_Zhu_In_Line = !0,
    e.zhuID = 0,
    e.guiCardIDs = [],
    t.StyleChain = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.minLength = t.minLength,
            n.maxLength = t.maxLength,
            n.appCount = t.count,
            n
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            if (e.length % (3 + this.appCount) != 0) return null;
            var a = e.length / (3 + this.appCount);
            if (a < this.minLength || a > this.maxLength) return null;
            var o = n[n.length - 1],
            l = Math.min(15 - a, o),
            h = Math.max(1, n[0]);
            h = Math.min(h, l);
            for (var i = l; i >= h; i--) if (this.checkLine(i, a, u, r)) return {
                type: t.ChuType.THREE_APP_LINE,
                value: {
                    cardID: i,
                    value: i,
                    count: this.appCount,
                    length: a
                }
            };
            return null
        },
        n.prototype.checkLine = function(e, n, r, u) {
            if (!t.StyleChain.Can_Zhu_In_Line && t.StyleChain.zhuID >= e && t.StyleChain.zhuID <= e + n - 1) return ! 1;
            for (var a = 0; n > a; a++) {
                var o = e + a;
                if (14 == o && (o = 1), null == r.counts[o]) {
                    if (u -= 3, 0 > u) return ! 1
                } else if (r.counts[o] < 3 && (u -= 3 - r.counts[o], 0 > u)) return ! 1
            }
            var l = 0;
            for (var h in r.counts) {
                var o = parseInt(h);
                o >= e && e + n > o || e + n > 14 && 1 == o ? r.counts[h] > 3 && (l += Math.ceil((r.counts[h] - 3) / this.appCount)) : l += Math.ceil(r.counts[h] / this.appCount)
            }
            return n >= l
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            if (this.appCount != r.count) return [];
            for (var a = r.length,
            o = t.getLineCardIDs(n, a, 3, u, r.value + 1), l = [], h = 0; h < o.length; h++) {
                for (var i = o[h], s = t.clone(n), p = u.concat(), f = 0; f < i.length; f++) {
                    var c = p.indexOf(i[f]);
                    if (c >= 0) p.splice(c, 1);
                    else for (var g in s) {
                        var v = s[g],
                        y = v.indexOf(i[f]);
                        y >= 0 && v.splice(y, 1)
                    }
                }
                var d = t.getSingleCardIDs(s, this.appCount, p, 1, !0);
                if (d.length >= a) {
                    for (var f = 0; a > f; f++) i = i.concat(d[f]);
                    l.push(i)
                }
            }
            return l
        },
        n.prototype.getDiffTypeCards = function(t, e, n) {
            return []
        },
        n
    } (t.BaseStyle);
    t.ThreeLineStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    var e = function(e) {
        function n(t) {
            var n = e.call(this) || this;
            return n.appCount = t.count,
            n.zhuID = t.zhuID,
            n
        }
        return __extends(n, e),
        n.prototype.getStyle = function(e, n, r, u) {
            if (n.length + r != 3 + this.appCount) return null;
            var a = 0,
            o = [];
            for (var l in u.cards) {
                a += u.cards[l].length;
                for (var h = 0; h < u.cards[l].length; h++) o.push({
                    cardID: u.cards[l][h],
                    length: parseInt(l)
                })
            }
            if (2 != a) return null;
            var i = 0;
            return o[0].length <= 3 && o[1].length <= this.appCount && (i = o[0].cardID),
            o[1].length <= 3 && o[0].length <= this.appCount && t.getValue(o[1].cardID, !0, this.zhuID) > t.getValue(i, !0, this.zhuID) && (i = o[1].cardID),
            0 != i ? {
                type: t.ChuType.THREE_APP,
                value: {
                    cardID: i,
                    value: t.getValue(i, !0, this.zhuID),
                    count: this.appCount
                }
            }: null
        },
        n.prototype.getSameTypeCards = function(e, n, r, u) {
            if (this.appCount != r.count) return [];
            for (var a = t.getSingleCardIDs(n, 3, u, r.value + 1, !0), o = [], l = 0; l < a.length; l++) {
                for (var h = a[l], i = t.clone(n), s = u.concat(), p = 0; p < h.length; p++) {
                    var f = s.indexOf(h[p]);
                    if (f >= 0) s.splice(f, 1);
                    else for (var c in i) {
                        var g = i[c],
                        v = g.indexOf(h[p]);
                        v >= 0 && g.splice(v, 1)
                    }
                }
                var y = t.getSingleCardIDs(i, this.appCount, s, 1, !0);
                if (y.length > 0) for (var d = 0; d < y.length; d++) o.push(h.concat(y[d]))
            }
            return o
        },
        n.prototype.getDiffTypeCards = function(t, e, n) {
            return []
        },
        n
    } (t.BaseStyle);
    t.ThreeStyle = e
} (two_pk || (two_pk = {}));
var two_pk; !
function(t) {
    function e(t) {
        var n;
        if (t instanceof Array) n = [];
        else {
            if (! (t instanceof Object)) return t;
            n = {}
        }
        for (var r in t) t[r] instanceof Array ? n[r] = e(t[r]) : t[r] instanceof Object ? n[r] = e(t[r]) : n[r] = t[r];
        return n
    }
    function n(t) {
        for (var e = {},
        n = 0; n < t.length; n++) null == e[t[n]] && (e[t[n]] = 0),
        e[t[n]]++;
        var r = {},
        u = 0,
        a = 0;
        for (var o in e) {
            var l = parseInt(o),
            h = e[o];
            null == r[h] && (r[h] = [], a++),
            r[h].push(l),
            u = Math.max(u, h)
        }
        return {
            cards: r,
            maxCount: u,
            kinds: a,
            counts: e
        }
    }
    function r(t, e, n) {
        var r = t % 20;
        return e && 1 == r ? r = 14 : r == n && (r = 15),
        r
    }
    function u(t, e) {
        return 14 == t ? t = 1 : 15 == t && (t = e),
        t
    }
    function a(t, e, n, u) {
        return t = r(t, n, u),
        e = r(e, n, u),
        t == e ? 0 : e > t ? -1 : 1
    }
    function o(e, n) {
        if (e.type == n.type) {
            if (e.type != t.ChuType.BOMB && e.type != t.ChuType.BOMB_ONE) return e.value.value > n.value.value ? 1 : e.value.value == n.value.value ? 0 : -1;
            var r = e.value,
            u = n.value;
            if (e.type == t.ChuType.BOMB) {
                if (r.length > u.length) return 1;
                if (r.length < u.length) return - 1
            }
            return r.value > u.value ? 1 : r.value < u.value ? -1 : 0
        }
        if (e.type == t.ChuType.MAX_BOMB) return 1;
        if (n.type == t.ChuType.MAX_BOMB) return - 1;
        switch (e.type) {
        case t.ChuType.Flower_BOMB:
            return n.type == t.ChuType.BOMB && n.value.length > e.value.length ? -1 : 1;
        case t.ChuType.BOMB:
            return n.type == t.ChuType.Flower_BOMB ? e.value.length > n.value.length ? 1 : -1 : 1;
        case t.ChuType.BOMB_ONE:
            return 1;
        default:
            return n.type == t.ChuType.Flower_BOMB || n.type == t.ChuType.BOMB || n.type == t.ChuType.BOMB_ONE ? -1 : 0
        }
    }
    t.clone = e,
    t.zhengli = n,
    t.getValue = r,
    t.getCardID = u,
    t.compareCardID = a,
    t.compare = o
} (two_pk || (two_pk = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.__isAdded = !1,
            n.__isCreated = !1,
            n.__isFirstCreated = !0,
            n.addEventListener(egret.Event.ADDED_TO_STAGE,
            function(t) {
                t.target == t.currentTarget && (n.__isAdded = !0, n.__isCreated && n.addTo())
            },
            n),
            n
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !1, e.removed())
            },
            this),
            this.__isCreated = !0,
            this.__isAdded && this.addTo()
        },
        e.prototype.addTo = function() {
            this.__isFirstCreated && this.created(),
            this.added(),
            this.__isFirstCreated && this.createdEnd(),
            this.__isFirstCreated = !1
        },
        e.prototype.createdEnd = function() {},
        e.prototype.created = function() {},
        e.prototype.added = function() {},
        e.prototype.removed = function() {},
        e
    } (eui.Image);
    t.BaseImage = e,
    __reflect(e.prototype, "two.BaseImage")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.__isAdded = !1,
            e.__isCreated = !1,
            e.__isFirstCreated = !0,
            e.addEventListener(egret.Event.ADDED_TO_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !0, e.__isCreated && e.addTo())
            },
            e),
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !1, e.removed())
            },
            this),
            this.__isCreated = !0,
            this.__isAdded && this.addTo()
        },
        e.prototype.addTo = function() {
            this.__isFirstCreated && this.created(),
            this.__isFirstCreated = !1,
            this.added()
        },
        e.prototype.created = function() {},
        e.prototype.added = function() {},
        e.prototype.removed = function() {},
        e
    } (eui.ItemRenderer);
    t.BaseItemRenderer = e,
    __reflect(e.prototype, "two.BaseItemRenderer")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    var e = function() {
        function e() {
            this.position = 0,
            this._volume = 1,
            this.playCnt = 0,
            this.timeID = -1,
            this.duration = 0,
            this.interID = -1,
            this.isClosed = !1
        }
        return Object.defineProperty(e.prototype, "volume", {
            get: function() {
                return this._volume
            },
            set: function(t) {
                this._volume = t,
                this.bgChannel && (this.bgChannel.volume = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.playLastMusic = function() {
            this.play(this.bgName, this.startTime, this.playTimes, this.duration)
        },
        e.prototype.play = function(e, n, i, r) {
            var o = this;
            if (this.duration = r, e = t.getSoundKey(e), null != e) if (this.bgName == e && this.bgChannel) {
                this.bgChannel.position
            } else this.playCnt++,
            this.bgName = e,
            this.startTime = n,
            this.playTimes = i,
            this.isLoop = 0 >= i,
            t.clearTimeout(this.timeID),
            this.isClosed || (this.timeID = t.setTimeout(function() {
                o.next(o.startTime)
            },
            100))
        },
        e.prototype.next = function(e) {
            var n = this;
            if (this.bgChannel && (this.bgChannel.stop(), t.clearInterval(this.interID), this.bgChannel = null), this.isLoop || this.playTimes > 0) {
                var i = RES.getRes(this.bgName);
                if (null == i) {
                    var r = this.playCnt;
                    return void RES.getResAsync(this.bgName,
                    function() {
                        n.playCnt == r && n.next(e)
                    },
                    this)
                }
                try {
                    var o = this.bgChannel = i.play(e, 1);
                    o.volume = this._volume;
                    var s = function() {
                        t.clearInterval(n.interID),
                        n.playTimes--,
                        n.next(n.startTime)
                    };
                    o.once(egret.Event.SOUND_COMPLETE, s, o),
                    this.duration > 0 && (this.interID = t.setInterval(function() {
                        var t = n.bgChannel.position;
                        t >= n.duration && (o.removeEventListener(egret.Event.SOUND_COMPLETE, s, o), s())
                    },
                    30))
                } catch(a) {}
            }
        },
        e.prototype.close = function() {
            this.isClosed || (this.isClosed = !0, t.clearInterval(this.interID), this.bgChannel && (this.position = this.bgChannel.position, this.bgChannel.stop(), this.bgChannel = null))
        },
        e.prototype.open = function() {
            this.isClosed && (this.isClosed = !1, this.next(this.position), this.position = 0)
        },
        e.prototype.stopAll = function() {
            t.clearInterval(this.interID),
            this.bgChannel && (this.position = this.bgChannel.position, this.bgChannel.stop(), this.bgChannel = null)
        },
        e
    } ();
    t.MusicCtr = e,
    __reflect(e.prototype, "one.MusicCtr")
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.__isAdded = !1,
            e.__isCreated = !1,
            e.__isFirstCreated = !0,
            e.addEventListener(egret.Event.ADDED_TO_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !0, e.__isCreated && e.addTo())
            },
            e),
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !1, e.removed())
            },
            this),
            this.__isCreated = !0,
            this.__isAdded && this.addTo()
        },
        e.prototype.addTo = function() {
            this.__isFirstCreated && this.created(),
            this.__isFirstCreated = !1,
            this.added()
        },
        e.prototype.created = function() {},
        e.prototype.added = function() {},
        e.prototype.removed = function() {},
        e.prototype.refreshApi = function(t) {},
        e.prototype.refreshData = function(t, e) {},
        e
    } (eui.Group);
    t.BaseGroup = e,
    __reflect(e.prototype, "two.BaseGroup")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e(e) {
            var n = t.call(this) || this;
            return n._isClosed = !1,
            n.__isAdded = !1,
            n.__isCreated = !1,
            n.__isFirstCreated = !0,
            n.addEventListener(egret.Event.ADDED_TO_STAGE,
            function(t) {
                t.target == t.currentTarget && (n.__isAdded = !0, n.__isCreated && n.addTo())
            },
            n),
            e && (e.match(/Skin/) || (e += "Skin"), n.skinName = e),
            n
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "isClosed", {
            get: function() {
                return this._isClosed
            },
            set: function(t) {
                this._isClosed = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !1, e.removed())
            },
            this),
            this.__isCreated = !0,
            this.__isAdded && this.addTo()
        },
        e.prototype.addTo = function() {
            this.__isFirstCreated && this.created(),
            this.added(),
            this.__isFirstCreated && this.createdEnd(),
            this.__isFirstCreated = !1
        },
        e.prototype.createdEnd = function() {},
        e.prototype.created = function() {},
        e.prototype.added = function() {},
        e.prototype.removed = function() {},
        e.prototype.refreshApi = function(t) {},
        e.prototype.refreshData = function(t, e) {},
        e
    } (eui.Component);
    t.BaseComponent = e,
    __reflect(e.prototype, "two.BaseComponent", ["eui.UIComponent", "egret.DisplayObject"])
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    var e = function() {
        function e() {
            this._volume = 1,
            this.onceSounds = [],
            this.sounds = {},
            this.playCnt = 0,
            this.isClosed = !1
        }
        return Object.defineProperty(e.prototype, "volume", {
            get: function() {
                return this._volume
            },
            set: function(t) {
                this._volume = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.playSounds = function(n) {
            var i = this;
            if (0 != this._volume && !this.isClosed) {
                var r = this;
                if (this.onceSounds.length >= e.TOTAL) {
                    var o = this.onceSounds.shift();
                    o.stop()
                }
                var s = function() {
                    if (0 != i._volume) {
                        var e = n.shift(),
                        o = t.getSound(e);
                        if (null == o) return void(n.length > 0 && s());
                        var a = o.play(0, 1);
                        a.volume = i.volume,
                        i.onceSounds.push(a),
                        a.once(egret.Event.SOUND_COMPLETE,
                        function() {
                            var t = r.onceSounds.indexOf(a);
                            t >= 0 && r.onceSounds.splice(t, 1),
                            n.length > 0 && s()
                        },
                        a)
                    }
                };
                s()
            }
        },
        e.prototype.stop = function(t) {
            var e = this.sounds[t];
            if (e) {
                e.stop();
                var n = this.onceSounds.indexOf(e);
                n >= 0 && this.onceSounds.splice(n, 1),
                delete this.sounds[t]
            }
        },
        e.prototype.play = function(n, i, r) {
            var o = this;
            if (n = t.getSoundKey(n), 0 == this._volume) return - 1;
            if (this.isClosed) return - 1;
            if (this.onceSounds.length >= e.TOTAL) {
                var s = this.onceSounds.shift();
                s.stop()
            }
            var a = this;
            this.playCnt++;
            var h = RES.getRes(n);
            if (null == h) {
                var c = this.playCnt;
                return void RES.getResAsync(n,
                function() {
                    o.playCnt == c && o.play(n, i, r)
                },
                this)
            }
            try {
                var u = h.play(i, r);
                return u.volume = this._volume,
                u.once(egret.Event.SOUND_COMPLETE,
                function() {
                    var t = a.onceSounds.indexOf(u);
                    t >= 0 && a.onceSounds.splice(t, 1);
                    for (var e in a.sounds) if (a.sounds[e] == u) {
                        delete a.sounds[e];
                        break
                    }
                },
                u),
                this.onceSounds.push(u),
                e.SOUND_COUNT++,
                this.sounds[e.SOUND_COUNT] = u,
                e.SOUND_COUNT
            } catch(p) {
                return - 1
            }
        },
        e.prototype.close = function() {
            for (this.isClosed = !0; this.onceSounds.length;) {
                var t = this.onceSounds.shift();
                t.volume = 1,
                t.stop()
            }
            this.onceSounds.length = 0,
            this.sounds = {}
        },
        e.prototype.open = function() {
            this.isClosed = !1
        },
        e.prototype.stopAll = function() {
            for (; this.onceSounds.length;) {
                var t = this.onceSounds.shift();
                t.volume = 1,
                t.stop()
            }
            this.onceSounds.length = 0,
            this.sounds = {}
        },
        e
    } ();
    e.TOTAL = 13,
    e.SOUND_COUNT = 0,
    t.SoundCtr = e,
    __reflect(e.prototype, "one.SoundCtr")
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.apply(this, arguments) || this;
            return e.isCircled = !1,
            e._second = 0,
            e._direction = 1,
            e
        }
        return __extends(e, t),
        e.prototype.added = function() {
            t.prototype.added.call(this),
            this.setCircle()
        },
        e.prototype.removed = function() {
            t.prototype.removed.call(this),
            egret.Tween.removeTweens(this)
        },
        Object.defineProperty(e.prototype, "second", {
            get: function() {
                return this._second
            },
            set: function(t) {
                this._second > 0 && 0 >= t && egret.Tween.removeTweens(this),
                this._second = t,
                this.setCircle()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "direction", {
            get: function() {
                return this._direction
            },
            set: function(t) {
                this._direction = t,
                this.setCircle()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setCircle = function() {
            this._second > 0 && (egret.Tween.removeTweens(this), this.rotation = 0, this.isCircled = !0, egret.Tween.get(this, {
                loop: !0
            }).to({
                rotation: 360 * this._direction
            },
            1e3 * this._second))
        },
        e
    } (t.BaseImage);
    t.CircleImage = e,
    __reflect(e.prototype, "two.CircleImage")
} (two || (two = {}));
var one; !
function(t) {
    function e(t, e) {
        return egret.Capabilities.runtimeType == egret.RuntimeType.WEB ? window.setTimeout(t, e) : egret.setTimeout(t, null, e)
    }
    function n(t) {
        return egret.Capabilities.runtimeType == egret.RuntimeType.WEB ? window.clearTimeout(t) : egret.clearTimeout(t)
    }
    function i(t, e) {
        return egret.Capabilities.runtimeType == egret.RuntimeType.WEB ? window.setInterval(t, e) : egret.setInterval(t, null, e)
    }
    function r(t) {
        return egret.Capabilities.runtimeType == egret.RuntimeType.WEB ? window.clearInterval(t) : egret.clearInterval(t)
    }
    function o(t, e) {
        var n = function() {
            return 0 >= e ? void t() : (e--, void egret.callLater(n, null))
        };
        e--,
        egret.callLater(n, null)
    }
    t.setTimeout = e,
    t.clearTimeout = n,
    t.setInterval = i,
    t.clearInterval = r,
    t.callLater = o
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
one; !
function(t) {
    var e = function(t) {
        function e(e, n) {
            var i = t.call(this) || this;
            return i.count = 0,
            i.timescale = 1,
            i.change(e, n),
            i.addEventListener(egret.Event.ADDED_TO_STAGE, i.onAddTo, i),
            i.addEventListener(egret.Event.REMOVED_FROM_STAGE, i.onRmoveFrom, i),
            i
        }
        return __extends(e, t),
        e.prototype.change = function(t, e) {
            this.key = t,
            this.destroy(),
            this.count++,
            this.load(t, e, this.count)
        },
        e.prototype.load = function(t, e, n) {
            var i = this,
            r = !1,
            o = !1;
            RES.getResAsync(t + "_json",
            function() {
                o && i.createMovie(t, e, n),
                r = !0
            },
            this),
            RES.getResAsync(t + "_png",
            function() {
                r && i.createMovie(t, e, n),
                o = !0
            },
            this)
        },
        e.prototype.createMovie = function(t, n, i) {
            if (this.count == i) {
                var r = new egret.MovieClipDataFactory(RES.getRes(t + "_json"), RES.getRes(t + "_png")),
                o = this.mc = new egret.MovieClip(r.generateMovieClipData(n));
                this.addChild(o),
                this.frame && this.mc.gotoAndPlay(this.frame, this.playTimes),
                this.addListeners(),
                this.dispatchEventWith(e.LOAD_COMPLETE)
            }
        },
        e.prototype.onAddTo = function(t) {
            this.addListeners()
        },
        e.prototype.onRmoveFrom = function(t) {
            t.currentTarget == t.target && this.destroy()
        },
        e.prototype.addListeners = function() {
            this.mc && this.mc.addEventListener(egret.Event.LOOP_COMPLETE, this.onListener, this)
        },
        e.prototype.onListener = function(t) {
            this.dispatchEventWith(e.LOOP_COMPLETE)
        },
        e.prototype.destroy = function() {
            this.mc && this.mc.removeEventListener(egret.Event.LOOP_COMPLETE, this.onListener, this)
        },
        e.prototype.play = function(t, e) {
            this.frame = t,
            this.playTimes = e,
            this.mc && this.mc.gotoAndPlay(this.frame, this.playTimes)
        },
        e.prototype.stop = function() {
            this.mc && this.mc.stop()
        },
        e.prototype.setScale = function(t) {
            this.timescale = t,
            this.mc && (this.mc.frameRate = 24 * t)
        },
        e
    } (egret.DisplayObjectContainer);
    e.LOAD_COMPLETE = "onLoadComplete",
    e.LOOP_COMPLETE = "onLoopComplete",
    t.DynamicMovieClip = e,
    __reflect(e.prototype, "one.DynamicMovieClip")
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    function e(t, e) {
        var n = e;
        if (t = Math.floor(t), e.indexOf("h") >= 0) {
            var i = Math.floor(t / 3600);
            t -= 3600 * i,
            n = e.indexOf("hh") >= 0 ? n.replace("hh", 10 > i ? "0" + i: i + "") : n.replace("h", i + "")
        }
        if (e.indexOf("m") >= 0) {
            var r = Math.floor(t / 60);
            t -= 60 * r,
            n = e.indexOf("mm") >= 0 ? n.replace("mm", 10 > r ? "0" + r: r + "") : n.replace("m", r + "")
        }
        return n = e.indexOf("ss") >= 0 ? n.replace("ss", 10 > t ? "0" + t: t + "") : n.replace("s", t + "")
    }
    function n(t, e) {
        var n = new Date;
        n.setTime(t);
        var i = e;
        i.match("YYYY") ? i = i.replace("YYYY", n.getFullYear().toString()) : i.match("YY") && (i = i.replace("YY", n.getFullYear().toString().substr(2))),
        i = i.replace("MM", n.getMonth() < 9 ? "0" + (n.getMonth() + 1) : n.getMonth() + 1 + ""),
        i = i.replace("DD", n.getDate() < 10 ? "0" + n.getDate() : n.getDate() + "");
        var r = n.getHours(),
        o = n.getMinutes(),
        s = n.getSeconds();
        return i = i.replace("hh", 10 > r ? "0" + r: r + ""),
        i = i.replace("mm", 10 > o ? "0" + o: o + ""),
        i = i.replace("ss", 10 > s ? "0" + s: s + "")
    }
    function i(t, e) {
        var n = Date.now(),
        i = Math.round((n - t) / 1e3);
        if (60 > i) return i + "秒前";
        if (3600 > i) return Math.round(i / 60) + "分前";
        if (86400 > i) return Math.round(i / 60 / 60) + "小时前";
        var r = new Date;
        return r.setTime(t),
        this.formatTime(t, e)
    }
    function r(t, e) {
        var n = Date.now(),
        i = Math.round((n - t) / 1e3);
        return 60 > i ? i + "秒前": 3600 > i ? Math.round(i / 60) + "分前": 86400 > i ? Math.round(i / 60 / 60) + "小时前": Math.round(i / 60 / 60 / 24) + "天前"
    }
    function o(t, e) {
        for (var n = Math.round(t).toString(); n.length < e;) n = "0" + n;
        return n
    }
    var s = function() {
        function e() {
            this.isStarting = !1,
            this.seconds = {}
        }
        return e.prototype.start = function() {
            this.isStarting || (this.isStarting = !0, this.intervalID = t.setInterval(this.onHandler.bind(this), 100))
        },
        e.prototype.onHandler = function() {
            var t = Date.now();
            for (var e in this.seconds) {
                var n = this.seconds[e];
                n.endTimeStamp <= t ? (delete this.seconds[e], n.call(0)) : n.call(Math.ceil((n.endTimeStamp - t) / 1e3))
            }
        },
        e.prototype.stop = function() {
            this.isStarting = !1,
            t.clearInterval(this.intervalID)
        },
        e.prototype.addSecond = function(t, n) {
            return e.count++,
            this.seconds[e.count] = {
                second: t,
                endTimeStamp: Date.now() + 1e3 * t,
                call: n
            },
            e.count
        },
        e.prototype.removeSecond = function(t) {
            return delete this.seconds[t],
            !0
        },
        e
    } ();
    s.count = 1,
    t.SecondUtils = s,
    __reflect(s.prototype, "one.SecondUtils"),
    t.secondUtils = new t.SecondUtils,
    t.secondUtils.start(),
    t.formatSecond = e,
    t.formatTime = n,
    t.formatLastTime = i,
    t.formatLastTime2 = r,
    t.toFixed = o
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
two; !
function(t) {
    var e = function() {
        function t() {}
        return t.getStorageKey = function(e) {
            return t.UID + "_" + t.game + "_" + e
        },
        t.$init = function() {},
        t.initByType = function(t, e, n, i) {
            this.timestamps[t] = {
                effect: e,
                timestamp: -1,
                cd: n,
                total: 1,
                used: 0
            }
        },
        t.getLeftCount = function(t) {
            var e = this.getTimestamp(t);
            if (0 == e.timestamp) return e.used = 0,
            e.total;
            var n = new Date(1e3 * e.timestamp),
            i = new Date;
            return n.getDate() != i.getDate() || n.getMonth() != n.getMonth() ? (e.used = 0, e.total) : e.total - e.used
        },
        t.startTimestamp = function(t) {
            var e = Math.floor(Date.now() / 1e3),
            n = this.getTimestamp(t);
            n.timestamp = e,
            n.used++,
            egret.localStorage.setItem(this.UID + "_timestamp_" + t, JSON.stringify({
                timestamp: n.timestamp,
                used: n.used
            }))
        },
        t.addDelayTime = function(t, e) {
            var n = this.getTimestamp(t);
            n.timestamp -= e
        },
        t.getTimestamp = function(t) {
            var e = this.timestamps[t].timestamp;
            if ( - 1 == e) {
                var n = egret.localStorage.getItem(this.UID + "_timestamp_" + t);
                if (n) {
                    var i = JSON.parse(n);
                    this.timestamps[t].timestamp = i.timestamp,
                    this.timestamps[t].used = i.used
                } else this.timestamps[t].timestamp = 0,
                this.timestamps[t].used = 0
            }
            return this.timestamps[t]
        },
        t.getCD = function(t) {
            return this.timestamps[t].cd
        },
        t.getEffectCD = function(t) {
            return this.timestamps[t].effect
        },
        t.getLeftCD = function(t) {
            var e = Math.floor(Date.now() / 1e3) - this.getTimestamp(t).timestamp,
            n = this.timestamps[t].cd;
            return n > e ? n - e: 0
        },
        t.getLeftEffect = function(t) {
            var e = Math.floor(Date.now() / 1e3) - this.getTimestamp(t).timestamp,
            n = this.timestamps[t].effect;
            return n > e ? n - e: 0
        },
        t
    } ();
    e.game = "demo",
    e.UID = "1",
    e.timestamps = {},
    t.Storage = e,
    __reflect(e.prototype, "two.Storage"),
    e.$init()
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    var e = function() {
        function t() {
            this.finishTypes = []
        }
        return t.prototype.addMonitor = function(t, e) {
            this.total = t,
            this.call = e,
            this.finishTypes = []
        },
        t.prototype.finish = function(t) {
            this.finishTypes.indexOf(t) < 0 && this.finishTypes.push(t),
            this.finishTypes.length >= this.total && this.call && this.call()
        },
        t
    } ();
    t.Threads = e,
    __reflect(e.prototype, "one.Threads")
} (one || (one = {}));
var one; !
function(t) {
    function e() {
        return 16777215 * Math.random()
    }
    function n(t, n) {
        void 0 === n && (n = 0),
        (0 >= n || n > t.length) && (n = t.length);
        for (var i = n - 1; i >= 0; i--) {
            var r = 0 | e() % (i + 1),
            o = t[i];
            t[i] = t[r],
            t[r] = o
        }
    }
    function i(t, e) {
        if (t > e) {
            var n = e;
            e = t,
            t = n
        }
        return Math.floor(Math.random() * (e - t + 1)) + t
    }
    function r() {
        return 0 == i(0, 1) ? -1 : 1
    }
    function o(t, e, n) {
        for (var i = [], r = [{
            min: t,
            max: e
        }], o = 0; n > o; o++) {
            var a = s(r);
            i.push(a)
        }
        return i
    }
    function s(e) {
        var n = t.randomInt(0, e.length - 1),
        i = e[n];
        e.splice(n, 1);
        var r = t.randomInt(i.min, i.max);
        return r == i.min ? i.min + 1 <= i.max && e.push({
            min: i.min + 1,
            max: i.max
        }) : r == i.max ? i.min <= i.max - 1 && e.push({
            min: i.min,
            max: i.max - 1
        }) : (e.push({
            min: i.min,
            max: r - 1
        }), e.push({
            min: r + 1,
            max: i.max
        })),
        r
    }
    function a(e) {
        for (var n = 0,
        i = 0; i < e.length; i++) n += e[i];
        if (0 == n) return - 1;
        var r = t.randomInt(1, n);
        n = 0;
        for (var i = 0; i < e.length; i++) if (n += e[i], n >= r) return i;
        return - 1
    }
    function h(t) {
        var e;
        if (t instanceof Array) e = [];
        else {
            if (! (t instanceof Object)) return t;
            e = {}
        }
        for (var n in t) t[n] instanceof Array ? e[n] = h(t[n]) : t[n] instanceof Object ? e[n] = h(t[n]) : e[n] = t[n];
        return e
    }
    function c(t, e) {
        return void 0 === e && (e = 7),
        t.length <= e ? t: t.substr(0, e) + "..."
    }
    function u(t, e) {
        var n = e.italic,
        i = e.bold,
        r = e.size,
        o = e.fontFamily || egret.TextField.default_fontFamily;
        return egret.sys.measureText(t, o, r, i, n)
    }
    function p(t, e, n) {
        if (void 0 === n && (n = 300), u(e, t) <= n) return e;
        for (var i = e.length,
        r = 0;;) {
            if (r >= i - 1) return e.substr(0, r) + "...";
            u(e.substr(0, Math.floor((i + r) / 2)), t) <= n - 2 * t.size ? r = Math.floor((i + r) / 2) : i = Math.floor((i + r) / 2)
        }
    }
    function l(t, e) {
        return void 0 === e && (e = 2),
        1e4 > t ? t + "": (t /= 1e4, 1e4 > t ? t.toFixed(e) + "万": (t /= 1e4, 1e4 > t ? t.toFixed(e) + "亿": void 0))
    }
    function _(t) {
        for (var e = t + "",
        n = "",
        i = 0; i < e.length; i++) i % 3 == 0 && 0 != i && (n = "," + n),
        n = e.charAt(e.length - 1 - i) + n;
        return n
    }
    function d(t, e) {
        if (void 0 === e && (e = 2), t = Math.floor(t), 1e3 > t) return t + "";
        for (var n = 0,
        i = t; i >= 10;) i /= 10,
        n++;
        var r = n % 3;
        n -= r;
        for (var o = 0; n > o; o++) t /= 10;
        t = Math.floor(t * Math.pow(10, e)) / Math.pow(10, e);
        var s = ["", "k", "m", "b", "t", "a", "b", "c", "d", "e", "f", "g", "h"];
        return t + s[n / 3]
    }
    function f() {
        if ( - 1 == v) if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB && egret.Capabilities.isMobile) {
            var t = window.screen.width,
            e = window.screen.height;
            if (t > e) {
                var n = e;
                e = t,
                t = n
            }
            var i = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && 375 === t && 812 === e,
            r = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 3 === window.devicePixelRatio && 414 === t && 896 === e,
            o = /iphone/gi.test(window.navigator.userAgent) && window.devicePixelRatio && 2 === window.devicePixelRatio && 414 === t && 896 === e; (i || o || r) && (v = 1)
        } else if (egret.Capabilities.runtimeType == egret.RuntimeType.WXGAME) {
            var s = wx.getSystemInfoSync(),
            a = s.model; - 1 != a.search("iPhone X") && (v = 1)
        } else v = 0;
        var h = 1 == v ? 40 : 0;
        return h
    }
    function m(t, e) {
        t.left = e + f()
    }
    function g(t, e) {
        var n = f();
        isNaN(e) || (t.width = e - n)
    }
    t.shuffleArray = n,
    t.randomInt = i,
    t.randomDic = r,
    t.randomInts = o,
    t.randomIndexByWeight = a,
    t.clone = h,
    t.cutName = c,
    t.cutText = p,
    t.formatCash = l,
    t.formatCount = _,
    t.formatCount2 = d;
    var v = -1;
    t.getFixRap = f,
    t.fixLeft = m,
    t.fixWidth = g
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype.added = function() {
            t.prototype.added.call(this),
            this.lang = one.langUtils.getAllLanguages()
        },
        e.prototype.removed = function() {
            t.prototype.removed.call(this),
            this.lang = null
        },
        e
    } (t.BaseComponent);
    t.BaseLangComponent = e,
    __reflect(e.prototype, "two.BaseLangComponent")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype.added = function() {
            t.prototype.added.call(this),
            this.lang = one.langUtils.getAllLanguages()
        },
        e.prototype.removed = function() {
            t.prototype.removed.call(this),
            this.lang = null
        },
        e
    } (t.BaseItemRenderer);
    t.BaseLangItemRenderer = e,
    __reflect(e.prototype, "two.BaseLangItemRenderer")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    var e = function() {
        function e() {}
        return e.prototype.setLanguage = function(t) {
            this.languages = RES.getRes("language" + t + "_json")
        },
        e.prototype.getAllLanguages = function() {
            return t.clone(this.languages.normal)
        },
        e.prototype.getAreaStatement = function(t, e) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            var r = this.languages.normal[t];
            if (this.languages[e] && this.languages[e][t] && (r = this.languages[e][t]), null == n) return r;
            for (var o = 0; o < n.length; o++) {
                var s = new RegExp("<" + o + ">", "g");
                r = r.replace(s, n[o])
            }
            return r
        },
        e.prototype.getStatement = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var i = this.languages.normal[t];
            if (null == e) return i;
            for (var r = 0; r < e.length; r++) {
                var o = new RegExp("<" + r + ">", "g");
                i = i.replace(o, e[r])
            }
            return i
        },
        e.prototype.getLanguageStatement = function(t, e) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            var r = this.languages[t][e];
            if (null == n) return r;
            for (var o = 0; o < n.length; o++) {
                var s = new RegExp("<" + o + ">", "g");
                r = r.replace(s, n[o])
            }
            return r
        },
        e
    } ();
    t.LanguageUtils = e,
    __reflect(e.prototype, "one.LanguageUtils"),
    t.langUtils = new e
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    var e = function() {
        function e() {
            this.groupPros = [],
            this.groups = {},
            this.listeners = {},
            this.isPause = !1,
            this.maxLoadingThread = 2,
            this.loadingCount = 0,
            this.files = []
        }
        return e.prototype.loadGroups = function(e, n, i) {
            void 0 === i && (i = null);
            for (var r = [], o = [], s = 0; s < e.length; s++) {
                for (var a = RES.getGroupByName(e[s]), h = [], c = 0; c < a.length; c++) RES.getRes(a[c].name) || (h.push(a[c].name), r.push(a[c].name));
                o.push({
                    name: e[s],
                    leftKeys: h,
                    total: a.length
                })
            }
            return 0 == r.length ? void t.callLater(function() {
                i && i(100, 100)
            },
            1) : (this.groupPros.push({
                groups: o,
                onprogress: i
            }), void this.load(r, n))
        },
        e.prototype.loadGroup = function(t, e, n) {
            void 0 === n && (n = null);
            for (var i = RES.getGroupByName(t), r = [], o = 0; o < i.length; o++) r.push(i[o].name);
            this.groups[t] = {
                keys: r,
                onprogress: n,
                current: 0,
                total: r.length
            },
            this.load(r, e)
        },
        e.prototype.stopGroup = function(t) {
            for (var e = RES.getGroupByName(t), n = e.length; n >= 0; n--) for (var i = this.files.length; i >= 0; i--) this.files[i].key == e[n].name && this.files.splice(i, 1)
        },
        e.prototype.pause = function() {
            this.isPause = !0
        },
        e.prototype.goon = function() {
            this.isPause = !1,
            this.loadNexts()
        },
        e.prototype.load = function(t, e, n) {
            void 0 === n && (n = null);
            for (var i = 0; i < this.files.length; i++) {
                var r = this.files[i].priority;
                if (e > r) return this.insert(t, e, i, n),
                void this.loadNexts()
            }
            this.insert(t, e, this.files.length, n),
            this.loadNexts()
        },
        e.prototype.reducePriorities = function() {
            for (var t = 0; t < this.files.length; t++) this.files[t].priority -= 1,
            this.files[t].priority = Math.max(this.files[t].priority, 0)
        },
        e.prototype.getExistIdx = function(t) {
            for (var e = 0; e < this.files.length; e++) if (this.files[e].key == t) return e;
            return - 1
        },
        e.prototype.addListener = function(t, e) {
            null == this.listeners[t] ? this.listeners[t] = [e] : this.listeners[t].push(e)
        },
        e.prototype.insert = function(t, e, n, i) {
            for (var r = 0; r < t.length; r++) {
                var o = this.getExistIdx(t[r]); - 1 == o ? (this.files.splice(n + r, 0, {
                    key: t[r],
                    priority: e
                }), null != i && this.addListener(t[r], i)) : n + r >= o ? (null != i && this.addListener(t[r], i), n--) : (this.files.splice(o, 1), this.files.splice(n + r, 0, {
                    key: t[r],
                    priority: e
                }), null != i && this.addListener(t[r], i))
            }
        },
        e.prototype.loadNexts = function() {
            var e = this;
            t.setTimeout(function() {
                for (var t = e.loadingCount; t < e.maxLoadingThread; t++) e.loadFile()
            },
            0)
        },
        e.prototype.loadFile = function() {
            var t = this;
            if (! (this.files.length <= 0 || this.loadingCount >= this.maxLoadingThread || this.isPause)) {
                this.loadingCount++;
                var e = this.files.shift(),
                n = function() {
                    for (var n = 0; t.listeners[e.key] && n < t.listeners[e.key].length; n++) t.listeners[e.key][n]();
                    delete t.listeners[e.key];
                    for (var i in t.groups) {
                        var r = t.groups[i].keys.indexOf(e.key);
                        r >= 0 && (t.groups[i].current++, t.groups[i].keys.splice(r, 1), t.groups[i].onprogress && t.groups[i].onprogress(t.groups[i].current, t.groups[i].total), 0 == t.groups[i].keys.length && delete t.groups[i])
                    }
                    for (var n = 0; n < t.groupPros.length; n++) {
                        for (var o = 0,
                        s = 0,
                        a = 0; a < t.groupPros[n].groups.length; a++) {
                            for (var h = t.groupPros[n].groups[a].leftKeys, c = 0; c < h.length; c++) {
                                var u = h.indexOf(e.key);
                                u >= 0 && h.splice(u, 1)
                            }
                            o += h.length,
                            s += t.groupPros[n].groups[a].total
                        }
                        t.groupPros[n].onprogress && (t.groupPros[n].onprogress(s - o, s), 0 == o && (t.groupPros.splice(n, 1), n--))
                    }
                    t.loadingCount--,
                    t.loadFile()
                };
                RES.getRes(e.key) ? n() : RES.getResAsync(e.key,
                function(i) {
                    null == i ? RES.getResAsync(e.key,
                    function(i) {
                        null == i ? RES.getResAsync(e.key,
                        function(t) {
                            n()
                        },
                        t) : n()
                    },
                    t) : n()
                },
                this)
            }
        },
        e
    } ();
    t.LoaderManager = e,
    __reflect(e.prototype, "one.LoaderManager"),
    t.loaderManager = new e
} (one || (one = {}));
var one; !
function(t) {
    function e(t, e) {
        i[t] = e
    }
    function n(t) {
        var e = egret.getOption("schemeUrl");
        if (e && e.length > 0) for (var n = e.indexOf("?"), i = e.substr(n + 1), r = i.split("&"), o = r.length, s = 0; o > s; s++) {
            var a = r[s],
            h = a.split("=");
            if (h[0] == t) return h[1]
        }
        return null
    }
    var i = {};
    t.getOption = function(e) {
        var r = i[e];
        return r ? r: (r = n(e), r ? r: egret.Capabilities.runtimeType == egret.RuntimeType.WEB && (r = t.getCookie(e)) ? r: egret.getOption(e))
    },
    t.setOption = e
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    var e = function() {
        function t() {
            this.onCalls = {}
        }
        return t.prototype.once = function(t, e, n) {
            return this.addCall(t, e, n, 1)
        },
        t.prototype.on = function(t, e, n) {
            return this.addCall(t, e, n, -1)
        },
        t.prototype.addCall = function(t, e, n, i) {
            var r = this.onCalls[t];
            if (null == r) r = this.onCalls[t] = [];
            else for (var o = 0; o < r.length; o++) {
                var s = r[o];
                if (s.call == e && s.thisObj == n) return console.error("已经存在回调" + t),
                !1
            }
            return r.push({
                call: e,
                thisObj: n,
                count: i
            }),
            !0
        },
        t.prototype.off = function(t, e, n) {
            var i = this.onCalls[t];
            if (i) for (var r = 0; r < i.length; r++) {
                var o = i[r];
                if (o.call == e && o.thisObj == n) return i.splice(r, 1),
                !0
            }
            return ! 1
        },
        t.prototype.emit = function(t, e) {
            var n = this.onCalls[t];
            if (null != n) {
                for (var i = (n.length, n.concat()), r = 0; r < n.length; r++) {
                    var o = n[r];
                    null == o.call ? (n.splice(r, 1), r--) : 1 == o.count && (n.splice(r, 1), r--)
                }
                for (var r = 0; r < i.length; r++) {
                    var o = i[r];
                    null == o.call ? console.error("存在没有销毁的回调函数") : o.call.call(o.thisObj, e)
                }
            }
        },
        t
    } ();
    t.Monitor = e,
    __reflect(e.prototype, "one.Monitor"),
    t.monitor = new e
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    function e(t) {
        if (RES.hasRes(t)) return t;
        if ("Android" == egret.Capabilities.os) {
            if (RES.hasRes(t + "_ogg")) return t + "_ogg"
        } else if ("iOS" == egret.Capabilities.os && RES.hasRes(t + "_m4a")) return t + "_m4a";
        return RES.hasRes(t + "_mp3") ? t + "_mp3": null
    }
    function n(t) {
        var e;
        if ("Android" == egret.Capabilities.os) {
            if (e = RES.getRes(t + "_ogg")) return e
        } else if ("iOS" == egret.Capabilities.os && (e = RES.getRes(t + "_m4a"))) return e;
        return e = RES.getRes(t + "_mp3"),
        e ? e: RES.getRes(t)
    }
    t.getSoundKey = e,
    t.getSound = n;
    var i = function() {
        function e() {
            this.project = "",
            this.musicCtr = new t.MusicCtr,
            this.soundCtr = new t.SoundCtr
        }
        return e.prototype.getKey = function(t) {
            return this.project + "_" + t + "_not_open"
        },
        e.prototype.isOpened = function(t) {
            return ! egret.localStorage.getItem(this.getKey(t))
        },
        e.prototype.init = function(t) {
            this.project = t;
            var e = this.isOpened(egret.Sound.MUSIC),
            n = this.isOpened(egret.Sound.EFFECT);
            e ? this.musicCtr.open() : this.musicCtr.close(),
            n ? this.soundCtr.open() : this.soundCtr.close()
        },
        e.prototype.playMusic = function(t, e) {
            void 0 === e && (e = 0),
            this.musicCtr.play(t, 0, -1, e)
        },
        e.prototype.playLastMusic = function() {
            this.musicCtr.playLastMusic()
        },
        e.prototype.playSound = function(t, e, n) {
            return this.soundCtr.play(t, e, n)
        },
        e.prototype.stopSound = function(t) {
            this.soundCtr.stop(t)
        },
        e.prototype.playSounds = function(t) {
            this.soundCtr.playSounds(t)
        },
        e.prototype.stop = function(t) {
            t == egret.Sound.MUSIC ? this.musicCtr.stopAll() : this.soundCtr.stopAll()
        },
        e.prototype.open = function(t) {
            t == egret.Sound.MUSIC ? this.musicCtr.open() : this.soundCtr.open(),
            egret.localStorage.setItem(this.getKey(t), "")
        },
        e.prototype.close = function(t) {
            t == egret.Sound.MUSIC ? this.musicCtr.close() : this.soundCtr.close(),
            egret.localStorage.setItem(this.getKey(t), "1")
        },
        e.prototype.setVolume = function(t, e) {
            t == egret.Sound.MUSIC ? this.musicCtr.volume = e: this.soundCtr.volume = e
        },
        e.prototype.getVolume = function(t) {
            return t == egret.Sound.MUSIC ? this.musicCtr.volume: this.soundCtr.volume
        },
        e
    } ();
    i.defaultMusicVolume = 1,
    i.defaultSoundVolume = 1,
    t.SoundManager = i,
    __reflect(i.prototype, "one.SoundManager"),
    t.soundManager = new i
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.apply(this, arguments) || this;
            return e._anchorX = 0,
            e._anchorY = 0,
            e
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(t) {
                this._anchorX = t,
                this.anchorOffsetX = this.width * this._anchorX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(t) {
                this._anchorY = t,
                this.anchorOffsetX = this.height * this._anchorX
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.updateDisplayList = function(e, n) {
            t.prototype.updateDisplayList.call(this, e, n),
            e * n != 0 && (this.anchorOffsetX = e * this._anchorX, this.anchorOffsetY = n * this._anchorY)
        },
        e
    } (eui.BitmapLabel);
    t.AnchorBitmapLabel = e,
    __reflect(e.prototype, "two.AnchorBitmapLabel")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.apply(this, arguments) || this;
            return e._anchorX = 0,
            e._anchorY = 0,
            e
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "anchorX", {
            get: function() {
                return this._anchorX
            },
            set: function(t) {
                this._anchorX = t,
                this.anchorOffsetX = this.width * this._anchorX
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "anchorY", {
            get: function() {
                return this._anchorY
            },
            set: function(t) {
                this._anchorY = t,
                this.anchorOffsetX = this.height * this._anchorX
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.updateDisplayList = function(e, n) {
            t.prototype.updateDisplayList.call(this, e, n),
            e * n != 0 && (this.anchorOffsetX = e * this._anchorX, this.anchorOffsetY = n * this._anchorY)
        },
        e
    } (t.CircleImage);
    t.AnchorImage = e,
    __reflect(e.prototype, "two.AnchorImage")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.__isAdded = !1,
            e.__isCreated = !1,
            e.__isFirst = !0,
            e.addEventListener(egret.Event.ADDED_TO_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !0, e.__isCreated && e.addTo())
            },
            e),
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !1, e.removed())
            },
            this),
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this),
            this.__isCreated = !0,
            this.__isAdded && this.addTo()
        },
        e.prototype.addTo = function() {
            this.__isFirst && this.created(),
            this.__isFirst = !1,
            this.added()
        },
        e.prototype.onTap = function(t) {},
        e.prototype.created = function() {},
        e.prototype.added = function() {},
        e.prototype.removed = function() {},
        e.prototype.refreshApi = function(t) {},
        e.prototype.refreshData = function(t, e) {},
        e
    } (eui.Button);
    t.BaseButton = e,
    __reflect(e.prototype, "two.BaseButton", ["eui.UIComponent", "egret.DisplayObject"])
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
two; !
function(t) {
    var e = function() {
        function t() {}
        return t.getDataByNameAndID = function(e, n) {
            if (this.tempJsonData[e] && this.tempJsonData[e][n]) return this.tempJsonData[e][n].obj;
            var i = t.getConfig(e)[n];
            if (!i) return null;
            var r = JSON.parse(i.value);
            return t.setAutoRecycle(r, e, n),
            r
        },
        t.getConfig = function(e) {
            var n = t.map[e + "_json"];
            if (null == n) {
                n = t.map[e + "_json"] = [];
                for (var i = t.getJsonValue(e), r = 0; r < i.length; r++) {
                    var o = i[r][t.ID_KEY],
                    s = i[r];
                    null != o && (n[o] = s)
                }
            }
            return n
        },
        t.start = function() {
            this.isRunning || (this.isRunning = !0, one.setInterval(t.onRecycle, 1e4))
        },
        t.getJsonList = function(e) {
            var n = t.map[e + "_json"];
            if (null == n) {
                n = t.map[e + "_json"] = [];
                for (var i = t.getJsonValue(e), r = 0; r < i.length; r++) {
                    var o = i[r][t.ID_KEY],
                    s = i[r];
                    null != o && (n[o] = s)
                }
            }
            var a = [];
            for (var h in n) {
                var c = JSON.parse(n[h].value);
                t.setAutoRecycle(c, e, parseInt(h)),
                a.push(c)
            }
            return a
        },
        t.getJsonValue = function(t) {
            for (var e, n = 0; e = RES.getRes("allConfig_" + n + "_json");) {
                if (e[t + "_json"]) return this.ID_KEY = e.ID_KEY,
                e[t + "_json"].data;
                n++
            }
            return null
        },
        t.onRecycle = function() {
            var e = Date.now();
            for (var n in t.tempJsonData) for (var i in t.tempJsonData[n]) e - t.tempJsonData[n][i].time > 3e4 && delete t.tempJsonData[n][i]
        },
        t.setAutoRecycle = function(e, n, i) {
            null == t.tempJsonData[n] && (t.tempJsonData[n] = {}),
            t.tempJsonData[n][i] = {
                obj: e,
                time: Date.now()
            }
        },
        t
    } ();
    e.ID_KEY = "",
    e.map = {},
    e.isRunning = !1,
    e.tempJsonData = {},
    t.LocalMap = e,
    __reflect(e.prototype, "two.LocalMap"),
    e.start()
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
one; !
function(t) {
    var e = function() {
        function t() {
            this.count = 0,
            this.timer = new egret.Timer(1e3)
        }
        return t.prototype.initTarget = function(t) {
            this.target = t,
            this.initX = t.x,
            this.initY = t.y
        },
        t.prototype.shake = function(t, e, n) {
            this.maxDis = n,
            this.count = t * e,
            this.rate = e,
            this.timer.delay = 1e3 / e,
            this.timer.repeatCount = this.count,
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.shaking, this),
            this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this),
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.shaking, this),
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this),
            this.timer.reset(),
            this.timer.start()
        },
        t.prototype.shaking = function() {
            egret.Tween.removeTweens(this.target),
            this.target.x = this.initX - this.maxDis + Math.random() * this.maxDis * 2,
            this.target.y = this.initY - this.maxDis + Math.random() * this.maxDis * 2,
            egret.Tween.get(this.target).to({
                x: this.initX,
                y: this.initY
            },
            999 / this.rate)
        },
        t.prototype.shakeComplete = function() {
            this.target && (egret.Tween.removeTweens(this.target), this.target.x = this.initX, this.target.y = this.initY),
            this.timer.stop(),
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.shaking, this),
            this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.shakeComplete, this)
        },
        t.prototype.stop = function() {
            this.shakeComplete()
        },
        t
    } ();
    t.Shake = e,
    __reflect(e.prototype, "one.Shake")
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
one; !
function(t) {
    var e = function(t) {
        function e(e, n, i) {
            void 0 === i && (i = "png");
            var r = t.call(this) || this;
            return r.ext = i,
            r.isLoaded = !1,
            r._frameRate = 24,
            r.startTime = 0,
            r.$totalFrames = 0,
            r.lastFrame = -1,
            r.horizontalCenter = 0,
            r.verticalCenter = 0,
            r.mcData = e,
            r.fileName = n,
            r.bitmap = new egret.Bitmap,
            r.addChild(r.bitmap),
            r.frameIntervalTime = 1e3 / r._frameRate,
            r.addEventListener(egret.Event.ADDED_TO_STAGE,
            function(t) {
                t.currentTarget == t.target && (egret.stopTick(r.advanceTime, r), egret.startTick(r.advanceTime, r))
            },
            r),
            r.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.currentTarget == t.target && egret.stopTick(r.advanceTime, r)
            },
            r),
            r.event = new egret.Event(egret.Event.COMPLETE),
            r.load(),
            r
        }
        return __extends(e, t),
        e.prototype.changeFileName = function(t) {
            this.fileName = t,
            this.load()
        },
        e.prototype.load = function() {
            var t = this;
            this.isLoaded = !1;
            var e = 0,
            n = 0,
            i = this.fileName,
            r = function() {
                n++,
                n == e && i == t.fileName && (t.isLoaded = !0)
            };
            for (var o in this.mcData) for (var s = 0; s < this.mcData[o].length; s++) e++;
            for (var o in this.mcData) for (var s = 0; s < this.mcData[o].length; s++) RES.getResAsync(this.fileName + "_" + this.mcData[o][s] + "_" + this.ext, r, this)
        },
        Object.defineProperty(e.prototype, "frameRate", {
            get: function() {
                return this._frameRate
            },
            set: function(t) {
                this._frameRate = t,
                this.frameIntervalTime = 1e3 / this._frameRate
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.play = function(t, e) {
            void 0 === e && (e = 0),
            this.animation = t,
            this.playTimes = e,
            this.countTimes = 0,
            this.lastFrame = -1,
            this.startTime = egret.getTimer(),
            null == this.mcData[t] && console.log(t + "   dddddd"),
            this.$totalFrames = this.mcData[t].length
        },
        e.prototype.advanceTime = function(t) {
            if (!this.isLoaded) return ! 1;
            if (this.playTimes > 0 && this.countTimes >= this.playTimes) return ! 1;
            var e = this,
            n = e.frameIntervalTime,
            i = egret.getTimer(),
            r = i - this.startTime;
            if (0 > r) return ! 1;
            var o = Math.floor(r / n);
            this.playTimes > 0 && o >= (this.countTimes + 1) * this.$totalFrames && (this.countTimes = Math.floor(o / this.$totalFrames), this.countTimes = Math.min(this.countTimes, this.playTimes));
            var s = 0;
            return this.playTimes > 0 && this.countTimes >= this.playTimes ? (s = this.$totalFrames - 1, this.showFrame(s), this.dispatchEvent(this.event)) : (s = o % this.$totalFrames, this.showFrame(s)),
            !1
        },
        e.prototype.showFrame = function(t) {
            if (this.lastFrame != t) {
                this.lastFrame = t;
                var e = RES.getRes(this.fileName + "_" + this.mcData[this.animation][t] + "_" + this.ext);
                e || console.warn(this.fileName + "_" + this.animation + "_" + t),
                this.bitmap.texture = e,
                this.bitmap.anchorOffsetX = e.textureWidth * this.horizontalCenter / 100,
                this.bitmap.anchorOffsetY = e.textureHeight * this.verticalCenter / 100
            }
        },
        e
    } (egret.DisplayObjectContainer);
    t.DynamicFrames = e,
    __reflect(e.prototype, "one.DynamicFrames")
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.apply(this, arguments) || this;
            return e.txts = [],
            e.bars = [],
            e.maxSecond = -1,
            e.secId = -1,
            e
        }
        return __extends(e, t),
        e.prototype.addTxtMonitor = function(t, e) {
            this.txts.push({
                txt: t,
                format: e
            }),
            this.maxSecond > 0 && (t.text = one.formatSecond(this.maxSecond, e))
        },
        e.prototype.addBarMonitor = function(t) {
            this.bars.push({
                bar: t
            }),
            this.maxSecond > 0 && (t.maximum = this.maxSecond, t.value = this.maxSecond)
        },
        e.prototype.reset = function(t) {
            for (var e = 0; e < this.txts.length; e++) {
                var n = this.txts[e];
                n.txt.text = one.formatSecond(t, n.format)
            }
            for (var e = 0; e < this.bars.length; e++) {
                var i = this.bars[e];
                i.bar.value = t
            }
        },
        e.prototype.start = function(t) {
            var e = this;
            this.maxSecond = t;
            for (var n = 0; n < this.bars.length; n++) {
                var i = this.bars[n];
                i.bar.maximum = this.maxSecond,
                i.bar.value = this.maxSecond
            }
            this.secId = one.secondUtils.addSecond(t,
            function(t) {
                e.reset(t),
                0 == t && (one.secondUtils.removeSecond(e.secId), e.dispatchEventWith(egret.Event.COMPLETE))
            })
        },
        e.prototype.stop = function() {
            one.secondUtils.removeSecond(this.secId)
        },
        e
    } (egret.EventDispatcher);
    t.Countdown = e,
    __reflect(e.prototype, "two.Countdown")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    function e() {
        for (var e = 0; e < t.boxLayer.numChildren - 1; e++) {
            var n = t.boxLayer.getChildAt(e);
            n.isSame && !n.isBoxClosed() && n.setRectHide(!0)
        }
        for (var e = t.boxLayer.numChildren - 1; e >= 0; e--) {
            var n = t.boxLayer.getChildAt(e);
            if (n.isSame && n.hasRect() && !n.isBoxClosed()) return void n.setRectHide(!1)
        }
    }
    function n(n, i, r, o) {
        if (void 0 === i && (i = .5), void 0 === r && (r = !1), void 0 === o && (o = !1), n.parent && n.parent.parent) return n.isClosed = !1,
        void n.parent.parent.addChild(n.parent);
        n.touchEnabled = !1,
        n.isClosed = !1;
        var s = new d(o);
        t.boxLayer.addChild(s),
        s.addView(n, i, r),
        e()
    }
    function i(e) {
        void 0 === e && (e = !1);
        for (var n = t.boxLayer.numChildren - 1; n >= 0; n--) {
            var i = t.boxLayer.getChildAt(n);
            if (i.isSame && !i.isBoxClosed()) return void i.removeView(e)
        }
    }
    function r(e, n) {
        void 0 === n && (n = !1);
        for (var i = 0; i < t.boxLayer.numChildren; i++) {
            var r = t.boxLayer.getChildAt(i);
            if (r.isSame && r.isSame(e) && !r.isBoxClosed()) return void r.removeView(n)
        }
    }
    function o(e) {
        void 0 === e && (e = !1);
        for (var n = t.boxLayer.numChildren - 1; n >= 0; n--) {
            var i = t.boxLayer.getChildAt(n);
            i.isSame && !i.isBoxClosed() && i.removeView(e)
        }
    }
    function s(e) {
        t.boxLayer = new eui.UILayer,
        e.addChild(t.boxLayer),
        t.boxLayer.touchEnabled = !1,
        f = new eui.UILayer,
        e.addChild(f),
        f.touchEnabled = !1
    }
    function a(t) {
        f.addChild(t)
    }
    function h(t) {
        t.parent && t.parent.removeChild(t)
    }
    function c(t, e, n) {
        t.__isAddTap && (egret.warn("多次点击设置"), egret.warn(t)),
        t.addEventListener(egret.TouchEvent.TOUCH_TAP, e, n),
        t.__isAddTap = !0
    }
    function u(t, e, n) {
        t.removeEventListener(egret.TouchEvent.TOUCH_TAP, e, n),
        t.__isAddTap = !1
    }
    function p(t, e, n) {
        t.__isAddChange && (egret.warn("多次CHANGE设置"), egret.warn(t)),
        t.addEventListener(egret.Event.CHANGE, e, n),
        t.__isAddChange = !0
    }
    function l(t, e, n) {
        t.addEventListener(egret.Event.CHANGE, e, n),
        t.__isAddChange = !1
    }
    function _(t) {
        t && t.parent && t.parent.removeChild(t)
    }
    var d = function(n) {
        function i(e) {
            var i = n.call(this) || this;
            if (i._isImme = !1, RES.hasRes("box_mask_png")) {
                var r = new eui.Image("box_mask_png");
                i.rect = r
            } else {
                var r = new eui.Rect;
                r.fillColor = 0,
                r.fillAlpha = 1,
                i.rect = r
            }
            return i.addChild(i.rect),
            i.rect.left = i.rect.right = i.rect.top = i.rect.bottom = 0,
            i.percentHeight = 100,
            i.percentWidth = 100,
            e && i.rect.once(egret.TouchEvent.TOUCH_TAP,
            function() {
                i.isBoxClosed() || t.closeBox(i.view, i._isImme)
            },
            i),
            i
        }
        return __extends(i, n),
        i.prototype.hasRect = function() {
            return this._hasRect
        },
        i.prototype.setRectHide = function(t) {
            t ? this.rect.visible = !1 : this.rect.visible = !0
        },
        i.prototype.isSame = function(t) {
            return this.viewHashID == t.hashCode
        },
        i.prototype.addView = function(t, e, n) {
            this._isImme = n,
            this._hasRect = -1 != e,
            -1 == e ? this.rect.visible = !1 : (this.rect.alpha = e, this.rect.visible = !0),
            t.isClosed = !1,
            t.percentHeight = 100,
            t.percentWidth = 100,
            this.viewHashID = t.hashCode,
            this.view = t,
            this.visible = !0,
            this.addChild(t),
            egret.Tween.removeTweens(this.view),
            n ? (this.view.scaleX = this.view.scaleY = 1, this.view.alpha = 1) : (this.view.scaleX = this.view.scaleY = 0, this.view.alpha = 0, egret.Tween.get(this.view).to({
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            },
            400, egret.Ease.backOut).call(function() {},
            this))
        },
        i.prototype.isBoxClosed = function() {
            return null != this.view ? this.view.isClosed: !0
        },
        i.prototype.removeView = function(t) {
            var n = this;
            if (egret.Tween.removeTweens(this.view), t) this.view.isClosed = !0,
            this.removeChild(this.view),
            this.visible = !1,
            this.view = null,
            this.parent.removeChild(this),
            e();
            else {
                var i = this.view.touchEnabled,
                r = this.view.touchChildren;
                this.view.touchEnabled = !1,
                this.view.touchChildren = !1,
                this.view.isClosed = !0,
                egret.Tween.get(this.view).to({
                    scaleX: 0,
                    scaleY: 0,
                    alpha: 0
                },
                400, egret.Ease.backIn).call(function() {
                    n.removeChild(n.view),
                    n.view.touchEnabled = i,
                    n.view.touchChildren = r,
                    n.visible = !1,
                    n.view = null,
                    n.parent.removeChild(n),
                    e()
                },
                this)
            }
        },
        i
    } (eui.Component);
    t.Box = d,
    __reflect(d.prototype, "two.Box", ["eui.UIComponent", "egret.DisplayObject"]),
    t.showBox = n,
    t.closeTopBox = i,
    t.closeBox = r,
    t.closeAllBoxes = o;
    var f;
    t.initBox = s,
    t.showTipView = a,
    t.removeTipView = h,
    t.addTap = c,
    t.removeTap = u,
    t.addChange = p,
    t.removeChange = l,
    t.removeSelf = _
} (two || (two = {}));
var one; !
function(t) {
    function e(t) {
        for (var e = "",
        n = document.cookie,
        i = n.split("; "), r = 0; r < i.length; r++) {
            var o = i[r].split("=");
            if ("userLoginInfo" == o[0]) {
                e = o[1];
                break
            }
        }
        if (null != e && "" != e) return e = decodeURI(e),
        JSON.parse(e)[t];
        for (var r = 0; r < i.length; r++) {
            var s = i[r].indexOf("="),
            a = i[r].substr(0, s);
            if (t == a) return i[r].substring(s + 1)
        }
        return null
    }
    t.getCookie = e
} (one || (one = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.apply(this, arguments) || this;
            return e.hasEvent = !1,
            e._frames = null,
            e.times = -1,
            e._animation = "",
            e._fileName = "",
            e._frameRate = 24,
            e._vCenter = 0,
            e._hCenter = 0,
            e
        }
        return __extends(e, t),
        e.prototype.created = function() {
            t.prototype.created.call(this),
            this.removeChildren(),
            this.play()
        },
        e.prototype.play = function() {
            if (null != this._frames && "" != this._fileName) {
                this.mc && this.mc.removeEventListener(egret.Event.COMPLETE, this.onComplete, this);
                var t = this.mc = new one.DynamicFrames(this._frames, this._fileName);
                t.play(this._animation, this.times),
                t.frameRate = this._frameRate,
                this.mc.horizontalCenter = this._hCenter,
                this.mc.verticalCenter = this._vCenter,
                this.addChild(t),
                this.mc.addEventListener(egret.Event.COMPLETE, this.onComplete, this),
                this.hasEvent = !0
            }
        },
        e.prototype.added = function() {
            t.prototype.added.call(this),
            this.mc && !this.hasEvent && (this.mc.addEventListener(egret.Event.COMPLETE, this.onComplete, this), this.hasEvent = !0)
        },
        e.prototype.removed = function() {
            t.prototype.removed.call(this),
            this.mc && this.hasEvent && (this.mc.removeEventListener(egret.Event.COMPLETE, this.onComplete, this), this.hasEvent = !1)
        },
        e.prototype.onComplete = function() {
            if (this._totalIdles && this._totalIdles.length > 0) this.times = one.randomInt(1, 3),
            this._animation = this._totalIdles[one.randomInt(0, this._totalIdles.length - 1)],
            this.mc.play(this._animation, this.times);
            else for (var t in this._frames) return this._animation = t,
            this.times = -1,
            void this.mc.play(t, -1)
        },
        Object.defineProperty(e.prototype, "idles", {
            get: function() {
                return this._idles
            },
            set: function(t) {
                this._idles = t,
                this._totalIdles = t.split(",")
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "allFrames", {
            set: function(t) {
                if (t) {
                    var e = t.split(";");
                    this._frames = {};
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n].split(":"),
                        r = i[1].split(",");
                        this._frames[i[0]] = r
                    }
                    this.mc && this._animation && this.mc.play(this._animation, this.times)
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.playAnimation = function(t, e) {
            void 0 === e && (e = 0),
            this._animation = t,
            this.times = e,
            this.mc && this.mc.play(t, e)
        },
        Object.defineProperty(e.prototype, "animation", {
            get: function() {
                return this._animation
            },
            set: function(t) {
                this._animation = t,
                this.times = -1,
                t && this.mc && this.mc.play(t, this.times)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "frames", {
            set: function(t) {
                if (t) {
                    this._animation = "run";
                    var e = t.split(",");
                    this._frames = {
                        run: e
                    }
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "fileName", {
            set: function(t) {
                this._fileName = t,
                t && this.mc && this.mc.changeFileName(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "frameRate", {
            set: function(t) {
                this._frameRate = t,
                this.mc && (this.mc.frameRate = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "vCenter", {
            get: function() {
                return this._vCenter
            },
            set: function(t) {
                this._vCenter = t,
                this.mc && (this.mc.verticalCenter = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "hCenter", {
            get: function() {
                return this._hCenter
            },
            set: function(t) {
                this._hCenter = t,
                this.mc && (this.mc.horizontalCenter = t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } (t.BaseGroup);
    t.EUIMC = e,
    __reflect(e.prototype, "two.EUIMC")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._value = 0,
            e._maximum = 0,
            e
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this._value
            },
            set: function(t) {
                this._value = t,
                this.setView()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "maximum", {
            get: function() {
                return this._maximum
            },
            set: function(t) {
                this._maximum = t,
                this.setView()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setView = function() {
            if (this.gp_bg && this.gp_star) for (var t = 0; t < this.gp_star.numElements; t++) {
                var e = this.gp_star.getChildAt(t);
                e.visible = t == this._value,
                e.includeInLayout = t < this._maximum;
                var n = this.gp_bg.getChildAt(t);
                n.visible = t < this._maximum,
                n.includeInLayout = t < this._maximum
            }
        },
        e.prototype.created = function() {
            t.prototype.created.call(this),
            this.setView()
        },
        e
    } (t.BaseComponent);
    t.Footer = e,
    __reflect(e.prototype, "two.Footer")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this, "RedPoint") || this;
            return e._needNum = !1,
            e._keys = [],
            e.touchEnabled = e.touchChildren = !1,
            e
        }
        return __extends(e, t),
        e._addItem = function(t) {
            this._removeItem(t);
            for (var e = t.getKeys(), n = 0; n < e.length; n++) this.points[e[n]] || (this.points[e[n]] = []),
            this.points[e[n]].push(t);
            this.items[t.hashCode] = e.concat()
        },
        e.setCount = function(t, e) {
            for (var n = t.split("_"), i = this.Red_Counts, r = 0; r < n.length; r++) null == i[n[r]] && (i[n[r]] = {
                count: 0,
                children: {}
            }),
            r == n.length - 1 && (i[n[r]].count = e),
            i = i[n[r]].children;
            this.resetCounts(n, this.Red_Counts[n[0]])
        },
        e.resetCounts = function(t, e) {
            var n = t.concat();
            n.shift();
            var i = 0,
            r = !1;
            for (var o in e.children) r = !0,
            i += this.resetCounts(n, e.children[o]);
            return r ? (e.count = i, i) : e.count
        },
        e._removeItem = function(t) {
            if (this.items[t.hashCode]) {
                for (var e = this.items[t.hashCode], n = 0; n < e.length; n++) if (this.points[e[n]]) {
                    var i = this.points[e[n]].indexOf(t);
                    i >= 0 && this.points[e[n]].splice(i, 1)
                }
                delete this.items[t.hashCode]
            }
        },
        e.setRedPoint = function(t, e) {
            e = 0 >= e ? 0 : e,
            this.setCount(t, e),
            this.resetKeyView(t)
        },
        e.resetKeyView = function(t) {
            for (var e = t.split("_"), n = "", i = 0; i < e.length; i++) if (i > 0 && (n += "_"), n += e[i], this.points[n]) for (var r = 0; r < this.points[n].length; r++) this.points[n][r].resetView()
        },
        e.clearRedPoint = function(t) {
            this.setRedPoint(t, 0)
        },
        e.getRedCount = function(t) {
            for (var e = t.split("_"), n = this.Red_Counts, i = 0; i < e.length; i++) {
                if (null == n[e[i]]) return 0;
                if (i == e.length - 1) return n[e[i]].count;
                n = n[e[i]].children
            }
        },
        e.prototype.added = function() {
            t.prototype.added.call(this),
            e._addItem(this),
            this.resetView()
        },
        e.prototype.removed = function() {
            t.prototype.removed.call(this),
            e._removeItem(this)
        },
        e.prototype.resetView = function() {
            for (var t = 0,
            n = 0; n < this._keys.length; n++) t += e.getRedCount(this._keys[n]);
            this.visible = !0,
            t > 0 ? this.needNum ? this.txt_count.text = t + "": this.txt_count.text = "": this.visible = !1
        },
        Object.defineProperty(e.prototype, "needNum", {
            get: function() {
                return this._needNum
            },
            set: function(t) {
                this._needNum = t
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "keys", {
            get: function() {
                return ""
            },
            set: function(t) {
                this._keys = t.split(","),
                this.txt_count && this.resetView()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.getKeys = function() {
            return this._keys
        },
        e
    } (t.BaseComponent);
    e.Red_Counts = {},
    e.points = {},
    e.items = {},
    t.RedPoint = e,
    __reflect(e.prototype, "two.RedPoint")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            return t.call(this) || this
        }
        return __extends(e, t),
        e.prototype.$updateRenderNode = function() {
            if (this.$texture) {
                var t = this.width / this.$texture.textureWidth,
                e = this.height / this.$texture.textureHeight,
                n = Math.min(t, e),
                i = this.$texture.textureWidth * n,
                r = this.$texture.textureHeight * n,
                o = (this.width - i) / 2 / n,
                s = (this.height - r) / 2 / n;
                egret.sys.BitmapNode.$updateTextureData(this.$renderNode, this.$bitmapData, this.$bitmapX, this.$bitmapY, this.$bitmapWidth, this.$bitmapHeight, this.$offsetX + o, this.$offsetY + s, this.$textureWidth, this.$textureHeight, i, r, this.$sourceWidth, this.$sourceHeight, egret.BitmapFillMode.SCALE, this.$smoothing)
            }
        },
        e
    } (t.CircleImage);
    t.ScaleImage = e,
    __reflect(e.prototype, "two.ScaleImage")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
two; !
function(t) {
    function e() {
        return t.sceneLayer.stage.stageWidth
    }
    function n() {
        return t.sceneLayer.stage.stageHeight
    }
    function i(e) {
        t.sceneLayer = new eui.UILayer,
        e.addChild(t.sceneLayer),
        t.sceneLayer.touchEnabled = !1,
        e.stage.addEventListener(egret.Event.RESIZE, r, null)
    }
    function r() {
        for (var e = (t.sceneLayer.stage.stageHeight, 0); e < _.length; e++) o(_[e].group, _[e].min, _[e].max, _[e].minProps, _[e].maxProps, _[e].isH)
    }
    function o(e, n, i, r, o, s) {
        if (s) {
            var a = t.sceneLayer.stage.stageHeight;
            if (i > a) for (var h in o) e[h] = (o[h] - r[h]) * (a - n) / (i - n) + r[h];
            else for (var h in o) e[h] = o[h]
        } else {
            var c = t.sceneLayer.stage.stageWidth;
            if (i > c) for (var h in o) e[h] = (o[h] - r[h]) * (c - n) / (i - n) + r[h];
            else for (var h in o) e[h] = o[h]
        }
    }
    function s(t, e, n, i, r, s) {
        void 0 === s && (s = !0),
        _.push({
            group: t,
            min: e,
            max: n,
            isH: s,
            minProps: i,
            maxProps: r
        }),
        o(t, e, n, i, r, s)
    }
    function a(t) {
        for (var e = 0; e < _.length; e++) if (_[e].group == t) return void _.splice(e, 1)
    }
    function h(t, e) {
        d[t] = {
            clazz: e
        }
    }
    function c(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (d[t]) {
            var i = d[t],
            r = egret.getDefinitionByName(i.clazz);
            return 0 == e.length ? new r: 1 == e.length ? new r(e[0]) : 2 == e.length ? new r(e[0], e[1]) : 3 == e.length ? new r(e[0], e[1], e[2]) : 4 == e.length ? new r(e[0], e[1], e[2], e[3]) : 5 == e.length ? new r(e[0], e[1], e[2], e[3], e[4]) : 6 == e.length ? new r(e[0], e[1], e[2], e[3], e[4], e[5]) : 7 == e.length ? new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6]) : 8 == e.length ? new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]) : 9 == e.length ? new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]) : 10 == e.length ? new r(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9]) : new r
        }
    }
    function u(e, n) {
        void 0 === n && (n = 0);
        for (var i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
        if (t.currentPageType = e, t.sceneLayer.numChildren > 0) if (0 == n) t.sceneLayer.removeChildren();
        else {
            var o = p(t.sceneLayer.stage, n, t.sceneLayer.stage.stageWidth, t.sceneLayer.stage.stageHeight);
            t.sceneLayer.removeChildren(),
            t.sceneLayer.addChild(o)
        }
        return f = c.apply(this, [e].concat(i)),
        f && (f.touchEnabled = !1, f.percentWidth = f.percentHeight = 100, t.sceneLayer.addChildAt(f, 0)),
        f
    }
    function p(e, n, i, r) {
        function o() {
            t.sceneLayer.touchChildren = !0,
            s && s.parent && s.parent.removeChild(s)
        }
        for (var s = new egret.DisplayObjectContainer,
        a = l(e, i, r), h = 40, c = 5, u = h / c, p = 0; h > p; p++) {
            var _ = i / c,
            d = r / u,
            f = p % c * _,
            m = Math.floor(p / c) * d,
            g = new egret.Bitmap;
            g.texture = a.createTexture("mc_" + p, f, m, _, d),
            g.anchorOffsetX = _ / 2,
            g.anchorOffsetY = d / 2,
            g.x = f + _ / 2,
            g.y = m + d / 2,
            s.addChild(g);
            var v = egret.Tween.get(g);
            switch (n) {
            case 1:
                v.to({
                    scaleX:
                    0,
                    scaleY: 0,
                    alpha: 0,
                    rotation: 359
                },
                800, egret.Ease.circIn);
                break;
            case 2:
                var y = -i;
                p % 2 || (y = 2 * i),
                v.to({
                    x: y,
                    alpha: 0
                },
                800, egret.Ease.circIn);
                break;
            case 3:
                v.to({
                    scaleX:
                    .2,
                    scaleY: 1,
                    alpha: 0,
                    blurFliter: 0
                },
                800, egret.Ease.backInOut);
                break;
            case 4:
                v.to({
                    alpha:
                    0
                },
                900, egret.Ease.circIn);
                break;
            default:
                v.to({
                    scaleX:
                    1,
                    scaleY: 0,
                    alpha: 0
                },
                800, egret.Ease.circIn)
            }
            p == h - 1 && v.call(o, this)
        }
        return t.sceneLayer.touchChildren = !1,
        s
    }
    function l(t, e, n) {
        null == m && (m = new egret.RenderTexture),
        m.drawToTexture(t, new egret.Rectangle(0, 0, e, n));
        var i = new g(m);
        return i
    }
    t.getStageWith = e,
    t.getStageHeight = n,
    t.initScene = i;
    var _ = [];
    t.addResizeMonitor = s,
    t.removeResizeMonitor = a;
    var d = {};
    t.setClassMap = h,
    t.getClassObj = c;
    var f;
    t.changePage = u,
    t.fixedLayer = p;
    var m, g = function() {
        function t(t) {
            this._bitmapX = 0,
            this._bitmapY = 0,
            this.$texture = t
        }
        return t.prototype.createTexture = function(t, e, n, i, r, o, s, a, h) {
            void 0 === o && (o = 0),
            void 0 === s && (s = 0),
            void 0 === a && (a = o + i),
            void 0 === h && (h = s + r),
            "webgl" == egret.Capabilities.renderMode && (n = this.$texture.textureHeight - n - r);
            var c = new egret.Texture;
            return c.bitmapData = this.$texture.bitmapData,
            c.$initData(this._bitmapX + e, this._bitmapY + n, i, r, o, s, a, h, this.$texture.textureWidth, this.$texture.textureHeight),
            c
        },
        t.prototype.dispose = function() {
            this.$texture && this.$texture.dispose()
        },
        t
    } ();
    __reflect(g.prototype, "SpriteSheet")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.maxIndex = 0,
            e._selectIndex = 0,
            e.isUp = !1,
            e.time = 0,
            e.px = 0,
            e.lastIdx = 0,
            e.isMoved = !1,
            e.avg = 0,
            e.count = 0,
            e.index = 0,
            e
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "selectIndex", {
            get: function() {
                return this._selectIndex
            },
            set: function(t) {
                if (this._selectIndex = t, this.index = t, this.viewport) {
                    this.viewport.selectedIndex = t;
                    var e = this.viewport.width;
                    this.viewport.scrollH = e * t
                }
                this.leftArrow && this.rightArrow && (this.leftArrow.visible = !0, this.rightArrow.visible = !0, 0 == t ? this.leftArrow.visible = !1 : t == this.maxIndex && (this.rightArrow.visible = !1))
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.createChildren = function() {
            var e = this;
            t.prototype.createChildren.call(this),
            this.leftArrow && this.leftArrow.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                if (e.viewport) {
                    var t = e.viewport.width;
                    egret.Tween.get(e.viewport).to({
                        scrollH: t * (e.index - 1)
                    },
                    200).call(function() {
                        e.selectIndex--,
                        e.dispatchEventWith(egret.Event.CHANGE)
                    })
                }
            },
            this),
            this.rightArrow && this.rightArrow.addEventListener(egret.TouchEvent.TOUCH_TAP,
            function() {
                if (e.viewport) {
                    var t = e.viewport.width;
                    egret.Tween.get(e.viewport).to({
                        scrollH: t * (e.index + 1)
                    },
                    200).call(function() {
                        e.selectIndex++,
                        e.dispatchEventWith(egret.Event.CHANGE)
                    })
                }
            },
            this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.currentTarget == t.target && e.stage.removeEventListener(egret.TouchEvent.TOUCH_END, e.onEndHandler, e, !0)
            },
            this),
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this, !0),
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,
            function(t) {
                this.isUp = !1,
                this.px = t.stageX,
                this.time = egret.getTimer(),
                this.isMoved = !1
            },
            this, !0),
            egret.callLater(function() {
                egret.callLater(function() {
                    var t = e.viewport.contentWidth,
                    n = e.viewport.width;
                    e.maxIndex = Math.round(t / n) - 1,
                    e.selectIndex = e._selectIndex
                },
                e)
            },
            this)
        },
        e.prototype.onEndHandler = function(t) {
            this.isUp = !0;
            var e = egret.getTimer() - this.time,
            n = this.viewport.contentWidth,
            i = this.viewport.width,
            r = this.viewport.scrollH,
            o = Math.round(r / i),
            s = t.stageX;
            s < this.px && 200 > e && o <= this.lastIdx ? o = this.lastIdx + 1 : s > this.px && 200 > e && o >= this.lastIdx && (o = this.lastIdx - 1);
            var a = this.maxIndex = Math.round(n / i) - 1;
            o = Math.min(a, o),
            o = Math.max(0, o),
            this.lastIdx = o,
            this.index = o;
            var h = i * o - this.viewport.scrollH;
            this.avg = h / 20,
            this.count = 0,
            this.stopAnimation(),
            egret.stopTick(this.onTicker, this),
            egret.startTick(this.onTicker, this)
        },
        e.prototype.onTicker = function(t) {
            if (this.viewport.scrollH += this.avg, this.count++, 20 == this.count) {
                var e = this.viewport.width;
                this.viewport.scrollH = e * this.index,
                egret.stopTick(this.onTicker, this),
                this.selectIndex != this.index && (this.selectIndex = this.index, this.viewport.selectedIndex = this.index, this.dispatchEventWith(egret.Event.CHANGE))
            }
            return ! 1
        },
        e
    } (eui.Scroller);
    t.SelectScroller = e,
    __reflect(e.prototype, "two.SelectScroller")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.__isAdded = !1,
            e.__isCreated = !1,
            e.__isFirst = !0,
            e._type = egret.Sound.MUSIC,
            e.addEventListener(egret.Event.ADDED_TO_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !0, e.__isCreated && e.addTo())
            },
            e),
            e
        }
        return __extends(e, t),
        e.prototype.childrenCreated = function() {
            var e = this;
            t.prototype.childrenCreated.call(this),
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE,
            function(t) {
                t.target == t.currentTarget && (e.__isAdded = !1, e.removed())
            },
            this),
            this.__isCreated = !0,
            this.__isAdded && this.addTo()
        },
        e.prototype.addTo = function() {
            this.__isFirst && this.created(),
            this.__isFirst = !1,
            this.added()
        },
        e.prototype.created = function() {
            this.selected = !!one.soundManager.isOpened(this._type)
        },
        e.prototype.added = function() {
            this.addEventListener(egret.Event.CHANGE, this.onChange, this)
        },
        e.prototype.removed = function() {
            this.removeEventListener(egret.Event.CHANGE, this.onChange, this)
        },
        e.prototype.onChange = function(t) {
            this.selected ? one.soundManager.open(this._type) : one.soundManager.close(this._type)
        },
        Object.defineProperty(e.prototype, "type", {
            get: function() {
                return this._type
            },
            set: function(t) {
                this._type = t
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } (eui.CheckBox);
    t.SoundButton = e,
    __reflect(e.prototype, "two.SoundButton", ["eui.UIComponent", "egret.DisplayObject"])
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._value = 0,
            e._maximum = 0,
            e
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "value", {
            get: function() {
                return this._value
            },
            set: function(t) {
                this._value = t,
                this.setView()
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "maximum", {
            get: function() {
                return this._maximum
            },
            set: function(t) {
                this._maximum = t,
                this.setView()
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.setView = function() {
            if (this.gp_bg && this.gp_star) for (var t = 0; t < this.gp_star.numElements; t++) {
                var e = this.gp_star.getChildAt(t);
                e.visible = t < this._value,
                e.includeInLayout = t < this._maximum;
                var n = this.gp_bg.getChildAt(t);
                n.visible = t < this._maximum,
                n.includeInLayout = t < this._maximum
            }
        },
        e.prototype.created = function() {
            t.prototype.created.call(this),
            this.setView()
        },
        e
    } (t.BaseComponent);
    t.Stars = e,
    __reflect(e.prototype, "two.Stars")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            var e = t.apply(this, arguments) || this;
            return e._selectedIndex = 0,
            e
        }
        return __extends(e, t),
        e.prototype.created = function() {
            var e = this;
            t.prototype.created.call(this),
            this.btns = [];
            for (var n = 0; n < this.numElements; n++) this.btns.push(this.getElementAt(n)),
            this.getElementAt(n).addEventListener(egret.Event.CHANGE,
            function(t) {
                e.setChoose(t.currentTarget),
                e.dispatchEvent(t)
            },
            null);
            this.setChoose(this.getElementAt(this._selectedIndex))
        },
        e.prototype.setChoose = function(t) {
            if (this.btns) {
                this._selectedIndex = this.btns.indexOf(t);
                for (var e = 0; e < this._selectedIndex; e++) this.addChild(this.btns[e]),
                this.btns[e].selected = !1;
                for (var e = this.numChildren - 1; e > this._selectedIndex; e--) this.addChild(this.btns[e]),
                this.btns[e].selected = !1;
                this.addChild(t),
                t.selected = !0
            }
        },
        Object.defineProperty(e.prototype, "selectedIndex", {
            get: function() {
                return this._selectedIndex
            },
            set: function(t) {
                this._selectedIndex = t,
                this.btns && this.setChoose(this.btns[t])
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "selectedItem", {
            get: function() {
                return this.btns ? this.btns[this._selectedIndex] : null
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    } (t.BaseGroup);
    t.TabGroup = e,
    __reflect(e.prototype, "two.TabGroup")
} (two || (two = {}));
var __reflect = this && this.__reflect ||
function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
},
__extends = this && this.__extends ||
function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
},
two; !
function(t) {
    var e = function(t) {
        function e() {
            return t.apply(this, arguments) || this
        }
        return __extends(e, t),
        Object.defineProperty(e.prototype, "runningProps", {
            set: function(t) {
                t = t.replace(/'/g, '"'),
                this.runObj = JSON.parse(t)
            },
            enumerable: !0,
            configurable: !0
        }),
        e.prototype.added = function() {
            if (t.prototype.added.call(this), this.runObj) for (var e = egret.Tween.get(this, {
                loop: !0
            }), n = 0; n < this.runObj.length; n++) switch (this.runObj[n].type) {
            case 1:
                e.set(this.runObj[n].props);
                break;
            case 2:
                e.to(this.runObj[n].props, this.runObj[n].time);
                break;
            case 3:
                e.wait(this.runObj[n].time)
            }
        },
        e.prototype.removed = function() {
            t.prototype.removed.call(this),
            egret.Tween.removeTweens(this)
        },
        e
    } (t.BaseGroup);
    t.TweenGroup = e,
    __reflect(e.prototype, "two.TweenGroup")
} (two || (two = {}));
var two; !
function(t) {
    function e(e) {
        n(e, t.sceneLayer),
        n(e, t.boxLayer)
    }
    function n(t, e) {
        for (var i = 0; i < e.numChildren; i++) {
            var r = e.getChildAt(i);
            r.isClosed || (r.numChildren && n(t, r), r.refreshApi && r.refreshApi(t))
        }
    }
    function i(e, n) {
        r(e, n, t.sceneLayer),
        r(e, n, t.boxLayer)
    }
    function r(t, e, n) {
        for (var i = 0; i < n.numChildren; i++) {
            var o = n.getChildAt(i);
            o.isClosed || (o.numChildren && r(t, e, o), o.refreshApi && o.refreshData(t, e))
        }
    }
    t.onRefreshApi = e,
    t.onRefreshData = i
} (two || (two = {}));