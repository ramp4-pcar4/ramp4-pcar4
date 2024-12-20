import { O as s, P as i, Q as d, bX as h, cW as n, cV as p, go as g, cm as S, cn as y, $ as R, gp as w } from "./main-C4pF0E7B.js";
let o = class extends h {
  constructor(e) {
    super(e), this.geometries = [], this.outSpatialReference = null, this.transformation = null, this.transformForward = null;
  }
  toJSON() {
    const e = this.geometries.map((a) => a.toJSON()), t = this.geometries[0], r = {};
    return r.outSR = n(this.outSpatialReference), r.inSR = n(t.spatialReference), r.geometries = JSON.stringify({ geometryType: p(t), geometries: e }), this.transformation && (r.transformation = this.transformation.wkid || JSON.stringify(this.transformation)), this.transformForward != null && (r.transformForward = this.transformForward), r;
  }
};
s([i()], o.prototype, "geometries", void 0), s([i({ json: { read: { source: "outSR" } } })], o.prototype, "outSpatialReference", void 0), s([i()], o.prototype, "transformation", void 0), s([i()], o.prototype, "transformForward", void 0), o = s([d("esri.rest.support.ProjectParameters")], o);
const O = o, $ = g(O);
async function F(e, t, r) {
  t = $(t);
  const a = S(e), f = { ...a.query, f: "json", ...t.toJSON() }, c = t.outSpatialReference, m = p(t.geometries[0]), u = y(f, r);
  return R(a.path + "/project", u).then(({ data: { geometries: l } }) => w(l, m, c));
}
export {
  F as n,
  O as p
};
//# sourceMappingURL=project-D7vYnXHa.js.map
