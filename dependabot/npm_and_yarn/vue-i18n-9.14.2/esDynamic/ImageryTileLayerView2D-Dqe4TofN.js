import { fE as U, bI as z, bK as fe, bM as E, bN as B, bP as ge, fs as _e, bL as ae, bz as H, aP as ne, bQ as ye, O as h, P as m, Q as M, e2 as xe, k9 as be, f1 as we, H as J, b8 as ve, lE as Te, F as Pe, G as Se, i3 as Re, fv as Y, a3 as Ie, M as $, D as F, fO as Ue, S as L, oP as $e, s as Fe, aj as Ce, fw as ze, nd as K, T as Me } from "./main-uCo5F72j.js";
import { f as Ve, d as Be, a as ke } from "./RasterVFDisplayObject-Cji0Rh2m.js";
import { a as Le, f as De, y as Oe } from "./LayerView-e9W65gRE.js";
import { s as Ge, E as O, r as oe } from "./Container-D8I93PMs.js";
import { L as A, P as Ee, U as Ae, D as qe, R as k, O as X } from "./enums-DDkmfb-t.js";
import { c as je, f as We, m as Z, O as I, h as v, _ as q, A as Ne, p as Qe, l as He, T as Je, g as Ye } from "./rasterUtils-C2BDw5R3.js";
import { e as Ke, c as Xe } from "./Texture-DRfuNOXW.js";
import { a as C } from "./definitions-Doe0g1C2.js";
import { t as Ze, a as ee, r as le } from "./WGLContainer-Ca2Hy4zX.js";
import { E as et } from "./Program-BikdDBoO.js";
import { i as ue } from "./TileContainer-CXG--cPO.js";
import { g as te, a as se, i as tt, u as st } from "./RawBlockCache-6HCXxjLY.js";
import { D as rt, a as it, v as at, s as re } from "./rasterProjectionHelper-LuHDux50.js";
import { i as nt } from "./timeSupport-BRptguMI.js";
import { p as ot } from "./popupUtils-wEufgE8s.js";
import { i as lt } from "./RefreshableLayerView-BGtwDqU2.js";
const ut = { bandCount: 3, outMin: 0, outMax: 1, minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255], factor: [1 / 255, 1 / 255, 1 / 255], useGamma: !1, gamma: [1, 1, 1], gammaCorrection: [1, 1, 1], colormap: null, colormapOffset: null, stretchType: "none", type: "stretch" };
class ct extends Ge {
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
    return this._symbolizerParameters || ut;
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
    this._interpolation = e, this._rasterTexture && this._rasterTexture.setSamplingMode(this._getTextureSamplingMethod(e || "nearest") === "bilinear" ? A.LINEAR : A.NEAREST);
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
    const t = fe(this.transforms.displayViewScreenMat3), [r, i] = e.toScreenNoRotation([0, 0], [this.x, this.y]), a = this.resolution / this.pixelRatio / e.resolution, n = a * this.width, o = a * this.height, l = Math.PI * this.rotation / 180;
    E(t, t, B(r, i)), E(t, t, B(n / 2, o / 2)), ge(t, t, -l), E(t, t, B(-n / 2, -o / 2)), _e(t, t, B(n, o)), ae(this.transforms.displayViewScreenMat3, e.displayViewMat3, t);
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
    this._supportsBilinearTexture = !!e.capabilities.textureFloatLinear;
    const i = this._getTextureSamplingMethod(this.interpolation), a = this.isRendereredSource;
    this._rasterTexture = We(e, t, i, a), this.projected = !1, this._processed = !1, this._rasterTextureBandIds = this.bandIds ? [...this.bandIds] : null;
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
function ht(s) {
  return s.source != null;
}
function j(s) {
  const e = [];
  return s && (e.push("applyProjection"), s.spacing[0] === 1 && e.push("lookupProjection")), e;
}
function ce(s, e, t) {
  const r = !t.capabilities.textureFloatLinear, i = [];
  return s === "cubic" ? i.push("bicubic") : s === "bilinear" && (e ? (i.push("bilinear"), i.push("nnedge")) : r && i.push("bilinear")), i;
}
const dt = { vsPath: "raster/common", fsPath: "raster/lut", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function mt(s, e, t) {
  const r = t ? [] : j(e.transformGrid);
  return { defines: r, program: s.painter.materialManager.getProgram(dt, r) };
}
function pt(s, e, t, r, i = !1) {
  const { names: a, textures: n } = t.getTextures({ useProcessedTexture: i });
  I(s.context, e, a, n), v(e, r, t.commonUniforms), e.setUniformMatrix3fv("u_dvsMat3", t.transforms.displayViewScreenMat3);
  const { colormap: o, colormapOffset: l } = t.symbolizerParameters, c = q(o, l);
  v(e, r, c);
}
const ft = { createProgram: mt, bindTextureAndUniforms: pt }, gt = { vsPath: "raster/common", fsPath: "raster/hillshade", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function _t(s, e, t) {
  const { colormap: r } = e.symbolizerParameters, i = [...t ? [] : j(e.transformGrid), ...ce(e.interpolation, !0, s.context)];
  return r != null && i.push("applyColormap"), { defines: i, program: s.painter.materialManager.getProgram(gt, i) };
}
function yt(s, e, t, r, i = !1) {
  const { names: a, textures: n } = t.getTextures({ useProcessedTexture: i });
  I(s.context, e, a, n), v(e, r, t.commonUniforms), e.setUniformMatrix3fv("u_dvsMat3", t.transforms.displayViewScreenMat3);
  const o = t.symbolizerParameters, { colormap: l, colormapOffset: c } = o;
  if (l != null) {
    const d = q(l, c);
    v(e, r, d);
  }
  const p = Ne(o);
  v(e, r, p);
}
const xt = { createProgram: _t, bindTextureAndUniforms: yt }, bt = { vsPath: "raster/common", fsPath: "raster/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function wt(s, e, t) {
  const { colormap: r, bandCount: i } = e.symbolizerParameters, a = [...t ? [] : j(e.transformGrid), ...ce(e.interpolation, i === 1, s.context)];
  return e.isRendereredSource && !t ? a.push("noop") : r != null && a.push("applyColormap"), { defines: a, program: s.painter.materialManager.getProgram(bt, a) };
}
function vt(s, e, t, r, i = !1) {
  const { names: a, textures: n } = t.getTextures({ useProcessedTexture: i });
  I(s.context, e, a, n), v(e, r, t.commonUniforms), e.setUniformMatrix3fv("u_dvsMat3", t.transforms.displayViewScreenMat3);
  const o = t.symbolizerParameters, { colormap: l, colormapOffset: c } = o;
  if (l != null) {
    const d = q(l, c);
    v(e, r, d);
  }
  const p = Qe(o);
  v(e, r, p);
}
const Tt = { createProgram: wt, bindTextureAndUniforms: vt }, D = /* @__PURE__ */ new Map();
function Pt(s) {
  return D.get(s);
}
D.set("lut", ft), D.set("hillshade", xt), D.set("stretch", Tt);
const St = [1, 1], Rt = [2, 0, 0, 0, 2, 0, -1, -1, 0];
function b(s, e, t) {
  const { context: r, rasterFunction: i, hasBranches: a } = s, { raster: n } = i.parameters, o = a ? n?.id ?? -1 : 0, l = t.functionTextures[o] ?? t.rasterTexture;
  I(r, e, ["u_image"], [l]);
}
function W(s, e, t) {
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
        const l = r.findIndex((p) => p.name !== "Constant"), c = l === 0 ? [1, 0, 0, 0, 1, 0, 0, 0, 1] : l === 1 ? [0, 1, 0, 1, 0, 0, 0, 0, 1] : [0, 0, 1, 1, 0, 0, 0, 1, 0];
        e.setUniformMatrix3fv("u_imageSwap", c);
      }
    }
  }
}
function y(s) {
  s.setUniform2fv("u_coordScale", St), s.setUniformMatrix3fv("u_dvsMat3", Rt);
}
const It = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/aspect", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Ut(s, e) {
  return s.painter.materialManager.getProgram(It, []);
}
function $t(s, e, t) {
  b(s, e, t), y(e);
  const r = t.getRasterTextureSize();
  e.setUniform2fv("u_srcImageSize", r);
  const i = t.getRasterCellSize();
  e.setUniform2fv("u_cellSize", i);
}
const Ft = { createProgram: Ut, bindTextureAndUniforms: $t }, Ct = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/bandarithmetic", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function zt(s, e) {
  const { painter: t, rasterFunction: r } = s, { indexType: i } = r.parameters;
  return t.materialManager.getProgram(Ct, [i]);
}
function Mt(s, e, t) {
  b(s, e, t), y(e);
  const { bandIndexMat3: r } = s.rasterFunction.parameters;
  e.setUniformMatrix3fv("u_bandIndexMat3", r);
}
const Vt = { createProgram: zt, bindTextureAndUniforms: Mt }, Bt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/compositeband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function kt(s, e) {
  const t = s.rasterFunction.parameters.rasters.filter((i) => i.name === "Constant"), r = [];
  return t.length && (r.push("oneConstant"), t.length === 2 && r.push("twoConstant")), s.painter.materialManager.getProgram(Bt, r);
}
function Lt(s, e, t) {
  W(s, e, t), y(e);
}
const Dt = { createProgram: kt, bindTextureAndUniforms: Lt }, Ot = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/computechange", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Gt(s) {
  const { painter: e, rasterFunction: t } = s, { method: r, rasters: i, isOutputRounded: a } = t.parameters, n = [r.includes("-") ? r.slice(0, r.indexOf("-")) : r];
  return i.filter((o) => o.name === "Constant").length && n.push("oneConstant"), a && n.push("roundOutput"), e.materialManager.getProgram(Ot, n);
}
function Et(s, e, t) {
  W(s, e, t), y(e);
  const { domainRange: r } = s.rasterFunction.parameters;
  e.setUniform2fv("u_domainRange", r);
}
const At = { createProgram: Gt, bindTextureAndUniforms: Et }, qt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/contrast", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function jt(s, e) {
  return s.painter.materialManager.getProgram(qt, []);
}
function Wt(s, e, t) {
  b(s, e, t), y(e);
  const { contrastOffset: r, brightnessOffset: i } = s.rasterFunction.parameters;
  e.setUniform1f("u_contrastOffset", r), e.setUniform1f("u_brightnessOffset", i);
}
const Nt = { createProgram: jt, bindTextureAndUniforms: Wt }, Qt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/convolution", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Ht(s, e) {
  const { painter: t, rasterFunction: r } = s, { kernelRows: i, kernelCols: a } = r.parameters, n = [{ name: "rows", value: i }, { name: "cols", value: a }];
  return t.materialManager.getProgram(Qt, n);
}
function Jt(s, e, t) {
  b(s, e, t), y(e), e.setUniform2fv("u_srcImageSize", [t.width, t.height]);
  const { kernel: r, clampRange: i } = s.rasterFunction.parameters;
  e.setUniform1fv("u_kernel", r), e.setUniform2fv("u_clampRange", i);
}
const Yt = { createProgram: Ht, bindTextureAndUniforms: Jt }, Kt = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/curvature", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Xt(s, e) {
  const { painter: t, rasterFunction: r } = s, { curvatureType: i } = r.parameters, a = [i];
  return t.materialManager.getProgram(Kt, a);
}
function Zt(s, e, t) {
  b(s, e, t), y(e);
  const r = t.getRasterTextureSize();
  e.setUniform2fv("u_srcImageSize", r);
  const { zFactor: i } = s.rasterFunction.parameters, a = t.getRasterCellSize();
  e.setUniform1f("u_zlFactor", 200 * i / a[0] / a[1]);
}
const es = { createProgram: Xt, bindTextureAndUniforms: Zt }, ts = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/extractband", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function ss(s, e) {
  return s.painter.materialManager.getProgram(ts, []);
}
function rs(s, e, t) {
  b(s, e, t), y(e);
  const { bandIndexMat3: r } = s.rasterFunction.parameters;
  e.setUniformMatrix3fv("u_bandIndexMat3", r);
}
const is = { createProgram: ss, bindTextureAndUniforms: rs }, as = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/focalstatistics", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function ns(s, e) {
  const { painter: t, rasterFunction: r } = s, { kernelRows: i, kernelCols: a, fillNoDataOnly: n, statisticsType: o } = r.parameters, l = [{ name: "rows", value: i }, { name: "cols", value: a }, o];
  return n && l.push("fill"), t.materialManager.getProgram(as, l);
}
function os(s, e, t) {
  b(s, e, t), y(e), e.setUniform2fv("u_srcImageSize", [t.width, t.height]);
  const { clampRange: r } = s.rasterFunction.parameters;
  e.setUniform2fv("u_clampRange", r);
}
const ls = { createProgram: ns, bindTextureAndUniforms: os }, us = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/grayscale", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function cs(s, e) {
  return s.painter.materialManager.getProgram(us, []);
}
function hs(s, e, t) {
  b(s, e, t), y(e);
  const { weights: r } = s.rasterFunction.parameters;
  e.setUniform3fv("u_weights", r);
}
const ds = { createProgram: cs, bindTextureAndUniforms: hs }, ms = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/local", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function ps(s) {
  const { painter: e, rasterFunction: t } = s, { imageCount: r, operationName: i, rasters: a, isOutputRounded: n } = t.parameters, o = [i.toLowerCase()];
  r === 2 && o.push("twoImages");
  const l = a.filter((c) => c.name === "Constant");
  return l.length && (o.push("oneConstant"), l.length === 2 && o.push("twoConstant")), n && o.push("roundOutput"), e.materialManager.getProgram(ms, o);
}
function fs(s, e, t) {
  W(s, e, t), y(e);
  const { domainRange: r } = s.rasterFunction.parameters;
  e.setUniform2fv("u_domainRange", r);
}
const ie = { createProgram: ps, bindTextureAndUniforms: fs }, gs = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/mask", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function _s(s, e) {
  const { painter: t, rasterFunction: r } = s, i = r.parameters.bandCount > 1 ? ["multiBand"] : [];
  return t.materialManager.getProgram(gs, i);
}
function ys(s, e, t) {
  b(s, e, t), y(e);
  const { includedRanges: r, noDataValues: i } = s.rasterFunction.parameters;
  e.setUniform1fv("u_includedRanges", r), e.setUniform1fv("u_noDataValues", i);
}
const xs = { createProgram: _s, bindTextureAndUniforms: ys }, bs = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/ndvi", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function ws(s, e) {
  const { painter: t, rasterFunction: r } = s, i = r.parameters.scaled ? ["scaled"] : [];
  return t.materialManager.getProgram(bs, i);
}
function vs(s, e, t) {
  b(s, e, t), y(e);
  const { bandIndexMat3: r } = s.rasterFunction.parameters;
  e.setUniformMatrix3fv("u_bandIndexMat3", r);
}
const Ts = { createProgram: ws, bindTextureAndUniforms: vs }, Ps = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/remap", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Ss(s, e) {
  return s.painter.materialManager.getProgram(Ps, []);
}
function Rs(s, e, t) {
  b(s, e, t), y(e);
  const { noDataRanges: r, rangeMaps: i, allowUnmatched: a, clampRange: n } = s.rasterFunction.parameters;
  e.setUniform1fv("u_noDataRanges", r), e.setUniform1fv("u_rangeMaps", i), e.setUniform1f("u_unmatchMask", a ? 1 : 0), e.setUniform2fv("u_clampRange", n);
}
const Is = { createProgram: Ss, bindTextureAndUniforms: Rs }, Us = { vsPath: "raster/common", fsPath: "raster/reproject", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function $s(s, e) {
  const { painter: t } = s, r = [], { interpolation: i, transformGrid: a } = e, n = s.rasterFunction?.parameters;
  return i === "cubic" ? r.push("bicubic") : i === "bilinear" && (r.push("bilinear"), n?.requireNNEdge && r.push("nnedge")), a && (r.push("applyProjection"), a.spacing[0] === 1 && r.push("lookupProjection")), t.materialManager.getProgram(Us, r);
}
function Fs(s, e, t) {
  const { names: r, textures: i } = t.getTextures({ forProcessing: !0 });
  I(s.context, e, r, i), e.setUniform1f("u_scale", 1), e.setUniform2fv("u_offset", [0, 0]), e.setUniform2fv("u_coordScale", [1, 1]), e.setUniformMatrix3fv("u_dvsMat3", [2, 0, 0, 0, 2, 0, -1, -1, 0]), e.setUniform1i("u_flipY", 0), e.setUniform1f("u_opacity", 1);
  const { width: a, height: n, source: o, transformGrid: l } = t;
  e.setUniform2fv("u_srcImageSize", [o.width, o.height]), e.setUniform2fv("u_targetImageSize", [a, n]), e.setUniform2fv("u_transformSpacing", l ? l.spacing : H), e.setUniform2fv("u_transformGridSize", l ? l.size : H);
}
const Cs = { createProgram: $s, bindTextureAndUniforms: Fs }, zs = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/slope", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Ms(s, e) {
  const { painter: t, rasterFunction: r } = s, { slopeType: i } = r.parameters, a = i === "percent-rise" ? ["percentRise"] : [];
  return t.materialManager.getProgram(zs, a);
}
function Vs(s, e, t) {
  b(s, e, t), y(e);
  const r = t.getRasterTextureSize();
  e.setUniform2fv("u_srcImageSize", r);
  const i = t.getRasterCellSize();
  e.setUniform2fv("u_cellSize", i);
  const { zFactor: a, slopeType: n, pixelSizePower: o, pixelSizeFactor: l } = s.rasterFunction.parameters;
  e.setUniform1f("u_zFactor", a), e.setUniform1f("u_pixelSizePower", n === "adjusted" ? o : 0), e.setUniform1f("u_pixelSizeFactor", n === "adjusted" ? l : 0);
}
const Bs = { createProgram: Ms, bindTextureAndUniforms: Vs }, ks = { vsPath: "raster/rfx/vs", fsPath: "raster/rfx/stretch", attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) };
function Ls(s, e) {
  const { useGamma: t, bandCount: r, isOutputRounded: i } = s.rasterFunction.parameters, a = [];
  return t && a.push("useGamma"), r > 1 && a.push("multiBand"), i && a.push("roundOutput"), s.painter.materialManager.getProgram(ks, a);
}
function Ds(s, e, t) {
  b(s, e, t), y(e);
  const { width: r, height: i } = t, a = s.rasterFunction.parameters;
  e.setUniform2fv("u_srcImageSize", [r, i]), e.setUniform1f("u_minOutput", a.outMin), e.setUniform1f("u_maxOutput", a.outMax), e.setUniform1fv("u_factor", a.factor), e.setUniform1fv("u_minCutOff", a.minCutOff), e.setUniform1fv("u_maxCutOff", a.maxCutOff), e.setUniform1fv("u_gamma", a.gamma), e.setUniform1fv("u_gammaCorrection", a.gammaCorrection);
}
const Os = { createProgram: Ls, bindTextureAndUniforms: Ds }, g = /* @__PURE__ */ new Map();
function he(s, e) {
  const t = new Ke();
  return t.width = s, t.height = e, t.internalFormat = Ee.RGBA32F, t.samplingMode = A.NEAREST, t.dataType = Ae.FLOAT, t.isImmutable = !0, t.wrapMode = qe.CLAMP_TO_EDGE, t;
}
function Gs(s, e, t, r) {
  const { context: i, requestRender: a, allowDelayedRender: n } = s, o = r.createProgram(s, t);
  return n && a != null && !o.compiled ? (a(), null) : (i.bindFramebuffer(e), i.setViewport(0, 0, e.width, e.height), i.useProgram(o), o);
}
function Es(s) {
  return g.get(s.toLowerCase());
}
function As(s, e, t, r) {
  const i = s.rasterFunction.name.toLowerCase(), a = i === "reproject" ? Cs : Es(i);
  if (a == null) return;
  const n = Gs(s, t, r, a);
  if (!n) return;
  a.bindTextureAndUniforms(s, n, r);
  const { interpolation: o } = r;
  i === "reproject" && (r.interpolation = "nearest"), e.draw();
  const [l, c] = r.getRasterTextureSize(i === "reproject"), p = he(l, c), d = new Xe(s.context, p);
  if (t.copyToTexture(0, 0, l, c, 0, 0, d), i === "reproject") r.rasterTexture = d, r.projected = !0, r.interpolation = o;
  else {
    const u = s.hasBranches ? s.rasterFunction.id : 0;
    r.functionTextures[u] = d;
  }
}
g.set("arithmetic", ie), g.set("aspect", Ft), g.set("bandarithmetic", Vt), g.set("computechange", At), g.set("compositeband", Dt), g.set("convolution", Yt), g.set("contrastbrightness", Nt), g.set("curvature", es), g.set("extractband", is), g.set("statistics", ls), g.set("grayscale", ds), g.set("local", ie), g.set("mask", xs), g.set("ndvi", Ts), g.set("remap", Is), g.set("slope", Bs), g.set("stretch", Os);
class qs extends Ze {
  constructor() {
    super(...arguments), this.name = "raster", this._quad = null, this._rendererUniformInfos = /* @__PURE__ */ new Map(), this._fbo = null;
  }
  dispose() {
    U(this._quad), U(this._fbo);
  }
  prepareState(e) {
    const { context: t, renderPass: r } = e, i = r === "raster";
    t.setBlendingEnabled(!i), t.setBlendFunctionSeparate(k.ONE, k.ONE_MINUS_SRC_ALPHA, k.ONE, k.ONE_MINUS_SRC_ALPHA), t.setColorMask(!0, !0, !0, !0), t.setStencilWriteMask(0), t.setStencilTestEnabled(!i);
  }
  draw(e, t) {
    if (!ht(t) || t.suspended) return;
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
    i || (t.processedTexture = U(t.processedTexture)), n.setStencilFunction(X.EQUAL, t.stencilRef, 255), t.updateTexture(e), this._initQuad(n);
    const [c, p] = t.getRasterTextureSize(i), { isStandardRasterTileSize: d, fbo: u } = this._getRasterFBO(n, c, p);
    As(e, this._quad, u, t), d || u.dispose(), n.bindFramebuffer(o), n.setViewport(l.x, l.y, l.width, l.height), a.end(this.name);
  }
  _drawBitmap(e, t, r = !1) {
    const { timeline: i, context: a } = e;
    if (i.begin(this.name), a.setStencilFunction(X.EQUAL, t.stencilRef, 255), t.updateTexture(e), r && !t.processedTexture) {
      if (t.updateProcessedTexture(), !t.processedTexture) return void i.end(this.name);
      t.processed = !0;
    }
    this._initBitmapCommonUniforms(t);
    const n = t.symbolizerParameters.type, o = Pt(n), { requestRender: l, allowDelayedRender: c } = e, { defines: p, program: d } = o.createProgram(e, t, t.projected && r);
    if (c && l != null && !d.compiled) return void l();
    a.useProgram(d);
    const u = this._getUniformInfos(n, a, d, p);
    this._quad || (this._quad = new ee(a, [0, 0, 1, 0, 0, 1, 1, 1])), o.bindTextureAndUniforms(e, d, t, u, r), this._quad.draw(), i.end(this.name);
  }
  _initBitmapCommonUniforms(e) {
    if (!e.commonUniforms) {
      const t = Ye(1, [0, 0]), { transformGrid: r, width: i, height: a } = e, n = He(r, [i, a], [e.source.width, e.source.height], 1, !1);
      e.commonUniforms = { ...t, ...n, u_coordScale: e.coordScale };
    }
  }
  _getRasterFBO(e, t, r) {
    const i = t === C && r === C;
    return i ? (this._fbo || (this._fbo = this._createNewFBO(e, t, r)), { isStandardRasterTileSize: i, fbo: this._fbo }) : { isStandardRasterTileSize: i, fbo: this._createNewFBO(e, t, r) };
  }
  _createNewFBO(e, t, r) {
    const i = he(t, r);
    return new et(e, i);
  }
  _initQuad(e) {
    this._quad || (this._quad = new ee(e, [0, 0, 1, 0, 0, 1, 1, 1]));
  }
  _getUniformInfos(e, t, r, i) {
    const a = i.length > 0 ? e + "-" + i.join("-") : e;
    if (this._rendererUniformInfos.has(a)) return this._rendererUniformInfos.get(a);
    const n = Je(t, r);
    return this._rendererUniformInfos.set(a, n), n;
  }
}
class js extends le {
  constructor(e, t, r, i, a, n, o = null) {
    super(e, t, r, i, a, n), this.bitmap = null, this.bitmap = new ct(o, null, null), this.bitmap.coordScale = [a, n], this.bitmap.once("isReady", () => this.ready());
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
let Ws = class extends ue {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = !1;
  }
  createTile(e) {
    const t = this._getTileBounds(e), [r, i] = this._tileInfoView.tileInfo.size, a = this._tileInfoView.getTileResolution(e.level);
    return new js(e, a, t[0], t[3], r, i);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "imagery (tile)", brushes: [qs], target: () => this.children.map((r) => r.bitmap), drawPhase: O.MAP });
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
      const { tileInfo: r } = this._tileInfoView, i = ye(r.spatialReference);
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
const Ns = [0, 0];
let x = class extends xe {
  constructor() {
    super(...arguments), this._updatingHandles = new be(), this._emptyTilePixelBlock = null, this._tileStrategy = null, this._tileInfoView = null, this._fetchQueue = null, this._blockCacheRegistryUrl = null, this._blockCacheRegistryId = null, this._srcResolutions = [], this.previousLOD = null, this._needBlockCacheUpdate = !1, this._globalSymbolizerParams = null, this._symbolizerParams = null, this._abortController = null, this._isCustomTilingScheme = !1, this._maxIndexedColormapSize = 0, this._rasterFunctionState = "na", this._globalUpdateRequested = !1, this.attached = !1, this.timeExtent = null, this.redrawOrRefetch = we(async (s = {}) => {
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
      this._tileStrategy = new J({ cachePolicy: "purge", acquireTile: (t) => this.acquireTile(t), releaseTile: (t) => this.releaseTile(t), cacheSize: e, tileInfoView: this._tileInfoView }), this._set("useProgressiveUpdate", s), this.layerView.requestUpdate();
    }
  }
  update(s) {
    this._fetchQueue.pause(), this._fetchQueue.state = s.state, this._tileStrategy.update(s), this._fetchQueue.resume();
    const { extent: e, resolution: t, scale: r } = s.state, i = this._tileInfoView.getClosestInfoForScale(r);
    if (this.layer.raster) {
      if (!this.useProgressiveUpdate || this._needBlockCacheUpdate) {
        const a = this._srcResolutions[i.level], n = e.toJSON ? e : ve.fromJSON(e);
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
    const s = Te();
    this._maxIndexedColormapSize = 4 * (s.maxTextureSize || 4096), this._initializeTileInfo(), this._tileInfoView = new Pe(this.layerView.tileInfo, this.layerView.fullExtent);
    const e = this._computeFetchConcurrency();
    this._fetchQueue = new Se({ tileInfoView: this._tileInfoView, concurrency: e, process: (r, i) => this._fetchTile(r, i) });
    const t = this._getCacheSize(this.useProgressiveUpdate);
    this._tileStrategy = new J({ cachePolicy: "purge", acquireTile: (r) => this.acquireTile(r), releaseTile: (r) => this.releaseTile(r), cacheSize: t, tileInfoView: this._tileInfoView }), this._updateBlockCacheRegistry();
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
    const [t, r] = s, i = new Re({ width: t, height: r, pixels: [new Uint8Array(t * r)], mask: new Uint8Array(t * r), pixelType: "u8" });
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
    const t = this._getFetchOptions(s.level, e.signal);
    return this.fetchTile(s, t);
  }
  _getFetchOptions(s, e) {
    const t = this.canUseWebGLForProcessing(), { layerView: r } = this, { tileInfo: i } = r, a = !i.isWrappable && rt(r.view.spatialReference) != null, n = t && this.layer.raster.hasUniqueSourceStorageInfo;
    return { allowPartialFill: !0, datumTransformation: r.datumTransformation, interpolation: t ? "nearest" : this.layer.interpolation, registryId: this._blockCacheRegistryId, requestRawData: n, skipRasterFunction: this.type === "raster" && this.container.rasterFunctionChain != null, signal: e, srcResolution: this._srcResolutions[s], timeExtent: r.timeExtent, tileInfo: i, disableWrapAround: a };
  }
  _getCacheSize(s) {
    return s ? 40 : 0;
  }
  _initializeTileInfo() {
    const { layerView: s } = this, e = s.view.spatialReference;
    if (this._canUseLayerLODs()) {
      const { origin: c, lods: p } = this.layer.tileInfo, d = p.map(({ scale: f }) => f), u = Y.create({ spatialReference: e, size: C, scales: d, origin: c });
      return s.set("tileInfo", u), void (this._srcResolutions = p.map(({ resolution: f }) => ({ x: f, y: f })));
    }
    const { scales: t, srcResolutions: r, isCustomTilingScheme: i } = it(this.layer.serviceRasterInfo, e, { tileSize: C, alignGlobalDatasetWithAGOL: !0, limitToSrcResolution: !1 }), a = Y.create({ spatialReference: e, size: C, scales: t }), n = a.origin.x === 0, { xmin: o, ymax: l } = s.fullExtent;
    (n || i && a.origin.x > o) && (a.origin = new Ie({ x: o, y: l, spatialReference: e })), this._isCustomTilingScheme = i, s.set("tileInfo", a), this._srcResolutions = r ?? [];
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
        const a = this._tileInfoView.getTileCoords(Ns, s.key), n = this._tileInfoView.getTileResolution(s.key);
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
    const e = this._getFetchOptions(this.previousLOD.level, s), t = await this.layer.fetchPixels(this.layerView.view.extent, this.layerView.view.width, this.layerView.view.height, { ...e, interpolation: "nearest", requestRawData: !1, skipRasterFunction: !1 });
    if (!t?.pixelBlock) return;
    const { resolution: r } = this.previousLOD, i = this._getBandIds(), a = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: t.pixelBlock.extractBands(i), isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: r, y: r }, bandIds: i });
    !this.canUseWebGLForProcessing() && a && a.type === "stretch" && this.layer.renderer && this.layer.renderer.type === "raster-stretch" && (a.factor = a.factor.map((n) => 255 * n), a.outMin = Math.round(255 * a.outMin), a.outMax = Math.round(255 * a.outMax)), this._globalSymbolizerParams = a;
  }
  _updateSymbolizerParams() {
    const { resolution: s } = this.previousLOD, e = this._getBandIds();
    this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null, isGCS: this.layerView.view.spatialReference.isGeographic, resolution: { x: s, y: s }, bandIds: e });
  }
  _updateBlockCacheRegistry(s = !1) {
    const { layer: e, layerView: t } = this, { raster: r } = e, { multidimensionalDefinition: i } = e.normalizeRasterFetchOptions({ multidimensionalDefinition: e.multidimensionalDefinition, timeExtent: t.timeExtent }), a = r.rasterInfo.multidimensionalInfo ? r.getSliceIndex(i) : null, n = tt(r.rasterId, a);
    if (n !== this._blockCacheRegistryUrl) {
      if (this._blockCacheRegistryUrl != null && se(this._blockCacheRegistryUrl, this._blockCacheRegistryId), this._blockCacheRegistryId = st(n, r.rasterInfo), s) {
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
h([m()], x.prototype, "_globalUpdateRequested", void 0), h([m()], x.prototype, "attached", void 0), h([m()], x.prototype, "container", void 0), h([m()], x.prototype, "layer", void 0), h([m()], x.prototype, "layerView", void 0), h([m()], x.prototype, "type", void 0), h([m()], x.prototype, "useWebGLForProcessing", null), h([m()], x.prototype, "useProgressiveUpdate", null), h([m()], x.prototype, "timeExtent", void 0), h([m()], x.prototype, "updating", null), x = h([M("esri.views.2d.layers.imagery.BaseImageryTileSubView2D")], x);
let S = class extends x {
  constructor() {
    super(...arguments), this.type = "raster";
  }
  attach() {
    super.attach(), this.container = new Ws(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this.updateRasterFunctionParameters();
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
        const _ = new Le({ geometry: w });
        e.add(_), this._geometry = _;
      }
    }
    const { container: a } = this;
    if (r.datasetFormat !== "Function" || i === "wcs") return a.rasterFunctionChain = null, a.children.forEach((w) => {
      const { bitmap: _ } = w;
      _ && (_.suspended = !0, _.processed = !1, _.projected && (_.invalidateTexture(), _.rasterTexture = null));
    }), void (this._rasterFunctionState = "na");
    const n = this._rasterFunctionState, { rasterFunction: o, primaryRasters: l } = r, c = o.supportsGPU && (!l || l.rasters.length <= 1), p = c ? o.flatWebGLFunctionChain : null, { renderer: d } = this.layer, u = !c || !p?.functions.length || d?.type === "raster-stretch" && d.dynamicRangeAdjustment || !this.canUseWebGLForProcessing();
    a.rasterFunctionChain = u ? null : p;
    const f = o == null ? "na" : a.rasterFunctionChain ? "gpu" : "cpu";
    a.children.forEach((w) => {
      const { bitmap: _ } = w;
      _ && (_.suspended = n !== f, _.processed = !1, _.processedTexture = null);
    }), this._rasterFunctionState = f;
  }
  async updateTileSource(e, t) {
    const r = this._getBandIds(), i = this._getLayerInterpolation(), a = this.canUseWebGLForProcessing(), { source: n, globalSymbolizerParams: o, suspended: l, coords: c, resolution: p } = t, d = this.layerView.hasTilingEffects ? o : t.symbolizerParams, { bitmap: u } = e;
    if ([u.x, u.y] = c, u.resolution = p, n?.pixelBlock != null) {
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
h([m()], S.prototype, "container", void 0), h([m()], S.prototype, "layer", void 0), h([m()], S.prototype, "type", void 0), S = h([M("esri.views.2d.layers.imagery.ImageryTileView2D")], S);
const Qs = S;
class Hs extends le {
  constructor(e, t, r, i, a, n, o = null) {
    super(e, t, r, i, a, n), this.tileData = new Ve(o), this.tileData.coordScale = [a, n], this.tileData.once("isReady", () => this.ready());
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
    const t = this.resolution / (e.resolution * e.pixelRatio), r = this.transforms.tileMat3, [i, a] = this.tileData.offset, n = [this.x + i * this.resolution, this.y - a * this.resolution], [o, l] = e.toScreenNoRotation([0, 0], n), { symbolTileSize: c } = this.tileData.symbolizerParameters, p = Math.round((this.width - this.tileData.offset[0]) / c) * c, d = Math.round((this.height - this.tileData.offset[1]) / c) * c, u = p / this.rangeX * t, f = d / this.rangeY * t;
    Ue(r, u, 0, 0, 0, f, 0, o, l, 1), ae(this.transforms.displayViewScreenMat3, e.displayViewMat3, r), this.tileData.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.tileData.stage = this.stage;
  }
  onDetach() {
    this.tileData.stage = null;
  }
}
class Js extends ue {
  constructor() {
    super(...arguments), this.isCustomTilingScheme = !1, this.symbolTypes = ["triangle"];
  }
  createTile(e) {
    const t = this._tileInfoView.getTileBounds(ne(), e), [r, i] = this._tileInfoView.tileInfo.size, a = this._tileInfoView.getTileResolution(e.level);
    return new Hs(e, a, t[0], t[3], r, i);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "imagery (vf tile)", brushes: [Be], target: () => this.children.map((r) => r.tileData), drawPhase: O.MAP });
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
    return this.layer.serviceRasterInfo?.dataType === "vector-magdir" && t?.pixelBlock && (t.pixelBlock = await this.layer.convertVectorFieldData(t.pixelBlock, e)), t;
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
    super.attach(), this.container = new Js(this._tileInfoView), this.container.isCustomTilingScheme = this._isCustomTilingScheme, this._updateSymbolType(this.layer.renderer), this._handle = L(() => this.layer.renderer, (s) => this._updateSymbolType(s));
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
    return $e(s, "vector-uv", r, t);
  }
  _updateSymbolType(s) {
    s.type === "vector-field" && (this.container.symbolTypes = s.style === "wind-barb" ? ["scalar", "triangle"] : s.style === "simple-scalar" ? ["scalar"] : ["triangle"]);
  }
};
h([m()], R.prototype, "container", void 0), h([m()], R.prototype, "layer", void 0), h([m()], R.prototype, "type", void 0), R = h([M("esri.views.2d.layers.imagery.VectorFieldTileView2D")], R);
const Ys = R, Ks = (s) => {
  let e = class extends s {
    constructor() {
      super(...arguments), this._rasterFieldPrefix = "Raster.", this.layer = null, this.view = null, this.tileInfo = null;
    }
    get fullExtent() {
      return this._getfullExtent();
    }
    get timeExtent() {
      return nt(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    get hasTilingEffects() {
      return !!(this.layer.renderer && "dynamicRangeAdjustment" in this.layer.renderer && this.layer.renderer.dynamicRangeAdjustment);
    }
    get datumTransformation() {
      return at(this.layer.fullExtent, this.view.spatialReference, !0);
    }
    supportsSpatialReference(t) {
      return !!re(this.layer.serviceRasterInfo, t);
    }
    async fetchPopupFeaturesAtLocation(t, r) {
      const { layer: i } = this;
      if (!t) throw new Fe("imageryTileLayerView:fetchPopupFeatures", "Nothing to fetch without area", { layer: i });
      const { popupEnabled: a } = i, n = ot(i, r);
      if (!a || n == null) return [];
      const o = [], { value: l, magdirValue: c, processedValue: p } = await i.identify(t, { timeExtent: this.timeExtent, signal: r?.signal });
      let d = "";
      if (l?.length) {
        d = i.type === "imagery-tile" && i.hasStandardTime() && l[0] != null ? l.map((G) => i.getStandardTimeValue(G)).join(", ") : l.join(", ");
        const u = { ObjectId: 0 }, f = "Raster.ServicePixelValue";
        u[f] = i.type === "imagery-tile" && i.raster.datasetFormat === "Function" ? p?.join(", ") : d, u[f + ".Raw"] = d;
        const w = i.raster?.rasterInfo ?? i.serviceRasterInfo, _ = w?.attributeTable;
        if (_ != null) {
          const { fields: G, features: me } = _, Q = G.find(({ name: T }) => T.toLowerCase() === "value"), pe = u[f], V = Q ? me.find((T) => String(T.attributes[Q.name]) === pe) : null;
          if (V) for (const T in V.attributes) V.attributes.hasOwnProperty(T) && (u[this._rasterFieldPrefix + T] = V.attributes[T]);
        }
        const N = w?.dataType;
        N !== "vector-magdir" && N !== "vector-uv" || (u["Raster.Magnitude"] = c?.[0], u["Raster.Direction"] = c?.[1]);
        const de = new Ce({ geometry: this.fullExtent.clone(), attributes: u, layer: i, sourceLayer: i });
        o.push(de);
      }
      return o;
    }
    _getfullExtent() {
      return re(this.layer.serviceRasterInfo, this.view.spatialReference);
    }
  };
  return h([m()], e.prototype, "fullExtent", null), h([m()], e.prototype, "layer", void 0), h([m({ readOnly: !0 })], e.prototype, "timeExtent", null), h([m()], e.prototype, "view", void 0), h([m()], e.prototype, "tileInfo", void 0), h([m({ readOnly: !0 })], e.prototype, "hasTilingEffects", null), h([m()], e.prototype, "datumTransformation", null), e = h([M("esri.views.layers.ImageryTileLayerView")], e), e;
};
let P = class extends Ks(lt(De(Oe))) {
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
    this.layer.increaseRasterJobHandlerUsage(), this._updateSubview(), this.addAttachHandles([L(() => this.displayParameters, (s, e) => {
      const t = s.interpolation !== e?.interpolation && (s.interpolation === "majority" || e?.interpolation === "majority") && oe(this.layer), r = s.renderer !== e?.renderer && this._getSubviewType(e?.renderer) !== this._getSubviewType(s.renderer);
      r && this._updateSubview();
      const i = s.multidimensionalDefinition !== e?.multidimensionalDefinition, a = s.rasterFunction !== e?.rasterFunction, n = a && !this._useWebGLForProcessing, o = i || t || r || n;
      this.subview.redrawOrRefetch({ refetch: o, reprocess: a }).catch((l) => {
        $(l) || F.getLogger(this).error(l);
      }), this.notifyChange("updating");
    }), L(() => this.layer.multidimensionalSubset ?? null, (s, e) => {
      const { multidimensionalDefinition: t } = this.layer;
      t != null && K(t, s) !== K(t, e) && (this.subview.redrawOrRefetch({ refetch: !0 }).catch((r) => {
        $(r) || F.getLogger(this).error(r);
      }), this.notifyChange("updating"));
    }, ze), L(() => this.timeExtent, () => {
      this.subview.timeExtent = this.timeExtent, this.subview.redrawOrRefetch({ refetch: !0 }).catch((s) => {
        $(s) || F.getLogger(this).error(s);
      });
    }, Me)]);
  }
  detach() {
    this.layer.decreaseRasterJobHandlerUsage(), this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null;
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
    if (r = e === "rasterVF" ? new Ys({ layer: t, layerView: this }) : e === "flow" ? new ke({ layer: t, layerView: this }) : new Qs({ layer: t, layerView: this }), "useWebGLForProcessing" in r && (r.useWebGLForProcessing = this._useWebGLForProcessing), "useProgressiveUpdate" in r && (r.useProgressiveUpdate = this._useProgressiveUpdate), "previousLOD" in r) {
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
h([m()], P.prototype, "subview", void 0), h([m()], P.prototype, "useWebGLForProcessing", null), h([m()], P.prototype, "useProgressiveUpdate", null), h([m({ readOnly: !0 })], P.prototype, "displayParameters", null), P = h([M("esri.views.2d.layers.ImageryTileLayerView2D")], P);
const gr = P;
export {
  gr as default
};
//# sourceMappingURL=ImageryTileLayerView2D-Dqe4TofN.js.map
