import { $ as m, j as o } from "./utils-D4a13Kk_.js";
import { l as c, b as p, i as u, f as i } from "./main-3gzXighg.js";
const s = "Image Service", g = "imagery-layer-save", v = "imagery-layer-save-as", f = "imagery-tile-layer-save", d = "imagery-tile-layer-save-as";
function l(a) {
  if (a.type === "imagery") return { isValid: !0 };
  const { raster: e } = a, r = e?.datasetFormat === "Function" ? e.primaryRasters?.rasters[0] : e;
  return { isValid: r?.datasetFormat === "RasterTileServer" && (r.tileType === "Raster" || r.tileType === "Map"), errorMessage: "imagery tile layer should be created from a tiled image service." };
}
function y(a) {
  const e = a.layerJSON;
  return Promise.resolve(e && Object.keys(e).length ? e : null);
}
async function T(a, e) {
  const { parsedUrl: r, title: t, fullExtent: n } = a;
  e.url = r.path, e.title ||= t;
  try {
    e.extent = await c(n);
  } catch {
    e.extent = void 0;
  }
  p(e, i.METADATA), a.type === "imagery-tile" && u(e, i.TILED_IMAGERY);
}
async function A(a, e) {
  const r = a.type === "imagery" ? g : f;
  return m({ layer: a, itemType: s, validateLayer: l, createItemData: y, errorNamePrefix: r }, e);
}
async function h(a, e, r) {
  const t = a.type === "imagery" ? v : d;
  return o({ layer: a, itemType: s, validateLayer: l, createItemData: y, errorNamePrefix: t, newItem: e, setItemProperties: T }, r);
}
export {
  A as save,
  h as saveAs
};
//# sourceMappingURL=imageryUtils-Cln6bQD2.js.map
