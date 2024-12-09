import { cw as C, cx as j, cy as $, cz as h, cA as R, cB as x, aF as k, cC as O, br as v, cD as b, cE as B, a5 as z, cF as Y, cG as D, cH as H, aG as S, cI as I } from "./main-uCo5F72j.js";
import { e as J } from "./mat3f64-Dh9_zhFu.js";
import { o as g, e as W } from "./mat4f64-Dn1WEGBx.js";
import { a as E } from "./spatialReferenceEllipsoidUtils-V3oN7i-5.js";
import { u as G } from "./computeTranslationToOriginAndRotation-qjyqVtJb.js";
import { t as L, o as q } from "./DoubleArray-BVVPIBFK.js";
import { i as P, T as y } from "./BufferView-D6fdTJk7.js";
import { f as K, l as V, e as w } from "./vec3-BLlK2NIY.js";
import { n as Q } from "./vec4-C42wU6Ck.js";
const fr = "Projection may be possible after calling projection.load().";
function lr(r, o, t, e) {
  r.error(`Failed to project from (wkid:${o.wkid}) to (wkid:${t.wkid}).${e ? " " : ""}${e}`);
}
function ur(r, o, t, e, n) {
  return M(T.TO_PCPF, P.fromTypedArray(r), m.NORMAL, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n)) ? n : null;
}
function pr(r, o, t, e, n) {
  return M(T.FROM_PCPF, P.fromTypedArray(r), m.NORMAL, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n)) ? n : null;
}
function mr(r, o, t) {
  return C(r, o, 0, t, E(o), 0, r.length / 3) ? t : null;
}
function Tr(r, o, t) {
  return C(r, E(t), 0, o, t, 0, r.length / 3) ? o : null;
}
function Pr(r, o, t) {
  return j(c, t), K(o, r, c), $(c) && V(o, o), o;
}
function yr(r, o, t) {
  return h(c, t), Q(o, r, c), $(c) && V(o, o, 4), o;
}
function Ar(r, o, t, e, n) {
  if (!M(T.TO_PCPF, P.fromTypedArray(r, 4 * Float32Array.BYTES_PER_ELEMENT), m.TANGENT, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n, 4 * Float32Array.BYTES_PER_ELEMENT))) return null;
  for (let i = 3; i < r.length; i += 4) n[i] = r[i];
  return n;
}
function Fr(r, o, t, e, n) {
  if (!M(T.FROM_PCPF, P.fromTypedArray(r, 16), m.TANGENT, y.fromTypedArray(o), y.fromTypedArray(t), e, P.fromTypedArray(n, 16))) return null;
  for (let i = 3; i < r.length; i += 4) n[i] = r[i];
  return n;
}
var m, T;
function _(r, o, t, e, n) {
  switch (G(e, t, p, e), r === T.FROM_PCPF && I(p, p), o) {
    case m.NORMAL:
      return j(n, p);
    case m.TANGENT:
      return h(n, p);
  }
}
function M(r, o, t, e, n, i, u) {
  if (!o) return;
  const f = e.count, A = E(i);
  if (U(i)) for (let s = 0; s < f; s++) n.getVec(s, N), o.getVec(s, l), R(l, l, _(r, t, N, A, c)), u.setVec(s, l);
  else for (let s = 0; s < f; s++) {
    n.getVec(s, N), o.getVec(s, l);
    const F = x(e.get(s, 1));
    let a = Math.cos(F);
    t === m.TANGENT != (r === T.TO_PCPF) && (a = 1 / a), _(r, t, N, A, c), r === T.TO_PCPF ? (c[0] *= a, c[1] *= a, c[2] *= a, c[3] *= a, c[4] *= a, c[5] *= a) : (c[0] *= a, c[3] *= a, c[6] *= a, c[1] *= a, c[4] *= a, c[7] *= a), R(l, l, c), k(l, l), u.setVec(s, l);
  }
  return u;
}
function dr(r) {
  return r.vertexSpace.type === "local" ? X(r) : Z(r);
}
function X({ vertexSpace: r, transform: o, inSpatialReference: t, outSpatialReference: e, localMode: n, outPositions: i, positions: u }) {
  const f = r.origin ?? O, A = r.origin != null ? o?.localMatrix ?? g : g, s = E(t), F = e.isWebMercator && n || !v(t, s) ? t : s;
  G(t, f, p, F), b(p, p, A);
  const a = i ?? L(u.length);
  return w(a, u, p), C(a, F, 0, a, e, 0, a.length / 3), a;
}
function Z({ vertexSpace: r, transform: o, outPositions: t, positions: e, inSpatialReference: n, outSpatialReference: i }) {
  const u = r.origin != null ? o?.localMatrix ?? g : g, f = t ?? L(e.length);
  B(u, g) ? q(f, e) : w(f, e, u);
  const A = r.origin ?? O;
  if (!z(A, O)) {
    const [s, F, a] = A;
    for (let d = 0; d < f.length; d += 3) f[d] += s, f[d + 1] += F, f[d + 2] += a;
  }
  return C(f, n, 0, f, i, 0, f.length / 3) ? f : null;
}
function U(r) {
  return r.isWGS84 || Y(r) || D(r) || H(r);
}
(function(r) {
  r[r.NORMAL = 0] = "NORMAL", r[r.TANGENT = 1] = "TANGENT";
})(m || (m = {})), function(r) {
  r[r.TO_PCPF = 0] = "TO_PCPF", r[r.FROM_PCPF = 1] = "FROM_PCPF";
}(T || (T = {}));
const N = S(), l = S(), p = W(), c = J();
export {
  m as VectorType,
  fr as loadProjectErrorMessage,
  lr as logProjectionError,
  dr as project,
  Tr as projectFromPCPF,
  pr as projectNormalFromPCPF,
  ur as projectNormalToPCPF,
  Fr as projectTangentFromPCPF,
  Ar as projectTangentToPCPF,
  mr as projectToPCPF,
  Pr as transformNormal,
  yr as transformTangent
};
//# sourceMappingURL=projection-CFWVRG3J.js.map
