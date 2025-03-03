import { O as o, Q as u, S as l, T as p, a9 as g } from "./main-uCo5F72j.js";
import { r as h } from "./FeatureLayerView2D-C7RkC3lv.js";
let e = class extends h {
  initialize() {
    this.addHandles([l(() => this.view.scale, () => this._update(), p)], "constructor");
  }
  isUpdating() {
    const s = this.layer.sublayers.some((d) => d.renderer != null), a = this._commandsQueue.updateTracking.updating, i = this._updatingRequiredFieldsPromise != null, t = !this._workerProxy, n = this.dataUpdating, r = s && (a || i || t || n);
    return g("esri-2d-log-updating") && console.log(`Updating FLV2D: ${r}
  -> hasRenderer ${s}
  -> hasPendingCommand ${a}
  -> updatingRequiredFields ${i}
  -> updatingProxy ${t}
  -> updatingPipeline ${n}
`), r;
  }
};
e = o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")], e);
const $ = e;
export {
  $ as default
};
//# sourceMappingURL=SubtypeGroupLayerView2D-DXk4Y6mj.js.map
