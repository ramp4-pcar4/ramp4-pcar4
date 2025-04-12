import { N as i, O as r, P as c, eV as v, S as w, Y as S, aU as O, eL as F, af as b, d$ as I, eb as q, f_ as N, en as _, bh as J, a1 as P, I as C, f5 as l, s as h } from "./main-3gzXighg.js";
import { l as j } from "./clientSideDefaults-qvu_wF6B.js";
let a = class extends v {
  constructor(e) {
    super(e), this.type = "csv", this.refresh = w(async (t) => {
      await this.load();
      const { extent: s, timeExtent: n } = await this._connection.invoke("refresh", t);
      return s && (this.sourceJSON.extent = s), n && (this.sourceJSON.timeInfo.timeExtent = [n.start, n.end]), { dataChanged: !0, updates: { extent: this.sourceJSON.extent, timeInfo: this.sourceJSON.timeInfo } };
    });
  }
  load(e) {
    const t = e != null ? e.signal : null;
    return this.addResolvingPromise(this._startWorker(t)), Promise.resolve(this);
  }
  destroy() {
    this._connection?.close(), this._connection = null;
  }
  async openPorts() {
    return await this.load(), this._connection.openPorts();
  }
  async queryFeatures(e, t = {}) {
    await this.load(t);
    const s = await this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);
    return S.fromJSON(s);
  }
  async queryFeaturesJSON(e, t = {}) {
    return await this.load(t), this._connection.invoke("queryFeatures", e ? e.toJSON() : null, t);
  }
  async queryFeatureCount(e, t = {}) {
    return await this.load(t), this._connection.invoke("queryFeatureCount", e ? e.toJSON() : null, t);
  }
  async queryObjectIds(e, t = {}) {
    return await this.load(t), this._connection.invoke("queryObjectIds", e ? e.toJSON() : null, t);
  }
  async queryExtent(e, t = {}) {
    await this.load(t);
    const s = await this._connection.invoke("queryExtent", e ? e.toJSON() : null, t);
    return { count: s.count, extent: O.fromJSON(s.extent) };
  }
  async querySnapping(e, t = {}) {
    return await this.load(t), this._connection.invoke("querySnapping", e, t);
  }
  async _startWorker(e) {
    this._connection = await F("CSVSourceWorker", { strategy: b("feature-layers-workers") ? "dedicated" : "local", signal: e, registryTarget: this });
    const { url: t, delimiter: s, fields: n, latitudeField: y, longitudeField: p, spatialReference: f, timeInfo: m } = this.loadOptions, u = await this._connection.invoke("load", { url: t, customParameters: this.customParameters, parsingOptions: { delimiter: s, fields: n?.map((g) => g.toJSON()), latitudeField: y, longitudeField: p, spatialReference: f?.toJSON(), timeInfo: m?.toJSON() } }, { signal: e });
    this.locationInfo = u.locationInfo, this.sourceJSON = u.layerDefinition, this.delimiter = u.delimiter;
  }
};
i([r()], a.prototype, "type", void 0), i([r()], a.prototype, "loadOptions", void 0), i([r()], a.prototype, "customParameters", void 0), i([r()], a.prototype, "locationInfo", void 0), i([r()], a.prototype, "sourceJSON", void 0), i([r()], a.prototype, "delimiter", void 0), a = i([c("esri.layers.graphics.sources.CSVSource")], a);
function d(e, t) {
  throw new h(t, `CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`);
}
let o = class extends _ {
  constructor(...e) {
    super(...e), this.geometryType = "point", this.capabilities = j(!1, !1), this.delimiter = null, this.editingEnabled = !1, this.fields = null, this.latitudeField = null, this.locationType = "coordinates", this.longitudeField = null, this.operationalLayerType = "CSV", this.outFields = ["*"], this.path = null, this.spatialReference = J.WGS84, this.source = null, this.type = "csv";
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    const t = e != null ? e.signal : null, s = this.loadFromPortal({ supportedTypes: ["CSV"], supportsData: !1 }, e).catch(P).then(async () => this.initLayerProperties(await this.createGraphicsSource(t)));
    return this.addResolvingPromise(s), Promise.resolve(this);
  }
  get isTable() {
    return this.loaded && this.geometryType == null;
  }
  readWebMapLabelsVisible(e, t) {
    return t.showLabels != null ? t.showLabels : !!t.layerDefinition?.drawingInfo?.labelingInfo;
  }
  set url(e) {
    if (!e) return void this._set("url", e);
    const t = C(e);
    this._set("url", t.path), t.query && (this.customParameters = { ...this.customParameters, ...t.query });
  }
  async createGraphicsSource(e) {
    const t = new a({ loadOptions: { delimiter: this.delimiter, fields: this.fields, latitudeField: this.latitudeField ?? void 0, longitudeField: this.longitudeField ?? void 0, spatialReference: this.spatialReference ?? void 0, timeInfo: this.timeInfo ?? void 0, url: this.url }, customParameters: this.customParameters ?? void 0 });
    return this._set("source", t), await t.load({ signal: e }), this.read({ locationInfo: t.locationInfo, columnDelimiter: t.delimiter }, { origin: "service", url: this.parsedUrl }), t;
  }
  queryFeatures(e, t) {
    return this.load().then(() => this.source.queryFeatures(l.from(e) || this.createQuery())).then((s) => {
      if (s?.features) for (const n of s.features) n.layer = n.sourceLayer = this;
      return s;
    });
  }
  queryObjectIds(e, t) {
    return this.load().then(() => this.source.queryObjectIds(l.from(e) || this.createQuery()));
  }
  queryFeatureCount(e, t) {
    return this.load().then(() => this.source.queryFeatureCount(l.from(e) || this.createQuery()));
  }
  queryExtent(e, t) {
    return this.load().then(() => this.source.queryExtent(l.from(e) || this.createQuery()));
  }
  read(e, t) {
    super.read(e, t), t && t.origin === "service" && this.revert(["latitudeField", "longitudeField"], "service");
  }
  write(e, t) {
    return super.write(e, { ...t, writeLayerSchema: !0 });
  }
  clone() {
    throw new h("csv-layer:clone", `CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`);
  }
  async save(e) {
    return d(this, "csv-layer:save");
  }
  async saveAs(e, t) {
    return d(this, "csv-layer:save-as");
  }
  async hasDataChanged() {
    try {
      const { dataChanged: e, updates: t } = await this.source.refresh(this.customParameters);
      return t != null && this.read(t, { origin: "service", url: this.parsedUrl, ignoreDefaults: !0 }), e;
    } catch {
    }
    return !1;
  }
  _verifyFields() {
  }
  _verifySource() {
  }
  _hasMemorySource() {
    return !1;
  }
};
i([r({ readOnly: !0, json: { read: !1, write: !1 } })], o.prototype, "capabilities", void 0), i([r({ type: [",", " ", ";", "|", "	"], json: { read: { source: "columnDelimiter" }, write: { target: "columnDelimiter", ignoreOrigin: !0 } } })], o.prototype, "delimiter", void 0), i([r({ readOnly: !0, type: Boolean, json: { origins: { "web-scene": { read: !1, write: !1 } } } })], o.prototype, "editingEnabled", void 0), i([r({ json: { read: { source: "layerDefinition.fields" }, write: { target: "layerDefinition.fields" } } })], o.prototype, "fields", void 0), i([r({ type: Boolean, readOnly: !0 })], o.prototype, "isTable", null), i([I("web-map", "labelsVisible", ["layerDefinition.drawingInfo.labelingInfo", "showLabels"])], o.prototype, "readWebMapLabelsVisible", null), i([r({ type: String, json: { read: { source: "locationInfo.latitudeFieldName" }, write: { target: "locationInfo.latitudeFieldName", ignoreOrigin: !0 } } })], o.prototype, "latitudeField", void 0), i([r({ type: ["show", "hide"] })], o.prototype, "listMode", void 0), i([r({ type: ["coordinates"], json: { read: { source: "locationInfo.locationType" }, write: { target: "locationInfo.locationType", ignoreOrigin: !0, isRequired: !0 } } })], o.prototype, "locationType", void 0), i([r({ type: String, json: { read: { source: "locationInfo.longitudeFieldName" }, write: { target: "locationInfo.longitudeFieldName", ignoreOrigin: !0 } } })], o.prototype, "longitudeField", void 0), i([r({ type: ["CSV"] })], o.prototype, "operationalLayerType", void 0), i([r()], o.prototype, "outFields", void 0), i([r({ type: String, json: { origins: { "web-scene": { read: !1, write: !1 } }, read: !1, write: !1 } })], o.prototype, "path", void 0), i([r({ json: { read: !1 }, cast: null, type: a, readOnly: !0 })], o.prototype, "source", void 0), i([r({ json: { read: !1 }, value: "csv", readOnly: !0 })], o.prototype, "type", void 0), i([r({ json: { read: q, write: { isRequired: !0, ignoreOrigin: !0, writer: N } } })], o.prototype, "url", null), o = i([c("esri.layers.CSVLayer")], o);
const k = o;
export {
  k as default
};
//# sourceMappingURL=CSVLayer-PYnYwOl1.js.map
