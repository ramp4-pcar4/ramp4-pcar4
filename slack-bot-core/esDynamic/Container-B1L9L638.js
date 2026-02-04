import { N as g, O as m, P as Y, dU as Z, af as R, C as V, ag as L, kH as j, kI as z, kJ as J, cR as Q, aj as S, ba as tt, eU as et, fg as it } from "./main-CmejC-so.js";
import { l as st, c as C } from "./highlightReasons-DlKV4baq.js";
import { J as nt, s as A, a as w } from "./definitions-7ZaZRHRo.js";
import { D as rt, O as ot, I as M } from "./enums-Do5C4ZjN.js";
import { e as lt, m as ht } from "./Texture-DgcJZ8H_.js";
const E = -1;
let f = class extends Z {
  constructor(t) {
    super(t), this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this.duration = R("mapview-transitions-duration"), this.effects = [];
  }
  set effect(t) {
    if (this._get("effect") !== (t = t || "")) {
      this._set("effect", t);
      try {
        this._transitionTo(H(t));
      } catch (i) {
        this._transitionTo([]), V.getLogger(this).warn("Invalid Effect", { effect: t, error: i });
      }
    }
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(t) {
    this._updateForScale(t);
  }
  get transitioning() {
    return this._to !== null;
  }
  canTransitionTo(t) {
    try {
      return this.scale > 0 && P(this._current, H(t), this.scale);
    } catch {
      return !1;
    }
  }
  transitionStep(t, i) {
    this._applyTimeTransition(t), this._updateForScale(i);
  }
  endTransitions() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(t) {
    this.scale > 0 && P(this._current, t, this.scale) ? (this._final = t, this._to = L(t), at(this._current, this._to, this.scale), this._from = L(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t), this._set("effects", this._current[0] ? L(this._current[0].effects) : []);
  }
  _applyTimeTransition(t) {
    if (!(this._to && this._from && this._current && this._final)) return;
    this._time += t;
    const i = Math.min(1, this._time / this.duration);
    for (let s = 0; s < this._current.length; s++) {
      const n = this._current[s], l = this._from[s], a = this._to[s];
      n.scale = ct(l.scale, a.scale, i);
      for (let o = 0; o < n.effects.length; o++) {
        const r = n.effects[o], c = l.effects[o], u = a.effects[o];
        r.interpolate(c, u, i);
      }
    }
    i === 1 && (this._current = this._final, this._set("effects", this._current[0] ? L(this._current[0].effects) : []), this._from = this._to = this._final = null);
  }
  _updateForScale(t) {
    if (this._set("scale", t), this._current.length === 0) return;
    const i = this._current, s = this._current.length - 1;
    let n, l, a = 1;
    if (i.length === 1 || t >= i[0].scale) l = n = i[0].effects;
    else if (t <= i[s].scale) l = n = i[s].effects;
    else for (let o = 0; o < s; o++) {
      const r = i[o], c = i[o + 1];
      if (r.scale >= t && c.scale <= t) {
        a = (t - r.scale) / (c.scale - r.scale), n = r.effects, l = c.effects;
        break;
      }
    }
    for (let o = 0; o < this.effects.length; o++)
      this.effects[o].interpolate(n[o], l[o], a);
  }
};
function H(e) {
  const t = j(e) || [];
  return dt(t) ? [{ scale: E, effects: t }] : t;
}
function P(e, t, i) {
  return !e[0]?.effects || !t[0]?.effects ? !0 : !((e[0]?.scale === E || t[0]?.scale === E) && (e.length > 1 || t.length > 1) && i <= 0) && z(e[0].effects, t[0].effects);
}
function at(e, t, i) {
  const s = e.length > t.length ? e : t, n = e.length > t.length ? t : e, l = n[n.length - 1], a = l?.scale ?? i, o = l?.effects ?? [];
  for (let r = n.length; r < s.length; r++) n.push({ scale: a, effects: [...o] });
  for (let r = 0; r < s.length; r++) n[r].scale = n[r].scale === E ? i : n[r].scale, s[r].scale = s[r].scale === E ? i : s[r].scale, J(n[r].effects, s[r].effects);
}
function ct(e, t, i) {
  return e + (t - e) * i;
}
function dt(e) {
  const t = e[0];
  return !!t && "type" in t;
}
g([m()], f.prototype, "_to", void 0), g([m()], f.prototype, "duration", void 0), g([m({ value: "" })], f.prototype, "effect", null), g([m({ readOnly: !0 })], f.prototype, "effects", void 0), g([m({ readOnly: !0 })], f.prototype, "hasEffects", null), g([m({ value: 0 })], f.prototype, "scale", null), g([m({ readOnly: !0 })], f.prototype, "transitioning", null), f = g([Y("esri.layers.effects.EffectView")], f);
const G = R("mapview-transitions-duration") === 0 ? 0 : 1 / R("mapview-transitions-duration");
let ut = class extends Q {
  constructor() {
    super(...arguments), this._fadeOutResolver = null, this._fadeInResolver = null, this._clips = null, this.computedVisible = !0, this.computedOpacity = 1, this.fadeTransitionEnabled = !1, this.inFadeTransition = !1, this._isReady = !1, this._opacity = 1, this.parent = null, this._stage = null, this._visible = !0;
  }
  get clips() {
    return this._clips;
  }
  set clips(t) {
    this._clips = t, this.requestRender();
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(t) {
    this._opacity !== t && (this._opacity = Math.min(1, Math.max(t, 0)), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(t) {
    if (this._stage === t) return;
    const i = this._stage;
    this._stage = t, t ? this._stage?.untrashDisplayObject(this) || (this.onAttach(), this.emit("attach")) : i?.trashDisplayObject(this);
  }
  get transforms() {
    return this._getTransforms();
  }
  _getTransforms() {
    return this._transforms == null && (this._transforms = this._createTransforms()), this._transforms;
  }
  get visible() {
    return this._visible;
  }
  set visible(t) {
    this._visible !== t && (this._visible = t, this.requestRender());
  }
  get hasLabels() {
    return !1;
  }
  get hasHighlight() {
    return !1;
  }
  get hasBlending() {
    return !1;
  }
  fadeIn() {
    return this._fadeInResolver || (this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.opacity = 1, this.computedOpacity = 0, this.fadeTransitionEnabled = !0, this._fadeInResolver = S(), this.requestRender()), this._fadeInResolver.promise;
  }
  fadeOut() {
    return this._fadeOutResolver || (this.opacity = 0, this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this.fadeTransitionEnabled = !0, this._fadeOutResolver = S(), this.requestRender()), this._fadeOutResolver.promise;
  }
  endTransitions() {
    this._fadeInResolver?.(), this._fadeInResolver = null, this._fadeOutResolver?.(), this._fadeOutResolver = null, this.computedOpacity = this.visible ? this.opacity : 0, this.requestRender();
  }
  beforeRender(t) {
    this.updateTransitionProperties(t.deltaTime, t.state.scale), this.setTransform(t.state);
  }
  afterRender(t) {
    this._fadeInResolver && this.computedOpacity === this.opacity ? (this._fadeInResolver(), this._fadeInResolver = null) : this._fadeOutResolver && this.computedOpacity === 0 && (this._fadeOutResolver(), this._fadeOutResolver = null);
  }
  remove() {
    this.parent?.removeChild(this);
  }
  setTransform(t) {
  }
  processRender(t) {
    this.stage && this.computedVisible && this.doRender(t);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this._fadeInResolver && (this._fadeInResolver(), this._fadeInResolver = null), this._fadeOutResolver && (this._fadeOutResolver(), this._fadeOutResolver = null), this.onDetach(), this.emit("detach");
  }
  updateTransitionProperties(t, i) {
    if (this.fadeTransitionEnabled && G !== 0) {
      const s = this._fadeOutResolver || !this.visible ? 0 : this.opacity, n = this.computedOpacity;
      if (n === s) this.computedVisible = this.visible;
      else {
        const l = t * G;
        this.computedOpacity = n > s ? Math.max(s, n - l) : Math.min(s, n + l), this.computedVisible = this.computedOpacity > 0;
        const a = s === this.computedOpacity;
        this.inFadeTransition = !a, a || this.requestRender();
      }
    } else this.computedOpacity = this.opacity, this.computedVisible = this.visible;
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(t) {
  }
  ready() {
    this._isReady || (this._isReady = !0, this.emit("isReady"), this.requestRender());
  }
};
const ft = 1, wt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1], Ht = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], O = 256, _ = { outlineWidth: 1.3, outerHaloWidth: 0.4, innerHaloWidth: 0.4, outlinePosition: 0 }, T = () => V.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");
function pt(e, t) {
  t.fillColor[0] = e.color.r / 255, t.fillColor[1] = e.color.g / 255, t.fillColor[2] = e.color.b / 255, t.fillColor[3] = e.color.a, e.haloColor ? (t.outlineColor[0] = e.haloColor.r / 255, t.outlineColor[1] = e.haloColor.g / 255, t.outlineColor[2] = e.haloColor.b / 255, t.outlineColor[3] = e.haloColor.a) : (t.outlineColor[0] = t.fillColor[0], t.outlineColor[1] = t.fillColor[1], t.outlineColor[2] = t.fillColor[2], t.outlineColor[3] = t.fillColor[3]), t.fillColor[3] *= e.fillOpacity, t.outlineColor[3] *= e.haloOpacity, t.fillColor[0] *= t.fillColor[3], t.fillColor[1] *= t.fillColor[3], t.fillColor[2] *= t.fillColor[3], t.outlineColor[0] *= t.outlineColor[3], t.outlineColor[1] *= t.outlineColor[3], t.outlineColor[2] *= t.outlineColor[3], t.outlineWidth = _.outlineWidth, t.outerHaloWidth = _.outerHaloWidth, t.innerHaloWidth = _.innerHaloWidth, t.outlinePosition = _.outlinePosition;
}
const gt = [0, 0, 0, 0];
class B {
  constructor() {
    this.type = "single", this._convertedHighlightOptions = { fillColor: [0.2 * 0.75, 0.6 * 0.75, 0.675, 0.75], outlineColor: [0.2 * 0.9, 0.54, 0.81, 0.9], outlinePosition: _.outlinePosition, outlineWidth: _.outlineWidth, innerHaloWidth: _.innerHaloWidth, outerHaloWidth: _.outerHaloWidth }, this._shadeTexChanged = !0, this._texelData = new Uint8Array(4 * O), this._minMaxDistance = [0, 0];
  }
  setHighlightOptions(t) {
    const i = this._convertedHighlightOptions;
    pt(t, i);
    const s = i.outlinePosition - i.outlineWidth / 2 - i.outerHaloWidth, n = i.outlinePosition - i.outlineWidth / 2, l = i.outlinePosition + i.outlineWidth / 2, a = i.outlinePosition + i.outlineWidth / 2 + i.innerHaloWidth, o = Math.sqrt(Math.PI / 2) * ft, r = Math.abs(s) > o ? Math.round(10 * (Math.abs(s) - o)) / 10 : 0, c = Math.abs(a) > o ? Math.round(10 * (Math.abs(a) - o)) / 10 : 0;
    let u;
    r && !c ? T().error("The outer rim of the highlight is " + r + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards).") : !r && c ? T().error("The inner rim of the highlight is " + c + "px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards).") : r && c && T().error("The highlight is " + Math.max(r, c) + "px away from the edge of the feature; consider reducing some width values.");
    const h = [void 0, void 0, void 0, void 0];
    function y(d, I, p) {
      h[0] = (1 - p) * d[0] + p * I[0], h[1] = (1 - p) * d[1] + p * I[1], h[2] = (1 - p) * d[2] + p * I[2], h[3] = (1 - p) * d[3] + p * I[3];
    }
    const { _texelData: v } = this;
    for (let d = 0; d < O; ++d) u = s + d / (O - 1) * (a - s), u < s ? (h[0] = 0, h[1] = 0, h[2] = 0, h[3] = 0) : u < n ? y(gt, i.outlineColor, (u - s) / (n - s)) : u < l ? [h[0], h[1], h[2], h[3]] = i.outlineColor : u < a ? y(i.outlineColor, i.fillColor, (u - l) / (a - l)) : [h[0], h[1], h[2], h[3]] = i.fillColor, v[4 * d] = 255 * h[0], v[4 * d + 1] = 255 * h[1], v[4 * d + 2] = 255 * h[2], v[4 * d + 3] = 255 * h[3];
    this._minMaxDistance[0] = s, this._minMaxDistance[1] = a, this._shadeTexChanged = !0;
  }
  applyHighlightOptions(t, i) {
    if (!this._shadeTex) {
      const s = new lt();
      s.wrapMode = rt.CLAMP_TO_EDGE, s.width = O, s.height = 1, this._shadeTex = new ht(t, s);
    }
    this._shadeTexChanged && (this._shadeTex.updateData(0, 0, 0, O, 1, this._texelData), this._shadeTexChanged = !1), t.bindTexture(this._shadeTex, nt), i.setUniform2fv("u_minMaxDistance", this._minMaxDistance);
  }
  destroy() {
    this._shadeTex?.dispose(), this._shadeTex = null;
  }
  getReasonsWithGradients() {
    return [{ activeReasons: (1 << st.length) - 1, activeGradient: this }];
  }
}
class _t {
  constructor() {
    this.type = "multi";
    const t = {};
    for (const i in C) t[i] = new B();
    this.gradients = t;
  }
  setHighlightOptions(t) {
    for (const i in C) {
      const s = C[i](t);
      this.gradients[i].setHighlightOptions(s);
    }
  }
  applyHighlightOptions(t, i, s) {
    this.gradients[s].applyHighlightOptions(t, i);
  }
  destroy() {
    for (const t in C) this.gradients[t].destroy();
  }
  getReasonsWithGradients() {
    let t = 1;
    const i = [];
    for (const s in this.gradients) {
      const n = this.gradients[s];
      i.push({ activeReasons: t, activeGradient: n }), t <<= 1;
    }
    return i;
  }
}
var x, D, $, N, F, U, b, W, q;
(function(e) {
  e[e.FILL = 0] = "FILL", e[e.LINE = 1] = "LINE", e[e.MARKER = 2] = "MARKER", e[e.TEXT = 3] = "TEXT", e[e.LABEL = 4] = "LABEL";
})(x || (x = {})), function(e) {
  e[e.NONE = 0] = "NONE", e[e.MAP = 1] = "MAP", e[e.LABEL = 2] = "LABEL", e[e.LABEL_ALPHA = 4] = "LABEL_ALPHA", e[e.HITTEST = 8] = "HITTEST", e[e.HIGHLIGHT = 16] = "HIGHLIGHT", e[e.CLIP = 32] = "CLIP", e[e.DEBUG = 64] = "DEBUG", e[e.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
}(D || (D = {})), function(e) {
  e[e.SIZE = 0] = "SIZE", e[e.COLOR = 1] = "COLOR", e[e.OPACITY = 2] = "OPACITY", e[e.ROTATION = 3] = "ROTATION";
}($ || ($ = {})), function(e) {
  e[e.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", e[e.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", e[e.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", e[e.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
}(N || (N = {})), function(e) {
  e[e.SPRITE = 0] = "SPRITE", e[e.GLYPH = 1] = "GLYPH";
}(F || (F = {})), function(e) {
  e[e.DEFAULT = 0] = "DEFAULT", e[e.SIMPLE = 1] = "SIMPLE", e[e.DOT_DENSITY = 2] = "DOT_DENSITY", e[e.OUTLINE_FILL = 3] = "OUTLINE_FILL", e[e.OUTLINE_FILL_SIMPLE = 4] = "OUTLINE_FILL_SIMPLE", e[e.HEATMAP = 5] = "HEATMAP", e[e.PIE_CHART = 6] = "PIE_CHART";
}(U || (U = {})), function(e) {
  e[e.All = 0] = "All", e[e.Highlight = 1] = "Highlight", e[e.InsideEffect = 2] = "InsideEffect", e[e.OutsideEffect = 3] = "OutsideEffect";
}(b || (b = {})), function(e) {
  e[e.BATCHING = 0] = "BATCHING", e[e.STRICT_ORDER = 1] = "STRICT_ORDER", e[e.STRICT_MARKERS_AND_TEXT = 2] = "STRICT_MARKERS_AND_TEXT";
}(W || (W = {})), function(e) {
  e[e.FILL = 0] = "FILL", e[e.LINE = 1] = "LINE", e[e.MARKER = 2] = "MARKER", e[e.TEXT = 3] = "TEXT";
}(q || (q = {}));
const k = { color: { write: [!0, !0, !0, !0], blendMode: "composite" }, depth: !1, stencil: { write: !1, test: { ref: (e) => e.stencilRef, compare: ot.EQUAL, mask: 255, op: { fail: M.KEEP, zFail: M.KEEP, zPass: M.REPLACE } } } }, mt = { color: { write: [!0, !0, !0, !0], blendMode: "additive" }, depth: !1, stencil: !1 }, Rt = { ...k, color: { write: [!0, !0, !0, !0], blendMode: "delete" } };
function yt({ pixelRatio: e, state: t, displayLevel: i, requiredLevel: s }, n) {
  const l = 1 / 2 ** (i - n.key.level), a = 1 / 2 ** (s - n.key.level);
  return { displayMat3: Array.from(t.displayMat3), displayViewMat3: Array.from(t.displayViewMat3), displayViewScreenMat3: Array.from(n.transforms.displayViewScreenMat3), viewMat3: Array.from(t.viewMat3), tileMat3: Array.from(n.transforms.tileMat3), displayZoomFactor: l, requiredZoomFactor: a, tileOffset: [n.x, n.y], currentScale: t.scale, currentZoom: i, metersPerSRUnit: tt(t.spatialReference), rotation: t.rotation, pixelRatio: e };
}
function K(e) {
  return e.passOptions?.type === "highlight";
}
function X(e) {
  return e.passOptions?.type === "hittest";
}
function Ot(e) {
  if (!X(e)) return null;
  const { position: t } = e.passOptions, i = e.pixelRatio, s = R("esri-mobile");
  return { position: t, distance: R(s ? "hittest-2d-mobile-tolerance" : "hittest-2d-desktop-tolerance") * i, smallSymbolDistance: R(s ? "hittest-2d-mobile-tolerance" : "hittest-2d-small-symbol-tolerance") * i, smallSymbolSizeThreshold: R("hittest-2d-small-symbol-tolerance-threshold") };
}
function Et(e) {
  if (!K(e)) return null;
  const { activeReasons: t, highlightAll: i } = e.passOptions;
  return { activeReasons: t, highlightAll: i ? 1 : 0 };
}
function Pt(e, t, i) {
  const s = {};
  for (const n in i) i[n] instanceof Function ? s[n] = i[n](e, t) : s[n] = i[n];
  return s;
}
function Gt(e, t) {
  const { attributeView: i, context: s } = e;
  return { storage: i.getUniforms(s), view: yt(e, t), hittestRequest: Ot(e), highlight: Et(e) };
}
function xt(e) {
  return { inside: e.selection === b.InsideEffect, outside: e.selection === b.OutsideEffect };
}
function vt(e) {
  return X(e) ? mt : K(e) && e.passOptions.stepType === "clear" ? Rt : k;
}
function Dt(e) {
  const { row: t, col: i } = e.key, s = i * w, n = t * w;
  return { tileOffsetFromLocalOrigin: [s % A, n % A], maxIntsToLocalOrigin: [Math.floor(s / A), Math.floor(n / A)] };
}
new et({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryMultiPatch: "multipatch", mesh: "mesh" });
function $t(e) {
  const { bandCount: t, attributeTable: i, colormap: s, pixelType: n } = e.raster.rasterInfo;
  return t === 1 && (i != null || s != null || n === "u8" || n === "s8");
}
function It(e, t) {
  return e?.type === "single" && t.multiHighlightEnabled && (e.destroy(), e = null), e?.type !== "multi" || t.multiHighlightEnabled || (e.destroy(), e = null), e || (e = t.multiHighlightEnabled ? new _t() : new B()), e.setHighlightOptions(t), e;
}
function Nt(e, t, i) {
  const { painter: s, highlightGradient: n } = e, { highlight: l } = s.effects;
  if (!n) return;
  const a = e.passOptions, o = n.getReasonsWithGradients();
  for (let r = 0; r < o.length; r++) {
    const c = { ...e, passOptions: { type: "highlight", activeGradient: o[r].activeGradient, activeReasons: o[r].activeReasons, stepType: "burn", highlightAll: t } };
    if (l.bind(c), i(c), r < o.length - 1) {
      let h = 0;
      for (let y = r + 1; y < o.length; y++) h |= o[y].activeReasons;
      i({ ...e, passOptions: { type: "highlight", activeGradient: o[r].activeGradient, activeReasons: h, stepType: "clear", highlightAll: t } });
    }
    const u = { ...e, passOptions: { type: "highlight", activeGradient: o[r].activeGradient, activeReasons: o[r].activeReasons, stepType: "draw", highlightAll: t } };
    s.setPipelineState(vt(e)), s.updatePipelineState(e.context), l.draw(u), l.unbind();
  }
  e.passOptions = a;
}
class Ft extends ut {
  constructor() {
    super(...arguments), this._childrenSet = /* @__PURE__ */ new Set(), this._needsSort = !1, this._children = [], this._effectView = null, this._highlightOptions = null, this._highlightGradient = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(t) {
    this._blendMode = t, this.requestRender();
  }
  get children() {
    return this._children;
  }
  get clips() {
    return this._clips;
  }
  set clips(t) {
    this._clips = t, this.children.forEach((i) => i.clips = t);
  }
  get computedEffects() {
    return this._effectView?.effects ?? null;
  }
  get effect() {
    return this._effectView?.effect ?? "";
  }
  set effect(t) {
    (this._effectView || t) && (this._effectView || (this._effectView = new f()), this._effectView.effect = t, this.requestRender());
  }
  get highlightOptions() {
    return this._highlightOptions;
  }
  set highlightOptions(t) {
    if (!t) return this._highlightOptions = null, void (this._highlightGradient && (this._highlightGradient.destroy(), this._highlightGradient = null, this.requestRender()));
    this._highlightOptions && this._highlightOptions.equals(t) || (this._highlightOptions = t, this._highlightGradient = It(this._highlightGradient, t), this.requestRender());
  }
  get hasBlending() {
    return !!this.blendMode;
  }
  get hasHighlight() {
    return this.children.some((t) => t.hasHighlight);
  }
  get hasLabels() {
    return this.children.some((t) => t.hasLabels);
  }
  get requiresDedicatedFBO() {
    return this.children.some((t) => "blendMode" in t && t.blendMode && t.blendMode !== "normal");
  }
  updateTransitionProperties(t, i) {
    super.updateTransitionProperties(t, i), this._effectView && (this._effectView.transitionStep(t, i), this._effectView.transitioning && this.requestRender());
  }
  doRender(t) {
    const i = this.createRenderParams(t), { painter: s } = i;
    s.beforeRenderLayer(i, this._clips?.length ? 255 : 0, this.computedOpacity), this.renderChildren(i), s.afterRenderLayer(i, this.computedOpacity);
  }
  addChild(t) {
    return this.addChildAt(t, this.children.length);
  }
  addChildAt(t, i = this.children.length) {
    if (!t || this.contains(t)) return t;
    this._needsSort = !0;
    const s = t.parent;
    return s && s !== this && s.removeChild(t), i >= this.children.length ? this.children.push(t) : this.children.splice(i, 0, t), this._childrenSet.add(t), t.parent = this, t.stage = this.stage, this !== this.stage && (t.clips = this.clips), this.requestRender(), t;
  }
  contains(t) {
    return this._childrenSet.has(t);
  }
  endTransitions() {
    super.endTransitions(), this._effectView && (this._effectView.endTransitions(), this.requestRender());
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = !0;
    for (const t of this.children) this !== this.stage && (t.clips = null), t.stage = null, t.parent = null;
    this.children.length = 0;
  }
  removeChild(t) {
    return this.contains(t) ? this.removeChildAt(this.children.indexOf(t)) : t;
  }
  removeChildAt(t) {
    if (t < 0 || t >= this.children.length) return null;
    this._needsSort = !0;
    const i = this.children.splice(t, 1)[0];
    return this._childrenSet.delete(i), this !== this.stage && (i.clips = null), i.stage = null, i.parent = null, i;
  }
  sortChildren(t) {
    this._needsSort && (this.children.sort(t), this._needsSort = !1);
  }
  beforeRender(t) {
    super.beforeRender(t);
    for (const i of this.children) i.beforeRender(t);
  }
  afterRender(t) {
    super.afterRender(t);
    for (const i of this.children) i.afterRender(t);
  }
  _createTransforms() {
    return { displayViewScreenMat3: it() };
  }
  onAttach() {
    super.onAttach();
    const t = this.stage;
    for (const i of this.children) i.stage = t;
  }
  onDetach() {
    super.onDetach();
    for (const t of this.children) t.stage = null;
  }
  renderChildren(t) {
    for (const i of this.children) i.processRender(t);
  }
  createRenderParams(t) {
    return { ...t, requireFBO: this.requiresDedicatedFBO, blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: t.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition, highlightGradient: this._highlightGradient || t.highlightGradient };
  }
}
export {
  F as A,
  D as E,
  $ as L,
  vt as M,
  W as N,
  b as R,
  q as S,
  Nt as a,
  f as b,
  Gt as c,
  yt as d,
  Pt as e,
  K as f,
  Ht as g,
  Ft as h,
  ut as i,
  X as m,
  ft as o,
  $t as r,
  wt as t,
  Dt as w,
  xt as y
};
//# sourceMappingURL=Container-B1L9L638.js.map
