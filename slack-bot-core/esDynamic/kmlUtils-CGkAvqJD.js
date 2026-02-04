import { ag as p, a3 as P, bk as I, a4 as w, a2 as k, bl as h, bm as S, bn as m, bo as d, bp as x, bh as E, Y as v, _ as $, Z as O } from "./main-CmejC-so.js";
const F = { esriGeometryPoint: "points", esriGeometryPolyline: "polylines", esriGeometryPolygon: "polygons" };
function J(s) {
  const r = s.folders || [], t = r.slice(), e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), l = { esriGeometryPoint: n, esriGeometryPolyline: i, esriGeometryPolygon: f };
  (s.featureCollection?.layers || []).forEach((o) => {
    const y = p(o);
    y.featureSet.features = [];
    const a = o.featureSet.geometryType;
    e.set(a, y);
    const g = o.layerDefinition.objectIdField;
    a === "esriGeometryPoint" ? b(n, g, o.featureSet.features) : a === "esriGeometryPolyline" ? b(i, g, o.featureSet.features) : a === "esriGeometryPolygon" && b(f, g, o.featureSet.features);
  }), s.groundOverlays && s.groundOverlays.forEach((o) => {
    c.set(o.id, o);
  }), r.forEach((o) => {
    o.networkLinkIds.forEach((y) => {
      const a = j(y, o.id, s.networkLinks);
      a && t.push(a);
    });
  }), t.forEach((o) => {
    if (o.featureInfos) {
      o.points = p(e.get("esriGeometryPoint")), o.polylines = p(e.get("esriGeometryPolyline")), o.polygons = p(e.get("esriGeometryPolygon")), o.mapImages = [];
      for (const y of o.featureInfos) switch (y.type) {
        case "esriGeometryPoint":
        case "esriGeometryPolyline":
        case "esriGeometryPolygon": {
          const a = l[y.type].get(y.id);
          a && o[F[y.type]]?.featureSet.features.push(a);
          break;
        }
        case "GroundOverlay": {
          const a = c.get(y.id);
          a && o.mapImages.push(a);
          break;
        }
      }
      o.fullExtent = G([o]);
    }
  });
  const u = G(t);
  return { folders: r, sublayers: t, extent: u };
}
function L(s, r, t, e) {
  const n = P?.findCredential(s);
  s = I(s, { token: n?.token });
  const i = w.kmlServiceUrl;
  return k(i, { query: { url: s, model: "simple", folders: "", refresh: t !== 0 || void 0, outSR: JSON.stringify(r) }, responseType: "json", signal: e });
}
function N(s, r, t = null, e = []) {
  const n = [], i = {}, f = r.sublayers, c = new Set(r.folders.map((l) => l.id));
  return f.forEach((l) => {
    const u = new s();
    if (t ? u.read(l, t) : u.read(l), e.length && c.has(u.id) && (u.visible = e.includes(u.id)), i[l.id] = u, l.parentFolderId != null && l.parentFolderId !== -1) {
      const o = i[l.parentFolderId];
      o.sublayers || (o.sublayers = []), o.sublayers?.unshift(u);
    } else n.unshift(u);
  }), n;
}
function b(s, r, t) {
  t.forEach((e) => {
    s.set(e.attributes[r], e);
  });
}
function M(s, r) {
  let t;
  return r.some((e) => e.id === s && (t = e, !0)), t;
}
function j(s, r, t) {
  const e = M(s, t);
  return e && (e.parentFolderId = r, e.networkLink = e), e;
}
async function T(s) {
  const r = v.fromJSON(s.featureSet).features, t = s.layerDefinition, e = $(t.drawingInfo.renderer), n = O.fromJSON(s.popupInfo), i = [];
  for (const f of r) {
    const c = await e.getSymbolAsync(f);
    f.symbol = c, f.popupTemplate = n, f.visible = !0, i.push(f);
  }
  return i;
}
function G(s) {
  const r = h(S), t = h(S);
  for (const e of s) {
    if (e.polygons?.featureSet?.features) for (const n of e.polygons.featureSet.features) m(r, n.geometry), d(t, r);
    if (e.polylines?.featureSet?.features) for (const n of e.polylines.featureSet.features) m(r, n.geometry), d(t, r);
    if (e.points?.featureSet?.features) for (const n of e.points.featureSet.features) m(r, n.geometry), d(t, r);
    if (e.mapImages) for (const n of e.mapImages) m(r, n.extent), d(t, r);
  }
  return x(t, S) ? void 0 : { xmin: t[0], ymin: t[1], zmin: t[2], xmax: t[3], ymax: t[4], zmax: t[5], spatialReference: E.WGS84 };
}
export {
  N as S,
  T as b,
  J as d,
  L as g,
  G as j
};
//# sourceMappingURL=kmlUtils-CGkAvqJD.js.map
