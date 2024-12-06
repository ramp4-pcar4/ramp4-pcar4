import { O as r, P as i, Q as b, ht as N, fi as C, k_ as te, bX as R, gz as G, e0 as se, V as U, b5 as E, br as re, dL as k, iu as ie, e9 as w, bi as ae, fw as oe, p as ne, $ as B, aa as le, s as p, b1 as de, hc as pe, ej as ue, e5 as ce, e6 as ye, e7 as he, e8 as fe, ek as me, el as ge, bW as we, df as ve, hd as be, gy as Q, k$ as V, D as m, _ as Ie, t as Le, fn as Fe, l0 as Se, aj as $e, gA as Te, fj as J, l1 as _e, l2 as je, a3 as Oe, l3 as xe, gS as z, eF as A, M as Ee, gU as Ae, l4 as Pe, l5 as De, l6 as Re, er as Ue, gC as qe, gD as Ne, gE as K, eb as Ce, l7 as Ge, gI as ke, gG as Qe, W as Ve, gJ as Je, kD as ze, gL as Ke, ei as Me } from "./main-DMoCLB29.js";
import { $ as We } from "./Mesh-D9IGM-X1.js";
import { i as He, m as Ze } from "./uploadAssetErrors-CBpD6dkq.js";
import { L as Be, C as M } from "./SceneService-D2fKLZRO.js";
import { s as Xe } from "./associatedFeatureServiceUtils-ZwLeHjxb.js";
import { s as Ye } from "./capabilities-xlBnI7Aq.js";
import { p as X, a as et, y as tt, m as st } from "./I3SLayerDefinitions-CXLqm2OV.js";
import { a as rt } from "./fetchService-BtVrnIDt.js";
import { j as it } from "./persistable-CLso4gLk.js";
import { $ as W, P as at, w as ot } from "./elevationInfoUtils-B0Hxgwna.js";
import { $ as nt } from "./I3SUtil-DuhZRIhU.js";
import { n as lt, p as dt } from "./popupUtils-ktYWQvaA.js";
function Y({ associatedLayer: e, serviceUpdateTimeStamp: t }) {
  const s = e?.editingInfo?.lastEditDate, o = e?.serverGens, n = s != null, l = t != null, d = n && l && t.lastUpdate !== s.getTime();
  return n && (d || !l && o?.minServerGen !== o?.serverGen);
}
const pt = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.serviceTimeInfo = null;
    }
    get timeInfo() {
      const s = this.associatedLayer?.timeInfo;
      if (s == null) return null;
      const o = s.clone();
      return G(o, this.fieldsIndex), o;
    }
    set timeInfo(s) {
      G(s, this.fieldsIndex), this._override("timeInfo", s);
    }
    get timeExtent() {
      return this.associatedLayer?.timeExtent;
    }
    set timeExtent(s) {
      this._override("timeExtent", s);
    }
    get timeOffset() {
      return this.associatedLayer?.timeOffset;
    }
    set timeOffset(s) {
      this._override("timeOffset", s);
    }
    get datesInUnknownTimezone() {
      return this.associatedLayer?.datesInUnknownTimezone ?? !1;
    }
    set datesInUnknownTimezone(s) {
      this._override("datesInUnknownTimezone", s);
    }
    async loadTimeInfoFromService(s) {
      const { serviceTimeInfo: o } = this;
      if (o == null) return;
      const { startTimeField: n, endTimeField: l } = o;
      if (n == null && l == null || Y({ associatedLayer: this.associatedLayer, serviceUpdateTimeStamp: this.serviceUpdateTimeStamp })) return;
      const d = async (y) => {
        let f = null;
        try {
          f = (await this.fetchStatistics?.(y, s))?.stats;
        } catch {
        }
        if (f == null) return null;
        const { minTimeStr: I, min: _, maxTimeStr: j, max: O } = f, F = y === n ? I ?? _ : j ?? O;
        return F != null ? new Date(F) : null;
      }, [u, c] = await Promise.all([d(n), d(l)]);
      if (n != null && u == null || l != null && c == null) return;
      const h = new C({ start: u, end: c });
      this.setAtOrigin("timeInfo", new N({ endField: l, startField: n, fullTimeExtent: h }), "service");
    }
  };
  return r([i({ type: N, json: { read: !1, write: !1 } })], t.prototype, "timeInfo", null), r([i({ type: C, json: { read: !1, write: !1 } })], t.prototype, "timeExtent", null), r([i({ type: te, json: { read: !1, write: !1 } })], t.prototype, "timeOffset", null), r([i({ type: Boolean, nonNullable: !0, json: { read: !1, write: !1 } })], t.prototype, "datesInUnknownTimezone", null), r([i({ type: L, readOnly: !0, json: { read: { source: "timeInfo" } } })], t.prototype, "serviceTimeInfo", void 0), t = r([b("esri.layers.mixins.TemporalSceneLayer")], t), t;
};
let L = class extends R {
  constructor() {
    super(...arguments), this.endTimeField = null, this.startTimeField = null;
  }
};
r([i({ type: String })], L.prototype, "endTimeField", void 0), r([i({ type: String })], L.prototype, "startTimeField", void 0), L = r([b("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")], L);
let g = class extends R {
  constructor() {
    super(...arguments), this.name = null, this.field = null, this.currentRangeExtent = null, this.fullRangeExtent = null, this.type = "rangeInfo";
  }
};
r([i({ type: String, json: { read: !0, write: !0 } })], g.prototype, "name", void 0), r([i({ type: String, json: { read: !0, write: !0 } })], g.prototype, "field", void 0), r([i({ type: [Number], json: { read: !0, write: !0 } })], g.prototype, "currentRangeExtent", void 0), r([i({ type: [Number], json: { read: !0, write: !0 } })], g.prototype, "fullRangeExtent", void 0), r([i({ type: ["rangeInfo"], readOnly: !0, json: { read: !1, write: !0 } })], g.prototype, "type", void 0), g = r([b("esri.layers.support.RangeInfo")], g);
var $;
let P = $ = class extends se(U.ofType(E)) {
  constructor(e) {
    super(e);
  }
  clone() {
    return new $(this.items.map((e) => e.clone()));
  }
  write(e, t) {
    return this.toJSON(t);
  }
  toJSON(e) {
    const t = e?.layer?.spatialReference;
    return t ? this.toArray().map((s) => {
      if (!t.equals(s.spatialReference)) {
        if (!re(s.spatialReference, t)) return e?.messages && e.messages.push(new k("scenefilter:unsupported", "Scene filters with incompatible spatial references are not supported", { modification: this, spatialReference: e.layer.spatialReference, context: e })), null;
        const n = new E();
        ie(s, n, t), s = n;
      }
      const o = s.toJSON(e);
      return delete o.spatialReference, o;
    }).filter((s) => s != null) : (e?.messages && e.messages.push(new k("scenefilter:unsupported", "Writing Scene filters without context layer is not supported", { modification: this, spatialReference: e.layer.spatialReference, context: e })), this.toArray().map((s) => s.toJSON(e)));
  }
  static fromJSON(e, t) {
    const s = new $();
    return e.forEach((o) => s.add(E.fromJSON(o, t))), s;
  }
};
P = $ = r([b("esri.layers.support.PolygonCollection")], P);
const T = P;
var D;
let v = D = class extends R {
  constructor(e) {
    super(e), this.spatialRelationship = "disjoint", this.geometries = new T(), this._geometriesSource = null;
  }
  initialize() {
    this.addHandles(ae(() => this.geometries, "after-changes", () => this.geometries = this.geometries, oe));
  }
  readGeometries(e, t, s) {
    Array.isArray(e) ? this.geometries = T.fromJSON(e, s) : this._geometriesSource = { url: ne(e, s), context: s };
  }
  async loadGeometries(e, t) {
    if (this._geometriesSource == null) return;
    const { url: s, context: o } = this._geometriesSource, n = await B(s, { responseType: "json", signal: t?.signal }), l = e.toJSON(), d = n.data.map((u) => ({ ...u, spatialReference: l }));
    this.geometries = T.fromJSON(d, o), this._geometriesSource = null;
  }
  clone() {
    const e = new D({ geometries: le(this.geometries), spatialRelationship: this.spatialRelationship });
    return e._geometriesSource = this._geometriesSource, e;
  }
};
r([i({ type: ["disjoint", "contains"], nonNullable: !0, json: { write: !0 } })], v.prototype, "spatialRelationship", void 0), r([i({ type: T, nonNullable: !0, json: { write: !0 } }), it({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "geometries", contentAddressed: !0 })], v.prototype, "geometries", void 0), r([w(["web-scene", "portal-item"], "geometries")], v.prototype, "readGeometries", null), v = D = r([b("esri.layers.support.SceneFilter")], v);
const ut = v;
async function ct({ fieldName: e, statisticsInfo: t, errorContext: s, fieldsIndex: o, path: n, customParameters: l, apiKey: d, signal: u }) {
  if (t == null) throw new p(`${s}:no-cached-statistics`, "Cached statistics are not available for this layer");
  const c = o.get(e);
  if (c == null) throw new p(`${s}:field-unexisting`, `Field '${e}' does not exist on the layer`);
  const h = t.find((I) => I.name === c.name);
  if (h == null) throw new p(`${s}:no-cached-statistics`, "Cached statistics for this attribute are not available");
  const y = de(n, h.href), { data: f } = await B(y, { query: { f: "json", ...l, token: d }, responseType: "json", signal: u });
  return f;
}
async function yt(e) {
  const t = [];
  for (const s of e) s.name.toLowerCase().endsWith(".zip") ? t.push(ht(s)) : t.push(Promise.resolve(s));
  return (await Promise.all(t)).flat();
}
async function ht(e) {
  const { BlobReader: t, ZipReader: s, BlobWriter: o } = await import("./zipjs-wrapper-TqLA4H4S.js"), n = [];
  return (await new s(new t(e)).getEntries()).forEach((d) => {
    if (d.directory || /^__MACOS/i.test(d.filename)) return;
    const u = new o(), c = d.getData?.(u).then((h) => new File([h], d.filename));
    c && n.push(c);
  }), Promise.all(n);
}
const ft = /* @__PURE__ */ new Set(["3DObject", "Point"]), H = Ke();
let a = class extends pt(pe(Be(ue(ce(ye(he(fe(me(ge(we(Me))))))))))) {
  constructor(...e) {
    super(...e), this.featureReduction = null, this.rangeInfos = null, this.operationalLayerType = "ArcGISSceneServiceLayer", this.type = "scene", this.fields = null, this.floorInfo = null, this.outFields = null, this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.excludeObjectIds = new U(), this.definitionExpression = null, this.filter = null, this.path = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.priority = null, this.semantic = null, this.cachedDrawingInfo = { color: !1 }, this.popupEnabled = !0, this.popupTemplate = null, this.objectIdField = null, this.globalIdField = null, this._fieldUsageInfo = {}, this.screenSizePerspectiveEnabled = !0, this.serviceItemId = void 0;
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  destroy() {
    this._set("renderer", null);
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, t) {
    const s = this.getFeatureType(t?.feature)?.domains?.[e];
    return s && s.type !== "inherited" ? s : this.getField(e)?.domain ?? null;
  }
  getFeatureType(e) {
    return e && this.associatedLayer ? this.associatedLayer.getFeatureType(e) : null;
  }
  get types() {
    return this.associatedLayer?.types ?? [];
  }
  get typeIdField() {
    return this.associatedLayer?.typeIdField ?? null;
  }
  get templates() {
    return this.associatedLayer?.templates ?? null;
  }
  get formTemplate() {
    return this.associatedLayer?.formTemplate ?? null;
  }
  get fieldsIndex() {
    return new ve(this.fields);
  }
  readNodePages(e, t, s) {
    return t.layerType === "Point" && (e = t.pointNodePages), e == null || typeof e != "object" ? null : X.fromJSON(e, s);
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this.loaded && this._validateElevationInfo();
  }
  get effectiveCapabilities() {
    return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities);
  }
  get effectiveEditingEnabled() {
    return this.associatedLayer != null && be(this.associatedLayer);
  }
  get geometryType() {
    return mt[this.profile] || "mesh";
  }
  set renderer(e) {
    Q(e, this.fieldsIndex), this._set("renderer", e);
  }
  readCachedDrawingInfo(e) {
    return e != null && typeof e == "object" || (e = {}), e.color == null && (e.color = !1), e;
  }
  get capabilities() {
    return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities);
  }
  _capabilitiesFromAssociatedFeatureLayer(e) {
    e = e ?? Ye;
    const { query: t, queryRelated: s, editing: { supportsGlobalId: o, supportsRollbackOnFailure: n, supportsUploadWithItemId: l, supportsGeometryUpdate: d, supportsReturnServiceEditsInSourceSpatialReference: u }, data: { supportsZ: c, supportsM: h, isVersioned: y, supportsAttachment: f }, operations: { supportsEditing: I, supportsAdd: _, supportsUpdate: j, supportsDelete: O, supportsQuery: F, supportsQueryAttachments: q, supportsAsyncConvert3D: ee } } = e, S = e.operations.supportsChangeTracking, x = !!this.associatedLayer?.infoFor3D && V();
    return { query: t, queryRelated: s, editing: { supportsGlobalId: o, supportsReturnServiceEditsInSourceSpatialReference: u, supportsRollbackOnFailure: n, supportsGeometryUpdate: x && d, supportsUploadWithItemId: l }, data: { supportsAttachment: f, supportsZ: c, supportsM: h, isVersioned: y }, operations: { supportsQuery: F, supportsQueryAttachments: q, supportsEditing: I && S, supportsAdd: x && _ && S, supportsDelete: x && O && S, supportsUpdate: j && S, supportsAsyncConvert3D: ee } };
  }
  get editingEnabled() {
    return this._isOverridden("editingEnabled") ? this._get("editingEnabled") : this.associatedLayer?.editingEnabled ?? !1;
  }
  set editingEnabled(e) {
    this._overrideIfSome("editingEnabled", e);
  }
  get infoFor3D() {
    return this.associatedLayer?.infoFor3D ?? null;
  }
  get relationships() {
    return this.associatedLayer?.relationships;
  }
  get defaultPopupTemplate() {
    return this.associatedLayer || this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  readObjectIdField(e, t) {
    return !e && t.fields && t.fields.some((s) => (s.type === "esriFieldTypeOID" && (e = s.name), !!e)), e || void 0;
  }
  readGlobalIdField(e, t) {
    return !e && t.fields && t.fields.some((s) => (s.type === "esriFieldTypeGlobalID" && (e = s.name), !!e)), e || void 0;
  }
  get displayField() {
    return this.associatedLayer?.displayField ?? null;
  }
  readProfile(e, t) {
    const s = t.store.profile;
    return s != null && Z[s] ? Z[s] : (m.getLogger(this).error("Unknown or missing profile", { profile: s, layer: this }), "mesh-pyramids");
  }
  get useViewTime() {
    return this.associatedLayer?.useViewTime ?? !0;
  }
  set useViewTime(e) {
    this._override("useViewTime", e);
  }
  load(e) {
    return this.addResolvingPromise(this._load(e)), Promise.resolve(this);
  }
  async _load(e) {
    const t = e != null ? e.signal : null;
    await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(Ie), await this._fetchService(t), await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages, t), this._setAssociatedFeatureLayer(t), this._loadFilterGeometries()]), this._validateElevationInfo(), this._applyAssociatedLayerOverrides(), this._populateFieldUsageInfo(), await this.loadTimeInfoFromService(e), await Le(this, { origin: "service" }, t), Q(this.renderer, this.fieldsIndex), await this.finishLoadEditablePortalLayer(e);
  }
  async beforeSave() {
    this.filter != null && (this.filter = this.filter.clone(), await this.load());
  }
  async _loadFilterGeometries() {
    if (this.filter) try {
      await this.filter.loadGeometries(this.spatialReference);
    } catch (e) {
      m.getLogger(this).error("#_loadFilterGeometries()", this, "Failed to load filter geometries. Geometry filter will not be applied for this layer.", { error: e }), this.filter = null;
    }
  }
  createQuery() {
    const e = new Fe();
    return this.geometryType === "mesh" ? this.associatedLayer?.infoFor3D && (e.returnGeometry = !0) : (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e.outFields = ["*"], e;
  }
  queryExtent(e, t) {
    return this._getAssociatedLayerForQuery().then((s) => s.queryExtent(e || this.createQuery(), t));
  }
  queryFeatureCount(e, t) {
    return this._getAssociatedLayerForQuery().then((s) => s.queryFeatureCount(e || this.createQuery(), t));
  }
  queryFeatures(e, t) {
    return this._getAssociatedLayerForQuery().then((s) => s.queryFeatures(e || this.createQuery(), t)).then((s) => {
      if (s?.features) for (const o of s.features) o.layer = this, o.sourceLayer = this;
      return s;
    });
  }
  async queryRelatedFeatures(e, t) {
    if (await this.load(), !this.associatedLayer) throw new p("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    return this.associatedLayer.queryRelatedFeatures(e, t);
  }
  async queryRelatedFeaturesCount(e, t) {
    if (await this.load(), !this.associatedLayer) throw new p("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    return this.associatedLayer.queryRelatedFeaturesCount(e, t);
  }
  async queryCachedAttributes(e, t) {
    const s = Se(this.fieldsIndex, await lt(this, dt(this)));
    return nt(this.parsedUrl?.path ?? "", this.attributeStorageInfo ?? [], e, t, s, this.apiKey, this.customParameters);
  }
  async queryCachedFeature(e, t) {
    const s = await this.queryCachedAttributes(e, [t]);
    if (!s || s.length === 0) throw new p("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
    const o = new $e();
    return o.attributes = s[0], o.layer = this, o.sourceLayer = this, o;
  }
  queryObjectIds(e, t) {
    return this._getAssociatedLayerForQuery().then((s) => s.queryObjectIds(e || this.createQuery(), t));
  }
  queryAttachments(e, t) {
    return this._getAssociatedLayerForQuery().then((s) => s.queryAttachments(e, t));
  }
  getFieldUsageInfo(e) {
    const t = { supportsLabelingInfo: !1, supportsRenderer: !1, supportsPopupTemplate: !1, supportsLayerQuery: !1 };
    return this.loaded ? this._fieldUsageInfo[e] || t : (m.getLogger(this).error("#getFieldUsageInfo()", "Unavailable until layer is loaded"), t);
  }
  createPopupTemplate(e) {
    return Te(this, e);
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return e?.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), !this.associatedLayer) throw new p("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new p("scenelayer:query-not-available", "SceneLayer associated feature layer could not be loaded", { layer: this, error: e });
    }
    return this.associatedLayer;
  }
  hasCachedStatistics(e) {
    return this.statisticsInfo != null && this.statisticsInfo.some((t) => t.name === e);
  }
  async queryCachedStatistics(e, t) {
    return await this.load(t), await this.fetchStatistics(e, t);
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(M.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" };
    return this._debouncedSaveOperations(M.SAVE, e);
  }
  async applyEdits(e, t) {
    const { applyEdits: s } = await import("./editingSupport-CLnINwyq.js");
    let o = t;
    await this.load();
    const n = this.associatedLayer;
    if (!n) throw new p(`${this.type}-layer:not-editable`, "Service is not editable");
    await n.load();
    const { globalIdField: l } = n, d = !!n.infoFor3D, u = o?.globalIdUsed ?? !0;
    if (d && l == null) throw new p(`${this.type}-layer:not-editable`, "Valid globalIdField expected on editable SceneLayer");
    if (d && !u) throw new p(`${this.type}-layer:globalid-required`, "globalIdUsed must not be false for SceneLayer editing as globalIds are required.");
    return J(n.url) && d && e.deleteFeatures != null && l != null && (o = { ...o, globalIdToObjectId: await _e(n, e.deleteFeatures, l) }), s(this, n.source, e, o);
  }
  async uploadAssets(e, t) {
    if (await this.load(), this.associatedLayer == null) throw new p(`${this.type}-layer:not-editable`, "Service is not editable");
    return await this.associatedLayer.load(), this.associatedLayer.uploadAssets(e, t);
  }
  on(e, t) {
    return super.on(e, t);
  }
  async convertMesh(e, t) {
    const s = (y) => {
      throw m.getLogger(this).error(".convertMesh()", y.message), y;
    };
    await this.load(), this.infoFor3D || s(new p("invalid:layer", "SceneLayer has no capability for mesh conversion"));
    const o = await this.extractAndFilterFiles(e), n = o.reduce((y, f) => je(this.infoFor3D, f) ? y + 1 : y, 0);
    n === 0 && s(new He()), n > 1 && s(new Ze());
    const l = this.spatialReference, d = t?.location ?? new Oe({ x: 0, y: 0, z: 0, spatialReference: l }), u = d.spatialReference.isGeographic ? "local" : "georeferenced", c = We.createWithExternalSource(d, o, { vertexSpace: u }), [h] = await this.uploadAssets([c], t);
    return h;
  }
  async extractAndFilterFiles(e) {
    await this.load();
    const t = this.infoFor3D;
    return t ? (await yt(e)).filter((s) => xe(t, s)) : e;
  }
  validateLayer(e) {
    if (e.layerType && !ft.has(e.layerType)) throw new p("scenelayer:layer-type-not-supported", "SceneLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new p("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    if (this.version.major > 2) throw new p("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    function t(s, o) {
      let n = !1, l = !1;
      if (s == null) n = !0, l = !0;
      else {
        const d = o && o.isGeographic;
        switch (s) {
          case "east-north-up":
          case "earth-centered":
            n = !0, l = d;
            break;
          case "vertex-reference-frame":
            n = !0, l = !d;
            break;
          default:
            n = !1;
        }
      }
      if (!n) throw new p("scenelayer:unsupported-normal-reference-frame", "Normal reference frame is invalid.");
      if (!l) throw new p("scenelayer:incompatible-normal-reference-frame", "Normal reference frame is incompatible with layer spatial reference.");
    }
    t(this.normalReferenceFrame, this.spatialReference);
  }
  _getTypeKeywords() {
    const e = [];
    if (this.profile === "points") e.push("Point");
    else {
      if (this.profile !== "mesh-pyramids") throw new p("scenelayer:unknown-profile", "SceneLayer:save() encountered an unknown SceneLayer profile: " + this.profile);
      e.push("3DObject");
    }
    return e;
  }
  _populateFieldUsageInfo() {
    if (this._fieldUsageInfo = {}, this.fields) for (const e of this.fields) {
      const t = !!this.attributeStorageInfo?.some((n) => n.name === e.name), s = !!this.associatedLayer?.fields?.some((n) => n && e.name === n.name), o = { supportsLabelingInfo: t, supportsRenderer: t, supportsPopupTemplate: t || s, supportsLayerQuery: s };
      this._fieldUsageInfo[e.name] = o;
    }
  }
  _applyAssociatedLayerOverrides() {
    this._applyAssociatedLayerFieldsOverrides(), this._applyAssociatedLayerPopupOverrides(), this._applyAssociatedLayerExtentOverride(), this._applyAssociatedLayerPrivileges();
  }
  _applyAssociatedLayerFieldsOverrides() {
    if (!this.associatedLayer?.fields) return;
    let e = null;
    for (const t of this.associatedLayer.fields) {
      const s = this.getField(t.name);
      s ? (!s.domain && t.domain && (s.domain = t.domain.clone()), s.editable = t.editable, s.nullable = t.nullable, s.length = t.length) : (e || (e = this.fields ? this.fields.slice() : []), e.push(t.clone()));
    }
    e && this._set("fields", e);
  }
  _applyAssociatedLayerPopupOverrides() {
    if (!this.associatedLayer) return;
    const e = ["popupTemplate", "popupEnabled"], t = z(this);
    for (let s = 0; s < e.length; s++) {
      const o = e[s], n = this.originIdOf(o), l = this.associatedLayer.originIdOf(o);
      n < l && (l === A.SERVICE || l === A.PORTAL_ITEM) && t.setAtOrigin(o, this.associatedLayer[o], l);
    }
  }
  _applyAssociatedLayerExtentOverride() {
    const e = this.associatedLayer?.getAtOrigin("fullExtent", "service");
    V() && this.associatedLayer?.infoFor3D != null && e && J(this.associatedLayer?.url) && Y(this) && z(this).setAtOrigin("fullExtent", e.clone(), A.SERVICE);
  }
  _applyAssociatedLayerPrivileges() {
    const e = this.associatedLayer;
    e && (this._set("userHasEditingPrivileges", e.userHasEditingPrivileges), this._set("userHasFullEditingPrivileges", e.userHasFullEditingPrivileges), this._set("userHasUpdateItemPrivileges", e.userHasUpdateItemPrivileges));
  }
  async _setAssociatedFeatureLayer(e) {
    if (["mesh-pyramids", "points"].includes(this.profile)) try {
      const { serverUrl: t, layerId: s, portalItem: o } = await Xe(`${this.url}/layers/${this.layerId}`, { sceneLayerItem: this.portalItem, customParameters: this.customParameters, apiKey: this.apiKey, signal: e }), n = await rt.FeatureLayer();
      this.associatedLayer = new n({ url: t, customParameters: this.customParameters, layerId: s, portalItem: o }), await this.associatedLayer.load();
    } catch (t) {
      Ee(t) || this._logWarningOnPopupEnabled();
    }
  }
  async _logWarningOnPopupEnabled() {
    await Ae(() => this.popupEnabled && this.popupTemplate != null);
    const e = `this SceneLayer: ${this.title}`;
    this.attributeStorageInfo == null ? m.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`) : m.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    this.profile === "mesh-pyramids" && W(m.getLogger(this), at("Mesh scene layers", "relative-to-scene", e)), W(m.getLogger(this), ot("Scene layers", e));
  }
  async fetchStatistics(e, t) {
    return await ct({ fieldName: e, statisticsInfo: this.statisticsInfo, errorContext: "scenelayer", fieldsIndex: this.fieldsIndex, path: this.parsedUrl?.path ?? "", customParameters: this.customParameters, apiKey: this.apiKey, signal: t?.signal });
  }
};
r([i({ types: { key: "type", base: Pe, typeMap: { selection: De } }, json: { origins: { "web-scene": { name: "layerDefinition.featureReduction", write: !0 }, "portal-item": { name: "layerDefinition.featureReduction", write: !0 } } } })], a.prototype, "featureReduction", void 0), r([i({ type: [g], json: { read: !1, origins: { "web-scene": { name: "layerDefinition.rangeInfos", write: !0 }, "portal-item": { name: "layerDefinition.rangeInfos", write: !0 } } } })], a.prototype, "rangeInfos", void 0), r([i({ json: { read: !1 } })], a.prototype, "associatedLayer", void 0), r([i({ type: ["show", "hide"] })], a.prototype, "listMode", void 0), r([i({ type: ["ArcGISSceneServiceLayer"] })], a.prototype, "operationalLayerType", void 0), r([i({ json: { read: !1 }, readOnly: !0 })], a.prototype, "type", void 0), r([i({ ...H.fields, readOnly: !0, json: { read: !1, origins: { service: { read: !0 } } } })], a.prototype, "fields", void 0), r([i()], a.prototype, "types", null), r([i()], a.prototype, "typeIdField", null), r([i()], a.prototype, "templates", null), r([i()], a.prototype, "formTemplate", null), r([i({ readOnly: !0, clonable: !1 })], a.prototype, "fieldsIndex", null), r([i({ type: Re, json: { read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo" } } })], a.prototype, "floorInfo", void 0), r([i(H.outFields)], a.prototype, "outFields", void 0), r([i({ type: X, readOnly: !0, json: { read: !1 } })], a.prototype, "nodePages", void 0), r([w("service", "nodePages", ["nodePages", "pointNodePages"])], a.prototype, "readNodePages", null), r([i({ type: [et], readOnly: !0 })], a.prototype, "materialDefinitions", void 0), r([i({ type: [tt], readOnly: !0 })], a.prototype, "textureSetDefinitions", void 0), r([i({ type: [st], readOnly: !0 })], a.prototype, "geometryDefinitions", void 0), r([i({ readOnly: !0 })], a.prototype, "serviceUpdateTimeStamp", void 0), r([i({ readOnly: !0 })], a.prototype, "attributeStorageInfo", void 0), r([i({ readOnly: !0 })], a.prototype, "statisticsInfo", void 0), r([i({ type: U.ofType(Number), nonNullable: !0, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.excludeObjectIds", write: { enabled: !0 } } })], a.prototype, "excludeObjectIds", void 0), r([i({ type: String, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], a.prototype, "definitionExpression", void 0), r([i({ type: ut, json: { name: "layerDefinition.polygonFilter", write: { enabled: !0, allowNull: !0 }, origins: { service: { read: !1, write: !1 } } } })], a.prototype, "filter", void 0), r([i({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], a.prototype, "path", void 0), r([i(Ue)], a.prototype, "elevationInfo", null), r([i({ readOnly: !0, json: { read: !1 } })], a.prototype, "effectiveCapabilities", null), r([i({ readOnly: !0 })], a.prototype, "effectiveEditingEnabled", null), r([i({ type: String })], a.prototype, "geometryType", null), r([i(qe)], a.prototype, "labelsVisible", void 0), r([i({ type: [Ne], json: { origins: { service: { name: "drawingInfo.labelingInfo", read: { reader: K }, write: !1 } }, name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: K }, write: !0 } })], a.prototype, "labelingInfo", void 0), r([i(Ce)], a.prototype, "legendEnabled", void 0), r([i({ type: Number, json: { origins: { "web-document": { default: 1, write: { enabled: !0, target: { opacity: { type: Number }, "layerDefinition.drawingInfo.transparency": { type: Number } } }, read: { source: ["opacity", "layerDefinition.drawingInfo.transparency"], reader(e, t) {
  if (typeof e == "number" && e >= 0 && e <= 1) return e;
  const s = t.layerDefinition?.drawingInfo?.transparency;
  return s !== void 0 ? Ge(s) : void 0;
} } }, "portal-item": { write: !0 }, service: { read: !1 } } } })], a.prototype, "opacity", void 0), r([i({ type: ["Low", "High"], readOnly: !0, json: { read: !1, origins: { service: { read: !0 } } } })], a.prototype, "priority", void 0), r([i({ type: ["Labels"], readOnly: !0, json: { read: !1, origins: { service: { read: !0 } } } })], a.prototype, "semantic", void 0), r([i({ types: ke, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: !0 }, value: null })], a.prototype, "renderer", null), r([i({ json: { read: !1 } })], a.prototype, "cachedDrawingInfo", void 0), r([w("service", "cachedDrawingInfo")], a.prototype, "readCachedDrawingInfo", null), r([i({ readOnly: !0, json: { read: !1 } })], a.prototype, "capabilities", null), r([i({ type: Boolean, json: { read: !1 } })], a.prototype, "editingEnabled", null), r([i({ readOnly: !0, json: { write: !1, read: !1 } })], a.prototype, "infoFor3D", null), r([i({ readOnly: !0, json: { write: !1, read: !1 } })], a.prototype, "relationships", null), r([i(Qe)], a.prototype, "popupEnabled", void 0), r([i({ type: Ve, json: { name: "popupInfo", write: !0 } })], a.prototype, "popupTemplate", void 0), r([i({ readOnly: !0, json: { read: !1 } })], a.prototype, "defaultPopupTemplate", null), r([i({ type: String, json: { read: !1 } })], a.prototype, "objectIdField", void 0), r([w("service", "objectIdField", ["objectIdField", "fields"])], a.prototype, "readObjectIdField", null), r([i({ type: String, json: { read: !1 } })], a.prototype, "globalIdField", void 0), r([w("service", "globalIdField", ["globalIdField", "fields"])], a.prototype, "readGlobalIdField", null), r([i({ readOnly: !0, type: String, json: { read: !1 } })], a.prototype, "displayField", null), r([i({ type: String, json: { read: !1 } })], a.prototype, "profile", void 0), r([w("service", "profile", ["store.profile"])], a.prototype, "readProfile", null), r([i({ readOnly: !0, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: !1 } })], a.prototype, "normalReferenceFrame", void 0), r([i(Je)], a.prototype, "screenSizePerspectiveEnabled", void 0), r([i({ json: { read: !1, origins: { service: { read: !0 } } } })], a.prototype, "serviceItemId", void 0), r([i(ze)], a.prototype, "useViewTime", null), a = r([b("esri.layers.SceneLayer")], a);
const Z = { "mesh-pyramids": "mesh-pyramids", meshpyramids: "mesh-pyramids", "features-meshes": "mesh-pyramids", points: "points", "features-points": "points", lines: "lines", "features-lines": "lines", polygons: "polygons", "features-polygons": "polygons" }, mt = { "mesh-pyramids": "mesh", points: "point" }, xt = a;
export {
  xt as default
};
//# sourceMappingURL=SceneLayer-Z9glnPzV.js.map
