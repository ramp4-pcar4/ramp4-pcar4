import { c as b } from "./WGLContainer-Dtu9wLrk.js";
import { t as ft } from "./CircularArray-DaBi-m_L.js";
import { af as ot, cR as wt, ay as x, dU as E, N as _, O as g, P as R, ni as ht, h5 as yt, ci as _t, fr as Mt, hx as bt, ct as pt, nj as H, a6 as Q, T as gt, nk as Y, nl as xt, cj as Tt, fu as st, nm as $t, nn as St, no as Ct, h3 as B, np as Dt, nq as nt, nr as Vt, ns as zt, b5 as q, nt as lt } from "./main-CmejC-so.js";
import { a as Et } from "./testSVGPremultipliedAlpha-CArXfaR6.js";
import { u as O, O as Rt, Q as Lt } from "./definitions-7ZaZRHRo.js";
import { t as It } from "./AttributeStore-BkIsDnkg.js";
import { e as At } from "./ProgramTemplate-p_8Syt13.js";
const ie = { shaders: { vertexShader: b("bitBlit/bitBlit.vert"), fragmentShader: b("bitBlit/bitBlit.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_tex", 1]]) }, se = { shaders: { vertexShader: b("stencil/stencil.vert"), fragmentShader: b("stencil/stencil.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) }, ne = { shaders: { vertexShader: b("highlight/textured.vert"), fragmentShader: b("highlight/highlight.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) }, oe = { shaders: { vertexShader: b("highlight/textured.vert"), fragmentShader: b("highlight/blur.frag") }, attributes: /* @__PURE__ */ new Map([["a_position", 0], ["a_texcoord", 1]]) }, w = ot("esri-2d-profiler");
let ae = class {
  constructor(t, e) {
    if (this._events = new wt(), this._entries = /* @__PURE__ */ new Map(), this._timings = new ft(10), this._currentContainer = null, this._currentPass = null, this._currentBrush = null, this._currentSummary = null, !w) return;
    this._ext = Et(t.gl, {}), this._debugOutput = e;
    const i = t.gl;
    if (!this.enableCommandLogging) return;
    let s;
    for (s in i) if (typeof i[s] == "function") {
      const n = i[s], a = s.includes("draw");
      i[s] = (...h) => (this._events.emit("command", { container: this._currentContainer, pass: this._currentPass, brush: this._currentBrush, method: s, args: h, isDrawCommand: a }), this._currentSummary && (this._currentSummary.commands++, a && this._currentSummary.drawCommands++), n.apply(i, h));
    }
  }
  get enableCommandLogging() {
    return !(typeof w == "object" && w.disableCommands);
  }
  recordContainerStart(t) {
    w && (this._currentContainer = t);
  }
  recordContainerEnd() {
    w && (this._currentContainer = null);
  }
  recordPassStart(t) {
    w && (this._currentPass = t, this._initSummary());
  }
  recordPassEnd() {
    w && (this._currentPass = null, this._emitSummary());
  }
  recordBrushStart(t) {
    w && (this._currentBrush = t);
  }
  recordBrushEnd() {
    w && (this._currentBrush = null);
  }
  recordStart(t) {
    if (w && this._ext != null) {
      if (this._entries.has(t)) {
        const i = this._entries.get(t), s = this._ext.resultAvailable(i.query), n = this._ext.disjoint();
        if (s && !n) {
          const a = this._ext.getResult(i.query) / 1e6;
          let h = 0;
          if (this._timings.enqueue(a) != null) {
            const l = this._timings.entries, p = l.length;
            let c = 0;
            for (const m of l) c += m;
            h = c / p;
          }
          const o = a.toFixed(2), u = h ? h.toFixed(2) : "--";
          this.enableCommandLogging ? (console.groupCollapsed(`Frame report for ${t}, ${o} ms (${u} last 10 avg)
${i.commandsLen} Commands (${i.drawCommands} draw)`), console.log("RenderPass breakdown: "), console.table(i.summaries), console.log("Commands: ", i.commands), console.groupEnd()) : console.log(`Frame report for ${t}, ${o} ms (${u} last 10 avg)`), this._debugOutput.innerHTML = `${o} (${u})`;
        }
        for (const a of i.handles) a.remove();
        this._ext.deleteQuery(i.query), this._entries.delete(t);
      }
      const e = { name: t, query: this._ext.createQuery(), commands: [], commandsLen: 0, drawCommands: 0, summaries: [], handles: [] };
      this.enableCommandLogging && (e.handles.push(this._events.on("command", (i) => {
        e.commandsLen++, e.commands.push(i), i.isDrawCommand && e.drawCommands++;
      })), e.handles.push(this._events.on("summary", (i) => {
        e.summaries.push(i);
      }))), this._ext.beginTimeElapsed(e.query), this._entries.set(t, e);
    }
  }
  recordEnd(t) {
    w && this._ext != null && this._entries.has(t) && this._ext.endTimeElapsed();
  }
  _initSummary() {
    this.enableCommandLogging && (this._currentSummary = { container: this._currentContainer, pass: this._currentPass, drawCommands: 0, commands: 0 });
  }
  _emitSummary() {
    this.enableCommandLogging && this._currentSummary && this._events.emit("summary", this._currentSummary);
  }
};
const y = 1, j = 0, k = 1, N = 2;
let Ft = class {
  constructor(t, e, i) {
    this._debugMap = /* @__PURE__ */ new Map(), this._width = t * i, this._height = e * i, this._pixelRatio = i;
    const s = Math.ceil(this._width / y), n = Math.ceil(this._height / y);
    this._cols = s, this._rows = n, this._cells = It.create(s * n);
  }
  insertMetrics(t) {
    this._markMetrics(t);
  }
  hasCollision(t) {
    let e = 0;
    for (const { computedX: i, computedY: s, width: n, height: a } of t.bounds) {
      const h = (n + O) * this._pixelRatio, o = (a + O) * this._pixelRatio;
      switch (this._collide(i, s, h, o)) {
        case N:
          return N;
        case k:
          e++;
      }
    }
    return e === t.bounds.length ? k : j;
  }
  getCellId(t, e) {
    return t + e * this._cols;
  }
  has(t) {
    return this._cells.has(t);
  }
  hasRange(t, e) {
    return this._cells.hasRange(t, e);
  }
  set(t) {
    this._cells.set(t);
  }
  setRange(t, e) {
    this._cells.setRange(t, e);
  }
  _collide(t, e, i, s) {
    const n = t - i / 2, a = e - s / 2, h = n + i, o = a + s;
    if (h < 0 || o < 0 || n > this._width || a > this._height) return k;
    const u = x(Math.floor(n / y), 0, this._cols), l = x(Math.floor(a / y), 0, this._rows), p = x(Math.ceil(h / y), 0, this._cols), c = x(Math.ceil(o / y), 0, this._rows);
    for (let m = l; m <= c; m++) for (let d = u; d <= p; d++) {
      const v = this.getCellId(d, m);
      if (this.has(v)) return N;
    }
    return j;
  }
  _mark(t, e, i, s, n) {
    const a = t - i / 2, h = e - s / 2, o = a + i, u = h + s, l = x(Math.floor(a / y), 0, this._cols), p = x(Math.floor(h / y), 0, this._rows), c = x(Math.ceil(o / y), 0, this._cols), m = x(Math.ceil(u / y), 0, this._rows);
    for (let d = p; d <= m; d++) for (let v = l; v <= c; v++) {
      const L = this.getCellId(v, d);
      this._debugMap.set(L, n), this.set(L);
    }
    return !1;
  }
  _markMetrics(t) {
    for (const { computedX: e, computedY: i, width: s, height: n } of t.bounds) {
      const a = (s + O) * this._pixelRatio, h = (n + O) * this._pixelRatio;
      this._mark(e, i, a, h, t.entityTexel);
    }
  }
};
const I = 254, U = 255, A = 0;
function C(r, t) {
  const e = r.children.slice();
  e.sort((i, s) => i.tileAge - s.tileAge), e.forEach((i) => {
    i.labelMetrics != null && i.isReady && t(i, i.labelMetrics);
  });
}
function ut(r, t) {
  return (!r.minScale || r.minScale >= t) && (!r.maxScale || r.maxScale <= t);
}
let Pt = class {
  run(t, e, i, s) {
    const n = [];
    for (let a = t.length - 1; a >= 0; a--) {
      const h = t[a];
      h.labelingCollisionInfos?.length && n.push(...h.labelingCollisionInfos);
    }
    ot("esri-2d-update-debug") && n.length && console.debug("CollisionEngine.run"), this._transformMetrics(n), this._runCollision(n, e, i, s);
    for (const a of n) a.container.requestRender();
  }
  _runCollision(t, e, i, s) {
    const [n, a] = e.state.size, h = new Ft(n, a, e.pixelRatio);
    for (const { container: o, deconflictionEnabled: u, visible: l } of t) {
      const p = o.attributeView;
      u ? l ? (this._prepare(o), this._collideVisible(h, o, i, s), this._collideInvisible(h, o)) : C(o, (c, m) => {
        for (const d of m) p.setLabelMinZoom(d.entityTexel, U);
      }) : C(o, (c, m) => {
        for (const d of m) ut(d, i) ? (p.setLabelMinZoom(d.entityTexel, A), l && h.insertMetrics(d)) : p.setLabelMinZoom(d.entityTexel, I);
      });
    }
  }
  _isFiltered(t, e, i) {
    const s = e.getFilterFlags(t), n = !i.hasFilter || !!(s & Rt), a = i.featureEffect == null || i.featureEffect.excludedLabelsVisible || !!(s & Lt);
    return !(n && a);
  }
  _prepare(t) {
    const e = t.attributeView, i = /* @__PURE__ */ new Set();
    C(t, (s, n) => {
      for (const a of n) {
        const h = a.entityTexel;
        if (!i.has(h)) {
          if (i.add(h), this._isFiltered(h, e, t.layerView)) {
            e.setLabelMinZoom(h, I);
            continue;
          }
          e.getLabelMinZoom(h) !== A ? e.setLabelMinZoom(h, U) : e.setLabelMinZoom(h, A);
        }
      }
    });
  }
  _collideVisible(t, e, i, s) {
    const n = e.attributeView, a = /* @__PURE__ */ new Set();
    C(e, (h, o) => {
      for (let u = 0; u < o.length; u++) {
        const l = o[u].entityTexel;
        if (a.has(l)) continue;
        if (h.key.level !== s) {
          n.setLabelMinZoom(l, I), a.add(l);
          continue;
        }
        if (!ut(o[u], i)) {
          n.setLabelMinZoom(l, I), a.add(l);
          continue;
        }
        if (n.getLabelMinZoom(l) !== 0) {
          a.add(l);
          continue;
        }
        let p = !1, c = !0;
        const m = u;
        let d = u;
        for (; d < o.length; d++) {
          const v = o[d];
          if (v.entityTexel !== l) break;
          if (!p)
            switch (t.hasCollision(v)) {
              case k:
                break;
              case N:
                p = !0, c = !1;
                break;
              case j:
                c = !1;
            }
        }
        if (!p) for (let v = m; v < d; v++) t.insertMetrics(o[v]);
        u = d - 1, c || (a.add(l), n.setLabelMinZoom(l, p ? I : A));
      }
    });
  }
  _collideInvisible(t, e) {
    const i = e.attributeView, s = /* @__PURE__ */ new Set();
    C(e, (n, a) => {
      for (let h = 0; h < a.length; h++) {
        const o = a[h].entityTexel;
        if (s.has(o)) continue;
        if (i.getLabelMinZoom(o) !== U) {
          s.add(o);
          continue;
        }
        let u = !1, l = !0;
        const p = h;
        let c = h;
        for (; c < a.length; c++) {
          const m = a[c];
          if (m.entityTexel !== o) break;
          if (!u)
            switch (t.hasCollision(m)) {
              case k:
                break;
              case N:
                u = !0, l = !1;
                break;
              case j:
                l = !1;
            }
        }
        if (!u) for (let m = p; m < c; m++) t.insertMetrics(a[m]);
        h = c - 1, l || (s.add(o), i.setLabelMinZoom(o, u ? U : A));
      }
    });
  }
  _transformMetrics(t) {
    for (const { container: e, geometryType: i, vvEvaluators: s } of t) C(e, (n, a) => {
      const h = e.attributeView, o = n.transforms.labelMat2d;
      o[4] = Math.round(o[4]), o[5] = Math.round(o[5]);
      const u = i === "polyline";
      for (const l of a) {
        const { entityTexel: p, anchorX: c, anchorY: m } = l;
        let d = l.referenceBounds?.size ?? 0;
        const v = s[0];
        if (v != null) {
          const f = v(h.getVVSize(p));
          d = isNaN(f) || f == null || f === 1 / 0 ? d : f;
        }
        const L = l.directionX * (d / 2), rt = l.directionY * (d / 2);
        for (const f of l.bounds) {
          let J = c, K = m;
          if (u) {
            let $ = J + f.x + L, S = K + f.y + rt;
            $ = o[0] * $ + o[2] * S + o[4], S = o[1] * $ + o[3] * S + o[5], f.computedX = Math.floor($), f.computedY = Math.floor(S);
          } else {
            J = o[0] * c + o[2] * m + o[4], K = o[1] * c + o[3] * m + o[5];
            const $ = J + f.x + L, S = K + f.y + rt;
            f.computedX = $, f.computedY = S;
          }
        }
      }
    });
  }
};
const Zt = 32;
let F = class extends E {
  constructor(t) {
    super(t), this._lastUpdate = 0, this.collisionEngine = new Pt(), this.lastUpdateId = -1, this.updateRequested = !1, this.view = null;
  }
  get updating() {
    return ot("esri-2d-log-updating") && console.log(`Updating LabelManager ${this.updateRequested}:
-> updateRequested: ${this.updateRequested}`), this.updateRequested;
  }
  update(t) {
    const e = performance.now();
    e - this._lastUpdate >= Zt ? (this._lastUpdate = e, this.doUpdate(t)) : this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  requestUpdate() {
    this.updateRequested || (this.updateRequested = !0, this.view?.requestUpdate());
  }
  processUpdate(t) {
    this.updateRequested && (this.updateRequested = !1, this.update(t));
  }
  doUpdate(t) {
    const e = this.view;
    if (e) try {
      const i = t.state.scale, s = e.featuresTilingScheme.getClosestInfoForScale(i).level;
      this.collisionEngine.run(e.allLayerViews.items, t, i, s);
    } catch {
    }
  }
};
_([g()], F.prototype, "updateRequested", void 0), _([g()], F.prototype, "updating", null), _([g()], F.prototype, "view", void 0), F = _([R("esri.views.2d.LabelManager")], F);
const G = "esri-zoom-box", X = { container: `${G}__container`, overlay: `${G}__overlay`, background: `${G}__overlay-background`, box: `${G}__outline` }, W = { zoom: "Shift", counter: "Ctrl" };
let P = class extends E {
  constructor(t) {
    super(t), this._container = null, this._overlay = null, this._backgroundShape = null, this._boxShape = null, this._box = { x: 0, y: 0, width: 0, height: 0 }, this._rafId = null, this._redraw = this._redraw.bind(this);
  }
  destroy() {
    this.view = null;
  }
  set view(t) {
    this.removeAllHandles(), this._destroyOverlay(), this._set("view", t), t && this.addHandles([t.on("drag", [W.zoom], (e) => this._handleDrag(e, 1), ht.INTERNAL), t.on("drag", [W.zoom, W.counter], (e) => this._handleDrag(e, -1), ht.INTERNAL)]);
  }
  _start() {
    this._createContainer(), this._createOverlay(), this.navigation.begin();
  }
  _update(t, e, i, s) {
    this._box.x = t, this._box.y = e, this._box.width = i, this._box.height = s, this._rafId || (this._rafId = requestAnimationFrame(this._redraw));
  }
  _end(t, e, i, s, n) {
    const a = this.view, h = a.toMap(yt(t + 0.5 * i, e + 0.5 * s));
    let o = Math.max(i / a.width, s / a.height);
    n === -1 && (o = 1 / o), this._destroyOverlay(), this.navigation.end(), a.goTo({ center: h, scale: a.scale * o });
  }
  _updateBox(t, e, i, s) {
    const n = this._boxShape;
    n.setAttributeNS(null, "x", "" + t), n.setAttributeNS(null, "y", "" + e), n.setAttributeNS(null, "width", "" + i), n.setAttributeNS(null, "height", "" + s), n.setAttributeNS(null, "class", X.box);
  }
  _updateBackground(t, e, i, s) {
    this._backgroundShape.setAttributeNS(null, "d", this._toSVGPath(t, e, i, s, this.view.width, this.view.height));
  }
  _createContainer() {
    const t = document.createElement("div");
    t.className = X.container, this.view.root.appendChild(t), this._container = t;
  }
  _createOverlay() {
    const t = this.view.width, e = this.view.height, i = document.createElementNS("http://www.w3.org/2000/svg", "path");
    i.setAttributeNS(null, "d", "M 0 0 L " + t + " 0 L " + t + " " + e + " L 0 " + e + " Z"), i.setAttributeNS(null, "class", X.background);
    const s = document.createElementNS("http://www.w3.org/2000/svg", "rect"), n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), n.setAttributeNS(null, "class", X.overlay), n.appendChild(i), n.appendChild(s), this._container.appendChild(n), this._backgroundShape = i, this._boxShape = s, this._overlay = n;
  }
  _destroyOverlay() {
    this._container && this._container.parentNode && this._container.parentNode.removeChild(this._container), this._container = this._backgroundShape = this._boxShape = this._overlay = null;
  }
  _toSVGPath(t, e, i, s, n, a) {
    const h = t + i, o = e + s;
    return "M 0 0 L " + n + " 0 L " + n + " " + a + " L 0 " + a + " ZM " + t + " " + e + " L " + t + " " + o + " L " + h + " " + o + " L " + h + " " + e + " Z";
  }
  _handleDrag(t, e) {
    const i = t.x, s = t.y, n = t.origin.x, a = t.origin.y;
    let h, o, u, l;
    switch (i > n ? (h = n, u = i - n) : (h = i, u = n - i), s > a ? (o = a, l = s - a) : (o = s, l = a - s), t.action) {
      case "start":
        this._start();
        break;
      case "update":
        this._update(h, o, u, l);
        break;
      case "end":
        this._end(h, o, u, l, e);
    }
    t.stopPropagation();
  }
  _redraw() {
    if (!this._rafId || (this._rafId = null, !this._overlay)) return;
    const { x: t, y: e, width: i, height: s } = this._box;
    this._updateBox(t, e, i, s), this._updateBackground(t, e, i, s), this._rafId = requestAnimationFrame(this._redraw);
  }
};
_([g()], P.prototype, "navigation", void 0), _([g()], P.prototype, "view", null), P = _([R("esri.views.2d.navigation.ZoomBox")], P);
const kt = P;
let T = class {
  constructor(t) {
    this._gain = t, this.lastValue = void 0, this.filteredDelta = void 0;
  }
  update(t) {
    if (this.hasLastValue()) {
      const e = this.computeDelta(t);
      this._updateDelta(e);
    }
    this.lastValue = t;
  }
  reset() {
    this.lastValue = void 0, this.filteredDelta = void 0;
  }
  hasLastValue() {
    return this.lastValue !== void 0;
  }
  hasFilteredDelta() {
    return this.filteredDelta !== void 0;
  }
  computeDelta(t) {
    return this.lastValue === void 0 ? NaN : t - this.lastValue;
  }
  _updateDelta(t) {
    this.filteredDelta !== void 0 ? this.filteredDelta = (1 - this._gain) * this.filteredDelta + this._gain * t : this.filteredDelta = t;
  }
}, at = class {
  constructor(t, e, i) {
    this._initialVelocity = t, this._stopVelocity = e, this._friction = i, this._duration = Math.abs(Math.log(Math.abs(this._initialVelocity) / this._stopVelocity) / Math.log(1 - this._friction));
  }
  get duration() {
    return this._duration;
  }
  isFinished(t) {
    return t > this.duration;
  }
  get friction() {
    return this._friction;
  }
  value(t) {
    return this.valueFromInitialVelocity(this._initialVelocity, t);
  }
  valueDelta(t, e) {
    const i = this.value(t);
    return this.value(t + e) - i;
  }
  valueFromInitialVelocity(t, e) {
    e = Math.min(e, this.duration);
    const i = 1 - this.friction;
    return t * (i ** e - 1) / Math.log(i);
  }
};
class Nt extends at {
  constructor(t, e, i, s, n) {
    super(t, e, i), this._sceneVelocity = s, this.direction = n;
  }
  value(t) {
    return super.valueFromInitialVelocity(this._sceneVelocity, t);
  }
}
class Bt {
  constructor(t = 300, e = 12, i = 0.84) {
    this._minimumInitialVelocity = t, this._stopVelocity = e, this._friction = i, this.enabled = !0, this._time = new T(0.6), this._screen = [new T(0.4), new T(0.4)], this._scene = [new T(0.6), new T(0.6), new T(0.6)], this._tmpDirection = _t();
  }
  add(t, e, i) {
    if (this.enabled) {
      if (this._time.hasLastValue() && this._time.computeDelta(i) < 0.015)
        return;
      this._screen[0].update(t[0]), this._screen[1].update(t[1]), this._scene[0].update(e[0]), this._scene[1].update(e[1]), this._scene[2].update(e[2]), this._time.update(i);
    }
  }
  reset() {
    this._screen[0].reset(), this._screen[1].reset(), this._scene[0].reset(), this._scene[1].reset(), this._scene[2].reset(), this._time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this._screen[0].hasFilteredDelta() || !this._time.hasFilteredDelta()) return null;
    const t = this._screen[0].filteredDelta, e = this._screen[1].filteredDelta, i = t == null || e == null ? 0 : Math.sqrt(t * t + e * e), s = this._time.filteredDelta, n = s == null || i == null ? 0 : i / s;
    return Math.abs(n) < this._minimumInitialVelocity ? null : this.createMomentum(n, this._stopVelocity, this._friction);
  }
  createMomentum(t, e, i) {
    Mt(this._tmpDirection, this._scene[0].filteredDelta ?? 0, this._scene[1].filteredDelta ?? 0, this._scene[2].filteredDelta ?? 0);
    const s = bt(this._tmpDirection);
    s > 0 && pt(this._tmpDirection, this._tmpDirection, 1 / s);
    const n = this._time.filteredDelta;
    return new Nt(t, e, i, n == null ? 0 : s / n, this._tmpDirection);
  }
}
let V = class extends E {
  constructor(t) {
    super(t), this.animationTime = 0, this.momentumEstimator = new Bt(500, 6, 0.92), this.momentum = null, this.tmpMomentum = _t(), this.momentumFinished = !1, this.viewpoint = new H({ targetGeometry: new Q(), scale: 0, rotation: 0 }), this._previousDrag = null, gt(() => this.momentumFinished, () => this.navigation.stop());
  }
  begin(t, e) {
    this.navigation.begin(), this.momentumEstimator.reset(), this.addToEstimator(e), this._previousDrag = e;
  }
  update(t, e) {
    this.addToEstimator(e);
    let i = e.center.x, s = e.center.y;
    const n = this._previousDrag;
    i = n ? n.center.x - i : -i, s = n ? s - n.center.y : s, t.viewpoint = Y(this.viewpoint, t.viewpoint, [i || 0, s || 0]), this._previousDrag = e;
  }
  end(t, e) {
    this.addToEstimator(e);
    const i = t.navigation.momentumEnabled;
    this.momentum = i ? this.momentumEstimator.evaluateMomentum() : null, this.animationTime = 0, this.momentum && this.onAnimationUpdate(t), this._previousDrag = null, this.navigation.end();
  }
  addToEstimator(t) {
    const e = t.center.x, i = t.center.y, s = xt(-e, i), n = Tt(-e, i, 0);
    this.momentumEstimator.add(s, n, 1e-3 * t.timestamp);
  }
  onAnimationUpdate(t) {
    this.navigation.animationManager?.animateContinous(t.viewpoint, (e, i) => {
      const { momentum: s, animationTime: n, tmpMomentum: a } = this, h = 1e-3 * i;
      if (!(this.momentumFinished = !s || s.isFinished(n))) {
        const o = s.valueDelta(n, h);
        pt(a, s.direction, o), Y(e, e, a), t.constraints.constrainByGeometry(e);
      }
      this.animationTime += h;
    });
  }
  stopMomentumNavigation() {
    this.momentum && (this.momentumEstimator.reset(), this.momentum = null, this.navigation.stop());
  }
};
_([g()], V.prototype, "momentumFinished", void 0), _([g()], V.prototype, "viewpoint", void 0), _([g()], V.prototype, "navigation", void 0), V = _([R("esri.views.2d.navigation.actions.Pan")], V);
const qt = V;
let vt = class {
  constructor(t = 2.5, e = 0.01, i = 0.95, s = 12) {
    this._minimumInitialVelocity = t, this._stopVelocity = e, this._friction = i, this._maxVelocity = s, this.enabled = !0, this.value = new T(0.8), this.time = new T(0.3);
  }
  add(t, e) {
    if (this.enabled && e != null) {
      if (this.time.hasLastValue()) {
        if (this.time.computeDelta(e) < 0.01) return;
        if (this.value.hasFilteredDelta()) {
          const i = this.value.computeDelta(t);
          this.value.filteredDelta * i < 0 && this.value.reset();
        }
      }
      this.time.update(e), this.value.update(t);
    }
  }
  reset() {
    this.value.reset(), this.time.reset();
  }
  evaluateMomentum() {
    if (!this.enabled || !this.value.hasFilteredDelta() || !this.time.hasFilteredDelta()) return null;
    let t = this.value.filteredDelta / this.time.filteredDelta;
    return t = x(t, -this._maxVelocity, this._maxVelocity), Math.abs(t) < this._minimumInitialVelocity ? null : this.createMomentum(t, this._stopVelocity, this._friction);
  }
  createMomentum(t, e, i) {
    return new at(t, e, i);
  }
}, Ot = class extends vt {
  constructor(t = 3, e = 0.01, i = 0.95, s = 12) {
    super(t, e, i, s);
  }
  add(t, e) {
    const i = this.value.lastValue;
    if (i != null) {
      let s = t - i;
      for (; s > Math.PI; ) s -= 2 * Math.PI;
      for (; s < -Math.PI; ) s += 2 * Math.PI;
      t = i + s;
    }
    super.add(t, e);
  }
};
class Ut extends at {
  constructor(t, e, i) {
    super(t, e, i);
  }
  value(t) {
    const e = super.value(t);
    return Math.exp(e);
  }
  valueDelta(t, e) {
    const i = super.value(t), s = super.value(t + e) - i;
    return Math.exp(s);
  }
}
class Gt extends vt {
  constructor(t = 2.5, e = 0.01, i = 0.95, s = 12) {
    super(t, e, i, s);
  }
  add(t, e) {
    super.add(Math.log(t), e);
  }
  createMomentum(t, e, i) {
    return new Ut(t, e, i);
  }
}
let z = class extends E {
  constructor(t) {
    super(t), this._animationTime = 0, this._momentumFinished = !1, this._previousAngle = 0, this._previousRadius = 0, this._previousCenter = null, this._rotationMomentumEstimator = new Ot(0.6, 0.15, 0.95), this._rotationDirection = 1, this._startAngle = 0, this._startRadius = 0, this._updateTimestamp = null, this._zoomDirection = 1, this._zoomMomentumEstimator = new Gt(), this._zoomOnly = null, this.zoomMomentum = null, this.rotateMomentum = null, this.viewpoint = new H({ targetGeometry: new Q(), scale: 0, rotation: 0 }), this.addHandles(gt(() => this._momentumFinished, () => this.navigation.stop()));
  }
  begin(t, e) {
    this.navigation.begin(), this._rotationMomentumEstimator.reset(), this._zoomMomentumEstimator.reset(), this._zoomOnly = null, this._previousAngle = this._startAngle = e.angle, this._previousRadius = this._startRadius = e.radius, this._previousCenter = e.center, this._updateTimestamp = null, t.constraints.rotationEnabled && this.addToRotateEstimator(0, e.timestamp), this.addToZoomEstimator(e, 1);
  }
  update(t, e) {
    this._updateTimestamp === null && (this._updateTimestamp = e.timestamp);
    const i = e.angle, s = e.radius, n = e.center, a = Math.abs(180 * (i - this._startAngle) / Math.PI), h = Math.abs(s - this._startRadius), o = this._startRadius / s;
    if (this._previousRadius && this._previousCenter) {
      const u = s / this._previousRadius;
      let l = 180 * (i - this._previousAngle) / Math.PI;
      this._rotationDirection = l >= 0 ? 1 : -1, this._zoomDirection = u >= 1 ? 1 : -1, t.constraints.rotationEnabled ? (this._zoomOnly === null && e.timestamp - this._updateTimestamp > 200 && (this._zoomOnly = h - a > 0), this._zoomOnly === null || this._zoomOnly ? l = 0 : this.addToRotateEstimator(i - this._startAngle, e.timestamp)) : l = 0, this.addToZoomEstimator(e, o), this.navigation.setViewpoint([n.x, n.y], 1 / u, l, [this._previousCenter.x - n.x, n.y - this._previousCenter.y]);
    }
    this._previousAngle = i, this._previousRadius = s, this._previousCenter = n;
  }
  end(t) {
    this.rotateMomentum = this._rotationMomentumEstimator.evaluateMomentum(), this.zoomMomentum = this._zoomMomentumEstimator.evaluateMomentum(), this._animationTime = 0, (this.rotateMomentum || this.zoomMomentum) && this.onAnimationUpdate(t), this.navigation.end();
  }
  addToRotateEstimator(t, e) {
    this._rotationMomentumEstimator.add(t, 1e-3 * e);
  }
  addToZoomEstimator(t, e) {
    this._zoomMomentumEstimator.add(e, 1e-3 * t.timestamp);
  }
  canZoomIn(t) {
    const e = t.scale, i = t.constraints.effectiveMaxScale;
    return i === 0 || e > i;
  }
  canZoomOut(t) {
    const e = t.scale, i = t.constraints.effectiveMinScale;
    return i === 0 || e < i;
  }
  onAnimationUpdate(t) {
    this.navigation.animationManager?.animateContinous(t.viewpoint, (e, i) => {
      const s = !this.canZoomIn(t) && this._zoomDirection > 1 || !this.canZoomOut(t) && this._zoomDirection < 1, n = !this.rotateMomentum || this.rotateMomentum.isFinished(this._animationTime), a = s || !this.zoomMomentum || this.zoomMomentum.isFinished(this._animationTime), h = 1e-3 * i;
      if (this._momentumFinished = n && a, !this._momentumFinished) {
        const o = this.rotateMomentum ? Math.abs(this.rotateMomentum.valueDelta(this._animationTime, h)) * this._rotationDirection * 180 / Math.PI : 0;
        let u = this.zoomMomentum ? Math.abs(this.zoomMomentum.valueDelta(this._animationTime, h)) : 1;
        const l = B(), p = B();
        if (this._previousCenter) {
          st(l, this._previousCenter.x, this._previousCenter.y), $t(p, t.size, t.padding), St(l, l, p);
          const { constraints: c, scale: m } = t, d = m * u;
          u < 1 && !c.canZoomInTo(d) ? (u = m / c.effectiveMaxScale, this.zoomMomentum = null, this.rotateMomentum = null) : u > 1 && !c.canZoomOutTo(d) && (u = m / c.effectiveMinScale, this.zoomMomentum = null, this.rotateMomentum = null), Ct(e, t.viewpoint, u, o, l, t.size), t.constraints.constrainByGeometry(e);
        }
      }
      this._animationTime += h;
    });
  }
  stopMomentumNavigation() {
    (this.rotateMomentum || this.zoomMomentum) && (this.rotateMomentum && (this._rotationMomentumEstimator.reset(), this.rotateMomentum = null), this.zoomMomentum && (this._zoomMomentumEstimator.reset(), this.zoomMomentum = null), this.navigation.stop());
  }
};
_([g()], z.prototype, "_momentumFinished", void 0), _([g()], z.prototype, "viewpoint", void 0), _([g()], z.prototype, "navigation", void 0), z = _([R("esri.views.2d.navigation.actions.Pinch")], z);
const Xt = z, tt = B(), mt = B();
let Z = class extends E {
  constructor(r) {
    super(r), this._previousCenter = B(), this.viewpoint = new H({ targetGeometry: new Q(), scale: 0, rotation: 0 });
  }
  begin(r, t) {
    this.navigation.begin(), st(this._previousCenter, t.center.x, t.center.y);
  }
  update(r, t) {
    const { state: { size: e, padding: i } } = r;
    st(tt, t.center.x, t.center.y), Dt(mt, e, i), r.viewpoint = nt(this.viewpoint, r.state.paddedViewState.viewpoint, Vt(mt, this._previousCenter, tt)), zt(this._previousCenter, tt);
  }
  end() {
    this.navigation.end();
  }
};
_([g()], Z.prototype, "viewpoint", void 0), _([g()], Z.prototype, "navigation", void 0), Z = _([R("esri.views.2d.actions.Rotate")], Z);
const Yt = Z, D = 10, ct = 1, et = new H({ targetGeometry: new Q() }), it = [0, 0], dt = 250;
let M = class extends E {
  constructor(r) {
    super(r), this._endTimer = null, this._lastEventTimestamp = null, this.animationManager = null, this.interacting = !1;
  }
  initialize() {
    this.pan = new qt({ navigation: this }), this.rotate = new Yt({ navigation: this }), this.pinch = new Xt({ navigation: this }), this.zoomBox = new kt({ view: this.view, navigation: this });
  }
  destroy() {
    this.pan = q(this.pan), this.rotate = q(this.rotate), this.pinch = q(this.pinch), this.zoomBox = q(this.zoomBox), this.animationManager = null;
  }
  begin() {
    this.stop(), this._set("interacting", !0);
  }
  end() {
    this._lastEventTimestamp = performance.now(), this._startTimer(dt);
  }
  async zoom(r, t = this._getDefaultAnchor()) {
    if (this.begin(), this.view.constraints.snapToZoom && this.view.constraints.effectiveLODs) return r < 1 ? this.zoomIn(t) : this.zoomOut(t);
    this.setViewpoint(t, r, 0, [0, 0]);
  }
  async zoomIn(r) {
    const t = this.view, e = t.constraints.snapToNextScale(t.scale);
    return this._zoomToScale(e, r);
  }
  async zoomOut(r) {
    const t = this.view, e = t.constraints.snapToPreviousScale(t.scale);
    return this._zoomToScale(e, r);
  }
  setViewpoint(r, t, e, i) {
    this.begin(), this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, r, t, e, i), this.end();
  }
  setViewpointImmediate(r, t = 0, e = [0, 0], i = this._getDefaultAnchor()) {
    this.view.stateManager.state.viewpoint = this._scaleRotateTranslateViewpoint(this.view.viewpoint, i, r, t, e);
  }
  continousRotateClockwise() {
    const r = this.view.viewpoint;
    this.animationManager?.animateContinous(r, (t) => {
      nt(t, t, -ct);
    });
  }
  continousRotateCounterclockwise() {
    const r = this.view.viewpoint;
    this.animationManager?.animateContinous(r, (t) => {
      nt(t, t, ct);
    });
  }
  resetRotation() {
    this.view.constraints.rotationEnabled && (this.view.rotation = 0);
  }
  continousPanLeft() {
    this._continuousPan([-D, 0]);
  }
  continousPanRight() {
    this._continuousPan([D, 0]);
  }
  continousPanUp() {
    this._continuousPan([0, D]);
  }
  continousPanDown() {
    this._continuousPan([0, -D]);
  }
  continuousPanVector({ x: r, y: t }) {
    this._continuousPan([r * D, t * D]);
  }
  stop() {
    this.pan.stopMomentumNavigation(), this.animationManager?.stop(), this.end(), this._endTimer !== null && (clearTimeout(this._endTimer), this._endTimer = null, this._set("interacting", !1));
  }
  _continuousPan(r) {
    const t = this.view.viewpoint;
    this.animationManager?.animateContinous(t, (e) => {
      Y(e, e, r), this.view.constraints.constrainByGeometry(e);
    });
  }
  _startTimer(r) {
    return this._endTimer !== null || (this._endTimer = setTimeout(() => {
      this._endTimer = null;
      const t = performance.now() - (this._lastEventTimestamp ?? 0);
      t < dt ? this._endTimer = this._startTimer(t) : this._set("interacting", !1);
    }, r)), this._endTimer;
  }
  _getDefaultAnchor() {
    const { size: r, padding: { left: t, right: e, top: i, bottom: s } } = this.view;
    return it[0] = 0.5 * (r[0] - e + t), it[1] = 0.5 * (r[1] - s + i), it;
  }
  async _zoomToScale(r, t = this._getDefaultAnchor()) {
    const { view: e } = this, { constraints: i, scale: s, viewpoint: n, size: a, padding: h } = e, o = i.canZoomInTo(r), u = i.canZoomOutTo(r);
    if (!(r < s && !o || r > s && !u)) return lt(et, n, r / s, 0, t, a, h), i.constrainByGeometry(et), e.goTo(et, { animate: !0, pickClosestTarget: !1 });
  }
  _scaleRotateTranslateViewpoint(r, t, e, i, s) {
    const { view: n } = this, { size: a, padding: h, constraints: o, scale: u, viewpoint: l } = n, p = u * e, c = o.canZoomInTo(p), m = o.canZoomOutTo(p);
    return (e < 1 && !c || e > 1 && !m) && (e = 1), Y(l, l, s), lt(r, l, e, i, t, a, h), o.constrainByGeometry(r);
  }
};
_([g()], M.prototype, "animationManager", void 0), _([g({ type: Boolean, readOnly: !0 })], M.prototype, "interacting", void 0), _([g()], M.prototype, "pan", void 0), _([g()], M.prototype, "pinch", void 0), _([g()], M.prototype, "rotate", void 0), _([g()], M.prototype, "view", void 0), _([g()], M.prototype, "zoomBox", void 0), M = _([R("esri.views.2d.navigation.MapViewNavigation")], M);
const fe = M, jt = { shaders: { vertexShader: b("magnifier/magnifier.vert"), fragmentShader: b("magnifier/magnifier.frag") }, attributes: /* @__PURE__ */ new Map([["a_pos", 0]]) };
function we(r) {
  return At(r, jt);
}
export {
  oe as a,
  we as b,
  jt as c,
  F as d,
  ie as e,
  fe as f,
  ae as n,
  se as r,
  ne as t
};
//# sourceMappingURL=MagnifierPrograms-BMqYEvT6.js.map
