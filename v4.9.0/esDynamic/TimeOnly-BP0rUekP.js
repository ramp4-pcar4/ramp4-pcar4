import { ic as i, id as l, ie as M, ig as g, ih as Z, y as q, aP as U, aU as b } from "./main-DIdq27YS.js";
var y;
(function(r) {
  r.TimeZoneNotRecognized = "TimeZoneNotRecognized";
})(y || (y = {}));
const N = { [y.TimeZoneNotRecognized]: "Timezone identifier has not been recognized." };
class w extends Error {
  constructor(e, t) {
    super(q(N[e], t)), this.declaredRootClass = "esri.arcade.arcadedate.dateerror", Error.captureStackTrace && Error.captureStackTrace(this, w);
  }
}
function h(r, e, t) {
  return r < e ? r - e : r > t ? r - t : 0;
}
function d(r, e, t) {
  return r < e ? e : r > t ? t : r;
}
class n {
  constructor(e) {
    this._date = e, this.declaredRootClass = "esri.arcade.arcadedate";
  }
  static fromParts(e = 0, t = 1, s = 1, a = 0, o = 0, T = 0, S = 0, L) {
    if (isNaN(e) || isNaN(t) || isNaN(s) || isNaN(a) || isNaN(o) || isNaN(T) || isNaN(S)) return null;
    const p = i.local(e, t).daysInMonth;
    let D = i.fromObject({ day: d(s, 1, p), year: e, month: d(t, 1, 12), hour: d(a, 0, 23), minute: d(o, 0, 59), second: d(T, 0, 59), millisecond: d(S, 0, 999) }, { zone: m(L) });
    return D = D.plus({ months: h(t, 1, 12), days: h(s, 1, p), hours: h(a, 0, 23), minutes: h(o, 0, 59), seconds: h(T, 0, 59), milliseconds: h(S, 0, 999) }), new n(D);
  }
  static get systemTimeZoneCanonicalName() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? "system";
  }
  static arcadeDateAndZoneToArcadeDate(e, t) {
    const s = m(t);
    return e.isUnknownTimeZone || s === l.instance ? n.fromParts(e.year, e.monthJS + 1, e.day, e.hour, e.minute, e.second, e.millisecond, s) : new n(e._date.setZone(s));
  }
  static dateJSToArcadeDate(e) {
    return new n(i.fromJSDate(e, { zone: "system" }));
  }
  static dateJSAndZoneToArcadeDate(e, t = "system") {
    const s = m(t);
    return new n(i.fromJSDate(e, { zone: s }));
  }
  static unknownEpochToArcadeDate(e) {
    return new n(i.fromMillis(e, { zone: l.instance }));
  }
  static unknownDateJSToArcadeDate(e) {
    return new n(i.fromMillis(e.getTime(), { zone: l.instance }));
  }
  static epochToArcadeDate(e, t = "system") {
    const s = m(t);
    return new n(i.fromMillis(e, { zone: s }));
  }
  static dateTimeToArcadeDate(e) {
    return new n(e);
  }
  clone() {
    return new n(this._date);
  }
  changeTimeZone(e) {
    const t = m(e);
    return n.dateTimeToArcadeDate(this._date.setZone(t));
  }
  static dateTimeAndZoneToArcadeDate(e, t) {
    const s = m(t);
    return e.zone === l.instance || s === l.instance ? n.fromParts(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond, s) : new n(e.setZone(s));
  }
  static nowToArcadeDate(e) {
    const t = m(e);
    return new n(i.fromJSDate(/* @__PURE__ */ new Date(), { zone: t }));
  }
  static nowUTCToArcadeDate() {
    return new n(i.utc());
  }
  get isSystem() {
    return this.timeZone === "system" || this.timeZone === n.systemTimeZoneCanonicalName;
  }
  equals(e) {
    return this.isSystem && e.isSystem ? this.toNumber() === e.toNumber() : this.isUnknownTimeZone === e.isUnknownTimeZone && this._date.equals(e._date);
  }
  get isUnknownTimeZone() {
    return this._date.zone === l.instance;
  }
  get isValid() {
    return this._date.isValid;
  }
  get hour() {
    return this._date.hour;
  }
  get second() {
    return this._date.second;
  }
  get day() {
    return this._date.day;
  }
  get dayOfWeekISO() {
    return this._date.weekday;
  }
  get dayOfWeekJS() {
    let e = this._date.weekday;
    return e > 6 && (e = 0), e;
  }
  get millisecond() {
    return this._date.millisecond;
  }
  get monthISO() {
    return this._date.month;
  }
  get weekISO() {
    return this._date.weekNumber;
  }
  get yearISO() {
    return this._date.weekYear;
  }
  get monthJS() {
    return this._date.month - 1;
  }
  get year() {
    return this._date.year;
  }
  get minute() {
    return this._date.minute;
  }
  get zone() {
    return this._date.zone;
  }
  get timeZoneOffset() {
    return this.isUnknownTimeZone ? 0 : this._date.offset;
  }
  get timeZone() {
    if (this.isUnknownTimeZone) return "unknown";
    if (this._date.zone.type === "system") return "system";
    const e = this.zone;
    return e.type === "fixed" ? e.fixed === 0 ? "UTC" : e.formatOffset(0, "short") : e.name;
  }
  stringify() {
    return JSON.stringify(this.toJSDate());
  }
  plus(e) {
    return new n(this._date.plus(e));
  }
  diff(e, t = "milliseconds") {
    return this._date.diff(e._date, t)[t];
  }
  toISODate() {
    return this._date.toISODate();
  }
  toISOString(e) {
    return e ? this._date.toISO({ suppressMilliseconds: !0, includeOffset: !this.isUnknownTimeZone }) : this._date.toISO({ includeOffset: !this.isUnknownTimeZone });
  }
  toISOTime(e, t) {
    return this._date.toISOTime({ suppressMilliseconds: e, includeOffset: t && !this.isUnknownTimeZone });
  }
  toFormat(e, t) {
    return this.isUnknownTimeZone && (e = e.replaceAll("Z", "")), this._date.toFormat(e, t);
  }
  toJSDate() {
    return this._date.toJSDate();
  }
  toSQLValue() {
    return this._date.toFormat("yyyy-LL-dd HH:mm:ss");
  }
  toSQLWithKeyword() {
    return `timestamp '${this.toSQLValue()}'`;
  }
  toDateTime() {
    return this._date;
  }
  toNumber() {
    return this._date.toMillis();
  }
  getTime() {
    return this._date.toMillis();
  }
  toUTC() {
    return new n(this._date.toUTC());
  }
  toLocal() {
    return new n(this._date.toLocal());
  }
  toString() {
    return this.toISOString(!0);
  }
  static fromReaderAsTimeStampOffset(e) {
    if (!e) return null;
    const t = i.fromISO(e, { setZone: !0 });
    return new n(t);
  }
}
function m(r, e = !0) {
  if (r instanceof M) return r;
  if (r.toLowerCase() === "system") return "system";
  if (r.toLowerCase() === "utc") return "UTC";
  if (r.toLowerCase() === "unknown") return l.instance;
  if (/^[\+\-]?[0-9]{1,2}([:][0-9]{2})?$/.test(r)) {
    const s = g.parseSpecifier("UTC" + (r.startsWith("+") || r.startsWith("-") ? "" : "+") + r);
    if (s) return s;
  }
  const t = Z.create(r);
  if (!t.isValid) {
    if (e) throw new w(y.TimeZoneNotRecognized);
    return null;
  }
  return t;
}
function k(r) {
  r = r.replaceAll(/LTS|LT|LL?L?L?|l{1,4}/g, "[$&]");
  let e = "";
  const t = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  for (const s of r.match(t) || []) switch (s) {
    case "D":
      e += "d";
      break;
    case "DD":
      e += "dd";
      break;
    case "DDD":
      e += "o";
      break;
    case "d":
      e += "c";
      break;
    case "ddd":
      e += "ccc";
      break;
    case "dddd":
      e += "cccc";
      break;
    case "M":
      e += "L";
      break;
    case "MM":
      e += "LL";
      break;
    case "MMM":
      e += "LLL";
      break;
    case "MMMM":
      e += "LLLL";
      break;
    case "YY":
      e += "yy";
      break;
    case "Y":
    case "YYYY":
      e += "yyyy";
      break;
    case "Q":
      e += "q";
      break;
    case "X":
    case "x":
      e += s;
      break;
    default:
      s.length >= 2 && s.slice(0, 1) === "[" && s.slice(-1) === "]" ? e += `'${s.slice(1, -1)}'` : e += `'${s}'`;
  }
  return e;
}
let A = class c {
  constructor(e, t, s) {
    this._year = e, this._month = t, this._day = s, this.declaredRootClass = "esri.core.sql.dateonly";
  }
  get month() {
    return this._month;
  }
  get monthJS() {
    return this._month - 1;
  }
  get year() {
    return this._year;
  }
  get day() {
    return this._day;
  }
  get isValid() {
    return this.toDateTime("unknown").isValid;
  }
  equals(e) {
    return e instanceof c && e.day === this.day && e.month === this.month && e.year === this.year;
  }
  clone() {
    return new c(this._year, this._month, this._day);
  }
  toDateTime(e) {
    return i.fromObject({ day: this.day, month: this.month, year: this.year }, { zone: m(e) });
  }
  toDateTimeLuxon(e) {
    return i.fromObject({ day: this.day, month: this.month, year: this.year }, { zone: m(e) });
  }
  toString() {
    return `${this.year.toString().padStart(4, "0")}-${this.month.toString().padStart(2, "0")}-${this.day.toString().padStart(2, "0")}`;
  }
  toFormat(e = null, t = !0) {
    if (e === null || e === "") return this.toString();
    if (t && (e = k(e)), !e) return "";
    const s = this.toDateTime("unknown");
    return n.dateTimeToArcadeDate(s).toFormat(e, { locale: U(), numberingSystem: "latn" });
  }
  toArcadeDate() {
    const e = this.toDateTime("unknown");
    return n.dateTimeToArcadeDate(e);
  }
  toNumber() {
    return this.toDateTime("unknown").toMillis();
  }
  toJSDate() {
    return this.toDateTime("unknown").toJSDate();
  }
  toStorageFormat() {
    return this.toFormat("yyyy-LL-dd", !1);
  }
  toSQLValue() {
    return this.toFormat("yyyy-LL-dd", !1);
  }
  toSQLWithKeyword() {
    return "date '" + this.toFormat("yyyy-LL-dd", !1) + "'";
  }
  plus(e, t) {
    return c.fromDateTime(this.toUTCDateTime().plus({ [e]: t }));
  }
  toUTCDateTime() {
    return i.utc(this.year, this.month, this.day, 0, 0, 0, 0);
  }
  difference(e, t) {
    switch (t.toLowerCase()) {
      case "days":
      case "day":
      case "d":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "days").days;
      case "months":
      case "month":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "months").months;
      case "minutes":
      case "minute":
      case "m":
        return t === "M" ? this.toUTCDateTime().diff(e.toUTCDateTime(), "months").months : this.toUTCDateTime().diff(e.toUTCDateTime(), "minutes").minutes;
      case "seconds":
      case "second":
      case "s":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "seconds").seconds;
      case "milliseconds":
      case "millisecond":
      case "ms":
      default:
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "milliseconds").milliseconds;
      case "hours":
      case "hour":
      case "h":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "hours").hours;
      case "years":
      case "year":
      case "y":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "years").years;
    }
  }
  static fromMilliseconds(e) {
    const t = i.fromMillis(e, { zone: g.utcInstance });
    return t.isValid ? c.fromParts(t.year, t.month, t.day) : null;
  }
  static fromSeconds(e) {
    const t = i.fromSeconds(e, { zone: g.utcInstance });
    return t.isValid ? c.fromParts(t.year, t.month, t.day) : null;
  }
  static fromReader(e) {
    if (!e) return null;
    const t = e.split("-");
    return t.length !== 3 ? null : new c(parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10));
  }
  static fromParts(e, t, s) {
    const a = new c(e, t, s);
    return a.isValid === !1 ? null : a;
  }
  static fromDateJS(e) {
    return c.fromParts(e.getFullYear(), e.getMonth() + 1, e.getDay());
  }
  static fromDateTime(e) {
    return c.fromParts(e.year, e.month, e.day);
  }
  static fromSqlTimeStampOffset(e) {
    return this.fromDateTime(e.toDateTime());
  }
  static fromString(e, t = null) {
    if (e === "" || e === null) return null;
    const s = [];
    if (t) (t = k(t)) && s.push(t);
    else if (t === null || t === "") {
      const a = i.fromISO(e, { setZone: !0 });
      return a.isValid ? c.fromParts(a.year, a.month, a.day) : null;
    }
    for (const a of s) {
      const o = i.fromFormat(e, t ?? a);
      if (o.isValid) return new c(o.year, o.month, o.day);
    }
    return null;
  }
  static fromNow(e = "system") {
    const t = i.fromJSDate(/* @__PURE__ */ new Date()).setZone(m(e));
    return new c(t.year, t.month, t.day);
  }
};
function Y(r) {
  if (r == null) return null;
  if (typeof r == "number") return r;
  let e = r.toLowerCase();
  switch (e = e.replaceAll(/\s/g, ""), e = e.replaceAll("-", ""), e) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 109404;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 109439;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 109414;
    case "acres":
    case "acre":
    case "ac":
      return 109402;
    case "hectares":
    case "hectare":
    case "ha":
      return 109401;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 109442;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 109405;
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 109409;
  }
  return null;
}
function $(r) {
  if (r == null) return null;
  switch (r.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return r.extent;
    case "point":
      return new b({ xmin: r.x, ymin: r.y, xmax: r.x, ymax: r.y, spatialReference: r.spatialReference });
    case "extent":
      return r;
  }
  return null;
}
function z(r) {
  if (r == null) return null;
  if (typeof r == "number") return r;
  let e = r.toLowerCase();
  switch (e = e.replaceAll(/\s/g, ""), e = e.replaceAll("-", ""), e) {
    case "meters":
    case "meter":
    case "m":
    case "squaremeters":
    case "squaremeter":
      return 9001;
    case "miles":
    case "mile":
    case "squaremile":
    case "squaremiles":
      return 9093;
    case "kilometers":
    case "kilometer":
    case "squarekilometers":
    case "squarekilometer":
    case "km":
      return 9036;
    case "yard":
    case "yd":
    case "yards":
    case "squareyards":
    case "squareyard":
      return 9096;
    case "feet":
    case "ft":
    case "foot":
    case "squarefeet":
    case "squarefoot":
      return 9002;
    case "nmi":
    case "nauticalmile":
    case "nauticalmiles":
    case "squarenauticalmile":
    case "squarenauticalmiles":
      return 9030;
  }
  return null;
}
function I(r) {
  if (r == null) return null;
  const e = r.clone();
  return r.cache._geVersion !== void 0 && (e.cache._geVersion = r.cache._geVersion), e;
}
function f(r) {
  return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
}
function C(r) {
  if (!r) return "";
  const e = /(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;
  let t = "";
  for (const s of r.match(e) || []) switch (s) {
    case "SSS":
    case "m":
    case "mm":
    case "h":
    case "hh":
    case "H":
    case "HH":
    case "s":
    case "ss":
      t += s;
      break;
    case "A":
    case "a":
      t += "a";
      break;
    default:
      t += `'${s}'`;
  }
  return t;
}
class u {
  constructor(e, t, s, a) {
    this._hour = e, this._minute = t, this._second = s, this._millisecond = a, this.declaredRootClass = "esri.core.sql.timeonly";
  }
  get hour() {
    return this._hour;
  }
  get minute() {
    return this._minute;
  }
  get second() {
    return this._second;
  }
  get millisecond() {
    return this._millisecond;
  }
  equals(e) {
    return e instanceof u && e.hour === this.hour && e.minute === this.minute && e.second === this.second && e.millisecond === this.millisecond;
  }
  clone() {
    return new u(this.hour, this.minute, this.second, this.millisecond);
  }
  isValid() {
    return f(this.hour) && f(this.minute) && f(this.second) && f(this.millisecond) && this.hour >= 0 && this.hour < 24 && this.minute >= 0 && this.minute < 60 && this.second >= 0 && this.second < 60 && this.millisecond >= 0 && this.millisecond < 1e3;
  }
  toString() {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}` + (this.millisecond > 0 ? "." + this.millisecond.toString().padStart(3, "0") : "");
  }
  toSQLValue() {
    return this.toString();
  }
  toSQLWithKeyword() {
    return `time '${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}${this.millisecond > 0 ? "." + this.millisecond.toString().padStart(3, "0") : ""}'`;
  }
  toStorageString() {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}`;
  }
  toFormat(e = null) {
    return e === null || e === "" ? this.toString() : (e = C(e)) ? i.local(1970, 1, 1, this._hour, this._minute, this._second, this._millisecond).toFormat(e, { locale: U(), numberingSystem: "latn" }) : "";
  }
  toNumber() {
    return this.millisecond + 1e3 * this.second + 1e3 * this.minute * 60 + 60 * this.hour * 60 * 1e3;
  }
  static fromParts(e, t, s, a) {
    const o = new u(e, t, s, a);
    return o.isValid() ? o : null;
  }
  static fromReader(e) {
    if (!e) return null;
    const t = e.split(":");
    return t.length !== 3 ? null : new u(parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10), 0);
  }
  static fromMilliseconds(e) {
    if (e > 864e5 || e < 0) return null;
    const t = Math.floor(e / 1e3 % 60), s = Math.floor(e / 6e4 % 60), a = Math.floor(e / 36e5 % 24), o = Math.floor(e % 1e3);
    return new u(a, s, t, o);
  }
  static fromDateJS(e) {
    return new u(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
  }
  static fromDateTime(e) {
    return new u(e.hour, e.minute, e.second, e.millisecond);
  }
  static fromSqlTimeStampOffset(e) {
    return this.fromDateTime(e.toDateTime());
  }
  static fromString(e, t = null) {
    if (e === "" || e === null) return null;
    const s = [];
    t ? (t = C(t)) && s.push(t) : t !== null && t !== "" || (s.push("HH:mm:ss"), s.push("HH:mm:ss.SSS"), s.push("hh:mm:ss a"), s.push("hh:mm:ss.SSS a"), s.push("HH:mm"), s.push("hh:mm a"), s.push("H:mm"), s.push("h:mm a"), s.push("H:mm:ss"), s.push("h:mm:ss a"), s.push("H:mm:ss.SSS"), s.push("h:mm:ss.SSS a"));
    for (const a of s) {
      const o = i.fromFormat(e, a);
      if (o.isValid) return new u(o.hour, o.minute, o.second, o.millisecond);
    }
    return null;
  }
  plus(e, t) {
    switch (e) {
      case "days":
      case "years":
      case "months":
        return this.clone();
      case "hours":
      case "minutes":
      case "seconds":
      case "milliseconds":
        return u.fromDateTime(this.toUTCDateTime().plus({ [e]: t }));
    }
    return null;
  }
  toUTCDateTime() {
    return i.utc(1970, 1, 1, this.hour, this.minute, this.second, this.millisecond);
  }
  difference(e, t) {
    switch (t.toLowerCase()) {
      case "days":
      case "day":
      case "d":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "days").days;
      case "months":
      case "month":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "months").months;
      case "minutes":
      case "minute":
      case "m":
        return t === "M" ? this.toUTCDateTime().diff(e.toUTCDateTime(), "months").months : this.toUTCDateTime().diff(e.toUTCDateTime(), "minutes").minutes;
      case "seconds":
      case "second":
      case "s":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "seconds").seconds;
      case "milliseconds":
      case "millisecond":
      case "ms":
      default:
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "milliseconds").milliseconds;
      case "hours":
      case "hour":
      case "h":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "hours").hours;
      case "years":
      case "year":
      case "y":
        return this.toUTCDateTime().diff(e.toUTCDateTime(), "years").years;
    }
  }
}
export {
  A as a,
  z as b,
  I as c,
  m as h,
  n as m,
  u as n,
  Y as r,
  $ as s
};
//# sourceMappingURL=TimeOnly-BP0rUekP.js.map
