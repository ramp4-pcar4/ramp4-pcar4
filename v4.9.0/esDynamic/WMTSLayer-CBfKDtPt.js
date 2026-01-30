import { N as o, O as n, aU as A, fh as Y, P as N, b_ as Q, d$ as R, V as G, s as _, jt as Z, a6 as fe, fW as ge, ju as B, jv as we, b6 as pe, dV as xe, dW as ve, dZ as Se, dX as Me, dY as Ie, d_ as Te, U as re, fi as U, b2 as ie, a1 as se, z as Le, jw as Ee, jx as Pe, jy as be, a2 as K, fU as ae, ag as le, I as q, fn as Ce, et as Re, e8 as Oe } from "./main-DIdq27YS.js";
import { o as oe } from "./xmlUtils-TLuV3CJ7.js";
var J;
let F = J = class extends Q {
  constructor(e) {
    super(e), this.fullExtent = null, this.id = null, this.tileInfo = null;
  }
  clone() {
    const e = new J();
    return this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent && this.fullExtent.clone()), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("tileInfo") && (e.tileInfo = this.tileInfo && this.tileInfo.clone()), e;
  }
};
o([n({ type: A, json: { read: { source: "fullExtent" } } })], F.prototype, "fullExtent", void 0), o([n({ type: String, json: { read: { source: "id" } } })], F.prototype, "id", void 0), o([n({ type: Y, json: { read: { source: "tileInfo" } } })], F.prototype, "tileInfo", void 0), F = J = o([N("esri.layer.support.TileMatrixSet")], F);
const Ae = F;
var H;
let E = H = class extends Q {
  constructor(e) {
    super(e), this.id = null, this.title = null, this.description = null, this.legendUrl = null;
  }
  clone() {
    const e = new H();
    return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("isDefault") && (e.isDefault = this.isDefault), this.hasOwnProperty("keywords") && (e.keywords = this.keywords && this.keywords.slice()), this.hasOwnProperty("legendUrl") && (e.legendUrl = this.legendUrl), this.hasOwnProperty("title") && (e.title = this.title), e;
  }
};
o([n({ json: { read: { source: "id" } } })], E.prototype, "id", void 0), o([n({ json: { read: { source: "title" } } })], E.prototype, "title", void 0), o([n({ json: { read: { source: "abstract" } } })], E.prototype, "description", void 0), o([n({ json: { read: { source: "legendUrl" } } })], E.prototype, "legendUrl", void 0), o([n({ json: { read: { source: "isDefault" } } })], E.prototype, "isDefault", void 0), o([n({ json: { read: { source: "keywords" } } })], E.prototype, "keywords", void 0), E = H = o([N("esri.layer.support.WMTSStyle")], E);
const Fe = E;
var z;
let w = z = class extends Q {
  constructor(e) {
    super(e), this.description = null, this.fullExtent = null, this.fullExtents = null, this.id = null, this.imageFormats = null, this.layer = null, this.parent = null, this.styles = null, this.title = null, this.tileMatrixSetId = null, this.tileMatrixSets = null;
  }
  readFullExtent(e, t) {
    return (e = t.fullExtent) ? A.fromJSON(e) : null;
  }
  readFullExtents(e, t) {
    return t.fullExtents?.length ? t.fullExtents.map((r) => A.fromJSON(r)) : t.tileMatrixSets?.map((r) => A.fromJSON(r.fullExtent)).filter((r) => r) ?? [];
  }
  get imageFormat() {
    let e = this._get("imageFormat");
    return e || (e = this.imageFormats && this.imageFormats.length ? this.imageFormats[0] : ""), e;
  }
  set imageFormat(e) {
    const t = this.imageFormats;
    e && (e.includes("image/") || t && !t.includes(e)) && (e.includes("image/") || (e = "image/" + e), t && !t.includes(e)) ? console.error("The layer doesn't support the format of " + e) : this._set("imageFormat", e);
  }
  get styleId() {
    let e = this._get("styleId");
    return e || (e = this.styles?.at(0)?.id ?? ""), e;
  }
  set styleId(e) {
    this._set("styleId", e);
  }
  get tileMatrixSet() {
    return this.tileMatrixSets ? this.tileMatrixSets.find((e) => e.id === this.tileMatrixSetId) : null;
  }
  clone() {
    const e = new z();
    return this.hasOwnProperty("description") && (e.description = this.description), this.hasOwnProperty("imageFormats") && (e.imageFormats = this.imageFormats && this.imageFormats.slice()), this.hasOwnProperty("imageFormat") && (e.imageFormat = this.imageFormat), this.hasOwnProperty("fullExtent") && (e.fullExtent = this.fullExtent?.clone()), this.hasOwnProperty("id") && (e.id = this.id), this.hasOwnProperty("layer") && (e.layer = this.layer), this.hasOwnProperty("styleId") && (e.styleId = this.styleId), this.hasOwnProperty("styles") && (e.styles = this.styles?.clone()), this.hasOwnProperty("tileMatrixSetId") && (e.tileMatrixSetId = this.tileMatrixSetId), this.hasOwnProperty("tileMatrixSets") && (e.tileMatrixSets = this.tileMatrixSets?.clone()), this.hasOwnProperty("title") && (e.title = this.title), e;
  }
};
o([n()], w.prototype, "description", void 0), o([n()], w.prototype, "fullExtent", void 0), o([R("fullExtent", ["fullExtent"])], w.prototype, "readFullExtent", null), o([n({ readOnly: !0 })], w.prototype, "fullExtents", void 0), o([R("fullExtents", ["fullExtents", "tileMatrixSets"])], w.prototype, "readFullExtents", null), o([n()], w.prototype, "id", void 0), o([n()], w.prototype, "imageFormat", null), o([n({ json: { read: { source: "formats" } } })], w.prototype, "imageFormats", void 0), o([n()], w.prototype, "layer", void 0), o([n()], w.prototype, "parent", void 0), o([n()], w.prototype, "styleId", null), o([n({ type: G.ofType(Fe), json: { read: { source: "styles" } } })], w.prototype, "styles", void 0), o([n({ json: { write: { ignoreOrigin: !0 } } })], w.prototype, "title", void 0), o([n()], w.prototype, "tileMatrixSetId", void 0), o([n({ readOnly: !0 })], w.prototype, "tileMatrixSet", null), o([n({ type: G.ofType(Ae), json: { read: { source: "tileMatrixSets" } } })], w.prototype, "tileMatrixSets", void 0), w = z = o([N("esri.layers.support.WMTSSublayer")], w);
const j = w, de = 90.71428571428571;
function ne(e) {
  const t = e.replaceAll(/ows:/gi, "");
  if (!f("Contents", new DOMParser().parseFromString(t, "text/xml").documentElement)) throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid", "the wmts get capabilities response is not compliant", { text: e });
}
function $e(e, t) {
  e = e.replaceAll(/ows:/gi, "");
  const r = new DOMParser().parseFromString(e, "text/xml").documentElement, i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = f("Contents", r);
  if (!l) throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid");
  const a = f("OperationsMetadata", r), u = a?.querySelector("[name='GetTile']"), c = u?.getElementsByTagName("Get"), m = c && Array.prototype.slice.call(c), y = t.url?.indexOf("https"), p = y !== void 0 && y > -1;
  let g, I, v = t.serviceMode, x = t?.url;
  m?.length && m.some((L) => {
    const T = f("Constraint", L);
    return !T || $("AllowedValues", "Value", v, T) ? (x = L.attributes[0].nodeValue, !0) : (!T || $("AllowedValues", "Value", "RESTful", T) || $("AllowedValues", "Value", "REST", T) ? I = L.attributes[0].nodeValue : T && !$("AllowedValues", "Value", "KVP", T) || (g = L.attributes[0].nodeValue), !1);
  }), !x && (I ? (x = I, v = "RESTful") : g ? (x = g, v = "KVP") : x = f("ServiceMetadataURL", r)?.getAttribute("xlink:href"));
  const P = x.indexOf("1.0.0/");
  P === -1 && v === "RESTful" ? x += "/" : P > -1 && (x = x.substring(0, P)), v === "KVP" && (x += P > -1 ? "" : "?"), p && (x = x.replace(/^http:/i, "https:"));
  const S = h("ServiceIdentification>ServiceTypeVersion", r), M = h("ServiceIdentification>AccessConstraints", r), b = M && /^none$/i.test(M) ? null : M, k = C("Layer", l), W = C("TileMatrixSet", l), D = k.map((L) => {
    const T = h("Identifier", L);
    return i.set(T, L), je(T, L, W, p, S);
  });
  return { copyright: b, dimensionMap: s, layerMap: i, layers: D, serviceMode: v, tileUrl: x };
}
function Ve(e) {
  return e.layers.forEach((t) => {
    t.tileMatrixSets?.forEach((r) => {
      const i = r.tileInfo;
      i && i.dpi !== 96 && (i.lods?.forEach((s) => {
        s.scale = 96 * s.scale / i.dpi, s.resolution = ye(i.spatialReference?.wkid, s.scale * de / 96, r.id);
      }), i.dpi = 96);
    });
  }), e;
}
function ee(e) {
  return e.nodeType === Node.ELEMENT_NODE;
}
function f(e, t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const i = t.childNodes[r];
    if (ee(i) && i.nodeName === e) return i;
  }
  return null;
}
function C(e, t) {
  const r = [];
  for (let i = 0; i < t.childNodes.length; i++) {
    const s = t.childNodes[i];
    ee(s) && s.nodeName === e && r.push(s);
  }
  return r;
}
function O(e, t) {
  const r = [];
  for (let i = 0; i < t.childNodes.length; i++) {
    const s = t.childNodes[i];
    ee(s) && s.nodeName === e && r.push(s);
  }
  return r.map((i) => i.textContent).filter(pe);
}
function h(e, t) {
  return e.split(">").forEach((r) => {
    t && (t = f(r, t));
  }), t && t.textContent;
}
function $(e, t, r, i) {
  let s;
  return Array.prototype.slice.call(i.childNodes).some((l) => {
    if (l.nodeName.includes(e)) {
      const a = f(t, l), u = a?.textContent;
      if (u === r || r.split(":") && r.split(":")[1] === u) return s = l, !0;
    }
    return !1;
  }), s;
}
function je(e, t, r, i, s) {
  const l = h("Abstract", t), a = O("Format", t);
  return { id: e, fullExtent: ke(t), fullExtents: We(t), description: l, formats: a, styles: De(t, i), title: h("Title", t), tileMatrixSets: Be(s, t, r) };
}
function me(e, t) {
  const r = [], i = e.layerMap?.get(t);
  if (!i) return null;
  const s = C("ResourceURL", i), l = C("Dimension", i);
  let a, u, c, m;
  return l.length && (a = h("Identifier", l[0]), u = O("Default", l[0]) || O("Value", l[0])), l.length > 1 && (c = h("Identifier", l[1]), m = O("Default", l[1]) || O("Value", l[1])), e.dimensionMap.set(t, { dimensions: u, dimensions2: m }), s.forEach((y) => {
    let p = y.getAttribute("template");
    if (y.getAttribute("resourceType") === "tile") {
      if (a && u.length) if (p.includes("{" + a + "}")) p = p.replace("{" + a + "}", "{dimensionValue}");
      else {
        const g = p.toLowerCase().indexOf("{" + a.toLowerCase() + "}");
        g > -1 && (p = p.substring(0, g) + "{dimensionValue}" + p.substring(g + a.length + 2));
      }
      if (c && m.length) if (p.includes("{" + c + "}")) p = p.replace("{" + c + "}", "{dimensionValue2}");
      else {
        const g = p.toLowerCase().indexOf("{" + c.toLowerCase() + "}");
        g > -1 && (p = p.substring(0, g) + "{dimensionValue2}" + p.substring(g + c.length + 2));
      }
      r.push({ template: p, format: y.getAttribute("format"), resourceType: "tile" });
    }
  }), r;
}
function Ue(e, t, r, i, s, l, a, u) {
  const c = _e(e, t, i);
  if (!(c?.length > 0)) return "";
  const { dimensionMap: m } = e, y = m.get(t).dimensions?.[0], p = m.get(t).dimensions2?.[0];
  return c[a % c.length].template.replaceAll(/\{Style\}/gi, s ?? "").replaceAll(/\{TileMatrixSet\}/gi, r ?? "").replaceAll(/\{TileMatrix\}/gi, l).replaceAll(/\{TileRow\}/gi, "" + a).replaceAll(/\{TileCol\}/gi, "" + u).replaceAll(/\{dimensionValue\}/gi, y).replaceAll(/\{dimensionValue2\}/gi, p);
}
function _e(e, t, r) {
  const i = me(e, t), s = i?.filter((l) => l.format === r);
  return (s?.length ? s : i) ?? [];
}
function Ne(e, t, r, i) {
  const { dimensionMap: s } = e, l = me(e, t);
  let a = "";
  if (l && l.length > 0) {
    const u = s.get(t).dimensions?.[0], c = s.get(t).dimensions2?.[0];
    a = l[0].template, a.endsWith(".xxx") && (a = a.slice(0, -4)), a = a.replaceAll(/\{Style\}/gi, i), a = a.replaceAll(/\{TileMatrixSet\}/gi, r), a = a.replaceAll(/\{TileMatrix\}/gi, "{level}"), a = a.replaceAll(/\{TileRow\}/gi, "{row}"), a = a.replaceAll(/\{TileCol\}/gi, "{col}"), a = a.replaceAll(/\{dimensionValue\}/gi, u), a = a.replaceAll(/\{dimensionValue2\}/gi, c);
  }
  return a;
}
function ke(e) {
  const t = f("WGS84BoundingBox", e), r = t ? h("LowerCorner", t).split(" ") : ["-180", "-90"], i = t ? h("UpperCorner", t).split(" ") : ["180", "90"];
  return { xmin: parseFloat(r[0]), ymin: parseFloat(r[1]), xmax: parseFloat(i[0]), ymax: parseFloat(i[1]), spatialReference: { wkid: 4326 } };
}
function We(e) {
  const t = [];
  return oe(e, { BoundingBox: (r) => {
    if (!r.getAttribute("crs")) return;
    const i = r.getAttribute("crs").toLowerCase(), s = te(i), l = i.includes("epsg") && Z(s.wkid);
    let a, u, c, m;
    oe(r, { LowerCorner: (y) => {
      [a, u] = y.textContent.split(" ").map((p) => Number.parseFloat(p)), l && ([a, u] = [u, a]);
    }, UpperCorner: (y) => {
      [c, m] = y.textContent.split(" ").map((p) => Number.parseFloat(p)), l && ([c, m] = [m, c]);
    } }), t.push({ xmin: a, ymin: u, xmax: c, ymax: m, spatialReference: s });
  } }), t;
}
function De(e, t) {
  return C("Style", e).map((r) => {
    const i = f("LegendURL", r), s = f("Keywords", r), l = s ? O("Keyword", s) : [];
    let a = i && i.getAttribute("xlink:href");
    return t && (a = a && a.replace(/^http:/i, "https:")), { abstract: h("Abstract", r), id: h("Identifier", r), isDefault: r.getAttribute("isDefault") === "true", keywords: l, legendUrl: a, title: h("Title", r) };
  });
}
function Be(e, t, r) {
  return C("TileMatrixSetLink", t).map((i) => Ke(e, i, r));
}
function Ke(e, t, r) {
  const i = f("TileMatrixSet", t).textContent, s = O("TileMatrix", t), l = r.find((S) => {
    const M = f("Identifier", S), b = M?.textContent;
    return !!(b === i || i.split(":") && i.split(":")[1] === b);
  }), a = f("TileMatrixSetLimits", t), u = a && C("TileMatrixLimits", a), c = /* @__PURE__ */ new Map();
  if (u?.length) for (const S of u) {
    const M = f("TileMatrix", S).textContent, b = +f("MinTileRow", S).textContent, k = +f("MaxTileRow", S).textContent, W = +f("MinTileCol", S).textContent, D = +f("MaxTileCol", S).textContent;
    c.set(M, { minCol: W, maxCol: D, minRow: b, maxRow: k });
  }
  const m = h("SupportedCRS", l).toLowerCase(), y = qe(l, m), p = y.spatialReference, g = f("TileMatrix", l), I = [parseInt(h("TileWidth", g), 10), parseInt(h("TileHeight", g), 10)], v = [];
  s.length ? s.forEach((S, M) => {
    const b = $("TileMatrix", "Identifier", S, l);
    v.push(ue(b, m, M, i, c));
  }) : C("TileMatrix", l).forEach((S, M) => {
    v.push(ue(S, m, M, i, c));
  });
  const x = Ge(e, l, y, I, v[0]).toJSON(), P = new Y({ dpi: 96, spatialReference: p, size: I, origin: y, lods: v }).toJSON();
  return { id: i, fullExtent: x, tileInfo: P };
}
function te(e) {
  e = e.toLowerCase();
  let t = parseInt(e.split(":").pop(), 10);
  t !== 900913 && t !== 3857 || (t = 102100);
  const r = He(e);
  return r != null && (t = r), { wkid: t };
}
function qe(e, t) {
  return he(f("TileMatrix", e), t);
}
function he(e, t) {
  const r = te(t), [i, s] = h("TopLeftCorner", e).split(" ").map((a) => parseFloat(a)), l = t.includes("epsg") && Z(r.wkid);
  return new fe(l ? { x: s, y: i, spatialReference: r } : { x: i, y: s, spatialReference: r });
}
function Ge(e, t, r, i, s) {
  const l = f("BoundingBox", t);
  let a, u, c, m, y, p;
  if (l && (a = h("LowerCorner", l).split(" "), u = h("UpperCorner", l).split(" ")), a && a.length > 1 && u && u.length > 1) c = parseFloat(a[0]), y = parseFloat(a[1]), m = parseFloat(u[0]), p = parseFloat(u[1]);
  else {
    const g = f("TileMatrix", t), I = parseInt(h("MatrixWidth", g), 10), v = parseInt(h("MatrixHeight", g), 10);
    c = r.x, p = r.y, m = c + I * i[0] * s.resolution, y = p - v * i[1] * s.resolution;
  }
  return Je(e, r.spatialReference, r) ? new A(y, c, p, m, r.spatialReference) : new A(c, y, m, p, r.spatialReference);
}
function Je(e, t, r) {
  return e === "1.0.0" && Z(t.wkid) && !(r.spatialReference.isGeographic && r.x < -90 && r.y >= -90);
}
var V;
function He(e) {
  return e.includes("crs84") || e.includes("crs:84") ? V.CRS84 : e.includes("crs83") || e.includes("crs:83") ? V.CRS83 : e.includes("crs27") || e.includes("crs:27") ? V.CRS27 : null;
}
function ue(e, t, r, i, s) {
  const l = te(t), a = h("Identifier", e);
  let u = parseFloat(h("ScaleDenominator", e));
  const c = ye(l.wkid, u, i);
  u *= 96 / de;
  const m = +h("MatrixWidth", e), y = +h("MatrixHeight", e), { maxCol: p = m - 1, maxRow: g = y - 1, minCol: I = 0, minRow: v = 0 } = s.get(a) ?? {}, { x, y: P } = he(e, t);
  return new ge({ cols: [I, p], level: r, levelValue: a, origin: [x, P], scale: u, resolution: c, rows: [v, g] });
}
function ye(e, t, r) {
  let i;
  return i = B.hasOwnProperty("" + e) ? B.values[B[e]] : r === "default028mm" ? 6370997 * Math.PI / 180 : we(e).metersPerDegree, 7 * t / 25e3 / i;
}
(function(e) {
  e[e.CRS84 = 4326] = "CRS84", e[e.CRS83 = 4269] = "CRS83", e[e.CRS27 = 4267] = "CRS27";
})(V || (V = {}));
var X;
const ce = { "image/png": ".png", "image/png8": ".png", "image/png24": ".png", "image/png32": ".png", "image/jpg": ".jpg", "image/jpeg": ".jpeg", "image/gif": ".gif", "image/bmp": ".bmp", "image/tiff": ".tif", "image/jpgpng": "", "image/jpegpng": "", "image/unknown": "" }, ze = /* @__PURE__ */ new Set(["version", "service", "request", "layer", "style", "format", "tilematrixset", "tilematrix", "tilerow", "tilecol"]);
let d = X = class extends xe(ve(Se(Me(Ie(Te(Oe)))))) {
  constructor(...e) {
    super(...e), this.activeLayer = null, this.copyright = "", this.customParameters = null, this.customLayerParameters = null, this.fullExtent = null, this.operationalLayerType = "WebTiledLayer", this.resourceInfo = null, this.serviceMode = "RESTful", this.sublayers = null, this.type = "wmts", this.version = "1.0.0", this.addHandles([re(() => this.activeLayer, (t, r) => {
      r && !this.sublayers?.includes(r) && (r.layer = null, r.parent = null), t && (t.layer = this, t.parent = this);
    }, U), ie(() => this.sublayers, "after-add", ({ item: t }) => {
      t.layer = this, t.parent = this;
    }, U), ie(() => this.sublayers, "after-remove", ({ item: t }) => {
      t.layer = null, t.parent = null;
    }, U), re(() => this.sublayers, (t, r) => {
      if (r) for (const i of r) i.layer = null, i.parent = null;
      if (t) for (const i of t) i.layer = this, i.parent = this;
    }, U)]);
  }
  normalizeCtorArgs(e, t) {
    return typeof e == "string" ? { url: e, ...t } : e;
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["WMTS"] }, e).catch(se).then(() => this._fetchService(e)).catch((t) => {
      throw se(t), new _("wmtslayer:unsupported-service-data", "Invalid response from the WMTS service.", { error: t });
    })), Promise.resolve(this);
  }
  readActiveLayerFromService(e, t, r) {
    this.activeLayer || (this.activeLayer = new j());
    let i = t.layers.find((s) => s.id === this.activeLayer.id);
    return i || (i = t.layers[0]), this.activeLayer.read(i, r), this.activeLayer;
  }
  readActiveLayerFromItemOrWebDoc(e, t) {
    const { templateUrl: r, wmtsInfo: i } = t, s = r ? this._getLowerCasedUrlParams(r) : null, l = i?.layerIdentifier;
    let a = null;
    const u = i?.tileMatrixSet;
    u && (Array.isArray(u) ? u.length && (a = u[0]) : a = u);
    const c = s?.format, m = s?.style;
    return new j({ id: l, imageFormat: c, styleId: m, tileMatrixSetId: a });
  }
  writeActiveLayer(e, t, r, i) {
    const s = this.activeLayer;
    t.templateUrl = this.getUrlTemplate(s.id, s.tileMatrixSetId, s.imageFormat, s.styleId);
    const l = Le("tileMatrixSet.tileInfo", s);
    t.tileInfo = l ? l.toJSON(i) : null, t.wmtsInfo = { ...t.wmtsInfo, layerIdentifier: s.id, tileMatrixSet: s.tileMatrixSetId };
  }
  readCustomParameters(e, t) {
    const r = t.wmtsInfo;
    return r ? this._mergeParams(r.customParameters, r.url) : null;
  }
  get fullExtents() {
    return this.activeLayer.fullExtents;
  }
  readServiceMode(e, t) {
    return t.templateUrl.includes("?") ? "KVP" : "RESTful";
  }
  readSublayersFromService(e, t, r) {
    return Xe(t.layers, r);
  }
  get supportedSpatialReferences() {
    return this.activeLayer.tileMatrixSets?.map((e) => e.tileInfo?.spatialReference).toArray().filter(pe) ?? [];
  }
  get tilemapCache() {
    const e = this.activeLayer?.tileMatrixSet?.tileInfo;
    return e ? new Ee(e) : void 0;
  }
  get title() {
    return this.activeLayer?.title ?? "Layer";
  }
  set title(e) {
    this._overrideIfSome("title", e);
  }
  get url() {
    return this._get("url");
  }
  set url(e) {
    e && e.substr(-1) === "/" ? this._set("url", e.slice(0, -1)) : this._set("url", e);
  }
  createWebTileLayer(e) {
    const t = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId), r = this._getTileMatrixSetById(e.tileMatrixSetId), i = r?.tileInfo, s = e.fullExtent, l = new Pe({ layerIdentifier: e.id, tileMatrixSet: e.tileMatrixSetId, url: this.url });
    return this.customLayerParameters && (l.customLayerParameters = this.customLayerParameters), this.customParameters && (l.customParameters = this.customParameters), new be({ fullExtent: s, urlTemplate: t, tileInfo: i, wmtsInfo: l });
  }
  async fetchTile(e, t, r, i = {}) {
    const { signal: s } = i, l = this.getTileUrl(e, t, r), { data: a } = await K(l, { responseType: "image", signal: s });
    return a;
  }
  async fetchImageBitmapTile(e, t, r, i = {}) {
    const { signal: s } = i;
    if (this.fetchTile !== X.prototype.fetchTile) {
      const u = await this.fetchTile(e, t, r, i);
      return ae(u, e, t, r, s);
    }
    const l = this.getTileUrl(e, t, r), { data: a } = await K(l, { responseType: "blob", signal: s });
    return ae(a, e, t, r, s);
  }
  findSublayerById(e) {
    return this.sublayers?.find((t) => t.id === e);
  }
  getTileUrl(e, t, r) {
    const i = this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId), s = i?.tileInfo?.lods[e], l = s ? s.levelValue || `${s.level}` : `${e}`;
    let a = this.resourceInfo ? "" : Ue({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId, l, t, r);
    return a || (a = this.getUrlTemplate(this.activeLayer.id, this.activeLayer.tileMatrixSetId, this.activeLayer.imageFormat, this.activeLayer.styleId).replaceAll(/\{level\}/gi, l).replaceAll(/\{row\}/gi, `${t}`).replaceAll(/\{col\}/gi, `${r}`)), a = this._appendCustomLayerParameters(a), a;
  }
  getUrlTemplate(e, t, r, i) {
    if (!this.resourceInfo) {
      const s = Ne({ dimensionMap: this.dimensionMap, layerMap: this.layerMap }, e, t, i);
      if (s) return s;
    }
    if (this.serviceMode === "KVP") return this.url + "?SERVICE=WMTS&VERSION=" + this.version + "&REQUEST=GetTile&LAYER=" + e + "&STYLE=" + i + "&FORMAT=" + r + "&TILEMATRIXSET=" + t + "&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";
    if (this.serviceMode === "RESTful") {
      let s = "";
      return ce[r.toLowerCase()] && (s = ce[r.toLowerCase()]), this.url + e + "/" + i + "/" + t + "/{level}/{row}/{col}" + s;
    }
    return "";
  }
  async _fetchService(e) {
    let t;
    if (this.resourceInfo) this.resourceInfo.serviceMode === "KVP" && (this.url += this.url.includes("?") ? "" : "?"), t = { ssl: !1, data: this.resourceInfo };
    else try {
      t = await this._getCapabilities(this.serviceMode, e), ne(t.data);
    } catch {
      const r = this.serviceMode === "KVP" ? "RESTful" : "KVP";
      try {
        t = await this._getCapabilities(r, e), ne(t.data), this.serviceMode = r;
      } catch (i) {
        throw new _("wmtslayer:unsupported-service-data", "Services does not support RESTful or KVP service modes.", { error: i });
      }
    }
    this.resourceInfo ? t.data = Ve(t.data) : t.data = $e(t.data, { serviceMode: this.serviceMode, url: this.url }), t.data && this.read(t.data, { origin: "service" });
  }
  async _getCapabilities(e, t) {
    const r = this._getCapabilitiesUrl(e);
    return await K(r, { ...t, responseType: "text" });
  }
  _getTileMatrixSetById(e) {
    return this.findSublayerById(this.activeLayer.id)?.tileMatrixSets?.find((i) => i.id === e);
  }
  _appendCustomParameters(e) {
    return this._appendParameters(e, this.customParameters);
  }
  _appendCustomLayerParameters(e) {
    return this._appendParameters(e, { ...le(this.customParameters), ...this.customLayerParameters });
  }
  _appendParameters(e, t) {
    const r = q(e), i = { ...r.query, ...t }, s = Ce(i);
    return s === "" ? r.path : `${r.path}?${s}`;
  }
  _getCapabilitiesUrl(e) {
    this.url = q(this.url).path;
    let t = this.url;
    switch (e) {
      case "KVP":
        t += `?request=GetCapabilities&service=WMTS&version=${this.version}`;
        break;
      case "RESTful": {
        const r = `/${this.version}/WMTSCapabilities.xml`, i = new RegExp(r, "i");
        t = t.replace(i, ""), t += r;
        break;
      }
    }
    return this._appendCustomParameters(t);
  }
  _getLowerCasedUrlParams(e) {
    if (!e) return null;
    const t = q(e).query;
    if (!t) return null;
    const r = {};
    return Object.keys(t).forEach((i) => {
      r[i.toLowerCase()] = t[i];
    }), r;
  }
  _mergeParams(e, t) {
    const r = this._getLowerCasedUrlParams(t);
    if (r) {
      const i = Object.keys(r);
      i.length && (e = e ? le(e) : {}, i.forEach((s) => {
        e.hasOwnProperty(s) || ze.has(s) || (e[s] = r[s]);
      }));
    }
    return e;
  }
};
function Xe(e, t) {
  return e.map((r) => {
    const i = new j();
    return i.read(r, t), i;
  });
}
o([n()], d.prototype, "dimensionMap", void 0), o([n()], d.prototype, "layerMap", void 0), o([n({ type: j, json: { origins: { "web-document": { write: { ignoreOrigin: !0 } } } } })], d.prototype, "activeLayer", void 0), o([R("service", "activeLayer", ["layers"])], d.prototype, "readActiveLayerFromService", null), o([R(["web-document", "portal-item"], "activeLayer", ["wmtsInfo"])], d.prototype, "readActiveLayerFromItemOrWebDoc", null), o([Re(["web-document", "portal-item"], "activeLayer", { templateUrl: { type: String }, tileInfo: { type: Y }, "wmtsInfo.layerIdentifier": { type: String }, "wmtsInfo.tileMatrixSet": { type: String } })], d.prototype, "writeActiveLayer", null), o([n({ type: String, value: "", json: { write: !0 } })], d.prototype, "copyright", void 0), o([n({ type: ["show", "hide"] })], d.prototype, "listMode", void 0), o([n({ json: { read: !0, write: !0 } })], d.prototype, "blendMode", void 0), o([n({ json: { origins: { "web-document": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } }, "portal-item": { read: { source: ["wmtsInfo.customParameters", "wmtsInfo.url"] }, write: { target: "wmtsInfo.customParameters" } } } } })], d.prototype, "customParameters", void 0), o([R(["portal-item", "web-document"], "customParameters")], d.prototype, "readCustomParameters", null), o([n({ json: { origins: { "web-document": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } }, "portal-item": { read: { source: "wmtsInfo.customLayerParameters" }, write: { target: "wmtsInfo.customLayerParameters" } } } } })], d.prototype, "customLayerParameters", void 0), o([n({ type: A, json: { write: { ignoreOrigin: !0 }, origins: { "web-document": { read: { source: "fullExtent" } }, "portal-item": { read: { source: "fullExtent" } } } } })], d.prototype, "fullExtent", void 0), o([n({ readOnly: !0 })], d.prototype, "fullExtents", null), o([n({ type: ["WebTiledLayer"] })], d.prototype, "operationalLayerType", void 0), o([n()], d.prototype, "resourceInfo", void 0), o([n()], d.prototype, "serviceMode", void 0), o([R(["portal-item", "web-document"], "serviceMode", ["templateUrl"])], d.prototype, "readServiceMode", null), o([n({ type: G.ofType(j) })], d.prototype, "sublayers", void 0), o([R("service", "sublayers", ["layers"])], d.prototype, "readSublayersFromService", null), o([n({ readOnly: !0 })], d.prototype, "supportedSpatialReferences", null), o([n({ readOnly: !0 })], d.prototype, "tilemapCache", null), o([n({ json: { read: { source: "title" } } })], d.prototype, "title", null), o([n({ json: { read: !1 }, readOnly: !0, value: "wmts" })], d.prototype, "type", void 0), o([n({ json: { origins: { service: { read: { source: "tileUrl" } }, "web-document": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } }, "portal-item": { read: { source: "wmtsInfo.url" }, write: { target: "wmtsInfo.url" } } } } })], d.prototype, "url", null), o([n()], d.prototype, "version", void 0), d = X = o([N("esri.layers.WMTSLayer")], d);
const Ze = d;
export {
  Ze as default
};
//# sourceMappingURL=WMTSLayer-CBfKDtPt.js.map
