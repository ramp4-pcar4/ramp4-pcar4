import { eP as ee } from "./main-DhLeoxL5.js";
class f {
  constructor(e) {
    Object.defineProperty(this, "_value", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._value = e;
  }
  get value() {
    return this._value / 100;
  }
  get percent() {
    return this._value;
  }
  toString() {
    return this._value + "%";
  }
  interpolate(e, t) {
    return e + this.value * (t - e);
  }
  static normalize(e, t, i) {
    return e instanceof f ? e : new f(t === i ? 0 : 100 * Math.min(Math.max(1 / (i - t) * (e - t), 0), 1));
  }
}
function ke(s) {
  return new f(s);
}
ke(0);
const Je = ke(100), qe = ke(50);
function Oe(s) {
  return Number(s) !== s;
}
function Qe(s) {
  return {}.toString.call(s);
}
function _e(s) {
  if (s != null && !g(s)) {
    let e = Number(s);
    return Oe(e) && Ne(s) && s != "" ? _e(s.replace(/[^0-9.\-]+/g, "")) : e;
  }
  return s;
}
function et(s) {
  if (me(s)) return new Date(s);
  if (g(s)) return new Date(s);
  {
    let e = Number(s);
    return g(e) ? new Date(e) : new Date(s);
  }
}
function Ft(s) {
  if (Oe(s)) return "NaN";
  if (s === 1 / 0) return "Infinity";
  if (s === -1 / 0) return "-Infinity";
  if (s === 0 && 1 / s == -1 / 0) return "-0";
  let e = s < 0;
  s = Math.abs(s);
  let t, i = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + s), r = i[1], a = i[2] || "";
  if (i[3] === void 0) t = a === "" ? r : r + "." + a;
  else {
    let n = +i[3];
    if (s < 1)
      t = "0." + je("0", n - 1) + r + a;
    else {
      let o = n - a.length;
      t = o === 0 ? r + a : o < 0 ? r + a.slice(0, o) + "." + a.slice(o) : r + a + je("0", o);
    }
  }
  return e ? "-" + t : t;
}
function je(s, e) {
  return new Array(e + 1).join(s);
}
function me(s) {
  return Qe(s) === "[object Date]";
}
function Ne(s) {
  return typeof s == "string";
}
function g(s) {
  return typeof s == "number" && Number(s) == s;
}
function Re(s) {
  return typeof s == "object" && s !== null;
}
const Ee = "__§§§__", Wt = "__§§§§__";
function se(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i) if (s[i] === e) return i;
  return -1;
}
function tt(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i) if (e(s[i])) return !0;
  return !1;
}
function Vt(s, e) {
  const t = s.length, i = new Array(t);
  for (let r = 0; r < t; ++r) i[r] = e(s[r], r);
  return i;
}
function _(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i) e(s[i], i);
}
function V(s, e) {
  let t = s.length;
  for (; t > 0; ) --t, e(s[t], t);
}
function Ut(s, e) {
  const t = s.length;
  for (let i = 0; i < t && e(s[i], i); ++i) ;
}
function Fe(s, e) {
  let t = !1, i = 0;
  for (; ; ) {
    if (i = s.indexOf(e, i), i === -1) return t;
    t = !0, s.splice(i, 1);
  }
}
function O(s, e) {
  let t = s.indexOf(e);
  return t !== -1 && (s.splice(t, 1), !0);
}
function Kt(s, e, t) {
  let i = se(s, e);
  i !== -1 && fe(s, i), s.push(e);
}
function Ce(s, e) {
  s.indexOf(e) === -1 && s.push(e);
}
function Gt(s) {
  const e = s.length, t = new Array(e);
  for (let i = 0; i < e; ++i) t[i] = s[i];
  return t;
}
function le(s, e, t) {
  s.splice(e, 0, t);
}
function fe(s, e) {
  s.splice(e, 1);
}
function We(s, e) {
  const t = s.length;
  for (let i = 0; i < t; ++i) if (e(s[i], i)) return i;
  return -1;
}
function it(s, e) {
  let t = s.length;
  for (; t > 0; ) if (--t, e(s[t], t)) return t;
  return -1;
}
function st(s, e) {
  const t = We(s, e);
  if (t !== -1) return s[t];
}
function rt(s, e) {
  const t = it(s, e);
  if (t !== -1) return s[t];
}
function at(s, e) {
  let t = 0, i = s.length, r = !1;
  for (; t < i; ) {
    const a = t + i >> 1, n = e(s[a]);
    n < 0 ? t = a + 1 : n === 0 ? (r = !0, t = a + 1) : i = a;
  }
  return { found: r, index: r ? t - 1 : t };
}
function nt(s, e) {
  let t = 0, i = s.length, r = !1;
  for (; t < i; ) {
    const a = t + i >> 1, n = e(s[a]);
    n < 0 ? t = a + 1 : (n === 0 && (r = !0), i = a);
  }
  return { found: r, index: t };
}
function zt(s, e) {
  let t = s.length;
  for (; t > 0; ) --t, e(s[t]) || s.splice(t, 1);
}
function T(s) {
  return Object.keys(s);
}
function ot(s, e) {
  return T(s).sort(e);
}
function Yt(s) {
  return Object.assign({}, s);
}
function y(s, e) {
  T(s).forEach((t) => {
    e(t, s[t]);
  });
}
function Xt(s, e) {
  for (let t in s) if (ht(s, t) && !e(t, s[t])) break;
}
function ht(s, e) {
  return {}.hasOwnProperty.call(s, e);
}
class Ve {
  constructor() {
    Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposed = !1;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}
class P {
  constructor(e) {
    Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dispose", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposed = !1, this._dispose = e;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}
class $t extends Ve {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  _dispose() {
    _(this._disposers, (e) => {
      e.dispose();
    });
  }
}
class k extends Ve {
  constructor(e) {
    super(), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._disposers = e;
  }
  _dispose() {
    _(this._disposers, (e) => {
      e.dispose();
    });
  }
  get disposers() {
    return this._disposers;
  }
}
class lt extends P {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_counter", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  increment() {
    return ++this._counter, new P(() => {
      --this._counter, this._counter === 0 && this.dispose();
    });
  }
}
function Zt(s) {
  s.parentNode && s.parentNode.removeChild(s);
}
function Ue(s, e, t, i) {
  return s.addEventListener(e, t, i || !1), new P(() => {
    s.removeEventListener(e, t, i || !1);
  });
}
function Jt(s) {
  return Ue(window, "resize", (e) => {
    s();
  });
}
function de(s) {
  switch (s) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return !1;
}
function ue(s) {
  return s.pointerId || 0;
}
function qt() {
  if (document.activeElement && document.activeElement != document.body) if (document.activeElement.blur) document.activeElement.blur();
  else {
    let s = document.createElement("button");
    s.style.position = "fixed", s.style.top = "0px", s.style.left = "-10000px", document.body.appendChild(s), s.focus(), s.blur(), document.body.removeChild(s);
  }
}
function Qt(s) {
  s && s.focus();
}
function ei(s) {
  if (de("pointerevents")) return s;
  if (de("touchevents")) switch (s) {
    case "pointerover":
    case "pointerdown":
      return "touchstart";
    case "pointerout":
    case "pointerleave":
    case "pointerup":
      return "touchend";
    case "pointermove":
      return "touchmove";
    case "click":
      return "click";
    case "dblclick":
      return "dblclick";
  }
  else if (de("mouseevents")) switch (s) {
    case "pointerover":
      return "mouseover";
    case "pointerout":
      return "mouseout";
    case "pointerleave":
      return "mouseleave";
    case "pointerdown":
      return "mousedown";
    case "pointermove":
      return "mousemove";
    case "pointerup":
      return "mouseup";
    case "click":
      return "click";
    case "dblclick":
      return "dblclick";
  }
  return s;
}
function Me(s) {
  if (typeof Touch < "u" && s instanceof Touch) return !0;
  if (typeof PointerEvent < "u" && s instanceof PointerEvent && s.pointerType != null) switch (s.pointerType) {
    case "touch":
    case "pen":
    case 2:
      return !0;
    case "mouse":
    case 4:
      return !1;
    default:
      return !(s instanceof MouseEvent);
  }
  else if (s.type != null && s.type.match(/^mouse/)) return !1;
  return !0;
}
function ti(s, e, t) {
  s.style[e] = t;
}
function ii(s, e) {
  return s.style[e];
}
function si(s) {
  if (s.composedPath) {
    const e = s.composedPath();
    return e.length === 0 ? null : e[0];
  }
  return s.target;
}
function dt(s, e) {
  let t = e;
  for (; ; ) {
    if (s === t) return !0;
    if (t.parentNode === null) {
      if (t.host == null) return !1;
      t = t.host;
    } else t = t.parentNode;
  }
}
function ut(s, e) {
  return s.target && dt(e.root.dom, s.target);
}
function ri(s, e) {
  s.style.pointerEvents = e ? "auto" : "none";
}
function pt() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function ai() {
  return pt() ? 1 : void 0;
}
function M(s, e) {
  return g(s) ? s : s != null && g(s.value) && g(e) ? e * s.value : 0;
}
function ni(s) {
  let e = ("" + s).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return e ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0;
}
function pe(s, e = 0, t = "0") {
  return typeof s != "string" && (s = s.toString()), e > s.length ? Array(e - s.length + 1).join(t) + s : s;
}
function ct(s) {
  return s.replace(/^[\s]*/, "");
}
function gt(s) {
  return s.replace(/[\s]*$/, "");
}
function be(s) {
  return ct(gt(s));
}
function _t(s, e, t = !1, i = "...") {
  if (s.length > e) {
    let r = e - 1;
    for (; r >= 0 && s.charAt(r).match(/\w/); ) r--;
    return r >= 0 && t == 0 ? s.substring(0, r + 1) + "..." : s.substring(0, e) + i;
  }
  return s;
}
function oi(s) {
  return s.replace(/\/(date|number|duration)$/i, "");
}
function hi(s) {
  return s && s.replace(/<[^>]*>/g, "");
}
function li(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function di(s, e = !1) {
  const t = new Date(s.getFullYear(), 0, 0), i = s.getTime() - t.getTime() + 60 * (t.getTimezoneOffset() - s.getTimezoneOffset()) * 1e3;
  return Math.floor(i / 864e5);
}
function Be(s, e = !1) {
  const t = new Date(Date.UTC(s.getFullYear(), s.getMonth(), s.getDate())), i = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - i);
  const r = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil(((t.getTime() - r.getTime()) / 864e5 + 1) / 7);
}
function ui(s, e = !1) {
  const t = new Date(Date.UTC(s.getFullYear(), s.getMonth(), s.getDate())), i = t.getUTCDay() || 7;
  return t.setUTCDate(t.getUTCDate() + 4 - i), new Date(Date.UTC(t.getUTCFullYear(), 0, 1)).getFullYear();
}
function pi(s, e = !1) {
  const t = Be(new Date(s.getFullYear(), s.getMonth(), 1), e);
  let i = Be(s, e);
  return i == 1 && (i = 53), i - t + 1;
}
function ci(s, e, t = 1, i = !1) {
  let r = new Date(e, 0, 4, 0, 0, 0, 0);
  return i && r.setUTCFullYear(e), 7 * s + t - ((r.getDay() || 7) + 3);
}
function gi(s, e) {
  return s > 12 ? s -= 12 : s === 0 && (s = 12), e != null ? s + (e - 1) : s;
}
function _i(s, e = !1, t = !1, i = !1, r) {
  if (i) return e ? "Coordinated Universal Time" : "UTC";
  if (r) {
    const o = s.toLocaleString("en-US", { timeZone: r });
    return be(s.toLocaleString("en-US", { timeZone: r, timeZoneName: e ? "long" : "short" }).substr(o.length));
  }
  let a = s.toLocaleString("UTC"), n = s.toLocaleString("UTC", { timeZoneName: e ? "long" : "short" }).substr(a.length);
  return t === !1 && (n = n.replace(/ (standard|daylight|summer|winter) /i, " ")), be(n);
}
function mi(s) {
  const e = new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0)), t = new Date(e.toLocaleString("en-US", { timeZone: "UTC" }));
  return (new Date(e.toLocaleString("en-US", { timeZone: s })).getTime() - t.getTime()) / 6e4 * -1;
}
function fi(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function Ke(s) {
  let e, t, i, r = s.h, a = s.s, n = s.l;
  if (a == 0) e = t = i = n;
  else {
    let o = function(d, p, u) {
      return u < 0 && (u += 1), u > 1 && (u -= 1), u < 0.16666666666666666 ? d + 6 * (p - d) * u : u < 0.5 ? p : u < 0.6666666666666666 ? d + (p - d) * (0.6666666666666666 - u) * 6 : d;
    }, h = n < 0.5 ? n * (1 + a) : n + a - n * a, l = 2 * n - h;
    e = o(l, h, r + 1 / 3), t = o(l, h, r), i = o(l, h, r - 1 / 3);
  }
  return { r: Math.round(255 * e), g: Math.round(255 * t), b: Math.round(255 * i) };
}
function Ge(s) {
  let e = s.r / 255, t = s.g / 255, i = s.b / 255, r = Math.max(e, t, i), a = Math.min(e, t, i), n = 0, o = 0, h = (r + a) / 2;
  if (r === a) n = o = 0;
  else {
    let l = r - a;
    switch (o = h > 0.5 ? l / (2 - r - a) : l / (r + a), r) {
      case e:
        n = (t - i) / l + (t < i ? 6 : 0);
        break;
      case t:
        n = (i - e) / l + 2;
        break;
      case i:
        n = (e - t) / l + 4;
    }
    n /= 6;
  }
  return { h: n, s: o, l: h };
}
function mt(s, e) {
  return s && { r: Math.max(0, Math.min(255, s.r + te(s.r, e))), g: Math.max(0, Math.min(255, s.g + te(s.g, e))), b: Math.max(0, Math.min(255, s.b + te(s.b, e))), a: s.a };
}
function te(s, e) {
  let t = e > 0 ? 255 - s : s;
  return Math.round(t * e);
}
function ft(s, e) {
  if (s) {
    let t = te(Math.min(Math.max(s.r, s.g, s.b), 230), e);
    return { r: Math.max(0, Math.min(255, Math.round(s.r + t))), g: Math.max(0, Math.min(255, Math.round(s.g + t))), b: Math.max(0, Math.min(255, Math.round(s.b + t))), a: s.a };
  }
  return s;
}
function Ae(s) {
  return (299 * s.r + 587 * s.g + 114 * s.b) / 1e3 >= 128;
}
function bt(s, e) {
  if (s === void 0 || e == 1) return s;
  let t = Ge(s);
  return t.s = e, Ke(t);
}
function vt(s, e = { r: 255, g: 255, b: 255 }, t = { r: 255, g: 255, b: 255 }) {
  let i = e, r = t;
  return Ae(t) && (i = t, r = e), Ae(s) ? r : i;
}
function bi(s, e) {
  return s || (s = []), [...s, ...e].filter((t, i, r) => r.indexOf(t) === i);
}
function vi(s, e) {
  return !!e && s.left == e.left && s.right == e.right && s.top == e.top && s.bottom == e.bottom;
}
function ze(s) {
  return s[0] === "#" && (s = s.substr(1)), s.length == 3 && (s = s[0].repeat(2) + s[1].repeat(2) + s[2].repeat(2)), parseInt(s, 16);
}
function yt(s) {
  let e = (s = s.replace(/[ ]/g, "")).match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (e) e.push("1");
  else if (e = s.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i), !e) return 0;
  let t = "";
  for (let i = 1; i <= 3; i++) {
    let r = parseInt(e[i]).toString(16);
    r.length == 1 && (r = "0" + r), t += r;
  }
  return ze(t);
}
function yi(s) {
  return v.fromAny(s);
}
class v {
  constructor(e) {
    Object.defineProperty(this, "_hex", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._hex = 0 | e;
  }
  get hex() {
    return this._hex;
  }
  get r() {
    return this._hex >>> 16;
  }
  get g() {
    return this._hex >> 8 & 255;
  }
  get b() {
    return 255 & this._hex;
  }
  toCSS(e = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + e + ")";
  }
  toCSSHex() {
    return "#" + pe(this.r.toString(16), 2) + pe(this.g.toString(16), 2) + pe(this.b.toString(16), 2);
  }
  toHSL(e = 1) {
    return Ge({ r: this.r, g: this.g, b: this.b, a: e });
  }
  static fromHSL(e, t, i) {
    const r = Ke({ h: e, s: t, l: i });
    return this.fromRGB(r.r, r.g, r.b);
  }
  toString() {
    return this.toCSSHex();
  }
  static fromHex(e) {
    return new v(e);
  }
  static fromRGB(e, t, i) {
    return new v((0 | i) + (t << 8) + (e << 16));
  }
  static fromString(e) {
    return new v(ze(e));
  }
  static fromCSS(e) {
    return new v(yt(e));
  }
  static fromAny(e) {
    if (Ne(e)) {
      if (e[0] == "#") return v.fromString(e);
      if (e.substr(0, 3) == "rgb") return v.fromCSS(e);
    } else {
      if (g(e)) return v.fromHex(e);
      if (e instanceof v) return v.fromHex(e.hex);
    }
    throw new Error("Unknown color syntax: " + e);
  }
  static alternative(e, t, i) {
    const r = vt({ r: e.r, g: e.g, b: e.b }, t ? { r: t.r, g: t.g, b: t.b } : void 0, i ? { r: i.r, g: i.g, b: i.b } : void 0);
    return this.fromRGB(r.r, r.g, r.b);
  }
  static interpolate(e, t, i, r = "rgb") {
    if (r == "hsl") {
      const a = t.toHSL(), n = i.toHSL();
      return v.fromHSL(B(e, a.h, n.h), B(e, a.s, n.s), B(e, a.l, n.l));
    }
    return v.fromRGB(B(e, t.r, i.r), B(e, t.g, i.g), B(e, t.b, i.b));
  }
  static lighten(e, t) {
    const i = mt({ r: e.r, g: e.g, b: e.b }, t);
    return v.fromRGB(i.r, i.g, i.b);
  }
  static brighten(e, t) {
    const i = ft({ r: e.r, g: e.g, b: e.b }, t);
    return v.fromRGB(i.r, i.g, i.b);
  }
  static saturate(e, t) {
    const i = bt({ r: e.r, g: e.g, b: e.b }, t);
    return v.fromRGB(i.r, i.g, i.b);
  }
}
class q {
  constructor() {
    Object.defineProperty(this, "_listeners", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_killed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disabled", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_iterating", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_enabled", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._listeners = [], this._killed = [], this._disabled = {}, this._iterating = 0, this._enabled = !0, this._disposed = !1;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = !0;
      const e = this._listeners;
      this._iterating = 1, this._listeners = null, this._disabled = null;
      try {
        _(e, (t) => {
          t.disposer.dispose();
        });
      } finally {
        this._killed = null, this._iterating = null;
      }
    }
  }
  hasListeners() {
    return this._listeners.length !== 0;
  }
  hasListenersByType(e) {
    return tt(this._listeners, (t) => (t.type === null || t.type === e) && !t.killed);
  }
  enable() {
    this._enabled = !0;
  }
  disable() {
    this._enabled = !1;
  }
  enableType(e) {
    delete this._disabled[e];
  }
  disableType(e, t = 1 / 0) {
    this._disabled[e] = t;
  }
  _removeListener(e) {
    if (this._iterating === 0) {
      const t = this._listeners.indexOf(e);
      if (t === -1) throw new Error("Invalid state: could not remove listener");
      this._listeners.splice(t, 1);
    } else this._killed.push(e);
  }
  _removeExistingListener(e, t, i, r) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._eachListener((a) => {
      a.once !== e || a.type !== t || i !== void 0 && a.callback !== i || a.context !== r || a.disposer.dispose();
    });
  }
  isEnabled(e) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    return this._enabled && this._listeners.length > 0 && this.hasListenersByType(e) && this._disabled[e] === void 0;
  }
  removeType(e) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._eachListener((t) => {
      t.type === e && t.disposer.dispose();
    });
  }
  has(e, t, i) {
    return We(this._listeners, (r) => r.once !== !0 && r.type === e && (t === void 0 || r.callback === t) && r.context === i) !== -1;
  }
  _shouldDispatch(e) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    const t = this._disabled[e];
    return g(t) ? (t <= 1 ? delete this._disabled[e] : --this._disabled[e], !1) : this._enabled;
  }
  _eachListener(e) {
    ++this._iterating;
    try {
      _(this._listeners, e);
    } finally {
      --this._iterating, this._iterating === 0 && this._killed.length !== 0 && (_(this._killed, (t) => {
        this._removeListener(t);
      }), this._killed.length = 0);
    }
  }
  dispatch(e, t) {
    this._shouldDispatch(e) && this._eachListener((i) => {
      i.killed || i.type !== null && i.type !== e || i.dispatch(e, t);
    });
  }
  _on(e, t, i, r, a, n) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._removeExistingListener(e, t, i, r);
    const o = { type: t, callback: i, context: r, shouldClone: a, dispatch: n, killed: !1, once: e, disposer: new P(() => {
      o.killed = !0, this._removeListener(o);
    }) };
    return this._listeners.push(o), o;
  }
  onAll(e, t, i = !0) {
    return this._on(!1, null, e, t, i, (r, a) => e.call(t, a)).disposer;
  }
  on(e, t, i, r = !0) {
    return this._on(!1, e, t, i, r, (a, n) => t.call(i, n)).disposer;
  }
  once(e, t, i, r = !0) {
    const a = this._on(!0, e, t, i, r, (n, o) => {
      a.disposer.dispose(), t.call(i, o);
    });
    return a.disposer;
  }
  off(e, t, i) {
    this._removeExistingListener(!1, e, t, i);
  }
  copyFrom(e) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    if (e === this) throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
    const t = [];
    return _(e._listeners, (i) => {
      !i.killed && i.shouldClone && (i.type === null ? t.push(this.onAll(i.callback, i.context)) : i.once ? t.push(this.once(i.type, i.callback, i.context)) : t.push(this.on(i.type, i.callback, i.context)));
    }), new k(t);
  }
}
function He(s) {
  return ee(this, void 0, void 0, function* () {
    if (s !== void 0) {
      const e = [];
      y(s, (t, i) => {
        e.push(i.waitForStop());
      }), yield Promise.all(e);
    }
  });
}
function B(s, e, t) {
  return e + s * (t - e);
}
function wt(s, e, t) {
  return s >= 1 ? t : e;
}
function Pt(s, e, t) {
  return new f(B(s, e.percent, t.percent));
}
function Dt(s, e, t) {
  return v.interpolate(s, e, t);
}
function xt(s, e) {
  return typeof s == "number" && typeof e == "number" ? B : s instanceof f && e instanceof f ? Pt : s instanceof v && e instanceof v ? Dt : wt;
}
var U;
function W(s, e) {
  if (!(s >= 0 && s < e)) throw new Error("Index out of bounds: " + s);
}
(function(s) {
  s[s.Stopped = 0] = "Stopped", s[s.Playing = 1] = "Playing", s[s.Paused = 2] = "Paused";
})(U || (U = {}));
class Ye {
  constructor(e = []) {
    Object.defineProperty(this, "_values", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new q() }), this._values = e;
  }
  get values() {
    return this._values;
  }
  contains(e) {
    return this._values.indexOf(e) !== -1;
  }
  removeValue(e) {
    let t = 0, i = this._values.length;
    for (; t < i; ) this._values[t] === e ? (this.removeIndex(t), --i) : ++t;
  }
  indexOf(e) {
    return se(this._values, e);
  }
  get length() {
    return this._values.length;
  }
  hasIndex(e) {
    return e >= 0 && e < this._values.length;
  }
  getIndex(e) {
    return this._values[e];
  }
  _onPush(e) {
    this.events.isEnabled("push") && this.events.dispatch("push", { type: "push", target: this, newValue: e });
  }
  _onInsertIndex(e, t) {
    this.events.isEnabled("insertIndex") && this.events.dispatch("insertIndex", { type: "insertIndex", target: this, index: e, newValue: t });
  }
  _onSetIndex(e, t, i) {
    this.events.isEnabled("setIndex") && this.events.dispatch("setIndex", { type: "setIndex", target: this, index: e, oldValue: t, newValue: i });
  }
  _onRemoveIndex(e, t) {
    this.events.isEnabled("removeIndex") && this.events.dispatch("removeIndex", { type: "removeIndex", target: this, index: e, oldValue: t });
  }
  _onMoveIndex(e, t, i) {
    this.events.isEnabled("moveIndex") && this.events.dispatch("moveIndex", { type: "moveIndex", target: this, oldIndex: e, newIndex: t, value: i });
  }
  _onClear(e) {
    this.events.isEnabled("clear") && this.events.dispatch("clear", { type: "clear", target: this, oldValues: e });
  }
  setIndex(e, t) {
    W(e, this._values.length);
    const i = this._values[e];
    return i !== t && (this._values[e] = t, this._onSetIndex(e, i, t)), i;
  }
  insertIndex(e, t) {
    return W(e, this._values.length + 1), le(this._values, e, t), this._onInsertIndex(e, t), t;
  }
  swap(e, t) {
    const i = this._values.length;
    if (W(e, i), W(t, i), e !== t) {
      const r = this._values[e], a = this._values[t];
      this._values[e] = a, this._onSetIndex(e, r, a), this._values[t] = r, this._onSetIndex(t, a, r);
    }
  }
  removeIndex(e) {
    W(e, this._values.length);
    const t = this._values[e];
    return fe(this._values, e), this._onRemoveIndex(e, t), t;
  }
  moveValue(e, t) {
    let i = this.indexOf(e);
    if (i !== -1) if (fe(this._values, i), t == null) {
      const r = this._values.length;
      this._values.push(e), this._onMoveIndex(i, r, e);
    } else le(this._values, t, e), this._onMoveIndex(i, t, e);
    else t == null ? (this._values.push(e), this._onPush(e)) : (le(this._values, t, e), this._onInsertIndex(t, e));
    return e;
  }
  push(e) {
    return this._values.push(e), this._onPush(e), e;
  }
  unshift(e) {
    return this.insertIndex(0, e), e;
  }
  pushAll(e) {
    _(e, (t) => {
      this.push(t);
    });
  }
  copyFrom(e) {
    this.pushAll(e._values);
  }
  pop() {
    return this._values.length - 1 < 0 ? void 0 : this.removeIndex(this._values.length - 1);
  }
  shift() {
    return this._values.length ? this.removeIndex(0) : void 0;
  }
  setAll(e) {
    const t = this._values;
    this._values = [], this._onClear(t), _(e, (i) => {
      this._values.push(i), this._onPush(i);
    });
  }
  clear() {
    this.setAll([]);
  }
  *[Symbol.iterator]() {
    const e = this._values.length;
    for (let t = 0; t < e; ++t) yield this._values[t];
  }
  each(e) {
    _(this._values, e);
  }
  eachReverse(e) {
    V(this._values, e);
  }
}
class kt extends Ye {
  constructor() {
    super(...arguments), Object.defineProperty(this, "autoDispose", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _onSetIndex(e, t, i) {
    this.autoDispose && t.dispose(), super._onSetIndex(e, t, i);
  }
  _onRemoveIndex(e, t) {
    this.autoDispose && t.dispose(), super._onRemoveIndex(e, t);
  }
  _onClear(e) {
    this.autoDispose && _(e, (t) => {
      t.dispose();
    }), super._onClear(e);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this.autoDispose && _(this._values, (e) => {
      e.dispose();
    }));
  }
}
class wi extends kt {
  constructor(e, t) {
    super(), Object.defineProperty(this, "template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "make", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.template = e, this.make = t;
  }
}
class Ot extends Ye {
  constructor(e) {
    super(), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_events", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._container = e, this._events = this.events.onAll((t) => {
      if (t.type === "clear") _(t.oldValues, (i) => {
        this._onRemoved(i);
      });
      else if (t.type === "push") this._onInserted(t.newValue);
      else if (t.type === "setIndex") this._onRemoved(t.oldValue), this._onInserted(t.newValue, t.index);
      else if (t.type === "insertIndex") this._onInserted(t.newValue, t.index);
      else if (t.type === "removeIndex") this._onRemoved(t.oldValue);
      else {
        if (t.type !== "moveIndex") throw new Error("Unknown IListEvent type");
        this._onRemoved(t.value), this._onInserted(t.value, t.newIndex);
      }
    });
  }
  _onInserted(e, t) {
    e._setParent(this._container, !0);
    const i = this._container._childrenDisplay;
    t === void 0 ? i.addChild(e._display) : i.addChildAt(e._display, t);
  }
  _onRemoved(e) {
    this._container._childrenDisplay.removeChild(e._display), this._container.markDirtyBounds(), this._container.markDirty();
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._events.dispose(), _(this.values, (e) => {
      e.dispose();
    }));
  }
}
const Xe = Math.PI, $e = Xe / 180, Pi = 180 / Xe;
function Di(s, e, t) {
  if (!g(e) || e <= 0)
    return Math.round(s);
  {
    let i = Math.pow(10, e);
    return Math.round(s * i) / i;
  }
}
function xi(s, e) {
  if (!g(e) || e <= 0) return Math.ceil(s);
  {
    let t = Math.pow(10, e);
    return Math.ceil(s * t) / t;
  }
}
function Ie(s, e, t) {
  return Math.min(Math.max(s, e), t);
}
function ve(s) {
  return Math.sin($e * s);
}
function ye(s) {
  return Math.cos($e * s);
}
function ki(s) {
  return (s %= 360) < 0 && (s += 360), s;
}
function Oi(s, e, t, i, r) {
  let a = Number.MAX_VALUE, n = Number.MAX_VALUE, o = -Number.MAX_VALUE, h = -Number.MAX_VALUE, l = [];
  l.push(ce(r, t)), l.push(ce(r, i));
  let d = Math.min(90 * Math.floor(t / 90), 90 * Math.floor(i / 90)), p = Math.max(90 * Math.ceil(t / 90), 90 * Math.ceil(i / 90));
  for (let u = d; u <= p; u += 90) u >= t && u <= i && l.push(ce(r, u));
  for (let u = 0; u < l.length; u++) {
    let c = l[u];
    c.x < a && (a = c.x), c.y < n && (n = c.y), c.x > o && (o = c.x), c.y > h && (h = c.y);
  }
  return { left: s + a, top: e + n, right: s + o, bottom: e + h };
}
function ce(s, e) {
  return { x: s * ye(e), y: s * ve(e) };
}
function Ti(s) {
  const e = s.length;
  if (e > 0) {
    let t = s[0], i = t.left, r = t.top, a = t.right, n = t.bottom;
    if (e > 1) for (let o = 1; o < e; o++) t = s[o], i = Math.min(t.left, i), a = Math.max(t.right, a), r = Math.min(t.top, r), n = Math.max(t.bottom, n);
    return { left: i, right: a, top: r, bottom: n };
  }
  return { left: 0, right: 0, top: 0, bottom: 0 };
}
function Tt(s, e) {
  return s.x >= e.left && s.y >= e.top && s.x <= e.right && s.y <= e.bottom;
}
function Le(s) {
  return s;
}
function St(s) {
  return s * s * s;
}
function Si(s) {
  return function(e) {
    return 1 - s(1 - e);
  };
}
class jt {
  constructor(e, t) {
    Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_userSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._entity = e, this._settings = t, y(t, (i) => {
      this._userSettings[i] = !0;
    });
  }
  get(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  setRaw(e, t) {
    this._settings[e] = t;
  }
  set(e, t) {
    this._userSettings[e] = !0, this.setRaw(e, t);
  }
  remove(e) {
    delete this._userSettings[e], delete this._settings[e];
  }
  setAll(e) {
    T(e).forEach((t) => {
      this.set(t, e[t]);
    });
  }
  _eachSetting(e) {
    y(this._settings, e);
  }
  apply() {
    const e = { stateAnimationEasing: !0, stateAnimationDuration: !0 }, t = this._entity.states.lookup("default");
    this._eachSetting((i, r) => {
      e[i] || (e[i] = !0, this !== t && (i in t._settings || (t._settings[i] = this._entity.get(i))), this._entity.set(i, r));
    });
  }
  applyAnimate(e) {
    e == null && (e = this._settings.stateAnimationDuration), e == null && (e = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0)));
    let t = this._settings.stateAnimationEasing;
    t == null && (t = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", St)));
    const i = this._entity.states.lookup("default"), r = { stateAnimationEasing: !0, stateAnimationDuration: !0 }, a = {};
    return this._eachSetting((n, o) => {
      if (!r[n]) {
        r[n] = !0, this != i && (n in i._settings || (i._settings[n] = this._entity.get(n)));
        const h = this._entity.animate({ key: n, to: o, duration: e, easing: t });
        h && (a[n] = h);
      }
    }), a;
  }
}
class Et {
  constructor(e) {
    Object.defineProperty(this, "_states", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._entity = e;
  }
  lookup(e) {
    return this._states[e];
  }
  create(e, t) {
    const i = this._states[e];
    if (i) return i.setAll(t), i;
    {
      const r = new jt(this._entity, t);
      return this._states[e] = r, r;
    }
  }
  remove(e) {
    delete this._states[e];
  }
  apply(e) {
    const t = this._states[e];
    t && t.apply(), this._entity._applyState(e);
  }
  applyAnimate(e, t) {
    let i;
    const r = this._states[e];
    return r && (i = r.applyAnimate(t)), this._entity._applyStateAnimated(e, t), i;
  }
}
class Ct {
  constructor() {
    Object.defineProperty(this, "version", { enumerable: !0, configurable: !0, writable: !0, value: "5.8.0" }), Object.defineProperty(this, "licenses", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "entitiesById", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "rootElements", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
}
const R = new Ct();
function ji(s) {
  R.licenses.push(s);
}
function F(s, e) {
  return s === e ? 0 : s < e ? -1 : 1;
}
function Ze(s, e, t) {
  const i = s.length, r = e.length, a = Math.min(i, r);
  for (let n = 0; n < a; ++n) {
    const o = t(s[n], e[n]);
    if (o !== 0) return o;
  }
  return F(i, r);
}
function Ei(s, e) {
  return s === e ? 0 : s < e ? -1 : 1;
}
class Mt {
  constructor(e) {
    Object.defineProperty(this, "_entity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_callbacks", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_disabled", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._entity = e;
  }
  add(e, t) {
    let i = this._callbacks[e];
    return i === void 0 && (i = this._callbacks[e] = []), i.push(t), this._entity._markDirtyKey(e), new P(() => {
      O(i, t) && this._entity._markDirtyKey(e);
    });
  }
  remove(e) {
    const t = this._callbacks[e];
    t !== void 0 && (delete this._callbacks[e], t.length !== 0 && this._entity._markDirtyKey(e));
  }
  enable(e) {
    this._disabled[e] && (delete this._disabled[e], this._entity._markDirtyKey(e));
  }
  disable(e) {
    this._disabled[e] || (this._disabled[e] = !0, this._entity._markDirtyKey(e));
  }
  fold(e, t) {
    if (!this._disabled[e]) {
      const i = this._callbacks[e];
      if (i !== void 0) for (let r = 0, a = i.length; r < a; ++r) t = i[r](t, this._entity, e);
    }
    return t;
  }
}
class Q {
  constructor(e, t, i, r, a, n, o) {
    Object.defineProperty(this, "_animation", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_from", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_to", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_duration", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_easing", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_loops", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_interpolate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_oldTime", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_time", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_stopped", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_playing", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new q() }), this._animation = e, this._from = t, this._to = i, this._duration = r, this._easing = a, this._loops = n, this._interpolate = xt(t, i), this._oldTime = o;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  get playing() {
    return this._playing;
  }
  get stopped() {
    return this._stopped;
  }
  stop() {
    this._stopped || (this._stopped = !0, this._playing = !1, this.events.isEnabled("stopped") && this.events.dispatch("stopped", { type: "stopped", target: this }));
  }
  pause() {
    this._playing = !1, this._oldTime = null;
  }
  play() {
    this._stopped || this._playing || (this._playing = !0, this._animation._startAnimation());
  }
  get percentage() {
    return this._time / this._duration;
  }
  waitForStop() {
    return new Promise((e, t) => {
      if (this._stopped) e();
      else {
        const i = () => {
          r.dispose(), e();
        }, r = this.events.on("stopped", i);
      }
    });
  }
  _checkEnded() {
    return !(this._loops > 1) || (--this._loops, !1);
  }
  _run(e) {
    this._oldTime !== null && (this._time += e - this._oldTime, this._time > this._duration && (this._time = this._duration)), this._oldTime = e;
  }
  _reset(e) {
    this._oldTime = e, this._time = 0;
  }
  _value(e) {
    return this._interpolate(this._easing(e), this._from, this._to);
  }
}
let Bt = 0;
class At {
  constructor(e) {
    Object.defineProperty(this, "uid", { enumerable: !0, configurable: !0, writable: !0, value: ++Bt }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_prevSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_prevPrivateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_animatingSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_animatingPrivateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_userProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._settings = e;
  }
  _checkDirty() {
    T(this._settings).forEach((e) => {
      this._userProperties[e] = !0, this._markDirtyKey(e);
    });
  }
  resetUserSettings() {
    this._userProperties = {};
  }
  _runAnimation(e) {
    let t = U.Stopped;
    if (!this.isDisposed()) {
      let i = !1, r = !1;
      y(this._animatingSettings, (a, n) => {
        if (n.stopped) this._stopAnimation(a);
        else if (n.playing) {
          n._run(e);
          const o = n.percentage;
          o >= 1 ? n._checkEnded() ? this.set(a, n._value(1)) : (i = !0, n._reset(e), this._set(a, n._value(1))) : (i = !0, this._set(a, n._value(o)));
        } else r = !0;
      }), y(this._animatingPrivateSettings, (a, n) => {
        if (n.stopped) this._stopAnimationPrivate(a);
        else if (n.playing) {
          n._run(e);
          const o = n.percentage;
          o >= 1 ? n._checkEnded() ? this.setPrivate(a, n._value(1)) : (i = !0, n._reset(e), this._setPrivate(a, n._value(1))) : (i = !0, this._setPrivate(a, n._value(o)));
        } else r = !0;
      }), i ? t = U.Playing : r && (t = U.Paused);
    }
    return t;
  }
  _markDirtyKey(e) {
    this.markDirty();
  }
  _markDirtyPrivateKey(e) {
    this.markDirty();
  }
  on(e, t) {
    let i = this._settingEvents[e];
    return i === void 0 && (i = this._settingEvents[e] = []), i.push(t), new P(() => {
      O(i, t), i.length === 0 && delete this._settingEvents[e];
    });
  }
  onPrivate(e, t) {
    let i = this._privateSettingEvents[e];
    return i === void 0 && (i = this._privateSettingEvents[e] = []), i.push(t), new P(() => {
      O(i, t), i.length === 0 && delete this._privateSettingEvents[e];
    });
  }
  getRaw(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  get(e, t) {
    return this.getRaw(e, t);
  }
  _sendKeyEvent(e, t) {
    const i = this._settingEvents[e];
    i !== void 0 && _(i, (r) => {
      r(t, this, e);
    });
  }
  _sendPrivateKeyEvent(e, t) {
    const i = this._privateSettingEvents[e];
    i !== void 0 && _(i, (r) => {
      r(t, this, e);
    });
  }
  _setRaw(e, t, i) {
    this._prevSettings[e] = t, this._sendKeyEvent(e, i);
  }
  setRaw(e, t) {
    const i = this._settings[e];
    this._settings[e] = t, i !== t && this._setRaw(e, i, t);
  }
  _set(e, t) {
    const i = this._settings[e];
    this._settings[e] = t, i !== t && (this._setRaw(e, i, t), this._markDirtyKey(e));
  }
  _stopAnimation(e) {
    const t = this._animatingSettings[e];
    t && (delete this._animatingSettings[e], t.stop());
  }
  set(e, t) {
    return this._set(e, t), this._stopAnimation(e), t;
  }
  remove(e) {
    e in this._settings && (this._prevSettings[e] = this._settings[e], delete this._settings[e], this._sendKeyEvent(e, void 0), this._markDirtyKey(e)), this._stopAnimation(e);
  }
  removeAll() {
    _(T(this._settings), (e) => {
      this.remove(e);
    });
  }
  getPrivate(e, t) {
    const i = this._privateSettings[e];
    return i !== void 0 ? i : t;
  }
  _setPrivateRaw(e, t, i) {
    this._prevPrivateSettings[e] = t, this._sendPrivateKeyEvent(e, i);
  }
  setPrivateRaw(e, t) {
    const i = this._privateSettings[e];
    this._privateSettings[e] = t, i !== t && this._setPrivateRaw(e, i, t);
  }
  _setPrivate(e, t) {
    const i = this._privateSettings[e];
    this._privateSettings[e] = t, i !== t && (this._setPrivateRaw(e, i, t), this._markDirtyPrivateKey(e));
  }
  _stopAnimationPrivate(e) {
    const t = this._animatingPrivateSettings[e];
    t && (t.stop(), delete this._animatingPrivateSettings[e]);
  }
  setPrivate(e, t) {
    return this._setPrivate(e, t), this._stopAnimationPrivate(e), t;
  }
  removePrivate(e) {
    e in this._privateSettings && (this._prevPrivateSettings[e] = this._privateSettings[e], delete this._privateSettings[e], this._markDirtyPrivateKey(e)), this._stopAnimationPrivate(e);
  }
  setAll(e) {
    y(e, (t, i) => {
      this.set(t, i);
    });
  }
  animate(e) {
    const t = e.key, i = e.to, r = e.duration || 0, a = e.loops || 1, n = e.from === void 0 ? this.get(t) : e.from, o = e.easing === void 0 ? Le : e.easing;
    if (r === 0) this.set(t, i);
    else {
      if (n !== void 0 && n !== i) {
        this.set(t, n);
        const l = this._animatingSettings[t] = new Q(this, n, i, r, o, a, this._animationTime());
        return this._startAnimation(), l;
      }
      this.set(t, i);
    }
    const h = new Q(this, n, i, r, o, a, null);
    return h.stop(), h;
  }
  animatePrivate(e) {
    const t = e.key, i = e.to, r = e.duration || 0, a = e.loops || 1, n = e.from === void 0 ? this.getPrivate(t) : e.from, o = e.easing === void 0 ? Le : e.easing;
    if (r === 0) this.setPrivate(t, i);
    else {
      if (n !== void 0 && n !== i) {
        this.setPrivate(t, n);
        const l = this._animatingPrivateSettings[t] = new Q(this, n, i, r, o, a, this._animationTime());
        return this._startAnimation(), l;
      }
      this.setPrivate(t, i);
    }
    const h = new Q(this, n, i, r, o, a, null);
    return h.stop(), h;
  }
  _dispose() {
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._dispose());
  }
}
class A extends At {
  constructor(e, t, i, r = []) {
    if (super(t), Object.defineProperty(this, "_root", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_user_id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "states", { enumerable: !0, configurable: !0, writable: !0, value: new Et(this) }), Object.defineProperty(this, "adapters", { enumerable: !0, configurable: !0, writable: !0, value: new Mt(this) }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: this._createEvents() }), Object.defineProperty(this, "_userPrivateProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirty", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyPrivate", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_templates", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_internalTemplates", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_defaultThemes", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_templateDisposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_runSetup", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_disposerProperties", { enumerable: !0, configurable: !0, writable: !0, value: {} }), !i) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._root = e, this._internalTemplates = r, t.id && this._registerId(t.id);
  }
  static new(e, t, i) {
    const r = new this(e, t, !0);
    return r._template = i, r._afterNew(), r;
  }
  static _new(e, t, i = []) {
    const r = new this(e, t, !0, i);
    return r._afterNew(), r;
  }
  _afterNew() {
    this._checkDirty();
    let e = !1;
    const t = this._template;
    t && (e = !0, t._setObjectTemplate(this)), _(this._internalTemplates, (i) => {
      e = !0, i._setObjectTemplate(this);
    }), e && this._applyTemplates(!1), this.states.create("default", {}), this._setDefaults();
  }
  _afterNewApplyThemes() {
    this._checkDirty();
    const e = this._template;
    e && e._setObjectTemplate(this), _(this._internalTemplates, (t) => {
      t._setObjectTemplate(this);
    }), this.states.create("default", {}), this._setDefaults(), this._applyThemes();
  }
  _createEvents() {
    return new q();
  }
  get classNames() {
    return this.constructor.classNames;
  }
  get className() {
    return this.constructor.className;
  }
  _setDefaults() {
  }
  _setDefault(e, t) {
    e in this._settings || super.set(e, t);
  }
  _setRawDefault(e, t) {
    e in this._settings || super.setRaw(e, t);
  }
  _clearDirty() {
    T(this._dirty).forEach((e) => {
      this._dirty[e] = !1;
    }), T(this._dirtyPrivate).forEach((e) => {
      this._dirtyPrivate[e] = !1;
    });
  }
  isDirty(e) {
    return !!this._dirty[e];
  }
  isPrivateDirty(e) {
    return !!this._dirtyPrivate[e];
  }
  _markDirtyKey(e) {
    this._dirty[e] = !0, super._markDirtyKey(e);
  }
  _markDirtyPrivateKey(e) {
    this._dirtyPrivate[e] = !0, super._markDirtyKey(e);
  }
  isType(e) {
    return this.classNames.indexOf(e) !== -1;
  }
  _pushPropertyDisposer(e, t) {
    let i = this._disposerProperties[e];
    return i === void 0 && (i = this._disposerProperties[e] = []), i.push(t), t;
  }
  _disposeProperty(e) {
    const t = this._disposerProperties[e];
    t !== void 0 && (_(t, (i) => {
      i.dispose();
    }), delete this._disposerProperties[e]);
  }
  set template(e) {
    const t = this._template;
    t !== e && (this._template = e, t && t._removeObjectTemplate(this), e && e._setObjectTemplate(this), this._applyTemplates());
  }
  get template() {
    return this._template;
  }
  markDirty() {
    this._root._addDirtyEntity(this);
  }
  _startAnimation() {
    this._root._addAnimation(this);
  }
  _animationTime() {
    return this._root.animationTime;
  }
  _applyState(e) {
  }
  _applyStateAnimated(e, t) {
  }
  get(e, t) {
    const i = this.adapters.fold(e, this._settings[e]);
    return i !== void 0 ? i : t;
  }
  isUserSetting(e) {
    return this._userProperties[e] || !1;
  }
  set(e, t) {
    return this._userProperties[e] = !0, super.set(e, t);
  }
  setRaw(e, t) {
    this._userProperties[e] = !0, super.setRaw(e, t);
  }
  _setSoft(e, t) {
    return this._userProperties[e] ? t : super.set(e, t);
  }
  remove(e) {
    delete this._userProperties[e], this._removeTemplateProperty(e);
  }
  setPrivate(e, t) {
    return this._userPrivateProperties[e] = !0, super.setPrivate(e, t);
  }
  setPrivateRaw(e, t) {
    this._userPrivateProperties[e] = !0, super.setPrivateRaw(e, t);
  }
  removePrivate(e) {
    delete this._userPrivateProperties[e], this._removeTemplatePrivateProperty(e);
  }
  _setTemplateProperty(e, t, i) {
    this._userProperties[t] || e === this._findTemplateByKey(t) && super.set(t, i);
  }
  _setTemplatePrivateProperty(e, t, i) {
    this._userPrivateProperties[t] || e === this._findTemplateByPrivateKey(t) && super.setPrivate(t, i);
  }
  _removeTemplateProperty(e) {
    if (!this._userProperties[e]) {
      const t = this._findTemplateByKey(e);
      t ? super.set(e, t._settings[e]) : super.remove(e);
    }
  }
  _removeTemplatePrivateProperty(e) {
    if (!this._userPrivateProperties[e]) {
      const t = this._findTemplateByPrivateKey(e);
      t ? super.setPrivate(e, t._privateSettings[e]) : super.removePrivate(e);
    }
  }
  _walkParents(e) {
    e(this._root._rootContainer), e(this);
  }
  _applyStateByKey(e) {
    const t = this.states.create(e, {}), i = {};
    this._eachTemplate((r) => {
      const a = r.states.lookup(e);
      a && a._apply(t, i);
    }), y(t._settings, (r) => {
      i[r] || t._userSettings[r] || t.remove(r);
    });
  }
  _applyTemplate(e, t) {
    this._templateDisposers.push(e._apply(this, t)), y(e._settings, (i, r) => {
      t.settings[i] || this._userProperties[i] || (t.settings[i] = !0, super.set(i, r));
    }), y(e._privateSettings, (i, r) => {
      t.privateSettings[i] || this._userPrivateProperties[i] || (t.privateSettings[i] = !0, super.setPrivate(i, r));
    }), this._runSetup && e.setup && (this._runSetup = !1, e.setup(this));
  }
  _findStaticTemplate(e) {
    if (this._template && e(this._template)) return this._template;
  }
  _eachTemplate(e) {
    this._findStaticTemplate((t) => (e(t), !1)), V(this._internalTemplates, e), _(this._templates, e);
  }
  _applyTemplates(e = !0) {
    e && this._disposeTemplates();
    const t = { settings: {}, privateSettings: {}, states: {} };
    this._eachTemplate((i) => {
      this._applyTemplate(i, t);
    }), e && (y(this._settings, (i) => {
      this._userProperties[i] || t.settings[i] || super.remove(i);
    }), y(this._privateSettings, (i) => {
      this._userPrivateProperties[i] || t.privateSettings[i] || super.removePrivate(i);
    }));
  }
  _findTemplate(e) {
    const t = this._findStaticTemplate(e);
    if (t === void 0) {
      const i = rt(this._internalTemplates, e);
      return i === void 0 ? st(this._templates, e) : i;
    }
    return t;
  }
  _findTemplateByKey(e) {
    return this._findTemplate((t) => e in t._settings);
  }
  _findTemplateByPrivateKey(e) {
    return this._findTemplate((t) => e in t._privateSettings);
  }
  _disposeTemplates() {
    _(this._templateDisposers, (e) => {
      e.dispose();
    }), this._templateDisposers.length = 0;
  }
  _removeTemplates() {
    _(this._templates, (e) => {
      e._removeObjectTemplate(this);
    }), this._templates.length = 0;
  }
  _applyThemes(e = !1) {
    let t = !1;
    const i = [];
    let r = [];
    const a = /* @__PURE__ */ new Set(), n = this.get("themeTagsSelf");
    return n && _(n, (o) => {
      a.add(o);
    }), this._walkParents((o) => {
      o === this._root._rootContainer && (t = !0), o._defaultThemes.length > 0 && i.push(o._defaultThemes);
      const h = o.get("themes");
      h && r.push(h);
      const l = o.get("themeTags");
      l && _(l, (d) => {
        a.add(d);
      });
    }), r = i.concat(r), this._removeTemplates(), (t || e) && V(this.classNames, (o) => {
      const h = [];
      _(r, (l) => {
        _(l, (d) => {
          const p = d._lookupRules(o);
          p && V(p, (u) => {
            if (u.tags.every((c) => a.has(c))) {
              const c = nt(h, (m) => {
                const b = F(u.tags.length, m.tags.length);
                return b === 0 ? Ze(u.tags, m.tags, F) : b;
              });
              h.splice(c.index, 0, u);
            }
          });
        });
      }), _(h, (l) => {
        this._templates.push(l.template), l.template._setObjectTemplate(this);
      });
    }), this._applyTemplates(), (t || e) && (this._runSetup = !1), t || e;
  }
  _changed() {
  }
  _beforeChanged() {
    if (this.isDirty("id")) {
      const e = this.get("id");
      e && this._registerId(e);
      const t = this._prevSettings.id;
      t && delete R.entitiesById[t];
    }
  }
  _registerId(e) {
    if (R.entitiesById[e] && R.entitiesById[e] !== this) throw new Error('An entity with id "' + e + '" already exists.');
    R.entitiesById[e] = this;
  }
  _afterChanged() {
  }
  addDisposer(e) {
    return this._disposers.push(e), e;
  }
  _dispose() {
    super._dispose();
    const e = this._template;
    e && e._removeObjectTemplate(this), _(this._internalTemplates, (i) => {
      i._removeObjectTemplate(this);
    }), this._removeTemplates(), this._disposeTemplates(), this.events.dispose(), this._disposers.forEach((i) => {
      i.dispose();
    }), y(this._disposerProperties, (i, r) => {
      _(r, (a) => {
        a.dispose();
      });
    });
    const t = this.get("id");
    t && delete R.entitiesById[t];
  }
  setTimeout(e, t) {
    const i = setTimeout(() => {
      this.removeDispose(r), e();
    }, t), r = new P(() => {
      clearTimeout(i);
    });
    return this._disposers.push(r), r;
  }
  removeDispose(e) {
    if (!this.isDisposed()) {
      let t = se(this._disposers, e);
      t > -1 && this._disposers.splice(t, 1);
    }
    e.dispose();
  }
  hasTag(e) {
    return se(this.get("themeTags", []), e) !== -1;
  }
  addTag(e) {
    if (!this.hasTag(e)) {
      const t = this.get("themeTags", []);
      t.push(e), this.set("themeTags", t);
    }
  }
  removeTag(e) {
    if (this.hasTag(e)) {
      const t = this.get("themeTags", []);
      Fe(t, e), this.set("themeTags", t);
    }
  }
  _t(e, t, ...i) {
    return this._root.language.translate(e, t, ...i);
  }
  get root() {
    return this._root;
  }
}
Object.defineProperty(A, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Entity" }), Object.defineProperty(A, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: ["Entity"] });
class Ht {
  constructor(e, t, i) {
    Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_name", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._name = e, this._template = t, this._settings = i;
  }
  get(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  set(e, t) {
    this._settings[e] = t, this._template._stateChanged(this._name);
  }
  remove(e) {
    delete this._settings[e], this._template._stateChanged(this._name);
  }
  setAll(e) {
    T(e).forEach((t) => {
      this._settings[t] = e[t];
    }), this._template._stateChanged(this._name);
  }
  _apply(e, t) {
    y(this._settings, (i, r) => {
      t[i] || e._userSettings[i] || (t[i] = !0, e.setRaw(i, r));
    });
  }
}
class It {
  constructor(e) {
    Object.defineProperty(this, "_template", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_states", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._template = e;
  }
  lookup(e) {
    return this._states[e];
  }
  create(e, t) {
    const i = this._states[e];
    if (i) return i.setAll(t), i;
    {
      const r = new Ht(e, this._template, t);
      return this._states[e] = r, this._template._stateChanged(e), r;
    }
  }
  remove(e) {
    delete this._states[e], this._template._stateChanged(e);
  }
  _apply(e, t) {
    y(this._states, (i, r) => {
      let a = t.states[i];
      a == null && (a = t.states[i] = {});
      const n = e.states.create(i, {});
      r._apply(n, a);
    });
  }
}
class Lt {
  constructor() {
    Object.defineProperty(this, "_callbacks", { enumerable: !0, configurable: !0, writable: !0, value: {} });
  }
  add(e, t) {
    let i = this._callbacks[e];
    return i === void 0 && (i = this._callbacks[e] = []), i.push(t), new P(() => {
      O(i, t), i.length === 0 && delete this._callbacks[e];
    });
  }
  remove(e) {
    this._callbacks[e] !== void 0 && delete this._callbacks[e];
  }
  _apply(e) {
    const t = [];
    return y(this._callbacks, (i, r) => {
      _(r, (a) => {
        t.push(e.adapters.add(i, a));
      });
    }), new k(t);
  }
}
class J {
  constructor(e, t) {
    if (Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_entities", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "states", { enumerable: !0, configurable: !0, writable: !0, value: new It(this) }), Object.defineProperty(this, "adapters", { enumerable: !0, configurable: !0, writable: !0, value: new Lt() }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new q() }), Object.defineProperty(this, "setup", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._settings = e;
  }
  static new(e) {
    return new J(e, !0);
  }
  get entities() {
    return this._entities;
  }
  get(e, t) {
    const i = this._settings[e];
    return i !== void 0 ? i : t;
  }
  setRaw(e, t) {
    this._settings[e] = t;
  }
  set(e, t) {
    this._settings[e] !== t && (this.setRaw(e, t), this._entities.forEach((i) => {
      i._setTemplateProperty(this, e, t);
    }));
  }
  remove(e) {
    e in this._settings && (delete this._settings[e], this._entities.forEach((t) => {
      t._removeTemplateProperty(e);
    }));
  }
  removeAll() {
    y(this._settings, (e, t) => {
      this.remove(e);
    });
  }
  getPrivate(e, t) {
    const i = this._privateSettings[e];
    return i !== void 0 ? i : t;
  }
  setPrivateRaw(e, t) {
    return this._privateSettings[e] = t, t;
  }
  setPrivate(e, t) {
    return this._privateSettings[e] !== t && (this.setPrivateRaw(e, t), this._entities.forEach((i) => {
      i._setTemplatePrivateProperty(this, e, t);
    })), t;
  }
  removePrivate(e) {
    e in this._privateSettings && (delete this._privateSettings[e], this._entities.forEach((t) => {
      t._removeTemplatePrivateProperty(e);
    }));
  }
  setAll(e) {
    y(e, (t, i) => {
      this.set(t, i);
    });
  }
  on(e, t) {
    let i = this._settingEvents[e];
    return i === void 0 && (i = this._settingEvents[e] = []), i.push(t), new P(() => {
      O(i, t), i.length === 0 && delete this._settingEvents[e];
    });
  }
  onPrivate(e, t) {
    let i = this._privateSettingEvents[e];
    return i === void 0 && (i = this._privateSettingEvents[e] = []), i.push(t), new P(() => {
      O(i, t), i.length === 0 && delete this._privateSettingEvents[e];
    });
  }
  _apply(e, t) {
    const i = [];
    return y(this._settingEvents, (r, a) => {
      _(a, (n) => {
        i.push(e.on(r, n));
      });
    }), y(this._privateSettingEvents, (r, a) => {
      _(a, (n) => {
        i.push(e.onPrivate(r, n));
      });
    }), this.states._apply(e, t), i.push(this.adapters._apply(e)), i.push(e.events.copyFrom(this.events)), new k(i);
  }
  _setObjectTemplate(e) {
    this._entities.push(e);
  }
  _removeObjectTemplate(e) {
    Fe(this._entities, e);
  }
  _stateChanged(e) {
    this._entities.forEach((t) => {
      t._applyStateByKey(e);
    });
  }
}
class re extends q {
  constructor(e) {
    super(), Object.defineProperty(this, "_sprite", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rendererDisposers", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dispatchParents", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), this._sprite = e;
  }
  _makePointerEvent(e, t) {
    return { type: e, originalEvent: t.event, point: t.point, simulated: t.simulated, native: t.native, target: this._sprite };
  }
  _onRenderer(e, t) {
    this._sprite.set("interactive", !0), this._sprite._display.interactive = !0;
    let i = this._rendererDisposers[e];
    if (i === void 0) {
      const r = this._sprite._display.on(e, (a) => {
        t.call(this, a);
      });
      i = this._rendererDisposers[e] = new lt(() => {
        delete this._rendererDisposers[e], r.dispose();
      });
    }
    return i.increment();
  }
  _on(e, t, i, r, a, n) {
    const o = super._on(e, t, i, r, a, n), h = re.RENDERER_EVENTS[t];
    return h !== void 0 && (o.disposer = new k([o.disposer, this._onRenderer(t, h)])), o;
  }
  stopParentDispatch() {
    this._dispatchParents = !1;
  }
  dispatchParents(e, t) {
    const i = this._dispatchParents;
    this._dispatchParents = !0;
    try {
      this.dispatch(e, t), this._dispatchParents && this._sprite.parent && this._sprite.parent.events.dispatchParents(e, t);
    } finally {
      this._dispatchParents = i;
    }
  }
}
Object.defineProperty(re, "RENDERER_EVENTS", { enumerable: !0, configurable: !0, writable: !0, value: { click: function(s) {
  this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", s)) && this.dispatch("click", this._makePointerEvent("click", s));
}, rightclick: function(s) {
  this.isEnabled("rightclick") && this.dispatch("rightclick", this._makePointerEvent("rightclick", s));
}, middleclick: function(s) {
  this.isEnabled("middleclick") && this.dispatch("middleclick", this._makePointerEvent("middleclick", s));
}, dblclick: function(s) {
  this.dispatchParents("dblclick", this._makePointerEvent("dblclick", s));
}, pointerover: function(s) {
  const e = this._sprite;
  let t = !0;
  if (e.getPrivate("trustBounds")) {
    e._getBounds();
    const i = e.globalBounds();
    Tt(s.point, i) || (t = !1, e._root._renderer.removeHovering(e._display));
  }
  t && this.isEnabled("pointerover") && this.dispatch("pointerover", this._makePointerEvent("pointerover", s));
}, pointerout: function(s) {
  this.isEnabled("pointerout") && this.dispatch("pointerout", this._makePointerEvent("pointerout", s));
}, pointerdown: function(s) {
  this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", s));
}, pointerup: function(s) {
  this.isEnabled("pointerup") && this.dispatch("pointerup", this._makePointerEvent("pointerup", s));
}, globalpointerup: function(s) {
  this.isEnabled("globalpointerup") && this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", s));
}, globalpointermove: function(s) {
  this.isEnabled("globalpointermove") && this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", s));
}, wheel: function(s) {
  this.dispatchParents("wheel", { type: "wheel", target: this._sprite, originalEvent: s.event, point: s.point });
} } });
class x extends A {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_adjustedLocalBounds", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_localBounds", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_parent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dataItem", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_templateField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_sizeDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDragging", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dragEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dragPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isHidden", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isShowing", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isHiding", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDown", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_downPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downPoints", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_toggleDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dragDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_hoverDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_focusDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipMoveDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipPointerDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_statesHandled", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _afterNew() {
    this.setPrivateRaw("visible", !0), super._afterNew();
  }
  _markDirtyKey(e) {
    super._markDirtyKey(e), e != "x" && e != "y" && e != "dx" && e != "dy" || (this.markDirtyBounds(), this._addPercentagePositionChildren(), this.markDirtyPosition());
  }
  _markDirtyPrivateKey(e) {
    super._markDirtyPrivateKey(e), e != "x" && e != "y" || this.markDirtyPosition();
  }
  _removeTemplateField() {
    this._templateField && this._templateField._removeObjectTemplate(this);
  }
  _createEvents() {
    return new re(this);
  }
  _processTemplateField() {
    let e;
    const t = this.get("templateField");
    if (t) {
      const i = this.dataItem;
      if (i) {
        const r = i.dataContext;
        r && (e = r[t], e instanceof J || !e || (e = J.new(e)));
      }
    }
    this._templateField !== e && (this._removeTemplateField(), this._templateField = e, e && e._setObjectTemplate(this), this._applyTemplates());
  }
  _setDataItem(e) {
    const t = this._dataItem;
    this._dataItem = e, this._processTemplateField();
    const i = "dataitemchanged";
    e != t && this.events.isEnabled(i) && this.events.dispatch(i, { type: i, target: this, oldDataItem: t, newDataItem: e });
  }
  set dataItem(e) {
    this._setDataItem(e);
  }
  get dataItem() {
    if (this._dataItem) return this._dataItem;
    {
      let e = this._parent;
      for (; e; ) {
        if (e._dataItem) return e._dataItem;
        e = e._parent;
      }
    }
  }
  _addPercentageSizeChildren() {
    let e = this.parent;
    e && (this.get("width") instanceof f || this.get("height") instanceof f ? Ce(e._percentageSizeChildren, this) : O(e._percentageSizeChildren, this));
  }
  _addPercentagePositionChildren() {
    let e = this.parent;
    e && (this.get("x") instanceof f || this.get("y") instanceof f ? Ce(e._percentagePositionChildren, this) : O(e._percentagePositionChildren, this));
  }
  markDirtyPosition() {
    this._root._addDirtyPosition(this);
  }
  updatePivotPoint() {
    const e = this._localBounds;
    if (e) {
      const t = this.get("centerX");
      t != null && (this._display.pivot.x = e.left + M(t, e.right - e.left));
      const i = this.get("centerY");
      i != null && (this._display.pivot.y = e.top + M(i, e.bottom - e.top));
    }
  }
  _beforeChanged() {
    if (super._beforeChanged(), this._handleStates(), this.isDirty("tooltip")) {
      const e = this._prevSettings.tooltip;
      e && e.dispose();
    }
    if ((this.isDirty("layer") || this.isDirty("layerMargin")) && (this._display.setLayer(this.get("layer"), this.get("layerMargin")), this.markDirtyLayer()), this.isDirty("tooltipPosition")) {
      const e = this._tooltipMoveDp;
      e && (e.dispose(), this._tooltipMoveDp = void 0);
      const t = this._tooltipPointerDp;
      t && (t.dispose(), this._tooltipPointerDp = void 0), this.get("tooltipPosition") == "pointer" && (this.isHover() && (this._tooltipMoveDp = this.events.on("globalpointermove", (i) => {
        this.showTooltip(i.point);
      })), this._tooltipPointerDp = new k([this.events.on("pointerover", () => {
        this._tooltipMoveDp = this.events.on("globalpointermove", (i) => {
          this.showTooltip(i.point);
        });
      }), this.events.on("pointerout", () => {
        const i = this._tooltipMoveDp;
        i && (i.dispose(), this._tooltipMoveDp = void 0);
      })]));
    }
  }
  _handleStates() {
    this._statesHandled || (this.isDirty("active") && (this.get("active") ? (this.states.applyAnimate("active"), this.set("ariaChecked", !0)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !1)), this.markDirtyAccessibility()), this.isDirty("disabled") && (this.get("disabled") ? (this.states.applyAnimate("disabled"), this.set("ariaChecked", !1)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", !0)), this.markDirtyAccessibility()), this._statesHandled = !0);
  }
  _changed() {
    super._changed();
    const e = this._display, t = this.events;
    if (this.isDirty("draggable")) {
      const r = this.get("draggable");
      r ? (this.set("interactive", !0), this._dragDp = new k([t.on("pointerdown", (a) => {
        this.dragStart(a);
      }), t.on("globalpointermove", (a) => {
        this.dragMove(a);
      }), t.on("globalpointerup", (a) => {
        this.dragStop(a);
      })])) : this._dragDp && (this._dragDp.dispose(), this._dragDp = void 0), e.cancelTouch = !!r;
    }
    if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn")) {
      const r = this.get("tooltipText"), a = this.get("tooltipHTML"), n = this.get("showTooltipOn", "hover");
      this._tooltipDp && (this._tooltipDp.dispose(), this._tooltipDp = void 0), (r || a) && (n == "click" ? (this._tooltipDp = new k([t.on("click", () => {
        this.setTimeout(() => this.showTooltip(), 10);
      }), Ue(document, "click", (o) => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)) : n == "always" || (this._tooltipDp = new k([t.on("pointerover", () => {
        this.showTooltip();
      }), t.on("pointerout", () => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)));
    }
    if (this.isDirty("toggleKey")) {
      let r = this.get("toggleKey");
      r && r != "none" ? this._toggleDp = t.on("click", () => {
        this._isDragging || this.set(r, !this.get(r));
      }) : this._toggleDp && (this._toggleDp.dispose(), this._toggleDp = void 0);
    }
    if (this.isDirty("opacity") && (e.alpha = Math.max(0, this.get("opacity", 1)), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("rotation") && (this.markDirtyBounds(), e.angle = this.get("rotation", 0)), this.isDirty("scale") && (this.markDirtyBounds(), e.scale = this.get("scale", 0)), (this.isDirty("centerX") || this.isDirty("centerY")) && (this.markDirtyBounds(), this.updatePivotPoint()), (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) && (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? e.visible = !0 : (e.visible = !1, this.hideTooltip()), this.markDirtyBounds(), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("width") || this.isDirty("height")) {
      this.markDirtyBounds(), this._addPercentageSizeChildren();
      const r = this.parent;
      r && (this.isDirty("width") && this.get("width") instanceof f || this.isDirty("height") && this.get("height") instanceof f) && (r.markDirty(), r._prevWidth = 0), this._sizeDirty = !0;
    }
    if ((this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && (this.markDirtyBounds(), this._sizeDirty = !0), this._sizeDirty && this._updateSize(), this.isDirty("wheelable")) {
      const r = this.get("wheelable");
      r && this.set("interactive", !0), e.wheelable = !!r;
    }
    (this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this)), this.isDirty("filter") && (e.filter = this.get("filter"));
    let i = this.get("filter", "");
    if (this.isDirty("blur")) {
      const r = this.get("blur", 0);
      r != 0 && (i += " blur(" + r + "px)");
    }
    if (this.isDirty("saturate")) {
      const r = this.get("saturate", 1);
      r != 1 && (i += " saturate(" + r + ")");
    }
    if (this.isDirty("brightness")) {
      const r = this.get("brightness", 1);
      r != 1 && (i += " brightness(" + r + ")");
    }
    if (this.isDirty("contrast")) {
      const r = this.get("contrast", 1);
      r != 1 && (i += " contrast(" + r + ")");
    }
    if (this.isDirty("sepia")) {
      const r = this.get("sepia", 0);
      r != 0 && (i += " sepia(" + r + ")");
    }
    if (this.isDirty("hue")) {
      const r = this.get("hue", 0);
      r != 0 && (i += " hue-rotate(" + r + "deg)");
    }
    if (this.isDirty("invert")) {
      const r = this.get("invert", 0);
      r != 0 && (i += " invert(" + r + ")");
    }
    if (i && (e.filter = i), this.isDirty("cursorOverStyle") && (e.cursorOverStyle = this.get("cursorOverStyle")), this.isDirty("hoverOnFocus") && (this.get("hoverOnFocus") ? this._focusDp = new k([t.on("focus", () => {
      this.showTooltip();
    }), t.on("blur", () => {
      this.hideTooltip();
    })]) : this._focusDp && (this._focusDp.dispose(), this._focusDp = void 0)), this.isDirty("focusable") && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this), this.markDirtyAccessibility()), this.isPrivateDirty("focusable") && this.markDirtyAccessibility(), (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) && this.markDirtyAccessibility(), this.isDirty("exportable") && (e.exportable = this.get("exportable")), this.isDirty("interactive")) {
      const r = this.events;
      this.get("interactive") ? this._hoverDp = new k([r.on("click", (a) => {
        Me(a.originalEvent) && (this.getPrivate("touchHovering") || this.setTimeout(() => {
          this._handleOver(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.showTooltip(), this.setPrivateRaw("touchHovering", !0), this.events.dispatch("pointerover", { type: "pointerover", target: a.target, originalEvent: a.originalEvent, point: a.point, simulated: a.simulated });
        }, 10));
      }), r.on("globalpointerup", (a) => {
        Me(a.originalEvent) && this.getPrivate("touchHovering") && (this._handleOut(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.hideTooltip(), this.setPrivateRaw("touchHovering", !1), this.events.dispatch("pointerout", { type: "pointerout", target: a.target, originalEvent: a.originalEvent, point: a.point, simulated: a.simulated })), this._isDown && this._handleUp(a);
      }), r.on("pointerover", () => {
        this._handleOver();
      }), r.on("pointerout", () => {
        this._handleOut();
      }), r.on("pointerdown", (a) => {
        this._handleDown(a);
      })]) : (this._display.interactive = !1, this._hoverDp && (this._hoverDp.dispose(), this._hoverDp = void 0));
    }
    this.isDirty("forceInactive") && (this._display.inactive = this.get("forceInactive", null)), this.get("showTooltipOn") == "always" && this._display.visible && this.showTooltip();
  }
  dragStart(e) {
    this._dragEvent = e, this.events.stopParentDispatch();
  }
  dragStop(e) {
    if (this._dragEvent = void 0, this._dragPoint = void 0, this.events.stopParentDispatch(), this._isDragging) {
      this._isDragging = !1;
      const t = "dragstop";
      this.events.isEnabled(t) && this.events.dispatch(t, { type: t, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
    }
  }
  _handleOver() {
    this.isHidden() || (this.get("active") && this.states.lookup("hoverActive") ? this.states.applyAnimate("hoverActive") : this.get("disabled") && this.states.lookup("hoverDisabled") ? this.states.applyAnimate("hoverDisabled") : this.states.applyAnimate("hover"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleOut() {
    this.isHidden() || (this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : (this.states.lookup("hover") || this.states.lookup("hoverActive")) && this.states.applyAnimate("default"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleUp(e) {
    if (!this.isHidden()) {
      this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : this.states.lookup("down") && (this.isHover() ? this.states.applyAnimate("hover") : this.states.applyAnimate("default")), this._downPoint = void 0;
      const t = ue(e.originalEvent);
      delete this._downPoints[t], T(this._downPoints).length == 0 && (this._isDown = !1);
    }
  }
  _hasMoved(e) {
    const t = ue(e.originalEvent), i = this._downPoints[t];
    if (i) {
      const r = Math.abs(i.x - e.point.x), a = Math.abs(i.y - e.point.y);
      return r > 5 || a > 5;
    }
    return !1;
  }
  _hasDown() {
    return T(this._downPoints).length > 0;
  }
  _handleDown(e) {
    const t = this.parent;
    if (t && !this.get("draggable") && t._handleDown(e), this.get("interactive") && !this.isHidden()) {
      this.states.lookup("down") && this.states.applyAnimate("down"), this._downPoint = { x: e.point.x, y: e.point.y }, this._isDown = !0;
      const i = ue(e.originalEvent);
      this._downPoints[i] = { x: e.point.x, y: e.point.y };
    }
  }
  dragMove(e) {
    let t = this._dragEvent;
    if (t) {
      if (t.simulated && !e.simulated) return !0;
      let i = 0, r = this.parent, a = 1;
      for (; r != null; ) i += r.get("rotation", 0), r = r.parent, r && (a *= r.get("scale", 1));
      let n = (e.point.x - t.point.x) / a, o = (e.point.y - t.point.y) / a;
      const h = this.events;
      if (t.simulated && !this._isDragging) {
        this._isDragging = !0, this._dragEvent = e, this._dragPoint = { x: this.x(), y: this.y() };
        const l = "dragstart";
        h.isEnabled(l) && h.dispatch(l, { type: l, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
      }
      if (this._isDragging) {
        let l = this._dragPoint;
        this.set("x", l.x + n * ye(i) + o * ve(i)), this.set("y", l.y + o * ye(i) - n * ve(i));
        const d = "dragged";
        h.isEnabled(d) && h.dispatch(d, { type: d, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
      } else if (Math.hypot(n, o) > 5) {
        this._isDragging = !0, this._dragEvent = e, this._dragPoint = { x: this.x(), y: this.y() };
        const l = "dragstart";
        h.isEnabled(l) && h.dispatch(l, { type: l, target: this, originalEvent: e.originalEvent, point: e.point, simulated: e.simulated });
      }
    }
  }
  _updateSize() {
  }
  _getBounds() {
    this._localBounds = this._display.getLocalBounds();
  }
  depth() {
    let e = this.parent, t = 0;
    for (; ; ) {
      if (!e) return t;
      ++t, e = e.parent;
    }
  }
  markDirtySize() {
    this._sizeDirty = !0, this.markDirty();
  }
  markDirtyBounds() {
    const e = this._display;
    if (this.get("isMeasured")) {
      this._root._addDirtyBounds(this), e.isMeasured = !0, e.invalidateBounds();
      const t = this.parent;
      t && this.get("position") != "absolute" && (t.get("width") == null || t.get("height") == null || t.get("layout")) && t.markDirtyBounds(), this.get("focusable") && this.isFocus() && this.markDirtyAccessibility();
    }
  }
  markDirtyAccessibility() {
    this._root._invalidateAccessibility(this);
  }
  markDirtyLayer() {
    this._display.markDirtyLayer(!0);
  }
  markDirty() {
    super.markDirty(), this.markDirtyLayer();
  }
  _updateBounds() {
    const e = this._adjustedLocalBounds;
    let t;
    if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? (this._getBounds(), this._fixMinBounds(this._localBounds), this.updatePivotPoint(), this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds), t = this._adjustedLocalBounds) : (t = { left: 0, right: 0, top: 0, bottom: 0 }, this._localBounds = t, this._adjustedLocalBounds = t), !e || e.left !== t.left || e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom) {
      const i = "boundschanged";
      this.events.isEnabled(i) && this.events.dispatch(i, { type: i, target: this }), this.parent && (this.parent.markDirty(), this.parent.markDirtyBounds());
    }
  }
  _fixMinBounds(e) {
    let t = this.get("minWidth", this.getPrivate("minWidth")), i = this.get("minHeight", this.getPrivate("minHeight"));
    g(t) && e.right - e.left < t && (e.right = e.left + t), g(i) && e.bottom - e.top < i && (e.bottom = e.top + i);
    let r = this.getPrivate("width"), a = this.getPrivate("height");
    g(r) && (r > 0 ? e.right = e.left + r : e.left = e.right + r), g(a) && (a > 0 ? e.bottom = e.top + a : e.top = e.bottom + a);
  }
  _removeParent(e) {
    e && (e.children.removeValue(this), O(e._percentageSizeChildren, this), O(e._percentagePositionChildren, this));
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = !1, this._statesHandled = !1;
  }
  hover() {
    this.showTooltip(), this._handleOver();
  }
  unhover() {
    this.hideTooltip(), this._handleOut();
  }
  showTooltip(e) {
    const t = this.getTooltip(), i = this.get("tooltipText"), r = this.get("tooltipHTML");
    if ((i || r) && t) {
      const a = this.get("tooltipPosition"), n = this.getPrivate("tooltipTarget", this);
      a != "fixed" && e || (this._display._setMatrix(), e = this.toGlobal(n._getTooltipPoint())), t.set("pointTo", e), t.set("tooltipTarget", n), t.get("x") || t.set("x", e.x), t.get("y") || t.set("y", e.y), i && t.label.set("text", i), r && t.label.set("html", r);
      const o = this.dataItem;
      if (o && t.label._setDataItem(o), this.get("showTooltipOn") == "always" && (e.x < 0 || e.x > this._root.width() || e.y < 0 || e.y > this._root.height())) return void this.hideTooltip();
      t.label.text.markDirtyText();
      const h = t.show();
      return this.setPrivateRaw("showingTooltip", !0), h;
    }
  }
  hideTooltip() {
    const e = this.getTooltip();
    if (e && (e.get("tooltipTarget") == this.getPrivate("tooltipTarget", this) || this.get("tooltip") == e)) {
      let t = e.get("keepTargetHover") && e.get("stateAnimationDuration", 0) == 0 ? 400 : void 0;
      const i = e.hide(t);
      return this.setPrivateRaw("showingTooltip", !1), i;
    }
  }
  _getTooltipPoint() {
    const e = this._localBounds;
    if (e) {
      let t = 0, i = 0;
      return this.get("isMeasured") ? (t = e.left + M(this.get("tooltipX", 0), e.right - e.left), i = e.top + M(this.get("tooltipY", 0), e.bottom - e.top)) : (t = M(this.get("tooltipX", 0), this.width()), i = M(this.get("tooltipY", 0), this.height())), { x: t, y: i };
    }
    return { x: 0, y: 0 };
  }
  getTooltip() {
    let e = this.get("tooltip");
    if (e) return e;
    {
      let t = this.parent;
      if (t) return t.getTooltip();
    }
  }
  _updatePosition() {
    const e = this.parent;
    let t = this.get("dx", 0), i = this.get("dy", 0), r = this.get("x"), a = this.getPrivate("x"), n = 0, o = 0;
    const h = this.get("position");
    r instanceof f && (r = e ? e.innerWidth() * r.value + e.get("paddingLeft", 0) : 0), g(r) ? n = r + t : a != null ? n = a : e && h == "relative" && (n = e.get("paddingLeft", 0) + t);
    let l = this.get("y"), d = this.getPrivate("y");
    l instanceof f && (l = e ? e.innerHeight() * l.value + e.get("paddingTop", 0) : 0), g(l) ? o = l + i : d != null ? o = d : e && h == "relative" && (o = e.get("paddingTop", 0) + i);
    const p = this._display;
    if (p.x != n || p.y != o) {
      p.invalidateBounds(), p.x = n, p.y = o;
      const u = "positionchanged";
      this.events.isEnabled(u) && this.events.dispatch(u, { type: u, target: this });
    }
    this.getPrivate("showingTooltip") && this.showTooltip();
  }
  x() {
    let e = this.get("x"), t = this.getPrivate("x");
    const i = this.parent;
    return i ? e instanceof f ? M(e, i.innerWidth()) + i.get("paddingLeft", 0) : g(e) ? e : t ?? i.get("paddingLeft", this._display.x) : this._display.x;
  }
  y() {
    let e = this.getPrivate("y");
    if (e != null) return e;
    let t = this.get("y");
    const i = this.parent;
    return i ? t instanceof f ? M(t, i.innerHeight()) + i.get("paddingTop", 0) : g(t) ? t : e ?? i.get("paddingTop", this._display.y) : this._display.y;
  }
  _dispose() {
    super._dispose(), this._display.dispose(), this._removeTemplateField(), this._removeParent(this.parent), this._root._removeFocusElement(this);
    const e = this.get("tooltip");
    e && e.dispose(), this.markDirty();
  }
  adjustedLocalBounds() {
    return this._fixMinBounds(this._adjustedLocalBounds), this._adjustedLocalBounds;
  }
  localBounds() {
    return this._localBounds;
  }
  bounds() {
    const e = this._adjustedLocalBounds, t = this.x(), i = this.y();
    return { left: e.left + t, right: e.right + t, top: e.top + i, bottom: e.bottom + i };
  }
  globalBounds() {
    const e = this.localBounds(), t = this.toGlobal({ x: e.left, y: e.top }), i = this.toGlobal({ x: e.right, y: e.top }), r = this.toGlobal({ x: e.right, y: e.bottom }), a = this.toGlobal({ x: e.left, y: e.bottom });
    return { left: Math.min(t.x, i.x, r.x, a.x), top: Math.min(t.y, i.y, r.y, a.y), right: Math.max(t.x, i.x, r.x, a.x), bottom: Math.max(t.y, i.y, r.y, a.y) };
  }
  _onShow(e) {
  }
  _onHide(e) {
  }
  appear(e, t) {
    return ee(this, void 0, void 0, function* () {
      return yield this.hide(0), t ? new Promise((i, r) => {
        this.setTimeout(() => {
          i(this.show(e));
        }, t);
      }) : this.show(e);
    });
  }
  show(e) {
    return ee(this, void 0, void 0, function* () {
      if (!this._isShowing) {
        this._isHidden = !1, this._isShowing = !0, this._isHiding = !1, this.states.lookup("default").get("visible") && this.set("visible", !0), this._onShow(e);
        const t = this.states.applyAnimate("default", e);
        yield He(t), this._isShowing = !1;
      }
    });
  }
  hide(e) {
    return ee(this, void 0, void 0, function* () {
      if (!this._isHiding && !this._isHidden) {
        this._isHiding = !0, this._isShowing = !1;
        let t = this.states.lookup("hidden");
        t || (t = this.states.create("hidden", { opacity: 0, visible: !1 })), this._isHidden = !0, this._onHide(e);
        const i = this.states.applyAnimate("hidden", e);
        yield He(i), this._isHiding = !1;
      }
    });
  }
  isHidden() {
    return this._isHidden;
  }
  isShowing() {
    return this._isShowing;
  }
  isHiding() {
    return this._isHiding;
  }
  isHover() {
    return this._display.hovering();
  }
  isFocus() {
    return this._root.focused(this);
  }
  isDragging() {
    return this._isDragging;
  }
  isVisible() {
    return !(!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden"));
  }
  isVisibleDeep() {
    return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible();
  }
  compositeOpacity() {
    const e = this.get("opacity", 1);
    return this._parent ? this._parent.compositeOpacity() * e : e;
  }
  width() {
    let e = this.get("width"), t = this.get("maxWidth", this.getPrivate("maxWidth")), i = this.get("minWidth", this.getPrivate("minWidth")), r = this.getPrivate("width"), a = 0;
    if (g(r)) a = r;
    else if (e == null) this._adjustedLocalBounds && (a = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left);
    else if (e instanceof f) {
      const n = this.parent;
      a = n ? n.innerWidth() * e.value : this._root.width() * e.value;
    } else g(e) && (a = e);
    return g(i) && (a = Math.max(i, a)), g(t) && (a = Math.min(t, a)), a;
  }
  maxWidth() {
    let e = this.get("maxWidth", this.getPrivate("maxWidth"));
    if (g(e)) return e;
    {
      let i = this.get("width");
      if (g(i)) return i;
    }
    const t = this.parent;
    return t ? t.innerWidth() : this._root.width();
  }
  maxHeight() {
    let e = this.get("maxHeight", this.getPrivate("maxHeight"));
    if (g(e)) return e;
    {
      let i = this.get("height");
      if (g(i)) return i;
    }
    const t = this.parent;
    return t ? t.innerHeight() : this._root.height();
  }
  height() {
    let e = this.get("height"), t = this.get("maxHeight", this.getPrivate("maxHeight")), i = this.get("minHeight", this.getPrivate("minHeight")), r = this.getPrivate("height"), a = 0;
    if (g(r)) a = r;
    else if (e == null) this._adjustedLocalBounds && (a = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top);
    else if (e instanceof f) {
      const n = this.parent;
      a = n ? n.innerHeight() * e.value : this._root.height() * e.value;
    } else g(e) && (a = e);
    return g(i) && (a = Math.max(i, a)), g(t) && (a = Math.min(t, a)), a;
  }
  _findStaticTemplate(e) {
    return this._templateField && e(this._templateField) ? this._templateField : super._findStaticTemplate(e);
  }
  _walkParents(e) {
    this._parent && this._walkParent(e);
  }
  _walkParent(e) {
    this._parent && this._parent._walkParent(e), e(this);
  }
  get parent() {
    return this._parent;
  }
  _setParent(e, t = !1) {
    const i = this._parent;
    e !== i && (this.markDirtyBounds(), e.markDirty(), this._parent = e, t && (this._removeParent(i), e && (this._addPercentageSizeChildren(), this._addPercentagePositionChildren())), this.markDirtyPosition(), this._applyThemes());
  }
  getNumberFormatter() {
    return this.get("numberFormatter", this._root.numberFormatter);
  }
  getDateFormatter() {
    return this.get("dateFormatter", this._root.dateFormatter);
  }
  getDurationFormatter() {
    return this.get("durationFormatter", this._root.durationFormatter);
  }
  toGlobal(e) {
    return this._display.toGlobal(e);
  }
  toLocal(e) {
    return this._display.toLocal(e);
  }
  _getDownPoint() {
    const e = this._getDownPointId();
    if (e) return this._downPoints[e];
  }
  _getDownPointId() {
    if (this._downPoints) return ot(this._downPoints, (e, t) => e > t ? 1 : e < t ? -1 : 0)[0];
  }
  toFront() {
    const e = this.parent;
    e && e.children.moveValue(this, e.children.length - 1);
  }
  toBack() {
    const e = this.parent;
    e && e.children.moveValue(this, 0);
  }
}
Object.defineProperty(x, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Sprite" }), Object.defineProperty(x, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: A.classNames.concat([x.className]) });
class K extends A {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_backgroundDisplay", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_pattern", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  get pattern() {
    return this._pattern;
  }
  _draw() {
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fillOpacity")) && (this._clear = !0), this._checkDirtyFill();
  }
  _checkDirtyFill() {
    (this.isDirty("color") || this.isDirty("fill")) && (this._clear = !0);
  }
  _changed() {
    if (super._changed(), this._clear) {
      const e = this.get("repetition", ""), t = this.get("width", 100), i = this.get("height", 100), r = this.get("fill"), a = this.get("fillOpacity", 1), n = this._backgroundDisplay, o = this._display;
      o.clear(), n.clear(), r && a > 0 && (n.beginFill(r, a), n.drawRect(0, 0, t, i), n.endFill()), o.angle = this.get("rotation", 0), this._draw(), this._pattern = this._root._renderer.createPattern(o, n, e, t, i);
    }
    this._clear = !1;
  }
}
Object.defineProperty(K, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Pattern" }), Object.defineProperty(K, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: A.classNames.concat([K.className]) });
class G extends K {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_image", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _beforeChanged() {
    super._beforeChanged(), this._clear = !0, this.isDirty("src") && this._load();
    const e = this.get("canvas");
    e && (this.set("width", e.width), this.set("height", e.height));
  }
  _draw() {
    super._draw();
    const e = this._image;
    if (e) {
      const i = this.get("width", 100), r = this.get("height", 100), a = this.get("fit", "image");
      let n = 0, o = 0;
      a == "pattern" ? (n = i, o = r) : (n = e.width, o = e.height, a == "image" && (this.set("width", n), this.set("height", o)));
      let h = 0, l = 0;
      this.get("centered", !0) && (h = i / 2 - n / 2, l = r / 2 - o / 2), this._display.image(e, n, o, h, l);
    }
    const t = this.get("canvas");
    t && this._display.image(t, t.width, t.height, 0, 0);
  }
  _load() {
    const e = this.get("src");
    if (e) {
      const t = new Image();
      t.src = e, t.decode().then(() => {
        this._image = t, this._draw(), this.events.isEnabled("loaded") && this.events.dispatch("loaded", { type: "loaded", target: this });
      }).catch((i) => {
      });
    }
  }
}
var we;
Object.defineProperty(G, "className", { enumerable: !0, configurable: !0, writable: !0, value: "PicturePattern" }), Object.defineProperty(G, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: K.classNames.concat([G.className]) }), function(s) {
  s.ADD = "lighter", s.COLOR = "color", s.COLOR_BURN = "color-burn", s.COLOR_DODGE = "color-dodge", s.DARKEN = "darken", s.DIFFERENCE = "difference", s.DST_OVER = "destination-over", s.EXCLUSION = "exclusion", s.HARD_LIGHT = "hard-light", s.HUE = "hue", s.LIGHTEN = "lighten", s.LUMINOSITY = "luminosity", s.MULTIPLY = "multiply", s.NORMAL = "source-over", s.OVERLAY = "overlay", s.SATURATION = "saturation", s.SCREEN = "screen", s.SOFT_LIGHT = "soft-light", s.SRC_ATOP = "source-atop", s.XOR = "xor";
}(we || (we = {}));
const Ci = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset", "shadowBlur", "shadowColor", "shadowOpacity", "shadowOffsetX", "shadowOffsetY", "blur", "sepia", "invert", "brightness", "hue", "contrast", "saturate"];
class z extends x {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _beforeChanged() {
    if (super._beforeChanged(), (this.isDirty("draw") || this.isDirty("svgPath")) && this.markDirtyBounds(), (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) && (this._clear = !0), this._display.crisp = this.get("crisp", !1), this.isDirty("fillGradient")) {
      const e = this.get("fillGradient");
      if (e) {
        this._display.isMeasured = !0;
        const t = e.get("target");
        t && (this._disposers.push(t.events.on("boundschanged", () => {
          this._markDirtyKey("fill");
        })), this._disposers.push(t.events.on("positionchanged", () => {
          this._markDirtyKey("fill");
        })));
      }
    }
    if (this.isDirty("strokeGradient")) {
      const e = this.get("strokeGradient");
      if (e) {
        this._display.isMeasured = !0;
        const t = e.get("target");
        t && (this._disposers.push(t.events.on("boundschanged", () => {
          this._markDirtyKey("stroke");
        })), this._disposers.push(t.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        })));
      }
    }
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds(), this.markDirtyLayer(), this._display.clear();
      let e = this.get("strokeDasharray");
      g(e) && (e = e < 0.5 ? [0] : [e]), this._display.setLineDash(e);
      const t = this.get("strokeDashoffset");
      t && this._display.setLineDashOffset(t);
      const i = this.get("blendMode", we.NORMAL);
      this._display.blendMode = i;
      const r = this.get("draw");
      r && r(this._display, this);
      const a = this.get("svgPath");
      a != null && this._display.svgPath(a);
    }
  }
  _afterChanged() {
    if (super._afterChanged(), this._clear) {
      const e = this.get("fill"), t = this.get("fillGradient"), i = this.get("fillPattern"), r = this.get("fillOpacity"), a = this.get("stroke"), n = this.get("strokeGradient"), o = this.get("strokePattern"), h = this.get("shadowColor"), l = this.get("shadowBlur"), d = this.get("shadowOffsetX"), p = this.get("shadowOffsetY"), u = this.get("shadowOpacity");
      if (h && (l || d || p) && this._display.shadow(h, l, d, p, u), e && !t && (this._display.beginFill(e, r), this._display.endFill()), t) {
        if (e) {
          const m = t.get("stops", []);
          m.length && _(m, (b) => {
            b.color && !b.colorInherited || !e || (b.color = e, b.colorInherited = !0), (b.opacity == null || b.opacityInherited) && (b.opacity = r, b.opacityInherited = !0);
          });
        }
        const c = t.getFill(this);
        c && (this._display.beginFill(c, r), this._display.endFill());
      }
      if (i) {
        const c = i.pattern;
        c && (this._display.beginFill(c, r), this._display.endFill(), i instanceof G && i.events.once("loaded", () => {
          this._clear = !0, this.markDirty();
        }));
      }
      if (a || n || o) {
        const c = this.get("strokeOpacity");
        let m = this.get("strokeWidth", 1);
        this.get("nonScalingStroke") && (m /= this.get("scale", 1)), this.get("crisp") && (m /= this._root._renderer.resolution);
        const b = this.get("lineJoin");
        if (a && !n && (this._display.lineStyle(m, a, c, b), this._display.endStroke()), n) {
          const S = n.get("stops", []);
          S.length && _(S, (w) => {
            w.color && !w.colorInherited || !a || (w.color = a, w.colorInherited = !0), (w.opacity == null || w.opacityInherited) && (w.opacity = c, w.opacityInherited = !0);
          });
          const H = n.getFill(this);
          H && (this._display.lineStyle(m, H, c, b), this._display.endStroke());
        }
        if (o) {
          let S = o.pattern;
          S && (this._display.lineStyle(m, S, c, b), this._display.endStroke(), o instanceof G && o.events.once("loaded", () => {
            this._clear = !0, this.markDirty();
          }));
        }
      }
      this.getPrivate("showingTooltip") && this.showTooltip();
    }
    this._clear = !1;
  }
}
Object.defineProperty(z, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Graphics" }), Object.defineProperty(z, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: x.classNames.concat([z.className]) });
class Y extends z {
  _afterNew() {
    super._afterNew(), this._display.isMeasured = !0, this.setPrivateRaw("trustBounds", !0);
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = !0);
  }
  _changed() {
    super._changed(), this._clear && !this.get("draw") && this._draw();
  }
  _draw() {
    this._display.drawRect(0, 0, this.width(), this.height());
  }
  _updateSize() {
    this.markDirty(), this._clear = !0;
  }
}
function j(s, e) {
  s.get("reverseChildren", !1) ? s.children.eachReverse(e) : s.children.each(e);
}
Object.defineProperty(Y, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Rectangle" }), Object.defineProperty(Y, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: z.classNames.concat([Y.className]) });
class E extends A {
}
Object.defineProperty(E, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Layout" }), Object.defineProperty(E, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: A.classNames.concat([E.className]) });
class X extends E {
  updateContainer(e) {
    let t = e.get("paddingLeft", 0), i = e.innerWidth(), r = 0;
    j(e, (n) => {
      if (n.isVisible() && n.get("position") == "relative") {
        let o = n.get("width");
        if (o instanceof f) {
          r += o.value;
          let h = i * o.value, l = n.get("minWidth", n.getPrivate("minWidth", -1 / 0));
          l > h && (i -= l, r -= o.value);
          let d = n.get("maxWidth", n.getPrivate("maxWidth", 1 / 0));
          h > d && (i -= d, r -= o.value);
        } else g(o) || (o = n.width()), i -= o + n.get("marginLeft", 0) + n.get("marginRight", 0);
      }
    }), (i <= 0 || i == 1 / 0) && (i = 0.1), j(e, (n) => {
      if (n.isVisible() && n.get("position") == "relative") {
        let o = n.get("width");
        if (o instanceof f) {
          let h = i * o.value / r - n.get("marginLeft", 0) - n.get("marginRight", 0), l = n.get("minWidth", n.getPrivate("minWidth", -1 / 0)), d = n.get("maxWidth", n.getPrivate("maxWidth", 1 / 0));
          h = Math.min(Math.max(l, h), d), n.setPrivate("width", h);
        } else n._prevSettings.width instanceof f && n.setPrivate("width", void 0);
      }
    });
    let a = t;
    j(e, (n) => {
      if (n.get("position") == "relative") if (n.isVisible()) {
        let o = n.adjustedLocalBounds(), h = n.get("marginLeft", 0), l = n.get("marginRight", 0), d = n.get("maxWidth"), p = o.left, u = o.right;
        d && u - p > d && (u = p + d);
        let c = a + h - p;
        n.setPrivate("x", c), a = c + u + l;
      } else n.setPrivate("x", void 0);
    });
  }
}
Object.defineProperty(X, "className", { enumerable: !0, configurable: !0, writable: !0, value: "HorizontalLayout" }), Object.defineProperty(X, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: E.classNames.concat([X.className]) });
class $ extends E {
  updateContainer(e) {
    let t = e.get("paddingTop", 0), i = e.innerHeight(), r = 0;
    j(e, (n) => {
      if (n.isVisible() && n.get("position") == "relative") {
        let o = n.get("height");
        if (o instanceof f) {
          r += o.value;
          let h = i * o.value, l = n.get("minHeight", n.getPrivate("minHeight", -1 / 0));
          l > h && (i -= l, r -= o.value);
          let d = n.get("maxHeight", n.getPrivate("maxHeight", 1 / 0));
          h > d && (i -= d, r -= o.value);
        } else g(o) || (o = n.height()), i -= o + n.get("marginTop", 0) + n.get("marginBottom", 0);
      }
    }), (i <= 0 || i == 1 / 0) && (i = 0.1), j(e, (n) => {
      if (n.isVisible() && n.get("position") == "relative") {
        let o = n.get("height");
        if (o instanceof f) {
          let h = i * o.value / r - n.get("marginTop", 0) - n.get("marginBottom", 0), l = n.get("minHeight", n.getPrivate("minHeight", -1 / 0)), d = n.get("maxHeight", n.getPrivate("maxHeight", 1 / 0));
          h = Math.min(Math.max(l, h), d), n.setPrivate("height", h);
        } else n._prevSettings.height instanceof f && n.setPrivate("height", void 0);
      }
    });
    let a = t;
    j(e, (n) => {
      if (n.get("position") == "relative") if (n.isVisible()) {
        let o = n.adjustedLocalBounds(), h = n.get("marginTop", 0), l = o.top, d = o.bottom, p = n.get("maxHeight");
        p && d - l > p && (d = l + p);
        let u = n.get("marginBottom", 0), c = a + h - l;
        n.setPrivate("y", c), a = c + d + u;
      } else n.setPrivate("y", void 0);
    });
  }
}
Object.defineProperty($, "className", { enumerable: !0, configurable: !0, writable: !0, value: "VerticalLayout" }), Object.defineProperty($, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: E.classNames.concat([$.className]) });
class Z extends E {
  _afterNew() {
    this._setRawDefault("maxColumns", Number.MAX_VALUE), super._afterNew();
  }
  updateContainer(e) {
    let t = e.get("paddingLeft", 0), i = e.get("paddingRight", 0), r = e.get("paddingTop", 0), a = e.maxWidth() - t - i, n = a, o = 1;
    j(e, (m) => {
      if (m.get("visible") && m.getPrivate("visible") && !m.get("forceHidden") && m.get("position") != "absolute") {
        let b = m.width();
        b < n && (n = b), b > o && (o = b);
      }
    }), n = Ie(n, 1, a), o = Ie(o, 1, a);
    let h = 1;
    h = this.get("fixedWidthGrid") ? a / o : a / n, h = Math.max(1, Math.floor(h)), h = Math.min(this.get("maxColumns", Number.MAX_VALUE), h);
    let l = this.getColumnWidths(e, h, o, a), d = r, p = 0, u = 0;
    h = l.length;
    let c = t;
    j(e, (m) => {
      if (m.get("position") == "relative" && m.isVisible()) {
        const b = m.get("marginTop", 0), S = m.get("marginBottom", 0);
        let H = m.adjustedLocalBounds(), w = m.get("marginLeft", 0), C = m.get("marginRight", 0), D = c + w - H.left, N = d + b - H.top;
        m.setPrivate("x", D), m.setPrivate("y", N), c += l[p] + C, u = Math.max(u, m.height() + b + S), p++, p >= h && (p = 0, c = t, d += u);
      }
    });
  }
  getColumnWidths(e, t, i, r) {
    let a = 0, n = [], o = 0;
    return j(e, (h) => {
      let l = h.adjustedLocalBounds();
      h.get("position") != "absolute" && h.isVisible() && (this.get("fixedWidthGrid") ? n[o] = i : n[o] = Math.max(0 | n[o], l.right - l.left + h.get("marginLeft", 0) + h.get("marginRight", 0)), o < e.children.length - 1 && (o++, o == t && (o = 0)));
    }), _(n, (h) => {
      a += h;
    }), a > r ? t > 2 ? (t -= 1, this.getColumnWidths(e, t, i, r)) : [r] : n;
  }
}
Object.defineProperty(Z, "className", { enumerable: !0, configurable: !0, writable: !0, value: "GridLayout" }), Object.defineProperty(Z, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: E.classNames.concat([Z.className]) });
class Pe {
  static escape(e) {
    return e.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5");
  }
  static unescape(e) {
    return e.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''");
  }
  static cleanUp(e) {
    return e.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'");
  }
  static chunk(e, t = !1, i = !1) {
    let r = [];
    e = this.escape(e);
    let a = t ? e.split("'") : [e];
    for (let n = 0; n < a.length; n++) {
      let o = a[n];
      if (o !== "") if (n % 2 == 0) {
        o = o.replace(/\]\[/g, "]" + Ee + "["), o = o.replace(/\[\]/g, "[ ]");
        let h = o.split(/[\[\]]+/);
        for (let l = 0; l < h.length; l++) {
          let d = this.cleanUp(this.unescape(h[l]));
          d !== Ee && d !== "" && (l % 2 == 0 ? r.push({ type: "value", text: d }) : r.push({ type: i ? "value" : "format", text: "[" + d + "]" }));
        }
      } else {
        let h = o.split(/[\[\]]+/);
        for (let l = 0; l < h.length; l++) {
          let d = this.cleanUp(this.unescape(h[l]));
          d !== "" && (l % 2 == 0 ? r.push({ type: "text", text: d }) : this.isImage(d) ? r.push({ type: "image", text: "[" + d + "]" }) : r.push({ type: "format", text: "[" + d + "]" }));
        }
      }
    }
    return r;
  }
  static isImage(e) {
    return !!e.match(/img[ ]?:/);
  }
  static getTextStyle(e) {
    let t = {};
    if (e == "" || e == "[ ]") return {};
    const i = e.match(/('[^']*')|("[^"]*")/gi);
    if (i) for (let a = 0; a < i.length; a++) e = e.replace(i[a], i[a].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
    let r = e.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
    if (!r) return {};
    for (let a = 0; a < r.length; a++) if (r[a].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i)) t.fontWeight = r[a];
    else if (r[a].match(/^(underline|line-through)$/i)) t.textDecoration = r[a];
    else if (r[a] != "/") if (r[a].match(/:/)) {
      const n = r[a].replace("+", " ").split(/:[ ]*/);
      t[n[0]] = n[1];
    } else t.fill = v.fromString(r[a]);
    return t;
  }
}
function De(s, e) {
  if (e != null) {
    e = "" + e;
    let t, i = (e = Pe.escape(e)).match(/\{([^}]+)\}/g);
    if (i) for (t = 0; t < i.length; t++) {
      let r = xe(s, i[t].replace(/\{([^}]+)\}/, "$1"));
      r == null && (r = ""), e = e.split(i[t]).join(r);
    }
    e = Pe.unescape(e);
  } else e = "";
  return e;
}
function xe(s, e, t) {
  let i;
  const r = s.dataItem;
  let a, n = [], o = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
  for (; a = o.exec(e), a !== null; ) if (a[3]) {
    n.push({ prop: a[3] });
    const h = s.getDateFormatter().get("dateFields", []), l = s.getNumberFormatter().get("numericFields", []), d = s.getDurationFormatter().get("durationFields", []);
    h.indexOf(a[3]) !== -1 ? n.push({ method: "formatDate", params: [] }) : l.indexOf(a[3]) !== -1 ? n.push({ method: "formatNumber", params: [] }) : d.indexOf(a[3]) !== -1 && n.push({ method: "formatDuration", params: [] });
  } else {
    let h = [];
    if (be(a[2]) != "") {
      let l, d = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
      for (; l = d.exec(a[2]), l !== null; ) h.push(l[1] || l[2] || l[3]);
    }
    n.push({ method: a[1], params: h });
  }
  if (r) {
    i = I(s, n, r._settings), (i == null || Re(i)) && (i = I(s, n, r));
    let h = r.dataContext;
    i == null && h && (i = I(s, n, h), i == null && (i = I(s, [{ prop: e }], h)), i == null && h.dataContext && (i = I(s, n, h.dataContext))), i == null && r.component && r.component.dataItem !== r && (i = xe(r.component, e));
  }
  return i == null && (i = I(s, n, s)), i == null && s.parent && (i = xe(s.parent, e)), i;
}
function Nt(s, e) {
  const t = s.getPrivate("customData");
  if (Re(t)) return t[e];
}
function I(s, e, t, i) {
  let r = t, a = !1;
  for (let n = 0, o = e.length; n < o; n++) {
    let h = e[n];
    if (h.prop) {
      if (r instanceof x) {
        let l = r.get(h.prop);
        l == null && (l = r.getPrivate(h.prop)), l == null && (l = Nt(r, h.prop)), l == null && (l = r[h.prop]), r = l;
      } else if (r.get) {
        let l = r.get(h.prop);
        l == null && (l = r[h.prop]), r = l;
      } else r = r[h.prop];
      if (r == null) return;
    } else switch (h.method) {
      case "formatNumber":
        let l = _e(r);
        l != null && (r = s.getNumberFormatter().format(l, h.params[0] || void 0), a = !0);
        break;
      case "formatDate":
        let d = et(r);
        if (!me(d) || Oe(d.getTime())) return;
        d != null && (r = s.getDateFormatter().format(d, h.params[0] || void 0), a = !0);
        break;
      case "formatDuration":
        let p = _e(r);
        p != null && (r = s.getDurationFormatter().format(p, h.params[0] || void 0, h.params[1] || void 0), a = !0);
        break;
      case "urlEncode":
      case "encodeURIComponent":
        r = encodeURIComponent(r);
        break;
      default:
        r[h.method] && r[h.method].apply(t, h.params);
    }
  }
  if (!a) {
    let n = [{ method: "", params: i }];
    g(r) ? (n[0].method = "formatNumber", n[0].params = "") : me(r) && (n[0].method = "formatDate", n[0].params = ""), n[0].method && (r = I(s, n, r));
  }
  return r;
}
Object.defineProperty(Pe, "prefix", { enumerable: !0, configurable: !0, writable: !0, value: "__amcharts__" });
class L extends x {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "_childrenDisplay", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "children", { enumerable: !0, configurable: !0, writable: !0, value: new Ot(this) }), Object.defineProperty(this, "_percentageSizeChildren", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_percentagePositionChildren", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_prevWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_prevHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_contentMask", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_vsbd0", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_vsbd1", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    super._afterNew(), this._display.addChild(this._childrenDisplay);
  }
  _dispose() {
    V(this.allChildren(), (e) => {
      e.dispose();
    }), this.getPrivate("htmlElement") && this._root._removeHTMLContent(this), super._dispose();
  }
  _changed() {
    if (super._changed(), this.isDirty("interactiveChildren") && (this._display.interactiveChildren = this.get("interactiveChildren", !1)), this.isDirty("layout") && (this._prevWidth = 0, this._prevHeight = 0, this.markDirtyBounds(), this._prevSettings.layout && this.children.each((e) => {
      e.removePrivate("x"), e.removePrivate("y");
    })), (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) && this.children.each((e) => {
      e.markDirtyPosition();
    }), this.isDirty("maskContent")) {
      const e = this._childrenDisplay;
      let t = this._contentMask;
      this.get("maskContent") ? t || (t = Y.new(this._root, { x: -0.5, y: -0.5, width: this.width() + 1, height: this.height() + 1 }), this._contentMask = t, e.addChildAt(t._display, 0), e.mask = t._display) : t && (e.removeChild(t._display), e.mask = null, t.dispose(), this._contentMask = void 0);
    }
  }
  _updateSize() {
    super._updateSize(), _(this._percentageSizeChildren, (e) => {
      e._updateSize();
    }), _(this._percentagePositionChildren, (e) => {
      e.markDirtyPosition(), e._updateSize();
    }), this.updateBackground();
  }
  updateBackground() {
    const e = this.get("background");
    let t = this._localBounds;
    if (t && !this.isHidden()) {
      let i = t.left, r = t.top, a = t.right - i, n = t.bottom - r, o = this.get("maxWidth"), h = this.get("maxHeight");
      h && n > h && (n = h), o && a > o && (a = o);
      let l = this.width(), d = this.height();
      e && (e.setAll({ width: a, height: n, x: i, y: r }), this._display.interactive && (e._display.interactive = !0));
      const p = this._contentMask;
      p && p.setAll({ width: l + 1, height: d + 1 });
      const u = this.get("verticalScrollbar");
      if (u) {
        u.set("height", d), u.set("x", l - u.width() - u.get("marginRight", 0)), u.set("end", u.get("start", 0) + d / this._contentHeight);
        const c = u.get("background");
        c && c.setAll({ width: u.width(), height: d });
        let m = !0;
        this._contentHeight <= d && (m = !1), u.setPrivate("visible", m);
      }
    }
  }
  _applyThemes(e = !1) {
    return !!super._applyThemes(e) && (this.eachChildren((t) => {
      t._applyThemes(e);
    }), !0);
  }
  _applyState(e) {
    super._applyState(e), this.get("setStateOnChildren") && this.eachChildren((t) => {
      t.states.apply(e);
    });
  }
  _applyStateAnimated(e, t) {
    super._applyStateAnimated(e, t), this.get("setStateOnChildren") && this.eachChildren((i) => {
      i.states.applyAnimate(e, t);
    });
  }
  innerWidth() {
    return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0);
  }
  innerHeight() {
    return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0);
  }
  _getBounds() {
    let e = this.get("width"), t = this.get("height"), i = this.getPrivate("width"), r = this.getPrivate("height"), a = { left: 0, top: 0, right: this.width(), bottom: this.height() }, n = this.get("layout"), o = !1, h = !1;
    if ((n instanceof X || n instanceof Z) && (o = !0), n instanceof $ && (h = !0), e == null && i == null || t == null && r == null || this.get("verticalScrollbar")) {
      let l = Number.MAX_VALUE, d = l, p = -l, u = l, c = -l;
      const m = this.get("paddingLeft", 0), b = this.get("paddingTop", 0), S = this.get("paddingRight", 0), H = this.get("paddingBottom", 0);
      this.children.each((D) => {
        if (D.get("position") != "absolute" && D.get("isMeasured")) {
          let N = D.adjustedLocalBounds(), Te = D.x(), Se = D.y(), ae = Te + N.left, ne = Te + N.right, oe = Se + N.top, he = Se + N.bottom;
          o && (ae -= D.get("marginLeft", 0), ne += D.get("marginRight", 0)), h && (oe -= D.get("marginTop", 0), he += D.get("marginBottom", 0)), ae < d && (d = ae), ne > p && (p = ne), oe < u && (u = oe), he > c && (c = he);
        }
      }), d == l && (d = 0), p == -l && (p = 0), u == l && (u = 0), c == -l && (c = 0), a.left = d - m, a.top = u - b, a.right = p + S, a.bottom = c + H;
      const w = this.get("minWidth");
      g(w) && w > 0 && a.right - a.left < w && (a.right >= w ? a.left = a.right - w : a.right = a.left + w);
      const C = this.get("minHeight");
      g(C) && C > 0 && a.bottom - a.top < C && (a.bottom >= C ? a.top = a.bottom - C : a.bottom = a.top + C);
    }
    this._contentWidth = a.right - a.left, this._contentHeight = a.bottom - a.top, g(e) && (a.left = 0, a.right = e), g(i) && (a.left = 0, a.right = i), g(t) && (a.top = 0, a.bottom = t), g(r) && (a.top = 0, a.bottom = r), this._localBounds = a;
  }
  _updateBounds() {
    const e = this.get("layout");
    e && e.updateContainer(this), super._updateBounds(), this.updateBackground();
  }
  markDirty() {
    super.markDirty(), this._root._addDirtyParent(this);
  }
  _prepareChildren() {
    const e = this.innerWidth(), t = this.innerHeight();
    if (e != this._prevWidth || t != this._prevHeight) {
      let i = this.get("layout"), r = !1, a = !1;
      i && ((i instanceof X || i instanceof Z) && (r = !0), i instanceof $ && (a = !0)), _(this._percentageSizeChildren, (n) => {
        if (!r) {
          let o = n.get("width");
          o instanceof f && n.setPrivate("width", o.value * e);
        }
        if (!a) {
          let o = n.get("height");
          o instanceof f && n.setPrivate("height", o.value * t);
        }
      }), _(this._percentagePositionChildren, (n) => {
        n.markDirtyPosition(), n.markDirtyBounds();
      }), this._prevWidth = e, this._prevHeight = t, this._sizeDirty = !0, this.updateBackground();
    }
    this._handleStates();
  }
  _updateChildren() {
    if (this.isDirty("html")) {
      const e = this.get("html");
      e && e !== "" ? this._root._setHTMLContent(this, De(this, this.get("html", ""))) : this._root._removeHTMLContent(this), this._root._positionHTMLElement(this);
    }
    if (this.isDirty("verticalScrollbar")) {
      const e = this.get("verticalScrollbar");
      if (e) {
        e._setParent(this), e.startGrip.setPrivate("visible", !1), e.endGrip.setPrivate("visible", !1), this.set("maskContent", !0), this.set("paddingRight", e.width() + e.get("marginRight", 0) + e.get("marginLeft", 0));
        let t = this.get("background");
        t || (t = this.set("background", Y.new(this._root, { themeTags: ["background"], fillOpacity: 0, fill: this._root.interfaceColors.get("alternativeBackground") }))), this._vsbd0 = this.events.on("wheel", (i) => {
          const r = i.originalEvent;
          if (!ut(r, this)) return;
          r.preventDefault();
          let a = r.deltaY / 5e3;
          const n = e.get("start", 0), o = e.get("end", 1);
          n + a <= 0 && (a = -n), o + a >= 1 && (a = 1 - o), n + a >= 0 && o + a <= 1 && (e.set("start", n + a), e.set("end", o + a));
        }), this._disposers.push(this._vsbd0), this._vsbd1 = e.events.on("rangechanged", () => {
          let i = this._contentHeight;
          const r = this._childrenDisplay, a = this._contentMask;
          r.y = -e.get("start", 0) * i, r.markDirtyLayer(), a && (a._display.y = -r.y, r.mask = a._display);
        }), this._disposers.push(this._vsbd1), this._display.addChild(e._display);
      } else {
        const t = this._prevSettings.verticalScrollbar;
        t && (this._display.removeChild(t._display), this._vsbd0 && this._vsbd0.dispose(), this._vsbd1 && this._vsbd1.dispose(), this._childrenDisplay.y = 0, this.setPrivate("height", void 0), this.set("maskContent", !1), this.set("paddingRight", void 0));
      }
    }
    if (this.isDirty("background")) {
      const e = this._prevSettings.background;
      e && this._display.removeChild(e._display);
      const t = this.get("background");
      t instanceof x && (t.set("isMeasured", !1), t._setParent(this), this._display.addChildAt(t._display, 0));
    }
    if (this.isDirty("mask")) {
      const e = this.get("mask"), t = this._prevSettings.mask;
      if (t && (this._display.removeChild(t._display), t != e && t.dispose()), e) {
        const i = e.parent;
        i && i.children.removeValue(e), e._setParent(this), this._display.addChildAt(e._display, 0), this._childrenDisplay.mask = e._display;
      }
    }
  }
  _processTemplateField() {
    super._processTemplateField(), this.children.each((e) => {
      e._processTemplateField();
    });
  }
  walkChildren(e) {
    this.children.each((t) => {
      t instanceof L && t.walkChildren(e), e(t);
    });
  }
  eachChildren(e) {
    const t = this.get("background");
    t && e(t);
    const i = this.get("verticalScrollbar");
    i && e(i);
    const r = this.get("mask");
    r && e(r), this.children.values.forEach((a) => {
      e(a);
    });
  }
  allChildren() {
    const e = [];
    return this.eachChildren((t) => {
      e.push(t);
    }), e;
  }
  _setDataItem(e) {
    const t = e !== this._dataItem;
    super._setDataItem(e);
    const i = this.get("html", "");
    i && i !== "" && t && this._root._setHTMLContent(this, De(this, i));
  }
}
Object.defineProperty(L, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Container" }), Object.defineProperty(L, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: x.classNames.concat([L.className]) });
class ie extends x {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textStyle", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeTextStyle() }), Object.defineProperty(this, "_display", { enumerable: !0, configurable: !0, writable: !0, value: this._root._renderer.makeText("", this.textStyle) }), Object.defineProperty(this, "_textStyles", { enumerable: !0, configurable: !0, writable: !0, value: ["textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "maxChars"] }), Object.defineProperty(this, "_originalScale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _updateBounds() {
    if (this.get("text")) super._updateBounds();
    else {
      let e = { left: 0, right: 0, top: 0, bottom: 0 };
      this._adjustedLocalBounds = e;
    }
  }
  _changed() {
    super._changed(), this._display.clear();
    let e = this.textStyle;
    if (this.isDirty("opacity")) {
      let t = this.get("opacity", 1);
      this._display.alpha = t;
    }
    if ((this.isDirty("text") || this.isDirty("populateText")) && (this._display.text = this._getText(), this.markDirtyBounds(), this.get("role") == "tooltip" && this._root.updateTooltip(this)), this.isPrivateDirty("tooltipElement") && this.getPrivate("tooltipElement") && this._disposers.push(new P(() => {
      this._root._removeTooltipElement(this);
    })), this.isDirty("width") && (e.wordWrapWidth = this.width(), this.markDirtyBounds()), this.isDirty("oversizedBehavior") && (e.oversizedBehavior = this.get("oversizedBehavior", "none"), this.markDirtyBounds()), this.isDirty("breakWords") && (e.breakWords = this.get("breakWords", !1), this.markDirtyBounds()), this.isDirty("ellipsis") && (e.ellipsis = this.get("ellipsis"), this.markDirtyBounds()), this.isDirty("ignoreFormatting") && (e.ignoreFormatting = this.get("ignoreFormatting", !1), this.markDirtyBounds()), this.isDirty("minScale") && (e.minScale = this.get("minScale", 0), this.markDirtyBounds()), this.isDirty("fill")) {
      let t = this.get("fill");
      t && (e.fill = t);
    }
    if (this.isDirty("fillOpacity")) {
      let t = this.get("fillOpacity", 1);
      t && (e.fillOpacity = t);
    }
    (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) && (e.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth")), this.markDirtyBounds()), (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) && (e.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight")), this.markDirtyBounds()), _(this._textStyles, (t) => {
      this._dirty[t] && (e[t] = this.get(t), this.markDirtyBounds());
    }), e.fontSize = this.get("fontSize"), e.fontFamily = this.get("fontFamily"), this._display.style = e, this.isDirty("role") && this.get("role") == "tooltip" && this._root.updateTooltip(this);
  }
  _getText() {
    let e = this.get("text", "");
    return this.get("maxChars") && (e = _t(e, this.get("maxChars", 1e8), this.get("breakWords"), this.get("ellipsis"))), this.get("populateText") ? De(this, e) : e;
  }
  markDirtyText() {
    this._display.text = this._getText(), this.get("role") == "tooltip" && this._root.updateTooltip(this), this.markDirtyBounds(), this.markDirty();
  }
  _setDataItem(e) {
    super._setDataItem(e), this.get("populateText") && this.markDirtyText();
  }
  getNumberFormatter() {
    return this.parent ? this.parent.getNumberFormatter() : super.getNumberFormatter();
  }
  getDateFormatter() {
    return this.parent ? this.parent.getDateFormatter() : super.getDateFormatter();
  }
  getDurationFormatter() {
    return this.parent ? this.parent.getDurationFormatter() : super.getDurationFormatter();
  }
}
Object.defineProperty(ie, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Text" }), Object.defineProperty(ie, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: x.classNames.concat([ie.className]) });
class ge extends L {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_text", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_textKeys", { enumerable: !0, configurable: !0, writable: !0, value: ["text", "fill", "fillOpacity", "textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "populateText", "role", "ignoreFormatting", "maxChars"] });
  }
  get text() {
    return this._text;
  }
  _afterNew() {
    super._afterNew(), this._makeText(), _(this._textKeys, (e) => {
      const t = this.get(e);
      t != null && this._text.set(e, t);
    }), this.get("html", "") !== "" && this._text.set("text", ""), this.onPrivate("maxWidth", () => {
      this._setMaxDimentions();
    }), this.onPrivate("maxHeight", () => {
      this._setMaxDimentions();
    });
  }
  _makeText() {
    this._text = this.children.push(ie.new(this._root, {}));
  }
  _updateChildren() {
    if (super._updateChildren(), _(this._textKeys, (e) => {
      this._text.set(e, this.get(e));
    }), this.isDirty("maxWidth") && this._setMaxDimentions(), this.isDirty("maxHeight") && this._setMaxDimentions(), this.isDirty("rotation") && this._setMaxDimentions(), this.get("html", "") !== "" ? this._text.set("text", "") : this._text.set("text", this.get("text")), this.isDirty("textAlign") || this.isDirty("width")) {
      const e = this.get("textAlign");
      let t;
      this.get("width") != null ? t = e == "right" ? Je : e == "center" ? qe : 0 : e == "left" || e == "start" ? t = this.get("paddingLeft") : e != "right" && e != "end" || (t = -this.get("paddingRight")), this.text.set("x", t);
    }
  }
  _setMaxDimentions() {
    const e = this.get("rotation"), t = e == 90 || e == 270 || e == -90, i = this.get("maxWidth", this.getPrivate("maxWidth", 1 / 0));
    g(i) ? this.text.set(t ? "maxHeight" : "maxWidth", i - this.get("paddingLeft", 0) - this.get("paddingRight", 0)) : this.text.set(t ? "maxHeight" : "maxWidth", void 0);
    const r = this.get("maxHeight", this.getPrivate("maxHeight", 1 / 0));
    g(r) ? this.text.set(t ? "maxWidth" : "maxHeight", r - this.get("paddingTop", 0) - this.get("paddingBottom", 0)) : this.text.set(t ? "maxWidth" : "maxHeight", void 0);
  }
  _setDataItem(e) {
    super._setDataItem(e), this._markDirtyKey("text"), this.text.get("populateText") && this.text.markDirtyText();
  }
  getText() {
    return this._text._getText();
  }
}
Object.defineProperty(ge, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Label" }), Object.defineProperty(ge, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: L.classNames.concat([ge.className]) });
class Mi {
  constructor(e, t) {
    if (Object.defineProperty(this, "_root", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rules", { enumerable: !0, configurable: !0, writable: !0, value: {} }), this._root = e, !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
  }
  static new(e) {
    const t = new this(e, !0);
    return t.setupDefaultRules(), t;
  }
  setupDefaultRules() {
  }
  _lookupRules(e) {
    return this._rules[e];
  }
  ruleRaw(e, t = []) {
    let i = this._rules[e];
    i || (i = this._rules[e] = []), t.sort(F);
    const { index: r, found: a } = at(i, (n) => {
      const o = F(n.tags.length, t.length);
      return o === 0 ? Ze(n.tags, t, F) : o;
    });
    if (a) return i[r].template;
    {
      const n = J.new({});
      return i.splice(r, 0, { tags: t, template: n }), n;
    }
  }
  rule(e, t = []) {
    return this.ruleRaw(e, t);
  }
}
export {
  $,
  Ft as A,
  A as B,
  g as C,
  pe as D,
  mi as E,
  Yt as F,
  q as G,
  _i as H,
  di as I,
  Jt as J,
  yi as K,
  zt as L,
  pi as M,
  T as N,
  F as O,
  Be as P,
  ui as Q,
  ci as R,
  gi as S,
  Ce as T,
  _e as U,
  li as V,
  y as W,
  X,
  Xt as Y,
  Z,
  Re as _,
  ke as a,
  Vt as a0,
  $t as a1,
  se as a2,
  v as a3,
  ti as a4,
  lt as a5,
  k as a6,
  ei as a7,
  si as a8,
  U as a9,
  Ye as aA,
  st as aB,
  Pt as aC,
  kt as aD,
  ut as aE,
  Kt as aF,
  Ei as aG,
  Di as aH,
  Me as aI,
  ni as aJ,
  vi as aK,
  Oe as aL,
  fi as aM,
  xi as aN,
  Gt as aa,
  we as ab,
  Ut as ac,
  f as ad,
  ki as ae,
  ii as af,
  Ve as ag,
  Oi as ah,
  Pi as ai,
  be as aj,
  bi as ak,
  ge as al,
  Ie as am,
  Mi as an,
  Si as ao,
  qe as ap,
  St as aq,
  M as ar,
  Ti as as,
  wi as at,
  J as au,
  ye as av,
  ve as aw,
  $e as ax,
  Ci as ay,
  At as az,
  z as b,
  Ue as c,
  P as d,
  Qt as e,
  O as f,
  Zt as g,
  Fe as h,
  L as i,
  hi as j,
  ji as k,
  ri as l,
  De as m,
  Ne as n,
  Ee as o,
  Wt as p,
  de as q,
  Je as r,
  ie as s,
  qt as t,
  ai as u,
  Pe as v,
  _ as w,
  R as x,
  oi as y,
  Y as z
};
//# sourceMappingURL=Theme-BKgnQH4T.js.map
