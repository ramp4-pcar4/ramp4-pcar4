import "./main-DhLeoxL5.js";
function b(r, n, o) {
  const e = i(r);
  return new e(n, o);
}
function i(r) {
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
//# sourceMappingURL=observers-Cg_752lJ.js.map
