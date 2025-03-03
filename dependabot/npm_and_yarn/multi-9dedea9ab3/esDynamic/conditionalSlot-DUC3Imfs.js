import { cZ as n } from "./main-DMoCLB29.js";
import { c as r } from "./observers-Dk-NQcVU.js";
let t;
const i = { childList: !0 };
function f(o) {
  t || (t = r("mutation", c)), t.observe(o.el, i);
}
function l(o) {
  t.unobserve(o.el);
}
function c(o) {
  o.forEach(({ target: e }) => {
    n(e);
  });
}
export {
  f as c,
  l as d
};
//# sourceMappingURL=conditionalSlot-DUC3Imfs.js.map
