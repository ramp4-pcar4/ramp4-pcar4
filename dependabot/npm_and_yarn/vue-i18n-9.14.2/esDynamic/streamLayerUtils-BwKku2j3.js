import { $ as m, j as c } from "./utils-avbuDtYt.js";
import { l as u, a as y, i as f, f as n } from "./main-uCo5F72j.js";
const s = "Stream Service", p = "Feed", d = "stream-layer-save", v = "stream-layer-save-as";
function i(r) {
  return { isValid: r.type === "stream" && !!r.url && !r.webSocketUrl, errorMessage: "Stream layer should be created using a url to a stream service" };
}
function l(r) {
  const e = r.layerJSON;
  return Promise.resolve(e && Object.keys(e).length ? e : null);
}
async function x(r, e) {
  const { parsedUrl: t, title: o, fullExtent: a } = r;
  e.url = t.path, e.title ||= o, e.extent = null, a != null && (e.extent = await u(a)), y(e, n.METADATA), f(e, n.SINGLE_LAYER);
}
async function A(r, e) {
  return m({ layer: r, itemType: s, additionalItemType: p, validateLayer: i, createItemData: l, errorNamePrefix: d }, e);
}
async function T(r, e, t) {
  return c({ layer: r, itemType: s, validateLayer: i, createItemData: l, errorNamePrefix: v, newItem: e, setItemProperties: x }, t);
}
export {
  A as save,
  T as saveAs
};
//# sourceMappingURL=streamLayerUtils-BwKku2j3.js.map
