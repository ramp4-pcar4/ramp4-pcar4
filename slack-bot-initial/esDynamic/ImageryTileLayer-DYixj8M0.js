import { jP as vt, mz as Tt, fh as ee, mA as ut, C as le, s as P, b$ as Le, a6 as A, mB as ht, aU as z, du as ke, dp as _t, a2 as ft, mC as mt, fW as dt, mD as ge, bh as L, dv as pt, dw as Ft, dx as kt, jG as Ct, mE as Mt, mF as Pt, mG as Ot, mH as $t, mI as He, N as I, O as S, e2 as yt, P as X, b_ as Dt, dl as V, ba as Xe, Y as _e, aR as Nt, mJ as Bt, mK as Be, mL as Jt, mM as Et, d$ as At, mN as zt, mO as Lt, dm as Ht, mP as Wt, dn as We, dy as Gt, mQ as Ye, mR as jt, mS as Ke, mT as Qe, mU as Ze, aA as qt, mV as Ut, mW as Vt, mX as Xt, mY as et, dq as Yt, mZ as Kt, m_ as tt, m$ as xe, ax as Qt, n0 as Zt, n1 as ei, dt as ti, ds as ii, dr as si, dQ as gt, n2 as ni, b6 as Je, n3 as Ge, n4 as ri, af as ai, lJ as oi, n5 as li, i9 as ci, I as ui, l7 as hi, n6 as fi, n7 as mi, n8 as di, n9 as pi, na as yi, nb as gi, nc as xi, nd as we, ne as wi, nf as Ii, ng as bi, dV as Si, dZ as Ri, dX as vi, dY as Ti, ex as _i, g2 as Fi, ew as ki, dW as Ci, d_ as Mi, dS as Pi, S as Oi, a1 as $i, dH as he, g4 as Di, gm as Ie, U as Ni, gw as Bi, dN as Ji, nh as Ei, e1 as Ai, Z as zi, e8 as Li } from "./main-3gzXighg.js";
import { i as it, m as st, x as nt, h as Hi, s as Wi } from "./RawBlockCache-C418o6nJ.js";
import { T as Ee, D as be, j as rt, r as at, o as Gi, V as Ce, J as ve, e as ji, Z as qi, C as Ui, U as Ae } from "./rasterProjectionHelper-BbObSCHG.js";
import { R as xt, f as Vi, i as Xi, y as je, c as Yi, N as Ki } from "./utils-C7IVjQrL.js";
const ot = 8, Qi = 256;
let Zi = 0, H = class extends vt(Dt) {
  constructor() {
    super(...arguments), this._tileFetchQueue = new Tt({ concurrency: 32, process: (i, e) => this._fetchRawTile(i.pyramidLevel, i.row, i.col, { ...i.options, signal: e }) }), this.datasetName = null, this.datasetFormat = null, this.hasUniqueSourceStorageInfo = !0, this.rasterInfo = null, this.ioConfig = { sampling: "closest" };
  }
  async init() {
    const i = Ee();
    this.addResolvingPromise(i), await this.when();
  }
  normalizeCtorArgs(i) {
    return i?.ioConfig && (i = { ...i, ioConfig: { resolution: null, bandIds: null, sampling: "closest", tileInfo: ee.create(), ...i.ioConfig } }), i;
  }
  get _isGlobalWrappableSource() {
    const { rasterInfo: i } = this, e = be(i.spatialReference);
    return e != null && i.extent.width >= e / 2;
  }
  get _hasNoneOrGCSShiftTransform() {
    const { transform: i } = this.rasterInfo;
    return i == null || i.type === "gcs-shift";
  }
  set rasterJobHandler(i) {
    this._set("rasterJobHandler", i), this.datasetFormat === "Function" && this.primaryRasters?.rasters?.forEach((e) => e.rasterJobHandler = i);
  }
  get rasterId() {
    return this.url || "rasterId-" + Zi++;
  }
  set url(i) {
    this._set("url", ut(i, le.getLogger(this)));
  }
  async open(i) {
    throw new P("BaseRaster:open-not-implemented", "open() is not implemented");
  }
  async fetchTile(i, e, n, t = {}) {
    const s = t.tileInfo || this.rasterInfo.storageInfo.tileInfo, a = this.getTileExtentFromTileInfo(i, e, n, s);
    return t = { noClip: !0, ...t }, this.fetchPixels(a, s.size[0], s.size[1], t);
  }
  async identify(i, e = {}) {
    i = Le(A, i).clone().normalize();
    const { multidimensionalDefinition: n, timeExtent: t } = e, { rasterInfo: s } = this, { hasMultidimensionalTranspose: a, multidimensionalInfo: r } = s;
    let { transposedVariableName: o } = e;
    const l = r != null && a && (t != null || ht(n));
    l && !o && (o = n != null && n.length > 0 ? n[0].variableName ?? void 0 : r.variables[0].name, e = { ...e, transposedVariableName: o }), e = this._getRequestOptionsWithSliceId(e);
    const { spatialReference: c, extent: u } = s, { datumTransformation: h } = e;
    let f = rt(i, c, h);
    if (!u.intersects(f)) return { location: f, value: null };
    if (s.transform != null) {
      const k = s.transform.inverseTransform(f);
      if (!s.nativeExtent.intersects(k)) return { location: k, value: null };
      f = k;
    }
    let m = 0;
    const y = o != null && r != null && s.hasMultidimensionalTranspose;
    if (this.datasetFormat === "Function") {
      const k = this.primaryRasters.rasters[0];
      if (y) return k.identify(f, e);
      const { pixelSize: O } = s, M = 3, B = O.x * M / 2, $ = O.y * M / 2, D = new z({ xmin: f.x - B, xmax: f.x + B, ymin: f.y - $, ymax: f.y + $, spatialReference: c }), J = { interpolation: "nearest", multidimensionalDefinition: n, sliceId: e.sliceId }, { pixelBlock: G } = await k.fetchPixels(D, M, M, J), { pixelBlock: N } = await this.fetchPixels(D, M, M, J);
      if (G == null) return { location: f, value: null };
      const j = Math.floor(M * M * 0.5), Q = !G.mask || G.mask[j] ? G.pixels.map((U) => U[j]) : null;
      let se;
      return N != null && (se = !N.mask || N.mask[j] ? N.pixels.map((U) => U[j]) : void 0), { location: f, value: Q, processedValue: se, pyramidLevel: 0 };
    }
    if (!y) {
      if (e.srcResolution)
        m = at(e.srcResolution, s, this.ioConfig.sampling).pyramidLevel;
      else if (m = await this.computeBestPyramidLevelForLocation(i, e), m == null) return { location: f, value: null };
    }
    const g = this.identifyPixelLocation(f, m, null, y);
    if (g === null) return { location: f, value: null };
    const { row: d, col: p, rowOffset: x, colOffset: w, blockWidth: b } = g, T = o ?? e.sliceId, R = it(this.rasterId, T), v = `${m}/${d}/${p}`;
    let _ = st(R, null, v);
    _ == null && (_ = this.fetchRawTile(m, d, p, e), nt(R, null, v, _));
    const F = await _;
    if (!F?.pixels?.length) return { location: f, value: null };
    const C = x * b + w;
    return this._processIdentifyResult(F, { srcLocation: f, position: C, pyramidLevel: m, useTransposedTile: !!y, requestSomeSlices: l, identifyOptions: e });
  }
  async fetchPixels(i, e, n, t = {}) {
    i = Gi(i), t = this._getRequestOptionsWithSliceId(t);
    const { _hasNoneOrGCSShiftTransform: s } = this;
    if (t.requestRawData && s) return this._fetchPixels(i, e, n, t);
    const a = be(i.spatialReference), r = Ce(i);
    if (a == null || r === 0 || r === 1 && this._isGlobalWrappableSource && s) return this._fetchPixels(i, e, n, t);
    if (r >= 3) return { extent: i, pixelBlock: null };
    const o = [], { xmin: l, xmax: c } = i, u = Math.round(a / (c - l) * e), h = u - Math.round((a / 2 - l) / (c - l) * e);
    let f = 0;
    const m = [];
    for (let p = 0; p <= r; p++) {
      const x = new z({ xmin: p === 0 ? l : -a / 2, xmax: p === r ? c - a * p : a / 2, ymin: i.ymin, ymax: i.ymax, spatialReference: i.spatialReference }), w = p === 0 ? u - h : p === r ? e - f : u;
      f += w, m.push(w);
      const b = t.disableWrapAround && p > 0 ? null : this._fetchPixels(x, w, n, t);
      o.push(b);
    }
    const y = (await Promise.all(o)).map((p) => p?.pixelBlock);
    let g = null;
    const d = { width: e, height: n };
    return this.rasterJobHandler ? g = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: y, srcMosaicSize: d, destDimension: null, coefs: null, sampleSpacing: null, interpolation: "nearest", alignmentInfo: null, blockWidths: m }, t)).pixelBlock : g = ke(y, d, { blockWidths: m }), { extent: i, srcExtent: ve(i, this.rasterInfo.spatialReference, t.datumTransformation), pixelBlock: g };
  }
  async fetchRawPixels(i, e, n, t = {}) {
    e = { x: Math.floor(e.x), y: Math.floor(e.y) };
    const s = await this._fetchRawTiles(i, e, n, t), { nativeExtent: a, nativePixelSize: r, storageInfo: o } = this.rasterInfo, l = 2 ** i, c = r.x * l, u = r.y * l, h = new z({ xmin: a.xmin + c * e.x, xmax: a.xmin + c * (e.x + n.width - 1), ymin: a.ymax - u * (e.y + n.height - 1), ymax: a.ymax - u * e.y, spatialReference: a.spatialReference });
    if (!s) return { extent: h, srcExtent: h, pixelBlock: null };
    const { pixelBlocks: f, mosaicSize: m } = s;
    if (f.length === 1 && f[0] != null && f[0].width === n.width && f[0].height === n.height) return { extent: h, srcExtent: h, pixelBlock: s.pixelBlocks[0] };
    const y = i > 0 ? o.pyramidBlockWidth : o.blockWidth, g = i > 0 ? o.pyramidBlockHeight : o.blockHeight, d = { x: e.x % y, y: e.y % g };
    let p;
    return this.rasterJobHandler ? p = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: f, srcMosaicSize: m, destDimension: n, clipOffset: d, clipSize: n, coefs: null, sampleSpacing: null, interpolation: t.interpolation, alignmentInfo: null, blockWidths: null }, t)).pixelBlock : p = ke(f, m, { clipOffset: d, clipSize: n }), { extent: h, srcExtent: h, pixelBlock: p };
  }
  fetchRawTile(i, e, n, t) {
    throw new P("BaseRaster:read-not-implemented", "fetchRawTile() is not implemented");
  }
  computeExtent(i) {
    return ve(this.rasterInfo.extent, i);
  }
  decodePixelBlock(i, e) {
    return !this.rasterJobHandler || e.useCanvas ? _t(i, e) : this.rasterJobHandler.decode({ data: i, options: e });
  }
  async request(i, e, n = 0) {
    const { customFetchParameters: t } = this.ioConfig, { range: s, query: a, headers: r } = e;
    n = n ?? e.retryCount ?? this.ioConfig.retryCount;
    const o = s ? { Range: `bytes=${s.from}-${s.to}` } : null;
    try {
      return await ft(i, { ...e, query: { ...a, ...t }, headers: { ...r, ...o } });
    } catch (l) {
      if (n > 0) return n--, this.request(i, e, n);
      throw l;
    }
  }
  getSliceIndex(i) {
    const { multidimensionalInfo: e } = this.rasterInfo;
    return e == null || i == null || i.length === 0 ? null : mt(i, e);
  }
  getTileExtentFromTileInfo(i, e, n, t) {
    const s = t.lodAt(i);
    return this.getTileExtent({ x: s.resolution, y: s.resolution }, e, n, t.origin, t.spatialReference, t.size);
  }
  updateTileInfo() {
    const { storageInfo: i, spatialReference: e, extent: n, pixelSize: t } = this.rasterInfo;
    if (!i.tileInfo) {
      const s = [], a = i.maximumPyramidLevel || 0;
      let r = Math.max(t.x, t.y), o = 1 / 0.0254 * 96 * r;
      for (let c = 0; c <= a; c++) s.unshift(new dt({ level: a - c, resolution: r, scale: o })), r *= 2, o *= 2;
      const l = new A({ x: n.xmin, y: n.ymax, spatialReference: e });
      i.tileInfo = new ee({ origin: l, size: [i.blockWidth, i.blockHeight], spatialReference: e, lods: s }), i.isVirtualTileInfo = !0;
    }
  }
  createRemoteDatasetStorageInfo(i, e = 512, n = 512, t) {
    const { width: s, height: a, nativeExtent: r, pixelSize: o, spatialReference: l } = i, c = new A({ x: r.xmin, y: r.ymax, spatialReference: l });
    t == null && (t = Math.max(0, Math.round(Math.log(Math.max(s, a)) / Math.LN2 - 8)));
    const u = this.computeBlockBoundary(r, 512, 512, { x: r.xmin, y: r.ymax }, [o], t);
    i.storageInfo = new ge({ blockWidth: e, blockHeight: n, pyramidBlockWidth: e, pyramidBlockHeight: n, origin: c, firstPyramidLevel: 1, maximumPyramidLevel: t, blockBoundary: u });
  }
  async computeBestPyramidLevelForLocation(i, e = {}) {
    return 0;
  }
  computeBlockBoundary(i, e, n, t, s, a = 0, r = 2) {
    if (s.length === 1 && a > 0) {
      s = [...s];
      let { x: u, y: h } = s[0];
      for (let f = 0; f < a; f++) u *= r, h *= r, s.push({ x: u, y: h });
    }
    const o = [], { x: l, y: c } = t;
    for (let u = 0; u < s.length; u++) {
      const { x: h, y: f } = s[u];
      o.push({ minCol: Math.floor((i.xmin - l + 0.1 * h) / e / h), maxCol: Math.floor((i.xmax - l - 0.1 * h) / e / h), minRow: Math.floor((c - i.ymax + 0.1 * f) / n / f), maxRow: Math.floor((c - i.ymin - 0.1 * f) / n / f) });
    }
    return o;
  }
  getPyramidPixelSize(i) {
    const { nativePixelSize: e } = this.rasterInfo, { pyramidResolutions: n, pyramidScalingFactor: t } = this.rasterInfo.storageInfo;
    if (i === 0) return e;
    if (n != null && n.length) return n[i - 1];
    const s = t ** i;
    return { x: e.x * s, y: e.y * s };
  }
  identifyPixelLocation(i, e, n, t) {
    const { spatialReference: s, nativeExtent: a, storageInfo: r } = this.rasterInfo, { maximumPyramidLevel: o, origin: l, transposeInfo: c } = r, u = t && c != null ? c.tileSize[0] : r.blockWidth, h = t && c != null ? c.tileSize[1] : r.blockHeight, f = rt(i, s, n);
    if (!a.intersects(f) || e < 0 || e > o) return null;
    const m = this.getPyramidPixelSize(e), { x: y, y: g } = m, d = (l.y - f.y) / g / h, p = (f.x - l.x) / y / u, x = Math.min(h - 1, Math.floor((d - Math.floor(d)) * h)), w = Math.min(u - 1, Math.floor((p - Math.floor(p)) * u));
    return { pyramidLevel: e, row: Math.floor(d), col: Math.floor(p), rowOffset: x, colOffset: w, blockWidth: u, srcLocation: f };
  }
  getTileExtent(i, e, n, t, s, a) {
    const [r, o] = a, l = t.x + n * r * i.x, c = l + r * i.x, u = t.y - e * o * i.y, h = u - o * i.y;
    return new z({ xmin: l, xmax: c, ymin: h, ymax: u, spatialReference: s });
  }
  getBlockWidthHeight(i) {
    return { blockWidth: i > 0 ? this.rasterInfo.storageInfo.pyramidBlockWidth : this.rasterInfo.storageInfo.blockWidth, blockHeight: i > 0 ? this.rasterInfo.storageInfo.pyramidBlockHeight : this.rasterInfo.storageInfo.blockHeight };
  }
  isBlockOutside(i, e, n) {
    const t = this.rasterInfo.storageInfo.blockBoundary[i];
    return !t || t.maxRow < e || t.maxCol < n || t.minRow > e || t.minCol > n;
  }
  updateImageSpaceRasterInfo(i) {
    const { extent: e, pixelSize: n } = i;
    if (e.xmin === -0.5 && e.ymax === 0.5 && n.x === 1 && n.y === 1 && i.transform == null) return;
    const { width: t, height: s } = i, a = L.WebMercator;
    i.spatialReference = a, i.extent = i.nativeExtent = new z({ xmin: -0.5, ymax: 0.5, xmax: t - 0.5, ymin: 0.5 - s, spatialReference: a }), i.isPseudoSpatialReference = !0, i.transform = null, i.pixelSize = new A({ x: 1, y: 1, spatialReference: a });
    const { extent: r, storageInfo: o } = i;
    if (o) {
      o.origin = new A({ x: r.xmin, y: r.ymax, spatialReference: a });
      const { tileInfo: l } = o;
      if (l) {
        l.origin = o.origin;
        const c = (i.nativePixelSize.x + i.nativePixelSize.y) / 2;
        l.lods.forEach((u, h) => {
          u.resolution = c * 2 ** h, u.scale = 96 * u.resolution / 0.0254;
        });
      }
    }
  }
  async _fetchPixels(i, e, n, t = {}) {
    let s = Ce(i);
    if (s >= 2) return { extent: i, pixelBlock: null };
    const a = this._getSourceDataInfo(i, e, n, t), { pyramidLevel: r, srcResolution: o, srcExtent: l, srcWidth: c, srcHeight: u, ul: h } = a;
    if (c === 0 || u === 0) return { extent: i, srcExtent: l, pixelBlock: null };
    const { rasterInfo: f } = this, m = f.transform, y = m?.type === "gcs-shift", g = be(i.spatialReference) != null;
    !y && g || (s = Ce(a.srcExtent, y));
    const d = await this._fetchRawTiles(r, h, { width: c, height: u, wrapCount: s }, t);
    if (!d) return { extent: i, srcExtent: l, pixelBlock: null };
    const p = f.storageInfo, x = r > 0 ? p.pyramidBlockWidth : p.blockWidth, w = r > 0 ? p.pyramidBlockHeight : p.blockHeight;
    let { x: b, y: T } = f.pixelSize;
    if (r > 0) {
      const { pyramidResolutions: Z, pyramidScalingFactor: Rt } = p;
      if (Z != null && Z[r - 1]) ({ x: b, y: T } = Z[r - 1]);
      else {
        const Ve = Rt ** r;
        b *= Ve, T *= Ve;
      }
    }
    const R = f.spatialReference, v = new A({ x: b, y: T, spatialReference: R }), _ = x === c && w === u && h.x % x == 0 && h.y % w == 0, F = new A({ x: (i.xmax - i.xmin) / e, y: (i.ymax - i.ymin) / n, spatialReference: i.spatialReference }), C = !i.spatialReference.equals(R), k = R.isGeographic ? 1e-9 : 1e-4, { datumTransformation: O } = t;
    if (!C && _ && d.pixelBlocks.length === 1 && x === e && w === n && this._isSameResolution(o, F, k)) return { extent: i, srcExtent: l, srcTilePixelSize: v, pixelBlock: d.pixelBlocks[0] };
    const M = g && be(l.spatialReference) != null && this._hasNoneOrGCSShiftTransform, B = t.requestProjectedLocalDirections && this.rasterInfo.dataType.startsWith("vector");
    B && !this.rasterJobHandler && await Ee();
    const $ = this.rasterJobHandler ? await this.rasterJobHandler.getProjectionOffsetGrid({ projectedExtent: i, srcBufferExtent: d.extent, pixelSize: F.toJSON(), datumTransformation: O, rasterTransform: m, hasWrapAround: s > 0 || M, isAdaptive: this.ioConfig.optimizeProjectionAccuracy !== !1, includeGCSGrid: B }, t) : ji({ projectedExtent: i, srcBufferExtent: d.extent, pixelSize: F, datumTransformation: O, rasterTransform: m, hasWrapAround: s > 0 || M, isAdaptive: !1, includeGCSGrid: B });
    let D;
    const J = !t.requestRawData, G = { rows: $.spacing[0], cols: $.spacing[1] }, N = this._hasNoneOrGCSShiftTransform ? this._getRasterTileAlignmentInfo(r, d.extent.xmin) : void 0, { pixelBlocks: j, mosaicSize: Q, isPartiallyFilled: se } = d;
    let U = null;
    if (this.rasterJobHandler)
      ({ pixelBlock: D, localNorthDirections: U } = await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: j, srcMosaicSize: Q, destDimension: J ? { width: e, height: n } : null, coefs: J ? $.coefficients : null, sampleSpacing: J ? G : null, projectDirections: B, gcsGrid: B ? $.gcsGrid : null, isUV: this.rasterInfo.dataType === "vector-uv", interpolation: t.interpolation, alignmentInfo: N, blockWidths: null }, t));
    else {
      const Z = ke(j, Q, { alignmentInfo: N });
      D = J ? pt(Z, { width: e, height: n }, $.coefficients, G, t.interpolation) : Z, B && $.gcsGrid && (U = Ft({ width: e, height: n }, $.gcsGrid), D = kt(D, this.rasterInfo.dataType, U));
    }
    return t.requestRawData || B ? { extent: i, srcExtent: l, srcTilePixelSize: v, pixelBlock: D, transformGrid: $, localNorthDirections: U, isPartiallyFilled: se } : { extent: i, srcExtent: l, srcTilePixelSize: v, pixelBlock: D };
  }
  async _fetchRawTiles(i, e, n, t) {
    const { origin: s, blockBoundary: a } = this.rasterInfo.storageInfo, { blockWidth: r, blockHeight: o } = this.getBlockWidthHeight(i);
    let { x: l, y: c } = e, { width: u, height: h, wrapCount: f } = n;
    const m = this._getRasterTileAlignmentInfo(i, 0);
    t.buffer && (l -= t.buffer.cols, c -= t.buffer.rows, u += 2 * t.buffer.cols, h += 2 * t.buffer.rows);
    let y = 0, g = 0, d = 0;
    f && m != null && ({ worldColumnCountFromOrigin: g, originColumnOffset: d, rightPadding: y } = m, g * m.blockWidth - y >= l + u && (y = 0));
    const p = Math.floor(l / r), x = Math.floor(c / o), w = Math.floor((l + u + y - 1) / r), b = Math.floor((c + h + y - 1) / o), T = a[i];
    if (!T) return null;
    const { minRow: R, minCol: v, maxCol: _, maxRow: F } = T;
    if (f === 0 && (b < R || w < v || x > F || p > _)) return null;
    const C = new Array();
    let k = !1;
    const O = this.ioConfig.allowPartialFill == null ? t.allowPartialFill : this.ioConfig.allowPartialFill;
    for (let N = x; N <= b; N++) for (let j = p; j <= w; j++) {
      let Q = j;
      if (!t.disableWrapAround && f && m != null && g <= j && (Q = j - g - d), N >= R && Q >= v && F >= N && _ >= Q) {
        const se = this._tileFetchQueue.push({ pyramidLevel: i, row: N, col: Q, options: t }, { signal: t.signal });
        O ? C.push(new Promise((U) => {
          se.then((Z) => U(Z)).catch(() => {
            k = !0, U(null);
          });
        })) : C.push(se);
      } else C.push(Promise.resolve(null));
    }
    if (C.length === 0) return null;
    const M = await Promise.all(C), B = { height: (b - x + 1) * o, width: (w - p + 1) * r }, { spatialReference: $ } = this.rasterInfo, D = this.getPyramidPixelSize(i), { x: J, y: G } = D;
    return { extent: new z({ xmin: s.x + p * r * J, xmax: s.x + (w + 1) * r * J, ymin: s.y - (b + 1) * o * G, ymax: s.y - x * o * G, spatialReference: $ }), pixelBlocks: M, mosaicSize: B, isPartiallyFilled: k };
  }
  _isSameResolution(i, e, n) {
    return Math.abs(i.x - e.x) < n && Math.abs(i.y - e.y) < n;
  }
  _fetchRawTile(i, e, n, t) {
    const s = this.rasterInfo.storageInfo.blockBoundary[i];
    if (!s) return Promise.resolve(null);
    const { minRow: a, minCol: r, maxCol: o, maxRow: l } = s;
    if (e < a || n < r || e > l || n > o) return Promise.resolve(null);
    const c = it(this.rasterId, t.sliceId), u = `${i}/${e}/${n}`;
    let h = st(c, t.registryId, u);
    if (h == null) {
      const f = new AbortController();
      h = this.fetchRawTile(i, e, n, { ...t, signal: f.signal }), nt(c, t.registryId, u, h, f), h.catch(() => Hi(c, t.registryId, u));
    }
    return t.signal && Ct(t, () => {
      Wi(c, t.registryId, u);
    }), h;
  }
  _computeMagDirValues(i) {
    const { bandCount: e, dataType: n } = this.rasterInfo;
    if (!(e === 2 && n === "vector-magdir" || n === "vector-uv") || i?.length !== 2 || !i[0]?.length) return null;
    const t = i[0].length;
    if (n === "vector-magdir") {
      const l = i[1].map((c) => (c + 360) % 360);
      return [i[0], l];
    }
    const [s, a] = i, r = [], o = [];
    for (let l = 0; l < t; l++) {
      const [c, u] = Mt([s[l], a[l]]);
      r.push(c), o.push(u);
    }
    return [r, o];
  }
  _getRasterTileAlignmentInfo(i, e) {
    return this._rasterTileAlignmentInfo == null && (this._rasterTileAlignmentInfo = qi(this.rasterInfo)), this._rasterTileAlignmentInfo.pyramidsInfo == null ? null : { startX: e, halfWorldWidth: this._rasterTileAlignmentInfo.halfWorldWidth, hasGCSSShiftTransform: this._rasterTileAlignmentInfo.hasGCSSShiftTransform, ...this._rasterTileAlignmentInfo.pyramidsInfo[i] };
  }
  _getSourceDataInfo(i, e, n, t = {}) {
    const s = { datumTransformation: t.datumTransformation, pyramidLevel: 0, pyramidResolution: null, srcExtent: null, srcHeight: 0, srcResolution: null, srcWidth: 0, ul: { x: 0, y: 0 } };
    t.srcResolution && (s.srcResolution = t.srcResolution, this._updateSourceDataInfo(i, s));
    const a = this.rasterInfo.storageInfo.maximumPyramidLevel || 0, { srcWidth: r, srcHeight: o, pyramidLevel: l } = s, c = r / e, u = o / n, h = l < a && c * u >= 16, f = l === a && this._requireTooManySrcTiles(r, o, e, n);
    if (h || f || r === 0 || o === 0) {
      const m = new A({ x: (i.xmax - i.xmin) / e, y: (i.ymax - i.ymin) / n, spatialReference: i.spatialReference });
      let y = Ui(m, this.rasterInfo.spatialReference, i, s.datumTransformation);
      const g = !y || t.srcResolution && y.x + y.y < t.srcResolution.x + t.srcResolution.y;
      if (h && t.srcResolution && g) {
        const d = Math.round(Math.log(Math.max(c, u)) / Math.LN2) - 1;
        if (a - l + 3 >= d) {
          const p = 2 ** d;
          y = { x: t.srcResolution.x * p, y: t.srcResolution.y * p };
        }
      }
      y && (s.srcResolution = y, this._updateSourceDataInfo(i, s));
    }
    return this._requireTooManySrcTiles(s.srcWidth, s.srcHeight, e, n) && (s.srcWidth = 0, s.srcHeight = 0), s;
  }
  _requireTooManySrcTiles(i, e, n, t) {
    const { tileInfo: s } = this.rasterInfo.storageInfo, a = Math.ceil(i / s.size[0]) * Math.ceil(e / s.size[1]), r = i / n, o = e / t, l = Math.max(1, (n + t) / 1024);
    return a >= Qi * l || r > ot || o > ot;
  }
  _updateSourceDataInfo(i, e) {
    e.srcWidth = 0, e.srcHeight = 0;
    const { rasterInfo: n } = this, t = n.spatialReference, { srcResolution: s, datumTransformation: a } = e, { pyramidLevel: r, pyramidResolution: o, excessiveReading: l } = at(s, n, this.ioConfig.sampling);
    if (l) return;
    let c = e.srcExtent || ve(i, t, a);
    if (c == null) return;
    const u = n.transform;
    u && (c = u.inverseTransform(c)), e.srcExtent = c;
    const { x: h, y: f } = n.storageInfo.origin, m = Math.floor((c.xmin - h) / o.x + 0.1), y = Math.floor((f - c.ymax) / o.y + 0.1), g = Math.floor((c.xmax - h) / o.x - 0.1), d = Math.floor((f - c.ymin) / o.y - 0.1), p = c.width < 0.1 * o.x ? 0 : g - m + 1, x = c.height < 0.1 * o.y ? 0 : d - y + 1;
    e.pyramidLevel = r, e.pyramidResolution = o, e.srcWidth = p, e.srcHeight = x, e.ul = { x: m, y };
  }
  _getRequestOptionsWithSliceId(i) {
    return this.rasterInfo.multidimensionalInfo != null && i.sliceId == null && (i = { ...i, sliceId: this.getSliceIndex(i.multidimensionalDefinition) }), i;
  }
  _processIdentifyResult(i, e) {
    const { srcLocation: n, position: t, pyramidLevel: s, useTransposedTile: a } = e, r = i.pixels[0].length / i.width / i.height;
    if (!(!i.mask || i.mask[t])) return { location: n, value: null };
    const { multidimensionalInfo: o } = this.rasterInfo;
    if (o == null || !a) {
      const d = i.pixels.map((w) => w[t]), p = { location: n, value: d, pyramidLevel: s }, x = this._computeMagDirValues(d.map((w) => [w]));
      return x?.length && (p.magdirValue = x.map((w) => w[0])), p;
    }
    let l = i.pixels.map((d) => d.slice(t * r, t * r + r)), c = this._computeMagDirValues(l);
    const { requestSomeSlices: u, identifyOptions: h } = e;
    let f = Pt(o, h.transposedVariableName);
    if (u) {
      const d = Ot(f, h.multidimensionalDefinition, h.timeExtent);
      l = l.map((p) => d.map((x) => p[x])), c = c?.map((p) => d.map((x) => p[x])), f = d.map((p) => f[p]);
    }
    const m = i.noDataValues || this.rasterInfo.noDataValue, y = { pixels: l, pixelType: i.pixelType };
    let g;
    return m != null && ($t(y, m), g = y.mask), { location: n, value: null, dataSeries: f.map((d, p) => {
      const x = { value: g?.[p] === 0 ? null : l.map((w) => w[p]), multidimensionalDefinition: d.multidimensionalDefinition.map((w) => new He({ ...w, isSlice: !0 })) };
      return c?.length && (x.magdirValue = [c[0][p], c[1][p]]), x;
    }), pyramidLevel: s };
  }
};
I([S()], H.prototype, "_rasterTileAlignmentInfo", void 0), I([S()], H.prototype, "_tileFetchQueue", void 0), I([S({ readOnly: !0 })], H.prototype, "_isGlobalWrappableSource", null), I([S({ readOnly: !0 })], H.prototype, "_hasNoneOrGCSShiftTransform", null), I([S()], H.prototype, "rasterJobHandler", null), I([S({ readOnly: !0 })], H.prototype, "rasterId", null), I([S(yt)], H.prototype, "url", null), I([S({ type: String, json: { write: !0 } })], H.prototype, "datasetName", void 0), I([S({ type: String, json: { write: !0 } })], H.prototype, "datasetFormat", void 0), I([S()], H.prototype, "hasUniqueSourceStorageInfo", void 0), I([S()], H.prototype, "rasterInfo", void 0), I([S()], H.prototype, "ioConfig", void 0), I([S()], H.prototype, "sourceJSON", void 0), H = I([X("esri.layers.support.rasterDatasets.BaseRaster")], H);
const ie = H;
function es(i, e) {
  if (i.spatialReference.equals(e)) return i;
  const n = Xe(i.spatialReference), t = Xe(e);
  if (n === t) return i;
  const s = n / t;
  return { x: i.x * s, y: i.y * s };
}
async function ze(i, e, n) {
  if (n.type === "extent") return is(i, e, n);
  const { width: t, height: s } = i, a = new Uint8Array(t * s), { contains: r, intersects: o } = await import("./geometryEngine-rgUmJKIy.js");
  return o(e, n) ? n.type === "polyline" ? ss(i, e, n) : r(n, e) ? i : ts(i, e, n) : new V({ pixelType: i.pixelType, width: t, height: s, mask: a, maskIsAlpha: !1, pixels: [...i.pixels] });
}
function ts(i, e, n) {
  if (!i) return i;
  const { width: t, height: s } = i, a = e.width / t, r = e.height / s, { xmin: o, ymax: l } = e;
  let c;
  if (n.type === "extent") {
    const d = (n.xmin - o) / a, p = (n.xmax - o) / a, x = (l - n.ymax) / r, w = (l - n.ymin) / r;
    c = [[[d, x], [d, w], [p, w], [p, x], [d, x]]];
  } else c = n.rings.map((d) => d.map(([p, x]) => [(p - o) / a, (l - x) / r]));
  const u = document.createElement("canvas");
  u.width = t, u.height = s;
  const h = u.getContext("2d");
  h.fillStyle = "#f00", h.beginPath(), c.forEach((d) => {
    h.moveTo(d[0][0], d[0][1]);
    for (let p = 0; p < d.length; p++) h.lineTo(d[p][0], d[p][1]);
    h.closePath();
  }), h.fill();
  const f = h.getImageData(0, 0, t, s).data, m = i.mask, y = t * s, g = new Uint8Array(y);
  for (let d = 0; d < y; d++) m && !m[d] || (g[d] = f[4 * d + 3] > 127 ? 255 : 0);
  return new V({ pixelType: i.pixelType, width: t, height: s, mask: g, maskIsAlpha: !1, pixels: [...i.pixels] });
}
function is(i, e, n) {
  const { width: t, height: s } = i, a = new Uint8Array(t * s), r = e.width / t, o = e.height / s;
  if (n.width / r < 0.5 || n.height / o < 0.5) return new V({ pixelType: i.pixelType, width: t, height: s, mask: a, pixels: [...i.pixels] });
  const { xmin: l, xmax: c, ymin: u, ymax: h } = e, { xmin: f, xmax: m, ymin: y, ymax: g } = n, d = Math.max(l, f), p = Math.min(c, m), x = Math.max(u, y), w = Math.min(h, g), b = 0.5 * r, T = 0.5 * o;
  if (p - d < b || w - x < T || p < l + b || d > c - b || x > h - T || w < u + T) return new V({ pixelType: i.pixelType, width: t, height: s, mask: a, pixels: [...i.pixels] });
  const R = Math.max(0, (d - l) / r), v = Math.min(t, Math.max(0, (p - l) / r)), _ = Math.max(0, (h - w) / o), F = Math.min(s, Math.max(0, (h - x) / o)), C = Math.round(R), k = Math.round(v) - 1, O = Math.round(_), M = Math.round(F) - 1;
  if (C === k && R % 1 > 0.5 && v % 1 < 0.5 || O === M && _ % 1 > 0.5 && F % 1 < 0.5) return new V({ pixelType: i.pixelType, width: t, height: s, mask: a, pixels: [...i.pixels] });
  if (C === 0 && O === 0 && k === t && M === s) return i;
  const B = i.mask;
  for (let $ = O; $ <= M; $++) for (let D = C; D <= k; D++) {
    const J = $ * t + D;
    a[J] = B ? B[J] : 255;
  }
  return new V({ pixelType: i.pixelType, width: t, height: s, mask: a, pixels: [...i.pixels] });
}
function ss(i, e, n) {
  const { width: t, height: s } = i, a = new Uint8Array(t * s), r = e.width / t, o = e.height / s, { xmin: l, ymax: c } = e, { paths: u } = n, h = i.mask;
  for (let f = 0; f < u.length; f++) {
    const m = u[f];
    for (let y = 0; y < m.length - 1; y++) {
      const [g, d] = m[y], [p, x] = m[y + 1];
      let w = Math.floor((c - d) / o), b = Math.floor((c - x) / o);
      if (b < w) {
        const R = w;
        w = b, b = R;
      }
      w = Math.max(0, w), b = Math.min(s - 1, b);
      const T = (p - g) / (x - d);
      for (let R = w; R <= b; R++) {
        const v = R === w ? Math.max(d, x) : (s + 1 - R) * o, _ = R === b ? Math.min(d, x) : v - o;
        let F = Math.floor(x === d ? (g - l) / r : (T * (v - d) + g - l) / r), C = Math.floor(x === d ? (p - l) / r : (T * (_ - d) + g - l) / r);
        if (C < F) {
          const O = F;
          F = C, C = O;
        }
        const k = R * t;
        F = Math.max(0, F), C = Math.min(t - 1, C);
        for (let O = k + F; O <= k + C; O++) a[O] = h ? h[O] : 255;
      }
    }
  }
  return new V({ pixelType: i.pixelType, width: t, height: s, mask: a, pixels: [...i.pixels] });
}
function ns(i, e, n, t = !0) {
  const { spatialReference: s } = i, { x: a, y: r } = es(n, s);
  let o, l, c;
  const u = e.type === "extent" ? e : e.extent;
  let { xmin: h, xmax: f, ymax: m, ymin: y } = u;
  const { xmin: g, ymax: d } = i.extent;
  return t ? (h = g + (h > g ? a * Math.round((h - g) / a) : 0), m = d - (m < d ? r * Math.round((d - m) / r) : 0), f = g + (f > g ? a * Math.round((f - g) / a) : 0), y = d - (y < d ? r * Math.round((d - y) / r) : 0), o = new z({ xmin: h, ymax: m, xmax: f, ymin: y, spatialReference: s }), l = Math.round(o.width / a), c = Math.round(o.height / r)) : (l = Math.floor((f - h) / a + 0.8), c = Math.floor((m - y) / r + 0.8), h = g + (h > g ? a * Math.floor((h - g) / a + 0.1) : 0), m = d - (m < d ? r * Math.floor((d - m) / r + 0.1) : 0), f = h + l * a, y = m - c * r, o = new z({ xmin: h, ymax: m, xmax: f, ymin: y, spatialReference: s })), { extent: o, width: l, height: c };
}
const rs = 40;
let ne = class extends ie {
  constructor() {
    super(...arguments), this.datasetFormat = "Function", this.tileType = "Raster", this.rasterFunction = null, this._clippingGeometry = /* @__PURE__ */ new Map();
  }
  async open(e) {
    await this.init();
    const { rasterFunction: n } = this;
    this.primaryRasters?.rasters?.length ? n.sourceRasters = this.primaryRasters.rasters : (this.primaryRasters = n.getPrimaryRasters(), this.rasterJobHandler && this.primaryRasters.rasters?.forEach((u) => u.rasterJobHandler = this.rasterJobHandler));
    const { rasters: t, rasterIds: s } = this.primaryRasters, a = t.map((u) => u.rasterInfo ? void 0 : u.open(e));
    await Promise.all(a);
    const r = t.map(({ rasterInfo: u }) => u), o = n.bind({ rasterInfos: r, rasterIds: s });
    if (n.rawSourceRasterInfos = r, !o.success || r.length === 0) throw new P("raster-function:open", `cannot bind the function: ${o.error ?? ""}`);
    const l = n.functionName === "Table" ? n : n.functionArguments?.raster;
    l?.functionName === "Table" && (n.rasterInfo.attributeTable = _e.fromJSON(l.functionArguments.attributeTableAsRecordSet)), await this.syncJobHandler();
    const c = r[0];
    this.hasUniqueSourceStorageInfo = r.length === 1 || r.slice(1).every((u) => this._hasSameStorageInfo(u, c)), this.set("sourceJSON", t[0].sourceJSON), this.set("rasterInfo", n.rasterInfo), await this._updateClipGeometry();
  }
  async syncJobHandler() {
    return this.rasterJobHandler?.updateRasterFunction(this.rasterFunction);
  }
  async fetchPixels(e, n, t, s = {}) {
    const { rasters: a, rasterIds: r } = this.primaryRasters;
    let o = !1;
    const { interpolation: l } = s, c = this.rasterFunction.flatWebGLFunctionChain?.hasFocalFunction;
    !s.requestRawData && c && (o = a.length === 1 && !s.skipRasterFunction, s = { ...s, interpolation: "bilinear", requestRawData: o });
    const u = a.map((b) => b.fetchPixels(e, n, t, s)), h = await Promise.all(u), f = h.map((b) => b.pixelBlock), m = o || s.requestRawData ? h.map((b) => b.srcTilePixelSize) : null;
    if (s.skipRasterFunction || f.every((b) => b == null)) return h[0];
    const y = h.find((b) => b.pixelBlock != null)?.extent ?? e;
    let g = this.rasterJobHandler ? await this.rasterJobHandler.process({ extent: y, primaryPixelBlocks: f, primaryPixelSizes: m, primaryRasterIds: r }) : this.rasterFunction.process({ extent: y, primaryPixelBlocks: f, primaryPixelSizes: m, primaryRasterIds: r });
    const { transformGrid: d } = h[0];
    if (!o || g == null || d == null) {
      const b = s.noClip ? null : this.getClippingGeometry(y.spatialReference);
      return s.noClip || s.requestRawData || g == null || !b || (g = await ze(g, y, b)), { ...h[0], pixelBlock: g };
    }
    const p = { rows: d.spacing[0], cols: d.spacing[1] };
    let x;
    this.rasterJobHandler ? x = (await this.rasterJobHandler.mosaicAndTransform({ srcPixelBlocks: [g], srcMosaicSize: { width: g.width, height: g.height }, destDimension: { width: n, height: t }, coefs: d.coefficients, sampleSpacing: p, projectDirections: !1, gcsGrid: null, isUV: !1, interpolation: l, alignmentInfo: void 0, blockWidths: null }, s)).pixelBlock : x = pt(g, { width: n, height: t }, d.coefficients, p, l);
    const w = s.noClip ? null : this.getClippingGeometry(e.spatialReference);
    return s.noClip || s.requestRawData || x == null || w == null || (x = await ze(x, e, w)), { extent: e, srcExtent: h[0].srcExtent, pixelBlock: x };
  }
  getClippingGeometry(e) {
    const n = this._clippingGeometry.get("0");
    if (!e || !n) return n;
    const t = this._getSRKey(e);
    let s = this._clippingGeometry.get(t);
    return s != null || (s = e.equals(n.spatialReference) ? n : Ae(n, e), this._clippingGeometry.set(t, s)), s;
  }
  _hasSameStorageInfo(e, n) {
    const { storageInfo: t, pixelSize: s, spatialReference: a, extent: r } = e, { storageInfo: o, pixelSize: l, spatialReference: c, extent: u } = n;
    return s.x === l.x && s.y === l.y && a.equals(c) && r.equals(u) && t.blockHeight === o.blockHeight && t.blockWidth === o.blockWidth && t.maximumPyramidLevel === o.maximumPyramidLevel;
  }
  async _updateClipGeometry() {
    const e = this.rasterFunction.getClippingGeometries()[0];
    let n = e?.clippingGeometry;
    if (n && e.clippingType === "inside") {
      const { extent: t } = this.rasterInfo, { difference: s, densify: a } = await import("./geometryEngine-rgUmJKIy.js");
      let r = a(Nt.fromExtent(t), 2 * (t.width + t.height) / rs);
      r = Ae(r, n.spatialReference), n = s(r, n);
    }
    this._clippingGeometry.clear(), n && this._clippingGeometry.set("0", n);
  }
  _getSRKey(e) {
    return String(e.wkid ?? e.wkt ?? e.wkt2);
  }
};
I([S({ type: String, json: { write: !0 } })], ne.prototype, "datasetFormat", void 0), I([S()], ne.prototype, "tileType", void 0), I([S()], ne.prototype, "rasterFunction", void 0), I([S()], ne.prototype, "primaryRasters", void 0), ne = I([X("esri.layers.support.rasterDatasets.FunctionRaster")], ne);
const wt = ne, as = (i) => {
  let e = class extends i {
    constructor(...t) {
      super(...t), this._isConstructedFromFunctionRaster = !1, this._rasterJobHandler = { instance: null, refCount: 0, connectionPromise: null }, this.bandIds = null, this.copyright = null, this.interpolation = "nearest", this.multidimensionalSubset = null, this.raster = null, this.serviceRasterInfo = null, this.sourceJSON = null, this.spatialReference = null, this.symbolizer = null, this._isConstructedFromFunctionRaster = t[0]?.raster?.datasetFormat === "Function";
    }
    get fullExtent() {
      return this.serviceRasterInfo?.extent;
    }
    set multidimensionalDefinition(t) {
      this._set("multidimensionalDefinition", t), this.updateRenderer();
    }
    set rasterFunction(t) {
      t?.functionName?.toLowerCase() === "none" && (t = void 0), this._set("rasterFunction", t), this.updateRasterFunction();
    }
    get rasterInfo() {
      return zt(le.getLogger(this), "rasterInfo", { replacement: "serviceRasterInfo", version: "4.29", warnOnce: !0 }), this._get("serviceRasterInfo");
    }
    set url(t) {
      this._set("url", ut(t, le.getLogger(this)));
    }
    set renderer(t) {
      t == null && this.rasterFunction == null ? this._configDefaultRenderer("override") : (this._set("renderer", t), this.updateRenderer());
    }
    readRenderer(t, s, a) {
      const r = s?.layerDefinition?.drawingInfo?.renderer;
      return Lt(r, a) || void 0;
    }
    async convertVectorFieldData(t, s) {
      const { serviceRasterInfo: a } = this;
      if (t == null || !a) return null;
      const r = this._rasterJobHandler.instance, o = a.dataType;
      return r ? r.convertVectorFieldData({ pixelBlock: t, dataType: o }, s) : Ht(t, o);
    }
    async computeStatisticsHistograms(t, s) {
      t = Le(Wt, t).clone();
      const { serviceRasterInfo: a } = this, { geometry: r } = t;
      if (r == null) throw new P("imagery-tile-mixin:compute-statistics-histograms", "geometry must be specified");
      let o = r;
      const { spatialReference: l } = a;
      r.spatialReference.equals(l) || (await Ee(), o = r.type === "extent" ? ve(r, l) : Ae(r, l));
      const c = t.pixelSize ?? new A({ x: a.pixelSize.x, y: a.pixelSize.y, spatialReference: l }), { extent: u, width: h, height: f } = ns(a, o, c), m = await this.fetchPixels(u, h, f, { ...s, interpolation: "nearest" });
      if (m.pixelBlock == null) throw new P("imagery-tile-mixin:compute-statistics-histograms", "failed to fetch pixels");
      const y = await ze(m.pixelBlock, u, o), g = this._rasterJobHandler.instance;
      return g ? g.computeStatisticsHistograms({ pixelBlock: y }, s) : We(y);
    }
    async createFlowMesh(t, s) {
      const a = this._rasterJobHandler.instance;
      return a ? a.createFlowMesh(t, s) : Gt(t.meshType, t.simulationSettings, t.flowData, s.signal != null ? s.signal : new AbortController().signal);
    }
    normalizeRasterFetchOptions(t) {
      const { multidimensionalInfo: s } = this.serviceRasterInfo ?? {};
      if (s == null) return t;
      let a = t.multidimensionalDefinition || this.multidimensionalDefinition;
      a?.length || (a = Ye(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset }));
      const r = t.timeExtent || this.timeExtent;
      if (a != null && r != null && (r.start != null || r.end != null)) {
        a = a.map((g) => g.clone());
        const o = s.variables.find(({ name: g }) => g === a[0].variableName)?.dimensions?.find(({ name: g }) => g === "StdTime"), l = a.find(({ dimensionName: g }) => g === "StdTime");
        if (!o || !l) return { ...t, multidimensionalDefinition: null };
        const { start: c, end: u } = r, h = c == null ? null : c.getTime(), f = u == null ? null : u.getTime(), m = h ?? f, y = f ?? h;
        if (o.values != null) {
          const g = o.values.filter((d) => {
            if (Array.isArray(d)) {
              if (m === y) return d[0] <= m && d[1] >= m;
              const p = d[0] <= m && d[1] > m || d[0] < y && d[1] >= y, x = d[0] >= m && d[1] <= y || d[0] < m && d[1] > y;
              return p || x;
            }
            return m === y ? d === m : d >= m && d <= y;
          });
          if (g.length) {
            const d = g.sort((p, x) => {
              const w = Array.isArray(p) ? p[0] : p, b = Array.isArray(p) ? p[1] : p, T = Array.isArray(x) ? x[0] : x, R = Array.isArray(x) ? x[1] : x;
              return m === y ? w - T : Math.abs(b - y) - Math.abs(R - y);
            })[0];
            l.values = [d];
          } else a = null;
        } else if (o.hasRegularIntervals && o.extent) {
          const [g, d] = o.extent;
          m > d || y < g ? a = null : l.values = m === y ? [m] : [Math.max(g, m), Math.min(d, y)];
        }
      }
      return a != null && jt(a, this.multidimensionalSubset) ? { ...t, multidimensionalDefinition: null } : { ...t, multidimensionalDefinition: a };
    }
    async updateRasterFunction() {
      if (!this.loaded || this.type !== "imagery-tile" || !this.rasterFunction && !this._cachedRasterFunctionJson || JSON.stringify(this.rasterFunction) === JSON.stringify(this._cachedRasterFunctionJson)) return;
      if (this._isConstructedFromFunctionRaster && this.raster.datasetFormat === "Function") {
        const u = this.raster.rasterFunction.toJSON();
        return !this.rasterFunction && u && this._set("rasterFunction", Be.fromJSON(u)), void (this._cachedRasterFunctionJson = this.rasterFunction?.toJSON());
      }
      let t, s = this.raster, a = !1;
      s.datasetFormat === "Function" ? (t = s.primaryRasters.rasters, s = t[0], a = !0) : t = [s];
      const { rasterFunction: r } = this;
      if (r) {
        const u = { raster: s };
        t.length > 1 && t.forEach((m) => u[m.url] = m);
        const h = xt(r.functionDefinition?.toJSON() ?? r.toJSON(), u), f = new wt({ rasterFunction: h });
        f.rasterJobHandler = this._rasterJobHandler.instance, await f.open(), this._cachedRasterFunctionJson = this.rasterFunction?.toJSON(), this.raster = f;
      } else this.raster = s, this._cachedRasterFunctionJson = null, await s.when();
      if (this._cachedRendererJson = null, !a && !r) return;
      const { bandIds: o } = this, { bandCount: l } = this.raster.rasterInfo, c = o?.length ? o.some((u) => u >= l) : l >= 3;
      o && (c || this.renderer && this.renderer.type !== "raster-stretch") && this._set("bandIds", null), this._configDefaultRenderer("auto");
    }
    async updateRenderer() {
      const { loaded: t, symbolizer: s } = this;
      if (!t || !s || !this.renderer) return;
      const { rasterInfo: a } = this.raster, r = Ke(a, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), o = r?.name, l = Qe({ ...this.renderer.toJSON(), variableName: o });
      if (JSON.stringify(this._cachedRendererJson) === JSON.stringify(l)) return;
      const c = this._rasterJobHandler.instance;
      c && (s.rasterInfo = Ze(a, o), s.rendererJSON = l, s.bind(), await c.updateSymbolizer(s), this._cachedRendererJson = l);
    }
    async applyRenderer(t, s) {
      const a = t?.pixelBlock;
      if (!(a != null && a.pixels && a.pixels.length > 0)) return null;
      let r;
      await this.updateRenderer();
      const o = this._rasterJobHandler.instance, l = this.bandIds ?? [];
      return r = o ? await o.symbolize({ ...t, simpleStretchParams: s, bandIds: l }) : this.symbolizer.symbolize({ ...t, simpleStretchParams: s, bandIds: l }), r;
    }
    getTileUrl(t, s, a) {
      return this.raster.datasetFormat === "RasterTileServer" ? `${this.url}/tile/${t}/${s}/${a}` : "";
    }
    getCompatibleTileInfo(t, s, a = !1) {
      if (!this.loaded || s == null) return null;
      if (a && t.equals(this.spatialReference)) return this.tileInfo;
      const r = qt(t);
      return ee.create({ size: 256, spatialReference: t, origin: r ? { x: r.origin[0], y: r.origin[1] } : { x: s.xmin, y: s.ymax } });
    }
    getCompatibleFullExtent(t) {
      return this.loaded ? (this._compatibleFullExtent && this._compatibleFullExtent.spatialReference.equals(t) || (this._compatibleFullExtent = this.raster.computeExtent(t)), this._compatibleFullExtent) : null;
    }
    async fetchTile(t, s, a, r = {}) {
      if (n(this), r.requestAsImageElement) {
        const l = this.getTileUrl(t, s, a);
        return ft(l, { responseType: "image", query: { ...this.refreshParameters, ...this.raster.ioConfig.customFetchParameters }, signal: r.signal }).then((c) => c.data);
      }
      const { serviceRasterInfo: o } = this;
      if (o.multidimensionalInfo != null && (r = this.normalizeRasterFetchOptions(r)).multidimensionalDefinition == null) {
        const l = r.tileInfo || o.storageInfo.tileInfo;
        return { extent: this.raster.getTileExtentFromTileInfo(t, s, a, l), pixelBlock: null };
      }
      return await this._initJobHandler(), await this.updateRasterFunction(), this.renderer?.type === "raster-shaded-relief" && (r = { ...r, buffer: { cols: 1, rows: 1 } }), this.raster.fetchTile(t, s, a, r);
    }
    async fetchPixels(t, s, a, r = {}) {
      return this.serviceRasterInfo.multidimensionalInfo != null && (r = this.normalizeRasterFetchOptions(r)).multidimensionalDefinition == null ? { extent: t, pixelBlock: null } : (await this._initJobHandler(), await this.updateRasterFunction(), s = Math.round(s), a = Math.round(a), this.raster.fetchPixels(t, s, a, r));
    }
    async identify(t, s = {}) {
      const { raster: a, serviceRasterInfo: r } = this;
      if (r.multidimensionalInfo != null && !(r.hasMultidimensionalTranspose && (ht(s.multidimensionalDefinition) || s.transposedVariableName || s.timeExtent)) && (s = this.normalizeRasterFetchOptions(s)).multidimensionalDefinition == null)
        return { location: t, value: null };
      const o = this.multidimensionalSubset?.areaOfInterest;
      if (o && !o.contains(t)) throw new P("imagery-tile-mixin:identify", "the request cannot be fulfilled when falling outside of the multidimensional subset");
      return a.identify(t, s);
    }
    increaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount++;
    }
    decreaseRasterJobHandlerUsage() {
      this._rasterJobHandler.refCount--, this._rasterJobHandler.refCount <= 0 && this._shutdownJobHandler();
    }
    hasStandardTime() {
      const t = this.serviceRasterInfo?.multidimensionalInfo;
      if (t == null || this.serviceRasterInfo?.dataType !== "standard-time") return !1;
      const s = this.multidimensionalDefinition, a = s?.[0]?.variableName;
      return t.variables.some((r) => r.name === a && (!s?.[0].dimensionName || r.dimensions.some((o) => o.name === "StdTime")));
    }
    getStandardTimeValue(t) {
      return new Date(24 * (t - 25569) * 3600 * 1e3).toString();
    }
    getMultidimensionalSubsetVariables(t) {
      const s = t ?? this.serviceRasterInfo?.multidimensionalInfo;
      return Ut(this.multidimensionalSubset, s);
    }
    _configDefaultSettings() {
      this._configDefaultInterpolation(), this.multidimensionalDefinition || (this.multidimensionalDefinition = Ye(this.raster.rasterInfo, { multidimensionalSubset: this.multidimensionalSubset })), this.rasterFunction && this.raster.datasetFormat === "Function" && (this._cachedRasterFunctionJson = this.rasterFunction.toJSON()), this._configDefaultRenderer();
    }
    _initJobHandler() {
      if (this._rasterJobHandler.connectionPromise != null) return this._rasterJobHandler.connectionPromise;
      const t = new Kt();
      return this._rasterJobHandler.connectionPromise = t.initialize().then(async () => {
        n(this), this._rasterJobHandler.instance = t, this.raster.rasterJobHandler = t, this.raster.datasetFormat === "Function" && this.raster.syncJobHandler(), this.rasterFunction && await this.updateRasterFunction().catch(() => {
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
        const { raster: t } = this, s = Vt(t.rasterInfo, t.tileType, this.sourceJSON?.defaultResamplingMethod);
        this._set("interpolation", s);
      }
    }
    _configDefaultRenderer(t = "no") {
      n(this);
      const { rasterInfo: s } = this.raster;
      !this.bandIds && s.bandCount > 1 && (this.bandIds = Xt(s));
      const a = Ke(s, { multidimensionalDefinition: this.multidimensionalDefinition, multidimensionalSubset: this.multidimensionalSubset }), r = a?.name;
      if (!this.renderer || t === "override") {
        const u = et(s, { bandIds: this.bandIds, variableName: r }), h = s.statistics, f = h && h.length > 0 ? h[0] : null, m = f?.max ?? 0, y = f?.min ?? 0;
        this.raster.datasetFormat === "WCSServer" && u.type === "raster-stretch" && (m > 1e24 || y < -1e24) && (u.dynamicRangeAdjustment = !0, u.statistics = null, u.stretchType === "none" && (u.stretchType = "min-max")), this.renderer = u;
      }
      const o = Qe({ ...this.renderer.toJSON(), variableName: r }), l = Ze(s, r);
      this.symbolizer ? (this.symbolizer.rendererJSON = o, this.symbolizer.rasterInfo = l) : this.symbolizer = new Yt({ rendererJSON: o, rasterInfo: l });
      const c = this.symbolizer.bind();
      if (c.success) {
        if (t === "auto") {
          const { colormap: u } = this.raster.rasterInfo, h = this.renderer;
          if (u != null && h.type === "raster-colormap") {
            const f = et(this.raster.rasterInfo);
            JSON.stringify(f) !== JSON.stringify(h) && this._configDefaultRenderer("override");
          } else if (h.type === "raster-stretch") {
            const f = this.bandIds?.length, m = h.statistics?.length;
            !h.dynamicRangeAdjustment && m && f && m !== f && this._configDefaultRenderer("override");
          }
        }
      } else le.getLogger(this).warn("imagery-tile-mixin", c.error || "The given renderer is not supported by the layer."), t === "auto" && this._configDefaultRenderer("override");
    }
  };
  function n(t) {
    if (!t.raster || !t.serviceRasterInfo) throw new P("imagery-tile", "no raster");
  }
  return I([S({ clonable: !1 })], e.prototype, "_cachedRendererJson", void 0), I([S({ clonable: !1 })], e.prototype, "_cachedRasterFunctionJson", void 0), I([S({ clonable: !1 })], e.prototype, "_compatibleFullExtent", void 0), I([S({ clonable: !1 })], e.prototype, "_isConstructedFromFunctionRaster", void 0), I([S({ clonable: !1 })], e.prototype, "_rasterJobHandler", void 0), I([S()], e.prototype, "bandIds", void 0), I([S({ json: { origins: { service: { read: { source: "copyrightText" } } } } })], e.prototype, "copyright", void 0), I([S({ json: { read: !1 } })], e.prototype, "fullExtent", null), I([S()], e.prototype, "interpolation", void 0), I([S()], e.prototype, "ioConfig", void 0), I([S({ type: [He], json: { write: !0 } })], e.prototype, "multidimensionalDefinition", null), I([S({ type: Bt, json: { write: !0 } })], e.prototype, "multidimensionalSubset", void 0), I([S()], e.prototype, "raster", void 0), I([S({ type: Be, json: { name: "renderingRule", write: !0 } })], e.prototype, "rasterFunction", null), I([S({ readOnly: !0 })], e.prototype, "rasterInfo", null), I([S()], e.prototype, "serviceRasterInfo", void 0), I([S()], e.prototype, "sourceJSON", void 0), I([S({ readOnly: !0, type: L, json: { read: !1 } })], e.prototype, "spatialReference", void 0), I([S({ type: ee })], e.prototype, "tileInfo", void 0), I([S(yt)], e.prototype, "url", null), I([S({ types: Jt, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy() {
    const t = this.renderer?.type === "raster-stretch" && this.renderer.stretchType === "none" && !this.renderer.useGamma;
    return { enabled: !this.loaded || this.raster.tileType === "Raster" || !t };
  } }, origins: { "web-scene": { types: Et, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: (t) => ({ enabled: t && t.type !== "vector-field" && t.type !== "flow" }) } } } } })], e.prototype, "renderer", null), I([At("renderer")], e.prototype, "readRenderer", null), I([S({ clonable: !1 })], e.prototype, "symbolizer", void 0), e = I([X("esri.layers.ImageryTileMixin")], e), e;
};
function os(i) {
  const e = i.fields, n = i.records, t = e.some((c) => c.name.toLowerCase() === "oid") ? "OBJECTID" : "OID", s = [{ name: t, type: "esriFieldTypeOID", alias: "OID" }].concat(e.map((c) => ({ name: c.name, type: "esriFieldType" + c.typeName, alias: c.name }))), a = s.map((c) => c.name), r = [];
  let o = 0, l = 0;
  return n.forEach((c) => {
    const u = {};
    for (u[t] = o++, l = 1; l < a.length; l++) u[a[l]] = c[l - 1];
    r.push({ attributes: u });
  }), { displayFieldName: "", fields: s, features: r };
}
let It = class {
  static get supportedVersions() {
    return [5];
  }
  static parse(e) {
    const n = new DataView(e), t = 3 & n.getUint8(0);
    if (t !== 3) return { header: { version: t }, recordSet: null };
    const s = n.getUint32(4, !0), a = n.getUint16(8, !0), r = n.getUint16(10, !0), o = { version: t, recordCount: s, headerByteCount: a, recordByteCount: r };
    let l = 32;
    const c = [], u = [];
    let h;
    if (t === 3) {
      for (; n.getUint8(l) !== 13; ) h = String.fromCharCode(n.getUint8(l + 11)).trim(), c.push({ name: tt(new Uint8Array(e, l, 11)), type: h, typeName: ["String", "Date", "Double", "Boolean", "String", "Integer"][["C", "D", "F", "L", "M", "N"].indexOf(h)], length: n.getUint8(l + 16) }), l += 32;
      if (l += 1, c.length > 0) for (; u.length < s && e.byteLength - l > r; ) {
        const f = [];
        n.getUint8(l) === 32 ? (l += 1, c.forEach((m) => {
          if (m.type === "C") f.push(tt(new Uint8Array(e, l, m.length)).trim());
          else if (m.type === "N") f.push(parseInt(String.fromCharCode.apply(null, new Uint8Array(e, l, m.length)).trim(), 10));
          else if (m.type === "F") f.push(parseFloat(String.fromCharCode.apply(null, new Uint8Array(e, l, m.length)).trim()));
          else if (m.type === "D") {
            const y = String.fromCharCode.apply(null, new Uint8Array(e, l, m.length)).trim();
            f.push(new Date(parseInt(y.substring(0, 4), 10), parseInt(y.substring(4, 6), 10) - 1, parseInt(y.substring(6, 8), 10)));
          }
          l += m.length;
        }), u.push(f)) : l += r;
      }
    }
    return { header: o, fields: c, records: u, recordSet: os({ fields: c, records: u }) };
  }
};
const re = /* @__PURE__ */ new Map();
re.set("int16", "esriFieldTypeSmallInteger"), re.set("int32", "esriFieldTypeInteger"), re.set("int64", "esriFieldTypeInteger"), re.set("float32", "esriFieldTypeSingle"), re.set("float64", "esriFieldTypeDouble"), re.set("text", "esriFieldTypeString");
const lt = 8;
let de = class extends ie {
  constructor() {
    super(...arguments), this.storageInfo = null, this.datasetFormat = "CRF";
  }
  async open(e) {
    await this.init();
    const { data: n } = await this.request(this.url + "/conf.json", { signal: e?.signal });
    if (!this._validateHeader(n)) throw new P("cloudraster:open", "Invalid or unsupported conf.json.");
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const { storageInfo: t, rasterInfo: s } = this._parseHeader(n);
    if (s.dataType === "thematic") {
      const a = await this._fetchAuxiliaryInformation();
      s.attributeTable = a;
    }
    this._set("storageInfo", t), this._set("rasterInfo", s), this.ioConfig.retryCount = this.ioConfig.retryCount || 0;
  }
  async fetchRawTile(e, n, t, s = {}) {
    const { transposeInfo: a } = this.rasterInfo.storageInfo, { transposedVariableName: r } = s, o = !(!a || !r), l = o ? 0 : this.rasterInfo.storageInfo.maximumPyramidLevel - e;
    if (l < 0) return null;
    const c = this._buildCacheFilePath(l, n, t, s.multidimensionalDefinition, r), u = this._getIndexRecordFromBundle(n, t, o), h = await this.request(c, { range: { from: 0, to: this.storageInfo.headerSize - 1 }, responseType: "array-buffer", signal: s.signal });
    if (!h) return null;
    const f = new Uint8Array(h.data), m = this._getTileEndAndContentType(f, u);
    if (m.recordSize === 0) return null;
    const y = await this.request(c, { range: { from: m.position, to: m.position + m.recordSize }, responseType: "array-buffer", signal: s.signal });
    if (!y) return null;
    const [g, d] = this._getTileSize(o);
    return this.decodePixelBlock(y.data, { width: g, height: d, planes: null, pixelType: null, returnInterleaved: o });
  }
  _validateHeader(e) {
    const n = ["origin", "extent", "geodataXform", "LODInfos", "blockWidth", "blockHeight", "bandCount", "pixelType", "pixelSizeX", "pixelSizeY", "format", "packetSize"];
    return e && e.type === "RasterInfo" && !n.some((t) => !e[t]);
  }
  _parseHeader(e) {
    const n = ["u1", "u2", "u4", "u8", "s8", "u16", "s16", "u32", "s32", "f32", "f64"][e.pixelType], { bandCount: t, colormap: s, blockWidth: a, blockHeight: r, firstPyramidLevel: o, maximumPyramidLevel: l } = e, c = e.statistics?.map((N) => ({ min: N.min, max: N.max, avg: N.mean, stddev: N.standardDeviation, median: N.median, mode: N.mode })), u = e.histograms?.[0]?.counts?.length ? e.histograms : null, h = e.extent.spatialReference, f = e.geodataXform?.spatialReference, m = new L(h?.wkid || h?.wkt || h?.wkt2 ? h : f);
    let y = new z({ xmin: e.extent.xmin, ymin: e.extent.ymin, xmax: e.extent.xmax, ymax: e.extent.ymax, spatialReference: m });
    const g = new A({ x: e.pixelSizeX, y: e.pixelSizeY, spatialReference: m }), d = Math.round((y.xmax - y.xmin) / g.x), p = Math.round((y.ymax - y.ymin) / g.y), x = this._parseTransform(e.geodataXform), w = x ? y : null;
    x && (y = x.forwardTransform(y), g.x = (y.xmax - y.xmin) / d, g.y = (y.ymax - y.ymin) / p);
    const b = e.properties ?? {}, T = e.format.toLowerCase().replace("cache/", ""), R = new A(e.origin.x, e.origin.y, m);
    let v, _, F, C;
    if (s?.colors) for (v = [], _ = 0; _ < s.colors.length; _++) F = s.colors[_], C = s.values ? s.values[_] : _, v.push([C, 255 & F, F << 16 >>> 24, F << 8 >>> 24, F >>> 24]);
    const k = e.LODInfos, O = [];
    for (_ = 0; _ < k.levels.length; _++) O.push(new dt({ level: k.levels[_], resolution: k.resolutions[_], scale: 96 / 0.0254 * k.resolutions[_] }));
    const M = new ee({ dpi: 96, lods: O, format: T, origin: R, size: [a, r], spatialReference: m }), B = { recordSize: lt, packetSize: e.packetSize, headerSize: e.packetSize * e.packetSize * lt + 64 }, $ = [{ maxCol: Math.ceil(d / a) - 1, maxRow: Math.ceil(p / r) - 1, minCol: 0, minRow: 0 }];
    let D = 2;
    if (l > 0) for (_ = 0; _ < l; _++) $.push({ maxCol: Math.ceil(d / D / a) - 1, maxRow: Math.ceil(p / D / r) - 1, minCol: 0, minRow: 0 }), D *= 2;
    const J = e.mdInfo;
    let G = null;
    if (J && b._yxs) {
      const N = b._yxs;
      G = { packetSize: N.PacketSize, tileSize: [N.TileXSize, N.TileYSize] };
    }
    return { storageInfo: B, rasterInfo: new xe({ width: d, height: p, pixelType: n, bandCount: t, extent: y, nativeExtent: w, transform: x, spatialReference: m, pixelSize: g, keyProperties: b, statistics: c, histograms: u, multidimensionalInfo: J, colormap: v, storageInfo: new ge({ blockWidth: a, blockHeight: r, pyramidBlockWidth: a, pyramidBlockHeight: r, origin: R, tileInfo: M, transposeInfo: G, firstPyramidLevel: o, maximumPyramidLevel: l, blockBoundary: $ }) }) };
  }
  _parseTransform(e) {
    if (!Vi(e)) throw new P("cloudraster:open", "the data contains unsupported geodata transform types");
    const n = Xi(e);
    if (n.type === "identity") return null;
    if (n.type !== "polynomial" || !n.forwardCoefficients?.length || !n.inverseCoefficients?.length) throw new P("cloudraster:open", "the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");
    return n;
  }
  async _fetchAuxiliaryInformation(e) {
    const n = this.request(this.url + "/conf.vat.json", { signal: e }).then((r) => r.data).catch(() => null), t = this.request(this.url + "/conf.vat.dbf", { responseType: "array-buffer", signal: e }).then((r) => r.data).catch(() => null), s = await Promise.all([n, t]);
    let a;
    if (s[0]) {
      let r = s[0].fields;
      const o = s[0].values;
      if (r && o) {
        r = r.map((c) => ({ type: c.name === "OID" ? "esriFieldTypeOID" : re.get(c.type), name: c.name, alias: c.alias || c.name }));
        const l = o.map((c) => ({ attributes: c }));
        r && o && (a = { fields: r, features: l });
      }
    }
    return !a && s[1] && (a = It.parse(s[1]).recordSet), _e.fromJSON(a);
  }
  _buildCacheFilePath(e, n, t, s, a) {
    const r = this._getPackageSize(!!a), o = Math.floor(n / r) * r, l = Math.floor(t / r) * r, c = "R" + this._toHexString4(o) + "C" + this._toHexString4(l);
    let u = "L";
    u += e >= 10 ? e.toString() : "0" + e.toString();
    const { multidimensionalInfo: h } = this.rasterInfo, f = s?.[0];
    if (h == null || !f) return `${this.url}/_alllayers/${u}/${c}.bundle`;
    let m = "_yxs";
    if (!a) {
      m = h.variables.find((d) => d.name === f.variableName).dimensions[0].values.indexOf(f.values[0]).toString(16);
      const g = 4 - m.length;
      for (let d = 0; d < g; d++) m = "0" + m;
      m = "S" + m;
    }
    const y = this._getVariableFolderName(a || f.variableName);
    return `${this.url}/_alllayers/${y}/${m}/${u}/${c}.bundle`;
  }
  _getPackageSize(e = !1) {
    const { transposeInfo: n } = this.rasterInfo.storageInfo;
    return e && n != null ? n.packetSize ?? 0 : this.storageInfo.packetSize;
  }
  _getTileSize(e = !1) {
    const { storageInfo: n } = this.rasterInfo, { transposeInfo: t } = n;
    return e && t != null ? t.tileSize : n.tileInfo.size;
  }
  _getVariableFolderName(e) {
    return (e = e.trim()) === "" ? "_v" : e.replaceAll(/[\{|\}\-]/g, "_").replace("\\*", "_v");
  }
  _getIndexRecordFromBundle(e, n, t = !1) {
    const s = this._getPackageSize(t), a = s * (e % s) + n % s;
    if (a < 0) throw new Error("Invalid level / row / col");
    return 20 + a * this.storageInfo.recordSize + 44;
  }
  _getTileEndAndContentType(e, n) {
    const t = e.subarray(n, n + 8);
    let s, a = 0;
    for (s = 0; s < 5; s++) a |= (255 & t[s]) << 8 * s;
    const r = 1099511627775 & a;
    for (a = 0, s = 5; s < 8; s++) a |= (255 & t[s]) << 8 * (s - 5);
    return { position: r, recordSize: 1099511627775 & a };
  }
  _toHexString4(e) {
    let n = e.toString(16);
    if (n.length !== 4) {
      let t = 4 - n.length;
      for (; t-- > 0; ) n = "0" + n;
    }
    return n;
  }
};
I([S({ readOnly: !0 })], de.prototype, "storageInfo", void 0), I([S({ type: String, json: { write: !0 } })], de.prototype, "datasetFormat", void 0), de = I([X("esri.layers.support.rasterDatasets.CloudRaster")], de);
const ls = de;
function bt(i) {
  return ["x", "e", "east", "long", "longitude"].includes(i.toLowerCase());
}
function St(i) {
  return ["y", "n", "west", "lat", "latitude"].includes(i.toLowerCase());
}
function cs(i) {
  const { axes: e } = i.domain, n = Object.keys(e), t = [], s = [];
  let a = -1, r = -1, o = [];
  for (let x = 0; x < n.length; x++) {
    const w = n[x];
    bt(w) ? a = x : St(w) && (r = x);
    const b = e[w], T = [];
    if ("values" in b) {
      b.values.forEach((v) => T.push(typeof v == "string" ? new Date(v).getTime() : v));
      const R = T[1] - T[0];
      t.push([T[0] - 0.5 * R, T[T.length - 1] + 0.5 * R]), s.push(R);
    } else {
      const { start: R, stop: v, num: _ } = b, F = (v - R) / (_ - 1);
      t.push([R - 0.5 * F, v + 0.5 * F]), s.push(F);
      for (let C = 0; C < _; C++) T.push(R + F * C);
    }
    o.push({ name: w, values: T, extent: [T[0], T[T.length - 1]] });
  }
  a > -1 && r === -1 ? r = a === 0 ? 1 : 0 : r > -1 && a === -1 ? a = r === 0 ? 1 : 0 : r === -1 && a === -1 && (a = 0, r = 1), o = o.filter((x, w) => !(w === a || w === r));
  const { referencing: l } = i.domain, c = l.find((x) => x.coordinates.includes(n[a])).system.id, u = c?.slice(c.lastIndexOf("/") + 1), h = u == null || u === "CRS84" ? 4326 : Number(u), f = new L({ wkid: h }), [m, y] = t[a], [g, d] = t[r], p = new z({ xmin: m, xmax: y, ymin: g, ymax: d, spatialReference: f });
  return { width: Math.round(p.width / s[a]), height: Math.round(p.height / s[r]), extent: p, dimensions: o };
}
function Me(i) {
  const e = ei();
  return e ? i[e] ?? Object.values(i)[0] : Object.values(i)[0];
}
function Pe() {
  return Math.round(255 * Math.random());
}
function us(i) {
  const e = {}, { parameters: n } = i;
  if (!n) return e;
  for (const [t, s] of Object.entries(n)) {
    const { type: a, description: r, unit: o, categoryEncoding: l, observedProperty: c } = s;
    if (a === "Parameter" && (e[t] = {}, r && (e[t].description = Me(r)), o && (e[t].unit = o.label ? Me(o.label) : null, e[t].symbol = o.symbol?.value), l)) {
      const u = Object.entries(l).map((m, y) => ({ OID: y, Value: Number(m[1]), ClassName: m[0].slice(m[0].lastIndexOf("/") + 1), Count: 1 }));
      let h = !1;
      c?.categories?.length && (c.categories.forEach((m) => {
        if (!m.id) return;
        const y = m.id.slice(m.id.lastIndexOf("/") + 1), g = u.find((p) => p.ClassName === y);
        if (!g) return;
        const d = m.label ? Me(m.label) : null;
        if (g.Label = d, m.preferredColor) {
          const p = Qt.fromHex(m.preferredColor);
          p && (h = !0, g.Red = p.r, g.Green = p.g, g.Blue = p.b);
        }
      }), h && u.forEach((m) => {
        m.Red == null && (m.Red = Pe(), m.Green = Pe(), m.Blue = Pe());
      }));
      const f = { objectIdFieldName: "", fields: [{ name: "OID", type: "esriFieldTypeOID", alias: "OID", domain: null }, { name: "Value", type: "esriFieldTypeInteger", alias: "Value", domain: null }, { name: "Count", type: "esriFieldTypeDouble", alias: "Count", domain: null }, { name: "ClassName", type: "esriFieldTypeString", alias: "ClassName", domain: null, length: 50 }, { name: "Label", type: "esriFieldTypeString", alias: "Label", domain: null, length: 50 }], features: u.map((m) => ({ attributes: m })) };
      h && f.fields.push({ name: "Red", type: "esriFieldTypeInteger", alias: "Red", domain: null }, { name: "Green", type: "esriFieldTypeInteger", alias: "Green", domain: null }, { name: "Blue", type: "esriFieldTypeInteger", alias: "Blue", domain: null }), e[t].attributeTable = f;
    }
  }
  return e;
}
function hs(i) {
  let e = Number.MAX_VALUE, n = -Number.MAX_VALUE;
  for (let t = 0; t < i.length; t++) {
    const s = i[t];
    s != null && (s < e && (e = s), s > n && (n = s));
  }
  return Zt(e, n);
}
function fs(i, e, n) {
  const t = i.map((l, c) => ({ name: l, count: e[c] })).sort((l, c) => l.name > c.name ? -1 : 1), s = (a = 1, (l) => a *= l.count);
  var a;
  const r = [...t.slice(1), { name: "", count: 1 }].reverse().map(s).reverse();
  let o = 0;
  for (let l = i.length - 1; l >= 0; l--)
    o += r[t.findIndex(({ name: c }) => c === i[l])] * (n % e[l]), n = Math.floor(n / e[l]);
  return o;
}
function ms(i) {
  const { width: e, height: n, extent: t, dimensions: s } = cs(i), { ranges: a } = i, r = Object.keys(a).sort((f, m) => f < m ? -1 : 1), o = [];
  for (let f = 0; f < r.length; f++) {
    const m = r[f];
    s?.length && o.push({ name: m, dimensions: s });
  }
  const l = us(i);
  o.forEach((f) => l[f.name] && Object.assign(f, l[f.name]));
  const c = o.length ? { variables: o } : void 0, u = [];
  for (let f = 0; f < r.length; f++) {
    const m = r[f], { values: y, dataType: g, axisNames: d, shape: p } = a[m], x = p.length > 2 ? f * p.slice(0, -2).reduce((_, F) => _ * F) : 0, w = d.slice(0, -2), b = p.slice(0, -2), T = g === "float" ? "f32" : hs(y), R = e * n, v = y.length / R;
    for (let _ = 0; _ < v; _++) {
      const F = V.createEmptyBand(T, R), C = new Uint8Array(R).fill(255);
      let k = !1;
      const O = _ * R;
      for (let M = 0; M < R; M++) {
        const B = y[O + M];
        B == null ? (C[M] = 0, k = !0) : F[M] = B;
      }
      if (f === 0 || s?.length) {
        const M = new V({ width: e, height: n, mask: k ? C : null, pixels: [F], pixelType: T });
        M.updateStatistics(), s?.length ? u[fs(w, b, _) + x] = M : u.push(M);
      } else {
        const M = u[_];
        M.pixels.push(F), k ? M.mask && (M.mask = V.combineBandMasks([M.mask, C])) : M.mask = k ? C : null;
      }
    }
  }
  const h = Object.values(l).find((f) => f.attributeTable)?.attributeTable;
  return { extent: t, pixelBlocks: u, multidimensionalInfo: c, attributeTable: h, bandNames: c ? void 0 : r };
}
let ce = class extends ie {
  constructor() {
    super(...arguments), this.datasetFormat = "MEMORY", this.source = null;
  }
  get url() {
    return "";
  }
  async open(i) {
    await this.init();
    const e = this.source, { pixelBlocks: n, attributeTable: t, statistics: s, histograms: a, name: r, nativeExtent: o, transform: l } = e, c = n[0], { width: u, height: h, pixelType: f } = c, m = e.extent ?? new z({ xmin: -0.5, ymin: 0.5, xmax: u - 0.5, ymax: h - 0.5, spatialReference: new L({ wkid: 3857 }) }), y = e.isPseudoSpatialReference ?? !e.extent, g = { x: m.width / u, y: m.height / h }, d = { ...e.keyProperties };
    t && (d.DataType = "Thematic");
    const p = new xe({ width: u, height: h, pixelType: f, extent: m, nativeExtent: o, attributeTable: t, transform: l, pixelSize: g, spatialReference: m.spatialReference, bandCount: c.pixels.length, keyProperties: d, multidimensionalInfo: e.multidimensionalInfo, statistics: s, isPseudoSpatialReference: y, histograms: a });
    this.ioConfig.skipMapInfo && this.updateImageSpaceRasterInfo(p), this.createRemoteDatasetStorageInfo(p, 512, 512), this._set("rasterInfo", p), this.updateTileInfo(), p.multidimensionalInfo ? await this._buildMDimStats(e.pixelBlocks, p.multidimensionalInfo) : await this._buildInMemoryRaster(c, { width: 512, height: 512 }, i), p.multidimensionalInfo || (this.source = null), this.datasetName = r;
  }
  fetchRawTile(i, e, n, t = {}) {
    if (!this._pixelBlockTiles) {
      const { rasterInfo: a } = this, [r, o] = a.storageInfo.tileInfo.size, { sliceId: l } = t, { pixelBlocks: c } = this.source, u = { pixelBlock: l == null ? c[0] : c[l], useBilinear: a.dataType !== "thematic", tileSize: { width: r, height: o }, level: i, row: e, col: n }, h = this.rasterJobHandler ? this.rasterJobHandler.clipTile(u, t) : ti(u);
      return Promise.resolve(h);
    }
    const s = this._pixelBlockTiles.get(`${i}/${e}/${n}`);
    return Promise.resolve(s);
  }
  async _buildInMemoryRaster(i, e, n) {
    const { rasterInfo: t } = this, s = t.storageInfo.maximumPyramidLevel ?? 0, a = t.dataType !== "thematic", r = this.rasterJobHandler ? this.rasterJobHandler.split({ pixelBlock: i, tileSize: e, maximumPyramidLevel: s, useBilinear: a }, n) : Promise.resolve(ii(i, e, s, a)), o = t.statistics != null, l = t.histograms != null, c = this.ioConfig.skipStatistics || o ? Promise.resolve({ statistics: null, histograms: null }) : this.rasterJobHandler ? this.rasterJobHandler.estimateStatisticsHistograms({ pixelBlock: i }, n) : Promise.resolve(si(i)), u = await gt([r, c]);
    if (!u[0].value && u[1].value) throw new P("inmemory-raster:open", "failed to build in memory raster");
    this._pixelBlockTiles = u[0].value, o || (t.statistics = u[1].value?.statistics), l || (t.histograms = u[1].value?.histograms);
  }
  async _buildMDimStats(i, e, n) {
    for (let t = 0; t < e.variables.length; t++) {
      const s = e.variables[t];
      if (s.statistics) continue;
      const a = s.dimensions.map((c) => new He({ variableName: s.name, dimensionName: c.name, values: [c.values?.[0] ?? c.extent?.[0]], isSlice: !0 })), r = mt(a, e), o = r == null ? null : i[r];
      if (o == null) continue;
      const l = this.rasterJobHandler ? await this.rasterJobHandler.computeStatisticsHistograms({ pixelBlock: o }, n) : We(o);
      s.statistics = l.statistics, s.histograms || (s.histograms = l.histograms);
    }
  }
};
I([S({ type: String, json: { write: !0 } })], ce.prototype, "datasetFormat", void 0), I([S()], ce.prototype, "source", void 0), I([S()], ce.prototype, "url", null), ce = I([X("esri.layers.support.rasterDatasets.InMemoryRaster")], ce);
const qe = ce;
let pe = class extends ie {
  constructor() {
    super(...arguments), this.datasetFormat = "CovJSON";
  }
  async open(e) {
    await this.init();
    const { extent: n, pixelBlocks: t, multidimensionalInfo: s, attributeTable: a, bandNames: r } = await this._fetchData(e), { statistics: o, histograms: l } = We(t[0]), c = r?.map((m) => ({ BandName: m })), u = { DataType: a ? "Thematic" : s ? "Scientific" : "Generic", BandProperties: c }, h = new qe({ source: { extent: n, pixelBlocks: t, attributeTable: a ? _e.fromJSON(a) : null, multidimensionalInfo: s, statistics: o, histograms: l, keyProperties: u, isPseudoSpatialReference: !1 } });
    await h.open(), this._inMemoryRaster = h;
    const f = this.source ? "" : this.url.slice(this.url.lastIndexOf("/") + 1);
    this._set("datasetName", f.slice(0, f.indexOf("."))), this._set("rasterInfo", h.rasterInfo);
  }
  fetchRawTile(e, n, t, s = {}) {
    return this._inMemoryRaster.fetchRawTile(e, n, t, s);
  }
  async _fetchData(e) {
    const n = this.source ?? (await this.request(this.url, { signal: e?.signal })).data, t = "imagery-tile-layer:open-coverage-json";
    if (n.type?.toLowerCase() !== "coverage" || n.domain?.domainType?.toLowerCase() !== "grid") throw new P(t, "Only coverage with Grid domain type is supported");
    if (!n.ranges) throw new P(t, "Missing ranges in the grid coverage data");
    if (!n.domain.referencing?.length) throw new P(t, "Missing domain referencing in the grid coverage data");
    const s = Object.values(n.ranges);
    for (let a = 0; a < s.length; a++) {
      const { axisNames: r, shape: o, type: l, values: c } = s[a];
      if (!(l.toLowerCase() === "ndarray" && c?.length && r?.length && o?.length)) throw new P(t, "Only ranges with valid NdArray, axisNames, shape, and inline values are supported");
      if (!(bt(r[r.length - 1]) && St(r[r.length - 2]))) throw new P(t, "Only row-major ordered pixel values are supported. X axis must be the last axis.");
    }
    return ms(n);
  }
};
I([S({ type: String, json: { write: !0 } })], pe.prototype, "datasetFormat", void 0), I([S({ constructOnly: !0 })], pe.prototype, "source", void 0), pe = I([X("esri.layers.support.rasterDatasets.CovJSONRaster")], pe);
const ds = pe;
function fe(i, e) {
  if (!i || !e) return [];
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const t = [];
  if (e) {
    const a = fe(i, n);
    for (let r = 0; r < a.length; r++)
      fe(a[r], e).forEach((o) => t.push(o));
    return t;
  }
  const s = i.getElementsByTagNameNS("*", n);
  if (!s || s.length === 0) return [];
  for (let a = 0; a < s.length; a++) t.push(s[a] || s.item(a));
  return t;
}
function q(i, e) {
  if (!i || !e) return null;
  let n = e;
  e.includes("/") ? (n = e.slice(0, e.indexOf("/")), e = e.slice(e.indexOf("/") + 1)) : e = "";
  const t = fe(i, n);
  return t.length > 0 ? e ? q(t[0], e) : t[0] : null;
}
function K(i, e = null) {
  const n = e ? q(i, e) : i;
  let t;
  return n ? (t = n.textContent || n.nodeValue, t ? t.trim() : null) : null;
}
function ps(i, e) {
  const n = fe(i, e), t = [];
  let s;
  for (let a = 0; a < n.length; a++) s = n[a].textContent || n[a].nodeValue, s && (s = s.trim(), s !== "" && t.push(s));
  return t;
}
function Se(i, e) {
  return ps(i, e).map((n) => Number(n));
}
function oe(i, e) {
  const n = K(i, e);
  return Number(n);
}
function Oe(i, e) {
  const n = i?.nodeName?.toLowerCase(), t = e.toLowerCase();
  return n.slice(n.lastIndexOf(":") + 1) === t;
}
function ct(i, e) {
  if (!i || !e) return null;
  const n = [];
  for (let t = 0; t < i.length; t++) n.push(i[t]), n.push(e[t]);
  return n;
}
function ys(i) {
  const e = q(i, "GeodataXform"), n = Fe(oe(e, "SpatialReference/WKID") || K(e, "SpatialReference/WKT"));
  if (e.getAttribute("xsi:type") !== "typens:PolynomialXform") return { spatialReference: n, transform: null };
  const t = oe(e, "PolynomialOrder") ?? 1, s = Se(e, "CoeffX/Double"), a = Se(e, "CoeffY/Double"), r = Se(e, "InverseCoeffX/Double"), o = Se(e, "InverseCoeffY/Double"), l = ct(s, a), c = ct(r, o);
  return { spatialReference: n, transform: l && c && l.length && c.length ? new je({ spatialReference: n, polynomialOrder: t, forwardCoefficients: l, inverseCoefficients: c }) : null };
}
function gs(i) {
  const e = oe(i, "NoDataValue"), n = q(i, "Histograms/HistItem"), t = oe(n, "HistMin"), s = oe(n, "HistMax"), a = oe(n, "BucketCount"), r = K(n, "HistCounts")?.split("|").map((f) => Number(f));
  let o, l, c, u;
  fe(i, "Metadata/MDI").forEach((f) => {
    const m = Number(f.textContent ?? f.nodeValue);
    switch (f.getAttribute("key").toUpperCase()) {
      case "STATISTICS_MINIMUM":
        o = m;
        break;
      case "STATISTICS_MAXIMUM":
        l = m;
        break;
      case "STATISTICS_MEAN":
        c = m;
        break;
      case "STATISTICS_STDDEV":
        u = m;
    }
  });
  const h = oe(i, "Metadata/SourceBandIndex");
  return { noDataValue: e, histogram: r?.length && t != null && s != null ? { min: t, max: s, size: a || r.length, counts: r } : null, sourceBandIndex: h, statistics: o != null && l != null ? { min: o, max: l, avg: c, stddev: u } : null };
}
function Fe(i) {
  if (!i) return null;
  let e = Number(i);
  if (!isNaN(e) && e !== 0) return new L({ wkid: e });
  if (i = String(i).trim(), ni(i)) return new L({ wkt2: i });
  const n = i.toUpperCase();
  if (n.startsWith("COMPD_CS")) {
    if (!n.includes("VERTCS") || !n.includes("GEOGCS") && !n.startsWith("PROJCS")) return null;
    const t = n.indexOf("VERTCS"), s = n.indexOf("PROJCS"), a = s > -1 ? s : n.indexOf("GEOGCS");
    if (a === -1) return null;
    const r = i.slice(a, i.lastIndexOf("]", t) + 1).trim(), o = i.slice(t, i.lastIndexOf("]")).trim();
    e = $e(r);
    const l = new L(e ? { wkid: e } : { wkt: r }), c = $e(o);
    return c && (l.vcsWkid = c), l;
  }
  return n.startsWith("GEOGCS") || n.startsWith("PROJCS") ? (e = $e(i), new L(e !== 0 ? { wkid: e } : { wkt: i })) : null;
}
function $e(i) {
  const e = i.replaceAll("]", "[").replaceAll('"', "").split("[").map((s) => s.trim()).filter((s) => s !== ""), n = e[e.length - 1].split(","), t = n[0]?.toLowerCase();
  if ((t === "epsg" || t === "esri") && i.endsWith('"]]')) {
    const s = Number(n[1]);
    if (!isNaN(s) && s !== 0) return s;
  }
  return 0;
}
function Ue(i) {
  if (i?.documentElement.tagName?.toLowerCase() !== "pamdataset") return {};
  const e = { spatialReference: null, transform: null, metadata: {}, rasterBands: [], statistics: null, histograms: null };
  i.documentElement.childNodes.forEach((t) => {
    if (t.nodeType === 1) {
      if (Oe(t, "SRS")) {
        if (!e.spatialReference) {
          const s = K(t);
          e.spatialReference = Fe(s);
        }
      } else if (Oe(t, "Metadata")) if (t.getAttribute("domain") === "xml:ESRI") {
        const { spatialReference: s, transform: a } = ys(t);
        e.transform = a, e.spatialReference || (e.spatialReference = s);
      } else
        fe(t, "MDI").forEach((s) => e.metadata[s.getAttribute("key")] = K(s));
      else if (Oe(t, "PAMRasterBand")) {
        const s = gs(t);
        s.sourceBandIndex != null && e.rasterBands[s.sourceBandIndex] == null ? e.rasterBands[s.sourceBandIndex] = s : e.rasterBands.push(s);
      }
    }
  });
  const n = e.rasterBands;
  if (n.length) {
    const t = !!n[0].statistics;
    e.statistics = t ? n.map((a) => a.statistics).filter(Je) : null;
    const s = !!n[0].histogram;
    e.histograms = s ? n.map((a) => a.histogram).filter(Je) : null;
  }
  return e;
}
let Te = class extends ie {
  async open(i) {
    await this.init();
    const e = await this._fetchData(i);
    let { spatialReference: n, statistics: t, histograms: s, transform: a } = await this._fetchAuxiliaryData(i);
    const r = !n;
    r && (n = new L({ wkid: 3857 })), s?.length && t == null && (t = Ge(s));
    const { width: o, height: l } = e;
    let c = new z({ xmin: -0.5, ymin: 0.5 - l, xmax: o - 0.5, ymax: 0.5, spatialReference: n });
    const u = a ? a.forwardTransform(c) : c;
    let h = !0;
    if (a) {
      const m = a.forwardCoefficients;
      h = m && m[1] === 0 && m[2] === 0, h && (a = null, c = u);
    }
    const f = new qe({ source: { extent: u, nativeExtent: c, transform: a, pixelBlocks: [e], statistics: t, histograms: s, keyProperties: { DateType: "Processed" }, isPseudoSpatialReference: r }, ioConfig: { sampling: "closest", skipStatistics: !0 } });
    this.ioConfig.skipMapInfo && (f.ioConfig.skipMapInfo = !0), await f.open(), f.source = null, this._set("rasterInfo", f.rasterInfo), this._inMemoryRaster = f;
  }
  fetchRawTile(i, e, n, t = {}) {
    return this._inMemoryRaster.fetchRawTile(i, e, n, t);
  }
  async _fetchData(i) {
    const { data: e } = await this.request(this.url, { responseType: "array-buffer", signal: i?.signal }), n = ri(e).toUpperCase();
    if (n !== "JPG" && n !== "PNG" && n !== "GIF" && n !== "BMP") throw new P("image-aux-raster:open", "the data is not a supported format");
    this._set("datasetFormat", n);
    const t = n.toLowerCase(), s = t === "gif" || t === "bmp" || !ai("ios"), a = await this.decodePixelBlock(e, { format: t, useCanvas: s, hasNoZlibMask: !0 });
    if (a == null) throw new P("image-aux-raster:open", "the data cannot be decoded");
    return a;
  }
  async _fetchAuxiliaryData(i) {
    const e = i?.signal, { skipExtensions: n = [], skipMapInfo: t } = this.ioConfig, s = t || n.includes("aux.xml") ? null : this.request(this.url + ".aux.xml", { responseType: "xml", signal: e }), a = this.datasetFormat, r = a === "JPG" ? "jgw" : a === "PNG" ? "pgw" : a === "BMP" ? "bpw" : null, o = r && n.includes(r) ? null : this.request(this.url.slice(0, this.url.lastIndexOf(".")) + "." + r, { responseType: "text", signal: e }), l = await gt([s, o]);
    if (e?.aborted) throw oi();
    const c = Ue(l[0].value?.data);
    if (!c.transform) {
      const u = l[1].value ? l[1].value.data.split(`
`).slice(0, 6).map((h) => Number(h)) : null;
      c.transform = u?.length === 6 ? new je({ forwardCoefficients: [u[4], u[5], u[0], -u[1], u[2], -u[3]] }) : null;
    }
    return c;
  }
};
I([S({ type: String, json: { write: !0 } })], Te.prototype, "datasetFormat", void 0), Te = I([X("esri.layers.support.rasterDatasets.ImageAuxRaster")], Te);
const Re = Te;
let ye = class extends ie {
  constructor() {
    super(...arguments), this._levelOffset = 0, this._tilemapCache = null, this._slices = null, this.datasetFormat = "RasterTileServer", this.tileType = null;
  }
  async open(i) {
    await this.init();
    const e = i?.signal, n = this.sourceJSON ? { data: this.sourceJSON } : await this.request(this.url, { query: { f: "json" }, signal: e });
    n.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
    const t = n.data;
    if (this.sourceJSON = t, !t) throw new P("imageserverraster:open", "cannot initialize tiled image service, missing service info");
    if (!t.tileInfo) throw new P("imageserverraster:open", "use ImageryLayer to open non-tiled image services");
    this._fixScaleInServiceInfo();
    const s = ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"];
    this.tileType = t.cacheType, this.tileType == null && (s.includes(t.tileInfo.format.toLowerCase()) ? this.tileType = "Map" : t.tileInfo.format.toLowerCase() === "lerc" ? this.tileType = "Elevation" : this.tileType = "Raster"), this.datasetName = t.name?.slice(t.name.indexOf("/") + 1) ?? "";
    const a = await this._fetchRasterInfo({ signal: e });
    if (a == null) throw new P("image-server-raster:open", "cannot initialize image service");
    li(a, t);
    const r = this.tileType === "Map" ? xs(t.tileInfo, t) : ee.fromJSON(t.tileInfo);
    ci(r);
    const [o, l] = this._computeMinMaxLOD(a, r), { extent: c, pixelSize: u } = a, h = 0.5 / a.width * u.x, f = Math.max(u.x, u.y), { lods: m } = r;
    (this.tileType !== "Map" && t.maxScale !== 0 || Math.abs(u.x - u.y) > h || !m.some((v) => Math.abs(v.resolution - f) < h)) && (u.x = u.y = o.resolution, a.width = Math.ceil((c.xmax - c.xmin) / u.x - 0.1), a.height = Math.ceil((c.ymax - c.ymin) / u.y - 0.1));
    const y = o.level - l.level, [g, d] = r.size, p = [], x = [];
    m.forEach((v, _) => {
      v.level >= l.level && v.level <= o.level && p.push({ x: v.resolution, y: v.resolution }), _ < m.length - 1 && x.push(Math.round(10 * v.resolution / m[_ + 1].resolution) / 10);
    }), p.sort((v, _) => v.x - _.x);
    const w = this.computeBlockBoundary(c, g, d, r.origin, p, y), b = p.length > 1 ? p.slice(1) : null;
    let T;
    t.transposeInfo && (T = { tileSize: [t.transposeInfo.rows, t.transposeInfo.cols], packetSize: a.keyProperties?._yxs.PacketSize ?? 0 });
    const R = x.length <= 1 || x.length >= 3 && x.slice(0, -1).every((v) => v === x[0]) ? x[0] ?? 2 : Math.round(10 / (l.resolution / o.resolution) ** (-1 / y)) / 10;
    if (a.storageInfo = new ge({ blockWidth: r.size[0], blockHeight: r.size[1], pyramidBlockWidth: r.size[0], pyramidBlockHeight: r.size[1], pyramidResolutions: b, pyramidScalingFactor: R, compression: r.format, origin: r.origin, firstPyramidLevel: 1, maximumPyramidLevel: y, tileInfo: r, transposeInfo: T, blockBoundary: w }), this._fixGCSShift(a), this._set("rasterInfo", a), t.capabilities.toLowerCase().includes("tilemap")) {
      const v = { tileInfo: a.storageInfo.tileInfo, parsedUrl: ui(this.url), url: this.url, tileServers: [] };
      this._tilemapCache = new hi({ layer: v });
    }
  }
  async fetchRawTile(i, e, n, t = {}) {
    const { storageInfo: s, extent: a } = this.rasterInfo, { transposeInfo: r } = s, o = r != null && !!t.transposedVariableName;
    if (this._slices && !o && t.sliceId == null) return null;
    const l = o ? 0 : s.maximumPyramidLevel - i + this._levelOffset, c = `${this.url}/tile/${l}/${e}/${n}`, u = this._slices ? o ? { variable: t.transposedVariableName } : { sliceId: t.sliceId || 0 } : null, { data: h } = await this.request(c, { query: u, responseType: "array-buffer", signal: t.signal });
    if (!h) return null;
    const f = o ? r.tileSize : s.tileInfo.size, m = await this.decodePixelBlock(h, { width: f[0], height: f[1], planes: null, pixelType: null, isPoint: this.tileType === "Elevation", returnInterleaved: o, noDataValue: this.rasterInfo.noDataValue });
    if (m == null) return null;
    const y = s.blockBoundary[i];
    if (s.compression !== "jpg" || n > y.minCol && n < y.maxCol && e > y.minRow && e < y.maxRow) return m;
    const { origin: g, blockWidth: d, blockHeight: p } = s, { x, y: w } = this.getPyramidPixelSize(i), b = Math.round((a.xmin - g.x) / x) % d, T = Math.round((a.xmax - g.x) / x) % d || d, R = Math.round((g.y - a.ymax) / w) % p, v = Math.round((g.y - a.ymin) / w) % p || p, _ = n === y.minCol ? b : 0, F = e === y.minRow ? R : 0, C = n === y.maxCol ? T : d, k = e === y.maxRow ? v : p;
    return fi(m, { x: _, y: F }, { width: C - _, height: k - F }), m;
  }
  getSliceIndex(i) {
    if (!this._slices || i == null || i.length === 0) return null;
    const e = i;
    for (let n = 0; n < this._slices.length; n++) {
      const t = this._slices[n].multidimensionalDefinition;
      if (t.length === e.length && !t.some((s) => {
        const a = e.find((r) => s.variableName === r.variableName && r.dimensionName === s.dimensionName);
        return a ? (Array.isArray(s.values[0]) ? `${s.values[0][0]}-${s.values[0][1]}` : s.values[0]) !== (Array.isArray(a.values[0]) ? `${a.values[0][0]}-${a.values[0][1]}` : a.values[0]) : !0;
      })) return n;
    }
    return null;
  }
  async fetchVariableStatisticsHistograms(i, e) {
    const n = this.request(this.url + "/statistics", { query: { variable: i, f: "json" }, signal: e }).then((a) => a.data?.statistics), t = this.request(this.url + "/histograms", { query: { variable: i, f: "json" }, signal: e }).then((a) => a.data?.histograms), s = await Promise.all([n, t]);
    return s[0] && s[0].forEach((a) => {
      a.avg = a.mean, a.stddev = a.standardDeviation;
    }), s[1]?.[0]?.counts?.length || (s[1] = null), { statistics: s[0] || null, histograms: s[1] || null };
  }
  async computeBestPyramidLevelForLocation(i, e = {}) {
    if (!this._tilemapCache) return 0;
    let n = this.identifyPixelLocation(i, 0, e.datumTransformation);
    if (n === null) return null;
    let t = 0;
    const { maximumPyramidLevel: s } = this.rasterInfo.storageInfo;
    let a = s - t + this._levelOffset;
    const r = n.srcLocation;
    for (; a >= 0; ) {
      try {
        if (await this._tilemapCache.fetchAvailability(a, n.row, n.col, e) === "available") break;
      } catch {
      }
      if (a--, t++, n = this.identifyPixelLocation(r, t, e.datumTransformation), n === null) return null;
    }
    return a === -1 || n == null ? null : t;
  }
  async _fetchRasterInfo(i) {
    const e = this.sourceJSON;
    if (this.tileType === "Map") {
      const r = e.fullExtent || e.extent, o = Math.ceil((r.xmax - r.xmin) / e.pixelSizeX - 0.1), l = Math.ceil((r.ymax - r.ymin) / e.pixelSizeY - 0.1), c = L.fromJSON(e.spatialReference || r.spatialReference), u = new A({ x: e.pixelSizeX, y: e.pixelSizeY, spatialReference: c });
      return new xe({ width: o, height: l, bandCount: 3, extent: z.fromJSON(r), spatialReference: c, pixelSize: u, pixelType: "u8", statistics: null, keyProperties: { DataType: "processed" } });
    }
    const { signal: n } = i, t = mi(this.url, this.sourceJSON, { signal: n, query: this.ioConfig.customFetchParameters }), s = e.hasMultidimensions ? this.request(`${this.url}/slices`, { query: { f: "json" }, signal: n }).then((r) => r.data?.slices).catch(() => null) : null, a = await Promise.all([t, s]);
    return this._slices = a[1], a[0];
  }
  _fixScaleInServiceInfo() {
    const { sourceJSON: i } = this;
    i.minScale && i.minScale < 0 && (i.minScale = 0), i.maxScale && i.maxScale < 0 && (i.maxScale = 0);
  }
  _fixGCSShift(i) {
    const { extent: e, spatialReference: n } = i;
    e.xmin > -1 && e.xmax > 181 && n?.wkid && n.isGeographic && (i.nativeExtent = i.extent, i.transform = new Yi(), i.extent = i.transform.forwardTransform(e));
  }
  _computeMinMaxLOD(i, e) {
    const { pixelSize: n } = i, t = 0.5 / i.width * n.x, { lods: s } = e, a = e.lodAt(Math.max.apply(null, s.map((f) => f.level))), r = e.lodAt(Math.min.apply(null, s.map((f) => f.level))), { tileType: o } = this;
    if (o === "Map") return this._levelOffset = s[0].level, [a, r];
    if (o === "Raster")
      return [s.find((f) => f.resolution === n.x) ?? a, r];
    const { minScale: l, maxScale: c } = this.sourceJSON;
    let u = a;
    c > 0 && (u = s.find((f) => Math.abs(f.scale - c) < t), u || (u = s.filter((f) => f.scale > c).sort((f, m) => f.scale > m.scale ? 1 : -1)[0] ?? a));
    let h = r;
    return l > 0 && (h = s.find((f) => Math.abs(f.scale - l) < t) ?? r, this._levelOffset = h.level - r.level), [u, h];
  }
};
function xs(i, e) {
  if (!i) return null;
  const { minScale: n, maxScale: t, minLOD: s, maxLOD: a } = e;
  if (s != null && a != null) return ee.fromJSON({ ...i, lods: i.lods.filter(({ level: r }) => r != null && r >= s && r <= a) });
  if (n !== 0 && t !== 0) {
    const r = (c) => Math.round(1e4 * c) / 1e4, o = n ? r(n) : 1 / 0, l = t ? r(t) : -1 / 0;
    return ee.fromJSON({ ...i, lods: i.lods.filter((c) => {
      const u = r(c.scale);
      return u <= o && u >= l;
    }) });
  }
  return ee.fromJSON(i);
}
I([S({ type: String, json: { write: !0 } })], ye.prototype, "datasetFormat", void 0), I([S()], ye.prototype, "tileType", void 0), ye = I([X("esri.layers.support.rasterDatasets.ImageServerRaster")], ye);
const ws = ye, Y = /* @__PURE__ */ new Map();
Y.set("Int8", "s8"), Y.set("UInt8", "u8"), Y.set("Int16", "s16"), Y.set("UInt16", "u16"), Y.set("Int32", "s32"), Y.set("UInt32", "u32"), Y.set("Float32", "f32"), Y.set("Float64", "f32"), Y.set("Double64", "f32");
const te = /* @__PURE__ */ new Map();
te.set("none", { blobExtension: ".til", isOneSegment: !0, decoderFormat: "bip" }), te.set("lerc", { blobExtension: ".lrc", isOneSegment: !1, decoderFormat: "lerc" }), te.set("deflate", { blobExtension: ".pzp", isOneSegment: !0, decoderFormat: "deflate" }), te.set("jpeg", { blobExtension: ".pjg", isOneSegment: !0, decoderFormat: "jpg" });
let ue = class extends ie {
  constructor() {
    super(...arguments), this._files = null, this._storageIndex = null, this.datasetFormat = "MRF";
  }
  async open(i) {
    await this.init(), this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1);
    const e = i ? i.signal : null, n = await this.request(this.url, { responseType: "xml", signal: e }), { rasterInfo: t, files: s } = this._parseHeader(n.data), { skipMapInfo: a, skipExtensions: r = [] } = this.ioConfig;
    if (!r.includes("aux.xml") && !a) {
      const p = await this._fetchAuxiliaryData(i);
      p != null && (t.statistics = p.statistics ?? t.statistics, t.histograms = p.histograms, p.histograms && t.statistics == null && (t.statistics = Ge(p.histograms)));
    }
    a && this.updateImageSpaceRasterInfo(t), this._set("rasterInfo", t), this._files = s;
    const o = await this.request(s.index, { responseType: "array-buffer", signal: e });
    this._storageIndex = this._parseIndex(o.data);
    const { blockWidth: l, blockHeight: c } = this.rasterInfo.storageInfo, u = this.rasterInfo.storageInfo.pyramidScalingFactor, { width: h, height: f } = this.rasterInfo, m = [], y = this._getBandSegmentCount();
    let g = 0, d = -1;
    for (; g < this._storageIndex.length; ) {
      d++;
      const p = Math.ceil(h / l / u ** d) - 1, x = Math.ceil(f / c / u ** d) - 1;
      g += (p + 1) * (x + 1) * y * 4, m.push({ maxRow: x, maxCol: p, minCol: 0, minRow: 0 });
    }
    this.rasterInfo.storageInfo.blockBoundary = m, d > 0 && (this.rasterInfo.storageInfo.firstPyramidLevel = 1, this.rasterInfo.storageInfo.maximumPyramidLevel = d), this.updateTileInfo();
  }
  async fetchRawTile(i, e, n, t = {}) {
    const { blockWidth: s, blockHeight: a, blockBoundary: r } = this.rasterInfo.storageInfo, o = r[i];
    if (!o || o.maxRow < e || o.maxCol < n || o.minRow > e || o.minCol > n) return null;
    const { bandCount: l, pixelType: c } = this.rasterInfo, { ranges: u, actualTileWidth: h, actualTileHeight: f } = this._getTileLocation(i, e, n);
    if (!u || u.length === 0) return null;
    if (u[0].from === 0 && u[0].to === 0) {
      const k = new Uint8Array(s * a);
      return new V({ width: s, height: a, pixels: null, mask: k, validPixelCount: 0 });
    }
    const { bandIds: m } = this.ioConfig, y = this._getBandSegmentCount(), g = [];
    let d = 0;
    for (d = 0; d < y; d++) m && !m.includes(d) || g.push(this.request(this._files.data, { range: { from: u[d].from, to: u[d].to }, responseType: "array-buffer", signal: t.signal }));
    const p = await Promise.all(g), x = p.map((k) => k.data.byteLength).reduce((k, O) => k + O), w = new Uint8Array(x), b = [];
    let T = 0;
    for (d = 0; d < y; d++) b.push(T), w.set(new Uint8Array(p[d].data), T), T += p[d].data.byteLength;
    const R = te.get(this.rasterInfo.storageInfo.compression).decoderFormat, v = await this.decodePixelBlock(w.buffer, { width: s, height: a, format: R, planes: m?.length || l, offsets: b, pixelType: c });
    if (v == null) return null;
    let { noDataValue: _ } = this.rasterInfo;
    if (_ != null && R !== "lerc" && !v.mask && (_ = _[0], _ != null)) {
      const k = v.width * v.height, O = new Uint8Array(k);
      if (Math.abs(_) > 1e24) for (d = 0; d < k; d++) Math.abs((v.pixels[0][d] - _) / _) > 1e-6 && (O[d] = 1);
      else for (d = 0; d < k; d++) v.pixels[0][d] !== _ && (O[d] = 1);
      v.mask = O;
    }
    let F = 0, C = 0;
    if (h !== s || f !== a) {
      let k = v.mask;
      if (k) for (d = 0; d < a; d++) if (C = d * s, d < f) for (F = h; F < s; F++) k[C + F] = 0;
      else for (F = 0; F < s; F++) k[C + F] = 0;
      else for (k = new Uint8Array(s * a), v.mask = k, d = 0; d < f; d++) for (C = d * s, F = 0; F < h; F++) k[C + F] = 1;
    }
    return v;
  }
  _parseIndex(i) {
    if (i.byteLength % 16 > 0) throw new Error("invalid array buffer must be multiples of 16");
    let e, n, t, s, a, r;
    if (di) {
      for (n = new Uint8Array(i), s = new ArrayBuffer(i.byteLength), t = new Uint8Array(s), a = 0; a < i.byteLength / 4; a++) for (r = 0; r < 4; r++) t[4 * a + r] = n[4 * a + 3 - r];
      e = new Uint32Array(s);
    } else e = new Uint32Array(i);
    return e;
  }
  _getBandSegmentCount() {
    return te.get(this.rasterInfo.storageInfo.compression).isOneSegment ? 1 : this.rasterInfo.bandCount;
  }
  _getTileLocation(i, e, n) {
    const { blockWidth: t, blockHeight: s, pyramidScalingFactor: a } = this.rasterInfo.storageInfo, { width: r, height: o } = this.rasterInfo, l = this._getBandSegmentCount();
    let c, u, h, f = 0, m = 0;
    for (h = 0; h < i; h++) m = a ** h, c = Math.ceil(r / t / m), u = Math.ceil(o / s / m), f += c * u;
    m = a ** i, c = Math.ceil(r / t / m), u = Math.ceil(o / s / m), f += e * c + n, f *= 4 * l;
    const y = this._storageIndex.subarray(f, f + 4 * l);
    let g = 0, d = 0;
    const p = [];
    for (let x = 0; x < l; x++) g = y[4 * x] * 2 ** 32 + y[4 * x + 1], d = g + y[4 * x + 2] * 2 ** 32 + y[4 * x + 3], p.push({ from: g, to: d });
    return { ranges: p, actualTileWidth: n < c - 1 ? t : Math.ceil(r / m) - t * (c - 1), actualTileHeight: e < u - 1 ? s : Math.ceil(o / m) - s * (u - 1) };
  }
  _parseHeader(i) {
    const e = q(i, "MRF_META/Raster");
    if (!e) throw new P("mrf:open", "not a valid MRF format");
    const n = q(e, "Size"), t = parseInt(n.getAttribute("x"), 10), s = parseInt(n.getAttribute("y"), 10), a = parseInt(n.getAttribute("c"), 10), r = (K(e, "Compression") || "none").toLowerCase();
    if (!te.has(r)) throw new P("mrf:open", "currently does not support compression " + r);
    const o = K(e, "DataType") || "UInt8", l = Y.get(o);
    if (l == null) throw new P("mrf:open", "currently does not support pixel type " + o);
    const c = q(e, "PageSize"), u = parseInt(c.getAttribute("x"), 10), h = parseInt(c.getAttribute("y"), 10), f = q(e, "DataValues");
    let m, y;
    if (f && (y = f.getAttribute("NoData"), y != null && (m = y.trim().split(" ").map((k) => parseFloat(k)))), q(i, "MRF_META/CachedSource")) throw new P("mrf:open", "currently does not support MRF referencing other data files");
    const g = q(i, "MRF_META/GeoTags"), d = q(g, "BoundingBox");
    let p, x = !1;
    if (d != null) {
      const k = parseFloat(d.getAttribute("minx")), O = parseFloat(d.getAttribute("miny")), M = parseFloat(d.getAttribute("maxx")), B = parseFloat(d.getAttribute("maxy")), $ = K(g, "Projection") || "";
      let D = L.WGS84;
      if ($ !== "LOCAL_CS[]") if ($.toLowerCase().startsWith("epsg:")) {
        const J = Number($.slice(5));
        isNaN(J) || J === 0 || (D = new L({ wkid: J }));
      } else D = Fe($) ?? L.WGS84;
      else x = !0, D = new L({ wkid: 3857 });
      p = new z(k, O, M, B), p.spatialReference = D;
    } else x = !0, p = new z({ xmin: -0.5, ymin: 0.5 - s, xmax: t - 0.5, ymax: 0.5, spatialReference: new L({ wkid: 3857 }) });
    const w = q(i, "MRF_META/Rsets"), b = parseInt(w?.getAttribute("scale") || "2", 10), T = p.spatialReference, R = new ge({ origin: new A({ x: p.xmin, y: p.ymax, spatialReference: T }), blockWidth: u, blockHeight: h, pyramidBlockWidth: u, pyramidBlockHeight: h, compression: r, pyramidScalingFactor: b }), v = new A({ x: p.width / t, y: p.height / s, spatialReference: T }), _ = new xe({ width: t, height: s, extent: p, isPseudoSpatialReference: x, spatialReference: T, bandCount: a, pixelType: l, pixelSize: v, noDataValue: m, storageInfo: R }), F = K(i, "datafile"), C = K(i, "IndexFile");
    return { rasterInfo: _, files: { mrf: this.url, index: C || this.url.replace(".mrf", ".idx"), data: F || this.url.replace(".mrf", te.get(r).blobExtension) } };
  }
  async _fetchAuxiliaryData(i) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: i?.signal });
      return Ue(e);
    } catch {
      return null;
    }
  }
};
I([S()], ue.prototype, "_files", void 0), I([S()], ue.prototype, "_storageIndex", void 0), I([S({ type: String, json: { write: !0 } })], ue.prototype, "datasetFormat", void 0), ue = I([X("esri.layers.support.rasterIO.MRFRaster")], ue);
const Is = ue, De = (i, e) => i.get(e)?.values, me = (i, e) => i.get(e)?.values?.[0];
let ae = class extends ie {
  constructor() {
    super(...arguments), this._files = null, this._headerInfo = null, this._bufferSize = 1048576, this.datasetFormat = "TIFF";
  }
  async open(i) {
    await this.init();
    const e = i ? i.signal : null, { data: n } = await this.request(this.url, { range: { from: 0, to: this._bufferSize }, responseType: "array-buffer", signal: e });
    if (!n) throw new P("tiffraster:open", "failed to open url " + this.url);
    this.datasetName = this.url.slice(this.url.lastIndexOf("/") + 1, this.url.lastIndexOf("."));
    const { littleEndian: t, firstIFDPos: s, isBigTiff: a } = pi(n), r = [];
    await this._readIFDs(r, n, t, s, 0, a ? 8 : 4, e);
    const { imageInfo: o, rasterInfo: l } = this._parseIFDs(r), c = yi(r), u = gi(r);
    if (this._headerInfo = { littleEndian: t, isBigTiff: a, ifds: r, pyramidIFDs: c, maskIFDs: u, ...o }, this._set("rasterInfo", l), !o.isSupported) throw new P("tiffraster:open", "this tiff is not supported: " + o.message);
    if (!o.tileWidth) throw new P("tiffraster:open", "none-tiled tiff is not optimized for access, convert to COG and retry.");
    l.isPseudoSpatialReference && le.getLogger(this).warn("The spatial reference for this tiff is unsupported. Only EPSG spatial reference codes and Esri WKTs are supported.");
    const h = r[0].get("PREDICTOR")?.values?.[0];
    if (r[0].get("SAMPLEFORMAT")?.values?.[0] === 3 && h === 2) throw new P("tiffraster:open", "unsupported horizontal difference encoding. Predictor=3 is supported for floating point data");
    const { skipMapInfo: m, skipExtensions: y = [] } = this.ioConfig;
    if (!y.includes("aux.xml") && !m) {
      const g = await this._fetchAuxiliaryMetaData(i);
      g != null && this._processPAMInfo(g, l);
    }
    y.includes("vat.dbf") || l.bandCount !== 1 || l.pixelType !== "u8" || m || (l.attributeTable = await this._fetchAuxiliaryTable(i), l.attributeTable != null && (l.keyProperties.DataType = "thematic")), m && this.updateImageSpaceRasterInfo(l), this.updateTileInfo();
  }
  async fetchRawTile(i, e, n, t = {}) {
    if (!this._headerInfo?.isSupported || this.isBlockOutside(i, e, n)) return null;
    const s = await this._fetchRawTiffTile(i, e, n, !1, t);
    if (s != null && this._headerInfo.hasMaskBand) {
      const a = await this._fetchRawTiffTile(i, e, n, !0, t);
      a != null && a.pixels[0] instanceof Uint8Array && (s.mask = a.pixels[0]);
    }
    return s;
  }
  _parseIFDs(i) {
    const e = xi(i), { width: n, height: t, tileWidth: s, tileHeight: a, planes: r, pixelType: o, compression: l, firstPyramidLevel: c, maximumPyramidLevel: u, pyramidBlockWidth: h, pyramidBlockHeight: f, tileBoundary: m, affine: y, metadata: g } = e, d = e.extent.spatialReference?.wkt || e.extent.spatialReference?.wkid;
    let p = Fe(d), x = !!e.isPseudoGeographic;
    p == null && (x = !0, p = new L({ wkid: 3857 }));
    const w = new z({ ...e.extent, spatialReference: p }), b = new A(w ? { x: w.xmin, y: w.ymax, spatialReference: p } : { x: 0, y: 0 }), T = new ge({ blockWidth: s, blockHeight: a, pyramidBlockWidth: h, pyramidBlockHeight: f, compression: l, origin: b, firstPyramidLevel: c, maximumPyramidLevel: u, blockBoundary: m }), R = new A({ x: (w.xmax - w.xmin) / n, y: (w.ymax - w.ymin) / t, spatialReference: p }), v = g ? { BandProperties: g.bandProperties, DataType: g.dataType } : {};
    let _ = null;
    const F = me(i[0], "PHOTOMETRICINTERPRETATION"), C = De(i[0], "COLORMAP");
    if (F <= 3 && C?.length > 3 && C.length % 3 == 0) {
      _ = [];
      const O = C.length / 3;
      for (let M = 0; M < O; M++) _.push([M, C[M] >>> 8, C[M + O] >>> 8, C[M + 2 * O] >>> 8]);
    }
    const k = new xe({ width: n, height: t, bandCount: r, pixelType: o, pixelSize: R, storageInfo: T, spatialReference: p, isPseudoSpatialReference: x, keyProperties: v, extent: w, colormap: _, statistics: g ? g.statistics : null });
    return y?.length && (k.nativeExtent = new z({ xmin: -0.5, ymin: 0.5 - t, xmax: n - 0.5, ymax: 0.5, spatialReference: p }), k.transform = new je({ polynomialOrder: 1, forwardCoefficients: [y[2] + y[0] / 2, y[5] - y[3] / 2, y[0], y[3], -y[1], -y[4]] }), k.extent = k.transform.forwardTransform(k.nativeExtent), k.pixelSize = new A({ x: (w.xmax - w.xmin) / n, y: (w.ymax - w.ymin) / t, spatialReference: p }), T.origin.x = -0.5, T.origin.y = 0.5), { imageInfo: e, rasterInfo: k };
  }
  _processPAMInfo(i, e) {
    if (e.statistics = i.statistics ?? e.statistics, e.histograms = i.histograms, i.histograms && e.statistics == null && (e.statistics = Ge(i.histograms)), i.transform && e.transform == null) {
      e.transform = i.transform, e.nativeExtent = e.extent;
      const n = e.transform.forwardTransform(e.nativeExtent);
      e.pixelSize = new A({ x: (n.xmax - n.xmin) / e.width, y: (n.ymax - n.ymin) / e.height, spatialReference: e.spatialReference }), e.extent = n;
    }
    e.isPseudoSpatialReference && i.spatialReference && (e.spatialReference = i.spatialReference, e.extent.spatialReference = e.nativeExtent.spatialReference = e.storageInfo.origin.spatialReference = e.spatialReference);
  }
  async _readIFDs(i, e, n, t, s, a = 4, r) {
    if (!t) return null;
    (t >= e.byteLength || t < 0) && (e = (await this.request(this.url, { range: { from: t + s, to: t + s + this._bufferSize }, responseType: "array-buffer", signal: r })).data, s = t + s, t = 0);
    const o = await this._readIFD(e, n, t, s, we.tiffTags, a, r);
    if (i.push(o.ifd), !o.nextIFD) return null;
    await this._readIFDs(i, e, n, o.nextIFD - s, s, a, r);
  }
  async _readIFD(i, e, n, t, s = we.tiffTags, a = 4, r) {
    if (!i) return null;
    const o = wi(i, e, n, t, s, a);
    if (o.success) {
      const l = [];
      if (o.ifd?.forEach((c) => {
        c.values || l.push(c);
      }), l.length > 0) {
        const c = l.map((h) => h.offlineOffsetSize).filter(Je), u = Math.min.apply(null, c.map((h) => h[0]));
        if (Math.min.apply(null, c.map((h) => h[0] + h[1])) - u <= this._bufferSize) {
          const { data: h } = await this.request(this.url, { range: { from: u, to: u + this._bufferSize }, responseType: "array-buffer", signal: r });
          i = h, t = u, l.forEach((f) => Ii(i, e, f, t));
        }
      }
      if (o.ifd?.has("GEOKEYDIRECTORY")) {
        const c = o.ifd.get("GEOKEYDIRECTORY"), u = c?.values;
        if (u && u.length > 4) {
          const h = u[0] + "." + u[1] + "." + u[2], f = await this._readIFD(i, e, c.valueOffset + 6 - t, t, we.geoKeys, 2, r);
          c.data = f.ifd, c.data && c.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [h] });
        }
      }
      return o;
    }
    if (o.requiredBufferSize && o.requiredBufferSize !== i.byteLength)
      return (i = (await this.request(this.url, { range: { from: t, to: t + o.requiredBufferSize + 4 }, responseType: "array-buffer", signal: r })).data).byteLength < o.requiredBufferSize ? null : this._readIFD(i, e, 0, t, we.tiffTags, 4, r);
  }
  async _fetchRawTiffTile(i, e, n, t, s = {}) {
    const a = this._getTileLocation(i, e, n, t);
    if (!a) return null;
    const { ranges: r, actualTileWidth: o, actualTileHeight: l, ifd: c } = a, u = r.map((R) => this.request(this.url, { range: R, responseType: "array-buffer", signal: s.signal })), h = await Promise.all(u), f = h.map((R) => R.data.byteLength).reduce((R, v) => R + v), m = h.length === 1 ? h[0].data : new ArrayBuffer(f), y = [0], g = [0];
    if (h.length > 1) {
      const R = new Uint8Array(m);
      for (let v = 0, _ = 0; v < h.length; v++) {
        const F = h[v].data;
        R.set(new Uint8Array(F), _), y[v] = _, _ += F.byteLength, g[v] = F.byteLength;
      }
    }
    const { blockWidth: d, blockHeight: p } = this.getBlockWidthHeight(i), x = await this.decodePixelBlock(m, { format: "tiff", customOptions: { headerInfo: this._headerInfo, ifd: c, offsets: y, sizes: g }, width: d, height: p, planes: null, pixelType: null });
    if (x == null) return null;
    let w, b, T;
    if (o !== d || l !== p) {
      let R = x.mask;
      if (R) for (w = 0; w < p; w++) if (T = w * d, w < l) for (b = o; b < d; b++) R[T + b] = 0;
      else for (b = 0; b < d; b++) R[T + b] = 0;
      else for (R = new Uint8Array(d * p), x.mask = R, w = 0; w < l; w++) for (T = w * d, b = 0; b < o; b++) R[T + b] = 1;
    }
    return x;
  }
  _getTileLocation(i, e, n, t = !1) {
    const { firstPyramidLevel: s, blockBoundary: a } = this.rasterInfo.storageInfo, r = i === 0 ? 0 : i - (s - 1), { _headerInfo: o } = this;
    if (!o) return null;
    const l = t ? o.maskIFDs[r] : r === 0 ? o?.ifds[0] : o?.pyramidIFDs[r - 1];
    if (!l) return null;
    const c = bi(l, o), u = De(l, "TILEOFFSETS");
    if (u === void 0) return null;
    const h = De(l, "TILEBYTECOUNTS"), { minRow: f, minCol: m, maxRow: y, maxCol: g } = a[r];
    if (e > y || n > g || e < f || n < m) return null;
    const d = me(l, "IMAGEWIDTH"), p = me(l, "IMAGELENGTH"), x = me(l, "TILEWIDTH"), w = me(l, "TILELENGTH"), b = [];
    if (c) {
      const { bandCount: T } = this.rasterInfo;
      for (let R = 0; R < T; R++) {
        const v = R * (y + 1) * (g + 1) + e * (g + 1) + n;
        b[R] = { from: u[v], to: u[v] + h[v] - 1 };
      }
    } else {
      const T = e * (g + 1) + n;
      b.push({ from: u[T], to: u[T] + h[T] - 1 });
    }
    for (let T = 0; T < b.length; T++) if (b[T].from == null || !b[T].to || b[T].to < 0) return null;
    return { ranges: b, ifd: l, actualTileWidth: n === g && d % x || x, actualTileHeight: e === y && p % w || w };
  }
  async _fetchAuxiliaryMetaData(i) {
    try {
      const { data: e } = await this.request(this.url + ".aux.xml", { responseType: "xml", signal: i?.signal });
      return Ue(e);
    } catch {
      return null;
    }
  }
  async _fetchAuxiliaryTable(i) {
    try {
      const { data: e } = await this.request(this.url + ".vat.dbf", { responseType: "array-buffer", signal: i?.signal }), n = It.parse(e);
      return n?.recordSet ? _e.fromJSON(n.recordSet) : null;
    } catch {
      return null;
    }
  }
};
I([S()], ae.prototype, "_files", void 0), I([S()], ae.prototype, "_headerInfo", void 0), I([S()], ae.prototype, "_bufferSize", void 0), I([S({ type: String, json: { write: !0 } })], ae.prototype, "datasetFormat", void 0), ae = I([X("esri.layers.support.rasterDatasets.TIFFRaster")], ae);
const bs = ae, W = /* @__PURE__ */ new Map();
W.set("CRF", { desc: "Cloud Raster Format", constructor: ls }), W.set("MRF", { desc: "Meta Raster Format", constructor: Is }), W.set("TIFF", { desc: "GeoTIFF", constructor: bs }), W.set("RasterTileServer", { desc: "Raster Tile Server", constructor: ws }), W.set("JPG", { desc: "JPG Raster Format", constructor: Re }), W.set("PNG", { desc: "PNG Raster Format", constructor: Re }), W.set("GIF", { desc: "GIF Raster Format", constructor: Re }), W.set("BMP", { desc: "BMP Raster Format", constructor: Re }), W.set("CovJSON", { desc: "COVJSON Raster Format", constructor: ds }), W.set("MEMORY", { desc: "In Memory Raster Format", constructor: qe });
class Ne {
  static get supportedFormats() {
    const e = /* @__PURE__ */ new Set();
    return W.forEach((n, t) => e.add(t)), e;
  }
  static async open(e) {
    const { url: n, ioConfig: t, source: s, sourceJSON: a } = e;
    let r = e.datasetFormat ?? t?.datasetFormat;
    r == null && (n.includes(".") ? r = n.slice(n.lastIndexOf(".") + 1).toUpperCase() : s?.type?.toLowerCase() === "coverage" ? r = "CovJSON" : s?.extent && s.pixelblocks && (r = "MEMORY")), r === "OVR" || r === "TIF" ? r = "TIFF" : r === "JPG" || r === "JPEG" || r === "JFIF" ? r = "JPG" : r === "COVJSON" && (r = "CovJSON"), n.toLowerCase().includes("/imageserver") && !n.toLowerCase().includes("/wcsserver") && (r = "RasterTileServer");
    const o = { url: n, source: s, sourceJSON: a, datasetFormat: r, ioConfig: t ?? { bandIds: null, sampling: null } };
    if (Object.keys(o).forEach((h) => {
      o[h] == null && delete o[h];
    }), r) {
      if (!this.supportedFormats.has(r)) throw new P("rasterfactory:open", "not a supported format " + r);
      if (r === "CRF" && !t?.enableCRF) throw new P("rasterfactory:open", `cannot open raster: ${n}`);
      const h = new (W.get(r)).constructor(o);
      return await h.open({ signal: e.signal }), h;
    }
    const l = Array.from(W.keys()).filter((h) => h !== "CovJSON" && h !== "Memory");
    let c = 0;
    const u = () => {
      if (r = l[c++], !r || r === "CRF" && !t?.enableCRF) return null;
      const h = new (W.get(r)).constructor(o);
      return h.open({ signal: e.signal }).then(() => h).catch(() => u());
    };
    return u();
  }
  static register(e, n, t) {
    W.has(e.toUpperCase()) || W.set(e.toUpperCase(), { desc: n, constructor: t });
  }
}
let E = class extends Si(Ri(vi(Ti(_i(as(Fi(ki(Ci(Mi(Pi(Li))))))))))) {
  constructor(...i) {
    super(...i), this._primaryRasters = [], this.bandIds = null, this.interpolation = null, this.legendEnabled = !0, this.isReference = null, this.listMode = "show", this.sourceJSON = null, this.version = null, this.type = "imagery-tile", this.operationalLayerType = "ArcGISTiledImageServiceLayer", this.popupEnabled = !0, this.popupTemplate = null, this.fields = null, this.source = void 0, this._debouncedSaveOperations = Oi(async (e, n, t) => {
      const { save: s, saveAs: a } = await import("./imageryUtils-Cln6bQD2.js");
      switch (e) {
        case Ie.SAVE:
          return s(this, n);
        case Ie.SAVE_AS:
          return a(this, t, n);
      }
    });
  }
  normalizeCtorArgs(i, e) {
    return typeof i == "string" ? { url: i, ...e } : i;
  }
  load(i) {
    const e = i != null ? i.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"] }, i).catch($i).then(() => this._openRaster(e))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get rasterFields() {
    const i = [new he({ name: "Raster.ServicePixelValue", alias: "Pixel Value", domain: null, editable: !1, length: 50, type: "string" }), new he({ name: "Raster.ServicePixelValue.Raw", alias: "Raw Pixel Value", domain: null, editable: !1, length: 50, type: "string" })], { serviceRasterInfo: e } = this, n = e?.attributeTable, t = n != null ? n.fields : null, s = "Raster.";
    if (t) {
      const o = t.filter((l) => l.type !== "oid" && l.name.toLowerCase() !== "value").map((l) => {
        const c = l.clone();
        return c.name = s + l.name, c;
      });
      i.push(...o);
    }
    const a = e?.dataType, r = e?.multidimensionalInfo;
    if ((a === "vector-magdir" || a === "vector-uv") && r != null) {
      const o = r.variables[0].unit?.trim(), l = "Magnitude" + (o ? ` (${o})` : "");
      i.push(new he({ name: "Raster.Magnitude", alias: l, domain: null, editable: !1, type: "double" })), i.push(new he({ name: "Raster.Direction", alias: "Direction (°)", domain: null, editable: !1, type: "double" }));
    }
    return i;
  }
  createPopupTemplate(i) {
    const { rasterFields: e } = this, n = new Set(e.map(({ name: t }) => t).filter((t) => t.toLowerCase() !== "raster.servicepixelvalue.raw"));
    return Di({ fields: e, title: this.title }, { ...i, visibleFieldNames: n });
  }
  async generateRasterInfo(i, e) {
    if (!(i = Le(Be, i))) return this.serviceRasterInfo;
    try {
      const { rasterInfo: n } = await this._openFunctionRaster(i, e);
      return n;
    } catch (n) {
      throw n instanceof P ? n : new P("imagery-tile-layer", "the given raster function is not supported");
    }
  }
  async save(i) {
    return this._debouncedSaveOperations(Ie.SAVE, i);
  }
  async saveAs(i, e) {
    return this._debouncedSaveOperations(Ie.SAVE_AS, e, i);
  }
  write(i, e) {
    const n = this._primaryRasters[0] ?? this.raster;
    if (this.loaded ? n.datasetFormat === "RasterTileServer" && (n.tileType === "Raster" || n.tileType === "Map") : this.url && /\/ImageServer(\/|\/?$)/i.test(this.url)) return super.write(i, e);
    if (e?.messages) {
      const t = `${e.origin}/${e.layerContainerType || "operational-layers"}`;
      e.messages.push(new P("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${t}'`, { layer: this }));
    }
    return null;
  }
  async _openRaster(i) {
    let e = !1;
    if (this.raster) await this._openFromRaster(this.raster, i), e = this.raster.datasetFormat === "Function";
    else {
      const { url: t, rasterFunction: s, source: a } = this;
      if (!t && !a) throw new P("imagery-tile-layer:open", "missing url or source parameter");
      a ? await this._openFromSource(a, i) : s ? await this._openFromUrlWithRasterFunction(t, s, i) : await this._openFromUrl(t, i);
    }
    const n = this.raster.rasterInfo;
    if (!n) throw new P("imagery-tile-layer:load", "cannot load resources on " + this.url);
    if (this._set("serviceRasterInfo", e ? n : this._primaryRasters[0].rasterInfo), this._set("spatialReference", n.spatialReference), this.sourceJSON = this.sourceJSON || this.raster.sourceJSON, this.sourceJSON != null) {
      const t = this.raster.tileType === "Map" && this.sourceJSON.minLOD != null && this.sourceJSON.maxLOD != null ? this.sourceJSON : { ...this.sourceJSON, minScale: 0, maxScale: 0 };
      this.read(t, { origin: "service" });
    } else this.read({ tileInfo: this.serviceRasterInfo.storageInfo.tileInfo.toJSON() }, { origin: "service" });
    this.title || (this.title = this.raster.datasetName), this.raster.tileType === "Map" && (this.popupEnabled = !1), this._configDefaultSettings(), this.addHandles(Ni(() => this.customParameters, (t) => {
      this.raster && (this.raster.ioConfig.customFetchParameters = t);
    }));
  }
  async _openFromRaster(i, e) {
    i.rasterInfo || await i.open({ signal: e }), this._primaryRasters = i.datasetFormat === "Function" ? i.primaryRasters.rasters : [i], this.url || (this.url = this._primaryRasters[0].url);
  }
  async _openFromUrlWithRasterFunction(i, e, n) {
    const t = [i];
    e && Ki(e.toJSON(), t);
    const s = await Promise.all(t.map((r) => Ne.open({ url: r, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: n }))), a = s.findIndex((r) => r == null);
    if (a > -1) throw new P("imagery-tile-layer:open", `cannot open raster: ${t[a]}`);
    return this._primaryRasters = s, this._initializeWithFunctionRaster(e);
  }
  async _openFromUrl(i, e) {
    const n = await Ne.open({ url: i, sourceJSON: this.sourceJSON, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: e });
    if (n == null) throw new P("imagery-tile-layer:open", `cannot open raster: ${i}`);
    this._primaryRasters = [n], this.raster = n;
  }
  async _openFromSource(i, e) {
    const n = "the tiled imagery data source is not supported", t = i.type?.toLowerCase() === "coverage" ? "CovJSON" : i.extent && i.pixelBlock ? "MEMORY" : null;
    if (!t) throw new P("imagery-tile-layer:open", n);
    t === "MEMORY" && (i = { extent: i.extent, pixelBlocks: [i.pixelBlock] });
    const s = await Ne.open({ url: "", source: i, datasetFormat: t, ioConfig: { sampling: "closest", ...this.ioConfig, customFetchParameters: this.customParameters }, signal: e });
    if (s == null) throw new P("imagery-tile-layer:open", n);
    this._primaryRasters = [s], this.rasterFunction ? await this._initializeWithFunctionRaster(this.rasterFunction) : this.raster = s;
  }
  async _openFunctionRaster(i, e) {
    const n = { raster: this._primaryRasters[0] };
    this._primaryRasters.length > 1 && this._primaryRasters.forEach((a) => n[a.url] = a);
    const t = xt(i.functionDefinition?.toJSON() ?? i.toJSON(), n), s = new wt({ rasterFunction: t });
    return await s.open(e), s;
  }
  async _initializeWithFunctionRaster(i, e) {
    try {
      this.raster = await this._openFunctionRaster(i, e);
    } catch (n) {
      n instanceof P && le.getLogger(this).error("imagery-tile-layer:open", n.message), le.getLogger(this).warn("imagery-tile-layer:open", "the raster function cannot be applied and is removed"), this._set("rasterFunction", null), this.raster = this._primaryRasters[0];
    }
  }
};
I([S({ clonable: !1 })], E.prototype, "_primaryRasters", void 0), I([S({ type: [Bi], json: { write: { overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.bandIds?.join(",") !== "0,1,2" };
} } } })], E.prototype, "bandIds", void 0), I([S({ json: { write: { overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" || this.interpolation !== "bilinear" };
} } } }), Ji(Ei)], E.prototype, "interpolation", void 0), I([S(Ai)], E.prototype, "legendEnabled", void 0), I([S({ type: Boolean, json: { read: !1, write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } } })], E.prototype, "isReference", void 0), I([S({ type: ["show", "hide"] })], E.prototype, "listMode", void 0), I([S({ json: { read: !0, write: !0 } })], E.prototype, "blendMode", void 0), I([S()], E.prototype, "sourceJSON", void 0), I([S({ readOnly: !0, json: { origins: { service: { read: { source: "currentVersion" } } } } })], E.prototype, "version", void 0), I([S({ readOnly: !0, json: { read: !1 } })], E.prototype, "type", void 0), I([S({ type: ["ArcGISTiledImageServiceLayer"] })], E.prototype, "operationalLayerType", void 0), I([S({ type: Boolean, value: !0, json: { read: { source: "disablePopup", reader: (i, e) => !e.disablePopup }, write: { target: "disablePopup", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
}, writer(i, e, n) {
  e[n] = !i;
} } } })], E.prototype, "popupEnabled", void 0), I([S({ type: zi, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy() {
  return { enabled: !this.loaded || this.raster.tileType === "Raster" };
} } } })], E.prototype, "popupTemplate", void 0), I([S({ readOnly: !0 })], E.prototype, "defaultPopupTemplate", null), I([S({ readOnly: !0, type: [he] })], E.prototype, "fields", void 0), I([S({ readOnly: !0, type: [he] })], E.prototype, "rasterFields", null), I([S({ constructOnly: !0 })], E.prototype, "source", void 0), E = I([X("esri.layers.ImageryTileLayer")], E);
const Ms = E;
export {
  Ms as default
};
//# sourceMappingURL=ImageryTileLayer-DYixj8M0.js.map
