import { s as H, lo as ae, am as oe, fr as C, cr as Z, cf as ce, ch as he, ci as M, hu as J, hD as le, cp as L, lT as te, eS as fe, j1 as ue, hs as de, c1 as _e, C as me, i5 as pe, a6 as K, lU as ge } from "./main-BEi6lHs4.js";
import { o as we, e as Te } from "./mat4f64-Dn1WEGBx.js";
import { N as Ae, T as ye } from "./quat-DytykOB-.js";
import { o as be, r as Ee, e as Re } from "./quatf64-DxbQqBtW.js";
import { i as xe } from "./MeshLocalVertexSpace-3FunpxNt.js";
import { a as Ne } from "./Mesh-DKQ6sS_d.js";
import { O as Ie, C as Se } from "./georeference-mUxkUI5i.js";
import { C as p, D as A } from "./enums-Do5C4ZjN.js";
import { r as Y } from "./resourceUtils-BmeKYh4b.js";
function Me(i) {
  const e = se(i);
  return e != null ? e.toDataURL() : "";
}
async function W(i) {
  const e = se(i);
  if (e == null) throw new H("imageToArrayBuffer", "Unsupported image type");
  const t = await Oe(i), s = await new Promise((r) => e.toBlob(r, t));
  if (!s) throw new H("imageToArrayBuffer", "Failed to encode image");
  return { data: await s.arrayBuffer(), type: t };
}
async function Oe(i) {
  if (!(i instanceof HTMLImageElement)) return "image/png";
  const e = i.src;
  if (ae(e)) {
    const t = oe(e);
    return t?.mediaType === "image/jpeg" ? t.mediaType : "image/png";
  }
  return /\.png$/i.test(e) ? "image/png" : /\.(jpg|jpeg)$/i.test(e) ? "image/jpeg" : "image/png";
}
function se(i) {
  if (i instanceof HTMLCanvasElement) return i;
  if (i instanceof HTMLVideoElement) return null;
  const e = document.createElement("canvas");
  e.width = i.width, e.height = i.height;
  const t = e.getContext("2d");
  return i instanceof HTMLImageElement ? t.drawImage(i, 0, 0, i.width, i.height) : i instanceof ImageData && t.putImageData(i, 0, 0), e;
}
function Be(i) {
  const e = [], t = new Uint8Array(i);
  for (let s = 0; s < t.length; s++) e.push(String.fromCharCode(t[s]));
  return "data:application/octet-stream;base64," + btoa(e.join(""));
}
function Ce(i) {
  if (i.byteLength < 8) return !1;
  const e = new Uint8Array(i);
  return e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71 && e[4] === 13 && e[5] === 10 && e[6] === 26 && e[7] === 10;
}
var z;
(function(i) {
  i[i.JSON = 1313821514] = "JSON", i[i.BIN = 5130562] = "BIN";
})(z || (z = {}));
let S = class x {
  constructor(e, t) {
    if (!e) throw new Error("GLB requires a JSON gltf chunk");
    this._length = x.HEADER_SIZE, this._length += x.CHUNK_HEADER_SIZE;
    const s = this._textToArrayBuffer(e);
    if (this._length += this._alignTo(s.byteLength, 4), t && (this._length += x.CHUNK_HEADER_SIZE, this._length += t.byteLength, t.byteLength % 4)) throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const r = this._writeChunk(s, 12, z.JSON, 32);
    t && this._writeChunk(t, r, z.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, x.MAGIC, !0), this._outView.setUint32(4, x.VERSION, !0), this._outView.setUint32(8, this._length, !0);
  }
  _writeChunk(e, t, s, r = 0) {
    const n = this._alignTo(e.byteLength, 4);
    for (this._outView.setUint32(t, n, !0), this._outView.setUint32(t += 4, s, !0), this._writeArrayBuffer(this._outView.buffer, e, t += 4, 0, e.byteLength), t += e.byteLength; t % 4; ) r && this._outView.setUint8(t, r), t++;
    return t;
  }
  _writeArrayBuffer(e, t, s, r, n) {
    new Uint8Array(e, s, n).set(new Uint8Array(t, r, n), 0);
  }
  _textToArrayBuffer(e) {
    return new TextEncoder().encode(e).buffer;
  }
  _alignTo(e, t) {
    return t * Math.ceil(e / t);
  }
};
S.HEADER_SIZE = 12, S.CHUNK_HEADER_SIZE = 8, S.MAGIC = 1179937895, S.VERSION = 2;
var E, y, b, T, X, V, Q;
(function(i) {
  i[i.External = 0] = "External", i[i.DataURI = 1] = "DataURI", i[i.GLB = 2] = "GLB";
})(E || (E = {})), function(i) {
  i[i.External = 0] = "External", i[i.DataURI = 1] = "DataURI", i[i.GLB = 2] = "GLB";
}(y || (y = {})), function(i) {
  i[i.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", i[i.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(b || (b = {})), function(i) {
  i.SCALAR = "SCALAR", i.VEC2 = "VEC2", i.VEC3 = "VEC3", i.VEC4 = "VEC4", i.MAT2 = "MAT2", i.MAT3 = "MAT3", i.MAT4 = "MAT4";
}(T || (T = {})), function(i) {
  i[i.POINTS = 0] = "POINTS", i[i.LINES = 1] = "LINES", i[i.LINE_LOOP = 2] = "LINE_LOOP", i[i.LINE_STRIP = 3] = "LINE_STRIP", i[i.TRIANGLES = 4] = "TRIANGLES", i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
}(X || (X = {})), function(i) {
  i.OPAQUE = "OPAQUE", i.MASK = "MASK", i.BLEND = "BLEND";
}(V || (V = {})), function(i) {
  i[i.NoColor = 0] = "NoColor", i[i.FaceColor = 1] = "FaceColor", i[i.VertexColor = 2] = "VertexColor";
}(Q || (Q = {}));
let Le = class {
  constructor(e, t, s, r, n) {
    this._buffer = e, this._componentType = s, this._dataType = r, this._data = [], this._isFinalized = !1, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, t.bufferViews || (t.bufferViews = []), this.index = t.bufferViews.length, this._bufferView = { buffer: e.index, byteLength: -1, target: n };
    const a = this._getElementSize();
    a >= 4 && n !== b.ELEMENT_ARRAY_BUFFER && (this._bufferView.byteStride = a), t.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e) {
    const t = this._data.length;
    if (this._data.push(e), this._accessorIndex >= 0) {
      const s = t % this._numComponentsForDataType, r = this._accessorMin[s];
      this._accessorMin[s] = typeof r != "number" ? e : Math.min(r, e);
      const n = this._accessorMax[s];
      this._accessorMax[s] = typeof n != "number" ? e : Math.max(n, e);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e(t, s) {
      return s * Math.ceil(t / s);
    }
    return e(this.dataSize, 4);
  }
  getByteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  get byteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  _createTypedArray(e, t) {
    switch (this._componentType) {
      case p.BYTE:
        return new Int8Array(e, t);
      case p.FLOAT:
        return new Float32Array(e, t);
      case p.SHORT:
        return new Int16Array(e, t);
      case p.UNSIGNED_BYTE:
        return new Uint8Array(e, t);
      case p.UNSIGNED_INT:
        return new Uint32Array(e, t);
      case p.UNSIGNED_SHORT:
        return new Uint16Array(e, t);
    }
  }
  writeOutToBuffer(e, t) {
    this._createTypedArray(e, t).set(this._data);
  }
  writeAsync(e) {
    if (this._asyncWritePromise) throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e.then((t) => {
      const s = new Uint8Array(t);
      for (let r = 0; r < s.length; ++r) this._data.push(s[r]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e) {
    if (this._accessorIndex >= 0) throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e;
    const t = this._numComponentsForDataType;
    this._accessorMin = new Array(t), this._accessorMax = new Array(t);
  }
  endAccessor() {
    if (this._accessorIndex < 0) throw new Error("An accessor was not started, but was attempted to be ended");
    const e = this._getElementSize(), t = this._numComponentsForDataType, s = (this._data.length - this._accessorIndex) / t;
    if (s % 1) throw new Error("An accessor was ended with missing component values");
    for (let n = 0; n < this._accessorMin.length; ++n) typeof this._accessorMin[n] != "number" && (this._accessorMin[n] = 0), typeof this._accessorMax[n] != "number" && (this._accessorMax[n] = 0);
    const r = { byteOffset: e * (this._accessorIndex / t), componentType: this._componentType, count: s, type: this._dataType, min: this._accessorMin, max: this._accessorMax, name: this._accessorAttribute };
    switch (this._accessorAttribute) {
      case "TEXCOORD_0":
      case "TEXCOORD_1":
      case "COLOR_0":
      case "WEIGHTS_0":
        switch (this._componentType) {
          case p.UNSIGNED_BYTE:
          case p.UNSIGNED_SHORT:
            r.normalized = !0;
        }
    }
    return this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, r;
  }
  get finalized() {
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e) => this._finalizedPromiseResolve = e);
  }
  async finalize() {
    const e = this._bufferView, t = this._buffer.getViewFinalizePromises(this);
    this._asyncWritePromise && t.push(this._asyncWritePromise), await Promise.allSettled(t), this._isFinalized = !0, e.byteOffset = this.getByteOffset(), e.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
  }
  _getElementSize() {
    return this._sizeComponentType() * this._numComponentsForDataType;
  }
  _sizeComponentType() {
    switch (this._componentType) {
      case p.BYTE:
      case p.UNSIGNED_BYTE:
        return 1;
      case p.SHORT:
      case p.UNSIGNED_SHORT:
        return 2;
      case p.UNSIGNED_INT:
      case p.FLOAT:
        return 4;
    }
  }
  _calculateNumComponentsForDataType() {
    switch (this._dataType) {
      case T.SCALAR:
        return 1;
      case T.VEC2:
        return 2;
      case T.VEC3:
        return 3;
      case T.VEC4:
      case T.MAT2:
        return 4;
      case T.MAT3:
        return 9;
      case T.MAT4:
        return 16;
    }
  }
}, q = class {
  constructor(e) {
    this._gltf = e, this._bufferViews = [], this._isFinalized = !1, e.buffers || (e.buffers = []), this.index = e.buffers.length;
    const t = { byteLength: -1 };
    e.buffers.push(t), this._buffer = t;
  }
  addBufferView(e, t, s) {
    if (this._finalizePromise) throw new Error("Cannot add buffer view after fiinalizing buffer");
    const r = new Le(this, this._gltf, e, t, s);
    return this._bufferViews.push(r), r;
  }
  getByteOffset(e) {
    let t = 0;
    for (const s of this._bufferViews) {
      if (s === e) return t;
      t += s.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e) {
    const t = [];
    for (const s of this._bufferViews) {
      if (e && s === e) return t;
      t.push(s.finalized);
    }
    return t;
  }
  getArrayBuffer() {
    if (!this._isFinalized) throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e = this._getTotalSize(), t = new ArrayBuffer(e);
    let s = 0;
    for (const r of this._bufferViews) r.writeOutToBuffer(t, s), s += r.byteSize;
    return t;
  }
  finalize() {
    if (this._finalizePromise) throw new Error(`Buffer ${this.index} was already finalized`);
    return this._finalizePromise = Promise.allSettled(this.getViewFinalizePromises()).then(() => {
      this._isFinalized = !0;
      const e = this.getArrayBuffer();
      this._buffer.byteLength = e.byteLength, this._buffer.uri = e;
    }), this._gltf.extras?.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e = 0;
    for (const t of this._bufferViews) e += t.byteSize;
    return e;
  }
};
function ze(i, e) {
  if (i.components) for (const t of i.components) t.faces && t.shading === "smooth" && Ve(t, e);
}
function Ve(i, e) {
  e.normal == null && (e.normal = new Float32Array(e.position.length));
  const t = i.faces, { position: s, normal: r } = e, n = t.length / 3;
  for (let a = 0; a < n; ++a) {
    const o = 3 * t[3 * a], h = 3 * t[3 * a + 1], u = 3 * t[3 * a + 2], c = C(Fe, s[o], s[o + 1], s[o + 2]), d = C(De, s[h], s[h + 1], s[h + 2]), g = C(Pe, s[u], s[u + 1], s[u + 2]), m = Z(d, d, c), _ = Z(g, g, c), f = ce(m, m, _);
    r[o] += f[0], r[o + 1] += f[1], r[o + 2] += f[2], r[h] += f[0], r[h + 1] += f[1], r[h + 2] += f[2], r[u] += f[0], r[u + 1] += f[1], r[u + 2] += f[2];
  }
  for (let a = 0; a < r.length; a += 3) C(R, r[a], r[a + 1], r[a + 2]), he(R, R), r[a] = R[0], r[a + 1] = R[1], r[a + 2] = R[2];
}
const Fe = M(), De = M(), Pe = M(), R = M(), k = () => me.getLogger("gltf");
class Ue {
  constructor(e, t, s) {
    this.params = {}, this._materialMap = new Array(), this._imageMap = /* @__PURE__ */ new Map(), this._textureMap = /* @__PURE__ */ new Map(), this.gltf = { asset: { version: "2.0", copyright: e.copyright, generator: e.generator }, extras: { options: t, binChunkBuffer: null, promises: [] } }, s && (this.params = s), this._addScenes(e);
  }
  _addScenes(e) {
    this.gltf.scene = e.defaultScene;
    const t = this.gltf.extras, s = t.options.bufferOutputType === E.GLB || t.options.imageOutputType === y.GLB;
    s && (t.binChunkBuffer = new q(this.gltf)), e.forEachScene((r) => {
      this._addScene(r);
    }), s && t.binChunkBuffer.finalize();
  }
  _addScene(e) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t = {};
    e.name && (t.name = e.name), e.forEachNode((s) => {
      t.nodes || (t.nodes = []), t.nodes.push(...this._addNodes(s));
    }), this.gltf.scenes.push(t);
  }
  _addNodes(e) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t = {};
    e.name && (t.name = e.name);
    const s = e.translation;
    J(s, le) || (t.translation = L(s));
    const r = e.rotation;
    Ae(r, be) || (t.rotation = Ee(r));
    const n = e.scale;
    J(n, te) || (t.scale = L(n));
    const a = this.gltf.nodes.length;
    if (this.gltf.nodes.push(t), e.mesh && e.mesh.vertexAttributes.position) {
      const o = this._createMeshes(e.mesh), h = [a];
      if (o.length === 1) this._addMesh(t, o[0]);
      else for (const u of o) {
        const c = {};
        this._addMesh(c, u), h.push(this.gltf.nodes.length), this.gltf.nodes.push(c);
      }
      return h;
    }
    return e.forEachNode((o) => {
      t.children || (t.children = []), t.children.push(...this._addNodes(o));
    }), [a];
  }
  _addMesh(e, t) {
    this.gltf.meshes ??= [];
    const s = this.gltf.meshes.length;
    this.gltf.meshes.push(t), e.mesh = s;
  }
  _createMeshes(e) {
    const t = this.gltf.extras, s = t.options.bufferOutputType === E.GLB;
    let r;
    r = s ? t.binChunkBuffer : new q(this.gltf), this.params.origin || (this.params.origin = e.anchor);
    const { ignoreLocalTransform: n } = this.params, a = n ? null : e.transform, { vertexSpace: o, spatialReference: h } = e, u = o.origin, c = e.vertexAttributes;
    let d = null;
    if (o.type === "local") {
      const l = fe(h);
      ue(ee, a?.localMatrix ?? we, [l, l, l]), d = Ie(c, ee);
    } else {
      const l = n ? new xe({ origin: u ? L(u) : null }) : o;
      d = Se(c, l, a, this.params.origin, { geographic: this.params.geographic, unit: "meters" });
    }
    if (d == null) throw new H("Error during gltf export.");
    c.position && d.position === c.position && (d.position = c.position.slice()), c.normal && d.normal === c.normal && (d.normal = c.normal.slice()), c.tangent && d.tangent === c.tangent && (d.tangent = c.tangent.slice()), ze(e, d), this._flipYZAxis(d);
    const g = r.addBufferView(p.FLOAT, T.VEC3, b.ARRAY_BUFFER);
    let m, _, f, w;
    d.normal && (m = r.addBufferView(p.FLOAT, T.VEC3, b.ARRAY_BUFFER)), c.uv && (_ = r.addBufferView(p.FLOAT, T.VEC2, b.ARRAY_BUFFER)), d.tangent && (f = r.addBufferView(p.FLOAT, T.VEC4, b.ARRAY_BUFFER)), c.color && (w = r.addBufferView(p.UNSIGNED_BYTE, T.VEC4, b.ARRAY_BUFFER)), g.startAccessor("POSITION"), m && m.startAccessor("NORMAL"), _ && _.startAccessor("TEXCOORD_0"), f && f.startAccessor("TANGENT"), w && w.startAccessor("COLOR_0");
    const re = d.position.length / 3, { position: F, normal: O, tangent: N } = d, { color: I, uv: D } = c;
    for (let l = 0; l < re; ++l) g.push(F[3 * l]), g.push(F[3 * l + 1]), g.push(F[3 * l + 2]), m && O != null && (m.push(O[3 * l]), m.push(O[3 * l + 1]), m.push(O[3 * l + 2])), _ && D != null && (_.push(D[2 * l]), _.push(D[2 * l + 1])), f && N != null && (f.push(N[4 * l]), f.push(N[4 * l + 1]), f.push(N[4 * l + 2]), f.push(N[4 * l + 3])), w && I != null && (w.push(I[4 * l]), w.push(I[4 * l + 1]), w.push(I[4 * l + 2]), w.push(I[4 * l + 3]));
    const ne = g.endAccessor(), j = this._addAccessor(g.index, ne);
    let P, U, $, G, B;
    if (m) {
      const l = m.endAccessor();
      P = this._addAccessor(m.index, l);
    }
    if (_) {
      const l = _.endAccessor();
      U = this._addAccessor(_.index, l);
    }
    if (f) {
      const l = f.endAccessor();
      $ = this._addAccessor(f.index, l);
    }
    if (w) {
      const l = w.endAccessor();
      G = this._addAccessor(w.index, l);
    }
    const v = [];
    return e.components && e.components.length > 0 && e.components[0].faces ? (B = r.addBufferView(p.UNSIGNED_INT, T.SCALAR, b.ELEMENT_ARRAY_BUFFER), this._addMeshVertexIndexed(B, e.components, v, j, P, U, $, G)) : this._addMeshVertexNonIndexed(e.components, v, j, P, U, $, G), g.finalize(), m && m.finalize(), _ && _.finalize(), f && f.finalize(), B && B.finalize(), w && w.finalize(), s || r.finalize(), v;
  }
  _flipYZAxis({ position: e, normal: t, tangent: s }) {
    this._flipYZBuffer(e, 3), this._flipYZBuffer(t, 3), this._flipYZBuffer(s, 4);
  }
  _flipYZBuffer(e, t) {
    if (e != null) for (let s = 1, r = 2; s < e.length; s += t, r += t) {
      const n = e[s], a = e[r];
      e[s] = a, e[r] = -n;
    }
  }
  _addMaterial(e) {
    if (e === null) return;
    const t = this._materialMap.indexOf(e);
    if (t !== -1) return t;
    this.gltf.materials || (this.gltf.materials = []);
    const s = {};
    switch (e.alphaMode) {
      case "mask":
        s.alphaMode = V.MASK;
        break;
      case "auto":
      case "blend":
        s.alphaMode = V.BLEND;
    }
    e.alphaCutoff !== 0.5 && (s.alphaCutoff = e.alphaCutoff), e.doubleSided && (s.doubleSided = e.doubleSided), s.pbrMetallicRoughness = {};
    const r = (o) => o ** 2.1, n = (o) => {
      const h = o.toRgba();
      return h[0] = r(h[0] / 255), h[1] = r(h[1] / 255), h[2] = r(h[2] / 255), h;
    };
    if (e.color != null && (s.pbrMetallicRoughness.baseColorFactor = n(e.color)), e.colorTexture != null && (s.pbrMetallicRoughness.baseColorTexture = this._createTextureInfo(e.colorTexture, e.colorTextureTransform)), e.normalTexture != null && (s.normalTexture = this._createTextureInfo(e.normalTexture, e.normalTextureTransform)), e instanceof Ne) {
      if (e.emissiveTexture != null && (s.emissiveTexture = this._createTextureInfo(e.emissiveTexture, e.emissiveTextureTransform)), e.emissiveColor != null) {
        const o = n(e.emissiveColor);
        s.emissiveFactor = [o[0], o[1], o[2]];
      }
      e.occlusionTexture != null && (s.occlusionTexture = this._createTextureInfo(e.occlusionTexture, e.occlusionTextureTransform)), e.metallicRoughnessTexture != null && (s.pbrMetallicRoughness.metallicRoughnessTexture = this._createTextureInfo(e.metallicRoughnessTexture, e.metallicRoughnessTextureTransform)), s.pbrMetallicRoughness.metallicFactor = e.metallic, s.pbrMetallicRoughness.roughnessFactor = e.roughness;
    } else s.pbrMetallicRoughness.metallicFactor = 1, s.pbrMetallicRoughness.roughnessFactor = 1, k().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const a = this.gltf.materials.length;
    return this.gltf.materials.push(s), this._materialMap.push(e), a;
  }
  _createTextureInfo(e, t) {
    const s = { index: this._addTexture(e) };
    return t && (s.extensions || (s.extensions = {}), s.extensions.KHR_texture_transform = { scale: t.scale, offset: t.offset, rotation: de(t.rotation) }), s;
  }
  _addTexture(e) {
    const t = this.gltf.textures ?? [];
    return this.gltf.textures = t, _e(this._textureMap, e, () => {
      const s = { sampler: this._addSampler(e), source: this._addImage(e) }, r = t.length;
      return t.push(s), r;
    });
  }
  _addImage(e) {
    const t = this._imageMap.get(e);
    if (t != null) return t;
    this.gltf.images || (this.gltf.images = []);
    const s = {};
    if (e.url) s.uri = e.url;
    else {
      const n = e.data;
      s.extras = n;
      for (let o = 0; o < this.gltf.images.length; ++o) if (n === this.gltf.images[o].extras) return o;
      const a = this.gltf.extras;
      switch (a.options.imageOutputType) {
        case y.GLB: {
          const o = a.binChunkBuffer.addBufferView(p.UNSIGNED_BYTE, T.SCALAR);
          if (Y(n)) n.data != null && o.writeOutToBuffer(n.data, 0);
          else {
            const h = W(n).then(({ data: u, type: c }) => (s.mimeType = c, u));
            o.writeAsync(h).then(() => {
              o.finalize();
            });
          }
          s.bufferView = o.index;
          break;
        }
        case y.DataURI:
          if (Y(n)) {
            k().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          s.uri = Me(n);
          break;
        default:
          if (Y(n)) {
            k().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          a.promises.push(W(n).then(({ data: o, type: h }) => {
            s.uri = o, s.mimeType = h;
          }));
      }
    }
    const r = this.gltf.images.length;
    return this.gltf.images.push(s), this._imageMap.set(e, r), r;
  }
  _addSampler(e) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t = A.REPEAT, s = A.REPEAT;
    if (typeof e.wrap == "string") switch (e.wrap) {
      case "clamp":
        t = A.CLAMP_TO_EDGE, s = A.CLAMP_TO_EDGE;
        break;
      case "mirror":
        t = A.MIRRORED_REPEAT, s = A.MIRRORED_REPEAT;
    }
    else {
      switch (e.wrap.vertical) {
        case "clamp":
          s = A.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s = A.MIRRORED_REPEAT;
      }
      switch (e.wrap.horizontal) {
        case "clamp":
          t = A.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t = A.MIRRORED_REPEAT;
      }
    }
    const r = { wrapS: t, wrapT: s };
    for (let a = 0; a < this.gltf.samplers.length; ++a) if (JSON.stringify(r) === JSON.stringify(this.gltf.samplers[a])) return a;
    const n = this.gltf.samplers.length;
    return this.gltf.samplers.push(r), n;
  }
  _addAccessor(e, t) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s = { bufferView: e, byteOffset: t.byteOffset, componentType: t.componentType, count: t.count, type: t.type, min: t.min, max: t.max, name: t.name };
    t.normalized && (s.normalized = !0);
    const r = this.gltf.accessors.length;
    return this.gltf.accessors.push(s), r;
  }
  _addMeshVertexIndexed(e, t, s, r, n, a, o, h) {
    const u = /* @__PURE__ */ new Map();
    for (const c of t) {
      e.startAccessor("INDICES");
      for (let _ = 0; _ < c.faces.length; ++_) e.push(c.faces[_]);
      const d = e.endAccessor(), g = { attributes: { POSITION: r }, indices: this._addAccessor(e.index, d), material: this._addMaterial(c.material) };
      n && c.shading !== "flat" && (g.attributes.NORMAL = n), a && (g.attributes.TEXCOORD_0 = a), o && c.shading !== "flat" && (g.attributes.TANGENT = o), h && (g.attributes.COLOR_0 = h);
      const m = u.get(c.name);
      if (m) m.primitives.push(g);
      else {
        const _ = { name: c.name, primitives: [g] };
        u.set(c.name, _), s.push(_);
      }
    }
  }
  _addMeshVertexNonIndexed(e, t, s, r, n, a, o) {
    const h = { primitives: [] };
    t.push(h);
    const u = { attributes: { POSITION: s } };
    r && (u.attributes.NORMAL = r), n && (u.attributes.TEXCOORD_0 = n), a && (u.attributes.TANGENT = a), o && (u.attributes.COLOR_0 = o), e && (u.material = this._addMaterial(e[0].material)), h.primitives.push(u);
  }
}
const ee = Te();
let $e = class {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e) {
    if (this._scenes.includes(e)) throw new Error("Scene already added");
    this._scenes.push(e);
  }
  removeScene(e) {
    pe(this._scenes, e);
  }
  forEachScene(e) {
    this._scenes.forEach(e);
  }
};
class Ge {
  constructor() {
    this.name = "", this._nodes = [];
  }
  addNode(e) {
    if (this._nodes.includes(e)) throw new Error("Node already added");
    this._nodes.push(e);
  }
  forEachNode(e) {
    this._nodes.forEach(e);
  }
}
class ve {
  constructor(e) {
    this.mesh = e, this.name = "", this.translation = M(), this.rotation = Re(), this.scale = L(te), this._nodes = [];
  }
  addNode(e) {
    if (this._nodes.includes(e)) throw new Error("Node already added");
    this._nodes.push(e);
  }
  forEachNode(e) {
    this._nodes.forEach(e);
  }
  set rotationAngles(e) {
    ye(this.rotation, e[0], e[1], e[2]);
  }
}
const Ye = "model.gltf", ie = "model.glb";
async function ke(i, e, t) {
  const s = new Ue(i, e = e || {}, t);
  let r = s.params;
  r ? r.origin || (r.origin = new K({ x: -1, y: -1, z: -1 })) : r = { origin: new K({ x: -1, y: -1, z: -1 }) };
  const n = r.origin, a = s.gltf, o = a.extras?.promises ?? [];
  let h = 1, u = 1, c = null;
  await Promise.allSettled(o);
  const d = { origin: n };
  delete a.extras;
  const g = typeof e.jsonSpacing == "number" ? e.jsonSpacing : 4, m = JSON.stringify(a, (_, f) => {
    if (_ !== "extras") {
      if (f instanceof ArrayBuffer) {
        if (Ce(f)) switch (e.imageOutputType) {
          case y.DataURI:
          case y.GLB:
            break;
          case y.External:
          default: {
            const w = `img${u}.png`;
            return u++, d[w] = f, w;
          }
        }
        switch (e.bufferOutputType) {
          case E.DataURI:
            return Be(f);
          case E.GLB:
            if (c) throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
            return void (c = f);
          case E.External:
          default: {
            const w = `data${h}.bin`;
            return h++, d[w] = f, w;
          }
        }
      }
      return f;
    }
  }, g);
  return e.bufferOutputType === E.GLB || e.imageOutputType === y.GLB ? d[ie] = new S(m, c).buffer : d[Ye] = m, d;
}
function He(i, e) {
  return ke(i, { bufferOutputType: E.GLB, imageOutputType: y.GLB, jsonSpacing: 0 }, e);
}
class je {
  constructor(e, t) {
    this._file = { type: "model/gltf-binary", data: e }, this.origin = t;
  }
  buffer() {
    return Promise.resolve(this._file);
  }
  download(e) {
    ge(new Blob([this._file.data], { type: this._file.type }), e);
  }
}
function nt(i, e) {
  const t = new $e(), s = new Ge();
  return t.addScene(s), s.addNode(new ve(i)), He(t, e).then((r) => new je(r[ie], r.origin));
}
export {
  nt as toBinaryGLTF
};
//# sourceMappingURL=gltfexport-DkSIPkgz.js.map
