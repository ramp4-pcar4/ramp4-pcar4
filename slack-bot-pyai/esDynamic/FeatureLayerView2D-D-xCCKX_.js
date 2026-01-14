import { N as h, O as f, P as G, ap as _e, dU as Qe, af as g, d$ as rt, Y as we, bh as st, kK as at, M as Ve, az as nt, s as z, C as N, jQ as lt, a8 as ce, aj as Ge, eL as ot, cR as ut, nX as ct, nY as A, ay as Ke, nZ as dt, cP as ie, W as pe, e7 as pt, n_ as ht, n$ as ft, i0 as yt, al as P, ag as re, f2 as ye, fx as X, le as mt, o0 as Te, o1 as gt, fo as bt, U as Ie, go as St, b2 as Ce, b4 as Ae, jl as Pe, f5 as he, o2 as Me, cO as vt, o3 as Ne, o4 as _t, o5 as ke, o6 as wt, o7 as Vt, kf as ne, o8 as ge, o9 as It, S as xt, hA as Et, V as Ft, b6 as Rt, H as qe, aU as Ot, X as $t, b5 as zt, ff as Tt, nx as Ue, K as be, oa as Ct } from "./main-DhLeoxL5.js";
import { b as Le, E as Se, R as D, a as At, N as Be } from "./Container-B4fR9B2k.js";
import { t as Pt } from "./highlightReasons-BNKTlhCC.js";
import { m as Mt, u as Nt } from "./LayerView-BUXYmvJm.js";
import { i as Je, r as kt } from "./TechniqueInstance-BnthOl8O.js";
import { r as De, K, o as qt, e as Ut, Z as Lt } from "./UpdateTracking2D-klYfSIYS.js";
import { b as Bt } from "./WGLContainer-Cnz7j1HY.js";
import { o as Jt } from "./tileUtils-DrLrf-3T.js";
import { i as H, o as le } from "./enums-CQ3NrvMA.js";
import { e as Dt } from "./SDFHelper-izvO9BM5.js";
import "./LabelMetric-D5S4VUnR.js";
import { P as oe } from "./definitions-7ZaZRHRo.js";
import { n as fe, h as v, c as F, d as ue, e as k, f as Y, i as xe, x as me, t as Ee, m as q, g as jt, b as Ht } from "./FeatureCommandQueue-DhBM6snO.js";
import { t as Qt } from "./HighlightCounter-DHuljhpc.js";
import { p as ve, n as Gt } from "./popupUtils-CfpMu5Sm.js";
import { i as Kt } from "./RefreshableLayerView-D_DHKFsO.js";
let de = class extends _e {
  constructor() {
    super(...arguments), this.isAggregate = !0;
  }
  getEffectivePopupTemplate(e = !1) {
    if (this.popupTemplate) return this.popupTemplate;
    const t = this.sourceLayer?.featureReduction;
    return t && "popupTemplate" in t && t.popupEnabled ? t.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
h([f({ type: Boolean })], de.prototype, "isAggregate", void 0), de = h([G("esri.AggregateGraphic")], de);
const Fe = de;
let _ = class extends Qe {
  constructor(e) {
    super(e), this._filter = null, this.duration = g("mapview-transitions-duration"), this._excludedEffectView = new Le(e), this._includedEffectView = new Le(e);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e) {
    this._get("featureEffect") !== e && this._transitionTo(e);
  }
  get filter() {
    return this._filter || this.featureEffect?.filter || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e) {
    this._set("scale", e), this._excludedEffectView.scale = e, this._includedEffectView.scale = e;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  transitionStep(e, t) {
    this._set("scale", t), this.transitioning ? (this._includedEffectView.transitionStep(e, t), this._excludedEffectView.transitionStep(e, t), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = t, this._includedEffectView.scale = t);
  }
  endTransitions() {
    this._includedEffectView.endTransitions(), this._excludedEffectView.endTransitions(), this._filter = null;
  }
  _transitionTo(e) {
    const t = this._get("featureEffect"), r = e, s = r?.includedEffect, a = r?.excludedEffect, n = this._includedEffectView.canTransitionTo(s) && this._excludedEffectView.canTransitionTo(a);
    this._includedEffectView.effect = s, this._excludedEffectView.effect = a, this._set("featureEffect", r), this._filter = r?.filter || t?.filter || null, n || this.endTransitions();
  }
};
h([f()], _.prototype, "_filter", void 0), h([f()], _.prototype, "_excludedEffectView", void 0), h([f()], _.prototype, "_includedEffectView", void 0), h([f()], _.prototype, "duration", void 0), h([f()], _.prototype, "excludedEffects", null), h([f()], _.prototype, "featureEffect", null), h([f()], _.prototype, "filter", null), h([f()], _.prototype, "hasEffects", null), h([f()], _.prototype, "includedEffects", null), h([f({ value: 0 })], _.prototype, "scale", null), h([f()], _.prototype, "transitioning", null), _ = h([G("esri.layers.effects.FeatureEffectView")], _);
const Zt = _;
let W = class extends we {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(e, t) {
    const r = st.fromJSON(t.spatialReference), s = [];
    for (let a = 0; a < e.length; a++) {
      const n = e[a], l = Fe.fromJSON(n), u = n.geometry?.spatialReference;
      l.geometry == null || u || (l.geometry.spatialReference = r);
      const o = n.aggregateGeometries, c = l.aggregateGeometries;
      if (o && c != null) for (const d in c) {
        const p = c[d], y = o[d], m = y?.spatialReference;
        p == null || m || (p.spatialReference = r);
      }
      s.push(l);
    }
    return s;
  }
};
h([f({ type: [Fe], json: { write: !0 } })], W.prototype, "features", void 0), h([rt("features")], W.prototype, "readFeatures", null), W = h([G("esri.rest.support.AggregateFeatureSet")], W);
const Wt = W;
let Xt = class {
  constructor() {
    this._instanceById = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._instanceById.clear();
  }
  get size() {
    return this._instanceById.size;
  }
  updateStart() {
    this._instanceByIdNext = /* @__PURE__ */ new Map();
  }
  updateEnd() {
    if (!this._instanceByIdNext) throw new Error("InternalError: Found updateEnd call without corresponding updateStart");
    for (const e of this._instanceById.keys()) this._instanceByIdNext.has(e) || this._instanceById.delete(e);
    for (const [e, t] of this._instanceByIdNext.entries()) {
      const r = this._instanceById.get(e);
      r ? r.setInput(t.getInput()) : this._instanceById.set(e, t);
    }
    this._instanceByIdNext = null;
  }
  values() {
    return this._instanceById.values();
  }
  ensureInstance(e, t, r) {
    let s = `${e.registryName}`;
    for (const n in t) {
      const l = t[n];
      if (typeof l == "object" && n === "geometry") for (const u in l) s += `.${n}.${u}.${l[u] != null}`;
      else s += `.${n}.${t[n] != null}`;
    }
    if (r != null) for (const n in r) r[n] && (s += `-${n}`);
    const a = at(s);
    if (this._instanceByIdNext) {
      const n = new Je(De(a), e, e.meshWriter.name, t, r);
      return this._instanceByIdNext.set(a, n), n;
    }
    if (!this._instanceById.has(a)) {
      const n = new Je(De(a), e, e.meshWriter.name, t, r);
      this._instanceById.set(a, n);
    }
    return this._instanceById.get(a);
  }
  getInstance(e) {
    return this._instanceById.get(e);
  }
}, Yt = class {
  constructor(e, t, r) {
    this.getStage = e, this.version = t, this._tileInfoView = r, this._tiles = /* @__PURE__ */ new Map(), this._pendingUpdates = [], this._locked = !1;
  }
  destroy() {
  }
  tiles() {
    return this._tiles.values();
  }
  size() {
    return this._tiles.size;
  }
  setTiles(e) {
    this._tiles.clear();
    for (const t of e) this._tiles.set(t.key.id, t);
  }
  lockUploads() {
    this._locked = !0;
  }
  unlockUploads() {
    this._locked = !1;
    for (const e of this._pendingUpdates) this.updateTile(e);
    this._pendingUpdates = [];
  }
  updateTile(e) {
    if (this._locked) return void this._pendingUpdates.push(e);
    if (g("esri-2d-update-debug")) {
      const a = e.debugInfo?.chunkId ?? "<EnsureEnd>";
      console.debug(`Version[${e.version}] Tile[${e.id}] Chunk[${a}] RenderState.updateTile [${e.type}]`, e);
    }
    const t = this._ensureTile(e.id);
    if (e.type === "update") {
      const [a, ...n] = e.modify;
      t.onMessage({ type: "update", modify: a, remove: e.remove, end: e.end, attributeEpoch: e.attributeEpoch });
      for (const l of n) {
        const u = this._tiles.get(l.tileId);
        u && u.onMessage({ type: "update", modify: l, remove: e.remove, end: !1, isPixelBuffer: !0, attributeEpoch: null });
      }
      return;
    }
    if (e.append == null) return void t.onMessage({ type: "append", clear: e.clear, debugInfo: e.debugInfo, end: e.end, attributeEpoch: e.attributeEpoch });
    const [r, ...s] = e.append;
    t.onMessage({ type: "append", clear: e.clear, append: r, debugInfo: e.debugInfo, end: e.end, attributeEpoch: e.attributeEpoch });
    for (const a of s) {
      const n = this._tiles.get(a.tileId);
      n && n.onMessage({ type: "update", modify: a, remove: [], sort: !1, end: !1, isPixelBuffer: !0, attributeEpoch: null });
    }
  }
  removeTile(e) {
    const t = this._tiles.get(e);
    g("esri-2d-update-debug") && console.debug(`Tile[${e}] RenderState.removeTile`), t?.destroy(), this._tiles.delete(e);
  }
  isTileDone(e) {
    const t = this._tiles.get(e.id);
    return !!t && t.isReady;
  }
  _ensureTile(e) {
    if (!this._tiles.has(e)) {
      const t = this._createTile(e);
      this._copyPixelBufferedEntitiesInto(t), this._tiles.set(e, t);
    }
    return this._tiles.get(e);
  }
  _createTile(e) {
    g("esri-2d-update-debug") && console.debug(`Version[${this.version}] Tile[${e}] RenderState.createTile`);
    const t = new Ve(e), r = this._tileInfoView.getTileBounds(nt(), t), s = this._tileInfoView.getTileResolution(t.level), a = new Bt(t, s, r[0], r[3], !0);
    if (a.stage = this.getStage(), !a.stage) {
      const n = new z("featurelayerview:webgl", "Cannot create tile with empty stage");
      N.getLogger("esri.views.2d.layers.features.RenderState").error(n);
    }
    return a;
  }
  _copyPixelBufferedEntitiesInto(e) {
    let t = 7;
    for (let r = -1; r <= 1; r++) for (let s = -1; s <= 1; s++) {
      if (r === 0 && s === 0) continue;
      const a = this._tileInfoView.tileInfo.isWrappable, n = Jt(e.key, s, r, a).id, l = this._tiles.get(n);
      if (l != null) {
        const u = 1 << t;
        e.copyPixelBufferedEntitesFrom(l, u, s, r);
      }
      t--;
    }
  }
}, ei = class {
  constructor(e, t) {
    this.id = e, this.version = t, this._resolver = Ge(), this._done = !1;
  }
  get done() {
    return this._done;
  }
  get promise() {
    return this._resolver.promise;
  }
  end() {
    this._resolver.resolve(), this._done = !0;
  }
  destroy() {
    this._resolver.reject();
  }
}, ti = class extends kt {
  constructor(e) {
    super(e.view.featuresTilingScheme), this.updatingHandles = new lt(), this._hitTestsRequests = [], this._store = new Xt(), this._visibleTiles = /* @__PURE__ */ new Set(), this._subscriptions = /* @__PURE__ */ new Map(), this._updateStatisticsRequests = [], this._lockStatisticUpdates = !1, this._layerView = e;
  }
  renderChildren(e) {
    if (this.attributeView.update(), this._renderState) {
      const t = Array.from(this._renderState.tiles()).filter((r) => r.needsUpload);
      t.length && (t[Math.floor(Math.random() * t.length)].upload(), t.length >= 2 && this.requestRender());
      for (const r of this._renderState.tiles()) r.tryReady(this.attributeView.currentEpoch) && (this._layerView.requestUpdate(), this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this.requestRender());
    }
    for (const t of this.children) t.setTransform(e.state);
    switch (this.hasAnimation && e.painter.effects.integrate.draw(e, e.attributeView), super.renderChildren(e), e.drawPhase) {
      case Se.MAP:
        return this._renderMapPhase(e);
      case Se.HIGHLIGHT:
        return this._renderHighlightPhase(e);
      case Se.LABEL:
        return this._renderLabelPhase(e);
    }
  }
  subscriptions() {
    return this._subscriptions.values();
  }
  get _instanceStore() {
    return this._store;
  }
  get instanceStore() {
    return this._store;
  }
  get layerView() {
    return this._layerView;
  }
  get hasLabels() {
    return this._layerView.labelingCollisionInfos.length > 0;
  }
  get hasHighlight() {
    return this._layerView.hasHighlight();
  }
  get _layer() {
    return this._layerView.layer;
  }
  _getExclusivePostprocessingInstance({ drawPhase: e }) {
    if (this._instanceStore == null) return null;
    let t = 0, r = null;
    for (const s of this._instanceStore.values()) s.techniqueRef.drawPhase & e && (t++, s.techniqueRef.postProcessingEnabled && (r = s));
    return t > 1 ? null : r;
  }
  _getOverrideStencilRef({ drawPhase: e }) {
    if (this._instanceStore == null) return null;
    let t = null;
    for (const r of this._instanceStore.values()) {
      if (!(r.techniqueRef.drawPhase & e)) continue;
      const { overrideStencilRef: s } = r.techniqueRef;
      if (t == null) t = s;
      else if (t !== s) {
        t = null;
        break;
      }
    }
    return t;
  }
  get children() {
    return this._renderState ? Array.from(this._renderState.tiles()).filter((e) => this._visibleTiles.has(e.key.id)) : [];
  }
  async updateAttributeView(e) {
    this.requestRender(), await this.updatingHandles.addPromise(this.attributeView.requestUpdate(e)), this.hasLabels && this._layerView.view.labelManager.requestUpdate();
  }
  updateSubscriptions(e) {
    for (const { tileId: t, version: r } of e.subscribe) if (this._subscriptions.has(t)) this._subscriptions.get(t).version = r;
    else {
      const s = new ei(t, r);
      this._subscriptions.set(t, s), this.updatingHandles.addPromise(s.promise);
    }
    for (const t of e.unsubscribe)
      this._subscriptions.get(t)?.destroy(), this._subscriptions.delete(t), this.removeTile(t);
  }
  isDone(e) {
    return !!this._renderState && this._renderState.isTileDone(e);
  }
  async updateRenderState(e) {
    g("esri-2d-update-debug") && console.debug(`Version[${e}] FeatureContainer.updateRenderState`), this._renderStateNext = new Yt(() => this._stage, e, this._tileInfoView);
  }
  getDisplayStatistics(e, t) {
    const r = this._statisticsByLevel.get(e);
    return r ? r.get(t) : null;
  }
  updateStatistics(e, t) {
    if (this._lockStatisticUpdates) return void this._updateStatisticsRequests.push({ level: e, statistics: t });
    let r = this._statisticsByLevel.get(e);
    r || (r = /* @__PURE__ */ new Map(), this._statisticsByLevel.set(e, r));
    for (const s of t) r.set(s.fieldName, { minValue: s.minValue, maxValue: s.maxValue });
  }
  editStart() {
    this._renderState?.lockUploads(), this.attributeView.lockTextureUploads(), this._lockStatisticUpdates = !0;
  }
  editEnd() {
    this._renderState?.unlockUploads(), this.attributeView.unlockTextureUploads(), this._lockStatisticUpdates = !1;
    for (const e of this._updateStatisticsRequests) this.updateStatistics(e.level, e.statistics);
    this._updateStatisticsRequests = [], this.requestRender();
  }
  swapRenderState() {
    if (this._renderStateNext && (g("esri-2d-update-debug") && console.debug(`Version[${this._renderStateNext.version}] FeatureContainer.update.swapRenderState`), this._renderState?.destroy(), this._renderState = this._renderStateNext, this._renderStateNext = null), this._renderState) for (const e of this._renderState.tiles()) e.upload();
    this.requestRender();
  }
  setVisibleTiles(e) {
    this._visibleTiles = e;
  }
  async onMessage(e, t) {
    if (ce(t), !this._subscriptions.has(e.id)) return;
    const r = this._subscriptions.get(e.id);
    if (r.version !== e.subscriptionVesrion) {
      if (g("esri-2d-update-debug")) {
        const a = `${e.subscriptionVesrion} != ${r.version}`;
        console.debug(`Version[${a}] Tile[${e.id}] FeatureContainer - Dropping message, outdated version]`, e);
      }
      return;
    }
    const s = this._renderStateNext ?? this._renderState;
    if (!s) throw new Error("InternalError: No renderState defined");
    s.version !== e.version && console.error(`InternalError: Version mismatch. [renderState: ${s.version}, message: ${e.version}]`), s.updateTile(e), e.end && this._subscriptions.get(e.id).end(), this.requestRender(), this._layerView.view.labelManager.requestUpdate(), this._layerView.requestUpdate();
  }
  removeTile(e) {
    (this._renderState || this._renderStateNext) && (this._renderState && this._renderState.removeTile(e), this._renderStateNext && this._renderStateNext.removeTile(e));
  }
  hitTest(e) {
    let t = this._hitTestsRequests.find(({ x: s, y: a }) => s === e.x && a === e.y);
    const r = Ge();
    return t ? t.resolvers.push(r) : (t = { x: e.x, y: e.y, resolvers: [r] }, this._hitTestsRequests.push(t)), this.requestRender(), r.promise;
  }
  getSortKeys(e) {
    const t = new Set(e), r = /* @__PURE__ */ new Map();
    for (const s of this.children) if (s.getSortKeys(t).forEach((a, n) => r.set(n, a)), r.size === t.size) break;
    return r;
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  updateTransitionProperties(e, t) {
    super.updateTransitionProperties(e, t), this._layerView.featureEffectView.transitionStep(e, t), this._layerView.featureEffectView.transitioning && this.requestRender();
  }
  doRender(e) {
    const { minScale: t, maxScale: r } = this._layer.effectiveScaleRange, s = e.state.scale;
    s <= (t || 1 / 0) && s >= r && super.doRender(e);
  }
  afterRender(e) {
    super.afterRender(e), this._hitTestsRequests.length && this.requestRender();
  }
  setStencilReference(e) {
    const t = this._getOverrideStencilRef(e);
    if (t == null) super.setStencilReference(e);
    else for (const r of this.children) r.stencilRef = t(r);
  }
  _renderMapPhase(e) {
    this._layerView.featureEffectView.hasEffects ? (this._renderOutsideEffect(e), this._renderInsideEffect(e)) : this._renderFeatures(e, D.All), this._hitTestsRequests.length > 0 && this._renderHittest(e);
  }
  _renderHighlightPhase(e) {
    this.hasHighlight && At(e, !1, (t) => {
      this._renderFeatures(t, D.Highlight);
    });
  }
  _renderLabelPhase(e) {
    this._renderFeatures(e, D.All);
  }
  _renderInsideEffect(e) {
    const t = e.painter.effects.insideEffect;
    t.bind(e), this._renderFeatures(e, D.InsideEffect), t.draw(e, this._layerView.featureEffectView.includedEffects), t.unbind();
  }
  _renderOutsideEffect(e) {
    const t = e.painter.effects.outsideEffect;
    t.bind(e), this._renderFeatures(e, D.OutsideEffect), t.draw(e, this._layerView.featureEffectView.excludedEffects), t.unbind();
  }
  _renderHittest(e) {
    const { context: t } = e, r = e.painter.effects.hittest, s = t.getBoundFramebufferObject(), a = t.getViewport(), n = e.passOptions;
    r.bind(e), e.passOptions = r.createOptions(e, this._hitTestsRequests), this._renderFeatures(e, D.All), r.draw(e), r.unbind(), t.bindFramebuffer(s), t.restoreViewport(a), e.passOptions = n;
  }
  _renderFeatures(e, t) {
    for (const s of this.children) {
      if (!s.visible) continue;
      const a = g("featurelayer-force-marker-text-draw-order") ? Be.STRICT_MARKERS_AND_TEXT : Be.BATCHING, n = s.getDisplayList(e.drawPhase, this._instanceStore, a);
      e.selection = t, n?.render(e);
    }
    const r = this._getExclusivePostprocessingInstance(e);
    r?.techniqueRef.postProcess(e, r);
  }
};
async function ii(i) {
  const e = await ot("FeaturePipelineWorker", { client: i, strategy: "dedicated" });
  return new ri(e);
}
let ri = class {
  constructor(e) {
    this._connection = e, this.pipeline = this._connection.createInvokeProxy(), this.features = this._connection.createInvokeProxy("features"), this.aggregates = this._connection.createInvokeProxy("aggregates"), this.streamMessenger = this._connection.createInvokeProxy("streamMessenger");
  }
  destroy() {
    this._connection.destroy();
  }
  get closed() {
    return this._connection.closed;
  }
};
const si = "esri.views.2d.layers.features.FeatureSourceEventLog";
let $ = class extends Qe {
  constructor() {
    super(...arguments), this.events = new ut(), this._updatingStrategy = !0, this._tileToEvent = new ct(), this._fetchStatus = { outstanding: 0, done: 0 };
  }
  get hasAllFeatures() {
    return this._hasAllData() && (this._strategyInfo?.willQueryAllFeatures ?? !1);
  }
  get hasAllFeaturesInView() {
    return this._hasAllData();
  }
  get hasFullGeometries() {
    return this._hasAllData() && (this._strategyInfo?.willQueryFullResolutionGeometry ?? !1);
  }
  onEvent(e) {
    switch (e.type) {
      case "subscribe":
      case "unsubscribe":
      case "loaded":
      case "error":
        this._handleTileEvent(e);
        break;
      case "updateStrategyStart":
        this._updatingStrategy = !0, this._fetchStatus = { done: 0, outstanding: 0 }, this._strategyInfo = e.about;
        break;
      case "updateStrategyEnd":
        this._updatingStrategy = !1;
        break;
      case "updateFieldsStart":
        this._fetchStatus = { done: 0, outstanding: 0 };
        break;
      case "updateFieldsEnd":
        break;
      case "updateFieldsError":
        this.events.emit("error", e);
        break;
      case "fetchStart":
        this._fetchStatus.outstanding += 1, this.events.emit("status", this._fetchStatus);
        break;
      case "fetchEnd":
        this._fetchStatus.done += 1, this.events.emit("status", this._fetchStatus), e.done && (this._fetchStatus = { done: 0, outstanding: 0 });
    }
  }
  _hasAllData() {
    return !this._updatingStrategy && this._hasAllTileData();
  }
  _hasAllTileData() {
    for (const e of this._tileToEvent.values())
      if (e[e.length - 1].type !== "loaded") return !1;
    return !0;
  }
  _handleTileEvent(e) {
    switch (e.type) {
      case "subscribe":
        this._tileToEvent.set(e.tile, [e]);
        break;
      case "unsubscribe":
        this._tileToEvent.delete(e.tile);
        break;
      case "loaded": {
        const t = this._tileToEvent.get(e.tile);
        if (!t) return;
        t.push(e), this._tileToEvent.set(e.tile, t);
        break;
      }
      case "error": {
        const t = this._tileToEvent.get(e.tile);
        if (!t) return;
        t.push(e), this._tileToEvent.set(e.tile, t), this.events.emit("error", e);
        break;
      }
    }
  }
};
h([f({ readOnly: !0 })], $.prototype, "hasAllFeatures", null), h([f({ readOnly: !0 })], $.prototype, "hasAllFeaturesInView", null), h([f({ readOnly: !0 })], $.prototype, "hasFullGeometries", null), h([f()], $.prototype, "_updatingStrategy", void 0), h([f()], $.prototype, "_strategyInfo", void 0), h([f()], $.prototype, "_tileToEvent", void 0), $ = h([G(si)], $);
function C(i) {
  switch (i.geometryType) {
    case "point":
      return "esriGeometryPoint";
    case "polyline":
      return "esriGeometryPolyline";
    case "polygon":
    case "multipatch":
      return "esriGeometryPolygon";
    case "multipoint":
      return "esriGeometryMultipoint";
    default:
      return null;
  }
}
function V(i, e) {
  const t = i.featureReduction;
  return t && t.type !== "selection" && (!("maxScale" in t) || !t.maxScale || t.maxScale < e.scale) ? t : null;
}
const ai = Math.PI;
function Ze(i, e) {
  switch (e.transformationType) {
    case A.Additive:
      return ni(i, e);
    case A.Constant:
      return li(e, i);
    case A.ClampedLinear:
      return oi(i, e);
    case A.Proportional:
      return ui(i, e);
    case A.Stops:
      return ci(i, e);
    case A.RealWorldSize:
      return di(i, e);
    case A.Identity:
      return i;
    case A.Unknown:
      return null;
  }
}
function x(i, e) {
  return typeof i == "number" ? i : Ze(e, i);
}
function ni(i, e) {
  return i + (x(e.minSize, i) || e.minDataValue);
}
function li(i, e) {
  const t = i.stops;
  let r = t?.length && t[0].size;
  return r == null && (r = i.minSize), x(r, e);
}
function oi(i, e) {
  const t = e.minDataValue, r = e.maxDataValue, s = (i - t) / (r - t), a = x(e.minSize, i), n = x(e.maxSize, i);
  return i <= t ? a : i >= r ? n : a + s * (n - a);
}
function ui(i, e) {
  const t = i / e.minDataValue, r = x(e.minSize, i), s = x(e.maxSize, i);
  let a = null;
  return a = t * r, Ke(a, r, s);
}
function ci(i, e) {
  const [t, r, s] = pi(i, e.cache.ipData);
  if (t === r) return x(e.stops[t].size, i);
  {
    const a = x(e.stops[t].size, i);
    return a + (x(e.stops[r].size, i) - a) * s;
  }
}
function di(i, e) {
  const t = dt[e.valueUnit], r = x(e.minSize, i), s = x(e.maxSize, i), { valueRepresentation: a } = e;
  let n = null;
  return n = a === "area" ? 2 * Math.sqrt(i / ai) / t : a === "radius" || a === "distance" ? 2 * i / t : i / t, Ke(n, r, s);
}
function pi(i, e) {
  if (!e) return;
  let t = 0, r = e.length - 1;
  return e.some((s, a) => i < s ? (r = a, !0) : (t = a, !1)), [t, r, (i - e[t]) / (e[r] - e[t])];
}
function M(i) {
  return (i.labelsVisible && i.labelingInfo?.every((e) => e.deconflictionStrategy !== "none")) ?? !1;
}
function Z(i, e) {
  const t = V(i, e);
  if (t?.labelsVisible && t.labelingInfo?.length) return t.labelingInfo.every((r) => r.deconflictionStrategy !== "none");
}
function hi(i) {
  return (e) => ie(Ze(e, i));
}
function U(i) {
  const e = i != null && "visualVariables" in i && i.visualVariables;
  if (!e) return null;
  for (const t of e) if (t.type === "size") return hi(t);
  return null;
}
function L(i, e, t, r, s) {
  const a = e.subtypeCode != null ? `${e.subtypeField} = ${e.subtypeCode}` : null, n = pe(e.definitionExpression, a), l = e.customParameters ?? {};
  return s && (l.token = s), { type: "feature", mutable: { sourceRefreshVersion: r, availableFields: t.availableFields, dataFilter: { definitionExpression: n, gdbVersion: e.gdbVersion, historicMoment: e.historicMoment?.getTime(), outSpatialReference: t.outSpatialReference.toJSON(), timeExtent: e.timeExtent?.toJSON(), customParameters: l } }, service: i, tileInfoJSON: t.tileInfoJSON };
}
function fi(i, e, t = 0) {
  if (e == null) return i[t] = 0, i[t + 1] = 0, i[t + 2] = 0, void (i[t + 3] = 0);
  const { r, g: s, b: a, a: n } = e;
  i[t] = r * n / 255, i[t + 1] = s * n / 255, i[t + 2] = a * n / 255, i[t + 3] = n;
}
async function T(i, e) {
  if (!i) return [];
  switch (i.type) {
    case "simple-fill":
      return Xe(i, e);
    case "picture-fill":
      return xi(i, e);
    case "simple-marker":
      return bi(i, e);
    case "picture-marker":
      return Si(i, e);
    case "simple-line":
      return se(i, e, !1);
    case "text":
      return _i(i, e);
    case "label":
      return wi(i, e);
    case "cim":
      return fe(i.data, e);
    case "web-style": {
      const t = await i.fetchCIMSymbol();
      return fe(t.data, e);
    }
    default:
      throw new Error(`symbol not supported ${i.type}`);
  }
}
async function yi(i, e) {
  const { schemaOptions: t } = e, { store: r } = t, s = new Array(oe), a = new Array(oe / 4);
  for (let o = 0; o < oe; o++) {
    const c = o < i.attributes.length ? i.attributes[o].color : null;
    s[o] = [0, 0, 0, 0], fi(s[o], c);
  }
  for (let o = 0; o < oe / 4; o++) a[o] = [0, 0, 0, 0], a[o][0] = 4 * o < i.attributes.length ? 1 : 0, a[o][1] = 4 * o + 1 < i.attributes.length ? 1 : 0, a[o][2] = 4 * o + 2 < i.attributes.length ? 1 : 0, a[o][3] = 4 * o + 3 < i.attributes.length ? 1 : 0;
  const n = { isActive: a, colors: s, dotValue: i.dotValue, dotScale: i.referenceScale, blending: i.dotBlendingEnabled, dotSize: i.dotSize, seed: i.seed }, l = r.ensureInstance(v.dotDensity, n, {}).createMeshInfo({ params: { effects: null } }), u = [];
  if (i.backgroundColor) {
    const o = new pt({ color: i.backgroundColor, outline: null }), c = await T(o, e);
    u.push(...c);
  }
  if (u.push(l), i.outline) {
    const o = se(i.outline, e, !0);
    u.push(...o);
  }
  return u;
}
async function mi(i, e) {
  const { store: t } = e, { radius: r, minDensity: s, maxDensity: a, referenceScale: n, field: l, valueExpression: u, colorStops: o } = i, c = ht(o);
  return [t.ensureInstance(v.heatmap, { radius: ie(r), minDensity: s, maxDensity: a, referenceScale: n, isFieldActive: !(!l && !u), gradient: c, gradientHash: c.join(",") }, {}).createMeshInfo({ params: { effects: null } })];
}
function gi(i, e) {
  const { store: t } = e, r = i.outline?.width || 0, s = F(i), a = t.ensureInstance(v.pieChart, { geometry: { outlineWidth: Math.round(ie(r)), defaultColor: ue(i.defaultColor), outlineColor: ue(i.outline?.color), othersColor: ue(i.othersCategory?.color), donutRatio: i.holePercentage, sectorThreshold: i.othersCategory?.threshold || 0, colors: i.attributes.map((n) => ue(n.color)), visualVariableOpacity: s.visualVariableOpacity, visualVariableSizeMinMaxValue: s.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: s.visualVariableSizeScaleStops, visualVariableSizeStops: s.visualVariableSizeStops, visualVariableSizeUnitValue: s.visualVariableSizeUnitValue, hittestUniforms: null }, numberOfFields: i.attributes.length }, {}).createMeshInfo({ params: { size: i.size, outlineWidth: r, effects: null, scaleInfo: null, minPixelBuffer: k(s) } });
  return [...i.backgroundFillSymbol ? Xe(i.backgroundFillSymbol, { schemaOptions: e, path: "", uniforms: me }) : [], a];
}
function We(i) {
  if (i.style === "path") {
    if (i.path == null) throw new Error("Symbol with a style of type path must define a path");
    return { type: "sprite-rasterization-param", overrides: [], resource: { type: "path", path: i.path, asFill: !0 } };
  }
  const e = K.fromSimpleMarker(i);
  if ("outline" in i && i.outline && i.outline.style !== "none" && i.outline.style !== "solid") {
    if (!e || !e.symbolLayers) throw new Error("Error handling marker! ");
    return { type: "sprite-rasterization-param", resource: e.symbolLayers[0], overrides: [] };
  }
  return { type: "sprite-rasterization-param", resource: Dt(e), overrides: [] };
}
async function bi(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r;
  if (i.style === "path" || i.outline && i.outline.style !== "solid" && i.outline.style !== "none") {
    const p = K.fromSimpleMarker(i);
    if (!p || !p.symbolLayers) throw new Error("Error handling marker! ");
    if (t.visualVariableRotation && (p.angleAlignment = "Map"), i.style !== "path") {
      const y = p.symbolLayers[0];
      if (Y(e.uniforms)) {
        const m = k(e.uniforms, 0, 1);
        if (m > y.size) {
          const w = m / y.size;
          y.size = m;
          const E = y.markerGraphics?.[0].symbol;
          (E.symbolLayers && E.symbolLayers[0]).width *= w;
        }
      }
    }
    return fe({ type: "CIMSymbolReference", symbol: p }, e);
  }
  const a = s.ensureInstance(v.marker, { geometry: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeMinMaxValue: t.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t.visualVariableSizeScaleStops, visualVariableSizeStops: t.visualVariableSizeStops, visualVariableSizeUnitValue: t.visualVariableSizeUnitValue, visualVariableRotation: t.visualVariableRotation } }, { zoomRange: !1 }), n = We(i);
  let l = i.color?.toArray() ?? [0, 0, 0, 0];
  n.resource.type === "CIMVectorMarker" && (l = [255, 255, 255, 255]);
  const u = i.style === "triangle" ? 124 / 116 : 1, o = i.size, c = o * u, d = t.visualVariableColor != null && (i.style === "cross" || i.style === "x");
  return [a.createMeshInfo({ params: { type: "simple", color: l, height: o, width: c, offsetX: i.xoffset, offsetY: i.yoffset, angle: i.angle, alignment: xe(t) ? H.MAP : H.SCREEN, outlineColor: i.outline?.color?.toArray() ?? [0, 0, 0, 0], outlineSize: i.outline?.width ?? 1, referenceSize: o, sprite: n, overrideOutlineColor: d, hasSizeVV: Y(t), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: k(t) } })];
}
function Si(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r, a = s.ensureInstance(v.marker, { geometry: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeMinMaxValue: t.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t.visualVariableSizeScaleStops, visualVariableSizeStops: t.visualVariableSizeStops, visualVariableSizeUnitValue: t.visualVariableSizeUnitValue, visualVariableRotation: t.visualVariableRotation } }, { zoomRange: !1 }), n = K.createPictureMarkerRasterizationParam(i);
  return n ? [a.createMeshInfo({ params: { type: "picture", color: [255, 255, 255, 255], height: i.height, width: i.width, offsetX: i.xoffset, offsetY: i.yoffset, angle: i.angle, alignment: xe(t) ? H.MAP : H.SCREEN, outlineColor: null, outlineSize: 0, referenceSize: i.height, sprite: n, overrideOutlineColor: !1, hasSizeVV: Y(t), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: k(t) } })] : [];
}
function vi(i, e, t) {
  const { uniforms: r, schemaOptions: s } = t, { store: a } = s, n = a.ensureInstance(v.marker, { geometry: { visualVariableColor: r.visualVariableColor, visualVariableOpacity: r.visualVariableOpacity, visualVariableSizeMinMaxValue: r.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r.visualVariableSizeScaleStops, visualVariableSizeStops: r.visualVariableSizeStops, visualVariableSizeUnitValue: r.visualVariableSizeUnitValue, visualVariableRotation: r.visualVariableRotation } }, { zoomRange: !1 }), l = We(i), u = 6, o = u * e.width, c = o, d = i.color?.toArray() ?? e.color?.toArray() ?? [0, 0, 0, 0], p = i.style === "cross" || i.style === "x";
  let y;
  switch (i.placement) {
    case "begin-end":
      y = le.Both;
      break;
    case "begin":
      y = le.JustBegin;
      break;
    case "end":
      y = le.JustEnd;
      break;
    default:
      y = le.None;
  }
  const m = { type: "cim-marker-placement-info", placement: { type: "CIMMarkerPlacementAtExtremities", angleToLine: !0, offset: 0, extremityPlacement: y, offsetAlongLine: 0 }, overrides: [] };
  return [n.createMeshInfo({ params: { type: "simple", color: d, height: c, width: o, offsetX: 0, offsetY: 0, angle: 0, alignment: xe(r) ? H.MAP : H.SCREEN, outlineColor: d, outlineSize: p ? e.width : 0, referenceSize: c / u, sprite: l, overrideOutlineColor: p && r.visualVariableColor != null, hasSizeVV: Y(r), placement: m, transforms: null, effects: null, scaleInfo: null, minPixelBuffer: k(r) } })];
}
function _i(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r;
  return [s.ensureInstance(v.text, { geometry: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableRotation: t.visualVariableRotation, visualVariableSizeMinMaxValue: t.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t.visualVariableSizeScaleStops, visualVariableSizeStops: t.visualVariableSizeStops, visualVariableSizeUnitValue: t.visualVariableSizeUnitValue } }, { zoomRange: !1, clipAngle: !1, referenceSymbol: !1 }).createMeshInfo({ params: { boxBackgroundColor: i.backgroundColor?.toArray(), boxBorderLineColor: i.borderLineColor?.toArray(), boxBorderLineSize: i.borderLineSize ?? 0, color: i.color?.toArray() ?? [0, 0, 0, 0], offsetX: i.xoffset, offsetY: i.yoffset, postAngle: i.angle, fontSize: i.font.size, decoration: i.font.decoration, haloColor: i.haloColor?.toArray() ?? [0, 0, 0, 0], haloFontSize: i.haloSize ?? 0, lineWidth: i.lineWidth, lineHeightRatio: i.lineHeight, horizontalAlignment: i.horizontalAlignment, verticalAlignment: i.verticalAlignment, useCIMAngleBehavior: !1, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: i.font.toJSON(), textString: i.text, symbol: K.createCIMTextSymbolfromTextSymbol(i) }, overrides: [] }, referenceSize: null, effects: null, placement: null, scaleInfo: null, transforms: null, scaleFactor: 1, minPixelBuffer: k(t), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null, isLineLabel: !1 } })];
}
function wi(i, e) {
  const { schemaOptions: t, uniforms: r } = e, { store: s } = t, a = i.symbol, { allowOverrun: n, repeatLabel: l, repeatLabelDistance: u } = i, o = { maxScale: i.maxScale ?? 0, minScale: i.minScale ?? 0 }, c = s.ensureInstance(v.label, { geometry: { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: r.visualVariableRotation, visualVariableSizeMinMaxValue: r.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r.visualVariableSizeScaleStops, visualVariableSizeStops: r.visualVariableSizeStops, visualVariableSizeUnitValue: r.visualVariableSizeUnitValue } }, { zoomRange: !0, clipAngle: !0, referenceSymbol: !0 }), d = i.labelPlacement, [p, y] = qt(d);
  return [c.createMeshInfo({ params: { boxBackgroundColor: a.backgroundColor?.toArray(), boxBorderLineColor: a.borderLineColor?.toArray(), boxBorderLineSize: a.borderLineSize ?? 0, color: a.color?.toArray() ?? [0, 0, 0, 0], offsetX: a.xoffset, offsetY: a.yoffset, postAngle: a.angle, fontSize: a.font.size, decoration: a.font.decoration, haloColor: a.haloColor?.toArray() ?? [0, 0, 0, 0], haloFontSize: a.haloSize ?? 0, lineWidth: a.lineWidth, lineHeightRatio: a.lineHeight, horizontalAlignment: p, verticalAlignment: y, repeatLabel: l, repeatLabelDistance: ie(u), allowOverrun: n, labelPosition: i.labelPosition, scaleInfo: o, minPixelBuffer: k(r), useCIMAngleBehavior: !1, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: a.font.toJSON(), textString: a.text, symbol: K.createCIMTextSymbolfromTextSymbol(a), primitiveName: "label-override" }, useLegacyLabelEvaluationRules: i.labelExpressionInfo?.expression == null, overrides: [{ type: "CIMPrimitiveOverride", valueExpressionInfo: { type: "CIMExpressionInfo", expression: i.labelExpressionInfo?.expression ?? i.labelExpression, returnType: "String" }, primitiveName: "label-override", propertyName: "textString", defaultValue: "" }] }, referenceSize: null, effects: null, placement: null, transforms: null, scaleFactor: 1, isLineLabel: !1 } })];
}
function Re(i, e) {
  const t = i.width;
  return { outlineColor: i.color?.toArray() || [0, 0, 0, 1], width: t, referenceWidth: t, capType: i.cap ?? "round", joinType: i.join ?? "round", miterLimit: i.miterLimit, hasSizeVV: e };
}
function Vi(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r, a = i.color?.toArray() ?? [0, 0, 0, 0], n = { type: "sprite-rasterization-param", resource: { type: "fill-style", style: i.style }, overrides: [] };
  if (i.outline?.style === "solid")
    return [s.ensureInstance(v.patternOutlineFill, { geometry: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeScaleStops: t.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null } }, { zoomRange: !1 }).createMeshInfo({ params: { color: a, ...Re(i.outline, !!t.visualVariableSizeOutlineScaleStops), sprite: n, scaleInfo: null, effects: null } })];
  const l = [], u = s.ensureInstance(v.patternFill, { geometry: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity } }, { zoomRange: !1 }).createMeshInfo({ params: { color: i.color?.toArray() ?? [0, 0, 0, 0], sprite: n, scaleInfo: null, effects: null } });
  return l.push(u), i.outline && l.push(...se(i.outline, e, !0)), l;
}
function Ii(i, e) {
  const { uniforms: t, schemaOptions: r } = e, { store: s } = r, a = i.color?.toArray() ?? [0, 0, 0, 0];
  if (i.style !== "none" && i.outline?.style === "solid")
    return [s.ensureInstance(v.outlineFill, { geometry: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity, visualVariableSizeScaleStops: t.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null } }, { zoomRange: !1 }).createMeshInfo({ params: { color: a, ...Re(i.outline, !!t.visualVariableSizeOutlineScaleStops), scaleInfo: null, effects: null } })];
  const n = [];
  if (i.style !== "none") {
    const l = s.ensureInstance(v.fill, { geometry: { visualVariableColor: t.visualVariableColor, visualVariableOpacity: t.visualVariableOpacity } }, { zoomRange: !1 }).createMeshInfo({ params: { color: a, scaleInfo: null, effects: null } });
    n.push(l);
  }
  return i.outline && n.push(...se(i.outline, e, !0)), n;
}
function Xe(i, e) {
  const { style: t } = i;
  return t && t !== "none" && t !== "solid" ? Vi(i, e) : Ii(i, e);
}
function xi(i, e) {
  const { outline: t } = i, { uniforms: r, schemaOptions: s } = e, { store: a } = s, n = [], l = K.createPictureFillRasterizationParam(i);
  if (!l) return [];
  const { width: u, height: o, xoffset: c, yoffset: d, xscale: p, yscale: y } = i, m = { color: [255, 255, 255, 255], sprite: l, height: o, aspectRatio: u / o, offsetX: c, offsetY: d, scaleX: p, scaleY: y, angle: 0, applyRandomOffset: !1, sampleAlphaOnly: !1, scaleProportionally: !1, effects: null, scaleInfo: null };
  if (t?.style === "solid")
    return [a.ensureInstance(v.complexOutlineFill, { geometry: { visualVariableColor: r.visualVariableColor, visualVariableOpacity: r.visualVariableOpacity, visualVariableSizeScaleStops: r.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null } }, { zoomRange: !1 }).createMeshInfo({ params: { ...m, ...Re(t, !!r.visualVariableSizeOutlineScaleStops) } })];
  const w = a.ensureInstance(v.complexFill, { geometry: { visualVariableColor: r.visualVariableColor, visualVariableOpacity: r.visualVariableOpacity } }, { zoomRange: !1 });
  return n.push(w.createMeshInfo({ params: m })), t && n.push(...se(t, e, !0)), n;
}
function se(i, e, t) {
  const { color: r, style: s, width: a, cap: n, join: l } = i, { schemaOptions: u } = e, { store: o } = u, c = [], d = t ? { ...me, visualVariableSizeScaleStops: e.uniforms.visualVariableSizeOutlineScaleStops } : e.uniforms, p = { geometry: { visualVariableColor: d.visualVariableColor, visualVariableOpacity: d.visualVariableOpacity, visualVariableSizeMinMaxValue: d.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: d.visualVariableSizeScaleStops, visualVariableSizeStops: d.visualVariableSizeStops, visualVariableSizeUnitValue: d.visualVariableSizeUnitValue } }, y = { color: r?.toArray() ?? [0, 0, 0, 0], width: a, referenceWidth: a, capType: n, joinType: l, miterLimit: i.miterLimit, hasSizeVV: Y(d), effects: null, scaleInfo: null };
  if (s == null || s === "solid") {
    const m = o.ensureInstance(v.line, p, { zoomRange: !1 }).createMeshInfo({ params: y });
    c.push(m);
  } else if (s !== "none") {
    const m = o.ensureInstance(v.texturedLine, p, { zoomRange: !1 }).createMeshInfo({ params: { ...y, shouldScaleDash: !0, shouldSampleAlphaOnly: !1, isSDF: !0, sprite: { type: "sprite-rasterization-param", resource: { type: "dash", dashTemplate: Ut(s, n), capStyle: Lt(n) }, overrides: [] } } });
    c.push(m);
  }
  return i.marker != null && c.push(...vi(i.marker, i, e)), c;
}
async function ee(i, e, t) {
  const r = e.labelsVisible && e.labelingInfo || [], s = C(e), a = ft(r, s);
  return { type: "label", classes: await Promise.all(a.map((n, l) => Ei(i, n, l, t))) };
}
async function Ei(i, e, t, r) {
  const s = await T(e, { path: `${t}`, schemaOptions: i, uniforms: r });
  return { maxScale: e.maxScale, minScale: e.minScale, expression: e.labelExpressionInfo?.expression ?? e.labelExpression, where: e.where, meshes: s };
}
async function te(i, e) {
  if (!e) return { type: "simple", meshes: [] };
  switch (e.type) {
    case "simple":
      return Fi(i, e);
    case "dot-density":
      return Ri(i, e);
    case "class-breaks":
      return Oi(i, e);
    case "unique-value":
      return $i(i, e);
    case "dictionary":
      return zi(e);
    case "heatmap":
      return Ti(i, e);
    case "pie-chart":
      return Ci(i, e);
  }
}
async function Fi(i, e) {
  const t = e.getSymbols(), r = t.length ? t[0] : null, s = F(e);
  return { type: "simple", meshes: await T(r, { schemaOptions: i, uniforms: s, path: "renderer.symbol" }) };
}
async function Ri(i, e) {
  const t = F(e);
  return { type: "dot-density", meshes: await yi(e, { schemaOptions: i, uniforms: t, path: "renderer.symbol" }) };
}
async function Oi(i, e) {
  const t = F(e), r = e.backgroundFillSymbol, s = e.normalizationType, a = s === "log" ? "esriNormalizeByLog" : s === "percent-of-total" ? "esriNormalizeByPercentOfTotal" : s === "field" ? "esriNormalizeByField" : null, n = e.classBreakInfos.map(async (c) => ({ meshes: await T(c.symbol, { path: `renderer-stop-${c.minValue}-${c.maxValue}`, schemaOptions: i, uniforms: t }), min: c.minValue, max: c.maxValue })), l = (await Promise.all(n)).sort((c, d) => c.min - d.min), u = await T(r, { schemaOptions: i, path: "renderer.backgroundFill", uniforms: { ...me, visualVariableSizeOutlineScaleStops: t.visualVariableSizeOutlineScaleStops } }), o = await T(e.defaultSymbol, { schemaOptions: i, path: "renderer.defaultSymbol", uniforms: t });
  return { type: "interval", field: e.field, expression: e.valueExpression, backgroundFill: u, defaultSymbol: o, intervals: l, normalizationField: e.normalizationField, normalizationTotal: e.normalizationTotal, normalizationType: a, isMaxInclusive: e.isMaxInclusive };
}
async function $i(i, e) {
  const t = [], r = F(e), s = await T(e.backgroundFillSymbol, { schemaOptions: i, path: "renderer.backgroundFill", uniforms: { ...me, visualVariableSizeOutlineScaleStops: r.visualVariableSizeOutlineScaleStops } }), a = await T(e.defaultSymbol, { schemaOptions: i, path: "renderer.defaultSymbol", uniforms: r });
  for (const n of e.uniqueValueInfos ?? []) {
    const l = await T(n.symbol, { path: `renderer-unique-value-${n.value}`, schemaOptions: i, uniforms: r });
    t.push({ value: "" + n.value, symbol: l });
  }
  return { type: "map", field: e.field, expression: e.valueExpression, field2: e.field2, field3: e.field3, fieldDelimiter: e.fieldDelimiter, backgroundFill: s, defaultSymbol: a, map: t };
}
function zi(i) {
  const e = F(i), t = i.scaleExpression, r = t != null && t !== "1" ? { valueExpressionInfo: { type: "CIMExpressionInfo", expression: i.scaleExpression, returnType: "Numeric" }, defaultValue: 1 } : void 0;
  return { type: "dictionary", fieldMap: i.fieldMap, scaleExpression: r, visualVariableUniforms: e };
}
async function Ti(i, e) {
  return { type: "heatmap", meshes: await mi(e, i) };
}
async function Ci(i, e) {
  return { type: "pie-chart", meshes: gi(e, i) };
}
async function Ai(i, e) {
  const t = e.renderer, r = F(t);
  return { symbology: await te(i, t), labels: await ee(i, e, r) };
}
async function B(i, e, t, r) {
  const s = t.featureReduction;
  if (s) switch (s.type) {
    case "binning":
      return Mi(s, i, e, t, r);
    case "cluster":
      return Ni(s, i, e, t, r);
  }
  const a = ki(t.orderBy, t.renderer, t.objectIdField);
  return { storage: Ee(t.renderer, e.filters), mesh: { displayRefreshVersion: r, strategy: { type: "feature" }, factory: await Ai(i, t), sortKey: a, timeZone: e.timeZone } };
}
function Ye(i, e) {
  return i.fields.map((t) => ({ ...t.toJSON(), type: Pi(t, e) }));
}
function Pi(i, e) {
  const { onStatisticExpression: t, onStatisticField: r, statisticType: s } = i;
  switch (s) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (t) {
        const { returnType: n } = t;
        return n ? n === "string" ? "esriFieldTypeString" : "esriFieldTypeDouble" : "esriFieldTypeString";
      }
      const a = e.find((n) => n.name === r);
      return a ? a.type : "esriFieldTypeString";
    }
  }
}
async function Mi(i, e, t, r, s) {
  const a = Ye(i, r.fields), n = i.renderer, l = await te(e, n), u = Ee(n, [null, null]), o = F(n), c = await ee(e, { geometryType: "polygon", labelingInfo: i.labelingInfo, labelsVisible: i.labelsVisible }, o);
  return { storage: u, mesh: { displayRefreshVersion: s, strategy: { type: "binning", fields: a, fixedBinLevel: i.fixedBinLevel, featureFilter: t.filters[0] }, factory: { labels: c, symbology: l }, sortKey: null, timeZone: t.timeZone } };
}
async function Ni(i, e, t, r, s) {
  const a = Ye(i, r.fields), n = { type: "cluster", feature: await te(e, i.effectiveFeatureRenderer), cluster: await te(e, i.effectiveClusterRenderer) }, l = F(i.effectiveFeatureRenderer), u = { type: "cluster", feature: await ee(e, r, l), cluster: await ee(e, { geometryType: "point", labelingInfo: i.labelingInfo, labelsVisible: i.labelsVisible }, l) };
  return { storage: Ee(i.effectiveFeatureRenderer, [null, null]), mesh: { displayRefreshVersion: s, strategy: { type: "cluster", fields: a, featureFilter: t.filters[0], clusterRadius: ie(i.clusterRadius / 2) }, factory: { labels: u, symbology: n }, sortKey: null, timeZone: t.timeZone } };
}
function ki(i, e, t) {
  const r = e != null && e.type === "unique-value" && e.orderByClassesEnabled;
  if (i !== "default" || r || (i = [new yt({ field: t, order: "descending" })]), i !== "default" && i.length) {
    i.length;
    const s = i[0], a = s.order === "ascending" ? "asc" : "desc";
    return s.field ? { field: s.field, order: a } : s.valueExpression ? { expression: s.valueExpression, order: a } : null;
  }
  return r ? { byRenderer: !0, order: "asc" } : null;
}
let qi = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = M(t);
    return [{ vvEvaluators: { 0: U(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, r = t.parent, s = P(r), { capabilities: a, editingInfo: n, objectIdField: l, globalIdField: u, datesInUnknownTimezone: o, orderBy: c, subtypeField: d, parsedUrl: p } = r, y = r.fieldsIndex.toJSON(), m = C(t), w = r.timeInfo?.toJSON(), E = t.spatialReference.toJSON(), R = re(p);
    let O = l;
    if (c?.length) {
      const I = !c[0].valueExpression && c[0].field;
      I && (O = I);
    }
    return { type: "feature-service", source: R, isSourceHosted: ye(R.path), orderByFields: O, metadata: { timeReferenceUnknownClient: o, subtypeField: d, globalIdField: u, fieldsIndex: y, geometryType: m, objectIdField: l, timeInfo: w, spatialReference: E, subtypes: null, typeIdField: null, types: null }, queryMetadata: { capabilities: a, effectiveCapabilities: s, lastEditDate: n?.lastEditDate?.getTime(), snapshotInfo: null } };
  }
  createSourceSchema(e, t, r) {
    const { definitionExpression: s, customParameters: a, timeExtent: n, apiKey: l } = this.layer.parent;
    return L(e, { definitionExpression: s, customParameters: a, timeExtent: n }, t, r, l);
  }
  createProcessorSchema(e, t, r) {
    const { parent: { fields: s, geometryType: a, orderBy: n, objectIdField: l }, renderer: u, labelingInfo: o, labelsVisible: c } = this.layer, d = { featureReduction: null, fields: s.map((p) => p.toJSON()), geometryType: a, labelingInfo: o, labelsVisible: c, objectIdField: l, orderBy: n ?? "default", renderer: u?.clone() };
    return B(e, t, d, r);
  }
  get hasRequiredSupport() {
    return q(this.layer.renderer);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { parent: r, parent: { definitionExpression: s, apiKey: a }, renderer: n } = t, l = this.layer.labelsVisible ? this.layer.labelingInfo : null;
    return { apiKey: a, customParameters: JSON.stringify(r.customParameters), definitionExpression: s, labelingInfo: l, orderBy: JSON.stringify(r.orderBy), renderer: n };
  }
  setGraphicOrigin(e) {
    e.origin = { type: "catalog", layer: this.layer };
  }
};
function Oe(i, e) {
  const t = i.extent, r = e?.clone().intersection(t), s = r != null ? r.width * r.height : 0, a = e ? e.width * e.height : 0, n = a === 0 ? 0 : s / a, l = g("featurelayer-snapshot-point-coverage");
  return !isNaN(n) && n >= l;
}
function Q(i, e) {
  return i.floorInfo != null && (i.floorInfo.viewAllLevelIds.length > 0 || e.floors.length > 0);
}
function $e(i, e, t) {
  const r = Ui(i, e?.where, t);
  return r && (e ??= new X(), e.where = r), e;
}
function Ui(i, e, t) {
  if (i.floorInfo == null || !t.floors?.length) return e;
  let r = t.floors;
  const { floorField: s, viewAllLevelIds: a } = i.floorInfo;
  a.length && (r = a);
  const n = r.filter((u) => u !== "").map((u) => "'" + u + "'");
  if (n.push("''"), e?.includes(s)) {
    let u = new RegExp("AND \\(" + s + ".*NULL\\)", "g");
    e = e.replace(u, ""), u = new RegExp("\\(" + s + ".*NULL\\)", "g"), e = (e = e.replace(u, "")).replaceAll(/\s+/g, " ").trim();
  }
  let l = "(" + s + " IN ({ids}) OR " + s + " IS NULL)";
  return l = l.replace("{ids}", n.join(", ")), pe(e, l);
}
let Li = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = Z(t, e) ?? M(t);
    return [{ vvEvaluators: { 0: U(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, r = P(t), { capabilities: s, editingInfo: a, objectIdField: n, typeIdField: l, globalIdField: u, datesInUnknownTimezone: o, orderBy: c, subtypeField: d, refreshInterval: p } = t, y = t.fieldsIndex.toJSON(), m = y.fields, w = C(t), E = t.timeInfo?.toJSON(), R = t.spatialReference.toJSON(), O = t.types?.map((J) => J.toJSON()), I = re(this.layer.parsedUrl);
    this.layer.dynamicDataSource && (I.query = { layer: JSON.stringify({ source: this.layer.dynamicDataSource }) });
    let ae = this.layer.objectIdField;
    if (c?.length) {
      const J = !c[0].valueExpression && c[0].field;
      J && (ae = J);
    }
    const tt = a?.lastEditDate == null && p > 0, ze = g("featurelayer-snapshot-enabled") && t.geometryType === "point" && s?.query.supportsPagination && !s?.operations.supportsEditing && !tt, it = ze && Oe(e, t.fullExtent);
    return { type: "feature-service", source: I, isSourceHosted: ye(I.path), orderByFields: ae, metadata: { typeIdField: l ?? void 0, types: O, timeReferenceUnknownClient: o, subtypeField: d, globalIdField: u, fields: m, fieldsIndex: y, geometryType: w, objectIdField: n, timeInfo: E, spatialReference: R, subtypes: this.layer.subtypes?.map((J) => J.toJSON()) }, queryMetadata: { capabilities: s, effectiveCapabilities: r, lastEditDate: a?.lastEditDate?.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: ze, supportsSnapshotMaxThreshold: it, snapshotCountThresholds: { min: g("featurelayer-snapshot-point-min-threshold"), max: g("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e, t, r) {
    const { definitionExpression: s, customParameters: a, gdbVersion: n, historicMoment: l, subtypeCode: u, subtypeField: o, timeExtent: c, apiKey: d } = this.layer;
    return L(e, { definitionExpression: s, customParameters: a, gdbVersion: n, historicMoment: l, subtypeCode: u, subtypeField: o, timeExtent: c }, t, r, d);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: l, labelsVisible: u, orderBy: o, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: V(this.layer, t), geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: c, orderBy: o ?? "default" };
    return B(e, t, d, r);
  }
  get hasRequiredSupport() {
    return q(this.layer.renderer);
  }
  hasFilters(e) {
    return Q(this.layer, e);
  }
  addFilters(e, t) {
    return $e(this.layer, e, t);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s, gdbVersion: a, apiKey: n, subtypeCode: l } = t, u = this.layer.labelsVisible ? this.layer.labelingInfo : null, o = t.historicMoment?.getTime() ?? void 0, c = JSON.stringify(t.customParameters), d = V(t, e)?.toJSON(), p = JSON.stringify(t.orderBy);
    return { apiKey: n, customParameters: c, definitionExpression: r, featureReduction: d, floors: Q(this.layer, e) ? e.floors : null, gdbVersion: a, historicMoment: o, labelingInfo: u, orderBy: p, renderer: s, subtypeCode: l };
  }
};
function Bi(i) {
  if (!("openPorts" in i)) throw new z("source-not-supported");
}
class je {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = Z(t, e) ?? M(t);
    return [{ vvEvaluators: { 0: U(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, r = P(t), { capabilities: s, objectIdField: a } = t, n = t.fieldsIndex.toJSON(), l = C(t), u = t.timeInfo?.toJSON(), o = t.spatialReference.toJSON();
    return Bi(t.source), { type: "memory", source: await t.source.openPorts(), orderByFields: a, metadata: { fieldsIndex: n, geometryType: l, objectIdField: a, timeInfo: u, spatialReference: o, subtypes: null, subtypeField: null, globalIdField: null, typeIdField: null, types: null, timeReferenceUnknownClient: null }, queryMetadata: { capabilities: s, effectiveCapabilities: r, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e, t, r) {
    const { definitionExpression: s, timeExtent: a } = this.layer;
    return L(e, { definitionExpression: s, timeExtent: a, customParameters: null }, t, r, null);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: l, labelsVisible: u, orderBy: o, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: V(this.layer, t), geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: c, orderBy: o ?? "default" };
    return B(e, t, d, r);
  }
  get hasRequiredSupport() {
    return q(this.layer.renderer);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null, n = V(t, e)?.toJSON();
    return { orderBy: JSON.stringify(t.orderBy), definitionExpression: r, renderer: s, labelingInfo: a, featureReduction: n };
  }
}
let Ji = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = Z(t, e) ?? M(t);
    return [{ vvEvaluators: { 0: U(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, r = P(t), { capabilities: s, objectIdField: a } = t, n = t.fieldsIndex.toJSON(), l = C(t), u = t.spatialReference.toJSON();
    return { type: "memory", source: await t.source.openPorts(), orderByFields: a, metadata: { fieldsIndex: n, geometryType: l, objectIdField: a, spatialReference: u, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: null, timeReferenceUnknownClient: null, typeIdField: null, types: null }, queryMetadata: { capabilities: s, effectiveCapabilities: r, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e, t, r) {
    const { definitionExpression: s } = this.layer;
    return L(e, { definitionExpression: s, customParameters: null }, t, r, null);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: o } = this.layer, c = { fields: s.map((d) => d.toJSON()), renderer: a?.clone(), featureReduction: V(this.layer, t), geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: o, orderBy: "default" };
    return B(e, t, c, r);
  }
  get hasRequiredSupport() {
    return q(this.layer.renderer);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null, n = V(t, e)?.toJSON();
    return { definitionExpression: r, renderer: s, labelingInfo: a, featureReduction: n };
  }
}, Di = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = Z(t, e) ?? M(t);
    return [{ vvEvaluators: { 0: U(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, r = P(t), { capabilities: s, objectIdField: a } = t, n = t.fieldsIndex.toJSON(), l = C(t), u = t.timeInfo?.toJSON(), o = t.spatialReference.toJSON(), c = t.source.getSource(), d = this.layer.objectIdField, p = re(s);
    return p.query.maxRecordCount = c.maxRecordCount, { type: "ogc", source: c, orderByFields: d, metadata: { fieldsIndex: n, geometryType: l, objectIdField: a, timeInfo: u, spatialReference: o, globalIdField: null, subtypeField: null, subtypes: null, timeReferenceUnknownClient: null, typeIdField: null, types: null }, queryMetadata: { capabilities: p, effectiveCapabilities: r, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e, t, r) {
    const { customParameters: s, timeExtent: a, apiKey: n } = this.layer;
    return L(e, { customParameters: s, timeExtent: a }, t, r, n);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: l, labelsVisible: u, orderBy: o, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: V(this.layer, t), geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: c, orderBy: o ?? "default" };
    return B(e, t, d, r);
  }
  get hasRequiredSupport() {
    return q(this.layer.renderer);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { renderer: r, apiKey: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null, n = JSON.stringify(t.customParameters), l = V(t, e)?.toJSON();
    return { apiKey: s, customParameters: n, featureReduction: l, labelingInfo: a, orderBy: JSON.stringify(t.orderBy), renderer: r };
  }
}, ji = class {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = Z(t, e) ?? M(t);
    return [{ vvEvaluators: { 0: U(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, r = P(t), { capabilities: s, objectIdField: a, globalIdField: n, orderBy: l, refreshInterval: u } = t, o = t.fieldsIndex.toJSON(), c = o.fields, d = C(t), p = t.timeInfo?.toJSON(), y = t.spatialReference.toJSON(), m = re(this.layer.parsedUrl);
    let w = this.layer.objectIdField;
    if (l?.length) {
      const I = !l[0].valueExpression && l[0].field;
      I && (w = I);
    }
    const E = u > 0, R = g("featurelayer-snapshot-enabled") && t.geometryType === "point" && s?.query.supportsPagination && !s?.operations.supportsEditing && !E, O = R && Oe(e, t.fullExtent);
    return { type: "feature-service", source: m, isSourceHosted: ye(m.path), orderByFields: w, metadata: { globalIdField: n, fields: c, fieldsIndex: o, geometryType: d, objectIdField: a, timeInfo: p, spatialReference: y, timeReferenceUnknownClient: !1, subtypeField: null, subtypes: null, typeIdField: null, types: null }, queryMetadata: { capabilities: s, effectiveCapabilities: r, lastEditDate: null, snapshotInfo: { supportsSnapshotMinThreshold: R, supportsSnapshotMaxThreshold: O, snapshotCountThresholds: { min: g("featurelayer-snapshot-point-min-threshold"), max: g("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e, t, r) {
    const { definitionExpression: s, customParameters: a, timeExtent: n } = this.layer;
    return L(e, { definitionExpression: s, customParameters: a, timeExtent: n }, t, r, null);
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: l, labelsVisible: u, orderBy: o, objectIdField: c } = this.layer, d = { fields: s.map((p) => p.toJSON()), renderer: a?.clone(), featureReduction: V(this.layer, t), geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: c, orderBy: o ?? "default" };
    return B(e, t, d, r);
  }
  get hasRequiredSupport() {
    return q(this.layer.renderer);
  }
  hasFilters(e) {
    return Q(this.layer, e);
  }
  addFilters(e, t) {
    return $e(this.layer, e, t);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null, n = JSON.stringify(t.customParameters), l = V(t, e)?.toJSON();
    return { orderBy: JSON.stringify(t.orderBy), definitionExpression: r, renderer: s, labelingInfo: a, featureReduction: l, customParameters: n, floors: Q(this.layer, e) ? e.floors : null };
  }
};
class Hi {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    const t = this.layer, r = Z(t, e) ?? M(t);
    return [{ vvEvaluators: { 0: U(t.renderer) }, deconflictionEnabled: r }];
  }
  async createServiceOptions(e) {
    const t = this.layer, { objectIdField: r } = t, s = C(t), a = t.timeInfo?.toJSON() || null, n = t.spatialReference ? t.spatialReference.toJSON() : null;
    return { source: this.layer.parsedUrl, metadata: { fieldsIndex: this.layer.fieldsIndex.toJSON(), geometryType: s, objectIdField: r, timeInfo: a, timeReferenceUnknownClient: null, spatialReference: n, subtypeField: null, subtypes: null, globalIdField: null, typeIdField: null, types: null } };
  }
  createSourceSchema(e, t, r) {
    const { definitionExpression: s, geometryDefinition: a, customParameters: n } = this.layer;
    return { type: "stream", service: e, tileInfoJSON: t.tileInfoJSON, mutable: { sourceRefreshVersion: r, availableFields: t.availableFields, dataFilter: { geometryDefinition: a?.toJSON(), definitionExpression: s, outSpatialReference: t.outSpatialReference.toJSON(), customParameters: n ?? null, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, purgeOptions: this.layer.purgeOptions.toJSON() } } };
  }
  createProcessorSchema(e, t, r) {
    const { fields: s, renderer: a, geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: o } = this.layer, c = { fields: s.map((d) => d.toJSON()), renderer: a?.clone(), featureReduction: V(this.layer, t), geometryType: n, labelingInfo: l, labelsVisible: u, objectIdField: o, orderBy: "default" };
    return B(e, t, c, r);
  }
  get hasRequiredSupport() {
    return q(this.layer.renderer);
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, renderer: s } = t, a = this.layer.labelsVisible ? this.layer.labelingInfo : null, n = JSON.stringify(t.customParameters), l = V(t, e)?.toJSON();
    return { definitionExpression: r, renderer: s, labelingInfo: a, featureReduction: l, customParameters: n, streamFilter: `${JSON.stringify(t.geometryDefinition)}${t.definitionExpression}` };
  }
}
async function Qi(i, { subtypeField: e, sublayers: t }) {
  const r = await Promise.all(t.map(({ renderer: s }) => te(i, s)));
  return { type: "subtype", subtypeField: e, renderers: t.reduce((s, { subtypeCode: a }, n) => ({ ...s, [a]: r[n] }), {}) };
}
function Gi(i, e) {
  const t = mt();
  return { type: "subtype", filters: i.filters, capabilities: { maxTextureSize: t.maxTextureSize }, subtypeField: e.subtypeField, target: "feature", bindings: e.sublayers.reduce((r, { renderer: s, subtypeCode: a }) => ({ ...r, [a]: jt(s) }), {}) };
}
async function Ki(i, { subtypeField: e, sublayers: t }) {
  const r = await Promise.all(t.map((s) => {
    const a = F(s.renderer), n = { ...s, geometryType: s.geometryType ?? null };
    return ee(i, n, a);
  }));
  return { type: "subtype", subtypeField: e, renderers: t.reduce((s, { subtypeCode: a }, n) => ({ ...s, [a]: r[n] }), {}) };
}
async function Zi(i, e, t, r) {
  return { storage: Gi(e, t), mesh: { displayRefreshVersion: r, strategy: { type: "feature" }, factory: { symbology: await Qi(i, t), labels: await Ki(i, t) }, sortKey: null, timeZone: e.timeZone } };
}
class Wi {
  constructor(e) {
    this.layer = e;
  }
  getLabelingDeconflictionInfo(e) {
    return [{ vvEvaluators: {}, deconflictionEnabled: this.layer.sublayers.every((t) => M(t)) }];
  }
  async createServiceOptions(e) {
    const t = this.layer, r = P(t), { capabilities: s, datesInUnknownTimezone: a, editingInfo: n, globalIdField: l, objectIdField: u, refreshInterval: o, subtypeField: c } = t, d = t.fieldsIndex.toJSON(), p = C(t), y = t.timeInfo?.toJSON(), m = t.spatialReference.toJSON(), w = re(this.layer.parsedUrl), E = u, R = n?.lastEditDate == null && o > 0, O = g("featurelayer-snapshot-enabled") && t.geometryType === "point" && s?.query.supportsPagination && !s?.operations.supportsEditing && !R, I = O && Oe(e, t.fullExtent);
    return { type: "feature-service", source: w, isSourceHosted: ye(w.path), orderByFields: E, metadata: { timeReferenceUnknownClient: a, subtypeField: c, globalIdField: l, fieldsIndex: d, geometryType: p, objectIdField: u, timeInfo: y, spatialReference: m, subtypes: this.layer.subtypes?.map((ae) => ae.toJSON()), typeIdField: null, types: null }, queryMetadata: { capabilities: s, effectiveCapabilities: r, lastEditDate: n?.lastEditDate?.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: O, supportsSnapshotMaxThreshold: I, snapshotCountThresholds: { min: g("featurelayer-snapshot-point-min-threshold"), max: g("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e, t, r) {
    const { definitionExpression: s, customParameters: a, gdbVersion: n, historicMoment: l, subtypeField: u, timeExtent: o, apiKey: c } = this.layer, d = this.layer.sublayers.map((m) => m.subtypeCode).join(","), p = this.layer.sublayers.length ? `${this.layer.subtypeField} IN (${d})` : "1=2", y = { definitionExpression: pe(s, p), customParameters: a, gdbVersion: n, historicMoment: l, subtypeField: u, timeExtent: o };
    return L(e, y, t, r, c);
  }
  createProcessorSchema(e, t, r) {
    const s = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers, (a) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: a.labelingInfo, labelsVisible: a.labelsVisible, renderer: a.renderer, subtypeCode: a.subtypeCode, orderBy: null })) };
    return Zi(e, t, s, r);
  }
  hasFilters(e) {
    return Q(this.layer, e) || Xi(this.layer, e);
  }
  addFilters(e, t) {
    e = $e(this.layer, e, t);
    const r = this.layer.sublayers.filter((a) => !et(a, t)).map((a) => a.subtypeCode);
    if (!r.length) return e;
    e ??= new X();
    const s = `NOT ${this.layer.subtypeField} IN (${r.join(",")})`;
    return e.where = pe(e.where, s), e;
  }
  get hasRequiredSupport() {
    return !0;
  }
  getUpdateHashProperties(e) {
    const t = this.layer, { definitionExpression: r, gdbVersion: s, apiKey: a } = t, n = t.historicMoment?.getTime() ?? void 0, l = JSON.stringify(t.customParameters), u = Q(this.layer, e) ? e.floors : null;
    return { gdbVersion: s, definitionExpression: r, historicMoment: n, customParameters: l, apiKey: a, sublayerHash: "sublayers" in this.layer && this.layer.sublayers.items.reduce((o, c) => o + `${c.visible ? 1 : 0}.${JSON.stringify(c.renderer)}.${c.labelsVisible}
.${JSON.stringify(c.labelingInfo)}`, ""), floors: u };
  }
  setGraphicOrigin(e) {
    const t = this.layer.fieldsIndex.get(this.layer.subtypeField), r = e.attributes[t.name], s = this.layer.sublayers.find((a) => a.subtypeCode === r);
    e.layer = e.sourceLayer = s;
  }
}
function Xi(i, e) {
  return i.sublayers.some((t) => !et(t, e));
}
function et(i, e) {
  return i.visible && (i.minScale === 0 || Te(e.scale, i.minScale) || e.scale < i.minScale) && (i.maxScale === 0 || Te(e.scale, i.maxScale) || e.scale > i.maxScale);
}
async function b(i, e) {
  try {
    return await i;
  } catch (t) {
    if (t.name !== "no-queryEngine") throw t;
    return e;
  }
}
function j(i, e) {
  const t = /* @__PURE__ */ new Set();
  for (const r of i instanceof Set ? i.values() : i.keys()) e.has(r) || t.add(r);
  return t;
}
class Yi {
  constructor(e) {
    this.version = e;
  }
}
class er {
  constructor(e) {
    this._subscriptions = /* @__PURE__ */ new Map(), this._visible = /* @__PURE__ */ new Set(), this._paused = /* @__PURE__ */ new Set(), this._version = 0, this._config = e;
  }
  destroy() {
  }
  get _coverageSet() {
    const e = this._coverage ? Array.from(this._coverage.keys()).map((t) => t.id) : [];
    return new Set(e);
  }
  suspend() {
    this._suspendedOverage = this._coverage, this._coverage = null, this._updateSubscriptions();
  }
  resume() {
    this._coverage == null && (this._coverage = this._suspendedOverage, this._suspendedOverage = null, this._updateSubscriptions());
  }
  update(e) {
    return this._version = this._version + 1 % Number.MAX_SAFE_INTEGER, this._updateCoverage(e), this._updateSubscriptions(), new Set(this._visible);
  }
  _updateCoverage(e) {
    this._coverage = this._config.tileInfoView.getTileCoverage(e.state, 0, !0, "closest");
  }
  _updateSubscriptions() {
    const e = this._coverageSet, t = this._updateVisibility(), r = j(t, e), s = j(this._subscriptions, t), a = j(e, this._subscriptions), n = j(s, e), l = j(r, n), u = j(l, this._paused);
    this._visible = t;
    for (const o of a.values()) this._subscriptions.set(o, new Yi(this._version));
    for (const o of u.values()) this._paused.add(o);
    for (const o of n.values()) this._subscriptions.delete(o), this._paused.delete(o);
    (a.size || n.size || u.size) && this._sendUpdateSubscriptions(a, n, u);
  }
  _sendUpdateSubscriptions(e, t, r) {
    const s = Array.from(e.values()).map((a) => ({ tileId: a, version: this._subscriptions.get(a).version }));
    this._config.updateSubscriptions({ subscribe: s, unsubscribe: Array.from(t.values()), pause: Array.from(r.values()), tileInfoJSON: this._config.tileInfoView.tileInfo.toJSON() });
  }
  _updateVisibility() {
    const e = /* @__PURE__ */ new Set();
    if (!this._coverage) return e;
    for (const t of this._coverage.keys()) {
      if (this._config.isDone(t)) {
        e.add(t.id);
        continue;
      }
      this._addVisibleParent(e, t) || this._addVisibleChildren(e, t) || e.add(t.id);
    }
    return e;
  }
  _addVisibleParent(e, t) {
    let r = !1;
    for (const s of this._visible.values())
      new Ve(s).containsChild(t) && (e.add(s), r = !0);
    return r;
  }
  _addVisibleChildren(e, t) {
    let r = !1;
    for (const s of this._visible.values()) {
      const a = new Ve(s);
      t.containsChild(a) && (e.add(s), r = !0);
    }
    return r;
  }
}
const tr = (i) => {
  let e = class extends i {
    constructor(...t) {
      super(...t), this._updatingRequiredFieldsPromise = null, this.dataUpdating = !1, this.filter = null, this.timeExtent = null, this.layer = null, this.requiredFields = [], this.view = null;
    }
    initialize() {
      this.addHandles([Ie(() => {
        const t = this.layer;
        return [t && "elevationInfo" in t ? t.elevationInfo?.featureExpressionInfo : null, t && "displayField" in t ? t.displayField : null, t && "timeInfo" in t && t.timeInfo, t && "renderer" in t && t.renderer, t && "labelingInfo" in t && t.labelingInfo, t && "floorInfo" in t && t.floorInfo, this.filter, this.featureEffect, this.timeExtent];
      }, () => this._handleRequiredFieldsChange(), St), Ce(() => this.view?.floors, "change", () => this._handleRequiredFieldsChange()), Ce(() => {
        const t = this.layer;
        return t && "sublayers" in t ? t.sublayers : null;
      }, "change", () => this._handleRequiredFieldsChange())]);
    }
    get availableFields() {
      if (!this.layer) return [];
      const { layer: t, layer: { fieldsIndex: r }, requiredFields: s } = this;
      return "outFields" in t && t.outFields ? Ae(r, [...Pe(r, t.outFields), ...s]) : Ae(r, s);
    }
    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }
    set featureEffect(t) {
      this._override("featureEffect", t);
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(t) {
      N.getLogger(this).error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return !1;
    }
    highlight(t) {
      throw new Error("missing implementation");
    }
    createQuery() {
      const t = { outFields: ["*"], returnGeometry: !0, outSpatialReference: this.view.spatialReference }, r = this.filter != null ? this.filter.createQuery(t) : new he(t);
      if ("floorInfo" in this.layer && this.layer.floorInfo) {
        const s = Me(this);
        s != null && (r.where = r.where ? `(${r.where}) AND (${s})` : s);
      }
      return this.timeExtent != null && (r.timeExtent = r.timeExtent != null ? r.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), r;
    }
    createAggregateQuery() {
      const t = { outFields: ["*"], returnGeometry: !0, outSpatialReference: this.view.spatialReference };
      return new he(t);
    }
    queryFeatures(t, r) {
      throw new Error("missing implementation");
    }
    queryObjectIds(t, r) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(t, r) {
      throw new Error("missing implementation");
    }
    queryExtent(t, r) {
      throw new Error("missing implementation");
    }
    async fetchPopupFeaturesFromGraphics(t, r) {
      return this._validateFetchPopupFeatures(t, r), this._fetchPopupFeatures(t, r);
    }
    _loadArcadeModules(t) {
      return t.expressionInfos?.length || Array.isArray(t.content) && t.content.some((r) => r.type === "expression") ? vt() : Promise.resolve();
    }
    _handleRequiredFieldsChange() {
      const t = this._updateRequiredFields();
      this._set("_updatingRequiredFieldsPromise", t), t.then(() => {
        this._updatingRequiredFieldsPromise === t && this._set("_updatingRequiredFieldsPromise", null);
      });
    }
    async _updateRequiredFields() {
      if (!this.layer || !this.view) return;
      const t = this.view.type === "3d", { layer: r, layer: { fieldsIndex: s, objectIdField: a } } = this, n = "renderer" in r && r.renderer, l = "orderBy" in r && r.orderBy, u = "featureReduction" in r ? r.featureReduction : null, o = /* @__PURE__ */ new Set(), c = await Promise.allSettled([n ? n.collectRequiredFields(o, s) : null, Ne(o, r), t && "elevationInfo" in r ? _t(o, r) : null, this.filter != null ? ke(o, r, this.filter) : null, t || this.featureEffect == null ? null : ke(o, r, this.featureEffect.filter), !t && u ? wt(o, r, u) : null, !t && l ? Vt(o, r, l) : null]);
      if ("timeInfo" in r && r.timeInfo && this.timeExtent && ne(o, r.fieldsIndex, [r.timeInfo.startField, r.timeInfo.endField]), "floorInfo" in r && r.floorInfo && ne(o, r.fieldsIndex, [r.floorInfo.floorField]), r.type === "feature" && t && r.infoFor3D != null && (r.globalIdField == null && N.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"), ne(o, r.fieldsIndex, [r.globalIdField])), r.type === "subtype-group") {
        ge(o, s, r.subtypeField);
        const p = r.sublayers.map((y) => Promise.all([y.renderer?.collectRequiredFields(o, s), Ne(o, y)]));
        await Promise.allSettled(p);
      }
      r.type === "catalog-footprint" && ne(o, s, [r.parent.itemSourceField, r.parent.itemTypeField]);
      for (const p of c) p.status === "rejected" && N.getLogger(this).error(p.reason);
      ge(o, s, a), t && "displayField" in r && r.displayField && ge(o, s, r.displayField);
      const d = Array.from(o).sort();
      this._set("requiredFields", d);
    }
    _validateFetchPopupFeatures(t, r) {
      if (r != null) for (const s of t) {
        const a = s.origin && "layer" in s.origin ? s.origin.layer : s.layer;
        if ("popupEnabled" in a && !a.popupEnabled) throw new z("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: a });
        if (s.isAggregate) {
          const n = "featureReduction" in a ? a.featureReduction : null;
          if (!(n && "popupTemplate" in n && n.popupEnabled && n.popupTemplate)) throw new z("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: a });
        } else if ("popupTemplate" in a && !ve(a, r))
          throw new z("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: a });
      }
    }
    _popupFeatureHasRequiredFields(t, r) {
      return It(r, t);
    }
    async _fetchPopupFeatures(t, r) {
      const s = new Array(t.length), a = /* @__PURE__ */ new Map(), n = await this._createPopupQuery(t.map((l) => l.origin?.layer ?? l.layer), r);
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (u.isAggregate) {
          s[l] = u;
          continue;
        }
        const o = u.origin?.layer ?? u.layer;
        if (!o || !("popupEnabled" in o)) continue;
        const c = Pe(this.layer.fieldsIndex, n.outFields), d = ve(o, r);
        if (d == null) continue;
        const p = await this._loadArcadeModules(d);
        ce(r), p && p.arcadeUtils.hasGeometryOperations(d) || !this._popupFeatureHasRequiredFields(u, c) ? a.set(u.getObjectId(), { graphic: u, index: l }) : s[l] = u;
      }
      if (this.layer.type === "stream" || a.size === 0) return s.filter(Boolean);
      n.objectIds = Array.from(a.keys());
      try {
        const l = await this.layer.queryFeatures(n, r);
        for (const u of l.features) {
          const { graphic: { geometry: o, origin: c }, index: d } = a.get(u.getObjectId());
          u.geometry ||= o, u.origin = c, s[d] = u;
        }
      } catch {
      }
      return s.filter(Boolean);
    }
    async _createPopupQuery(t, r) {
      const s = this.layer.createQuery(), a = /* @__PURE__ */ new Set();
      let n = !1;
      const l = t ?? [this.layer];
      for (const u of l) {
        if (!("popupEnabled" in u)) continue;
        const o = ve(u, r);
        if (o == null) continue;
        const c = await this._loadArcadeModules(o);
        ce(r);
        const d = c && c.arcadeUtils.hasGeometryOperations(o);
        n = !(this.layer.geometryType !== "point" && !d);
        const p = await Gt(this.layer, o);
        ce(r);
        for (const y of p) a.add(y);
      }
      if (s.returnGeometry = n, s.returnZ = n, s.returnM = n, s.outFields = Array.from(a), s.outSpatialReference = this.view.spatialReference, "floorInfo" in this.layer && this.layer.floorInfo) {
        const u = Me(this);
        u != null && (s.where = s.where ? `(${s.where}) AND (${u})` : u);
      }
      return s;
    }
    canResume() {
      return !!super.canResume() && (this.timeExtent == null || !this.timeExtent.isEmpty);
    }
    getTest() {
      return { createPopupQuery: (t) => this._createPopupQuery(void 0, t) };
    }
    get test() {
      return this.getTest();
    }
  };
  return h([f()], e.prototype, "_updatingRequiredFieldsPromise", void 0), h([f({ readOnly: !0 })], e.prototype, "availableFields", null), h([f({ readOnly: !0 })], e.prototype, "dataUpdating", void 0), h([f({ type: gt })], e.prototype, "featureEffect", null), h([f({ type: X })], e.prototype, "filter", void 0), h([f(bt)], e.prototype, "timeExtent", void 0), h([f()], e.prototype, "layer", void 0), h([f({ type: Number })], e.prototype, "maximumNumberOfFeatures", null), h([f({ readOnly: !0, type: Boolean })], e.prototype, "maximumNumberOfFeaturesExceeded", null), h([f({ readOnly: !0 })], e.prototype, "requiredFields", void 0), h([f()], e.prototype, "suspended", void 0), h([f()], e.prototype, "view", void 0), e = h([G("esri.views.layers.FeatureLayerView")], e), e;
};
function ir(i, e) {
  const t = /* @__PURE__ */ new Set();
  return i && i.forEach((r) => t.add(r)), e && e.forEach((r) => t.add(r)), t.has("*") ? ["*"] : Array.from(t);
}
const rr = "esri.views.2d.layers.FeatureLayerView2D", He = 4294967294;
let S = class extends tr(Kt(Mt(Nt))) {
  constructor() {
    super(...arguments), this._commandsQueue = new Ht({ process: (i) => {
      switch (i.type) {
        case "processed-edit":
          return this._doEdit(i);
        case "update":
          return this._doUpdate();
      }
    } }), this._visibilityOverrides = /* @__PURE__ */ new Set(), this._highlightCounter = new Qt(), this._updateHighlight = xt(async () => {
      const i = [];
      for (const e of this._highlightCounter.ids()) {
        const t = this._highlightCounter.getHighestReason(e), r = Pt(t);
        i.push({ objectId: e, highlightFlags: r });
      }
      this._worker.pipeline.updateHighlight({ highlights: i });
    }), this._lastAvailableFields = [], this.eventLog = new $(), this._sourceRefreshVersion = 1, this._displayRefreshVersion = 1, this._pipelineUpdating = !1, this._fields = null, this.featureEffectView = new Zt();
  }
  destroy() {
    this._worker?.destroy(), this._commandsQueue.destroy();
  }
  initialize() {
    this.addResolvingPromise(this._initProxy()), this.featureEffectView.featureEffect = this.featureEffect, this.featureEffectView.endTransitions();
  }
  async _initProxy() {
    const i = this.layer;
    if ("isTable" in i && i.isTable) throw new z("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: i });
    if (i.geometryType === "mesh") throw new z("featurelayerview:geometry-type-not-supported", `Geometry type of ${i.geometryType} is not supported`, { layer: i });
    if ((i.type === "feature" || i.type === "subtype-group") && P(i)?.operations.supportsQuery === !1) throw new z("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: i });
    this._worker && this._worker.destroy();
    const e = this._createClientOptions();
    this._worker = await ii(e);
  }
  get hasAllFeatures() {
    return this.layer.visible && this.eventLog.hasAllFeatures;
  }
  get hasAllFeaturesInView() {
    return this.layer.visible && this.eventLog.hasAllFeaturesInView;
  }
  get hasFullGeometries() {
    return this.layer.visible && this.eventLog.hasFullGeometries;
  }
  get labelingCollisionInfos() {
    const i = this.layerAdapter.getLabelingDeconflictionInfo(this.view), e = this.layer.geometryType, t = !this.suspended;
    return i.map(({ vvEvaluators: r, deconflictionEnabled: s }) => ({ container: this.featureContainer, vvEvaluators: r, deconflictionEnabled: s, geometryType: e, visible: t }));
  }
  get layerAdapter() {
    switch (this.layer.type) {
      case "feature":
        return this.layer.source.type === "memory" ? new je(this.layer) : new Li(this.layer);
      case "geojson":
      case "csv":
      case "wfs":
        return new je(this.layer);
      case "subtype-group":
        return new Wi(this.layer);
      case "ogc-feature":
        return new Di(this.layer);
      case "stream":
        return new Hi(this.layer);
      case "oriented-imagery":
        return new ji(this.layer);
      case "knowledge-graph-sublayer":
        return new Ji(this.layer);
      case "catalog-footprint":
        return new qi(this.layer);
      default:
        Et(this.layer);
    }
    return null;
  }
  get updateHash() {
    if (!this.layerAdapter) return null;
    const { availableFields: i, _displayRefreshVersion: e, timeExtent: t, clips: r, filter: s, featureEffect: a, _sourceRefreshVersion: n, view: { timeZone: l } } = this, u = JSON.stringify(r), o = a?.toJSON(), c = s?.toJSON();
    return JSON.stringify({ availableFields: i, clipsHash: u, displayRefreshVersion: e, effectHash: o, filterHash: c, sourceRefreshVersion: n, timeExtent: t, timeZone: l, ...this.layerAdapter.getUpdateHashProperties(this.view) });
  }
  getDisplayStatistics(i, e) {
    return this.featureContainer?.getDisplayStatistics(i, e);
  }
  async queryHeatmapStatistics(i) {
    return this._worker.pipeline.queryHeatmapStatistics(i);
  }
  highlight(i, e = "highlight") {
    let t;
    i instanceof _e ? t = [i.getObjectId()] : typeof i == "number" || typeof i == "string" ? t = [i] : Ft.isCollection(i) && i.length > 0 ? t = i.map((s) => s?.getObjectId()).toArray() : Array.isArray(i) && i.length > 0 && (t = typeof i[0] == "number" || typeof i[0] == "string" ? i : i.map((s) => s?.getObjectId()));
    const r = t?.filter(Rt);
    return r?.length ? (this._addHighlight(r, e), qe(() => this._removeHighlight(r, e))) : qe();
  }
  getHighlightIds() {
    return Array.from(this._highlightCounter.ids());
  }
  hasHighlight() {
    return !this._highlightCounter.empty;
  }
  async hitTest(i, e) {
    const t = await this.featureContainer.hitTest(e);
    if (t.length === 0) return null;
    const { features: r, aggregates: s } = await this._worker.pipeline.getDisplayFeatures(t), a = this.featureContainer.getSortKeys(t), n = ({ displayId: l }, { displayId: u }) => a.has(l) && a.has(u) ? a.get(l) - a.get(u) : l - u;
    return r.sort(n).reverse(), s.sort(n).reverse(), [...s.map((l) => this._createGraphicHit(i, Fe.fromJSON(l))), ...r.map((l) => this._createGraphicHit(i, _e.fromJSON(l)))];
  }
  queryStatistics() {
    return b(this._worker.pipeline.queryStatistics(), { featureCount: 0, ringCount: 0, vertexCount: 0 });
  }
  querySummaryStatistics(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.features.executeQueryForSummaryStatistics(this._cleanUpQuery(i), r, t);
    return b(s, {});
  }
  async queryAggregateSummaryStatistics(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.aggregates.executeQueryForSummaryStatistics(this._cleanUpAggregateQuery(i), r, t);
    return b(s, {});
  }
  async queryUniqueValues(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.features.executeQueryForUniqueValues(this._cleanUpQuery(i), r, t);
    return b(s, { uniqueValueInfos: [] });
  }
  async queryAggregateUniqueValues(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.aggregates.executeQueryForUniqueValues(this._cleanUpAggregateQuery(i), r, t);
    return b(s, { uniqueValueInfos: [] });
  }
  async queryClassBreaks(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.features.executeQueryForClassBreaks(this._cleanUpQuery(i), r, t);
    return b(s, { classBreakInfos: [] });
  }
  async queryAggregateClassBreaks(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.aggregates.executeQueryForClassBreaks(this._cleanUpAggregateQuery(i), r, t);
    return b(s, { classBreakInfos: [] });
  }
  async queryHistogram(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.features.executeQueryForHistogram(this._cleanUpQuery(i), r, t);
    return b(s, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  async queryAggregateHistogram(i, e, t) {
    const r = { ...e, scale: this.view.scale }, s = this._worker.aggregates.executeQueryForHistogram(this._cleanUpAggregateQuery(i), r, t);
    return b(s, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  queryFeatures(i, e) {
    return this.queryFeaturesJSON(i, e).then((t) => {
      const r = we.fromJSON(t);
      return r.features.forEach((s) => this._setLayersForFeature(s)), r;
    });
  }
  async queryVisibleFeatures(i, e) {
    const t = this._worker.pipeline.queryVisibleFeatures(this._cleanUpQuery(i), e), r = await b(t, { features: [] }), s = we.fromJSON(r);
    return s.features.forEach((a) => this._setLayersForFeature(a)), s;
  }
  async queryAggregates(i, e) {
    const t = this._worker.aggregates.executeQuery(this._cleanUpAggregateQuery(i), e), r = await b(t, { features: [] }), s = Wt.fromJSON(r);
    return s.features.forEach((a) => this._setLayersForFeature(a)), s;
  }
  queryAggregateIds(i, e) {
    const t = this._worker.aggregates.executeQueryForIds(this._cleanUpAggregateQuery(i), e);
    return b(t, []);
  }
  queryAggregateCount(i, e) {
    const t = this._worker.aggregates.executeQueryForCount(this._cleanUpAggregateQuery(i), e);
    return b(t, 0);
  }
  queryAggregateJSON(i, e) {
    const t = this._worker.aggregates.executeQuery(this._cleanUpAggregateQuery(i), e);
    return b(t, { features: [] });
  }
  async queryFeaturesJSON(i, e) {
    const t = this._worker.features.executeQuery(this._cleanUpQuery(i), e);
    return b(t, { features: [] });
  }
  queryObjectIds(i, e) {
    const t = this._worker.features.executeQueryForIds(this._cleanUpQuery(i), e);
    return b(t, []);
  }
  queryFeatureCount(i, e) {
    const t = this._worker.features.executeQueryForCount(this._cleanUpQuery(i), e);
    return b(t, 0);
  }
  async queryExtent(i, e) {
    const t = this._worker.features.executeQueryForExtent(this._cleanUpQuery(i), e), r = await b(t, { count: 0, extent: null });
    return { count: r.count, extent: Ot.fromJSON(r.extent) };
  }
  async getSampleFeatures(i) {
    return this._worker.pipeline.getSampleFeatures(i);
  }
  setVisibility(i, e) {
    e ? this._visibilityOverrides.delete(i) : this._visibilityOverrides.add(i), this._update();
  }
  update(i) {
    if (!this._subscriptionManager) return;
    const e = this._subscriptionManager.update(i);
    this.featureContainer.setVisibleTiles(e);
  }
  attach() {
    g("esri-2d-update-debug") && console.debug("FeatureLayerView2D.attach"), this.featureContainer = new ti(this), this.container.addChild(this.featureContainer), this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._subscriptionManager = new er({ tileInfoView: this.view.featuresTilingScheme, updateSubscriptions: (i) => {
      this.featureContainer.updateSubscriptions(i), this._worker.pipeline.updateSubscriptions(i);
    }, isDone: (i) => this.featureContainer.isDone(i) }), this.requestUpdate(), this.addAttachHandles([Ie(() => this.updateHash, () => this._update(), $t), Ie(() => this.updateSuspended, (i) => {
      i || this._subscriptionManager.resume();
    })]), this.layer.type !== "stream" && this.layer.type !== "catalog-footprint" && this.addAttachHandles(this.layer.on("edits", (i) => this._edit(i)));
  }
  detach() {
    g("esri-2d-update-debug") && console.debug("FeatureLayerView2D.detach"), this._fields = null, this.featureContainer.destroy(), this._commandsQueue.clear(), this.container.removeAllChildren(), this._subscriptionManager = zt(this._subscriptionManager), this._worker.pipeline.onDetach();
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
  isUpdating() {
    const i = "renderer" in this.layer && this.layer.renderer != null, e = this._commandsQueue.updateTracking.updating, t = this._updatingRequiredFieldsPromise != null, r = this.featureContainer.updatingHandles.updating, s = i && (e || t) || r || this._pipelineUpdating || this.dataUpdating;
    if (g("esri-2d-log-updating")) {
      console.log(`Updating FLV2D (${this.layer.id}): ${s}
  -> hasRenderer ${i}
  -> updatingRequiredFields ${t}
  -> hasPendingCommand ${e}
  -> dataUpdating ${this.dataUpdating}
  -> processing ${this._pipelineUpdating}
  -> updatingContainer ${r}
`);
      for (const a of this.featureContainer.subscriptions()) console.log(`    -> Tile[${a.id}] Done: ${a.done}`);
    }
    return s;
  }
  _createClientOptions() {
    const i = this;
    return { get container() {
      return i.featureContainer;
    }, setUpdating: (e) => {
      this._set("_pipelineUpdating", e.pipeline), this._set("dataUpdating", e.data);
    }, emitEvent: (e) => {
      this.emit(e.name, e.event);
    }, get eventLog() {
      return i.eventLog;
    }, fetch: (e) => Promise.all(e.map((t) => i.view.stage.painter.textureManager.rasterizeItem(t))), fetchDictionary: (e) => Promise.all(e.map((t) => this._fetchDictionaryRequest(t))) };
  }
  async _fetchDictionaryRequest(i) {
    try {
      if (this.layer.type === "subtype-group") throw new Error("InternalError: SubtypeGroupLayer does not support dictionary renderer");
      const e = this.layer.renderer;
      if (!e || e.type !== "dictionary") throw new Error("InternalError: Expected layer to have a DictionaryRenderer");
      const t = this._lastSchema.processor.mesh.factory.symbology;
      if (t.type !== "dictionary") throw new Error("InternalError: Expected schema to be of type 'dictionary'");
      const r = { cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, store: this.featureContainer.instanceStore, scaleExpression: t.scaleExpression };
      this._fields || (this._fields = this.layer.fields.map((n) => n.toJSON()));
      const s = t.visualVariableUniforms, a = await e.getSymbolAsync(i.feature, { fields: this._fields });
      return !a || !a.data ? { type: "dictionary-response", meshes: [] } : { type: "dictionary-response", meshes: await fe(a.data, { uniforms: s, path: "renderer", schemaOptions: r }) };
    } catch {
      return { type: "dictionary-response", meshes: [] };
    }
  }
  _cleanUpQuery(i) {
    const e = he.from(i) || this.createQuery();
    return e.outSpatialReference || (e.outSpatialReference = this.view.spatialReference), e.toJSON();
  }
  _cleanUpAggregateQuery(i) {
    const e = he.from(i) || this.createAggregateQuery();
    e.outSpatialReference || (e.outSpatialReference = this.view.spatialReference);
    const t = e.objectIds ?? [];
    for (const r of e.aggregateIds ?? []) t.push(r);
    return e.objectIds = t, e.aggregateIds = [], e.toJSON();
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  async _edit(i) {
    return this.updateSuspended ? void this._subscriptionManager.suspend() : this._validateEdit(i) ? this._commandsQueue.push({ type: "edit", edits: i }).catch(Tt) : void 0;
  }
  async doRefresh(i) {
    this.attached && (this.updateSuspended && i || (i ? this.incrementSourceRefreshVersion() : this.incrementDisplayRefreshVersion()));
  }
  incrementSourceRefreshVersion() {
    this._sourceRefreshVersion = (this._sourceRefreshVersion + 1) % He + 1;
  }
  incrementDisplayRefreshVersion() {
    this._displayRefreshVersion = (this._displayRefreshVersion + 1) % He + 1;
  }
  _validateEdit(i) {
    const e = "globalIdField" in this.layer && this.layer.globalIdField, t = i.deletedFeatures.some((s) => s.objectId === -1 || !s.objectId), r = e && this.availableFields.includes(e);
    return t && !r ? (N.getLogger(this).error(new z("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${e} to be included the layer's outFields for updates to be reflected on the map`)), null) : i;
  }
  async _doUpdate() {
    "featureReduction" in this.layer && this.layer.featureReduction && this.layer.featureReduction !== this._lastFeatureReduction && (this.layer.featureReduction = this.layer.featureReduction?.clone(), this._lastFeatureReduction = this.layer.featureReduction);
    try {
      if (await this._updateRequiredFields(), this.destroyed || !this.layerAdapter?.hasRequiredSupport || !this._subscriptionManager) return;
      const i = this.featureContainer.instanceStore;
      this.featureContainer.attributeView.lockTextureUploads(), i.updateStart();
      const e = this.featureEffect, t = { store: i, cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, scaleExpression: void 0 }, r = await this.layerAdapter.createServiceOptions(this.view), s = this._createViewSchemaConfig(), a = { source: this.layerAdapter.createSourceSchema(r, s, this._sourceRefreshVersion), processor: await this.layerAdapter.createProcessorSchema(t, s, this._displayRefreshVersion) }, n = !!Ue(this._lastSchema?.source.mutable, a.source.mutable) || !!Ue(this._lastSchema?.processor, a.processor);
      if (!n) return this.featureContainer.requestRender(), this.featureContainer.attributeView.unlockTextureUploads(), i.updateEnd(), void (this.featureEffectView.featureEffect = e);
      this._lastSchema = a, this._fields = null;
      const l = Math.round(performance.now());
      g("esri-2d-update-debug") && console.debug(`Id[${this.layer.uid}] Version[${l}] FeatureLayerView2D._doUpdate`, { changes: n });
      let u = [];
      Array.isArray(r.source) && (u = r.source), await this._worker.pipeline.updateSchema(a, l, { transferList: u }), i.updateEnd(), this.featureEffectView.featureEffect = e, this.featureEffectView.endTransitions(), this.featureContainer.attributeView.unlockTextureUploads(), this.featureContainer.swapRenderState(), this.featureContainer.requestRender(), g("esri-2d-update-debug") && console.debug(`Version[${l}] FeatureLayerView2D.updateEnd`), this.requestUpdate();
    } catch (i) {
      g("esri-2d-update-debug") && console.error("Encountered an error during update", i);
    }
  }
  async _doEdit(i) {
    try {
      this.featureContainer.editStart(), await this._worker.pipeline.onEdits(i), this.featureContainer.editEnd();
    } catch (e) {
      be(e);
    }
  }
  get hasFilter() {
    const i = this.layerAdapter.hasFilters?.(this.view) ?? !1;
    return this.filter != null || this.timeExtent != null || this._visibilityOverrides.size > 0 || i;
  }
  _getEffectiveAvailableFields(i) {
    const e = ir(this._lastAvailableFields, i);
    return this._lastAvailableFields = e, Ct(this.layer.fieldsIndex, e);
  }
  _createViewSchemaConfig() {
    const i = [sr(this.view, this.layerAdapter, this.timeExtent, this._visibilityOverrides, this.filter), this.featureEffect?.filter?.toJSON() ?? null];
    return { availableFields: this._getEffectiveAvailableFields(this.availableFields), filters: i, outSpatialReference: this.view.spatialReference, tileInfoJSON: this.view.featuresTilingScheme.tileInfo.toJSON(), scale: this.view.scale, timeZone: this.view.timeZone };
  }
  _addHighlight(i, e) {
    this._highlightCounter.addReason(i, e), this._updateHighlight().catch((t) => {
      be(t) || N.getLogger(this).error(t);
    });
  }
  _removeHighlight(i, e) {
    this._highlightCounter.deleteReason(i, e), this._updateHighlight().catch((t) => {
      be(t) || N.getLogger(this).error(t);
    });
  }
  _setLayersForFeature(i) {
    i.layer = i.sourceLayer = this.layer, this.layerAdapter.setGraphicOrigin && this.layerAdapter.setGraphicOrigin(i);
  }
  _createGraphicHit(i, e) {
    return this._setLayersForFeature(e), e.geometry != null && (e.geometry.spatialReference = this.view.spatialReference), { type: "graphic", graphic: e, layer: this.layer, mapPoint: i };
  }
};
function sr(i, e, t, r, s) {
  s && (s = s.clone());
  const a = s != null ? s.timeExtent : null, n = t != null && a != null ? t.intersection(a) : t || a;
  n && (s ??= new X(), s.timeExtent = n), s = e.addFilters?.(s, i) ?? s;
  let l = s?.toJSON() ?? null;
  return r.size && (l ??= new X().toJSON(), l.hiddenIds = Array.from(r)), l;
}
h([f()], S.prototype, "_worker", void 0), h([f()], S.prototype, "_commandsQueue", void 0), h([f()], S.prototype, "_sourceRefreshVersion", void 0), h([f()], S.prototype, "_displayRefreshVersion", void 0), h([f({ readOnly: !0 })], S.prototype, "_pipelineUpdating", void 0), h([f({ readOnly: !0 })], S.prototype, "hasAllFeatures", null), h([f({ readOnly: !0 })], S.prototype, "hasAllFeaturesInView", null), h([f({ readOnly: !0 })], S.prototype, "hasFullGeometries", null), h([f()], S.prototype, "featureEffectView", void 0), h([f()], S.prototype, "labelingCollisionInfos", null), h([f()], S.prototype, "layerAdapter", null), h([f()], S.prototype, "updateHash", null), h([f()], S.prototype, "updating", void 0), S = h([G(rr)], S);
const ar = S, Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" }));
export {
  Mr as F,
  ar as X,
  b as n
};
//# sourceMappingURL=FeatureLayerView2D-D-xCCKX_.js.map
