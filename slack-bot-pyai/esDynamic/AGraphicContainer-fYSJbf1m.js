import { fg as p, h0 as O, h1 as D, f9 as I, fe as V, fa as $, fb as w, h2 as z, fc as C, b5 as E } from "./main-DhLeoxL5.js";
import { i as L, r as N } from "./TechniqueInstance-BnthOl8O.js";
import { i as T, N as F } from "./Container-B4fR9B2k.js";
import { h } from "./FeatureCommandQueue-DhBM6snO.js";
import { r as P } from "./UpdateTracking2D-klYfSIYS.js";
import { r as k } from "./vec3f32-BS0cezmI.js";
import { b as U } from "./LabelMetric-D5S4VUnR.js";
import { h as v } from "./Program-Bz_GT0wk.js";
import { R as x, E as W, C as M, F as b } from "./enums-Do5C4ZjN.js";
import { o as H } from "./ProgramTemplate-BeH75DLk.js";
let q = 0;
function c(f, e, t) {
  return new L(P(q++), f, f.meshWriter.name, e, t);
}
const d = { geometry: { visualVariableColor: null, visualVariableOpacity: null, visualVariableSizeMinMaxValue: null, visualVariableSizeScaleStops: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null, visualVariableRotation: null } };
class j {
  constructor() {
    this.instances = { fill: c(h.fill, d, { zoomRange: !0 }), marker: c(h.marker, d, { zoomRange: !0 }), line: c(h.line, d, { zoomRange: !0 }), text: c(h.text, d, { zoomRange: !0, referenceSymbol: !1, clipAngle: !1 }), complexFill: c(h.complexFill, d, { zoomRange: !0 }), texturedLine: c(h.texturedLine, d, { zoomRange: !0 }) }, this._instancesById = Object.values(this.instances).reduce((e, t) => (e.set(t.instanceId, t), e), /* @__PURE__ */ new Map());
  }
  getInstance(e) {
    return this._instancesById.get(e);
  }
}
const G = Math.PI / 180, Y = 4;
class J extends T {
  constructor(e) {
    super(), this._program = null, this._vao = null, this._vertexBuffer = null, this._indexBuffer = null, this._dvsMat3 = p(), this._localOrigin = { x: 0, y: 0 }, this._getBounds = e;
  }
  destroy() {
    this._vao && (this._vao.dispose(), this._vao = null, this._vertexBuffer = null, this._indexBuffer = null), this._program = O(this._program);
  }
  doRender(e) {
    const { context: t } = e, s = this._getBounds();
    if (s.length < 1) return;
    this._createShaderProgram(t), this._updateMatricesAndLocalOrigin(e), this._updateBufferData(t, s), t.setBlendingEnabled(!0), t.setDepthTestEnabled(!1), t.setStencilWriteMask(0), t.setStencilTestEnabled(!1), t.setBlendFunction(x.ONE, x.ONE_MINUS_SRC_ALPHA), t.setColorMask(!0, !0, !0, !0);
    const a = this._program;
    t.bindVAO(this._vao), t.useProgram(a), a.setUniformMatrix3fv("u_dvsMat3", this._dvsMat3), t.gl.lineWidth(1), t.drawElements(W.LINES, 8 * s.length, M.UNSIGNED_INT, 0), t.bindVAO();
  }
  _createTransforms() {
    return { displayViewScreenMat3: p() };
  }
  _createShaderProgram(e) {
    if (this._program) return;
    const t = `precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`, s = `precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;
    this._program = e.programCache.acquire(t, s, y().attributes);
  }
  _updateMatricesAndLocalOrigin(e) {
    const { state: t } = e, { displayMat3: s, size: a, resolution: _, pixelRatio: n, rotation: o, viewpoint: i } = t, l = G * o, { x: r, y: R } = i.targetGeometry, B = D(r, t.spatialReference);
    this._localOrigin.x = B, this._localOrigin.y = R;
    const g = n * a[0], m = n * a[1], S = _ * g, A = _ * m, u = I(this._dvsMat3);
    V(u, u, s), $(u, u, w(g / 2, m / 2)), z(u, u, k(a[0] / S, -m / A, 1)), C(u, u, -l);
  }
  _updateBufferData(e, t) {
    const { x: s, y: a } = this._localOrigin, _ = 2 * Y * t.length, n = new Float32Array(_), o = new Uint32Array(8 * t.length);
    let i = 0, l = 0;
    for (const r of t) r && (n[2 * i] = r[0] - s, n[2 * i + 1] = r[1] - a, n[2 * i + 2] = r[0] - s, n[2 * i + 3] = r[3] - a, n[2 * i + 4] = r[2] - s, n[2 * i + 5] = r[3] - a, n[2 * i + 6] = r[2] - s, n[2 * i + 7] = r[1] - a, o[l] = i + 0, o[l + 1] = i + 3, o[l + 2] = i + 3, o[l + 3] = i + 2, o[l + 4] = i + 2, o[l + 5] = i + 1, o[l + 6] = i + 1, o[l + 7] = i + 0, i += 4, l += 8);
    if (this._vertexBuffer ? this._vertexBuffer.setData(n.buffer) : this._vertexBuffer = v.createVertex(e, b.DYNAMIC_DRAW, n.buffer), this._indexBuffer ? this._indexBuffer.setData(o) : this._indexBuffer = v.createIndex(e, b.DYNAMIC_DRAW, o), !this._vao) {
      const r = y();
      this._vao = new H(e, r.attributes, r.bufferLayouts, { geometry: this._vertexBuffer }, this._indexBuffer);
    }
  }
}
const y = () => U("bounds", { geometry: [{ location: 0, name: "a_position", count: 2, type: M.FLOAT }] });
class ae extends N {
  constructor(e) {
    super(e), this._instanceStore = new j(), this.checkHighlight = () => !0;
  }
  destroy() {
    super.destroy(), this._boundsRenderer = E(this._boundsRenderer);
  }
  get instanceStore() {
    return this._instanceStore;
  }
  enableRenderingBounds(e) {
    this._boundsRenderer = new J(e), this.requestRender();
  }
  get hasHighlight() {
    return this.checkHighlight();
  }
  onTileData(e, t) {
    e.onMessage(t), this.contains(e) || this.addChild(e), this.requestRender();
  }
  _renderChildren(e, t) {
    e.selection = t;
    for (const s of this.children) {
      if (!s.visible) continue;
      s.getDisplayList(e.drawPhase, this._instanceStore, F.STRICT_ORDER)?.render(e);
    }
  }
}
export {
  ae as i
};
//# sourceMappingURL=AGraphicContainer-fYSJbf1m.js.map
