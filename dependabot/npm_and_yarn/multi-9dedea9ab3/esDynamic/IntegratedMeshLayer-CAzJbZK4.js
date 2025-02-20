import { O as i, P as r, b5 as _, eH as I, Q as f, bX as L, br as b, dL as x, iu as N, aa as R, e0 as M, V as j, I as $, $ as A, ej as J, e5 as D, e6 as P, e7 as V, e8 as U, ek as E, el as K, bi as C, fw as k, p as z, _ as G, s as d, D as v, e9 as H, er as q, ei as F } from "./main-DMoCLB29.js";
import { j as h } from "./persistable-CLso4gLk.js";
import { L as Q, C as S } from "./SceneService-D2fKLZRO.js";
import { p as X, a as Z, y as B, m as W } from "./I3SLayerDefinitions-CXLqm2OV.js";
import { $ as w, Z as Y, w as ee } from "./elevationInfoUtils-B0Hxgwna.js";
var m;
let n = m = class extends L {
  constructor(e) {
    super(e), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e, t, s, a) {
    if (a.layer?.spatialReference && !a.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!b(e.spatialReference, a.layer.spatialReference)) return void (a?.messages && a.messages.push(new x("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: a.layer.spatialReference, context: a })));
      const l = new _();
      N(e, l, a.layer.spatialReference), t[s] = l.toJSON(a);
    } else t[s] = e.toJSON(a);
    delete t[s].spatialReference;
  }
  clone() {
    return new m({ geometry: R(this.geometry), type: this.type });
  }
};
i([r({ type: _ }), h()], n.prototype, "geometry", void 0), i([I(["web-scene", "portal-item"], "geometry")], n.prototype, "writeGeometry", null), i([r({ type: ["clip", "mask", "replace"], nonNullable: !0 }), h()], n.prototype, "type", void 0), n = m = i([f("esri.layers.support.SceneModification")], n);
const c = n;
var p;
let y = p = class extends M(j.ofType(c)) {
  constructor(e) {
    super(e), this.url = null;
  }
  clone() {
    return new p({ url: this.url, items: this.items.map((e) => e.clone()) });
  }
  toJSON(e) {
    return this.toArray().map((t) => t.toJSON(e)).filter((t) => !!t.geometry);
  }
  static fromJSON(e, t) {
    const s = new p();
    for (const a of e) s.add(c.fromJSON(a, t));
    return s;
  }
  static async fromUrl(e, t, s) {
    const a = { url: $(e), origin: "service" }, l = await A(e, { responseType: "json", signal: s?.signal }), O = t.toJSON(), u = [];
    for (const g of l.data) u.push(c.fromJSON({ ...g, geometry: { ...g.geometry, spatialReference: O } }, a));
    return new p({ url: e, items: u });
  }
};
i([r({ type: String })], y.prototype, "url", void 0), y = p = i([f("esri.layers.support.SceneModifications")], y);
const T = y;
let o = class extends Q(J(D(P(V(U(E(K(F)))))))) {
  constructor(...e) {
    super(...e), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.path = null;
  }
  initialize() {
    this.addHandles(C(() => this.modifications, "after-changes", () => this.modifications = this.modifications, k));
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  readModifications(e, t, s) {
    this._modificationsSource = { url: z(e, s), context: s };
  }
  set elevationInfo(e) {
    this._set("elevationInfo", e), this._validateElevationInfo();
  }
  async load(e) {
    return this.addResolvingPromise(this._doLoad(e)), this;
  }
  async _doLoad(e) {
    const t = e?.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e);
    } catch (s) {
      G(s);
    }
    if (await this._fetchService(t), this._modificationsSource != null) {
      const s = await T.fromUrl(this._modificationsSource.url, this.spatialReference, e);
      this.setAtOrigin("modifications", s, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t);
  }
  beforeSave() {
    if (this._modificationsSource != null) return this.load().then(() => {
    }, () => {
    });
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(S.SAVE_AS, { ...t, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e);
  }
  async save() {
    const e = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(S.SAVE, e);
  }
  validateLayer(e) {
    if (e.layerType && e.layerType !== "IntegratedMesh") throw new d("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new d("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1) throw new d("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo() {
    const e = this.elevationInfo, t = "Integrated mesh layers";
    w(v.getLogger(this), Y(t, "absolute-height", e)), w(v.getLogger(this), ee(t, e));
  }
};
i([r({ type: String, readOnly: !0 })], o.prototype, "geometryType", void 0), i([r({ type: ["show", "hide"] })], o.prototype, "listMode", void 0), i([r({ type: ["IntegratedMeshLayer"] })], o.prototype, "operationalLayerType", void 0), i([r({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0), i([r({ type: X, readOnly: !0 })], o.prototype, "nodePages", void 0), i([r({ type: [Z], readOnly: !0 })], o.prototype, "materialDefinitions", void 0), i([r({ type: [B], readOnly: !0 })], o.prototype, "textureSetDefinitions", void 0), i([r({ type: [W], readOnly: !0 })], o.prototype, "geometryDefinitions", void 0), i([r({ readOnly: !0 })], o.prototype, "serviceUpdateTimeStamp", void 0), i([r({ type: T }), h({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], o.prototype, "modifications", void 0), i([H(["web-scene", "portal-item"], "modifications")], o.prototype, "readModifications", null), i([r(q)], o.prototype, "elevationInfo", null), i([r({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], o.prototype, "path", void 0), o = i([f("esri.layers.IntegratedMeshLayer")], o);
const ae = o;
export {
  ae as default
};
//# sourceMappingURL=IntegratedMeshLayer-CAzJbZK4.js.map
