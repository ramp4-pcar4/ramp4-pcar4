import { defineComponent as D, inject as oe, resolveComponent as Pe, createBlock as Xe, openBlock as E, unref as h, withCtx as se, createElementBlock as k, Fragment as Je, renderList as et, createElementVNode as o, createTextVNode as H, createCommentVNode as R, toDisplayString as T, ref as C, onBeforeMount as ve, withDirectives as F, withKeys as V, withModifiers as P, normalizeClass as z, vModelText as ne, vModelSelect as kt, onMounted as X, nextTick as _e, onBeforeUnmount as J, resolveDirective as O, computed as U, useTemplateRef as Mt, getCurrentInstance as At, watch as Ie, vShow as ae, createVNode as Ee, markRaw as Ge } from "vue";
import "tiny-emitter";
import { a as fe, _ as ge, G as Q, W as Ft, X as Tt, L as $t, Y as Rt, Z as tt, $ as re, i as lt, a0 as Ye, a1 as Le, a2 as St } from "./main-MXZmlokj.js";
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
import Dt from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { AgGridVue as It } from "ag-grid-vue3";
import { T as Gt, C as Vt } from "./table-state-manager-CYJ24Yv5.js";
import { AG_GRID_LOCALE_EN as Pt, AG_GRID_LOCALE_FR as Ht } from "@ag-grid-community/locale";
import { GridApi as Nt, ColumnApi as Bt } from "ag-grid-community";
const zt = ["onClick"], Ut = { class: "md-icon-small inline" }, Ot = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, Kt = /* @__PURE__ */ D({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    columnApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(_) {
    const n = oe("iApi"), { t: e } = N();
    return (a, l) => {
      const s = Pe("dropdown-menu");
      return E(), Xe(s, {
        class: "relative",
        position: "bottom-end",
        tooltip: h(e)("grid.label.columns"),
        tooltipPlacementAlt: "left",
        centered: !1
      }, {
        header: se(() => l[0] || (l[0] = [
          o("div", { class: "flex p-8" }, [
            o("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fit: "",
              height: "24px",
              width: "24px",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 23 24",
              focusable: "false",
              class: "inline fill-current"
            }, [
              o("g", { id: "format-list-checks_cache966" }, [
                o("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" })
              ])
            ])
          ], -1)
        ])),
        default: se(() => [
          (E(!0), k(Je, null, et(_.columnDefs.filter(
            (u) => u.headerName && u.headerName.length > 0 && !(!h(n).ui.exposeOids && _.systemCols?.has(u.headerName)) && !(!h(n).ui.exposeMeasurements && (_.systemCols?.has(u.headerName) || _.systemCols?.has(u.field)))
          ), (u) => (E(), k("a", {
            key: u.headerName,
            onClick: (p) => {
              _.columnApi?.setColumnVisible(u.field, u.hide), u.hide = !u.hide, a.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center w-256"
          }, [
            o("div", Ut, [
              H(T(u.headerName) + " ", 1),
              u.hide ? R("", !0) : (E(), k("svg", Ot, l[1] || (l[1] = [
                o("g", { id: "done" }, [
                  o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ])))
            ])
          ], 8, zt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), jt = ".ag-root", qt = ".ag-header-viewport .ag-header-row";
class Qe {
  element;
  agGrid;
  headerRows;
  agGridApi;
  agColumnApi;
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
  constructor(n, e, a) {
    this.element = n, this.agGridApi = e, this.agColumnApi = a, this.agGrid = this.element.querySelector(jt), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(qt)
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
      e.addEventListener("keydown", (s) => {
        this.cellKeydownHandler(s, e, l);
      }), e.addEventListener("blur", (s) => {
        this.cellBlurHandler(s, e, l);
      }), l[l.length - 1].addEventListener("keydown", (s) => {
        this.cellButtonTabHandler(s, e, l, !1);
      }), l[0].addEventListener("keydown", (s) => {
        this.cellButtonTabHandler(s, e, l, !0);
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
      e.removeEventListener("keydown", (s) => {
        this.cellKeydownHandler(s, e, l);
      }), e.removeEventListener("blur", (s) => {
        this.cellBlurHandler(s, e, l);
      }), l[l.length - 1].removeEventListener("keydown", (s) => {
        this.cellButtonTabHandler(s, e, l, !1);
      }), l[0].removeEventListener("keydown", (s) => {
        this.cellButtonTabHandler(s, e, l, !0);
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
    n.key === "Tab" && (l && n.shiftKey || !l && !n.shiftKey) && (n.preventDefault(), e.focus(), a.forEach((s) => {
      s.setAttribute("tabindex", "-1");
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
    const s = (p) => {
      const m = p.clientX - l;
      e.scrollLeft = a - m;
    }, u = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", s), this.agGrid.removeEventListener("mouseup", u), this.agGrid.removeEventListener("mouseleave", u);
    };
    this.agGrid.addEventListener("mousemove", s), this.agGrid.addEventListener("mouseup", u), this.agGrid.addEventListener("mouseleave", u);
  }
}
function Wt(_) {
  const n = _.previousHeaderPosition.column, e = _.previousHeaderPosition.headerRowIndex;
  let a = _.backwards ? e - 1 : e + 1;
  return a === -1 ? null : (a === _.headerRowCount && (a = -1), { headerRowIndex: a, column: n });
}
function Yt(_) {
  return _.backwards ? { column: _.previousCellPosition.column, rowIndex: -1 } : null;
}
const Zt = { class: "h-full flex items-center justify-center" }, Qt = ["placeholder", "aria-label", "disabled"], Xt = ["placeholder", "aria-label", "disabled"], Jt = {
  methods: {
    onParentModelChanged() {
    }
  }
}, el = /* @__PURE__ */ D({
  ...Jt,
  __name: "custom-number-filter",
  props: ["params"],
  setup(_) {
    const n = fe(), { t: e } = N(), a = _, l = C(""), s = C(""), u = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), p = () => {
      l.value = l.value !== "" && !isNaN(l.value) ? l.value : null, a.params.parentFilterInstance((w) => {
        b(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
      });
    }, m = () => {
      s.value = s.value !== "" && !isNaN(s.value) ? s.value : null, a.params.parentFilterInstance((w) => {
        b(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, s.value, "max");
      });
    }, b = (w) => {
      (isNaN(l.value) || l.value === null) && (l.value = ""), (isNaN(s.value) || s.value === null) && (s.value = ""), s.value !== "" && l.value !== "" ? w.setModel({
        filterType: "number",
        type: "inRange",
        filter: l.value,
        filterTo: s.value
      }) : l.value === "" ? w.setModel({
        filterType: "number",
        type: "lessThanOrEqual",
        filter: s.value
      }) : s.value === "" ? w.setModel({
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: l.value
      }) : w.setModel(null), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min"), s.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max"), p(), m();
    }), (w, y) => (E(), k("div", Zt, [
      F(o("input", {
        class: z(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[0] || (y[0] = (L) => l.value = L),
        onInput: y[1] || (y[1] = (L) => p()),
        onMousedown: y[2] || (y[2] = P(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = V(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = V((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: h(e)("grid.filters.number.min"),
        "aria-label": h(e)("grid.filters.number.min"),
        disabled: u.value
      }, null, 42, Qt), [
        [ne, l.value]
      ]),
      y[10] || (y[10] = o("span", { class: "w-12" }, null, -1)),
      F(o("input", {
        class: z(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[5] || (y[5] = (L) => s.value = L),
        onInput: y[6] || (y[6] = (L) => m()),
        onMousedown: y[7] || (y[7] = P(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = V(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = V((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: h(e)("grid.filters.number.max"),
        "aria-label": h(e)("grid.filters.number.max"),
        disabled: u.value
      }, null, 42, Xt), [
        [ne, s.value]
      ])
    ]));
  }
}), tl = /* @__PURE__ */ ge(el, [["__scopeId", "data-v-6583eadd"]]), ll = { class: "h-full flex items-center justify-center" }, al = ["placeholder", "aria-label", "disabled"], rl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, sl = /* @__PURE__ */ D({
  ...rl,
  __name: "custom-text-filter",
  props: ["params"],
  setup(_) {
    const n = fe(), { t: e } = N(), a = _, l = C(""), s = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), u = () => {
      a.params.parentFilterInstance((p) => {
        l.value = l.value ? l.value : "", p.setModel({
          filterType: "text",
          type: "contains",
          filter: l.value
        }), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value), a.params.api.onFilterChanged();
      });
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field), u();
    }), (p, m) => (E(), k("div", ll, [
      F(o("input", {
        class: z(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": s.value
        }]),
        type: "text",
        onInput: m[0] || (m[0] = (b) => u()),
        "onUpdate:modelValue": m[1] || (m[1] = (b) => l.value = b),
        onMousedown: m[2] || (m[2] = P(() => {
        }, ["stop"])),
        onKeypress: m[3] || (m[3] = V(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: m[4] || (m[4] = V((b) => {
          h(n).mobileView && b.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: h(e)("grid.filters.column.label.text", [_.params.column.colDef.headerName]),
        "aria-label": h(e)("grid.filters.column.label.text", [_.params.column.colDef.headerName]),
        disabled: s.value
      }, null, 42, al), [
        [ne, l.value]
      ])
    ]));
  }
}), nl = { class: "h-full flex items-center justify-center" }, ol = ["aria-label", "disabled"], il = ["value"], ul = {
  methods: {
    onParentModelChanged() {
    }
  }
}, dl = /* @__PURE__ */ D({
  ...ul,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(_) {
    const n = _, e = C(""), a = C([]), l = C(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), s = () => {
      e.value = e.value ? e.value : "", n.params.parentFilterInstance((u) => {
        e.value === "..." ? (u.setModel(null), e.value = "") : u.setModel({
          filterType: "text",
          type: "contains",
          filter: e.value
        }), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, e.value), n.params.api.onFilterChanged();
      });
    };
    return ve(() => {
      e.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field);
      let u = n.params.rowData;
      u = u.map((p) => p[n.params.column.colId]), a.value = u.filter((p, m) => u.indexOf(p) === m), a.value.unshift("..."), s();
    }), (u, p) => (E(), k("div", nl, [
      F(o("select", {
        class: z(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": l.value
        }]),
        "onUpdate:modelValue": p[0] || (p[0] = (m) => e.value = m),
        onChange: p[1] || (p[1] = (m) => s()),
        onMousedown: p[2] || (p[2] = P(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: l.value
      }, [
        (E(!0), k(Je, null, et(a.value, (m) => (E(), k("option", {
          value: m,
          key: m
        }, T(m), 9, il))), 128))
      ], 42, ol), [
        [kt, e.value]
      ])
    ]));
  }
}), pl = /* @__PURE__ */ ge(dl, [["__scopeId", "data-v-f1c7aa13"]]), cl = { class: "h-full flex items-center justify-center w-full" }, ml = ["placeholder", "aria-label", "disabled"], vl = ["placeholder", "aria-label", "disabled"], fl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, gl = /* @__PURE__ */ D({
  ...fl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(_) {
    const n = fe(), { t: e } = N(), a = _, l = C(""), s = C(""), u = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), p = () => {
      a.params.parentFilterInstance((w) => {
        b(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
      });
    }, m = () => {
      a.params.parentFilterInstance((w) => {
        b(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, s.value, "max");
      });
    }, b = (w) => {
      s.value === "" && l.value === "" ? w.setModel(null) : s.value !== "" && l.value !== "" ? w.setModel({
        filterType: "date",
        type: "inRange",
        dateFrom: l.value,
        dateTo: s.value
      }) : l.value === "" ? w.setModel({
        filterType: "date",
        type: "lessThan",
        dateFrom: s.value
      }) : s.value === "" && w.setModel({
        filterType: "date",
        type: "greaterThan",
        dateFrom: l.value
      }), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min") || "", s.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max") || "", p(), m();
    }), (w, y) => (E(), k("div", cl, [
      F(o("input", {
        class: z(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        type: "date",
        placeholder: h(e)("grid.filters.date.min"),
        "aria-label": h(e)("grid.filters.date.min"),
        "onUpdate:modelValue": y[0] || (y[0] = (L) => l.value = L),
        onInput: y[1] || (y[1] = (L) => p()),
        onMousedown: y[2] || (y[2] = P(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = V(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = V((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: u.value
      }, null, 42, ml), [
        [ne, l.value]
      ]),
      y[10] || (y[10] = o("span", { class: "w-12" }, null, -1)),
      F(o("input", {
        class: z(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        type: "date",
        placeholder: h(e)("grid.filters.date.max"),
        "aria-label": h(e)("grid.filters.date.max"),
        "onUpdate:modelValue": y[5] || (y[5] = (L) => s.value = L),
        onInput: y[6] || (y[6] = (L) => m()),
        onMousedown: y[7] || (y[7] = P(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = V(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = V((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: u.value
      }, null, 42, vl), [
        [ne, s.value]
      ])
    ]));
  }
}), hl = /* @__PURE__ */ ge(gl, [["__scopeId", "data-v-9db9be0a"]]), yl = ["content", "disabled", "aria-label"], bl = /* @__PURE__ */ D({
  __name: "clear-filter",
  props: ["params"],
  setup(_) {
    const n = _, { t: e } = N(), a = C(), l = () => n.params.clearFilters();
    return X(async () => {
      await _e();
      const s = a.value?.closest(".ag-header-cell"), u = s.closest(".ag-pinned-left-header");
      s.addEventListener("keydown", async (p) => {
        p.key === "Enter" && (p.stopPropagation(), l(), await _e(), u.querySelector(".ag-header-cell.ag-floating-filter").focus());
      }), s.addEventListener("focus", () => {
        a.value._tippy.show();
      }), s.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      const s = a.value?.closest(".ag-header-cell"), u = s.closest(".ag-pinned-left-header");
      s.removeEventListener("keydown", async (p) => {
        p.key === "Enter" && (p.stopPropagation(), l(), await _e(), u.querySelector(".ag-header-cell.ag-floating-filter").focus());
      }), s.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), s.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (s, u) => {
      const p = O("tippy");
      return F((E(), k("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: l,
        content: h(e)("grid.filters.clear"),
        disabled: !_.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: a,
        "aria-label": h(e)("grid.filters.clear")
      }, u[0] || (u[0] = [
        o("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "enable-background": "new 0 0 24 24",
          class: "h-24 w-24 fill-current",
          viewBox: "0 0 24 24"
        }, [
          o("g", null, [
            o("rect", {
              fill: "none",
              height: "24",
              width: "24"
            })
          ]),
          o("g", null, [
            o("g", null, [
              o("path", { d: "M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z" }),
              o("path", { d: "M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z" })
            ])
          ])
        ], -1)
      ]), 8, yl)), [
        [p, { placement: "bottom" }]
      ]);
    };
  }
}), wl = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, xl = ["content", "aria-label"], Cl = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, Ll = {
  key: 2,
  class: "flex"
}, _l = {
  key: 0,
  class: "w-24 inline-block"
}, El = {
  key: 1,
  class: "customSortDownLabel"
}, kl = {
  key: 2,
  class: "customSortUpLabel"
}, Ml = ["content", "aria-label", "disabled"], Al = ["content", "aria-label", "disabled"], Fl = /* @__PURE__ */ D({
  __name: "custom-header",
  props: ["params"],
  setup(_) {
    const { t: n } = N(), e = _, a = C(), l = C(0), s = C(!1), u = C(!1), p = C(!1), m = C(null), b = () => {
      const c = m.value.getAllDisplayedColumns(), M = c.indexOf(e.params.column);
      u.value = M > 3 && !c[M - 1].colDef.isStatic, p.value = M < c.length - 1 && !c[M + 1].colDef.isStatic;
    }, w = () => {
      const c = m.value.getAllDisplayedColumns(), M = m.value.getAllGridColumns(), A = M.indexOf(c[c.indexOf(e.params.column) - 1]);
      u.value && (m.value.moveColumn(e.params.column, A), e.params.api.ensureColumnVisible(M[A]), a.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, y = () => {
      const c = m.value.getAllDisplayedColumns(), M = m.value.getAllGridColumns(), A = M.indexOf(c[c.indexOf(e.params.column) + 1]);
      p.value && (m.value.moveColumn(e.params.column, A), e.params.api.ensureColumnVisible(M[A]));
    }, L = (c) => {
      l.value = (l.value + 1) % 3, l.value === 1 ? e.params.setSort("asc", c.shiftKey) : l.value === 2 ? e.params.setSort("desc", c.shiftKey) : e.params.setSort("none", c.shiftKey);
    };
    return X(() => {
      s.value = e.params.column.colDef.sortable, m.value = e.params.columnApi, e.params.sort === "asc" ? (l.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (l.value = 2, e.params.setSort("desc")), b(), e.params.column.addEventListener("leftChanged", () => {
        b();
      });
    }), J(() => {
      e.params.column.removeEventListener("leftChanged", () => {
        b();
      });
    }), (c, M) => {
      const A = O("truncate"), K = O("tippy");
      return E(), k("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: a
      }, [
        s.value ? (E(), k("div", wl, [
          F((E(), k("button", {
            type: "button",
            onClick: M[0] || (M[0] = (ee) => L(ee)),
            content: h(n)(`grid.header.sort.${l.value}`),
            "aria-label": h(n)(`grid.header.sort.${l.value}`),
            class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
            role: "columnheader",
            tabindex: "-1"
          }, [
            F((E(), k("div", null, [
              H(T(_.params.displayName), 1)
            ])), [
              [A, { externalTrigger: !0 }]
            ])
          ], 8, xl)), [
            [K, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : F((E(), k("span", Cl, [
          H(T(_.params.displayName), 1)
        ])), [
          [A]
        ]),
        s.value ? (E(), k("div", Ll, [
          _.params.enableSorting && l.value === 0 ? (E(), k("span", _l)) : R("", !0),
          _.params.enableSorting && l.value === 1 ? (E(), k("span", El, M[3] || (M[3] = [
            o("div", { class: "md-icon-small" }, [
              o("svg", {
                height: "24",
                width: "24"
              }, [
                o("g", { id: "arrow_upward" }, [
                  o("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })
                ])
              ])
            ], -1)
          ]))) : R("", !0),
          _.params.enableSorting && l.value === 2 ? (E(), k("span", kl, M[4] || (M[4] = [
            o("div", { class: "md-icon-small" }, [
              o("svg", {
                height: "24",
                width: "24"
              }, [
                o("g", { id: "arrow_downward" }, [
                  o("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })
                ])
              ])
            ], -1)
          ]))) : R("", !0),
          F((E(), k("button", {
            type: "button",
            content: h(n)("grid.header.reorder.left"),
            "aria-label": h(n)("grid.header.reorder.left"),
            onClick: M[1] || (M[1] = (ee) => w()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !u.value
          }, M[5] || (M[5] = [
            o("div", { class: "inline-block" }, [
              o("svg", {
                height: "24",
                width: "24"
              }, [
                o("g", { id: "keyboard_arrow_left" }, [
                  o("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Ml)), [
            [K, { placement: "top" }]
          ]),
          F((E(), k("button", {
            type: "button",
            content: h(n)("grid.header.reorder.right"),
            "aria-label": h(n)("grid.header.reorder.right"),
            onClick: M[2] || (M[2] = (ee) => y()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !p.value
          }, M[6] || (M[6] = [
            o("div", { class: "inline-block" }, [
              o("svg", {
                height: "24",
                width: "24"
              }, [
                o("g", { id: "keyboard_arrow_right" }, [
                  o("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Al)), [
            [K, { placement: "top" }]
          ])
        ])) : R("", !0)
      ], 512);
    };
  }
}), Tl = ["content", "aria-label"], $l = /* @__PURE__ */ D({
  __name: "details-button-renderer",
  props: ["params"],
  setup(_) {
    const n = _, { t: e } = N(), a = oe("iApi"), l = C(), s = async () => {
      const u = n.params.data, p = u.rvUid, m = a.geo.layer.getLayer(p), b = m.oidField, y = n.params.layerCols[m.id].find(
        (c) => c.origAttr === b
      )?.mappedAttr || b, L = await m.getGraphic(u[y], {
        getAttribs: !0
      });
      a.event.emit(
        Q.DETAILS_TOGGLE,
        {
          data: L.attributes,
          uid: p,
          format: Ft.ESRI
        },
        !0
      ), n.params.isTeleport && a.scrollToInstance();
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (u) => {
        u.key === "Enter" && s();
      }), n.params.eGridCell.addEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (u) => {
        u.key === "Enter" && s();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), (u, p) => {
      const m = O("tippy");
      return F((E(), k("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: h(e)("grid.cells.details"),
        onClick: s,
        tabindex: "-1",
        ref_key: "el",
        ref: l,
        "aria-label": h(e)("grid.cells.details")
      }, p[0] || (p[0] = [
        o("svg", {
          class: "m-auto",
          xmlns: "http://www.w3.org/2000/svg",
          height: "16",
          viewBox: "0 0 24 24",
          width: "16"
        }, [
          o("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
          }),
          o("path", {
            style: { fill: "#979797" },
            d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
          })
        ], -1)
      ]), 8, Tl)), [
        [m, { placement: "top" }]
      ]);
    };
  }
}), Rl = ["content", "aria-label"], Sl = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Dl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Il = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, Gl = ["innerHTML"], Vl = /* @__PURE__ */ D({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(_) {
    const n = C("none"), e = _, a = oe("iApi"), l = Tt(), s = C(), { t: u } = N(), p = U(() => {
      const w = l.getLayerByUid(e.params.data.rvUid);
      return !!w && w.mapLayer;
    }), m = () => {
      if (n.value !== "none")
        return;
      n.value = "zooming";
      const w = l.getLayerByUid(e.params.data.rvUid);
      if (w === void 0 || !w.isLoaded) {
        b("error");
        return;
      }
      const y = e.params.layerCols[w.id].find((M) => M.origAttr === w.oidField), L = e.params.data[y ? y.mappedAttr ?? y.origAttr : w.oidField], c = () => {
        const M = { getGeom: !0 };
        w.getGraphic(L, M).then((A) => {
          A.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${L}`), b("error")) : (a.geo.map.zoomMapTo(A.geometry), b("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance());
        }).catch(() => {
          b("error");
        });
      };
      w.layerType === $t.FEATURE && w.geomType !== Rt.POINT ? w.getGraphicExtent(L).then((M) => {
        a.geo.map.zoomMapTo(M), b("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance();
      }).catch(() => {
        c();
      }) : c();
    }, b = (w) => {
      w === "zoomed" || w === "error" ? setTimeout(() => {
        n.value = w, s.value?._tippy.show(), setTimeout(() => {
          s.value?._tippy.hide(), n.value = "none";
        }, 3e3);
      }, 300) : n.value = w;
    };
    return X(() => {
      p.value && (e.params.eGridCell.addEventListener("keydown", (w) => {
        w.key === "Enter" && n.value === "none" && m();
      }), e.params.eGridCell.addEventListener("focus", () => {
        s.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        s.value?._tippy.hide();
      }));
    }), J(() => {
      p.value && (e.params.eGridCell.removeEventListener("keydown", (w) => {
        w.key === "Enter" && m();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        s.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        s.value?._tippy.hide();
      }));
    }), (w, y) => {
      const L = O("tippy");
      return p.value ? F((E(), k("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: h(u)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`),
        onClick: m,
        tabindex: "-1",
        ref_key: "button",
        ref: s,
        "aria-label": h(u)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`)
      }, [
        n.value === "zooming" ? (E(), k("div", Sl)) : n.value === "zoomed" ? (E(), k("svg", Dl, y[0] || (y[0] = [
          o("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : n.value === "error" ? (E(), k("svg", Il, y[1] || (y[1] = [
          o("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (E(), k("span", {
          key: 3,
          innerHTML: h(a).ui.getZoomIcon()
        }, null, 8, Gl))
      ], 8, Rl)), [
        [L, { placement: "top" }]
      ]) : R("", !0);
    };
  }
}), Pl = ["content"], Hl = ["innerHTML"], Nl = /* @__PURE__ */ D({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(_) {
    const n = _, e = oe("iApi"), a = C(), l = U(() => {
      const u = Object.assign({}, n.params.data), p = e.geo.layer.getLayer(u.rvUid), m = n.params.config.displayOn;
      return !(!p || m === "geo" && !p.mapLayer || m === "data" && p.mapLayer);
    }), s = () => {
      const u = Object.assign({}, n.params.data), p = e.geo.layer.getLayer(u.rvUid), m = n.params.layerCols[p.id].find((w) => w.origAttr === p.oidField), b = m.mappedAttr ? u[m.mappedAttr] : u[m.origAttr];
      p.getGraphic(b, { getAttribs: !0 }).then((w) => {
        e.event.emit(n.params.config.actionEvent, {
          data: w.attributes,
          layer: p,
          uid: n.params.data.rvUid,
          oid: b
        });
      });
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (u) => {
        u.key === "Enter" && s();
      }), n.params.eGridCell.addEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (u) => {
        u.key === "Enter" && s();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (u, p) => {
      const m = O("tippy");
      return l.value ? F((E(), k("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-42 h-38",
        content: n.params.config.tooltip,
        onClick: s,
        tabindex: "-1",
        ref_key: "el",
        ref: a
      }, [
        o("span", {
          innerHTML: n.params.config.icon
        }, null, 8, Hl)
      ], 8, Pl)), [
        [m, { placement: "top" }]
      ]) : R("", !0);
    };
  }
}), Bl = ["name", "content", "innerHTML"], zl = ["content"], Ve = /* @__PURE__ */ D({
  __name: "cell-renderer",
  props: ["params"],
  setup(_) {
    const n = fe(), e = oe("iApi"), { t: a } = N(), l = C(), s = C(), u = C(!1), p = _, m = U(() => n.mobileView), b = () => {
      s.value?.textContent && (u.value = !0, l.value?._tippy.show(), navigator.clipboard.writeText(s.value?.textContent), setTimeout(() => {
        u.value = !1;
      }, 2e3));
    }, w = U(() => p.params.type === "number" ? p.params.value == null ? "" : e.ui.formatNumber(p.params.value) : p.params.type === "date" ? p.params.value == null ? "" : new Date(p.params.value).toISOString().slice(0, 10) : p.params.type === "string" ? !p.params.value || /<a[^>]*>[^<]+<\/a>/g.test(p.params.value) ? p.params.value : Dt(p.params.value, {
      target: "_blank",
      validate: {
        url: (L) => /^https?:\/\//.test(L)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), y = U(() => /<a[^>]*>[^<]+<\/a>/g.test(p.params.value) || /(http(s)?:\/\/.*)/g.test(p.params.value));
    return X(() => {
      p.params.eGridCell.addEventListener("dblclick", () => {
        b();
      }), p.params.eGridCell.addEventListener("keydown", (L) => {
        L.ctrlKey && L.code === "KeyC" && b();
      }), p.params.eGridCell.addEventListener("blur", () => {
        s.value._tippy.hide(), l.value?._tippy.hide();
      }), p.params.eGridCell.addEventListener("focus", () => {
        s.value?._tippy.show(), setTimeout(() => {
          document.activeElement === p.params.eGridCell && l.value?._tippy.show();
        }, 1e3), s.value._tippy.reference.clientWidth >= s.value._tippy.reference.scrollWidth && s.value._tippy.hide();
      });
    }), J(() => {
      p.params.eGridCell.removeEventListener("dblclick", () => {
        b();
      }), p.params.eGridCell.removeEventListener("keydown", (L) => {
        L.ctrlKey && L.code === "KeyC" && b();
      }), p.params.eGridCell.removeEventListener("blur", () => {
        s.value._tippy.hide(), l.value?._tippy.hide();
      }), p.params.eGridCell.removeEventListener("focus", () => {
        s.value._tippy.show(), l.value?._tippy.show();
      });
    }), (L, c) => {
      const M = O("truncate"), A = O("tippy");
      return E(), k("div", null, [
        F(o("div", {
          name: w.value,
          content: w.value,
          tabindex: "-1",
          innerHTML: w.value,
          ref_key: "el",
          ref: s
        }, null, 8, Bl), [
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
        s.value?.textContent ? F((E(), k("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: l,
          content: h(a)(`grid.label.${u.value ? "copied" : "copy"}`)
        }, null, 8, zl)), [
          [A, {
            triggerTarget: s.value,
            placement: "bottom",
            theme: "ramp4",
            hideOnClick: !1,
            delay: [1e3, 0]
          }]
        ]) : R("", !0)
      ]);
    };
  }
}), Ul = { class: "pl-8" }, Ol = { class: "flex flex-col justify-center items-center h-full" }, Kl = { class: "flex flex-row" }, jl = { class: "font-bold text-2xl" }, ql = { class: "mt-20 text-xl" }, Wl = { class: "my-20" }, Yl = { class: "text-sm" }, Zl = ["aria-label"], Ql = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, Xl = { class: "flex flex-1 flex-col max-w-full mr-8" }, Jl = { class: "w-full font-bold" }, ea = { class: "w-full text-sm" }, ta = { key: 0 }, la = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, aa = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, ra = ["aria-label", "placeholder"], sa = { class: "-ml-30 text-gray-500 search-clear-container" }, na = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, oa = ["aria-label"], ia = { class: "pb-2 flex ml-auto justify-end" }, ua = ["content", "aria-label"], da = ["aria-label"], pa = { class: "md-icon-small inline items-start" }, ca = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, ma = ["aria-label"], va = { class: "md-icon-small inline items-start" }, fa = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, ga = ["aria-label"], ha = { class: "md-icon-small inline items-start" }, ya = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, ba = ["aria-label"], wa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
}, xa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
}, Ca = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, La = ["aria-label"], _a = ["content"], Ea = /* @__PURE__ */ D({
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
  setup(_) {
    const n = [re.OID, re.DOUBLE, re.SINGLE, re.INTEGER], e = oe("iApi"), a = lt(), l = fe(), s = U(() => l.mobileView), u = C(!s.value), p = C(), m = Mt("gridContainer"), { t: b, locale: w } = N(), y = () => At()?.proxy?.$forceUpdate(), L = _, c = C({
      id: "dummy",
      layerIds: [],
      state: new Gt(),
      fieldMap: {}
    }), M = C(!0), A = C(new Nt()), K = C(), ee = C(), j = C(!1), te = C(!1), ie = C([]), ke = C(0), W = C([]), he = C([]), Me = C(""), I = C(new Bt()), le = C([]), ue = C([]), ye = C("OBJECTID"), Ae = C(void 0), at = Qe.onCellKeyPress, q = C({ firstRow: 0, lastRow: 0, visibleRows: 0 }), be = C({}), rt = e.geo.layer.getLayer(L.gridId), de = C({}), st = C(a.grids[L.gridId].layerIds), G = U(() => a.grids[L.gridId] ? a.grids[L.gridId].layerIds.map((r) => e.geo.layer.getLayer(r)).filter((r) => r !== void 0) : []), Fe = C(/* @__PURE__ */ new Set()), we = C([]), xe = () => {
      e.$vApp.$el.querySelectorAll(
        ".ag-input-field-input.ag-checkbox-input"
      ).forEach((t, v) => {
        const d = I.value.getAllDisplayedColumns()[v].getColDef();
        t.setAttribute("aria-label", d.headerName ?? b("grid.label.specialColumn"));
      });
    }, nt = (r) => {
      A.value = r.api, I.value = r.columnApi, Me.value = c.value.state.title || rt?.name || L.gridId, $e(), ue.value.length > 0 && I.value.autoSizeAllColumns(), xe(), A.value.addEventListener("rowDataChanged", xe), W.value.push(
        e.event.on(Q.FILTER_CHANGE, ({ uid: t, filterKey: v }) => {
          v !== Le.GRID && t && G.value.map((i) => i.uid).includes(t) && Y();
        })
      ), W.value.push(
        e.event.on(
          Q.LAYER_VISIBILITYCHANGE,
          ({ layer: t }) => {
            t.uid && G.value.map((v) => v.uid).includes(t.uid) && Y();
          }
        )
      ), W.value.push(
        e.event.on(Q.LAYER_RELOAD_END, (t) => {
          t.loadPromise().then(() => {
            G.value.map((v) => v.uid).includes(t.uid) && Y();
          });
        })
      ), W.value.push(
        e.event.on(Q.LANG_CHANGE, () => {
          A.value.redrawRows({
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
          st.value.includes(t.id) && G.value.length !== 0 && Oe();
        })
      ), Y();
    }, ot = () => {
      I.value.autoSizeAllColumns(), Ae.value = new Qe(
        p.value,
        A.value,
        I.value
      ), xe();
    }, Te = () => {
      A.value.setQuickFilter(c.value.state.searchFilter);
    }, He = () => {
      c.value.state.searchFilter = "", Te();
    }, it = () => {
      He(), Be(), Y();
    }, ut = () => {
      c.value.state.filterByExtent = !c.value.state.filterByExtent, Y();
    }, dt = () => {
      const r = K.value.api.getColumnDefs();
      c.value.state.colFilter = !c.value.state.colFilter, r.forEach((t) => {
        t.floatingFilter = c.value.state.colFilter;
      }), K.value.api.setColumnDefs(r);
    }, $e = () => {
      A.value && !j.value && (c.value.state.searchFilter !== "" && Te(), c.value.state.applyToMap && Re(), _e(() => {
        const r = I.value.getAllDisplayedColumns();
        K.value.api.refreshCells({
          columns: [r[0]]
          // Limits the refresh action to the row number column.
        }), Ne();
      }));
    }, Ne = () => {
      q.value.firstRow = A.value.getFirstDisplayedRow() + 1, q.value.lastRow = A.value.getLastDisplayedRow() + 1, q.value.visibleRows = A.value.getDisplayedRowCount();
    }, Be = () => {
      A.value.setFilterModel({}), c.value.state.clearFilters(), A.value.refreshHeader();
    }, pt = () => {
      u.value = !u.value;
      const r = u.value ? "left" : null, t = I.value.getAllDisplayedColumns();
      I.value.setColumnsPinned(t.slice(1, 3), r);
    }, ct = () => {
      const r = I.value.getAllDisplayedColumns().filter((i) => !i.getColDef().preventExport), t = document.createElement("p"), v = (i) => (t.innerHTML = i, t.textContent || t.innerText);
      A.value.exportDataAsCsv({
        columnKeys: r,
        suppressQuotes: !0,
        processCellCallback: (i) => {
          const d = i.column.getColDef().cellRendererParams;
          return !i.value || d && d.type === "number" ? i.value : d && d.type === "date" ? `"${new Date(i.value).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}"` : `"${v(i.value).replace(/"/g, '""')}"`;
        }
      });
    }, mt = (r, t) => {
      r.floatingFilterComponent = "dateFloatingFilter", r.filterParams.comparator = function(v, i) {
        const d = new Date(i);
        return d.getUTCFullYear() > v.getUTCFullYear() ? 1 : d.getUTCFullYear() < v.getUTCFullYear() ? -1 : d.getUTCMonth() > v.getUTCMonth() ? 1 : d.getUTCMonth() < v.getUTCMonth() ? -1 : d.getUTCDate() - v.getUTCDate();
      }, r.filterParams.inRangeInclusive = !0, r.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      };
    }, vt = (r, t, v) => {
      r.floatingFilterComponent = "selectorFloatingFilter", r.filterParams.inRangeInclusive = !0, r.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: v,
        rowData: t
      };
    }, ft = (r, t) => {
      r.floatingFilterComponent = "numberFloatingFilter", r.filterParams.inRangeInclusive = !0, r.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      };
    }, gt = (r, t) => {
      r.floatingFilterComponent = "textFloatingFilter", r.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      }, r.filterParams.textMatcher = function(i) {
        const d = i.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${d}.*`).test(i.value);
      };
      const v = function(i) {
        let d = i.toLowerCase();
        return d = d.replace(new RegExp("[àáâãäå]", "g"), "a"), d = d.replace(new RegExp("æ", "g"), "ae"), d = d.replace(new RegExp("ç", "g"), "c"), d = d.replace(new RegExp("[èéêë]", "g"), "e"), d = d.replace(new RegExp("[ìíîï]", "g"), "i"), d = d.replace(new RegExp("ñ", "g"), "n"), d = d.replace(new RegExp("[òóôõö]", "g"), "o"), d = d.replace(new RegExp("œ", "g"), "oe"), d = d.replace(new RegExp("[ùúûü]", "g"), "u"), d = d.replace(new RegExp("[ýÿ]", "g"), "y"), d;
      };
      r.filterParams.textFormatter = function(i) {
        return v(i);
      };
    }, ht = (r, t, v) => {
      if (r.field === "rvRowIndex") {
        const i = {
          sortable: !1,
          lockPosition: !0,
          valueGetter: "node.rowIndex + 1",
          suppressMovable: !0,
          suppressMenu: !0,
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
          floatingFilterComponentParams: {
            stateManager: v,
            clearFilters: Be,
            suppressFilterButton: !0
          },
          filter: !0,
          preventExport: !0
        };
        t.push(i);
      }
      if (r.field === "rvInteractive") {
        const i = c.value.state.controls, d = {
          sortable: !1,
          pinned: s.value ? "" : "left",
          filter: !1,
          lockPosition: !0,
          isStatic: !0,
          maxWidth: 42,
          cellStyle: () => ({
            padding: "0px"
          }),
          cellRenderer: $l,
          cellRendererParams: {
            $iApi: e,
            t: b,
            layerCols: de.value,
            isTeleport: L.panel.teleport !== void 0
          },
          preventExport: !0
        };
        if (i.includes("details") && t.push(d), Et.value) {
          const f = {
            sortable: !1,
            pinned: s.value ? "" : "left",
            filter: !1,
            lockPosition: !0,
            isStatic: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Vl,
            cellRendererParams: {
              $iApi: e,
              layerCols: de.value,
              isTeleport: L.panel.teleport !== void 0
            },
            preventExport: !0
          };
          i.includes("zoom") && t.push(f);
        }
        i.forEach((f) => {
          if (f === "zoom" || f === "details") return;
          const x = {
            sortable: !1,
            pinned: s.value ? "" : "left",
            filter: !1,
            lockPosition: !0,
            isStatic: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Nl,
            cellRendererParams: {
              $iApi: e,
              t: b,
              layerCols: de.value,
              config: f
            },
            preventExport: !0
          };
          t.push(x);
        });
      }
      if (r.field === "rvSymbol") {
        const i = {
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          isStatic: !0,
          maxWidth: 42,
          cellRenderer: (d) => {
            const f = e.geo.layer.getLayer(d.data.rvUid);
            if (f === void 0) return;
            const x = document.createElement("span"), S = d.data[ye.value];
            return f.getIcon(S).then((g) => {
              x.innerHTML = g;
            }), x;
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
          },
          preventExport: !0
        };
        t.push(i);
      }
    }, yt = () => !Object.values(be.value).every((r) => r === void 0), bt = (r) => {
      const t = be.value[r.data.rvUid];
      return t === void 0 || t.includes(r.data[ye.value]);
    }, Y = async () => {
      const r = new St(), t = we.value.slice().map((i) => i.getPromise());
      we.value.push(r), await Promise.all(t), await Promise.all(
        G.value.map(async (i) => {
          i && i.visibility ? await i.getFilterOIDs(
            [Le.GRID],
            c.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((d) => {
            be.value[i.uid] = d;
          }) : be.value[i.uid] = [];
        })
      ), A.value.onFilterChanged(), r.resolveMe();
      const v = we.value.indexOf(r);
      v === -1 ? console.error("Grid could not find filter blocker in filter queue") : we.value.splice(v, 1);
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
      const t = A.value.getFilterModel(), v = [];
      if (Object.keys(t).forEach((i) => {
        const d = Se(r, i);
        d ? v.push(Ct(d.origAttr, t[i])) : v.push("1=2");
      }), c.value.state.searchFilter && c.value.state.searchFilter.length > 0) {
        const i = Lt(r) || "1=2";
        i.length > 0 && v.push(`(${i})`);
      }
      return v.join(" AND ");
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
          const v = t.filter.replace(/'/g, /''/);
          if (v !== "") {
            const i = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let d = v, f = "", x = i.exec(v), S = 0;
            for (; x; )
              f = f + v.substr(S, x.index - S) + x[0].slice(-1), S = x.index + 2, d = v.substr(x.index + 2), x = i.exec(v);
            f = f + d, f = f.replace(/%/g, "ௌ%"), f = f.replace(/_/g, "ௌ_"), f = `*${f}`;
            const g = `UPPER(${r}) LIKE '${f.replace(/\*/g, "%").toUpperCase()}%'`;
            return g.includes("ௌ%") || g.includes("ௌ_") ? `${g} ESCAPE 'ௌ'` : g;
          }
          break;
        }
        case "date": {
          const v = new Date(t.dateFrom ?? 0), i = new Date(t.dateTo ?? 864e13), d = v ? `${v.getMonth() + 1}/${v.getDate()}/${v.getFullYear()}` : void 0, f = i ? `${i.getMonth() + 1}/${i.getDate()}/${i.getFullYear()}` : void 0;
          switch (t.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${r} >= DATE '${d}'`;
            case "lessThan":
              return `${r} <= DATE '${d}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${r} >= DATE '${d}' AND ${r} <= DATE '${f}'`;
          }
        }
      }
    }, Lt = (r) => {
      const v = c.value.state.searchFilter.replace(/'/g, "''").split(" "), i = A.value.rowModel.rowsToDisplay, d = I.value.getAllDisplayedColumns().filter(
        (x) => (x.colDef.filter === "agTextColumnFilter" || x.colDef.filter === "agNumberColumnFilter") && Se(r, x.getColId())
      ), f = [];
      return i.forEach((x) => {
        let S = !0, g = "";
        for (const $ of v) {
          const pe = new RegExp(`.*${$.split(" ").join(".*").toUpperCase()}`), qe = `%${$.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let ce = !1;
          for (const De of d) {
            const me = De.getColId(), Ce = Se(r, De.getColId())?.origAttr, We = De.getColDef();
            if (x.data[me] === void 0)
              ce = !1;
            else if (We.filter === "agTextColumnFilter") {
              const Z = x.data[me] === null ? null : x.data[me].toString();
              if (Z !== null && pe.test(Z.toUpperCase())) {
                g ? g = g.concat(" AND ", `(UPPER(${Ce}) LIKE '${qe}%')`) : g = g.concat("(", `(UPPER(${Ce}) LIKE '${qe}%')`), f.includes(g + ")") ? ce = !1 : ce = !0;
                break;
              }
            } else if (We.filter === "agNumberColumnFilter") {
              const Z = x.data[me] === null ? null : x.data[me];
              if (Z !== null && pe.test(Z)) {
                g ? g = g.concat(" AND ", `(${Ce} = ${Z})`) : g = g.concat("(", `(${Ce} = ${Z})`), ce = !f.includes(g + ")");
                break;
              }
            }
          }
          if (!ce) {
            S = !1;
            break;
          }
        }
        S && f.push(g + ")");
      }), f.join(" OR ");
    }, _t = (r) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(r.key) && r.stopPropagation();
    }, ze = () => {
      Ue(), L.panel.isOpen && L.panel.close();
    }, Ue = () => {
      (j.value || te.value) && G.value.forEach((r) => {
        r.abortAttributeLoad(), r.clearFeatureCache();
      });
    }, B = U(() => {
      const r = G.value.map((i) => i.visibility && i.canModifyLayer && i.mapLayer), t = G.value.some(
        (i) => i.visibility && i.mapLayer && !i.canModifyLayer
      ), v = r.some(Boolean);
      return t && v ? "partial" : v ? "enabled" : "disabled";
    }), Et = U(
      () => G.value.some((r) => r.isLoaded && r.supportsFeatures && r.mapLayer)
    ), Se = (r, t) => de.value[r].find((v) => (v.mappedAttr ?? v.origAttr) === t), Oe = () => {
      const r = G.value.filter(
        (t) => t && t.supportsFeatures && t.isLoaded
      );
      r.length === 0 && ze(), ke.value = r.reduce((t, { featureCount: v }) => t + v, 0), ie.value = new Array(G.value.length).fill(0), r.forEach((t, v) => ie.value[v] += t.downloadedAttributes()), r.forEach((t, v) => {
        he.value.push(
          Ie(
            () => t.downloadedAttributes(),
            (i) => {
              ie.value[v] = i;
            }
          )
        );
      }), Promise.all(r.map((t) => t.loadPromise())).then(() => {
        const t = r.map((v) => Ge(v).getTabularAttributes().then((i) => {
          const d = c?.value?.state?.state;
          if (d?.columns && d.columnMetadata?.exclusiveColumns) {
            const f = d.columns.map((x) => x.field);
            i.columns = i.columns.filter(
              (x) => f.includes(x.data)
            );
          }
          return i;
        }));
        Promise.all(t).then((v) => {
          if (r.every((d) => d.attribLoadAborted())) {
            j.value = !1;
            return;
          }
          const i = {
            columns: [],
            rows: [],
            fields: [],
            oidField: ""
          };
          v.forEach((d, f) => {
            const x = [], S = r[f].id;
            d.columns.forEach((g) => {
              c.value.fieldMap && c.value.fieldMap[g.data] ? (x.push({
                origAttr: g.data,
                mappedAttr: c.value.fieldMap[g.data]
              }), g.data = c.value.fieldMap[g.data], g.title = g.data) : x.push({
                origAttr: g.data,
                mappedAttr: void 0
              }), i.columns.map(($) => $.data).includes(g.data) || i.columns.push(g);
            }), i.rows = i.rows.concat(
              d.rows.map((g) => {
                if (c.value.fieldMap)
                  for (const [$, pe] of Object.entries(c.value.fieldMap))
                    g[$] !== void 0 && g[pe] === void 0 && (g[pe] = g[$], delete g[$]);
                return g;
              })
            );
            for (let g = 0; g < i.rows.length; g++)
              for (const [$] of Object.entries(i.rows[g]))
                e.ui.isPlainText(i.rows[g][$]) && (i.rows[g][$] = e.ui.escapeHtml(i.rows[g][$]));
            i.fields = i.fields.concat(
              d.fields.map((g) => ((!e.ui.exposeOids && g.type === "oid" || !e.ui.exposeMeasurements && (g.name.toLowerCase() === "shape_length" || g.name.toLowerCase() === "shape_area")) && Fe.value.add(g.name), {
                name: c.value.fieldMap && c.value.fieldMap[g.name] ? c.value.fieldMap[g.name] : g.name,
                type: g.type,
                alias: g.alias ?? void 0,
                length: g.length ?? void 0
              }))
            ), i.oidField = c.value.fieldMap && c.value.fieldMap[d.oidField] ? c.value.fieldMap[d.oidField] : d.oidField, de.value[S] = x;
          }), ye.value = i.oidField, ["rvRowIndex", "rvInteractive", "rvSymbol", ...i.columns].forEach((d) => {
            c.value.state?.columns[d.data] === void 0 && (c.value.state.columns[d.data] = new Vt({
              field: d.data,
              title: d.title
            })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && Fe.value.has(d.data) && (c.value.state.columns[d.data].visible = !1);
            const f = c.value.state?.columns[d.data], x = {
              headerName: f.title ?? d.title,
              headerComponent: "agColumnHeader",
              headerComponentParams: {
                sort: f.sort
              },
              field: d.data ?? d,
              isSelector: f.filter.type === "selector",
              sortable: !0,
              lockPosition: !0,
              filterParams: {},
              floatingFilter: c.value.state.colFilter && f.searchable,
              hide: !f?.visible,
              minWidth: f.width,
              maxWidth: f.width ?? 400,
              cellRenderer: (g) => g.value,
              suppressHeaderKeyboardEvent: (g) => {
                const $ = g.event;
                return g.headerRowIndex === 0 && ($.key === "Enter" || !$.target.classList.contains("ag-header-cell") && $.key === "Tab");
              }
            }, S = i.fields.find((g) => g.name === x.field);
            d === "rvRowIndex" || d === "rvSymbol" || d === "rvInteractive" ? ht(x, le.value, c.value.state) : (n.indexOf(S.type) > -1 ? (ft(x, c.value.state), x.filter = "agNumberColumnFilter", x.autoHeight = !0, x.cellRenderer = f.template === "" ? Ve : e.component(f.template), x.cellRendererParams = {
              type: "number"
            }) : S.type === re.DATE ? (mt(x, c.value.state), x.filter = "agDateColumnFilter", x.autoHeight = !0, x.minWidth = 400, x.cellRenderer = f.template === "" ? Ve : e.component(f.template), x.cellRendererParams = {
              type: "date"
            }) : S.type === re.STRING && (x.isSelector ? vt(x, i.rows, c.value.state) : gt(x, c.value.state), x.filter = "agTextColumnFilter", x.autoHeight = !0, x.cellRenderer = f.template === "" ? Ve : e.component(f.template), x.cellRendererParams = {
              type: "string"
            }), le.value.push(x));
          }), ue.value = Ge(i.rows), le.value = Ge(le.value), $e(), j.value = !1;
        }).catch((v) => {
          console.error(v), te.value = !0, j.value = !1;
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
      c.value = a.grids[L.gridId], j.value = !0, y(), q.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, ee.value = {
        agColumnHeader: Fl,
        numberFloatingFilter: tl,
        textFloatingFilter: sl,
        selectorFloatingFilter: pl,
        dateFloatingFilter: hl,
        clearFloatingFilter: bl
      }, K.value = {
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
        tabToNextCell: Yt,
        // tab vertically instead of horizontally
        tabToNextHeader: Wt,
        onModelUpdated: Ze(300, () => {
          I.value.autoSizeAllColumns(), xe();
        })
      }, Oe(), B.value === "partial" && e.notify.show(Ye.WARNING, e.$i18n.t("layer.filterwarning")), he.value.push(
        Ie(w, () => {
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
      Ue(), W.value.forEach((r) => e.event.off(r)), he.value.forEach((r) => r()), Ae.value?.removeAccessibilityListeners(), Ae.value?.removeScrollListeners(), m.value?.removeEventListener("keyup", Ke), m.value?.removeEventListener("blur", je);
    }), (r, t) => {
      const v = Pe("dropdown-menu"), i = O("truncate"), d = O("tippy");
      return E(), k("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: p
      }, [
        F(o("div", null, [
          o("p", Ul, T(h(b)("grid.splash.error")), 1)
        ], 512), [
          [ae, te.value]
        ]),
        F(o("div", Ol, [
          o("div", Kl, [
            o("span", jl, T(ie.value.reduce((f, x) => f + x, 0)), 1),
            t[12] || (t[12] = o("svg", {
              class: "stroke-black stroke-1",
              height: "50",
              width: "25"
            }, [
              o("line", {
                x1: "0",
                y1: "50",
                x2: "25",
                y2: "0"
              })
            ], -1)),
            o("span", ql, T(ke.value), 1)
          ]),
          o("div", Wl, [
            o("span", Yl, T(ie.value.reduce((f, x) => f + x, 0) < ke.value ? h(b)("grid.splash.loading") : h(b)("grid.splash.building")), 1)
          ]),
          o("div", null, [
            o("button", {
              type: "button",
              onClick: ze,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": h(b)("grid.splash.cancel")
            }, T(h(b)("grid.splash.cancel")), 9, Zl)
          ])
        ], 512), [
          [ae, j.value && !te.value]
        ]),
        F(o("div", Ql, [
          o("div", Xl, [
            F((E(), k("div", Jl, [
              H(T(Me.value), 1)
            ])), [
              [ae, Me.value !== ""],
              [i]
            ]),
            F((E(), k("div", ea, [
              H(T(h(b)("grid.filters.label.info", {
                range: q.value.visibleRows !== 0 ? `${q.value.firstRow} - ${q.value.lastRow}` : "0",
                total: q.value.visibleRows
              })) + " ", 1),
              q.value.visibleRows !== ue.value.length ? (E(), k("span", ta, T(h(b)("grid.filters.label.filtered", {
                max: ue.value.length
              })), 1)) : R("", !0)
            ])), [
              [i]
            ])
          ]),
          o("div", la, [
            F(o("div", aa, [
              F(o("input", {
                onInput: t[0] || (t[0] = (f) => Te()),
                onKeypress: t[1] || (t[1] = V(P(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: t[2] || (t[2] = V((f) => {
                  h(l).mobileView && f?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": t[3] || (t[3] = (f) => c.value.state.searchFilter = f),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": h(b)("grid.filters.label.global"),
                placeholder: h(b)("grid.filters.label.global")
              }, null, 40, ra), [
                [ne, c.value.state.searchFilter]
              ]),
              o("div", sa, [
                c.value.state.searchFilter.length < 3 ? (E(), k("svg", na, t[13] || (t[13] = [
                  o("g", { id: "search_cache224" }, [
                    o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (E(), k("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
                  onClick: t[4] || (t[4] = (f) => He()),
                  "aria-label": h(b)("grid.search.clear")
                }, t[14] || (t[14] = [
                  o("svg", {
                    "data-v-486a0302": "",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 352 512",
                    class: "fill-current w-18 h-18 mt-2"
                  }, [
                    o("path", {
                      "data-v-486a0302": "",
                      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    })
                  ], -1)
                ]), 8, oa))
              ])
            ], 512), [
              [ae, c.value.state.search]
            ]),
            o("div", ia, [
              Ee(Kt, {
                columnApi: I.value,
                columnDefs: le.value,
                systemCols: Fe.value,
                onRefreshHeaders: t[5] || (t[5] = (f) => A.value.refreshHeader())
              }, null, 8, ["columnApi", "columnDefs", "systemCols"]),
              F((E(), k("button", {
                type: "button",
                class: "grid-clearall p-4 h-40 text-gray-500 hover:text-black",
                onClick: t[6] || (t[6] = (f) => it()),
                content: h(b)("grid.clearAll"),
                "aria-label": h(b)("grid.clearAll")
              }, t[15] || (t[15] = [
                o("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  width: "24px",
                  viewBox: "0 0 24 24",
                  class: "inline fill-current"
                }, [
                  o("g", { id: "filter_cache958" }, [
                    o("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
                  ])
                ], -1)
              ]), 8, ua)), [
                [d, {
                  placement: "bottom"
                }]
              ]),
              Ee(v, {
                class: "h-40 w-40",
                position: "bottom-end",
                tooltip: h(b)("panels.controls.optionsMenu"),
                centered: !1
              }, {
                header: se(() => t[16] || (t[16] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    class: "fill-current m-8 w-24 h-24"
                  }, [
                    o("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
                  ], -1)
                ])),
                default: se(() => [
                  o("a", {
                    href: "javascript:;",
                    class: z(["flex leading-snug items-center w-256", {
                      hover: B.value !== "disabled" ? "none" : "text-black",
                      disabled: B.value === "disabled"
                    }]),
                    onClick: t[7] || (t[7] = (f) => B.value !== "disabled" && wt()),
                    role: "button",
                    "aria-label": h(b)("grid.label.filters.apply")
                  }, [
                    o("div", pa, [
                      t[18] || (t[18] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      H(" " + T(h(b)("grid.label.filters.apply")) + " ", 1),
                      B.value !== "disabled" && c.value.state.applyToMap ? (E(), k("svg", ca, t[17] || (t[17] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 10, da),
                  o("a", {
                    href: "javascript:;",
                    class: "flex leading-snug items-center w-256 hover:text-black",
                    onClick: t[8] || (t[8] = (f) => dt()),
                    role: "button",
                    "aria-label": h(b)("grid.label.filters.show")
                  }, [
                    o("div", va, [
                      t[20] || (t[20] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      H(" " + T(h(b)("grid.label.filters.show")) + " ", 1),
                      c.value.state.colFilter ? (E(), k("svg", fa, t[19] || (t[19] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 8, ma),
                  o("a", {
                    href: "javascript:;",
                    class: z(["flex leading-snug items-center w-256", {
                      hover: B.value !== "disabled" ? "none" : "text-black",
                      disabled: B.value === "disabled"
                    }]),
                    onClick: t[9] || (t[9] = (f) => B.value !== "disabled" && ut()),
                    role: "button",
                    "aria-label": h(b)("grid.filters.label.extent")
                  }, [
                    o("div", ha, [
                      t[22] || (t[22] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      H(" " + T(h(b)("grid.filters.label.extent")) + " ", 1),
                      B.value !== "disabled" && c.value.state.filterByExtent ? (E(), k("svg", ya, t[21] || (t[21] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 10, ga),
                  o("a", {
                    href: "javascript:;",
                    class: z(["flex leading-snug items-center w-256", { hover: "text-black" }]),
                    onClick: t[10] || (t[10] = (f) => pt()),
                    role: "button",
                    "aria-label": h(b)("grid.label.pinColumns")
                  }, [
                    u.value ? (E(), k("svg", wa, t[23] || (t[23] = [
                      o("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                    ]))) : u.value ? R("", !0) : (E(), k("svg", xa, t[24] || (t[24] = [
                      o("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                    ]))),
                    H(" " + T(h(b)("grid.label.pinColumns")) + " ", 1),
                    u.value ? (E(), k("svg", Ca, t[25] || (t[25] = [
                      o("g", { id: "done" }, [
                        o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                      ], -1)
                    ]))) : R("", !0)
                  ], 8, ba),
                  o("a", {
                    href: "javascript:;",
                    class: z(["flex leading-snug items-center w-256", { hover: "text-black" }]),
                    onClick: t[11] || (t[11] = (f) => ct()),
                    role: "button",
                    "aria-label": h(b)("grid.label.export")
                  }, [
                    t[26] || (t[26] = o("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                    }, [
                      o("g", null, [
                        o("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })
                      ])
                    ], -1)),
                    H(" " + T(h(b)("grid.label.export")), 1)
                  ], 8, La)
                ]),
                _: 1
              }, 8, ["tooltip"])
            ])
          ])
        ], 512), [
          [ae, !j.value && !te.value]
        ]),
        M.value ? F((E(), k("div", {
          key: 0,
          content: h(b)("grid.cells.controls"),
          class: "w-full h-full flex flex-col",
          ref_key: "gridContainer",
          ref: m,
          tabIndex: "-1"
        }, [
          Ee(h(It), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: "true",
            accentedSort: "true",
            localeText: h(w) === "en" ? h(Pt) : h(Ht),
            gridOptions: K.value,
            columnDefs: le.value,
            rowData: ue.value,
            components: ee.value,
            onGridReady: nt,
            onKeydown: _t,
            onFirstDataRendered: ot,
            onCellKeyPress: h(at),
            doesExternalFilterPass: bt,
            isExternalFilterPresent: yt
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, _a)), [
          [d, {
            placement: "top",
            trigger: "manual",
            touch: !1
          }],
          [ae, !j.value && !te.value]
        ]) : R("", !0)
      ], 512);
    };
  }
}), ka = /* @__PURE__ */ ge(Ea, [["__scopeId", "data-v-7656f3bd"]]), Ma = /* @__PURE__ */ D({
  __name: "screen",
  props: {
    panel: {
      type: tt,
      required: !0
    }
  },
  setup(_) {
    const n = lt(), { t: e } = N(), a = U(() => n.currentId);
    return (l, s) => {
      const u = Pe("panel-screen");
      return E(), Xe(u, { panel: _.panel }, {
        header: se(() => [
          H(T(h(e)("grid.title")), 1)
        ]),
        content: se(() => [
          Ee(ka, {
            class: "rv-grid",
            gridId: a.value,
            panel: _.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), hr = /* @__PURE__ */ ge(Ma, [["__scopeId", "data-v-904e67ef"]]);
export {
  hr as default
};
