import { N as i, O as r, aR as _, et as O, P as f, b_ as x, bb as b, dA as L, i1 as N, ag as R, dR as $, V as M, I as A, a2 as j, ew as P, dX as J, dY as V, dZ as D, d_ as U, ex as E, ey as K, b2 as C, fi as z, u as F, a1 as G, s as d, C as v, d$ as H, eF as Z, e8 as k } from "./main-DhLeoxL5.js";
import { j as h } from "./persistable-CTb942Jw.js";
import { L as q, P as S } from "./SceneService-CP7mdPzE.js";
import { s as X, l as Y, u as B, m as Q } from "./I3SLayerDefinitions-Bhtb3N4G.js";
import { I as w, x as W, Z as ee } from "./elevationInfoUtils-DAYVWIPl.js";
var m;
let n = m = class extends x {
  constructor(e) {
    super(e), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e, t, s, a) {
    if (a.layer?.spatialReference && !a.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!b(e.spatialReference, a.layer.spatialReference)) return void (a?.messages && a.messages.push(new L("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: a.layer.spatialReference, context: a })));
      const l = new _();
      N(e, l, a.layer.spatialReference), t[s] = l.toJSON(a);
    } else t[s] = e.toJSON(a);
    delete t[s].spatialReference;
  }
  clone() {
    return new m({ geometry: R(this.geometry), type: this.type });
  }
};
i([r({ type: _ }), h()], n.prototype, "geometry", void 0), i([O(["web-scene", "portal-item"], "geometry")], n.prototype, "writeGeometry", null), i([r({ type: ["clip", "mask", "replace"], nonNullable: !0 }), h()], n.prototype, "type", void 0), n = m = i([f("esri.layers.support.SceneModification")], n);
const c = n;
var p;
let y = p = class extends $(M.ofType(c)) {
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
    const a = { url: A(e), origin: "service" }, l = await j(e, { responseType: "json", signal: s?.signal }), I = t.toJSON(), u = [];
    for (const g of l.data) u.push(c.fromJSON({ ...g, geometry: { ...g.geometry, spatialReference: I } }, a));
    return new p({ url: e, items: u });
  }
};
i([r({ type: String })], y.prototype, "url", void 0), y = p = i([f("esri.layers.support.SceneModifications")], y);
const T = y;
let o = class extends q(P(J(V(D(U(E(K(k)))))))) {
  constructor(...e) {
    super(...e), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.path = null;
  }
  initialize() {
    this.addHandles(C(() => this.modifications, "after-changes", () => this.modifications = this.modifications, z));
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  readModifications(e, t, s) {
    this._modificationsSource = { url: F(e, s), context: s };
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
    w(v.getLogger(this), W(t, "absolute-height", e)), w(v.getLogger(this), ee(t, e));
  }
};
i([r({ type: String, readOnly: !0 })], o.prototype, "geometryType", void 0), i([r({ type: ["show", "hide"] })], o.prototype, "listMode", void 0), i([r({ type: ["IntegratedMeshLayer"] })], o.prototype, "operationalLayerType", void 0), i([r({ json: { read: !1 }, readOnly: !0 })], o.prototype, "type", void 0), i([r({ type: X, readOnly: !0 })], o.prototype, "nodePages", void 0), i([r({ type: [Y], readOnly: !0 })], o.prototype, "materialDefinitions", void 0), i([r({ type: [B], readOnly: !0 })], o.prototype, "textureSetDefinitions", void 0), i([r({ type: [Q], readOnly: !0 })], o.prototype, "geometryDefinitions", void 0), i([r({ readOnly: !0 })], o.prototype, "serviceUpdateTimeStamp", void 0), i([r({ type: T }), h({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], o.prototype, "modifications", void 0), i([H(["web-scene", "portal-item"], "modifications")], o.prototype, "readModifications", null), i([r(Z)], o.prototype, "elevationInfo", null), i([r({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 }, "portal-item": { read: !0, write: !0 } }, read: !1 } })], o.prototype, "path", void 0), o = i([f("esri.layers.IntegratedMeshLayer")], o);
const ae = o;
export {
  ae as default
};
//# sourceMappingURL=IntegratedMeshLayer-COFmI-6v.js.map
