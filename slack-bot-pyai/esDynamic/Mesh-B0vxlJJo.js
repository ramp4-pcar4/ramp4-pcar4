import { bb as Et, eA as kt, nz as Ut, ci as S, N as c, O as f, f_ as Wt, et as zt, d$ as Ht, P as U, b_ as ce, ec as Pe, b$ as Se, dS as Vt, ax as Ke, jc as W, C as T, ag as L, s as ie, hs as Bt, hV as _, ba as Gt, kO as Yt, fr as me, nA as $e, nB as Xt, bl as Zt, nC as qt, aU as et, cr as tt, cu as Jt, gP as rt, a8 as Le, a6 as P, R as Qt, nD as Kt, mn as er, jH as tr, lJ as rr, jb as nr, V as or, b2 as sr, fs as je, ch as ir, iV as ar, ez as nt, nE as ot, lT as lr, hD as we, j4 as st, nF as it, j1 as at, nG as lt, nH as ct, iX as cr, hU as ur, ct as pr, eV as hr, jP as fr, U as mr, cj as be, aR as gr, nI as dr, eJ as yr } from "./main-DhLeoxL5.js";
import { G as xr, c as _e, Q as wr, I as vr, V as $r, _ as br, b as ut, d as ae, A as pt, y as ge, k as ht, a as ft, j as mt, h as gt, E as dt, e as yt, f as xt, w as Tr } from "./georeference-DjDYpUrf.js";
import { c as Ar } from "./imageUtils-BysCBpc6.js";
import { i as Re, a as Sr } from "./MeshLocalVertexSpace-BtXq8ljJ.js";
import { g as de, p as wt, u as Ee, h as ke, l as Ue } from "./meshVertexSpaceUtils-DNboMO4p.js";
import { i as jr } from "./earcut-BkUDDM5D.js";
import { a as Rr, e as Mr, t as vt } from "./DoubleArray-D0qN2Z5T.js";
import { t as $t } from "./Indices-BqNqai9n.js";
import { e as We } from "./deduplicate-BpPQDnrl.js";
import { E as Fr, F as Ir, X as Lr } from "./plane-Biatxyv3.js";
import "./triangle-DefuRXgx.js";
import { e as ve } from "./mat4f64-Dn1WEGBx.js";
import "./basicInterfaces-DTnusSyV.js";
import "./VertexAttribute-CAkzp1tV.js";
import { u as ze, y as _r, h as Cr } from "./External-S_POREPS.js";
import { e as bt } from "./mat3f64-Dh9_zhFu.js";
import { I as Dr } from "./quat-DW1GJPsH.js";
import { e as Nr, o as Or } from "./quatf64-DxbQqBtW.js";
import { a as Ce, R as Tt } from "./computeTranslationToOriginAndRotation-u91Unq89.js";
function F(e, t, n, r) {
  if (Et(e.spatialReference, n)) {
    ue[0] = e.x, ue[1] = e.y;
    const s = e.z;
    return ue[2] = s ?? r ?? 0, kt(ue, e.spatialReference, 0, t, n, 0, 1);
  }
  const o = Ut(e, n);
  return !!o && (t[0] = o?.x, t[1] = o?.y, t[2] = o?.z ?? r ?? 0, !0);
}
const ue = S();
var G;
const Te = /* @__PURE__ */ new WeakMap();
let Pr = 0, N = G = class extends ce {
  constructor(e) {
    super(e), this.wrap = "repeat";
  }
  get url() {
    return this._get("url") || null;
  }
  set url(e) {
    this._set("url", e), e && this._set("data", null);
  }
  get data() {
    return this._get("data") || null;
  }
  set data(e) {
    this._set("data", e), e && this._set("url", null);
  }
  writeData(e, t, n, r) {
    if (e instanceof HTMLImageElement) {
      const o = { type: "image-element", src: Pe(e.src, r), crossOrigin: e.crossOrigin };
      t[n] = o;
    } else if (e instanceof HTMLCanvasElement) {
      const o = e.getContext("2d").getImageData(0, 0, e.width, e.height), s = { type: "canvas-element", imageData: this._encodeImageData(o) };
      t[n] = s;
    } else if (e instanceof HTMLVideoElement) {
      const o = { type: "video-element", src: Pe(e.src, r), autoplay: e.autoplay, loop: e.loop, muted: e.muted, crossOrigin: e.crossOrigin, preload: e.preload };
      t[n] = o;
    } else if (e instanceof ImageData) {
      const o = { type: "image-data", imageData: this._encodeImageData(e) };
      t[n] = o;
    }
  }
  readData(e) {
    switch (e.type) {
      case "image-element": {
        const t = new Image();
        return t.src = e.src, t.crossOrigin = e.crossOrigin, t;
      }
      case "canvas-element": {
        const t = this._decodeImageData(e.imageData), n = document.createElement("canvas");
        return n.width = t.width, n.height = t.height, n.getContext("2d").putImageData(t, 0, 0), n;
      }
      case "image-data":
        return this._decodeImageData(e.imageData);
      case "video-element": {
        const t = document.createElement("video");
        return t.src = e.src, t.crossOrigin = e.crossOrigin, t.autoplay = e.autoplay, t.loop = e.loop, t.muted = e.muted, t.preload = e.preload, t;
      }
      default:
        return;
    }
  }
  get transparent() {
    const e = this.data, t = this.url;
    if (e instanceof HTMLCanvasElement) return this._imageDataContainsTransparent(e.getContext("2d").getImageData(0, 0, e.width, e.height));
    if (e instanceof ImageData) return this._imageDataContainsTransparent(e);
    if (t) {
      const n = t.substr(t.length - 4, 4).toLowerCase(), r = t.substr(0, 15).toLocaleLowerCase();
      if (n === ".png" || r === "data:image/png;") return !0;
    }
    return !1;
  }
  set transparent(e) {
    this._overrideIfSome("transparent", e);
  }
  get contentHash() {
    const e = typeof this.wrap == "string" ? this.wrap : typeof this.wrap == "object" ? `${this.wrap.horizontal}/${this.wrap.vertical}` : "", t = (n = "") => `d:${n},t:${this.transparent},w:${e}`;
    return this.url != null ? t(this.url) : this.data != null ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? t(this.data.src) : (Te.has(this.data) || Te.set(this.data, ++Pr), t(Te.get(this.data))) : t();
  }
  get memoryUsage() {
    let e = 0;
    if (e += this.url != null ? this.url.length : 0, this.data != null) {
      const t = this.data;
      "data" in t ? e += t.data.byteLength : t instanceof HTMLImageElement ? e += t.naturalWidth * t.naturalHeight * 3 : t instanceof HTMLCanvasElement && (e += t.width * t.height * 3);
    }
    return e;
  }
  clone() {
    const e = { url: this.url, data: this.data, wrap: this._cloneWrap() };
    return new G(e);
  }
  cloneWithDeduplication(e) {
    const t = e.get(this);
    if (t) return t;
    const n = this.clone();
    return e.set(this, n), n;
  }
  _cloneWrap() {
    return typeof this.wrap == "string" ? this.wrap : { horizontal: this.wrap.horizontal, vertical: this.wrap.vertical };
  }
  _encodeImageData(e) {
    let t = "";
    for (let n = 0; n < e.data.length; n++) t += String.fromCharCode(e.data[n]);
    return { data: btoa(t), width: e.width, height: e.height };
  }
  _decodeImageData(e) {
    const t = atob(e.data), n = new Uint8ClampedArray(t.length);
    for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
    return Ar(n, e.width, e.height);
  }
  _imageDataContainsTransparent(e) {
    for (let t = 3; t < e.data.length; t += 4) if (e.data[t] !== 255) return !0;
    return !1;
  }
  static from(e) {
    return typeof e == "string" ? new G({ url: e }) : e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageData || e instanceof HTMLVideoElement ? new G({ data: e }) : Se(G, e);
  }
};
c([f({ type: String, json: { write: Wt } })], N.prototype, "url", null), c([f({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), f()], N.prototype, "data", null), c([zt("data")], N.prototype, "writeData", null), c([Ht("data")], N.prototype, "readData", null), c([f({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], N.prototype, "transparent", null), c([f({ json: { write: !0 } })], N.prototype, "wrap", void 0), c([f({ readOnly: !0 })], N.prototype, "contentHash", null), N = G = c([U("esri.geometry.support.MeshTexture")], N);
const oe = N;
let Y = class extends Vt(ce) {
  constructor(t) {
    super(t), this.offset = [0, 0], this.rotation = 0, this.scale = [1, 1];
  }
};
c([f({ type: [Number], nonNullable: !0, json: { write: !0 } })], Y.prototype, "offset", void 0), c([f({ type: Number, nonNullable: !0, json: { write: !0 } })], Y.prototype, "rotation", void 0), c([f({ type: [Number], nonNullable: !0, json: { write: !0 } })], Y.prototype, "scale", void 0), Y = c([U("esri.geometry.support.MeshTextureTransform")], Y);
const se = Y;
var Me;
let I = Me = class extends ce {
  constructor(e) {
    super(e), this.color = null, this.colorTexture = null, this.colorTextureTransform = null, this.normalTexture = void 0, this.normalTextureTransform = void 0, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = !0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n) return n;
    const r = new Me(this.clonePropertiesWithDeduplication(t));
    return e?.set(this, r), r;
  }
  clonePropertiesWithDeduplication(e) {
    return { color: this.color != null ? this.color.clone() : null, colorTexture: this.colorTexture?.cloneWithDeduplication(e), normalTexture: this.normalTexture?.cloneWithDeduplication(e), alphaMode: this.alphaMode, alphaCutoff: this.alphaCutoff, doubleSided: this.doubleSided, colorTextureTransform: this.colorTextureTransform?.clone(), normalTextureTransform: this.normalTextureTransform?.clone() };
  }
  get memoryUsage() {
    return this.getMemoryUsage();
  }
  getMemoryUsage() {
    let e = 0;
    return e += this.color != null ? 16 : 0, this.colorTexture != null && (e += this.colorTexture.memoryUsage), e += this.colorTextureTransform != null ? 20 : 0, this.normalTexture != null && (e += this.normalTexture.memoryUsage), e += this.normalTextureTransform != null ? 20 : 0, e;
  }
};
c([f({ type: Ke, json: { write: !0 } })], I.prototype, "color", void 0), c([f({ type: oe, json: { write: !0 } })], I.prototype, "colorTexture", void 0), c([f({ type: se, json: { write: !0 } })], I.prototype, "colorTextureTransform", void 0), c([f({ type: oe, json: { write: !0 } })], I.prototype, "normalTexture", void 0), c([f({ type: se, json: { write: !0 } })], I.prototype, "normalTextureTransform", void 0), c([f({ nonNullable: !0, json: { write: !0 } })], I.prototype, "alphaMode", void 0), c([f({ nonNullable: !0, json: { write: !0 } })], I.prototype, "alphaCutoff", void 0), c([f({ nonNullable: !0, json: { write: !0 } })], I.prototype, "doubleSided", void 0), I = Me = c([U("esri.geometry.support.MeshMaterial")], I);
const De = I;
var Fe;
let R = Fe = class extends De {
  constructor(e) {
    super(e), this.emissiveColor = null, this.emissiveTexture = null, this.emissiveTextureTransform = void 0, this.occlusionTexture = null, this.occlusionTextureTransform = void 0, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null, this.metallicRoughnessTextureTransform = void 0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n) return n;
    const r = new Fe(this.clonePropertiesWithDeduplication(t));
    return e?.set(this, r), r;
  }
  getMemoryUsage() {
    let e = super.getMemoryUsage();
    return e += this.emissiveColor != null ? 16 : 0, this.emissiveTexture != null && (e += this.emissiveTexture.memoryUsage), e += this.emissiveTextureTransform != null ? 20 : 0, this.occlusionTexture != null && (e += this.occlusionTexture.memoryUsage), e += this.occlusionTextureTransform != null ? 20 : 0, this.metallicRoughnessTexture != null && (e += this.metallicRoughnessTexture.memoryUsage), e += this.metallicRoughnessTextureTransform != null ? 20 : 0, e;
  }
  clonePropertiesWithDeduplication(e) {
    return { ...super.clonePropertiesWithDeduplication(e), emissiveColor: this.emissiveColor?.clone(), emissiveTexture: this.emissiveTexture?.cloneWithDeduplication(e), emissiveTextureTransform: this.emissiveTextureTransform?.clone(), occlusionTexture: this.occlusionTexture?.cloneWithDeduplication(e), occlusionTextureTransform: this.occlusionTextureTransform?.clone(), metallic: this.metallic, roughness: this.roughness, metallicRoughnessTexture: this.metallicRoughnessTexture?.cloneWithDeduplication(e), metallicRoughnessTextureTransform: this.metallicRoughnessTextureTransform?.clone() };
  }
};
c([f({ type: Ke, json: { write: !0 } })], R.prototype, "emissiveColor", void 0), c([f({ type: oe, json: { write: !0 } })], R.prototype, "emissiveTexture", void 0), c([f({ type: se, json: { write: !0 } })], R.prototype, "emissiveTextureTransform", void 0), c([f({ type: oe, json: { write: !0 } })], R.prototype, "occlusionTexture", void 0), c([f({ type: se, json: { write: !0 } })], R.prototype, "occlusionTextureTransform", void 0), c([f({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "metallic", void 0), c([f({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "roughness", void 0), c([f({ type: oe, json: { write: !0 } })], R.prototype, "metallicRoughnessTexture", void 0), c([f({ type: se, json: { write: !0 } })], R.prototype, "metallicRoughnessTextureTransform", void 0), R = Fe = c([U("esri.geometry.support.MeshMaterialMetallicRoughness")], R);
const Er = R;
var fe;
let b = fe = class extends ce {
  constructor(e) {
    super(e), this.color = null, this.position = new Float64Array(0), this.uv = null, this.normal = null, this.tangent = null;
  }
  castColor(e) {
    return X(e, Uint8Array, [Uint8ClampedArray], { loggerTag: ".color=", stride: 4 }, T.getLogger(this));
  }
  castPosition(e) {
    return e && e instanceof Float32Array && T.getLogger(this).warn(".position=", "Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"), X(e, Float64Array, [Float32Array], { loggerTag: ".position=", stride: 3 }, T.getLogger(this));
  }
  castUv(e) {
    return X(e, Float32Array, [Float64Array], { loggerTag: ".uv=", stride: 2 }, T.getLogger(this));
  }
  castNormal(e) {
    return X(e, Float32Array, [Float64Array], { loggerTag: ".normal=", stride: 3 }, T.getLogger(this));
  }
  castTangent(e) {
    return X(e, Float32Array, [Float64Array], { loggerTag: ".tangent=", stride: 4 }, T.getLogger(this));
  }
  clone() {
    const e = { position: L(this.position), uv: L(this.uv), normal: L(this.normal), tangent: L(this.tangent), color: L(this.color) };
    return new fe(e);
  }
  clonePositional() {
    const e = { position: L(this.position), normal: L(this.normal), tangent: L(this.tangent), uv: this.uv, color: this.color };
    return new fe(e);
  }
  get memoryUsage() {
    let e = 0;
    return e += this.position.byteLength, this.uv != null && (e += this.uv.byteLength), this.normal != null && (e += this.normal.byteLength), this.tangent != null && (e += this.tangent.byteLength), this.color != null && (e += this.color.byteLength), e;
  }
};
function Ae(e, t, n, r) {
  const { loggerTag: o, stride: s } = t;
  return e.length % s != 0 ? (r.error(o, `Invalid array length, expected a multiple of ${s}`), new n([])) : e;
}
function X(e, t, n, r, o) {
  if (!e) return e;
  if (e instanceof t) return Ae(e, r, t, o);
  for (const s of n) if (e instanceof s) return Ae(new t(e), r, t, o);
  if (Array.isArray(e)) return Ae(new t(e), r, t, o);
  {
    const s = n.map((i) => `'${i.name}'`);
    return o.error(`Failed to set property, expected one of ${s}, but got ${e.constructor.name}`), new t([]);
  }
}
function ee(e, t, n) {
  t[n] = kr(e);
}
function kr(e) {
  const t = new Array(e.length);
  for (let n = 0; n < e.length; n++) t[n] = e[n];
  return t;
}
c([f({ json: { write: ee } })], b.prototype, "color", void 0), c([W("color")], b.prototype, "castColor", null), c([f({ nonNullable: !0, json: { write: ee } })], b.prototype, "position", void 0), c([W("position")], b.prototype, "castPosition", null), c([f({ json: { write: ee } })], b.prototype, "uv", void 0), c([W("uv")], b.prototype, "castUv", null), c([f({ json: { write: ee } })], b.prototype, "normal", void 0), c([W("normal")], b.prototype, "castNormal", null), c([f({ json: { write: ee } })], b.prototype, "tangent", void 0), c([W("tangent")], b.prototype, "castTangent", null), b = fe = c([U("esri.geometry.support.MeshVertexAttributes")], b);
var re;
let O = re = class extends ce {
  static from(e) {
    return Se(re, e);
  }
  constructor(e) {
    super(e), this.faces = null, this.material = null, this.name = void 0, this.shading = "source", this.trustSourceNormals = !1;
  }
  castFaces(e) {
    return X(e, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, T.getLogger(this));
  }
  castMaterial(e) {
    return Se(e && typeof e == "object" && ("metallic" in e || "roughness" in e || "metallicRoughnessTexture" in e) ? Er : De, e);
  }
  clone() {
    return new re({ faces: L(this.faces), shading: this.shading, material: L(this.material), trustSourceNormals: this.trustSourceNormals, name: this.name });
  }
  cloneWithDeduplication(e, t) {
    const n = { faces: L(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(e, t) : null, trustSourceNormals: this.trustSourceNormals, name: this.name };
    return new re(n);
  }
  get memoryUsage() {
    let e = 0;
    return this.faces != null && (e += this.faces.byteLength), this.material != null && (e += this.material.memoryUsage), e;
  }
};
c([f({ json: { write: !0 } })], O.prototype, "faces", void 0), c([W("faces")], O.prototype, "castFaces", null), c([f({ type: De, json: { write: !0 } })], O.prototype, "material", void 0), c([W("material")], O.prototype, "castMaterial", null), c([f()], O.prototype, "name", void 0), c([f({ type: String, json: { write: !0 } })], O.prototype, "shading", void 0), c([f({ type: Boolean })], O.prototype, "trustSourceNormals", void 0), O = re = c([U("esri.geometry.support.MeshComponent")], O);
const Q = O, Ur = "Mesh must be loaded before applying operations", Wr = "Provided component is not part of the list of components", zr = "Expected polygon to be a Polygon instance", ne = "Expected location to be a Point instance";
let He = class extends ie {
  constructor() {
    super("invalid-input:location", ne);
  }
};
function Hr(e, t, n, r) {
  const o = ((i) => !Array.isArray(i[0]))(t) ? (i, a) => t[3 * i + a] : (i, a) => t[i][a], s = r ? Gt(r) / Yt(r) : 1;
  return Lr(e, (i, a) => me(i, o(a, 0) * s, o(a, 1) * s, o(a, 2)), n);
}
function Vr(e, t, n) {
  const r = Hr(Ve, e, t, n) ? Ir(Ve) : [0, 0, 1];
  return Math.abs(r[2]) > Math.cos(Bt(80)) ? _.Z : Math.abs(r[1]) > Math.abs(r[0]) ? _.Y : _.X;
}
const Ve = Fr();
function Br(e) {
  const t = Yr(e.rings, e.hasZ, ye.CCW_IS_HOLE, e.spatialReference), n = new Array();
  let r = 0, o = 0;
  for (const a of t.polygons) {
    const u = a.count, l = a.index, p = Rr(t.position, 3 * l, 3 * u), g = a.holeIndices.map((h) => h - l), m = $t(jr(p, g, 3));
    n.push({ position: p, faces: m }), r += p.length, o += m.length;
  }
  const s = Gr(n, r, o), i = Array.isArray(s.position) ? We(s.position, 3, { originalIndices: s.faces }) : We(s.position.buffer, 6, { originalIndices: s.faces });
  return s.position = Mr(new Float64Array(i.buffer)), s.faces = i.indices, s;
}
function Gr(e, t, n) {
  if (e.length === 1) return e[0];
  const r = vt(t), o = new Array(n);
  let s = 0, i = 0, a = 0;
  for (const u of e) {
    for (let l = 0; l < u.position.length; l++) r[s++] = u.position[l];
    for (const l of u.faces) o[i++] = l + a;
    a = s / 3;
  }
  return { position: r, faces: $t(o) };
}
function Yr(e, t, n, r) {
  const o = e.length, s = new Array(o), i = new Array(o), a = new Array(o);
  let u = 0, l = 0, p = 0, g = 0;
  for (let d = 0; d < o; ++d) g += e[d].length;
  const m = vt(3 * g);
  let h = 0;
  for (let d = o - 1; d >= 0; d--) {
    const y = e[d], A = n === ye.CCW_IS_HOLE && Xr(y, t, r);
    if (A && o !== 1) s[u++] = y;
    else {
      let C = y.length;
      for (let x = 0; x < u; ++x) C += s[x].length;
      const v = { index: h, pathLengths: new Array(u + 1), count: C, holeIndices: new Array(u) };
      v.pathLengths[0] = y.length, y.length > 0 && (a[p++] = { index: h, count: y.length }), h = A ? pe(y, y.length - 1, -1, m, h, y.length, t) : pe(y, 0, 1, m, h, y.length, t);
      for (let x = 0; x < u; ++x) {
        const j = s[x];
        v.holeIndices[x] = h, v.pathLengths[x + 1] = j.length, j.length > 0 && (a[p++] = { index: h, count: j.length }), h = pe(j, 0, 1, m, h, j.length, t);
      }
      u = 0, v.count > 0 && (i[l++] = v);
    }
  }
  for (let d = 0; d < u; ++d) {
    const y = s[d];
    y.length > 0 && (a[p++] = { index: h, count: y.length }), h = pe(y, 0, 1, m, h, y.length, t);
  }
  return i.length = l, a.length = p, { position: m, polygons: i, outlines: a };
}
function pe(e, t, n, r, o, s, i) {
  o *= 3;
  for (let a = 0; a < s; ++a) {
    const u = e[t];
    r[o++] = u[0], r[o++] = u[1], r[o++] = i ? u[2] : 0, t += n;
  }
  return o / 3;
}
function Xr(e, t, n) {
  if (t) {
    const r = e.length - 1, o = Vr(e, r, n);
    if (o === _.X) return !$e(e, _.Y, _.Z);
    if (o === _.Y) return !$e(e, _.X, _.Z);
  }
  return !$e(e, _.X, _.Y);
}
var ye;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
})(ye || (ye = {}));
function Zr([e, t, n, r, o, s], i, a, u) {
  Be ??= new Float64Array(24);
  const l = Be;
  return l[0] = e, l[1] = t, l[2] = n, l[3] = e, l[4] = o, l[5] = n, l[6] = r, l[7] = o, l[8] = n, l[9] = r, l[10] = t, l[11] = n, l[12] = e, l[13] = t, l[14] = s, l[15] = e, l[16] = o, l[17] = s, l[18] = r, l[19] = o, l[20] = s, l[21] = r, l[22] = t, l[23] = s, xr({ positions: l, transform: i, vertexSpace: a, inSpatialReference: u, outSpatialReference: u, outPositions: l }), St(l, u);
}
let Be = null;
function At(e) {
  if (e.length === 0) return Xt;
  const t = Zt([Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY]);
  return qt(t, e), t;
}
function St(e, t) {
  const [n, r, o, s, i, a] = At(e);
  return new et({ xmin: n, ymin: r, zmin: o, xmax: s, ymax: i, zmax: a, spatialReference: t });
}
const le = "esri.geometry.support.meshUtils.centerAt";
function qr(e, t, n) {
  if (!e.vertexAttributes?.position) return;
  const { vertexSpace: r } = e, o = n?.origin ?? e.anchor, s = n?.geographic, i = _e(le, r, o.spatialReference, s);
  de(r) ? Jr(e, t, o) : i ? Qr(e, t, o) : Kr(e, t, o);
}
function Jr(e, t, n) {
  const { vertexSpace: r } = e;
  if (!de(r)) return;
  const o = Rt, s = jt;
  if (!F(t, s, e.spatialReference)) return void T.getLogger(le).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  if (!F(n, o, e.spatialReference)) {
    const a = e.origin;
    o[0] = a.x, o[1] = a.y, o[2] = a.z, T.getLogger(le).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  const i = tt(tn, s, o);
  r.origin = Jt(S(), r.origin, i);
}
function Qr(e, t, n) {
  const r = wr(e.vertexAttributes, n), { position: o, normal: s, tangent: i } = vr(r, t, !1);
  e.vertexAttributes.position = o, e.vertexAttributes.normal = s, e.vertexAttributes.tangent = i, e.vertexAttributesChanged();
}
function Kr(e, t, n) {
  const r = Rt, o = jt;
  if (F(t, o, e.spatialReference)) {
    if (!F(n, r, e.spatialReference)) {
      const s = e.origin;
      r[0] = s.x, r[1] = s.y, r[2] = s.z, T.getLogger(le).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
    }
    en(e.vertexAttributes.position, o, r), e.vertexAttributesChanged();
  } else T.getLogger(le).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
}
function en(e, t, n) {
  if (e) for (let r = 0; r < e.length; r += 3) for (let o = 0; o < 3; o++) e[r + o] += t[o] - n[o];
}
const jt = S(), Rt = S(), tn = S();
async function rn(e, t, n) {
  const { source: r } = t, { loadGLTFMesh: o } = await rt(import("./loadGLTFMesh-DEsYE1b-.js"), n), s = await on(r, n);
  Le(n);
  const i = o(new P({ x: 0, y: 0, z: 0, spatialReference: e.spatialReference }), s.url, { resolveFile: nn(s), signal: n?.signal, expectedType: s.type });
  i.then(() => s.dispose(), () => s.dispose());
  const { vertexAttributes: a, components: u } = await i;
  e.vertexAttributes = a, e.components = u;
}
function nn(e) {
  const t = Qt(e.url);
  return (n) => {
    const r = Kt(n, t, t), o = r ? r.replace(/^ *\.\//, "") : null;
    return (o ? e.files.get(o) : null) ?? n;
  };
}
async function on(e, t) {
  if (Array.isArray(e)) {
    if (!e.length) throw new ie("mesh-load-external:missing-assets", "There must be at least one file to load");
    return e[0] instanceof File ? an(e) : ln(e, t);
  }
  return Mt(e);
}
async function sn(e, t) {
  const { parts: n, assetMimeType: r, assetName: o } = e;
  if (n.length === 1) return new K(n[0].partUrl);
  const s = await e.toBlob(t);
  return Le(t), K.fromBlob(s, _t(o, r));
}
function Mt(e) {
  return K.fromBlob(e, _t(e.name, e.type));
}
function an(e) {
  return Lt(e.map((t) => ({ name: t.name, mimeType: t.type, source: Mt(t) })));
}
async function ln(e, t) {
  const n = await er(e.map(async (r) => {
    const o = await sn(r);
    return Le(t), { name: r.assetName, mimeType: r.assetMimeType, source: o };
  }));
  if (tr(t)) throw n.forEach((r) => r.source.dispose()), rr();
  return Lt(n);
}
const Ft = /^model\/gltf\+json$/, It = /^model\/gltf-binary$/, Ie = /\.gltf$/i, cn = /\.glb$/i;
function Lt(e) {
  const t = /* @__PURE__ */ new Map();
  let n, r = null;
  for (const { name: o, mimeType: s, source: i } of e) r === null && (Ft.test(s) || Ie.test(o) ? (r = i.url, n = "gltf") : (It.test(s) || cn.test(o)) && (r = i.url, n = "glb")), t.set(o, i.url), i.files.forEach((a, u) => t.set(u, a));
  if (r == null) throw new ie("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new K(r, () => e.forEach(({ source: o }) => o.dispose()), t, n);
}
class K {
  constructor(t, n = () => {
  }, r = /* @__PURE__ */ new Map(), o) {
    this.url = t, this.dispose = n, this.files = r, this.type = o;
  }
  static fromBlob(t, n) {
    const r = URL.createObjectURL(t);
    return new K(r, () => URL.revokeObjectURL(r), void 0, n);
  }
}
function _t(e, t) {
  return Ft.test(t) || Ie.test(e) ? "gltf" : It.test(t) || Ie.test(e) ? "glb" : void 0;
}
let k = class extends nr {
  constructor() {
    super(), this.externalSources = new or(), this._explicitDisplaySource = null, this.addHandles(sr(() => this.externalSources, "after-remove", ({ item: e }) => {
      e === this._explicitDisplaySource && (this._explicitDisplaySource = null);
    }, { sync: !0, onListenerRemove: () => this._explicitDisplaySource = null }));
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e) {
    if (e != null && !ze(e)) throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = e, e && this.externalSources.every((t) => !_r(t, e)) && this.externalSources.add(e);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e) {
    return this.externalSources.items.filter((t) => Cr(t, e));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(ze);
  }
};
c([f()], k.prototype, "externalSources", void 0), c([f()], k.prototype, "displaySource", null), c([f()], k.prototype, "_implicitDisplaySource", null), c([f()], k.prototype, "_explicitDisplaySource", void 0), k = c([U("esri.geometry.support.meshUtils.Metadata")], k);
function un() {
  const { faceDescriptions: e, faceVertexOffsets: t, uvScales: n } = wn, r = 4 * e.length, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(2 * e.length * 3);
  let u = 0, l = 0, p = 0, g = 0;
  for (let m = 0; m < e.length; m++) {
    const h = e[m], d = u / 3;
    for (const A of t) a[g++] = d + A;
    const y = h.corners;
    for (let A = 0; A < 4; A++) {
      const C = y[A];
      let v = 0;
      i[p++] = 0.25 * n[A][0] + h.uvOrigin[0], i[p++] = h.uvOrigin[1] - 0.25 * n[A][1];
      for (let x = 0; x < 3; x++) h.axis[x] !== 0 ? (o[u++] = 0.5 * h.axis[x], s[l++] = h.axis[x]) : (o[u++] = 0.5 * C[v++], s[l++] = 0);
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function pn(e, t) {
  const n = e.components[0], r = n.faces, o = vn[t], s = 6 * o, i = new Array(6), a = new Array(r.length - 6);
  let u = 0, l = 0;
  for (let p = 0; p < r.length; p++) p >= s && p < s + 6 ? i[u++] = r[p] : a[l++] = r[p];
  if (e.vertexAttributes.uv != null) {
    const p = new Float32Array(e.vertexAttributes.uv), g = 4 * o * 2, m = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let h = 0; h < m.length; h++) p[g + h] = m[h];
    e.vertexAttributes.uv = p;
  }
  return e.components = [new Q({ faces: i, material: n.material }), new Q({ faces: a })], e;
}
function hn(e = 0) {
  const t = Math.round(8 * 2 ** e), n = 2 * t, r = (t - 1) * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * ((t - 1) * n * 2));
  let u = 0, l = 0, p = 0, g = 0;
  for (let m = 0; m <= t; m++) {
    const h = m / t * Math.PI + 0.5 * Math.PI, d = Math.cos(h), y = Math.sin(h);
    w[2] = y;
    const A = m === 0 || m === t, C = A ? n - 1 : n;
    for (let v = 0; v <= C; v++) {
      const x = v / C * 2 * Math.PI;
      w[0] = -Math.sin(x) * d, w[1] = Math.cos(x) * d;
      for (let j = 0; j < 3; j++) o[u] = 0.5 * w[j], s[u] = w[j], ++u;
      i[l++] = (v + (A ? 0.5 : 0)) / n, i[l++] = m / t, m !== 0 && v !== n && (m !== t && (a[p++] = g, a[p++] = g + 1, a[p++] = g - n), m !== 1 && (a[p++] = g, a[p++] = g - n, a[p++] = g - n - 1)), g++;
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function fn(e = 0) {
  const n = Math.round(16 * 2 ** e), r = 4 * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * (4 * n));
  let u = 0, l = 0, p = 0, g = 0, m = 0;
  for (let h = 0; h <= 5; h++) {
    const d = h === 0 || h === 5, y = h <= 1 || h >= 4, A = h === 2 || h === 4, C = d ? n - 1 : n;
    for (let v = 0; v <= C; v++) {
      const x = v / C * 2 * Math.PI, j = d ? 0 : 0.5;
      w[0] = j * Math.sin(x), w[1] = j * -Math.cos(x), w[2] = h <= 2 ? 0.5 : -0.5;
      for (let z = 0; z < 3; z++) o[u++] = w[z], s[l++] = y ? z === 2 ? h <= 1 ? 1 : -1 : 0 : z === 2 ? 0 : w[z] / j;
      i[p++] = (v + (d ? 0.5 : 0)) / n, i[p++] = h <= 1 ? 1 * h / 3 : h <= 3 ? 1 * (h - 2) / 3 + 1 / 3 : 1 * (h - 4) / 3 + 2 / 3, A || h === 0 || v === n || (h !== 5 && (a[g++] = m, a[g++] = m + 1, a[g++] = m - n), h !== 1 && (a[g++] = m, a[g++] = m - n, a[g++] = m - n - 1)), m++;
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function mn(e, t) {
  const n = typeof t == "number" ? t : t != null ? t.width : 1, r = typeof t == "number" ? t : t != null ? t.height : 1;
  switch (e) {
    case "up":
    case "down":
      return { width: n, depth: r };
    case "north":
    case "south":
      return { width: n, height: r };
    case "east":
    case "west":
      return { depth: n, height: r };
  }
}
function gn(e) {
  const t = te.facingAxisOrderSwap[e], n = te.position, r = te.normal, o = new Float64Array(n.length), s = new Float32Array(r.length);
  let i = 0;
  for (let a = 0; a < 4; a++) {
    const u = i;
    for (let l = 0; l < 3; l++) {
      const p = t[l], g = Math.abs(p) - 1, m = p >= 0 ? 1 : -1;
      o[i] = n[u + g] * m, s[i] = r[u + g] * m, i++;
    }
  }
  return { position: o, normal: s, uv: new Float32Array(te.uv), faces: new Uint32Array(te.faces), isPlane: !0 };
}
const H = 1, V = 2, B = 3, te = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [B, H, V], west: [-B, -H, V], north: [-H, B, V], south: [H, -B, V], up: [H, V, B], down: [H, -V, -B] } };
function he(e, t, n) {
  e.isPlane || dn(e), xn(e, yn(n?.size, n?.unit, t.spatialReference));
  const { vertexAttributes: r, vertexSpace: o, transform: s } = $r(e, t, { vertexSpace: n?.vertexSpace, geographic: n?.geographic });
  return { vertexAttributes: new b({ ...r, uv: e.uv }), vertexSpace: o, transform: s, components: [new Q({ faces: e.faces, material: n?.material || null })], spatialReference: t.spatialReference };
}
function dn(e) {
  for (let t = 0; t < e.position.length; t += 3) e.position[t + 2] += 0.5;
}
function yn(e, t, n) {
  const r = br(t, n);
  if (e == null && r === 1) return null;
  if (e == null) return [r, r, r];
  if (typeof e == "number") {
    const o = e * r;
    return [o, o, o];
  }
  return [e.width != null ? e.width * r : r, e.depth != null ? e.depth * r : r, e.height != null ? e.height * r : r];
}
function xn(e, t) {
  if (t != null) {
    E[0] = t[0], E[4] = t[1], E[8] = t[2];
    for (let n = 0; n < e.position.length; n += 3) {
      for (let r = 0; r < 3; r++) w[r] = e.position[n + r];
      je(w, w, E);
      for (let r = 0; r < 3; r++) e.position[n + r] = w[r];
    }
    if (t[0] !== t[1] || t[1] !== t[2]) {
      E[0] = 1 / t[0], E[4] = 1 / t[1], E[8] = 1 / t[2];
      for (let n = 0; n < e.normal.length; n += 3) {
        for (let r = 0; r < 3; r++) w[r] = e.normal[n + r];
        je(w, w, E), ir(w, w);
        for (let r = 0; r < 3; r++) e.normal[n + r] = w[r];
      }
    }
  }
}
const wn = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, vn = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, w = S(), E = bt();
function Ct(e, t, { vertexSpace: n, spatialReference: r }) {
  if (n.type === "georeferenced") {
    const l = e;
    if (!F(t, l, r)) return !1;
    const { origin: p } = n;
    return tt(e, l, p), !0;
  }
  const o = Ce(r), s = e;
  if (!F(t, s, o)) return !1;
  const { origin: i } = n, a = Ge;
  if (!Tt(r, i, a, o)) return !1;
  const u = ar(Ge, a);
  return u != null && (nt(e, s, u), !0);
}
const Ge = ve(), Ne = "esri.geometry.support.meshUtils.rotate";
function $n(e, t, n) {
  if (!e.vertexAttributes?.position || t[3] === 0) return;
  const { spatialReference: r, vertexSpace: o } = e, s = n?.origin ?? e.anchor, i = n?.geographic, a = _e(Ne, o, r, i);
  wt(e) ? bn(e, t, s) : a ? Tn(e, t, s) : An(e, t, s);
}
function bn(e, t, n) {
  e.transform ??= new ae();
  const { vertexSpace: r, transform: o, spatialReference: s } = e, [i, a, u] = r.origin, l = new P({ x: i, y: a, z: u, spatialReference: s }), p = Z;
  if (l.equals(n)) me(p, 0, 0, 0);
  else if (!Ct(p, n, e)) return void T.getLogger(Ne).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${r.type} vertex space. Projection may be possible after calling projection.load().`);
  Dr(qe, ge(t), pt(t));
  const g = ot(Ye, qe, we, lr, p), { localMatrix: m } = o, h = st(Ye, g, m);
  o.scale = it(S(), h), at(h, h, lt(Z, o.scale)), o.rotation = ht(h), o.translation = ct(S(), h);
}
function Tn(e, t, n) {
  const r = e.spatialReference, o = Ce(r), s = Dt;
  F(n, s, o) || F(e.origin, s, o);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, u = e.vertexAttributes.tangent, l = new Float64Array(i.length), p = a != null ? new Float32Array(a.length) : null, g = u != null ? new Float32Array(u.length) : null;
  Tt(o, s, xe, o), cr(Ze, xe);
  const m = Xe;
  je(ge(Xe), ge(t), Ze), m[3] = t[3], ft(i, r, l), a != null && p != null && mt(a, i, l, r, p), u != null && g != null && gt(u, i, l, r, g), J(l, m, 3, s), dt(l, i, r), a != null && p != null && (J(p, m, 3), yt(p, i, l, r, a)), u != null && g != null && (J(g, m, 4), xt(g, i, l, r, u)), e.vertexAttributesChanged();
}
function An(e, t, n) {
  const r = Dt;
  if (!F(n, r, e.spatialReference)) {
    const o = e.origin;
    r[0] = o.x, r[1] = o.y, r[2] = o.z, T.getLogger(Ne).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  J(e.vertexAttributes.position, t, 3, r), J(e.vertexAttributes.normal, t, 3), J(e.vertexAttributes.tangent, t, 4), e.vertexAttributesChanged();
}
function J(e, t, n, r = we) {
  if (e != null) {
    ur(xe, pt(t), ge(t));
    for (let o = 0; o < e.length; o += n) {
      for (let s = 0; s < 3; s++) Z[s] = e[o + s] - r[s];
      nt(Z, Z, xe);
      for (let s = 0; s < 3; s++) e[o + s] = Z[s] + r[s];
    }
  }
}
const Z = S(), Ye = ve(), Xe = ut(), xe = ve(), Ze = bt(), Dt = S(), qe = Nr(), Oe = "esri.geometry.support.meshUtils.scale";
function Sn(e, t, n) {
  if (!e.vertexAttributes?.position) return;
  const { vertexSpace: r, spatialReference: o } = e, s = n?.origin ?? e.anchor, i = n?.geographic, a = _e(Oe, r, o, i);
  wt(e) ? jn(e, t, s) : a ? Rn(e, t, s) : Mn(e, t, s);
}
function jn(e, t, n) {
  e.transform ??= new ae();
  const { vertexSpace: r, transform: o, spatialReference: s } = e, [i, a, u] = r.origin, l = new P({ x: i, y: a, z: u, spatialReference: s }), p = q;
  if (l.equals(n)) me(p, 0, 0, 0);
  else if (!Ct(p, n, e)) return void T.getLogger(Oe).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${r.type} vertex space. Projection may be possible after calling projection.load().`);
  const g = me(Fn, t, t, t), m = ot(Je, Or, we, g, p), { localMatrix: h } = o, d = st(Je, m, h);
  o.scale = it(S(), d), at(d, d, lt(q, o.scale)), o.rotation = ht(d), o.translation = ct(S(), d);
}
function Rn(e, t, n) {
  const r = e.spatialReference, o = Ce(r), s = Ot;
  F(n, s, o) || F(e.origin, s, o);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, u = e.vertexAttributes.tangent, l = new Float64Array(i.length), p = a != null ? new Float32Array(a.length) : null, g = u != null ? new Float32Array(u.length) : null;
  ft(i, r, l), a != null && p != null && mt(a, i, l, r, p), u != null && g != null && gt(u, i, l, r, g), Nt(l, t, s), dt(l, i, r), a != null && p != null && yt(p, i, l, r, a), u != null && g != null && xt(g, i, l, r, u), e.vertexAttributesChanged();
}
function Mn(e, t, n) {
  const r = Ot;
  if (!F(n, r, e.spatialReference)) {
    const o = e.origin;
    r[0] = o.x, r[1] = o.y, r[2] = o.z, T.getLogger(Oe).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);
  }
  Nt(e.vertexAttributes.position, t, r), e.vertexAttributesChanged();
}
function Nt(e, t, n = we) {
  if (e) for (let r = 0; r < e.length; r += 3) {
    for (let o = 0; o < 3; o++) q[o] = e[r + o] - n[o];
    pr(q, q, t);
    for (let o = 0; o < 3; o++) e[r + o] = q[o] + n[o];
  }
}
const q = S(), Fn = S(), Je = ve(), Ot = S();
var M;
const Pt = "esri.geometry.Mesh";
function D() {
  return T.getLogger(Pt);
}
const In = { base: null, key: "type", defaultKeyValue: "georeferenced", typeMap: { georeferenced: Re, local: Sr } };
let $ = M = class extends hr.LoadableMixin(fr(yr)) {
  constructor(e) {
    super(e), this.components = null, this.vertexSpace = new Re(), this.transform = null, this.metadata = new k(), this.hasZ = !0, this.hasM = !1, this.vertexAttributes = new b(), this.type = "mesh";
  }
  initialize() {
    (this.metadata.externalSources.length === 0 || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.addHandles(mr(() => ({ vertexAttributes: this.vertexAttributes, components: this.components?.map((e) => e.clone()) }), () => this._clearSources(), { once: !0, sync: !0 }));
    });
  }
  get hasExtent() {
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : this.metadata.displaySource?.extent != null;
  }
  get _transformedExtent() {
    const { components: e, spatialReference: t, vertexAttributes: n, vertexSpace: r } = this, o = n.position;
    if (o.length === 0 || e && e.length === 0) return new et({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0, spatialReference: t });
    if (de(r)) {
      const { _untransformedBounds: s, transform: i } = this;
      return Zr(s, i, r, t);
    }
    return St(o, t);
  }
  get _untransformedBounds() {
    return At(this.vertexAttributes.position);
  }
  get anchor() {
    const e = Ee(this.vertexSpace, this.spatialReference);
    if (e != null) return e;
    const { center: t, zmin: n } = this._transformedExtent;
    return new P({ x: t.x, y: t.y, z: n, spatialReference: this.spatialReference });
  }
  get origin() {
    const e = Ee(this.vertexSpace, this.spatialReference);
    return e ?? this._transformedExtent.center;
  }
  get extent() {
    return this.loaded || this.metadata?.displaySource?.extent == null ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e) {
    this._checkIfLoaded("addComponent()") && (this.components || (this.components = []), this.components.push(Q.from(e)), this.notifyChange("components"));
  }
  removeComponent(e) {
    if (this._checkIfLoaded("removeComponent()")) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (t !== -1) return this.components.splice(t, 1), void this.notifyChange("components");
      }
      D().error("removeComponent()", Wr);
    }
  }
  rotate(e, t, n, r) {
    return Tr(e, t, n, Qe), $n(this, Qe, r), this;
  }
  offset(e, t, n) {
    if (!this._checkIfLoaded("offset()")) return this;
    const { vertexSpace: r, vertexAttributes: o } = this, s = o?.position;
    if (!s) return this;
    if (de(r)) {
      const [i, a, u] = r.origin;
      r.origin = be(i + e, a + t, u + n);
    } else {
      for (let i = 0; i < s.length; i += 3) s[i] += e, s[i + 1] += t, s[i + 2] += n;
      this.vertexAttributesChanged();
    }
    return this;
  }
  scale(e, t) {
    return this._checkIfLoaded("scale()") ? (Sn(this, e, t), this) : this;
  }
  centerAt(e, t) {
    return this._checkIfLoaded("centerAt()") ? (qr(this, e, t), this) : this;
  }
  load(e) {
    const { metadata: { displaySource: t } } = this;
    return t && this.addResolvingPromise(rn(this, t, e)), Promise.resolve(this);
  }
  addExternalSources(e) {
    this.metadata.externalSources.addMany(e);
  }
  updateDisplaySource(e) {
    this.metadata.displaySource = e;
  }
  clone() {
    return this.cloneWithVertexSpace(this.vertexSpace.clone());
  }
  cloneWithVertexSpace(e) {
    let t = null;
    if (this.components) {
      const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
      t = this.components.map((s) => s.cloneWithDeduplication(r, o));
    }
    const n = { components: t, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes.clone(), vertexSpace: e, transform: this.transform?.clone() ?? null, metadata: this.metadata.clone() };
    return new M(n);
  }
  cloneShallow() {
    return new M({ components: this.components, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes, vertexSpace: this.vertexSpace.clone(), transform: this.transform, metadata: this.metadata });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e) {
    const t = import("./gltfexport-BHTwI2lP.js"), n = this.load(), r = await Promise.all([t, n]), { toBinaryGLTF: o } = r[0];
    return o(this, e);
  }
  get memoryUsage() {
    let e = 0;
    if (e += this.vertexAttributes.memoryUsage, this.components != null) for (const t of this.components) e += t.memoryUsage;
    return e;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  _checkIfLoaded(e) {
    return !!this.loaded || (D().error(e, Ur), !1);
  }
  static createBox(e, t) {
    if (!(e instanceof P)) return D().error(".createBox()", ne), null;
    const n = new M(he(un(), e, t));
    return t?.imageFace && t.imageFace !== "all" ? pn(n, t.imageFace) : n;
  }
  static createSphere(e, t) {
    return e instanceof P ? new M(he(hn(t?.densificationFactor || 0), e, t)) : (D().error(".createSphere()", ne), null);
  }
  static createCylinder(e, t) {
    return e instanceof P ? new M(he(fn(t?.densificationFactor || 0), e, t)) : (D().error(".createCylinder()", ne), null);
  }
  static createPlane(e, t) {
    if (!(e instanceof P)) return D().error(".createPlane()", ne), null;
    const n = t?.facing ?? "up", r = mn(n, t?.size);
    return new M(he(gn(n), e, { ...t, size: r }));
  }
  static createFromPolygon(e, t) {
    if (!(e instanceof gr)) return D().error(".createFromPolygon()", zr), null;
    const n = Br(e);
    return new M({ vertexAttributes: new b({ position: n.position }), components: [new Q({ faces: n.faces, shading: "flat", material: t?.material ?? null })], spatialReference: e.spatialReference, vertexSpace: new Re() });
  }
  static async createFromGLTF(e, t, n) {
    if (!(e instanceof P)) {
      const o = new He();
      throw D().error(".createfromGLTF()", o.message), o;
    }
    const { loadGLTFMesh: r } = await rt(import("./loadGLTFMesh-DEsYE1b-.js"), n);
    return new M(await r(e, t, n));
  }
  static async createFromFiles(e, t, n) {
    dr(D(), "`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'", { replacement: "SceneLayer.convertMesh", version: "4.29" });
    const r = (o) => D().error(".createFromFiles()", o.message);
    if (!(e instanceof P)) {
      const o = new He();
      throw r(o), o;
    }
    if (!n?.layer) throw new ie("invalid:no-layer", "SceneLayer required for file to mesh conversion.");
    return n.layer.convertMesh(t, { location: e, ...n });
  }
  static createWithExternalSource(e, t, n) {
    const r = n?.extent ?? null, { x: o, y: s, z: i, spatialReference: a } = e, u = n?.transform?.clone() ?? new ae(), l = be(o, s, i ?? 0), p = ke(n?.vertexSpace ?? Ue(a), l), g = { source: t, extent: r }, m = new k();
    return m.externalSources.push(g), new M({ metadata: m, transform: u, vertexSpace: p, spatialReference: a });
  }
  static createIncomplete(e, t) {
    const { x: n, y: r, z: o, spatialReference: s } = e, i = t?.transform?.clone() ?? new ae(), a = be(n, r, o ?? 0), u = ke(t?.vertexSpace ?? Ue(s), a), l = new M({ transform: i, vertexSpace: u, spatialReference: s });
    return l.addResolvingPromise(Promise.reject(new ie("mesh-incomplete", "Mesh resources are not complete"))), l;
  }
};
c([f({ type: [Q], json: { write: !0 } })], $.prototype, "components", void 0), c([f({ nonNullable: !0, types: In, constructOnly: !0, json: { write: !0 } })], $.prototype, "vertexSpace", void 0), c([f({ type: ae, json: { write: !0 } })], $.prototype, "transform", void 0), c([f({ constructOnly: !0 })], $.prototype, "metadata", void 0), c([f()], $.prototype, "hasExtent", null), c([f()], $.prototype, "_transformedExtent", null), c([f()], $.prototype, "_untransformedBounds", null), c([f()], $.prototype, "anchor", null), c([f()], $.prototype, "origin", null), c([f({ readOnly: !0, json: { read: !1 } })], $.prototype, "extent", null), c([f({ readOnly: !0, json: { read: !1, write: !0, default: !0 } })], $.prototype, "hasZ", void 0), c([f({ readOnly: !0, json: { read: !1, write: !0, default: !1 } })], $.prototype, "hasM", void 0), c([f({ type: b, nonNullable: !0, json: { write: !0 } })], $.prototype, "vertexAttributes", void 0), $ = M = c([U(Pt)], $);
const Qe = ut(), Qn = $;
export {
  Qn as $,
  Er as a,
  se as c,
  Q as h,
  b as l,
  oe as m
};
//# sourceMappingURL=Mesh-B0vxlJJo.js.map
