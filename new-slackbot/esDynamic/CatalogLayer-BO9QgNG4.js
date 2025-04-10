import { dK as _, dZ as h, dV as f, d_ as m, V as w, i0 as $, c1 as v, H as j, C as T, Q as F, e8 as c, a0 as S, N as i, O as o, g9 as L, P as g, g1 as x, g4 as P, g7 as R, g8 as O, g6 as V, e1 as C, ga as E, Z as Q, gb as q, gI as B, f$ as N, g2 as D, dW as G, ew as U, dX as J, dY as A, ex as M, ey as H, dS as K, a1 as X, s as b, eX as Y, I as Z, aN as k, f5 as y, gY as W, a2 as z, gf as ee } from "./main-BpIyUAdL.js";
import { a as te } from "./lazyLayerLoader-_7k3m89R.js";
import { T as re } from "./utils-t7Nv5Pk9.js";
import ie from "./FeatureLayerSource-Dft8z27k.js";
import { o as oe } from "./clientSideDefaults-CCyjexDW.js";
class se {
  constructor(t, r) {
    this.objectId = t, this.itemSource = r, this.count = 0, this.layer = null, this.sortValue = void 0;
  }
}
const u = new _(20, (e) => e.destroy());
let l = class extends h(f(m(c))) {
  constructor(e) {
    super(e), this._oidToReference = /* @__PURE__ */ new Map(), this._layerToReference = /* @__PURE__ */ new Map(), this._portals = /* @__PURE__ */ new Map(), this.layers = new w(), this.maximumVisibleSublayers = 10, this.opacity = 1, this.title = "Layers In View", this.type = "catalog-dynamic-group", this.visible = !0;
  }
  load(e) {
    return this.addResolvingPromise(this.parent.load()), Promise.resolve(this);
  }
  get _orderBy() {
    return this.parent.orderBy?.find((e) => !e.valueExpression && e.field) ?? new $({ field: this.parent.objectIdField });
  }
  get _referenceComparator() {
    const e = this._orderBy, t = this.parent.fieldsIndex.get(e.field), r = re(t?.toJSON().type, e.order === "descending");
    return (s, p) => r(s.sortValue, p.sortValue) || s.objectId - s.objectId;
  }
  acquireLayer(e) {
    const t = e.getObjectId(), r = v(this._oidToReference, t, () => this._createLayerReference(e));
    return r.count++, j(() => {
      r.count--, r.count || this._disposeLayerReference(r);
    });
  }
  _createLayerReference(e) {
    const t = e.getObjectId(), r = e.getAttribute(this.parent.itemSourceField), s = new se(t, r);
    if (u.get(r)) return this._addLayer(u.pop(r), s, e), s;
    let p;
    try {
      p = JSON.parse(r);
    } catch (d) {
      return T.getLogger(this).error(d), s;
    }
    return this._createLayer(p).then((d) => {
      this.destroyed || s.count === 0 ? (u.get(r) || u.put(s.itemSource, d), s.layer = null) : this._addLayer(d, s, e);
    }).catch(() => {
    }), s;
  }
  _addLayer(e, t, r) {
    this._layerToReference.set(e, t), t.sortValue = r.getAttribute(this._orderBy.field), t.layer = e, e.parent = this, this.layers.add(e), this.layers.sort((s, p) => this._referenceComparator(this._layerToReference.get(s), this._layerToReference.get(p)));
  }
  _disposeLayerReference(e) {
    e.layer && (this._layerToReference.delete(e.layer), this.layers.remove(e.layer), u.put(e.itemSource, e.layer)), this._oidToReference.delete(e.objectId);
  }
  async _createLayer(e) {
    if (!ne(e))
      return new (await te.UnsupportedLayer())();
    const { itemId: t, portalUrl: r } = e, s = v(this._portals, r, () => new F({ url: r }));
    return c.fromPortalItem(new S({ id: t, portal: s }));
  }
};
i([o()], l.prototype, "_orderBy", null), i([o()], l.prototype, "_referenceComparator", null), i([o({ readOnly: !0 })], l.prototype, "layers", void 0), i([o()], l.prototype, "maximumVisibleSublayers", void 0), i([o(L)], l.prototype, "opacity", void 0), i([o({ type: String, json: { name: "title", write: !0 } })], l.prototype, "title", void 0), i([o({ json: { read: !1 } })], l.prototype, "type", void 0), i([o({ type: Boolean, json: { name: "visibility", write: !0 } })], l.prototype, "visible", void 0), l = i([g("esri.layers.catalog.CatalogDynamicGroupLayer")], l);
const ae = l;
function ne(e) {
  return typeof e == "object" && e != null && "itemId" in e && "portalUrl" in e;
}
let n = class extends h(x(f(m(c)))) {
  constructor(e) {
    super(e), this.labelingInfo = null, this.labelsVisible = !0, this.legendEnabled = !0, this.opacity = 1, this.popupEnabled = !0, this.popupTemplate = null, this.renderer = null, this.type = "catalog-footprint", this.visible = !0;
  }
  load(e) {
    return this.addResolvingPromise(this.parent.load()), Promise.resolve(this);
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  get fields() {
    return this.parent.fields;
  }
  get fieldsIndex() {
    return this.parent.fieldsIndex;
  }
  get geometryType() {
    return this.parent.geometryType;
  }
  get objectIdField() {
    return this.parent.objectIdField;
  }
  get orderBy() {
    return this.parent.orderBy;
  }
  createPopupTemplate(e) {
    const t = { fields: this.parent.fields, objectIdField: this.parent.objectIdField, title: this.title };
    return P(t, e);
  }
  createQuery() {
    return this.parent.createQuery();
  }
  queryFeatures(e, t) {
    return this.parent.queryFeatures(e, t);
  }
};
i([o({ readOnly: !0 })], n.prototype, "defaultPopupTemplate", null), i([o({ type: [R], json: { name: "layerDefinition.drawingInfo.labelingInfo", read: O, write: !0 } })], n.prototype, "labelingInfo", void 0), i([o(V)], n.prototype, "labelsVisible", void 0), i([o(C)], n.prototype, "legendEnabled", void 0), i([o(L)], n.prototype, "opacity", void 0), i([o(E)], n.prototype, "popupEnabled", void 0), i([o({ type: Q, json: { name: "popupInfo", write: !0 } })], n.prototype, "popupTemplate", void 0), i([o({ types: q, json: { name: "layerDefinition.drawingInfo.renderer" } })], n.prototype, "renderer", void 0), i([o({ json: { read: !1 } })], n.prototype, "type", void 0), i([o({ type: Boolean, json: { name: "visibility", write: !0 } })], n.prototype, "visible", void 0), n = i([g("esri.layers.catalog.CatalogFootprintLayer")], n);
const le = n, pe = "esri.layers.CatalogLayer", I = ee();
let a = class extends B(f(N(D(h(G(U(J(A(m(M(H(K(c))))))))))))) {
  constructor(e) {
    super(e), this.dynamicGroupLayer = new ae({ parent: this }), this.fields = null, this.fieldsIndex = null, this.footprintLayer = new le({ parent: this }), this.itemSourceField = "cd_itemsource", this.itemTypeField = "cd_itemtype", this.layers = new w([this.dynamicGroupLayer, this.footprintLayer]), this.source = new ie({ layer: this }), this.type = "catalog";
  }
  load(e) {
    const t = e != null ? e.signal : null, r = this.loadFromPortal({ supportedTypes: ["Feature Service"] }, e).catch(X).then(async () => {
      if (!this.url) throw new b("catalog-layer:missing-url", "Catalog layer must be created with a url");
      if (this.url && this.layerId == null) {
        const s = await this._fetchFirstValidLayerId(t);
        if (s == null) throw new b("catalog-layer:missing-layerId", "There is no Catalog Layer in the service", { service: this.url });
        this.layerId = s;
      }
      await this.source.load(), this.source.sourceJSON && (this.sourceJSON = this.source.sourceJSON, this.read(this.source.sourceJSON, { origin: "service", portalItem: this.portalItem, portal: this.portalItem?.portal, url: this.parsedUrl }));
    }).then(() => Y(this, "load", e));
    return this.addResolvingPromise(r), Promise.resolve(this);
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("capabilities"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get parsedUrl() {
    const e = Z(this.url);
    return e != null && this.layerId != null && (e.path = k(e.path, this.layerId.toString())), e;
  }
  createQuery() {
    const e = new y(), t = this.capabilities?.query;
    e.returnGeometry = !0, t && (e.compactGeometryEnabled = t.supportsCompactGeometry, e.defaultSpatialReferenceEnabled = t.supportsDefaultSpatialReference), e.outFields = ["*"];
    const { timeOffset: r, timeExtent: s } = this;
    return e.timeExtent = r != null && s != null ? s.offset(-r.value, r.unit) : s || null, e;
  }
  getField(e) {
    return this.fieldsIndex.get(e);
  }
  getFieldDomain(e, t) {
    return this.fieldsIndex.get(e)?.domain;
  }
  async queryFeatures(e, t) {
    const r = await this.load(), s = await r.source.queryFeatures(y.from(e) ?? r.createQuery(), t);
    if (s?.features) for (const p of s.features) p.layer = p.sourceLayer = r.footprintLayer;
    return s;
  }
  async queryObjectIds(e, t) {
    return (await this.load()).source.queryObjectIds(y.from(e) ?? this.createQuery(), t);
  }
  async queryFeatureCount(e, t) {
    return (await this.load()).source.queryFeatureCount(y.from(e) ?? this.createQuery(), t);
  }
  async queryExtent(e, t) {
    return (await this.load()).source.queryExtent(y.from(e) ?? this.createQuery(), t);
  }
  serviceSupportsSpatialReference(e) {
    return this.loaded && W(this, e);
  }
  read(e, t) {
    super.read(e, t);
    let r = e.footprintLayer;
    r || t?.origin !== "service" || (r = { layerDefinition: { drawingInfo: oe(e.geometryType) } }), this.footprintLayer.read(r, t);
  }
  _fetchFirstValidLayerId(e) {
    return z(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e }).then((t) => {
      const r = t.data;
      if (r) return Array.isArray(r.layers) ? r.layers.find((s) => s.type === "Catalog Layer")?.id : void 0;
    });
  }
};
i([o({ readOnly: !0 })], a.prototype, "createQueryVersion", null), i([o({ ...I.fields, json: { origins: { service: { name: "fields" } } } })], a.prototype, "fields", void 0), i([o(I.fieldsIndex)], a.prototype, "fieldsIndex", void 0), i([o({ json: { read: !1, write: !1 } })], a.prototype, "footprintLayer", void 0), i([o()], a.prototype, "itemSourceField", void 0), i([o()], a.prototype, "itemTypeField", void 0), i([o()], a.prototype, "layers", void 0), i([o({ value: "CatalogLayer", type: ["CatalogLayer"] })], a.prototype, "operationalLayerType", void 0), i([o()], a.prototype, "outFields", void 0), i([o({ readOnly: !0 })], a.prototype, "parsedUrl", null), i([o()], a.prototype, "source", void 0), i([o({ json: { read: !1 } })], a.prototype, "type", void 0), a = i([g(pe)], a);
const fe = a;
export {
  fe as default
};
//# sourceMappingURL=CatalogLayer-BO9QgNG4.js.map
