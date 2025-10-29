import { i as k, q as m, c as w } from "./dom-C63VhwMK.js";
import { c as y } from "./component-CR3VB33V.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
const h = "calciteInternalLabelClick", E = "calciteInternalLabelConnected", f = "calciteInternalLabelDisconnected", L = "calcite-label", r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new Set(), M = (e) => {
  const { id: t } = e, l = t && m(e, { selector: `${L}[for="${t}"]` });
  if (l)
    return l;
  const a = w(e, L);
  return !a || // labelable components within other custom elements are not considered labelable
  D(a, e) ? null : a;
};
function D(e, t) {
  let l;
  const a = "custom-element-ancestor-check", o = (n) => {
    n.stopImmediatePropagation();
    const u = n.composedPath();
    l = u.slice(u.indexOf(t), u.indexOf(e));
  };
  return e.addEventListener(a, o, { once: !0 }), t.dispatchEvent(new CustomEvent(a, { composed: !0, bubbles: !0 })), e.removeEventListener(a, o), l.filter((n) => n !== t && n !== e).filter((n) => n.tagName?.includes("-")).length > 0;
}
function v(e) {
  if (!e)
    return;
  const t = M(e.el);
  if (i.has(t) && t === e.labelEl || !t && s.has(e))
    return;
  const l = x.bind(e);
  if (t) {
    e.labelEl = t;
    const a = r.get(t) || [];
    a.push(e), r.set(t, a.sort(g)), i.has(e.labelEl) || (i.set(e.labelEl, C), e.labelEl.addEventListener(h, C)), s.delete(e), document.removeEventListener(E, c.get(e)), d.set(e, l), document.addEventListener(f, l);
  } else s.has(e) || (l(), document.removeEventListener(f, d.get(e)));
}
function B(e) {
  if (!e || (s.delete(e), document.removeEventListener(E, c.get(e)), document.removeEventListener(f, d.get(e)), c.delete(e), d.delete(e), !e.labelEl))
    return;
  const t = r.get(e.labelEl);
  t.length === 1 && (e.labelEl.removeEventListener(h, i.get(e.labelEl)), i.delete(e.labelEl)), r.set(e.labelEl, t.filter((l) => l !== e).sort(g)), e.labelEl = null;
}
function g(e, t) {
  return k(e.el, t.el) ? -1 : 1;
}
function W(e) {
  return e.label || e.labelEl?.textContent?.trim() || "";
}
function C(e) {
  const t = e.detail.sourceEvent.target, l = r.get(this), a = l.find((n) => n.el === t);
  if (l.includes(a))
    return;
  const b = l[0];
  b.disabled || b.onLabelClick(e);
}
function O() {
  s.has(this) && v(this);
}
function x() {
  s.add(this);
  const e = c.get(this) || O.bind(this);
  c.set(this, e), document.addEventListener(E, e);
}
async function q(e) {
  if (await y(e), r.has(e))
    return;
  const l = e.ownerDocument?.getElementById(e.for);
  l && requestAnimationFrame(() => {
    for (const a of s)
      if (a.el === l) {
        v(a);
        break;
      }
  });
}
export {
  q as a,
  f as b,
  v as c,
  B as d,
  W as g,
  E as l
};
//# sourceMappingURL=label2-BaEz5e-W.js.map
