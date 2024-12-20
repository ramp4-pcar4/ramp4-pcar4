import { N as i, O as m, fo as F, P as S, fz as $, b5 as C, s as f, a8 as E, K as U, C as R, U as q, aU as V } from "./main-BpIyUAdL.js";
import { a as M } from "./BitmapContainer-_HqteeWM.js";
import { m as L, u as W } from "./LayerView-C-u9q5oX.js";
import { v as z } from "./ExportStrategy-BBGAekd5.js";
import { i as A } from "./RefreshableLayerView-B500CvHq.js";
const H = (t) => {
  let e = class extends t {
    initialize() {
      this.exportImageParameters = new $({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = C(this.exportImageParameters);
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    async fetchPopupFeaturesAtLocation(r, s) {
      const { layer: o } = this;
      if (!r) throw new f("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: o });
      const { popupEnabled: d } = o;
      if (!d) throw new f("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: d });
      const a = this.createFetchPopupFeaturesQuery(r);
      if (!a) return [];
      const { extent: n, width: h, height: p, x: c, y } = a;
      if (!(n && h && p)) throw new f("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: n, width: h, height: p });
      const g = await o.fetchFeatureInfo(n, h, p, c, y);
      return E(s), g;
    }
  };
  return i([m()], e.prototype, "exportImageParameters", void 0), i([m({ readOnly: !0 })], e.prototype, "exportImageVersion", null), i([m()], e.prototype, "layer", void 0), i([m(F)], e.prototype, "timeExtent", void 0), e = i([S("esri.layers.mixins.WMSLayerView")], e), e;
};
let u = class extends H(A(L(W))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new M();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  update(t) {
    this.strategy.update(t).catch((e) => {
      U(e) || R.getLogger(this).error(e);
    });
  }
  attach() {
    const { layer: t } = this, { imageMaxHeight: e, imageMaxWidth: r } = t;
    this.bitmapContainer = new M(), this.container.addChild(this.bitmapContainer), this.strategy = new z({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: e, imageMaxWidth: r, imageRotationSupported: !1, imageNormalizationSupported: !1, hidpi: !1 }), this.addAttachHandles(q(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = C(this.strategy), this.container.removeAllChildren();
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(t) {
    const { view: e, bitmapContainer: r } = this, { x: s, y: o } = t, { spatialReference: d } = e;
    let a, n = 0, h = 0;
    if (r.children.some((g) => {
      const { width: w, height: v, resolution: P, x: l, y: x } = g, b = l + P * w, I = x - P * v;
      return s >= l && s <= b && o <= x && o >= I && (a = new V({ xmin: l, ymin: I, xmax: b, ymax: x, spatialReference: d }), n = w, h = v, !0);
    }), !a) return null;
    const p = a.width / n, c = Math.round((s - a.xmin) / p), y = Math.round((a.ymax - o) / p);
    return { extent: a, width: n, height: h, x: c, y };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e, r, s) {
    return this.layer.fetchImageBitmap(t, e, r, { timeExtent: this.timeExtent, ...s });
  }
};
i([m()], u.prototype, "strategy", void 0), i([m()], u.prototype, "updating", void 0), u = i([S("esri.views.2d.layers.WMSLayerView2D")], u);
const D = u;
export {
  D as default
};
//# sourceMappingURL=WMSLayerView2D-B0kgofDH.js.map
