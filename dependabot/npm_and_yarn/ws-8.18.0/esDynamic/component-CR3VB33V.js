/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
function o(n) {
  return n === "l" ? "m" : "s";
}
async function c(n) {
  await (t(n) ? n.componentOnReady() : new Promise((e) => requestAnimationFrame(() => e())));
}
function t(n) {
  return typeof n.componentOnReady == "function";
}
export {
  c,
  o as g
};
//# sourceMappingURL=component-CR3VB33V.js.map
