import { aR as z, aU as A, bh as S, de as v, d7 as B, df as b, dg as j } from "./main-3gzXighg.js";
import { j as $ } from "./timeSupport-BSCelxJA.js";
const F = new Float64Array(2), T = new Float64Array(2), Y = "0123456789bcdefghjkmnpqrstuvwxyz", k = 64;
function K(n, e, r, a) {
  const t = [n.xmin, n.ymin, n.xmax, n.ymax], s = z.fromExtent(A.fromBounds(t, a)), c = $(s, a, S.WGS84, { densificationStep: e * k });
  if (!c) return null;
  const o = v(new B(), c, !1, !1), i = o.coords.filter((W, m) => !(m % 2)), u = o.coords.filter((W, m) => m % 2), y = Math.min(...i), M = Math.min(...u), l = Math.max(...i), h = Math.max(...u), f = w(y, M, r, S.WGS84), p = w(l, h, r, S.WGS84);
  return f && p ? { bounds: t, geohashBounds: { xLL: f[0], yLL: f[1], xTR: p[0], yTR: p[1] }, level: r } : null;
}
function w(n, e, r, a) {
  if (a.isWebMercator) {
    const c = b(n / j.radius), o = c - 360 * Math.floor((c + 180) / 360), i = [0, 0];
    return L(i, 0, b(Math.PI / 2 - 2 * Math.atan(Math.exp(-e / j.radius))), o, r), i;
  }
  const t = $({ x: n, y: e }, a, S.WGS84);
  if (!t) return null;
  const s = [0, 0];
  return L(s, 0, t.y, t.x, r), s;
}
function q(n) {
  return Y[n];
}
function R(n) {
  return (n[0] + n[1]) / 2;
}
function G(n, e, r) {
  return n[0] = e, n[1] = r, n;
}
function C(n, e) {
  const r = R(n), a = e, t = !e;
  n[0] = t * n[0] + a * r, n[1] = t * r + a * n[1];
}
function x(n, e) {
  const r = e > R(n);
  return C(n, r), r;
}
function P(n, e) {
  let r = -90, a = 90, t = -180, s = 180;
  for (let c = 0; c < e; c++) {
    const o = Math.ceil((c + 1) / 2), i = Math.floor((c + 1) / 2), u = 1 - c % 2, y = 30 - (3 * o + 2 * i), M = 30 - (2 * o + 3 * i), l = 3 * u + 2 * (1 - u), h = 2 * u + 3 * (1 - u), f = 3 * u + 7 * (1 - u) << M, p = (7 * u + 3 * (1 - u) << y & n.geohashX) >> y, W = (f & n.geohashY) >> M;
    for (let m = l - 1; m >= 0; m--) {
      const g = (t + s) / 2, d = p & 1 << m ? 1 : 0;
      t = (1 - d) * t + d * g, s = (1 - d) * g + d * s;
    }
    for (let m = h - 1; m >= 0; m--) {
      const g = (r + a) / 2, d = W & 1 << m ? 1 : 0;
      r = (1 - d) * r + d * g, a = (1 - d) * g + d * a;
    }
  }
  return [t, r, s, a];
}
function L(n, e, r, a, t) {
  t % 2 && (t += 1);
  let s = 0, c = 0, o = -90, i = 90, u = -180, y = 180;
  for (let M = 0; M < t / 2; M++) {
    for (let l = 0; l < 5; l++) {
      const h = (u + y) / 2, f = a > h ? 1 : 0;
      s |= f << 29 - (l + 5 * M), u = (1 - f) * u + f * h, y = (1 - f) * h + f * y;
    }
    for (let l = 0; l < 5; l++) {
      const h = (o + i) / 2, f = r > h ? 1 : 0;
      c |= f << 29 - (l + 5 * M), o = (1 - f) * o + f * h, i = (1 - f) * h + f * i;
    }
  }
  n[2 * e] = s, n[2 * e + 1] = c;
}
function U(n, e, r) {
  let a = "";
  const t = G(F, -90, 90), s = G(T, -180, 180);
  for (let c = 0; c < r; c++) {
    let o = 0;
    c % 2 ? (o |= x(t, n) << 4, o |= x(s, e) << 3, o |= x(t, n) << 2, o |= x(s, e) << 1, o |= x(t, n) << 0) : (o |= x(s, e) << 4, o |= x(t, n) << 3, o |= x(s, e) << 2, o |= x(t, n) << 1, o |= x(s, e) << 0), a += q(o);
  }
  return a;
}
export {
  w as A,
  P as R,
  K as S,
  U as z
};
//# sourceMappingURL=geohashUtils-U49zSt-p.js.map
