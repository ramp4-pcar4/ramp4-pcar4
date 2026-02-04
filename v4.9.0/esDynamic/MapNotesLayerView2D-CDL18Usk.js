import { ap as f, V as w, b6 as y, H as c, U as r, X as o, b2 as m, N as _, P as V } from "./main-DIdq27YS.js";
import { t as v } from "./highlightReasons--yZpROKt.js";
import { m as C, u as b } from "./LayerView-uykJUj8Q.js";
import { t as g } from "./GraphicContainer-BpJZq2aF.js";
import { $ as d } from "./GraphicsView2D-hpdUyePK.js";
const u = "sublayers", n = "layerView";
let p = class extends C(b) {
  constructor() {
    super(...arguments), this._highlightIds = /* @__PURE__ */ new Map();
  }
  *graphicsViews() {
    this._graphicsViewsFeatureCollectionMap == null ? this._graphicsViews == null ? yield* [] : yield* this._graphicsViews : yield* this._graphicsViewsFeatureCollectionMap.keys();
  }
  async hitTest(e, i) {
    return Array.from(this.graphicsViews(), (s) => {
      const t = s.hitTest(e);
      if (this._graphicsViewsFeatureCollectionMap != null) {
        const a = this._graphicsViewsFeatureCollectionMap.get(s);
        for (const h of t) !h.popupTemplate && a.popupTemplate && (h.popupTemplate = a.popupTemplate), h.sourceLayer = h.layer = this.layer;
      }
      return t;
    }).flat().map((s) => ({ type: "graphic", graphic: s, layer: this.layer, mapPoint: e }));
  }
  highlight(e) {
    let i;
    typeof e == "number" ? i = [e] : e instanceof f ? i = [e.uid] : Array.isArray(e) && e.length > 0 ? i = typeof e[0] == "number" ? e : e.map((t) => t && t.uid) : w.isCollection(e) && (i = e.map((t) => t && t.uid).toArray());
    const s = i?.filter(y);
    return s?.length ? (this._addHighlight(s), c(() => this._removeHighlight(s))) : c();
  }
  update(e) {
    for (const i of this.graphicsViews()) i.processUpdate(e);
  }
  attach() {
    const e = this.view, i = () => this.requestUpdate(), s = this.layer.featureCollections;
    if (s != null && s.length) {
      this._graphicsViewsFeatureCollectionMap = /* @__PURE__ */ new Map();
      for (const t of s) {
        const a = new g(this.view.featuresTilingScheme), h = new d({ view: e, graphics: t.source, renderer: t.renderer, requestUpdateCallback: i, container: a });
        this._graphicsViewsFeatureCollectionMap.set(h, t), this.container.addChild(h.container), this.addHandles([r(() => t.visible, (l) => h.container.visible = l, o), r(() => h.updating, () => this.notifyChange("updating"), o)], n);
      }
      this._updateHighlight();
    } else this.layer.sublayers != null && this.addHandles(m(() => this.layer.sublayers, "change", () => this._createGraphicsViews(), { onListenerAdd: () => this._createGraphicsViews(), onListenerRemove: () => this._destroyGraphicsViews() }), u);
  }
  detach() {
    this._destroyGraphicsViews(), this.removeHandles(u);
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    for (const e of this.graphicsViews()) e.viewChange();
  }
  isUpdating() {
    for (const e of this.graphicsViews()) if (e.updating) return !0;
    return !1;
  }
  _destroyGraphicsViews() {
    this.container.removeAllChildren(), this.removeHandles(n);
    for (const e of this.graphicsViews()) e.destroy();
    this._graphicsViews = null, this._graphicsViewsFeatureCollectionMap = null;
  }
  _createGraphicsViews() {
    if (this._destroyGraphicsViews(), this.layer.sublayers == null) return;
    const e = [], i = this.view, s = () => this.requestUpdate();
    for (const t of this.layer.sublayers) {
      const a = new g(this.view.featuresTilingScheme);
      a.fadeTransitionEnabled = !0;
      const h = new d({ view: i, graphics: t.graphics, requestUpdateCallback: s, container: a });
      this.addHandles([t.on("graphic-update", h.graphicUpdateHandler), r(() => t.visible, (l) => h.container.visible = l, o), r(() => h.updating, () => this.notifyChange("updating"), o)], n), this.container.addChild(h.container), e.push(h);
    }
    this._graphicsViews = e, this._updateHighlight();
  }
  _addHighlight(e) {
    for (const i of e) if (this._highlightIds.has(i)) {
      const s = this._highlightIds.get(i);
      this._highlightIds.set(i, s + 1);
    } else this._highlightIds.set(i, 1);
    this._updateHighlight();
  }
  _removeHighlight(e) {
    for (const i of e) if (this._highlightIds.has(i)) {
      const s = this._highlightIds.get(i) - 1;
      s === 0 ? this._highlightIds.delete(i) : this._highlightIds.set(i, s);
    }
    this._updateHighlight();
  }
  _updateHighlight() {
    const e = Array.from(this._highlightIds.keys()), i = v("highlight");
    for (const s of this.graphicsViews()) s.setHighlight(e.map((t) => ({ objectId: t, highlightFlags: i })));
  }
};
p = _([V("esri.views.2d.layers.MapNotesLayerView2D")], p);
const F = p;
export {
  F as default
};
//# sourceMappingURL=MapNotesLayerView2D-CDL18Usk.js.map
