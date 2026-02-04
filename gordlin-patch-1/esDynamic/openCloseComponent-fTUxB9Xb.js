import { eI as v } from "./main-BEi6lHs4.js";
function s(i) {
  return "opened" in i ? i.opened : i.open;
}
function E(i, r = !1) {
  (r ? i[i.transitionProp] : s(i)) ? i.onBeforeOpen() : i.onBeforeClose(), (r ? i[i.transitionProp] : s(i)) ? i.onOpen() : i.onClose();
}
function L(i, r = !1) {
  v(() => {
    if (i.transitionEl) {
      let n = function(a) {
        a.propertyName === i.openTransitionProp && a.target === i.transitionEl && (clearTimeout(u), i.transitionEl.removeEventListener("transitionstart", n), (r ? i[i.transitionProp] : s(i)) ? i.onBeforeOpen() : i.onBeforeClose());
      }, t = function(a) {
        a.propertyName === i.openTransitionProp && a.target === i.transitionEl && ((r ? i[i.transitionProp] : s(i)) ? i.onOpen() : i.onClose(), i.transitionEl.removeEventListener("transitionend", t), i.transitionEl.removeEventListener("transitioncancel", t));
      };
      const { transitionDuration: d, transitionProperty: f } = getComputedStyle(i.transitionEl), e = d.split(","), o = f.split(",").indexOf(i.openTransitionProp), l = e[o] ?? /* Safari will have a single transition value if multiple props share it,
      so we fall back to it if there's no matching prop duration */
      e[0];
      if (l === "0s") {
        E(i, r);
        return;
      }
      const u = setTimeout(() => {
        i.transitionEl.removeEventListener("transitionstart", n), i.transitionEl.removeEventListener("transitionend", t), i.transitionEl.removeEventListener("transitioncancel", t), E(i, r);
      }, parseFloat(l) * 1e3);
      i.transitionEl.addEventListener("transitionstart", n), i.transitionEl.addEventListener("transitionend", t), i.transitionEl.addEventListener("transitioncancel", t);
    }
  });
}
export {
  L as o
};
//# sourceMappingURL=openCloseComponent-fTUxB9Xb.js.map
