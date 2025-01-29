import { $ as m, j as o } from "./utils-hQ-2oo0_.js";
import { l as c, a as p, i as u, f as i } from "./main-DMoCLB29.js";
const s = "Image Service", g = "imagery-layer-save", v = "imagery-layer-save-as", f = "imagery-tile-layer-save", d = "imagery-tile-layer-save-as";
function l(r) {
  if (r.type === "imagery") return { isValid: !0 };
  const { raster: e } = r, a = e?.datasetFormat === "Function" ? e.primaryRasters?.rasters[0] : e;
  return { isValid: a?.datasetFormat === "RasterTileServer" && (a.tileType === "Raster" || a.tileType === "Map"), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function y(r) {
  const e = r.layerJSON;
  return Promise.resolve(e && Object.keys(e).length ? e : null);
}
async function T(r, e) {
  const { parsedUrl: a, title: t, fullExtent: n } = r;
  e.url = a.path, e.title ||= t;
  try {
    e.extent = await c(n);
  } catch {
    e.extent = void 0;
  }
  p(e, i.METADATA), r.type === "imagery-tile" && u(e, i.TILED_IMAGERY);
}
async function A(r, e) {
  const a = r.type === "imagery" ? g : f;
  return m({ layer: r, itemType: s, validateLayer: l, createItemData: y, errorNamePrefix: a }, e);
}
async function h(r, e, a) {
  const t = r.type === "imagery" ? v : d;
  return o({ layer: r, itemType: s, validateLayer: l, createItemData: y, errorNamePrefix: t, newItem: e, setItemProperties: T }, a);
}
export {
  A as save,
  h as saveAs
};
//# sourceMappingURL=imageryUtils-DaIoRNvA.js.map
