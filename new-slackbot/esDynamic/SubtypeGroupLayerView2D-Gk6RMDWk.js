import { N as o, P as u, U as l, X as p, af as g } from "./main-BpIyUAdL.js";
import { X as h } from "./FeatureLayerView2D-Dk2trs8i.js";
let e = class extends h {
  initialize() {
    this.addHandles([l(() => this.view.scale, () => this._update(), p)], "constructor");
  }
  isUpdating() {
    const i = this.layer.sublayers.some((r) => r.renderer != null), s = this._commandsQueue.updateTracking.updating, a = this._updatingRequiredFieldsPromise != null, t = !this._worker, n = this.dataUpdating, d = i && (s || a || t || n);
    return g("esri-2d-log-updating") && console.log(`Updating FLV2D: ${d}
  -> hasRenderer ${i}
  -> hasPendingCommand ${s}
  -> updatingRequiredFields ${a}
  -> updatingProxy ${t}
  -> updatingPipeline ${n}
`), d;
  }
};
e = o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")], e);
const $ = e;
export {
  $ as default
};
//# sourceMappingURL=SubtypeGroupLayerView2D-Gk6RMDWk.js.map
