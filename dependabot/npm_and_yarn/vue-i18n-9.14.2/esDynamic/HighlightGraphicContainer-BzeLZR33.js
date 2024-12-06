import { O as a, Q as i } from "./main-uCo5F72j.js";
import { E as s, a as h, R as n } from "./Container-D8I93PMs.js";
import { i as o } from "./AGraphicContainer-CTi6A0FF.js";
let t = class extends o {
  get hasHighlight() {
    return this.children.some((e) => e.hasData);
  }
  renderChildren(e) {
    this.attributeView.update(), e.drawPhase === s.HIGHLIGHT && this.children.some((r) => r.hasData) && (super.renderChildren(e), e.context.setColorMask(!0, !0, !0, !0), h(e, !0, (r) => {
      this._renderChildren(r, n.All);
    }));
  }
};
t = a([i("esri.views.2d.layers.graphics.HighlightGraphicContainer")], t);
const p = t;
export {
  p as h
};
//# sourceMappingURL=HighlightGraphicContainer-BzeLZR33.js.map
