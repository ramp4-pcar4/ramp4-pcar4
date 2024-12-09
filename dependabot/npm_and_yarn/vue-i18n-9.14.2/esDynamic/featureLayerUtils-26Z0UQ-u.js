import { L as S, h as E, g as L, d as x, l as N, a as f, i as d, f as y } from "./main-uCo5F72j.js";
import { $ as O, j as J } from "./utils-avbuDtYt.js";
import { t as D, a as R, i as F } from "./fetchService-Dh8lQjiS.js";
const b = "Feature Service", T = "feature-layer-utils", K = `${T}-save`, M = `${T}-save-as`;
function v(e) {
  return { isValid: S(e) && (e.type !== "feature" || !e.dynamicDataSource), errorMessage: "Feature layer should be a layer or table in a map or feature service" };
}
function I(e) {
  const t = [], a = [];
  for (const { layer: r, layerJSON: o } of e) r.isTable ? a.push(o) : t.push(o);
  return { layers: t, tables: a };
}
function w(e) {
  return I([e]);
}
async function g(e, t) {
  return /\/\d+\/?$/.test(e.url) ? w(t[0]) : j(t, e);
}
async function j(e, t) {
  if (e.reverse(), !t) return I(e);
  const a = await G(t, e);
  for (const r of e) A(r.layer, r.layerJSON, a);
  return B(a, e), a;
}
async function G(e, t) {
  let a = await e.fetchData("json");
  if (Y(a)) return a;
  a ||= {}, _(a);
  const { layer: { url: r, customParameters: o, apiKey: s } } = t[0];
  return await U(a, { url: r ?? "", customParameters: o, apiKey: s }, t.map((n) => n.layer.layerId)), a;
}
function Y(e) {
  return !!(e && Array.isArray(e.layers) && Array.isArray(e.tables));
}
function _(e) {
  e.layers ||= [], e.tables ||= [];
}
function B(e, t) {
  const a = [], r = [];
  for (const { layer: o } of t) {
    const { isTable: s, layerId: n } = o;
    s ? r.push(n) : a.push(n);
  }
  p(e.layers, a), p(e.tables, r);
}
function p(e, t) {
  if (e.length < 2) return;
  const a = [];
  for (const { id: r } of e) a.push(r);
  E(a.sort(m), t.slice().sort(m)) && e.sort((r, o) => {
    const s = t.indexOf(r.id), n = t.indexOf(o.id);
    return s < n ? -1 : s > n ? 1 : 0;
  });
}
function m(e, t) {
  return e < t ? -1 : e > t ? 1 : 0;
}
async function U(e, t, a) {
  const { url: r, customParameters: o, apiKey: s } = t, { serviceJSON: n, layersJSON: i } = await D(r, { customParameters: o, apiKey: s }), l = h(e.layers, n.layers, a), u = h(e.tables, n.tables, a);
  e.layers = l.itemResources, e.tables = u.itemResources;
  const c = [...l.added, ...u.added], P = i ? [...i.layers, ...i.tables] : [];
  await V(e, c, r, P);
}
function h(e, t, a) {
  const r = L(e, t, (s, n) => s.id === n.id);
  e = e.filter((s) => !r.removed.some((n) => n.id === s.id));
  const o = r.added;
  return o.forEach(({ id: s }) => {
    e.push({ id: s });
  }), { itemResources: e, added: o.filter(({ id: s }) => !a.includes(s)) };
}
async function V(e, t, a, r) {
  const o = await k(t), s = t.map(({ id: n, type: i }) => new (o.get(i))({ url: a, layerId: n, sourceJSON: r.find(({ id: l }) => l === n) }));
  await Promise.allSettled(s.map((n) => n.load())), s.forEach((n) => {
    const { layerId: i, loaded: l, defaultPopupTemplate: u } = n;
    if (!l || u == null) return;
    const c = { id: i, popupInfo: u.toJSON() };
    n.operationalLayerType !== "ArcGISFeatureLayer" && (c.layerType = n.operationalLayerType), A(n, c, e);
  });
}
async function k(e) {
  const t = [];
  e.forEach(({ type: o }) => {
    const s = F(o), n = R[s];
    t.push(n());
  });
  const a = await Promise.all(t), r = /* @__PURE__ */ new Map();
  return e.forEach(({ type: o }, s) => {
    r.set(o, a[s]);
  }), r;
}
function A(e, t, a) {
  e.isTable ? $(a.tables, t) : $(a.layers, t);
}
function $(e, t) {
  const a = e.findIndex(({ id: r }) => r === t.id);
  a === -1 ? e.push(t) : e[a] = t;
}
async function q(e, t) {
  const { url: a, layerId: r, title: o, fullExtent: s, isTable: n } = e, i = x(a);
  t.url = (i?.serverType === "FeatureServer" ? a : `${a}/${r}`) ?? null, t.title ||= o, t.extent = null, n || s == null || (t.extent = await N(s)), f(t, y.METADATA), f(t, y.MULTI_LAYER), d(t, y.SINGLE_LAYER), n && d(t, y.TABLE);
}
async function H(e, t) {
  return O({ layer: e, itemType: b, validateLayer: v, createItemData: (a, r) => g(r, [a]), errorNamePrefix: K }, t);
}
async function Q(e, t, a) {
  return J({ layer: e, itemType: b, validateLayer: v, createItemData: (r, o) => Promise.resolve(w(r)), errorNamePrefix: M, newItem: t, setItemProperties: q }, a);
}
export {
  H as save,
  Q as saveAs
};
//# sourceMappingURL=featureLayerUtils-26Z0UQ-u.js.map
