import { e as O } from "./mat3f64-Dh9_zhFu.js";
import { e as _ } from "./quatf64-DxbQqBtW.js";
import { c2 as b, c3 as v, c4 as S, c5 as T, c6 as Y, c7 as k, c8 as W, c9 as X, ca as Z, cb as w, cc as B, cd as C, ce as D, cf as g, cg as F, ch as G, ci as H, cj as j, ck as J } from "./main-DIdq27YS.js";
function K(a) {
  return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a;
}
function x(a, c, s) {
  s *= 0.5;
  const o = Math.sin(s);
  return a[0] = o * c[0], a[1] = o * c[1], a[2] = o * c[2], a[3] = Math.cos(s), a;
}
function N(a, c) {
  const s = 2 * Math.acos(c[3]), o = Math.sin(s / 2);
  return o > b() ? (a[0] = c[0] / o, a[1] = c[1] / o, a[2] = c[2] / o) : (a[0] = 1, a[1] = 0, a[2] = 0), s;
}
function A(a, c, s) {
  const o = c[0], e = c[1], r = c[2], t = c[3], i = s[0], u = s[1], n = s[2], h = s[3];
  return a[0] = o * h + t * i + e * n - r * u, a[1] = e * h + t * u + r * i - o * n, a[2] = r * h + t * n + o * u - e * i, a[3] = t * h - o * i - e * u - r * n, a;
}
function Q(a, c, s) {
  s *= 0.5;
  const o = c[0], e = c[1], r = c[2], t = c[3], i = Math.sin(s), u = Math.cos(s);
  return a[0] = o * u + t * i, a[1] = e * u + r * i, a[2] = r * u - e * i, a[3] = t * u - o * i, a;
}
function R(a, c, s) {
  s *= 0.5;
  const o = c[0], e = c[1], r = c[2], t = c[3], i = Math.sin(s), u = Math.cos(s);
  return a[0] = o * u - r * i, a[1] = e * u + t * i, a[2] = r * u + o * i, a[3] = t * u - e * i, a;
}
function U(a, c, s) {
  s *= 0.5;
  const o = c[0], e = c[1], r = c[2], t = c[3], i = Math.sin(s), u = Math.cos(s);
  return a[0] = o * u + e * i, a[1] = e * u - o * i, a[2] = r * u + t * i, a[3] = t * u - r * i, a;
}
function V(a, c) {
  const s = c[0], o = c[1], e = c[2];
  return a[0] = s, a[1] = o, a[2] = e, a[3] = Math.sqrt(Math.abs(1 - s * s - o * o - e * e)), a;
}
function d(a, c, s, o) {
  const e = c[0], r = c[1], t = c[2], i = c[3];
  let u, n, h, f, l, m = s[0], $ = s[1], p = s[2], q = s[3];
  return n = e * m + r * $ + t * p + i * q, n < 0 && (n = -n, m = -m, $ = -$, p = -p, q = -q), 1 - n > b() ? (u = Math.acos(n), h = Math.sin(u), f = Math.sin((1 - o) * u) / h, l = Math.sin(o * u) / h) : (f = 1 - o, l = o), a[0] = f * e + l * m, a[1] = f * r + l * $, a[2] = f * t + l * p, a[3] = f * i + l * q, a;
}
function aa(a) {
  const c = J, s = c(), o = c(), e = c(), r = Math.sqrt(1 - s), t = Math.sqrt(s);
  return a[0] = r * Math.sin(2 * Math.PI * o), a[1] = r * Math.cos(2 * Math.PI * o), a[2] = t * Math.sin(2 * Math.PI * e), a[3] = t * Math.cos(2 * Math.PI * e), a;
}
function ca(a, c) {
  const s = c[0], o = c[1], e = c[2], r = c[3], t = s * s + o * o + e * e + r * r, i = t ? 1 / t : 0;
  return a[0] = -s * i, a[1] = -o * i, a[2] = -e * i, a[3] = r * i, a;
}
function oa(a, c) {
  return a[0] = -c[0], a[1] = -c[1], a[2] = -c[2], a[3] = c[3], a;
}
function z(a, c) {
  const s = c[0] + c[4] + c[8];
  let o;
  if (s > 0) o = Math.sqrt(s + 1), a[3] = 0.5 * o, o = 0.5 / o, a[0] = (c[5] - c[7]) * o, a[1] = (c[6] - c[2]) * o, a[2] = (c[1] - c[3]) * o;
  else {
    let e = 0;
    c[4] > c[0] && (e = 1), c[8] > c[3 * e + e] && (e = 2);
    const r = (e + 1) % 3, t = (e + 2) % 3;
    o = Math.sqrt(c[3 * e + e] - c[3 * r + r] - c[3 * t + t] + 1), a[e] = 0.5 * o, o = 0.5 / o, a[3] = (c[3 * r + t] - c[3 * t + r]) * o, a[r] = (c[3 * r + e] + c[3 * e + r]) * o, a[t] = (c[3 * t + e] + c[3 * e + t]) * o;
  }
  return a;
}
function ea(a, c, s, o) {
  const e = 0.5 * Math.PI / 180;
  c *= e, s *= e, o *= e;
  const r = Math.sin(c), t = Math.cos(c), i = Math.sin(s), u = Math.cos(s), n = Math.sin(o), h = Math.cos(o);
  return a[0] = r * u * h - t * i * n, a[1] = t * i * h + r * u * n, a[2] = t * u * n - r * i * h, a[3] = t * u * h + r * i * n, a;
}
function sa(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
const ra = v, ta = S, ia = T, ua = A, na = Y, ha = k, Ma = W, E = X, fa = E, L = Z, la = L, P = w, ma = B, $a = C;
function pa(a, c, s) {
  const o = D(c, s);
  return o < -0.999999 ? (g(M, qa, c), F(M) < 1e-6 && g(M, da, c), G(M, M), x(a, M, Math.PI), a) : o > 0.999999 ? (a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a) : (g(M, c, s), a[0] = M[0], a[1] = M[1], a[2] = M[2], a[3] = 1 + o, P(a, a));
}
const M = H(), qa = j(1, 0, 0), da = j(0, 1, 0);
function ga(a, c, s, o, e, r) {
  return d(y, c, e, r), d(I, s, o, r), d(a, y, I, 2 * r * (1 - r)), a;
}
const y = _(), I = _();
function Pa(a, c, s, o) {
  const e = ya;
  return e[0] = s[0], e[3] = s[1], e[6] = s[2], e[1] = o[0], e[4] = o[1], e[7] = o[2], e[2] = -c[0], e[5] = -c[1], e[8] = -c[2], P(a, z(a, e));
}
const ya = O();
Object.freeze(Object.defineProperty({ __proto__: null, add: ia, calculateW: V, conjugate: oa, copy: ra, dot: ha, equals: $a, exactEquals: ma, fromEuler: ea, fromMat3: z, getAxisAngle: N, identity: K, invert: ca, len: fa, length: E, lerp: Ma, mul: ua, multiply: A, normalize: P, random: aa, rotateX: Q, rotateY: R, rotateZ: U, rotationTo: pa, scale: na, set: ta, setAxes: Pa, setAxisAngle: x, slerp: d, sqlerp: ga, sqrLen: la, squaredLength: L, str: sa }, Symbol.toStringTag, { value: "Module" }));
export {
  x as I,
  ma as N,
  oa as O,
  ea as T,
  ta as X,
  N as v,
  A as x
};
//# sourceMappingURL=quat-CigH0GUA.js.map
