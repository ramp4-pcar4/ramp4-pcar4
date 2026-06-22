import { B as e, C as t, D as n, E as r, O as i, S as a, T as o, V as s, at as c, ot as l, w as u } from "./main-BgfQyEh5.js";
import { n as d } from "./config-C3RvSaXR.js";
import { t as f } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { Fragment as p, computed as m, createBlock as h, createCommentVNode as g, createElementBlock as _, createElementVNode as v, createStaticVNode as y, createTextVNode as b, defineComponent as x, inject as ee, normalizeClass as S, normalizeStyle as C, onMounted as w, openBlock as T, ref as E, renderList as D, resolveComponent as O, resolveDirective as k, resolveDynamicComponent as A, toDisplayString as j, toRaw as M, unref as N, useTemplateRef as P, watch as te, withCtx as F, withDirectives as I, withKeys as L, withModifiers as R } from "vue";
import { useI18n as z } from "vue-i18n";
import ne from "await-to-js";
import { marked as re } from "marked";
//#region src/fixtures/legend/components/checkbox.vue?vue&type=script&setup=true&lang.ts
var B = [
	"type",
	"aria-label",
	"checked",
	"disabled",
	"content"
], V = /* @__PURE__ */ x({
	__name: "checkbox",
	props: {
		value: {
			type: Object,
			required: !0
		},
		legendItem: {
			type: Object,
			required: !0
		},
		checked: { type: Boolean },
		label: { type: String },
		isRadio: { type: Boolean },
		disabled: { type: Boolean }
	},
	setup(e) {
		let { t } = z(), r = e, i = E(r.legendItem.visibility);
		w(() => {
			r.legendItem.checkVisibilityRules(), i.value = r.legendItem.visibility === r.checked;
		});
		let a = () => {
			r.value instanceof n ? r.legendItem.toggleVisibility() : r.legendItem instanceof o && (r.legendItem.clickSymbology(r.value.uid), i.value = !0);
		};
		return (n, r) => {
			let o = k("tippy");
			return T(), _("div", {
				class: "relative",
				onMouseover: r[3] ||= R(() => {}, ["stop"])
			}, [I(v("input", {
				type: e.isRadio ? "radio" : "checkbox",
				"aria-label": N(t)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`),
				onClick: r[0] ||= R((e) => a(), ["stop"]),
				checked: e.checked && i.value,
				onKeypress: r[1] ||= L(R(() => {}, ["prevent"]), ["enter"]),
				onKeyup: r[2] ||= L(R((e) => a(), ["stop"]), ["enter"]),
				class: S([[e.disabled ? "text-gray-400 border-gray-300" : "text-black cursor-pointer border-gray-500 hover:border-black"], "mx-5 h-15 w-15"]),
				tabindex: "-1",
				disabled: e.disabled,
				content: N(t)(e.checked ? `legend.visibility.hide${e.label}` : `legend.visibility.show${e.label}`)
			}, null, 42, B), [[o, {
				placement: "top-end",
				hideOnClick: !1
			}]])], 32);
		};
	}
}), H = ["aria-label"], ie = ["aria-label"], U = ["aria-label"], ae = ["aria-label"], W = ["aria-label"], G = ["aria-label"], K = ["content", "aria-label"], oe = /*#__PURE__*/ f(/* @__PURE__ */ x({
	__name: "legend-options",
	props: { legendItem: o },
	emits: ["focusItem"],
	setup(t, { emit: n }) {
		let { t: r } = z(), i = ee("iApi"), a = E(), c = E(!1), u = E(e().mobileView), d = n, f = E(0), p = t, g = () => {
			p.legendItem.layerControlAvailable(l.Symbology) && p.legendItem.toggleSymbology();
		}, y = () => {
			p.legendItem.layerControlAvailable(l.Datatable) && L("grid") && i.event.emit(s.GRID_TOGGLE, p.legendItem.layer);
		}, x = () => {
			p.legendItem.layerControlAvailable(l.Settings) && L("settings") && i.event.emit(s.SETTINGS_TOGGLE, p.legendItem.layer);
		}, C = () => {
			if (p.legendItem.layerControlAvailable(l.Metadata) && L("metadata")) {
				let e = p.legendItem?.layer?.config.metadata || p.legendItem?.layer?.parentLayer?.config?.metadata || {}, t = e?.name || p.legendItem?.layer?.name || "", n = p.legendItem?.layer?.config?.catalogueUrl || p.legendItem?.layer?.layerType === "sublayer" && p.legendItem?.layer?.parentLayer?.config?.catalogueUrl || void 0;
				if (e.url) {
					let r = e.url.split("."), a = r[r.length - 1], o = a === "xml" || a === "md" ? a : "html";
					i.event.emit(s.METADATA_TOGGLE, {
						type: o,
						layerName: t,
						url: e.url,
						catalogueUrl: n,
						layer: p.legendItem.layer,
						xmlType: e.xmlType,
						treatXmlAsMarkdown: e.treatXmlAsMarkdown
					});
				} else console.warn("Layer does not have a metadata url defined");
			}
		}, w = () => {
			p.legendItem.layerControlAvailable(l.BoundaryZoom) && p.legendItem?.layer?.zoomToLayerBoundary();
		}, D = () => {
			p.legendItem.layerControlAvailable(l.Remove) && i.geo.map.removeLayer(p.legendItem.layerUid);
		}, A = (e) => {
			P.value && M(p.legendItem.layer).reload().then(() => {
				f.value += 1, e.pointerType !== "mouse" && d("focusItem");
			});
		}, P = m(() => p.legendItem.layerControlAvailable(l.Reload) && p.legendItem instanceof o && M(p.legendItem.layer)?.canReload), te = (e) => {
			c.value = !0, setTimeout(() => {
				c.value && (u.value || e._tippy?.show());
			}, 300);
		}, L = (e) => {
			try {
				return i.fixture.exists(e);
			} catch {
				return !1;
			}
		};
		return (e, n) => {
			let i = O("dropdown-menu"), o = k("tippy");
			return T(), _("div", {
				onClick: n[3] ||= R(() => {}, ["stop"]),
				onMouseover: n[4] ||= R(() => {}, ["stop"]),
				class: "options display-block cursor-auto"
			}, [(T(), h(i, {
				class: "flex-shrink-0",
				position: "bottom-end",
				tooltip: N(r)("legend.layer.options"),
				tooltipPlacement: "left",
				tooltipPlacementAlt: "left",
				ref_key: "dropdown",
				ref: a,
				key: f.value
			}, {
				header: F(() => [...n[5] ||= [v("div", { class: "flex p-4 justify-center items-center" }, [v("svg", {
					class: "inline-block fill-current w-18 h-18 mx-4",
					viewBox: "0 0 23 21"
				}, [v("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })])], -1)]]),
				default: F(() => [
					v("a", {
						href: "javascript:;",
						class: S(["flex leading-snug items-center text-left w-auto", { disabled: !t.legendItem.layerControlAvailable(N(l).Metadata) || !L("metadata") }]),
						onClick: C,
						role: "button",
						"aria-label": N(r)("legend.layer.controls.metadata")
					}, [n[6] ||= v("svg", {
						class: "setting-svg",
						viewBox: "0 0 23 21"
					}, [v("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" })], -1), b(" " + j(N(r)("legend.layer.controls.metadata")), 1)], 10, H),
					v("a", {
						href: "javascript:;",
						class: S(["flex leading-snug items-center text-left w-auto", { disabled: !t.legendItem.layerControlAvailable(N(l).Settings) || !L("settings") }]),
						onClick: x,
						role: "button",
						"aria-label": N(r)("legend.layer.controls.settings")
					}, [n[7] ||= v("svg", {
						class: "setting-svg",
						viewBox: "0 0 23 21"
					}, [v("g", null, [v("path", { d: "M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z " })])], -1), b(" " + j(N(r)("legend.layer.controls.settings")), 1)], 10, ie),
					v("a", {
						href: "javascript:;",
						class: S(["flex leading-snug items-center text-left w-auto", { disabled: !t.legendItem.layerControlAvailable(N(l).Datatable) || !L("grid") }]),
						onClick: y,
						role: "button",
						"aria-label": N(r)("legend.layer.controls.datatable")
					}, [n[8] ||= v("svg", {
						class: "setting-svg",
						viewBox: "0 0 23 21"
					}, [v("path", { d: "M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z " })], -1), b(" " + j(N(r)("legend.layer.controls.datatable")), 1)], 10, U),
					v("a", {
						href: "javascript:;",
						class: S(["flex leading-snug items-center text-left w-auto", { disabled: !t.legendItem.layerControlAvailable(N(l).Symbology) }]),
						onClick: g,
						role: "button",
						"aria-label": N(r)("legend.layer.controls.symbology")
					}, [n[9] ||= v("svg", {
						class: "setting-svg",
						viewBox: "0 0 23 21"
					}, [v("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })], -1), b(" " + j(N(r)("legend.layer.controls.symbology")), 1)], 10, ae),
					v("a", {
						href: "javascript:;",
						class: S(["flex leading-snug items-center text-left w-auto", { disabled: !t.legendItem.layerControlAvailable(N(l).BoundaryZoom) }]),
						onClick: w,
						role: "button",
						"aria-label": N(r)("legend.layer.controls.boundaryzoom")
					}, [n[10] ||= v("svg", {
						class: "setting-svg",
						viewBox: "0 0 24 24"
					}, [
						v("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
						v("path", {
							d: "M0 0h24v24H0V0z",
							fill: "none"
						}),
						v("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
					], -1), b(" " + j(N(r)("legend.layer.controls.boundaryzoom")), 1)], 10, W),
					v("a", {
						href: "javascript:;",
						class: S(["flex leading-snug items-center text-left w-auto", { disabled: !t.legendItem.layerControlAvailable(N(l).Remove) }]),
						onClick: D,
						role: "button",
						"aria-label": N(r)("legend.layer.controls.remove")
					}, [n[11] ||= v("svg", {
						class: "setting-svg",
						viewBox: "0 0 23 21"
					}, [v("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })], -1), b(" " + j(N(r)("legend.layer.controls.remove")), 1)], 10, G),
					I((T(), _("a", {
						href: "javascript:;",
						class: S(["flex leading-snug items-center text-left w-auto", { disabled: !P.value }]),
						key: +P.value,
						content: P.value ? null : N(r)("legend.layer.controls.reloadDisabled"),
						onMouseover: n[0] ||= R((e) => te(e.currentTarget), ["stop"]),
						onMouseout: n[1] ||= (e) => (u.value || e.currentTarget?._tippy?.hide(), c.value = !1),
						onClick: n[2] ||= (e) => A(e),
						role: "button",
						"aria-label": N(r)("legend.layer.controls.reload")
					}, [n[12] ||= v("svg", {
						class: "setting-svg",
						viewBox: "0 0 24 24"
					}, [v("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })], -1), b(" " + j(N(r)("legend.layer.controls.reload")), 1)], 42, K)), [[o, {
						placement: "top-start",
						trigger: "manual focus",
						aria: "describedby"
					}]])
				]),
				_: 1
			}, 8, ["tooltip"]))], 32);
		};
	}
}), [["__scopeId", "data-v-34fa4433"]]), q = { key: 0 }, J = {
	key: 0,
	class: "relative left-3"
}, Y = ["innerHTML"], se = ["src"], ce = {
	key: 1,
	class: "symbologyIcon w-32 h-32"
}, X = ["innerHTML"], Z = ["src"], le = {
	key: 1,
	class: "h-32 w-32 inline-flex justify-center items-center"
}, ue = /*#__PURE__*/ f(/* @__PURE__ */ x({
	__name: "symbology-stack",
	props: {
		visible: {
			type: Boolean,
			required: !0
		},
		legendItem: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = E([]);
		return w(() => {
			t.legendItem.loadPromise.then(() => {
				t.legendItem.layerUid !== void 0 && Promise.all(M(t.legendItem.symbologyStack).map((e) => e.drawPromise)).then(() => {
					n.value = M(t.legendItem).symbologyStack;
				});
			});
		}), (t, r) => e.visible ? (T(), _("div", le, [...r[0] ||= [v("svg", {
			class: "fill-current w-16 h-16",
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 352 512"
		}, [v("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })], -1)]])) : (T(), _("div", q, [n.value.length > 1 ? (T(), _("div", J, [(T(!0), _(p, null, D(n.value.slice(0, 3).reverse(), (e, t) => (T(), _("div", {
			class: S(["absolute", [t == 0 ? "symbol-0" : t == 1 ? "left-3 symbol-1" : "left-6 symbol-2"]]),
			style: C({ "z-index": 3 - t }),
			key: t
		}, [n.value[t].svgcode ? (T(), _("span", {
			key: 0,
			class: "symbologyIcon w-28 h-28",
			innerHTML: n.value[t].svgcode
		}, null, 8, Y)) : n.value[t].imgUrl ? (T(), _("img", {
			key: 1,
			class: "symbologyIcon w-28 h-28",
			src: n.value[t].imgUrl
		}, null, 8, se)) : g("", !0)], 6))), 128))])) : n.value.length > 0 ? (T(), _("div", ce, [n.value[0].svgcode ? (T(), _("span", {
			key: 0,
			innerHTML: n.value[0].svgcode
		}, null, 8, X)) : n.value[0].imgUrl ? (T(), _("img", {
			key: 1,
			class: "symbologyIcon w-full h-full",
			src: n.value[0].imgUrl
		}, null, 8, Z)) : g("", !0)])) : g("", !0)]));
	}
}), [["__scopeId", "data-v-008e2aa7"]]), de = { class: "relative" }, fe = ["content"], pe = {
	key: 0,
	class: "flex p-5 mr-[13px]"
}, me = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "black",
	width: "24px",
	height: "24px"
}, he = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	fill: "black",
	width: "24px",
	height: "24px"
}, ge = [
	"disabled",
	"content",
	"aria-label"
], _e = ["src"], ve = { class: "h-auto break-words text-ellipsis" }, ye = {
	key: 4,
	class: "flex-1 pointer-events-none p-5"
}, be = {
	key: 5,
	class: "flex-1"
}, xe = {
	key: 0,
	class: "text-lg font-bold"
}, Se = { key: 1 }, Ce = { key: 2 }, we = ["src"], Te = ["innerHTML"], Ee = {
	key: 6,
	class: "relative"
}, De = ["content", "aria-label"], Oe = {
	key: 8,
	class: "relative"
}, ke = ["content", "aria-label"], Ae = { class: "flex p-5" }, je = {
	key: 0,
	class: "fill-current w-18 h-18",
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 352 512"
}, Me = {
	key: 1,
	class: "inline-block fill-current w-18 h-18 mr-1",
	viewBox: "0 1 23 22"
}, Ne = ["content"], Pe = ["content"], Fe = {
	key: 11,
	class: "relative top-1"
}, Ie = ["content"], Le = {
	key: 0,
	class: "h-3 w-full absolute bottom-0"
}, Re = {
	key: 0,
	class: "symbology-stack default-focus-style"
}, ze = { key: 0 }, Be = {
	key: 0,
	class: "m-5"
}, Ve = {
	key: 0,
	class: "items-center grid-cols-1"
}, He = {
	key: 0,
	class: "symbologyIcon w-full p-5"
}, Ue = ["src"], We = ["innerHTML"], Ge = {
	key: 2,
	class: "flex-1 p-5 bg-black-75 text-white"
}, Ke = {
	key: 1,
	class: "flex items-center"
}, qe = {
	key: 0,
	class: "symbologyIcon"
}, Je = ["src"], Ye = {
	key: 1,
	class: "symbologyIcon"
}, Xe = ["innerHTML"], Ze = { class: "flex-1 ml-15" }, Qe = { key: 1 }, $e = { class: "flex p-5 ml-48" }, et = {
	key: 0,
	class: "relative animate-spin spinner h-20 w-20 mr-10 pt-2"
}, tt = { class: "flex-1 text-gray-500" }, nt = {
	key: 1,
	class: "legend-group border-l-2 ml-4 pl-4"
}, rt = /*#__PURE__*/ f(/* @__PURE__ */ x({
	__name: "item",
	props: { legendItem: {
		type: Object,
		required: !0
	} },
	setup(n) {
		let f = d(), x = e(), { t: C } = z(), w = ee("iApi"), F = E(), L = n, B = a(), H = B.multilineItems, ie = (L.legendItem instanceof o && L.legendItem.maxLines) ?? B.maxLines, U = E(x.mobileView), ae = m(() => f.layerConfigs), W = E([]), G = E(!1), K = E(!1), q = P("legendFocusItem"), J = m(() => L.legendItem instanceof o ? M(L.legendItem.layer)?.layerType : ""), Y = m(() => L.legendItem instanceof o && M(L.legendItem.layer)?.canModifyLayer), se = m(() => {
			if (L.legendItem instanceof o) {
				let e = M(L.legendItem.layer);
				return e ? e.canReload : !0;
			} else return !1;
		}), ce = m(() => w.animate), X = m(() => L.legendItem.children.length > 0 || L.legendItem instanceof o && M(L.legendItem.layer)?.sublayers.length > 0), Z = (e) => e === r.Expand || e === r.Visibility ? L.legendItem.controlAvailable(e) : L.legendItem.layerControlAvailable(e), le = (e) => re(e, { async: !1 }), rt = () => {
			L.legendItem.children.length === 0 || !Z(r.Expand) || (L.legendItem.toggleExpanded(), w.updateAlert(C(`legend.alert.group${L.legendItem.expanded ? "Expanded" : "Collapsed"}`)));
		}, it = () => {
			if (Z(l.Symbology)) {
				let e = L.legendItem.toggleSymbology();
				w.updateAlert(C(`legend.alert.symbology${e ? "Expanded" : "Collapsed"}`));
			}
		}, at = () => {
			Z(l.Datatable) && Q() && w.event.emit(s.GRID_TOGGLE, L.legendItem.layer);
		}, ot = (e) => {
			let t = document.createElement("span");
			t.innerHTML = e.svgcode;
			let n = t.firstElementChild;
			return n?.classList.add("max-w-full"), n?.classList.add("h-full"), n?.setAttribute("height", e.imgHeight), n?.setAttribute("width", e.imgWidth), t.outerHTML;
		}, Q = () => {
			try {
				return w.fixture.exists("grid");
			} catch {
				return !1;
			}
		}, st = () => {
			L.legendItem.reload(), setTimeout(() => {
				let e = L.legendItem, t = !0;
				if (e.layer) M(e.layer).reload(), t = !1;
				else if (e.isSublayer && e.parentLayerId) {
					let n = w.geo.layer.getLayer(e.parentLayerId);
					n && (M(n).reload(), t = !1);
				}
				if (t) {
					let t = e.isSublayer ? e.parentLayerId : e.layerId, n = ae.value.find((e) => e.id === t);
					n !== void 0 && ct(n);
				}
				L.legendItem.loadPromise.catch(() => {});
			}, 400);
		}, ct = async (e) => {
			try {
				let t = w.geo.layer.getLayer(e.id);
				if (t) {
					let [e] = await ne(M(t).reload());
					if (e) throw Error();
					return t;
				} else {
					let t = w.geo.layer.createLayer(e);
					return await w.geo.map.addLayer(t).catch(() => {
						throw Error();
					}), t;
				}
			} catch {
				return;
			}
		}, lt = () => {
			let e = M(L.legendItem), t = 0;
			if (e.type === i.Error) {
				L.legendItem.toggleHidden(!0);
				let n = setInterval(() => {
					let r = e.layer;
					(r && (r.layerExists || r.initiationState === c.NEW || r.initiationState === c.TERMINATING || r.initiationState === c.TERMINATED) || t > 1200) && (clearInterval(n), r && w.geo.map.removeLayer(r), f.removeLayerConfig(e.layerId), w.fixture.get("legend")?.removeLayerItem(e.layerId)), t++;
				}, 250);
			} else {
				L.legendItem.error();
				let n = setInterval(() => {
					let r = e.parentLayerId || e.layerId, i = w.geo.layer.getLayer(r);
					i && (clearInterval(n), i.cancelLoad(), (w.fixture.get("legend")?.getLayerBoundItems(i) || []).forEach((e) => e.error())), t > 1200 && clearInterval(n), t++;
				}, 50);
			}
		}, $ = () => {
			L.legendItem.loadPromise.then(() => {
				if (W.value = [], !L.legendItem.layer) {
					console.warn("Attempted to mount legend item component with undefined layer");
					return;
				}
				Promise.all(M(L.legendItem.symbologyStack.map((e) => e.drawPromise))).then(() => {
					W.value = L.legendItem.symbologyStack, G.value = !0;
				});
			}).catch(() => {});
		}, ut = (e) => {
			K.value = !0, setTimeout(() => {
				K.value && (U.value || e._tippy?.show());
			}, 300);
		};
		return L.legendItem instanceof o && ($(), te(() => L.legendItem.symbologyStack, () => {
			$();
		})), (e, a) => {
			let s = O("item", !0), c = k("tippy"), d = k("truncate"), f = k("focus-item");
			return n.legendItem.hidden ? g("", !0) : (T(), _("div", {
				key: `${n.legendItem.uid}`,
				ref_key: "el",
				ref: F
			}, [
				v("div", de, [I((T(), _("div", {
					class: S(["flex items-center hover:bg-gray-200 default-focus-style !p-5", [
						n.legendItem.type === N(i).Item ? "loaded-item" : n.legendItem.type === N(i).Error ? "non-loaded-item bg-red-200" : "non-loaded-item",
						X.value && Z(N(r).Expand) || !X.value && n.legendItem instanceof N(o) && Z(N(l).Datatable) && Q() && n.legendItem.type === N(i).Item ? "cursor-pointer" : "cursor-default",
						N(H) ? "multilined" : "singlelined"
					]]),
					onMouseover: a[10] ||= R((e) => ut(e.currentTarget), ["stop"]),
					onMouseout: a[11] ||= (e) => (U.value || e.currentTarget?._tippy?.hide(), K.value = !1),
					onClick: a[12] ||= () => {
						!X.value && n.legendItem instanceof N(o) && Z(N(l).Datatable) && Q() && n.legendItem.type === N(i).Item ? at() : X.value && rt();
					},
					content: X.value && Z(N(r).Expand) ? N(C)(n.legendItem.expanded ? "legend.group.collapse" : "legend.group.expand") : n.legendItem instanceof N(o) && n.legendItem.type === N(i).Item && Z(N(l).Datatable) && Q() ? N(C)("legend.layer.data") : "",
					"truncate-trigger": "",
					ref_key: "legendFocusItem",
					ref: q
				}, [
					n.legendItem.type === N(i).Item ? g("", !0) : (T(), _("div", pe, [n.legendItem.type === N(i).Placeholder ? (T(), _("svg", me, [...a[14] ||= [y("<path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-4152c061></path><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-4152c061></path><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z\" data-v-4152c061></path>", 7)]])) : (T(), _("svg", he, [...a[15] ||= [y("<path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-4152c061></path><path d=\"M0 0h24v24H0V0z\" fill=\"none\" data-v-4152c061></path><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><circle cx=\"15.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><circle cx=\"8.5\" cy=\"9.5\" r=\"1.5\" data-v-4152c061></circle><path d=\"M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z\" data-v-4152c061></path>", 7)]]))])),
					n.legendItem.type === N(i).Item && n.legendItem instanceof N(o) && n.legendItem.layer.legend.length > 0 ? (T(), _("div", {
						key: 1,
						class: "relative w-32 h-32 mr-15",
						onMouseover: a[0] ||= R(() => {}, ["stop"])
					}, [I((T(), _("button", {
						type: "button",
						onClick: R(it, ["stop"]),
						class: S([Z(N(l).Symbology) ? "cursor-pointer" : "cursor-default"]),
						disabled: !Z(N(l).Symbology),
						content: n.legendItem instanceof N(o) && n.legendItem.symbologyExpanded ? N(C)("legend.symbology.hide") : N(C)("legend.symbology.expand"),
						"aria-label": n.legendItem instanceof N(o) && n.legendItem.symbologyExpanded ? N(C)("legend.symbology.hide") : N(C)("legend.symbology.expand")
					}, [n.legendItem.coverIcon ? (T(), _("img", {
						key: 1,
						class: S([{ "pointer-events-none": !Z(N(l).Symbology) }, "w-32 h-32 hover:scale-105"]),
						src: n.legendItem.coverIcon,
						alt: "Cover icon not found :("
					}, null, 10, _e)) : (T(), h(ue, {
						key: 0,
						class: S([{ "pointer-events-none": !Z(N(l).Symbology) }, "w-32 h-32"]),
						visible: n.legendItem instanceof N(o) && n.legendItem.symbologyExpanded,
						legendItem: n.legendItem
					}, null, 8, [
						"class",
						"visible",
						"legendItem"
					]))], 10, ge)), [[c, { placement: "top-start" }]])], 32)) : g("", !0),
					X.value && Z(N(r).Expand) ? (T(), _("div", {
						key: 2,
						class: S(["expand-toggle p-8 pointer-events-none", { "rotate-180": n.legendItem.expanded }])
					}, [...a[16] ||= [v("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						height: "18",
						viewBox: "0 0 24 24",
						width: "18"
					}, [v("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })], -1)]], 2)) : g("", !0),
					n.legendItem instanceof N(o) && N(H) ? I((T(), _("div", {
						key: 3,
						class: S(["flex-1 pointer-events-none m-5", `line-clamp-${N(ie)}`])
					}, [v("span", ve, j(n.legendItem.name ?? (n.legendItem?.layer?.name ? n.legendItem.layer?.name : n.legendItem.layerId)), 1)], 2)), [[d, {
						externalTrigger: !0,
						noTruncateClass: !0
					}]]) : n.legendItem instanceof N(o) ? I((T(), _("div", ye, [v("span", null, j(n.legendItem.name ?? (!n.legendItem.layer || n.legendItem?.layer?.name === "" ? n.legendItem.layerId : n.legendItem.layer?.name)), 1)])), [[d, { externalTrigger: !0 }]]) : n.legendItem instanceof N(u) ? (T(), _("div", be, [n.legendItem.infoType === N(t).Title && n.legendItem.content ? (T(), _("h3", xe, j(n.legendItem.content), 1)) : n.legendItem.infoType === N(t).Title ? (T(), _("h3", Se, j(n.legendItem.name), 1)) : n.legendItem.infoType === N(t).Text ? (T(), _("p", Ce, j(n.legendItem.content), 1)) : n.legendItem.infoType === N(t).Image ? (T(), _("img", {
						key: 3,
						src: n.legendItem.content,
						alt: "InfoType image not found :("
					}, null, 8, we)) : n.legendItem.infoType === N(t).Markdown ? (T(), _("div", {
						key: 4,
						class: "ramp-markdown",
						innerHTML: le(n.legendItem.content)
					}, null, 8, Te)) : (T(), h(A(`${n.legendItem.uid}-info-section`), { key: 5 }))])) : g("", !0),
					n.legendItem.type === N(i).Error && se.value ? (T(), _("div", Ee, [I((T(), _("button", {
						type: "button",
						class: "text-gray-500 hover:text-black",
						content: N(C)("legend.layer.controls.reload"),
						onMouseover: a[1] ||= R(() => {}, ["stop"]),
						onClick: R(st, ["stop"]),
						"aria-label": N(C)("legend.layer.controls.reload")
					}, [...a[17] ||= [v("div", { class: "flex p-8" }, [v("svg", {
						class: "inline-block fill-current w-18 h-18",
						viewBox: "0 0 24 24"
					}, [v("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })])], -1)]], 40, De)), [[c, { placement: "top-start" }]])])) : g("", !0),
					(n.legendItem.type === N(i).Item || n.legendItem.type === N(i).Placeholder && N(H)) && n.legendItem instanceof N(o) ? (T(), h(oe, {
						key: 7,
						class: S({ invisible: n.legendItem.type === N(i).Placeholder }),
						legendItem: n.legendItem,
						onFocusItem: a[2] ||= () => e.$emit("focusItem", q.value)
					}, null, 8, ["class", "legendItem"])) : g("", !0),
					n.legendItem.type !== N(i).Item && n.legendItem instanceof N(o) ? (T(), _("div", Oe, [I((T(), _("button", {
						type: "button",
						class: "text-gray-500 hover:text-black",
						content: n.legendItem.type === N(i).Error ? N(C)("legend.layer.controls.remove") : N(C)("legend.layer.controls.cancel"),
						onMouseover: a[3] ||= R(() => {}, ["stop"]),
						onClick: R(lt, ["stop"]),
						"aria-label": n.legendItem.type === N(i).Error ? N(C)("legend.layer.controls.remove") : N(C)("legend.layer.controls.cancel")
					}, [v("div", Ae, [n.legendItem.type === N(i).Placeholder ? (T(), _("svg", je, [...a[18] ||= [v("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, null, -1)]])) : (T(), _("svg", Me, [...a[19] ||= [v("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }, null, -1)]]))])], 40, ke)), [[c, { placement: "top-start" }]])])) : g("", !0),
					n.legendItem.type === N(i).Item && n.legendItem instanceof N(o) && n.legendItem.layerOffscale ? I((T(), _("div", {
						key: 9,
						class: "relative p-4 cursor-default",
						content: N(C)("legend.layer.offscale"),
						onMouseover: a[4] ||= R(() => {}, ["stop"]),
						onClick: a[5] ||= R(() => {}, ["stop"]),
						"focus-icon": ""
					}, [...a[20] ||= [v("svg", {
						class: "inline-block fill-gray-400 w-18 h-18",
						viewBox: "0 0 24 24"
					}, [v("path", { d: "M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z" })], -1)]], 40, Ne)), [[c, { placement: "top-start" }]]) : g("", !0),
					n.legendItem.type === N(i).Item && n.legendItem instanceof N(o) && !n.legendItem.layer?.mapLayer ? I((T(), _("div", {
						key: 10,
						class: "relative p-4 cursor-default",
						content: N(C)("legend.layer.data.only"),
						onMouseover: a[6] ||= R(() => {}, ["stop"]),
						onClick: a[7] ||= R(() => {}, ["stop"]),
						"focus-icon": ""
					}, [...a[21] ||= [v("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						height: "18",
						viewBox: "0 -960 960 960",
						width: "18",
						class: "inline-block fill-gray-400"
					}, [v("path", { d: "m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z" })], -1)]], 40, Pe)), [[c, { placement: "top-end" }]]) : g("", !0),
					n.legendItem.type === N(i).Item && n.legendItem instanceof N(o) && n.legendItem.layerOffscale ? (T(), _("div", Fe, [I((T(), _("button", {
						type: "button",
						class: "p-4",
						content: N(C)("legend.layer.zoomToVisible"),
						onMouseover: a[8] ||= R(() => {}, ["stop"]),
						onClick: a[9] ||= R((e) => n.legendItem.layer.zoomToVisibleScale(), ["stop"])
					}, [...a[22] ||= [v("svg", {
						class: "m-auto",
						xmlns: "http://www.w3.org/2000/svg",
						height: "18",
						viewBox: "0 0 24 24",
						width: "18"
					}, [
						v("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
						v("path", {
							d: "M0 0h24v24H0V0z",
							fill: "none"
						}),
						v("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
					], -1)]], 40, Ie)), [[c, { placement: "top-start" }]])])) : n.legendItem.type === N(i).Item && Z(N(r).Visibility) ? (T(), h(V, {
						key: 12,
						checked: n.legendItem.visibility,
						value: n.legendItem,
						isRadio: n.legendItem.parent && n.legendItem.parent.exclusive,
						legendItem: n.legendItem,
						disabled: n.legendItem instanceof N(o) && !n.legendItem.layerControlAvailable(N(l).Visibility),
						label: X.value ? "Group" : "Layer"
					}, null, 8, [
						"checked",
						"value",
						"isRadio",
						"legendItem",
						"disabled",
						"label"
					])) : g("", !0)
				], 42, fe)), [[f, "show-truncate"], [c, {
					placement: "top-start",
					trigger: "manual focus",
					aria: "describedby"
				}]]), n.legendItem.type === N(i).Placeholder || n.legendItem instanceof N(o) && n.legendItem.layerRedrawing && n.legendItem.visibility ? (T(), _("div", Le, [...a[23] ||= [v("div", { class: "progress-line" }, null, -1)]])) : g("", !0)]),
				n.legendItem instanceof N(o) && n.legendItem.symbologyExpanded ? I((T(), _("div", Re, [W.value.length > 0 ? (T(), _("div", ze, [n.legendItem instanceof N(o) && n.legendItem.description ? (T(), _("p", Be, j(n.legendItem.description), 1)) : g("", !0), (T(!0), _(p, null, D(W.value, (e) => (T(), _("div", {
					class: "m-5",
					key: e.uid
				}, [e.imgUrl && n.legendItem.symbologyRenderStyle === "images" || !e.imgUrl && J.value === "ogc-wms" ? (T(), _("div", Ve, [e.imgUrl ? (T(), _("div", He, [v("img", {
					class: "max-w-full",
					src: e.imgUrl
				}, null, 8, Ue)])) : e.imgHeight ? (T(), _("div", {
					key: 1,
					class: "symbologyIcon w-full p-5",
					innerHTML: ot(e)
				}, null, 8, We)) : g("", !0), e.label ? I((T(), _("div", Ge, [v("span", null, j(e.label), 1), !e.imgUrl && W.value.length > 1 || e.imgUrl && e.definitionClause ? (T(), h(V, {
					key: 0,
					class: "float-right",
					value: e,
					legendItem: n.legendItem,
					checked: e.visibility,
					disabled: !Z(N(l).Visibility),
					label: "Symbol"
				}, null, 8, [
					"value",
					"legendItem",
					"checked",
					"disabled"
				])) : g("", !0)])), [[d]]) : g("", !0)])) : (T(), _("div", Ke, [
					e.imgUrl ? (T(), _("div", qe, [v("img", {
						class: "w-32 h-32",
						src: e.imgUrl
					}, null, 8, Je)])) : e.svgcode ? (T(), _("div", Ye, [v("span", { innerHTML: e.svgcode }, null, 8, Xe)])) : g("", !0),
					I((T(), _("div", Ze, [b(j(e.label), 1)])), [[d]]),
					Y.value && n.legendItem.layer.supportsFeatures && (!e.imgUrl && W.value.length > 1 || e.imgUrl && e.definitionClause) ? (T(), h(V, {
						key: 2,
						value: e,
						legendItem: n.legendItem,
						checked: e.visibility,
						disabled: !Z(N(l).Visibility),
						label: "Symbol"
					}, null, 8, [
						"value",
						"legendItem",
						"checked",
						"disabled"
					])) : g("", !0)
				]))]))), 128))])) : g("", !0), G.value ? g("", !0) : (T(), _("div", Qe, [I((T(), _("div", $e, [ce.value ? (T(), _("div", et)) : g("", !0), I((T(), _("div", tt, [v("span", null, j(N(C)("legend.symbology.loading")), 1)])), [[d]])])), [[d]])]))])), [[f]]) : g("", !0),
				n.legendItem.expanded ? (T(), _("div", nt, [(T(!0), _(p, null, D(n.legendItem.children, (t) => (T(), h(s, {
					legendItem: t,
					key: t.uid,
					onFocusItem: a[13] ||= (t) => e.$emit("focusItem", t)
				}, null, 8, ["legendItem"]))), 128))])) : g("", !0)
			]));
		};
	}
}), [["__scopeId", "data-v-4152c061"]]);
//#endregion
export { rt as default };
