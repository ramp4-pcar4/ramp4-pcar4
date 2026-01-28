import { cp as t, ci as e, cq as g, cr as s, ce as p, cs as b, ct as h, ay as j, cu as q } from "./main-CmejC-so.js";
import { s as w } from "./ObjectStack-C2aK4CoA.js";
import { c as x } from "./plane-Do_F4APu.js";
function a(r) {
  return r ? { origin: t(r.origin), vector: t(r.vector) } : { origin: e(), vector: e() };
}
function k(r, n, o = a()) {
  return g(o.origin, r), s(o.vector, n, r), o;
}
function l(r, n, o) {
  return y(r, n, 0, 1, o);
}
function y(r, n, o, u, i) {
  const { vector: c, origin: v } = r, f = s(x.get(), n, v), m = p(c, f) / b(c);
  return h(i, c, j(m, o, u)), q(i, i, r.origin);
}
new w(() => a());
export {
  k as b,
  l as j,
  a as v
};
//# sourceMappingURL=lineSegment-CX0-QwWB.js.map
