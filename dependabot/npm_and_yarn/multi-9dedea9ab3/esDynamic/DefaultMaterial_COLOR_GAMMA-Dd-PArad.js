import { cu as re, mB as oe, mC as ne, mD as se, lR as H, dK as ae, mE as k, $ as ie, iC as ue, _ as le, s as l, mF as fe, ag as ce, cr as de, cD as pe, mG as me, mH as he, g7 as Te, dA as ye, mI as z, mJ as U, D as E, mK as we } from "./main-DMoCLB29.js";
import { e as K, r as A } from "./mat4f64-Dn1WEGBx.js";
import { D as O, L as R, C as f, E as y } from "./enums-DDkmfb-t.js";
import { v as ge } from "./quat-CfMPxeWd.js";
import { e as be } from "./quatf64-DxbQqBtW.js";
import { c as D, u as q, F as _e, w as xe, q as Se, A as Ee, V as Oe, B as Re, g as Ne, d as Ae, i as N, x as ve, L as Ce, O as Ie, E as Me } from "./BufferView-CQcDUFmA.js";
import { n as Le, t as Fe, o as Be, r as $e } from "./resourceUtils-CNcAT12m.js";
import { l as Ue, i as De } from "./Indices-CWy3HC5z.js";
function Pe(r, e) {
  J(r.typedBuffer, e.typedBuffer, r.typedBufferStride, e.typedBufferStride);
}
function J(r, e, o = 2, t = o) {
  const n = e.length / 2;
  let s = 0, a = 0;
  if (re(e) || oe(e)) {
    for (let u = 0; u < n; ++u) r[s] = e[a], r[s + 1] = e[a + 1], s += o, a += t;
    return;
  }
  const i = ne(e);
  if (se(e)) for (let u = 0; u < n; ++u) r[s] = Math.max(e[a] / i, -1), r[s + 1] = Math.max(e[a + 1] / i, -1), s += o, a += t;
  else for (let u = 0; u < n; ++u) r[s] = e[a] / i, r[s + 1] = e[a + 1] / i, s += o, a += t;
}
function Ge(r, e, o, t) {
  const n = r.typedBuffer, s = r.typedBufferStride, a = t?.count ?? r.count;
  let i = (t?.dstIndex ?? 0) * s;
  for (let u = 0; u < a; ++u) n[i] = e, n[i + 1] = o, i += s;
}
Object.freeze(Object.defineProperty({ __proto__: null, fill: Ge, normalizeIntegerBuffer: J, normalizeIntegerBufferView: Pe }, Symbol.toStringTag, { value: "Module" }));
function je(r, e) {
  Y(r.typedBuffer, e.typedBuffer, r.typedBufferStride, e.typedBufferStride);
}
function Y(r, e, o = 3, t = o) {
  const n = e.length / t;
  let s = 0, a = 0;
  for (let i = 0; i < n; ++i) r[s] = e[a], r[s + 1] = e[a + 1], r[s + 2] = e[a + 2], s += o, a += t;
}
function Ve(r, e, o, t, n) {
  const s = r.typedBuffer, a = r.typedBufferStride, i = n?.count ?? r.count;
  let u = (n?.dstIndex ?? 0) * a;
  for (let c = 0; c < i; ++c) s[u] = e, s[u + 1] = o, s[u + 2] = t, u += a;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: Y, copyView: je, fill: Ve }, Symbol.toStringTag, { value: "Module" }));
