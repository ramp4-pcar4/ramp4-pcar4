import { cY as o } from "./main-uCo5F72j.js";
function b(r, n, i) {
  if (!o())
    return;
  const e = c(r);
  return new e(n, i);
}
function c(r) {
  class n extends window.MutationObserver {
    constructor(e) {
      super(e), this.observedEntry = [], this.callback = e;
    }
    observe(e, t) {
      return this.observedEntry.push({ target: e, options: t }), super.observe(e, t);
    }
    unobserve(e) {
      const t = this.observedEntry.filter((s) => s.target !== e);
      this.observedEntry = [], this.callback(super.takeRecords(), this), this.disconnect(), t.forEach((s) => this.observe(s.target, s.options));
    }
  }
  return function() {
    return r === "intersection" ? window.IntersectionObserver : r === "mutation" ? n : window.ResizeObserver;
  }();
}
export {
  b as c
};
//# sourceMappingURL=observers-DC3me885.js.map
