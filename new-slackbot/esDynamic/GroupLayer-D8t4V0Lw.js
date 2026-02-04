import { dV as u, dZ as c, dX as v, dY as m, gg as f, gh as g, d_ as w, bs as _, gi as I, S as L, U as y, gj as O, gk as S, a0 as V, a1 as $, gl as A, gm as d, gn as M, N as r, O as l, et as p, d$ as P, go as C, b2 as E, fi as b, P as x, e8 as T, C as j } from "./main-BpIyUAdL.js";
import { a as G } from "./lazyLayerLoader-_7k3m89R.js";
import { r as H } from "./saveUtils-B80O-4O7.js";
const R = Symbol("WebScene");
let s = class extends u(c(v(m(f(g(w(T))))))) {
  constructor(e) {
    super(e), this.allLayers = new _({ getCollections: () => [this.layers], getChildrenFunction: (i) => "layers" in i ? i.layers : null }), this.allTables = I(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = L(async (i, t, a) => {
      const { save: o, saveAs: n } = await import("./groupLayerUtils-BXUD4Mm_.js");
      switch (i) {
        case d.SAVE:
          return o(this, t);
        case d.SAVE_AS:
          return n(this, a, t);
      }
    });
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles([y(() => {
      let e = this.parent;
      for (; e && "parent" in e && e.parent; ) e = e.parent;
      return e && R in e;
    }, (e) => {
      const i = "prevent-adding-tables";
      this.removeHandles(i), e && (this.tables.removeAll(), this.addHandles(E(() => this.tables, "before-add", (t) => {
        t.preventDefault(), j.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      }), i));
    }, C), y(() => this.visible, this._onVisibilityChange.bind(this), b)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && this.originIdOf("portalItem") === O.USER;
  }
  _writeLayers(e, i, t, a) {
    const o = [];
    if (!e) return o;
    e.forEach((n) => {
      const h = S(n, a.webmap ? a.webmap.getLayerJSONFromResourceInfo(n) : null, a);
      h?.layerType && o.push(h);
    }), i.layers = o;
  }
  set portalItem(e) {
    this._set("portalItem", e);
  }
  readPortalItem(e, i, t) {
    const { itemId: a, layerType: o } = i;
    if (o === "GroupLayer" && a) return new V({ id: a, portal: t?.portal });
  }
  writePortalItem(e, i) {
    e?.id && (i.itemId = e.id);
  }
  set visibilityMode(e) {
    const i = this._get("visibilityMode") !== e;
    this._set("visibilityMode", e), i && this._enforceVisibility(e, this.visible);
  }
  async beforeSave() {
    return H(this);
  }
  load(e) {
    const i = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service"], layerModuleTypeMap: G }, e).catch((t) => {
      if ($(t), this.sourceIsPortalItem) throw t;
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  async loadAll() {
    return A(this, (e) => {
      e(this.layers, this.tables);
    });
  }
  async save(e) {
    return this._debouncedSaveOperations(d.SAVE, e);
  }
  async saveAs(e, i) {
    return this._debouncedSaveOperations(d.SAVE_AS, i, e);
  }
  layerAdded(e) {
    e.visible && this.visibilityMode === "exclusive" ? this._turnOffOtherLayers(e) : this.visibilityMode === "inherited" && (e.visible = this.visible), this.hasHandles(e.uid) ? console.error(`Layer read to Grouplayer: uid=${e.uid}`) : this.addHandles(y(() => e.visible, (i) => this._onChildVisibilityChange(e, i), b), e.uid);
  }
  layerRemoved(e) {
    this.removeHandles(e.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e) {
    this.layers.forEach((i) => {
      i !== e && (i.visible = !1);
    });
  }
  _enforceVisibility(e, i) {
    if (!M(this).initialized) return;
    const t = this.layers;
    let a = t.find((o) => o.visible);
    switch (e) {
      case "exclusive":
        t.length && !a && (a = t.at(0), a.visible = !0), this._turnOffOtherLayers(a);
        break;
      case "inherited":
        t.forEach((o) => {
          o.visible = i;
        });
    }
  }
  _onVisibilityChange(e) {
    this.visibilityMode === "inherited" && this.layers.forEach((i) => {
      i.visible = e;
    });
  }
  _onChildVisibilityChange(e, i) {
    switch (this.visibilityMode) {
      case "exclusive":
        i ? this._turnOffOtherLayers(e) : this._isAnyLayerVisible() || (e.visible = !0);
        break;
      case "inherited":
        e.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e) => e.visible);
  }
};
r([l({ readOnly: !0, dependsOn: [] })], s.prototype, "allLayers", void 0), r([l({ readOnly: !0 })], s.prototype, "allTables", void 0), r([l({ json: { read: !0, write: !0 } })], s.prototype, "blendMode", void 0), r([l()], s.prototype, "fullExtent", void 0), r([l({ readOnly: !0 })], s.prototype, "sourceIsPortalItem", null), r([l({ json: { read: !1, write: { ignoreOrigin: !0 } } })], s.prototype, "layers", void 0), r([p("layers")], s.prototype, "_writeLayers", null), r([l({ type: ["GroupLayer"] })], s.prototype, "operationalLayerType", void 0), r([l({ json: { origins: { "web-map": { read: !1, write: { overridePolicy(e, i, t) {
  return { enabled: e?.type === "Group Layer" && t?.initiator !== this };
} } }, "web-scene": { read: !1, write: !1 } } } })], s.prototype, "portalItem", null), r([P("web-map", "portalItem", ["itemId"])], s.prototype, "readPortalItem", null), r([p("web-map", "portalItem", { itemId: { type: String } })], s.prototype, "writePortalItem", null), r([l()], s.prototype, "spatialReference", void 0), r([l({ json: { read: !1 }, readOnly: !0, value: "group" })], s.prototype, "type", void 0), r([l({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: !0, origins: { "web-map": { type: ["independent", "exclusive"], write: (e, i, t) => {
  e !== "inherited" && (i[t] = e);
} } } } })], s.prototype, "visibilityMode", null), s = r([x("esri.layers.GroupLayer")], s);
const N = s;
export {
  N as default
};
//# sourceMappingURL=GroupLayer-D8t4V0Lw.js.map
