import { bx as c, cJ as k, cK as u, cL as m, cM as C, cN as i, cO as l } from "./main-DMoCLB29.js";
const U = new c(k), n = new c(u), e = new c(m), $ = new c(C);
function b(t) {
  const p = r.get(t);
  if (p) return p;
  let s = U;
  if (t) if (t === n) s = n;
  else if (t === e) s = e;
  else {
    const a = t.wkid, o = t.latestWkid;
    if (a != null || o != null) i(a) || i(o) ? s = n : (l(a) || l(o)) && (s = e);
    else {
      const w = t.wkt2 ?? t.wkt;
      if (w) {
        const f = w.toUpperCase();
        f === d ? s = n : f === x && (s = e);
      }
    }
  }
  return r.set(t, s), s;
}
const r = /* @__PURE__ */ new Map(), d = n.wkt.toUpperCase(), x = e.wkt.toUpperCase();
export {
  b as a,
  $ as w
};
//# sourceMappingURL=spatialReferenceEllipsoidUtils-w0cNHIWO.js.map
