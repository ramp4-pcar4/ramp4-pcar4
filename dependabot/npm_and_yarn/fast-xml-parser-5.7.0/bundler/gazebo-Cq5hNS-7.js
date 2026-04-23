import { s as e } from "./main-BtLSZphp.js";
import { createBlock as t, createElementVNode as n, createTextVNode as r, defineComponent as i, inject as a, markRaw as o, normalizeStyle as s, openBlock as c, resolveComponent as l, toDisplayString as u, unref as d, withCtx as f } from "vue";
import { useI18n as p } from "vue-i18n";
//#endregion
//#region src/fixtures/gazebo/appbar-button.vue
var m = /* @__PURE__ */ i({
	__name: "appbar-button",
	props: { options: { type: Object } },
	setup(e) {
		let r = a("iApi"), i = () => {
			r.panel.toggle({
				id: "p2",
				screen: "p-2-screen-2"
			});
		};
		return (r, a) => {
			let o = l("appbar-button", !0);
			return c(), t(o, {
				onClickFunction: i,
				tooltip: "Gazebo"
			}, {
				default: f(() => [n("span", { style: s({ color: e.options?.colour ?? "#BDBDBD" }) }, "G ", 4)]),
				_: 1
			});
		};
	}
}), h = { class: "flex flex-col items-center" }, g = /* @__PURE__ */ i({
	__name: "p1-screen-1",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (i, a) => {
			let o = l("panel-screen");
			return c(), t(o, { panel: e.panel }, {
				header: f(() => [...a[1] ||= [r(" Gazebo/Panel 1/Screen A ", -1)]]),
				controls: f(() => [...a[2] ||= [
					n("a", { href: "javascript:;" }, "Option 1", -1),
					n("a", { href: "javascript:;" }, "Option 2", -1),
					n("a", { href: "javascript:;" }, "Option 3", -1)
				]]),
				content: f(() => [n("div", h, [
					n("button", {
						type: "button",
						onClick: a[0] ||= (t) => e.panel.show({ screen: "p-1-screen-2" }),
						class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
					}, " See Gazebo 2 "),
					a[3] ||= n("br", null, null, -1),
					a[4] ||= n("img", {
						src: "https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",
						alt: "Gazebo1"
					}, null, -1)
				])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), _ = { class: "flex flex-col items-center" }, v = /* @__PURE__ */ i({
	__name: "p1-screen-2",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		return (i, a) => {
			let o = l("panel-screen");
			return c(), t(o, { panel: e.panel }, {
				header: f(() => [...a[1] ||= [r(" Gazebo/Panel 1/Screen B ", -1)]]),
				content: f(() => [n("div", _, [
					n("button", {
						type: "button",
						onClick: a[0] ||= (t) => e.panel.show({ screen: "p-1-screen-1" }),
						class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
					}, " See Gazebo 1 "),
					a[2] ||= n("br", null, null, -1),
					a[3] ||= n("img", {
						src: "http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",
						alt: "Gazebo2"
					}, null, -1)
				])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), y = { class: "flex flex-row justify-center items-center mt-16" }, b = { class: "mt-16" }, x = /* @__PURE__ */ i({
	__name: "p2-screen-2",
	props: {
		panel: {
			type: Object,
			required: !0
		},
		greeting: { type: String }
	},
	setup(e) {
		let i = e, { t: o } = p(), s = a("iApi"), m = () => {
			i.panel.show("p-2-screen-3"), s.event.emit("gazebo/beholdMyText", "I am a cat");
		};
		return (i, a) => {
			let s = l("panel-screen");
			return c(), t(s, { panel: e.panel }, {
				header: f(() => [...a[2] ||= [r(" Gazebo/Panel 2/Screen B ", -1)]]),
				content: f(() => [
					r(u(d(o)("gz.hello2")) + " ", 1),
					n("div", y, [n("button", {
						type: "button",
						onClick: a[0] ||= (t) => e.panel.show({
							screen: "p-2-screen-1",
							props: { greeting: "Greeting from Screen B" }
						}),
						class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
					}, " Switch to Screen A "), n("button", {
						type: "button",
						onClick: a[1] ||= (e) => m(),
						class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
					}, " See a cat ")]),
					n("p", b, u(e.greeting), 1)
				]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), S = { class: "flex flex-col items-center mt-16" }, C = { class: "ml-32 font-bold" }, w = { class: "ml-32 font-bold" }, T = { class: "ml-32 font-bold" }, E = /* @__PURE__ */ i({
	__name: "p2-screen-3",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let { t: i } = p({ messages: {
			en: {
				lang_native: "En",
				who: "[me cat]"
			},
			fr: {
				lang_native: "Fr",
				who: "[moi chat]"
			}
		} });
		return (a, o) => {
			let s = l("panel-screen");
			return c(), t(s, { panel: e.panel }, {
				header: f(() => [...o[1] ||= [r(" Gazebo/Panel 2/Screen C ", -1)]]),
				content: f(() => [n("div", S, [
					n("button", {
						type: "button",
						onClick: o[0] ||= (t) => e.panel.show({
							screen: "p-2-screen-1",
							props: { greeting: "Greeting from Screen C" }
						}),
						class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
					}, " Switch to Screen A "),
					o[5] ||= n("img", {
						class: "my-16",
						src: "https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",
						alt: "",
						srcset: ""
					}, null, -1),
					o[6] ||= n("p", null, "Locale merging:", -1),
					n("dl", null, [
						o[2] ||= n("dt", null, "global locale:", -1),
						n("dd", C, u(d(i)("lang_native")), 1),
						o[3] ||= n("dt", null, "fixture locale:", -1),
						n("dd", w, u(d(i)("gz.hello")), 1),
						o[4] ||= n("dt", null, "common panels locale:", -1),
						n("dd", T, u(d(i)("who")), 1)
					])
				])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), D = {
	en: {
		"gz.hello": "I'm a simple panel - but from a locale file",
		"gz.hello2": "I'm a simple panel",
		"gz.alert1": "Gazebo",
		"gz.alert2": "Gazebo two"
	},
	fr: {
		"gz.hello": "Bonjour. Je suis un panel\"",
		"gz.hello2": "Bonjour. Je suis un panel\"",
		"gz.alert1": "Gazebo",
		"gz.alert2": "Gazebo deux"
	}
}, O = "gazebo/beholdMyText", k = class extends e {
	added() {
		this.$iApi.event.registerEventName(O), this.$iApi.component("gazebo-appbar-button", m), this.$iApi.panel.register({
			id: "p1",
			config: {
				screens: {
					"p-1-screen-1": o(g),
					"p-1-screen-2": o(v)
				},
				style: {
					"flex-grow": "1",
					"max-width": "500px"
				},
				alertName: "gz.alert1"
			}
		}, { i18n: { messages: D } }), this.$iApi.panel.register({
			id: "p2",
			config: {
				screens: {
					"p-2-screen-1": () => new Promise((e) => setTimeout(() => import("./p2-screen-1-CrRAj-2U.js").then((t) => {
						e(t);
					}), 2e3)),
					"p-2-screen-2": o(x),
					"p-2-screen-3": () => new Promise((e) => e(o(E)))
				},
				style: {
					"flex-grow": "1",
					"max-width": "500px"
				},
				alertName: "gz.alert2"
			}
		}, { i18n: { messages: D } }), this.handlePanelTeleports(["p1", "p2"]);
	}
};
//#endregion
export { k as default };
