import { a2 as b, dB as U, s as c, dC as M, dD as C, dE as E, dF as h, bh as x, aU as D, J as V, dG as j, b9 as L, dH as y, dI as O, dJ as W, cV as Y, cZ as T } from "./main-CmejC-so.js";
import { u as X } from "./geojson-Cdd5VaKo.js";
import { o as F, n as g } from "./xmlUtils-TLuV3CJ7.js";
const S = "xlink:href", m = "2.0.0", R = "__esri_wfs_id__", q = "wfs-layer:getWFSLayerTypeInfo-error", z = "wfs-layer:empty-service", $ = "wfs-layer:feature-type-not-found", _ = "wfs-layer:geojson-not-supported", J = "wfs-layer:kvp-encoding-not-supported", H = "wfs-layer:malformed-json", A = "wfs-layer:unknown-geometry-type", Q = "wfs-layer:unknown-field-type", B = "wfs-layer:unsupported-spatial-reference", K = "wfs-layer:unsupported-wfs-version";
async function he(a, t) {
  const e = Z((await b(a, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "GetCapabilities", VERSION: m, ...t?.customParameters }, signal: t?.signal })).data);
  return ae(a, e), e;
}
function Z(a) {
  const t = N(a);
  fe(t), v(t);
  const e = t.firstElementChild, n = U(ne(e));
  return { operations: te(e), get featureTypes() {
    return Array.from(n());
  }, readFeatureTypes: n };
}
const ee = ["json", "application/json", "geojson", "application/json; subtype=geojson", "application/geo+json"];
function k(a) {
  for (const t of ee) {
    const e = a.findIndex((n) => n.toLowerCase() === t);
    if (e >= 0) return a[e];
  }
  return null;
}
function te(a) {
  let t = !1;
  const e = { GetCapabilities: { url: "" }, DescribeFeatureType: { url: "" }, GetFeature: { url: "", outputFormat: null, supportsPagination: !1 } }, n = [], o = [];
  if (F(a, { OperationsMetadata: { Parameter: (r) => {
    if (r.getAttribute("name") === "outputFormat") return { AllowedValues: { Value: ({ textContent: s }) => {
      s && n.push(s);
    } } };
  }, Operation: (r) => {
    switch (r.getAttribute("name")) {
      case "GetCapabilities":
        return { DCP: { HTTP: { Get: (s) => {
          e.GetCapabilities.url = s.getAttribute(S);
        } } } };
      case "DescribeFeatureType":
        return { DCP: { HTTP: { Get: (s) => {
          e.DescribeFeatureType.url = s.getAttribute(S);
        } } } };
      case "GetFeature":
        return { DCP: { HTTP: { Get: (s) => {
          e.GetFeature.url = s.getAttribute(S);
        } } }, Parameter: (s) => {
          if (s.getAttribute("name") === "outputFormat") return { AllowedValues: { Value: ({ textContent: i }) => {
            i && o.push(i);
          } } };
        } };
    }
  }, Constraint: (r) => {
    switch (r.getAttribute("name")) {
      case "KVPEncoding":
        return { DefaultValue: (s) => {
          t = s.textContent.toLowerCase() === "true";
        } };
      case "ImplementsResultPaging":
        return { DefaultValue: (s) => {
          e.GetFeature.supportsPagination = s.textContent.toLowerCase() === "true";
        } };
    }
  } } }), e.GetFeature.outputFormat = k(o) ?? k(n), !t) throw new c(J, "WFS service doesn't support key/value pair (KVP) encoding");
  if (e.GetFeature.outputFormat == null) throw new c(_, "WFS service doesn't support GeoJSON output format");
  return e;
}
function ae(a, t) {
  M(a) && (C(a, t.operations.DescribeFeatureType.url, !0) && (t.operations.DescribeFeatureType.url = E(t.operations.DescribeFeatureType.url)), C(a, t.operations.GetFeature.url, !0) && (t.operations.GetFeature.url = E(t.operations.GetFeature.url)));
}
function P(a) {
  const t = parseInt(a.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid ?? "", 10);
  if (!Number.isNaN(t)) return t;
}
function ne(a) {
  return g(a, { FeatureTypeList: { FeatureType: (t) => {
    const e = { typeName: "undefined:undefined", name: "", title: "", description: "", extent: null, namespacePrefix: "", namespaceUri: "", defaultSpatialReference: 4326, supportedSpatialReferences: [] }, n = /* @__PURE__ */ new Set();
    return F(t, { Name: (o) => {
      const { name: r, prefix: s } = w(o.textContent);
      e.typeName = `${s}:${r}`, e.name = r, e.namespacePrefix = s, e.namespaceUri = o.lookupNamespaceURI(s);
    }, Abstract: (o) => {
      e.description = o.textContent;
    }, Title: (o) => {
      e.title = o.textContent;
    }, WGS84BoundingBox: (o) => {
      e.extent = re(o);
    }, DefaultCRS: (o) => {
      const r = P(o);
      r && (e.defaultSpatialReference = r, n.add(r));
    }, OtherCRS: (o) => {
      const r = P(o);
      r && n.add(r);
    } }), e.title || (e.title = e.name), n.add(4326), e.supportedSpatialReferences.push(...n), e;
  } } });
}
function re(a) {
  let t, e, n, o;
  for (const r of a.children) switch (r.localName) {
    case "LowerCorner":
      [t, e] = r.textContent.split(" ").map((s) => Number.parseFloat(s));
      break;
    case "UpperCorner":
      [n, o] = r.textContent.split(" ").map((s) => Number.parseFloat(s));
  }
  return { xmin: t, ymin: e, xmax: n, ymax: o, spatialReference: Y };
}
function oe(a, t, e) {
  return h(a, (n) => e ? n.name === t && n.namespaceUri === e : n.typeName === t || n.name === t);
}
async function Fe(a, t, e, n = {}) {
  const { featureType: o, extent: r } = await se(a, t, e, n), { spatialReference: s } = ge(a.operations.GetFeature.url, o, n.spatialReference), { fields: i, geometryType: u, swapXY: p, objectIdField: l, geometryField: d } = await ie(a, o, s, n);
  return { url: a.operations.GetCapabilities.url, name: o.name, namespaceUri: o.namespaceUri, fields: i, geometryField: d, geometryType: u, objectIdField: l, spatialReference: n.spatialReference ?? new x({ wkid: o.defaultSpatialReference }), extent: r, swapXY: p, wfsCapabilities: a, customParameters: n.customParameters };
}
async function se(a, t, e, n = {}) {
  const o = a.readFeatureTypes(), r = t ? oe(o, t, e) : o.next().value, { spatialReference: s = new x({ wkid: r?.defaultSpatialReference }) } = n;
  if (r == null) throw t ? new c($, `The type '${t}' could not be found in the service`) : new c(z, "The service is empty");
  let i = new D({ ...r.extent, spatialReference: x.WGS84 });
  if (!V(i.spatialReference, s)) try {
    await j(i.spatialReference, s, void 0, n), i = L(i, s);
  } catch {
    throw new c(B, "Projection not supported");
  }
  return { extent: i, spatialReference: s, featureType: r };
}
async function ie(a, t, e, n = {}) {
  const { typeName: o } = t, [r, s] = await Promise.allSettled([le(a.operations.DescribeFeatureType.url, o, n), pe(a, o, e, n)]), i = (f) => new c(q, `An error occurred while getting info about the feature type '${o}'`, { error: f });
  if (r.status === "rejected") throw i(r.reason);
  if (s.status === "rejected") throw i(s.reason);
  const { fields: u, errors: p } = r.value ?? {}, l = r.value?.geometryType || s.value?.geometryType, d = s.value?.swapXY ?? !1;
  if (l == null) throw new c(A, `The geometry type could not be determined for type '${o}`, { typeName: o, geometryType: l, fields: u, errors: p });
  return { ...ue(u ?? []), geometryType: l, swapXY: d };
}
function ue(a) {
  const t = a.find((n) => n.type === "geometry");
  let e = a.find((n) => n.type === "oid");
  return a = a.filter((n) => n.type !== "geometry"), e || (e = new y({ name: R, type: "oid", alias: R }), a.unshift(e)), { geometryField: t?.name ?? null, objectIdField: e.name, fields: a };
}
async function pe(a, t, e, n = {}) {
  let o, r = !1;
  const [s, i] = await Promise.all([me(a.operations.GetFeature.url, t, e, a.operations.GetFeature.outputFormat, { ...n, count: 1 }), b(a.operations.GetFeature.url, { responseType: "text", query: G(t, e, void 0, { ...n, count: 1 }), signal: n?.signal })]), u = s.type === "FeatureCollection" && s.features[0]?.geometry;
  if (u) {
    let p;
    switch (o = O.fromJSON(X(u.type)), u.type) {
      case "Point":
        p = u.coordinates;
        break;
      case "LineString":
      case "MultiPoint":
        p = u.coordinates[0];
        break;
      case "MultiLineString":
      case "Polygon":
        p = u.coordinates[0][0];
        break;
      case "MultiPolygon":
        p = u.coordinates[0][0][0];
    }
    const l = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);
    if (l) {
      const d = p[0].toFixed(3), f = p[1].toFixed(3), I = parseFloat(l[1]).toFixed(3);
      d === parseFloat(l[2]).toFixed(3) && f === I && (r = !0);
    }
  }
  return { geometryType: o, swapXY: r };
}
async function le(a, t, e) {
  return ce(t, (await b(a, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "DescribeFeatureType", VERSION: m, TYPENAME: t, TYPENAMES: t, ...e?.customParameters }, signal: e?.signal })).data);
}
function ce(a, t) {
  const { name: e } = w(a), n = N(t);
  v(n);
  const o = h(g(n.firstElementChild, { element: (r) => r }), (r) => r.getAttribute("name") === e);
  if (o != null) {
    const r = o.getAttribute("type"), s = r ? h(g(n.firstElementChild, { complexType: (i) => i }), (i) => i.getAttribute("name") === w(r).name) : h(g(o, { complexType: (i) => i }), () => !0);
    if (s) return ye(s);
  }
  throw new c($, `Type '${a}' not found in document`, { document: new XMLSerializer().serializeToString(n) });
}
const de = /* @__PURE__ */ new Set(["objectid", "fid"]);
function ye(a) {
  const t = [], e = [];
  let n;
  const o = g(a, { complexContent: { extension: { sequence: { element: (r) => r } } } });
  for (const r of o) {
    const s = r.getAttribute("name");
    if (!s) continue;
    let i, u;
    if (r.hasAttribute("type") ? i = w(r.getAttribute("type")).name : F(r, { simpleType: { restriction: (d) => (i = w(d.getAttribute("base")).name, { maxLength: (f) => {
      u = +f.getAttribute("value");
    } }) } }), !i) continue;
    const p = r.getAttribute("nillable") === "true";
    let l = !1;
    switch (i.toLowerCase()) {
      case "integer":
      case "nonpositiveinteger":
      case "negativeinteger":
      case "long":
      case "int":
      case "short":
      case "byte":
      case "nonnegativeinteger":
      case "unsignedlong":
      case "unsignedint":
      case "unsignedshort":
      case "unsignedbyte":
      case "positiveinteger":
        e.push(new y({ name: s, alias: s, type: "integer", nullable: p, length: T("integer") }));
        break;
      case "float":
      case "double":
      case "decimal":
        e.push(new y({ name: s, alias: s, type: "double", nullable: p, length: T("double") }));
        break;
      case "boolean":
      case "string":
      case "gyearmonth":
      case "gyear":
      case "gmonthday":
      case "gday":
      case "gmonth":
      case "anyuri":
      case "qname":
      case "notation":
      case "normalizedstring":
      case "token":
      case "language":
      case "idrefs":
      case "entities":
      case "nmtoken":
      case "nmtokens":
      case "name":
      case "ncname":
      case "id":
      case "idref":
      case "entity":
      case "duration":
      case "time":
        e.push(new y({ name: s, alias: s, type: "string", nullable: p, length: u ?? T("string") }));
        break;
      case "datetime":
      case "date":
        e.push(new y({ name: s, alias: s, type: "date", nullable: p, length: u ?? T("date") }));
        break;
      case "pointpropertytype":
        n = "point", l = !0;
        break;
      case "multipointpropertytype":
        n = "multipoint", l = !0;
        break;
      case "curvepropertytype":
      case "multicurvepropertytype":
      case "multilinestringpropertytype":
        n = "polyline", l = !0;
        break;
      case "surfacepropertytype":
      case "multisurfacepropertytype":
      case "multipolygonpropertytype":
        n = "polygon", l = !0;
        break;
      case "geometrypropertytype":
      case "multigeometrypropertytype":
        l = !0, t.push(new c(A, `geometry type '${i}' is not supported`, { type: new XMLSerializer().serializeToString(a) }));
        break;
      default:
        t.push(new c(Q, `Unknown field type '${i}'`, { type: new XMLSerializer().serializeToString(a) }));
    }
    l && e.push(new y({ name: s, alias: s, type: "geometry", nullable: p }));
  }
  for (const r of e) if (r.type === "integer" && !r.nullable && de.has(r.name.toLowerCase())) {
    r.type = "oid";
    break;
  }
  return { geometryType: n, fields: e, errors: t };
}
async function me(a, t, e, n, o) {
  let { data: r } = await b(a, { responseType: "text", query: G(t, e, n, o), signal: o?.signal });
  r = r.replaceAll(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
  try {
    return JSON.parse(r);
  } catch (s) {
    throw new c(H, "Error while parsing the response", { response: r, error: s });
  }
}
function G(a, t, e, n) {
  const o = typeof t == "number" ? t : t.wkid;
  return { SERVICE: "WFS", REQUEST: "GetFeature", VERSION: m, TYPENAMES: a, OUTPUTFORMAT: e, SRSNAME: "EPSG:" + o, STARTINDEX: n?.startIndex, COUNT: n?.count, ...n?.customParameters };
}
async function Se(a, t, e) {
  const n = await b(a, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "GetFeature", VERSION: m, TYPENAMES: t, RESULTTYPE: "hits", ...e?.customParameters }, signal: e?.signal }), o = /numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(n.data);
  if (o?.groups) return +o.groups.numberMatched;
}
function N(a) {
  return new DOMParser().parseFromString(a.trim(), "text/xml");
}
function w(a) {
  const [t, e] = a.split(":");
  return { prefix: e ? t : "", name: e ?? t };
}
function fe(a) {
  const t = a.firstElementChild?.getAttribute("version");
  if (t && t !== m) throw new c(K, `Unsupported WFS version ${t}. Supported version: ${m}`);
}
function v(a) {
  let t = "", e = "";
  if (F(a.firstElementChild, { Exception: (n) => (t = n.getAttribute("exceptionCode"), { ExceptionText: (o) => {
    e = o.textContent;
  } }) }), t) throw new c(`wfs-layer:${t}`, e);
}
function ge(a, t, e) {
  const n = { wkid: t.defaultSpatialReference }, o = e?.wkid != null ? { wkid: e.wkid } : n;
  return { spatialReference: o, getFeatureSpatialReference: W(a) || o.wkid && t.supportedSpatialReferences.includes(o.wkid) ? { wkid: o.wkid } : { wkid: t.defaultSpatialReference } };
}
export {
  me as K,
  R as S,
  oe as W,
  Fe as Y,
  Se as e,
  ge as o,
  he as v,
  ue as z
};
//# sourceMappingURL=wfsUtils-CYYAJWhn.js.map
