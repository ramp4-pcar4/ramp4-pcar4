import { b as f, j as p, x as c } from "./utils-BqV249kA.js";
import { f as v, d as z, p as T, C as I, k as y, $ as x, E as V, P as w, U as F } from "./utils-BPHF0w-E.js";
async function E(l) {
  const { attribute: a, features: s } = l, { normalizationType: i, normalizationField: e, minValue: o, maxValue: t, fieldType: n } = a, r = await f({ field: a.field, valueExpression: a.valueExpression, normalizationType: i, normalizationField: e, normalizationTotal: a.normalizationTotal, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, s), m = v({ normalizationType: i, normalizationField: e, minValue: o, maxValue: t }), u = { value: 0.5, fieldType: n }, d = n === "esriFieldTypeString" ? z({ values: r, supportsNullCount: m, percentileParams: u }) : T({ values: r, minValue: o, maxValue: t, useSampleStdDev: !i, supportsNullCount: m, percentileParams: u });
  return I(d, n === "esriFieldTypeDate");
}
async function Z(l) {
  const { attribute: a, features: s } = l, i = await f({ field: a.field, field2: a.field2, field3: a.field3, fieldDelimiter: a.fieldDelimiter, valueExpression: a.valueExpression, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, s, !1), e = y(i);
  return x(e, a.domains, a.returnAllCodedValues, a.fieldDelimiter);
}
async function b(l) {
  const { attribute: a, features: s } = l, { field: i, normalizationType: e, normalizationField: o, normalizationTotal: t, classificationMethod: n } = a, r = await f({ field: i, valueExpression: a.valueExpression, normalizationType: e, normalizationField: o, normalizationTotal: t, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, s), m = V(r, { field: i, normalizationType: e, normalizationField: o, normalizationTotal: t, classificationMethod: n, standardDeviationInterval: a.standardDeviationInterval, numClasses: a.numClasses, minValue: a.minValue, maxValue: a.maxValue });
  return w(m, n);
}
async function h(l) {
  const { attribute: a, features: s } = l, { field: i, normalizationType: e, normalizationField: o, normalizationTotal: t, classificationMethod: n } = a, r = await f({ field: i, valueExpression: a.valueExpression, normalizationType: e, normalizationField: o, normalizationTotal: t, viewInfoParams: a.viewInfoParams, timeZone: a.timeZone, fieldInfos: a.fieldInfos }, s);
  return F(r, { field: i, normalizationType: e, normalizationField: o, normalizationTotal: t, classificationMethod: n, standardDeviationInterval: a.standardDeviationInterval, numBins: a.numBins, minValue: a.minValue, maxValue: a.maxValue });
}
async function C(l) {
  const { attribute: a, features: s } = l, { field: i, radius: e, transform: o, spatialReference: t } = a, n = a.size ?? [0, 0], r = p(s ?? [], o, t, n);
  return c(r, e ?? void 0, i, n[0], n[1]);
}
export {
  b as classBreaks,
  C as heatmapStatistics,
  h as histogram,
  E as summaryStatistics,
  Z as uniqueValues
};
//# sourceMappingURL=statsWorker-Bw4fiYSA.js.map
