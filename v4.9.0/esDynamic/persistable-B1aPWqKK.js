import { e9 as j, ea as $, eb as N, ec as h, ed as P, ee as b, ef as x, eg as O, eh as v, ei as S, s as A, ej as R, dO as F, aN as J, ek as K, aO as k, el as z } from "./main-DIdq27YS.js";
import { i as C } from "./multiOriginJSONSupportUtils-DGETddQl.js";
import { p as y } from "./resourceExtension-CN6AGKe1.js";
function L(e) {
  const r = e?.origins ?? [void 0];
  return (o, n) => {
    const t = H(e, o, n);
    for (const a of r) {
      const i = j(o, a, n);
      for (const s in t) i[s] = t[s];
    }
  };
}
function H(e, r, o) {
  if (e?.type === "resource") return V(e, r, o);
  switch (e?.type ?? "other") {
    case "other":
      return { read: !0, write: !0 };
    case "url": {
      const { read: n, write: t } = z;
      return { read: n, write: t };
    }
  }
}
function V(e, r, o) {
  const n = $(r, o);
  return { type: String, read: (t, a, i) => {
    const s = N(t, a, i);
    return n.type === String ? s : typeof n.type == "function" ? new n.type({ url: s }) : void 0;
  }, write: { writer(t, a, i, s) {
    if (!s?.resources) return typeof t == "string" ? void (a[i] = h(t, s)) : void (a[i] = t.write({}, s));
    const c = q(t), p = h(c, { ...s, verifyItemRelativeUrls: s?.verifyItemRelativeUrls ? { writtenUrls: s.verifyItemRelativeUrls.writtenUrls, rootPath: void 0 } : void 0 }, P.NO), l = n.type !== String && (!C(this) || s?.origin && this.originIdOf(o) > b(s.origin)), u = { object: this, propertyName: o, value: t, targetUrl: p, dest: a, targetPropertyName: i, context: s, params: e };
    s?.portalItem && p && !x(p) ? l && e?.contentAddressed ? g(u) : l ? Y(u) : Z(u) : s?.portalItem && (p == null || O(p) != null || v(p) || l) ? g(u) : a[i] = p;
  } } };
}
function g(e) {
  const { targetUrl: r, params: o, value: n, context: t, dest: a, targetPropertyName: i } = e;
  if (!t.portalItem) return;
  const s = S(r), c = U(n, r, t);
  if (o?.contentAddressed && c.type !== "json") return void t.messages?.push(new A("persistable:contentAddressingUnsupported", `Property "${i}" is trying to serializing a resource with content of type ${c.type} with content addressing. Content addressing is only supported for json resources.`, { content: c }));
  const p = o?.contentAddressed && c.type === "json" ? R(c.jsonString) : s?.filename ?? F(), l = J(o?.prefix ?? s?.prefix, p), u = `${l}.${y(c)}`;
  if (o?.contentAddressed && t.resources && c.type === "json") {
    const f = t.resources.toKeep.find(({ resource: m }) => m.path === u) ?? t.resources.toAdd.find(({ resource: m }) => m.path === u);
    if (f) return void (a[i] = f.resource.itemRelativeUrl);
  }
  const d = t.portalItem.resourceFromPath(u);
  v(r) && t.resources && t.resources.pendingOperations.push(K(r).then((f) => {
    d.path = `${l}.${y({ type: "blob", blob: f })}`, a[i] = d.itemRelativeUrl;
  }).catch(() => {
  }));
  const I = o?.compress ?? !1;
  t.resources && w({ ...e, resource: d, content: c, compress: I, updates: t.resources.toAdd }), a[i] = d.itemRelativeUrl;
}
function Y(e) {
  const { context: r, targetUrl: o, params: n, value: t, dest: a, targetPropertyName: i } = e;
  if (!r.portalItem) return;
  const s = r.portalItem.resourceFromPath(o), c = U(t, o, r), p = y(c), l = k(s.path), u = n?.compress ?? !1;
  p === l ? (r.resources && w({ ...e, resource: s, content: c, compress: u, updates: r.resources.toUpdate }), a[i] = o) : g(e);
}
function Z({ context: e, targetUrl: r, dest: o, targetPropertyName: n }) {
  e.portalItem && e.resources && (e.resources.toKeep.push({ resource: e.portalItem.resourceFromPath(r), compress: !1 }), o[n] = r);
}
function w({ object: e, propertyName: r, updates: o, resource: n, content: t, compress: a }) {
  const i = (s) => {
    B(e, r, s);
  };
  o.push({ resource: n, content: t, compress: a, finish: i });
}
function U(e, r, o) {
  return typeof e == "string" ? { type: "url", url: r } : { type: "json", jsonString: JSON.stringify(e.toJSON(o)) };
}
function q(e) {
  return e == null ? null : typeof e == "string" ? e : e.url;
}
function B(e, r, o) {
  typeof e[r] == "string" ? e[r] = o.url : e[r].url = o.url;
}
export {
  L as j
};
//# sourceMappingURL=persistable-B1aPWqKK.js.map
