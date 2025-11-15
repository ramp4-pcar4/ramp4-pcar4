import { cP as z, a8 as W, fg as F, C as Y, hs as G, m0 as mt, h2 as B, fa as I, fc as tt, N as f, O as y, P as et, dU as at, K as pt, a6 as ft, aU as _t, m1 as j, U as T, ap as yt, m2 as Z, m3 as K, f9 as gt, fb as E, fd as vt, fe as wt } from "./main-CmejC-so.js";
import { h as A } from "./Program-DzoSBHvo.js";
import { C as p, R as v, E as P, F as D, G as xt, D as St, O as st, I as L } from "./enums-Do5C4ZjN.js";
import { e as bt, m as At } from "./Texture-DgcJZ8H_.js";
import { o as k } from "./ProgramTemplate-p_8Syt13.js";
import { t as w } from "./VertexElementDescriptor-BAy1DPb3.js";
import { t as it, n as Dt } from "./WGLContainer-Dtu9wLrk.js";
import { E as Mt, i as rt } from "./Container-B1L9L638.js";
import { b as Rt } from "./LabelMetric-pYmPcoN1.js";
function zt(s) {
  const t = ot(q(s)), e = t, a = !0, i = Math.max(t / 2, 5), r = Math.round(z(s.maxPathLength) / i) + 1, o = 10, { density: n } = s;
  return { smoothing: z(s.smoothing), interpolate: !0, velocityScale: s.flowRepresentation === "flow-from" ? 1 : -1, verticesPerLine: r, minSpeedThreshold: 1e-3, segmentLength: i, maxTurnAngle: 1, collisions: a, lineCollisionWidth: e, lineSpacing: o, density: n };
}
function ot(s) {
  return s.kind === "constant" ? s.value[0] : s.values[s.values.length - 1];
}
function J(s) {
  const t = s.toRgba();
  return [t[0] / 255, t[1] / 255, t[2] / 255, t[3]];
}
function $t(s) {
  return { kind: "constant", value: [0.1, 0.1, 0.1, 1] };
}
function q(s) {
  if (!s.hasVisualVariables("size")) return { kind: "constant", value: [z(s.trailWidth)] };
  const t = s.getVisualVariablesForType("size")[0], e = [], a = [];
  let i;
  if (t.stops) {
    for (const r of t.stops) e.push(r.value), a.push(z(r.size));
    i = t.stops.length;
  } else e.push(t.minDataValue, t.maxDataValue), a.push(z(t.minSize), z(t.maxSize)), i = 2;
  return { kind: "ramp", stops: e, values: a, count: i };
}
function Ut(s) {
  if (!s.hasVisualVariables("color")) return { kind: "constant", value: J(s.color) };
  const t = s.getVisualVariablesForType("color")[0], e = [], a = [];
  for (const i of t.stops) e.push(i.value), Array.prototype.push.apply(a, J(i.color));
  return { kind: "ramp", stops: e, values: a, count: t.stops.length };
}
function Vt(s) {
  if (!s.hasVisualVariables("opacity")) return { kind: "constant", value: [1] };
  const t = s.getVisualVariablesForType("opacity")[0], e = [], a = [];
  for (const i of t.stops) e.push(i.value), a.push(i.opacity);
  return { kind: "ramp", stops: e, values: a, count: t.stops.length };
}
function N(s, t, e, a) {
  switch (t) {
    case "int":
      s.setUniform1iv(e, a);
      break;
    case "float":
      s.setUniform1fv(e, a);
      break;
    case "vec2":
      s.setUniform2fv(e, a);
      break;
    case "vec3":
      s.setUniform3fv(e, a);
      break;
    case "vec4":
      s.setUniform4fv(e, a);
  }
}
function b(s, t, e, a) {
  a.kind === "constant" ? N(s, e, `u_${t}`, a.value) : (N(s, "float", `u_${t}_stops`, a.stops), N(s, e, `u_${t}_values`, a.values), s.setUniform1i(`u_${t}_count`, a.count));
}
function Pt(s, t) {
  let e = !0;
  return e = e && s.collisions === t.collisions, e = e && s.density === t.density, e = e && s.interpolate === t.interpolate, e = e && s.lineCollisionWidth === t.lineCollisionWidth, e = e && s.lineSpacing === t.lineSpacing, e = e && s.maxTurnAngle === t.maxTurnAngle, e = e && s.minSpeedThreshold === t.minSpeedThreshold, e = e && s.segmentLength === t.segmentLength, e = e && s.smoothing === t.smoothing, e = e && s.velocityScale === t.velocityScale, e = e && s.verticesPerLine === t.verticesPerLine, e;
}
function nt(s, t) {
  return s === t || s != null && t != null && s.equals(t);
}
function lt(s, t) {
  if (!Pt(s.simulationSettings, t.simulationSettings) || !nt(s.timeExtent, t.timeExtent)) return !1;
  let e = !0;
  return e = e && s.loadImagery === t.loadImagery, e = e && s.createFlowMesh === t.createFlowMesh, e = e && s.color.kind === t.color.kind, e = e && s.opacity.kind === t.opacity.kind, e = e && s.size.kind === t.size.kind, e;
}
let Tt = class ct {
  constructor(t) {
    this._params = t, this.animated = !1;
  }
  isCompatible(t) {
    if (!(t instanceof ct) || !nt(this._params.timeExtent, t._params.timeExtent)) return !1;
    let e = !0;
    return e = e && this._params.loadImagery === t._params.loadImagery, e = e && this._params.color.kind === t._params.color.kind, e = e && this._params.opacity.kind === t._params.opacity.kind, e;
  }
  async load(t, e) {
    const { extent: a, size: i } = t;
    W(e);
    const r = await this._params.loadImagery(a, i[0], i[1], this._params.timeExtent, e);
    return new It(r, { color: this._params.color, opacity: this._params.opacity });
  }
  render(t, e, a) {
    const { context: i } = t, { program: r } = a;
    i.setFaceCullingEnabled(!1), i.setBlendingEnabled(!0), i.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), i.useProgram(r), r.setUniformMatrix3fv("u_dvsMat3", e.dvsMat3), i.bindTexture(a.texture, 0), r.setUniform1i("u_texture", 0), r.setUniform1f("u_Min", a.min), r.setUniform1f("u_Max", a.max), b(r, "color", "vec4", this._params.color), b(r, "opacity", "float", this._params.opacity), i.bindVAO(a.vertexArray), i.drawArrays(P.TRIANGLE_STRIP, 0, 4);
  }
};
const C = /* @__PURE__ */ new Map();
C.set("a_position", 0), C.set("a_texcoord", 1);
const Et = { geometry: [new w("a_position", 2, p.UNSIGNED_SHORT, 0, 8), new w("a_texcoord", 2, p.UNSIGNED_SHORT, 4, 8)] }, Ot = { vsPath: "raster/flow/imagery", fsPath: "raster/flow/imagery", attributes: C };
class It {
  constructor(t, e) {
    this._flowData = t, this._values = e;
  }
  attach(t) {
    const { context: e } = t, { width: a, height: i } = this._flowData, r = A.createVertex(e, D.STATIC_DRAW, new Uint16Array([0, 0, 0, 1, a, 0, 1, 1, 0, i, 0, 0, a, i, 1, 0])), o = new k(e, C, Et, { geometry: r }), n = [];
    this._values.color.kind === "ramp" && n.push("vvColor"), this._values.opacity.kind === "ramp" && n.push("vvOpacity");
    const c = t.painter.materialManager.getProgram(Ot, n);
    let h = 1e6, m = -1e6;
    for (let d = 0; d < i; d++) for (let u = 0; u < a; u++) if (this._flowData.mask[d * a + u] !== 0) {
      const x = this._flowData.data[2 * (d * a + u)], S = this._flowData.data[2 * (d * a + u) + 1], M = Math.sqrt(x * x + S * S);
      h = Math.min(h, M), m = Math.max(m, M);
    }
    const l = new Uint8Array(4 * a * i);
    for (let d = 0; d < i; d++) for (let u = 0; u < a; u++) if (this._flowData.mask[d * a + u] !== 0) {
      const x = this._flowData.data[2 * (d * a + u)], S = this._flowData.data[2 * (d * a + u) + 1], M = (Math.sqrt(x * x + S * S) - h) / (m - h);
      l[4 * (d * a + u)] = 255 * M, l[4 * (d * a + u) + 1] = 0, l[4 * (d * a + u) + 2] = 0, l[4 * (d * a + u) + 3] = 255;
    } else l[4 * (d * a + u)] = 0, l[4 * (d * a + u) + 1] = 0, l[4 * (d * a + u) + 2] = 0, l[4 * (d * a + u) + 3] = 0;
    const g = new bt();
    g.internalFormat = xt.RGBA, g.wrapMode = St.CLAMP_TO_EDGE, g.flipped = !0, g.width = a, g.height = i;
    const V = new At(e, g, l);
    this.vertexArray = o, this.program = c, this.texture = V, this.min = h, this.max = m, this._flowData = null;
  }
  detach() {
    this.vertexArray.dispose(), this.texture.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
}
let Ft = class ht {
  constructor(t) {
    this._params = t;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t) {
    return t instanceof ht && lt(this._params, t._params);
  }
  async load(t, e) {
    const { extent: a, size: i } = t;
    W(e);
    const r = await this._params.loadImagery(a, i[0], i[1], this._params.timeExtent, e), { vertexData: o, indexData: n } = await this._params.createFlowMesh("Particles", this._params.simulationSettings, r, e);
    return new Lt(o, n, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t, e, a) {
    const { context: i } = t, { program: r } = a;
    i.setFaceCullingEnabled(!1), i.setBlendingEnabled(!0), i.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), i.useProgram(r), r.setUniform1f("u_time", e.time), r.setUniform1f("u_trailLength", this._params.trailLength), r.setUniform1f("u_flowSpeed", this._params.flowSpeed), r.setUniform1f("u_featheringSize", this._params.featheringSize), r.setUniform1f("u_featheringOffset", this._params.featheringOffset), r.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), r.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), r.setUniform1f("u_decayRate", this._params.decayRate), r.setUniformMatrix3fv("u_dvsMat3", e.dvsMat3), r.setUniformMatrix3fv("u_displayViewMat3", e.displayViewMat3), b(r, "color", "vec4", this._params.color), b(r, "opacity", "float", this._params.opacity), b(r, "size", "float", this._params.size), i.bindVAO(a.vertexArray), i.drawElements(P.TRIANGLES, a.indexCount, p.UNSIGNED_INT, 0);
  }
};
const $ = /* @__PURE__ */ new Map();
$.set("a_xyts0", 0), $.set("a_xyts1", 1), $.set("a_typeIdDurationSeed", 2), $.set("a_extrudeInfo", 3);
const Ct = { geometry: [new w("a_xyts0", 4, p.FLOAT, 0, 64), new w("a_xyts1", 4, p.FLOAT, 16, 64), new w("a_typeIdDurationSeed", 4, p.FLOAT, 32, 64), new w("a_extrudeInfo", 4, p.FLOAT, 48, 64)] }, kt = { vsPath: "raster/flow/particles", fsPath: "raster/flow/particles", attributes: $ };
let Lt = class {
  constructor(t, e, a) {
    this._vertexData = t, this._indexData = e, this._values = a;
  }
  attach(t) {
    const { context: e } = t, a = A.createVertex(e, D.STATIC_DRAW, this._vertexData), i = A.createIndex(e, D.STATIC_DRAW, this._indexData), r = new k(e, $, Ct, { geometry: a }, i), o = [];
    this._values.color.kind === "ramp" && o.push("vvColor"), this._values.opacity.kind === "ramp" && o.push("vvOpacity"), this._values.size.kind === "ramp" && o.push("vvSize");
    const n = t.painter.materialManager.getProgram(kt, o);
    this.vertexArray = r, this.program = n, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
}, Nt = class dt {
  constructor(t) {
    this._styles = t;
  }
  get animated() {
    return this._styles.reduce((t, e) => t || e.animated, !1);
  }
  isCompatible(t) {
    if (!(t instanceof dt) || this._styles.length !== t._styles.length) return !1;
    const e = this._styles.length;
    for (let a = 0; a < e; a++) if (!this._styles[a].isCompatible(t._styles[a])) return !1;
    return !0;
  }
  async load(t, e) {
    const a = await Promise.all(this._styles.map((i) => i.load(t, e)));
    return new Gt(a);
  }
  render(t, e, a) {
    for (let i = 0; i < this._styles.length; i++) this._styles[i].render(t, e, a.resources[i]);
  }
}, Gt = class {
  constructor(t) {
    this.resources = t;
  }
  attach(t) {
    for (const e of this.resources) e.attach(t);
  }
  detach() {
    for (const t of this.resources) t.detach();
  }
  get ready() {
    return this.resources.reduce((t, e) => t && e.ready, !0);
  }
};
class H {
  constructor(t) {
    this._params = t;
  }
  get animated() {
    return this._params.flowSpeed > 0;
  }
  isCompatible(t) {
    return t instanceof H && lt(this._params, t._params);
  }
  async load(t, e) {
    const { extent: a, size: i } = t;
    W(e);
    const r = await this._params.loadImagery(a, i[0], i[1], this._params.timeExtent, e), { vertexData: o, indexData: n } = await this._params.createFlowMesh("Streamlines", this._params.simulationSettings, r, e);
    return new Ht(o, n, { color: this._params.color, opacity: this._params.opacity, size: this._params.size });
  }
  render(t, e, a) {
    const { context: i } = t, { program: r } = a;
    i.setFaceCullingEnabled(!1), i.setBlendingEnabled(!0), i.setBlendFunction(v.ONE, v.ONE_MINUS_SRC_ALPHA), i.useProgram(r), r.setUniform1f("u_time", e.time), r.setUniform1f("u_trailLength", this._params.trailLength), r.setUniform1f("u_flowSpeed", this._params.flowSpeed), r.setUniform1f("u_featheringSize", this._params.featheringSize), r.setUniform1f("u_featheringOffset", this._params.featheringOffset), r.setUniform1f("u_introFade", this._params.introFade ? 1 : 0), r.setUniform1f("u_fadeToZero", this._params.fadeToZero ? 1 : 0), r.setUniform1f("u_decayRate", this._params.decayRate), r.setUniformMatrix3fv("u_dvsMat3", e.dvsMat3), r.setUniformMatrix3fv("u_displayViewMat3", e.displayViewMat3), b(r, "color", "vec4", this._params.color), b(r, "opacity", "float", this._params.opacity), b(r, "size", "float", this._params.size), i.bindVAO(a.vertexArray), i.drawElements(P.TRIANGLES, a.indexCount, p.UNSIGNED_INT, 0);
  }
}
const U = /* @__PURE__ */ new Map();
U.set("a_positionAndSide", 0), U.set("a_timeInfo", 1), U.set("a_extrude", 2), U.set("a_speed", 3);
const qt = { geometry: [new w("a_positionAndSide", 3, p.FLOAT, 0, 36), new w("a_timeInfo", 3, p.FLOAT, 12, 36), new w("a_extrude", 2, p.FLOAT, 24, 36), new w("a_speed", 1, p.FLOAT, 32, 36)] }, Wt = { vsPath: "raster/flow/streamlines", fsPath: "raster/flow/streamlines", attributes: U };
let Ht = class {
  constructor(t, e, a) {
    this._vertexData = t, this._indexData = e, this._values = a;
  }
  attach(t) {
    const { context: e } = t, a = A.createVertex(e, D.STATIC_DRAW, this._vertexData), i = A.createIndex(e, D.STATIC_DRAW, this._indexData), r = new k(e, U, qt, { geometry: a }, i), o = [];
    this._values.color.kind === "ramp" && o.push("vvColor"), this._values.opacity.kind === "ramp" && o.push("vvOpacity"), this._values.size.kind === "ramp" && o.push("vvSize");
    const n = t.painter.materialManager.getProgram(Wt, o);
    this.vertexArray = r, this.program = n, this.indexCount = this._indexData.length, this._vertexData = null, this._indexData = null;
  }
  detach() {
    this.vertexArray.dispose();
  }
  get ready() {
    return this.program.compiled;
  }
};
const Bt = 4, jt = 1, Zt = 0.5, Kt = !0, Jt = !0, Qt = 2.3;
function Xt(s, t) {
  const { flowSpeed: e, trailLength: a } = s, i = zt(s);
  let r = null;
  const o = { opacity: Vt(s), size: q(s) };
  let n = Ut(s);
  if (s.background === "none") o.color = n;
  else {
    n.kind === "constant" && (n = { kind: "ramp", stops: [0, 1], values: [0, 0, 0, 1, n.value[0], n.value[1], n.value[2], n.value[3]], count: 2 });
    const m = { loadImagery: t.loadImagery, timeExtent: t.timeExtent, color: n, opacity: { kind: "constant", value: [1] } };
    r = new Tt(m), o.color = $t();
  }
  const c = { loadImagery: t.loadImagery, createFlowMesh: t.createFlowMesh, simulationSettings: i, timeExtent: t.timeExtent, trailLength: a, flowSpeed: e, featheringSize: jt, featheringOffset: Zt, introFade: Kt, fadeToZero: Jt, decayRate: Qt, color: o.color, opacity: o.opacity, size: o.size }, h = s.trailCap === "butt" || ot(q(s)) <= Bt ? new H(c) : new Ft(c);
  return r != null ? new Nt([r, h]) : h;
}
class Yt extends it {
  constructor() {
    super(...arguments), this._visualState = { time: 0, dvsMat3: F(), displayViewMat3: F() };
  }
  dispose() {
  }
  prepareState(t) {
    const { context: e } = t;
    e.setColorMask(!0, !0, !0, !0), e.setStencilFunction(st.EQUAL, 0, 255);
  }
  draw(t, e) {
    const { requestRender: a, allowDelayedRender: i } = t, { displayData: r } = e;
    if (r == null || (r.state.name === "loaded" && r.attach(t), r.state.name !== "attached")) return;
    const o = r.state.resources;
    !i || o.ready || a == null ? (this._visualState.time = t.time / 1e3, this._visualState.dvsMat3 = e.transforms.displayViewScreenMat3, this._visualState.displayViewMat3 = t.state.displayViewMat3, r.flowStyle.render(t, this._visualState, o), r.flowStyle.animated && a != null && a()) : a();
  }
}
class te extends Dt {
  constructor() {
    super(...arguments), this.flowStyle = null;
  }
  doRender(t) {
    super.doRender(t);
  }
  prepareRenderPasses(t) {
    const e = t.registerRenderPass({ name: "flow", brushes: [Yt], target: () => this.children, drawPhase: Mt.MAP });
    return [...super.prepareRenderPasses(t), e];
  }
}
class ee {
  constructor(t, e, a, i) {
    this.state = { name: "created" }, this.flowStyle = t, this.extent = e, this.size = a, this.pixelRatio = i;
  }
  async load() {
    const t = new AbortController();
    this.state = { name: "loading", abortController: t };
    const e = { extent: this.extent, size: this.size, pixelRatio: this.pixelRatio }, a = await this.flowStyle.load(e, t.signal);
    this.state = { name: "loaded", resources: a };
  }
  attach(t) {
    if (this.state.name !== "loaded") return void Y.getLogger("esri.views.2d.engine.flow.FlowDisplayData").error("Only loaded resources can be attached.");
    const e = this.state.resources;
    e.attach(t), this.state = { name: "attached", resources: e };
  }
  detach() {
    if (this.state.name === "loading") return this.state.abortController.abort(), void (this.state = { name: "detached" });
    this.state.name === "attached" && (this.state.resources.detach(), this.state = { name: "detached" });
  }
  update(t) {
    return this.flowStyle.isCompatible(t.flowStyle) ? !(!this.extent.equals(t.extent) || this.size[0] !== t.size[0] || this.size[1] !== t.size[1] || this.pixelRatio !== t.pixelRatio) && (this.flowStyle = t.flowStyle, !0) : !1;
  }
}
class ae extends rt {
  constructor() {
    super(...arguments), this._displayData = null;
  }
  get displayData() {
    return this._displayData;
  }
  set displayData(t) {
    this._displayData = t, this.requestRender();
  }
  clear() {
    this._displayData != null && (this._displayData.detach(), this._displayData = null, this.requestRender());
  }
  setTransform(t) {
    const { displayData: e } = this;
    if (e == null) return;
    const a = e.extent.xmin, i = e.extent.ymax, r = [0, 0];
    t.toScreen(r, [a, i]);
    const o = (e.extent.xmax - e.extent.xmin) / e.size[0] / t.resolution, n = G(t.rotation), { displayViewScreenMat3: c } = this.transforms;
    mt(c, [-1, 1, 0]), B(c, c, [2 / (t.size[0] * t.pixelRatio), -2 / (t.size[1] * t.pixelRatio), 1]), I(c, c, [r[0], r[1], 0]), tt(c, c, n), B(c, c, [o * t.pixelRatio, o * t.pixelRatio, 1]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: F() };
  }
}
const se = 1.15;
let R = class extends at {
  constructor(t) {
    super(t), this._flowDisplayObject = new ae(), this._loading = null;
  }
  initialize() {
    this.flowContainer.addChild(this._flowDisplayObject);
  }
  destroy() {
    this._clear(), this.flowContainer.removeAllChildren();
  }
  get updating() {
    return this._loading != null;
  }
  update(t) {
    const { flowStyle: e } = this.flowContainer;
    if (e == null) return void this._clear();
    const { extent: a, rotation: i, resolution: r, pixelRatio: o } = t.state, n = re(a, i);
    n.expand(se);
    const c = [Math.round((n.xmax - n.xmin) / r), Math.round((n.ymax - n.ymin) / r)], h = new ee(e, n, c, o);
    if (this._loading != null) {
      if (this._loading.update(h)) return;
      this._loading.detach(), this._loading = null;
    }
    this._flowDisplayObject.displayData != null && this._flowDisplayObject.displayData.update(h) || (h.load().then(() => {
      this._flowDisplayObject.clear(), this._flowDisplayObject.displayData = this._loading, this._loading = null;
    }, (m) => {
      pt(m) || (Y.getLogger(this).error("A resource failed to load.", m), this._loading = null);
    }), this._loading = h);
  }
  _clear() {
    this._flowDisplayObject.clear(), this._loading != null && (this._loading.detach(), this._loading = null);
  }
};
f([y()], R.prototype, "_loading", void 0), f([y()], R.prototype, "flowContainer", void 0), f([y()], R.prototype, "updating", null), R = f([et("esri.views.2d.engine.flow.FlowStrategy")], R);
const ie = R;
function re(s, t) {
  const e = new ft({ x: (s.xmax + s.xmin) / 2, y: (s.ymax + s.ymin) / 2, spatialReference: s.spatialReference }), a = s.xmax - s.xmin, i = s.ymax - s.ymin, r = Math.abs(Math.cos(G(t))), o = Math.abs(Math.sin(G(t))), n = r * a + o * i, c = o * a + r * i, h = new _t({ xmin: e.x - n / 2, ymin: e.y - c / 2, xmax: e.x + n / 2, ymax: e.y + c / 2, spatialReference: s.spatialReference });
  return h.centerAt(e), h;
}
let _ = class extends at {
  constructor() {
    super(...arguments), this._loadImagery = (s, t, e, a, i) => j(this.layer, s, t, e, a, i), this._createFlowMesh = (s, t, e, a) => this.layer.createFlowMesh({ meshType: s, flowData: e, simulationSettings: t }, { signal: a }), this.attached = !1, this.type = "flow", this.timeExtent = null, this.redrawOrRefetch = async () => {
      this._updateVisualization();
    };
  }
  get updating() {
    return !this.attached || this._strategy.updating;
  }
  attach() {
    const { layer: s } = this, t = () => {
      this._loadImagery = (e, a, i, r, o) => j(s, e, a, i, r, o), this._updateVisualization();
    };
    "multidimensionalDefinition" in s ? this.addHandles(T(() => s.multidimensionalDefinition, t)) : this.addHandles([T(() => s.mosaicRule, t), T(() => s.rasterFunction, t), T(() => s.definitionExpression, t)]), this.container = new te(), this._strategy = new ie({ flowContainer: this.container }), this._updateVisualization();
  }
  detach() {
    this._strategy.destroy(), this.container?.removeAllChildren(), this.container = null, this.removeHandles();
  }
  update(s) {
    s.stationary ? this._strategy.update(s) : this.layerView.requestUpdate();
  }
  hitTest(s) {
    return new yt({ attributes: {}, geometry: s.clone(), layer: this.layer });
  }
  moveEnd() {
  }
  async doRefresh() {
  }
  _updateVisualization() {
    const s = this.layer.renderer;
    if (s == null || s.type !== "flow") return;
    const t = Xt(s, { loadImagery: this._loadImagery, createFlowMesh: this._createFlowMesh, timeExtent: this.timeExtent });
    this.container.flowStyle = t, this.layerView.requestUpdate();
  }
};
f([y()], _.prototype, "_strategy", void 0), f([y()], _.prototype, "attached", void 0), f([y()], _.prototype, "container", void 0), f([y()], _.prototype, "layer", void 0), f([y()], _.prototype, "layerView", void 0), f([y()], _.prototype, "type", void 0), f([y()], _.prototype, "updating", null), f([y()], _.prototype, "timeExtent", void 0), _ = f([et("esri.views.2d.engine.flow.FlowView2D")], _);
const we = _, O = new Float32Array([0.27058823529411763, 0.4588235294117647, 0.7098039215686275, 1, 0.396078431372549, 0.5372549019607843, 0.7215686274509804, 1, 0.5176470588235295, 0.6196078431372549, 0.7294117647058823, 1, 0.6352941176470588, 0.7058823529411765, 0.7411764705882353, 1, 0.7529411764705882, 0.8, 0.7450980392156863, 1, 0.8705882352941177, 0.8901960784313725, 0.7490196078431373, 1, 1, 1, 0.7490196078431373, 1, 1, 0.8627450980392157, 0.6313725490196078, 1, 0.9803921568627451, 0.7254901960784313, 0.5176470588235295, 1, 0.9607843137254902, 0.596078431372549, 0.4117647058823529, 1, 0.9294117647058824, 0.4588235294117647, 0.3176470588235294, 1, 0.9098039215686274, 0.08235294117647059, 0.08235294117647059, 1]), Q = new Float32Array([0, 92 / 255, 230 / 255, 1]), oe = { beaufort_ft: O, beaufort_m: O, beaufort_km: O, beaufort_mi: O, beaufort_kn: new Float32Array([0.1568627450980392, 0.5725490196078431, 0.7803921568627451, 1, 0.34901960784313724, 0.6352941176470588, 0.7294117647058823, 1, 0.5058823529411764, 0.7019607843137254, 0.6705882352941176, 1, 0.6274509803921569, 0.7607843137254902, 0.6078431372549019, 1, 0.7490196078431373, 0.8313725490196079, 0.5411764705882353, 1, 0.8549019607843137, 0.9019607843137255, 0.4666666666666667, 1, 0.9803921568627451, 0.9803921568627451, 0.39215686274509803, 1, 0.9882352941176471, 0.8352941176470589, 0.3254901960784314, 1, 0.9882352941176471, 0.7019607843137254, 0.4, 1, 0.9803921568627451, 0.5529411764705883, 0.20392156862745098, 1, 0.9686274509803922, 0.43137254901960786, 0.16470588235294117, 1, 0.9411764705882353, 0.2784313725490196, 0.11372549019607843, 1]), classified_arrow: new Float32Array([0.2196078431372549, 0.6588235294117647, 0, 1, 0.5450980392156862, 1.2117647058823529, 0, 1, 1, 1, 0, 1, 1, 0.5019607843137255, 0, 1, 1, 0, 0, 1]), ocean_current_m: new Float32Array([0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), ocean_current_kn: new Float32Array([0, 0, 0, 1, 0, 0.1450980392156863, 0.39215686274509803, 1, 0.3058823529411765, 0.10196078431372549, 0.6, 1, 0.592156862745098, 0, 0.39215686274509803, 1, 0.7019607843137254, 0.10588235294117647, 0.10196078431372549, 1, 0.6941176470588235, 0.3058823529411765, 0.10196078431372549, 1, 0.792156862745098, 0.5019607843137255, 0.10196078431372549, 1, 0.6941176470588235, 0.7019607843137254, 0.20392156862745098, 1, 0.6941176470588235, 0.6941176470588235, 0.6941176470588235, 1]), simple_scalar: Q, single_arrow: Q, wind_speed: new Float32Array([0, 0, 0, 1]) }, X = [0, 20];
class xe extends it {
  constructor() {
    super(...arguments), this._desc = { magdir: { vsPath: "raster/magdir", fsPath: "raster/magdir", attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) }, scalar: { vsPath: "raster/scalar", fsPath: "raster/scalar", attributes: /* @__PURE__ */ new Map([["a_pos", 0], ["a_offset", 1], ["a_vv", 2]]) } };
  }
  dispose() {
  }
  prepareState({ context: t }) {
    t.setBlendingEnabled(!0), t.setBlendFunctionSeparate(v.ONE, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA), t.setColorMask(!0, !0, !0, !0), t.setStencilWriteMask(0), t.setStencilTestEnabled(!0), t.setStencilOp(L.KEEP, L.KEEP, L.REPLACE);
  }
  draw(t, e) {
    if (e.source == null || e.source.validPixelCount === 0) return;
    const { context: a, timeline: i } = t;
    if (i.begin(this.name), a.setStencilFunction(st.EQUAL, e.stencilRef, 255), e.updateVectorFieldVAO(t), t.renderPass === "scalar") {
      const r = e.vaoData.scalar;
      r && this._drawScalars(t, e, r.vao, r.elementCount);
    } else {
      const r = e.vaoData.magdir;
      r && this._drawTriangles(t, e, r.vao, r.elementCount);
    }
    i.end(this.name);
  }
  _drawTriangles(t, e, a, i) {
    const { context: r, painter: o, requestRender: n, allowDelayedRender: c } = t, { symbolizerParameters: h } = e, m = h.dataRange ? ["dataRange"] : [];
    h.rotationType === "geographic" && m.push("rotationGeographic");
    const l = o.materialManager.getProgram(this._desc.magdir, m);
    if (c && n != null && !l.compiled) return void n();
    r.useProgram(l);
    const { coordScale: g, opacity: V, transforms: d } = e;
    l.setUniform2fv("u_coordScale", g), l.setUniform1f("u_opacity", V), l.setUniformMatrix3fv("u_dvsMat3", d.displayViewScreenMat3);
    const { style: u, dataRange: x, rotation: S, symbolPercentRange: M } = h;
    l.setUniform4fv("u_colors", oe[u]), l.setUniform2fv("u_dataRange", x || X), l.setUniform1f("u_rotation", S), l.setUniform2fv("u_symbolPercentRange", M);
    const ut = this._getSymbolSize(t, e);
    l.setUniform2fv("u_symbolSize", ut), r.bindVAO(a), r.drawElements(P.TRIANGLES, i, p.UNSIGNED_INT, 0);
  }
  _drawScalars(t, e, a, i) {
    const { context: r, painter: o, requestRender: n, allowDelayedRender: c } = t, { symbolizerParameters: h } = e, m = [];
    h.style === "wind_speed" ? m.push("innerCircle") : h.dataRange && m.push("dataRange"), h.rotationType === "geographic" && m.push("rotationGeographic");
    const l = o.materialManager.getProgram(this._desc.scalar, m);
    if (c && n != null && !l.compiled) return void n();
    r.useProgram(l);
    const { coordScale: g, opacity: V, transforms: d } = e;
    l.setUniform2fv("u_coordScale", g), l.setUniform1f("u_opacity", V), l.setUniformMatrix3fv("u_dvsMat3", d.displayViewScreenMat3);
    const { dataRange: u, symbolPercentRange: x } = h;
    l.setUniform2fv("u_dataRange", u || X), l.setUniform2fv("u_symbolPercentRange", x);
    const S = this._getSymbolSize(t, e);
    l.setUniform2fv("u_symbolSize", S), r.bindVAO(a), r.drawElements(P.TRIANGLES, i, p.UNSIGNED_INT, 0);
  }
  _getSymbolSize(t, e) {
    const a = e.key ? 2 ** (t.displayLevel - e.key.level) : e.resolution / t.state.resolution, { symbolTileSize: i } = e.symbolizerParameters;
    return [i / (Math.round((e.width - e.offset[0]) / i) * i) / a, i / (Math.round((e.height - e.offset[1]) / i) * i) / a];
  }
}
class Se extends rt {
  constructor(t = null) {
    super(), this._source = null, this._symbolizerParameters = null, this._vaoInvalidated = !0, this.coordScale = [1, 1], this.height = null, this.key = null, this.offset = null, this.stencilRef = 0, this.resolution = null, this.pixelRatio = 1, this.x = 0, this.y = 0, this.rotation = 0, this.rawPixelData = null, this.vaoData = null, this.width = null, this.source = t;
  }
  destroy() {
    this.vaoData != null && (this.vaoData.magdir?.vao.dispose(), this.vaoData.scalar?.vao.dispose(), this.vaoData = null);
  }
  get symbolizerParameters() {
    return this._symbolizerParameters;
  }
  set symbolizerParameters(t) {
    JSON.stringify(this._symbolizerParameters) !== JSON.stringify(t) && (this._symbolizerParameters = t, this.invalidateVAO());
  }
  get source() {
    return this._source;
  }
  set source(t) {
    this._source = t, this.invalidateVAO();
  }
  invalidateVAO() {
    this._vaoInvalidated || this.vaoData == null || (this.vaoData.magdir?.vao.dispose(), this.vaoData.scalar?.vao.dispose(), this.vaoData = null, this._vaoInvalidated = !0, this.requestRender());
  }
  updateVectorFieldVAO(t) {
    if (this._vaoInvalidated) {
      if (this._vaoInvalidated = !1, this.source != null && this.vaoData == null) {
        const { style: e } = this.symbolizerParameters;
        switch (e) {
          case "beaufort_ft":
          case "beaufort_km":
          case "beaufort_kn":
          case "beaufort_m":
          case "beaufort_mi":
          case "classified_arrow":
          case "ocean_current_kn":
          case "ocean_current_m":
          case "single_arrow":
            {
              const a = Z(this.source, this.symbolizerParameters), i = this._createVectorFieldVAO(t.context, a);
              this.vaoData = { magdir: i };
            }
            break;
          case "simple_scalar":
            {
              const a = K(this.source, this.symbolizerParameters), i = this._createVectorFieldVAO(t.context, a);
              this.vaoData = { scalar: i };
            }
            break;
          case "wind_speed": {
            const a = Z(this.source, this.symbolizerParameters), i = this._createVectorFieldVAO(t.context, a), r = K(this.source, this.symbolizerParameters), o = this._createVectorFieldVAO(t.context, r);
            this.vaoData = { magdir: i, scalar: o };
          }
        }
      }
      this.ready(), this.requestRender();
    }
  }
  _createTransforms() {
    return { displayViewScreenMat3: F() };
  }
  setTransform(t) {
    const e = gt(this.transforms.displayViewScreenMat3), [a, i] = t.toScreenNoRotation([0, 0], [this.x, this.y]), r = this.resolution / this.pixelRatio / t.resolution, o = r * this.width, n = r * this.height, c = Math.PI * this.rotation / 180;
    I(e, e, E(a, i)), I(e, e, E(o / 2, n / 2)), tt(e, e, -c), I(e, e, E(-o / 2, -n / 2)), vt(e, e, E(o, n)), wt(this.transforms.displayViewScreenMat3, t.displayViewMat3, e);
  }
  onAttach() {
    this.invalidateVAO();
  }
  onDetach() {
    this.invalidateVAO();
  }
  _createVectorFieldVAO(t, e) {
    const { vertexData: a, indexData: i } = e, r = A.createVertex(t, D.STATIC_DRAW, new Float32Array(a)), o = A.createIndex(t, D.STATIC_DRAW, new Uint32Array(i)), n = Rt("vector-field", { geometry: [{ location: 0, name: "a_pos", count: 2, type: p.FLOAT, normalized: !1 }, { location: 1, name: "a_offset", count: 2, type: p.FLOAT, normalized: !1 }, { location: 2, name: "a_vv", count: 2, type: p.FLOAT, normalized: !1 }] });
    return { vao: new k(t, n.attributes, n.bufferLayouts, { geometry: r }, o), elementCount: i.length };
  }
}
export {
  we as a,
  xe as d,
  Se as f
};
//# sourceMappingURL=RasterVFDisplayObject-C9Rtr1Qm.js.map
