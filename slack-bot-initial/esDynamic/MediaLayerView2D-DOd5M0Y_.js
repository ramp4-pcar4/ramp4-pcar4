import { h3 as J, U as q, X as M, h0 as j, T as Z, h4 as ee, C as N, s as te, fu as se, h5 as re, fg as ie, h1 as ne, f9 as ae, fe as oe, fa as le, fb as he, h2 as ce, fc as de, aA as me, h6 as ue, V as pe, b2 as I, F as fe, G as ye, h7 as _e, K as ve, aU as ge, c1 as we, N as A, O as z, P as Re, az as xe, h8 as Me } from "./main-3gzXighg.js";
import { j as $e, m as L } from "./perspectiveUtils-DJu4UH5x.js";
import "./GeometryUtils-CioAWdLo.js";
import "./UpdateTracking2D-ByaqMjYp.js";
import { d as P } from "./enums-CQ3NrvMA.js";
import "./definitions-7ZaZRHRo.js";
import "./floatRGBA-C_oVzFRo.js";
import { i as Ee, E as be } from "./Container-Bg5iscbc.js";
import { n as Ve, h as Te } from "./WGLContainer-CvKMnvfd.js";
import { e as Ce, m as W } from "./Texture-CX14BhWr.js";
import { D as Se, F as Q } from "./enums-Do5C4ZjN.js";
import { h as k } from "./Program-DodZ7ZlS.js";
import "./LabelMetric-D4mTwYEH.js";
import "./StyleDefinition-CKpkeT8Q.js";
import "./enums-qHpGJ28Q.js";
import "./MagnifierPrograms-CgVoNIhP.js";
import "./FeatureCommandQueue-Blyq0sVR.js";
import "./OrderIndependentTransparency-BCDkO_nh.js";
import "./testSVGPremultipliedAlpha-Glbj6fpe.js";
import "./GraphicsView2D-Wd8esVjn.js";
import "./earcut-DY2eXHxJ.js";
import { r as qe } from "./vec3f32-BS0cezmI.js";
import { e as Ae } from "./mat3f64-Dh9_zhFu.js";
import { f as Pe } from "./utils-IkgFB8Mx.js";
import { o as De } from "./ProgramTemplate-D-aJQKJl.js";
import { m as Ge, u as Oe } from "./LayerView-BYfqN0Pb.js";
const y = Ae(), He = { none: P.None, loop: P.Loop, oscillate: P.Oscillate };
function Ue(s) {
  return s ? { ...s, playAnimation: s.playing, repeatType: s.repeatType ? He[s.repeatType] : void 0 } : {};
}
class je extends Ee {
  constructor(e) {
    super(), this.elementView = e, this.isWrapAround = !1, this.perspectiveTransform = J(), this._playHandle = null, this._vertices = new Float32Array(20), this._handles = [], this._handles.push(q(() => this.elementView.element.opacity, (t) => this.opacity = t, M), q(() => [this.elementView.coords], () => {
      this.requestRender();
    }, M), q(() => ["animationOptions" in this.elementView.element && this.elementView.element.animationOptions], () => {
      this._playHandle?.remove(), this.texture = j(this.texture), this.requestRender();
    }, M), Z(() => this.elementView.element.loaded, () => {
      const t = this.elementView.element;
      this.ready(), t.type === "video" && t.content != null && this._handles.push(ee(t.content, "play", () => this.requestRender()));
    }, M)), e.element.load().catch((t) => {
      N.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new te("element-load-error", "Element cannot be displayed", { element: e, error: t }));
    });
  }
  getMesh(e) {
    throw new Error("Method not implemented.");
  }
  destroy() {
    this._playHandle?.remove(), this._handles.forEach((e) => e.remove()), this.texture = j(this.texture);
  }
  get dvsMat3() {
    return this.parent.dvsMat3;
  }
  beforeRender(e) {
    const { context: t } = e, r = this.elementView.element.content;
    if (r != null) {
      const n = r instanceof HTMLImageElement, i = r instanceof HTMLVideoElement, a = n ? r.naturalWidth : i ? r.videoWidth : r.width, h = n ? r.naturalHeight : i ? r.videoHeight : r.height;
      if (this._updatePerspectiveTransform(a, h), this.texture) i && !r.paused && (this.texture.setData(r), this.requestRender(), this.texture.generateMipmap());
      else {
        const c = new Ce();
        if (c.wrapMode = Se.CLAMP_TO_EDGE, c.preMultiplyAlpha = !0, c.width = a, c.height = h, "getFrame" in r) {
          const l = (o) => {
            this.texture ? this.texture.setData(o) : this.texture = new W(t, c, o), this.requestRender();
          };
          "animationOptions" in this.elementView.element && (this._playHandle = Pe(r, Ue(this.elementView.element.animationOptions), null, l));
        } else this.texture = new W(t, c, r);
        this.texture.generateMipmap(), i && !r.paused && this.requestRender();
      }
    }
    super.beforeRender(e);
  }
  _createTransforms() {
    return null;
  }
  updateDrawCoords(e, t) {
    const r = this.elementView.coords;
    if (r == null) return;
    const [n, i, a, h] = r.rings[0], c = this._vertices, { x: l, y: o } = e, u = t !== 0;
    u ? c.set([i[0] - l, i[1] - o, n[0] - l, n[1] - o, a[0] - l, a[1] - o, h[0] - l, h[1] - o, h[0] - l, h[1] - o, i[0] + t - l, i[1] - o, i[0] + t - l, i[1] - o, n[0] + t - l, n[1] - o, a[0] + t - l, a[1] - o, h[0] + t - l, h[1] - o]) : c.set([i[0] - l, i[1] - o, n[0] - l, n[1] - o, a[0] - l, a[1] - o, h[0] - l, h[1] - o]), this.isWrapAround = u;
  }
  getVAO(e, t, r) {
    if (this.elementView.coords == null) return null;
    const n = this._vertices;
    if (this._vao) this._geometryVbo.setData(n);
    else {
      this._geometryVbo = k.createVertex(e, Q.DYNAMIC_DRAW, n);
      const i = k.createVertex(e, Q.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1]));
      this._vao = new De(e, r, t, { geometry: this._geometryVbo, tex: i });
    }
    return this._vao;
  }
  _updatePerspectiveTransform(e, t) {
    const r = this._vertices;
    $e(y, [0, 0, e, 0, 0, t, e, t], [r[0], r[1], r[4], r[5], r[2], r[3], r[6], r[7]]), se(this.perspectiveTransform, y[6] / y[8] * e, y[7] / y[8] * t);
  }
}
class Ie extends Ve {
  constructor() {
    super(...arguments), this._localOrigin = re(0, 0), this._viewStateId = -1, this._dvsMat3 = ie();
  }
  get dvsMat3() {
    return this._dvsMat3;
  }
  beforeRender(e) {
    this._updateMatrices(e), this._updateOverlays(e, this.children);
    for (const t of this.children) t.beforeRender(e);
  }
  prepareRenderPasses(e) {
    const t = e.registerRenderPass({ name: "overlay", brushes: [Te.overlay], target: () => this.children, drawPhase: be.MAP });
    return [...super.prepareRenderPasses(e), t];
  }
  _updateMatrices(e) {
    const { state: t } = e, { id: r, size: n, pixelRatio: i, resolution: a, rotation: h, viewpoint: c, displayMat3: l } = t;
    if (this._viewStateId === r) return;
    const o = Math.PI / 180 * h, u = i * n[0], f = i * n[1], { x: $, y: g } = c.targetGeometry, E = ne($, t.spatialReference);
    this._localOrigin.x = E, this._localOrigin.y = g;
    const b = a * u, w = a * f, d = ae(this._dvsMat3);
    oe(d, d, l), le(d, d, he(u / 2, f / 2)), ce(d, d, qe(u / b, -f / w, 1)), de(d, d, -o), this._viewStateId = r;
  }
  _updateOverlays(e, t) {
    const { state: r } = e, { rotation: n, spatialReference: i, worldScreenWidth: a, size: h, viewpoint: c } = r, l = this._localOrigin;
    let o = 0;
    const u = me(i);
    if (u && i.isWrappable) {
      const f = h[0], $ = h[1], g = 180 / Math.PI * n, E = Math.abs(Math.cos(g)), b = Math.abs(Math.sin(g)), w = Math.round(f * E + $ * b), [d, V] = u.valid, p = ue(i), { x: D, y: B } = c.targetGeometry, K = [D, B], T = [0, 0];
      r.toScreen(T, K);
      const R = [0, 0];
      let C;
      C = w > a ? 0.5 * a : 0.5 * w;
      const G = Math.floor((D + 0.5 * p) / p), X = d + G * p, Y = V + G * p, S = [T[0] + C, 0];
      r.toMap(R, S), R[0] > Y && (o = p), S[0] = T[0] - C, r.toMap(R, S), R[0] < X && (o = -p);
      for (const x of t) {
        const O = x.elementView.bounds;
        if (O == null) continue;
        const [H, , U] = O;
        H < d && U > d ? x.updateDrawCoords(l, p) : U > V && H < V ? x.updateDrawCoords(l, -p) : x.updateDrawCoords(l, o);
      }
    } else for (const f of t) f.updateDrawCoords(l, o);
  }
}
let v = class extends Ge(Oe) {
  constructor() {
    super(...arguments), this._overlayContainer = null, this._fetchQueue = null, this._tileStrategy = null, this._elementReferences = /* @__PURE__ */ new Map(), this._debugGraphicsView = null, this.layer = null, this.elements = new pe();
  }
  attach() {
    this.addAttachHandles([I(() => this.layer.effectiveSource, "refresh", () => {
      this._tileStrategy.refresh((s) => this._updateTile(s)), this.requestUpdate();
    }), I(() => this.layer.effectiveSource, "change", ({ element: s }) => this._elementUpdateHandler(s))]), this._overlayContainer = new Ie(), this.container.addChild(this._overlayContainer), this._fetchQueue = new fe({ tileInfoView: this.view.featuresTilingScheme, concurrency: 10, process: (s, e) => this._queryElements(s, e) }), this._tileStrategy = new ye({ cachePolicy: "purge", resampling: !0, acquireTile: (s) => this._acquireTile(s), releaseTile: (s) => this._releaseTile(s), tileInfoView: this.view.featuresTilingScheme }), this.requestUpdate();
  }
  detach() {
    this.elements.removeAll(), this._tileStrategy.destroy(), this._fetchQueue.destroy(), this._overlayContainer.removeAllChildren(), this.container.removeAllChildren(), this._elementReferences.clear(), this._debugGraphicsView?.destroy();
  }
  supportsSpatialReference(s) {
    return !0;
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
  update(s) {
    this._tileStrategy.update(s), this._debugGraphicsView?.update(s);
  }
  async hitTest(s, e) {
    const t = [], r = s.normalize(), n = [r.x, r.y];
    for (const { projectedElement: { normalizedCoords: i, element: a } } of this._elementReferences.values()) i != null && _e(i.rings, n) && t.push({ type: "media", element: a, layer: this.layer, mapPoint: s, sourcePoint: a.toSource(s) });
    return t.reverse();
  }
  canResume() {
    return this.layer.source != null && super.canResume();
  }
  async doRefresh() {
    this._fetchQueue.reset(), this._tileStrategy.refresh((s) => this._updateTile(s));
  }
  _acquireTile(s) {
    const e = new ze(s.clone());
    return this._updateTile(e), e;
  }
  _updateTile(s) {
    this._updatingHandles.addPromise(this._fetchQueue.push(s.key).then((e) => {
      const [t, r] = s.setElements(e);
      this._referenceElements(s, t), this._dereferenceElements(s, r), this.requestUpdate();
    }, (e) => {
      ve(e) || N.getLogger(this).error(e);
    }));
  }
  _releaseTile(s) {
    this._fetchQueue.abort(s.key.id), s.elements && this._dereferenceElements(s, s.elements), this.requestUpdate();
  }
  async _queryElements(s, e) {
    const t = this.layer.effectiveSource;
    if (t == null) return [];
    this.view.featuresTilingScheme.getTileBounds(m, s, !0);
    const r = new ge({ xmin: m[0], ymin: m[1], xmax: m[2], ymax: m[3], spatialReference: this.view.spatialReference });
    return t.queryElements(r, e);
  }
  _referenceElements(s, e) {
    if (this.layer.source != null) for (const t of e) this._referenceElement(s, t);
  }
  _referenceElement(s, e) {
    we(this._elementReferences, e.uid, () => {
      const t = new L({ element: e, spatialReference: this.view.spatialReference }), r = new je(t);
      return this._overlayContainer.addChild(r), this.elements.add(e), { tiles: /* @__PURE__ */ new Set(), projectedElement: t, overlay: r, debugGraphic: null };
    }).tiles.add(s);
  }
  _dereferenceElements(s, e) {
    for (const t of e) this._dereferenceElement(s, t);
  }
  _dereferenceElement(s, e) {
    const t = this._elementReferences.get(e.uid);
    t.tiles.delete(s), t.tiles.size || (this._overlayContainer.removeChild(t.overlay), t.overlay.destroy(), t.projectedElement.destroy(), this._elementReferences.delete(e.uid), this.elements.remove(e), this._debugGraphicsView?.graphics.remove(t.debugGraphic));
  }
  _elementUpdateHandler(s) {
    let e = this._elementReferences.get(s.uid);
    if (e) {
      const r = e.projectedElement.normalizedCoords;
      if (r == null) return this._overlayContainer.removeChild(e.overlay), e.overlay.destroy(), e.projectedElement.destroy(), this._elementReferences.delete(s.uid), this.elements.remove(s), void this._debugGraphicsView?.graphics.remove(e.debugGraphic);
      const n = [], i = [];
      for (const a of this._tileStrategy.tiles) {
        const h = F(this.view.featuresTilingScheme, a, r);
        e.tiles.has(a) ? h || i.push(a) : h && n.push(a);
      }
      for (const a of n) this._referenceElement(a, s);
      for (const a of i) this._dereferenceElement(a, s);
      return e = this._elementReferences.get(s.uid), void (e?.debugGraphic && (e.debugGraphic.geometry = e.projectedElement.normalizedCoords, this._debugGraphicsView.graphicUpdateHandler({ graphic: e.debugGraphic, property: "geometry" })));
    }
    const t = new L({ element: s, spatialReference: this.view.spatialReference }).normalizedCoords;
    if (t != null) for (const r of this._tileStrategy.tiles)
      F(this.view.featuresTilingScheme, r, t) && this._referenceElement(r, s);
  }
};
A([z()], v.prototype, "layer", void 0), A([z({ readOnly: !0 })], v.prototype, "elements", void 0), v = A([Re("esri.views.2d.layers.MediaLayerView2D")], v);
const m = xe(), _ = { xmin: 0, ymin: 0, xmax: 0, ymax: 0 };
function F(s, e, t) {
  return s.getTileBounds(m, e.key, !0), _.xmin = m[0], _.ymin = m[1], _.xmax = m[2], _.ymax = m[3], Me(_, t);
}
class ze {
  constructor(e) {
    this.key = e, this.elements = null, this.isReady = !1, this.visible = !0;
  }
  setElements(e) {
    const t = [], r = new Set(this.elements);
    this.elements = e;
    for (const n of e) r.has(n) ? r.delete(n) : t.push(n);
    return this.isReady = !0, [t, Array.from(r)];
  }
  destroy() {
  }
}
const pt = v;
export {
  pt as default
};
//# sourceMappingURL=MediaLayerView2D-DOd5M0Y_.js.map
