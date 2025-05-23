import { N as s, O as a, P as L, b_ as G, dR as z, V as E, aR as j, bb as B, dA as A, i1 as X, d$ as g, b2 as Y, fi as ee, u as te, a2 as Q, ag as re, gJ as se, ew as ie, dX as ae, dY as oe, dZ as ne, d_ as le, ex as de, ey as pe, dS as ye, cW as ue, gK as ce, g3 as P, jk as x, C as u, a1 as he, t as fe, f5 as ge, s as d, jl as me, ap as ve, g4 as we, aN as be, f2 as R, jm as Ie, jn as Le, a6 as Fe, jo as Se, gn as T, gj as $, K as je, gp as $e, jp as _e, jq as Oe, jr as Ee, eF as Ae, g6 as Pe, g7 as xe, g8 as D, e1 as Re, js as Te, gc as De, ga as qe, Z as Ne, gd as Ue, gf as Ce, e8 as Ge } from "./main-DIdq27YS.js";
import { $ as Qe } from "./Mesh-Bx9m-bEm.js";
import { i as Ve, m as ke } from "./uploadAssetErrors-Dpf3vgLT.js";
import { L as Je, P as q } from "./SceneService-BvxLWDGj.js";
import { m as Ke, s as He } from "./capabilities-B7c1l0bj.js";
import { s as Me } from "./associatedFeatureServiceUtils-oMb_kC5s.js";
import { s as V, l as We, u as Ze, m as ze } from "./I3SLayerDefinitions-Cp73GOpi.js";
import { a as Be } from "./lazyLayerLoader-8kYJdScy.js";
import { j as Xe } from "./persistable-B1aPWqKK.js";
import { I as N, y as Ye, Z as et } from "./elevationInfoUtils-DE1x05p-.js";
import { $ as tt } from "./I3SUtil-A6CA1kK5.js";
import { n as rt, p as st } from "./popupUtils-DTsCV5Up.js";
let c = class extends G {
  constructor() {
    super(...arguments), this.name = null, this.field = null, this.currentRangeExtent = null, this.fullRangeExtent = null, this.type = "rangeInfo";
  }
};
s([a({ type: String, json: { read: !0, write: !0 } })], c.prototype, "name", void 0), s([a({ type: String, json: { read: !0, write: !0 } })], c.prototype, "field", void 0), s([a({ type: [Number], json: { read: !0, write: !0 } })], c.prototype, "currentRangeExtent", void 0), s([a({ type: [Number], json: { read: !0, write: !0 } })], c.prototype, "fullRangeExtent", void 0), s([a({ type: ["rangeInfo"], readOnly: !0, json: { read: !1, write: !0 } })], c.prototype, "type", void 0), c = s([L("esri.layers.support.RangeInfo")], c);
var b;
let _ = b = class extends z(E.ofType(j)) {
  constructor(e) {
    super(e);
  }
  clone() {
    return new b(this.items.map((e) => e.clone()));
  }
  write(e, t) {
    return this.toJSON(t);
  }
  toJSON(e) {
    const t = e?.layer?.spatialReference;
    return t ? this.toArray().map((r) => {
      if (!t.equals(r.spatialReference)) {
        if (!B(r.spatialReference, t)) return e?.messages && e.messages.push(new A("scenefilter:unsupported", "Scene filters with incompatible spatial references are not supported", { modification: this, spatialReference: e.layer.spatialReference, context: e })), null;
        const n = new j();
        X(r, n, t), r = n;
      }
      const o = r.toJSON(e);
      return delete o.spatialReference, o;
    }).filter((r) => r != null) : (e?.messages && e.messages.push(new A("scenefilter:unsupported", "Writing Scene filters without context layer is not supported", { modification: this, spatialReference: e.layer.spatialReference, context: e })), this.toArray().map((r) => r.toJSON(e)));
  }
  static fromJSON(e, t) {
    const r = new b();
    return e.forEach((o) => r.add(j.fromJSON(o, t))), r;
  }
};
_ = b = s([L("esri.layers.support.PolygonCollection")], _);
const I = _;
var O;
let m = O = class extends G {
  constructor(e) {
    super(e), this.spatialRelationship = "disjoint", this.geometries = new I(), this._geometriesSource = null;
  }
  initialize() {
    this.addHandles(Y(() => this.geometries, "after-changes", () => this.geometries = this.geometries, ee));
  }
  readGeometries(e, t, r) {
    Array.isArray(e) ? this.geometries = I.fromJSON(e, r) : this._geometriesSource = { url: te(e, r), context: r };
  }
  async loadGeometries(e, t) {
    if (this._geometriesSource == null) return;
    const { url: r, context: o } = this._geometriesSource, n = await Q(r, { responseType: "json", signal: t?.signal }), l = e.toJSON(), p = n.data.map((y) => ({ ...y, spatialReference: l }));
    this.geometries = I.fromJSON(p, o), this._geometriesSource = null;
  }
  clone() {
    const e = new O({ geometries: re(this.geometries), spatialRelationship: this.spatialRelationship });
    return e._geometriesSource = this._geometriesSource, e;
  }
};
s([a({ type: ["disjoint", "contains"], nonNullable: !0, json: { write: !0 } })], m.prototype, "spatialRelationship", void 0), s([a({ type: I, nonNullable: !0, json: { write: !0 } }), Xe({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "geometries", contentAddressed: !0 })], m.prototype, "geometries", void 0), s([g(["web-scene", "portal-item"], "geometries")], m.prototype, "readGeometries", null), m = O = s([L("esri.layers.support.SceneFilter")], m);
const it = m;
async function at(e) {
  const t = [];
  for (const r of e) r.name.toLowerCase().endsWith(".zip") ? t.push(ot(r)) : t.push(Promise.resolve(r));
  return (await Promise.all(t)).flat();
}
async function ot(e) {
  const { BlobReader: t, ZipReader: r, BlobWriter: o } = await import("./zipjs-wrapper-DcmT01sW.js"), n = [];
  return (await new r(new t(e)).getEntries()).forEach((p) => {
    if (p.directory || /^__MACOS/i.test(p.filename)) return;
    const y = new o(), f = p.getData?.(y).then((v) => new File([v], p.filename));
    f && n.push(f);
  }), Promise.all(n);
}
const nt = /* @__PURE__ */ new Set(["3DObject", "Point"]), U = Ce();
let i = class extends Ke(se(Je(ie(ae(oe(ne(le(de(pe(ye(Ge))))))))))) {
  constructor(...e) {
    super(...e), this.featureReduction = null, this.rangeInfos = null, this.operationalLayerType = "ArcGISSceneServiceLayer", this.type = "scene", this.fields = null, this.floorInfo = null, this.outFields = null, this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.excludeObjectIds = new E(), this.definitionExpression = null, this.filter = null, this.path = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.priority = null, this.semantic = null, this.cachedDrawingInfo = { color: !1 }, this.popupEnabled = !0, this.popupTemplate = null, this.objectIdField = null, this.globalIdField = null, this._fieldUsageInfo = {}, this.screenSizePerspectiveEnabled = !0, this.serviceItemId = void 0;
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
    const r = this.getFeatureType(t?.feature)?.domains?.[e];
    return r && r.type !== "inherited" ? r : this.getField(e)?.domain ?? null;
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
    return new ue(this.fields);
  }
  readNodePages(e, t, r) {
    return t.layerType === "Point" && (e = t.pointNodePages), e == null || typeof e != "object" ? null : V.fromJSON(e, r);
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this.loaded && this._validateElevationInfo();
  }
  get effectiveCapabilities() {
    return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities);
  }
  get effectiveEditingEnabled() {
    return this.associatedLayer != null && ce(this.associatedLayer);
  }
  get geometryType() {
    return lt[this.profile] || "mesh";
  }
  set renderer(e) {
    P(e, this.fieldsIndex), this._set("renderer", e);
  }
  readCachedDrawingInfo(e) {
    return e != null && typeof e == "object" || (e = {}), e.color == null && (e.color = !1), e;
  }
  get capabilities() {
    return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities);
  }
  _capabilitiesFromAssociatedFeatureLayer(e) {
    e = e ?? He;
    const { query: t, queryRelated: r, editing: { supportsGlobalId: o, supportsRollbackOnFailure: n, supportsUploadWithItemId: l, supportsGeometryUpdate: p, supportsReturnServiceEditsInSourceSpatialReference: y }, data: { supportsZ: f, supportsM: v, isVersioned: h, supportsAttachment: F }, operations: { supportsEditing: k, supportsAdd: J, supportsUpdate: K, supportsDelete: H, supportsQuery: M, supportsQueryAttachments: W, supportsAsyncConvert3D: Z } } = e, w = e.operations.supportsChangeTracking, S = !!this.associatedLayer?.infoFor3D && x();
    return { query: t, queryRelated: r, editing: { supportsGlobalId: o, supportsReturnServiceEditsInSourceSpatialReference: y, supportsRollbackOnFailure: n, supportsGeometryUpdate: S && p, supportsUploadWithItemId: l }, data: { supportsAttachment: F, supportsZ: f, supportsM: v, isVersioned: h }, operations: { supportsQuery: M, supportsQueryAttachments: W, supportsEditing: k && w, supportsAdd: S && J && w, supportsDelete: S && H && w, supportsUpdate: K && w, supportsAsyncConvert3D: Z } };
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
    return !e && t.fields && t.fields.some((r) => (r.type === "esriFieldTypeOID" && (e = r.name), !!e)), e || void 0;
  }
  readGlobalIdField(e, t) {
    return !e && t.fields && t.fields.some((r) => (r.type === "esriFieldTypeGlobalID" && (e = r.name), !!e)), e || void 0;
  }
  get displayField() {
    return this.associatedLayer?.displayField ?? null;
  }
  readProfile(e, t) {
    const r = t.store.profile;
    return r != null && C[r] ? C[r] : (u.getLogger(this).error("Unknown or missing profile", { profile: r, layer: this }), "mesh-pyramids");
  }
  load(e) {
    return this.addResolvingPromise(this._load(e)), Promise.resolve(this);
  }
  async _load(e) {
    const t = e != null ? e.signal : null;
    await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(he), await this._fetchService(t), await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages, t), this._setAssociatedFeatureLayer(t), this._loadFilterGeometries()]), this._validateElevationInfo(), this._applyAssociatedLayerOverrides(), this._populateFieldUsageInfo(), await fe(this, { origin: "service" }, t), P(this.renderer, this.fieldsIndex), await this.finishLoadEditablePortalLayer(e);
  }
  async beforeSave() {
    this.filter != null && (this.filter = this.filter.clone(), await this.load());
  }
  async _loadFilterGeometries() {
    if (this.filter) try {
      await this.filter.loadGeometries(this.spatialReference);
    } catch (e) {
      u.getLogger(this).error("#_loadFilterGeometries()", this, "Failed to load filter geometries. Geometry filter will not be applied for this layer.", { error: e }), this.filter = null;
    }
  }
  createQuery() {
    const e = new ge();
    return this.geometryType !== "mesh" && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e.outFields = ["*"], e;
  }
  queryExtent(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryExtent(e || this.createQuery(), t));
  }
  queryFeatureCount(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryFeatureCount(e || this.createQuery(), t));
  }
  queryFeatures(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryFeatures(e || this.createQuery(), t)).then((r) => {
      if (r?.features) for (const o of r.features) o.layer = this, o.sourceLayer = this;
      return r;
    });
  }
  async queryRelatedFeatures(e, t) {
    if (await this.load(), !this.associatedLayer) throw new d("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    return this.associatedLayer.queryRelatedFeatures(e, t);
  }
  async queryRelatedFeaturesCount(e, t) {
    if (await this.load(), !this.associatedLayer) throw new d("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    return this.associatedLayer.queryRelatedFeaturesCount(e, t);
  }
  async queryCachedAttributes(e, t) {
    const r = me(this.fieldsIndex, await rt(this, st(this)));
    return tt(this.parsedUrl.path, this.attributeStorageInfo ?? [], e, t, r, this.apiKey, this.customParameters);
  }
  async queryCachedFeature(e, t) {
    const r = await this.queryCachedAttributes(e, [t]);
    if (!r || r.length === 0) throw new d("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
    const o = new ve();
    return o.attributes = r[0], o.layer = this, o.sourceLayer = this, o;
  }
  queryObjectIds(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryObjectIds(e || this.createQuery(), t));
  }
  queryAttachments(e, t) {
    return this._getAssociatedLayerForQuery().then((r) => r.queryAttachments(e, t));
  }
  getFieldUsageInfo(e) {
    const t = { supportsLabelingInfo: !1, supportsRenderer: !1, supportsPopupTemplate: !1, supportsLayerQuery: !1 };
    return this.loaded ? this._fieldUsageInfo[e] || t : (u.getLogger(this).error("#getFieldUsageInfo()", "Unavailable until layer is loaded"), t);
  }
  createPopupTemplate(e) {
    return we(this, e);
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return e?.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), !this.associatedLayer) throw new d("scenelayer:query-not-available", "SceneLayer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new d("scenelayer:query-not-available", "SceneLayer associated feature layer could not be loaded", { layer: this, error: e });
    }
    return this.associatedLayer;
  }
  hasCachedStatistics(e) {
    return this.statisticsInfo != null && this.statisticsInfo.some((t) => t.name === e);
  }
  async queryCachedStatistics(e, t) {
    if (await this.load(t), !this.statisticsInfo) throw new d("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const r = this.fieldsIndex.get(e);
    if (!r) throw new d("scenelayer:field-unexisting", `Field '${e}' does not exist on the layer`);
    for (const o of this.statisticsInfo) if (o.name === r.name) {
      const n = be(this.parsedUrl.path, o.href);
      return Q(n, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t ? t.signal : null }).then((l) => l.data);
    }
    throw new d("scenelayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(q.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "scene" };
    return this._debouncedSaveOperations(q.SAVE, e);
  }
  async applyEdits(e, t) {
    const { applyEdits: r } = await import("./editingSupport-BY705Ef0.js");
    let o = t;
    await this.load();
    const n = this.associatedLayer;
    if (!n) throw new d(`${this.type}-layer:not-editable`, "Service is not editable");
    await n.load();
    const { globalIdField: l } = n, p = !!n.infoFor3D, y = o?.globalIdUsed ?? !0;
    if (p && l == null) throw new d(`${this.type}-layer:not-editable`, "Valid globalIdField expected on editable SceneLayer");
    if (p && !y) throw new d(`${this.type}-layer:globalid-required`, "globalIdUsed must not be false for SceneLayer editing as globalIds are required.");
    return R(n.url) && p && e.deleteFeatures != null && l != null && (o = { ...o, globalIdToObjectId: await Ie(n, e.deleteFeatures, l) }), r(this, n.source, e, o);
  }
  async uploadAssets(e, t) {
    if (await this.load(), this.associatedLayer == null) throw new d(`${this.type}-layer:not-editable`, "Service is not editable");
    return await this.associatedLayer.load(), this.associatedLayer.uploadAssets(e, t);
  }
  on(e, t) {
    return super.on(e, t);
  }
  async convertMesh(e, t) {
    const r = (h) => {
      throw u.getLogger(this).error(".convertMesh()", h.message), h;
    };
    await this.load(), this.infoFor3D || r(new d("invalid:layer", "SceneLayer has no capability for mesh conversion"));
    const o = await this.extractAndFilterFiles(e), n = o.reduce((h, F) => Le(this.infoFor3D, F) ? h + 1 : h, 0);
    n === 0 && r(new Ve()), n > 1 && r(new ke());
    const l = this.spatialReference, p = t?.location ?? new Fe({ x: 0, y: 0, z: 0, spatialReference: l }), y = p.spatialReference.isGeographic ? "local" : "georeferenced", f = Qe.createWithExternalSource(p, o, { vertexSpace: y }), [v] = await this.uploadAssets([f], t);
    return v;
  }
  async extractAndFilterFiles(e) {
    await this.load();
    const t = this.infoFor3D;
    return t ? (await at(e)).filter((r) => Se(t, r)) : e;
  }
  validateLayer(e) {
    if (e.layerType && !nt.has(e.layerType)) throw new d("scenelayer:layer-type-not-supported", "SceneLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new d("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    if (this.version.major > 2) throw new d("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x, 2.x" });
    function t(r, o) {
      let n = !1, l = !1;
      if (r == null) n = !0, l = !0;
      else {
        const p = o && o.isGeographic;
        switch (r) {
          case "east-north-up":
          case "earth-centered":
            n = !0, l = p;
            break;
          case "vertex-reference-frame":
            n = !0, l = !p;
            break;
          default:
            n = !1;
        }
      }
      if (!n) throw new d("scenelayer:unsupported-normal-reference-frame", "Normal reference frame is invalid.");
      if (!l) throw new d("scenelayer:incompatible-normal-reference-frame", "Normal reference frame is incompatible with layer spatial reference.");
    }
    t(this.normalReferenceFrame, this.spatialReference);
  }
  _getTypeKeywords() {
    const e = [];
    if (this.profile === "points") e.push("Point");
    else {
      if (this.profile !== "mesh-pyramids") throw new d("scenelayer:unknown-profile", "SceneLayer:save() encountered an unknown SceneLayer profile: " + this.profile);
      e.push("3DObject");
    }
    return e;
  }
  _populateFieldUsageInfo() {
    if (this._fieldUsageInfo = {}, this.fields) for (const e of this.fields) {
      const t = !(!this.attributeStorageInfo || !this.attributeStorageInfo.some((n) => n.name === e.name)), r = !!this.associatedLayer?.fields?.some((n) => n && e.name === n.name), o = { supportsLabelingInfo: t, supportsRenderer: t, supportsPopupTemplate: t || r, supportsLayerQuery: r };
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
      const r = this.getField(t.name);
      r ? (!r.domain && t.domain && (r.domain = t.domain.clone()), r.editable = t.editable, r.nullable = t.nullable, r.length = t.length) : (e || (e = this.fields ? this.fields.slice() : []), e.push(t.clone()));
    }
    e && this._set("fields", e);
  }
  _applyAssociatedLayerPopupOverrides() {
    if (!this.associatedLayer) return;
    const e = ["popupTemplate", "popupEnabled"], t = T(this);
    for (let r = 0; r < e.length; r++) {
      const o = e[r], n = this.originIdOf(o), l = this.associatedLayer.originIdOf(o);
      n < l && (l === $.SERVICE || l === $.PORTAL_ITEM) && t.setAtOrigin(o, this.associatedLayer[o], l);
    }
  }
  _applyAssociatedLayerExtentOverride() {
    const e = this.associatedLayer?.editingInfo?.lastEditDate, t = this.associatedLayer?.serverGens, r = this.associatedLayer?.getAtOrigin("fullExtent", "service");
    !x() || this.associatedLayer?.infoFor3D == null || !r || !R(this.associatedLayer?.url) || !e || this.serviceUpdateTimeStamp?.lastUpdate === e.getTime() || !this.serviceUpdateTimeStamp && t?.minServerGen === t?.serverGen || T(this).setAtOrigin("fullExtent", r.clone(), $.SERVICE);
  }
  _applyAssociatedLayerPrivileges() {
    const e = this.associatedLayer;
    e && (this._set("userHasEditingPrivileges", e.userHasEditingPrivileges), this._set("userHasFullEditingPrivileges", e.userHasFullEditingPrivileges), this._set("userHasUpdateItemPrivileges", e.userHasUpdateItemPrivileges));
  }
  async _setAssociatedFeatureLayer(e) {
    if (["mesh-pyramids", "points"].includes(this.profile)) try {
      const { serverUrl: t, layerId: r, portalItem: o } = await Me(`${this.url}/layers/${this.layerId}`, { sceneLayerItem: this.portalItem, customParameters: this.customParameters, apiKey: this.apiKey, signal: e }), n = await Be.FeatureLayer();
      this.associatedLayer = new n({ url: t, customParameters: this.customParameters, layerId: r, portalItem: o }), await this.associatedLayer.load();
    } catch (t) {
      je(t) || this._logWarningOnPopupEnabled();
    }
  }
  async _logWarningOnPopupEnabled() {
    await $e(() => this.popupEnabled && this.popupTemplate != null);
    const e = `this SceneLayer: ${this.title}`;
    this.attributeStorageInfo == null ? u.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`) : u.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`);
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    this.profile === "mesh-pyramids" && N(u.getLogger(this), Ye("Mesh scene layers", "relative-to-scene", e)), N(u.getLogger(this), et("Scene layers", e));
  }
};
s([a({ types: { key: "type", base: _e, typeMap: { selection: Oe } }, json: { origins: { "web-scene": { name: "layerDefinition.featureReduction", write: !0 }, "portal-item": { name: "layerDefinition.featureReduction", write: !0 } } } })], i.prototype, "featureReduction", void 0), s([a({ type: [c], json: { read: !1, origins: { "web-scene": { name: "layerDefinition.rangeInfos", write: !0 }, "portal-item": { name: "layerDefinition.rangeInfos", write: !0 } } } })], i.prototype, "rangeInfos", void 0), s([a({ json: { read: !1 } })], i.prototype, "associatedLayer", void 0), s([a({ type: ["show", "hide"] })], i.prototype, "listMode", void 0), s([a({ type: ["ArcGISSceneServiceLayer"] })], i.prototype, "operationalLayerType", void 0), s([a({ json: { read: !1 }, readOnly: !0 })], i.prototype, "type", void 0), s([a({ ...U.fields, readOnly: !0, json: { read: !1, origins: { service: { read: !0 } } } })], i.prototype, "fields", void 0), s([a()], i.prototype, "types", null), s([a()], i.prototype, "typeIdField", null), s([a()], i.prototype, "templates", null), s([a()], i.prototype, "formTemplate", null), s([a({ readOnly: !0, clonable: !1 })], i.prototype, "fieldsIndex", null), s([a({ type: Ee, json: { read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo" } } })], i.prototype, "floorInfo", void 0), s([a(U.outFields)], i.prototype, "outFields", void 0), s([a({ type: V, readOnly: !0, json: { read: !1 } })], i.prototype, "nodePages", void 0), s([g("service", "nodePages", ["nodePages", "pointNodePages"])], i.prototype, "readNodePages", null), s([a({ type: [We], readOnly: !0 })], i.prototype, "materialDefinitions", void 0), s([a({ type: [Ze], readOnly: !0 })], i.prototype, "textureSetDefinitions", void 0), s([a({ type: [ze], readOnly: !0 })], i.prototype, "geometryDefinitions", void 0), s([a({ readOnly: !0 })], i.prototype, "serviceUpdateTimeStamp", void 0), s([a({ readOnly: !0 })], i.prototype, "attributeStorageInfo", void 0), s([a({ readOnly: !0 })], i.prototype, "statisticsInfo", void 0), s([a({ type: E.ofType(Number), nonNullable: !0, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.excludeObjectIds", write: { enabled: !0 } } })], i.prototype, "excludeObjectIds", void 0), s([a({ type: String, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), s([a({ type: it, json: { name: "layerDefinition.polygonFilter", write: { enabled: !0, allowNull: !0 }, origins: { service: { read: !1, write: !1 } } } })], i.prototype, "filter", void 0), s([a({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], i.prototype, "path", void 0), s([a(Ae)], i.prototype, "elevationInfo", null), s([a({ readOnly: !0, json: { read: !1 } })], i.prototype, "effectiveCapabilities", null), s([a({ readOnly: !0 })], i.prototype, "effectiveEditingEnabled", null), s([a({ type: String })], i.prototype, "geometryType", null), s([a(Pe)], i.prototype, "labelsVisible", void 0), s([a({ type: [xe], json: { origins: { service: { name: "drawingInfo.labelingInfo", read: { reader: D }, write: !1 } }, name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: D }, write: !0 } })], i.prototype, "labelingInfo", void 0), s([a(Re)], i.prototype, "legendEnabled", void 0), s([a({ type: Number, json: { origins: { "web-document": { default: 1, write: { enabled: !0, target: { opacity: { type: Number }, "layerDefinition.drawingInfo.transparency": { type: Number } } }, read: { source: ["opacity", "layerDefinition.drawingInfo.transparency"], reader(e, t) {
  if (typeof e == "number" && e >= 0 && e <= 1) return e;
  const r = t.layerDefinition?.drawingInfo?.transparency;
  return r !== void 0 ? Te(r) : void 0;
} } }, "portal-item": { write: !0 }, service: { read: !1 } } } })], i.prototype, "opacity", void 0), s([a({ type: ["Low", "High"], readOnly: !0, json: { read: !1, origins: { service: { read: !0 } } } })], i.prototype, "priority", void 0), s([a({ type: ["Labels"], readOnly: !0, json: { read: !1, origins: { service: { read: !0 } } } })], i.prototype, "semantic", void 0), s([a({ types: De, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: !0 }, value: null })], i.prototype, "renderer", null), s([a({ json: { read: !1 } })], i.prototype, "cachedDrawingInfo", void 0), s([g("service", "cachedDrawingInfo")], i.prototype, "readCachedDrawingInfo", null), s([a({ readOnly: !0, json: { read: !1 } })], i.prototype, "capabilities", null), s([a({ type: Boolean, json: { read: !1 } })], i.prototype, "editingEnabled", null), s([a({ readOnly: !0, json: { write: !1, read: !1 } })], i.prototype, "infoFor3D", null), s([a({ readOnly: !0, json: { write: !1, read: !1 } })], i.prototype, "relationships", null), s([a(qe)], i.prototype, "popupEnabled", void 0), s([a({ type: Ne, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), s([a({ readOnly: !0, json: { read: !1 } })], i.prototype, "defaultPopupTemplate", null), s([a({ type: String, json: { read: !1 } })], i.prototype, "objectIdField", void 0), s([g("service", "objectIdField", ["objectIdField", "fields"])], i.prototype, "readObjectIdField", null), s([a({ type: String, json: { read: !1 } })], i.prototype, "globalIdField", void 0), s([g("service", "globalIdField", ["globalIdField", "fields"])], i.prototype, "readGlobalIdField", null), s([a({ readOnly: !0, type: String, json: { read: !1 } })], i.prototype, "displayField", null), s([a({ type: String, json: { read: !1 } })], i.prototype, "profile", void 0), s([g("service", "profile", ["store.profile"])], i.prototype, "readProfile", null), s([a({ readOnly: !0, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: !1 } })], i.prototype, "normalReferenceFrame", void 0), s([a(Ue)], i.prototype, "screenSizePerspectiveEnabled", void 0), s([a({ json: { read: !1, origins: { service: { read: !0 } } } })], i.prototype, "serviceItemId", void 0), i = s([L("esri.layers.SceneLayer")], i);
const C = { "mesh-pyramids": "mesh-pyramids", meshpyramids: "mesh-pyramids", "features-meshes": "mesh-pyramids", points: "points", "features-points": "points", lines: "lines", "features-lines": "lines", polygons: "polygons", "features-polygons": "polygons" }, lt = { "mesh-pyramids": "mesh", points: "point", lines: "polyline", polygons: "polygon" }, It = i;
export {
  It as default
};
//# sourceMappingURL=SceneLayer-DCNViIxy.js.map
