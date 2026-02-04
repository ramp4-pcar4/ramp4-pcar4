import { V as n, N as a, O as i, P as s } from "./main-CmejC-so.js";
import { m as o, u as l } from "./LayerView-CMF2YA8a.js";
let t = class extends o(l) {
  constructor() {
    super(...arguments), this.layerViews = new n();
  }
  get dynamicGroupLayerView() {
    return this.layerViews.find((e) => e.layer === this.layer?.dynamicGroupLayer);
  }
  get footprintLayerView() {
    return this.layerViews.find((e) => e.layer === this.layer?.footprintLayer);
  }
  update(e) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: !0 })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  isUpdating() {
    return this.layerViews.some((e) => e.updating);
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, r) => this.container.addChildAt(e.container, r));
  }
};
a([i()], t.prototype, "dynamicGroupLayerView", null), a([i()], t.prototype, "footprintLayerView", null), a([i()], t.prototype, "layerViews", void 0), t = a([s("esri.views.2d.layers.CatalogLayerView2D")], t);
const h = t;
export {
  h as default
};
//# sourceMappingURL=CatalogLayerView2D-B6QCuneT.js.map
