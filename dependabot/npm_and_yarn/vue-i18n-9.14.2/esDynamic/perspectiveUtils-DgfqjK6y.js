import { O as t, P as l, Q as M, e2 as N, fK as d, eL as R, b5 as V, fL as m, cA as g, fM as h, fH as c, bL as x, fN as z, fO as i, aG as w } from "./main-uCo5F72j.js";
import { p as A } from "./normalizeUtilsSync-B0Bu2l5V.js";
import { e as p } from "./mat3f64-Dh9_zhFu.js";
let s = class extends N {
  constructor(o) {
    super(o);
  }
  get bounds() {
    const o = this.coords;
    return o?.extent == null ? null : d(o.extent);
  }
  get coords() {
    const o = this.element.georeference?.coords;
    return R(o, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return V.fromJSON(A(this.coords));
  }
  get normalizedBounds() {
    const o = this.normalizedCoords != null ? this.normalizedCoords.extent : null;
    return o != null ? d(o) : null;
  }
};
t([l()], s.prototype, "spatialReference", void 0), t([l()], s.prototype, "element", void 0), t([l()], s.prototype, "bounds", null), t([l()], s.prototype, "coords", null), t([l()], s.prototype, "normalizedCoords", null), t([l()], s.prototype, "normalizedBounds", null), s = t([M("esri.layers.support.MediaElementView")], s);
const r = w(), a = p(), u = p(), f = p();
function J(o, e, n) {
  return m(r, e[0], e[1], 1), g(r, r, h(a, n)), r[2] === 0 ? c(o, r[0], r[1]) : c(o, r[0] / r[2], r[1] / r[2]);
}
function K(o, e, n) {
  return y(u, e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), y(f, n[0], n[1], n[2], n[3], n[4], n[5], n[6], n[7]), x(o, z(u, u), f), o[8] !== 0 && (o[0] /= o[8], o[1] /= o[8], o[2] /= o[8], o[3] /= o[8], o[4] /= o[8], o[5] /= o[8], o[6] /= o[8], o[7] /= o[8], o[8] /= o[8]), o;
}
function y(o, e, n, b, C, $, v, L, O) {
  i(o, e, b, $, n, C, v, 1, 1, 1), m(r, L, O, 1), z(a, o);
  const [S, j, B] = g(r, r, h(a, a));
  return i(a, S, 0, 0, 0, j, 0, 0, 0, B), x(o, a, o);
}
export {
  K as j,
  s as m,
  J as p
};
//# sourceMappingURL=perspectiveUtils-DgfqjK6y.js.map
