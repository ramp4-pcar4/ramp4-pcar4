import { dT as ue, N as t, O as s, d$ as I, gw as de, ma as _, P as l, mb as ce, eV as Y, jP as ee, cW as he, en as te, C as x, g4 as ge, a2 as re, f5 as me, jl as fe, s as F, ap as ve, aU as be, bh as se, gv as Se, gc as we, ga as $e, Z as Oe, dN as ie, eU as xe, gf as Fe, V as v, dA as Ie, mc as je, b_ as g, ag as d, md as Le, dO as Te, ew as Be, dX as Pe, dY as Ae, dZ as Ee, d_ as _e, ex as qe, ey as Ne, bs as Re, aN as Me, a1 as ke, gl as Ue, me as Qe, e1 as Ke, eF as Ve, e8 as Ce } from "./main-DIdq27YS.js";
import { m as De, s as Ze } from "./capabilities-B7c1l0bj.js";
import { r as He, L as Je, P as Z } from "./SceneService-BvxLWDGj.js";
import { s as We, l as Ge, u as Xe, m as ze } from "./I3SLayerDefinitions-Cp73GOpi.js";
import { $ as Ye } from "./I3SUtil-A6CA1kK5.js";
import { n as et, p as tt } from "./popupUtils-DTsCV5Up.js";
import { s as rt } from "./associatedFeatureServiceUtils-oMb_kC5s.js";
import { I as H, x as st, Z as it } from "./elevationInfoUtils-DE1x05p-.js";
let p = class extends ue(ce) {
  constructor(r) {
    super(r), this.title = "", this.id = -1, this.modelName = null, this.isEmpty = null, this.legendEnabled = !0, this.visible = !0, this.opacity = 1;
  }
  readTitle(r, i) {
    return typeof i.alias == "string" ? i.alias : typeof i.name == "string" ? i.name : "";
  }
  readIdOnlyOnce(r) {
    return this.id !== -1 ? this.id : typeof r == "number" ? r : -1;
  }
};
t([s({ type: String, json: { origins: { "web-scene": { write: !0 }, "portal-item": { write: !0 } } } })], p.prototype, "title", void 0), t([I("service", "title", ["alias", "name"])], p.prototype, "readTitle", null), t([s()], p.prototype, "layer", void 0), t([s({ type: de, readOnly: !0, json: { read: !1, write: { ignoreOrigin: !0 } } })], p.prototype, "id", void 0), t([I("service", "id")], p.prototype, "readIdOnlyOnce", null), t([s(_(String))], p.prototype, "modelName", void 0), t([s(_(Boolean))], p.prototype, "isEmpty", void 0), t([s({ type: Boolean, nonNullable: !0 })], p.prototype, "legendEnabled", void 0), t([s({ type: Boolean, json: { name: "visibility", write: !0 } })], p.prototype, "visible", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "opacity", void 0), p = t([l("esri.layers.buildingSublayers.BuildingSublayer")], p);
const oe = p, J = Fe();
let o = class extends De(Y.LoadableMixin(ee(oe))) {
  constructor(e) {
    super(e), this.type = "building-component", this.nodePages = null, this.materialDefinitions = [], this.textureSetDefinitions = [], this.geometryDefinitions = [], this.indexInfo = null, this.serviceUpdateTimeStamp = null, this.store = null, this.attributeStorageInfo = [], this.fields = [], this.associatedLayer = null, this.outFields = null, this.listMode = "show", this.renderer = null, this.definitionExpression = null, this.popupEnabled = !0, this.popupTemplate = null, this.layerType = "3d-object";
  }
  get parsedUrl() {
    return this.layer ? { path: `${this.layer.parsedUrl?.path}/sublayers/${this.id}`, query: this.layer.parsedUrl?.query } : { path: "" };
  }
  get fieldsIndex() {
    return new he(this.fields);
  }
  readAssociatedLayer(e, r) {
    const i = this.layer.associatedFeatureServiceItem, a = r.associatedLayerID;
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
    const r = e != null ? e.signal : null, i = this._fetchService(r).then(() => {
      this.indexInfo = He(this.parsedUrl.path, this.rootNode, this.nodePages, this.customParameters, this.apiKey, x.getLogger(this), r);
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    return ge(this, e);
  }
  async _fetchService(e) {
    const r = (await re(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e })).data;
    this.read(r, { origin: "service", url: this.parsedUrl });
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, r) {
    const i = this.getFeatureType(r?.feature)?.domains?.[e];
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
    const e = this.associatedLayer != null && this.associatedLayer.capabilities ? this.associatedLayer.capabilities : Ze, { query: r, data: { supportsZ: i, supportsM: a, isVersioned: y } } = e;
    return { query: r, data: { supportsZ: i, supportsM: a, isVersioned: y } };
  }
  createQuery() {
    const e = new me();
    return this.geometryType !== "mesh" && (e.returnGeometry = !0, e.returnZ = !0), e.where = this.definitionExpression || "1=1", e.sqlFormat = "standard", e;
  }
  queryExtent(e, r) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryExtent(e || this.createQuery(), r));
  }
  queryFeatureCount(e, r) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryFeatureCount(e || this.createQuery(), r));
  }
  queryFeatures(e, r) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryFeatures(e || this.createQuery(), r)).then((i) => {
      if (i?.features) for (const a of i.features) a.layer = this.layer, a.sourceLayer = this;
      return i;
    });
  }
  queryObjectIds(e, r) {
    return this._getAssociatedLayerForQuery().then((i) => i.queryObjectIds(e || this.createQuery(), r));
  }
  async queryCachedAttributes(e, r) {
    const i = fe(this.fieldsIndex, await et(this, tt(this)));
    return Ye(this.parsedUrl.path, this.attributeStorageInfo, e, r, i, this.apiKey, this.customParameters);
  }
  async queryCachedFeature(e, r) {
    const i = await this.queryCachedAttributes(e, [r]);
    if (!i || i.length === 0) throw new F("scenelayer:feature-not-in-cached-data", "Feature not found in cached data");
    const a = new ve();
    return a.attributes = i[0], a.layer = this, a.sourceLayer = this, a;
  }
  getFieldUsageInfo(e) {
    return this.fieldsIndex.has(e) ? { supportsLabelingInfo: !1, supportsRenderer: !1, supportsPopupTemplate: !1, supportsLayerQuery: !1 } : { supportsLabelingInfo: !1, supportsRenderer: !0, supportsPopupTemplate: !0, supportsLayerQuery: this.associatedLayer != null };
  }
  _getAssociatedLayerForQuery() {
    const e = this.associatedLayer;
    return e != null && e.loaded ? Promise.resolve(e) : this._loadAssociatedLayerForQuery();
  }
  async _loadAssociatedLayerForQuery() {
    if (await this.load(), this.associatedLayer == null) throw new F("buildingscenelayer:query-not-available", "BuildingSceneLayer component layer queries are not available without an associated feature layer", { layer: this });
    try {
      await this.associatedLayer.load();
    } catch (e) {
      throw new F("buildingscenelayer:query-not-available", "BuildingSceneLayer associated feature layer could not be loaded", { layer: this, error: e });
    }
    return this.associatedLayer;
  }
};
t([s({ readOnly: !0 })], o.prototype, "parsedUrl", null), t([s({ type: We, readOnly: !0 })], o.prototype, "nodePages", void 0), t([s({ type: [Ge], readOnly: !0 })], o.prototype, "materialDefinitions", void 0), t([s({ type: [Xe], readOnly: !0 })], o.prototype, "textureSetDefinitions", void 0), t([s({ type: [ze], readOnly: !0 })], o.prototype, "geometryDefinitions", void 0), t([s({ readOnly: !0 })], o.prototype, "serviceUpdateTimeStamp", void 0), t([s({ readOnly: !0 })], o.prototype, "store", void 0), t([s({ type: String, readOnly: !0, json: { read: { source: "store.rootNode" } } })], o.prototype, "rootNode", void 0), t([s({ readOnly: !0 })], o.prototype, "attributeStorageInfo", void 0), t([s(J.fields)], o.prototype, "fields", void 0), t([s({ readOnly: !0 })], o.prototype, "fieldsIndex", null), t([s({ readOnly: !0, type: te })], o.prototype, "associatedLayer", void 0), t([I("service", "associatedLayer", ["associatedLayerID"])], o.prototype, "readAssociatedLayer", null), t([s(J.outFields)], o.prototype, "outFields", void 0), t([s({ type: String, readOnly: !0 })], o.prototype, "objectIdField", null), t([s({ readOnly: !0, type: String, json: { read: !1 } })], o.prototype, "displayField", null), t([s({ readOnly: !0, type: String })], o.prototype, "apiKey", null), t([s({ readOnly: !0, type: String })], o.prototype, "customParameters", null), t([s({ readOnly: !0, type: be })], o.prototype, "fullExtent", null), t([s({ readOnly: !0, type: se })], o.prototype, "spatialReference", null), t([s({ readOnly: !0 })], o.prototype, "version", null), t([s({ readOnly: !0, type: Se })], o.prototype, "elevationInfo", null), t([s({ readOnly: !0, type: Number })], o.prototype, "minScale", null), t([s({ readOnly: !0, type: Number })], o.prototype, "maxScale", null), t([s({ readOnly: !0, type: Number })], o.prototype, "effectiveScaleRange", null), t([s({ type: ["hide", "show"], json: { write: !0 } })], o.prototype, "listMode", void 0), t([s({ types: we, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: !0 }, value: null })], o.prototype, "renderer", void 0), t([s({ type: String, json: { origins: { service: { read: !1, write: !1 } }, name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], o.prototype, "definitionExpression", void 0), t([s($e)], o.prototype, "popupEnabled", void 0), t([s({ type: Oe, json: { read: { source: "popupInfo" }, write: { target: "popupInfo" } } })], o.prototype, "popupTemplate", void 0), t([s({ readOnly: !0, type: String, json: { origins: { service: { read: { source: "store.normalReferenceFrame" } } }, read: !1 } })], o.prototype, "normalReferenceFrame", void 0), t([s({ readOnly: !0, json: { read: !1 } })], o.prototype, "defaultPopupTemplate", null), t([s()], o.prototype, "types", null), t([s()], o.prototype, "typeIdField", null), t([s({ json: { write: !1 } }), ie(new xe({ "3DObject": "3d-object", Point: "point" }))], o.prototype, "layerType", void 0), t([s()], o.prototype, "geometryType", null), t([s()], o.prototype, "profile", null), t([s({ readOnly: !0, json: { read: !1 } })], o.prototype, "capabilities", null), o = t([l("esri.layers.buildingSublayers.BuildingComponentSublayer")], o);
const q = o;
var N;
const W = { type: v, readOnly: !0, json: { origins: { service: { read: { source: "sublayers", reader: ae } } }, read: !1 } };
function ae(e, r, i) {
  if (e && Array.isArray(e)) return new v(e.map((a) => {
    const y = ot(a);
    if (y) {
      const b = new y();
      return b.read(a, i), b;
    }
    return i?.messages && a && i.messages.push(new Ie("building-scene-layer:unsupported-sublayer-type", "Building scene sublayer of type '" + (a.type || "unknown") + "' are not supported", { definition: a, context: i })), null;
  }));
}
let h = N = class extends oe {
  constructor(e) {
    super(e), this.type = "building-group", this.listMode = "show", this.sublayers = null;
  }
  loadAll() {
    return je(this, (e) => N.forEachSublayer(this.sublayers, (r) => {
      r.type !== "building-group" && e(r);
    }));
  }
};
function ot(e) {
  return e.layerType === "group" ? h : q;
}
t([s({ type: ["hide", "show", "hide-children"], json: { write: !0 } })], h.prototype, "listMode", void 0), t([s(W)], h.prototype, "sublayers", void 0), h = N = t([l("esri.layers.buildingSublayers.BuildingGroupSublayer")], h), function(e) {
  function r(i, a) {
    i.forEach((y) => {
      a(y), y.type === "building-group" && r(y.sublayers, a);
    });
  }
  e.sublayersProperty = W, e.readSublayers = ae, e.forEachSublayer = r;
}(h || (h = {}));
const m = h;
let j = class extends g {
  constructor() {
    super(...arguments), this.type = null;
  }
};
t([s({ type: String, readOnly: !0, json: { write: !0 } })], j.prototype, "type", void 0), j = t([l("esri.layers.support.BuildingFilterAuthoringInfo")], j);
const ne = j;
var R;
let S = R = class extends g {
  constructor() {
    super(...arguments), this.filterType = null, this.filterValues = null;
  }
  clone() {
    return new R({ filterType: this.filterType, filterValues: d(this.filterValues) });
  }
};
t([s({ type: String, json: { write: !0 } })], S.prototype, "filterType", void 0), t([s({ type: [String], json: { write: !0 } })], S.prototype, "filterValues", void 0), S = R = t([l("esri.layers.support.BuildingFilterAuthoringInfoType")], S);
const at = S;
var M;
const nt = v.ofType(at);
let L = M = class extends g {
  clone() {
    return new M({ filterTypes: d(this.filterTypes) });
  }
};
t([s({ type: nt, json: { write: !0 } })], L.prototype, "filterTypes", void 0), L = M = t([l("esri.layers.support.BuildingFilterAuthoringInfoBlock")], L);
const lt = L;
var k;
const pt = v.ofType(lt);
let w = k = class extends ne {
  constructor() {
    super(...arguments), this.type = "checkbox";
  }
  clone() {
    return new k({ filterBlocks: d(this.filterBlocks) });
  }
};
t([s({ type: ["checkbox"] })], w.prototype, "type", void 0), t([s({ type: pt, json: { write: !0 } })], w.prototype, "filterBlocks", void 0), w = k = t([l("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")], w);
const G = w;
let T = class extends g {
};
t([s({ readOnly: !0, json: { read: !1 } })], T.prototype, "type", void 0), T = t([l("esri.layers.support.BuildingFilterMode")], T);
const A = T;
var U;
let B = U = class extends A {
  constructor() {
    super(...arguments), this.type = "solid";
  }
  clone() {
    return new U();
  }
};
t([s({ type: ["solid"], readOnly: !0, json: { write: !0 } })], B.prototype, "type", void 0), B = U = t([l("esri.layers.support.BuildingFilterModeSolid")], B);
const Q = B;
var K;
let $ = K = class extends A {
  constructor() {
    super(...arguments), this.type = "wire-frame", this.edges = null;
  }
  clone() {
    return new K({ edges: d(this.edges) });
  }
};
t([ie({ wireFrame: "wire-frame" })], $.prototype, "type", void 0), t([s(Le)], $.prototype, "edges", void 0), $ = K = t([l("esri.layers.support.BuildingFilterModeWireFrame")], $);
const X = $;
var V;
let P = V = class extends A {
  constructor() {
    super(...arguments), this.type = "x-ray";
  }
  clone() {
    return new V();
  }
};
t([s({ type: ["x-ray"], readOnly: !0, json: { write: !0 } })], P.prototype, "type", void 0), P = V = t([l("esri.layers.support.BuildingFilterModeXRay")], P);
const z = P;
var C;
const yt = { nonNullable: !0, types: { key: "type", base: A, typeMap: { solid: Q, "wire-frame": X, "x-ray": z } }, json: { read: (e) => {
  switch (e?.type) {
    case "solid":
      return Q.fromJSON(e);
    case "wireFrame":
      return X.fromJSON(e);
    case "x-ray":
      return z.fromJSON(e);
    default:
      return;
  }
}, write: { enabled: !0, isRequired: !0 } } };
let f = C = class extends g {
  constructor() {
    super(...arguments), this.filterExpression = null, this.filterMode = new Q(), this.title = "";
  }
  clone() {
    return new C({ filterExpression: this.filterExpression, filterMode: d(this.filterMode), title: this.title });
  }
};
t([s({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], f.prototype, "filterExpression", void 0), t([s(yt)], f.prototype, "filterMode", void 0), t([s({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], f.prototype, "title", void 0), f = C = t([l("esri.layers.support.BuildingFilterBlock")], f);
const ut = f;
var D;
const dt = v.ofType(ut);
let c = D = class extends g {
  constructor() {
    super(...arguments), this.description = null, this.filterBlocks = null, this.id = Te(), this.name = null;
  }
  clone() {
    return new D({ description: this.description, filterBlocks: d(this.filterBlocks), id: this.id, name: this.name, filterAuthoringInfo: d(this.filterAuthoringInfo) });
  }
};
t([s({ type: String, json: { write: !0 } })], c.prototype, "description", void 0), t([s({ type: dt, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "filterBlocks", void 0), t([s({ types: { key: "type", base: ne, typeMap: { checkbox: G } }, json: { read: (e) => e?.type === "checkbox" ? G.fromJSON(e) : null, write: !0 } })], c.prototype, "filterAuthoringInfo", void 0), t([s({ type: String, constructOnly: !0, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "id", void 0), t([s({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "name", void 0), c = D = t([l("esri.layers.support.BuildingFilter")], c);
const ct = c;
let u = class extends g {
  constructor() {
    super(...arguments), this.fieldName = null, this.modelName = null, this.label = null, this.min = null, this.max = null, this.mostFrequentValues = null, this.subLayerIds = null;
  }
};
t([s({ type: String })], u.prototype, "fieldName", void 0), t([s({ type: String })], u.prototype, "modelName", void 0), t([s({ type: String })], u.prototype, "label", void 0), t([s({ type: Number })], u.prototype, "min", void 0), t([s({ type: Number })], u.prototype, "max", void 0), t([s({ json: { read: (e) => Array.isArray(e) && (e.every((r) => typeof r == "string") || e.every((r) => typeof r == "number")) ? e.slice() : null } })], u.prototype, "mostFrequentValues", void 0), t([s({ type: [Number] })], u.prototype, "subLayerIds", void 0), u = t([l("esri.layers.support.BuildingFieldStatistics")], u);
let O = class extends Y.LoadableMixin(ee(g)) {
  constructor() {
    super(...arguments), this.url = null;
  }
  get fields() {
    return this.loaded || this.loadStatus === "loading" ? this._get("fields") : (x.getLogger(this).error("building summary statistics are not loaded"), null);
  }
  load(e) {
    const r = e != null ? e.signal : null;
    return this.addResolvingPromise(this._fetchService(r)), Promise.resolve(this);
  }
  async _fetchService(e) {
    const r = (await re(this.url, { query: { f: "json" }, responseType: "json", signal: e })).data;
    this.read(r, { origin: "service" });
  }
};
t([s({ constructOnly: !0, type: String })], O.prototype, "url", void 0), t([s({ readOnly: !0, type: [u], json: { read: { source: "summary" } } })], O.prototype, "fields", null), O = t([l("esri.layers.support.BuildingSummaryStatistics")], O);
const le = O, pe = v.ofType(ct), ye = d(m.sublayersProperty), E = ye.json?.origins;
E && (E["web-scene"] = { type: [q], write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } }, E["portal-item"] = { type: [q], write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) } });
let n = class extends Je(Be(Pe(Ae(Ee(_e(qe(Ne(Ce)))))))) {
  constructor(e) {
    super(e), this.operationalLayerType = "BuildingSceneLayer", this.allSublayers = new Re({ getCollections: () => [this.sublayers], getChildrenFunction: (r) => r.type === "building-group" ? r.sublayers : null }), this.sublayers = null, this._sublayerOverrides = null, this.filters = new pe(), this.activeFilterId = null, this.summaryStatistics = null, this.outFields = null, this.legendEnabled = !0, this.type = "building-scene";
  }
  normalizeCtorArgs(e) {
    return typeof e == "string" ? { url: e } : e ?? {};
  }
  destroy() {
    this.allSublayers.destroy();
  }
  readSublayers(e, r, i) {
    const a = m.readSublayers(e, r, i);
    return m.forEachSublayer(a, (y) => y.layer = this), this._sublayerOverrides && (this.applySublayerOverrides(a, this._sublayerOverrides), this._sublayerOverrides = null), a;
  }
  applySublayerOverrides(e, { overrides: r, context: i }) {
    m.forEachSublayer(e, (a) => a.read(r.get(a.id), i));
  }
  readSublayerOverrides(e, r) {
    const i = /* @__PURE__ */ new Map();
    for (const a of e) a != null && typeof a == "object" && typeof a.id == "number" ? i.set(a.id, a) : r.messages?.push(new F("building-scene-layer:invalid-sublayer-override", "Invalid value for sublayer override. Not an object or no id specified.", { value: a }));
    return { overrides: i, context: r };
  }
  writeSublayerOverrides(e, r, i) {
    const a = [];
    m.forEachSublayer(this.sublayers, (y) => {
      const b = y.write({}, i);
      Object.keys(b).length > 1 && a.push(b);
    }), a.length > 0 && (r.sublayers = a);
  }
  writeUnappliedOverrides(e, r) {
    r.sublayers = [], e.overrides.forEach((i) => {
      r.sublayers.push(d(i));
    });
  }
  write(e, r) {
    return e = super.write(e, r), !r || r.origin !== "web-scene" && r.origin !== "portal-item" || (this.sublayers ? this.writeSublayerOverrides(this.sublayers, e, r) : this._sublayerOverrides && this.writeUnappliedOverrides(this._sublayerOverrides, e)), e;
  }
  read(e, r) {
    if (super.read(e, r), r && (r.origin === "web-scene" || r.origin === "portal-item") && e != null && Array.isArray(e.sublayers)) {
      const i = this.readSublayerOverrides(e.sublayers, r);
      this.sublayers ? this.applySublayerOverrides(this.sublayers, i) : this._sublayerOverrides = i;
    }
  }
  readSummaryStatistics(e, r) {
    if (typeof r.statisticsHRef == "string") {
      const i = Me(this.parsedUrl?.path, r.statisticsHRef);
      return new le({ url: i });
    }
    return null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  load(e) {
    const r = e != null ? e.signal : null, i = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(ke).then(() => this._fetchService(r)).then(() => this._fetchAssociatedFeatureService(r));
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  loadAll() {
    return Ue(this, (e) => {
      m.forEachSublayer(this.sublayers, (r) => {
        r.type !== "building-group" && e(r);
      }), this.summaryStatistics && e(this.summaryStatistics);
    });
  }
  async saveAs(e, r) {
    return this._debouncedSaveOperations(Z.SAVE_AS, { ...r, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "building-scene" };
    return this._debouncedSaveOperations(Z.SAVE, e);
  }
  validateLayer(e) {
    if (!e.layerType || e.layerType !== "Building") throw new F("buildingscenelayer:layer-type-not-supported", "BuildingSceneLayer does not support this layer type", { layerType: e.layerType });
  }
  _getTypeKeywords() {
    return ["Building"];
  }
  async _fetchAssociatedFeatureService(e) {
    try {
      const { portalItem: r } = await rt(`${this.url}/layers/${this.layerId}`, { sceneLayerItem: this.portalItem, customParameters: this.customParameters, apiKey: this.apiKey, signal: e });
      this.associatedFeatureServiceItem = r;
    } catch (r) {
      x.getLogger(this).warn("Associated feature service item could not be loaded", r);
    }
  }
  _validateElevationInfo() {
    const e = this.elevationInfo, r = "Building scene layers";
    H(x.getLogger(this), st(r, "absolute-height", e)), H(x.getLogger(this), it(r, e));
  }
};
t([s({ type: ["BuildingSceneLayer"] })], n.prototype, "operationalLayerType", void 0), t([s({ readOnly: !0 })], n.prototype, "allSublayers", void 0), t([s(ye)], n.prototype, "sublayers", void 0), t([I("service", "sublayers")], n.prototype, "readSublayers", null), t([s({ type: pe, nonNullable: !0, json: { write: !0 } })], n.prototype, "filters", void 0), t([s({ type: String, json: { write: !0 } })], n.prototype, "activeFilterId", void 0), t([s({ readOnly: !0, type: le })], n.prototype, "summaryStatistics", void 0), t([I("summaryStatistics", ["statisticsHRef"])], n.prototype, "readSummaryStatistics", null), t([s({ type: [String], json: { read: !1 } })], n.prototype, "outFields", void 0), t([s(Qe)], n.prototype, "fullExtent", void 0), t([s(Ke)], n.prototype, "legendEnabled", void 0), t([s({ type: ["show", "hide", "hide-children"] })], n.prototype, "listMode", void 0), t([s(_(se))], n.prototype, "spatialReference", void 0), t([s(Ve)], n.prototype, "elevationInfo", null), t([s({ json: { read: !1 }, readOnly: !0 })], n.prototype, "type", void 0), t([s()], n.prototype, "associatedFeatureServiceItem", void 0), n = t([l("esri.layers.BuildingSceneLayer")], n);
const xt = n;
export {
  xt as default
};
//# sourceMappingURL=BuildingSceneLayer-CTB7srs2.js.map
