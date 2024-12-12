import { s as c, bX as f, bY as u, bZ as p, a2 as m } from "./main-DhLeoxL5.js";
async function g(e, s, i, o) {
  if (!s) throw new c("post:missing-guid", "guid for version is missing");
  const t = f(e), a = i.toJSON(), r = u(t.query, { query: p({ ...a, f: "json" }), ...o, method: "post" });
  s.startsWith("{") && (s = s.slice(1, -1));
  const d = `${t.path}/versions/${s}/deleteForwardEdits`, { data: n } = await m(d, r);
  return n.success;
}
export {
  g as deleteForwardEdits
};
//# sourceMappingURL=deleteForwardEdits-B3yTsgT-.js.map
