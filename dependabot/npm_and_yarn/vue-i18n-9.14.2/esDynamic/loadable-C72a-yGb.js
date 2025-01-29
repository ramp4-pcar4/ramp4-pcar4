import { cY as t, cZ as s } from "./main-uCo5F72j.js";
const o = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
function c(e) {
  a.set(e, new Promise((n) => o.set(e, n)));
}
function p(e) {
  o.get(e)();
}
function r(e) {
  return a.get(e);
}
async function m(e) {
  if (await r(e), !!t())
    return s(e), new Promise((n) => requestAnimationFrame(() => n()));
}
export {
  p as a,
  m as c,
  c as s
};
//# sourceMappingURL=loadable-C72a-yGb.js.map
