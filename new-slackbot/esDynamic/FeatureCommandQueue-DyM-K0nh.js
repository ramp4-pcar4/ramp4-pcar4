import { g, _ as S, h as qt, P as pe, j as jt, i as j, G as z, m as Q, B as Se, p as n, q as H, H as V, u as Kt, v as Zt, w as A, C as y, S as U, F as yt, x as Ri, y as Te, z as Z, A as Ve, D as je, E as Ke, I as He, L as st, M as _t, N as Xt, O as Yt, a as B, Q as Ii, R as Ci, T as Oi, V as Ei, X as Di, Y as Li, $ as Bi, a0 as ce, a1 as zt, a2 as Qt, a3 as rt, a4 as $t, a5 as Mt, a6 as Pt, a7 as D, a8 as Jt, a9 as ei, aa as at, ab as ki, ac as le, ad as Ft, ae as ot, af as ti, ag as Ni, ah as Ui, ai as Ye, aj as Hi, ak as Wi, al as Gi, am as qi, an as ji, ao as ii, ap as si, aq as ri, ar as ai, as as oi, at as ni, au as bt, av as li, aw as Ki, ax as Tt, ay as nt, az as ui, aA as lt, aB as Qe, aC as Zi, aD as Xi, aE as Yi, aF as Qi, aG as Ji, aH as es, aI as ts, aJ as is, aK as ss, aL as rs, aM as as, aN as os, aO as ns, aP as re, aQ as he, aR as ae, aS as $e, aT as ls, K as us, d as cs } from "./UpdateTracking2D-ZVrlw9Xv.js";
import { N as c, oq as R, kn as ps, s as De, h0 as At, C as ci, kK as ds, le as vt, j9 as Rt, cP as xe, ba as hs, nZ as fs, or as ms, b6 as ys, mz as bs } from "./main-BpIyUAdL.js";
import { a as N, K as It, L as vs, d as Ct, u as gs, i as xs } from "./definitions-7ZaZRHRo.js";
import { E as we, S as de, f as ut, m as F, c as E, y as I, M as L, d as ws, e as W, w as Ze, L as Oe } from "./Container-CTNRgS-d.js";
import { C as X, F as Ot, L as _e, D as ct, B as pi, E as Ss, U as We, _ as pt, G as fe, P as Et, O as Vs, I as Je } from "./enums-Do5C4ZjN.js";
import { h as Dt, s as _s, i as di, x as hi } from "./Program-B2kWsUYK.js";
import { o as zs } from "./ProgramTemplate-Dd0nPn23.js";
import { t as $s } from "./VertexElementDescriptor-BAy1DPb3.js";
import { a as fi } from "./LabelMetric-Bulm-o4f.js";
import { e as Ge, m as mi } from "./Texture-DagG5chw.js";
import { o as Ms } from "./constants-DVpDF9P6.js";
import { c as Lt } from "./WGLContainer-Bk5jGrnu.js";
let k = class {
  constructor(e) {
    this.registryName = e, this.postProcessingEnabled = !1, this.overrideStencilRef = null, this.drawPhase = we.MAP | we.HITTEST | we.HIGHLIGHT | we.DEBUG, this.symbologyPlane = de.FILL;
  }
  startup() {
  }
  shutdown(e) {
  }
  postProcess(e, t) {
  }
}, yi = class extends qt {
};
c([g(0, y)], yi.prototype, "pos", void 0);
let Ps = class extends Te {
}, bi = class extends pe {
};
c([S(n)], bi.prototype, "dotSize", void 0);
let Le = class extends pe {
};
c([S(U)], Le.prototype, "locations", void 0), c([S(n)], Le.prototype, "pixelRatio", void 0), c([S(n)], Le.prototype, "tileZoomFactor", void 0);
const Fs = 1e-6;
class ye extends jt {
  vertex(e) {
    const t = new j(1, 0, 0, 0, -1, 0, 0, 1, 1).multiply(new z(e.pos.xy.divide(N), 1)), i = Q(this.draw.locations, t.xy), r = Se(this.instance.dotSize.divide(2), new n(1));
    let a = new n(0);
    a = a.add(H(i.a, new n(Fs)).multiply(2));
    let o = r.add(this.instance.dotSize);
    const l = this.view.displayViewScreenMat3.multiply(new z(e.pos.add(0.5), 1)), u = new V(l.xy, a, 1), p = this.instance.dotSize.divide(o), d = new n(-1).divide(r.divide(o));
    return o = o.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)), { glPosition: u, glPointSize: o, color: i, ratio: p, invEdgeRatio: d };
  }
  fragment(e) {
    const t = Kt(e.glPointCoord.subtract(0.5)).multiply(2), i = Zt(new n(0), new n(1), e.invEdgeRatio.multiply(t.subtract(e.ratio)).add(1)), r = new yt();
    return r.glFragColor = e.color.multiply(i), r;
  }
}
c([S(bi)], ye.prototype, "instance", void 0), c([S(Le)], ye.prototype, "draw", void 0), c([S(Ri)], ye.prototype, "view", void 0), c([R(0, A(yi))], ye.prototype, "vertex", null), c([R(0, A(Ps))], ye.prototype, "fragment", null);
class vi extends je {
}
c([g(3, n)], vi.prototype, "inverseArea", void 0);
let Be = class extends pe {
};
c([S(Z.ofType(V, 2))], Be.prototype, "isActive", void 0), c([S(Z.ofType(V, 8))], Be.prototype, "colors", void 0), c([S(n)], Be.prototype, "dotValue", void 0);
let be = class extends pe {
};
c([S(U)], be.prototype, "dotTexture0", void 0), c([S(U)], be.prototype, "dotTexture1", void 0), c([S(n)], be.prototype, "tileZoomFactor", void 0), c([S(n)], be.prototype, "pixelRatio", void 0), c([S(n)], be.prototype, "tileDotsOverArea", void 0);
let ve = class extends Ke {
  _dotThreshold(e, t, i) {
    return e.divide(t).divide(i);
  }
  vertex(e) {
    const t = new j(2 / N, 0, 0, 0, -2 / N, 0, -1, 1, 1).multiply(new z(e.pos, 1)), i = this.clip(e.id), r = new V(t.xy, i, 1), a = this.storage.getVVData(e.id).multiply(this.instance.isActive.get(0)).multiply(e.inverseArea), o = this.storage.getDataDrivenData0(e.id).multiply(this.instance.isActive.get(1)).multiply(e.inverseArea), l = this.draw.tileZoomFactor.multiply(N).divide(this.draw.pixelRatio), u = this._dotThreshold(a, this.instance.dotValue, this.draw.tileDotsOverArea), p = this._dotThreshold(o, this.instance.dotValue, this.draw.tileDotsOverArea), d = e.pos.add(0.5).divide(l);
    return { glPosition: r, color: new V(0, 0, 0, 0), textureCoords: d, thresholds0: u, thresholds1: p };
  }
  fragment(e) {
    const t = new yt(), i = Q(this.draw.dotTexture0, e.textureCoords), r = Q(this.draw.dotTexture1, e.textureCoords), a = e.thresholds0.subtract(i), o = e.thresholds1.subtract(r);
    let l;
    const u = He.fromColumns(this.instance.colors[0], this.instance.colors[1], this.instance.colors[2], this.instance.colors[3]), p = He.fromColumns(this.instance.colors[4], this.instance.colors[5], this.instance.colors[6], this.instance.colors[7]);
    if (this.blending) {
      const d = H(new n(0), a), h = H(new n(0), o), f = st(d, a).add(st(h, o)), m = H(f, new n(0)), x = new n(1).subtract(m), b = f.add(m), v = a.multiply(d).divide(b), w = o.multiply(h).divide(b), _ = u.multiply(v).add(p.multiply(w));
      l = x.multiply(_);
    } else {
      const d = Se(_t(a), _t(o)), h = H(d, new n(0)), f = new n(1).subtract(h), m = H(d, a), x = H(d, o), b = u.multiply(m).add(p.multiply(x));
      l = f.multiply(b);
    }
    return t.glFragColor = l, t;
  }
  hittest(e) {
    return Xt(this.hittestRequest);
  }
};
c([Ve], ve.prototype, "blending", void 0), c([S(Be)], ve.prototype, "instance", void 0), c([S(be)], ve.prototype, "draw", void 0), c([R(0, A(vi))], ve.prototype, "vertex", null), c([R(0, A(Te))], ve.prototype, "fragment", null);
const dt = { [X.BYTE]: 1, [X.UNSIGNED_BYTE]: 1, [X.SHORT]: 2, [X.UNSIGNED_SHORT]: 2, [X.INT]: 4, [X.UNSIGNED_INT]: 4, [X.FLOAT]: 4 };
let Ts = class {
  constructor(e, t) {
    this._boundPart = null;
    const i = [];
    for (const a of t.vertex) {
      const o = Dt.createVertex(e, Ot.STATIC_DRAW, a);
      i.push(o);
    }
    const r = [];
    for (const a of t.index || []) {
      const o = Dt.createIndex(e, Ot.STATIC_DRAW, a);
      r.push(o);
    }
    this.groups = [];
    for (const a of t.groups) {
      let o;
      if (a.index != null) {
        if (!t.index) throw new Error("No index data.");
        const { BYTES_PER_ELEMENT: f } = t.index[a.index];
        f === 2 ? o = X.UNSIGNED_SHORT : f === 4 && (o = X.UNSIGNED_INT);
      }
      const l = a.index != null ? r[a.index] : null, u = /* @__PURE__ */ new Map(), p = {}, d = {};
      for (const f of a.attributes) {
        const { name: m, count: x, type: b, offset: v, normalized: w, divisor: _, stride: P, vertex: T, location: C } = f, $ = `vertex-buffer-${T}`;
        let K = p[$];
        K || (K = p[$] = []);
        const ue = new $s(m, x, b, v, P, w, _);
        K.push(ue), u.set(m, C), d[$] = i[T];
      }
      const h = new zs(e, u, p, d, l);
      this.groups.push({ ...a, vertexArray: h, locations: u, layout: p, indexing: o });
    }
    this.parts = t.parts;
  }
  bind(e, t) {
    this._boundPart = t;
    const { group: i } = this.parts[this._boundPart], { vertexArray: r } = this.groups[i];
    e.bindVAO(r);
  }
  draw(e) {
    if (this._boundPart == null) throw new Error("Mesh.bind() has not been called.");
    const { start: t, count: i } = this.parts[this._boundPart], { group: r } = this.parts[this._boundPart], { indexing: a, primitive: o } = this.groups[r];
    a ? e.drawElements(o, i, a, t * dt[a]) : e.drawArrays(o, t, i);
  }
  unbind(e) {
    this._boundPart = null, e.bindVAO(null);
  }
  destroy() {
    for (const { vertexArray: e } of this.groups) e.dispose();
  }
}, As = class gi extends Ts {
  static create(e, t) {
    const i = [];
    let { stride: r, hash: a } = t.layout;
    if (r == null) {
      r = 0;
      for (const { count: f, type: m, offset: x } of t.layout.attributes) {
        if (x != null) throw new Error("Stride cannot be computed automatically when attribute offsets are supplied explicitly.");
        r += f * dt[m];
      }
    }
    let o = 0, l = 0;
    for (const { count: f, name: m, offset: x, type: b, normalized: v } of t.layout.attributes) {
      x != null && (l = x);
      const w = { name: m, location: o, vertex: 0, count: f, type: b, offset: l, stride: r, divisor: 0, normalized: v != null && v };
      i.push(w), o++, l += f * dt[b];
    }
    const u = { attributes: i, primitive: t.primitive };
    t.index != null && (u.index = 0);
    let { count: p } = t;
    if (p == null && (p = t.index ? t.index.length : t.vertex.byteLength / r, Math.floor(p) !== p)) throw new Error(`The byte length of vertex data must be an exact multiple of the stride, which is ${r}.`);
    const d = { start: 0, count: p, group: 0, primitive: t.primitive }, h = { vertex: [t.vertex], parts: [d], groups: [u] };
    return t.index != null && (h.index = [t.index]), a == null && (a = fi(i)), new gi(e, h, { hash: a, attributes: i, stride: r });
  }
  constructor(e, t, i) {
    super(e, t), this.layout = i;
  }
  bind(e, t = 0) {
    super.bind(e, t);
  }
}, Rs = class {
  constructor() {
    this._dotTextureSize = 0, this._dotTextures = null, this._dotMesh = null;
  }
  destroy() {
    this._disposeTextures(), this._dotFBO && this._dotFBO.dispose(), this._dotMesh && this._dotMesh.destroy();
  }
  getFBO(e) {
    if (this._dotFBO == null) {
      const t = N, i = N, r = new Ge(t, i);
      r.samplingMode = _e.NEAREST, r.wrapMode = ct.CLAMP_TO_EDGE;
      const a = new _s(e, new di(pi.DEPTH_STENCIL, t, i));
      this._dotFBO = new hi(e, r, a);
    }
    return this._dotFBO;
  }
  getDotDensityMesh(e) {
    if (this._dotMesh == null) {
      const t = N, i = t * t, r = 2, a = new Int16Array(i * r);
      for (let u = 0; u < t; u++) for (let p = 0; p < t; p++) a[r * (p + u * t)] = p, a[r * (p + u * t) + 1] = u;
      const o = [{ count: 2, type: X.UNSIGNED_SHORT, name: "a_position", offset: 0 }], l = { hash: fi(o), attributes: o, stride: 4 };
      this._dotMesh = As.create(e, { primitive: Ss.POINTS, vertex: a, count: i, layout: l });
    }
    return this._dotMesh;
  }
  getDotDensityTextures(e, t, i) {
    if (this._dotTextureSize === t && this._seed === i || (this._disposeTextures(), this._dotTextureSize = t, this._seed = i), this._dotTextures === null) {
      const r = new ps(i);
      this._dotTextures = [this._allocDotDensityTexture(e, t, r), this._allocDotDensityTexture(e, t, r)];
    }
    return this._dotTextures;
  }
  _disposeTextures() {
    if (this._dotTextures) {
      for (let e = 0; e < this._dotTextures.length; e++) this._dotTextures[e].dispose();
      this._dotTextures = null;
    }
  }
  _allocDotDensityTexture(e, t, i) {
    const r = new Float32Array(t * t * 4);
    for (let o = 0; o < r.length; o++) r[o] = i.getFloat();
    const a = new Ge();
    return a.dataType = We.FLOAT, a.samplingMode = _e.NEAREST, a.width = t, a.height = t, new mi(e, a, r);
  }
}, Is = class extends k {
  constructor() {
    super(...arguments), this.shaders = { polygon: new ve(), point: new ye(), fill: new Yt() }, this.meshWriter = B.DotDensityMeshWriter, this._resources = /* @__PURE__ */ new Map();
  }
  render(e, t) {
    ut(e) || F(e) ? this._renderPolygons(e, t) : this._renderDotDensity(e, t);
  }
  _renderPolygons(e, t) {
    const { context: i, painter: r } = e;
    r.setShader({ shader: this.shaders.fill, uniforms: { ...E(e, t.target), visualVariableColor: null, visualVariableOpacity: null }, defines: { ...I(e) }, optionalAttributes: { zoomRange: !1 }, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
  _renderDotDensity(e, t) {
    const { context: i, painter: r, requiredLevel: a } = e, o = t.instance.getInput(), l = this._getOrCreateResourcesRecord(i), u = l.getDotDensityTextures(i, N, o.seed), p = 1 / 2 ** (a - t.target.key.level), d = N, h = d * window.devicePixelRatio * d * window.devicePixelRatio, f = 1 / p * (1 / p), m = o.dotScale ? e.state.scale / o.dotScale : 1, x = o.dotValue * m * f;
    r.setShader({ shader: this.shaders.polygon, uniforms: { ...E(e, t.target), instance: { isActive: o.isActive, colors: o.colors, dotValue: Math.max(1, x) }, draw: { dotTexture0: { unit: It, texture: u[0] }, dotTexture1: { unit: vs, texture: u[1] }, tileZoomFactor: p, pixelRatio: window.devicePixelRatio, tileDotsOverArea: h / (N * window.devicePixelRatio * N * window.devicePixelRatio) } }, defines: { ...I(e), blending: o.blending }, optionalAttributes: {}, useComputeBuffer: !1 }), r.setPipelineState(L(e));
    const b = i.getViewport();
    i.setViewport(0, 0, N, N);
    const v = i.getBoundFramebufferObject(), w = l.getFBO(i);
    i.bindFramebuffer(w), i.setClearColor(0, 0, 0, 0), r.setPipelineState({ color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: !1 }), r.updatePipelineState(i), i.clear(pt.COLOR_BUFFER_BIT), r.submitDraw(i, t), i.bindFramebuffer(v), i.setViewport(b.x, b.y, b.width, b.height);
    const _ = l.getFBO(i).colorTexture;
    r.setShader({ shader: this.shaders.point, uniforms: { view: ws(e, t.target), instance: { dotSize: o.dotSize }, draw: { locations: { unit: It, texture: _ }, tileZoomFactor: 1, pixelRatio: window.devicePixelRatio } }, defines: { ...I(e) }, optionalAttributes: {}, useComputeBuffer: !1 }), r.setPipelineState({ color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: !1 }), r.submitDrawMesh(i, l.getDotDensityMesh(i));
  }
  shutdown(e) {
    super.shutdown(e), this._resources.get(e)?.destroy(), this._resources.delete(e);
  }
  _getOrCreateResourcesRecord(e) {
    let t = this._resources.get(e);
    return t == null && (t = new Rs(), this._resources.set(e, t)), t;
  }
}, Cs = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.ComplexFillMeshWriter, this.shaders = { geometry: new Ii() };
  }
  render(e, t) {
    const { context: i, painter: r } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ze(t.target) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
};
function Ae(s) {
  const e = 1 / s;
  return { antialiasing: e, blur: 0 + e };
}
let Os = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.ComplexOutlineFillMeshWriter, this.shaders = { geometry: new Ci() };
  }
  render(e, t) {
    const { context: i, painter: r, pixelRatio: a } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), antialiasingControls: Ae(a), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ze(t.target) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
}, Es = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.FillMeshWriter, this.shaders = { geometry: new Yt() };
  }
  render(e, t) {
    const { context: i, painter: r } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target) }, defines: I(e), optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
}, Ds = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.OutlineFillMeshWriter, this.shaders = { geometry: new Oi() };
  }
  render(e, t) {
    const { context: i, painter: r, pixelRatio: a } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), antialiasingControls: Ae(a) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
}, Ls = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.PatternFillMeshWriter, this.shaders = { geometry: new Ei() };
  }
  render(e, t) {
    const { context: i, painter: r } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ze(t.target) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
}, Bs = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.PatternOutlineFillMeshWriter, this.shaders = { geometry: new Di() };
  }
  render(e, t) {
    const { context: i, painter: r, pixelRatio: a } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), antialiasingControls: Ae(a), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey), localTileOffset: Ze(t.target) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
}, Bt = class {
  constructor(e, t, i, r) {
    this.dataType = e, this.samplingMode = t, this.pixelFormat = i, this.internalFormat = r;
  }
};
function ks(s, e) {
  const { textureFloat: t, colorBufferFloat: i } = s.capabilities, r = t?.textureFloatLinear, a = i?.textureFloat, o = i?.textureHalfFloat, l = i?.floatBlend, u = s.driverTest.floatBufferBlend.result;
  if (!a && !o) throw new De("heatmap:missing-color-buffer-float", "HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.");
  if (!(l && u || o)) throw new De("heatmap:missing-float-blend", "HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float." + (u ? "" : " This device claims support for EXT_float_blend, but does not actually support it."));
  const p = a && l && u, d = o, h = r, f = !!i?.R32F, m = !!i?.R16F;
  if (p && h) return h || e.warnOnce("Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced."), new Bt(We.FLOAT, h ? _e.LINEAR : _e.NEAREST, f ? fe.RED : fe.RGBA, f ? Et.R32F : fe.RGBA);
  if (d) return new Bt(We.HALF_FLOAT, _e.LINEAR, m ? fe.RED : fe.RGBA, m ? Et.R16F : fe.RGBA);
  throw new De("heatmap:missing-hardware-support", "HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.");
}
const Ns = () => ci.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources");
let Us = class {
  destroy() {
    this._accumulateFramebuffer = At(this._accumulateFramebuffer), this._resolveGradientTexture = At(this._resolveGradientTexture), this._prevGradientHash = null, this._qualityProfile = null;
  }
  get initialized() {
    return this._accumulateFramebuffer != null && this._resolveGradientTexture != null;
  }
  get accumulateFramebuffer() {
    return this._accumulateFramebuffer;
  }
  get resolveGradientTexture() {
    return this._resolveGradientTexture;
  }
  loadQualityProfile(e) {
    if (this._qualityProfile == null) {
      const t = ks(e, Ns());
      this._qualityProfile = { ...t, defines: { usesHalfFloatPrecision: t.dataType !== We.FLOAT } };
    }
    return this._qualityProfile;
  }
  ensureAccumulateFBO(e, t, i) {
    if (this._accumulateFramebuffer == null) {
      const { dataType: r, samplingMode: a, pixelFormat: o, internalFormat: l } = this.loadQualityProfile(e), u = new Ge(t, i);
      u.pixelFormat = o, u.internalFormat = l, u.dataType = r, u.samplingMode = a, u.wrapMode = ct.CLAMP_TO_EDGE;
      const p = new di(pi.DEPTH_STENCIL, t, i);
      this._accumulateFramebuffer = new hi(e, u, p);
    } else {
      const { width: r, height: a } = this._accumulateFramebuffer;
      r === t && a === i || this._accumulateFramebuffer.resize(t, i);
    }
    return this._accumulateFramebuffer;
  }
  ensureResolveGradientTexture(e, t, i) {
    if (this._resolveGradientTexture == null) {
      const r = new Ge();
      r.wrapMode = ct.CLAMP_TO_EDGE, this._resolveGradientTexture = new mi(e, r);
    } else this._prevGradientHash !== t && (this._resolveGradientTexture.resize(i.length / 4, 1), this._resolveGradientTexture.setData(i), this._prevGradientHash = t);
    return this._resolveGradientTexture;
  }
};
function xi(s) {
  return s ? 0.25 : 1;
}
let wi = class extends je {
};
c([g(5, y)], wi.prototype, "offset", void 0);
let Hs = class extends Te {
}, ht = class extends pe {
};
c([S(n)], ht.prototype, "radius", void 0), c([S(n)], ht.prototype, "isFieldActive", void 0);
let Pe = class extends Ke {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = !1;
  }
  vertex(e) {
    const { radius: t, isFieldActive: i } = this.kernelControls, r = e.offset, a = i.multiply(this.storage.getVVData(e.id).x).add(new n(1).subtract(i)), o = this.view.displayViewScreenMat3.multiply(new z(e.pos, 1)).add(this.view.displayViewMat3.multiply(new z(r, 0)).multiply(t)), l = this.clip(e.id);
    return { glPosition: new V(o.xy, l, 1), offset: r, fieldValue: a, color: new V(0), ...this.maybeRunHittest(e, {}, null) };
  }
  fragment(e) {
    const { offset: t, fieldValue: i } = e, r = Kt(t), a = H(r, new n(1)), o = new n(1).subtract(r.multiply(r)), l = o.multiply(o), u = a.multiply(l).multiply(i).multiply(new n(xi(this.usesHalfFloatPrecision)));
    return this.getFragmentOutput(new V(u), e);
  }
  hittest(e) {
    const { viewMat3: t, tileMat3: i } = this.view, r = t.multiply(i).multiply(new z(e.pos, 1));
    return Li(r.xy, this.kernelControls.radius, this.hittestRequest.position);
  }
};
c([Ve], Pe.prototype, "usesHalfFloatPrecision", void 0), c([S(ht)], Pe.prototype, "kernelControls", void 0), c([R(0, A(wi))], Pe.prototype, "vertex", null), c([R(0, A(Hs))], Pe.prototype, "fragment", null);
let Si = class extends qt {
};
c([g(0, y)], Si.prototype, "pos", void 0);
let Ws = class extends Bi {
}, ke = class extends pe {
};
c([S(U)], ke.prototype, "texture", void 0), c([S(y)], ke.prototype, "minAndInvRange", void 0), c([S(n)], ke.prototype, "normalization", void 0);
let Vi = class extends pe {
};
c([S(U)], Vi.prototype, "texture", void 0);
let ge = class extends jt {
  constructor() {
    super(...arguments), this.usesHalfFloatPrecision = !1;
  }
  vertex(e) {
    return { glPosition: new V(e.pos.multiply(2).subtract(1), 1, 1), uv: e.pos };
  }
  fragment(e) {
    const { accumulatedDensity: t, gradient: i } = this;
    let r = Q(t.texture, e.uv).r.multiply(new n(xi(this.usesHalfFloatPrecision)));
    r = r.multiply(t.normalization), r = r.subtract(t.minAndInvRange.x).multiply(t.minAndInvRange.y);
    const a = Q(i.texture, new y(r, 0.5)), o = new yt();
    return o.glFragColor = new V(a.rgb.multiply(a.a), a.a), o;
  }
};
c([Ve], ge.prototype, "usesHalfFloatPrecision", void 0), c([S(ke)], ge.prototype, "accumulatedDensity", void 0), c([S(Vi)], ge.prototype, "gradient", void 0), c([R(0, A(Si))], ge.prototype, "vertex", null), c([R(0, A(Ws))], ge.prototype, "fragment", null);
let Gs = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.HeatmapMeshWriter, this.shaders = { accumulate: new Pe(), resolve: new ge() }, this.postProcessingEnabled = !0, this._isBound = !1, this._resources = /* @__PURE__ */ new Map(), this.overrideStencilRef = _i;
  }
  shutdown(e) {
    super.shutdown(e), this._resources.get(e)?.destroy(), this._resources.delete(e), this._prevFBO = null, this._unbind();
  }
  render(e, t) {
    const { context: i, painter: r, state: a } = e, o = t.instance.getInput(), { isFieldActive: l } = o, u = this._getOrCreateResourcesRecord(i), p = u.loadQualityProfile(i);
    if (ut(e)) return;
    F(e) || this._bind(e, u, o), r.setShader({ shader: this.shaders.accumulate, uniforms: { ...E(e, t.target), kernelControls: { radius: kt(o, a), isFieldActive: l ? 1 : 0 } }, defines: { ...I(e), ...p.defines }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) });
    const d = F(e) ? js : zi;
    r.setPipelineState(d), r.submitDraw(i, t);
  }
  postProcess(e, t) {
    if (F(e) || ut(e)) return;
    const { context: i, painter: r } = e, a = this._resources.get(i);
    if (this._prevFBO == null || this._prevViewport == null || !a?.initialized) return;
    const { defines: o } = a.loadQualityProfile(i), { minDensity: l, maxDensity: u, radius: p } = t.getInput(), d = 8, h = 9, f = a.accumulateFramebuffer, m = a.resolveGradientTexture;
    r.setShader({ shader: this.shaders.resolve, uniforms: { accumulatedDensity: { texture: { unit: d, texture: f.colorTexture }, minAndInvRange: [l, 1 / (u - l)], normalization: 3 / (p * p * Math.PI) }, gradient: { texture: { unit: h, texture: m } } }, defines: o, optionalAttributes: {}, useComputeBuffer: !1 }), i.bindFramebuffer(this._prevFBO), i.setViewport(0, 0, this._prevViewport.width, this._prevViewport.height), i.bindTexture(f.colorTexture, d), i.bindTexture(m, h), r.setPipelineState(Ks), r.submitDrawQuad(i), this._unbind();
  }
  _getOrCreateResourcesRecord(e) {
    let t = this._resources.get(e);
    return t == null && (t = new Us(), this._resources.set(e, t)), t;
  }
  _unbind() {
    this._prevFBO = null, this._prevViewport = null, this._isBound = !1;
  }
  _bind(e, t, i) {
    if (this._isBound) return;
    const { context: r, state: a, pixelRatio: o } = e, l = r.getBoundFramebufferObject(), u = r.getViewport();
    this._prevFBO = l, this._prevViewport = u;
    const { gradient: p, gradientHash: d } = i;
    t.ensureResolveGradientTexture(r, d, p);
    const { width: h, height: f } = u, m = qs(kt(i, a), o), x = h * m, b = f * m, v = t.ensureAccumulateFBO(r, x, b);
    r.blitFramebuffer(l, v, 0, 0, l.width, l.height, 0, 0, v.width, v.height, pt.STENCIL_BUFFER_BIT, _e.NEAREST), r.bindFramebuffer(v), r.setViewport(0, 0, v.width, v.height), r.setColorMask(!0, !0, !0, !0), r.setClearColor(0, 0, 0, 0), r.clear(pt.COLOR_BUFFER_BIT), this._isBound = !0;
  }
};
function qs(s, e) {
  const t = e > 1.5 ? 0.25 : 0.5;
  return s < 1 / (2 * t) ? 1 : t;
}
function _i(s) {
  return s.key.level + 1;
}
const zi = { color: { write: [!0, !0, !0, !0], blendMode: "additive" }, depth: !1, stencil: { write: !1, test: { ref: _i, compare: Vs.GEQUAL, mask: 255, op: { fail: Je.KEEP, zFail: Je.KEEP, zPass: Je.REPLACE } } } }, js = { ...zi, stencil: !1 }, Ks = { color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: !1 };
function kt(s, e) {
  const { referenceScale: t, radius: i } = s;
  return i * (t !== 0 ? t / e.scale : 1);
}
let gt = class extends pe {
  getVVRotationMat4(e) {
    return ce(zt(e), He.identity(), () => {
      const t = this._getNormalizedAngle(e).multiply($t), i = Mt(t), r = Pt(t);
      return new He(r, i, 0, 0, i.multiply(new n(-1)), r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    });
  }
  getVVRotationMat3(e) {
    return ce(zt(e), j.identity(), () => {
      const t = this._getNormalizedAngle(e).multiply($t), i = Mt(t), r = Pt(t);
      return new j(r, i, 0, i.multiply(new n(-1)), r, 0, 0, 0, 1);
    });
  }
  _getNormalizedAngle(e) {
    const t = Qt(this.rotationType, new n(rt.Arithmatic));
    return ce(t, new n(90).subtract(e), e);
  }
};
c([S(n)], gt.prototype, "rotationType", void 0);
const Zs = 360 / 254;
class G extends je {
}
c([g(3, V)], G.prototype, "color", void 0), c([g(4, y)], G.prototype, "offset", void 0), c([g(5, y)], G.prototype, "textureUV", void 0), c([g(6, n)], G.prototype, "fontSize", void 0), c([g(7, n)], G.prototype, "referenceSize", void 0), c([g(8, n)], G.prototype, "haloFontSize", void 0), c([g(9, V)], G.prototype, "haloColor", void 0), c([g(10, y)], G.prototype, "zoomRange", void 0), c([g(11, n)], G.prototype, "clipAngle", void 0), c([g(12, V)], G.prototype, "referenceSymbol", void 0);
let ft = class extends Jt {
};
c([g(13, y)], ft.prototype, "offsetNextVertex1", void 0), c([g(14, y)], ft.prototype, "offsetNextVertex2", void 0);
class Xs extends Te {
}
class O extends Ke {
  constructor() {
    super(...arguments), this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"] }, this.isHaloPass = !1, this.isBackgroundPass = !1, this.isLabel = !1;
  }
  clipLabel(e, t, i) {
    const r = t.multiply(Zs), a = ei(this.view.rotation.subtract(r)), o = at(new n(360).subtract(a), a);
    let l = new n(0);
    const u = ki(this.view.currentZoom.multiply(Ct)).divide(Ct), p = e.x, d = e.y, h = new n(1).subtract(H(p, u)).multiply(2), f = H(new n(90), o).multiply(2), m = new n(2).multiply(new n(1).subtract(H(u, d)));
    return l = l.add(i.multiply(h)), l = l.add(i.multiply(f)), l = l.add(m), l;
  }
  vertex(e, t) {
    const i = le(e.bitset, qi), r = new n(1).subtract(i);
    let a = e.fontSize, o = a.divide(Ft);
    const l = this.isHaloPass ? e.haloColor : this._getVertexColor(e), u = this.isLabel ? l.multiply(this.storage.getAnimationValue(e.id)) : l, p = this.view.displayViewScreenMat3.multiply(new z(e.pos, 1));
    let d = e.offset, h = new n(1), f = j.identity();
    if (this.isLabel) {
      if (!e.referenceSymbol) throw new Error("InternalError: Optional attribute 'referenceSymbol' expected for labels");
      const P = e.referenceSymbol, T = P.xy, C = P.z, $ = this._unpackDirection(P.w), K = ot(this, e.id, C).divide(2), ue = $.multiply(K.add(gs));
      d = d.add(T).add(ue);
    } else
      h = ot(this, e.id, e.referenceSize).divide(e.referenceSize), a = a.multiply(h), o = o.multiply(h), d = d.multiply(h), f = ti(this, e.id), d = f.multiply(new z(d, 0)).xy;
    const m = le(e.bitset, ji), x = this._getViewRotationMatrix(m).multiply(new z(d, 0));
    let b = this.isLabel ? this.clipLabel(e.zoomRange, e.clipAngle, m) : this.clip(e.id, e.zoomRange);
    b = this.isBackgroundPass ? b.add(r.multiply(2)) : b.add(i.multiply(2));
    const v = new V(p.xy.add(x.xy), b, 1), w = e.textureUV.divide(this.mosaicInfo.size);
    let _ = new n(0);
    return this.isHaloPass && (_ = e.haloFontSize.divide(o).divide(Ni)), { glPosition: v, color: u, size: o, textureUV: w, antialiasingWidth: new n(0.105 * Ft).divide(a).divide(this.view.pixelRatio), haloDistanceOffset: _, ...this.maybeRunHittest(e, t, { vvSizeAdjustment: h, vvRotation: f }) };
  }
  _getViewRotationMatrix(e) {
    const t = this.view.displayViewMat3, i = this.view.displayMat3, r = new n(1).subtract(e);
    return t.multiply(e).add(i.multiply(r));
  }
  fragment(e) {
    const t = new n(0.25), i = new n(1).subtract(t), r = Q(this.mosaicInfo.texture, e.textureUV).a;
    let a = i.subtract(e.haloDistanceOffset);
    this.highlight && (a = a.divide(2));
    const o = e.antialiasingWidth, l = Zt(a.subtract(o), a.add(o), r);
    return this.getFragmentOutput(e.color.multiply(l), e);
  }
  hittest(e, t, { vvSizeAdjustment: i, vvRotation: r }) {
    const a = r.multiply(new z(e.offset.multiply(i), 0)), o = r.multiply(new z(t.offsetNextVertex1.multiply(i), 0)), l = r.multiply(new z(t.offsetNextVertex2.multiply(i), 0)), { viewMat3: u, tileMat3: p } = this.view, d = u.multiply(p).multiply(new z(e.pos, 1)), h = d.add(p.multiply(a)).xy, f = d.add(p.multiply(o)).xy, m = d.add(p.multiply(l)).xy;
    return Ui(this.hittestRequest.position, h.xy, f.xy, m.xy);
  }
  _unpackDirection(e) {
    const t = new Ye(e), i = Hi(t, new Ye(2)), r = Wi(t, new Ye(3));
    return new y(new n(i).subtract(1), new n(r).subtract(1));
  }
  _getVertexColor(e) {
    let t = e.color;
    if (this.visualVariableColor) {
      const i = this.storage.getColorValue(e.id);
      t = this.visualVariableColor.getColor(i, e.color, new Gi(!1));
    }
    if (this.visualVariableOpacity) {
      const i = this.storage.getOpacityValue(e.id), r = this.visualVariableOpacity.getOpacity(i);
      t = t.multiply(r);
    }
    return t;
  }
}
c([D(ii)], O.prototype, "visualVariableColor", void 0), c([D(si)], O.prototype, "visualVariableOpacity", void 0), c([D(gt)], O.prototype, "visualVariableRotation", void 0), c([D(ri)], O.prototype, "visualVariableSizeMinMaxValue", void 0), c([D(ai)], O.prototype, "visualVariableSizeScaleStops", void 0), c([D(oi)], O.prototype, "visualVariableSizeStops", void 0), c([D(ni)], O.prototype, "visualVariableSizeUnitValue", void 0), c([S(bt)], O.prototype, "mosaicInfo", void 0), c([Ve], O.prototype, "isHaloPass", void 0), c([Ve], O.prototype, "isBackgroundPass", void 0), c([Ve], O.prototype, "isLabel", void 0), c([R(0, A(G)), R(1, A(ft))], O.prototype, "vertex", null), c([R(0, A(Xs))], O.prototype, "fragment", null);
let Ys = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.LabelMeshWriter, this.shaders = { geometry: new O() }, this.drawPhase = we.LABEL | we.LABEL_ALPHA, this.symbologyPlane = de.TEXT;
  }
  render(e, t) {
    const { context: i, painter: r } = e, a = I(e), o = { ...L(e) }, l = { shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey) }, defines: { ...a, isHaloPass: !1, isBackgroundPass: !0, isLabel: !0 }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: !1 };
    r.setShader(l), r.setPipelineState(o), r.submitDraw(i, t), r.setShader({ ...l, defines: { ...a, isHaloPass: !0, isBackgroundPass: !1, isLabel: !0 } }), r.setPipelineState(o), r.submitDraw(i, t), r.setShader({ ...l, defines: { ...a, isHaloPass: !1, isBackgroundPass: !1, isLabel: !0 } }), r.setPipelineState(o), r.submitDraw(i, t);
  }
}, Qs = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.LineMeshWriter, this.shaders = { geometry: new li() }, this.symbologyPlane = de.LINE;
  }
  render(e, t) {
    const { context: i, painter: r, pixelRatio: a } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), antialiasingControls: Ae(a) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
};
class Ne extends Ki {
}
c([g(9, n)], Ne.prototype, "accumulatedDistance", void 0), c([g(10, y)], Ne.prototype, "segmentDirection", void 0), c([g(11, V)], Ne.prototype, "tlbr", void 0);
class mt extends li {
  _getLineWidthRatio(e, t) {
    const i = new n(Ms), r = le(e.bitset, Yi);
    return r.multiply(Se(t, new n(0.25))).add(new n(1).subtract(r)).divide(i);
  }
  _getSDFAlpha(e) {
    const { halfWidth: t, normal: i, tlbr: r, patternSize: a, accumulatedDistance: o, lineWidthRatio: l } = e, u = a.x.multiply(new n(2)).multiply(l), p = Tt(o.divide(u)), d = new n(0.25).multiply(i.y).add(new n(0.5)), h = nt(r.xy, r.zw, new y(p, d)), f = ui(Q(this.mosaicInfo.texture, h)).subtract(new n(0.5)).multiply(t), m = lt(new n(0.5).subtract(f), new n(0), new n(1));
    return new V(m);
  }
  _getPatternColor(e) {
    const { halfWidth: t, normal: i, color: r, accumulatedDistance: a, patternSize: o, sampleAlphaOnly: l, tlbr: u } = e, p = o.y.multiply(new n(2).multiply(t).divide(o.x)), d = Tt(a.divide(p)), h = new n(0.5).multiply(i.y).add(new n(0.5)), f = nt(u.xy, u.zw, new y(h, d));
    let m = Q(this.mosaicInfo.texture, f);
    return this.visualVariableColor != null && (m = ce(Qe(l, new n(0.5)), new V(r.a), r)), m;
  }
  vertex(e, t) {
    const { segmentDirection: i, tlbr: r, bitset: a } = e, o = Zi(this, e), l = e.accumulatedDistance.divide(this.view.displayZoomFactor).add(st(i, o.scaledOffset)), u = new y(r.z.subtract(r.x), r.w.subtract(r.y)), p = r.divide(this.mosaicInfo.size.xyxy), d = le(a, Qi), h = le(a, Ji), f = ce(Qe(d, new n(0.5)), this._getLineWidthRatio(e, o.scaledHalfWidth), new n(1));
    return { ...o, tlbr: p, patternSize: u, accumulatedDistance: l, isSDF: d, sampleAlphaOnly: h, lineWidthRatio: f, ...this.maybeRunHittest(e, t, o.halfWidth) };
  }
  fragment(e) {
    const { color: t, opacity: i, isSDF: r } = e, a = Xi(e, this.antialiasingControls.blur), o = ce(Qe(r, new n(0.5)), this._getSDFAlpha(e), this._getPatternColor(e)), l = t.multiply(i).multiply(a).multiply(o);
    return this.getFragmentOutput(l, e);
  }
}
c([S(bt)], mt.prototype, "mosaicInfo", void 0), c([R(0, A(Ne)), R(1, A(es))], mt.prototype, "vertex", null);
let Js = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.TexturedLineMeshWriter, this.shaders = { geometry: new mt() }, this.symbologyPlane = de.LINE;
  }
  render(e, t) {
    const { context: i, painter: r, pixelRatio: a } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), antialiasingControls: Ae(a), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
};
class ne extends je {
}
c([g(3, V)], ne.prototype, "color", void 0), c([g(4, V)], ne.prototype, "outlineColor", void 0), c([g(5, y)], ne.prototype, "offset", void 0), c([g(6, y)], ne.prototype, "textureUV", void 0), c([g(7, V)], ne.prototype, "sizing", void 0), c([g(8, n)], ne.prototype, "placementAngle", void 0), c([g(9, n)], ne.prototype, "sizeRatio", void 0), c([g(10, y)], ne.prototype, "zoomRange", void 0);
class Fe extends Jt {
}
c([g(12, y)], Fe.prototype, "offsetNextVertex1", void 0), c([g(13, y)], Fe.prototype, "offsetNextVertex2", void 0), c([g(14, y)], Fe.prototype, "textureUVNextVertex1", void 0), c([g(15, y)], Fe.prototype, "textureUVNextVertex2", void 0);
class er extends Te {
}
function oe(s, e, t, i) {
  return e.multiply(s.x).add(t.multiply(s.y)).add(i.multiply(s.z));
}
function et(s) {
  return s.multiply(s).divide(128);
}
class q extends Ke {
  constructor() {
    super(...arguments), this.computeAttributes = { offset: ["offsetNextVertex1", "offsetNextVertex2"], textureUV: ["textureUVNextVertex1", "textureUVNextVertex2"] };
  }
  vertex(e, t) {
    const i = et(e.sizing.x), r = et(e.sizing.y), a = et(e.sizing.z), o = e.placementAngle, l = le(e.bitset, $e.bitset.isSDF), u = le(e.bitset, $e.bitset.isMapAligned), p = le(e.bitset, $e.bitset.scaleSymbolsProportionally), d = ts(e.bitset, $e.bitset.colorLocked), h = is(this, e.id), f = ss(this, e.id, e.color, d).multiply(h), m = this.view.displayViewScreenMat3.multiply(new z(e.pos.xy, 1)), x = ot(this, e.id, a).divide(a), b = i.multiply(x), v = e.offset.xy.multiply(x);
    let w = r.multiply(p.multiply(x.subtract(1)).add(1));
    w = at(w, Se(b.subtract(0.99), new n(0)));
    const _ = Se(w, new n(1)), P = at(w, new n(1)), T = j.fromRotation(o.multiply(rs)), C = ti(this, e.id), $ = this._getViewRotationMatrix(u).multiply(C).multiply(T).multiply(new z(v.xy, 0)), K = this.clip(e.id, e.zoomRange), ue = new V(m.xy.add($.xy), K, 1), Re = e.textureUV.divide(this.mosaicInfo.size), Ie = e.outlineColor.multiply(P), Ce = le(e.bitset, $e.bitset.overrideOutlineColor), ze = e.sizeRatio.multiply(b).multiply(0.5);
    return { glPosition: ue, color: f, textureUV: Re, outlineColor: Ie, outlineSize: _, distanceToPx: ze, isSDF: l, overrideOutlineColor: Ce, ...this.maybeRunHittest(e, t, { pos: e.pos, size: b, sizeCorrection: x, isMapAligned: u, outlineSize: _, distanceToPx: ze, isSDF: l }) };
  }
  fragment(e) {
    const t = this._getColor(e.textureUV, e);
    return this.getFragmentOutput(t, e);
  }
  hittest(e, t, i) {
    return ce(as(i.size, this.hittestRequest.smallSymbolSizeThreshold), this._hittestSmallMarker(e, t, i), this._hittestMarker(e, t, i));
  }
  _getViewRotationMatrix(e) {
    const t = this.view.displayViewMat3, i = this.view.displayMat3, r = new n(1).subtract(e);
    return t.multiply(e).add(i.multiply(r));
  }
  _getViewScreenMatrix(e) {
    const t = this.view.viewMat3.multiply(this.view.tileMat3), i = this.view.tileMat3, r = new n(1).subtract(e);
    return t.multiply(e).add(i.multiply(r));
  }
  _getColor(e, t) {
    return ce(Qt(t.isSDF, new n(1)), this._getSDFColor(e, t), this._getSpriteColor(e, t));
  }
  _getSpriteColor(e, t) {
    return Q(this.mosaicInfo.texture, e).multiply(t.color);
  }
  _getSDFColor(e, t) {
    const i = Q(this.mosaicInfo.texture, e), r = new n(0.5).subtract(ui(i)).multiply(t.distanceToPx).multiply(os), a = lt(new n(0.5).subtract(r), new n(0), new n(1)), o = t.color.multiply(a);
    let l = t.outlineSize;
    this.highlight && (l = Se(l, t.overrideOutlineColor.multiply(4)));
    const u = l.multiply(0.5), p = ei(r).subtract(u), d = lt(new n(0.5).subtract(p), new n(0), new n(1)), h = nt(t.outlineColor, t.color, t.overrideOutlineColor).multiply(d);
    return new n(1).subtract(h.a).multiply(o).add(h);
  }
  _hittestSmallMarker(e, t, i) {
    const { position: r, distance: a, smallSymbolDistance: o } = this.hittestRequest, l = a.subtract(o), { viewMat3: u, tileMat3: p } = this.view, d = u.multiply(p).multiply(new z(i.pos, 1)).xy, h = i.size.multiply(0.5);
    return ns(d, r).subtract(h).add(l);
  }
  _hittestMarker(e, t, i) {
    const { pos: r, size: a, sizeCorrection: o, isMapAligned: l, outlineSize: u, isSDF: p, distanceToPx: d } = i, h = new z(e.offset.multiply(o), 0), f = new z(t.offsetNextVertex1.multiply(o), 0), m = new z(t.offsetNextVertex2.multiply(o), 0), { viewMat3: x, tileMat3: b } = this.view, v = x.multiply(b).multiply(new z(r, 1)), w = this._getViewScreenMatrix(l), _ = v.add(w.multiply(h)).xy, P = v.add(w.multiply(f)).xy, T = v.add(w.multiply(m)).xy, C = this.hittestRequest.position, $ = this.hittestRequest.distance, K = re(C.add(new y(he($), he($))), _, P, T), ue = re(C.add(new y(0, he($))), _, P, T), Re = re(C.add(new y($, he($))), _, P, T), Ie = re(C.add(new y(he($), 0)), _, P, T), Ce = re(C, _, P, T), ze = re(C.add(new y($, 0)), _, P, T), wt = re(C.add(new y(he($), $)), _, P, T), St = re(C.add(new y(0, $)), _, P, T), Vt = re(C.add(new y($, $)), _, P, T), ee = e.textureUV.divide(this.mosaicInfo.size), te = t.textureUVNextVertex1.divide(this.mosaicInfo.size), ie = t.textureUVNextVertex2.divide(this.mosaicInfo.size), se = { color: new V(1), outlineColor: new V(1), overrideOutlineColor: new n(1), outlineSize: u, distanceToPx: d, isSDF: p };
    let M = new n(0);
    return M = M.add(ae(K).multiply(this._getColor(oe(K, ee, te, ie), se).a)), M = M.add(ae(ue).multiply(this._getColor(oe(ue, ee, te, ie), se).a)), M = M.add(ae(Re).multiply(this._getColor(oe(Re, ee, te, ie), se).a)), M = M.add(ae(Ie).multiply(this._getColor(oe(Ie, ee, te, ie), se).a)), M = M.add(ae(Ce).multiply(this._getColor(oe(Ce, ee, te, ie), se).a)), M = M.add(ae(ze).multiply(this._getColor(oe(ze, ee, te, ie), se).a)), M = M.add(ae(wt).multiply(this._getColor(oe(wt, ee, te, ie), se).a)), M = M.add(ae(St).multiply(this._getColor(oe(St, ee, te, ie), se).a)), M = M.add(ae(Vt).multiply(this._getColor(oe(Vt, ee, te, ie), se).a)), H(M, new n(0.05)).multiply(Xt(this.hittestRequest));
  }
}
c([D(ii)], q.prototype, "visualVariableColor", void 0), c([D(si)], q.prototype, "visualVariableOpacity", void 0), c([D(gt)], q.prototype, "visualVariableRotation", void 0), c([D(ri)], q.prototype, "visualVariableSizeMinMaxValue", void 0), c([D(ai)], q.prototype, "visualVariableSizeScaleStops", void 0), c([D(oi)], q.prototype, "visualVariableSizeStops", void 0), c([D(ni)], q.prototype, "visualVariableSizeUnitValue", void 0), c([S(bt)], q.prototype, "mosaicInfo", void 0), c([R(0, A(ne)), R(1, A(Fe))], q.prototype, "vertex", null), c([R(0, A(er))], q.prototype, "fragment", null);
let tr = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.MarkerMeshWriter, this.shaders = { geometry: new q() }, this.symbologyPlane = de.MARKER;
  }
  render(e, t) {
    const { context: i, painter: r } = e;
    r.setShader({ shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey, !0) }, defines: { ...I(e) }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
};
class ir {
  constructor() {
    this.computeAttributes = {};
  }
  get locationsMap() {
    const e = /* @__PURE__ */ new Map();
    for (const t in this.locations) e.set(t, this.locations[t].index);
    return e;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const e = new Set(Object.keys(this.options));
      this._optionPropertyKeys = e;
    }
    return this._optionPropertyKeys;
  }
  get _transformFeedbackBindings() {
    return [];
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const e = this.locationsMap, t = Array.from(e.entries()).map(([r, a]) => `${r}.${a}`).join("."), i = ds(t);
      this._locationInfo = { hash: i, locations: e };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const e = /* @__PURE__ */ new Map();
    for (const [t, i] of this.locationsMap.entries()) e.set("a_" + t, i);
    return e;
  }
  getShaderKey(e, t, i) {
    const r = Object.keys(i).filter((o) => i[o]).map((o) => `${o}_${i[o].toString()}`).join("."), a = Object.keys(t).filter((o) => this.optionPropertyKeys.has(o)).join(".");
    return `${e.hash}.${r}.${a}`;
  }
  getProgram(e, t, i, r) {
    let a = "", o = "";
    for (const l in i) if (i[l]) {
      const u = typeof i[l] == "boolean" ? `#define ${l}
` : `#define ${l} ${i[l]}
`;
      a += u, o += u;
    }
    return a += this.vertexShader, o += this.fragmentShader, new ls(a, o, this.renamedLocationsMap, this.locationInfo, this._getUniformBindings(t), this._transformFeedbackBindings);
  }
  _getUniformBindings(e) {
    const t = [];
    for (const i in this.required) {
      const r = this.required[i];
      t.push({ uniformHydrated: null, shaderModulePath: i, uniformName: i, uniformType: r.type, uniformArrayElementType: Nt(r), uniformArrayLength: Ut(r) });
    }
    for (const i in e) {
      const r = this.options[i];
      if (e[i]) for (const a in r) {
        const o = r[a];
        t.push({ uniformHydrated: null, shaderModulePath: `${i}.${a}`, uniformName: a, uniformType: o.type, uniformArrayElementType: Nt(o), uniformArrayLength: Ut(o) });
      }
    }
    return t;
  }
}
const Nt = (s) => s.type === "array" ? s.elementType?.type : void 0, Ut = (s) => s.type === "array" ? s.size : void 0, sr = { hittestDist: n, hittestPos: y }, rr = { filterFlags: U, animation: U, visualVariableData: U, dataDriven0: U, dataDriven1: U, dataDriven2: U, gpgpu: U, size: n }, ar = { displayViewScreenMat3: j, displayViewMat3: j, displayMat3: j, viewMat3: j, tileMat3: j, displayZoomFactor: n, requiredZoomFactor: n, tileOffset: y, currentScale: n, currentZoom: n, metersPerSRUnit: n };
let or = class extends ir {
  constructor() {
    super(...arguments), this.vertexShader = Lt("materials/pie/pie.vert"), this.fragmentShader = Lt("materials/pie/pie.frag"), this.required = { ...rr, ...ar, outlineWidth: n, colors: Z, defaultColor: V, othersColor: V, outlineColor: V, donutRatio: n, sectorThreshold: n }, this.options = { hittestUniforms: sr, visualVariableSizeMinMaxValue: { minMaxValueAndSize: V }, visualVariableSizeScaleStops: { sizes: { ...Z.ofType(n, 8), type: "array", elementType: n, size: 8 }, values: { ...Z.ofType(n, 8), type: "array", elementType: n, size: 8 } }, visualVariableSizeStops: { sizes: { ...Z.ofType(n, 8), type: "array", elementType: n, size: 8 }, values: { ...Z.ofType(n, 8), type: "array", elementType: n, size: 8 } }, visualVariableSizeUnitValue: { unitValueToPixelsRatio: n }, visualVariableOpacity: { opacities: { ...Z.ofType(n, 8), type: "array", elementType: n, size: 8 }, opacityValues: { ...Z.ofType(n, 8), type: "array", elementType: n, size: 8 } } }, this.locations = { pos: { index: 0, type: y }, id: { index: 1, type: z }, bitset: { index: 2, type: n }, offset: { index: 3, type: y }, texCoords: { index: 4, type: y }, size: { index: 5, type: y }, referenceSize: { index: 6, type: n }, zoomRange: { index: 7, type: y } }, this.defines = { VV_SIZE_MIN_MAX_VALUE: "boolean", VV_SIZE_SCALE_STOPS: "boolean", VV_SIZE_FIELD_STOPS: "boolean", VV_SIZE_UNIT_VALUE: "boolean", VV_OPACITY: "boolean", HITTEST: "boolean", numberOfFields: "number", highlight: "boolean", inside: "boolean", outside: "boolean" };
  }
  setNumberOfFields(e) {
    this.required.colors = { ...Z.ofType(V, e), type: "array", elementType: V, size: e };
  }
}, nr = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.PieChartMeshWriter, this.shaders = { geometry: new or() }, this.symbologyPlane = de.MARKER;
  }
  render(e, t) {
    const { context: i, painter: r } = e, { instance: a, target: o } = t, l = this.shaders.geometry, u = a.getInput(), p = u.numberOfFields, d = F(e), h = E(e, o), f = I(e);
    l.setNumberOfFields(p), r.setShader({ shader: l, uniforms: { ...W(e, t.target, u.geometry), ...h.storage, ...h.view, hittestUniforms: h.hittestRequest ? { hittestDist: h.hittestRequest?.distance, hittestPos: h.hittestRequest?.position } : null }, defines: { VV_SIZE_MIN_MAX_VALUE: !!u.geometry.visualVariableSizeMinMaxValue, VV_SIZE_SCALE_STOPS: !!u.geometry.visualVariableSizeScaleStops, VV_SIZE_FIELD_STOPS: !!u.geometry.visualVariableSizeStops, VV_SIZE_UNIT_VALUE: !!u.geometry.visualVariableSizeUnitValue, VV_OPACITY: !!u.geometry.visualVariableOpacity, HITTEST: d, highlight: h.highlight ? 1 : 0, ...f, numberOfFields: p }, optionalAttributes: {}, useComputeBuffer: d }), r.setPipelineState(L(e)), r.submitDraw(i, t);
  }
}, lr = class extends k {
  constructor() {
    super(...arguments), this.meshWriter = B.TextMeshWriter, this.shaders = { geometry: new O() }, this.symbologyPlane = de.TEXT;
  }
  render(e, t) {
    const { context: i, painter: r } = e, a = I(e), o = { shader: this.shaders.geometry, uniforms: { ...W(e, t.target, t.instance.getInput().geometry), ...E(e, t.target), mosaicInfo: r.textureManager.getMosaicInfo(i, t.textureKey) }, defines: { ...a, isHaloPass: !1, isBackgroundPass: !0, isLabel: !1 }, optionalAttributes: t.instance.optionalAttributes, useComputeBuffer: F(e) };
    r.setShader(o), r.setPipelineState(L(e)), r.submitDraw(i, t), r.setShader({ ...o, defines: { ...a, isHaloPass: !0, isBackgroundPass: !1, isLabel: !1 } }), r.submitDraw(i, t), r.setShader({ ...o, defines: { ...a, isHaloPass: !1, isBackgroundPass: !1, isLabel: !1 } }), r.submitDraw(i, t);
  }
};
const J = { fill: new Es("fill"), patternFill: new Ls("patternFill"), complexFill: new Cs("complexFill"), outlineFill: new Ds("outlineFill"), patternOutlineFill: new Bs("patternOutlineFill"), complexOutlineFill: new Os("complexOutlineFill"), marker: new tr("marker"), pieChart: new nr("pieChart"), line: new Qs("line"), texturedLine: new Js("texturedLine"), text: new lr("text"), label: new Ys("label"), heatmap: new Gs("heatmap"), dotDensity: new Is("dotDensity") };
function Ua() {
  for (const s in J)
    J[s].startup();
}
function Ha(s) {
  for (const e in J)
    J[e].shutdown(s);
}
function qe(s, e) {
  const t = s.slice(0, e), i = e - t.length;
  for (let r = 0; r < i; r++) {
    const a = t[t.length - 1];
    t.push(a);
  }
  return t;
}
function ur(s) {
  if (!s) return [0, 0, 0, 0];
  const { r: e, g: t, b: i, a: r } = s;
  return [e * (r / 255), t * (r / 255), i * (r / 255), r];
}
const Ue = 8, $i = Ue - 2, Mi = () => ci.getLogger("esri.views.2d.layers.features.support.rendererUtils");
function Pi(s) {
  return s.map((e) => cr(e) ? pr(e.clone()) : e);
}
function cr(s) {
  return (s.type === "size" || s.type === "color" || s.type === "opacity") && s.stops != null;
}
function pr(s) {
  return s.stops = fr(s.type, s.stops ?? []), s;
}
function me(s, e, t) {
  return (1 - t) * s + t * e;
}
function dr(s, e) {
  const [t, ...i] = e, r = i.pop(), a = i[0].value, o = i[i.length - 1].value, l = (o - a) / $i, u = [];
  for (let p = a; p < o; p += l) {
    let d = 0;
    for (; p >= i[d].value; ) d++;
    const h = i[d], f = e[d - 1], m = p - f.value, x = h.value === f.value ? 1 : m / (h.value - f.value);
    if (s === "color") {
      const b = i[d], v = e[d - 1], w = b.color.clone();
      w.r = me(v.color.r, w.r, x), w.g = me(v.color.g, w.g, x), w.b = me(v.color.b, w.b, x), w.a = me(v.color.a, w.a, x), u.push({ value: p, color: w, label: b.label });
    } else if (s === "size") {
      const b = i[d], v = e[d - 1], w = Rt(b.size), _ = me(Rt(v.size), w, x);
      u.push({ value: p, size: _, label: b.label });
    } else {
      const b = i[d], v = me(e[d - 1].opacity, b.opacity, x);
      u.push({ value: p, opacity: v, label: b.label });
    }
  }
  return [t, ...u, r];
}
function hr(s) {
  const [e, ...t] = s, i = t.pop();
  for (; t.length > $i; ) {
    let r = 0, a = 0;
    for (let o = 1; o < t.length; o++) {
      const l = t[o - 1], u = t[o], p = Math.abs(u.value - l.value);
      p > a && (a = p, r = o);
    }
    t.splice(r, 1);
  }
  return [e, ...t, i];
}
function fr(s, e) {
  return e.length <= Ue ? e : (Mi().warn(`Found ${e.length} Visual Variable stops, but MapView only supports ${Ue}. Displayed stops will be simplified.`), e.length > 2 * Ue ? dr(s, e) : hr(e));
}
function mr() {
  const { supportsColorBufferFloat: s, supportsColorBufferFloatBlend: e, supportsColorBufferHalfFloat: t } = vt();
  return s && e || t;
}
function Wa(s) {
  if (!s) return !0;
  switch (s.type) {
    case "dot-density":
      break;
    case "heatmap":
      if (!mr()) {
        const e = vt(), t = ["supportsColorBufferFloat", "supportsColorBufferFloatBlend", "supportsColorBufferHalfFloat"].filter((i) => !e[i]).join(", ");
        return Mi().errorOnce(new De("webgl-missing-extension", `Missing WebGL2 requirements for Heatmap: ${t}`)), !1;
      }
  }
  return !0;
}
const yr = 1.25, Ee = 128, br = 128;
function vr(s) {
  if (!s.stops?.length) return null;
  const e = s.stops.sort((a, o) => a.value - o.value), t = qe(e, 8), i = t.map(({ value: a }) => a), r = t.map(({ color: a }) => ur(a));
  return { values: i, colors: r };
}
function gr(s) {
  if (!s.stops?.length) return null;
  const e = s.stops.sort((i, r) => i.value - r.value), t = qe(e, 8);
  return { opacityValues: t.map(({ value: i }) => i), opacities: t.map(({ opacity: i }) => i) };
}
function xr(s) {
  return { rotationType: s.rotationType === "geographic" ? rt.Geographic : rt.Arithmatic };
}
function tt(s) {
  if (!s.stops?.length) return null;
  if (s.stops.some((i) => i.useMaxValue || i.useMinValue)) return (i, r) => {
    const a = i.statisticsByLevel.get(r.key.level), o = s.stops.map((u) => ({ value: u.useMaxValue ? a?.get(s.field)?.maxValue ?? 0 : u.useMinValue ? a?.get(s.field)?.minValue ?? 0 : u.value, size: u.size ? xe(u.size) : xs })).sort((u, p) => u.value - p.value), l = qe(o, 8);
    return { values: l.map(({ value: u }) => u), sizes: l.map(({ size: u }) => u) };
  };
  const e = s.stops.sort((i, r) => i.value - r.value), t = qe(e, 8);
  return { values: t.map(({ value: i }) => i), sizes: t.map(({ size: i }) => xe(i)) };
}
function wr(s) {
  return (e) => {
    const { state: t } = e;
    return { unitValueToPixelsRatio: hs(t.spatialReference) / fs[s.valueUnit] / t.resolution };
  };
}
function Ht(s, e) {
  const t = e.length;
  if (s < e[0].value || t === 1) return e[0].size;
  for (let i = 1; i < t; i++) if (s < e[i].value) {
    const r = (s - e[i - 1].value) / (e[i].value - e[i - 1].value);
    return e[i - 1].size + r * (e[i].size - e[i - 1].size);
  }
  return e[t - 1].size;
}
function Sr(s) {
  const { minDataValue: e, maxDataValue: t, minSize: i, maxSize: r } = s;
  if (typeof i == "object" && typeof r == "object") return (a, o) => {
    const l = a.state.scale, u = xe(Ht(l, i.stops)), p = xe(Ht(l, r.stops));
    return { minMaxValueAndSize: [e, t, u, p] };
  };
  if (typeof i == "object" || typeof r == "object") throw new Error("InternalError: Found a partial VisualVariableSizeMinMaxValue");
  return { minMaxValueAndSize: [e, t, xe(i), xe(r)] };
}
const xt = { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: null, visualVariableSizeStops: null, visualVariableSizeScaleStops: null, visualVariableSizeOutlineScaleStops: null, visualVariableSizeUnitValue: null, visualVariableSizeMinMaxValue: null };
function Fi(s, e = br, t = yr) {
  if (s.visualVariableSizeMinMaxValue) return s.visualVariableSizeMinMaxValue instanceof Function ? Ee : Math.max(s.visualVariableSizeMinMaxValue.minMaxValueAndSize[3] * t, e);
  if (s.visualVariableSizeScaleStops) {
    if (s.visualVariableSizeScaleStops instanceof Function) return Ee;
    const i = s.visualVariableSizeScaleStops.sizes;
    return Math.max(i[i.length - 1] * t, e);
  }
  if (s.visualVariableSizeStops) {
    if (s.visualVariableSizeStops instanceof Function) return Ee;
    const i = s.visualVariableSizeStops.sizes;
    return Math.max(i[i.length - 1] * t, e);
  }
  return s.visualVariableSizeUnitValue ? 2 * Ee : 0;
}
function Ga(s) {
  const e = { ...xt };
  if (!s || !("visualVariables" in s) || !s.visualVariables) return e;
  for (const t of Pi(s.visualVariables)) switch (t.type) {
    case "color":
      e.visualVariableColor = vr(t);
      break;
    case "opacity":
      e.visualVariableOpacity = gr(t);
      break;
    case "rotation":
      e.visualVariableRotation = xr(t);
      break;
    case "size":
      switch (Vr(t)) {
        case "field-stops":
          e.visualVariableSizeStops = tt(t);
          break;
        case "scale-stops":
          t.target === "outline" ? e.visualVariableSizeOutlineScaleStops = tt(t) : e.visualVariableSizeScaleStops = tt(t);
          break;
        case "min-max":
          e.visualVariableSizeMinMaxValue = Sr(t);
          break;
        case "unit-value":
          e.visualVariableSizeUnitValue = wr(t);
      }
      break;
    default:
      console.error("Unable to handle VV type");
  }
  return e;
}
function Vr(s) {
  if (typeof s.minDataValue == "number" && typeof s.maxDataValue == "number" && s.minSize != null && s.maxSize != null) return "min-max";
  if ((s.expression && s.expression === "view.scale" || s.valueExpression && s.valueExpression === "$view.scale") && Array.isArray(s.stops)) return "scale-stops";
  if ((s.field != null || s.expression && s.expression !== "view.scale" || s.valueExpression && s.valueExpression !== "$view.scale") && (Array.isArray(s.stops) || "levels" in s && s.levels)) return "field-stops";
  if ((s.field != null || s.expression && s.expression !== "view.scale" || s.valueExpression && s.valueExpression !== "$view.scale") && s.valueUnit != null) return "unit-value";
  throw new Error("InternalError: Found unknown sizeVV type");
}
function _r(s) {
  return !!(s.visualVariableSizeMinMaxValue || s.visualVariableSizeScaleStops || s.visualVariableSizeStops || s.visualVariableSizeUnitValue || s.visualVariableSizeOutlineScaleStops);
}
function qa(s) {
  return !!s.visualVariableRotation;
}
function zr(s) {
  return s.minScale || s.maxScale ? { minScale: s.minScale ?? 0, maxScale: s.maxScale ?? 0 } : null;
}
function Y(s) {
  if (s == null) return null;
  if (Array.isArray(s)) {
    const [e, t, i, r] = s;
    return [e, t, i, 255 * r];
  }
  return typeof s == "string" ? s : { ...s, defaultValue: Y(s?.defaultValue) };
}
async function ja(s, e) {
  const { cimResourceManager: t, cimAnalyzer: i, scaleExpression: r } = e.schemaOptions;
  await Promise.all(us.fetchResources(s.symbol, t, []));
  const a = i.analyzeSymbolReference(s, !1), o = { scaleInfo: zr(s), scaleExpression: r }, l = [];
  for (const u of a) switch (u.type) {
    case "marker":
      l.push(...$r(u, e, o));
      break;
    case "fill":
      l.push(...Tr(u, e, o));
      break;
    case "line":
      l.push(...Rr(u, e, o));
      break;
    case "text":
      l.push(...Or(u, e, o));
  }
  return l;
}
function $r(s, e, t) {
  const { uniforms: i, schemaOptions: r } = e, { store: a } = r, o = s.isOutline ? { ...xt, visualVariableSizeScaleStops: i.visualVariableSizeOutlineScaleStops } : { visualVariableColor: i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity, visualVariableSizeMinMaxValue: i.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i.visualVariableSizeScaleStops, visualVariableSizeStops: i.visualVariableSizeStops, visualVariableSizeUnitValue: i.visualVariableSizeUnitValue, visualVariableRotation: i.visualVariableRotation };
  return Mr(a.ensureInstance(J.marker, { geometry: o }, { zoomRange: !!t.scaleInfo }), s, i, t);
}
function Mr(s, e, t, { scaleInfo: i, scaleExpression: r }) {
  const a = _r(t);
  return [s.createMeshInfo({ params: { size: e.size, scaleX: e.scaleX, anchorX: e.anchorPoint.x, anchorY: e.anchorPoint.y, angle: e.rotation, color: Y(e.color) ?? [0, 0, 0, 0], colorLocked: e.colorLocked, frameHeight: e.frameHeight, widthRatio: e.widthRatio, scaleInfo: i, offsetX: e.offsetX, offsetY: e.offsetY, outlineColor: Y(e.outlineColor) ?? [0, 0, 0, 0], outlineSize: e.outlineWidth, referenceSize: e.referenceSize || ms.CIMVectorMarker.size, rotateClockwise: e.rotateClockwise, scaleFactor: r ?? 1, sizeRatio: e.sizeRatio, alignment: e.alignment, isAbsoluteAnchorPoint: e.isAbsoluteAnchorPoint, scaleSymbolsProportionally: e.scaleSymbolsProportionally, sprite: e.spriteRasterizationParam, hasSizeVV: a, placement: e.markerPlacement, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null, transforms: e.transform, minPixelBuffer: Fi(t) } })];
}
function Pr(s, e, t) {
  const { uniforms: i, schemaOptions: r } = e, { store: a } = r;
  return Fr(a.ensureInstance(J.fill, { geometry: { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity } }, { zoomRange: !!t.scaleInfo }), s, t);
}
function Fr(s, e, { scaleInfo: t }) {
  return [s.createMeshInfo({ params: { color: Y(e.color) ?? [0, 0, 0, 0], scaleInfo: t, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null } })];
}
function Tr(s, e, t) {
  if (!s.spriteRasterizationParam) return Pr(s, e, t);
  const { uniforms: i, schemaOptions: r } = e, { store: a } = r;
  return Ar(a.ensureInstance(J.complexFill, { geometry: { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity } }, { zoomRange: !!t.scaleInfo }), s, i.visualVariableColor != null, t);
}
function Ar(s, e, t, { scaleInfo: i }) {
  if (!e.spriteRasterizationParam) throw new Error("InternalError: Sprite should always be defined");
  const r = !!e.hasUnresolvedReplacementColor && (!t || e.colorLocked), a = e.sampleAlphaOnly && !r, o = e.spriteRasterizationParam;
  return [s.createMeshInfo({ params: { color: Y(e.color) ?? [0, 0, 0, 0], height: e.height, aspectRatio: e.scaleX, offsetX: e.offsetX, offsetY: e.offsetY, scaleX: 1, scaleY: 1, angle: e.angle, applyRandomOffset: e.applyRandomOffset, sampleAlphaOnly: a, scaleProportionally: o.resource.type === "CIMHatchFill", sprite: o, scaleInfo: i, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null } })];
}
function Rr(s, e, t) {
  const { uniforms: i, schemaOptions: r } = e, { store: a } = r, o = s.isOutline ? { ...xt, visualVariableSizeScaleStops: i.visualVariableSizeOutlineScaleStops } : { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity, visualVariableSizeMinMaxValue: i.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i.visualVariableSizeScaleStops, visualVariableSizeStops: i.visualVariableSizeStops, visualVariableSizeUnitValue: i.visualVariableSizeUnitValue }, l = { geometry: o }, u = !!(o.visualVariableSizeMinMaxValue || o.visualVariableSizeScaleStops || o.visualVariableSizeStops || o.visualVariableSizeUnitValue);
  return s.spriteRasterizationParam ? Cr(a.ensureInstance(J.texturedLine, l, { zoomRange: !!t.scaleInfo }), s, u, t) : Ir(a.ensureInstance(J.line, l, { zoomRange: !!t.scaleInfo }), s, u, t);
}
function Ti(s, e, { scaleInfo: t }) {
  return { params: { color: Y(s.color) ?? [0, 0, 0, 0], width: s.width, referenceWidth: s.referenceWidth, capType: s.cap, joinType: s.join, miterLimit: s.miterLimit, scaleInfo: t, hasSizeVV: e, effects: s.effects ? { type: "cim-effect-infos", effectInfos: s.effects } : null } };
}
function Ir(s, e, t, i) {
  if (e.spriteRasterizationParam) throw new Error("InternalError: Sprite should not be defined");
  return [s.createMeshInfo({ params: Ti(e, t, i).params })];
}
function Cr(s, e, t, i) {
  const { spriteRasterizationParam: r, scaleDash: a, sampleAlphaOnly: o } = e;
  if (!r) throw new Error("InternalError: Sprite should be defined");
  return [s.createMeshInfo({ params: { ...Ti(e, t, i).params, shouldScaleDash: a ?? !1, shouldSampleAlphaOnly: o, isSDF: r.resource.type !== "CIMPictureStroke", sprite: r } })];
}
function Or(s, e, t) {
  const { uniforms: i, schemaOptions: r } = e, { store: a } = r;
  return Er(a.ensureInstance(J.text, { geometry: { visualVariableColor: s.colorLocked ? null : i.visualVariableColor, visualVariableOpacity: i.visualVariableOpacity, visualVariableRotation: i.visualVariableRotation, visualVariableSizeMinMaxValue: i.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: i.visualVariableSizeScaleStops, visualVariableSizeStops: i.visualVariableSizeStops, visualVariableSizeUnitValue: i.visualVariableSizeUnitValue } }, { zoomRange: !!t.scaleInfo, referenceSymbol: !1, clipAngle: !1 }), s, i, t);
}
function Er(s, e, t, { scaleInfo: i, scaleExpression: r }) {
  return [s.createMeshInfo({ params: { boxBackgroundColor: Y(e.backgroundColor), boxBorderLineColor: Y(e.borderLineColor), boxBorderLineSize: e.borderLineWidth ?? 0, color: Y(e.color) ?? [0, 0, 0, 0], offsetX: e.offsetX, offsetY: e.offsetY, postAngle: e.angle, fontSize: e.size, referenceSize: e.referenceSize, decoration: e.decoration, haloColor: Y(e.outlineColor) ?? [0, 0, 0, 0], haloFontSize: e.outlineSize, lineWidth: e.lineWidth || 512, lineHeightRatio: 1, horizontalAlignment: e.horizontalAlignment ?? "center", verticalAlignment: e.verticalAlignment ?? "baseline", useCIMAngleBehavior: !1, glyphs: e.textRasterizationParam, scaleInfo: i, effects: e.effects ? { type: "cim-effect-infos", effectInfos: e.effects } : null, placement: e.markerPlacement, transforms: e.transform, scaleFactor: r ?? 1, minPixelBuffer: Fi(t), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null, isLineLabel: !1 } })];
}
function Ka(s, e) {
  return { type: "simple", filters: e, capabilities: { maxTextureSize: vt().maxTextureSize }, bindings: Dr(s) };
}
function Xe(s) {
  switch (s) {
    case "opacity":
      return Oe.OPACITY;
    case "color":
      return Oe.COLOR;
    case "rotation":
      return Oe.ROTATION;
    case "size":
      return Oe.SIZE;
    default:
      return null;
  }
}
function Dr(s) {
  if (!s) return [];
  switch (s.type) {
    case "simple":
    case "class-breaks":
    case "unique-value":
    case "dictionary":
      return Ai(s);
    case "dot-density":
      return Lr(s);
    case "pie-chart":
      return Br(s);
    case "heatmap":
      return kr(s);
  }
}
function Lr(s) {
  const e = [];
  for (const t of s.attributes) e.push({ binding: e.length, expression: t.valueExpression, field: t.field });
  return e;
}
function Br(s) {
  const e = Ai(s);
  let t = 4;
  for (const i of s.attributes) e.push({ binding: t++, expression: i.valueExpression, field: i.field });
  return e;
}
function kr({ valueExpression: s, field: e }) {
  return s || e ? [{ binding: 0, expression: s, field: e }] : [];
}
function Ai(s) {
  return !("visualVariables" in s) || !s.visualVariables?.length ? [] : Pi(s.visualVariables).map((e) => Gr(e)).filter(ys);
}
function Nr(s) {
  return s.valueExpression === "$view.scale" ? null : { binding: Xe(s.type), field: s.field, normalizationField: s.normalizationField, expression: s.valueExpression, valueRepresentation: s.valueRepresentation };
}
function Ur(s) {
  return { binding: Xe(s.type), field: s.field, normalizationField: s.normalizationField, expression: s.valueExpression };
}
function Hr(s) {
  return { binding: Xe(s.type), field: s.field, normalizationField: s.normalizationField, expression: s.valueExpression };
}
function Wr(s) {
  return { binding: Xe(s.type), expression: s.valueExpression, field: s.field };
}
function Gr(s) {
  switch (s.type) {
    case "size":
      return Nr(s);
    case "color":
      return Ur(s);
    case "opacity":
      return Hr(s);
    case "rotation":
      return Wr(s);
  }
}
function it(s) {
  return s.some((e) => e.globalId);
}
function Me(s) {
  return s.filter((e) => !e.error).map((e) => e.objectId ?? e.globalId).filter((e) => e != null);
}
function Wt(s, e) {
  const t = new Set(s);
  for (const i of e.values()) t.add(i);
  return t;
}
function Gt(s, e) {
  const t = new Set(s);
  for (const i of e.values()) t.delete(i);
  return t;
}
class Za {
  constructor(e) {
    this.updateTracking = new cs({ debugName: "FeatureCommandQueue" }), this._hasGlobalIds = !1, this._queueProcessor = new bs({ concurrency: 1, process: e.process });
  }
  destroy() {
    this.updateTracking.destroy(), this._queueProcessor.destroy(), this.clear();
  }
  clear() {
    this._queueProcessor.clear();
  }
  async push(e) {
    return this.updateTracking.addPromise(this._doPush(e));
  }
  async _doPush(e) {
    const t = this._queueProcessor, i = t.last(), r = [];
    switch (e.type) {
      case "update":
        if (i?.type === e.type) return;
        r.push(t.push(e));
        break;
      case "edit": {
        const a = i?.type === "processed-edit" ? i : null;
        a && t.popLast();
        const o = this._mergeEdits(a, e);
        for (const l of o) l && r.push(t.push(l));
        break;
      }
    }
    await Promise.all(r);
  }
  _mergeEdits(e, t) {
    const { addedFeatures: i, deletedFeatures: r, updatedFeatures: a } = t.edits;
    if (this._hasGlobalIds = this._hasGlobalIds || it(i) || it(a) || it(r), this._hasGlobalIds)
      return [e, { type: "processed-edit", edits: { addOrModified: [...i, ...a], removed: r } }];
    const o = new Set(Me(e?.edits.addOrModified ?? [])), l = new Set(Me(e?.edits.removed ?? [])), u = /* @__PURE__ */ new Set([...Me(i), ...Me(a)]), p = new Set(Me(r));
    return [{ type: "processed-edit", edits: { addOrModified: Array.from(Wt(Gt(o, p), u)).map((d) => ({ objectId: d })), removed: Array.from(Wt(Gt(l, u), p)).map((d) => ({ objectId: d })) } }];
  }
}
export {
  Ua as F,
  Ar as S,
  Ha as T,
  Ir as a,
  Za as b,
  Ga as c,
  ur as d,
  Fi as e,
  _r as f,
  Ai as g,
  J as h,
  qa as i,
  Wa as m,
  ja as n,
  Fr as p,
  zr as s,
  Ka as t,
  Mr as u,
  xt as x,
  Er as y,
  Cr as z
};
//# sourceMappingURL=FeatureCommandQueue-DyM-K0nh.js.map
