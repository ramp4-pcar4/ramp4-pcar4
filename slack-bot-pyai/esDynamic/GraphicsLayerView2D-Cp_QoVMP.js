import { b5 as o, ap as p, V as n, b6 as l, H as r, N as g, O as c, P as d } from "./main-DhLeoxL5.js";
import { t as u } from "./highlightReasons-BNKTlhCC.js";
import { m, u as w } from "./LayerView-BUXYmvJm.js";
import { t as y } from "./GraphicContainer-Dh_MohSK.js";
import { $ as V } from "./GraphicsView2D-UEmmkVkC.js";
import { t as f } from "./HighlightCounter-DHuljhpc.js";
let a = class extends m(w) {
  constructor() {
    super(...arguments), this._highlightCounter = new f();
  }
  attach() {
    this.graphicsView = new V({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this.layer.graphics, container: new y(this.view.featuresTilingScheme), layerId: this.layer.id }), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this.layer.on("graphic-update", this.graphicsView.graphicUpdateHandler)), this._updateHighlight();
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = o(this.graphicsView);
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
  moveStart() {
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
    typeof i == "number" ? e = [i] : i instanceof p ? e = [i.uid] : Array.isArray(i) && i.length > 0 ? e = typeof i[0] == "number" ? i : i.map((s) => s && s.uid) : n.isCollection(i) && i.length > 0 && (e = i.map((s) => s && s.uid).toArray());
    const h = e?.filter(l);
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
      const e = this._highlightCounter.getHighestReason(t), h = u(e);
      i.push({ objectId: t, highlightFlags: h });
    }
    this.graphicsView?.setHighlight(i);
  }
};
g([c()], a.prototype, "graphicsView", void 0), a = g([d("esri.views.2d.layers.GraphicsLayerView2D")], a);
const A = a;
export {
  A as default
};
//# sourceMappingURL=GraphicsLayerView2D-Cp_QoVMP.js.map
