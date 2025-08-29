import { N as i, O as a, fo as l, P as n, fp as m, D as d, K as u, C as c, U as y } from "./main-CmejC-so.js";
import { a as f } from "./BitmapContainer-BBAXKGnn.js";
import { m as x, u as w } from "./LayerView-CMF2YA8a.js";
import { $ as _ } from "./GraphicsView2D-BSSXQt0w.js";
import { h as v } from "./HighlightGraphicContainer-mP3-IxJB.js";
import { v as H } from "./ExportStrategy-DKdiAknY.js";
import { i as I } from "./RefreshableLayerView-CAzLwph_.js";
import { U, r as P } from "./drapedUtils-CSV-cjx-.js";
const V = (t) => {
  let e = class extends t {
    initialize() {
      this.exportImageParameters = new m({ layer: this.layer });
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
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return i([a()], e.prototype, "exportImageParameters", void 0), i([a({ readOnly: !0 })], e.prototype, "floors", null), i([a({ readOnly: !0 })], e.prototype, "exportImageVersion", null), i([a()], e.prototype, "layer", void 0), i([a()], e.prototype, "suspended", void 0), i([a(l)], e.prototype, "timeExtent", void 0), e = i([n("esri.views.layers.MapImageLayerView")], e), e;
};
let h = class extends V(I(x(w))) {
  constructor() {
    super(...arguments), this._highlightGraphics = new d(), this._updateHash = "";
  }
  fetchPopupFeaturesAtLocation(t, e) {
    return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t, e);
  }
  update(t) {
    const e = `${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;
    this._updateHash !== e && (this._updateHash = e, this.strategy.update(t).catch((r) => {
      u(r) || c.getLogger(this).error(r);
    }), t.stationary && this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)), this._highlightView.processUpdate(t);
  }
  attach() {
    const { imageMaxWidth: t, imageMaxHeight: e, version: r } = this.layer, s = r >= 10.3, g = r >= 10;
    this._bitmapContainer = new f(), this.container.addChild(this._bitmapContainer), this._highlightView = new _({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new v(this.view.featuresTilingScheme), defaultPointSymbolEnabled: !1 }), this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new U({ createFetchPopupFeaturesQueryGeometry: (o, p) => P(o, p, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (o, p) => {
      this._highlightView.graphicUpdateHandler({ graphic: o, property: p });
    }, layerView: this, updatingHandles: this._updatingHandles }), this.strategy = new H({ container: this._bitmapContainer, fetchSource: this.fetchImageBitmap.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxWidth: t, imageMaxHeight: e, imageRotationSupported: s, imageNormalizationSupported: g, hidpi: !0 }), this.addAttachHandles(y(() => this.exportImageVersion, () => this.requestUpdate())), this.requestUpdate();
  }
  detach() {
    this.strategy.destroy(), this.container.removeAllChildren(), this._bitmapContainer.removeAllChildren(), this._highlightView.destroy(), this._popupHighlightHelper.destroy();
  }
  moveStart() {
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
const M = h;
export {
  M as default
};
//# sourceMappingURL=MapImageLayerView2D-BgqRpmQE.js.map
