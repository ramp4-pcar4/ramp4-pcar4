import { aP as ot } from "./main-DIdq27YS.js";
import { B as ee, k as lt, G as ht, $ as ut, X as ct, Z as dt, u as bt, w as y, x as te, i as q, a as Ze, r as Z, z as ft, K as ie, b as Le, l as K, q as me, c as C, t as gt, e as mt, L as _e, N as re, O as pt, d as $, f as Te, g as _t, h as se, j as ze, T as je, m as yt, W as he, n as pe, s as vt, J as Ke, _ as Je, y as Ce, F as wt, o as Q, p as J, v as U, A as xt, C as H, E as Pt, D as E, H as ce, S as de, I as Fe, M as Ot, P as Ye, Q as kt, R as Mt, U as R, V as Ie, Y as St, a0 as jt, a1 as Et, a2 as Tt, a3 as X, a4 as be, a5 as Ct, a6 as He, a7 as Ee, a8 as Qe, a9 as Re, aa as Bt, ab as Dt, ac as et, ad as tt, ae as At, af as Lt, ag as zt, ah as Ft, ai as oe, aj as xe } from "./Theme-9-3oWXfl.js";
import { u as We } from "./Tooltip-BpOAo5QV.js";
import { s as Yt } from "./DefaultTheme-Bk--IyzW.js";
class It {
  constructor() {
    Object.defineProperty(this, "_observer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_targets", { enumerable: !0, configurable: !0, writable: !0, value: [] }), this._observer = new ResizeObserver((e) => {
      y(e, (t) => {
        y(this._targets, (i) => {
          i.target === t.target && i.callback();
        });
      });
    });
  }
  addTarget(e, t) {
    this._observer.observe(e, { box: "border-box" }), this._targets.push({ target: e, callback: t });
  }
  removeTarget(e) {
    this._observer.unobserve(e), _e(this._targets, (t) => t.target !== e);
  }
}
class ye {
  constructor() {
    Object.defineProperty(this, "_timer", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_targets", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  addTarget(e, t) {
    if (this._timer === null) {
      let r = null;
      const a = () => {
        const s = Date.now();
        (r === null || s > r + ye.delay) && (r = s, y(this._targets, (n) => {
          let h = n.target.getBoundingClientRect();
          h.width === n.size.width && h.height === n.size.height || (n.size = h, n.callback());
        })), this._targets.length === 0 ? this._timer = null : this._timer = requestAnimationFrame(a);
      };
      this._timer = requestAnimationFrame(a);
    }
    let i = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    this._targets.push({ target: e, callback: t, size: i });
  }
  removeTarget(e) {
    _e(this._targets, (t) => t.target !== e), this._targets.length === 0 && this._timer !== null && (cancelAnimationFrame(this._timer), this._timer = null);
  }
}
Object.defineProperty(ye, "delay", { enumerable: !0, configurable: !0, writable: !0, value: 200 });
let Pe = null;
function Ht() {
  return Pe === null && (Pe = typeof ResizeObserver < "u" ? new It() : new ye()), Pe;
}
class Rt {
  constructor(e, t) {
    Object.defineProperty(this, "_sensor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_element", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_listener", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), this._sensor = Ht(), this._element = e, this._listener = Ke(t), this._sensor.addTarget(e, t);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = !0, this._sensor.removeTarget(this._element), this._listener.dispose());
  }
  get sensor() {
    return this._sensor;
  }
}
class ge extends ee {
}
Object.defineProperty(ge, "className", { enumerable: !0, configurable: !0, writable: !0, value: "InterfaceColors" }), Object.defineProperty(ge, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: ee.classNames.concat([ge.className]) });
class Wt extends ee {
  _setDefaults() {
    this._setDefault("negativeBase", 0), this._setDefault("numberFormat", "#,###.#####"), this._setDefault("smallNumberThreshold", 1);
    const e = "_big_number_suffix_", t = "_small_number_suffix_", i = "_byte_suffix_";
    this._setDefault("bigNumberPrefixes", [{ number: 1e3, suffix: this._t(e + "3") }, { number: 1e6, suffix: this._t(e + "6") }, { number: 1e9, suffix: this._t(e + "9") }, { number: 1e12, suffix: this._t(e + "12") }, { number: 1e15, suffix: this._t(e + "15") }, { number: 1e18, suffix: this._t(e + "18") }, { number: 1e21, suffix: this._t(e + "21") }, { number: 1e24, suffix: this._t(e + "24") }]), this._setDefault("smallNumberPrefixes", [{ number: 1e-24, suffix: this._t(t + "24") }, { number: 1e-21, suffix: this._t(t + "21") }, { number: 1e-18, suffix: this._t(t + "18") }, { number: 1e-15, suffix: this._t(t + "15") }, { number: 1e-12, suffix: this._t(t + "12") }, { number: 1e-9, suffix: this._t(t + "9") }, { number: 1e-6, suffix: this._t(t + "6") }, { number: 1e-3, suffix: this._t(t + "3") }]), this._setDefault("bytePrefixes", [{ number: 1, suffix: this._t(i + "B") }, { number: 1024, suffix: this._t(i + "KB") }, { number: 1048576, suffix: this._t(i + "MB") }, { number: 1073741824, suffix: this._t(i + "GB") }, { number: 1099511627776, suffix: this._t(i + "TB") }, { number: 1125899906842624, suffix: this._t(i + "PB") }]), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let r;
    (t == null || pe(t) && t.toLowerCase() === "number") && (t = this.get("numberFormat", ""));
    let a = Number(e);
    if (Je(t)) try {
      return this.get("intlLocales") ? new Intl.NumberFormat(this.get("intlLocales"), t).format(a) : new Intl.NumberFormat(void 0, t).format(a);
    } catch {
      return "Invalid";
    }
    else {
      t = Ce(t);
      let s, n = this.parseFormat(t, this._root.language);
      s = a > this.get("negativeBase") ? n.positive : a < this.get("negativeBase") ? n.negative : n.zero, i == null || s.mod || (s = wt(s), s.decimals.active = a == 0 ? 0 : i), r = s.template.split(Q).join(this.applyFormat(a, s));
    }
    return this.get("forceLTR") === !0 && (r = "‎" + r), r;
  }
  parseFormat(e, t) {
    const i = t.translateEmpty("_thousandSeparator"), r = t.translateEmpty("_decimalSeparator");
    let a = { positive: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 }, negative: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 }, zero: { thousands: { active: -1, passive: -1, interval: -1, separator: i }, decimals: { active: -1, passive: -1, separator: r }, template: "", source: "", parsed: !1 } }, s = (e = e.replace("||", J)).split("|");
    return a.positive.source = s[0], s[2] === void 0 ? a.zero = a.positive : a.zero.source = s[2], s[1] === void 0 ? a.negative = a.positive : a.negative.source = s[1], he(a, (n, h) => {
      if (h.parsed) return;
      let c = h.source;
      c.toLowerCase() === "number" && (c = this.get("numberFormat", "#,###.#####"));
      let g = U.chunk(c, !0);
      for (let u = 0; u < g.length; u++) {
        let b = g[u];
        if (b.text = b.text.replace(J, "|"), b.type === "value") {
          let o = b.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
          if (o) if (o === null || o[0] === "") h.template += b.text;
          else {
            let p = o[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
            p && (h.mod = p[0].toLowerCase(), h.modSpacing = !!o[0].match(/[ ]{1}[abespABESP%‰!]{1}$/));
            let l = o[0].split(".");
            if (l[0] !== "") {
              h.thousands.active = (l[0].match(/0/g) || []).length, h.thousands.passive = (l[0].match(/\#/g) || []).length + h.thousands.active;
              let m = l[0].split(",");
              m.length === 1 || (h.thousands.interval = (m.pop() || "").length, h.thousands.interval === 0 && (h.thousands.interval = -1));
            }
            l[1] === void 0 || (h.decimals.active = (l[1].match(/0/g) || []).length, h.decimals.passive = (l[1].match(/\#/g) || []).length + h.decimals.active), h.template += b.text.split(o[0]).join(Q);
          }
        } else h.template += b.text;
      }
      h.parsed = !0;
    }), a;
  }
  applyFormat(e, t) {
    let i = e < 0;
    e = Math.abs(e);
    let r = "", a = "", s = t.mod ? t.mod.split("") : [];
    if (s.indexOf("b") !== -1) {
      let u = this.applyPrefix(e, this.get("bytePrefixes"), s.indexOf("!") !== -1);
      e = u[0], r = u[1], a = u[2], t.modSpacing && (a = " " + a);
    } else if (s.indexOf("a") !== -1) {
      let u = this.applyPrefix(e, e < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), s.indexOf("!") !== -1);
      e = u[0], r = u[1], a = u[2], t.modSpacing && (a = " " + a);
    } else if (s.indexOf("p") !== -1) {
      let u = Math.min(e.toString().length + 2, 21);
      e = parseFloat(e.toPrecision(u)), r = this._root.language.translate("_percentPrefix"), a = this._root.language.translate("_percentSuffix"), r == "" && a == "" && (a = "%");
    } else if (s.indexOf("%") !== -1) {
      let u = Math.min(e.toString().length + 2, 21);
      e *= 100, e = parseFloat(e.toPrecision(u)), a = "%";
    } else if (s.indexOf("‰") !== -1) {
      let u = Math.min(e.toString().length + 3, 21);
      e *= 1e3, e = parseFloat(e.toPrecision(u)), a = "‰";
    }
    if (s.indexOf("e") !== -1) {
      let u;
      u = t.decimals.passive >= 0 ? e.toExponential(t.decimals.passive).split("e") : e.toExponential().split("e"), e = Number(u[0]), a = "e" + u[1], t.modSpacing && (a = " " + a);
    } else if (t.decimals.passive === 0) e = Math.round(e);
    else if (t.decimals.passive > 0) {
      let u = Math.pow(10, t.decimals.passive);
      e = Math.round(e * u) / u;
    }
    let n = "", h = xt(e).split("."), c = h[0];
    if (c.length < t.thousands.active && (c = Array(t.thousands.active - c.length + 1).join("0") + c), t.thousands.interval > 0) {
      let u = [], b = c.split("").reverse().join("");
      for (let o = 0, p = c.length; o <= p; o += t.thousands.interval) {
        let l = b.substr(o, t.thousands.interval).split("").reverse().join("");
        l !== "" && u.unshift(l);
      }
      c = u.join(t.thousands.separator);
    }
    n += c, h.length === 1 && h.push("");
    let g = h[1];
    return g.length < t.decimals.active && (g += Array(t.decimals.active - g.length + 1).join("0")), g !== "" && (n += t.decimals.separator + g), n === "" && (n = "0"), e !== 0 && i && s.indexOf("s") === -1 && (n = "-" + n), r && (n = r + n), a && (n += a), n;
  }
  applyPrefix(e, t, i = !1) {
    let r = e, a = "", s = "", n = !1, h = 1;
    for (let c = 0, g = t.length; c < g; c++) t[c].number <= e && (t[c].number === 0 ? r = 0 : (r = e / t[c].number, h = t[c].number), a = t[c].prefix, s = t[c].suffix, n = !0);
    return !n && i && t.length && e != 0 && (r = e / t[0].number, a = t[0].prefix, s = t[0].suffix, n = !0), n && (r = parseFloat(r.toPrecision(Math.min(h.toString().length + Math.floor(r).toString().replace(/[^0-9]*/g, "").length, 21)))), [r, a, s];
  }
  escape(e) {
    return e.replace("||", J);
  }
  unescape(e) {
    return e.replace(J, "|");
  }
}
function it(d, e) {
  let t = 0, i = 0, r = 1, a = 0, s = 0, n = 0, h = 0, c = 0;
  return d.formatToParts(e).forEach((g) => {
    switch (g.type) {
      case "year":
        t = +g.value;
        break;
      case "month":
        i = +g.value - 1;
        break;
      case "day":
        r = +g.value;
        break;
      case "hour":
        a = +g.value;
        break;
      case "minute":
        s = +g.value;
        break;
      case "second":
        n = +g.value;
        break;
      case "fractionalSecond":
        h = +g.value;
        break;
      case "weekday":
        switch (g.value) {
          case "Sun":
            c = 0;
            break;
          case "Mon":
            c = 1;
            break;
          case "Tue":
            c = 2;
            break;
          case "Wed":
            c = 3;
            break;
          case "Thu":
            c = 4;
            break;
          case "Fri":
            c = 5;
            break;
          case "Sat":
            c = 6;
        }
    }
  }), a === 24 && (a = 0), { year: t, month: i, day: r, hour: a, minute: s, second: n, millisecond: h, weekday: c };
}
function Ue(d, e) {
  const { year: t, month: i, day: r, hour: a, minute: s, second: n, millisecond: h } = it(d, e);
  return Date.UTC(t, i, r, a, s, n, h);
}
class Ut {
  constructor(e, t) {
    if (Object.defineProperty(this, "_utc", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_dtf", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "name", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this.name = e, this._utc = new Intl.DateTimeFormat("UTC", { hour12: !1, timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 }), this._dtf = new Intl.DateTimeFormat("UTC", { hour12: !1, timeZone: e, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 });
  }
  static new(e) {
    return new this(e, !0);
  }
  convertLocal(e) {
    const t = this.offsetUTC(e), i = e.getTimezoneOffset(), r = new Date(e);
    r.setUTCMinutes(r.getUTCMinutes() - (t - i));
    const a = r.getTimezoneOffset();
    return i != a && r.setUTCMinutes(r.getUTCMinutes() + a - i), r;
  }
  offsetUTC(e) {
    return (Ue(this._utc, e) - Ue(this._dtf, e)) / 6e4;
  }
  parseDate(e) {
    return it(this._dtf, e);
  }
}
class Vt extends ee {
  _setDefaults() {
    this._setDefault("capitalize", !0), this._setDefault("dateFormat", "yyyy-MM-dd"), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t) {
    let i;
    t !== void 0 && t !== "" || (t = this.get("dateFormat", "yyyy-MM-dd"));
    let r = e;
    if (Je(t)) try {
      const n = this.get("intlLocales");
      return n ? new Intl.DateTimeFormat(n, t).format(r) : new Intl.DateTimeFormat(void 0, t).format(r);
    } catch {
      return "Invalid";
    }
    let a = this.parseFormat(t);
    const s = this._root.timezone;
    return s && !this._root.utc && (r = s.convertLocal(r)), H(r.getTime()) ? (i = this.applyFormat(r, a), this.get("capitalize") && (i = i.replace(/^.{1}/, i.substr(0, 1).toUpperCase())), i) : "Invalid date";
  }
  applyFormat(e, t) {
    let i, r, a, s, n, h, c, g, u = t.template, b = e.getTime();
    this._root.utc ? (i = e.getUTCFullYear(), r = e.getUTCMonth(), a = e.getUTCDay(), s = e.getUTCDate(), n = e.getUTCHours(), h = e.getUTCMinutes(), c = e.getUTCSeconds(), g = e.getUTCMilliseconds()) : (i = e.getFullYear(), r = e.getMonth(), a = e.getDay(), s = e.getDate(), n = e.getHours(), h = e.getMinutes(), c = e.getSeconds(), g = e.getMilliseconds());
    for (let o = 0, p = t.parts.length; o < p; o++) {
      let l = "";
      switch (t.parts[o]) {
        case "G":
          l = this._t(i < 0 ? "_era_bc" : "_era_ad");
          break;
        case "yyyy":
          l = Math.abs(i).toString(), i < 0 && (l += this._t("_era_bc"));
          break;
        case "yyy":
        case "yy":
        case "y":
          l = Math.abs(i).toString().substr(-t.parts[o].length), i < 0 && (l += this._t("_era_bc"));
          break;
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
          let m = kt(e, this._root.utc);
          l = t.parts[o] == "YYYY" ? Math.abs(m).toString() : Math.abs(m).toString().substr(-t.parts[o].length), m < 0 && (l += this._t("_era_bc"));
          break;
        case "u":
        case "F":
        case "g":
          break;
        case "q":
          l = "" + Math.ceil((e.getMonth() + 1) / 3);
          break;
        case "MMMMM":
          l = this._t(this._getMonth(r)).substr(0, 1);
          break;
        case "MMMM":
          l = this._t(this._getMonth(r));
          break;
        case "MMM":
          l = this._t(this._getShortMonth(r));
          break;
        case "MM":
          l = E(r + 1, 2, "0");
          break;
        case "M":
          l = (r + 1).toString();
          break;
        case "ww":
          l = E(Ye(e, this._root.utc), 2, "0");
          break;
        case "w":
          l = Ye(e, this._root.utc).toString();
          break;
        case "W":
          l = Ot(e, this._root.utc).toString();
          break;
        case "dd":
          l = E(s, 2, "0");
          break;
        case "d":
          l = s.toString();
          break;
        case "DD":
        case "DDD":
          l = E(Fe(e, this._root.utc).toString(), t.parts[o].length, "0");
          break;
        case "D":
          l = Fe(e, this._root.utc).toString();
          break;
        case "t":
          l = this._root.language.translateFunc("_dateOrd").call(this, s);
          break;
        case "E":
          l = (a || 7).toString();
          break;
        case "EE":
          l = E((a || 7).toString(), 2, "0");
          break;
        case "EEE":
        case "eee":
          l = this._t(this._getShortWeekday(a));
          break;
        case "EEEE":
        case "eeee":
          l = this._t(this._getWeekday(a));
          break;
        case "EEEEE":
        case "eeeee":
          l = this._t(this._getShortWeekday(a)).substr(0, 1);
          break;
        case "e":
        case "ee":
          l = (a - (this._root.locale.firstDayOfWeek || 1) + 1).toString(), t.parts[o] == "ee" && (l = E(l, 2, "0"));
          break;
        case "a":
          l = n >= 12 ? this._t("PM") : this._t("AM");
          break;
        case "aa":
          l = n >= 12 ? this._t("P.M.") : this._t("A.M.");
          break;
        case "aaa":
          l = n >= 12 ? this._t("P") : this._t("A");
          break;
        case "h":
          l = de(n).toString();
          break;
        case "hh":
          l = E(de(n), 2, "0");
          break;
        case "H":
          l = n.toString();
          break;
        case "HH":
          l = E(n, 2, "0");
          break;
        case "K":
          l = de(n, 0).toString();
          break;
        case "KK":
          l = E(de(n, 0), 2, "0");
          break;
        case "k":
          l = (n + 1).toString();
          break;
        case "kk":
          l = E(n + 1, 2, "0");
          break;
        case "m":
          l = h.toString();
          break;
        case "mm":
          l = E(h, 2, "0");
          break;
        case "s":
          l = c.toString();
          break;
        case "ss":
          l = E(c, 2, "0");
          break;
        case "S":
        case "SS":
        case "SSS":
          l = Math.round(g / 1e3 * Math.pow(10, t.parts[o].length)).toString();
          break;
        case "x":
          l = b.toString();
          break;
        case "n":
        case "nn":
        case "nnn":
          l = E(g, t.parts[o].length, "0");
          break;
        case "z":
          l = ce(e, !1, !1, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zz":
          l = ce(e, !0, !1, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zzz":
          l = ce(e, !1, !0, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zzzz":
          l = ce(e, !0, !0, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "Z":
        case "ZZ":
          let _ = this._root.utc ? "UTC" : this._root.timezone;
          _ instanceof Ut && (_ = _.name);
          const w = _ ? Pt(_) : e.getTimezoneOffset();
          let v = Math.abs(w) / 60, f = Math.floor(v), x = 60 * v - 60 * f;
          this._root.utc && (f = 0, x = 0), t.parts[o] == "Z" ? (l = "GMT", l += w > 0 ? "-" : "+", l += E(f, 2) + ":" + E(x, 2)) : (l = w > 0 ? "-" : "+", l += E(f, 2) + E(x, 2));
          break;
        case "i":
          l = e.toISOString();
          break;
        case "I":
          l = e.toUTCString();
      }
      u = u.replace(Q, l);
    }
    return u;
  }
  parseFormat(e) {
    let t = { template: "", parts: [] }, i = U.chunk(e, !0);
    for (let r = 0; r < i.length; r++) {
      let a = i[r];
      if (a.type === "value") {
        if (a.text.match(/^date$/i)) {
          let n = this.get("dateFormat", "yyyy-MM-dd");
          pe(n) || (n = "yyyy-MM-dd"), a.text = n;
        }
        let s = a.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
        if (s) for (let n = 0; n < s.length; n++) t.parts.push(s[n]), a.text = a.text.replace(s[n], Q);
      }
      t.template += a.text;
    }
    return t;
  }
  _months() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  _getMonth(e) {
    return this._months()[e];
  }
  _shortMonths() {
    return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  _getShortMonth(e) {
    return this._shortMonths()[e];
  }
  _weekdays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  _getWeekday(e) {
    return this._weekdays()[e];
  }
  _shortWeekdays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  _getShortWeekday(e) {
    return this._shortWeekdays()[e];
  }
  parse(e, t) {
    if (e instanceof Date) return e;
    if (H(e)) return new Date(e);
    if (t == "x") return new Date(parseInt(e));
    let i;
    pe(e) || (e = e.toString());
    let r = "";
    t = (t = Ce(t)).substr(0, e.length);
    let a = this.parseFormat(t), s = { year: -1, year3: -1, year2: -1, year1: -1, month: -1, monthShort: -1, monthLong: -1, weekdayShort: -1, weekdayLong: -1, day: -1, yearDay: -1, week: -1, hourBase0: -1, hour12Base0: -1, hourBase1: -1, hour12Base1: -1, minute: -1, second: -1, millisecond: -1, millisecondDigits: -1, am: -1, zone: -1, timestamp: -1, iso: -1 }, n = { year: 1970, month: 0, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, timestamp: null, offset: 0, utc: this._root.utc }, h = 0, c = 0;
    for (let b = 0; b < a.parts.length; b++) {
      switch (c = b + h + 1, a.parts[b]) {
        case "yyyy":
        case "YYYY":
          r += "([0-9]{4})", s.year = c;
          break;
        case "yyy":
        case "YYY":
          r += "([0-9]{3})", s.year3 = c;
          break;
        case "yy":
        case "YY":
          r += "([0-9]{2})", s.year2 = c;
          break;
        case "y":
        case "Y":
          r += "([0-9]{1})", s.year1 = c;
          break;
        case "MMMM":
          r += "(" + this.getStringList(this._months()).join("|") + ")", s.monthLong = c;
          break;
        case "MMM":
          r += "(" + this.getStringList(this._shortMonths()).join("|") + ")", s.monthShort = c;
          break;
        case "MM":
        case "M":
          r += "([0-9]{2}|[0-9]{1})", s.month = c;
          break;
        case "ww":
        case "w":
          r += "([0-9]{2}|[0-9]{1})", s.week = c;
          break;
        case "dd":
        case "d":
          r += "([0-9]{2}|[0-9]{1})", s.day = c;
          break;
        case "DDD":
        case "DD":
        case "D":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", s.yearDay = c;
          break;
        case "dddd":
          r += "(" + this.getStringList(this._weekdays()).join("|") + ")", s.weekdayLong = c;
          break;
        case "ddd":
          r += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")", s.weekdayShort = c;
          break;
        case "aaa":
        case "aa":
        case "a":
          r += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")", s.am = c;
          break;
        case "hh":
        case "h":
          r += "([0-9]{2}|[0-9]{1})", s.hour12Base1 = c;
          break;
        case "HH":
        case "H":
          r += "([0-9]{2}|[0-9]{1})", s.hourBase0 = c;
          break;
        case "KK":
        case "K":
          r += "([0-9]{2}|[0-9]{1})", s.hour12Base0 = c;
          break;
        case "kk":
        case "k":
          r += "([0-9]{2}|[0-9]{1})", s.hourBase1 = c;
          break;
        case "mm":
        case "m":
          r += "([0-9]{2}|[0-9]{1})", s.minute = c;
          break;
        case "ss":
        case "s":
          r += "([0-9]{2}|[0-9]{1})", s.second = c;
          break;
        case "SSS":
        case "SS":
        case "S":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", s.millisecond = c, s.millisecondDigits = a.parts[b].length;
          break;
        case "nnn":
        case "nn":
        case "n":
          r += "([0-9]{3}|[0-9]{2}|[0-9]{1})", s.millisecond = c;
          break;
        case "x":
          r += "([0-9]{1,})", s.timestamp = c;
          break;
        case "Z":
          r += "GMT([-+]+[0-9]{2}:[0-9]{2})", s.zone = c;
          break;
        case "ZZ":
          r += "([\\-+]+[0-9]{2}[0-9]{2})", s.zone = c;
          break;
        case "i":
          r += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)", s.iso = c, h += 7;
          break;
        case "G":
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
        case "MMMMM":
        case "W":
        case "EEEEE":
        case "EEEE":
        case "EEE":
        case "EE":
        case "E":
        case "eeeee":
        case "eeee":
        case "eee":
        case "ee":
        case "e":
        case "zzzz":
        case "zzz":
        case "zz":
        case "z":
        case "t":
          h--;
      }
      r += "[^0-9]*";
    }
    let g = new RegExp(r), u = e.match(g);
    if (u) {
      if (s.year > -1 && (n.year = parseInt(u[s.year])), s.year3 > -1) {
        let b = parseInt(u[s.year3]);
        b += 1e3, n.year = b;
      }
      if (s.year2 > -1) {
        let b = parseInt(u[s.year2]);
        b += b > 50 ? 1e3 : 2e3, n.year = b;
      }
      if (s.year1 > -1) {
        let b = parseInt(u[s.year1]);
        b = 10 * Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) + b, n.year = b;
      }
      if (s.monthLong > -1 && (n.month = this.resolveMonth(u[s.monthLong])), s.monthShort > -1 && (n.month = this.resolveShortMonth(u[s.monthShort])), s.month > -1 && (n.month = parseInt(u[s.month]) - 1), s.week > -1 && s.day === -1 && (n.month = 0, n.day = Mt(parseInt(u[s.week]), n.year, 1, this._root.utc)), s.day > -1 && (n.day = parseInt(u[s.day])), s.yearDay > -1 && (n.month = 0, n.day = parseInt(u[s.yearDay])), s.hourBase0 > -1 && (n.hour = parseInt(u[s.hourBase0])), s.hourBase1 > -1 && (n.hour = parseInt(u[s.hourBase1]) - 1), s.hour12Base0 > -1) {
        let b = parseInt(u[s.hour12Base0]);
        b == 11 && (b = 0), s.am > -1 && !this.isAm(u[s.am]) && (b += 12), n.hour = b;
      }
      if (s.hour12Base1 > -1) {
        let b = parseInt(u[s.hour12Base1]);
        b == 12 && (b = 0), s.am > -1 && !this.isAm(u[s.am]) && (b += 12), n.hour = b;
      }
      if (s.minute > -1 && (n.minute = parseInt(u[s.minute])), s.second > -1 && (n.second = parseInt(u[s.second])), s.millisecond > -1) {
        let b = parseInt(u[s.millisecond]);
        s.millisecondDigits == 2 ? b *= 10 : s.millisecondDigits == 1 && (b *= 100), n.millisecond = b;
      }
      if (s.timestamp > -1) {
        n.timestamp = parseInt(u[s.timestamp]);
        const b = new Date(n.timestamp);
        n.year = b.getUTCFullYear(), n.month = b.getUTCMonth(), n.day = b.getUTCDate(), n.hour = b.getUTCHours(), n.minute = b.getUTCMinutes(), n.second = b.getUTCSeconds(), n.millisecond = b.getUTCMilliseconds();
      }
      s.zone > -1 && (n.offset = this.resolveTimezoneOffset(new Date(n.year, n.month, n.day), u[s.zone])), s.iso > -1 && (n.year = R(u[s.iso + 0]), n.month = R(u[s.iso + 1]) - 1, n.day = R(u[s.iso + 2]), n.hour = R(u[s.iso + 3]), n.minute = R(u[s.iso + 4]), n.second = R(u[s.iso + 5]), n.millisecond = R(u[s.iso + 6]), u[s.iso + 7] == "Z" || u[s.iso + 7] == "z" ? n.utc = !0 : u[s.iso + 7] != "" && (n.offset = this.resolveTimezoneOffset(new Date(n.year, n.month, n.day), u[s.iso + 7]))), i = n.utc ? new Date(Date.UTC(n.year, n.month, n.day, n.hour, n.minute, n.second, n.millisecond)) : new Date(n.year, n.month, n.day, n.hour, n.minute + n.offset, n.second, n.millisecond);
    } else i = new Date(e);
    return i;
  }
  resolveTimezoneOffset(e, t) {
    if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/)) {
      let i = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/), r = i[1], a = i[2], s = i[3], n = 60 * parseInt(a) + parseInt(s);
      return r == "+" && (n *= -1), n - (e || /* @__PURE__ */ new Date()).getTimezoneOffset();
    }
    return 0;
  }
  resolveMonth(e) {
    let t = this._months().indexOf(e);
    return t > -1 || !this._root.language.isDefault() && (t = this._root.language.translateAll(this._months()).indexOf(e), t > -1) ? t : 0;
  }
  resolveShortMonth(e) {
    let t = this._shortMonths().indexOf(e);
    return t > -1 ? t : (t = this._months().indexOf(e), t > -1 || this._root.language && !this._root.language.isDefault() && (t = this._root.language.translateAll(this._shortMonths()).indexOf(e), t > -1) ? t : 0);
  }
  isAm(e) {
    return this.getStringList(["AM", "A.M.", "A"]).indexOf(e.toUpperCase()) > -1;
  }
  getStringList(e) {
    let t = [];
    for (let i = 0; i < e.length; i++) this._root.language ? t.push(Ie(this._t(e[i]))) : t.push(Ie(e[i]));
    return t;
  }
}
class $t extends ee {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_unitAliases", { enumerable: !0, configurable: !0, writable: !0, value: { Y: "y", D: "d", H: "h", K: "h", k: "h", n: "S" } });
  }
  _setDefaults() {
    const e = "_duration_millisecond", t = "_duration_second", i = "_duration_minute", r = "_duration_hour", a = "_duration_day", s = "_duration_week", n = "_duration_month", h = "_duration_year", c = "_second", g = "_minute", u = "_hour", b = "_day", o = "_week", p = "_week", l = "_year";
    this._setDefault("negativeBase", 0), this._setDefault("baseUnit", "second"), this._setDefault("durationFormats", { millisecond: { millisecond: this._t(e), second: this._t(e + c), minute: this._t(e + g), hour: this._t(e + u), day: this._t(e + b), week: this._t(e + o), month: this._t(e + p), year: this._t(e + l) }, second: { second: this._t(t), minute: this._t(t + g), hour: this._t(t + u), day: this._t(t + b), week: this._t(t + o), month: this._t(t + p), year: this._t(t + l) }, minute: { minute: this._t(i), hour: this._t(i + u), day: this._t(i + b), week: this._t(i + o), month: this._t(i + p), year: this._t(i + l) }, hour: { hour: this._t(r), day: this._t(r + b), week: this._t(r + o), month: this._t(r + p), year: this._t(r + l) }, day: { day: this._t(a), week: this._t(a + o), month: this._t(a + p), year: this._t(a + l) }, week: { week: this._t(s), month: this._t(s + p), year: this._t(s + l) }, month: { month: this._t(n), year: this._t(n + l) }, year: { year: this._t(h) } }), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e, t, i) {
    let r = i || this.get("baseUnit");
    t !== void 0 && t !== "" || (t = this.get("durationFormat") != null ? this.get("durationFormat") : this.getFormat(R(e), void 0, r)), t = Ce(t);
    let a, s = this.parseFormat(t, r), n = Number(e);
    a = n > this.get("negativeBase") ? s.positive : n < this.get("negativeBase") ? s.negative : s.zero;
    let h = this.applyFormat(n, a);
    return a.color !== "" && (h = "[" + a.color + "]" + h + "[/]"), h;
  }
  parseFormat(e, t) {
    let i = t || this.get("baseUnit"), r = { positive: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 }, negative: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 }, zero: { color: "", template: "", parts: [], source: "", baseUnit: i, parsed: !1, absolute: !1 } }, a = (e = e.replace("||", J)).split("|");
    return r.positive.source = a[0], a[2] === void 0 ? r.zero = r.positive : r.zero.source = a[2], a[1] === void 0 ? r.negative = r.positive : r.negative.source = a[1], he(r, (s, n) => {
      if (n.parsed) return;
      let h = n.source, c = [];
      c = n.source.match(/^\[([^\]]*)\]/), c && c.length && c[0] !== "" && (h = n.source.substr(c[0].length), n.color = c[1]);
      let g = U.chunk(h, !0);
      for (let u = 0; u < g.length; u++) {
        let b = g[u];
        if (b.text = b.text.replace(J, "|"), b.type === "value") {
          b.text.match(/[yYMdDwhHKkmsSn]+a/) && (n.absolute = !0, b.text = b.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1"));
          let o = b.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
          if (o) for (let p = 0; p < o.length; p++) o[p] == null && (o[p] = this._unitAliases[o[p]]), n.parts.push(o[p]), b.text = b.text.replace(o[p], Q);
        }
        n.template += b.text;
      }
      n.parsed = !0;
    }), r;
  }
  applyFormat(e, t) {
    let i = !t.absolute && e < this.get("negativeBase");
    e = Math.abs(e);
    let r = this.toTimeStamp(e, t.baseUnit), a = t.template;
    for (let s = 0, n = t.parts.length; s < n; s++) {
      let h = t.parts[s], c = this._toTimeUnit(h.substr(0, 1)), g = h.length, u = Math.floor(r / this._getUnitValue(c));
      a = a.replace(Q, E(u, g, "0")), r -= u * this._getUnitValue(c);
    }
    return i && (a = "-" + a), a;
  }
  toTimeStamp(e, t) {
    return e * this._getUnitValue(t);
  }
  _toTimeUnit(e) {
    switch (e) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
        return "hour";
      case "d":
        return "day";
      case "w":
        return "week";
      case "M":
        return "month";
      case "y":
        return "year";
    }
  }
  getFormat(e, t, i) {
    if (this.get("durationFormat") != null) return this.get("durationFormat");
    if (i || (i = this.get("baseUnit")), t != null && e != t) {
      e = Math.abs(e), t = Math.abs(t);
      let r = this.getValueUnit(Math.max(e, t), i);
      return this.get("durationFormats")[i][r];
    }
    {
      let r = this.getValueUnit(e, i);
      return this.get("durationFormats")[i][r];
    }
  }
  getValueUnit(e, t) {
    let i;
    t || (t = this.get("baseUnit"));
    let r = this.getMilliseconds(e, t);
    return St(this._getUnitValues(), (a, s) => {
      if (a == t || i) {
        if (r / s <= 1) return i || (i = a), !1;
        i = a;
      }
      return !0;
    }), i;
  }
  getMilliseconds(e, t) {
    return t || (t = this.get("baseUnit")), e * this._getUnitValue(t);
  }
  _getUnitValue(e) {
    return this._getUnitValues()[e];
  }
  _getUnitValues() {
    return { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2592e6, year: 31536e6 };
  }
}
const rt = { firstDayOfWeek: 1, _decimalSeparator: ".", _thousandSeparator: ",", _percentPrefix: null, _percentSuffix: "%", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "μ", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date: "yyyy-MM-dd", _date_millisecond: "mm:ss SSS", _date_millisecond_full: "HH:mm:ss SSS", _date_second: "HH:mm:ss", _date_second_full: "HH:mm:ss", _date_minute: "HH:mm", _date_minute_full: "HH:mm - MMM dd, yyyy", _date_hour: "HH:mm", _date_hour_full: "HH:mm - MMM dd, yyyy", _date_day: "MMM dd", _date_day_full: "MMM dd, yyyy", _date_week: "ww", _date_week_full: "MMM dd, yyyy", _date_month: "MMM", _date_month_full: "MMM, yyyy", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "AD", _era_bc: "BC", A: "", P: "", AM: "", PM: "", "A.M.": "", "P.M.": "", January: "", February: "", March: "", April: "", May: "", June: "", July: "", August: "", September: "", October: "", November: "", December: "", Jan: "", Feb: "", Mar: "", Apr: "", "May(short)": "May", Jun: "", Jul: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "", Sunday: "", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sun: "", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "", Sat: "", _dateOrd: function(d) {
  let e = "th";
  if (d < 11 || d > 13) switch (d % 10) {
    case 1:
      e = "st";
      break;
    case 2:
      e = "nd";
      break;
    case 3:
      e = "rd";
  }
  return e;
}, "Zoom Out": "", Play: "", Stop: "", Legend: "", "Press ENTER to toggle": "", Loading: "", Home: "", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Force directed tree": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "", Image: "", Data: "", Print: "", "Press ENTER or use arrow keys to navigate": "", "Press ENTER to open": "", "Press ENTER to print.": "", "Press ENTER to export as %1.": "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", HTML: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "", "From %1": "", "To %1": "", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "", Close: "", Minimize: "" };
class Xt extends ee {
  _setDefaults() {
    this.setPrivate("defaultLocale", rt), super._setDefaults();
  }
  translate(e, t, ...i) {
    t || (t = this._root.locale || this.getPrivate("defaultLocale"));
    let r = e, a = t[e];
    if (a === null) r = "";
    else if (a != null) a && (r = a);
    else if (t !== this.getPrivate("defaultLocale")) return this.translate(e, this.getPrivate("defaultLocale"), ...i);
    if (i.length) for (let s = i.length, n = 0; n < s; ++n) r = r.split("%" + (n + 1)).join(i[n]);
    return r;
  }
  translateAny(e, t, ...i) {
    return this.translate(e, t, ...i);
  }
  setTranslationAny(e, t, i) {
    (i || this._root.locale)[e] = t;
  }
  setTranslationsAny(e, t) {
    he(e, (i, r) => {
      this.setTranslationAny(i, r, t);
    });
  }
  translateEmpty(e, t, ...i) {
    let r = this.translate(e, t, ...i);
    return r == e ? "" : r;
  }
  translateFunc(e, t) {
    return this._root.locale[e] ? this._root.locale[e] : t !== this.getPrivate("defaultLocale") ? this.translateFunc(e, this.getPrivate("defaultLocale")) : () => "";
  }
  translateAll(e, t) {
    return this.isDefault() ? e : jt(e, (i) => this.translate(i, t));
  }
  isDefault() {
    return this.getPrivate("defaultLocale") === this._root.locale;
  }
}
class Oe {
  constructor(e = 1, t = 0, i = 0, r = 1, a = 0, s = 0) {
    Object.defineProperty(this, "a", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "b", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "c", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "d", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tx", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "ty", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.a = e, this.b = t, this.c = i, this.d = r, this.tx = a, this.ty = s;
  }
  setTransform(e, t, i, r, a, s = 1) {
    this.a = Math.cos(a) * s, this.b = Math.sin(a) * s, this.c = -Math.sin(a) * s, this.d = Math.cos(a) * s, this.tx = e - (i * this.a + r * this.c), this.ty = t - (i * this.b + r * this.d);
  }
  apply(e) {
    return { x: this.a * e.x + this.c * e.y + this.tx, y: this.b * e.x + this.d * e.y + this.ty };
  }
  applyInverse(e) {
    const t = 1 / (this.a * this.d + this.c * -this.b);
    return { x: this.d * t * e.x + -this.c * t * e.y + (this.ty * this.c - this.tx * this.d) * t, y: this.a * t * e.y + -this.b * t * e.x + (-this.ty * this.a + this.tx * this.b) * t };
  }
  append(e) {
    const t = this.a, i = this.b, r = this.c, a = this.d;
    this.a = e.a * t + e.b * r, this.b = e.a * i + e.b * a, this.c = e.c * t + e.d * r, this.d = e.c * i + e.d * a, this.tx = e.tx * t + e.ty * r + this.tx, this.ty = e.tx * i + e.ty * a + this.ty;
  }
  prepend(e) {
    const t = this.tx;
    if (e.a !== 1 || e.b !== 0 || e.c !== 0 || e.d !== 1) {
      const i = this.a, r = this.c;
      this.a = i * e.a + this.b * e.c, this.b = i * e.b + this.b * e.d, this.c = r * e.a + this.d * e.c, this.d = r * e.b + this.d * e.d;
    }
    this.tx = t * e.a + this.ty * e.c + e.tx, this.ty = t * e.b + this.ty * e.d + e.ty;
  }
  copyFrom(e) {
    this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty;
  }
}
var Gt = /* @__PURE__ */ function() {
  function d(e, t) {
    var i = [], r = !0, a = !1, s = void 0;
    try {
      for (var n, h = e[Symbol.iterator](); !(r = (n = h.next()).done) && (i.push(n.value), !t || i.length !== t); r = !0) ;
    } catch (c) {
      a = !0, s = c;
    } finally {
      try {
        !r && h.return && h.return();
      } finally {
        if (a) throw s;
      }
    }
    return i;
  }
  return function(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return d(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), le = 2 * Math.PI, ke = function(d, e, t, i, r, a, s) {
  var n = d.x, h = d.y;
  return { x: i * (n *= e) - r * (h *= t) + a, y: r * n + i * h + s };
}, Nt = function(d, e) {
  var t = e === 1.5707963267948966 ? 0.551915024494 : e === -1.5707963267948966 ? -0.551915024494 : 1.3333333333333333 * Math.tan(e / 4), i = Math.cos(d), r = Math.sin(d), a = Math.cos(d + e), s = Math.sin(d + e);
  return [{ x: i - r * t, y: r + i * t }, { x: a + s * t, y: s - a * t }, { x: a, y: s }];
}, Ve = function(d, e, t, i) {
  var r = d * t + e * i;
  return r > 1 && (r = 1), r < -1 && (r = -1), (d * i - e * t < 0 ? -1 : 1) * Math.acos(r);
}, qt = function(d, e, t, i, r, a, s, n, h, c, g, u) {
  var b = Math.pow(r, 2), o = Math.pow(a, 2), p = Math.pow(g, 2), l = Math.pow(u, 2), m = b * o - b * l - o * p;
  m < 0 && (m = 0), m /= b * l + o * p;
  var _ = (m = Math.sqrt(m) * (s === n ? -1 : 1)) * r / a * u, w = m * -a / r * g, v = c * _ - h * w + (d + t) / 2, f = h * _ + c * w + (e + i) / 2, x = (g - _) / r, A = (u - w) / a, k = (-g - _) / r, S = (-u - w) / a, B = Ve(1, 0, x, A), P = Ve(x, A, k, S);
  return n === 0 && P > 0 && (P -= le), n === 1 && P < 0 && (P += le), [v, f, B, P];
}, Zt = function(d) {
  var e = d.px, t = d.py, i = d.cx, r = d.cy, a = d.rx, s = d.ry, n = d.xAxisRotation, h = n === void 0 ? 0 : n, c = d.largeArcFlag, g = c === void 0 ? 0 : c, u = d.sweepFlag, b = u === void 0 ? 0 : u, o = [];
  if (a === 0 || s === 0) return [];
  var p = Math.sin(h * le / 360), l = Math.cos(h * le / 360), m = l * (e - i) / 2 + p * (t - r) / 2, _ = -p * (e - i) / 2 + l * (t - r) / 2;
  if (m === 0 && _ === 0) return [];
  a = Math.abs(a), s = Math.abs(s);
  var w = Math.pow(m, 2) / Math.pow(a, 2) + Math.pow(_, 2) / Math.pow(s, 2);
  w > 1 && (a *= Math.sqrt(w), s *= Math.sqrt(w));
  var v = qt(e, t, i, r, a, s, g, b, p, l, m, _), f = Gt(v, 4), x = f[0], A = f[1], k = f[2], S = f[3], B = Math.abs(S) / (le / 4);
  Math.abs(1 - B) < 1e-7 && (B = 1);
  var P = Math.max(Math.ceil(B), 1);
  S /= P;
  for (var z = 0; z < P; z++) o.push(Nt(k, S)), k += S;
  return o.map(function(D) {
    var I = ke(D[0], a, s, l, p, x, A), G = I.x, T = I.y, ue = ke(D[1], a, s, l, p, x, A), O = ue.x, F = ue.y, Y = ke(D[2], a, s, l, p, x, A);
    return { x1: G, y1: T, x2: O, y2: F, x: Y.x, y: Y.y };
  });
};
function Kt(d, e, t) {
  if (e !== t) throw new Error("Required " + t + " arguments for " + d + " but got " + e);
}
function ae(d, e, t) {
  if (e < t) throw new Error("Required at least " + t + " arguments for " + d + " but got " + e);
}
function L(d, e, t) {
  if (ae(d, e, t), e % t != 0) throw new Error("Arguments for " + d + " must be in pairs of " + t);
}
function Jt(d) {
  for (let e = 0; e < d.length; e += 7) {
    let t = e + 3, i = d[t];
    if (i.length > 1) {
      const r = /^([01])([01])(.*)$/.exec(i);
      r !== null && (d.splice(t, 0, r[1]), ++t, d.splice(t, 0, r[2]), ++t, r[3].length > 0 ? d[t] = r[3] : d.splice(t, 1));
    }
    if (++t, i = d[t], i.length > 1) {
      const r = /^([01])(.+)$/.exec(i);
      r !== null && (d.splice(t, 0, r[1]), ++t, d[t] = r[2]);
    }
  }
}
function $e(d) {
  if (d === 0 || d === 1) return d;
  throw new Error("Flag must be 0 or 1");
}
function Qt(d) {
  const e = [0, 0, 0];
  for (let t = 0; t < 24; t++) e[t % 3] <<= 1, e[t % 3] |= 1 & d, d >>= 1;
  return (0 | e[0]) + (e[1] << 8) + (e[2] << 16);
}
function fe(d, e) {
  for (; (!d.interactive || e(d)) && d._parent; ) d = d._parent;
}
function ei(d, e, t) {
  return C(d, Ee(e), (i) => {
    const r = Qe(i);
    let a = i.touches;
    a ? (a.length == 0 && (a = i.changedTouches), t(Bt(a), r)) : t([i], r);
  });
}
function Xe(d) {
  const e = document.createElement("canvas");
  e.width = 1, e.height = 1;
  const t = e.getContext("2d", { willReadFrequently: !0 });
  t.drawImage(d, 0, 0, 1, 1);
  try {
    return t.getImageData(0, 0, 1, 1), !1;
  } catch {
    return console.warn('Image "' + d.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'), !0;
  }
}
function ne(d) {
  d.width = 0, d.height = 0, d.style.width = "0px", d.style.height = "0px";
}
function Ge(d) {
  return Math.floor(d) + 0.5;
}
class ti {
  constructor() {
    Object.defineProperty(this, "_x", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_y", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(e) {
    this._x = e;
  }
  set y(e) {
    this._y = e;
  }
}
class ve extends zt {
  constructor(e) {
    super(), Object.defineProperty(this, "_layer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "mask", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "visible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "exportable", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "interactive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "inactive", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "wheelable", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "cancelTouch", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "isMeasured", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "buttonMode", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "alpha", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "compoundAlpha", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "angle", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "scale", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "crisp", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "pivot", { enumerable: !0, configurable: !0, writable: !0, value: new ti() }), Object.defineProperty(this, "filter", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "cursorOverStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_replacedCursorStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_localMatrix", { enumerable: !0, configurable: !0, writable: !0, value: new Oe() }), Object.defineProperty(this, "_matrix", { enumerable: !0, configurable: !0, writable: !0, value: new Oe() }), Object.defineProperty(this, "_uMatrix", { enumerable: !0, configurable: !0, writable: !0, value: new Oe() }), Object.defineProperty(this, "_renderer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_parent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_localBounds", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_bounds", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_colorId", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this._renderer = e;
  }
  subStatus(e) {
    return { inactive: this.inactive == null ? e.inactive : this.inactive, layer: this._layer || e.layer };
  }
  _dispose() {
    this._renderer._removeObject(this), this.getLayer().dirty = !0;
  }
  getCanvas() {
    return this.getLayer().view;
  }
  getLayer() {
    let e = this;
    for (; ; ) {
      if (e._layer) return e._layer;
      if (!e._parent) return this._renderer.defaultLayer;
      e = e._parent;
    }
  }
  setLayer(e, t) {
    e == null ? this._layer = void 0 : (this._layer = this._renderer.getLayer(e, !0), this._layer.visible = !0, this._layer.margin = t, t && K(this._layer.view, !1), this._renderer._ghostLayer.setMargin(this._renderer.layers), this._parent && this._parent.registerChildLayer(this._layer), this._layer.dirty = !0, this._renderer.resizeLayer(this._layer), this._renderer.resizeGhost());
  }
  markDirtyLayer() {
    this.getLayer().dirty = !0;
  }
  clear() {
    this.invalidateBounds();
  }
  invalidateBounds() {
    this._localBounds = void 0;
  }
  _addBounds(e) {
  }
  _getColorId() {
    return this._colorId === void 0 && (this._colorId = this._renderer.paintId(this)), this._colorId;
  }
  _isInteractive(e) {
    return !e.inactive && (this.interactive || this._renderer._forceInteractive > 0);
  }
  _isInteractiveMask(e) {
    return this._isInteractive(e);
  }
  contains(e) {
    for (; ; ) {
      if (e === this) return !0;
      if (!e._parent) return !1;
      e = e._parent;
    }
  }
  toGlobal(e) {
    return this._matrix.apply(e);
  }
  toLocal(e) {
    return this._matrix.applyInverse(e);
  }
  getLocalMatrix() {
    return this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._uMatrix;
  }
  getLocalBounds() {
    return this._localBounds || (this._localBounds = { left: 1e7, top: 1e7, right: -1e7, bottom: -1e7 }, this._addBounds(this._localBounds)), this._localBounds;
  }
  getAdjustedBounds(e) {
    this._setMatrix();
    const t = this.getLocalMatrix(), i = t.apply({ x: e.left, y: e.top }), r = t.apply({ x: e.right, y: e.top }), a = t.apply({ x: e.right, y: e.bottom }), s = t.apply({ x: e.left, y: e.bottom });
    return { left: Math.min(i.x, r.x, a.x, s.x), top: Math.min(i.y, r.y, a.y, s.y), right: Math.max(i.x, r.x, a.x, s.x), bottom: Math.max(i.y, r.y, a.y, s.y) };
  }
  on(e, t, i) {
    return this.interactive ? this._renderer._addEvent(this, e, t, i) : new $(() => {
    });
  }
  _setMatrix() {
    this._localMatrix.setTransform(this.x, this.y, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._matrix.copyFrom(this._localMatrix), this._parent && this._matrix.prepend(this._parent._matrix);
  }
  _transform(e, t) {
    const i = this._matrix;
    let r = i.tx * t, a = i.ty * t;
    this.crisp && (r = Ge(r), a = Ge(a)), e.setTransform(i.a * t, i.b * t, i.c * t, i.d * t, r, a);
  }
  _transformMargin(e, t, i) {
    const r = this._matrix;
    e.setTransform(r.a * t, r.b * t, r.c * t, r.d * t, (r.tx + i.left) * t, (r.ty + i.top) * t);
  }
  _transformLayer(e, t, i) {
    i.margin ? this._transformMargin(e, i.scale || t, i.margin) : this._transform(e, i.scale || t);
  }
  render(e) {
    if (this.visible && (this.exportable !== !1 || !this._renderer._omitTainted)) {
      this._setMatrix();
      const t = this.subStatus(e), i = this._renderer.resolution, r = this._renderer.layers, a = this._renderer._ghostLayer, s = a.context, n = this.mask;
      n && n._setMatrix(), y(r, (h) => {
        if (h) {
          const c = h.context;
          c.save(), n && (n._transformLayer(c, i, h), n._runPath(c), c.clip()), c.globalAlpha = this.compoundAlpha * this.alpha, this._transformLayer(c, i, h), this.filter && (c.filter = this.filter);
        }
      }), s.save(), n && this._isInteractiveMask(t) && (n._transformMargin(s, i, a.margin), n._runPath(s), s.clip()), this._transformMargin(s, i, a.margin), this._render(t), s.restore(), y(r, (h) => {
        h && h.context.restore();
      });
    }
  }
  _render(e) {
    this.exportable === !1 && (e.layer.tainted = !0);
  }
  hovering() {
    return this._renderer._hovering.has(this);
  }
  dragging() {
    return this._renderer._dragging.some((e) => e.value === this);
  }
  shouldCancelTouch() {
    const e = this._renderer;
    return !(e.tapToActivate && !e._touchActive) && (!!this.cancelTouch || !!this._parent && this._parent.shouldCancelTouch());
  }
}
class ii extends ve {
  constructor() {
    super(...arguments), Object.defineProperty(this, "interactiveChildren", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_childLayers", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_children", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
  _isInteractiveMask(e) {
    return this.interactiveChildren || super._isInteractiveMask(e);
  }
  addChild(e) {
    e._parent = this, this._children.push(e), e._layer && this.registerChildLayer(e._layer);
  }
  addChildAt(e, t) {
    e._parent = this, this._children.splice(t, 0, e), e._layer && this.registerChildLayer(e._layer);
  }
  removeChild(e) {
    e._parent = void 0, Te(this._children, e);
  }
  _render(e) {
    super._render(e);
    const t = this._renderer;
    this.interactive && this.interactiveChildren && ++t._forceInteractive, y(this._children, (i) => {
      i.compoundAlpha = this.compoundAlpha * this.alpha, i.render(e);
    }), this.interactive && this.interactiveChildren && --t._forceInteractive;
  }
  registerChildLayer(e) {
    this._childLayers || (this._childLayers = []), je(this._childLayers, e), this._parent && this._parent.registerChildLayer(e);
  }
  markDirtyLayer(e = !1) {
    super.markDirtyLayer(), e && this._childLayers && y(this._childLayers, (t) => t.dirty = !0);
  }
  _dispose() {
    super._dispose(), this._childLayers && y(this._childLayers, (e) => {
      e.dirty = !0;
    });
  }
}
function M(d, e) {
  d.left = Math.min(d.left, e.x), d.top = Math.min(d.top, e.y), d.right = Math.max(d.right, e.x), d.bottom = Math.max(d.bottom, e.y);
}
class j {
  colorize(e, t) {
  }
  path(e) {
  }
  addBounds(e) {
  }
}
class ri extends j {
  colorize(e, t) {
    e.beginPath();
  }
}
class Me extends j {
  constructor(e) {
    super(), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.fillStyle = t !== void 0 ? t : this.color;
  }
}
class si extends j {
  constructor(e) {
    super(), Object.defineProperty(this, "clearShadow", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.fill(), this.clearShadow && (e.shadowColor = "", e.shadowBlur = 0, e.shadowOffsetX = 0, e.shadowOffsetY = 0);
  }
}
class ai extends j {
  colorize(e, t) {
    e.stroke();
  }
}
class Se extends j {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "lineJoin", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
  colorize(e, t) {
    e.strokeStyle = t !== void 0 ? t : this.color, e.lineWidth = this.width, this.lineJoin && (e.lineJoin = this.lineJoin);
  }
}
class ni extends j {
  constructor(e) {
    super(), Object.defineProperty(this, "dash", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.setLineDash(this.dash);
  }
}
class oi extends j {
  constructor(e) {
    super(), Object.defineProperty(this, "dashOffset", { enumerable: !0, configurable: !0, writable: !0, value: e });
  }
  colorize(e, t) {
    e.lineDashOffset = this.dashOffset;
  }
}
class li extends j {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.rect(this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    const t = this.x, i = this.y, r = t + this.width, a = i + this.height;
    M(e, { x: t, y: i }), M(e, { x: r, y: i }), M(e, { x: t, y: a }), M(e, { x: r, y: a });
  }
}
class hi extends j {
  constructor(e, t, i) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: i });
  }
  path(e) {
    e.moveTo(this.x + this.radius, this.y), e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }
  addBounds(e) {
    M(e, { x: this.x - this.radius, y: this.y - this.radius }), M(e, { x: this.x + this.radius, y: this.y + this.radius });
  }
}
class ui extends j {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radiusX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "radiusY", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
  }
  addBounds(e) {
    M(e, { x: this.x - this.radiusX, y: this.y - this.radiusY }), M(e, { x: this.x + this.radiusX, y: this.y + this.radiusY });
  }
}
class ci extends j {
  constructor(e, t, i, r, a, s) {
    super(), Object.defineProperty(this, "cx", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cy", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "startAngle", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "endAngle", { enumerable: !0, configurable: !0, writable: !0, value: a }), Object.defineProperty(this, "anticlockwise", { enumerable: !0, configurable: !0, writable: !0, value: s });
  }
  path(e) {
    this.radius > 0 && e.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  }
  addBounds(e) {
    let t = Ft(this.cx, this.cy, this.startAngle * oe, this.endAngle * oe, this.radius);
    M(e, { x: t.left, y: t.top }), M(e, { x: t.right, y: t.bottom });
  }
}
class di extends j {
  constructor(e, t, i, r, a) {
    super(), Object.defineProperty(this, "x1", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y1", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "x2", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "y2", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: a });
  }
  path(e) {
    this.radius > 0 && e.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  }
  addBounds(e) {
  }
}
class bi extends j {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t });
  }
  path(e) {
    e.lineTo(this.x, this.y);
  }
  addBounds(e) {
    M(e, { x: this.x, y: this.y });
  }
}
class fi extends j {
  constructor(e, t) {
    super(), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: t });
  }
  path(e) {
    e.moveTo(this.x, this.y);
  }
  addBounds(e) {
    M(e, { x: this.x, y: this.y });
  }
}
class gi extends j {
  path(e) {
    e.closePath();
  }
}
class mi extends j {
  constructor(e, t, i, r, a, s) {
    super(), Object.defineProperty(this, "cpX", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cpY", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "cpX2", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "cpY2", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "toX", { enumerable: !0, configurable: !0, writable: !0, value: a }), Object.defineProperty(this, "toY", { enumerable: !0, configurable: !0, writable: !0, value: s });
  }
  path(e) {
    e.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY);
  }
  addBounds(e) {
    M(e, { x: this.cpX, y: this.cpY }), M(e, { x: this.cpX2, y: this.cpY2 }), M(e, { x: this.toX, y: this.toY });
  }
}
class pi extends j {
  constructor(e, t, i, r) {
    super(), Object.defineProperty(this, "cpX", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "cpY", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "toX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "toY", { enumerable: !0, configurable: !0, writable: !0, value: r });
  }
  path(e) {
    e.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
  }
  addBounds(e) {
    M(e, { x: this.cpX, y: this.cpY }), M(e, { x: this.toX, y: this.toY });
  }
}
class _i extends j {
  constructor(e, t, i, r, a) {
    super(), Object.defineProperty(this, "color", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "blur", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "offsetX", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "offsetY", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "opacity", { enumerable: !0, configurable: !0, writable: !0, value: a });
  }
  colorize(e, t) {
    this.opacity && (e.fillStyle = this.color), e.shadowColor = this.color, e.shadowBlur = this.blur, e.shadowOffsetX = this.offsetX, e.shadowOffsetY = this.offsetY;
  }
}
class yi extends j {
  constructor(e, t, i, r, a) {
    super(), Object.defineProperty(this, "image", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "x", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "y", { enumerable: !0, configurable: !0, writable: !0, value: a });
  }
  path(e) {
    e.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  addBounds(e) {
    M(e, { x: this.x, y: this.y }), M(e, { x: this.width, y: this.height });
  }
}
class vi extends ve {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_operations", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "blendMode", { enumerable: !0, configurable: !0, writable: !0, value: Dt.NORMAL }), Object.defineProperty(this, "_hasShadows", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_fillAlpha", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_strokeAlpha", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  clear() {
    super.clear(), this._operations.length = 0;
  }
  _pushOp(e) {
    this._operations.push(e);
  }
  beginFill(e, t = 1) {
    this._fillAlpha = t, e ? e instanceof X ? this._pushOp(new Me(e.toCSS(t))) : (this.isMeasured = !0, this._pushOp(new Me(e))) : this._pushOp(new Me("rgba(0, 0, 0, " + t + ")"));
  }
  endFill() {
    this._pushOp(new si(this._hasShadows));
  }
  endStroke() {
    this._pushOp(new ai());
  }
  beginPath() {
    this._pushOp(new ri());
  }
  lineStyle(e = 0, t, i = 1, r) {
    this._strokeAlpha = i, t ? t instanceof X ? this._pushOp(new Se(e, t.toCSS(i), r)) : this._pushOp(new Se(e, t, r)) : this._pushOp(new Se(e, "rgba(0, 0, 0, " + i + ")", r));
  }
  setLineDash(e) {
    this._pushOp(new ni(e || []));
  }
  setLineDashOffset(e = 0) {
    this._pushOp(new oi(e));
  }
  drawRect(e, t, i, r) {
    this._pushOp(new li(e, t, i, r));
  }
  drawCircle(e, t, i) {
    this._pushOp(new hi(e, t, i));
  }
  drawEllipse(e, t, i, r) {
    this._pushOp(new ui(e, t, i, r));
  }
  arc(e, t, i, r, a, s = !1) {
    this._pushOp(new ci(e, t, i, r, a, s));
  }
  arcTo(e, t, i, r, a) {
    this._pushOp(new di(e, t, i, r, a));
  }
  lineTo(e, t) {
    this._pushOp(new bi(e, t));
  }
  moveTo(e, t) {
    this._pushOp(new fi(e, t));
  }
  bezierCurveTo(e, t, i, r, a, s) {
    this._pushOp(new mi(e, t, i, r, a, s));
  }
  quadraticCurveTo(e, t, i, r) {
    this._pushOp(new pi(e, t, i, r));
  }
  closePath() {
    this._pushOp(new gi());
  }
  shadow(e, t = 0, i = 0, r = 0, a) {
    this._hasShadows = !0, this._pushOp(new _i(a ? e.toCSS(a) : e.toCSS(this._fillAlpha || this._strokeAlpha), t, i, r));
  }
  image(e, t, i, r, a) {
    this._pushOp(new yi(e, t, i, r, a));
  }
  svgPath(e) {
    let t = 0, i = 0, r = null, a = null, s = null, n = null;
    const h = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g, c = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
    let g;
    for (; (g = h.exec(e)) !== null; ) {
      const u = g[1], b = g[2], o = [];
      for (; (g = c.exec(b)) !== null; ) o.push(g[1]);
      switch (u !== "S" && u !== "s" && u !== "C" && u !== "c" && (r = null, a = null), u !== "Q" && u !== "q" && u !== "T" && u !== "t" && (s = null, n = null), u) {
        case "M":
          L(u, o.length, 2), t = +o[0], i = +o[1], this.moveTo(t, i);
          for (let l = 2; l < o.length; l += 2) t = +o[l], i = +o[l + 1], this.lineTo(t, i);
          break;
        case "m":
          L(u, o.length, 2), t += +o[0], i += +o[1], this.moveTo(t, i);
          for (let l = 2; l < o.length; l += 2) t += +o[l], i += +o[l + 1], this.lineTo(t, i);
          break;
        case "L":
          L(u, o.length, 2);
          for (let l = 0; l < o.length; l += 2) t = +o[l], i = +o[l + 1], this.lineTo(t, i);
          break;
        case "l":
          L(u, o.length, 2);
          for (let l = 0; l < o.length; l += 2) t += +o[l], i += +o[l + 1], this.lineTo(t, i);
          break;
        case "H":
          ae(u, o.length, 1);
          for (let l = 0; l < o.length; ++l) t = +o[l], this.lineTo(t, i);
          break;
        case "h":
          ae(u, o.length, 1);
          for (let l = 0; l < o.length; ++l) t += +o[l], this.lineTo(t, i);
          break;
        case "V":
          ae(u, o.length, 1);
          for (let l = 0; l < o.length; ++l) i = +o[l], this.lineTo(t, i);
          break;
        case "v":
          ae(u, o.length, 1);
          for (let l = 0; l < o.length; ++l) i += +o[l], this.lineTo(t, i);
          break;
        case "C":
          L(u, o.length, 6);
          for (let l = 0; l < o.length; l += 6) {
            const m = +o[l], _ = +o[l + 1];
            r = +o[l + 2], a = +o[l + 3], t = +o[l + 4], i = +o[l + 5], this.bezierCurveTo(m, _, r, a, t, i);
          }
          break;
        case "c":
          L(u, o.length, 6);
          for (let l = 0; l < o.length; l += 6) {
            const m = +o[l] + t, _ = +o[l + 1] + i;
            r = +o[l + 2] + t, a = +o[l + 3] + i, t += +o[l + 4], i += +o[l + 5], this.bezierCurveTo(m, _, r, a, t, i);
          }
          break;
        case "S":
          L(u, o.length, 4), r !== null && a !== null || (r = t, a = i);
          for (let l = 0; l < o.length; l += 4) {
            const m = 2 * t - r, _ = 2 * i - a;
            r = +o[l], a = +o[l + 1], t = +o[l + 2], i = +o[l + 3], this.bezierCurveTo(m, _, r, a, t, i);
          }
          break;
        case "s":
          L(u, o.length, 4), r !== null && a !== null || (r = t, a = i);
          for (let l = 0; l < o.length; l += 4) {
            const m = 2 * t - r, _ = 2 * i - a;
            r = +o[l] + t, a = +o[l + 1] + i, t += +o[l + 2], i += +o[l + 3], this.bezierCurveTo(m, _, r, a, t, i);
          }
          break;
        case "Q":
          L(u, o.length, 4);
          for (let l = 0; l < o.length; l += 4) s = +o[l], n = +o[l + 1], t = +o[l + 2], i = +o[l + 3], this.quadraticCurveTo(s, n, t, i);
          break;
        case "q":
          L(u, o.length, 4);
          for (let l = 0; l < o.length; l += 4) s = +o[l] + t, n = +o[l + 1] + i, t += +o[l + 2], i += +o[l + 3], this.quadraticCurveTo(s, n, t, i);
          break;
        case "T":
          L(u, o.length, 2), s !== null && n !== null || (s = t, n = i);
          for (let l = 0; l < o.length; l += 2) s = 2 * t - s, n = 2 * i - n, t = +o[l], i = +o[l + 1], this.quadraticCurveTo(s, n, t, i);
          break;
        case "t":
          L(u, o.length, 2), s !== null && n !== null || (s = t, n = i);
          for (let l = 0; l < o.length; l += 2) s = 2 * t - s, n = 2 * i - n, t += +o[l], i += +o[l + 1], this.quadraticCurveTo(s, n, t, i);
          break;
        case "A":
        case "a":
          const p = u === "a";
          Jt(o), L(u, o.length, 7);
          for (let l = 0; l < o.length; l += 7) {
            let m = +o[l + 5], _ = +o[l + 6];
            p && (m += t, _ += i);
            const w = Zt({ px: t, py: i, rx: +o[l], ry: +o[l + 1], xAxisRotation: +o[l + 2], largeArcFlag: $e(+o[l + 3]), sweepFlag: $e(+o[l + 4]), cx: m, cy: _ });
            y(w, (v) => {
              this.bezierCurveTo(v.x1, v.y1, v.x2, v.y2, v.x, v.y), t = v.x, i = v.y;
            });
          }
          break;
        case "Z":
        case "z":
          Kt(u, o.length, 0), this.closePath();
      }
    }
  }
  _runPath(e) {
    e.beginPath(), y(this._operations, (t) => {
      t.path(e);
    });
  }
  _render(e) {
    super._render(e);
    const t = e.layer.dirty, i = this._isInteractive(e);
    if (t || i) {
      const r = e.layer.context, a = this._renderer._ghostLayer.context;
      let s;
      t && (r.globalCompositeOperation = this.blendMode, r.beginPath()), i && (a.beginPath(), s = this._getColorId()), y(this._operations, (n) => {
        t && (n.path(r), n.colorize(r, void 0)), i && (n.path(a), n.colorize(a, s));
      });
    }
  }
  renderDetached(e) {
    if (this.visible) {
      this._setMatrix(), e.save();
      const t = this.mask;
      t && (t._setMatrix(), t._transform(e, 1), t._runPath(e), e.clip()), e.globalAlpha = this.compoundAlpha * this.alpha, this._transform(e, 1), this.filter && (e.filter = this.filter), e.globalCompositeOperation = this.blendMode, e.beginPath(), y(this._operations, (i) => {
        i.path(e), i.colorize(e, void 0);
      }), e.restore();
    }
  }
  _addBounds(e) {
    this.visible && this.isMeasured && y(this._operations, (t) => {
      t.addBounds(e);
    });
  }
}
class st extends ve {
  constructor(e, t, i) {
    super(e), Object.defineProperty(this, "text", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "style", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "resolution", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "textVisible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_textInfo", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_originalScale", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), this.text = t, this.style = i;
  }
  invalidateBounds() {
    super.invalidateBounds(), this._textInfo = void 0;
  }
  _shared(e) {
    this.style.textAlign && (e.textAlign = this.style.textAlign), this.style.direction && (e.direction = this.style.direction), this.style.textBaseline && (e.textBaseline = this.style.textBaseline);
  }
  _prerender(e, t = !1, i = !1) {
    super._render(e);
    const r = e.layer.context, a = this._renderer._ghostLayer.context, s = this.style;
    let n = this._getFontStyle(void 0, i);
    r.font = n, this._isInteractive(e) && !t && (a.font = n), s.fill && (s.fill instanceof X ? r.fillStyle = s.fill.toCSS(s.fillOpacity != null ? s.fillOpacity : 1) : r.fillStyle = s.fill), s.shadowColor && (e.layer.context.shadowColor = s.shadowColor.toCSS(s.shadowOpacity || 1)), s.shadowBlur && (e.layer.context.shadowBlur = s.shadowBlur), s.shadowOffsetX && (e.layer.context.shadowOffsetX = s.shadowOffsetX), s.shadowOffsetY && (e.layer.context.shadowOffsetY = s.shadowOffsetY), this._shared(r), this._isInteractive(e) && !t && (a.fillStyle = this._getColorId(), this._shared(a));
  }
  _getFontStyle(e, t = !1) {
    const i = this.style;
    let r = [];
    return e && e.fontVariant ? r.push(e.fontVariant) : i.fontVariant && r.push(i.fontVariant), t || (e && e.fontWeight ? r.push(e.fontWeight) : i.fontWeight && r.push(i.fontWeight)), e && e.fontStyle ? r.push(e.fontStyle) : i.fontStyle && r.push(i.fontStyle), e && e.fontSize ? (H(e.fontSize) && (e.fontSize = e.fontSize + "px"), r.push(e.fontSize)) : i.fontSize && (H(i.fontSize) && (i.fontSize = i.fontSize + "px"), r.push(i.fontSize)), e && e.fontFamily ? r.push(e.fontFamily) : i.fontFamily ? r.push(i.fontFamily) : r.length && r.push("Arial"), r.join(" ");
  }
  _render(e) {
    if (this._textInfo || this._measure(e), this.textVisible) {
      const t = this._isInteractive(e), i = e.layer.context, r = e.layer.dirty, a = this._renderer._ghostLayer.context;
      i.save(), a.save(), this._prerender(e), y(this._textInfo, (s, n) => {
        y(s.textChunks, (h, c) => {
          if (h.style && (i.save(), a.save(), i.font = h.style, this._isInteractive(e) && (a.font = h.style)), h.fill && (i.save(), i.fillStyle = h.fill.toCSS()), r && i.fillText(h.text, h.offsetX, s.offsetY + h.offsetY), h.textDecoration == "underline" || h.textDecoration == "line-through") {
            let g, u = 1, b = 1, o = h.height, p = h.offsetX;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                p -= h.width;
                break;
              case "center":
                p -= h.width / 2;
            }
            if (h.style)
              switch (U.getTextStyle(h.style).fontWeight) {
                case "bolder":
                case "bold":
                case "700":
                case "800":
                case "900":
                  u = 2;
              }
            o && (b = o / 20), g = h.textDecoration == "line-through" ? u + s.offsetY + h.offsetY - h.height / 2 : u + 1.5 * b + s.offsetY + h.offsetY, i.save(), i.beginPath(), h.fill ? i.strokeStyle = h.fill.toCSS() : this.style.fill && this.style.fill instanceof X && (i.strokeStyle = this.style.fill.toCSS()), i.lineWidth = u * b, i.moveTo(p, g), i.lineTo(p + h.width, g), i.stroke(), i.restore();
          }
          t && this.interactive && a.fillText(h.text, h.offsetX, s.offsetY + h.offsetY), h.fill && i.restore(), h.style && (i.restore(), a.restore());
        });
      }), i.restore(), a.restore();
    }
  }
  _addBounds(e) {
    if (this.visible && this.isMeasured) {
      const t = this._measure({ inactive: this.inactive, layer: this.getLayer() });
      M(e, { x: t.left, y: t.top }), M(e, { x: t.right, y: t.bottom });
    }
  }
  _ignoreFontWeight() {
    return /apple/i.test(navigator.vendor);
  }
  _measure(e) {
    const t = e.layer.context, i = this._renderer._ghostLayer.context, r = this.style.direction == "rtl";
    this._textInfo = [];
    const a = this.style.oversizedBehavior, s = this.style.maxWidth, n = H(s) && a == "truncate", h = H(s) && (a == "wrap" || a == "wrap-no-break");
    t.save(), i.save(), this._prerender(e, !0, this._ignoreFontWeight());
    const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ", g = this.text.toString().replace(/\r/g, "").split(/\n/);
    let u, b = !0, o = 0, p = 0, l = 0;
    y(g, (_, w) => {
      let v;
      for (v = _ == "" ? [{ type: "value", text: "" }] : U.chunk(_, !1, this.style.ignoreFormatting); v.length > 0; ) {
        let f = { offsetY: l, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
        const x = this._measureText(c, t), A = x.actualBoundingBoxAscent + x.actualBoundingBoxDescent;
        let k;
        f.height = A, f.ascent = x.actualBoundingBoxAscent;
        let S, B, P, z = this.style.textDecoration, D = !1, I = !0, G = [];
        et(v, (T, ue) => {
          if (T.type == "format") if (T.text == "[/]") b || (t.restore(), i.restore(), b = !0), S = void 0, u = void 0, B = void 0, z = this.style.textDecoration, P = void 0, k = T.text;
          else {
            b || (t.restore(), i.restore());
            let O = U.getTextStyle(T.text);
            const F = this._getFontStyle(O);
            t.save(), i.save(), t.font = F, u = F, k = T.text, O.textDecoration && (z = O.textDecoration), O.fill && (S = O.fill), O.width && (B = R(O.width)), O.verticalAlign && (P = O.verticalAlign), b = !1;
            const Y = this._measureText(c, t), N = Y.actualBoundingBoxAscent + Y.actualBoundingBoxDescent;
            N > f.height && (f.height = N), Y.actualBoundingBoxAscent > f.ascent && (f.ascent = Y.actualBoundingBoxAscent);
          }
          else if (T.type == "value" && !D) {
            const O = this._measureText(T.text, t);
            let F = O.actualBoundingBoxLeft + O.actualBoundingBoxRight;
            if (n) {
              let W = I || this.style.breakWords || !1;
              const V = this.style.ellipsis || "", Ae = this._measureText(V, t), at = Ae.actualBoundingBoxLeft + Ae.actualBoundingBoxRight;
              if (f.width + F > s) {
                const nt = s - f.width - at;
                T.text = this._truncateText(t, T.text, nt, W), T.text += V, D = !0;
              }
            } else if (h && f.width + F > s) {
              const W = s - f.width, V = this._truncateText(t, T.text, W, !1, I && this.style.oversizedBehavior != "wrap-no-break");
              if (V == "") return this.textVisible = !0, !1;
              G = v.slice(ue + 1), xe(V) != xe(T.text) && (G.unshift({ type: "value", text: T.text.substr(V.length) }), k && G.unshift({ type: "format", text: k })), T.text = xe(V), v = [], D = !0;
            }
            let Y = 1, N = 1;
            if (u && B && B > F) {
              const W = F / B;
              switch (this.style.textAlign) {
                case "right":
                case "end":
                  Y = W;
                  break;
                case "center":
                  Y = W, N = W;
                  break;
                default:
                  N = W;
              }
              F = B;
            }
            const we = O.actualBoundingBoxAscent + O.actualBoundingBoxDescent;
            we > f.height && (f.height = we), O.actualBoundingBoxAscent > f.ascent && (f.ascent = O.actualBoundingBoxAscent), f.width += F, f.left += O.actualBoundingBoxLeft / Y, f.right += O.actualBoundingBoxRight / N, f.textChunks.push({ style: u, fill: S, text: T.text, width: F, height: we, left: O.actualBoundingBoxLeft, right: O.actualBoundingBoxRight, ascent: O.actualBoundingBoxAscent, offsetX: 0, offsetY: 0, textDecoration: z, verticalAlign: P }), I = !1;
          }
          return !0;
        }), this.style.lineHeight instanceof tt ? (f.height *= this.style.lineHeight.value, f.ascent *= this.style.lineHeight.value) : (f.height *= this.style.lineHeight || 1.2, f.ascent *= this.style.lineHeight || 1.2), o < f.left && (o = f.left), p < f.right && (p = f.right), this._textInfo.push(f), l += f.height, v = G || [];
      }
    }), b || (t.restore(), i.restore()), y(this._textInfo, (_, w) => {
      let v = 0;
      y(_.textChunks, (f) => {
        if (f.offsetX = v + f.left - _.left, f.offsetY += _.height - _.height * (this.style.baselineRatio || 0.19), v += f.width, f.verticalAlign) switch (f.verticalAlign) {
          case "super":
            f.offsetY -= _.height / 2 - f.height / 2;
            break;
          case "sub":
            f.offsetY += f.height / 2;
        }
      });
    });
    const m = { left: r ? -p : -o, top: 0, right: r ? o : p, bottom: l };
    if (a !== "none") {
      const _ = this._fitRatio(m);
      if (_ < 1) if (a == "fit") H(this.style.minScale) && _ < this.style.minScale ? (this.textVisible = !1, m.left = 0, m.top = 0, m.right = 0, m.bottom = 0) : (this._originalScale && this._originalScale != 1 || (this._originalScale = this.scale), this.scale = _, this.textVisible = !0);
      else if (a == "hide") this.textVisible = !1, m.left = 0, m.top = 0, m.right = 0, m.bottom = 0;
      else {
        switch (this.style.textAlign) {
          case "right":
          case "end":
            m.left = -s, m.right = 0;
            break;
          case "center":
            m.left = -s / 2, m.right = s / 2;
            break;
          default:
            m.left = 0, m.right = s;
        }
        this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0;
      }
      else this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = !0;
    }
    return t.restore(), i.restore(), m;
  }
  _fitRatio(e) {
    const t = this.style.maxWidth, i = this.style.maxHeight;
    if (!H(t) && !H(i)) return 1;
    const r = e.right - e.left, a = e.bottom - e.top;
    return Math.min(t / r || 1, i / a || 1);
  }
  _truncateText(e, t, i, r = !1, a = !0) {
    let s;
    do {
      if (r) t = t.slice(0, -1);
      else {
        let h = t.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
        if (h != "" && h !== t || !a) {
          if (h == "") return t;
          t = h;
        } else r = !0;
      }
      const n = this._measureText(t, e);
      s = n.actualBoundingBoxLeft + n.actualBoundingBoxRight;
    } while (s > i && t != "");
    return t;
  }
  _measureText(e, t) {
    let i = t.measureText(e), r = {};
    if (i.actualBoundingBoxAscent == null) {
      const s = document.createElement("div");
      s.innerText = e, s.style.visibility = "hidden", s.style.position = "absolute", s.style.top = "-1000000px;", s.style.fontFamily = this.style.fontFamily || "", s.style.fontSize = this.style.fontSize + "", document.body.appendChild(s);
      const n = s.getBoundingClientRect();
      document.body.removeChild(s);
      const h = n.height, c = i.width;
      r = { actualBoundingBoxAscent: h, actualBoundingBoxDescent: 0, actualBoundingBoxLeft: 0, actualBoundingBoxRight: c, fontBoundingBoxAscent: h, fontBoundingBoxDescent: 0, width: c };
    } else r = { actualBoundingBoxAscent: i.actualBoundingBoxAscent, actualBoundingBoxDescent: i.actualBoundingBoxDescent, actualBoundingBoxLeft: i.actualBoundingBoxLeft, actualBoundingBoxRight: i.actualBoundingBoxRight, fontBoundingBoxAscent: i.actualBoundingBoxAscent, fontBoundingBoxDescent: i.actualBoundingBoxDescent, width: i.width };
    const a = i.width;
    switch (this.style.textAlign) {
      case "right":
      case "end":
        r.actualBoundingBoxLeft = a, r.actualBoundingBoxRight = 0;
        break;
      case "center":
        r.actualBoundingBoxLeft = a / 2, r.actualBoundingBoxRight = a / 2;
        break;
      default:
        r.actualBoundingBoxLeft = 0, r.actualBoundingBoxRight = a;
    }
    return r;
  }
}
class wi {
  constructor() {
    Object.defineProperty(this, "fill", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fillOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textAlign", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontFamily", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontSize", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontWeight", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontStyle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fontVariant", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textDecoration", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "lineHeight", { enumerable: !0, configurable: !0, writable: !0, value: Ze(120) }), Object.defineProperty(this, "baselineRatio", { enumerable: !0, configurable: !0, writable: !0, value: 0.19 }), Object.defineProperty(this, "direction", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "textBaseline", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "oversizedBehavior", { enumerable: !0, configurable: !0, writable: !0, value: "none" }), Object.defineProperty(this, "breakWords", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "ellipsis", { enumerable: !0, configurable: !0, writable: !0, value: "…" }), Object.defineProperty(this, "maxWidth", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "maxHeight", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "minScale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "ignoreFormatting", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
}
class xi extends st {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textType", { enumerable: !0, configurable: !0, writable: !0, value: "circular" }), Object.defineProperty(this, "radius", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "startAngle", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "inside", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "orientation", { enumerable: !0, configurable: !0, writable: !0, value: "auto" }), Object.defineProperty(this, "kerning", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_textReversed", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _render(e) {
    this.textType === "circular" ? this._renderCircular(e) : super._render(e);
  }
  _renderCircular(e) {
    if (this.textVisible) {
      this._prerender(e);
      const t = this._isInteractive(e), i = e.layer.context, r = e.layer.dirty, a = this._renderer._ghostLayer.context;
      i.save(), t && a.save(), this._textInfo || this._measure(e);
      let s = this.radius || 0, n = this.startAngle || 0, h = 0, c = this.orientation, g = c == "auto" ? "auto" : c == "inward";
      const u = this.inside, b = this.style.textAlign || "left", o = this.kerning || 0;
      let p = b == "left" ? 1 : -1;
      const l = !this._textReversed;
      if (g == "auto") {
        let m = 0, _ = 0;
        y(this._textInfo, (w, v) => {
          const f = n + w.width / (s - w.height) / 2 * -p;
          f > m && (m = f);
        }), _ = b == "left" ? (m + h / 2) * oe : b == "right" ? (m - h / 2) * oe : n * oe, _ = At(_), g = _ >= 270 || _ <= 90;
      }
      g == 1 && l && (this._textInfo.reverse(), this._textReversed = !0), y(this._textInfo, (m, _) => {
        const w = m.height;
        u || (s += w), (p == -1 && g || p == 1 && !g) && l && m.textChunks.reverse();
        let v = n;
        h = 0, b == "center" && (v += m.width / (s - w) / 2 * -p, h = v - n), v += Math.PI * (g ? 0 : 1), i.save(), t && a.save(), i.rotate(v), t && a.rotate(v);
        let f = 0;
        y(m.textChunks, (x, A) => {
          const k = x.text, S = x.width;
          f = S / 2 / (s - w) * p, i.rotate(f), t && a.rotate(f), x.style && (i.save(), a.save(), i.font = x.style, t && (a.font = x.style)), x.fill && (i.save(), i.fillStyle = x.fill.toCSS()), i.textBaseline = "middle", i.textAlign = "center", t && (a.textBaseline = "middle", a.textAlign = "center"), r && i.fillText(k, 0, (g ? 1 : -1) * (0 - s + w / 2)), t && a.fillText(k, 0, (g ? 1 : -1) * (0 - s + w / 2)), x.fill && i.restore(), x.style && (i.restore(), a.restore()), f = (S / 2 + o) / (s - w) * p, i.rotate(f), t && a.rotate(f);
        }), i.restore(), t && a.restore(), u && (s -= w);
      }), i.restore(), t && a.restore();
    }
  }
  _measure(e) {
    return this.textType === "circular" ? this._measureCircular(e) : super._measure(e);
  }
  _measureCircular(e) {
    const t = e.layer.context, i = this._renderer._ghostLayer.context, r = this.style.direction == "rtl", a = this.style.oversizedBehavior, s = this.style.maxWidth, n = H(s) && a == "truncate", h = this.style.ellipsis || "";
    let c;
    this.textVisible = !0, this._textInfo = [], this._textReversed = !1, t.save(), i.save(), this._prerender(e, !0);
    const g = this.text.toString().replace(/\r/g, "").split(/\n/);
    let u = !0, b = 0, o = 0;
    return y(g, (p, l) => {
      let m, _, w, v = U.chunk(p, !1, this.style.ignoreFormatting), f = { offsetY: o, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
      y(v, (x, A) => {
        if (x.type == "format") {
          if (x.text == "[/]") u || (t.restore(), i.restore(), u = !0), _ = void 0, m = void 0, w = void 0;
          else {
            let k = U.getTextStyle(x.text);
            const S = this._getFontStyle(k);
            t.save(), i.save(), t.font = S, m = S, k.fill && (_ = k.fill), k.width && (w = R(k.width)), u = !1;
          }
          n && (c = this._measureText(h, t));
        } else if (x.type == "value") {
          const k = x.text.match(/./gu) || [];
          r && k.reverse();
          for (let S = 0; S < k.length; S++) {
            const B = k[S], P = this._measureText(B, t);
            let z = P.width;
            m && w && w > z && (z = w);
            const D = P.actualBoundingBoxAscent + P.actualBoundingBoxDescent;
            if (D > f.height && (f.height = D), P.actualBoundingBoxAscent > f.ascent && (f.ascent = P.actualBoundingBoxAscent), b += z, n) {
              c || (c = this._measureText(h, t));
              const I = c.actualBoundingBoxLeft + c.actualBoundingBoxRight;
              if (b + I > s) {
                f.textChunks.length == 1 ? this.textVisible = !1 : (f.width += I, f.left += c.actualBoundingBoxLeft, f.right += c.actualBoundingBoxRight, f.textChunks.push({ style: m, fill: _, text: h, width: I, height: D + c.actualBoundingBoxDescent, left: c.actualBoundingBoxLeft, right: c.actualBoundingBoxRight, ascent: c.actualBoundingBoxAscent, offsetX: 0, offsetY: D, textDecoration: void 0 }));
                break;
              }
            }
            if (f.width += z, f.left += P.actualBoundingBoxLeft, f.right += P.actualBoundingBoxRight, f.textChunks.push({ style: m, fill: _, text: B, width: z, height: D + P.actualBoundingBoxDescent, left: P.actualBoundingBoxLeft, right: P.actualBoundingBoxRight, ascent: P.actualBoundingBoxAscent, offsetX: 0, offsetY: D, textDecoration: void 0 }), r) break;
          }
        }
      }), this.style.lineHeight instanceof tt ? f.height *= this.style.lineHeight.value : f.height *= this.style.lineHeight || 1.2, this._textInfo.push(f), o += f.height;
    }), u || (t.restore(), i.restore()), a == "hide" && b > s && (this.textVisible = !1), y(this._textInfo, (p) => {
      y(p.textChunks, (l) => {
        l.offsetY += Math.round((p.height - l.height + (p.ascent - l.ascent)) / 2);
      });
    }), t.restore(), i.restore(), { left: 0, top: 0, right: 0, bottom: 0 };
  }
}
class Pi extends ve {
  constructor(e, t) {
    super(e), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "image", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_imageMask", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.image = t;
  }
  _dispose() {
    super._dispose(), this._imageMask && ne(this._imageMask);
  }
  getLocalBounds() {
    if (!this._localBounds) {
      let e = 0, t = 0;
      this.width && (e = this.width), this.height && (t = this.height), this._localBounds = { left: 0, top: 0, right: e, bottom: t }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  _render(e) {
    if (super._render(e), this.image) {
      if (this.tainted === void 0 && (this.tainted = Xe(this.image), e.layer.tainted = !0), this.tainted && this._renderer._omitTainted) return;
      if (e.layer.dirty) {
        this.shadowColor && (e.layer.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1)), this.shadowBlur && (e.layer.context.shadowBlur = this.shadowBlur), this.shadowOffsetX && (e.layer.context.shadowOffsetX = this.shadowOffsetX), this.shadowOffsetY && (e.layer.context.shadowOffsetY = this.shadowOffsetY);
        const t = this.width || this.image.naturalWidth, i = this.height || this.image.naturalHeight;
        e.layer.context.drawImage(this.image, 0, 0, t, i);
      }
      if (this.interactive && this._isInteractive(e)) {
        const t = this._getMask(this.image);
        this._renderer._ghostLayer.context.drawImage(t, 0, 0);
      }
    }
  }
  clear() {
    super.clear(), this.image = void 0, this._imageMask = void 0;
  }
  _getMask(e) {
    if (this._imageMask === void 0) {
      const t = this.width || e.naturalWidth, i = this.height || e.naturalHeight, r = document.createElement("canvas");
      r.width = t, r.height = i;
      const a = r.getContext("2d");
      a.imageSmoothingEnabled = !1, a.fillStyle = this._getColorId(), a.fillRect(0, 0, t, i), Xe(e) || (a.globalCompositeOperation = "destination-in", a.drawImage(e, 0, 0, t, i)), this._imageMask = r;
    }
    return this._imageMask;
  }
}
class Oi {
  constructor(e, t, i, r) {
    Object.defineProperty(this, "event", { enumerable: !0, configurable: !0, writable: !0, value: e }), Object.defineProperty(this, "originalPoint", { enumerable: !0, configurable: !0, writable: !0, value: t }), Object.defineProperty(this, "point", { enumerable: !0, configurable: !0, writable: !0, value: i }), Object.defineProperty(this, "bbox", { enumerable: !0, configurable: !0, writable: !0, value: r }), Object.defineProperty(this, "id", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "simulated", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "native", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), me("touchevents") && e instanceof Touch ? this.id = e.identifier : this.id = null;
  }
}
class ki extends Et {
  constructor(e) {
    if (super(), Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("div") }), Object.defineProperty(this, "_layerDom", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("div") }), Object.defineProperty(this, "layers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_dirtyLayers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "defaultLayer", { enumerable: !0, configurable: !0, writable: !0, value: this.getLayer(0) }), Object.defineProperty(this, "_ghostLayer", { enumerable: !0, configurable: !0, writable: !0, value: new Mi() }), Object.defineProperty(this, "_patternCanvas", { enumerable: !0, configurable: !0, writable: !0, value: document.createElement("canvas") }), Object.defineProperty(this, "_patternContext", { enumerable: !0, configurable: !0, writable: !0, value: this._patternCanvas.getContext("2d") }), Object.defineProperty(this, "_realWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_realHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_calculatedWidth", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_calculatedHeight", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "resolution", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "interactionsEnabled", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_listeners", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_events", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_colorId", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_colorMap", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_forceInteractive", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_omitTainted", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_hovering", { enumerable: !0, configurable: !0, writable: !0, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "_dragging", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_mousedown", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_lastPointerMoveEvent", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tapToActivate", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "tapToActivateTimeout", { enumerable: !0, configurable: !0, writable: !0, value: 3e3 }), Object.defineProperty(this, "_touchActive", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_touchActiveTimeout", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.resolution = e ?? window.devicePixelRatio, this.view.style.position = "absolute", this.view.setAttribute("aria-hidden", "true"), this.view.appendChild(this._layerDom), this._disposers.push(new $(() => {
      he(this._events, (t, i) => {
        i.disposer.dispose();
      }), y(this.layers, (t) => {
        ne(t.view), t.exportableView && ne(t.exportableView);
      }), ne(this._ghostLayer.view), ne(this._patternCanvas);
    })), this._disposers.push(Ke(() => {
      e == null && (this.resolution = window.devicePixelRatio);
    })), me("touchevents")) {
      const t = (i) => {
        this._dragging.length !== 0 && et(this._dragging, (r) => !r.value.shouldCancelTouch() || (i.preventDefault(), !1)), this._touchActiveTimeout && this._delayTouchDeactivate();
      };
      this._disposers.push(C(window, "touchstart", t, { passive: !1 })), this._disposers.push(C(this.view, "touchstart", t, { passive: !1 })), this._disposers.push(C(this.view, "touchmove", () => {
        this._touchActiveTimeout && this._delayTouchDeactivate();
      }, { passive: !0 })), this._disposers.push(C(window, "click", (i) => {
        this._touchActive = !1;
      }, { passive: !0 })), this._disposers.push(C(this.view, "click", (i) => {
        window.setTimeout(() => {
          this._touchActive = !0, this._delayTouchDeactivate();
        }, 100);
      }, { passive: !0 }));
    }
    me("wheelevents") && this._disposers.push(C(this.view, "wheel", (t) => {
      let i = !1;
      this._hovering.forEach((r) => {
        if (r.wheelable) return i = !0, !1;
      }), i && t.preventDefault();
    }, { passive: !1 }));
  }
  resetImageArray() {
    this._ghostLayer.imageArray = void 0;
  }
  _delayTouchDeactivate() {
    this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout), this.tapToActivateTimeout > 0 && (this._touchActiveTimeout = window.setTimeout(() => {
      this._touchActive = !1;
    }, this.tapToActivateTimeout));
  }
  get debugGhostView() {
    return !!this._ghostLayer.view.parentNode;
  }
  set debugGhostView(e) {
    e ? this._ghostLayer.view.parentNode || this.view.appendChild(this._ghostLayer.view) : this._ghostLayer.view.parentNode && this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view);
  }
  createLinearGradient(e, t, i, r) {
    return this.defaultLayer.context.createLinearGradient(e, t, i, r);
  }
  createRadialGradient(e, t, i, r, a, s) {
    return this.defaultLayer.context.createRadialGradient(e, t, i, r, a, s);
  }
  createPattern(e, t, i, r, a) {
    return this._patternCanvas.width = r, this._patternCanvas.height = a, this._patternContext.clearRect(0, 0, r, a), t.renderDetached(this._patternContext), e.renderDetached(this._patternContext), this._patternContext.createPattern(this._patternCanvas, i);
  }
  makeContainer() {
    return new ii(this);
  }
  makeGraphics() {
    return new vi(this);
  }
  makeText(e, t) {
    return new st(this, e, t);
  }
  makeTextStyle() {
    return new wi();
  }
  makeRadialText(e, t) {
    return new xi(this, e, t);
  }
  makePicture(e) {
    return new Pi(this, e);
  }
  resizeLayer(e) {
    e.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resizeGhost() {
    this._ghostLayer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resize(e, t, i, r) {
    this._realWidth = e, this._realHeight = t, this._calculatedWidth = i, this._calculatedHeight = r, y(this.layers, (a) => {
      a && (a.dirty = !0, this.resizeLayer(a));
    }), this.resizeGhost(), this.view.style.width = i + "px", this.view.style.height = r + "px";
  }
  createDetachedLayer(e = !1) {
    const t = document.createElement("canvas"), i = t.getContext("2d", { willReadFrequently: e }), r = new Si(t, i);
    return t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", r;
  }
  getLayerByOrder(e) {
    const t = this.layers, i = t.length;
    for (let r = 0; r < i; r++) {
      const a = t[r];
      if (a.order == e) return a;
    }
  }
  getLayer(e, t = !0) {
    let i = this.getLayerByOrder(e);
    if (i) return i;
    const r = this.createDetachedLayer(e == 99);
    r.order = e, r.visible = t, r.view.className = "am5-layer-" + e, r.visible && this.resizeLayer(r);
    const a = this.layers;
    a.push(r), a.sort((h, c) => h.order > c.order ? 1 : h.order < c.order ? -1 : 0);
    const s = a.length;
    let n;
    for (let h = Tt(a, r) + 1; h < s; h++) if (a[h].visible) {
      n = a[h];
      break;
    }
    return r.visible && (n === void 0 ? this._layerDom.appendChild(r.view) : this._layerDom.insertBefore(r.view, n.view)), r;
  }
  render(e) {
    if (this._dirtyLayers.length = 0, y(this.layers, (t) => {
      t && t.dirty && t.visible && (this._dirtyLayers.push(t), t.clear());
    }), this._ghostLayer.clear(), e.render({ inactive: null, layer: this.defaultLayer }), this._ghostLayer.context.restore(), y(this.layers, (t) => {
      if (t) {
        const i = t.context;
        i.beginPath(), i.moveTo(0, 0), i.stroke();
      }
    }), y(this._dirtyLayers, (t) => {
      t.context.restore(), t.dirty = !1;
    }), this._hovering.size && this._lastPointerMoveEvent) {
      const { events: t, target: i, native: r } = this._lastPointerMoveEvent;
      y(t, (a) => {
        this._dispatchGlobalMousemove(a, i, r);
      });
    }
  }
  paintId(e) {
    const t = Qt(++this._colorId), i = X.fromHex(t).toCSS();
    return this._colorMap[i] = e, i;
  }
  _removeObject(e) {
    e._colorId !== void 0 && delete this._colorMap[e._colorId];
  }
  _adjustBoundingBox(e) {
    const t = this._ghostLayer.margin;
    return new DOMRect(-t.left, -t.top, e.width + t.left + t.right, e.height + t.top + t.bottom);
  }
  getEvent(e, t = !0) {
    const i = this.view.getBoundingClientRect(), r = e.clientX || 0, a = e.clientY || 0, s = this._calculatedWidth / this._realWidth, n = this._calculatedHeight / this._realHeight, h = { x: r - i.left, y: a - i.top }, c = { x: (r - (t ? i.left : 0)) * s, y: (a - (t ? i.top : 0)) * n };
    return new Oi(e, h, c, this._adjustBoundingBox(i));
  }
  _getHitTarget(e, t, i) {
    if (t.width === 0 || t.height === 0 || e.x < t.left || e.x > t.right || e.y < t.top || e.y > t.bottom || !i || !this._layerDom.contains(i)) return;
    const r = this._ghostLayer.getImageData(e, t);
    if (r.data[0] === 0 && r.data[1] === 0 && r.data[2] === 0) return !1;
    const a = X.fromRGB(r.data[0], r.data[1], r.data[2]).toCSS();
    return this._colorMap[a];
  }
  getObjectAtPoint(e) {
    const t = this._ghostLayer.getImageArray(e);
    if (t[0] === 0 && t[1] === 0 && t[2] === 0) return;
    const i = X.fromRGB(t[0], t[1], t[2]).toCSS();
    return this._colorMap[i];
  }
  _withEvents(e, t) {
    const i = this._events[e];
    if (i !== void 0) {
      i.dispatching = !0;
      try {
        t(i);
      } finally {
        i.dispatching = !1, i.cleanup && (i.cleanup = !1, _e(i.callbacks, (r) => !r.disposed), i.callbacks.length === 0 && (i.disposer.dispose(), delete this._events[e]));
      }
    }
  }
  _dispatchEventAll(e, t) {
    this.interactionsEnabled && this._withEvents(e, (i) => {
      y(i.callbacks, (r) => {
        r.disposed || r.callback.call(r.context, t);
      });
    });
  }
  _dispatchEvent(e, t, i) {
    if (!this.interactionsEnabled) return !1;
    let r = !1;
    return this._withEvents(e, (a) => {
      y(a.callbacks, (s) => {
        s.disposed || s.object !== t || (s.callback.call(s.context, i), r = !0);
      });
    }), r;
  }
  _dispatchMousedown(e, t) {
    const i = e.button;
    if (i != 0 && i != 2 && i != 1 && i !== void 0) return;
    const r = this.getEvent(e), a = this._getHitTarget(r.originalPoint, r.bbox, t);
    if (a) {
      const s = r.id;
      let n = !1;
      fe(a, (h) => {
        const c = { id: s, value: h };
        return this._mousedown.push(c), !n && this._dispatchEvent("pointerdown", h, r) && (n = !0, this._dragging.some((g) => g.value === h && g.id === s) || this._dragging.push(c)), !0;
      });
    }
  }
  _dispatchGlobalMousemove(e, t, i) {
    const r = this.getEvent(e), a = this._getHitTarget(r.originalPoint, r.bbox, t);
    r.native = i, a ? (this._hovering.forEach((s) => {
      s.contains(a) || (this._hovering.delete(s), s.cursorOverStyle && be(document.body, "cursor", s._replacedCursorStyle), this._dispatchEvent("pointerout", s, r));
    }), r.native && fe(a, (s) => (this._hovering.has(s) || (this._hovering.add(s), s.cursorOverStyle && (s._replacedCursorStyle = Lt(document.body, "cursor"), be(document.body, "cursor", s.cursorOverStyle)), this._dispatchEvent("pointerover", s, r)), !0))) : (this._hovering.forEach((s) => {
      s.cursorOverStyle && be(document.body, "cursor", s._replacedCursorStyle), this._dispatchEvent("pointerout", s, r);
    }), this._hovering.clear()), this._dispatchEventAll("globalpointermove", r);
  }
  removeHovering(e) {
    this._hovering.delete(e), e.cursorOverStyle && be(document.body, "cursor", e._replacedCursorStyle);
  }
  _dispatchGlobalMouseup(e, t) {
    const i = this.getEvent(e);
    i.native = t, this._dispatchEventAll("globalpointerup", i);
  }
  _dispatchDragMove(e) {
    if (this._dragging.length !== 0) {
      const t = this.getEvent(e), i = t.id;
      this._dragging.forEach((r) => {
        r.id === i && this._dispatchEvent("pointermove", r.value, t);
      });
    }
  }
  _dispatchDragEnd(e, t) {
    const i = e.button;
    let r;
    if (i == 0 || i === void 0) r = "click";
    else if (i == 2) r = "rightclick";
    else {
      if (i != 1) return;
      r = "middleclick";
    }
    const a = this.getEvent(e), s = a.id;
    if (this._mousedown.length !== 0) {
      const n = this._getHitTarget(a.originalPoint, a.bbox, t);
      n && this._mousedown.forEach((h) => {
        h.id === s && h.value.contains(n) && this._dispatchEvent(r, h.value, a);
      }), this._mousedown.length = 0;
    }
    this._dragging.length !== 0 && (this._dragging.forEach((n) => {
      n.id === s && this._dispatchEvent("pointerup", n.value, a);
    }), this._dragging.length = 0);
  }
  _dispatchDoubleClick(e, t) {
    const i = this.getEvent(e), r = this._getHitTarget(i.originalPoint, i.bbox, t);
    r && fe(r, (a) => !this._dispatchEvent("dblclick", a, i));
  }
  _dispatchWheel(e, t) {
    const i = this.getEvent(e), r = this._getHitTarget(i.originalPoint, i.bbox, t);
    r && fe(r, (a) => !this._dispatchEvent("wheel", a, i));
  }
  _makeSharedEvent(e, t) {
    if (this._listeners[e] === void 0) {
      const i = t();
      this._listeners[e] = new Ct(() => {
        delete this._listeners[e], i.dispose();
      });
    }
    return this._listeners[e].increment();
  }
  _onPointerEvent(e, t) {
    let i = !1, r = null;
    function a() {
      r = null, i = !1;
    }
    return new He([new $(() => {
      r !== null && clearTimeout(r), a();
    }), C(this.view, Ee(e), (s) => {
      i = !0, r !== null && clearTimeout(r), r = window.setTimeout(a, 0);
    }), ei(window, e, (s, n) => {
      r !== null && (clearTimeout(r), r = null), t(s, n, i), i = !1;
    })]);
  }
  _initEvent(e) {
    switch (e) {
      case "globalpointermove":
      case "pointerover":
      case "pointerout":
        return this._makeSharedEvent("pointermove", () => {
          const t = (i, r, a) => {
            this._lastPointerMoveEvent = { events: i, target: r, native: a }, y(i, (s) => {
              this._dispatchGlobalMousemove(s, r, a);
            });
          };
          return new He([this._onPointerEvent("pointerdown", t), this._onPointerEvent("pointermove", t)]);
        });
      case "globalpointerup":
        return this._makeSharedEvent("pointerup", () => {
          const t = this._onPointerEvent("pointerup", (r, a, s) => {
            y(r, (n) => {
              this._dispatchGlobalMouseup(n, s);
            }), this._lastPointerMoveEvent = { events: r, target: a, native: s };
          }), i = this._onPointerEvent("pointercancel", (r, a, s) => {
            y(r, (n) => {
              this._dispatchGlobalMouseup(n, s);
            }), this._lastPointerMoveEvent = { events: r, target: a, native: s };
          });
          return new $(() => {
            t.dispose(), i.dispose();
          });
        });
      case "click":
      case "rightclick":
      case "middleclick":
      case "pointerdown":
      case "pointermove":
      case "pointerup":
        return this._makeSharedEvent("pointerdown", () => {
          const t = this._onPointerEvent("pointerdown", (s, n) => {
            y(s, (h) => {
              this._dispatchMousedown(h, n);
            });
          }), i = this._onPointerEvent("pointermove", (s) => {
            y(s, (n) => {
              this._dispatchDragMove(n);
            });
          }), r = this._onPointerEvent("pointerup", (s, n) => {
            y(s, (h) => {
              this._dispatchDragEnd(h, n);
            });
          }), a = this._onPointerEvent("pointercancel", (s, n) => {
            y(s, (h) => {
              this._dispatchDragEnd(h, n);
            });
          });
          return new $(() => {
            t.dispose(), i.dispose(), r.dispose(), a.dispose();
          });
        });
      case "dblclick":
        return this._makeSharedEvent("dblclick", () => this._onPointerEvent("dblclick", (t, i) => {
          y(t, (r) => {
            this._dispatchDoubleClick(r, i);
          });
        }));
      case "wheel":
        return this._makeSharedEvent("wheel", () => C(this.view, Ee("wheel"), (t) => {
          this._dispatchWheel(t, Qe(t));
        }, { passive: !1 }));
    }
  }
  _addEvent(e, t, i, r) {
    let a = this._events[t];
    a === void 0 && (a = this._events[t] = { disposer: this._initEvent(t), callbacks: [], dispatching: !1, cleanup: !1 });
    const s = { object: e, context: r, callback: i, disposed: !1 };
    return a.callbacks.push(s), new $(() => {
      s.disposed = !0, a.dispatching ? a.cleanup = !0 : (Te(a.callbacks, s), a.callbacks.length === 0 && (a.disposer.dispose(), delete this._events[t]));
    });
  }
  getCanvas(e, t) {
    this.render(e), t || (t = {});
    let i = this.resolution, r = Math.floor(this._calculatedWidth * this.resolution), a = Math.floor(this._calculatedHeight * this.resolution);
    if (t.minWidth && t.minWidth > r) {
      let o = t.minWidth / r;
      o > i && (i = o * this.resolution);
    }
    if (t.minHeight && t.minHeight > a) {
      let o = t.minHeight / a;
      o > i && (i = o * this.resolution);
    }
    if (t.maxWidth && t.maxWidth < r) {
      let o = t.maxWidth / r;
      o < i && (i = o * this.resolution);
    }
    if (t.maxHeight && t.maxHeight > a) {
      let o = t.maxHeight / a;
      o < i && (i = o * this.resolution);
    }
    t.maintainPixelRatio && (i /= this.resolution);
    const s = [];
    let n = !1;
    const h = document.createElement("canvas");
    i != this.resolution && (n = !0, r = r * i / this.resolution, a = a * i / this.resolution), h.width = r, h.height = a, h.style.position = "fixed", h.style.top = "-10000px", this.view.appendChild(h), s.push(h);
    const c = h.getContext("2d");
    let g = 0, u = 0, b = !1;
    return y(this.layers, (o) => {
      if (o && o.visible && (o.tainted || n)) {
        b = !0, o.exportableView = o.view, o.exportableContext = o.context, o.view = document.createElement("canvas"), o.view.style.position = "fixed", o.view.style.top = "-10000px", this.view.appendChild(o.view), s.push(o.view);
        let p = 0, l = 0;
        o.margin && (p += o.margin.left || 0 + o.margin.right || 0, l += o.margin.top || 0 + o.margin.bottom || 0), o.view.width = r + p, o.view.height = a + l, o.context = o.view.getContext("2d"), o.dirty = !0, o.scale = i;
      }
    }), b && (this._omitTainted = !0, this.render(e), this._omitTainted = !1), y(this.layers, (o) => {
      if (o && o.visible) {
        let p = 0, l = 0;
        o.margin && (p = -(o.margin.left || 0) * this.resolution, l = -(o.margin.top || 0) * this.resolution), c.drawImage(o.view, p, l), o.exportableView && (o.view = o.exportableView, o.exportableView = void 0), o.exportableContext && (o.context = o.exportableContext, o.exportableContext = void 0), g < o.view.clientWidth && (g = o.view.clientWidth), u < o.view.clientHeight && (u = o.view.clientHeight), o.scale = void 0;
      }
    }), h.style.width = g + "px", h.style.height = u + "px", y(s, (o) => {
      o.style.position = "", o.style.top = "", this.view.removeChild(o);
    }), h;
  }
}
class Mi {
  constructor() {
    Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "context", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "margin", { enumerable: !0, configurable: !0, writable: !0, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_resolution", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_width", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_height", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "imageArray", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), this.view = document.createElement("canvas"), this.context = this.view.getContext("2d", { alpha: !1, willReadFrequently: !0 }), this.context.imageSmoothingEnabled = !1, this.view.style.position = "absolute", this.view.style.top = "0px", this.view.style.left = "0px";
  }
  resize(e, t, i, r, a) {
    this._resolution = a, e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, r += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px", this._width = Math.floor(e * a), this._height = Math.floor(t * a), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = r + "px";
  }
  getImageData(e, t) {
    return this.context.getImageData(Math.round((e.x - t.left) / t.width * this._width), Math.round((e.y - t.top) / t.height * this._height), 1, 1);
  }
  getImageArray(e) {
    this.imageArray || (this.imageArray = this.context.getImageData(0, 0, this._width, this._height).data);
    const t = this.imageArray, i = Math.round(e.x * this._resolution), r = 4 * (Math.round(e.y * this._resolution) * this._width + i);
    return [t[r], t[r + 1], t[r + 2], t[r + 3]];
  }
  setMargin(e) {
    this.margin.left = 0, this.margin.right = 0, this.margin.top = 0, this.margin.bottom = 0, y(e, (t) => {
      t.margin && (this.margin.left = Math.max(this.margin.left, t.margin.left), this.margin.right = Math.max(this.margin.right, t.margin.right), this.margin.top = Math.max(this.margin.top, t.margin.top), this.margin.bottom = Math.max(this.margin.bottom, t.margin.bottom));
    });
  }
  clear() {
    this.context.save(), this.context.fillStyle = "#000", this.context.fillRect(0, 0, this._width, this._height);
  }
}
class Si {
  constructor(e, t) {
    Object.defineProperty(this, "view", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "context", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "margin", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "order", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "visible", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "width", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "height", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "scale", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "dirty", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "exportableView", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "exportableContext", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_width", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_height", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), this.view = e, this.context = t;
  }
  resize(e, t, i, r, a) {
    this.width != null && (e = this.width, i = this.width), this.height != null && (t = this.height, r = this.height), this.margin ? (e += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i += this.margin.left + this.margin.right, r += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px") : (this.view.style.left = "0px", this.view.style.top = "0px"), this._width = Math.floor(e * a), this._height = Math.floor(t * a), this.view.width = this._width, this.view.style.width = i + "px", this.view.height = this._height, this.view.style.height = r + "px";
  }
  clear() {
    this.context.save(), this.context.clearRect(0, 0, this._width, this._height);
  }
}
function Ne(d, e) {
  d == null ? requestAnimationFrame(e) : setTimeout(() => {
    requestAnimationFrame(e);
  }, 1e3 / d);
}
class Be {
  constructor(e, t = {}, i) {
    if (Object.defineProperty(this, "dom", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_inner", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_isDirtyParents", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dirty", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyParents", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyBounds", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_dirtyPositions", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_ticker", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_tickers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_updateTick", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "events", { enumerable: !0, configurable: !0, writable: !0, value: new ht() }), Object.defineProperty(this, "animationTime", { enumerable: !0, configurable: !0, writable: !0, value: null }), Object.defineProperty(this, "_animations", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_renderer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rootContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "container", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "tooltipContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipContainerSettings", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltip", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "language", { enumerable: !0, configurable: !0, writable: !0, value: Xt.new(this, {}) }), Object.defineProperty(this, "locale", { enumerable: !0, configurable: !0, writable: !0, value: rt }), Object.defineProperty(this, "utc", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "timezone", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "fps", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "numberFormatter", { enumerable: !0, configurable: !0, writable: !0, value: Wt.new(this, {}) }), Object.defineProperty(this, "dateFormatter", { enumerable: !0, configurable: !0, writable: !0, value: Vt.new(this, {}) }), Object.defineProperty(this, "durationFormatter", { enumerable: !0, configurable: !0, writable: !0, value: $t.new(this, {}) }), Object.defineProperty(this, "tabindex", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_tabindexes", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_a11yD", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_focusElementDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_focusElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_focusedSprite", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_isShift", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_keyboardDragPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_readerAlertElement", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_logo", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipDiv", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "nonce", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "interfaceColors", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "verticalLayout", { enumerable: !0, configurable: !0, writable: !0, value: ut.new(this, {}) }), Object.defineProperty(this, "horizontalLayout", { enumerable: !0, configurable: !0, writable: !0, value: ct.new(this, {}) }), Object.defineProperty(this, "gridLayout", { enumerable: !0, configurable: !0, writable: !0, value: dt.new(this, {}) }), Object.defineProperty(this, "_paused", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "autoResize", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "_fontHash", { enumerable: !0, configurable: !0, writable: !0, value: "" }), Object.defineProperty(this, "_isDisposed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_disposers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_resizeSensorDisposer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltips", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_htmlElementContainer", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_htmlEnabledContainers", { enumerable: !0, configurable: !0, writable: !0, value: [] }), !i) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    let r, a;
    if (this._settings = t, t.accessible == 0 && (this._a11yD = !0), t.useSafeResolution == null && (t.useSafeResolution = !0), t.useSafeResolution && (r = bt()), this._renderer = new ki(r), a = e instanceof HTMLElement ? e : document.getElementById(e), y(te.rootElements, (h) => {
      if (h.dom === a) throw new Error("You cannot have multiple Roots on the same DOM node");
    }), this.interfaceColors = ge.new(this, {}), a === null) throw new Error("Could not find HTML element with id `" + e + "`");
    this.dom = a;
    let s = document.createElement("div");
    s.style.position = "relative", s.style.width = "100%", s.style.height = "100%", a.appendChild(s);
    const n = t.tooltipContainerBounds;
    n && (this._tooltipContainerSettings = n), this._inner = s, this._updateComputedStyles(), te.rootElements.push(this);
  }
  static new(e, t) {
    const i = new Be(e, t, !0);
    return i._init(), i;
  }
  moveDOM(e) {
    let t;
    if (t = e instanceof HTMLElement ? e : document.getElementById(e), t) {
      for (; this.dom.childNodes.length > 0; ) t.appendChild(this.dom.childNodes[0]);
      this.dom = t, this._initResizeSensor(), this.resize();
    }
  }
  _handleLogo() {
    if (this._logo) {
      const e = this.dom.offsetWidth, t = this.dom.offsetHeight;
      e <= 150 || t <= 60 ? this._logo.hide() : this._logo.show();
    }
  }
  _showBranding() {
    if (!this._logo) {
      const e = this.tooltipContainer.children.push(q.new(this, { interactive: !0, interactiveChildren: !1, position: "absolute", setStateOnChildren: !0, paddingTop: 9, paddingRight: 9, paddingBottom: 9, paddingLeft: 9, scale: 0.6, y: Ze(100), centerY: Z, tooltipText: "Created using amCharts 5", tooltipX: Z, cursorOverStyle: "pointer", background: ft.new(this, { fill: ie(4671320), fillOpacity: 0, tooltipY: 5 }) })), t = We.new(this, { pointerOrientation: "horizontal", paddingTop: 4, paddingRight: 7, paddingBottom: 4, paddingLeft: 7 });
      t.label.setAll({ fontSize: 12 }), t.get("background").setAll({ fill: this.interfaceColors.get("background"), stroke: this.interfaceColors.get("grid"), strokeOpacity: 0.3 }), e.set("tooltip", t), e.events.on("click", () => {
        window.open("https://www.amcharts.com/", "_blank");
      }), e.states.create("hover", {}), e.children.push(Le.new(this, { stroke: ie(13421772), strokeWidth: 3, svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6" })).states.create("hover", { stroke: ie(3976191) }), e.children.push(Le.new(this, { stroke: ie(8947848), strokeWidth: 3, svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0" })).states.create("hover", { stroke: ie(4671320) }), this._logo = e, this._handleLogo();
    }
  }
  _getRealSize() {
    return this.dom.getBoundingClientRect();
  }
  _getCalculatedSize(e) {
    return this._settings.calculateSize ? this._settings.calculateSize(e) : { width: e.width, height: e.height };
  }
  _init() {
    const e = this._settings;
    e.accessible !== !1 && (e.focusable && (this._inner.setAttribute("focusable", "true"), this._inner.setAttribute("tabindex", this.tabindex + "")), e.ariaLabel && this._inner.setAttribute("aria-label", e.ariaLabel), e.role && this._inner.setAttribute("role", e.role));
    const t = this._renderer, i = this._getRealSize(), r = this._getCalculatedSize(i), a = Math.floor(r.width), s = Math.floor(r.height), n = Math.floor(i.width), h = Math.floor(i.height), c = q.new(this, { visible: !0, width: a, height: s });
    this._rootContainer = c, this._rootContainer._defaultThemes.push(Yt.new(this));
    const g = c.children.push(q.new(this, { visible: !0, width: Z, height: Z }));
    this.container = g, t.resize(n, h, a, s), this._inner.appendChild(t.view), this._initResizeSensor();
    const u = document.createElement("div");
    if (this._htmlElementContainer = u, u.className = "am5-html-container", u.style.position = "absolute", u.style.pointerEvents = "none", this._tooltipContainerSettings || (u.style.overflow = "hidden"), this._inner.appendChild(u), this._a11yD !== !0) {
      const b = document.createElement("div");
      b.className = "am5-reader-container", b.setAttribute("role", "alert"), b.style.position = "absolute", b.style.width = "1px", b.style.height = "1px", b.style.overflow = "hidden", b.style.clip = "rect(1px, 1px, 1px, 1px)", this._readerAlertElement = b, this._inner.appendChild(this._readerAlertElement);
      const o = document.createElement("div");
      o.className = "am5-focus-container", o.style.position = "absolute", o.style.pointerEvents = "none", o.style.top = "0px", o.style.left = "0px", o.style.overflow = "hidden", o.style.width = a + "px", o.style.height = s + "px", o.setAttribute("role", "graphics-document"), K(o, !1), this._focusElementContainer = o, this._inner.appendChild(this._focusElementContainer);
      const p = document.createElement("div");
      this._tooltipElementContainer = p, p.className = "am5-tooltip-container", this._inner.appendChild(p), me("keyboardevents") && (this._disposers.push(C(window, "keydown", (l) => {
        l.keyCode == 16 ? this._isShift = !0 : l.keyCode == 9 && (this._isShift = l.shiftKey);
      })), this._disposers.push(C(window, "keyup", (l) => {
        l.keyCode == 16 && (this._isShift = !1);
      })), this._disposers.push(C(o, "click", () => {
        const l = this._focusedSprite;
        if (l) {
          const m = t.getEvent(new MouseEvent("click"));
          l.events.dispatch("click", { type: "click", originalEvent: m.event, point: m.point, simulated: !0, target: l });
        }
      })), this._disposers.push(C(o, "keydown", (l) => {
        const m = this._focusedSprite;
        if (m) {
          l.keyCode == 27 && (gt(), this._focusedSprite = void 0);
          let _ = 0, w = 0;
          switch (l.keyCode) {
            case 13:
              l.preventDefault();
              const v = t.getEvent(new MouseEvent("click"));
              return void m.events.dispatch("click", { type: "click", originalEvent: v.event, point: v.point, simulated: !0, target: m });
            case 37:
              _ = -6;
              break;
            case 39:
              _ = 6;
              break;
            case 38:
              w = -6;
              break;
            case 40:
              w = 6;
              break;
            default:
              return;
          }
          if (_ != 0 || w != 0) {
            if (l.preventDefault(), !m.isDragging()) {
              this._keyboardDragPoint = { x: 0, y: 0 };
              const x = t.getEvent(new MouseEvent("mousedown", { clientX: 0, clientY: 0 }));
              m.events.isEnabled("pointerdown") && m.events.dispatch("pointerdown", { type: "pointerdown", originalEvent: x.event, point: x.point, simulated: !0, target: m });
            }
            const v = this._keyboardDragPoint;
            v.x += _, v.y += w;
            const f = t.getEvent(new MouseEvent("mousemove", { clientX: v.x, clientY: v.y }), !1);
            m.events.isEnabled("globalpointermove") && m.events.dispatch("globalpointermove", { type: "globalpointermove", originalEvent: f.event, point: f.point, simulated: !0, target: m });
          }
        }
      })), this._disposers.push(C(o, "keyup", (l) => {
        if (this._focusedSprite) {
          const m = this._focusedSprite, _ = l.keyCode;
          switch (_) {
            case 37:
            case 39:
            case 38:
            case 40:
              if (m.isDragging()) {
                const w = this._keyboardDragPoint, v = t.getEvent(new MouseEvent("mouseup", { clientX: w.x, clientY: w.y }));
                return m.events.isEnabled("globalpointerup") && m.events.dispatch("globalpointerup", { type: "globalpointerup", originalEvent: v.event, point: v.point, simulated: !0, target: m }), void (this._keyboardDragPoint = void 0);
              }
              if (m.get("focusableGroup")) {
                const w = m.get("focusableGroup"), v = this._tabindexes.filter((A) => A.get("focusableGroup") == w && A.getPrivate("focusable") !== !1);
                let f = v.indexOf(m);
                const x = v.length - 1;
                f += _ == 39 || _ == 40 ? 1 : -1, f < 0 ? f = x : f > x && (f = 0), mt(v[f].getPrivate("focusElement").dom);
              }
          }
        }
      })));
    }
    this._startTicker(), this.setThemes([]), this._addTooltip(), this._hasLicense() || this._showBranding();
  }
  _initResizeSensor() {
    this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(), this._resizeSensorDisposer = new Rt(this.dom, () => {
      this.autoResize && this.resize();
    }), this._disposers.push(this._resizeSensorDisposer);
  }
  resize() {
    const e = this._getRealSize(), t = this._getCalculatedSize(e), i = Math.floor(t.width), r = Math.floor(t.height);
    if (i > 0 && r > 0) {
      const a = Math.floor(e.width), s = Math.floor(e.height), n = this._htmlElementContainer;
      if (n.style.width = i + "px", n.style.height = r + "px", this._a11yD !== !0) {
        const c = this._focusElementContainer;
        c.style.width = i + "px", c.style.height = r + "px";
      }
      this._renderer.resize(a, s, i, r);
      const h = this._rootContainer;
      h.setPrivate("width", i), h.setPrivate("height", r), this._render(), this._handleLogo();
    }
  }
  _render() {
    this._renderer.render(this._rootContainer._display), this._focusElementDirty && (this._updateCurrentFocus(), this._focusElementDirty = !1);
  }
  _runTickers(e) {
    y(this._tickers, (t) => {
      t(e);
    });
  }
  _runAnimations(e) {
    let t = 0;
    return _e(this._animations, (i) => {
      const r = i._runAnimation(e);
      return r !== Re.Stopped && (r !== Re.Playing || (++t, !0));
    }), t === 0;
  }
  _runDirties() {
    let e = {};
    for (; this._isDirtyParents; ) this._isDirtyParents = !1, re(this._dirtyParents).forEach((s) => {
      const n = this._dirtyParents[s];
      delete this._dirtyParents[s], n.isDisposed() || (e[n.uid] = n, n._prepareChildren());
    });
    re(e).forEach((s) => {
      e[s]._updateChildren();
    });
    const t = [];
    re(this._dirty).forEach((s) => {
      const n = this._dirty[s];
      n.isDisposed() ? delete this._dirty[n.uid] : (t.push(n), n._beforeChanged());
    }), t.forEach((s) => {
      s._changed(), delete this._dirty[s.uid], s._clearDirty();
    }), this._isDirty = !1;
    const i = {}, r = [];
    re(this._dirtyBounds).forEach((s) => {
      const n = this._dirtyBounds[s];
      delete this._dirtyBounds[s], n.isDisposed() || (i[n.uid] = n.depth(), r.push(n));
    }), this._positionHTMLElements(), r.sort((s, n) => pt(i[n.uid], i[s.uid])), r.forEach((s) => {
      s._updateBounds();
    });
    const a = this._dirtyPositions;
    re(a).forEach((s) => {
      const n = a[s];
      delete a[s], n.isDisposed() || n._updatePosition();
    }), t.forEach((s) => {
      s._afterChanged();
    });
  }
  _renderFrame(e) {
    if (this._updateTick) {
      this.events.isEnabled("framestarted") && this.events.dispatch("framestarted", { type: "framestarted", target: this, timestamp: e }), this._checkComputedStyles(), this._runTickers(e);
      const t = this._runAnimations(e);
      return this._runDirties(), this._render(), this._renderer.resetImageArray(), this._positionHTMLElements(), this.events.isEnabled("frameended") && this.events.dispatch("frameended", { type: "frameended", target: this, timestamp: e }), this._tickers.length === 0 && t && !this._isDirty;
    }
    return !0;
  }
  _runTicker(e, t) {
    this.isDisposed() || (this.animationTime = e, this._renderFrame(e) ? (this._ticker = null, this.animationTime = null) : this._paused || (t ? this._ticker : Ne(this.fps, this._ticker)));
  }
  _runTickerNow(e = 1e4) {
    if (!this.isDisposed()) {
      const t = performance.now() + e;
      for (; ; ) {
        const i = performance.now();
        if (i >= t) {
          this.animationTime = null;
          break;
        }
        if (this.animationTime = i, this._renderFrame(i)) {
          this.animationTime = null;
          break;
        }
      }
    }
  }
  _startTicker() {
    this._ticker === null && (this.animationTime = null, this._ticker = (e) => {
      this._runTicker(e);
    }, Ne(this.fps, this._ticker));
  }
  get updateTick() {
    return this._updateTick;
  }
  set updateTick(e) {
    this._updateTick = e, e && this._startTicker();
  }
  _addDirtyEntity(e) {
    this._dirty[e.uid] === void 0 && (this._isDirty = !0, this._dirty[e.uid] = e, this._startTicker());
  }
  _addDirtyParent(e) {
    this._dirtyParents[e.uid] === void 0 && (this._isDirty = !0, this._isDirtyParents = !0, this._dirtyParents[e.uid] = e, this._startTicker());
  }
  _addDirtyBounds(e) {
    this._dirtyBounds[e.uid] === void 0 && (this._isDirty = !0, this._dirtyBounds[e.uid] = e, this._startTicker());
  }
  _addDirtyPosition(e) {
    this._dirtyPositions[e.uid] === void 0 && (this._isDirty = !0, this._dirtyPositions[e.uid] = e, this._startTicker());
  }
  _addAnimation(e) {
    this._animations.indexOf(e) === -1 && this._animations.push(e), this._startTicker();
  }
  _markDirty() {
    this._isDirty = !0;
  }
  _markDirtyRedraw() {
    this.events.once("frameended", () => {
      this._isDirty = !0, this._startTicker();
    });
  }
  eachFrame(e) {
    return this._tickers.push(e), this._startTicker(), new $(() => {
      Te(this._tickers, e);
    });
  }
  markDirtyGlobal(e) {
    e || (e = this.container), e.walkChildren((t) => {
      t instanceof q && this.markDirtyGlobal(t), t.markDirty(), t.markDirtyBounds();
    });
  }
  width() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).width);
  }
  height() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).height);
  }
  dispose() {
    this._isDisposed || (this._isDisposed = !0, this._rootContainer.dispose(), this._renderer.dispose(), this.horizontalLayout.dispose(), this.verticalLayout.dispose(), this.interfaceColors.dispose(), y(this._disposers, (e) => {
      e.dispose();
    }), this._inner && _t(this._inner), se(te.rootElements, this));
  }
  isDisposed() {
    return this._isDisposed;
  }
  readerAlert(e) {
    this._a11yD !== !0 && (this._readerAlertElement.innerHTML = ze(e));
  }
  setThemes(e) {
    this._rootContainer.set("themes", e);
    const t = this.tooltipContainer;
    t && t._applyThemes();
    const i = this.interfaceColors;
    i && i._applyThemes();
  }
  _addTooltip() {
    if (!this.tooltipContainer) {
      const e = this._tooltipContainerSettings, t = this._rootContainer.children.push(q.new(this, { position: "absolute", isMeasured: !1, width: Z, height: Z, layer: e ? 35 : 30, layerMargin: e || void 0 }));
      this.tooltipContainer = t;
      const i = We.new(this, {});
      this.container.set("tooltip", i), i.hide(0), this._tooltip = i;
    }
  }
  _registerTabindexOrder(e) {
    this._a11yD != 1 && (e.get("focusable") ? je(this._tabindexes, e) : se(this._tabindexes, e), this._invalidateTabindexes());
  }
  _unregisterTabindexOrder(e) {
    this._a11yD != 1 && (se(this._tabindexes, e), this._invalidateTabindexes());
  }
  _invalidateTabindexes() {
    if (this._a11yD == 1) return;
    this._tabindexes.sort((t, i) => {
      const r = t.get("tabindexOrder", 0), a = i.get("tabindexOrder", 0);
      return r == a ? 0 : r > a ? 1 : -1;
    });
    const e = [];
    y(this._tabindexes, (t, i) => {
      t.getPrivate("focusElement") ? this._moveFocusElement(i, t) : this._makeFocusElement(i, t);
      const r = t.get("focusableGroup");
      r && t.getPrivate("focusable") !== !1 && (e.indexOf(r) !== -1 ? t.getPrivate("focusElement").dom.setAttribute("tabindex", "-1") : e.push(r));
    });
  }
  _updateCurrentFocus() {
    this._a11yD != 1 && this._focusedSprite && (this._decorateFocusElement(this._focusedSprite), this._positionFocusElement(this._focusedSprite));
  }
  _decorateFocusElement(e, t) {
    if (this._a11yD == 1 || (t || (t = e.getPrivate("focusElement").dom), !t)) return;
    const i = e.get("role");
    i ? t.setAttribute("role", i) : t.removeAttribute("role");
    const r = e.get("ariaLabel");
    if (r) {
      const o = yt(e, r);
      t.setAttribute("aria-label", o);
    } else t.removeAttribute("aria-label");
    const a = e.get("ariaLive");
    a ? t.setAttribute("aria-live", a) : t.removeAttribute("aria-live");
    const s = e.get("ariaChecked");
    s != null && i && ["checkbox", "option", "radio", "menuitemcheckbox", "menuitemradio", "treeitem"].indexOf(i) !== -1 ? t.setAttribute("aria-checked", s ? "true" : "false") : t.removeAttribute("aria-checked"), e.get("ariaHidden") ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden");
    const n = e.get("ariaOrientation");
    n ? t.setAttribute("aria-orientation", n) : t.removeAttribute("aria-orientation");
    const h = e.get("ariaValueNow");
    h ? t.setAttribute("aria-valuenow", h) : t.removeAttribute("aria-valuenow");
    const c = e.get("ariaValueMin");
    c ? t.setAttribute("aria-valuemin", c) : t.removeAttribute("aria-valuemin");
    const g = e.get("ariaValueMax");
    g ? t.setAttribute("aria-valuemax", g) : t.removeAttribute("aria-valuemax");
    const u = e.get("ariaValueText");
    u ? t.setAttribute("aria-valuetext", u) : t.removeAttribute("aria-valuetext");
    const b = e.get("ariaControls");
    b ? t.setAttribute("aria-controls", b) : t.removeAttribute("aria-controls"), e.get("visible") && e.get("opacity") !== 0 && e.get("role") != "tooltip" && !e.isHidden() && e.getPrivate("focusable") !== !1 ? (t.getAttribute("tabindex") != "-1" && t.setAttribute("tabindex", "" + this.tabindex), t.removeAttribute("aria-hidden")) : (t.removeAttribute("tabindex"), t.setAttribute("aria-hidden", "true"));
  }
  _makeFocusElement(e, t) {
    if (t.getPrivate("focusElement") || this._a11yD == 1) return;
    const i = document.createElement("div");
    t.get("role") != "tooltip" && (i.tabIndex = this.tabindex), i.style.position = "absolute", K(i, !1);
    const r = [];
    t.setPrivate("focusElement", { dom: i, disposers: r }), this._decorateFocusElement(t), r.push(C(i, "focus", (a) => {
      this._handleFocus(a, e);
    })), r.push(C(i, "blur", (a) => {
      this._handleBlur(a, e);
    })), this._moveFocusElement(e, t);
  }
  _removeFocusElement(e) {
    if (this._a11yD == 1) return;
    se(this._tabindexes, e);
    const t = e.getPrivate("focusElement");
    t && (this._focusElementContainer.removeChild(t.dom), y(t.disposers, (i) => {
      i.dispose();
    }));
  }
  _hideFocusElement(e) {
    this._a11yD != 1 && (e.getPrivate("focusElement").dom.style.display = "none");
  }
  _moveFocusElement(e, t) {
    if (this._a11yD == 1) return;
    const i = this._focusElementContainer, r = t.getPrivate("focusElement").dom;
    if (r === this._focusElementContainer.children[e]) return;
    const a = this._focusElementContainer.children[e + 1];
    a ? i.insertBefore(r, a) : i.append(r);
  }
  _positionFocusElement(e) {
    if (this._a11yD == 1 || e == null) return;
    const t = e.globalBounds();
    let i = t.right == t.left ? e.width() : t.right - t.left, r = t.top == t.bottom ? e.height() : t.bottom - t.top;
    const a = this._settings.focusPadding !== void 0 ? this._settings.focusPadding : 2;
    let s = t.left - a, n = t.top - a;
    i < 0 && (s += i, i = Math.abs(i)), r < 0 && (n += r, r = Math.abs(r));
    const h = e.getPrivate("focusElement").dom;
    h.style.top = n + "px", h.style.left = s + "px", h.style.width = i + 2 * a + "px", h.style.height = r + 2 * a + "px";
  }
  _handleFocus(e, t) {
    if (this._a11yD == 1) return;
    const i = this._tabindexes[t];
    i.isVisibleDeep() ? (this._positionFocusElement(i), this._focusedSprite = i, i.events.isEnabled("focus") && i.events.dispatch("focus", { type: "focus", originalEvent: e, target: i })) : this._focusNext(e.target, this._isShift ? -1 : 1);
  }
  _focusNext(e, t) {
    if (this._a11yD == 1) return;
    const i = Array.from(document.querySelectorAll(["a[href]", "area[href]", "button:not([disabled])", "details", "input:not([disabled])", "iframe:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contentEditable=""]', '[contentEditable="true"]', '[contentEditable="TRUE"]', '[tabindex]:not([tabindex^="-"])'].join(",")));
    let r = i.indexOf(e) + t;
    r < 0 ? r = i.length - 1 : r >= i.length && (r = 0), i[r].focus();
  }
  _handleBlur(e, t) {
    if (this._a11yD == 1) return;
    const i = this._focusedSprite;
    i && !i.isDisposed() && i.events.isEnabled("blur") && i.events.dispatch("blur", { type: "blur", originalEvent: e, target: i }), this._focusedSprite = void 0;
  }
  updateTooltip(e) {
    if (this._a11yD == 1) return;
    const t = ze(e._getText());
    let i = e.getPrivate("tooltipElement");
    e.get("role") == "tooltip" && t != "" ? (i || (i = this._makeTooltipElement(e)), i.innerHTML != t && (i.innerHTML = t)) : i && (i.remove(), e.removePrivate("tooltipElement"));
  }
  _makeTooltipElement(e) {
    const t = this._tooltipElementContainer, i = document.createElement("div");
    return i.style.position = "absolute", i.style.width = "1px", i.style.height = "1px", i.style.overflow = "hidden", i.style.clip = "rect(1px, 1px, 1px, 1px)", K(i, !1), this._decorateFocusElement(e, i), t.append(i), e.setPrivate("tooltipElement", i), i;
  }
  _removeTooltipElement(e) {
    if (this._a11yD == 1) return;
    const t = e.getPrivate("tooltipElement");
    if (t) {
      const i = t.parentElement;
      i && i.removeChild(t);
    }
  }
  _invalidateAccessibility(e) {
    if (this._a11yD == 1) return;
    this._focusElementDirty = !0;
    const t = e.getPrivate("focusElement");
    e.get("focusable") ? t && (this._decorateFocusElement(e), this._positionFocusElement(e)) : t && this._removeFocusElement(e);
  }
  focused(e) {
    return this._focusedSprite === e;
  }
  documentPointToRoot(e) {
    const t = this._getRealSize(), i = this._getCalculatedSize(t), r = i.width / t.width, a = i.height / t.height;
    return { x: (e.x - t.left) * r, y: (e.y - t.top) * a };
  }
  rootPointToDocument(e) {
    const t = this._getRealSize(), i = this._getCalculatedSize(t), r = i.width / t.width, a = i.height / t.height;
    return { x: e.x / r + t.left, y: e.y / a + t.top };
  }
  addDisposer(e) {
    return this._disposers.push(e), e;
  }
  _updateComputedStyles() {
    const e = window.getComputedStyle(this.dom);
    let t = "";
    he(e, (r, a) => {
      pe(r) && r.match(/^font/) && (t += a);
    });
    const i = t != this._fontHash;
    return i && (this._fontHash = t), i;
  }
  _checkComputedStyles() {
    this._updateComputedStyles() && this._invalidateLabelBounds(this.container);
  }
  _invalidateLabelBounds(e) {
    e instanceof q ? e.children.each((t) => {
      this._invalidateLabelBounds(t);
    }) : e instanceof vt && e.markDirtyBounds();
  }
  _hasLicense() {
    for (let e = 0; e < te.licenses.length; e++) if (te.licenses[e].match(/^AM5C.{5,}/i)) return !0;
    return !1;
  }
  _licenseApplied() {
    this._logo && this._logo.set("forceHidden", !0);
  }
  get debugGhostView() {
    return this._renderer.debugGhostView;
  }
  set debugGhostView(e) {
    this._renderer.debugGhostView = e;
  }
  set tapToActivate(e) {
    this._renderer.tapToActivate = e;
  }
  get tapToActivate() {
    return this._renderer.tapToActivate;
  }
  set tapToActivateTimeout(e) {
    this._renderer.tapToActivateTimeout = e;
  }
  get tapToActivateTimeout() {
    return this._renderer.tapToActivateTimeout;
  }
  _makeHTMLElement(e) {
    const t = this._htmlElementContainer, i = document.createElement("div");
    return e.setPrivate("htmlElement", i), i.style.position = "absolute", i.style.overflow = "auto", i.style.boxSizing = "border-box", K(i, e.get("interactive", !1)), e.events.isEnabled("click") && (K(i, !0), this._disposers.push(C(i, "click", (r) => {
      const a = this._renderer.getEvent(r);
      e.events.dispatch("click", { type: "click", originalEvent: a.event, point: a.point, simulated: !1, target: e });
    }))), this._positionHTMLElement(e), t.append(i), je(this._htmlEnabledContainers, e), i;
  }
  _positionHTMLElements() {
    y(this._htmlEnabledContainers, (e) => {
      this._positionHTMLElement(e);
    });
  }
  _positionHTMLElement(e) {
    const t = e.getPrivate("htmlElement");
    if (t) {
      y(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"], (g) => {
        const u = e.get(g);
        t.style[g] = u ? u + "px" : "";
      });
      const i = e.compositeOpacity();
      setTimeout(() => {
        t.style.opacity = i + "";
      }, 10);
      const r = e.isVisibleDeep();
      r && (t.style.display = "block");
      const a = e.globalBounds();
      t.style.top = a.top + "px", t.style.left = a.left + "px";
      const s = e.get("width"), n = e.get("height");
      let h = 0, c = 0;
      if (s && (h = e.width()), n && (c = e.height()), s && n) e.removePrivate("minWidth"), e.removePrivate("minHeight");
      else {
        t.style.position = "fixed", t.style.width = "", t.style.height = "";
        const g = t.getBoundingClientRect();
        t.style.position = "absolute", h = g.width, c = g.height, e._adjustedLocalBounds = { left: 0, right: 0, top: 0, bottom: 0 }, e.setPrivate("minWidth", h), e.setPrivate("minHeight", c);
      }
      h > 0 && (t.style.minWidth = h + "px"), c > 0 && (t.style.minHeight = c + "px"), r && i != 0 || (t.style.display = "none");
    }
  }
  _setHTMLContent(e, t) {
    let i = e.getPrivate("htmlElement");
    i || (i = this._makeHTMLElement(e)), i.innerHTML != t && (i.innerHTML = t);
  }
  _removeHTMLContent(e) {
    let t = e.getPrivate("htmlElement");
    t && (this._htmlElementContainer.removeChild(t), e.removePrivate("htmlElement")), se(this._htmlEnabledContainers, e);
  }
}
lt("AM5C241025748");
const qe = "en-us", De = /* @__PURE__ */ new Map([["ar", () => import("./ar-69w_pNvD.js")], ["bg-bg", () => import("./bg_BG-HxX0GdS4.js")], ["bs-ba", () => import("./bs_BA-DrqKjqQh.js")], ["ca-es", () => import("./ca_ES-B8P53VJs.js")], ["cs-cz", () => import("./cs_CZ-Bqde4kKV.js")], ["da-dk", () => import("./da_DK-BHlKtWuS.js")], ["de-de", () => import("./de_DE-BjuOMedt.js")], ["de-ch", () => import("./de_CH-DAPp1Ncl.js")], ["el-gr", () => import("./el_GR-C1WdWwt2.js")], ["en-us", () => import("./en_US-9ASyeqlk.js")], ["en-ca", () => import("./en_CA-9ASyeqlk.js")], ["es-es", () => import("./es_ES-D1FgMsXM.js")], ["et-ee", () => import("./et_EE-Dz_TpNNF.js")], ["fi-fi", () => import("./fi_FI-Cte3XVjc.js")], ["fr-fr", () => import("./fr_FR-D4Jnvm3b.js")], ["he-il", () => import("./he_IL-DcsZ56bm.js")], ["hr-hr", () => import("./hr_HR-C0BJtvO7.js")], ["hu-hu", () => import("./hu_HU-BGreOcqI.js")], ["id-id", () => import("./id_ID-DCZBbKD3.js")], ["it-it", () => import("./it_IT-BeKgphnk.js")], ["ja-jp", () => import("./ja_JP-gzKc2xa8.js")], ["ko-kr", () => import("./ko_KR-sv9FjurR.js")], ["lt-lt", () => import("./lt_LT-yZNULmv_.js")], ["lv-lv", () => import("./lv_LV-Cu8aigXF.js")], ["nb-no", () => import("./nb_NO-CqN3wUJH.js")], ["nl-nl", () => import("./nl_NL-DAiuag9r.js")], ["pl-pl", () => import("./pl_PL-BDbrX9O9.js")], ["pt-br", () => import("./pt_BR-D3fc0auN.js")], ["pt-pt", () => import("./pt_PT-ne3A0-MZ.js")], ["ro-ro", () => import("./ro_RO-BfLaePMk.js")], ["ru-ru", () => import("./ru_RU-jSaqVZwA.js")], ["sk-sk", () => import("./sk_SK-Dp9r7-Al.js")], ["sl-sl", () => import("./sl_SL-CArbvniK.js")], ["sr-rs", () => import("./sr_RS-KKcjmG1u.js")], ["sv-se", () => import("./sv_SE-CT8Rd8gJ.js")], ["th-th", () => import("./th_TH-DHvdpgHD.js")], ["tr-tr", () => import("./tr_TR-CooWKX5o.js")], ["uk-ua", () => import("./uk_UA-D4LhzxxY.js")], ["vi-vn", () => import("./vi_VN-Byu5lfYa.js")], ["zh-cn", () => import("./zh_Hans-DQ0VpKp5.js")], ["zh-hk", () => import("./zh_Hant-Di2gjomG.js")], ["zh-tw", () => import("./zh_Hant-Di2gjomG.js")]]);
function ji(d) {
  const e = d.split("-")[0].toLowerCase();
  let t = null;
  for (const i of De.keys()) if (i.startsWith(e)) {
    t = i;
    break;
  }
  return t;
}
function Ei(d) {
  return d ? De.has(d.toLowerCase()) ? d.toLowerCase() : ji(d) || qe : qe;
}
async function Ai(d, e = ot()) {
  const t = Be.new(d);
  return t.locale = (await De.get(Ei(e))()).default, t;
}
export {
  Ai as createRoot
};
//# sourceMappingURL=chartUtilsAm5-Ds_wr1Zl.js.map
