import { s as l } from "./main-BEi6lHs4.js";
async function d(t) {
  const s = [];
  for (const o of t.allLayers) if ("beforeSave" in o && typeof o.beforeSave == "function") {
    const e = o.beforeSave();
    e && s.push(e);
  }
  await Promise.allSettled(s);
}
const i = /* @__PURE__ */ new Set(["layer:unsupported", "property:unsupported", "symbol:unsupported", "symbol-layer:unsupported", "url:unsupported"]);
function f(t, s, o) {
  let e = (t.messages ?? []).filter(({ type: r }) => r === "error").map(({ name: r, message: p, details: a }) => new l(r, p, a));
  if (t.blockedRelativeUrls && (e = e.concat(t.blockedRelativeUrls.map((r) => new l("url:unsupported", `Relative url '${r}' is not supported`)))), o) {
    const { ignoreUnsupported: r, supplementalUnsupportedErrors: p = [], requiredPropertyChecksDisabled: a } = o;
    r && (e = e.filter(({ name: n }) => !(i.has(n) || p.includes(n)))), a && (e = e.filter((n) => n.name !== "web-document-write:property-required"));
  }
  if (e.length > 0) throw new l(s.errorName, "Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information", { errors: e });
}
export {
  d as r,
  f as t
};
//# sourceMappingURL=saveUtils-JzmZg6tM.js.map
