import { O as i, Q as t, bi as h, M as l, D as d } from "./main-uCo5F72j.js";
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
//# sourceMappingURL=RefreshableLayerView-BGtwDqU2.js.map
