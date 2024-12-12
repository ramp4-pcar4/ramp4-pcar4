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
//# sourceMappingURL=component-CWGf1hug.js.map
