import { hL as V, fD as g, aG as f, hM as X, a5 as w, dG as $, aF as p, aC as C } from "./main-uCo5F72j.js";
import { e as L } from "./mat3f64-Dh9_zhFu.js";
import { e as b } from "./mat4f64-Dn1WEGBx.js";
import { e as x } from "./quatf64-DxbQqBtW.js";
class r {
  constructor(e) {
    this._create = e, this._items = new Array(), this._itemsPtr = 0;
  }
  get() {
    return this._itemsPtr === 0 && V(() => this._reset()), this._itemsPtr >= this._items.length && this._items.push(this._create()), this._items[this._itemsPtr++];
  }
  _reset() {
    const e = 2 * this._itemsPtr;
    this._items.length > e && (this._items.length = e), this._itemsPtr = 0;
  }
  static createVec2f64() {
    return new r(g);
  }
  static createVec3f64() {
    return new r(f);
  }
  static createVec4f64() {
    return new r(X);
  }
  static createMat3f64() {
    return new r(L);
  }
  static createMat4f64() {
    return new r(b);
  }
  static createQuatf64() {
    return new r(x);
  }
  get test() {
  }
}
r.createVec2f64();
const D = r.createVec3f64();
r.createVec4f64();
r.createMat3f64();
const Y = r.createMat4f64(), Z = r.createQuatf64();
function G(t = d) {
  return [t[0], t[1], t[2], t[3]];
}
function j(t) {
  return t;
}
function y(t, e, i, s = G()) {
  const h = i[0] - e[0], I = i[1] - e[1], a = i[2] - e[2], c = t[0] - e[0], A = t[1] - e[1], T = t[2] - e[2], _ = I * T - a * A, E = a * c - h * T, P = h * A - I * c, F = _ * _ + E * E + P * P, l = Math.abs(F - 1) > 1e-5 && F > 1e-12 ? 1 / Math.sqrt(F) : 1;
  return s[0] = _ * l, s[1] = E * l, s[2] = P * l, s[3] = -(s[0] * t[0] + s[1] * t[1] + s[2] * t[2]), s;
}
function O(t, e, i, s = 0, h = Math.floor(i * (1 / 3)), I = Math.floor(i * (2 / 3))) {
  if (i < 3) return !1;
  e(o, s);
  let a = h, c = !1;
  for (; a < i - 1 && !c; ) e(n, a), a++, c = !w(o, n);
  if (!c) return !1;
  for (a = Math.max(a, I), c = !1; a < i && !c; ) e(N, a), a++, $(u, o, n), p(u, u), $(m, n, N), p(m, m), c = !w(o, N) && !w(n, N) && Math.abs(C(u, m)) < Q;
  return c ? (y(o, n, N, t), !0) : (s !== 0 || h !== 1 || I !== 2) && O(t, e, i, 0, 1, 2);
}
const Q = 0.99619469809, o = f(), n = f(), N = f(), u = f(), m = f(), d = [0, 0, 1, 0];
var M;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.CLAMP = 1] = "CLAMP", t[t.INFINITE_MIN = 4] = "INFINITE_MIN", t[t.INFINITE_MAX = 8] = "INFINITE_MAX";
})(M || (M = {}));
M.INFINITE_MIN | M.INFINITE_MAX;
M.INFINITE_MAX;
export {
  G as E,
  j as F,
  O as X,
  D as c,
  Y as f,
  Z as o
};
//# sourceMappingURL=plane-BmSXagW8.js.map
