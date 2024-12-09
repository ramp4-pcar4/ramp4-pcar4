import { e as L } from "./mat3f64-Dh9_zhFu.js";
import { e as x } from "./quatf64-DxbQqBtW.js";
import { aq as A, ar as O, as as S, at as T, au as Y, av as w, aw as B, ax as C, ay as D, az as F, aA as G, aB as H, aC as W, aD as g, aE as X, aF as Z, aG as k, aH as _, aI as J } from "./main-C4pF0E7B.js";
function K(a) {
  return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a;
}
function b(a, o, e) {
  e *= 0.5;
  const r = Math.sin(e);
  return a[0] = r * o[0], a[1] = r * o[1], a[2] = r * o[2], a[3] = Math.cos(e), a;
}
function N(a, o) {
  const e = 2 * Math.acos(o[3]), r = Math.sin(e / 2);
  return r > A() ? (a[0] = o[0] / r, a[1] = o[1] / r, a[2] = o[2] / r) : (a[0] = 1, a[1] = 0, a[2] = 0), e;
}
function j(a, o, e) {
  const r = o[0], s = o[1], c = o[2], t = o[3], u = e[0], i = e[1], n = e[2], h = e[3];
  return a[0] = r * h + t * u + s * n - c * i, a[1] = s * h + t * i + c * u - r * n, a[2] = c * h + t * n + r * i - s * u, a[3] = t * h - r * u - s * i - c * n, a;
}
function Q(a, o, e) {
  e *= 0.5;
  const r = o[0], s = o[1], c = o[2], t = o[3], u = Math.sin(e), i = Math.cos(e);
  return a[0] = r * i + t * u, a[1] = s * i + c * u, a[2] = c * i - s * u, a[3] = t * i - r * u, a;
}
function R(a, o, e) {
  e *= 0.5;
  const r = o[0], s = o[1], c = o[2], t = o[3], u = Math.sin(e), i = Math.cos(e);
  return a[0] = r * i - c * u, a[1] = s * i + t * u, a[2] = c * i + r * u, a[3] = t * i - s * u, a;
}
function U(a, o, e) {
  e *= 0.5;
  const r = o[0], s = o[1], c = o[2], t = o[3], u = Math.sin(e), i = Math.cos(e);
  return a[0] = r * i + s * u, a[1] = s * i - r * u, a[2] = c * i + t * u, a[3] = t * i - c * u, a;
}
function V(a, o) {
  const e = o[0], r = o[1], s = o[2];
  return a[0] = e, a[1] = r, a[2] = s, a[3] = Math.sqrt(Math.abs(1 - e * e - r * r - s * s)), a;
}
function d(a, o, e, r) {
  const s = o[0], c = o[1], t = o[2], u = o[3];
  let i, n, h, f, l, m = e[0], q = e[1], $ = e[2], p = e[3];
  return n = s * m + c * q + t * $ + u * p, n < 0 && (n = -n, m = -m, q = -q, $ = -$, p = -p), 1 - n > A() ? (i = Math.acos(n), h = Math.sin(i), f = Math.sin((1 - r) * i) / h, l = Math.sin(r * i) / h) : (f = 1 - r, l = r), a[0] = f * s + l * m, a[1] = f * c + l * q, a[2] = f * t + l * $, a[3] = f * u + l * p, a;
}
function aa(a) {
  const o = J, e = o(), r = o(), s = o(), c = Math.sqrt(1 - e), t = Math.sqrt(e);
  return a[0] = c * Math.sin(2 * Math.PI * r), a[1] = c * Math.cos(2 * Math.PI * r), a[2] = t * Math.sin(2 * Math.PI * s), a[3] = t * Math.cos(2 * Math.PI * s), a;
}
function oa(a, o) {
  const e = o[0], r = o[1], s = o[2], c = o[3], t = e * e + r * r + s * s + c * c, u = t ? 1 / t : 0;
  return a[0] = -e * u, a[1] = -r * u, a[2] = -s * u, a[3] = c * u, a;
}
function ra(a, o) {
  return a[0] = -o[0], a[1] = -o[1], a[2] = -o[2], a[3] = o[3], a;
}
function z(a, o) {
  const e = o[0] + o[4] + o[8];
  let r;
  if (e > 0) r = Math.sqrt(e + 1), a[3] = 0.5 * r, r = 0.5 / r, a[0] = (o[5] - o[7]) * r, a[1] = (o[6] - o[2]) * r, a[2] = (o[1] - o[3]) * r;
  else {
    let s = 0;
    o[4] > o[0] && (s = 1), o[8] > o[3 * s + s] && (s = 2);
    const c = (s + 1) % 3, t = (s + 2) % 3;
    r = Math.sqrt(o[3 * s + s] - o[3 * c + c] - o[3 * t + t] + 1), a[s] = 0.5 * r, r = 0.5 / r, a[3] = (o[3 * c + t] - o[3 * t + c]) * r, a[c] = (o[3 * c + s] + o[3 * s + c]) * r, a[t] = (o[3 * t + s] + o[3 * s + t]) * r;
  }
  return a;
}
function sa(a, o, e, r) {
  const s = 0.5 * Math.PI / 180;
  o *= s, e *= s, r *= s;
  const c = Math.sin(o), t = Math.cos(o), u = Math.sin(e), i = Math.cos(e), n = Math.sin(r), h = Math.cos(r);
  return a[0] = c * i * h - t * u * n, a[1] = t * u * h + c * i * n, a[2] = t * i * n - c * u * h, a[3] = t * i * h + c * u * n, a;
}
function ea(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
const ca = O, ta = S, ua = T, ia = j, na = Y, ha = w, Ma = B, E = C, fa = E, v = D, la = v, y = F, ma = G, qa = H;
function $a(a, o, e) {
  const r = W(o, e);
  return r < -0.999999 ? (g(M, pa, o), X(M) < 1e-6 && g(M, da, o), Z(M, M), b(a, M, Math.PI), a) : r > 0.999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (g(M, o, e), a[0] = M[0], a[1] = M[1], a[2] = M[2], a[3] = 1 + r, y(a, a));
}
const M = k(), pa = _(1, 0, 0), da = _(0, 1, 0);
function ga(a, o, e, r, s, c) {
  return d(I, o, s, c), d(P, e, r, c), d(a, I, P, 2 * c * (1 - c)), a;
}
const I = x(), P = x();
function ya(a, o, e, r) {
  const s = Ia;
  return s[0] = e[0], s[3] = e[1], s[6] = e[2], s[1] = r[0], s[4] = r[1], s[7] = r[2], s[2] = -o[0], s[5] = -o[1], s[8] = -o[2], y(a, z(a, s));
}
const Ia = L();
Object.freeze(Object.defineProperty({ __proto__: null, add: ua, calculateW: V, conjugate: ra, copy: ca, dot: ha, equals: qa, exactEquals: ma, fromEuler: sa, fromMat3: z, getAxisAngle: N, identity: K, invert: oa, len: fa, length: E, lerp: Ma, mul: ia, multiply: j, normalize: y, random: aa, rotateX: Q, rotateY: R, rotateZ: U, rotationTo: $a, scale: na, set: ta, setAxes: ya, setAxisAngle: b, slerp: d, sqlerp: ga, sqrLen: la, squaredLength: v, str: ea }, Symbol.toStringTag, { value: "Module" }));
export {
  b as I,
  ma as N,
  ra as O,
  sa as T,
  ta as X,
  N as v,
  j as x
};
//# sourceMappingURL=quat-B5xJQUKj.js.map
