import { b9 as Z, ba as p, bb as u, bc as y, bd as i, B as a, be as b, bf as g, bg as c, bh as h } from "./main-uCo5F72j.js";
function N(e) {
  return Z(e) || p(e) || u(e);
}
function v(e, d) {
  const { format: o, timeZoneOptions: n, fieldType: m } = d ?? {};
  let r, s;
  if (n && ({ timeZone: r, timeZoneName: s } = y(n.layerTimeZone, n.datesInUnknownTimezone, n.viewTimeZone, i(o || "short-date-short-time"), m)), typeof e == "string" && isNaN(Date.parse(m === "time-only" ? `1970-01-01T${e}Z` : e))) return e;
  switch (m) {
    case "date-only": {
      const t = i(o || "short-date");
      return typeof e == "string" ? h(e, { ...t }) : a(e, { ...t, timeZone: c });
    }
    case "time-only": {
      const t = i(o || "short-time");
      return typeof e == "string" ? g(e, t) : a(e, { ...t, timeZone: c });
    }
    case "timestamp-offset": {
      if (!r && typeof e == "string" && new Date(e).toISOString() !== e) return e;
      const t = o || n ? i(o || "short-date-short-time") : void 0, f = t ? { ...t, timeZone: r, timeZoneName: s } : void 0;
      return typeof e == "string" ? b(e, f) : a(e, f);
    }
    default: {
      const t = o || n ? i(o || "short-date-short-time") : void 0;
      return a(typeof e == "string" ? new Date(e) : e, t ? { ...t, timeZone: r, timeZoneName: s } : void 0);
    }
  }
}
export {
  v as N,
  N as Z
};
//# sourceMappingURL=utils-DMqJ3UgD.js.map
