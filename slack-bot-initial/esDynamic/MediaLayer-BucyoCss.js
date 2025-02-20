import { N as s, P as x, jb as Oe, ep as k, C as z, O as a, a6 as m, dR as Me, bh as Pe, fu as V, s as q, h5 as H, lh as Le, d$ as J, et as ie, li as G, lj as de, aR as le, h3 as w, dU as Ee, lk as D, aU as ae, df as je, ll as he, lm as Te, ln as He, d_ as ve, eV as xe, ee as Ve, gj as ee, u as Ae, ec as me, eg as Ce, ed as We, ef as Ne, lo as we, eh as Ue, lp as Ge, a2 as ze, dO as Be, aN as Fe, lq as ke, V as Q, jP as qe, cR as Je, U as Ke, a8 as De, bq as Ye, dG as Ze, J as Xe, b9 as Qe, fq as et, h8 as tt, dV as nt, dZ as ot, dX as rt, dY as st, S as it, gm as Y, jc as lt, e8 as at } from "./main-3gzXighg.js";
import { p as ct } from "./imageUtils-CGCsLcef.js";
import { p as R, j as Re, m as ut } from "./perspectiveUtils-DJu4UH5x.js";
import { t as pt, e as te } from "./mat3f64-Dh9_zhFu.js";
import { p as dt } from "./resourceExtension-CYXcls9q.js";
import { o as ht } from "./BoundsStore-PKMt2Ge3.js";
let re = class extends Oe {
  projectOrWarn(e, t) {
    if (e == null) return e;
    const { geometry: n, pending: o } = k(e, t);
    return o ? null : o || n ? n : (z.getLogger(this).warn("geometry could not be projected to the spatial reference", { georeference: this, geometry: e, sourceSpatialReference: e.spatialReference, targetSpatialReference: t }), null);
  }
};
re = s([x("esri.layers.support.GeoreferenceBase")], re);
const K = re, ne = te(), p = w();
let F = class extends Ee {
  constructor() {
    super(...arguments), this.sourcePoint = null, this.mapPoint = null;
  }
};
s([a()], F.prototype, "sourcePoint", void 0), s([a({ type: m })], F.prototype, "mapPoint", void 0), F = s([x("esri.layers.support.ControlPoint")], F);
let P = class extends Me(K) {
  constructor(t) {
    super(t), this.controlPoints = null, this.height = 0, this.type = "control-points", this.width = 0;
  }
  readControlPoints(t, n) {
    const o = Pe.fromJSON(n.spatialReference), r = pt(...n.coefficients, 1);
    return t.map((i) => (V(p, i.x, i.y), R(p, p, r), { sourcePoint: i, mapPoint: new m({ x: p[0], y: p[1], spatialReference: o }) }));
  }
  writeControlPoints(t, n, o, r) {
    if (this.transform != null) t != null && y(t[0]) && (n.controlPoints = t.map((i) => {
      const l = i.sourcePoint;
      return { x: l.x, y: l.y };
    }), n.spatialReference = t[0].mapPoint.spatialReference.toJSON(), n.coefficients = this.transform.slice(0, 8));
    else {
      const i = new q("web-document-write:invalid-georeference", "Invalid 'controlPoints', 'width', 'height' configuration.", { layer: r?.layer, georeference: this });
      r?.messages ? r.messages.push(i) : z.getLogger(this).error(i.name, i.message);
    }
  }
  get coords() {
    if (this.controlPoints == null) return null;
    const t = this._updateTransform(ne);
    if (t == null || !y(this.controlPoints[0])) return null;
    const n = this.controlPoints[0].mapPoint.spatialReference;
    return Pt(t, this.width, this.height, n);
  }
  set coords(t) {
    if (this.controlPoints == null || !y(this.controlPoints[0])) return;
    const n = this.controlPoints[0].mapPoint.spatialReference;
    if ((t = this.projectOrWarn(t, n)) == null) return;
    const { width: o, height: r } = this, { rings: [[i, l, c, u]] } = t, f = { sourcePoint: H(0, r), mapPoint: new m({ x: i[0], y: i[1], spatialReference: n }) }, d = { sourcePoint: H(0, 0), mapPoint: new m({ x: l[0], y: l[1], spatialReference: n }) }, g = { sourcePoint: H(o, 0), mapPoint: new m({ x: c[0], y: c[1], spatialReference: n }) }, O = { sourcePoint: H(o, r), mapPoint: new m({ x: u[0], y: u[1], spatialReference: n }) };
    y(f) && y(d) && y(g) && y(O) && (fe(ne, f, d, g, O), this.controlPoints = this.controlPoints.map(({ sourcePoint: T }) => (V(p, T.x, T.y), R(p, p, ne), { sourcePoint: T, mapPoint: new m({ x: p[0], y: p[1], spatialReference: n }) })));
  }
  get inverseTransform() {
    return this.transform == null ? null : Le(te(), this.transform);
  }
  get transform() {
    return this._updateTransform();
  }
  toMap(t) {
    if (t == null || this.transform == null || this.controlPoints == null || !y(this.controlPoints[0])) return null;
    V(p, t.x, t.y);
    const n = this.controlPoints[0].mapPoint.spatialReference;
    return R(p, p, this.transform), new m({ x: p[0], y: p[1], spatialReference: n });
  }
  toSource(t) {
    if (t == null || this.inverseTransform == null || this.controlPoints == null || !y(this.controlPoints[0])) return null;
    const n = this.controlPoints[0].mapPoint.spatialReference;
    return t = t.normalize(), (t = k(t, n).geometry) == null ? null : (V(p, t.x, t.y), R(p, p, this.inverseTransform), H(p[0], p[1]));
  }
  toSourceNormalized(t) {
    const n = this.toSource(t);
    return n != null && (n.x /= this.width, n.y /= this.height), n;
  }
  _updateTransform(t) {
    const { controlPoints: n, width: o, height: r } = this;
    if (!(n != null && o > 0 && r > 0)) return null;
    const [i, l, c, u] = n;
    if (!y(i)) return null;
    const f = i.mapPoint.spatialReference, d = this._projectControlPoint(l, f), g = this._projectControlPoint(c, f), O = this._projectControlPoint(u, f);
    if (!d.valid || !g.valid || !O.valid || !y(d.controlPoint)) return null;
    t == null && (t = te());
    let T = null;
    return T = y(g.controlPoint) && y(O.controlPoint) ? fe(t, i, d.controlPoint, g.controlPoint, O.controlPoint) : y(g.controlPoint) ? ft(t, i, d.controlPoint, g.controlPoint) : mt(t, i, d.controlPoint), T.every((Ie) => Ie === 0) ? null : T;
  }
  _projectControlPoint(t, n) {
    if (!y(t)) return { valid: !0, controlPoint: t };
    const { sourcePoint: o, mapPoint: r } = t, { geometry: i, pending: l } = k(r, n);
    return l ? { valid: !1, controlPoint: null } : l || i ? { valid: !0, controlPoint: { sourcePoint: o, mapPoint: i } } : (z.getLogger(this).warn("map point could not be projected to the spatial reference", { georeference: this, controlPoint: t, sourceSpatialReference: r.spatialReference, targetSpatialReference: n }), { valid: !1, controlPoint: null });
  }
};
function y(e) {
  return e?.sourcePoint != null && e.mapPoint != null;
}
s([a({ type: [F], json: { write: { allowNull: !1, isRequired: !0 } } })], P.prototype, "controlPoints", void 0), s([J("controlPoints")], P.prototype, "readControlPoints", null), s([ie("controlPoints")], P.prototype, "writeControlPoints", null), s([a()], P.prototype, "coords", null), s([a({ json: { write: !0 } })], P.prototype, "height", void 0), s([a({ readOnly: !0 })], P.prototype, "inverseTransform", null), s([a({ readOnly: !0 })], P.prototype, "transform", null), s([a({ json: { write: !0 } })], P.prototype, "width", void 0), P = s([x("esri.layers.support.ControlPointsGeoreference")], P);
const _ = w(), $ = w(), A = w(), E = w(), b = w(), S = w(), C = w(), j = w(), Z = Math.PI / 2;
function I(e, t, n) {
  V(e, n.sourcePoint.x, n.sourcePoint.y), V(t, n.mapPoint.x, n.mapPoint.y);
}
function mt(e, t, n) {
  return I(_, b, t), I($, S, n), G(A, $, _, Z), G(E, _, $, Z), G(C, S, b, -Z), G(j, b, S, -Z), ce(e, _, $, A, E, b, S, C, j);
}
function ft(e, t, n, o) {
  return I(_, b, t), I($, S, n), I(A, C, o), de(E, _, $, 0.5), G(E, A, E, Math.PI), de(j, b, S, 0.5), G(j, C, j, Math.PI), ce(e, _, $, A, E, b, S, C, j);
}
function fe(e, t, n, o, r) {
  return I(_, b, t), I($, S, n), I(A, C, o), I(E, j, r), ce(e, _, $, A, E, b, S, C, j);
}
const yt = new Array(8).fill(0), gt = new Array(8).fill(0);
function ye(e, t, n, o, r) {
  return e[0] = t[0], e[1] = t[1], e[2] = n[0], e[3] = n[1], e[4] = o[0], e[5] = o[1], e[6] = r[0], e[7] = r[1], e;
}
function ce(e, t, n, o, r, i, l, c, u) {
  return Re(e, ye(yt, t, n, o, r), ye(gt, i, l, c, u));
}
function Pt(e, t, n, o) {
  const r = D(0, n), i = D(0, 0), l = D(t, 0), c = D(t, n);
  return R(r, r, e), R(i, i, e), R(l, l, e), R(c, c, e), new le({ rings: [[r, i, l, c, r]], spatialReference: o });
}
const ue = P, B = w();
let M = class extends K {
  constructor(e) {
    super(e), this.bottomLeft = null, this.bottomRight = null, this.topLeft = null, this.topRight = null, this.type = "corners";
  }
  get coords() {
    let { topLeft: e, topRight: t, bottomLeft: n, bottomRight: o } = this;
    if (e == null || t == null || n == null || o == null) return null;
    const r = e.spatialReference;
    return t = this.projectOrWarn(t, r), n = this.projectOrWarn(n, r), o = this.projectOrWarn(o, r), t == null || n == null || o == null ? null : new le({ rings: [[[n.x, n.y], [e.x, e.y], [t.x, t.y], [o.x, o.y], [n.x, n.y]]], spatialReference: r });
  }
  set coords(e) {
    const { topLeft: t } = this;
    if (t == null) return;
    const n = t.spatialReference;
    if ((e = this.projectOrWarn(e, n)) == null) return;
    const { rings: [[o, r, i, l]] } = e;
    this.bottomLeft = new m({ x: o[0], y: o[1], spatialReference: n }), this.topLeft = new m({ x: r[0], y: r[1], spatialReference: n }), this.topRight = new m({ x: i[0], y: i[1], spatialReference: n }), this.bottomRight = new m({ x: l[0], y: l[1], spatialReference: n });
  }
  toSourceNormalized(e) {
    const { topLeft: t, topRight: n, bottomRight: o, bottomLeft: r } = this;
    if (e == null || t == null || n == null || o == null || r == null) return null;
    const i = t.spatialReference;
    e = e.normalize();
    const l = k(e, i).geometry;
    if (l == null) return null;
    V(B, l.x, l.y);
    const c = Re(te(), [t.x, t.y, r.x, r.y, n.x, n.y, o.x, o.y], [0, 0, 0, 1, 1, 0, 1, 1]);
    return R(B, B, c), H(B[0], B[1]);
  }
};
s([a()], M.prototype, "coords", null), s([a({ type: m })], M.prototype, "bottomLeft", void 0), s([a({ type: m })], M.prototype, "bottomRight", void 0), s([a({ type: m })], M.prototype, "topLeft", void 0), s([a({ type: m })], M.prototype, "topRight", void 0), M = s([x("esri.layers.support.CornersGeoreference")], M);
const vt = M;
let W = class extends K {
  constructor(e) {
    super(e), this.extent = null, this.rotation = 0, this.type = "extent-and-rotation";
  }
  get coords() {
    if (this.extent == null) return null;
    const { xmin: e, ymin: t, xmax: n, ymax: o, spatialReference: r } = this.extent;
    let i;
    if (this.rotation) {
      const { x: l, y: c } = this.extent.center, u = oe(l, c, this.rotation);
      i = [u(e, t), u(e, o), u(n, o), u(n, t)], i.push(i[0]);
    } else i = [[e, t], [e, o], [n, o], [n, t], [e, t]];
    return new le({ rings: [i], spatialReference: r });
  }
  set coords(e) {
    if (e == null || this.extent == null) return;
    const t = this.extent.spatialReference;
    if (e = this.projectOrWarn(e, t), e?.extent == null) return;
    const { rings: [[n, o, r]], extent: { center: { x: i, y: l } } } = e, c = je(Math.PI / 2 - Math.atan2(o[1] - n[1], o[0] - n[0])), u = oe(i, l, -c), [f, d] = u(n[0], n[1]), [g, O] = u(r[0], r[1]);
    this.extent = new ae({ xmin: f, ymin: d, xmax: g, ymax: O, spatialReference: t }), this.rotation = c;
  }
  toSourceNormalized(e) {
    const { extent: t, rotation: n } = this;
    if (e == null || t == null) return null;
    const { xmin: o, ymin: r, xmax: i, ymax: l, center: c, spatialReference: u } = t;
    e = e.normalize();
    const f = k(e, u).geometry;
    if (f == null) return null;
    let d = f.x, g = f.y;
    return n && ([d, g] = oe(c.x, c.y, -n)(d, g)), H(he(d, o, i, 0, 1), he(g, l, r, 0, 1));
  }
};
function oe(e, t, n) {
  const o = Te(n), r = Math.cos(o), i = Math.sin(o);
  return (l, c) => [r * (l - e) + i * (c - t) + e, r * (c - t) - i * (l - e) + t];
}
s([a()], W.prototype, "coords", null), s([a({ type: ae })], W.prototype, "extent", void 0), s([a({ type: Number })], W.prototype, "rotation", void 0), W = s([x("esri.layers.support.ExtentAndRotationGeoreference")], W);
const xt = W, wt = { key: "type", base: K, typeMap: { "control-points": ue, corners: vt, "extent-and-rotation": xt } }, Rt = { key: "type", base: K, typeMap: { "control-points": ue } };
let N = class extends He(ve(xe)) {
  constructor(e) {
    super(e), this.georeference = null, this.opacity = 1;
  }
  readGeoreference(e) {
    return ue.fromJSON(e);
  }
  get contentWidth() {
    return 0;
  }
  get contentHeight() {
    return 0;
  }
  toSource(e) {
    const { georeference: t, contentWidth: n, contentHeight: o } = this;
    if (e == null || t == null || n === 0 || o === 0) return null;
    const r = t.toSourceNormalized(e);
    return r == null ? null : (r.x *= n, r.y *= o, r);
  }
};
s([a({ types: wt, json: { write: !0, types: Rt } })], N.prototype, "georeference", void 0), s([J("georeference")], N.prototype, "readGeoreference", null), s([a({ json: { read: !1, write: !1 } })], N.prototype, "opacity", void 0), N = s([x("esri.layers.support.MediaElementBase")], N);
const pe = N;
function _t(e) {
  return e?.type === "media";
}
function _e(e, t) {
  const n = Ve(t);
  return _t(e) && !!e.portalItem && n != null && n > ee.PORTAL_ITEM;
}
let v = class extends pe {
  constructor(t) {
    super(t), this.animationOptions = null, this.content = null, this.image = null, this.type = "image", this.image = null;
  }
  load() {
    const t = this.image;
    if (typeof t == "string") {
      const n = ct(t).then((o) => {
        this._set("content", o);
      });
      this.addResolvingPromise(n);
    } else if (t instanceof HTMLImageElement) {
      const n = t.decode().then(() => {
        this._set("content", t);
      });
      this.addResolvingPromise(n);
    } else t ? this._set("content", t) : this.addResolvingPromise(Promise.reject(new q("image-element:invalid-image-type", "Invalid image type", { image: t })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return this.content == null ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalWidth : this.content.width;
  }
  get contentHeight() {
    return this.content == null ? 0 : this.content instanceof HTMLImageElement ? this.content.naturalHeight : this.content.height;
  }
  readImage(t, n, o) {
    return Ae(n.url, o);
  }
  writeImage(t, n, o, r) {
    if (t == null) return;
    const i = r?.portalItem, l = r?.resources;
    if (!i || !l) return void (typeof t == "string" && (n[o] = me(t, r)));
    const c = $t(t) ? t : null;
    if (c) {
      if (Ce(c) == null) return void (n[o] = c);
      const u = me(c, { ...r, verifyItemRelativeUrls: r?.verifyItemRelativeUrls ? { writtenUrls: r.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, We.NO);
      if (i && u && !Ne(u)) return l.toKeep.push({ resource: i.resourceFromPath(u), compress: !1 }), void (n[o] = u);
    }
    n[o] = "<pending>", l.pendingOperations.push(bt(t).then((u) => {
      const f = It(u, i);
      n[o] = f.itemRelativeUrl, l.toAdd.push({ resource: f, content: { type: "blob", blob: u }, compress: !1, finish: (d) => {
        this.image = d.url;
      } });
    }));
  }
  write(t, n) {
    const o = super.write(t, n);
    return "mediaType" in o && !o.url && delete o.mediaType, o;
  }
};
s([a()], v.prototype, "animationOptions", void 0), s([a({ readOnly: !0 })], v.prototype, "content", void 0), s([a({ readOnly: !0 })], v.prototype, "contentWidth", null), s([a({ readOnly: !0 })], v.prototype, "contentHeight", null), s([a({ json: { name: "url", type: String, write: { overridePolicy: (e, t, n) => ({ enabled: !_e(n?.layer, n?.origin) }) } } })], v.prototype, "image", void 0), s([J("image", ["url"])], v.prototype, "readImage", null), s([ie("image")], v.prototype, "writeImage", null), s([a({ readOnly: !0, json: { read: !1, write: { target: "mediaType", ignoreOrigin: !0 } } })], v.prototype, "type", void 0), v = s([x("esri.layers.support.ImageElement")], v);
const $e = v;
function $t(e) {
  return typeof e == "string" && !we(e) && !Ue(e);
}
async function bt(e) {
  return typeof e == "string" ? we(e) ? Ge(e) : (await ze(e, { responseType: "blob" })).data : new Promise((t) => St(e).toBlob(t));
}
function St(e) {
  if (e instanceof HTMLCanvasElement) return e;
  const t = e instanceof HTMLImageElement ? e.naturalWidth : e.width, n = e instanceof HTMLImageElement ? e.naturalHeight : e.height, o = document.createElement("canvas"), r = o.getContext("2d");
  return o.width = t, o.height = n, e instanceof HTMLImageElement ? r.drawImage(e, 0, 0, e.width, e.height) : e instanceof ImageData && r.putImageData(e, 0, 0), o;
}
function It(e, t) {
  const n = Be(), o = `${Fe("media", n)}.${dt({ type: "blob", blob: e })}`;
  return t.resourceFromPath(o);
}
let L = class extends pe {
  constructor(e) {
    super(e), this.autoplay = !0, this.content = null, this.type = "video";
  }
  load() {
    const e = this.video;
    if (typeof e == "string") {
      const t = document.createElement("video");
      t.src = e, t.crossOrigin = "anonymous", t.autoplay = !0, t.muted = !0, t.loop = !0, this.addResolvingPromise(this._loadVideo(t).then(() => {
        this._set("content", t);
      }));
    } else e instanceof HTMLVideoElement ? this.addResolvingPromise(this._loadVideo(e).then(() => {
      this._set("content", e);
    })) : this.addResolvingPromise(Promise.reject(new q("video-element:invalid-video-type", "Invalid video type", { video: e })));
    return Promise.resolve(this);
  }
  get contentWidth() {
    return this.content?.videoWidth ?? 0;
  }
  get contentHeight() {
    return this.content?.videoHeight ?? 0;
  }
  set video(e) {
    this.loadStatus === "not-loaded" ? this._set("video", e) : z.getLogger(this).error("#video", "video cannot be changed after the element is loaded.");
  }
  _loadVideo(e) {
    return new Promise((t, n) => {
      const o = ke(e, "canplay", () => {
        this.removeHandles("canplay"), this.autoplay ? e.play().then(t, n) : t();
      });
      this.addHandles(o, "canplay"), e.crossOrigin !== "anonymous" && (e.crossOrigin = "anonymous", e.src?.includes("blob:") || (e.src = e.src));
    });
  }
};
s([a()], L.prototype, "autoplay", void 0), s([a({ readOnly: !0 })], L.prototype, "content", void 0), s([a({ readOnly: !0 })], L.prototype, "contentWidth", null), s([a({ readOnly: !0 })], L.prototype, "contentHeight", null), s([a()], L.prototype, "video", null), L = s([x("esri.layers.support.VideoElement")], L);
const be = L, Ot = { key: "type", defaultKeyValue: "image", base: pe, typeMap: { image: $e, video: be } }, ge = Q.ofType(Ot);
let U = class extends xe.LoadableMixin(qe(Je.EventedAccessor)) {
  constructor(e) {
    super(e), this._index = new ht(), this._elementViewsMap = /* @__PURE__ */ new Map(), this._elementsIndexes = /* @__PURE__ */ new Map(), this._elementsChangedHandler = (t) => {
      for (const o of t.removed) {
        const r = this._elementViewsMap.get(o);
        this._elementViewsMap.delete(o), this._index.delete(r), this.removeHandles(r), r.destroy(), this.notifyChange("fullExtent");
      }
      const { spatialReference: n } = this;
      for (const o of t.added) {
        if (this._elementViewsMap.get(o)) continue;
        const r = new ut({ spatialReference: n, element: o });
        this._elementViewsMap.set(o, r);
        const i = Ke(() => r.coords, () => this._updateIndexForElement(r, !1));
        this._updateIndexForElement(r, !0), this.addHandles(i, r);
      }
      this._elementsIndexes.clear(), this.elements.forEach((o, r) => this._elementsIndexes.set(o, r)), this.emit("refresh");
    }, this.elements = new ge();
  }
  async load(e) {
    if (De(e), !this.spatialReference) {
      const t = this.elements.find((n) => n.georeference?.coords != null);
      this._set("spatialReference", t ? t.georeference.coords.spatialReference : Pe.WGS84);
    }
    return this._elementsChangedHandler({ added: this.elements.items, removed: [] }), this.addHandles(this.elements.on("change", this._elementsChangedHandler)), this;
  }
  destroy() {
    this._index.clear(), this._elementViewsMap.clear(), this._elementsIndexes.clear();
  }
  set elements(e) {
    this._set("elements", Ye(e, this._get("elements"), ge));
  }
  get fullExtent() {
    if (this.loadStatus === "not-loaded") return null;
    const e = this._index.fullBounds;
    return e == null ? null : new ae({ xmin: e[0], ymin: e[1], xmax: e[2], ymax: e[3], spatialReference: this.spatialReference });
  }
  set spatialReference(e) {
    this.loadStatus === "not-loaded" ? this._set("spatialReference", e) : z.getLogger(this).error("#spatialReference", "spatialReference cannot be changed after the source is loaded.");
  }
  async queryElements(e, t) {
    await this.load(), await Ze(e.spatialReference, this.spatialReference, null, t);
    const n = Xe(e.spatialReference, this.spatialReference) ? e : Qe(e, this.spatialReference);
    if (!n) return [];
    const o = n.normalize(), r = [];
    for (const i of o) this._index.forEachInBounds(et(i), ({ normalizedCoords: l, element: c }) => {
      l != null && tt(i, l) && r.push(c);
    });
    return r.sort((i, l) => this._elementsIndexes.get(i) - this._elementsIndexes.get(l)), r;
  }
  _updateIndexForElement(e, t) {
    const n = e.normalizedBounds, o = this._index.has(e), r = n != null;
    this._index.delete(e), r && this._index.set(e, n), this.notifyChange("fullExtent"), t || (o !== r ? this.emit("refresh") : this.emit("change", { element: e.element }));
  }
};
s([a()], U.prototype, "elements", null), s([a({ readOnly: !0 })], U.prototype, "fullExtent", null), s([a()], U.prototype, "spatialReference", null), U = s([x("esri.layers.support.LocalMediaElementSource")], U);
const X = U;
function se(e) {
  return typeof e == "object" && e != null && "type" in e;
}
function Se(e) {
  return se(e) && e.type === "image";
}
let h = class extends nt(ot(rt(st(ve(at))))) {
  constructor(e) {
    super(e), this.effectiveSource = null, this.georeference = null, this.copyright = null, this.operationalLayerType = "MediaLayer", this.spatialReference = null, this.type = "media", this._debouncedSaveOperations = it(async (t, n, o) => {
      const { save: r, saveAs: i } = await import("./mediaLayerUtils-D7GMI7Y4.js");
      switch (t) {
        case Y.SAVE:
          return r(this, n);
        case Y.SAVE_AS:
          return i(this, o, n);
      }
    }), this.source = new X();
  }
  load(e) {
    return this.addResolvingPromise(this._doLoad(e)), Promise.resolve(this);
  }
  async _doLoad(e) {
    await this.loadFromPortal({ supportedTypes: ["Media Layer"] }, e);
    let t = this.source;
    if (!t) throw new q("media-layer:source-missing", "Set 'MediaLayer.source' before loading the layer.");
    const n = this._getSourceOverride(t, this.georeference);
    n && (this.setAtOrigin("source", n, "web-map"), t = n);
    const o = se(t) ? new X({ elements: new Q([t]) }) : t;
    this._set("effectiveSource", o), this.spatialReference && (o.spatialReference = this.spatialReference), await o.load(e), this.spatialReference = o.spatialReference;
  }
  destroy() {
    this.effectiveSource?.destroy(), this.source?.destroy();
  }
  readGeoreference(e, t) {
    return e && "itemId" in t && t.itemId ? e : void 0;
  }
  get fullExtent() {
    return this.loaded ? this.effectiveSource.fullExtent : null;
  }
  set source(e) {
    this.loadStatus !== "loaded" && this.loadStatus !== "failed" ? this._set("source", e) : z.getLogger(this).error("#source", "source cannot be changed after the layer is loaded.");
  }
  castSource(e) {
    return e ? Array.isArray(e) ? new X({ elements: new Q(e) }) : e instanceof Q ? new X({ elements: e }) : e : null;
  }
  readSource(e, t, n) {
    if ("itemId" in t && t.itemId) return;
    const o = this._createSource(t);
    return o?.read(t, n), o;
  }
  writeSource(e, t, n, o) {
    Se(e) ? e.write(t, o) : o?.messages && o?.messages?.push(new q("media-layer:unsupported-source", "source must be an 'ImageElement'"));
  }
  async save(e) {
    return this._debouncedSaveOperations(Y.SAVE, e);
  }
  async saveAs(e, t) {
    return this._debouncedSaveOperations(Y.SAVE_AS, t, e);
  }
  _createSource(e) {
    if ("mediaType" in e) switch (e.mediaType) {
      case "image":
        return new $e();
      case "video":
        return new be();
    }
    return null;
  }
  _getSourceOverride(e, t) {
    if (se(e) && this.originIdOf("source") === ee.PORTAL_ITEM && t && this.originIdOf("georeference") === ee.WEB_MAP) {
      const n = e.toJSON(), o = this._createSource(n);
      return o.read({ ...n }, { origin: "portal-item" }), o.read({ georeference: t }, { origin: "web-map" }), o;
    }
    return null;
  }
};
s([a({ readOnly: !0 })], h.prototype, "effectiveSource", void 0), s([a({ readOnly: !0, json: { read: !1, write: !1, origins: { "web-map": { read: !0, write: !1 } } } })], h.prototype, "georeference", void 0), s([J("web-map", "georeference")], h.prototype, "readGeoreference", null), s([a({ type: String })], h.prototype, "copyright", void 0), s([a({ readOnly: !0 })], h.prototype, "fullExtent", null), s([a({ type: ["MediaLayer"] })], h.prototype, "operationalLayerType", void 0), s([a({ type: ["show", "hide"] })], h.prototype, "listMode", void 0), s([a({ nonNullable: !0, json: { write: { enabled: !0, allowNull: !1, overridePolicy(e, t, n) {
  return { enabled: !0, allowNull: !1, ignoreOrigin: _e(this, n?.origin) && Se(e) && !!e.georeference && e.originIdOf("georeference") > ee.PORTAL_ITEM };
} } } })], h.prototype, "source", null), s([lt("source")], h.prototype, "castSource", null), s([J("source", ["url"])], h.prototype, "readSource", null), s([ie("source")], h.prototype, "writeSource", null), s([a()], h.prototype, "spatialReference", void 0), s([a({ readOnly: !0 })], h.prototype, "type", void 0), h = s([x("esri.layers.MediaLayer")], h);
const Wt = h;
export {
  Wt as default
};
//# sourceMappingURL=MediaLayer-BucyoCss.js.map
