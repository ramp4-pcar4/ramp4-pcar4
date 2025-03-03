import { O as u, P as f, gt as _t, eH as Dt, e9 as Pt, Q as z, bX as ve, ev as _e, cp as Ae, bW as Et, aM as Ke, cs as De, D as le, aa as be, s as oe, gh as Ut, jc as F, bq as Wt, le as zt, fL as he, nK as ce, nL as Ht, bB as Vt, nM as kt, b8 as Qe, a4 as Bt, dG as Gt, dJ as Yt, aG as S, aH as Se, hi as et, dK as we, a3 as O, R as Xt, nN as qt, mJ as Zt, jT as Jt, ma as Kt, jx as Qt, V as er, bi as tr, cA as Re, aF as rr, nO as tt, m6 as nr, cC as $e, cD as rt, nP as nt, g7 as ot, nQ as st, nR as it, cz as or, jb as sr, en as ir, dI as ar, fa as lr, k8 as cr, S as ur, b5 as pr, nS as hr, eU as fr } from "./main-uCo5F72j.js";
import { u as Pe, y as mr, h as dr, b as at, N as se, c as lt, d as fe, k as ct, w as gr } from "./MeshTransform-BgOk5qUs.js";
import { c as yr } from "./imageUtils-CLqoFk3Y.js";
import { c as xr, l as me } from "./MeshVertexAttributes-D0mnQMvn.js";
import { a as Me, i as de } from "./MeshLocalVertexSpace-CI0yOdvD.js";
import { a as ie, s as ge, g as ut, u as Ee } from "./meshVertexSpaceUtils-2aIMUmPD.js";
import { i as vr } from "./earcut-9foQBiEy.js";
import { a as wr, e as $r, t as pt } from "./DoubleArray-BVVPIBFK.js";
import { t as ht } from "./Indices-Bx2A12T4.js";
import { E as br, F as Tr, X as Ar } from "./plane-BmSXagW8.js";
import { e as Ue } from "./deduplicate-B3ij4FuD.js";
import { project as Sr, logProjectionError as b, loadProjectErrorMessage as E, projectToPCPF as ft, projectNormalToPCPF as mt, projectTangentToPCPF as dt, projectFromPCPF as gt, projectNormalFromPCPF as yt, projectTangentFromPCPF as xt } from "./projection-CFWVRG3J.js";
import { c as _, M as Fe, X as Rr, N as vt } from "./vertexSpaceConversion-DSK8N9q4.js";
import { e as wt } from "./mat3f64-Dh9_zhFu.js";
import { e as Le } from "./mat4f64-Dn1WEGBx.js";
import { I as Mr } from "./quat-DvWF8D03.js";
import { e as Fr, o as Ir } from "./quatf64-DxbQqBtW.js";
import { a as $t } from "./spatialReferenceEllipsoidUtils-V3oN7i-5.js";
import { u as Cr } from "./computeTranslationToOriginAndRotation-qjyqVtJb.js";
var G;
const Te = /* @__PURE__ */ new WeakMap();
let jr = 0, L = G = class extends ve {
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
      const o = { type: "image-element", src: _e(e.src, r), crossOrigin: e.crossOrigin };
      t[n] = o;
    } else if (e instanceof HTMLCanvasElement) {
      const o = { type: "canvas-element", imageData: We(e.getContext("2d").getImageData(0, 0, e.width, e.height)) };
      t[n] = o;
    } else if (e instanceof HTMLVideoElement) {
      const o = { type: "video-element", src: _e(e.src, r), autoplay: e.autoplay, loop: e.loop, muted: e.muted, crossOrigin: e.crossOrigin, preload: e.preload };
      t[n] = o;
    } else if (e instanceof ImageData) {
      const o = { type: "image-data", imageData: We(e) };
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
        const t = ze(e.imageData), n = document.createElement("canvas");
        return n.width = t.width, n.height = t.height, n.getContext("2d").putImageData(t, 0, 0), n;
      }
      case "image-data":
        return ze(e.imageData);
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
    if (e instanceof HTMLCanvasElement) return He(e.getContext("2d").getImageData(0, 0, e.width, e.height));
    if (e instanceof ImageData) return He(e);
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
    return this.url != null ? t(this.url) : this.data != null ? this.data instanceof HTMLImageElement || this.data instanceof HTMLVideoElement ? t(this.data.src) : (Te.has(this.data) || Te.set(this.data, ++jr), t(Te.get(this.data))) : t();
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
  static from(e) {
    return typeof e == "string" ? new G({ url: e }) : e instanceof HTMLImageElement || e instanceof HTMLCanvasElement || e instanceof ImageData || e instanceof HTMLVideoElement ? new G({ data: e }) : Ae(G, e);
  }
};
function We(e) {
  let t = "";
  for (let n = 0; n < e.data.length; n++) t += String.fromCharCode(e.data[n]);
  return { data: btoa(t), width: e.width, height: e.height };
}
function ze(e) {
  const t = atob(e.data), n = new Uint8ClampedArray(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return yr(n, e.width, e.height);
}
function He(e) {
  for (let t = 3; t < e.data.length; t += 4) if (e.data[t] !== 255) return !0;
  return !1;
}
u([f({ type: String, json: { write: _t } })], L.prototype, "url", null), u([f({ json: { write: { overridePolicy() {
  return { enabled: !this.url };
} } } }), f()], L.prototype, "data", null), u([Dt("data")], L.prototype, "writeData", null), u([Pt("data")], L.prototype, "readData", null), u([f({ type: Boolean, json: { write: { overridePolicy() {
  return { enabled: this._isOverridden("transparent") };
} } } })], L.prototype, "transparent", null), u([f({ json: { write: !0 } })], L.prototype, "wrap", void 0), u([f({ readOnly: !0 })], L.prototype, "contentHash", null), L = G = u([z("esri.geometry.support.MeshTexture")], L);
const re = L;
let Y = class extends Et(ve) {
  constructor(t) {
    super(t), this.offset = [0, 0], this.rotation = 0, this.scale = [1, 1];
  }
};
u([f({ type: [Number], nonNullable: !0, json: { write: !0 } })], Y.prototype, "offset", void 0), u([f({ type: Number, nonNullable: !0, json: { write: !0 } })], Y.prototype, "rotation", void 0), u([f({ type: [Number], nonNullable: !0, json: { write: !0 } })], Y.prototype, "scale", void 0), Y = u([z("esri.geometry.support.MeshTextureTransform")], Y);
const ne = Y;
var Ie;
let I = Ie = class extends ve {
  constructor(e) {
    super(e), this.color = null, this.colorTexture = null, this.colorTextureTransform = null, this.normalTexture = void 0, this.normalTextureTransform = void 0, this.alphaMode = "auto", this.alphaCutoff = 0.5, this.doubleSided = !0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n) return n;
    const r = new Ie(this.clonePropertiesWithDeduplication(t));
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
u([f({ type: Ke, json: { write: !0 } })], I.prototype, "color", void 0), u([f({ type: re, json: { write: !0 } })], I.prototype, "colorTexture", void 0), u([f({ type: ne, json: { write: !0 } })], I.prototype, "colorTextureTransform", void 0), u([f({ type: re, json: { write: !0 } })], I.prototype, "normalTexture", void 0), u([f({ type: ne, json: { write: !0 } })], I.prototype, "normalTextureTransform", void 0), u([f({ nonNullable: !0, json: { write: !0 } })], I.prototype, "alphaMode", void 0), u([f({ nonNullable: !0, json: { write: !0 } })], I.prototype, "alphaCutoff", void 0), u([f({ nonNullable: !0, json: { write: !0 } })], I.prototype, "doubleSided", void 0), I = Ie = u([z("esri.geometry.support.MeshMaterial")], I);
const Ne = I;
var Ce;
let R = Ce = class extends Ne {
  constructor(e) {
    super(e), this.emissiveColor = null, this.emissiveTexture = null, this.emissiveTextureTransform = void 0, this.occlusionTexture = null, this.occlusionTextureTransform = void 0, this.metallic = 1, this.roughness = 1, this.metallicRoughnessTexture = null, this.metallicRoughnessTextureTransform = void 0;
  }
  clone() {
    return this.cloneWithDeduplication(null, /* @__PURE__ */ new Map());
  }
  cloneWithDeduplication(e, t) {
    const n = e != null ? e.get(this) : null;
    if (n) return n;
    const r = new Ce(this.clonePropertiesWithDeduplication(t));
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
u([f({ type: Ke, json: { write: !0 } })], R.prototype, "emissiveColor", void 0), u([f({ type: re, json: { write: !0 } })], R.prototype, "emissiveTexture", void 0), u([f({ type: ne, json: { write: !0 } })], R.prototype, "emissiveTextureTransform", void 0), u([f({ type: re, json: { write: !0 } })], R.prototype, "occlusionTexture", void 0), u([f({ type: ne, json: { write: !0 } })], R.prototype, "occlusionTextureTransform", void 0), u([f({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "metallic", void 0), u([f({ type: Number, nonNullable: !0, json: { write: !0 }, range: { min: 0, max: 1 } })], R.prototype, "roughness", void 0), u([f({ type: re, json: { write: !0 } })], R.prototype, "metallicRoughnessTexture", void 0), u([f({ type: ne, json: { write: !0 } })], R.prototype, "metallicRoughnessTextureTransform", void 0), R = Ce = u([z("esri.geometry.support.MeshMaterialMetallicRoughness")], R);
const Lr = R;
var ee;
let N = ee = class extends ve {
  static from(e) {
    return Ae(ee, e);
  }
  constructor(e) {
    super(e), this.faces = null, this.material = null, this.name = void 0, this.shading = "source", this.trustSourceNormals = !1;
  }
  castFaces(e) {
    return xr(e, Uint32Array, [Uint16Array], { loggerTag: ".faces=", stride: 3 }, le.getLogger(this));
  }
  castMaterial(e) {
    return Ae(e && typeof e == "object" && ("metallic" in e || "roughness" in e || "metallicRoughnessTexture" in e) ? Lr : Ne, e);
  }
  clone() {
    return new ee({ faces: be(this.faces), shading: this.shading, material: be(this.material), trustSourceNormals: this.trustSourceNormals, name: this.name });
  }
  cloneWithDeduplication(e, t) {
    const n = { faces: be(this.faces), shading: this.shading, material: this.material ? this.material.cloneWithDeduplication(e, t) : null, trustSourceNormals: this.trustSourceNormals, name: this.name };
    return new ee(n);
  }
  get memoryUsage() {
    let e = 0;
    return this.faces != null && (e += this.faces.byteLength), this.material != null && (e += this.material.memoryUsage), e;
  }
};
u([f({ json: { write: !0 } })], N.prototype, "faces", void 0), u([De("faces")], N.prototype, "castFaces", null), u([f({ type: Ne, json: { write: !0 } })], N.prototype, "material", void 0), u([De("material")], N.prototype, "castMaterial", null), u([f()], N.prototype, "name", void 0), u([f({ type: String, json: { write: !0 } })], N.prototype, "shading", void 0), u([f({ type: Boolean })], N.prototype, "trustSourceNormals", void 0), N = ee = u([z("esri.geometry.support.MeshComponent")], N);
const J = N, Nr = "Mesh must be loaded before applying operations", Or = "Provided component is not part of the list of components", _r = "Expected polygon to be a Polygon instance", te = "Expected location to be a Point instance";
let Ve = class extends oe {
  constructor() {
    super("invalid-input:location", te);
  }
};
function Dr(e, t, n) {
  const r = Pr(ke, e, t, n) ? Tr(ke) : [0, 0, 1];
  return Math.abs(r[2]) > Math.cos(Ut(80)) ? F.Z : Math.abs(r[1]) > Math.abs(r[0]) ? F.Y : F.X;
}
function Pr(e, t, n, r) {
  const o = ((i) => !Array.isArray(i[0]))(t) ? (i, a) => t[3 * i + a] : (i, a) => t[i][a], s = r ? Wt(r) / zt(r) : 1;
  return Ar(e, (i, a) => he(i, o(a, 0) * s, o(a, 1) * s, o(a, 2)), n);
}
const ke = br();
function Er(e) {
  const t = Wr(e.rings, e.hasZ, ye.CCW_IS_HOLE, e.spatialReference), n = new Array();
  let r = 0, o = 0;
  for (const a of t.polygons) {
    const c = a.count, l = a.index, h = wr(t.position, 3 * l, 3 * c), d = a.holeIndices.map((p) => p - l), m = ht(vr(h, d, 3));
    n.push({ position: h, faces: m }), r += h.length, o += m.length;
  }
  const s = Ur(n, r, o), i = Array.isArray(s.position) ? Ue(s.position, 3, { originalIndices: s.faces }) : Ue(s.position.buffer, 6, { originalIndices: s.faces });
  return s.position = $r(new Float64Array(i.buffer)), s.faces = i.indices, s;
}
function Ur(e, t, n) {
  if (e.length === 1) return e[0];
  const r = pt(t), o = new Array(n);
  let s = 0, i = 0, a = 0;
  for (const c of e) {
    for (let l = 0; l < c.position.length; l++) r[s++] = c.position[l];
    for (const l of c.faces) o[i++] = l + a;
    a = s / 3;
  }
  return { position: r, faces: ht(o) };
}
function Wr(e, t, n, r) {
  const o = e.length, s = new Array(o), i = new Array(o), a = new Array(o);
  let c = 0;
  for (let g = 0; g < o; ++g) c += e[g].length;
  let l = 0, h = 0, d = 0;
  const m = pt(3 * c);
  let p = 0;
  for (let g = o - 1; g >= 0; g--) {
    const y = e[g], T = n === ye.CCW_IS_HOLE && zr(y, t, r);
    if (T && o !== 1) s[l++] = y;
    else {
      let C = y.length;
      for (let x = 0; x < l; ++x) C += s[x].length;
      const w = { index: p, pathLengths: new Array(l + 1), count: C, holeIndices: new Array(l) };
      w.pathLengths[0] = y.length, y.length > 0 && (a[d++] = { index: p, count: y.length }), p = T ? ue(y, y.length - 1, -1, m, p, y.length, t) : ue(y, 0, 1, m, p, y.length, t);
      for (let x = 0; x < l; ++x) {
        const A = s[x];
        w.holeIndices[x] = p, w.pathLengths[x + 1] = A.length, A.length > 0 && (a[d++] = { index: p, count: A.length }), p = ue(A, 0, 1, m, p, A.length, t);
      }
      l = 0, w.count > 0 && (i[h++] = w);
    }
  }
  for (let g = 0; g < l; ++g) {
    const y = s[g];
    y.length > 0 && (a[d++] = { index: p, count: y.length }), p = ue(y, 0, 1, m, p, y.length, t);
  }
  return i.length = h, a.length = d, { position: m, polygons: i, outlines: a };
}
function ue(e, t, n, r, o, s, i) {
  o *= 3;
  for (let a = 0; a < s; ++a) {
    const c = e[t];
    r[o++] = c[0], r[o++] = c[1], r[o++] = i ? c[2] : 0, t += n;
  }
  return o / 3;
}
function zr(e, t, n) {
  if (!t) return !ce(e);
  const r = e.length - 1;
  switch (Dr(e, r, n)) {
    case F.X:
      return !ce(e, F.Y, F.Z);
    case F.Y:
      return !ce(e, F.X, F.Z);
    case F.Z:
      return !ce(e, F.X, F.Y);
  }
}
var ye;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
})(ye || (ye = {}));
function Hr([e, t, n, r, o, s], i, a, c) {
  Be ??= new Float64Array(24);
  const l = Be;
  return l[0] = e, l[1] = t, l[2] = n, l[3] = e, l[4] = o, l[5] = n, l[6] = r, l[7] = o, l[8] = n, l[9] = r, l[10] = t, l[11] = n, l[12] = e, l[13] = t, l[14] = s, l[15] = e, l[16] = o, l[17] = s, l[18] = r, l[19] = o, l[20] = s, l[21] = r, l[22] = t, l[23] = s, Sr({ positions: l, transform: i, vertexSpace: a, inSpatialReference: c, outSpatialReference: c, outPositions: l }), Tt(l, c);
}
let Be = null;
function bt(e) {
  if (e.length === 0) return Ht;
  const t = Vt([Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY, -Number.POSITIVE_INFINITY]);
  return kt(t, e), t;
}
function Tt(e, t) {
  const [n, r, o, s, i, a] = bt(e);
  return new Qe({ xmin: n, ymin: r, zmin: o, xmax: s, ymax: i, zmax: a, spatialReference: t });
}
function Oe(e, t, n, r) {
  if (r !== void 0) {
    Bt(e(), "option: geographic", { replacement: "Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.", version: "4.30", warnOnce: !0 });
    const o = t.type === "local";
    if (!ie(t) || r === o) return n.isGeographic || n.isWebMercator && r;
    e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`);
  }
  switch (t.type) {
    case "georeferenced":
      return n.isGeographic;
    case "local":
      return n.isGeographic || n.isWebMercator;
  }
}
const ae = () => le.getLogger("esri.geometry.support.meshUtils.centerAt");
function Vr(e, t, n) {
  if (!e.vertexAttributes?.position) return;
  const { vertexSpace: r } = e, o = n?.origin ?? e.anchor, s = Oe(ae, r, o.spatialReference, n?.geographic);
  ie(r) ? kr(e, t, o) : s ? Br(e, t, o) : Gr(e, t, o);
}
function kr(e, t, n) {
  const { vertexSpace: r } = e;
  if (!ie(r)) return;
  const o = St, s = At;
  if (!_(t, s, e.spatialReference)) return void b(ae(), t.spatialReference, e.spatialReference, E);
  if (!_(n, o, e.spatialReference)) {
    const a = e.origin;
    return o[0] = a.x, o[1] = a.y, o[2] = a.z, void b(ae(), n.spatialReference, e.spatialReference, E);
  }
  const i = Gt(Xr, s, o);
  r.origin = Yt(S(), r.origin, i);
}
function Br(e, t, n) {
  const r = Se(n.x, n.y, n.z ?? 0), o = Fe(e, new Me({ origin: r }));
  if (!o) return;
  const s = Se(t.x, t.y, t.z ?? 0), i = Fe({ vertexAttributes: o, spatialReference: e.spatialReference, vertexSpace: new Me({ origin: s }) }, new de());
  if (!i) return;
  const { position: a, normal: c, tangent: l } = i;
  e.vertexAttributes.position = a, e.vertexAttributes.normal = c, e.vertexAttributes.tangent = l, e.vertexAttributesChanged();
}
function Gr(e, t, n) {
  const r = St, o = At;
  if (_(t, o, e.spatialReference)) {
    if (!_(n, r, e.spatialReference)) {
      const s = e.origin;
      return r[0] = s.x, r[1] = s.y, r[2] = s.z, void b(ae(), n.spatialReference, e.spatialReference, E);
    }
    Yr(e.vertexAttributes.position, o, r), e.vertexAttributesChanged();
  } else b(ae(), t.spatialReference, e.spatialReference, E);
}
function Yr(e, t, n) {
  if (e) for (let r = 0; r < e.length; r += 3) for (let o = 0; o < 3; o++) e[r + o] += t[o] - n[o];
}
const At = S(), St = S(), Xr = S();
async function qr(e, t, n) {
  const { source: r } = t, { loadGLTFMesh: o } = await et(import("./loadGLTFMesh-hrjmOfmo.js"), n), s = await Jr(r, n);
  we(n);
  const i = o(new O({ x: 0, y: 0, z: 0, spatialReference: e.spatialReference }), s.url, { resolveFile: Zr(s), signal: n?.signal, expectedType: s.type });
  i.then(() => s.dispose(), () => s.dispose());
  const { vertexAttributes: a, components: c } = await i;
  e.vertexAttributes = a, e.components = c;
}
function Zr(e) {
  const t = Xt(e.url);
  return (n) => {
    const r = qt(n, t, t), o = r ? r.replace(/^ *\.\//, "") : null;
    return (o ? e.files.get(o) : null) ?? n;
  };
}
async function Jr(e, t) {
  if (Array.isArray(e)) {
    if (!e.length) throw new oe("mesh-load-external:missing-assets", "There must be at least one file to load");
    return e[0] instanceof File ? Qr(e) : en(e, t);
  }
  return Rt(e);
}
async function Kr(e, t) {
  const { parts: n, assetMimeType: r, assetName: o } = e;
  if (n.length === 1) return new K(n[0].partUrl);
  const s = await e.toBlob(t);
  return we(t), K.fromBlob(s, Ct(o, r));
}
function Rt(e) {
  return K.fromBlob(e, Ct(e.name, e.type));
}
function Qr(e) {
  return It(e.map((t) => ({ name: t.name, mimeType: t.type, source: Rt(t) })));
}
async function en(e, t) {
  const n = await Zt(e.map(async (r) => {
    const o = await Kr(r);
    return we(t), { name: r.assetName, mimeType: r.assetMimeType, source: o };
  }));
  if (Jt(t)) throw n.forEach((r) => r.source.dispose()), Kt();
  return It(n);
}
const Mt = /^model\/gltf\+json$/, Ft = /^model\/gltf-binary$/, je = /\.gltf$/i, tn = /\.glb$/i;
function It(e) {
  const t = /* @__PURE__ */ new Map();
  let n, r = null;
  for (const { name: o, mimeType: s, source: i } of e) r === null && (Mt.test(s) || je.test(o) ? (r = i.url, n = "gltf") : (Ft.test(s) || tn.test(o)) && (r = i.url, n = "glb")), t.set(o, i.url), i.files.forEach((a, c) => t.set(c, a));
  if (r == null) throw new oe("mesh-load-external:missing-files", "Missing files to load external mesh source");
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
function Ct(e, t) {
  return Mt.test(t) || je.test(e) ? "gltf" : Ft.test(t) || je.test(e) ? "glb" : void 0;
}
let P = class extends Qt {
  constructor(e) {
    super(e), this.externalSources = new er(), this._explicitDisplaySource = null, this.addHandles(tr(() => this.externalSources, "after-remove", ({ item: t }) => {
      t === this._explicitDisplaySource && (this._explicitDisplaySource = null);
    }, { sync: !0, onListenerRemove: () => this._explicitDisplaySource = null }));
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e) {
    if (e != null && !Pe(e)) throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = e, e && this.externalSources.every((t) => !mr(t, e)) && this.externalSources.add(e);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e) {
    return this.externalSources.items.filter((t) => dr(t, e));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(Pe);
  }
};
u([f()], P.prototype, "externalSources", void 0), u([f()], P.prototype, "displaySource", null), u([f()], P.prototype, "_implicitDisplaySource", null), u([f()], P.prototype, "_explicitDisplaySource", void 0), P = u([z("esri.geometry.support.meshUtils.Metadata")], P);
function rn() {
  const { faceDescriptions: e, faceVertexOffsets: t, uvScales: n } = hn, r = 4 * e.length, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(2 * e.length * 3);
  let c = 0, l = 0, h = 0, d = 0;
  for (let m = 0; m < e.length; m++) {
    const p = e[m], g = c / 3;
    for (const T of t) a[d++] = g + T;
    const y = p.corners;
    for (let T = 0; T < 4; T++) {
      const C = y[T];
      let w = 0;
      i[h++] = 0.25 * n[T][0] + p.uvOrigin[0], i[h++] = p.uvOrigin[1] - 0.25 * n[T][1];
      for (let x = 0; x < 3; x++) p.axis[x] !== 0 ? (o[c++] = 0.5 * p.axis[x], s[l++] = p.axis[x]) : (o[c++] = 0.5 * C[w++], s[l++] = 0);
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function nn(e, t) {
  const n = e.components[0], r = n.faces, o = fn[t], s = 6 * o, i = new Array(6), a = new Array(r.length - 6);
  let c = 0, l = 0;
  for (let h = 0; h < r.length; h++) h >= s && h < s + 6 ? i[c++] = r[h] : a[l++] = r[h];
  if (e.vertexAttributes.uv != null) {
    const h = new Float32Array(e.vertexAttributes.uv), d = 4 * o * 2, m = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let p = 0; p < m.length; p++) h[d + p] = m[p];
    e.vertexAttributes.uv = h;
  }
  return e.components = [new J({ faces: i, material: n.material }), new J({ faces: a })], e;
}
function on(e = 0) {
  const t = Math.round(8 * 2 ** e), n = 2 * t, r = (t - 1) * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * ((t - 1) * n * 2));
  let c = 0, l = 0, h = 0, d = 0;
  for (let m = 0; m <= t; m++) {
    const p = m / t * Math.PI + 0.5 * Math.PI, g = Math.cos(p), y = Math.sin(p);
    v[2] = y;
    const T = m === 0 || m === t, C = T ? n - 1 : n;
    for (let w = 0; w <= C; w++) {
      const x = w / C * 2 * Math.PI;
      v[0] = -Math.sin(x) * g, v[1] = Math.cos(x) * g;
      for (let A = 0; A < 3; A++) o[c] = 0.5 * v[A], s[c] = v[A], ++c;
      i[l++] = (w + (T ? 0.5 : 0)) / n, i[l++] = m / t, m !== 0 && w !== n && (m !== t && (a[h++] = d, a[h++] = d + 1, a[h++] = d - n), m !== 1 && (a[h++] = d, a[h++] = d - n, a[h++] = d - n - 1)), d++;
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function sn(e = 0) {
  const n = Math.round(16 * 2 ** e), r = 4 * (n + 1) + 2 * n, o = new Float64Array(3 * r), s = new Float32Array(3 * r), i = new Float32Array(2 * r), a = new Uint32Array(3 * (4 * n));
  let c = 0, l = 0, h = 0, d = 0, m = 0;
  for (let p = 0; p <= 5; p++) {
    const g = p === 0 || p === 5, y = p <= 1 || p >= 4, T = p === 2 || p === 4, C = g ? n - 1 : n;
    for (let w = 0; w <= C; w++) {
      const x = w / C * 2 * Math.PI, A = g ? 0 : 0.5;
      v[0] = A * Math.sin(x), v[1] = A * -Math.cos(x), v[2] = p <= 2 ? 0.5 : -0.5;
      for (let H = 0; H < 3; H++) o[c++] = v[H], s[l++] = y ? H === 2 ? p <= 1 ? 1 : -1 : 0 : H === 2 ? 0 : v[H] / A;
      i[h++] = (w + (g ? 0.5 : 0)) / n, i[h++] = p <= 1 ? 1 * p / 3 : p <= 3 ? 1 * (p - 2) / 3 + 1 / 3 : 1 * (p - 4) / 3 + 2 / 3, T || p === 0 || w === n || (p !== 5 && (a[d++] = m, a[d++] = m + 1, a[d++] = m - n), p !== 1 && (a[d++] = m, a[d++] = m - n, a[d++] = m - n - 1)), m++;
    }
  }
  return { position: o, normal: s, uv: i, faces: a };
}
function an(e, t) {
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
function ln(e) {
  const t = Q.facingAxisOrderSwap[e], n = Q.position, r = Q.normal, o = new Float64Array(n.length), s = new Float32Array(r.length);
  let i = 0;
  for (let a = 0; a < 4; a++) {
    const c = i;
    for (let l = 0; l < 3; l++) {
      const h = t[l], d = Math.abs(h) - 1, m = h >= 0 ? 1 : -1;
      o[i] = n[c + d] * m, s[i] = r[c + d] * m, i++;
    }
  }
  return { position: o, normal: s, uv: new Float32Array(Q.uv), faces: new Uint32Array(Q.faces), isPlane: !0 };
}
const V = 1, k = 2, B = 3, Q = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [B, V, k], west: [-B, -V, k], north: [-V, B, k], south: [V, -B, k], up: [V, k, B], down: [V, -k, -B] } };
function pe(e, t, n) {
  e.isPlane || cn(e), pn(e, un(n?.size, n?.unit, t.spatialReference));
  const r = ge(t, n), o = t.spatialReference.isGeographic ? ge(t) : r, s = Fe({ vertexAttributes: e, vertexSpace: o, spatialReference: t.spatialReference }, r, { allowBufferReuse: !0 });
  return { vertexAttributes: new me({ ...s, uv: e.uv }), vertexSpace: r, components: [new J({ faces: e.faces, material: n?.material || null })], spatialReference: t.spatialReference };
}
function cn(e) {
  for (let t = 0; t < e.position.length; t += 3) e.position[t + 2] += 0.5;
}
function un(e, t, n) {
  const r = Rr(t, n);
  if (e == null && r === 1) return null;
  if (e == null) return [r, r, r];
  if (typeof e == "number") {
    const o = e * r;
    return [o, o, o];
  }
  return [e.width != null ? e.width * r : r, e.depth != null ? e.depth * r : r, e.height != null ? e.height * r : r];
}
function pn(e, t) {
  if (t != null) {
    D[0] = t[0], D[4] = t[1], D[8] = t[2];
    for (let n = 0; n < e.position.length; n += 3) {
      for (let r = 0; r < 3; r++) v[r] = e.position[n + r];
      Re(v, v, D);
      for (let r = 0; r < 3; r++) e.position[n + r] = v[r];
    }
    if (t[0] !== t[1] || t[1] !== t[2]) {
      D[0] = 1 / t[0], D[4] = 1 / t[1], D[8] = 1 / t[2];
      for (let n = 0; n < e.normal.length; n += 3) {
        for (let r = 0; r < 3; r++) v[r] = e.normal[n + r];
        Re(v, v, D), rr(v, v);
        for (let r = 0; r < 3; r++) e.normal[n + r] = v[r];
      }
    }
  }
}
const hn = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] }, fn = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 }, v = S(), D = wt(), U = () => le.getLogger("esri.geometry.support.meshUtils.rotate");
function mn(e, t, n) {
  if (!e.vertexAttributes?.position || t[3] === 0) return;
  const { spatialReference: r, vertexSpace: o } = e, s = n?.origin ?? e.anchor, i = n?.geographic, a = Oe(U, o, r, i);
  ut(e) ? dn(e, t, s) : a ? gn(e, t, s) : yn(e, t, s);
}
function dn(e, t, n) {
  e.transform ??= new se();
  const { vertexSpace: r, transform: o, spatialReference: s } = e, [i, a, c] = r.origin, l = new O({ x: i, y: a, z: c, spatialReference: s }), h = X;
  if (l.equals(n)) he(h, 0, 0, 0);
  else if (!vt(h, n, e)) return void b(U(), n.spatialReference, s, E);
  Mr(qe, fe(t), lt(t));
  const d = tt(Ge, qe, $e, nr, h), { localMatrix: m } = o, p = rt(Ge, d, m);
  o.scale = nt(S(), p), ot(p, p, st(X, o.scale));
  const g = o.rotationAxis;
  o.rotation = ct(p), o.rotationAngle === 0 && (o.rotationAxis = g), o.translation = it(S(), p);
}
function gn(e, t, n) {
  const r = e.spatialReference, o = $t(r), s = jt;
  if (!_(n, s, o) && (b(U(), n.spatialReference, o, "Falling back to mesh origin"), !_(e.origin, s, o))) return void b(U(), e.origin.spatialReference, o);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, l = new Float64Array(i.length), h = a != null ? new Float32Array(a.length) : null, d = c != null ? new Float32Array(c.length) : null;
  Cr(o, s, xe, o), or(Xe, xe);
  const m = Ye;
  Re(fe(Ye), fe(t), Xe), m[3] = t[3], ft(i, r, l) && (a == null || h == null || mt(a, i, l, r, h)) && (c == null || d == null || dt(c, i, l, r, d)) ? (Z(l, m, 3, s), gt(l, i, r) && (a == null || h == null || (Z(h, m, 3), yt(h, i, l, r, a))) && (c == null || d == null || (Z(d, m, 4), xt(d, i, l, r, c))) ? e.vertexAttributesChanged() : b(U(), o, r)) : b(U(), r, o);
}
function yn(e, t, n) {
  const r = jt;
  if (!_(n, r, e.spatialReference)) {
    const o = e.origin;
    return r[0] = o.x, r[1] = o.y, r[2] = o.z, void b(U(), n.spatialReference, e.spatialReference, E);
  }
  Z(e.vertexAttributes.position, t, 3, r), Z(e.vertexAttributes.normal, t, 3), Z(e.vertexAttributes.tangent, t, 4), e.vertexAttributesChanged();
}
function Z(e, t, n, r = $e) {
  if (e != null) {
    sr(xe, lt(t), fe(t));
    for (let o = 0; o < e.length; o += n) {
      for (let s = 0; s < 3; s++) X[s] = e[o + s] - r[s];
      ir(X, X, xe);
      for (let s = 0; s < 3; s++) e[o + s] = X[s] + r[s];
    }
  }
}
const X = S(), Ge = Le(), Ye = at(), xe = Le(), Xe = wt(), jt = S(), qe = Fr(), W = () => le.getLogger("esri.geometry.support.meshUtils.scale");
function xn(e, t, n) {
  if (!e.vertexAttributes?.position) return;
  const { vertexSpace: r, spatialReference: o } = e, s = n?.origin ?? e.anchor, i = n?.geographic, a = Oe(W, r, o, i);
  ut(e) ? vn(e, t, s) : a ? wn(e, t, s) : $n(e, t, s);
}
function vn(e, t, n) {
  e.transform ??= new se();
  const { vertexSpace: r, transform: o, spatialReference: s } = e, [i, a, c] = r.origin, l = new O({ x: i, y: a, z: c, spatialReference: s }), h = q;
  if (l.equals(n)) he(h, 0, 0, 0);
  else if (!vt(h, n, e)) return void b(W(), n.spatialReference, s, E);
  const d = he(bn, t, t, t), m = tt(Ze, Ir, $e, d, h), { localMatrix: p } = o, g = rt(Ze, m, p);
  o.scale = nt(S(), g), ot(g, g, st(q, o.scale));
  const y = o.rotationAxis;
  o.rotation = ct(g), o.rotationAngle === 0 && (o.rotationAxis = y), o.translation = it(S(), g);
}
function wn(e, t, n) {
  const r = e.spatialReference, o = $t(r), s = Nt;
  if (!_(n, s, o) && (b(W(), n.spatialReference, o, "Falling back to mesh origin"), !_(e.origin, s, o))) return void b(W(), e.origin.spatialReference, o);
  const i = e.vertexAttributes.position, a = e.vertexAttributes.normal, c = e.vertexAttributes.tangent, l = new Float64Array(i.length), h = a != null ? new Float32Array(a.length) : null, d = c != null ? new Float32Array(c.length) : null;
  ft(i, r, l) && (a == null || h == null || mt(a, i, l, r, h)) && (c == null || d == null || dt(c, i, l, r, d)) ? (Lt(l, t, s), gt(l, i, r) && (a == null || h == null || yt(h, i, l, r, a)) && (c == null || d == null || xt(d, i, l, r, c)) ? e.vertexAttributesChanged() : b(W(), o, r)) : b(W(), r, o);
}
function $n(e, t, n) {
  const r = Nt;
  if (!_(n, r, e.spatialReference)) {
    const o = e.origin;
    return r[0] = o.x, r[1] = o.y, r[2] = o.z, void b(W(), n.spatialReference, e.spatialReference, E);
  }
  Lt(e.vertexAttributes.position, t, r), e.vertexAttributesChanged();
}
function Lt(e, t, n = $e) {
  if (e) for (let r = 0; r < e.length; r += 3) {
    for (let o = 0; o < 3; o++) q[o] = e[r + o] - n[o];
    ar(q, q, t);
    for (let o = 0; o < 3; o++) e[r + o] = q[o] + n[o];
  }
}
const q = S(), bn = S(), Ze = Le(), Nt = S();
var M;
const Ot = "esri.geometry.Mesh";
function j() {
  return le.getLogger(Ot);
}
const Tn = { base: null, key: "type", defaultKeyValue: "georeferenced", typeMap: { georeferenced: de, local: Me } };
let $ = M = class extends lr.LoadableMixin(cr(fr)) {
  constructor(e) {
    super(e), this.components = null, this.vertexSpace = new de(), this.transform = null, this.metadata = new P(), this.hasZ = !0, this.hasM = !1, this.vertexAttributes = new me(), this.type = "mesh";
  }
  initialize() {
    (this.metadata.externalSources.length === 0 || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.addHandles(ur(() => ({ vertexAttributes: this.vertexAttributes, components: this.components?.map((e) => e.clone()) }), () => this._clearSources(), { once: !0, sync: !0 }));
    });
  }
  get hasExtent() {
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : this.metadata.displaySource?.extent != null;
  }
  get _transformedExtent() {
    const { components: e, spatialReference: t, vertexAttributes: n, vertexSpace: r } = this, o = n.position;
    if (o.length === 0 || e && e.length === 0) return new Qe({ xmin: 0, ymin: 0, zmin: 0, xmax: 0, ymax: 0, zmax: 0, spatialReference: t });
    if (ie(r)) {
      const { _untransformedBounds: s, transform: i } = this;
      return Hr(s, i, r, t);
    }
    return Tt(o, t);
  }
  get _untransformedBounds() {
    return bt(this.vertexAttributes.position);
  }
  get anchor() {
    const e = Ee(this.vertexSpace, this.spatialReference);
    if (e != null) return e;
    const { center: t, zmin: n } = this._transformedExtent;
    return new O({ x: t.x, y: t.y, z: n, spatialReference: this.spatialReference });
  }
  get origin() {
    const e = Ee(this.vertexSpace, this.spatialReference);
    return e ?? this._transformedExtent.center;
  }
  get extent() {
    return this.loaded || this.metadata?.displaySource?.extent == null ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e) {
    this._checkIfLoaded("addComponent()") && (this.components || (this.components = []), this.components.push(J.from(e)), this.notifyChange("components"));
  }
  removeComponent(e) {
    if (this._checkIfLoaded("removeComponent()")) {
      if (this.components) {
        const t = this.components.indexOf(e);
        if (t !== -1) return this.components.splice(t, 1), void this.notifyChange("components");
      }
      j().error("removeComponent()", Or);
    }
  }
  rotate(e, t, n, r) {
    return gr(e, t, n, Je), mn(this, Je, r), this;
  }
  offset(e, t, n) {
    if (!this._checkIfLoaded("offset()")) return this;
    const { vertexSpace: r, vertexAttributes: o } = this, s = o?.position;
    if (!s) return this;
    if (ie(r)) {
      const [i, a, c] = r.origin;
      r.origin = Se(i + e, a + t, c + n);
    } else {
      for (let i = 0; i < s.length; i += 3) s[i] += e, s[i + 1] += t, s[i + 2] += n;
      this.vertexAttributesChanged();
    }
    return this;
  }
  scale(e, t) {
    return this._checkIfLoaded("scale()") ? (xn(this, e, t), this) : this;
  }
  centerAt(e, t) {
    return this._checkIfLoaded("centerAt()") ? (Vr(this, e, t), this) : this;
  }
  load(e) {
    const { metadata: { displaySource: t } } = this;
    return t && this.addResolvingPromise(qr(this, t, e)), Promise.resolve(this);
  }
  addExternalSources(e) {
    this.metadata.externalSources.addMany(e);
  }
  updateDisplaySource(e) {
    this.metadata.displaySource = e;
  }
  clone() {
    return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(), this.vertexSpace.clone());
  }
  cloneAndModifyVertexAttributes(e, t) {
    let n = null;
    if (this.components) {
      const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map();
      n = this.components.map((i) => i.cloneWithDeduplication(o, s));
    }
    const r = { components: n, spatialReference: this.spatialReference, vertexAttributes: e, vertexSpace: t, transform: this.transform?.clone() ?? null, metadata: this.metadata.clone() };
    return new M(r);
  }
  cloneShallow() {
    return new M({ components: this.components, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes, vertexSpace: this.vertexSpace.clone(), transform: this.transform, metadata: this.metadata });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e) {
    const [{ toBinaryGLTF: t }] = await Promise.all([import("./gltfexport-CMlWykqA.js"), this.load(e)]);
    return we(e), await t(this, e);
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
    return !!this.loaded || (j().error(e, Nr), !1);
  }
  static createBox(e, t) {
    if (!(e instanceof O)) return j().error(".createBox()", te), null;
    const n = new M(pe(rn(), e, t));
    return t?.imageFace && t.imageFace !== "all" ? nn(n, t.imageFace) : n;
  }
  static createSphere(e, t) {
    return e instanceof O ? new M(pe(on(t?.densificationFactor || 0), e, t)) : (j().error(".createSphere()", te), null);
  }
  static createCylinder(e, t) {
    return e instanceof O ? new M(pe(sn(t?.densificationFactor || 0), e, t)) : (j().error(".createCylinder()", te), null);
  }
  static createPlane(e, t) {
    if (!(e instanceof O)) return j().error(".createPlane()", te), null;
    const n = t?.facing ?? "up", r = an(n, t?.size);
    return new M(pe(ln(n), e, { ...t, size: r }));
  }
  static createFromPolygon(e, t) {
    if (!(e instanceof pr)) return j().error(".createFromPolygon()", _r), null;
    const n = Er(e);
    return new M({ vertexAttributes: new me({ position: n.position }), components: [new J({ faces: n.faces, shading: "flat", material: t?.material ?? null })], spatialReference: e.spatialReference, vertexSpace: new de() });
  }
  static async createFromGLTF(e, t, n) {
    if (!(e instanceof O)) {
      const o = new Ve();
      throw j().error(".createfromGLTF()", o.message), o;
    }
    const { loadGLTFMesh: r } = await et(import("./loadGLTFMesh-hrjmOfmo.js"), n);
    return new M(await r(e, t, n));
  }
  static async createFromFiles(e, t, n) {
    hr(j(), "`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'", { replacement: "SceneLayer.convertMesh", version: "4.29" });
    const r = (o) => j().error(".createFromFiles()", o.message);
    if (!(e instanceof O)) {
      const o = new Ve();
      throw r(o), o;
    }
    if (!n?.layer) throw new oe("invalid:no-layer", "SceneLayer required for file to mesh conversion.");
    return n.layer.convertMesh(t, { location: e, ...n });
  }
  static createWithExternalSource(e, t, n) {
    const r = n?.extent ?? null, { spatialReference: o } = e, s = n?.transform?.clone() ?? new se(), i = ge(e, n), a = { source: t, extent: r }, c = new P();
    return c.externalSources.push(a), new M({ metadata: c, transform: s, vertexSpace: i, spatialReference: o });
  }
  static createIncomplete(e, t) {
    const { spatialReference: n } = e, r = t?.transform?.clone() ?? new se(), o = ge(e, t), s = new M({ transform: r, vertexSpace: o, spatialReference: n });
    return s.addResolvingPromise(Promise.reject(new oe("mesh-incomplete", "Mesh resources are not complete"))), s;
  }
};
u([f({ type: [J], json: { write: !0 } })], $.prototype, "components", void 0), u([f({ nonNullable: !0, types: Tn, constructOnly: !0, json: { write: !0 } })], $.prototype, "vertexSpace", void 0), u([f({ type: se, json: { write: !0 } })], $.prototype, "transform", void 0), u([f({ constructOnly: !0 })], $.prototype, "metadata", void 0), u([f()], $.prototype, "hasExtent", null), u([f()], $.prototype, "_transformedExtent", null), u([f()], $.prototype, "_untransformedBounds", null), u([f()], $.prototype, "anchor", null), u([f()], $.prototype, "origin", null), u([f({ readOnly: !0, json: { read: !1 } })], $.prototype, "extent", null), u([f({ readOnly: !0, json: { read: !1, write: !0, default: !0 } })], $.prototype, "hasZ", void 0), u([f({ readOnly: !0, json: { read: !1, write: !0, default: !1 } })], $.prototype, "hasM", void 0), u([f({ type: me, nonNullable: !0, json: { write: !0 } })], $.prototype, "vertexAttributes", void 0), $ = M = u([z(Ot)], $);
const Je = at(), Bn = $;
export {
  Bn as $,
  ne as c,
  J as h,
  Lr as m,
  re as w
};
//# sourceMappingURL=Mesh-C9EeJ39q.js.map
