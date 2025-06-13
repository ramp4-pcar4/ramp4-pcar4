import { s as m, a0 as h, Q as x, i as N, f as P } from "./main-CmejC-so.js";
import { i as u } from "./originUtils-BLsWtgV9.js";
import { o as S } from "./jsonContext-rM7XVo-i.js";
import { i as b } from "./saveAPIKeyUtils-D8ZJ9vLM.js";
import { t as g } from "./saveUtils-Boxf7esq.js";
function O(e, r, a) {
  const t = a(e);
  if (!t.isValid) throw new m(`${r}:invalid-parameters`, t.errorMessage, { layer: e });
}
async function d(e) {
  const { layer: r, errorNamePrefix: a, validateLayer: t } = e;
  await r.load(), O(r, a, t);
}
function f(e, r) {
  return `Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${r}`;
}
function y(e) {
  const { item: r, errorNamePrefix: a, layer: t, validateItem: n } = e;
  if (b(r), J(e), n) {
    const s = n(r);
    if (!s.isValid) throw new m(`${a}:invalid-parameters`, s.errorMessage, { layer: t });
  }
}
function J(e) {
  const { item: r, itemType: a, additionalItemType: t, errorNamePrefix: n, layer: s } = e, l = [a];
  if (t && l.push(t), !l.includes(r.type)) {
    const i = l.map((o) => `'${o}'`).join(", ");
    throw new m(`${n}:portal-item-wrong-type`, `Portal item type should be one of: "${i}"`, { item: r, layer: s });
  }
}
function E(e) {
  const { layer: r, errorNamePrefix: a } = e, { portalItem: t } = r;
  if (!t) throw new m(`${a}:portal-item-not-set`, f(r, "requires the portalItem property to be set"));
  if (!t.loaded) throw new m(`${a}:portal-item-not-loaded`, f(r, "cannot be saved to a portal item that does not exist or is inaccessible"));
  y({ ...e, item: t });
}
function U(e) {
  const { newItem: r, itemType: a } = e;
  let t = h.from(r);
  return t.id && (t = t.clone(), t.id = null), t.type ??= a, t.portal ??= x.getDefault(), y({ ...e, item: t }), t;
}
function w(e) {
  return S(e, "portal-item");
}
async function $(e, r, a) {
  "beforeSave" in e && typeof e.beforeSave == "function" && await e.beforeSave();
  const t = e.write({}, r);
  return await Promise.all(r.resources?.pendingOperations ?? []), g(r, { errorName: "layer-write:unsupported" }, a), t;
}
function I(e) {
  N(e, P.JSAPI), e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((r, a, t) => t.indexOf(r) === a));
}
async function C(e, r, a) {
  const t = e.portal;
  await t.signIn(), await t.user?.addItem({ item: e, data: r, folder: a?.folder });
}
async function M(e, r) {
  const { layer: a, createItemData: t, createJSONContext: n, saveResources: s, supplementalUnsupportedErrors: l } = e;
  await d(e), E(e);
  const i = a.portalItem, o = n ? n(i) : w(i), p = await $(a, o, { ...r, supplementalUnsupportedErrors: l }), c = await t({ layer: a, layerJSON: p }, i);
  return I(i), await i.update({ data: c }), u(o), await s?.(i, o), i;
}
async function R(e, r) {
  const { layer: a, createItemData: t, createJSONContext: n, setItemProperties: s, saveResources: l, supplementalUnsupportedErrors: i } = e;
  await d(e);
  const o = U(e), p = n ? n(o) : w(o), c = await $(a, p, { ...r, supplementalUnsupportedErrors: i }), v = await t({ layer: a, layerJSON: c }, o);
  return await s(a, o), I(o), await C(o, v, r), a.portalItem = o, u(p), await l?.(o, p), o;
}
export {
  M as $,
  R as j
};
//# sourceMappingURL=utils-DtOLyDSE.js.map
