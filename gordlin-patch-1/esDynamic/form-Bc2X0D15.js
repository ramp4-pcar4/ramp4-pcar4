import { q as M, c as C } from "./dom-DkH2gtZS.js";
import { cD as S } from "./main-BEi6lHs4.js";
const V = [
  "calcite-input",
  "calcite-input-number",
  "calcite-input-text",
  "calcite-text-area"
];
function y(e) {
  return `${e.split("-").map((n, s) => s === 0 ? n : `${n[0].toUpperCase()}${n.slice(1)}`).join("")}${V.includes(e) ? "Input" : "Change"}`;
}
const f = "hidden-form-input";
function v(e) {
  return "checked" in e;
}
const m = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakSet();
function L(e, t) {
  if (C(t.parentElement, "[form]"))
    return !0;
  const n = "calciteInternalFormComponentRegister";
  let s = !1;
  return e.addEventListener(n, (i) => {
    s = i.composedPath().some((l) => h.has(l)), i.stopPropagation();
  }, { once: !0 }), t.dispatchEvent(new CustomEvent(n, {
    bubbles: !0,
    composed: !0
  })), s;
}
function b(e) {
  "status" in e && (e.status = "idle"), "validationIcon" in e && (e.validationIcon = !1), "validationMessage" in e && (e.validationMessage = "");
}
function R(e, t) {
  "status" in e && (e.status = "invalid"), "validationIcon" in e && !e.validationIcon && (e.validationIcon = !0), "validationMessage" in e && !e.validationMessage && (e.validationMessage = t);
}
function g(e) {
  const t = e?.target, a = t?.parentElement, n = a?.nodeName?.toLowerCase(), s = n?.split("-");
  if (s.length < 2 || s[0] !== "calcite" || (e?.preventDefault(), R(a, t?.validationMessage), a?.validationMessage !== t?.validationMessage))
    return;
  const i = y(n);
  a.addEventListener(i, () => b(a), {
    once: !0
  });
}
function W(e) {
  const { formEl: t } = e;
  return t ? (t.addEventListener("invalid", g, !0), t.requestSubmit(), t.removeEventListener("invalid", g, !0), requestAnimationFrame(() => {
    const a = t.querySelectorAll("[status=invalid]");
    for (const n of a)
      if (n?.validationMessage) {
        n?.setFocus();
        break;
      }
  }), !0) : !1;
}
function $(e) {
  e.formEl?.reset();
}
function D(e) {
  const { el: t, value: a } = e, n = H(e);
  if (!n || L(n, t))
    return;
  e.formEl = n, e.defaultValue = a, v(e) && (e.defaultChecked = e.checked);
  const s = (e.onFormReset || q).bind(e);
  n.addEventListener("reset", s), m.set(e.el, s), h.add(t);
}
function H(e) {
  const { el: t, form: a } = e;
  return a ? M(t, { id: a }) : C(t, "form");
}
function q() {
  if (b(this), v(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue;
}
function N(e) {
  const { el: t, formEl: a } = e;
  if (!a)
    return;
  const n = m.get(t);
  a.removeEventListener("reset", n), m.delete(t), e.formEl = null, h.delete(t);
}
const w = "calciteInternalHiddenInputInput", p = (e) => {
  e.target.dispatchEvent(new CustomEvent(w, { bubbles: !0 }));
}, F = (e) => e.removeEventListener("input", p);
function A(e) {
  const { el: t, formEl: a, name: n, value: s } = e, { ownerDocument: i } = t, l = t.querySelectorAll(`input[slot="${f}"]`);
  if (!a || !n) {
    l.forEach((r) => {
      F(r), r.remove();
    });
    return;
  }
  const u = Array.isArray(s) ? s : [s], c = [], E = /* @__PURE__ */ new Set();
  l.forEach((r) => {
    const o = u.find((k) => (
      /* intentional non-strict equality check */
      k == r.value
    ));
    o != null ? (E.add(o), I(e, r, o)) : c.push(r);
  });
  let d;
  u.forEach((r) => {
    if (E.has(r))
      return;
    let o = c.pop();
    o || (o = i.createElement("input"), o.slot = f), d || (d = i.createDocumentFragment()), d.append(o), o.addEventListener("input", p), I(e, o, r);
  }), d && t.append(d), c.forEach((r) => {
    F(r), r.remove();
  });
}
function I(e, t, a) {
  const { defaultValue: n, disabled: s, form: i, name: l, required: u } = e;
  t.defaultValue = n, t.disabled = s, t.name = l, t.required = u, t.tabIndex = -1, i ? t.setAttribute("form", i) : t.removeAttribute("form"), v(e) ? (t.checked = e.checked, t.defaultChecked = e.defaultChecked, t.value = e.checked ? a || "on" : "") : t.value = a || "", e.syncHiddenFormInput?.(t);
}
const T = ({ component: e }) => (A(e), S("slot", { name: f }));
export {
  T as H,
  D as c,
  N as d,
  H as f,
  w as i,
  $ as r,
  W as s
};
//# sourceMappingURL=form-Bc2X0D15.js.map
