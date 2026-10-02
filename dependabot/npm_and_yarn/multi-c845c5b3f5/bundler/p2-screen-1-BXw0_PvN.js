import { createBlock as e, createElementVNode as t, createTextVNode as n, defineComponent as r, openBlock as i, resolveComponent as a, toDisplayString as o, unref as s, withCtx as c } from "vue";
import { useI18n as l } from "vue-i18n";
//#region src/fixtures/gazebo/p2-screen-1.vue?vue&type=script&setup=true&lang.ts
var u = { class: "flex flex-row justify-center items-center mt-16" }, d = { class: "mt-16" }, f = /* @__PURE__ */ r({
	__name: "p2-screen-1",
	props: {
		panel: {
			type: Object,
			required: !0
		},
		greeting: { type: String }
	},
	setup(r) {
		let { t: f } = l();
		return (l, p) => {
			let m = a("panel-screen");
			return i(), e(m, { panel: r.panel }, {
				header: c(() => [...p[2] ||= [n(" Gazebo/Panel 2/Screen A ", -1)]]),
				content: c(() => [
					n(o(s(f)("gz.hello")) + " ", 1),
					t("div", u, [t("button", {
						type: "button",
						onClick: p[0] ||= (e) => r.panel.show({
							screen: "p-2-screen-2",
							props: { greeting: "Howdy?" }
						}),
						class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
					}, " Go back to B "), t("button", {
						type: "button",
						onClick: p[1] ||= (e) => r.panel.show("p-2-screen-3"),
						class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
					}, " Go to C ")]),
					t("p", d, o(r.greeting), 1)
				]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { f as default };
