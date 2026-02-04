import { L as S, a as E, d as O, p as N, l as $, b as f, i as d, f as y } from "./main-DIdq27YS.js";
import { $ as x, j as g } from "./utils-DEFuc7ID.js";
import { t as F } from "./fetchService-BcB0uh9E.js";
import { a as J } from "./lazyLayerLoader-8kYJdScy.js";
const h = "Feature Service", I = "feature-layer-utils", D = `${I}-save`, R = `${I}-save-as`;
function T(e) {
  return { isValid: S(e) && (e.type !== "feature" || !e.dynamicDataSource), errorMessage: "Feature layer should be a layer or table in a map or feature service" };
}
function v(e) {
  const r = [], t = [];
  for (const { layer: a, layerJSON: o } of e) a.isTable ? t.push(o) : r.push(o);
  return { layers: r, tables: t };
}
function w(e) {
  return v([e]);
}
async function K(e, r) {
  return /\/\d+\/?$/.test(e.url) ? w(r[0]) : M(r, e);
}
async function M(e, r) {
  if (e.reverse(), !r) return v(e);
  const t = await j(r, e);
  for (const a of e) A(a.layer, a.layerJSON, t);
  return G(t, e), t;
}
async function j(e, r) {
  let t = await e.fetchData("json");
  if (k(t)) return t;
  t ||= {}, C(t);
  const { layer: { url: a, customParameters: o, apiKey: s } } = r[0];
  return await Y(t, { url: a ?? "", customParameters: o, apiKey: s }, r.map((n) => n.layer.layerId)), t;
}
function k(e) {
  return !!(e && Array.isArray(e.layers) && Array.isArray(e.tables));
}
function C(e) {
  e.layers ||= [], e.tables ||= [];
}
function G(e, r) {
  const t = [], a = [];
  for (const { layer: o } of r) {
    const { isTable: s, layerId: n } = o;
    s ? a.push(n) : t.push(n);
  }
  p(e.layers, t), p(e.tables, a);
}
function p(e, r) {
  if (e.length < 2) return;
  const t = [];
  for (const { id: a } of e) t.push(a);
  E(t.sort(m), r.slice().sort(m)) && e.sort((a, o) => {
    const s = r.indexOf(a.id), n = r.indexOf(o.id);
    return s < n ? -1 : s > n ? 1 : 0;
  });
}
function m(e, r) {
  return e < r ? -1 : e > r ? 1 : 0;
}
async function Y(e, r, t) {
  const { url: a, customParameters: o, apiKey: s } = r, { serviceJSON: n, layersJSON: i } = await F(a, { customParameters: o, apiKey: s }), l = b(e.layers, n.layers, t), c = b(e.tables, n.tables, t);
  e.layers = l.itemResources, e.tables = c.itemResources;
  const u = [...l.added, ...c.added], P = i ? [...i.layers, ...i.tables] : [];
  await _(e, u, a, P);
}
function b(e, r, t) {
  const a = O(e, r, (s, n) => s.id === n.id);
  e = e.filter((s) => !a.removed.some((n) => n.id === s.id));
  const o = a.added;
  return o.forEach(({ id: s }) => {
    e.push({ id: s });
  }), { itemResources: e, added: o.filter(({ id: s }) => !t.includes(s)) };
}
async function _(e, r, t, a) {
  const o = await B(r), s = r.map(({ id: n, type: i }) => new (o.get(i))({ url: t, layerId: n, sourceJSON: a.find(({ id: l }) => l === n) }));
  await Promise.allSettled(s.map((n) => n.load())), s.forEach((n) => {
    const { layerId: i, loaded: l, defaultPopupTemplate: c } = n;
    if (!l || c == null) return;
    const u = { id: i, popupInfo: c.toJSON() };
    n.operationalLayerType !== "ArcGISFeatureLayer" && (u.layerType = n.operationalLayerType), A(n, u, e);
  });
}
async function B(e) {
  const r = [];
  e.forEach(({ type: o }) => {
    const s = U(o), n = J[s];
    r.push(n());
  });
  const t = await Promise.all(r), a = /* @__PURE__ */ new Map();
  return e.forEach(({ type: o }, s) => {
    a.set(o, t[s]);
  }), a;
}
function U(e) {
  let r;
  switch (e) {
    case "Feature Layer":
    case "Table":
      r = "FeatureLayer";
      break;
    case "Oriented Imagery Layer":
      r = "OrientedImageryLayer";
      break;
    case "Catalog Layer":
      r = "CatalogLayer";
  }
  return r;
}
function A(e, r, t) {
  e.isTable ? L(t.tables, r) : L(t.layers, r);
}
function L(e, r) {
  const t = e.findIndex(({ id: a }) => a === r.id);
  t === -1 ? e.push(r) : e[t] = r;
}
async function V(e, r) {
  const { url: t, layerId: a, title: o, fullExtent: s, isTable: n } = e, i = N(t);
  r.url = i?.serverType === "FeatureServer" ? t : `${t}/${a}`, r.title ||= o, r.extent = null, n || s == null || (r.extent = await $(s)), f(r, y.METADATA), f(r, y.MULTI_LAYER), d(r, y.SINGLE_LAYER), n && d(r, y.TABLE);
}
async function Q(e, r) {
  return x({ layer: e, itemType: h, validateLayer: T, createItemData: (t, a) => K(a, [t]), errorNamePrefix: D }, r);
}
async function W(e, r, t) {
  return g({ layer: e, itemType: h, validateLayer: T, createItemData: (a, o) => Promise.resolve(w(a)), errorNamePrefix: R, newItem: r, setItemProperties: V }, t);
}
export {
  Q as save,
  W as saveAs
};
//# sourceMappingURL=featureLayerUtils-CVAASJcN.js.map
