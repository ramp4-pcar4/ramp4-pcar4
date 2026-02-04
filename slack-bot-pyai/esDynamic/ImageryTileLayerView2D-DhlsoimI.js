import { h0 as U, fg as z, f9 as me, fa as A, fb as L, fc as fe, fd as ge, fe as ae, bj as Q, az as ne, h6 as _e, N as h, O as p, P as M, dU as ye, jQ as xe, S as be, G as H, aU as we, le as ve, E as Te, F as Pe, dl as Se, fh as J, a6 as Re, K as $, C as F, fw as Ie, U as k, of as Ue, fo as $e, s as X, ap as Fe, fi as Ce, mR as Y, X as ze } from "./main-DhLeoxL5.js";
import { f as Me, d as Ve, a as Be } from "./RasterVFDisplayObject-By3ybQMp.js";
import { a as Le, m as Ge, u as ke } from "./LayerView-BUXYmvJm.js";
import { i as De, E as O, r as oe } from "./Container-B4fR9B2k.js";
import { L as j, P as Oe, U as Ee, D as Ae, R as G, O as K } from "./enums-Do5C4ZjN.js";
import { c as je, f as qe, m as Z, O as I, h as v, _ as q, A as We, p as Ne, l as Qe, T as He, g as Je } from "./rasterUtils-BQWfInJ0.js";
import { e as Xe, m as Ye } from "./Texture-DX36kIdt.js";
import { a as C } from "./definitions-7ZaZRHRo.js";
import { t as Ke, a as ee, r as le } from "./WGLContainer-Cnz7j1HY.js";
import { x as Ze } from "./Program-Bz_GT0wk.js";
import { i as ue } from "./TileContainer-CTT7qXgn.js";
import { g as te, a as se, i as et, u as tt } from "./RawBlockCache-DjorGMIB.js";
import { D as st, a as rt, s as re, v as it } from "./rasterProjectionHelper-DRYmQmjM.js";
import { p as at } from "./popupUtils-CfpMu5Sm.js";
import { i as nt } from "./RefreshableLayerView-D_DHKFsO.js";
const ot = { bandCount: 3, outMin: 0, outMax: 1, minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255], factor: [1 / 255, 1 / 255, 1 / 255], useGamma: !1, gamma: [1, 1, 1], gammaCorrection: [1, 1, 1], colormap: null, colormapOffset: null, stretchType: "none", type: "stretch" };
class lt extends De {
  constructor(e = null, t = null, r = null) {
    super(), this._textureInvalidated = !0, this._colormapTextureInvalidated = !0, this._rasterTexture = null, this._rasterTextureBandIds = null, this._transformGridTexture = null, this._colormapTexture = null, this._colormap = null, this._supportsBilinearTexture = !0, this._processedTexture = null, this.functionTextures = [], this.projected = !1, this.stencilRef = 0, this.coordScale = [1, 1], this._processed = !1, this._symbolizerParameters = null, this.height = null, this.isRendereredSource = !1, this.pixelRatio = 1, this.resolution = 0, this.rotation = 0, this._source = null, this.rawPixelData = null, this._suspended = !1, this._bandIds = null, this._interpolation = null, this._transformGrid = null, this.width = null, this.x = 0, this.y = 0, this.source = e, this.transformGrid = t, this.interpolation = r;
  }
  destroy() {
    this._disposeTextures();
  }
  get processedTexture() {
    return this._processedTexture;
  }
  set processedTexture(e) {
    this._processedTexture !== e && (this._disposeTextures(!0), this._processedTexture = e);
  }
  get rasterTexture() {
    return this._rasterTexture;
  }
  set rasterTexture(e) {
    this._rasterTexture !== e && (this._rasterTexture?.dispose(), this._rasterTexture = e), e == null && (this.projected = !1);
  }
  get processed() {
    return this._processed;
  }
  set processed(e) {
    this._processed = e, e || (U(this.processedTexture), this.invalidateTexture());
  }
  get symbolizerParameters() {
    return this._symbolizerParameters || ot;
  }
  set symbolizerParameters(e) {
    this._symbolizerParameters !== e && (this._symbolizerParameters = e, this._colormapTextureInvalidated = !0, this.commonUniforms = null);
  }
  get source() {
    return this._source;
  }
  set source(e) {
    this._source !== e && (this._source = e, this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null), this.commonUniforms = null, this.projected = !1, this.invalidateTexture());
  }
  get suspended() {
    return this._suspended;
  }
  set suspended(e) {
    this._suspended && !e && this.stage && (this.ready(), this.requestRender()), this._suspended = e;
  }
  get bandIds() {
    return this._bandIds;
  }
  set bandIds(e) {
    this._bandIds = e, this._isBandIdsChanged(e) && (this.projected = !1, this.invalidateTexture());
  }
  get interpolation() {
    return this._interpolation || "nearest";
  }
  set interpolation(e) {
    this._interpolation = e, this._rasterTexture && this._rasterTexture.setSamplingMode(this._getTextureSamplingMethod(e || "nearest") === "bilinear" ? j.LINEAR : j.NEAREST);
  }
  get transformGrid() {
    return this._transformGrid;
  }
  set transformGrid(e) {
    this._transformGrid !== e && (this._transformGrid = e, this._transformGridTexture = U(this._transformGridTexture));
  }
  invalidateTexture() {
    this._textureInvalidated || (this._textureInvalidated = !0, this.requestRender());
  }
  getRasterTextureSize(e = !1) {
    const t = e || this.projected;
    return [t ? this.width : this.source?.width || this.width, t ? this.height : this.source?.height || this.height];
  }
  getRasterCellSize() {
    const e = this.rawPixelData?.srcPixelSize, { projected: t, resolution: r } = this;
    return e && !t ? [e.x, e.y] : [r, r];
  }
  _createTransforms() {
    return { displayViewScreenMat3: z() };
  }
  setTransform(e) {
    const t = me(this.transforms.displayViewScreenMat3), [r, i] = e.toScreenNoRotation([0, 0], [this.x, this.y]), a = this.resolution / this.pixelRatio / e.resolution, n = a * this.width, o = a * this.height, l = Math.PI * this.rotation / 180;
    A(t, t, L(r, i)), A(t, t, L(n / 2, o / 2)), fe(t, t, -l), A(t, t, L(-n / 2, -o / 2)), ge(t, t, L(n, o)), ae(this.transforms.displayViewScreenMat3, e.displayViewMat3, t);
  }
  getTextures({ forProcessing: e = !1, useProcessedTexture: t = !1 } = {}) {
    const r = t ? this._processedTexture ?? this._rasterTexture : this._rasterTexture, i = [], a = [];
    return r ? (this._transformGridTexture && !this.projected && (a.push(this._transformGridTexture), i.push("u_transformGrid")), t ? (a.push(r), i.push("u_image"), this._colormapTexture && (a.push(this._colormapTexture), i.push("u_colormap")), { names: i, textures: a }) : (a.push(r), i.push("u_image"), this._colormapTexture && !e && (a.push(this._colormapTexture), i.push("u_colormap")), { names: i, textures: a })) : { names: i, textures: a };
  }
  onAttach() {
    this.invalidateTexture();
  }
  onDetach() {
    this.invalidateTexture();
  }
  updateTexture({ context: e }) {
    if (!this.stage) return void this._disposeTextures();
    const t = this._isValidSource(this.source);
    t && this._colormapTextureInvalidated && (this._colormapTextureInvalidated = !1, this._updateColormapTexture(e)), this._textureInvalidated && (this._textureInvalidated = !1, this._createOrDestroyRasterTexture(e), this._rasterTexture && (t ? this.transformGrid && !this._transformGridTexture && (this._transformGridTexture = je(e, this.transformGrid)) : this._rasterTexture.setData(null)), this.suspended || (this.ready(), this.requestRender()));
  }
  updateProcessedTexture() {
    const { functionTextures: e } = this;
    e.length !== 0 && (this.processedTexture = e.shift(), e.forEach((t) => t?.dispose()), e.length = 0);
  }
  _createOrDestroyRasterTexture(e) {
    const t = this.source?.extractBands(this.bandIds);
    if (!this._isValidSource(t)) return void (this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null));
    const r = !this._isBandIdsChanged(this.bandIds);
    if (this._rasterTexture) {
      if (r) return;
      this._rasterTexture.dispose(), this._rasterTextureBandIds = null, this._rasterTexture = null;
    }
    this._supportsBilinearTexture = !!e.capabilities.textureFloat?.textureFloatLinear;
    const i = this._getTextureSamplingMethod(this.interpolation), a = this.isRendereredSource;
    this._rasterTexture = qe(e, t, i, a), this.projected = !1, this._processed = !1, this._rasterTextureBandIds = this.bandIds ? [...this.bandIds] : null;
  }
  _isBandIdsChanged(e) {
    const t = this._rasterTextureBandIds;
    return !(t == null && e == null || t && e && t.join("") === e.join(""));
  }
  _isValidSource(e) {
    return e != null && e.pixels?.length > 0;
  }
  _getTextureSamplingMethod(e) {
    const { type: t } = this.symbolizerParameters, r = t === "lut" || t === "hillshade" || t === "stretch" && this.symbolizerParameters.bandCount === 1;
    return !this._supportsBilinearTexture || r || e !== "bilinear" && e !== "cubic" ? "nearest" : "bilinear";
  }
  _updateColormapTexture(e) {
    const t = this._colormap, r = this.symbolizerParameters.colormap;
    return r ? t ? r.length !== t.length || r.some((i, a) => i !== t[a]) ? (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), this._colormapTexture = Z(e, r), void (this._colormap = r)) : void 0 : (this._colormapTexture = Z(e, r), void (this._colormap = r)) : (this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null), void (this._colormap = null));
  }
  _disposeTextures(e = !1) {
    !this._transformGridTexture || e && !this.projected || (this._transformGridTexture.dispose(), this._transformGridTexture = null), !e && this._colormapTexture && (this._colormapTexture.dispose(), this._colormapTexture = null, this._colormap = null, this._colormapTextureInvalidated = !0), !e && this._rasterTexture && (this._rasterTexture.dispose(), this._rasterTexture = null, this._rasterTextureBandIds = null), this._processedTexture && (this._processedTexture.dispose(), this._processedTexture = null);
  }
}
function ut(s) {
  return s.source != null;
}
function W(s) {
  const e = [];
  return s && (e.push("applyProjection"), s.spacing[0] === 1 && e.push("lookupProjection")), e;
}
function ce(s, e, t) {
  const r = !t.capabilities.textureFloat?.textureFloatLinear, i = [];
  return s === "cubic" ? i.push("bicubic") : s === "bilinear" && (e ? (i.push("bilinear"), i.push("nnedge")) : r && i.push("bilinear")), i;
}
const ct = { vsPath: "raster/common", fsPath: "raster/lut", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function ht(s, e, t) {
  const r = t ? [] : W(e.transformGrid);
  return { defines: r, program: s.painter.materialManager.getProgram(ct, r) };
}
function dt(s, e, t, r, i = !1) {
  const { names: a, textures: n } = t.getTextures({ useProcessedTexture: i });
  I(s.context, e, a, n), v(e, r, t.commonUniforms), e.setUniformMatrix3fv("u_dvsMat3", t.transforms.displayViewScreenMat3);
  const { colormap: o, colormapOffset: l } = t.symbolizerParameters, c = q(o, l);
  v(e, r, c);
}
const pt = { createProgram: ht, bindTextureAndUniforms: dt }, mt = { vsPath: "raster/common", fsPath: "raster/hillshade", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function ft(s, e, t) {
  const { colormap: r } = e.symbolizerParameters, i = [...t ? [] : W(e.transformGrid), ...ce(e.interpolation, !0, s.context)];
  return r != null && i.push("applyColormap"), { defines: i, program: s.painter.materialManager.getProgram(mt, i) };
}
function gt(s, e, t, r, i = !1) {
  const { names: a, textures: n } = t.getTextures({ useProcessedTexture: i });
  I(s.context, e, a, n), v(e, r, t.commonUniforms), e.setUniformMatrix3fv("u_dvsMat3", t.transforms.displayViewScreenMat3);
  const o = t.symbolizerParameters, { colormap: l, colormapOffset: c } = o;
  if (l != null) {
    const d = q(l, c);
    v(e, r, d);
  }
  const m = We(o);
  v(e, r, m);
}
const _t = { createProgram: ft, bindTextureAndUniforms: gt }, yt = { vsPath: "raster/common", fsPath: "raster/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function xt(s, e, t) {
  const { colormap: r, bandCount: i } = e.symbolizerParameters, a = [...t ? [] : W(e.transformGrid), ...ce(e.interpolation, i === 1, s.context)];
  return e.isRendereredSource && !t ? a.push("noop") : r != null && a.push("applyColormap"), { defines: a, program: s.painter.materialManager.getProgram(yt, a) };
}
function bt(s, e, t, r, i = !1) {
  const { names: a, textures: n } = t.getTextures({ useProcessedTexture: i });
  I(s.context, e, a, n), v(e, r, t.commonUniforms), e.setUniformMatrix3fv("u_dvsMat3", t.transforms.displayViewScreenMat3);
  const o = t.symbolizerParameters, { colormap: l, colormapOffset: c } = o;
  if (l != null) {
    const d = q(l, c);
    v(e, r, d);
  }
  const m = Ne(o);
  v(e, r, m);
}
const wt = { createProgram: xt, bindTextureAndUniforms: bt }, D = /* @__PURE__ */ new Map();
function vt(s) {
  return D.get(s);
}
D.set("lut", pt), D.set("hillshade", _t), D.set("stretch", wt);
const Tt = [1, 1], Pt = [2, 0, 0, 0, 2, 0, -1, -1, 0];
function b(s, e, t) {
  const { context: r, rasterFunction: i, hasBranches: a } = s, { raster: n } = i.parameters, o = a ? n?.id ?? -1 : 0, l = t.functionTextures[o] ?? t.rasterTexture;
  I(r, e, ["u_image"], [l]);
}
function he(s, e, t) {
  const { rasters: r } = s.rasterFunction.parameters;
  if (!r) return;
  if (r.length < 2) return b(s, e, t);
  const i = r.filter((a) => a.name !== "Constant").map((a) => a.id != null && a.name !== "Identity" ? t.functionTextures[a.id] : t.rasterTexture);
  if (I(s.context, e, ["u_image", "u_image1", "u_image2"].slice(0, i.length), i), i.length !== r.length) {
    if (r.length === 2) {
      const a = r.findIndex((l) => l.name === "Constant"), n = a === 0 ? [0, 1, 0, 1, 0, 0, 0, 0, 0] : [1, 0, 0, 0, 1, 0, 0, 0, 0], { value: o } = r[a].parameters;
      e.setUniform1f("u_image1Const", o), e.setUniformMatrix3fv("u_imageSwap", n);
    } else if (r.length === 3) {
      const a = [];
      if (r.forEach((n, o) => n.name === "Constant" && a.push(o)), a.length === 1) {
        const { value: n } = r[a[0]].parameters;
        e.setUniform1f("u_image1Const", n);
        const o = a[0] === 0 ? [0, 1, 0, 0, 0, 1, 1, 0, 0] : a[0] === 1 ? [1, 0, 0, 0, 0, 1, 0, 1, 0] : [1, 0, 0, 0, 1, 0, 0, 0, 1];
        e.setUniformMatrix3fv("u_imageSwap", o);
      } else if (a.length === 2) {
        const { value: n } = r[a[0]].parameters;
        e.setUniform1f("u_image1Const", n);
        const { value: o } = r[a[1]].parameters;
        e.setUniform1f("u_image2Const", o);
        const l = r.findIndex((m) => m.name !== "Constant"), c = l === 0 ? [1, 0, 0, 0, 1, 0, 0, 0, 1] : l === 1 ? [0, 1, 0, 1, 0, 0, 0, 0, 1] : [0, 0, 1, 1, 0, 0, 0, 1, 0];
        e.setUniformMatrix3fv("u_imageSwap", c);
      }
    }
  }
}
function y(s) {
  s.setUniform2fv("u_coordScale", Tt), s.setUniformMatrix3fv("u_dvsMat3", Pt);
}
const St = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/aspect", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Rt(s, e) {
  return s.painter.materialManager.getProgram(St, []);
}
function It(s, e, t) {
  b(s, e, t), y(e);
  const r = t.getRasterTextureSize();
  e.setUniform2fv("u_srcImageSize", r);
  const i = t.getRasterCellSize();
  e.setUniform2fv("u_cellSize", i);
}
const Ut = { createProgram: Rt, bindTextureAndUniforms: It }, $t = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/bandarithmetic", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Ft(s, e) {
  const { painter: t, rasterFunction: r } = s, { indexType: i } = r.parameters;
  return t.materialManager.getProgram($t, [i]);
}
function Ct(s, e, t) {
  b(s, e, t), y(e);
  const { bandIndexMat3: r } = s.rasterFunction.parameters;
  e.setUniformMatrix3fv("u_bandIndexMat3", r);
}
const zt = { createProgram: Ft, bindTextureAndUniforms: Ct }, Mt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/compositeband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Vt(s, e) {
  const t = s.rasterFunction.parameters.rasters.filter((i) => i.name === "Constant"), r = [];
  return t.length && (r.push("oneConstant"), t.length === 2 && r.push("twoConstant")), s.painter.materialManager.getProgram(Mt, r);
}
function Bt(s, e, t) {
  he(s, e, t), y(e);
}
const Lt = { createProgram: Vt, bindTextureAndUniforms: Bt }, Gt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/contrast", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function kt(s, e) {
  return s.painter.materialManager.getProgram(Gt, []);
}
function Dt(s, e, t) {
  b(s, e, t), y(e);
  const { contrastOffset: r, brightnessOffset: i } = s.rasterFunction.parameters;
  e.setUniform1f("u_contrastOffset", r), e.setUniform1f("u_brightnessOffset", i);
}
const Ot = { createProgram: kt, bindTextureAndUniforms: Dt }, Et = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/convolution", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function At(s, e) {
  const { painter: t, rasterFunction: r } = s, { kernelRows: i, kernelCols: a } = r.parameters, n = [{ name: "rows", value: i }, { name: "cols", value: a }];
  return t.materialManager.getProgram(Et, n);
}
function jt(s, e, t) {
  b(s, e, t), y(e), e.setUniform2fv("u_srcImageSize", [t.width, t.height]);
  const { kernel: r, clampRange: i } = s.rasterFunction.parameters;
  e.setUniform1fv("u_kernel", r), e.setUniform2fv("u_clampRange", i);
}
const qt = { createProgram: At, bindTextureAndUniforms: jt }, Wt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/curvature", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Nt(s, e) {
  const { painter: t, rasterFunction: r } = s, { curvatureType: i } = r.parameters, a = [i];
  return t.materialManager.getProgram(Wt, a);
}
function Qt(s, e, t) {
  b(s, e, t), y(e);
  const r = t.getRasterTextureSize();
  e.setUniform2fv("u_srcImageSize", r);
  const { zFactor: i } = s.rasterFunction.parameters, a = t.getRasterCellSize();
  e.setUniform1f("u_zlFactor", 200 * i / a[0] / a[1]);
}
const Ht = { createProgram: Nt, bindTextureAndUniforms: Qt }, Jt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/extractband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Xt(s, e) {
  return s.painter.materialManager.getProgram(Jt, []);
}
function Yt(s, e, t) {
  b(s, e, t), y(e);
  const { bandIndexMat3: r } = s.rasterFunction.parameters;
  e.setUniformMatrix3fv("u_bandIndexMat3", r);
}
const Kt = { createProgram: Xt, bindTextureAndUniforms: Yt }, Zt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/focalstatistics", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function es(s, e) {
  const { painter: t, rasterFunction: r } = s, { kernelRows: i, kernelCols: a, fillNoDataOnly: n, statisticsType: o } = r.parameters, l = [{ name: "rows", value: i }, { name: "cols", value: a }, o];
  return n && l.push("fill"), t.materialManager.getProgram(Zt, l);
}
function ts(s, e, t) {
  b(s, e, t), y(e), e.setUniform2fv("u_srcImageSize", [t.width, t.height]);
  const { clampRange: r } = s.rasterFunction.parameters;
  e.setUniform2fv("u_clampRange", r);
}
const ss = { createProgram: es, bindTextureAndUniforms: ts }, rs = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/grayscale", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function is(s, e) {
  return s.painter.materialManager.getProgram(rs, []);
}
function as(s, e, t) {
  b(s, e, t), y(e);
  const { weights: r } = s.rasterFunction.parameters;
  e.setUniform3fv("u_weights", r);
}
const ns = { createProgram: is, bindTextureAndUniforms: as }, os = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/local", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function ls(s) {
  const { painter: e, rasterFunction: t } = s, { imageCount: r, operationName: i, rasters: a, isOutputRounded: n } = t.parameters, o = [i.toLowerCase()];
  r === 2 && o.push("twoImages");
  const l = a.filter((c) => c.name === "Constant");
  return l.length && (o.push("oneConstant"), l.length === 2 && o.push("twoConstant")), n && o.push("roundOutput"), e.materialManager.getProgram(os, o);
}
function us(s, e, t) {
  he(s, e, t), y(e);
  const { domainRange: r } = s.rasterFunction.parameters;
  e.setUniform2fv("u_domainRange", r);
}
const ie = { createProgram: ls, bindTextureAndUniforms: us }, cs = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/mask", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function hs(s, e) {
  const { painter: t, rasterFunction: r } = s, i = r.parameters.bandCount > 1 ? ["multiBand"] : [];
  return t.materialManager.getProgram(cs, i);
}
function ds(s, e, t) {
  b(s, e, t), y(e);
  const { includedRanges: r, noDataValues: i } = s.rasterFunction.parameters;
  e.setUniform1fv("u_includedRanges", r), e.setUniform1fv("u_noDataValues", i);
}
const ps = { createProgram: hs, bindTextureAndUniforms: ds }, ms = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/ndvi", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function fs(s, e) {
  const { painter: t, rasterFunction: r } = s, i = r.parameters.scaled ? ["scaled"] : [];
  return t.materialManager.getProgram(ms, i);
}
function gs(s, e, t) {
  b(s, e, t), y(e);
  const { bandIndexMat3: r } = s.rasterFunction.parameters;
  e.setUniformMatrix3fv("u_bandIndexMat3", r);
}
const _s = { createProgram: fs, bindTextureAndUniforms: gs }, ys = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/remap", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function xs(s, e) {
  return s.painter.materialManager.getProgram(ys, []);
}
function bs(s, e, t) {
  b(s, e, t), y(e);
  const { noDataRanges: r, rangeMaps: i, allowUnmatched: a, clampRange: n } = s.rasterFunction.parameters;
  e.setUniform1fv("u_noDataRanges", r), e.setUniform1fv("u_rangeMaps", i), e.setUniform1f("u_unmatchMask", a ? 1 : 0), e.setUniform2fv("u_clampRange", n);
}
const ws = { createProgram: xs, bindTextureAndUniforms: bs }, vs = { vsPath: "raster/common", fsPath: "raster/reproject", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Ts(s, e) {
  const { painter: t } = s, r = [], { interpolation: i, transformGrid: a } = e, n = s.rasterFunction?.parameters;
  return i === "cubic" ? r.push("bicubic") : i === "bilinear" && (r.push("bilinear"), n?.requireNNEdge && r.push("nnedge")), a && (r.push("applyProjection"), a.spacing[0] === 1 && r.push("lookupProjection")), t.materialManager.getProgram(vs, r);
}
function Ps(s, e, t) {
  const { names: r, textures: i } = t.getTextures({ forProcessing: !0 });
  I(s.context, e, r, i), e.setUniform1f("u_scale", 1), e.setUniform2fv("u_offset", [0, 0]), e.setUniform2fv("u_coordScale", [1, 1]), e.setUniformMatrix3fv("u_dvsMat3", [2, 0, 0, 0, 2, 0, -1, -1, 0]), e.setUniform1i("u_flipY", 0), e.setUniform1f("u_opacity", 1);
  const { width: a, height: n, source: o, transformGrid: l } = t;
  e.setUniform2fv("u_srcImageSize", [o.width, o.height]), e.setUniform2fv("u_targetImageSize", [a, n]), e.setUniform2fv("u_transformSpacing", l ? l.spacing : Q), e.setUniform2fv("u_transformGridSize", l ? l.size : Q);
}
const Ss = { createProgram: Ts, bindTextureAndUniforms: Ps }, Rs = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/slope", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Is(s, e) {
  const { painter: t, rasterFunction: r } = s, { slopeType: i } = r.parameters, a = i === "percent-rise" ? ["percentRise"] : [];
  return t.materialManager.getProgram(Rs, a);
}
function Us(s, e, t) {
  b(s, e, t), y(e);
  const r = t.getRasterTextureSize();
  e.setUniform2fv("u_srcImageSize", r);
  const i = t.getRasterCellSize();
  e.setUniform2fv("u_cellSize", i);
  const { zFactor: a, slopeType: n, pixelSizePower: o, pixelSizeFactor: l } = s.rasterFunction.parameters;
  e.setUniform1f("u_zFactor", a), e.setUniform1f("u_pixelSizePower", n === "adjusted" ? o : 0), e.setUniform1f("u_pixelSizeFactor", n === "adjusted" ? l : 0);
}
const $s = { createProgram: Is, bindTextureAndUniforms: Us }, Fs = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Cs(s, e) {
  const { useGamma: t, bandCount: r, isOutputRounded: i } = s.rasterFunction.parameters, a = [];
  return t && a.push("useGamma"), r > 1 && a.push("multiBand"), i && a.push("roundOutput"), s.painter.materialManager.getProgram(Fs, a);
}
function zs(s, e, t) {
  b(s, e, t), y(e);
  const { width: r, height: i } = t, a = s.rasterFunction.parameters;
  e.setUniform2fv("u_srcImageSize", [r, i]), e.setUniform1f("u_minOutput", a.outMin), e.setUniform1f("u_maxOutput", a.outMax), e.setUniform1fv("u_factor", a.factor), e.setUniform1fv("u_minCutOff", a.minCutOff), e.setUniform1fv("u_maxCutOff", a.maxCutOff), e.setUniform1fv("u_gamma", a.gamma), e.setUniform1fv("u_gammaCorrection", a.gammaCorrection);
}
const Ms = { createProgram: Cs, bindTextureAndUniforms: zs }, _ = /* @__PURE__ */ new Map();
function de(s, e) {
  const t = new Xe();
  return t.width = s, t.height = e, t.internalFormat = Oe.RGBA32F, t.samplingMode = j.NEAREST, t.dataType = Ee.FLOAT, t.isImmutable = !0, t.wrapMode = Ae.CLAMP_TO_EDGE, t;
}
function Vs(s, e, t, r) {
  const { context: i, requestRender: a, allowDelayedRender: n } = s, o = r.createProgram(s, t);
  return n && a != null && !o.compiled ? (a(), null) : (i.bindFramebuffer(e), i.setViewport(0, 0, e.width, e.height), i.useProgram(o), o);
}
function Bs(s) {
  return _.get(s.toLowerCase());
}
function Ls(s, e, t, r) {
  const i = s.rasterFunction.name.toLowerCase(), a = i === "reproject" ? Ss : Bs(i);
  if (a == null) return;
  const n = Vs(s, t, r, a);
  if (!n) return;
  a.bindTextureAndUniforms(s, n, r);
  const { interpolation: o } = r;
  i === "reproject" && (r.interpolation = "nearest"), e.draw();
  const [l, c] = r.getRasterTextureSize(i === "reproject"), m = de(l, c), d = new Ye(s.context, m);
  if (t.copyToTexture(0, 0, l, c, 0, 0, d), i === "reproject") r.rasterTexture = d, r.projected = !0, r.interpolation = o;
  else {
    const u = s.hasBranches ? s.rasterFunction.id : 0;
    r.functionTextures[u] = d;
  }
}
_.set("arithmetic", ie), _.set("aspect", Ut), _.set("bandarithmetic", zt), _.set("compositeband", Lt), _.set("convolution", qt), _.set("contrastbrightness", Ot), _.set("curvature", Ht), _.set("extractband", Kt), _.set("statistics", ss), _.set("grayscale", ns), _.set("local", ie), _.set("mask", ps), _.set("ndvi", _s), _.set("remap", ws), _.set("slope", $s), _.set("stretch", Ms);
class Gs extends Ke {
  constructor() {
    super(...arguments), this.name = "raster", this._quad = null, this._rendererUniformInfos = /* @__PURE__ */ new Map(), this._fbo = null;
  }
  dispose() {
    U(this._quad), U(this._fbo);
  }
  prepareState(e) {
    const { context: t, renderPass: r } = e, i = r === "raster";
    t.setBlendingEnabled(!i), t.setBlendFunctionSeparate(G.ONE, G.ONE_MINUS_SRC_ALPHA, G.ONE, G.ONE_MINUS_SRC_ALPHA), t.setColorMask(!0, !0, !0, !0), t.setStencilWriteMask(0), t.setStencilTestEnabled(!i);
  }
  draw(e, t) {
    if (!ut(t) || t.suspended) return;
    const { renderPass: r } = e;
    if (r !== "raster-bitmap") return r === "raster" ? this._process(e, t) : void this._drawBitmap(e, t, !0);
    this._drawBitmap(e, t);
  }
  _process(e, t) {
    const { rasterFunction: r } = e, i = r.name === "Reproject";
    if (!(i ? !(t.rasterTexture && t.projected) : !t.processed)) return;
    const { timeline: a, context: n } = e;
    a.begin(this.name);
    const o = n.getBoundFramebufferObject(), l = n.getViewport();
    i || (t.processedTexture = U(t.processedTexture)), n.setStencilFunction(K.EQUAL, t.stencilRef, 255), t.updateTexture(e), this._initQuad(n);
    const [c, m] = t.getRasterTextureSize(i), { isStandardRasterTileSize: d, fbo: u } = this._getRasterFBO(n, c, m);
    Ls(e, this._quad, u, t), d || u.dispose(), n.bindFramebuffer(o), n.setViewport(l.x, l.y, l.width, l.height), a.end(this.name);
  }
  _drawBitmap(e, t, r = !1) {
    const { timeline: i, context: a } = e;
    if (i.begin(this.name), a.setStencilFunction(K.EQUAL, t.stencilRef, 255), t.updateTexture(e), r && !t.processedTexture) {
      if (t.updateProcessedTexture(), !t.processedTexture) return void i.end(this.name);
      t.processed = !0;
    }
    this._initBitmapCommonUniforms(t);
    const n = t.symbolizerParameters.type, o = vt(n), { requestRender: l, allowDelayedRender: c } = e, { defines: m, program: d } = o.createProgram(e, t, t.projected && r);
    if (c && l != null && !d.compiled) return void l();
    a.useProgram(d);
    const u = this._getUniformInfos(n, a, d, m);
    this._quad || (this._quad = new ee(a, [0, 0, 1, 0, 0, 1, 1, 1])), o.bindTextureAndUniforms(e, d, t, u, r), this._quad.draw(), i.end(this.name);
  }
  _initBitmapCommonUniforms(e) {
    if (!e.commonUniforms) {
      const t = Je(1, [0, 0]), { transformGrid: r, width: i, height: a } = e, n = Qe(r, [i, a], [e.source.width, e.source.height], 1, !1);
      e.commonUniforms = { ...t, ...n, u_coordScale: e.coordScale };
    }
  }
  _getRasterFBO(e, t, r) {
    const i = t === C && r === C;
    return i ? (this._fbo || (this._fbo = this._createNewFBO(e, t, r)), { isStandardRasterTileSize: i, fbo: this._fbo }) : { isStandardRasterTileSize: i, fbo: this._createNewFBO(e, t, r) };
  }
  _createNewFBO(e, t, r) {
    const i = de(t, r);
    return new Ze(e, i);
  }
  _initQuad(e) {
    this._quad || (this._quad = new ee(e, [0, 0, 1, 0, 0, 1, 1, 1]));
  }
  _getUniformInfos(e, t, r, i) {
    const a = i.length > 0 ? e + "-" + i.join("-") : e;
    if (this._rendererUniformInfos.has(a)) return this._rendererUniformInfos.get(a);
    const n = He(t, r);
    return this._rendererUniformInfos.set(a, n), n;
  }
}
class ks extends le {
  constructor(e, t, r, i, a, n, o = null) {
    super(e, t, r, i, a, n), this.bitmap = null, this.bitmap = new lt(o, null, null), this.bitmap.coordScale = [a, n], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy(), this.bitmap = null, this.stage = null;
  }
  set stencilRef(e) {
    this.bitmap.stencilRef = e;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  setTransform(e) {
    super.setTransform(e), this.bitmap.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  _createTransforms() {
    return { displayViewScreenMat3: z(), tileMat3: z() };
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap.stage = null;
  }
}
let Ds = class extends ue {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = !1;
  }
  createTile(e) {
    const t = this._getTileBounds(e), [r, i] = this._tileInfoView.tileInfo.size, a = this._tileInfoView.getTileResolution(e.level);
    return new ks(e, a, t[0], t[3], r, i);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "imagery (tile)", brushes: [Gs], target: () => this.children.map((r) => r.bitmap), drawPhase: O.MAP });
    return [...super.prepareRenderPasses(e), t];
  }
  doRender(e) {
    if (!this.visible || e.drawPhase !== O.MAP) return;
    const { rasterFunctionChain: t } = this;
    if (!t) return e.renderPass = "raster-bitmap", void super.doRender(e);
    if (!t.hasFocalFunction) {
      const [r, i] = this._tileInfoView.tileInfo.size;
      e.renderPass = "raster", e.rasterFunction = { name: "Reproject", parameters: { targetImageSize: [r, i], requireNNEdge: t.isSourceSingleBand }, pixelType: "f32", id: 0, isNoopProcess: !1 }, super.doRender(e);
    }
    if (t?.functions.length) {
      const { functions: r, hasBranches: i } = t;
      for (let a = 0; a < r.length; a++) {
        const n = r[a];
        n.name !== "Constant" && n.name !== "Identity" && (e.renderPass = "raster", e.rasterFunction = n, e.hasBranches = i, super.doRender(e));
      }
    }
    e.rasterFunction = null, e.renderPass = "bitmap", super.doRender(e);
  }
  _getTileBounds(e) {
    const t = this._tileInfoView.getTileBounds(ne(), e);
    if (this.isCustomTilingScheme && e.world) {
      const { tileInfo: r } = this._tileInfoView, i = _e(r.spatialReference);
      if (i) {
        const a = r.lodAt(e.level);
        if (!a) return t;
        const { resolution: n } = a, o = i / n % r.size[0], l = o ? (r.size[0] - o) * n : 0;
        t[0] -= l * e.world, t[2] -= l * e.world;
      }
    }
    return t;
  }
};
const Os = [0, 0];
let x = class extends ye {
  constructor() {
    super(...arguments), this._updatingHandles = new xe(), this._emptyTilePixelBlock = null, this._tileStrategy = null, this._tileInfoView = null, this._fetchQueue = null, this._blockCacheRegistryUrl = null, this._blockCacheRegistryId = null, this._srcResolutions = [], this.previousLOD = null, this._needBlockCacheUpdate = !1, this._globalSymbolizerParams = null, this._symbolizerParams = null, this._abortController = null, this._isCustomTilingScheme = !1, this._maxIndexedColormapSize = 0, this._rasterFunctionState = "na", this._globalUpdateRequested = !1, this.attached = !1, this.timeExtent = null, this.redrawOrRefetch = be(async (s = {}) => {
      const e = this._rasterFunctionState;
      if (s.reprocess && (await this._updatingHandles.addPromise(this.layer.updateRasterFunction()), this.updateRasterFunctionParameters()), !this.previousLOD || this.layerView.suspended) return;
      const t = this._rasterFunctionState, { type: r } = this;
      return s.refetch || r !== "raster" && s.reprocess || t === "cpu" || e === "cpu" ? this._updatingHandles.addPromise(this.doRefresh()) : this._updatingHandles.addPromise(this._redrawImage(s.signal));
    });
  }
  destroy() {
    this._updatingHandles.destroy();
  }
  get useWebGLForProcessing() {
    return this._get("useWebGLForProcessing") ?? !0;
  }
  set useWebGLForProcessing(s) {
    this._set("useWebGLForProcessing", s);
  }
  get useProgressiveUpdate() {
    return this._get("useProgressiveUpdate") ?? !0;
  }
  set useProgressiveUpdate(s) {
    if (this._tileStrategy && this.useProgressiveUpdate !== s) {
      this._tileStrategy.destroy(), this.container.removeAllChildren();
      const e = this._getCacheSize(s);
      this._tileStrategy = new H({ cachePolicy: "purge", acquireTile: (t) => this.acquireTile(t), releaseTile: (t) => this.releaseTile(t), cacheSize: e, tileInfoView: this._tileInfoView }), this._set("useProgressiveUpdate", s), this.layerView.requestUpdate();
    }
  }
  update(s) {
    this._fetchQueue.pause(), this._fetchQueue.state = s.state, this._tileStrategy.update(s), this._fetchQueue.resume();
    const { extent: e, resolution: t, scale: r } = s.state, i = this._tileInfoView.getClosestInfoForScale(r);
    if (this.layer.raster) {
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const a = this._srcResolutions[i.level], n = e.toJSON ? e : we.fromJSON(e);
        te(this._blockCacheRegistryUrl, this._blockCacheRegistryId, n, t, a, this.layer.raster.ioConfig.sampling);
      }
      this._needBlockCacheUpdate = !1, this.previousLOD?.level !== i.level && (this.previousLOD = i, this._symbolizerParams == null || this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._tileStrategy.updateCacheSize(0));
    }
  }
  moveEnd() {
    !this.layerView.hasTilingEffects && this.useProgressiveUpdate || (this._abortController && this._abortController.abort(), this._abortController = new AbortController(), this._fetchQueue.length === 0 && this._redrawImage(this._abortController.signal).then(() => {
      this._globalUpdateRequested = !1, this.layerView.requestUpdate();
    }));
    const s = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy.updateCacheSize(s), this.layerView.requestUpdate();
  }
  get updating() {
    return this._globalUpdateRequested || this._updatingHandles?.updating;
  }
  attach() {
    const s = ve();
    this._maxIndexedColormapSize = 4 * (s.maxTextureSize || 4096), this._initializeTileInfo(), this._tileInfoView = new Te(this.layerView.tileInfo, this.layerView.fullExtent);
    const e = this._computeFetchConcurrency();
    this._fetchQueue = new Pe({ tileInfoView: this._tileInfoView, concurrency: e, process: (r, i) => this._fetchTile(r, i) });
    const t = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy = new H({ cachePolicy: "purge", acquireTile: (r) => this.acquireTile(r), releaseTile: (r) => this.releaseTile(r), cacheSize: t, tileInfoView: this._tileInfoView }), this._updateBlockCacheRegistry();
  }
  detach() {
    this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null, se(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryUrl = this._blockCacheRegistryId = null;
  }
  acquireTile(s) {
    const e = this.container.createTile(s);
    return this._updatingHandles.addPromise(this._enqueueTileFetch(e)), this.layerView.requestUpdate(), this._needBlockCacheUpdate = !0, this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, e;
  }
  releaseTile(s) {
    this._fetchQueue.abort(s.key.id), this.container.removeChild(s), s.once("detach", () => {
      s.destroy(), this.layerView.requestUpdate();
    }), this.layerView.requestUpdate();
  }
  createEmptyTilePixelBlock(s = null) {
    const e = s == null || s.join(",") === this._tileInfoView.tileInfo.size.join(",");
    if (e && this._emptyTilePixelBlock != null) return this._emptyTilePixelBlock;
    s = s || this._tileInfoView.tileInfo.size;
    const [t, r] = s, i = new Se({ width: t, height: r, pixels: [new Uint8Array(t * r)], mask: new Uint8Array(t * r), pixelType: "u8" });
    return e && (this._emptyTilePixelBlock = i), i;
  }
  _getBandIds() {
    if (!("rasterFunctionChain" in this.container) || !this.container.rasterFunctionChain) return this.layer.bandIds;
    const { bandIds: s, raster: e } = this.layer, t = "rasterFunction" in e ? e.rasterFunction.rawInputBandIds : null;
    return s?.length && t?.length && e.rasterInfo.bandCount !== 1 ? s.map((r) => t[Math.min(r, t.length - 1)]) : s || t;
  }
  updateRasterFunctionParameters() {
  }
  _fetchTile(s, e) {
    const t = e != null ? e.signal : null, r = this.canUseWebGLForProcessing(), { layerView: i } = this, { tileInfo: a } = i, n = !a.isWrappable && st(i.view.spatialReference) != null, o = r && this.layer.raster.hasUniqueSourceStorageInfo, l = { allowPartialFill: !0, datumTransformation: i.datumTransformation, interpolation: r ? "nearest" : this.layer.interpolation, registryId: this._blockCacheRegistryId, requestRawData: o, skipRasterFunction: this.type === "raster" && this.container.rasterFunctionChain != null, signal: t, srcResolution: this._srcResolutions[s.level], timeExtent: i.timeExtent, tileInfo: a, disableWrapAround: n };
    return this.fetchTile(s, l);
  }
  _getCacheSize(s) {
    return s ? 40 : 0;
  }
  _initializeTileInfo() {
    const { layerView: s } = this, e = s.view.spatialReference;
    if (this._canUseLayerLODs()) {
      const { origin: c, lods: m } = this.layer.tileInfo, d = m.map(({ scale: f }) => f), u = J.create({ spatialReference: e, size: C, scales: d, origin: c });
      return s.set("tileInfo", u), void (this._srcResolutions = m.map(({ resolution: f }) => ({ x: f, y: f })));
    }
    const { scales: t, srcResolutions: r, isCustomTilingScheme: i } = rt(this.layer.serviceRasterInfo, e, { tileSize: C, alignGlobalDatasetWithAGOL: !0, limitToSrcResolution: !1 }), a = J.create({ spatialReference: e, size: C, scales: t }), n = a.origin.x === 0, { xmin: o, ymax: l } = s.fullExtent;
    (n || i && a.origin.x > o) && (a.origin = new Re({ x: o, y: l, spatialReference: e })), this._isCustomTilingScheme = i, s.set("tileInfo", a), this._srcResolutions = r ?? [];
  }
  _canUseLayerLODs() {
    const { layer: s, layerView: e } = this;
    if (s.raster.tileType !== "Map") return !1;
    const { lods: t } = s.tileInfo, r = e.view.constraints?.effectiveLODs;
    return r?.length === t.length && r.every(({ scale: i }, a) => Math.abs(i - t[a].scale) < 1e-3);
  }
  _computeFetchConcurrency() {
    const { blockBoundary: s } = this.layer.serviceRasterInfo.storageInfo, e = s[s.length - 1];
    return (e.maxCol - e.minCol + 1) * (e.maxRow - e.minRow + 1) > 64 ? 2 : 10;
  }
  async _enqueueTileFetch(s, e) {
    if (!this._fetchQueue.has(s.key.id)) {
      try {
        const t = await this._fetchQueue.push(s.key), r = this._getBandIds();
        let i = !this.useProgressiveUpdate || this.layerView.hasTilingEffects && !this._globalSymbolizerParams;
        if (this._globalUpdateRequested && !this.layerView.moving && this._fetchQueue.length === 0) {
          i = !1;
          try {
            await this._redrawImage(this._abortController?.signal);
          } catch (o) {
            $(o) && F.getLogger(this).error(o);
          }
          this._globalUpdateRequested = !1;
        }
        !this.canUseWebGLForProcessing() && this.type !== "rasterVF" || this.layerView.hasTilingEffects || this._symbolizerParams != null || this._updateSymbolizerParams();
        const a = this._tileInfoView.getTileCoords(Os, s.key), n = this._tileInfoView.getTileResolution(s.key);
        await this.updateTileSource(s, { source: t, symbolizerParams: this._symbolizerParams, globalSymbolizerParams: this._globalSymbolizerParams, suspended: i, bandIds: r, coords: a, resolution: n }), s.once("attach", () => this.layerView.requestUpdate()), this.container.addChild(s);
      } catch (t) {
        $(t) || F.getLogger(this).error(t);
      }
      this.layerView.requestUpdate();
    }
  }
  async _redrawImage(s) {
    if (this.container.children.length === 0) return;
    await this.layer.updateRenderer(), this.layerView.hasTilingEffects ? await this._updateGlobalSymbolizerParams(s) : (this._updateSymbolizerParams(), this._globalSymbolizerParams = null);
    const e = this.container.children.map(async (t) => this.updateTileSymbolizerParameters(t, { local: this._symbolizerParams, global: this._globalSymbolizerParams }));
    await Promise.allSettled(e), this.container.requestRender();
  }
  async _updateGlobalSymbolizerParams(s) {
    const e = { srcResolution: this._srcResolutions[this.previousLOD.level], registryId: this._blockCacheRegistryId, signal: s }, t = await this.layer.fetchPixels(this.layerView.view.extent, this.layerView.view.width, this.layerView.view.height, e);
    if (!t?.pixelBlock) return;
    const { resolution: r } = this.previousLOD, i = this._getBandIds(), a = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: t.pixelBlock.extractBands(i), isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: r, y: r }, bandIds: i });
    !this.canUseWebGLForProcessing() && a && a.type === "stretch" && this.layer.renderer && this.layer.renderer.type === "raster-stretch" && (a.factor = a.factor.map((n) => 255 * n), a.outMin = Math.round(255 * a.outMin), a.outMax = Math.round(255 * a.outMax)), this._globalSymbolizerParams = a;
  }
  _updateSymbolizerParams() {
    const { resolution: s } = this.previousLOD, e = this._getBandIds();
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null, isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: s, y: s }, bandIds: e });
  }
  _updateBlockCacheRegistry(s = !1) {
    const { layer: e, layerView: t } = this, { raster: r } = e, { multidimensionalDefinition: i } = e.normalizeRasterFetchOptions({ multidimensionalDefinition: e.multidimensionalDefinition, timeExtent: t.timeExtent }), a = r.rasterInfo.multidimensionalInfo ? r.getSliceIndex(i) : null, n = et(r.rasterId, a);
    if (n !== this._blockCacheRegistryUrl) {
      if (this._blockCacheRegistryUrl != null && se(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = tt(n, r.rasterInfo), s) {
        const { view: o } = t, l = this._tileInfoView.getClosestInfoForScale(o.scale), c = this._srcResolutions[l.level];
        te(n, this._blockCacheRegistryId, o.extent, o.resolution, c, r.ioConfig.sampling);
      }
      this._blockCacheRegistryUrl = n;
    }
  }
  async doRefresh() {
    if (!this.attached || !this.previousLOD || this.layerView.suspended) return;
    await this.layer.updateRenderer(), this.layerView.hasTilingEffects || this._updateSymbolizerParams(), this._updateBlockCacheRegistry(!0), this._fetchQueue.reset();
    const s = [];
    this._globalUpdateRequested = this.layerView.hasTilingEffects || !this.useProgressiveUpdate, this._tileStrategy.refresh((e) => s.push(this._enqueueTileFetch(e))), await this._updatingHandles.addPromise(Promise.allSettled(s));
  }
};
h([p()], x.prototype, "_globalUpdateRequested", void 0), h([p()], x.prototype, "attached", void 0), h([p()], x.prototype, "container", void 0), h([p()], x.prototype, "layer", void 0), h([p()], x.prototype, "layerView", void 0), h([p()], x.prototype, "type", void 0), h([p()], x.prototype, "useWebGLForProcessing", null), h([p()], x.prototype, "useProgressiveUpdate", null), h([p()], x.prototype, "timeExtent", void 0), h([p()], x.prototype, "updating", null), x = h([M("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")], x);
let S = class extends x {
  constructor() {
    super(...arguments), this.type = "raster";
  }
  attach() {
    super.attach(), this.container = new Ds(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this.updateRasterFunctionParameters();
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this.container = null;
  }
  canUseWebGLForProcessing() {
    const { symbolizer: e } = this.layer, t = e.lookup?.colormapLut?.indexedColormap, r = t && t.length > this._maxIndexedColormapSize;
    return this.useWebGLForProcessing && e.canRenderInWebGL && !r && !(this.layer.interpolation === "majority" && oe(this.layer));
  }
  fetchTile(e, t) {
    return this.layer.fetchTile(e.level, e.row, e.col, t);
  }
  updateRasterFunctionParameters() {
    const { clips: e, view: t } = this.layerView;
    this._geometry != null && e.remove(this._geometry);
    const { raster: r, type: i } = this.layer;
    if (r.datasetFormat === "Function") {
      const w = r.getClippingGeometry(t.spatialReference);
      if (w) {
        const g = new Le({ geometry: w });
        e.add(g), this._geometry = g;
      }
    }
    const { container: a } = this;
    if (r.datasetFormat !== "Function" || i === "wcs") return a.rasterFunctionChain = null, a.children.forEach((w) => {
      const { bitmap: g } = w;
      g && (g.suspended = !0, g.processed = !1, g.projected && (g.invalidateTexture(), g.rasterTexture = null));
    }), void (this._rasterFunctionState = "na");
    const n = this._rasterFunctionState, { rasterFunction: o, primaryRasters: l } = r, c = o.supportsGPU && (!l || l.rasters.length <= 1), m = c ? o.flatWebGLFunctionChain : null, { renderer: d } = this.layer, u = !c || !m?.functions.length || d?.type === "raster-stretch" && d.dynamicRangeAdjustment || !this.canUseWebGLForProcessing();
    a.rasterFunctionChain = u ? null : m;
    const f = o == null ? "na" : a.rasterFunctionChain ? "gpu" : "cpu";
    a.children.forEach((w) => {
      const { bitmap: g } = w;
      g && (g.suspended = n !== f, g.processed = !1, g.processedTexture = null);
    }), this._rasterFunctionState = f;
  }
  async updateTileSource(e, t) {
    const r = this._getBandIds(), i = this._getLayerInterpolation(), a = this.canUseWebGLForProcessing(), { source: n, globalSymbolizerParams: o, suspended: l, coords: c, resolution: m } = t, d = this.layerView.hasTilingEffects ? o : t.symbolizerParams, { bitmap: u } = e;
    if ([u.x, u.y] = c, u.resolution = m, n?.pixelBlock != null) {
      const f = { extent: n.extent, pixelBlock: n.pixelBlock, srcPixelSize: n.srcTilePixelSize };
      if (u.rawPixelData = f, a) u.source = n.pixelBlock, u.isRendereredSource = !1;
      else {
        const w = await this.layer.applyRenderer(f, o?.type === "stretch" ? o : void 0);
        u.source = w, u.isRendereredSource = !0;
      }
      u.symbolizerParameters = a ? d : null, u.transformGrid = a ? n.transformGrid : null;
    } else {
      const f = this.createEmptyTilePixelBlock();
      u.source = f, u.symbolizerParameters = a ? d : null, u.transformGrid = null;
    }
    u.bandIds = a ? r : null, u.width = this._tileInfoView.tileInfo.size[0], u.height = this._tileInfoView.tileInfo.size[1], u.interpolation = i, u.suspended = l, u.invalidateTexture();
  }
  async updateTileSymbolizerParameters(e, t) {
    const { local: r, global: i } = t, a = this._getBandIds(), n = this._getLayerInterpolation(), o = this.canUseWebGLForProcessing(), { bitmap: l } = e, { rawPixelData: c } = l;
    o || c == null ? (l.isRendereredSource && c != null && (l.source = c.pixelBlock), l.isRendereredSource = !1) : (l.source = await this.layer.applyRenderer(c, i?.type === "stretch" ? i : void 0), l.isRendereredSource = !0), l.symbolizerParameters = o ? this.layerView.hasTilingEffects ? i : r : null, l.bandIds = o ? a : null, l.interpolation = n, l.suspended = !1;
  }
  _getLayerInterpolation() {
    const { interpolation: e, renderer: t } = this.layer;
    if (!t) return e;
    const r = t.type;
    return r === "raster-colormap" || r === "unique-value" || r === "class-breaks" ? "nearest" : t.type === "raster-stretch" && t.colorRamp != null ? e === "bilinear" || e === "cubic" ? "bilinear" : "nearest" : e;
  }
};
h([p()], S.prototype, "container", void 0), h([p()], S.prototype, "layer", void 0), h([p()], S.prototype, "type", void 0), S = h([M("esri.views.2d.layers.imagery.ImageryTileView2D")], S);
const Es = S;
class As extends le {
  constructor(e, t, r, i, a, n, o = null) {
    super(e, t, r, i, a, n), this.tileData = new Me(o), this.tileData.coordScale = [a, n], this.tileData.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.tileData.destroy(), this.tileData = null, this.stage = null;
  }
  set stencilRef(e) {
    this.tileData.stencilRef = e;
  }
  get stencilRef() {
    return this.tileData.stencilRef;
  }
  _createTransforms() {
    return { displayViewScreenMat3: z(), tileMat3: z() };
  }
  setTransform(e) {
    super.setTransform(e);
    const t = this.resolution / (e.resolution * e.pixelRatio), r = this.transforms.tileMat3, [i, a] = this.tileData.offset, n = [this.x + i * this.resolution, this.y - a * this.resolution], [o, l] = e.toScreenNoRotation([0, 0], n), { symbolTileSize: c } = this.tileData.symbolizerParameters, m = Math.round((this.width - this.tileData.offset[0]) / c) * c, d = Math.round((this.height - this.tileData.offset[1]) / c) * c, u = m / this.rangeX * t, f = d / this.rangeY * t;
    Ie(r, u, 0, 0, 0, f, 0, o, l, 1), ae(this.transforms.displayViewScreenMat3, e.displayViewMat3, r), this.tileData.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.tileData.stage = this.stage;
  }
  onDetach() {
    this.tileData.stage = null;
  }
}
class js extends ue {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = !1, this.symbolTypes = ["triangle"];
  }
  createTile(e) {
    const t = this._tileInfoView.getTileBounds(ne(), e), [r, i] = this._tileInfoView.tileInfo.size, a = this._tileInfoView.getTileResolution(e.level);
    return new As(e, a, t[0], t[3], r, i);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "imagery (vf tile)", brushes: [Ve], target: () => this.children.map((r) => r.tileData), drawPhase: O.MAP });
    return [...super.prepareRenderPasses(e), t];
  }
  doRender(e) {
    this.visible && e.drawPhase === O.MAP && this.symbolTypes.forEach((t) => {
      e.renderPass = t, super.doRender(e);
    });
  }
}
let R = class extends x {
  constructor() {
    super(...arguments), this._handle = null, this.type = "rasterVF";
  }
  canUseWebGLForProcessing() {
    return !1;
  }
  async fetchTile(s, e) {
    e = { ...e, interpolation: "nearest", requestProjectedLocalDirections: !0 };
    const t = await this.layer.fetchTile(s.level, s.row, s.col, e);
    return this.layer.serviceRasterInfo.dataType === "vector-magdir" && t?.pixelBlock && (t.pixelBlock = await this.layer.convertVectorFieldData(t.pixelBlock, e)), t;
  }
  updateTileSource(s, e) {
    const t = e.symbolizerParams, { tileData: r } = s;
    r.key = s.key, r.width = this._tileInfoView.tileInfo.size[0], r.height = this._tileInfoView.tileInfo.size[1];
    const { symbolTileSize: i } = t, { source: a } = e;
    if (r.offset = this._getTileSymbolOffset(r.key, i), a?.pixelBlock != null) {
      const n = { extent: a.extent, pixelBlock: a.pixelBlock };
      r.rawPixelData = n, r.symbolizerParameters = t, r.source = this._sampleVectorFieldData(a.pixelBlock, t, r.offset);
    } else {
      const n = [Math.round((this._tileInfoView.tileInfo.size[0] - r.offset[0]) / i), Math.round((this._tileInfoView.tileInfo.size[1] - r.offset[1]) / i)], o = this.createEmptyTilePixelBlock(n);
      r.source = o, r.symbolizerParameters = t;
    }
    return r.invalidateVAO(), Promise.resolve();
  }
  updateTileSymbolizerParameters(s, e) {
    const t = e.local, { symbolTileSize: r } = t, { tileData: i } = s;
    i.offset = this._getTileSymbolOffset(i.key, r);
    const a = i.symbolizerParameters.symbolTileSize;
    i.symbolizerParameters = t;
    const n = i.rawPixelData?.pixelBlock;
    return n != null && a !== r && (i.source = this._sampleVectorFieldData(n, i.symbolizerParameters, i.offset)), Promise.resolve();
  }
  attach() {
    super.attach(), this.container = new js(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this._updateSymbolType(this.layer.renderer), this._handle = k(() => this.layer.renderer, (s) => this._updateSymbolType(s));
  }
  detach() {
    super.detach(), this.container.removeAllChildren(), this._handle?.remove(), this._handle = null, this.container = null;
  }
  _getTileSymbolOffset(s, e) {
    const t = s.col * this._tileInfoView.tileInfo.size[0] % e, r = s.row * this._tileInfoView.tileInfo.size[1] % e;
    return [t > e / 2 ? e - t : -t, r > e / 2 ? e - r : -r];
  }
  _sampleVectorFieldData(s, e, t) {
    const { symbolTileSize: r } = e;
    return Ue(s, "vector-uv", r, t);
  }
  _updateSymbolType(s) {
    s.type === "vector-field" && (this.container.symbolTypes = s.style === "wind-barb" ? ["scalar", "triangle"] : s.style === "simple-scalar" ? ["scalar"] : ["triangle"]);
  }
};
h([p()], R.prototype, "container", void 0), h([p()], R.prototype, "layer", void 0), h([p()], R.prototype, "type", void 0), R = h([M("esri.views.2d.layers.imagery.VectorFieldTileView2D")], R);
const qs = R, Ws = (s) => {
  let e = class extends s {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.tileInfo = null;
    }
    get fullExtent() {
      return this._getfullExtent();
    }
    _getfullExtent() {
      return re(this.layer.serviceRasterInfo, this.view.spatialReference);
    }
    get hasTilingEffects() {
      return !!(this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment);
    }
    get datumTransformation() {
      return it(this.layer.fullExtent, this.view.spatialReference, !0);
    }
    supportsSpatialReference(t) {
      return !!re(this.layer.serviceRasterInfo, t);
    }
    async fetchPopupFeaturesAtLocation(t, r) {
      const { layer: i } = this;
      if (!t) throw new X("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", { layer: i });
      const { popupEnabled: a } = i, n = at(i, r);
      if (!a || n == null) throw new X("imageryTileLayerView:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: a, popupTemplate: n });
      const o = [], { value: l, magdirValue: c, processedValue: m } = await i.identify(t, { timeExtent: this.timeExtent, signal: r?.signal });
      let d = "";
      if (l && l.length) {
        d = i.type === "imagery-tile" && i.hasStandardTime() && l[0] != null ? l.map((E) => i.getStandardTimeValue(E)).join(", ") : l.join(", ");
        const u = { ObjectId: 0 }, f = "Raster.ServicePixelValue";
        u[f] = i.type === "imagery-tile" && i.raster.datasetFormat === "Function" ? m?.join(", ") : d, u[f + ".Raw"] = d;
        const w = i.serviceRasterInfo.attributeTable;
        if (w != null) {
          const { fields: E, features: pe } = w, N = E.find(({ name: T }) => T.toLowerCase() === "value"), B = N ? pe.find((T) => String(T.attributes[N.name]) === d) : null;
          if (B) for (const T in B.attributes) B.attributes.hasOwnProperty(T) && (u[this._rasterFieldPrefix + T] = B.attributes[T]);
        }
        const g = i.serviceRasterInfo.dataType;
        g !== "vector-magdir" && g !== "vector-uv" || (u["Raster.Magnitude"] = c?.[0], u["Raster.Direction"] = c?.[1]);
        const V = new Fe(this.fullExtent.clone(), null, u);
        V.layer = i, V.sourceLayer = V.layer, o.push(V);
      }
      return o;
    }
  };
  return h([p()], e.prototype, "layer", void 0), h([p($e)], e.prototype, "timeExtent", void 0), h([p()], e.prototype, "view", void 0), h([p()], e.prototype, "fullExtent", null), h([p()], e.prototype, "tileInfo", void 0), h([p({ readOnly: !0 })], e.prototype, "hasTilingEffects", null), h([p()], e.prototype, "datumTransformation", null), e = h([M("esri.views.layers.ImageryTileLayerView")], e), e;
};
let P = class extends Ws(nt(Ge(ke))) {
  constructor() {
    super(...arguments), this._useWebGLForProcessing = !0, this._useProgressiveUpdate = !0, this.subview = null;
  }
  get useWebGLForProcessing() {
    return this._useWebGLForProcessing;
  }
  set useWebGLForProcessing(s) {
    this._useWebGLForProcessing = s, this.subview && "useWebGLForProcessing" in this.subview && (this.subview.useWebGLForProcessing = s);
  }
  get useProgressiveUpdate() {
    return this._useWebGLForProcessing;
  }
  set useProgressiveUpdate(s) {
    this._useProgressiveUpdate = s, this.subview && "useProgressiveUpdate" in this.subview && (this.subview.useProgressiveUpdate = s);
  }
  get displayParameters() {
    const { layer: s } = this, e = this._get("displayParameters");
    return s.renderer ? { bandIds: s.bandIds, renderer: s.renderer, interpolation: s.interpolation, multidimensionalDefinition: s.multidimensionalDefinition, rasterFunction: s.type === "imagery-tile" ? s.rasterFunction : null } : e;
  }
  update(s) {
    this.subview?.update(s), this.notifyChange("updating");
  }
  isUpdating() {
    return !this.subview || this.subview.updating;
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._updateSubview(), this.addAttachHandles([k(() => this.displayParameters, (s, e) => {
      const t = s.interpolation !== e?.interpolation && (s.interpolation === "majority" || e?.interpolation === "majority") && oe(this.layer), r = s.renderer !== e?.renderer && this._getSubviewType(e?.renderer) !== this._getSubviewType(s.renderer);
      r && this._updateSubview();
      const i = s.multidimensionalDefinition !== e?.multidimensionalDefinition, a = s.rasterFunction !== e?.rasterFunction, n = a && !this._useWebGLForProcessing, o = i || t || r || n;
      this.subview.redrawOrRefetch({ refetch: o, reprocess: a }).catch((l) => {
        $(l) || F.getLogger(this).error(l);
      }), this.notifyChange("updating");
    }), k(() => this.layer.multidimensionalSubset ?? null, (s, e) => {
      const { multidimensionalDefinition: t } = this.layer;
      t != null && Y(t, s) !== Y(t, e) && (this.subview.redrawOrRefetch({ refetch: !0 }).catch((r) => {
        $(r) || F.getLogger(this).error(r);
      }), this.notifyChange("updating"));
    }, Ce), k(() => this.timeExtent, () => {
      this.subview.timeExtent = this.timeExtent, this.subview.redrawOrRefetch({ refetch: !0 }).catch((s) => {
        $(s) || F.getLogger(this).error(s);
      });
    }, ze)]);
  }
  detach() {
    this.layer.decreaseRasterJobHandlerUsage(), this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null;
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.subview.moveEnd();
  }
  doRefresh() {
    return this.subview ? this.subview.doRefresh() : Promise.resolve();
  }
  _updateSubview() {
    const { renderer: s } = this.layer;
    if (!s) return;
    const e = this._getSubviewType(s);
    if (this.subview) {
      if (this.subview.type === e) return void this._attachSubview(this.subview);
      this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null;
    }
    const { layer: t } = this;
    let r;
    if (r = e === "rasterVF" ? new qs({ layer: t, layerView: this }) : e === "flow" ? new Be({ layer: t, layerView: this }) : new Es({ layer: t, layerView: this }), "useWebGLForProcessing" in r && (r.useWebGLForProcessing = this._useWebGLForProcessing), "useProgressiveUpdate" in r && (r.useProgressiveUpdate = this._useProgressiveUpdate), "previousLOD" in r) {
      const { subview: i } = this;
      r.previousLOD = i && "previousLOD" in i ? i.previousLOD : null;
    }
    this._attachSubview(r), this.subview = r, this.requestUpdate();
  }
  _attachSubview(s) {
    s && !s.attached && (s.attach(), s.attached = !0, this.container.addChildAt(s.container, 0));
  }
  _detachSubview(s) {
    s?.attached && (this.container.removeChild(s.container), s.detach(), s.attached = !1);
  }
  _getSubviewType(s) {
    const e = s?.type;
    return e === "vector-field" ? "rasterVF" : e === "flow" ? "flow" : "raster";
  }
};
h([p()], P.prototype, "subview", void 0), h([p()], P.prototype, "useWebGLForProcessing", null), h([p()], P.prototype, "useProgressiveUpdate", null), h([p({ readOnly: !0 })], P.prototype, "displayParameters", null), P = h([M("esri.views.2d.layers.ImageryTileLayerView2D")], P);
const ur = P;
export {
  ur as default
};
//# sourceMappingURL=ImageryTileLayerView2D-DhlsoimI.js.map
