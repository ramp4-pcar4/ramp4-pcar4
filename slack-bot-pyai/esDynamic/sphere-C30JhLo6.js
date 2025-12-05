import { ce as T, hx as a, hR as v, cp as P, ci as h, cq as k, cr as g, cu as $, ct as l, ht as z, cd as C, c3 as R, hS as E, C as B, c2 as D, hT as j, cf as _, hU as F, ez as G, cs as H, hV as p, ch as I, hW as w, fr as L, hw as J, hv as K, hN as Q } from "./main-DhLeoxL5.js";
import { s as tt } from "./ObjectStack-Blk45XEz.js";
import { c as f, f as nt } from "./plane-Biatxyv3.js";
function et(t, e) {
  const n = T(t, e) / (a(t) * a(e));
  return -v(n);
}
function N(t) {
  return t ? O(P(t.origin), P(t.direction)) : O(h(), h());
}
function O(t, e) {
  return { origin: t, direction: e };
}
function Ot(t, e) {
  const n = it.get();
  return n.origin = t, n.direction = e, n;
}
function ot(t, e, n = N()) {
  return k(n.origin, t), g(n.direction, e, t), n;
}
function rt(t, e, n) {
  const o = T(t.direction, g(n, e, t.origin));
  return $(n, t.origin, l(n, t.direction, o)), n;
}
const it = new tt(() => N()), ct = q();
function q() {
  return z();
}
const st = C, ut = C;
function V(t, e) {
  return R(e, t);
}
function at(t, e) {
  return E(t[0], t[1], t[2], e);
}
function ft(t) {
  return t;
}
function gt(t) {
  t[0] = t[1] = t[2] = t[3] = 0;
}
function ht(t, e) {
  return t[0] = t[1] = t[2] = 0, t[3] = e, t;
}
function M(t) {
  return t[3];
}
function lt(t) {
  return t;
}
function dt(t, e, n, o) {
  return E(t, e, n, o);
}
function pt(t, e, n) {
  return t !== n && (n[0] = t[0], n[1] = t[1], n[2] = t[2]), n[3] = t[3] + e, n;
}
function mt(t, e, n) {
  return B.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"), t !== n && V(t, n), n;
}
function S(t, e, n) {
  if (e == null || !Z(t, e, m)) return !1;
  let { t0: o, t1: r } = m;
  if ((o < 0 || r < o && r > 0) && (o = r), o < 0) return !1;
  if (n) {
    const { origin: i, direction: c } = e;
    n[0] = i[0] + c[0] * o, n[1] = i[1] + c[1] * o, n[2] = i[2] + c[2] * o;
  }
  return !0;
}
function $t(t, e, n) {
  const o = ot(e, n);
  if (!Z(t, o, m)) return [];
  const { origin: r, direction: i } = o, { t0: c, t1: s } = m, u = (d) => {
    const x = h();
    return Q(x, r, i, d), A(t, x, x);
  };
  return Math.abs(c - s) < D() ? [u(c)] : [u(c), u(s)];
}
const m = { t0: 0, t1: 0 };
function Z(t, e, n) {
  const { origin: o, direction: r } = e, i = Mt;
  i[0] = o[0] - t[0], i[1] = o[1] - t[1], i[2] = o[2] - t[2];
  const c = r[0] * r[0] + r[1] * r[1] + r[2] * r[2];
  if (c === 0) return !1;
  const s = 2 * (r[0] * i[0] + r[1] * i[1] + r[2] * i[2]), u = s * s - 4 * c * (i[0] * i[0] + i[1] * i[1] + i[2] * i[2] - t[3] * t[3]);
  if (u < 0) return !1;
  const d = Math.sqrt(u);
  return n.t0 = (-s - d) / (2 * c), n.t1 = (-s + d) / (2 * c), !0;
}
const Mt = h();
function St(t, e) {
  return S(t, e, null);
}
function xt(t, e, n) {
  if (S(t, e, n)) return n;
  const o = U(t, e, f.get());
  return $(n, e.origin, l(f.get(), e.direction, j(e.origin, o) / a(e.direction))), n;
}
function U(t, e, n) {
  const o = f.get(), r = nt.get();
  _(o, e.origin, e.direction);
  const i = M(t);
  _(n, o, e.origin), l(n, n, 1 / a(n) * i);
  const c = W(t, e.origin), s = et(e.origin, n);
  return F(r, s + c, o), G(n, n, r), n;
}
function yt(t, e, n) {
  return S(t, e, n) ? n : (rt(e, t, n), A(t, n, n));
}
function A(t, e, n) {
  const o = g(f.get(), e, t), r = l(f.get(), o, t[3] / a(o));
  return $(n, r, t);
}
function Rt(t, e) {
  const n = g(f.get(), e, t), o = H(n), r = t[3] * t[3];
  return Math.sqrt(Math.abs(o - r));
}
function W(t, e) {
  const n = g(f.get(), e, t), o = a(n), r = M(t), i = r + Math.abs(r - o);
  return v(r / i);
}
const y = h();
function X(t, e, n, o) {
  const r = g(y, e, t);
  switch (n) {
    case p.X: {
      const i = w(r, y)[2];
      return L(o, -Math.sin(i), Math.cos(i), 0);
    }
    case p.Y: {
      const i = w(r, y), c = i[1], s = i[2], u = Math.sin(c);
      return L(o, -u * Math.cos(s), -u * Math.sin(s), Math.cos(c));
    }
    case p.Z:
      return I(o, r);
    default:
      return;
  }
}
function Y(t, e) {
  const n = g(b, e, t);
  return a(n) - t[3];
}
function bt(t, e, n, o) {
  const r = Y(t, e), i = X(t, e, p.Z, b), c = l(b, i, n - r);
  return $(o, e, c);
}
function qt(t, e) {
  const n = J(t, e), o = M(t);
  return n <= o * o;
}
function At(t, e, n = z()) {
  const o = j(t, e), r = t[3], i = e[3];
  return o + i < r ? (R(n, t), n) : o + r < i ? (R(n, e), n) : (K(n, t, e, (o + i - r) / (2 * o)), n[3] = (o + r + i) / 2, n);
}
const b = h(), Pt = q();
Object.freeze(Object.defineProperty({ __proto__: null, NullSphere: ct, altitudeAt: Y, angleToSilhouette: W, axisAt: X, clear: gt, closestPoint: yt, closestPointOnSilhouette: U, containsPoint: qt, copy: V, create: q, distanceToSilhouette: Rt, elevate: pt, equals: ut, exactEquals: st, fromCenterAndRadius: at, fromRadius: ht, fromValues: dt, getCenter: lt, getRadius: M, intersectLine: $t, intersectRay: S, intersectRayClosestSilhouette: xt, intersectsRay: St, projectPoint: A, setAltitudeAt: bt, setExtent: mt, tmpSphere: Pt, union: At, wrap: ft }, Symbol.toStringTag, { value: "Module" }));
export {
  St as I,
  V as O,
  M as V,
  lt as Z,
  N as d,
  Ot as p,
  qt as s,
  q as w
};
//# sourceMappingURL=sphere-C30JhLo6.js.map
