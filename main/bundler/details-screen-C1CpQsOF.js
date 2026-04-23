import { B as e, L as t, V as n } from "./main-Bz1ia27O.js";
import { n as r } from "./config-qfRoNiJ2.js";
import { t as i } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { t as a } from "./toggle-switch-control-CyM9ioaa.js";
import { Fragment as o, computed as s, createBlock as c, createCommentVNode as l, createElementBlock as u, createElementVNode as d, createTextVNode as f, createVNode as p, defineComponent as m, inject as h, nextTick as g, normalizeClass as _, normalizeStyle as v, onBeforeMount as y, onBeforeUnmount as b, onMounted as x, openBlock as S, ref as C, renderList as w, resolveComponent as T, resolveDirective as E, resolveDynamicComponent as D, toDisplayString as O, unref as k, watch as A, withCtx as j, withDirectives as M, withModifiers as N } from "vue";
import { useI18n as P } from "vue-i18n";
import F from "linkify-html";
//#region src/fixtures/details/components/symbology-stack.vue?vue&type=script&setup=true&lang.ts
var I = {
	key: 0,
	class: "relative"
}, L = {
	key: 0,
	class: "relative"
}, R = ["innerHTML"], z = ["src"], B = {
	key: 1,
	class: "w-32 h-32"
}, V = { class: "symbologyIcon" }, H = ["innerHTML"], U = ["src"], W = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, G = {
	key: 0,
	class: "px-5"
}, K = {
	key: 1,
	class: "inline-flex justify-center items-center relative"
}, q = /* @__PURE__ */ i(/* @__PURE__ */ m({
	__name: "symbology-stack",
	props: {
		layer: {
			type: Object,
			required: !0
		},
		result: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = C([]);
		return x(() => {
			n.value = t.layer.legend;
		}), (t, r) => e.result.loaded ? (S(), u("div", I, [d("div", { class: _(e.result.items.length === 0 ? "opacity-50" : "") }, [n.value.length > 1 ? (S(), u("div", L, [(S(!0), u(o, null, w(n.value.slice(0, 3).reverse(), (e, t) => (S(), u("div", {
			class: _(["absolute", [t == 0 ? "symbol-0" : t == 1 ? "left-3" : "left-6"]]),
			style: v({ "z-index": 3 - t }),
			key: t
		}, [e.svgcode ? (S(), u("span", {
			key: 0,
			class: "symbologyIcon w-28 h-28",
			innerHTML: e.svgcode
		}, null, 8, R)) : e.imgUrl ? (S(), u("img", {
			key: 1,
			class: "symbologyIcon w-28 h-28",
			src: e.imgUrl
		}, null, 8, z)) : l("", !0)], 6))), 128))])) : n.value.length > 0 ? (S(), u("div", B, [d("div", V, [n.value[0].svgcode ? (S(), u("span", {
			key: 0,
			innerHTML: n.value[0].svgcode
		}, null, 8, H)) : n.value[0].imgUrl ? (S(), u("img", {
			key: 1,
			class: "symbologyIcon w-full h-full",
			src: n.value[0].imgUrl
		}, null, 8, U)) : l("", !0)])])) : l("", !0)], 2), d("div", W, [e.result.loaded ? (S(), u("div", G, O(e.result.items.length), 1)) : l("", !0)])])) : (S(), u("div", K, [...r[0] ||= [d("div", { class: "symbologyIcon h-32 w-32" }, [d("div", { class: "relative animate-spin spinner h-24 w-24" })], -1)]]));
	}
}), [["__scopeId", "data-v-414be674"]]), J = ["content"], Y = { class: "symbologyLayerName truncate" }, X = /* @__PURE__ */ m({
	__name: "symbology-item",
	props: {
		layer: {
			type: Object,
			required: !0
		},
		result: {
			type: Object,
			required: !0
		},
		selected: {
			type: Boolean,
			required: !0
		}
	},
	setup(e) {
		let t = n(), r = s(() => t.properties), i = e, a = () => {
			let e = i.layer;
			return e && r.value[e.id] && r.value[e.id].name ? r.value[e.id].name : e?.name ?? "";
		};
		return (t, n) => {
			let r = E("tippy");
			return M((S(), u("button", {
				class: _(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", e.selected ? "detailsButtonSelected" : "px-11"]),
				onClick: n[0] ||= N(() => {}, ["stop"]),
				content: a()
			}, [p(q, {
				class: "symbStack w-32 h-32 mr-10",
				layer: e.layer,
				result: e.result
			}, null, 8, ["layer", "result"]), d("div", Y, O(a()), 1)], 10, J)), [[r, {
				placement: "right",
				sticky: !0
			}]]);
		};
	}
}), ee = ["content"], te = /* @__PURE__ */ m({
	__name: "symbology-list",
	props: {
		results: {
			type: Object,
			required: !0
		},
		selected: {
			type: String,
			required: !0
		}
	},
	emits: ["selection-changed"],
	setup(e, { emit: t }) {
		let { t: n } = P(), i = r(), a = C(), s = () => {
			a.value._tippy.hide();
		}, l = (e) => {
			e.key === "Tab" && a.value?.matches(":focus") && a.value._tippy.show();
		}, d = t, f = e, p = C(""), m = C([]), h = C(!1), g = C(!1), v = (e) => i.getLayerByUid(e), T = (e) => {
			p.value = e, d("selection-changed", e), h.value = !1;
		}, D = () => {
			g.value || setTimeout(() => {
				h.value = g.value;
			}, 500), g.value = !0;
		}, O = () => {
			h.value = g.value = !1;
		}, j = () => {
			g.value || (h.value = !0), g.value = !0;
		}, F = () => {
			h.value = g.value = !1;
		};
		return y(() => {
			m.value.push(A(f, () => {
				p.value = f.selected;
			}));
		}), x(() => {
			a.value?.addEventListener("blur", s), a.value?.addEventListener("keyup", l);
		}), b(() => {
			m.value.forEach((e) => e()), a.value?.removeEventListener("blur", s), a.value?.removeEventListener("keyup", l);
		}), (e, t) => {
			let r = E("focus-item"), i = E("focus-list"), s = E("tippy");
			return M((S(), u("div", {
				class: _(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": h.value }]),
				onMouseover: D,
				onMouseleave: O,
				onFocus: j,
				onBlur: N(F, ["self"]),
				content: k(n)("details.layers.results.list.tooltip"),
				ref_key: "el",
				ref: a
			}, [(S(!0), u(o, null, w(f.results, (e, t) => (S(), u("div", {
				class: "flex justify-start relative",
				key: t
			}, [M((S(), c(X, {
				key: e.uid,
				layer: v(e.uid),
				result: e,
				selected: e.uid === p.value,
				onClick: (t) => T(e.uid)
			}, null, 8, [
				"layer",
				"result",
				"selected",
				"onClick"
			])), [[r]])]))), 128))], 42, ee)), [[i], [s, {
				trigger: "manual",
				placement: "top-start",
				touch: !1
			}]]);
		};
	}
}), ne = { class: "inline font-bold" }, re = ["innerHTML"], ie = /* @__PURE__ */ m({
	__name: "esri-default",
	props: {
		fixtureFields: {
			type: Object,
			required: !1
		},
		fields: {
			type: Object,
			required: !0
		},
		identifyData: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let { t } = P(), n = h("iApi"), r = e, i = (e, t, n, r) => {
			let i = e.find((e) => e[t].toLowerCase() === n.toLowerCase());
			i && delete r[i.name];
		}, a = () => {
			let e = Object.assign({}, r.identifyData.data);
			i(r.fields, "type", "geometry", e), n.ui.exposeOids || i(r.fields, "type", "oid", e), n.ui.exposeMeasurements || (i(r.fields, "name", "shape_length", e), i(r.fields, "name", "shape_area", e));
			let t = {};
			r.fields.forEach((e) => {
				let n = r.fixtureFields?.find((t) => e.name === t.field);
				t[e.name] = {
					name: n?.alias || e.alias || e.name,
					type: e.type,
					visible: n?.visible ?? !0
				};
			});
			let a = {};
			Object.keys(e).forEach((r) => {
				let i = t[r];
				if (i && i.visible) {
					let t = e[r];
					a[r] = {
						value: typeof t == "number" ? n.ui.formatNumber(t) : t,
						alias: i.name,
						type: i.type
					};
				}
			});
			for (let [e] of Object.entries(a)) n.ui.isPlainText(a[e].value) && (a[e].value = n.ui.escapeHtml(a[e].value));
			return a;
		}, s = (e, t, n) => {
			switch (n) {
				case "date": return l(e);
				default: return c(e, t);
			}
		}, c = (e, n) => {
			if (!e) return e;
			if (e.trim().match(/\.(jpeg|jpg|gif|png)$/) || e.trim().match(/^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i)) return `<img src="${e}" alt="${t("details.item.alert.defaultAltText", { alias: n })}" />`;
			let r = "underline text-blue-700 break-all", i = document.createElement("div");
			return i.innerHTML = e.trim(), i.firstElementChild?.tagName == "A" ? (i.firstElementChild.className = r, i.innerHTML) : F(e, {
				className: r,
				target: "_blank",
				validate: { url: (e) => /^https?:\/\//.test(e) }
			});
		}, l = (e) => {
			let t = parseInt(e);
			return isNaN(t) ? e : new Date(t).toISOString().split("T")[0];
		};
		return (e, t) => (S(), u("div", null, [(S(!0), u(o, null, w(a(), (e, n, r) => (S(), u("div", {
			class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
			key: r
		}, [
			d("span", ne, O(e.alias), 1),
			t[0] ||= d("span", { class: "flex-auto" }, null, -1),
			d("span", {
				class: "inline ml-8",
				innerHTML: s(e.value, e.alias, e.type)
			}, null, 8, re)
		]))), 128))]));
	}
}), Z = ["innerHTML"], Q = { key: 1 }, ae = /* @__PURE__ */ m({
	__name: "html-default",
	props: { identifyData: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let { t } = P();
		return (n, r) => e.identifyData ? (S(), u("div", {
			key: 0,
			class: "whitespace-pre-wrap break-words h-full overflow-auto",
			innerHTML: e.identifyData.data.data ?? e.identifyData.data
		}, null, 8, Z)) : (S(), u("div", Q, O(k(t)("details.layers.results.empty")), 1));
	}
}), oe = { class: "relative flex flex-grow truncate" }, se = {
	key: 0,
	class: "flex flex-grow items-center truncate"
}, ce = { class: "flex p-8 items-center" }, $ = ["innerHTML"], le = {
	key: 1,
	class: "symbologyIcon p-6"
}, ue = [
	"content",
	"innerHTML",
	"tabindex"
], de = {
	key: 1,
	class: "flex p-6 flex-grow"
}, fe = {
	key: 2,
	class: "zoomButton text-center p-3"
}, pe = ["content", "aria-label"], me = {
	key: 0,
	class: "m-auto animate-spin spinner h-20 w-20"
}, he = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	"stroke-width": "1.5",
	stroke: "green",
	class: "m-auto w-20 h-20"
}, ge = {
	key: 2,
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	"stroke-width": "1.5",
	stroke: "red",
	class: "m-auto w-20 h-20"
}, _e = ["innerHTML"], ve = /* @__PURE__ */ m({
	__name: "result-item",
	props: {
		uid: {
			type: String,
			required: !0
		},
		data: {
			type: Object,
			required: !0
		},
		open: {
			type: Boolean,
			required: !1
		},
		inList: {
			type: Boolean,
			required: !1
		}
	},
	setup(e) {
		let i = r(), a = e, f = h("iApi"), p = C([]), m = n(), { t: _ } = P(), v = C(!1), x = C(""), w = C("none"), T = C(), j = () => i.getLayerByUid(a.uid), N = s(() => m.properties), I = s(() => m.defaultTemplates), L = s(() => j()?.supportsFeatures ?? !1), R = s(() => j()?.mapLayer ?? !1), z = s(() => {
			let e = j(), t = e && a.data.loaded ? e.nameValue(a.data.data) : f.$i18n.t("details.items.title");
			return f.ui.isPlainText(t) && (t = f.ui.escapeHtml(t)), t;
		}), B = (e) => {
			if (typeof e == "string") {
				let t = "underline text-blue-700 break-all", n = document.createElement("div");
				return n.innerHTML = e.trim(), n.firstElementChild?.tagName == "A" ? (n.firstElementChild.className = t, n.innerHTML) : F(e, {
					className: t,
					target: "_blank",
					validate: { url: (e) => /^https?:\/\//.test(e) }
				});
			}
			return e;
		}, V = () => {
			K("none"), a.data.loaded ? H() : a.data.load().then(() => {
				H();
			});
		}, H = () => {
			if (x.value = "", !(a.data && a.data.loaded)) return;
			let e = j();
			if (e === void 0) {
				console.warn(`could not find layer for uid ${a.uid} during icon lookup`);
				return;
			}
			if (e.supportsFeatures) {
				let t = e.oidField;
				e.getIcon(a.data.data[t]).then((e) => {
					x.value = e;
				});
			}
		}, U = s(() => {
			let e = j(), n = e && N.value[e.id] && N.value[e.id].template;
			if (n) {
				if (typeof D(n) != "string") return n;
				g(() => f.notify.show(t.WARNING, f.$i18n.t("details.template.notFound", { layer: n })));
			}
			return I.value && I.value[a.data.format] ? I.value[a.data.format] : L.value ? ie : ae;
		}), W = s(() => L.value && j()?.fields || []), G = s(() => {
			let e = j();
			if (e && N.value[e.id] && N.value[e.id].fields) return N.value[e.id].fields;
		}), K = (e) => {
			e === "zoomed" || e === "error" ? setTimeout(() => {
				w.value = e, T.value?._tippy.show(), setTimeout(() => {
					T.value?._tippy.hide(), w.value = "none";
				}, 3e3);
			}, 300) : w.value = e;
		}, q = () => {
			if (w.value !== "none") return;
			K("zooming");
			let e = j();
			if (e === void 0 || !e.isLoaded) {
				console.warn(`Could not find layer for uid ${a.uid} during zoom geometry lookup`), K("error");
				return;
			}
			if (!a.data.loaded) {
				console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), K("error");
				return;
			}
			let t = a.data.data[e.oidField];
			e.zoomToFeature(t).then((e) => {
				e ? (K("zoomed"), f.updateAlert(f.$i18n.t("details.item.alert.zoom"))) : K("error");
			});
		};
		return y(() => {
			p.value.push(A(a, () => {
				V();
			}, {
				deep: !1,
				immediate: !0
			}));
		}), b(() => {
			p.value.forEach((e) => e());
		}), (t, n) => {
			let r = E("truncate"), i = E("tippy");
			return S(), u(o, null, [d("div", oe, [L.value ? (S(), u("div", se, [
				d("div", ce, [e.data.loaded && x.value ? (S(), u("span", {
					key: 0,
					class: "flex-none symbologyIcon",
					innerHTML: x.value
				}, null, 8, $)) : (S(), u("div", le, [...n[3] ||= [d("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)]]))]),
				e.data.loaded ? M((S(), u("span", {
					key: 0,
					class: "pl-3 text-left flex-grow itemName",
					content: z.value,
					innerHTML: B(z.value),
					onTouchstart: n[0] ||= (e) => v.value = !0,
					onTouchend: n[1] ||= (e) => v.value = !1,
					tabindex: e.inList ? -1 : 0
				}, null, 40, ue)), [[r, { options: {
					placement: "top-start",
					offset: () => v.value ? [0, 25] : [0, 0]
				} }]]) : (S(), u("div", de, O(k(_)("details.loading")), 1)),
				e.data.loaded ? (S(), u("span", fe, [R.value ? M((S(), u("button", {
					key: 0,
					type: "button",
					content: k(_)(`details.item.zoom${w.value === "none" ? "" : `.${w.value}`}`),
					"aria-label": k(_)(`grid.cells.zoom${w.value === "none" ? "" : `.${w.value}`}`),
					ref_key: "zoomButton",
					ref: T,
					onClick: n[2] ||= (e) => {
						e.stopPropagation(), q();
					},
					class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
				}, [w.value === "zooming" ? (S(), u("div", me)) : w.value === "zoomed" ? (S(), u("svg", he, [...n[4] ||= [d("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M4.5 12.75l6 6 9-13.5"
				}, null, -1)]])) : w.value === "error" ? (S(), u("svg", ge, [...n[5] ||= [d("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M6 18L18 6M6 6l12 12"
				}, null, -1)]])) : (S(), u("span", {
					key: 3,
					innerHTML: k(f).ui.getZoomIcon()
				}, null, 8, _e))], 8, pe)), [[i, { placement: "bottom" }]]) : l("", !0)])) : l("", !0)
			])) : l("", !0)]), e.open ? (S(), c(D(U.value), {
				key: 0,
				identifyData: e.data,
				fields: W.value,
				fixtureFields: G.value,
				class: "p-8"
			}, null, 8, [
				"identifyData",
				"fields",
				"fixtureFields"
			])) : l("", !0)], 64);
		};
	}
}), ye = {
	key: 0,
	class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
	tabIndex: "0"
}, be = {
	key: 1,
	class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, xe = { for: "toggle" }, Se = {
	key: 2,
	class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, Ce = { class: "flex" }, we = ["aria-label"], Te = [
	"content",
	"aria-label",
	"disabled"
], Ee = { class: "px-3 text-center flex-grow" }, De = [
	"content",
	"aria-label",
	"disabled"
], Oe = { key: 3 }, ke = { key: 0 }, Ae = ["content"], je = ["onClick"], Me = {
	key: 1,
	class: "text-center"
}, Ne = {
	key: 4,
	class: "p-5"
}, Pe = /* @__PURE__ */ i(/* @__PURE__ */ m({
	__name: "result-list",
	props: {
		uid: {
			type: String,
			required: !0
		},
		results: {
			type: Object,
			required: !0
		}
	},
	emits: ["item-selected"],
	setup(t, { emit: i }) {
		let m = C(), g = () => {
			m.value._tippy.hide();
		}, T = (e) => {
			e.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
		}, D = h("iApi"), j = n(), N = r(), F = i, I = t, { t: L } = P(), R = C(!1), z = C(D.fixture.get("details")), B = C(!0), V = C(!1), H = C(0), U = C(20), W = C([]), G = C([]), K = s(() => j.activeGreedy), q = s(() => j.properties), J = s(() => H.value + U.value), Y = () => N.getLayerByUid(I.uid), X = () => I.results.find((e) => e.uid === I.uid), ee = s(() => X()?.loaded ?? !1), te = s(() => X()?.requestTime), ne = s(() => R.value && (!V.value && Z().length > 1 || V.value && Z().length > U.value)), re = s(() => {
			let e = Y();
			return e && q.value[e.id] && q.value[e.id].name ? q.value[e.id].name : e?.name ?? "";
		}), ie = s(() => I.uid), Z = () => {
			let e = X();
			return e ? e.items : [];
		}, Q = s(() => Z()[H.value]), ae = s(() => {
			if (z.value.hasHilighter()) {
				let e = Y();
				if (e) return e.mapLayer && e.supportsFeatures;
			}
			return !1;
		}), oe = (e) => {
			B.value = e, j.hilightToggle = e, $();
		}, se = () => {
			let e = Y();
			H.value = H.value ?? 0, B.value = j.hilightToggle ?? B.value, V.value = !1, R.value = !!e, $();
		}, ce = (e) => {
			V.value ? (H.value += e * U.value, $()) : H.value += e;
		}, $ = async (e = !1) => {
			if (B.value && ae.value) {
				if (e) {
					let e = X();
					e && await e.loading;
				}
				let t = Z();
				if (ee.value && t.length > 0) {
					if (V.value) z.value.hilightDetailsItems(t.slice(H.value, J.value), I.uid);
					else {
						let e = t[H.value];
						e && z.value.hilightDetailsItems([e], I.uid);
					}
					return;
				}
			}
			z.value.removeDetailsHilight();
		}, le = () => {
			V.value = !0, H.value = Math.floor(H.value / U.value) * U.value, $();
		}, ue = () => {
			z.value.removeDetailsHilight(), G.value.forEach((e) => e()), W.value.forEach((e) => D.event.off(e));
		}, de = () => {
			z.value.removeDetailsHilight();
		}, fe = (e) => {
			let t = H.value;
			H.value = e, V.value = !1, t === e && $(), F("item-selected");
		};
		return x(() => {
			W.value.push(D.event.on(e.LAYER_REMOVE, (e) => {
				let t = D.panel.get("details");
				I.uid === e.uid && t && t.close();
			})), W.value.push(D.event.on(e.PANEL_CLOSED, (e) => {
				e.id === "details" && ue();
			})), W.value.push(D.event.on(e.PANEL_MINIMIZED, (e) => {
				e.id === "details" && de();
			})), W.value.push(D.event.on(e.MAP_BASEMAPCHANGE, (e) => {
				B.value && e.schemaChanged && $();
			})), m.value?.addEventListener("blur", g), m.value?.addEventListener("keyup", T);
		}), y(() => {
			G.value.push(A(Q, () => {
				V.value || (se(), Q.value === void 0 && z.value.removeDetailsHilight());
			}, {
				deep: !1,
				immediate: !0
			})), G.value.push(A(ie, () => {
				let e = I.uid;
				if (V.value && e) {
					let t = X();
					t && t.loading.then(() => {
						I.uid === e && V.value && $();
					});
				}
			}, {
				deep: !1,
				immediate: !0
			})), G.value.push(A(te, () => {
				H.value = 0, V.value && $(!0);
			})), G.value.push(A(() => I.uid, () => {
				H.value = 0;
			}));
		}), b(() => {
			m.value?.removeEventListener("blur", g), m.value?.removeEventListener("keyup", T);
		}), (e, n) => {
			let r = E("truncate"), i = E("tippy"), s = E("focus-item"), h = E("focus-list");
			return ee.value && K.value === 0 ? (S(), u("div", {
				key: 0,
				class: "detailsContent relative flex flex-col flex-grow pl-5",
				style: v(t.results.length > 1 ? { "margin-left": "42px" } : "")
			}, [
				R.value ? M((S(), u("h1", ye, [f(O(re.value), 1)])), [[r, { options: { placement: "top-start" } }]]) : l("", !0),
				ae.value ? (S(), u("div", be, [d("label", xe, O(k(L)("details.togglehilight.title")), 1), p(a, {
					config: {
						value: B.value,
						disabled: !1
					},
					onToggled: oe
				}, null, 8, ["config"])])) : l("", !0),
				ne.value ? (S(), u("div", Se, [d("div", Ce, [V.value ? l("", !0) : (S(), u("button", {
					key: 0,
					type: "button",
					class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
					"aria-label": k(L)("details.item.see.list"),
					onClick: n[0] ||= (e) => le()
				}, O(k(L)("details.item.see.list")), 9, we)), d("div", { class: _(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": V.value }]) }, [
					M((S(), u("button", {
						type: "button",
						content: k(L)(V.value ? "details.items.previous" : "details.item.previous.item"),
						onClick: n[1] ||= (e) => ce(-1),
						class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
						"aria-label": k(L)(V.value ? "details.items.previous" : "details.item.previous.item"),
						disabled: H.value === 0
					}, [...n[3] ||= [d("svg", {
						height: "24",
						width: "24",
						viewBox: "0 0 23 23"
					}, [d("g", null, [d("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })])], -1)]], 8, Te)), [[i, { placement: "top" }]]),
					d("span", Ee, O(V.value ? k(L)("details.items.range", [
						H.value + 1,
						Math.min(J.value, Z().length),
						Z().length
					]) : k(L)("details.item.count", [H.value + 1, Z().length])), 1),
					M((S(), u("button", {
						type: "button",
						content: k(L)(V.value ? "details.items.next" : "details.item.next.item"),
						onClick: n[2] ||= (e) => ce(1),
						class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
						"aria-label": k(L)(V.value ? "details.items.next" : "details.item.next.item"),
						disabled: !V.value && H.value === Z().length - 1 || V.value && J.value >= Z().length
					}, [...n[4] ||= [d("svg", {
						height: "24",
						width: "24",
						viewBox: "0 0 23 23"
					}, [d("g", null, [d("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })])], -1)]], 8, De)), [[i, { placement: "top" }]])
				], 2)])])) : l("", !0),
				R.value ? (S(), u("div", Oe, [Z().length > 0 ? (S(), u("div", ke, [V.value ? M((S(), u("div", {
					key: 0,
					class: "flex flex-col",
					content: k(L)("details.layers.results.list.tooltip"),
					ref_key: "el",
					ref: m
				}, [(S(!0), u(o, null, w(Z().slice(H.value, J.value), (e, n) => M((S(), u("button", {
					class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
					key: n,
					onClick: (e) => fe(H.value + n)
				}, [p(ve, {
					data: e,
					uid: t.uid,
					open: !1,
					"in-list": !0
				}, null, 8, ["data", "uid"])], 8, je)), [[s, "show-truncate"]])), 128))], 8, Ae)), [[h], [i, {
					trigger: "manual",
					placement: "top-start",
					touch: !1
				}]]) : (S(), c(ve, {
					key: 1,
					data: Q.value,
					uid: t.uid,
					open: !0,
					"in-list": !1
				}, null, 8, ["data", "uid"]))])) : (S(), u("div", Me, O(k(L)("details.layers.results.empty.currentLayer")), 1))])) : (S(), u("div", Ne, O(k(L)("details.item.no.data")), 1))
			], 4)) : (S(), u("div", {
				key: 1,
				class: _(["flex justify-center py-10 items-center", t.results.length > 1 ? "ml-42" : ""])
			}, [n[5] ||= d("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1), f(" " + O(k(L)("details.item.loading")), 1)], 2));
		};
	}
}), [["__scopeId", "data-v-60b1b8a2"]]), Fe = { class: "relative h-full" }, Ie = /* @__PURE__ */ i(/* @__PURE__ */ m({
	__name: "details-screen",
	props: { panel: { type: Object } },
	setup(e) {
		let { t } = P(), r = h("iApi"), i = n(), a = C([]), o = C([]), p = C([]), m = C(!1), v = C(null), x = C(""), w = s(() => i.activeGreedy), E = s(() => i.payload), D = (e) => {
			x.value = e;
		}, M = (e) => p.value.find((t) => t.uid === e), N = (e) => {
			e !== void 0 && (i.activeGreedy = e.length === 0 ? 0 : e[0].requestTime, p.value = e, F(e));
		}, F = (e) => {
			if (x.value) {
				let t = M(x.value);
				t ? t.loading.then(() => {
					t.requestTime === w.value && (t.items.length > 0 ? L(!1) : I(e));
				}) : I(e);
			} else I(e);
		}, I = (e, t) => {
			let n;
			if (t) n = t;
			else {
				let t = i.properties, r = e.map((e) => [t[e.layerId]?.priority ?? 50, e.layerId]), a = new Set(r.map((e) => e[0]));
				n = [], a.forEach((e) => {
					let t = r.filter((t) => t[0] === e).map((e) => e[1]);
					n.push([e, t]);
				}), n.sort((e, t) => t[0] - e[0]);
			}
			if (n.length === 0) {
				E.value.length ? L(!0) : g().then(() => {
					L(!0);
				});
				return;
			}
			let r = n[n.length - 1][1], a = e.filter((e) => r.includes(e.layerId)).map((e) => e.loading.then(() => e.items.length > 0 ? Promise.resolve(e) : Promise.reject())), o = e.length === 0 ? 0 : e[0].requestTime;
			Promise.any(a).then((e) => {
				e.requestTime === w.value && (x.value = e.uid, L(!1));
			}).catch(() => {
				o === w.value && (n.pop(), I(e, n));
			});
		}, L = (e) => {
			i.activeGreedy = 0, m.value = e;
		};
		return y(() => {
			o.value.push(A(E, (e) => {
				N(e);
			}, {
				deep: !1,
				immediate: !0
			}));
		}), b(() => {
			a.value.forEach((e) => r.event.off(e)), o.value.forEach((e) => e());
		}), (n, r) => {
			let a = T("panel-screen");
			return S(), c(a, { panel: e.panel }, {
				header: j(() => [f(O(k(i).origin === "toggleEvent" ? k(t)("details.layers.title.gridOrigin") : k(t)("details.layers.title.identifyOrigin")), 1)]),
				content: j(() => [d("div", Fe, [p.value.length > 1 ? (S(), c(te, {
					key: 0,
					results: p.value,
					selected: x.value,
					onSelectionChanged: D
				}, null, 8, ["results", "selected"])) : l("", !0), d("div", {
					class: "detailsContentSection overflow-y-auto h-full",
					ref_key: "detailsPanel",
					ref: v
				}, [m.value ? (S(), u("div", {
					key: 1,
					class: _(["text-center", { "ml-42": p.value.length > 1 }])
				}, O(p.value.length >= 1 ? k(t)("details.layers.results.empty") : k(t)("details.layers.results.empty.noLayers")), 3)) : (S(), c(Pe, {
					key: 0,
					uid: x.value,
					results: p.value,
					onItemSelected: r[0] ||= () => g(() => v.value?.scrollTo({ top: 0 }))
				}, null, 8, ["uid", "results"]))], 512)])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-b149ae00"]]);
//#endregion
export { Ie as default };
