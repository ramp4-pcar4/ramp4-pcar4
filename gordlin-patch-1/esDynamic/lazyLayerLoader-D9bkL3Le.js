import { a2 as r } from "./main-BEi6lHs4.js";
async function y(a, t) {
  const { data: e } = await r(a, { responseType: "json", query: { f: "json", ...t?.customParameters, token: t?.apiKey } });
  return e;
}
const n = { BingMapsLayer: async () => (await import("./BingMapsLayer-MQQX-fnC.js")).default, BuildingSceneLayer: async () => (await import("./BuildingSceneLayer-gB_fJciE.js")).default, CatalogLayer: async () => (await import("./CatalogLayer-DNEnSw3I.js")).default, CSVLayer: async () => (await import("./CSVLayer-_IHo3KKe.js")).default, DimensionLayer: async () => (await import("./DimensionLayer-FbvbU47T.js")).default, ElevationLayer: async () => (await import("./ElevationLayer-BHMtL3oE.js")).default, FeatureLayer: async () => (await import("./main-BEi6lHs4.js").then((a) => a.qM)).default, GeoJSONLayer: async () => (await import("./GeoJSONLayer-CD1BXMee.js")).default, GeoRSSLayer: async () => (await import("./GeoRSSLayer-7lhpOSWt.js")).default, GroupLayer: async () => (await import("./GroupLayer-HNTKsq8w.js")).default, ImageryLayer: async () => (await import("./main-BEi6lHs4.js").then((a) => a.qN)).default, ImageryTileLayer: async () => (await import("./ImageryTileLayer-BG7NErP9.js")).default, IntegratedMeshLayer: async () => (await import("./IntegratedMeshLayer-CcPg2IGU.js")).default, KMLLayer: async () => (await import("./KMLLayer-BcFFSkUM.js")).default, LineOfSightLayer: async () => (await import("./LineOfSightLayer-BXpH2y0Y.js")).default, LinkChartLayer: async () => (await import("./LinkChartLayer-Dolnygpv.js")).default, MapImageLayer: async () => (await import("./main-BEi6lHs4.js").then((a) => a.qO)).default, MapNotesLayer: async () => (await import("./MapNotesLayer-C_Spl9Ax.js")).default, MediaLayer: async () => (await import("./MediaLayer-BxcqSRmc.js")).default, OGCFeatureLayer: async () => (await import("./OGCFeatureLayer-CpPeKY8O.js")).default, OpenStreetMapLayer: async () => (await import("./main-BEi6lHs4.js").then((a) => a.qQ)).default, OrientedImageryLayer: async () => (await import("./OrientedImageryLayer-_XjUBjYX.js")).default, PointCloudLayer: async () => (await import("./PointCloudLayer-crGGLyeL.js")).default, RouteLayer: async () => (await import("./RouteLayer-Bl3HlP9m.js")).default, SceneLayer: async () => (await import("./SceneLayer-BTUleXRC.js")).default, StreamLayer: async () => (await import("./StreamLayer-Bs-x3MLA.js")).default, SubtypeGroupLayer: async () => (await import("./SubtypeGroupLayer-NUqP5TRC.js")).default, TileLayer: async () => (await import("./main-BEi6lHs4.js").then((a) => a.qR)).default, IntegratedMesh3DTilesLayer: async () => (await import("./IntegratedMesh3DTilesLayer-BXWKrB-G.js")).default, UnknownLayer: async () => (await import("./UnknownLayer-D_xE-dGa.js")).default, UnsupportedLayer: async () => (await import("./UnsupportedLayer-0BHyUFpB.js")).default, VectorTileLayer: async () => (await import("./VectorTileLayer-BWc-8MZj.js")).default, VoxelLayer: async () => (await import("./VoxelLayer-DmyF1zGW.js")).default, WFSLayer: async () => (await import("./WFSLayer-BLJeZMB7.js")).default, WMSLayer: async () => (await import("./main-BEi6lHs4.js").then((a) => a.qS)).default, WMTSLayer: async () => (await import("./WMTSLayer-AQwiGJAi.js")).default, WebTileLayer: async () => (await import("./main-BEi6lHs4.js").then((a) => a.qP)).default };
export {
  n as a,
  y as t
};
//# sourceMappingURL=lazyLayerLoader-D9bkL3Le.js.map
