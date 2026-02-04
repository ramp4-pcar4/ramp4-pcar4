import { E as m, F as w, G as g, J as o, M as f, K as d, C as I, N as p, O as S, P as T } from "./main-DIdq27YS.js";
import { r as V, n as y } from "./imageUtils-UN4eWe9H.js";
import { m as v, u as x } from "./LayerView-uykJUj8Q.js";
import { i as M } from "./RefreshableLayerView-rnEelW_u.js";
const q = /* @__PURE__ */ new Set([102113, 102100, 3857, 3785, 900913]), R = [0, 0];
let a = class extends M(V(v(x))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    const e = this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);
    return e ? (e.id !== this.layer.activeLayer.tileMatrixSetId && (this.layer.activeLayer.tileMatrixSetId = e.id), e) : null;
  }
  update(e) {
    this._fetchQueue.pause(), this._fetchQueue.state = e.state, this._tileStrategy.update(e), this._fetchQueue.resume();
  }
  attach() {
    const e = this.tileMatrixSet?.tileInfo;
    e && (this._tileInfoView = new m(e), this._fetchQueue = new w({ tileInfoView: this._tileInfoView, concurrency: 16, process: (t, i) => this.fetchTile(t, i) }), this._tileStrategy = new g({ cachePolicy: "keep", resampling: !0, acquireTile: (t) => this.acquireTile(t), releaseTile: (t) => this.releaseTile(t), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add(() => [this.layer?.activeLayer?.styleId, this.tileMatrixSet], () => this.doRefresh())), super.attach());
  }
  detach() {
    super.detach(), this._tileStrategy?.destroy(), this._fetchQueue?.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
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
    return this.layer.activeLayer.tileMatrixSets?.some((t) => o(t.tileInfo?.spatialReference, e)) ?? !1;
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e) => this._updatingHandles.addPromise(this._enqueueTileFetch(e)));
    }
  }
  acquireTile(e) {
    const t = this._bitmapView.createTile(e), i = t.bitmap;
    return [i.x, i.y] = this._tileInfoView.getTileCoords(R, t.key), i.resolution = this._tileInfoView.getTileResolution(t.key), [i.width, i.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e) {
    this._fetchQueue.abort(e.key.id), this._bitmapView.removeChild(e), e.once("detach", () => e.destroy()), this.requestUpdate();
  }
  async fetchTile(e, t = {}) {
    const i = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: s, resamplingLevel: h = 0 } = t;
    if (!i) return this._fetchImage(e, s);
    const r = new f(0, 0, 0, 0);
    let n;
    try {
      await i.fetchAvailabilityUpsample(e.level, e.row, e.col, r, { signal: s }), n = await this._fetchImage(r, s);
    } catch (l) {
      if (d(l)) throw l;
      if (h < 3) {
        const c = this._tileInfoView.getTileParentId(e.id);
        if (c) {
          const u = new f(c), _ = await this.fetchTile(u, { ...t, resamplingLevel: h + 1 });
          return y(this._tileInfoView, _, u, e);
        }
      }
      throw l;
    }
    return y(this._tileInfoView, n, r, e);
  }
  canResume() {
    const e = super.canResume();
    return e && this.tileMatrixSet !== null;
  }
  async _enqueueTileFetch(e) {
    if (!this._fetchQueue.has(e.key.id)) {
      try {
        const t = await this._fetchQueue.push(e.key);
        e.bitmap.source = t, e.bitmap.width = this._tileInfoView.tileInfo.size[0], e.bitmap.height = this._tileInfoView.tileInfo.size[1], e.once("attach", () => this.requestUpdate());
      } catch (t) {
        d(t) || I.getLogger(this).error(t);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e, t) {
    return this.layer.fetchImageBitmapTile(e.level, e.row, e.col, { signal: t });
  }
  _getTileMatrixSetBySpatialReference(e) {
    const t = this.view.spatialReference;
    if (!e.tileMatrixSets) return null;
    let i = e.tileMatrixSets.find((s) => o(s.tileInfo?.spatialReference, t));
    return !i && t.isWebMercator && (i = e.tileMatrixSets.find((s) => q.has(s.tileInfo?.spatialReference.wkid ?? -1))), i;
  }
};
p([S({ readOnly: !0 })], a.prototype, "tileMatrixSet", null), a = p([T("esri.views.2d.layers.WMTSLayerView2D")], a);
const k = a;
export {
  k as default
};
//# sourceMappingURL=WMTSLayerView2D-BgRAZHH6.js.map
