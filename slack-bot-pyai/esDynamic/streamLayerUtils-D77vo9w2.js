import { $ as m, j as c } from "./utils-Dq4cDmJE.js";
import { l as u, b as y, i as f, f as s } from "./main-DhLeoxL5.js";
const n = "Stream Service", p = "Feed", d = "stream-layer-save", v = "stream-layer-save-as";
function i(r) {
  return { isValid: r.type === "stream" && !!r.url && !r.webSocketUrl, errorMessage: "Stream layer should be created using a url to a stream service" };
}
function l(r) {
  const e = r.layerJSON;
  return Promise.resolve(e && Object.keys(e).length ? e : null);
}
async function x(r, e) {
  const { parsedUrl: a, title: o, fullExtent: t } = r;
  e.url = a.path, e.title ||= o, e.extent = null, t != null && (e.extent = await u(t)), y(e, s.METADATA), f(e, s.SINGLE_LAYER);
}
async function A(r, e) {
  return m({ layer: r, itemType: n, additionalItemType: p, validateLayer: i, createItemData: l, errorNamePrefix: d }, e);
}
async function T(r, e, a) {
  return c({ layer: r, itemType: n, validateLayer: i, createItemData: l, errorNamePrefix: v, newItem: e, setItemProperties: x }, a);
}
export {
  A as save,
  T as saveAs
};
//# sourceMappingURL=streamLayerUtils-D77vo9w2.js.map
