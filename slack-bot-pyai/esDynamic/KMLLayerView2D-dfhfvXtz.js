import { fj as G, b9 as k, a6 as U, a2 as z, D as I, V as O, U as N, fk as F, b5 as S, aU as T, b8 as W, bh as $, fl as H, fm as A, bX as K, fn as J, N as v, O as C, P as X } from "./main-DhLeoxL5.js";
import { b as P, g as Y, d as Q } from "./kmlUtils-xyfQ-4Iv.js";
import { g as Z, f as tt, b as et } from "./Bitmap-BsvpzpNH.js";
import { a as it } from "./BitmapContainer-K3tfa2bJ.js";
import { m as at, u as st } from "./LayerView-BUXYmvJm.js";
import { t as M } from "./GraphicContainer-Dh_MohSK.js";
import { $ as R } from "./GraphicsView2D-UEmmkVkC.js";
import { C as rt, e as nt } from "./rasterProjectionHelper-DRYmQmjM.js";
import { a as ot } from "./WGLContainer-Cnz7j1HY.js";
import { w as lt, o as ht } from "./RenderingContext-BhVZgLoM.js";
import { D as E, G as pt, U as mt, X as L } from "./enums-Do5C4ZjN.js";
import { x as ct } from "./Program-Bz_GT0wk.js";
import { c as dt } from "./rasterUtils-BQWfInJ0.js";
import { e as j, m as ut } from "./Texture-DX36kIdt.js";
class p {
  constructor(t) {
    if (this._ownsRctx = !1, t) this._ownsRctx = !1, this._rctx = t;
    else {
      if (p._instance) return p._instanceRefCount++, p._instance;
      p._instanceRefCount = 1, p._instance = this, this._ownsRctx = !0;
      const i = document.createElement("canvas"), s = G(i);
      s.getExtension("OES_texture_float"), this._rctx = new lt(s, {});
    }
    const a = { applyProjection: !0, bilinear: !1, bicubic: !1 }, r = ht("raster/reproject", "raster/reproject", /* @__PURE__ */ new Map([["a_position", 0]]), a);
    this._program = this._rctx.programCache.acquire(r.shaders.vertexShader, r.shaders.fragmentShader, r.attributes), this._rctx.useProgram(this._program), this._program.setUniform1f("u_opacity", 1), this._program.setUniform1i("u_image", 0), this._program.setUniform1i("u_flipY", 0), this._program.setUniform1i("u_transformGrid", 1), this._quad = new ot(this._rctx, [0, 0, 1, 0, 0, 1, 1, 1]);
  }
  reprojectTexture(t, a, r = !1) {
    const i = k(t.extent, a), s = new U({ x: (t.extent.xmax - t.extent.xmin) / t.texture.descriptor.width, y: (t.extent.ymax - t.extent.ymin) / t.texture.descriptor.height, spatialReference: t.extent.spatialReference }), { x: l, y: h } = rt(s, a, t.extent);
    let n = (l + h) / 2;
    const o = Math.round((i.xmax - i.xmin) / n), u = Math.round((i.ymax - i.ymin) / n);
    n = (i.width / o + i.height / u) / 2;
    const D = new U({ x: n, y: n, spatialReference: i.spatialReference }), g = nt({ projectedExtent: i, srcBufferExtent: t.extent, pixelSize: D, hasWrapAround: !0, spacing: [16, 16] }), w = dt(this._rctx, g), y = new j(o, u);
    y.wrapMode = E.CLAMP_TO_EDGE;
    const m = new ct(this._rctx, y);
    this._rctx.bindFramebuffer(m), this._rctx.setViewport(0, 0, o, u), this._rctx.useProgram(this._program), this._rctx.bindTexture(t.texture, 0), this._rctx.bindTexture(w, 1), this._quad.bind();
    const { width: f = 0, height: x = 0 } = t.texture.descriptor;
    if (this._program.setUniform2f("u_srcImageSize", f, x), this._program.setUniform2fv("u_transformSpacing", g.spacing), this._program.setUniform2fv("u_transformGridSize", g.size), this._program.setUniform2f("u_targetImageSize", o, u), this._quad.draw(), this._quad.unbind(), this._rctx.useProgram(null), this._rctx.bindFramebuffer(null), w.dispose(), r) {
      const { width: c, height: V } = m, _ = new ImageData(c ?? 0, V ?? 0);
      m.readPixels(0, 0, c ?? 0, V ?? 0, pt.RGBA, mt.UNSIGNED_BYTE, _.data);
      const B = m.detachColorTexture(L.COLOR_ATTACHMENT0);
      return m.dispose(), { texture: B, extent: i, imageData: _ };
    }
    const b = m.detachColorTexture(L.COLOR_ATTACHMENT0);
    return m.dispose(), { texture: b, extent: i };
  }
  reprojectBitmapData(t, a) {
    const r = Z(t.bitmapData) ? tt(t.bitmapData) : t.bitmapData, i = new j();
    i.wrapMode = E.CLAMP_TO_EDGE, i.width = t.bitmapData.width, i.height = t.bitmapData.height;
    const s = new ut(this._rctx, i, r), l = this.reprojectTexture({ texture: s, extent: t.extent }, a, !0);
    l.texture.dispose();
    const h = document.createElement("canvas"), n = l.imageData;
    return h.width = n.width, h.height = n.height, h.getContext("2d").putImageData(n, 0, 0), { bitmapData: h, extent: l.extent };
  }
  async loadAndReprojectBitmapData(t, a, r) {
    const i = (await z(t, { responseType: "image" })).data, s = document.createElement("canvas");
    s.width = i.width, s.height = i.height;
    const l = s.getContext("2d");
    l.drawImage(i, 0, 0);
    const h = l.getImageData(0, 0, s.width, s.height);
    if (a.spatialReference.equals(r)) return { bitmapData: h, extent: a };
    const n = this.reprojectBitmapData({ bitmapData: h, extent: a }, r);
    return { bitmapData: n.bitmapData, extent: n.extent };
  }
  destroy() {
    this._ownsRctx ? (p._instanceRefCount--, p._instanceRefCount === 0 && (this._quad.dispose(), this._program.dispose(), this._rctx.dispose(), p._instance = null)) : (this._quad.dispose(), this._program.dispose());
  }
}
p._instanceRefCount = 0;
class q {
  constructor() {
    this.allSublayers = /* @__PURE__ */ new Map(), this.allPoints = [], this.allPolylines = [], this.allPolygons = [], this.allMapImages = [];
  }
}
let d = class extends at(st) {
  constructor() {
    super(...arguments), this._bitmapIndex = /* @__PURE__ */ new Map(), this._mapImageContainer = new it(), this._kmlVisualData = new q(), this._fetchController = null, this.allVisiblePoints = new I(), this.allVisiblePolylines = new I(), this.allVisiblePolygons = new I(), this.allVisibleMapImages = new O();
  }
  async hitTest(e, t) {
    const a = this.layer;
    return [this._pointsView?.hitTest(e), this._polylinesView?.hitTest(e), this._polygonsView?.hitTest(e)].flat().filter(Boolean).map((r) => (r.layer = a, r.sourceLayer = a, { type: "graphic", graphic: r, layer: a, mapPoint: e }));
  }
  update(e) {
    this._polygonsView && this._polygonsView.processUpdate(e), this._polylinesView && this._polylinesView.processUpdate(e), this._pointsView && this._pointsView.processUpdate(e);
  }
  attach() {
    this._fetchController = new AbortController(), this.container.addChild(this._mapImageContainer), this._polygonsView = new R({ view: this.view, graphics: this.allVisiblePolygons, requestUpdateCallback: () => this.requestUpdate(), container: new M(this.view.featuresTilingScheme) }), this.container.addChild(this._polygonsView.container), this._polylinesView = new R({ view: this.view, graphics: this.allVisiblePolylines, requestUpdateCallback: () => this.requestUpdate(), container: new M(this.view.featuresTilingScheme) }), this.container.addChild(this._polylinesView.container), this._pointsView = new R({ view: this.view, graphics: this.allVisiblePoints, requestUpdateCallback: () => this.requestUpdate(), container: new M(this.view.featuresTilingScheme) }), this.container.addChild(this._pointsView.container), this.addAttachHandles([this.allVisibleMapImages.on("change", (e) => {
      e.added.forEach((t) => this._addMapImage(t)), e.removed.forEach((t) => this._removeMapImage(t));
    }), N(() => this.layer.visibleSublayers, (e) => {
      for (const [t, a] of this._kmlVisualData.allSublayers) a.visibility = 0;
      for (const t of e) {
        const a = this._kmlVisualData.allSublayers.get(t.id);
        a && (a.visibility = 1);
      }
      this._refreshCollections();
    })]), this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)), this._imageReprojector = new p();
  }
  detach() {
    this._fetchController = F(this._fetchController), this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView = S(this._polygonsView), this._polylinesView = S(this._polylinesView), this._pointsView = S(this._pointsView), this._imageReprojector = S(this._imageReprojector);
  }
  moveStart() {
  }
  viewChange() {
    this._polygonsView.viewChange(), this._polylinesView.viewChange(), this._pointsView.viewChange();
  }
  moveEnd() {
  }
  isUpdating() {
    return this._pointsView.updating || this._polygonsView.updating || this._polylinesView.updating;
  }
  _addMapImage(e) {
    (this.view.spatialReference?.isWGS84 || this.view.spatialReference?.isWebMercator) && this._imageReprojector.loadAndReprojectBitmapData(e.href, T.fromJSON(e.extent), this.view.spatialReference).then((t) => {
      const a = new et(t.bitmapData);
      a.x = t.extent.xmin, a.y = t.extent.ymax, a.resolution = t.extent.width / t.bitmapData.width, a.rotation = e.rotation, this._mapImageContainer.addChild(a), this._bitmapIndex.set(e, a);
    });
  }
  async _getViewDependentUrl(e, t) {
    const { viewFormat: a, viewBoundScale: r, httpQuery: i } = e;
    if (a != null) {
      if (t == null) throw new Error("Loading this network link requires a view state.");
      let s;
      if (await W(), r != null && r !== 1) {
        const c = new T(t.extent);
        c.expand(r), s = c;
      } else s = t.extent;
      s = k(s, $.WGS84);
      const l = k(s, $.WebMercator), h = s.xmin, n = s.xmax, o = s.ymin, u = s.ymax, D = t.size[0] * t.pixelRatio, g = t.size[1] * t.pixelRatio, w = Math.max(l.width, l.height), y = { "[bboxWest]": h.toString(), "[bboxEast]": n.toString(), "[bboxSouth]": o.toString(), "[bboxNorth]": u.toString(), "[lookatLon]": s.center.x.toString(), "[lookatLat]": s.center.y.toString(), "[lookatRange]": w.toString(), "[lookatTilt]": "0", "[lookatHeading]": t.rotation.toString(), "[lookatTerrainLon]": s.center.x.toString(), "[lookatTerrainLat]": s.center.y.toString(), "[lookatTerrainAlt]": "0", "[cameraLon]": s.center.x.toString(), "[cameraLat]": s.center.y.toString(), "[cameraAlt]": w.toString(), "[horizFov]": "60", "[vertFov]": "60", "[horizPixels]": D.toString(), "[vertPixels]": g.toString(), "[terrainEnabled]": "0", "[clientVersion]": H, "[kmlVersion]": "2.2", "[clientName]": "ArcGIS API for JavaScript", "[language]": "en-US" }, m = (c) => {
        for (const V in c) {
          let _;
          for (_ in y) c[V] = c[V].replace(_, y[_]);
        }
      }, f = A(a);
      m(f);
      let x = {};
      i != null && (x = A(i), m(x));
      const b = K(e.href);
      return b.query = { ...b.query, ...f, ...x }, `${b.path}?${J(f)}`;
    }
    return e.href;
  }
  async _fetchService(e) {
    const t = new q();
    await this._loadVisualData(this.layer.url, t, e), this._kmlVisualData = t, this._refreshCollections();
  }
  _refreshCollections() {
    this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter((e) => this._isSublayerVisible(e.sublayerId)).map(({ item: e }) => e)), this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter((e) => this._isSublayerVisible(e.sublayerId)).map(({ item: e }) => e)), this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter((e) => this._isSublayerVisible(e.sublayerId)).map(({ item: e }) => e)), this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter((e) => this._isSublayerVisible(e.sublayerId)).map(({ item: e }) => e));
  }
  _isSublayerVisible(e) {
    const t = this._kmlVisualData.allSublayers.get(e);
    return !!t?.visibility && (t.parentFolderId === -1 || this._isSublayerVisible(t.parentFolderId));
  }
  _loadVisualData(e, t, a) {
    return this._fetchParsedKML(e, a).then(async (r) => {
      for (const i of r.sublayers) {
        t.allSublayers.set(i.id, i);
        const s = i.points ? await P(i.points) : [], l = i.polylines ? await P(i.polylines) : [], h = i.polygons ? await P(i.polygons) : [], n = i.mapImages || [];
        if (t.allPoints.push(...s.map((o) => ({ item: o, sublayerId: i.id }))), t.allPolylines.push(...l.map((o) => ({ item: o, sublayerId: i.id }))), t.allPolygons.push(...h.map((o) => ({ item: o, sublayerId: i.id }))), t.allMapImages.push(...n.map((o) => ({ item: o, sublayerId: i.id }))), i.networkLink) {
          const o = await this._getViewDependentUrl(i.networkLink, this.view.state);
          await this._loadVisualData(o, t, a);
        }
      }
    });
  }
  _fetchParsedKML(e, t) {
    return Y(e, this.layer.spatialReference, this.layer.refreshInterval, t).then((a) => Q(a.data));
  }
  _removeMapImage(e) {
    const t = this._bitmapIndex.get(e);
    t && (this._mapImageContainer.removeChild(t), this._bitmapIndex.delete(e));
  }
};
v([C()], d.prototype, "_pointsView", void 0), v([C()], d.prototype, "_polylinesView", void 0), v([C()], d.prototype, "_polygonsView", void 0), v([C()], d.prototype, "updating", void 0), d = v([X("esri.views.2d.layers.KMLLayerView2D")], d);
const Mt = d;
export {
  Mt as default
};
//# sourceMappingURL=KMLLayerView2D-dfhfvXtz.js.map
