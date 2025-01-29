import { e3 as u, e7 as v, e5 as c, e6 as m, gM as f, gN as g, e8 as w, bR as _, gO as I, f1 as L, S as y, eF as O, gP as S, Z as $, _ as A, gQ as V, gR as d, gS as M, O as r, P as l, eH as p, e9 as P, gT as C, bi as E, fw as b, Q as T, ei as x, D as R } from "./main-uCo5F72j.js";
import { a as G } from "./fetchService-Dh8lQjiS.js";
import { r as H } from "./saveUtils-BQhwrfgY.js";
const j = Symbol("WebScene");
let s = class extends u(v(c(m(f(g(w(x))))))) {
  constructor(e) {
    super(e), this.allLayers = new _({ getCollections: () => [this.layers], getChildrenFunction: (i) => "layers" in i ? i.layers : null }), this.allTables = I(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = L(async (i, t, a) => {
      const { save: o, saveAs: n } = await import("./groupLayerUtils-Brw3c1Jd.js");
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
      return e && j in e;
    }, (e) => {
      const i = "prevent-adding-tables";
      this.removeHandles(i), e && (this.tables.removeAll(), this.addHandles(E(() => this.tables, "before-add", (t) => {
        t.preventDefault(), R.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
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
    if (o === "GroupLayer" && a) return new $({ id: a, portal: t?.portal });
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
      if (A(t), this.sourceIsPortalItem) throw t;
    });
    return this.addResolvingPromise(i), Promise.resolve(this);
  }
  async loadAll() {
    return V(this, (e) => {
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
} } } } })], s.prototype, "visibilityMode", null), s = r([T("esri.layers.GroupLayer")], s);
const D = s;
export {
  D as default
};
//# sourceMappingURL=GroupLayer-MOqnsJzE.js.map
