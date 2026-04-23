import { B as e, pt as t } from "./main-BtLSZphp.js";
import { t as n } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { Fragment as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, normalizeClass as p, onBeforeUnmount as m, onMounted as h, openBlock as g, ref as _, renderList as v, resolveComponent as y, resolveDirective as b, toDisplayString as x, toRaw as S, unref as C, withCtx as w, withDirectives as T } from "vue";
import { useI18n as E } from "vue-i18n";
import D from "vuedraggable";
//#region src/fixtures/layer-reorder/components/reorder-button.vue?vue&type=script&setup=true&lang.ts
var O = [
	"data-layer-id",
	"data-direction",
	"aria-disabled",
	"aria-label"
], k = /* @__PURE__ */ n(/* @__PURE__ */ d({
	__name: "reorder-button",
	props: {
		disabled: { type: Boolean },
		direction: {
			type: String,
			required: !0
		},
		layerId: {
			type: [String, Number],
			required: !0
		}
	},
	setup(e, { expose: t }) {
		let { t: n } = E(), r = _(null);
		return t({ buttonRef: r }), (t, i) => {
			let a = b("tippy");
			return T((g(), s("button", {
				ref_key: "buttonRef",
				ref: r,
				type: "button",
				"data-layer-id": e.layerId,
				"data-direction": e.direction,
				class: p(`
            pb-10 p-8
            ${e.direction === "up" ? "rotate-180" : ""}
            ${e.disabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-black"}
        `),
				"aria-disabled": e.disabled,
				"aria-label": C(n)(`layer-reorder.move.${e.direction}`)
			}, [...i[0] ||= [c("svg", {
				class: "fill-current w-20 h-20",
				viewBox: "0 0 23 21"
			}, [c("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })], -1)]], 10, O)), [[a, {
				content: C(n)(`layer-reorder.move.${e.direction}`),
				placement: "top-start",
				aria: "describedby"
			}]]);
		};
	}
}), [["__scopeId", "data-v-25464b9f"]]), A = {
	key: 0,
	class: "flex-1 ms-10"
}, ee = { class: "p-5" }, j = ["aria-label", "content"], M = {
	class: "display-none",
	ref: "list"
}, N = { class: "flex items-center p-5 h-44 cursor-pointer hover:bg-gray-200" }, P = [
	"onClick",
	"content",
	"aria-label"
], F = {
	key: 0,
	class: "fill-current w-20 h-20 mx-4",
	viewBox: "0 0 24 24"
}, I = {
	key: 1,
	class: "fill-current w-20 h-20 mx-4",
	viewBox: "0 0 24 24"
}, L = { class: "flex-1 mx-10" }, R = {
	key: 0,
	class: "items-center p-5 pl-30 cursor-pointer"
}, z = ["content", "aria-label"], B = ["content", "aria-label"], V = { class: "flex-1 mx-10" }, H = /* @__PURE__ */ d({
	__name: "layer-component",
	setup(n) {
		let a = f("iApi"), { t: d } = E(), y = _([]), O = _({}), H = _({}), U = _([]), W = _([]), G = _([]), K = i(() => a.animate), q = () => {
			let e = {};
			y.value.forEach((t) => {
				e[t.id] = t.isExpanded;
			}), y.value = [];
			let n = a.geo.layer.layerOrderIds(), r = [...S(a.geo.layer.allLayersOnMap(!0))].filter((e) => !e.isCosmetic && e.layerState !== t.ERROR);
			y.value = r.reverse().map((t, r) => {
				let i = n.indexOf(t.id);
				return {
					id: t.id,
					uid: t.uid,
					name: "",
					orderIdx: i,
					componentIdx: r,
					isExpanded: e[t.id] || !1,
					isLoaded: !1,
					supportsSublayers: t.supportsSublayers,
					sublayers: []
				};
			}), r.forEach((e) => {
				e.loadPromise().then(() => {
					J(e);
				}).catch(() => 1);
			});
		}, J = (e) => {
			let t = y.value.find((t) => t.id === e.id);
			t && (t.name = e.name, t.sublayers = e.sublayers.filter((e) => e !== void 0 && !e.isRemoved).map((e) => ({
				id: e.id,
				name: e.name
			})), t.isLoaded = !0);
		}, Y = (e) => {
			e.supportsSublayers && (e.isExpanded = !e.isExpanded, a.updateAlert(d(e.isExpanded ? "layer-reorder.expanded" : "layer-reorder.collapsed", { name: e.name })));
		}, X = () => {
			U.value = y.value.map((e) => e.orderIdx);
		}, Z = (e) => {
			if (!e.moved) return;
			let t = e.moved.element, n = e.moved.oldIndex, r = e.moved.newIndex;
			if (n === r) return;
			let i = a.geo.layer.getLayer(t.uid), o = U.value[r];
			a.geo.map.reorder(i, o), a.updateAlert(d("layer-reorder.layermoved", {
				name: t.name,
				index: o
			}));
		}, Q = (e, t, n) => {
			let r = a.geo.layer.getLayer(e.id), i = n.currentTarget, o = y.value.indexOf(e);
			if (r === void 0 || o === -1) return;
			let s = o - t;
			if (s < 0 || s >= y.value.length) return;
			let c = y.value[s].orderIdx;
			a.geo.map.reorder(r, c), a.updateAlert(d("layer-reorder.layermoved", {
				name: e.name,
				index: c
			}));
			let l = t === 1 ? "up" : "down", u = n.detail === 0;
			setTimeout(() => {
				let t = O.value[e.id + "-" + l];
				if (u) {
					t?.focus();
					return;
				}
				let n = t ?? i;
				n?.blur(), n?._tippy?.hide();
			}, 0);
		}, $ = (e) => e < 0 || e > y.value.length - 1;
		return h(async () => {
			q(), W.value.push(a.event.on(e.LAYER_REMOVE, () => {
				q();
			})), W.value.push(a.event.on(e.LAYER_LAYERSTATECHANGE, () => {
				q();
			})), W.value.push(a.event.on(e.MAP_REORDER, () => {
				q();
			}));
		}), m(() => {
			W.value.forEach((e) => a.event.off(e)), G.value.forEach((e) => e());
		}), (e, t) => {
			let n = b("truncate"), i = b("tippy");
			return g(), s("div", null, [y.value.length === 0 ? T((g(), s("div", A, [c("span", ee, x(C(d)("layer-reorder.nolayers")), 1)])), [[n]]) : o("", !0), u(C(D), {
				class: "p-3",
				modelValue: y.value,
				"onUpdate:modelValue": t[0] ||= (e) => y.value = e,
				"item-key": "uid",
				animation: K.value ? 200 : 0,
				onChange: Z,
				onStart: X
			}, {
				item: w(({ element: e }) => [e.isLoaded ? T((g(), s("div", {
					key: 0,
					class: p(`
                        mt-4
                        relative
                        ${e.isExpanded ? "hover:bg-gray-200" : ""}
                        border-2
                        border-gray-300
                    `),
					"aria-label": e.name,
					content: e.name,
					ref: (t) => H.value[e.id] = t || null
				}, [
					c("div", M, null, 512),
					c("div", N, [
						e.supportsSublayers ? T((g(), s("button", {
							key: 0,
							type: "button",
							onClick: (t) => Y(e),
							class: "text-gray-500 hover:text-black p-5",
							content: C(d)(`layer-reorder.${e.isExpanded ? "collapse" : "expand"}`),
							"aria-label": C(d)(`layer-reorder.${e.isExpanded ? "collapse" : "expand"}`)
						}, [e.isExpanded ? (g(), s("svg", F, [...t[1] ||= [c("path", {
							d: "M0 0h24v24H0z",
							fill: "none"
						}, null, -1), c("path", { d: "M19 13H5v-2h14v2z" }, null, -1)]])) : (g(), s("svg", I, [...t[2] ||= [c("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }, null, -1)]]))], 8, P)), [[i, {
							placement: "right",
							aria: "describedby"
						}]]) : o("", !0),
						T((g(), s("div", L, [c("span", null, x(e.name), 1)])), [[n]]),
						u(k, {
							ref: (t) => O.value[e.id + "-up"] = t?.buttonRef || null,
							disabled: $(e.componentIdx - 1),
							direction: "up",
							layerId: e.id,
							class: "px-7",
							onClick: (t) => Q(e, 1, t)
						}, null, 8, [
							"disabled",
							"layerId",
							"onClick"
						]),
						u(k, {
							ref: (t) => O.value[e.id + "-down"] = t?.buttonRef || null,
							disabled: $(e.componentIdx + 1),
							direction: "down",
							layerId: e.id,
							class: "px-7",
							onClick: (t) => Q(e, -1, t)
						}, null, 8, [
							"disabled",
							"layerId",
							"onClick"
						])
					]),
					e.isExpanded && e.sublayers.length > 0 ? (g(), s("div", R, [(g(!0), s(r, null, v(e.sublayers, (e) => T((g(), s("div", {
						key: e.id,
						class: "m-15",
						content: e.name,
						"aria-label": e.name
					}, [l(x(e.name), 1)], 8, z)), [[n], [i, {
						placement: "bottom-start",
						aria: "describedby"
					}]])), 128))])) : o("", !0)
				], 10, j)), [[i, {
					placement: "top-start",
					aria: "describedby"
				}]]) : T((g(), s("div", {
					key: 1,
					class: "flex items-center p-5 mx-8 h-44",
					content: C(d)("layer-reorder.loading"),
					"aria-label": C(d)("layer-reorder.loading"),
					"truncate-trigger": ""
				}, [t[3] ||= c("div", { class: "animate-spin spinner h-20 w-20 px-5" }, null, -1), c("div", V, [c("span", null, x(C(d)("layer-reorder.loading")), 1)])], 8, B)), [[i, {
					placement: "top-start",
					aria: "describedby"
				}]])]),
				_: 1
			}, 8, ["modelValue", "animation"])]);
		};
	}
}), U = /* @__PURE__ */ d({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let { t } = E();
		return (n, r) => {
			let i = y("panel-screen");
			return g(), a(i, { panel: e.panel }, {
				header: w(() => [l(x(C(t)("layer-reorder.title")), 1)]),
				content: w(() => [u(H)]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { U as default };
