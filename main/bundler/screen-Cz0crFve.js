import { defineComponent as I, inject as ie, resolveComponent as He, resolveDirective as B, createBlock as et, openBlock as _, unref as f, withCtx as se, createElementBlock as E, Fragment as tt, renderList as lt, createElementVNode as s, withDirectives as A, createTextVNode as ne, toDisplayString as D, normalizeClass as V, ref as w, onBeforeMount as ve, withKeys as H, withModifiers as N, vModelText as oe, vModelSelect as kt, onMounted as X, nextTick as _e, onBeforeUnmount as J, createCommentVNode as S, computed as P, useTemplateRef as Ft, getCurrentInstance as At, watch as Ge, vShow as ae, createVNode as Ee, markRaw as Pe } from "vue";
import "tiny-emitter";
import { a as fe, _ as ge, G as Q, W as Tt, X as $t, L as Rt, Y as Dt, Z as at, $ as re, i as rt, a0 as Qe, a1 as Le, a2 as St } from "./main-Ca1uw4W0.js";
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
import { debounce as Xe } from "throttle-debounce";
import "pinia";
import { useI18n as z } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import It from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as Gt } from "ag-grid-vue3";
import { T as Pt, C as Vt } from "./table-state-manager-DpPT-TES.js";
import { AG_GRID_LOCALE_EN as Ht, AG_GRID_LOCALE_FR as Nt } from "@ag-grid-community/locale";
import { ModuleRegistry as Bt, AllCommunityModule as zt, provideGlobalGridOptions as Ot } from "ag-grid-community";
const Ut = ".ag-root", Kt = ".ag-header-viewport .ag-header-row";
class Je {
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
    this.element = n, this.agGridApi = e, this.agGrid = this.element.querySelector(Ut), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(Kt)
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
    const o = (i) => {
      const m = i.clientX - l;
      e.scrollLeft = a - m;
    }, c = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", o), this.agGrid.removeEventListener("mouseup", c), this.agGrid.removeEventListener("mouseleave", c);
    };
    this.agGrid.addEventListener("mousemove", o), this.agGrid.addEventListener("mouseup", c), this.agGrid.addEventListener("mouseleave", c);
  }
}
function jt(L) {
  const n = L.previousHeaderPosition.column, e = L.previousHeaderPosition.headerRowIndex;
  let a = L.backwards ? e - 1 : e + 1;
  return a === -1 ? !1 : (a === L.headerRowCount && (a = -1), { headerRowIndex: a, column: n });
}
function qt(L) {
  return L.backwards ? { column: L.previousCellPosition.column, rowIndex: -1 } : !1;
}
const Wt = ["onClick"], Yt = { class: "md-icon-small flex w-full" }, Zt = { class: "flex-1 truncate whitespace-nowrap overflow-hidden pr-4" }, Qt = /* @__PURE__ */ I({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    gridApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(L) {
    const n = ie("iApi"), { t: e } = z();
    return (a, l) => {
      const o = He("dropdown-menu"), c = B("truncate");
      return _(), et(o, {
        class: "relative",
        position: "bottom-end",
        tooltip: f(e)("grid.label.columns"),
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
          (_(!0), E(tt, null, lt(L.columnDefs.filter(
            (i) => i.headerName && i.headerName.length > 0 && !(!f(n).ui.exposeOids && L.systemCols?.has(i.headerName)) && !(!f(n).ui.exposeMeasurements && (L.systemCols?.has(i.headerName) || L.systemCols?.has(i.field)))
          ), (i) => (_(), E("a", {
            "truncate-trigger": "",
            tabindex: "0",
            key: i.headerName,
            onClick: (m) => {
              L.gridApi?.setColumnsVisible([i.field], i.hide), i.hide = !i.hide, a.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center max-w-[268px]"
          }, [
            s("div", Yt, [
              A((_(), E("span", Zt, [
                ne(D(i.headerName), 1)
              ])), [
                [c, {
                  externalTrigger: !0,
                  options: {
                    placement: "left"
                  }
                }]
              ]),
              (_(), E("svg", {
                height: "18",
                width: "18",
                viewBox: "0 0 24 24",
                class: V({ invisible: i.hide })
              }, l[1] || (l[1] = [
                s("g", { id: "done" }, [
                  s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2))
            ])
          ], 8, Wt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), Xt = { class: "h-full flex items-center justify-center" }, Jt = ["placeholder", "aria-label", "disabled"], el = ["placeholder", "aria-label", "disabled"], tl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, ll = /* @__PURE__ */ I({
  ...tl,
  __name: "custom-number-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = z(), a = L, l = w(""), o = w(""), c = w(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), i = () => {
      l.value = l.value !== "" && !isNaN(l.value) ? l.value : null, h(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
    }, m = () => {
      o.value = o.value !== "" && !isNaN(o.value) ? o.value : null, h(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, o.value, "max");
    }, h = () => {
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
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min"), o.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max"), i(), m();
    }), (C, y) => (_(), E("div", Xt, [
      A(s("input", {
        class: V(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[0] || (y[0] = (x) => l.value = x),
        onInput: y[1] || (y[1] = (x) => i()),
        onMousedown: y[2] || (y[2] = N(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = H((x) => {
          f(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.min"),
        "aria-label": f(e)("grid.filters.number.min"),
        disabled: c.value
      }, null, 42, Jt), [
        [oe, l.value]
      ]),
      y[10] || (y[10] = s("span", { class: "w-12" }, null, -1)),
      A(s("input", {
        class: V(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[5] || (y[5] = (x) => o.value = x),
        onInput: y[6] || (y[6] = (x) => m()),
        onMousedown: y[7] || (y[7] = N(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = H((x) => {
          f(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.max"),
        "aria-label": f(e)("grid.filters.number.max"),
        disabled: c.value
      }, null, 42, el), [
        [oe, o.value]
      ])
    ]));
  }
}), al = /* @__PURE__ */ ge(ll, [["__scopeId", "data-v-27003866"]]), rl = { class: "h-full flex items-center justify-center" }, sl = ["placeholder", "aria-label", "disabled"], nl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, ol = /* @__PURE__ */ I({
  ...nl,
  __name: "custom-text-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = z(), a = L, l = w(""), o = w(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), c = () => {
      l.value = l.value ? l.value : "";
      const i = a.params.column.colDef.field;
      l.value ? a.params.api.setColumnFilterModel(i, {
        filterType: "text",
        type: "contains",
        filter: l.value
      }) : a.params.api.setColumnFilterModel(i, null), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field).toString(), c();
    }), (i, m) => (_(), E("div", rl, [
      A(s("input", {
        class: V(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": o.value
        }]),
        type: "text",
        onInput: m[0] || (m[0] = (h) => c()),
        "onUpdate:modelValue": m[1] || (m[1] = (h) => l.value = h),
        onMousedown: m[2] || (m[2] = N(() => {
        }, ["stop"])),
        onKeypress: m[3] || (m[3] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: m[4] || (m[4] = H((h) => {
          f(n).mobileView && h.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        "aria-label": f(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        disabled: o.value
      }, null, 42, sl), [
        [oe, l.value]
      ])
    ]));
  }
}), il = { class: "h-full flex items-center justify-center" }, ul = ["aria-label", "disabled"], dl = ["value"], pl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, cl = /* @__PURE__ */ I({
  ...pl,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(L) {
    const n = L, e = w(""), a = w([]), l = w(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), o = () => {
      e.value = e.value ? e.value : "";
      const c = n.params.column.colDef.field;
      e.value === "..." || !e.value ? (n.params.api.setColumnFilterModel(c, null), e.value = "") : n.params.api.setColumnFilterModel(c, {
        filterType: "text",
        type: "contains",
        filter: e.value
      }), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, e.value), n.params.api.onFilterChanged();
    };
    return ve(() => {
      e.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field);
      let c = n.params.rowData;
      c = c.map((i) => i[n.params.column.colId]), a.value = c.filter((i, m) => c.indexOf(i) === m), a.value.unshift("..."), o();
    }), (c, i) => (_(), E("div", il, [
      A(s("select", {
        class: V(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": l.value
        }]),
        "onUpdate:modelValue": i[0] || (i[0] = (m) => e.value = m),
        onChange: i[1] || (i[1] = (m) => o()),
        onMousedown: i[2] || (i[2] = N(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: l.value
      }, [
        (_(!0), E(tt, null, lt(a.value, (m) => (_(), E("option", {
          value: m,
          key: m
        }, D(m), 9, dl))), 128))
      ], 42, ul), [
        [kt, e.value]
      ])
    ]));
  }
}), ml = /* @__PURE__ */ ge(cl, [["__scopeId", "data-v-e6bcc33c"]]), vl = { class: "h-full flex items-center justify-center w-full" }, fl = ["placeholder", "aria-label", "disabled"], gl = ["placeholder", "aria-label", "disabled"], hl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, yl = /* @__PURE__ */ I({
  ...hl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = z(), a = L, l = w(""), o = w(""), c = w(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), i = () => {
      h(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
    }, m = () => {
      h(), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, o.value, "max");
    }, h = () => {
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
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min") || "", o.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max") || "", i(), m();
    }), (C, y) => (_(), E("div", vl, [
      A(s("input", {
        class: V(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        type: "date",
        placeholder: f(e)("grid.filters.date.min"),
        "aria-label": f(e)("grid.filters.date.min"),
        "onUpdate:modelValue": y[0] || (y[0] = (x) => l.value = x),
        onInput: y[1] || (y[1] = (x) => i()),
        onMousedown: y[2] || (y[2] = N(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = H((x) => {
          f(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: c.value
      }, null, 42, fl), [
        [oe, l.value]
      ]),
      y[10] || (y[10] = s("span", { class: "w-12" }, null, -1)),
      A(s("input", {
        class: V(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        type: "date",
        placeholder: f(e)("grid.filters.date.max"),
        "aria-label": f(e)("grid.filters.date.max"),
        "onUpdate:modelValue": y[5] || (y[5] = (x) => o.value = x),
        onInput: y[6] || (y[6] = (x) => m()),
        onMousedown: y[7] || (y[7] = N(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = H((x) => {
          f(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: c.value
      }, null, 42, gl), [
        [oe, o.value]
      ])
    ]));
  }
}), bl = /* @__PURE__ */ ge(yl, [["__scopeId", "data-v-424baaed"]]), wl = ["content", "disabled", "aria-label"], xl = /* @__PURE__ */ I({
  __name: "clear-filter",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = z(), a = w(), l = w(), o = w(), c = () => n.params.clearFilters();
    return X(async () => {
      await _e(), l.value = a.value?.closest(".ag-header-cell"), o.value = l.value.closest(".ag-pinned-left-header"), l.value.addEventListener("keydown", async (i) => {
        i.key === "Enter" && (i.stopPropagation(), c(), await _e(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.addEventListener("focus", () => {
        a.value._tippy.show();
      }), l.value.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      l.value && (l.value.removeEventListener("keydown", async (i) => {
        i.key === "Enter" && (i.stopPropagation(), c(), await _e(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), l.value.removeEventListener("blur", () => {
        a.value._tippy.hide();
      }));
    }), (i, m) => {
      const h = B("tippy");
      return A((_(), E("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: c,
        content: f(e)("grid.filters.clear"),
        disabled: !L.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: a,
        "aria-label": f(e)("grid.filters.clear")
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
      ]), 8, wl)), [
        [h, { placement: "bottom" }]
      ]);
    };
  }
}), Cl = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, Ll = ["content", "aria-label"], _l = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, El = {
  key: 2,
  class: "flex"
}, Ml = {
  key: 0,
  class: "w-24 inline-block"
}, kl = {
  key: 1,
  class: "customSortDownLabel"
}, Fl = {
  key: 2,
  class: "customSortUpLabel"
}, Al = ["content", "aria-label", "disabled"], Tl = ["content", "aria-label", "disabled"], $l = /* @__PURE__ */ I({
  __name: "custom-header",
  props: ["params"],
  setup(L) {
    const { t: n } = z(), e = L, a = w(), l = w(0), o = w(!1), c = w(!1), i = w(!1), m = w(null), h = () => {
      const p = m.value?.getAllDisplayedColumns(), M = p.indexOf(e.params.column), $ = p[M - 1]?.colDef, K = p[M + 1]?.colDef;
      c.value = M > 3 && !($?.headerComponentParams?.isStatic ?? $?.isStatic), i.value = M < p.length - 1 && !(K?.headerComponentParams?.isStatic ?? K?.isStatic);
    }, C = () => {
      const p = m.value?.getAllDisplayedColumns(), M = m.value?.getAllGridColumns(), $ = M.indexOf(p[p.indexOf(e.params.column) - 1]);
      c.value && (m.value?.moveColumns([e.params.column], $), e.params.api.ensureColumnVisible(M[$]), a.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, y = () => {
      const p = m.value?.getAllDisplayedColumns(), M = m.value?.getAllGridColumns(), $ = M.indexOf(p[p.indexOf(e.params.column) + 1]);
      i.value && (m.value?.moveColumns([e.params.column], $), e.params.api.ensureColumnVisible(M[$]));
    }, x = (p) => {
      l.value = (l.value + 1) % 3, l.value === 1 ? e.params.setSort("asc", p.shiftKey) : l.value === 2 ? e.params.setSort("desc", p.shiftKey) : e.params.setSort("none", p.shiftKey);
    };
    return X(() => {
      o.value = e.params.column.colDef.sortable, m.value = e.params.api, e.params.sort === "asc" ? (l.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (l.value = 2, e.params.setSort("desc")), h(), e.params.column.addEventListener("leftChanged", () => {
        h();
      });
    }), J(() => {
      e.params.column.removeEventListener("leftChanged", () => {
        h();
      });
    }), (p, M) => {
      const $ = B("truncate"), K = B("tippy");
      return _(), E("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: a
      }, [
        o.value ? (_(), E("div", Cl, [
          A((_(), E("button", {
            type: "button",
            onClick: M[0] || (M[0] = (ee) => x(ee)),
            content: f(n)(`grid.header.sort.${l.value}`),
            "aria-label": f(n)(`grid.header.sort.${l.value}`),
            class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
            role: "columnheader",
            tabindex: "-1"
          }, [
            A((_(), E("div", null, [
              ne(D(L.params.displayName), 1)
            ])), [
              [$, { externalTrigger: !0 }]
            ])
          ], 8, Ll)), [
            [K, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : A((_(), E("span", _l, [
          ne(D(L.params.displayName), 1)
        ])), [
          [$]
        ]),
        o.value ? (_(), E("div", El, [
          L.params.enableSorting && l.value === 0 ? (_(), E("span", Ml)) : S("", !0),
          L.params.enableSorting && l.value === 1 ? (_(), E("span", kl, M[3] || (M[3] = [
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
          L.params.enableSorting && l.value === 2 ? (_(), E("span", Fl, M[4] || (M[4] = [
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
            content: f(n)("grid.header.reorder.left"),
            "aria-label": f(n)("grid.header.reorder.left"),
            onClick: M[1] || (M[1] = (ee) => C()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !c.value
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
          ]), 8, Al)), [
            [K, { placement: "top" }]
          ]),
          A((_(), E("button", {
            type: "button",
            content: f(n)("grid.header.reorder.right"),
            "aria-label": f(n)("grid.header.reorder.right"),
            onClick: M[2] || (M[2] = (ee) => y()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !i.value
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
          ]), 8, Tl)), [
            [K, { placement: "top" }]
          ])
        ])) : S("", !0)
      ], 512);
    };
  }
}), Rl = ["content", "aria-label"], Dl = /* @__PURE__ */ I({
  __name: "details-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = z(), a = ie("iApi"), l = w(), o = async () => {
      const c = n.params.data, i = c.rvUid, m = a.geo.layer.getLayer(i), h = m.oidField, y = n.params.layerCols[m.id].find(
        (p) => p.origAttr === h
      )?.mappedAttr || h, x = await m.getGraphic(c[y], {
        getAttribs: !0
      });
      a.event.emit(
        Q.DETAILS_TOGGLE,
        {
          data: x.attributes,
          uid: i,
          format: Tt.ESRI
        },
        !0
      ), n.params.isTeleport && a.scrollToInstance();
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (c) => {
        c.key === "Enter" && o();
      }), n.params.eGridCell.addEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (c) => {
        c.key === "Enter" && o();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), (c, i) => {
      const m = B("tippy");
      return A((_(), E("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: f(e)("grid.cells.details"),
        onClick: o,
        tabindex: "-1",
        ref_key: "el",
        ref: l,
        "aria-label": f(e)("grid.cells.details")
      }, i[0] || (i[0] = [
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
      ]), 8, Rl)), [
        [m, { placement: "top" }]
      ]);
    };
  }
}), Sl = ["content", "aria-label"], Il = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Gl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Pl = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, Vl = ["innerHTML"], Hl = /* @__PURE__ */ I({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = w("none"), e = L, a = ie("iApi"), l = $t(), o = w(), { t: c } = z(), i = P(() => {
      const C = l.getLayerByUid(e.params.data.rvUid);
      return !!C && C.mapLayer;
    }), m = () => {
      if (n.value !== "none")
        return;
      n.value = "zooming";
      const C = l.getLayerByUid(e.params.data.rvUid);
      if (C === void 0 || !C.isLoaded) {
        h("error");
        return;
      }
      const y = e.params.layerCols[C.id].find((M) => M.origAttr === C.oidField), x = e.params.data[y ? y.mappedAttr ?? y.origAttr : C.oidField], p = () => {
        const M = { getGeom: !0 };
        C.getGraphic(x, M).then(($) => {
          $.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${x}`), h("error")) : (a.geo.map.zoomMapTo($.geometry), h("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance());
        }).catch(() => {
          h("error");
        });
      };
      C.layerType === Rt.FEATURE && C.geomType !== Dt.POINT ? C.getGraphicExtent(x).then((M) => {
        a.geo.map.zoomMapTo(M), h("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance();
      }).catch(() => {
        p();
      }) : p();
    }, h = (C) => {
      C === "zoomed" || C === "error" ? setTimeout(() => {
        n.value = C, o.value?._tippy.show(), setTimeout(() => {
          o.value?._tippy.hide(), n.value = "none";
        }, 3e3);
      }, 300) : n.value = C;
    };
    return X(() => {
      i.value && (e.params.eGridCell.addEventListener("keydown", (C) => {
        C.key === "Enter" && n.value === "none" && m();
      }), e.params.eGridCell.addEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), J(() => {
      i.value && (e.params.eGridCell.removeEventListener("keydown", (C) => {
        C.key === "Enter" && m();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), (C, y) => {
      const x = B("tippy");
      return i.value ? A((_(), E("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: f(c)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`),
        onClick: m,
        tabindex: "-1",
        ref_key: "button",
        ref: o,
        "aria-label": f(c)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`)
      }, [
        n.value === "zooming" ? (_(), E("div", Il)) : n.value === "zoomed" ? (_(), E("svg", Gl, y[0] || (y[0] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : n.value === "error" ? (_(), E("svg", Pl, y[1] || (y[1] = [
          s("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (_(), E("span", {
          key: 3,
          innerHTML: f(a).ui.getZoomIcon()
        }, null, 8, Vl))
      ], 8, Sl)), [
        [x, { placement: "top" }]
      ]) : S("", !0);
    };
  }
}), Nl = ["content"], Bl = ["innerHTML"], zl = /* @__PURE__ */ I({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, e = ie("iApi"), a = w(), l = P(() => {
      const c = Object.assign({}, n.params.data), i = e.geo.layer.getLayer(c.rvUid), m = n.params.config.displayOn;
      return !(!i || m === "geo" && !i.mapLayer || m === "data" && i.mapLayer);
    }), o = () => {
      const c = Object.assign({}, n.params.data), i = e.geo.layer.getLayer(c.rvUid), m = n.params.layerCols[i.id].find((C) => C.origAttr === i.oidField), h = m.mappedAttr ? c[m.mappedAttr] : c[m.origAttr];
      i.getGraphic(h, { getAttribs: !0 }).then((C) => {
        e.event.emit(n.params.config.actionEvent, {
          data: C.attributes,
          layer: i,
          uid: n.params.data.rvUid,
          oid: h
        });
      });
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (c) => {
        c.key === "Enter" && o();
      }), n.params.eGridCell.addEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (c) => {
        c.key === "Enter" && o();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (c, i) => {
      const m = B("tippy");
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
        }, null, 8, Bl)
      ], 8, Nl)), [
        [m, { placement: "top" }]
      ]) : S("", !0);
    };
  }
}), Ol = ["name", "content", "innerHTML"], Ul = ["content"], Ve = /* @__PURE__ */ I({
  __name: "cell-renderer",
  props: ["params"],
  setup(L) {
    const n = fe(), e = ie("iApi"), { t: a } = z(), l = w(), o = w(), c = w(!1), i = L, m = P(() => n.mobileView), h = () => {
      o.value?.textContent && (c.value = !0, l.value?._tippy.show(), navigator.clipboard.writeText(o.value?.textContent), setTimeout(() => {
        c.value = !1;
      }, 2e3));
    }, C = P(() => i.params.type === "number" ? i.params.value == null ? "" : e.ui.formatNumber(i.params.value) : i.params.type === "date" ? i.params.value == null ? "" : new Date(i.params.value).toISOString().slice(0, 10) : i.params.type === "string" ? !i.params.value || /<a[^>]*>[^<]+<\/a>/g.test(i.params.value) ? i.params.value : It(i.params.value, {
      target: "_blank",
      validate: {
        url: (x) => /^https?:\/\//.test(x)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), y = P(() => /<a[^>]*>[^<]+<\/a>/g.test(i.params.value) || /(http(s)?:\/\/.*)/g.test(i.params.value));
    return X(() => {
      i.params.eGridCell.addEventListener("dblclick", () => {
        h();
      }), i.params.eGridCell.addEventListener("keydown", (x) => {
        x.ctrlKey && x.code === "KeyC" && h();
      }), i.params.eGridCell.addEventListener("blur", () => {
        o.value._tippy.hide(), l.value?._tippy.hide();
      }), i.params.eGridCell.addEventListener("focus", () => {
        o.value?._tippy.show(), setTimeout(() => {
          document.activeElement === i.params.eGridCell && l.value?._tippy.show();
        }, 1e3), o.value._tippy.reference.clientWidth >= o.value._tippy.reference.scrollWidth && o.value._tippy.hide();
      });
    }), J(() => {
      i.params.eGridCell.removeEventListener("dblclick", () => {
        h();
      }), i.params.eGridCell.removeEventListener("keydown", (x) => {
        x.ctrlKey && x.code === "KeyC" && h();
      }), i.params.eGridCell.removeEventListener("blur", () => {
        o.value._tippy.hide(), l.value?._tippy.hide();
      }), i.params.eGridCell.removeEventListener("focus", () => {
        o.value._tippy.show(), l.value?._tippy.show();
      });
    }), (x, p) => {
      const M = B("truncate"), $ = B("tippy");
      return _(), E("div", null, [
        A(s("div", {
          name: C.value,
          content: C.value,
          tabindex: "-1",
          innerHTML: C.value,
          ref_key: "el",
          ref: o
        }, null, 8, Ol), [
          [M, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              maxWidth: m.value ? 300 : 700,
              // remove this once scrollable tooltip option is implemented
              animation: "scale",
              interactive: y.value
            }
          }]
        ]),
        o.value?.textContent ? A((_(), E("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: l,
          content: f(a)(`grid.label.${c.value ? "copied" : "copy"}`)
        }, null, 8, Ul)), [
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
}), Kl = { class: "pl-8" }, jl = { class: "flex flex-col justify-center items-center h-full" }, ql = { class: "flex flex-row" }, Wl = { class: "font-bold text-2xl" }, Yl = { class: "mt-20 text-xl" }, Zl = { class: "my-20" }, Ql = { class: "text-sm" }, Xl = ["aria-label"], Jl = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, ea = { class: "flex flex-1 flex-col max-w-full mr-8" }, ta = { class: "w-full font-bold" }, la = { class: "w-full text-sm" }, aa = { key: 0 }, ra = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, sa = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, na = ["aria-label", "placeholder"], oa = { class: "-ml-30 text-gray-500 search-clear-container" }, ia = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, ua = ["aria-label"], da = { class: "pb-2 flex ml-auto justify-end" }, pa = ["content", "aria-label"], ca = ["aria-label"], ma = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, va = { class: "grow" }, fa = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, ga = ["aria-label"], ha = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ya = { class: "grow" }, ba = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, wa = ["aria-label"], xa = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ca = { class: "grow" }, La = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, _a = ["aria-label"], Ea = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ma = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, ka = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Fa = { class: "grow" }, Aa = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Ta = ["aria-label"], $a = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ra = { class: "grow" }, Da = ["content"], Sa = /* @__PURE__ */ I({
  __name: "table-component",
  props: {
    panel: {
      type: at,
      required: !0
    },
    gridId: {
      type: String,
      required: !0
    }
  },
  setup(L) {
    Bt.registerModules([zt]), Ot({ theme: "legacy" });
    const n = [re.OID, re.DOUBLE, re.SINGLE, re.INTEGER], e = ie("iApi"), a = rt(), l = fe(), o = P(() => l.mobileView), c = w(!o.value), i = w(), m = Ft("gridContainer"), { t: h, locale: C } = z(), y = () => At()?.proxy?.$forceUpdate(), x = L, p = w({
      id: "dummy",
      layerIds: [],
      state: new Pt(),
      fieldMap: {}
    }), M = w(!0), $ = w(null), K = w(), ee = w(), j = w(!1), te = w(!1), ue = w([]), Me = w(0), W = w([]), he = w([]), ke = w(""), le = w([]), de = w([]), ye = w("OBJECTID"), Fe = w(void 0), st = Je.onCellKeyPress, O = w({ firstRow: 0, lastRow: 0, visibleRows: 0 }), be = w({}), Ae = e.geo.layer.getLayer(x.gridId), pe = w({}), nt = w(a.grids[x.gridId].layerIds), G = P(() => a.grids[x.gridId] ? a.grids[x.gridId].layerIds.map((r) => e.geo.layer.getLayer(r)).filter((r) => r !== void 0) : []), Ne = P(() => p.value.state.filtered || p.value.state.searchFilter), Te = w(/* @__PURE__ */ new Set()), we = w([]), T = P(() => $.value), xe = () => {
      e.$vApp.$el.querySelectorAll(
        ".ag-input-field-input.ag-checkbox-input"
      ).forEach((t, g) => {
        const d = T.value.getAllDisplayedColumns()?.[g].getColDef();
        t.setAttribute("aria-label", d?.headerName ?? h("grid.label.specialColumn"));
      });
    }, ot = (r) => {
      $.value = r.api, ke.value = p.value.state.title || Ae?.name || x.gridId, Re(), de.value.length > 0 && T.value.autoSizeAllColumns(), xe(), T.value.addEventListener("rowDataUpdated", xe), W.value.push(
        e.event.on(Q.FILTER_CHANGE, ({ uid: t, filterKey: g }) => {
          g !== Le.GRID && t && G.value.map((u) => u.uid).includes(t) && Y();
        })
      ), W.value.push(
        e.event.on(
          Q.LAYER_VISIBILITYCHANGE,
          ({ layer: t }) => {
            t.uid && G.value.map((g) => g.uid).includes(t.uid) && Y();
          }
        )
      ), W.value.push(
        e.event.on(Q.LAYER_RELOAD_END, (t) => {
          t.loadPromise().then(() => {
            G.value.map((g) => g.uid).includes(t.uid) && Y();
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
          Xe(100, () => {
            p.value.state.filterByExtent && Y();
          })
        )
      ), W.value.push(
        e.event.on(Q.LAYER_REMOVE, (t) => {
          nt.value.includes(t.id) && G.value.length !== 0 && je();
        })
      ), Y();
    }, it = () => {
      T.value.autoSizeAllColumns(), Fe.value = new Je(i.value, $.value), xe();
    }, $e = () => {
      T.value.setGridOption("quickFilterText", p.value.state.searchFilter);
    }, Be = () => {
      p.value.state.searchFilter = "", $e();
    }, ut = () => {
      Be(), Oe(), Y();
    }, dt = () => {
      p.value.state.filterByExtent = !p.value.state.filterByExtent, Y();
    }, pt = () => {
      const r = T.value.getColumnDefs();
      p.value.state.colFilter = !p.value.state.colFilter, r?.forEach((t) => {
        t.floatingFilter = p.value.state.colFilter;
      }), T.value.setGridOption("columnDefs", r);
    }, Re = () => {
      $.value && !j.value && (p.value.state.searchFilter !== "" && $e(), p.value.state.applyToMap && De(), _e(() => {
        const r = T.value.getAllDisplayedColumns();
        r && r.length > 0 && T.value.refreshCells({
          columns: [r[0]]
          // Limits the refresh action to the row number column.
        }), ze();
      }));
    }, ze = () => {
      O.value.firstRow = T.value.getFirstDisplayedRowIndex() + 1, O.value.lastRow = T.value.getLastDisplayedRowIndex() + 1, O.value.visibleRows = T.value.getDisplayedRowCount();
    }, Oe = () => {
      T.value.setFilterModel({}), p.value.state.clearFilters(), T.value.refreshHeader();
    }, ct = () => {
      c.value = !c.value;
      const r = c.value ? "left" : null, t = T.value.getAllDisplayedColumns();
      t && t.length >= 3 && T.value.setColumnsPinned(t.slice(1, 3), r);
    }, mt = () => {
      const r = T.value.getAllDisplayedColumns().filter((u) => !u.getColDef().headerComponentParams?.preventExport), t = document.createElement("p"), g = (u) => (t.innerHTML = u, t.textContent || t.innerText);
      T.value.exportDataAsCsv({
        columnKeys: r,
        suppressQuotes: !0,
        processCellCallback: (u) => {
          const d = u.column.getColDef().cellRendererParams;
          return !u.value || d && d.type === "number" ? u.value : d && d.type === "date" ? `"${new Date(u.value).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}"` : `"${g(u.value).replace(/"/g, '""')}"`;
        }
      });
    }, vt = (r, t) => {
      r.floatingFilterComponent = "dateFloatingFilter", r.filterParams.comparator = function(g, u) {
        const d = new Date(u);
        return d.getUTCFullYear() > g.getUTCFullYear() ? 1 : d.getUTCFullYear() < g.getUTCFullYear() ? -1 : d.getUTCMonth() > g.getUTCMonth() ? 1 : d.getUTCMonth() < g.getUTCMonth() ? -1 : d.getUTCDate() - g.getUTCDate();
      }, r.filterParams.inRangeInclusive = !0, r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: t
      };
    }, ft = (r, t, g) => {
      r.floatingFilterComponent = "selectorFloatingFilter", r.filterParams.inRangeInclusive = !0, r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: g,
        rowData: t
      };
    }, gt = (r, t) => {
      r.floatingFilterComponent = "numberFloatingFilter", r.filterParams.inRangeInclusive = !0, r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: t
      };
    }, ht = (r, t) => {
      r.floatingFilterComponent = "textFloatingFilter", r.suppressFloatingFilterButton = !0, r.floatingFilterComponentParams = {
        stateManager: t
      }, r.filterParams.textMatcher = function(u) {
        if (!u.filterText || typeof u.filterText != "string") return !0;
        const d = u.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${d}.*`).test(u.value);
      };
      const g = function(u) {
        if (!u || typeof u != "string") return u;
        let d = u.toLowerCase();
        return d = d.replace(new RegExp("[àáâãäå]", "g"), "a"), d = d.replace(new RegExp("æ", "g"), "ae"), d = d.replace(new RegExp("ç", "g"), "c"), d = d.replace(new RegExp("[èéêë]", "g"), "e"), d = d.replace(new RegExp("[ìíîï]", "g"), "i"), d = d.replace(new RegExp("ñ", "g"), "n"), d = d.replace(new RegExp("[òóôõö]", "g"), "o"), d = d.replace(new RegExp("œ", "g"), "oe"), d = d.replace(new RegExp("[ùúûü]", "g"), "u"), d = d.replace(new RegExp("[ýÿ]", "g"), "y"), d;
      };
      r.filterParams.textFormatter = function(u) {
        return g(u);
      };
    }, yt = (r, t, g) => {
      if (r.field === "rvRowIndex") {
        const u = {
          field: "rvRowIndex",
          headerName: "",
          headerComponentParams: { preventExport: !0 },
          sortable: !1,
          lockPosition: !0,
          valueGetter: "node.rowIndex + 1",
          suppressMovable: !0,
          suppressHeaderMenuButton: !0,
          suppressHeaderContextMenu: !0,
          floatingFilter: p.value.state.colFilter,
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
            stateManager: g,
            clearFilters: Oe
          },
          filter: !0
        };
        t.push(u);
      }
      if (r.field === "rvInteractive") {
        const u = p.value.state.controls, d = {
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
          cellRenderer: Dl,
          cellRendererParams: {
            $iApi: e,
            t: h,
            layerCols: pe.value,
            isTeleport: x.panel.teleport !== void 0
          }
        };
        if (u.includes("details") && t.push(d), Mt.value) {
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
            cellRenderer: Hl,
            cellRendererParams: {
              $iApi: e,
              layerCols: pe.value,
              isTeleport: x.panel.teleport !== void 0
            }
          };
          u.includes("zoom") && t.push(v);
        }
        u.forEach((v) => {
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
            cellRenderer: zl,
            cellRendererParams: {
              $iApi: e,
              t: h,
              layerCols: pe.value,
              config: v
            }
          };
          t.push(k);
        });
      }
      if (r.field === "rvSymbol") {
        const u = {
          field: "rvSymbol",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellDataType: !1,
          cellRenderer: (d) => {
            const v = e.geo.layer.getLayer(d.data.rvUid);
            if (v === void 0) return;
            const k = document.createElement("span"), F = d.data[ye.value];
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
        t.push(u);
      }
    }, bt = () => !Object.values(be.value).every((r) => r === void 0), wt = (r) => {
      const t = be.value[r.data.rvUid];
      return t === void 0 || t.includes(r.data[ye.value]);
    }, Y = async () => {
      const r = new St(), t = we.value.slice().map((u) => u.getPromise());
      we.value.push(r), await Promise.all(t), await Promise.all(
        G.value.map(async (u) => {
          u && u.visibility ? await u.getFilterOIDs(
            [Le.GRID],
            p.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((d) => {
            be.value[u.uid] = d;
          }) : be.value[u.uid] = [];
        })
      ), T.value.onFilterChanged(), r.resolveMe();
      const g = we.value.indexOf(r);
      g === -1 ? console.error("Grid could not find filter blocker in filter queue") : we.value.splice(g, 1);
    }, xt = () => {
      p.value.state.applyToMap = !p.value.state.applyToMap, De();
    }, De = () => {
      G.value.filter((r) => r.mapLayer).forEach((r) => {
        if (!p.value.state.applyToMap)
          r.setSqlFilter(Le.GRID, "");
        else {
          const t = Ct(r.id);
          r.setSqlFilter(Le.GRID, t);
        }
      });
    }, Ct = (r) => {
      const t = T.value.getFilterModel(), g = [];
      if (Object.keys(t || {}).forEach((u) => {
        const d = Se(r, u);
        d ? g.push(Lt(d.origAttr, t?.[u])) : g.push("1=2");
      }), p.value.state.searchFilter && p.value.state.searchFilter.length > 0) {
        const u = _t(r) || "1=2";
        u.length > 0 && g.push(`(${u})`);
      }
      return g.join(" AND ");
    }, Lt = (r, t) => {
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
          const g = t.filter.replace(/'/g, /''/);
          if (g !== "") {
            const u = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let d = g, v = "", k = u.exec(g), F = 0;
            for (; k; )
              v = v + g.substr(F, k.index - F) + k[0].slice(-1), F = k.index + 2, d = g.substr(k.index + 2), k = u.exec(g);
            v = v + d, v = v.replace(/%/g, "ௌ%"), v = v.replace(/_/g, "ௌ_"), v = `*${v}`;
            const b = `UPPER(${r}) LIKE '${v.replace(/\*/g, "%").toUpperCase()}%'`;
            return b.includes("ௌ%") || b.includes("ௌ_") ? `${b} ESCAPE 'ௌ'` : b;
          }
          break;
        }
        case "date": {
          const g = new Date(t.dateFrom ?? 0), u = new Date(t.dateTo ?? 864e13), d = g ? `${g.getMonth() + 1}/${g.getDate()}/${g.getFullYear()}` : void 0, v = u ? `${u.getMonth() + 1}/${u.getDate()}/${u.getFullYear()}` : void 0;
          switch (t.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${r} >= DATE '${d}'`;
            case "lessThan":
              return `${r} <= DATE '${d}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${r} >= DATE '${d}' AND ${r} <= DATE '${v}'`;
          }
        }
      }
    }, _t = (r) => {
      const g = p.value.state.searchFilter.replace(/'/g, "''").split(" "), u = [];
      T.value.forEachNodeAfterFilterAndSort((k) => {
        u.push(k);
      });
      const d = T.value.getAllDisplayedColumns().filter(
        (k) => (k.colDef.filter === "agTextColumnFilter" || k.colDef.filter === "agNumberColumnFilter") && Se(r, k.getColId())
      ), v = [];
      return u.forEach((k) => {
        let F = !0, b = "";
        for (const R of g) {
          const q = new RegExp(`.*${R.split(" ").join(".*").toUpperCase()}`), Ye = `%${R.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let ce = !1;
          for (const Ie of d ?? []) {
            const me = Ie.getColId(), Ce = Se(r, Ie.getColId())?.origAttr, Ze = Ie.getColDef();
            if (k.data[me] === void 0)
              ce = !1;
            else if (Ze.filter === "agTextColumnFilter") {
              const Z = k.data[me] === null ? null : k.data[me].toString();
              if (Z !== null && q.test(Z.toUpperCase())) {
                b ? b = b.concat(" AND ", `(UPPER(${Ce}) LIKE '${Ye}%')`) : b = b.concat("(", `(UPPER(${Ce}) LIKE '${Ye}%')`), v.includes(b + ")") ? ce = !1 : ce = !0;
                break;
              }
            } else if (Ze.filter === "agNumberColumnFilter") {
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
    }, Et = (r) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(r.key) && r.stopPropagation();
    }, Ue = () => {
      Ke(), x.panel.isOpen && x.panel.close();
    }, Ke = () => {
      (j.value || te.value) && G.value.forEach((r) => {
        r.abortAttributeLoad(), r.clearFeatureCache();
      });
    }, U = P(() => {
      const r = G.value.map((u) => u.visibility && u.canModifyLayer && u.mapLayer), t = G.value.some(
        (u) => u.visibility && u.mapLayer && !u.canModifyLayer
      ), g = r.some(Boolean);
      return t && g ? "partial" : g ? "enabled" : "disabled";
    }), Mt = P(
      () => G.value.some((r) => r.isLoaded && r.supportsFeatures && r.mapLayer)
    ), Se = (r, t) => pe.value[r].find((g) => (g.mappedAttr ?? g.origAttr) === t), je = () => {
      const r = G.value.filter(
        (t) => t && t.supportsFeatures && t.isLoaded
      );
      r.length === 0 && Ue(), Me.value = r.reduce((t, { featureCount: g }) => t + g, 0), ue.value = new Array(G.value.length).fill(0), r.forEach((t, g) => ue.value[g] += t.downloadedAttributes()), r.forEach((t, g) => {
        he.value.push(
          Ge(
            () => t.downloadedAttributes(),
            (u) => {
              ue.value[g] = u;
            }
          )
        );
      }), Promise.all(r.map((t) => t.loadPromise())).then(() => {
        const t = r.map((g) => Pe(g).getTabularAttributes().then((u) => {
          const d = p?.value?.state?.state;
          if (d?.columns && d.columnMetadata?.exclusiveColumns) {
            const v = d.columns.map((k) => k.field);
            u.columns = u.columns.filter(
              (k) => v.includes(k.data)
            );
          }
          return u;
        }));
        Promise.all(t).then((g) => {
          if (r.every((d) => d.attribLoadAborted())) {
            j.value = !1;
            return;
          }
          const u = {
            columns: [],
            rows: [],
            fields: [],
            oidField: ""
          };
          g.forEach((d, v) => {
            const k = [], F = r[v].id;
            d.columns.forEach((b) => {
              p.value.fieldMap && p.value.fieldMap[b.data] ? (k.push({
                origAttr: b.data,
                mappedAttr: p.value.fieldMap[b.data]
              }), b.data = p.value.fieldMap[b.data], b.title = b.data) : k.push({
                origAttr: b.data,
                mappedAttr: void 0
              }), u.columns.map((R) => R.data).includes(b.data) || u.columns.push(b);
            }), u.rows = u.rows.concat(
              d.rows.map((b) => {
                if (p.value.fieldMap)
                  for (const [R, q] of Object.entries(p.value.fieldMap))
                    b[R] !== void 0 && b[q] === void 0 && (b[q] = b[R], delete b[R]);
                return b;
              })
            );
            for (let b = 0; b < u.rows.length; b++)
              for (const [R] of Object.entries(u.rows[b]))
                e.ui.isPlainText(u.rows[b][R]) && (u.rows[b][R] = e.ui.escapeHtml(u.rows[b][R]));
            u.fields = u.fields.concat(
              d.fields.map((b) => ((!e.ui.exposeOids && b.type === "oid" || !e.ui.exposeMeasurements && (b.name.toLowerCase() === "shape_length" || b.name.toLowerCase() === "shape_area")) && Te.value.add(b.name), {
                name: p.value.fieldMap && p.value.fieldMap[b.name] ? p.value.fieldMap[b.name] : b.name,
                type: b.type,
                alias: b.alias ?? void 0,
                length: b.length ?? void 0
              }))
            ), u.oidField = p.value.fieldMap && p.value.fieldMap[d.oidField] ? p.value.fieldMap[d.oidField] : d.oidField, pe.value[F] = k;
          }), ye.value = u.oidField, ["rvRowIndex", "rvInteractive", "rvSymbol", ...u.columns].forEach((d) => {
            p.value.state?.columns[d.data] === void 0 && (p.value.state.columns[d.data] = new Vt({
              field: d.data,
              title: d.title
            })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && Te.value.has(d.data) && (p.value.state.columns[d.data].visible = !1);
            const v = p.value.state?.columns[d.data], k = v.filter.type === "selector", F = {
              headerName: v.title ?? d.title,
              headerComponent: "agColumnHeader",
              headerComponentParams: {
                sort: v.sort
              },
              field: d.data ?? d,
              sortable: !0,
              lockPosition: !0,
              filterParams: {},
              floatingFilter: p.value.state.colFilter && v.searchable,
              hide: !v?.visible,
              minWidth: v.width,
              maxWidth: v.width ?? 400,
              cellRenderer: (R) => R.value,
              suppressHeaderKeyboardEvent: (R) => {
                const q = R.event;
                return R.headerRowIndex === 0 && (q.key === "Enter" || !q.target.classList.contains("ag-header-cell") && q.key === "Tab");
              }
            }, b = u.fields.find((R) => R.name === F.field);
            d === "rvRowIndex" || d === "rvSymbol" || d === "rvInteractive" ? yt(F, le.value, p.value.state) : (n.indexOf(b.type) > -1 ? (gt(F, p.value.state), F.filter = "agNumberColumnFilter", F.autoHeight = !0, F.cellRenderer = v.template === "" ? Ve : e.component(v.template), F.cellRendererParams = {
              type: "number"
            }) : b.type === re.DATE ? (vt(F, p.value.state), F.filter = "agDateColumnFilter", F.autoHeight = !0, F.minWidth = 400, F.cellRenderer = v.template === "" ? Ve : e.component(v.template), F.cellRendererParams = {
              type: "date"
            }) : b.type === re.STRING && (k ? ft(F, u.rows, p.value.state) : ht(F, p.value.state), F.filter = "agTextColumnFilter", F.autoHeight = !0, F.cellRenderer = v.template === "" ? Ve : e.component(v.template), F.cellRendererParams = {
              type: "string"
            }), le.value.push(F));
          }), de.value = Pe(u.rows), le.value = Pe(le.value), Re(), j.value = !1;
        }).catch((g) => {
          console.error(g), te.value = !0, j.value = !1;
        });
      });
    }, qe = (r) => {
      r.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
    }, We = () => {
      m.value._tippy.hide();
    };
    return X(() => {
      m.value?.addEventListener("keyup", qe), m.value?.addEventListener("blur", We);
    }), ve(() => {
      p.value = a.grids[x.gridId], j.value = !0, y(), O.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, ee.value = {
        agColumnHeader: $l,
        numberFloatingFilter: al,
        textFloatingFilter: ol,
        selectorFloatingFilter: ml,
        dateFloatingFilter: bl,
        clearFloatingFilter: xl
      }, K.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: !0,
        rowHeight: 40,
        suppressRowTransform: !0,
        onFilterChanged: () => {
          De(), Re();
        },
        onBodyScroll: () => {
          [...e.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((r) => {
            r._tippy && i.value?.contains(r._tippy.reference) && r._tippy.hide();
          });
        },
        onBodyScrollEnd: () => {
          ze();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: !0,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: qt,
        // tab vertically instead of horizontally
        tabToNextHeader: jt,
        onModelUpdated: Xe(300, () => {
          T.value.autoSizeAllColumns(), xe();
        })
      }, je(), U.value === "partial" && e.notify.show(Qe.WARNING, e.$i18n.t("layer.filterwarning")), he.value.push(
        Ge(C, () => {
          M.value = !1, setTimeout(() => {
            M.value = !0;
          }, 10);
        })
      ), he.value.push(
        Ge(U, (r) => {
          r === "partial" && e.notify.show(Qe.WARNING, e.$i18n.t("layer.filterwarning"));
        })
      );
    }), J(() => {
      Ke(), W.value.forEach((r) => e.event.off(r)), he.value.forEach((r) => r()), Fe.value?.removeAccessibilityListeners(), Fe.value?.removeScrollListeners(), m.value?.removeEventListener("keyup", qe), m.value?.removeEventListener("blur", We);
    }), (r, t) => {
      const g = He("dropdown-menu"), u = B("truncate"), d = B("tippy");
      return _(), E("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: i
      }, [
        A(s("div", null, [
          s("p", Kl, D(f(h)("grid.splash.error")), 1)
        ], 512), [
          [ae, te.value]
        ]),
        A(s("div", jl, [
          s("div", ql, [
            s("span", Wl, D(ue.value.reduce((v, k) => v + k, 0)), 1),
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
            s("span", Yl, D(Me.value), 1)
          ]),
          s("div", Zl, [
            s("span", Ql, D(ue.value.reduce((v, k) => v + k, 0) < Me.value ? f(h)("grid.splash.loading") : f(h)("grid.splash.building")), 1)
          ]),
          s("div", null, [
            s("button", {
              type: "button",
              onClick: Ue,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": f(h)("grid.splash.cancel")
            }, D(f(h)("grid.splash.cancel")), 9, Xl)
          ])
        ], 512), [
          [ae, j.value && !te.value]
        ]),
        A(s("div", Jl, [
          s("div", ea, [
            A((_(), E("div", ta, [
              ne(D(ke.value), 1)
            ])), [
              [ae, ke.value !== ""],
              [u]
            ]),
            A((_(), E("div", la, [
              ne(D((!f(Ae).visibility && O.value.visibleRows === 0 ? `${f(h)("grid.filters.label.hidden")} — ` : "") + f(h)("grid.filters.label.info", {
                range: O.value.visibleRows !== 0 ? `${O.value.firstRow} - ${O.value.lastRow}` : "0",
                total: O.value.visibleRows
              })) + " ", 1),
              O.value.visibleRows !== de.value.length && f(Ae).visibility ? (_(), E("span", aa, D(f(h)("grid.filters.label.filtered", {
                max: de.value.length
              })), 1)) : S("", !0)
            ])), [
              [u]
            ])
          ]),
          s("div", ra, [
            A(s("div", sa, [
              A(s("input", {
                onInput: t[0] || (t[0] = (v) => $e()),
                onKeypress: t[1] || (t[1] = H(N(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: t[2] || (t[2] = H((v) => {
                  f(l).mobileView && v?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": t[3] || (t[3] = (v) => p.value.state.searchFilter = v),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": f(h)("grid.filters.label.global"),
                placeholder: f(h)("grid.filters.label.global")
              }, null, 40, na), [
                [oe, p.value.state.searchFilter]
              ]),
              s("div", oa, [
                p.value.state.searchFilter.length < 3 ? (_(), E("svg", ia, t[13] || (t[13] = [
                  s("g", { id: "search_cache224" }, [
                    s("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (_(), E("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
                  onClick: t[4] || (t[4] = (v) => Be()),
                  "aria-label": f(h)("grid.search.clear")
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
                ]), 8, ua))
              ])
            ], 512), [
              [ae, p.value.state.search]
            ]),
            s("div", da, [
              Ee(Qt, {
                gridApi: $.value,
                columnDefs: le.value,
                systemCols: Te.value,
                onRefreshHeaders: t[5] || (t[5] = (v) => $.value.refreshHeader())
              }, null, 8, ["gridApi", "columnDefs", "systemCols"]),
              A((_(), E("button", {
                type: "button",
                class: V(["grid-clearall p-4 h-40", Ne.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default"]),
                onClick: t[6] || (t[6] = (v) => Ne.value && ut()),
                content: f(h)("grid.clearAll"),
                "aria-label": f(h)("grid.clearAll")
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
              ]), 10, pa)), [
                [d, {
                  placement: "bottom"
                }]
              ]),
              Ee(g, {
                class: "h-40 w-40",
                position: "bottom-end",
                tooltip: f(h)("panels.controls.optionsMenu"),
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
                    class: V(["leading-snug w-256", {
                      hover: U.value !== "disabled" ? "none" : "text-black",
                      disabled: U.value === "disabled"
                    }]),
                    onClick: t[7] || (t[7] = (v) => U.value !== "disabled" && xt()),
                    role: "button",
                    "aria-label": f(h)("grid.label.filters.apply")
                  }, [
                    s("div", ma, [
                      t[18] || (t[18] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      s("span", va, D(f(h)("grid.label.filters.apply")), 1),
                      U.value !== "disabled" && p.value.state.applyToMap ? (_(), E("svg", fa, t[17] || (t[17] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 10, ca),
                  s("a", {
                    href: "javascript:;",
                    class: "leading-snug w-256 hover:text-black",
                    onClick: t[8] || (t[8] = (v) => pt()),
                    role: "button",
                    "aria-label": f(h)("grid.label.filters.show")
                  }, [
                    s("div", ha, [
                      t[20] || (t[20] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      s("span", ya, D(f(h)("grid.label.filters.show")), 1),
                      p.value.state.colFilter ? (_(), E("svg", ba, t[19] || (t[19] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 8, ga),
                  s("a", {
                    href: "javascript:;",
                    class: V(["leading-snug w-256", {
                      hover: U.value !== "disabled" ? "none" : "text-black",
                      disabled: U.value === "disabled"
                    }]),
                    onClick: t[9] || (t[9] = (v) => U.value !== "disabled" && dt()),
                    role: "button",
                    "aria-label": f(h)("grid.filters.label.extent")
                  }, [
                    s("div", xa, [
                      t[22] || (t[22] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      s("span", Ca, D(f(h)("grid.filters.label.extent")), 1),
                      U.value !== "disabled" && p.value.state.filterByExtent ? (_(), E("svg", La, t[21] || (t[21] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 10, wa),
                  s("a", {
                    href: "javascript:;",
                    class: V(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[10] || (t[10] = (v) => ct()),
                    role: "button",
                    "aria-label": f(h)("grid.label.pinColumns")
                  }, [
                    s("div", Ea, [
                      c.value ? (_(), E("svg", Ma, t[23] || (t[23] = [
                        s("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                      ]))) : c.value ? S("", !0) : (_(), E("svg", ka, t[24] || (t[24] = [
                        s("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                      ]))),
                      s("span", Fa, D(f(h)("grid.label.pinColumns")), 1),
                      c.value ? (_(), E("svg", Aa, t[25] || (t[25] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 8, _a),
                  s("a", {
                    href: "javascript:;",
                    class: V(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[11] || (t[11] = (v) => mt()),
                    role: "button",
                    "aria-label": f(h)("grid.label.export")
                  }, [
                    s("div", $a, [
                      t[26] || (t[26] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("g", null, [
                          s("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })
                        ])
                      ], -1)),
                      s("span", Ra, D(f(h)("grid.label.export")), 1)
                    ])
                  ], 8, Ta)
                ]),
                _: 1
              }, 8, ["tooltip"])
            ])
          ])
        ], 512), [
          [ae, !j.value && !te.value]
        ]),
        M.value ? A((_(), E("div", {
          key: 0,
          content: f(h)("grid.cells.controls"),
          class: "w-full h-full flex flex-col",
          ref_key: "gridContainer",
          ref: m,
          tabIndex: "-1"
        }, [
          Ee(f(Gt), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: !0,
            accentedSort: !0,
            localeText: f(C) === "en" ? f(Ht) : f(Nt),
            gridOptions: K.value,
            columnDefs: le.value,
            rowData: de.value,
            components: ee.value,
            onGridReady: ot,
            onKeydown: Et,
            onFirstDataRendered: it,
            onCellKeyPress: f(st),
            doesExternalFilterPass: wt,
            isExternalFilterPresent: bt
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, Da)), [
          [d, {
            placement: "top",
            trigger: "manual",
            touch: !1
          }],
          [ae, !j.value && !te.value]
        ]) : S("", !0)
      ], 512);
    };
  }
}), Ia = /* @__PURE__ */ ge(Sa, [["__scopeId", "data-v-a5e48702"]]), Ga = /* @__PURE__ */ I({
  __name: "screen",
  props: {
    panel: {
      type: at,
      required: !0
    }
  },
  setup(L) {
    const n = rt(), { t: e } = z(), a = P(() => n.currentId);
    return (l, o) => {
      const c = He("panel-screen");
      return _(), et(c, { panel: L.panel }, {
        header: se(() => [
          ne(D(f(e)("grid.title")), 1)
        ]),
        content: se(() => [
          Ee(Ia, {
            class: "rv-grid",
            gridId: a.value,
            panel: L.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Mr = /* @__PURE__ */ ge(Ga, [["__scopeId", "data-v-904e67ef"]]);
export {
  Mr as default
};
