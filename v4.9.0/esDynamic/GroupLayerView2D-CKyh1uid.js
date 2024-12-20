import { N as t, O as l, br as o, P as d, V, U as a, fi as y, bq as p } from "./main-DIdq27YS.js";
import { u as w, m as v } from "./LayerView-uykJUj8Q.js";
let s = class extends w {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new V();
  }
  destroy() {
    this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e) => {
      e.visible = i;
    });
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)), a(() => this.layer?.visibilityMode, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, y), a(() => this.visible, (i) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i), () => {
      });
    }, y)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  set layerViews(i) {
    this._set("layerViews", p(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return this.layerViews.length === 0 ? 1 : this.layerViews.reduce((i, e) => i + e.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e) => e.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((e) => !!this._findLayerViewForLayer(e)?.visible);
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    i == null && (i = this._firstVisibleOnLayerOrder()) == null && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e) => {
      e.visible = e === i;
    });
  }
  _layerViewsChangeHandler(i) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map((r) => a(() => r.visible, (n) => this._applyVisibility(() => {
      n !== this.visible && (r.visible = this.visible);
    }, () => this._applyExclusiveVisibility(n ? r : null)), y)).toArray(), "grouplayerview:visible");
    const e = i.added[i.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(e?.visible ? e : null));
  }
  _applyVisibility(i, e) {
    this._hasLayerViewVisibleOverrides() && (this.layer?.visibilityMode === "inherited" ? i() : this.layer?.visibilityMode === "exclusive" && e());
  }
};
t([l({ cast: o })], s.prototype, "layerViews", null), t([l({ readOnly: !0 })], s.prototype, "updatingProgress", null), t([l()], s.prototype, "view", void 0), s = t([d("esri.views.layers.GroupLayerView")], s);
const u = s;
let h = class extends v(u) {
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(i) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((i, e) => this.container.addChildAt(i.container, e));
  }
};
h = t([d("esri.views.2d.layers.GroupLayerView2D")], h);
const c = h;
export {
  c as default
};
//# sourceMappingURL=GroupLayerView2D-CKyh1uid.js.map
