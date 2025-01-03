import { O as r, P as i, Q as y, bX as B, g$ as S, dY as v, aa as u, ej as _, e5 as L, e6 as N, e7 as V, e8 as O, ek as A, el as E, dS as m, eO as k, _ as D, gA as G, kZ as C, s as l, b1 as K, $ as M, D as x, gG as U, W as Z, e9 as z, er as H, eb as Q, eH as W, gL as X, ei as Y } from "./main-C4pF0E7B.js";
import { L as J, C as P } from "./SceneService-uat_DcPo.js";
import { c as j, d as ee, b as te, a as re } from "./PointCloudUniqueValueRenderer-C9XW1aFD.js";
import { $ as T, Z as ie, w as oe } from "./elevationInfoUtils-BM3PlwF5.js";
let c = class extends B {
  constructor(e) {
    super(e), this.field = null, this.type = null;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
};
r([i({ type: String, json: { write: { enabled: !0, isRequired: !0 } } })], c.prototype, "field", void 0), r([i({ readOnly: !0, nonNullable: !0, json: { read: !1 } })], c.prototype, "type", void 0), c = r([y("esri.layers.pointCloudFilters.PointCloudFilter")], c);
const g = c;
var b;
let d = b = class extends g {
  constructor(e) {
    super(e), this.requiredClearBits = null, this.requiredSetBits = null, this.type = "bitfield";
  }
  clone() {
    return new b({ field: this.field, requiredClearBits: u(this.requiredClearBits), requiredSetBits: u(this.requiredSetBits) });
  }
};
r([i({ type: [S], json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !0, isRequired: !this.requiredSetBits };
} } } })], d.prototype, "requiredClearBits", void 0), r([i({ type: [S], json: { write: { enabled: !0, overridePolicy() {
  return { enabled: !0, isRequired: !this.requiredClearBits };
} } } })], d.prototype, "requiredSetBits", void 0), r([v({ pointCloudBitfieldFilter: "bitfield" })], d.prototype, "type", void 0), d = b = r([y("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")], d);
const se = d;
var w;
let f = w = class extends g {
  constructor(e) {
    super(e), this.includedReturns = [], this.type = "return";
  }
  clone() {
    return new w({ field: this.field, includedReturns: u(this.includedReturns) });
  }
};
r([i({ type: [["firstOfMany", "last", "lastOfMany", "single"]], json: { write: { enabled: !0, isRequired: !0 } } })], f.prototype, "includedReturns", void 0), r([v({ pointCloudReturnFilter: "return" })], f.prototype, "type", void 0), f = w = r([y("esri.layers.pointCloudFilters.PointCloudReturnFilter")], f);
const ne = f;
var $;
let p = $ = class extends g {
  constructor(e) {
    super(e), this.mode = "exclude", this.type = "value", this.values = [];
  }
  clone() {
    return new $({ field: this.field, mode: this.mode, values: u(this.values) });
  }
};
r([i({ type: ["exclude", "include"], json: { write: { enabled: !0, isRequired: !0 } } })], p.prototype, "mode", void 0), r([v({ pointCloudValueFilter: "value" })], p.prototype, "type", void 0), r([i({ type: [Number], json: { write: { enabled: !0, isRequired: !0 } } })], p.prototype, "values", void 0), p = $ = r([y("esri.layers.pointCloudFilters.PointCloudValueFilter")], p);
const ae = p, le = { key: "type", base: g, typeMap: { value: ae, bitfield: se, return: ne } };
var I;
let h = I = class extends j {
  constructor(e) {
    super(e), this.type = "point-cloud-rgb", this.field = null;
  }
  clone() {
    return new I({ ...this.cloneProperties(), field: u(this.field) });
  }
};
r([v({ pointCloudRGBRenderer: "point-cloud-rgb" })], h.prototype, "type", void 0), r([i({ type: String, json: { write: !0 } })], h.prototype, "field", void 0), h = I = r([y("esri.renderers.PointCloudRGBRenderer")], h);
const de = h, F = { key: "type", base: j, typeMap: { "point-cloud-class-breaks": ee, "point-cloud-rgb": de, "point-cloud-stretch": te, "point-cloud-unique-value": re }, errorContext: "renderer" }, R = X();
let o = class extends J(_(L(N(V(O(A(E(Y)))))))) {
  constructor(...e) {
    super(...e), this.operationalLayerType = "PointCloudLayer", this.popupEnabled = !0, this.popupTemplate = null, this.opacity = 1, this.filters = [], this.fields = null, this.fieldsIndex = null, this.outFields = null, this.path = null, this.legendEnabled = !0, this.renderer = null, this.type = "point-cloud";
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  getFieldDomain(e) {
    const t = this.fieldsIndex.get(e);
    return t?.domain ? t.domain : null;
  }
  readServiceFields(e, t, n) {
    return Array.isArray(e) ? e.map((s) => {
      const a = new m();
      return s.type === "FieldTypeInteger" && ((s = u(s)).type = "esriFieldTypeInteger"), a.read(s, n), a;
    }) : Array.isArray(t.attributeStorageInfo) ? t.attributeStorageInfo.map((s) => new m({ name: s.name, type: s.name === "ELEVATION" ? "double" : "integer" })) : null;
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  writeRenderer(e, t, n, s) {
    k("layerDefinition.drawingInfo.renderer", e.write({}, s), t);
  }
  load(e) {
    const t = e != null ? e.signal : null, n = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e).catch(D).then(() => this._fetchService(t));
    return this.addResolvingPromise(n), Promise.resolve(this);
  }
  createPopupTemplate(e) {
    const t = G(this, e);
    return t && (this._formatPopupTemplateReturnsField(t), this._formatPopupTemplateRGBField(t)), t;
  }
  _formatPopupTemplateReturnsField(e) {
    const t = this.fieldsIndex.get("RETURNS");
    if (!t) return;
    const n = e.fieldInfos?.find((a) => a.fieldName === t.name);
    if (!n) return;
    const s = new C({ name: "pcl-returns-decoded", title: t.alias || t.name, expression: `
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      ` });
    e.expressionInfos = [...e.expressionInfos || [], s], n.fieldName = "expression/pcl-returns-decoded";
  }
  _formatPopupTemplateRGBField(e) {
    const t = this.fieldsIndex.get("RGB");
    if (!t) return;
    const n = e.fieldInfos?.find((a) => a.fieldName === t.name);
    if (!n) return;
    const s = new C({ name: "pcl-rgb-decoded", title: t.alias || t.name, expression: `
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      ` });
    e.expressionInfos = [...e.expressionInfos || [], s], n.fieldName = "expression/pcl-rgb-decoded";
  }
  async queryCachedStatistics(e, t) {
    if (await this.load(t), !this.attributeStorageInfo) throw new l("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const n = this.fieldsIndex.get(e);
    if (!n) throw new l("pointcloudlayer:field-unexisting", `Field '${e}' does not exist on the layer`);
    for (const s of this.attributeStorageInfo) if (s.name === n.name) {
      const a = K(this.parsedUrl?.path ?? "", `./statistics/${s.key}`);
      return M(a, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t ? t.signal : null }).then((q) => q.data);
    }
    throw new l("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(P.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" };
    return this._debouncedSaveOperations(P.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "PointCloud") throw new l("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new l("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
    if (this.version.major > 2) throw new l("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
  }
  hasCachedStatistics(e) {
    return this.attributeStorageInfo != null && this.attributeStorageInfo.some((t) => t.name === e);
  }
  _getTypeKeywords() {
    return ["PointCloud"];
  }
  _validateElevationInfo() {
    const e = this.elevationInfo;
    T(x.getLogger(this), ie("Point cloud layers", "absolute-height", e)), T(x.getLogger(this), oe("Point cloud layers", e));
  }
};
r([i({ type: ["PointCloudLayer"] })], o.prototype, "operationalLayerType", void 0), r([i(U)], o.prototype, "popupEnabled", void 0), r([i({ type: Z, json: { name: "popupInfo", write: !0 } })], o.prototype, "popupTemplate", void 0), r([i({ readOnly: !0, json: { read: !1 } })], o.prototype, "defaultPopupTemplate", null), r([i({ readOnly: !0, json: { write: !1, read: !1, origins: { "web-document": { write: !1, read: !1 } } } })], o.prototype, "opacity", void 0), r([i({ type: ["show", "hide"] })], o.prototype, "listMode", void 0), r([i({ types: [le], json: { origins: { service: { read: { source: "filters" } } }, name: "layerDefinition.filters", write: !0 } })], o.prototype, "filters", void 0), r([i({ type: [m] })], o.prototype, "fields", void 0), r([i(R.fieldsIndex)], o.prototype, "fieldsIndex", void 0), r([z("service", "fields", ["fields", "attributeStorageInfo"])], o.prototype, "readServiceFields", null), r([i(R.outFields)], o.prototype, "outFields", void 0), r([i({ readOnly: !0 })], o.prototype, "attributeStorageInfo", void 0), r([i(H)], o.prototype, "elevationInfo", null), r([i({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], o.prototype, "path", void 0), r([i(Q)], o.prototype, "legendEnabled", void 0), r([i({ types: F, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: { target: { "layerDefinition.drawingInfo.renderer": { types: F }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } })], o.prototype, "renderer", void 0), r([W("renderer")], o.prototype, "writeRenderer", null), r([i({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0), o = r([y("esri.layers.PointCloudLayer")], o);
const fe = o;
export {
  fe as default
};
//# sourceMappingURL=PointCloudLayer-Dvyk6YT5.js.map
