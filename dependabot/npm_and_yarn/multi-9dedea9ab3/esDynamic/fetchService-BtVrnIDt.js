import { $ as l } from "./main-DMoCLB29.js";
async function s(a, t) {
  const { data: e } = await l(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const h = { BingMapsLayer: async () => (await import("./BingMapsLayer-wnukx2HQ.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-C8tCak_k.js")).default, CSVLayer: async () => (await import("./CSVLayer-Bse1KuOf.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-r94OpVaf.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-CIyYUxVv.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-S35wOYm5.js")).default, FeatureLayer: async () => (await import("./main-DMoCLB29.js").then((a) => a.rb)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-D9GNOCNa.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-BwxqVkCV.js")).default, GroupLayer: async () => (await import("./GroupLayer-r0iliK_9.js")).default, ImageryLayer: async () => (await import("./main-DMoCLB29.js").then((a) => a.rc)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-Bze9e1xb.js")).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-CYYM3P2h.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-CAzJbZK4.js")).default, KMLLayer: async () => (await import("./KMLLayer-BdQoB-WW.js")).default, KnowledgeGraphLayer: async () => (await import("./KnowledgeGraphLayer-BUzySA-C.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-HXaLoq5T.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-_qnteL1Z.js")).default, MapImageLayer: async () => (await import("./main-DMoCLB29.js").then((a) => a.rd)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-4CKeChHz.js")).default, MediaLayer: async () => (await import("./MediaLayer-BebGrKk5.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-CCW2VQwf.js")).default, OpenStreetMapLayer: async () => (await import("./main-DMoCLB29.js").then((a) => a.rf)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-D5SyT7Ho.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-DepSs9I0.js")).default, RouteLayer: async () => (await import("./RouteLayer-w_vnC2cb.js")).default, SceneLayer: async () => (await import("./SceneLayer-Z9glnPzV.js")).default, StreamLayer: async () => (await import("./StreamLayer-ZcIcK2vb.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-BjK9HvwM.js")).default, TileLayer: async () => (await import("./main-DMoCLB29.js").then((a) => a.rg)).default, UnknownLayer: async () => (await import("./UnknownLayer-DFfg0E5Q.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-BKc8nzX8.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer--K1zruIC.js")).default, VideoLayer: async () => (await import("./VideoLayer-BbOpO-GP.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-Cve6r_Cy.js")).default, WFSLayer: async () => (await import("./WFSLayer-9tuEqxdB.js")).default, WMSLayer: async () => (await import("./main-DMoCLB29.js").then((a) => a.rh)).default, WMTSLayer: async () => (await import("./WMTSLayer-DG0xHUiC.js")).default, WebTileLayer: async () => (await import("./main-DMoCLB29.js").then((a) => a.re)).default }, f = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
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
//# sourceMappingURL=fetchService-BtVrnIDt.js.map
