import { dV as d, s as n, dW as a, bB as m, dX as v, aG as c } from "./main-C4pF0E7B.js";
let u = h();
function h() {
  return new d(50);
}
async function p(r, i = null) {
  if (!r.isPrimitive) {
    const e = r.resource?.href;
    if (!e) throw new n("symbol:invalid-resource", "The symbol does not have a valid resource");
    const t = u.get(e);
    if (t !== void 0) return t;
    const { fetch: l } = await import("./objectResourceUtils-DiuKX24E.js"), f = await l(e, { disableTextures: !0 }), s = a(f.referenceBoundingBox, c());
    return u.put(e, s), s;
  }
  if (!r.resource?.primitive) throw new n("symbol:invalid-resource", "The symbol does not have a valid resource");
  const o = m(v(r.resource.primitive));
  if (i != null) for (let e = 0; e < o.length; e++) o[e] *= i;
  return a(o, c());
}
export {
  p as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-B5e5rgdX.js.map
