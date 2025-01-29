import { e3 as n, e4 as y, e5 as p, e6 as u, e7 as d, e8 as h, o as c, _ as S, $ as m, ao as g, a1 as f, O as o, P as s, e9 as v, b8 as b, ea as C, eb as G, ec as P, Q as _, ed as a, ee as w, ef as x, eg as R, eh as $, ei as k } from "./main-C4pF0E7B.js";
const j = ["atom", "xml"], F = { base: a, key: "type", typeMap: { "simple-line": w }, errorContext: "symbol" }, E = { base: a, key: "type", typeMap: { "picture-marker": x, "simple-marker": R }, errorContext: "symbol" }, M = { base: a, key: "type", typeMap: { "simple-fill": $ }, errorContext: "symbol" };
let t = class extends n(y(p(u(d(h(k)))))) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.legendEnabled = !0, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  readFeatureCollections(e, r) {
    return r.featureCollection.layers.forEach((i) => {
      const l = i.layerDefinition.drawingInfo.renderer.symbol;
      l && l.type === "esriSFS" && l.outline?.style.includes("esriSFS") && (l.outline.style = "esriSLSSolid");
    }), r.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e = this._get("title");
    return e && this.originOf("title") !== "defaults" ? e : this.url ? c(this.url, j) || "GeoRSS" : e;
  }
  set title(e) {
    this._set("title", e);
  }
  load(e) {
    const r = e != null ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e).catch(S).then(() => this._fetchService(r)).then((i) => {
      this.read(i, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e = await this._fetchService();
    return this.read(e, { origin: "service", ignoreDefaults: !0 }), !0;
  }
  async _fetchService(e) {
    const r = this.spatialReference, { data: i } = await m(f.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: g(r) ? void 0 : r.wkid ?? JSON.stringify(r) }, signal: e });
    return i;
  }
  _hasGeometry(e) {
    return this.featureCollections?.some((r) => r.featureSet?.geometryType === e && r.featureSet.features?.length > 0) ?? !1;
  }
};
o([s()], t.prototype, "description", void 0), o([s()], t.prototype, "featureCollections", void 0), o([v("service", "featureCollections", ["featureCollection.layers"])], t.prototype, "readFeatureCollections", null), o([s({ type: b, json: { name: "lookAtExtent" } })], t.prototype, "fullExtent", void 0), o([s(C)], t.prototype, "id", void 0), o([s(G)], t.prototype, "legendEnabled", void 0), o([s({ types: F, json: { write: !0 } })], t.prototype, "lineSymbol", void 0), o([s({ type: ["show", "hide"] })], t.prototype, "listMode", void 0), o([s({ types: E, json: { write: !0 } })], t.prototype, "pointSymbol", void 0), o([s({ types: M, json: { write: !0 } })], t.prototype, "polygonSymbol", void 0), o([s({ type: ["GeoRSS"] })], t.prototype, "operationalLayerType", void 0), o([s(P)], t.prototype, "url", void 0), o([s({ json: { origins: { service: { read: { source: "name", reader: (e) => e || void 0 } } } } })], t.prototype, "title", null), o([s({ readOnly: !0, json: { read: !1 }, value: "geo-rss" })], t.prototype, "type", void 0), t = o([_("esri.layers.GeoRSSLayer")], t);
const O = t;
export {
  O as default
};
//# sourceMappingURL=GeoRSSLayer-DJ7u7PDD.js.map
