import { N as s, O as i, P as l, b_ as h, cC as n, cB as f, fS as S, bX as g, bY as y, a2 as R, fT as w } from "./main-3gzXighg.js";
let o = class extends h {
  constructor(e) {
    super(e), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const e = this.geometries.map((a) => a.toJSON()), t = this.geometries[0], r = {};
    return r.outSR = n(this.outSpatialReference), r.inSR = n(t.spatialReference), r.geometries = JSON.stringify({ geometryType: f(t), geometries: e }), this.transformation && (r.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), this.transformForward != null && (r.transformForward = this.transformForward), r;
  }
};
s([i()], o.prototype, "geometries", void 0), s([i({ json: { read: { source: "outSR" } } })], o.prototype, "outSpatialReference", void 0), s([i()], o.prototype, "transformation", void 0), s([i()], o.prototype, "transformForward", void 0), o = s([l("esri.rest.support.ProjectParameters")], o);
const N = o, O = S(N);
async function F(e, t, r) {
  t = O(t);
  const a = g(e), p = { ...a.query, f: "json", ...t.toJSON() }, c = t.outSpatialReference, m = f(t.geometries[0]), u = y(p, r);
  return R(a.path + "/project", u).then(({ data: { geometries: d } }) => w(d, m, c));
}
export {
  F as n,
  N as p
};
//# sourceMappingURL=project-Dn2Dvews.js.map
