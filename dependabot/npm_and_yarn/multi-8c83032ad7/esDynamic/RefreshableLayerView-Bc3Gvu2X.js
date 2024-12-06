import { O as i, Q as t, bi as h, M as l, D as d } from "./main-C4pF0E7B.js";
const f = (s) => {
  let e = class extends s {
    initialize() {
      this.addHandles(h(() => this.layer, "refresh", (r) => {
        this.doRefresh(r.dataChanged).catch((a) => {
          l(a) || d.getLogger(this).error(a);
        });
      }), "RefreshableLayerView");
    }
  };
  return e = i([t("esri.views.layers.RefreshableLayerView")], e), e;
};
export {
  f as i
};
//# sourceMappingURL=RefreshableLayerView-Bc3Gvu2X.js.map
