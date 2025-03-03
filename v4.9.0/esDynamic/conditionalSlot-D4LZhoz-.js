import { cE as c } from "./main-DIdq27YS.js";
import { c as i } from "./observers-B9f2uMW0.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
const n = /* @__PURE__ */ new Set();
let e;
const r = { childList: !0 };
function f(o) {
  e || (e = i("mutation", s)), e.observe(o.el, r);
}
function l(o) {
  n.delete(o.el), s(e.takeRecords()), e.disconnect();
  for (const [t] of n.entries())
    e.observe(t, r);
}
function s(o) {
  o.forEach(({ target: t }) => {
    c(t);
  });
}
export {
  f as c,
  l as d
};
//# sourceMappingURL=conditionalSlot-D4LZhoz-.js.map
