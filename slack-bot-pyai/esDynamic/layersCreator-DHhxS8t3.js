import { t as m, a0 as d, V as M } from "./main-DhLeoxL5.js";
import { w as A, e as b } from "./portalLayers-DHPHrVA-.js";
import { a as L } from "./lazyLayerLoader-jq69lRSA.js";
function v(e) {
  return p(e, "notes");
}
function w(e) {
  return p(e, "markup");
}
function h(e) {
  return p(e, "route");
}
function p(e, a) {
  return !(!e.layerType || e.layerType !== "ArcGISFeatureLayer") && e.featureCollectionType === a;
}
async function C(e, a, y) {
  if (!a) return;
  const r = a.map((t) => U(t, y)), i = await Promise.allSettled(r);
  for (const t of i) t.status === "rejected" || t.value && e.add(t.value);
}
const F = { ArcGISDimensionLayer: "DimensionLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", PointCloudLayer: "PointCloudLayer", ArcGISSceneServiceLayer: "SceneLayer", IntegratedMeshLayer: "IntegratedMeshLayer", OGCFeatureLayer: "OGCFeatureLayer", BuildingSceneLayer: "BuildingSceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", GroupLayer: "GroupLayer", GeoJSON: "GeoJSONLayer", WebTiledLayer: "WebTileLayer", CSV: "CSVLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer", IntegratedMesh3DTilesLayer: "IntegratedMesh3DTilesLayer", KML: "KMLLayer", RasterDataLayer: "UnsupportedLayer", Voxel: "VoxelLayer", LineOfSightLayer: "LineOfSightLayer" }, W = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" }, O = { ArcGISFeatureLayer: "FeatureLayer" }, V = { ArcGISTiledMapServiceLayer: "TileLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", OpenStreetMap: "OpenStreetMapLayer", WebTiledLayer: "WebTileLayer", VectorTileLayer: "VectorTileLayer", ArcGISImageServiceLayer: "UnsupportedLayer", WMS: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", ArcGISSceneServiceLayer: "SceneLayer", DefaultTileLayer: "TileLayer" }, I = { ArcGISAnnotationLayer: "UnsupportedLayer", ArcGISDimensionLayer: "UnsupportedLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", CatalogLayer: "CatalogLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoRSS: "GeoRSSLayer", GeoJSON: "GeoJSONLayer", GroupLayer: "GroupLayer", KML: "KMLLayer", KnowledgeGraphLayer: "UnsupportedLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", SubtypeGroupLayer: "SubtypeGroupLayer", VectorTileLayer: "VectorTileLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" }, T = { ArcGISFeatureLayer: "FeatureLayer", SubtypeGroupTable: "UnsupportedLayer" }, g = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WebTiledLayer: "WebTileLayer", BingMapsAerial: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", WMS: "WMSLayer", DefaultTileLayer: "TileLayer" }, k = { ...I, LinkChartLayer: "LinkChartLayer" }, B = { ...T }, D = { ...g };
async function U(e, a) {
  return x(await E(e, a), e, a);
}
async function x(e, a, y) {
  const r = new e();
  return r.read(a, y.context), r.type === "group" && (a.layerType === "GroupLayer" ? await N(r, a, y) : u(a) ? K(r, a, y.context) : G(a) && await J(r, a, y.context)), await m(r, y.context), r;
}
async function E(e, a) {
  const y = a.context, r = R(y);
  let i = e.layerType || e.type;
  !i && a?.defaultLayerType && (i = a.defaultLayerType);
  const t = r[i];
  let n = t ? L[t] : L.UnknownLayer;
  if (u(e)) {
    const l = y?.portal;
    if (e.itemId) {
      const o = new d({ id: e.itemId, portal: l });
      await o.load();
      const s = (await A(o, new b())).className || "UnknownLayer";
      n = L[s];
    }
  } else i === "ArcGISFeatureLayer" ? v(e) || w(e) ? n = L.MapNotesLayer : h(e) ? n = L.RouteLayer : G(e) && (n = L.GroupLayer) : e.wmtsInfo?.url && e.wmtsInfo.layerIdentifier ? n = L.WMTSLayer : i === "WFS" && e.wfsInfo?.version !== "2.0.0" && (n = L.UnsupportedLayer);
  return n();
}
function G(e) {
  return e.layerType !== "ArcGISFeatureLayer" || u(e) ? !1 : (e.featureCollection?.layers?.length ?? 0) > 1;
}
function u(e) {
  return e.type === "Feature Collection";
}
function R(e) {
  let a;
  switch (e.origin) {
    case "web-scene":
      switch (e.layerContainerType) {
        case "basemap":
          a = V;
          break;
        case "ground":
          a = W;
          break;
        case "tables":
          a = O;
          break;
        default:
          a = F;
      }
      break;
    case "link-chart":
      switch (e.layerContainerType) {
        case "basemap":
          a = D;
          break;
        case "tables":
          a = B;
          break;
        default:
          a = k;
      }
      break;
    default:
      switch (e.layerContainerType) {
        case "basemap":
          a = g;
          break;
        case "tables":
          a = T;
          break;
        default:
          a = I;
      }
  }
  return a;
}
async function N(e, a, y) {
  const r = new M(), i = C(r, Array.isArray(a.layers) ? a.layers : [], y);
  try {
    try {
      if (await i, e.type === "group") return e.layers.addMany(r), e;
    } catch (t) {
      e.destroy();
      for (const n of r) n.destroy();
      throw t;
    }
  } catch (t) {
    throw t;
  }
}
function K(e, a, y) {
  a.itemId && (e.portalItem = new d({ id: a.itemId, portal: y?.portal }), e.when(() => {
    const r = (i) => {
      const t = i.layerId;
      f(i, e, a, t, y);
      const n = a.featureCollection?.layers?.[t];
      n && i.read(n, y);
    };
    e.layers?.forEach(r), e.tables?.forEach(r);
  }));
}
async function J(e, a, y) {
  const r = L.FeatureLayer, i = await r(), t = a.featureCollection, n = t?.showLegend, l = t?.layers?.map((o, s) => {
    const c = new i();
    c.read(o, y);
    const S = { ...y, ignoreDefaults: !0 };
    return f(c, e, a, s, S), n != null && c.read({ showLegend: n }, S), c;
  });
  e.layers.addMany(l ?? []);
}
function f(e, a, y, r, i) {
  e.read({ id: `${a.id}-sublayer-${r}`, visibility: y.visibleLayers?.includes(r) ?? !0 }, i);
}
export {
  N as populateGroupLayer,
  C as populateOperationalLayers
};
//# sourceMappingURL=layersCreator-DHhxS8t3.js.map
