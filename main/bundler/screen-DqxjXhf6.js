import { B as e, R as t, U as n, V as r, et as i, o as a, ot as o, q as s, rt as c, tt as l } from "./main-DxKmGvij.js";
import { n as u, t as d } from "./table-state-manager-CGE1mEbW.js";
import { t as f } from "./_plugin-vue_export-helper-Djzt4Yr7.js";
import { n as p } from "./config-D5BWrqyx.js";
import { Fragment as ee, computed as m, createBlock as h, createCommentVNode as g, createElementBlock as _, createElementVNode as v, createTextVNode as y, createVNode as te, defineComponent as b, getCurrentInstance as ne, inject as re, markRaw as ie, nextTick as ae, normalizeClass as x, onBeforeMount as oe, onBeforeUnmount as S, onMounted as C, openBlock as w, ref as T, renderList as E, resolveComponent as se, resolveDirective as D, toDisplayString as O, unref as k, useTemplateRef as ce, vModelSelect as A, vModelText as j, vShow as M, watch as le, withCtx as N, withDirectives as P, withKeys as F, withModifiers as I } from "vue";
import { debounce as ue } from "es-toolkit/function";
import { useI18n as L } from "vue-i18n";
import R from "linkify-html";
import de from "await-to-js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as fe } from "ag-grid-vue3";
import { AG_GRID_LOCALE_EN as pe, AG_GRID_LOCALE_FR as me } from "@ag-grid-community/locale";
import { AllCommunityModule as he, ModuleRegistry as ge, provideGlobalGridOptions as _e } from "ag-grid-community";
// src/fixtures/grid/grid-utils.ts
function ve(e, t, n) {
	return e[t].find((e) => (e.mappedAttr ?? e.origAttr) === n);
}
function ye(e, t) {
	let n = ve(e, t.id, t.oidField);
	return n ? n.mappedAttr ?? n.origAttr : t.oidField;
}
// src/fixtures/grid/accessibility.ts
var be = ".ag-root", z = ".ag-header-viewport .ag-header-row", xe = class {
	element;
	agGrid;
	headerRows;
	agGridApi;
	mousedown = !1;
	static onCellKeyPress({ event: e }) {
		function t(e) {
			e.forEach((e) => {
				e.href && window.open(e.href), e.childNodes.length > 0 && t(e.childNodes);
			});
		}
		e.key == "Enter" && t(e.target.childNodes);
	}
	constructor(e, t) {
		this.element = e, this.agGridApi = t, this.agGrid = this.element.querySelector(be), this.headerRows = Array.prototype.slice.call(this.element.querySelectorAll(z)), this.initAccessibilityListeners(), this.initScrollListeners();
	}
	initAccessibilityListeners() {
		Array.prototype.slice.call(this.headerRows[0].querySelectorAll(".ag-header-cell")).forEach((e, t) => {
			let n = Array.prototype.slice.call(e.querySelectorAll("button"));
			t < 1 || n.length === 0 || (e.addEventListener("keydown", (t) => {
				this.cellKeydownHandler(t, e, n);
			}), e.addEventListener("blur", (t) => {
				this.cellBlurHandler(t, e, n);
			}), n[n.length - 1].addEventListener("keydown", (t) => {
				this.cellButtonTabHandler(t, e, n, !1);
			}), n[0].addEventListener("keydown", (t) => {
				this.cellButtonTabHandler(t, e, n, !0);
			}));
		});
	}
	removeAccessibilityListeners() {
		Array.prototype.slice.call(this.headerRows[0].querySelectorAll(".ag-header-cell")).forEach((e, t) => {
			let n = Array.prototype.slice.call(e.querySelectorAll("button"));
			t < 1 || n.length === 0 || (e.removeEventListener("keydown", (t) => {
				this.cellKeydownHandler(t, e, n);
			}), e.removeEventListener("blur", (t) => {
				this.cellBlurHandler(t, e, n);
			}), n[n.length - 1].removeEventListener("keydown", (t) => {
				this.cellButtonTabHandler(t, e, n, !1);
			}), n[0].removeEventListener("keydown", (t) => {
				this.cellButtonTabHandler(t, e, n, !0);
			}));
		});
	}
	cellKeydownHandler(e, t, n) {
		e.key === "Enter" && e.target === t && (e.preventDefault(), n.forEach((e) => {
			e.setAttribute("tabindex", "0");
		}), n[0].focus());
	}
	cellBlurHandler(e, t, n) {
		e.target === t && !n.includes(e.relatedTarget) && n.forEach((e) => {
			e.setAttribute("tabindex", "-1");
		});
	}
	cellButtonTabHandler(e, t, n, r) {
		e.key === "Tab" && (r && e.shiftKey || !r && !e.shiftKey) && (e.preventDefault(), t.focus(), n.forEach((e) => {
			e.setAttribute("tabindex", "-1");
		}));
	}
	initScrollListeners() {
		this.agGrid.style.cursor = "grab", this.agGrid.addEventListener("mousedown", (e) => {
			this.scrollMouseDownHandler(e);
		});
	}
	removeScrollListeners() {
		this.agGrid.style.cursor = "default", this.agGrid.removeEventListener("mousedown", (e) => {
			this.scrollMouseDownHandler(e);
		});
	}
	scrollMouseDownHandler(e) {
		let t = this.element.querySelector(".ag-body-horizontal-scroll-viewport"), n = t.scrollLeft, r = e.clientX;
		this.agGrid.style.cursor = "grabbing";
		let i = (e) => {
			let i = e.clientX - r;
			t.scrollLeft = n - i;
		}, a = () => {
			this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", i), this.agGrid.removeEventListener("mouseup", a), this.agGrid.removeEventListener("mouseleave", a);
		};
		this.agGrid.addEventListener("mousemove", i), this.agGrid.addEventListener("mouseup", a), this.agGrid.addEventListener("mouseleave", a);
	}
};
function Se(e) {
	let t = e.previousHeaderPosition.column, n = e.previousHeaderPosition.headerRowIndex, r = e.backwards ? n - 1 : n + 1;
	return r !== -1 && (r === e.headerRowCount && (r = -1), {
		headerRowIndex: r,
		column: t
	});
}
function Ce(e) {
	return e.backwards ? {
		column: e.previousCellPosition.column,
		rowIndex: -1
	} : !1;
}
// src/fixtures/grid/column-dropdown.vue?vue&type=script&setup=true&lang.ts
var B = ["onClick"], we = { class: "md-icon-small flex w-full" }, V = { class: "flex-1 truncate whitespace-nowrap overflow-hidden pr-4" }, Te = /* @__PURE__ */ b({
	__name: "column-dropdown",
	props: {
		columnDefs: {
			type: Object,
			required: !0
		},
		gridApi: { type: Object },
		systemCols: { type: Object }
	},
	setup(e) {
		let t = re("iApi"), { t: n } = L();
		return (r, i) => {
			let a = se("dropdown-menu"), o = D("truncate");
			return w(), h(a, {
				class: "relative",
				position: "bottom-end",
				tooltip: k(n)("grid.label.columns"),
				tooltipPlacementAlt: "left",
				centered: !1
			}, {
				header: N(() => [...i[0] ||= [v("div", { class: "flex p-8" }, [v("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fit: "",
					height: "24px",
					width: "24px",
					preserveAspectRatio: "xMidYMid meet",
					viewBox: "0 0 23 24",
					focusable: "false",
					class: "inline fill-current"
				}, [v("g", { id: "format-list-checks_cache966" }, [v("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" })])])], -1)]]),
				default: N(() => [(w(!0), _(ee, null, E(e.columnDefs.filter((n) => n.headerName && n.headerName.length > 0 && !(!k(t).ui.exposeOids && e.systemCols?.has(n.headerName)) && !(!k(t).ui.exposeMeasurements && (e.systemCols?.has(n.headerName) || e.systemCols?.has(n.field)))), (t) => (w(), _("a", {
					"truncate-trigger": "",
					tabindex: "0",
					key: t.headerName,
					onClick: (n) => {
						e.gridApi?.setColumnsVisible([t.field], t.hide), t.hide = !t.hide, r.$emit("refreshHeaders");
					},
					href: "javascript:;",
					class: "flex leading-snug items-center max-w-[268px]"
				}, [v("div", we, [P((w(), _("span", V, [y(O(t.headerName), 1)])), [[o, {
					externalTrigger: !0,
					options: { placement: "left" }
				}]]), (w(), _("svg", {
					height: "18",
					width: "18",
					viewBox: "0 0 24 24",
					class: x({ invisible: t.hide })
				}, [...i[1] ||= [v("g", { id: "done" }, [v("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]], 2))])], 8, B))), 128))]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), Ee = { class: "h-full flex items-center justify-center" }, De = [
	"placeholder",
	"aria-label",
	"disabled"
], H = [
	"placeholder",
	"aria-label",
	"disabled"
], Oe = /*#__PURE__*/ f(/* @__PURE__ */ b({
	methods: { onParentModelChanged() {} },
	__name: "custom-number-filter",
	props: ["params"],
	setup(t) {
		let n = e(), { t: r } = L(), i = t, a = T(""), o = T(""), s = T(!!i.params.stateManager.columns[i.params.column.colDef.field].filter.static), c = () => {
			d(), i.params.stateManager.setColumnFilterValue(i.params.column.colDef.field, a.value, "min");
		}, l = () => {
			d(), i.params.stateManager.setColumnFilterValue(i.params.column.colDef.field, o.value, "max");
		}, u = (e) => typeof e != "number" || isNaN(e), d = () => {
			a.value !== "" && u(a.value) && (a.value = ""), o.value !== "" && u(o.value) && (o.value = "");
			let e = i.params.column.colDef.field;
			o.value === "" && a.value === "" ? i.params.api.setColumnFilterModel(e, null) : o.value !== "" && a.value !== "" ? i.params.api.setColumnFilterModel(e, {
				filterType: "number",
				type: "inRange",
				filter: a.value,
				filterTo: o.value
			}) : a.value === "" ? i.params.api.setColumnFilterModel(e, {
				filterType: "number",
				type: "lessThanOrEqual",
				filter: o.value
			}) : i.params.api.setColumnFilterModel(e, {
				filterType: "number",
				type: "greaterThanOrEqual",
				filter: a.value
			}), i.params.api.onFilterChanged();
		};
		return oe(() => {
			a.value = i.params.stateManager.getColumnFilterValue(i.params.column.colDef.field, "min"), o.value = i.params.stateManager.getColumnFilterValue(i.params.column.colDef.field, "max"), c(), l();
		}), (e, t) => (w(), _("div", Ee, [
			P(v("input", {
				class: x(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": s.value }]),
				style: { width: "45%" },
				type: "number",
				"onUpdate:modelValue": t[0] ||= (e) => a.value = e,
				onInput: t[1] ||= (e) => c(),
				onMousedown: t[2] ||= I(() => {}, ["stop"]),
				onKeypress: t[3] ||= F(I(() => {}, ["prevent"]), ["enter"]),
				onKeyup: t[4] ||= F((e) => {
					k(n).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				placeholder: k(r)("grid.filters.number.min"),
				"aria-label": k(r)("grid.filters.number.min"),
				disabled: s.value
			}, null, 42, De), [[j, a.value]]),
			t[10] ||= v("span", { class: "w-12" }, null, -1),
			P(v("input", {
				class: x(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": s.value }]),
				style: { width: "45%" },
				type: "number",
				"onUpdate:modelValue": t[5] ||= (e) => o.value = e,
				onInput: t[6] ||= (e) => l(),
				onMousedown: t[7] ||= I(() => {}, ["stop"]),
				onKeypress: t[8] ||= F(I(() => {}, ["prevent"]), ["enter"]),
				onKeyup: t[9] ||= F((e) => {
					k(n).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				placeholder: k(r)("grid.filters.number.max"),
				"aria-label": k(r)("grid.filters.number.max"),
				disabled: s.value
			}, null, 42, H), [[j, o.value]])
		]));
	}
}), [["__scopeId", "data-v-ab99947a"]]), U = { class: "h-full flex items-center justify-center" }, W = [
	"placeholder",
	"aria-label",
	"disabled"
], ke = /* @__PURE__ */ b({
	methods: { onParentModelChanged() {} },
	__name: "custom-text-filter",
	props: ["params"],
	setup(t) {
		let n = e(), { t: r } = L(), i = t, a = T(""), o = T(i.params.stateManager.columns[i.params.column.colDef.field].filter.static), s = () => {
			a.value = a.value ? a.value : "";
			let e = i.params.column.colDef.field;
			a.value ? i.params.api.setColumnFilterModel(e, {
				filterType: "text",
				type: "contains",
				filter: a.value
			}) : i.params.api.setColumnFilterModel(e, null), i.params.stateManager.setColumnFilterValue(i.params.column.colDef.field, a.value), i.params.api.onFilterChanged();
		};
		return oe(() => {
			a.value = i.params.stateManager.getColumnFilterValue(i.params.column.colDef.field).toString(), s();
		}), (e, i) => (w(), _("div", U, [P(v("input", {
			class: x(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": o.value }]),
			type: "text",
			onInput: i[0] ||= (e) => s(),
			"onUpdate:modelValue": i[1] ||= (e) => a.value = e,
			onMousedown: i[2] ||= I(() => {}, ["stop"]),
			onKeypress: i[3] ||= F(I(() => {}, ["prevent"]), ["enter"]),
			onKeyup: i[4] ||= F((e) => {
				k(n).mobileView && e.target.blur();
			}, ["enter"]),
			enterkeyhint: "done",
			placeholder: k(r)("grid.filters.column.label.text", [t.params.column.colDef.headerName]),
			"aria-label": k(r)("grid.filters.column.label.text", [t.params.column.colDef.headerName]),
			disabled: o.value
		}, null, 42, W), [[j, a.value]])]));
	}
}), Ae = { class: "h-full flex items-center justify-center" }, G = ["aria-label", "disabled"], je = ["value"], Me = /*#__PURE__*/ f(/* @__PURE__ */ b({
	methods: { onParentModelChanged() {} },
	__name: "custom-selector-filter",
	props: ["params"],
	setup(e) {
		let t = e, n = T(""), r = T([]), i = T(t.params.stateManager.columns[t.params.column.colDef.field].filter.static), a = () => {
			n.value = n.value ? n.value : "";
			let e = t.params.column.colDef.field;
			n.value === "..." || !n.value ? (t.params.api.setColumnFilterModel(e, null), n.value = "") : t.params.api.setColumnFilterModel(e, {
				filterType: "text",
				type: "contains",
				filter: n.value
			}), t.params.stateManager.setColumnFilterValue(t.params.column.colDef.field, n.value), t.params.api.onFilterChanged();
		};
		return oe(() => {
			n.value = t.params.stateManager.getColumnFilterValue(t.params.column.colDef.field);
			let e = t.params.rowData, i = new Set(e.map((e) => e[t.params.column.colId]));
			r.value = Array.from(i), r.value.unshift("..."), a();
		}), (e, t) => (w(), _("div", Ae, [P(v("select", {
			class: x(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", { "cursor-not-allowed": i.value }]),
			"onUpdate:modelValue": t[0] ||= (e) => n.value = e,
			onChange: t[1] ||= (e) => a(),
			onMousedown: t[2] ||= I(() => {}, ["stop"]),
			"aria-label": n.value,
			disabled: i.value
		}, [(w(!0), _(ee, null, E(r.value, (e) => (w(), _("option", {
			value: e,
			key: e
		}, O(e), 9, je))), 128))], 42, G), [[A, n.value]])]));
	}
}), [["__scopeId", "data-v-46624a34"]]), Ne = { class: "h-full flex items-center justify-center w-full" }, K = [
	"placeholder",
	"aria-label",
	"disabled"
], q = [
	"placeholder",
	"aria-label",
	"disabled"
], Pe = /*#__PURE__*/ f(/* @__PURE__ */ b({
	methods: { onParentModelChanged() {} },
	__name: "custom-date-filter",
	props: ["params"],
	setup(t) {
		let n = e(), { t: r } = L(), i = t, a = T(""), o = T(""), s = T(i.params.stateManager.columns[i.params.column.colDef.field].filter.static), c = () => {
			u(), i.params.stateManager.setColumnFilterValue(i.params.column.colDef.field, a.value, "min");
		}, l = () => {
			u(), i.params.stateManager.setColumnFilterValue(i.params.column.colDef.field, o.value, "max");
		}, u = () => {
			let e = i.params.column.colDef.field;
			if (o.value === "" && a.value === "") i.params.api.setColumnFilterModel(e, null);
			else {
				let t = {
					filterType: "date",
					type: "inRange"
				};
				a.value !== "" && (t.dateFrom = a.value), o.value !== "" && (t.dateTo = o.value), i.params.api.setColumnFilterModel(e, t);
			}
			i.params.api.onFilterChanged();
		};
		return oe(() => {
			a.value = i.params.stateManager.getColumnFilterValue(i.params.column.colDef.field, "min") || "", o.value = i.params.stateManager.getColumnFilterValue(i.params.column.colDef.field, "max") || "", c(), l();
		}), (e, t) => (w(), _("div", Ne, [
			P(v("input", {
				class: x(["m-0 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": s.value }]),
				type: "date",
				placeholder: k(r)("grid.filters.date.min"),
				"aria-label": k(r)("grid.filters.date.min"),
				"onUpdate:modelValue": t[0] ||= (e) => a.value = e,
				onInput: t[1] ||= (e) => c(),
				onMousedown: t[2] ||= I(() => {}, ["stop"]),
				onKeypress: t[3] ||= F(I(() => {}, ["prevent"]), ["enter"]),
				onKeyup: t[4] ||= F((e) => {
					k(n).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				disabled: s.value
			}, null, 42, K), [[j, a.value]]),
			t[10] ||= v("span", { class: "w-12" }, null, -1),
			P(v("input", {
				class: x(["m-0 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": s.value }]),
				type: "date",
				placeholder: k(r)("grid.filters.date.max"),
				"aria-label": k(r)("grid.filters.date.max"),
				"onUpdate:modelValue": t[5] ||= (e) => o.value = e,
				onInput: t[6] ||= (e) => l(),
				onMousedown: t[7] ||= I(() => {}, ["stop"]),
				onKeypress: t[8] ||= F(I(() => {}, ["prevent"]), ["enter"]),
				onKeyup: t[9] ||= F((e) => {
					k(n).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				disabled: s.value
			}, null, 42, q), [[j, o.value]])
		]));
	}
}), [["__scopeId", "data-v-e5e48580"]]), Fe = [
	"content",
	"disabled",
	"aria-label"
], Ie = /* @__PURE__ */ b({
	__name: "clear-filter",
	props: ["params"],
	setup(e) {
		let t = e, { t: n } = L(), r = T(), i = T(), a = T(), o = () => t.params.clearFilters();
		return C(async () => {
			await ae(), i.value = r.value?.closest(".ag-header-cell"), a.value = i.value.closest(".ag-pinned-left-header"), i.value.addEventListener("keydown", async (e) => {
				e.key === "Enter" && (e.stopPropagation(), o(), await ae(), (a.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
			}), i.value.addEventListener("focus", () => {
				r.value._tippy.show();
			}), i.value.addEventListener("blur", () => {
				r.value._tippy.hide();
			});
		}), S(() => {
			i.value && (i.value.removeEventListener("keydown", async (e) => {
				e.key === "Enter" && (e.stopPropagation(), o(), await ae(), (a.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
			}), i.value.removeEventListener("focus", () => {
				r.value._tippy.show();
			}), i.value.removeEventListener("blur", () => {
				r.value._tippy.hide();
			}));
		}), (t, i) => {
			let a = D("tippy");
			return P((w(), _("button", {
				type: "button",
				class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
				onClick: o,
				content: k(n)("grid.filters.clear"),
				disabled: !e.params.stateManager.filtered,
				tabindex: "-1",
				ref_key: "el",
				ref: r,
				"aria-label": k(n)("grid.filters.clear")
			}, [...i[0] ||= [v("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				"enable-background": "new 0 0 24 24",
				class: "h-24 w-24 fill-current",
				viewBox: "0 0 24 24"
			}, [v("g", null, [v("rect", {
				fill: "none",
				height: "24",
				width: "24"
			})]), v("g", null, [v("g", null, [v("path", { d: "M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z" }), v("path", { d: "M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z" })])])], -1)]], 8, Fe)), [[a, { placement: "bottom" }]]);
		};
	}
}), Le = {
	key: 0,
	class: "flex flex-1 items-center min-w-0",
	"truncate-trigger": ""
}, Re = ["content", "aria-label"], J = {
	key: 1,
	class: "customHeaderLabel",
	role: "columnheader"
}, ze = {
	key: 2,
	class: "flex"
}, Y = {
	key: 0,
	class: "w-24 inline-block"
}, Be = {
	key: 1,
	class: "customSortDownLabel"
}, X = {
	key: 2,
	class: "customSortUpLabel"
}, Ve = [
	"content",
	"aria-label",
	"disabled"
], He = [
	"content",
	"aria-label",
	"disabled"
], Ue = /* @__PURE__ */ b({
	__name: "custom-header",
	props: ["params"],
	setup(e) {
		let { t } = L(), n = e, r = T(), i = T(0), a = T(!1), o = T(!1), s = T(!1), c = T(null), l = () => {
			let e = c.value?.getAllDisplayedColumns(), t = e.indexOf(n.params.column), r = e[t - 1]?.colDef, i = e[t + 1]?.colDef;
			o.value = t > 3 && !(r?.headerComponentParams?.isStatic ?? r?.isStatic), s.value = t < e.length - 1 && !(i?.headerComponentParams?.isStatic ?? i?.isStatic);
		}, u = () => {
			let e = c.value?.getAllDisplayedColumns(), t = c.value?.getAllGridColumns(), i = t.indexOf(e[e.indexOf(n.params.column) - 1]);
			o.value && (c.value?.moveColumns([n.params.column], i), n.params.api.ensureColumnVisible(t[i]), (r.value?.closest(".ag-header-row")?.querySelector(`[col-id="${n.params.column.colId}"]`)?.querySelector(".move-left"))?.focus());
		}, d = () => {
			let e = c.value?.getAllDisplayedColumns(), t = c.value?.getAllGridColumns(), r = t.indexOf(e[e.indexOf(n.params.column) + 1]);
			s.value && (c.value?.moveColumns([n.params.column], r), n.params.api.ensureColumnVisible(t[r]));
		}, f = (e) => {
			i.value = (i.value + 1) % 3, i.value === 1 ? n.params.setSort("asc", e.shiftKey) : i.value === 2 ? n.params.setSort("desc", e.shiftKey) : n.params.setSort("none", e.shiftKey);
		};
		return C(() => {
			a.value = n.params.column.colDef.sortable, c.value = n.params.api, n.params.sort === "asc" ? (i.value = 1, n.params.setSort("asc")) : n.params.sort === "desc" && (i.value = 2, n.params.setSort("desc")), l(), n.params.column.addEventListener("leftChanged", () => {
				l();
			});
		}), S(() => {
			n.params.column.removeEventListener("leftChanged", () => {
				l();
			});
		}), (n, c) => {
			let l = D("truncate"), p = D("tippy");
			return w(), _("div", {
				class: "ag-custom-header flex flex-1 items-center h-full w-full",
				ref_key: "el",
				ref: r
			}, [a.value ? (w(), _("div", Le, [P((w(), _("button", {
				type: "button",
				onClick: c[0] ||= (e) => f(e),
				content: k(t)(`grid.header.sort.${i.value}`),
				"aria-label": k(t)(`grid.header.sort.${i.value}`),
				class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
				role: "columnheader",
				tabindex: "-1"
			}, [P((w(), _("div", null, [y(O(e.params.displayName), 1)])), [[l, { externalTrigger: !0 }]])], 8, Re)), [[p, {
				placement: "top",
				hideOnClick: !1
			}]])])) : P((w(), _("span", J, [y(O(e.params.displayName), 1)])), [[l]]), a.value ? (w(), _("div", ze, [
				e.params.enableSorting && i.value === 0 ? (w(), _("span", Y)) : g("", !0),
				e.params.enableSorting && i.value === 1 ? (w(), _("span", Be, [...c[3] ||= [v("div", { class: "md-icon-small" }, [v("svg", {
					height: "24",
					width: "24"
				}, [v("g", { id: "arrow_upward" }, [v("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })])])], -1)]])) : g("", !0),
				e.params.enableSorting && i.value === 2 ? (w(), _("span", X, [...c[4] ||= [v("div", { class: "md-icon-small" }, [v("svg", {
					height: "24",
					width: "24"
				}, [v("g", { id: "arrow_downward" }, [v("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })])])], -1)]])) : g("", !0),
				P((w(), _("button", {
					type: "button",
					content: k(t)("grid.header.reorder.left"),
					"aria-label": k(t)("grid.header.reorder.left"),
					onClick: c[1] ||= (e) => u(),
					class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
					tabindex: "-1",
					disabled: !o.value
				}, [...c[5] ||= [v("div", { class: "inline-block" }, [v("svg", {
					height: "24",
					width: "24"
				}, [v("g", { id: "keyboard_arrow_left" }, [v("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })])])], -1)]], 8, Ve)), [[p, { placement: "top" }]]),
				P((w(), _("button", {
					type: "button",
					content: k(t)("grid.header.reorder.right"),
					"aria-label": k(t)("grid.header.reorder.right"),
					onClick: c[2] ||= (e) => d(),
					class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
					tabindex: "-1",
					disabled: !s.value
				}, [...c[6] ||= [v("div", { class: "inline-block" }, [v("svg", {
					height: "24",
					width: "24"
				}, [v("g", { id: "keyboard_arrow_right" }, [v("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" })])])], -1)]], 8, He)), [[p, { placement: "top" }]])
			])) : g("", !0)], 512);
		};
	}
}), We = ["content", "aria-label"], Ge = /* @__PURE__ */ b({
	__name: "details-button-renderer",
	props: ["params"],
	setup(e) {
		let t = e, { t: n } = L(), i = re("iApi"), a = T(), o = async () => {
			let e = t.params.data, n = e.rvUid, a = i.geo.layer.getLayer(n), o = ye(t.params.layerCols, a), s = await a.getGraphic(e[o], { getAttribs: !0 });
			i.event.emit(r.DETAILS_TOGGLE, {
				data: s.attributes,
				uid: n,
				format: c.ESRI
			}, !0), t.params.isTeleport && i.scrollToInstance();
		};
		return C(() => {
			t.params.eGridCell.addEventListener("keydown", (e) => {
				e.key === "Enter" && o();
			}), t.params.eGridCell.addEventListener("focus", () => {
				a.value._tippy.show();
			}), t.params.eGridCell.addEventListener("blur", () => {
				a.value._tippy.hide();
			});
		}), S(() => {
			t.params.eGridCell.removeEventListener("keydown", (e) => {
				e.key === "Enter" && o();
			}), t.params.eGridCell.removeEventListener("focus", () => {
				a.value._tippy.show();
			}), t.params.eGridCell.removeEventListener("blur", () => {
				a.value._tippy.hide();
			});
		}), (e, t) => {
			let r = D("tippy");
			return P((w(), _("button", {
				type: "button",
				class: "flex items-center justify-center w-40 h-36",
				content: k(n)("grid.cells.details"),
				onClick: o,
				tabindex: "-1",
				ref_key: "el",
				ref: a,
				"aria-label": k(n)("grid.cells.details")
			}, [...t[0] ||= [v("svg", {
				class: "m-auto",
				xmlns: "http://www.w3.org/2000/svg",
				height: "16",
				viewBox: "0 0 24 24",
				width: "16"
			}, [v("path", {
				d: "M0 0h24v24H0z",
				fill: "none"
			}), v("path", {
				style: { fill: "#979797" },
				d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
			})], -1)]], 8, We)), [[r, { placement: "top" }]]);
		};
	}
}), Z = ["content", "aria-label"], Ke = {
	key: 0,
	class: "m-auto animate-spin spinner h-20 w-20"
}, qe = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	"stroke-width": "1.5",
	stroke: "green",
	class: "w-20 h-20"
}, Je = {
	key: 2,
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	"stroke-width": "1.5",
	stroke: "red",
	class: "w-20 h-20"
}, Ye = ["innerHTML"], Xe = /* @__PURE__ */ b({
	__name: "zoom-button-renderer",
	props: ["params"],
	setup(e) {
		let t = T("none"), n = e, r = re("iApi"), i = p(), a = T(), { t: o } = L(), s = m(() => {
			let e = i.getLayerByUid(n.params.data.rvUid);
			return !!e && e.mapLayer;
		}), c = () => {
			if (t.value !== "none") return;
			t.value = "zooming";
			let e = i.getLayerByUid(n.params.data.rvUid);
			if (e === void 0 || !e.isLoaded) {
				l("error");
				return;
			}
			let a = ye(n.params.layerCols, e), o = n.params.data[a];
			e.zoomToFeature(o).then((e) => {
				e ? (l("zoomed"), r.updateAlert(r.$i18n.t("grid.cells.alert.zoom")), n.params.isTeleport && r.scrollToInstance()) : l("error");
			});
		}, l = (e) => {
			e === "zoomed" || e === "error" ? setTimeout(() => {
				t.value = e, a.value?._tippy.show(), setTimeout(() => {
					a.value?._tippy.hide(), t.value = "none";
				}, 3e3);
			}, 300) : t.value = e;
		};
		return C(() => {
			s.value && (n.params.eGridCell.addEventListener("keydown", (e) => {
				e.key === "Enter" && t.value === "none" && c();
			}), n.params.eGridCell.addEventListener("focus", () => {
				a.value?._tippy.show();
			}), n.params.eGridCell.addEventListener("blur", () => {
				a.value?._tippy.hide();
			}));
		}), S(() => {
			s.value && (n.params.eGridCell.removeEventListener("keydown", (e) => {
				e.key === "Enter" && c();
			}), n.params.eGridCell.removeEventListener("focus", () => {
				a.value?._tippy.show();
			}), n.params.eGridCell.removeEventListener("blur", () => {
				a.value?._tippy.hide();
			}));
		}), (e, n) => {
			let i = D("tippy");
			return s.value ? P((w(), _("button", {
				key: 0,
				type: "button",
				class: "flex items-center justify-center w-40 h-36",
				content: k(o)(`grid.cells.zoom${t.value === "none" ? "" : `.${t.value}`}`),
				onClick: c,
				tabindex: "-1",
				ref_key: "button",
				ref: a,
				"aria-label": k(o)(`grid.cells.zoom${t.value === "none" ? "" : `.${t.value}`}`)
			}, [t.value === "zooming" ? (w(), _("div", Ke)) : t.value === "zoomed" ? (w(), _("svg", qe, [...n[0] ||= [v("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 12.75l6 6 9-13.5"
			}, null, -1)]])) : t.value === "error" ? (w(), _("svg", Je, [...n[1] ||= [v("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			}, null, -1)]])) : (w(), _("span", {
				key: 3,
				innerHTML: k(r).ui.getZoomIcon()
			}, null, 8, Ye))], 8, Z)), [[i, { placement: "top" }]]) : g("", !0);
		};
	}
}), Ze = ["content"], Qe = ["innerHTML"], $e = /* @__PURE__ */ b({
	__name: "custom-button-renderer",
	props: ["params"],
	setup(e) {
		let t = e, n = re("iApi"), r = T(), i = m(() => {
			let e = Object.assign({}, t.params.data), r = n.geo.layer.getLayer(e.rvUid), i = t.params.config.displayOn;
			return !(!r || i === "geo" && !r.mapLayer || i === "data" && r.mapLayer);
		}), a = () => {
			let e = Object.assign({}, t.params.data), r = e.rvUid, i = n.geo.layer.getLayer(r), a = e[ye(t.params.layerCols, i)];
			i.getGraphic(a, { getAttribs: !0 }).then((e) => {
				n.event.emit(t.params.config.actionEvent, {
					data: e.attributes,
					layer: i,
					uid: r,
					oid: a
				});
			});
		};
		return C(() => {
			t.params.eGridCell.addEventListener("keydown", (e) => {
				e.key === "Enter" && a();
			}), t.params.eGridCell.addEventListener("focus", () => {
				r.value._tippy.show();
			}), t.params.eGridCell.addEventListener("blur", () => {
				r.value._tippy.hide();
			});
		}), S(() => {
			t.params.eGridCell.removeEventListener("keydown", (e) => {
				e.key === "Enter" && a();
			}), t.params.eGridCell.removeEventListener("focus", () => {
				r.value._tippy.show();
			}), t.params.eGridCell.removeEventListener("blur", () => {
				r.value._tippy.hide();
			});
		}), (e, n) => {
			let o = D("tippy");
			return i.value ? P((w(), _("button", {
				key: 0,
				type: "button",
				class: "flex items-center justify-center w-42 h-38",
				content: t.params.config.tooltip,
				onClick: a,
				tabindex: "-1",
				ref_key: "el",
				ref: r
			}, [v("span", { innerHTML: t.params.config.icon }, null, 8, Qe)], 8, Ze)), [[o, { placement: "top" }]]) : g("", !0);
		};
	}
}), et = [
	"name",
	"content",
	"innerHTML"
], tt = ["content"], nt = /* @__PURE__ */ b({
	__name: "cell-renderer",
	props: ["params"],
	setup(t) {
		let n = e(), r = re("iApi"), { t: i } = L(), a = T(), o = T(), s = T(!1), c = t, l = m(() => n.mobileView), u = () => {
			o.value?.textContent && (s.value = !0, a.value?._tippy.show(), navigator.clipboard.writeText(o.value?.textContent), setTimeout(() => {
				s.value = !1;
			}, 2e3));
		}, d = m(() => c.params.type === "number" ? c.params.value == null ? "" : r.ui.formatNumber(c.params.value) : c.params.type === "date" ? c.params.value == null ? "" : new Date(c.params.value).toISOString().slice(0, 10) : c.params.type === "string" ? !c.params.value || /<a[^>]*>[^<]+<\/a>/g.test(c.params.value) ? c.params.value : R(c.params.value, {
			target: "_blank",
			validate: { url: (e) => /^https?:\/\//.test(e) }
		}) : ""), f = m(() => /<a[^>]*>[^<]+<\/a>/g.test(c.params.value) || /(http(s)?:\/\/.*)/g.test(c.params.value));
		return C(() => {
			c.params.eGridCell.addEventListener("dblclick", () => {
				u();
			}), c.params.eGridCell.addEventListener("keydown", (e) => {
				e.ctrlKey && e.code === "KeyC" && u();
			}), c.params.eGridCell.addEventListener("blur", () => {
				o.value._tippy.hide(), a.value?._tippy.hide();
			}), c.params.eGridCell.addEventListener("focus", () => {
				o.value?._tippy.show(), setTimeout(() => {
					document.activeElement === c.params.eGridCell && a.value?._tippy.show();
				}, 1e3), o.value._tippy.reference.clientWidth >= o.value._tippy.reference.scrollWidth && o.value._tippy.hide();
			});
		}), S(() => {
			c.params.eGridCell.removeEventListener("dblclick", () => {
				u();
			}), c.params.eGridCell.removeEventListener("keydown", (e) => {
				e.ctrlKey && e.code === "KeyC" && u();
			}), c.params.eGridCell.removeEventListener("blur", () => {
				o.value._tippy.hide(), a.value?._tippy.hide();
			}), c.params.eGridCell.removeEventListener("focus", () => {
				o.value._tippy.show(), a.value?._tippy.show();
			});
		}), (e, t) => {
			let n = D("truncate"), r = D("tippy");
			return w(), _("div", null, [P(v("div", {
				name: d.value,
				content: d.value,
				tabindex: "-1",
				innerHTML: d.value,
				ref_key: "el",
				ref: o
			}, null, 8, et), [[n, { options: {
				placement: "top",
				hideOnClick: !1,
				theme: "ramp4",
				maxWidth: l.value ? 300 : 700,
				animation: "scale",
				interactive: f.value
			} }]]), o.value?.textContent ? P((w(), _("div", {
				key: 0,
				ref_key: "copyTooltip",
				ref: a,
				content: k(i)(`grid.label.${s.value ? "copied" : "copy"}`)
			}, null, 8, tt)), [[r, {
				triggerTarget: o.value,
				placement: "bottom",
				theme: "ramp4",
				hideOnClick: !1,
				delay: [1e3, 0]
			}]]) : g("", !0)]);
		};
	}
}), rt = { class: "pl-8" }, it = { class: "flex flex-col justify-center items-center h-full" }, at = { class: "flex flex-row" }, ot = { class: "font-bold text-2xl" }, st = { class: "mt-20 text-xl" }, ct = { class: "my-20" }, lt = { class: "text-sm" }, ut = ["aria-label"], dt = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, ft = { class: "flex flex-1 flex-col max-w-full mr-8" }, pt = { class: "w-full font-bold" }, mt = { class: "w-full text-sm" }, ht = { key: 0 }, gt = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, _t = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, vt = ["aria-label", "placeholder"], yt = { class: "-ml-30 text-gray-500 search-clear-container" }, bt = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	fit: "",
	preserveAspectRatio: "xMidYMid meet",
	viewBox: "0 0 24 24",
	focusable: "false",
	class: "fill-current w-24 h-24 flex-shrink-0"
}, xt = ["aria-label"], St = { class: "pb-2 flex ml-auto justify-end" }, Ct = ["content", "aria-label"], wt = ["aria-label"], Tt = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Et = { class: "grow" }, Dt = {
	key: 0,
	height: "18",
	width: "18",
	viewBox: "0 0 24 24"
}, Ot = ["aria-label"], kt = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, At = { class: "grow" }, jt = {
	key: 0,
	height: "18",
	width: "18",
	viewBox: "0 0 24 24"
}, Mt = ["aria-label"], Nt = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Pt = { class: "grow" }, Ft = {
	key: 0,
	height: "18",
	width: "18",
	viewBox: "0 0 24 24"
}, It = ["aria-label"], Lt = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Rt = {
	key: 0,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, zt = {
	key: 1,
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 24 24",
	class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Bt = { class: "grow" }, Vt = {
	key: 2,
	height: "18",
	width: "18",
	viewBox: "0 0 24 24"
}, Ht = ["aria-label"], Ut = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Wt = { class: "grow" }, Gt = ["content"], Kt = /*#__PURE__*/ f(/* @__PURE__ */ b({
	__name: "table-component",
	props: {
		panel: {
			type: a,
			required: !0
		},
		gridId: {
			type: String,
			required: !0
		}
	},
	setup(a) {
		ge.registerModules([he]), _e({ theme: "legacy" });
		let c = [
			l.OID,
			l.DOUBLE,
			l.SINGLE,
			l.INTEGER
		], f = re("iApi"), p = n(), ee = e(), h = m(() => ee.mobileView), b = T(!h.value), E = T(), A = ce("gridContainer"), { t: R, locale: ye } = L(), be = () => ne()?.proxy?.$forceUpdate(), z = a, B = T({
			id: "dummy",
			layerIds: [],
			state: new d(),
			fieldMap: {}
		}), we = T(!0), V = T(null), Ee = T(), De = T(), H = T(!1), U = T(!1), W = T([]), Ae = T(0), G = T([]), je = T([]), Ne = T(""), K = T([]), q = T([]), Fe = T("OBJECTID"), Le = T(void 0), Re = xe.onCellKeyPress, J = T({
			firstRow: 0,
			lastRow: 0,
			visibleRows: 0
		}), ze = T({}), Y = T({}), Be = T(p.grids[z.gridId].layerIds), X = m(() => p.grids[z.gridId] ? Be.value.map((e) => f.geo.layer.getLayer(e)).filter((e) => e !== void 0) : []), Ve = m(() => B.value.state.filtered || B.value.state.searchFilter), He = T(/* @__PURE__ */ new Set()), We = T([]), Z = m(() => V.value), Ke = () => {
			f.$vApp.$el.querySelectorAll(".ag-input-field-input.ag-checkbox-input").forEach((e, t) => {
				let n = Z.value.getAllDisplayedColumns()?.[t].getColDef();
				e.setAttribute("aria-label", n?.headerName ?? R("grid.label.specialColumn"));
			});
		}, qe = () => {
			(E.value?.querySelectorAll("[data-ref$=\"Viewport\"]"))?.forEach((e) => {
				e.setAttribute("tabindex", "-1");
			});
		}, Je = m(() => X.value.some((e) => e.layerState === o.LOADED && e.visibility)), Ye = (e) => {
			V.value = e.api;
			let t = B.value.state.title;
			t ||= f.geo.layer.getLayer(z.gridId)?.name || z.gridId, Ne.value = t, Jt(), q.value.length > 0 && Z.value.autoSizeAllColumns(), Ke(), qe(), Z.value.addEventListener("rowDataUpdated", Ke), G.value.push(f.event.on(r.FILTER_CHANGE, ({ uid: e, filterKey: t }) => {
				t !== i.GRID && e && X.value.map((e) => e.uid).includes(e) && Q();
			})), G.value.push(f.event.on(r.LAYER_VISIBILITYCHANGE, ({ layer: e }) => {
				e.uid && X.value.map((e) => e.uid).includes(e.uid) && Q();
			})), G.value.push(f.event.on(r.LAYER_RELOAD_END, (e) => {
				e.loadPromise().then(() => {
					X.value.map((e) => e.uid).includes(e.uid) && Q();
				});
			})), G.value.push(f.event.on(r.LANG_CHANGE, () => {
				Z.value.redrawRows({ force: !0 });
			})), G.value.push(f.event.on(r.MAP_EXTENTCHANGE, ue(() => {
				B.value.state.filterByExtent && Q();
			}, 100))), G.value.push(f.event.on(r.LAYER_REMOVE, (e) => {
				Be.value.includes(e.id) && X.value.length !== 0 && _n();
			})), Q();
		}, Ze = () => {
			Z.value.autoSizeAllColumns(), Le.value = new xe(E.value, V.value), Ke(), qe();
		}, Qe = () => {
			Z.value.setGridOption("quickFilterText", B.value.state.searchFilter);
		}, et = () => {
			B.value.state.searchFilter = "", Qe();
		}, tt = () => {
			et(), Xt(), Q();
		}, Kt = () => {
			B.value.state.filterByExtent = !B.value.state.filterByExtent, Q();
		}, qt = () => {
			let e = Z.value.getColumnDefs();
			B.value.state.colFilter = !B.value.state.colFilter, e?.forEach((e) => {
				e.floatingFilter = B.value.state.colFilter;
			}), Z.value.setGridOption("columnDefs", e);
		}, Jt = () => {
			V.value && !H.value && (B.value.state.searchFilter !== "" && Qe(), B.value.state.applyToMap && cn(), ae(() => {
				let e = Z.value.getAllDisplayedColumns();
				e && e.length > 0 && Z.value.refreshCells({ columns: [e[0]] }), Yt();
			}));
		}, Yt = () => {
			J.value.firstRow = Z.value.getFirstDisplayedRowIndex() + 1, J.value.lastRow = Z.value.getLastDisplayedRowIndex() + 1, J.value.visibleRows = Z.value.getDisplayedRowCount();
		}, Xt = () => {
			Z.value.setFilterModel({}), B.value.state.clearFilters(), Z.value.refreshHeader();
		}, Zt = () => {
			b.value = !b.value;
			let e = b.value ? "left" : null, t = Z.value.getAllDisplayedColumns();
			t && t.length >= 3 && Z.value.setColumnsPinned(t.slice(1, 3), e);
		}, Qt = () => {
			let e = Z.value.getAllDisplayedColumns().filter((e) => !e.getColDef().headerComponentParams?.preventExport), t = document.createElement("p"), n = (e) => (t.innerHTML = e, t.textContent || t.innerText);
			Z.value.exportDataAsCsv({
				columnKeys: e,
				suppressQuotes: !0,
				processCellCallback: (e) => {
					let t = e.column.getColDef().cellRendererParams;
					return !e.value || t && t.type === "number" ? e.value : t && t.type === "date" ? `"${new Date(e.value).toLocaleDateString("en-CA", {
						timeZone: "UTC",
						year: "numeric",
						month: "2-digit",
						day: "2-digit",
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit"
					})}"` : `"${n(e.value).replace(/"/g, "\"\"")}"`;
				}
			});
		}, $t = (e, t) => {
			e.floatingFilterComponent = "dateFloatingFilter", e.filterParams.comparator = function(e, t) {
				if (!e) return 0;
				let n = new Date(t);
				return n.getUTCFullYear() > e.getUTCFullYear() ? 1 : n.getUTCFullYear() < e.getUTCFullYear() ? -1 : n.getUTCMonth() > e.getUTCMonth() ? 1 : n.getUTCMonth() < e.getUTCMonth() ? -1 : n.getUTCDate() - e.getUTCDate();
			}, e.filterParams.inRangeInclusive = !0, e.suppressFloatingFilterButton = !0, e.floatingFilterComponentParams = { stateManager: t };
		}, en = (e, t, n) => {
			e.floatingFilterComponent = "selectorFloatingFilter", e.filterParams.inRangeInclusive = !0, e.suppressFloatingFilterButton = !0, e.floatingFilterComponentParams = {
				stateManager: n,
				rowData: t
			};
		}, tn = (e, t) => {
			e.floatingFilterComponent = "numberFloatingFilter", e.filterParams.inRangeInclusive = !0, e.suppressFloatingFilterButton = !0, e.floatingFilterComponentParams = { stateManager: t };
		}, nn = (e, t) => {
			e.floatingFilterComponent = "textFloatingFilter", e.suppressFloatingFilterButton = !0, e.floatingFilterComponentParams = { stateManager: t }, e.filterParams.textMatcher = function(e) {
				if (!e.filterText || typeof e.filterText != "string") return !0;
				let t = e.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
				return RegExp(`^.*${t}.*`).test(e.value);
			};
			let n = function(e) {
				if (!e || typeof e != "string") return e;
				let t = e.toLowerCase();
				return t = t.replace(/* @__PURE__ */ RegExp("[àáâãäå]", "g"), "a"), t = t.replace(/* @__PURE__ */ RegExp("æ", "g"), "ae"), t = t.replace(/* @__PURE__ */ RegExp("ç", "g"), "c"), t = t.replace(/* @__PURE__ */ RegExp("[èéêë]", "g"), "e"), t = t.replace(/* @__PURE__ */ RegExp("[ìíîï]", "g"), "i"), t = t.replace(/* @__PURE__ */ RegExp("ñ", "g"), "n"), t = t.replace(/* @__PURE__ */ RegExp("[òóôõö]", "g"), "o"), t = t.replace(/* @__PURE__ */ RegExp("œ", "g"), "oe"), t = t.replace(/* @__PURE__ */ RegExp("[ùúûü]", "g"), "u"), t = t.replace(/* @__PURE__ */ RegExp("[ýÿ]", "g"), "y"), t;
			};
			e.filterParams.textFormatter = function(e) {
				return n(e);
			};
		}, rn = (e, t, n) => {
			if (e.field === "rvRowIndex") {
				let e = {
					field: "rvRowIndex",
					headerName: "",
					headerComponentParams: { preventExport: !0 },
					sortable: !1,
					lockPosition: !0,
					valueGetter: "node.rowIndex + 1",
					suppressMovable: !0,
					suppressHeaderMenuButton: !0,
					suppressHeaderContextMenu: !0,
					floatingFilter: B.value.state.colFilter,
					pinned: "left",
					maxWidth: 42,
					cellStyle: () => ({
						"padding-left": "2px",
						"padding-right": "2px",
						display: "flex",
						"justify-content": "center"
					}),
					floatingFilterComponent: "clearFloatingFilter",
					suppressFloatingFilterButton: !0,
					floatingFilterComponentParams: {
						stateManager: n,
						clearFilters: Xt
					},
					filter: !0
				};
				t.push(e);
			}
			if (e.field === "rvInteractive") {
				let e = B.value.state.controls, n = {
					field: "rvDetailsButton",
					headerName: "",
					headerComponentParams: {
						isStatic: !0,
						preventExport: !0
					},
					sortable: !1,
					pinned: h.value ? null : "left",
					filter: !1,
					lockPosition: !0,
					maxWidth: 42,
					cellStyle: () => ({ padding: "0px" }),
					cellRenderer: Ge,
					cellRendererParams: {
						$iApi: f,
						t: R,
						layerCols: Y.value,
						isTeleport: z.panel.teleport !== void 0
					}
				};
				if (e.includes("details") && t.push(n), hn.value) {
					let n = {
						field: "rvZoomButton",
						headerName: "",
						headerComponentParams: {
							isStatic: !0,
							preventExport: !0
						},
						sortable: !1,
						pinned: h.value ? null : "left",
						filter: !1,
						lockPosition: !0,
						maxWidth: 42,
						cellStyle: () => ({ padding: "0px" }),
						cellRenderer: Xe,
						cellRendererParams: {
							$iApi: f,
							layerCols: Y.value,
							isTeleport: z.panel.teleport !== void 0
						}
					};
					e.includes("zoom") && t.push(n);
				}
				e.forEach((e) => {
					if (e === "zoom" || e === "details") return;
					let n = {
						field: `rvCustomButton_${typeof e == "string" ? e : e.actionEvent}`,
						headerName: "",
						headerComponentParams: {
							isStatic: !0,
							preventExport: !0
						},
						sortable: !1,
						pinned: h.value ? null : "left",
						filter: !1,
						lockPosition: !0,
						maxWidth: 42,
						cellStyle: () => ({ padding: "0px" }),
						cellRenderer: $e,
						cellRendererParams: {
							$iApi: f,
							t: R,
							layerCols: Y.value,
							config: e
						}
					};
					t.push(n);
				});
			}
			if (e.field === "rvSymbol") {
				let e = {
					field: "rvSymbol",
					headerName: "",
					headerComponentParams: {
						isStatic: !0,
						preventExport: !0
					},
					sortable: !1,
					filter: !1,
					lockPosition: !0,
					maxWidth: 42,
					cellDataType: !1,
					cellRenderer: (e) => {
						let t = f.geo.layer.getLayer(e.data.rvUid);
						if (t === void 0) return;
						let n = document.createElement("span"), r = e.data[Fe.value];
						return t.getIcon(r).then((e) => {
							n.innerHTML = e;
						}), n;
					},
					cellStyle: () => ({
						paddingTop: "3px",
						textAlign: "center",
						paddingLeft: "5px",
						paddingRight: "0px"
					}),
					cellRendererParams: {
						$iApi: f,
						oidField: Fe.value
					}
				};
				t.push(e);
			}
		}, an = () => !Object.values(ze.value).every((e) => e === void 0), on = (e) => {
			let t = ze.value[e.data.rvUid];
			return t === void 0 || t.includes(e.data[Fe.value]);
		}, Q = async () => {
			let e = new s(), t = We.value.slice().map((e) => e.getPromise());
			We.value.push(e), await Promise.all(t), await Promise.all(X.value.map(async (e) => {
				e && e.visibility ? await e.getFilterOIDs([i.GRID], B.value.state.filterByExtent ? f.geo.map.getExtent() : void 0).then((t) => {
					ze.value[e.uid] = t;
				}) : ze.value[e.uid] = [];
			})), Z.value.onFilterChanged(), e.resolveMe();
			let n = We.value.indexOf(e);
			n === -1 ? console.error("Grid could not find filter blocker in filter queue") : We.value.splice(n, 1);
		}, sn = () => {
			B.value.state.applyToMap = !B.value.state.applyToMap, cn();
		}, cn = () => {
			X.value.filter((e) => e.mapLayer).forEach((e) => {
				if (!B.value.state.applyToMap) e.setSqlFilter(i.GRID, "");
				else {
					let t = ln(e.id);
					e.setSqlFilter(i.GRID, t);
				}
			});
		}, ln = (e) => {
			let t = Z.value.getFilterModel(), n = [];
			if (Object.keys(t || {}).forEach((r) => {
				let i = gn(e, r);
				i ? n.push(un(i.origAttr, t[r])) : n.push("1=2");
			}), B.value.state.searchFilter && B.value.state.searchFilter.length > 0) {
				let t = dn(e) || "1=2";
				t.length > 0 && n.push(`(${t})`);
			}
			return n.join(" AND ");
		}, un = (e, t) => {
			switch (t.filterType) {
				case "number":
					switch (t.type) {
						case "greaterThanOrEqual": return `${e} >= ${t.filter}`;
						case "lessThanOrEqual": return `${e} <= ${t.filter}`;
						case "inRange": return `${e} >= ${t.filter} AND ${e} <= ${t.filterTo}`;
					}
					break;
				case "text": {
					let n = t.filter.replace(/'/g, /''/);
					if (n !== "") {
						let t = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g, r = n, i = "", a = t.exec(n), o = 0;
						for (; a;) i = i + n.substr(o, a.index - o) + a[0].slice(-1), o = a.index + 2, r = n.substr(a.index + 2), a = t.exec(n);
						i += r, i = i.replace(/%/g, "ௌ%"), i = i.replace(/_/g, "ௌ_"), i = `*${i}`;
						let s = `UPPER(${e}) LIKE \'${i.replace(/\*/g, "%").toUpperCase()}%\'`;
						return s.includes("ௌ%") || s.includes("ௌ_") ? `${s} ESCAPE \'ௌ\'` : s;
					}
					break;
				}
				case "date": {
					let n = new Date(t.dateFrom ?? 0), r = new Date(t.dateTo ?? 864e13), i = n ? `${n.getMonth() + 1}/${n.getDate()}/${n.getFullYear()}` : void 0, a = r ? `${r.getMonth() + 1}/${r.getDate()}/${r.getFullYear()}` : void 0;
					switch (t.type) {
						case "greaterThan": return `${e} >= DATE '${i}'`;
						case "lessThan": return `${e} <= DATE '${i}'`;
						case "inRange": return `${e} >= DATE '${i}' AND ${e} <= DATE '${a}'`;
					}
				}
			}
		}, dn = (e) => {
			let t = B.value.state.searchFilter.replace(/'/g, "''").split(" "), n = [];
			Z.value.forEachNodeAfterFilterAndSort((e) => {
				n.push(e);
			});
			let r = Z.value.getAllDisplayedColumns().filter((t) => (t.colDef.filter === "agTextColumnFilter" || t.colDef.filter === "agNumberColumnFilter") && gn(e, t.getColId())), i = [];
			return n.forEach((n) => {
				let a = !0, o = "";
				for (let s of t) {
					let t = RegExp(`.*${s.split(" ").join(".*").toUpperCase()}`), c = `%${s.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`, l = !1;
					for (let a of r ?? []) {
						let r = a.getColId(), s = gn(e, a.getColId())?.origAttr, u = a.getColDef();
						if (n.data[r] === void 0) l = !1;
						else if (u.filter === "agTextColumnFilter") {
							let e = n.data[r] === null ? null : n.data[r].toString();
							if (e !== null && t.test(e.toUpperCase())) {
								o = o ? o.concat(" AND ", `(UPPER(${s}) LIKE \'${c}%\')`) : o.concat("(", `(UPPER(${s}) LIKE \'${c}%\')`), l = !i.includes(o + ")");
								break;
							}
						} else if (u.filter === "agNumberColumnFilter") {
							let e = n.data[r] === null ? null : n.data[r];
							if (e !== null && t.test(e)) {
								o = o ? o.concat(" AND ", `(${s} = ${e})`) : o.concat("(", `(${s} = ${e})`), l = !i.includes(o + ")");
								break;
							}
						}
					}
					if (!l) {
						a = !1;
						break;
					}
				}
				a && i.push(o + ")");
			}), i.join(" OR ");
		}, fn = (e) => {
			[
				"ArrowDown",
				"Down",
				"ArrowLeft",
				"Left",
				"ArrowUp",
				"Up",
				"ArrowRight",
				"Right"
			].includes(e.key) && e.stopPropagation();
		}, pn = () => {
			mn(), z.panel.isOpen && z.panel.close();
		}, mn = () => {
			(H.value || U.value) && X.value.forEach((e) => {
				e.abortAttributeLoad(), e.clearFeatureCache();
			});
		}, $ = m(() => {
			let e = X.value.map((e) => e.visibility && e.canModifyLayer && e.mapLayer), t = X.value.some((e) => e.visibility && e.mapLayer && !e.canModifyLayer), n = e.some(Boolean);
			return t && n ? "partial" : n ? "enabled" : "disabled";
		}), hn = m(() => X.value.some((e) => e.isLoaded && e.supportsFeatures && e.mapLayer)), gn = (e, t) => ve(Y.value, e, t), _n = async () => {
			let e = X.value.filter((e) => e.supportsFeatures && e.isLoaded);
			e.length === 0 && pn(), Ae.value = e.reduce((e, { featureCount: t }) => e + t, 0), W.value = Array(X.value.length).fill(0), e.forEach((e, t) => W.value[t] += e.downloadedAttributes()), e.forEach((e, t) => {
				je.value.push(le(() => e.downloadedAttributes(), (e) => {
					W.value[t] = e;
				}));
			}), await Promise.all(e.map((e) => e.loadPromise()));
			let t = e.map(async (e) => {
				let t = await ie(e).getTabularAttributes(), n = B?.value?.state?.state;
				if (n?.columns && n.columnMetadata?.exclusiveColumns) {
					let e = n.columns.map((e) => e.field);
					t.columns = t.columns.filter((t) => e.includes(t.data));
				}
				return t;
			}), [n, r] = await de(Promise.all(t));
			if (n) {
				console.error(n), U.value = !0, H.value = !1;
				return;
			}
			if (e.every((e) => e.attribLoadAborted())) {
				H.value = !1;
				return;
			}
			let i = {
				columns: [],
				rows: [],
				fields: [],
				oidField: ""
			};
			r.forEach((t, n) => {
				let r = [], a = e[n].id;
				t.columns.forEach((e) => {
					B.value.fieldMap && B.value.fieldMap[e.data] ? (r.push({
						origAttr: e.data,
						mappedAttr: B.value.fieldMap[e.data]
					}), e.data = B.value.fieldMap[e.data], e.title = e.data) : r.push({
						origAttr: e.data,
						mappedAttr: void 0
					}), i.columns.map((e) => e.data).includes(e.data) || i.columns.push(e);
				}), i.rows = i.rows.concat(t.rows.map((e) => {
					if (B.value.fieldMap) for (let [t, n] of Object.entries(B.value.fieldMap)) e[t] !== void 0 && e[n] === void 0 && (e[n] = e[t], delete e[t]);
					return e;
				})), i.fields = i.fields.concat(t.fields.map((e) => ((!f.ui.exposeOids && e.type === "oid" || !f.ui.exposeMeasurements && (e.name.toLowerCase() === "shape_length" || e.name.toLowerCase() === "shape_area")) && He.value.add(e.name), {
					name: B.value.fieldMap && B.value.fieldMap[e.name] ? B.value.fieldMap[e.name] : e.name,
					type: e.type,
					alias: e.alias ?? void 0,
					length: e.length ?? void 0
				}))), i.oidField = B.value.fieldMap && B.value.fieldMap[t.oidField] ? B.value.fieldMap[t.oidField] : t.oidField, Y.value[a] = r;
			}), Fe.value = i.oidField;
			for (let e = 0; e < i.rows.length; e++) for (let [t] of Object.entries(i.rows[e])) f.ui.isPlainText(i.rows[e][t]) && (i.rows[e][t] = f.ui.escapeHtml(i.rows[e][t]));
			[
				"rvRowIndex",
				"rvInteractive",
				"rvSymbol"
			].map((e) => ({
				data: e,
				title: "",
				special: !0
			})).concat(i.columns).forEach((e) => {
				B.value.state.columns[e.data] === void 0 && (B.value.state.columns[e.data] = new u({
					field: e.data,
					title: e.title
				})), f.ui.exposeOids && f.ui.exposeMeasurements || !He.value.has(e.data) || (B.value.state.columns[e.data].visible = !1);
				let t = B.value.state.columns[e.data], n = t.filter.type === "selector", r = {
					headerName: t.title ?? e.title,
					headerComponent: "agColumnHeader",
					headerComponentParams: { sort: t.sort },
					field: e.data ?? e,
					sortable: !0,
					lockPosition: !0,
					filterParams: {},
					floatingFilter: B.value.state.colFilter && t.searchable,
					hide: !t.visible,
					minWidth: t.width,
					maxWidth: t.width ?? 400,
					cellRenderer: (e) => e.value,
					suppressHeaderKeyboardEvent: (e) => {
						let t = e.event;
						return e.headerRowIndex === 0 && (t.key === "Enter" || !t.target.classList.contains("ag-header-cell") && t.key === "Tab");
					}
				};
				if (e.special) rn(r, K.value, B.value.state);
				else {
					let e = i.fields.find((e) => e.name === r.field);
					r.cellRenderer = t.template === "" ? nt : f.component(t.template), r.autoHeight = !0, c.indexOf(e.type) > -1 ? (tn(r, B.value.state), r.filter = "agNumberColumnFilter", r.cellRendererParams = { type: "number" }) : e.type === l.DATE ? ($t(r, B.value.state), r.filter = "agDateColumnFilter", r.minWidth = 400, r.cellRendererParams = { type: "date" }) : e.type === l.STRING && (n ? en(r, i.rows, B.value.state) : nn(r, B.value.state), r.filter = "agTextColumnFilter", r.cellRendererParams = { type: "string" }), K.value.push(r);
				}
			}), q.value = ie(i.rows), K.value = ie(K.value), Jt(), H.value = !1;
		}, vn = (e) => {
			e.key === "Tab" && A.value?.matches(":focus") && A.value._tippy.show();
		}, yn = () => {
			A.value._tippy.hide();
		};
		return C(() => {
			A.value?.addEventListener("keyup", vn), A.value?.addEventListener("blur", yn);
		}), oe(() => {
			B.value = p.grids[z.gridId], H.value = !0, be(), J.value = {
				firstRow: 0,
				lastRow: 0,
				visibleRows: 0
			}, De.value = {
				agColumnHeader: Ue,
				numberFloatingFilter: Oe,
				textFloatingFilter: ke,
				selectorFloatingFilter: Me,
				dateFloatingFilter: Pe,
				clearFloatingFilter: Ie
			}, Ee.value = {
				ensureDomOrder: !0,
				rowHeight: 40,
				suppressRowTransform: !0,
				onFilterChanged: () => {
					cn(), Jt();
				},
				onBodyScroll: () => {
					[...f.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((e) => {
						e._tippy && E.value?.contains(e._tippy.reference) && e._tippy.hide();
					});
				},
				onBodyScrollEnd: () => {
					Yt();
				},
				rowBuffer: 0,
				suppressColumnVirtualisation: !0,
				tabToNextCell: Ce,
				tabToNextHeader: Se,
				onModelUpdated: ue(() => {
					Z.value.autoSizeAllColumns(), Ke();
				}, 300)
			}, _n(), $.value === "partial" && f.notify.show(t.WARNING, f.$i18n.t("layer.filterwarning")), je.value.push(le(ye, () => {
				we.value = !1, setTimeout(() => {
					we.value = !0;
				}, 10);
			})), je.value.push(le($, (e) => {
				e === "partial" && f.notify.show(t.WARNING, f.$i18n.t("layer.filterwarning"));
			}));
		}), S(() => {
			mn(), G.value.forEach((e) => f.event.off(e)), je.value.forEach((e) => e()), Le.value?.removeAccessibilityListeners(), Le.value?.removeScrollListeners(), A.value?.removeEventListener("keyup", vn), A.value?.removeEventListener("blur", yn);
		}), (e, t) => {
			let n = se("dropdown-menu"), r = D("truncate"), i = D("tippy");
			return w(), _("div", {
				class: "flex flex-col w-full h-full bg-white",
				ref_key: "el",
				ref: E
			}, [
				P(v("div", null, [v("p", rt, O(k(R)("grid.splash.error")), 1)], 512), [[M, U.value]]),
				P(v("div", it, [
					v("div", at, [
						v("span", ot, O(W.value.reduce((e, t) => e + t, 0)), 1),
						t[12] ||= v("svg", {
							class: "stroke-black stroke-1",
							height: "50",
							width: "25"
						}, [v("line", {
							x1: "0",
							y1: "50",
							x2: "25",
							y2: "0"
						})], -1),
						v("span", st, O(Ae.value), 1)
					]),
					v("div", ct, [v("span", lt, O(W.value.reduce((e, t) => e + t, 0) < Ae.value ? k(R)("grid.splash.loading") : k(R)("grid.splash.building")), 1)]),
					v("div", null, [v("button", {
						type: "button",
						onClick: pn,
						class: "py-8 px-8 sm:px-16 bg-gray-300",
						"aria-label": k(R)("grid.splash.cancel")
					}, O(k(R)("grid.splash.cancel")), 9, ut)])
				], 512), [[M, H.value && !U.value]]),
				P(v("div", dt, [v("div", ft, [P((w(), _("div", pt, [y(O(Ne.value), 1)])), [[M, Ne.value !== ""], [r]]), P((w(), _("div", mt, [y(O((!Je.value && J.value.visibleRows === 0 ? `${k(R)("grid.filters.label.hidden")} — ` : "") + k(R)("grid.filters.label.info", {
					range: J.value.visibleRows === 0 ? "0" : `${J.value.firstRow} - ${J.value.lastRow}`,
					total: J.value.visibleRows
				})) + " ", 1), J.value.visibleRows !== q.value.length && Je.value ? (w(), _("span", ht, O(k(R)("grid.filters.label.filtered", { max: q.value.length })), 1)) : g("", !0)])), [[r]])]), v("div", gt, [P(v("div", _t, [P(v("input", {
					onInput: t[0] ||= (e) => Qe(),
					onKeypress: t[1] ||= F(I(() => {}, ["prevent"]), ["enter"]),
					onKeyup: t[2] ||= F((e) => {
						k(ee).mobileView && e?.target?.blur();
					}, ["enter"]),
					enterkeyhint: "done",
					"onUpdate:modelValue": t[3] ||= (e) => B.value.state.searchFilter = e,
					class: "rv-global-search rv-input pr-32 min-w-0",
					"aria-invalid": "false",
					"aria-label": k(R)("grid.filters.label.global"),
					placeholder: k(R)("grid.filters.label.global")
				}, null, 40, vt), [[j, B.value.state.searchFilter]]), v("div", yt, [B.value.state.searchFilter.length < 3 ? (w(), _("svg", bt, [...t[13] ||= [v("g", { id: "search_cache224" }, [v("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })], -1)]])) : (w(), _("button", {
					key: 1,
					class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
					onClick: t[4] ||= (e) => et(),
					"aria-label": k(R)("grid.search.clear")
				}, [...t[14] ||= [v("svg", {
					"data-v-486a0302": "",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 352 512",
					class: "fill-current w-18 h-18 mt-2"
				}, [v("path", {
					"data-v-486a0302": "",
					d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
				})], -1)]], 8, xt))])], 512), [[M, B.value.state.search]]), v("div", St, [
					te(Te, {
						gridApi: V.value,
						columnDefs: K.value,
						systemCols: He.value,
						onRefreshHeaders: t[5] ||= (e) => V.value.refreshHeader()
					}, null, 8, [
						"gridApi",
						"columnDefs",
						"systemCols"
					]),
					P((w(), _("button", {
						type: "button",
						class: x(["grid-clearall p-4 h-40", Ve.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default"]),
						onClick: t[6] ||= (e) => Ve.value && tt(),
						content: k(R)("grid.clearAll"),
						"aria-label": k(R)("grid.clearAll")
					}, [...t[15] ||= [v("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						height: "24px",
						width: "24px",
						viewBox: "0 0 24 24",
						class: "inline fill-current"
					}, [v("g", { id: "filter_cache958" }, [v("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })])], -1)]], 10, Ct)), [[i, { placement: "bottom" }]]),
					te(n, {
						class: "h-40 w-40",
						position: "bottom-end",
						tooltip: k(R)("panels.controls.optionsMenu"),
						centered: !1
					}, {
						header: N(() => [...t[16] ||= [v("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 24 24",
							class: "fill-current m-8 w-24 h-24"
						}, [v("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })], -1)]]),
						default: N(() => [
							v("a", {
								href: "javascript:;",
								class: x(["leading-snug w-256", {
									hover: $.value === "disabled" ? "text-black" : "none",
									disabled: $.value === "disabled"
								}]),
								onClick: t[7] ||= (e) => $.value !== "disabled" && sn(),
								role: "button",
								"aria-label": k(R)("grid.label.filters.apply")
							}, [v("div", Tt, [
								t[18] ||= v("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									class: "fill-current w-20 h-20 mr-2 text-gray-500"
								}, [v("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })], -1),
								v("span", Et, O(k(R)("grid.label.filters.apply")), 1),
								$.value !== "disabled" && B.value.state.applyToMap ? (w(), _("svg", Dt, [...t[17] ||= [v("g", { id: "done" }, [v("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : g("", !0)
							])], 10, wt),
							v("a", {
								href: "javascript:;",
								class: "leading-snug w-256 hover:text-black",
								onClick: t[8] ||= (e) => qt(),
								role: "button",
								"aria-label": k(R)("grid.label.filters.show")
							}, [v("div", kt, [
								t[20] ||= v("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									class: "fill-current w-20 h-20 mr-2 text-gray-500"
								}, [v("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })], -1),
								v("span", At, O(k(R)("grid.label.filters.show")), 1),
								B.value.state.colFilter ? (w(), _("svg", jt, [...t[19] ||= [v("g", { id: "done" }, [v("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : g("", !0)
							])], 8, Ot),
							v("a", {
								href: "javascript:;",
								class: x(["leading-snug w-256", {
									hover: $.value === "disabled" ? "text-black" : "none",
									disabled: $.value === "disabled"
								}]),
								onClick: t[9] ||= (e) => $.value !== "disabled" && Kt(),
								role: "button",
								"aria-label": k(R)("grid.filters.label.extent")
							}, [v("div", Nt, [
								t[22] ||= v("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									class: "fill-current w-20 h-20 mr-2 text-gray-500"
								}, [v("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })], -1),
								v("span", Pt, O(k(R)("grid.filters.label.extent")), 1),
								$.value !== "disabled" && B.value.state.filterByExtent ? (w(), _("svg", Ft, [...t[21] ||= [v("g", { id: "done" }, [v("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : g("", !0)
							])], 10, Mt),
							v("a", {
								href: "javascript:;",
								class: x(["leading-snug w-256", { hover: "text-black" }]),
								onClick: t[10] ||= (e) => Zt(),
								role: "button",
								"aria-label": k(R)("grid.label.pinColumns")
							}, [v("div", Lt, [
								b.value ? (w(), _("svg", Rt, [...t[23] ||= [v("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)]])) : b.value ? g("", !0) : (w(), _("svg", zt, [...t[24] ||= [v("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)]])),
								v("span", Bt, O(k(R)("grid.label.pinColumns")), 1),
								b.value ? (w(), _("svg", Vt, [...t[25] ||= [v("g", { id: "done" }, [v("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : g("", !0)
							])], 8, It),
							v("a", {
								href: "javascript:;",
								class: x(["leading-snug w-256", { hover: "text-black" }]),
								onClick: t[11] ||= (e) => Qt(),
								role: "button",
								"aria-label": k(R)("grid.label.export")
							}, [v("div", Ut, [t[26] ||= v("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								class: "fill-current w-20 h-20 mr-2 text-gray-500"
							}, [v("g", null, [v("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })])], -1), v("span", Wt, O(k(R)("grid.label.export")), 1)])], 8, Ht)
						]),
						_: 1
					}, 8, ["tooltip"])
				])])], 512), [[M, !H.value && !U.value]]),
				we.value ? P((w(), _("div", {
					key: 0,
					content: k(R)("grid.cells.controls"),
					class: "w-full h-full flex flex-col",
					ref_key: "gridContainer",
					ref: A,
					tabIndex: "-1"
				}, [te(k(fe), {
					class: "ag-theme-material flex-grow",
					enableCellTextSelection: !0,
					accentedSort: !0,
					localeText: k(ye) === "en" ? k(pe) : k(me),
					gridOptions: Ee.value,
					columnDefs: K.value,
					rowData: q.value,
					components: De.value,
					onGridReady: Ye,
					onKeydown: fn,
					onFirstDataRendered: Ze,
					onCellKeyPress: k(Re),
					doesExternalFilterPass: on,
					isExternalFilterPresent: an,
					tabIndex: -1
				}, null, 8, [
					"localeText",
					"gridOptions",
					"columnDefs",
					"rowData",
					"components",
					"onCellKeyPress"
				])], 8, Gt)), [[i, {
					placement: "top",
					trigger: "manual",
					touch: !1
				}], [M, !H.value && !U.value]]) : g("", !0)
			], 512);
		};
	}
}), [["__scopeId", "data-v-7c082689"]]), qt = /*#__PURE__*/ f(/* @__PURE__ */ b({
	__name: "screen",
	props: { panel: {
		type: a,
		required: !0
	} },
	setup(e) {
		let t = n(), { t: r } = L(), i = m(() => t.currentId);
		return (t, n) => {
			let a = se("panel-screen");
			return w(), h(a, { panel: e.panel }, {
				header: N(() => [y(O(k(r)("grid.title")), 1)]),
				content: N(() => [te(Kt, {
					class: "rv-grid",
					gridId: i.value,
					panel: e.panel
				}, null, 8, ["gridId", "panel"])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-904e67ef"]]);
export { qt as default };
