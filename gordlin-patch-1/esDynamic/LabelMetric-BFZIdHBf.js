import { kK as _, fb as N, kL as b, s as g, C as U } from "./main-BEi6lHs4.js";
import { C as h, U as u } from "./enums-Do5C4ZjN.js";
import "./enums-CQ3NrvMA.js";
import { s as A, e as Y, m as B } from "./Texture-ctaZNaGY.js";
import "./Program-vOtgyLxJ.js";
import { t as L } from "./VertexElementDescriptor-BAy1DPb3.js";
let m = class E {
  constructor(t, e, r, n, i, a, o) {
    this.instanceId = t, this.textureKey = e, this.indexStart = r, this.indexCount = n, this.vertexStart = i, this.vertexCount = a, this.overlaps = o;
  }
  updateBaseOffsets(t) {
    this.vertexStart += t.vertexFrom, this.indexStart += t.indexFrom;
  }
  clone() {
    return new E(this.instanceId, this.textureKey, this.indexStart, this.indexCount, this.vertexStart, this.vertexCount, this.overlaps);
  }
  static write(t, e, r, n, i, a, o, c) {
    t.push(e), t.push(r), t.push(n), t.push(i), t.push(a), t.push(o), t.push(c);
  }
  serialize(t) {
    return t.push(this.instanceId), t.push(this.textureKey), t.push(this.indexStart), t.push(this.indexCount), t.push(this.vertexStart), t.push(this.vertexCount), t.push(this.overlaps), t;
  }
  static deserialize(t) {
    const e = t.readInt32(), r = t.readInt32(), n = t.readInt32(), i = t.readInt32(), a = t.readInt32(), o = t.readInt32(), c = t.readInt32();
    return new E(e, r, n, i, a, o, c);
  }
};
m.byteSizeHint = 7 * Uint32Array.BYTES_PER_ELEMENT;
function T(s, t) {
  if (t !== null) {
    s.push(t.length);
    for (const e of t) e.serialize(s);
    return s;
  }
  s.push(0);
}
function I(s, t, e) {
  const r = s.readInt32(), n = new Array(r);
  for (let i = 0; i < n.length; i++) n[i] = t.deserialize(s, e);
  return n;
}
class y {
  constructor(t, e) {
    this.id = t, this.sortKey = e, this.records = [];
  }
  serialize(t) {
    return t.push(this.id), t.writeF32(this.sortKey), T(t, this.records), t;
  }
  static deserialize(t) {
    const e = t.readInt32(), r = t.readF32(), n = new y(e, r);
    return n.records = I(t, m) ?? [], n;
  }
}
y.byteSizeHint = 2 * Uint32Array.BYTES_PER_ELEMENT + m.byteSizeHint;
function $(s) {
  const t = s.map(({ name: e, count: r, type: n }) => `${e}.${r}.${n}`).join(",");
  return _(t);
}
function f(s, t, e, r, n, i, a) {
  if (s.primitiveName === t) {
    for (const o in s) if (o === e) {
      let c = r?.readWithDefault(n, i, s[o] && a);
      return s.type === "text" && (c = c.toString()), void (s[o] = c);
    }
  }
  if ("type" in s && s.type != null) switch (s.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      if (s.symbolLayers) for (const o of s.symbolLayers) f(o, t, e, r, n, i, a);
      break;
    case "CIMHatchFill":
      s.lineSymbol && f(s.lineSymbol, t, e, r, n, i, a);
      break;
    case "CIMSolidStroke":
    case "CIMSolidFill":
    case "CIMVectorMarker":
      if (s.type === "CIMVectorMarker" && s.markerGraphics) for (const o of s.markerGraphics) f(o, t, e, r, n, i, a), f(o.symbol, t, e, r, n, i, a);
  }
}
function W(s) {
  const t = s.width;
  return s.effects != null ? 256 : Math.max(1.25 * t, 8);
}
class l {
  constructor(t, e, r, n) {
    this.computedX = 0, this.computedY = 0, this.center = N(t, e), this.centerT = b(), this.halfWidth = r / 2, this.halfHeight = n / 2, this.width = r, this.height = n;
  }
  get x() {
    return this.center[0];
  }
  get y() {
    return this.center[1];
  }
  get blX() {
    return this.center[0] + this.halfWidth;
  }
  get blY() {
    return this.center[1] + this.halfHeight;
  }
  get trX() {
    return this.center[0] - this.halfWidth;
  }
  get trY() {
    return this.center[1] - this.halfHeight;
  }
  get xmin() {
    return this.x - this.halfWidth;
  }
  get xmax() {
    return this.x + this.halfWidth;
  }
  get ymin() {
    return this.y - this.halfHeight;
  }
  get ymax() {
    return this.y + this.halfHeight;
  }
  set x(t) {
    this.center[0] = t;
  }
  set y(t) {
    this.center[1] = t;
  }
  clone() {
    return new l(this.x, this.y, this.width, this.height);
  }
  serialize(t) {
    return t.writeF32(this.center[0]), t.writeF32(this.center[1]), t.push(this.width), t.push(this.height), t;
  }
  findCollisionDelta(t, e = 4) {
    const r = Math.abs(t.centerT[0] - this.centerT[0]), n = Math.abs(t.centerT[1] - this.centerT[1]), i = (t.halfWidth + this.halfWidth + e) / r, a = (t.halfHeight + this.halfHeight + e) / n, o = Math.min(i, a);
    return Math.log2(o);
  }
  extend(t) {
    const e = Math.min(this.xmin, t.xmin), r = Math.min(this.ymin, t.ymin), n = Math.max(this.xmax, t.xmax) - e, i = Math.max(this.ymax, t.ymax) - r, a = e + n / 2, o = r + i / 2;
    this.width = n, this.height = i, this.halfWidth = n / 2, this.halfHeight = i / 2, this.x = a, this.y = o;
  }
  static deserialize(t) {
    const e = t.readF32(), r = t.readF32(), n = t.readInt32(), i = t.readInt32();
    return new l(e, r, n, i);
  }
}
const R = new Float32Array(1);
new Uint32Array(R.buffer);
function X(s, t) {
  return 65535 & s | t << 16;
}
function K(s, t, e, r) {
  const n = e.packPrecisionFactor ?? 1;
  switch (e.type) {
    case h.BYTE:
      if (e.count === 1) s.setInt8(r + e.offset, t * n);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Int8Array.BYTES_PER_ELEMENT;
        s.setInt8(r + e.offset + a, t[i] * n);
      }
      break;
    case h.UNSIGNED_BYTE:
      if (e.count === 1) s.setUint8(r + e.offset, t * n);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Uint8Array.BYTES_PER_ELEMENT;
        s.setUint8(r + e.offset + a, t[i] * n);
      }
      break;
    case h.SHORT:
      if (e.count === 1) s.setInt16(r + e.offset, t * n, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Int16Array.BYTES_PER_ELEMENT;
        s.setInt16(r + e.offset + a, t[i] * n, !0);
      }
      break;
    case h.UNSIGNED_SHORT:
      if (e.count === 1) s.setUint16(r + e.offset, t * n, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Uint16Array.BYTES_PER_ELEMENT;
        s.setUint16(r + e.offset + a, t[i] * n, !0);
      }
      break;
    case h.INT:
      if (e.count === 1) s.setInt32(r + e.offset, t * n, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Int32Array.BYTES_PER_ELEMENT;
        s.setInt32(r + e.offset + a, t[i] * n, !0);
      }
      break;
    case h.UNSIGNED_INT:
      if (e.count === 1) s.setUint32(r + e.offset, t * n, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Uint32Array.BYTES_PER_ELEMENT;
        s.setUint32(r + e.offset + a, t[i] * n, !0);
      }
      break;
    case h.FLOAT:
      if (e.count === 1) s.setFloat32(r + e.offset, t * n, !0);
      else for (let i = 0; i < e.count; i++) {
        const a = i * Float32Array.BYTES_PER_ELEMENT;
        s.setFloat32(r + e.offset + a, t[i] * n, !0);
      }
  }
}
function q(s, t, e) {
  switch (t.type) {
    case h.BYTE: {
      if (t.count === 1) return s.getInt8(e + t.offset);
      const r = [];
      for (let n = 0; n < t.count; n++) {
        const i = n * Int8Array.BYTES_PER_ELEMENT;
        r.push(s.getInt8(e + t.offset + i));
      }
      return r;
    }
    case h.UNSIGNED_BYTE: {
      if (t.count === 1) return s.getUint8(e + t.offset);
      const r = [];
      for (let n = 0; n < t.count; n++) {
        const i = n * Uint8Array.BYTES_PER_ELEMENT;
        r.push(s.getUint8(e + t.offset + i));
      }
      return r;
    }
    case h.SHORT: {
      if (t.count === 1) return s.getInt16(e + t.offset, !0);
      const r = [];
      for (let n = 0; n < t.count; n++) {
        const i = n * Int16Array.BYTES_PER_ELEMENT;
        r.push(s.getInt16(e + t.offset + i, !0));
      }
      return r;
    }
    case h.UNSIGNED_SHORT: {
      if (t.count === 1) return s.getUint16(e + t.offset, !0);
      const r = [];
      for (let n = 0; n < t.count; n++) {
        const i = n * Uint16Array.BYTES_PER_ELEMENT;
        r.push(s.getUint16(e + t.offset + i, !0));
      }
      return r;
    }
    case h.INT: {
      if (t.count === 1) return s.getInt32(e + t.offset, !0);
      const r = [];
      for (let n = 0; n < t.count; n++) {
        const i = n * Int32Array.BYTES_PER_ELEMENT;
        r.push(s.getInt32(e + t.offset + i, !0));
      }
      return r;
    }
    case h.UNSIGNED_INT: {
      if (t.count === 1) return s.getUint32(e + t.offset, !0);
      const r = [];
      for (let n = 0; n < t.count; n++) {
        const i = n * Uint32Array.BYTES_PER_ELEMENT;
        r.push(s.getUint32(e + t.offset + i, !0));
      }
      return r;
    }
    case h.FLOAT: {
      if (t.count === 1) return s.getFloat32(e + t.offset, !0);
      const r = [];
      for (let n = 0; n < t.count; n++) {
        const i = n * Float32Array.BYTES_PER_ELEMENT;
        r.push(s.getFloat32(e + t.offset + i, !0));
      }
      return r;
    }
  }
}
const S = () => U.getLogger("esri.views.2d.engine.webgl.Utils");
function j(s) {
  switch (s) {
    case u.UNSIGNED_BYTE:
      return 1;
    case u.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case u.FLOAT:
      return 4;
    default:
      return void S().error(new g("webgl-utils", `Unable to handle type ${s}`));
  }
}
function V(s) {
  switch (s) {
    case u.UNSIGNED_BYTE:
      return Uint8Array;
    case u.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case u.FLOAT:
      return Float32Array;
    default:
      return void S().error(new g("webgl-utils", `Unable to handle type ${s}`));
  }
}
function k(s) {
  const t = {};
  for (const e in s) {
    const r = s[e];
    let n = 0;
    t[e] = r.map((i) => {
      const a = new L(i.name, i.count, i.type, n, 0, i.normalized || !1);
      return n += i.count * A(i.type), a;
    }), t[e]?.forEach((i) => i.stride = n);
  }
  return t;
}
const H = (s) => {
  const t = /* @__PURE__ */ new Map();
  for (const e in s) for (const r of s[e]) t.set(r.name, r.location);
  return t;
}, P = (s) => {
  const t = {};
  for (const e in s) {
    const r = s[e];
    t[e] = r?.length ? r[0].stride : 0;
  }
  return t;
}, p = /* @__PURE__ */ new Map(), J = (s, t) => {
  if (!p.has(s)) {
    const e = k(t), r = { strides: P(e), bufferLayouts: e, attributes: H(t) };
    p.set(s, r);
  }
  return p.get(s);
}, Q = (s) => s.includes("data:image/svg+xml");
function Z(s) {
  const t = [];
  for (let e = 0; e < s.length; e++) t.push(s.charCodeAt(e));
  return t;
}
function tt(s, t, e) {
  const r = new Y(t.width, t.height);
  return r.dataType = t.dataType, t.depth && (r.depth = t.depth), t.flipped && (r.flipped = t.flipped), t.hasMipmap && (r.hasMipmap = t.hasMipmap), r.internalFormat = t.internalFormat, t.isImmutable && (r.isImmutable = t.isImmutable), t.isOpaque && (r.isOpaque = t.isOpaque), t.maxAnisotropy && (r.maxAnisotropy = t.maxAnisotropy), r.pixelFormat = t.pixelFormat, t.preMultiplyAlpha && (r.preMultiplyAlpha = t.preMultiplyAlpha), t.samplingMode && (r.samplingMode = t.samplingMode), t.target && (r.target = t.target), r.uniform = t.uniform, t.unpackAlignment && (r.unpackAlignment = t.unpackAlignment), t.wrapMode && (r.wrapMode = t.wrapMode), new B(s, r, e);
}
function et(s) {
  return "url" in s && "urlHash" in s ? { ...s, url: "" } : s;
}
class w {
  constructor(t, e, r, n, i, a, o, c, d = []) {
    this.entityTexel = t, this.anchorX = e, this.anchorY = r, this.directionX = n, this.directionY = i, this.maxScale = a, this.minScale = o, this.referenceBounds = c, this.bounds = d;
  }
  serialize(t) {
    t.push(this.entityTexel), t.writeF32(this.anchorX), t.writeF32(this.anchorY), t.writeF32(this.directionX), t.writeF32(this.directionY), t.writeF32(this.maxScale), t.writeF32(this.minScale), this.referenceBounds === null ? (t.writeF32(0), t.writeF32(0), t.writeF32(0)) : (t.writeF32(this.referenceBounds.size), t.writeF32(this.referenceBounds.offsetX), t.writeF32(this.referenceBounds.offsetY)), T(t, this.bounds);
  }
  static deserialize(t) {
    const e = t.readInt32(), r = t.readF32(), n = t.readF32(), i = t.readF32(), a = t.readF32(), o = t.readF32(), c = t.readF32(), d = t.readF32(), x = t.readF32(), M = t.readF32(), F = I(t, l) ?? [];
    return new w(e, r, n, i, a, o, c, { size: d, offsetX: x, offsetY: M }, F);
  }
}
export {
  et as M,
  tt as T,
  $ as a,
  J as b,
  j as c,
  V as d,
  I as e,
  K as f,
  W as g,
  l as i,
  Z as j,
  q as n,
  f as o,
  w as r,
  y as s,
  m as t,
  X as w,
  Q as y
};
//# sourceMappingURL=LabelMetric-BFZIdHBf.js.map
