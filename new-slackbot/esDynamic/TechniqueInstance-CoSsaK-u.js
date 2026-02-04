import { af as c, aj as v, s as V, C as U } from "./main-BpIyUAdL.js";
import { M as d, q as M, y as $, H as k, z as B, B as F, C as L, E as R } from "./definitions-7ZaZRHRo.js";
import { f as y, n as I } from "./UpdateTracking2D-ZVrlw9Xv.js";
import { d as g, c as O } from "./LabelMetric-Bulm-o4f.js";
import { D as w, L as z } from "./enums-Do5C4ZjN.js";
import { x as P } from "./Program-B2kWsUYK.js";
import { e as D, m as A } from "./Texture-DagG5chw.js";
import { i as C } from "./TileContainer-D2jFBYW8.js";
const N = () => U.getLogger("esri.views.2d.engine.webgl.AttributeStoreView");
class T {
  constructor(t, e, i) {
    this._texture = null, this._lastTexture = null, this._fbos = {}, this.texelSize = 4;
    const { buffer: s, pixelType: r, textureOnly: n } = t, a = g(r);
    this.blockIndex = i, this.pixelType = r, this.size = e, this.textureOnly = n, n || (this.data = new a(s)), this._resetRange();
  }
  destroy() {
    this._texture?.dispose();
    for (const t in this._fbos) {
      const e = this._fbos[t];
      e && (t === "0" && e.detachColorTexture(), e.dispose()), this._fbos[t] = null;
    }
    this._texture = null;
  }
  get _textureDesc() {
    const t = new D();
    return t.wrapMode = w.CLAMP_TO_EDGE, t.samplingMode = z.NEAREST, t.dataType = this.pixelType, t.width = this.size, t.height = this.size, t;
  }
  setData(t, e, i) {
    const s = y(t), r = this.data, n = s * this.texelSize + e;
    !r || n >= r.length || (r[n] = i, this.dirtyStart = Math.min(this.dirtyStart, s), this.dirtyEnd = Math.max(this.dirtyEnd, s));
  }
  getData(t, e) {
    if (this.data == null) return null;
    const i = y(t) * this.texelSize + e;
    return !this.data || i >= this.data.length ? null : this.data[i];
  }
  getTexture(t) {
    return this._texture ?? this._initTexture(t);
  }
  getFBO(t, e = 0) {
    if (!this._fbos[e]) {
      const i = e === 0 ? this.getTexture(t) : this._textureDesc;
      this._fbos[e] = new P(t, i);
    }
    return this._fbos[e];
  }
  get hasDirty() {
    const t = this.dirtyStart;
    return this.dirtyEnd >= t;
  }
  updateTexture(t, e) {
    try {
      const i = this.dirtyStart, s = this.dirtyEnd;
      if (!this.hasDirty) return;
      c("esri-2d-update-debug") && console.debug(`Version[${e}] AttributeStoreView.updateTexture`, { start: i, end: s, firstBytes: new Uint8Array(this.data.buffer.slice(0, 16)), block: this }), this._resetRange();
      const r = this.data.buffer, n = this.getTexture(t), a = 4, u = (i - i % this.size) / this.size, h = (s - s % this.size) / this.size, o = u, l = this.size, p = h, _ = u * this.size * a, f = (l + p * this.size) * a - _, b = g(this.pixelType), E = new b(r, _ * b.BYTES_PER_ELEMENT, f), S = this.size, m = p - o + 1;
      if (m > this.size) return void N().error(new V("mapview-webgl", "Out-of-bounds index when updating AttributeData"));
      n.updateData(0, 0, o, S, m, E);
    } catch {
    }
  }
  update(t) {
    const { data: e, start: i, end: s } = t;
    if (e != null && this.data != null) {
      const r = this.data, n = i * this.texelSize;
      for (let a = 0; a < e.length; a++) {
        const u = 1 << a % this.texelSize;
        t.layout & u && (r[n + a] = e[a]);
      }
    }
    this.dirtyStart = Math.min(this.dirtyStart, i), this.dirtyEnd = Math.max(this.dirtyEnd, s);
  }
  resize(t, e) {
    const i = this.size;
    if (this.size = e, this.textureOnly) return void (i !== this.size && (this._lastTexture = this._texture, this._texture = null));
    const s = g(this.pixelType);
    this.destroy(), this.data = new s(t.buffer);
  }
  _resetRange() {
    this.dirtyStart = 2147483647, this.dirtyEnd = 0;
  }
  _initTexture(t) {
    const e = new A(t, this._textureDesc, this.data ?? void 0);
    if (this._lastTexture != null && this._fbos[0]) {
      const i = this._lastTexture.descriptor.width, s = this._lastTexture.descriptor.height, r = this._lastTexture.descriptor.dataType, n = this._lastTexture.descriptor.pixelFormat, a = this.getFBO(t), u = O(r), h = new (g(r))(new ArrayBuffer(i * s * u * this.texelSize)), o = t.getBoundFramebufferObject(), { x: l, y: p, width: _, height: f } = t.getViewport();
      t.bindFramebuffer(a), a.readPixels(0, 0, i, s, n, r, h), e.updateData(0, 0, 0, 2 * i, s / 2, h), t.setViewport(l, p, _, f), t.bindFramebuffer(o);
    }
    return this.destroy(), this._texture = e, this._texture;
  }
}
class q {
  constructor() {
    this.size = 0, this._pendingAttributeUpdates = [], this._version = 0, this._epoch = 0, this._locked = !1;
  }
  _initialize(t) {
    if (!t) throw new Error("InternalError: initArgs must be defined");
    const e = t.blockDescriptors;
    if (this.size = t.blockSize, c("esri-2d-update-debug") && console.debug("AttributeStoreView.initialize", { message: t }), this._data == null) this._data = e.map((i, s) => i != null ? new T(i, this.size, s) : null);
    else for (let i = 0; i < this._data.length; i++) {
      const s = this._data[i], r = e[i];
      r != null && (s == null ? this._data[i] = new T(r, this.size, i) : s.resize(r, this.size));
    }
  }
  destroy() {
    for (const t of this._data ?? []) t?.destroy();
    this._defaultTexture?.dispose();
    for (const { resolver: t } of this._pendingAttributeUpdates) t.reject("AttributeStore destroyed");
    this._pendingAttributeUpdates = [];
  }
  isEmpty() {
    return this._data == null;
  }
  getBlock(t) {
    return this._data == null ? null : this._data[t];
  }
  setLabelMinZoom(t, e) {
    this.setData(t, 0, 1, e);
  }
  getLabelMinZoom(t) {
    return this.getData(t, 0, 1, 255);
  }
  getFilterFlags(t) {
    return this.getData(t, 0, 0, 0);
  }
  getVVSize(t) {
    return this.getData(t, d.VV, 0, 0);
  }
  getData(t, e, i, s) {
    if (!this._data) return 0;
    const r = this._data[e];
    if (r == null) return 0;
    const n = r.getData(t, i);
    return n ?? s;
  }
  setData(t, e, i, s) {
    this._data[e].setData(t, i, s);
  }
  lockTextureUploads() {
    this._locked = !0;
  }
  unlockTextureUploads() {
    this._locked = !1, this.update();
  }
  async requestUpdate(t) {
    const e = v();
    e.promise = e.promise.catch((i) => {
      c("esri-2d-update-debug") && console.error("AttributeStoreView.requestUpdate rejected", i);
    }), this._version = t.version, this._pendingAttributeUpdates.push({ inner: t, resolver: e }), c("esri-2d-update-debug") && console.debug(`Version[${this._version}] AttributeStoreView.requestUpdate`, { message: t });
  }
  get currentEpoch() {
    return this._epoch;
  }
  update() {
    if (this._locked) return;
    const t = this._pendingAttributeUpdates;
    this._pendingAttributeUpdates = [];
    for (const { inner: e, resolver: i } of t) {
      const { blockData: s, initArgs: r, sendUpdateEpoch: n, version: a } = e;
      c("esri-2d-update-debug") && console.debug(`Version[${this._version}] Epoch[${n}] AttributeStoreView.applyUpdate`), this._version = a, this._epoch = n, r != null && this._initialize(r);
      const u = this._data;
      for (let h = 0; h < s.length; h++) {
        const o = s[h], l = u[h];
        l != null && o != null && (c("esri-2d-update-debug") && console.debug(`Version[${this._version}] CpuBlock[${h}] AttributeStoreView.update`, { block: o }), l.update(o));
      }
      i.resolve();
    }
  }
  getUniforms(t) {
    return { filterFlags: { texture: this._getTexture(t, d.FilterFlags), unit: M }, animation: { texture: this._getTexture(t, d.Animation), unit: $ }, gpgpu: { texture: this._getTexture(t, d.GPGPU), unit: k }, visualVariableData: { texture: this._getTexture(t, d.VV), unit: B }, dataDriven0: { texture: this._getTexture(t, d.DD0), unit: F }, dataDriven1: { texture: this._getTexture(t, d.DD1), unit: L }, dataDriven2: { texture: this._getTexture(t, d.DD2), unit: R }, size: this.size };
  }
  _getTexture(t, e) {
    const i = this._data?.[e];
    return i ? (i.updateTexture(t, this._version), i.getTexture(t)) : this._getDefaultTexture(t);
  }
  _getDefaultTexture(t) {
    if (this._defaultTexture == null) {
      const e = new D();
      e.wrapMode = w.CLAMP_TO_EDGE, e.samplingMode = z.NEAREST, e.width = 1, e.height = 1, this._defaultTexture = new A(t, e, new Uint8Array(4));
    }
    return this._defaultTexture;
  }
}
class Q extends C {
  constructor(t) {
    super(t), this._statisticsByLevel = /* @__PURE__ */ new Map(), this.attributeView = new q();
  }
  destroy() {
    this.children.forEach((t) => t.destroy()), this.removeAllChildren(), this.attributeView.destroy();
  }
  doRender(t) {
    t.context.capabilities.enable("textureFloat"), super.doRender(t);
  }
  createRenderParams(t) {
    const e = super.createRenderParams(t);
    return e.attributeView = this.attributeView, e.instanceStore = this._instanceStore, e.statisticsByLevel = this._statisticsByLevel, e;
  }
}
class X {
  constructor(t, e, i, s, r) {
    this._instanceId = t, this.techniqueRef = e, this._meshWriterName = i, this._input = s, this.optionalAttributes = r;
  }
  get instanceId() {
    return I(this._instanceId);
  }
  createMeshInfo(t) {
    return { id: this._instanceId, meshWriterName: this._meshWriterName, options: t, optionalAttributes: this.optionalAttributes };
  }
  getInput() {
    return this._input;
  }
  setInput(t) {
    this._input = t;
  }
}
export {
  X as i,
  Q as r
};
//# sourceMappingURL=TechniqueInstance-CoSsaK-u.js.map
