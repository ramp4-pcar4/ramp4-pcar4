import { cE as t } from "./main-DIdq27YS.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
const o = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
function c(e) {
  a.set(e, new Promise((n) => o.set(e, n)));
}
function i(e) {
  o.get(e)();
}
function s(e) {
  return a.get(e);
}
async function p(e) {
  return await s(e), t(e), new Promise((n) => requestAnimationFrame(() => n()));
}
export {
  i as a,
  p as c,
  c as s
};
//# sourceMappingURL=loadable-GQNtv4z3.js.map
