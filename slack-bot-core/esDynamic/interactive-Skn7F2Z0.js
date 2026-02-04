import { cD as b } from "./main-CmejC-so.js";
function g() {
  return navigator.userAgentData;
}
function v() {
  const e = g();
  return e?.brands ? e.brands.map(({ brand: t, version: r }) => `${t}/${r}`).join(" ") : navigator.userAgent;
}
const i = /firefox/i.test(v()), n = i ? /* @__PURE__ */ new WeakMap() : null;
function E() {
  const { disabled: e } = this;
  e || HTMLElement.prototype.click.call(this);
}
function u(e) {
  const t = e.target;
  if (i && !n.get(t))
    return;
  const { disabled: r } = t;
  r && e.preventDefault();
}
const o = ["mousedown", "mouseup", "click"];
function l(e) {
  const t = e.target;
  i && !n.get(t) || t.disabled && (e.stopImmediatePropagation(), e.preventDefault());
}
const a = { capture: !0 };
function h(e) {
  if (e.disabled) {
    e.el.setAttribute("aria-disabled", "true"), e.el.contains(document.activeElement) && document.activeElement.blur(), d(e);
    return;
  }
  f(e), e.el.removeAttribute("aria-disabled");
}
function d(e) {
  if (e.el.click = E, i) {
    const t = I(e), r = n.get(e.el);
    r !== t && (s(r), n.set(e.el, t)), c(n.get(e.el));
    return;
  }
  c(e.el);
}
function c(e) {
  e && (e.addEventListener("pointerdown", u, a), o.forEach((t) => e.addEventListener(t, l, a)));
}
function I(e) {
  return e.el.parentElement || e.el;
}
function f(e) {
  if (delete e.el.click, i) {
    s(n.get(e.el)), n.delete(e.el);
    return;
  }
  s(e.el);
}
function s(e) {
  e && (e.removeEventListener("pointerdown", u, a), o.forEach((t) => e.removeEventListener(t, l, a)));
}
function L(e) {
  !e.disabled || !i || d(e);
}
function A(e) {
  i && f(e);
}
const D = {
  container: "interaction-container"
};
function P({ disabled: e }, t) {
  return b("div", { class: D.container, inert: e }, ...t);
}
export {
  P as I,
  L as c,
  A as d,
  h as u
};
//# sourceMappingURL=interactive-Skn7F2Z0.js.map
