import { Y as y, bh as E, ap as S, aU as w, a6 as D, c0 as M, c1 as h, C as N } from "./main-DhLeoxL5.js";
import { $ as d } from "./Mesh-B0vxlJJo.js";
import { d as F } from "./georeference-DjDYpUrf.js";
import { o as T, i as I } from "./External-S_POREPS.js";
const p = () => N.getLogger("esri.rest.support.meshFeatureSet");
function Y(e, t, r) {
  const n = r.features;
  r.features = [], delete r.geometryType;
  const s = y.fromJSON(r);
  if (s.geometryType = "mesh", !r.assetMaps) return s;
  const a = b(t, r.assetMaps), u = e.sourceSpatialReference ?? E.WGS84, f = r.globalIdFieldName, { outFields: o } = e, l = o != null && o.length > 0 ? x(o.includes("*") ? null : new Set(o)) : () => ({});
  for (const c of n) {
    const i = L(c, f, u, t, a);
    i != null && s.features.push(new S({ geometry: i, attributes: l(c) }));
  }
  return s;
}
function x(e) {
  return ({ attributes: t }) => {
    if (!t) return {};
    if (!e) return t;
    for (const r in t) e.has(r) || delete t[r];
    return t;
  };
}
function L(e, t, r, n, s) {
  const a = e.attributes[t], u = s.get(a);
  if (u == null) return p().error("mesh-feature-set:asset-not-found", "Service returned a feature which was not found in the asset map", e), null;
  if (!e.geometry) return p().error("mesh-feature-set:no-geometry", "Service returned a feature without geometry", e), null;
  const f = O(e, r, n), o = w.fromJSON(e.geometry);
  o.spatialReference = r;
  const l = $(e.attributes, n), c = r.isGeographic ? "local" : "georeferenced", i = A(u);
  return i ? d.createWithExternalSource(f, i, { extent: o, transform: l, vertexSpace: c }) : d.createIncomplete(f, { extent: o, transform: l, vertexSpace: c });
}
function O({ attributes: e }, t, { transformFieldRoles: r }) {
  const n = e[r.originX], s = e[r.originY], a = e[r.originZ];
  return new D({ x: n, y: s, z: a, spatialReference: t });
}
function $(e, { transformFieldRoles: t }) {
  return new F({ translation: [e[t.translationX], -e[t.translationZ], e[t.translationY]], rotationAxis: [e[t.rotationX], -e[t.rotationZ], e[t.rotationY]], rotationAngle: e[t.rotationDeg], scale: [e[t.scaleX], e[t.scaleZ], e[t.scaleY]] });
}
var m;
function b(e, t) {
  const r = /* @__PURE__ */ new Map();
  for (const n of t) {
    const s = n.parentGlobalId;
    if (s == null) continue;
    const a = n.assetName, u = n.assetType, f = n.assetHash, o = n.assetURL, l = n.conversionStatus, c = n.seqNo, i = M(u, e.supportedFormats);
    if (!i) {
      p().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${u}, but it does not list it as a supported type`);
      continue;
    }
    const g = h(r, s, () => ({ files: /* @__PURE__ */ new Map() }));
    h(g.files, a, () => ({ name: a, type: u, mimeType: i, status: P(l), parts: [] })).parts[c] = { hash: f, url: o };
  }
  return r;
}
function A(e) {
  const t = Array.from(e.files.values()), r = new Array();
  for (const n of t) {
    if (n.status !== m.COMPLETED) return null;
    const s = new Array();
    for (const a of n.parts) {
      if (!a) return null;
      s.push(new T(a.url, a.hash));
    }
    r.push(new I(n.name, n.mimeType, s));
  }
  return r;
}
function P(e) {
  switch (e) {
    case "COMPLETED":
    case "SUBMITTED":
      return m.COMPLETED;
    case "INPROGRESS":
      return m.PENDING;
    default:
      return m.FAILED;
  }
}
(function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
})(m || (m = {}));
export {
  b as assetMapFromAssetMapsJSON,
  L as extractMesh,
  Y as meshFeatureSetFromJSON
};
//# sourceMappingURL=meshFeatureSet-9VYqemf7.js.map
