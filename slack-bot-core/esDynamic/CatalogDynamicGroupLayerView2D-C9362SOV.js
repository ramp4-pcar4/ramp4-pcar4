import { V as c, S as p, T as y, U as m, C as f, W as g, N as w, P as C } from "./main-CmejC-so.js";
import { m as S, u as V } from "./LayerView-CMF2YA8a.js";
const s = Symbol();
let l = class extends S(V) {
  constructor() {
    super(...arguments), this.layerViews = new c(), this._debouncedUpdate = p(async () => {
      const { layer: e, parent: { footprintLayerView: a } } = this;
      let i = [];
      if (a) {
        const r = this._createQuery(), { features: d } = await a.queryFeatures(r);
        this.suspended || (i = d.map((n) => e.acquireLayer(n)));
      }
      this.removeHandles(s), this.addHandles(i, s);
    });
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: !0 }), y(() => this.parent.footprintLayerView?.dataUpdating === !1, () => this._updateLayers()), m(() => [this.layer.maximumVisibleSublayers, this.suspended, this.parent.footprintLayerView?.filter], () => this._updateLayers())]);
  }
  detach() {
    this.container.removeAllChildren(), this.removeHandles(s);
  }
  update(e) {
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
  }
  isUpdating() {
    return this.layerViews.some((e) => e.updating);
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, a) => this.container.addChildAt(e.container, a));
  }
  _updateLayers() {
    this.suspended ? this.removeHandles(s) : this._updatingHandles.addPromise(this._debouncedUpdate().catch((e) => {
      f.getLogger(this).error(e);
    }));
  }
  _createQuery() {
    const { parent: { footprintLayerView: e }, layer: { maximumVisibleSublayers: a, parent: { itemTypeField: i, itemSourceField: r, objectIdField: d, orderBy: n } } } = this, u = `${i} <> 'Scene Service'`, t = e.createQuery();
    t.returnGeometry = !1, t.num = a, t.outFields = [d, r], t.where = g(t.where, u);
    const o = n?.find((h) => h.field && !h.valueExpression);
    return o?.field && (t.orderByFields = [`${o.field} ${o.order === "descending" ? "DESC" : "ASC"}`]), t;
  }
};
l = w([C("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")], l);
const L = l;
export {
  L as default
};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-C9362SOV.js.map
