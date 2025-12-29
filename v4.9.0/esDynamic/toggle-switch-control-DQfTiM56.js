import { il as k, bI as m, bN as x, bT as L, bS as T, i3 as B, fC as b, fD as w, im as _, fI as N, io as H, ij as V, ii as D, bC as K, bF as O, ip as M, fH as j, iq as I, bH as z, bO as A, bP as E, bL as P, bQ as R, i4 as U } from "./main-DIdq27YS.js";
var C = { name: "Toggle", emits: ["input", "update:modelValue", "change"], props: { value: { validator: function(l) {
  return (n) => ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
}, required: !1 }, modelValue: { validator: function(l) {
  return (n) => ["number", "string", "boolean"].indexOf(typeof n) !== -1 || n == null;
}, required: !1 }, id: { type: [String, Number], required: !1, default: "toggle" }, name: { type: [String, Number], required: !1, default: "toggle" }, disabled: { type: Boolean, required: !1, default: !1 }, required: { type: Boolean, required: !1, default: !1 }, falseValue: { type: [String, Number, Boolean], required: !1, default: !1 }, trueValue: { type: [String, Number, Boolean], required: !1, default: !0 }, onLabel: { type: [String, Object], required: !1, default: "" }, offLabel: { type: [String, Object], required: !1, default: "" }, classes: { type: Object, required: !1, default: () => ({}) }, labelledby: { type: String, required: !1 }, describedby: { type: String, required: !1 }, aria: { required: !1, type: Object, default: () => ({}) } }, setup(l, n) {
  const t = function(i, c, o) {
    const { value: d, modelValue: r, falseValue: a, trueValue: e, disabled: f } = k(i), u = r && r.value !== void 0 ? r : d, h = m(() => u.value === e.value), y = (p) => {
      c.emit("input", p), c.emit("update:modelValue", p), c.emit("change", p);
    }, S = () => {
      y(e.value);
    }, q = () => {
      y(a.value);
    };
    return [null, void 0, !1, 0, "0", "off"].indexOf(u.value) !== -1 && [a.value, e.value].indexOf(u.value) === -1 && q(), [!0, 1, "1", "on"].indexOf(u.value) !== -1 && [a.value, e.value].indexOf(u.value) === -1 && S(), { externalValue: u, checked: h, update: y, check: S, uncheck: q, handleInput: (p) => {
      y(p.target.checked ? e.value : a.value);
    }, handleClick: () => {
      f.value || (h.value ? q() : S());
    } };
  }(l, n), g = function(i, c, o) {
    const { trueValue: d, falseValue: r, onLabel: a, offLabel: e } = k(i), f = o.checked, u = o.update;
    return { label: m(() => {
      let h = f.value ? a.value : e.value;
      return h || (h = "&nbsp;"), h;
    }), toggle: () => {
      u(f.value ? r.value : d.value);
    }, on: () => {
      u(d.value);
    }, off: () => {
      u(r.value);
    } };
  }(l, 0, { checked: t.checked, update: t.update }), s = function(i, c, o) {
    const d = k(i), r = d.disabled, a = o.checked, e = m(() => ({ container: "toggle-container", toggle: "toggle", toggleOn: "toggle-on", toggleOff: "toggle-off", toggleOnDisabled: "toggle-on-disabled", toggleOffDisabled: "toggle-off-disabled", handle: "toggle-handle", handleOn: "toggle-handle-on", handleOff: "toggle-handle-off", handleOnDisabled: "toggle-handle-on-disabled", handleOffDisabled: "toggle-handle-off-disabled", label: "toggle-label", ...d.classes.value }));
    return { classList: m(() => ({ container: e.value.container, toggle: [e.value.toggle, r.value ? a.value ? e.value.toggleOnDisabled : e.value.toggleOffDisabled : a.value ? e.value.toggleOn : e.value.toggleOff], handle: [e.value.handle, r.value ? a.value ? e.value.handleOnDisabled : e.value.handleOffDisabled : a.value ? e.value.handleOn : e.value.handleOff], label: e.value.label })) };
  }(l, 0, { checked: t.checked }), v = function(i, c, o) {
    const { disabled: d } = k(i), r = o.check, a = o.uncheck, e = o.checked;
    return { handleSpace: () => {
      d.value || (e.value ? a() : r());
    } };
  }(l, 0, { check: t.check, uncheck: t.uncheck, checked: t.checked });
  return { ...t, ...s, ...g, ...v };
} };
const W = ["tabindex", "aria-checked", "aria-describedby", "aria-labelledby"], F = ["id", "name", "value", "checked", "disabled"], Q = ["innerHTML"], $ = ["checked"];
C.render = function(l, n, t, g, s, v) {
  return x(), L("div", H({ class: l.classList.container, tabindex: t.disabled ? void 0 : 0, "aria-checked": l.checked, "aria-describedby": t.describedby, "aria-labelledby": t.labelledby, role: "switch" }, t.aria, { onKeypress: n[1] || (n[1] = V(D((...i) => l.handleSpace && l.handleSpace(...i), ["prevent"]), ["space"])) }), [T(b("input", { type: "checkbox", id: t.id, name: t.name, value: t.trueValue, checked: l.checked, disabled: t.disabled }, null, 8, F), [[B, !1]]), b("div", { class: w(l.classList.toggle), onClick: n[0] || (n[0] = (...i) => l.handleClick && l.handleClick(...i)) }, [b("span", { class: w(l.classList.handle) }, null, 2), _(l.$slots, "label", { checked: l.checked, classList: l.classList }, () => [b("span", { class: w(l.classList.label), innerHTML: l.label }, null, 10, Q)]), t.required ? (x(), L("input", { key: 0, type: "checkbox", style: { appearance: "none", height: "1px", margin: "0", padding: "0", fontSize: "0", background: "transparent", position: "absolute", width: "100%", bottom: "0", outline: "none" }, checked: l.checked, "aria-hidden": "true", tabindex: "-1", required: "" }, null, 8, $)) : N("v-if", !0)], 2)], 16, W);
}, C.__file = "src/Toggle.vue";
const G = { class: "flex flex-row rv-label" }, J = { class: "flex items-center" }, X = ["innerHTML"], Y = /* @__PURE__ */ K({
  __name: "toggle-switch-control",
  props: {
    config: {
      type: Object,
      required: !0
    },
    name: String,
    icon: String,
    ariaLabel: String
  },
  emits: ["toggled"],
  setup(l, { emit: n }) {
    const t = n, g = l, s = O(g.config.value), v = O(!!g.config.disabled), i = O(0), c = M([]), o = O(null);
    c.push(
      j(
        I(g, "config"),
        (a, e) => {
          s.value = a.value, v.value = !!a.disabled, i.value += v.value !== e.disabled ? 1 : 0;
        },
        { deep: !0 }
      ),
      j(o, (a) => {
        a && r();
      })
    );
    const d = () => {
      v.value || (s.value = !s.value, t("toggled", s.value));
    }, r = () => {
      if (o.value) {
        const a = o.value.querySelector('input[type="checkbox"]');
        a && g.ariaLabel && a.setAttribute("aria-label", g.ariaLabel);
      }
    };
    return z(() => {
      c.forEach((a) => a());
    }), (a, e) => (x(), L("div", G, [
      b("div", J, [
        b("div", {
          innerHTML: l.icon,
          class: "p-8 pl-0"
        }, null, 8, X),
        A(" " + E(l.name), 1)
      ]),
      e[2] || (e[2] = b("div", { class: "flex-1" }, null, -1)),
      b("div", {
        ref_key: "toggleWrapper",
        ref: o
      }, [
        (x(), P(R(C), {
          onChange: e[0] || (e[0] = (f) => t("toggled", f)),
          onKeyupCapture: [
            V(D(d, ["stop"]), ["enter"]),
            V(D(d, ["stop"]), ["space"])
          ],
          disabled: v.value,
          key: i.value,
          modelValue: s.value,
          "onUpdate:modelValue": e[1] || (e[1] = (f) => s.value = f),
          classes: {
            container: "inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30",
            toggle: "flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none",
            toggleOn: "bg-blue-500 border-blue-500 justify-start text-white",
            toggleOff: "bg-gray-200 border-gray-200 justify-end text-gray-700",
            toggleOnDisabled: "bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed",
            toggleOffDisabled: "bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed",
            handle: "inline-block bg-white w-15 h-15 top-0 rounded-full absolute transition-all",
            handleOn: "left-full transform -translate-x-full",
            handleOff: "left-0",
            handleOnDisabled: "bg-gray-100 left-full transform -translate-x-full",
            handleOffDisabled: "bg-gray-100 left-0",
            label: "text-center w-8 border-box whitespace-nowrap select-none"
          }
        }, null, 8, ["onKeyupCapture", "disabled", "modelValue"]))
      ], 512)
    ]));
  }
}), ee = /* @__PURE__ */ U(Y, [["__scopeId", "data-v-188debd2"]]);
export {
  ee as T
};
//# sourceMappingURL=toggle-switch-control-DQfTiM56.js.map
