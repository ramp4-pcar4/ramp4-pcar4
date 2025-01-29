import { bl as p, aj as o, V as l, bm as n, J as r, O as g, P as c, Q as d } from "./main-DMoCLB29.js";
import { t as u } from "./highlightReasons-D9SkMyUl.js";
import { f as w, y as m } from "./LayerView-Cz2aE_qT.js";
import { t as y } from "./GraphicContainer-X2E7D0T1.js";
import { V } from "./GraphicsView2D-DXwVujfq.js";
import { e as f } from "./HighlightCounter-DvpHC4x5.js";
let a = class extends w(m) {
  constructor() {
    super(...arguments), this._highlightCounter = new f();
  }
  attach() {
    this.graphicsView = new V({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new y(this.view.featuresTilingScheme), layerId: this.layer.id }), this.container.addChild(this.graphicsView.container), this.addAttachHandles([this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler), this.watch("layer.visible", (i) => {
      i && (this.graphicsView.update({ state: this.view.state }), this.graphicsView.pushUpdate());
    })]), this._updateHighlight();
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = p(this.graphicsView);
  }
  async hitTest(i) {
    return this.graphicsView ? this.graphicsView.hitTest(i).map((t) => ({ type: "graphic", graphic: t, mapPoint: i, layer: this.layer })) : null;
  }
  queryGraphics() {
    return Promise.resolve(this.graphicsView.graphics);
  }
  update(i) {
    this.graphicsView.processUpdate(i);
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  highlight(i, t = "highlight") {
    let e;
    typeof i == "number" ? e = [i] : i instanceof o ? e = [i.uid] : Array.isArray(i) && i.length > 0 ? e = typeof i[0] == "number" ? i : i.map((s) => s && s.uid) : l.isCollection(i) && i.length > 0 && (e = i.map((s) => s && s.uid).toArray());
    const h = e?.filter(n);
    return h?.length ? (this._addHighlight(h, t), r(() => this._removeHighlight(h, t))) : r();
  }
  _addHighlight(i, t) {
    this._highlightCounter.addReason(i, t), this._updateHighlight();
  }
  _removeHighlight(i, t) {
    this._highlightCounter.deleteReason(i, t), this._updateHighlight();
  }
  _updateHighlight() {
    const i = [];
    for (const t of this._highlightCounter.ids()) {
      const e = this._highlightCounter.getHighlightReason(t), h = u(e);
      i.push({ objectId: t, highlightFlags: h });
    }
    this.graphicsView?.setHighlight(i);
  }
};
g([c()], a.prototype, "graphicsView", void 0), a = g([d("esri.views.2d.layers.GraphicsLayerView2D")], a);
const U = a;
export {
  U as default
};
//# sourceMappingURL=GraphicsLayerView2D-BU7FkVhg.js.map
