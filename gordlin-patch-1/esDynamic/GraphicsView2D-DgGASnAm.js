import { cB as E, c$ as W, j_ as Z, d7 as x, j$ as C, k0 as B, k1 as N, aR as X, az as g, k2 as Q, av as A, af as m, h1 as Y, k3 as J, k4 as K, aA as ee, aH as te, cP as M, dT as se, cW as re, U as ie, b6 as oe, k5 as ae, a8 as ne, aG as he, k6 as de, aF as ce, k7 as le, k8 as ue, k9 as pe, i9 as me, N as y, O as _, P as ye, dU as _e } from "./main-BEi6lHs4.js";
import { W as ge, J as O, d as fe, U as be, K as we, n as Ie } from "./UpdateTracking2D-CNnkJH2z.js";
import { a as S, O as Se } from "./definitions-7ZaZRHRo.js";
import { b as ve } from "./WGLContainer-CC7tAcNi.js";
import { M as xe, p as Re, b as Te, s as Me, a as $e, n as Ge, c as ke } from "./AttributeStore-BuC3moH7.js";
import { s as Ce, y as ze, z as Ue, a as Oe, p as Pe, S as je, u as qe, x as P, b as Ee, t as Ae } from "./FeatureCommandQueue-Dt5gN2ml.js";
import { a as Ve } from "./normalizeUtilsSync-BqORsi-4.js";
import { x as De, j as Fe } from "./timeSupport-BJKH2psZ.js";
async function He(r, e, t) {
  const s = [], i = { scaleInfo: Ce(r), scaleExpression: null };
  for (const o of e) switch (o.type) {
    case "marker":
      s.push(...qe(t.instances.marker, o, P, i));
      break;
    case "fill":
      o.spriteRasterizationParam == null ? s.push(...Pe(t.instances.fill, o, i)) : s.push(...je(t.instances.complexFill, o, !1, i));
      break;
    case "line":
      o.spriteRasterizationParam ? s.push(...Ue(t.instances.texturedLine, o, !1, i)) : s.push(...Oe(t.instances.line, o, !1, i));
      break;
    case "text":
      s.push(...ze(t.instances.text, o, P, i));
  }
  return s;
}
class $ extends xe {
  static from(e, t, s) {
    return new $(e, t, s);
  }
  constructor(e, t, s) {
    super(s), this._items = e, this._tile = t, this._index = -1, this._cachedGeometry = null;
    const i = t.lod;
    i.wrap && (this._wrappingInfo = { worldSizeX: i.worldSize[0] });
  }
  get _current() {
    return this._items[this._index];
  }
  getItem() {
    return this._current;
  }
  getZOrder() {
    return this._current.zOrder;
  }
  getMeshWriters() {
    return this._current.symbolResource?.symbolInfo.meshWriters ?? [];
  }
  hasField(e) {
    return this._current.attributes[e] != null;
  }
  field(e) {
    return this.readAttribute(e);
  }
  get geometryType() {
    const e = E(this._current.geometry);
    return e === "esriGeometryPoint" ? "esriGeometryMultipoint" : e;
  }
  getCursor() {
    return this.copy();
  }
  copy() {
    const e = new $(this._items, this._tile, this.metadata);
    return this.copyInto(e), e;
  }
  copyInto(e) {
    super.copyInto(e), e._cachedGeometry = this._cachedGeometry, e._index = this._index;
  }
  get fields() {
    throw new Error("Fields reading not supported to graphics.");
  }
  get hasFeatures() {
    return !!this._items.length;
  }
  get hasNext() {
    return this._index + 1 < this._items.length;
  }
  get exceededTransferLimit() {
    throw new Error("InternalError: exceededTransferLimit not implemented for graphics.");
  }
  get hasZ() {
    return !1;
  }
  get hasM() {
    return !1;
  }
  getInTransform() {
    return this._tile.transform;
  }
  getSize() {
    return this._items.length;
  }
  getAttributeHash() {
    let e = "";
    for (const t in this._current.attributes) e += this._current.attributes[t];
    return e;
  }
  getObjectId() {
    return this._items[this._index].objectId;
  }
  getDisplayId() {
    return this._current.displayId;
  }
  setDisplayId(e) {
    throw new Error("InternalError: Setting displayId not supported for graphics.");
  }
  setIndex(e) {
    this._index = e;
  }
  getIndex() {
    return this._index;
  }
  next() {
    for (this._cachedGeometry = null; ++this._index < this._items.length && !this._getExists(); ) ;
    return this._index < this._items.length;
  }
  readGeometryArea() {
    throw new Error("InternalError: readGeometryArea not supported for graphics.");
  }
  _readGeometry() {
    if (!this._cachedGeometry) {
      let e = W(this._current.projectedGeometry, this.hasZ, this.hasM);
      if (this.geometryType === "esriGeometryPolyline" && (e = Z(new x(), e, this.hasZ, this.hasM, this.geometryType, this._tile.transform.scale[0])), this._cachedGeometry = C(new x(), e, this.hasZ, this.hasM, this.geometryType, this._tile.transform), !this._cachedGeometry) return null;
      this._wrapGeometry(this._cachedGeometry);
    }
    return this._cachedGeometry;
  }
  _wrapGeometry(e) {
    if (!this._wrappingInfo) return;
    const { worldSizeX: t } = this._wrappingInfo;
    if (e.isPoint) return t === 1 ? (e.coords.push(S, 0), e.coords.push(2 * -S, 0), void e.lengths.push(3)) : t === 2 ? (e.coords.push(2 * S, 0), e.coords.push(4 * -S, 0), void e.lengths.push(3)) : void this._wrapVertex(e.coords, 0, 2, t);
    if (this.geometryType === "esriGeometryMultipoint") {
      if (t === 1) {
        const s = e.coords.slice();
        s[0] -= 512;
        const i = e.coords.slice();
        i[0] += 512, e.coords.push(...s, ...i);
        const o = e.lengths[0];
        return void e.lengths.push(o, o);
      }
      this._wrapVertex(e.coords, 0, 2, t);
    }
  }
  _wrapVertex(e, t, s, i) {
    const o = t * s, a = e[o];
    a < -S * (i - 2) ? e[o] = a + S * i : a > S * (i - 1) && (e[o] = a - S * i);
  }
  _readX() {
    const e = this._readGeometry();
    return e != null ? e.coords[0] : 0;
  }
  _readY() {
    const e = this._readGeometry();
    return e != null ? e.coords[1] : 0;
  }
  _readServerCentroid() {
    switch (this.geometryType) {
      case "esriGeometryPolygon": {
        const e = N(this._current.projectedGeometry), t = new x([], e);
        return C(new x(), t, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
      case "esriGeometryPolyline": {
        const e = this._current.projectedGeometry, t = B(e.paths, this.hasZ), s = new x([], t);
        return C(new x(), s, this.hasZ, this.hasM, this.geometryType, this._tile.transform);
      }
    }
    return null;
  }
  _readAttribute(e, t) {
    const s = this._current.attributes[e];
    if (s !== void 0) return s;
    const i = e.toLowerCase();
    for (const o in this._current.attributes) if (o.toLowerCase() === i) return this._current.attributes[o];
  }
  _readAttributes() {
    return this._current.attributes;
  }
}
const z = 50;
function j(r) {
  if (!r) return null;
  const { xmin: e, ymin: t, xmax: s, ymax: i, spatialReference: o } = r;
  return new X({ rings: [[[e, t], [e, i], [s, i], [s, t], [e, t]]], spatialReference: o });
}
let Le = class V {
  static fromGraphic(e, t, s, i) {
    return new V(e.geometry, t, e.attributes, e.visible, e.uid, s, i);
  }
  constructor(e, t, s, i, o, a, n) {
    this.geometry = e, this.symbol = t, this.attributes = s, this.visible = i, this.objectId = o, this.zOrder = a, this.displayId = n, this.bounds = g(), this.prevBounds = g(), this.size = [0, 0, 0, 0];
  }
  get linearCIM() {
    return this.symbolResource?.symbolInfo.linearCIM;
  }
  update(e, t, s) {
    return (this.geometry !== e.geometry || this.attributes !== e.attributes || this.symbol !== t || this.zOrder !== s || this.visible !== e.visible) && (this.prevBounds = this.bounds, this.bounds = g(), this.zOrder = s, this.geometry = e.geometry, this.attributes = e.attributes, this.symbol = t, this.visible = e.visible, this.symbolResource = null, this.projectedGeometry = null, !0);
  }
  async projectAndNormalize(e) {
    let t = this.geometry;
    if (!t || !t.spatialReference || t.type === "mesh") return;
    t.type === "extent" && (t = j(t)), await De(t.spatialReference, e);
    const s = Ve(t);
    if (!s) return;
    const i = Fe(s, t.spatialReference, e);
    i && Q(i), this.projectedGeometry = A(i) ? j(i) : i;
  }
};
class We {
  constructor(e, t, s) {
    this.added = e, this.updated = t, this.removed = s;
  }
  hasAnyUpdate() {
    return !!(this.added.length || this.updated.length || this.removed.length);
  }
}
const q = 1e-5;
function Ze(r, e) {
  return e.zOrder - r.zOrder;
}
class Be {
  constructor(e, t, s, i, o) {
    this._items = /* @__PURE__ */ new Map(), this._boundsDirty = !1, this._outSpatialReference = e, this._cimResourceManager = t, this._hittestDrawHelper = new ge(t), this._tileInfoView = s, this._store = o;
    const a = s.getClosestInfoForScale(i);
    this._resolution = this._tileInfoView.getTileResolution(a.level);
  }
  items() {
    return this._items.values();
  }
  getItem(e) {
    return this._items.get(e);
  }
  async update(e, t, s) {
    const i = [], o = [], a = [], n = /* @__PURE__ */ new Set(), l = [];
    let d = 0;
    for (const h of e.items) {
      d++;
      const c = h.uid, u = this._items.get(c), f = t(h);
      if (n.add(c), u) {
        u.update(h, f, d) && (o.push(u), l.push(this._updateItem(u, s)));
        continue;
      }
      const b = this._store.createDisplayIdForObjectId(c), w = Le.fromGraphic(h, f, d, b);
      l.push(this._updateItem(w, s)), this._items.set(w.objectId, w), i.push(w);
    }
    for (const [h, c] of this._items.entries()) n.has(h) || (this._store.releaseDisplayIdForObjectId(h), this._items.delete(h), a.push(c));
    return await Promise.all(l), this._index = null, new We(i, o, a);
  }
  updateLevel(e) {
    this._resolution !== e && (this._index = null, this._boundsDirty = !0, this._resolution = e);
  }
  hitTest(e, t, s, i, o) {
    const a = m("esri-mobile"), n = m(a ? "hittest-2d-mobile-tolerance" : "hittest-2d-desktop-tolerance"), l = n + (a ? 0 : m("hittest-2d-small-symbol-tolerance"));
    e = Y(e, this._tileInfoView.spatialReference);
    const d = i * window.devicePixelRatio * l, h = g();
    h[0] = e - d, h[1] = t - d, h[2] = e + d, h[3] = t + d;
    const c = i * window.devicePixelRatio * n, u = g();
    u[0] = e - c, u[1] = t - c, u[2] = e + c, u[3] = t + c;
    const f = 0.5 * i * (l + z), b = this._searchIndex(e - f, t - f, e + f, t + f);
    if (!b || b.length === 0) return [];
    const w = [], U = g(), R = g();
    for (const I of b) {
      if (!I.visible) continue;
      const { projectedGeometry: k, symbolResource: T } = I;
      this._getSymbolBounds(U, T, k, R, o), R[3] = R[2] = R[1] = R[0] = 0, J(U, h) && w.push(I);
    }
    if (w.length === 0) return [];
    const D = this._hittestDrawHelper, G = [];
    for (const I of w) {
      const { projectedGeometry: k, symbolResource: T } = I;
      if (!T) continue;
      const { textInfo: F, symbolInfo: H } = T, L = H.cimSymbol;
      D.hitTest(u, L.symbol, k, F, o, i) && G.push(I);
    }
    return G.sort(Ze), G.map((I) => I.objectId);
  }
  queryItems(e) {
    return this._items.size === 0 ? [] : this._searchForItems(e);
  }
  clear() {
    this._items.clear(), this._index = null;
  }
  async _updateItem(e, t) {
    await e.projectAndNormalize(this._outSpatialReference), await t(e);
    const { size: s } = e;
    s[0] = s[1] = s[2] = s[3] = 0, this._getSymbolBounds(e.bounds, e.symbolResource, e.projectedGeometry, e.size, 0);
  }
  _searchIndex(e, t, s, i) {
    return this._boundsDirty && (this._items.forEach((o) => this._getSymbolBounds(o.bounds, o.symbolResource, o.projectedGeometry, o.size, 0)), this._boundsDirty = !1), this._index || (this._index = K(9, (o) => ({ minX: o.bounds[0], minY: o.bounds[1], maxX: o.bounds[2], maxY: o.bounds[3] })), this._index.load(Array.from(this._items.values()))), this._index.search({ minX: e, minY: t, maxX: s, maxY: i });
  }
  _searchForItems(e) {
    const t = this._tileInfoView.spatialReference, s = e.bounds, i = ee(t);
    if (i && t.isWrappable) {
      const [o, a] = i.valid, n = Math.abs(s[2] - a) < q, l = Math.abs(s[0] - o) < q;
      if ((!n || !l) && (n || l)) {
        const d = e.resolution;
        let h;
        h = g(n ? [o, s[1], o + d * z, s[3]] : [a - d * z, s[1], a, s[3]]);
        const c = this._searchIndex(s[0], s[1], s[2], s[3]), u = this._searchIndex(h[0], h[1], h[2], h[3]);
        return [.../* @__PURE__ */ new Set([...c, ...u])];
      }
    }
    return this._searchIndex(s[0], s[1], s[2], s[3]);
  }
  _getSymbolBounds(e, t, s, i, o) {
    if (!t || !t.symbolInfo.linearCIM || !s) return null;
    if (e || (e = g()), te(e, s), !i || i[0] === 0 && i[1] === 0 && i[2] === 0 && i[3] === 0) {
      const { textInfo: l, symbolInfo: d } = t, h = d.cimSymbol;
      i || (i = [0, 0, 0, 0]);
      const c = O.getSymbolInflateSize(i, h.symbol, this._cimResourceManager, o, l);
      i[0] = M(c[0]), i[1] = M(c[1]), i[2] = M(c[2]), i[3] = M(c[3]);
    }
    const a = this._resolution, n = O.safeSize(i);
    return e[0] -= n * a, e[1] -= n * a, e[2] += n * a, e[3] += n * a, e;
  }
}
class v {
  static getOrCreate(e, t, s) {
    let i = t.get(e.id);
    return i || (i = new v(e, s), t.set(e.id, i)), i;
  }
  static fromItems(e, t, s) {
    const i = new v(e, s);
    return i.addedOrModified.push(...t), i;
  }
  constructor(e, t) {
    this.tile = e, this.metadata = t, this.addedOrModified = [], this.removed = [];
  }
  get reader() {
    return this._reader || (this._reader = $.from(this.addedOrModified, this.tile, this.metadata)), this._reader;
  }
}
let p = class extends se(_e) {
  constructor(r) {
    super(r), this._attached = !1, this._tiles = /* @__PURE__ */ new Map(), this._controller = new AbortController(), this._hashToSymbolInfo = /* @__PURE__ */ new Map(), this._lastCleanup = performance.now(), this._cleanupRequired = !0, this.lastUpdateId = -1, this.renderer = null, this._updateTracking = new fe({ debugName: "GraphicsView2D" }), this.updateRequested = !1, this.defaultPointSymbolEnabled = !0, this._commandQueue = new Ee({ process: (e) => {
      switch (e.type) {
        case "processed-edit":
          throw new Error("InternalError: Unsupported command");
        case "update":
          return this._update();
      }
    } }), this.graphicUpdateHandler = this.graphicUpdateHandler.bind(this);
  }
  destroy() {
    this.container.destroy(), this.view = null, this.renderer = null, this._set("graphics", null), this._controller.abort(), this._graphicStore.clear(), this._attributeStore = null, this._hashToSymbolInfo.clear(), this._updateTracking.destroy(), this._commandQueue.destroy();
  }
  _initAttributeStore() {
    this._storage = new Re({ spatialReference: this.view.spatialReference, fields: new re() }), this._attributeStore = new Te({ isLocal: !0, update: async (e) => {
      m("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateStart`, { message: e });
      const t = this.container.attributeView.requestUpdate(e);
      this.container.requestRender(), await t, m("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView2D.AttributeStoreView.updateEnd`, { message: e });
    } });
    const r = Ae(null, []);
    this._attributeStore.update(r, this._storage, null), this.container.checkHighlight = () => this._attributeStore.hasHighlight;
  }
  initialize() {
    this._initAttributeStore(), this._metadata = Me.create(this.view.spatialReference), this._resourceProxy = new $e({ fetch: (e) => Promise.all(e.map((t) => this.view.stage.textureManager.rasterizeItem(t))), fetchDictionary: (e) => {
      throw new Error("InternalError: Graphics do not support Dictionary requests");
    } }), this.addHandles([ie(() => this._effectiveRenderer, () => this._pushUpdate()), this.view.graphicsTileStore.on("update", this._onTileUpdate.bind(this)), this.container.on("attach", () => {
      this.addHandles([this.graphics.on("change", () => this._pushUpdate())]), this._graphicStore = new Be(this.view.spatialReference, this._cimResourceManager, this.view.featuresTilingScheme, this.view.state.scale, this._attributeStore), this._attached = !0, this.requestUpdate(), this._pushUpdate();
    })]), this._updateTracking.addUpdateTracking("CommandQueue", this._commandQueue.updateTracking);
    const r = this.view.graphicsTileStore.tiles;
    this._onTileUpdate({ added: r, removed: [] });
  }
  get _effectiveRenderer() {
    return typeof this.renderer == "function" ? this.renderer() : this.renderer;
  }
  get _cimResourceManager() {
    return this.view.stage.textureManager.resourceManager;
  }
  get updating() {
    const r = !this._attached || this._updateTracking.updating;
    return m("esri-2d-log-updating") && console.log(`Updating GraphicsView2D: ${r}
  -> attaching ${!this._attached}
  -> updateTracking ${this._updateTracking.updating}`), r;
  }
  hitTest(r) {
    if (!this.view || this.view.suspended) return [];
    const { resolution: e, rotation: t } = this.view.state, s = this._graphicStore.hitTest(r.x, r.y, 2, e, t), i = new Set(s), o = this.graphics.items.reduce((a, n) => (i.has(n.uid) && a.set(n.uid, n), a), /* @__PURE__ */ new Map());
    return s.map((a) => o.get(a)).filter(oe);
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.requestUpdateCallback()), this.notifyChange("updating");
  }
  processUpdate(r) {
    this.updateRequested && (this.updateRequested = !1, this.update(r));
  }
  viewChange() {
    this.requestUpdate();
  }
  setHighlight(r) {
    const e = [];
    for (const { objectId: t, highlightFlags: s } of r) {
      const i = this._graphicStore.getItem(t)?.displayId;
      e.push({ objectId: t, highlightFlags: s, displayId: i });
    }
    this._attributeStore.setHighlight(e, r), this._pushUpdate();
  }
  graphicUpdateHandler(r) {
    this._pushUpdate();
  }
  update(r) {
    this.updateRequested = !1, this._attached && this._graphicStore.updateLevel(r.state.resolution);
  }
  _pushUpdate() {
    ae(this._commandQueue.push({ type: "update" }));
  }
  async _update() {
    try {
      m("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView._update start`);
      const r = await this._graphicStore.update(this.graphics, (t) => this._getSymbolForGraphic(t), (t) => this._ensureSymbolResource(t));
      if (!r.hasAnyUpdate()) return void await this._attributeStore.sendUpdates();
      r.removed.length && (this._cleanupRequired = !0), m("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView updateMessage`, r);
      const e = this._createTileMessages(r);
      await this._fetchResources(e), this._write(e);
      for (const t of r.added) this._setFilterState(t);
      for (const t of r.updated) this._setFilterState(t);
      m("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate`, r), await this._attributeStore.sendUpdates(), m("esri-2d-update-debug") && console.debug(`[Id: ${this.layerId}] GraphicsView sendUpdate.await`, r);
    } catch {
    }
    this._cleanupSharedResources();
  }
  _createTileMessages(r) {
    const e = /* @__PURE__ */ new Map();
    for (const t of r.added) {
      const s = this.view.graphicsTileStore.getIntersectingTiles(t.bounds);
      for (const i of s)
        v.getOrCreate(i, e, this._metadata).addedOrModified.push(t);
    }
    for (const t of r.updated) {
      const s = this.view.graphicsTileStore.getIntersectingTiles(t.prevBounds), i = this.view.graphicsTileStore.getIntersectingTiles(t.bounds);
      for (const o of s)
        v.getOrCreate(o, e, this._metadata).removed.push(t.displayId);
      for (const o of i)
        v.getOrCreate(o, e, this._metadata).addedOrModified.push(t);
    }
    for (const t of r.removed) {
      const s = this.view.graphicsTileStore.getIntersectingTiles(t.bounds);
      for (const i of s)
        v.getOrCreate(i, e, this._metadata).removed.push(t.displayId);
    }
    return Array.from(e.values());
  }
  async _fetchResources(r) {
    for (const { tile: e, reader: t } of r) {
      m("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${e.id}] GraphicsView fetchResources`, r);
      const s = t.getCursor();
      for (; s.next(); ) for (const i of s.getMeshWriters()) i.enqueueRequest(this._resourceProxy, s, e.createArcadeEvaluationOptions(this.view.timeZone));
    }
    await this._resourceProxy.fetchEnqueuedResources();
  }
  _write(r) {
    for (const e of r) {
      m("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${e.tile.id}] GraphicsView write`, e);
      const t = this._writeMeshes(e);
      let s = this._tiles.get(e.tile.key);
      s || (s = this._createFeatureTile(e.tile.key)), m("esri-2d-update-debug") && console.debug(`Id[${this.layerId}] Tile[${e.tile.id}] GraphicsView onTileData`, e), this.container.onTileData(s, { type: "update", modify: t, remove: e.removed, end: !1, attributeEpoch: this._attributeStore.epoch }), this.container.requestRender();
    }
  }
  _writeMeshes(r) {
    const e = new Ge(r.tile.id), t = r.reader.getCursor();
    for (; t.next(); ) {
      e.entityStart(t.getDisplayId(), t.getZOrder());
      for (const s of t.getMeshWriters()) s.write(e, this._resourceProxy, t, r.tile.createArcadeEvaluationOptions(this.view.timeZone), r.tile.level);
      e.entityEnd();
    }
    return { ...e.serialize().message, tileId: r.tile.id };
  }
  _setFilterState(r) {
    const e = r.displayId, t = this._attributeStore.getHighlightFlags(r.objectId);
    this._attributeStore.setData(e, 0, 0, t | (r.visible ? Se : 0));
  }
  _getSymbolForGraphic(r) {
    return r.symbol != null ? r.symbol : this._effectiveRenderer != null ? this._effectiveRenderer.getSymbol(r) : this._getNullSymbol(r);
  }
  async _ensureSymbolResource(r) {
    if (!r.symbol) return;
    const e = await this._getSymbolInfo(r.symbol);
    if (!e) return;
    const t = e.linearCIM.filter((s) => s.type === "text");
    if (t.length > 0) {
      const s = await this._getTextResources(r, t);
      r.symbolResource = { symbolInfo: e, textInfo: s };
    } else r.symbolResource = { symbolInfo: e };
  }
  _getSymbolInfo(r) {
    const e = r.hash();
    return this._hashToSymbolInfo.has(e) || this._hashToSymbolInfo.set(e, this._createSymbolInfo(e, r).catch((t) => null)), this._hashToSymbolInfo.get(e);
  }
  async _createSymbolInfo(r, e) {
    const t = await this._convertToCIMSymbol(e), s = await this._createLinearCIM(t);
    if (e.type === "text") for (const i of s) i.type === "text" && (i.lineWidth = e.lineWidth);
    return { hash: r, cimSymbol: t, linearCIM: s, meshWriters: await this._createMeshWriters(t, s) };
  }
  async _convertToCIMSymbol(r) {
    const e = be(r);
    return e.type === "web-style" ? (await e.fetchCIMSymbol()).data : e;
  }
  async _createLinearCIM(r) {
    return await Promise.all(we.fetchResources(r.symbol, this._cimResourceManager, [])), this.view.stage.cimAnalyzer.analyzeSymbolReference(r, !1);
  }
  async _createMeshWriters(r, e) {
    ne(this._controller.signal);
    const t = this.container.instanceStore, s = await He(r, e, t);
    return Promise.all(s.map((i) => ke(this._storage, this._resourceProxy, i.meshWriterName, Ie(i.id), i.options, { tileInfo: this.view.featuresTilingScheme.tileInfo }, i.optionalAttributes)));
  }
  _onTileUpdate(r) {
    if (r.added && r.added.length > 0) for (const e of r.added) this._updateTracking.addPromise(this._addTile(e));
    if (r.removed && r.removed.length > 0) for (const e of r.removed) this._removeTile(e.key);
  }
  _createFeatureTile(r) {
    const e = this.view.featuresTilingScheme.getTileBounds(g(), r), t = this.view.featuresTilingScheme.getTileResolution(r.level), s = new ve(r, t, e[0], e[3]);
    return this._tiles.set(r, s), this.container.addChild(s), s;
  }
  async _addTile(r) {
    if (!this._attached) return;
    const e = this._graphicStore.queryItems(r);
    if (!e.length) return;
    const t = this._createFeatureTile(r.key), s = v.fromItems(r, e, this._metadata);
    await this._fetchResources([s]);
    const i = this._writeMeshes(s);
    t.onMessage({ type: "append", append: i, clear: !1, end: !0, attributeEpoch: this._attributeStore.epoch });
  }
  _removeTile(r) {
    if (!this._tiles.has(r)) return;
    const e = this._tiles.get(r);
    this.container.removeChild(e), e.destroy(), this._tiles.delete(r);
  }
  _getNullSymbol(r) {
    const e = r.geometry;
    return he(e) ? de : ce(e) || A(e) ? le : this.defaultPointSymbolEnabled ? ue : null;
  }
  async _getTextResources(r, e) {
    const t = new Array(), s = new Array();
    for (let n = 0; n < e.length; n++) {
      const l = e[n], { resource: d, overrides: h } = l.textRasterizationParam;
      if (h?.length > 0) {
        const c = pe.resolveSymbolOverrides({ type: "CIMSymbolReference", primitiveOverrides: h, symbol: { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: !0, size: d.symbol.height, anchorPointUnits: "Relative", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: d.symbol, textString: d.textString }], scaleSymbolsProportionally: !0, respectFrame: !0 }] } }, r, this.view.spatialReference, null, E(r.projectedGeometry), null, null);
        c.then((u) => {
          const f = u.symbolLayers[0], { textString: b } = f.markerGraphics[0];
          s.push({ type: "cim-rasterization-info", resource: { type: "text", textString: b || "", font: d.font } }), l.text = d.textString = b || "";
        }), t.push(c);
      } else s.push({ type: "cim-rasterization-info", resource: d });
    }
    t.length > 0 && await Promise.all(t);
    const i = s.map((n) => this.view.stage.textureManager.rasterizeItem(n)), o = await Promise.all(i);
    me(o);
    const a = /* @__PURE__ */ new Map();
    for (let n = 0; n < e.length; n++) {
      const l = e[n];
      a.set(l.textRasterizationParam.resource.symbol, { text: l.text, glyphMosaicItems: o[n] });
    }
    return a;
  }
  _cleanupSharedResources() {
    if (!this._cleanupRequired) return;
    const r = performance.now();
    if (r - this._lastCleanup < 5e3) return;
    this._cleanupRequired = !1, this._lastCleanup = r;
    const e = /* @__PURE__ */ new Set();
    for (const s of this._graphicStore.items()) {
      const i = s.symbolResource?.symbolInfo.hash;
      e.add(i);
    }
    const t = new Set(this._hashToSymbolInfo.keys());
    for (const s of t.values()) e.has(s) || this._hashToSymbolInfo.delete(s);
  }
};
y([_()], p.prototype, "_effectiveRenderer", null), y([_({ constructOnly: !0 })], p.prototype, "layerId", void 0), y([_({ constructOnly: !0 })], p.prototype, "requestUpdateCallback", void 0), y([_()], p.prototype, "container", void 0), y([_({ constructOnly: !0 })], p.prototype, "graphics", void 0), y([_()], p.prototype, "renderer", void 0), y([_()], p.prototype, "_updateTracking", void 0), y([_()], p.prototype, "updating", null), y([_()], p.prototype, "view", void 0), y([_()], p.prototype, "updateRequested", void 0), y([_()], p.prototype, "defaultPointSymbolEnabled", void 0), p = y([ye("esri.views.2d.layers.support.GraphicsView2D")], p);
const st = p;
export {
  st as $
};
//# sourceMappingURL=GraphicsView2D-DgGASnAm.js.map
