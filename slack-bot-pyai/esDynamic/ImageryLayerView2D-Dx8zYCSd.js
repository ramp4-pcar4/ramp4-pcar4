import { N as s, O as n, P as w, dU as R, K as b, C as _, ap as P, jR as A, S as F, aU as B, jS as I, dm as z, U as f, go as C, a2 as M, cC as j, fo as L, s as V, a8 as O, f5 as H, a6 as $, D as N, fi as E, V as S, H as q, af as G } from "./main-DhLeoxL5.js";
import { d as J, f as W, a as K } from "./RasterVFDisplayObject-By3ybQMp.js";
import { m as Q, u as X } from "./LayerView-BUXYmvJm.js";
import { $ as Y } from "./GraphicsView2D-UEmmkVkC.js";
import { h as Z } from "./HighlightGraphicContainer-njIwtBE8.js";
import { a as ee } from "./BitmapContainer-K3tfa2bJ.js";
import { h as te, E as D } from "./Container-B4fR9B2k.js";
import { l as ie } from "./Bitmap-BsvpzpNH.js";
import { v as ae } from "./ExportStrategy-Bp-KfFhG.js";
import { J as se } from "./rasterProjectionHelper-DRYmQmjM.js";
import { n as re } from "./WGLContainer-Cnz7j1HY.js";
import { p as ne } from "./popupUtils-CfpMu5Sm.js";
import { i as oe } from "./RefreshableLayerView-D_DHKFsO.js";
let h = class extends R {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new te(), this.updateRequested = !1, this.type = "imagery", this._bitmapView = new ee();
  }
  destroy() {
    this.attached && (this.detach(), this.attached = !1), this.updateRequested = !1;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(e) {
    this.strategy.update(e).catch((t) => {
      b(t) || _.getLogger(this).error(t);
    });
  }
  hitTest(e) {
    return new P({ attributes: {}, geometry: e.clone(), layer: this.layer });
  }
  attach() {
    this.container.addChild(this._bitmapView);
    const e = this.layer.version >= 10, t = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048, i = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this.strategy = new ae({ container: this._bitmapView, imageNormalizationSupported: e, imageMaxHeight: t, imageMaxWidth: i, fetchSource: this._fetchImage.bind(this), requestUpdate: () => this.requestUpdate() });
  }
  detach() {
    this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren(), this.updateRequested = !1;
  }
  redraw() {
    this.strategy.updateExports(async (e) => {
      const { source: t } = e;
      if (!t || t instanceof ImageBitmap) return;
      const i = await this.layer.applyRenderer({ extent: t.extent, pixelBlock: t.originalPixelBlock ?? t.pixelBlock });
      t.filter = (a) => this.layer.pixelFilter ? this.layer.applyFilter(a) : { ...i, extent: t.extent };
    }).catch((e) => {
      b(e) || _.getLogger(this).error(e);
    });
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.view.requestUpdate());
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  getPixelData() {
    if (this.updating) return null;
    const e = this.strategy.bitmaps;
    if (e.length === 1 && e[0].source) return { extent: e[0].source.extent, pixelBlock: e[0].source.originalPixelBlock };
    if (e.length > 1) {
      const t = this.view.extent, i = e.map((r) => r.source).filter((r) => r.extent && r.extent.intersects(t)).map((r) => ({ extent: r.extent, pixelBlock: r.originalPixelBlock })), a = A(i, t);
      return a != null ? { extent: a.extent, pixelBlock: a.pixelBlock } : null;
    }
    return null;
  }
  async _fetchImage(e, t, i, a) {
    (a = a || {}).timeExtent = this.timeExtent, a.requestAsImageElement = !0, a.returnImageBitmap = !0;
    const r = await this.layer.fetchImage(e, t, i, a);
    if (r.imageBitmap) return r.imageBitmap;
    const o = await this.layer.applyRenderer(r.pixelData, { signal: a.signal }), l = new ie(o.pixelBlock, o.extent?.clone(), r.pixelData.pixelBlock);
    return l.filter = (m) => this.layer.applyFilter(m), l;
  }
};
s([n()], h.prototype, "attached", void 0), s([n()], h.prototype, "container", void 0), s([n()], h.prototype, "layer", void 0), s([n()], h.prototype, "strategy", void 0), s([n()], h.prototype, "timeExtent", void 0), s([n()], h.prototype, "view", void 0), s([n()], h.prototype, "updateRequested", void 0), s([n()], h.prototype, "updating", null), s([n()], h.prototype, "type", void 0), h = s([w("esri.views.2d.layers.imagery.ImageryView2D")], h);
const le = h;
class he extends re {
  constructor() {
    super(...arguments), this.symbolTypes = ["triangle"];
  }
  prepareRenderPasses(t) {
    const i = t.registerRenderPass({ name: "imagery (vf)", brushes: [J], target: () => this.children, drawPhase: D.MAP });
    return [...super.prepareRenderPasses(t), i];
  }
  doRender(t) {
    this.visible && t.drawPhase === D.MAP && this.symbolTypes.forEach((i) => {
      t.renderPass = i, super.doRender(t);
    });
  }
}
let y = class extends R {
  constructor(e) {
    super(e), this._loading = null, this.update = F((t, i) => this._update(t, i).catch((a) => {
      b(a) || _.getLogger(this).error(a);
    }));
  }
  get updating() {
    return !!this._loading;
  }
  redraw(e) {
    if (!this.container.children.length) return;
    const t = this.container.children[0];
    t.symbolizerParameters = e, t.invalidateVAO(), this.container.symbolTypes = e.style === "wind_speed" ? ["scalar", "triangle"] : e.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.requestRender();
  }
  async _update(e, t, i) {
    if (!e.stationary) return;
    const { extent: a, spatialReference: r } = e.state, o = new B({ xmin: a.xmin, ymin: a.ymin, xmax: a.xmax, ymax: a.ymax, spatialReference: r }), [l, m] = e.state.size;
    this._loading = this.fetchPixels(o, l, m, i);
    const c = await this._loading;
    this._addToDisplay(c, t, e.state), this._loading = null;
  }
  _addToDisplay(e, t, i) {
    if (e.pixelBlock == null) return this.container.children.forEach((l) => l.destroy()), void this.container.removeAllChildren();
    const { extent: a, pixelBlock: r } = e, o = new W(r);
    o.offset = [0, 0], o.symbolizerParameters = t, o.rawPixelData = e, o.invalidateVAO(), o.x = a.xmin, o.y = a.ymax, o.pixelRatio = i.pixelRatio, o.rotation = i.rotation, o.resolution = i.resolution, o.width = r.width * t.symbolTileSize, o.height = r.height * t.symbolTileSize, this.container.children.forEach((l) => l.destroy()), this.container.removeAllChildren(), this.container.symbolTypes = t.style === "wind_speed" ? ["scalar", "triangle"] : t.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.addChild(o);
  }
};
s([n()], y.prototype, "fetchPixels", void 0), s([n()], y.prototype, "container", void 0), s([n()], y.prototype, "_loading", void 0), s([n()], y.prototype, "updating", null), y = s([w("esri.views.2d.layers.imagery.ImageryVFStrategy")], y);
const pe = y;
let p = class extends R {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new he(), this.type = "imageryVF", this._dataParameters = { exportParametersVersion: 0, bbox: "", symbolTileSize: 0, time: "" }, this._fetchpixels = async (e, t, i, a) => {
      const r = await this._projectFullExtentPromise, { symbolTileSize: o } = this.layer.renderer, { extent: l, width: m, height: c } = I(e, t, i, o, r);
      if (r != null && !r.intersects(e)) return { extent: l, pixelBlock: null };
      const d = { bbox: `${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`, exportParametersVersion: this.layer.exportImageServiceParameters.version, symbolTileSize: o, time: JSON.stringify(this.timeExtent || "") };
      if (this._canReuseVectorFieldData(d)) {
        const u = this.getPixelData();
        if (u != null && `${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}` === d.bbox)
          return u;
      }
      const { pixelData: v } = await this.layer.fetchImage(l, m, c, { timeExtent: this.timeExtent, requestAsImageElement: !1, signal: a });
      this._dataParameters = d;
      const g = v?.pixelBlock;
      return g == null ? { extent: l, pixelBlock: null } : { extent: l, pixelBlock: this.layer.rasterInfo.dataType === "vector-uv" ? z(g, "vector-uv") : g };
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    this._projectFullExtentPromise = this._getProjectedFullExtent(this.view.spatialReference), this._strategy = new pe({ container: this.container, fetchPixels: this._fetchpixels }), this.addHandles(f(() => this.layer.renderer, (e) => this._updateSymbolizerParams(e), C), "attach");
  }
  detach() {
    this._strategy.destroy(), this.container.children.forEach((e) => e.destroy()), this.container.removeAllChildren(), this.removeHandles("attach"), this._strategy = this.container = this._projectFullExtentPromise = null;
  }
  getPixelData() {
    const e = this.container.children[0]?.rawPixelData;
    if (this.updating || !e) return null;
    const { extent: t, pixelBlock: i } = e;
    return { extent: t, pixelBlock: i };
  }
  hitTest(e) {
    return new P({ attributes: {}, geometry: e.clone(), layer: this.layer });
  }
  update(e) {
    this._strategy.update(e, this._symbolizerParams).catch((t) => {
      b(t) || _.getLogger(this).error(t);
    });
  }
  redraw() {
    const { renderer: e } = this.layer;
    e && (this._updateSymbolizerParams(e), this._strategy.redraw(this._symbolizerParams));
  }
  _canReuseVectorFieldData(e) {
    const t = this._dataParameters.exportParametersVersion === e.exportParametersVersion, i = this._dataParameters.time === e.time, a = this._dataParameters.symbolTileSize === e.symbolTileSize, r = this._dataParameters.bbox === e.bbox;
    return t && i && a && r;
  }
  async _getProjectedFullExtent(e) {
    try {
      return se(this.layer.fullExtent, e);
    } catch {
      try {
        const i = (await M(this.layer.url, { query: { option: "footprints", outSR: j(e), f: "json" } })).data.featureCollection.layers[0].layerDefinition.extent;
        return i ? B.fromJSON(i) : null;
      } catch {
        return null;
      }
    }
  }
  _updateSymbolizerParams(e) {
    e.type === "vector-field" && (this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null }));
  }
};
s([n()], p.prototype, "attached", void 0), s([n()], p.prototype, "container", void 0), s([n()], p.prototype, "layer", void 0), s([n()], p.prototype, "timeExtent", void 0), s([n()], p.prototype, "type", void 0), s([n()], p.prototype, "view", void 0), s([n()], p.prototype, "updating", null), p = s([w("esri.views.2d.layers.imagery.VectorFieldView2D")], p);
const ce = p, de = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.view = null;
    }
    async fetchPopupFeaturesAtLocation(i, a) {
      const { layer: r } = this;
      if (!i) throw new V("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: r });
      const { popupEnabled: o } = r, l = ne(r, a);
      if (!o || l == null) throw new V("imagerylayerview:fetchPopupFeatures", "Missing required popupTemplate or popupEnabled", { popupEnabled: o, popupTemplate: l });
      const m = await l.getRequiredFields();
      O(a);
      const c = new H();
      c.timeExtent = this.timeExtent, c.geometry = i, c.outFields = m, c.outSpatialReference = i.spatialReference;
      const { resolution: d, spatialReference: v } = this.view, g = this.view.type === "2d" ? new $(d, d, v) : new $(0.5 * d, 0.5 * d, v), { returnTopmostRaster: u, showNoDataRecords: k } = l.layerOptions || { returnTopmostRaster: !0, showNoDataRecords: !1 }, T = { returnDomainValues: !0, returnTopmostRaster: u, pixelSize: g, showNoDataRecords: k, signal: a?.signal };
      return r.queryVisibleRasters(c, T).then((U) => U);
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return s([n()], t.prototype, "layer", void 0), s([n()], t.prototype, "suspended", void 0), s([n(L)], t.prototype, "timeExtent", void 0), s([n()], t.prototype, "view", void 0), t = s([w("esri.views.layers.ImageryLayerView")], t), t;
};
let x = class extends de(oe(Q(X))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1, this._highlightGraphics = new N(), this._highlightView = void 0, this.layer = null, this.subview = null;
  }
  get pixelData() {
    const { subview: e } = this;
    return this.updating || !e ? null : "getPixelData" in e ? e.getPixelData() : null;
  }
  update(e) {
    this.subview?.update(e);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.view && (this._highlightView = new Y({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new Z(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container)), this.addAttachHandles([f(() => this.layer.exportImageServiceParameters.version, (e) => {
      e && this._exportImageVersion !== e && (this._exportImageVersion = e, this.requestUpdate());
    }, E), f(() => this.timeExtent, (e) => {
      const { subview: t } = this;
      t && (t.timeExtent = e, "redraw" in t ? this.requestUpdate() : t.redrawOrRefetch());
    }, E), this.layer.on("redraw", () => {
      const { subview: e } = this;
      e && ("redraw" in e ? e.redraw() : e.redrawOrRefetch());
    }), f(() => this.layer.renderer, () => this._setSubView())]);
  }
  detach() {
    this.layer.decreaseRasterJobHandlerUsage(), this.container.removeAllChildren(), this._detachSubview(this.subview), this.subview?.destroy(), this.subview = null, this._highlightView?.destroy(), this._exportImageVersion = -1;
  }
  moveStart() {
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e, t) {
    if (!((Array.isArray(e) ? e[0] : S.isCollection(e) ? e.at(0) : e) instanceof P)) return q();
    let i = [];
    return Array.isArray(e) || S.isCollection(e) ? i = e.map((a) => a.clone()) : e instanceof P && (i = [e.clone()]), this._highlightGraphics.addMany(i), q(() => this._highlightGraphics.removeMany(i));
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    const e = !this.subview || this.subview.updating || !!this._highlightView?.updating;
    return G("esri-2d-log-updating") && console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
-> subview ${!this.subview || this.subview.updating}
-> higlightView ${this._highlightView?.updating}
`), e;
  }
  _setSubView() {
    if (!this.view) return;
    const e = this.layer.renderer?.type;
    let t = "imagery";
    if (e === "vector-field" ? t = "imageryVF" : e === "flow" && (t = "flow"), this.subview) {
      const { type: i } = this.subview;
      if (i === t) return this._attachSubview(this.subview), void (i === "flow" ? this.subview.redrawOrRefetch() : i === "imagery" && this.layer.format === "lerc" ? this.subview.redraw() : this.requestUpdate());
      this._detachSubview(this.subview), this.subview?.destroy();
    }
    this.subview = t === "imagery" ? new le({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : t === "imageryVF" ? new ce({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : new K({ layer: this.layer, layerView: this }), this._attachSubview(this.subview), this.requestUpdate();
  }
  _attachSubview(e) {
    e && !e.attached && (e.attach(), e.attached = !0, this.container.addChildAt(e.container, 0));
  }
  _detachSubview(e) {
    e?.attached && (this.container.removeChild(e.container), e.detach(), e.attached = !1);
  }
};
s([n()], x.prototype, "pixelData", null), s([n()], x.prototype, "subview", void 0), x = s([w("esri.views.2d.layers.ImageryLayerView2D")], x);
const $e = x;
export {
  $e as default
};
//# sourceMappingURL=ImageryLayerView2D-Dx8zYCSd.js.map
