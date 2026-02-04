import { b as Y } from "./vec3-Clj_JEkr.js";
import { cm as ie, mf as ue, mg as le, mh as fe, lo as X, a8 as ce, mi as Q, a2 as de, ia as pe, a1 as me, s as f, mj as he, am as ye, c1 as we, j4 as Te, mk as ge, ml as _e, j1 as be, dh as xe, mm as W, mn as k, C as P, mo as Se } from "./main-BpIyUAdL.js";
import { e as Z, r as H } from "./mat4f64-Dn1WEGBx.js";
import { D as j, L as G, C as d, E as b } from "./enums-Do5C4ZjN.js";
import { v as Ee } from "./quat-DMsZ76KB.js";
import { e as Oe } from "./quatf64-DxbQqBtW.js";
import { B as Ae, g as Re, d as Ne, i as V, c as z, u as ee, x as ve, L as Ce, O as Ie, E as Me, F as Be, w as Le, q as $e, A as Fe, V as Ue } from "./BufferView-B9uuDoHv.js";
import { n as De, t as Pe, o as je, r as Ge } from "./resourceUtils-DpkiwfuQ.js";
import { l as Ve, i as He } from "./Indices-BPj5ZLET.js";
function ke(o, e, r) {
  if (o.count !== e.count) return void Y().error("source and destination buffers need to have the same number of elements");
  const t = o.count, n = r[0], s = r[1], a = r[2], i = r[3], u = r[4], l = r[5], p = r[6], c = r[7], m = r[8], h = r[9], T = r[10], g = r[11], y = r[12], x = r[13], S = r[14], E = r[15], w = o.typedBuffer, R = o.typedBufferStride, O = e.typedBuffer, I = e.typedBufferStride;
  for (let N = 0; N < t; N++) {
    const v = N * R, A = N * I, M = O[A], B = O[A + 1], L = O[A + 2], $ = O[A + 3];
    w[v] = n * M + u * B + m * L + y * $, w[v + 1] = s * M + l * B + h * L + x * $, w[v + 2] = a * M + p * B + T * L + S * $, w[v + 3] = i * M + c * B + g * L + E * $;
  }
}
function ze(o, e, r) {
  te(o.typedBuffer, e.typedBuffer, r, o.typedBufferStride, e.typedBufferStride);
}
function te(o, e, r, t = 4, n = t) {
  if (o.length / t != e.length / n) return void Y().error("source and destination buffers need to have the same number of elements");
  const s = o.length / t, a = r[0], i = r[1], u = r[2], l = r[3], p = r[4], c = r[5], m = r[6], h = r[7], T = r[8];
  let g = 0, y = 0;
  for (let x = 0; x < s; x++) {
    const S = e[g], E = e[g + 1], w = e[g + 2], R = e[g + 3];
    o[y] = a * S + l * E + m * w, o[y + 1] = i * S + p * E + h * w, o[y + 2] = u * S + c * E + T * w, o[y + 3] = R, g += n, y += t;
  }
}
function qe(o, e) {
  const r = Math.min(o.count, e.count), t = o.typedBuffer, n = o.typedBufferStride, s = e.typedBuffer, a = e.typedBufferStride;
  for (let i = 0; i < r; i++) {
    const u = i * n, l = i * a, p = s[l], c = s[l + 1], m = s[l + 2], h = p * p + c * c + m * m;
    if (h > 0) {
      const T = 1 / Math.sqrt(h);
      t[u] = T * p, t[u + 1] = T * c, t[u + 2] = T * m;
    }
  }
}
function Ke(o, e, r) {
  re(o.typedBuffer, e, r, o.typedBufferStride);
}
function re(o, e, r, t = 4) {
  const n = Math.min(o.length / t, e.count), s = e.typedBuffer, a = e.typedBufferStride;
  let i = 0, u = 0;
  for (let l = 0; l < n; l++) o[u] = r * s[i], o[u + 1] = r * s[i + 1], o[u + 2] = r * s[i + 2], o[u + 3] = r * s[i + 3], i += a, u += t;
}
Object.freeze(Object.defineProperty({ __proto__: null, normalize: qe, scale: re, scaleView: Ke, transformMat3: te, transformMat3View: ze, transformMat4: ke }, Symbol.toStringTag, { value: "Module" }));
function Je(o, e) {
  oe(o.typedBuffer, e.typedBuffer, o.typedBufferStride, e.typedBufferStride);
}
function oe(o, e, r = 2, t = r) {
  const n = e.length / 2;
  let s = 0, a = 0;
  if (ie(e) || ue(e)) {
    for (let u = 0; u < n; ++u) o[s] = e[a], o[s + 1] = e[a + 1], s += r, a += t;
    return;
  }
  const i = le(e);
  if (fe(e)) for (let u = 0; u < n; ++u) o[s] = Math.max(e[a] / i, -1), o[s + 1] = Math.max(e[a + 1] / i, -1), s += r, a += t;
  else for (let u = 0; u < n; ++u) o[s] = e[a] / i, o[s + 1] = e[a + 1] / i, s += r, a += t;
}
function Ye(o, e, r, t) {
  const n = o.typedBuffer, s = o.typedBufferStride, a = t?.count ?? o.count;
  let i = (t?.dstIndex ?? 0) * s;
  for (let u = 0; u < a; ++u) n[i] = e, n[i + 1] = r, i += s;
}
Object.freeze(Object.defineProperty({ __proto__: null, fill: Ye, normalizeIntegerBuffer: oe, normalizeIntegerBufferView: Je }, Symbol.toStringTag, { value: "Module" }));
function Xe(o, e) {
  ne(o.typedBuffer, e.typedBuffer, o.typedBufferStride, e.typedBufferStride);
}
function ne(o, e, r = 3, t = r) {
  const n = e.length / t;
  let s = 0, a = 0;
  for (let i = 0; i < n; ++i) o[s] = e[a], o[s + 1] = e[a + 1], o[s + 2] = e[a + 2], s += r, a += t;
}
function Qe(o, e, r, t, n) {
  const s = o.typedBuffer, a = o.typedBufferStride, i = n?.count ?? o.count;
  let u = (n?.dstIndex ?? 0) * a;
  for (let l = 0; l < i; ++l) s[u] = e, s[u + 1] = r, s[u + 2] = t, u += a;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: ne, copyView: Xe, fill: Qe }, Symbol.toStringTag, { value: "Module" }));
