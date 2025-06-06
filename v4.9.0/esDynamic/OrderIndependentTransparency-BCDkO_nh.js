import { N as f, S as p, T as _, R as r, O as c } from "./enums-Do5C4ZjN.js";
import { e as u } from "./basicInterfaces-DTnusSyV.js";
function g(t, e, n = _.ADD, i = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: t, dstRgb: e, dstAlpha: e, opRgb: n, opAlpha: n, color: { r: i[0], g: i[1], b: i[2], a: i[3] } };
}
function N(t, e, n, i, h = _.ADD, C = _.ADD, o = [0, 0, 0, 0]) {
  return { srcRgb: t, srcAlpha: e, dstRgb: n, dstAlpha: i, opRgb: h, opAlpha: C, color: { r: o[0], g: o[1], b: o[2], a: o[3] } };
}
const B = { face: f.BACK, mode: p.CCW }, D = { face: f.FRONT, mode: p.CCW }, it = (t) => t === u.Back ? B : t === u.Front ? D : null, nt = { zNear: 0, zFar: 1 }, st = { r: !0, g: !0, b: !0, a: !0 };
function R(t) {
  return L.intern(t);
}
function y(t) {
  return M.intern(t);
}
function $(t) {
  return U.intern(t);
}
function m(t) {
  return H.intern(t);
}
function F(t) {
  return K.intern(t);
}
function E(t) {
  return j.intern(t);
}
function P(t) {
  return x.intern(t);
}
function k(t) {
  return q.intern(t);
}
function z(t) {
  return G.intern(t);
}
function lt(t) {
  return Q.intern(t);
}
class s {
  constructor(e, n) {
    this._makeKey = e, this._makeRef = n, this._interns = /* @__PURE__ */ new Map();
  }
  intern(e) {
    if (!e) return null;
    const n = this._makeKey(e), i = this._interns;
    return i.has(n) || i.set(n, this._makeRef(e)), i.get(n) ?? null;
  }
}
function l(t) {
  return "[" + t.join(",") + "]";
}
const L = new s(v, (t) => ({ __tag: "Blending", ...t }));
function v(t) {
  return t ? l([t.srcRgb, t.srcAlpha, t.dstRgb, t.dstAlpha, t.opRgb, t.opAlpha, t.color.r, t.color.g, t.color.b, t.color.a]) : null;
}
const M = new s(S, (t) => ({ __tag: "Culling", ...t }));
function S(t) {
  return t ? l([t.face, t.mode]) : null;
}
const U = new s(I, (t) => ({ __tag: "PolygonOffset", ...t }));
function I(t) {
  return t ? l([t.factor, t.units]) : null;
}
const H = new s(W, (t) => ({ __tag: "DepthTest", ...t }));
function W(t) {
  return t ? l([t.func]) : null;
}
const K = new s(T, (t) => ({ __tag: "StencilTest", ...t }));
function T(t) {
  return t ? l([t.function.func, t.function.ref, t.function.mask, t.operation.fail, t.operation.zFail, t.operation.zPass]) : null;
}
const j = new s(b, (t) => ({ __tag: "DepthWrite", ...t }));
function b(t) {
  return t ? l([t.zNear, t.zFar]) : null;
}
const x = new s(O, (t) => ({ __tag: "ColorWrite", ...t }));
function O(t) {
  return t ? l([t.r, t.g, t.b, t.a]) : null;
}
const q = new s(w, (t) => ({ __tag: "StencilWrite", ...t }));
function w(t) {
  return t ? l([t.mask]) : null;
}
const G = new s(A, (t) => ({ __tag: "DrawBuffers", ...t }));
function A(t) {
  return t ? l(t.buffers) : null;
}
const Q = new s(Z, (t) => ({ blending: R(t.blending), culling: y(t.culling), polygonOffset: $(t.polygonOffset), depthTest: m(t.depthTest), stencilTest: F(t.stencilTest), depthWrite: E(t.depthWrite), colorWrite: P(t.colorWrite), stencilWrite: k(t.stencilWrite), drawBuffers: z(t.drawBuffers) }));
function Z(t) {
  return t ? l([v(t.blending), S(t.culling), I(t.polygonOffset), W(t.depthTest), T(t.stencilTest), b(t.depthWrite), O(t.colorWrite), w(t.stencilWrite), A(t.drawBuffers)]) : null;
}
class rt {
  constructor(e) {
    this._pipelineInvalid = !0, this._blendingInvalid = !0, this._cullingInvalid = !0, this._polygonOffsetInvalid = !0, this._depthTestInvalid = !0, this._stencilTestInvalid = !0, this._depthWriteInvalid = !0, this._colorWriteInvalid = !0, this._stencilWriteInvalid = !0, this._drawBuffersInvalid = !0, this._stateSetters = e;
  }
  setPipeline(e) {
    (this._pipelineInvalid || e !== this._pipeline) && (this._setBlending(e.blending), this._setCulling(e.culling), this._setPolygonOffset(e.polygonOffset), this._setDepthTest(e.depthTest), this._setStencilTest(e.stencilTest), this._setDepthWrite(e.depthWrite), this._setColorWrite(e.colorWrite), this._setStencilWrite(e.stencilWrite), this._setDrawBuffers(e.drawBuffers), this._pipeline = e), this._pipelineInvalid = !1;
  }
  invalidateBlending() {
    this._blendingInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateCulling() {
    this._cullingInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidatePolygonOffset() {
    this._polygonOffsetInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDepthTest() {
    this._depthTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateStencilTest() {
    this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDepthWrite() {
    this._depthWriteInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateColorWrite() {
    this._colorWriteInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateStencilWrite() {
    this._stencilTestInvalid = !0, this._pipelineInvalid = !0;
  }
  invalidateDrawBuffers() {
    this._drawBuffersInvalid = !0, this._pipelineInvalid = !0;
  }
  _setBlending(e) {
    this._blending = this._setSubState(e, this._blending, this._blendingInvalid, this._stateSetters.setBlending), this._blendingInvalid = !1;
  }
  _setCulling(e) {
    this._culling = this._setSubState(e, this._culling, this._cullingInvalid, this._stateSetters.setCulling), this._cullingInvalid = !1;
  }
  _setPolygonOffset(e) {
    this._polygonOffset = this._setSubState(e, this._polygonOffset, this._polygonOffsetInvalid, this._stateSetters.setPolygonOffset), this._polygonOffsetInvalid = !1;
  }
  _setDepthTest(e) {
    this._depthTest = this._setSubState(e, this._depthTest, this._depthTestInvalid, this._stateSetters.setDepthTest), this._depthTestInvalid = !1;
  }
  _setStencilTest(e) {
    this._stencilTest = this._setSubState(e, this._stencilTest, this._stencilTestInvalid, this._stateSetters.setStencilTest), this._stencilTestInvalid = !1;
  }
  _setDepthWrite(e) {
    this._depthWrite = this._setSubState(e, this._depthWrite, this._depthWriteInvalid, this._stateSetters.setDepthWrite), this._depthWriteInvalid = !1;
  }
  _setColorWrite(e) {
    this._colorWrite = this._setSubState(e, this._colorWrite, this._colorWriteInvalid, this._stateSetters.setColorWrite), this._colorWriteInvalid = !1;
  }
  _setStencilWrite(e) {
    this._stencilWrite = this._setSubState(e, this._stencilWrite, this._stencilWriteInvalid, this._stateSetters.setStencilWrite), this._stencilTestInvalid = !1;
  }
  _setDrawBuffers(e) {
    this._drawBuffers = this._setSubState(e, this._drawBuffers, this._drawBuffersInvalid, this._stateSetters.setDrawBuffers), this._drawBuffersInvalid = !1;
  }
  _setSubState(e, n, i, h) {
    return (i || e !== n) && (h(e), this._pipelineInvalid = !0), e;
  }
}
class J {
}
const at = J;
function d(t, ...e) {
  let n = "";
  for (let i = 0; i < e.length; i++) n += t[i] + e[i];
  return n += t[t.length - 1], n;
}
(function(t) {
  function e(i) {
    return Math.round(i).toString();
  }
  function n(i) {
    return i.toPrecision(8);
  }
  t.int = e, t.float = n;
})(d || (d = {}));
var a;
(function(t) {
  t[t.Color = 0] = "Color", t[t.Alpha = 1] = "Alpha", t[t.FrontFace = 2] = "FrontFace", t[t.NONE = 3] = "NONE", t[t.COUNT = 4] = "COUNT";
})(a || (a = {}));
const ot = N(r.SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA), V = g(r.ONE, r.ONE), X = g(r.ZERO, r.ONE_MINUS_SRC_ALPHA);
function ht(t) {
  return t === a.FrontFace ? null : t === a.Alpha ? X : V;
}
const _t = 5e5, Y = { factor: -1, units: -2 };
function ct(t) {
  return t ? Y : null;
}
function ut(t, e = c.LESS) {
  return t === a.NONE || t === a.FrontFace ? e : c.LEQUAL;
}
export {
  ht as A,
  rt as G,
  lt as S,
  st as _,
  a,
  nt as b,
  ot as c,
  ct as d,
  _t as e,
  it as h,
  ut as l,
  at as n,
  d as o,
  X as s
};
//# sourceMappingURL=OrderIndependentTransparency-BCDkO_nh.js.map
