import { B as e, J as t, L as n, U as r, ct as i, lt as a, o, pt as s, ut as c, z as l } from "./main-BtLSZphp.js";
import { n as u } from "./config-qfRoNiJ2.js";
import { t as d } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { n as ee, t as te } from "./table-state-manager-BHsqyEJn.js";
import { Fragment as ne, computed as f, createBlock as p, createCommentVNode as m, createElementBlock as h, createElementVNode as g, createTextVNode as _, createVNode as re, defineComponent as v, getCurrentInstance as ie, inject as y, markRaw as ae, nextTick as oe, normalizeClass as b, onBeforeMount as se, onBeforeUnmount as x, onMounted as S, openBlock as C, ref as w, renderList as T, resolveComponent as ce, resolveDirective as E, toDisplayString as D, unref as O, useTemplateRef as le, vModelSelect as k, vModelText as A, vShow as j, watch as ue, withCtx as M, withDirectives as N, withKeys as P, withModifiers as F } from "vue";
import { debounce as de } from "es-toolkit/function";
import { useI18n as I } from "vue-i18n";
import L from "linkify-html";
import fe from "await-to-js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as pe } from "ag-grid-vue3";
import { AG_GRID_LOCALE_EN as me, AG_GRID_LOCALE_FR as he } from "@ag-grid-community/locale";
import { AllCommunityModule as ge, ModuleRegistry as _e, provideGlobalGridOptions as ve } from "ag-grid-community";
//#region src/fixtures/grid/grid-utils.ts
function ye(e, t, n) {
	return e[t].find((e) => (e.mappedAttr ?? e.origAttr) === n);
}
function be(e, t) {
	let n = ye(e, t.id, t.oidField);
	return n ? n.mappedAttr ?? n.origAttr : t.oidField;
}
//#endregion
//#region src/fixtures/grid/accessibility.ts
var xe = ".ag-root", R = ".ag-header-viewport .ag-header-row", Se = class {
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
		this.element = e, this.agGridApi = t, this.agGrid = this.element.querySelector(xe), this.headerRows = Array.prototype.slice.call(this.element.querySelectorAll(R)), this.initAccessibilityListeners(), this.initScrollListeners();
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
			t.scrollLeft = n - (e.clientX - r);
		}, a = () => {
			this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", i), this.agGrid.removeEventListener("mouseup", a), this.agGrid.removeEventListener("mouseleave", a);
		};
		this.agGrid.addEventListener("mousemove", i), this.agGrid.addEventListener("mouseup", a), this.agGrid.addEventListener("mouseleave", a);
	}
};
function Ce(e) {
	let t = e.previousHeaderPosition.column, n = e.previousHeaderPosition.headerRowIndex, r = e.backwards ? n - 1 : n + 1;
	return r === -1 ? !1 : (r === e.headerRowCount && (r = -1), {
		headerRowIndex: r,
		column: t
	});
}
function we(e) {
	return e.backwards ? {
		column: e.previousCellPosition.column,
		rowIndex: -1
	} : !1;
}
//#endregion
//#region src/fixtures/grid/column-dropdown.vue?vue&type=script&setup=true&lang.ts
var z = ["onClick"], Te = { class: "md-icon-small flex w-full" }, B = { class: "flex-1 truncate whitespace-nowrap overflow-hidden pr-4" }, Ee = /* @__PURE__ */ v({
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
		let t = y("iApi"), { t: n } = I();
		return (r, i) => {
			let a = ce("dropdown-menu"), o = E("truncate");
			return C(), p(a, {
				class: "relative",
				position: "bottom-end",
				tooltip: O(n)("grid.label.columns"),
				tooltipPlacementAlt: "left",
				centered: !1
			}, {
				header: M(() => [...i[0] ||= [g("div", { class: "flex p-8" }, [g("svg", {
					xmlns: "http://www.w3.org/2000/svg",
					fit: "",
					height: "24px",
					width: "24px",
					preserveAspectRatio: "xMidYMid meet",
					viewBox: "0 0 23 24",
					focusable: "false",
					class: "inline fill-current"
				}, [g("g", { id: "format-list-checks_cache966" }, [g("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" })])])], -1)]]),
				default: M(() => [(C(!0), h(ne, null, T(e.columnDefs.filter((n) => n.headerName && n.headerName.length > 0 && !(!O(t).ui.exposeOids && e.systemCols?.has(n.headerName)) && !(!O(t).ui.exposeMeasurements && (e.systemCols?.has(n.headerName) || e.systemCols?.has(n.field)))), (t) => (C(), h("a", {
					"truncate-trigger": "",
					tabindex: "0",
					key: t.headerName,
					onClick: (n) => {
						e.gridApi?.setColumnsVisible([t.field], t.hide), t.hide = !t.hide, r.$emit("refreshHeaders");
					},
					href: "javascript:;",
					class: "flex leading-snug items-center max-w-[268px]"
				}, [g("div", Te, [N((C(), h("span", B, [_(D(t.headerName), 1)])), [[o, {
					externalTrigger: !0,
					options: { placement: "left" }
				}]]), (C(), h("svg", {
					height: "18",
					width: "18",
					viewBox: "0 0 24 24",
					class: b({ invisible: t.hide })
				}, [...i[1] ||= [g("g", { id: "done" }, [g("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]], 2))])], 8, z))), 128))]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), De = { class: "h-full flex items-center justify-center" }, Oe = [
	"placeholder",
	"aria-label",
	"disabled"
], V = [
	"placeholder",
	"aria-label",
	"disabled"
], ke = /* @__PURE__ */ d(/* @__PURE__ */ v({
	methods: { onParentModelChanged() {} },
	__name: "custom-number-filter",
	props: ["params"],
	setup(e) {
		let t = l(), { t: n } = I(), r = e, i = w(""), a = w(""), o = w(!!r.params.stateManager.columns[r.params.column.colDef.field].filter.static), s = () => {
			d(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, i.value, "min");
		}, c = () => {
			d(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, a.value, "max");
		}, u = (e) => typeof e != "number" || isNaN(e), d = () => {
			i.value !== "" && u(i.value) && (i.value = ""), a.value !== "" && u(a.value) && (a.value = "");
			let e = r.params.column.colDef.field;
			a.value === "" && i.value === "" ? r.params.api.setColumnFilterModel(e, null) : a.value !== "" && i.value !== "" ? r.params.api.setColumnFilterModel(e, {
				filterType: "number",
				type: "inRange",
				filter: i.value,
				filterTo: a.value
			}) : i.value === "" ? r.params.api.setColumnFilterModel(e, {
				filterType: "number",
				type: "lessThanOrEqual",
				filter: a.value
			}) : r.params.api.setColumnFilterModel(e, {
				filterType: "number",
				type: "greaterThanOrEqual",
				filter: i.value
			}), r.params.api.onFilterChanged();
		};
		return se(() => {
			i.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "min"), a.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "max"), s(), c();
		}), (e, r) => (C(), h("div", De, [
			N(g("input", {
				class: b(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": o.value }]),
				style: { width: "45%" },
				type: "number",
				"onUpdate:modelValue": r[0] ||= (e) => i.value = e,
				onInput: r[1] ||= (e) => s(),
				onMousedown: r[2] ||= F(() => {}, ["stop"]),
				onKeypress: r[3] ||= P(F(() => {}, ["prevent"]), ["enter"]),
				onKeyup: r[4] ||= P((e) => {
					O(t).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				placeholder: O(n)("grid.filters.number.min"),
				"aria-label": O(n)("grid.filters.number.min"),
				disabled: o.value
			}, null, 42, Oe), [[A, i.value]]),
			r[10] ||= g("span", { class: "w-12" }, null, -1),
			N(g("input", {
				class: b(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": o.value }]),
				style: { width: "45%" },
				type: "number",
				"onUpdate:modelValue": r[5] ||= (e) => a.value = e,
				onInput: r[6] ||= (e) => c(),
				onMousedown: r[7] ||= F(() => {}, ["stop"]),
				onKeypress: r[8] ||= P(F(() => {}, ["prevent"]), ["enter"]),
				onKeyup: r[9] ||= P((e) => {
					O(t).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				placeholder: O(n)("grid.filters.number.max"),
				"aria-label": O(n)("grid.filters.number.max"),
				disabled: o.value
			}, null, 42, V), [[A, a.value]])
		]));
	}
}), [["__scopeId", "data-v-ab99947a"]]), H = { class: "h-full flex items-center justify-center" }, U = [
	"placeholder",
	"aria-label",
	"disabled"
], Ae = /* @__PURE__ */ v({
	methods: { onParentModelChanged() {} },
	__name: "custom-text-filter",
	props: ["params"],
	setup(e) {
		let t = l(), { t: n } = I(), r = e, i = w(""), a = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), o = () => {
			i.value = i.value ? i.value : "";
			let e = r.params.column.colDef.field;
			i.value ? r.params.api.setColumnFilterModel(e, {
				filterType: "text",
				type: "contains",
				filter: i.value
			}) : r.params.api.setColumnFilterModel(e, null), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, i.value), r.params.api.onFilterChanged();
		};
		return se(() => {
			i.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field).toString(), o();
		}), (r, s) => (C(), h("div", H, [N(g("input", {
			class: b(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": a.value }]),
			type: "text",
			onInput: s[0] ||= (e) => o(),
			"onUpdate:modelValue": s[1] ||= (e) => i.value = e,
			onMousedown: s[2] ||= F(() => {}, ["stop"]),
			onKeypress: s[3] ||= P(F(() => {}, ["prevent"]), ["enter"]),
			onKeyup: s[4] ||= P((e) => {
				O(t).mobileView && e.target.blur();
			}, ["enter"]),
			enterkeyhint: "done",
			placeholder: O(n)("grid.filters.column.label.text", [e.params.column.colDef.headerName]),
			"aria-label": O(n)("grid.filters.column.label.text", [e.params.column.colDef.headerName]),
			disabled: a.value
		}, null, 42, U), [[A, i.value]])]));
	}
}), je = { class: "h-full flex items-center justify-center" }, W = ["aria-label", "disabled"], G = ["value"], Me = /* @__PURE__ */ d(/* @__PURE__ */ v({
	methods: { onParentModelChanged() {} },
	__name: "custom-selector-filter",
	props: ["params"],
	setup(e) {
		let t = e, n = w(""), r = w([]), i = w(t.params.stateManager.columns[t.params.column.colDef.field].filter.static), a = () => {
			n.value = n.value ? n.value : "";
			let e = t.params.column.colDef.field;
			n.value === "..." || !n.value ? (t.params.api.setColumnFilterModel(e, null), n.value = "") : t.params.api.setColumnFilterModel(e, {
				filterType: "text",
				type: "contains",
				filter: n.value
			}), t.params.stateManager.setColumnFilterValue(t.params.column.colDef.field, n.value), t.params.api.onFilterChanged();
		};
		return se(() => {
			n.value = t.params.stateManager.getColumnFilterValue(t.params.column.colDef.field);
			let e = t.params.rowData, i = new Set(e.map((e) => e[t.params.column.colId]));
			r.value = Array.from(i), r.value.unshift("..."), a();
		}), (e, t) => (C(), h("div", je, [N(g("select", {
			class: b(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", { "cursor-not-allowed": i.value }]),
			"onUpdate:modelValue": t[0] ||= (e) => n.value = e,
			onChange: t[1] ||= (e) => a(),
			onMousedown: t[2] ||= F(() => {}, ["stop"]),
			"aria-label": n.value,
			disabled: i.value
		}, [(C(!0), h(ne, null, T(r.value, (e) => (C(), h("option", {
			value: e,
			key: e
		}, D(e), 9, G))), 128))], 42, W), [[k, n.value]])]));
	}
}), [["__scopeId", "data-v-46624a34"]]), Ne = { class: "h-full flex items-center justify-center w-full" }, K = [
	"placeholder",
	"aria-label",
	"disabled"
], q = [
	"placeholder",
	"aria-label",
	"disabled"
], Pe = /* @__PURE__ */ d(/* @__PURE__ */ v({
	methods: { onParentModelChanged() {} },
	__name: "custom-date-filter",
	props: ["params"],
	setup(e) {
		let t = l(), { t: n } = I(), r = e, i = w(""), a = w(""), o = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), s = () => {
			u(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, i.value, "min");
		}, c = () => {
			u(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, a.value, "max");
		}, u = () => {
			let e = r.params.column.colDef.field;
			if (a.value === "" && i.value === "") r.params.api.setColumnFilterModel(e, null);
			else {
				let t = {
					filterType: "date",
					type: "inRange"
				};
				i.value !== "" && (t.dateFrom = i.value), a.value !== "" && (t.dateTo = a.value), r.params.api.setColumnFilterModel(e, t);
			}
			r.params.api.onFilterChanged();
		};
		return se(() => {
			i.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "min") || "", a.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "max") || "", s(), c();
		}), (e, r) => (C(), h("div", Ne, [
			N(g("input", {
				class: b(["m-0 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": o.value }]),
				type: "date",
				placeholder: O(n)("grid.filters.date.min"),
				"aria-label": O(n)("grid.filters.date.min"),
				"onUpdate:modelValue": r[0] ||= (e) => i.value = e,
				onInput: r[1] ||= (e) => s(),
				onMousedown: r[2] ||= F(() => {}, ["stop"]),
				onKeypress: r[3] ||= P(F(() => {}, ["prevent"]), ["enter"]),
				onKeyup: r[4] ||= P((e) => {
					O(t).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				disabled: o.value
			}, null, 42, K), [[A, i.value]]),
			r[10] ||= g("span", { class: "w-12" }, null, -1),
			N(g("input", {
				class: b(["m-0 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", { "cursor-not-allowed": o.value }]),
				type: "date",
				placeholder: O(n)("grid.filters.date.max"),
				"aria-label": O(n)("grid.filters.date.max"),
				"onUpdate:modelValue": r[5] ||= (e) => a.value = e,
				onInput: r[6] ||= (e) => c(),
				onMousedown: r[7] ||= F(() => {}, ["stop"]),
				onKeypress: r[8] ||= P(F(() => {}, ["prevent"]), ["enter"]),
				onKeyup: r[9] ||= P((e) => {
					O(t).mobileView && e.target.blur();
				}, ["enter"]),
				enterkeyhint: "done",
				disabled: o.value
			}, null, 42, q), [[A, a.value]])
		]));
	}
}), [["__scopeId", "data-v-e5e48580"]]), Fe = [
	"content",
	"disabled",
	"aria-label"
], Ie = /* @__PURE__ */ v({
	__name: "clear-filter",
	props: ["params"],
	setup(e) {
		let t = e, { t: n } = I(), r = w(), i = w(), a = w(), o = () => t.params.clearFilters();
		return S(async () => {
			await oe(), i.value = r.value?.closest(".ag-header-cell"), a.value = i.value.closest(".ag-pinned-left-header"), i.value.addEventListener("keydown", async (e) => {
				e.key === "Enter" && (e.stopPropagation(), o(), await oe(), (a.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
			}), i.value.addEventListener("focus", () => {
				r.value._tippy.show();
			}), i.value.addEventListener("blur", () => {
				r.value._tippy.hide();
			});
		}), x(() => {
			i.value && (i.value.removeEventListener("keydown", async (e) => {
				e.key === "Enter" && (e.stopPropagation(), o(), await oe(), (a.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
			}), i.value.removeEventListener("focus", () => {
				r.value._tippy.show();
			}), i.value.removeEventListener("blur", () => {
				r.value._tippy.hide();
			}));
		}), (t, i) => {
			let a = E("tippy");
			return N((C(), h("button", {
				type: "button",
				class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
				onClick: o,
				content: O(n)("grid.filters.clear"),
				disabled: !e.params.stateManager.filtered,
				tabindex: "-1",
				ref_key: "el",
				ref: r,
				"aria-label": O(n)("grid.filters.clear")
			}, [...i[0] ||= [g("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				"enable-background": "new 0 0 24 24",
				class: "h-24 w-24 fill-current",
				viewBox: "0 0 24 24"
			}, [g("g", null, [g("rect", {
				fill: "none",
				height: "24",
				width: "24"
			})]), g("g", null, [g("g", null, [g("path", { d: "M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z" }), g("path", { d: "M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z" })])])], -1)]], 8, Fe)), [[a, { placement: "bottom" }]]);
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
], Ue = /* @__PURE__ */ v({
	__name: "custom-header",
	props: ["params"],
	setup(e) {
		let { t } = I(), n = e, r = w(), i = w(0), a = w(!1), o = w(!1), s = w(!1), c = w(null), l = () => {
			let e = c.value?.getAllDisplayedColumns(), t = e.indexOf(n.params.column), r = e[t - 1]?.colDef, i = e[t + 1]?.colDef;
			o.value = t > 3 && !(r?.headerComponentParams?.isStatic ?? r?.isStatic), s.value = t < e.length - 1 && !(i?.headerComponentParams?.isStatic ?? i?.isStatic);
		}, u = () => {
			let e = c.value?.getAllDisplayedColumns(), t = c.value?.getAllGridColumns(), i = t.indexOf(e[e.indexOf(n.params.column) - 1]);
			o.value && (c.value?.moveColumns([n.params.column], i), n.params.api.ensureColumnVisible(t[i]), (r.value?.closest(".ag-header-row")?.querySelector(`[col-id="${n.params.column.colId}"]`)?.querySelector(".move-left"))?.focus());
		}, d = () => {
			let e = c.value?.getAllDisplayedColumns(), t = c.value?.getAllGridColumns(), r = t.indexOf(e[e.indexOf(n.params.column) + 1]);
			s.value && (c.value?.moveColumns([n.params.column], r), n.params.api.ensureColumnVisible(t[r]));
		}, ee = (e) => {
			i.value = (i.value + 1) % 3, i.value === 1 ? n.params.setSort("asc", e.shiftKey) : i.value === 2 ? n.params.setSort("desc", e.shiftKey) : n.params.setSort("none", e.shiftKey);
		};
		return S(() => {
			a.value = n.params.column.colDef.sortable, c.value = n.params.api, n.params.sort === "asc" ? (i.value = 1, n.params.setSort("asc")) : n.params.sort === "desc" && (i.value = 2, n.params.setSort("desc")), l(), n.params.column.addEventListener("leftChanged", () => {
				l();
			});
		}), x(() => {
			n.params.column.removeEventListener("leftChanged", () => {
				l();
			});
		}), (n, c) => {
			let l = E("truncate"), te = E("tippy");
			return C(), h("div", {
				class: "ag-custom-header flex flex-1 items-center h-full w-full",
				ref_key: "el",
				ref: r
			}, [a.value ? (C(), h("div", Le, [N((C(), h("button", {
				type: "button",
				onClick: c[0] ||= (e) => ee(e),
				content: O(t)(`grid.header.sort.${i.value}`),
				"aria-label": O(t)(`grid.header.sort.${i.value}`),
				class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
				role: "columnheader",
				tabindex: "-1"
			}, [N((C(), h("div", null, [_(D(e.params.displayName), 1)])), [[l, { externalTrigger: !0 }]])], 8, Re)), [[te, {
				placement: "top",
				hideOnClick: !1
			}]])])) : N((C(), h("span", J, [_(D(e.params.displayName), 1)])), [[l]]), a.value ? (C(), h("div", ze, [
				e.params.enableSorting && i.value === 0 ? (C(), h("span", Y)) : m("", !0),
				e.params.enableSorting && i.value === 1 ? (C(), h("span", Be, [...c[3] ||= [g("div", { class: "md-icon-small" }, [g("svg", {
					height: "24",
					width: "24"
				}, [g("g", { id: "arrow_upward" }, [g("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })])])], -1)]])) : m("", !0),
				e.params.enableSorting && i.value === 2 ? (C(), h("span", X, [...c[4] ||= [g("div", { class: "md-icon-small" }, [g("svg", {
					height: "24",
					width: "24"
				}, [g("g", { id: "arrow_downward" }, [g("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })])])], -1)]])) : m("", !0),
				N((C(), h("button", {
					type: "button",
					content: O(t)("grid.header.reorder.left"),
					"aria-label": O(t)("grid.header.reorder.left"),
					onClick: c[1] ||= (e) => u(),
					class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
					tabindex: "-1",
					disabled: !o.value
				}, [...c[5] ||= [g("div", { class: "inline-block" }, [g("svg", {
					height: "24",
					width: "24"
				}, [g("g", { id: "keyboard_arrow_left" }, [g("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })])])], -1)]], 8, Ve)), [[te, { placement: "top" }]]),
				N((C(), h("button", {
					type: "button",
					content: O(t)("grid.header.reorder.right"),
					"aria-label": O(t)("grid.header.reorder.right"),
					onClick: c[2] ||= (e) => d(),
					class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
					tabindex: "-1",
					disabled: !s.value
				}, [...c[6] ||= [g("div", { class: "inline-block" }, [g("svg", {
					height: "24",
					width: "24"
				}, [g("g", { id: "keyboard_arrow_right" }, [g("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" })])])], -1)]], 8, He)), [[te, { placement: "top" }]])
			])) : m("", !0)], 512);
		};
	}
}), We = ["content", "aria-label"], Ge = /* @__PURE__ */ v({
	__name: "details-button-renderer",
	props: ["params"],
	setup(t) {
		let n = t, { t: r } = I(), i = y("iApi"), a = w(), o = async () => {
			let t = n.params.data, r = t.rvUid, a = i.geo.layer.getLayer(r), o = be(n.params.layerCols, a), s = await a.getGraphic(t[o], { getAttribs: !0 });
			i.event.emit(e.DETAILS_TOGGLE, {
				data: s.attributes,
				uid: r,
				format: c.ESRI
			}, !0), n.params.isTeleport && i.scrollToInstance();
		};
		return S(() => {
			n.params.eGridCell.addEventListener("keydown", (e) => {
				e.key === "Enter" && o();
			}), n.params.eGridCell.addEventListener("focus", () => {
				a.value._tippy.show();
			}), n.params.eGridCell.addEventListener("blur", () => {
				a.value._tippy.hide();
			});
		}), x(() => {
			n.params.eGridCell.removeEventListener("keydown", (e) => {
				e.key === "Enter" && o();
			}), n.params.eGridCell.removeEventListener("focus", () => {
				a.value._tippy.show();
			}), n.params.eGridCell.removeEventListener("blur", () => {
				a.value._tippy.hide();
			});
		}), (e, t) => {
			let n = E("tippy");
			return N((C(), h("button", {
				type: "button",
				class: "flex items-center justify-center w-40 h-36",
				content: O(r)("grid.cells.details"),
				onClick: o,
				tabindex: "-1",
				ref_key: "el",
				ref: a,
				"aria-label": O(r)("grid.cells.details")
			}, [...t[0] ||= [g("svg", {
				class: "m-auto",
				xmlns: "http://www.w3.org/2000/svg",
				height: "16",
				viewBox: "0 0 24 24",
				width: "16"
			}, [g("path", {
				d: "M0 0h24v24H0z",
				fill: "none"
			}), g("path", {
				style: { fill: "#979797" },
				d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
			})], -1)]], 8, We)), [[n, { placement: "top" }]]);
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
}, Ye = ["innerHTML"], Xe = /* @__PURE__ */ v({
	__name: "zoom-button-renderer",
	props: ["params"],
	setup(e) {
		let t = w("none"), n = e, r = y("iApi"), i = u(), a = w(), { t: o } = I(), s = f(() => {
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
			let a = be(n.params.layerCols, e), o = n.params.data[a];
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
		return S(() => {
			s.value && (n.params.eGridCell.addEventListener("keydown", (e) => {
				e.key === "Enter" && t.value === "none" && c();
			}), n.params.eGridCell.addEventListener("focus", () => {
				a.value?._tippy.show();
			}), n.params.eGridCell.addEventListener("blur", () => {
				a.value?._tippy.hide();
			}));
		}), x(() => {
			s.value && (n.params.eGridCell.removeEventListener("keydown", (e) => {
				e.key === "Enter" && c();
			}), n.params.eGridCell.removeEventListener("focus", () => {
				a.value?._tippy.show();
			}), n.params.eGridCell.removeEventListener("blur", () => {
				a.value?._tippy.hide();
			}));
		}), (e, n) => {
			let i = E("tippy");
			return s.value ? N((C(), h("button", {
				key: 0,
				type: "button",
				class: "flex items-center justify-center w-40 h-36",
				content: O(o)(`grid.cells.zoom${t.value === "none" ? "" : `.${t.value}`}`),
				onClick: c,
				tabindex: "-1",
				ref_key: "button",
				ref: a,
				"aria-label": O(o)(`grid.cells.zoom${t.value === "none" ? "" : `.${t.value}`}`)
			}, [t.value === "zooming" ? (C(), h("div", Ke)) : t.value === "zoomed" ? (C(), h("svg", qe, [...n[0] ||= [g("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M4.5 12.75l6 6 9-13.5"
			}, null, -1)]])) : t.value === "error" ? (C(), h("svg", Je, [...n[1] ||= [g("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			}, null, -1)]])) : (C(), h("span", {
				key: 3,
				innerHTML: O(r).ui.getZoomIcon()
			}, null, 8, Ye))], 8, Z)), [[i, { placement: "top" }]]) : m("", !0);
		};
	}
}), Ze = ["content"], Qe = ["innerHTML"], $e = /* @__PURE__ */ v({
	__name: "custom-button-renderer",
	props: ["params"],
	setup(e) {
		let t = e, n = y("iApi"), r = w(), i = f(() => {
			let e = Object.assign({}, t.params.data), r = n.geo.layer.getLayer(e.rvUid), i = t.params.config.displayOn;
			return !(!r || i === "geo" && !r.mapLayer || i === "data" && r.mapLayer);
		}), a = () => {
			let e = Object.assign({}, t.params.data), r = e.rvUid, i = n.geo.layer.getLayer(r), a = e[be(t.params.layerCols, i)];
			i.getGraphic(a, { getAttribs: !0 }).then((e) => {
				n.event.emit(t.params.config.actionEvent, {
					data: e.attributes,
					layer: i,
					uid: r,
					oid: a
				});
			});
		};
		return S(() => {
			t.params.eGridCell.addEventListener("keydown", (e) => {
				e.key === "Enter" && a();
			}), t.params.eGridCell.addEventListener("focus", () => {
				r.value._tippy.show();
			}), t.params.eGridCell.addEventListener("blur", () => {
				r.value._tippy.hide();
			});
		}), x(() => {
			t.params.eGridCell.removeEventListener("keydown", (e) => {
				e.key === "Enter" && a();
			}), t.params.eGridCell.removeEventListener("focus", () => {
				r.value._tippy.show();
			}), t.params.eGridCell.removeEventListener("blur", () => {
				r.value._tippy.hide();
			});
		}), (e, n) => {
			let o = E("tippy");
			return i.value ? N((C(), h("button", {
				key: 0,
				type: "button",
				class: "flex items-center justify-center w-42 h-38",
				content: t.params.config.tooltip,
				onClick: a,
				tabindex: "-1",
				ref_key: "el",
				ref: r
			}, [g("span", { innerHTML: t.params.config.icon }, null, 8, Qe)], 8, Ze)), [[o, { placement: "top" }]]) : m("", !0);
		};
	}
}), et = [
	"name",
	"content",
	"innerHTML"
], tt = ["content"], nt = /* @__PURE__ */ v({
	__name: "cell-renderer",
	props: ["params"],
	setup(e) {
		let t = l(), n = y("iApi"), { t: r } = I(), i = w(), a = w(), o = w(!1), s = e, c = f(() => t.mobileView), u = () => {
			a.value?.textContent && (o.value = !0, i.value?._tippy.show(), navigator.clipboard.writeText(a.value?.textContent), setTimeout(() => {
				o.value = !1;
			}, 2e3));
		}, d = f(() => s.params.type === "number" ? s.params.value == null ? "" : n.ui.formatNumber(s.params.value) : s.params.type === "date" ? s.params.value == null ? "" : new Date(s.params.value).toISOString().slice(0, 10) : s.params.type === "string" ? !s.params.value || /<a[^>]*>[^<]+<\/a>/g.test(s.params.value) ? s.params.value : L(s.params.value, {
			target: "_blank",
			validate: { url: (e) => /^https?:\/\//.test(e) }
		}) : ""), ee = f(() => /<a[^>]*>[^<]+<\/a>/g.test(s.params.value) || /(http(s)?:\/\/.*)/g.test(s.params.value));
		return S(() => {
			s.params.eGridCell.addEventListener("dblclick", () => {
				u();
			}), s.params.eGridCell.addEventListener("keydown", (e) => {
				e.ctrlKey && e.code === "KeyC" && u();
			}), s.params.eGridCell.addEventListener("blur", () => {
				a.value._tippy.hide(), i.value?._tippy.hide();
			}), s.params.eGridCell.addEventListener("focus", () => {
				a.value?._tippy.show(), setTimeout(() => {
					document.activeElement === s.params.eGridCell && i.value?._tippy.show();
				}, 1e3), a.value._tippy.reference.clientWidth >= a.value._tippy.reference.scrollWidth && a.value._tippy.hide();
			});
		}), x(() => {
			s.params.eGridCell.removeEventListener("dblclick", () => {
				u();
			}), s.params.eGridCell.removeEventListener("keydown", (e) => {
				e.ctrlKey && e.code === "KeyC" && u();
			}), s.params.eGridCell.removeEventListener("blur", () => {
				a.value._tippy.hide(), i.value?._tippy.hide();
			}), s.params.eGridCell.removeEventListener("focus", () => {
				a.value._tippy.show(), i.value?._tippy.show();
			});
		}), (e, t) => {
			let n = E("truncate"), s = E("tippy");
			return C(), h("div", null, [N(g("div", {
				name: d.value,
				content: d.value,
				tabindex: "-1",
				innerHTML: d.value,
				ref_key: "el",
				ref: a
			}, null, 8, et), [[n, { options: {
				placement: "top",
				hideOnClick: !1,
				theme: "ramp4",
				maxWidth: c.value ? 300 : 700,
				animation: "scale",
				interactive: ee.value
			} }]]), a.value?.textContent ? N((C(), h("div", {
				key: 0,
				ref_key: "copyTooltip",
				ref: i,
				content: O(r)(`grid.label.${o.value ? "copied" : "copy"}`)
			}, null, 8, tt)), [[s, {
				triggerTarget: a.value,
				placement: "bottom",
				theme: "ramp4",
				hideOnClick: !1,
				delay: [1e3, 0]
			}]]) : m("", !0)]);
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
}, Ht = ["aria-label"], Ut = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Wt = { class: "grow" }, Gt = ["content"], Kt = /* @__PURE__ */ d(/* @__PURE__ */ v({
	__name: "table-component",
	props: {
		panel: {
			type: o,
			required: !0
		},
		gridId: {
			type: String,
			required: !0
		}
	},
	setup(o) {
		_e.registerModules([ge]), ve({ theme: "legacy" });
		let c = [
			a.OID,
			a.DOUBLE,
			a.SINGLE,
			a.INTEGER
		], u = y("iApi"), d = r(), ne = l(), p = f(() => ne.mobileView), v = w(!p.value), T = w(), k = le("gridContainer"), { t: L, locale: be } = I(), xe = () => ie()?.proxy?.$forceUpdate(), R = o, z = w({
			id: "dummy",
			layerIds: [],
			state: new te(),
			fieldMap: {}
		}), Te = w(!0), B = w(null), De = w(), Oe = w(), V = w(!1), H = w(!1), U = w([]), je = w(0), W = w([]), G = w([]), Ne = w(""), K = w([]), q = w([]), Fe = w("OBJECTID"), Le = w(void 0), Re = Se.onCellKeyPress, J = w({
			firstRow: 0,
			lastRow: 0,
			visibleRows: 0
		}), ze = w({}), Y = w({}), Be = w(d.grids[R.gridId].layerIds), X = f(() => d.grids[R.gridId] ? Be.value.map((e) => u.geo.layer.getLayer(e)).filter((e) => e !== void 0) : []), Ve = f(() => z.value.state.filtered || z.value.state.searchFilter), He = w(/* @__PURE__ */ new Set()), We = w([]), Z = f(() => B.value), Ke = () => {
			u.$vApp.$el.querySelectorAll(".ag-input-field-input.ag-checkbox-input").forEach((e, t) => {
				let n = Z.value.getAllDisplayedColumns()?.[t].getColDef();
				e.setAttribute("aria-label", n?.headerName ?? L("grid.label.specialColumn"));
			});
		}, qe = () => {
			(T.value?.querySelectorAll("[data-ref$=\"Viewport\"]"))?.forEach((e) => {
				e.setAttribute("tabindex", "-1");
			});
		}, Je = f(() => X.value.some((e) => e.layerState === s.LOADED && e.visibility)), Ye = (t) => {
			B.value = t.api;
			let n = z.value.state.title;
			n ||= u.geo.layer.getLayer(R.gridId)?.name || R.gridId, Ne.value = n, Jt(), q.value.length > 0 && Z.value.autoSizeAllColumns(), Ke(), qe(), Z.value.addEventListener("rowDataUpdated", Ke), W.value.push(u.event.on(e.FILTER_CHANGE, ({ uid: e, filterKey: t }) => {
				t !== i.GRID && e && X.value.map((e) => e.uid).includes(e) && Q();
			})), W.value.push(u.event.on(e.LAYER_VISIBILITYCHANGE, ({ layer: e }) => {
				e.uid && X.value.map((e) => e.uid).includes(e.uid) && Q();
			})), W.value.push(u.event.on(e.LAYER_RELOAD_END, (e) => {
				e.loadPromise().then(() => {
					X.value.map((e) => e.uid).includes(e.uid) && Q();
				});
			})), W.value.push(u.event.on(e.LANG_CHANGE, () => {
				Z.value.redrawRows({ force: !0 });
			})), W.value.push(u.event.on(e.MAP_EXTENTCHANGE, de(() => {
				z.value.state.filterByExtent && Q();
			}, 100))), W.value.push(u.event.on(e.LAYER_REMOVE, (e) => {
				Be.value.includes(e.id) && X.value.length !== 0 && _n();
			})), Q();
		}, Ze = () => {
			Z.value.autoSizeAllColumns(), Le.value = new Se(T.value, B.value), Ke(), qe();
		}, Qe = () => {
			Z.value.setGridOption("quickFilterText", z.value.state.searchFilter);
		}, et = () => {
			z.value.state.searchFilter = "", Qe();
		}, tt = () => {
			et(), Xt(), Q();
		}, Kt = () => {
			z.value.state.filterByExtent = !z.value.state.filterByExtent, Q();
		}, qt = () => {
			let e = Z.value.getColumnDefs();
			z.value.state.colFilter = !z.value.state.colFilter, e?.forEach((e) => {
				e.floatingFilter = z.value.state.colFilter;
			}), Z.value.setGridOption("columnDefs", e);
		}, Jt = () => {
			B.value && !V.value && (z.value.state.searchFilter !== "" && Qe(), z.value.state.applyToMap && cn(), oe(() => {
				let e = Z.value.getAllDisplayedColumns();
				e && e.length > 0 && Z.value.refreshCells({ columns: [e[0]] }), Yt();
			}));
		}, Yt = () => {
			J.value.firstRow = Z.value.getFirstDisplayedRowIndex() + 1, J.value.lastRow = Z.value.getLastDisplayedRowIndex() + 1, J.value.visibleRows = Z.value.getDisplayedRowCount();
		}, Xt = () => {
			Z.value.setFilterModel({}), z.value.state.clearFilters(), Z.value.refreshHeader();
		}, Zt = () => {
			v.value = !v.value;
			let e = v.value ? "left" : null, t = Z.value.getAllDisplayedColumns();
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
					floatingFilter: z.value.state.colFilter,
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
				let e = z.value.state.controls, n = {
					field: "rvDetailsButton",
					headerName: "",
					headerComponentParams: {
						isStatic: !0,
						preventExport: !0
					},
					sortable: !1,
					pinned: p.value ? null : "left",
					filter: !1,
					lockPosition: !0,
					maxWidth: 42,
					cellStyle: () => ({ padding: "0px" }),
					cellRenderer: Ge,
					cellRendererParams: {
						$iApi: u,
						t: L,
						layerCols: Y.value,
						isTeleport: R.panel.teleport !== void 0
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
						pinned: p.value ? null : "left",
						filter: !1,
						lockPosition: !0,
						maxWidth: 42,
						cellStyle: () => ({ padding: "0px" }),
						cellRenderer: Xe,
						cellRendererParams: {
							$iApi: u,
							layerCols: Y.value,
							isTeleport: R.panel.teleport !== void 0
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
						pinned: p.value ? null : "left",
						filter: !1,
						lockPosition: !0,
						maxWidth: 42,
						cellStyle: () => ({ padding: "0px" }),
						cellRenderer: $e,
						cellRendererParams: {
							$iApi: u,
							t: L,
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
						let t = u.geo.layer.getLayer(e.data.rvUid);
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
						$iApi: u,
						oidField: Fe.value
					}
				};
				t.push(e);
			}
		}, an = () => !Object.values(ze.value).every((e) => e === void 0), on = (e) => {
			let t = ze.value[e.data.rvUid];
			return t === void 0 || t.includes(e.data[Fe.value]);
		}, Q = async () => {
			let e = new t(), n = We.value.slice().map((e) => e.getPromise());
			We.value.push(e), await Promise.all(n), await Promise.all(X.value.map(async (e) => {
				e && e.visibility ? await e.getFilterOIDs([i.GRID], z.value.state.filterByExtent ? u.geo.map.getExtent() : void 0).then((t) => {
					ze.value[e.uid] = t;
				}) : ze.value[e.uid] = [];
			})), Z.value.onFilterChanged(), e.resolveMe();
			let r = We.value.indexOf(e);
			r === -1 ? console.error("Grid could not find filter blocker in filter queue") : We.value.splice(r, 1);
		}, sn = () => {
			z.value.state.applyToMap = !z.value.state.applyToMap, cn();
		}, cn = () => {
			X.value.filter((e) => e.mapLayer).forEach((e) => {
				if (!z.value.state.applyToMap) e.setSqlFilter(i.GRID, "");
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
			}), z.value.state.searchFilter && z.value.state.searchFilter.length > 0) {
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
						default: break;
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
						default: break;
					}
				}
			}
		}, dn = (e) => {
			let t = z.value.state.searchFilter.replace(/'/g, "''").split(" "), n = [];
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
			mn(), R.panel.isOpen && R.panel.close();
		}, mn = () => {
			(V.value || H.value) && X.value.forEach((e) => {
				e.abortAttributeLoad(), e.clearFeatureCache();
			});
		}, $ = f(() => {
			let e = X.value.map((e) => e.visibility && e.canModifyLayer && e.mapLayer), t = X.value.some((e) => e.visibility && e.mapLayer && !e.canModifyLayer), n = e.some(Boolean);
			return t && n ? "partial" : n ? "enabled" : "disabled";
		}), hn = f(() => X.value.some((e) => e.isLoaded && e.supportsFeatures && e.mapLayer)), gn = (e, t) => ye(Y.value, e, t), _n = async () => {
			let e = X.value.filter((e) => e.supportsFeatures && e.isLoaded);
			e.length === 0 && pn(), je.value = e.reduce((e, { featureCount: t }) => e + t, 0), U.value = Array(X.value.length).fill(0), e.forEach((e, t) => U.value[t] += e.downloadedAttributes()), e.forEach((e, t) => {
				G.value.push(ue(() => e.downloadedAttributes(), (e) => {
					U.value[t] = e;
				}));
			}), await Promise.all(e.map((e) => e.loadPromise()));
			let t = e.map(async (e) => {
				let t = await ae(e).getTabularAttributes(), n = z?.value?.state?.state;
				if (n?.columns && n.columnMetadata?.exclusiveColumns) {
					let e = n.columns.map((e) => e.field);
					t.columns = t.columns.filter((t) => e.includes(t.data));
				}
				return t;
			}), [n, r] = await fe(Promise.all(t));
			if (n) {
				console.error(n), H.value = !0, V.value = !1;
				return;
			}
			if (e.every((e) => e.attribLoadAborted())) {
				V.value = !1;
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
					z.value.fieldMap && z.value.fieldMap[e.data] ? (r.push({
						origAttr: e.data,
						mappedAttr: z.value.fieldMap[e.data]
					}), e.data = z.value.fieldMap[e.data], e.title = e.data) : r.push({
						origAttr: e.data,
						mappedAttr: void 0
					}), i.columns.map((e) => e.data).includes(e.data) || i.columns.push(e);
				}), i.rows = i.rows.concat(t.rows.map((e) => {
					if (z.value.fieldMap) for (let [t, n] of Object.entries(z.value.fieldMap)) e[t] !== void 0 && e[n] === void 0 && (e[n] = e[t], delete e[t]);
					return e;
				})), i.fields = i.fields.concat(t.fields.map((e) => ((!u.ui.exposeOids && e.type === "oid" || !u.ui.exposeMeasurements && (e.name.toLowerCase() === "shape_length" || e.name.toLowerCase() === "shape_area")) && He.value.add(e.name), {
					name: z.value.fieldMap && z.value.fieldMap[e.name] ? z.value.fieldMap[e.name] : e.name,
					type: e.type,
					alias: e.alias ?? void 0,
					length: e.length ?? void 0
				}))), i.oidField = z.value.fieldMap && z.value.fieldMap[t.oidField] ? z.value.fieldMap[t.oidField] : t.oidField, Y.value[a] = r;
			}), Fe.value = i.oidField;
			for (let e = 0; e < i.rows.length; e++) for (let [t] of Object.entries(i.rows[e])) u.ui.isPlainText(i.rows[e][t]) && (i.rows[e][t] = u.ui.escapeHtml(i.rows[e][t]));
			[
				"rvRowIndex",
				"rvInteractive",
				"rvSymbol"
			].map((e) => ({
				data: e,
				title: "",
				special: !0
			})).concat(i.columns).forEach((e) => {
				z.value.state.columns[e.data] === void 0 && (z.value.state.columns[e.data] = new ee({
					field: e.data,
					title: e.title
				})), (!u.ui.exposeOids || !u.ui.exposeMeasurements) && He.value.has(e.data) && (z.value.state.columns[e.data].visible = !1);
				let t = z.value.state.columns[e.data], n = t.filter.type === "selector", r = {
					headerName: t.title ?? e.title,
					headerComponent: "agColumnHeader",
					headerComponentParams: { sort: t.sort },
					field: e.data ?? e,
					sortable: !0,
					lockPosition: !0,
					filterParams: {},
					floatingFilter: z.value.state.colFilter && t.searchable,
					hide: !t.visible,
					minWidth: t.width,
					maxWidth: t.width ?? 400,
					cellRenderer: (e) => e.value,
					suppressHeaderKeyboardEvent: (e) => {
						let t = e.event;
						return e.headerRowIndex === 0 && (t.key === "Enter" || !t.target.classList.contains("ag-header-cell") && t.key === "Tab");
					}
				};
				if (e.special) rn(r, K.value, z.value.state);
				else {
					let e = i.fields.find((e) => e.name === r.field);
					r.cellRenderer = t.template === "" ? nt : u.component(t.template), r.autoHeight = !0, c.indexOf(e.type) > -1 ? (tn(r, z.value.state), r.filter = "agNumberColumnFilter", r.cellRendererParams = { type: "number" }) : e.type === a.DATE ? ($t(r, z.value.state), r.filter = "agDateColumnFilter", r.minWidth = 400, r.cellRendererParams = { type: "date" }) : e.type === a.STRING && (n ? en(r, i.rows, z.value.state) : nn(r, z.value.state), r.filter = "agTextColumnFilter", r.cellRendererParams = { type: "string" }), K.value.push(r);
				}
			}), q.value = ae(i.rows), K.value = ae(K.value), Jt(), V.value = !1;
		}, vn = (e) => {
			e.key === "Tab" && k.value?.matches(":focus") && k.value._tippy.show();
		}, yn = () => {
			k.value._tippy.hide();
		};
		return S(() => {
			k.value?.addEventListener("keyup", vn), k.value?.addEventListener("blur", yn);
		}), se(() => {
			z.value = d.grids[R.gridId], V.value = !0, xe(), J.value = {
				firstRow: 0,
				lastRow: 0,
				visibleRows: 0
			}, Oe.value = {
				agColumnHeader: Ue,
				numberFloatingFilter: ke,
				textFloatingFilter: Ae,
				selectorFloatingFilter: Me,
				dateFloatingFilter: Pe,
				clearFloatingFilter: Ie
			}, De.value = {
				ensureDomOrder: !0,
				rowHeight: 40,
				suppressRowTransform: !0,
				onFilterChanged: () => {
					cn(), Jt();
				},
				onBodyScroll: () => {
					[...u.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((e) => {
						e._tippy && T.value?.contains(e._tippy.reference) && e._tippy.hide();
					});
				},
				onBodyScrollEnd: () => {
					Yt();
				},
				rowBuffer: 0,
				suppressColumnVirtualisation: !0,
				tabToNextCell: we,
				tabToNextHeader: Ce,
				onModelUpdated: de(() => {
					Z.value.autoSizeAllColumns(), Ke();
				}, 300)
			}, _n(), $.value === "partial" && u.notify.show(n.WARNING, u.$i18n.t("layer.filterwarning")), G.value.push(ue(be, () => {
				Te.value = !1, setTimeout(() => {
					Te.value = !0;
				}, 10);
			})), G.value.push(ue($, (e) => {
				e === "partial" && u.notify.show(n.WARNING, u.$i18n.t("layer.filterwarning"));
			}));
		}), x(() => {
			mn(), W.value.forEach((e) => u.event.off(e)), G.value.forEach((e) => e()), Le.value?.removeAccessibilityListeners(), Le.value?.removeScrollListeners(), k.value?.removeEventListener("keyup", vn), k.value?.removeEventListener("blur", yn);
		}), (e, t) => {
			let n = ce("dropdown-menu"), r = E("truncate"), i = E("tippy");
			return C(), h("div", {
				class: "flex flex-col w-full h-full bg-white",
				ref_key: "el",
				ref: T
			}, [
				N(g("div", null, [g("p", rt, D(O(L)("grid.splash.error")), 1)], 512), [[j, H.value]]),
				N(g("div", it, [
					g("div", at, [
						g("span", ot, D(U.value.reduce((e, t) => e + t, 0)), 1),
						t[12] ||= g("svg", {
							class: "stroke-black stroke-1",
							height: "50",
							width: "25"
						}, [g("line", {
							x1: "0",
							y1: "50",
							x2: "25",
							y2: "0"
						})], -1),
						g("span", st, D(je.value), 1)
					]),
					g("div", ct, [g("span", lt, D(U.value.reduce((e, t) => e + t, 0) < je.value ? O(L)("grid.splash.loading") : O(L)("grid.splash.building")), 1)]),
					g("div", null, [g("button", {
						type: "button",
						onClick: pn,
						class: "py-8 px-8 sm:px-16 bg-gray-300",
						"aria-label": O(L)("grid.splash.cancel")
					}, D(O(L)("grid.splash.cancel")), 9, ut)])
				], 512), [[j, V.value && !H.value]]),
				N(g("div", dt, [g("div", ft, [N((C(), h("div", pt, [_(D(Ne.value), 1)])), [[j, Ne.value !== ""], [r]]), N((C(), h("div", mt, [_(D((!Je.value && J.value.visibleRows === 0 ? `${O(L)("grid.filters.label.hidden")} — ` : "") + O(L)("grid.filters.label.info", {
					range: J.value.visibleRows === 0 ? "0" : `${J.value.firstRow} - ${J.value.lastRow}`,
					total: J.value.visibleRows
				})) + " ", 1), J.value.visibleRows !== q.value.length && Je.value ? (C(), h("span", ht, D(O(L)("grid.filters.label.filtered", { max: q.value.length })), 1)) : m("", !0)])), [[r]])]), g("div", gt, [N(g("div", _t, [N(g("input", {
					onInput: t[0] ||= (e) => Qe(),
					onKeypress: t[1] ||= P(F(() => {}, ["prevent"]), ["enter"]),
					onKeyup: t[2] ||= P((e) => {
						O(ne).mobileView && e?.target?.blur();
					}, ["enter"]),
					enterkeyhint: "done",
					"onUpdate:modelValue": t[3] ||= (e) => z.value.state.searchFilter = e,
					class: "rv-global-search rv-input pr-32 min-w-0",
					"aria-invalid": "false",
					"aria-label": O(L)("grid.filters.label.global"),
					placeholder: O(L)("grid.filters.label.global")
				}, null, 40, vt), [[A, z.value.state.searchFilter]]), g("div", yt, [z.value.state.searchFilter.length < 3 ? (C(), h("svg", bt, [...t[13] ||= [g("g", { id: "search_cache224" }, [g("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })], -1)]])) : (C(), h("button", {
					key: 1,
					class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
					onClick: t[4] ||= (e) => et(),
					"aria-label": O(L)("grid.search.clear")
				}, [...t[14] ||= [g("svg", {
					"data-v-486a0302": "",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 352 512",
					class: "fill-current w-18 h-18 mt-2"
				}, [g("path", {
					"data-v-486a0302": "",
					d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
				})], -1)]], 8, xt))])], 512), [[j, z.value.state.search]]), g("div", St, [
					re(Ee, {
						gridApi: B.value,
						columnDefs: K.value,
						systemCols: He.value,
						onRefreshHeaders: t[5] ||= (e) => B.value.refreshHeader()
					}, null, 8, [
						"gridApi",
						"columnDefs",
						"systemCols"
					]),
					N((C(), h("button", {
						type: "button",
						class: b(["grid-clearall p-4 h-40", Ve.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default"]),
						onClick: t[6] ||= (e) => Ve.value && tt(),
						content: O(L)("grid.clearAll"),
						"aria-label": O(L)("grid.clearAll")
					}, [...t[15] ||= [g("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						height: "24px",
						width: "24px",
						viewBox: "0 0 24 24",
						class: "inline fill-current"
					}, [g("g", { id: "filter_cache958" }, [g("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })])], -1)]], 10, Ct)), [[i, { placement: "bottom" }]]),
					re(n, {
						class: "h-40 w-40",
						position: "bottom-end",
						tooltip: O(L)("panels.controls.optionsMenu"),
						centered: !1
					}, {
						header: M(() => [...t[16] ||= [g("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 24 24",
							class: "fill-current m-8 w-24 h-24"
						}, [g("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })], -1)]]),
						default: M(() => [
							g("a", {
								href: "javascript:;",
								class: b(["leading-snug w-256", {
									hover: $.value === "disabled" ? "text-black" : "none",
									disabled: $.value === "disabled"
								}]),
								onClick: t[7] ||= (e) => $.value !== "disabled" && sn(),
								role: "button",
								"aria-label": O(L)("grid.label.filters.apply")
							}, [g("div", Tt, [
								t[18] ||= g("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									class: "fill-current w-20 h-20 mr-2 text-gray-500"
								}, [g("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })], -1),
								g("span", Et, D(O(L)("grid.label.filters.apply")), 1),
								$.value !== "disabled" && z.value.state.applyToMap ? (C(), h("svg", Dt, [...t[17] ||= [g("g", { id: "done" }, [g("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : m("", !0)
							])], 10, wt),
							g("a", {
								href: "javascript:;",
								class: "leading-snug w-256 hover:text-black",
								onClick: t[8] ||= (e) => qt(),
								role: "button",
								"aria-label": O(L)("grid.label.filters.show")
							}, [g("div", kt, [
								t[20] ||= g("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									class: "fill-current w-20 h-20 mr-2 text-gray-500"
								}, [g("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })], -1),
								g("span", At, D(O(L)("grid.label.filters.show")), 1),
								z.value.state.colFilter ? (C(), h("svg", jt, [...t[19] ||= [g("g", { id: "done" }, [g("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : m("", !0)
							])], 8, Ot),
							g("a", {
								href: "javascript:;",
								class: b(["leading-snug w-256", {
									hover: $.value === "disabled" ? "text-black" : "none",
									disabled: $.value === "disabled"
								}]),
								onClick: t[9] ||= (e) => $.value !== "disabled" && Kt(),
								role: "button",
								"aria-label": O(L)("grid.filters.label.extent")
							}, [g("div", Nt, [
								t[22] ||= g("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24",
									class: "fill-current w-20 h-20 mr-2 text-gray-500"
								}, [g("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })], -1),
								g("span", Pt, D(O(L)("grid.filters.label.extent")), 1),
								$.value !== "disabled" && z.value.state.filterByExtent ? (C(), h("svg", Ft, [...t[21] ||= [g("g", { id: "done" }, [g("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : m("", !0)
							])], 10, Mt),
							g("a", {
								href: "javascript:;",
								class: b(["leading-snug w-256", { hover: "text-black" }]),
								onClick: t[10] ||= (e) => Zt(),
								role: "button",
								"aria-label": O(L)("grid.label.pinColumns")
							}, [g("div", Lt, [
								v.value ? (C(), h("svg", Rt, [...t[23] ||= [g("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)]])) : v.value ? m("", !0) : (C(), h("svg", zt, [...t[24] ||= [g("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)]])),
								g("span", Bt, D(O(L)("grid.label.pinColumns")), 1),
								v.value ? (C(), h("svg", Vt, [...t[25] ||= [g("g", { id: "done" }, [g("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })], -1)]])) : m("", !0)
							])], 8, It),
							g("a", {
								href: "javascript:;",
								class: b(["leading-snug w-256", { hover: "text-black" }]),
								onClick: t[11] ||= (e) => Qt(),
								role: "button",
								"aria-label": O(L)("grid.label.export")
							}, [g("div", Ut, [t[26] ||= g("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								viewBox: "0 0 24 24",
								class: "fill-current w-20 h-20 mr-2 text-gray-500"
							}, [g("g", null, [g("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })])], -1), g("span", Wt, D(O(L)("grid.label.export")), 1)])], 8, Ht)
						]),
						_: 1
					}, 8, ["tooltip"])
				])])], 512), [[j, !V.value && !H.value]]),
				Te.value ? N((C(), h("div", {
					key: 0,
					content: O(L)("grid.cells.controls"),
					class: "w-full h-full flex flex-col",
					ref_key: "gridContainer",
					ref: k,
					tabIndex: "-1"
				}, [re(O(pe), {
					class: "ag-theme-material flex-grow",
					enableCellTextSelection: !0,
					accentedSort: !0,
					localeText: O(be) === "en" ? O(me) : O(he),
					gridOptions: De.value,
					columnDefs: K.value,
					rowData: q.value,
					components: Oe.value,
					onGridReady: Ye,
					onKeydown: fn,
					onFirstDataRendered: Ze,
					onCellKeyPress: O(Re),
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
				}], [j, !V.value && !H.value]]) : m("", !0)
			], 512);
		};
	}
}), [["__scopeId", "data-v-7c082689"]]), qt = /* @__PURE__ */ d(/* @__PURE__ */ v({
	__name: "screen",
	props: { panel: {
		type: o,
		required: !0
	} },
	setup(e) {
		let t = r(), { t: n } = I(), i = f(() => t.currentId);
		return (t, r) => {
			let a = ce("panel-screen");
			return C(), p(a, { panel: e.panel }, {
				header: M(() => [_(D(O(n)("grid.title")), 1)]),
				content: M(() => [re(Kt, {
					class: "rv-grid",
					gridId: i.value,
					panel: e.panel
				}, null, 8, ["gridId", "panel"])]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-904e67ef"]]);
//#endregion
export { qt as default };
