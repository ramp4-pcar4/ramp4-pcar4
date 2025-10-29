import { s as j, dh as q, bk as Y, a2 as x, cX as ee, cW as L, b0 as ne, bh as k, di as te, d0 as ie, c$ as ae, dj as E, cV as se, I as A, C as re, dk as oe } from "./main-3gzXighg.js";
import { E as le, I as ce, N as ue } from "./geojson-CjVVgL-1.js";
import { o as de } from "./clientSideDefaults-qvu_wF6B.js";
import { p as fe } from "./sourceUtils-CU5FGcpt.js";
const G = () => re.getLogger("esri.layers.ogc.ogcFeatureUtils"), J = "startindex", me = /* @__PURE__ */ new Set([J, "offset"]), _ = "http://www.opengis.net/def/crs/", xe = `${_}OGC/1.3/CRS84`;
var l;
async function $e(e, t, n = {}, i = 5) {
  const { links: a } = e, o = m(a, "items", l.geojson) || m(a, "http://www.opengis.net/def/rel/ogc/1.0/items", l.geojson);
  if (o == null) throw new j("ogc-feature-layer:missing-items-page", "Missing items url");
  const { apiKey: d, customParameters: g, signal: p } = n, u = q(o.href, e.landingPage.url), I = { limit: i, ...g, token: d }, $ = Y(u, I), R = { accept: l.geojson }, { data: S } = await x($, { signal: p, headers: R }), N = Ie($, i, S.links) ?? J;
  le(S);
  const f = ce(S, { geometryType: t.geometryType }), h = t.fields || f.fields || [], W = t.hasZ != null ? t.hasZ : f.hasZ, y = f.geometryType, w = t.objectIdField || f.objectIdFieldName || "OBJECTID";
  let r = t.timeInfo;
  const v = h.find(({ name: s }) => s === w);
  if (v) v.editable = !1, v.nullable = !1;
  else {
    if (!f.objectIdFieldType) throw new j("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    h.unshift({ name: w, alias: w, type: f.objectIdFieldType === "number" ? "esriFieldTypeOID" : "esriFieldTypeString", editable: !1, nullable: !1 });
  }
  if (w !== f.objectIdFieldName) {
    const s = h.find(({ name: c }) => c === f.objectIdFieldName);
    s && (s.type = "esriFieldTypeInteger");
  }
  h === f.fields && f.unknownFields.length > 0 && G().warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: f.unknownFields } });
  for (const s of h) {
    if (s.name == null && (s.name = s.alias), s.alias == null && (s.alias = s.name), s.type !== "esriFieldTypeOID" && s.type !== "esriFieldTypeGlobalID" && (s.editable = s.editable == null || !!s.editable, s.nullable = s.nullable == null || !!s.nullable), !s.name) throw new j("ogc-feature-layer:invalid-field-name", "field name is missing", { field: s });
    if (!ee.jsonValues.includes(s.type)) throw new j("ogc-feature-layer:invalid-field-type", `invalid type for field "${s.name}"`, { field: s });
  }
  if (r) {
    const s = new L(h);
    if (r.startTimeField) {
      const c = s.get(r.startTimeField);
      c ? (r.startTimeField = c.name, c.type = "esriFieldTypeDate") : r.startTimeField = null;
    }
    if (r.endTimeField) {
      const c = s.get(r.endTimeField);
      c ? (r.endTimeField = c.name, c.type = "esriFieldTypeDate") : r.endTimeField = null;
    }
    if (r.trackIdField) {
      const c = s.get(r.trackIdField);
      c ? r.trackIdField = c.name : (r.trackIdField = null, G().warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: r } }));
    }
    r.timeReference ||= { timeZoneIANA: ne }, r.startTimeField || r.endTimeField || (G().warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: r } }), r = null);
  }
  return { drawingInfo: y ? de(y) : null, extent: he(e), geometryType: y, fields: h, hasZ: !!W, objectIdField: w, paginationParameter: N, timeInfo: r };
}
async function Se(e, t = {}) {
  const { links: n, url: i } = e, a = m(n, "data", l.json) || m(n, "http://www.opengis.net/def/rel/ogc/1.0/data", l.json);
  if (a == null) throw new j("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: o, customParameters: d, signal: g } = t, p = q(a.href, i), { data: u } = await x(p, { signal: g, headers: { accept: l.json }, query: { ...d, token: o } });
  for (const I of u.collections) I.landingPage = e;
  return u;
}
async function Ne(e, t = {}) {
  const { links: n, url: i } = e, a = m(n, "conformance", l.json) || m(n, "http://www.opengis.net/def/rel/ogc/1.0/conformance", l.json);
  if (a == null) throw new j("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: o, customParameters: d, signal: g } = t, p = q(a.href, i), { data: u } = await x(p, { signal: g, headers: { accept: l.json }, query: { ...d, token: o } });
  return u;
}
async function ve(e, t = {}) {
  const { apiKey: n, customParameters: i, signal: a } = t, { data: o } = await x(e, { signal: a, headers: { accept: l.json }, query: { ...i, token: n } });
  return o.url = e, o;
}
async function Pe(e, t = {}) {
  const { links: n, url: i } = e, a = m(n, "service-desc", l.openapi);
  if (a == null) return G().warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: o, customParameters: d, signal: g } = t, p = q(a.href, i), { data: u } = await x(p, { signal: g, headers: { accept: l.openapi }, query: { ...d, token: o } });
  return u;
}
function Oe(e) {
  const t = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e), n = t?.groups;
  if (!n) return null;
  const { authority: i, code: a } = n;
  switch (i.toLowerCase()) {
    case "ogc":
      switch (a.toLowerCase()) {
        case "crs27":
          return k.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return k.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const o = Number.parseInt(a, 10);
      return Number.isNaN(o) ? null : o;
    }
    default:
      return null;
  }
}
async function qe(e, t, n) {
  const i = await ge(e, t, n);
  return te(i);
}
async function ge(e, t, n) {
  const { collection: { links: i, landingPage: { url: a } }, layerDefinition: o, maxRecordCount: d, queryParameters: { apiKey: g, customParameters: p }, spatialReference: u, supportedCrs: I } = e, $ = m(i, "items", l.geojson) || m(i, "http://www.opengis.net/def/rel/ogc/1.0/items", l.geojson);
  if ($ == null) throw new j("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: R, num: S, start: N, timeExtent: f, where: h } = t;
  if (t.objectIds) throw new j("ogc-feature-layer:query-by-objectids-not-supported", "Queries with object ids are not supported");
  const W = k.fromJSON(u), y = t.outSpatialReference ?? W, w = y.isWGS84 ? null : z(y, I), r = be(R, I), v = ye(f), s = we(h), c = S ?? (N == null ? d : 10), U = N === 0 ? void 0 : N, { fields: M, geometryType: C, hasZ: D, objectIdField: P, paginationParameter: V } = o, B = q($.href, a), { data: K } = await x(B, { ...n, query: { ...p, ...r, crs: w, datetime: v, query: s, limit: c, [V]: U, token: g }, headers: { accept: l.geojson } }), O = ue(K, { geometryType: C, hasZ: D, objectIdField: P }), Q = O.length === c && !!m(K.links ?? [], "next", l.geojson), X = new L(M);
  for (const b of O) {
    const T = {};
    fe(X, T, b.attributes), T[P] = b.attributes[P], b.attributes = T;
  }
  if (!w && y.isWebMercator) {
    for (const b of O) if (b.geometry != null && C != null) {
      const T = ie(b.geometry, C, D, !1);
      T.spatialReference = k.WGS84, b.geometry = ae(E(T, y));
    }
  }
  for (const b of O) b.objectId = b.attributes[P];
  const H = w || !w && y.isWebMercator ? y.toJSON() : se, F = new oe();
  return F.exceededTransferLimit = Q, F.features = O, F.fields = M, F.geometryType = C, F.hasZ = D, F.objectIdFieldName = P, F.spatialReference = H, F;
}
function pe(e) {
  return e != null && e.type === "extent";
}
function z(e, t) {
  const { isWebMercator: n, wkid: i } = e;
  if (!i) return null;
  const a = n ? t[3857] ?? t[102100] ?? t[102113] ?? t[900913] : t[e.wkid];
  return a ? `${_}${a}` : null;
}
function Z(e) {
  if (e == null) return "";
  const { xmin: t, ymin: n, xmax: i, ymax: a } = e;
  return `${t},${n},${i},${a}`;
}
function ye(e) {
  if (e == null) return null;
  const { start: t, end: n } = e;
  return `${t != null ? t.toISOString() : ".."}/${n != null ? n.toISOString() : ".."}`;
}
function we(e) {
  return e != null && e && e !== "1=1" ? e : null;
}
function be(e, t) {
  if (!pe(e)) return null;
  const { spatialReference: n } = e;
  if (!n || n.isWGS84) return { bbox: Z(e) };
  const i = z(n, t);
  return i != null ? { bbox: Z(e), "bbox-crs": i } : n.isWebMercator ? { bbox: Z(E(e, k.WGS84)) } : null;
}
function he(e) {
  const t = e.extent?.spatial;
  if (!t) return null;
  const n = t.bbox[0], i = n.length === 4, [a, o] = n, d = i ? void 0 : n[2];
  return { xmin: a, ymin: o, xmax: i ? n[2] : n[3], ymax: i ? n[3] : n[4], zmin: d, zmax: i ? void 0 : n[5], spatialReference: k.WGS84.toJSON() };
}
function m(e, t, n) {
  return e.find(({ rel: i, type: a }) => i === t && a === n) ?? e.find(({ rel: i, type: a }) => i === t && !a);
}
function Ie(e, t, n) {
  if (!n) return;
  const i = m(n, "next", l.geojson), a = A(i?.href)?.query;
  if (!a) return;
  const o = A(e).query, d = Object.keys(o ?? {});
  return Object.entries(a).filter(([u]) => !d.includes(u)).find(([u, I]) => me.has(u.toLowerCase()) && Number.parseInt(I, 10) === t)?.[0];
}
(function(e) {
  e.json = "application/json", e.geojson = "application/geo+json", e.openapi = "application/vnd.oai.openapi+json;version=3.0";
})(l || (l = {}));
export {
  ge as $,
  Oe as C,
  Se as N,
  Ne as O,
  ve as P,
  qe as R,
  _ as k,
  Pe as q,
  $e as v,
  xe as x
};
//# sourceMappingURL=ogcFeatureUtils-CPD6BeRz.js.map
