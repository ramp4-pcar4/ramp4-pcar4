import { d as I, s as m, n as g, o as L, I as P, q as v } from "./main-C4pF0E7B.js";
import { s as O } from "./associatedFeatureServiceUtils-DpcTY5Bd.js";
import { b as f, i as d, t as T, a as $ } from "./fetchService-L5-lUxp_.js";
const U = { FeatureLayer: !0, SceneLayer: !0 };
async function D(a) {
  const { properties: t, url: e } = a, s = { ...t, url: e }, l = await F(e, t?.customParameters), { Constructor: r, layerId: o, sourceJSON: c, parsedUrl: u, layers: i, tables: n } = l;
  if (i.length + n.length === 0) return o != null && (s.layerId = o), c != null && (s.sourceJSON = c), new r(s);
  const y = new (await import("./GroupLayer-D92Bn1MU.js")).default({ title: u.title });
  return await C(y, l, s), y;
}
function S(a, t) {
  return a ? a.find(({ id: e }) => e === t) : null;
}
function b(a, t, e, s, l) {
  const r = { ...l, layerId: t };
  return a != null && (r.url = a), e != null && (r.sourceJSON = e), "sublayerTitleMode" in s.prototype && (r.sublayerTitleMode = "service-name"), new s(r);
}
async function C(a, t, e) {
  const s = t.sublayerConstructorProvider;
  for (const { id: l, serverUrl: r } of t.layers) {
    const o = S(t.sublayerInfos, l), c = b(r, l, o, (o && s?.(o)) ?? t.Constructor, e);
    a.add(c);
  }
  if (t.tables.length) {
    const l = await w("FeatureLayer");
    t.tables.forEach(({ id: r, serverUrl: o }) => {
      const c = b(o, r, S(t.tableInfos, r), l, e);
      a.tables.add(c);
    });
  }
}
async function F(a, t) {
  let e = I(a);
  if (e == null && (e = await N(a, t)), e == null) throw new m("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: a });
  const { serverType: s, sublayer: l } = e;
  let r;
  const o = { FeatureServer: "FeatureLayer", KnowledgeGraphServer: "KnowledgeGraphLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer", VideoServer: "VideoLayer" }, c = s === "FeatureServer", u = s === "SceneServer", i = { parsedUrl: e, Constructor: null, layerId: c || u ? l ?? void 0 : void 0, layers: [], tables: [] };
  switch (s) {
    case "MapServer":
      if (l != null) {
        const { type: n } = await f(a, { customParameters: t });
        switch (r = "FeatureLayer", n) {
          case "Catalog Layer":
            r = "CatalogLayer";
            break;
          case "Catalog Dynamic Group Layer":
            throw new m("arcgis-layers:unsupported", `fromUrl() not supported for "${n}" layers`);
        }
      } else
        r = await k(a, t) ? "TileLayer" : "MapImageLayer";
      break;
    case "ImageServer": {
      const n = await f(a, { customParameters: t }), { tileInfo: y, cacheType: p } = n;
      r = y ? y?.format?.toUpperCase() !== "LERC" || p && p.toLowerCase() !== "elevation" ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const n = await f(e.url.path, { customParameters: t });
      if (r = "SceneLayer", n) {
        const y = n?.layers;
        if (n?.layerType === "Voxel") r = "VoxelLayer";
        else if (y?.length) {
          const p = y[0]?.layerType;
          p != null && v[p] != null && (r = v[p]);
        }
      }
      break;
    }
    case "3DTilesServer":
      throw new m("arcgis-layers:unsupported", "fromUrl() not supported for 3DTiles layers");
    case "FeatureServer":
      if (r = "FeatureLayer", l != null) {
        const n = await f(a, { customParameters: t });
        i.sourceJSON = n, r = d(n.type);
      }
      break;
    default:
      r = o[s];
  }
  if (U[r] && l == null) {
    const n = await J(a, s, t);
    if (c && (i.sublayerInfos = n.layerInfos, i.tableInfos = n.tableInfos), n.layers.length + n.tables.length !== 1) i.layers = n.layers, i.tables = n.tables, c && n.layerInfos?.length && (i.sublayerConstructorProvider = await x(n.layerInfos));
    else if (c || u) {
      const y = n.layerInfos?.[0] ?? n.tableInfos?.[0];
      if (i.layerId = n.layers[0]?.id ?? n.tables[0]?.id, i.sourceJSON = y, c) {
        const p = y?.type;
        r = d(p);
      }
    }
  }
  return i.Constructor = await w(r), i;
}
async function N(a, t) {
  const e = await f(a, { customParameters: t });
  let s = null, l = null;
  const r = e.type;
  if (r === "Feature Layer" || r === "Table" ? (s = "FeatureServer", l = e.id ?? null) : r === "indexedVector" ? s = "VectorTileServer" : e.hasOwnProperty("mapName") ? s = "MapServer" : e.hasOwnProperty("bandCount") && e.hasOwnProperty("pixelSizeX") ? s = "ImageServer" : e.hasOwnProperty("maxRecordCount") && e.hasOwnProperty("allowGeometryUpdates") ? s = "FeatureServer" : e.hasOwnProperty("streamUrls") ? s = "StreamServer" : h(e) ? (s = "SceneServer", l = e.id) : e.hasOwnProperty("layers") && h(e.layers?.[0]) && (s = "SceneServer"), !s) return null;
  const o = l != null ? g(a) : null;
  return { title: o != null && e.name || L(a), serverType: s, sublayer: l, url: { path: o != null ? o.serviceUrl : P(a).path } };
}
function h(a) {
  return a != null && a.hasOwnProperty("store") && a.hasOwnProperty("id") && typeof a.id == "number";
}
async function J(a, t, e) {
  let s, l, r = !1;
  switch (t) {
    case "FeatureServer": {
      const u = await T(a, { customParameters: e });
      r = !!u.layersJSON, s = u.layersJSON || u.serviceJSON;
      break;
    }
    case "SceneServer": {
      const u = await V(a, e);
      s = u.serviceInfo, l = u.tableServerUrl;
      break;
    }
    default:
      s = await f(a, { customParameters: e });
  }
  const o = s?.layers, c = s?.tables;
  return { layers: o?.map((u) => ({ id: u.id })).reverse() || [], tables: c?.map((u) => ({ serverUrl: l, id: u.id })).reverse() || [], layerInfos: r ? o : [], tableInfos: r ? c : [] };
}
async function V(a, t) {
  const e = await f(a, { customParameters: t });
  if (!e.layers?.[0]) return { serviceInfo: e };
  try {
    const { serverUrl: l } = await O(a), r = await f(l, { customParameters: t }).catch(() => null);
    return r && (e.tables = r.tables), { serviceInfo: e, tableServerUrl: l };
  } catch {
    return { serviceInfo: e };
  }
}
async function w(a) {
  return (0, $[a])();
}
async function k(a, t) {
  return (await f(a, { customParameters: t })).tileInfo;
}
async function x(a) {
  if (!a.length) return;
  const t = /* @__PURE__ */ new Set(), e = [];
  for (const { type: r } of a) t.has(r) || (t.add(r), e.push(w(d(r))));
  const s = await Promise.all(e), l = /* @__PURE__ */ new Map();
  return Array.from(t).forEach((r, o) => {
    l.set(r, s[o]);
  }), (r) => l.get(r.type);
}
export {
  D as fromUrl
};
//# sourceMappingURL=arcgisLayers-R91XKyYV.js.map
