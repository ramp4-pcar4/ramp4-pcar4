import { t as e } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { createBlock as t, createElementBlock as n, createElementVNode as r, createTextVNode as i, defineComponent as a, onBeforeUnmount as o, openBlock as s, reactive as c, ref as l, toDisplayString as u, toRef as d, unref as f, watch as p, withKeys as m, withModifiers as h } from "vue";
import g from "@vueform/toggle";
//#region src/components/controls/toggle-switch-control.vue?vue&type=script&setup=true&lang.ts
var _ = { class: "flex flex-row rv-label" }, v = { class: "flex items-center" }, y = ["innerHTML"], b = /* @__PURE__ */ e(/* @__PURE__ */ a({
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
	setup(e, { emit: a }) {
		let b = a, x = e, S = l(x.config.value), C = l(!!x.config.disabled), w = l(0), T = c([]), E = l(null);
		T.push(p(d(x, "config"), (e, t) => {
			S.value = e.value, C.value = !!e.disabled, w.value += C.value === t.disabled ? 0 : 1;
		}, { deep: !0 }), p(E, (e) => {
			e && O();
		}));
		let D = () => {
			C.value || (S.value = !S.value, b("toggled", S.value));
		}, O = () => {
			if (E.value) {
				let e = E.value.querySelector("input[type=\"checkbox\"]");
				e && x.ariaLabel && e.setAttribute("aria-label", x.ariaLabel);
			}
		};
		return o(() => {
			T.forEach((e) => e());
		}), (a, o) => (s(), n("div", _, [
			r("div", v, [r("div", {
				innerHTML: e.icon,
				class: "p-8 pl-0"
			}, null, 8, y), i(" " + u(e.name), 1)]),
			o[2] ||= r("div", { class: "flex-1" }, null, -1),
			r("div", {
				ref_key: "toggleWrapper",
				ref: E
			}, [(s(), t(f(g), {
				onChange: o[0] ||= (e) => b("toggled", e),
				onKeyupCapture: [m(h(D, ["stop"]), ["enter"]), m(h(D, ["stop"]), ["space"])],
				disabled: C.value,
				key: w.value,
				modelValue: S.value,
				"onUpdate:modelValue": o[1] ||= (e) => S.value = e,
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
			}, null, 8, [
				"onKeyupCapture",
				"disabled",
				"modelValue"
			]))], 512)
		]));
	}
}), [["__scopeId", "data-v-f2650ee4"]]);
//#endregion
export { b as t };
