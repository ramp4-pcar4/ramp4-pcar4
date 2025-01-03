import { s as S, y as $, C as w, I as b, p as f, R as N, b as D, c as U, e as j, x, j as g, k as d, w as F, m as I } from "./main-C4pF0E7B.js";
import { c as k, a as h } from "./devEnvironmentUtils-Dc_oIuhN.js";
function T(e, t, l, n) {
  const a = e.name;
  return a == null ? Promise.reject(new S("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference")) : e.styleName && e.styleName === "Esri2DPointSymbolsStyle" ? C(a, t, n) : $(e, t, n).then((o) => A(o, a, t, l, I, n));
}
function v(e, t) {
  return t.items.find((l) => l.name === e);
}
function A(e, t, l, n, a, o) {
  const s = l?.portal != null ? l.portal : w.getDefault(), c = { portal: s, url: b(e.baseUrl), origin: "portal-item" }, m = v(t, e.data);
  if (!m) {
    const u = `The symbol name '${t}' could not be found`;
    return Promise.reject(new S("symbolstyleutils:symbol-name-not-found", u, { symbolName: t }));
  }
  let i = f(a(m, n), c), y = m.thumbnail?.href ?? null;
  const p = m.thumbnail?.imageData;
  k() && (i = h(i) ?? "", y = h(y));
  const P = { portal: s, url: b(N(i)), origin: "portal-item" };
  return D(i, o).then((u) => {
    const O = n === "cimRef" ? U(u.data) : u.data, r = j(O, P);
    if (r && x(r)) {
      if (y) {
        const R = f(y, c);
        r.thumbnail = new g({ url: R });
      } else p && (r.thumbnail = new g({ url: `data:image/png;base64,${p}` }));
      e.styleUrl ? r.styleOrigin = new d({ portal: l.portal, styleUrl: e.styleUrl, name: t }) : e.styleName && (r.styleOrigin = new d({ portal: l.portal, styleName: e.styleName, name: t }));
    }
    return r;
  });
}
function C(e, t, l) {
  const n = F.replaceAll(/\{SymbolName\}/gi, e), a = t.portal != null ? t.portal : w.getDefault();
  return D(n, l).then((o) => {
    const s = U(o.data);
    return j(s, { portal: a, url: b(N(n)), origin: "portal-item" });
  });
}
export {
  A as fetchSymbolFromStyle,
  v as getStyleItemFromStyle,
  T as resolveWebStyleSymbol
};
//# sourceMappingURL=webStyleSymbolUtils-Dt8G9bIY.js.map
