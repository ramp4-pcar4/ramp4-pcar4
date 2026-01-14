import { defineComponent as I, inject as ie, resolveComponent as Ve, createBlock as Xe, openBlock as _, unref as g, withCtx as se, createElementBlock as E, Fragment as Je, renderList as et, createElementVNode as s, createTextVNode as ne, createCommentVNode as S, toDisplayString as D, ref as w, onBeforeMount as ve, withDirectives as A, withKeys as P, withModifiers as V, normalizeClass as z, vModelText as oe, vModelSelect as Mt, onMounted as X, nextTick as _e, onBeforeUnmount as J, resolveDirective as O, computed as H, useTemplateRef as kt, getCurrentInstance as Ft, watch as Ie, vShow as ae, createVNode as Ee, markRaw as Ge } from "vue";
import "tiny-emitter";
import { a as fe, _ as ge, G as Q, W as At, X as Tt, L as $t, Y as Rt, Z as tt, $ as re, i as lt, a0 as Ye, a1 as Le, a2 as Dt } from "./main-mgxqA_dp.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import { debounce as Ze } from "throttle-debounce";
import "pinia";
import { useI18n as N } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import St from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as It } from "ag-grid-vue3";
import { T as Gt, C as Pt } from "./table-state-manager-CYJ24Yv5.js";
import { AG_GRID_LOCALE_EN as Vt, AG_GRID_LOCALE_FR as Ht } from "@ag-grid-community/locale";
import { ModuleRegistry as Nt, AllCommunityModule as Bt, provideGlobalGridOptions as zt } from "ag-grid-community";
const Ot = ".ag-root", Ut = ".ag-header-viewport .ag-header-row";
class Qe {
  element;
  agGrid;
  headerRows;
  agGridApi;
  mousedown = !1;
  /**
   * Triggered by ag-grid whenever a key is pressed on a focused/active cell.
   * For our use case we open a new browser tab (or window, it's based on the users browser settings)
   * for each href attribute found in the cell content when the 'Enter' key is pressed.
   *
   * Note that for security/performance purposes some browsers limit the number
   * of tabs that can be opened to one. The user can disable this limitation by
   * allowing popups from the website hosting a ramp map (shows up as an icon in the url bar of chrome,
   * other browser may vary).
   */
  static onCellKeyPress({ event: n }) {
    function e(a) {
      a.forEach((l) => {
        l.href && window.open(l.href), l.childNodes.length > 0 && e(l.childNodes);
      });
    }
    n.key == "Enter" && e(n.target.childNodes);
  }
  /**
   * Initializes focus lists and listeners for grid keyboard navigation.
   *
   * @param {HTMLElement} element The grid element
   * @param {GridApi} agGridApi The ag-grid grid api
   * @param {ColumnApi} agColumnApi The ag-grid column api
   */
  constructor(n, e) {
    this.element = n, this.agGridApi = e, this.agGrid = this.element.querySelector(Ot), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(Ut)
    ), this.element.querySelector(".ag-body-horizontal-scroll-viewport")?.setAttribute("tabindex", "-1"), this.initAccessibilityListeners(), this.initScrollListeners();
  }
  /**
   * Set up the listeners for the grid.
   */
  initAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, a) => {
      if (a < 1)
        return;
      const l = Array.prototype.slice.call(e.querySelectorAll("button"));
      e.addEventListener("keydown", (o) => {
        this.cellKeydownHandler(o, e, l);
      }), e.addEventListener("blur", (o) => {
        this.cellBlurHandler(o, e, l);
      }), l[l.length - 1].addEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, l, !1);
      }), l[0].addEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, l, !0);
      });
    });
  }
  /**
   * Remove all accessibility listeners from the grid.
   */
  removeAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, a) => {
      if (a < 1)
        return;
      const l = Array.prototype.slice.call(e.querySelectorAll("button"));
      e.removeEventListener("keydown", (o) => {
        this.cellKeydownHandler(o, e, l);
      }), e.removeEventListener("blur", (o) => {
        this.cellBlurHandler(o, e, l);
      }), l[l.length - 1].removeEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, l, !1);
      }), l[0].removeEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, l, !0);
      });
    });
  }
  /**
   * Makes `enter` allow navigation within the cell
   *
   * @param {KeyboardEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellKeydownHandler(n, e, a) {
    n.key === "Enter" && n.target === e && (n.preventDefault(), a.forEach((l) => {
      l.setAttribute("tabindex", "0");
    }), a[0].focus());
  }
  /**
   * Removes ability to tab to inner items when focus leaves the cell (and inner items)
   *
   * @param {FocusEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellBlurHandler(n, e, a) {
    n.target === e && !a.includes(n.relatedTarget) && a.forEach((l) => {
      l.setAttribute("tabindex", "-1");
    });
  }
  /**
   * Handles giving focus back to the cell after shift+tabbing on the first inner item or tabbing on the last
   *
   * @param event The event to handle
   * @param cell The grid header cell
   * @param buttons The list of buttons in the cell
   * @param shift Whether to handle shift tab or regular tab
   */
  cellButtonTabHandler(n, e, a, l) {
    n.key === "Tab" && (l && n.shiftKey || !l && !n.shiftKey) && (n.preventDefault(), e.focus(), a.forEach((o) => {
      o.setAttribute("tabindex", "-1");
    }));
  }
  //  **** CLICK & DRAG SCROLLING ****
  /**
   * Initializes the handlers needed for click + drag scrolling
   */
  initScrollListeners() {
    this.agGrid.style.cursor = "grab", this.agGrid.addEventListener("mousedown", (n) => {
      this.scrollMouseDownHandler(n);
    });
  }
  /**
   * Removes the handlers for click + drag scrolling
   */
  removeScrollListeners() {
    this.agGrid.style.cursor = "default", this.agGrid.removeEventListener("mousedown", (n) => {
      this.scrollMouseDownHandler(n);
    });
  }
  /**
   * Handles starting click + drag scrolling on mousedown
   *
   * @param {MouseEvent} event The mousedown event
   */
  scrollMouseDownHandler(n) {
    const e = this.element.querySelector(".ag-body-horizontal-scroll-viewport"), a = e.scrollLeft, l = n.clientX;
    this.agGrid.style.cursor = "grabbing";
    const o = (p) => {
      const m = p.clientX - l;
      e.scrollLeft = a - m;
    }, d = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", o), this.agGrid.removeEventListener("mouseup", d), this.agGrid.removeEventListener("mouseleave", d);
    };
    this.agGrid.addEventListener("mousemove", o), this.agGrid.addEventListener("mouseup", d), this.agGrid.addEventListener("mouseleave", d);
  }
}
function Kt(L) {
  const n = L.previousHeaderPosition.column, e = L.previousHeaderPosition.headerRowIndex;
  let a = L.backwards ? e - 1 : e + 1;
  return a === -1 ? !1 : (a === L.headerRowCount && (a = -1), { headerRowIndex: a, column: n });
}
function jt(L) {
  return L.backwards ? { column: L.previousCellPosition.column, rowIndex: -1 } : !1;
}
const qt = ["onClick"], Wt = { class: "md-icon-small inline" }, Yt = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, Zt = /* @__PURE__ */ I({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    gridApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(L) {
    const n = ie("iApi"), { t: e } = N();
    return (a, l) => {
      const o = Ve("dropdown-menu");
      return _(), Xe(o, {
        class: "relative",
        position: "bottom-end",
        tooltip: g(e)("grid.label.columns"),
        tooltipPlacementAlt: "left",
        centered: !1
      }, {
        header: se(() => l[0] || (l[0] = [
          s("div", { class: "flex p-8" }, [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fit: "",
              height: "24px",
              width: "24px",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 23 24",
              focusable: "false",
              class: "inline fill-current"
            }, [
              s("g", { id: "format-list-checks_cache966" }, [
                s("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" })
              ])
            ])
          ], -1)
        ])),
        default: se(() => [
          (_(!0), E(Je, null, et(L.columnDefs.filter(
            (d) => d.headerName && d.headerName.length > 0 && !(!g(n).ui.exposeOids && L.systemCols?.has(d.headerName)) && !(!g(n).ui.exposeMeasurements && (L.systemCols?.has(d.headerName) || L.systemCols?.has(d.field)))
          ), (d) => (_(), E("a", {
            key: d.headerName,
            onClick: (p) => {
              L.gridApi?.setColumnsVisible([d.field], d.hide), d.hide = !d.hide, a.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center w-256"
          }, [
            s("div", Wt, [
              ne(D(d.headerName) + " ", 1),
              d.hide ? S("", !0) : (_(), E("svg", Yt, l[1] || (l[1] = [
                s("g", { id: "done" }, [
                  s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ])))
            ])
          ], 8, qt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), Qt = { class: "h-full flex items-center justify-center" }, Xt = ["placeholder", "aria-label", "disabled"], Jt = ["placeholder", "aria-label", "disabled"], el = {
  methods: {
    onParentModelChanged() {
    }
  }
}, tl = /* @__PURE__ */ I({
  ...el,
  __name: "custom-number-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = N(), a = L, l = w(""), o = w(""), d = w(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), p = () => {
      l.value = l.value !== "" && !isNaN(l.value) ? l.value : null, y(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
    }, m = () => {
      o.value = o.value !== "" && !isNaN(o.value) ? o.value : null, y(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, o.value, "max");
    }, y = () => {
      (isNaN(l.value) || l.value === null) && (l.value = ""), (isNaN(o.value) || o.value === null) && (o.value = "");
      const C = a.params.column.colDef.field;
      o.value === "" && l.value === "" ? a.params.api.setColumnFilterModel(C, null) : o.value !== "" && l.value !== "" ? a.params.api.setColumnFilterModel(C, {
        filterType: "number",
        type: "inRange",
        filter: l.value,
        filterTo: o.value
      }) : l.value === "" ? a.params.api.setColumnFilterModel(C, {
        filterType: "number",
        type: "lessThanOrEqual",
        filter: o.value
      }) : a.params.api.setColumnFilterModel(C, {
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: l.value
      }), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min"), o.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max"), p(), m();
    }), (C, h) => (_(), E("div", Qt, [
      A(s("input", {
        class: z(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": d.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": h[0] || (h[0] = (x) => l.value = x),
        onInput: h[1] || (h[1] = (x) => p()),
        onMousedown: h[2] || (h[2] = V(() => {
        }, ["stop"])),
        onKeypress: h[3] || (h[3] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[4] || (h[4] = P((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: g(e)("grid.filters.number.min"),
        "aria-label": g(e)("grid.filters.number.min"),
        disabled: d.value
      }, null, 42, Xt), [
        [oe, l.value]
      ]),
      h[10] || (h[10] = s("span", { class: "w-12" }, null, -1)),
      A(s("input", {
        class: z(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": d.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": h[5] || (h[5] = (x) => o.value = x),
        onInput: h[6] || (h[6] = (x) => m()),
        onMousedown: h[7] || (h[7] = V(() => {
        }, ["stop"])),
        onKeypress: h[8] || (h[8] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[9] || (h[9] = P((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: g(e)("grid.filters.number.max"),
        "aria-label": g(e)("grid.filters.number.max"),
        disabled: d.value
      }, null, 42, Jt), [
        [oe, o.value]
      ])
    ]));
  }
}), ll = /* @__PURE__ */ ge(tl, [["__scopeId", "data-v-27003866"]]), al = { class: "h-full flex items-center justify-center" }, rl = ["placeholder", "aria-label", "disabled"], sl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, nl = /* @__PURE__ */ I({
  ...sl,
  __name: "custom-text-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = N(), a = L, l = w(""), o = w(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), d = () => {
      l.value = l.value ? l.value : "";
      const p = a.params.column.colDef.field;
      l.value ? a.params.api.setColumnFilterModel(p, {
        filterType: "text",
        type: "contains",
        filter: l.value
      }) : a.params.api.setColumnFilterModel(p, null), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field).toString(), d();
    }), (p, m) => (_(), E("div", al, [
      A(s("input", {
        class: z(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": o.value
        }]),
        type: "text",
        onInput: m[0] || (m[0] = (y) => d()),
        "onUpdate:modelValue": m[1] || (m[1] = (y) => l.value = y),
        onMousedown: m[2] || (m[2] = V(() => {
        }, ["stop"])),
        onKeypress: m[3] || (m[3] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: m[4] || (m[4] = P((y) => {
          g(n).mobileView && y.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: g(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        "aria-label": g(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        disabled: o.value
      }, null, 42, rl), [
        [oe, l.value]
      ])
    ]));
  }
}), ol = { class: "h-full flex items-center justify-center" }, il = ["aria-label", "disabled"], ul = ["value"], dl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, pl = /* @__PURE__ */ I({
  ...dl,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(L) {
    const n = L, e = w(""), a = w([]), l = w(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), o = () => {
      e.value = e.value ? e.value : "";
      const d = n.params.column.colDef.field;
      e.value === "..." || !e.value ? (n.params.api.setColumnFilterModel(d, null), e.value = "") : n.params.api.setColumnFilterModel(d, {
        filterType: "text",
        type: "contains",
        filter: e.value
      }), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, e.value), n.params.api.onFilterChanged();
    };
    return ve(() => {
      e.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field);
      let d = n.params.rowData;
      d = d.map((p) => p[n.params.column.colId]), a.value = d.filter((p, m) => d.indexOf(p) === m), a.value.unshift("..."), o();
    }), (d, p) => (_(), E("div", ol, [
      A(s("select", {
        class: z(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": l.value
        }]),
        "onUpdate:modelValue": p[0] || (p[0] = (m) => e.value = m),
        onChange: p[1] || (p[1] = (m) => o()),
        onMousedown: p[2] || (p[2] = V(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: l.value
      }, [
        (_(!0), E(Je, null, et(a.value, (m) => (_(), E("option", {
          value: m,
          key: m
        }, D(m), 9, ul))), 128))
      ], 42, il), [
        [Mt, e.value]
      ])
    ]));
  }
}), cl = /* @__PURE__ */ ge(pl, [["__scopeId", "data-v-e6bcc33c"]]), ml = { class: "h-full flex items-center justify-center w-full" }, vl = ["placeholder", "aria-label", "disabled"], fl = ["placeholder", "aria-label", "disabled"], gl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, hl = /* @__PURE__ */ I({
  ...gl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = N(), a = L, l = w(""), o = w(""), d = w(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), p = () => {
      y(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
    }, m = () => {
      y(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, o.value, "max");
    }, y = () => {
      const C = a.params.column.colDef.field;
      o.value === "" && l.value === "" ? a.params.api.setColumnFilterModel(C, null) : o.value !== "" && l.value !== "" ? a.params.api.setColumnFilterModel(C, {
        filterType: "date",
        type: "inRange",
        dateFrom: l.value,
        dateTo: o.value
      }) : l.value === "" ? a.params.api.setColumnFilterModel(C, {
        filterType: "date",
        type: "lessThan",
        dateFrom: o.value
      }) : a.params.api.setColumnFilterModel(C, {
        filterType: "date",
        type: "greaterThan",
        dateFrom: l.value
      }), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min") || "", o.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max") || "", p(), m();
    }), (C, h) => (_(), E("div", ml, [
      A(s("input", {
        class: z(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": d.value
        }]),
        type: "date",
        placeholder: g(e)("grid.filters.date.min"),
        "aria-label": g(e)("grid.filters.date.min"),
        "onUpdate:modelValue": h[0] || (h[0] = (x) => l.value = x),
        onInput: h[1] || (h[1] = (x) => p()),
        onMousedown: h[2] || (h[2] = V(() => {
        }, ["stop"])),
        onKeypress: h[3] || (h[3] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[4] || (h[4] = P((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: d.value
      }, null, 42, vl), [
        [oe, l.value]
      ]),
      h[10] || (h[10] = s("span", { class: "w-12" }, null, -1)),
      A(s("input", {
        class: z(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": d.value
        }]),
        type: "date",
        placeholder: g(e)("grid.filters.date.max"),
        "aria-label": g(e)("grid.filters.date.max"),
        "onUpdate:modelValue": h[5] || (h[5] = (x) => o.value = x),
        onInput: h[6] || (h[6] = (x) => m()),
        onMousedown: h[7] || (h[7] = V(() => {
        }, ["stop"])),
        onKeypress: h[8] || (h[8] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[9] || (h[9] = P((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: d.value
      }, null, 42, fl), [
        [oe, o.value]
      ])
    ]));
  }
}), yl = /* @__PURE__ */ ge(hl, [["__scopeId", "data-v-424baaed"]]), bl = ["content", "disabled", "aria-label"], wl = /* @__PURE__ */ I({
  __name: "clear-filter",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = N(), a = w(), l = w(), o = w(), d = () => n.params.clearFilters();
    return X(async () => {
      await _e(), l.value = a.value?.closest(".ag-header-cell"), o.value = l.value.closest(".ag-pinned-left-header"), l.value.addEventListener("keydown", async (p) => {
        p.key === "Enter" && (p.stopPropagation(), d(), await _e(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.addEventListener("focus", () => {
        a.value._tippy.show();
      }), l.value.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      l.value && (l.value.removeEventListener("keydown", async (p) => {
        p.key === "Enter" && (p.stopPropagation(), d(), await _e(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), l.value.removeEventListener("blur", () => {
        a.value._tippy.hide();
      }));
    }), (p, m) => {
      const y = O("tippy");
      return A((_(), E("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: d,
        content: g(e)("grid.filters.clear"),
        disabled: !L.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: a,
        "aria-label": g(e)("grid.filters.clear")
      }, m[0] || (m[0] = [
        s("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "enable-background": "new 0 0 24 24",
          class: "h-24 w-24 fill-current",
          viewBox: "0 0 24 24"
        }, [
          s("g", null, [
            s("rect", {
              fill: "none",
              height: "24",
              width: "24"
            })
          ]),
          s("g", null, [
            s("g", null, [
              s("path", { d: "M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z" }),
              s("path", { d: "M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z" })
            ])
          ])
        ], -1)
      ]), 8, bl)), [
        [y, { placement: "bottom" }]
      ]);
    };
  }
}), xl = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, Cl = ["content", "aria-label"], Ll = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, _l = {
  key: 2,
  class: "flex"
}, El = {
  key: 0,
  class: "w-24 inline-block"
}, Ml = {
  key: 1,
  class: "customSortDownLabel"
}, kl = {
  key: 2,
  class: "customSortUpLabel"
}, Fl = ["content", "aria-label", "disabled"], Al = ["content", "aria-label", "disabled"], Tl = /* @__PURE__ */ I({
  __name: "custom-header",
  props: ["params"],
  setup(L) {
    const { t: n } = N(), e = L, a = w(), l = w(0), o = w(!1), d = w(!1), p = w(!1), m = w(null), y = () => {
      const c = m.value?.getAllDisplayedColumns(), M = c.indexOf(e.params.column), $ = c[M - 1]?.colDef, U = c[M + 1]?.colDef;
      d.value = M > 3 && !($?.headerComponentParams?.isStatic ?? $?.isStatic), p.value = M < c.length - 1 && !(U?.headerComponentParams?.isStatic ?? U?.isStatic);
    }, C = () => {
      const c = m.value?.getAllDisplayedColumns(), M = m.value?.getAllGridColumns(), $ = M.indexOf(c[c.indexOf(e.params.column) - 1]);
      d.value && (m.value?.moveColumns([e.params.column], $), e.params.api.ensureColumnVisible(M[$]), a.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, h = () => {
      const c = m.value?.getAllDisplayedColumns(), M = m.value?.getAllGridColumns(), $ = M.indexOf(c[c.indexOf(e.params.column) + 1]);
      p.value && (m.value?.moveColumns([e.params.column], $), e.params.api.ensureColumnVisible(M[$]));
    }, x = (c) => {
      l.value = (l.value + 1) % 3, l.value === 1 ? e.params.setSort("asc", c.shiftKey) : l.value === 2 ? e.params.setSort("desc", c.shiftKey) : e.params.setSort("none", c.shiftKey);
    };
    return X(() => {
      o.value = e.params.column.colDef.sortable, m.value = e.params.api, e.params.sort === "asc" ? (l.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (l.value = 2, e.params.setSort("desc")), y(), e.params.column.addEventListener("leftChanged", () => {
        y();
      });
    }), J(() => {
      e.params.column.removeEventListener("leftChanged", () => {
        y();
      });
    }), (c, M) => {
      const $ = O("truncate"), U = O("tippy");
      return _(), E("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: a
      }, [
        o.value ? (_(), E("div", xl, [
          A((_(), E("button", {
            type: "button",
            onClick: M[0] || (M[0] = (ee) => x(ee)),
            content: g(n)(`grid.header.sort.${l.value}`),
            "aria-label": g(n)(`grid.header.sort.${l.value}`),
            class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
            role: "columnheader",
            tabindex: "-1"
          }, [
            A((_(), E("div", null, [
              ne(D(L.params.displayName), 1)
            ])), [
              [$, { externalTrigger: !0 }]
            ])
          ], 8, Cl)), [
            [U, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : A((_(), E("span", Ll, [
          ne(D(L.params.displayName), 1)
        ])), [
          [$]
        ]),
        o.value ? (_(), E("div", _l, [
          L.params.enableSorting && l.value === 0 ? (_(), E("span", El)) : S("", !0),
          L.params.enableSorting && l.value === 1 ? (_(), E("span", Ml, M[3] || (M[3] = [
            s("div", { class: "md-icon-small" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "arrow_upward" }, [
                  s("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })
                ])
              ])
            ], -1)
          ]))) : S("", !0),
          L.params.enableSorting && l.value === 2 ? (_(), E("span", kl, M[4] || (M[4] = [
            s("div", { class: "md-icon-small" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "arrow_downward" }, [
                  s("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })
                ])
              ])
            ], -1)
          ]))) : S("", !0),
          A((_(), E("button", {
            type: "button",
            content: g(n)("grid.header.reorder.left"),
            "aria-label": g(n)("grid.header.reorder.left"),
            onClick: M[1] || (M[1] = (ee) => C()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !d.value
          }, M[5] || (M[5] = [
            s("div", { class: "inline-block" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "keyboard_arrow_left" }, [
                  s("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Fl)), [
            [U, { placement: "top" }]
          ]),
          A((_(), E("button", {
            type: "button",
            content: g(n)("grid.header.reorder.right"),
            "aria-label": g(n)("grid.header.reorder.right"),
            onClick: M[2] || (M[2] = (ee) => h()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !p.value
          }, M[6] || (M[6] = [
            s("div", { class: "inline-block" }, [
              s("svg", {
                height: "24",
                width: "24"
              }, [
                s("g", { id: "keyboard_arrow_right" }, [
                  s("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Al)), [
            [U, { placement: "top" }]
          ])
        ])) : S("", !0)
      ], 512);
    };
  }
}), $l = ["content", "aria-label"], Rl = /* @__PURE__ */ I({
  __name: "details-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = N(), a = ie("iApi"), l = w(), o = async () => {
      const d = n.params.data, p = d.rvUid, m = a.geo.layer.getLayer(p), y = m.oidField, h = n.params.layerCols[m.id].find(
        (c) => c.origAttr === y
      )?.mappedAttr || y, x = await m.getGraphic(d[h], {
        getAttribs: !0
      });
      a.event.emit(
        Q.DETAILS_TOGGLE,
        {
          data: x.attributes,
          uid: p,
          format: At.ESRI
        },
        !0
      ), n.params.isTeleport && a.scrollToInstance();
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (d) => {
        d.key === "Enter" && o();
      }), n.params.eGridCell.addEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (d) => {
        d.key === "Enter" && o();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), (d, p) => {
      const m = O("tippy");
      return A((_(), E("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: g(e)("grid.cells.details"),
        onClick: o,
        tabindex: "-1",
        ref_key: "el",
        ref: l,
        "aria-label": g(e)("grid.cells.details")
      }, p[0] || (p[0] = [
        s("svg", {
          class: "m-auto",
          xmlns: "http://www.w3.org/2000/svg",
          height: "16",
          viewBox: "0 0 24 24",
          width: "16"
        }, [
          s("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
          }),
          s("path", {
            style: { fill: "#979797" },
            d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
          })
        ], -1)
      ]), 8, $l)), [
        [m, { placement: "top" }]
      ]);
    };
  }
}), Dl = ["content", "aria-label"], Sl = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Il = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Gl = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, Pl = ["innerHTML"], Vl = /* @__PURE__ */ I({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = w("none"), e = L, a = ie("iApi"), l = Tt(), o = w(), { t: d } = N(), p = H(() => {
      const C = l.getLayerByUid(e.params.data.rvUid);
      return !!C && C.mapLayer;
    }), m = () => {
      if (n.value !== "none")
        return;
      n.value = "zooming";
      const C = l.getLayerByUid(e.params.data.rvUid);
      if (C === void 0 || !C.isLoaded) {
        y("error");
        return;
      }
      const h = e.params.layerCols[C.id].find((M) => M.origAttr === C.oidField), x = e.params.data[h ? h.mappedAttr ?? h.origAttr : C.oidField], c = () => {
        const M = { getGeom: !0 };
        C.getGraphic(x, M).then(($) => {
          $.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${x}`), y("error")) : (a.geo.map.zoomMapTo($.geometry), y("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance());
        }).catch(() => {
          y("error");
        });
      };
      C.layerType === $t.FEATURE && C.geomType !== Rt.POINT ? C.getGraphicExtent(x).then((M) => {
        a.geo.map.zoomMapTo(M), y("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance();
      }).catch(() => {
        c();
      }) : c();
    }, y = (C) => {
      C === "zoomed" || C === "error" ? setTimeout(() => {
        n.value = C, o.value?._tippy.show(), setTimeout(() => {
          o.value?._tippy.hide(), n.value = "none";
        }, 3e3);
      }, 300) : n.value = C;
    };
    return X(() => {
      p.value && (e.params.eGridCell.addEventListener("keydown", (C) => {
        C.key === "Enter" && n.value === "none" && m();
      }), e.params.eGridCell.addEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), J(() => {
      p.value && (e.params.eGridCell.removeEventListener("keydown", (C) => {
        C.key === "Enter" && m();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), (C, h) => {
      const x = O("tippy");
      return p.value ? A((_(), E("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: g(d)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`),
        onClick: m,
        tabindex: "-1",
        ref_key: "button",
        ref: o,
        "aria-label": g(d)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`)
      }, [
        n.value === "zooming" ? (_(), E("div", Sl)) : n.value === "zoomed" ? (_(), E("svg", Il, h[0] || (h[0] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : n.value === "error" ? (_(), E("svg", Gl, h[1] || (h[1] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (_(), E("span", {
          key: 3,
          innerHTML: g(a).ui.getZoomIcon()
        }, null, 8, Pl))
      ], 8, Dl)), [
        [x, { placement: "top" }]
      ]) : S("", !0);
    };
  }
}), Hl = ["content"], Nl = ["innerHTML"], Bl = /* @__PURE__ */ I({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, e = ie("iApi"), a = w(), l = H(() => {
      const d = Object.assign({}, n.params.data), p = e.geo.layer.getLayer(d.rvUid), m = n.params.config.displayOn;
      return !(!p || m === "geo" && !p.mapLayer || m === "data" && p.mapLayer);
    }), o = () => {
      const d = Object.assign({}, n.params.data), p = e.geo.layer.getLayer(d.rvUid), m = n.params.layerCols[p.id].find((C) => C.origAttr === p.oidField), y = m.mappedAttr ? d[m.mappedAttr] : d[m.origAttr];
      p.getGraphic(y, { getAttribs: !0 }).then((C) => {
        e.event.emit(n.params.config.actionEvent, {
          data: C.attributes,
          layer: p,
          uid: n.params.data.rvUid,
          oid: y
        });
      });
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (d) => {
        d.key === "Enter" && o();
      }), n.params.eGridCell.addEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (d) => {
        d.key === "Enter" && o();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (d, p) => {
      const m = O("tippy");
      return l.value ? A((_(), E("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-42 h-38",
        content: n.params.config.tooltip,
        onClick: o,
        tabindex: "-1",
        ref_key: "el",
        ref: a
      }, [
        s("span", {
          innerHTML: n.params.config.icon
        }, null, 8, Nl)
      ], 8, Hl)), [
        [m, { placement: "top" }]
      ]) : S("", !0);
    };
  }
}), zl = ["name", "content", "innerHTML"], Ol = ["content"], Pe = /* @__PURE__ */ I({
  __name: "cell-renderer",
  props: ["params"],
  setup(L) {
    const n = fe(), e = ie("iApi"), { t: a } = N(), l = w(), o = w(), d = w(!1), p = L, m = H(() => n.mobileView), y = () => {
      o.value?.textContent && (d.value = !0, l.value?._tippy.show(), navigator.clipboard.writeText(o.value?.textContent), setTimeout(() => {
        d.value = !1;
      }, 2e3));
    }, C = H(() => p.params.type === "number" ? p.params.value == null ? "" : e.ui.formatNumber(p.params.value) : p.params.type === "date" ? p.params.value == null ? "" : new Date(p.params.value).toISOString().slice(0, 10) : p.params.type === "string" ? !p.params.value || /<a[^>]*>[^<]+<\/a>/g.test(p.params.value) ? p.params.value : St(p.params.value, {
      target: "_blank",
      validate: {
        url: (x) => /^https?:\/\//.test(x)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), h = H(() => /<a[^>]*>[^<]+<\/a>/g.test(p.params.value) || /(http(s)?:\/\/.*)/g.test(p.params.value));
    return X(() => {
      p.params.eGridCell.addEventListener("dblclick", () => {
        y();
      }), p.params.eGridCell.addEventListener("keydown", (x) => {
        x.ctrlKey && x.code === "KeyC" && y();
      }), p.params.eGridCell.addEventListener("blur", () => {
        o.value._tippy.hide(), l.value?._tippy.hide();
      }), p.params.eGridCell.addEventListener("focus", () => {
        o.value?._tippy.show(), setTimeout(() => {
          document.activeElement === p.params.eGridCell && l.value?._tippy.show();
        }, 1e3), o.value._tippy.reference.clientWidth >= o.value._tippy.reference.scrollWidth && o.value._tippy.hide();
      });
    }), J(() => {
      p.params.eGridCell.removeEventListener("dblclick", () => {
        y();
      }), p.params.eGridCell.removeEventListener("keydown", (x) => {
        x.ctrlKey && x.code === "KeyC" && y();
      }), p.params.eGridCell.removeEventListener("blur", () => {
        o.value._tippy.hide(), l.value?._tippy.hide();
      }), p.params.eGridCell.removeEventListener("focus", () => {
        o.value._tippy.show(), l.value?._tippy.show();
      });
    }), (x, c) => {
      const M = O("truncate"), $ = O("tippy");
      return _(), E("div", null, [
        A(s("div", {
          name: C.value,
          content: C.value,
          tabindex: "-1",
          innerHTML: C.value,
          ref_key: "el",
          ref: o
        }, null, 8, zl), [
          [M, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              maxWidth: m.value ? 300 : 700,
              // remove this once scrollable tooltip option is implemented
              animation: "scale",
              interactive: h.value
            }
          }]
        ]),
        o.value?.textContent ? A((_(), E("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: l,
          content: g(a)(`grid.label.${d.value ? "copied" : "copy"}`)
        }, null, 8, Ol)), [
          [$, {
            triggerTarget: o.value,
            placement: "bottom",
            theme: "ramp4",
            hideOnClick: !1,
            delay: [1e3, 0]
          }]
        ]) : S("", !0)
      ]);
    };
  }
}), Ul = { class: "pl-8" }, Kl = { class: "flex flex-col justify-center items-center h-full" }, jl = { class: "flex flex-row" }, ql = { class: "font-bold text-2xl" }, Wl = { class: "mt-20 text-xl" }, Yl = { class: "my-20" }, Zl = { class: "text-sm" }, Ql = ["aria-label"], Xl = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, Jl = { class: "flex flex-1 flex-col max-w-full mr-8" }, ea = { class: "w-full font-bold" }, ta = { class: "w-full text-sm" }, la = { key: 0 }, aa = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, ra = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, sa = ["aria-label", "placeholder"], na = { class: "-ml-30 text-gray-500 search-clear-container" }, oa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, ia = ["aria-label"], ua = { class: "pb-2 flex ml-auto justify-end" }, da = ["content", "aria-label"], pa = ["aria-label"], ca = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ma = { class: "grow" }, va = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, fa = ["aria-label"], ga = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ha = { class: "grow" }, ya = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, ba = ["aria-label"], wa = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, xa = { class: "grow" }, Ca = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, La = ["aria-label"], _a = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ea = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Ma = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, ka = { class: "grow" }, Fa = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Aa = ["aria-label"], Ta = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, $a = { class: "grow" }, Ra = ["content"], Da = /* @__PURE__ */ I({
  __name: "table-component",
  props: {
    panel: {
      type: tt,
      required: !0
    },
    gridId: {
      type: String,
      required: !0
    }
  },
  setup(L) {
    Nt.registerModules([Bt]), zt({ theme: "legacy" });
    const n = [re.OID, re.DOUBLE, re.SINGLE, re.INTEGER], e = ie("iApi"), a = lt(), l = fe(), o = H(() => l.mobileView), d = w(!o.value), p = w(), m = kt("gridContainer"), { t: y, locale: C } = N(), h = () => Ft()?.proxy?.$forceUpdate(), x = L, c = w({
      id: "dummy",
      layerIds: [],
      state: new Gt(),
      fieldMap: {}
    }), M = w(!0), $ = w(null), U = w(), ee = w(), K = w(!1), te = w(!1), ue = w([]), Me = w(0), W = w([]), he = w([]), ke = w(""), le = w([]), de = w([]), ye = w("OBJECTID"), Fe = w(void 0), at = Qe.onCellKeyPress, j = w({ firstRow: 0, lastRow: 0, visibleRows: 0 }), be = w({}), rt = e.geo.layer.getLayer(x.gridId), pe = w({}), st = w(a.grids[x.gridId].layerIds), G = H(() => a.grids[x.gridId] ? a.grids[x.gridId].layerIds.map((r) => e.geo.layer.getLayer(r)).filter((r) => r !== void 0) : []), Ae = w(/* @__PURE__ */ new Set()), we = w([]), T = H(() => $.value), xe = () => {
      e.$vApp.$el.querySelectorAll(
        ".ag-input-field-input.ag-checkbox-input"
      ).forEach((t, f) => {
        const u = T.value.getAllDisplayedColumns()?.[f].getColDef();
        t.setAttribute("aria-label", u?.headerName ?? y("grid.label.specialColumn"));
      });
    }, nt = (r) => {
      $.value = r.api, ke.value = c.value.state.title || rt?.name || x.gridId, $e(), de.value.length > 0 && T.value.autoSizeAllColumns(), xe(), T.value.addEventListener("rowDataUpdated", xe), W.value.push(
        e.event.on(Q.FILTER_CHANGE, ({ uid: t, filterKey: f }) => {
          f !== Le.GRID && t && G.value.map((i) => i.uid).includes(t) && Y();
        })
      ), W.value.push(
        e.event.on(
          Q.LAYER_VISIBILITYCHANGE,
          ({ layer: t }) => {
            t.uid && G.value.map((f) => f.uid).includes(t.uid) && Y();
          }
        )
      ), W.value.push(
        e.event.on(Q.LAYER_RELOAD_END, (t) => {
          t.loadPromise().then(() => {
            G.value.map((f) => f.uid).includes(t.uid) && Y();
          });
        })
      ), W.value.push(
        e.event.on(Q.LANG_CHANGE, () => {
          T.value.redrawRows({
            force: !0
          });
        })
      ), W.value.push(
        e.event.on(
          Q.MAP_EXTENTCHANGE,
          Ze(100, () => {
            c.value.state.filterByExtent && Y();
          })
        )
      ), W.value.push(
        e.event.on(Q.LAYER_REMOVE, (t) => {
          st.value.includes(t.id) && G.value.length !== 0 && Ue();
        })
      ), Y();
    }, ot = () => {
      T.value.autoSizeAllColumns(), Fe.value = new Qe(p.value, $.value), xe();
    }, Te = () => {
      T.value.setGridOption("quickFilterText", c.value.state.searchFilter);
    }, He = () => {
      c.value.state.searchFilter = "", Te();
    }, it = () => {
      He(), Be(), Y();
    }, ut = () => {
      c.value.state.filterByExtent = !c.value.state.filterByExtent, Y();
    }, dt = () => {
      const r = T.value.getColumnDefs();
      c.value.state.colFilter = !c.value.state.colFilter, r?.forEach((t) => {
        t.floatingFilter = c.value.state.colFilter;
      }), T.value.setGridOption("columnDefs", r);
    }, $e = () => {
      $.value && !K.value && (c.value.state.searchFilter !== "" && Te(), c.value.state.applyToMap && Re(), _e(() => {
        const r = T.value.getAllDisplayedColumns();
        r && r.length > 0 && T.value.refreshCells({
          columns: [r[0]]
          // Limits the refresh action to the row number column.
        }), Ne();
      }));
    }, Ne = () => {
      j.value.firstRow = T.value.getFirstDisplayedRowIndex() + 1, j.value.lastRow = T.value.getLastDisplayedRowIndex() + 1, j.value.visibleRows = T.value.getDisplayedRowCount();
    }, Be = () => {
      T.value.setFilterModel({}), c.value.state.clearFilters(), T.value.refreshHeader();
    }, pt = () => {
      d.value = !d.value;
      const r = d.value ? "left" : null, t = T.value.getAllDisplayedColumns();
      t && t.length >= 3 && T.value.setColumnsPinned(t.slice(1, 3), r);
    }, ct = () => {
      const r = T.value.getAllDisplayedColumns().filter((i) => !i.getColDef().headerComponentParams?.preventExport), t = document.createElement("p"), f = (i) => (t.innerHTML = i, t.textContent || t.innerText);
      T.value.exportDataAsCsv({
        columnKeys: r,
        suppressQuotes: !0,
        processCellCallback: (i) => {
          const u = i.column.getColDef().cellRendererParams;
          return !i.value || u && u.type === "number" ? i.value : u && u.type === "date" ? `"${new Date(i.value).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}"` : `"${f(i.value).replace(/"/g, '""')}"`;
        }
      });
    }, mt = (r, t) => {
      r.floatingFilterComponent = "dateFloatingFilter", r.filterParams.comparator = function(f, i) {
        const u = new Date(i);
        return u.getUTCFullYear() > f.getUTCFullYear() ? 1 : u.getUTCFullYear() < f.getUTCFullYear() ? -1 : u.getUTCMonth() > f.getUTCMonth() ? 1 : u.getUTCMonth() < f.getUTCMonth() ? -1 : u.getUTCDate() - f.getUTCDate();
      }, r.filterParams.inRangeInclusive = !0, r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: t
      };
    }, vt = (r, t, f) => {
      r.floatingFilterComponent = "selectorFloatingFilter", r.filterParams.inRangeInclusive = !0, r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: f,
        rowData: t
      };
    }, ft = (r, t) => {
      r.floatingFilterComponent = "numberFloatingFilter", r.filterParams.inRangeInclusive = !0, r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: t
      };
    }, gt = (r, t) => {
      r.floatingFilterComponent = "textFloatingFilter", r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: t
      }, r.filterParams.textMatcher = function(i) {
        if (!i.filterText || typeof i.filterText != "string") return !0;
        const u = i.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${u}.*`).test(i.value);
      };
      const f = function(i) {
        if (!i || typeof i != "string") return i;
        let u = i.toLowerCase();
        return u = u.replace(new RegExp("[àáâãäå]", "g"), "a"), u = u.replace(new RegExp("æ", "g"), "ae"), u = u.replace(new RegExp("ç", "g"), "c"), u = u.replace(new RegExp("[èéêë]", "g"), "e"), u = u.replace(new RegExp("[ìíîï]", "g"), "i"), u = u.replace(new RegExp("ñ", "g"), "n"), u = u.replace(new RegExp("[òóôõö]", "g"), "o"), u = u.replace(new RegExp("œ", "g"), "oe"), u = u.replace(new RegExp("[ùúûü]", "g"), "u"), u = u.replace(new RegExp("[ýÿ]", "g"), "y"), u;
      };
      r.filterParams.textFormatter = function(i) {
        return f(i);
      };
    }, ht = (r, t, f) => {
      if (r.field === "rvRowIndex") {
        const i = {
          field: "rvRowIndex",
          headerName: "",
          headerComponentParams: { preventExport: !0 },
          sortable: !1,
          lockPosition: !0,
          valueGetter: "node.rowIndex + 1",
          suppressMovable: !0,
          suppressHeaderMenuButton: !0,
          suppressHeaderContextMenu: !0,
          floatingFilter: c.value.state.colFilter,
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
            stateManager: f,
            clearFilters: Be
          },
          filter: !0
        };
        t.push(i);
      }
      if (r.field === "rvInteractive") {
        const i = c.value.state.controls, u = {
          field: "rvDetailsButton",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          pinned: o.value ? null : "left",
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellStyle: () => ({
            padding: "0px"
          }),
          cellRenderer: Rl,
          cellRendererParams: {
            $iApi: e,
            t: y,
            layerCols: pe.value,
            isTeleport: x.panel.teleport !== void 0
          }
        };
        if (i.includes("details") && t.push(u), Et.value) {
          const v = {
            field: "rvZoomButton",
            headerName: "",
            headerComponentParams: { isStatic: !0, preventExport: !0 },
            sortable: !1,
            pinned: o.value ? null : "left",
            filter: !1,
            lockPosition: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Vl,
            cellRendererParams: {
              $iApi: e,
              layerCols: pe.value,
              isTeleport: x.panel.teleport !== void 0
            }
          };
          i.includes("zoom") && t.push(v);
        }
        i.forEach((v) => {
          if (v === "zoom" || v === "details") return;
          const k = {
            field: `rvCustomButton_${typeof v == "string" ? v : v.actionEvent}`,
            headerName: "",
            headerComponentParams: { isStatic: !0, preventExport: !0 },
            sortable: !1,
            pinned: o.value ? null : "left",
            filter: !1,
            lockPosition: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Bl,
            cellRendererParams: {
              $iApi: e,
              t: y,
              layerCols: pe.value,
              config: v
            }
          };
          t.push(k);
        });
      }
      if (r.field === "rvSymbol") {
        const i = {
          field: "rvSymbol",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellDataType: !1,
          cellRenderer: (u) => {
            const v = e.geo.layer.getLayer(u.data.rvUid);
            if (v === void 0) return;
            const k = document.createElement("span"), F = u.data[ye.value];
            return v.getIcon(F).then((b) => {
              k.innerHTML = b;
            }), k;
          },
          cellStyle: () => ({
            paddingTop: "3px",
            textAlign: "center",
            paddingLeft: "5px",
            paddingRight: "0px"
          }),
          cellRendererParams: {
            $iApi: e,
            oidField: ye.value
          }
        };
        t.push(i);
      }
    }, yt = () => !Object.values(be.value).every((r) => r === void 0), bt = (r) => {
      const t = be.value[r.data.rvUid];
      return t === void 0 || t.includes(r.data[ye.value]);
    }, Y = async () => {
      const r = new Dt(), t = we.value.slice().map((i) => i.getPromise());
      we.value.push(r), await Promise.all(t), await Promise.all(
        G.value.map(async (i) => {
          i && i.visibility ? await i.getFilterOIDs(
            [Le.GRID],
            c.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((u) => {
            be.value[i.uid] = u;
          }) : be.value[i.uid] = [];
        })
      ), T.value.onFilterChanged(), r.resolveMe();
      const f = we.value.indexOf(r);
      f === -1 ? console.error("Grid could not find filter blocker in filter queue") : we.value.splice(f, 1);
    }, wt = () => {
      c.value.state.applyToMap = !c.value.state.applyToMap, Re();
    }, Re = () => {
      G.value.filter((r) => r.mapLayer).forEach((r) => {
        if (!c.value.state.applyToMap)
          r.setSqlFilter(Le.GRID, "");
        else {
          const t = xt(r.id);
          r.setSqlFilter(Le.GRID, t);
        }
      });
    }, xt = (r) => {
      const t = T.value.getFilterModel(), f = [];
      if (Object.keys(t || {}).forEach((i) => {
        const u = De(r, i);
        u ? f.push(Ct(u.origAttr, t?.[i])) : f.push("1=2");
      }), c.value.state.searchFilter && c.value.state.searchFilter.length > 0) {
        const i = Lt(r) || "1=2";
        i.length > 0 && f.push(`(${i})`);
      }
      return f.join(" AND ");
    }, Ct = (r, t) => {
      switch (t.filterType) {
        case "number": {
          switch (t.type) {
            case "greaterThanOrEqual":
              return `${r} >= ${t.filter}`;
            case "lessThanOrEqual":
              return `${r} <= ${t.filter}`;
            case "inRange":
              return `${r} >= ${t.filter} AND ${r} <= ${t.filterTo}`;
          }
          break;
        }
        case "text": {
          const f = t.filter.replace(/'/g, /''/);
          if (f !== "") {
            const i = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let u = f, v = "", k = i.exec(f), F = 0;
            for (; k; )
              v = v + f.substr(F, k.index - F) + k[0].slice(-1), F = k.index + 2, u = f.substr(k.index + 2), k = i.exec(f);
            v = v + u, v = v.replace(/%/g, "ௌ%"), v = v.replace(/_/g, "ௌ_"), v = `*${v}`;
            const b = `UPPER(${r}) LIKE '${v.replace(/\*/g, "%").toUpperCase()}%'`;
            return b.includes("ௌ%") || b.includes("ௌ_") ? `${b} ESCAPE 'ௌ'` : b;
          }
          break;
        }
        case "date": {
          const f = new Date(t.dateFrom ?? 0), i = new Date(t.dateTo ?? 864e13), u = f ? `${f.getMonth() + 1}/${f.getDate()}/${f.getFullYear()}` : void 0, v = i ? `${i.getMonth() + 1}/${i.getDate()}/${i.getFullYear()}` : void 0;
          switch (t.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${r} >= DATE '${u}'`;
            case "lessThan":
              return `${r} <= DATE '${u}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${r} >= DATE '${u}' AND ${r} <= DATE '${v}'`;
          }
        }
      }
    }, Lt = (r) => {
      const f = c.value.state.searchFilter.replace(/'/g, "''").split(" "), i = [];
      T.value.forEachNodeAfterFilterAndSort((k) => {
        i.push(k);
      });
      const u = T.value.getAllDisplayedColumns().filter(
        (k) => (k.colDef.filter === "agTextColumnFilter" || k.colDef.filter === "agNumberColumnFilter") && De(r, k.getColId())
      ), v = [];
      return i.forEach((k) => {
        let F = !0, b = "";
        for (const R of f) {
          const q = new RegExp(`.*${R.split(" ").join(".*").toUpperCase()}`), qe = `%${R.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let ce = !1;
          for (const Se of u ?? []) {
            const me = Se.getColId(), Ce = De(r, Se.getColId())?.origAttr, We = Se.getColDef();
            if (k.data[me] === void 0)
              ce = !1;
            else if (We.filter === "agTextColumnFilter") {
              const Z = k.data[me] === null ? null : k.data[me].toString();
              if (Z !== null && q.test(Z.toUpperCase())) {
                b ? b = b.concat(" AND ", `(UPPER(${Ce}) LIKE '${qe}%')`) : b = b.concat("(", `(UPPER(${Ce}) LIKE '${qe}%')`), v.includes(b + ")") ? ce = !1 : ce = !0;
                break;
              }
            } else if (We.filter === "agNumberColumnFilter") {
              const Z = k.data[me] === null ? null : k.data[me];
              if (Z !== null && q.test(Z)) {
                b ? b = b.concat(" AND ", `(${Ce} = ${Z})`) : b = b.concat("(", `(${Ce} = ${Z})`), ce = !v.includes(b + ")");
                break;
              }
            }
          }
          if (!ce) {
            F = !1;
            break;
          }
        }
        F && v.push(b + ")");
      }), v.join(" OR ");
    }, _t = (r) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(r.key) && r.stopPropagation();
    }, ze = () => {
      Oe(), x.panel.isOpen && x.panel.close();
    }, Oe = () => {
      (K.value || te.value) && G.value.forEach((r) => {
        r.abortAttributeLoad(), r.clearFeatureCache();
      });
    }, B = H(() => {
      const r = G.value.map((i) => i.visibility && i.canModifyLayer && i.mapLayer), t = G.value.some(
        (i) => i.visibility && i.mapLayer && !i.canModifyLayer
      ), f = r.some(Boolean);
      return t && f ? "partial" : f ? "enabled" : "disabled";
    }), Et = H(
      () => G.value.some((r) => r.isLoaded && r.supportsFeatures && r.mapLayer)
    ), De = (r, t) => pe.value[r].find((f) => (f.mappedAttr ?? f.origAttr) === t), Ue = () => {
      const r = G.value.filter(
        (t) => t && t.supportsFeatures && t.isLoaded
      );
      r.length === 0 && ze(), Me.value = r.reduce((t, { featureCount: f }) => t + f, 0), ue.value = new Array(G.value.length).fill(0), r.forEach((t, f) => ue.value[f] += t.downloadedAttributes()), r.forEach((t, f) => {
        he.value.push(
          Ie(
            () => t.downloadedAttributes(),
            (i) => {
              ue.value[f] = i;
            }
          )
        );
      }), Promise.all(r.map((t) => t.loadPromise())).then(() => {
        const t = r.map((f) => Ge(f).getTabularAttributes().then((i) => {
          const u = c?.value?.state?.state;
          if (u?.columns && u.columnMetadata?.exclusiveColumns) {
            const v = u.columns.map((k) => k.field);
            i.columns = i.columns.filter(
              (k) => v.includes(k.data)
            );
          }
          return i;
        }));
        Promise.all(t).then((f) => {
          if (r.every((u) => u.attribLoadAborted())) {
            K.value = !1;
            return;
          }
          const i = {
            columns: [],
            rows: [],
            fields: [],
            oidField: ""
          };
          f.forEach((u, v) => {
            const k = [], F = r[v].id;
            u.columns.forEach((b) => {
              c.value.fieldMap && c.value.fieldMap[b.data] ? (k.push({
                origAttr: b.data,
                mappedAttr: c.value.fieldMap[b.data]
              }), b.data = c.value.fieldMap[b.data], b.title = b.data) : k.push({
                origAttr: b.data,
                mappedAttr: void 0
              }), i.columns.map((R) => R.data).includes(b.data) || i.columns.push(b);
            }), i.rows = i.rows.concat(
              u.rows.map((b) => {
                if (c.value.fieldMap)
                  for (const [R, q] of Object.entries(c.value.fieldMap))
                    b[R] !== void 0 && b[q] === void 0 && (b[q] = b[R], delete b[R]);
                return b;
              })
            );
            for (let b = 0; b < i.rows.length; b++)
              for (const [R] of Object.entries(i.rows[b]))
                e.ui.isPlainText(i.rows[b][R]) && (i.rows[b][R] = e.ui.escapeHtml(i.rows[b][R]));
            i.fields = i.fields.concat(
              u.fields.map((b) => ((!e.ui.exposeOids && b.type === "oid" || !e.ui.exposeMeasurements && (b.name.toLowerCase() === "shape_length" || b.name.toLowerCase() === "shape_area")) && Ae.value.add(b.name), {
                name: c.value.fieldMap && c.value.fieldMap[b.name] ? c.value.fieldMap[b.name] : b.name,
                type: b.type,
                alias: b.alias ?? void 0,
                length: b.length ?? void 0
              }))
            ), i.oidField = c.value.fieldMap && c.value.fieldMap[u.oidField] ? c.value.fieldMap[u.oidField] : u.oidField, pe.value[F] = k;
          }), ye.value = i.oidField, ["rvRowIndex", "rvInteractive", "rvSymbol", ...i.columns].forEach((u) => {
            c.value.state?.columns[u.data] === void 0 && (c.value.state.columns[u.data] = new Pt({
              field: u.data,
              title: u.title
            })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && Ae.value.has(u.data) && (c.value.state.columns[u.data].visible = !1);
            const v = c.value.state?.columns[u.data], k = v.filter.type === "selector", F = {
              headerName: v.title ?? u.title,
              headerComponent: "agColumnHeader",
              headerComponentParams: {
                sort: v.sort
              },
              field: u.data ?? u,
              sortable: !0,
              lockPosition: !0,
              filterParams: {},
              floatingFilter: c.value.state.colFilter && v.searchable,
              hide: !v?.visible,
              minWidth: v.width,
              maxWidth: v.width ?? 400,
              cellRenderer: (R) => R.value,
              suppressHeaderKeyboardEvent: (R) => {
                const q = R.event;
                return R.headerRowIndex === 0 && (q.key === "Enter" || !q.target.classList.contains("ag-header-cell") && q.key === "Tab");
              }
            }, b = i.fields.find((R) => R.name === F.field);
            u === "rvRowIndex" || u === "rvSymbol" || u === "rvInteractive" ? ht(F, le.value, c.value.state) : (n.indexOf(b.type) > -1 ? (ft(F, c.value.state), F.filter = "agNumberColumnFilter", F.autoHeight = !0, F.cellRenderer = v.template === "" ? Pe : e.component(v.template), F.cellRendererParams = {
              type: "number"
            }) : b.type === re.DATE ? (mt(F, c.value.state), F.filter = "agDateColumnFilter", F.autoHeight = !0, F.minWidth = 400, F.cellRenderer = v.template === "" ? Pe : e.component(v.template), F.cellRendererParams = {
              type: "date"
            }) : b.type === re.STRING && (k ? vt(F, i.rows, c.value.state) : gt(F, c.value.state), F.filter = "agTextColumnFilter", F.autoHeight = !0, F.cellRenderer = v.template === "" ? Pe : e.component(v.template), F.cellRendererParams = {
              type: "string"
            }), le.value.push(F));
          }), de.value = Ge(i.rows), le.value = Ge(le.value), $e(), K.value = !1;
        }).catch((f) => {
          console.error(f), te.value = !0, K.value = !1;
        });
      });
    }, Ke = (r) => {
      r.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
    }, je = () => {
      m.value._tippy.hide();
    };
    return X(() => {
      m.value?.addEventListener("keyup", Ke), m.value?.addEventListener("blur", je);
    }), ve(() => {
      c.value = a.grids[x.gridId], K.value = !0, h(), j.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, ee.value = {
        agColumnHeader: Tl,
        numberFloatingFilter: ll,
        textFloatingFilter: nl,
        selectorFloatingFilter: cl,
        dateFloatingFilter: yl,
        clearFloatingFilter: wl
      }, U.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: !0,
        rowHeight: 40,
        suppressRowTransform: !0,
        onFilterChanged: () => {
          Re(), $e();
        },
        onBodyScroll: () => {
          [...e.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((r) => {
            r._tippy && p.value?.contains(r._tippy.reference) && r._tippy.hide();
          });
        },
        onBodyScrollEnd: () => {
          Ne();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: !0,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: jt,
        // tab vertically instead of horizontally
        tabToNextHeader: Kt,
        onModelUpdated: Ze(300, () => {
          T.value.autoSizeAllColumns(), xe();
        })
      }, Ue(), B.value === "partial" && e.notify.show(Ye.WARNING, e.$i18n.t("layer.filterwarning")), he.value.push(
        Ie(C, () => {
          M.value = !1, setTimeout(() => {
            M.value = !0;
          }, 10);
        })
      ), he.value.push(
        Ie(B, (r) => {
          r === "partial" && e.notify.show(Ye.WARNING, e.$i18n.t("layer.filterwarning"));
        })
      );
    }), J(() => {
      Oe(), W.value.forEach((r) => e.event.off(r)), he.value.forEach((r) => r()), Fe.value?.removeAccessibilityListeners(), Fe.value?.removeScrollListeners(), m.value?.removeEventListener("keyup", Ke), m.value?.removeEventListener("blur", je);
    }), (r, t) => {
      const f = Ve("dropdown-menu"), i = O("truncate"), u = O("tippy");
      return _(), E("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: p
      }, [
        A(s("div", null, [
          s("p", Ul, D(g(y)("grid.splash.error")), 1)
        ], 512), [
          [ae, te.value]
        ]),
        A(s("div", Kl, [
          s("div", jl, [
            s("span", ql, D(ue.value.reduce((v, k) => v + k, 0)), 1),
            t[12] || (t[12] = s("svg", {
              class: "stroke-black stroke-1",
              height: "50",
              width: "25"
            }, [
              s("line", {
                x1: "0",
                y1: "50",
                x2: "25",
                y2: "0"
              })
            ], -1)),
            s("span", Wl, D(Me.value), 1)
          ]),
          s("div", Yl, [
            s("span", Zl, D(ue.value.reduce((v, k) => v + k, 0) < Me.value ? g(y)("grid.splash.loading") : g(y)("grid.splash.building")), 1)
          ]),
          s("div", null, [
            s("button", {
              type: "button",
              onClick: ze,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": g(y)("grid.splash.cancel")
            }, D(g(y)("grid.splash.cancel")), 9, Ql)
          ])
        ], 512), [
          [ae, K.value && !te.value]
        ]),
        A(s("div", Xl, [
          s("div", Jl, [
            A((_(), E("div", ea, [
              ne(D(ke.value), 1)
            ])), [
              [ae, ke.value !== ""],
              [i]
            ]),
            A((_(), E("div", ta, [
              ne(D(g(y)("grid.filters.label.info", {
                range: j.value.visibleRows !== 0 ? `${j.value.firstRow} - ${j.value.lastRow}` : "0",
                total: j.value.visibleRows
              })) + " ", 1),
              j.value.visibleRows !== de.value.length ? (_(), E("span", la, D(g(y)("grid.filters.label.filtered", {
                max: de.value.length
              })), 1)) : S("", !0)
            ])), [
              [i]
            ])
          ]),
          s("div", aa, [
            A(s("div", ra, [
              A(s("input", {
                onInput: t[0] || (t[0] = (v) => Te()),
                onKeypress: t[1] || (t[1] = P(V(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: t[2] || (t[2] = P((v) => {
                  g(l).mobileView && v?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": t[3] || (t[3] = (v) => c.value.state.searchFilter = v),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": g(y)("grid.filters.label.global"),
                placeholder: g(y)("grid.filters.label.global")
              }, null, 40, sa), [
                [oe, c.value.state.searchFilter]
              ]),
              s("div", na, [
                c.value.state.searchFilter.length < 3 ? (_(), E("svg", oa, t[13] || (t[13] = [
                  s("g", { id: "search_cache224" }, [
                    s("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (_(), E("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
                  onClick: t[4] || (t[4] = (v) => He()),
                  "aria-label": g(y)("grid.search.clear")
                }, t[14] || (t[14] = [
                  s("svg", {
                    "data-v-486a0302": "",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 352 512",
                    class: "fill-current w-18 h-18 mt-2"
                  }, [
                    s("path", {
                      "data-v-486a0302": "",
                      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    })
                  ], -1)
                ]), 8, ia))
              ])
            ], 512), [
              [ae, c.value.state.search]
            ]),
            s("div", ua, [
              Ee(Zt, {
                gridApi: $.value,
                columnDefs: le.value,
                systemCols: Ae.value,
                onRefreshHeaders: t[5] || (t[5] = (v) => $.value.refreshHeader())
              }, null, 8, ["gridApi", "columnDefs", "systemCols"]),
              A((_(), E("button", {
                type: "button",
                class: "grid-clearall p-4 h-40 text-gray-500 hover:text-black",
                onClick: t[6] || (t[6] = (v) => it()),
                content: g(y)("grid.clearAll"),
                "aria-label": g(y)("grid.clearAll")
              }, t[15] || (t[15] = [
                s("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  width: "24px",
                  viewBox: "0 0 24 24",
                  class: "inline fill-current"
                }, [
                  s("g", { id: "filter_cache958" }, [
                    s("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
                  ])
                ], -1)
              ]), 8, da)), [
                [u, {
                  placement: "bottom"
                }]
              ]),
              Ee(f, {
                class: "h-40 w-40",
                position: "bottom-end",
                tooltip: g(y)("panels.controls.optionsMenu"),
                centered: !1
              }, {
                header: se(() => t[16] || (t[16] = [
                  s("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    class: "fill-current m-8 w-24 h-24"
                  }, [
                    s("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
                  ], -1)
                ])),
                default: se(() => [
                  s("a", {
                    href: "javascript:;",
                    class: z(["leading-snug w-256", {
                      hover: B.value !== "disabled" ? "none" : "text-black",
                      disabled: B.value === "disabled"
                    }]),
                    onClick: t[7] || (t[7] = (v) => B.value !== "disabled" && wt()),
                    role: "button",
                    "aria-label": g(y)("grid.label.filters.apply")
                  }, [
                    s("div", ca, [
                      t[18] || (t[18] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      s("span", ma, D(g(y)("grid.label.filters.apply")), 1),
                      B.value !== "disabled" && c.value.state.applyToMap ? (_(), E("svg", va, t[17] || (t[17] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 10, pa),
                  s("a", {
                    href: "javascript:;",
                    class: "leading-snug w-256 hover:text-black",
                    onClick: t[8] || (t[8] = (v) => dt()),
                    role: "button",
                    "aria-label": g(y)("grid.label.filters.show")
                  }, [
                    s("div", ga, [
                      t[20] || (t[20] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      s("span", ha, D(g(y)("grid.label.filters.show")), 1),
                      c.value.state.colFilter ? (_(), E("svg", ya, t[19] || (t[19] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 8, fa),
                  s("a", {
                    href: "javascript:;",
                    class: z(["leading-snug w-256", {
                      hover: B.value !== "disabled" ? "none" : "text-black",
                      disabled: B.value === "disabled"
                    }]),
                    onClick: t[9] || (t[9] = (v) => B.value !== "disabled" && ut()),
                    role: "button",
                    "aria-label": g(y)("grid.filters.label.extent")
                  }, [
                    s("div", wa, [
                      t[22] || (t[22] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      s("span", xa, D(g(y)("grid.filters.label.extent")), 1),
                      B.value !== "disabled" && c.value.state.filterByExtent ? (_(), E("svg", Ca, t[21] || (t[21] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 10, ba),
                  s("a", {
                    href: "javascript:;",
                    class: z(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[10] || (t[10] = (v) => pt()),
                    role: "button",
                    "aria-label": g(y)("grid.label.pinColumns")
                  }, [
                    s("div", _a, [
                      d.value ? (_(), E("svg", Ea, t[23] || (t[23] = [
                        s("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                      ]))) : d.value ? S("", !0) : (_(), E("svg", Ma, t[24] || (t[24] = [
                        s("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                      ]))),
                      s("span", ka, D(g(y)("grid.label.pinColumns")), 1),
                      d.value ? (_(), E("svg", Fa, t[25] || (t[25] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 8, La),
                  s("a", {
                    href: "javascript:;",
                    class: z(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[11] || (t[11] = (v) => ct()),
                    role: "button",
                    "aria-label": g(y)("grid.label.export")
                  }, [
                    s("div", Ta, [
                      t[26] || (t[26] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("g", null, [
                          s("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })
                        ])
                      ], -1)),
                      s("span", $a, D(g(y)("grid.label.export")), 1)
                    ])
                  ], 8, Aa)
                ]),
                _: 1
              }, 8, ["tooltip"])
            ])
          ])
        ], 512), [
          [ae, !K.value && !te.value]
        ]),
        M.value ? A((_(), E("div", {
          key: 0,
          content: g(y)("grid.cells.controls"),
          class: "w-full h-full flex flex-col",
          ref_key: "gridContainer",
          ref: m,
          tabIndex: "-1"
        }, [
          Ee(g(It), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: !0,
            accentedSort: !0,
            localeText: g(C) === "en" ? g(Vt) : g(Ht),
            gridOptions: U.value,
            columnDefs: le.value,
            rowData: de.value,
            components: ee.value,
            onGridReady: nt,
            onKeydown: _t,
            onFirstDataRendered: ot,
            onCellKeyPress: g(at),
            doesExternalFilterPass: bt,
            isExternalFilterPresent: yt
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, Ra)), [
          [u, {
            placement: "top",
            trigger: "manual",
            touch: !1
          }],
          [ae, !K.value && !te.value]
        ]) : S("", !0)
      ], 512);
    };
  }
}), Sa = /* @__PURE__ */ ge(Da, [["__scopeId", "data-v-dd48c113"]]), Ia = /* @__PURE__ */ I({
  __name: "screen",
  props: {
    panel: {
      type: tt,
      required: !0
    }
  },
  setup(L) {
    const n = lt(), { t: e } = N(), a = H(() => n.currentId);
    return (l, o) => {
      const d = Ve("panel-screen");
      return _(), Xe(d, { panel: L.panel }, {
        header: se(() => [
          ne(D(g(e)("grid.title")), 1)
        ]),
        content: se(() => [
          Ee(Sa, {
            class: "rv-grid",
            gridId: a.value,
            panel: L.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Er = /* @__PURE__ */ ge(Ia, [["__scopeId", "data-v-904e67ef"]]);
export {
  Er as default
};
