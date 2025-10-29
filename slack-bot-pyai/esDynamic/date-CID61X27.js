function p(t) {
  return d(t) != null || c(t) != null;
}
function C(t) {
  return g.test(t);
}
function D(t) {
  return d(t) ?? c(t);
}
function c(t) {
  const n = new Date(t);
  return T(n, t) ? Number.isNaN(n.getTime()) ? null : n.getTime() - 6e4 * n.getTimezoneOffset() : null;
}
function d(t) {
  const n = g.exec(t);
  if (!n?.groups) return null;
  const e = n.groups, u = +e.year, r = +e.month - 1, s = +e.day, i = +(e.hours ?? "0"), f = +(e.minutes ?? "0"), l = +(e.seconds ?? "0");
  if (i > 23 || f > 59 || l > 59) return null;
  const m = e.ms ?? "0", a = m ? +m.padEnd(3, "0").substring(0, 3) : 0;
  let o;
  if (e.isUTC || !e.offsetSign) o = Date.UTC(u, r, s, i, f, l, a);
  else {
    const N = +e.offsetHours, b = +e.offsetMinutes;
    o = 6e4 * (e.offsetSign === "+" ? -1 : 1) * (60 * N + b) + Date.UTC(u, r, s, i, f, l, a);
  }
  return Number.isNaN(o) ? null : o;
}
const g = /^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;
function T(t, n) {
  if (Number.isNaN(t.getTime())) return !1;
  let e = !0;
  if (h && /\d+\W*$/.test(n)) {
    const u = n.match(/[a-zA-Z]{2,}/);
    if (u) {
      let r = !1, s = 0;
      for (; !r && s <= u.length; ) r = !y.test(u[s]), s++;
      e = !r;
    }
  }
  return e;
}
const y = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i, h = !Number.isNaN((/* @__PURE__ */ new Date("technology 10")).getTime());
export {
  p as e,
  D as n,
  C as t
};
//# sourceMappingURL=date-CID61X27.js.map
