import { N as l, O as h, P as A, b_ as $e, jc as rs, m$ as vs, dl as x, p6 as vt, p7 as nt, p8 as ws, eU as jt, p9 as bs, dN as Y, ag as L, kd as As, eK as Ts, pa as Ps, d$ as Ct, pb as Vt, pc as $s, pd as Fs, pe as os, pf as _e, pg as Ns, et as _t, ph as Is, pi as Rs, pj as Fe, pk as Kt, pl as ks, pm as is, n0 as Xt, pn as as, po as Cs, pp as K, pq as _s, pr as kt, ps as Bs, pt as js, pu as Ss, pv as Ms, pw as Jt, px as Os, py as Ds, pz as Gs, s as Bt, m5 as Be, a6 as je, aU as zs } from "./main-DIdq27YS.js";
let Ut = class extends $e {
  constructor() {
    super(...arguments), this.raster = void 0;
  }
};
l([h({ json: { write: !0 } })], Ut.prototype, "raster", void 0), Ut = l([A("esri.layers.support.rasterFunctions.AspectFunctionArguments")], Ut);
const D = Ut;
var Yt;
let wt = Yt = class extends D {
  constructor() {
    super(...arguments), this.raster2 = void 0;
  }
  get rasters() {
    return [this.raster, this.raster2];
  }
  clone() {
    return new Yt({ raster: this.raster, raster2: this.raster2, operation: this.operation });
  }
};
l([h({ json: { write: !0 } })], wt.prototype, "operation", void 0), l([h({ json: { write: !0 } })], wt.prototype, "raster2", void 0), l([h({ readOnly: !0 })], wt.prototype, "rasters", null), wt = Yt = l([A("esri.layers.support.rasterFunctions.ArithmeticFunctionArguments")], wt);
const Es = wt, Vs = /* @__PURE__ */ new Set(["slope", "aspect", "curvature", "hillshade", "shadedrelief", "statistics"]);
let S = class extends $e {
  constructor() {
    super(...arguments), this.functionArguments = null, this.readingBufferSize = 0, this.id = -1, this.isNoopProcess = !1, this.rawInputBandIds = [], this.rawSourceRasterInfos = null, this.isInputBandIdsSwizzled = !1, this.swizzledBandSelection = [], this.isBranch = !1, this._bindingResult = null;
  }
  get supportsGPU() {
    return this._bindingResult.supportsGPU;
  }
  get flatWebGLFunctionChain() {
    const t = this.getWebGLProcessorDefinition();
    if (!t) return null;
    const e = [t], { parameters: s } = t;
    let r = s.rasters || s.raster && [s.raster];
    for (; r?.length; ) {
      e.unshift(...r);
      const u = [];
      for (let c = 0; c < r.length; c++) {
        const { parameters: p } = r[c], m = p.rasters || p.raster && [p.raster];
        m?.length && u.push(...m);
      }
      r = u;
    }
    for (let u = e.length - 1; u >= 0; u--) e[u].isNoopProcess && e.splice(u, 1);
    let n = !1;
    for (let u = 0; u < e.length; u++) {
      const c = e[u];
      c.id = e.length - u - 1;
      const { rasters: p } = c.parameters;
      n = n || p != null && p.length > 1;
    }
    const a = e.some(({ name: u }) => Vs.has(u.toLowerCase())), { rawSourceRasterInfos: o } = this;
    return { functions: e, hasBranches: n, hasFocalFunction: a, isSourceSingleBand: o?.[0]?.bandCount === 1 };
  }
  bind(t, e = !1, s = -1) {
    this.id = s + 1;
    const r = this._getRasterValues();
    let n = !0;
    for (let a = 0; a < r.length; a++) {
      const o = r[a];
      if (o != null && this._isRasterFunctionValue(o)) {
        const u = o.bind(t, e, this.id + a);
        if (!u.success) return this._bindingResult = u, u;
        n = n && u.supportsGPU;
      }
    }
    return !this.rasterInfo || e ? (this.sourceRasterInfos = this._getSourceRasterInfos(t), this._bindingResult = this._bindSourceRasters(), this._bindingResult.success && this._patchRasterInfo(), this._bindingResult.supportsGPU = n && this._bindingResult.supportsGPU, this.processInputBandIds(), this._bindingResult) : (this._bindingResult = { success: !0, supportsGPU: !0 }, this.processInputBandIds(), this._bindingResult);
  }
  process(t) {
    const e = this._getRasterValues(), s = e.length === 0 ? t.pixelBlocks ?? t.primaryPixelBlocks : e.map((r) => this._readRasterValue(r, t));
    return this._processPixels({ ...t, pixelBlocks: s });
  }
  processInputBandIds() {
    const t = this._getRasterValues().filter(this._isRasterFunctionValue);
    let e;
    if (t.length > 1) {
      const n = t.map((o) => o.processInputBandIds()[0]);
      this.rawInputBandIds = n, this.isInputBandIdsSwizzled = this.rawInputBandIds.some((o, u) => o !== u);
      const a = t.filter((o) => o.functionName === "ExtractBand");
      return a.length && a.forEach((o, u) => {
        o.isInputBandIdsSwizzled = !0, o.swizzledBandSelection = [u, u, u];
      }), this.rawInputBandIds;
    }
    const s = t[0];
    if (s) {
      if (e = s.processInputBandIds(), s.isInputBandIdsSwizzled) return this.rawInputBandIds = e, e;
    } else {
      e = [];
      const { bandCount: n } = this.sourceRasterInfos[0];
      for (let a = 0; a < n; a++) e.push(a);
    }
    const r = this._getInputBandIds(e);
    return this.isInputBandIdsSwizzled = r.some((n, a) => n !== a), this.rawInputBandIds = r, this.rawInputBandIds;
  }
  getPrimaryRasters() {
    const t = [], e = [];
    return this._getPrimaryRasters(this, t, e), { rasters: t, rasterIds: e };
  }
  getWebGLProcessorDefinition() {
    const t = this._getWebGLParameters(), { raster: e, rasters: s } = this.functionArguments;
    return s && Array.isArray(s) && s.length ? (t.rasters = s.map((r) => this._isRasterFunctionValue(r) ? r.getWebGLProcessorDefinition() : typeof r == "number" ? { name: "Constant", parameters: { value: r }, pixelType: "f32", id: -1, isNoopProcess: !1 } : { name: "Identity", parameters: { value: r }, pixelType: "f32", id: -1, isNoopProcess: !1 }), t.rasters.some((r) => r != null) || (t.rasters = null)) : this._isRasterFunctionValue(e) && (t.raster = e.getWebGLProcessorDefinition()), { name: this.functionName, parameters: t, pixelType: this.outputPixelType, id: this.id, isNoopProcess: this.isNoopProcess };
  }
  getClippingGeometries() {
    const t = [];
    this.functionName === "Clip" && t.push(this.functionArguments);
    const { raster: e, rasters: s } = this.functionArguments;
    if (s && Array.isArray(s) && s.length) s.forEach((r) => {
      if (this._isRasterFunctionValue(r)) {
        const n = r.getClippingGeometries();
        t.push(...n);
      }
    });
    else if (this._isRasterFunctionValue(e)) {
      const r = e.getClippingGeometries();
      t.push(...r);
    }
    return t;
  }
  _getOutputPixelType(t) {
    return this.outputPixelType === "unknown" ? t : this.outputPixelType ?? t;
  }
  _getWebGLParameters() {
    return {};
  }
  _getInputBandIds(t) {
    return t;
  }
  _removeStatsHistColormapVAT(t) {
    t.statistics = null, t.histograms = null, t.colormap = null, t.attributeTable = null;
  }
  _getRasterValues() {
    const { rasterArgumentNames: t } = this;
    return t[0] === "rasters" ? this.functionArguments.rasters ?? [] : t.flatMap((e) => this.functionArguments[e]);
  }
  _getSourceRasterInfos(t) {
    const e = this._getRasterValues(), { rasterInfos: s, rasterIds: r } = t;
    if (e.length === 0) return s;
    const n = e.map((o) => o && typeof o == "object" && "bind" in o && o.rasterInfo ? o.rasterInfo : typeof o == "string" && r.includes(o) ? s[r.indexOf(o)] : typeof o != "number" ? s[0] : void 0), a = n.find((o) => o) ?? s[0];
    return n.forEach((o, u) => {
      o === void 0 && (n[u] = a);
    }), n;
  }
  _getPrimaryRasterId(t) {
    return t?.rasterId;
  }
  _getPrimaryRasters(t, e = [], s = []) {
    for (let r = 0; r < t.sourceRasters.length; r++) {
      const n = t.sourceRasters[r];
      if (typeof n != "number") if ("bind" in n) this._getPrimaryRasters(n, e, s);
      else {
        const a = n, o = this._getPrimaryRasterId(a);
        if (o == null) continue;
        s.includes(o) || (this.mainPrimaryRasterId === o ? (e.unshift(a), s.unshift(o)) : (e.push(a), s.push(o)));
      }
    }
  }
  _isRasterFunctionValue(t) {
    return t != null && typeof t == "object" && "getWebGLProcessorDefinition" in t;
  }
  _readRasterValue(t, e) {
    const { primaryPixelBlocks: s } = e;
    if (t == null || t === "$$") {
      const r = s[0];
      return r == null ? null : r.clone();
    }
    if (typeof t == "string") {
      const r = e.primaryRasterIds.indexOf(t);
      return r === -1 ? null : s[r];
    }
    if (typeof t == "number") {
      const r = s[0];
      if (r == null) return null;
      const { width: n, height: a, pixelType: o } = r, u = new Float32Array(n * a);
      u.fill(t);
      const c = this.sourceRasterInfos[0].bandCount, p = new Array(c).fill(u);
      return new x({ width: n, height: a, pixelType: o, pixels: p });
    }
    return t.process(e);
  }
  _patchRasterInfo() {
    const { rasterInfo: t } = this;
    if (!t?.keyProperties) return;
    const { bandCount: e, keyProperties: s, statistics: r, histograms: n } = t, a = s.BandProperties;
    a && a.length !== e && (t.keyProperties = { ...s, BandProperties: void 0 }), r && r.length !== e && (t.statistics = r.length > e ? r.slice(0, e) : null), n && n.length !== e && (t.histograms = n.length > e ? n.slice(0, e) : null), s.BAND_COUNT && Number(s.BAND_COUNT) !== e && (t.keyProperties = { ...s, BAND_COUNT: typeof s.BAND_COUNT == "string" ? String(e) : e });
  }
};
l([h({ json: { write: !0 } })], S.prototype, "functionName", void 0), l([h({ json: { write: !0 } })], S.prototype, "functionArguments", void 0), l([h()], S.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } }), rs((i) => i?.toLowerCase())], S.prototype, "outputPixelType", void 0), l([h({ json: { write: !0 } })], S.prototype, "mainPrimaryRasterId", void 0), l([h()], S.prototype, "sourceRasters", void 0), l([h({ type: [vs], json: { write: !0 } })], S.prototype, "sourceRasterInfos", void 0), l([h({ json: { write: !0 } })], S.prototype, "rasterInfo", void 0), l([h({ json: { write: !0 } })], S.prototype, "readingBufferSize", void 0), l([h({ json: { write: !0 } })], S.prototype, "id", void 0), l([h()], S.prototype, "isNoopProcess", void 0), l([h()], S.prototype, "supportsGPU", null), l([h()], S.prototype, "rawInputBandIds", void 0), l([h()], S.prototype, "rawSourceRasterInfos", void 0), l([h()], S.prototype, "isInputBandIdsSwizzled", void 0), l([h()], S.prototype, "swizzledBandSelection", void 0), l([h()], S.prototype, "isBranch", void 0), l([h({ readOnly: !0 })], S.prototype, "flatWebGLFunctionChain", null), l([h()], S.prototype, "_bindingResult", void 0), S = l([A("esri.layers.support.rasterFunctions.BaseRasterFunction")], S);
const G = S, $ = { userDefined: -1, lineDetectionHorizontal: 0, lineDetectionVertical: 1, lineDetectionLeftDiagonal: 2, lineDetectionRightDiagonal: 3, gradientNorth: 4, gradientWest: 5, gradientEast: 6, gradientSouth: 7, gradientNorthEast: 8, gradientNorthWest: 9, smoothArithmeticMean: 10, smoothing3x3: 11, smoothing5x5: 12, sharpening3x3: 13, sharpening5x5: 14, laplacian3x3: 15, laplacian5x5: 16, sobelHorizontal: 17, sobelVertical: 18, sharpen: 19, sharpen2: 20, pointSpread: 21, none: 255 }, Us = { plus: 1, minus: 2, times: 3, sqrt: 4, power: 5, abs: 10, divide: 23, exp: 25, exp10: 26, exp2: 27, int: 30, float: 32, ln: 35, log10: 36, log2: 37, mod: 44, negate: 45, roundDown: 48, roundUp: 49, square: 53, floatDivide: 64, floorDivide: 65 }, U = { bitwiseAnd: 11, bitwiseLeftShift: 12, bitwiseNot: 13, bitwiseOr: 14, bitwiseRightShift: 15, bitwiseXOr: 16, booleanAnd: 17, booleanNot: 18, booleanOr: 19, booleanXOr: 20, equalTo: 24, greaterThan: 28, greaterThanEqual: 29, lessThan: 33, lessThanEqual: 34, isNull: 31, notEqual: 46 }, H = { acos: 6, asin: 7, atan: 8, atanh: 9, cos: 21, cosh: 22, sin: 51, sinh: 52, tan: 56, tanh: 57, acosh: 59, asinh: 60, atan2: 61 }, Ls = { majority: 38, max: 39, mean: 40, med: 41, min: 42, minority: 43, range: 47, stddev: 54, sum: 55, variety: 58, majorityIgnoreNoData: 66, maxIgnoreNoData: 67, meanIgnoreNoData: 68, medIgnoreNoData: 69, minIgnoreNoData: 70, minorityIgnoreNoData: 71, rangeIgnoreNoData: 72, stddevIgnoreNoData: 73, sumIgnoreNoData: 74, varietyIgnoreNoData: 75 }, us = { setNull: 50, conditional: 78 }, Se = { ...Us, ...U, ...H, ...Ls, ...us }, ls = /* @__PURE__ */ new Map([[H.acos, { domain: [0, Math.PI], isInteger: !1 }], [H.asin, { domain: [-Math.PI / 2, Math.PI / 2], isInteger: !1 }], [H.atan, { domain: [-Math.PI / 2, Math.PI / 2], isInteger: !1 }], [H.cos, { domain: [-1, 1], isInteger: !1 }], [H.sin, { domain: [-1, 1], isInteger: !1 }], [U.booleanAnd, { domain: [0, 1], isInteger: !0 }], [U.booleanNot, { domain: [0, 1], isInteger: !0 }], [U.booleanOr, { domain: [0, 1], isInteger: !0 }], [U.booleanXOr, { domain: [0, 1], isInteger: !0 }], [U.equalTo, { domain: [0, 1], isInteger: !0 }], [U.notEqual, { domain: [0, 1], isInteger: !0 }], [U.greaterThan, { domain: [0, 1], isInteger: !0 }], [U.greaterThanEqual, { domain: [0, 1], isInteger: !0 }], [U.lessThan, { domain: [0, 1], isInteger: !0 }], [U.lessThanEqual, { domain: [0, 1], isInteger: !0 }], [U.isNull, { domain: [0, 1], isInteger: !0 }]]);
function Me(i) {
  return ls.get(i);
}
const Oe = [0, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 999, 999, 999, 999, 999, 999, 2, 1, 2, 999, 1, 1, 2, 1, 1, 1, 999, 999, 1, 1, 999, 1, 1, 2, 999, 999, 2, 2, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 3, 999, 3];
function Ws(i, t = !1) {
  const e = i.map((o) => o.mask), s = e.filter((o) => o != null), r = i[0].pixels[0].length;
  if (s.length === 0 || t && s.length !== e.length) return new Uint8Array(r).fill(255);
  const n = s[0], a = new Uint8Array(n);
  if (s.length === 1) return a;
  if (!t) {
    for (let o = 1; o < s.length; o++) {
      const u = s[o];
      for (let c = 0; c < a.length; c++) a[c] && (a[c] = u[c] ? 255 : 0);
    }
    return a;
  }
  for (let o = 1; o < s.length; o++) {
    const u = s[o];
    for (let c = 0; c < a.length; c++) a[c] === 0 && (a[c] = u[c] ? 255 : 0);
  }
  return a;
}
function qs(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] + r[o]);
  return a;
}
function Hs(i, t, e) {
  const [s] = i, r = s.length, n = x.createEmptyBand("f32", r);
  return n.set(s), n;
}
function Xs(i, t, e) {
  const [s] = i, r = s.length, n = x.createEmptyBand(e, r);
  for (let a = 0; a < r; a++) t && !t[a] || (n[a] = s[a] * s[a]);
  return n;
}
function Js(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] - r[o]);
  return a;
}
function Ks(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] * r[o]);
  return a;
}
function Ys(i, t, e) {
  const [s] = i, r = s.length, n = x.createEmptyBand(e, r);
  for (let a = 0; a < r; a++) t && !t[a] || (n[a] = Math.sign(s[a]) * Math.floor(Math.abs(s[a])));
  return n;
}
function cs(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] / r[o]);
  return a;
}
function Zs(i, t, e) {
  return cs(i, t, "f32");
}
function Qs(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = Math.floor(s[o] / r[o]));
  return a;
}
function tn(i, t, e, s) {
  const r = i[0], n = r.length, a = x.createEmptyBand(e, n);
  if (s === H.atanh) {
    for (let u = 0; u < n; u++) if (t[u]) {
      const c = r[u];
      Math.abs(c) >= 1 ? t[u] = 0 : a[u] = Math.atanh(c);
    }
    return a;
  }
  const o = s === H.asin ? Math.asin : Math.acos;
  for (let u = 0; u < n; u++) if (t[u]) {
    const c = r[u];
    Math.abs(c) > 1 ? t[u] = 0 : a[u] = o(c);
  }
  return a;
}
function en(i, t, e, s) {
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s(r[o]));
  return a;
}
function sn(i, t, e, s) {
  const [r, n] = i, a = r.length, o = x.createEmptyBand(e, a);
  for (let u = 0; u < a; u++) t && !t[u] || (o[u] = s(r[u], n[u]));
  return o;
}
function nn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] & r[o]);
  return a;
}
function rn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] << r[o]);
  return a;
}
function on(i, t, e) {
  const [s] = i, r = s.length, n = x.createEmptyBand(e, r);
  for (let a = 0; a < r; a++) t && !t[a] || (n[a] = ~s[a]);
  return n;
}
function an(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] | r[o]);
  return a;
}
function un(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] >> r[o]);
  return a;
}
function ln(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] ^ r[o]);
  return a;
}
function cn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] && r[o] ? 1 : 0);
  return a;
}
function pn(i, t, e) {
  const [s] = i, r = s.length, n = x.createEmptyBand(e, r);
  for (let a = 0; a < r; a++) t && !t[a] || (n[a] = s[a] ? 0 : 1);
  return n;
}
function hn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] || r[o] ? 1 : 0);
  return a;
}
function mn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = (s[o] ? 1 : 0) ^ (r[o] ? 1 : 0));
  return a;
}
function fn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] === r[o] ? 1 : 0);
  return a;
}
function Ne(i, t, e, s) {
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n), o = s === Math.E;
  for (let u = 0; u < n; u++) t && !t[u] || (a[u] = o ? Math.exp(r[u]) : s ** r[u]);
  return a;
}
function dn(i, t, e) {
  return Ne(i, t, e, 10);
}
function gn(i, t, e) {
  return Ne(i, t, e, 2);
}
function yn(i, t, e) {
  return Ne(i, t, e, Math.E);
}
function Ie(i, t, e, s) {
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (r[o] <= 0 ? t[o] = 0 : a[o] = s(r[o]));
  return a;
}
function xn(i, t, e) {
  return Ie(i, t, e, Math.log10);
}
function vn(i, t, e) {
  return Ie(i, t, e, Math.log2);
}
function wn(i, t, e) {
  return Ie(i, t, e, Math.log);
}
function bn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] > r[o] ? 1 : 0);
  return a;
}
function An(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] >= r[o] ? 1 : 0);
  return a;
}
function Tn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] < r[o] ? 1 : 0);
  return a;
}
function Pn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] <= r[o] ? 1 : 0);
  return a;
}
function $n(i, t, e) {
  const [s] = i, r = s.length, n = x.createEmptyBand(e, r);
  if (!t) return n;
  for (let a = 0; a < r; a++) n[a] = t[a] ? 0 : 1;
  return n;
}
function Fn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] % r[o]);
  return a;
}
function Nn(i, t, e) {
  const [s] = i, r = s.length, n = x.createEmptyBand(e, r);
  for (let a = 0; a < r; a++) t && !t[a] || (n[a] = -s[a]);
  return n;
}
function In(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t && !t[o] || (a[o] = s[o] === r[o] ? 0 : 1);
  return a;
}
function Rn(i, t, e) {
  const [s, r] = i, n = s.length, a = x.createEmptyBand(e, n), o = new Uint8Array(n);
  for (let u = 0; u < n; u++) t != null && !t[u] || s[u] !== 0 || (a[u] = r[u], o[u] = 255);
  return { band: a, mask: o };
}
function De(i, t, e) {
  const [s, r, n] = i, a = s.length, o = x.createEmptyBand(e, a);
  for (let u = 0; u < a; u++) t && !t[u] || (o[u] = s[u] ? r[u] : n[u]);
  return o;
}
function Ge(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) if (!t || t[o]) {
    let u = r[o];
    for (let c = 1; c < s; c++) {
      const p = i[c][o];
      u < p && (u = p);
    }
    a[o] = u;
  }
  return a;
}
function ze(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) if (!t || t[o]) {
    let u = r[o];
    for (let c = 1; c < s; c++) {
      const p = i[c][o];
      u > p && (u = p);
    }
    a[o] = u;
  }
  return a;
}
function Ee(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) if (!t || t[o]) {
    let u = r[o], c = u;
    for (let p = 1; p < s; p++) {
      const m = i[p][o];
      c < m ? c = m : u > m && (u = m);
    }
    a[o] = c - u;
  }
  return a;
}
function Ve(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) if (!t || t[o]) {
    let u = 0;
    for (let c = 0; c < s; c++) u += i[c][o];
    a[o] = u / s;
  }
  return a;
}
function Ue(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) if (!t || t[o]) for (let u = 0; u < s; u++) {
    const c = i[u];
    a[o] += c[o];
  }
  return a;
}
function Le(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) if (!t || t[o]) {
    const u = new Float32Array(s);
    let c = 0;
    for (let m = 0; m < s; m++) {
      const f = i[m];
      c += f[o], u[m] = f[o];
    }
    c /= s;
    let p = 0;
    for (let m = 0; m < s; m++) p += (u[m] - c) ** 2;
    a[o] = Math.sqrt(p / s);
  }
  return a;
}
function We(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const r = Math.floor(s / 2), [n] = i, a = n.length, o = x.createEmptyBand(e, a), u = new Float32Array(s), c = s % 2 == 1;
  for (let p = 0; p < a; p++) if (!t || t[p]) {
    for (let m = 0; m < s; m++) u[m] = i[m][p];
    u.sort(), o[p] = c ? u[r] : (u[r] + u[r - 1]) / 2;
  }
  return o;
}
function ps(i, t, e) {
  const [s, r] = i;
  if (r == null) return s;
  const n = s.length, a = x.createEmptyBand(e, n);
  for (let o = 0; o < n; o++) t[o] && (s[o] === r[o] ? a[o] = s[o] : t[o] = 0);
  return a;
}
function qe(i, t, e) {
  const s = i.length;
  if (s <= 2) return ps(i, t, e);
  const r = i[0].length, n = x.createEmptyBand(e, r), a = /* @__PURE__ */ new Map();
  for (let o = 0; o < r; o++) if (!t || t[o]) {
    let u;
    a.clear();
    for (let m = 0; m < s; m++) u = i[m][o], a.set(u, a.has(u) ? a.get(u) + 1 : 1);
    let c = 0, p = 0;
    for (const m of a.keys()) c = a.get(m), c > p && (p = c, u = m);
    n[o] = u;
  }
  return n;
}
function He(i, t, e) {
  const s = i.length;
  if (s <= 2) return ps(i, t, e);
  const r = i[0].length, n = x.createEmptyBand(e, r), a = /* @__PURE__ */ new Map();
  for (let o = 0; o < r; o++) if (!t || t[o]) {
    let u;
    a.clear();
    for (let m = 0; m < s; m++) u = i[m][o], a.set(u, a.has(u) ? a.get(u) + 1 : 1);
    let c = 0, p = i.length;
    for (const m of a.keys()) c = a.get(m), c < p && (p = c, u = m);
    n[o] = u;
  }
  return n;
}
function Xe(i, t, e) {
  const s = i.length;
  if (s < 2) return i[0];
  const [r] = i, n = r.length, a = x.createEmptyBand(e, n), o = /* @__PURE__ */ new Set();
  for (let u = 0; u < n; u++) if (!t || t[u]) {
    let c;
    o.clear();
    for (let p = 0; p < s; p++) c = i[p][u], o.add(c);
    a[u] = o.size;
  }
  return a;
}
const O = /* @__PURE__ */ new Map(), Ht = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
function kn() {
  O.size || (O.set(4, Math.sqrt), O.set(6, Math.acos), O.set(7, Math.asin), O.set(8, Math.atan), O.set(9, Math.atanh), O.set(10, Math.abs), O.set(21, Math.cos), O.set(22, Math.cosh), O.set(48, Math.floor), O.set(49, Math.ceil), O.set(51, Math.sin), O.set(52, Math.sinh), O.set(56, Math.tan), O.set(57, Math.tanh), O.set(59, Math.acosh), O.set(60, Math.asinh), O.set(65, Math.floor), Ht.set(5, Math.pow), Ht.set(61, Math.atan2), T.set(1, qs), T.set(2, Js), T.set(3, Ks), T.set(11, nn), T.set(12, rn), T.set(13, on), T.set(14, an), T.set(15, un), T.set(16, ln), T.set(17, cn), T.set(18, pn), T.set(19, hn), T.set(20, mn), T.set(23, cs), T.set(24, fn), T.set(25, yn), T.set(26, dn), T.set(27, gn), T.set(28, bn), T.set(29, An), T.set(30, Ys), T.set(31, $n), T.set(32, Hs), T.set(33, Tn), T.set(34, Pn), T.set(35, wn), T.set(36, xn), T.set(37, vn), T.set(44, Fn), T.set(45, Nn), T.set(46, In), T.set(53, Xs), T.set(64, Zs), T.set(65, Qs), T.set(76, De), T.set(78, De), j.set(38, qe), j.set(39, Ge), j.set(40, Ve), j.set(41, We), j.set(42, ze), j.set(43, He), j.set(47, Ee), j.set(54, Le), j.set(55, Ue), j.set(58, Xe), j.set(66, qe), j.set(67, Ge), j.set(68, Ve), j.set(69, We), j.set(70, ze), j.set(71, He), j.set(72, Ee), j.set(73, Le), j.set(74, Ue), j.set(75, Xe));
}
function Cn(i, t, e, s) {
  let [r, n] = vt(e);
  const a = nt(e);
  a && (r -= 1e-5, n += 1e-5);
  for (let o = 0; o < t.length; o++) if (t[o]) {
    const u = i[o];
    isNaN(u) || u < r || u > n ? t[o] = 0 : s[o] = a ? Math.round(u) : u;
  }
}
function hs(i, t, e = {}) {
  kn();
  let s = Ws(i, t >= 66 && t <= 75);
  const { outputPixelType: r = "f32" } = e, n = !j.has(t) || e.processAsMultiband, a = n ? i[0].pixels.length : 1, o = [];
  for (let c = 0; c < a; c++) {
    const p = j.has(t) && !n ? i.flatMap((d) => d.pixels) : i.map((d) => d.pixels[c]);
    let m, f = !0;
    if (t === us.setNull) {
      const d = Rn(p, s, r);
      m = d.band, s = d.mask, f = !1;
    } else T.has(t) ? m = T.get(t)(p, s, "f64") : O.has(t) ? m = t === H.asin || t === H.acos || t === H.atanh ? tn(p, s, "f64", t) : en(p, s, "f64", O.get(t)) : Ht.has(t) ? m = sn(p, s, "f64", Ht.get(t)) : j.has(t) ? m = j.get(t)(p, s, "f64") : (m = p[0], f = !1);
    if (f && t !== U.isNull && !ls.has(t)) {
      const d = x.createEmptyBand(r, m.length);
      s || (s = new Uint8Array(m.length).fill(255)), Cn(m, s, r, d), m = d;
    }
    o.push(m);
  }
  const u = i[0];
  return new x({ width: u.width, height: u.height, pixelType: r, mask: t === U.isNull ? null : s, pixels: o });
}
function _n(i, t, e) {
  return hs(i, t = [null, 1, 2, 3, 23, 5, 44][t] ?? 1, { outputPixelType: e });
}
let bt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Arithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster", "raster2"];
  }
  _bindSourceRasters() {
    const { operation: t } = this.functionArguments;
    if (t < 1 || t > 6) return { success: !1, supportsGPU: !1, error: "unsupported operation" };
    const e = this.sourceRasterInfos[0].clone();
    return this.outputPixelType = this._getOutputPixelType(e.pixelType), e.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(e), this.rasterInfo = e, { success: !0, supportsGPU: e.bandCount <= 3 };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e?.[0] == null || e?.[1] == null ? null : _n(e, this.functionArguments.operation, this.outputPixelType);
  }
  _getWebGLParameters() {
    const { operation: t } = this.functionArguments, e = ["", "plus", "minus", "times", "divide", "power", "mod"][t], s = this.outputPixelType ?? "f32";
    let [r, n] = vt(s);
    const a = nt(s);
    return a && (r -= 1e-4, n += 1e-4), { imageCount: 2, operationName: e, domainRange: [r, n], isOutputRounded: a };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], bt.prototype, "functionName", void 0), l([h({ type: Es, json: { write: !0, name: "rasterFunctionArguments" } })], bt.prototype, "functionArguments", void 0), l([h()], bt.prototype, "rasterArgumentNames", void 0), bt = l([A("esri.layers.support.rasterFunctions.ArithmeticFunction")], bt);
