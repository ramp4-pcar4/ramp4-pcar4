import { a2 as y, s as c, N as s, O as l, e0 as $, bh as S, d$ as h, aU as w, hY as P, e2 as j, et as L, P as O, S as K, gL as U, p as V, hZ as M, h_ as C, C as x, h$ as q, I as k, a0 as z, Q as F } from "./main-BpIyUAdL.js";
import { i as E } from "./originUtils-BLsWtgV9.js";
import { o as R } from "./jsonContext-D96jlVIh.js";
import { p as J, n as B } from "./resourceUtils-DGuO5NbT.js";
import { i as T } from "./saveAPIKeyUtils-D_KFD4DY.js";
import { t as D } from "./saveUtils-B80O-4O7.js";
async function Z(p, a, t, e, i, r, o) {
  let n = null;
  if (t != null) {
    const u = `${p}/nodepages/`, b = u + Math.floor(t.rootIndex / t.nodesPerPage);
    try {
      return { type: "page", rootPage: (await y(b, { query: { f: "json", ...e, token: i }, responseType: "json", signal: o })).data, rootIndex: t.rootIndex, pageSize: t.nodesPerPage, lodMetric: t.lodSelectionMetricType, urlPrefix: u };
    } catch (N) {
      r?.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", b, N), n = N;
    }
  }
  if (!a) return null;
  const d = a?.split("/").pop(), f = `${p}/nodes/`, g = f + d;
  try {
    return { type: "node", rootNode: (await y(g, { query: { f: "json", ...e, token: i }, responseType: "json", signal: o })).data, urlPrefix: f };
  } catch (u) {
    throw new c("sceneservice:root-node-missing", "Root node missing.", { pageError: n, nodeError: u, url: g });
  }
}
let H = null;
function Q() {
  return H;
}
const re = (p) => {
  let a = class extends p {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = K(async (t, e, i) => {
        switch (t) {
          case v.SAVE:
            return this._save(e);
          case v.SAVE_AS:
            return this._saveAs(i, e);
        }
      });
    }
    readSpatialReference(t, e) {
      return this._readSpatialReference(e);
    }
    _readSpatialReference(t) {
      if (t.spatialReference != null) return S.fromJSON(t.spatialReference);
      const e = t.store, i = e.indexCRS || e.geographicCRS, r = i && parseInt(i.substring(i.lastIndexOf("/") + 1, i.length), 10);
      return r != null ? new S(r) : null;
    }
    readFullExtent(t, e, i) {
      if (t != null && typeof t == "object") {
        const n = t.spatialReference == null ? { ...t, spatialReference: this._readSpatialReference(e) } : t;
        return w.fromJSON(n, i);
      }
      const r = e.store, o = this._readSpatialReference(e);
      return o == null || r?.extent == null || !Array.isArray(r.extent) || r.extent.some((n) => n < I) ? null : new w({ xmin: r.extent[0], ymin: r.extent[1], xmax: r.extent[2], ymax: r.extent[3], spatialReference: o });
    }
    parseVersionString(t) {
      const e = { major: Number.NaN, minor: Number.NaN, versionString: t }, i = t.split(".");
      return i.length >= 2 && (e.major = parseInt(i[0], 10), e.minor = parseInt(i[1], 10)), e;
    }
    readVersion(t, e) {
      const i = e.store, r = i.version != null ? i.version.toString() : "";
      return this.parseVersionString(r);
    }
    readTitlePortalItem(t) {
      return this.sublayerTitleMode !== "item-title" ? void 0 : t;
    }
    readTitleService(t, e) {
      const i = this.portalItem?.title;
      if (this.sublayerTitleMode === "item-title") return U(this.url, e.name);
      let r = e.name;
      if (!r && this.url) {
        const o = V(this.url);
        o != null && (r = o.title);
      }
      return this.sublayerTitleMode === "item-title-and-service-name" && i && (r = i + " - " + r), M(r);
    }
    set url(t) {
      const e = C({ layer: this, url: t, nonStandardUrlAllowed: !1, logger: x.getLogger(this) });
      this._set("url", e.url), e.layerId != null && this._set("layerId", e.layerId);
    }
    writeUrl(t, e, i, r) {
      q(this, t, "layers", e, r);
    }
    get parsedUrl() {
      const t = this._get("url"), e = k(t);
      return this.layerId != null && (e.path = `${e.path}/layers/${this.layerId}`), e;
    }
    async _fetchIndexAndUpdateExtent(t, e) {
      this.indexInfo = Z(this.parsedUrl.path, this.rootNode, t, this.customParameters, this.apiKey, x.getLogger(this), e), this.fullExtent == null || this.fullExtent.hasZ || this._updateExtent(await this.indexInfo);
    }
    _updateExtent(t) {
      if (t?.type === "page") {
        const e = t.rootIndex % t.pageSize, i = t.rootPage?.nodes?.[e];
        if (i?.obb?.center == null || i.obb.halfSize == null) throw new c("sceneservice:invalid-node-page", "Invalid node page.");
        if (i.obb.center[0] < I || this.fullExtent == null || this.fullExtent.hasZ) return;
        const r = i.obb.halfSize, o = i.obb.center[2], n = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
        this.fullExtent.zmin = o - n, this.fullExtent.zmax = o + n;
      } else if (t?.type === "node") {
        const e = t.rootNode?.mbs;
        if (!Array.isArray(e) || e.length !== 4 || e[0] < I) return;
        const i = e[2], r = e[3], { fullExtent: o } = this;
        o && (o.zmin = i - r, o.zmax = i + r);
      }
    }
    async _fetchService(t) {
      if (this.url == null) throw new c("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
      if (this.layerId == null && /SceneServer\/*$/i.test(this.url)) {
        const e = await this._fetchFirstLayerId(t);
        e != null && (this.layerId = e);
      }
      return this._fetchServiceLayer(t);
    }
    async _fetchFirstLayerId(t) {
      const e = await y(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t });
      if (e.data && Array.isArray(e.data.layers) && e.data.layers.length > 0) return e.data.layers[0].id;
    }
    async _fetchServiceLayer(t) {
      const e = await y(this.parsedUrl?.path ?? "", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t });
      e.ssl && (this.url = this.url.replace(/^http:/i, "https:"));
      let i = !1;
      if (e.data.layerType && e.data.layerType === "Voxel" && (i = !0), i) return this._fetchVoxelServiceLayer();
      const r = e.data;
      this.read(r, this._getServiceContext()), this.validateLayer(r);
    }
    async _fetchVoxelServiceLayer(t) {
      const e = (await y(this.parsedUrl?.path + "/layer", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: t })).data;
      this.read(e, this._getServiceContext()), this.validateLayer(e);
    }
    _getServiceContext() {
      return { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl };
    }
    async _ensureLoadBeforeSave() {
      await this.load(), "beforeSave" in this && typeof this.beforeSave == "function" && await this.beforeSave();
    }
    validateLayer(t) {
    }
    _updateTypeKeywords(t, e, i) {
      t.typeKeywords || (t.typeKeywords = []);
      const r = e.getTypeKeywords();
      for (const o of r) t.typeKeywords.push(o);
      t.typeKeywords && (t.typeKeywords = t.typeKeywords.filter((o, n, d) => d.indexOf(o) === n), i === m.newItem && (t.typeKeywords = t.typeKeywords.filter((o) => o !== "Hosted Service")));
    }
    async _saveAs(t, e) {
      const i = { ...A, ...e };
      let r = z.from(t);
      if (!r) throw new c("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to");
      T(r), r.id && (r = r.clone(), r.id = null);
      const o = r.portal || F.getDefault();
      await this._ensureLoadBeforeSave(), r.type = _, r.portal = o;
      const n = R(r, "portal-item", !0), d = { layers: [this.write({}, n)] };
      return await Promise.all(n.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(d, n, i), r.url = this.url, r.title || (r.title = this.title), this._updateTypeKeywords(r, i, m.newItem), await o.signIn(), await o.user?.addItem({ item: r, folder: i?.folder, data: d }), await J(this.resourceReferences, n), this.portalItem = r, E(n), n.portalItem = r, r;
    }
    async _save(t) {
      const e = { ...A, ...t };
      if (!this.portalItem) throw new c("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService");
      if (T(this.portalItem), this.portalItem.type !== _) throw new c("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${_}"`);
      await this._ensureLoadBeforeSave();
      const i = R(this.portalItem, "portal-item", !0), r = { layers: [this.write({}, i)] };
      return await Promise.all(i.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(r, i, e), this.portalItem.url = this.url, this.portalItem.title || (this.portalItem.title = this.title), this._updateTypeKeywords(this.portalItem, e, m.existingItem), await B(this.portalItem, r, this.resourceReferences, i), E(i), this.portalItem;
    }
    async _validateAgainstJSONSchema(t, e, i) {
      const r = i?.validationOptions;
      D(e, { errorName: "sceneservice:save" }, { ignoreUnsupported: r?.ignoreUnsupported, supplementalUnsupportedErrors: ["scenemodification:unsupported"] });
      const o = r?.enabled, n = Q();
      if (o && n) {
        const d = (await n()).validate(t, i.portalItemLayerType);
        if (!d.length) return;
        const f = `Layer item did not validate:
${d.join(`
`)}`;
        if (x.getLogger(this).error(`_validateAgainstJSONSchema(): ${f}`), r.failPolicy === "throw") {
          const g = d.map((u) => new c("sceneservice:schema-validation", u));
          throw new c("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { validationErrors: g });
        }
      }
    }
  };
  return s([l($)], a.prototype, "id", void 0), s([l({ type: S })], a.prototype, "spatialReference", void 0), s([h("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], a.prototype, "readSpatialReference", null), s([l({ type: w })], a.prototype, "fullExtent", void 0), s([h("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], a.prototype, "readFullExtent", null), s([l({ readOnly: !0, type: P })], a.prototype, "heightModelInfo", void 0), s([l({ type: Number, json: { name: "layerDefinition.minScale", write: !0, origins: { service: { read: { source: "minScale" }, write: !1 } } } })], a.prototype, "minScale", void 0), s([l({ type: Number, json: { name: "layerDefinition.maxScale", write: !0, origins: { service: { read: { source: "maxScale" }, write: !1 } } } })], a.prototype, "maxScale", void 0), s([l({ readOnly: !0 })], a.prototype, "version", void 0), s([h("version", ["store.version"])], a.prototype, "readVersion", null), s([l({ type: String, json: { read: { source: "copyrightText" } } })], a.prototype, "copyright", void 0), s([l({ type: String, json: { read: !1 } })], a.prototype, "sublayerTitleMode", void 0), s([l({ type: String })], a.prototype, "title", void 0), s([h("portal-item", "title")], a.prototype, "readTitlePortalItem", null), s([h("service", "title", ["name"])], a.prototype, "readTitleService", null), s([l({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: !0, ignoreOrigin: !0 }, read: !1 } } } })], a.prototype, "layerId", void 0), s([l(j)], a.prototype, "url", null), s([L("url")], a.prototype, "writeUrl", null), s([l()], a.prototype, "parsedUrl", null), s([l({ readOnly: !0 })], a.prototype, "store", void 0), s([l({ type: String, readOnly: !0, json: { read: { source: "store.rootNode" } } })], a.prototype, "rootNode", void 0), a = s([O("esri.layers.mixins.SceneService")], a), a;
}, I = -1e38;
var m;
(function(p) {
  p[p.existingItem = 0] = "existingItem", p[p.newItem = 1] = "newItem";
})(m || (m = {}));
const _ = "Scene Service", A = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: !0, ignoreUnsupported: !1, failPolicy: "throw" } };
var v;
(function(p) {
  p[p.SAVE = 0] = "SAVE", p[p.SAVE_AS = 1] = "SAVE_AS";
})(v || (v = {}));
export {
  re as L,
  v as P,
  Z as r
};
//# sourceMappingURL=SceneService-CLPYBN_8.js.map
