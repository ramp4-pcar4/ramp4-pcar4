import { U as h, bx as d, aj as y, b8 as S, a3 as D, cq as N, cr as m, D as M } from "./main-C4pF0E7B.js";
import { $ as g } from "./Mesh-CVBizaf7.js";
import { N as w, o as F, i as T } from "./MeshTransform-blS2Ryai.js";
const I = () => M.getLogger("esri.rest.support.meshFeatureSet");
function C(t, e, r) {
  const n = r.features;
  r.features = [], delete r.geometryType;
  const s = h.fromJSON(r);
  if (s.geometryType = "mesh", !r.assetMaps) return s;
  const a = $(e, r.assetMaps), i = t.sourceSpatialReference ?? d.WGS84, f = r.globalIdFieldName, { outFields: o } = t, l = o != null && o.length > 0 ? b(o.includes("*") ? null : new Set(o)) : () => ({});
  for (const u of n) {
    const c = x(u, f, i, e, a);
    s.features.push(new y({ geometry: c, attributes: l(u) }));
  }
  return s;
}
function b(t) {
  return ({ attributes: e }) => {
    if (!e) return {};
    if (!t) return e;
    for (const r in e) t.has(r) || delete e[r];
    return e;
  };
}
function x(t, e, r, n, s) {
  const a = t.attributes[e], i = s.get(a);
  if (i == null || !t.geometry) return null;
  const f = L(t, r, n), o = S.fromJSON(t.geometry);
  o.spatialReference = r;
  const l = O(t.attributes, n), u = r.isGeographic ? "local" : "georeferenced", c = A(i);
  return c ? g.createWithExternalSource(f, c, { extent: o, transform: l, vertexSpace: u }) : g.createIncomplete(f, { extent: o, transform: l, vertexSpace: u });
}
function L({ attributes: t }, e, { transformFieldRoles: r }) {
  const n = t[r.originX], s = t[r.originY], a = t[r.originZ];
  return new D({ x: n, y: s, z: a, spatialReference: e });
}
function O(t, { transformFieldRoles: e }) {
  return new w({ translation: [t[e.translationX], -t[e.translationZ], t[e.translationY]], rotationAxis: [t[e.rotationX], -t[e.rotationZ], t[e.rotationY]], rotationAngle: t[e.rotationDeg], scale: [t[e.scaleX], t[e.scaleZ], t[e.scaleY]] });
}
var p;
function $(t, e) {
  const r = /* @__PURE__ */ new Map();
  for (const n of e) {
    const s = n.parentGlobalId;
    if (s == null) continue;
    const a = n.assetName, i = n.assetType, f = n.assetHash, o = n.assetURL, l = n.conversionStatus, u = n.seqNo, c = N(i, t.supportedFormats);
    if (!c) {
      I().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${i}, but it does not list it as a supported type`);
      continue;
    }
    const E = m(r, s, () => ({ files: /* @__PURE__ */ new Map() }));
    m(E.files, a, () => ({ name: a, type: i, mimeType: c, status: P(l), parts: [] })).parts[u] = { hash: f, url: o };
  }
  return r;
}
function A(t) {
  const e = Array.from(t.files.values()), r = new Array();
  for (const n of e) {
    if (n.status !== p.COMPLETED) return null;
    const s = new Array();
    for (const a of n.parts) {
      if (!a) return null;
      s.push(new F(a.url, a.hash));
    }
    r.push(new T(n.name, n.mimeType, s));
  }
  return r;
}
function P(t) {
  switch (t) {
    case "COMPLETED":
    case "SUBMITTED":
      return p.COMPLETED;
    case "INPROGRESS":
      return p.PENDING;
    default:
      return p.FAILED;
  }
}
(function(t) {
  t[t.FAILED = 0] = "FAILED", t[t.PENDING = 1] = "PENDING", t[t.COMPLETED = 2] = "COMPLETED";
})(p || (p = {}));
export {
  $ as assetMapFromAssetMapsJSON,
  x as extractMesh,
  C as meshFeatureSetFromJSON
};
//# sourceMappingURL=meshFeatureSet-D7zKMI6_.js.map