function He(r, e) {
  X(r.typedBuffer, e, r.typedBufferStride);
}
function X(r, e, o = 4) {
  const t = e.typedBuffer, n = e.typedBufferStride, s = e.count;
  let a = 0, i = 0;
  for (let u = 0; u < s; ++u) r[a] = t[i], r[a + 1] = t[i + 1], r[a + 2] = t[i + 2], r[a + 3] = t[i + 3], a += o, i += n;
}
function ke(r, e, o, t, n, s) {
  const a = r.typedBuffer, i = r.typedBufferStride, u = s?.count ?? r.count;
  let c = (s?.dstIndex ?? 0) * i;
  for (let p = 0; p < u; ++p) a[c] = e, a[c + 1] = o, a[c + 2] = t, a[c + 3] = n, c += i;
}
Object.freeze(Object.defineProperty({ __proto__: null, copy: X, copyView: He, fill: ke }, Symbol.toStringTag, { value: "Module" }));
let Et = class {
  constructor(e) {
    this._streamDataRequester = e;
  }
  async loadJSON(e, o) {
    return this._load("json", e, o);
  }
  async loadBinary(e, o) {
    return H(e) ? (ae(o), k(e)) : this._load("binary", e, o);
  }
  async loadImage(e, o) {
    return this._load("image", e, o);
  }
  async _load(e, o, t) {
    if (this._streamDataRequester == null) return (await ie(o, { responseType: ze[e] })).data;
    const n = await ue(this._streamDataRequester.request(o, e, t));
    if (n.ok === !0) return n.value;
    throw le(n.error), new l("", `Request for resource failed: ${n.error}`);
  }
};
const ze = { image: "image", binary: "array-buffer", json: "json", "image+type": void 0 };
function Ke(r = {}) {
  return { color: [1, 1, 1], opacity: 1, alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: !1, castShadows: !0, receiveShadows: !0, receiveAmbientOcclustion: !0, textureColor: null, textureNormal: null, textureOcclusion: null, textureEmissive: null, textureMetallicRoughness: null, colorTextureTransform: null, normalTextureTransform: null, occlusionTextureTransform: null, emissiveTextureTransform: null, metallicRoughnessTextureTransform: null, emissiveFactor: [0, 0, 0], metallicFactor: 1, roughnessFactor: 1, colorMixMode: "multiply", ...r };
}
function qe(r, e = {}) {
  return { data: r, parameters: { wrap: { s: O.REPEAT, t: O.REPEAT, ...e.wrap }, noUnpackFlip: !0, mipmap: !1, ...e } };
}
function S(r, e) {
  const o = r.count;
  e || (e = new r.TypedArrayConstructor(o));
  for (let t = 0; t < o; t++) e[t] = r.get(t);
  return e;
}
Object.freeze(Object.defineProperty({ __proto__: null, makeDense: S }, Symbol.toStringTag, { value: "Module" }));
let P = class {
  constructor(e) {
    this._data = e, this._offset4 = 0, this._dataUint32 = new Uint32Array(this._data, 0, Math.floor(this._data.byteLength / 4));
  }
  readUint32() {
    const e = this._offset4;
    return this._offset4 += 1, this._dataUint32[e];
  }
  readUint8Array(e) {
    const o = 4 * this._offset4;
    return this._offset4 += e / 4, new Uint8Array(this._data, o, e);
  }
  remainingBytes() {
    return this._data.byteLength - 4 * this._offset4;
  }
};
var b, G;
(function(r) {
  r.SCALAR = "SCALAR", r.VEC2 = "VEC2", r.VEC3 = "VEC3", r.VEC4 = "VEC4", r.MAT2 = "MAT2", r.MAT3 = "MAT3", r.MAT4 = "MAT4";
})(b || (b = {})), function(r) {
  r[r.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", r[r.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(G || (G = {}));
const Q = { baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, roughnessFactor: 1 }, Je = { pbrMetallicRoughness: Q, emissiveFactor: [0, 0, 0], alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: !1 }, Ye = { ESRI_externalColorMixMode: "tint", ESRI_receiveShadows: !0, ESRI_receiveAmbientOcclusion: !0 }, j = (r = {}) => {
  const e = { ...Q, ...r.pbrMetallicRoughness }, o = Xe({ ...Ye, ...r.extras });
  return { ...Je, ...r, pbrMetallicRoughness: e, extras: o };
};
function Xe(r) {
  switch (r.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      r.ESRI_externalColorMixMode = "tint";
  }
  return r;
}
const Qe = { magFilter: R.LINEAR, minFilter: R.LINEAR_MIPMAP_LINEAR, wrapS: O.REPEAT, wrapT: O.REPEAT }, We = (r) => ({ ...Qe, ...r });
function Ze(r) {
  let e, o;
  return r.replace(/^(.*\/)?([^/]*)$/, (t, n, s) => (e = n || "", o = s || "", "")), { dirPart: e, filePart: o };
}
const _ = { MAGIC: 1179937895, CHUNK_TYPE_JSON: 1313821514, CHUNK_TYPE_BIN: 5130562, MIN_HEADER_LENGTH: 20 };
class h {
  constructor(e, o, t, n) {
    if (this._context = e, this.uri = o, this.json = t, this._glbBuffer = n, this._bufferLoaders = /* @__PURE__ */ new Map(), this._textureLoaders = /* @__PURE__ */ new Map(), this._textureCache = /* @__PURE__ */ new Map(), this._materialCache = /* @__PURE__ */ new Map(), this._nodeParentMap = /* @__PURE__ */ new Map(), this._nodeTransformCache = /* @__PURE__ */ new Map(), this._supportedExtensions = ["KHR_texture_basisu", "KHR_texture_transform"], this._baseUri = Ze(this.uri).dirPart, this._checkVersionSupported(), this._checkRequiredExtensionsSupported(), t.scenes == null) throw new l("gltf-loader-unsupported-feature", "Scenes must be defined.");
    if (t.meshes == null) throw new l("gltf-loader-unsupported-feature", "Meshes must be defined");
    if (t.nodes == null) throw new l("gltf-loader-unsupported-feature", "Nodes must be defined.");
    this._computeNodeParents();
  }
  static async load(e, o, t) {
    if (H(o)) {
      const a = ce(o);
      if (a && a.mediaType !== "model/gltf-binary") try {
        const u = JSON.parse(a.isBase64 ? atob(a.data) : a.data);
        return new h(e, o, u);
      } catch {
      }
      const i = k(o);
      if (h._isGLBData(i)) return this._fromGLBData(e, o, i);
    }
    if (st.test(o) || t?.expectedType === "gltf") {
      const a = await e.loadJSON(o, t);
      return new h(e, o, a);
    }
    const n = await e.loadBinary(o, t);
    if (h._isGLBData(n)) return this._fromGLBData(e, o, n);
    if (at.test(o) || t?.expectedType === "glb") throw new l("gltf-loader-invalid-glb", "This is not a valid glb file.");
    const s = await e.loadJSON(o, t);
    return new h(e, o, s);
  }
  static _isGLBData(e) {
    if (e == null) return !1;
    const o = new P(e);
    return o.remainingBytes() >= 4 && o.readUint32() === _.MAGIC;
  }
  static async _fromGLBData(e, o, t) {
    const n = await h._parseGLBData(t);
    return new h(e, o, n.json, n.binaryData);
  }
  static async _parseGLBData(e) {
    const o = new P(e);
    if (o.remainingBytes() < 12) throw new l("gltf-loader-error", "glb binary data is insufficiently large.");
    const t = o.readUint32(), n = o.readUint32(), s = o.readUint32();
    if (t !== _.MAGIC) throw new l("gltf-loader-error", "Magic first 4 bytes do not fit to expected glb value.");
    if (e.byteLength < s) throw new l("gltf-loader-error", "glb binary data is smaller than header specifies.");
    if (n !== 2) throw new l("gltf-loader-unsupported-feature", "An unsupported glb container version was detected. Only version 2 is supported.");
    let a, i, u = 0;
    for (; o.remainingBytes() >= 8; ) {
      const c = o.readUint32(), p = o.readUint32();
      if (u === 0) {
        if (p !== _.CHUNK_TYPE_JSON) throw new l("gltf-loader-error", "First glb chunk must be JSON.");
        if (c < 0) throw new l("gltf-loader-error", "No JSON data found.");
        a = await Le(o.readUint8Array(c));
      } else if (u === 1) {
        if (p !== _.CHUNK_TYPE_BIN) throw new l("gltf-loader-unsupported-feature", "Second glb chunk expected to be BIN.");
        i = o.readUint8Array(c);
      } else E.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");
      u += 1;
    }
    if (!a) throw new l("gltf-loader-error", "No glb JSON chunk detected.");
    return { json: a, binaryData: i };
  }
  async getBuffer(e, o) {
    const t = this.json.buffers[e];
    if (t.uri == null) {
      if (this._glbBuffer == null) throw new l("gltf-loader-error", "glb buffer not present");
      return this._glbBuffer;
    }
    const n = await this._getBufferLoader(e, o);
    if (n.byteLength !== t.byteLength) throw new l("gltf-loader-error", "Buffer byte lengths should match.");
    return n;
  }
  async _getBufferLoader(e, o) {
    const t = this._bufferLoaders.get(e);
    if (t) return t;
    const n = this.json.buffers[e].uri, s = this._context.loadBinary(this._resolveUri(n), o).then((a) => new Uint8Array(a));
    return this._bufferLoaders.set(e, s), s;
  }
  async getAccessor(e, o) {
    if (!this.json.accessors) throw new l("gltf-loader-unsupported-feature", "Accessors missing.");
    const t = this.json.accessors[e];
    if (t?.bufferView == null) throw new l("gltf-loader-unsupported-feature", "Some accessor does not specify a bufferView.");
    if (t.type in [b.MAT2, b.MAT3, b.MAT4]) throw new l("gltf-loader-unsupported-feature", `AttributeType ${t.type} is not supported`);
    const n = this.json.bufferViews[t.bufferView], s = await this.getBuffer(n.buffer, o), a = rt[t.type], i = ot[t.componentType], u = a * i, c = n.byteStride || u;
    return { raw: s.buffer, byteStride: c, byteOffset: s.byteOffset + (n.byteOffset || 0) + (t.byteOffset || 0), entryCount: t.count, isDenselyPacked: c === u, componentCount: a, componentByteSize: i, componentType: t.componentType, min: t.min, max: t.max, normalized: !!t.normalized };
  }
  async getIndexData(e, o) {
    if (e.indices == null) return;
    const t = await this.getAccessor(e.indices, o);
    if (t.isDenselyPacked) switch (t.componentType) {
      case f.UNSIGNED_BYTE:
        return new Uint8Array(t.raw, t.byteOffset, t.entryCount);
      case f.UNSIGNED_SHORT:
        return new Uint16Array(t.raw, t.byteOffset, t.entryCount);
      case f.UNSIGNED_INT:
        return new Uint32Array(t.raw, t.byteOffset, t.entryCount);
    }
    else switch (t.componentType) {
      case f.UNSIGNED_BYTE:
        return S(m(Ae, t));
      case f.UNSIGNED_SHORT:
        return S(m(Ne, t));
      case f.UNSIGNED_INT:
        return S(m(Re, t));
    }
  }
  async getPositionData(e, o) {
    if (e.attributes.POSITION == null) throw new l("gltf-loader-unsupported-feature", "No POSITION vertex data found.");
    const t = await this.getAccessor(e.attributes.POSITION, o);
    if (t.componentType !== f.FLOAT) throw new l("gltf-loader-unsupported-feature", "Expected type FLOAT for POSITION vertex attribute, but found " + f[t.componentType]);
    if (t.componentCount !== 3) throw new l("gltf-loader-unsupported-feature", "POSITION vertex attribute must have 3 components, but found " + t.componentCount.toFixed());
    return m(N, t);
  }
  async getNormalData(e, o) {
    if (e.attributes.NORMAL == null) throw new l("gltf-loader-error", "No NORMAL vertex data found.");
    const t = await this.getAccessor(e.attributes.NORMAL, o);
    if (t.componentType !== f.FLOAT) throw new l("gltf-loader-unsupported-feature", "Expected type FLOAT for NORMAL vertex attribute, but found " + f[t.componentType]);
    if (t.componentCount !== 3) throw new l("gltf-loader-unsupported-feature", "NORMAL vertex attribute must have 3 components, but found " + t.componentCount.toFixed());
    return m(N, t);
  }
  async getTangentData(e, o) {
    if (e.attributes.TANGENT == null) throw new l("gltf-loader-error", "No TANGENT vertex data found.");
    const t = await this.getAccessor(e.attributes.TANGENT, o);
    if (t.componentType !== f.FLOAT) throw new l("gltf-loader-unsupported-feature", "Expected type FLOAT for TANGENT vertex attribute, but found " + f[t.componentType]);
    if (t.componentCount !== 4) throw new l("gltf-loader-unsupported-feature", "TANGENT vertex attribute must have 4 components, but found " + t.componentCount.toFixed());
    return new D(t.raw, t.byteOffset, t.byteStride, t.byteOffset + t.byteStride * t.entryCount);
  }
  async getTextureCoordinates(e, o) {
    if (e.attributes.TEXCOORD_0 == null) throw new l("gltf-loader-error", "No TEXCOORD_0 vertex data found.");
    const t = await this.getAccessor(e.attributes.TEXCOORD_0, o);
    if (t.componentCount !== 2) throw new l("gltf-loader-unsupported-feature", "TEXCOORD_0 vertex attribute must have 2 components, but found " + t.componentCount.toFixed());
    if (t.componentType === f.FLOAT) return m(q, t);
    if (!t.normalized) throw new l("gltf-loader-unsupported-feature", "Integer component types are only supported for a normalized accessor for TEXCOORD_0.");
    return nt(t);
  }
  async getVertexColors(e, o) {
    if (e.attributes.COLOR_0 == null) throw new l("gltf-loader-error", "No COLOR_0 vertex data found.");
    const t = await this.getAccessor(e.attributes.COLOR_0, o);
    if (t.componentCount !== 4 && t.componentCount !== 3) throw new l("gltf-loader-unsupported-feature", "COLOR_0 attribute must have 3 or 4 components, but found " + t.componentCount.toFixed());
    if (t.componentCount === 4) {
      if (t.componentType === f.FLOAT) return m(D, t);
      if (t.componentType === f.UNSIGNED_BYTE) return m(ve, t);
      if (t.componentType === f.UNSIGNED_SHORT) return m(Ce, t);
    } else if (t.componentCount === 3) {
      if (t.componentType === f.FLOAT) return m(N, t);
      if (t.componentType === f.UNSIGNED_BYTE) return m(Ie, t);
      if (t.componentType === f.UNSIGNED_SHORT) return m(Me, t);
    }
    throw new l("gltf-loader-unsupported-feature", "Unsupported component type for COLOR_0 attribute: " + f[t.componentType]);
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
  async getMaterial(e, o, t) {
    let n = e.material ? this._materialCache.get(e.material) : void 0;
    if (!n) {
      const s = e.material != null ? j(this.json.materials[e.material]) : j(), a = s.pbrMetallicRoughness, i = this.hasVertexColors(e), u = this.getTexture(a.baseColorTexture, o), c = this.getTexture(s.normalTexture, o), p = t ? this.getTexture(s.occlusionTexture, o) : void 0, d = t ? this.getTexture(s.emissiveTexture, o) : void 0, w = t ? this.getTexture(a.metallicRoughnessTexture, o) : void 0, T = e.material != null ? e.material : -1;
      n = { alphaMode: s.alphaMode, alphaCutoff: s.alphaCutoff, color: a.baseColorFactor, doubleSided: !!s.doubleSided, colorTexture: await u, normalTexture: await c, name: s.name, id: T, occlusionTexture: await p, emissiveTexture: await d, emissiveFactor: s.emissiveFactor, metallicFactor: a.metallicFactor, roughnessFactor: a.roughnessFactor, metallicRoughnessTexture: await w, hasVertexColors: i, ESRI_externalColorMixMode: s.extras.ESRI_externalColorMixMode, colorTextureTransform: a?.baseColorTexture?.extensions?.KHR_texture_transform, normalTextureTransform: s.normalTexture?.extensions?.KHR_texture_transform, occlusionTextureTransform: s.occlusionTexture?.extensions?.KHR_texture_transform, emissiveTextureTransform: s.emissiveTexture?.extensions?.KHR_texture_transform, metallicRoughnessTextureTransform: a?.metallicRoughnessTexture?.extensions?.KHR_texture_transform, receiveAmbientOcclusion: s.extras.ESRI_receiveAmbientOcclusion, receiveShadows: s.extras.ESRI_receiveShadows };
    }
    return n;
  }
  async getTexture(e, o) {
    if (!e) return;
    if ((e.texCoord || 0) !== 0) throw new l("gltf-loader-unsupported-feature", "Only TEXCOORD with index 0 is supported.");
    const t = e.index, n = this.json.textures[t], s = We(n.sampler != null ? this.json.samplers[n.sampler] : {}), a = V(n), i = this.json.images[a], u = await this._loadTextureImageData(t, n, o);
    return de(this._textureCache, t, () => {
      const c = (d) => d === 33071 || d === 33648 || d === 10497, p = (d) => {
        throw new l("gltf-loader-error", `Unexpected TextureSampler WrapMode: ${d}`);
      };
      return { data: u, wrapS: c(s.wrapS) ? s.wrapS : p(s.wrapS), wrapT: c(s.wrapT) ? s.wrapT : p(s.wrapT), minFilter: s.minFilter, name: i.name, id: t };
    });
  }
  getNodeTransform(e) {
    if (e === void 0) return et;
    let o = this._nodeTransformCache.get(e);
    if (!o) {
      const t = this.getNodeTransform(this._getNodeParent(e)), n = this.json.nodes[e];
      n.matrix ? o = pe(K(), t, n.matrix) : n.translation || n.rotation || n.scale ? (o = A(t), n.translation && me(o, o, n.translation), n.rotation && (x[3] = ge(x, n.rotation), he(o, o, x[3], x)), n.scale && Te(o, o, n.scale)) : o = A(t), this._nodeTransformCache.set(e, o);
    }
    return o;
  }
  _resolveUri(e) {
    return ye(e, this._baseUri);
  }
  _getNodeParent(e) {
    return this._nodeParentMap.get(e);
  }
  _checkVersionSupported() {
    const e = z.parse(this.json.asset.version, "glTF");
    tt.validate(e);
  }
  _checkRequiredExtensionsSupported() {
    const e = this.json;
    if (e.extensionsRequired && !e.extensionsRequired.every((o) => this._supportedExtensions.includes(o)))
      throw new l("gltf-loader-unsupported-feature", "gltf loader was not able to load unsupported feature. Required extensions: " + e.extensionsRequired.join(", "));
  }
  _computeNodeParents() {
    this.json.nodes.forEach((e, o) => {
      e.children && e.children.forEach((t) => {
        this._nodeParentMap.set(t, o);
      });
    });
  }
  async _loadTextureImageData(e, o, t) {
    const n = this._textureLoaders.get(e);
    if (n) return n;
    const s = this._createTextureLoader(o, t);
    return this._textureLoaders.set(e, s), s;
  }
  async _createTextureLoader(e, o) {
    const t = V(e), n = this.json.images[t];
    if (n.uri) {
      if (n.uri.endsWith(".ktx2")) {
        const u = await this._context.loadBinary(this._resolveUri(n.uri), o);
        return new Fe(new Uint8Array(u));
      }
      return this._context.loadImage(this._resolveUri(n.uri), o);
    }
    if (n.bufferView == null) throw new l("gltf-loader-unsupported-feature", "Image bufferView must be defined.");
    if (n.mimeType == null) throw new l("gltf-loader-unsupported-feature", "Image mimeType must be defined.");
    const s = this.json.bufferViews[n.bufferView], a = await this.getBuffer(s.buffer, o);
    if (s.byteStride != null) throw new l("gltf-loader-unsupported-feature", "byteStride not supported for image buffer");
    const i = a.byteOffset + (s.byteOffset || 0);
    return Be(new Uint8Array(a.buffer, i, s.byteLength), n.mimeType);
  }
  async getLoadedBuffersSize() {
    if (this._glbBuffer) return this._glbBuffer.byteLength;
    const e = await U(Array.from(this._bufferLoaders.values())), o = await U(Array.from(this._textureLoaders.values()));
    return e.reduce((t, n) => t + (n?.byteLength ?? 0), 0) + o.reduce((t, n) => t + (n ? $e(n) ? n.data.byteLength : n.width * n.height * 4 : 0), 0);
  }
}
const et = fe(K(), Math.PI / 2), tt = new z(2, 0, "glTF"), x = be(), rt = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, ot = { [f.BYTE]: 1, [f.UNSIGNED_BYTE]: 1, [f.SHORT]: 2, [f.UNSIGNED_SHORT]: 2, [f.HALF_FLOAT]: 2, [f.FLOAT]: 4, [f.INT]: 4, [f.UNSIGNED_INT]: 4 };
function nt(r) {
  switch (r.componentType) {
    case f.BYTE:
      return new Oe(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * r.entryCount);
    case f.UNSIGNED_BYTE:
      return new Ee(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * r.entryCount);
    case f.SHORT:
      return new Se(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * r.entryCount);
    case f.UNSIGNED_SHORT:
      return new xe(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * r.entryCount);
    case f.UNSIGNED_INT:
      return new _e(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * r.entryCount);
    case f.FLOAT:
      return new q(r.raw, r.byteOffset, r.byteStride, r.byteOffset + r.byteStride * r.entryCount);
  }
}
function m(r, e) {
  return new r(e.raw, e.byteOffset, e.byteStride, e.byteOffset + e.byteStride * (e.entryCount - 1) + e.componentByteSize * e.componentCount);
}
function V(r) {
  if (r.extensions?.KHR_texture_basisu != null) return r.extensions.KHR_texture_basisu.source;
  if (r.source !== null) return r.source;
  throw new l("gltf-loader-unsupported-feature", "Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.");
}
const st = /\.gltf$/i, at = /\.glb$/i;
let it = 0;
async function Nt(r, e, o = {}, t = !0) {
  const n = await h.load(r, e, o), s = "gltf_" + it++, a = { lods: [], materials: /* @__PURE__ */ new Map(), textures: /* @__PURE__ */ new Map(), meta: ut(n) }, i = !(!n.json.asset.extras || n.json.asset.extras.ESRI_type !== "symbolResource"), u = n.json.asset.extras?.ESRI_webstyleSymbol?.webstyle, c = /* @__PURE__ */ new Map();
  await lt(n, async (d, w, T, v) => {
    const C = c.get(T) ?? 0;
    c.set(T, C + 1);
    const g = d.mode !== void 0 ? d.mode : y.TRIANGLES, I = g === y.TRIANGLES || g === y.TRIANGLE_STRIP || g === y.TRIANGLE_FAN ? g : null;
    if (I == null) return void E.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode (" + y[g] + "). Skipping primitive.");
    if (!n.hasPositions(d)) return void E.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");
    const W = n.getPositionData(d, o), Z = n.getMaterial(d, o, t), M = n.hasNormals(d) ? n.getNormalData(d, o) : null, L = n.hasTangents(d) ? n.getTangentData(d, o) : null, F = n.hasTextureCoordinates(d) ? n.getTextureCoordinates(d, o) : null, B = n.hasVertexColors(d) ? n.getVertexColors(d, o) : null, ee = n.getIndexData(d, o), te = { name: v, transform: A(w), attributes: { position: await W, normal: M ? await M : null, texCoord0: F ? await F : null, color: B ? await B : null, tangent: L ? await L : null }, indices: await ee, primitiveType: I, material: ct(a, await Z, s) };
    let $ = null;
    a.meta?.ESRI_lod != null && a.meta.ESRI_lod.metric === "screenSpaceRadius" && ($ = a.meta.ESRI_lod.thresholds[T]), a.lods[T] = a.lods[T] || { parts: [], name: v, lodThreshold: $ }, a.lods[T].parts[C] = te;
  });
  for (const d of a.lods) d.parts = d.parts.filter((w) => !!w);
  const p = await n.getLoadedBuffersSize();
  return { model: a, meta: { isEsriSymbolResource: i, uri: n.uri, ESRI_webstyle: u }, customMeta: {}, size: p };
}
function ut(r) {
  const e = r.json;
  let o = null;
  return e.nodes.forEach((t) => {
    const n = t.extras;
    n != null && (n.ESRI_proxyEllipsoid || n.ESRI_lod) && (o = n);
  }), o;
}
async function lt(r, e) {
  const o = r.json, t = o.scenes[o.scene || 0].nodes, n = t.length > 1, s = [];
  for (const i of t) {
    const u = o.nodes[i];
    s.push(a(i, 0)), ft(u) && !n && u.extensions.MSFT_lod.ids.forEach((c, p) => a(c, p + 1));
  }
  async function a(i, u) {
    const c = o.nodes[i], p = r.getNodeTransform(i);
    if (c.weights != null && E.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."), c.mesh != null) {
      const d = o.meshes[c.mesh];
      for (const w of d.primitives) s.push(e(w, p, u, d.name));
    }
    for (const d of c.children || []) s.push(a(d, u));
  }
  await Promise.all(s);
}
function ft(r) {
  return r.extensions?.MSFT_lod && Array.isArray(r.extensions.MSFT_lod.ids);
}
function ct(r, e, o) {
  const t = (s) => {
    const a = `${o}_tex_${s && s.id}${s?.name ? "_" + s.name : ""}`;
    if (s && !r.textures.has(a)) {
      const i = qe(s.data, { wrap: { s: s.wrapS, t: s.wrapT }, mipmap: dt.has(s.minFilter), noUnpackFlip: !0 });
      r.textures.set(a, i);
    }
    return a;
  }, n = `${o}_mat_${e.id}_${e.name}`;
  if (!r.materials.has(n)) {
    const s = Ke({ color: [e.color[0], e.color[1], e.color[2]], opacity: e.color[3], alphaMode: e.alphaMode, alphaCutoff: e.alphaCutoff, doubleSided: e.doubleSided, colorMixMode: e.ESRI_externalColorMixMode, textureColor: e.colorTexture ? t(e.colorTexture) : void 0, textureNormal: e.normalTexture ? t(e.normalTexture) : void 0, textureOcclusion: e.occlusionTexture ? t(e.occlusionTexture) : void 0, textureEmissive: e.emissiveTexture ? t(e.emissiveTexture) : void 0, textureMetallicRoughness: e.metallicRoughnessTexture ? t(e.metallicRoughnessTexture) : void 0, emissiveFactor: [e.emissiveFactor[0], e.emissiveFactor[1], e.emissiveFactor[2]], colorTextureTransform: e.colorTextureTransform, normalTextureTransform: e.normalTextureTransform, occlusionTextureTransform: e.occlusionTextureTransform, emissiveTextureTransform: e.emissiveTextureTransform, metallicRoughnessTextureTransform: e.metallicRoughnessTextureTransform, metallicFactor: e.metallicFactor, roughnessFactor: e.roughnessFactor, receiveShadows: e.receiveShadows, receiveAmbientOcclustion: e.receiveAmbientOcclusion });
    r.materials.set(n, s);
  }
  return n;
}
const dt = /* @__PURE__ */ new Set([R.LINEAR_MIPMAP_LINEAR, R.LINEAR_MIPMAP_NEAREST]);
function At(r, e) {
  switch (e) {
    case y.TRIANGLES:
      return pt(r);
    case y.TRIANGLE_STRIP:
      return mt(r);
    case y.TRIANGLE_FAN:
      return ht(r);
  }
}
function pt(r) {
  return typeof r == "number" ? Ue(r) : we(r) ? new Uint16Array(r) : r;
}
function mt(r) {
  const e = typeof r == "number" ? r : r.length;
  if (e < 3) return [];
  const o = e - 2, t = De(3 * o);
  if (typeof r == "number") {
    let n = 0;
    for (let s = 0; s < o; s += 1) s % 2 == 0 ? (t[n++] = s, t[n++] = s + 1, t[n++] = s + 2) : (t[n++] = s + 1, t[n++] = s, t[n++] = s + 2);
  } else {
    let n = 0;
    for (let s = 0; s < o; s += 1) s % 2 == 0 ? (t[n++] = r[s], t[n++] = r[s + 1], t[n++] = r[s + 2]) : (t[n++] = r[s + 1], t[n++] = r[s], t[n++] = r[s + 2]);
  }
  return t;
}
function ht(r) {
  const e = typeof r == "number" ? r : r.length;
  if (e < 3) return new Uint16Array(0);
  const o = e - 2, t = o <= 65536 ? new Uint16Array(3 * o) : new Uint32Array(3 * o);
  if (typeof r == "number") {
    let i = 0;
    for (let u = 0; u < o; ++u) t[i++] = 0, t[i++] = u + 1, t[i++] = u + 2;
    return t;
  }
  const n = r[0];
  let s = r[1], a = 0;
  for (let i = 0; i < o; ++i) {
    const u = r[i + 2];
    t[a++] = n, t[a++] = s, t[a++] = u, s = u;
  }
  return t;
}
const vt = 2.1;
export {
  ke as a,
  Pe as b,
  Ge as c,
  je as d,
  He as e,
  Ve as f,
  vt as g,
  J as h,
  Y as i,
  Nt as l,
  Et as n,
  At as o,
  X as t
};
//# sourceMappingURL=DefaultMaterial_COLOR_GAMMA-Dd-PArad.js.map
