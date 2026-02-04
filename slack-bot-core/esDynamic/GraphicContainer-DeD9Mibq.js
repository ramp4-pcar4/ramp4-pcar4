import { E as t, R as h, a as s } from "./Container-B1L9L638.js";
import { i } from "./AGraphicContainer-lCLIeeS1.js";
class l extends i {
  renderChildren(e) {
    for (const r of this.children) r.setTransform(e.state);
    if (super.renderChildren(e), this.attributeView.update(), this.children.some((r) => r.hasData)) {
      switch (e.drawPhase) {
        case t.MAP:
          this._renderChildren(e, h.All);
          break;
        case t.HIGHLIGHT:
          this.hasHighlight && this._renderHighlight(e);
      }
      this._boundsRenderer && this._boundsRenderer.doRender(e);
    }
  }
  _renderHighlight(e) {
    s(e, !1, (r) => {
      this._renderChildren(r, h.Highlight);
    });
  }
}
export {
  l as t
};
//# sourceMappingURL=GraphicContainer-DeD9Mibq.js.map
