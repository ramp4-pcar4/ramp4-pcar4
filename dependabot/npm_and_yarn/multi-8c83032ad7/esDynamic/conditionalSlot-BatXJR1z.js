import { cZ as n } from "./main-C4pF0E7B.js";
import { c as r } from "./observers-QnsYqBkn.js";
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
//# sourceMappingURL=conditionalSlot-BatXJR1z.js.map
