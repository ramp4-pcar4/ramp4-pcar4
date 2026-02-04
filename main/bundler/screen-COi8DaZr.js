import { defineComponent as G, inject as ie, resolveComponent as Pe, resolveDirective as B, createBlock as tt, openBlock as _, unref as g, withCtx as se, createElementBlock as E, Fragment as lt, renderList as at, createElementVNode as s, withDirectives as A, createTextVNode as ne, toDisplayString as D, normalizeClass as P, ref as w, onBeforeMount as ve, withKeys as H, withModifiers as N, vModelText as oe, vModelSelect as kt, onMounted as X, nextTick as _e, onBeforeUnmount as J, createCommentVNode as S, computed as I, useTemplateRef as Ft, getCurrentInstance as At, watch as Ie, vShow as ae, createVNode as Ee, markRaw as Ge } from "vue";
import "tiny-emitter";
import { a as fe, _ as ge, G as Q, W as Tt, X as $t, L as Rt, Y as Dt, Z as rt, $ as re, i as st, a0 as St, a1 as Xe, a2 as Le, a3 as It } from "./main-6dWPqJr6.js";
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
import { debounce as Je } from "throttle-debounce";
import "pinia";
import { useI18n as z } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import Gt from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as Vt } from "ag-grid-vue3";
import { T as Pt, C as Ht } from "./table-state-manager-DpPT-TES.js";
import { AG_GRID_LOCALE_EN as Nt, AG_GRID_LOCALE_FR as Bt } from "@ag-grid-community/locale";
import { ModuleRegistry as zt, AllCommunityModule as Ot, provideGlobalGridOptions as Ut } from "ag-grid-community";
const Kt = ".ag-root", jt = ".ag-header-viewport .ag-header-row";
class et {
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
    function e(r) {
      r.forEach((l) => {
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
    this.element = n, this.agGridApi = e, this.agGrid = this.element.querySelector(Kt), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(jt)
    ), this.element.querySelector(".ag-body-horizontal-scroll-viewport")?.setAttribute("tabindex", "-1"), this.initAccessibilityListeners(), this.initScrollListeners();
  }
  /**
   * Set up the listeners for the grid.
   */
  initAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, r) => {
      const l = Array.prototype.slice.call(e.querySelectorAll("button"));
      r < 1 || l.length === 0 || (e.addEventListener("keydown", (i) => {
        this.cellKeydownHandler(i, e, l);
      }), e.addEventListener("blur", (i) => {
        this.cellBlurHandler(i, e, l);
      }), l[l.length - 1].addEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !1);
      }), l[0].addEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !0);
      }));
    });
  }
  /**
   * Remove all accessibility listeners from the grid.
   */
  removeAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, r) => {
      const l = Array.prototype.slice.call(e.querySelectorAll("button"));
      r < 1 || l.length === 0 || (e.removeEventListener("keydown", (i) => {
        this.cellKeydownHandler(i, e, l);
      }), e.removeEventListener("blur", (i) => {
        this.cellBlurHandler(i, e, l);
      }), l[l.length - 1].removeEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !1);
      }), l[0].removeEventListener("keydown", (i) => {
        this.cellButtonTabHandler(i, e, l, !0);
      }));
    });
  }
  /**
   * Makes `enter` allow navigation within the cell
   *
   * @param {KeyboardEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellKeydownHandler(n, e, r) {
    n.key === "Enter" && n.target === e && (n.preventDefault(), r.forEach((l) => {
      l.setAttribute("tabindex", "0");
    }), r[0].focus());
  }
  /**
   * Removes ability to tab to inner items when focus leaves the cell (and inner items)
   *
   * @param {FocusEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellBlurHandler(n, e, r) {
    n.target === e && !r.includes(n.relatedTarget) && r.forEach((l) => {
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
  cellButtonTabHandler(n, e, r, l) {
    n.key === "Tab" && (l && n.shiftKey || !l && !n.shiftKey) && (n.preventDefault(), e.focus(), r.forEach((i) => {
      i.setAttribute("tabindex", "-1");
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
    const e = this.element.querySelector(".ag-body-horizontal-scroll-viewport"), r = e.scrollLeft, l = n.clientX;
    this.agGrid.style.cursor = "grabbing";
    const i = (u) => {
      const m = u.clientX - l;
      e.scrollLeft = r - m;
    }, c = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", i), this.agGrid.removeEventListener("mouseup", c), this.agGrid.removeEventListener("mouseleave", c);
    };
    this.agGrid.addEventListener("mousemove", i), this.agGrid.addEventListener("mouseup", c), this.agGrid.addEventListener("mouseleave", c);
  }
}
function qt(L) {
  const n = L.previousHeaderPosition.column, e = L.previousHeaderPosition.headerRowIndex;
  let r = L.backwards ? e - 1 : e + 1;
  return r === -1 ? !1 : (r === L.headerRowCount && (r = -1), { headerRowIndex: r, column: n });
}
function Wt(L) {
  return L.backwards ? { column: L.previousCellPosition.column, rowIndex: -1 } : !1;
}
const Yt = ["onClick"], Zt = { class: "md-icon-small flex w-full" }, Qt = { class: "flex-1 truncate whitespace-nowrap overflow-hidden pr-4" }, Xt = /* @__PURE__ */ G({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    gridApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(L) {
    const n = ie("iApi"), { t: e } = z();
    return (r, l) => {
      const i = Pe("dropdown-menu"), c = B("truncate");
      return _(), tt(i, {
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
          (_(!0), E(lt, null, at(L.columnDefs.filter(
            (u) => u.headerName && u.headerName.length > 0 && !(!g(n).ui.exposeOids && L.systemCols?.has(u.headerName)) && !(!g(n).ui.exposeMeasurements && (L.systemCols?.has(u.headerName) || L.systemCols?.has(u.field)))
          ), (u) => (_(), E("a", {
            "truncate-trigger": "",
            tabindex: "0",
            key: u.headerName,
            onClick: (m) => {
              L.gridApi?.setColumnsVisible([u.field], u.hide), u.hide = !u.hide, r.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center max-w-[268px]"
          }, [
            s("div", Zt, [
              A((_(), E("span", Qt, [
                ne(D(u.headerName), 1)
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
                class: P({ invisible: u.hide })
              }, l[1] || (l[1] = [
                s("g", { id: "done" }, [
                  s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2))
            ])
          ], 8, Yt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), Jt = { class: "h-full flex items-center justify-center" }, el = ["placeholder", "aria-label", "disabled"], tl = ["placeholder", "aria-label", "disabled"], ll = {
  methods: {
    onParentModelChanged() {
    }
  }
}, al = /* @__PURE__ */ G({
  ...ll,
  __name: "custom-number-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = z(), r = L, l = w(""), i = w(""), c = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), u = () => {
      l.value = l.value !== "" && !isNaN(l.value) ? l.value : null, h(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, l.value, "min");
    }, m = () => {
      i.value = i.value !== "" && !isNaN(i.value) ? i.value : null, h(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, i.value, "max");
    }, h = () => {
      (isNaN(l.value) || l.value === null) && (l.value = ""), (isNaN(i.value) || i.value === null) && (i.value = "");
      const C = r.params.column.colDef.field;
      i.value === "" && l.value === "" ? r.params.api.setColumnFilterModel(C, null) : i.value !== "" && l.value !== "" ? r.params.api.setColumnFilterModel(C, {
        filterType: "number",
        type: "inRange",
        filter: l.value,
        filterTo: i.value
      }) : l.value === "" ? r.params.api.setColumnFilterModel(C, {
        filterType: "number",
        type: "lessThanOrEqual",
        filter: i.value
      }) : r.params.api.setColumnFilterModel(C, {
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: l.value
      }), r.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "min"), i.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "max"), u(), m();
    }), (C, y) => (_(), E("div", Jt, [
      A(s("input", {
        class: P(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[0] || (y[0] = (x) => l.value = x),
        onInput: y[1] || (y[1] = (x) => u()),
        onMousedown: y[2] || (y[2] = N(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = H((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: g(e)("grid.filters.number.min"),
        "aria-label": g(e)("grid.filters.number.min"),
        disabled: c.value
      }, null, 42, el), [
        [oe, l.value]
      ]),
      y[10] || (y[10] = s("span", { class: "w-12" }, null, -1)),
      A(s("input", {
        class: P(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[5] || (y[5] = (x) => i.value = x),
        onInput: y[6] || (y[6] = (x) => m()),
        onMousedown: y[7] || (y[7] = N(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = H((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: g(e)("grid.filters.number.max"),
        "aria-label": g(e)("grid.filters.number.max"),
        disabled: c.value
      }, null, 42, tl), [
        [oe, i.value]
      ])
    ]));
  }
}), rl = /* @__PURE__ */ ge(al, [["__scopeId", "data-v-27003866"]]), sl = { class: "h-full flex items-center justify-center" }, nl = ["placeholder", "aria-label", "disabled"], ol = {
  methods: {
    onParentModelChanged() {
    }
  }
}, il = /* @__PURE__ */ G({
  ...ol,
  __name: "custom-text-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = z(), r = L, l = w(""), i = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), c = () => {
      l.value = l.value ? l.value : "";
      const u = r.params.column.colDef.field;
      l.value ? r.params.api.setColumnFilterModel(u, {
        filterType: "text",
        type: "contains",
        filter: l.value
      }) : r.params.api.setColumnFilterModel(u, null), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, l.value), r.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field).toString(), c();
    }), (u, m) => (_(), E("div", sl, [
      A(s("input", {
        class: P(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": i.value
        }]),
        type: "text",
        onInput: m[0] || (m[0] = (h) => c()),
        "onUpdate:modelValue": m[1] || (m[1] = (h) => l.value = h),
        onMousedown: m[2] || (m[2] = N(() => {
        }, ["stop"])),
        onKeypress: m[3] || (m[3] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: m[4] || (m[4] = H((h) => {
          g(n).mobileView && h.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: g(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        "aria-label": g(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        disabled: i.value
      }, null, 42, nl), [
        [oe, l.value]
      ])
    ]));
  }
}), ul = { class: "h-full flex items-center justify-center" }, dl = ["aria-label", "disabled"], pl = ["value"], cl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, ml = /* @__PURE__ */ G({
  ...cl,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(L) {
    const n = L, e = w(""), r = w([]), l = w(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), i = () => {
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
      c = c.map((u) => u[n.params.column.colId]), r.value = c.filter((u, m) => c.indexOf(u) === m), r.value.unshift("..."), i();
    }), (c, u) => (_(), E("div", ul, [
      A(s("select", {
        class: P(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": l.value
        }]),
        "onUpdate:modelValue": u[0] || (u[0] = (m) => e.value = m),
        onChange: u[1] || (u[1] = (m) => i()),
        onMousedown: u[2] || (u[2] = N(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: l.value
      }, [
        (_(!0), E(lt, null, at(r.value, (m) => (_(), E("option", {
          value: m,
          key: m
        }, D(m), 9, pl))), 128))
      ], 42, dl), [
        [kt, e.value]
      ])
    ]));
  }
}), vl = /* @__PURE__ */ ge(ml, [["__scopeId", "data-v-e6bcc33c"]]), fl = { class: "h-full flex items-center justify-center w-full" }, gl = ["placeholder", "aria-label", "disabled"], hl = ["placeholder", "aria-label", "disabled"], yl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, bl = /* @__PURE__ */ G({
  ...yl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(L) {
    const n = fe(), { t: e } = z(), r = L, l = w(""), i = w(""), c = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), u = () => {
      h(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, l.value, "min");
    }, m = () => {
      h(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, i.value, "max");
    }, h = () => {
      const C = r.params.column.colDef.field;
      i.value === "" && l.value === "" ? r.params.api.setColumnFilterModel(C, null) : i.value !== "" && l.value !== "" ? r.params.api.setColumnFilterModel(C, {
        filterType: "date",
        type: "inRange",
        dateFrom: l.value,
        dateTo: i.value
      }) : l.value === "" ? r.params.api.setColumnFilterModel(C, {
        filterType: "date",
        type: "lessThan",
        dateFrom: i.value
      }) : r.params.api.setColumnFilterModel(C, {
        filterType: "date",
        type: "greaterThan",
        dateFrom: l.value
      }), r.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "min") || "", i.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "max") || "", u(), m();
    }), (C, y) => (_(), E("div", fl, [
      A(s("input", {
        class: P(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        type: "date",
        placeholder: g(e)("grid.filters.date.min"),
        "aria-label": g(e)("grid.filters.date.min"),
        "onUpdate:modelValue": y[0] || (y[0] = (x) => l.value = x),
        onInput: y[1] || (y[1] = (x) => u()),
        onMousedown: y[2] || (y[2] = N(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = H((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: c.value
      }, null, 42, gl), [
        [oe, l.value]
      ]),
      y[10] || (y[10] = s("span", { class: "w-12" }, null, -1)),
      A(s("input", {
        class: P(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": c.value
        }]),
        type: "date",
        placeholder: g(e)("grid.filters.date.max"),
        "aria-label": g(e)("grid.filters.date.max"),
        "onUpdate:modelValue": y[5] || (y[5] = (x) => i.value = x),
        onInput: y[6] || (y[6] = (x) => m()),
        onMousedown: y[7] || (y[7] = N(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = H(N(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = H((x) => {
          g(n).mobileView && x.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: c.value
      }, null, 42, hl), [
        [oe, i.value]
      ])
    ]));
  }
}), wl = /* @__PURE__ */ ge(bl, [["__scopeId", "data-v-424baaed"]]), xl = ["content", "disabled", "aria-label"], Cl = /* @__PURE__ */ G({
  __name: "clear-filter",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = z(), r = w(), l = w(), i = w(), c = () => n.params.clearFilters();
    return X(async () => {
      await _e(), l.value = r.value?.closest(".ag-header-cell"), i.value = l.value.closest(".ag-pinned-left-header"), l.value.addEventListener("keydown", async (u) => {
        u.key === "Enter" && (u.stopPropagation(), c(), await _e(), (i.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.addEventListener("focus", () => {
        r.value._tippy.show();
      }), l.value.addEventListener("blur", () => {
        r.value._tippy.hide();
      });
    }), J(() => {
      l.value && (l.value.removeEventListener("keydown", async (u) => {
        u.key === "Enter" && (u.stopPropagation(), c(), await _e(), (i.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), l.value.removeEventListener("focus", () => {
        r.value._tippy.show();
      }), l.value.removeEventListener("blur", () => {
        r.value._tippy.hide();
      }));
    }), (u, m) => {
      const h = B("tippy");
      return A((_(), E("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: c,
        content: g(e)("grid.filters.clear"),
        disabled: !L.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: r,
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
      ]), 8, xl)), [
        [h, { placement: "bottom" }]
      ]);
    };
  }
}), Ll = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, _l = ["content", "aria-label"], El = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, Ml = {
  key: 2,
  class: "flex"
}, kl = {
  key: 0,
  class: "w-24 inline-block"
}, Fl = {
  key: 1,
  class: "customSortDownLabel"
}, Al = {
  key: 2,
  class: "customSortUpLabel"
}, Tl = ["content", "aria-label", "disabled"], $l = ["content", "aria-label", "disabled"], Rl = /* @__PURE__ */ G({
  __name: "custom-header",
  props: ["params"],
  setup(L) {
    const { t: n } = z(), e = L, r = w(), l = w(0), i = w(!1), c = w(!1), u = w(!1), m = w(null), h = () => {
      const p = m.value?.getAllDisplayedColumns(), M = p.indexOf(e.params.column), $ = p[M - 1]?.colDef, K = p[M + 1]?.colDef;
      c.value = M > 3 && !($?.headerComponentParams?.isStatic ?? $?.isStatic), u.value = M < p.length - 1 && !(K?.headerComponentParams?.isStatic ?? K?.isStatic);
    }, C = () => {
      const p = m.value?.getAllDisplayedColumns(), M = m.value?.getAllGridColumns(), $ = M.indexOf(p[p.indexOf(e.params.column) - 1]);
      c.value && (m.value?.moveColumns([e.params.column], $), e.params.api.ensureColumnVisible(M[$]), r.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, y = () => {
      const p = m.value?.getAllDisplayedColumns(), M = m.value?.getAllGridColumns(), $ = M.indexOf(p[p.indexOf(e.params.column) + 1]);
      u.value && (m.value?.moveColumns([e.params.column], $), e.params.api.ensureColumnVisible(M[$]));
    }, x = (p) => {
      l.value = (l.value + 1) % 3, l.value === 1 ? e.params.setSort("asc", p.shiftKey) : l.value === 2 ? e.params.setSort("desc", p.shiftKey) : e.params.setSort("none", p.shiftKey);
    };
    return X(() => {
      i.value = e.params.column.colDef.sortable, m.value = e.params.api, e.params.sort === "asc" ? (l.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (l.value = 2, e.params.setSort("desc")), h(), e.params.column.addEventListener("leftChanged", () => {
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
        ref: r
      }, [
        i.value ? (_(), E("div", Ll, [
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
          ], 8, _l)), [
            [K, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : A((_(), E("span", El, [
          ne(D(L.params.displayName), 1)
        ])), [
          [$]
        ]),
        i.value ? (_(), E("div", Ml, [
          L.params.enableSorting && l.value === 0 ? (_(), E("span", kl)) : S("", !0),
          L.params.enableSorting && l.value === 1 ? (_(), E("span", Fl, M[3] || (M[3] = [
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
          L.params.enableSorting && l.value === 2 ? (_(), E("span", Al, M[4] || (M[4] = [
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
          ]), 8, Tl)), [
            [K, { placement: "top" }]
          ]),
          A((_(), E("button", {
            type: "button",
            content: g(n)("grid.header.reorder.right"),
            "aria-label": g(n)("grid.header.reorder.right"),
            onClick: M[2] || (M[2] = (ee) => y()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !u.value
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
          ]), 8, $l)), [
            [K, { placement: "top" }]
          ])
        ])) : S("", !0)
      ], 512);
    };
  }
}), Dl = ["content", "aria-label"], Sl = /* @__PURE__ */ G({
  __name: "details-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = z(), r = ie("iApi"), l = w(), i = async () => {
      const c = n.params.data, u = c.rvUid, m = r.geo.layer.getLayer(u), h = m.oidField, y = n.params.layerCols[m.id].find(
        (p) => p.origAttr === h
      )?.mappedAttr || h, x = await m.getGraphic(c[y], {
        getAttribs: !0
      });
      r.event.emit(
        Q.DETAILS_TOGGLE,
        {
          data: x.attributes,
          uid: u,
          format: Tt.ESRI
        },
        !0
      ), n.params.isTeleport && r.scrollToInstance();
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (c) => {
        c.key === "Enter" && i();
      }), n.params.eGridCell.addEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (c) => {
        c.key === "Enter" && i();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), (c, u) => {
      const m = B("tippy");
      return A((_(), E("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: g(e)("grid.cells.details"),
        onClick: i,
        tabindex: "-1",
        ref_key: "el",
        ref: l,
        "aria-label": g(e)("grid.cells.details")
      }, u[0] || (u[0] = [
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
      ]), 8, Dl)), [
        [m, { placement: "top" }]
      ]);
    };
  }
}), Il = ["content", "aria-label"], Gl = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Vl = {
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
}, Hl = ["innerHTML"], Nl = /* @__PURE__ */ G({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = w("none"), e = L, r = ie("iApi"), l = $t(), i = w(), { t: c } = z(), u = I(() => {
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
          $.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${x}`), h("error")) : (r.geo.map.zoomMapTo($.geometry), h("zoomed"), r.updateAlert(r.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && r.scrollToInstance());
        }).catch(() => {
          h("error");
        });
      };
      C.layerType === Rt.FEATURE && C.geomType !== Dt.POINT ? C.getGraphicExtent(x).then((M) => {
        r.geo.map.zoomMapTo(M), h("zoomed"), r.updateAlert(r.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && r.scrollToInstance();
      }).catch(() => {
        p();
      }) : p();
    }, h = (C) => {
      C === "zoomed" || C === "error" ? setTimeout(() => {
        n.value = C, i.value?._tippy.show(), setTimeout(() => {
          i.value?._tippy.hide(), n.value = "none";
        }, 3e3);
      }, 300) : n.value = C;
    };
    return X(() => {
      u.value && (e.params.eGridCell.addEventListener("keydown", (C) => {
        C.key === "Enter" && n.value === "none" && m();
      }), e.params.eGridCell.addEventListener("focus", () => {
        i.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        i.value?._tippy.hide();
      }));
    }), J(() => {
      u.value && (e.params.eGridCell.removeEventListener("keydown", (C) => {
        C.key === "Enter" && m();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        i.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        i.value?._tippy.hide();
      }));
    }), (C, y) => {
      const x = B("tippy");
      return u.value ? A((_(), E("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: g(c)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`),
        onClick: m,
        tabindex: "-1",
        ref_key: "button",
        ref: i,
        "aria-label": g(c)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`)
      }, [
        n.value === "zooming" ? (_(), E("div", Gl)) : n.value === "zoomed" ? (_(), E("svg", Vl, y[0] || (y[0] = [
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
          innerHTML: g(r).ui.getZoomIcon()
        }, null, 8, Hl))
      ], 8, Il)), [
        [x, { placement: "top" }]
      ]) : S("", !0);
    };
  }
}), Bl = ["content"], zl = ["innerHTML"], Ol = /* @__PURE__ */ G({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, e = ie("iApi"), r = w(), l = I(() => {
      const c = Object.assign({}, n.params.data), u = e.geo.layer.getLayer(c.rvUid), m = n.params.config.displayOn;
      return !(!u || m === "geo" && !u.mapLayer || m === "data" && u.mapLayer);
    }), i = () => {
      const c = Object.assign({}, n.params.data), u = e.geo.layer.getLayer(c.rvUid), m = n.params.layerCols[u.id].find((C) => C.origAttr === u.oidField), h = m.mappedAttr ? c[m.mappedAttr] : c[m.origAttr];
      u.getGraphic(h, { getAttribs: !0 }).then((C) => {
        e.event.emit(n.params.config.actionEvent, {
          data: C.attributes,
          layer: u,
          uid: n.params.data.rvUid,
          oid: h
        });
      });
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (c) => {
        c.key === "Enter" && i();
      }), n.params.eGridCell.addEventListener("focus", () => {
        r.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        r.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (c) => {
        c.key === "Enter" && i();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        r.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        r.value._tippy.hide();
      });
    }), (c, u) => {
      const m = B("tippy");
      return l.value ? A((_(), E("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-42 h-38",
        content: n.params.config.tooltip,
        onClick: i,
        tabindex: "-1",
        ref_key: "el",
        ref: r
      }, [
        s("span", {
          innerHTML: n.params.config.icon
        }, null, 8, zl)
      ], 8, Bl)), [
        [m, { placement: "top" }]
      ]) : S("", !0);
    };
  }
}), Ul = ["name", "content", "innerHTML"], Kl = ["content"], Ve = /* @__PURE__ */ G({
  __name: "cell-renderer",
  props: ["params"],
  setup(L) {
    const n = fe(), e = ie("iApi"), { t: r } = z(), l = w(), i = w(), c = w(!1), u = L, m = I(() => n.mobileView), h = () => {
      i.value?.textContent && (c.value = !0, l.value?._tippy.show(), navigator.clipboard.writeText(i.value?.textContent), setTimeout(() => {
        c.value = !1;
      }, 2e3));
    }, C = I(() => u.params.type === "number" ? u.params.value == null ? "" : e.ui.formatNumber(u.params.value) : u.params.type === "date" ? u.params.value == null ? "" : new Date(u.params.value).toISOString().slice(0, 10) : u.params.type === "string" ? !u.params.value || /<a[^>]*>[^<]+<\/a>/g.test(u.params.value) ? u.params.value : Gt(u.params.value, {
      target: "_blank",
      validate: {
        url: (x) => /^https?:\/\//.test(x)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), y = I(() => /<a[^>]*>[^<]+<\/a>/g.test(u.params.value) || /(http(s)?:\/\/.*)/g.test(u.params.value));
    return X(() => {
      u.params.eGridCell.addEventListener("dblclick", () => {
        h();
      }), u.params.eGridCell.addEventListener("keydown", (x) => {
        x.ctrlKey && x.code === "KeyC" && h();
      }), u.params.eGridCell.addEventListener("blur", () => {
        i.value._tippy.hide(), l.value?._tippy.hide();
      }), u.params.eGridCell.addEventListener("focus", () => {
        i.value?._tippy.show(), setTimeout(() => {
          document.activeElement === u.params.eGridCell && l.value?._tippy.show();
        }, 1e3), i.value._tippy.reference.clientWidth >= i.value._tippy.reference.scrollWidth && i.value._tippy.hide();
      });
    }), J(() => {
      u.params.eGridCell.removeEventListener("dblclick", () => {
        h();
      }), u.params.eGridCell.removeEventListener("keydown", (x) => {
        x.ctrlKey && x.code === "KeyC" && h();
      }), u.params.eGridCell.removeEventListener("blur", () => {
        i.value._tippy.hide(), l.value?._tippy.hide();
      }), u.params.eGridCell.removeEventListener("focus", () => {
        i.value._tippy.show(), l.value?._tippy.show();
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
          ref: i
        }, null, 8, Ul), [
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
        i.value?.textContent ? A((_(), E("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: l,
          content: g(r)(`grid.label.${c.value ? "copied" : "copy"}`)
        }, null, 8, Kl)), [
          [$, {
            triggerTarget: i.value,
            placement: "bottom",
            theme: "ramp4",
            hideOnClick: !1,
            delay: [1e3, 0]
          }]
        ]) : S("", !0)
      ]);
    };
  }
}), jl = { class: "pl-8" }, ql = { class: "flex flex-col justify-center items-center h-full" }, Wl = { class: "flex flex-row" }, Yl = { class: "font-bold text-2xl" }, Zl = { class: "mt-20 text-xl" }, Ql = { class: "my-20" }, Xl = { class: "text-sm" }, Jl = ["aria-label"], ea = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, ta = { class: "flex flex-1 flex-col max-w-full mr-8" }, la = { class: "w-full font-bold" }, aa = { class: "w-full text-sm" }, ra = { key: 0 }, sa = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, na = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, oa = ["aria-label", "placeholder"], ia = { class: "-ml-30 text-gray-500 search-clear-container" }, ua = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, da = ["aria-label"], pa = { class: "pb-2 flex ml-auto justify-end" }, ca = ["content", "aria-label"], ma = ["aria-label"], va = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, fa = { class: "grow" }, ga = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, ha = ["aria-label"], ya = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ba = { class: "grow" }, wa = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, xa = ["aria-label"], Ca = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, La = { class: "grow" }, _a = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Ea = ["aria-label"], Ma = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ka = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Fa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Aa = { class: "grow" }, Ta = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, $a = ["aria-label"], Ra = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Da = { class: "grow" }, Sa = ["content"], Ia = /* @__PURE__ */ G({
  __name: "table-component",
  props: {
    panel: {
      type: rt,
      required: !0
    },
    gridId: {
      type: String,
      required: !0
    }
  },
  setup(L) {
    zt.registerModules([Ot]), Ut({ theme: "legacy" });
    const n = [re.OID, re.DOUBLE, re.SINGLE, re.INTEGER], e = ie("iApi"), r = st(), l = fe(), i = I(() => l.mobileView), c = w(!i.value), u = w(), m = Ft("gridContainer"), { t: h, locale: C } = z(), y = () => At()?.proxy?.$forceUpdate(), x = L, p = w({
      id: "dummy",
      layerIds: [],
      state: new Pt(),
      fieldMap: {}
    }), M = w(!0), $ = w(null), K = w(), ee = w(), j = w(!1), te = w(!1), ue = w([]), Me = w(0), W = w([]), he = w([]), ke = w(""), le = w([]), de = w([]), ye = w("OBJECTID"), Fe = w(void 0), nt = et.onCellKeyPress, O = w({ firstRow: 0, lastRow: 0, visibleRows: 0 }), be = w({}), pe = w({}), He = w(r.grids[x.gridId].layerIds), V = I(() => r.grids[x.gridId] ? r.grids[x.gridId].layerIds.map((a) => e.geo.layer.getLayer(a)).filter((a) => a !== void 0) : []), Ne = I(() => p.value.state.filtered || p.value.state.searchFilter), Ae = w(/* @__PURE__ */ new Set()), we = w([]), T = I(() => $.value), xe = () => {
      e.$vApp.$el.querySelectorAll(
        ".ag-input-field-input.ag-checkbox-input"
      ).forEach((t, v) => {
        const d = T.value.getAllDisplayedColumns()?.[v].getColDef();
        t.setAttribute("aria-label", d?.headerName ?? h("grid.label.specialColumn"));
      });
    }, Be = I(
      () => He.value.some((a) => {
        const t = e.geo.layer.getLayer(a);
        return t?.layerState === St.LOADED && t?.visibility;
      })
    ), ot = (a) => {
      $.value = a.api;
      let t = p.value.state.title;
      t || (t = e.geo.layer.getLayer(x.gridId)?.name || x.gridId), ke.value = t, $e(), de.value.length > 0 && T.value.autoSizeAllColumns(), xe(), T.value.addEventListener("rowDataUpdated", xe), W.value.push(
        e.event.on(Q.FILTER_CHANGE, ({ uid: v, filterKey: o }) => {
          o !== Le.GRID && v && V.value.map((d) => d.uid).includes(v) && Y();
        })
      ), W.value.push(
        e.event.on(
          Q.LAYER_VISIBILITYCHANGE,
          ({ layer: v }) => {
            v.uid && V.value.map((o) => o.uid).includes(v.uid) && Y();
          }
        )
      ), W.value.push(
        e.event.on(Q.LAYER_RELOAD_END, (v) => {
          v.loadPromise().then(() => {
            V.value.map((o) => o.uid).includes(v.uid) && Y();
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
          Je(100, () => {
            p.value.state.filterByExtent && Y();
          })
        )
      ), W.value.push(
        e.event.on(Q.LAYER_REMOVE, (v) => {
          He.value.includes(v.id) && V.value.length !== 0 && qe();
        })
      ), Y();
    }, it = () => {
      T.value.autoSizeAllColumns(), Fe.value = new et(u.value, $.value), xe();
    }, Te = () => {
      T.value.setGridOption("quickFilterText", p.value.state.searchFilter);
    }, ze = () => {
      p.value.state.searchFilter = "", Te();
    }, ut = () => {
      ze(), Ue(), Y();
    }, dt = () => {
      p.value.state.filterByExtent = !p.value.state.filterByExtent, Y();
    }, pt = () => {
      const a = T.value.getColumnDefs();
      p.value.state.colFilter = !p.value.state.colFilter, a?.forEach((t) => {
        t.floatingFilter = p.value.state.colFilter;
      }), T.value.setGridOption("columnDefs", a);
    }, $e = () => {
      $.value && !j.value && (p.value.state.searchFilter !== "" && Te(), p.value.state.applyToMap && Re(), _e(() => {
        const a = T.value.getAllDisplayedColumns();
        a && a.length > 0 && T.value.refreshCells({
          columns: [a[0]]
          // Limits the refresh action to the row number column.
        }), Oe();
      }));
    }, Oe = () => {
      O.value.firstRow = T.value.getFirstDisplayedRowIndex() + 1, O.value.lastRow = T.value.getLastDisplayedRowIndex() + 1, O.value.visibleRows = T.value.getDisplayedRowCount();
    }, Ue = () => {
      T.value.setFilterModel({}), p.value.state.clearFilters(), T.value.refreshHeader();
    }, ct = () => {
      c.value = !c.value;
      const a = c.value ? "left" : null, t = T.value.getAllDisplayedColumns();
      t && t.length >= 3 && T.value.setColumnsPinned(t.slice(1, 3), a);
    }, mt = () => {
      const a = T.value.getAllDisplayedColumns().filter((o) => !o.getColDef().headerComponentParams?.preventExport), t = document.createElement("p"), v = (o) => (t.innerHTML = o, t.textContent || t.innerText);
      T.value.exportDataAsCsv({
        columnKeys: a,
        suppressQuotes: !0,
        processCellCallback: (o) => {
          const d = o.column.getColDef().cellRendererParams;
          return !o.value || d && d.type === "number" ? o.value : d && d.type === "date" ? `"${new Date(o.value).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}"` : `"${v(o.value).replace(/"/g, '""')}"`;
        }
      });
    }, vt = (a, t) => {
      a.floatingFilterComponent = "dateFloatingFilter", a.filterParams.comparator = function(v, o) {
        const d = new Date(o);
        return d.getUTCFullYear() > v.getUTCFullYear() ? 1 : d.getUTCFullYear() < v.getUTCFullYear() ? -1 : d.getUTCMonth() > v.getUTCMonth() ? 1 : d.getUTCMonth() < v.getUTCMonth() ? -1 : d.getUTCDate() - v.getUTCDate();
      }, a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: t
      };
    }, ft = (a, t, v) => {
      a.floatingFilterComponent = "selectorFloatingFilter", a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: v,
        rowData: t
      };
    }, gt = (a, t) => {
      a.floatingFilterComponent = "numberFloatingFilter", a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: t
      };
    }, ht = (a, t) => {
      a.floatingFilterComponent = "textFloatingFilter", a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: t
      }, a.filterParams.textMatcher = function(o) {
        if (!o.filterText || typeof o.filterText != "string") return !0;
        const d = o.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${d}.*`).test(o.value);
      };
      const v = function(o) {
        if (!o || typeof o != "string") return o;
        let d = o.toLowerCase();
        return d = d.replace(new RegExp("[àáâãäå]", "g"), "a"), d = d.replace(new RegExp("æ", "g"), "ae"), d = d.replace(new RegExp("ç", "g"), "c"), d = d.replace(new RegExp("[èéêë]", "g"), "e"), d = d.replace(new RegExp("[ìíîï]", "g"), "i"), d = d.replace(new RegExp("ñ", "g"), "n"), d = d.replace(new RegExp("[òóôõö]", "g"), "o"), d = d.replace(new RegExp("œ", "g"), "oe"), d = d.replace(new RegExp("[ùúûü]", "g"), "u"), d = d.replace(new RegExp("[ýÿ]", "g"), "y"), d;
      };
      a.filterParams.textFormatter = function(o) {
        return v(o);
      };
    }, yt = (a, t, v) => {
      if (a.field === "rvRowIndex") {
        const o = {
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
            stateManager: v,
            clearFilters: Ue
          },
          filter: !0
        };
        t.push(o);
      }
      if (a.field === "rvInteractive") {
        const o = p.value.state.controls, d = {
          field: "rvDetailsButton",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          pinned: i.value ? null : "left",
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellStyle: () => ({
            padding: "0px"
          }),
          cellRenderer: Sl,
          cellRendererParams: {
            $iApi: e,
            t: h,
            layerCols: pe.value,
            isTeleport: x.panel.teleport !== void 0
          }
        };
        if (o.includes("details") && t.push(d), Mt.value) {
          const f = {
            field: "rvZoomButton",
            headerName: "",
            headerComponentParams: { isStatic: !0, preventExport: !0 },
            sortable: !1,
            pinned: i.value ? null : "left",
            filter: !1,
            lockPosition: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Nl,
            cellRendererParams: {
              $iApi: e,
              layerCols: pe.value,
              isTeleport: x.panel.teleport !== void 0
            }
          };
          o.includes("zoom") && t.push(f);
        }
        o.forEach((f) => {
          if (f === "zoom" || f === "details") return;
          const k = {
            field: `rvCustomButton_${typeof f == "string" ? f : f.actionEvent}`,
            headerName: "",
            headerComponentParams: { isStatic: !0, preventExport: !0 },
            sortable: !1,
            pinned: i.value ? null : "left",
            filter: !1,
            lockPosition: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Ol,
            cellRendererParams: {
              $iApi: e,
              t: h,
              layerCols: pe.value,
              config: f
            }
          };
          t.push(k);
        });
      }
      if (a.field === "rvSymbol") {
        const o = {
          field: "rvSymbol",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellDataType: !1,
          cellRenderer: (d) => {
            const f = e.geo.layer.getLayer(d.data.rvUid);
            if (f === void 0) return;
            const k = document.createElement("span"), F = d.data[ye.value];
            return f.getIcon(F).then((b) => {
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
        t.push(o);
      }
    }, bt = () => !Object.values(be.value).every((a) => a === void 0), wt = (a) => {
      const t = be.value[a.data.rvUid];
      return t === void 0 || t.includes(a.data[ye.value]);
    }, Y = async () => {
      const a = new It(), t = we.value.slice().map((o) => o.getPromise());
      we.value.push(a), await Promise.all(t), await Promise.all(
        V.value.map(async (o) => {
          o && o.visibility ? await o.getFilterOIDs(
            [Le.GRID],
            p.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((d) => {
            be.value[o.uid] = d;
          }) : be.value[o.uid] = [];
        })
      ), T.value.onFilterChanged(), a.resolveMe();
      const v = we.value.indexOf(a);
      v === -1 ? console.error("Grid could not find filter blocker in filter queue") : we.value.splice(v, 1);
    }, xt = () => {
      p.value.state.applyToMap = !p.value.state.applyToMap, Re();
    }, Re = () => {
      V.value.filter((a) => a.mapLayer).forEach((a) => {
        if (!p.value.state.applyToMap)
          a.setSqlFilter(Le.GRID, "");
        else {
          const t = Ct(a.id);
          a.setSqlFilter(Le.GRID, t);
        }
      });
    }, Ct = (a) => {
      const t = T.value.getFilterModel(), v = [];
      if (Object.keys(t || {}).forEach((o) => {
        const d = De(a, o);
        d ? v.push(Lt(d.origAttr, t?.[o])) : v.push("1=2");
      }), p.value.state.searchFilter && p.value.state.searchFilter.length > 0) {
        const o = _t(a) || "1=2";
        o.length > 0 && v.push(`(${o})`);
      }
      return v.join(" AND ");
    }, Lt = (a, t) => {
      switch (t.filterType) {
        case "number": {
          switch (t.type) {
            case "greaterThanOrEqual":
              return `${a} >= ${t.filter}`;
            case "lessThanOrEqual":
              return `${a} <= ${t.filter}`;
            case "inRange":
              return `${a} >= ${t.filter} AND ${a} <= ${t.filterTo}`;
          }
          break;
        }
        case "text": {
          const v = t.filter.replace(/'/g, /''/);
          if (v !== "") {
            const o = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let d = v, f = "", k = o.exec(v), F = 0;
            for (; k; )
              f = f + v.substr(F, k.index - F) + k[0].slice(-1), F = k.index + 2, d = v.substr(k.index + 2), k = o.exec(v);
            f = f + d, f = f.replace(/%/g, "ௌ%"), f = f.replace(/_/g, "ௌ_"), f = `*${f}`;
            const b = `UPPER(${a}) LIKE '${f.replace(/\*/g, "%").toUpperCase()}%'`;
            return b.includes("ௌ%") || b.includes("ௌ_") ? `${b} ESCAPE 'ௌ'` : b;
          }
          break;
        }
        case "date": {
          const v = new Date(t.dateFrom ?? 0), o = new Date(t.dateTo ?? 864e13), d = v ? `${v.getMonth() + 1}/${v.getDate()}/${v.getFullYear()}` : void 0, f = o ? `${o.getMonth() + 1}/${o.getDate()}/${o.getFullYear()}` : void 0;
          switch (t.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${a} >= DATE '${d}'`;
            case "lessThan":
              return `${a} <= DATE '${d}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${a} >= DATE '${d}' AND ${a} <= DATE '${f}'`;
          }
        }
      }
    }, _t = (a) => {
      const v = p.value.state.searchFilter.replace(/'/g, "''").split(" "), o = [];
      T.value.forEachNodeAfterFilterAndSort((k) => {
        o.push(k);
      });
      const d = T.value.getAllDisplayedColumns().filter(
        (k) => (k.colDef.filter === "agTextColumnFilter" || k.colDef.filter === "agNumberColumnFilter") && De(a, k.getColId())
      ), f = [];
      return o.forEach((k) => {
        let F = !0, b = "";
        for (const R of v) {
          const q = new RegExp(`.*${R.split(" ").join(".*").toUpperCase()}`), Ze = `%${R.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let ce = !1;
          for (const Se of d ?? []) {
            const me = Se.getColId(), Ce = De(a, Se.getColId())?.origAttr, Qe = Se.getColDef();
            if (k.data[me] === void 0)
              ce = !1;
            else if (Qe.filter === "agTextColumnFilter") {
              const Z = k.data[me] === null ? null : k.data[me].toString();
              if (Z !== null && q.test(Z.toUpperCase())) {
                b ? b = b.concat(" AND ", `(UPPER(${Ce}) LIKE '${Ze}%')`) : b = b.concat("(", `(UPPER(${Ce}) LIKE '${Ze}%')`), f.includes(b + ")") ? ce = !1 : ce = !0;
                break;
              }
            } else if (Qe.filter === "agNumberColumnFilter") {
              const Z = k.data[me] === null ? null : k.data[me];
              if (Z !== null && q.test(Z)) {
                b ? b = b.concat(" AND ", `(${Ce} = ${Z})`) : b = b.concat("(", `(${Ce} = ${Z})`), ce = !f.includes(b + ")");
                break;
              }
            }
          }
          if (!ce) {
            F = !1;
            break;
          }
        }
        F && f.push(b + ")");
      }), f.join(" OR ");
    }, Et = (a) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(a.key) && a.stopPropagation();
    }, Ke = () => {
      je(), x.panel.isOpen && x.panel.close();
    }, je = () => {
      (j.value || te.value) && V.value.forEach((a) => {
        a.abortAttributeLoad(), a.clearFeatureCache();
      });
    }, U = I(() => {
      const a = V.value.map((o) => o.visibility && o.canModifyLayer && o.mapLayer), t = V.value.some(
        (o) => o.visibility && o.mapLayer && !o.canModifyLayer
      ), v = a.some(Boolean);
      return t && v ? "partial" : v ? "enabled" : "disabled";
    }), Mt = I(
      () => V.value.some((a) => a.isLoaded && a.supportsFeatures && a.mapLayer)
    ), De = (a, t) => pe.value[a].find((v) => (v.mappedAttr ?? v.origAttr) === t), qe = () => {
      const a = V.value.filter(
        (t) => t && t.supportsFeatures && t.isLoaded
      );
      a.length === 0 && Ke(), Me.value = a.reduce((t, { featureCount: v }) => t + v, 0), ue.value = new Array(V.value.length).fill(0), a.forEach((t, v) => ue.value[v] += t.downloadedAttributes()), a.forEach((t, v) => {
        he.value.push(
          Ie(
            () => t.downloadedAttributes(),
            (o) => {
              ue.value[v] = o;
            }
          )
        );
      }), Promise.all(a.map((t) => t.loadPromise())).then(() => {
        const t = a.map((v) => Ge(v).getTabularAttributes().then((o) => {
          const d = p?.value?.state?.state;
          if (d?.columns && d.columnMetadata?.exclusiveColumns) {
            const f = d.columns.map((k) => k.field);
            o.columns = o.columns.filter(
              (k) => f.includes(k.data)
            );
          }
          return o;
        }));
        Promise.all(t).then((v) => {
          if (a.every((d) => d.attribLoadAborted())) {
            j.value = !1;
            return;
          }
          const o = {
            columns: [],
            rows: [],
            fields: [],
            oidField: ""
          };
          v.forEach((d, f) => {
            const k = [], F = a[f].id;
            d.columns.forEach((b) => {
              p.value.fieldMap && p.value.fieldMap[b.data] ? (k.push({
                origAttr: b.data,
                mappedAttr: p.value.fieldMap[b.data]
              }), b.data = p.value.fieldMap[b.data], b.title = b.data) : k.push({
                origAttr: b.data,
                mappedAttr: void 0
              }), o.columns.map((R) => R.data).includes(b.data) || o.columns.push(b);
            }), o.rows = o.rows.concat(
              d.rows.map((b) => {
                if (p.value.fieldMap)
                  for (const [R, q] of Object.entries(p.value.fieldMap))
                    b[R] !== void 0 && b[q] === void 0 && (b[q] = b[R], delete b[R]);
                return b;
              })
            );
            for (let b = 0; b < o.rows.length; b++)
              for (const [R] of Object.entries(o.rows[b]))
                e.ui.isPlainText(o.rows[b][R]) && (o.rows[b][R] = e.ui.escapeHtml(o.rows[b][R]));
            o.fields = o.fields.concat(
              d.fields.map((b) => ((!e.ui.exposeOids && b.type === "oid" || !e.ui.exposeMeasurements && (b.name.toLowerCase() === "shape_length" || b.name.toLowerCase() === "shape_area")) && Ae.value.add(b.name), {
                name: p.value.fieldMap && p.value.fieldMap[b.name] ? p.value.fieldMap[b.name] : b.name,
                type: b.type,
                alias: b.alias ?? void 0,
                length: b.length ?? void 0
              }))
            ), o.oidField = p.value.fieldMap && p.value.fieldMap[d.oidField] ? p.value.fieldMap[d.oidField] : d.oidField, pe.value[F] = k;
          }), ye.value = o.oidField, ["rvRowIndex", "rvInteractive", "rvSymbol", ...o.columns].forEach((d) => {
            p.value.state?.columns[d.data] === void 0 && (p.value.state.columns[d.data] = new Ht({
              field: d.data,
              title: d.title
            })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && Ae.value.has(d.data) && (p.value.state.columns[d.data].visible = !1);
            const f = p.value.state?.columns[d.data], k = f.filter.type === "selector", F = {
              headerName: f.title ?? d.title,
              headerComponent: "agColumnHeader",
              headerComponentParams: {
                sort: f.sort
              },
              field: d.data ?? d,
              sortable: !0,
              lockPosition: !0,
              filterParams: {},
              floatingFilter: p.value.state.colFilter && f.searchable,
              hide: !f?.visible,
              minWidth: f.width,
              maxWidth: f.width ?? 400,
              cellRenderer: (R) => R.value,
              suppressHeaderKeyboardEvent: (R) => {
                const q = R.event;
                return R.headerRowIndex === 0 && (q.key === "Enter" || !q.target.classList.contains("ag-header-cell") && q.key === "Tab");
              }
            }, b = o.fields.find((R) => R.name === F.field);
            d === "rvRowIndex" || d === "rvSymbol" || d === "rvInteractive" ? yt(F, le.value, p.value.state) : (n.indexOf(b.type) > -1 ? (gt(F, p.value.state), F.filter = "agNumberColumnFilter", F.autoHeight = !0, F.cellRenderer = f.template === "" ? Ve : e.component(f.template), F.cellRendererParams = {
              type: "number"
            }) : b.type === re.DATE ? (vt(F, p.value.state), F.filter = "agDateColumnFilter", F.autoHeight = !0, F.minWidth = 400, F.cellRenderer = f.template === "" ? Ve : e.component(f.template), F.cellRendererParams = {
              type: "date"
            }) : b.type === re.STRING && (k ? ft(F, o.rows, p.value.state) : ht(F, p.value.state), F.filter = "agTextColumnFilter", F.autoHeight = !0, F.cellRenderer = f.template === "" ? Ve : e.component(f.template), F.cellRendererParams = {
              type: "string"
            }), le.value.push(F));
          }), de.value = Ge(o.rows), le.value = Ge(le.value), $e(), j.value = !1;
        }).catch((v) => {
          console.error(v), te.value = !0, j.value = !1;
        });
      });
    }, We = (a) => {
      a.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
    }, Ye = () => {
      m.value._tippy.hide();
    };
    return X(() => {
      m.value?.addEventListener("keyup", We), m.value?.addEventListener("blur", Ye);
    }), ve(() => {
      p.value = r.grids[x.gridId], j.value = !0, y(), O.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, ee.value = {
        agColumnHeader: Rl,
        numberFloatingFilter: rl,
        textFloatingFilter: il,
        selectorFloatingFilter: vl,
        dateFloatingFilter: wl,
        clearFloatingFilter: Cl
      }, K.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: !0,
        rowHeight: 40,
        suppressRowTransform: !0,
        onFilterChanged: () => {
          Re(), $e();
        },
        onBodyScroll: () => {
          [...e.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((a) => {
            a._tippy && u.value?.contains(a._tippy.reference) && a._tippy.hide();
          });
        },
        onBodyScrollEnd: () => {
          Oe();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: !0,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: Wt,
        // tab vertically instead of horizontally
        tabToNextHeader: qt,
        onModelUpdated: Je(300, () => {
          T.value.autoSizeAllColumns(), xe();
        })
      }, qe(), U.value === "partial" && e.notify.show(Xe.WARNING, e.$i18n.t("layer.filterwarning")), he.value.push(
        Ie(C, () => {
          M.value = !1, setTimeout(() => {
            M.value = !0;
          }, 10);
        })
      ), he.value.push(
        Ie(U, (a) => {
          a === "partial" && e.notify.show(Xe.WARNING, e.$i18n.t("layer.filterwarning"));
        })
      );
    }), J(() => {
      je(), W.value.forEach((a) => e.event.off(a)), he.value.forEach((a) => a()), Fe.value?.removeAccessibilityListeners(), Fe.value?.removeScrollListeners(), m.value?.removeEventListener("keyup", We), m.value?.removeEventListener("blur", Ye);
    }), (a, t) => {
      const v = Pe("dropdown-menu"), o = B("truncate"), d = B("tippy");
      return _(), E("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: u
      }, [
        A(s("div", null, [
          s("p", jl, D(g(h)("grid.splash.error")), 1)
        ], 512), [
          [ae, te.value]
        ]),
        A(s("div", ql, [
          s("div", Wl, [
            s("span", Yl, D(ue.value.reduce((f, k) => f + k, 0)), 1),
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
            s("span", Zl, D(Me.value), 1)
          ]),
          s("div", Ql, [
            s("span", Xl, D(ue.value.reduce((f, k) => f + k, 0) < Me.value ? g(h)("grid.splash.loading") : g(h)("grid.splash.building")), 1)
          ]),
          s("div", null, [
            s("button", {
              type: "button",
              onClick: Ke,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": g(h)("grid.splash.cancel")
            }, D(g(h)("grid.splash.cancel")), 9, Jl)
          ])
        ], 512), [
          [ae, j.value && !te.value]
        ]),
        A(s("div", ea, [
          s("div", ta, [
            A((_(), E("div", la, [
              ne(D(ke.value), 1)
            ])), [
              [ae, ke.value !== ""],
              [o]
            ]),
            A((_(), E("div", aa, [
              ne(D((!Be.value && O.value.visibleRows === 0 ? `${g(h)("grid.filters.label.hidden")} — ` : "") + g(h)("grid.filters.label.info", {
                range: O.value.visibleRows !== 0 ? `${O.value.firstRow} - ${O.value.lastRow}` : "0",
                total: O.value.visibleRows
              })) + " ", 1),
              O.value.visibleRows !== de.value.length && Be.value ? (_(), E("span", ra, D(g(h)("grid.filters.label.filtered", {
                max: de.value.length
              })), 1)) : S("", !0)
            ])), [
              [o]
            ])
          ]),
          s("div", sa, [
            A(s("div", na, [
              A(s("input", {
                onInput: t[0] || (t[0] = (f) => Te()),
                onKeypress: t[1] || (t[1] = H(N(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: t[2] || (t[2] = H((f) => {
                  g(l).mobileView && f?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": t[3] || (t[3] = (f) => p.value.state.searchFilter = f),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": g(h)("grid.filters.label.global"),
                placeholder: g(h)("grid.filters.label.global")
              }, null, 40, oa), [
                [oe, p.value.state.searchFilter]
              ]),
              s("div", ia, [
                p.value.state.searchFilter.length < 3 ? (_(), E("svg", ua, t[13] || (t[13] = [
                  s("g", { id: "search_cache224" }, [
                    s("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (_(), E("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
                  onClick: t[4] || (t[4] = (f) => ze()),
                  "aria-label": g(h)("grid.search.clear")
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
                ]), 8, da))
              ])
            ], 512), [
              [ae, p.value.state.search]
            ]),
            s("div", pa, [
              Ee(Xt, {
                gridApi: $.value,
                columnDefs: le.value,
                systemCols: Ae.value,
                onRefreshHeaders: t[5] || (t[5] = (f) => $.value.refreshHeader())
              }, null, 8, ["gridApi", "columnDefs", "systemCols"]),
              A((_(), E("button", {
                type: "button",
                class: P(["grid-clearall p-4 h-40", Ne.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default"]),
                onClick: t[6] || (t[6] = (f) => Ne.value && ut()),
                content: g(h)("grid.clearAll"),
                "aria-label": g(h)("grid.clearAll")
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
              ]), 10, ca)), [
                [d, {
                  placement: "bottom"
                }]
              ]),
              Ee(v, {
                class: "h-40 w-40",
                position: "bottom-end",
                tooltip: g(h)("panels.controls.optionsMenu"),
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
                    class: P(["leading-snug w-256", {
                      hover: U.value !== "disabled" ? "none" : "text-black",
                      disabled: U.value === "disabled"
                    }]),
                    onClick: t[7] || (t[7] = (f) => U.value !== "disabled" && xt()),
                    role: "button",
                    "aria-label": g(h)("grid.label.filters.apply")
                  }, [
                    s("div", va, [
                      t[18] || (t[18] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      s("span", fa, D(g(h)("grid.label.filters.apply")), 1),
                      U.value !== "disabled" && p.value.state.applyToMap ? (_(), E("svg", ga, t[17] || (t[17] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 10, ma),
                  s("a", {
                    href: "javascript:;",
                    class: "leading-snug w-256 hover:text-black",
                    onClick: t[8] || (t[8] = (f) => pt()),
                    role: "button",
                    "aria-label": g(h)("grid.label.filters.show")
                  }, [
                    s("div", ya, [
                      t[20] || (t[20] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      s("span", ba, D(g(h)("grid.label.filters.show")), 1),
                      p.value.state.colFilter ? (_(), E("svg", wa, t[19] || (t[19] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 8, ha),
                  s("a", {
                    href: "javascript:;",
                    class: P(["leading-snug w-256", {
                      hover: U.value !== "disabled" ? "none" : "text-black",
                      disabled: U.value === "disabled"
                    }]),
                    onClick: t[9] || (t[9] = (f) => U.value !== "disabled" && dt()),
                    role: "button",
                    "aria-label": g(h)("grid.filters.label.extent")
                  }, [
                    s("div", Ca, [
                      t[22] || (t[22] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      s("span", La, D(g(h)("grid.filters.label.extent")), 1),
                      U.value !== "disabled" && p.value.state.filterByExtent ? (_(), E("svg", _a, t[21] || (t[21] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 10, xa),
                  s("a", {
                    href: "javascript:;",
                    class: P(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[10] || (t[10] = (f) => ct()),
                    role: "button",
                    "aria-label": g(h)("grid.label.pinColumns")
                  }, [
                    s("div", Ma, [
                      c.value ? (_(), E("svg", ka, t[23] || (t[23] = [
                        s("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                      ]))) : c.value ? S("", !0) : (_(), E("svg", Fa, t[24] || (t[24] = [
                        s("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                      ]))),
                      s("span", Aa, D(g(h)("grid.label.pinColumns")), 1),
                      c.value ? (_(), E("svg", Ta, t[25] || (t[25] = [
                        s("g", { id: "done" }, [
                          s("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : S("", !0)
                    ])
                  ], 8, Ea),
                  s("a", {
                    href: "javascript:;",
                    class: P(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: t[11] || (t[11] = (f) => mt()),
                    role: "button",
                    "aria-label": g(h)("grid.label.export")
                  }, [
                    s("div", Ra, [
                      t[26] || (t[26] = s("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        s("g", null, [
                          s("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })
                        ])
                      ], -1)),
                      s("span", Da, D(g(h)("grid.label.export")), 1)
                    ])
                  ], 8, $a)
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
          content: g(h)("grid.cells.controls"),
          class: "w-full h-full flex flex-col",
          ref_key: "gridContainer",
          ref: m,
          tabIndex: "-1"
        }, [
          Ee(g(Vt), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: !0,
            accentedSort: !0,
            localeText: g(C) === "en" ? g(Nt) : g(Bt),
            gridOptions: K.value,
            columnDefs: le.value,
            rowData: de.value,
            components: ee.value,
            onGridReady: ot,
            onKeydown: Et,
            onFirstDataRendered: it,
            onCellKeyPress: g(nt),
            doesExternalFilterPass: wt,
            isExternalFilterPresent: bt
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, Sa)), [
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
}), Ga = /* @__PURE__ */ ge(Ia, [["__scopeId", "data-v-4ad49f22"]]), Va = /* @__PURE__ */ G({
  __name: "screen",
  props: {
    panel: {
      type: rt,
      required: !0
    }
  },
  setup(L) {
    const n = st(), { t: e } = z(), r = I(() => n.currentId);
    return (l, i) => {
      const c = Pe("panel-screen");
      return _(), tt(c, { panel: L.panel }, {
        header: se(() => [
          ne(D(g(e)("grid.title")), 1)
        ]),
        content: se(() => [
          Ee(Ga, {
            class: "rv-grid",
            gridId: r.value,
            panel: L.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), kr = /* @__PURE__ */ ge(Va, [["__scopeId", "data-v-904e67ef"]]);
export {
  kr as default
};
