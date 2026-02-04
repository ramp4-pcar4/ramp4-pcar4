import { N as s, P as i } from "./main-BpIyUAdL.js";
import { E as a, a as h, R as o } from "./Container-CTNRgS-d.js";
import { i as n } from "./AGraphicContainer-DAJShkXp.js";
let t = class extends n {
  get hasHighlight() {
    return this.children.some((e) => e.hasData);
  }
  renderChildren(e) {
    this.attributeView.update(), e.drawPhase === a.HIGHLIGHT && this.children.some((r) => r.hasData) && (super.renderChildren(e), e.context.setColorMask(!0, !0, !0, !0), h(e, !0, (r) => {
      this._renderChildren(r, o.All);
    }));
  }
};
t = s([i("esri.views.2d.layers.support.HighlightGraphicContainer")], t);
const m = t;
export {
  m as h
};
//# sourceMappingURL=HighlightGraphicContainer-2ER1Od2K.js.map
