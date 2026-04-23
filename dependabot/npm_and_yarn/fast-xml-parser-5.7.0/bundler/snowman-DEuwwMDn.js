import { s as e } from "./main-BtLSZphp.js";
import { createBlock as t, createElementBlock as n, createElementVNode as r, defineComponent as i, inject as a, onMounted as o, openBlock as s, ref as c, resolveComponent as l, withCtx as u } from "vue";
//#region src/fixtures/snowman/snowman.vue?vue&type=script&setup=true&lang.ts
var d = ["src"], f = /* @__PURE__ */ i({
	__name: "snowman",
	props: {
		fixture: {
			type: e,
			required: !0
		},
		message: String
	},
	setup(e) {
		let t = e, i = c(), a = c("https://i.imgur.com/p13yknD.png");
		return o(() => {
			setTimeout(() => {
				i.value.parentNode.removeChild(i.value), t.fixture.remove();
			}, 6e3);
		}), (e, t) => (s(), n("div", {
			class: "absolute top-0 right-0",
			ref_key: "el",
			ref: i
		}, [r("img", {
			style: { width: "250px" },
			src: a.value,
			alt: "Snowman",
			srcset: ""
		}, null, 8, d)], 512));
	}
}), p = /* @__PURE__ */ i({
	__name: "appbar-button",
	setup(e) {
		let n = a("iApi"), i = () => {
			n.fixture.add("snowman");
		};
		return (e, n) => {
			let a = l("appbar-button", !0);
			return s(), t(a, {
				onClickFunction: i,
				tooltip: "⛄"
			}, {
				default: u(() => [...n[0] ||= [r("span", { class: "block h-24" }, "⛄", -1)]]),
				_: 1
			});
		};
	}
}), m = class extends e {
	added() {
		this.$iApi.component("snowman-appbar-button", p);
		let { el: e } = this.mount(f, {
			app: this.$element,
			props: {
				message: "This is a snowman prop.",
				fixture: this
			}
		});
		this.$vApp.$el.appendChild(e.childNodes[0]);
	}
	removed() {}
};
//#endregion
export { m as default };
