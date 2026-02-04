import { N as t, O as s, P as S, b_ as F, g0 as P, g1 as O, dV as A, g2 as _, dZ as k, dW as E, ew as D, dX as U, dY as C, d_ as N, ex as V, dS as L, bh as I, S as G, s as d, a1 as J, g3 as f, gt as M, C as z, gu as W, dI as h, fy as Z, g4 as q, f5 as Y, gm as c, a2 as H, dH as Q, fZ as X, t as B, gv as K, aU as ee, g6 as te, g7 as ie, g8 as se, e1 as re, gw as g, gx as oe, gy as ne, ga as ae, Z as le, gb as de, gc as pe, d$ as v, ag as ce, gd as ue, e2 as ye, gf as he, e8 as me } from "./main-CmejC-so.js";
var m;
let a = m = class extends F {
  constructor() {
    super(...arguments), this.age = null, this.ageReceived = null, this.displayCount = null, this.maxObservations = 1;
  }
  clone() {
    return new m({ age: this.age, ageReceived: this.ageReceived, displayCount: this.displayCount, maxObservations: this.maxObservations });
  }
};
t([s({ type: Number, json: { write: !0 } })], a.prototype, "age", void 0), t([s({ type: Number, json: { write: !0 } })], a.prototype, "ageReceived", void 0), t([s({ type: Number, json: { write: !0 } })], a.prototype, "displayCount", void 0), t([s({ type: Number, json: { write: !0 } })], a.prototype, "maxObservations", void 0), a = m = t([S("esri.layers.support.PurgeOptions")], a);
const x = a, w = he();
function b(e, r) {
  return new d("layer:unsupported", `Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${r}`, { layer: e });
}
let i = class extends P(O(A(_(k(E(D(U(C(N(V(L(me)))))))))))) {
  constructor(...e) {
    super(...e), this.copyright = null, this.definitionExpression = null, this.displayField = null, this.elevationInfo = null, this.fields = null, this.fieldsIndex = null, this.geometryDefinition = null, this.geometryType = null, this.labelsVisible = !0, this.labelingInfo = null, this.legendEnabled = !0, this.maxReconnectionAttempts = 0, this.maxReconnectionInterval = 20, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.operationalLayerType = "ArcGISStreamLayer", this.outFields = ["*"], this.popupEnabled = !0, this.popupTemplate = null, this.purgeOptions = new x(), this.refreshInterval = 0, this.screenSizePerspectiveEnabled = !0, this.sourceJSON = null, this.spatialReference = I.WGS84, this.type = "stream", this.url = null, this.updateInterval = 300, this.useViewTime = !0, this.webSocketUrl = null, this._debouncedSaveOperations = G(async (r, o, n) => {
      const { save: l, saveAs: u } = await import("./streamLayerUtils-FxgmkRVr.js");
      switch (r) {
        case c.SAVE:
          return l(this, o);
        case c.SAVE_AS:
          return u(this, n, o);
      }
    });
  }
  normalizeCtorArgs(e, r) {
    return typeof e == "string" ? { url: e, ...r } : e;
  }
  load(e) {
    if (!("WebSocket" in globalThis)) return this.addResolvingPromise(Promise.reject(new d("stream-layer:websocket-unsupported", "WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))), Promise.resolve(this);
    const r = e != null ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Stream Service", "Feed"] }, e).catch(J).then(() => this._fetchService(r))), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set featureReduction(e) {
    const r = this._normalizeFeatureReduction(e);
    this._set("featureReduction", r);
  }
  set renderer(e) {
    f(e, this.fieldsIndex), this._set("renderer", e);
  }
  readRenderer(e, r, o) {
    r = r.layerDefinition || r;
    const n = r.drawingInfo?.renderer;
    if (n) {
      const l = M(n, r, o) || void 0;
      return l || z.getLogger(this).error("Failed to create renderer", { rendererDefinition: r.drawingInfo.renderer, layer: this, context: o }), l;
    }
    return W(r, o);
  }
  async connect(e) {
    const [{ createConnection: r }] = await Promise.all([import("./createConnection-17Rs4gYq.js"), this.load()]), o = this.geometryType ? h.toJSON(this.geometryType) : null, { customParameters: n = null, definitionExpression: l = null, geometryDefinition: u = null, maxReconnectionAttempts: $ = 0, maxReconnectionInterval: j = 20, spatialReference: R = this.spatialReference } = e || this.createConnectionParameters(), p = r(this.parsedUrl, this.spatialReference, R, o, l, u, $, j, n ?? void 0), T = Z([this.on("send-message-to-socket", (y) => p.sendMessageToSocket(y)), this.on("send-message-to-client", (y) => p.sendMessageToClient(y))]);
    return p.once("destroy", T.remove), p;
  }
  createConnectionParameters() {
    return { spatialReference: this.spatialReference, customParameters: this.customParameters, definitionExpression: this.definitionExpression, geometryDefinition: this.geometryDefinition, maxReconnectionAttempts: this.maxReconnectionAttempts, maxReconnectionInterval: this.maxReconnectionInterval };
  }
  createPopupTemplate(e) {
    return q(this, e);
  }
  createQuery() {
    const e = new Y();
    return e.returnGeometry = !0, e.outFields = ["*"], e.where = this.definitionExpression || "1=1", e;
  }
  getFieldDomain(e, r) {
    if (!this.fields) return null;
    let o = null;
    return this.fields.some((n) => (n.name === e && (o = n.domain), !!o)), o;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  serviceSupportsSpatialReference(e) {
    return !0;
  }
  sendMessageToSocket(e) {
    this.emit("send-message-to-socket", e);
  }
  sendMessageToClient(e) {
    this.emit("send-message-to-client", e);
  }
  async save(e) {
    return this._debouncedSaveOperations(c.SAVE, e);
  }
  async saveAs(e, r) {
    return this._debouncedSaveOperations(c.SAVE_AS, r, e);
  }
  write(e, r) {
    const o = r?.messages;
    return this.webSocketUrl ? (o?.push(b(this, "using a custom websocket connection cannot be written to web scenes and web maps")), null) : this.parsedUrl ? super.write(e, r) : (o?.push(b(this, "using a client-side only connection without a url cannot be written to web scenes and web maps")), null);
  }
  async _fetchService(e) {
    if (!this.webSocketUrl && this.parsedUrl) {
      if (!this.sourceJSON) {
        const { data: r } = await H(this.parsedUrl.path, { query: { f: "json", ...this.customParameters, ...this.parsedUrl.query }, responseType: "json", signal: e });
        this.sourceJSON = r;
      }
    } else {
      if (!this.timeInfo?.trackIdField) throw new d("stream-layer:missing-metadata", "The stream layer trackIdField must be specified.");
      if (!this.objectIdField) {
        const r = this.fields.find((o) => o.type === "oid")?.name;
        if (!r) throw new d("stream-layer:missing-metadata", "The stream layer objectIdField must be specified.");
        this.objectIdField = r;
      }
      if (!this.fields) throw new d("stream-layer:missing-metadata", "The stream layer fields must be specified.");
      if (this.fields.some((r) => r.name === this.objectIdField) || this.fields.push(new Q({ name: this.objectIdField, alias: this.objectIdField, type: "oid" })), !this.geometryType) throw new d("stream-layer:missing-metadata", "The stream layer geometryType must be specified.");
      this.webSocketUrl && (this.url = this.webSocketUrl);
    }
    return this.read(this.sourceJSON, { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl }), f(this.renderer, this.fieldsIndex), X(this.timeInfo, this.fieldsIndex), this.objectIdField || (this.objectIdField = "__esri_stream_id__"), B(this, { origin: "service" });
  }
};
t([s({ type: String })], i.prototype, "copyright", void 0), t([s({ readOnly: !0 })], i.prototype, "defaultPopupTemplate", null), t([s({ type: String, json: { name: "layerDefinition.definitionExpression", write: { enabled: !0, allowNull: !0 } } })], i.prototype, "definitionExpression", void 0), t([s({ type: String })], i.prototype, "displayField", void 0), t([s({ type: K })], i.prototype, "elevationInfo", void 0), t([s({ json: { origins: { "web-map": { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-scene": { read: !1, write: !1 } } } })], i.prototype, "featureReduction", null), t([s(w.fields)], i.prototype, "fields", void 0), t([s(w.fieldsIndex)], i.prototype, "fieldsIndex", void 0), t([s({ type: ee, json: { name: "layerDefinition.definitionGeometry", write: !0 } })], i.prototype, "geometryDefinition", void 0), t([s({ type: h.apiValues, json: { read: { reader: h.read } } })], i.prototype, "geometryType", void 0), t([s(te)], i.prototype, "labelsVisible", void 0), t([s({ type: [ie], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: { reader: se }, write: !0 } })], i.prototype, "labelingInfo", void 0), t([s(re)], i.prototype, "legendEnabled", void 0), t([s({ type: ["show", "hide"], json: { origins: { "portal-item": { read: !1, write: !1 } } } })], i.prototype, "listMode", void 0), t([s({ type: g })], i.prototype, "maxReconnectionAttempts", void 0), t([s({ type: g })], i.prototype, "maxReconnectionInterval", void 0), t([s(oe)], i.prototype, "maxScale", void 0), t([s(ne)], i.prototype, "minScale", void 0), t([s({ type: String })], i.prototype, "objectIdField", void 0), t([s({ value: "ArcGISStreamLayer", type: ["ArcGISStreamLayer"] })], i.prototype, "operationalLayerType", void 0), t([s({ readOnly: !0 })], i.prototype, "outFields", void 0), t([s(ae)], i.prototype, "popupEnabled", void 0), t([s({ type: le, json: { name: "popupInfo", write: !0 } })], i.prototype, "popupTemplate", void 0), t([s({ type: x })], i.prototype, "purgeOptions", void 0), t([s({ json: { read: !1, write: !1 } })], i.prototype, "refreshInterval", void 0), t([s({ types: de, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: !1 } }, "web-scene": { name: "layerDefinition.drawingInfo.renderer", types: pe, write: !0 } }, write: { target: "layerDefinition.drawingInfo.renderer" } } })], i.prototype, "renderer", null), t([v("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), v("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], i.prototype, "readRenderer", null), t([s((() => {
  const e = ce(ue);
  return e.json.origins["portal-item"] = { read: !1, write: !1 }, e;
})())], i.prototype, "screenSizePerspectiveEnabled", void 0), t([s()], i.prototype, "sourceJSON", void 0), t([s({ type: I, json: { origins: { service: { read: { source: "spatialReference" } } } } })], i.prototype, "spatialReference", void 0), t([s({ json: { read: !1 } })], i.prototype, "type", void 0), t([s(ye)], i.prototype, "url", void 0), t([s({ type: Number })], i.prototype, "updateInterval", void 0), t([s({ json: { read: !1, write: !1 } })], i.prototype, "useViewTime", void 0), t([s({ type: String })], i.prototype, "webSocketUrl", void 0), i = t([S("esri.layers.StreamLayer")], i);
const ge = i;
export {
  ge as default
};
//# sourceMappingURL=StreamLayer-zhmECGcY.js.map
