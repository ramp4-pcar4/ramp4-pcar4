import { O as i, P as a, Q as n, fC as l, E as m, M as d, D as u, S as c } from "./main-C4pF0E7B.js";
import { a as y } from "./BitmapContainer-CigRCiAx.js";
import { f, y as x } from "./LayerView-CI1PNVWM.js";
import { V as _ } from "./GraphicsView2D-V8DqwvRh.js";
import { h as w } from "./HighlightGraphicContainer-Cys_5jWS.js";
import { _ as H } from "./ExportStrategy-C_4Yp_wF.js";
import { i as v } from "./timeSupport-fEqWDygE.js";
import { i as I } from "./RefreshableLayerView-Bc3Gvu2X.js";
import { _ as $, r as E } from "./drapedUtils-BYAzeOfo.js";
const V = (t) => {
  let e = class extends t {
    initialize() {
      this.exportImageParameters = new l({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters.destroy(), this.exportImageParameters = null;
    }
    get floors() {
      return this.view?.floors ?? null;
    }
    get exportImageVersion() {
      return this.exportImageParameters?.commitProperty("version"), this.commitProperty("timeExtent"), this.commitProperty("floors"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      return v(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return i([a()], e.prototype, "exportImageParameters", void 0), i([a({ readOnly: !0 })], e.prototype, "floors", null), i([a({ readOnly: !0 })], e.prototype, "exportImageVersion", null), i([a()], e.prototype, "layer", void 0), i([a()], e.prototype, "suspended", void 0), i([a({ readOnly: !0 })], e.prototype, "timeExtent", null), e = i([n("esri.views.layers.MapImageLayerView")], e), e;
};
let h = class extends V(I(f(x))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new m(), this._updateHash = "";
  }
  fetchPopupFeaturesAtLocation(t, e) {
    return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t, e);
  }
  update(t) {
    const e = `${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;
    this._updateHash !== e && (this._updateHash = e, this.strategy.update(t).catch((r) => {
      d(r) || u.getLogger(this).error(r);
    }), t.stationary && this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)), this._highlightView.processUpdate(t);
  }
  attach() {
    const { imageMaxWidth: t, imageMaxHeight: e, version: r } = this.layer, s = r >= 10.3, g = r >= 10;
    this._bitmapContainer = new y(), this.container.addChild(this._bitmapContainer), this._highlightView = new _({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new w(this.view.featuresTilingScheme), defaultPointSymbolEnabled: !1 }), this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new $({ createFetchPopupFeaturesQueryGeometry: (o, p) => E(o, p, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (o, p) => {
      this._highlightView.graphicUpdateHandler({ graphic: o, property: p });
    }, layerView: this, updatingHandles: this._updatingHandles }), this.strategy = new H({ container: this._bitmapContainer, fetchSource: this.fetchImageBitmap.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: t, imageMaxHeight: e, imageRotationSupported: s, imageNormalizationSupported: g, hidpi: !0 }), this.addAttachHandles(c(() => this.exportImageVersion, () => this.requestUpdate())), this.requestUpdate();
  }
  detach() {
    this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren(), this._highlightView.destroy(), this._popupHighlightHelper.destroy();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(t) {
    return this.layer.serviceSupportsSpatialReference(t);
  }
  async doRefresh() {
    this._updateHash = "", this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(t, e, r, s) {
    return this.layer.fetchImage(t, e, r, { timeExtent: this.timeExtent, floors: this.floors, ...s });
  }
  fetchImageBitmap(t, e, r, s) {
    return this.layer.fetchImageBitmap(t, e, r, { timeExtent: this.timeExtent, floors: this.floors, ...s });
  }
  highlight(t) {
    return this._popupHighlightHelper.highlight(t);
  }
};
i([a()], h.prototype, "strategy", void 0), i([a()], h.prototype, "updating", void 0), h = i([n("esri.views.2d.layers.MapImageLayerView2D")], h);
const A = h;
export {
  A as default
};
//# sourceMappingURL=MapImageLayerView2D-i2Zred6Z.js.map
