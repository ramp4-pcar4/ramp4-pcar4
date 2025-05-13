import { N as t, O as l, P as N, dU as O, fq as d, ep as q, aR as E, fr as m, fs as g, ft as h, fu as c, fe as x, fv as z, fw as i, ci as J } from "./main-BEi6lHs4.js";
import { p as K } from "./normalizeUtilsSync-BqORsi-4.js";
import { e as p } from "./mat3f64-Dh9_zhFu.js";
let n = class extends O {
  constructor(o) {
    super(o);
  }
  get bounds() {
    const o = this.coords;
    return o?.extent == null ? null : d(o.extent);
  }
  get coords() {
    const o = this.element.georeference?.coords;
    return q(o, this.spatialReference).geometry;
  }
  get normalizedCoords() {
    return E.fromJSON(K(this.coords));
  }
  get normalizedBounds() {
    const o = this.normalizedCoords != null ? this.normalizedCoords.extent : null;
    return o != null ? d(o) : null;
  }
};
t([l()], n.prototype, "spatialReference", void 0), t([l()], n.prototype, "element", void 0), t([l()], n.prototype, "bounds", null), t([l()], n.prototype, "coords", null), t([l()], n.prototype, "normalizedCoords", null), t([l()], n.prototype, "normalizedBounds", null), n = t([N("esri.layers.support.MediaElementView")], n);
const r = J(), a = p(), u = p(), f = p();
function V(o, e, s) {
  return m(r, e[0], e[1], 1), g(r, r, h(a, s)), r[2] === 0 ? c(o, r[0], r[1]) : c(o, r[0] / r[2], r[1] / r[2]);
}
function k(o, e, s) {
  return y(u, e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), y(f, s[0], s[1], s[2], s[3], s[4], s[5], s[6], s[7]), x(o, z(u, u), f), o[8] !== 0 && (o[0] /= o[8], o[1] /= o[8], o[2] /= o[8], o[3] /= o[8], o[4] /= o[8], o[5] /= o[8], o[6] /= o[8], o[7] /= o[8], o[8] /= o[8]), o;
}
function y(o, e, s, $, v, C, j, R, S) {
  i(o, e, $, C, s, v, j, 1, 1, 1), m(r, R, S, 1), z(a, o);
  const [b, w, B] = g(r, r, h(a, a));
  return i(a, b, 0, 0, 0, w, 0, 0, 0, B), x(o, a, o);
}
export {
  k as j,
  n as m,
  V as p
};
//# sourceMappingURL=perspectiveUtils-Bk8WYLyr.js.map
