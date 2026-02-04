import { $ as p, j as c } from "./utils-DEFuc7ID.js";
import { o as f } from "./jsonContext-P9k3yvuA.js";
import { l as y, b as d, f as v } from "./main-DIdq27YS.js";
import { p as s } from "./resourceUtils-CAtPOkE8.js";
const n = "Media Layer", x = "media-layer-save", N = "media-layer-save-as", o = ["media-layer:unsupported-source"];
function i(e) {
  return { isValid: e.type === "media", errorMessage: "Layer.type should be 'media'" };
}
function u(e) {
  return f(e, "portal-item", !0);
}
function m(e) {
  return e.layerJSON;
}
async function A(e, r) {
  const { title: a, fullExtent: t } = e;
  r.title ||= a, r.extent = t ? await y(t) : null, d(r, v.METADATA);
}
async function T(e, r) {
  return p({ layer: e, itemType: n, validateLayer: i, createJSONContext: (a) => u(a), createItemData: m, errorNamePrefix: x, supplementalUnsupportedErrors: o, saveResources: (a, t) => s(e.resourceReferences, t) }, r);
}
async function $(e, r, a) {
  return c({ layer: e, itemType: n, validateLayer: i, createJSONContext: (t) => u(t), createItemData: m, errorNamePrefix: N, supplementalUnsupportedErrors: o, newItem: r, setItemProperties: A, saveResources: (t, l) => s(e.resourceReferences, l) }, a);
}
export {
  T as save,
  $ as saveAs
};
//# sourceMappingURL=mediaLayerUtils-CkfU1O9k.js.map
