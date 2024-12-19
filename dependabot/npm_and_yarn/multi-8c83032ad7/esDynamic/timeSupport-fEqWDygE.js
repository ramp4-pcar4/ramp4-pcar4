import { fi as o, fu as s } from "./main-C4pF0E7B.js";
function m(n) {
  if (!n) return n;
  const { start: e, end: t } = n;
  return new o({ start: e != null ? s(e, -e.getTimezoneOffset(), "minutes") : e, end: t != null ? s(t, -t.getTimezoneOffset(), "minutes") : t });
}
function a(n) {
  if (!n) return n;
  const { start: e, end: t } = n;
  return new o({ start: e != null ? s(e, e.getTimezoneOffset(), "minutes") : e, end: t != null ? s(t, t.getTimezoneOffset(), "minutes") : t });
}
function T(n, e, t) {
  if (n?.timeInfo == null) return null;
  const { datesInUnknownTimezone: r = !1, timeOffset: f, useViewTime: l } = n;
  let u = n.timeExtent;
  r && (u = a(u));
  let i = l ? e && u ? e.intersection(u) : e || u : u;
  return !i || i.isEmpty || i.isAllTime ? i : (f && (i = i.offset(-f.value, f.unit)), r && (i = m(i)), i.equals(t) ? t : i);
}
export {
  T as i
};
//# sourceMappingURL=timeSupport-fEqWDygE.js.map
