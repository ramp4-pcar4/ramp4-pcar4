import { N as a, O as t, P as l } from "./main-DIdq27YS.js";
import { X as o } from "./FeatureLayerView2D-CwQTM8f0.js";
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
//# sourceMappingURL=OGCFeatureLayerView2D-FFEgbvSu.js.map
