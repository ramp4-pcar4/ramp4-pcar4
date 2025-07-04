import { M as we, mz as ht, cR as xe, bl as ke, cT as Ht, d1 as Jt, kY as ut, cW as dt, oU as Z, oV as Kt, bh as B, d2 as ct, d6 as N, hz as es, oW as ts, oX as ss, d7 as C, j$ as V, ba as rs, oY as is, k4 as ns, de as as, oZ as os, d0 as hs, k5 as lt, nx as _t, af as y, ny as he, ff as Fe, b5 as pt, a8 as Y, f5 as gt, f2 as us, f1 as ds, N as U, O as J, P as ft, dU as yt, U as pe, o_ as cs, o$ as ls, s as j, i9 as _s, m9 as ps, C as gs, p0 as fs, lF as mt, j5 as De, p1 as bt, p2 as ys, jG as te, jH as ms, kn as It, ay as bs, fy as vt, p3 as Le, p4 as ze, a2 as Is, l0 as vs, lM as Ss, aj as Te, cP as ws, co as xs, p5 as ks, fh as Ue, E as Ge } from "./main-DIdq27YS.js";
import { a as x } from "./definitions-7ZaZRHRo.js";
import { n as We, i as A, r as Fs, M as Ce, p as Me, d as St, f as $e, g as Ts, a as Cs, b as Ms, h as $s, j as Os } from "./AttributeStore-C623XWda.js";
import { o as qs } from "./tileUtils-DrLrf-3T.js";
import { S as As, R as Rs, A as Es } from "./geohashUtils-D1vkiM1l.js";
import { x as Ps, j as Ne } from "./timeSupport-DNX2GoHu.js";
import { o as js, $ as wt } from "./QueryEngine-Do-KTbk3.js";
import { $ as Be } from "./ogcFeatureUtils-BTfb2REk.js";
import { t as Ve } from "./CircularArray-DaBi-m_L.js";
import { createConnection as Ds } from "./createConnection-ImjZpH7j.js";
import { d as Ls } from "./UpdateTracking2D-D4ExNx8R.js";
let zs = class {
  constructor(e) {
    this._client = e, this.layerView = this._client.createInvokeProxy("", { ignoreConnectionErrors: !0 }), this.container = this._client.createInvokeProxy("container", { ignoreConnectionErrors: !0 }), this.eventLog = this._client.createInvokeProxy("eventLog", { ignoreConnectionErrors: !0 });
  }
};
const se = 1, Oe = 2, re = 4, qe = 8, Ae = 16, ie = 32, Re = 64, ne = 128;
function ue(u) {
  switch (u) {
    case se:
    case qe:
    case ie:
      return -1;
    case Oe:
    case Re:
      return 0;
    case re:
    case Ae:
    case ne:
      return 1;
  }
}
function de(u) {
  switch (u) {
    case se:
    case Oe:
    case re:
      return -1;
    case qe:
    case Ae:
      return 0;
    case ie:
    case Re:
    case ne:
      return 1;
  }
}
const Ye = se | qe | ie, Xe = re | Ae | ne, Qe = se | Oe | re, Ze = ie | Re | ne;
let Us = class {
  constructor(e, t, s, r = 0) {
    this.tileKey = e, this._bufferingEnabled = t, this._sizeHint = r, this._meshes = { self: new We(this.id, this._sizeHint), neighbors: new Array() }, this._currentRecordOverlaps = 0, this._currentEntityOverlaps = 0, this._copyBufferedDataIntoSelf = s && this._bufferingEnabled && e.level === 0;
  }
  get id() {
    return this.tileKey.id;
  }
  vertexCount() {
    return this._meshes.self.vertexCount();
  }
  indexCount() {
    return this._meshes.self.indexCount();
  }
  indexEnsureSize(e) {
    this._meshes.self.indexEnsureSize(e);
  }
  entityStart(e, t = e) {
    this._currentEntityOverlaps = 0, this._meshes.self.entityStart(e, t);
  }
  entityRecordCount() {
    return this._meshes.self.entityRecordCount();
  }
  entityEnd() {
    if (this._meshes.self.entityEnd(), this._bufferingEnabled) {
      if (this._copyBufferedDataIntoSelf) return;
      for (let e = 0; e < 8; e++) {
        const t = 1 << e;
        this._currentEntityOverlaps & t && this._meshes.neighbors[e].entityEnd();
      }
    }
  }
  recordStart(e, t, s) {
    this._currentRecordOverlaps = 0, this._meshes.self.recordStart(e, t, s);
  }
  recordEnd(e = 0) {
    const t = this._meshes.self.recordEnd(this._currentRecordOverlaps);
    return t && this._currentRecordOverlaps !== 0 ? (this._copyIntoNeighbors(), this._currentEntityOverlaps |= this._currentRecordOverlaps, !0) : t;
  }
  recordBounds(e, t, s, r) {
    this._bufferingEnabled && this._addOverlap(e, t, s, r);
  }
  recordCount() {
    return this._meshes.self.recordCount();
  }
  metricStart(e) {
    this._meshes.self.metricStart(e);
  }
  metricBoxWrite(e) {
    this._meshes.self.metricBoxWrite(e);
  }
  metricEnd() {
    this._meshes.self.metricEnd();
  }
  vertexWrite(e) {
    this._meshes.self.vertexWrite(e);
  }
  vertexWriteF32(e) {
    this._meshes.self.vertexWriteF32(e);
  }
  vertexWriteRegion(e) {
    this._meshes.self.vertexWriteRegion(e);
  }
  indexWrite(e) {
    this._meshes.self.indexWrite(e);
  }
  serialize(e) {
    const t = { message: [], transferList: [] }, s = this._meshes.self.serialize();
    return t.message.push({ tileId: this.tileKey.id, ...s.message }), t.transferList.push(...s.transferList), this._meshes.neighbors.forEach((r, i) => {
      const n = r.serialize(), a = 1 << i, o = ue(a), h = de(a), c = qs(new we(this.tileKey), o, h, e);
      t.message.push({ tileId: c.id, ...n.message }), t.transferList.push(...n.transferList);
    }), t;
  }
  _addOverlap(e, t, s, r) {
    const i = Math.min(x / 2, s), n = Math.min(x / 2, r), a = 255 ^ ((e < 0 + i ? Xe : e >= x - i ? Ye : Xe | Ye) | (t < 0 + n ? Ze : t >= x - n ? Qe : Ze | Qe));
    this._currentRecordOverlaps |= a;
  }
  _copyIntoNeighbors() {
    for (let e = 0; e < 8; e++) {
      const t = 1 << e;
      if (this._currentRecordOverlaps & t) {
        if (this._copyBufferedDataIntoSelf) {
          const n = -ue(t) * x, a = -de(t) * x;
          this._meshes.self.copyLast(n, a);
          continue;
        }
        if (!this._meshes.neighbors[e]) {
          const n = Math.floor(this._sizeHint / 16);
          this._meshes.neighbors[e] = new We(t, n);
        }
        const s = this._meshes.neighbors[e], r = -ue(t) * x, i = -de(t) * x;
        s.copyLastFrom(this._meshes.self, r, i);
      }
    }
  }
}, Gs = class {
}, D = class xt {
  constructor() {
    this._defaultResult = null, this._backgroundFillResult = null;
  }
  static async from(e, t, s, r) {
    const i = new xt();
    return i.setDefault(await A(e, t, s.meshes, r)), i;
  }
  size() {
    return 1;
  }
  getDefault() {
    return this._defaultResult;
  }
  setDefault(e) {
    this._defaultResult = e;
  }
  getBackgroundFill() {
    return this._backgroundFillResult;
  }
  setBackgroundFill(e) {
    this._backgroundFillResult = e;
  }
  match(e, t) {
    const s = this.doMatch(e, t) || this.getDefault();
    if (s && s.length > 0) {
      const r = this.getBackgroundFill();
      if (r) return [...r, ...s];
    }
    return s;
  }
  getSortKey(e, t) {
    return 0;
  }
  doMatch(e, t) {
    return null;
  }
  async fetchResources(e, t) {
  }
}, Ws = class kt extends D {
  static async fromDictionaryRenderer(e, t, s) {
    return new kt(e, t, s);
  }
  constructor(e, t, s) {
    super(), this._storage = e, this._schema = t, this._viewParams = s, this._hashToGroup = /* @__PURE__ */ new Map();
  }
  get fieldMap() {
    return this._schema.fieldMap;
  }
  async fetchResources(e, t) {
    const s = t.getCursor(), r = [];
    for (; s.next(); ) r.push(this._updateMeshWriterGroup(e, s));
    await Promise.all(r);
  }
  match(e, t) {
    const s = e.getAttributeHash();
    return this._hashToGroup.get(s);
  }
  async _updateMeshWriterGroup(e, t) {
    const s = t.readLegacyFeatureForDisplay(), r = t.getAttributeHash();
    if (this._hashToGroup.has(r)) return;
    this._hashToGroup.set(r, null);
    const i = await e.fetchDictionaryResourceImmediate({ type: "dictionary-request", feature: s });
    if (!i) return;
    const n = await A(this._storage, e, i.meshes, this._viewParams);
    this._hashToGroup.set(r, n);
  }
}, Ns = class Ft extends D {
  constructor(e, t) {
    super(), this._intervals = [], this._isMaxInclusive = t, this._field = e;
  }
  static async fromIntervalSchema(e, t, s, r) {
    const i = await e.createComputedField(s), n = new Ft(i, s.isMaxInclusive);
    await Promise.all(s.intervals.map(async (h) => {
      const c = await A(e, t, h.meshes, r);
      n.add(h, c);
    }));
    const a = await A(e, t, s.defaultSymbol, r);
    n.setDefault(a);
    const o = await A(e, t, s.backgroundFill, r);
    return n.setBackgroundFill(o), n;
  }
  add(e, t) {
    this._intervals.push({ interval: e, result: t }), this._intervals.sort((s, r) => s.interval.min - r.interval.min);
  }
  size() {
    return super.size() + this._intervals.length;
  }
  doMatch(e, t) {
    const s = this._field?.read(e, t);
    if (s == null || isNaN(s) || s === 1 / 0 || s === -1 / 0) return null;
    for (let r = 0; r < this._intervals.length; r++) {
      const { interval: i, result: n } = this._intervals[r], a = s >= i.min, o = this._isMaxInclusive ? s <= i.max : s < i.max;
      if (a && o) return n;
    }
    return null;
  }
}, Bs = class Tt extends D {
  static async fromLabelSchema(e, t, s, r) {
    const i = s.classes.map(async (a) => {
      const o = await A(e, t, a.meshes, r);
      return { minScale: a.minScale, maxScale: a.maxScale, meshes: o, expression: null, where: await e.createWhereClause(a.where) };
    }), n = await Promise.all(i);
    return new Tt(n);
  }
  constructor(e) {
    super(), this._labels = e;
  }
  match(e, t) {
    if (!this._labels.length) return null;
    const s = this._getLabels(t.$view.scale), r = [];
    for (const i of s) i.where && !i.where(e) || r.push(...i.meshes);
    return r;
  }
  _getLabels(e) {
    return this._labels.filter((t) => this._validForTileScale(t, e));
  }
  _validForTileScale(e, t) {
    const s = t - t / 4, r = t + t / 2;
    return (!e.minScale || e.minScale >= s) && (!e.maxScale || e.maxScale <= r);
  }
}, Vs = class Ct extends D {
  constructor(e, t) {
    super(), this._defaultSymbolSortKey = 0, this._nullResult = null, this._resultsMap = /* @__PURE__ */ new Map(), this._fields = [], this._fields = e, this._separator = t || "";
  }
  static async fromMatcherSchema(e, t, s, r) {
    const i = s.expression ? [e.createComputedField({ expression: s.expression })] : [s.field ? e.createComputedField({ field: s.field }) : null, s.field2 ? e.createComputedField({ field: s.field2 }) : null, s.field3 ? e.createComputedField({ field: s.field3 }) : null], n = (await Promise.all(i)).filter((c) => !!c), a = new Ct(n, s.fieldDelimiter), o = await A(e, t, s.defaultSymbol, r);
    a.setDefault(o);
    const h = await A(e, t, s.backgroundFill, r);
    return a.setBackgroundFill(h), await Promise.all(s.map.map(async (c, d) => {
      const l = await A(e, t, c.symbol, r);
      c.value === "<Null>" ? a.setNullResult(l) : a.add(c.value, l, d + 1);
    })), a;
  }
  setNullResult(e) {
    this._nullResult = e;
  }
  getSortKey(e, t) {
    const s = this._getValueFromFields(e, t);
    if (s == null || s === "" || s === "<Null>") return 0;
    const r = this._resultsMap.get(s.toString());
    return r ? r.sortKey : this._defaultSymbolSortKey;
  }
  add(e, t, s) {
    this._resultsMap.set(e.toString(), { meshWriters: t, sortKey: s }), this._defaultSymbolSortKey = Math.max(this._defaultSymbolSortKey, s + 1);
  }
  size() {
    return super.size() + this._resultsMap.size;
  }
  doMatch(e, t) {
    const s = this._getValueFromFields(e, t);
    if (this._nullResult !== null && (s == null || s === "" || s === "<Null>")) return this._nullResult;
    if (s == null) return null;
    const r = s.toString();
    return this._resultsMap.get(r)?.meshWriters;
  }
  _getValueFromFields(e, t) {
    const s = [];
    for (const r of this._fields) {
      const i = r.read(e, t);
      i == null || i === "" ? s.push("<Null>") : s.push(i);
    }
    return s.join(this._separator);
  }
};
async function X(u, e, t, s) {
  switch (t.type) {
    case "simple":
    case "heatmap":
    case "dot-density":
    case "pie-chart":
      return D.from(u, e, t, s);
    case "interval":
      return Ns.fromIntervalSchema(u, e, t, s);
    case "dictionary":
      return Ws.fromDictionaryRenderer(u, t, s);
    case "label":
      return Bs.fromLabelSchema(u, e, t, s);
    case "map":
      return Vs.fromMatcherSchema(u, e, t, s);
    case "subtype":
      return Ys.fromSubtypes(u, e, t, s);
    case "cluster":
      return Xs.fromClusterSchema(u, e, t, s);
    default:
      throw new Error("Impl");
  }
}
let Ys = class Mt extends D {
  constructor(e, t) {
    super(), this._subMatchers = e, this._subtypeField = t;
  }
  static async fromSubtypes(e, t, s, r) {
    const i = /* @__PURE__ */ new Map(), n = [];
    for (const a in s.renderers) {
      const o = parseInt(a, 10), h = X(e, t, s.renderers[a], r).then((c) => i.set(o, c));
      n.push(h);
    }
    return await Promise.all(n), new Mt(i, s.subtypeField);
  }
  match(e, t) {
    const s = e.readAttribute(this._subtypeField), r = this._subMatchers.get(s);
    return r ? r.match(e, t) : null;
  }
}, Xs = class $t extends D {
  static async fromClusterSchema(e, t, s, r) {
    const [i, n] = await Promise.all([X(e, t, s.feature, r), X(e, t, s.cluster, r)]);
    return new $t(i, n);
  }
  constructor(e, t) {
    super(), this._featureMatcher = e, this._clusterMatcher = t;
  }
  match(e, t) {
    return e.readAttribute("cluster_count") === 1 ? this._featureMatcher.match(e, t) : this._clusterMatcher.match(e, t);
  }
}, Qs = class Ot extends Gs {
  static async create(e, t, s, r) {
    const i = await X(e, t, s.symbology, r), n = s.labels ? await X(e, t, s.labels, r) : null;
    return new Ot(i, n);
  }
  constructor(e, t) {
    super(), this._symbology = e, this._labels = t;
  }
  destroy() {
  }
  async enqueueMatcherRequests(e, t) {
    await Promise.all([this._symbology.fetchResources(e, t), this._labels?.fetchResources(e, t)]);
  }
  enqueueWriterRequests(e, t, s) {
    const r = this._symbology.match(t, s);
    if (r) {
      for (const i of r) i.enqueueRequest(e, t, s);
      if (this._labels) {
        const i = this._labels.match(t, s);
        if (!i) return;
        for (const n of i) n.enqueueRequest(e, t, s);
      }
    }
  }
  write(e, t, s, r, i) {
    const n = this._symbology.match(s, r);
    if (n) {
      for (const a of n) a.write(e, t, s, r, i);
      if (e.entityRecordCount() >= 1 && this._labels) {
        const a = this._labels.match(s, r);
        if (!a) return;
        for (const o of a) o.setReferences(n), o.write(e, t, s, r, i);
      }
    }
  }
  getSortKey(e, t) {
    return this._symbology.getSortKey(e, t);
  }
}, Zs = class {
  constructor(e) {
    this._outstandingMessages = [], this._queue = new ht({ concurrency: e.concurrency, process: (t) => e.process(t) });
  }
  async push(e) {
    if (e.end) return await Promise.all(this._outstandingMessages), await this._queue.push(e), void (this._outstandingMessages = []);
    const t = this._queue.push(e);
    return this._outstandingMessages.push(t), t;
  }
}, qt = class ge {
  static async create(e, t) {
    if (t.statisticType === "count") {
      const r = new Fs(1);
      return new ge(t.name, t.alias, t.type, t.statisticType, r);
    }
    const s = await e.createComputedField({ expression: t.onStatisticExpression?.expression, field: t.onStatisticField });
    return new ge(t.name, t.alias, t.type, t.statisticType, s);
  }
  constructor(e, t, s, r, i) {
    this.name = e, this.alias = t, this.type = s, this.statisticType = r, this.computed = i;
  }
}, Ee = class {
  constructor(e) {
    this.subscription = e, this.handledChunks = /* @__PURE__ */ new Set();
  }
  destroy() {
  }
}, At = class {
  constructor(e, t) {
    this._source = e, this._attributeStore = t, this._sendStates = /* @__PURE__ */ new Map();
  }
  destroy() {
  }
  get enablePixelBuffering() {
    return !0;
  }
  onSubscribe(e) {
    const t = this.createState(e);
    this._sendStates.set(e.key.id, t), this.updateChunks();
  }
  onUnsubscribe(e) {
    this._sendStates.get(e.key.id)?.destroy(), this._sendStates.delete(e.key.id);
  }
  invalidate() {
    const e = Array.from(this._sendStates.values());
    this._sendStates.clear();
    for (const t of e) t.destroy(), this.onSubscribe(t.subscription);
  }
  invalidateAttributeData() {
  }
  getFeatureObjectIdsForAggregate(e) {
    throw new Error("InternalError: AggregateId lookup not supported");
  }
  getDisplayIds(e) {
    return this.displayMap(e, (t) => t, (t) => t);
  }
  getDisplayAndObjectIds(e) {
    return this.displayMap(e, (t) => t, (t, s, r) => [t, r]);
  }
  afterUpdateChunks() {
  }
}, Rt = class extends At {
  constructor(e, t, s, r) {
    super(e, t), this.spatialReference = s, this.aggregateFields = r, this.events = new xe(), this.featureAdapter = js;
  }
  get aggregateQueryEngine() {
    return this._aggregateQueryEngine || (this._aggregateQueryEngine = new wt({ featureStore: this, fieldsIndex: this._metadata.fieldsIndex, geometryType: this._metadata.geometryType, objectIdField: this._metadata.objectIdField, spatialReference: this.spatialReference })), this._aggregateQueryEngine;
  }
  removeChunks(e) {
  }
  forEach(e) {
    return this.forEachAggregateWorldSpace(e);
  }
  forEachInBounds(e, t) {
  }
  forEachBounds(e, t) {
    const s = ke();
    for (const r of e) {
      const i = Ht(s, r.geometry, !1, !1);
      i && t(i);
    }
  }
}, Pe = class {
  constructor(e, t, s, r, i) {
    this.subscription = e, this.reader = t, this.clear = s, this.end = r, this.debugInfo = i, this.type = "append";
  }
  get id() {
    return this.subscription.tile.id;
  }
  createMessage(e, t, s) {
    return { type: "append", clear: this.clear, id: this.id, append: e, end: this.end, debugInfo: this.debugInfo, subscriptionVesrion: this.subscription.version, version: t, attributeEpoch: s };
  }
}, fe = class {
  constructor(e, t, s, r, i) {
    this.subscription = e, this.reader = t, this.remove = s, this.end = r, this.debugInfo = i, this.type = "update";
  }
  get id() {
    return this.subscription.tile.id;
  }
  createMessage(e, t, s) {
    return { type: "update", id: this.id, modify: e, debugInfo: this.debugInfo, remove: this.remove, version: t, subscriptionVesrion: this.subscription.version, end: this.end, attributeEpoch: s };
  }
}, M = class P extends Ce {
  static fromFeatures(e, t) {
    const { objectIdField: s, geometryType: r } = t, i = Jt([], e, r, !1, !1, s);
    for (let n = 0; n < i.length; n++) i[n].displayId = e[n].displayId;
    return P.fromOptimizedFeatures(i, t);
  }
  static fromFeatureSet(e, t) {
    const s = ut(e, t.objectIdField);
    return P.fromOptimizedFeatureSet(s, t);
  }
  static fromOptimizedFeatureSet(e, t) {
    const s = P.fromOptimizedFeatures(e.features, t);
    return s._exceededTransferLimit = e.exceededTransferLimit, s._transform = e.transform, s._fieldsIndex = new dt(e.fields), s;
  }
  static fromOptimizedFeatures(e, t, s) {
    const r = new P(e, t);
    return r._fieldsIndex = t.fieldsIndex, r._transform = s, r;
  }
  static empty(e) {
    return new P([], e);
  }
  constructor(e, t) {
    super(t), this._exceededTransferLimit = !1, this._featureIndex = -1, this._fieldsIndex = null, this._geometryType = t.geometryType, this._features = e;
  }
  get fields() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasFeatures() {
    return !!this._features.length;
  }
  get hasNext() {
    return this._featureIndex + 1 < this._features.length;
  }
  get exceededTransferLimit() {
    return this._exceededTransferLimit;
  }
  get hasZ() {
    return !1;
  }
  get hasM() {
    return !1;
  }
  get _current() {
    return this._features[this._featureIndex];
  }
  removeIds(e) {
    const t = new Set(e);
    this._features = this._features.filter((s) => !(s.objectId != null && t.has(s.objectId)));
  }
  getSize() {
    return this._features.length;
  }
  getCursor() {
    return this.copy();
  }
  getInTransform() {
    return this._transform;
  }
  getAttributeHash() {
    let e = "";
    for (const t in this._current.attributes) e += this._current.attributes[t];
    return e;
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e) {
    this._featureIndex = e;
  }
  getObjectId() {
    return this._current?.objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(e) {
    this._current.displayId = e;
  }
  copy() {
    const e = new P(this._features, this.metadata);
    return this.copyInto(e), e;
  }
  next() {
    for (; ++this._featureIndex < this._features.length && !this._getExists(); ) ;
    return this._featureIndex < this._features.length;
  }
  readGeometryArea() {
    return Z(this._current) ? Kt(this._current.geometry, 2) : 0;
  }
  _readX() {
    return Z(this._current) ? this._current.geometry.coords[0] : 0;
  }
  _readY() {
    return Z(this._current) ? this._current.geometry.coords[1] : 0;
  }
  _readGeometry() {
    return Z(this._current) ? this._current.geometry ?? null : null;
  }
  _readServerCentroid() {
    return this._current.centroid;
  }
  _readAttribute(e, t) {
    if (!this._fieldsIndex) {
      const i = this._current.attributes[e];
      if (i !== void 0) return i;
      const n = e.toLowerCase();
      for (const a in this._current.attributes) if (a.toLowerCase() === n) return this._current.attributes[a];
      return;
    }
    const s = this._fieldsIndex.get(e);
    if (!s) return;
    let r = this._current.attributes[s.name];
    return r == null ? r : (this.fields.get(e)?.type === "esriFieldTypeTimestampOffset" && (r = this.parseTimestampOffset(r)), t && this.fields.isDateField(e) ? new Date(r) : r);
  }
  _readAttributes() {
    return this._current.attributes;
  }
  copyInto(e) {
    super.copyInto(e), e._featureIndex = this._featureIndex, e._transform = this._transform, e._fieldsIndex = this._fieldsIndex;
  }
}, Hs = class extends Ee {
  constructor(e, t) {
    super(e), this.bins = /* @__PURE__ */ new Map(), this.done = !1, this._store = t;
  }
  reset() {
    this.destroy(), this.bins.clear(), this.done = !1, this.handledChunks.clear();
  }
  destroy() {
    const e = this.subscription.tile.key.level;
    for (const t of this.bins.values()) {
      const s = t.cachedFeature?.objectId;
      s != null && this._store.releaseDisplayIdForObjectId(`${s}.${e}`);
    }
  }
  *featuresWorldSpace() {
    for (const e of this.bins.values()) {
      const t = e.cachedFeature;
      if (t) {
        const s = t.clone();
        s.geometry && es(s.geometry, s.geometry, !1, !1, this.subscription.tile.transform), yield s;
      }
    }
  }
  getGeohashBounds(e, t) {
    const s = this.subscription.tile;
    return As(s.extent, s.resolution, t, e);
  }
}, Js = class Et extends Rt {
  static async create(e, t, s, r, i) {
    const n = new Me({ spatialReference: t }), a = e.fixedBinLevel, o = await Promise.all(e.fields.map(async (c) => qt.create(n, c))), h = e.featureFilter ? await St.create({ geometryType: s.metadata.geometryType, hasM: !1, hasZ: !1, timeInfo: s.metadata.timeInfo, fieldsIndex: s.metadata.fieldsIndex, spatialReference: t, filterJSON: e.featureFilter }) : null;
    return await Ps(t, B.WGS84), new Et({ fields: o, geohashLevel: a, spatialReference: t, featureFilter: h, timeZone: i }, e.fields, s, r);
  }
  constructor(e, t, s, r) {
    super(s, r, e.spatialReference, e.fields), this._indexOptions = e, this._metadata = new $e({ geometryType: "esriGeometryPolygon", objectIdField: "aggregateId", fields: t, globalIdField: null, spatialReference: s.metadata.spatialReference, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null });
  }
  createState(e) {
    return new Hs(e, this._attributeStore);
  }
  async *applyOverride(e) {
    for (const t of this._sendStates.values())
      t.reset(), yield new Pe(t.subscription, M.empty(this._source.metadata), !0, !1, {});
  }
  displayMap(e, t, s) {
    const r = new Map(e.map((n) => [t(n), n])), i = [];
    for (const n of this._sendStates.values()) for (const a of n.featuresWorldSpace()) {
      const { objectId: o, displayId: h } = a, c = r.get(o);
      if (c != null) {
        const d = s(h, c, o);
        i.push(d), r.delete(o);
      }
    }
    return i;
  }
  getDisplayFeatures(e) {
    const t = new Set(e), s = /* @__PURE__ */ new Set(), r = [];
    for (const i of this._sendStates.values()) for (const n of i.featuresWorldSpace()) t.has(n.displayId) && !s.has(n.objectId) && (n.geometry && r.push({ ...ct(n, this._metadata.geometryType, !1, !1), displayId: n.displayId }), s.add(n.objectId));
    return { features: [], aggregates: r };
  }
  getFeatureObjectIdsForAggregate(e) {
    for (const t of this._sendStates.values()) for (const s of t.bins.values()) if (s.id === e) return Array.from(s.objectIds);
    return [];
  }
  async *updateChunks() {
    if (this._source.chunks().length) for (const e of this._sendStates.values()) yield* this._update(e, this._source);
  }
  forEachAggregateWorldSpace(e) {
    for (const t of this._sendStates.values()) for (const s of t.featuresWorldSpace()) e(s);
  }
  async *_update(e, t) {
    const { handledChunks: s, subscription: r, bins: i } = e, { spatialReference: n, geohashLevel: a } = this._indexOptions, o = r.tile;
    if (e.done) return;
    for (const p of t.chunks()) {
      if (s.has(p.chunkId)) continue;
      s.add(p.chunkId);
      const I = p.queryInfo;
      if ("tileId" in I) {
        const b = new we(I.tileId);
        if (b.level !== o.level || b.world !== o.key.world) continue;
      }
      const f = p.getGeohashIndex(this._indexOptions), k = e.getGeohashBounds(n, a);
      k != null && f.putBins(i, k);
    }
    const h = [], c = r.tile.transform, d = r.tile.key.level;
    for (const p of i.values()) {
      if (p.cachedFeature) p.cachedFeature.attributes = p.getAttributes();
      else {
        const I = p.getGeometry(this.spatialReference, c), f = new N(I, p.getAttributes(), null);
        I || (f.centroid = p.getGeometryCentroid(this.spatialReference, c)), f.objectId = p.id, f.displayId = this._attributeStore.createDisplayIdForObjectId(`${f.objectId}.${d}`), p.cachedFeature = f;
      }
      h.push(p.cachedFeature);
    }
    this.events.emit("changed"), e.done = !t.updateTracking.updating;
    const l = M.fromOptimizedFeatures(h, this._metadata, c), g = l.getCursor(), _ = e.subscription.tile.createArcadeEvaluationOptions(this._indexOptions.timeZone);
    for (; g.next(); ) this._attributeStore.setAttributeData(g.getDisplayId(), g, _);
    yield new fe(e.subscription, l, [], e.done, {});
  }
};
const He = Math.PI / 180;
let Pt = class ye {
  static create(e) {
    return new ye(e.map((t) => Ks(t)));
  }
  constructor(e) {
    this._statistics = e;
  }
  values() {
    return this._statistics.values();
  }
  insert(e, t) {
    for (const s of this._statistics) s.insert(e, t);
  }
  merge(e) {
    for (let t = 0; t < this._statistics.length; t++) {
      const s = this._statistics[t], r = e._statistics[t];
      if (s.field.name !== r.field.name) throw new Error("InternalError: Tried to merge incompatible statistics");
      s.merge(r);
    }
  }
  clone() {
    return new ye(this._statistics.map((e) => e.clone()));
  }
};
function Ks(u) {
  switch (u.statisticType) {
    case "min":
      return new er(u);
    case "max":
      return new tr(u);
    case "avg":
      return new rr(u);
    case "avg_angle":
      return new ir(u);
    case "sum":
    case "count":
      return new sr(u);
    case "mode":
      return new nr(u);
  }
}
let G = class {
  constructor(e) {
    this.field = e;
  }
  insert(e, t) {
    if (!this.field.computed) return;
    const s = this.field.computed.read(e, t);
    Ts(s) || this._insertValue(s);
  }
}, er = class jt extends G {
  constructor() {
    super(...arguments), this.type = "min", this.value = Number.MAX_VALUE;
  }
  _insertValue(e) {
    this.value = Math.min(this.value, e);
  }
  merge(e) {
    this.value = Math.min(this.value, e.value);
  }
  clone() {
    const e = new jt(this.field);
    return e.value = this.value, e;
  }
}, tr = class Dt extends G {
  constructor() {
    super(...arguments), this.type = "max", this.value = Number.MIN_VALUE;
  }
  _insertValue(e) {
    this.value = Math.max(this.value, e);
  }
  merge(e) {
    this.value = Math.max(this.value, e.value);
  }
  clone() {
    const e = new Dt(this.field);
    return e.value = this.value, e;
  }
}, sr = class Lt extends G {
  constructor() {
    super(...arguments), this.type = "sum", this.value = 0;
  }
  _insertValue(e) {
    this.value += e;
  }
  merge(e) {
    this.value += e.value;
  }
  clone() {
    const e = new Lt(this.field);
    return e.value = this.value, e;
  }
}, rr = class zt extends G {
  constructor() {
    super(...arguments), this.type = "avg", this._total = 0, this._count = 0;
  }
  get value() {
    return this._total / this._count;
  }
  _insertValue(e) {
    this._total += e, this._count += 1;
  }
  merge(e) {
    this._total += e._total, this._count += e._count;
  }
  clone() {
    const e = new zt(this.field);
    return e._total = this._total, e._count = this._count, e;
  }
}, ir = class Ut extends G {
  constructor() {
    super(...arguments), this.type = "avg_angle", this._x = 0, this._y = 0, this._count = 0;
  }
  get value() {
    const e = this._x / this._count, t = this._y / this._count, s = 180 / Math.PI;
    return Math.atan2(t, e) * s;
  }
  _insertValue(e) {
    this._x = this._x + Math.cos(e * He), this._y = this._y + Math.sin(e * He), this._count += 1;
  }
  merge(e) {
    this._x += e._x, this._y += e._y, this._count += e._count;
  }
  clone() {
    const e = new Ut(this.field);
    return e._x = this._x, e._y = this._y, e._count = this._count, e;
  }
}, nr = class Gt extends G {
  constructor() {
    super(...arguments), this._frequencies = /* @__PURE__ */ new Map();
  }
  get value() {
    let e, t = 0;
    for (const [s, r] of this._frequencies.entries()) r > t && (t = r, e = s);
    return e;
  }
  _insertValue(e) {
    const t = this._frequencies.get(e);
    t != null ? this._frequencies.set(e, t + 1) : this._frequencies.set(e, 1);
  }
  merge(e) {
    for (const [t, s] of e._frequencies.entries()) {
      const r = this._frequencies.get(t);
      r != null ? this._frequencies.set(t, r + s) : this._frequencies.set(t, s);
    }
  }
  clone() {
    const e = new Gt(this.field);
    return e._frequencies = new Map(this._frequencies), e;
  }
}, me = class K {
  static createId(e, t) {
    return `${e}.${t}`;
  }
  static create(e, t, s, r) {
    return new K(e, t, Pt.create(s), r);
  }
  constructor(e, t, s, r) {
    this.gridX = e, this.gridY = t, this._statistics = s, this._worldUnitsPerCell = r, this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._objectIds = /* @__PURE__ */ new Set();
  }
  get id() {
    return K.createId(this.gridX, this.gridY);
  }
  get count() {
    return this._count;
  }
  get statistics() {
    return this._statistics;
  }
  get objectIds() {
    return this._objectIds;
  }
  get firstObjectId() {
    return this._objectIds.values().next().value;
  }
  get centroidXWorld() {
    return this._xWorldTotal / this._count;
  }
  get centroidYWorld() {
    return this._yWorldTotal / this._count;
  }
  clone() {
    const e = new K(this.gridX, this.gridY, this._statistics.clone(), this._worldUnitsPerCell);
    return e._count = this._count, e._xWorldTotal = this._xWorldTotal, e._yWorldTotal = this._yWorldTotal, e._firstFeatureAttributes = this._firstFeatureAttributes, e._objectIds = new Set(this._objectIds), e;
  }
  insert(e, t, s, r) {
    this._count === 0 ? this._firstFeatureAttributes = e.readAttributes() : this._firstFeatureAttributes = null, this._count += 1, this._xWorldTotal += s, this._yWorldTotal += r, this._statistics.insert(e, t), this._objectIds.add(e.getObjectId());
  }
  merge(e) {
    if (e._count !== 0) {
      this._count += e._count, this._firstFeatureAttributes = e._firstFeatureAttributes, this._xWorldTotal += e._xWorldTotal, this._yWorldTotal += e._yWorldTotal, this._statistics.merge(e._statistics);
      for (const t of e._objectIds.values()) this._objectIds.add(t);
    }
  }
  getCentroidX(e) {
    return e == null ? this.centroidXWorld : ts(e, this.centroidXWorld);
  }
  getCentroidY(e) {
    return e == null ? this.centroidYWorld : ss(e, this.centroidYWorld);
  }
  getCentroid(e) {
    const t = new C([], [this.centroidXWorld, this.centroidYWorld]);
    if (e != null) {
      const s = new C();
      return V(s, t, !1, !1, "esriGeometryPoint", e);
    }
    return t;
  }
  getGeometricCentroid(e) {
    const t = this.gridX * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, s = this.gridY * this._worldUnitsPerCell + 0.5 * this._worldUnitsPerCell, r = new C([], [t, s]);
    if (e != null) {
      const i = new C();
      return V(i, r, !1, !1, "esriGeometryPoint", e);
    }
    return r;
  }
  getAttributes() {
    const e = { aggregateId: this.id };
    for (const t of this._statistics.values()) e[t.field.name] = t.value;
    return this._firstFeatureAttributes != null ? { ...e, ...this._firstFeatureAttributes } : e;
  }
};
const ar = 96;
function be(u, e) {
  return rs(u) * is * ar / e;
}
let or = class {
  constructor(e) {
    this._options = e, this._cells = /* @__PURE__ */ new Map(), this._pixelsPerMapUnit = be(e.spatialReference, e.scale);
  }
  insert(e, t) {
    const s = e.getCursor(), r = { $view: { scale: this._options.scale, timeZone: this._options.timeZone } };
    for (; s.next(); ) this._insertFeature(s, r, t);
  }
  putCellsInBounds(e, t) {
    const [s, r, i, n] = t, a = Math.floor(s * this._pixelsPerMapUnit / this._options.cellSize), o = Math.floor(r * this._pixelsPerMapUnit / this._options.cellSize), h = Math.ceil(i * this._pixelsPerMapUnit / this._options.cellSize), c = Math.ceil(n * this._pixelsPerMapUnit / this._options.cellSize);
    for (let d = o; d <= c; d++) for (let l = a; l <= h; l++) {
      const g = `${l}.${d}`, _ = this._cells.get(g);
      if (!_) continue;
      const m = e.get(_.id);
      m ? _ && !e.has(_.id) && m.merge(_) : e.set(_.id, _.clone());
    }
  }
  putCells(e) {
    for (const t of this._cells.values()) {
      const s = e.get(t.id);
      s ? s.merge(t) : e.set(t.id, t.clone());
    }
  }
  _insertFeature(e, t, s) {
    const { featureFilter: r } = this._options;
    if (r !== null && !r.check(e)) return;
    let i = 0, n = 0;
    if (e.geometryType === "esriGeometryPoint") i = e.readXWorldSpace(), n = e.readYWorldSpace();
    else {
      if (s) {
        const l = e.readCentroidForDisplay();
        if (l == null) return;
        const [g, _] = l.coords;
        if (g < 0 || g > x || _ < 0 || _ > x) return;
      }
      const d = e.readCentroidWorldSpace();
      if (d == null) return;
      i = d.coords[0], n = d.coords[1];
    }
    const a = i * this._pixelsPerMapUnit, o = n * this._pixelsPerMapUnit, h = Math.floor(a / this._options.cellSize), c = Math.floor(o / this._options.cellSize);
    this._getCellOrCreate(h, c).insert(e, t, i, n);
  }
  _getCellOrCreate(e, t) {
    const s = me.createId(e, t);
    let r = this._cells.get(s);
    if (!r) {
      const i = 1 * this._options.cellSize / this._pixelsPerMapUnit;
      r = me.create(e, t, this._options.fields, i), this._cells.set(s, r);
    }
    return r;
  }
}, hr = class {
  constructor(e, t) {
    this.inner = e, this.displayId = t;
  }
};
const H = 128;
let ur = class extends Ee {
  constructor(e) {
    super(e), this.didSend = !1, this.done = !1;
  }
}, dr = class {
  constructor(e, t, s, r, i) {
    this._level = e, this._scale = t, this._indexOptions = s, this._clusterRadius = r, this._store = i, this._cells = /* @__PURE__ */ new Map(), this._handledChunks = /* @__PURE__ */ new Set(), this._statistics = /* @__PURE__ */ new Map(), this._clusters = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._clearClusters();
  }
  _clearClusters() {
    for (const e of this._clusters.values()) this._store.releaseDisplayIdForObjectId(e.inner.id);
    this._clusters.clear();
  }
  *aggregatesWorldSpace() {
    for (const e of this._clusters.values()) {
      const t = e.inner.getCentroid(null), s = new N(t, e.inner.getAttributes(), null);
      s.objectId = e.inner.id, s.displayId = e.displayId, yield s;
    }
  }
  clusters() {
    return this._clusters.values();
  }
  updateChunks(e, t) {
    let s = !1;
    for (const a of e) {
      const o = a.queryInfo;
      "tileId" in o && new we(o.tileId).level !== this._level || this._handledChunks.has(a.normalizedChunkId) || (this._handledChunks.add(a.normalizedChunkId), s = !0, a.getGridIndex({ ...this._indexOptions, scale: this._scale }).putCells(this._cells));
    }
    const r = { xMin: 1 / 0, yMin: 1 / 0, xMax: -1 / 0, yMax: -1 / 0 }, i = be(this._indexOptions.spatialReference, this._scale), n = this._indexOptions.cellSize;
    for (const { subscription: a } of t) {
      const o = a.tile.bounds, h = Math.floor(o[0] * i / n), c = Math.floor(o[1] * i / n), d = Math.ceil(o[2] * i / n), l = Math.ceil(o[3] * i / n);
      r.xMin = Math.min(r.xMin, h), r.yMin = Math.min(r.yMin, c), r.xMax = Math.max(r.xMax, d), r.yMax = Math.max(r.yMax, l);
    }
    return this._lastCellBounds != null && r.xMin === this._lastCellBounds.xMin && r.yMin === this._lastCellBounds.yMin && r.yMin === this._lastCellBounds.yMin && r.yMax === this._lastCellBounds.yMax || (s = !0, this._lastCellBounds = r), s && this._clusterCells(r), s;
  }
  async updateStatistics(e) {
    let t = !1;
    for (const s of this._clusters.values()) s.inner.count > 1 && (t = this._updateAggregateStatistics(this._statistics, s.inner) || t);
    if (t) {
      const s = Array.from(this._statistics.entries()).map(([r, i]) => ({ fieldName: r, minValue: i.minValue, maxValue: i.maxValue }));
      await e.container.updateStatistics(this._level, s);
    }
  }
  createAggregateFeatures(e, t) {
    const s = e.subscription, r = [], i = s.tile.transform;
    for (const n of this._clusters.values()) {
      let a = n.inner.getCentroidX(i);
      const o = n.inner.getCentroidY(i), h = s.tile.lod, c = h.wrap ? h.worldSize[0] : null, d = n.inner.count === 1 ? n.inner.firstObjectId : n.inner.id, l = n.displayId;
      if (c != null) if (c === 1) {
        const g = new C([], [a, o]), _ = new N(g, n.inner.getAttributes(), null);
        _.geometry.coords[0] -= x, _.objectId = d, _.displayId = l, r.push(_);
        const m = new C([], [a, o]), p = new N(m, n.inner.getAttributes(), null);
        p.geometry.coords[0] += x, p.objectId = d, p.displayId = l, r.push(p);
      } else a > x + x / 2 ? a -= c * x : a < -x / 2 && (a += c * x);
      if (a < x + H && a >= -H && o < x + H && o >= -H) {
        const g = new C([], [a, o]), _ = new N(g, n.inner.getAttributes(), null);
        _.objectId = d, _.displayId = l, r.push(_);
      }
    }
    return M.fromOptimizedFeatures(r, t, s.tile.transform);
  }
  _clusterCells(e) {
    let t = Array.from(this._cells.values());
    t = t.sort((a, o) => o.count - a.count);
    const s = [];
    for (const a of this._clusters.values()) s.push(a.inner.id);
    this._clusters.clear();
    const r = this._clusterRadius * (1 / be(this._indexOptions.spatialReference, this._scale)), i = 1 + this._clusterRadius / this._indexOptions.cellSize, n = /* @__PURE__ */ new Set();
    for (const a of t) {
      if (n.has(a.id) || a.gridX < e.xMin || a.gridX > e.xMax || a.gridY < e.yMin || a.gridY > e.yMax) continue;
      const o = this._store.createDisplayIdForObjectId(a.id), h = new hr(a.clone(), o);
      n.add(a.id), this._clusters.set(a.id, h);
      const c = a.centroidXWorld, d = a.centroidYWorld;
      for (let l = a.gridY - i; l <= a.gridY + i; l++) for (let g = a.gridX - i; g <= a.gridX + i; g++) {
        if (l === a.gridY && g === a.gridX) continue;
        const _ = this._cells.get(me.createId(g, l));
        if (!_ || n.has(_.id)) continue;
        const m = Math.abs(_.centroidXWorld - c), p = Math.abs(_.centroidYWorld - d);
        m < r && p < r && (h.inner.merge(_), n.add(_.id));
      }
    }
    for (const a of s) this._store.releaseDisplayIdForObjectId(a);
  }
  _updateAggregateStatistics(e, t) {
    let s = !1;
    for (const r of t.statistics.values()) {
      if (r.field.type === "esriFieldTypeString") continue;
      const i = r.value, n = r.field, a = e.get(n.name);
      if (a) {
        const { minValue: o, maxValue: h } = a, c = Math.min(a.minValue, i), d = Math.max(a.maxValue, i);
        o === c && h === d || (a.minValue = c, a.maxValue = d, s = !0);
      } else e.set(n.name, { minValue: i, maxValue: i }), s = !0;
    }
    return s;
  }
};
class je extends Rt {
  static async create(e, t, s, r, i, n) {
    const a = new Me({ spatialReference: s }), o = { fields: await Promise.all(t.fields.map(async (h) => qt.create(a, h))), spatialReference: s, featureFilter: t.featureFilter ? await St.create({ geometryType: r.metadata.geometryType, hasM: !1, hasZ: !1, timeInfo: r.metadata.timeInfo, fieldsIndex: r.metadata.fieldsIndex, spatialReference: s, filterJSON: t.featureFilter }) : null, cellSize: t.clusterRadius / 4, timeZone: n };
    return new je(e, t.clusterRadius, o, t.fields, r, i);
  }
  constructor(e, t, s, r, i, n) {
    super(i, n, s.spatialReference, s.fields), this._connection = e, this._clusterRadius = t, this._indexOptions = s, this._cellsPerScale = /* @__PURE__ */ new Map(), this._metadata = new $e({ geometryType: "esriGeometryPoint", objectIdField: "aggregateId", fields: [...r, ...this._source.metadata.fieldsIndex.fields, { name: "aggregateId", alias: "aggregateId", type: "esriFieldTypeOID" }], globalIdField: null, spatialReference: i.metadata.spatialReference, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null });
  }
  get enablePixelBuffering() {
    return !1;
  }
  invalidate() {
    super.invalidate();
    for (const e of this._cellsPerScale.values()) e.destroy();
    this._cellsPerScale.clear();
  }
  onSubscribe(e) {
    super.onSubscribe(e), this._requiredLevel = e.tile.level, this._requiredScale = e.tile.scale;
  }
  createState(e) {
    return new ur(e);
  }
  async *applyOverride(e) {
    for (const t of this._cellsPerScale.values()) t.destroy();
    this._cellsPerScale.clear();
    for (const t of this._sendStates.values()) t.done = !1;
  }
  displayMap(e, t, s) {
    const r = new Map(e.map((a) => [t(a), a])), i = [], n = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const a of n.clusters()) {
      const o = r.get(a.inner.id);
      if (o == null) {
        if (a.inner.count === 1) {
          const h = r.get(a.inner.firstObjectId);
          if (h != null) {
            const c = s(a.displayId, h, a.inner.firstObjectId);
            i.push(c), r.delete(a.inner.firstObjectId);
          }
        }
      } else {
        const h = s(a.displayId, o, a.inner.id);
        i.push(h), r.delete(a.inner.id);
      }
    }
    return i;
  }
  getDisplayFeatures(e) {
    const t = new Set(e), s = /* @__PURE__ */ new Set(), r = [], i = [], n = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const a of n.aggregatesWorldSpace()) if (t.has(a.displayId) && !s.has(a.displayId)) {
      const o = ct(a, this._metadata.geometryType, !1, !1);
      if (s.add(a.displayId), o.attributes.cluster_count === 1) {
        r.push({ ...o, displayId: a.displayId });
        continue;
      }
      i.push({ ...o, displayId: a.displayId });
    }
    return { features: r, aggregates: i };
  }
  getFeatureObjectIdsForAggregate(e) {
    const t = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const s of t.clusters()) if (s.inner.id === e) return Array.from(s.inner.objectIds);
    return [];
  }
  async *updateChunks() {
    const e = this._source.chunks();
    if (!e.length) return;
    const t = this._getClusterState(this._requiredLevel, this._requiredScale), s = Array.from(this._sendStates.values()).filter((n) => n.subscription.tile.level === this._requiredLevel);
    if (t.updateChunks(e, s) || !this._source.updateTracking.updating) for (const n of s) n.subscription.tile.level === this._requiredLevel && (n.didSend = !1, n.done = !1);
    const r = Array.from(this._sendStates.values()).filter((n) => n.done).map((n) => n.subscription.tile.key), i = new Set(r);
    for (const n of this._sendStates.values())
      this._source.updateTracking.updating && (r.some((a) => a.containsChild(n.subscription.tile.key)) || n.subscription.tile.key.getChildKeys().every((a) => i.has(a))) || n.didSend || n.subscription.tile.level !== this._requiredLevel || (n.didSend = !0, yield* this._update(n, t, this._source));
    await t.updateStatistics(this._connection);
  }
  forEachAggregateWorldSpace(e) {
    if (this._requiredLevel == null || this._requiredScale == null) return;
    const t = this._getClusterState(this._requiredLevel, this._requiredScale);
    for (const s of t.aggregatesWorldSpace()) e(s);
  }
  _getClusterState(e, t) {
    if (e == null || t == null) throw new Error("InternalError: Level and scale must be defined");
    let s = this._cellsPerScale.get(t);
    return s || (s = new dr(e, t, this._indexOptions, this._clusterRadius, this._attributeStore), this._cellsPerScale.set(t, s)), s;
  }
  async *_update(e, t, s) {
    if (e.done) return;
    const r = t.createAggregateFeatures(e, this._metadata);
    this.events.emit("changed"), e.done = !s.updateTracking.updating;
    const i = r.getCursor(), n = e.subscription.tile.createArcadeEvaluationOptions(this._indexOptions.timeZone);
    for (; i.next(); ) this._attributeStore.setAttributeData(i.getDisplayId(), i, n);
    yield new Pe(e.subscription, r, !0, e.done, {});
  }
}
let cr = class Wt {
  static fromReader(e) {
    const t = [], s = e.copy(), r = ke();
    for (; s.next(); )
      s.getBounds(r) && t.push(s.getIndex());
    const i = ns(9, (n) => (s.setIndex(n), { minX: s.getBoundsXMin(), minY: s.getBoundsYMin(), maxX: s.getBoundsXMax(), maxY: s.getBoundsYMax() }));
    return i.load(t), new Wt(i);
  }
  constructor(e) {
    this._index = e;
  }
  search(e) {
    const t = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
    return this._index.search(t);
  }
}, Je = class Ie {
  static create(e, t, s, r) {
    const i = Pt.create(e), n = new Array(32);
    for (let a = 0; a < n.length; a++) n[a] = null;
    return new Ie(i, t, s, r, n);
  }
  constructor(e, t, s, r, i) {
    this._statistics = e, this.xNode = t, this.yNode = s, this.depth = r, this.children = i, this._objectIds = /* @__PURE__ */ new Set(), this._count = 0, this._xWorldTotal = 0, this._yWorldTotal = 0, this._xGeohashTotal = 0, this._yGeohashTotal = 0, this.next = null;
  }
  get id() {
    return `${this.xNode}.${this.yNode}`;
  }
  get objectIds() {
    return this._objectIds;
  }
  clone() {
    const e = new Ie(this._statistics.clone(), this.xNode, this.yNode, this.depth, this.children);
    return e._count = this._count, e._xWorldTotal = this._xWorldTotal, e._yWorldTotal = this._yWorldTotal, e._xGeohashTotal = this._xGeohashTotal, e._yGeohashTotal = this._yGeohashTotal, e.next = this.next, e.cachedFeature = this.cachedFeature, e._objectIds = new Set(this._objectIds), e;
  }
  insert(e, t, s, r, i, n) {
    this._count += 1, this._xWorldTotal += t, this._yWorldTotal += s, this._xGeohashTotal += r, this._yGeohashTotal += i, this._statistics.insert(e, n), this._objectIds.add(e.getObjectId());
  }
  merge(e) {
    if (e._count !== 0) {
      this._count += e._count, this._xWorldTotal += e._xWorldTotal, this._yWorldTotal += e._yWorldTotal, this._xGeohashTotal += e._xWorldTotal, this._yGeohashTotal += e._yWorldTotal, this._statistics.merge(e._statistics);
      for (const t of e._objectIds.values()) this._objectIds.add(t);
    }
  }
  getGeometry(e, t) {
    const s = this._getLngLatBounds(), [r, i, n, a] = s, o = Ne({ rings: [[[r, i], [r, a], [n, a], [n, i], [r, i]]] }, B.WGS84, e), h = as(new C(), o, !1, !1);
    return t != null ? V(new C(), h, !1, !1, "esriGeometryPolygon", t, !1, !1) : h;
  }
  getGeometryCentroid(e, t) {
    const s = this._getLngLatBounds(), [r, i, n, a] = s, o = Ne({ x: (r + n) / 2, y: (i + a) / 2 }, B.WGS84, e), h = os(new C(), o);
    return t != null ? V(new C(), h, !1, !1, "esriGeometryPoint", t, !1, !1) : h;
  }
  getAttributes() {
    const e = { aggregateId: this.id };
    for (const t of this._statistics.values()) e[t.field.name] = t.value;
    return e.aggregateCount = this._count, e;
  }
  _getLngLatBounds() {
    const e = this.depth, t = Math.ceil(e / 2), s = Math.floor(e / 2), r = 30 - (3 * t + 2 * s), i = 30 - (2 * t + 3 * s), n = this.xNode << r, a = this.yNode << i;
    return Rs({ geohashX: n, geohashY: a }, this.depth);
  }
}, lr = class {
  constructor(e) {
    this._fields = e, this._root = Je.create(this._fields, 0, 0, 0);
  }
  destroy() {
  }
  insert(e, t, s, r, i, n, a) {
    let o = this._root, h = 0, c = 0, d = 0;
    for (; o !== null; ) {
      if (o.insert(e, t, s, r, i, a), h >= n) return;
      const l = Math.ceil((h + 1) / 2), g = Math.floor((h + 1) / 2), _ = 1 - h % 2, m = 30 - (3 * l + 2 * g), p = 30 - (2 * l + 3 * g), I = (r & 7 * _ + 3 * (1 - _) << m) >> m, f = (i & 3 * _ + 7 * (1 - _) << p) >> p, k = I + f * (8 * _ + 4 * (1 - _));
      c = c << 3 * _ + 2 * (1 - _) | I, d = d << 2 * _ + 3 * (1 - _) | f, o.children[k] == null && (o.children[k] = Je.create(this._fields, c, d, h + 1)), h += 1, o = o.children[k];
    }
  }
  putBins(e, t) {
    for (const s of this.getNodes(t)) {
      const r = e.get(s.id);
      r ? r.merge(s) : e.set(s.id, s.clone());
    }
  }
  getNodes(e) {
    const t = [], { geohashBounds: s, level: r } = e;
    let i = this._root;
    for (; i !== null; ) {
      const n = i.depth, a = i.xNode, o = i.yNode;
      if (n >= r) {
        t.push(i), i = i.next;
        continue;
      }
      const h = Math.ceil((n + 1) / 2), c = Math.floor((n + 1) / 2), d = 1 - n % 2, l = 30 - (3 * h + 2 * c), g = 30 - (2 * h + 3 * c), _ = ~((1 << l) - 1), m = ~((1 << g) - 1), p = (s.xLL & _) >> l, I = (s.yLL & m) >> g, f = (s.xTR & _) >> l, k = (s.yTR & m) >> g, b = a << 3 * d + 2 * (1 - d), v = o << 2 * d + 3 * (1 - d), S = b + 8 * d + 4 * (1 - d), w = v + 4 * d + 8 * (1 - d), F = Math.max(b, p), q = Math.max(v, I), $ = Math.min(S, f), T = Math.min(w, k);
      let O = null, R = null;
      for (let E = q; E <= T; E++) for (let oe = F; oe <= $; oe++) {
        const Zt = oe - b + (E - v) * (8 * d + 4 * (1 - d)), W = i.children[Zt];
        W && (O || (O = W, O.next = i.next), R && (R.next = W), R = W, W.next = i.next);
      }
      i = O || i.next;
    }
    return t;
  }
}, _r = class {
  constructor(e) {
    this._options = e, this._tree = new lr(e.fields);
  }
  insert(e, t) {
    const s = e.getCursor(), r = { $view: { scale: 0, timeZone: this._options.timeZone } };
    for (; s.next(); ) this._insertFeature(s, r, t);
  }
  putBins(e, t) {
    this._tree.putBins(e, t);
  }
  _insertFeature(e, t, s) {
    const { featureFilter: r, geohashLevel: i, spatialReference: n } = this._options;
    if (r !== null && !r.check(e)) return;
    let a = 0, o = 0;
    if (e.geometryType === "esriGeometryPoint") a = e.readXWorldSpace(), o = e.readYWorldSpace();
    else {
      if (s) {
        const d = e.readCentroidForDisplay();
        if (d == null) return;
        const [l, g] = d.coords;
        if (l < 0 || l > x || g < 0 || g > x) return;
      }
      const c = e.readCentroidWorldSpace();
      if (c == null) return;
      a = c.coords[0], o = c.coords[1];
    }
    const h = Es(a, o, i, n);
    h && this._tree.insert(e, a, o, h[0], h[1], i, t);
  }
}, pr = class ve extends Ce {
  static from(e, t) {
    return new ve(e.copy(), t);
  }
  constructor(e, t) {
    super(e.metadata), this._currentIndex = -1, this._displayTranslationX = 0, this._displayTranslationY = 0, this._displayScaleX = 1, this._displayScaleY = 1, this._reader = e, this._indices = t, this._isPoint = e.geometryType === "esriGeometryPoint";
  }
  setTransformForDisplay(e) {
    const t = this._reader.getInTransform();
    if (t == null) {
      const [d, l] = e.scale, [g, _] = e.translate;
      return this._displayTranslationX = -g / d, this._displayScaleX = 1 / d, this._displayTranslationY = _ / l, this._displayScaleY = 1 / -l, void (this._displayTransform = e);
    }
    const [s, r] = t.scale, [i, n] = t.translate, [a, o] = e.scale, [h, c] = e.translate;
    if (this._displayScaleX = s / a, this._displayTranslationX = (i - h) / a, this._displayScaleY = r / o, this._displayTranslationY = (-n + c) / o, !this._isPoint && t) throw new Error("InternalError: Relative transformations not supported for non-point features");
    this._displayTransform = e;
  }
  getInTransform() {
    return this._reader.getInTransform();
  }
  get fields() {
    return this._reader.fields;
  }
  get hasNext() {
    return this._currentIndex + 1 < this._indices.length;
  }
  getSize() {
    return this._indices.length;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e = new ve(this._reader.copy(), this._indices);
    return e._currentIndex = this._currentIndex, e._displayTransform = this._displayTransform, e._displayTranslationX = this._displayTranslationX, e._displayTranslationY = this._displayTranslationY, e._displayScaleX = this._displayScaleX, e._displayScaleY = this._displayScaleY, e;
  }
  get contextTimeZone() {
    return this._reader.contextTimeZone;
  }
  set contextTimeZone(e) {
    this._reader.contextTimeZone = e;
  }
  _nextIndex() {
    return ++this._currentIndex < this._indices.length && (this._reader.setIndex(this._indices[this._currentIndex]), !0);
  }
  next() {
    for (; this._nextIndex() && !this._reader._getExists(); ) ;
    return this._currentIndex < this._indices.length;
  }
  readXForDisplay() {
    return this._reader.readXForDisplay() * this._displayScaleX + this._displayTranslationX;
  }
  readYForDisplay() {
    return this._reader.readYForDisplay() * this._displayScaleY + this._displayTranslationY;
  }
  readGeometryForDisplay() {
    const e = this._reader.readGeometryForDisplay();
    if (!this._displayTransform) return e;
    const t = new C();
    return V(t, e, this.hasZ, this.hasM, this.geometryType, this._displayTransform), t.deltaDecode();
  }
  readCentroidForDisplay() {
    const e = this._reader.readCentroidForDisplay()?.clone();
    if (e) {
      const [t, s] = e.coords;
      e.coords[0] = t * this._displayScaleX + this._displayTranslationX, e.coords[1] = s * this._displayScaleY + this._displayTranslationY;
    }
    return e;
  }
  get geometryType() {
    return this._reader.geometryType;
  }
  get hasFeatures() {
    return this._reader.hasFeatures;
  }
  get exceededTransferLimit() {
    return this._reader.exceededTransferLimit;
  }
  get hasZ() {
    return this._reader.hasZ;
  }
  get hasM() {
    return this._reader.hasM;
  }
  readAttribute(e, t = !1) {
    return this._reader.readAttribute(e, t);
  }
  readAttributes() {
    return this._reader.readAttributes();
  }
  joinAttributes(e) {
    return this._reader.joinAttributes(e);
  }
  getBounds(e) {
    return this._reader.getBounds(e);
  }
  getAttributeHash() {
    return this._reader.getAttributeHash();
  }
  getObjectId() {
    return this._reader.getObjectId();
  }
  getDisplayId() {
    return this._reader.getDisplayId();
  }
  setDisplayId(e) {
    return this._reader.setDisplayId(e);
  }
  setIndex(e) {
    return this._reader.setIndex(e);
  }
  getIndex() {
    return this._reader.getIndex();
  }
  readXWorldSpace() {
    return this._reader.readXWorldSpace();
  }
  readYWorldSpace() {
    return this._reader.readYWorldSpace();
  }
  _readX() {
    return this._reader.readXForDisplay();
  }
  _readY() {
    return this._reader.readYForDisplay();
  }
  _readServerCentroid() {
    return this._reader._readServerCentroid();
  }
  readLegacyFeatureForDisplay() {
    const e = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e && { x: e.coords[0], y: e.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e = this.readGeometryForDisplay();
    return hs(e, this.geometryType, !1, !1);
  }
  readGeometryArea() {
    return this._reader.readGeometryArea();
  }
  readGeometryWorldSpace() {
    return this._reader.readGeometryWorldSpace();
  }
  _readGeometry() {
    return this._reader._readGeometry();
  }
  _readAttribute(e, t) {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  _readAttributes() {
    throw new Error("Error: Should not be called. Underlying _reader should be used instead");
  }
  readArcadeFeature() {
    return this._reader.readArcadeFeature();
  }
  geometry() {
    return this._reader.geometry();
  }
  field(e) {
    return this.readAttribute(e, !0);
  }
  hasField(e) {
    return this._reader.hasField(e);
  }
  setField(e, t) {
    return this._reader.setField(e, t);
  }
  keys() {
    return this._reader.keys();
  }
  castToText(e = !1) {
    return this._reader.castToText(e);
  }
}, Q = class {
  size() {
    return this.reader.getSize();
  }
  get fields() {
    return this.reader.fields;
  }
  invalidate() {
    this._geohashIndex = null, this._geohashIndexHash = null, this._spatialIndex = null, this._gridIndex = null, this._gridIndexHash = null;
  }
  queryFeaturesInBounds(e) {
    const t = this._getSpatialIndex().search(e);
    return pr.from(this.reader, t);
  }
  getGeohashIndex(e) {
    const t = JSON.stringify(e);
    return t !== this._geohashIndexHash && (this._geohashIndexHash = t, this._geohashIndex = new _r(e), this._geohashIndex.insert(this.reader, this.isTiled)), this._geohashIndex;
  }
  getGridIndex(e) {
    const t = JSON.stringify(e);
    return t !== this._gridIndexHash && (this._gridIndexHash = t, this._gridIndex = new or(e), this._gridIndex.insert(this.reader, this.isTiled)), this._gridIndex;
  }
  _getSpatialIndex() {
    return this._spatialIndex || (this._spatialIndex = cr.fromReader(this.reader)), this._spatialIndex;
  }
}, Nt = class extends Q {
  constructor(e) {
    super(), this.metadata = e, this.chunkId = "override", this.normalizedChunkId = "override", this.removed = /* @__PURE__ */ new Set(), this.overridenIds = /* @__PURE__ */ new Set(), this._features = [];
  }
  get reader() {
    return M.fromOptimizedFeatures(this._features, this.metadata);
  }
  get queryInfo() {
    return {};
  }
  get first() {
    return !1;
  }
  get end() {
    return !1;
  }
  get isTiled() {
    return !1;
  }
  applyOverrides(e) {
    super.invalidate();
    const { reader: t, removed: s } = e, r = [], i = /* @__PURE__ */ new Set(), n = t.getCursor(), a = new Set(s);
    for (this.overridenIds.clear(); n.next(); ) {
      const o = n.readOptimizedFeatureWorldSpace(), h = o.objectId;
      r.push(o), i.add(h), this.overridenIds.add(h), this.removed.delete(h);
    }
    for (const o of this._features) {
      const h = o.objectId;
      a.has(h) || i.has(h) || (r.push(o), this.overridenIds.add(h));
    }
    this._features = r;
    for (const o of i.values()) this.removed.delete(o);
    for (const o of s) this.removed.add(o), this.overridenIds.add(o);
  }
  getTileReader(e) {
    if (!this._features.length) return null;
    const t = this.queryFeaturesInBounds(e.bounds);
    return t.setTransformForDisplay(e.transform), t;
  }
}, gr = class extends Ee {
}, fr = class extends At {
  constructor(e, t, s) {
    super(e, t), this._timeZone = s, this.handledChunks = /* @__PURE__ */ new Set(), this.handledChunksForIdCreation = /* @__PURE__ */ new Set(), this.handledChunksForAttributeData = /* @__PURE__ */ new Set(), this._streamLayerDeferredObjectIdsToRemove = [];
  }
  destroy() {
    super.destroy();
    for (const e of this._source.chunks()) this._cleanupChunkIds(e);
  }
  invalidateAttributeData() {
    this.handledChunksForAttributeData.clear();
  }
  onSubscribe(e) {
    super.onSubscribe(e), this._evalOptions = e.tile.createArcadeEvaluationOptions(this._timeZone);
  }
  createState(e) {
    return new gr(e);
  }
  get aggregateQueryEngine() {
    return null;
  }
  displayMap(e, t, s) {
    const r = new Map(e.map((n) => [t(n), n])), i = [];
    for (const n of this._source.chunks()) {
      const a = n.reader.getCursor();
      for (; a.next(); ) {
        const o = a.getObjectId(), h = a.getDisplayId(), c = r.get(o);
        if (c != null) {
          const d = s(h, c, o);
          i.push(d), r.delete(o);
        }
      }
    }
    return i;
  }
  getDisplayFeatures(e) {
    const t = new Set(e), s = /* @__PURE__ */ new Set(), r = [];
    for (const i of this._source.chunks()) {
      const n = i.reader.getCursor();
      for (; n.next(); ) {
        const a = n.getObjectId(), o = n.getDisplayId();
        t.has(o) && !s.has(a) && (r.push({ ...n.readLegacyFeatureWorldSpace(), displayId: o }), s.add(a));
      }
    }
    return { features: r, aggregates: [] };
  }
  async *applyOverride(e) {
    const t = [], s = e.reader.getCursor();
    for (; s.next(); ) {
      const a = s.getObjectId();
      t.push(a);
      const o = this._attributeStore.createDisplayIdForObjectId(a);
      s.setDisplayId(o), this._attributeStore.setAttributeData(o, s, this._evalOptions);
    }
    const r = this.getDisplayIds(t), i = this.getDisplayIds(e.removed), n = new Nt(this._source.metadata);
    n.applyOverrides(e), this.handledChunks.add(n.chunkId), this.handledChunksForAttributeData.add(n.chunkId), this.handledChunksForIdCreation.add(n.chunkId);
    for (const a of this._sendStates.values()) a.handledChunks.add(n.chunkId), yield new fe(a.subscription, null, r, !1, n.queryInfo);
    for (const a of this._sendStates.values()) {
      const o = n.getTileReader(a.subscription.tile);
      yield new fe(a.subscription, o, i, !1, n.queryInfo);
    }
    for (const a of e.removed) this._attributeStore.releaseDisplayIdForObjectId(a);
  }
  async *updateChunks() {
    if (this._source.chunks().length) {
      await this._updateAttributeData();
      for (const e of this._sendStates.values()) yield* this._update(e);
    }
  }
  removeChunks(e) {
    for (const t of e) this.handledChunks.delete(t.chunkId), this.handledChunksForAttributeData.delete(t.chunkId), this._cleanupChunkIds(t);
  }
  afterUpdateChunks() {
    for (const e of this._streamLayerDeferredObjectIdsToRemove) this._attributeStore.releaseDisplayIdForObjectId(e);
    this._streamLayerDeferredObjectIdsToRemove = [];
  }
  _cleanupChunkIds(e) {
    if (this.handledChunksForIdCreation.has(e.chunkId)) {
      const t = e.reader.getCursor();
      for (; t.next(); ) {
        const s = t.getObjectId();
        this._source.isStream ? this._streamLayerDeferredObjectIdsToRemove.push(s) : this._attributeStore.releaseDisplayIdForObjectId(s);
      }
      this.handledChunksForIdCreation.delete(e.chunkId);
    }
  }
  async _updateAttributeData() {
    for (const e of this._source.chunks()) {
      const { chunkId: t, reader: s } = e;
      if (!this.handledChunksForIdCreation.has(t)) {
        this.handledChunksForIdCreation.add(t);
        const r = s.getCursor();
        for (; r.next(); ) {
          const i = this._attributeStore.createDisplayIdForObjectId(r.getObjectId());
          r.setDisplayId(i);
        }
      }
    }
    for (const e of this._source.chunks()) if (!this.handledChunksForAttributeData.has(e.chunkId)) {
      this.handledChunksForAttributeData.add(e.chunkId);
      const t = e.reader.getCursor();
      for (; t.next(); ) {
        const s = t.getDisplayId();
        this._attributeStore.setAttributeData(s, t, this._evalOptions);
      }
    }
  }
  *_update(e) {
    const { subscription: t, handledChunks: s } = e;
    for (const r of this._source.chunks()) {
      const { chunkId: i } = r;
      if (s.has(i)) continue;
      s.add(i);
      const n = r.getTileReader(t.tile);
      n && (yield new Pe(e.subscription, n, !1, r.end, r.queryInfo));
    }
  }
}, yr = class {
  constructor(e, t) {
    this._connection = e, this._source = t, this._version = 1, this._proxy = new Cs({ fetch: (s, r) => this._connection.layerView.fetch(s, r), fetchDictionary: (s, r) => this._connection.layerView.fetchDictionary(s, r) }), this._attributeStore = new Ms({ isLocal: !1, update: (s) => lt(this._connection.container.updateAttributeView(s)) });
  }
  destroy() {
    this._proxy.destory(), this._strategy?.destroy(), this._attributeStore.destroy();
  }
  get aggregateQueryEngine() {
    return this._strategy?.aggregateQueryEngine;
  }
  getDisplayFeatures(e) {
    return this._strategy ? this._strategy.getDisplayFeatures(e) : { features: [], aggregates: [] };
  }
  getFeatureObjectIdsForAggregate(e) {
    return this._strategy ? this._strategy.getFeatureObjectIdsForAggregate(e) : [];
  }
  onSubscribe(e) {
    this._strategy?.onSubscribe(e);
  }
  onUnsubscribe(e) {
    this._strategy?.onUnsubscribe(e);
  }
  async update(e, t, s, r, i) {
    const n = e.processor, a = _t(this._schema, n);
    if (!a && !r) return;
    y("esri-2d-update-debug") && console.debug(`Version[${this._version}] SymbolProcessor.update`, { changes: a, schema: n }), this._schema = n;
    const o = B.fromJSON(e.source.mutable.dataFilter.outSpatialReference), h = new Me({ fields: this._source.metadata.fieldsIndex, spatialReference: o });
    return await this._attributeStore.update(n.storage, h, this._source.metadata, o, t), this._strategy?.invalidateAttributeData(), r || he(a, "mesh") ? (he(a, "mesh.strategy") && await this._updateStrategy(n.mesh.strategy, o, i, n.mesh.timeZone), this._updateSortKey(h, "sortKey" in n.mesh ? n.mesh.sortKey : null), (he(a, "mesh.factory") || n.mesh.factory.symbology.type === "dictionary") && (this._factory = await Qs.create(h, this._proxy, n.mesh.factory, s)), this._invalidate(), this._version = t, this._connection.container.updateRenderState(this._version)) : void 0;
  }
  async applyOverride(e) {
    if (!this._strategy) return;
    const t = this._strategy.applyOverride(e);
    for await (const s of t) try {
      await this._process(s);
    } catch {
    }
    this._source.applyOverride(e);
  }
  async updateChunks() {
    await this._doUpdateChunks(), this._strategy?.afterUpdateChunks();
  }
  async removeChunks(e) {
    this._strategy?.removeChunks(e), this._attributeStore.incrementDisplayIdGeneration();
  }
  updateHighlight({ highlights: e }) {
    if (!this._strategy) return void this._attributeStore.setHighlight(e.map(({ objectId: s, highlightFlags: r }) => ({ objectId: s, highlightFlags: r, displayId: -1 })), e);
    const t = this._strategy.displayMap(e, ({ objectId: s }) => s, (s, { highlightFlags: r }, i) => ({ objectId: i, displayId: s, highlightFlags: r }));
    this._attributeStore.setHighlight(t, e);
  }
  async _doUpdateChunks() {
    if (!this._strategy) return;
    const e = this._strategy.updateChunks(), t = [], s = /* @__PURE__ */ new Map();
    for await (const r of e) {
      let i = s.get(r.id);
      i == null && (i = new Zs({ concurrency: 16, process: (a) => this._process(a) }), s.set(r.id, i));
      const n = i.push(r).catch((a) => Fe(a));
      t.push(n);
    }
    try {
      await Promise.all(t);
    } catch {
    }
    y("esri-2d-update-debug") && console.log("SendUpdates"), await this._attributeStore.sendUpdates(), y("esri-2d-update-debug") && console.log("SendUpdates.await");
  }
  async _updateStrategy(e, t, s, r) {
    switch (this._strategy?.destroy(), e.type) {
      case "feature":
        this._strategy = new fr(this._source, this._attributeStore, r);
        break;
      case "binning":
        this._strategy = await Js.create(e, t, this._source, this._attributeStore, r);
        break;
      case "cluster":
        this._strategy = await je.create(this._connection, e, t, this._source, this._attributeStore, r);
    }
    for (const i of s) this._strategy.onSubscribe(i);
  }
  async _updateSortKey(e, t) {
    if (this._sortInfo = pt(this._sortInfo?.computed), t != null) {
      const s = t.byRenderer ? null : await e.createComputedField(t);
      this._sortInfo = { ...t, computed: s };
    }
  }
  _invalidate() {
    this._strategy && this._strategy.invalidate();
  }
  async _process(e) {
    const t = e.subscription;
    if (y("esri-2d-update-debug")) {
      const o = t.tile;
      console.debug(`Version[${this._version}] Tile[${o.key.id}, end=${e.end}] Processor._process`);
    }
    await this._fetchResources(e), Y(t.signal);
    const s = await this._write(e, t.tile.createArcadeEvaluationOptions(this._schema.mesh.timeZone)), r = t.tile.tileInfoView.tileInfo.isWrappable, { message: i, transferList: n } = s.serialize(r), a = e.createMessage(i, this._version, this._attributeStore.epoch);
    if (Y(t.signal), this._connection.container.onMessage(a, { signal: t.signal, transferList: n }), this._attributeStore.sendUpdates(), y("esri-2d-update-debug")) {
      const o = t.tile;
      console.debug(`Version[${this._version}] Tile[${o.key.id}, end=${e.end}] Processor._process.await`);
    }
  }
  async _fetchResources(e) {
    await this._fetchMatcherResources(e), await this._fetchWriterResources(e);
  }
  async _fetchMatcherResources(e) {
    if (e.reader) return this._factory.enqueueMatcherRequests(this._proxy, e.reader);
  }
  async _fetchWriterResources(e) {
    if (!e.reader) return;
    const t = e.reader.getCursor(), s = e.subscription.tile.createArcadeEvaluationOptions(this._schema.mesh.timeZone);
    for (; t.next(); ) this._factory.enqueueWriterRequests(this._proxy, t, s);
    await this._proxy.fetchEnqueuedResources();
  }
  async _write(e, t) {
    const s = e.subscription.tile, r = e.reader?.getCursor(), i = r?.getSize() ?? 0, n = s.tileInfoView.tileInfo.isWrappable, a = new Us(s.key, this._strategy.enablePixelBuffering, n, i);
    if (!r) return a;
    const o = s.createArcadeEvaluationOptions(this._schema.mesh.timeZone);
    for (; r.next(); ) {
      const h = this._getSortKeyValue(r, t);
      a.entityStart(r.getDisplayId(), h), this._factory.write(a, this._proxy, r, o, s.level), a.entityEnd();
    }
    return a;
  }
  _getSortKeyValue(e, t) {
    if (!this._sortInfo) return 0;
    const { computed: s, order: r, byRenderer: i } = this._sortInfo, n = i ? this._factory.getSortKey(e, t) : s?.read(e, t);
    return n == null || isNaN(n) ? 0 : n * (r === "asc" ? -1 : 1);
  }
}, mr = class Bt {
  static from(e) {
    let t = 0, s = 0, r = 0;
    return e.forEach((i) => {
      const n = i._readGeometry();
      n && (s += n.isPoint ? 1 : n.lengths.reduce((a, o) => a + o, 0), r += n.isPoint ? 1 : n.lengths.length, t += 1);
    }), new Bt(t, s, r);
  }
  constructor(e, t, s) {
    this.featureCount = e, this.vertexCount = t, this.ringCount = s;
  }
  toJSON() {
    return { featureCount: this.featureCount, ringCount: this.featureCount, vertexCount: this.featureCount };
  }
};
const ce = 4;
function br(u, e) {
  const { service: t } = u, s = t.orderByFields ?? e.objectIdField + " ASC", r = t.source, i = { returnCentroid: !(r !== null && typeof r == "object" && "path" in r && us(r.path)) && e.geometryType === "esriGeometryPolygon", returnGeometry: !0, timeReferenceUnknownClient: e.timeReferenceUnknownClient ?? void 0, outSpatialReference: B.fromJSON(u.mutable.dataFilter.outSpatialReference), orderByFields: [s], where: u.mutable.dataFilter.definitionExpression ?? "1=1", outFields: u.mutable.availableFields };
  if (u.type === "feature") {
    const { gdbVersion: n, historicMoment: a, timeExtent: o } = u.mutable.dataFilter;
    return { ...i, gdbVersion: n, historicMoment: a ? new Date(a) : null, timeExtent: o ? ds.fromJSON(o) : null, outFields: u.mutable.availableFields };
  }
  return i;
}
let Ir = class Vt {
  static fromSchema(e, t) {
    return new Vt(br(e, t), e.mutable.dataFilter.customParameters, t.geometryType, e.service.queryMetadata.capabilities);
  }
  constructor(e, t, s, r) {
    this._queryParams = e, this._customParameters = t, this._geometryType = s, this._capabilities = r;
  }
  get pageSize() {
    if (this._capabilities == null) throw new Error("InternalError: Service does not support paged queries");
    const { query: e } = this._capabilities, t = e.supportsMaxRecordCountFactor ? ce : null, s = (e.maxRecordCount ?? 8e3) * (t ?? 1);
    return Math.min(8e3, s);
  }
  updateFields(e) {
    this._queryParams.outFields = e;
  }
  createPatchFieldsQuery(e, t) {
    const s = e.clone();
    if (this._queryParams.outFields[0] === "*") {
      if ((s.outFields ?? [])[0] === "*") return null;
      s.outFields = this._queryParams.outFields;
    } else {
      const r = new Set(this._queryParams.outFields), i = [];
      for (const n of r) t.hasField(n) || i.push(n);
      if (i.length === 0) return null;
      s.outFields = i;
    }
    return s.returnGeometry = !1, s.returnCentroid = !1, s.quantizationParameters = null, s.cacheHint = !0, { inner: s, customParameters: this._customParameters };
  }
  createQuery(e = {}) {
    if (!this._queryParams) throw new Error("InternalError: queryInfo should be defined");
    return { inner: new gt({ ...this._queryParams, ...e }), customParameters: this._customParameters };
  }
  createTileQuery(e, t) {
    if (this._capabilities == null) throw new Error("InternalError: Service does not support tile queries");
    const s = this.createQuery(t), r = s.inner;
    return r.quantizationParameters = t.quantizationParameters ?? e.getQuantizationParameters(), r.resultType = "tile", r.geometry = e.extent, this._capabilities.query.supportsQuantization ? this._geometryType === "esriGeometryPolyline" && (r.maxAllowableOffset = e.resolution * y("feature-polyline-generalization-factor")) : this._geometryType !== "esriGeometryPolyline" && this._geometryType !== "esriGeometryPolygon" || (r.maxAllowableOffset = e.resolution, this._geometryType === "esriGeometryPolyline" && (r.maxAllowableOffset *= y("feature-polyline-generalization-factor"))), r.defaultSpatialReferenceEnabled = this._capabilities.query.supportsDefaultSpatialReference, r.compactGeometryEnabled = this._capabilities.query.supportsCompactGeometry, this._capabilities.query.supportsMaxRecordCountFactor && (r.maxRecordCountFactor = ce), s;
  }
  createPagedTileQuery(e, t) {
    const s = this.pageSize;
    return this.createTileQuery(e, { start: s * t, num: s, returnExceededLimitFeatures: !0 });
  }
  createPagedQuery(e) {
    const t = this.pageSize;
    return this.createQuery({ start: t * e, num: t, returnExceededLimitFeatures: !0, maxRecordCountFactor: ce });
  }
};
const vr = 2500;
let ee = class extends yt {
  constructor(e) {
    super(), this._connection = e, this._enabledEventTypes = /* @__PURE__ */ new Set(), this._updateInfo = { websocket: 0, client: 0 }, this._lastTime = performance.now(), this.addHandles([pe(() => this._strategy?.connectionStatus ?? "disconnected", (t) => {
      this._layerView.setProperty({ propertyName: "pipelineConnectionStatus", value: t });
    }, { initial: !0 }), pe(() => this._strategy?.errorString || null, (t) => this._layerView.setProperty({ propertyName: "pipelineErrorString", value: t }), { initial: !0 })]);
  }
  destroy() {
    this._strategy = null, this.removeAllHandles();
  }
  get _layerView() {
    return this._connection.layerView;
  }
  set strategy(e) {
    this._strategy == null && this._resetUpdateInfo(performance.now());
    const t = "event-handles";
    this.removeHandles(t), e != null && this.addHandles([e.events.on("data-received", (s) => this._onFeature(s)), e.events.on("message-received", (s) => this._onWebSocketMessage(s)), e.events.on("features-updated", (s) => this._onUpdate(s)), e.events.on("tick", () => this._onTick())], t), this._strategy = e;
  }
  updateCustomParameters(e) {
    e != null && this._strategy?.updateCustomParameters(e);
  }
  sendMessageToSocket(e) {
    this._strategy?.sendMessageToSocket(e);
  }
  sendMessageToClient(e) {
    this._strategy?.sendMessageToClient(e);
  }
  enableEvent(e, t) {
    t ? this._enabledEventTypes.add(e) : this._enabledEventTypes.delete(e);
  }
  disconnect() {
    this._strategy?.disconnect();
  }
  connect() {
    this._strategy?.connect();
  }
  clear() {
    this._strategy?.clear();
  }
  _onWebSocketMessage(e) {
    this._enabledEventTypes.has("message-received") && this._layerView.emitEvent({ name: "message-received", event: e });
  }
  _onFeature(e) {
    this._updateInfo.websocket++, this._enabledEventTypes.has("data-received") && this._layerView.emitEvent({ name: "data-received", event: { attributes: e.attributes, centroid: e.centroid, geometry: e.geometry } });
  }
  _onUpdate(e) {
    this._updateInfo.client += e;
  }
  _onTick() {
    const e = performance.now(), t = e - this._lastTime;
    if (t > vr) {
      const s = Math.round(this._updateInfo.client / (t / 1e3)), r = Math.round(this._updateInfo.websocket / (t / 1e3));
      this._resetUpdateInfo(e), this._layerView.emitEvent({ name: "update-rate", event: { client: s, websocket: r } });
    }
  }
  _resetUpdateInfo(e) {
    this._lastTime = e, this._updateInfo.client = 0, this._updateInfo.websocket = 0;
  }
};
U([J()], ee.prototype, "_strategy", void 0), ee = U([ft("esri.views.2d.layers.features.sources.StreamMessenger")], ee);
let Yt = class {
  constructor(e) {
    this._store = e, this._controller = new AbortController();
  }
  destroy() {
    this._controller.abort();
  }
  get _options() {
    return { signal: this._controller.signal };
  }
  async queryOverride(e) {
    throw new Error("InternalError: LoadStrategy does not support fetching");
  }
};
const le = 268435455;
let Sr = class {
  constructor() {
    this.hasFeatures = !1, this.exceededTransferLimit = !1, this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.vertexCount = 0, this.offsets = { attributes: new Array(), geometry: new Array() }, this.centroid = new Array();
  }
};
function wr(u, e, t = !1) {
  const h = u.asUnsafe(), c = h.pos(), d = new Sr();
  let l = 0, g = 0;
  const _ = 1, m = 2, p = 4, I = 3;
  let f = null, k = null, b = null, v = !1;
  const S = [];
  for (; h.next(); ) switch (h.tag()) {
    case 1:
      f = h.getString();
      break;
    case 3:
      k = h.getString();
      break;
    case 12:
      b = h.processMessage(ls);
      break;
    case 9:
      if (d.exceededTransferLimit = h.getBool(), d.exceededTransferLimit) {
        d.offsets.geometry = t ? new Float64Array(8e3) : new Int32Array(8e3), d.centroid = t ? new Float64Array(16e3) : new Int32Array(16e3);
        for (let F = 0; F < d.centroid.length; F++) d.centroid[F] = le;
      }
      break;
    case 13: {
      const F = h.processMessage(cs);
      F.index = l++, S.push(F);
      break;
    }
    case 15: {
      const F = h.getLength(), q = h.pos() + F;
      if (!d.exceededTransferLimit) {
        const T = d.offsets.geometry, O = d.centroid;
        T.push(0), O.push(le), O.push(le);
      }
      !v && d.exceededTransferLimit && (v = !0, d.offsets.attributes = t ? new Float64Array(8e3 * l) : new Uint32Array(8e3 * l));
      let $ = g * l;
      for (; h.pos() < q && h.next(); ) switch (h.tag()) {
        case _: {
          v ? d.offsets.attributes[$++] = h.pos() : d.offsets.attributes.push(h.pos());
          const T = h.getLength();
          h.skipLen(T);
          break;
        }
        case m:
          if (e) {
            const T = h.getLength(), O = h.pos() + T;
            for (; h.pos() < O && h.next(); ) switch (h.tag()) {
              case I: {
                h.getUInt32();
                const R = h.getSInt64(), E = h.getSInt64();
                d.centroid[2 * g] = R, d.centroid[2 * g + 1] = E;
                break;
              }
              default:
                h.skip();
            }
          } else {
            d.offsets.geometry[g] = h.pos();
            const T = h.getLength();
            d.vertexCount += T, h.skipLen(T);
          }
          break;
        case p: {
          const T = h.getLength(), O = h.pos() + T;
          for (; h.pos() < O && h.next(); ) switch (h.tag()) {
            case I: {
              h.getUInt32();
              const R = h.getSInt64(), E = h.getSInt64();
              d.centroid[2 * g] = R, d.centroid[2 * g + 1] = E;
              break;
            }
            default:
              h.skip();
          }
          break;
        }
        default:
          h.skip();
      }
      g++, d.hasFeatures = !0;
      break;
    }
    default:
      h.skip();
  }
  const w = f || k;
  if (!w) throw new j("FeatureSet has no objectId or globalId field name");
  return d.fields = new dt(S), d.featureCount = g, d.fieldCount = l, d.objectIdFieldIndex = d.fields.get(w)?.index, d.transform = b, d.displayIds = new Uint32Array(d.featureCount), d.groupIds = new Uint16Array(d.featureCount), h.move(c), d;
}
const xr = !0, Ke = 268435455, et = 128, tt = 128e3, L = { small: { delta: new Int32Array(et), decoded: new Int32Array(et) }, large: { delta: new Int32Array(tt), decoded: new Int32Array(tt) } };
function st(u) {
  return u <= L.small.delta.length ? L.small : (u <= L.large.delta.length || (L.large.delta = new Int32Array(Math.round(1.25 * u)), L.large.decoded = new Int32Array(Math.round(1.25 * u))), L.large);
}
function kr(u) {
  try {
    const t = new ps(new Uint8Array(u), new DataView(u));
    for (; t.next(); ) {
      if (t.tag() === 2) return Fr(t.getMessage());
      t.skip();
    }
  } catch (e) {
    const t = new j("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", { error: e });
    gs.getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF").error(t);
  }
  return null;
}
function Fr(u) {
  for (; u.next(); ) {
    if (u.tag() === 1) return u.getMessage();
    u.skip();
  }
  return null;
}
function Tr(u) {
  const c = u.getLength(), d = u.pos() + c;
  for (; u.pos() < d && u.next(); ) switch (u.tag()) {
    case 1:
      return u.getString();
    case 2:
      return u.getFloat();
    case 3:
      return u.getDouble();
    case 4:
      return u.getSInt32();
    case 5:
      return u.getUInt32();
    case 6:
      return u.getInt64();
    case 7:
      return u.getUInt64();
    case 8:
      return u.getSInt64();
    case 9:
      return u.getBool();
    default:
      return u.skip(), null;
  }
  return null;
}
function Cr(u, e, t, s, r, i) {
  return 0.5 * Math.abs(u * s + t * i + r * e - u * i - t * e - r * s);
}
function _e(u, e, t, s) {
  return u * s - t * e === 0 && u * t + e * s > 0;
}
let Mr = class Se extends Ce {
  static fromBuffer(e, t, s = !1) {
    const r = t.geometryType, i = kr(e), n = wr(i, r === "esriGeometryPoint", s);
    return new Se(i, n, t);
  }
  constructor(e, t, s) {
    super(s), this._hasNext = !1, this._isPoints = !1, this._featureIndex = -1, this._featureOffset = 0, this._cache = { area: 0, unquantGeometry: void 0, geometry: void 0, centroid: void 0, legacyFeature: void 0, optFeature: void 0 }, this._parseCaches = new Array(), this._geometryType = s.geometryType, this._reader = e, this._header = t, this._hasNext = t.hasFeatures, this._isPoints = s.geometryType === "esriGeometryPoint";
  }
  get _size() {
    return this._header.featureCount;
  }
  get fields() {
    return this._header.fields;
  }
  get geometryType() {
    return this._geometryType;
  }
  get hasZ() {
    return !1;
  }
  get hasM() {
    return !1;
  }
  get hasFeatures() {
    return this._header.hasFeatures;
  }
  get hasNext() {
    return this._hasNext;
  }
  get exceededTransferLimit() {
    return this._header.exceededTransferLimit;
  }
  getSize() {
    return this._size;
  }
  getInTransform() {
    return this._header.transform;
  }
  getCursor() {
    return this.copy();
  }
  getIndex() {
    return this._featureIndex;
  }
  setIndex(e) {
    this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e;
  }
  getAttributeHash() {
    let e = "";
    for (const t of this._header.fields.fields) e += this._readAttributeAtIndex(t.index) + ".";
    return e;
  }
  getObjectId() {
    return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
  }
  getDisplayId() {
    return this._header.displayIds[this._featureIndex];
  }
  setDisplayId(e) {
    this._header.displayIds[this._featureIndex] = e;
  }
  readGeometryArea() {
    return this._cache.area || this._readGeometry(!0), this._cache.area;
  }
  copy() {
    const e = this._reader.clone(), t = new Se(e, this._header, this.metadata);
    return this.copyInto(t), t;
  }
  next() {
    for (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0; ++this._featureIndex < this._size && !this._getExists(); ) ;
    return this._featureIndex < this._size;
  }
  _readX() {
    return this._header.centroid[2 * this._featureIndex];
  }
  _readY() {
    return this._header.centroid[2 * this._featureIndex + 1];
  }
  _readServerCentroid() {
    const e = this._header.centroid[2 * this._featureIndex], t = this._header.centroid[2 * this._featureIndex + 1];
    return e === Ke ? null : new C([], [e, t]);
  }
  _readGeometry(e = !1) {
    if (this._cache.geometry === void 0) {
      let t = null;
      if (this._isPoints) {
        if (this._header.centroid[2 * this._featureIndex] === Ke) return null;
        const s = this._header.centroid[2 * this._featureIndex], r = this._header.centroid[2 * this._featureIndex + 1];
        t = new C([], [s, r]);
      } else {
        const s = this._header.offsets.geometry[this._featureIndex], r = this._reader;
        if (s === 0) return null;
        r.move(s);
        try {
          t = e ? this._parseGeometryForDisplay(r) : this._parseGeometry(r);
        } catch (i) {
          return console.error("Failed to parse geometry!", i), null;
        }
      }
      return t?.coords.length === 0 && (t = null), this._cache.geometry = t, t;
    }
    return this._cache.geometry;
  }
  _readAttribute(e, t) {
    const s = this._header.fields.get(e);
    if (s == null) return;
    let r = this._readAttributeAtIndex(s.index);
    this.fields.get(e)?.type === "esriFieldTypeTimestampOffset" && (r = this.parseTimestampOffset(r));
    const i = this._header.fields.isDateField(s.name);
    return t ? r == null ? r : i ? new Date(r) : r : r;
  }
  _readAttributes() {
    const e = {};
    for (const t of this._header.fields.fields) e[t.name] = this._readAttributeAtIndex(t.index);
    return e;
  }
  copyInto(e) {
    super.copyInto(e), e._featureIndex = this._featureIndex, e._featureOffset = this._featureOffset, e._hasNext = this._hasNext, e._parseCaches = this._parseCaches;
  }
  _readAttributeAtIndex(e) {
    let t = this._parseCaches[e];
    if (t || (t = new $s(this.getSize()), this._parseCaches[e] = t), t.has(this._featureIndex)) return t.get(this._featureIndex);
    const s = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e], r = this._reader;
    r.move(s);
    const i = Tr(r);
    return t.set(this._featureIndex, i), i;
  }
  _readGeometryDeltaDecoded(e = !1) {
    if (this._cache.unquantGeometry === void 0) {
      const t = this._readGeometry(e);
      if (!t) return this._cache.unquantGeometry = void 0, null;
      if (!this.getInTransform()) return this._cache.unquantGeometry = t, t;
      const s = st(t.coords.length).decoded, r = t.clone(s), i = r.coords;
      let n = 0;
      for (const a of r.lengths) {
        for (let o = 1; o < a; o++) {
          const h = 2 * (n + o), c = 2 * (n + o - 1);
          i[h] += i[c], i[h + 1] += i[c + 1];
        }
        n += a;
      }
      return this._cache.unquantGeometry = r, r;
    }
    return this._cache.unquantGeometry;
  }
  _parseGeometry(e) {
    const r = e.asUnsafe(), i = r.getLength(), n = r.pos() + i, a = [], o = [];
    for (; r.pos() < n && r.next(); ) switch (r.tag()) {
      case 2: {
        const h = r.getUInt32(), c = r.pos() + h;
        for (; r.pos() < c; ) o.push(r.getUInt32());
        break;
      }
      case 3: {
        const h = r.getUInt32(), c = r.pos() + h;
        for (a.push(r.getSInt64()), a.push(r.getSInt64()), this.hasZ && r.getSInt64(), this.hasM && r.getSInt64(); r.pos() < c; ) a.push(r.getSInt64()), a.push(r.getSInt64()), this.hasZ && r.getSInt64(), this.hasM && r.getSInt64();
        break;
      }
      default:
        r.skip();
    }
    return new C(o, a);
  }
  _parseGeometryForDisplay(e) {
    const r = e.asUnsafe(), i = r.getLength(), n = r.pos() + i, a = [], o = [];
    let h = 0, c = 0, d = null, l = 0;
    const g = this.geometryType === "esriGeometryPolygon";
    for (; r.pos() < n && r.next(); ) switch (r.tag()) {
      case 2: {
        const _ = r.getUInt32(), m = r.pos() + _;
        for (; r.pos() < m; ) {
          const p = r.getUInt32();
          a.push(p), h += p;
        }
        d = st(2 * h).delta;
        break;
      }
      case 3: {
        r.getUInt32();
        const _ = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
        _s(d);
        for (const m of a) if (c + _ * m > d.length) for (let p = 0; p < m; p++) r.getSInt32(), r.getSInt32(), this.hasZ && r.getSInt32(), this.hasM && r.getSInt32();
        else if (g && xr) {
          const p = this.getAreaSimplificationThreshold(m, this._header.vertexCount);
          let I = 2, f = 1;
          const k = !1;
          let b = r.getSInt32(), v = r.getSInt32();
          d[c++] = b, d[c++] = v, this.hasZ && r.getSInt32(), this.hasM && r.getSInt32();
          let S = r.getSInt32(), w = r.getSInt32();
          for (this.hasZ && r.getSInt32(), this.hasM && r.getSInt32(); I < m; ) {
            let F = r.getSInt32(), q = r.getSInt32();
            this.hasZ && r.getSInt32(), this.hasM && r.getSInt32();
            const $ = b + S, T = v + w;
            Cr(b, v, $, T, $ + F, T + q) >= p ? (l += -0.5 * ($ - b) * (T + v), f > 1 && _e(d[c - 2], d[c - 1], S, w) ? (d[c - 2] += S, d[c - 1] += w) : (d[c++] = S, d[c++] = w, f++), b = $, v = T) : (F += S, q += w), S = F, w = q, I++;
          }
          f < 3 || k ? c -= 2 * f : (l += -0.5 * (b + S - b) * (v + w + v), _e(d[c - 2], d[c - 1], S, w) ? (d[c - 2] += S, d[c - 1] += w, o.push(f)) : (d[c++] = S, d[c++] = w, o.push(++f)));
        } else {
          let p = 0, I = r.getSInt32(), f = r.getSInt32();
          this.hasZ && r.getSInt32(), this.hasM && r.getSInt32(), d[c++] = I, d[c++] = f, p += 1;
          for (let k = 1; k < m; k++) {
            const b = r.getSInt32(), v = r.getSInt32(), S = I + b, w = f + v;
            l += -0.5 * (S - I) * (w + f), this.hasZ && r.getSInt32(), this.hasM && r.getSInt32(), k > 2 && _e(d[c - 2], d[c - 1], b, v) ? (d[c - 2] += b, d[c - 1] += v) : (d[c++] = b, d[c++] = v, p += 1), I = S, f = w;
          }
          o.push(p);
        }
        break;
      }
      default:
        r.skip();
    }
    return this._cache.area = l, o.length ? new C(o, d) : null;
  }
};
class ae {
  constructor(e, t) {
    this.service = e, this._metadata = t;
  }
  destroy() {
  }
}
function $r(u, e) {
  switch (u.type) {
    case "memory":
      return new qr(u, e);
    case "ogc":
      return new Er(u, e);
    case "feature-service":
      return u.queryMetadata.capabilities.query.supportsFormatPBF && y("featurelayer-pbf") ? new Ar(u, e) : new Rr(u, e);
  }
}
async function Or(u) {
  const e = new ys();
  return await e.open(u, {}), e;
}
class qr extends ae {
  constructor(e, t) {
    super(e, t), this._portsOpen = Or(e.source).then((s) => this.client = s);
  }
  destroy() {
    this.client.close(), this.client = null;
  }
  async executeQuery(e, t) {
    await this._portsOpen;
    const s = await this.client.invoke("queryFeatures", e.toJSON(), t);
    return M.fromFeatureSet(s, this._metadata);
  }
}
class Ar extends ae {
  async executeQuery(e, t) {
    const { data: s } = await fs(this.service.source, e, t), r = !e.quantizationParameters;
    return Mr.fromBuffer(s, this._metadata, r);
  }
}
class Rr extends ae {
  async executeQuery(e, t) {
    const { source: s, queryMetadata: r } = this.service, i = r.capabilities;
    if (e.quantizationParameters != null && !i.query.supportsQuantization) {
      const a = e.clone(), o = mt(a.quantizationParameters);
      a.quantizationParameters = null;
      const { data: h } = await De(s, a, this._metadata.spatialReference, t), c = ut(h, this._metadata.objectIdField);
      return bt(o, c), M.fromOptimizedFeatureSet(c, this._metadata);
    }
    const { data: n } = await De(s, e, this._metadata.spatialReference, t);
    return this._metadata.geometryType === "esriGeometryPoint" && (n.features = n.features?.filter((a) => {
      if (a.geometry != null) {
        const o = a.geometry;
        return Number.isFinite(o.x) && Number.isFinite(o.y);
      }
      return !0;
    })), M.fromFeatureSet(n, this._metadata);
  }
}
let Er = class extends ae {
  async executeQuery(e, t) {
    const { capabilities: s } = this.service.queryMetadata;
    if (e.quantizationParameters && !s.query.supportsQuantization) {
      const i = e.clone(), n = mt(i.quantizationParameters);
      i.quantizationParameters = null;
      const a = await Be(this.service.source, e, t);
      return bt(n, a), M.fromOptimizedFeatureSet(a, this._metadata);
    }
    const r = await Be(this.service.source, e, t);
    return M.fromOptimizedFeatureSet(r, this._metadata);
  }
}, Xt = class extends Yt {
  constructor(e, t, s, r, i) {
    super(s), this._serviceInfo = e, this._queryInfo = t, this._metadata = r, this._eventLog = i, this._queue = new ht({ concurrency: 16, process: async (n) => {
      const a = { signal: n.options?.signal, query: n.query.customParameters };
      return this._adapter.executeQuery(n.query.inner, a);
    } }), this._adapter = $r(e, r);
  }
  async updateFields(e) {
    this._queryInfo.updateFields(e);
    const t = Array.from(this._store.chunks()).map(async (r) => {
      const i = gt.fromJSON(r.queryInfo.queryJSON);
      if (i) try {
        return await this._tryUpdateFields(r.reader, i), null;
      } catch (n) {
        return n;
      }
    }), s = (await Promise.all(t)).filter((r) => r);
    if (s.length) throw new j("featurelayer-query", "Encountered errors when downloading fields", { errors: s });
  }
  async queryOverride({ edits: e }) {
    const t = [], s = [];
    for (const n of e.removed) n.objectId != null && n.objectId !== -1 ? t.push(n.objectId) : s.push(n.globalId);
    s.length && t.push(...this._mapGlobalIdsToObjectIds(s));
    const r = e.addOrModified.map(({ objectId: n }) => n);
    let i;
    if (r.length) {
      const n = this._queryInfo.createQuery({ objectIds: r });
      i = await this._fetch(n);
    } else i = M.empty(this._metadata);
    return { reader: i, removed: t };
  }
  _mapGlobalIdsToObjectIds(e) {
    const t = new Set(e), s = this._metadata.globalIdField;
    if (s == null) throw new Error("InternalError: Recieved an edit with globalIds, but not supported by the service");
    const r = [];
    return this._store.forEachUnsafe((i) => {
      const n = i.readAttribute(s);
      t.has(n) && r.push(i.getObjectId());
    }), r;
  }
  async _fetch(e, t) {
    const s = await this._enqueue(e, t);
    return await this._tryUpdateFields(s, e.inner), s;
  }
  async _tryUpdateFields(e, t) {
    const s = this._queryInfo.createPatchFieldsQuery(t, e);
    if (!s) return;
    const r = await this._enqueue(s, this._options);
    e.joinAttributes(r);
  }
  async _enqueue(e, t) {
    return this._eventLog.onEvent({ type: "fetchStart" }), this._queue.push({ query: e, options: t }).finally(() => {
      this._eventLog.onEvent({ type: "fetchEnd", done: this._queue.length === 0 });
    });
  }
}, Qt = class extends Xt {
  constructor() {
    super(...arguments), this._chunksById = /* @__PURE__ */ new Map();
  }
  unload(e) {
    this._removeChunks(e.tile);
  }
  _addChunk(e) {
    const t = e.tile.id;
    this._chunksById.has(t) || this._chunksById.set(t, []);
    const s = e.size();
    (s || e.first || e.end) && (y("esri-2d-update-debug") && console.debug(`Chunk[${e.chunkId}] ATileLoadStrategy.addChunk [count=${s}]`), this._chunksById.get(t).push(e), this._store.insert(e));
  }
  _removeChunks(e) {
    const t = this._chunksById.get(e.key.id) ?? [];
    for (const s of t) y("esri-2d-update-debug") && console.debug(`Tile[${e.key.id}] Chunk[${s.chunkId}] ATileLoadStrategy.removeChunk`), this._store.remove(s);
    this._chunksById.delete(e.key.id);
  }
}, rt = class extends Q {
  constructor(e, t, s, r, i, n) {
    super(), this._reader = e, this._queryJSON = t, this._tile = s, this._sourceTile = r, this._sourceTileDepth = i, this._end = n, this.chunkId = `${this._tile.key.id}.${this._sourceTile?.key.id}${this._end ? "e" : ""}`, this.normalizedChunkId = `${this._tile.key.normalizedId}.${this._sourceTile?.key.normalizedId}${this._end ? "e" : ""}`;
  }
  get queryInfo() {
    return { type: "drill-down-tile", chunkId: this.chunkId, tileId: this._tile.key.id, queryJSON: this._queryJSON, sourceTileDepth: this._sourceTileDepth, sourceTileId: this._sourceTile?.key.id, size: this.size(), end: this.end };
  }
  get first() {
    return this._sourceTileDepth === 0;
  }
  get reader() {
    return this._reader;
  }
  get end() {
    return this._end;
  }
  get tile() {
    return this._tile;
  }
  get isTiled() {
    return !0;
  }
  getTileReader(e) {
    return this._tile.key.id === e.key.id ? this.reader : null;
  }
}, Pr = class {
  constructor(e, t) {
    this.subscription = e, this._tileIdToResult = /* @__PURE__ */ new Map(), this._controller = new AbortController(), te(e.options, () => this._controller.abort()), te(t, () => this._controller.abort());
  }
  get(e) {
    return this._tileIdToResult.get(e);
  }
  set(e, t) {
    this._tileIdToResult.set(e, t);
  }
  get options() {
    return { signal: this._controller.signal };
  }
}, jr = class extends Qt {
  constructor() {
    super(...arguments), this._loadStates = /* @__PURE__ */ new Map();
  }
  get about() {
    return { willQueryAllFeatures: !1, willQueryFullResolutionGeometry: !1 };
  }
  async load(e) {
    this._loadStates.has(e.key.id) || this._loadStates.set(e.key.id, new Pr(e, this._options));
    const t = this._loadStates.get(e.key.id);
    let s;
    try {
      for await (const i of this._fetchChunkInfos(t, e.tile, 0)) {
        const { queryJSON: n, reader: a, sourceTile: o, sourceTileDepth: h, tile: c } = i, d = new rt(a, n, c, o, h, !1);
        Y(e.options), this._addChunk(d);
      }
    } catch (i) {
      s = i;
    }
    const r = new rt(M.empty(this._metadata), null, e.tile, null, -1, !0);
    if (this._addChunk(r), s) throw s;
  }
  unload(e) {
    super.unload(e), this._loadStates.delete(e.key.id);
  }
  async *_fetchChunkInfos(e, t, s) {
    let r = e.get(t.id);
    const i = !!r;
    if (r || (r = await this._fetchChunkInfo(e, t, s), e.set(t.id, r)), r.reader.exceededTransferLimit && s < y("featurelayer-query-max-depth")) for (const n of t.createChildTiles()) yield* this._fetchChunkInfos(e, n, s + 1);
    else i || (yield r);
  }
  async _fetchChunkInfo(e, t, s) {
    const r = e.subscription.tile.getQuantizationParameters(), i = this._queryInfo.createTileQuery(t, { returnExceededLimitFeatures: !1, quantizationParameters: r });
    return { reader: await this._fetch(i, e.subscription.options), queryJSON: i.inner.toJSON(), tile: e.subscription.tile, sourceTile: t, sourceTileDepth: s };
  }
}, it = class extends Q {
  constructor(e, t, s, r, i) {
    super(), this._reader = e, this._queryJSON = t, this._tile = s, this._page = r, this._end = i, this.chunkId = `${this._tile.key.id}.${this._page}${this.end ? "e" : ""}`, this.normalizedChunkId = `${this._tile.key.normalizedId}.${this._page}${this.end ? "e" : ""}`;
  }
  get queryInfo() {
    return { type: "paged-tile", chunkId: this.chunkId, tileId: this._tile.key.id, queryJSON: this._queryJSON, page: this._page, size: this.size(), end: this.end };
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return this._page === 0;
  }
  get end() {
    return this._end;
  }
  get page() {
    return this._page;
  }
  get tile() {
    return this._tile;
  }
  get isTiled() {
    return !0;
  }
  getTileReader(e) {
    return this._tile.key.id === e.key.id ? this.reader : null;
  }
}, Dr = class {
  constructor(e, t) {
    this.subscription = e, this._pages = /* @__PURE__ */ new Set(), this._controller = new AbortController(), this._done = !1, te(e.options, () => this._controller.abort()), te(t, () => this._controller.abort());
  }
  resetAbortController() {
    this._controller = new AbortController();
  }
  get pageStart() {
    let e = -1;
    for (const t of this._pages.values()) e = Math.max(e, t);
    return e + 1;
  }
  get done() {
    return this._done;
  }
  get options() {
    return { signal: this._controller.signal };
  }
  add(e, t) {
    this._pages.add(e), this._done = this._done || t;
  }
}, Lr = class extends Qt {
  constructor() {
    super(...arguments), this._loadStates = /* @__PURE__ */ new Map();
  }
  get about() {
    return { willQueryAllFeatures: !1, willQueryFullResolutionGeometry: !1 };
  }
  async load(e) {
    this._loadStates.has(e.key.id) || this._loadStates.set(e.key.id, new Dr(e, this._options));
    const t = this._loadStates.get(e.key.id);
    let s;
    t.resetAbortController();
    try {
      await this._fetchPages(t);
    } catch (i) {
      s = i;
    }
    const r = new it(M.empty(this._metadata), null, e.tile, -1, !0);
    if (ms(t.options) || this._addChunk(r), s) throw s;
  }
  unload(e) {
    super.unload(e), this._loadStates.delete(e.key.id);
  }
  async _fetchPages(e) {
    let r = 0, i = e.pageStart, n = 1;
    for (; r < 20 && !e.done; ) {
      const a = [];
      for (let h = 0; h < n; h++) a.push(this._fetchChunk(e, i++));
      const o = await Promise.all(a);
      for (const h of o) (h.size() !== 0 || h.first) && (e.add(h.page, !h.reader.exceededTransferLimit), Y(e.options), this._addChunk(h));
      r++, n = Math.min(n + 1, 4);
    }
  }
  async _fetchChunk(e, t) {
    const s = e.subscription.tile, r = this._queryInfo.createPagedTileQuery(s, t), i = await this._fetch(r, e.options);
    return new it(i, r.inner.toJSON(), s, t, !1);
  }
}, nt = class extends Q {
  constructor(e, t, s, r) {
    super(), this._reader = e, this._queryJSON = t, this._page = s, this._end = r, this.chunkId = `${this._page}${this.end ? "e" : ""}`, this.normalizedChunkId = this.chunkId;
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return this._page === 0;
  }
  get end() {
    return this._end;
  }
  get queryInfo() {
    return { type: "snapshot", chunkId: this.chunkId, queryJSON: this._queryJSON, page: this._page, size: this.size(), end: this.end };
  }
  get isTiled() {
    return !1;
  }
  getTileReader(e) {
    const t = this.queryFeaturesInBounds(e.bounds);
    return t.setTransformForDisplay(e.transform), t;
  }
};
class zr extends Xt {
  constructor(e, t, s, r, i, n) {
    super(e, t, s, i, n), this._random = new It(1e3), this._featureCount = r;
  }
  get about() {
    return { willQueryAllFeatures: !0, willQueryFullResolutionGeometry: !0 };
  }
  load(e) {
    return this._promise == null && (this._promise = this._downloadPages(this._featureCount)), this._promise;
  }
  unload(e) {
  }
  async _downloadPages(e) {
    const t = Math.ceil(e / this._queryInfo.pageSize), s = Array.from({ length: t }, (a, o) => o).sort((a, o) => this._random.getInt() - this._random.getInt()), r = await Promise.all(s.map((a) => this._downloadPage(a))), i = new nt(M.empty(this._metadata), null, -1, !0);
    this._store.insert(i);
    const n = r.filter((a) => a);
    if (n.length) throw new j("featurelayer-query", "Encountered errors when downloading data", { errors: n });
  }
  async _downloadPage(e) {
    try {
      const t = this._queryInfo.createPagedQuery(e), s = await this._fetch(t, this._options), r = new nt(s, t.inner.toJSON(), e, !1);
      return Y(this._options), this._store.insert(r), null;
    } catch (t) {
      return t;
    }
  }
}
const Ur = "__esri_stream_id__", at = "__esri_timestamp__", ot = 1e3;
class Gr {
  constructor(e, t, s, r, i = 128) {
    this._trackIdToObservations = /* @__PURE__ */ new Map(), this._idCounter = 0, this._lastPurge = performance.now(), this._addOrUpdated = /* @__PURE__ */ new Map(), this._removed = [], this._maxAge = 0, this._timeInfo = s, this._purgeOptions = r, this.store = e, this.objectIdField = t, this.purgeInterval = i, this._useGeneratedIds = this.objectIdField === Ur;
  }
  removeById(e) {
    this._removed.push(e);
  }
  removeByTrackId(e) {
    const t = this._trackIdToObservations.get(e);
    if (t) for (const s of t.entries) this._removed.push(s);
  }
  add(e) {
    if (this._useGeneratedIds) {
      const n = this._nextId();
      e.attributes[this.objectIdField] = n, e.objectId = n;
    } else e.objectId = e.attributes[this.objectIdField];
    const t = e.objectId;
    if (this._addOrUpdated.set(t, e), this._maxAge = Math.max(this._maxAge, e.attributes[this._timeInfo.startTimeField]), !this._timeInfo.trackIdField) return this._trackIdLessObservations == null && (this._trackIdLessObservations = new Ve(1e5)), void this._trackIdLessObservations.enqueue(t);
    const s = e.attributes[this._timeInfo.trackIdField];
    if (!this._trackIdToObservations.has(s)) {
      const n = this._purgeOptions?.maxObservations != null ? this._purgeOptions.maxObservations : ot, a = bs(n, 0, ot);
      this._trackIdToObservations.set(s, new Ve(a));
    }
    const r = this._trackIdToObservations.get(s), i = r?.enqueue(t);
    i != null && (this._addOrUpdated.has(i) ? this._addOrUpdated.delete(i) : this._removed.push(i));
  }
  checkForUpdates() {
    const e = this._getToAdd(), t = this._getToRemove(), s = performance.now();
    s - this._lastPurge >= this.purgeInterval && (this._purge(s), this._lastPurge = s);
    const r = [];
    if (t != null) for (const n of t) {
      const a = this.store.removeById(n);
      a != null && r.push(a);
    }
    const i = [];
    if (e != null) {
      const n = new Set(t ?? []);
      for (const a of e) n.has(a.objectId) || (a.attributes[at] = s, this.store.add(a), i.push(a));
    }
    return !(!i.length && !r?.length) && (this.store.update(i, r), !0);
  }
  _getToAdd() {
    if (!this._addOrUpdated.size) return null;
    const e = new Array(this._addOrUpdated.size);
    let t = 0;
    return this._addOrUpdated.forEach((s) => e[t++] = s), this._addOrUpdated.clear(), e;
  }
  _getToRemove() {
    const e = this._removed;
    return this._removed.length ? (this._removed = [], e) : null;
  }
  _nextId() {
    const e = this._idCounter;
    return this._idCounter = (this._idCounter + 1) % 4294967294 + 1, e;
  }
  _purge(e) {
    const t = this._purgeOptions;
    t != null && (this._purgeSomeByDisplayCount(t), this._purgeByAge(t), this._purgeByAgeReceived(e, t), this._purgeTracks());
  }
  _purgeSomeByDisplayCount(e) {
    if (!e.displayCount) return;
    let t = this.store.size;
    if (t > e.displayCount) {
      if (this._timeInfo.trackIdField) {
        for (const s of this._trackIdToObservations.values()) if (t > e.displayCount && s.size) {
          const r = s.dequeue();
          this._removed.push(r), t--;
        }
      }
      if (this._trackIdLessObservations != null) {
        let s = t - e.displayCount;
        for (; s-- > 0; ) {
          const r = this._trackIdLessObservations.dequeue();
          r != null && this._removed.push(r);
        }
      }
    }
  }
  _purgeByAge(e) {
    const t = this._timeInfo?.startTimeField;
    if (!e.age || !t) return;
    const s = 60 * e.age * 1e3, r = this._maxAge - s;
    this.store.forEach((i) => {
      i.attributes[t] < r && this._removed.push(i.objectId);
    });
  }
  _purgeByAgeReceived(e, t) {
    if (!t.ageReceived) return;
    const s = e - 60 * t.ageReceived * 1e3;
    this.store.forEach((r) => {
      r.attributes[at] < s && this._removed.push(r.objectId);
    });
  }
  _purgeTracks() {
    this._trackIdToObservations.forEach((e, t) => {
      e.size === 0 && this._trackIdToObservations.delete(t);
    });
  }
}
let z = class extends yt {
  constructor(u) {
    super(u);
  }
  get connectionStatus() {
    return this.connection?.connectionStatus;
  }
  get errorString() {
    return this.connection?.errorString;
  }
};
U([J()], z.prototype, "connection", void 0), U([J()], z.prototype, "connectionStatus", null), U([J()], z.prototype, "errorString", null), z = U([ft("esri.views.2d.layers.features.sources.StreamConnectionState")], z);
class Wr {
  constructor(e, t) {
    this._metadata = e, this._onUpdate = t, this._objectIdToFeature = /* @__PURE__ */ new Map();
  }
  get size() {
    return this._objectIdToFeature.size;
  }
  get reader() {
    return M.fromFeatures([...this._objectIdToFeature.values()], this._metadata);
  }
  add(e) {
    this._objectIdToFeature.set(e.objectId, e);
  }
  forEach(e) {
    this._objectIdToFeature.forEach(e);
  }
  removeById(e) {
    const t = this._objectIdToFeature.get(e);
    return t ? (this._objectIdToFeature.delete(e), t) : null;
  }
  clear() {
    this._objectIdToFeature = /* @__PURE__ */ new Map();
  }
  update(e, t) {
    this._onUpdate(e?.length ?? 0);
  }
}
let Nr = class extends Q {
  constructor(e) {
    super(), this._reader = e, this.chunkId = "stream-chunk", this.normalizedChunkId = "stream-chunk";
  }
  get reader() {
    return this._reader;
  }
  get first() {
    return !0;
  }
  get end() {
    return !0;
  }
  get queryInfo() {
    return { type: "stream", chunkId: this.chunkId, size: this.size(), end: this.end };
  }
  get isTiled() {
    return !1;
  }
  getTileReader(e) {
    const t = this.queryFeaturesInBounds(e.bounds);
    return t.setTransformForDisplay(e.transform), t;
  }
};
class Br extends Yt {
  constructor(e, t, s, r, i) {
    super(s), this._service = e, this._dataFilter = t, this._streamOptions = r, this._metadata = i, this._connectionState = new z(), this._forceRefresh = !1, this.events = new xe();
    const { objectIdField: n, timeInfo: a } = this._metadata, { purgeOptions: o } = t;
    this._stagingStore = new Wr(this._metadata, (h) => this.events.emit("features-updated", h)), this._manager = new Gr(this._stagingStore, n, a, o), this.connect();
  }
  destroy() {
    super.destroy(), this.disconnect();
  }
  get about() {
    return { willQueryAllFeatures: !1, willQueryFullResolutionGeometry: !1 };
  }
  get connectionStatus() {
    return this._connectionState.connectionStatus;
  }
  get errorString() {
    return this._connectionState?.errorString;
  }
  async refresh() {
    const e = this._chunk != null;
    this._manager.checkForUpdates() || !e || this._forceRefresh ? (this._chunk && this._store.remove(this._chunk), this._forceRefresh = !1, this._chunk = new Nr(this._stagingStore.reader), this._store.insert(this._chunk), this.events.emit("tick")) : this.events.emit("tick");
  }
  async updateFields(e) {
    throw new Error("Updating available fields not supported for StreamLayer");
  }
  async load(e) {
  }
  unload(e) {
  }
  disconnect() {
    this._connection = pt(this._connection), this._connectionState.connection = null, this._handlesGroup?.remove();
  }
  connect() {
    if (this._connection != null) return;
    const { geometryType: e, spatialReference: t } = this._metadata, { maxReconnectionAttempts: s, maxReconnectionInterval: r, geometryDefinition: i, definitionExpression: n, customParameters: a } = this._dataFilter;
    this._connection = Ds(this._service.source, t, this._streamOptions.outSR, e, n, i, s, r, a), this._handlesGroup = vt([this._connection.on("data-received", (o) => this._onFeature(o)), this._connection.on("message-received", (o) => this._onWebSocketMessage(o))]), this._connectionState.connection = this._connection;
  }
  clear() {
    this._manager.checkForUpdates(), this._stagingStore.clear(), this._forceRefresh = !0;
  }
  updateCustomParameters(e) {
    this._connection?.updateCustomParameters(e);
  }
  sendMessageToSocket(e) {
    this._connection?.sendMessageToSocket(e);
  }
  sendMessageToClient(e) {
    this._connection?.sendMessageToClient(e);
  }
  _onWebSocketMessage(e) {
    if ("type" in e) switch (e.type) {
      case "delete":
        if (e.objectIds) for (const t of e.objectIds) this._manager.removeById(t);
        if (e.trackIds) for (const t of e.trackIds) this._manager.removeByTrackId(t);
        break;
      case "clear":
        this.clear();
    }
    this.events.emit("message-received", e);
  }
  _onFeature(e) {
    try {
      this._manager.add(e), this.events.emit("data-received", e);
    } catch {
    }
  }
}
class Vr {
  constructor(e) {
    this._onChange = e, this._chunks = /* @__PURE__ */ new Map(), this._chunksToRemove = [], this.events = new xe(), this.featureAdapter = new Os();
  }
  destroy() {
    this.clear();
  }
  clear() {
    for (const e of this._chunks.values()) this._chunksToRemove.push(e);
    this._chunks.clear(), this._overrideChunk != null && this._chunksToRemove.push(this._overrideChunk), this._overrideChunk = null;
  }
  *chunks() {
    this._overrideChunk && (yield this._overrideChunk), yield* this._chunks.values();
  }
  insert(e) {
    y("esri-2d-update-debug") && console.debug(`Chunk[${e.chunkId}] SourceChunkStore.insert`), this._overrideChunk?.overridenIds.size && e.reader.removeIds(this._overrideChunk.overridenIds), this._chunks.set(e.chunkId, e), this.events.emit("changed"), this._onChange();
  }
  remove(e) {
    y("esri-2d-update-debug") && console.debug(`Chunk[${e.chunkId}] SourceChunkStore.remove`), this._chunks.delete(e.chunkId), this._chunksToRemove.push(e);
  }
  cleanupRemovedChunks() {
    const e = this._chunksToRemove;
    return this._chunksToRemove = [], e;
  }
  applyOverrides(e, t) {
    this._overrideChunk == null && (this._overrideChunk = new Nt(t)), this._overrideChunk.applyOverrides(e);
    for (const s of this._chunks.values()) s.reader.removeIds(this._overrideChunk.overridenIds), s.invalidate();
  }
  forEach(e) {
    const t = /* @__PURE__ */ new Set();
    for (const s of this.chunks()) {
      const r = s.reader.getCursor();
      for (; r.next(); ) {
        const i = r.getObjectId();
        t.has(i) || (e(r.copy()), t.add(i));
      }
    }
  }
  forEachUnsafe(e) {
    const t = /* @__PURE__ */ new Set();
    for (const s of this.chunks()) {
      const r = s.reader.getCursor();
      for (; r.next(); ) {
        const i = r.getObjectId();
        t.has(i) || (e(r), t.add(i));
      }
    }
  }
  forEachInBounds(e, t) {
    const s = /* @__PURE__ */ new Set();
    for (const r of this.chunks()) {
      const i = r.queryFeaturesInBounds(e);
      for (; i.next(); ) {
        const n = i.getObjectId();
        s.has(n) || (t(i.copy()), s.add(n));
      }
    }
  }
  forEachBounds(e, t) {
    const s = ke();
    for (const r of e)
      r.getBounds(s) && t(s);
  }
}
class Yr {
  constructor(e, t, s, r) {
    this._aggregateAdapter = e, this._subscriptions = t, this._onChange = s, this._connection = r, this._updateTracking = new Ls({ debugName: "FeatureSource" }), this._didInvalidateData = !1, this._store = new Vr(this._onChange);
  }
  destroy() {
    this._strategy?.destroy(), this._store.destroy(), this._streamMessenger?.destroy();
  }
  get _eventLog() {
    return this._connection.eventLog;
  }
  get metadata() {
    if (!this._metadata) throw new Error("InternalError: Metadata not defined. Was update called?");
    return this._metadata;
  }
  get service() {
    return this._schema.service;
  }
  get store() {
    return this._store;
  }
  get streamMessenger() {
    return this._streamMessenger == null && this._initStreamMessenger(), this._streamMessenger;
  }
  get statistics() {
    return mr.from(this._store);
  }
  get updateTracking() {
    return this._updateTracking;
  }
  get queryEngine() {
    if (!this._queryEngine) {
      if (!this._schema) return null;
      const { dataFilter: e } = this._schema.mutable, t = this._schema.mutable.availableFields, s = this._metadata;
      this._queryEngine = new wt({ featureStore: this._store, fieldsIndex: s.fieldsIndex, geometryType: s.geometryType, objectIdField: s.objectIdField, hasM: !1, hasZ: !1, spatialReference: e.outSpatialReference, cacheSpatialQueries: !0, aggregateAdapter: this._aggregateAdapter, timeInfo: s.timeInfo, definitionExpression: e.definitionExpression, availableFields: t });
    }
    return this._queryEngine;
  }
  get isStream() {
    return this._schema.type === "stream";
  }
  chunks() {
    return Array.from(this._store.chunks());
  }
  cleanupRemovedChunks() {
    return this._store.cleanupRemovedChunks();
  }
  onSubscribe(e) {
    this._eventLog.onEvent({ type: "subscribe", tile: e.tile.id });
    const t = this._strategy?.load(e);
    t && (t.then(() => this._eventLog.onEvent({ type: "loaded", tile: e.tile.id })).catch((s) => this._eventLog.onEvent({ type: "error", tile: e.tile.id, error: s })), this._updateTracking.addPromise(t));
  }
  onResume(e) {
    this._updateTracking.addPromise(lt(this._strategy?.load(e)));
  }
  onUnsubscribe(e) {
    this._eventLog.onEvent({ type: "unsubscribe", tile: e.tile.id }), this._strategy?.unload(e);
  }
  getOverride(e) {
    return this._updateTracking.addPromise(this._doGetOverride(e));
  }
  applyOverride(e) {
    this._didInvalidateData = !0, this._store.applyOverrides(e, this.metadata);
  }
  async update(e, t) {
    const s = e.source, r = _t(this._schema?.mutable, s.mutable);
    if (!r) return !1;
    if (y("esri-2d-update-debug") && console.debug(`Version[${t}] FeatureSource.update`, { changes: r }), this._schema = s, this._metadata = new $e(this._schema.service.metadata), this._queryEngine?.destroy(), this._queryEngine = null, this._schema.type === "feature" && this._schema.service.queryMetadata.lastEditDate != null && (this._lastEditDate = this._schema.service.queryMetadata.lastEditDate), this._streamMessenger == null && this._schema.type === "stream" && this._initStreamMessenger(), Le(r, "sourceRefreshVersion") && this._strategy?.refresh) return await this._strategy.refresh(), !0;
    if (s.type === "feature" && Le(r, "availableFields")) {
      if (await this._queryLastEditDateChanged() || this._didInvalidateData) this._didInvalidateData = !1, await this._updateStrategy(t);
      else {
        this._eventLog.onEvent({ type: "updateFieldsStart" });
        try {
          await this._strategy.updateFields(s.mutable.availableFields), this._eventLog.onEvent({ type: "updateFieldsEnd" });
        } catch (i) {
          this._eventLog.onEvent({ type: "updateFieldsError", error: i });
        }
      }
      return !1;
    }
    return !(!ze(r, "dataFilter") && !ze(r, "sourceRefreshVersion")) && (await this._updateStrategy(t), !0);
  }
  _initStreamMessenger() {
    this._streamMessenger == null && (this._streamMessenger = new ee(this._connection));
  }
  async _doGetOverride(e) {
    return this._strategy.queryOverride(e);
  }
  async _queryLastEditDateChanged() {
    if (this._lastEditDate == null) return !1;
    const e = this._schema.service.source, t = { ...e.query, f: "json" }, s = (await Is(e.path, { query: t, responseType: "json" })).data.editingInfo.lastEditDate;
    return s !== this._lastEditDate && (this._lastEditDate = s, !0);
  }
  async _createStrategy() {
    const e = this.service, t = "isSourceHosted" in e && e.isSourceHosted, s = Array.isArray(e.source), r = e.source && "collection" in e.source, i = t || s || r;
    if (this._schema.type === "stream") {
      const o = new Br(this._schema.service, this._schema.mutable.dataFilter, this._store, { outSR: this._schema.mutable.dataFilter.outSpatialReference }, this.metadata);
      return this._streamMessenger.strategy = o, o;
    }
    const n = Ir.fromSchema(this._schema, this._metadata), a = await this._supportSnapshotMode(this._schema, n);
    return a ? new zr(this._schema.service, n, this._store, a.featureCount, this.metadata, this._eventLog) : i ? new Lr(this._schema.service, n, this._store, this.metadata, this._eventLog) : new jr(this._schema.service, n, this._store, this.metadata, this._eventLog);
  }
  async _updateStrategy(e) {
    const t = await this._createStrategy();
    this._eventLog.onEvent({ type: "updateStrategyStart", about: t.about });
    const s = !!this._strategy;
    this._store.clear(), this._strategy?.destroy(), this._strategy = t, y("esri-2d-update-debug") && console.debug(`Version[${e}] FeatureSource.updateStrategy`, { strategy: t });
    const r = Array.from(this._subscriptions.values());
    if (!r.length) return void this._eventLog.onEvent({ type: "updateStrategyEnd" });
    const i = Promise.all(r.map((n) => this._strategy.load(n).then(() => this._eventLog.onEvent({ type: "loaded", tile: n.tile.id })).catch((a) => this._eventLog.onEvent({ type: "error", tile: n.tile.id, error: a }))));
    this._updateTracking.addPromise(i);
    try {
      s && await i;
    } catch (n) {
      Fe(n);
    }
    this._eventLog.onEvent({ type: "updateStrategyEnd" }), y("esri-2d-update-debug") && console.debug(`Version[${e}] FeatureSource.updateStrategyEnd`, { strategy: t });
  }
  async _supportSnapshotMode(e, t) {
    const { queryMetadata: s } = e.service, r = s.snapshotInfo;
    if (!r || !r.supportsSnapshotMinThreshold || !r.snapshotCountThresholds) return null;
    const i = e.service.source, n = t.createQuery();
    n.inner.orderByFields = [], n.inner.returnGeometry = !1;
    const a = (await vs(i, n.inner, { query: n.customParameters })).data.count, { min: o, max: h } = r.snapshotCountThresholds;
    return a <= o || r.supportsSnapshotMaxThreshold && a < h ? { featureCount: a } : null;
  }
}
class Xr {
  constructor(e, t) {
    this._handles = new Ss(), this._abortController = new AbortController(), this._resolver = Te(), this._isDone = !1, this._aborted = !1, this.tile = e, this._version = t, this._handles.add([]);
  }
  destroy() {
    this.pause(), this._handles.destroy();
  }
  get key() {
    return this.tile.key;
  }
  get version() {
    return this._version;
  }
  set version(e) {
    this._version = e;
  }
  get signal() {
    return this._abortController.signal;
  }
  get options() {
    return { signal: this._abortController.signal };
  }
  get done() {
    return this._resolver.promise;
  }
  get isDone() {
    return this._isDone;
  }
  resolve() {
    this._isDone = !0, this._resolver.resolve();
  }
  get paused() {
    return this._aborted;
  }
  resume() {
    this._abortController = new AbortController(), this._aborted = !1;
  }
  pause() {
    this._aborted || (this._aborted = !0, this._abortController.abort());
  }
}
class Qr {
  constructor(e) {
    this.edit = e, this.resolver = Te();
  }
}
class Zr {
  constructor(e, t) {
    this.schema = e, this.version = t, this.resolver = Te();
  }
}
class Ni {
  constructor() {
    this._aggregateAdapter = { getFeatureObjectIds: (e) => this._processor.getFeatureObjectIdsForAggregate(e) }, this._subscriptions = /* @__PURE__ */ new Map(), this._updateRequested = !1, this._updateSubscriptionRequests = [], this._updateHighlightRequests = [];
  }
  destroy() {
    this._subscriptions.clear(), this._processor.destroy(), this._source.destroy(), this._handles.remove(), this._editState = null, this._tileInfoView = null;
  }
  onDetach() {
    this.destroy(), this._initialize(this._connection);
  }
  _initialize(e) {
    this._source = new Yr(this._aggregateAdapter, this._subscriptions, () => this._requestUpdate(), e), this._processor = new yr(e, this._source), this._handles = vt([pe(() => this._source.updateTracking.updating, () => {
      this._requestUpdate(), this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: !0 });
    })]);
  }
  set remoteClient(e) {
    this._connection = new zs(e), this._initialize(this._connection);
  }
  get features() {
    const e = this._source.queryEngine;
    if (!e) throw new j("no-queryEngine", "No query engine defined");
    return e;
  }
  get aggregates() {
    const e = this._processor.aggregateQueryEngine;
    if (!e) throw new j("no-queryEngine", "No aggregate query engine defined");
    return e;
  }
  get processor() {
    return this._processor;
  }
  get streamMessenger() {
    return this._source.streamMessenger;
  }
  getDisplayFeatures(e) {
    return this._processor.getDisplayFeatures(e);
  }
  async updateSchema(e, t) {
    return y("esri-2d-update-debug") && this._updateSchemaState && console.error("InternalError: Schema already updating"), this._updateSchemaState = new Zr(e, t), this._requestUpdate(), this._updateSchemaState.resolver.promise;
  }
  updateSubscriptions(e) {
    this._updateSubscriptionRequests.push(e), this._requestUpdate();
  }
  updateHighlight(e) {
    this._updateHighlightRequests.push(e), this._requestUpdate();
  }
  async onEdits(e) {
    if (this._editState != null) throw new j("InternalError - Already processing an edit");
    this._editState = new Qr(e);
    const t = this._editState.resolver.promise;
    return this._requestUpdate(), t;
  }
  queryStatistics() {
    return this._source.statistics.toJSON();
  }
  async queryVisibleFeatures(e, t) {
    return this.features.executeQuery(e, t);
  }
  async queryHeatmapStatistics(e) {
    const t = Math.round(ws(e.radius));
    let s = Number.POSITIVE_INFINITY, r = Number.NEGATIVE_INFINITY;
    const i = typeof e.fieldOffset == "string", n = e.fieldOffset ?? 0, a = Array.from(this._subscriptions.values()), o = this._source.chunks(), h = t ** 2, c = 3 / (Math.PI * h), d = 2 * t, l = Math.ceil(x / d);
    for (const g of a) {
      const _ = g.tile, m = new Float64Array(l * l);
      for (const p of o) {
        const I = p.getTileReader(_);
        if (!I) continue;
        const f = I.getCursor();
        for (; f.next(); ) {
          let k = 1;
          if (e.field != null) {
            const $ = f.readAttribute(e.field);
            k = i ? -1 * +$ : +$ + n;
          }
          const b = f.readXForDisplay() / d, v = f.readYForDisplay() / d, S = Math.floor(b), w = Math.floor(v);
          if (S < 0 || w < 0 || S >= l || w >= l) continue;
          const F = ((0.5 + S - b) * d) ** 2 + ((0.5 + w - v) * d) ** 2;
          if (F > h) continue;
          const q = k * (c * (1 - F / h) ** 2);
          m[w + S * l] += q;
        }
      }
      for (let p = 0; p < m.length; p++) s = Math.min(s, m[p]), r = Math.max(r, m[p]);
    }
    return { max: r, min: s };
  }
  async getSampleFeatures(e) {
    const t = this._source.chunks();
    if (t.reduce((o, h) => o + h.size(), 0) <= e.minFeatureCount) {
      if (!this._source.updateTracking.updating) {
        const o = [];
        return this._source.store.forEachUnsafe((h) => o.push(h.readLegacyFeatureWorldSpace())), o;
      }
      return null;
    }
    const s = /* @__PURE__ */ new Set(), r = [], i = t.map((o) => o.reader.getCursor()), n = new It(), a = 3 * e.sampleSize;
    for (let o = 0; o < a && r.length < e.sampleSize; o++) {
      const h = i[n.getIntRange(0, t.length - 1)];
      if (h.getSize() === 0) continue;
      const c = n.getIntRange(0, h.getSize() - 1);
      h.setIndex(c);
      const d = h.getObjectId();
      s.has(d) || (s.add(d), r.push(h.readLegacyFeatureWorldSpace()));
    }
    return r.length >= e.sampleSize ? r : null;
  }
  _requestUpdate() {
    this._updateRequested || (this._updateRequested = !0, xs(() => this._scheduleNextUpdate()));
  }
  _scheduleNextUpdate() {
    this._updateRequested && (this._ongoingUpdate || (this._ongoingUpdate = this._doUpdate().finally(() => {
      this._ongoingUpdate = null, this._scheduleNextUpdate();
    }), this._updateRequested = !1));
  }
  _subscribe(e) {
    const t = e.tileId;
    if (this._subscriptions.has(t)) {
      const i = this._subscriptions.get(t);
      return void (i.paused && (y("esri-2d-update-debug") && console.debug(`Tile[${t}] Pipeline.resume`), i.resume(), i.version = e.version, this._source.onResume(i)));
    }
    y("esri-2d-update-debug") && console.debug(`Tile[${t}] Pipeline.subscribe`);
    const s = new ks(this._tileInfoView, t), r = new Xr(s, e.version);
    this._subscriptions.set(t, r), this._source.onSubscribe(r), this._processor.onSubscribe(r);
  }
  _unsubscribe(e) {
    const t = this._subscriptions.get(e);
    t && (y("esri-2d-update-debug") && console.debug(`Tile[${e}] Pipeline.unsubscribe`), this._source.onUnsubscribe(t), this._processor.onUnsubscribe(t), this._subscriptions.delete(t.key.id), t.destroy());
  }
  _pauseSubscription(e) {
    const t = this._subscriptions.get(e);
    t && (y("esri-2d-update-debug") && console.debug(`Tile[${e}] Pipeline.pause`), t.pause());
  }
  async _doUpdate() {
    if (y("esri-2d-update-debug") && console.debug("Pipeline._doUpdateStart"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: !0 }), this._updateSubscriptionRequests.length) {
      const r = this._updateSubscriptionRequests;
      this._updateSubscriptionRequests = [];
      for (const i of r) this._doUpdateSubscriptions(i);
    }
    const e = this._updateSchemaState;
    if (this._updateSchemaState = null, e != null) {
      const { schema: r, version: i } = e;
      await this._doUpdateSchema(r, i);
    }
    const t = this._editState;
    if (this._editState = null, t != null) {
      y("esri-2d-update-debug") && console.debug("Pipeline.applyEditOverride", t.edit);
      const r = await this._source.getOverride(t.edit);
      await this._processor.applyOverride(r), y("esri-2d-update-debug") && console.debug("Pipeline.endEditOverride", t.edit);
    }
    if (this._updateHighlightRequests.length) {
      const r = this._updateHighlightRequests;
      this._updateHighlightRequests = [];
      for (const i of r) this._processor.updateHighlight(i);
    }
    const s = this._source.cleanupRemovedChunks();
    this._processor.removeChunks(s);
    try {
      this._subscriptions.size && (y("esri-2d-update-debug") && console.debug("Pipeline.updateChunksStart"), await this._processor.updateChunks(), y("esri-2d-update-debug") && console.debug("Pipeline.updateChunksEnd"));
    } catch (r) {
      Fe(r);
    }
    t?.resolver.resolve(), e?.resolver.resolve(), this._updateRequested ? (y("esri-2d-update-debug") && console.debug("Pipeline._doUpdateEnd [updateRequested=true]"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: !0 })) : (y("esri-2d-update-debug") && console.debug("Pipeline._doUpdateEnd [updateRequested=false, After flush]"), await this._connection.layerView.setUpdating({ data: this._source.updateTracking.updating, pipeline: this._updateRequested }));
  }
  async _doUpdateSchema(e, t) {
    if (y("esri-2d-update-debug") && console.debug(`Version[${t}] Pipeline.updateStart`, { schema: e }), !this._tileInfoView) {
      const r = Ue.fromJSON(e.source.tileInfoJSON);
      this._tileInfoView = new Ge(r);
    }
    const s = { tileInfo: this._tileInfoView?.tileInfo };
    try {
      const r = await this._source.update(e, t), i = Array.from(this._subscriptions.values());
      await this._processor.update(e, t, s, r, i);
    } catch (r) {
      console.error(r);
    }
    y("esri-2d-update-debug") && console.debug(`Version[${t}] Pipeline.updateEnd`);
  }
  _doUpdateSubscriptions(e) {
    if (y("esri-2d-update-debug") && console.debug("Pipeline.updateSubscriptions", e), !this._tileInfoView) {
      const t = Ue.fromJSON(e.tileInfoJSON);
      this._tileInfoView = new Ge(t);
    }
    for (const t of e.subscribe) this._subscribe(t);
    for (const t of e.unsubscribe) this._unsubscribe(t);
    if (y("featurelayer-query-pausing-enabled")) for (const t of e.pause) this._pauseSubscription(t);
  }
}
export {
  Ni as default
};
//# sourceMappingURL=FeaturePipelineWorker-D4rVaoTW.js.map