const Bn = bt;
var Zt;
let Qt = Zt = class extends D {
  clone() {
    return new Zt({ raster: this.raster });
  }
};
Qt = Zt = l([A("esri.layers.support.rasterFunctions.AspectFunctionArguments")], Qt);
const jn = Qt;
let rt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Aspect", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    this.isGCS = t.spatialReference?.isGeographic ?? !1, this.outputPixelType = this._getOutputPixelType("f32");
    const e = t.clone();
    return e.pixelType = this.outputPixelType, e.statistics = [{ min: -1, max: 360, avg: 180, stddev: 30 }], e.histograms = null, e.colormap = null, e.attributeTable = null, e.bandCount = 1, this.rasterInfo = e, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { extent: s, primaryPixelSizes: r } = t, n = r?.[0], a = n ?? (s ? { x: s.width / e.width, y: s.height / e.height } : { x: 1, y: 1 });
    return ws(e, { resolution: a });
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], rt.prototype, "functionName", void 0), l([h({ type: jn, json: { write: !0, name: "rasterFunctionArguments" } })], rt.prototype, "functionArguments", void 0), l([h()], rt.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], rt.prototype, "isGCS", void 0), rt = l([A("esri.layers.support.rasterFunctions.AspectFunction")], rt);
const Sn = rt, Mn = /* @__PURE__ */ new Set(["+", "-", "*", "/", "(", ")"]);
function On(i, t) {
  (i = i.replaceAll(" ", "")).startsWith("-") && (i = "0" + i), i.startsWith("+") && (i = i.slice(1, i.length));
  const e = i.split(""), s = [], r = [];
  let n = "";
  for (let a = 0; a < e.length; a++) {
    const o = e[a];
    Mn.has(o) ? (n.length && r.push(Je(n, t)), s.push(o), n = "") : n = n.concat(o);
  }
  return n.length && r.push(Je(n, t)), { ops: s, nums: r };
}
function Je(i, t) {
  return i.toLowerCase().startsWith("b") ? t[parseInt(i.slice(1), 10) - 1] : parseFloat(i);
}
function Dn(i, t, e, s) {
  if (typeof e == "number" && typeof s == "number") return e + s;
  let r, n, a;
  typeof e == "number" ? (a = s, r = a.length, n = new Float32Array(r), n.fill(e)) : (r = e.length, n = e, s.constructor === Number ? (a = new Float32Array(r), a.fill(s)) : a = s);
  const o = new Float32Array(r);
  switch (t) {
    case "+":
      for (let u = 0; u < r; u++) (i == null || i[u]) && (o[u] = n[u] + a[u]);
      break;
    case "-":
      for (let u = 0; u < r; u++) (i == null || i[u]) && (o[u] = n[u] - a[u]);
      break;
    case "*":
      for (let u = 0; u < r; u++) (i == null || i[u]) && (o[u] = n[u] * a[u]);
      break;
    case "/":
      for (let u = 0; u < r; u++) (i == null || i[u]) && a[u] && (o[u] = n[u] / a[u]);
      break;
    case "(":
    case ")":
      throw new Error("encountered error with custom band index equation");
  }
  return o;
}
function Gn(i, t) {
  i.splice(t, 1);
  let e = 0, s = 0;
  do {
    e = 0, s = 0;
    for (let r = 0; r < i.length; r++) if (i[r] === "(") e = r;
    else if (i[r] === ")") {
      s = r;
      break;
    }
    s === e + 1 && i.splice(e, 2);
  } while (s === e + 1);
  return i;
}
function zn(i) {
  if (i.length === 1) return { opIndex: 0, numIndex: 0 };
  let t = 0, e = 0;
  for (let a = 0; a < i.length; a++) if (i[a] === "(") t = a;
  else if (i[a] === ")") {
    e = a;
    break;
  }
  const s = e === 0 ? i : i.slice(t + 1, e);
  let r = -1;
  for (let a = 0; a < s.length; a++) if (s[a] === "*" || s[a] === "/") {
    r = a;
    break;
  }
  if (r > -1) e > 0 && (r += t + 1);
  else {
    for (let a = 0; a < s.length; a++) if (s[a] === "+" || s[a] === "-") {
      r = a;
      break;
    }
    e > 0 && (r += t + 1);
  }
  let n = 0;
  for (let a = 0; a < r; a++) i[a] === "(" && n++;
  return { opIndex: r, numIndex: r - n };
}
function En(i, t, e) {
  let s, { ops: r, nums: n } = On(e, t);
  if (r.length === 0) {
    const a = n.length === 1 ? n[0] : t[0];
    if (a instanceof Float32Array) return [a];
    const o = new Float32Array(t[0].length);
    return typeof a == "number" ? o.fill(a) : o.set(a), [o];
  }
  for (; r.length > 0; ) {
    const { numIndex: a, opIndex: o } = zn(r);
    if (s = Dn(i, r[o], n[a], n[a + 1]), r.length === 1) break;
    r = Gn(r, o), n.splice(a, 2, s);
  }
  return [s];
}
const Vn = new jt({ 0: "custom", 1: "ndvi", 2: "savi", 3: "tsavi", 4: "msavi", 5: "gemi", 6: "pvi", 7: "gvitm", 8: "sultan", 9: "vari", 10: "gndvi", 11: "sr", 12: "ndvi-re", 13: "sr-re", 14: "mtvi2", 15: "rtvi-core", 16: "ci-re", 17: "ci-g", 18: "ndwi", 19: "evi", 20: "iron-oxide", 21: "ferrous-minerals", 22: "clay-minerals", 23: "wndwi", 24: "bai", 25: "nbr", 26: "ndbi", 27: "ndmi", 28: "ndsi", 29: "mndwi" }, { useNumericKeys: !0 });
function Un(i, t) {
  if (!bs(i)) return i;
  const { equation: e, method: s } = t, r = t.bandIndexes.map((p) => p - 1), { pixels: n, mask: a } = i;
  let o;
  switch (s) {
    case "gndvi":
    case "nbr":
    case "ndbi":
    case "ndvi":
    case "ndvi-re":
    case "ndsi":
    case "ndmi":
    case "mndwi":
      o = Ke(a, n[r[0]], n[r[1]]);
      break;
    case "ndwi":
      o = Ke(a, n[r[1]], n[r[0]]);
      break;
    case "sr":
    case "sr-re":
    case "iron-oxide":
    case "ferrous-minerals":
    case "clay-minerals":
      o = Wn(a, n[r[0]], n[r[1]]);
      break;
    case "ci-g":
    case "ci-re":
      o = qn(a, n[r[0]], n[r[1]]);
      break;
    case "savi":
      o = Hn(a, n[r[0]], n[r[1]], r[2] + 1);
      break;
    case "tsavi":
      o = Xn(a, n[r[0]], n[r[1]], r[2] + 1, r[3] + 1, r[4] + 1);
      break;
    case "msavi":
      o = Jn(a, n[r[0]], n[r[1]]);
      break;
    case "gemi":
      o = Kn(a, n[r[0]], n[r[1]]);
      break;
    case "pvi":
      o = Yn(a, n[r[0]], n[r[1]], r[2] + 1, r[3] + 1);
      break;
    case "gvitm":
      o = Zn(a, [n[r[0]], n[r[1]], n[r[2]], n[r[3]], n[r[4]], n[r[5]]]);
      break;
    case "sultan":
      o = Qn(a, [n[r[0]], n[r[1]], n[r[2]], n[r[3]], n[r[4]]]);
      break;
    case "vari":
      o = tr(a, [n[r[0]], n[r[1]], n[r[2]]]);
      break;
    case "mtvi2":
      o = er(a, [n[r[0]], n[r[1]], n[r[2]]]);
      break;
    case "rtvi-core":
      o = sr(a, [n[r[0]], n[r[1]], n[r[2]]]);
      break;
    case "evi":
      o = nr(a, [n[r[0]], n[r[1]], n[r[2]]]);
      break;
    case "wndwi":
      o = rr(a, [n[r[0]], n[r[1]], n[r[2]]], r[3] ? r[3] + 1 : 0.5);
      break;
    case "bai":
      o = or(a, n[r[0]], n[r[1]]);
      break;
    case "custom":
      o = En(a, n, e);
      break;
    default:
      return i;
  }
  const u = a != null ? new Uint8Array(a.length) : null;
  a != null && u != null && u.set(a);
  const c = new x({ width: i.width, height: i.height, pixelType: "f32", pixels: o, mask: u });
  return c.updateStatistics(), c;
}
function Ln(i, t, e, s) {
  const { mask: r, pixels: n, width: a, height: o } = i, u = n[e], c = n[t], p = c.length, m = s ? new Uint8Array(p) : new Float32Array(p), f = s ? 100 : 1, d = s ? 100.5 : 0;
  for (let w = 0; w < p; w++) if (r == null || r[w]) {
    const g = u[w], v = c[w], b = g + v;
    b && (m[w] = (g - v) / b * f + d);
  }
  const y = new x({ width: a, height: o, mask: r, pixelType: s ? "u8" : "f32", pixels: [m] });
  return y.updateStatistics(), y;
}
function E(i) {
  const t = new Float32Array(9);
  return t[3 * i[0]] = 1, t[3 * i[1] + 1] = 1, t[3 * i[2] + 2] = 1, t;
}
function Ke(i, t, e) {
  const s = e.length, r = new Float32Array(s);
  for (let n = 0; n < s; n++) if (i == null || i[n]) {
    const a = t[n], o = e[n], u = a + o;
    u && (r[n] = (a - o) / u);
  }
  return [r];
}
function Wn(i, t, e) {
  const s = e.length, r = new Float32Array(s);
  for (let n = 0; n < s; n++) if (i == null || i[n]) {
    const a = t[n], o = e[n];
    o && (r[n] = a / o);
  }
  return [r];
}
function qn(i, t, e) {
  const s = t.length, r = new Float32Array(s);
  for (let n = 0; n < s; n++) if (i == null || i[n]) {
    const a = t[n], o = e[n];
    o && (r[n] = a / o - 1);
  }
  return [r];
}
function Hn(i, t, e, s) {
  const r = e.length, n = new Float32Array(r);
  for (let a = 0; a < r; a++) if (i == null || i[a]) {
    const o = e[a], u = t[a], c = u + o + s;
    c && (n[a] = (u - o) / c * (1 + s));
  }
  return [n];
}
function Xn(i, t, e, s, r, n) {
  const a = e.length, o = new Float32Array(a), u = -r * s + n * (1 + s * s);
  for (let c = 0; c < a; c++) if (i == null || i[c]) {
    const p = e[c], m = t[c], f = r * m + p + u;
    f && (o[c] = s * (m - s * p - r) / f);
  }
  return [o];
}
function Jn(i, t, e) {
  const s = e.length, r = new Float32Array(s);
  for (let n = 0; n < s; n++) if (i == null || i[n]) {
    const a = e[n], o = t[n], u = 2 * o + 1;
    r[n] = 0.5 * (u - Math.sqrt(u * u - 8 * (o - a)));
  }
  return [r];
}
function Kn(i, t, e) {
  const s = e.length, r = new Float32Array(s);
  for (let n = 0; n < s; n++) if (i == null || i[n]) {
    const a = e[n], o = t[n];
    if (a !== 1 && o + a + 0.5 !== 0) {
      const u = (2 * (o * o - a * a) + 1.5 * o + 0.5 * a) / (o + a + 0.5);
      r[n] = u * (1 - 0.25 * u) - (a - 0.125) / (1 - a);
    }
  }
  return [r];
}
function Yn(i, t, e, s, r) {
  const n = e.length, a = new Float32Array(n), o = 1 / Math.sqrt(1 + s * s);
  for (let u = 0; u < n; u++) if (i == null || i[u]) {
    const c = e[u], p = t[u];
    a[u] = (p - s * c - r) * o;
  }
  return [a];
}
function Zn(i, t) {
  const [e, s, r, n, a, o] = t, u = e.length, c = new Float32Array(u);
  for (let p = 0; p < u; p++) (i == null || i[p]) && (c[p] = -0.2848 * e[p] - 0.2435 * s[p] - 0.5436 * r[p] + 0.7243 * n[p] + 0.084 * a[p] - 0.18 * o[p]);
  return [c];
}
function Qn(i, t) {
  const [e, s, r, n, a] = t, o = e.length, u = new Float32Array(o), c = new Float32Array(o), p = new Float32Array(o);
  for (let m = 0; m < o; m++) (i == null || i[m]) && (u[m] = a[m] ? n[m] / a[m] * 100 : 0, c[m] = e[m] ? n[m] / e[m] * 100 : 0, p[m] = r[m] ? s[m] / r[m] * (n[m] / r[m]) * 100 : 0);
  return [u, c, p];
}
function tr(i, t) {
  const [e, s, r] = t, n = e.length, a = new Float32Array(n);
  for (let o = 0; o < n; o++) if (i == null || i[o]) for (o = 0; o < n; o++) {
    const u = e[o], c = s[o], p = c + u - r[o];
    p && (a[o] = (c - u) / p);
  }
  return [a];
}
function er(i, t) {
  const [e, s, r] = t, n = e.length, a = new Float32Array(n);
  for (let o = 0; o < n; o++) if (i == null || i[o]) for (o = 0; o < n; o++) {
    const u = e[o], c = s[o], p = r[o], m = Math.sqrt((2 * u + 1) ** 2 - (6 * u - 5 * Math.sqrt(c)) - 0.5);
    if (m) {
      const f = 1.5 * (1.2 * (u - p) - 2.5 * (c - p));
      a[o] = f / m;
    }
  }
  return [a];
}
function sr(i, t) {
  const [e, s, r] = t, n = e.length, a = new Float32Array(n);
  for (let o = 0; o < n; o++) if (i == null || i[o]) for (o = 0; o < n; o++) {
    const u = e[o], c = s[o], p = r[o];
    a[o] = 100 * (u - c) - 10 * (u - p);
  }
  return [a];
}
function nr(i, t) {
  const [e, s, r] = t, n = e.length, a = new Float32Array(n);
  for (let o = 0; o < n; o++) if (i == null || i[o]) for (o = 0; o < n; o++) {
    const u = e[o], c = s[o], p = u + 6 * c - 7.5 * r[o] + 1;
    p && (a[o] = 2.5 * (u - c) / p);
  }
  return [a];
}
function rr(i, t, e = 0.5) {
  const [s, r, n] = t, a = r.length, o = new Float32Array(a);
  for (let u = 0; u < a; u++) if (i == null || i[u]) for (u = 0; u < a; u++) {
    const c = s[u], p = r[u], m = n[u], f = c + e * p + (1 - e) * m;
    f && (o[u] = (c - e * p - (1 - e) * m) / f);
  }
  return [o];
}
function or(i, t, e) {
  const s = e.length, r = new Float32Array(s);
  for (let n = 0; n < s; n++) if (i == null || i[n]) for (n = 0; n < s; n++) {
    const a = (0.1 - t[n]) ** 2 + (0.06 - e[n]) ** 2;
    a && (r[n] = 1 / a);
  }
  return [r];
}
var te;
let Mt = te = class extends D {
  constructor() {
    super(...arguments), this.method = "custom";
  }
  clone() {
    return new te({ method: this.method, bandIndexes: this.bandIndexes, raster: L(this.raster) });
  }
};
l([h({ json: { type: String, write: !0 } })], Mt.prototype, "bandIndexes", void 0), l([Y(Vn)], Mt.prototype, "method", void 0), Mt = te = l([A("esri.layers.support.rasterFunctions.BandArithmeticFunctionArguments")], Mt);
const ir = Mt, ar = /* @__PURE__ */ new Set(["vari", "mtvi2", "rtvi-core", "evi"]);
let At = class extends G {
  constructor() {
    super(...arguments), this.functionName = "BandArithmetic", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0];
    if (t.bandCount < 2) return { success: !1, supportsGPU: !1, error: "band-arithmetic-function: source raster has insufficient amount of raster bands" };
    const e = t.clone();
    return e.pixelType = this.outputPixelType, e.bandCount = this.functionArguments.method === "sultan" ? 3 : 1, this._removeStatsHistColormapVAT(e), e.keyProperties = { ...e.keyProperties, BandProperties: void 0 }, this.rasterInfo = e, { success: !0, supportsGPU: !["custom", "gvitm", "sultan"].includes(this.functionArguments.method) };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return e;
    const { method: s, bandIndexes: r } = this.functionArguments, n = r.split(" ").map((a) => parseFloat(a));
    return Un(e, { method: s, bandIndexes: n, equation: r });
  }
  _getWebGLParameters() {
    const t = this.functionArguments.bandIndexes.split(" ").map((o) => parseFloat(o) - 1);
    t.length === 2 && t.push(0);
    const e = this.isInputBandIdsSwizzled ? [0, 1, 2] : t;
    let s, r;
    const n = new Float32Array(3), { method: a } = this.functionArguments;
    switch (a) {
      case "gndvi":
      case "nbr":
      case "ndbi":
      case "ndvi":
      case "ndvi-re":
      case "ndsi":
      case "ndmi":
      case "mndwi":
        s = E([e[0], e[1], 0]), r = "ndxi";
        break;
      case "ndwi":
        s = E([e[1], e[0], 0]), r = "ndxi";
        break;
      case "sr":
      case "sr-re":
      case "iron-oxide":
      case "ferrous-minerals":
      case "clay-minerals":
        s = E([e[0], e[1], 0]), r = "sr";
        break;
      case "ci-g":
      case "ci-re":
        s = E([e[0], e[1], 0]), r = "ci";
        break;
      case "savi":
        s = E([e[0], e[1], 0]), r = "savi", n[0] = t[2] + 1;
        break;
      case "tsavi":
        s = E([e[0], e[1], 0]), r = "tsavi", n[0] = t[2] + 1, n[1] = t[3] + 1, n[2] = t[4] + 1;
        break;
      case "msavi":
        s = E([e[0], e[1], 0]), r = "msavi";
        break;
      case "gemi":
        s = E([e[0], e[1], 0]), r = "gemi";
        break;
      case "pvi":
        s = E([e[0], e[1], 0]), r = "tsavi", n[0] = t[2] + 1, n[1] = t[3] + 1;
        break;
      case "vari":
        s = E([e[0], e[1], e[2]]), r = "vari";
        break;
      case "mtvi2":
        s = E([e[0], e[1], e[2]]), r = "mtvi";
        break;
      case "rtvi-core":
        s = E([e[0], e[1], e[2]]), r = "rtvicore";
        break;
      case "evi":
        s = E([e[0], e[1], e[2]]), r = "evi";
        break;
      case "wndwi":
        s = E([e[0], e[1], 0]), r = "wndwi", n[0] = t[3] ? t[3] + 1 : 0.5;
        break;
      case "bai":
        s = E([e[1], e[0], 0]), r = "bai";
        break;
      default:
        s = E([0, 1, 2]), r = "custom";
    }
    return { bandIndexMat3: s, indexType: r, adjustments: n };
  }
  _getInputBandIds(t) {
    if (this.functionArguments.method === "custom") return t;
    const e = this.functionArguments.bandIndexes.split(" ").map((o) => parseFloat(o) - 1), s = t.length, r = e.map((o) => o >= s ? s - 1 : o), n = ar.has(this.functionArguments.method) ? 3 : 2, a = r.slice(0, n).map((o) => t[o]);
    return a.length === 2 && a.push(0), a;
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], At.prototype, "functionName", void 0), l([h({ type: ir, json: { write: !0, name: "rasterFunctionArguments" } })], At.prototype, "functionArguments", void 0), l([h()], At.prototype, "rasterArgumentNames", void 0), At = l([A("esri.layers.support.rasterFunctions.BandArithmeticFunction")], At);
const ur = At;
var ee;
const Ye = new jt({ 1: "outside", 2: "inside" }, { useNumericKeys: !0 });
let Ot = ee = class extends D {
  constructor() {
    super(...arguments), this.clippingType = "outside";
  }
  clone() {
    return new ee({ clippingGeometry: this.clippingGeometry.clone(), clippingType: this.clippingType });
  }
};
l([h({ types: As, json: { read: Ts, write: !0 } })], Ot.prototype, "clippingGeometry", void 0), l([h({ json: { read: Ye.read, write: Ye.write } })], Ot.prototype, "clippingType", void 0), Ot = ee = l([A("esri.layers.support.rasterFunctions.ClipFunctionArguments")], Ot);
const lr = Ot;
let ot = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Clip", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone();
    return this.outputPixelType = this._getOutputPixelType(t.pixelType), t.pixelType = this.outputPixelType, this.rasterInfo = t, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    return t.pixelBlocks?.[0];
  }
  _getWebGLParameters() {
    const { clippingGeometry: t, clippingType: e } = this.functionArguments;
    return { clippingGeometry: t.toJSON(), clippingType: e };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], ot.prototype, "functionName", void 0), l([h({ type: lr, json: { write: !0, name: "rasterFunctionArguments" } })], ot.prototype, "functionArguments", void 0), l([h()], ot.prototype, "rasterArgumentNames", void 0), l([h()], ot.prototype, "isNoopProcess", void 0), ot = l([A("esri.layers.support.rasterFunctions.ClipFunction")], ot);
