import { aN as f, s as h, a2 as b, aO as R } from "./main-BpIyUAdL.js";
async function P(e, t = {}, s) {
  await e.load(s);
  const r = f(e.itemUrl, "resources"), { start: a = 1, num: m = 10, sortOrder: n = "asc", sortField: p = "resource" } = t, l = { query: { start: a, num: m, sortOrder: n, sortField: p, token: e.apiKey }, signal: s?.signal }, o = await e.portal.request(r, l);
  return { total: o.total, nextStart: o.nextStart, resources: o.resources.map(({ created: d, size: c, resource: i }) => ({ created: new Date(d), size: c, resource: e.resourceFromPath(i) })) };
}
async function F(e, t, s, r) {
  const a = /* @__PURE__ */ new Map();
  for (const { resource: n, content: p, compress: l, access: o } of t) {
    if (!n.hasPath()) throw new h(`portal-item-resource-${s}:invalid-path`, "Resource does not have a valid path");
    const [d, c] = w(n.path), i = `${d}/${l ?? ""}/${o ?? ""}`;
    a.has(i) || a.set(i, { prefix: d, compress: l, access: o, files: [] }), a.get(i).files.push({ fileName: c, content: p });
  }
  await e.load(r);
  const m = f(e.userItemUrl, s === "add" ? "addResources" : "updateResources");
  for (const { prefix: n, compress: p, access: l, files: o } of a.values())
    for (let c = 0; c < o.length; c += 25) {
      const i = o.slice(c, c + 25), u = new FormData();
      n && n !== "." && u.append("resourcesPrefix", n), p && u.append("compress", "true"), l && u.append("access", l);
      let g = 0;
      for (const { fileName: y, content: v } of i) u.append("file" + ++g, v, y);
      u.append("f", "json"), await e.portal.request(m, { method: "post", body: u, signal: r?.signal });
    }
}
async function O(e, t, s) {
  if (!t.hasPath()) throw new h("portal-item-resources-remove:invalid-path", "Resource does not have a valid path");
  await e.load(s);
  const r = f(e.userItemUrl, "removeResources");
  await e.portal.request(r, { method: "post", query: { resource: t.path }, signal: s?.signal }), t.portalItem = null;
}
async function U(e, t) {
  await e.load(t);
  const s = f(e.userItemUrl, "removeResources");
  return e.portal.request(s, { method: "post", query: { deleteAll: !0 }, signal: t?.signal });
}
function w(e) {
  const t = e.lastIndexOf("/");
  return t === -1 ? [".", e] : [e.slice(0, t), e.slice(t + 1)];
}
function x(e) {
  const [t, s] = q(e), [r, a] = w(t);
  return [r, a, s];
}
function q(e) {
  const t = R(e);
  return t == null ? [e, ""] : [e.slice(0, e.length - t.length - 1), `.${t}`];
}
async function $(e) {
  return e.type === "blob" ? e.blob : e.type === "json" ? new Blob([e.jsonString], { type: "application/json" }) : (await b(e.url, { responseType: "blob" })).data;
}
function S(e, t) {
  if (!e.hasPath()) return null;
  const [s, , r] = x(e.path);
  return e.portalItem.resourceFromPath(f(s, t + r));
}
export {
  F as addOrUpdateResources,
  $ as contentToBlob,
  P as fetchResources,
  S as getSiblingOfSameTypeI,
  U as removeAllResources,
  O as removeResource,
  x as splitPrefixFileNameAndExtension
};
//# sourceMappingURL=resourceUtils-32iSZ3hM.js.map
