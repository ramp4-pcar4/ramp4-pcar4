import { cq as Oe, iQ as Se, df as fe, iR as je, iS as Ee, hQ as Ne, hs as ze, N as h, O as d, P as Ge, b_ as Le, ci as D, iT as Ve, cj as Ie, cp as C, iU as We, iV as pe, ez as K, iW as Be, a7 as Ue, C as k, eA as N, iX as ee, ft as te, fs as re, iY as ke, ch as qe, iZ as Ye, i_ as He, i$ as Qe, iM as G, j0 as ge, j1 as De, eS as Xe, j2 as Ze, hD as ne, j3 as Je, hu as Ke, bb as et, j4 as tt } from "./main-DIdq27YS.js";
import { e as ye } from "./mat3f64-Dh9_zhFu.js";
import { e as b, o as j } from "./mat4f64-Dn1WEGBx.js";
import { a as R, R as z } from "./computeTranslationToOriginAndRotation-aMlPBrn4.js";
import { t as oe, o as rt } from "./DoubleArray-Do7o-QA5.js";
import { v as me, I as q, x as nt } from "./quat-CigH0GUA.js";
import { e as X } from "./quatf64-DxbQqBtW.js";
import { g as L, f as ot, u as he } from "./meshVertexSpaceUtils-Z9FlM5aU.js";
import { n as T, s as $e, i as at, r as w } from "./vec3-D3PXDBov.js";
import { i as $, T as A } from "./BufferView-B9XykK65.js";
function P(e = Pe) {
  return [e[0], e[1], e[2], e[3]];
}
function E(e, t, r = P()) {
  return Oe(r, e), r[3] = t, r;
}
function Gt(e, t = P()) {
  const r = Se(v, e);
  return Ae(t, fe(me(t, r))), t;
}
function ae(e, t, r = P()) {
  return q(v, e, Y(e)), q(ie, t, Y(t)), nt(v, ie, v), Ae(r, fe(me(r, v)));
}
function Lt(e, t, r, n = P()) {
  return E(je, e, _), E(Ee, t, se), E(Ne, r, le), ae(_, se, _), ae(_, le, n), n;
}
function Vt(e) {
  return e;
}
function it(e) {
  return e[3];
}
function Y(e) {
  return ze(e[3]);
}
function Ae(e, t) {
  return e[3] = t, e;
}
const Pe = [0, 0, 1, 0], v = X(), ie = X();
P();
const _ = P(), se = P(), le = P();
var H;
let y = H = class extends Le {
  constructor(e) {
    super(e), this.translation = D(), this.rotationAxis = Ve(Pe), this.rotationAngle = 0, this.scale = Ie(1, 1, 1);
  }
  get rotation() {
    return E(this.rotationAxis, this.rotationAngle);
  }
  set rotation(e) {
    this.rotationAxis = C(e), this.rotationAngle = it(e);
  }
  get localMatrix() {
    const e = b();
    return q(ce, this.rotation, Y(this.rotation)), We(e, ce, this.translation, this.scale), e;
  }
  get localMatrixInverse() {
    return pe(b(), this.localMatrix);
  }
  applyLocal(e, t) {
    return K(t, e, this.localMatrix);
  }
  applyLocalInverse(e, t) {
    return K(t, e, this.localMatrixInverse);
  }
  equals(e) {
    return this === e || e != null && Be(this.localMatrix, e.localMatrix);
  }
  clone() {
    const e = { translation: C(this.translation), rotationAxis: C(this.rotationAxis), rotationAngle: this.rotationAngle, scale: C(this.scale) };
    return new H(e);
  }
};
h([d({ type: [Number], nonNullable: !0, json: { write: !0 } })], y.prototype, "translation", void 0), h([d({ type: [Number], nonNullable: !0, json: { write: !0 } })], y.prototype, "rotationAxis", void 0), h([d({ type: Number, nonNullable: !0, json: { write: !0 } })], y.prototype, "rotationAngle", void 0), h([d({ type: [Number], nonNullable: !0, json: { write: !0 } })], y.prototype, "scale", void 0), h([d()], y.prototype, "rotation", null), h([d()], y.prototype, "localMatrix", null), h([d()], y.prototype, "localMatrixInverse", null), y = H = h([Ge("esri.geometry.support.MeshTransform")], y);
const ce = X(), ue = y;
function xe(e, t) {
  return e.isGeographic || e.isWebMercator && (t ?? !0);
}
function de(e, t) {
  switch (e.type) {
    case "georeferenced":
      return t.isGeographic;
    case "local":
      return t.isGeographic || t.isWebMercator;
  }
}
function It(e, t, r, n) {
  if (n !== void 0) {
    Ue(k.getLogger(e), "option: geographic", { replacement: "use mesh vertexSpace and spatial reference to control how operations are performed", version: "4.29", warnOnce: !0 });
    const o = t.type === "local";
    if (!L(t) || n === o)
      return r.isGeographic || r.isWebMercator && n;
    k.getLogger(e).warnOnce(`Specifying the 'geographic' parameter (${n}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`);
  }
  return de(t, r);
}
const V = () => k.getLogger("esri.geometry.support.meshUtils.normalProjection");
function st(e, t, r, n, o) {
  return W(n) ? (I(m.TO_PCPF, $.fromTypedArray(e), A.fromTypedArray(t), A.fromTypedArray(r), n, $.fromTypedArray(o)), o) : (V().error("Cannot convert spatial reference to PCPF"), o);
}
function lt(e, t, r, n, o) {
  return W(n) ? (I(m.FROM_PCPF, $.fromTypedArray(e), A.fromTypedArray(t), A.fromTypedArray(r), n, $.fromTypedArray(o)), o) : (V().error("Cannot convert to spatial reference from PCPF"), o);
}
function ct(e, t, r) {
  return N(e, t, 0, r, R(t), 0, e.length / 3), r;
}
function ut(e, t, r) {
  return N(e, R(r), 0, t, r, 0, e.length / 3), t;
}
function ft(e, t, r) {
  return G(u, r), T(t, e, u), ge(u) || $e(t, t), t;
}
function pt(e, t, r) {
  if (G(u, r), T(t, e, u, 4), ge(u) || $e(t, t, 4), e !== t) for (let n = 3; n < e.length; n += 4) t[n] = e[n];
  return t;
}
function gt(e, t, r, n, o) {
  if (!W(n)) return V().error("Cannot convert spatial reference to PCPF"), o;
  I(m.TO_PCPF, $.fromTypedArray(e, 4 * Float32Array.BYTES_PER_ELEMENT), A.fromTypedArray(t), A.fromTypedArray(r), n, $.fromTypedArray(o, 4 * Float32Array.BYTES_PER_ELEMENT));
  for (let a = 3; a < e.length; a += 4) o[a] = e[a];
  return o;
}
function yt(e, t, r, n, o) {
  if (!W(n)) return V().error("Cannot convert to spatial reference from PCPF"), o;
  I(m.FROM_PCPF, $.fromTypedArray(e, 16), A.fromTypedArray(t), A.fromTypedArray(r), n, $.fromTypedArray(o, 16));
  for (let a = 3; a < e.length; a += 4) o[a] = e[a];
  return o;
}
function I(e, t, r, n, o, a) {
  if (!t) return;
  const l = r.count, c = R(o);
  if (Fe(o)) for (let i = 0; i < l; i++) n.getVec(i, O), t.getVec(i, g), z(c, O, S, c), ee(u, S), e === m.FROM_PCPF && te(u, u), re(g, g, u), a.setVec(i, g);
  else for (let i = 0; i < l; i++) {
    n.getVec(i, O), t.getVec(i, g), z(c, O, S, c), ee(u, S);
    const s = ke(r.get(i, 1));
    let f = Math.cos(s);
    e === m.TO_PCPF && (f = 1 / f), u[0] *= f, u[1] *= f, u[2] *= f, u[3] *= f, u[4] *= f, u[5] *= f, e === m.FROM_PCPF && te(u, u), re(g, g, u), qe(g, g), a.setVec(i, g);
  }
  return a;
}
function W(e) {
  return Fe(e) || mt(e);
}
function Fe(e) {
  return e.isWGS84 || Ye(e) || He(e) || Qe(e);
}
function mt(e) {
  return e.isWebMercator;
}
var m;
(function(e) {
  e[e.TO_PCPF = 0] = "TO_PCPF", e[e.FROM_PCPF = 1] = "FROM_PCPF";
})(m || (m = {}));
const O = D(), g = D(), S = b(), u = ye();
function Z(e, t, r) {
  return xe(t.spatialReference, r?.geographic) ? J(e, t, !1, r) : Pt(e, t, r);
}
function Te(e, t = j) {
  const { position: r, normal: n, tangent: o } = e;
  return { position: w(new Float64Array(r.length), r, t), normal: n != null ? ft(n, new Float32Array(n.length), t) : null, tangent: o != null ? pt(o, new Float32Array(o.length), t) : null };
}
function Me(e, t, r, n) {
  const { position: o, normal: a, tangent: l } = e;
  if (!L(t)) return { position: o, normal: a, tangent: l };
  const c = he(t, n);
  return Z(Te(e, r?.localMatrix), c, { geographic: t.type === "local" });
}
function ht(e, t, r) {
  const n = ot(t, r), o = t.spatialReference, a = L(n);
  if (!a) return { vertexAttributes: Z(e, t, r), vertexSpace: n, transform: null };
  const { position: l, normal: c, tangent: i } = e, s = de(n, o);
  switch (n.type) {
    case "georeferenced":
      return s ? { vertexAttributes: J(e, t, a, r), vertexSpace: n, transform: null } : { vertexAttributes: { position: l, normal: c, tangent: i }, vertexSpace: n, transform: new ue() };
    case "local":
      return { vertexAttributes: { position: l, normal: c, tangent: i }, vertexSpace: n, transform: new ue() };
  }
}
function Q(e, t, r) {
  return xe(t.spatialReference, r?.geographic) ? be(e, t, r) : ve(e, t, r);
}
function $t(e, t, r, n, o) {
  if (!L(t)) return Q(e, n, o);
  const { spatialReference: a } = n, l = Me(e, t, r, a);
  return n.equals(he(t, a)) ? ve(l, n, o) : Q(l, n, o);
}
function At({ positions: e, transform: t, vertexSpace: r, inSpatialReference: n, outSpatialReference: o, outPositions: a, localMode: l }) {
  const c = r.origin ?? ne, i = r.origin != null ? t?.localMatrix ?? j : j;
  if (r.type === "georeferenced") {
    const p = a ?? oe(e.length);
    if (Je(i, j) ? rt(p, e) : w(p, e, i), !Ke(c, ne)) {
      const [U, Ce, _e] = c;
      for (let M = 0; M < p.length; M += 3) p[M] += U, p[M + 1] += Ce, p[M + 2] += _e;
    }
    return N(p, n, 0, p, o, 0, p.length / 3), p;
  }
  let s = n;
  const f = R(n);
  s = o.isWebMercator && l || !et(n, f) ? s : f, z(n, c, F, s), tt(F, F, i);
  const x = a ?? oe(e.length);
  return w(x, e, F), N(x, s, 0, x, o, 0, x.length / 3), x;
}
function Pt(e, t, r) {
  const n = new Float64Array(e.position.length), o = e.position, a = t.x, l = t.y, c = t.z ?? 0, i = B(r ? r.unit : null, t.spatialReference);
  for (let s = 0; s < o.length; s += 3) n[s] = o[s] * i + a, n[s + 1] = o[s + 1] * i + l, n[s + 2] = o[s + 2] * i + c;
  return { position: n, normal: e.normal, tangent: e.tangent };
}
function J(e, t, r, n) {
  const o = t.spatialReference, a = we(t, n, F), l = new Float64Array(e.position.length), c = xt(e.position, a, o, l), i = G(Re, a), s = dt(c, l, e.normal, i, o), f = Ft(c, l, e.tangent, i, o);
  if (r) {
    const { x, y: p, z: U } = t;
    at(c, c, [-x, -p, -(U ?? 0)]);
  }
  return { position: c, normal: s, tangent: f };
}
function xt(e, t, r, n) {
  w(n, e, t);
  const o = new Float64Array(e.length);
  return ut(n, o, r);
}
function dt(e, t, r, n, o) {
  if (r == null) return null;
  const a = new Float32Array(r.length);
  return T(a, r, n), lt(a, e, t, o, a), a;
}
function Ft(e, t, r, n, o) {
  if (r == null) return null;
  const a = new Float32Array(r.length);
  T(a, r, n, 4);
  for (let l = 3; l < a.length; l += 4) a[l] = r[l];
  return yt(a, e, t, o, a), a;
}
function ve(e, t, r) {
  const n = new Float64Array(e.position.length), o = e.position, a = t.x, l = t.y, c = t.z ?? 0, i = B(r ? r.unit : null, t.spatialReference);
  for (let s = 0; s < o.length; s += 3) n[s] = (o[s] - a) / i, n[s + 1] = (o[s + 1] - l) / i, n[s + 2] = (o[s + 2] - c) / i;
  return { position: n, normal: e.normal, tangent: e.tangent };
}
function be(e, t, r) {
  const n = t.spatialReference;
  we(t, r, F);
  const o = pe(bt, F), a = new Float64Array(e.position.length), l = Tt(e.position, n, o, a), c = G(Re, o);
  return { position: l, normal: Mt(e.normal, e.position, a, n, c), tangent: vt(e.tangent, e.position, a, n, c) };
}
function we(e, t, r) {
  z(e.spatialReference, [e.x, e.y, e.z ?? 0], r, R(e.spatialReference));
  const n = B(t ? t.unit : null, e.spatialReference);
  return De(r, r, [n, n, n]), r;
}
function Tt(e, t, r, n) {
  const o = ct(e, t, n), a = new Float64Array(o.length);
  return w(a, o, r), a;
}
function Mt(e, t, r, n, o) {
  if (e == null) return null;
  const a = st(e, t, r, n, new Float32Array(e.length));
  return T(a, a, o), a;
}
function vt(e, t, r, n, o) {
  if (e == null) return null;
  const a = gt(e, t, r, n, new Float32Array(e.length));
  return T(a, a, o, 4), a;
}
function B(e, t) {
  if (e == null) return 1;
  const r = Xe(t);
  return 1 / Ze(r, "meters", e);
}
const F = b(), bt = b(), Re = ye(), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyTransform: Te,
  georeference: Z,
  georeferenceApplyTransform: Me,
  georeferenceByTransform: ht,
  georeferenceGlobal: J,
  getUnitScale: B,
  project: At,
  ungeoreference: Q,
  ungeoreferenceByTransform: $t,
  ungeoreferenceGlobal: be
}, Symbol.toStringTag, { value: "Module" }));
export {
  Y as A,
  $t as C,
  ut as E,
  At as G,
  J as I,
  Te as O,
  Me as P,
  be as Q,
  ht as V,
  B as _,
  ct as a,
  P as b,
  It as c,
  ue as d,
  lt as e,
  yt as f,
  Wt as g,
  gt as h,
  st as j,
  Gt as k,
  Lt as w,
  Vt as y
};
//# sourceMappingURL=georeference-CUlKz6iO.js.map
