import { y as l, u as o, i as a, c as p, l as c, p as _, o as y, m as F, T as m, h as g, a as w, b, d as v, A as E, O as z, x as A, g as T, w as H, E as I, L as M, B as $, F as O, I as k, U as D, j as B, V as C, M as G, S as V, k as j, q as L, v as q, z as J, C as K, D as N, G as S, H as P } from "./BufferView-CTM_qXeq.js";
import { e as f } from "./types-ChhhI6OU.js";
import { s as Q } from "./Util-BcihNJoR.js";
class h {
  constructor(t, e) {
    this.layout = t, this.buffer = typeof e == "number" ? new ArrayBuffer(e * t.stride) : e;
    for (const s of t.fields.keys()) {
      const i = t.fields.get(s);
      this[s] = new i.constructor(this.buffer, i.offset, this.stride);
    }
  }
  get stride() {
    return this.layout.stride;
  }
  get count() {
    return this.buffer.byteLength / this.stride;
  }
  get byteLength() {
    return this.buffer.byteLength;
  }
  getField(t, e) {
    const s = this[t];
    return s && s.elementCount === e.ElementCount && s.elementType === e.ElementType ? s : null;
  }
  slice(t, e) {
    return new h(this.layout, this.buffer.slice(t * this.stride, e * this.stride));
  }
  copyFrom(t, e = 0, s = 0, i = t.count) {
    const r = this.stride;
    if (r % 4 == 0) {
      const d = new Uint32Array(t.buffer, e * r, i * r / 4);
      new Uint32Array(this.buffer, s * r, i * r / 4).set(d);
    } else {
      const d = new Uint8Array(t.buffer, e * r, i * r);
      new Uint8Array(this.buffer, s * r, i * r).set(d);
    }
    return this;
  }
  get usedMemory() {
    return this.byteLength;
  }
  dispose() {
  }
}
class u {
  constructor(t = null) {
    this._stride = 0, this._lastAligned = 0, this._fields = /* @__PURE__ */ new Map(), t && (this._stride = t.stride, t.fields.forEach((e) => this._fields.set(e[0], { ...e[1], constructor: W(e[1].constructor) })));
  }
  vec2f(t, e) {
    return this._appendField(t, o, e), this;
  }
  vec2f64(t, e) {
    return this._appendField(t, F, e), this;
  }
  vec3f(t, e) {
    return this._appendField(t, a, e), this;
  }
  vec3f64(t, e) {
    return this._appendField(t, m, e), this;
  }
  vec4f(t, e) {
    return this._appendField(t, p, e), this;
  }
  vec4f64(t, e) {
    return this._appendField(t, g, e), this;
  }
  mat3f(t, e) {
    return this._appendField(t, c, e), this;
  }
  mat3f64(t, e) {
    return this._appendField(t, w, e), this;
  }
  mat4f(t, e) {
    return this._appendField(t, _, e), this;
  }
  mat4f64(t, e) {
    return this._appendField(t, b, e), this;
  }
  vec4u8(t, e) {
    return this._appendField(t, A, e), this;
  }
  f32(t, e) {
    return this._appendField(t, l, e), this;
  }
  f64(t, e) {
    return this._appendField(t, y, e), this;
  }
  u8(t, e) {
    return this._appendField(t, v, e), this;
  }
  u16(t, e) {
    return this._appendField(t, T, e), this;
  }
  i8(t, e) {
    return this._appendField(t, B, e), this;
  }
  vec2i8(t, e) {
    return this._appendField(t, C, e), this;
  }
  vec2i16(t, e) {
    return this._appendField(t, L, e), this;
  }
  vec2u8(t, e) {
    return this._appendField(t, E, e), this;
  }
  vec4u16(t, e) {
    return this._appendField(t, M, e), this;
  }
  u32(t, e) {
    return this._appendField(t, $, e), this;
  }
  _appendField(t, e, s) {
    if (this._fields.has(t)) return void Q(!1, `${t} already added to vertex buffer layout`);
    const i = e.ElementCount * f(e.ElementType), r = this._stride;
    this._stride += i, this._fields.set(t, { size: i, constructor: e, offset: r, optional: s });
  }
  createBuffer(t) {
    return new h(this, t);
  }
  createView(t) {
    return new h(this, t);
  }
  clone() {
    const t = new u();
    return t._stride = this._stride, t._fields = /* @__PURE__ */ new Map(), this._fields.forEach((e, s) => t._fields.set(s, e)), t.BufferType = this.BufferType, t;
  }
  get stride() {
    if (this._lastAligned !== this._fields.size) {
      let t = 1;
      this._fields.forEach((e) => t = Math.max(t, f(e.constructor.ElementType))), this._stride = Math.floor((this._stride + t - 1) / t) * t, this._lastAligned = this._fields.size;
    }
    return this._stride;
  }
  get fields() {
    return this._fields;
  }
}
function tt() {
  return new u();
}
class et {
  constructor(t) {
    this.fields = new Array(), t.fields.forEach((e, s) => {
      const i = { ...e, constructor: U(e.constructor) };
      this.fields.push([s, i]);
    }), this.stride = t.stride;
  }
}
const R = [l, o, a, p, c, _, y, F, m, g, w, b, v, E, z, A, T, H, I, M, $, O, k, D, B, C, G, V, j, L, q, J, K, N, S, P];
function U(n) {
  return `${n.ElementType}_${n.ElementCount}`;
}
function W(n) {
  return x.get(n);
}
const x = /* @__PURE__ */ new Map();
R.forEach((n) => x.set(U(n), n));
export {
  tt as H,
  et as I
};
//# sourceMappingURL=InterleavedLayout-BmC_ETD_.js.map
