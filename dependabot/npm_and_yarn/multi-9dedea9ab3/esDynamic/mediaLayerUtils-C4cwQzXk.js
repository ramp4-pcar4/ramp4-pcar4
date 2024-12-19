import { $ as c, j as f } from "./utils-hQ-2oo0_.js";
import { o as y } from "./jsonContext-CWrCBaHN.js";
import { l as d, a as v, f as x } from "./main-DMoCLB29.js";
import { p as s } from "./resourceUtils-BuuBbzEm.js";
const n = "Media Layer", E = "media-layer-save", I = "media-layer-save-as", o = ["media-layer:unsupported-source"];
function i(e) {
  return { isValid: e.type === "media", errorMessage: "Layer.type should be 'media'" };
}
function u(e) {
  return y(e, "portal-item", !0);
}
function l(e) {
  return e.layerJSON;
}
async function m(e, r) {
  r.extent = e.fullExtent ? await d(e.fullExtent) : null;
}
async function N(e, r) {
  r.title ||= e.title, await m(e, r), v(r, x.METADATA);
}
async function T(e, r) {
  return c({ layer: e, itemType: n, validateLayer: i, createJSONContext: (t) => u(t), createItemData: l, errorNamePrefix: E, supplementalUnsupportedErrors: o, setItemProperties: m, saveResources: (t, a) => s(e.resourceReferences, a) }, r);
}
async function $(e, r, t) {
  return f({ layer: e, itemType: n, validateLayer: i, createJSONContext: (a) => u(a), createItemData: l, errorNamePrefix: I, supplementalUnsupportedErrors: o, newItem: r, setItemProperties: N, saveResources: (a, p) => s(e.resourceReferences, p) }, t);
}
export {
  T as save,
  $ as saveAs
};
//# sourceMappingURL=mediaLayerUtils-C4cwQzXk.js.map
