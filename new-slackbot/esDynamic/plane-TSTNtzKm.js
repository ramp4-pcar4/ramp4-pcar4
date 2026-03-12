import { co as V, h3 as $, ci as h, ht as X, hu as g, cr as T, ch as p, ce as b } from "./main-BpIyUAdL.js";
import { e as x } from "./mat3f64-Dh9_zhFu.js";
import { e as C } from "./mat4f64-Dn1WEGBx.js";
import { e as L } from "./quatf64-DxbQqBtW.js";
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
    return new r($);
  }
  static createVec3f64() {
    return new r(h);
  }
  static createVec4f64() {
    return new r(X);
  }
  static createMat3f64() {
    return new r(x);
  }
  static createMat4f64() {
    return new r(C);
  }
  static createQuatf64() {
    return new r(L);
  }
  get test() {
    return { length: this._items.length };
  }
}
r.createVec2f64();
const Z = r.createVec3f64();
r.createVec4f64();
r.createMat3f64();
const d = r.createMat4f64(), j = r.createQuatf64();
function y(t = q) {
  return [t[0], t[1], t[2], t[3]];
}
function B(t) {
  return t;
}
function O(t, e, c, s = y()) {
  const f = c[0] - e[0], I = c[1] - e[1], a = c[2] - e[2], i = t[0] - e[0], w = t[1] - e[1], A = t[2] - e[2], _ = I * A - a * w, E = a * i - f * A, P = f * w - I * i, l = _ * _ + E * E + P * P, F = Math.abs(l - 1) > 1e-5 && l > 1e-12 ? 1 / Math.sqrt(l) : 1;
  return s[0] = _ * F, s[1] = E * F, s[2] = P * F, s[3] = -(s[0] * t[0] + s[1] * t[1] + s[2] * t[2]), s;
}
function Q(t, e, c, s = 0, f = Math.floor(c * (1 / 3)), I = Math.floor(c * (2 / 3))) {
  if (c < 3) return !1;
  e(o, s);
  let a = f, i = !1;
  for (; a < c - 1 && !i; ) e(n, a), a++, i = !g(o, n);
  if (!i) return !1;
  for (a = Math.max(a, I), i = !1; a < c && !i; ) e(N, a), a++, T(M, o, n), p(M, M), T(m, n, N), p(m, m), i = !g(o, N) && !g(n, N) && Math.abs(b(M, m)) < k;
  return i ? (O(o, n, N, t), !0) : (s !== 0 || f !== 1 || I !== 2) && Q(t, e, c, 0, 1, 2);
}
const k = 0.99619469809, o = h(), n = h(), N = h(), M = h(), m = h(), q = [0, 0, 1, 0];
var u;
(function(t) {
  t[t.NONE = 0] = "NONE", t[t.CLAMP = 1] = "CLAMP", t[t.INFINITE_MIN = 4] = "INFINITE_MIN", t[t.INFINITE_MAX = 8] = "INFINITE_MAX";
})(u || (u = {}));
u.INFINITE_MIN | u.INFINITE_MAX;
u.INFINITE_MAX;
export {
  y as E,
  B as F,
  Q as X,
  Z as c,
  d as f,
  j as o
};
//# sourceMappingURL=plane-TSTNtzKm.js.map
