import { s as ue, t as Z, o as de, M as le, d as fe } from "./LabelMetric-D4mTwYEH.js";
import { a as _e, n as pe, b as m, c as me, l as ye, s as ge, k as be, f as I } from "./UpdateTracking2D-ByaqMjYp.js";
import { kK as N, b6 as A, ag as xe, s as w, C as S, nR as Ie, nS as we, aV as Se, B as Te, aZ as ve, d5 as Ee, A as Ae, nT as Ce, l4 as Me, nU as k, az as ze, f5 as Fe, aH as De, cW as H, bh as $e, af as b, i9 as Re, d0 as O, hz as X, eK as Be, nV as Oe, nW as Ve, d7 as C, d6 as Pe, nx as Ge } from "./main-3gzXighg.js";
import { m as M, n as J, a as K } from "./TimeOnly-Bu8sUL7B.js";
import { b as ke, v as je, t as Ne, n as We } from "./timeSupport-BSCelxJA.js";
import { l as V } from "./highlightReasons-B-Ulmjlc.js";
import { b as Le, M as P } from "./definitions-7ZaZRHRo.js";
import { U as z } from "./enums-Do5C4ZjN.js";
const Ue = 1.25;
let $ = class {
  get length() {
    return this._pos;
  }
  constructor(e, t) {
    this._pos = 0;
    const r = t ? this._roundToNearest(t, e.BYTES_PER_ELEMENT) : 40;
    this._array = new ArrayBuffer(r), this._buffer = new e(this._array), this._ctor = e, this._i16View = new Int16Array(this._array);
  }
  _roundToNearest(e, t) {
    const r = Math.round(e);
    return t === 1 ? r : r + (t - r % t);
  }
  _ensureSize(e) {
    if (this._pos + e >= this._buffer.length) {
      const t = this._roundToNearest((this._array.byteLength + e * this._buffer.BYTES_PER_ELEMENT) * Ue, this._buffer.BYTES_PER_ELEMENT), r = new ArrayBuffer(t), s = new this._ctor(r);
      s.set(this._buffer, 0), this._array = r, this._buffer = s, this._i16View = new Int16Array(this._array);
    }
  }
  ensureSize(e) {
    this._ensureSize(e);
  }
  writeF32(e) {
    this._ensureSize(1);
    const t = this._pos;
    return new Float32Array(this._array, 4 * this._pos, 1)[0] = e, this._pos++, t;
  }
  push(e) {
    this._ensureSize(1);
    const t = this._pos;
    return this._buffer[this._pos++] = e, t;
  }
  writeFixed(e) {
    this._buffer[this._pos++] = e;
  }
  setValue(e, t) {
    this._buffer[e] = t;
  }
  i1616Add(e, t, r) {
    this._i16View[2 * e] += t, this._i16View[2 * e + 1] += r;
  }
  getValue(e) {
    return this._buffer[e];
  }
  getValueF32(e) {
    return new Float32Array(this._array, 4 * e, 1)[0];
  }
  incr(e) {
    if (this._buffer.length < e) throw new Error("Increment index overflows the target buffer");
    this._buffer[e]++;
  }
  decr(e) {
    this._buffer[e]--;
  }
  writeRegion(e) {
    this._ensureSize(e.length);
    const t = this._pos;
    return this._buffer.set(e, this._pos), this._pos += e.length, t;
  }
  writeManyFrom(e, t, r) {
    this._ensureSize(r - t);
    for (let s = t; s !== r; s++) this.writeFixed(e._buffer[s]);
  }
  buffer() {
    const e = this._array.slice(0, 4 * this._pos);
    return this.destroy(), e;
  }
  toArray() {
    return [...this._buffer];
  }
  seek(e) {
    this._pos = e;
  }
  destroy() {
    this._array = null, this._buffer = null;
  }
};
const Ye = 6, Ze = 4;
let He = class {
  constructor(e, t, r, s = 0) {
    const i = Ye * s * Uint32Array.BYTES_PER_ELEMENT, a = Ze * s * r, o = r / 4, h = t.attributes.find((d) => d.name === "pos" || d.name === "position");
    if (!h) throw new Error("InternalError: Unable to find position attribute");
    this.layout = { ...t, position: h }, this._indices = new $(Uint32Array, i), this._vertices = new $(Uint32Array, a), this._metrics = new $(Uint32Array, 0), this._metricCountOffset = this._metrics.push(0), this._strideInt = o, this._instanceId = e;
  }
  serialize(e) {
    const t = this._indices.buffer(), r = this._vertices.buffer(), s = this._metrics.length ? this._metrics.buffer() : null;
    return e.push(t, r), { instanceId: this._instanceId, layout: this.layout, indices: t, vertices: r, metrics: s };
  }
  get strideInt() {
    return this._strideInt;
  }
  get vertexCount() {
    return this._vertices.length / this._strideInt;
  }
  get indexCount() {
    return this._indices.length;
  }
  get indexWriter() {
    return this._indices;
  }
  get vertexWriter() {
    return this._vertices;
  }
  get metricWriter() {
    return this._metrics;
  }
  vertexEnsureSize(e) {
    this._vertices.ensureSize(e);
  }
  indexEnsureSize(e) {
    this._indices.ensureSize(e);
  }
  writeIndex(e) {
    this._indices.push(e);
  }
  writeVertex(e) {
    this._vertices.push(e);
  }
  writeVertexRegion(e) {
    this._vertices.writeRegion(e);
  }
  writeVertexF32(e) {
    this._vertices.writeF32(e);
  }
  writeMetric(e) {
    this._metrics.incr(this._metricCountOffset), e.serialize(this._metrics);
  }
}, jt = class {
  constructor(e, t = 0) {
    this._id = e, this._sizeHint = t, this._entityRecordCountOffset = 0, this._entityCountOffset = 0, this._entityIdIndex = 0, this._entitySortKeyIndex = 0, this._instanceIdToVertexData = /* @__PURE__ */ new Map(), this._recordIndexStart = 0, this._recordIndexCount = 0, this._recordVertexStart = 0, this._recordVertexCount = 0, this._current = { metric: null, writer: null, start: 0, sortKey: 0, instanceId: 0, layoutHash: 0, indexStart: 0, vertexStart: 0, textureKey: 0, metricBoxLenPointer: 0 }, this._entities = new $(Uint32Array, this._sizeHint * ue.byteSizeHint), this._entityCountOffset = this._entities.push(0);
  }
  get id() {
    return this._id;
  }
  serialize() {
    const e = new Array(), t = [], r = this._entities.buffer();
    for (const s of this._instanceIdToVertexData.values()) t.push(s.serialize(e));
    return { message: { data: t, entities: r }, transferList: e };
  }
  vertexCount() {
    return this._current.writer?.vertexCount ?? 0;
  }
  indexCount() {
    return this._current.writer?.indexCount ?? 0;
  }
  vertexEnsureSize(e) {
    this._current.writer.vertexEnsureSize(e);
  }
  indexEnsureSize(e) {
    this._current.writer.indexEnsureSize(e);
  }
  vertexWrite(e) {
    this._current.writer.writeVertex(e);
  }
  vertexWriteRegion(e) {
    this._current.writer.writeVertexRegion(e);
  }
  vertexWriteF32(e) {
    this._current.writer.writeVertexF32(e);
  }
  recordBounds(e, t, r, s) {
  }
  indexWrite(e) {
    this._current.writer.writeIndex(e);
  }
  metricStart(e) {
    this._current.metric = e;
  }
  metricEnd() {
    const e = this._current.writer;
    this._current.metric.bounds.length && e.writeMetric(this._current.metric);
  }
  metricBoxWrite(e) {
    this._current.metric.bounds.push(e);
  }
  entityStart(e, t = e) {
    this._entityIdIndex = this._entities.push(e), this._entitySortKeyIndex = this._entities.writeF32(t), this._entityRecordCountOffset = this._entities.push(0);
  }
  entityRecordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  entityEnd() {
    this.entityRecordCount() === 0 ? this._entities.seek(this._entityIdIndex) : this._entities.incr(this._entityCountOffset);
  }
  recordCount() {
    return this._entities.getValue(this._entityRecordCountOffset);
  }
  recordStart(e, t, r = 0) {
    this._current.writer = this._getVertexWriter(e, t), this._current.indexStart = this._current.writer.indexCount, this._current.vertexStart = this._current.writer.vertexCount, this._current.instanceId = e, this._current.layoutHash = t.hash, this._current.textureKey = r;
  }
  recordEnd(e = 0) {
    const t = this._current.vertexStart, r = this._current.writer.vertexCount - t;
    if (!r) return !1;
    const s = this._current.indexStart, i = this._current.writer.indexCount - s;
    return this._recordIndexStart = s, this._recordIndexCount = i, this._recordVertexStart = t, this._recordVertexCount = r, this._entities.incr(this._entityRecordCountOffset), Z.write(this._entities, this._current.instanceId, this._current.textureKey, s, i, t, r, e), !0;
  }
  copyLast(e, t) {
    const r = this._recordVertexStart + this._recordVertexCount;
    this._entities.incr(this._entityRecordCountOffset), Z.write(this._entities, this._current.instanceId, this._current.textureKey, this._recordIndexStart + this._recordIndexCount, this._recordIndexCount, r, this._recordVertexCount, 0);
    const s = this._current.writer.indexWriter, i = this._current.writer.vertexWriter, a = this._recordIndexStart + this._recordIndexCount, o = this._recordVertexCount;
    for (let p = this._recordIndexStart; p !== a; p++) {
      const _ = s.getValue(p);
      s.push(_ + o);
    }
    const h = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, d = this._recordVertexStart * h, u = (this._recordVertexStart + this._recordVertexCount) * h;
    for (let p = d; p !== u; p++) {
      const _ = i.getValue(p);
      i.push(_);
    }
    const c = this._current.writer.layout.position, l = c.packPrecisionFactor ?? 1, y = c.offset / Uint32Array.BYTES_PER_ELEMENT, f = e * l, g = t * l;
    for (let p = r * h; p <= i.length; p += h) i.i1616Add(p + y, f, g);
    this.recordEnd();
  }
  copyLastFrom(e, t, r) {
    const s = e._entities.getValue(e._entityIdIndex);
    if (s !== this._entities.getValue(this._entityIdIndex)) {
      const _ = e._entities.getValueF32(e._entitySortKeyIndex);
      this.entityStart(s, _);
    }
    this.recordStart(e._current.instanceId, e._current.writer.layout, e._current.textureKey);
    const i = this._current.writer.layout.stride / Uint32Array.BYTES_PER_ELEMENT, a = this._current.vertexStart, o = e._current.vertexStart - a, h = this._current.writer.indexWriter, d = this._current.writer.vertexWriter, u = e._current.writer.indexWriter, c = e._current.writer.vertexWriter;
    for (let _ = e._current.indexStart; _ !== u.length; _++) {
      const T = u.getValue(_);
      h.push(T - o);
    }
    for (let _ = e._current.vertexStart * i; _ !== c.length; _++) {
      const T = c.getValue(_);
      d.push(T);
    }
    const l = this._current.writer.layout.position, y = l.packPrecisionFactor ?? 1, f = l.offset / Uint32Array.BYTES_PER_ELEMENT, g = t * y, p = r * y;
    for (let _ = a * i; _ <= d.length; _ += i) d.i1616Add(_ + f, g, p);
    this.recordEnd();
  }
  _getVertexWriter(e, t) {
    const { stride: r } = t, s = this._instanceIdToVertexData;
    return s.has(e) || s.set(e, new He(e, t, r, this._sizeHint)), s.get(e);
  }
};
function Xe(n, e) {
  let t;
  if (typeof n == "string") t = N(n + `-seed(${e})`);
  else {
    let r = 12;
    t = n ^ e;
    do
      t = 107 * (t >> 8 ^ t) + r | 0;
    while (--r != 0);
  }
  return (1 + t / (1 << 31)) / 2;
}
function Je(n) {
  return Math.floor(Xe(n, Ke) * qe);
}
const Ke = 53290320, qe = 10;
let E = class {
  destroy() {
  }
}, Qe = class extends E {
  constructor(e) {
    super(), this._value = e;
  }
  resize(e) {
  }
  read(e, t) {
    return this._value;
  }
  readWithDefault(e, t, r) {
    return this._value;
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
};
const et = () => S.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.mesh.MeshWriterInputEvaluator");
async function F(n, e, t = !1) {
  const { defaultValue: r, valueExpressionInfo: s, value: i } = e;
  if (s) {
    const { expression: a } = s, o = await n.createComputedField({ expression: a }, t);
    return o ? { ...e, computed: o, defaultValue: r } : null;
  }
  return { ...e, computed: new Qe(i), defaultValue: r };
}
async function q(n, e) {
  const { defaultValue: t, valueExpressionInfo: r } = e, { expression: s } = r, i = await n.createComputedField({ expression: s });
  return i ? { ...e, computed: i, defaultValue: t } : null;
}
const se = (n) => typeof n != "boolean" && typeof n != "number" && "valueExpressionInfo" in n, tt = (n) => n.some((e) => {
  for (const t in e) {
    const r = e[t];
    if (se(r)) return !0;
  }
  return !1;
});
let rt = class ie {
  static async create(e, t, r) {
    const s = {}, i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    for (const u in r.params) {
      const c = r.params[u];
      if (c != null && typeof c == "object") if (Array.isArray(c)) {
        if (typeof c[0] == "object") throw new Error(`InternalError: Cannot handle ${u}. Nested array params are not supported`);
        s[u] = c;
      } else if ("valueExpressionInfo" in c) {
        if (c.value) {
          s[u] = c.value;
          continue;
        }
        const l = await q(e, c);
        if (!l) {
          s[u] = c.defaultValue;
          continue;
        }
        i.set(u, l), s[u] = null;
      } else switch (c.type) {
        case "cim-effect-infos":
          if (c.effectInfos.some((l) => l.overrides.length)) {
            a.set(u, { effects: await Promise.all(c.effectInfos.map(async (l) => {
              const y = l.overrides.map((f) => F(e, f));
              return { effect: l.effect, compiledOverrides: (await Promise.all(y)).filter(A) };
            })) });
            break;
          }
          s[u] = c.effectInfos.map((l) => l.effect);
          break;
        case "cim-marker-placement-info":
          c.overrides.length && o.set(u, { placementInfo: c, compiledOverrides: (await Promise.all(c.overrides.map((l) => F(e, l)))).filter(A) }), s[u] = c.placement;
          break;
        case "text-rasterization-param": {
          if (c.overrides.length) {
            const y = c.overrides.map((f) => F(e, f, c.useLegacyLabelEvaluationRules));
            h.set(u, { compiledOverrides: (await Promise.all(y)).filter(A), rasterizationParam: c, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          const l = { type: "cim-rasterization-info", resource: c.resource };
          s[u] = await t.fetchResourceImmediate(l) ?? null;
          break;
        }
        case "sprite-rasterization-param": {
          if (c.overrides.length) {
            const y = c.overrides.map((f) => F(e, f));
            h.set(u, { compiledOverrides: (await Promise.all(y)).filter(A), rasterizationParam: c, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          if (c.resource.type === "animated") {
            h.set(u, { compiledOverrides: [], rasterizationParam: c, objectIdToResourceId: /* @__PURE__ */ new Map() });
            continue;
          }
          const l = { type: "cim-rasterization-info", resource: c.resource };
          s[u] = await t.fetchResourceImmediate(l) ?? null;
          break;
        }
        case "cim-marker-transform-param": {
          const { params: l } = c;
          if (tt(l)) {
            const y = { compiledMarkerInfos: [] };
            await Promise.all(l.map(async (f) => {
              const g = { props: {} };
              for (const p in f) if (se(f[p])) {
                const _ = await q(e, f[p]);
                g.compiledExpressionMap || (g.compiledExpressionMap = /* @__PURE__ */ new Map());
                const T = g.compiledExpressionMap;
                _ && T.set(p, _);
              } else g.props[p] = f[p];
              y.compiledMarkerInfos.push(g);
            })), d.set(u, y);
          } else s[u] = { type: "cim-marker-transform-info", infos: l };
          break;
        }
        default:
          s[u] = c;
      }
      else s[u] = c;
    }
    return new ie(r, s, i, a, o, h, d);
  }
  constructor(e, t, r, s, i, a, o) {
    this.inputMeshParams = e, this._resolvedMeshParams = t, this._dynamicProperties = r, this._dynamicEffectProperties = s, this._dynamicPlacementProperties = i, this._dynamicAsyncProperties = a, this._dynamicTransformProperties = o, this.evaluator = (h) => h;
  }
  get hasDynamicProperties() {
    return !!(this._dynamicProperties.size || this._dynamicAsyncProperties.size || this._dynamicEffectProperties.size || this._dynamicTransformProperties.size || this._dynamicPlacementProperties.size);
  }
  get evaluatedMeshParams() {
    return this._evaluatedMeshParams || (this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams)), this._evaluatedMeshParams;
  }
  enqueueRequest(e, t, r) {
    for (const s of this._dynamicAsyncProperties.values()) {
      const i = xe(s.rasterizationParam.resource);
      s.rasterizationParam.resource.type === "animated" && s.rasterizationParam.resource.randomizeStartTime && (i.primitiveName = "__RESERVED__PRIMITIVE__NAME__", i.startGroup = Je(t.getObjectId() || 0));
      for (const { primitiveName: o, propertyName: h, computed: d, defaultValue: u, valueExpressionInfo: c } of s.compiledOverrides) try {
        const l = s.rasterizationParam.resource.type === "animated" ? i.primitiveName : o;
        de(i, l, h, d, t, r, u);
      } catch (l) {
        et().errorOnce(new w("invalid-arcade-expression", `Encountered an error when evaluating the arcade expression '${c?.expression}' (primitive: '${o}', property: '${h}')`, l));
      }
      const a = e.enqueueRequest({ type: "cim-rasterization-info", resource: i });
      s.objectIdToResourceId.set(t.getObjectId(), a);
    }
  }
  evaluateMeshParams(e, t, r) {
    for (const [s, i] of this._dynamicProperties.entries()) this._resolvedMeshParams[s] = i.computed.readWithDefault(t, r, i.defaultValue);
    for (const [s, i] of this._dynamicPlacementProperties.entries()) for (const { computed: a, defaultValue: o, propertyName: h } of i.compiledOverrides) {
      const d = a.readWithDefault(t, r, o);
      i.placementInfo.placement[h] = d, this._resolvedMeshParams[s] = i.placementInfo.placement;
    }
    for (const [s, i] of this._dynamicEffectProperties.entries()) for (const a of i.effects) {
      for (const { computed: o, defaultValue: h, propertyName: d } of a.compiledOverrides) {
        const u = o.readWithDefault(t, r, h);
        a.effect[d] = u;
      }
      this._resolvedMeshParams[s] = i.effects.map((o) => o.effect);
    }
    for (const [s, i] of this._dynamicTransformProperties.entries()) {
      const a = { type: "cim-marker-transform-info", infos: [] };
      for (const o of i.compiledMarkerInfos) {
        const h = { ...o.props };
        if (o.compiledExpressionMap) for (const [d, u] of o.compiledExpressionMap) {
          const c = u.computed.readWithDefault(t, r, u.defaultValue);
          h[d] = typeof c == "number" || typeof c == "boolean" ? c : u.defaultValue;
        }
        a.infos.push(h);
      }
      this._resolvedMeshParams[s] = a;
    }
    for (const [s, i] of this._dynamicAsyncProperties.entries()) {
      const a = i.objectIdToResourceId.get(t.getObjectId());
      if (a == null) continue;
      const o = e.getResource(a);
      this._resolvedMeshParams[s] = o;
    }
    return this._evaluatedMeshParams = this.evaluator(this._resolvedMeshParams), this.evaluatedMeshParams;
  }
};
async function st(n, e, t, r, s, i, a) {
  const o = _e[t], h = await rt.create(n, e, s), d = new o.constructor(r, h, i, a);
  return await d.loadDependencies(), d;
}
async function Ut(n, e, t, r) {
  return Promise.all(t.map((s) => st(n, e, s.meshWriterName, pe(s.id), s.options, r, s.optionalAttributes)));
}
let it = class {
}, Zt = class extends it {
  constructor(e) {
    super(), this._fetcher = e, this._controller = new AbortController(), this._pendingIds = /* @__PURE__ */ new Set(), this._pendingRequests = [], this._resourceIdToResource = /* @__PURE__ */ new Map();
  }
  destory() {
    this._controller.abort();
  }
  get _abortOptions() {
    return { signal: this._controller.signal };
  }
  enqueueRequest(e) {
    const t = le(e.resource), r = N(JSON.stringify(t));
    return this._pendingIds.has(r) || (this._pendingIds.add(r), this._pendingRequests.push({ ...e, resourceId: r })), r;
  }
  async fetchEnqueuedResources() {
    const e = this._pendingRequests;
    this._pendingIds.clear(), this._pendingRequests = [];
    const t = await this._fetcher.fetch(e, this._abortOptions);
    for (let r = 0; r < t.length; r++) {
      const s = e[r].resourceId;
      this._resourceIdToResource.set(s, t[r]);
    }
  }
  async fetchResourceImmediate(e) {
    const t = await this._fetcher.fetch([e], this._abortOptions);
    if (t.length !== 1) throw new Error("FeaturePipelineResourceProxy: failed to fetch resources");
    return t[0];
  }
  async fetchDictionaryResourceImmediate(e) {
    const t = await this._fetcher.fetchDictionary([e], this._abortOptions);
    if (t.length !== 1) throw new Error("FeaturePipelineResourceProxy: failed to fetch dictionary resources");
    return t[0];
  }
  getResource(e) {
    return this._resourceIdToResource.get(e);
  }
}, nt = class extends E {
  constructor(e) {
    super(), this._field = e;
  }
  resize(e) {
    throw new Error("Method not implemented.");
  }
  read(e, t) {
    return e.readAttribute(this._field);
  }
  readWithDefault(e, t) {
    return e.readAttribute(this._field);
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
};
function Q(n, e, t) {
  if (n == null) return null;
  const r = e.readArcadeFeature();
  e.contextTimeZone = t.$view?.timeZone;
  try {
    return n.evaluate({ ...t, $feature: r }, n.services);
  } catch (s) {
    return S.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", s), null;
  }
}
function ne(n) {
  return n == null || n === 1 / 0 || n === -1 / 0 || typeof n == "number" && isNaN(n);
}
function ee(n, e, t, r) {
  if (n == null) return r ?? null;
  const s = e.readArcadeFeature();
  e.contextTimeZone = t.$view?.timeZone;
  const i = n.evaluate({ ...t, $feature: s }, n.services);
  return ne(i) ? r ?? null : i;
}
let at = class ae extends E {
  static async create(e, t) {
    const r = await Ie(e, t.spatialReference, t.fields), s = N(e);
    return new ae(r, s);
  }
  constructor(e, t) {
    super(), this._compiled = e, this._cacheKey = t;
  }
  resize(e) {
  }
  read(e, t) {
    return this.referencesScale() || t.$view.timeZone !== "system" ? Q(this._compiled, e, t) : this._readCached(e, t);
  }
  readWithDefault(e, t, r) {
    return this.referencesScale() || t.$view.timeZone !== "system" ? ee(this._compiled, e, t, r) : this._readWithDefaultCached(e, t, r);
  }
  referencesScale() {
    return this._compiled?.referencesScale() ?? !1;
  }
  referencesGeometry() {
    return this._compiled?.referencesGeometry() ?? !1;
  }
  _readCached(e, t) {
    if (e.setCache(this._cacheKey), e.hasCachedValue()) return e.getCachedValue();
    const r = Q(this._compiled, e, t);
    return e.setCachedValue(r), r;
  }
  _readWithDefaultCached(e, t, r) {
    if (e.setCache(this._cacheKey), e.hasCachedValue()) return e.getCachedValue();
    const s = ee(this._compiled, e, t, r);
    return e.setCachedValue(s), s;
  }
};
function ot(n, e) {
  if (n == null) return "";
  const t = e.domain;
  if (t) {
    if (t.type === "codedValue" || t.type === "coded-value") {
      const s = n;
      for (const i of t.codedValues) if (i.code === s) return i.name;
    } else if (t.type === "range") {
      const { max: s, min: i } = we(e), a = +n;
      if (i != null && s != null && i <= a && a <= s) return t.name;
    }
  }
  let r = n;
  return Se(e) ? r = Te(r, ve("short-date")) : Ee(e) && (r = Ae(+r)), r || "";
}
let ht = class oe extends E {
  static async create(e, t) {
    const r = Ce(e);
    return new oe((s) => r.replaceAll(/{[^}]*}/g, (i) => {
      const a = i.slice(1, -1), o = s.metadata.fieldsIndex.get(a);
      if (o == null) return i;
      const h = s.readAttribute(a);
      return h == null ? "" : ot(h, o);
    }));
  }
  constructor(e) {
    super(), this._evaluator = e;
  }
  resize(e) {
  }
  read(e, t) {
    return this._evaluator(e);
  }
  readWithDefault(e, t, r) {
    const s = this._evaluator(e);
    return ne(s) ? r : s;
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
};
class ct extends E {
  constructor(e, t) {
    super(), this._field = e, this._normalizationInfo = t;
  }
  resize(e) {
    throw new Error("Method not implemented.");
  }
  read(e, t) {
    return this._readNormalized(e);
  }
  readWithDefault(e, t) {
    return this._readNormalized(e);
  }
  referencesScale() {
    return !1;
  }
  referencesGeometry() {
    return !1;
  }
  _readNormalized(e) {
    const t = e.readAttribute(this._field);
    if (t == null) return null;
    const { normalizationField: r, normalizationTotal: s, normalizationType: i } = this._normalizationInfo, a = e.readAttribute(r);
    switch (i ?? "esriNormalizeByField") {
      case "esriNormalizeByField":
        return a ? a ? t / a : void 0 : null;
      case "esriNormalizeByLog":
        return Math.log(t) * Math.LOG10E;
      case "esriNormalizeByPercentOfTotal":
        return s ? t / s * 100 : null;
    }
  }
}
let W = class R {
  static fromBuffer(e, t) {
    return new R(e, t);
  }
  static create(e, t = 4294967295) {
    const r = new Uint32Array(Math.ceil(e / 32));
    return new R(r, t);
  }
  constructor(e, t) {
    this._mask = 0, this._buf = e, this._mask = t;
  }
  _getIndex(e) {
    return Math.floor(e / 32);
  }
  has(e) {
    const t = this._mask & e;
    return !!(this._buf[this._getIndex(t)] & 1 << t % 32);
  }
  hasRange(e, t) {
    let r = e, s = t;
    for (; r % 32 && r !== s; ) {
      if (this.has(r)) return !0;
      r++;
    }
    for (; s % 32 && r !== s; ) {
      if (this.has(r)) return !0;
      s--;
    }
    if (r === s) return !1;
    for (let i = r / 32; i !== s / 32; i++)
      if (this._buf[i]) return !0;
    return !1;
  }
  set(e) {
    const t = this._mask & e, r = this._getIndex(t), s = 1 << t % 32;
    this._buf[r] |= s;
  }
  setRange(e, t) {
    let r = e, s = t;
    for (; r % 32 && r !== s; ) this.set(r++);
    for (; s % 32 && r !== s; ) this.set(s--);
    if (r !== s) for (let i = r / 32; i !== s / 32; i++) this._buf[i] = 4294967295;
  }
  unset(e) {
    const t = this._mask & e, r = this._getIndex(t), s = 1 << t % 32;
    this._buf[r] &= 4294967295 ^ s;
  }
  resize(e) {
    const t = this._buf, r = new Uint32Array(Math.ceil(e / 32));
    r.set(t), this._buf = r;
  }
  or(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] |= e._buf[t];
    return this;
  }
  and(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] &= e._buf[t];
    return this;
  }
  xor(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] ^= e._buf[t];
    return this;
  }
  ior(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] |= ~e._buf[t];
    return this;
  }
  iand(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] &= ~e._buf[t];
    return this;
  }
  ixor(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] ^= ~e._buf[t];
    return this;
  }
  any() {
    for (let e = 0; e < this._buf.length; e++) if (this._buf[e]) return !0;
    return !1;
  }
  copy(e) {
    for (let t = 0; t < this._buf.length; t++) this._buf[t] = e._buf[t];
    return this;
  }
  clone() {
    return new R(this._buf.slice(), this._mask);
  }
  clear() {
    for (let e = 0; e < this._buf.length; e++) this._buf[e] = 0;
    return this;
  }
  forEachSet(e) {
    for (let t = 0; t < this._buf.length; t++) {
      let r = this._buf[t], s = 32 * t;
      if (r) for (; r; )
        1 & r && e(s), r >>>= 1, s++;
    }
  }
  countSet() {
    let e = 0;
    return this.forEachSet((t) => {
      e++;
    }), e;
  }
};
const G = () => S.getLogger("esri.views.2d.layers.features.support.whereUtils"), ut = { getAttribute: (n, e) => n.readAttribute(e) };
async function he(n, e) {
  try {
    const t = await Me(n, e);
    if (!t.isStandardized) {
      const r = new w("mapview - bad input", "Unable to apply filter's definition expression, as expression is not standardized.", t);
      G().error(r);
    }
    return (r) => {
      const s = r.readArcadeFeature();
      try {
        return t.testFeature(s, ut);
      } catch {
        return G().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", n), !0;
      }
    };
  } catch {
    return G().warn("mapview-bad-where-clause", "Encountered an error when evaluating where clause", n), (r) => !0;
  }
}
const te = () => S.getLogger("esri.views.2d.layers.features.support.ComputedAttributeStorage"), x = 4294967295;
function D(n, e, t) {
  if (!(n.length > e)) for (; n.length <= e; ) n.push(t);
}
let Jt = class {
  constructor(e) {
    this._numerics = [], this._strings = [], this._allocatedSize = 256, this._bitsets = [], this._instanceIds = [], this._bounds = [], this._dirtyBitset = this.getBitset(this.createBitset()), this.compilationOptions = e;
  }
  createBitset() {
    const e = this._bitsets.length;
    return this._bitsets.push(W.create(this._allocatedSize, m)), e + 1;
  }
  async createComputedField(e, t = !1) {
    if (e.expression) try {
      if (!this.compilationOptions) throw new Error("InternalError: Compilation options not defined");
      return t ? ht.create(e.expression, this.compilationOptions) : await at.create(e.expression, this.compilationOptions);
    } catch (s) {
      const i = new w("featurelayer", "Failed to compile arcade expression", { error: s, expression: e.expression });
      return te().error(i), null;
    }
    if (e.normalizationType || e.normalizationField) return new ct(e.field, e);
    if (e.field) return new nt(e.field);
    const r = new w("featurelayer", "Unable to create computed field. No expression or field found", { info: e });
    return te().error(r), null;
  }
  async createWhereClause(e) {
    return e ? he(e, this.compilationOptions.fields) : null;
  }
  getBitset(e) {
    return this._bitsets[e - 1];
  }
  getComputedNumeric(e, t) {
    return this.getComputedNumericAtIndex(e & m, 0);
  }
  setComputedNumeric(e, t, r) {
    return this.setComputedNumericAtIndex(e & m, r, 0);
  }
  getComputedString(e, t) {
    return this.getComputedStringAtIndex(e & m, 0);
  }
  setComputedString(e, t, r) {
    return this.setComputedStringAtIndex(e & m, 0, r);
  }
  getComputedNumericAtIndex(e, t) {
    const r = e & m;
    return this._ensureNumeric(t, r), this._numerics[t][r];
  }
  setComputedNumericAtIndex(e, t, r) {
    const s = e & m;
    this._ensureNumeric(t, s), this._numerics[t][s] = r;
  }
  getPackedChunkId(e) {
    const t = e & m;
    return this._ensureInstanceId(t), this._instanceIds[t];
  }
  setPackedChunkId(e, t) {
    const r = e & m;
    this._ensureInstanceId(r), this._instanceIds[r] = t;
  }
  getComputedStringAtIndex(e, t) {
    const r = e & m;
    return this._ensureString(t, r), this._strings[t][r];
  }
  setComputedStringAtIndex(e, t, r) {
    const s = e & m;
    this._ensureString(t, s), this._strings[t][s] = r;
  }
  getXMin(e) {
    return this._bounds[4 * (e & m)];
  }
  getYMin(e) {
    return this._bounds[4 * (e & m) + 1];
  }
  getXMax(e) {
    return this._bounds[4 * (e & m) + 2];
  }
  getYMax(e) {
    return this._bounds[4 * (e & m) + 3];
  }
  setBounds(e, t, r = !1) {
    const s = e & m;
    if (!r && !this._dirtyBitset.has(e)) return this._bounds[4 * s] !== x;
    this._dirtyBitset.unset(e);
    const i = t.readGeometryWorldSpace();
    if (D(this._bounds, 4 * s + 4, 0), !i || !i.coords.length) return this._bounds[4 * s] = x, this._bounds[4 * s + 1] = x, this._bounds[4 * s + 2] = x, this._bounds[4 * s + 3] = x, !1;
    let a = 1 / 0, o = 1 / 0, h = -1 / 0, d = -1 / 0;
    return i.forEachVertex((u, c) => {
      a = Math.min(a, u), o = Math.min(o, c), h = Math.max(h, u), d = Math.max(d, c);
    }), this._bounds[4 * s] = a, this._bounds[4 * s + 1] = o, this._bounds[4 * s + 2] = h, this._bounds[4 * s + 3] = d, !0;
  }
  getBounds(e, t) {
    const r = this.getXMin(t), s = this.getYMin(t), i = this.getXMax(t), a = this.getYMax(t);
    return k(e, r, s, i, a), r !== x;
  }
  _ensureNumeric(e, t) {
    this._numerics[e] || (this._numerics[e] = []), D(this._numerics[e], t, 0);
  }
  _ensureInstanceId(e) {
    D(this._instanceIds, e, 0);
  }
  _ensureString(e, t) {
    this._strings[e] || (this._strings[e] = []), D(this._strings[e], t, null);
  }
}, j = class {
  getObjectId(e) {
    return e.getObjectId();
  }
  getAttributes(e) {
    return e.readAttributes();
  }
  getAttribute(e, t) {
    return e.readAttribute(t);
  }
  getAttributeAsTimestamp(e, t) {
    return e.readAttributeAsTimestamp(t);
  }
  cloneWithGeometry(e, t) {
    return e;
  }
  getGeometry(e) {
    return e.readGeometryWorldSpace();
  }
  getCentroid(e, t) {
    return e.readCentroidForDisplay();
  }
};
j.Shared = new j();
const v = 1, dt = 2;
class L {
  constructor(e) {
    this._geometryBounds = ze(), this._idToVisibility = /* @__PURE__ */ new Map(), this._serviceInfo = e;
  }
  static async create(e) {
    const t = new L(e);
    return await t.update(e.filterJSON, e.spatialReference), t;
  }
  get hash() {
    return this._hash;
  }
  check(e) {
    return this._applyFilter(e);
  }
  clear() {
    const e = this._resetAllHiddenIds();
    return this.update(), { show: e, hide: [] };
  }
  invalidate() {
    this._idToVisibility.forEach((e, t) => {
      this._idToVisibility.set(t, 0);
    });
  }
  setKnownIds(e) {
    for (const t of e) this._idToVisibility.set(t, v);
  }
  setTrue(e) {
    const t = [], r = [], s = new Set(e);
    return this._idToVisibility.forEach((i, a) => {
      const o = !!(this._idToVisibility.get(a) & v), h = s.has(a);
      !o && h ? t.push(a) : o && !h && r.push(a), this._idToVisibility.set(a, h ? v | dt : 0);
    }), { show: t, hide: r };
  }
  createQuery() {
    const { geometry: e, spatialRel: t, where: r, timeExtent: s, objectIds: i } = this;
    return Fe.fromJSON({ geometry: e, spatialRel: t, where: r, timeExtent: s, objectIds: i });
  }
  async update(e, t) {
    this._hash = JSON.stringify(e);
    const r = await ke(e, null, t);
    await Promise.all([this._setGeometryFilter(r), this._setIdFilter(r), this._setAttributeFilter(r), this._setTimeFilter(r)]);
  }
  async _setAttributeFilter(e) {
    if (!e?.where) return this._clause = null, void (this.where = null);
    this._clause = await he(e.where, this._serviceInfo.fieldsIndex), this.where = e.where;
  }
  _setIdFilter(e) {
    this._idsToShow = e?.objectIds && new Set(e.objectIds), this._idsToHide = e?.hiddenIds && new Set(e.hiddenIds), this.objectIds = e?.objectIds;
  }
  async _setGeometryFilter(e) {
    if (!e?.geometry) return this._spatialQueryOperator = null, this.geometry = null, void (this.spatialRel = null);
    const t = e.geometry, r = e.spatialRel || "esriSpatialRelIntersects", s = await je(r, t, this._serviceInfo.geometryType, this._serviceInfo.hasZ, this._serviceInfo.hasM);
    De(this._geometryBounds, t), this._spatialQueryOperator = s, this.geometry = t, this.spatialRel = r;
  }
  _setTimeFilter(e) {
    if (this.timeExtent = this._timeOperator = null, e?.timeExtent) if (this._serviceInfo.timeInfo) this.timeExtent = e.timeExtent, this._timeOperator = Ne(this._serviceInfo.timeInfo, e.timeExtent, j.Shared);
    else {
      const t = new w("feature-layer-view:time-filter-not-available", "Unable to apply time filter, as layer doesn't have time metadata.", e.timeExtent);
      S.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t);
    }
  }
  _applyFilter(e) {
    return this._filterByGeometry(e) && this._filterById(e) && this._filterByTime(e) && this._filterByExpression(e);
  }
  _filterByExpression(e) {
    return !this.where || this._clause(e);
  }
  _filterById(e) {
    return (!this._idsToHide?.size || !this._idsToHide.has(e.getObjectId())) && (!this._idsToShow?.size || this._idsToShow.has(e.getObjectId()));
  }
  _filterByGeometry(e) {
    if (!this.geometry) return !0;
    const t = e.readGeometryWorldSpace();
    return !!t && this._spatialQueryOperator(t);
  }
  _filterByTime(e) {
    return this._timeOperator == null || this._timeOperator(e);
  }
  _resetAllHiddenIds() {
    const e = [];
    return this._idToVisibility.forEach((t, r) => {
      t & v || (this._idToVisibility.set(r, v), e.push(r));
    }), e;
  }
}
class lt {
  constructor(e) {
    this._options = e, this._fieldsIndex = "fieldsIndex" in e ? H.fromJSON(e.fieldsIndex) : new H(e.fields), e.spatialReference && (this._spatialReference = $e.fromJSON(e.spatialReference)), this._arcadeSchema = { fields: this.fieldsIndex.fields, fieldsIndex: this.fieldsIndex, geometryType: this.geometryType, objectIdField: this.objectIdField, globalIdField: this._options.globalIdField, spatialReference: this._spatialReference, timeInfo: this._options.timeInfo, typeIdField: this._options.typeIdField ?? void 0, types: this._options.types ?? void 0, subtypeField: this._options.subtypeField, subtypes: this._options.subtypes ?? void 0 };
  }
  get fieldsIndex() {
    return this._fieldsIndex;
  }
  get geometryType() {
    return this._options.geometryType;
  }
  get timeInfo() {
    return this._options.timeInfo;
  }
  get objectIdField() {
    return this._options.objectIdField;
  }
  get globalIdField() {
    return this._options.globalIdField;
  }
  get arcadeSchema() {
    return this._arcadeSchema;
  }
  get spatialReference() {
    return this._spatialReference;
  }
  get timeReferenceUnknownClient() {
    return this._options.timeReferenceUnknownClient;
  }
}
let Qt = class ce extends lt {
  static create(e) {
    return new ce({ fields: [], objectIdField: "uid", geometryType: null, spatialReference: e, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: null, typeIdField: null, types: null, timeReferenceUnknownClient: null });
  }
};
class ft {
  constructor(e) {
    this._valid = W.create(e), this._data = new Array(e);
  }
  has(e) {
    return this._valid.has(e);
  }
  set(e, t) {
    this._valid.set(e), this._data[e] = t;
  }
  get(e) {
    return this._data[e];
  }
}
const B = b("featurelayer-simplify-thresholds") ?? [0.5, 0.5, 0.5, 0.5], _t = B[0], pt = B[1], mt = B[2], yt = B[3], U = b("featurelayer-simplify-payload-size-factors") ?? [1, 2, 4], gt = U[0], bt = U[1], xt = U[2], It = b("featurelayer-simplify-mobile-factor") ?? 2, wt = b("esri-mobile"), re = 4294967295;
function St(n, e, t) {
  if (!(n.length > e)) for (; n.length <= e; ) n.push(t);
}
class er {
  constructor(e) {
    this.metadata = e, this.type = "FeatureSetReader", this._deleted = null, this._joined = [], this._objectIdToIndex = null, this._boundsBuffer = [], this._caches = /* @__PURE__ */ new Map(), this.arcadeDeclaredClass = "esri.arcade.Feature", this._contextTimeZone = null;
  }
  get isEmpty() {
    return this._deleted != null && this._deleted.countSet() === this.getSize();
  }
  getAreaSimplificationThreshold(e, t) {
    let r = 1;
    const s = wt ? It : 1;
    t > 4e6 ? r = xt * s : t > 1e6 ? r = bt * s : t > 5e5 ? r = gt * s : t > 1e5 && (r = s);
    let i = 0;
    return e > 4e3 ? i = yt * r : e > 2e3 ? i = mt * r : e > 100 ? i = pt : e > 15 && (i = _t), i;
  }
  parseTimestampOffset(e) {
    return e;
  }
  getBounds(e) {
    if (St(this._boundsBuffer, 4 * this.getIndex() + 4, 0), this.getBoundsXMin() === re) return !1;
    if (this.getBoundsXMin() === 0) {
      const a = this.readGeometryWorldSpace();
      if (!a) return this.setBoundsXMin(re), !1;
      let o = 1 / 0, h = 1 / 0, d = -1 / 0, u = -1 / 0;
      return a.forEachVertex((c, l) => {
        o = Math.min(o, c), h = Math.min(h, l), d = Math.max(d, c), u = Math.max(u, l);
      }), this.setBoundsXMin(o), this.setBoundsYMin(h), this.setBoundsXMax(d), this.setBoundsYMax(u), k(e, o, h, d, u), !0;
    }
    const t = this.getBoundsXMin(), r = this.getBoundsYMin(), s = this.getBoundsXMax(), i = this.getBoundsYMax();
    return k(e, t, r, s, i), !0;
  }
  getBoundsXMin() {
    return this._boundsBuffer[4 * this.getIndex()];
  }
  setBoundsXMin(e) {
    this._boundsBuffer[4 * this.getIndex()] = e;
  }
  getBoundsYMin() {
    return this._boundsBuffer[4 * this.getIndex() + 1];
  }
  setBoundsYMin(e) {
    this._boundsBuffer[4 * this.getIndex() + 1] = e;
  }
  getBoundsXMax() {
    return this._boundsBuffer[4 * this.getIndex() + 2];
  }
  setBoundsXMax(e) {
    this._boundsBuffer[4 * this.getIndex() + 2] = e;
  }
  getBoundsYMax() {
    return this._boundsBuffer[4 * this.getIndex() + 3];
  }
  setBoundsYMax(e) {
    this._boundsBuffer[4 * this.getIndex() + 3] = e;
  }
  readAttributeAsTimestamp(e) {
    const t = this.readAttribute(e);
    return typeof t == "string" ? new Date(t).getTime() : typeof t == "number" || t == null ? t : null;
  }
  readAttribute(e, t = !1) {
    const r = this._readAttribute(e, t);
    if (r !== void 0) return r;
    for (const s of this._joined) {
      s.setIndex(this.getIndex());
      const i = s._readAttribute(e, t);
      if (i !== void 0) return i;
    }
  }
  readAttributes() {
    const e = this._readAttributes();
    for (const t of this._joined) {
      t.setIndex(this.getIndex());
      const r = t._readAttributes();
      for (const s of Object.keys(r)) e[s] = r[s];
    }
    return e;
  }
  joinAttributes(e) {
    this._joined.push(e);
  }
  removeIds(e) {
    if (this._objectIdToIndex == null) {
      const r = /* @__PURE__ */ new Map(), s = this.getCursor();
      for (; s.next(); ) {
        const i = s.getObjectId();
        Re(i), r.set(i, s.getIndex());
      }
      this._objectIdToIndex = r;
    }
    const t = this._objectIdToIndex;
    for (const r of e.values()) t.has(r) && this._removeAtIndex(t.get(r));
  }
  readOptimizedFeatureWorldSpace() {
    const e = this.readGeometryWorldSpace(), t = this.readAttributes(), r = this.readCentroidWorldSpace(), s = new Pe(e, t, r);
    return s.objectId = this.getObjectId(), s.displayId = this.getDisplayId(), s;
  }
  readLegacyFeatureForDisplay() {
    const e = this.readCentroidForDisplay();
    return { attributes: this.readAttributes(), geometry: this.readLegacyGeometryForDisplay(), centroid: (e && { x: e.coords[0], y: e.coords[1] }) ?? null };
  }
  readLegacyFeatureWorldSpace() {
    const e = this.readCentroidWorldSpace();
    return { attributes: this.readAttributes(), geometry: this._readLegacyGeometryWorldSpace(), centroid: (e && { x: e.coords[0], y: e.coords[1] }) ?? null };
  }
  readLegacyGeometryForDisplay() {
    const e = this.readGeometryForDisplay();
    return O(e, this.geometryType, !1, !1);
  }
  readXForDisplay() {
    return this._readX();
  }
  readYForDisplay() {
    return this._readY();
  }
  readXWorldSpace() {
    const e = this._readX(), t = this.getInTransform();
    return t == null ? e : e * t.scale[0] + t.translate[0];
  }
  readYWorldSpace() {
    const e = this._readY(), t = this.getInTransform();
    return t == null ? e : t.translate[1] - e * t.scale[1];
  }
  readGeometryForDisplay() {
    const e = this._readGeometryDeltaDecoded(!0);
    if (!e) {
      const t = this._createGeometryFromServerCentroid();
      return t ? t.deltaDecode() : null;
    }
    return e;
  }
  readGeometryWorldSpace() {
    let e = this._readGeometry();
    if (e || (e = this._createGeometryFromServerCentroid()), !e) return null;
    const t = e.clone(), r = this.getInTransform();
    return r != null && X(t, t, this.hasZ, this.hasM, r), t;
  }
  readCentroidForDisplay() {
    const e = this.readGeometryForDisplay();
    return e ? this._computeDisplayCentroid(e) : this._readServerCentroid();
  }
  readCentroidWorldSpace() {
    const e = this.readGeometryForDisplay(), t = e ? this._computeDisplayCentroid(e) : this._readServerCentroid();
    if (!t) return null;
    const r = t.clone(), s = this.getInTransform();
    return s != null && X(r, r, this.hasZ, this.hasM, s), r;
  }
  setCache(e) {
    let t = this._caches.get(e);
    t == null && (t = new ft(this.getSize()), this._caches.set(e, t)), this._activeCache = t;
  }
  setCachedValue(e) {
    this._activeCache.set(this.getIndex(), e);
  }
  hasCachedValue() {
    return this._activeCache.has(this.getIndex());
  }
  getCachedValue() {
    return this._activeCache.get(this.getIndex());
  }
  _readGeometryDeltaDecoded(e) {
    const t = this._readGeometry(e);
    return this.geometryType !== "esriGeometryPoint" && t && this.getInTransform() ? t.deltaDecode() : t;
  }
  get contextTimeZone() {
    return this._contextTimeZone;
  }
  set contextTimeZone(e) {
    this._contextTimeZone = e;
  }
  readArcadeFeature() {
    return this;
  }
  hasField(e) {
    return this.fields.has(e) || this._joined.some((t) => t.hasField(e));
  }
  geometry() {
    const e = this.readGeometryWorldSpace(), t = O(e, this.geometryType, this.hasZ, this.hasM), r = Be(t);
    if (r) {
      if (!this.metadata.spatialReference) throw new Error("InternalError: Expected spatial reference to be defined");
      r.spatialReference = this.metadata.spatialReference;
    }
    return r;
  }
  autocastArcadeDate(e, t) {
    return t && t instanceof Date ? this.isUnknownDateTimeField(e) ? M.unknownDateJSToArcadeDate(t) : M.dateJSAndZoneToArcadeDate(t, this.contextTimeZone ?? Oe) : t;
  }
  isUnknownDateTimeField(e) {
    return this.metadata.fieldsIndex.getTimeZone(e) === Ve;
  }
  field(e) {
    let t = this.fields.get(e);
    if (t) switch (t.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return K.fromReader(this.readAttribute(e, !1));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return J.fromReader(this.readAttribute(e, !1));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return M.fromReaderAsTimeStampOffset(this.readAttribute(e, !1));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(e, this.readAttribute(e, !0));
      default:
        return this.readAttribute(e, !1);
    }
    for (const r of this._joined) if (r.setIndex(this.getIndex()), t = r.fields.get(e), t) switch (t.type) {
      case "date-only":
      case "esriFieldTypeDateOnly":
        return K.fromReader(r._readAttribute(e, !1));
      case "time-only":
      case "esriFieldTypeTimeOnly":
        return J.fromReader(r._readAttribute(e, !1));
      case "esriFieldTypeTimestampOffset":
      case "timestamp-offset":
        return M.fromReaderAsTimeStampOffset(r._readAttribute(e, !1));
      case "date":
      case "esriFieldTypeDate":
        return this.autocastArcadeDate(e, r._readAttribute(e, !0));
      default:
        return this.readAttribute(e, !1);
    }
    throw new Error(`Field ${e} does not exist`);
  }
  setField(e, t) {
    throw new Error("Unable to update feature attribute values, feature is readonly");
  }
  keys() {
    return this.fields.fields.map((e) => e.name);
  }
  castToText(e = !1) {
    if (!e) return JSON.stringify(this.readLegacyFeatureForDisplay());
    const t = this.readLegacyFeatureForDisplay();
    if (!t) return JSON.stringify(null);
    const r = { geometry: t.geometry, attributes: { ...t.attributes ?? {} } };
    for (const s in r.attributes) {
      const i = r.attributes[s];
      i instanceof Date && (r.attributes[s] = i.getTime());
    }
    return JSON.stringify(r);
  }
  gdbVersion() {
    return null;
  }
  fullSchema() {
    return this.metadata.arcadeSchema;
  }
  castAsJson(e = null) {
    return { attributes: this._readAttributes(), geometry: e?.keepGeometryType === !0 ? this.geometry() : this.geometry()?.toJSON() ?? null };
  }
  castAsJsonAsync(e = null, t = null) {
    return Promise.resolve(this.castAsJson(t));
  }
  _getExists() {
    return this._deleted == null || !this._deleted.has(this.getIndex());
  }
  _computeDisplayCentroid(e) {
    if (this.getInTransform() == null) return We(new C(), e, this.hasM, this.hasZ);
    const t = me.fromOptimized(e, this.geometryType);
    t.yFactor *= -1;
    const r = ye(t);
    return r ? (r[1] *= -1, new C([], r)) : null;
  }
  copyInto(e) {
    e._joined = this._joined, e._deleted = this._deleted, e._objectIdToIndex = this._objectIdToIndex, e._boundsBuffer = this._boundsBuffer, e._activeCache = this._activeCache, e._caches = this._caches, e._contextTimeZone = this._contextTimeZone;
  }
  _readLegacyGeometryWorldSpace() {
    const e = this.readGeometryWorldSpace();
    return O(e, this.geometryType, !1, !1);
  }
  _createGeometryFromServerCentroid() {
    const e = this._readServerCentroid();
    if (!e) return null;
    const [t, r] = e.coords;
    return this._createQuantizedExtrudedGeometry(t, r);
  }
  _createQuantizedExtrudedGeometry(e, t) {
    return this.geometryType === "esriGeometryPolyline" ? this._createQuantizedExtrudedLine(e, t) : this._createQuantizedExtrudedQuad(e, t);
  }
  _createQuantizedExtrudedQuad(e, t) {
    return new C([5], [e - 1, t, 1, -1, 1, 1, -1, 1, -1, -1]);
  }
  _createQuantizedExtrudedLine(e, t) {
    return new C([2], [e - 1, t + 1, 1, -1]);
  }
  _removeAtIndex(e) {
    this._deleted == null && (this._deleted = W.create(this.getSize())), this._deleted.set(e);
  }
}
const Tt = (n, e) => () => null, vt = !1;
class Et {
  constructor(e) {
    this.data = e, this._referenceCount = 0;
  }
  increment() {
    this._referenceCount += 1;
  }
  decrement() {
    this._referenceCount -= 1;
  }
  empty() {
    return this._referenceCount === 0;
  }
}
class At {
  constructor() {
    this._freeIdsGenerationA = [], this._freeIdsGenerationB = [], this._idCounter = 1, this._freeIds = this._freeIdsGenerationA, this._objectIdToDisplayId = /* @__PURE__ */ new Map();
  }
  createIdForObjectId(e) {
    let t = this._objectIdToDisplayId.get(e);
    return t ? t.increment() : (t = new Et(ge(this._getFreeId(), !1)), t.increment(), this._objectIdToDisplayId.set(e, t)), t.data;
  }
  releaseIdForObjectId(e) {
    const t = this._objectIdToDisplayId.get(e);
    t && (t.decrement(), t.empty() && (this._objectIdToDisplayId.delete(e), this._freeIds.push(t.data)));
  }
  releaseAll() {
    for (const e of this._objectIdToDisplayId.values()) this._freeIds.push(e.data);
    this._objectIdToDisplayId.clear();
  }
  incrementGeneration() {
    this._freeIds = this._freeIds === this._freeIdsGenerationA ? this._freeIdsGenerationB : this._freeIdsGenerationA;
  }
  _getFreeId() {
    return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
  }
}
function Ct(n, e) {
  if (!n || !e) return n;
  switch (e) {
    case "radius":
    case "distance":
      return 2 * n;
    case "diameter":
    case "width":
      return n;
    case "area":
      return Math.sqrt(n);
  }
  return n;
}
const Y = () => S.getLogger("esri.views.layers.2d.features.support.AttributeStore"), Mt = Tt(vt, Y());
b("esri-shared-array-buffer"), b("esri-atomics");
class zt {
  constructor(e, t, r) {
    this.size = 0, this.texelSize = 4, this.dirtyStart = 0, this.dirtyEnd = 0;
    const { pixelType: s, layout: i, textureOnly: a } = t;
    this.textureOnly = a || !1, this.pixelType = s, this.layout = i, this._resetRange(), this.size = e, this.isLocal = r, a || (this.data = this._initData(s, e));
  }
  get buffer() {
    return this.data?.buffer;
  }
  unsetComponentAllTexels(e, t) {
    const r = this.data;
    for (let s = 0; s < this.size * this.size; s++) r[s * this.texelSize + e] &= ~t;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponentAllTexels(e, t) {
    const r = this.data;
    for (let s = 0; s < this.size * this.size; s++) r[s * this.texelSize + e] |= 255 & t;
    this.dirtyStart = 0, this.dirtyEnd = this.size * this.size - 1;
  }
  setComponent(e, t, r) {
    const s = this.data;
    for (const i of r) s[i * this.texelSize + e] |= t, this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, i);
  }
  setComponentTexel(e, t, r) {
    this.data[r * this.texelSize + e] |= t, this.dirtyStart = Math.min(this.dirtyStart, r), this.dirtyEnd = Math.max(this.dirtyEnd, r);
  }
  unsetComponentTexel(e, t, r) {
    this.data[r * this.texelSize + e] &= ~t, this.dirtyStart = Math.min(this.dirtyStart, r), this.dirtyEnd = Math.max(this.dirtyEnd, r);
  }
  getData(e, t) {
    const r = I(e);
    return this.data[r * this.texelSize + t];
  }
  setData(e, t, r) {
    const s = I(e), i = 1 << t;
    this.layout & i ? this.data != null && (this.data[s * this.texelSize + t] = r, this.dirtyStart = Math.min(this.dirtyStart, s), this.dirtyEnd = Math.max(this.dirtyEnd, s)) : Y().error("mapview-attributes-store", "Tried to set a value for a texel's readonly component");
  }
  expand(e) {
    if (this.size = e, !this.textureOnly) {
      const t = this._initData(this.pixelType, e), r = this.data;
      t.set(r), this.data = t;
    }
  }
  toMessage() {
    const e = this.dirtyStart, t = this.dirtyEnd, r = this.texelSize;
    if (e > t) return null;
    this._resetRange();
    const s = !this.isLocal, i = this.pixelType, a = this.layout, o = this.data;
    return { start: e, end: t, data: s && o.slice(e * r, (t + 1) * r) || null, pixelType: i, layout: a };
  }
  _initData(e, t) {
    const r = ArrayBuffer, s = fe(e), i = new s(new r(t * t * 4 * s.BYTES_PER_ELEMENT));
    for (let a = 0; a < i.length; a += 4) i[a + 1] = 255;
    return i;
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
}
class tr {
  constructor(e) {
    this._client = e, this._filters = [], this._blocks = new Array(), this._attributeComputeInfo = null, this._abortController = new AbortController(), this._size = Le, this._idsToHighlight = /* @__PURE__ */ new Map(), this._referencesScale = !1, this._referencesGeometry = !1, this._initialized = !1, this.version = 0, this._idGenerator = new At(), this._epoch = 1;
  }
  destroy() {
    this._abortController.abort();
  }
  _initialize() {
    if (this._blockDescriptors != null) return;
    const e = z.FLOAT;
    this._blockDescriptors = [{ pixelType: z.UNSIGNED_BYTE, layout: 1 }, { pixelType: z.UNSIGNED_BYTE, layout: 15, textureOnly: !0 }, { pixelType: z.UNSIGNED_BYTE, layout: 15, textureOnly: !0 }, { pixelType: e, layout: 15 }, { pixelType: e, layout: 15 }, { pixelType: e, layout: 15 }, { pixelType: e, layout: 15 }], this._blocks = this._blockDescriptors.map(() => null);
  }
  get referencesScale() {
    return this._referencesScale;
  }
  get referencesGeometry() {
    return this._referencesGeometry;
  }
  get _signal() {
    return this._abortController.signal;
  }
  get hasHighlight() {
    return this._idsToHighlight.size > 0;
  }
  createDisplayIdForObjectId(e) {
    return this._idGenerator.createIdForObjectId(e);
  }
  releaseDisplayIdForObjectId(e) {
    return this._idGenerator.releaseIdForObjectId(e);
  }
  incrementDisplayIdGeneration() {
    this._idGenerator.incrementGeneration();
  }
  releaseAllIds() {
    this._idGenerator.releaseAll();
  }
  async update(e, t, r, s, i = 0) {
    const a = Ge(this._schema, e);
    if (this.version = i, a && (b("esri-2d-update-debug") && console.debug(`Version[${i}] AttributeStore.update`, { changed: a }), this._schema = e, this._attributeComputeInfo = null, this._initialize(), e != null)) if (r && (this._filters = await Promise.all(e.filters.map((o) => o ? L.create({ geometryType: r.geometryType, hasM: !1, hasZ: !1, timeInfo: r.timeInfo, fieldsIndex: r.fieldsIndex, spatialReference: s ?? r.spatialReference, filterJSON: o }) : null))), e.type !== "subtype") this._attributeComputeInfo = { isSubtype: !1, map: /* @__PURE__ */ new Map() }, await Promise.all(e.bindings.map(async (o) => {
      const h = await this._bind(t, o);
      this._referencesGeometry = this._referencesGeometry || (h?.referencesGeometry() ?? !1), this._referencesScale = this._referencesScale || (h?.referencesScale() ?? !1);
    }));
    else {
      this._attributeComputeInfo = { isSubtype: !0, subtypeField: e.subtypeField, map: /* @__PURE__ */ new Map() }, this._referencesScale = !1, this._referencesGeometry = !1;
      for (const o in e.bindings) {
        const h = e.bindings[o];
        await Promise.all(h.map(async (d) => {
          const u = await this._bind(t, d, parseInt(o, 10));
          this._referencesGeometry = this._referencesGeometry || (u?.referencesGeometry() ?? !1), this._referencesScale = this._referencesScale || (u?.referencesScale() ?? !1);
        }));
      }
    }
  }
  setHighlight(e, t) {
    const r = this._getBlock(0);
    r.unsetComponentAllTexels(0, (1 << V.length) - 1);
    for (const { displayId: s, highlightFlags: i } of e) {
      if (s == null) continue;
      const a = I(s);
      r.setComponent(0, i, [a]);
    }
    this._idsToHighlight.clear();
    for (const { objectId: s, highlightFlags: i } of e) this._idsToHighlight.set(s, i);
    for (const { objectId: s, highlightFlags: i } of t) this._idsToHighlight.set(s, i);
  }
  setData(e, t, r, s) {
    const i = I(e);
    this._ensureSizeForTexel(i), this._getBlock(t).setData(e, r, s);
  }
  getData(e, t, r) {
    return this._getBlock(t).getData(e, r);
  }
  getHighlightFlags(e) {
    return this._idsToHighlight.get(e) || 0;
  }
  unsetAttributeData(e) {
    const t = I(e);
    this._getBlock(0).setData(t, 0, 0);
  }
  setAttributeData(e, t, r) {
    const s = I(e);
    this._ensureSizeForTexel(s), this._getBlock(0).setData(s, 0, this.getFilterFlags(t));
    const i = this._attributeComputeInfo, a = 1, o = 4;
    let h = null;
    i && (h = i.isSubtype ? i.map.get(t.readAttribute(i.subtypeField)) : i.map, h?.size && h.forEach((d, u) => {
      const c = u * a % o, l = Math.floor(u * a / o), y = this._getBlock(l + P.VV);
      let f = d.field?.read(t, r);
      d.valueRepresentation && (f = Ct(f, d.valueRepresentation)), (f === null || isNaN(f) || f === 1 / 0 || f === -1 / 0) && (f = be), y.setData(s, c, f);
    }));
  }
  get epoch() {
    return this._epoch;
  }
  async sendUpdates() {
    const e = this._blocks.map((r) => r != null ? r.toMessage() : null), t = this._getInitArgs();
    b("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.start"), await this._client.update({ initArgs: t, blockData: e, version: this.version, sendUpdateEpoch: this._epoch }, this._signal), this._epoch += 1, b("esri-2d-log-updating") && console.log("AttributeStore: _doSendUpdate.end");
  }
  _ensureSizeForTexel(e) {
    for (; e >= this._size * this._size; ) if (this._expand()) return;
  }
  async _bind(e, t, r) {
    const s = await e.createComputedField(t), { valueRepresentation: i } = t, a = this._attributeComputeInfo;
    if (a.isSubtype) {
      const o = a.map.get(r) ?? /* @__PURE__ */ new Map();
      o.set(t.binding, { field: s, valueRepresentation: i }), a.map.set(r, o);
    } else a.map.set(t.binding, { field: s, valueRepresentation: i });
    return s;
  }
  _getInitArgs() {
    return this._initialized ? null : (this._initialized = !0, this._getBlock(P.Animation), this._getBlock(P.GPGPU), { blockSize: this._size, blockDescriptors: this._blocks.map((e) => e != null ? { textureOnly: e.textureOnly, buffer: e.buffer, pixelType: e.pixelType } : null) });
  }
  _getBlock(e) {
    const t = this._blocks[e];
    if (t != null) return t;
    const r = new zt(this._size, this._blockDescriptors[e], this._client.isLocal);
    return this._blocks[e] = r, this._initialized = !1, r;
  }
  _expand() {
    if (this._size < this._schema.capabilities.maxTextureSize) {
      const e = this._size <<= 1;
      Mt("Expanding block size to", e, this._blocks);
      for (const t of this._blocks) t?.expand(e);
      return this._initialized = !1, this._size = e, 0;
    }
    return Y().error(new w("mapview-limitations", "Maximum number of onscreen features exceeded.")), -1;
  }
  isVisible(e) {
    return !!(this._getBlock(0).getData(e, 0) & 1 << V.length);
  }
  getFilterFlags(e) {
    let t = 0;
    for (let s = 0; s < this._filters.length; s++) {
      const i = !!(1 << s), a = this._filters[s];
      t |= (!i || a == null || a.check(e) ? 1 : 0) << s;
    }
    let r = 0;
    if (this._idsToHighlight.size) {
      const s = e.getObjectId();
      r = this.getHighlightFlags(s);
    }
    return t << V.length | r;
  }
}
export {
  er as M,
  Zt as a,
  tr as b,
  st as c,
  L as d,
  Xe as e,
  lt as f,
  ne as g,
  ft as h,
  Ut as i,
  j,
  jt as n,
  Jt as p,
  Qe as r,
  Qt as s,
  W as t
};
//# sourceMappingURL=AttributeStore-BZKHPrEU.js.map