const cr = ot;
var se;
let X = se = class extends D {
  castColormapName(i) {
    if (!i) return null;
    const t = i.toLowerCase();
    return $s.includes(t) ? t : null;
  }
  readColorRamp(i) {
    return Fs(i);
  }
  readColorRampName(i, t) {
    if (!i) return null;
    const e = Vt.jsonValues.find((s) => s.toLowerCase() === i.toLowerCase());
    return e ? Vt.fromJSON(e) : null;
  }
  clone() {
    return new se({ colormap: L(this.colormap), colormapName: this.colormapName, colorRamp: this.colorRamp?.clone(), colorRampName: this.colorRampName });
  }
};
l([h({ type: [[Number]], json: { write: !0 } })], X.prototype, "colormap", void 0), l([h({ type: String, json: { write: !0 } })], X.prototype, "colormapName", void 0), l([rs("colormapName")], X.prototype, "castColormapName", null), l([h({ types: Ps, json: { write: !0 } })], X.prototype, "colorRamp", void 0), l([Ct("colorRamp")], X.prototype, "readColorRamp", null), l([h({ type: Vt.apiValues, json: { type: Vt.jsonValues, write: Vt.write } })], X.prototype, "colorRampName", void 0), l([Ct("colorRampName")], X.prototype, "readColorRampName", null), X = se = l([A("esri.layers.support.rasterFunctions.ColormapFunctionArguments")], X);
const pr = X, hr = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [112, 75, 3], [113, 76, 3], [114, 77, 3], [115, 77, 3], [116, 78, 3], [117, 79, 3], [118, 79, 3], [119, 80, 3], [121, 81, 4], [122, 82, 4], [123, 82, 4], [124, 83, 4], [125, 84, 4], [126, 84, 4], [127, 85, 4], [128, 86, 4], [129, 86, 4], [130, 87, 4], [131, 88, 4], [132, 89, 4], [133, 89, 4], [134, 90, 4], [135, 91, 4], [136, 91, 4], [137, 92, 4], [138, 93, 4], [139, 94, 4], [140, 94, 4], [142, 95, 5], [143, 96, 5], [144, 96, 5], [145, 97, 5], [146, 98, 5], [147, 99, 5], [148, 99, 5], [149, 100, 5], [150, 101, 5], [151, 101, 5], [152, 102, 5], [153, 103, 5], [154, 104, 5], [155, 104, 5], [156, 105, 5], [157, 106, 5], [158, 106, 5], [159, 107, 5], [160, 108, 5], [161, 108, 5], [162, 109, 5], [164, 110, 6], [165, 111, 6], [166, 111, 6], [167, 112, 6], [168, 113, 6], [169, 113, 6], [170, 114, 6], [171, 115, 6], [172, 116, 6], [173, 116, 6], [174, 117, 6], [245, 0, 0], [245, 5, 0], [245, 10, 0], [246, 15, 0], [246, 20, 0], [246, 25, 0], [246, 30, 0], [247, 35, 0], [247, 40, 0], [247, 45, 0], [247, 50, 0], [247, 55, 0], [248, 60, 0], [248, 65, 0], [248, 70, 0], [248, 75, 0], [249, 81, 0], [249, 86, 0], [249, 91, 0], [249, 96, 0], [250, 101, 0], [250, 106, 0], [250, 111, 0], [250, 116, 0], [250, 121, 0], [251, 126, 0], [251, 131, 0], [251, 136, 0], [251, 141, 0], [252, 146, 0], [252, 151, 0], [252, 156, 0], [252, 156, 0], [251, 159, 0], [250, 162, 0], [249, 165, 0], [248, 168, 0], [247, 171, 0], [246, 174, 0], [245, 177, 0], [245, 179, 0], [244, 182, 0], [243, 185, 0], [242, 188, 0], [241, 191, 0], [240, 194, 0], [239, 197, 0], [238, 200, 0], [237, 203, 0], [236, 206, 0], [235, 209, 0], [234, 212, 0], [233, 215, 0], [232, 218, 0], [231, 221, 0], [230, 224, 0], [230, 226, 0], [229, 229, 0], [228, 232, 0], [227, 235, 0], [226, 238, 0], [225, 241, 0], [224, 244, 0], [223, 247, 0], [165, 247, 0], [163, 244, 0], [161, 240, 0], [158, 237, 0], [156, 233, 1], [154, 230, 1], [152, 227, 1], [149, 223, 1], [147, 220, 1], [145, 216, 1], [143, 213, 1], [140, 210, 2], [138, 206, 2], [136, 203, 2], [134, 200, 2], [132, 196, 2], [129, 193, 2], [127, 189, 2], [125, 186, 3], [123, 183, 3], [120, 179, 3], [118, 176, 3], [116, 172, 3], [114, 169, 3], [111, 166, 3], [109, 162, 4], [107, 159, 4], [105, 155, 4], [103, 152, 4], [100, 149, 4], [98, 145, 4], [96, 142, 4], [94, 138, 5], [91, 135, 5], [89, 132, 5], [87, 128, 5], [85, 125, 5], [82, 121, 5], [80, 118, 5], [78, 115, 6], [76, 111, 6], [73, 108, 6], [71, 105, 6], [69, 101, 6], [67, 98, 6], [65, 94, 6], [62, 91, 7], [60, 88, 7], [58, 84, 7], [56, 81, 7], [53, 77, 7], [51, 74, 7], [49, 71, 7], [47, 67, 8], [44, 64, 8], [42, 60, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8], [40, 57, 8]], mr = [[36, 0, 255], [36, 0, 255], [36, 0, 255], [36, 0, 255], [245, 20, 0], [245, 24, 0], [245, 29, 0], [245, 31, 0], [247, 33, 0], [247, 33, 0], [247, 37, 0], [247, 41, 0], [247, 41, 0], [247, 41, 0], [247, 45, 0], [247, 45, 0], [247, 47, 0], [247, 49, 0], [247, 49, 0], [247, 54, 0], [247, 54, 0], [247, 56, 0], [247, 58, 0], [247, 58, 0], [250, 62, 0], [250, 62, 0], [250, 62, 0], [250, 67, 0], [250, 67, 0], [250, 67, 0], [250, 69, 0], [250, 71, 0], [250, 71, 0], [250, 75, 0], [250, 75, 0], [250, 78, 0], [250, 79, 0], [250, 79, 0], [250, 79, 0], [250, 81, 0], [250, 83, 0], [250, 83, 0], [250, 87, 0], [250, 87, 0], [250, 90, 0], [250, 92, 0], [252, 93, 0], [252, 93, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 97, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 101, 0], [252, 105, 0], [252, 105, 0], [252, 107, 0], [252, 109, 0], [252, 109, 0], [252, 113, 13], [255, 118, 20], [255, 119, 23], [255, 121, 25], [255, 126, 33], [255, 132, 38], [255, 133, 40], [255, 135, 43], [255, 141, 48], [255, 144, 54], [255, 150, 59], [255, 152, 61], [255, 153, 64], [255, 159, 69], [255, 163, 77], [255, 165, 79], [255, 168, 82], [255, 174, 87], [255, 176, 92], [255, 181, 97], [255, 183, 99], [255, 186, 102], [255, 191, 107], [255, 197, 115], [255, 201, 120], [255, 203, 123], [255, 205, 125], [255, 209, 130], [255, 214, 138], [255, 216, 141], [255, 218, 143], [255, 224, 150], [255, 228, 156], [255, 234, 163], [255, 236, 165], [255, 238, 168], [255, 243, 173], [255, 248, 181], [255, 252, 186], [253, 252, 186], [250, 252, 187], [244, 250, 180], [238, 247, 176], [234, 246, 173], [231, 245, 169], [223, 240, 163], [217, 237, 157], [211, 235, 150], [205, 233, 146], [200, 230, 142], [195, 227, 136], [189, 224, 132], [184, 222, 126], [180, 220, 123], [174, 217, 119], [169, 214, 114], [163, 212, 108], [160, 210, 105], [154, 207, 101], [148, 204, 96], [143, 201, 93], [138, 199, 88], [134, 197, 84], [130, 194, 81], [126, 191, 77], [117, 189, 70], [115, 186, 68], [112, 184, 64], [106, 181, 60], [100, 179, 55], [94, 176, 49], [92, 174, 47], [90, 173, 45], [81, 168, 37], [75, 166, 33], [71, 163, 28], [66, 160, 24], [62, 158, 21], [56, 156, 14], [51, 153, 0], [51, 153, 0], [51, 153, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [50, 150, 0], [49, 148, 0], [49, 148, 0], [49, 148, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 145, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [48, 143, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [47, 140, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [46, 138, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [45, 135, 0], [44, 133, 0], [44, 133, 0], [44, 133, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [43, 130, 0], [42, 128, 0], [42, 128, 0], [42, 128, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [42, 125, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [41, 122, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [40, 120, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [39, 117, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0], [38, 115, 0]];
function Re(i, t) {
  const e = [], s = [];
  for (let n = 0; n < i.length - 1; n++) e.push({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: i[n].slice(1), toColor: i[n + 1].slice(1) }), s.push(i[n + 1][0] - i[n][0]);
  const r = i[i.length - 1][0];
  return os({ type: "multipart", colorRamps: e }, { numColors: r, weights: t = t ?? s });
}
function fr() {
  return Re([[0, 0, 191, 191], [51, 0, 0, 255], [102, 255, 0, 255], [153, 255, 0, 127], [204, 191, 63, 127], [256, 20, 20, 20]]);
}
function dr() {
  const i = Re([[0, 255, 255, 255], [70, 0, 255, 0], [80, 205, 173, 193], [100, 150, 150, 150], [110, 120, 51, 100], [130, 120, 100, 200], [140, 28, 3, 144], [160, 6, 0, 55], [180, 10, 25, 30], [201, 6, 7, 27]]);
  for (let t = i.length; t < 256; t++) i.push([6, 27, 7]);
  return i;
}
function gr() {
  return os({ type: "algorithmic", algorithm: "esriHSVAlgorithm", fromColor: [0, 0, 0], toColor: [255, 255, 255] });
}
function yr() {
  const i = [];
  for (let t = 0; t < 256; t++) {
    const e = [];
    for (let s = 0; s < 3; s++) e.push(Math.round(255 * Math.random()));
    i.push(e);
  }
  return i;
}
function xr() {
  return Re([[0, 38, 41, 54], [69, 79, 82, 90], [131, 156, 156, 156], [256, 253, 253, 241]], [0.268, 0.238, 0.495]);
}
function vr(i) {
  let t;
  switch (i) {
    case "elevation":
      t = fr();
      break;
    case "gray":
      t = gr();
      break;
    case "hillshade":
      t = xr();
      break;
    case "ndvi":
      t = hr;
      break;
    case "ndvi2":
      t = dr();
      break;
    case "ndvi3":
      t = mr;
      break;
    case "random":
      t = yr();
  }
  return t ? (t = t.map((e, s) => [s, ...e]), t) : null;
}
let Z = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Colormap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    if (t.bandCount > 1) return { success: !1, supportsGPU: !1, error: "colormap-function: source data must be single band" };
    let { colormap: e, colormapName: s, colorRamp: r, colorRampName: n } = this.functionArguments;
    if (!e?.length) if (r) e = _e(r, { interpolateAlpha: !0 });
    else if (n) {
      const u = Ns(n);
      u && (e = _e(u));
    } else s && (e = vr(s));
    if (!e?.length) return { success: !1, supportsGPU: !1, error: "colormap-function: missing colormap argument" };
    const a = this._getOutputPixelType(t.pixelType);
    this.outputPixelType = a.startsWith("f") ? "s32" : a;
    const o = t.clone();
    return o.pixelType = this.outputPixelType, o.colormap = e, o.bandCount = 1, this.rasterInfo = o, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    let e = t.pixelBlocks?.[0];
    return !e || nt(e.pixelType) || (e = e.clone(), e.clamp(this.outputPixelType)), e;
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], Z.prototype, "functionName", void 0), l([h({ type: pr, json: { write: !0, name: "rasterFunctionArguments" } })], Z.prototype, "functionArguments", void 0), l([h()], Z.prototype, "rasterArgumentNames", void 0), l([h()], Z.prototype, "isNoopProcess", void 0), l([h({ json: { write: !0 } })], Z.prototype, "indexedColormap", void 0), Z = l([A("esri.layers.support.rasterFunctions.ColormapFunction")], Z);
const wr = Z;
var ne;
let Dt = ne = class extends D {
  constructor() {
    super(...arguments), this.rasters = [];
  }
  writeRasters(i, t) {
    t.rasters = i.map((e) => typeof e == "number" || typeof e == "string" ? e : e.toJSON());
  }
  clone() {
    return new ne({ rasters: L(this.rasters) });
  }
};
l([h({ json: { write: !0 } })], Dt.prototype, "rasters", void 0), l([_t("rasters")], Dt.prototype, "writeRasters", null), Dt = ne = l([A("esri.layers.support.rasterFunctions.CompositeBandFunctionArguments")], Dt);
const br = Dt;
let Tt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "CompositeBand", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0];
    this.outputPixelType = this._getOutputPixelType(e.pixelType);
    const s = e.clone();
    if (s.attributeTable = null, s.colormap = null, s.pixelType = this.outputPixelType, s.bandCount = t.map(({ bandCount: n }) => n).reduce((n, a) => n + a), t.every(({ statistics: n }) => n != null && n.length)) {
      const n = [];
      t.forEach(({ statistics: a }) => a != null && n.push(...a)), s.statistics = n;
    }
    if (t.every(({ histograms: n }) => n != null && n.length)) {
      const n = [];
      t.forEach(({ histograms: a }) => a != null && n.push(...a)), s.histograms = n;
    }
    s.bandCount > 1 && (s.colormap = null, s.attributeTable = null);
    const r = t.every((n) => n.keyProperties.BandProperties?.length) ? t.flatMap((n) => n.keyProperties.BandProperties) : void 0;
    return s.keyProperties = { ...s.keyProperties, BandProperties: r }, this.rasterInfo = s, { success: !0, supportsGPU: s.bandCount <= 3 };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e ? e?.[0] == null ? null : Is(e) : null;
  }
  _getWebGLParameters() {
    return { bandCount: this.rasterInfo.bandCount };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], Tt.prototype, "functionName", void 0), l([h({ type: br, json: { write: !0, name: "rasterFunctionArguments" } })], Tt.prototype, "functionArguments", void 0), l([h()], Tt.prototype, "rasterArgumentNames", void 0), Tt = l([A("esri.layers.support.rasterFunctions.CompositeBandFunction")], Tt);
const Ar = Tt;
var re;
let Gt = re = class extends D {
  constructor() {
    super(...arguments), this.contrastOffset = 0, this.brightnessOffset = 0;
  }
  clone() {
    return new re({ contrastOffset: this.contrastOffset, brightnessOffset: this.brightnessOffset, raster: this.raster });
  }
};
l([h({ json: { write: !0 } })], Gt.prototype, "contrastOffset", void 0), l([h({ json: { write: !0 } })], Gt.prototype, "brightnessOffset", void 0), Gt = re = l([A("esri.layers.support.rasterFunctions.ContrastBrightnessFunctionArguments")], Gt);
const Tr = Gt;
let it = class extends G {
  constructor() {
    super(...arguments), this.functionName = "ContrastBrightness", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0];
    if (e.pixelType !== "u8") return { success: !1, supportsGPU: !1, error: "Only unsigned 8 bit raster is supported by ContrastBrightness function." };
    this.outputPixelType = this._getOutputPixelType("u8");
    const s = e.clone();
    this._removeStatsHistColormapVAT(s), this.rasterInfo = s;
    const { contrastOffset: r, brightnessOffset: n } = this.functionArguments;
    return this.lookup = Rs(r, n), { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    return e == null ? null : Fe(e, { lut: e.pixels.map(() => this.lookup), offset: 0, outputPixelType: "u8" });
  }
  _getWebGLParameters() {
    const { contrastOffset: t, brightnessOffset: e } = this.functionArguments;
    return { contrastOffset: t, brightnessOffset: e };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], it.prototype, "functionName", void 0), l([h({ type: Tr, json: { write: !0, name: "rasterFunctionArguments" } })], it.prototype, "functionArguments", void 0), l([h()], it.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], it.prototype, "lookup", void 0), it = l([A("esri.layers.support.rasterFunctions.ContrastBrightnessFunction")], it);
const Pr = it;
function ke(i, t, e, s, r) {
  const n = Math.floor(s / 2);
  for (let o = 0; o < n; o++) for (let u = 0; u < t; u++) i[o * t + u] = i[(r - 1 - o) * t + u], i[(e - 1 - o) * t + u] = i[(e - r + o) * t + u];
  const a = Math.floor(r / 2);
  for (let o = 0; o < e; o++) {
    const u = o * t;
    for (let c = 0; c < a; c++) i[u + c] = i[u + r - 1 - c], i[u + t - c - 1] = i[u + t + c - r];
  }
}
const B = /* @__PURE__ */ new Map();
function $r(i) {
  const t = Math.sqrt(i.length), e = i.slice(0, t), s = [1];
  for (let r = 1; r < t; r++) {
    let n = null;
    for (let a = 0; a < t; a++) {
      const o = i[a + r * t], u = i[a];
      if (n == null) if (u === 0) {
        if (o) return { separable: !1, row: null, col: null };
      } else n = o / u;
      else if (o / u !== n) return { separable: !1, row: null, col: null };
    }
    if (n == null) return { separable: !1, row: null, col: null };
    s.push(n);
  }
  return { separable: !0, row: e, col: s };
}
function Ze(i, t, e, s, r, n, a) {
  const o = new Float32Array(t * e), u = n.length, c = a ? 0 : s, p = a ? s : 0, m = a ? 1 : t;
  for (let f = c; f < e - c; f++) {
    const d = f * t;
    for (let y = p; y < t - p; y++) {
      if (r && !r[d + y]) continue;
      let w = 0;
      for (let g = 0; g < u; g++) w += i[d + y + (g - s) * m] * n[g];
      o[d + y] = w;
    }
  }
  return o;
}
function Fr(i, t, e, s, r, n, a) {
  const o = new Float32Array(t * e), u = Math.floor(s / 2), c = Math.floor(r / 2);
  for (let p = u; p < e - u; p++) {
    const m = p * t;
    for (let f = c; f < t - c; f++) {
      if (n && !n[m + f]) continue;
      let d = 0;
      for (let y = 0; y < s; y++) for (let w = 0; w < r; w++) d += i[m + f + (y - u) * t + w - c] * a[y * r + w];
      o[m + f] = d;
    }
  }
  return o;
}
function Nr(i, t, e = !0) {
  const { pixels: s, width: r, height: n, pixelType: a, mask: o } = i, u = s.length, c = [], { kernel: p, rows: m, cols: f } = t;
  for (let d = 0; d < u; d++) {
    const y = Fr(s[d], r, n, m, f, o, p);
    e && ke(y, r, n, m, f), c.push(y);
  }
  return new x({ width: r, height: n, pixelType: a, pixels: c, mask: o });
}
function Ir(i, t, e, s = !0) {
  const { pixels: r, width: n, height: a, pixelType: o, mask: u } = i, c = r.length, p = [], m = t.length, f = e.length, d = Math.floor(m / 2), y = Math.floor(f / 2);
  for (let w = 0; w < c; w++) {
    let g = Ze(r[w], n, a, d, u, t, !0);
    g = Ze(g, n, a, y, u, e, !1), s && ke(g, n, a, m, f), p.push(g);
  }
  return new x({ width: n, height: a, pixelType: o, pixels: p, mask: u });
}
function Rr(i, t) {
  const e = $r(t.kernel), s = t.mirrorEdges !== !1, r = e.separable ? Ir(i, e.row, e.col, s) : Nr(i, t, s), { outputPixelType: n } = t;
  return n && r.clamp(n), r;
}
B.set($.none, [0, 0, 0, 0, 1, 0, 0, 0, 0]), B.set($.lineDetectionHorizontal, [-1, -1, -1, 2, 2, 2, -1, -1, -1]), B.set($.lineDetectionVertical, [-1, 2, -1, -1, 2, -1, -1, 2, -1]), B.set($.lineDetectionLeftDiagonal, [2, -1, -1, -1, 2, -1, -1, -1, 2]), B.set($.lineDetectionRightDiagonal, [-1, -1, 2, -1, 2, -1, 2, -1, -1]), B.set($.gradientNorth, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), B.set($.gradientWest, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), B.set($.gradientEast, [1, 0, -1, 2, 0, -2, 1, 0, -1]), B.set($.gradientSouth, [1, 2, 1, 0, 0, 0, -1, -2, -1]), B.set($.gradientNorthEast, [0, -1, -2, 1, 0, -1, 2, 1, 0]), B.set($.gradientNorthWest, [-2, -1, 0, -1, 0, 1, 0, 1, 2]), B.set($.smoothArithmeticMean, [0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111, 0.111111111111]), B.set($.smoothing3x3, [0.0625, 0.125, 0.0625, 0.125, 0.25, 0.125, 0.0625, 0.125, 0.0625]), B.set($.smoothing5x5, [1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 4, 12, 4, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1]), B.set($.sharpening3x3, [-1, -1, -1, -1, 9, -1, -1, -1, -1]), B.set($.sharpening5x5, [-1, -3, -4, -3, -1, -3, 0, 6, 0, -3, -4, 6, 21, 6, -4, -3, 0, 6, 0, -3, -1, -3, -4, -3, -1]), B.set($.laplacian3x3, [0, -1, 0, -1, 4, -1, 0, -1, 0]), B.set($.laplacian5x5, [0, 0, -1, 0, 0, 0, -1, -2, -1, 0, -1, -2, 17, -2, -1, 0, -1, -2, -1, 0, 0, 0, -1, 0, 0]), B.set($.sobelHorizontal, [-1, -2, -1, 0, 0, 0, 1, 2, 1]), B.set($.sobelVertical, [-1, 0, 1, -2, 0, 2, -1, 0, 1]), B.set($.sharpen, [0, -0.25, 0, -0.25, 2, -0.25, 0, -0.25, 0]), B.set($.sharpen2, [-0.25, -0.25, -0.25, -0.25, 3, -0.25, -0.25, -0.25, -0.25]), B.set($.pointSpread, [-0.627, 0.352, -0.627, 0.352, 2.923, 0.352, -0.627, 0.352, -0.627]);
var oe;
let at = oe = class extends D {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0];
  }
  set convolutionType(i) {
    this._set("convolutionType", i);
    const t = B.get(i);
    if (!t || i === $.userDefined || i === $.none) return;
    const e = Math.sqrt(t.length);
    this._set("kernel", t), this._set("cols", e), this._set("rows", e);
  }
  clone() {
    return new oe({ cols: this.cols, rows: this.rows, kernel: [...this.kernel], convolutionType: this.convolutionType, raster: L(this.raster) });
  }
};
l([h({ json: { type: Number, write: !0 } })], at.prototype, "rows", void 0), l([h({ json: { type: Number, write: !0 } })], at.prototype, "cols", void 0), l([h({ json: { name: "type", type: Number, write: !0 } })], at.prototype, "convolutionType", null), l([h({ json: { type: [Number], write: !0 } })], at.prototype, "kernel", void 0), at = oe = l([A("esri.layers.support.rasterFunctions.ConvolutionFunctionArguments")], at);
const kr = at, Qe = 25;
let ut = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Convolution", this.rasterArgumentNames = ["raster"];
  }
  get _normalizedKernel() {
    const { kernel: t, convolutionType: e } = this.functionArguments, s = t.reduce((r, n) => r + n);
    return e === -1 || s === 0 || s === 1 ? t : t.map((r) => r / s);
  }
  _bindSourceRasters() {
    const { convolutionType: t, rows: e, cols: s, kernel: r } = this.functionArguments;
    if (!Object.values($).includes(t)) return { success: !1, supportsGPU: !1, error: `convolution-function: the specified kernel type is not supported ${t}` };
    if (t !== $.none && e * s !== r.length) return { success: !1, supportsGPU: !1, error: "convolution-function: the specified rows and cols do not match the length of the kernel" };
    const n = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(n.pixelType);
    const a = n.clone();
    a.pixelType = this.outputPixelType;
    const o = [$.none, $.sharpen, $.sharpen2, $.sharpening3x3, $.sharpening5x5];
    return (t === -1 || this.outputPixelType !== "u8" && !o.includes(t)) && (a.statistics = null, a.histograms = null), a.colormap = null, a.attributeTable = null, this.rasterInfo = a, { success: !0, supportsGPU: r.length <= Qe };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null || this.functionArguments.convolutionType === $.none) return e;
    const { rows: s, cols: r } = this.functionArguments, { _normalizedKernel: n } = this;
    return Rr(e, { kernel: n, rows: s, cols: r, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const t = new Float32Array(Qe);
    return t.set(this._normalizedKernel), { kernelRows: this.functionArguments.rows, kernelCols: this.functionArguments.cols, kernel: t, clampRange: vt(this.outputPixelType) };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], ut.prototype, "functionName", void 0), l([h({ type: kr, json: { write: !0, name: "rasterFunctionArguments" } })], ut.prototype, "functionArguments", void 0), l([h()], ut.prototype, "rasterArgumentNames", void 0), l([h()], ut.prototype, "_normalizedKernel", null), ut = l([A("esri.layers.support.rasterFunctions.ConvolutionFunction")], ut);
const Cr = ut;
var ie;
const ms = new jt({ 0: "standard", 1: "platform", 2: "profile" }, { useNumericKeys: !0 });
let Pt = ie = class extends D {
  constructor() {
    super(...arguments), this.curvatureType = "standard", this.zFactor = 1;
  }
  readCurvatureType(i, t) {
    return ms.fromJSON(t.type ?? t.curvatureType ?? 0);
  }
  clone() {
    return new ie({ curvatureType: this.curvatureType, zFactor: this.zFactor, raster: this.raster });
  }
};
l([h({ json: { write: { target: "type" } } }), Y(ms)], Pt.prototype, "curvatureType", void 0), l([Ct("curvatureType", ["type", "curvatureType"])], Pt.prototype, "readCurvatureType", null), l([h({ type: Number, json: { write: !0 } })], Pt.prototype, "zFactor", void 0), Pt = ie = l([A("esri.layers.support.rasterFunctions.CurvatureFunctionArguments")], Pt);
const _r = Pt;
let lt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Curvature", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0].clone();
    return t.pixelType = this.outputPixelType, t.bandCount = 1, this._removeStatsHistColormapVAT(t), this.rasterInfo = t, this.isGCS = t.spatialReference?.isGeographic ?? !1, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { zFactor: s, curvatureType: r } = this.functionArguments, { extent: n, primaryPixelSizes: a } = t, o = a?.[0], u = o ?? (n ? { x: n.width / e.width, y: n.height / e.height } : { x: 1, y: 1 }), c = this.isGCS && s >= 1 ? s * Kt : s;
    return ks(e, { zFactor: c, curvatureType: r, resolution: u });
  }
  _getWebGLParameters() {
    const { zFactor: t, curvatureType: e } = this.functionArguments;
    return { curvatureType: e, zFactor: this.isGCS && t >= 1 ? t * Kt : t };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], lt.prototype, "functionName", void 0), l([h({ type: _r, json: { write: !0, name: "rasterFunctionArguments" } })], lt.prototype, "functionArguments", void 0), l([h()], lt.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], lt.prototype, "isGCS", void 0), lt = l([A("esri.layers.support.rasterFunctions.CurvatureFunction")], lt);
