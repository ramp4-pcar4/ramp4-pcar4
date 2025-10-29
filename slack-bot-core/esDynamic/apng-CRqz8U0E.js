import { v as M, a8 as G, aM as S } from "./main-CmejC-so.js";
var I, R = { exports: {} };
I = function() {
  return function(b) {
    var l = {};
    function s(a) {
      if (l[a]) return l[a].exports;
      var h = l[a] = { exports: {}, id: a, loaded: !1 };
      return b[a].call(h.exports, h, h.exports, s), h.loaded = !0, h.exports;
    }
    return s.m = b, s.c = l, s.p = "", s(0);
  }([function(b, l, s) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.isNotPNG = n, l.isNotAPNG = r, l.default = t;
    var a = f(s(1)), h = s(2);
    function f(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var y = new Error("Not a PNG"), e = new Error("Not an animated PNG");
    function n(u) {
      return u === y;
    }
    function r(u) {
      return u === e;
    }
    var i = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
    function t(u) {
      var g = new Uint8Array(u);
      if (Array.prototype.some.call(i, function(L, w) {
        return L !== g[w];
      })) return y;
      var _ = !1;
      if (o(g, function(L) {
        return !(_ = L === "acTL");
      }), !_) return e;
      var d = [], O = [], P = null, c = null, D = 0, E = new h.APNG();
      if (o(g, function(L, w, p, U) {
        var F = new DataView(w.buffer);
        switch (L) {
          case "IHDR":
            P = w.subarray(p + 8, p + 8 + U), E.width = F.getUint32(p + 8), E.height = F.getUint32(p + 12);
            break;
          case "acTL":
            E.numPlays = F.getUint32(p + 8 + 4);
            break;
          case "fcTL":
            c && (E.frames.push(c), D++), (c = new h.Frame()).width = F.getUint32(p + 8 + 4), c.height = F.getUint32(p + 8 + 8), c.left = F.getUint32(p + 8 + 12), c.top = F.getUint32(p + 8 + 16);
            var C = F.getUint16(p + 8 + 20), k = F.getUint16(p + 8 + 22);
            k === 0 && (k = 100), c.delay = 1e3 * C / k, c.delay <= 10 && (c.delay = 100), E.playTime += c.delay, c.disposeOp = F.getUint8(p + 8 + 24), c.blendOp = F.getUint8(p + 8 + 25), c.dataParts = [], D === 0 && c.disposeOp === 2 && (c.disposeOp = 1);
            break;
          case "fdAT":
            c && c.dataParts.push(w.subarray(p + 8 + 4, p + 8 + U));
            break;
          case "IDAT":
            c && c.dataParts.push(w.subarray(p + 8, p + 8 + U));
            break;
          case "IEND":
            O.push(x(w, p, 12 + U));
            break;
          default:
            d.push(x(w, p, 12 + U));
        }
      }), c && E.frames.push(c), E.frames.length == 0) return e;
      var T = new Blob(d), j = new Blob(O);
      return E.frames.forEach(function(L) {
        var w = [];
        w.push(i), P.set(A(L.width), 0), P.set(A(L.height), 4), w.push(N("IHDR", P)), w.push(T), L.dataParts.forEach(function(p) {
          return w.push(N("IDAT", p));
        }), w.push(j), L.imageData = new Blob(w, { type: "image/png" }), delete L.dataParts, w = null;
      }), E;
    }
    function o(u, g) {
      var _ = new DataView(u.buffer), d = 8, O = void 0, P = void 0, c = void 0;
      do
        P = _.getUint32(d), c = g(O = v(u, d + 4, 4), u, d, P), d += 12 + P;
      while (c !== !1 && O != "IEND" && d < u.length);
    }
    function v(u, g, _) {
      var d = Array.prototype.slice.call(u.subarray(g, g + _));
      return String.fromCharCode.apply(String, d);
    }
    function m(u) {
      for (var g = new Uint8Array(u.length), _ = 0; _ < u.length; _++) g[_] = u.charCodeAt(_);
      return g;
    }
    function x(u, g, _) {
      var d = new Uint8Array(_);
      return d.set(u.subarray(g, g + _)), d;
    }
    var N = function(u, g) {
      var _ = u.length + g.length, d = new Uint8Array(_ + 8), O = new DataView(d.buffer);
      O.setUint32(0, g.length), d.set(m(u), 4), d.set(g, 8);
      var P = (0, a.default)(d, 4, _);
      return O.setUint32(_ + 4, P), d;
    }, A = function(u) {
      return new Uint8Array([u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u]);
    };
  }, function(b, l) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.default = function(y) {
      for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = -1, r = e, i = e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : y.length - e); r < i; r++) n = n >>> 8 ^ s[255 & (n ^ y[r])];
      return -1 ^ n;
    };
    for (var s = new Uint32Array(256), a = 0; a < 256; a++) {
      for (var h = a, f = 0; f < 8; f++) h = 1 & h ? 3988292384 ^ h >>> 1 : h >>> 1;
      s[a] = h;
    }
  }, function(b, l, s) {
    Object.defineProperty(l, "__esModule", { value: !0 }), l.Frame = l.APNG = void 0;
    var a = /* @__PURE__ */ function() {
      function e(n, r) {
        for (var i = 0; i < r.length; i++) {
          var t = r[i];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, t.key, t);
        }
      }
      return function(n, r, i) {
        return r && e(n.prototype, r), i && e(n, i), n;
      };
    }(), h = f(s(3));
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function y(e, n) {
      if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    l.APNG = function() {
      function e() {
        y(this, e), this.width = 0, this.height = 0, this.numPlays = 0, this.playTime = 0, this.frames = [];
      }
      return a(e, [{ key: "createImages", value: function() {
        return Promise.all(this.frames.map(function(n) {
          return n.createImage();
        }));
      } }, { key: "getPlayer", value: function(n) {
        var r = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        return this.createImages().then(function() {
          return new h.default(r, n, i);
        });
      } }]), e;
    }(), l.Frame = function() {
      function e() {
        y(this, e), this.left = 0, this.top = 0, this.width = 0, this.height = 0, this.delay = 0, this.disposeOp = 0, this.blendOp = 0, this.imageData = null, this.imageElement = null;
      }
      return a(e, [{ key: "createImage", value: function() {
        var n = this;
        return this.imageElement ? Promise.resolve() : new Promise(function(r, i) {
          var t = URL.createObjectURL(n.imageData);
          n.imageElement = document.createElement("img"), n.imageElement.onload = function() {
            URL.revokeObjectURL(t), r();
          }, n.imageElement.onerror = function() {
            URL.revokeObjectURL(t), n.imageElement = null, i(new Error("Image creation error"));
          }, n.imageElement.src = t;
        });
      } }]), e;
    }();
  }, function(b, l, s) {
    Object.defineProperty(l, "__esModule", { value: !0 });
    var a = /* @__PURE__ */ function() {
      function r(i, t) {
        for (var o = 0; o < t.length; o++) {
          var v = t[o];
          v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(i, v.key, v);
        }
      }
      return function(i, t, o) {
        return t && r(i.prototype, t), o && r(i, o), i;
      };
    }();
    function h(r) {
      return r && r.__esModule ? r : { default: r };
    }
    function f(r, i) {
      if (!(r instanceof i)) throw new TypeError("Cannot call a class as a function");
    }
    function y(r, i) {
      if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !i || typeof i != "object" && typeof i != "function" ? r : i;
    }
    function e(r, i) {
      if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof i);
      r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
    }
    var n = function(r) {
      function i(t, o, v) {
        f(this, i);
        var m = y(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
        return m.playbackRate = 1, m._currentFrameNumber = 0, m._ended = !1, m._paused = !0, m._numPlays = 0, m._apng = t, m.context = o, m.stop(), v && m.play(), m;
      }
      return e(i, r), a(i, [{ key: "renderNextFrame", value: function() {
        this._currentFrameNumber = (this._currentFrameNumber + 1) % this._apng.frames.length, this._currentFrameNumber === this._apng.frames.length - 1 && (this._numPlays++, this._apng.numPlays !== 0 && this._numPlays >= this._apng.numPlays && (this._ended = !0, this._paused = !0)), this._prevFrame && this._prevFrame.disposeOp == 1 ? this.context.clearRect(this._prevFrame.left, this._prevFrame.top, this._prevFrame.width, this._prevFrame.height) : this._prevFrame && this._prevFrame.disposeOp == 2 && this.context.putImageData(this._prevFrameData, this._prevFrame.left, this._prevFrame.top);
        var t = this.currentFrame;
        this._prevFrame = t, this._prevFrameData = null, t.disposeOp == 2 && (this._prevFrameData = this.context.getImageData(t.left, t.top, t.width, t.height)), t.blendOp == 0 && this.context.clearRect(t.left, t.top, t.width, t.height), this.context.drawImage(t.imageElement, t.left, t.top), this.emit("frame", this._currentFrameNumber), this._ended && this.emit("end");
      } }, { key: "play", value: function() {
        var t = this;
        this.emit("play"), this._ended && this.stop(), this._paused = !1;
        var o = performance.now() + this.currentFrame.delay / this.playbackRate, v = function m(x) {
          if (!t._ended && !t._paused) {
            if (x >= o) {
              for (; x - o >= t._apng.playTime / t.playbackRate; ) o += t._apng.playTime / t.playbackRate, t._numPlays++;
              do
                t.renderNextFrame(), o += t.currentFrame.delay / t.playbackRate;
              while (!t._ended && x > o);
            }
            requestAnimationFrame(m);
          }
        };
        requestAnimationFrame(v);
      } }, { key: "pause", value: function() {
        this._paused || (this.emit("pause"), this._paused = !0);
      } }, { key: "stop", value: function() {
        this.emit("stop"), this._numPlays = 0, this._ended = !1, this._paused = !0, this._currentFrameNumber = -1, this.context.clearRect(0, 0, this._apng.width, this._apng.height), this.renderNextFrame();
      } }, { key: "currentFrameNumber", get: function() {
        return this._currentFrameNumber;
      } }, { key: "currentFrame", get: function() {
        return this._apng.frames[this._currentFrameNumber];
      } }, { key: "paused", get: function() {
        return this._paused;
      } }, { key: "ended", get: function() {
        return this._ended;
      } }]), i;
    }(h(s(4)).default);
    l.default = n;
  }, function(b, l) {
    function s() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }
    function a(e) {
      return typeof e == "function";
    }
    function h(e) {
      return typeof e == "number";
    }
    function f(e) {
      return typeof e == "object" && e !== null;
    }
    function y(e) {
      return e === void 0;
    }
    b.exports = s, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._maxListeners = void 0, s.defaultMaxListeners = 10, s.prototype.setMaxListeners = function(e) {
      if (!h(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
      return this._maxListeners = e, this;
    }, s.prototype.emit = function(e) {
      var n, r, i, t, o, v;
      if (this._events || (this._events = {}), e === "error" && (!this._events.error || f(this._events.error) && !this._events.error.length)) {
        if ((n = arguments[1]) instanceof Error) throw n;
        var m = new Error('Uncaught, unspecified "error" event. (' + n + ")");
        throw m.context = n, m;
      }
      if (y(r = this._events[e])) return !1;
      if (a(r)) switch (arguments.length) {
        case 1:
          r.call(this);
          break;
        case 2:
          r.call(this, arguments[1]);
          break;
        case 3:
          r.call(this, arguments[1], arguments[2]);
          break;
        default:
          t = Array.prototype.slice.call(arguments, 1), r.apply(this, t);
      }
      else if (f(r)) for (t = Array.prototype.slice.call(arguments, 1), i = (v = r.slice()).length, o = 0; o < i; o++) v[o].apply(this, t);
      return !0;
    }, s.prototype.addListener = function(e, n) {
      var r;
      if (!a(n)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, a(n.listener) ? n.listener : n), this._events[e] ? f(this._events[e]) ? this._events[e].push(n) : this._events[e] = [this._events[e], n] : this._events[e] = n, f(this._events[e]) && !this._events[e].warned && (r = y(this._maxListeners) ? s.defaultMaxListeners : this._maxListeners) && r > 0 && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), typeof console.trace == "function" && console.trace()), this;
    }, s.prototype.on = s.prototype.addListener, s.prototype.once = function(e, n) {
      if (!a(n)) throw TypeError("listener must be a function");
      var r = !1;
      function i() {
        this.removeListener(e, i), r || (r = !0, n.apply(this, arguments));
      }
      return i.listener = n, this.on(e, i), this;
    }, s.prototype.removeListener = function(e, n) {
      var r, i, t, o;
      if (!a(n)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[e]) return this;
      if (t = (r = this._events[e]).length, i = -1, r === n || a(r.listener) && r.listener === n) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, n);
      else if (f(r)) {
        for (o = t; o-- > 0; ) if (r[o] === n || r[o].listener && r[o].listener === n) {
          i = o;
          break;
        }
        if (i < 0) return this;
        r.length === 1 ? (r.length = 0, delete this._events[e]) : r.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, n);
      }
      return this;
    }, s.prototype.removeAllListeners = function(e) {
      var n, r;
      if (!this._events) return this;
      if (!this._events.removeListener) return arguments.length === 0 ? this._events = {} : this._events[e] && delete this._events[e], this;
      if (arguments.length === 0) {
        for (n in this._events) n !== "removeListener" && this.removeAllListeners(n);
        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }
      if (a(r = this._events[e])) this.removeListener(e, r);
      else if (r) for (; r.length; ) this.removeListener(e, r[r.length - 1]);
      return delete this._events[e], this;
    }, s.prototype.listeners = function(e) {
      return this._events && this._events[e] ? a(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
    }, s.prototype.listenerCount = function(e) {
      if (this._events) {
        var n = this._events[e];
        if (a(n)) return 1;
        if (n) return n.length;
      }
      return 0;
    }, s.listenerCount = function(e, n) {
      return e.listenerCount(n);
    };
  }]);
}, R.exports = I();
const V = M(R.exports);
async function H(b, l) {
  const s = V(b);
  if (s instanceof Error) throw s;
  await s.createImages(), G(l);
  const { frames: a, width: h, height: f } = s, y = document.createElement("canvas");
  y.width = h, y.height = f;
  const e = y.getContext("2d", { willReadFrequently: !0 }), n = [], r = [];
  let i = 0;
  for (const t of a) {
    const o = S(t.delay || 100);
    r.push(o), i += o;
    const v = t.imageElement;
    t.blendOp === 0 ? e.globalCompositeOperation = "copy" : e.globalCompositeOperation = "source-over";
    const m = t.disposeOp === 2 ? e.getImageData(t.left, t.top, t.width, t.height) : void 0;
    e.drawImage(v, t.left, t.top);
    const x = e.getImageData(0, 0, h, f);
    n.push(x), t.disposeOp === 0 || (t.disposeOp === 1 ? e.clearRect(t.left, t.top, t.width, t.height) : t.disposeOp === 2 && e.putImageData(m, t.left, t.top));
  }
  return { frameCount: a.length, duration: i, frameDurations: r, getFrame: (t) => n[t], width: h, height: f };
}
const q = [137, 80, 78, 71, 13, 10, 26, 10];
function B(b) {
  const l = new Uint8Array(b);
  return !q.some((s, a) => s !== l[a]);
}
function z(b) {
  if (!B(b)) return !1;
  const l = new DataView(b), s = new Uint8Array(b);
  let a, h = 8;
  do {
    const f = l.getUint32(h);
    if (a = String.fromCharCode.apply(String, Array.prototype.slice.call(s.subarray(h + 4, h + 8))), a === "acTL") return !0;
    h += 12 + f;
  } while (a !== "IEND" && h < s.length);
  return !1;
}
export {
  z as isAnimatedPNG,
  B as isPNG,
  H as parseApng
};
//# sourceMappingURL=apng-CRqz8U0E.js.map
