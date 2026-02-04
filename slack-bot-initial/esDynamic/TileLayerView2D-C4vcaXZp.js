import { D as w, E as y, F as I, G as V, H, J as v, K as n, M as g, C as T, N as o, O as m, P as q } from "./main-3gzXighg.js";
import "./GeometryUtils-CioAWdLo.js";
import "./UpdateTracking2D-ByaqMjYp.js";
import "./enums-CQ3NrvMA.js";
import "./definitions-7ZaZRHRo.js";
import "./floatRGBA-C_oVzFRo.js";
import "./Container-Bg5iscbc.js";
import "./WGLContainer-CvKMnvfd.js";
import "./Texture-CX14BhWr.js";
import "./enums-Do5C4ZjN.js";
import "./Program-DodZ7ZlS.js";
import "./LabelMetric-D4mTwYEH.js";
import "./StyleDefinition-CKpkeT8Q.js";
import "./enums-qHpGJ28Q.js";
import "./MagnifierPrograms-CgVoNIhP.js";
import "./FeatureCommandQueue-Blyq0sVR.js";
import "./OrderIndependentTransparency-BCDkO_nh.js";
import "./testSVGPremultipliedAlpha-Glbj6fpe.js";
import { $ as U } from "./GraphicsView2D-Wd8esVjn.js";
import "./earcut-DY2eXHxJ.js";
import "./vec3f32-BS0cezmI.js";
import { r as C, o as f, n as d } from "./imageUtils-BDuuhpje.js";
import { m as S, u as b } from "./LayerView-BYfqN0Pb.js";
import { h as Q } from "./HighlightGraphicContainer-NfoNCKzv.js";
import { i as $ } from "./RefreshableLayerView-BPWkM12E.js";
import { S as P, U as F, r as G } from "./drapedUtils-TmLr1kmk.js";
const L = [0, 0];
let a = class extends $(C(S(b))) {
  constructor() {
    super(...arguments), this._fetchQueue = null, this._highlightGraphics = new w(), this._highlightView = null, this._popupHighlightHelper = null, this._tileStrategy = null, this.layer = null;
  }
  get resampling() {
    return !("resampling" in this.layer) || this.layer.resampling !== !1;
  }
  get tilemapCache() {
    return "tilemapCache" in this.layer ? this.layer.tilemapCache : null;
  }
  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume(), this._highlightView?.processUpdate(e);
  }
  attach() {
    const e = "tileServers" in this.layer ? this.layer.tileServers : null, t = this.tilemapCache;
    if (this._tileInfoView = new y(this.layer.tileInfo, this.layer.fullExtent, t?.effectiveMinLOD, t?.effectiveMaxLOD), this._fetchQueue = new I({ tileInfoView: this._tileInfoView, concurrency: e && 10 * e.length || 10, process: (i, h) => this.fetchTile(i, h) }), this._tileStrategy = new V({ cachePolicy: "keep", resampling: this.resampling, acquireTile: (i) => this.acquireTile(i), releaseTile: (i) => this.releaseTile(i), tileInfoView: this._tileInfoView }), P(this, this.layer)) {
      const i = this._highlightView = new U({ view: this.view, graphics: this._highlightGraphics, requestUpdateCallback: () => this.requestUpdate(), container: new Q(this.view.featuresTilingScheme), defaultPointSymbolEnabled: !1 });
      this.container.addChild(this._highlightView.container), this._popupHighlightHelper = new F({ createFetchPopupFeaturesQueryGeometry: (h, s) => G(h, s, this.view), highlightGraphics: this._highlightGraphics, highlightGraphicUpdated: (h, s) => {
        i.graphicUpdateHandler({ graphic: h, property: s });
      }, layerView: this, updatingHandles: this._updatingHandles });
    }
    this.requestUpdate(), this.addAttachHandles(this._updatingHandles.add(() => this.resampling, () => {
      this.doRefresh();
    })), super.attach();
  }
  detach() {
    super.detach(), this._tileStrategy.destroy(), this._fetchQueue.clear(), this.container.removeAllChildren(), this._popupHighlightHelper?.destroy(), this._highlightView?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = this._popupHighlightHelper = null;
  }
  async fetchPopupFeaturesAtLocation(e, t) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e, t) : [];
  }
  highlight(e) {
    return this._popupHighlightHelper ? this._popupHighlightHelper.highlight(e) : H();
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e) {
    return v(this.layer.tileInfo?.spatialReference, e);
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e) => this._updatingHandles.addPromise(this._enqueueTileFetch(e)));
    }
  }
  acquireTile(e) {
    const t = this._bitmapView.createTile(e), i = t.bitmap;
    return [i.x, i.y] = this._tileInfoView.getTileCoords(L, t.key), i.resolution = this._tileInfoView.getTileResolution(t.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", () => e.destroy()), this.requestUpdate();
  }
  async fetchTile(e, t = {}) {
    const i = this.tilemapCache, { signal: h, resamplingLevel: s = 0 } = t;
    if (!i) try {
      return await this._fetchImage(e, h);
    } catch (r) {
      if (!n(r) && !this.resampling) return f(this._tileInfoView.tileInfo.size);
      if (s < 3) {
        const c = this._tileInfoView.getTileParentId(e.id);
        if (c) {
          const u = new g(c), _ = await this.fetchTile(u, { ...t, resamplingLevel: s + 1 });
          return d(this._tileInfoView, _, u, e);
        }
      }
      throw r;
    }
    const l = new g(0, 0, 0, 0);
    let p;
    try {
      if (await i.fetchAvailabilityUpsample(e.level, e.row, e.col, l, { signal: h }), l.level !== e.level && !this.resampling) return f(this._tileInfoView.tileInfo.size);
      p = await this._fetchImage(l, h);
    } catch (r) {
      if (n(r)) throw r;
      p = await this._fetchImage(e, h);
    }
    return this.resampling ? d(this._tileInfoView, p, l, e) : p;
  }
  async _enqueueTileFetch(e) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key);
        e.bitmap.source = t, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.once("attach", () => this.requestUpdate());
      } catch (t) {
        n(t) || T.getLogger(this).error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e, t) {
    return this.layer.fetchImageBitmapTile(e.level, e.row, e.col, { signal: t });
  }
};
o([m()], a.prototype, "resampling", null), o([m()], a.prototype, "tilemapCache", null), a = o([q("esri.views.2d.layers.TileLayerView2D")], a);
const pe = a;
export {
  pe as default
};
//# sourceMappingURL=TileLayerView2D-C4vcaXZp.js.map