const Br = lt;
var ae;
let J = ae = class extends D {
  constructor() {
    super(...arguments), this.bandIds = [], this.bandNames = [], this.bandWavelengths = [], this.missingBandAction = is.bestMatch;
  }
  clone() {
    return new ae({ bandIds: this.bandIds?.slice(), bandNames: this.bandNames?.slice(), bandWavelengths: this.bandWavelengths?.slice(), missingBandAction: this.missingBandAction, method: this.method, wavelengthMatchTolerance: this.wavelengthMatchTolerance });
  }
};
l([h({ json: { write: !0 } })], J.prototype, "bandIds", void 0), l([h({ json: { write: !0 } })], J.prototype, "bandNames", void 0), l([h({ json: { write: !0 } })], J.prototype, "bandWavelengths", void 0), l([Y({ 0: "name", 1: "wavelength", 2: "id" })], J.prototype, "method", void 0), l([h({ json: { write: !0 } })], J.prototype, "missingBandAction", void 0), l([h({ json: { write: !0 } })], J.prototype, "wavelengthMatchTolerance", void 0), J = ae = l([A("esri.layers.support.rasterFunctions.ExtractBandFunctionArguments")], J);
const jr = J;
let $t = class extends G {
  constructor() {
    super(...arguments), this.functionName = "ExtractBand", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { functionArguments: t, sourceRasterInfos: e } = this, s = e[0], { method: r, bandNames: n, bandWavelengths: a, bandIds: o, missingBandAction: u } = t, c = n?.length && (r === "name" || r !== "id" && !o?.length), p = a?.length && (r === "wavelength" || r !== "id" && !o?.length), m = u === is.fail, f = c ? this._matchBandNames(s, n) : p ? this._matchBandWavelengths(s, a, m) : this._matchBandIds(s, o, m);
    if (f == null)
      return { success: !1, supportsGPU: !1, error: `extract-band-function: Invalid ${c ? "band names" : p ? "band wavelengths" : "band ids"} for the imagery data source` };
    this.functionArguments.bandIds = f, this.functionArguments.method = "id", this.outputPixelType = this._getOutputPixelType("f32");
    const d = s.clone();
    d.pixelType = this.outputPixelType, d.bandCount = f.length;
    const { statistics: y, histograms: w } = d;
    y != null && y.length && (d.statistics = f.map((v) => y[v] || y[y.length - 1])), w != null && w.length && (d.histograms = f.map((v) => w[v] || w[w.length - 1]));
    let g = d.keyProperties?.BandProperties;
    return g?.length && (g = f.map((v) => v >= g.length ? g[g.length - 1] : g[v]), d.keyProperties = { ...d.keyProperties, BandProperties: g }), this.rasterInfo = d, { success: !0, supportsGPU: d.bandCount <= 3 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const s = e.pixels.length, r = this.functionArguments.bandIds.map((n) => n >= s ? s - 1 : n);
    return e.extractBands(r);
  }
  _getWebGLParameters() {
    let t;
    if (this.isInputBandIdsSwizzled) t = this.swizzledBandSelection.length ? this.swizzledBandSelection : [0, 1, 2];
    else {
      t = [...this.functionArguments.bandIds], t.length === 0 ? t = [0, 1, 2] : t.length < 3 && (t[1] = t[1] ?? t[0], t[2] = t[2] ?? t[1]);
      for (let e = 0; e < 3; e++) t[e] = Math.min(t[e], 2);
    }
    return { bandIndexMat3: E(t) };
  }
  _getInputBandIds(t) {
    const e = t.length;
    return this.functionArguments.bandIds.map((s) => s >= e ? e - 1 : s).map((s) => t[s]);
  }
  _matchBandNames(t, e) {
    const s = t.bandInfos.map(({ name: n }) => n.toLowerCase()), r = [];
    for (let n = 0; n < e.length; n++) {
      const a = e[n].toLowerCase();
      let o = s.indexOf(a);
      if (o === -1 && a === "nearinfrared" && (o = s.findIndex((u) => u.startsWith("nearinfrared_1")), o === -1 && (o = s.findIndex((u) => u.startsWith("nearinfrared")))), o === -1) return null;
      r.push(o);
    }
    return r;
  }
  _matchBandIds(t, e, s) {
    const { bandCount: r } = t;
    return !e?.length || s && e.some((n) => n < 0 || n >= r) ? null : e;
  }
  _matchBandWavelengths(t, e, s) {
    const { bandInfos: r } = t, n = [];
    for (let u = 0; u < r.length; u++) {
      const { minWavelength: c, maxWavelength: p } = r[u];
      if (!c || !p) return null;
      n.push({ minWavelength: c, maxWavelength: p });
    }
    const { wavelengthMatchTolerance: a } = this.functionArguments, o = [];
    for (let u = 0; u < e.length; u++) {
      const c = e[u];
      let p = !1, m = -1, f = Number.MAX_VALUE;
      for (let d = 0; d < n.length; d++) {
        const y = n[d], w = c >= y.minWavelength && c <= y.maxWavelength, g = Math.abs(c - (y.minWavelength + y.maxWavelength) / 2);
        w ? g < f && (p = !0, m = d, f = g) : !p && g < f && (m = d, f = g);
      }
      if (!p && a && f < a && (p = !0), !p && s) return null;
      o.push(m);
    }
    return o;
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], $t.prototype, "functionName", void 0), l([h({ type: jr, json: { write: !0, name: "rasterFunctionArguments" } })], $t.prototype, "functionArguments", void 0), l([h()], $t.prototype, "rasterArgumentNames", void 0), $t = l([A("esri.layers.support.rasterFunctions.ExtractBandFunction")], $t);
const Sr = $t;
function Mr(i, t, e) {
  const { pixels: s, width: r, height: n, mask: a, bandMasks: o } = i, u = r * n, c = o?.length ? x.combineBandMasks(o) : a, p = Math.min(t.length, s.length), m = e.startsWith("f"), f = !m && e !== i.pixelType, [d, y] = vt(e), w = x.createEmptyBand(e, u);
  for (let v = 0; v < n; v++) {
    let b = v * r;
    for (let R = 0; R < r; R++, b++) if (!c || c[b]) {
      let N = 0;
      for (let z = 0; z < p; z++) N += t[z] * s[z][b];
      m || (N = Math.round(N), f && (N = N > y ? y : N < d ? d : N)), w[b] = N;
    }
  }
  const g = new x({ width: r, height: n, pixels: [w], pixelType: e, mask: c });
  return g.updateStatistics(), g;
}
var ue;
let Lt = ue = class extends D {
  clone() {
    return new ue({ conversionParameters: [...this.conversionParameters], raster: this.raster });
  }
};
l([h({ type: [Number], json: { write: !0 } })], Lt.prototype, "conversionParameters", void 0), Lt = ue = l([A("esri.layers.support.rasterFunctions.GrayscaleFunctionArguments")], Lt);
const Or = Lt;
let ct = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Grayscale", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  get _normalizedWeights() {
    const { conversionParameters: t } = this.functionArguments, e = t.reduce((s, r) => s + r);
    return t.map((s) => s / e);
  }
  _bindSourceRasters() {
    const { conversionParameters: t } = this.functionArguments;
    if (!t?.length) return { success: !1, supportsGPU: !1, error: "missing valid conversion parameters." };
    const e = this.sourceRasterInfos[0].clone();
    this.outputPixelType = this._getOutputPixelType(e.pixelType), e.pixelType = this.outputPixelType;
    const s = t.length === 3 || e.bandCount === 3 && t.length > 3;
    return e.bandCount = 1, this._removeStatsHistColormapVAT(e), this.rasterInfo = e, { success: !0, supportsGPU: s };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    return e == null ? null : Mr(e, this._normalizedWeights, this.outputPixelType);
  }
  _getWebGLParameters() {
    return { weights: this._normalizedWeights };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], ct.prototype, "functionName", void 0), l([h({ type: Or, json: { write: !0, name: "rasterFunctionArguments" } })], ct.prototype, "functionArguments", void 0), l([h()], ct.prototype, "rasterArgumentNames", void 0), l([h()], ct.prototype, "_normalizedWeights", null), ct = l([A("esri.layers.support.rasterFunctions.GrayscaleFunction")], ct);
