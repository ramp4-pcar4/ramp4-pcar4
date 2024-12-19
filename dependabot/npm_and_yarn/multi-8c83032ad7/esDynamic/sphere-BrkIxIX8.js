import { aC as O, h$ as a, j8 as E, hL as J, dE as x, aG as l, dF as N, dG as h, dJ as M, dI as g, hM as T, aB as v, ar as S, j9 as z, aq as V, ja as F, aD as y, jb as X, en as Y, dH as K, jc as d, aF as Q, jd as A, fL as L, je as U, jf as W, i0 as tt } from "./main-C4pF0E7B.js";
import { c as f, f as nt } from "./plane-DEowYbo2.js";
function et(t, e) {
  const n = O(t, e) / (a(t) * a(e));
  return -E(n);
}
class it {
  constructor(e) {
    this._allocator = e, this._items = [], this._itemsPtr = 0, this._grow();
  }
  get() {
    return this._itemsPtr === 0 && J(() => this._reset()), this._itemsPtr === this._items.length && this._grow(), this._items[this._itemsPtr++];
  }
  _reset() {
    const e = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * R);
    this._items.length = Math.min(e, this._items.length), this._itemsPtr = 0;
  }
  _grow() {
    for (let e = 0; e < Math.max(8, Math.min(this._items.length, R)); e++) this._items.push(this._allocator());
  }
}
const R = 1024;
function G(t) {
  return t ? C(x(t.origin), x(t.direction)) : C(l(), l());
}
function C(t, e) {
  return { origin: t, direction: e };
}
function Rt(t, e) {
  const n = ot.get();
  return n.origin = t, n.direction = e, n;
}
function st(t, e, n = G()) {
  return N(n.origin, t), h(n.direction, e, t), n;
}
function rt(t, e, n) {
  const i = O(t.direction, h(n, e, t.origin));
  return M(n, t.origin, g(n, t.direction, i)), n;
}
const ot = new it(() => G()), ct = q();
function q() {
  return T();
}
const ut = v, at = v;
function Z(t, e) {
  return S(e, t);
}
function ft(t, e) {
  return z(t[0], t[1], t[2], e);
}
function ht(t) {
  return t;
}
function lt(t) {
  t[0] = t[1] = t[2] = t[3] = 0;
}
function gt(t, e) {
  return t[0] = t[1] = t[2] = 0, t[3] = e, t;
}
function $(t) {
  return t[3];
}
function mt(t) {
  return t;
}
function dt(t, e, n, i) {
  return z(t, e, n, i);
}
function _t(t, e, n) {
  return t !== n && (n[0] = t[0], n[1] = t[1], n[2] = t[2]), n[3] = t[3] + e, n;
}
function Mt(t, e, n) {
  return t !== n && Z(t, n), n;
}
function p(t, e, n) {
  if (e == null || !k(t, e, _)) return !1;
  let { t0: i, t1: s } = _;
  if ((i < 0 || s < i && s > 0) && (i = s), i < 0) return !1;
  if (n) {
    const { origin: r, direction: o } = e;
    n[0] = r[0] + o[0] * i, n[1] = r[1] + o[1] * i, n[2] = r[2] + o[2] * i;
  }
  return !0;
}
function $t(t, e, n) {
  const i = st(e, n);
  if (!k(t, i, _)) return [];
  const { origin: s, direction: r } = i, { t0: o, t1: c } = _, u = (m) => {
    const P = l();
    return tt(P, s, r, m), w(t, P, P);
  };
  return Math.abs(o - c) < V() ? [u(o)] : [u(o), u(c)];
}
const _ = { t0: 0, t1: 0 };
function k(t, e, n) {
  const { origin: i, direction: s } = e, r = pt;
  r[0] = i[0] - t[0], r[1] = i[1] - t[1], r[2] = i[2] - t[2];
  const o = s[0] * s[0] + s[1] * s[1] + s[2] * s[2];
  if (o === 0) return !1;
  const c = 2 * (s[0] * r[0] + s[1] * r[1] + s[2] * r[2]), u = c * c - 4 * o * (r[0] * r[0] + r[1] * r[1] + r[2] * r[2] - t[3] * t[3]);
  if (u < 0) return !1;
  const m = Math.sqrt(u);
  return n.t0 = (-c - m) / (2 * o), n.t1 = (-c + m) / (2 * o), !0;
}
const pt = l();
function Pt(t, e) {
  return p(t, e, null);
}
function jt(t, e, n) {
  if (p(t, e, n)) return n;
  const i = B(t, e, f.get());
  return M(n, e.origin, g(f.get(), e.direction, F(e.origin, i) / a(e.direction))), n;
}
function B(t, e, n) {
  const i = f.get(), s = nt.get();
  y(i, e.origin, e.direction);
  const r = $(t);
  y(n, i, e.origin), g(n, n, 1 / a(n) * r);
  const o = D(t, e.origin), c = et(e.origin, n);
  return X(s, c + o, i), Y(n, n, s), n;
}
function St(t, e, n) {
  return p(t, e, n) ? n : (rt(e, t, n), w(t, n, n));
}
function w(t, e, n) {
  const i = h(f.get(), e, t), s = g(f.get(), i, t[3] / a(i));
  return M(n, s, t);
}
function bt(t, e) {
  const n = h(f.get(), e, t), i = K(n), s = t[3] * t[3];
  return Math.sqrt(Math.abs(i - s));
}
function D(t, e) {
  const n = h(f.get(), e, t), i = a(n), s = $(t), r = s + Math.abs(s - i);
  return E(s / r);
}
const j = l();
function H(t, e, n, i) {
  const s = h(j, e, t);
  switch (n) {
    case d.X: {
      const r = A(s, j)[2];
      return L(i, -Math.sin(r), Math.cos(r), 0);
    }
    case d.Y: {
      const r = A(s, j), o = r[1], c = r[2], u = Math.sin(o);
      return L(i, -u * Math.cos(c), -u * Math.sin(c), Math.cos(o));
    }
    case d.Z:
      return Q(i, s);
    default:
      return;
  }
}
function I(t, e) {
  const n = h(b, e, t);
  return a(n) - t[3];
}
function qt(t, e, n, i) {
  const s = I(t, e), r = H(t, e, d.Z, b), o = g(b, r, n - s);
  return M(i, e, o);
}
function wt(t, e) {
  const n = U(t, e), i = $(t);
  return n <= i * i;
}
function xt(t, e, n = T()) {
  const i = F(t, e), s = t[3], r = e[3];
  return i + r < s ? (S(n, t), n) : i + s < r ? (S(n, e), n) : (W(n, t, e, (i + r - s) / (2 * i)), n[3] = (i + s + r) / 2, n);
}
const b = l(), yt = q();
Object.freeze(Object.defineProperty({ __proto__: null, NullSphere: ct, altitudeAt: I, angleToSilhouette: D, axisAt: H, clear: lt, closestPoint: St, closestPointOnSilhouette: B, containsPoint: wt, copy: Z, create: q, distanceToSilhouette: bt, elevate: _t, equals: at, exactEquals: ut, fromCenterAndRadius: ft, fromRadius: gt, fromValues: dt, getCenter: mt, getRadius: $, intersectLine: $t, intersectRay: p, intersectRayClosestSilhouette: jt, intersectsRay: Pt, projectPoint: w, setAltitudeAt: qt, setExtent: Mt, tmpSphere: yt, union: xt, wrap: ht }, Symbol.toStringTag, { value: "Module" }));
export {
  Pt as H,
  $ as N,
  Z as T,
  mt as V,
  q as _,
  wt as a,
  Rt as l,
  G as m,
  it as s
};
//# sourceMappingURL=sphere-BrkIxIX8.js.map
