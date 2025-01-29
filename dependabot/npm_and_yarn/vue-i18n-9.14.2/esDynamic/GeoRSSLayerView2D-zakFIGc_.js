import { S as h, T as n, U as g, V as w, W as f, X as d, Y as y, O as u, Q as V } from "./main-uCo5F72j.js";
import { f as b, y as S } from "./LayerView-e9W65gRE.js";
import { t as T } from "./GraphicContainer-CphxcQHY.js";
import { V as _ } from "./GraphicsView2D-DP-ZDFAT.js";
let c = class extends b(S) {
  constructor() {
    super(...arguments), this._graphicsViewMap = {}, this._popupTemplates = /* @__PURE__ */ new Map(), this.graphicsViews = [];
  }
  async hitTest(e, i) {
    if (!this.graphicsViews.length) return null;
    const r = this.layer;
    return this.graphicsViews.reverse().flatMap((t) => {
      const s = this._popupTemplates.get(t), o = t.hitTest(e);
      for (const a of o) a.layer = r, a.sourceLayer = r, a.popupTemplate = s;
      return o;
    }).map((t) => ({ type: "graphic", graphic: t, layer: r, mapPoint: e }));
  }
  update(e) {
    if (this.graphicsViews) for (const i of this.graphicsViews) i.processUpdate(e);
  }
  attach() {
    this.addAttachHandles([h(() => this.layer?.featureCollections, (e) => {
      this._clear();
      for (const { popupInfo: i, featureSet: r, layerDefinition: t } of e) {
        const s = g.fromJSON(r), o = new w(s.features), a = t.drawingInfo, m = i ? f.fromJSON(i) : null, p = d(a.renderer), l = new _({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: o, renderer: p, container: new T(this.view.featuresTilingScheme) });
        this._graphicsViewMap[s.geometryType] = l, this._popupTemplates.set(l, m), s.geometryType !== "polygon" || this.layer.polygonSymbol ? s.geometryType !== "polyline" || this.layer.lineSymbol ? s.geometryType !== "point" || this.layer.pointSymbol || (this.layer.pointSymbol = p.symbol) : this.layer.lineSymbol = p.symbol : this.layer.polygonSymbol = p.symbol, this.graphicsViews.push(l), this.container.addChild(l.container);
      }
    }, n), h(() => this.layer?.polygonSymbol, (e) => {
      this._graphicsViewMap.polygon.renderer = new y({ symbol: e });
    }, n), h(() => this.layer?.lineSymbol, (e) => {
      this._graphicsViewMap.polyline.renderer = new y({ symbol: e });
    }, n), h(() => this.layer?.pointSymbol, (e) => {
      this._graphicsViewMap.point.renderer = new y({ symbol: e });
    }, n)]);
  }
  detach() {
    this._clear();
  }
  moveEnd() {
  }
  viewChange() {
    for (const e of this.graphicsViews) e.viewChange();
  }
  _clear() {
    this.container.removeAllChildren();
    for (const e of this.graphicsViews) e.destroy();
    this._graphicsViewMap = {}, this._popupTemplates.clear(), this.graphicsViews.length = 0;
  }
};
c = u([V("esri.views.2d.layers.GeoRSSLayerView2D")], c);
const U = c;
export {
  U as default
};
//# sourceMappingURL=GeoRSSLayerView2D-zakFIGc_.js.map