const Dr = ct;
var le;
let pt = le = class extends D {
  constructor() {
    super(...arguments), this.rasters = [], this.processAsMultiband = !0;
  }
  writeRasters(i, t) {
    t.rasters = i.map((e) => typeof e == "number" || typeof e == "string" ? e : e.toJSON());
  }
  clone() {
    return new le({ operation: this.operation, processAsMultiband: this.processAsMultiband, rasters: L(this.rasters) });
  }
};
l([h({ json: { write: !0 } })], pt.prototype, "operation", void 0), l([h({ json: { write: !0 } })], pt.prototype, "rasters", void 0), l([_t("rasters")], pt.prototype, "writeRasters", null), l([h({ json: { write: !0 } })], pt.prototype, "processAsMultiband", void 0), pt = le = l([A("esri.layers.support.rasterFunctions.LocalFunctionArguments")], pt);
const Gr = pt;
let Ft = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Local", this.functionArguments = null, this.rasterArgumentNames = ["rasters"];
  }
  _bindSourceRasters() {
    const { sourceRasterInfos: t } = this, e = t[0], { bandCount: s } = e, { processAsMultiband: r } = this.functionArguments;
    if (t.some((c) => c.bandCount !== s)) return { success: !1, supportsGPU: !1, error: "local-function: input rasters do not have same band count" };
    const { operation: n, rasters: a } = this.functionArguments, o = Oe[n];
    if (!(o === 999 || a.length === o || a.length <= 1 && o === 1)) return { success: !1, supportsGPU: !1, error: `local-function: the length of functionArguments.rasters does not match operation's requirement: ${o}` };
    const u = e.clone();
    return u.bandCount = o !== 999 || r ? s : 1, this._removeStatsHistColormapVAT(u), this._updateStatistics(u), this._updatePixelType(u), this.rasterInfo = u, { success: !0, supportsGPU: u.bandCount === 1 && o <= 3 && (n < 11 || n > 16) };
  }
  _processPixels(t) {
    const { pixelBlocks: e } = t;
    return e == null || e.some((s) => s == null) ? null : hs(e, this.functionArguments.operation, { processAsMultiband: this.functionArguments.processAsMultiband, outputPixelType: this.outputPixelType ?? void 0 });
  }
  _getWebGLParameters() {
    const { operation: t } = this.functionArguments, e = Oe[t], s = Object.keys(Se).find((u) => Se[u] === t)?.toLowerCase() ?? "undefined", r = this.outputPixelType ?? "f32";
    let [n, a] = vt(r);
    const o = nt(r);
    return o && (n -= 1e-4, a += 1e-4), { imageCount: e, operationName: s, domainRange: [n, a], isOutputRounded: o };
  }
  _updateStatistics(t) {
    const e = this.sourceRasterInfos[0], { operation: s } = this.functionArguments, r = Me(s)?.domain;
    if (r) {
      t.statistics = [];
      for (let n = 0; n < t.bandCount; n++) t.statistics[n] = { min: r[0], max: r[1], avg: (r[0] + r[1]) / 2, stddev: (r[0] + r[1]) / 10 };
    } else s === 45 && e.statistics?.length && (t.statistics = e.statistics.map((n) => ({ min: -n.max, max: -n.min, avg: n.avg != null ? -n.avg : void 0, stddev: n.stddev != null ? -n.stddev : void 0 })));
  }
  _updatePixelType(t) {
    const { statistics: e, pixelType: s } = this.sourceRasterInfos[0], { operation: r } = this.functionArguments, { domain: n, isInteger: a } = Me(r) ?? { domain: null, isInteger: !1 };
    let o = "f32";
    if (n && a) o = Xt(n[0], n[1]);
    else if (r === 30) {
      const u = e?.[0];
      o = u ? Xt(u.min, u.max) : nt(s) ? s : "s32";
    } else if (r === 45 && nt(s)) {
      const u = e?.map(({ max: f }) => -f), c = e?.map(({ min: f }) => -f), p = u?.length ? Math.min(...u) : null, m = c?.length ? Math.min(...c) : null;
      o = p != null && m != null ? Xt(p, m) : s.startsWith("s") ? s.replace("s", "u") : s === "u1" || s === "u2" || s === "u4" ? "s8" : s === "u8" ? "s16" : "s32";
    }
    t.pixelType = this.outputPixelType = this._getOutputPixelType(o);
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], Ft.prototype, "functionName", void 0), l([h({ type: Gr, json: { write: !0, name: "rasterFunctionArguments" } })], Ft.prototype, "functionArguments", void 0), l([h()], Ft.prototype, "rasterArgumentNames", void 0), Ft = l([A("esri.layers.support.rasterFunctions.LocalFunction")], Ft);
const zr = Ft;
var ce;
let ht = ce = class extends D {
  constructor() {
    super(...arguments), this.includedRanges = null, this.noDataValues = null, this.noDataInterpretation = as.matchAny;
  }
  get normalizedNoDataValues() {
    const { noDataValues: i } = this;
    if (!i?.length) return null;
    let t = !1;
    const e = i.map((s) => {
      if (typeof s == "number") return t = !0, [s];
      if (typeof s == "string") {
        const r = s.trim().split(" ").filter((n) => n.trim() !== "").map((n) => Number(n));
        return t = t || r.length > 0, r.length === 0 ? null : r;
      }
      return null;
    });
    return t ? e : null;
  }
  clone() {
    return new ce({ includedRanges: this.includedRanges?.slice() ?? [], noDataValues: this.noDataValues?.slice() ?? [], noDataInterpretation: this.noDataInterpretation });
  }
};
l([h({ json: { write: !0 } })], ht.prototype, "includedRanges", void 0), l([h({ json: { write: !0 } })], ht.prototype, "noDataValues", void 0), l([h()], ht.prototype, "normalizedNoDataValues", null), l([h({ json: { write: !0 } })], ht.prototype, "noDataInterpretation", void 0), ht = ce = l([A("esri.layers.support.rasterFunctions.MaskFunctionArguments")], ht);
const Er = ht;
let mt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Mask", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(), { pixelType: e } = t;
    this.outputPixelType = this._getOutputPixelType(e), t.pixelType = this.outputPixelType, this.rasterInfo = t;
    const { includedRanges: s, normalizedNoDataValues: r } = this.functionArguments;
    if (!s?.length && !r?.length) return { success: !1, supportsGPU: !1, error: "missing includedRanges or noDataValues argument" };
    let n = [];
    for (let o = 0; o < t.bandCount; o++) {
      const u = Cs(e, s?.slice(2 * o, 2 * o + 2), r?.[o]);
      if (u == null) {
        n = null;
        break;
      }
      n.push(u);
    }
    this.lookups = n;
    const a = r != null && r.every((o) => o?.length === r[0]?.length);
    return { success: !0, supportsGPU: (!s || s.length <= 2 * K) && (!r || a && r[0].length <= K) };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { outputPixelType: s, lookups: r } = this, { includedRanges: n, noDataInterpretation: a, normalizedNoDataValues: o } = this.functionArguments, u = a === as.matchAll;
    return _s(e, { includedRanges: n, noDataValues: o, outputPixelType: s, matchAll: u, lookups: r });
  }
  _getWebGLParameters() {
    const { includedRanges: t, normalizedNoDataValues: e } = this.functionArguments, s = new Float32Array(K);
    s.fill(kt), e?.[0]?.length && s.set(e[0]);
    const r = new Float32Array(K);
    for (let n = 0; n < r.length; n += 2) r[n] = t?.[n] ?? -kt, r[n + 1] = t?.[n + 1] ?? kt;
    return t && t.length && r.set(t), { bandCount: this.sourceRasterInfos[0].bandCount, noDataValues: s, includedRanges: r };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], mt.prototype, "functionName", void 0), l([h({ type: Er, json: { write: !0, name: "rasterFunctionArguments" } })], mt.prototype, "functionArguments", void 0), l([h()], mt.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], mt.prototype, "lookups", void 0), mt = l([A("esri.layers.support.rasterFunctions.MaskFunction")], mt);
