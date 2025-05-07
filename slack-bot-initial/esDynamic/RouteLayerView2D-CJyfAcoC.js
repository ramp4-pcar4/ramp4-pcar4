import { V as p, bs as _, X as w, b6 as n, H as c, U as d, N as l, O as u, P as m } from "./main-3gzXighg.js";
import { m as y, c as f, O as k, f as M, j as V, g as v, a as I } from "./Stop-Fc3YBPvM.js";
import { t as G } from "./highlightReasons-B-Ulmjlc.js";
import { m as F, u as H } from "./LayerView-BYfqN0Pb.js";
import { t as C } from "./GraphicContainer-CaZKTztB.js";
import { $ } from "./GraphicsView2D-Wd8esVjn.js";
const b = ["route-info", "direction-line", "direction-point", "polygon-barrier", "polyline-barrier", "point-barrier", "stop"], a = { graphic: null, property: null, oldValue: null, newValue: null };
function g(e) {
  return e instanceof y || e instanceof f || e instanceof k || e instanceof M || e instanceof V || e instanceof v || e instanceof I;
}
function U(e) {
  return p.isCollection(e) && e.length && g(e.at(0));
}
function O(e) {
  return Array.isArray(e) && e.length > 0 && g(e[0]);
}
let h = class extends F(H) {
  constructor() {
    super(...arguments), this._graphics = new p(), this._highlightIds = /* @__PURE__ */ new Map(), this._networkFeatureMap = /* @__PURE__ */ new Map(), this._networkGraphicMap = /* @__PURE__ */ new Map();
  }
  get _routeItems() {
    return new _({ getCollections: () => this.layer == null || this.destroyed ? [] : [this.layer.routeInfo != null ? new p([this.layer.routeInfo]) : null, this.layer.directionLines, this.layer.directionPoints, this.layer.polygonBarriers, this.layer.polylineBarriers, this.layer.pointBarriers, this.layer.stops] });
  }
  initialize() {
    this._updatingHandles.addOnCollectionChange(() => this._routeItems, (e) => this._routeItemsChanged(e), w);
  }
  destroy() {
    this._networkFeatureMap.clear(), this._networkGraphicMap.clear(), this._graphics.removeAll(), this._get("_routeItems")?.destroy();
  }
  attach() {
    this._createGraphicsView();
  }
  detach() {
    this._destroyGraphicsView();
  }
  async fetchPopupFeaturesAtLocation(e, t) {
    return this._graphicsView.hitTest(e).filter(({ popupTemplate: i }) => !!i);
  }
  highlight(e) {
    let t;
    t = g(e) ? [this._getNetworkFeatureUid(e)] : O(e) ? e.map((r) => this._getNetworkFeatureUid(r)) : U(e) ? e.map((r) => this._getNetworkFeatureUid(r)).toArray() : [e.uid];
    const i = t.filter(n);
    return i.length ? (this._addHighlight(i), c(() => this._removeHighlight(i))) : c();
  }
  async hitTest(e, t) {
    if (this.suspended) return null;
    const i = this._graphicsView.hitTest(e).filter(n).map((s) => this._networkGraphicMap.get(s));
    if (!i.length) return null;
    const { layer: r } = this;
    return i.reverse().map((s) => ({ type: "route", layer: r, mapPoint: e, networkFeature: s }));
  }
  isUpdating() {
    return this._graphicsView.updating;
  }
  moveStart() {
  }
  moveEnd() {
  }
  update(e) {
    this._graphicsView.processUpdate(e);
  }
  viewChange() {
    this._graphicsView.viewChange();
  }
  _addHighlight(e) {
    for (const t of e) if (this._highlightIds.has(t)) {
      const i = this._highlightIds.get(t);
      this._highlightIds.set(t, i + 1);
    } else this._highlightIds.set(t, 1);
    this._updateHighlight();
  }
  _createGraphic(e) {
    const t = e.toGraphic();
    return t.layer = this.layer, t.sourceLayer = this.layer, t;
  }
  _createGraphicsView() {
    const e = this.view, t = () => this.requestUpdate(), i = new C(e.featuresTilingScheme);
    this._graphicsView = new $({ container: i, graphics: this._graphics, requestUpdateCallback: t, view: e }), this.container.addChild(i), this._updateHighlight();
  }
  _destroyGraphicsView() {
    this.container.removeChild(this._graphicsView.container), this._graphicsView.destroy();
  }
  _getDrawOrder(e) {
    const t = this._networkGraphicMap.get(e);
    return b.indexOf(t.type);
  }
  _getNetworkFeatureUid(e) {
    return this._networkFeatureMap.has(e) ? this._networkFeatureMap.get(e).uid : null;
  }
  _removeHighlight(e) {
    for (const t of e) if (this._highlightIds.has(t)) {
      const i = this._highlightIds.get(t) - 1;
      i === 0 ? this._highlightIds.delete(t) : this._highlightIds.set(t, i);
    }
    this._updateHighlight();
  }
  _routeItemsChanged(e) {
    if (e.removed.length) {
      this._graphics.removeMany(e.removed.map((t) => {
        const i = this._networkFeatureMap.get(t);
        return this._networkFeatureMap.delete(t), this._networkGraphicMap.delete(i), i;
      }));
      for (const t of e.removed) this.removeHandles(t);
    }
    if (e.added.length) {
      this._graphics.addMany(e.added.map((t) => {
        const i = this._createGraphic(t);
        return i.symbol == null ? null : (this._networkFeatureMap.set(t, i), this._networkGraphicMap.set(i, t), i);
      }).filter(n));
      for (const t of e.added) this.addHandles([d(() => t.geometry, (i, r) => {
        this._updateGraphic(t, "geometry", i, r);
      }), d(() => t.symbol, (i, r) => {
        this._updateGraphic(t, "symbol", i, r);
      })], t);
      this._graphics.sort((t, i) => this._getDrawOrder(t) - this._getDrawOrder(i));
    }
  }
  _updateGraphic(e, t, i, r) {
    if (!this._networkFeatureMap.has(e)) {
      const o = this._createGraphic(e);
      return this._networkFeatureMap.set(e, o), this._networkGraphicMap.set(o, e), void this._graphics.add(o);
    }
    const s = this._networkFeatureMap.get(e);
    s[t] = i, a.graphic = s, a.property = t, a.oldValue = r, a.newValue = i, this._graphicsView.graphicUpdateHandler(a);
  }
  _updateHighlight() {
    const e = Array.from(this._highlightIds.keys()), t = G("highlight");
    this._graphicsView.setHighlight(e.map((i) => ({ objectId: i, highlightFlags: t })));
  }
};
l([u()], h.prototype, "_graphics", void 0), l([u()], h.prototype, "_routeItems", null), h = l([m("esri.views.2d.layers.RouteLayerView2D")], h);
const L = h;
export {
  L as default
};
//# sourceMappingURL=RouteLayerView2D-CJyfAcoC.js.map
