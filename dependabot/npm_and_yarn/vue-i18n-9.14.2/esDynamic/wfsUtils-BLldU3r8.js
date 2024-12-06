import { $ as b, dM as I, s as c, dN as M, dO as x, dP as C, dQ as h, bx as P, K as D, dR as O, bp as V, dS as y, dT as j, dU as L, b8 as Y, de as W, di as T } from "./main-uCo5F72j.js";
import { u as X } from "./geojson-Dn0D8VhC.js";
import { o as F, n as g } from "./xmlUtils-TLuV3CJ7.js";
const S = "xlink:href", m = "2.0.0", E = "__esri_wfs_id__", q = "wfs-layer:getWFSLayerTypeInfo-error", z = "wfs-layer:empty-service", $ = "wfs-layer:feature-type-not-found", _ = "wfs-layer:geojson-not-supported", K = "wfs-layer:kvp-encoding-not-supported", Q = "wfs-layer:malformed-json", A = "wfs-layer:unknown-geometry-type", J = "wfs-layer:unknown-field-type", H = "wfs-layer:unsupported-spatial-reference", B = "wfs-layer:unsupported-wfs-version";
async function he(n, t) {
  const e = Z((await b(n, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "GetCapabilities", VERSION: m, ...t?.customParameters }, signal: t?.signal })).data);
  return ne(n, e), e;
}
function Z(n) {
  const t = G(n);
  fe(t), v(t);
  const e = t.firstElementChild, a = I(ae(e));
  return { operations: te(e), get featureTypes() {
    return Array.from(a());
  }, readFeatureTypes: a };
}
const ee = ["json", "application/json", "geojson", "application/json; subtype=geojson", "application/geo+json"];
function R(n) {
  for (const t of ee) {
    const e = n.findIndex((a) => a.toLowerCase() === t);
    if (e >= 0) return n[e];
  }
  return null;
}
function te(n) {
  let t = !1;
  const e = { GetCapabilities: { url: "" }, DescribeFeatureType: { url: "" }, GetFeature: { url: "", outputFormat: null, supportsPagination: !1 } }, a = [], o = [];
  if (F(n, { OperationsMetadata: { Parameter: (r) => {
    if (r.getAttribute("name") === "outputFormat") return { AllowedValues: { Value: ({ textContent: s }) => {
      s && a.push(s);
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
  } } }), e.GetFeature.outputFormat = R(o) ?? R(a), !t) throw new c(K, "WFS service doesn't support key/value pair (KVP) encoding");
  if (e.GetFeature.outputFormat == null) throw new c(_, "WFS service doesn't support GeoJSON output format");
  return e;
}
function ne(n, t) {
  M(n) && (x(n, t.operations.DescribeFeatureType.url, !0) && (t.operations.DescribeFeatureType.url = C(t.operations.DescribeFeatureType.url)), x(n, t.operations.GetFeature.url, !0) && (t.operations.GetFeature.url = C(t.operations.GetFeature.url)));
}
function k(n) {
  const t = parseInt(n.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid ?? "", 10);
  if (!Number.isNaN(t)) return t;
}
function ae(n) {
  return g(n, { FeatureTypeList: { FeatureType: (t) => {
    const e = { typeName: "undefined:undefined", name: "", title: "", description: "", extent: null, namespacePrefix: "", namespaceUri: "", defaultSpatialReference: 4326, supportedSpatialReferences: [] }, a = /* @__PURE__ */ new Set();
    return F(t, { Name: (o) => {
      const { name: r, prefix: s } = w(o.textContent);
      e.typeName = `${s}:${r}`, e.name = r, e.namespacePrefix = s, e.namespaceUri = o.lookupNamespaceURI(s);
    }, Abstract: (o) => {
      e.description = o.textContent;
    }, Title: (o) => {
      e.title = o.textContent;
    }, WGS84BoundingBox: (o) => {
      e.extent = Y.fromJSON(re(o));
    }, DefaultCRS: (o) => {
      const r = k(o);
      r && (e.defaultSpatialReference = r, a.add(r));
    }, OtherCRS: (o) => {
      const r = k(o);
      r && a.add(r);
    } }), e.title || (e.title = e.name), a.add(4326), e.supportedSpatialReferences.push(...a), e;
  } } });
}
function re(n) {
  let t, e, a, o;
  for (const r of n.children) switch (r.localName) {
    case "LowerCorner":
      [t, e] = r.textContent.split(" ").map((s) => Number.parseFloat(s));
      break;
    case "UpperCorner":
      [a, o] = r.textContent.split(" ").map((s) => Number.parseFloat(s));
  }
  return { xmin: t, ymin: e, xmax: a, ymax: o, spatialReference: W };
}
function oe(n, t, e) {
  return h(n, (a) => e ? a.name === t && a.namespaceUri === e : a.typeName === t || a.name === t);
}
async function Fe(n, t, e, a = {}) {
  const { featureType: o, extent: r } = await se(n, t, e, a), { spatialReference: s } = ge(n.operations.GetFeature.url, o, a.spatialReference), { fields: i, geometryType: u, swapXY: p, objectIdField: l, geometryField: d } = await ie(n, o, s, a);
  return { url: n.operations.GetCapabilities.url, name: o.name, namespaceUri: o.namespaceUri, fields: i, geometryField: d, geometryType: u, objectIdField: l, spatialReference: a.spatialReference ?? new P({ wkid: o.defaultSpatialReference }), extent: r, swapXY: p, wfsCapabilities: n, customParameters: a.customParameters };
}
async function se(n, t, e, a = {}) {
  const o = n.readFeatureTypes(), r = t ? oe(o, t, e) : o.next().value, { spatialReference: s = new P({ wkid: r?.defaultSpatialReference }) } = a;
  if (r == null) throw t ? new c($, `The type '${t}' could not be found in the service`) : new c(z, "The service is empty");
  let i = r.extent;
  if (i && !D(i.spatialReference, s)) try {
    await O(i.spatialReference, s, void 0, a), i = V(i, s);
  } catch {
    throw new c(H, "Projection not supported");
  }
  return { extent: i, spatialReference: s, featureType: r };
}
async function ie(n, t, e, a = {}) {
  const { typeName: o } = t, [r, s] = await Promise.allSettled([le(n.operations.DescribeFeatureType.url, o, a), pe(n, o, e, a)]), i = (f) => new c(q, `An error occurred while getting info about the feature type '${o}'`, { error: f });
  if (r.status === "rejected") throw i(r.reason);
  if (s.status === "rejected") throw i(s.reason);
  const { fields: u, errors: p } = r.value ?? {}, l = r.value?.geometryType || s.value?.geometryType, d = s.value?.swapXY ?? !1;
  if (l == null) throw new c(A, `The geometry type could not be determined for type '${o}`, { typeName: o, geometryType: l, fields: u, errors: p });
  return { ...ue(u ?? []), geometryType: l, swapXY: d };
}
function ue(n) {
  const t = n.find((a) => a.type === "geometry");
  let e = n.find((a) => a.type === "oid");
  return n = n.filter((a) => a.type !== "geometry"), e || (e = new y({ name: E, type: "oid", alias: E }), n.unshift(e)), { geometryField: t?.name ?? null, objectIdField: e.name, fields: n };
}
async function pe(n, t, e, a = {}) {
  let o, r = !1;
  const [s, i] = await Promise.all([me(n.operations.GetFeature.url, t, e, n.operations.GetFeature.outputFormat, { ...a, count: 1 }), b(n.operations.GetFeature.url, { responseType: "text", query: N(t, e, void 0, { ...a, count: 1 }), signal: a?.signal })]), u = s.type === "FeatureCollection" && s.features[0]?.geometry;
  if (u) {
    let p;
    switch (o = j.fromJSON(X(u.type)), u.type) {
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
      const d = p[0].toFixed(3), f = p[1].toFixed(3), U = parseFloat(l[1]).toFixed(3);
      d === parseFloat(l[2]).toFixed(3) && f === U && (r = !0);
    }
  }
  return { geometryType: o, swapXY: r };
}
async function le(n, t, e) {
  return ce(t, (await b(n, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "DescribeFeatureType", VERSION: m, TYPENAME: t, TYPENAMES: t, ...e?.customParameters }, signal: e?.signal })).data);
}
function ce(n, t) {
  const { name: e } = w(n), a = G(t);
  v(a);
  const o = h(g(a.firstElementChild, { element: (r) => r }), (r) => r.getAttribute("name") === e);
  if (o != null) {
    const r = o.getAttribute("type"), s = r ? h(g(a.firstElementChild, { complexType: (i) => i }), (i) => i.getAttribute("name") === w(r).name) : h(g(o, { complexType: (i) => i }), () => !0);
    if (s) return ye(s);
  }
  throw new c($, `Type '${n}' not found in document`, { document: new XMLSerializer().serializeToString(a) });
}
const de = /* @__PURE__ */ new Set(["objectid", "fid"]);
function ye(n) {
  const t = [], e = [];
  let a;
  const o = g(n, { complexContent: { extension: { sequence: { element: (r) => r } } } });
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
        a = "point", l = !0;
        break;
      case "multipointpropertytype":
        a = "multipoint", l = !0;
        break;
      case "curvepropertytype":
      case "multicurvepropertytype":
      case "multilinestringpropertytype":
        a = "polyline", l = !0;
        break;
      case "surfacepropertytype":
      case "multisurfacepropertytype":
      case "multipolygonpropertytype":
        a = "polygon", l = !0;
        break;
      case "geometrypropertytype":
      case "multigeometrypropertytype":
        l = !0, t.push(new c(A, `geometry type '${i}' is not supported`, { type: new XMLSerializer().serializeToString(n) }));
        break;
      default:
        t.push(new c(J, `Unknown field type '${i}'`, { type: new XMLSerializer().serializeToString(n) }));
    }
    l && e.push(new y({ name: s, alias: s, type: "geometry", nullable: p }));
  }
  for (const r of e) if (r.type === "integer" && !r.nullable && de.has(r.name.toLowerCase())) {
    r.type = "oid";
    break;
  }
  return { geometryType: a, fields: e, errors: t };
}
async function me(n, t, e, a, o) {
  let { data: r } = await b(n, { responseType: "text", query: N(t, e, a, o), signal: o?.signal });
  r = r.replaceAll(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
  try {
    return JSON.parse(r);
  } catch (s) {
    throw new c(Q, "Error while parsing the response", { response: r, error: s });
  }
}
function N(n, t, e, a) {
  const o = typeof t == "number" ? t : t.wkid;
  return { SERVICE: "WFS", REQUEST: "GetFeature", VERSION: m, TYPENAMES: n, OUTPUTFORMAT: e, SRSNAME: "EPSG:" + o, STARTINDEX: a?.startIndex, COUNT: a?.count, ...a?.customParameters };
}
async function Se(n, t, e) {
  const a = await b(n, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "GetFeature", VERSION: m, TYPENAMES: t, RESULTTYPE: "hits", ...e?.customParameters }, signal: e?.signal }), o = /numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);
  if (o?.groups) return +o.groups.numberMatched;
}
function G(n) {
  return new DOMParser().parseFromString(n.trim(), "text/xml");
}
function w(n) {
  const [t, e] = n.split(":");
  return { prefix: e ? t : "", name: e ?? t };
}
function fe(n) {
  const t = n.firstElementChild?.getAttribute("version");
  if (t && t !== m) throw new c(B, `Unsupported WFS version ${t}. Supported version: ${m}`);
}
function v(n) {
  let t = "", e = "";
  if (F(n.firstElementChild, { Exception: (a) => (t = a.getAttribute("exceptionCode"), { ExceptionText: (o) => {
    e = o.textContent;
  } }) }), t) throw new c(`wfs-layer:${t}`, e);
}
function ge(n, t, e) {
  const a = { wkid: t.defaultSpatialReference }, o = e?.wkid != null ? { wkid: e.wkid } : a;
  return { spatialReference: o, getFeatureSpatialReference: L(n) || o.wkid && t.supportedSpatialReferences.includes(o.wkid) ? { wkid: o.wkid } : { wkid: t.defaultSpatialReference } };
}
export {
  me as K,
  E as S,
  Fe as W,
  oe as Y,
  Se as e,
  ge as o,
  he as v,
  ue as z
};
//# sourceMappingURL=wfsUtils-BLldU3r8.js.map
