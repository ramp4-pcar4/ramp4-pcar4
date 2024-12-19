import { d2 as G, aQ as j, a3 as z, d3 as O, d4 as V, d5 as E, d6 as _, d7 as A, bx as D, d8 as L, d9 as P } from "./main-C4pF0E7B.js";
import { Z as R } from "./utils-CTt89qC8.js";
import { c as T, B as U } from "./utils-D42fbg9x.js";
let c = null;
const Y = /^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;
function Z(t, e, s) {
  return t.x < 0 ? t.x += e : t.x > s && (t.x -= e), t;
}
function k(t, e, s, r) {
  const a = G(s) ? j(s) : null, u = a ? Math.round((a.valid[1] - a.valid[0]) / e.scale[0]) : null;
  return t.map((o) => {
    const i = new z(o.geometry);
    return O(e, i, i), o.geometry = a ? Z(i, u ?? 0, r[0]) : i, o;
  });
}
function q(t, e = 18, s, r, a) {
  const u = new Float64Array(r * a);
  e = Math.round(L(e));
  let o = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
  const N = P(s);
  for (const { geometry: h, attributes: g } of t) {
    const { x: $, y: m } = h, I = Math.max(0, $ - e), M = Math.max(0, m - e), F = Math.min(a, m + e), b = Math.min(r, $ + e), p = +N(g);
    for (let f = M; f < F; f++) for (let d = I; d < b; d++) {
      const y = f * r + d, w = V(d - $, f - m, e) * p, l = u[y] += w;
      o = Math.min(o, l), i = Math.max(i, l);
    }
  }
  return { min: o, max: i };
}
function B(t) {
  const e = Y.exec(t);
  if (!e) return null;
  const { hh: s, mm: r, ss: a, ms: u } = e.groups;
  return Number(s) * E.hours + Number(r) * E.minutes + Number(a) * E.seconds + Number(u || 0);
}
async function H(t, e, s = !0) {
  if (!e) return [];
  const { field: r, field2: a, field3: u, fieldDelimiter: o, fieldInfos: i, timeZone: N } = t, h = r && i?.find((l) => l.name.toLowerCase() === r.toLowerCase()), g = !!h && _(h), $ = !!h && R(h), m = t.valueExpression, I = t.normalizationType, M = t.normalizationField, F = t.normalizationTotal, b = [], p = t.viewInfoParams;
  let f = null, d = null;
  if (m) {
    if (!c) {
      const { arcadeUtils: l } = await A();
      c = l;
    }
    c.hasGeometryOperations(m) && await c.enableGeometryOperations(), f = c.createFunction(m), d = p ? c.getViewInfo({ viewingMode: p.viewingMode, scale: p.scale, spatialReference: new D(p.spatialReference) }) : null;
  }
  const y = t.fieldInfos, w = !(e[0] && "declaredClass" in e[0] && e[0].declaredClass === "esri.Graphic") && y ? { fields: y } : null;
  return e.forEach((l) => {
    const x = l.attributes;
    let n;
    if (m) {
      const v = w ? { ...l, layer: w } : l, C = c.createExecContext(v, d, N);
      n = c.executeFunction(f, C);
    } else x && (n = x[r], a ? (n = `${T(n)}${o}${T(x[a])}`, u && (n = `${n}${o}${T(x[u])}`)) : typeof n == "string" && s && ($ ? n = n ? new Date(n).getTime() : null : g && (n = n ? B(n) : null)));
    if (I && typeof n == "number" && isFinite(n)) {
      const v = x && parseFloat(x[M]);
      n = U(n, I, v, F);
    }
    b.push(n);
  }), b;
}
export {
  H as b,
  k as j,
  B as w,
  q as x
};
//# sourceMappingURL=utils-B0zyklbU.js.map
