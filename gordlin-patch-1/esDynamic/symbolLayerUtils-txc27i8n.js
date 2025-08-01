import { dK as d, s as n, dL as a, bl as m, dM as v, ci as c } from "./main-BEi6lHs4.js";
let u = h();
function h() {
  return new d(50);
}
async function p(r, o = null) {
  if (!r.isPrimitive) {
    const e = r.resource.href;
    if (!e) throw new n("symbol:invalid-resource", "The symbol does not have a valid resource");
    const t = u.get(e);
    if (t !== void 0) return t;
    const { fetch: l } = await import("./objectResourceUtils-B2YgHbyP.js"), f = await l(e, { disableTextures: !0 }), s = a(f.referenceBoundingBox, c());
    return u.put(e, s), s;
  }
  if (!r.resource?.primitive) throw new n("symbol:invalid-resource", "The symbol does not have a valid resource");
  const i = m(v(r.resource.primitive));
  if (o != null) for (let e = 0; e < i.length; e++) i[e] *= o;
  return a(i, c());
}
export {
  p as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-txc27i8n.js.map