const Vr = mt;
var pe;
let Nt = pe = class extends D {
  constructor() {
    super(...arguments), this.visibleBandID = 0, this.infraredBandID = 1, this.scientificOutput = !1;
  }
  clone() {
    const { visibleBandID: i, infraredBandID: t, scientificOutput: e } = this;
    return new pe({ visibleBandID: i, infraredBandID: t, scientificOutput: e });
  }
};
l([h({ json: { write: !0 } })], Nt.prototype, "visibleBandID", void 0), l([h({ json: { write: !0 } })], Nt.prototype, "infraredBandID", void 0), l([h({ json: { write: !0 } })], Nt.prototype, "scientificOutput", void 0), Nt = pe = l([A("esri.layers.support.rasterFunctions.NDVIFunctionArguments")], Nt);
const Ur = Nt;
let It = class extends G {
  constructor() {
    super(...arguments), this.functionName = "NDVI", this.functionArguments = null, this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { scientificOutput: t, visibleBandID: e, infraredBandID: s } = this.functionArguments;
    this.outputPixelType = this._getOutputPixelType(t ? "f32" : "u8");
    const r = this.sourceRasterInfos[0], n = Math.max(e, s);
    if (r.bandCount < 2 || n >= r.bandCount) return { success: !1, supportsGPU: !1, error: "ndvi-function: source raster has insufficient amount of raster bands" };
    const a = r.clone();
    a.pixelType = this.outputPixelType, a.colormap = null, a.histograms = null, a.bandCount = 1, a.keyProperties = { ...a.keyProperties, BandProperties: void 0 };
    const [o, u, c, p] = t ? [-1, 1, 0, 0.1] : [0, 200, 100, 10];
    return a.statistics = [{ min: o, max: u, avg: c, stddev: p }], this.rasterInfo = a, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { visibleBandID: s, infraredBandID: r, scientificOutput: n } = this.functionArguments;
    return Ln(e, s, r, !n);
  }
  _getWebGLParameters() {
    const { visibleBandID: t, infraredBandID: e, scientificOutput: s } = this.functionArguments, r = this.isInputBandIdsSwizzled ? [0, 1, 2] : [e, t, 0];
    return { bandIndexMat3: E(r), scaled: !s };
  }
  _getInputBandIds(t) {
    const { visibleBandID: e, infraredBandID: s } = this.functionArguments;
    return [s, e, 0].map((r) => t[r]);
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], It.prototype, "functionName", void 0), l([h({ type: Ur, json: { write: !0, name: "rasterFunctionArguments" } })], It.prototype, "functionArguments", void 0), l([h()], It.prototype, "rasterArgumentNames", void 0), It = l([A("esri.layers.support.rasterFunctions.NDVIFunction")], It);
const Lr = It;
var he;
let Q = he = class extends D {
  constructor() {
    super(...arguments), this.inputRanges = null, this.outputValues = null, this.noDataRanges = null, this.allowUnmatched = !1, this.isLastInputRangeInclusive = !1;
  }
  clone() {
    return new he({ inputRanges: [...this.inputRanges], outputValues: [...this.outputValues], noDataRanges: [...this.noDataRanges], allowUnmatched: this.allowUnmatched, isLastInputRangeInclusive: this.isLastInputRangeInclusive });
  }
};
l([h({ json: { write: !0 } })], Q.prototype, "inputRanges", void 0), l([h({ json: { write: !0 } })], Q.prototype, "outputValues", void 0), l([h({ json: { write: !0 } })], Q.prototype, "noDataRanges", void 0), l([h({ json: { write: !0 } })], Q.prototype, "allowUnmatched", void 0), l([h({ json: { write: !0 } })], Q.prototype, "isLastInputRangeInclusive", void 0), Q = he = l([A("esri.layers.support.rasterFunctions.RemapFunctionArguments")], Q);
const Wr = Q;
let ft = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Remap", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0].clone(), { pixelType: e } = t;
    this.outputPixelType = this._getOutputPixelType(e), t.pixelType = this.outputPixelType, t.colormap = null, t.histograms = null, t.bandCount = 1, t.attributeTable = null;
    const { statistics: s } = t, { allowUnmatched: r, outputValues: n, inputRanges: a, noDataRanges: o, isLastInputRangeInclusive: u } = this.functionArguments;
    if (s != null && s.length && n?.length) if (r) {
      const c = Math.min.apply(null, [...n, s[0].min]), p = Math.max.apply(null, [...n, s[0].max]);
      t.statistics = [{ ...s[0], min: c, max: p }];
    } else {
      let c = n[0], p = c;
      for (let m = 0; m < n.length; m++) c = c > n[m] ? n[m] : c, p = p > n[m] ? p : n[m];
      t.statistics = [{ ...s[0], min: c, max: p }];
    }
    return this.rasterInfo = t, this.lookup = r ? null : Bs({ srcPixelType: e, inputRanges: a, outputValues: n, noDataRanges: o, allowUnmatched: r, isLastInputRangeInclusive: u, outputPixelType: this.outputPixelType }), { success: !0, supportsGPU: (!n || n.length <= K) && (!o || o.length <= K) };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { lookup: s, outputPixelType: r } = this;
    if (s) {
      const p = Fe(e, { lut: [s.lut], offset: s.offset, outputPixelType: r });
      return p != null && s.mask && (p.mask = js(e.pixels[0], e.mask, s.mask, s.offset, "u8")), p;
    }
    const { inputRanges: n, outputValues: a, noDataRanges: o, allowUnmatched: u, isLastInputRangeInclusive: c } = this.functionArguments;
    return Ss(e, { inputRanges: n, outputValues: a, noDataRanges: o, outputPixelType: r, allowUnmatched: u, isLastInputRangeInclusive: c });
  }
  _getWebGLParameters() {
    const { allowUnmatched: t, noDataRanges: e, isLastInputRangeInclusive: s } = this.functionArguments, r = new Float32Array(3 * K), n = 1e-5, a = this.functionArguments.inputRanges ?? [], o = this.functionArguments.outputValues ?? [], u = o.length;
    for (let p = 0; p < K; p++) r[3 * p] = a[2 * p] ?? kt - 1, r[3 * p + 1] = a[2 * p + 1] ?? kt, r[3 * p + 2] = o[p] ?? 0, p < u && (p > 0 && (r[3 * p] -= n), (p < u - 1 || !s) && (r[3 * p + 1] -= n));
    const c = new Float32Array(2 * K);
    return c.fill(kt), e?.length && c.set(e), { allowUnmatched: t, rangeMaps: r, noDataRanges: c, clampRange: vt(this.outputPixelType) };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], ft.prototype, "functionName", void 0), l([h({ type: Wr, json: { write: !0, name: "rasterFunctionArguments" } })], ft.prototype, "functionArguments", void 0), l([h()], ft.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], ft.prototype, "lookup", void 0), ft = l([A("esri.layers.support.rasterFunctions.RemapFunction")], ft);
const qr = ft;
var me;
const Hr = new jt({ 1: "degree", 2: "percent-rise", 3: "adjusted" }, { useNumericKeys: !0 });
let tt = me = class extends D {
  constructor() {
    super(...arguments), this.slopeType = "degree", this.zFactor = 1, this.pixelSizePower = 0.664, this.pixelSizeFactor = 0.024, this.removeEdgeEffect = !1;
  }
  clone() {
    return new me({ slopeType: this.slopeType, zFactor: this.zFactor, pixelSizePower: this.pixelSizePower, pixelSizeFactor: this.pixelSizeFactor, removeEdgeEffect: this.removeEdgeEffect, raster: this.raster });
  }
};
l([Y(Hr)], tt.prototype, "slopeType", void 0), l([h({ type: Number, json: { write: !0 } })], tt.prototype, "zFactor", void 0), l([h({ type: Number, json: { name: "psPower", write: !0 } })], tt.prototype, "pixelSizePower", void 0), l([h({ type: Number, json: { name: "psZFactor", write: !0 } })], tt.prototype, "pixelSizeFactor", void 0), l([h({ type: Boolean, json: { write: !0 } })], tt.prototype, "removeEdgeEffect", void 0), tt = me = l([A("esri.layers.support.rasterFunctions.SlopeFunctionArguments")], tt);
const Xr = tt;
let dt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Slope", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isGCS = !1;
  }
  _bindSourceRasters() {
    this.outputPixelType = this._getOutputPixelType("f32");
    const t = this.sourceRasterInfos[0].clone();
    return t.pixelType = this.outputPixelType, t.statistics = this.functionArguments.slopeType !== "percent-rise" ? [{ min: 0, max: 90, avg: 1, stddev: 1 }] : null, t.histograms = null, t.colormap = null, t.attributeTable = null, t.bandCount = 1, this.rasterInfo = t, this.isGCS = t.spatialReference?.isGeographic ?? !1, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return null;
    const { zFactor: s, slopeType: r, pixelSizePower: n, pixelSizeFactor: a } = this.functionArguments, { isGCS: o } = this, { extent: u, primaryPixelSizes: c } = t, p = c?.[0], m = p ?? (u ? { x: u.width / e.width, y: u.height / e.height } : { x: 1, y: 1 });
    return Ms(e, { zFactor: s, slopeType: r, pixelSizePower: n, pixelSizeFactor: a, isGCS: o, resolution: m });
  }
  _getWebGLParameters() {
    const { zFactor: t, slopeType: e, pixelSizeFactor: s, pixelSizePower: r } = this.functionArguments;
    return { zFactor: this.isGCS && t >= 1 ? t * Kt : t, slopeType: e, pixelSizeFactor: s ?? 0, pixelSizePower: r ?? 0 };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], dt.prototype, "functionName", void 0), l([h({ type: Xr, json: { write: !0, name: "rasterFunctionArguments" } })], dt.prototype, "functionArguments", void 0), l([h()], dt.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], dt.prototype, "isGCS", void 0), dt = l([A("esri.layers.support.rasterFunctions.SlopeFunction")], dt);
