import { dZ as S, d_ as y, dK as $, s as v, d$ as b } from "./main-DMoCLB29.js";
import { getSiblingOfSameTypeI as E, contentToBlob as m } from "./resourceUtils-kjpC80bG.js";
async function O(s, t, o) {
  const r = await w(s, t, o);
  await I(r, t, o);
}
async function P(s, t, o, r, a) {
  const c = await w(o, r, a);
  await s.update({ data: t }), await I(c, r, a);
}
async function w(s, t, o) {
  if (!t?.resources) return;
  const r = t.portalItem === s.portalItem ? new Set(s.paths) : /* @__PURE__ */ new Set();
  s.paths.length = 0, s.portalItem = t.portalItem;
  const a = new Set(t.resources.toKeep.map((e) => e.resource.path)), c = /* @__PURE__ */ new Set(), f = [];
  a.forEach((e) => {
    r.delete(e), s.paths.push(e);
  });
  const p = [], h = [], u = [];
  for (const e of t.resources.toUpdate) if (r.delete(e.resource.path), a.has(e.resource.path) || c.has(e.resource.path)) {
    const { resource: n, content: g, finish: d } = e, i = E(n, S());
    s.paths.push(i.path), p.push({ resource: i, content: await m(g), compress: e.compress }), d && u.push(() => d(i));
  } else {
    s.paths.push(e.resource.path), h.push({ resource: e.resource, content: await m(e.content), compress: e.compress });
    const n = e.finish;
    n && u.push(() => n(e.resource)), c.add(e.resource.path);
  }
  for (const e of t.resources.toAdd) if (s.paths.push(e.resource.path), r.has(e.resource.path)) r.delete(e.resource.path);
  else {
    p.push({ resource: e.resource, content: await m(e.content), compress: e.compress });
    const n = e.finish;
    n && u.push(() => n(e.resource));
  }
  if (p.length || h.length) {
    const { addOrUpdateResources: e } = await import("./resourceUtils-kjpC80bG.js");
    await e(t.portalItem, p, "add", o), await e(t.portalItem, h, "update", o);
  }
  if (u.forEach((e) => e()), f.length === 0) return r;
  const l = await y(f);
  if ($(o), l.length > 0) throw new v("save:resources", "Failed to save one or more resources", { errors: l });
  return r;
}
async function I(s, t, o) {
  if (!s || !t.portalItem) return;
  const r = [];
  for (const a of s) {
    const c = t.portalItem.resourceFromPath(a);
    r.push(c.portalItem.removeResource(c, o));
  }
  await b(r);
}
export {
  P as n,
  O as p
};
//# sourceMappingURL=resourceUtils-BuuBbzEm.js.map
