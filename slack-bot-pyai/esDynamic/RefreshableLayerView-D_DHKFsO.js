import { N as i, P as t, b2 as h, K as l, C as d } from "./main-DhLeoxL5.js";
const o = (a) => {
  let e = class extends a {
    initialize() {
      this.addHandles(h(() => this.layer, "refresh", (r) => {
        this.doRefresh(r.dataChanged).catch((s) => {
          l(s) || d.getLogger(this).error(s);
        });
      }), "RefreshableLayerView");
    }
  };
  return e = i([t("esri.layers.mixins.RefreshableLayerView")], e), e;
};
export {
  o as i
};
//# sourceMappingURL=RefreshableLayerView-D_DHKFsO.js.map
