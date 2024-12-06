import { eT as r } from "./main-C4pF0E7B.js";
import { w as s } from "./dom-BHTTQ4_z.js";
const n = r;
function i(e) {
  return "opened" in e ? e.opened : e.open;
}
function f(e) {
  n(() => {
    e.transitionEl && s(e.transitionEl, e.openTransitionProp, () => {
      i(e) ? e.onBeforeOpen() : e.onBeforeClose();
    }, () => {
      i(e) ? e.onOpen() : e.onClose();
    });
  });
}
export {
  f as o
};
//# sourceMappingURL=openCloseComponent-B5psHKea.js.map
