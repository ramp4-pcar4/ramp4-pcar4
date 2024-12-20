import { $ as l } from "./main-C4pF0E7B.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-DvcmUap5.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-DOGsTZSX.js")).default, CSVLayer: async () => (await import("./CSVLayer-BAiBhsQh.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-CTu8fHCy.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-3pJ9ho5M.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-l6dDbjgi.js")).default, FeatureLayer: async () => (await import("./main-C4pF0E7B.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-D8ABjpP7.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-DJ7u7PDD.js")).default, GroupLayer: async () => (await import("./GroupLayer-D92Bn1MU.js")).default, ImageryLayer: async () => (await import("./main-C4pF0E7B.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-DbQHR53T.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-Dhm9HcWy.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-Dw2cIric.js")).default, KMLLayer: async () => (await import("./KMLLayer-BJrPYZ5h.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-Dntg5ajX.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-caRZhEYl.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-z_edr5vk.js")).default, MapImageLayer: async () => (await import("./main-C4pF0E7B.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-BJlMOqXm.js")).default, MediaLayer: async () => (await import("./MediaLayer-xXGTER_R.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-Bjz1hf4y.js")).default, OpenStreetMapLayer: async () => (await import("./main-C4pF0E7B.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-CjVbY5f5.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-Dvyk6YT5.js")).default, RouteLayer: async () => (await import("./RouteLayer-D9UXUVUY.js")).default, SceneLayer: async () => (await import("./SceneLayer-CxVOdSRp.js")).default, StreamLayer: async () => (await import("./StreamLayer-BWu6vDpT.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-Ci90Csz4.js")).default, TileLayer: async () => (await import("./main-C4pF0E7B.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-DUI-7pHk.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-BG5B7h0c.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-BRtRpudq.js")).default, VideoLayer: async () => (await import("./VideoLayer-DejlGHGi.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-BEITHu8g.js")).default, WFSLayer: async () => (await import("./WFSLayer-HyCPIUaA.js")).default, WMSLayer: async () => (await import("./main-C4pF0E7B.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-Cm-YgYaz.js")).default, WebTileLayer: async () => (await import("./main-C4pF0E7B.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function g(a, t) {
  const { loadContext: e, ...r } = t || {}, i = e ? await e.fetchServiceMetadata(a, r) : await s(a, r);
  u(i), c(i);
  const y = { serviceJSON: i };
  if ((i.currentVersion ?? 0) < 10.5) return y;
  const o = `${a}/layers`, n = e ? await e.fetchServiceMetadata(o, r) : await s(o, r);
  return u(n), c(n), y.layersJSON = { layers: n.layers, tables: n.tables }, y;
}
function p(a) {
  const { type: t } = a;
  return !!t && f.has(t);
}
function d(a) {
  return a.type === "Table";
}
function c(a) {
  a.layers = a.layers?.filter(p), a.tables = a.tables?.filter(d);
}
function L(a) {
  a.type ||= "Feature Layer";
}
function m(a) {
  a.type ||= "Table";
}
function u(a) {
  a.layers?.forEach(L), a.tables?.forEach(m);
}
function S(a) {
  switch (a) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}
export {
  h as a,
  s as b,
  S as i,
  g as t
};
//# sourceMappingURL=fetchService-L5-lUxp_.js.map