function We(o, e) {
  se(o.typedBuffer, e, o.typedBufferStride);
}
function se(o, e, r = 4) {
  const t = e.typedBuffer, n = e.typedBufferStride, s = e.count;
  let a = 0, i = 0;
  for (let u = 0; u < s; ++u) o[a] = t[i], o[a + 1] = t[i + 1], o[a + 2] = t[i + 2], o[a + 3] = t[i + 3], a += r, i += n;
}
function Ze(o, e, r, t, n, s) {
  const a = o.typedBuffer, i = o.typedBufferStride, u = s?.count ?? o.count;
  let l = (s?.dstIndex ?? 0) * i;
  for (let p = 0; p < u; ++p) a[l] = e, a[l + 1] = r, a[l + 2] = t, a[l + 3] = n, l += i;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: se, copyView: We, fill: Ze }, Symbol.toStringTag, { value: "Module" }));
let Lt = class {
  constructor(e) {
    this._streamDataRequester = e;
  }
  async loadJSON(e, r) {
    return this._load("json", e, r);
  }
  async loadBinary(e, r) {
    return X(e) ? (ce(r), Q(e)) : this._load("binary", e, r);
  }
  async loadImage(e, r) {
    return this._load("image", e, r);
  }
  async _load(e, r, t) {
    if (this._streamDataRequester == null) return (await de(r, { responseType: et[e] })).data;
    const n = await pe(this._streamDataRequester.request(r, e, t));
    if (n.ok === !0) return n.value;
    throw me(n.error), new f("", `Request for resource failed: ${n.error}`);
  }
};
const et = { image: "image", binary: "array-buffer", json: "json", "image+type": void 0 };
function tt(o = {}) {
  return { color: [1, 1, 1], opacity: 1, alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: !1, castShadows: !0, receiveShadows: !0, receiveAmbientOcclustion: !0, textureColor: null, textureNormal: null, textureOcclusion: null, textureEmissive: null, textureMetallicRoughness: null, colorTextureTransform: null, normalTextureTransform: null, occlusionTextureTransform: null, emissiveTextureTransform: null, metallicRoughnessTextureTransform: null, emissiveFactor: [0, 0, 0], metallicFactor: 1, roughnessFactor: 1, colorMixMode: "multiply", ...o };
}
function rt(o, e = {}) {
  return { data: o, parameters: { wrap: { s: j.REPEAT, t: j.REPEAT, ...e.wrap }, noUnpackFlip: !0, mipmap: !1, ...e } };
}
function D(o, e) {
  const r = o.count;
  e || (e = new o.TypedArrayConstructor(r));
  for (let t = 0; t < r; t++) e[t] = o.get(t);
  return e;
}
Object.freeze(Object.defineProperty({ __proto__: null, makeDense: D }, Symbol.toStringTag, { value: "Module" }));
let q = class {
  constructor(e) {
    this._data = e, this._offset4 = 0, this._dataUint32 = new Uint32Array(this._data, 0, Math.floor(this._data.byteLength / 4));
  }
  readUint32() {
    const e = this._offset4;
    return this._offset4 += 1, this._dataUint32[e];
  }
  readUint8Array(e) {
    const r = 4 * this._offset4;
    return this._offset4 += e / 4, new Uint8Array(this._data, r, e);
  }
  remainingBytes() {
    return this._data.byteLength - 4 * this._offset4;
  }
};
var C, K;
(function(o) {
  o.SCALAR = "SCALAR", o.VEC2 = "VEC2", o.VEC3 = "VEC3", o.VEC4 = "VEC4", o.MAT2 = "MAT2", o.MAT3 = "MAT3", o.MAT4 = "MAT4";
})(C || (C = {})), function(o) {
  o[o.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", o[o.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(K || (K = {}));
const ae = { baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, roughnessFactor: 1 }, ot = { pbrMetallicRoughness: ae, emissiveFactor: [0, 0, 0], alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: !1 }, nt = { ESRI_externalColorMixMode: "tint", ESRI_receiveShadows: !0, ESRI_receiveAmbientOcclusion: !0 }, J = (o = {}) => {
  const e = { ...ae, ...o.pbrMetallicRoughness }, r = st({ ...nt, ...o.extras });
  return { ...ot, ...o, pbrMetallicRoughness: e, extras: r };
};
function st(o) {
  switch (o.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      o.ESRI_externalColorMixMode = "tint";
  }
  return o;
}
const at = { magFilter: G.LINEAR, minFilter: G.LINEAR_MIPMAP_LINEAR, wrapS: j.REPEAT, wrapT: j.REPEAT }, it = (o) => ({ ...at, ...o });
function ut(o) {
  let e, r;
  return o.replace(/^(.*\/)?([^/]*)$/, (t, n, s) => (e = n || "", r = s || "", "")), { dirPart: e, filePart: r };
}
const F = { MAGIC: 1179937895, CHUNK_TYPE_JSON: 1313821514, CHUNK_TYPE_BIN: 5130562, MIN_HEADER_LENGTH: 20 };
class _ {
  constructor(e, r, t, n) {
    if (this._context = e, this.uri = r, this.json = t, this._glbBuffer = n, this._bufferLoaders = /* @__PURE__ */ new Map(), this._textureLoaders = /* @__PURE__ */ new Map(), this._textureCache = /* @__PURE__ */ new Map(), this._materialCache = /* @__PURE__ */ new Map(), this._nodeParentMap = /* @__PURE__ */ new Map(), this._nodeTransformCache = /* @__PURE__ */ new Map(), this._supportedExtensions = ["KHR_texture_basisu", "KHR_texture_transform"], this._baseUri = ut(this.uri).dirPart, this._checkVersionSupported(), this._checkRequiredExtensionsSupported(), t.scenes == null) throw new f("gltf-loader-unsupported-feature", "Scenes must be defined.");
    if (t.meshes == null) throw new f("gltf-loader-unsupported-feature", "Meshes must be defined");
    if (t.nodes == null) throw new f("gltf-loader-unsupported-feature", "Nodes must be defined.");
    this._computeNodeParents();
  }
  static async load(e, r, t) {
    if (X(r)) {
      const a = ye(r);
      if (a && a.mediaType !== "model/gltf-binary") try {
        const u = JSON.parse(a.isBase64 ? atob(a.data) : a.data);
        return new _(e, r, u);
      } catch {
      }
      const i = Q(r);
      if (_._isGLBData(i)) return this._fromGLBData(e, r, i);
    }
    if (mt.test(r) || t?.expectedType === "gltf") {
      const a = await e.loadJSON(r, t);
      return new _(e, r, a);
    }
    const n = await e.loadBinary(r, t);
    if (_._isGLBData(n)) return this._fromGLBData(e, r, n);
    if (ht.test(r) || t?.expectedType === "glb") throw new f("gltf-loader-invalid-glb", "This is not a valid glb file.");
    const s = await e.loadJSON(r, t);
    return new _(e, r, s);
  }
  static _isGLBData(e) {
    if (e == null) return !1;
    const r = new q(e);
    return r.remainingBytes() >= 4 && r.readUint32() === F.MAGIC;
  }
  static async _fromGLBData(e, r, t) {
    const n = await _._parseGLBData(t);
    return new _(e, r, n.json, n.binaryData);
  }
  static async _parseGLBData(e) {
    const r = new q(e);
    if (r.remainingBytes() < 12) throw new f("gltf-loader-error", "glb binary data is insufficiently large.");
    const t = r.readUint32(), n = r.readUint32(), s = r.readUint32();
    if (t !== F.MAGIC) throw new f("gltf-loader-error", "Magic first 4 bytes do not fit to expected glb value.");
    if (e.byteLength < s) throw new f("gltf-loader-error", "glb binary data is smaller than header specifies.");
    if (n !== 2) throw new f("gltf-loader-unsupported-feature", "An unsupported glb container version was detected. Only version 2 is supported.");
    let a, i, u = 0;
    for (; r.remainingBytes() >= 8; ) {
      const l = r.readUint32(), p = r.readUint32();
      if (u === 0) {
        if (p !== F.CHUNK_TYPE_JSON) throw new f("gltf-loader-error", "First glb chunk must be JSON.");
        if (l < 0) throw new f("gltf-loader-error", "No JSON data found.");
        a = await De(r.readUint8Array(l));
      } else if (u === 1) {
        if (p !== F.CHUNK_TYPE_BIN) throw new f("gltf-loader-unsupported-feature", "Second glb chunk expected to be BIN.");
        i = r.readUint8Array(l);
      } else P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");
      u += 1;
    }
    if (!a) throw new f("gltf-loader-error", "No glb JSON chunk detected.");
    return { json: a, binaryData: i };
  }
  async getBuffer(e, r) {
    const t = this.json.buffers[e];
    if (t.uri == null) {
      if (this._glbBuffer == null) throw new f("gltf-loader-error", "glb buffer not present");
      return this._glbBuffer;
    }
    const n = await this._getBufferLoader(e, r);
    if (n.byteLength !== t.byteLength) throw new f("gltf-loader-error", "Buffer byte lengths should match.");
    return n;
  }
  async _getBufferLoader(e, r) {
    const t = this._bufferLoaders.get(e);
    if (t) return t;
    const n = this.json.buffers[e].uri, s = this._context.loadBinary(this._resolveUri(n), r).then((a) => new Uint8Array(a));
    return this._bufferLoaders.set(e, s), s;
  }
  async getAccessor(e, r) {
    if (!this.json.accessors) throw new f("gltf-loader-unsupported-feature", "Accessors missing.");
    const t = this.json.accessors[e];
    if (t?.bufferView == null) throw new f("gltf-loader-unsupported-feature", "Some accessor does not specify a bufferView.");
    if (t.type in [C.MAT2, C.MAT3, C.MAT4]) throw new f("gltf-loader-unsupported-feature", `AttributeType ${t.type} is not supported`);
    const n = this.json.bufferViews[t.bufferView], s = await this.getBuffer(n.buffer, r), a = ct[t.type], i = dt[t.componentType], u = a * i, l = n.byteStride || u;
    return { raw: s.buffer, byteStride: l, byteOffset: s.byteOffset + (n.byteOffset || 0) + (t.byteOffset || 0), entryCount: t.count, isDenselyPacked: l === u, componentCount: a, componentByteSize: i, componentType: t.componentType, min: t.min, max: t.max, normalized: !!t.normalized };
  }
  async getIndexData(e, r) {
    if (e.indices == null) return;
    const t = await this.getAccessor(e.indices, r);
    if (t.isDenselyPacked) switch (t.componentType) {
      case d.UNSIGNED_BYTE:
        return new Uint8Array(t.raw, t.byteOffset, t.entryCount);
      case d.UNSIGNED_SHORT:
        return new Uint16Array(t.raw, t.byteOffset, t.entryCount);
      case d.UNSIGNED_INT:
        return new Uint32Array(t.raw, t.byteOffset, t.entryCount);
    }
    else switch (t.componentType) {
      case d.UNSIGNED_BYTE:
        return D(this._wrapAccessor(Ne, t));
      case d.UNSIGNED_SHORT:
        return D(this._wrapAccessor(Re, t));
      case d.UNSIGNED_INT:
        return D(this._wrapAccessor(Ae, t));
    }
  }
  async getPositionData(e, r) {
    if (e.attributes.POSITION == null) throw new f("gltf-loader-unsupported-feature", "No POSITION vertex data found.");
    const t = await this.getAccessor(e.attributes.POSITION, r);
    if (t.componentType !== d.FLOAT) throw new f("gltf-loader-unsupported-feature", "Expected type FLOAT for POSITION vertex attribute, but found " + d[t.componentType]);
    if (t.componentCount !== 3) throw new f("gltf-loader-unsupported-feature", "POSITION vertex attribute must have 3 components, but found " + t.componentCount.toFixed());
    return this._wrapAccessor(V, t);
  }
  async getNormalData(e, r) {
    if (e.attributes.NORMAL == null) throw new f("gltf-loader-error", "No NORMAL vertex data found.");
    const t = await this.getAccessor(e.attributes.NORMAL, r);
    if (t.componentType !== d.FLOAT) throw new f("gltf-loader-unsupported-feature", "Expected type FLOAT for NORMAL vertex attribute, but found " + d[t.componentType]);
    if (t.componentCount !== 3) throw new f("gltf-loader-unsupported-feature", "NORMAL vertex attribute must have 3 components, but found " + t.componentCount.toFixed());
    return this._wrapAccessor(V, t);
  }
  async getTangentData(e, r) {
    if (e.attributes.TANGENT == null) throw new f("gltf-loader-error", "No TANGENT vertex data found.");
    const t = await this.getAccessor(e.attributes.TANGENT, r);
    if (t.componentType !== d.FLOAT) throw new f("gltf-loader-unsupported-feature", "Expected type FLOAT for TANGENT vertex attribute, but found " + d[t.componentType]);
    if (t.componentCount !== 4) throw new f("gltf-loader-unsupported-feature", "TANGENT vertex attribute must have 4 components, but found " + t.componentCount.toFixed());
    return new z(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);
  }
  async getTextureCoordinates(e, r) {
    if (e.attributes.TEXCOORD_0 == null) throw new f("gltf-loader-error", "No TEXCOORD_0 vertex data found.");
    const t = await this.getAccessor(e.attributes.TEXCOORD_0, r);
    if (t.componentCount !== 2) throw new f("gltf-loader-unsupported-feature", "TEXCOORD_0 vertex attribute must have 2 components, but found " + t.componentCount.toFixed());
    if (t.componentType === d.FLOAT) return this._wrapAccessor(ee, t);
    if (!t.normalized) throw new f("gltf-loader-unsupported-feature", "Integer component types are only supported for a normalized accessor for TEXCOORD_0.");
    return pt(t);
  }
  async getVertexColors(e, r) {
    if (e.attributes.COLOR_0 == null) throw new f("gltf-loader-error", "No COLOR_0 vertex data found.");
    const t = await this.getAccessor(e.attributes.COLOR_0, r);
    if (t.componentCount !== 4 && t.componentCount !== 3) throw new f("gltf-loader-unsupported-feature", "COLOR_0 attribute must have 3 or 4 components, but found " + t.componentCount.toFixed());
    if (t.componentCount === 4) {
      if (t.componentType === d.FLOAT) return this._wrapAccessor(z, t);
      if (t.componentType === d.UNSIGNED_BYTE) return this._wrapAccessor(ve, t);
      if (t.componentType === d.UNSIGNED_SHORT) return this._wrapAccessor(Ce, t);
    } else if (t.componentCount === 3) {
      if (t.componentType === d.FLOAT) return this._wrapAccessor(V, t);
      if (t.componentType === d.UNSIGNED_BYTE) return this._wrapAccessor(Ie, t);
      if (t.componentType === d.UNSIGNED_SHORT) return this._wrapAccessor(Me, t);
    }
    throw new f("gltf-loader-unsupported-feature", "Unsupported component type for COLOR_0 attribute: " + d[t.componentType]);
  }
  hasPositions(e) {
    return e.attributes.POSITION !== void 0;
  }
  hasNormals(e) {
    return e.attributes.NORMAL !== void 0;
  }
  hasVertexColors(e) {
    return e.attributes.COLOR_0 !== void 0;
  }
  hasTextureCoordinates(e) {
    return e.attributes.TEXCOORD_0 !== void 0;
  }
  hasTangents(e) {
    return e.attributes.TANGENT !== void 0;
  }
  async getMaterial(e, r, t) {
    let n = e.material ? this._materialCache.get(e.material) : void 0;
    if (!n) {
      const s = e.material != null ? J(this.json.materials[e.material]) : J(), a = s.pbrMetallicRoughness, i = this.hasVertexColors(e), u = this.getTexture(a.baseColorTexture, r), l = this.getTexture(s.normalTexture, r), p = t ? this.getTexture(s.occlusionTexture, r) : void 0, c = t ? this.getTexture(s.emissiveTexture, r) : void 0, m = t ? this.getTexture(a.metallicRoughnessTexture, r) : void 0, h = e.material != null ? e.material : -1;
      n = { alphaMode: s.alphaMode, alphaCutoff: s.alphaCutoff, color: a.baseColorFactor, doubleSided: !!s.doubleSided, colorTexture: await u, normalTexture: await l, name: s.name, id: h, occlusionTexture: await p, emissiveTexture: await c, emissiveFactor: s.emissiveFactor, metallicFactor: a.metallicFactor, roughnessFactor: a.roughnessFactor, metallicRoughnessTexture: await m, hasVertexColors: i, ESRI_externalColorMixMode: s.extras.ESRI_externalColorMixMode, colorTextureTransform: a?.baseColorTexture?.extensions?.KHR_texture_transform, normalTextureTransform: s.normalTexture?.extensions?.KHR_texture_transform, occlusionTextureTransform: s.occlusionTexture?.extensions?.KHR_texture_transform, emissiveTextureTransform: s.emissiveTexture?.extensions?.KHR_texture_transform, metallicRoughnessTextureTransform: a?.metallicRoughnessTexture?.extensions?.KHR_texture_transform, receiveAmbientOcclusion: s.extras.ESRI_receiveAmbientOcclusion, receiveShadows: s.extras.ESRI_receiveShadows };
    }
    return n;
  }
  async getTexture(e, r) {
    if (!e) return;
    if ((e.texCoord || 0) !== 0) throw new f("gltf-loader-unsupported-feature", "Only TEXCOORD with index 0 is supported.");
    const t = e.index, n = this.json.textures[t], s = it(n.sampler != null ? this.json.samplers[n.sampler] : {}), a = this._getTextureSourceId(n), i = this.json.images[a], u = await this._loadTextureImageData(t, n, r);
    return we(this._textureCache, t, () => {
      const l = (c) => c === 33071 || c === 33648 || c === 10497, p = (c) => {
        throw new f("gltf-loader-error", `Unexpected TextureSampler WrapMode: ${c}`);
      };
      return { data: u, wrapS: l(s.wrapS) ? s.wrapS : p(s.wrapS), wrapT: l(s.wrapT) ? s.wrapT : p(s.wrapT), minFilter: s.minFilter, name: i.name, id: t };
    });
  }
  getNodeTransform(e) {
    if (e === void 0) return lt;
    let r = this._nodeTransformCache.get(e);
    if (!r) {
      const t = this.getNodeTransform(this._getNodeParent(e)), n = this.json.nodes[e];
      n.matrix ? r = Te(Z(), t, n.matrix) : n.translation || n.rotation || n.scale ? (r = H(t), n.translation && ge(r, r, n.translation), n.rotation && (U[3] = Ee(U, n.rotation), _e(r, r, U[3], U)), n.scale && be(r, r, n.scale)) : r = H(t), this._nodeTransformCache.set(e, r);
    }
    return r;
  }
  _wrapAccessor(e, r) {
    return new e(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * (r.entryCount - 1) + r.componentByteSize * r.componentCount);
  }
  _resolveUri(e) {
    return xe(e, this._baseUri);
  }
  _getNodeParent(e) {
    return this._nodeParentMap.get(e);
  }
  _checkVersionSupported() {
    const e = W.parse(this.json.asset.version, "glTF");
    ft.validate(e);
  }
  _checkRequiredExtensionsSupported() {
    const e = this.json;
    if (e.extensionsRequired && !e.extensionsRequired.every((r) => this._supportedExtensions.includes(r)))
      throw new f("gltf-loader-unsupported-feature", "gltf loader was not able to load unsupported feature. Required extensions: " + e.extensionsRequired.join(", "));
  }
  _computeNodeParents() {
    this.json.nodes.forEach((e, r) => {
      e.children && e.children.forEach((t) => {
        this._nodeParentMap.set(t, r);
      });
    });
  }
  async _loadTextureImageData(e, r, t) {
    const n = this._textureLoaders.get(e);
    if (n) return n;
    const s = this._createTextureLoader(r, t);
    return this._textureLoaders.set(e, s), s;
  }
  _getTextureSourceId(e) {
    if (e.extensions !== void 0 && e.extensions.KHR_texture_basisu !== null) return e.extensions.KHR_texture_basisu.source;
    if (e.source !== null) return e.source;
    throw new f("gltf-loader-unsupported-feature", "Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.");
  }
  async _createTextureLoader(e, r) {
    const t = this._getTextureSourceId(e), n = this.json.images[t];
    if (n.uri) {
      if (n.uri.endsWith(".ktx2")) {
        const u = await this._context.loadBinary(this._resolveUri(n.uri), r);
        return new Pe(new Uint8Array(u));
      }
      return this._context.loadImage(this._resolveUri(n.uri), r);
    }
    if (n.bufferView == null) throw new f("gltf-loader-unsupported-feature", "Image bufferView must be defined.");
    if (n.mimeType == null) throw new f("gltf-loader-unsupported-feature", "Image mimeType must be defined.");
    const s = this.json.bufferViews[n.bufferView], a = await this.getBuffer(s.buffer, r);
    if (s.byteStride != null) throw new f("gltf-loader-unsupported-feature", "byteStride not supported for image buffer");
    const i = a.byteOffset + (s.byteOffset || 0);
    return je(new Uint8Array(a.buffer, i, s.byteLength), n.mimeType);
  }
  async getLoadedBuffersSize() {
    if (this._glbBuffer) return this._glbBuffer.byteLength;
    const e = await k(Array.from(this._bufferLoaders.values())), r = await k(Array.from(this._textureLoaders.values()));
    return e.reduce((t, n) => t + (n?.byteLength ?? 0), 0) + r.reduce((t, n) => t + (n ? Ge(n) ? n.data.byteLength : n.width * n.height * 4 : 0), 0);
  }
}
const lt = he(Z(), Math.PI / 2), ft = new W(2, 0, "glTF"), U = Oe(), ct = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, dt = { [d.BYTE]: 1, [d.UNSIGNED_BYTE]: 1, [d.SHORT]: 2, [d.UNSIGNED_SHORT]: 2, [d.FLOAT]: 4, [d.INT]: 4, [d.UNSIGNED_INT]: 4 };
function pt(o) {
  switch (o.componentType) {
    case d.BYTE:
      return new Ue(o.raw, o.byteOffset, o.byteStride, o.byteOffset + o.byteStride * o.entryCount);
    case d.UNSIGNED_BYTE:
      return new Fe(o.raw, o.byteOffset, o.byteStride, o.byteOffset + o.byteStride * o.entryCount);
    case d.SHORT:
      return new $e(o.raw, o.byteOffset, o.byteStride, o.byteOffset + o.byteStride * o.entryCount);
    case d.UNSIGNED_SHORT:
      return new Le(o.raw, o.byteOffset, o.byteStride, o.byteOffset + o.byteStride * o.entryCount);
    case d.UNSIGNED_INT:
      return new Be(o.raw, o.byteOffset, o.byteStride, o.byteOffset + o.byteStride * o.entryCount);
    case d.FLOAT:
      return new ee(o.raw, o.byteOffset, o.byteStride, o.byteOffset + o.byteStride * o.entryCount);
  }
}
const mt = /\.gltf$/i, ht = /\.glb$/i;
let yt = 0;
async function Ut(o, e, r = {}, t = !0) {
  const n = await _.load(o, e, r), s = "gltf_" + yt++, a = { lods: [], materials: /* @__PURE__ */ new Map(), textures: /* @__PURE__ */ new Map(), meta: wt(n) }, i = !(!n.json.asset.extras || n.json.asset.extras.ESRI_type !== "symbolResource"), u = n.json.asset.extras?.ESRI_webstyleSymbol?.webstyle, l = /* @__PURE__ */ new Map();
  await Tt(n, async (c, m, h, T) => {
    const g = l.get(h) ?? 0;
    l.set(h, g + 1);
    const y = c.mode !== void 0 ? c.mode : b.TRIANGLES, x = y === b.TRIANGLES || y === b.TRIANGLE_STRIP || y === b.TRIANGLE_FAN ? y : null;
    if (x == null) return void P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode (" + b[y] + "). Skipping primitive.");
    if (!n.hasPositions(c)) return void P.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");
    const S = n.getPositionData(c, r), E = n.getMaterial(c, r, t), w = n.hasNormals(c) ? n.getNormalData(c, r) : null, R = n.hasTangents(c) ? n.getTangentData(c, r) : null, O = n.hasTextureCoordinates(c) ? n.getTextureCoordinates(c, r) : null, I = n.hasVertexColors(c) ? n.getVertexColors(c, r) : null, N = n.getIndexData(c, r), v = { name: T, transform: H(m), attributes: { position: await S, normal: w ? await w : null, texCoord0: O ? await O : null, color: I ? await I : null, tangent: R ? await R : null }, indices: await N, primitiveType: x, material: _t(a, await E, s) };
    let A = null;
    a.meta?.ESRI_lod != null && a.meta.ESRI_lod.metric === "screenSpaceRadius" && (A = a.meta.ESRI_lod.thresholds[h]), a.lods[h] = a.lods[h] || { parts: [], name: T, lodThreshold: A }, a.lods[h].parts[g] = v;
  });
  for (const c of a.lods) c.parts = c.parts.filter((m) => !!m);
  const p = await n.getLoadedBuffersSize();
  return { model: a, meta: { isEsriSymbolResource: i, uri: n.uri, ESRI_webstyle: u }, customMeta: {}, size: p };
}
function wt(o) {
  const e = o.json;
  let r = null;
  return e.nodes.forEach((t) => {
    const n = t.extras;
    n != null && (n.ESRI_proxyEllipsoid || n.ESRI_lod) && (r = n);
  }), r;
}
async function Tt(o, e) {
  const r = o.json, t = r.scenes[r.scene || 0].nodes, n = t.length > 1, s = [];
  for (const i of t) {
    const u = r.nodes[i];
    s.push(a(i, 0)), gt(u) && !n && u.extensions.MSFT_lod.ids.forEach((l, p) => a(l, p + 1));
  }
  async function a(i, u) {
    const l = r.nodes[i], p = o.getNodeTransform(i);
    if (l.weights != null && P.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."), l.mesh != null) {
      const c = r.meshes[l.mesh];
      for (const m of c.primitives) s.push(e(m, p, u, c.name));
    }
    for (const c of l.children || []) s.push(a(c, u));
  }
  await Promise.all(s);
}
function gt(o) {
  return o.extensions?.MSFT_lod && Array.isArray(o.extensions.MSFT_lod.ids);
}
function _t(o, e, r) {
  const t = (s) => {
    const a = `${r}_tex_${s && s.id}${s?.name ? "_" + s.name : ""}`;
    if (s && !o.textures.has(a)) {
      const i = rt(s.data, { wrap: { s: s.wrapS, t: s.wrapT }, mipmap: bt.has(s.minFilter), noUnpackFlip: !0 });
      o.textures.set(a, i);
    }
    return a;
  }, n = `${r}_mat_${e.id}_${e.name}`;
  if (!o.materials.has(n)) {
    const s = tt({ color: [e.color[0], e.color[1], e.color[2]], opacity: e.color[3], alphaMode: e.alphaMode, alphaCutoff: e.alphaCutoff, doubleSided: e.doubleSided, colorMixMode: e.ESRI_externalColorMixMode, textureColor: e.colorTexture ? t(e.colorTexture) : void 0, textureNormal: e.normalTexture ? t(e.normalTexture) : void 0, textureOcclusion: e.occlusionTexture ? t(e.occlusionTexture) : void 0, textureEmissive: e.emissiveTexture ? t(e.emissiveTexture) : void 0, textureMetallicRoughness: e.metallicRoughnessTexture ? t(e.metallicRoughnessTexture) : void 0, emissiveFactor: [e.emissiveFactor[0], e.emissiveFactor[1], e.emissiveFactor[2]], colorTextureTransform: e.colorTextureTransform, normalTextureTransform: e.normalTextureTransform, occlusionTextureTransform: e.occlusionTextureTransform, emissiveTextureTransform: e.emissiveTextureTransform, metallicRoughnessTextureTransform: e.metallicRoughnessTextureTransform, metallicFactor: e.metallicFactor, roughnessFactor: e.roughnessFactor, receiveShadows: e.receiveShadows, receiveAmbientOcclustion: e.receiveAmbientOcclusion });
    o.materials.set(n, s);
  }
  return n;
}
const bt = /* @__PURE__ */ new Set([G.LINEAR_MIPMAP_LINEAR, G.LINEAR_MIPMAP_NEAREST]);
function Dt(o, e) {
  switch (e) {
    case b.TRIANGLES:
      return xt(o);
    case b.TRIANGLE_STRIP:
      return St(o);
    case b.TRIANGLE_FAN:
      return Et(o);
  }
}
function xt(o) {
  return typeof o == "number" ? Ve(o) : Se(o) ? new Uint16Array(o) : o;
}
function St(o) {
  const e = typeof o == "number" ? o : o.length;
  if (e < 3) return [];
  const r = e - 2, t = He(3 * r);
  if (typeof o == "number") {
    let n = 0;
    for (let s = 0; s < r; s += 1) s % 2 == 0 ? (t[n++] = s, t[n++] = s + 1, t[n++] = s + 2) : (t[n++] = s + 1, t[n++] = s, t[n++] = s + 2);
  } else {
    let n = 0;
    for (let s = 0; s < r; s += 1) s % 2 == 0 ? (t[n++] = o[s], t[n++] = o[s + 1], t[n++] = o[s + 2]) : (t[n++] = o[s + 1], t[n++] = o[s], t[n++] = o[s + 2]);
  }
  return t;
}
function Et(o) {
  const e = typeof o == "number" ? o : o.length;
  if (e < 3) return new Uint16Array(0);
  const r = e - 2, t = r <= 65536 ? new Uint16Array(3 * r) : new Uint32Array(3 * r);
  if (typeof o == "number") {
    let i = 0;
    for (let u = 0; u < r; ++u) t[i++] = 0, t[i++] = u + 1, t[i++] = u + 2;
    return t;
  }
  const n = o[0];
  let s = o[1], a = 0;
  for (let i = 0; i < r; ++i) {
    const u = o[i + 2];
    t[a++] = n, t[a++] = s, t[a++] = u, s = u;
  }
  return t;
}
const Pt = 2.1;
export {
  qe as a,
  Ze as b,
  Je as c,
  Ye as d,
  Ke as e,
  Qe as f,
  We as g,
  Xe as h,
  Pt as i,
  te as j,
  oe as k,
  Ut as l,
  ne as m,
  Lt as n,
  Dt as o,
  ze as r,
  se as t,
  re as u
};
//# sourceMappingURL=DefaultMaterial_COLOR_GAMMA-CMdNnGVW.js.map
