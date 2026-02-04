import { cE as t } from "./main-BEi6lHs4.js";
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
//# sourceMappingURL=loadable-CqJNPoYp.js.map
