import { m as g } from "./TimeOnly-B-QnKJeF.js";
import { a as h, B as l, U as d, G as w, Q as m, b as v, r as S, P as f, v as c, q as p } from "./arcadeUtils-qwJ9DWhW.js";
import { x as y, r as x } from "./WhereClause-BBE8rGYc.js";
async function o(n, e, a, t, i, r) {
  if (t.length === 1) {
    if (d(t[0])) return f(n, t[0], c(t[1], -1));
    if (m(t[0])) return f(n, t[0].toArray(), c(t[1], -1));
  } else if (t.length === 2) {
    if (d(t[0])) return f(n, t[0], c(t[1], -1));
    if (m(t[0])) return f(n, t[0].toArray(), c(t[1], -1));
    if (l(t[0])) {
      const s = await t[0].load(), u = await F(y.create(t[1], s.getFieldsIndex(), s.dateFieldsTimeZoneDefaultUTC), r, i);
      return A(i, await t[0].calculateStatistic(n, u, c(t[2], 1e3), e.abortSignal));
    }
  } else if (t.length === 3 && l(t[0])) {
    const s = await t[0].load(), u = await F(y.create(t[1], s.getFieldsIndex(), s.dateFieldsTimeZoneDefaultUTC), r, i);
    return A(i, await t[0].calculateStatistic(n, u, c(t[2], 1e3), e.abortSignal));
  }
  return f(n, t, -1);
}
function A(n, e) {
  return e instanceof x ? g.fromReaderAsTimeStampOffset(e.toStorageFormat()) : e instanceof Date ? g.dateJSAndZoneToArcadeDate(e, p(n)) : e;
}
async function F(n, e, a) {
  const t = n.getVariables();
  if (t.length > 0) {
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const u = { name: t[s] };
      i.push(await e.evaluateIdentifier(a, u));
    }
    const r = {};
    for (let s = 0; s < t.length; s++) r[t[s]] = i[s];
    return n.parameters = r, n;
  }
  return n;
}
function I(n) {
  n.mode === "async" && (n.functions.stdev = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => o("stdev", t, i, r, e, n));
  }, n.functions.variance = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => o("variance", t, i, r, e, n));
  }, n.functions.average = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => o("mean", t, i, r, e, n));
  }, n.functions.mean = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => o("mean", t, i, r, e, n));
  }, n.functions.sum = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => o("sum", t, i, r, e, n));
  }, n.functions.min = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => o("min", t, i, r, e, n));
  }, n.functions.max = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => o("max", t, i, r, e, n));
  }, n.functions.count = function(e, a) {
    return n.standardFunctionAsync(e, a, (t, i, r) => {
      if (h(r, 1, 1, e, a), l(r[0])) return r[0].count(t.abortSignal);
      if (d(r[0]) || w(r[0])) return r[0].length;
      if (m(r[0])) return r[0].length();
      throw new v(e, S.InvalidParameter, a);
    });
  });
}
export {
  I as registerFunctions
};
//# sourceMappingURL=featuresetstats-DI_clMbP.js.map
