import { dE as a, aG as e, dF as d, dG as c, aC as g, dH as p, dI as G, aN as b, dJ as h } from "./main-DMoCLB29.js";
import { s as w } from "./sphere-H4NRuewM.js";
import { c as x } from "./plane-CiAee7JJ.js";
function s(r) {
  return r ? { origin: a(r.origin), vector: a(r.vector) } : { origin: e(), vector: e() };
}
function H(r, n, o = s()) {
  return d(o.origin, r), c(o.vector, n, r), o;
}
function I(r, n, o) {
  return A(r, n, 0, 1, o);
}
function A(r, n, o, u, i) {
  const { vector: t, origin: v } = r, f = c(x.get(), n, v), m = g(t, f) / p(t);
  return G(i, t, b(m, o, u)), h(i, i, r.origin);
}
new w(() => s());
export {
  I as M,
  H as h,
  s as v
};
//# sourceMappingURL=lineSegment-86u9CDnI.js.map