const Jr = dt, ts = new jt({ 1: "min", 2: "max", 3: "mean", 4: "stddev", 5: "median", 6: "majority", 7: "minority" }, { useNumericKeys: !0 });
function Kr(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: r, height: n, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { statisticsType: u, kernelRows: c, kernelCols: p } = t, m = u === "stddev", f = r * n, d = new Float64Array(f), y = new Float64Array(f), w = new Uint32Array(f);
  for (let F = 0; F < n; F++) {
    const P = F * r;
    let I = 0, k = 0, C = 0;
    for (let _ = 0; _ < p; _++) a && !a[P + _] || (I += s[P + _], m && (k += s[P + _] ** 2), C++);
    d[P] = I, y[P] = k, w[P] = C;
    for (let _ = 1; _ <= r - p; _++) {
      const W = P + _ - 1, St = W + p;
      a ? (a[W] && (C--, I -= s[W], m && (k -= s[W] ** 2)), a[St] && (C++, I += s[St], m && (k += s[St] ** 2))) : (I -= s[W], I += s[St], m && (k -= s[W] ** 2, k += s[St] ** 2)), d[P + _] = I, w[P + _] = C, m && (y[P + _] = k);
    }
  }
  const g = new Float64Array(f), v = new Float64Array(f), b = new Uint32Array(f), R = c * r;
  for (let F = 0; F <= r - p; F++) {
    let P = 0, I = 0, k = 0;
    for (let C = 0; C < c; C++) {
      const _ = C * r + F;
      P += d[_], k += w[_], m && (I += y[_]);
    }
    g[F] = P, v[F] = I, b[F] = k;
    for (let C = 1; C <= n - c; C++) {
      const _ = (C - 1) * r + F, W = _ + R;
      P -= d[_], P += d[W], k -= w[_], k += w[W], m && (I -= y[_], I += y[W]), g[C * r + F] = P, v[C * r + F] = I, b[C * r + F] = k;
    }
  }
  const N = Math.floor(c / 2), z = Math.floor(p / 2);
  for (let F = N; F < n - N; F++) {
    const P = F * r;
    for (let I = z; I < r - z; I++) {
      const k = (F - N) * r + I - z, C = b[k];
      if (C === 0 || e && (!a || a[P + I])) continue;
      const _ = g[k] / C, W = m ? Math.sqrt((v[k] - g[k] * _) / C) : _;
      o[P + I] = W, a && (a[P + I] = 255);
    }
  }
}
function Yr(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: r, height: n, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { kernelRows: u, kernelCols: c, statisticsType: p } = t, m = Math.floor(u / 2), f = Math.floor(c / 2), d = p === "min", y = o.slice(), w = new Uint32Array(r * n);
  for (let g = m; g < n - m; g++) {
    const v = g * r;
    for (let b = f; b < r - f; b++) {
      let R = d ? Number.MAX_VALUE : -Number.MAX_VALUE, N = 0;
      for (let z = 0; z < u; z++) for (let F = 0; F < c; F++) {
        const P = v + b + (z - m) * r + F - f;
        a && !a[P] || (R = d ? Math.min(R, s[P]) : Math.max(R, s[P]), N++);
      }
      a ? (y[v + b] = N === 0 ? 0 : R, w[v + b] = N) : o[v + b] = N === 0 ? 0 : R;
    }
  }
  if (a) for (let g = m; g < n - m; g++) {
    const v = g * r;
    for (let b = f; b < r - f; b++) if (w[v + b]) {
      if (e && a[v + b]) continue;
      o[v + b] = y[v + b], a[v + b] = 255;
    }
  }
}
function Zr(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: r, height: n, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { kernelRows: u, kernelCols: c } = t, p = Math.floor(u / 2), m = Math.floor(c / 2), f = o.slice(), d = new Uint32Array(r * n);
  for (let y = p; y < n - p; y++) {
    const w = y * r;
    for (let g = m; g < r - m; g++) {
      if (e && a && a[w + g]) continue;
      const v = [];
      for (let b = 0; b < u; b++) for (let R = 0; R < c; R++) {
        const N = w + g + (b - p) * r + R - m;
        a && !a[N] || v.push(s[N]);
      }
      v.length && (v.sort((b, R) => b - R), a ? (f[w + g] = v[Math.floor((v.length - 1) / 2)], d[w + g] = v.length) : o[w + g] = v[Math.floor((v.length - 1) / 2)]);
    }
  }
  if (a) for (let y = p; y < n - p; y++) {
    const w = y * r;
    for (let g = m; g < r - m; g++) if (d[w + g]) {
      if (e && a[w + g]) continue;
      o[w + g] = f[w + g], a[w + g] = 255;
    }
  }
}
function Qr(i, t) {
  const { fillNoDataOnly: e } = t, { band: s, width: r, height: n, mask: a, outBand: o } = i;
  if (e && !a) return void o.set(s);
  const { kernelRows: u, kernelCols: c } = t, p = Math.floor(u / 2), m = Math.floor(c / 2), f = t.statisticsType === "majority", d = u * c, y = o.slice(), w = new Uint32Array(r * n);
  for (let g = p; g < n - p; g++) {
    const v = g * r;
    for (let b = m; b < r - m; b++) {
      if (e && a && a[v + b]) continue;
      const R = /* @__PURE__ */ new Map();
      for (let P = 0; P < u; P++) for (let I = 0; I < c; I++) {
        const k = v + b + (P - p) * r + I - m;
        if (a && !a[k]) continue;
        const C = s[k];
        R.set(C, R.has(C) ? R.get(C) + 1 : 1);
      }
      if (R.size === 0) continue;
      let N = 0, z = 0, F = f ? 0 : d + 1;
      for (const P of R.keys()) z = R.get(P), f === z > F && (F = z, N = P);
      a ? (y[v + b] = N, w[v + b] = R.size) : o[v + b] = N;
    }
  }
  if (a) for (let g = p; g < n - p; g++) {
    const v = g * r;
    for (let b = m; b < r - m; b++) if (w[v + b]) {
      if (e && a[v + b]) continue;
      o[v + b] = y[v + b], a[v + b] = 255;
    }
  }
}
function to(i, t) {
  const { mask: e } = i, { fillNoDataOnly: s } = t;
  if (s && !e) return i;
  const { pixels: r, width: n, height: a, bandMasks: o, pixelType: u } = i, c = r.length, p = n * a, m = [], { kernelRows: f, kernelCols: d, statisticsType: y, mirrorEdges: w } = t;
  if (s && !e) return i;
  const g = t.outputPixelType ?? u, v = [];
  for (let N = 0; N < c; N++) {
    const z = r[N], F = x.createEmptyBand(g, p);
    s && F.set(z);
    const P = o?.[N] ?? e, I = P?.slice() ?? null, k = { band: z, width: n, height: a, mask: I, outBand: F };
    switch (y) {
      case "min":
      case "max":
        Yr(k, t);
        break;
      case "mean":
      case "stddev":
        Kr(k, t);
        break;
      case "median":
        Zr(k, t);
        break;
      case "majority":
      case "minority":
        Qr(k, t);
    }
    w && !s && ke(F, n, a, f, d), m.push(F), I && v.push(I);
  }
  let b = v[0] ?? e;
  v.length !== c && (v.length = 0), c > 1 && o?.length && (b = x.combineBandMasks(o));
  const R = new x({ pixelType: g, width: n, height: a, pixels: m, bandMasks: o && v.length ? v : null, mask: b });
  return R.updateStatistics(), R;
}
var fe;
let gt = fe = class extends D {
  constructor() {
    super(...arguments), this.rows = 3, this.cols = 3, this.fillNoDataOnly = !1, this.statisticsType = "min";
  }
  clone() {
    return new fe({ rows: this.rows, cols: this.cols, fillNoDataOnly: this.fillNoDataOnly, statisticsType: this.statisticsType, raster: L(this.raster) });
  }
};
l([h({ json: { write: !0, read: { source: ["kernelRows", "rows"], reader: (i, t) => Number(i ?? t?.kernelRows ?? 3) } } })], gt.prototype, "rows", void 0), l([h({ json: { write: !0, read: { source: ["kernelCols", "cols"], reader: (i, t) => Number(i ?? t?.kernelCols ?? 3) } } })], gt.prototype, "cols", void 0), l([h({ json: { write: !0 } })], gt.prototype, "fillNoDataOnly", void 0), l([h({ json: { read: { source: ["statisticsType", "type"], reader: (i, t) => ts.fromJSON(t?.statisticsType ?? t?.type) ?? "min" }, write: { target: "type" } } }), Y(ts)], gt.prototype, "statisticsType", void 0), gt = fe = l([A("esri.layers.support.rasterFunctions.StatisticsFunctionArguments")], gt);
const eo = gt;
let Rt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Statistics", this.rasterArgumentNames = ["raster"];
  }
  _bindSourceRasters() {
    const { type: t } = this.functionArguments.toJSON();
    if (t < 1 || t > 7) return { success: !1, supportsGPU: !1, error: `statistics-function: the given statistics type is not supported ${t}` };
    const e = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType(e.pixelType);
    const s = e.clone();
    s.pixelType = this.outputPixelType;
    const { statisticsType: r } = this.functionArguments;
    return r === "stddev" && this._removeStatsHistColormapVAT(s), this.rasterInfo = s, { success: !0, supportsGPU: s.bandCount <= 3 && t < 5 };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return e;
    const { statisticsType: s, rows: r, cols: n, fillNoDataOnly: a } = this.functionArguments;
    return to(e, { kernelRows: r, kernelCols: n, fillNoDataOnly: a, outputPixelType: this.outputPixelType, statisticsType: s, mirrorEdges: !0 });
  }
  _getWebGLParameters() {
    const { rows: t, cols: e, statisticsType: s, fillNoDataOnly: r } = this.functionArguments;
    return { fillNoDataOnly: r, kernelRows: t, kernelCols: e, statisticsType: s, clampRange: vt(this.outputPixelType) };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], Rt.prototype, "functionName", void 0), l([h({ type: eo, json: { write: !0, name: "rasterFunctionArguments" } })], Rt.prototype, "functionArguments", void 0), l([h()], Rt.prototype, "rasterArgumentNames", void 0), Rt = l([A("esri.layers.support.rasterFunctions.StatisticsFunction")], Rt);
