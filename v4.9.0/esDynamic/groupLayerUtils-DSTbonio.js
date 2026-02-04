import { $ as y, j as p } from "./utils-DEFuc7ID.js";
import { o as f } from "./jsonContext-P9k3yvuA.js";
import { r as v, b as d, i as I, f as o } from "./main-DIdq27YS.js";
import { p as n } from "./resourceUtils-CAtPOkE8.js";
const i = "Group Layer", g = "group-layer-save", A = "group-layer-save-as", s = o.GROUP_LAYER_MAP;
function c(e) {
  return { isValid: e.type === "group", errorMessage: "Layer.type should be 'group'" };
}
function P(e) {
  return { isValid: v(e, s), errorMessage: `Layer.portalItem.typeKeywords should have '${s}'` };
}
function u(e, r) {
  return { ...f(e, "web-map", !0), initiator: r };
}
function l(e) {
  const r = e.layerJSON;
  return Promise.resolve(r && Object.keys(r).length ? r : null);
}
async function R(e, r) {
  r.title ||= e.title, d(r, o.METADATA), I(r, s);
}
async function O(e, r) {
  return y({ layer: e, itemType: i, validateLayer: c, validateItem: P, createJSONContext: (t) => u(t, e), createItemData: l, errorNamePrefix: g, saveResources: async (t, a) => (e.sourceIsPortalItem || await t.removeAllResources().catch(() => {
  }), n(e.resourceReferences, a)) }, r);
}
async function b(e, r, t) {
  return p({ layer: e, itemType: i, validateLayer: c, createJSONContext: (a) => u(a, e), createItemData: l, errorNamePrefix: A, newItem: r, setItemProperties: R, saveResources: (a, m) => n(e.resourceReferences, m) }, t);
}
export {
  O as save,
  b as saveAs
};
//# sourceMappingURL=groupLayerUtils-DSTbonio.js.map
