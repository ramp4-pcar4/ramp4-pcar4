import { e1 as ue, O as t, P as r, e9 as F, g$ as de, mL as _, Q as l, mM as ce, fa as Y, k8 as ee, df as he, eJ as te, D as I, gA as ge, $ as re, fn as me, l0 as fe, s as x, aj as be, b8 as ve, bx as se, g_ as Se, gI as we, gG as $e, W as Oe, dY as ie, f9 as Ie, gL as xe, V as b, dL as Fe, mN as Le, bX as g, aa as d, mO as je, dZ as Te, ej as Be, e5 as Ae, e6 as Ee, e7 as Pe, e8 as _e, ek as qe, el as Ne, bR as Re, b1 as ke, _ as Me, gQ as Qe, mP as Ue, eb as Ce, er as De, ei as Ke } from "./main-uCo5F72j.js";
import { s as Ve } from "./capabilities-xlBnI7Aq.js";
import { r as Ze, L as Je, C as Z } from "./SceneService-DuGwx6qA.js";
import { p as He, a as Ge, y as We, m as Xe } from "./I3SLayerDefinitions-Cc8DKbQ_.js";
import { $ as ze } from "./I3SUtil-cz_q-URu.js";
import { n as Ye, p as et } from "./popupUtils-wEufgE8s.js";
import { s as tt } from "./associatedFeatureServiceUtils-C6b35psm.js";
import { $ as J, Z as rt, w as st } from "./elevationInfoUtils-CjgInv_k.js";
let p = class extends ue(ce) {
  constructor(s) {
    super(s), this.title = "", this.id = -1, this.modelName = null, this.isEmpty = null, this.legendEnabled = !0, this.visible = !0, this.opacity = 1;
  }
  readTitle(s, i) {
    return typeof i.alias == "string" ? i.alias : typeof i.name == "string" ? i.name : "";
  }
  readIdOnlyOnce(s) {
    return this.id !== -1 ? this.id : typeof s == "number" ? s : -1;
  }
};
t([r({ type: String, json: { origins: { "web-scene": { write: !0 }, "portal-item": { write: !0 } } } })], p.prototype, "title", void 0), t([F("service", "title", ["alias", "name"])], p.prototype, "readTitle", null), t([r()], p.prototype, "layer", void 0), t([r({ type: de, readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0 } } })], p.prototype, "id", void 0), t([F("service", "id")], p.prototype, "readIdOnlyOnce", null), t([r(_(String))], p.prototype, "modelName", void 0), t([r(_(Boolean))], p.prototype, "isEmpty", void 0), t([r({ type: Boolean, nonNullable: !0 })], p.prototype, "legendEnabled", void 0), t([r({ type: Boolean, json: { name: "visibility", write: !0 } })], p.prototype, "visible", void 0), t([r({ type: Number, json: { write: !0 } })], p.prototype, "opacity", void 0), p = t([l("esri.layers.buildingSublayers.BuildingSublayer")], p);
const oe = p, H = xe();
let o = class extends Y.LoadableMixin(ee(oe)) {
  constructor(e) {
    super(e), this.type = "building-component", this.nodePages = null, this.materialDefinitions = [], this.textureSetDefinitions = [], this.geometryDefinitions = [], this.indexInfo = null, this.serviceUpdateTimeStamp = null, this.store = null, this.attributeStorageInfo = [], this.fields = [], this.associatedLayer = null, this.outFields = null, this.listMode = "show", this.renderer = null, this.definitionExpression = null, this.popupEnabled = !0, this.popupTemplate = null, this.layerType = "3d-object";
  }
  get parsedUrl() {
    return this.layer ? { path: `${this.layer.parsedUrl?.path}/sublayers/${this.id}`, query: this.layer.parsedUrl?.query } : { path: "" };
  }
  get fieldsIndex() {
    return new he(this.fields);
  }
  readAssociatedLayer(e, s) {
    const i = this.layer.associatedFeatureServiceItem, a = s.associatedLayerID;
    return i != null && typeof a == "number" ? new te({ portalItem: i, customParameters: this.customParameters, layerId: a }) : null;
  }
  get objectIdField() {
    if (this.fields != null) {
      for (const e of this.fields) if (e.type === "oid") return e.name;
    }
    return null;
  }
  get displayField() {
    return this.associatedLayer != null ? this.associatedLayer.displayField : void 0;
  }
  get apiKey() {
    return this.layer.apiKey;
  }
  get customParameters() {
    return this.layer.customParameters;
  }
  get fullExtent() {
    return this.layer.fullExtent;
  }
  get spatialReference() {
    return this.layer.spatialReference;
  }
  get version() {
    return this.layer.version;
  }
  get elevationInfo() {
    return this.layer.elevationInfo;
  }
  get minScale() {
    return this.layer.minScale;
  }
  get maxScale() {
    return this.layer.maxScale;
  }
  get effectiveScaleRange() {
    return this.layer.effectiveScaleRange;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  load(e) {
    const s = e != null ? e.signal : null, i = this._fetchService(s).then(() => {
      this.indexInfo = Ze(this.parsedUrl.path, this.rootNode, this.nodePages, this.customParameters, this.apiKey, I.getLogger(this), s);
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    return ge(this, e);
  }
  async _fetchService(e) {
    const s = (await re(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e })).data;
    this.read(s, { origin: "service", url: this.parsedUrl });
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, s) {
    const i = this.getFeatureType(s?.feature)?.domains?.[e];
    return i && i.type !== "inherited" ? i : this.getField(e)?.domain ?? null;
  }
  getFeatureType(e) {
    return e && this.associatedLayer != null ? this.associatedLayer.getFeatureType(e) : null;
  }
  get types() {
    return this.associatedLayer != null ? this.associatedLayer.types ?? [] : [];
  }
  get typeIdField() {
    return this.associatedLayer != null ? this.associatedLayer.typeIdField : null;
  }
  get geometryType() {
    return this.layerType === "3d-object" ? "mesh" : "point";
  }
  get profile() {
    return this.layerType === "3d-object" ? "mesh-pyramids" : "points";
  }
  get capabilities() {
    const e = this.associatedLayer != null && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : Ve, { query: s, data: { supportsZ: i, supportsM: a, isVersioned: y } } = e;
    return { query: s, data: { supportsZ: i, supportsM: a, isVersioned: y } };
  }
  createQuery() {
    const e = new me();
    return this.geometryType !== "mesh" && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
  }
  queryExtent(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryExtent(e || this.createQuery(), s));
  }
  queryFeatureCount(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryFeatureCount(e || this.createQuery(), s));
  }
  queryFeatures(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryFeatures(e || this.createQuery(), s)).then((i) => {
      if (i?.features) for (const a of i.features) a.layer = this.layer, a.sourceLayer = this;
      return i;
    });
  }
  queryObjectIds(e, s) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryObjectIds(e || this.createQuery(), s));
  }
  async queryCachedAttributes(e, s) {
    const i = fe(this.fieldsIndex, await Ye(this, et(this)));
    return ze(this.parsedUrl.path, this.attributeStorageInfo, e, s, i, this.apiKey, this.customParameters);
  }
  async queryCachedFeature(e, s) {
    const i = await this.queryCachedAttributes(e, [s]);
    if (!i || i.length === 0) throw new x("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
    return new be({ attributes: i[0], layer: this, sourceLayer: this });
  }
  getFieldUsageInfo(e) {
    return this.fieldsIndex.has(e) ? { supportsLabelingInfo: !1, supportsRenderer: !1, supportsPopupTemplate: !1, supportsLayerQuery: !1 } : { supportsLabelingInfo: !1, supportsRenderer: !0, supportsPopupTemplate: !0, supportsLayerQuery: this.associatedLayer != null };
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return e != null && e.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), this.associatedLayer == null) throw new x("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new x("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", { layer: this, error: e });
    }
    return this.associatedLayer;
  }
};
t([r({ readOnly: !0 })], o.prototype, "parsedUrl", null), t([r({ type: He, readOnly: !0 })], o.prototype, "nodePages", void 0), t([r({ type: [Ge], readOnly: !0 })], o.prototype, "materialDefinitions", void 0), t([r({ type: [We], readOnly: !0 })], o.prototype, "textureSetDefinitions", void 0), t([r({ type: [Xe], readOnly: !0 })], o.prototype, "geometryDefinitions", void 0), t([r({ readOnly: !0 })], o.prototype, "serviceUpdateTimeStamp", void 0), t([r({ readOnly: !0 })], o.prototype, "store", void 0), t([r({ type: String, readOnly: !0, json: { read: { source: "store.rootNode" } } })], o.prototype, "rootNode", void 0), t([r({ readOnly: !0 })], o.prototype, "attributeStorageInfo", void 0), t([r(H.fields)], o.prototype, "fields", void 0), t([r({ readOnly: !0 })], o.prototype, "fieldsIndex", null), t([r({ readOnly: !0, type: te })], o.prototype, "associatedLayer", void 0), t([F("service", "associatedLayer", ["associatedLayerID"])], o.prototype, "readAssociatedLayer", null), t([r(H.outFields)], o.prototype, "outFields", void 0), t([r({ type: String, readOnly: !0 })], o.prototype, "objectIdField", null), t([r({ readOnly: !0, type: String, json: { read: !1 } })], o.prototype, "displayField", null), t([r({ readOnly: !0, type: String })], o.prototype, "apiKey", null), t([r({ readOnly: !0, type: String })], o.prototype, "customParameters", null), t([r({ readOnly: !0, type: ve })], o.prototype, "fullExtent", null), t([r({ readOnly: !0, type: se })], o.prototype, "spatialReference", null), t([r({ readOnly: !0 })], o.prototype, "version", null), t([r({ readOnly: !0, type: Se })], o.prototype, "elevationInfo", null), t([r({ readOnly: !0, type: Number })], o.prototype, "minScale", null), t([r({ readOnly: !0, type: Number })], o.prototype, "maxScale", null), t([r({ readOnly: !0, type: Number })], o.prototype, "effectiveScaleRange", null), t([r({ type: ["hide", "show"], json: { write: !0 } })], o.prototype, "listMode", void 0), t([r({ types: we, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: !0 }, value: null })], o.prototype, "renderer", void 0), t([r({ type: String, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], o.prototype, "definitionExpression", void 0), t([r($e)], o.prototype, "popupEnabled", void 0), t([r({ type: Oe, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], o.prototype, "popupTemplate", void 0), t([r({ readOnly: !0, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: !1 } })], o.prototype, "normalReferenceFrame", void 0), t([r({ readOnly: !0, json: { read: !1 } })], o.prototype, "defaultPopupTemplate", null), t([r()], o.prototype, "types", null), t([r()], o.prototype, "typeIdField", null), t([r({ json: { write: !1 } }), ie(new Ie({ "3DObject": "3d-object", Point: "point" }))], o.prototype, "layerType", void 0), t([r()], o.prototype, "geometryType", null), t([r()], o.prototype, "profile", null), t([r({ readOnly: !0, json: { read: !1 } })], o.prototype, "capabilities", null), t([r({ readOnly: !0 })], o.prototype, "statisticsInfo", void 0), o = t([l("esri.layers.buildingSublayers.BuildingComponentSublayer")], o);
const q = o;
var N;
const G = { type: b, readOnly: !0, json: { origins: { service: { read: { source: "sublayers", reader: ae } } }, read: !1 } };
function ae(e, s, i) {
  if (e && Array.isArray(e)) return new b(e.map((a) => {
    const y = it(a);
    if (y) {
      const v = new y();
      return v.read(a, i), v;
    }
    return i?.messages && a && i.messages.push(new Fe("building-scene-layer:unsupported-sublayer-type", "Building scene sublayer of type '" + (a.type || "unknown") + "' are not supported", { definition: a, context: i })), null;
  }));
}
let h = N = class extends oe {
  constructor(e) {
    super(e), this.type = "building-group", this.listMode = "show", this.sublayers = null;
  }
  loadAll() {
    return Le(this, (e) => N.forEachSublayer(this.sublayers, (s) => {
      s.type !== "building-group" && e(s);
    }));
  }
};
function it(e) {
  return e.layerType === "group" ? h : q;
}
t([r({ type: ["hide", "show", "hide-children"], json: { write: !0 } })], h.prototype, "listMode", void 0), t([r(G)], h.prototype, "sublayers", void 0), h = N = t([l("esri.layers.buildingSublayers.BuildingGroupSublayer")], h), function(e) {
  function s(i, a) {
    i.forEach((y) => {
      a(y), y.type === "building-group" && s(y.sublayers, a);
    });
  }
  e.sublayersProperty = G, e.readSublayers = ae, e.forEachSublayer = s;
}(h || (h = {}));
const m = h;
let L = class extends g {
  constructor() {
    super(...arguments), this.type = null;
  }
};
t([r({ type: String, readOnly: !0, json: { write: !0 } })], L.prototype, "type", void 0), L = t([l("esri.layers.support.BuildingFilterAuthoringInfo")], L);
const ne = L;
var R;
let S = R = class extends g {
  constructor() {
    super(...arguments), this.filterType = null, this.filterValues = null;
  }
  clone() {
    return new R({ filterType: this.filterType, filterValues: d(this.filterValues) });
  }
};
t([r({ type: String, json: { write: !0 } })], S.prototype, "filterType", void 0), t([r({ type: [String], json: { write: !0 } })], S.prototype, "filterValues", void 0), S = R = t([l("esri.layers.support.BuildingFilterAuthoringInfoType")], S);
const ot = S;
var k;
const at = b.ofType(ot);
let j = k = class extends g {
  clone() {
    return new k({ filterTypes: d(this.filterTypes) });
  }
};
t([r({ type: at, json: { write: !0 } })], j.prototype, "filterTypes", void 0), j = k = t([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")], j);
const nt = j;
var M;
const lt = b.ofType(nt);
let w = M = class extends ne {
  constructor() {
    super(...arguments), this.type = "checkbox";
  }
  clone() {
    return new M({ filterBlocks: d(this.filterBlocks) });
  }
};
t([r({ type: ["checkbox"] })], w.prototype, "type", void 0), t([r({ type: lt, json: { write: !0 } })], w.prototype, "filterBlocks", void 0), w = M = t([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], w);
const W = w;
let T = class extends g {
};
t([r({ readOnly: !0, json: { read: !1 } })], T.prototype, "type", void 0), T = t([l("esri.layers.support.BuildingFilterMode")], T);
const E = T;
var Q;
let B = Q = class extends E {
  constructor() {
    super(...arguments), this.type = "solid";
  }
  clone() {
    return new Q();
  }
};
t([r({ type: ["solid"], readOnly: !0, json: { write: !0 } })], B.prototype, "type", void 0), B = Q = t([l("esri.layers.support.BuildingFilterModeSolid")], B);
const U = B;
var C;
let $ = C = class extends E {
  constructor() {
    super(...arguments), this.type = "wire-frame", this.edges = null;
  }
  clone() {
    return new C({ edges: d(this.edges) });
  }
};
t([ie({ wireFrame: "wire-frame" })], $.prototype, "type", void 0), t([r(je)], $.prototype, "edges", void 0), $ = C = t([l("esri.layers.support.BuildingFilterModeWireFrame")], $);
const X = $;
var D;
let A = D = class extends E {
  constructor() {
    super(...arguments), this.type = "x-ray";
  }
  clone() {
    return new D();
  }
};
t([r({ type: ["x-ray"], readOnly: !0, json: { write: !0 } })], A.prototype, "type", void 0), A = D = t([l("esri.layers.support.BuildingFilterModeXRay")], A);
const z = A;
var K;
const pt = { nonNullable: !0, types: { key: "type", base: E, typeMap: { solid: U, "wire-frame": X, "x-ray": z } }, json: { read: (e) => {
  switch (e?.type) {
    case "solid":
      return U.fromJSON(e);
    case "wireFrame":
      return X.fromJSON(e);
    case "x-ray":
      return z.fromJSON(e);
    default:
      return;
  }
}, write: { enabled: !0, isRequired: !0 } } };
let f = K = class extends g {
  constructor() {
    super(...arguments), this.filterExpression = null, this.filterMode = new U(), this.title = "";
  }
  clone() {
    return new K({ filterExpression: this.filterExpression, filterMode: d(this.filterMode), title: this.title });
  }
};
t([r({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], f.prototype, "filterExpression", void 0), t([r(pt)], f.prototype, "filterMode", void 0), t([r({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], f.prototype, "title", void 0), f = K = t([l("esri.layers.support.BuildingFilterBlock")], f);
const yt = f;
var V;
const ut = b.ofType(yt);
let c = V = class extends g {
  constructor() {
    super(...arguments), this.description = null, this.filterBlocks = null, this.id = Te(), this.name = null;
  }
  clone() {
    return new V({ description: this.description, filterBlocks: d(this.filterBlocks), id: this.id, name: this.name, filterAuthoringInfo: d(this.filterAuthoringInfo) });
  }
};
t([r({ type: String, json: { write: !0 } })], c.prototype, "description", void 0), t([r({ type: ut, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "filterBlocks", void 0), t([r({ types: { key: "type", base: ne, typeMap: { checkbox: W } }, json: { read: (e) => e?.type === "checkbox" ? W.fromJSON(e) : null, write: !0 } })], c.prototype, "filterAuthoringInfo", void 0), t([r({ type: String, constructOnly: !0, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "id", void 0), t([r({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "name", void 0), c = V = t([l("esri.layers.support.BuildingFilter")], c);
const dt = c;
let u = class extends g {
  constructor() {
    super(...arguments), this.fieldName = null, this.modelName = null, this.label = null, this.min = null, this.max = null, this.mostFrequentValues = null, this.subLayerIds = null;
  }
};
t([r({ type: String })], u.prototype, "fieldName", void 0), t([r({ type: String })], u.prototype, "modelName", void 0), t([r({ type: String })], u.prototype, "label", void 0), t([r({ type: Number })], u.prototype, "min", void 0), t([r({ type: Number })], u.prototype, "max", void 0), t([r({ json: { read: (e) => Array.isArray(e) && (e.every((s) => typeof s == "string") || e.every((s) => typeof s == "number")) ? e.slice() : null } })], u.prototype, "mostFrequentValues", void 0), t([r({ type: [Number] })], u.prototype, "subLayerIds", void 0), u = t([l("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")], u);
let O = class extends Y.LoadableMixin(ee(g)) {
  constructor() {
    super(...arguments), this.url = null;
  }
  get fields() {
    return this.loaded || this.loadStatus === "loading" ? this._get("fields") : (I.getLogger(this).error("building summary statistics are not loaded"), null);
  }
  load(e) {
    const s = e != null ? e.signal : null;
    return this.addResolvingPromise(this._fetchService(s)), Promise.resolve(this);
  }
  async _fetchService(e) {
    const s = (await re(this.url, { query: { f: "json" }, responseType: "json", signal: e })).data;
    this.read(s, { origin: "service" });
  }
};
t([r({ constructOnly: !0, type: String })], O.prototype, "url", void 0), t([r({ readOnly: !0, type: [u], json: { read: { source: "summary" } } })], O.prototype, "fields", null), O = t([l("esri.layers.support.BuildingSummaryStatistics")], O);
const le = O, pe = b.ofType(dt), ye = d(m.sublayersProperty), P = ye.json?.origins;
P && (P["web-scene"] = { type: [q], write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } }, P["portal-item"] = { type: [q], write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } });
let n = class extends Je(Be(Ae(Ee(Pe(_e(qe(Ne(Ke)))))))) {
  constructor(e) {
    super(e), this.operationalLayerType = "BuildingSceneLayer", this.allSublayers = new Re({ getCollections: () => [this.sublayers], getChildrenFunction: (s) => s.type === "building-group" ? s.sublayers : null }), this.sublayers = null, this._sublayerOverrides = null, this.filters = new pe(), this.activeFilterId = null, this.summaryStatistics = null, this.outFields = null, this.legendEnabled = !0, this.type = "building-scene";
  }
  normalizeCtorArgs(e) {
    return typeof e == "string" ? { url: e } : e ?? {};
  }
  destroy() {
    this.allSublayers.destroy();
  }
  readSublayers(e, s, i) {
    const a = m.readSublayers(e, s, i);
    return m.forEachSublayer(a, (y) => y.layer = this), this._sublayerOverrides && (this.applySublayerOverrides(a, this._sublayerOverrides), this._sublayerOverrides = null), a;
  }
  applySublayerOverrides(e, { overrides: s, context: i }) {
    m.forEachSublayer(e, (a) => a.read(s.get(a.id), i));
  }
  readSublayerOverrides(e, s) {
    const i = /* @__PURE__ */ new Map();
    for (const a of e) a != null && typeof a == "object" && typeof a.id == "number" ? i.set(a.id, a) : s.messages?.push(new x("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", { value: a }));
    return { overrides: i, context: s };
  }
  writeSublayerOverrides(e, s, i) {
    const a = [];
    m.forEachSublayer(this.sublayers, (y) => {
      const v = y.write({}, i);
      Object.keys(v).length > 1 && a.push(v);
    }), a.length > 0 && (s.sublayers = a);
  }
  writeUnappliedOverrides(e, s) {
    s.sublayers = [], e.overrides.forEach((i) => {
      s.sublayers.push(d(i));
    });
  }
  write(e, s) {
    return e = super.write(e, s), !s || s.origin !== "web-scene" && s.origin !== "portal-item" || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e, s) : this._sublayerOverrides && this.writeUnappliedOverrides(this._sublayerOverrides, e)), e;
  }
  read(e, s) {
    if (super.read(e, s), s && (s.origin === "web-scene" || s.origin === "portal-item") && e != null && Array.isArray(e.sublayers)) {
      const i = this.readSublayerOverrides(e.sublayers, s);
      this.sublayers ? this.applySublayerOverrides(this.sublayers, i) : this._sublayerOverrides = i;
    }
  }
  readSummaryStatistics(e, s) {
    if (typeof s.statisticsHRef == "string") {
      const i = ke(this.parsedUrl?.path, s.statisticsHRef);
      return new le({ url: i });
    }
    return null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  load(e) {
    const s = e != null ? e.signal : null, i = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(Me).then(() => this._fetchService(s)).then(() => this._fetchAssociatedFeatureService(s));
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  loadAll() {
    return Qe(this, (e) => {
      m.forEachSublayer(this.sublayers, (s) => {
        s.type !== "building-group" && e(s);
      }), this.summaryStatistics && e(this.summaryStatistics);
    });
  }
  async saveAs(e, s) {
    return this._debouncedSaveOperations(Z.SAVE_AS, { ...s, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" };
    return this._debouncedSaveOperations(Z.SAVE, e);
  }
  validateLayer(e) {
    if (!e.layerType || e.layerType !== "Building") throw new x("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", { layerType: e.layerType });
  }
  _getTypeKeywords() {
    return ["Building"];
  }
  async _fetchAssociatedFeatureService(e) {
    try {
      const { portalItem: s } = await tt(`${this.url}/layers/${this.layerId}`, { sceneLayerItem: this.portalItem, customParameters: this.customParameters, apiKey: this.apiKey, signal: e });
      this.associatedFeatureServiceItem = s;
    } catch (s) {
      I.getLogger(this).warn("Associated feature service item could not be loaded", s);
    }
  }
  _validateElevationInfo() {
    const e = this.elevationInfo, s = "Building scene layers";
    J(I.getLogger(this), rt(s, "absolute-height", e)), J(I.getLogger(this), st(s, e));
  }
};
t([r({ type: ["BuildingSceneLayer"] })], n.prototype, "operationalLayerType", void 0), t([r({ readOnly: !0 })], n.prototype, "allSublayers", void 0), t([r(ye)], n.prototype, "sublayers", void 0), t([F("service", "sublayers")], n.prototype, "readSublayers", null), t([r({ type: pe, nonNullable: !0, json: { write: !0 } })], n.prototype, "filters", void 0), t([r({ type: String, json: { write: !0 } })], n.prototype, "activeFilterId", void 0), t([r({ readOnly: !0, type: le })], n.prototype, "summaryStatistics", void 0), t([F("summaryStatistics", ["statisticsHRef"])], n.prototype, "readSummaryStatistics", null), t([r({ type: [String], json: { read: !1 } })], n.prototype, "outFields", void 0), t([r(Ue)], n.prototype, "fullExtent", void 0), t([r(Ce)], n.prototype, "legendEnabled", void 0), t([r({ type: ["show", "hide", "hide-children"] })], n.prototype, "listMode", void 0), t([r(_(se))], n.prototype, "spatialReference", void 0), t([r(De)], n.prototype, "elevationInfo", null), t([r({ json: { read: !1 }, readOnly: !0 })], n.prototype, "type", void 0), t([r()], n.prototype, "associatedFeatureServiceItem", void 0), n = t([l("esri.layers.BuildingSceneLayer")], n);
const Ot = n;
export {
  Ot as default
};
//# sourceMappingURL=BuildingSceneLayer-BC76-HOb.js.map
