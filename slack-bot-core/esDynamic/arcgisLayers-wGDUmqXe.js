import { p as b, s as d, n as I, o as h, I as L, q as v } from "./main-CmejC-so.js";
import { s as g } from "./associatedFeatureServiceUtils-4GtrzKFp.js";
import { t as O } from "./fetchService-BFbPA2mq.js";
import { t as f, a as P } from "./lazyLayerLoader-DuJKvRwp.js";
const T = { FeatureLayer: !0, SceneLayer: !0 };
async function D(r) {
  const s = r.properties?.customParameters, e = await F(r.url, s), t = { ...r.properties, url: r.url };
  if (e.layers.length + e.tables.length === 0) return e.layerId != null && (t.layerId = e.layerId), e.sourceJSON != null && (t.sourceJSON = e.sourceJSON), new e.Constructor(t);
  const n = new (await import("./GroupLayer-DN-c-dVm.js")).default({ title: e.parsedUrl.title });
  return await U(n, e, t), n;
}
function w(r, s) {
  return r ? r.find((e) => e.id === s) : null;
}
async function U(r, s, e) {
  function t(a, o, i, u) {
    const c = { ...e, layerId: o, sublayerTitleMode: "service-name" };
    return a != null && (c.url = a), i != null && (c.sourceJSON = i), u(c);
  }
  const n = s.sublayerConstructorProvider;
  for (const { id: a, serverUrl: o } of s.layers) {
    const i = w(s.sublayerInfos, a), u = (i && n?.(i)) ?? s.Constructor, c = t(o, a, i, (l) => new u(l));
    r.add(c);
  }
  if (s.tables.length) {
    const a = await p("FeatureLayer");
    s.tables.forEach(({ id: o, serverUrl: i }) => {
      const u = t(i, o, w(s.tableInfos, o), (c) => new a(c));
      r.tables.add(u);
    });
  }
}
async function F(r, s) {
  let e = b(r);
  if (e == null && (e = await $(r, s)), e == null) throw new d("arcgis-layers:url-mismatch", "The url '${url}' is not a valid arcgis resource", { url: r });
  const { serverType: t, sublayer: n } = e;
  let a;
  const o = { FeatureServer: "FeatureLayer", StreamServer: "StreamLayer", VectorTileServer: "VectorTileLayer" }, i = t === "FeatureServer", u = t === "SceneServer", c = { parsedUrl: e, Constructor: null, layerId: i || u ? n ?? void 0 : void 0, layers: [], tables: [] };
  switch (t) {
    case "MapServer":
      n != null ? a = "FeatureLayer" : a = await J(r, s) ? "TileLayer" : "MapImageLayer";
      break;
    case "ImageServer": {
      const l = await f(r, { customParameters: s }), { tileInfo: y, cacheType: m } = l;
      a = y ? y?.format?.toUpperCase() !== "LERC" || m && m.toLowerCase() !== "elevation" ? "ImageryTileLayer" : "ElevationLayer" : "ImageryLayer";
      break;
    }
    case "SceneServer": {
      const l = await f(e.url.path, { customParameters: s });
      if (a = "SceneLayer", l) {
        const y = l?.layers;
        if (l?.layerType === "Voxel") a = "VoxelLayer";
        else if (y?.length) {
          const m = y[0]?.layerType;
          m != null && v[m] != null && (a = v[m]);
        }
      }
      break;
    }
    case "3DTilesServer":
      throw new d("arcgis-layers:unsupported", "fromUrl() not supported for 3DTiles layers");
    case "FeatureServer":
      if (a = "FeatureLayer", n != null) {
        const l = await f(r, { customParameters: s });
        c.sourceJSON = l, l.type === "Oriented Imagery Layer" && (a = "OrientedImageryLayer");
      }
      break;
    default:
      a = o[t];
  }
  if (T[a] && n == null) {
    const l = await C(r, t, s);
    if (i && (c.sublayerInfos = l.layerInfos, c.tableInfos = l.tableInfos), l.layers.length + l.tables.length !== 1) c.layers = l.layers, c.tables = l.tables, i && l.layerInfos?.length && (c.sublayerConstructorProvider = await k(l.layerInfos));
    else if (i || u) {
      const y = l.layerInfos?.[0] ?? l.tableInfos?.[0];
      c.layerId = l.layers[0]?.id ?? l.tables[0]?.id, c.sourceJSON = y, i && y?.type === "Oriented Imagery Layer" && (a = "OrientedImageryLayer");
    }
  }
  return c.Constructor = await p(a), c;
}
async function $(r, s) {
  const e = await f(r, { customParameters: s });
  let t = null, n = null;
  const a = e.type;
  if (a === "Feature Layer" || a === "Table" ? (t = "FeatureServer", n = e.id ?? null) : a === "indexedVector" ? t = "VectorTileServer" : e.hasOwnProperty("mapName") ? t = "MapServer" : e.hasOwnProperty("bandCount") && e.hasOwnProperty("pixelSizeX") ? t = "ImageServer" : e.hasOwnProperty("maxRecordCount") && e.hasOwnProperty("allowGeometryUpdates") ? t = "FeatureServer" : e.hasOwnProperty("streamUrls") ? t = "StreamServer" : S(e) ? (t = "SceneServer", n = e.id) : e.hasOwnProperty("layers") && S(e.layers?.[0]) && (t = "SceneServer"), !t) return null;
  const o = n != null ? I(r) : null;
  return { title: o != null && e.name || h(r), serverType: t, sublayer: n, url: { path: o != null ? o.serviceUrl : L(r).path } };
}
function S(r) {
  return r != null && r.hasOwnProperty("store") && r.hasOwnProperty("id") && typeof r.id == "number";
}
async function C(r, s, e) {
  let t, n, a = !1;
  switch (s) {
    case "FeatureServer": {
      const u = await O(r, { customParameters: e });
      a = !!u.layersJSON, t = u.layersJSON || u.serviceJSON;
      break;
    }
    case "SceneServer": {
      const u = await N(r, e);
      t = u.serviceInfo, n = u.tableServerUrl;
      break;
    }
    default:
      t = await f(r, { customParameters: e });
  }
  const o = t?.layers, i = t?.tables;
  return { layers: o?.map((u) => ({ id: u.id })).reverse() || [], tables: i?.map((u) => ({ serverUrl: n, id: u.id })).reverse() || [], layerInfos: a ? o : [], tableInfos: a ? i : [] };
}
async function N(r, s) {
  const e = await f(r, { customParameters: s });
  if (!e.layers?.[0]) return { serviceInfo: e };
  try {
    const { serverUrl: n } = await g(r), a = await f(n, { customParameters: s }).catch(() => null);
    return a && (e.tables = a.tables), { serviceInfo: e, tableServerUrl: n };
  } catch {
    return { serviceInfo: e };
  }
}
async function p(r) {
  return (0, P[r])();
}
async function J(r, s) {
  return (await f(r, { customParameters: s })).tileInfo;
}
async function k(r) {
  const s = [], e = [];
  if (r.forEach((a) => {
    const { type: o } = a;
    o === "Oriented Imagery Layer" ? (s.push(o), e.push(p("OrientedImageryLayer"))) : (s.push(o), e.push(p("FeatureLayer")));
  }), !e.length) return;
  const t = await Promise.all(e), n = /* @__PURE__ */ new Map();
  return s.forEach((a, o) => {
    n.set(a, t[o]);
  }), (a) => n.get(a.type);
}
export {
  D as fromUrl
};
//# sourceMappingURL=arcgisLayers-wGDUmqXe.js.map
