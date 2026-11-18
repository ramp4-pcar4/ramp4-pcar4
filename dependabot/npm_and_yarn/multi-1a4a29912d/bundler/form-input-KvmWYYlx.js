import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { Fragment as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as ee, createVNode as te, defineComponent as a, inject as o, normalizeClass as s, onBeforeUnmount as c, onMounted as ne, openBlock as l, reactive as re, ref as u, renderList as d, resolveDirective as f, toDisplayString as p, unref as m, useTemplateRef as h, watch as ie, withCtx as g, withDirectives as ae } from "vue";
import { useI18n as oe } from "vue-i18n";
import { Treeselect as se } from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
//#region src/fixtures/wizard/form-input.vue?vue&type=script&setup=true&lang.ts
var ce = { key: 0 }, le = { class: "text-base font-bold" }, ue = {
	class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
	"data-type": "file"
}, de = [
	"accept",
	"multiple",
	"aria-label"
], fe = { class: "text-gray-500 text-xs mb-1" }, pe = { key: 1 }, me = { class: "text-base font-bold" }, he = {
	class: "mb-0.5",
	"data-type": "url"
}, ge = ["value", "aria-label"], _e = {
	key: 0,
	class: "text-red-900 text-xs"
}, _ = { key: 2 }, v = { class: "text-base font-bold" }, y = {
	class: "relative mb-0.5",
	"data-type": "select"
}, b = { key: 0 }, x = {
	key: 0,
	class: "text-red-900 text-xs"
}, S = { key: 1 }, C = [
	"size",
	"value",
	"aria-label"
], w = ["value"], T = {
	key: 0,
	class: "text-red-900 text-xs"
}, E = {
	key: 1,
	class: "text-red-900 text-xs"
}, D = { key: 3 }, O = ["aria-label"], k = { class: "text-base font-bold" }, A = { key: 4 }, j = { class: "text-base font-bold" }, M = { class: "relative mb-0.5" }, N = ["value", "aria-label"], P = {
	key: 0,
	class: "text-red-900 text-xs"
}, F = /*#__PURE__*/ e(/* @__PURE__ */ a({
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
		fileAccept: {
			type: String,
			default: ".geojson,.json,.csv,.zip"
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
		multipleFiles: {
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
	setup(e, { expose: a, emit: F }) {
		let I = o("iApi"), { t: L } = oe(), R = F, z = e, B = u(), V = h("textInput"), H = h("selectInput"), U = h("urlInput");
		a({
			selectInput: H,
			textInput: V,
			urlInput: U
		});
		let W = u(!1), G = u(!1), K = u(!1), q = u(!1), J = u([...z.selectedValues]), ve = u("value-label"), ye = u("option-label"), Y = u(void 0), X = u(null), Z = re([]);
		if (z.defaultOption && z.modelValue === "" && z.options.length) {
			let e = z.options[0].value;
			if (z.name === "latField") {
				let t = /* @__PURE__ */ new RegExp(/^(y|lat.*)$/i);
				e = z.options.find((e) => t.test(e.label))?.value || e;
			} else if (z.name === "longField") {
				let t = /* @__PURE__ */ new RegExp(/^(x|long.*)$/i);
				e = z.options.find((e) => t.test(e.label))?.value || e;
			}
			R("update:modelValue", e);
		}
		let be = (e) => {
			e.trim() === "" ? (W.value = !1, I.updateAlert(L("wizard.configure.name.error.required"))) : W.value = !0;
		}, xe = (e) => {
			let t;
			try {
				t = new URL(e);
			} catch {
				return W.value = !1, !1;
			}
			W.value = t.protocol === "http:" || t.protocol === "https:";
		}, Se = (e) => {
			let t = e.target, n = Array.from(t.files ?? []);
			n.length && R("upload", z.multipleFiles ? n : n[0]), t.value = "";
		}, Ce = (e) => {
			xe(e.target.value), R("link", e.target.value, W.value), G.value = !1;
		}, we = (e, t) => {
			R(e ? "select" : "update:modelValue", t.target.value);
		}, Q = (e) => {
			R("nested", e.target.checked);
		}, Te = (e) => {
			be(e.target.value), R("link", e.target.value, W.value), K.value = !1;
		}, $ = () => {
			R("select", z.sublayerOptions(J.value)), q.value = J.value && J.value.length === 0;
		}, Ee = (e) => e.length > 5 ? `${e.slice(0, 5)}...` : e;
		function De() {
			Y.value = new ResizeObserver(function() {
				Oe();
			}), Y.value.observe(I.$vApp.$el.querySelector(".vue-treeselect__control")), Y.value.observe(I.$vApp.$el.querySelector(".vue-treeselect__menu"));
		}
		let Oe = () => {
			let e = I.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight ?? 0, t = I.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight ?? 0;
			B.value.style.height = `${e + t + 30}px`;
		};
		Z.push(ie(X, (e) => {
			e && ke();
		}));
		let ke = () => {
			if (X.value) {
				let e = X.value.querySelector("input[type=\"text\"]");
				e && e.setAttribute("aria-label", L("wizard.configure.sublayers.select"));
			}
		};
		return ne(() => {
			z.step === 2 && z.step === z.activeStep && R("focusElement");
		}), c(() => {
			Y.value?.disconnect(), Z.forEach((e) => e());
		}), (a, o) => {
			let c = f("truncate");
			return l(), r("div", {
				class: "input-wrapper mb-12",
				ref_key: "el",
				ref: B
			}, [e.type === "file" ? (l(), r("div", ce, [
				i("label", le, p(e.label), 1),
				i("div", ue, [i("input", {
					class: "absolute w-full opacity-0 inset-0 cursor-pointer",
					type: "file",
					name: "file",
					accept: e.fileAccept,
					multiple: e.multipleFiles,
					"aria-label": z.ariaLabel,
					onInput: o[0] ||= (e) => {
						Se(e);
					}
				}, null, 40, de), o[11] ||= i("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [i("svg", {
					class: "w-30 h-30 m-auto",
					fill: "#a8a8a8",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 58 58"
				}, [i("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }), i("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })])], -1)]),
				i("div", fe, p(e.help), 1)
			])) : e.type === "url" ? (l(), r("div", pe, [
				i("label", me, p(e.label), 1),
				i("div", he, [i("input", {
					class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
					type: "url",
					name: "url",
					value: e.modelValue,
					"aria-label": z.ariaLabel,
					onChange: o[1] ||= (e) => W.value ? G.value = !1 : G.value = !0,
					onInput: o[2] ||= (e) => {
						Ce(e);
					},
					ref_key: "urlInput",
					ref: U
				}, null, 40, ge)]),
				G.value ? (l(), r("div", _e, p(e.modelValue ? e.validationMessages?.invalid : e.validationMessages?.required), 1)) : n("", !0)
			])) : e.type === "select" ? (l(), r("div", _, [i("label", v, p(e.label), 1), i("div", y, [e.multiple ? (l(), r("div", b, [i("div", {
				ref_key: "treeWrapper",
				ref: X
			}, [te(m(se), {
				modelValue: J.value,
				"onUpdate:modelValue": o[3] ||= (e) => J.value = e,
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
				placeholder: m(L)("wizard.configure.sublayers.select"),
				noResultsText: m(L)("wizard.configure.sublayers.results"),
				clearAllText: m(L)("wizard.configure.sublayers.clearAll"),
				onSelect: o[4] ||= (e) => {
					a.$nextTick(() => {
						$();
					});
				},
				onDeselect: o[5] ||= (e) => {
					a.$nextTick(() => {
						$();
					});
				},
				onOpen: o[6] ||= (e) => {
					a.$nextTick(() => {
						De();
					});
				}
			}, {
				[ve.value]: g(({ node: e }) => [i("label", null, p(Ee(e.label)), 1)]),
				[ye.value]: g(({ node: e, labelClassName: t }) => [ae((l(), r("label", { class: s(t) }, [ee(p(e.label), 1)], 2)), [[c, { options: {
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
			])], 512), e.validation && q.value ? (l(), r("div", x, p(e.validationMessages?.required), 1)) : n("", !0)])) : (l(), r("div", S, [
				i("select", {
					class: s(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", e.size ? "configure-select" : ""]),
					size: e.size,
					value: e.modelValue,
					onInput: o[7] ||= (t) => we(e.size, t),
					"aria-label": z.ariaLabel,
					ref_key: "selectInput",
					ref: H
				}, [(l(!0), r(t, null, d(e.options, (e) => (l(), r("option", {
					class: "p-6",
					key: e.label,
					value: e.value
				}, p(e.label), 9, w))), 128))], 42, C),
				e.validation && e.formatError ? (l(), r("div", T, p(e.validationMessages?.invalid), 1)) : n("", !0),
				e.validation && e.failureError ? (l(), r("div", E, p(e.validationMessages?.failure), 1)) : n("", !0)
			]))])])) : e.type === "checkbox" ? (l(), r("div", D, [i("input", {
				class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
				type: "checkbox",
				name: "nested",
				checked: !0,
				"aria-label": z.ariaLabel,
				onChange: o[8] ||= (e) => {
					Q(e);
				}
			}, null, 40, O), i("label", k, p(e.label), 1)])) : (l(), r("div", A, [
				i("label", j, p(e.label), 1),
				i("div", M, [i("input", {
					class: s(["border-solid border-gray-300 p-3 w-full", { "error-border": !W.value && !e.modelValue }]),
					type: "text",
					value: e.modelValue,
					"aria-label": z.ariaLabel,
					onChange: o[9] ||= (e) => W.value ? K.value = !1 : K.value = !0,
					onInput: o[10] ||= (e) => {
						Te(e);
					},
					ref_key: "textInput",
					ref: V
				}, null, 42, N)]),
				e.validation && !e.modelValue ? (l(), r("div", P, p(e.validationMessages?.required), 1)) : n("", !0)
			]))], 512);
		};
	}
}), [["__scopeId", "data-v-73b7db15"]]);
//#endregion
export { F as t };
