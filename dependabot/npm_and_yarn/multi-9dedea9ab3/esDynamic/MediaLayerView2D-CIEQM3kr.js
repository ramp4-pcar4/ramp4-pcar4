import { fD as j, S as v, T as g, fE as S, fF as L, fG as O, D, s as I, fH as z, V as Q, bi as $, G as W, H as k, fI as F, M as B, b8 as N, cr as J, O as w, P as A, Q as Y, aP as K, fJ as X } from "./main-DMoCLB29.js";
import { j as Z, m as C } from "./perspectiveUtils-BFsDjW4z.js";
import "./GeometryUtils-Bgy_S_QK.js";
import "./UpdateTracking2D-CC8np78F.js";
import { d as x } from "./enums-BsbtGCGp.js";
import "./definitions-Doe0g1C2.js";
import "./floatRGBA-BB0ujsxn.js";
import { s as ee } from "./Container-enRlWYw9.js";
import "./WGLContainer-ByLg_B16.js";
import { e as te, c as q } from "./Texture-BWGncXEu.js";
import { D as se, E as re, F as G } from "./enums-DDkmfb-t.js";
import { c as M } from "./Program-BMoorjME.js";
import "./LabelMetric-rGwacQ2T.js";
import "./StyleDefinition-Dfu7Kx8O.js";
import "./enums-qHpGJ28Q.js";
import "./MagnifierPrograms--IKHKcv5.js";
import "./FeatureCommandQueue-5WPiOPQD.js";
import "./PieChartMeshWriter-NR0oCu-u.js";
import "./renderState-DjM_esgh.js";
import "./interfaces-Aq8q9x0N.js";
import "./testSVGPremultipliedAlpha-DBjzgAc8.js";
import "./GraphicsView2D-DXwVujfq.js";
import "./earcut-DltwYk40.js";
import "./vec3f32-BS0cezmI.js";
import { e as ie } from "./mat3f64-Dh9_zhFu.js";
import { f as ne } from "./utils-CCCu8yeo.js";
import { o as oe } from "./ProgramTemplate-Drg1DY5K.js";
import { f as ae } from "./OverlayContainer-D0SlPUjh.js";
import { f as le, y as he } from "./LayerView-Cz2aE_qT.js";
const me = [1, 1], ce = 4, c = ie(), de = { none: x.None, loop: x.Loop, oscillate: x.Oscillate };
function ue(t) {
  return t ? { ...t, playAnimation: t.playing, repeatType: t.repeatType ? de[t.repeatType] : void 0 } : {};
}
class pe extends ee {
  constructor(e) {
    super(), this.elementView = e, this.isWrapAround = !1, this.wrapAroundShift = 0, this.perspectiveTransform = j(), this._playHandle = null, this._vertices = new Float32Array(20), this._handles = [], this._handles.push(v(() => this.elementView.element.opacity, (s) => this.opacity = s, g), v(() => [this.elementView.coords], () => {
      this.requestRender();
    }, g), v(() => ["animationOptions" in this.elementView.element && this.elementView.element.animationOptions], () => {
      this._playHandle?.remove(), this.texture = S(this.texture), this.requestRender();
    }, g), L(() => this.elementView.element.loaded, () => {
      const s = this.elementView.element;
      this.ready(), s.type === "video" && s.content != null && this._handles.push(O(s.content, "play", () => this.requestRender()));
    }, g)), e.element.load().catch((s) => {
      D.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new I("element-load-error", "Element cannot be displayed", { element: e, error: s }));
    });
  }
  getMesh(e) {
    throw new Error("Method not implemented.");
  }
  destroy() {
    this._playHandle?.remove(), this._handles.forEach((e) => e.remove()), this.texture = S(this.texture);
  }
  get textureSize() {
    return me;
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e) {
    const { context: s } = e, r = this.elementView.element.content;
    if (r != null) {
      const i = r instanceof HTMLImageElement, o = r instanceof HTMLVideoElement, n = i ? r.naturalWidth : o ? r.videoWidth : r.width, h = i ? r.naturalHeight : o ? r.videoHeight : r.height;
      if (this._updatePerspectiveTransform(n, h), this.texture) o && !r.paused && (this.texture.setData(r), this.requestRender(), this.texture.generateMipmap());
      else {
        const l = new te();
        if (l.wrapMode = se.CLAMP_TO_EDGE, l.preMultiplyAlpha = !0, l.width = n, l.height = h, "getFrame" in r) {
          const p = (m) => {
            this.texture ? this.texture.setData(m) : this.texture = new q(s, l, m), this.requestRender();
          };
          "animationOptions" in this.elementView.element && (this._playHandle = ne(r, ue(this.elementView.element.animationOptions), null, p));
        } else this.texture = new q(s, l, r);
        this.texture.generateMipmap(), o && !r.paused && this.requestRender();
      }
    }
    super.beforeRender(e);
  }
  _createTransforms() {
    return null;
  }
  draw(e) {
    e.drawArrays(re.TRIANGLE_STRIP, 0, ce);
  }
  updateDrawCoords(e, s, r, i) {
    const { coords: o, bounds: n } = this.elementView;
    if (o == null || n == null) return;
    const [h, l, p, m] = o.rings[0], P = this._vertices, { x: f, y } = e;
    P.set([l[0] - f, l[1] - y, h[0] - f, h[1] - y, p[0] - f, p[1] - y, m[0] - f, m[1] - y]);
    let _ = s;
    if (i) {
      const [E, , T] = n, { worldWidth: R, xBounds: U } = i, [V, b] = U;
      E < V && T > V ? _ = R : T > b && E < b && (_ = -R);
    }
    this.wrapAroundShift = _, this.isWrapAround = _ !== 0;
  }
  getVAO(e, s, r) {
    if (this.elementView.coords == null) return null;
    const i = this._vertices;
    if (this._vao) this._geometryVbo.setData(i);
    else {
      this._geometryVbo = M.createVertex(e, G.DYNAMIC_DRAW, i);
      const o = M.createVertex(e, G.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]));
      this._vao = new oe(e, r, s, { geometry: this._geometryVbo, tex: o });
    }
    return this._vao;
  }
  _updatePerspectiveTransform(e, s) {
    const r = this._vertices;
    Z(c, [0, 0, e, 0, 0, s, e, s], [r[0], r[1], r[4], r[5], r[2], r[3], r[6], r[7]]), z(this.perspectiveTransform, c[6] / c[8] * e, c[7] / c[8] * s);
  }
}
let u = class extends le(he) {
  constructor() {
    super(...arguments), this._overlayContainer = null, this._fetchQueue = null, this._tileStrategy = null, this._elementReferences = /* @__PURE__ */ new Map(), this._debugGraphicsView = null, this.layer = null, this.elements = new Q();
  }
  attach() {
    this.addAttachHandles([$(() => this.layer.effectiveSource, "refresh", () => {
      this._tileStrategy.refresh((t) => this._updateTile(t)), this.requestUpdate();
    }), $(() => this.layer.effectiveSource, "change", ({ element: t }) => this._elementUpdateHandler(t))]), this._overlayContainer = new ae(), this.container.addChild(this._overlayContainer), this._fetchQueue = new W({ tileInfoView: this.view.featuresTilingScheme, concurrency: 10, process: (t, e) => this._queryElements(t, e) }), this._tileStrategy = new k({ cachePolicy: "purge", resampling: !0, acquireTile: (t) => this._acquireTile(t), releaseTile: (t) => this._releaseTile(t), tileInfoView: this.view.featuresTilingScheme }), this.requestUpdate();
  }
  detach() {
    this.elements.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.destroy(), this._overlayContainer.removeAllChildren(), this.container.removeAllChildren(), this._elementReferences.clear(), this._debugGraphicsView?.destroy();
  }
  supportsSpatialReference(t) {
    return !0;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  update(t) {
    this._tileStrategy.update(t), this._debugGraphicsView?.update(t);
  }
  async hitTest(t, e) {
    const s = [], r = t.normalize(), i = [r.x, r.y];
    for (const { projectedElement: { normalizedCoords: o, element: n } } of this._elementReferences.values()) o != null && F(o.rings, i) && s.push({ type: "media", element: n, layer: this.layer, mapPoint: t, sourcePoint: n.toSource(t) });
    return s.reverse();
  }
  canResume() {
    return this.layer.source != null && super.canResume();
  }
  async doRefresh() {
    this._fetchQueue.reset(), this._tileStrategy.refresh((t) => this._updateTile(t));
  }
  _acquireTile(t) {
    const e = new fe(t.clone());
    return this._updateTile(e), e;
  }
  _updateTile(t) {
    this._updatingHandles.addPromise(this._fetchQueue.push(t.key).then((e) => {
      const [s, r] = t.setElements(e);
      this._referenceElements(t, s), this._dereferenceElements(t, r), this.requestUpdate();
    }, (e) => {
      B(e) || D.getLogger(this).error(e);
    }));
  }
  _releaseTile(t) {
    this._fetchQueue.abort(t.key.id), t.elements && this._dereferenceElements(t, t.elements), this.requestUpdate();
  }
  async _queryElements(t, e) {
    const s = this.layer.effectiveSource;
    if (s == null) return [];
    this.view.featuresTilingScheme.getTileBounds(a, t, !0);
    const r = new N({ xmin: a[0], ymin: a[1], xmax: a[2], ymax: a[3], spatialReference: this.view.spatialReference });
    return s.queryElements(r, e);
  }
  _referenceElements(t, e) {
    if (this.layer.source != null) for (const s of e) this._referenceElement(t, s);
  }
  _referenceElement(t, e) {
    J(this._elementReferences, e.uid, () => {
      const s = new C({ element: e, spatialReference: this.view.spatialReference }), r = new pe(s);
      return this._overlayContainer.addChild(r), this.elements.add(e), { tiles: /* @__PURE__ */ new Set(), projectedElement: s, overlay: r, debugGraphic: null };
    }).tiles.add(t);
  }
  _dereferenceElements(t, e) {
    for (const s of e) this._dereferenceElement(t, s);
  }
  _dereferenceElement(t, e) {
    const s = this._elementReferences.get(e.uid);
    s.tiles.delete(t), s.tiles.size || (this._overlayContainer.removeChild(s.overlay), s.overlay.destroy(), s.projectedElement.destroy(), this._elementReferences.delete(e.uid), this.elements.remove(e), this._debugGraphicsView?.graphics.remove(s.debugGraphic));
  }
  _elementUpdateHandler(t) {
    let e = this._elementReferences.get(t.uid);
    if (e) {
      const r = e.projectedElement.normalizedCoords;
      if (r == null) return this._overlayContainer.removeChild(e.overlay), e.overlay.destroy(), e.projectedElement.destroy(), this._elementReferences.delete(t.uid), this.elements.remove(t), void this._debugGraphicsView?.graphics.remove(e.debugGraphic);
      const i = [], o = [];
      for (const n of this._tileStrategy.tiles) {
        const h = H(this.view.featuresTilingScheme, n, r);
        e.tiles.has(n) ? h || o.push(n) : h && i.push(n);
      }
      for (const n of i) this._referenceElement(n, t);
      for (const n of o) this._dereferenceElement(n, t);
      return e = this._elementReferences.get(t.uid), void (e?.debugGraphic && (e.debugGraphic.geometry = e.projectedElement.normalizedCoords, this._debugGraphicsView.graphicUpdateHandler({ graphic: e.debugGraphic, property: "geometry" })));
    }
    const s = new C({ element: t, spatialReference: this.view.spatialReference }).normalizedCoords;
    if (s != null) for (const r of this._tileStrategy.tiles)
      H(this.view.featuresTilingScheme, r, s) && this._referenceElement(r, t);
  }
};
w([A()], u.prototype, "layer", void 0), w([A({ readOnly: !0 })], u.prototype, "elements", void 0), u = w([Y("esri.views.2d.layers.MediaLayerView2D")], u);
const a = K(), d = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
function H(t, e, s) {
  return t.getTileBounds(a, e.key, !0), d.xmin = a[0], d.ymin = a[1], d.xmax = a[2], d.ymax = a[3], X(d, s);
}
class fe {
  constructor(e) {
    this.key = e, this.elements = null, this.isReady = !1, this.visible = !0;
  }
  setElements(e) {
    const s = [], r = new Set(this.elements);
    this.elements = e;
    for (const i of e) r.has(i) ? r.delete(i) : s.push(i);
    return this.isReady = !0, [s, Array.from(r)];
  }
  destroy() {
  }
}
const ke = u;
export {
  ke as default
};
//# sourceMappingURL=MediaLayerView2D-CIEQM3kr.js.map
