import { O as a, P as t, Q as l } from "./main-C4pF0E7B.js";
import { r as o } from "./FeatureLayerView2D-Bch6BKe_.js";
const p = (r) => {
  let e = class extends r {
    get availableFields() {
      return this.layer.fieldsIndex.fields.map((i) => i.name);
    }
  };
  return a([t()], e.prototype, "layer", void 0), a([t({ readOnly: !0 })], e.prototype, "availableFields", null), e = a([l("esri.views.layers.OGCFeatureLayerView")], e), e;
};
let s = class extends p(o) {
  supportsSpatialReference(r) {
    return this.layer.serviceSupportsSpatialReference(r);
  }
};
s = a([l("esri.views.2d.layers.OGCFeatureLayerView2D")], s);
const y = s;
export {
  y as default
};
//# sourceMappingURL=OGCFeatureLayerView2D-DW9I8KNf.js.map
