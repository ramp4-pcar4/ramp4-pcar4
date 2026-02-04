import { g$ as c, h0 as _, C as d } from "./main-CmejC-so.js";
import { V as f } from "./enums-Do5C4ZjN.js";
import { E as x } from "./Texture-DgcJZ8H_.js";
import { r as g } from "./Program-DzoSBHvo.js";
let V = class {
  constructor(e) {
    this._readFile = e;
  }
  resolveIncludes(e) {
    return this._resolve(e);
  }
  _resolve(e, r = /* @__PURE__ */ new Map()) {
    if (r.has(e)) return r.get(e);
    const i = this._read(e);
    if (!i) throw new Error(`cannot find shader file ${e}`);
    const n = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
    let s = n.exec(i);
    const o = [];
    for (; s != null; ) o.push({ path: s[1], start: s.index, length: s[0].length }), s = n.exec(i);
    let u = 0, h = "";
    return o.forEach((l) => {
      h += i.slice(u, l.start), h += r.has(l.path) ? "" : this._resolve(l.path, r), u = l.start + l.length;
    }), h += i.slice(u), r.set(e, h), h;
  }
  _read(e) {
    return this._readFile(e);
  }
};
const a = () => d.getLogger("esri.views.webgl.VertexArrayObject");
let O = class {
  constructor(t, e, r, i, n = null) {
    this._context = t, this._locations = e, this._layout = r, this._buffers = i, this._indexBuffer = n, this._glName = null, this._initialized = !1;
  }
  get glName() {
    return this._glName;
  }
  get context() {
    return this._context;
  }
  get vertexBuffers() {
    return this._buffers;
  }
  get indexBuffer() {
    return this._indexBuffer;
  }
  get byteSize() {
    return Object.keys(this._buffers).reduce((t, e) => t + this._buffers[e].usedMemory, this._indexBuffer != null ? this._indexBuffer.usedMemory : 0);
  }
  get layout() {
    return this._layout;
  }
  get locations() {
    return this._locations;
  }
  get usedMemory() {
    return this.byteSize + (Object.keys(this._buffers).length + (this._indexBuffer ? 1 : 0)) * c;
  }
  dispose() {
    if (this._context) {
      this._context.getBoundVAO() === this && this._context.bindVAO(null);
      for (const t in this._buffers) this._buffers[t]?.dispose(), delete this._buffers[t];
      this._indexBuffer = _(this._indexBuffer), this.disposeVAOOnly();
    } else (this._glName || Object.getOwnPropertyNames(this._buffers).length > 0) && a().warn("Leaked WebGL VAO");
  }
  disposeVAOOnly() {
    this._glName && (this._context.gl.deleteVertexArray(this._glName), this._glName = null, this._context.instanceCounter.decrement(f.VertexArrayObject, this)), this._context = null;
  }
  initialize() {
    if (this._initialized) return;
    const { gl: t } = this._context, e = t.createVertexArray();
    t.bindVertexArray(e), this._bindLayout(), t.bindVertexArray(null), this._glName = e, this._context.instanceCounter.increment(f.VertexArrayObject, this), this._initialized = !0;
  }
  bind() {
    this.initialize(), this._context.gl.bindVertexArray(this.glName);
  }
  _bindLayout() {
    const { _buffers: t, _layout: e, _indexBuffer: r } = this;
    t || a().error("Vertex buffer dictionary is empty!");
    const i = this._context.gl;
    for (const n in t) {
      const s = t[n];
      s || a().error("Vertex buffer is uninitialized!");
      const o = e[n];
      o || a().error("Vertex element descriptor is empty!"), x(this._context, this._locations, s, o);
    }
    r != null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, r.glName);
  }
  unbind() {
    this.initialize(), this._context.gl.bindVertexArray(null);
  }
};
function B(t, e, r = "") {
  return new g(t, r + e.shaders.vertexShader, r + e.shaders.fragmentShader, e.attributes);
}
export {
  V as a,
  B as e,
  O as o
};
//# sourceMappingURL=ProgramTemplate-p_8Syt13.js.map
