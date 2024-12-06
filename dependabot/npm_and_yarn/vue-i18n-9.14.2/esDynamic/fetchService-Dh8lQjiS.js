import { $ as l } from "./main-uCo5F72j.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-DosX7m1I.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-BC76-HOb.js")).default, CSVLayer: async () => (await import("./CSVLayer-CLCV1Cuq.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-Bj_0IHCR.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-DCtn4RWW.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-CgN8odsF.js")).default, FeatureLayer: async () => (await import("./main-uCo5F72j.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-a5m9L2fN.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-CNUVk68B.js")).default, GroupLayer: async () => (await import("./GroupLayer-MOqnsJzE.js")).default, ImageryLayer: async () => (await import("./main-uCo5F72j.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-Bg7Pe-ru.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-BJgpye1I.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-XwJyO2j1.js")).default, KMLLayer: async () => (await import("./KMLLayer-BMpN37aZ.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-DpPTyeXd.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-CMgRJN8M.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-YqzXjPFO.js")).default, MapImageLayer: async () => (await import("./main-uCo5F72j.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-Fwk1RkLt.js")).default, MediaLayer: async () => (await import("./MediaLayer-CNkyTbJK.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-DpoOsbRk.js")).default, OpenStreetMapLayer: async () => (await import("./main-uCo5F72j.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-DLsxLeC8.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-Cliwh3Co.js")).default, RouteLayer: async () => (await import("./RouteLayer-CoVjB3G6.js")).default, SceneLayer: async () => (await import("./SceneLayer-B7bFCH9U.js")).default, StreamLayer: async () => (await import("./StreamLayer-LtOXH3km.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-Ct-2SHWZ.js")).default, TileLayer: async () => (await import("./main-uCo5F72j.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-CSdhCwkB.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-B3TSl7tc.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-B2ZzulzP.js")).default, VideoLayer: async () => (await import("./VideoLayer-DsdJxHKi.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-HVKQeks0.js")).default, WFSLayer: async () => (await import("./WFSLayer-BgmVBia5.js")).default, WMSLayer: async () => (await import("./main-uCo5F72j.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-w-NWzkLX.js")).default, WebTileLayer: async () => (await import("./main-uCo5F72j.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-Dh8lQjiS.js.map