const so = Rt;
var de;
let yt = de = class extends D {
  constructor() {
    super(...arguments), this.statistics = null, this.histograms = null;
  }
  readStatistics(i, t) {
    if (!i?.length) return null;
    const e = [];
    return i.forEach((s) => {
      const r = { min: s.min, max: s.max, avg: s.avg ?? s.mean, stddev: s.stddev ?? s.standardDeviation };
      e.push(r);
    }), e;
  }
  writeStatistics(i, t, e) {
    if (!i?.length) return;
    const s = [];
    i.forEach((r) => {
      const n = { ...r, mean: r.avg, standardDeviation: r.stddev };
      delete n.avg, delete n.stddev, s.push(n);
    }), t[e] = s;
  }
  clone() {
    return new de({ statistics: L(this.statistics), histograms: L(this.histograms) });
  }
};
l([h({ json: { write: !0 } })], yt.prototype, "statistics", void 0), l([Ct("statistics")], yt.prototype, "readStatistics", null), l([_t("statistics")], yt.prototype, "writeStatistics", null), l([h({ json: { write: !0 } })], yt.prototype, "histograms", void 0), yt = de = l([A("esri.layers.support.rasterFunctions.StatisticsHistogramFunctionArguments")], yt);
const no = yt;
let et = class extends G {
  constructor() {
    super(...arguments), this.functionName = "StatisticsHistogram", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    this.outputPixelType = this._getOutputPixelType("u8");
    const e = t.clone(), { statistics: s, histograms: r } = this.functionArguments;
    return r && (e.histograms = r), s && (e.statistics = s), this.rasterInfo = e, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    return t.pixelBlocks?.[0];
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], et.prototype, "functionName", void 0), l([h({ type: no, json: { write: !0, name: "rasterFunctionArguments" } })], et.prototype, "functionArguments", void 0), l([h()], et.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], et.prototype, "indexedColormap", void 0), l([h()], et.prototype, "isNoopProcess", void 0), et = l([A("esri.layers.support.rasterFunctions.StatisticsHistogramFunction")], et);
const ro = et;
var ge;
const oo = new jt({ 0: "none", 3: "standard-deviation", 4: "histogram-equalization", 5: "min-max", 6: "percent-clip", 9: "sigmoid" }, { useNumericKeys: !0 });
let V = ge = class extends D {
  constructor() {
    super(...arguments), this.computeGamma = !1, this.dynamicRangeAdjustment = !1, this.gamma = [], this.histograms = null, this.statistics = null, this.stretchType = "none", this.useGamma = !1;
  }
  writeStatistics(i, t, e) {
    i?.length && (Array.isArray(i[0]) || (i = i.map((s) => [s.min, s.max, s.avg, s.stddev])), t[e] = i);
  }
  clone() {
    return new ge({ stretchType: this.stretchType, outputMin: this.outputMin, outputMax: this.outputMax, useGamma: this.useGamma, computeGamma: this.computeGamma, statistics: L(this.statistics), gamma: L(this.gamma), sigmoidStrengthLevel: this.sigmoidStrengthLevel, numberOfStandardDeviations: this.numberOfStandardDeviations, minPercent: this.minPercent, maxPercent: this.maxPercent, histograms: L(this.histograms), dynamicRangeAdjustment: this.dynamicRangeAdjustment, raster: this.raster });
  }
};
l([h({ type: Boolean, json: { write: !0 } })], V.prototype, "computeGamma", void 0), l([h({ type: Boolean, json: { name: "dra", write: !0 } })], V.prototype, "dynamicRangeAdjustment", void 0), l([h({ type: [Number], json: { write: !0 } })], V.prototype, "gamma", void 0), l([h()], V.prototype, "histograms", void 0), l([h({ type: Number, json: { write: !0 } })], V.prototype, "maxPercent", void 0), l([h({ type: Number, json: { write: !0 } })], V.prototype, "minPercent", void 0), l([h({ type: Number, json: { write: !0 } })], V.prototype, "numberOfStandardDeviations", void 0), l([h({ type: Number, json: { name: "max", write: !0 } })], V.prototype, "outputMax", void 0), l([h({ type: Number, json: { name: "min", write: !0 } })], V.prototype, "outputMin", void 0), l([h({ type: Number, json: { write: !0 } })], V.prototype, "sigmoidStrengthLevel", void 0), l([h({ json: { type: [[Number]], write: !0 } })], V.prototype, "statistics", void 0), l([_t("statistics")], V.prototype, "writeStatistics", null), l([Y(oo)], V.prototype, "stretchType", void 0), l([h({ type: Boolean, json: { write: !0 } })], V.prototype, "useGamma", void 0), V = ge = l([A("esri.layers.support.rasterFunctions.StretchFunctionArguments")], V);
const io = V;
let st = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Stretch", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.lookup = null, this.cutOffs = null;
  }
  _bindSourceRasters() {
    this.lookup = null, this.cutOffs = null;
    const t = this.sourceRasterInfos[0], { pixelType: e } = t, { functionArguments: s } = this, { dynamicRangeAdjustment: r, gamma: n, useGamma: a } = s;
    if (!r && ["u8", "u16", "s8", "s16"].includes(e)) {
      const u = Jt(s.toJSON(), { rasterInfo: t }), c = nt(this.outputPixelType) ? "round" : "float";
      this.lookup = Os({ pixelType: e, ...u, gamma: a ? n : null, rounding: c }), this.cutOffs = u;
    } else r || (this.cutOffs = Jt(s.toJSON(), { rasterInfo: t }));
    this.outputPixelType = this._getOutputPixelType(e);
    const o = t.clone();
    return o.pixelType = this.outputPixelType, this._removeStatsHistColormapVAT(o), this.outputPixelType === "u8" && (o.keyProperties.DataType = "processed"), this.rasterInfo = o, { success: !0, supportsGPU: !r };
  }
  _processPixels(t) {
    const e = t.pixelBlocks?.[0];
    if (e == null) return e;
    const { lookup: s } = this;
    if (s) return Fe(e, { ...s, outputPixelType: this.rasterInfo.pixelType });
    const { functionArguments: r } = this, n = this.cutOffs || Jt(r.toJSON(), { rasterInfo: this.sourceRasterInfos[0], pixelBlock: e }), a = r.useGamma ? r.gamma : null;
    return Ds(e, { ...n, gamma: a, outputPixelType: this.outputPixelType });
  }
  _getWebGLParameters() {
    const { outputMin: t = 0, outputMax: e = 255, gamma: s, useGamma: r } = this.functionArguments, n = this.rasterInfo.bandCount >= 2 ? 3 : 1, a = r && s?.length ? Gs(n, s) : [1, 1, 1], { minCutOff: o, maxCutOff: u } = this.cutOffs ?? { minCutOff: [0, 0, 0], maxCutOff: [255, 255, 255] };
    o.length === 1 && (o[1] = o[2] = o[0], u[1] = u[2] = u[0]);
    const c = new Float32Array(n);
    let p;
    for (p = 0; p < n; p++) c[p] = (e - t) / (u[p] - o[p]);
    const m = nt(this.outputPixelType);
    return { bandCount: n, outMin: t, outMax: e, minCutOff: o, maxCutOff: u, factor: c, useGamma: r, gamma: r && s ? s : [1, 1, 1], gammaCorrection: r && a ? a : [1, 1, 1], stretchType: this.functionArguments.stretchType, isOutputRounded: m, type: "stretch" };
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], st.prototype, "functionName", void 0), l([h({ type: io, json: { write: !0, name: "rasterFunctionArguments" } })], st.prototype, "functionArguments", void 0), l([h()], st.prototype, "rasterArgumentNames", void 0), l([h({ json: { write: !0 } })], st.prototype, "lookup", void 0), l([h({ json: { write: !0 } })], st.prototype, "cutOffs", void 0), st = l([A("esri.layers.support.rasterFunctions.StretchFunction")], st);
const ao = st;
var ye;
let Wt = ye = class extends D {
  constructor() {
    super(...arguments), this.attributeTableAsRecordSet = null;
  }
  clone() {
    return new ye({ attributeTableAsRecordSet: L(this.attributeTableAsRecordSet) });
  }
};
l([h({ json: { write: !0 } })], Wt.prototype, "attributeTableAsRecordSet", void 0), Wt = ye = l([A("esri.layers.support.rasterFunctions.TableFunctionArguments")], Wt);
const uo = Wt;
let xt = class extends G {
  constructor() {
    super(...arguments), this.functionName = "Table", this.functionArguments = null, this.rasterArgumentNames = ["raster"], this.isNoopProcess = !0;
  }
  _bindSourceRasters() {
    const t = this.sourceRasterInfos[0];
    if (t.bandCount > 1 || t.pixelType.startsWith("f")) return { success: !1, supportsGPU: !1, error: "table-function: Source data must be single band and integer pixel type." };
    const { attributeTableAsRecordSet: e } = this.functionArguments;
    if (!e) return { success: !1, supportsGPU: !1, error: "table-function: Missing attributeTableAsRecordSet argument." };
    this.outputPixelType = this._getOutputPixelType(t.pixelType);
    const s = t.clone();
    return s.pixelType = this.outputPixelType, s.bandCount = 1, s.dataType !== "thematic" && (s.keyProperties = s.keyProperties ? { ...s.keyProperties, DataType: "thematic" } : { DataType: "thematic" }), this.rasterInfo = s, { success: !0, supportsGPU: !0 };
  }
  _processPixels(t) {
    return t.pixelBlocks?.[0];
  }
};
l([h({ json: { write: !0, name: "rasterFunction" } })], xt.prototype, "functionName", void 0), l([h({ type: uo, json: { write: !0, name: "rasterFunctionArguments" } })], xt.prototype, "functionArguments", void 0), l([h()], xt.prototype, "rasterArgumentNames", void 0), l([h()], xt.prototype, "isNoopProcess", void 0), xt = l([A("esri.layers.support.rasterFunctions.TableFunction")], xt);
const lo = xt, M = /* @__PURE__ */ new Map();
function co(i, t) {
  const { rasterFunctionArguments: e } = i;
  e && (e.rasters || [e.raster]).forEach((s) => {
    s && typeof s != "number" && (typeof s == "string" ? s.startsWith("http") && (t.includes(s) || t.push(s)) : "rasterFunctionArguments" in s && co(s, t));
  });
}
function Wo(i, t) {
  if (t = t ?? {}, "function" in (i = L(i)) && "arguments" in i && i.arguments) {
    const e = gs(i, /* @__PURE__ */ new Map(), t);
    if (we(e), !e.renderingRule) throw new Bt("raster-function-helper", "Unsupported raster function json.");
    i = e.renderingRule;
  }
  if ("rasterFunction" in i) return fs(i = xe(i), t);
  throw new Bt("raster-function-helper", "unsupported raster function json.");
}
function po(i, t) {
  return t[0] === "rasters" && Array.isArray(i.rasters) ? i.rasters : t.map((e) => i[e]);
}
function es(i) {
  return !!(i && typeof i == "object" && i.rasterFunction && i.rasterFunctionArguments);
}
function xe(i) {
  const { rasterFunction: t, rasterFunctionArguments: e } = i, s = {};
  for (const r in e) {
    let n = e[r];
    const a = r.toLowerCase();
    if (a === "rasters" && Array.isArray(n)) s.rasters = n.map((o) => es(o) ? xe(o) : o);
    else switch (es(n) && (n = xe(n)), a) {
      case "dra":
        s.dra = n;
        break;
      case "pspower":
        s.psPower = n;
        break;
      case "pszfactor":
        s.psZFactor = n;
        break;
      case "bandids":
        s.bandIds = n;
        break;
      default:
        s[r[0].toLowerCase() + r.slice(1)] = n;
    }
  }
  return t !== "Local" || s.rasters?.length || (s.rasters = ["$$"]), { ...i, rasterFunctionArguments: s };
}
function fs(i, t) {
  const { rasterFunction: e, rasterFunctionArguments: s } = i, r = i.outputPixelType?.toLowerCase();
  if (e == null || !M.has(e)) throw new Bt("raster-function-helper", `unsupported raster function: ${e}`);
  const n = M.get(e), a = (typeof n.ctor == "function" ? n.ctor : n.ctor.default).fromJSON({ ...i, outputPixelType: r }), { rasterArgumentNames: o } = a, u = [], c = po(s, o), p = o[0] === "rasters", m = [];
  for (let f = 0; f < c.length; f++) {
    const d = c[f];
    let y;
    d == null || typeof d == "string" && d.startsWith("$") ? u.push(t?.raster) : typeof d == "string" ? t[d] && u.push(t[d]) : typeof d != "number" && "rasterFunction" in d && (y = fs(d, t), p || (a.functionArguments[o[f]] = y), u.push(y)), p && m.push(y ?? d);
  }
  if (p && (a.functionArguments.rasters = m), t) {
    a.sourceRasters = u;
    const f = t.raster?.url;
    f && (a.mainPrimaryRasterId = f);
  }
  return a;
}
function ds(i, t) {
  if (i && t) for (const e in i) {
    const s = i[e];
    s && typeof s == "object" && "type" in s && (s.type === "RasterFunctionTemplate" ? ds(s.arguments, t) : s.type === "RasterFunctionVariable" && t[s.name] != null && (s.value = t[s.name]));
  }
}
function ve(i, t) {
  if (!i || typeof i != "object") return i;
  const { value: e } = i;
  if (!e || typeof e != "object") return i.isDataset ? "$$" : e;
  if (Array.isArray(e)) return e.length === 0 ? [] : e.map((r) => typeof r == "object" && r.type === "RasterFunctionVariable" ? ve(r, t) : r);
  if ("value" in e && ["number", "string", "boolean"].includes(typeof e.value)) return e.value;
  if (i.isDataset && e.type !== "Scalar") return "$$";
  if (!("type" in e)) return e;
  let s = e;
  switch (e.type) {
    case "Scalar":
      s = e.value;
      break;
    case "AlgorithmicColorRamp":
      s = ss(e);
      break;
    case "MultiPartColorRamp":
      s = { type: "multipart", colorRamps: e.ArrayOfColorRamp.map(ss) };
      break;
    case "ArgumentArray":
      if (e.elements?.length && e.elements[0].type !== "RasterStatistics") {
        const r = [];
        for (let n = 0; n < e.elements.length; n++) {
          const a = e.elements[n], { type: o } = a;
          if (o) if (o === "RasterFunctionTemplate") {
            const { renderingRule: u } = gs(a, t);
            r.push(u), a._object_id != null && t.set(a._object_id, u);
          } else {
            if (o !== "RasterFunctionVariable") throw new Bt("raster-function-helper", "unsupported raster function json.");
            {
              const u = ve(a, t);
              r.push(u), a._object_id != null && t.set(a._object_id, u);
            }
          }
          else r.push(a);
        }
        s = r;
      } else s = e.elements;
  }
  return e._object_id != null && t.set(e._object_id, s), s;
}
function ss(i) {
  const t = i.algorithm ?? "esriHSVAlgorithm";
  let { FromColor: e, ToColor: s } = i;
  if (!Array.isArray(e)) {
    const { r, g: n, b: a } = Be({ h: e.Hue, s: e.Saturation, v: e.Value });
    e = [r, n, a, e.AlphaValue];
  }
  if (!Array.isArray(s)) {
    const { r, g: n, b: a } = Be({ h: s.Hue, s: s.Saturation, v: s.Value });
    s = [r, n, a, s.AlphaValue];
  }
  return { type: "algorithmic", algorithm: t, fromColor: e, toColor: s };
}
function gs(i, t, e) {
  e && ds(i, e);
  const s = { renderingRule: {}, templates: t };
  return ys(i, s), s;
}
function ys(i, t) {
  if (!i || !t.renderingRule) return;
  const { renderingRule: e, templates: s } = t, { function: r, arguments: n, _object_id: a } = i;
  if (!r || !n) return;
  a != null && s.set(a, e), e.rasterFunction = r.type.replace("Function", ""), e.outputPixelType = r.pixelType;
  const o = {};
  e.rasterFunctionArguments = o;
  for (const u in n) {
    if (u === "type" || u === "object_id" || u === "_object_ref_id") continue;
    const c = n[u];
    c && typeof c == "object" && "type" in c && (c.type === "RasterFunctionTemplate" || c.type === "RasterFunctionVariable") ? (c.type === "RasterFunctionVariable" ? o[u] = ve(c, s) : (e.rasterFunctionArguments[u] = {}, ys(c, { renderingRule: e.rasterFunctionArguments[u], templates: s })), c._object_id != null && s.set(c._object_id, o[u])) : o[u] = c;
  }
  switch (o.DEM && !o.Raster && (o.Raster = o.DEM, delete o.DEM), e.rasterFunction) {
    case "Stretch":
      ho(o);
      break;
    case "Colormap":
      mo(o);
      break;
    case "Convolution":
      fo(o);
      break;
    case "Mask":
      go(o);
  }
}
function we(i) {
  const { renderingRule: t, templates: e } = i;
  if (typeof t != "object" || !t?.rasterFunctionArguments || !e.size) return;
  const { rasterFunctionArguments: s } = t;
  for (const r in s) {
    const n = s[r], a = r === "_object_ref_id" ? n : n && typeof n == "object" && "_object_ref_id" in n ? n._object_ref_id : null;
    if (a == null) n && typeof n == "object" && (n.rasterFunctionArguments && we({ renderingRule: n, templates: e }), Array.isArray(n) && n.forEach((o, u) => {
      if (typeof o == "object") if (o._object_ref_id != null) {
        if (!e.has(o._object_ref_id)) throw new Bt("raster-function-helper", `unsupported raster function json. _object_ref_id: ${n} does not exist`);
        const c = e.get(a);
        c && typeof c == "object" ? Object.assign(o, c) : n[u] = c;
      } else we({ renderingRule: o, templates: e });
    }));
    else {
      if (!e.has(a)) throw new Bt("raster-function-helper", `unsupported raster function json. _object_ref_id: ${a} does not exist`);
      const o = e.get(a);
      r !== "_object_ref_id" ? s[r] = o : o && typeof o == "object" && Object.assign(s, o);
    }
  }
}
function ho(i) {
  i.Statistics?.length && typeof i.Statistics == "object" && (i.Statistics = i.Statistics.map((t) => [t.min, t.max, t.mean, t.standardDeviation])), i.NumberOfStandardDeviation != null && (i.NumberOfStandardDeviations = i.NumberOfStandardDeviation, delete i.NumberOfStandardDeviation);
}
function mo(i) {
  i.ColorRamp?.type?.toLowerCase() === "randomcolorramp" && (delete i.ColorRamp, i.ColormapName = "Random"), i.ColorSchemeType === 0 && delete i.ColorRamp;
}
function fo(i) {
  i.ConvolutionType != null && (i.Type = i.ConvolutionType, delete i.ConvolutionType);
}
function go(i) {
  i.NoDataValues?.length && typeof i.NoDataValues[0] == "string" && (i.NoDataValues = i.NoDataValues.filter((t) => t !== "").map((t) => Number(t)));
}
M.set("Arithmetic", { desc: "Arithmetic Function", ctor: Bn, rasterArgumentNames: ["rasters"] }), M.set("Aspect", { desc: "Aspect Function", ctor: Sn, rasterArgumentNames: ["raster"] }), M.set("BandArithmetic", { desc: "Band Arithmetic Function", ctor: ur, rasterArgumentNames: ["raster"] }), M.set("Colormap", { desc: "Colormap Function", ctor: wr, rasterArgumentNames: ["raster"] }), M.set("CompositeBand", { desc: "CompositeBand Function", ctor: Ar, rasterArgumentNames: ["rasters"] }), M.set("Convolution", { desc: "Convolution Function", ctor: Cr, rasterArgumentNames: ["raster"] }), M.set("ContrastBrightness", { desc: "Contrast Brightness Function", ctor: Pr, rasterArgumentNames: ["raster"] }), M.set("ExtractBand", { desc: "ExtractBand Function", ctor: Sr, rasterArgumentNames: ["raster"] }), M.set("Curvature", { desc: "Curvature Function", ctor: Br, rasterArgumentNames: ["raster"] }), M.set("Grayscale", { desc: "Grayscale Function", ctor: Dr, rasterArgumentNames: ["raster"] }), M.set("Clip", { desc: "Clip Function", ctor: cr, rasterArgumentNames: ["raster"] }), M.set("Local", { desc: "Local Function", ctor: zr, rasterArgumentNames: ["rasters"] }), M.set("Mask", { desc: "Mask Function", ctor: Vr, rasterArgumentNames: ["raster"] }), M.set("NDVI", { desc: "NDVI Function", ctor: Lr, rasterArgumentNames: ["raster"] }), M.set("Remap", { desc: "Remap Function", ctor: qr, rasterArgumentNames: ["raster"] }), M.set("Slope", { desc: "Slope Function", ctor: Jr, rasterArgumentNames: ["raster"] }), M.set("Statistics", { desc: "Focal Statistics Function", ctor: so, rasterArgumentNames: ["raster"] }), M.set("StatisticsHistogram", { desc: "Statistics Histogram Function", ctor: ro, rasterArgumentNames: ["raster"] }), M.set("Stretch", { desc: "Stretch Function", ctor: ao, rasterArgumentNames: ["raster"] }), M.set("Table", { desc: "Attribute Table Function", ctor: lo, rasterArgumentNames: ["raster"] });
let zt = class extends $e {
  get affectsPixelSize() {
    return !1;
  }
  forwardTransform(i) {
    return i;
  }
  inverseTransform(i) {
    return i;
  }
};
l([h()], zt.prototype, "affectsPixelSize", null), l([h({ json: { write: !0 } })], zt.prototype, "spatialReference", void 0), zt = l([A("esri.layers.support.rasterTransforms.BaseRasterTransform")], zt);
const Ce = zt;
var be;
let Et = be = class extends Ce {
  constructor() {
    super(...arguments), this.type = "gcs-shift", this.tolerance = 1e-8;
  }
  forwardTransform(i) {
    return (i = i.clone()).type === "point" ? (i.x > 180 + this.tolerance && (i.x -= 360), i) : (i.xmin >= 180 - this.tolerance ? (i.xmax -= 360, i.xmin -= 360) : i.xmax > 180 + this.tolerance && (i.xmin = -180, i.xmax = 180), i);
  }
  inverseTransform(i) {
    return (i = i.clone()).type === "point" ? (i.x < -this.tolerance && (i.x += 360), i) : (i.xmin < -this.tolerance && (i.xmin += 360, i.xmax += 360), i);
  }
  clone() {
    return new be({ tolerance: this.tolerance });
  }
};
l([Y({ GCSShiftXform: "gcs-shift" })], Et.prototype, "type", void 0), l([h()], Et.prototype, "tolerance", void 0), Et = be = l([A("esri.layers.support.rasterTransforms.GCSShiftTransform")], Et);
const yo = Et;
var Ae;
let qt = Ae = class extends Ce {
  constructor() {
    super(...arguments), this.type = "identity";
  }
  clone() {
    return new Ae();
  }
};
l([Y({ IdentityXform: "identity" })], qt.prototype, "type", void 0), qt = Ae = l([A("esri.layers.support.rasterTransforms.IdentityTransform")], qt);
const xo = qt;
var Te;
function Pe(i, t, e) {
  const { x: s, y: r } = t;
  if (e < 2)
    return { x: i[0] + s * i[2] + r * i[4], y: i[1] + s * i[3] + r * i[5] };
  if (e === 2) {
    const f = s * s, d = r * r, y = s * r;
    return { x: i[0] + s * i[2] + r * i[4] + f * i[6] + y * i[8] + d * i[10], y: i[1] + s * i[3] + r * i[5] + f * i[7] + y * i[9] + d * i[11] };
  }
  const n = s * s, a = r * r, o = s * r, u = n * s, c = n * r, p = s * a, m = r * a;
  return { x: i[0] + s * i[2] + r * i[4] + n * i[6] + o * i[8] + a * i[10] + u * i[12] + c * i[14] + p * i[16] + m * i[18], y: i[1] + s * i[3] + r * i[5] + n * i[7] + o * i[9] + a * i[11] + u * i[13] + c * i[15] + p * i[17] + m * i[19] };
}
function ns(i, t, e) {
  const { xmin: s, ymin: r, xmax: n, ymax: a, spatialReference: o } = t;
  let u = [];
  if (e < 2) u.push({ x: s, y: a }), u.push({ x: n, y: a }), u.push({ x: s, y: r }), u.push({ x: n, y: r });
  else {
    let m = 10;
    for (let f = 0; f < m; f++) u.push({ x: s, y: r + (a - r) * f / (m - 1) }), u.push({ x: n, y: r + (a - r) * f / (m - 1) });
    m = 8;
    for (let f = 1; f <= m; f++) u.push({ x: s + (n - s) * f / m, y: r }), u.push({ x: s + (n - s) * f / m, y: a });
  }
  u = u.map((m) => Pe(i, m, e));
  const c = u.map((m) => m.x), p = u.map((m) => m.y);
  return new zs({ xmin: Math.min.apply(null, c), xmax: Math.max.apply(null, c), ymin: Math.min.apply(null, p), ymax: Math.max.apply(null, p), spatialReference: o });
}
function vo(i) {
  const [t, e, s, r, n, a] = i, o = s * a - n * r, u = n * r - s * a;
  return [(n * e - t * a) / o, (s * e - t * r) / u, a / o, r / u, -n / o, -s / u];
}
let q = Te = class extends Ce {
  constructor() {
    super(...arguments), this.polynomialOrder = 1, this.type = "polynomial";
  }
  readForwardCoefficients(i, t) {
    const { coeffX: e, coeffY: s } = t;
    if (!e?.length || !s?.length || e.length !== s.length) return null;
    const r = [];
    for (let n = 0; n < e.length; n++) r.push(e[n]), r.push(s[n]);
    return r;
  }
  writeForwardCoefficients(i, t, e) {
    const s = [], r = [];
    for (let n = 0; n < i?.length; n++) n % 2 == 0 ? s.push(i[n]) : r.push(i[n]);
    t.coeffX = s, t.coeffY = r;
  }
  get inverseCoefficients() {
    let i = this._get("inverseCoefficients");
    const t = this._get("forwardCoefficients");
    return !i && t && this.polynomialOrder < 2 && (i = vo(t)), i;
  }
  set inverseCoefficients(i) {
    this._set("inverseCoefficients", i);
  }
  readInverseCoefficients(i, t) {
    const { inverseCoeffX: e, inverseCoeffY: s } = t;
    if (!e?.length || !s?.length || e.length !== s.length) return null;
    const r = [];
    for (let n = 0; n < e.length; n++) r.push(e[n]), r.push(s[n]);
    return r;
  }
  writeInverseCoefficients(i, t, e) {
    const s = [], r = [];
    for (let n = 0; n < i?.length; n++) n % 2 == 0 ? s.push(i[n]) : r.push(i[n]);
    t.inverseCoeffX = s, t.inverseCoeffY = r;
  }
  get affectsPixelSize() {
    return this.polynomialOrder > 0;
  }
  forwardTransform(i) {
    if (i.type === "point") {
      const t = Pe(this.forwardCoefficients, i, this.polynomialOrder);
      return new je({ x: t.x, y: t.y, spatialReference: i.spatialReference });
    }
    return ns(this.forwardCoefficients, i, this.polynomialOrder);
  }
  inverseTransform(i) {
    if (i.type === "point") {
      const t = Pe(this.inverseCoefficients, i, this.polynomialOrder);
      return new je({ x: t.x, y: t.y, spatialReference: i.spatialReference });
    }
    return ns(this.inverseCoefficients, i, this.polynomialOrder);
  }
  clone() {
    return new Te({ polynomialOrder: this.polynomialOrder, forwardCoefficients: this.forwardCoefficients ? [...this.forwardCoefficients] : null, inverseCoefficients: this.inverseCoefficients ? [...this.inverseCoefficients] : null });
  }
};
l([h({ json: { write: !0 } })], q.prototype, "polynomialOrder", void 0), l([h()], q.prototype, "forwardCoefficients", void 0), l([Ct("forwardCoefficients", ["coeffX", "coeffY"])], q.prototype, "readForwardCoefficients", null), l([_t("forwardCoefficients")], q.prototype, "writeForwardCoefficients", null), l([h({ json: { write: !0 } })], q.prototype, "inverseCoefficients", null), l([Ct("inverseCoefficients", ["inverseCoeffX", "inverseCoeffY"])], q.prototype, "readInverseCoefficients", null), l([_t("inverseCoefficients")], q.prototype, "writeInverseCoefficients", null), l([h()], q.prototype, "affectsPixelSize", null), l([Y({ PolynomialXform: "polynomial" })], q.prototype, "type", void 0), q = Te = l([A("esri.layers.support.rasterTransforms.PolynomialTransform")], q);
const wo = q, xs = { GCSShiftXform: yo, IdentityXform: xo, PolynomialXform: wo }, bo = Object.keys(xs);
function qo(i) {
  const t = i?.type;
  return !i || bo.includes(t);
}
function Ho(i) {
  if (!i?.type) return null;
  const e = xs[i?.type];
  if (e) {
    const s = new e();
    return s.read(i), s;
  }
  return null;
}
export {
  co as N,
  Wo as R,
  yo as c,
  qo as f,
  Ho as i,
  wo as y
};
//# sourceMappingURL=utils-B1l4e3NP.js.map
