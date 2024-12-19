import { v as l, z as d, A as o, B as u, D as p } from "./main-C4pF0E7B.js";
const m = () => p.getLogger("esri.intl.substitute");
function h(e, t, s = {}) {
  const { format: n = {} } = s;
  return l(e, (r) => b(r, t, n));
}
function b(e, t, s) {
  let n, r;
  const a = e.indexOf(":");
  if (a === -1 ? n = e.trim() : (n = e.slice(0, a).trim(), r = e.slice(a + 1).trim()), !n) return "";
  const i = d(n, t);
  if (i == null) return "";
  const f = (r ? s?.[r] : null) ?? s?.[n];
  return f ? g(i, f) : r ? w(i, r) : c(i);
}
function g(e, t) {
  switch (t.type) {
    case "date":
      return u(e, t.intlOptions);
    case "number":
      return o(e, t.intlOptions);
    default:
      return m().warn("missing format descriptor for key {key}"), c(e);
  }
}
function w(e, t) {
  switch (t.toLowerCase()) {
    case "dateformat":
      return u(e);
    case "numberformat":
      return o(e);
    default:
      return m().warn(`inline format is unsupported since 4.12: ${t}`), /^(dateformat|datestring)/i.test(t) ? u(e) : /^numberformat/i.test(t) ? o(e) : c(e);
  }
}
function c(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return o(e);
    case "boolean":
      return "" + e;
    default:
      return e instanceof Date ? u(e) : "";
  }
}
export {
  h as s
};
//# sourceMappingURL=substitute-DPdfIuLM.js.map
