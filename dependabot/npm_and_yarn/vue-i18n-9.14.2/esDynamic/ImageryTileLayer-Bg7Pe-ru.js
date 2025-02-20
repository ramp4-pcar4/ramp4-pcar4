import { k8 as wt, mX as It, fv as te, mY as ot, D as ae, s as O, cp as Ee, a3 as A, mZ as lt, b8 as L, ib as Te, i6 as bt, $ as ct, m_ as ut, gs as Rt, m$ as Re, bx as H, ic as ht, id as vt, ie as St, jS as Tt, n0 as _t, n1 as Ft, n2 as kt, n3 as Mt, n4 as Ae, O as b, P as R, ec as ft, Q as K, bX as Ct, i3 as q, bq as qe, U as Le, b5 as Ot, n5 as Pt, n6 as Pe, n7 as $t, n8 as Dt, e9 as Nt, n9 as Bt, na as Jt, i4 as Et, nb as At, i5 as He, ig as Lt, nc as Ve, nd as Ht, ne as Ye, nf as Xe, ng as Ke, aQ as zt, nh as Wt, ni as Gt, nj as jt, nk as Ut, nl as Qe, i7 as qt, nm as Vt, aM as Yt, nn as Xt, no as Kt, np as ve, ia as Qt, i9 as Zt, i8 as ei, d$ as mt, nq as ti, bm as $e, nr as ze, ns as ii, a9 as si, ma as ni, nt as ri, iB as ai, I as oi, lx as li, nu as ci, nv as ui, nw as hi, nx as Ze, ny as fi, nz as mi, nA as di, nB as pe, nC as pi, nD as yi, nE as gi, nF as xi, e3 as wi, e7 as Ii, e5 as bi, e6 as Ri, ek as vi, gx as Si, ej as Ti, e4 as _i, e8 as Fi, bW as ki, f1 as Mi, _ as Ci, dS as ue, gA as Oi, gR as ye, S as Pi, g$ as $i, dY as Di, nG as Ni, eb as Bi, W as Ji, ei as Ei } from "./main-uCo5F72j.js";
import { i as et, m as tt, x as it, h as Ai, s as Li } from "./RawBlockCache-6HCXxjLY.js";
import { T as De, D as ge, j as st, r as nt, o as Hi, V as _e, J as Ie, e as zi, Z as Wi, C as Gi, U as Ne } from "./rasterProjectionHelper-LuHDux50.js";
import { S as dt, y as We, c as ji, R as Ui } from "./PolynomialTransform-D4hYQ5v9.js";
const rt = 8, qi = 256;
let Vi = 0, E = class extends wt(Ct) {
  constructor() {
    super(...arguments), this._tileFetchQueue = new It({ concurrency: 32, process: (t, e) => this._fetchRawTile(t.pyramidLevel, t.row, t.col, { ...t.options, signal: e }) }), this.datasetName = null, this.datasetFormat = null, this.hasUniqueSourceStorageInfo = !0, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  async init() {
    const t = De();
    this.addResolvingPromise(t), await this.when();
  }
  normalizeCtorArgs(t) {
    return t?.ioConfig && (t = { ...t, ioConfig: { resolution: null, bandIds: null, sampling: "closest", tileInfo: te.create(), ...t.ioConfig } }), t;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: t } = this, e = ge(t.spatialReference);
    return e != null && t.extent.width >= e / 2;
  }
  get _hasNoneOrGCSShiftTransform() {
    const { transform: t } = this.rasterInfo;
    return t == null || t.type === "gcs-shift";
  }
  set rasterJobHandler(t) {
    this._set("rasterJobHandler", t), this.datasetFormat === "Function" && this.primaryRasters?.rasters?.forEach((e) => e.rasterJobHandler = t);
  }
  get rasterId() {
    return this.url || "rasterId-" + Vi++;
  }
  set url(t) {
    this._set("url", ot(t, ae.getLogger(this)));
  }
  async open(t) {
    throw new O("BaseRaster:open-not-implemented", "open() is not implemented");
  }
  async fetchTile(t, e, n, i = {}) {
    const s = i.tileInfo || this.rasterInfo.storageInfo.tileInfo, a = this.getTileExtentFromTileInfo(t, e, n, s);
    return i = { noClip: !0, ...i }, this.fetchPixels(a, s.size[0], s.size[1], i);
  }
  async identify(t, e = {}) {
    t = Ee(A, t).clone().normalize();
    const { multidimensionalDefinition: n, timeExtent: i } = e, { rasterInfo: s } = this, { hasMultidimensionalTranspose: a, multidimensionalInfo: r } = s;
    let { transposedVariableName: o } = e;
    const l = r != null && a && (i != null || lt(n));
    l && !o && (o = n != null && n.length > 0 ? n[0].variableName ?? void 0 : r.variables[0].name, e = { ...e, transposedVariableName: o }), e = this._getRequestOptionsWithSliceId(e);
    const { spatialReference: c, extent: u } = s, { datumTransformation: h } = e;
    let f = st(t, c, h);
    if (!u.intersects(f)) return { location: f, value: null };
    if (s.transform != null) {
      const F = s.transform.inverseTransform(f);
      if (!s.nativeExtent.intersects(F)) return { location: F, value: null };
      f = F;
    }
    let d = 0;
    const y = o != null && r != null && s.hasMultidimensionalTranspose;
    if (this.datasetFormat === "Function") {
      const F = this.primaryRasters.rasters[0];
      if (y) return F.identify(f, e);
      const { pixelSize: P } = s, C = 3, $ = P.x * C / 2, D = P.y * C / 2, N = new L({ xmin: f.x - $, xmax: f.x + $, ymin: f.y - D, ymax: f.y + D, spatialReference: c }), J = { interpolation: "nearest", multidimensionalDefinition: n, sliceId: e.sliceId }, { pixelBlock: V } = await F.fetchPixels(N, C, C, J), { pixelBlock: W } = await this.fetchPixels(N, C, C, J);
      if (V == null) return { location: f, value: null };
      const G = Math.floor(C * C * 0.5), Q = !V.mask || V.mask[G] ? V.pixels.map((U) => U[G]) : null;
      let ie;
      return W != null && (ie = !W.mask || W.mask[G] ? W.pixels.map((U) => U[G]) : void 0), { location: f, value: Q, processedValue: ie, pyramidLevel: 0 };
    }
    if (!y) {
      if (e.srcResolution)
        d = nt(e.srcResolution, s, this.ioConfig.sampling).pyramidLevel;
      else if (d = await this.computeBestPyramidLevelForLocation(t, e), d == null) return { location: f, value: null };
    }
    const g = this.identifyPixelLocation(f, d, null, y);
    if (g === null) return { location: f, value: null };
    const { row: m, col: p, rowOffset: x, colOffset: I, blockWidth: w } = g, T = o ?? e.sliceId, v = et(this.rasterId, T), S = `${d}/${m}/${p}`;
    let k = tt(v, null, S);
    k == null && (k = this.fetchRawTile(d, m, p, e), it(v, null, S, k));
    const _ = await k;
    if (!_?.pixels?.length) return { location: f, value: null };
    const M = x * w + I;
    return this._processIdentifyResult(_, { srcLocation: f, position: M, pyramidLevel: d, useTransposedTile: !!y, requestSomeSlices: l, identifyOptions: e });
  }
  async fetchPixels(t, e, n, i = {}) {
    t = Hi(t), i = this._getRequestOptionsWithSliceId(i);
    const { _hasNoneOrGCSShiftTransform: s } = this;
    if (i.requestRawData && s) return this._fetchPixels(t, e, n, i);
    const a = ge(t.spatialReference), r = _e(t);
    if (a == null || r === 0 || r === 1 && this._isGlobalWrappableSource && s) return this._fetchPixels(t, e, n, i);
    if (r >= 3) return { extent: t, pixelBlock: null };
    const o = [], { xmin: l, xmax: c } = t, u = Math.round(a / (c - l) * e), h = u - Math.round((a / 2 - l) / (c - l) * e);
    let f = 0;
    const d = [];
    for (let p = 0; p <= r; p++) {
      const x = new L({ xmin: p === 0 ? l : -a / 2, xmax: p === r ? c - a * p : a / 2, ymin: t.ymin, ymax: t.ymax, spatialReference: t.spatialReference }), I = p === 0 ? u - h : p === r ? e - f : u;
      f += I, d.push(I);
      const w = i.disableWrapAround && p > 0 ? null : this._fetchPixels(x, I, n, i);
      o.push(w);
    }
    const y = (await Promise.all(o)).map((p) => p?.pixelBlock);
    let g = null;
    const m = { width: e, height: n };
    return this.rasterJobHandler ? g = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: y, srcMosaicSize: m, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: d }, i)).pixelBlock : g = Te(y, m, { blockWidths: d }), { extent: t, srcExtent: Ie(t, this.rasterInfo.spatialReference, i.datumTransformation), pixelBlock: g };
  }
  async fetchRawPixels(t, e, n, i = {}) {
    e = { x: Math.floor(e.x), y: Math.floor(e.y) };
    const s = await this._fetchRawTiles(t, e, n, i), { nativeExtent: a, nativePixelSize: r, storageInfo: o } = this.rasterInfo, l = 2 ** t, c = r.x * l, u = r.y * l, h = new L({ xmin: a.xmin + c * e.x, xmax: a.xmin + c * (e.x + n.width - 1), ymin: a.ymax - u * (e.y + n.height - 1), ymax: a.ymax - u * e.y, spatialReference: a.spatialReference });
    if (!s) return { extent: h, srcExtent: h, pixelBlock: null };
    const { pixelBlocks: f, mosaicSize: d } = s;
    if (f.length === 1 && f[0] != null && f[0].width === n.width && f[0].height === n.height) return { extent: h, srcExtent: h, pixelBlock: s.pixelBlocks[0] };
    const y = t > 0 ? o.pyramidBlockWidth : o.blockWidth, g = t > 0 ? o.pyramidBlockHeight : o.blockHeight, m = { x: e.x % y, y: e.y % g };
    let p;
    return this.rasterJobHandler ? p = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: f, srcMosaicSize: d, destDimension: n, clipOffset: m, clipSize: n, coefs: null, sampleSpacing: null, interpolation: i.interpolation, alignmentInfo: null, blockWidths: null }, i)).pixelBlock : p = Te(f, d, { clipOffset: m, clipSize: n }), { extent: h, srcExtent: h, pixelBlock: p };
  }
  fetchRawTile(t, e, n, i) {
    throw new O("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(t) {
    return Ie(this.rasterInfo.extent, t);
  }
  decodePixelBlock(t, e) {
    return !this.rasterJobHandler || e.useCanvas ? bt(t, e) : this.rasterJobHandler.decode({ data: t, options: e });
  }
  async request(t, e, n = 0) {
    const { customFetchParameters: i } = this.ioConfig, { range: s, query: a, headers: r } = e;
    n = n ?? e.retryCount ?? this.ioConfig.retryCount;
    const o = s ? { Range: `bytes=${s.from}-${s.to}` } : null;
    try {
      return await ct(t, { ...e, query: { ...a, ...i }, headers: { ...r, ...o } });
    } catch (l) {
      if (n > 0) return n--, this.request(t, e, n);
      throw l;
    }
  }
  getSliceIndex(t) {
    const { multidimensionalInfo: e } = this.rasterInfo;
    return e == null || t == null || t.length === 0 ? null : ut(t, e);
  }
  getTileExtentFromTileInfo(t, e, n, i) {
    const s = i.lodAt(t);
    return this.getTileExtent({ x: s.resolution, y: s.resolution }, e, n, i.origin, i.spatialReference, i.size);
  }
  updateTileInfo() {
    const { storageInfo: t, spatialReference: e, extent: n, pixelSize: i } = this.rasterInfo, { pyramidResolutions: s } = t;
    if (!t.tileInfo) {
      const a = [], r = t.maximumPyramidLevel || 0;
      let o = (i.x + i.y) / 2, l = 1 / 0.0254 * 96 * o;
      for (let u = 0; u <= r && (a.unshift(new Rt({ level: r - u, resolution: o, scale: l })), u !== r); u++) if (s) {
        const h = (s[u].x + s[u].y) / 2;
        l *= h / o, o = h;
      } else o *= 2, l *= 2;
      const c = new A({ x: n.xmin, y: n.ymax, spatialReference: e });
      t.tileInfo = new te({ origin: c, size: [t.blockWidth, t.blockHeight], spatialReference: e, lods: a }), t.isVirtualTileInfo = !0;
    }
  }
  createRemoteDatasetStorageInfo(t, e = 512, n = 512, i) {
    const { width: s, height: a, nativeExtent: r, pixelSize: o, spatialReference: l } = t, c = new A({ x: r.xmin, y: r.ymax, spatialReference: l });
    i == null && (i = Math.max(0, Math.round(Math.log(Math.max(s, a)) / Math.LN2 - 8)));
    const u = this.computeBlockBoundary(r, 512, 512, { x: r.xmin, y: r.ymax }, [o], i);
    t.storageInfo = new Re({ blockWidth: e, blockHeight: n, pyramidBlockWidth: e, pyramidBlockHeight: n, origin: c, firstPyramidLevel: 1, maximumPyramidLevel: i, blockBoundary: u });
  }
  async computeBestPyramidLevelForLocation(t, e = {}) {
    return 0;
  }
  computeBlockBoundary(t, e, n, i, s, a = 0, r = 2) {
    if (s.length === 1 && a > 0) {
      s = [...s];
      let { x: u, y: h } = s[0];
      for (let f = 0; f < a; f++) u *= r, h *= r, s.push({ x: u, y: h });
    }
    const o = [], { x: l, y: c } = i;
    for (let u = 0; u < s.length; u++) {
      const { x: h, y: f } = s[u];
      o.push({ minCol: Math.floor((t.xmin - l + 0.1 * h) / e / h), maxCol: Math.floor((t.xmax - l - 0.1 * h) / e / h), minRow: Math.floor((c - t.ymax + 0.1 * f) / n / f), maxRow: Math.floor((c - t.ymin - 0.1 * f) / n / f) });
    }
    return o;
  }
  getPyramidPixelSize(t) {
    const { nativePixelSize: e } = this.rasterInfo, { pyramidResolutions: n, pyramidScalingFactor: i } = this.rasterInfo.storageInfo;
    if (t === 0) return e;
    if (n != null && n.length) return n[t - 1];
    const s = i ** t;
    return { x: e.x * s, y: e.y * s };
  }
  identifyPixelLocation(t, e, n, i) {
    const { spatialReference: s, nativeExtent: a, storageInfo: r } = this.rasterInfo, { maximumPyramidLevel: o, origin: l, transposeInfo: c } = r, u = i && c != null ? c.tileSize[0] : r.blockWidth, h = i && c != null ? c.tileSize[1] : r.blockHeight, f = st(t, s, n);
    if (!a.intersects(f) || e < 0 || e > o) return null;
    const d = this.getPyramidPixelSize(e), { x: y, y: g } = d, m = (l.y - f.y) / g / h, p = (f.x - l.x) / y / u, x = Math.min(h - 1, Math.floor((m - Math.floor(m)) * h)), I = Math.min(u - 1, Math.floor((p - Math.floor(p)) * u));
    return { pyramidLevel: e, row: Math.floor(m), col: Math.floor(p), rowOffset: x, colOffset: I, blockWidth: u, srcLocation: f };
  }
  getTileExtent(t, e, n, i, s, a) {
    const [r, o] = a, l = i.x + n * r * t.x, c = l + r * t.x, u = i.y - e * o * t.y, h = u - o * t.y;
    return new L({ xmin: l, xmax: c, ymin: h, ymax: u, spatialReference: s });
  }
  getBlockWidthHeight(t) {
    return { blockWidth: t > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: t > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(t, e, n) {
    const i = this.rasterInfo.storageInfo.blockBoundary[t];
    return !i || i.maxRow < e || i.maxCol < n || i.minRow > e || i.minCol > n;
  }
  updateImageSpaceRasterInfo(t) {
    const { extent: e, pixelSize: n } = t;
    if (e.xmin === -0.5 && e.ymax === 0.5 && n.x === 1 && n.y === 1 && t.transform == null) return;
    const { width: i, height: s } = t, a = H.WebMercator;
    t.spatialReference = a, t.extent = t.nativeExtent = new L({ xmin: -0.5, ymax: 0.5, xmax: i - 0.5, ymin: 0.5 - s, spatialReference: a }), t.isPseudoSpatialReference = !0, t.transform = null, t.pixelSize = new A({ x: 1, y: 1, spatialReference: a });
    const { extent: r, storageInfo: o } = t;
    if (o) {
      o.origin = new A({ x: r.xmin, y: r.ymax, spatialReference: a });
      const { pyramidResolutions: l, tileInfo: c } = o;
      if (l && l.forEach((u) => {
        u.x /= n.x, u.y /= n.y;
      }), c) {
        c.origin = o.origin;
        const u = (t.nativePixelSize.x + t.nativePixelSize.y) / 2;
        c.lods.forEach((h, f) => {
          h.resolution = u * 2 ** f, h.scale = 96 * h.resolution / 0.0254;
        });
      }
    }
  }
  async _fetchPixels(t, e, n, i = {}) {
    let s = _e(t);
    if (s >= 2) return { extent: t, pixelBlock: null };
    const a = this._getSourceDataInfo(t, e, n, i), { pyramidLevel: r, srcResolution: o, srcExtent: l, srcWidth: c, srcHeight: u, ul: h } = a;
    if (c === 0 || u === 0) return { extent: t, srcExtent: l, pixelBlock: null };
    const { rasterInfo: f } = this, d = f.transform, y = d?.type === "gcs-shift", g = ge(t.spatialReference) != null;
    !y && g || (s = _e(a.srcExtent, y));
    const m = await this._fetchRawTiles(r, h, { width: c, height: u, wrapCount: s }, i);
    if (!m) return { extent: t, srcExtent: l, pixelBlock: null };
    const p = f.storageInfo, x = r > 0 ? p.pyramidBlockWidth : p.blockWidth, I = r > 0 ? p.pyramidBlockHeight : p.blockHeight;
    let { x: w, y: T } = f.pixelSize;
    if (r > 0) {
      const { pyramidResolutions: Z, pyramidScalingFactor: xt } = p;
      if (Z != null && Z[r - 1]) ({ x: w, y: T } = Z[r - 1]);
      else {
        const Ue = xt ** r;
        w *= Ue, T *= Ue;
      }
    }
    const v = f.spatialReference, S = new A({ x: w, y: T, spatialReference: v }), k = x === c && I === u && h.x % x == 0 && h.y % I == 0, _ = new A({ x: (t.xmax - t.xmin) / e, y: (t.ymax - t.ymin) / n, spatialReference: t.spatialReference }), M = !t.spatialReference.equals(v), F = v.isGeographic ? 1e-9 : 1e-4, { datumTransformation: P } = i;
    if (!M && k && m.pixelBlocks.length === 1 && x === e && I === n && Yi(o, _, F)) return { extent: t, srcExtent: l, srcTilePixelSize: S, pixelBlock: m.pixelBlocks[0] };
    const C = g && ge(l.spatialReference) != null && this._hasNoneOrGCSShiftTransform, $ = i.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    $ && !this.rasterJobHandler && await De();
    const D = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: t, srcBufferExtent: m.extent, pixelSize: _.toJSON(), datumTransformation: P, rasterTransform: d, hasWrapAround: s > 0 || C, isAdaptive: this.ioConfig.optimizeProjectionAccuracy !== !1, includeGCSGrid: $ }, i) : zi({ projectedExtent: t, srcBufferExtent: m.extent, pixelSize: _, datumTransformation: P, rasterTransform: d, hasWrapAround: s > 0 || C, isAdaptive: !1, includeGCSGrid: $ });
    let N;
    const J = !i.requestRawData, V = { rows: D.spacing[0], cols: D.spacing[1] }, W = this._hasNoneOrGCSShiftTransform ? this._getRasterTileAlignmentInfo(r, m.extent.xmin) : void 0, { pixelBlocks: G, mosaicSize: Q, isPartiallyFilled: ie } = m;
    let U = null;
    if (this.rasterJobHandler)
      ({ pixelBlock: N, localNorthDirections: U } = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: G, srcMosaicSize: Q, destDimension: J ? { width: e, height: n } : null, coefs: J ? D.coefficients : null, sampleSpacing: J ? V : null, projectDirections: $, gcsGrid: $ ? D.gcsGrid : null, isUV: this.rasterInfo.dataType === "vector-uv", interpolation: i.interpolation, alignmentInfo: W, blockWidths: null }, i));
    else {
      const Z = Te(G, Q, { alignmentInfo: W });
      N = J ? ht(Z, { width: e, height: n }, D.coefficients, V, i.interpolation) : Z, $ && D.gcsGrid && (U = vt({ width: e, height: n }, D.gcsGrid), N = St(N, this.rasterInfo.dataType, U));
    }
    return i.requestRawData || $ ? { extent: t, srcExtent: l, srcTilePixelSize: S, pixelBlock: N, transformGrid: D, localNorthDirections: U, isPartiallyFilled: ie } : { extent: t, srcExtent: l, srcTilePixelSize: S, pixelBlock: N };
  }
  async _fetchRawTiles(t, e, n, i) {
    const { origin: s, blockBoundary: a } = this.rasterInfo.storageInfo, { blockWidth: r, blockHeight: o } = this.getBlockWidthHeight(t);
    let { x: l, y: c } = e, { width: u, height: h, wrapCount: f } = n;
    const d = this._getRasterTileAlignmentInfo(t, 0);
    i.buffer && (l -= i.buffer.cols, c -= i.buffer.rows, u += 2 * i.buffer.cols, h += 2 * i.buffer.rows);
    let y = 0, g = 0, m = 0;
    f && d != null && ({ worldColumnCountFromOrigin: g, originColumnOffset: m, rightPadding: y } = d, g * d.blockWidth - y >= l + u && (y = 0));
    const p = Math.floor(l / r), x = Math.floor(c / o), I = Math.floor((l + u + y - 1) / r), w = Math.floor((c + h + y - 1) / o), T = a[t];
    if (!T) return null;
    const { minRow: v, minCol: S, maxCol: k, maxRow: _ } = T;
    if (f === 0 && (w < v || I < S || x > _ || p > k)) return null;
    const M = new Array();
    let F = !1;
    const P = this.ioConfig.allowPartialFill == null ? i.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let W = x; W <= w; W++) for (let G = p; G <= I; G++) {
      let Q = G;
      if (!i.disableWrapAround && f && d != null && g <= G && (Q = G - g - m), W >= v && Q >= S && _ >= W && k >= Q) {
        const ie = this._tileFetchQueue.push({ pyramidLevel: t, row: W, col: Q, options: i }, { signal: i.signal });
        P ? M.push(new Promise((U) => {
          ie.then((Z) => U(Z)).catch(() => {
            F = !0, U(null);
          });
        })) : M.push(ie);
      } else M.push(Promise.resolve(null));
    }
    if (M.length === 0) return null;
    const C = await Promise.all(M), $ = { height: (w - x + 1) * o, width: (I - p + 1) * r }, { spatialReference: D } = this.rasterInfo, N = this.getPyramidPixelSize(t), { x: J, y: V } = N;
    return { extent: new L({ xmin: s.x + p * r * J, xmax: s.x + (I + 1) * r * J, ymin: s.y - (w + 1) * o * V, ymax: s.y - x * o * V, spatialReference: D }), pixelBlocks: C, mosaicSize: $, isPartiallyFilled: F };
  }
  _fetchRawTile(t, e, n, i) {
    const s = this.rasterInfo.storageInfo.blockBoundary[t];
    if (!s) return Promise.resolve(null);
    const { minRow: a, minCol: r, maxCol: o, maxRow: l } = s;
    if (e < a || n < r || e > l || n > o) return Promise.resolve(null);
    const c = et(this.rasterId, i.sliceId), u = `${t}/${e}/${n}`;
    let h = tt(c, i.registryId, u);
    if (h == null) {
      const f = new AbortController();
      h = this.fetchRawTile(t, e, n, { ...i, signal: f.signal }), it(c, i.registryId, u, h, f), h.catch(() => Ai(c, i.registryId, u));
    }
    return i.signal && Tt(i, () => {
      Li(c, i.registryId, u);
    }), h;
  }
  _computeMagDirValues(t) {
    const { bandCount: e, dataType: n } = this.rasterInfo;
    if (!(e === 2 && n === "vector-magdir" || n === "vector-uv") || t?.length !== 2 || !t[0]?.length) return null;
    const i = t[0].length;
    if (n === "vector-magdir") {
      const l = t[1].map((c) => (c + 360) % 360);
      return [t[0], l];
    }
    const [s, a] = t, r = [], o = [];
    for (let l = 0; l < i; l++) {
      const [c, u] = _t([s[l], a[l]]);
      r.push(c), o.push(u);
    }
    return [r, o];
  }
  _getRasterTileAlignmentInfo(t, e) {
    return this._rasterTileAlignmentInfo == null && (this._rasterTileAlignmentInfo = Wi(this.rasterInfo)), this._rasterTileAlignmentInfo.pyramidsInfo == null ? null : { startX: e, halfWorldWidth: this._rasterTileAlignmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlignmentInfo.hasGCSSShiftTransform, ...this._rasterTileAlignmentInfo.pyramidsInfo[t] };
  }
  _getSourceDataInfo(t, e, n, i = {}) {
    const s = { datumTransformation: i.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0, ul: { x: 0, y: 0 } };
    i.srcResolution && (s.srcResolution = i.srcResolution, this._updateSourceDataInfo(t, s));
    const a = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: r, srcHeight: o, pyramidLevel: l } = s, c = r / e, u = o / n, h = l < a && c * u >= 16, f = l === a && this._requireTooManySrcTiles(r, o, e, n);
    if (h || f || r === 0 || o === 0) {
      const d = new A({ x: (t.xmax - t.xmin) / e, y: (t.ymax - t.ymin) / n, spatialReference: t.spatialReference });
      let y = Gi(d, this.rasterInfo.spatialReference, t, s.datumTransformation);
      const g = !y || i.srcResolution && y.x + y.y < i.srcResolution.x + i.srcResolution.y;
      if (h && i.srcResolution && g) {
        const m = Math.round(Math.log(Math.max(c, u)) / Math.LN2) - 1;
        if (a - l + 3 >= m) {
          const p = 2 ** m;
          y = { x: i.srcResolution.x * p, y: i.srcResolution.y * p };
        }
      }
      y && (s.srcResolution = y, this._updateSourceDataInfo(t, s));
    }
    return this._requireTooManySrcTiles(s.srcWidth, s.srcHeight, e, n) && (s.srcWidth = 0, s.srcHeight = 0), s;
  }
  _requireTooManySrcTiles(t, e, n, i) {
    const { tileInfo: s } = this.rasterInfo.storageInfo, a = Math.ceil(t / s.size[0]) * Math.ceil(e / s.size[1]), r = t / n, o = e / i, l = Math.max(1, (n + i) / 1024);
    return a >= qi * l || r > rt || o > rt;
  }
  _updateSourceDataInfo(t, e) {
    e.srcWidth = 0, e.srcHeight = 0;
    const { rasterInfo: n } = this, i = n.spatialReference, { srcResolution: s, datumTransformation: a } = e, { pyramidLevel: r, pyramidResolution: o, excessiveReading: l } = nt(s, n, this.ioConfig.sampling);
    if (l) return;
    let c = e.srcExtent || Ie(t, i, a);
    if (c == null) return;
    const u = n.transform;
    u && (c = u.inverseTransform(c)), e.srcExtent = c;
    const { x: h, y: f } = n.storageInfo.origin, d = Math.floor((c.xmin - h) / o.x + 0.1), y = Math.floor((f - c.ymax) / o.y + 0.1), g = Math.floor((c.xmax - h) / o.x - 0.1), m = Math.floor((f - c.ymin) / o.y - 0.1), p = c.width < 0.1 * o.x ? 0 : g - d + 1, x = c.height < 0.1 * o.y ? 0 : m - y + 1;
    e.pyramidLevel = r, e.pyramidResolution = o, e.srcWidth = p, e.srcHeight = x, e.ul = { x: d, y };
  }
  _getRequestOptionsWithSliceId(t) {
    return this.rasterInfo.multidimensionalInfo != null && t.sliceId == null && (t = { ...t, sliceId: this.getSliceIndex(t.multidimensionalDefinition) }), t;
  }
  _processIdentifyResult(t, e) {
    const { srcLocation: n, position: i, pyramidLevel: s, useTransposedTile: a } = e, r = t.pixels[0].length / t.width / t.height;
    if (!(!t.mask || t.mask[i])) return { location: n, value: null };
    const { multidimensionalInfo: o } = this.rasterInfo;
    if (o == null || !a) {
      const m = t.pixels.map((I) => I[i]), p = { location: n, value: m, pyramidLevel: s }, x = this._computeMagDirValues(m.map((I) => [I]));
      return x?.length && (p.magdirValue = x.map((I) => I[0])), p;
    }
    let l = t.pixels.map((m) => m.slice(i * r, i * r + r)), c = this._computeMagDirValues(l);
    const { requestSomeSlices: u, identifyOptions: h } = e;
    let f = Ft(o, h.transposedVariableName);
    if (u) {
      const m = kt(f, h.multidimensionalDefinition, h.timeExtent);
      l = l.map((p) => m.map((x) => p[x])), c = c?.map((p) => m.map((x) => p[x])), f = m.map((p) => f[p]);
    }
    const d = t.noDataValues || this.rasterInfo.noDataValue, y = { pixels: l, pixelType: t.pixelType };
    let g;
    return d != null && (Mt(y, d), g = y.mask), { location: n, value: null, dataSeries: f.map((m, p) => {
      const x = { value: g?.[p] === 0 ? null : l.map((I) => I[p]), multidimensionalDefinition: m.multidimensionalDefinition.map((I) => new Ae({ ...I, isSlice: !0 })) };
      return c?.length && (x.magdirValue = [c[0][p], c[1][p]]), x;
    }), pyramidLevel: s };
  }
};
function Yi(t, e, n) {
  return Math.abs(t.x - e.x) < n && Math.abs(t.y - e.y) < n;
}
b([R()], E.prototype, "_rasterTileAlignmentInfo", void 0), b([R()], E.prototype, "_tileFetchQueue", void 0), b([R({ readOnly: !0 })], E.prototype, "_isGlobalWrappableSource", null), b([R({ readOnly: !0 })], E.prototype, "_hasNoneOrGCSShiftTransform", null), b([R()], E.prototype, "rasterJobHandler", null), b([R({ readOnly: !0 })], E.prototype, "rasterId", null), b([R(ft)], E.prototype, "url", null), b([R({ type: String, json: { write: !0 } })], E.prototype, "datasetName", void 0), b([R({ type: String, json: { write: !0 } })], E.prototype, "datasetFormat", void 0), b([R()], E.prototype, "hasUniqueSourceStorageInfo", void 0), b([R()], E.prototype, "rasterInfo", void 0), b([R()], E.prototype, "ioConfig", void 0), b([R()], E.prototype, "sourceJSON", void 0), E = b([K("esri.layers.support.rasterDatasets.BaseRaster")], E);
const oe = E;
function Xi(t, e) {
  if (t.spatialReference.equals(e)) return t;
  const n = qe(t.spatialReference), i = qe(e);
  if (n === i) return t;
  const s = n / i;
  return { x: t.x * s, y: t.y * s };
}
async function Be(t, e, n) {
  if (n.type === "extent") return Qi(t, e, n);
  const { width: i, height: s } = t, a = new Uint8Array(i * s), { contains: r, intersects: o } = await import("./geometryEngine-BxKNS4vT.js");
  return o(e, n) ? n.type === "polyline" ? Zi(t, e, n) : r(n, e) ? t : Ki(t, e, n) : new q({ pixelType: t.pixelType, width: i, height: s, mask: a, maskIsAlpha: !1, pixels: [...t.pixels] });
}
function Ki(t, e, n) {
  if (!t) return t;
  const { width: i, height: s } = t, a = e.width / i, r = e.height / s, { xmin: o, ymax: l } = e;
  let c;
  if (n.type === "extent") {
    const m = (n.xmin - o) / a, p = (n.xmax - o) / a, x = (l - n.ymax) / r, I = (l - n.ymin) / r;
    c = [[[m, x], [m, I], [p, I], [p, x], [m, x]]];
  } else c = n.rings.map((m) => m.map(([p, x]) => [(p - o) / a, (l - x) / r]));
  const u = document.createElement("canvas");
  u.width = i, u.height = s;
  const h = u.getContext("2d");
  h.fillStyle = "#f00", h.beginPath(), c.forEach((m) => {
    h.moveTo(m[0][0], m[0][1]);
    for (let p = 0; p < m.length; p++) h.lineTo(m[p][0], m[p][1]);
    h.closePath();
  }), h.fill();
  const f = h.getImageData(0, 0, i, s).data, d = t.mask, y = i * s, g = new Uint8Array(y);
  for (let m = 0; m < y; m++) d && !d[m] || (g[m] = f[4 * m + 3] > 127 ? 255 : 0);
  return new q({ pixelType: t.pixelType, width: i, height: s, mask: g, maskIsAlpha: !1, pixels: [...t.pixels] });
}
function Qi(t, e, n) {
  const { width: i, height: s } = t, a = new Uint8Array(i * s), r = e.width / i, o = e.height / s;
  if (n.width / r < 0.5 || n.height / o < 0.5) return new q({ pixelType: t.pixelType, width: i, height: s, mask: a, pixels: [...t.pixels] });
  const { xmin: l, xmax: c, ymin: u, ymax: h } = e, { xmin: f, xmax: d, ymin: y, ymax: g } = n, m = Math.max(l, f), p = Math.min(c, d), x = Math.max(u, y), I = Math.min(h, g), w = 0.5 * r, T = 0.5 * o;
  if (p - m < w || I - x < T || p < l + w || m > c - w || x > h - T || I < u + T) return new q({ pixelType: t.pixelType, width: i, height: s, mask: a, pixels: [...t.pixels] });
  const v = Math.max(0, (m - l) / r), S = Math.min(i, Math.max(0, (p - l) / r)), k = Math.max(0, (h - I) / o), _ = Math.min(s, Math.max(0, (h - x) / o)), M = Math.round(v), F = Math.round(S) - 1, P = Math.round(k), C = Math.round(_) - 1;
  if (M === F && v % 1 > 0.5 && S % 1 < 0.5 || P === C && k % 1 > 0.5 && _ % 1 < 0.5) return new q({ pixelType: t.pixelType, width: i, height: s, mask: a, pixels: [...t.pixels] });
  if (M === 0 && P === 0 && F === i && C === s) return t;
  const $ = t.mask;
  for (let D = P; D <= C; D++) for (let N = M; N <= F; N++) {
    const J = D * i + N;
    a[J] = $ ? $[J] : 255;
  }
  return new q({ pixelType: t.pixelType, width: i, height: s, mask: a, pixels: [...t.pixels] });
}
function Zi(t, e, n) {
  const { width: i, height: s } = t, a = new Uint8Array(i * s), r = e.width / i, o = e.height / s, { xmin: l, ymax: c } = e, { paths: u } = n, h = t.mask;
  for (let f = 0; f < u.length; f++) {
    const d = u[f];
    for (let y = 0; y < d.length - 1; y++) {
      const [g, m] = d[y], [p, x] = d[y + 1];
      let I = Math.floor((c - m) / o), w = Math.floor((c - x) / o);
      if (w < I) {
        const v = I;
        I = w, w = v;
      }
      I = Math.max(0, I), w = Math.min(s - 1, w);
      const T = (p - g) / (x - m);
      for (let v = I; v <= w; v++) {
        const S = v === I ? Math.max(m, x) : (s + 1 - v) * o, k = v === w ? Math.min(m, x) : S - o;
        let _ = Math.floor(x === m ? (g - l) / r : (T * (S - m) + g - l) / r), M = Math.floor(x === m ? (p - l) / r : (T * (k - m) + g - l) / r);
        if (M < _) {
          const P = _;
          _ = M, M = P;
        }
        const F = v * i;
        _ = Math.max(0, _), M = Math.min(i - 1, M);
        for (let P = F + _; P <= F + M; P++) a[P] = h ? h[P] : 255;
      }
    }
  }
  return new q({ pixelType: t.pixelType, width: i, height: s, mask: a, pixels: [...t.pixels] });
}
function es(t, e, n, i = !0) {
  const { spatialReference: s } = t, { x: a, y: r } = Xi(n, s);
  let o, l, c;
  const u = e.type === "extent" ? e : e.extent;
  let { xmin: h, xmax: f, ymax: d, ymin: y } = u;
  const { xmin: g, ymax: m } = t.extent;
  return i ? (h = g + (h > g ? a * Math.round((h - g) / a) : 0), d = m - (d < m ? r * Math.round((m - d) / r) : 0), f = g + (f > g ? a * Math.round((f - g) / a) : 0), y = m - (y < m ? r * Math.round((m - y) / r) : 0), o = new L({ xmin: h, ymax: d, xmax: f, ymin: y, spatialReference: s }), l = Math.round(o.width / a), c = Math.round(o.height / r)) : (l = Math.floor((f - h) / a + 0.8), c = Math.floor((d - y) / r + 0.8), h = g + (h > g ? a * Math.floor((h - g) / a + 0.1) : 0), d = m - (d < m ? r * Math.floor((m - d) / r + 0.1) : 0), f = h + l * a, y = d - c * r, o = new L({ xmin: h, ymax: d, xmax: f, ymin: y, spatialReference: s })), { extent: o, width: l, height: c };
}
const ts = 40;
let se = class extends oe {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null, this._clippingGeometry = /* @__PURE__ */ new Map();
  }
  async open(e) {
    await this.init();
    const { rasterFunction: n } = this;
    this.primaryRasters?.rasters?.length ? n.sourceRasters = this.primaryRasters.rasters : (this.primaryRasters = n.getPrimaryRasters(), this.rasterJobHandler && this.primaryRasters.rasters?.forEach((u) => u.rasterJobHandler = this.rasterJobHandler));
    const { rasters: i, rasterIds: s } = this.primaryRasters, a = i.map((u) => u.rasterInfo ? void 0 : u.open(e));
    await Promise.all(a);
    const r = i.map(({ rasterInfo: u }) => u), o = n.bind({ rasterInfos: r, rasterIds: s });
    if (n.rawSourceRasterInfos = r, !o.success || r.length === 0) throw new O("raster-function:open", `cannot bind the function: ${o.error ?? ""}`);
    const l = n.functionName === "Table" ? n : n.functionArguments?.raster;
    l?.functionName === "Table" && (n.rasterInfo.attributeTable = Le.fromJSON(l.functionArguments.attributeTableAsRecordSet)), await this.syncJobHandler();
    const c = r[0];
    this.hasUniqueSourceStorageInfo = r.length === 1 || r.slice(1).every((u) => is(u, c)), this.set("sourceJSON", i[0].sourceJSON), this.set("rasterInfo", n.rasterInfo), await this._updateClipGeometry();
  }
  async syncJobHandler() {
    return this.rasterJobHandler?.updateRasterFunction(this.rasterFunction);
  }
  async fetchPixels(e, n, i, s = {}) {
    const { rasters: a, rasterIds: r } = this.primaryRasters;
    let o = !1;
    const { interpolation: l } = s, c = this.rasterFunction.flatWebGLFunctionChain?.hasFocalFunction;
    !s.requestRawData && c && (o = a.length === 1 && !s.skipRasterFunction, s = { ...s, interpolation: "bilinear", requestRawData: o });
    const u = a.map((w) => w.fetchPixels(e, n, i, s)), h = await Promise.all(u), f = h.map((w) => w.pixelBlock), d = o || s.requestRawData ? h.map((w) => w.srcTilePixelSize) : null;
    if (s.skipRasterFunction || f.every((w) => w == null)) return h[0];
    const y = h.find((w) => w.pixelBlock != null)?.extent ?? e;
    let g = this.rasterJobHandler ? await this.rasterJobHandler.process({ extent: y, primaryPixelBlocks: f, primaryPixelSizes: d, primaryRasterIds: r }) : this.rasterFunction.process({ extent: y, primaryPixelBlocks: f, primaryPixelSizes: d, primaryRasterIds: r });
    const { transformGrid: m } = h[0];
    if (!o || g == null || m == null) {
      const w = s.noClip ? null : this.getClippingGeometry(y.spatialReference);
      return s.noClip || s.requestRawData || g == null || !w || (g = await Be(g, y, w)), { ...h[0], pixelBlock: g };
    }
    const p = { rows: m.spacing[0], cols: m.spacing[1] };
    let x;
    this.rasterJobHandler ? x = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: [g], srcMosaicSize: { width: g.width, height: g.height }, destDimension: { width: n, height: i }, coefs: m.coefficients, sampleSpacing: p, projectDirections: !1, gcsGrid: null, isUV: !1, interpolation: l, alignmentInfo: void 0, blockWidths: null }, s)).pixelBlock : x = ht(g, { width: n, height: i }, m.coefficients, p, l);
    const I = s.noClip ? null : this.getClippingGeometry(e.spatialReference);
    return s.noClip || s.requestRawData || x == null || I == null || (x = await Be(x, e, I)), { extent: e, srcExtent: h[0].srcExtent, pixelBlock: x };
  }
  getClippingGeometry(e) {
    const n = this._clippingGeometry.get("0");
    if (!e || !n) return n;
    const i = ss(e);
    let s = this._clippingGeometry.get(i);
    return s != null || (s = e.equals(n.spatialReference) ? n : Ne(n, e), this._clippingGeometry.set(i, s)), s;
  }
  async _updateClipGeometry() {
    const e = this.rasterFunction.getClippingGeometries()[0];
    let n = e?.clippingGeometry;
    if (n && e.clippingType === "inside") {
      const { extent: i } = this.rasterInfo, { difference: s, densify: a } = await import("./geometryEngine-BxKNS4vT.js");
      let r = a(Ot.fromExtent(i), 2 * (i.width + i.height) / ts);
      r = Ne(r, n.spatialReference), n = s(r, n);
    }
    this._clippingGeometry.clear(), n && this._clippingGeometry.set("0", n);
  }
};
b([R({ type: String, json: { write: !0 } })], se.prototype, "datasetFormat", void 0), b([R()], se.prototype, "tileType", void 0), b([R()], se.prototype, "rasterFunction", void 0), b([R()], se.prototype, "primaryRasters", void 0), se = b([K("esri.layers.support.rasterDatasets.FunctionRaster")], se);
const pt = se;
function is(t, e) {
  const { storageInfo: n, pixelSize: i, spatialReference: s, extent: a } = t, { storageInfo: r, pixelSize: o, spatialReference: l, extent: c } = e;
  return i.x === o.x && i.y === o.y && s.equals(l) && a.equals(c) && n.blockHeight === r.blockHeight && n.blockWidth === r.blockWidth && n.maximumPyramidLevel === r.maximumPyramidLevel;
}
function ss(t) {
  return String(t.wkid ?? t.wkt ?? t.wkt2);
}
const ns = (t) => {
  let e = class extends t {
    constructor(...i) {
      super(...i), this._isConstructedFromFunctionRaster = !1, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.interpolation = "nearest", this.multidimensionalSubset = null, this.raster = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.symbolizer = null, this._isConstructedFromFunctionRaster = i[0]?.raster?.datasetFormat === "Function";
    }
    get fullExtent() {
      return this.serviceRasterInfo?.extent;
    }
    set multidimensionalDefinition(i) {
      this._set("multidimensionalDefinition", i), this.updateRenderer();
    }
    set rasterFunction(i) {
      i?.functionName?.toLowerCase() === "none" && (i = void 0), this._set("rasterFunction", i), this.updateRasterFunction();
    }
    get rasterInfo() {
      return Bt(ae.getLogger(this), "rasterInfo", { replacement: "serviceRasterInfo", version: "4.29", warnOnce: !0 }), this._get("serviceRasterInfo");
    }
    set url(i) {
      this._set("url", ot(i, ae.getLogger(this)));
    }
    set renderer(i) {
      i == null && this.rasterFunction == null ? this._configDefaultRenderer("override") : (this._set("renderer", i), this.updateRenderer());
    }
    readRenderer(i, s, a) {
      const r = s?.layerDefinition?.drawingInfo?.renderer;
      return Jt(r, a) || void 0;
    }
    async convertVectorFieldData(i, s) {
      const { serviceRasterInfo: a } = this;
      if (i == null || !a) return null;
      const r = this._rasterJobHandler.instance, o = a.dataType;
      return r ? r.convertVectorFieldData({ pixelBlock: i, dataType: o }, s) : Et(i, o);
    }
    async computeStatisticsHistograms(i, s) {
      await this.load(s), i = Ee(At, i).clone();
      const { serviceRasterInfo: a } = this;
      if (a == null) throw new O("imagery-tile-mixin:compute-statistics-histograms", "serviceRasterInfo must be specified");
      const { geometry: r } = i;
      if (r == null) throw new O("imagery-tile-mixin:compute-statistics-histograms", "geometry must be specified");
      let o = r;
      const { spatialReference: l } = a;
      r.spatialReference.equals(l) || (await De(), o = r.type === "extent" ? Ie(r, l) : Ne(r, l));
      const c = i.pixelSize ?? new A({ x: a.pixelSize.x, y: a.pixelSize.y, spatialReference: l }), { extent: u, width: h, height: f } = es(a, o, c), d = await this.fetchPixels(u, h, f, { ...s, interpolation: "nearest" });
      if (d.pixelBlock == null) throw new O("imagery-tile-mixin:compute-statistics-histograms", "failed to fetch pixels");
      const y = await Be(d.pixelBlock, u, o), g = this._rasterJobHandler.instance;
      return g ? g.computeStatisticsHistograms({ pixelBlock: y }, s) : He(y);
    }
    async createFlowMesh(i, s) {
      const a = this._rasterJobHandler.instance;
      return a ? a.createFlowMesh(i, s) : Lt(i.meshType, i.simulationSettings, i.flowData, s.signal != null ? s.signal : new AbortController().signal);
    }
    normalizeRasterFetchOptions(i) {
      const { multidimensionalInfo: s } = this.serviceRasterInfo ?? {};
      if (s == null) return i;
      let a = i.multidimensionalDefinition || this.multidimensionalDefinition;
      a?.length || (a = Ve(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset }));
      const r = i.timeExtent || this.timeExtent;
      if (a != null && r != null && (r.start != null || r.end != null)) {
        a = a.map((g) => g.clone());
        const o = s.variables.find(({ name: g }) => g === a[0].variableName)?.dimensions?.find(({ name: g }) => g === "StdTime"), l = a.find(({ dimensionName: g }) => g === "StdTime");
        if (!o || !l) return { ...i, multidimensionalDefinition: null };
        const { start: c, end: u } = r, h = c == null ? null : c.getTime(), f = u == null ? null : u.getTime(), d = h ?? f, y = f ?? h;
        if (o.values != null) {
          const g = o.values.filter((m) => {
            if (Array.isArray(m)) {
              if (d === y) return m[0] <= d && m[1] >= d;
              const p = m[0] <= d && m[1] > d || m[0] < y && m[1] >= y, x = m[0] >= d && m[1] <= y || m[0] < d && m[1] > y;
              return p || x;
            }
            return d === y ? m === d : m >= d && m <= y;
          });
          if (g.length) {
            const m = g.sort((p, x) => {
              const I = Array.isArray(p) ? p[0] : p, w = Array.isArray(p) ? p[1] : p, T = Array.isArray(x) ? x[0] : x, v = Array.isArray(x) ? x[1] : x;
              return d === y ? I - T : Math.abs(w - y) - Math.abs(v - y);
            })[0];
            l.values = [m];
          } else a = null;
        } else if (o.hasRegularIntervals && o.extent) {
          const [g, m] = o.extent;
          d > m || y < g ? a = null : l.values = d === y ? [d] : [Math.max(g, d), Math.min(m, y)];
        }
      }
      return a != null && Ht(a, this.multidimensionalSubset) ? { ...i, multidimensionalDefinition: null } : { ...i, multidimensionalDefinition: a };
    }
    async updateRasterFunction() {
      if (!this.loaded || this.type !== "imagery-tile" || !this.rasterFunction && !this._cachedRasterFunctionJson || JSON.stringify(this.rasterFunction) === JSON.stringify(this._cachedRasterFunctionJson)) return;
      if (this._isConstructedFromFunctionRaster && this.raster.datasetFormat === "Function") {
        const u = this.raster.rasterFunction.toJSON();
        return !this.rasterFunction && u && this._set("rasterFunction", Pe.fromJSON(u)), void (this._cachedRasterFunctionJson = this.rasterFunction?.toJSON());
      }
      let i, s = this.raster, a = !1;
      s.datasetFormat === "Function" ? (i = s.primaryRasters.rasters, s = i[0], a = !0) : i = [s];
      const { rasterFunction: r } = this;
      if (r) {
        const u = { raster: s };
        i.length > 1 && i.forEach((d) => u[d.url] = d);
        const h = dt(r.functionDefinition?.toJSON() ?? r.toJSON(), u), f = new pt({ rasterFunction: h });
        f.rasterJobHandler = this._rasterJobHandler.instance, await f.open(), this._cachedRasterFunctionJson = this.rasterFunction?.toJSON(), this.raster = f;
      } else this.raster = s, this._cachedRasterFunctionJson = null, await s.when();
      if (this._cachedRendererJson = null, !a && !r) return;
      const { bandIds: o } = this, { bandCount: l } = this.raster.rasterInfo, c = o?.length ? o.some((u) => u >= l) : l >= 3;
      o && (c || this.renderer && this.renderer.type !== "raster-stretch") && this._set("bandIds", null), this._configDefaultRenderer("auto");
    }
    async updateRenderer() {
      const { loaded: i, symbolizer: s } = this;
      if (!i || !s || !this.renderer) return;
      const { rasterInfo: a } = this.raster, r = Ye(a, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), o = r?.name, l = Xe({ ...this.renderer.toJSON(), variableName: o });
      if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(l)) return;
      const c = this._rasterJobHandler.instance;
      c && (s.rasterInfo = Ke(a, o), s.rendererJSON = l, s.bind(), await c.updateSymbolizer(s), this._cachedRendererJson = l);
    }
    async applyRenderer(i, s) {
      const a = i?.pixelBlock;
      if (!(a != null && a.pixels && a.pixels.length > 0)) return null;
      let r;
      await this.updateRenderer();
      const o = this._rasterJobHandler.instance, l = this.bandIds ?? [];
      return r = o ? await o.symbolize({ ...i, simpleStretchParams: s, bandIds: l }) : this.symbolizer.symbolize({ ...i, simpleStretchParams: s, bandIds: l }), r;
    }
    getTileUrl(i, s, a) {
      return this.raster.datasetFormat === "RasterTileServer" ? `${this.url}/tile/${i}/${s}/${a}` : "";
    }
    getCompatibleTileInfo(i, s, a = !1) {
      if (!this.loaded || s == null) return null;
      if (a && i.equals(this.spatialReference)) return this.tileInfo;
      const r = zt(i);
      return te.create({ size: 256, spatialReference: i, origin: r ? { x: r.origin[0], y: r.origin[1] } : { x: s.xmin, y: s.ymax } });
    }
    getCompatibleFullExtent(i) {
      return this.loaded ? (this._compatibleFullExtent?.spatialReference.equals(i) || (this._compatibleFullExtent = this.raster.computeExtent(i)), this._compatibleFullExtent) : null;
    }
    async fetchTile(i, s, a, r = {}) {
      if (n(this), r.requestAsImageElement) {
        const l = this.getTileUrl(i, s, a);
        return ct(l, { responseType: "image", query: { ...this.refreshParameters, ...this.raster.ioConfig.customFetchParameters }, signal: r.signal }).then((c) => c.data);
      }
      const { serviceRasterInfo: o } = this;
      if (o.multidimensionalInfo != null && (r = this.normalizeRasterFetchOptions(r)).multidimensionalDefinition == null) {
        const l = r.tileInfo || o.storageInfo.tileInfo;
        return { extent: this.raster.getTileExtentFromTileInfo(i, s, a, l), pixelBlock: null };
      }
      return await this._initJobHandler(), await this.updateRasterFunction(), this.renderer?.type === "raster-shaded-relief" && (r = { ...r, buffer: { cols: 1, rows: 1 } }), this.raster.fetchTile(i, s, a, r);
    }
    async fetchPixels(i, s, a, r = {}) {
      return this.serviceRasterInfo.multidimensionalInfo != null && (r = this.normalizeRasterFetchOptions(r)).multidimensionalDefinition == null ? { extent: i, pixelBlock: null } : (await this._initJobHandler(), await this.updateRasterFunction(), s = Math.round(s), a = Math.round(a), this.raster.fetchPixels(i, s, a, r));
    }
    async identify(i, s = {}) {
      await this.load();
      const { raster: a, serviceRasterInfo: r } = this;
      if (r?.multidimensionalInfo != null && !(r.hasMultidimensionalTranspose && (lt(s.multidimensionalDefinition) || s.transposedVariableName || s.timeExtent)) && (s = this.normalizeRasterFetchOptions(s)).multidimensionalDefinition == null)
        return { location: i, value: null };
      const o = this.multidimensionalSubset?.areaOfInterest;
      if (o && !o.contains(i)) throw new O("imagery-tile-mixin:identify", "the request cannot be fulfilled when falling outside of the multidimensional subset");
      return a.identify(i, s);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      const i = this.serviceRasterInfo?.multidimensionalInfo;
      if (i == null || this.serviceRasterInfo?.dataType !== "standard-time") return !1;
      const s = this.multidimensionalDefinition, a = s?.[0]?.variableName;
      return i.variables.some((r) => r.name === a && (!s?.[0].dimensionName || r.dimensions.some((o) => o.name === "StdTime")));
    }
    getStandardTimeValue(i) {
      return new Date(24 * (i - 25569) * 3600 * 1e3).toString();
    }
    getMultidimensionalSubsetVariables(i) {
      const s = i ?? this.serviceRasterInfo?.multidimensionalInfo;
      return Wt(this.multidimensionalSubset, s);
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = Ve(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset })), this.rasterFunction && this.raster.datasetFormat === "Function" && (this._cachedRasterFunctionJson = this.rasterFunction.toJSON()), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null) return this._rasterJobHandler.connectionPromise;
      const i = new Vt();
      return this._rasterJobHandler.connectionPromise = i.initialize().then(async () => {
        n(this), this._rasterJobHandler.instance = i, this.raster.rasterJobHandler = i, this.raster.datasetFormat === "Function" && this.raster.syncJobHandler(), this.rasterFunction && await this.updateRasterFunction().catch(() => {
        }), this.renderer && this.updateRenderer();
      }).catch(() => {
      }), this._rasterJobHandler.connectionPromise;
    }
    _shutdownJobHandler() {
      this._rasterJobHandler.instance && this._rasterJobHandler.instance.destroy(), this._rasterJobHandler.instance = null, this._rasterJobHandler.connectionPromise = null, this._rasterJobHandler.refCount = 0, this._cachedRendererJson = null, this.raster && (this.raster.rasterJobHandler = null);
    }
    _configDefaultInterpolation() {
      if (this.interpolation == null) {
        n(this);
        const { raster: i } = this, s = Gt(i.rasterInfo, i.tileType, this.sourceJSON?.defaultResamplingMethod);
        this._set("interpolation", s);
      }
    }
    _configDefaultRenderer(i = "no") {
      n(this);
      const { rasterInfo: s } = this.raster;
      !this.bandIds && s.bandCount > 1 && (this.bandIds = jt(s));
      const a = Ye(s, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), r = a?.name, o = Ut(this.raster);
      if (!this.renderer || i === "override") {
        const h = Qe(s, { bandIds: this.bandIds, variableName: r, rasterFunctionColorRamp: o }), f = s.statistics, d = f && f.length > 0 ? f[0] : null, y = d?.max ?? 0, g = d?.min ?? 0;
        this.raster.datasetFormat === "WCSServer" && h.type === "raster-stretch" && (y > 1e24 || g < -1e24) && (h.dynamicRangeAdjustment = !0, h.statistics = null, h.stretchType === "none" && (h.stretchType = "min-max")), this.renderer = h;
      }
      const l = Xe({ ...this.renderer.toJSON(), variableName: r }), c = Ke(s, r);
      this.symbolizer ? (this.symbolizer.rendererJSON = l, this.symbolizer.rasterInfo = c) : this.symbolizer = new qt({ rendererJSON: l, rasterInfo: c });
      const u = this.symbolizer.bind();
      if (u.success) {
        if (i === "auto") {
          const { colormap: h } = this.raster.rasterInfo, f = this.renderer;
          if (h != null && f.type === "raster-colormap") {
            const d = Qe(this.raster.rasterInfo);
            JSON.stringify(d) !== JSON.stringify(f) && this._configDefaultRenderer("override");
          } else if (f.type === "raster-stretch") {
            const d = this.bandIds?.length, y = f.statistics?.length;
            !f.dynamicRangeAdjustment && y && d && y !== d && this._configDefaultRenderer("override");
          }
        }
      } else ae.getLogger(this).warn("imagery-tile-mixin", u.error || "The given renderer is not supported by the layer."), i === "auto" && this._configDefaultRenderer("override");
    }
  };
  function n(i) {
    if (!i.raster || !i.serviceRasterInfo) throw new O("imagery-tile", "no raster");
  }
  return b([R({ clonable: !1 })], e.prototype, "_cachedRendererJson", void 0), b([R({ clonable: !1 })], e.prototype, "_cachedRasterFunctionJson", void 0), b([R({ clonable: !1 })], e.prototype, "_compatibleFullExtent", void 0), b([R({ clonable: !1 })], e.prototype, "_isConstructedFromFunctionRaster", void 0), b([R({ clonable: !1 })], e.prototype, "_rasterJobHandler", void 0), b([R()], e.prototype, "bandIds", void 0), b([R({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], e.prototype, "copyright", void 0), b([R({ json: { read: !1 } })], e.prototype, "fullExtent", null), b([R()], e.prototype, "interpolation", void 0), b([R()], e.prototype, "ioConfig", void 0), b([R({ type: [Ae], json: { write: !0 } })], e.prototype, "multidimensionalDefinition", null), b([R({ type: Pt, json: { write: !0 } })], e.prototype, "multidimensionalSubset", void 0), b([R()], e.prototype, "raster", void 0), b([R({ type: Pe, json: { name: "renderingRule", write: !0 } })], e.prototype, "rasterFunction", null), b([R({ readOnly: !0 })], e.prototype, "rasterInfo", null), b([R()], e.prototype, "serviceRasterInfo", void 0), b([R()], e.prototype, "sourceJSON", void 0), b([R({ readOnly: !0, type: H, json: { read: !1 } })], e.prototype, "spatialReference", void 0), b([R({ type: te })], e.prototype, "tileInfo", void 0), b([R(ft)], e.prototype, "url", null), b([R({ types: $t, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
    const i = this.renderer?.type === "raster-stretch" && this.renderer.stretchType === "none" && !this.renderer.useGamma;
    return { enabled: !this.loaded || this.raster.tileType === "Raster" || !i };
  } }, origins: { "web-scene": { types: Dt, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (i) => ({ enabled: i && i.type !== "vector-field" && i.type !== "flow" }) } } } } })], e.prototype, "renderer", null), b([Nt("renderer")], e.prototype, "readRenderer", null), b([R({ clonable: !1 })], e.prototype, "symbolizer", void 0), e = b([K("esri.layers.mixins.ImageryTileMixin")], e), e;
};
function yt(t) {
  return ["x", "e", "east", "long", "longitude"].includes(t.toLowerCase());
}
function gt(t) {
  return ["y", "n", "west", "lat", "latitude"].includes(t.toLowerCase());
}
function rs(t) {
  const { axes: e } = t.domain, n = Object.keys(e), i = [], s = [];
  let a = -1, r = -1, o = [];
  for (let x = 0; x < n.length; x++) {
    const I = n[x];
    yt(I) ? a = x : gt(I) && (r = x);
    const w = e[I], T = [];
    if ("values" in w) {
      w.values.forEach((S) => T.push(typeof S == "string" ? new Date(S).getTime() : S));
      const v = T[1] - T[0];
      i.push([T[0] - 0.5 * v, T[T.length - 1] + 0.5 * v]), s.push(v);
    } else {
      const { start: v, stop: S, num: k } = w, _ = (S - v) / (k - 1);
      i.push([v - 0.5 * _, S + 0.5 * _]), s.push(_);
      for (let M = 0; M < k; M++) T.push(v + _ * M);
    }
    o.push({ name: I, values: T, extent: [T[0], T[T.length - 1]] });
  }
  a > -1 && r === -1 ? r = a === 0 ? 1 : 0 : r > -1 && a === -1 ? a = r === 0 ? 1 : 0 : r === -1 && a === -1 && (a = 0, r = 1), o = o.filter((x, I) => !(I === a || I === r));
  const { referencing: l } = t.domain, c = l.find((x) => x.coordinates.includes(n[a])).system.id, u = c?.slice(c.lastIndexOf("/") + 1), h = u == null || u === "CRS84" ? 4326 : Number(u), f = new H({ wkid: h }), [d, y] = i[a], [g, m] = i[r], p = new L({ xmin: d, xmax: y, ymin: g, ymax: m, spatialReference: f });
  return { width: Math.round(p.width / s[a]), height: Math.round(p.height / s[r]), extent: p, dimensions: o };
}
function Fe(t) {
  const e = Kt();
  return e ? t[e] ?? Object.values(t)[0] : Object.values(t)[0];
}
function ke() {
  return Math.round(255 * Math.random());
}
function as(t) {
  const e = {}, { parameters: n } = t;
  if (!n) return e;
  for (const [i, s] of Object.entries(n)) {
    const { type: a, description: r, unit: o, categoryEncoding: l, observedProperty: c } = s;
    if (a === "Parameter" && (e[i] = {}, r && (e[i].description = Fe(r)), o && (e[i].unit = o.label ? Fe(o.label) : null, e[i].symbol = o.symbol?.value), l)) {
      const u = Object.entries(l).map((d, y) => ({ OID: y, Value: Number(d[1]), ClassName: d[0].slice(d[0].lastIndexOf("/") + 1), Count: 1 }));
      let h = !1;
      c?.categories?.length && (c.categories.forEach((d) => {
        if (!d.id) return;
        const y = d.id.slice(d.id.lastIndexOf("/") + 1), g = u.find((p) => p.ClassName === y);
        if (!g) return;
        const m = d.label ? Fe(d.label) : null;
        if (g.Label = m, d.preferredColor) {
          const p = Yt.fromHex(d.preferredColor);
          p && (h = !0, g.Red = p.r, g.Green = p.g, g.Blue = p.b);
        }
      }), h && u.forEach((d) => {
        d.Red == null && (d.Red = ke(), d.Green = ke(), d.Blue = ke());
      }));
      const f = { objectIdFieldName: "", fields: [{ name: "OID", type: "esriFieldTypeOID", alias: "OID", domain: null }, { name: "Value", type: "esriFieldTypeInteger", alias: "Value", domain: null }, { name: "Count", type: "esriFieldTypeDouble", alias: "Count", domain: null }, { name: "ClassName", type: "esriFieldTypeString", alias: "ClassName", domain: null, length: 50 }, { name: "Label", type: "esriFieldTypeString", alias: "Label", domain: null, length: 50 }], features: u.map((d) => ({ attributes: d })) };
      h && f.fields.push({ name: "Red", type: "esriFieldTypeInteger", alias: "Red", domain: null }, { name: "Green", type: "esriFieldTypeInteger", alias: "Green", domain: null }, { name: "Blue", type: "esriFieldTypeInteger", alias: "Blue", domain: null }), e[i].attributeTable = f;
    }
  }
  return e;
}
function os(t) {
  let e = Number.MAX_VALUE, n = -Number.MAX_VALUE;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    s != null && (s < e && (e = s), s > n && (n = s));
  }
  return Xt(e, n);
}
function ls(t, e, n) {
  const i = t.map((l, c) => ({ name: l, count: e[c] })).sort((l, c) => l.name > c.name ? -1 : 1), s = (a = 1, (l) => a *= l.count);
  var a;
  const r = [...i.slice(1), { name: "", count: 1 }].reverse().map(s).reverse();
  let o = 0;
  for (let l = t.length - 1; l >= 0; l--)
    o += r[i.findIndex(({ name: c }) => c === t[l])] * (n % e[l]), n = Math.floor(n / e[l]);
  return o;
}
function cs(t) {
  const { width: e, height: n, extent: i, dimensions: s } = rs(t), { ranges: a } = t, r = Object.keys(a).sort((f, d) => f < d ? -1 : 1), o = [];
  for (let f = 0; f < r.length; f++) {
    const d = r[f];
    s?.length && o.push({ name: d, dimensions: s });
  }
  const l = as(t);
  o.forEach((f) => l[f.name] && Object.assign(f, l[f.name]));
  const c = o.length ? { variables: o } : void 0, u = [];
  for (let f = 0; f < r.length; f++) {
    const d = r[f], { values: y, dataType: g, axisNames: m, shape: p } = a[d], x = p.length > 2 ? f * p.slice(0, -2).reduce((k, _) => k * _) : 0, I = m.slice(0, -2), w = p.slice(0, -2), T = g === "float" ? "f32" : os(y), v = e * n, S = y.length / v;
    for (let k = 0; k < S; k++) {
      const _ = q.createEmptyBand(T, v), M = new Uint8Array(v).fill(255);
      let F = !1;
      const P = k * v;
      for (let C = 0; C < v; C++) {
        const $ = y[P + C];
        $ == null ? (M[C] = 0, F = !0) : _[C] = $;
      }
      if (f === 0 || s?.length) {
        const C = new q({ width: e, height: n, mask: F ? M : null, pixels: [_], pixelType: T });
        C.updateStatistics(), s?.length ? u[ls(I, w, k) + x] = C : u.push(C);
      } else {
        const C = u[k];
        C.pixels.push(_), F ? C.mask && (C.mask = q.combineBandMasks([C.mask, M])) : C.mask = F ? M : null;
      }
    }
  }
  const h = Object.values(l).find((f) => f.attributeTable)?.attributeTable;
  return { extent: i, pixelBlocks: u, multidimensionalInfo: c, attributeTable: h, bandNames: c ? void 0 : r };
}
let le = class extends oe {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY", this.source = null;
  }
  get url() {
    return "";
  }
  async open(t) {
    await this.init();
    const e = this.source, { pixelBlocks: n, attributeTable: i, statistics: s, histograms: a, name: r, nativeExtent: o, transform: l } = e, c = n[0], { width: u, height: h, pixelType: f } = c, d = e.extent ?? new L({ xmin: -0.5, ymin: 0.5, xmax: u - 0.5, ymax: h - 0.5, spatialReference: new H({ wkid: 3857 }) }), y = e.isPseudoSpatialReference ?? !e.extent, g = { x: d.width / u, y: d.height / h }, m = { ...e.keyProperties };
    i && (m.DataType = "Thematic");
    const p = new ve({ width: u, height: h, pixelType: f, extent: d, nativeExtent: o, attributeTable: i, transform: l, pixelSize: g, spatialReference: d.spatialReference, bandCount: c.pixels.length, keyProperties: m, multidimensionalInfo: e.multidimensionalInfo, statistics: s, isPseudoSpatialReference: y, histograms: a });
    this.ioConfig.skipMapInfo && this.updateImageSpaceRasterInfo(p), this.createRemoteDatasetStorageInfo(p, 512, 512), this._set("rasterInfo", p), this.updateTileInfo(), p.multidimensionalInfo ? await this._buildMDimStats(e.pixelBlocks, p.multidimensionalInfo) : await this._buildInMemoryRaster(c, { width: 512, height: 512 }, t), p.multidimensionalInfo || (this.source = null), this.datasetName = r;
  }
  fetchRawTile(t, e, n, i = {}) {
    if (!this._pixelBlockTiles) {
      const { rasterInfo: a } = this, [r, o] = a.storageInfo.tileInfo.size, { sliceId: l } = i, { pixelBlocks: c } = this.source, u = { pixelBlock: l == null ? c[0] : c[l], useBilinear: a.dataType !== "thematic", tileSize: { width: r, height: o }, level: t, row: e, col: n }, h = this.rasterJobHandler ? this.rasterJobHandler.clipTile(u, i) : Qt(u);
      return Promise.resolve(h);
    }
    const s = this._pixelBlockTiles.get(`${t}/${e}/${n}`);
    return Promise.resolve(s);
  }
  async _buildInMemoryRaster(t, e, n) {
    const { rasterInfo: i } = this, s = i.storageInfo.maximumPyramidLevel ?? 0, a = i.dataType !== "thematic", r = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: t, tileSize: e, maximumPyramidLevel: s, useBilinear: a }, n) : Promise.resolve(Zt(t, e, s, a)), o = i.statistics != null, l = i.histograms != null, c = this.ioConfig.skipStatistics || o ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: t }, n) : Promise.resolve(ei(t)), u = await mt([r, c]);
    if (!u[0].value && u[1].value) throw new O("inmemory-raster:open", "failed to build in memory raster");
    this._pixelBlockTiles = u[0].value, o || (i.statistics = u[1].value?.statistics), l || (i.histograms = u[1].value?.histograms);
  }
  async _buildMDimStats(t, e, n) {
    for (let i = 0; i < e.variables.length; i++) {
      const s = e.variables[i];
      if (s.statistics) continue;
      const a = s.dimensions.map((c) => new Ae({ variableName: s.name, dimensionName: c.name, values: [c.values?.[0] ?? c.extent?.[0]], isSlice: !0 })), r = ut(a, e), o = r == null ? null : t[r];
      if (o == null) continue;
      const l = this.rasterJobHandler ? await this.rasterJobHandler.computeStatisticsHistograms({ pixelBlock: o }, n) : He(o);
      s.statistics = l.statistics, s.histograms || (s.histograms = l.histograms);
    }
  }
};
b([R({ type: String, json: { write: !0 } })], le.prototype, "datasetFormat", void 0), b([R()], le.prototype, "source", void 0), b([R()], le.prototype, "url", null), le = b([K("esri.layers.support.rasterDatasets.InMemoryRaster")], le);
const Ge = le;
let fe = class extends oe {
  constructor() {
    super(...arguments), this.datasetFormat = "CovJSON";
  }
  async open(e) {
    await this.init();
    const { extent: n, pixelBlocks: i, multidimensionalInfo: s, attributeTable: a, bandNames: r } = await this._fetchData(e), { statistics: o, histograms: l } = He(i[0]), c = r?.map((d) => ({ BandName: d })), u = { DataType: a ? "Thematic" : s ? "Scientific" : "Generic", BandProperties: c }, h = new Ge({ source: { extent: n, pixelBlocks: i, attributeTable: a ? Le.fromJSON(a) : null, multidimensionalInfo: s, statistics: o, histograms: l, keyProperties: u, isPseudoSpatialReference: !1 } });
    await h.open(), this._inMemoryRaster = h;
    const f = this.source ? "" : this.url.slice(this.url.lastIndexOf("/") + 1);
    this._set("datasetName", f.slice(0, f.indexOf("."))), this._set("rasterInfo", h.rasterInfo);
  }
  fetchRawTile(e, n, i, s = {}) {
    return this._inMemoryRaster.fetchRawTile(e, n, i, s);
  }
  async _fetchData(e) {
    const n = this.source ?? (await this.request(this.url, { signal: e?.signal })).data, i = "imagery-tile-layer:open-coverage-json";
    if (n.type?.toLowerCase() !== "coverage" || n.domain?.domainType?.toLowerCase() !== "grid") throw new O(i, "Only coverage with Grid domain type is supported");
    if (!n.ranges) throw new O(i, "Missing ranges in the grid coverage data");
    if (!n.domain.referencing?.length) throw new O(i, "Missing domain referencing in the grid coverage data");
    const s = Object.values(n.ranges);
    for (let a = 0; a < s.length; a++) {
      const { axisNames: r, shape: o, type: l, values: c } = s[a];
      if (!(l.toLowerCase() === "ndarray" && c?.length && r?.length && o?.length)) throw new O(i, "Only ranges with valid NdArray, axisNames, shape, and inline values are supported");
      if (!(yt(r[r.length - 1]) && gt(r[r.length - 2]))) throw new O(i, "Only row-major ordered pixel values are supported. X axis must be the last axis.");
    }
    return cs(n);
  }
};
b([R({ type: String, json: { write: !0 } })], fe.prototype, "datasetFormat", void 0), b([R({ constructOnly: !0 })], fe.prototype, "source", void 0), fe = b([K("esri.layers.support.rasterDatasets.CovJSONRaster")], fe);
const us = fe;
function he(t, e) {
  if (!t || !e) return [];
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const i = [];
  if (e) {
    const a = he(t, n);
    for (let r = 0; r < a.length; r++)
      he(a[r], e).forEach((o) => i.push(o));
    return i;
  }
  const s = t.getElementsByTagNameNS("*", n);
  if (!s || s.length === 0) return [];
  for (let a = 0; a < s.length; a++) i.push(s[a] || s.item(a));
  return i;
}
function j(t, e) {
  if (!t || !e) return null;
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const i = he(t, n);
  return i.length > 0 ? e ? j(i[0], e) : i[0] : null;
}
function X(t, e = null) {
  const n = e ? j(t, e) : t;
  let i;
  return n ? (i = n.textContent || n.nodeValue, i ? i.trim() : null) : null;
}
function hs(t, e) {
  const n = he(t, e), i = [];
  let s;
  for (let a = 0; a < n.length; a++) s = n[a].textContent || n[a].nodeValue, s && (s = s.trim(), s !== "" && i.push(s));
  return i;
}
function xe(t, e) {
  return hs(t, e).map((n) => Number(n));
}
function re(t, e) {
  const n = X(t, e);
  return Number(n);
}
function Me(t, e) {
  const n = t?.nodeName?.toLowerCase(), i = e.toLowerCase();
  return n.slice(n.lastIndexOf(":") + 1) === i;
}
function at(t, e) {
  if (!t || !e) return null;
  const n = [];
  for (let i = 0; i < t.length; i++) n.push(t[i]), n.push(e[i]);
  return n;
}
function fs(t) {
  const e = j(t, "GeodataXform"), n = Se(re(e, "SpatialReference/WKID") || X(e, "SpatialReference/WKT"));
  if (e.getAttribute("xsi:type") !== "typens:PolynomialXform") return { spatialReference: n, transform: null };
  const i = re(e, "PolynomialOrder") ?? 1, s = xe(e, "CoeffX/Double"), a = xe(e, "CoeffY/Double"), r = xe(e, "InverseCoeffX/Double"), o = xe(e, "InverseCoeffY/Double"), l = at(s, a), c = at(r, o);
  return { spatialReference: n, transform: l && c && l.length && c.length ? new We({ spatialReference: n, polynomialOrder: i, forwardCoefficients: l, inverseCoefficients: c }) : null };
}
function ms(t) {
  const e = re(t, "NoDataValue"), n = j(t, "Histograms/HistItem"), i = re(n, "HistMin"), s = re(n, "HistMax"), a = re(n, "BucketCount"), r = X(n, "HistCounts")?.split("|").map((f) => Number(f));
  let o, l, c, u;
  he(t, "Metadata/MDI").forEach((f) => {
    const d = Number(f.textContent ?? f.nodeValue);
    switch (f.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        o = d;
        break;
      case "STATISTICS_MAXIMUM":
        l = d;
        break;
      case "STATISTICS_MEAN":
        c = d;
        break;
      case "STATISTICS_STDDEV":
        u = d;
    }
  });
  const h = re(t, "Metadata/SourceBandIndex");
  return { noDataValue: e, histogram: r?.length && i != null && s != null ? { min: i, max: s, size: a || r.length, counts: r } : null, sourceBandIndex: h, statistics: o != null && l != null ? { min: o, max: l, avg: c, stddev: u } : null };
}
function Se(t) {
  if (!t) return null;
  let e = Number(t);
  if (!isNaN(e) && e !== 0) return new H({ wkid: e });
  if (t = String(t).trim(), ti(t)) return new H({ wkt2: t });
  const n = t.toUpperCase();
  if (n.startsWith("COMPD_CS")) {
    if (!n.includes("VERTCS") || !n.includes("GEOGCS") && !n.startsWith("PROJCS")) return null;
    const i = n.indexOf("VERTCS"), s = n.indexOf("PROJCS"), a = s > -1 ? s : n.indexOf("GEOGCS");
    if (a === -1) return null;
    const r = t.slice(a, t.lastIndexOf("]", i) + 1).trim(), o = t.slice(i, t.lastIndexOf("]")).trim();
    e = Ce(r);
    const l = new H(e ? { wkid: e } : { wkt: r }), c = Ce(o);
    return c && (l.vcsWkid = c), l;
  }
  return n.startsWith("GEOGCS") || n.startsWith("PROJCS") ? (e = Ce(t), new H(e !== 0 ? { wkid: e } : { wkt: t })) : null;
}
function Ce(t) {
  const e = t.replaceAll("]", "[").replaceAll('"', "").split("[").map((s) => s.trim()).filter((s) => s !== ""), n = e[e.length - 1].split(","), i = n[0]?.toLowerCase();
  if ((i === "epsg" || i === "esri") && t.endsWith('"]]')) {
    const s = Number(n[1]);
    if (!isNaN(s) && s !== 0) return s;
  }
  return 0;
}
function je(t) {
  if (t?.documentElement.tagName?.toLowerCase() !== "pamdataset") return {};
  const e = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  t.documentElement.childNodes.forEach((i) => {
    if (i.nodeType === 1) {
      if (Me(i, "SRS")) {
        if (!e.spatialReference) {
          const s = X(i);
          e.spatialReference = Se(s);
        }
      } else if (Me(i, "Metadata")) if (i.getAttribute("domain") === "xml:ESRI") {
        const { spatialReference: s, transform: a } = fs(i);
        e.transform = a, e.spatialReference || (e.spatialReference = s);
      } else
        he(i, "MDI").forEach((s) => e.metadata[s.getAttribute("key")] = X(s));
      else if (Me(i, "PAMRasterBand")) {
        const s = ms(i);
        s.sourceBandIndex != null && e.rasterBands[s.sourceBandIndex] == null ? e.rasterBands[s.sourceBandIndex] = s : e.rasterBands.push(s);
      }
    }
  });
  const n = e.rasterBands;
  if (n.length) {
    const i = !!n[0].statistics;
    e.statistics = i ? n.map((a) => a.statistics).filter($e) : null;
    const s = !!n[0].histogram;
    e.histograms = s ? n.map((a) => a.histogram).filter($e) : null;
  }
  return e;
}
let be = class extends oe {
  async open(t) {
    await this.init();
    const e = await this._fetchData(t);
    let { spatialReference: n, statistics: i, histograms: s, transform: a } = await this._fetchAuxiliaryData(t);
    const r = !n;
    r && (n = new H({ wkid: 3857 })), s?.length && i == null && (i = ze(s));
    const { width: o, height: l } = e;
    let c = new L({ xmin: -0.5, ymin: 0.5 - l, xmax: o - 0.5, ymax: 0.5, spatialReference: n });
    const u = a ? a.forwardTransform(c) : c;
    let h = !0;
    if (a) {
      const d = a.forwardCoefficients;
      h = d && d[1] === 0 && d[2] === 0, h && (a = null, c = u);
    }
    const f = new Ge({ source: { extent: u, nativeExtent: c, transform: a, pixelBlocks: [e], statistics: i, histograms: s, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: r }, ioConfig: { sampling: "closest", skipStatistics: !0 } });
    this.ioConfig.skipMapInfo && (f.ioConfig.skipMapInfo = !0), await f.open(), f.source = null, this._set("rasterInfo", f.rasterInfo), this._inMemoryRaster = f;
  }
  fetchRawTile(t, e, n, i = {}) {
    return this._inMemoryRaster.fetchRawTile(t, e, n, i);
  }
  async _fetchData(t) {
    const { data: e } = await this.request(this.url, { responseType: "array-buffer", signal: t?.signal }), n = ii(e).toUpperCase();
    if (n !== "JPG" && n !== "PNG" && n !== "GIF" && n !== "BMP") throw new O("image-aux-raster:open", "the data is not a supported format");
    this._set("datasetFormat", n);
    const i = n.toLowerCase(), s = i === "gif" || i === "bmp" || !si("ios"), a = await this.decodePixelBlock(e, { format: i, useCanvas: s, hasNoZlibMask: !0 });
    if (a == null) throw new O("image-aux-raster:open", "the data cannot be decoded");
    return a;
  }
  async _fetchAuxiliaryData(t) {
    const e = t?.signal, { skipExtensions: n = [], skipMapInfo: i } = this.ioConfig, s = i || n.includes("aux.xml") ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: e }), a = this.datasetFormat, r = a === "JPG" ? "jgw" : a === "PNG" ? "pgw" : a === "BMP" ? "bpw" : null, o = r && n.includes(r) ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + r, { responseType: "text", signal: e }), l = await mt([s, o]);
    if (e?.aborted) throw ni();
    const c = je(l[0].value?.data);
    if (!c.transform) {
      const u = l[1].value ? l[1].value.data.split(`
`).slice(0, 6).map((h) => Number(h)) : null;
      c.transform = u?.length === 6 ? new We({ forwardCoefficients: [u[4], u[5], u[0], -u[1], u[2], -u[3]] }) : null;
    }
    return c;
  }
};
b([R({ type: String, json: { write: !0 } })], be.prototype, "datasetFormat", void 0), be = b([K("esri.layers.support.rasterDatasets.ImageAuxRaster")], be);
const we = be;
let me = class extends oe {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._tilemapCache = null, this._slices = null, this.datasetFormat = "RasterTileServer", this.tileType = null;
  }
  async open(t) {
    await this.init();
    const e = t?.signal, n = this.sourceJSON ? { data: this.sourceJSON } : await this.request(this.url, { query: { f: "json" }, signal: e });
    n.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const i = n.data;
    if (this.sourceJSON = i, !i) throw new O("imageserverraster:open", "cannot initialize tiled image service, missing service info");
    if (!i.tileInfo) throw new O("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
    this._fixScaleInServiceInfo();
    const s = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
    this.tileType = i.cacheType, this.tileType == null && (s.includes(i.tileInfo.format.toLowerCase()) ? this.tileType = "Map" : i.tileInfo.format.toLowerCase() === "lerc" ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = i.name?.slice(i.name.indexOf("/") + 1) ?? "";
    const a = await this._fetchRasterInfo({ signal: e });
    if (a == null) throw new O("image-server-raster:open", "cannot initialize image service");
    ri(a, i);
    const r = this.tileType === "Map" ? ds(i.tileInfo, i) : te.fromJSON(i.tileInfo);
    ai(r);
    const [o, l] = this._computeMinMaxLOD(a, r), { extent: c, pixelSize: u } = a, h = 0.5 / a.width * u.x, f = Math.max(u.x, u.y), { lods: d } = r;
    (this.tileType !== "Map" && i.maxScale !== 0 || Math.abs(u.x - u.y) > h || !d.some((S) => Math.abs(S.resolution - f) < h)) && (u.x = u.y = o.resolution, a.width = Math.ceil((c.xmax - c.xmin) / u.x - 0.1), a.height = Math.ceil((c.ymax - c.ymin) / u.y - 0.1));
    const y = o.level - l.level, [g, m] = r.size, p = [], x = [];
    d.forEach((S, k) => {
      S.level >= l.level && S.level <= o.level && p.push({ x: S.resolution, y: S.resolution }), k < d.length - 1 && x.push(Math.round(10 * S.resolution / d[k + 1].resolution) / 10);
    }), p.sort((S, k) => S.x - k.x);
    const I = this.computeBlockBoundary(c, g, m, r.origin, p, y), w = p.length > 1 ? p.slice(1) : null;
    let T;
    i.transposeInfo && (T = { tileSize: [i.transposeInfo.rows, i.transposeInfo.cols], packetSize: a.keyProperties?._yxs.PacketSize ?? 0 });
    const v = x.length <= 1 || x.length >= 3 && x.slice(0, -1).every((S) => S === x[0]) ? x[0] ?? 2 : Math.round(10 / (l.resolution / o.resolution) ** (-1 / y)) / 10;
    if (a.storageInfo = new Re({ blockWidth: r.size[0], blockHeight: r.size[1], pyramidBlockWidth: r.size[0], pyramidBlockHeight: r.size[1], pyramidResolutions: w, pyramidScalingFactor: v, compression: r.format, origin: r.origin, firstPyramidLevel: 1, maximumPyramidLevel: y, tileInfo: r, transposeInfo: T, blockBoundary: I }), ps(a), this._set("rasterInfo", a), i.capabilities.toLowerCase().includes("tilemap")) {
      const S = { tileInfo: a.storageInfo.tileInfo, parsedUrl: oi(this.url), url: this.url, tileServers: [] };
      this._tilemapCache = new li({ layer: S });
    }
  }
  async fetchRawTile(t, e, n, i = {}) {
    const { storageInfo: s, extent: a } = this.rasterInfo, { transposeInfo: r } = s, o = r != null && !!i.transposedVariableName;
    if (this._slices && !o && i.sliceId == null) return null;
    const l = o ? 0 : s.maximumPyramidLevel - t + this._levelOffset, c = `${this.url}/tile/${l}/${e}/${n}`, u = this._slices ? o ? { variable: i.transposedVariableName } : { sliceId: i.sliceId || 0 } : null, { data: h } = await this.request(c, { query: u, responseType: "array-buffer", signal: i.signal });
    if (!h) return null;
    const f = o ? r.tileSize : s.tileInfo.size, d = await this.decodePixelBlock(h, { width: f[0], height: f[1], planes: null, pixelType: null, isPoint: this.tileType === "Elevation", returnInterleaved: o, noDataValue: this.rasterInfo.noDataValue });
    if (d == null) return null;
    const y = s.blockBoundary[t];
    if (s.compression !== "jpg" || n > y.minCol && n < y.maxCol && e > y.minRow && e < y.maxRow) return d;
    const { origin: g, blockWidth: m, blockHeight: p } = s, { x, y: I } = this.getPyramidPixelSize(t), w = Math.round((a.xmin - g.x) / x) % m, T = Math.round((a.xmax - g.x) / x) % m || m, v = Math.round((g.y - a.ymax) / I) % p, S = Math.round((g.y - a.ymin) / I) % p || p, k = n === y.minCol ? w : 0, _ = e === y.minRow ? v : 0, M = n === y.maxCol ? T : m, F = e === y.maxRow ? S : p;
    return ci(d, { x: k, y: _ }, { width: M - k, height: F - _ }), d;
  }
  getSliceIndex(t) {
    if (!this._slices || t == null || t.length === 0) return null;
    const e = t;
    for (let n = 0; n < this._slices.length; n++) {
      const i = this._slices[n].multidimensionalDefinition;
      if (i.length === e.length && !i.some((s) => {
        const a = e.find((r) => s.variableName === r.variableName && r.dimensionName === s.dimensionName);
        return a ? (Array.isArray(s.values[0]) ? `${s.values[0][0]}-${s.values[0][1]}` : s.values[0]) !== (Array.isArray(a.values[0]) ? `${a.values[0][0]}-${a.values[0][1]}` : a.values[0]) : !0;
      })) return n;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(t, e) {
    const n = this.request(this.url + "/statistics", { query: { variable: t, f: "json" }, signal: e }).then((a) => a.data?.statistics), i = this.request(this.url + "/histograms", { query: { variable: t, f: "json" }, signal: e }).then((a) => a.data?.histograms), s = await Promise.all([n, i]);
    return s[0] && s[0].forEach((a) => {
      a.avg = a.mean, a.stddev = a.standardDeviation;
    }), s[1]?.[0]?.counts?.length || (s[1] = null), { statistics: s[0] || null, histograms: s[1] || null };
  }
  async computeBestPyramidLevelForLocation(t, e = {}) {
    if (!this._tilemapCache) return 0;
    let n = this.identifyPixelLocation(t, 0, e.datumTransformation);
    if (n === null) return null;
    let i = 0;
    const { maximumPyramidLevel: s } = this.rasterInfo.storageInfo;
    let a = s - i + this._levelOffset;
    const r = n.srcLocation;
    for (; a >= 0; ) {
      try {
        if (await this._tilemapCache.fetchAvailability(a, n.row, n.col, e) === "available") break;
      } catch {
      }
      if (a--, i++, n = this.identifyPixelLocation(r, i, e.datumTransformation), n === null) return null;
    }
    return a === -1 || n == null ? null : i;
  }
  async _fetchRasterInfo(t) {
    const e = this.sourceJSON;
    if (this.tileType === "Map") {
      const r = e.fullExtent || e.extent, o = Math.ceil((r.xmax - r.xmin) / e.pixelSizeX - 0.1), l = Math.ceil((r.ymax - r.ymin) / e.pixelSizeY - 0.1), c = H.fromJSON(e.spatialReference || r.spatialReference), u = new A({ x: e.pixelSizeX, y: e.pixelSizeY, spatialReference: c });
      return new ve({ width: o, height: l, bandCount: 3, extent: L.fromJSON(r), spatialReference: c, pixelSize: u, pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
    }
    const { signal: n } = t, i = ui(this.url, this.sourceJSON, { signal: n, query: this.ioConfig.customFetchParameters }), s = e.hasMultidimensions ? this.request(`${this.url}/slices`, { query: { f: "json" }, signal: n }).then((r) => r.data?.slices).catch(() => null) : null, a = await Promise.all([i, s]);
    return this._slices = a[1], a[0];
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: t } = this;
    t.minScale && t.minScale < 0 && (t.minScale = 0), t.maxScale && t.maxScale < 0 && (t.maxScale = 0);
  }
  _computeMinMaxLOD(t, e) {
    const { pixelSize: n } = t, i = 0.5 / t.width * n.x, { lods: s } = e, a = e.lodAt(Math.max.apply(null, s.map((f) => f.level))), r = e.lodAt(Math.min.apply(null, s.map((f) => f.level))), { tileType: o } = this;
    if (o === "Map") return this._levelOffset = s[0].level, [a, r];
    if (o === "Raster")
      return [s.find((f) => f.resolution === n.x) ?? a, r];
    const { minScale: l, maxScale: c } = this.sourceJSON;
    let u = a;
    c > 0 && (u = s.find((f) => Math.abs(f.scale - c) < i), u || (u = s.filter((f) => f.scale > c).sort((f, d) => f.scale > d.scale ? 1 : -1)[0] ?? a));
    let h = r;
    return l > 0 && (h = s.find((f) => Math.abs(f.scale - l) < i) ?? r, this._levelOffset = h.level - r.level), [u, h];
  }
};
function ds(t, e) {
  if (!t) return null;
  const { minScale: n, maxScale: i, minLOD: s, maxLOD: a } = e;
  if (s != null && a != null) return te.fromJSON({ ...t, lods: t.lods.filter(({ level: r }) => r != null && r >= s && r <= a) });
  if (n !== 0 && i !== 0) {
    const r = (c) => Math.round(1e4 * c) / 1e4, o = n ? r(n) : 1 / 0, l = i ? r(i) : -1 / 0;
    return te.fromJSON({ ...t, lods: t.lods.filter((c) => {
      const u = r(c.scale);
      return u <= o && u >= l;
    }) });
  }
  return te.fromJSON(t);
}
function ps(t) {
  const { extent: e, spatialReference: n } = t;
  e.xmin > -1 && e.xmax > 181 && n?.wkid && n.isGeographic && (t.nativeExtent = t.extent, t.transform = new ji(), t.extent = t.transform.forwardTransform(e));
}
b([R({ type: String, json: { write: !0 } })], me.prototype, "datasetFormat", void 0), b([R()], me.prototype, "tileType", void 0), me = b([K("esri.layers.support.rasterDatasets.ImageServerRaster")], me);
const ys = me, Y = /* @__PURE__ */ new Map();
Y.set("Int8", "s8"), Y.set("UInt8", "u8"), Y.set("Int16", "s16"), Y.set("UInt16", "u16"), Y.set("Int32", "s32"), Y.set("UInt32", "u32"), Y.set("Float32", "f32"), Y.set("Float64", "f32"), Y.set("Double64", "f32");
const ee = /* @__PURE__ */ new Map();
ee.set("none", { blobExtension: ".til", isOneSegment: !0, decoderFormat: "bip" }), ee.set("lerc", { blobExtension: ".lrc", isOneSegment: !1, decoderFormat: "lerc" }), ee.set("deflate", { blobExtension: ".pzp", isOneSegment: !0, decoderFormat: "deflate" }), ee.set("jpeg", { blobExtension: ".pjg", isOneSegment: !0, decoderFormat: "jpg" });
let ce = class extends oe {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  async open(t) {
    await this.init(), this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const e = t ? t.signal : null, n = await this.request(this.url, { responseType: "xml", signal: e }), { rasterInfo: i, files: s } = this._parseHeader(n.data), { skipMapInfo: a, skipExtensions: r = [] } = this.ioConfig;
    if (!r.includes("aux.xml") && !a) {
      const p = await this._fetchAuxiliaryData(t);
      p != null && (i.statistics = p.statistics ?? i.statistics, i.histograms = p.histograms, p.histograms && i.statistics == null && (i.statistics = ze(p.histograms)));
    }
    a && this.updateImageSpaceRasterInfo(i), this._set("rasterInfo", i), this._files = s;
    const o = await this.request(s.index, { responseType: "array-buffer", signal: e });
    this._storageIndex = gs(o.data);
    const { blockWidth: l, blockHeight: c } = this.rasterInfo.storageInfo, u = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: h, height: f } = this.rasterInfo, d = [], y = this._getBandSegmentCount();
    let g = 0, m = -1;
    for (; g < this._storageIndex.length; ) {
      m++;
      const p = Math.ceil(h / l / u ** m) - 1, x = Math.ceil(f / c / u ** m) - 1;
      g += (p + 1) * (x + 1) * y * 4, d.push({ maxRow: x, maxCol: p, minCol: 0, minRow: 0 });
    }
    this.rasterInfo.storageInfo.blockBoundary = d, m > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = m), this.updateTileInfo();
  }
  async fetchRawTile(t, e, n, i = {}) {
    const { blockWidth: s, blockHeight: a, blockBoundary: r } = this.rasterInfo.storageInfo, o = r[t];
    if (!o || o.maxRow < e || o.maxCol < n || o.minRow > e || o.minCol > n) return null;
    const { bandCount: l, pixelType: c } = this.rasterInfo, { ranges: u, actualTileWidth: h, actualTileHeight: f } = this._getTileLocation(t, e, n);
    if (!u || u.length === 0) return null;
    if (u[0].from === 0 && u[0].to === 0) {
      const F = new Uint8Array(s * a);
      return new q({ width: s, height: a, pixels: void 0, mask: F, validPixelCount: 0 });
    }
    const { bandIds: d } = this.ioConfig, y = this._getBandSegmentCount(), g = [];
    let m = 0;
    for (m = 0; m < y; m++) d && !d.includes(m) || g.push(this.request(this._files.data, { range: { from: u[m].from, to: u[m].to }, responseType: "array-buffer", signal: i.signal }));
    const p = await Promise.all(g), x = p.map((F) => F.data.byteLength).reduce((F, P) => F + P), I = new Uint8Array(x), w = [];
    let T = 0;
    for (m = 0; m < y; m++) w.push(T), I.set(new Uint8Array(p[m].data), T), T += p[m].data.byteLength;
    const v = ee.get(this.rasterInfo.storageInfo.compression).decoderFormat, S = await this.decodePixelBlock(I.buffer, { width: s, height: a, format: v, planes: d?.length || l, offsets: w, pixelType: c });
    if (S == null) return null;
    let { noDataValue: k } = this.rasterInfo;
    if (k != null && v !== "lerc" && !S.mask && (k = k[0], k != null)) {
      const F = S.width * S.height, P = new Uint8Array(F);
      if (Math.abs(k) > 1e24) for (m = 0; m < F; m++) Math.abs((S.pixels[0][m] - k) / k) > 1e-6 && (P[m] = 1);
      else for (m = 0; m < F; m++) S.pixels[0][m] !== k && (P[m] = 1);
      S.mask = P;
    }
    let _ = 0, M = 0;
    if (h !== s || f !== a) {
      let F = S.mask;
      if (F) for (m = 0; m < a; m++) if (M = m * s, m < f) for (_ = h; _ < s; _++) F[M + _] = 0;
      else for (_ = 0; _ < s; _++) F[M + _] = 0;
      else for (F = new Uint8Array(s * a), S.mask = F, m = 0; m < f; m++) for (M = m * s, _ = 0; _ < h; _++) F[M + _] = 1;
    }
    return S;
  }
  _getBandSegmentCount() {
    return ee.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(t, e, n) {
    const { blockWidth: i, blockHeight: s, pyramidScalingFactor: a } = this.rasterInfo.storageInfo, { width: r, height: o } = this.rasterInfo, l = this._getBandSegmentCount();
    let c, u, h, f = 0, d = 0;
    for (h = 0; h < t; h++) d = a ** h, c = Math.ceil(r / i / d), u = Math.ceil(o / s / d), f += c * u;
    d = a ** t, c = Math.ceil(r / i / d), u = Math.ceil(o / s / d), f += e * c + n, f *= 4 * l;
    const y = this._storageIndex.subarray(f, f + 4 * l);
    let g = 0, m = 0;
    const p = [];
    for (let x = 0; x < l; x++) g = y[4 * x] * 2 ** 32 + y[4 * x + 1], m = g + y[4 * x + 2] * 2 ** 32 + y[4 * x + 3], p.push({ from: g, to: m });
    return { ranges: p, actualTileWidth: n < c - 1 ? i : Math.ceil(r / d) - i * (c - 1), actualTileHeight: e < u - 1 ? s : Math.ceil(o / d) - s * (u - 1) };
  }
  _parseHeader(t) {
    const e = j(t, "MRF_META/Raster");
    if (!e) throw new O("mrf:open", "not a valid MRF format");
    const n = j(e, "Size"), i = parseInt(n.getAttribute("x"), 10), s = parseInt(n.getAttribute("y"), 10), a = parseInt(n.getAttribute("c"), 10), r = (X(e, "Compression") || "none").toLowerCase();
    if (!ee.has(r)) throw new O("mrf:open", "currently does not support compression " + r);
    const o = X(e, "DataType") || "UInt8", l = Y.get(o);
    if (l == null) throw new O("mrf:open", "currently does not support pixel type " + o);
    const c = j(e, "PageSize"), u = parseInt(c.getAttribute("x"), 10), h = parseInt(c.getAttribute("y"), 10), f = j(e, "DataValues");
    let d, y;
    if (f && (y = f.getAttribute("NoData"), y != null && (d = y.trim().split(" ").map((F) => parseFloat(F)))), j(t, "MRF_META/CachedSource")) throw new O("mrf:open", "currently does not support MRF referencing other data files");
    const g = j(t, "MRF_META/GeoTags"), m = j(g, "BoundingBox");
    let p, x = !1;
    if (m != null) {
      const F = parseFloat(m.getAttribute("minx")), P = parseFloat(m.getAttribute("miny")), C = parseFloat(m.getAttribute("maxx")), $ = parseFloat(m.getAttribute("maxy")), D = X(g, "Projection") || "";
      let N = H.WGS84;
      if (D !== "LOCAL_CS[]") if (D.toLowerCase().startsWith("epsg:")) {
        const J = Number(D.slice(5));
        isNaN(J) || J === 0 || (N = new H({ wkid: J }));
      } else N = Se(D) ?? H.WGS84;
      else x = !0, N = new H({ wkid: 3857 });
      p = new L(F, P, C, $), p.spatialReference = N;
    } else x = !0, p = new L({ xmin: -0.5, ymin: 0.5 - s, xmax: i - 0.5, ymax: 0.5, spatialReference: new H({ wkid: 3857 }) });
    const I = j(t, "MRF_META/Rsets"), w = parseInt(I?.getAttribute("scale") || "2", 10), T = p.spatialReference, v = new Re({ origin: new A({ x: p.xmin, y: p.ymax, spatialReference: T }), blockWidth: u, blockHeight: h, pyramidBlockWidth: u, pyramidBlockHeight: h, compression: r, pyramidScalingFactor: w }), S = new A({ x: p.width / i, y: p.height / s, spatialReference: T }), k = new ve({ width: i, height: s, extent: p, isPseudoSpatialReference: x, spatialReference: T, bandCount: a, pixelType: l, pixelSize: S, noDataValue: d, storageInfo: v }), _ = X(t, "datafile"), M = X(t, "IndexFile");
    return { rasterInfo: k, files: { mrf: this.url, index: M || this.url.replace(".mrf", ".idx"), data: _ || this.url.replace(".mrf", ee.get(r).blobExtension) } };
  }
  async _fetchAuxiliaryData(t) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: t?.signal });
      return je(e);
    } catch {
      return null;
    }
  }
};
function gs(t) {
  if (t.byteLength % 16 > 0) throw new Error("invalid array buffer must be multiples of 16");
  let e, n, i, s, a, r;
  if (hi) {
    for (n = new Uint8Array(t), s = new ArrayBuffer(t.byteLength), i = new Uint8Array(s), a = 0; a < t.byteLength / 4; a++) for (r = 0; r < 4; r++) i[4 * a + r] = n[4 * a + 3 - r];
    e = new Uint32Array(s);
  } else e = new Uint32Array(t);
  return e;
}
b([R()], ce.prototype, "_files", void 0), b([R()], ce.prototype, "_storageIndex", void 0), b([R({ type: String, json: { write: !0 } })], ce.prototype, "datasetFormat", void 0), ce = b([K("esri.layers.support.rasterDatasets.MRFRaster")], ce);
const xs = ce;
function ws(t) {
  const e = t.fields, n = t.records, i = e.some((c) => c.name.toLowerCase() === "oid") ? "OBJECTID" : "OID", s = [{ name: i, type: "esriFieldTypeOID", alias: "OID" }].concat(e.map((c) => ({ name: c.name, type: "esriFieldType" + c.typeName, alias: c.name }))), a = s.map((c) => c.name), r = [];
  let o = 0, l = 0;
  return n.forEach((c) => {
    const u = {};
    for (u[i] = o++, l = 1; l < a.length; l++) u[a[l]] = c[l - 1];
    r.push({ attributes: u });
  }), { displayFieldName: "", fields: s, features: r };
}
class Is {
  static get supportedVersions() {
    return [5];
  }
  static parse(e) {
    const n = new DataView(e), i = 3 & n.getUint8(0);
    if (i !== 3) return { header: { version: i }, recordSet: null };
    const s = n.getUint32(4, !0), a = n.getUint16(8, !0), r = n.getUint16(10, !0), o = { version: i, recordCount: s, headerByteCount: a, recordByteCount: r };
    let l = 32;
    const c = [], u = [];
    let h;
    if (i === 3) {
      for (; n.getUint8(l) !== 13; ) h = String.fromCharCode(n.getUint8(l + 11)).trim(), c.push({ name: Ze(new Uint8Array(e, l, 11)), type: h, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(h)], length: n.getUint8(l + 16) }), l += 32;
      if (l += 1, c.length > 0) for (; u.length < s && e.byteLength - l > r; ) {
        const f = [];
        n.getUint8(l) === 32 ? (l += 1, c.forEach((d) => {
          if (d.type === "C") f.push(Ze(new Uint8Array(e, l, d.length)).trim());
          else if (d.type === "N") f.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(e, l, d.length)).trim(), 10));
          else if (d.type === "F") f.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(e, l, d.length)).trim()));
          else if (d.type === "D") {
            const y = String.fromCharCode.apply(null, new Uint8Array(e, l, d.length)).trim();
            f.push(new Date(parseInt(y.substring(0, 4), 10), parseInt(y.substring(4, 6), 10) - 1, parseInt(y.substring(6, 8), 10)));
          }
          l += d.length;
        }), u.push(f)) : l += r;
      }
    }
    return { header: o, fields: c, records: u, recordSet: ws({ fields: c, records: u }) };
  }
}
const Je = (t, e) => t.get(e)?.values, de = (t, e) => t.get(e)?.values?.[0];
let ne = class extends oe {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  async open(t) {
    await this.init();
    const e = t ? t.signal : null, { data: n } = await this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: e });
    if (!n) throw new O("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1, this.url.lastIndexOf("."));
    const { littleEndian: i, firstIFDPos: s, isBigTiff: a } = fi(n), r = [];
    await this._readIFDs(r, n, i, s, 0, a ? 8 : 4, e);
    const { imageInfo: o, rasterInfo: l } = bs(r), c = mi(r), u = di(r);
    if (this._headerInfo = { littleEndian: i, isBigTiff: a, ifds: r, pyramidIFDs: c, maskIFDs: u, ...o }, this._set("rasterInfo", l), !o.isSupported) throw new O("tiffraster:open", "this tiff is not supported: " + o.message);
    if (!o.tileWidth) throw new O("tiffraster:open", "none-tiled tiff is not optimized for access, convert to COG and retry.");
    l.isPseudoSpatialReference && ae.getLogger(this).warn("The spatial reference for this tiff is unsupported. Only EPSG spatial reference codes and Esri WKTs are supported.");
    const h = r[0].get("PREDICTOR")?.values?.[0];
    if (r[0].get("SAMPLEFORMAT")?.values?.[0] === 3 && h === 2) throw new O("tiffraster:open", "unsupported horizontal difference encoding. Predictor=3 is supported for floating point data");
    const { skipMapInfo: d, skipExtensions: y = [] } = this.ioConfig;
    if (!y.includes("aux.xml") && !d) {
      const g = await this._fetchAuxiliaryMetaData(t);
      g != null && Rs(g, l);
    }
    y.includes("vat.dbf") || l.bandCount !== 1 || l.pixelType !== "u8" || d || (l.attributeTable = await this._fetchAuxiliaryTable(t), l.attributeTable != null && (l.keyProperties.DataType = "thematic")), d && this.updateImageSpaceRasterInfo(l), this.updateTileInfo();
  }
  async fetchRawTile(t, e, n, i = {}) {
    if (!this._headerInfo?.isSupported || this.isBlockOutside(t, e, n)) return null;
    const s = await this._fetchRawTiffTile(t, e, n, !1, i);
    if (s != null && this._headerInfo.hasMaskBand) {
      const a = await this._fetchRawTiffTile(t, e, n, !0, i);
      a != null && a.pixels[0] instanceof Uint8Array && (s.mask = a.pixels[0]);
    }
    return s;
  }
  async _readIFDs(t, e, n, i, s, a = 4, r) {
    if (!i) return null;
    (i >= e.byteLength || i < 0) && (e = (await this.request(this.url, { range: { from: i + s, to: i + s + this._bufferSize }, responseType: "array-buffer", signal: r })).data, s = i + s, i = 0);
    const o = await this._readIFD(e, n, i, s, pe.tiffTags, a, r);
    if (t.push(o.ifd), !o.nextIFD) return null;
    await this._readIFDs(t, e, n, o.nextIFD - s, s, a, r);
  }
  async _readIFD(t, e, n, i, s = pe.tiffTags, a = 4, r) {
    if (!t) return null;
    const o = pi(t, e, n, i, s, a);
    if (o.success) {
      const l = [];
      if (o.ifd?.forEach((c) => {
        c.values || l.push(c);
      }), l.length > 0) {
        const c = l.map((h) => h.offlineOffsetSize).filter($e), u = Math.min.apply(null, c.map((h) => h[0]));
        if (Math.min.apply(null, c.map((h) => h[0] + h[1])) - u <= this._bufferSize) {
          const { data: h } = await this.request(this.url, { range: { from: u, to: u + this._bufferSize }, responseType: "array-buffer", signal: r });
          t = h, i = u, l.forEach((f) => yi(t, e, f, i));
        }
      }
      if (o.ifd?.has("GEOKEYDIRECTORY")) {
        const c = o.ifd.get("GEOKEYDIRECTORY"), u = c?.values;
        if (u && u.length > 4) {
          const h = u[0] + "." + u[1] + "." + u[2], f = await this._readIFD(t, e, c.valueOffset + 6 - i, i, pe.geoKeys, 2, r);
          c.data = f.ifd, c.data && c.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [h] });
        }
      }
      return o;
    }
    if (o.requiredBufferSize && o.requiredBufferSize !== t.byteLength)
      return (t = (await this.request(this.url, { range: { from: i, to: i + o.requiredBufferSize + 4 }, responseType: "array-buffer", signal: r })).data).byteLength < o.requiredBufferSize ? null : this._readIFD(t, e, 0, i, pe.tiffTags, 4, r);
  }
  async _fetchRawTiffTile(t, e, n, i, s = {}) {
    const a = this._getTileLocation(t, e, n, i);
    if (!a) return null;
    const { ranges: r, actualTileWidth: o, actualTileHeight: l, ifd: c } = a, u = r.map((v) => this.request(this.url, { range: v, responseType: "array-buffer", signal: s.signal })), h = await Promise.all(u), f = h.map((v) => v.data.byteLength).reduce((v, S) => v + S), d = h.length === 1 ? h[0].data : new ArrayBuffer(f), y = [0], g = [0];
    if (h.length > 1) {
      const v = new Uint8Array(d);
      for (let S = 0, k = 0; S < h.length; S++) {
        const _ = h[S].data;
        v.set(new Uint8Array(_), k), y[S] = k, k += _.byteLength, g[S] = _.byteLength;
      }
    }
    const { blockWidth: m, blockHeight: p } = this.getBlockWidthHeight(t), x = await this.decodePixelBlock(d, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: c, offsets: y, sizes: g }, width: m, height: p, planes: null, pixelType: null });
    if (x == null) return null;
    let I, w, T;
    if (o !== m || l !== p) {
      let v = x.mask;
      if (v) for (I = 0; I < p; I++) if (T = I * m, I < l) for (w = o; w < m; w++) v[T + w] = 0;
      else for (w = 0; w < m; w++) v[T + w] = 0;
      else for (v = new Uint8Array(m * p), x.mask = v, I = 0; I < l; I++) for (T = I * m, w = 0; w < o; w++) v[T + w] = 1;
    }
    return x;
  }
  _getTileLocation(t, e, n, i = !1) {
    const { firstPyramidLevel: s, blockBoundary: a } = this.rasterInfo.storageInfo, r = t === 0 ? 0 : t - (s - 1), { _headerInfo: o } = this;
    if (!o) return null;
    const l = i ? o.maskIFDs[r] : r === 0 ? o?.ifds[0] : o?.pyramidIFDs[r - 1];
    if (!l) return null;
    const c = gi(l, o), u = Je(l, "TILEOFFSETS");
    if (u === void 0) return null;
    const h = Je(l, "TILEBYTECOUNTS"), { minRow: f, minCol: d, maxRow: y, maxCol: g } = a[r];
    if (e > y || n > g || e < f || n < d) return null;
    const m = de(l, "IMAGEWIDTH"), p = de(l, "IMAGELENGTH"), x = de(l, "TILEWIDTH"), I = de(l, "TILELENGTH"), w = [];
    if (c) {
      const { bandCount: T } = this.rasterInfo;
      for (let v = 0; v < T; v++) {
        const S = v * (y + 1) * (g + 1) + e * (g + 1) + n;
        w[v] = { from: u[S], to: u[S] + h[S] - 1 };
      }
    } else {
      const T = e * (g + 1) + n;
      w.push({ from: u[T], to: u[T] + h[T] - 1 });
    }
    for (let T = 0; T < w.length; T++) if (w[T].from == null || !w[T].to || w[T].to < 0) return null;
    return { ranges: w, ifd: l, actualTileWidth: n === g && m % x || x, actualTileHeight: e === y && p % I || I };
  }
  async _fetchAuxiliaryMetaData(t) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: t?.signal });
      return je(e);
    } catch {
      return null;
    }
  }
  async _fetchAuxiliaryTable(t) {
    try {
      const { data: e } = await this.request(this.url + ".vat.dbf", { responseType: "array-buffer", signal: t?.signal }), n = Is.parse(e);
      return n?.recordSet ? Le.fromJSON(n.recordSet) : null;
    } catch {
      return null;
    }
  }
};
function bs(t) {
  const e = xi(t), { width: n, height: i, tileWidth: s, tileHeight: a, planes: r, pixelType: o, compression: l, firstPyramidLevel: c, maximumPyramidLevel: u, pyramidBlockWidth: h, pyramidBlockHeight: f, pyramidResolutions: d, tileBoundary: y, affine: g, metadata: m } = e, p = e.extent.spatialReference?.wkt || e.extent.spatialReference?.wkid;
  let x = Se(p), I = !!e.isPseudoGeographic;
  x == null && (I = !0, x = new H({ wkid: 3857 }));
  const w = new L({ ...e.extent, spatialReference: x }), T = new A(w ? { x: w.xmin, y: w.ymax, spatialReference: x } : { x: 0, y: 0 }), v = new Re({ blockWidth: s, blockHeight: a, pyramidBlockWidth: h, pyramidBlockHeight: f, compression: l, origin: T, firstPyramidLevel: c, maximumPyramidLevel: u, pyramidResolutions: d, blockBoundary: y }), S = new A({ x: (w.xmax - w.xmin) / n, y: (w.ymax - w.ymin) / i, spatialReference: x }), k = m ? { BandProperties: m.bandProperties, DataType: m.dataType } : {};
  let _ = null;
  const M = de(t[0], "PHOTOMETRICINTERPRETATION"), F = Je(t[0], "COLORMAP");
  if (M <= 3 && F?.length > 3 && F.length % 3 == 0) {
    _ = [];
    const C = F.length / 3;
    for (let $ = 0; $ < C; $++) _.push([$, F[$] >>> 8, F[$ + C] >>> 8, F[$ + 2 * C] >>> 8]);
  }
  const P = new ve({ width: n, height: i, bandCount: r, pixelType: o, pixelSize: S, storageInfo: v, spatialReference: x, isPseudoSpatialReference: I, keyProperties: k, extent: w, colormap: _, statistics: m ? m.statistics : null });
  if (g?.length && (P.nativeExtent = new L({ xmin: -0.5, ymin: 0.5 - i, xmax: n - 0.5, ymax: 0.5, spatialReference: x }), P.transform = new We({ polynomialOrder: 1, forwardCoefficients: [g[2] + g[0] / 2, g[5] - g[3] / 2, g[0], g[3], -g[1], -g[4]] }), P.extent = P.transform.forwardTransform(P.nativeExtent), P.pixelSize = new A({ x: (w.xmax - w.xmin) / n, y: (w.ymax - w.ymin) / i, spatialReference: x }), v.origin.x = -0.5, v.origin.y = 0.5), d) {
    const { x: C, y: $ } = P.pixelSize;
    d.forEach((D) => {
      D.x *= C, D.y *= $;
    });
  }
  return { imageInfo: e, rasterInfo: P };
}
function Rs(t, e) {
  if (e.statistics = t.statistics ?? e.statistics, e.histograms = t.histograms, t.histograms && e.statistics == null && (e.statistics = ze(t.histograms)), t.transform && e.transform == null) {
    e.transform = t.transform, e.nativeExtent = e.extent;
    const n = e.transform.forwardTransform(e.nativeExtent);
    e.pixelSize = new A({ x: (n.xmax - n.xmin) / e.width, y: (n.ymax - n.ymin) / e.height, spatialReference: e.spatialReference }), e.extent = n;
  }
  e.isPseudoSpatialReference && t.spatialReference && (e.spatialReference = t.spatialReference, e.extent.spatialReference = e.nativeExtent.spatialReference = e.storageInfo.origin.spatialReference = e.spatialReference);
}
b([R()], ne.prototype, "_files", void 0), b([R()], ne.prototype, "_headerInfo", void 0), b([R()], ne.prototype, "_bufferSize", void 0), b([R({ type: String, json: { write: !0 } })], ne.prototype, "datasetFormat", void 0), ne = b([K("esri.layers.support.rasterDatasets.TIFFRaster")], ne);
const vs = ne, z = /* @__PURE__ */ new Map();
z.set("MRF", { desc: "Meta Raster Format", constructor: xs }), z.set("TIFF", { desc: "GeoTIFF", constructor: vs }), z.set("RasterTileServer", { desc: "Raster Tile Server", constructor: ys }), z.set("JPG", { desc: "JPG Raster Format", constructor: we }), z.set("PNG", { desc: "PNG Raster Format", constructor: we }), z.set("GIF", { desc: "GIF Raster Format", constructor: we }), z.set("BMP", { desc: "BMP Raster Format", constructor: we }), z.set("CovJSON", { desc: "COVJSON Raster Format", constructor: us }), z.set("MEMORY", { desc: "In Memory Raster Format", constructor: Ge });
class Oe {
  static get supportedFormats() {
    const e = /* @__PURE__ */ new Set();
    return z.forEach((n, i) => e.add(i)), e;
  }
  static async open(e) {
    const { url: n, ioConfig: i, source: s, sourceJSON: a } = e;
    let r = e.datasetFormat ?? i?.datasetFormat;
    r == null && (n.includes(".") ? r = n.slice(n.lastIndexOf(".") + 1).toUpperCase() : s?.type?.toLowerCase() === "coverage" ? r = "CovJSON" : s?.extent && s.pixelblocks && (r = "MEMORY")), r === "OVR" || r === "TIF" ? r = "TIFF" : r === "JPG" || r === "JPEG" || r === "JFIF" ? r = "JPG" : r === "COVJSON" && (r = "CovJSON"), n.toLowerCase().includes("/imageserver") && !n.toLowerCase().includes("/wcsserver") && (r = "RasterTileServer");
    const o = { url: n, source: s, sourceJSON: a, datasetFormat: r, ioConfig: i ?? { bandIds: null, sampling: null } };
    if (Object.keys(o).forEach((h) => {
      o[h] == null && delete o[h];
    }), r) {
      if (!this.supportedFormats.has(r)) throw new O("rasterfactory:open", "not a supported format " + r);
      if (r === "CRF") throw new O("rasterfactory:open", `cannot open raster: ${n}`);
      const h = new (z.get(r)).constructor(o);
      return await h.open({ signal: e.signal }), h;
    }
    const l = Array.from(z.keys()).filter((h) => h !== "CovJSON" && h !== "Memory");
    let c = 0;
    const u = () => {
      if (r = l[c++], !r || r === "CRF") return null;
      const h = new (z.get(r)).constructor(o);
      return h.open({ signal: e.signal }).then(() => h).catch(() => u());
    };
    return u();
  }
  static register(e, n, i) {
    z.has(e.toUpperCase()) || z.set(e.toUpperCase(), { desc: n, constructor: i });
  }
}
let B = class extends wi(Ii(bi(Ri(vi(ns(Si(Ti(_i(Fi(ki(Ei))))))))))) {
  constructor(...t) {
    super(...t), this._primaryRasters = [], this.bandIds = null, this.interpolation = null, this.legendEnabled = !0, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = !0, this.popupTemplate = null, this.fields = null, this.source = void 0, this._debouncedSaveOperations = Mi(async (e, n, i) => {
      const { save: s, saveAs: a } = await import("./imageryUtils-BemWTu_b.js");
      switch (e) {
        case ye.SAVE:
          return s(this, n);
        case ye.SAVE_AS:
          return a(this, i, n);
      }
    });
  }
  normalizeCtorArgs(t, e) {
    return typeof t == "string" ? { url: t, ...e } : t;
  }
  load(t) {
    const e = t != null ? t.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, t).catch(Ci).then(() => this._openRaster(e))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    const t = [new ue({ name: "Raster.ServicePixelValue", alias: "Pixel Value", domain: null, editable: !1, length: 50, type: "string" }), new ue({ name: "Raster.ServicePixelValue.Raw", alias: "Raw Pixel Value", domain: null, editable: !1, length: 50, type: "string" })], e = this.raster?.rasterInfo ?? this.serviceRasterInfo, n = e?.attributeTable, i = n != null ? n.fields : null, s = "Raster.";
    if (i) {
      const o = i.filter((l) => l.type !== "oid" && l.name.toLowerCase() !== "value").map((l) => {
        const c = l.clone();
        return c.name = s + l.name, c;
      });
      t.push(...o);
    }
    const a = e?.dataType, r = e?.multidimensionalInfo;
    if ((a === "vector-magdir" || a === "vector-uv") && r != null) {
      const o = r.variables[0].unit?.trim(), l = "Magnitude" + (o ? ` (${o})` : "");
      t.push(new ue({ name: "Raster.Magnitude", alias: l, domain: null, editable: !1, type: "double" })), t.push(new ue({ name: "Raster.Direction", alias: "Direction (°)", domain: null, editable: !1, type: "double" }));
    }
    return t;
  }
  createPopupTemplate(t) {
    const { rasterFields: e } = this, n = new Set(e.map(({ name: i }) => i).filter((i) => i.toLowerCase() !== "raster.servicepixelvalue.raw"));
    return Oi({ fields: e, title: this.title }, { ...t, visibleFieldNames: n });
  }
  async generateRasterInfo(t, e) {
    if (t = Ee(Pe, t), await this.load(), !t || t.functionName?.toLowerCase() === "none") return this.serviceRasterInfo;
    try {
      const { rasterInfo: n } = await this._openFunctionRaster(t, e);
      return n;
    } catch (n) {
      throw n instanceof O ? n : new O("imagery-tile-layer", "the given raster function is not supported");
    }
  }
  async save(t) {
    return this._debouncedSaveOperations(ye.SAVE, t);
  }
  async saveAs(t, e) {
    return this._debouncedSaveOperations(ye.SAVE_AS, e, t);
  }
  write(t, e) {
    const n = this._primaryRasters[0] ?? this.raster;
    if (this.loaded ? n.datasetFormat === "RasterTileServer" && (n.tileType === "Raster" || n.tileType === "Map") : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)) return super.write(t, e);
    if (e?.messages) {
      const i = `${e.origin}/${e.layerContainerType || "operational-layers"}`;
      e.messages.push(new O("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${i}'`, { layer: this }));
    }
    return null;
  }
  async _openRaster(t) {
    let e = !1;
    if (this.raster) await this._openFromRaster(this.raster, t), e = this.raster.datasetFormat === "Function";
    else {
      const { url: i, rasterFunction: s, source: a } = this;
      if (!i && !a) throw new O("imagery-tile-layer:open", "missing url or source parameter");
      a ? await this._openFromSource(a, t) : s ? await this._openFromUrlWithRasterFunction(i, s, t) : await this._openFromUrl(i, t);
    }
    const n = this.raster.rasterInfo;
    if (!n) throw new O("imagery-tile-layer:load", "cannot load resources on " + this.url);
    if (this._set("serviceRasterInfo", e ? n : this._primaryRasters[0].rasterInfo), this._set("spatialReference", n.spatialReference), this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, this.sourceJSON != null) {
      const i = this.raster.tileType === "Map" && this.sourceJSON.minLOD != null && this.sourceJSON.maxLOD != null ? this.sourceJSON : { ...this.sourceJSON, minScale: 0, maxScale: 0 };
      this.read(i, { origin: "service" });
    } else this.read({ tileInfo: this.serviceRasterInfo?.storageInfo.tileInfo.toJSON() }, { origin: "service" });
    this.title || (this.title = this.raster.datasetName), this.raster.tileType === "Map" && (this.popupEnabled = !1), this._configDefaultSettings(), this.addHandles(Pi(() => this.customParameters, (i) => {
      this.raster && (this.raster.ioConfig.customFetchParameters = i);
    }));
  }
  async _openFromRaster(t, e) {
    t.rasterInfo || await t.open({ signal: e }), this._primaryRasters = t.datasetFormat === "Function" ? t.primaryRasters.rasters : [t], this.url || (this.url = this._primaryRasters[0].url);
  }
  async _openFromUrlWithRasterFunction(t, e, n) {
    const i = [t];
    e && Ui(e.toJSON(), i);
    const s = await Promise.all(i.map((r) => Oe.open({ url: r, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: n }))), a = s.findIndex((r) => r == null);
    if (a > -1) throw new O("imagery-tile-layer:open", `cannot open raster: ${i[a]}`);
    return this._primaryRasters = s, this._initializeWithFunctionRaster(e);
  }
  async _openFromUrl(t, e) {
    const n = await Oe.open({ url: t, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: e });
    if (n == null) throw new O("imagery-tile-layer:open", `cannot open raster: ${t}`);
    this._primaryRasters = [n], this.raster = n;
  }
  async _openFromSource(t, e) {
    const n = "the tiled imagery data source is not supported", i = t.type?.toLowerCase() === "coverage" ? "CovJSON" : t.extent && t.pixelBlock ? "MEMORY" : null;
    if (!i) throw new O("imagery-tile-layer:open", n);
    i === "MEMORY" && (t = { extent: t.extent, pixelBlocks: [t.pixelBlock] });
    const s = await Oe.open({ url: "", source: t, datasetFormat: i, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: e });
    if (s == null) throw new O("imagery-tile-layer:open", n);
    this._primaryRasters = [s], this.rasterFunction ? await this._initializeWithFunctionRaster(this.rasterFunction) : this.raster = s;
  }
  async _openFunctionRaster(t, e) {
    const n = { raster: this._primaryRasters[0] };
    this._primaryRasters.length > 1 && this._primaryRasters.forEach((a) => n[a.url] = a);
    const i = dt(t.functionDefinition?.toJSON() ?? t.toJSON(), n), s = new pt({ rasterFunction: i });
    return await s.open(e), s;
  }
  async _initializeWithFunctionRaster(t, e) {
    try {
      this.raster = await this._openFunctionRaster(t, e);
    } catch (n) {
      n instanceof O && ae.getLogger(this).error("imagery-tile-layer:open", n.message), ae.getLogger(this).warn("imagery-tile-layer:open", "the raster function cannot be applied and is removed"), this._set("rasterFunction", null), this.raster = this._primaryRasters[0];
    }
  }
};
b([R({ clonable: !1 })], B.prototype, "_primaryRasters", void 0), b([R({ type: [$i], json: { write: { overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.bandIds?.join(",") !== "0,1,2" };
} } } })], B.prototype, "bandIds", void 0), b([R({ json: { write: { overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.interpolation !== "bilinear" };
} } } }), Di(Ni)], B.prototype, "interpolation", void 0), b([R(Bi)], B.prototype, "legendEnabled", void 0), b([R({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], B.prototype, "isReference", void 0), b([R({ type: ["show", "hide"] })], B.prototype, "listMode", void 0), b([R({ json: { read: !0, write: !0 } })], B.prototype, "blendMode", void 0), b([R()], B.prototype, "sourceJSON", void 0), b([R({ readOnly: !0, json: { origins: { service: { read: { source: "currentVersion" } } } } })], B.prototype, "version", void 0), b([R({ readOnly: !0, json: { read: !1 } })], B.prototype, "type", void 0), b([R({ type: ["ArcGISTiledImageServiceLayer"] })], B.prototype, "operationalLayerType", void 0), b([R({ type: Boolean, value: !0, json: { read: { source: "disablePopup", reader: (t, e) => !e.disablePopup }, write: { target: "disablePopup", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
}, writer(t, e, n) {
  e[n] = !t;
} } } })], B.prototype, "popupEnabled", void 0), b([R({ type: Ji, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
} } } })], B.prototype, "popupTemplate", void 0), b([R({ readOnly: !0 })], B.prototype, "defaultPopupTemplate", null), b([R({ readOnly: !0, type: [ue] })], B.prototype, "fields", void 0), b([R({ readOnly: !0, type: [ue] })], B.prototype, "rasterFields", null), b([R({ constructOnly: !0 })], B.prototype, "source", void 0), B = b([K("esri.layers.ImageryTileLayer")], B);
const Cs = B;
export {
  Cs as default
};
//# sourceMappingURL=ImageryTileLayer-Bg7Pe-ru.js.map
