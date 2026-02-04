import { s as d, t as G, r as k, Q as C, p as E } from "./main-CmejC-so.js";
import { t as j } from "./fetchService-BFbPA2mq.js";
import { l as L, a as O, n as T, u as R, i as J, c as N, s as v, t as b, r as Q, e as S } from "./portalLayers-D_4jyCvl.js";
import { populateGroupLayer as q } from "./layersCreator-fDG7D33D.js";
import { t as z, a as A } from "./lazyLayerLoader-DuJKvRwp.js";
import { e as $ } from "./jsonContext-rM7XVo-i.js";
async function le(e, r) {
  const a = e.instance.portalItem;
  if (a?.id) return await a.load(r), B(e), e.validateItem && e.validateItem(a), H(e, r);
}
function B(e) {
  const r = e.instance.portalItem;
  if (!r?.type || !e.supportedTypes.includes(r.type)) throw new d("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}'", { type: r?.type, expectedType: e.supportedTypes.join(", ") });
}
async function H(e, r) {
  const a = e.instance, t = a.portalItem;
  if (!t) return;
  const { url: o, title: s } = t, n = $(t, "portal-item");
  if (a.type === "group") return K(a, n, e);
  o && a.type !== "media" && a.read({ url: o }, n);
  const l = new S(), i = await M(e, l, r);
  return i && a.read(i, n), a.resourceReferences = { portalItem: t, paths: n.readResourcePaths ?? [] }, a.type !== "subtype-group" && a.read({ title: s }, n), G(a, n);
}
async function K(e, r, a) {
  const t = e.portalItem;
  if (!e.sourceIsPortalItem) return;
  const { title: o, type: s } = t;
  if (s === "Group Layer") {
    if (!k(t, "Map")) throw new d("portal:invalid-layer-item-typekeyword", "'Group Layer' item without 'Map' type keyword is not supported");
    return U(e);
  }
  return e.read({ title: o }, r), V(e, a);
}
async function U(e) {
  const r = e.portalItem, a = await r.fetchData("json");
  if (!a) return;
  const t = $(r, "web-map");
  e.read(a, t), await q(e, a, { context: t }), e.resourceReferences = { portalItem: r, paths: t.readResourcePaths ?? [] };
}
async function V(e, r) {
  let a;
  const { portalItem: t } = e;
  if (!t) return;
  const o = t.type, s = r.layerModuleTypeMap;
  switch (o) {
    case "Feature Service":
    case "Feature Collection":
      a = s.FeatureLayer;
      break;
    case "Stream Service":
      a = s.StreamLayer;
      break;
    case "Scene Service":
      a = s.SceneLayer;
      break;
    default:
      throw new d("portal:unsupported-item-type-as-group", `The item type '${o}' is not supported as a 'IGroupLayer'`);
  }
  const n = new S();
  let [l, i] = await Promise.all([a(), M(r, n)]), u = () => l;
  if (o === "Feature Service") {
    const P = L(i)?.customParameters;
    i = t.url ? await O(i, t.url, n) : {};
    const m = T(i), h = R(i), F = J(i), p = [];
    if (m.length || h?.length) {
      m.length && p.push("SubtypeGroupLayer"), h?.length && p.push("OrientedImageryLayer"), F?.length && p.push("CatalogLayer");
      const w = [];
      for (const c of p) {
        const y = s[c];
        w.push(y());
      }
      const D = await Promise.all(w), g = /* @__PURE__ */ new Map();
      p.forEach((c, y) => {
        g.set(c, D[y]);
      }), u = (c) => c.layerType ? g.get(c.layerType) ?? l : l;
    }
    const x = await ee(t.url, { customParameters: P, loadContext: n });
    return await f(e, u, i, x);
  }
  return o === "Scene Service" && t.url && (i = await N(t, i, n)), v(i) > 0 ? await f(e, u, i) : await W(e, u);
}
async function W(e, r) {
  const { portalItem: a } = e;
  if (!a?.url) return;
  const t = await z(a.url);
  t && f(e, r, { layers: t.layers?.map(b), tables: t.tables?.map(b) });
}
async function f(e, r, a, t) {
  let o = a.layers || [];
  const s = a.tables || [];
  if (e.portalItem?.type === "Feature Collection" ? (o.forEach((n, l) => {
    n.id = l, n?.layerDefinition?.type === "Table" && s.push(n);
  }), o = o.filter((n) => n?.layerDefinition?.type !== "Table")) : (o.reverse(), s.reverse()), o.forEach((n) => {
    const l = t?.(n);
    if (l || !t) {
      const i = I(e, r(n), a, n, l);
      e.add(i);
    }
  }), s.length) {
    const n = await A.FeatureLayer();
    s.forEach((l) => {
      const i = t?.(l);
      if (i || !t) {
        const u = I(e, n, a, l, i);
        e.tables.add(u);
      }
    });
  }
}
function I(e, r, a, t, o) {
  const s = e.portalItem, n = { portalItem: s.clone(), layerId: t.id };
  t.url != null && (n.url = t.url);
  const l = new r(n);
  if ("sourceJSON" in l && (l.sourceJSON = o), l.type !== "subtype-group" && l.type !== "catalog" && (l.sublayerTitleMode = "service-name"), s.type === "Feature Collection") {
    const i = { origin: "portal-item", portal: s.portal || C.getDefault() };
    l.read(t, i);
    const u = a.showLegend;
    u != null && l.read({ showLegend: u }, i);
  }
  return l;
}
async function M(e, r, a) {
  if (e.supportsData === !1) return;
  const t = e.instance, o = t.portalItem;
  if (!o) return;
  let s = null;
  try {
    s = await o.fetchData("json", a);
  } catch {
  }
  if (Z(t)) {
    let n = null;
    const l = await X(o, s, r);
    if ((s?.layers || s?.tables) && l > 0) {
      if (t.layerId == null) {
        const i = T(s);
        t.layerId = t.type === "subtype-group" ? i?.[0] : Q(s);
      }
      n = Y(s, t), n && s.showLegend != null && (n.showLegend = s.showLegend);
    }
    return l > 1 && "sublayerTitleMode" in t && t.sublayerTitleMode !== "service-name" && (t.sublayerTitleMode = "item-title-and-service-name"), n;
  }
  return s;
}
async function X(e, r, a) {
  if (r?.layers && r?.tables) return v(r);
  const t = E(e.url);
  if (!t) return 1;
  const o = await a.fetchServiceMetadata(t.url.path, { customParameters: L(r)?.customParameters }).catch(() => null);
  return (r?.layers?.length ?? o?.layers?.length ?? 0) + (r?.tables?.length ?? o?.tables?.length ?? 0);
}
function Y(e, r) {
  const { layerId: a } = r, t = e.layers?.find((o) => o.id === a) || e.tables?.find((o) => o.id === a);
  return t && _(t, r) ? t : null;
}
function Z(e) {
  return e.type !== "stream" && "layerId" in e;
}
function _(e, r) {
  return !(r.type === "feature" && "layerType" in e && e.layerType === "SubtypeGroupLayer" || r.type === "subtype-group" && !("layerType" in e));
}
async function ee(e, r) {
  const { layersJSON: a } = await j(e, r);
  if (!a) return null;
  const t = [...a.layers, ...a.tables];
  return (o) => t.find((s) => s.id === o.id);
}
export {
  le as load
};
//# sourceMappingURL=layersLoader-BzJka5U4.js.map
