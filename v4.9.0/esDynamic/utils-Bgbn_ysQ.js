import { aV as d, aW as p, aX as u, aY as y, aZ as i, B as r, a_ as g, a$ as h, b0 as Z, b1 as l } from "./main-DIdq27YS.js";
function v(e) {
  return d(e) || p(e) || u(e);
}
function w(e, c) {
  const { format: o, timeZoneOptions: n, fieldType: m } = c ?? {};
  let a, s;
  if (n && ({ timeZone: a, timeZoneName: s } = y(n.layerTimeZone, n.datesInUnknownTimezone, n.viewTimeZone, i(o || "short-date-short-time"), m)), typeof e == "string" && isNaN(Date.parse(m === "time-only" ? `1970-01-01T${e}Z` : e))) return e;
  switch (m) {
    case "date-only": {
      const t = i(o || "short-date");
      return typeof e == "string" ? l(e, { ...t }) : r(e, { ...t, timeZone: Z });
    }
    case "time-only": {
      const t = i(o || "short-time");
      return typeof e == "string" ? h(e, t) : r(e, { ...t, timeZone: Z });
    }
    case "timestamp-offset": {
      if (!a && typeof e == "string" && new Date(e).toISOString() !== e) return e;
      const t = o || n ? i(o || "short-date-short-time") : void 0, f = t ? { ...t, timeZone: a, timeZoneName: s } : void 0;
      return typeof e == "string" ? g(e, f) : r(e, f);
    }
    default: {
      const t = o || n ? i(o || "short-date-short-time") : void 0;
      return r(typeof e == "string" ? new Date(e) : e, t ? { ...t, timeZone: a, timeZoneName: s } : void 0);
    }
  }
}
export {
  w as N,
  v as Z
};
//# sourceMappingURL=utils-Bgbn_ysQ.js.map
