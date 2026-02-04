import { defineComponent as h, ref as r, reactive as w, watch as b, toRef as O, onBeforeUnmount as k, createElementBlock as _, openBlock as p, createElementVNode as i, createTextVNode as D, toDisplayString as L, createBlock as T, unref as j, withKeys as y, withModifiers as v } from "vue";
import K from "@vueform/toggle";
import { _ as S } from "./main-6dWPqJr6.js";
const V = { class: "flex flex-row rv-label" }, B = { class: "flex items-center" }, C = ["innerHTML"], E = /* @__PURE__ */ h({
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
  setup(s, { emit: m }) {
    const d = m, o = s, l = r(o.config.value), a = r(!!o.config.disabled), g = r(0), c = w([]), n = r(null);
    c.push(
      b(
        O(o, "config"),
        (e, t) => {
          l.value = e.value, a.value = !!e.disabled, g.value += a.value !== t.disabled ? 1 : 0;
        },
        { deep: !0 }
      ),
      b(n, (e) => {
        e && x();
      })
    );
    const f = () => {
      a.value || (l.value = !l.value, d("toggled", l.value));
    }, x = () => {
      if (n.value) {
        const e = n.value.querySelector('input[type="checkbox"]');
        e && o.ariaLabel && e.setAttribute("aria-label", o.ariaLabel);
      }
    };
    return k(() => {
      c.forEach((e) => e());
    }), (e, t) => (p(), _("div", V, [
      i("div", B, [
        i("div", {
          innerHTML: s.icon,
          class: "p-8 pl-0"
        }, null, 8, C),
        D(" " + L(s.name), 1)
      ]),
      t[2] || (t[2] = i("div", { class: "flex-1" }, null, -1)),
      i("div", {
        ref_key: "toggleWrapper",
        ref: n
      }, [
        (p(), T(j(K), {
          onChange: t[0] || (t[0] = (u) => d("toggled", u)),
          onKeyupCapture: [
            y(v(f, ["stop"]), ["enter"]),
            y(v(f, ["stop"]), ["space"])
          ],
          disabled: a.value,
          key: g.value,
          modelValue: l.value,
          "onUpdate:modelValue": t[1] || (t[1] = (u) => l.value = u),
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
}), H = /* @__PURE__ */ S(E, [["__scopeId", "data-v-f2650ee4"]]);
export {
  H as T
};
