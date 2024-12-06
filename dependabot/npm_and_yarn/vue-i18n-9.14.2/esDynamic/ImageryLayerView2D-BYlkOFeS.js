import { O as r, P as o, Q as w, e2 as R, M as b, D as _, aj as P, ka as A, f1 as I, b8 as q, kb as z, i4 as F, S as f, gT as U, $ as C, cW as M, s as O, dK as L, fn as j, a3 as V, E as H, fw as E, V as $, J as S, a9 as N } from "./main-uCo5F72j.js";
import { d as J, f as G, a as W } from "./RasterVFDisplayObject-Cji0Rh2m.js";
import { f as K, y as Q } from "./LayerView-e9W65gRE.js";
import { V as X } from "./GraphicsView2D-DP-ZDFAT.js";
import { h as Y } from "./HighlightGraphicContainer-BzeLZR33.js";
import { a as Z } from "./BitmapContainer-BssQTztY.js";
import { h as ee, E as D } from "./Container-D8I93PMs.js";
import { l as te } from "./Bitmap-E-1eK4dZ.js";
import { _ as ie } from "./ExportStrategy-BQZatv6V.js";
import { J as se } from "./rasterProjectionHelper-LuHDux50.js";
import { n as re } from "./WGLContainer-Ca2Hy4zX.js";
import { i as ae } from "./timeSupport-BRptguMI.js";
import { p as ne } from "./popupUtils-wEufgE8s.js";
import { i as oe } from "./RefreshableLayerView-BGtwDqU2.js";
let h = class extends R {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new ee(), this.updateRequested = !1, this.type = "imagery", this._bitmapView = new Z();
  }
  destroy() {
    this.attached && (this.detach(), this.attached = !1), this.updateRequested = !1;
  }
  get updating() {
    return !this.attached || this.isUpdating();
  }
  update(t) {
    this.strategy.update(t).catch((i) => {
      b(i) || _.getLogger(this).error(i);
    });
  }
  hitTest(t) {
    return new P({ attributes: {}, geometry: t.clone(), layer: this.layer });
  }
  attach() {
    this.container.addChild(this._bitmapView);
    const t = this.layer.version >= 10, i = this.layer.version >= 10.1 ? this.layer.imageMaxHeight : 2048, n = this.layer.version >= 10.1 ? this.layer.imageMaxWidth : 2048;
    this.strategy = new ie({ container: this._bitmapView, imageNormalizationSupported: t, imageMaxHeight: i, imageMaxWidth: n, fetchSource: this._fetchImage.bind(this), requestUpdate: () => this.requestUpdate() });
  }
  detach() {
    this.strategy.destroy(), this._bitmapView.removeAllChildren(), this.container.removeAllChildren(), this.updateRequested = !1;
  }
  redraw() {
    this.strategy.updateExports(async (t) => {
      const { source: i } = t;
      if (!i || i instanceof ImageBitmap) return;
      const n = await this.layer.applyRenderer({ extent: i.extent, pixelBlock: i.originalPixelBlock ?? i.pixelBlock });
      i.filter = (a) => this.layer.pixelFilter ? this.layer.applyFilter(a) : { ...n, extent: i.extent };
    }).catch((t) => {
      b(t) || _.getLogger(this).error(t);
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
    const t = this.strategy.bitmaps;
    if (t.length === 1 && t[0].source) return { extent: t[0].source.extent, pixelBlock: t[0].source.originalPixelBlock };
    if (t.length > 1) {
      const i = this.view.extent, n = t.map((s) => s.source).filter((s) => s.extent && s.extent.intersects(i)).map((s) => ({ extent: s.extent, pixelBlock: s.originalPixelBlock })), a = A(n, i);
      return a != null ? { extent: a.extent, pixelBlock: a.pixelBlock } : null;
    }
    return null;
  }
  async _fetchImage(t, i, n, a) {
    (a = a || {}).timeExtent = this.timeExtent, a.requestAsImageElement = !0, a.returnImageBitmap = !0;
    const s = await this.layer.fetchImage(t, i, n, a);
    if (s.imageBitmap) return s.imageBitmap;
    const l = await this.layer.applyRenderer(s.pixelData, { signal: a.signal }), p = new te(l.pixelBlock, l.extent?.clone(), s.pixelData.pixelBlock);
    return p.filter = (c) => this.layer.applyFilter(c), p;
  }
};
r([o()], h.prototype, "attached", void 0), r([o()], h.prototype, "container", void 0), r([o()], h.prototype, "layer", void 0), r([o()], h.prototype, "strategy", void 0), r([o()], h.prototype, "timeExtent", void 0), r([o()], h.prototype, "view", void 0), r([o()], h.prototype, "updateRequested", void 0), r([o()], h.prototype, "updating", null), r([o()], h.prototype, "type", void 0), h = r([w("esri.views.2d.layers.imagery.ImageryView2D")], h);
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
let m = class extends R {
  constructor(e) {
    super(e), this._loading = null, this.update = I((t, i) => this._update(t, i).catch((n) => {
      b(n) || _.getLogger(this).error(n);
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
    const { extent: n, spatialReference: a } = e.state, s = new q({ xmin: n.xmin, ymin: n.ymin, xmax: n.xmax, ymax: n.ymax, spatialReference: a }), [l, p] = e.state.size;
    this._loading = this.fetchPixels(s, l, p, i);
    const c = await this._loading;
    this._addToDisplay(c, t, e.state), this._loading = null;
  }
  _addToDisplay(e, t, i) {
    if (e.pixelBlock == null) return this.container.children.forEach((l) => l.destroy()), void this.container.removeAllChildren();
    const { extent: n, pixelBlock: a } = e, s = new G(a);
    s.offset = [0, 0], s.symbolizerParameters = t, s.rawPixelData = e, s.invalidateVAO(), s.x = n.xmin, s.y = n.ymax, s.pixelRatio = i.pixelRatio, s.rotation = i.rotation, s.resolution = i.resolution, s.width = a.width * t.symbolTileSize, s.height = a.height * t.symbolTileSize, this.container.children.forEach((l) => l.destroy()), this.container.removeAllChildren(), this.container.symbolTypes = t.style === "wind_speed" ? ["scalar", "triangle"] : t.style === "simple_scalar" ? ["scalar"] : ["triangle"], this.container.addChild(s);
  }
};
r([o()], m.prototype, "fetchPixels", void 0), r([o()], m.prototype, "container", void 0), r([o()], m.prototype, "_loading", void 0), r([o()], m.prototype, "updating", null), m = r([w("esri.views.2d.layers.imagery.ImageryVFStrategy")], m);
const ce = m;
let d = class extends R {
  constructor() {
    super(...arguments), this.attached = !1, this.container = new he(), this.type = "imageryVF", this._dataParameters = { exportParametersVersion: 0, bbox: "", symbolTileSize: 0, time: "" }, this._fetchpixels = async (e, t, i, n) => {
      const a = await this._projectFullExtentPromise, { symbolTileSize: s } = this.layer.renderer, { extent: l, width: p, height: c } = z(e, t, i, s, a);
      if (a != null && !a.intersects(e)) return { extent: l, pixelBlock: null };
      const u = { bbox: `${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`, exportParametersVersion: this.layer.exportImageServiceParameters.version, symbolTileSize: s, time: JSON.stringify(this.timeExtent || "") };
      if (this._canReuseVectorFieldData(u)) {
        const y = this.getPixelData();
        if (y != null && `${y.extent.xmin}, ${y.extent.ymin}, ${y.extent.xmax}, ${y.extent.ymax}` === u.bbox)
          return y;
      }
      const { pixelData: v } = await this.layer.fetchImage(l, p, c, { timeExtent: this.timeExtent, requestAsImageElement: !1, signal: n });
      this._dataParameters = u;
      const g = v?.pixelBlock;
      return g == null ? { extent: l, pixelBlock: null } : { extent: l, pixelBlock: this.layer.rasterInfo.dataType === "vector-uv" ? F(g, "vector-uv") : g };
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    this._projectFullExtentPromise = this._getProjectedFullExtent(this.view.spatialReference), this._strategy = new ce({ container: this.container, fetchPixels: this._fetchpixels }), this.addHandles(f(() => this.layer.renderer, (e) => this._updateSymbolizerParams(e), U), "attach");
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
    const t = this._dataParameters.exportParametersVersion === e.exportParametersVersion, i = this._dataParameters.time === e.time, n = this._dataParameters.symbolTileSize === e.symbolTileSize, a = this._dataParameters.bbox === e.bbox;
    return t && i && n && a;
  }
  async _getProjectedFullExtent(e) {
    try {
      return se(this.layer.fullExtent, e);
    } catch {
      try {
        const i = (await C(this.layer.url, { query: { option: "footprints", outSR: M(e), f: "json" } })).data.featureCollection.layers[0].layerDefinition.extent;
        return i ? q.fromJSON(i) : null;
      } catch {
        return null;
      }
    }
  }
  _updateSymbolizerParams(e) {
    e.type === "vector-field" && (this._symbolizerParams = this.layer.symbolizer.generateWebGLParameters({ pixelBlock: null }));
  }
};
r([o()], d.prototype, "attached", void 0), r([o()], d.prototype, "container", void 0), r([o()], d.prototype, "layer", void 0), r([o()], d.prototype, "timeExtent", void 0), r([o()], d.prototype, "type", void 0), r([o()], d.prototype, "view", void 0), r([o()], d.prototype, "updating", null), d = r([w("esri.views.2d.layers.imagery.VectorFieldView2D")], d);
const de = d, pe = (e) => {
  let t = class extends e {
    constructor() {
      super(...arguments), this.view = null;
    }
    get timeExtent() {
      return ae(this.layer, this.view?.timeExtent, this._get("timeExtent"));
    }
    async fetchPopupFeaturesAtLocation(i, n) {
      const { layer: a } = this;
      if (!i) throw new O("imagerylayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: a });
      const { popupEnabled: s } = a, l = ne(a, n);
      if (!s || l == null) return [];
      const p = await l.getRequiredFields();
      L(n);
      const c = new j();
      c.timeExtent = this.timeExtent, c.geometry = i, c.outFields = p, c.outSpatialReference = i.spatialReference;
      const { resolution: u, spatialReference: v } = this.view, g = this.view.type === "2d" ? new V(u, u, v) : new V(0.5 * u, 0.5 * u, v), { returnTopmostRaster: y, showNoDataRecords: k } = l.layerOptions || { returnTopmostRaster: !0, showNoDataRecords: !1 }, B = { returnDomainValues: !0, returnTopmostRaster: y, pixelSize: g, showNoDataRecords: k, signal: n?.signal };
      return a.queryVisibleRasters(c, B).then((T) => T);
    }
    canResume() {
      return !!super.canResume() && !this.timeExtent?.isEmpty;
    }
  };
  return r([o()], t.prototype, "layer", void 0), r([o()], t.prototype, "suspended", void 0), r([o({ readOnly: !0 })], t.prototype, "timeExtent", null), r([o()], t.prototype, "view", void 0), t = r([w("esri.views.layers.ImageryLayerView")], t), t;
};
let x = class extends pe(oe(K(Q))) {
  constructor() {
    super(...arguments), this._exportImageVersion = -1, this._highlightGraphics = new H(), this._highlightView = void 0, this.layer = null, this.subview = null;
  }
  get pixelData() {
    const { subview: e } = this;
    return this.updating || !e ? null : "getPixelData" in e ? e.getPixelData() : null;
  }
  update(e) {
    this.subview?.update(e);
  }
  attach() {
    this.layer.increaseRasterJobHandlerUsage(), this._setSubView(), this.view && (this._highlightView = new X({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new Y(this.view.featuresTilingScheme) }), this.container.addChild(this._highlightView.container)), this.addAttachHandles([f(() => this.layer.exportImageServiceParameters.version, (e) => {
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
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  highlight(e, t) {
    if (!((Array.isArray(e) ? e[0] : $.isCollection(e) ? e.at(0) : e) instanceof P)) return S();
    let i = [];
    return Array.isArray(e) || $.isCollection(e) ? i = e.map((n) => n.clone()) : e instanceof P && (i = [e.clone()]), this._highlightGraphics.addMany(i), S(() => this._highlightGraphics.removeMany(i));
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    const e = !this.subview || this.subview.updating || !!this._highlightView?.updating;
    return N("esri-2d-log-updating") && console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${e}
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
    this.subview = t === "imagery" ? new le({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : t === "imageryVF" ? new de({ layer: this.layer, view: this.view, timeExtent: this.timeExtent }) : new W({ layer: this.layer, layerView: this }), this._attachSubview(this.subview), this.requestUpdate();
  }
  _attachSubview(e) {
    e && !e.attached && (e.attach(), e.attached = !0, this.container.addChildAt(e.container, 0));
  }
  _detachSubview(e) {
    e?.attached && (this.container.removeChild(e.container), e.detach(), e.attached = !1);
  }
};
r([o()], x.prototype, "pixelData", null), r([o()], x.prototype, "subview", void 0), x = r([w("esri.views.2d.layers.ImageryLayerView2D")], x);
const Se = x;
export {
  Se as default
};
//# sourceMappingURL=ImageryLayerView2D-BYlkOFeS.js.map
