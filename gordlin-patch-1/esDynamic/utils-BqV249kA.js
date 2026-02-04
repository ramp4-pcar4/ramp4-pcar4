import { cJ as G, aA as L, a6 as O, cK as z, cL as A, cM as E, cN as P, cO as V, bh as Z, cP as j, cQ as D } from "./main-BEi6lHs4.js";
import { Z as R } from "./utils-1iszyClv.js";
import { c as T, B as U } from "./utils-BPHF0w-E.js";
let m = null;
const Y = /^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;
function _(t, e, o) {
  return t.x < 0 ? t.x += e : t.x > o && (t.x -= e), t;
}
function S(t, e, o, r) {
  const a = G(o) ? L(o) : null, c = a ? Math.round((a.valid[1] - a.valid[0]) / e.scale[0]) : null;
  return t.map((i) => {
    const s = new O(i.geometry);
    return z(e, s, s, s.hasZ, s.hasM), i.geometry = a ? _(s, c ?? 0, r[0]) : s, i;
  });
}
function W(t, e = 18, o, r, a) {
  const c = new Float64Array(r * a);
  e = Math.round(j(e));
  let i = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
  const M = D(o);
  for (const { geometry: h, attributes: N } of t) {
    const { x: $, y: u } = h, I = Math.max(0, $ - e), g = Math.max(0, u - e), F = Math.min(a, u + e), b = Math.min(r, $ + e), p = +M(N);
    for (let f = g; f < F; f++) for (let d = I; d < b; d++) {
      const y = f * r + d, w = A(d - $, f - u, e) * p, l = c[y] += w;
      i = Math.min(i, l), s = Math.max(s, l);
    }
  }
  return { min: i, max: s };
}
function B(t) {
  const e = Y.exec(t);
  if (!e) return null;
  const { hh: o, mm: r, ss: a, ms: c } = e.groups;
  return Number(o) * E.hours + Number(r) * E.minutes + Number(a) * E.seconds + Number(c || 0);
}
async function k(t, e, o = !0) {
  if (!e) return [];
  const { field: r, field2: a, field3: c, fieldDelimiter: i, fieldInfos: s, timeZone: M } = t, h = r && s?.find((l) => l.name.toLowerCase() === r.toLowerCase()), N = !!h && P(h), $ = !!h && R(h), u = t.valueExpression, I = t.normalizationType, g = t.normalizationField, F = t.normalizationTotal, b = [], p = t.viewInfoParams;
  let f = null, d = null;
  if (u) {
    if (!m) {
      const { arcadeUtils: l } = await V();
      m = l;
    }
    m.hasGeometryOperations(u) && await m.enableGeometryOperations(), f = m.createFunction(u), d = p ? m.getViewInfo({ viewingMode: p.viewingMode, scale: p.scale, spatialReference: new Z(p.spatialReference) }) : null;
  }
  const y = t.fieldInfos, w = !(e[0] && "declaredClass" in e[0] && e[0].declaredClass === "esri.Graphic") && y ? { fields: y } : null;
  return e.forEach((l) => {
    const x = l.attributes;
    let n;
    if (u) {
      const v = w ? { ...l, layer: w } : l, C = m.createExecContext(v, d, M);
      n = m.executeFunction(f, C);
    } else x && (n = x[r], a ? (n = `${T(n)}${i}${T(x[a])}`, c && (n = `${n}${i}${T(x[c])}`)) : typeof n == "string" && o && ($ ? n = n ? new Date(n).getTime() : null : N && (n = n ? B(n) : null)));
    if (I && typeof n == "number" && isFinite(n)) {
      const v = x && parseFloat(x[g]);
      n = U(n, I, v, F);
    }
    b.push(n);
  }), b;
}
export {
  k as b,
  S as j,
  B as w,
  W as x
};
//# sourceMappingURL=utils-BqV249kA.js.map
