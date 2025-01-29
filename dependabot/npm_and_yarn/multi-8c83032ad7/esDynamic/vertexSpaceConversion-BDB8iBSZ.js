import { br as I, cw as J, g3 as L, aG as b, g4 as V, g5 as Y, g6 as M, cD as T, g7 as B, cI as h, cx as K, f7 as Q, g8 as W, D as X, dG as Z, en as _ } from "./main-C4pF0E7B.js";
import { e as nn } from "./mat3f64-Dh9_zhFu.js";
import { o as tn, e as E } from "./mat4f64-Dn1WEGBx.js";
import { a as x } from "./spatialReferenceEllipsoidUtils-D8TeGUPE.js";
import { u as F } from "./computeTranslationToOriginAndRotation-dZmhvdHy.js";
import { m as rn } from "./meshVertexSpaceUtils-DckI93UJ.js";
import { i as v, e as S, f as z } from "./vec3-DEuDuvXy.js";
import { logProjectionError as $, transformNormal as D, transformTangent as k, projectFromPCPF as on, projectNormalFromPCPF as en, projectTangentFromPCPF as an, projectToPCPF as ln, projectNormalToPCPF as sn, projectTangentToPCPF as cn } from "./projection-DZLC4pmp.js";
function O(n, t, r, e) {
  if (I(n.spatialReference, r)) {
    w[0] = n.x, w[1] = n.y;
    const a = n.z;
    return w[2] = a ?? e ?? 0, J(w, n.spatialReference, 0, t, r, 0, 1);
  }
  const o = L(n, r);
  return !!o && (t[0] = o?.x, t[1] = o?.y, t[2] = o?.z ?? e ?? 0, !0);
}
const w = b(), g = () => X.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");
function Gn(n, t, { vertexSpace: r, spatialReference: e }) {
  if (r.type === "georeferenced") {
    const u = n;
    if (!O(t, u, e)) return !1;
    const { origin: c } = r;
    return Z(n, u, c), !0;
  }
  const o = x(e), a = n;
  if (!O(t, a, o)) return !1;
  const { origin: i } = r, l = d;
  if (!F(e, i, l, o)) return !1;
  const s = h(d, l);
  return s != null && (_(n, a, s), !0);
}
function Nn(n, t, r) {
  const { vertexSpace: e, transform: o, vertexAttributes: a } = n, i = y(n.spatialReference, r, p.SOURCE | p.TARGET);
  if (rn(e, t) && (!o || V(o.localMatrix, tn)) && Y(i, 1)) {
    const { position: l, normal: s, tangent: u } = a, c = r?.allowBufferReuse;
    return { position: c ? l : l.slice(), normal: c ? s : s?.slice(), tangent: c ? u : u?.slice() };
  }
  switch (n.vertexSpace.type) {
    case "local":
      return t.type === "local" ? mn(n, n.vertexSpace, t.origin, r) : fn(n, n.vertexSpace, t.origin, r);
    case "georeferenced":
      return t.type === "local" ? gn(n, n.vertexSpace, t.origin, r) : un(n, n.vertexSpace, t.origin, r);
  }
}
function un({ vertexAttributes: n, transform: t, spatialReference: r }, { origin: e }, o, a) {
  const { position: i, normal: l, tangent: s } = t ? P(n, t.localMatrix) : n, u = new Float64Array(i.length);
  let c = i;
  if (e && (c = v(u, c, e)), o) {
    const A = M(H, o);
    c = v(u, c, A);
  }
  y(r, a, p.NONE);
  const m = a?.allowBufferReuse;
  return { position: c !== n.position || m ? c : c.slice(), normal: l !== n.normal || m ? l : l?.slice(), tangent: s !== n.tangent || m ? s : s?.slice() };
}
function fn({ spatialReference: n, vertexAttributes: t, transform: r }, { origin: e }, o, a) {
  const i = x(n);
  if (!F(n, e, f, i)) return $(g(), n, i), null;
  r && T(f, f, r.localMatrix), q(f, n, a, p.SOURCE);
  const l = new Float64Array(t.position.length), s = $n(t.position, f, n, l);
  if (!s) return null;
  const u = xn(s, l, t.normal, f, n);
  if (t.normal && !u) return null;
  const c = An(s, l, t.tangent, f, n);
  if (t.tangent && !c) return null;
  if (o) {
    const m = M(H, o);
    v(s, s, m);
  }
  return { position: s, normal: u, tangent: c };
}
function gn({ vertexAttributes: n, spatialReference: t, transform: r }, { origin: e }, o, a) {
  const i = x(t);
  if (!F(t, o, f, i)) return $(g(), t, i), null;
  const l = 1 / y(t, a, p.TARGET);
  B(f, f, [l, l, l]);
  const s = h(R, f), { position: u, normal: c, tangent: m } = pn(n, e, r), A = new Float64Array(u.length), C = Rn(u, t, s, A);
  if (!C) return null;
  const j = K(wn, s), G = Fn(c, u, A, t, j, c !== n.normal ? c : void 0);
  if (!G && c) return null;
  const N = vn(m, u, A, t, j, m !== n.tangent ? m : void 0);
  return !N && m ? null : { position: C, normal: G, tangent: N };
}
function pn(n, t, r) {
  if (!t) return n;
  if (!r) {
    const { position: o, normal: a, tangent: i } = n;
    return { position: v(new Float64Array(o.length), o, t), tangent: i, normal: a };
  }
  const e = P(n, r.localMatrix);
  return v(e.position, e.position, t), e;
}
function mn({ vertexAttributes: n, spatialReference: t, transform: r }, { origin: e }, o, a) {
  const i = x(t);
  if (!F(t, e, f, i)) return $(g(), t, i), null;
  if (r && T(f, f, r.localMatrix), !F(t, o, R, i)) return $(g(), i, t), null;
  h(R, R);
  const l = T(f, R, f);
  return q(l, t, a, p.SOURCE | p.TARGET), P(n, l);
}
function P(n, t) {
  const r = new Float64Array(n.position.length);
  S(r, n.position, t);
  const e = n.normal ? new Float32Array(n.normal.length) : null, o = n.tangent ? new Float32Array(n.tangent.length) : null;
  return e && n.normal && D(n.normal, e, t), o && n.tangent && k(n.tangent, o, t), { position: r, normal: e, tangent: o };
}
function $n(n, t, r, e) {
  S(e, n, t);
  const o = new Float64Array(n.length);
  return on(e, o, r) ? o : ($(g(), x(r), r), null);
}
function xn(n, t, r, e, o) {
  if (r == null) return null;
  const a = new Float32Array(r.length);
  return D(r, a, e), en(a, n, t, o, a) ? a : ($(g(), x(o), o), null);
}
function An(n, t, r, e, o) {
  if (r == null) return null;
  const a = new Float32Array(r.length);
  return k(r, a, e), an(a, n, t, o, a) ? a : ($(g(), x(o), o), null);
}
function q(n, t, r, e) {
  const o = y(t, r, e);
  o !== 1 && B(n, n, [o, o, o]);
}
function y(n, t, r) {
  const e = !!(r & p.SOURCE), o = !!(r & p.TARGET), a = t?.sourceUnit, i = t?.targetUnit;
  if (!a && !i) return 1;
  let l = U(a, n);
  !e && a && l !== 1 && (g().warn("source unit conversion not supported"), l = 1);
  let s = 1 / U(i, n);
  return !o && i && s !== 1 && (g().warn("target unit conversion not supported"), s = 1), l * s;
}
function Rn(n, t, r, e) {
  const o = ln(n, t, e);
  if (!o) return $(g(), t, x(t)), null;
  const a = new Float64Array(o.length);
  return S(a, o, r), a;
}
function Fn(n, t, r, e, o, a) {
  if (n == null) return null;
  const i = a ?? new Float32Array(n.length);
  return sn(n, t, r, e, i) ? (z(i, i, o), i) : ($(g(), e, x(e)), null);
}
function vn(n, t, r, e, o, a) {
  if (n == null) return null;
  const i = a ?? new Float32Array(n.length);
  return cn(n, t, r, e, i) ? (z(i, i, o, 4), i) : ($(g(), e, x(e)), null);
}
function U(n, t) {
  if (n == null) return 1;
  const r = Q(t);
  return 1 / W(r, "meters", n);
}
const f = E(), R = E(), wn = nn(), H = b(), d = E();
var p;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.SOURCE = 1] = "SOURCE", n[n.TARGET = 2] = "TARGET";
})(p || (p = {}));
export {
  Nn as M,
  Gn as N,
  U as X,
  O as c
};
//# sourceMappingURL=vertexSpaceConversion-BDB8iBSZ.js.map
