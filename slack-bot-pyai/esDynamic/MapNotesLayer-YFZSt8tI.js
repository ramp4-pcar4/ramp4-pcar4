import { dH as x, N as o, O as a, P as C, e7 as G, e4 as B, e6 as v, em as F, dV as k, dZ as z, dX as A, dY as U, d_ as W, bh as b, V as O, en as H, ag as w, cU as M, eo as N, ep as h, eq as I, er as $, ap as q, s as K, es as V, J as X, bb as Y, b7 as Z, b8 as Q, b9 as ee, ao as te, dA as L, d$ as c, et as re, aU as oe, eu as le, ev as E, e8 as ie } from "./main-DhLeoxL5.js";
import { n as ae } from "./objectIdUtils-EszJVKSV.js";
function g(t) {
  return t.featureCollectionType === "markup" || t.layers.some((e) => e.layerDefinition.visibilityField != null || !R(e));
}
function R({ layerDefinition: t, featureSet: e }) {
  const r = t.geometryType ?? e.geometryType;
  return J.find((l) => r === l.geometryTypeJSON && t.drawingInfo?.renderer?.symbol?.type === l.identifyingSymbol.type);
}
function D() {
  return new oe({ xmin: -180, ymin: -90, xmax: 180, ymax: 90 });
}
const T = new x({ name: "OBJECTID", alias: "OBJECTID", type: "oid", nullable: !1, editable: !1 }), ne = new x({ name: "title", alias: "Title", type: "string", nullable: !0, editable: !0, length: 255 });
let u = class extends le {
  constructor(t) {
    super(t), this.visibilityMode = "inherited";
  }
  initialize() {
    for (const t of this.graphics) t.sourceLayer = this.layer;
    this.graphics.on("after-add", (t) => {
      t.item.sourceLayer = this.layer;
    }), this.graphics.on("after-remove", (t) => {
      t.item.sourceLayer = null;
    });
  }
  get fullExtent() {
    const t = this.layer?.spatialReference, e = this.fullBounds;
    return t ? e == null ? h(D(), t).geometry : $(e, t) : null;
  }
  get fullBounds() {
    const t = this.layer?.spatialReference;
    if (!t) return null;
    const e = M();
    return this.graphics.forEach((r) => {
      const l = r.geometry != null ? h(r.geometry, t).geometry : null;
      l != null && N(e, l.type === "point" ? l : l.extent, e);
    }), I(e, E) ? null : e;
  }
  get sublayers() {
    return this.graphics;
  }
};
o([a({ readOnly: !0 })], u.prototype, "fullExtent", null), o([a({ readOnly: !0 })], u.prototype, "fullBounds", null), o([a({ readOnly: !0 })], u.prototype, "sublayers", null), o([a()], u.prototype, "layer", void 0), o([a()], u.prototype, "layerId", void 0), o([a({ readOnly: !0 })], u.prototype, "visibilityMode", void 0), u = o([C("esri.layers.MapNotesLayer.MapNotesSublayer")], u);
const J = [{ geometryType: "polygon", geometryTypeJSON: "esriGeometryPolygon", id: "polygonLayer", layerId: 0, title: "Polygons", identifyingSymbol: new G().toJSON() }, { geometryType: "polyline", geometryTypeJSON: "esriGeometryPolyline", id: "polylineLayer", layerId: 1, title: "Polylines", identifyingSymbol: new B().toJSON() }, { geometryType: "multipoint", geometryTypeJSON: "esriGeometryMultipoint", id: "multipointLayer", layerId: 2, title: "Multipoints", identifyingSymbol: new v().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", id: "pointLayer", layerId: 3, title: "Points", identifyingSymbol: new v().toJSON() }, { geometryType: "point", geometryTypeJSON: "esriGeometryPoint", id: "textLayer", layerId: 4, title: "Text", identifyingSymbol: new F().toJSON() }];
let i = class extends k(z(A(U(W(ie))))) {
  constructor(t) {
    super(t), this.capabilities = { operations: { supportsMapNotesEditing: !0 } }, this.featureCollections = null, this.featureCollectionJSON = null, this.featureCollectionType = "notes", this.legendEnabled = !1, this.listMode = "hide-children", this.minScale = 0, this.maxScale = 0, this.spatialReference = b.WGS84, this.sublayers = new O(J.map((e) => new u({ id: e.id, layerId: e.layerId, title: e.title, layer: this }))), this.title = "Map Notes", this.type = "map-notes", this.visibilityMode = "inherited";
  }
  readCapabilities(t, e, r) {
    return { operations: { supportsMapNotesEditing: !g(e) && r?.origin !== "portal-item" } };
  }
  readFeatureCollections(t, e, r) {
    if (!g(e)) return null;
    const l = e.layers.map((s) => {
      const n = new H();
      return n.read(s, r), n;
    });
    return new O({ items: l });
  }
  readLegacyfeatureCollectionJSON(t, e) {
    return g(e) ? w(e.featureCollection) : null;
  }
  get fullExtent() {
    const t = this.spatialReference, e = M();
    return this.sublayers != null ? this.sublayers.forEach(({ fullBounds: r }) => r != null ? N(e, r, e) : e, e) : this.featureCollectionJSON?.layers.some((r) => r.layerDefinition.extent) && this.featureCollectionJSON.layers.forEach((r) => {
      const l = h(r.layerDefinition.extent, t).geometry;
      l != null && N(e, l, e);
    }), I(e, E) ? h(D(), t).geometry : $(e, t);
  }
  readMinScale(t, e) {
    for (const r of e.layers) if (r.layerDefinition.minScale != null) return r.layerDefinition.minScale;
    return 0;
  }
  readMaxScale(t, e) {
    for (const r of e.layers) if (r.layerDefinition.maxScale != null) return r.layerDefinition.maxScale;
    return 0;
  }
  get multipointLayer() {
    return this._findSublayer("multipointLayer");
  }
  get pointLayer() {
    return this._findSublayer("pointLayer");
  }
  get polygonLayer() {
    return this._findSublayer("polygonLayer");
  }
  get polylineLayer() {
    return this._findSublayer("polylineLayer");
  }
  readSpatialReference(t, e) {
    return e.layers.length ? b.fromJSON(e.layers[0].layerDefinition.spatialReference) : b.WGS84;
  }
  readSublayers(t, e, r) {
    if (g(e)) return null;
    const l = [];
    let s = e.layers.reduce((n, y) => Math.max(n, y.layerDefinition.id ?? -1), -1) + 1;
    for (const n of e.layers) {
      const { layerDefinition: y, featureSet: p } = n, m = y.id ?? s++, d = R(n);
      if (d != null) {
        const f = new u({ id: d.id, title: y.name, layerId: m, layer: this, graphics: p.features.map(({ geometry: S, symbol: _, attributes: j, popupInfo: P }) => q.fromJSON({ attributes: j, geometry: S, symbol: _, popupTemplate: P })) });
        l.push(f);
      }
    }
    return new O(l);
  }
  writeSublayers(t, e, r, l) {
    const { minScale: s, maxScale: n } = this;
    if (t == null) return;
    const y = t.some((d) => d.graphics.length > 0);
    if (!this.capabilities.operations.supportsMapNotesEditing) return void (y && l?.messages?.push(new K("map-notes-layer:editing-not-supported", "New map notes cannot be added to this layer")));
    const p = [];
    let m = this.spatialReference.toJSON();
    e: for (const d of t) for (const f of d.graphics) if (f.geometry != null) {
      m = f.geometry.spatialReference.toJSON();
      break e;
    }
    for (const d of J) {
      const f = t.find((S) => d.id === S.id);
      this._writeMapNoteSublayer(p, f, d, s, n, m, l);
    }
    V("featureCollection.layers", p, e);
  }
  get textLayer() {
    return this._findSublayer("textLayer");
  }
  load(t) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, t)), Promise.resolve(this);
  }
  read(t, e) {
    "featureCollection" in t && (t = w(t), Object.assign(t, t.featureCollection)), super.read(t, e);
  }
  async beforeSave() {
    if (this.sublayers == null) return;
    let t = null;
    const e = [];
    for (const l of this.sublayers) for (const s of l.graphics) if (s.geometry != null) {
      const n = s.geometry;
      t ? X(n.spatialReference, t) || (Y(n.spatialReference, t) || Z() || await Q(), s.geometry = ee(n, t)) : t = n.spatialReference, e.push(s);
    }
    const r = await te(e.map((l) => l.geometry));
    e.forEach((l, s) => l.geometry = r[s]);
  }
  _findSublayer(t) {
    return this.sublayers == null ? null : this.sublayers?.find((e) => e.id === t) ?? null;
  }
  _writeMapNoteSublayer(t, e, r, l, s, n, y) {
    const p = [];
    if (e != null) {
      for (const m of e.graphics) this._writeMapNote(p, m, r.geometryType, y);
      this._normalizeObjectIds(p, T), t.push({ layerDefinition: { name: e.title, drawingInfo: { renderer: { type: "simple", symbol: w(r.identifyingSymbol) } }, id: e.layerId, geometryType: r.geometryTypeJSON, minScale: l, maxScale: s, objectIdField: "OBJECTID", fields: [T.toJSON(), ne.toJSON()], spatialReference: n }, featureSet: { features: p, geometryType: r.geometryTypeJSON } });
    }
  }
  _writeMapNote(t, e, r, l) {
    if (e == null) return;
    const { geometry: s, symbol: n, popupTemplate: y } = e;
    if (s == null) return;
    if (s.type !== r) return void l?.messages?.push(new L("map-notes-layer:invalid-geometry-type", `Geometry "${s.type}" cannot be saved in "${r}" layer`, { graphic: e }));
    if (n == null) return void l?.messages?.push(new L("map-notes-layer:no-symbol", "Skipping map notes with no symbol", { graphic: e }));
    const p = { attributes: { ...e.attributes }, geometry: s.toJSON(), symbol: n.toJSON() };
    y != null && (p.popupInfo = y.toJSON()), t.push(p);
  }
  _normalizeObjectIds(t, e) {
    const r = e.name;
    let l = ae(r, t) + 1;
    const s = /* @__PURE__ */ new Set();
    for (const n of t) {
      n.attributes || (n.attributes = {});
      const { attributes: y } = n;
      (y[r] == null || s.has(y[r])) && (y[r] = l++), s.add(y[r]);
    }
  }
};
o([a({ readOnly: !0 })], i.prototype, "capabilities", void 0), o([c(["portal-item", "web-map"], "capabilities", ["layers"])], i.prototype, "readCapabilities", null), o([a({ readOnly: !0 })], i.prototype, "featureCollections", void 0), o([c(["web-map", "portal-item"], "featureCollections", ["layers"])], i.prototype, "readFeatureCollections", null), o([a({ readOnly: !0, json: { origins: { "web-map": { write: { enabled: !0, target: "featureCollection" } } } } })], i.prototype, "featureCollectionJSON", void 0), o([c(["web-map", "portal-item"], "featureCollectionJSON", ["featureCollection"])], i.prototype, "readLegacyfeatureCollectionJSON", null), o([a({ readOnly: !0, json: { read: !0, write: { enabled: !0, ignoreOrigin: !0 } } })], i.prototype, "featureCollectionType", void 0), o([a({ readOnly: !0 })], i.prototype, "fullExtent", null), o([a({ readOnly: !0, json: { origins: { "web-map": { write: { target: "featureCollection.showLegend", overridePolicy() {
  return { enabled: this.featureCollectionJSON != null };
} } } } } })], i.prototype, "legendEnabled", void 0), o([a({ type: ["show", "hide", "hide-children"] })], i.prototype, "listMode", void 0), o([a({ type: Number, nonNullable: !0, json: { write: !1 } })], i.prototype, "minScale", void 0), o([c(["web-map", "portal-item"], "minScale", ["layers"])], i.prototype, "readMinScale", null), o([a({ type: Number, nonNullable: !0, json: { write: !1 } })], i.prototype, "maxScale", void 0), o([c(["web-map", "portal-item"], "maxScale", ["layers"])], i.prototype, "readMaxScale", null), o([a({ readOnly: !0 })], i.prototype, "multipointLayer", null), o([a({ value: "ArcGISFeatureLayer", type: ["ArcGISFeatureLayer"] })], i.prototype, "operationalLayerType", void 0), o([a({ readOnly: !0 })], i.prototype, "pointLayer", null), o([a({ readOnly: !0 })], i.prototype, "polygonLayer", null), o([a({ readOnly: !0 })], i.prototype, "polylineLayer", null), o([a({ type: b })], i.prototype, "spatialReference", void 0), o([c(["web-map", "portal-item"], "spatialReference", ["layers"])], i.prototype, "readSpatialReference", null), o([a({ readOnly: !0, json: { origins: { "web-map": { write: { ignoreOrigin: !0 } } } } })], i.prototype, "sublayers", void 0), o([c("web-map", "sublayers", ["layers"])], i.prototype, "readSublayers", null), o([re("web-map", "sublayers")], i.prototype, "writeSublayers", null), o([a({ readOnly: !0 })], i.prototype, "textLayer", null), o([a()], i.prototype, "title", void 0), o([a({ readOnly: !0, json: { read: !1 } })], i.prototype, "type", void 0), i = o([C("esri.layers.MapNotesLayer")], i);
const pe = i;
export {
  pe as default
};
//# sourceMappingURL=MapNotesLayer-YFZSt8tI.js.map
