import { s as n, cm as f, cn as u, co as m, $ as p } from "./main-C4pF0E7B.js";
async function $(i, s, o, e) {
  if (!s) throw new n("post:missing-guid", "guid for version is missing");
  const t = f(i), r = o.toJSON(), a = u(t.query, { query: m({ ...r, f: "json" }), ...e, method: "post" });
  s.startsWith("{") && (s = s.slice(1, -1));
  const d = `${t.path}/versions/${s}/deleteForwardEdits`, { data: c } = await p(d, a);
  return c;
}
export {
  $ as deleteForwardEdits
};
//# sourceMappingURL=deleteForwardEdits-C7i7TdIy.js.map
