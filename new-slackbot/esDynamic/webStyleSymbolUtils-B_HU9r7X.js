import { s as S, c as x, Q as w, I as c, u as f, R as N, e as D, g as U, h as j, x as F, j as g, k as h, w as I, m as k } from "./main-BpIyUAdL.js";
import { c as v, a as d } from "./devEnvironmentUtils-9UFm-1ui.js";
function W(e, t, l, n) {
  const a = e.name;
  return a == null ? Promise.reject(new S("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference")) : e.styleName && e.styleName === "Esri2DPointSymbolsStyle" ? M(a, t, n) : x(e, t, n).then((s) => E(s, a, t, l, k, n));
}
function A(e, t) {
  return t.items.find((l) => l.name === e);
}
function E(e, t, l, n, a, s) {
  const o = l?.portal != null ? l.portal : w.getDefault(), b = { portal: o, url: c(e.baseUrl), origin: "portal-item" }, m = A(t, e.data);
  if (!m) {
    const y = `The symbol name '${t}' could not be found`;
    return Promise.reject(new S("symbolstyleutils:symbol-name-not-found", y, { symbolName: t }));
  }
  let i = f(a(m, n), b), u = m.thumbnail?.href ?? null;
  const p = m.thumbnail?.imageData;
  v() && (i = d(i) ?? "", u = d(u));
  const P = { portal: o, url: c(N(i)), origin: "portal-item" };
  return D(i, s).then((y) => {
    const O = n === "cimRef" ? U(y.data) : y.data, r = j(O, P);
    if (r && F(r)) {
      if (u) {
        const R = f(u, b);
        r.thumbnail = new g({ url: R });
      } else p && (r.thumbnail = new g({ url: `data:image/png;base64,${p}` }));
      e.styleUrl ? r.styleOrigin = new h({ portal: l.portal, styleUrl: e.styleUrl, name: t }) : e.styleName && (r.styleOrigin = new h({ portal: l.portal, styleName: e.styleName, name: t }));
    }
    return r;
  });
}
function M(e, t, l) {
  const n = I.replaceAll(/\{SymbolName\}/gi, e), a = t.portal != null ? t.portal : w.getDefault();
  return D(n, l).then((s) => {
    const o = U(s.data);
    return j(o, { portal: a, url: c(N(n)), origin: "portal-item" });
  });
}
export {
  E as fetchSymbolFromStyle,
  A as getStyleItemFromStyle,
  W as resolveWebStyleSymbol
};
//# sourceMappingURL=webStyleSymbolUtils-B_HU9r7X.js.map
