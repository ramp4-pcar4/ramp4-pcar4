import { K as h, C as n, N as i, O as s, P as o } from "./main-3gzXighg.js";
import { a as d } from "./BitmapContainer-DiHr-VEM.js";
import { m as p, u as m } from "./LayerView-BYfqN0Pb.js";
import { v as c } from "./ExportStrategy-Dj2qk8Yv.js";
import { i as u } from "./RefreshableLayerView-BPWkM12E.js";
let t = class extends u(p(m)) {
  update(a) {
    this._strategy.update(a).catch((e) => {
      h(e) || n.getLogger(this).error(e);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new d(), this.container.addChild(this._bitmapContainer), this._strategy = new c({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(a, e, r) {
    return this.layer.fetchImageBitmap(a, e, r);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
i([s()], t.prototype, "_strategy", void 0), i([s()], t.prototype, "updating", void 0), t = i([o("esri.views.2d.layers.BaseDynamicLayerView2D")], t);
const _ = t;
export {
  _ as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-BYbpiIw8.js.map
