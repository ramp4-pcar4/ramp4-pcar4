import { dK as X, kO as st, c1 as it, a8 as y, kP as nt, ag as N, kK as j, N as h, O as d, P as O, dU as H, az as Y, c_ as A, kQ as U, fq as z, k3 as D, kR as M, kS as rt, kT as $, jQ as R, a as at, fi as tt, T as ot, f2 as lt, kU as ut, f5 as b, aU as ct, a1 as ht, C as dt, H as ft, kV as pt, kW as _t, kX as gt, j5 as yt, kY as mt, kZ as Ft, er as Et, k_ as Ct, k$ as k, cT as Tt, l0 as vt, fh as w, l1 as St, l2 as q, l3 as et, fV as bt, cR as It, aj as B, bh as S, gv as wt, U as V, gp as Ot, eK as xt } from "./main-3gzXighg.js";
import { m as At } from "./FeatureStore-BKz1rBw6.js";
import { $ as $t } from "./QueryEngine-D4an6-QA.js";
import { o as Rt } from "./BoundsStore-PKMt2Ge3.js";
function J(t = !1, e) {
  if (t) {
    const { elevationInfo: s, alignPointsInFeatures: i } = e;
    return new zt(s, i);
  }
  return new Pt();
}
let Pt = class {
  async alignCandidates(e, s, i) {
    return e;
  }
  notifyElevationSourceChange() {
  }
};
const Ht = 1024;
let zt = class {
  constructor(e, s) {
    this._elevationInfo = e, this._alignPointsInFeatures = s, this._alignmentsCache = new X(Ht), this._cacheVersion = 0;
  }
  async alignCandidates(e, s, i) {
    const n = this._elevationInfo;
    return n == null || n.mode !== "absolute-height" || n.featureExpressionInfo ? this._alignComputedElevationCandidates(e, s, i) : (this._alignAbsoluteElevationCandidates(e, s, n), e);
  }
  notifyElevationSourceChange() {
    this._alignmentsCache.clear(), this._cacheVersion++;
  }
  _alignAbsoluteElevationCandidates(e, s, i) {
    const { offset: n, unit: r } = i;
    if (n == null) return;
    const a = st(s), o = n * (nt(r ?? "meters") / a);
    for (const l of e) switch (l.type) {
      case "edge":
        l.start.z += o, l.end.z += o;
        continue;
      case "vertex":
        l.target.z += o;
        continue;
    }
  }
  async _alignComputedElevationCandidates(e, s, i) {
    const n = /* @__PURE__ */ new Map();
    for (const g of e) it(n, g.objectId, Nt).push(g);
    const [r, a, o] = this._prepareQuery(n, s), l = await this._alignPointsInFeatures(r, i);
    if (y(i), o !== this._cacheVersion) return this._alignComputedElevationCandidates(e, s, i);
    this._applyCacheAndResponse(r, l, a);
    const { drapedObjectIds: c, failedObjectIds: p } = l, _ = [];
    for (const g of e) {
      const { objectId: m } = g;
      c.has(m) && g.type === "edge" && (g.draped = !0), p.has(m) || _.push(g);
    }
    return _;
  }
  _prepareQuery(e, s) {
    const i = [], n = [];
    for (const [r, a] of e) {
      const o = [];
      for (const l of a) this._addToQueriesOrCachedResult(r, l.target, o, n), l.type === "edge" && (this._addToQueriesOrCachedResult(r, l.start, o, n), this._addToQueriesOrCachedResult(r, l.end, o, n));
      o.length !== 0 && i.push({ objectId: r, points: o });
    }
    return [{ spatialReference: s.toJSON(), pointsInFeatures: i }, n, this._cacheVersion];
  }
  _addToQueriesOrCachedResult(e, s, i, n) {
    const r = L(e, s), a = this._alignmentsCache.get(r);
    a == null ? i.push(s) : n.push(new Dt(s, a));
  }
  _applyCacheAndResponse(e, { elevations: s, drapedObjectIds: i, failedObjectIds: n }, r) {
    for (const l of r) l.apply();
    let a = 0;
    const o = this._alignmentsCache;
    for (const { objectId: l, points: c } of e.pointsInFeatures) {
      if (n.has(l)) {
        a += c.length;
        continue;
      }
      const p = !i.has(l);
      for (const _ of c) {
        const g = L(l, _), m = s[a++];
        _.z = m, p && o.put(g, m, 1);
      }
    }
  }
};
class Dt {
  constructor(e, s) {
    this.point = e, this.z = s;
  }
  apply() {
    this.point.z = this.z;
  }
}
function L(t, { x: e, y: s, z: i, spatialReference: n }) {
  return `${t}-${e}-${s}-${i ?? 0}}-wkid:${n?.wkid}`;
}
function Nt() {
  return [];
}
let jt = class {
  filter(e, s) {
    return s;
  }
  notifyElevationSourceChange() {
  }
}, Ut = class {
  filter(e, s) {
    const { point: i, distance: n } = e, { z: r } = i;
    if (r == null || s.length === 0) return s;
    const a = Vt(n), o = this._updateCandidatesTo3D(s, i, a).filter(Mt);
    return o.sort(Jt), o;
  }
  _updateCandidatesTo3D(e, s, i) {
    for (const n of e) switch (n.type) {
      case "edge":
        kt(n, s, i);
        continue;
      case "vertex":
        Bt(n, s, i);
        continue;
    }
    return e;
  }
};
function Mt(t) {
  return t.distance <= 1;
}
function Q(t = !1) {
  return t ? new Ut() : new jt();
}
function kt(t, e, { x: s, y: i, z: n }) {
  const { start: r, end: a, target: o } = t;
  t.draped || qt(o, e, r, a);
  const l = (e.x - o.x) / s, c = (e.y - o.y) / i, p = (e.z - o.z) / n;
  t.distance = Math.sqrt(l * l + c * c + p * p);
}
function qt(t, e, s, i) {
  const n = i.x - s.x, r = i.y - s.y, a = i.z - s.z, o = n * n + r * r + a * a, l = (e.x - s.x) * n + (e.y - s.y) * r + a * (e.z - s.z), c = Math.min(1, Math.max(0, l / o)), p = s.x + n * c, _ = s.y + r * c, g = s.z + a * c;
  t.x = p, t.y = _, t.z = g;
}
function Bt(t, e, { x: s, y: i, z: n }) {
  const { target: r } = t, a = (e.x - r.x) / s, o = (e.y - r.y) / i, l = (e.z - r.z) / n, c = Math.sqrt(a * a + o * o + l * l);
  t.distance = c;
}
function Vt(t) {
  return typeof t == "number" ? { x: t, y: t, z: t } : t;
}
function Jt(t, e) {
  return t.distance - e.distance;
}
function G(t = !1, e) {
  return t ? new Gt(e) : new Lt();
}
class Lt {
  async fetch() {
    return [];
  }
  notifySymbologyChange() {
  }
}
const Qt = 1024;
class Gt {
  constructor(e) {
    this._getSymbologyCandidates = e, this._candidatesCache = new X(Qt), this._cacheVersion = 0;
  }
  async fetch(e, s) {
    if (e.length === 0) return [];
    const i = [], n = [], r = this._candidatesCache;
    for (const _ of e) {
      const g = Z(_), m = r.get(g);
      if (m) for (const v of m) n.push(N(v));
      else i.push(_), r.put(g, [], 1);
    }
    if (i.length === 0) return n;
    const a = this._cacheVersion, { candidates: o, sourceCandidateIndices: l } = await this._getSymbologyCandidates(i, s);
    if (y(s), a !== this._cacheVersion) return this.fetch(e, s);
    const c = [], { length: p } = o;
    for (let _ = 0; _ < p; ++_) {
      const g = o[_], m = Z(i[l[_]]), v = r.get(m);
      v.push(g), r.put(m, v, v.length), c.push(N(g));
    }
    return n.concat(c);
  }
  notifySymbologyChange() {
    this._candidatesCache.clear(), this._cacheVersion++;
  }
}
function Z(t) {
  switch (t.type) {
    case "vertex": {
      const { objectId: e, target: s } = t, i = `${e}-vertex-${s.x}-${s.y}-${s.z ?? 0}`;
      return j(i).toString();
    }
    case "edge": {
      const { objectId: e, start: s, end: i } = t, n = `${e}-edge-${s.x}-${s.y}-${s.z ?? 0}-to-${i.x}-${i.y}-${i.z ?? 0}`;
      return j(n).toString();
    }
    default:
      return "";
  }
}
let I = class extends H {
  constructor() {
    super(...arguments), this.updating = !1, this._pending = [];
  }
  push(e, s) {
    this._pending.push({ promise: e, callback: s }), this._pending.length === 1 && this._process();
  }
  _process() {
    if (!this._pending.length) return void (this.updating = !1);
    this.updating = !0;
    const e = this._pending[0];
    e.promise.then((s) => e.callback(s)).catch(() => {
    }).then(() => {
      this._pending.shift(), this._process();
    });
  }
};
h([d()], I.prototype, "updating", void 0), I = h([O("esri.core.AsyncSequence")], I);
class Zt {
  constructor(e, s) {
    this.data = e, this.resolution = s, this.state = { type: u.CREATED }, this.alive = !0;
  }
  process(e) {
    switch (this.state.type) {
      case u.CREATED:
        return this.state = this._gotoFetchCount(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case u.FETCH_COUNT:
        break;
      case u.FETCHED_COUNT:
        return this.state = this._gotoFetchFeatures(this.state, e), this.state.task.promise.then(e.resume, e.resume);
      case u.FETCH_FEATURES:
        break;
      case u.FETCHED_FEATURES:
        this.state = this._goToDone(this.state, e);
      case u.DONE:
    }
    return null;
  }
  get debugInfo() {
    return { data: this.data, featureCount: this._featureCount, state: this._stateToString };
  }
  get _featureCount() {
    switch (this.state.type) {
      case u.CREATED:
      case u.FETCH_COUNT:
        return 0;
      case u.FETCHED_COUNT:
        return this.state.featureCount;
      case u.FETCH_FEATURES:
        return this.state.previous.featureCount;
      case u.FETCHED_FEATURES:
        return this.state.features.length;
      case u.DONE:
        return this.state.previous.features.length;
    }
  }
  get _stateToString() {
    switch (this.state.type) {
      case u.CREATED:
        return "created";
      case u.FETCH_COUNT:
        return "fetch-count";
      case u.FETCHED_COUNT:
        return "fetched-count";
      case u.FETCH_FEATURES:
        return "fetch-features";
      case u.FETCHED_FEATURES:
        return "fetched-features";
      case u.DONE:
        return "done";
    }
  }
  _gotoFetchCount(e, s) {
    return { type: u.FETCH_COUNT, previous: e, task: A(async (i) => {
      const n = await U(s.fetchCount(this, i));
      this.state.type === u.FETCH_COUNT && (this.state = this._gotoFetchedCount(this.state, n.ok ? n.value : 1 / 0));
    }) };
  }
  _gotoFetchedCount(e, s) {
    return { type: u.FETCHED_COUNT, featureCount: s, previous: e };
  }
  _gotoFetchFeatures(e, s) {
    return { type: u.FETCH_FEATURES, previous: e, task: A(async (i) => {
      const n = await U(s.fetchFeatures(this, e.featureCount, i));
      this.state.type === u.FETCH_FEATURES && (this.state = this._gotoFetchedFeatures(this.state, n.ok ? n.value : []));
    }) };
  }
  _gotoFetchedFeatures(e, s) {
    return { type: u.FETCHED_FEATURES, previous: e, features: s };
  }
  _goToDone(e, s) {
    return s.finish(this, e.features), { type: u.DONE, previous: e };
  }
  reset() {
    const e = this.state;
    switch (this.state = { type: u.CREATED }, e.type) {
      case u.CREATED:
      case u.FETCHED_COUNT:
      case u.FETCHED_FEATURES:
      case u.DONE:
        break;
      case u.FETCH_COUNT:
      case u.FETCH_FEATURES:
        e.task.abort();
    }
  }
  intersects(e) {
    return e == null || !this.data.extent || (z(e, W), D(this.data.extent, W));
  }
}
var u;
(function(t) {
  t[t.CREATED = 0] = "CREATED", t[t.FETCH_COUNT = 1] = "FETCH_COUNT", t[t.FETCHED_COUNT = 2] = "FETCHED_COUNT", t[t.FETCH_FEATURES = 3] = "FETCH_FEATURES", t[t.FETCHED_FEATURES = 4] = "FETCHED_FEATURES", t[t.DONE = 5] = "DONE";
})(u || (u = {}));
const W = Y();
let f = class extends H {
  get _minimumVerticesPerFeature() {
    switch (this.store?.featureStore.geometryType) {
      case "esriGeometryPoint":
      case "esriGeometryMultipoint":
        return 1;
      case "esriGeometryPolygon":
        return 4;
      case "esriGeometryPolyline":
        return 2;
    }
  }
  get _mandatoryOutFields() {
    const t = /* @__PURE__ */ new Set();
    return this.objectIdField && t.add(this.objectIdField), this.globalIdField && t.add(this.globalIdField), t;
  }
  set outFields(t) {
    const e = this._get("outFields"), s = M(t, this._mandatoryOutFields);
    rt(s, e) || (this._set("outFields", s), $(s, e) || this.refresh());
  }
  get outFields() {
    return this._get("outFields") ?? this._mandatoryOutFields;
  }
  set filter(t) {
    const e = this._get("filter"), s = this._filterProperties(t);
    JSON.stringify(e) !== JSON.stringify(s) && this._set("filter", s);
  }
  set customParameters(t) {
    const e = this._get("customParameters");
    JSON.stringify(e) !== JSON.stringify(t) && this._set("customParameters", t);
  }
  get _configuration() {
    return { filter: this.filter, customParameters: this.customParameters, tileInfo: this.tileInfo, tileSize: this.tileSize };
  }
  set tileInfo(t) {
    const e = this._get("tileInfo");
    e !== t && (t != null && e != null && JSON.stringify(t) === JSON.stringify(e) || (this._set("tileInfo", t), this.store.tileInfo = t));
  }
  set tileSize(t) {
    this._get("tileSize") !== t && this._set("tileSize", t);
  }
  get updating() {
    return this.updatingExcludingEdits || this._pendingEdits.updating;
  }
  get updatingExcludingEdits() {
    return this._updatingHandles.updating;
  }
  get hasZ() {
    return this.store.featureStore.hasZ;
  }
  constructor(t) {
    super(t), this.suspended = !0, this.tilesOfInterest = [], this.availability = 0, this._pendingTiles = /* @__PURE__ */ new Map(), this._updatingHandles = new R(), this._pendingEdits = new I(), this._pendingEditsAbortController = new AbortController();
  }
  initialize() {
    this._initializeFetchExtent(), this._updatingHandles.add(() => this._configuration, () => this.refresh()), this._updatingHandles.add(() => this.tilesOfInterest, (t, e) => {
      at(t, e, ({ id: s }, { id: i }) => s === i) || this._process();
    }, tt), this.addHandles(ot(() => !this.suspended, () => this._process()));
  }
  destroy() {
    this._pendingTiles.forEach((t) => this._deletePendingTile(t)), this._pendingTiles.clear(), this.store.destroy(), this.tilesOfInterest.length = 0, this._pendingEditsAbortController.abort(), this._pendingEditsAbortController = null, this._updatingHandles.destroy();
  }
  refresh() {
    this.store.refresh(), this._pendingTiles.forEach((t) => this._deletePendingTile(t)), this._process();
  }
  applyEdits(t) {
    this._pendingEdits.push(t, async (e) => {
      if (e.addedFeatures.length === 0 && e.updatedFeatures.length === 0 && e.deletedFeatures.length === 0) return;
      for (const [, i] of this._pendingTiles) i.reset();
      const s = { ...e, deletedFeatures: e.deletedFeatures.map(({ objectId: i, globalId: n }) => i && i !== -1 ? i : this._lookupObjectIdByGlobalId(n)) };
      await this._updatingHandles.addPromise(this.store.processEdits(s, (i, n) => this._queryFeaturesById(i, n), this._pendingEditsAbortController.signal)), this._processPendingTiles();
    });
  }
  _initializeFetchExtent() {
    if (!this.capabilities.query.supportsExtent || !lt(this.url)) return;
    const t = A(async (e) => {
      try {
        const s = await ut(this.url, new b({ where: "1=1", outSpatialReference: this.spatialReference, cacheHint: this.capabilities.query.supportsCacheHint ?? void 0 }), { query: this._configuration.customParameters, signal: e });
        this.store.extent = ct.fromJSON(s.data?.extent);
      } catch (s) {
        ht(s), dt.getLogger(this).warn("Failed to fetch data extent", s);
      }
    });
    this._updatingHandles.addPromise(t.promise.then(() => this._process())), this.addHandles(ft(() => t.abort()));
  }
  get debugInfo() {
    return { numberOfFeatures: this.store.featureStore.numFeatures, tilesOfInterest: this.tilesOfInterest, pendingTiles: Array.from(this._pendingTiles.values()).map((t) => t.debugInfo), storedTiles: this.store.debugInfo };
  }
  _process() {
    this._markTilesNotAlive(), this._createPendingTiles(), this._deletePendingTiles(), this._processPendingTiles();
  }
  _markTilesNotAlive() {
    for (const [, t] of this._pendingTiles) t.alive = !1;
  }
  _createPendingTiles() {
    if (this.suspended) return;
    const t = this._collectMissingTilesInfo();
    if (this._setAvailability(t == null ? 1 : t.coveredArea / t.fullArea), t != null) for (const { data: e, resolution: s } of t.missingTiles) {
      const i = this._pendingTiles.get(e.id);
      i ? (i.resolution = s, i.alive = !0) : this._createPendingTile(e, s);
    }
  }
  _collectMissingTilesInfo() {
    let t = null;
    for (let e = this.tilesOfInterest.length - 1; e >= 0; e--) {
      const s = this.tilesOfInterest[e], i = this.store.process(s, (n, r) => this._verifyTileComplexity(n, r), this.outFields);
      t == null ? t = i : t.prepend(i);
    }
    return t;
  }
  _deletePendingTiles() {
    for (const [, t] of this._pendingTiles) t.alive || this._deletePendingTile(t);
  }
  _processPendingTiles() {
    const t = { fetchCount: (e, s) => this._fetchCount(e, s), fetchFeatures: (e, s, i) => this._fetchFeatures(e, s, i), finish: (e, s) => this._finishPendingTile(e, s), resume: () => this._processPendingTiles() };
    if (this._ensureFetchAllCounts(t)) for (const [, e] of this._pendingTiles) this._verifyTileComplexity(this.store.getFeatureCount(e.data), e.resolution) && this._updatingHandles.addPromise(e.process(t));
  }
  _verifyTileComplexity(t, e) {
    return this._verifyVertexComplexity(t) && this._verifyFeatureDensity(t, e);
  }
  _verifyVertexComplexity(t) {
    return t * this._minimumVerticesPerFeature < Kt;
  }
  _verifyFeatureDensity(t, e) {
    if (this.tileInfo == null) return !1;
    const s = this.tileSize * e;
    return t * (Xt / (s * s)) < Yt;
  }
  _ensureFetchAllCounts(t) {
    let e = !0;
    for (const [, s] of this._pendingTiles) s.state.type < u.FETCHED_COUNT && this._updatingHandles.addPromise(s.process(t)), s.state.type <= u.FETCH_COUNT && (e = !1);
    return e;
  }
  _finishPendingTile(t, e) {
    this.store.add(t.data, e), this._deletePendingTile(t), this._updateAvailability();
  }
  _updateAvailability() {
    const t = this._collectMissingTilesInfo();
    this._setAvailability(t == null ? 1 : t.coveredArea / t.fullArea);
  }
  _setAvailability(t) {
    this._set("availability", t);
  }
  _createPendingTile(t, e) {
    const s = new Zt(t, e);
    return this._pendingTiles.set(t.id, s), s;
  }
  _deletePendingTile(t) {
    t.reset(), this._pendingTiles.delete(t.data.id);
  }
  async _fetchCount(t, e) {
    return this.store.fetchCount(t.data, this.url, this._createCountQuery(t), { query: this.customParameters, timeout: x, signal: e });
  }
  async _fetchFeatures(t, e, s) {
    let i = 0;
    const n = [];
    let r = 0, a = e;
    for (; ; ) {
      const o = this._createFeaturesQuery(t), l = this._setPagingParameters(o, i, a), { features: c, exceededTransferLimit: p } = await this._queryFeatures(o, s);
      l && (i += o.num), r += c.length;
      for (const _ of c) n.push(_);
      if (a = e - r, !l || !p || a <= 0) return n;
    }
  }
  _filterProperties(t) {
    return t == null ? { where: "1=1", gdbVersion: void 0, timeExtent: void 0 } : { where: t.where || "1=1", timeExtent: t.timeExtent, gdbVersion: t.gdbVersion };
  }
  _lookupObjectIdByGlobalId(t) {
    const e = this.globalIdField, s = this.objectIdField;
    if (e == null) throw new Error("Expected globalIdField to be defined");
    let i = null;
    if (this.store.featureStore.forEach((n) => {
      t === n.attributes[e] && (i = n.objectId ?? n.attributes[s]);
    }), i == null) throw new Error(`Expected to find a feature with globalId ${t}`);
    return i;
  }
  _queryFeaturesById(t, e) {
    const s = this._createFeaturesQuery();
    return s.objectIds = t, this._queryFeatures(s, e);
  }
  _queryFeatures(t, e) {
    return this.capabilities.query.supportsFormatPBF ? this._queryFeaturesPBF(t, e) : this._queryFeaturesJSON(t, e);
  }
  async _queryFeaturesPBF(t, e) {
    const { sourceSpatialReference: s } = this, { data: i } = await pt(this.url, t, new _t({ sourceSpatialReference: s }), { query: this._configuration.customParameters, timeout: x, signal: e });
    return gt(i);
  }
  async _queryFeaturesJSON(t, e) {
    const { sourceSpatialReference: s } = this, { data: i } = await yt(this.url, t, s, { query: this._configuration.customParameters, timeout: x, signal: e });
    return mt(i, this.objectIdField);
  }
  _createCountQuery(t) {
    const e = this._createBaseQuery(t);
    return this.capabilities.query.supportsCacheHint && (e.cacheHint = !0), e;
  }
  _createFeaturesQuery(t = null) {
    const e = this._createBaseQuery(t), s = t?.data != null ? this.store.getAttributesForTile(t?.data?.id) : null, i = M(Ft(this.outFields, s ?? /* @__PURE__ */ new Set()), this._mandatoryOutFields);
    return e.outFields = Array.from(i), e.returnGeometry = !0, t != null && (this.capabilities.query.supportsResultType ? e.resultType = "tile" : this.capabilities.query.supportsCacheHint && (e.cacheHint = !0)), e;
  }
  _createBaseQuery(t) {
    const e = new b({ returnZ: this.hasZ, returnM: !1, geometry: this.tileInfo != null && t != null ? Et(t.data.extent, this.tileInfo.spatialReference) : void 0 }), s = this._configuration.filter;
    return s != null && (e.where = s.where, e.gdbVersion = s.gdbVersion, e.timeExtent = s.timeExtent), e.outSpatialReference = this.spatialReference, e;
  }
  _setPagingParameters(t, e, s) {
    if (!this.capabilities.query.supportsPagination) return !1;
    const { supportsMaxRecordCountFactor: i, supportsCacheHint: n, tileMaxRecordCount: r, maxRecordCount: a, supportsResultType: o } = this.capabilities.query, l = i ? b.MAX_MAX_RECORD_COUNT_FACTOR : 1, c = l * ((o || n) && r ? r : a || Wt);
    return t.start = e, i ? (t.maxRecordCountFactor = Math.min(l, Math.ceil(s / c)), t.num = Math.min(s, t.maxRecordCountFactor * c)) : t.num = Math.min(s, c), !0;
  }
};
h([d({ constructOnly: !0 })], f.prototype, "url", void 0), h([d({ constructOnly: !0 })], f.prototype, "objectIdField", void 0), h([d({ constructOnly: !0 })], f.prototype, "globalIdField", void 0), h([d({ constructOnly: !0 })], f.prototype, "capabilities", void 0), h([d({ constructOnly: !0 })], f.prototype, "sourceSpatialReference", void 0), h([d({ constructOnly: !0 })], f.prototype, "spatialReference", void 0), h([d({ constructOnly: !0 })], f.prototype, "store", void 0), h([d({ readOnly: !0 })], f.prototype, "_minimumVerticesPerFeature", null), h([d()], f.prototype, "_mandatoryOutFields", null), h([d()], f.prototype, "outFields", null), h([d()], f.prototype, "suspended", void 0), h([d()], f.prototype, "filter", null), h([d()], f.prototype, "customParameters", null), h([d({ readOnly: !0 })], f.prototype, "_configuration", null), h([d()], f.prototype, "tileInfo", null), h([d()], f.prototype, "tileSize", null), h([d()], f.prototype, "tilesOfInterest", void 0), h([d({ readOnly: !0 })], f.prototype, "updating", null), h([d({ readOnly: !0 })], f.prototype, "updatingExcludingEdits", null), h([d({ readOnly: !0 })], f.prototype, "availability", void 0), h([d()], f.prototype, "hasZ", null), f = h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")], f);
const Wt = 2e3, x = 6e5, Kt = 1e6, Xt = 25, Yt = 1;
class te {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._byteSize = 0;
  }
  set(e, s) {
    this.delete(e), this._store.set(e, s), this._byteSize += s.byteSize;
  }
  delete(e) {
    const s = this._store.get(e);
    return !!this._store.delete(e) && (s != null && (this._byteSize -= s.byteSize), !0);
  }
  get(e) {
    return this._used(e), this._store.get(e);
  }
  has(e) {
    return this._used(e), this._store.has(e);
  }
  clear() {
    this._store.clear();
  }
  applyByteSizeLimit(e, s) {
    for (const [i, n] of this._store) {
      if (this._byteSize <= e) break;
      this.delete(i), s(n);
    }
  }
  values() {
    return this._store.values();
  }
  [Symbol.iterator]() {
    return this._store[Symbol.iterator]();
  }
  _used(e) {
    const s = this._store.get(e);
    s && (this._store.delete(e), this._store.set(e, s));
  }
}
let E = class extends H {
  constructor(t) {
    super(t), this.tileInfo = null, this.extent = null, this.maximumByteSize = 10 * Ct.MEGABYTES, this._tileBounds = new Rt(), this._tiles = new te(), this._refCounts = /* @__PURE__ */ new Map(), this._tileFeatureCounts = /* @__PURE__ */ new Map(), this._tmpBoundingRect = Y();
  }
  add(t, e) {
    for (const n of e) this._referenceFeature(n.objectId);
    const s = this.featureStore.upsertMany(e), i = s.map((n) => new Set(Object.keys(n.attributes))).reduce((n, r) => k(n, r), new Set(Object.keys(s[0]?.attributes ?? [])));
    this._addTileStorage(t, new Set(s.map((n) => n.objectId)), ee(s), i), this._tiles.applyByteSizeLimit(this.maximumByteSize, (n) => this._removeTileStorage(n));
  }
  getAttributesForTile(t) {
    return t ? this._tiles.get(t)?.attributeKeys : null;
  }
  destroy() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  clear() {
    this.featureStore.clear(), this._tileBounds.clear(), this._tiles.clear(), this._refCounts.clear();
  }
  refresh() {
    this.clear(), this._tileFeatureCounts.clear();
  }
  processEdits(t, e, s) {
    return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)), this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures), e, s);
  }
  _addTileStorage(t, e, s, i) {
    const n = t.id;
    this._tiles.set(n, new ne(t, e, s, i)), this._tileBounds.set(n, t.extent), this._tileFeatureCounts.set(n, e.size);
  }
  _remove({ id: t }) {
    const e = this._tiles.get(t);
    e && this._removeTileStorage(e);
  }
  _removeTileStorage(t) {
    const e = [];
    for (const i of t.objectIds) this._unreferenceFeature(i) === C.REMOVED && e.push(i);
    this.featureStore.removeManyById(e);
    const s = t.data.id;
    this._tiles.delete(s), this._tileBounds.delete(s);
  }
  _processEditsDelete(t) {
    this.featureStore.removeManyById(t);
    for (const [, e] of this._tiles) {
      for (const s of t) e.objectIds.delete(s);
      this._tileFeatureCounts.set(e.data.id, e.objectIds.size);
    }
    for (const e of t) this._refCounts.delete(e);
  }
  async _processEditsRefetch(t, e, s) {
    const i = (await e(t, s)).features, { hasZ: n, hasM: r } = this.featureStore;
    for (const a of i) {
      const o = Tt(this._tmpBoundingRect, a.geometry, n, r);
      o != null && this._tileBounds.forEachInBounds(o, (l) => {
        const c = this._tiles.get(l);
        this.featureStore.add(a);
        const p = a.objectId;
        c.objectIds.has(p) || (c.objectIds.add(p), this._referenceFeature(p), this._tileFeatureCounts.set(c.data.id, c.objectIds.size));
      });
    }
  }
  process(t, e = () => !0, s) {
    if (this.tileInfo == null || !t.extent || this.extent != null && !D(z(this.extent, this._tmpBoundingRect), t.extent)) return new P(t);
    const i = this.getAttributesForTile(t.id);
    if ($(s, i)) return new P(t);
    const n = this._createTileTree(t, this.tileInfo);
    return this._simplify(n, e, null, 0, 1), this._collectMissingTiles(t, n, this.tileInfo, s);
  }
  get debugInfo() {
    return Array.from(this._tiles.values()).map(({ data: t }) => ({ data: t, featureCount: this._tileFeatureCounts.get(t.id) || 0 }));
  }
  getFeatureCount(t) {
    return this._tileFeatureCounts.get(t.id) ?? 0;
  }
  async fetchCount(t, e, s, i) {
    const n = this._tileFeatureCounts.get(t.id);
    if (n != null) return n;
    const r = await vt(e, s, i);
    return this._tileFeatureCounts.set(t.id, r.data.count), r.data.count;
  }
  _createTileTree(t, e) {
    const s = new K(t.level, t.row, t.col);
    return e.updateTileInfo(s, w.ExtrapolateOptions.POWER_OF_TWO), this._tileBounds.forEachInBounds(t.extent, (i) => {
      const n = this._tiles.get(i)?.data;
      n && this._tilesAreRelated(t, n) && this._populateChildren(s, n, e, this._tileFeatureCounts.get(n.id) || 0);
    }), s;
  }
  _tilesAreRelated(t, e) {
    if (!t || !e) return !1;
    if (t.level === e.level) return t.row === e.row && t.col === e.col;
    const s = t.level < e.level, i = s ? t : e, n = s ? e : t, r = 1 << n.level - i.level;
    return Math.floor(n.row / r) === i.row && Math.floor(n.col / r) === i.col;
  }
  _populateChildren(t, e, s, i) {
    const n = e.level - t.level - 1;
    if (n < 0) return void (t.isLeaf = !0);
    const r = e.row >> n, a = e.col >> n, o = t.row << 1, l = a - (t.col << 1) + (r - o << 1), c = t.children[l];
    if (c != null) this._populateChildren(c, e, s, i);
    else {
      const p = new K(t.level + 1, r, a);
      s.updateTileInfo(p, w.ExtrapolateOptions.POWER_OF_TWO), t.children[l] = p, this._populateChildren(p, e, s, i);
    }
  }
  _simplify(t, e, s, i, n) {
    const r = n * n;
    if (t.isLeaf) return e(this.getFeatureCount(t), n) ? 0 : (this._remove(t), s != null && (s.children[i] = null), r);
    const a = n / 2, o = a * a;
    let l = 0;
    for (let c = 0; c < t.children.length; c++) {
      const p = t.children[c];
      l += p != null ? this._simplify(p, e, t, c, a) : o;
    }
    return l === 0 ? this._mergeChildren(t) : 1 - l / r < ae && (this._purge(t), s != null && (s.children[i] = null), l = r), l;
  }
  _mergeChildren(t) {
    const e = /* @__PURE__ */ new Set();
    let s, i = 0;
    this._forEachLeaf(t, (n) => {
      const r = this._tiles.get(n.id);
      if (r) {
        s = s ? k(s, r.attributeKeys) : new Set(r.attributeKeys), i += r.byteSize;
        for (const a of r.objectIds) e.has(a) || (e.add(a), this._referenceFeature(a));
        this._remove(n);
      }
    }), this._addTileStorage(t, e, i, s ?? /* @__PURE__ */ new Set()), t.isLeaf = !0, t.children[0] = t.children[1] = t.children[2] = t.children[3] = null, this._tileFeatureCounts.set(t.id, e.size);
  }
  _forEachLeaf(t, e) {
    for (const s of t.children) s != null && (s.isLeaf ? e(s) : this._forEachLeaf(s, e));
  }
  _purge(t) {
    if (t != null) if (t.isLeaf) this._remove(t);
    else for (let e = 0; e < t.children.length; e++) {
      const s = t.children[e];
      this._purge(s), t.children[e] = null;
    }
  }
  _collectMissingTiles(t, e, s, i) {
    const n = new re(s, t, this.extent);
    return this._collectMissingTilesRecurse(e, n, 1, i), n.info;
  }
  _collectMissingTilesRecurse(t, e, s, i) {
    const n = this.getAttributesForTile(t.id), r = n && !$(i, n);
    if (r && e.addMissing(t.level, t.row, t.col, s), t.isLeaf) return;
    if (!t.hasChildren) return void (r || e.addMissing(t.level, t.row, t.col, s));
    const a = s / 2;
    for (let o = 0; o < t.children.length; o++) {
      const l = t.children[o];
      l == null ? e.addMissing(t.level + 1, (t.row << 1) + ((2 & o) >> 1), (t.col << 1) + (1 & o), a) : this._collectMissingTilesRecurse(l, e, a, i);
    }
  }
  _referenceFeature(t) {
    const e = (this._refCounts.get(t) || 0) + 1;
    return this._refCounts.set(t, e), e === 1 ? C.ADDED : C.UNCHANGED;
  }
  _unreferenceFeature(t) {
    const e = (this._refCounts.get(t) || 0) - 1;
    return e === 0 ? (this._refCounts.delete(t), C.REMOVED) : (e > 0 && this._refCounts.set(t, e), C.UNCHANGED);
  }
  get test() {
    return { tiles: Array.from(this._tiles.values()).map((t) => `${t.data.id}:[${Array.from(t.objectIds)}]`), featureReferences: Array.from(this._refCounts.keys()).map((t) => `${t}:${this._refCounts.get(t)}`) };
  }
};
function ee(t) {
  return t.reduce((e, s) => e + se(s), 0);
}
function se(t) {
  return 32 + ie(t.geometry) + St(t.attributes);
}
function ie(t) {
  if (t == null) return 0;
  const e = q(t.lengths, 4);
  return 32 + q(t.coords, 8) + e;
}
h([d({ constructOnly: !0 })], E.prototype, "featureStore", void 0), h([d()], E.prototype, "tileInfo", void 0), h([d()], E.prototype, "extent", void 0), h([d()], E.prototype, "maximumByteSize", void 0), E = h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")], E);
class ne {
  constructor(e, s, i, n) {
    this.data = e, this.objectIds = s, this.byteSize = i, this.attributeKeys = n;
  }
}
let K = class {
  constructor(e, s, i) {
    this.level = e, this.row = s, this.col = i, this.isLeaf = !1, this.extent = null, this.children = [null, null, null, null];
  }
  get hasChildren() {
    return !this.isLeaf && (this.children[0] != null || this.children[1] != null || this.children[2] != null || this.children[3] != null);
  }
};
class P {
  constructor(e, s = []) {
    this.missingTiles = s, this.fullArea = 0, this.coveredArea = 0, this.fullArea = et(e.extent), this.coveredArea = this.fullArea;
  }
  prepend(e) {
    this.missingTiles = e.missingTiles.concat(this.missingTiles), this.coveredArea += e.coveredArea, this.fullArea += e.fullArea;
  }
}
let re = class {
  constructor(e, s, i) {
    this._tileInfo = e, this._extent = null, this.info = new P(s), i != null && (this._extent = z(i));
  }
  addMissing(e, s, i, n) {
    const r = new bt(null, e, s, i);
    this._tileInfo.updateTileInfo(r, w.ExtrapolateOptions.POWER_OF_TWO), r.extent == null || this._extent != null && !D(this._extent, r.extent) || (this.info.missingTiles.push({ data: r, resolution: n }), this.info.coveredArea -= et(r.extent));
  }
};
const ae = 0.18751;
var C;
(function(t) {
  t[t.ADDED = 0] = "ADDED", t[t.REMOVED = 1] = "REMOVED", t[t.UNCHANGED = 2] = "UNCHANGED";
})(C || (C = {}));
let T = class extends It.EventedAccessor {
  constructor() {
    super(...arguments), this._isInitializing = !0, this.remoteClient = null, this._whenSetup = B(), this._elevationAligner = J(), this._elevationFilter = Q(), this._symbologyCandidatesFetcher = G(), this._updatingHandles = new R(), this._editsUpdatingHandles = new R(), this._pendingApplyEdits = /* @__PURE__ */ new Map(), this._alignPointsInFeatures = async (t, e) => {
      const s = { query: t }, i = await this.remoteClient.invoke("alignElevation", s, { signal: e });
      return y(e), i;
    }, this._getSymbologyCandidates = async (t, e) => {
      const s = { candidates: t, spatialReference: this._spatialReference.toJSON() }, i = await this.remoteClient.invoke("getSymbologyCandidates", s, { signal: e });
      return y(e), i;
    };
  }
  get updating() {
    return this.updatingExcludingEdits || this._editsUpdatingHandles.updating || this._featureFetcher.updating;
  }
  get updatingExcludingEdits() {
    return this._featureFetcher.updatingExcludingEdits || this._isInitializing || this._updatingHandles.updating;
  }
  destroy() {
    this._featureFetcher?.destroy(), this._queryEngine?.destroy(), this._featureStore?.clear();
  }
  async setup(t) {
    if (this.destroyed) return { result: {} };
    const { geometryType: e, objectIdField: s, timeInfo: i, fieldsIndex: n } = t.serviceInfo, { hasZ: r } = t, a = S.fromJSON(t.spatialReference);
    this._spatialReference = a, this._featureStore = new At({ ...t.serviceInfo, hasZ: r, hasM: !1 }), this._queryEngine = new $t({ spatialReference: t.spatialReference, featureStore: this._featureStore, geometryType: e, fieldsIndex: n, hasZ: r, hasM: !1, objectIdField: s, timeInfo: i }), this._featureFetcher = new f({ store: new E({ featureStore: this._featureStore }), url: t.serviceInfo.url, objectIdField: t.serviceInfo.objectIdField, globalIdField: t.serviceInfo.globalIdField, capabilities: t.serviceInfo.capabilities, spatialReference: a, sourceSpatialReference: S.fromJSON(t.serviceInfo.spatialReference), customParameters: t.configuration.customParameters });
    const o = t.configuration.viewType === "3d";
    return this._elevationAligner = J(o, { elevationInfo: t.elevationInfo != null ? wt.fromJSON(t.elevationInfo) : null, alignPointsInFeatures: this._alignPointsInFeatures }), this._elevationFilter = Q(o), this.addHandles([V(() => this._featureFetcher.availability, (l) => this.emit("notify-availability", { availability: l }), tt), V(() => this.updating, () => this._notifyUpdating())]), this._whenSetup.resolve(), this._isInitializing = !1, this.configure(t.configuration);
  }
  async configure(t) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), this._updateFeatureFetcherConfiguration(t), F;
  }
  async setSuspended(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.suspended = t, F;
  }
  async updateOutFields(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.outFields = new Set(t ?? []), F;
  }
  async fetchCandidates(t, e) {
    await this._whenSetup.promise, y(e);
    const s = oe(t), i = e?.signal, n = await this._queryEngine.executeQueryForSnapping(s, i);
    y(i);
    const r = await this._elevationAligner.alignCandidates(n.candidates, S.fromJSON(t.point.spatialReference) ?? S.WGS84, i);
    y(i);
    const a = await this._symbologyCandidatesFetcher.fetch(r, i);
    y(i);
    const o = a.length === 0 ? r : r.concat(a);
    return { result: { candidates: this._elevationFilter.filter(s, o) } };
  }
  async updateTiles(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.tileSize = t.tileSize, this._featureFetcher.tilesOfInterest = t.tiles, this._featureFetcher.tileInfo = t.tileInfo != null ? w.fromJSON(t.tileInfo) : null, F;
  }
  async refresh(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), this._featureFetcher.refresh(), F;
  }
  async whenNotUpdating(t, e) {
    return await this._updatingHandles.addPromise(this._whenSetup.promise), y(e), await Ot(() => !this.updatingExcludingEdits, e), y(e), F;
  }
  async getDebugInfo(t, e) {
    return y(e), { result: this._featureFetcher.debugInfo };
  }
  async beginApplyEdits(t, e) {
    this._updatingHandles.addPromise(this._whenSetup.promise), y(e);
    const s = B();
    return this._pendingApplyEdits.set(t.id, s), this._featureFetcher.applyEdits(s.promise), this._editsUpdatingHandles.addPromise(s.promise), F;
  }
  async endApplyEdits(t, e) {
    const s = this._pendingApplyEdits.get(t.id);
    return s && s.resolve(t.edits), y(e), F;
  }
  async notifyElevationSourceChange(t, e) {
    return this._elevationAligner.notifyElevationSourceChange(), F;
  }
  async notifySymbologyChange(t, e) {
    return this._symbologyCandidatesFetcher.notifySymbologyChange(), F;
  }
  async setSymbologySnappingSupported(t) {
    return this._symbologyCandidatesFetcher = G(t, this._getSymbologyCandidates), F;
  }
  _updateFeatureFetcherConfiguration(t) {
    this._featureFetcher.filter = t.filter != null ? b.fromJSON(t.filter) : null, this._featureFetcher.customParameters = t.customParameters;
  }
  _notifyUpdating() {
    this.emit("notify-updating", { updating: this.updating });
  }
};
h([d({ readOnly: !0 })], T.prototype, "updating", null), h([d({ readOnly: !0 })], T.prototype, "updatingExcludingEdits", null), h([d()], T.prototype, "_isInitializing", void 0), T = h([O("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")], T);
const Fe = T;
function oe(t) {
  if (!t.filter) return { ...t, query: { where: "1=1" } };
  const { distance: e, units: s, spatialRel: i, where: n, timeExtent: r, objectIds: a } = t.filter, o = { geometry: t.filter.geometry ? xt(t.filter.geometry) : void 0, distance: e, units: s, spatialRel: i, timeExtent: r, objectIds: a, where: n ?? "1=1" };
  return { ...t, query: o };
}
const F = { result: {} };
export {
  Fe as default
};
//# sourceMappingURL=FeatureServiceSnappingSourceWorker-BE2hli98.js.map
