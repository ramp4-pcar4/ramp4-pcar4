import { B as e, h as t, m as n, mt as r, pt as i } from "./main-BtLSZphp.js";
import { t as a } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { Fragment as o, Transition as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createTextVNode as ee, createVNode as p, defineComponent as m, inject as te, nextTick as ne, normalizeClass as h, onBeforeUnmount as re, onErrorCaptured as g, onMounted as ie, openBlock as _, provide as v, reactive as y, ref as b, renderList as ae, renderSlot as x, resolveComponent as oe, resolveDirective as S, toDisplayString as C, unref as w, useId as T, useTemplateRef as E, vShow as D, watch as O, withCtx as k, withDirectives as A, withModifiers as se } from "vue";
import { useI18n as ce } from "vue-i18n";
import { ColorPicker as j } from "vue-accessible-color-picker";
import { Treeselect as le } from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
//#region src/fixtures/wizard/form-footer.vue?vue&type=script&setup=true&lang.ts
var M = { class: "flex justify-end mb-20" }, N = ["disabled", "animation"], P = { class: "button-text" }, F = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "form-footer",
	props: {
		animation: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let { t } = ce();
		return (n, r) => (_(), d("div", M, [f("button", {
			class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
			type: "button",
			onClick: r[0] ||= (e) => n.$emit("cancel")
		}, C(w(t)("wizard.step.cancel")), 1), f("button", {
			class: h(["button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400", { "button--loading": e.animation && e.disabled }]),
			type: "button",
			disabled: e.disabled,
			animation: e.animation,
			onClick: r[1] ||= (e) => n.$emit("submit")
		}, [f("span", P, C(w(t)("wizard.step.continue")), 1)], 10, N)]));
	}
}), [["__scopeId", "data-v-4802f647"]]), ue = { key: 0 }, de = { class: "text-base font-bold" }, I = {
	class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
	"data-type": "file"
}, L = ["aria-label"], R = { class: "text-gray-500 text-xs mb-1" }, z = { key: 1 }, B = { class: "text-base font-bold" }, V = {
	class: "mb-0.5",
	"data-type": "url"
}, H = ["value", "aria-label"], fe = {
	key: 0,
	class: "text-red-900 text-xs"
}, U = { key: 2 }, W = { class: "text-base font-bold" }, G = {
	class: "relative mb-0.5",
	"data-type": "select"
}, pe = { key: 0 }, K = {
	key: 0,
	class: "text-red-900 text-xs"
}, q = { key: 1 }, J = [
	"size",
	"value",
	"aria-label"
], Y = ["value"], me = {
	key: 0,
	class: "text-red-900 text-xs"
}, he = {
	key: 1,
	class: "text-red-900 text-xs"
}, ge = { key: 3 }, X = ["aria-label"], Z = { class: "text-base font-bold" }, _e = { key: 4 }, ve = { class: "text-base font-bold" }, ye = { class: "relative mb-0.5" }, be = ["value", "aria-label"], xe = {
	key: 0,
	class: "text-red-900 text-xs"
}, Q = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "form-input",
	props: {
		activeStep: {
			type: Number,
			default: 0
		},
		defaultOption: {
			type: Boolean,
			default: !1
		},
		formatError: {
			type: Boolean,
			default: !1
		},
		failureError: {
			type: Boolean,
			default: !1
		},
		help: {
			type: [String, Boolean],
			default: !1
		},
		label: {
			type: [String, Boolean],
			default: !1
		},
		modelValue: {
			type: [String, Array],
			default: ""
		},
		name: {
			type: [String, Boolean],
			default: !1
		},
		options: {
			type: Array,
			default() {
				return [];
			}
		},
		selectedValues: {
			type: Array,
			default: () => []
		},
		size: {
			type: [Number, String],
			default: 0
		},
		sublayerOptions: {
			type: Function,
			default() {
				return [];
			}
		},
		multiple: {
			type: Boolean,
			default: !1
		},
		searchable: {
			type: Boolean,
			default: !1
		},
		step: {
			type: Number,
			default: 0
		},
		type: {
			type: String,
			default: "text"
		},
		url: {
			type: [String, Boolean],
			default: !1
		},
		validation: {
			type: Boolean,
			default: !1
		},
		validationMessages: { type: Object },
		ariaLabel: {
			type: String,
			default: ""
		}
	},
	emits: [
		"update:modelValue",
		"link",
		"select",
		"upload",
		"text",
		"nested",
		"focusElement"
	],
	setup(e, { expose: t, emit: n }) {
		let r = te("iApi"), { t: i } = ce(), a = n, s = e, c = b(), l = E("textInput"), m = E("selectInput"), ne = E("urlInput");
		t({
			selectInput: m,
			textInput: l,
			urlInput: ne
		});
		let g = b(!1), v = b(!1), x = b(!1), oe = b(!1), T = b([...s.selectedValues]), D = b("value-label"), se = b("option-label"), j = b(void 0), M = b(null), N = y([]);
		if (s.defaultOption && s.modelValue === "" && s.options.length) {
			let e = s.options[0].value;
			if (s.name === "latField") {
				let t = /* @__PURE__ */ new RegExp(/^(y|lat.*)$/i);
				e = s.options.find((e) => t.test(e.label))?.value || e;
			} else if (s.name === "longField") {
				let t = /* @__PURE__ */ new RegExp(/^(x|long.*)$/i);
				e = s.options.find((e) => t.test(e.label))?.value || e;
			}
			a("update:modelValue", e);
		}
		let P = (e) => {
			e.trim() === "" ? (g.value = !1, r.updateAlert(i("wizard.configure.name.error.required"))) : g.value = !0;
		}, F = (e) => {
			let t;
			try {
				t = new URL(e);
			} catch {
				return g.value = !1, !1;
			}
			g.value = t.protocol === "http:" || t.protocol === "https:";
		}, Q = (e) => {
			a("upload", e.target.files[0]), e.target.value = "";
		}, Se = (e) => {
			F(e.target.value), a("link", e.target.value, g), v.value = !1;
		}, $ = (e, t) => {
			a(e ? "select" : "update:modelValue", t.target.value);
		}, Ce = (e) => {
			a("nested", e.target.checked);
		}, we = (e) => {
			P(e.target.value), a("link", e.target.value, g), x.value = !1;
		}, Te = () => {
			a("select", s.sublayerOptions(T.value)), oe.value = T.value && T.value.length === 0;
		}, Ee = (e) => e.length > 5 ? `${e.slice(0, 5)}...` : e;
		function De() {
			j.value = new ResizeObserver(function() {
				Oe();
			}), j.value.observe(r.$vApp.$el.querySelector(".vue-treeselect__control")), j.value.observe(r.$vApp.$el.querySelector(".vue-treeselect__menu"));
		}
		let Oe = () => {
			let e = r.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight ?? 0, t = r.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight ?? 0;
			c.value.style.height = `${e + t + 30}px`;
		};
		N.push(O(M, (e) => {
			e && ke();
		}));
		let ke = () => {
			if (M.value) {
				let e = M.value.querySelector("input[type=\"text\"]");
				e && e.setAttribute("aria-label", i("wizard.configure.sublayers.select"));
			}
		};
		return ie(() => {
			s.step === 2 && s.step === s.activeStep && a("focusElement");
		}), re(() => {
			j.value.disconnect(), N.forEach((e) => e());
		}), (t, n) => {
			let r = S("truncate");
			return _(), d("div", {
				class: "input-wrapper mb-12",
				ref_key: "el",
				ref: c
			}, [e.type === "file" ? (_(), d("div", ue, [
				f("label", de, C(e.label), 1),
				f("div", I, [f("input", {
					class: "absolute w-full opacity-0 inset-0 cursor-pointer",
					type: "file",
					name: "file",
					accept: ".geojson,.json,.csv,.zip",
					"aria-label": s.ariaLabel,
					onInput: n[0] ||= (e) => {
						Q(e);
					}
				}, null, 40, L), n[11] ||= f("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [f("svg", {
					class: "w-30 h-30 m-auto",
					fill: "#a8a8a8",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 58 58"
				}, [f("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }), f("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })])], -1)]),
				f("div", R, C(e.help), 1)
			])) : e.type === "url" ? (_(), d("div", z, [
				f("label", B, C(e.label), 1),
				f("div", V, [f("input", {
					class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
					type: "url",
					name: "url",
					value: e.modelValue,
					"aria-label": s.ariaLabel,
					onChange: n[1] ||= (e) => g.value ? v.value = !1 : v.value = !0,
					onInput: n[2] ||= (e) => {
						Se(e);
					},
					ref_key: "urlInput",
					ref: ne
				}, null, 40, H)]),
				v.value ? (_(), d("div", fe, C(e.modelValue ? e.validationMessages?.invalid : e.validationMessages?.required), 1)) : u("", !0)
			])) : e.type === "select" ? (_(), d("div", U, [f("label", W, C(e.label), 1), f("div", G, [e.multiple ? (_(), d("div", pe, [f("div", {
				ref_key: "treeWrapper",
				ref: M
			}, [p(w(le), {
				modelValue: T.value,
				"onUpdate:modelValue": n[3] ||= (e) => T.value = e,
				multiple: !0,
				options: e.options,
				"default-expand-level": 1,
				"always-open": !0,
				"open-direction": "bottom",
				"max-height": 300,
				limit: 4,
				disableFuzzyMatching: !0,
				searchable: e.searchable,
				childrenIgnoreDisabled: !0,
				"value-consists-of": "LEAF_PRIORITY",
				placeholder: w(i)("wizard.configure.sublayers.select"),
				noResultsText: w(i)("wizard.configure.sublayers.results"),
				clearAllText: w(i)("wizard.configure.sublayers.clearAll"),
				onSelect: n[4] ||= (e) => {
					t.$nextTick(() => {
						Te();
					});
				},
				onDeselect: n[5] ||= (e) => {
					t.$nextTick(() => {
						Te();
					});
				},
				onOpen: n[6] ||= (e) => {
					t.$nextTick(() => {
						De();
					});
				}
			}, {
				[D.value]: k(({ node: e }) => [f("label", null, C(Ee(e.label)), 1)]),
				[se.value]: k(({ node: e, labelClassName: t }) => [A((_(), d("label", { class: h(t) }, [ee(C(e.label), 1)], 2)), [[r, { options: {
					placement: "top",
					hideOnClick: !1,
					theme: "ramp4",
					animation: "scale"
				} }]])]),
				_: 2
			}, 1032, [
				"modelValue",
				"options",
				"searchable",
				"placeholder",
				"noResultsText",
				"clearAllText"
			])], 512), e.validation && oe.value ? (_(), d("div", K, C(e.validationMessages?.required), 1)) : u("", !0)])) : (_(), d("div", q, [
				f("select", {
					class: h(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", e.size ? "configure-select" : ""]),
					size: e.size,
					value: e.modelValue,
					onInput: n[7] ||= (t) => $(e.size, t),
					"aria-label": s.ariaLabel,
					ref_key: "selectInput",
					ref: m
				}, [(_(!0), d(o, null, ae(e.options, (e) => (_(), d("option", {
					class: "p-6",
					key: e.label,
					value: e.value
				}, C(e.label), 9, Y))), 128))], 42, J),
				e.validation && e.formatError ? (_(), d("div", me, C(e.validationMessages?.invalid), 1)) : u("", !0),
				e.validation && e.failureError ? (_(), d("div", he, C(e.validationMessages?.failure), 1)) : u("", !0)
			]))])])) : e.type === "checkbox" ? (_(), d("div", ge, [f("input", {
				class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
				type: "checkbox",
				name: "nested",
				checked: !0,
				"aria-label": s.ariaLabel,
				onChange: n[8] ||= (e) => {
					Ce(e);
				}
			}, null, 40, X), f("label", Z, C(e.label), 1)])) : (_(), d("div", _e, [
				f("label", ve, C(e.label), 1),
				f("div", ye, [f("input", {
					class: h(["border-solid border-gray-300 p-3 w-full", { "error-border": !g.value && !e.modelValue }]),
					type: "text",
					value: e.modelValue,
					"aria-label": s.ariaLabel,
					onChange: n[9] ||= (e) => g.value ? x.value = !1 : x.value = !0,
					onInput: n[10] ||= (e) => {
						we(e);
					},
					ref_key: "textInput",
					ref: l
				}, null, 42, be)]),
				e.validation && !e.modelValue ? (_(), d("div", xe, C(e.validationMessages?.required), 1)) : u("", !0)
			]))], 512);
		};
	}
}), [["__scopeId", "data-v-57ba825f"]]), Se = { class: "step relative flex flex-col px-12" }, $ = { class: "stepper-header flex pb-24" }, Ce = {
	key: 1,
	class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, we = { class: "flex flex-col overflow-hidden" }, Te = { class: "pl-12 flex items-center text-md" }, Ee = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, De = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "stepper-item",
	props: {
		title: {
			type: String,
			required: !0
		},
		summary: { type: String }
	},
	emits: ["focusPanel", "focusFirstElement"],
	setup(e, { emit: t }) {
		let n = te("stepper"), r = b(), i = t, a = b(-1), o = (e) => {
			l() || (e.stopPropagation(), i("focusPanel"), i("focusFirstElement"));
		};
		ie(() => {
			a.value = n.numSteps++, r.value?.addEventListener("focusout", o);
		}), re(() => {
			r.value?.removeEventListener("focusout", o);
		});
		let c = () => n.activeIndex > a.value, l = () => n.activeIndex === a.value;
		return (t, n) => {
			let i = S("truncate");
			return _(), d("div", Se, [f("div", $, [c() ? (_(), d("div", Ce, [...n[0] ||= [f("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				height: "100%",
				width: "100%",
				preserveAspectRatio: "xMidYMid meet",
				viewBox: "0 0 24 24",
				focusable: "false"
			}, [f("g", { id: "check_circle" }, [f("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })])], -1)]])) : (_(), d("div", {
				key: 0,
				class: h(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": l }])
			}, C(a.value + 1), 3)), f("div", we, [f("div", Te, C(e.title), 1), A((_(), d("div", Ee, [ee(C(e.summary), 1)])), [[D, !l()], [i]])])]), p(s, {
				name: "step",
				mode: "out-in"
			}, {
				default: k(() => [A(f("div", {
					class: "pl-36",
					ref_key: "stepItem",
					ref: r
				}, [x(t.$slots, "default", {}, void 0, !0)], 512), [[D, l()]])]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-53b5c8d8"]]), Oe = { class: "py-12 h-auto stepper" }, ke = /* @__PURE__ */ m({
	__name: "stepper",
	props: { activeStep: {
		type: Number,
		default: 0
	} },
	setup(e) {
		let t = e, n = c(() => t.activeStep), r = y([]), i = y({
			activeIndex: t.activeStep,
			numSteps: 0
		});
		return v("stepper", i), r.push(O(n, () => {
			i.activeIndex = t.activeStep;
		})), re(() => {
			r.forEach((e) => e());
		}), (e, t) => (_(), d("div", Oe, [x(e.$slots, "default")]));
	}
}), Ae = {
	key: 0,
	class: "inline-flex items-center mb-10"
}, je = { class: "px-5 text-xs" }, Me = {
	key: 0,
	class: "text-red-900 text-xs"
}, Ne = { key: 6 }, Pe = ["for"], Fe = {
	key: 7,
	class: "text-base font-bold"
}, Ie = { class: "sr-only" }, Le = { class: "sr-only" }, Re = /* @__PURE__ */ a(/* @__PURE__ */ m({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(a) {
		let o = n(), { t: s } = ce(), m = te("iApi"), v = b(), ae = T(), x = b([]), S = c(() => o.layerSource), D = c(() => o.currStep), O = b(null), A = b(), le = b(0), M = b(!1), N = b(), P = E("stepOneStart"), ue = E("stepTwoStart"), de = E("stepThreeStart"), I = b(!1), L = b(!1), R = b(!1), z = b(!1), B = b(!1), V = b(!1), H = b(!0), fe = b(""), U = b(""), W = b([]), G = y([
			{
				value: r.FEATURE,
				label: s("wizard.layerType.esriFeature")
			},
			{
				value: r.MAPIMAGE,
				label: s("wizard.layerType.esriMapImage")
			},
			{
				value: r.TILE,
				label: s("wizard.layerType.esriTile")
			},
			{
				value: r.IMAGERY,
				label: s("wizard.layerType.esriImagery")
			},
			{
				value: r.WMS,
				label: s("wizard.layerType.ogcWms")
			},
			{
				value: r.WFS,
				label: s("wizard.layerType.ogcWfs")
			}
		]), pe = y([
			{
				value: r.GEOJSON,
				label: s("wizard.fileType.geojson")
			},
			{
				value: r.SHAPEFILE,
				label: s("wizard.fileType.shapefile")
			},
			{
				value: r.CSV,
				label: s("wizard.fileType.csv")
			}
		]), K = c({
			get() {
				return o.url;
			},
			set(e) {
				o.url = e;
			}
		}), q = c({
			get() {
				return o.fileData;
			},
			set(e) {
				o.fileData = e;
			}
		}), J = c({
			get() {
				return o.typeSelection;
			},
			set(e) {
				o.typeSelection = e;
			}
		}), Y = c({
			get() {
				return o.layerInfo;
			},
			set(e) {
				o.layerInfo = e;
			}
		}), me = c(() => {
			let e = m.geo.proxy !== "";
			switch (J.value) {
				case r.FEATURE:
				case r.MAPIMAGE:
				case r.TILE:
				case r.IMAGERY: return !e;
				case r.WFS: return !0;
				case r.WMS: return !e;
				case r.GEOJSON:
				case r.SHAPEFILE:
				case r.CSV: return !!($() && !q.value);
				default: return !1;
			}
		}), he = c(() => {
			let e = [s("wizard.format.type.error.failure")];
			return me.value && e.push(s("wizard.format.warn.cors")), e.push(s("wizard.format.warn.vpn")), e.join(". ") + ".";
		});
		g(() => ((D.value === t.FORMAT || D.value === t.CONFIGURE) && (I.value = !0, o.goToStep(t.FORMAT)), !1)), ie(() => {
			x.value.push(m.event.on(e.LAYER_LAYERSTATECHANGE, (e) => {
				e.layer.userAdded && (fe.value = e.layer.name, V.value = e.state !== i.LOADING && e.state !== i.NEW, H.value = V.value && e.state === i.LOADED);
			})), D.value === t.CONFIGURE && (Y.value?.configOptions.includes("colour") && We(), z.value = !Y.value?.configOptions.includes("sublayers") && !!Y.value?.config.name);
		}), re(() => {
			x.value.forEach((e) => m.event.off(e));
		});
		let ge = () => {
			N.value.el.dispatchEvent(new MouseEvent("click"));
		}, X = () => {
			switch (D.value) {
				case 0:
					Z(P);
					break;
				case 1:
					Z(ue);
					break;
				case 2:
					Z(de);
					break;
			}
		};
		function Z(e) {
			(e.value?.$el.querySelectorAll("input, select")[0])?.focus();
		}
		let _e = async (e) => {
			let t = new FileReader();
			t.onload = (n) => {
				q.value = t.result, K.value = e.name, ve(n);
			}, t.readAsArrayBuffer(e);
		}, ve = (e) => {
			e?.preventDefault(), J.value = S.value.guessFormatFromURL(K.value), o.goToStep(t.FORMAT);
		}, ye = async (e) => {
			e?.preventDefault(), O.value = new AbortController(), M.value = !0, I.value = !1, L.value = !1, z.value = !1, B.value = !0, o.goToStep(t.CONFIGURE), U.value = $() ? pe.find((e) => e.value === J.value)?.label : G.find((e) => e.value === J.value)?.label;
			try {
				Y.value = $() ? await S.value.fetchFileInfo(K.value, J.value, q.value) : await S.value.fetchServiceInfo(K.value, J.value, o.nested, O.value.signal), $() && q.value && (Y.value.config.url = "");
			} catch (e) {
				e.name === "AbortError" ? B.value = !1 : L.value = !0, M.value = !1;
				return;
			}
			let n = J.value === r.FEATURE && !(Y.value && Y.value.fields);
			if (!Y.value || n) {
				I.value = !0, Y.value = {
					config: {
						id: "Placeholder",
						layerType: r.UNKNOWN,
						url: ""
					},
					configOptions: []
				}, M.value = !1;
				return;
			}
			We(), z.value = !(Y.value.configOptions.includes("sublayers") || !Y.value.config.name), M.value = !1, B.value = !1;
		}, be = async (n) => {
			n?.preventDefault();
			let r = Object.assign(Y.value.config, n);
			W.value = [], U.value = "";
			let i = m.geo.layer.createLayer(r);
			m.geo.map.addLayer(i).catch(() => {}), i.userAdded = !0, m.event.emit(e.USER_LAYER_ADDED, i), R.value = !1, o.goToStep(t.UPLOAD);
		}, xe = () => Y.value?.fields.map((e) => ({
			value: e.name,
			label: e.alias || e.name
		})), Se = (e) => Y.value?.latLonFields[e].map((e) => ({
			value: e,
			label: e
		})), $ = () => q.value || K.value.match(/\.(zip|csv|json|geojson)$/), Ce = (e) => {
			_e(e), K.value = "";
		}, we = (e, t) => {
			K.value = e.trim(), R.value = t;
		}, Te = (e) => {
			J.value = e, I.value = !1;
		}, Ee = (e) => {
			Y.value.config.name = e.trim();
			let t = Y.value?.config.sublayers;
			z.value = !!(t ? e && t.length > 0 : e.trim());
		}, Oe = (e) => {
			Y.value.config.sublayers = e, z.value = !!(e.length > 0 && Y.value?.config.name);
		}, Re = (e) => {
			if (o.nested = e, W.value = [], le.value += 1, J.value === r.MAPIMAGE) {
				Y.value.layers = S.value.createLayerHierarchy(Y.value.layersRaw, o.nested);
				let e = new Set((Y.value?.config?.sublayers ?? []).map((e) => e.index));
				o.nested ? ze(Y, e) : Ve(Y, e);
			} else if (J.value === r.WMS) {
				Y.value.layers = S.value.mapWmsLayerList(Y.value.layersRaw, o.nested);
				let e = new Set((Y.value?.config?.sublayers ?? []).map((e) => e.id));
				o.nested ? Be(Y, e) : He(Y, e);
			}
			Oe(Ue(W.value));
		}, ze = (e, t) => {
			let n = /* @__PURE__ */ new Map();
			for (let t of e.value.layersRaw) if (t.parentLayerId !== -1) {
				let e = n.get(t.parentLayerId) || [];
				e.push(t.id), n.set(t.parentLayerId, e);
			}
			let r = (e) => {
				let i = n.get(e);
				return i ? i.every((e) => n.has(e) ? r(e) : t.has(e)) : !1;
			}, i = (e) => {
				if (r(e)) W.value.push(e);
				else {
					let r = n.get(e);
					if (r) for (let e of r) t.has(e) && W.value.push(e);
				}
			};
			for (let e of n.keys()) i(e);
			for (let r of e.value.layersRaw) r.parentLayerId === -1 && !n.has(r.id) && t.has(r.id) && W.value.push(r.id);
			W.value = Array.from(new Set(W.value));
		}, Be = (e, t) => {
			let n = (e) => !e.layers || e.layers.length === 0 ? t.has(e.name) : e.layers.every((e) => n(e)), r = (e) => {
				n(e) ? W.value.push(e.name) : e.layers && e.layers.forEach(r);
			}, i = e.value.layersRaw[0];
			i && i.layers && i.layers.forEach((e) => r(e)), W.value = Array.from(new Set(W.value));
		}, Ve = (e, t) => {
			let n = (r) => {
				let i = e.value.layersRaw.filter((e) => e.parentLayerId === r);
				if (i.length > 0) for (let e of i) t.has(e.id) ? W.value.push(e.id) : n(e.id);
				else W.value.push(r);
			};
			for (let r of e.value.layersRaw) t.has(r.id) && n(r.id);
			W.value = Array.from(new Set(W.value));
		}, He = (e, t) => {
			let n = (e) => {
				e.layers && e.layers.length > 0 ? e.layers.forEach(n) : W.value.push(e.name);
			}, r = e.value.layersRaw[0];
			for (let e of t) {
				let t = r.layers.find((t) => t.name === e);
				t && t.layers && t.layers.length > 0 ? n(t) : t && W.value.push(t.name);
			}
			W.value = Array.from(new Set(W.value));
		}, Ue = (e) => e.map((e) => {
			switch (J.value) {
				case r.MAPIMAGE: return {
					index: e,
					state: {
						opacity: 1,
						visibility: !0
					}
				};
				case r.WMS: {
					let t = e.lastIndexOf("#");
					return { id: e.substring(0, t) };
				}
				default: return { id: e };
			}
		}), We = () => {
			A.value = Y.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
		}, Ge = (e) => {
			Y.value.config.colour = e.colors.hex.substring(0, 7), ne(() => {
				v.value.querySelector(".vacp-copy-button").style.backgroundColor = Y.value?.config.colour;
			});
		}, Ke = () => {
			R.value = !1, o.goToStep(0), Z(P);
		}, qe = () => {
			M.value = !1, I.value = !1, L.value = !1, R.value = !!K.value, B.value = !1, o.goToStep(0), U.value = "";
		}, Je = () => {
			W.value = [], z.value = !1, O.value?.abort(), o.goToStep(1);
		};
		return (e, t) => {
			let n = oe("panel-screen");
			return _(), l(n, {
				panel: a.panel,
				ref_key: "thePanel",
				ref: N
			}, {
				header: k(() => [ee(C(w(s)("wizard.title")), 1)]),
				content: k(() => [p(ke, { activeStep: D.value }, {
					default: k(() => [
						p(De, {
							title: w(s)("wizard.upload.title"),
							summary: K.value,
							onFocusPanel: ge,
							onFocusFirstElement: X
						}, {
							default: k(() => [f("form", {
								name: "upload",
								onSubmit: ve,
								onClick: t[1] ||= (e) => V.value = !1
							}, [
								p(Q, {
									type: "file",
									name: "file",
									label: w(s)("wizard.upload.file.label"),
									help: w(s)("wizard.upload.file.help"),
									onUpload: Ce,
									"aria-label": w(s)("wizard.upload.file.label")
								}, null, 8, [
									"label",
									"help",
									"aria-label"
								]),
								t[11] ||= f("span", { class: "block text-center mb-10" }, "or", -1),
								p(Q, {
									type: "url",
									name: "url",
									modelValue: K.value,
									"onUpdate:modelValue": t[0] ||= (e) => K.value = e,
									label: w(s)("wizard.upload.url.label"),
									onLink: we,
									validation: !0,
									"validation-messages": {
										required: w(s)("wizard.upload.url.error.required"),
										invalid: w(s)("wizard.upload.url.error.url")
									},
									"aria-label": w(s)("wizard.upload.url.label"),
									ref_key: "stepOneStart",
									ref: P
								}, null, 8, [
									"modelValue",
									"label",
									"validation-messages",
									"aria-label"
								]),
								p(F, {
									onSubmit: ve,
									onCancel: Ke,
									disabled: !R.value
								}, null, 8, ["disabled"])
							], 32)]),
							_: 1
						}, 8, ["title", "summary"]),
						p(De, {
							title: w(s)("wizard.format.title"),
							summary: U.value,
							onFocusFirstElement: X
						}, {
							default: k(() => [f("form", {
								name: "format",
								onSubmit: ye
							}, [
								me.value ? (_(), d("div", Ae, [t[12] ||= f("svg", {
									class: "inline-block fill-current w-16 h-16",
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24"
								}, [f("path", {
									d: "M0 0h24v24H0z",
									fill: "none"
								}), f("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })], -1), f("span", je, C(w(s)("wizard.format.info.cors")), 1)])) : u("", !0),
								p(Q, {
									type: "select",
									name: "type",
									modelValue: J.value,
									"onUpdate:modelValue": t[2] ||= (e) => J.value = e,
									onSelect: Te,
									size: $() ? pe.length : G.length,
									label: $() ? w(s)("wizard.format.type.file") : w(s)("wizard.format.type.service"),
									options: $() ? pe : G,
									formatError: I.value,
									failureError: L.value,
									validation: B.value,
									"validation-messages": {
										required: w(s)("wizard.format.type.error.required"),
										invalid: w(s)("wizard.format.type.error.invalid"),
										failure: he.value
									},
									onKeydown: t[3] ||= se(() => {}, ["stop"]),
									"aria-label": w(s)("wizard.format.type.service"),
									ref_key: "stepTwoStart",
									ref: ue
								}, null, 8, [
									"modelValue",
									"size",
									"label",
									"options",
									"formatError",
									"failureError",
									"validation",
									"validation-messages",
									"aria-label"
								]),
								p(F, {
									onSubmit: ye,
									onCancel: qe,
									animation: !0,
									disabled: M.value
								}, null, 8, ["disabled"])
							], 32)]),
							_: 1
						}, 8, ["title", "summary"]),
						p(De, {
							title: w(s)("wizard.configure.title"),
							onFocusFirstElement: X
						}, {
							default: k(() => [f("form", {
								name: "configure",
								onSubmit: be,
								ref_key: "formElement",
								ref: v
							}, [
								B.value && (I.value || L.value) ? (_(), d("div", Me, C(I.value ? w(s)("wizard.format.type.error.invalid") : he.value), 1)) : u("", !0),
								Y.value?.configOptions.includes("name") ? (_(), l(Q, {
									key: 1,
									type: "text",
									name: "name",
									modelValue: Y.value.config.name,
									"onUpdate:modelValue": t[4] ||= (e) => Y.value.config.name = e,
									onLink: Ee,
									label: w(s)("wizard.configure.name.label"),
									"aria-label": w(s)("wizard.configure.name.label"),
									validation: !0,
									"validation-messages": { required: w(s)("wizard.configure.name.error.required") },
									ref_key: "stepThreeStart",
									ref: de,
									onFocusElement: X,
									activeStep: D.value,
									step: 2
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"validation-messages",
									"activeStep"
								])) : u("", !0),
								Y.value?.configOptions.includes("nameField") ? (_(), l(Q, {
									key: 2,
									type: "select",
									name: "nameField",
									modelValue: Y.value.config.nameField,
									"onUpdate:modelValue": t[5] ||= (e) => Y.value.config.nameField = e,
									label: w(s)("wizard.configure.nameField.label"),
									"aria-label": w(s)("wizard.configure.nameField.label"),
									defaultOption: !0,
									options: xe()
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("maptipField") ? (_(), l(Q, {
									key: 3,
									type: "select",
									name: "maptipField",
									modelValue: Y.value.config.maptipField,
									"onUpdate:modelValue": t[6] ||= (e) => Y.value.config.maptipField = e,
									label: w(s)("wizard.configure.maptipField.label"),
									"aria-label": w(s)("wizard.configure.maptipField.label"),
									options: xe()
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("latField") ? (_(), l(Q, {
									key: 4,
									type: "select",
									name: "latField",
									modelValue: Y.value.config.latField,
									"onUpdate:modelValue": t[7] ||= (e) => Y.value.config.latField = e,
									defaultOption: !0,
									label: w(s)("wizard.configure.latField.label"),
									"aria-label": w(s)("wizard.configure.latField.label"),
									options: Se("lat")
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("longField") ? (_(), l(Q, {
									key: 5,
									type: "select",
									name: "longField",
									modelValue: Y.value.config.longField,
									"onUpdate:modelValue": t[8] ||= (e) => Y.value.config.longField = e,
									defaultOption: !0,
									label: w(s)("wizard.configure.longField.label"),
									"aria-label": w(s)("wizard.configure.longField.label"),
									options: Se("lon")
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("sublayers") ? (_(), d("div", Ne, [p(Q, {
									type: "checkbox",
									name: "nested",
									onNested: Re,
									label: w(s)("wizard.configure.sublayers.nested"),
									"aria-label": w(s)("wizard.configure.sublayers.nested")
								}, null, 8, ["label", "aria-label"]), (_(), l(Q, {
									type: "select",
									key: le.value,
									name: "sublayers",
									modelValue: Y.value.config.sublayers,
									"onUpdate:modelValue": t[9] ||= (e) => Y.value.config.sublayers = e,
									onSelect: Oe,
									label: w(s)("wizard.configure.sublayers.label"),
									"aria-label": w(s)("wizard.configure.sublayers.label"),
									options: Y.value.layers,
									selectedValues: W.value,
									sublayerOptions: Ue,
									multiple: !0,
									searchable: !0,
									validation: !0,
									"validation-messages": { required: w(s)("wizard.configure.sublayers.error.required") },
									onKeydown: t[10] ||= se(() => {}, ["stop"])
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options",
									"selectedValues",
									"validation-messages"
								]))])) : u("", !0),
								f("label", {
									class: "sr-only",
									for: `${w(ae)}-color-hex`
								}, C(w(s)("wizard.configure.colour.hex")), 9, Pe),
								Y.value?.configOptions.includes("colour") ? (_(), d("label", Fe, C(w(s)("wizard.configure.colour.label")), 1)) : u("", !0),
								Y.value?.configOptions.includes("colour") ? (_(), l(w(j), {
									key: 8,
									"alpha-channel": "hide",
									"visible-formats": ["hex"],
									"default-format": "hex",
									id: w(ae) + "-hue-slider",
									color: A.value,
									onColorChange: Ge
								}, {
									"hue-range-input-label": k(() => [f("span", Ie, C(w(s)("wizard.configure.colour.hue")), 1)]),
									"copy-button": k(() => [f("span", Le, C(w(s)("wizard.configure.colour.copy")), 1), t[13] ||= f("svg", {
										"aria-hidden": "true",
										xmlns: "http://www.w3.org/2000/svg",
										width: "15",
										height: "15",
										viewBox: "0 0 15 15"
									}, [f("path", {
										d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
										fill: "currentColor"
									}), f("path", {
										d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
										fill: "currentColor"
									})], -1)]),
									_: 1
								}, 8, ["id", "color"])) : u("", !0),
								p(F, {
									onSubmit: be,
									onCancel: Je,
									animation: M.value,
									disabled: !z.value
								}, null, 8, ["animation", "disabled"])
							], 544)]),
							_: 1
						}, 8, ["title"])
					]),
					_: 1
				}, 8, ["activeStep"]), V.value ? (_(), d("div", {
					key: 0,
					class: h(["p-3 border-solid border-2", H.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
				}, C(fe.value) + " " + C(w(s)(`wizard.upload.${H.value ? "success" : "fail"}`)), 3)) : u("", !0)]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-cc8e5e64"]]);
//#endregion
export { Re as default };
