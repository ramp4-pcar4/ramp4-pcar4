import { B as e, s as t } from "./main-BtLSZphp.js";
import { t as n } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { createElementBlock as r, createElementVNode as i, defineComponent as a, inject as o, normalizeClass as s, onBeforeUnmount as c, onMounted as l, openBlock as u, ref as d } from "vue";
//#endregion
//#region src/fixtures/crosshairs/crosshairs.vue
var f = /* @__PURE__ */ n(/* @__PURE__ */ a({
	__name: "crosshairs",
	setup(t) {
		let n = o("iApi"), a = d(!1), f = d([]);
		return l(() => {
			f.value.push(n.event.on(e.MAP_EXTENTCHANGE, () => {
				n.geo.map.keysActive && (a.value = !0);
			})), f.value.push(n.event.on(e.MAP_FOCUS, () => {
				n.geo.map.mouseFocus || (a.value = !0);
			})), f.value.push(n.event.on(e.MAP_MOUSEDOWN, () => {
				a.value = !1;
			})), f.value.push(n.event.on(e.MAP_BLUR, () => {
				a.value = !1;
			}));
		}), c(() => {
			f.value.forEach((e) => n.event.off(e));
		}), (e, t) => (u(), r("div", { class: s(["crosshairs absolute duration-150 top-1/2 left-1/2 h-230 w-230", { "opacity-0": !a.value }]) }, [...t[0] ||= [i("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fit: "",
			height: "100%",
			width: "100%",
			preserveAspectRatio: "xMidYMid meet",
			viewBox: "0 0 24 24",
			focusable: "false"
		}, [i("g", {
			fill: "#545353",
			stroke: "#fff",
			id: "crosshairs"
		}, [
			i("ellipse", {
				ry: ".254",
				rx: ".262",
				id: "path3808",
				cx: "12",
				cy: "12",
				"stroke-width": ".076"
			}),
			i("path", {
				d: "M.045 12.047l6.093.051 4.264.068v-.332l-4.264.067-6.093.064v.039z",
				id: "rect4632-6",
				"stroke-width": ".09"
			}),
			i("path", {
				d: "M12.047 23.955l.051-6.093.068-4.264h-.332l.067 4.264.064 6.093h.039z",
				id: "rect4632-6-0",
				"stroke-width": ".09"
			}),
			i("path", {
				d: "M23.955 11.953l-6.093-.051-4.264-.068v.332l4.264-.067 6.093-.064v-.039z",
				id: "rect4632-6-4",
				"stroke-width": ".09"
			}),
			i("path", {
				d: "M11.953.045l-.051 6.093-.068 4.264h.332l-.067-4.264-.064-6.093h-.039z",
				id: "rect4632-6-9",
				"stroke-width": ".09"
			})
		])], -1)]], 2));
	}
}), [["__scopeId", "data-v-ed3d079c"]]), p = class extends t {
	added() {
		let { destroy: e, el: t } = this.mount(f, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this.removed = () => {
			e();
		};
	}
};
//#endregion
export { p as default };
