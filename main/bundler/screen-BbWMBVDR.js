import { defineComponent as D, inject as oe, resolveComponent as Ve, openBlock as E, createBlock as Qe, unref as h, withCtx as se, createElementVNode as o, createElementBlock as k, Fragment as Xe, renderList as Je, createTextVNode as H, toDisplayString as T, createCommentVNode as R, ref as C, onBeforeMount as ve, withDirectives as F, normalizeClass as z, withModifiers as V, withKeys as P, vModelText as ne, vModelSelect as Et, onMounted as X, nextTick as Le, onBeforeUnmount as J, resolveDirective as U, computed as O, useTemplateRef as kt, watch as De, vShow as ae, createVNode as _e, getCurrentInstance as Mt, markRaw as Ie } from "vue";
import "tiny-emitter";
import { a as fe, _ as ge, G as Q, M as At, N as Ft, L as Tt, O as $t, Q as et, V as re, i as tt, W as We, X as Ce, Y as Rt } from "./main-lcO-efBh.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
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
import "deepmerge";
import "terraformer";
import "proj4";
import { debounce as Ye } from "throttle-debounce";
import "pinia";
import { useI18n as N } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import St from "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { AgGridVue as Dt } from "ag-grid-vue3";
import { T as It, C as Gt } from "./table-state-manager-CYJ24Yv5.js";
import { AG_GRID_LOCALE_EN as Vt, AG_GRID_LOCALE_FR as Pt } from "@ag-grid-community/locale";
import { GridApi as Ht, ColumnApi as Nt } from "ag-grid-community";
const Bt = ["onClick"], zt = { class: "md-icon-small inline" }, Ot = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, Ut = /* @__PURE__ */ D({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    columnApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(_) {
    const n = oe("iApi"), { t: e } = N();
    return (a, l) => {
      const r = Ve("dropdown-menu");
      return E(), Qe(r, {
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
          (E(!0), k(Xe, null, Je(_.columnDefs.filter(
            (i) => i.headerName && i.headerName.length > 0 && !(!h(n).ui.exposeOids && _.systemCols?.has(i.headerName)) && !(!h(n).ui.exposeMeasurements && (_.systemCols?.has(i.headerName) || _.systemCols?.has(i.field)))
          ), (i) => (E(), k("a", {
            key: i.headerName,
            onClick: (d) => {
              _.columnApi?.setColumnVisible(i.field, i.hide), i.hide = !i.hide, a.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center w-256"
          }, [
            o("div", zt, [
              H(T(i.headerName) + " ", 1),
              i.hide ? R("", !0) : (E(), k("svg", Ot, l[1] || (l[1] = [
                o("g", { id: "done" }, [
                  o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ])))
            ])
          ], 8, Bt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), Kt = ".ag-root", jt = ".ag-header-viewport .ag-header-row";
class Ze {
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
    this.element = n, this.agGridApi = e, this.agColumnApi = a, this.agGrid = this.element.querySelector(Kt), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(jt)
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
      e.addEventListener("keydown", (r) => {
        this.cellKeydownHandler(r, e, l);
      }), e.addEventListener("blur", (r) => {
        this.cellBlurHandler(r, e, l);
      }), l[l.length - 1].addEventListener("keydown", (r) => {
        this.cellButtonTabHandler(r, e, l, !1);
      }), l[0].addEventListener("keydown", (r) => {
        this.cellButtonTabHandler(r, e, l, !0);
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
      e.removeEventListener("keydown", (r) => {
        this.cellKeydownHandler(r, e, l);
      }), e.removeEventListener("blur", (r) => {
        this.cellBlurHandler(r, e, l);
      }), l[l.length - 1].removeEventListener("keydown", (r) => {
        this.cellButtonTabHandler(r, e, l, !1);
      }), l[0].removeEventListener("keydown", (r) => {
        this.cellButtonTabHandler(r, e, l, !0);
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
    n.key === "Tab" && (l && n.shiftKey || !l && !n.shiftKey) && (n.preventDefault(), e.focus(), a.forEach((r) => {
      r.setAttribute("tabindex", "-1");
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
    const r = (d) => {
      const v = d.clientX - l;
      e.scrollLeft = a - v;
    }, i = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", r), this.agGrid.removeEventListener("mouseup", i), this.agGrid.removeEventListener("mouseleave", i);
    };
    this.agGrid.addEventListener("mousemove", r), this.agGrid.addEventListener("mouseup", i), this.agGrid.addEventListener("mouseleave", i);
  }
}
function qt(_) {
  const n = _.previousHeaderPosition.column, e = _.previousHeaderPosition.headerRowIndex;
  let a = _.backwards ? e - 1 : e + 1;
  return a === -1 ? null : (a === _.headerRowCount && (a = -1), { headerRowIndex: a, column: n });
}
function Wt(_) {
  return _.backwards ? { column: _.previousCellPosition.column, rowIndex: -1 } : null;
}
const Yt = { class: "h-full flex items-center justify-center" }, Zt = ["placeholder", "aria-label", "disabled"], Qt = ["placeholder", "aria-label", "disabled"], Xt = {
  methods: {
    onParentModelChanged() {
    }
  }
}, Jt = /* @__PURE__ */ D({
  ...Xt,
  __name: "custom-number-filter",
  props: ["params"],
  setup(_) {
    const n = fe(), { t: e } = N(), a = _, l = C(""), r = C(""), i = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), d = () => {
      l.value = l.value !== "" && !isNaN(l.value) ? l.value : null, a.params.parentFilterInstance((x) => {
        b(x), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
      });
    }, v = () => {
      r.value = r.value !== "" && !isNaN(r.value) ? r.value : null, a.params.parentFilterInstance((x) => {
        b(x), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, r.value, "max");
      });
    }, b = (x) => {
      (isNaN(l.value) || l.value === null) && (l.value = ""), (isNaN(r.value) || r.value === null) && (r.value = ""), r.value !== "" && l.value !== "" ? x.setModel({
        filterType: "number",
        type: "inRange",
        filter: l.value,
        filterTo: r.value
      }) : l.value === "" ? x.setModel({
        filterType: "number",
        type: "lessThanOrEqual",
        filter: r.value
      }) : r.value === "" ? x.setModel({
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: l.value
      }) : x.setModel(null), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min"), r.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max"), d(), v();
    }), (x, y) => (E(), k("div", Yt, [
      F(o("input", {
        class: z(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": i.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[0] || (y[0] = (L) => l.value = L),
        onInput: y[1] || (y[1] = (L) => d()),
        onMousedown: y[2] || (y[2] = V(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = P((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: h(e)("grid.filters.number.min"),
        "aria-label": h(e)("grid.filters.number.min"),
        disabled: i.value
      }, null, 42, Zt), [
        [ne, l.value]
      ]),
      y[10] || (y[10] = o("span", { class: "w-12" }, null, -1)),
      F(o("input", {
        class: z(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": i.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": y[5] || (y[5] = (L) => r.value = L),
        onInput: y[6] || (y[6] = (L) => v()),
        onMousedown: y[7] || (y[7] = V(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = P((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: h(e)("grid.filters.number.max"),
        "aria-label": h(e)("grid.filters.number.max"),
        disabled: i.value
      }, null, 42, Qt), [
        [ne, r.value]
      ])
    ]));
  }
}), el = /* @__PURE__ */ ge(Jt, [["__scopeId", "data-v-6583eadd"]]), tl = { class: "h-full flex items-center justify-center" }, ll = ["placeholder", "aria-label", "disabled"], al = {
  methods: {
    onParentModelChanged() {
    }
  }
}, rl = /* @__PURE__ */ D({
  ...al,
  __name: "custom-text-filter",
  props: ["params"],
  setup(_) {
    const n = fe(), { t: e } = N(), a = _, l = C(""), r = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), i = () => {
      a.params.parentFilterInstance((d) => {
        l.value = l.value ? l.value : "", d.setModel({
          filterType: "text",
          type: "contains",
          filter: l.value
        }), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value), a.params.api.onFilterChanged();
      });
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field), i();
    }), (d, v) => (E(), k("div", tl, [
      F(o("input", {
        class: z(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": r.value
        }]),
        type: "text",
        onInput: v[0] || (v[0] = (b) => i()),
        "onUpdate:modelValue": v[1] || (v[1] = (b) => l.value = b),
        onMousedown: v[2] || (v[2] = V(() => {
        }, ["stop"])),
        onKeypress: v[3] || (v[3] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: v[4] || (v[4] = P((b) => {
          h(n).mobileView && b.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: h(e)("grid.filters.column.label.text", [_.params.column.colDef.headerName]),
        "aria-label": h(e)("grid.filters.column.label.text", [_.params.column.colDef.headerName]),
        disabled: r.value
      }, null, 42, ll), [
        [ne, l.value]
      ])
    ]));
  }
}), sl = { class: "h-full flex items-center justify-center" }, nl = ["aria-label", "disabled"], ol = ["value"], il = {
  methods: {
    onParentModelChanged() {
    }
  }
}, ul = /* @__PURE__ */ D({
  ...il,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(_) {
    const n = _, e = C(""), a = C([]), l = C(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), r = () => {
      e.value = e.value ? e.value : "", n.params.parentFilterInstance((i) => {
        e.value === "..." ? (i.setModel(null), e.value = "") : i.setModel({
          filterType: "text",
          type: "contains",
          filter: e.value
        }), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, e.value), n.params.api.onFilterChanged();
      });
    };
    return ve(() => {
      e.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field);
      let i = n.params.rowData;
      i = i.map((d) => d[n.params.column.colId]), a.value = i.filter((d, v) => i.indexOf(d) === v), a.value.unshift("..."), r();
    }), (i, d) => (E(), k("div", sl, [
      F(o("select", {
        class: z(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": l.value
        }]),
        "onUpdate:modelValue": d[0] || (d[0] = (v) => e.value = v),
        onChange: d[1] || (d[1] = (v) => r()),
        onMousedown: d[2] || (d[2] = V(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: l.value
      }, [
        (E(!0), k(Xe, null, Je(a.value, (v) => (E(), k("option", {
          value: v,
          key: v
        }, T(v), 9, ol))), 128))
      ], 42, nl), [
        [Et, e.value]
      ])
    ]));
  }
}), dl = /* @__PURE__ */ ge(ul, [["__scopeId", "data-v-f1c7aa13"]]), pl = { class: "h-full flex items-center justify-center w-full" }, cl = ["placeholder", "aria-label", "disabled"], ml = ["placeholder", "aria-label", "disabled"], vl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, fl = /* @__PURE__ */ D({
  ...vl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(_) {
    const n = fe(), { t: e } = N(), a = _, l = C(""), r = C(""), i = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), d = () => {
      a.params.parentFilterInstance((x) => {
        b(x), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
      });
    }, v = () => {
      a.params.parentFilterInstance((x) => {
        b(x), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, r.value, "max");
      });
    }, b = (x) => {
      r.value === "" && l.value === "" ? x.setModel(null) : r.value !== "" && l.value !== "" ? x.setModel({
        filterType: "date",
        type: "inRange",
        dateFrom: l.value,
        dateTo: r.value
      }) : l.value === "" ? x.setModel({
        filterType: "date",
        type: "lessThan",
        dateFrom: r.value
      }) : r.value === "" && x.setModel({
        filterType: "date",
        type: "greaterThan",
        dateFrom: l.value
      }), a.params.api.onFilterChanged();
    };
    return ve(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min") || "", r.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max") || "", d(), v();
    }), (x, y) => (E(), k("div", pl, [
      F(o("input", {
        class: z(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": i.value
        }]),
        type: "date",
        placeholder: h(e)("grid.filters.date.min"),
        "aria-label": h(e)("grid.filters.date.min"),
        "onUpdate:modelValue": y[0] || (y[0] = (L) => l.value = L),
        onInput: y[1] || (y[1] = (L) => d()),
        onMousedown: y[2] || (y[2] = V(() => {
        }, ["stop"])),
        onKeypress: y[3] || (y[3] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[4] || (y[4] = P((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: i.value
      }, null, 42, cl), [
        [ne, l.value]
      ]),
      y[10] || (y[10] = o("span", { class: "w-12" }, null, -1)),
      F(o("input", {
        class: z(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": i.value
        }]),
        type: "date",
        placeholder: h(e)("grid.filters.date.max"),
        "aria-label": h(e)("grid.filters.date.max"),
        "onUpdate:modelValue": y[5] || (y[5] = (L) => r.value = L),
        onInput: y[6] || (y[6] = (L) => v()),
        onMousedown: y[7] || (y[7] = V(() => {
        }, ["stop"])),
        onKeypress: y[8] || (y[8] = P(V(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: y[9] || (y[9] = P((L) => {
          h(n).mobileView && L.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: i.value
      }, null, 42, ml), [
        [ne, r.value]
      ])
    ]));
  }
}), gl = /* @__PURE__ */ ge(fl, [["__scopeId", "data-v-9db9be0a"]]), hl = ["content", "disabled", "aria-label"], yl = /* @__PURE__ */ D({
  __name: "clear-filter",
  props: ["params"],
  setup(_) {
    const n = _, { t: e } = N(), a = C(), l = () => n.params.clearFilters();
    return X(async () => {
      await Le();
      const r = a.value?.closest(".ag-header-cell"), i = r.closest(".ag-pinned-left-header");
      r.addEventListener("keydown", async (d) => {
        d.key === "Enter" && (d.stopPropagation(), l(), await Le(), i.querySelector(".ag-header-cell.ag-floating-filter").focus());
      }), r.addEventListener("focus", () => {
        a.value._tippy.show();
      }), r.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      const r = a.value?.closest(".ag-header-cell"), i = r.closest(".ag-pinned-left-header");
      r.removeEventListener("keydown", async (d) => {
        d.key === "Enter" && (d.stopPropagation(), l(), await Le(), i.querySelector(".ag-header-cell.ag-floating-filter").focus());
      }), r.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), r.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (r, i) => {
      const d = U("tippy");
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
      }, i[0] || (i[0] = [
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
      ]), 8, hl)), [
        [d, { placement: "bottom" }]
      ]);
    };
  }
}), bl = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, wl = ["content", "aria-label"], xl = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, Cl = {
  key: 2,
  class: "flex"
}, Ll = {
  key: 0,
  class: "w-24 inline-block"
}, _l = {
  key: 1,
  class: "customSortDownLabel"
}, El = {
  key: 2,
  class: "customSortUpLabel"
}, kl = ["content", "aria-label", "disabled"], Ml = ["content", "aria-label", "disabled"], Al = /* @__PURE__ */ D({
  __name: "custom-header",
  props: ["params"],
  setup(_) {
    const { t: n } = N(), e = _, a = C(), l = C(0), r = C(!1), i = C(!1), d = C(!1), v = C(null), b = () => {
      const c = v.value.getAllDisplayedColumns(), M = c.indexOf(e.params.column);
      i.value = M > 3 && !c[M - 1].colDef.isStatic, d.value = M < c.length - 1 && !c[M + 1].colDef.isStatic;
    }, x = () => {
      const c = v.value.getAllDisplayedColumns(), M = v.value.getAllGridColumns(), A = M.indexOf(c[c.indexOf(e.params.column) - 1]);
      i.value && (v.value.moveColumn(e.params.column, A), e.params.api.ensureColumnVisible(M[A]), a.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, y = () => {
      const c = v.value.getAllDisplayedColumns(), M = v.value.getAllGridColumns(), A = M.indexOf(c[c.indexOf(e.params.column) + 1]);
      d.value && (v.value.moveColumn(e.params.column, A), e.params.api.ensureColumnVisible(M[A]));
    }, L = (c) => {
      l.value = (l.value + 1) % 3, l.value === 1 ? e.params.setSort("asc", c.shiftKey) : l.value === 2 ? e.params.setSort("desc", c.shiftKey) : e.params.setSort("none", c.shiftKey);
    };
    return X(() => {
      r.value = e.params.column.colDef.sortable, v.value = e.params.columnApi, e.params.sort === "asc" ? (l.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (l.value = 2, e.params.setSort("desc")), b(), e.params.column.addEventListener("leftChanged", () => {
        b();
      });
    }), J(() => {
      e.params.column.removeEventListener("leftChanged", () => {
        b();
      });
    }), (c, M) => {
      const A = U("truncate"), K = U("tippy");
      return E(), k("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: a
      }, [
        r.value ? (E(), k("div", bl, [
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
          ], 8, wl)), [
            [K, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : F((E(), k("span", xl, [
          H(T(_.params.displayName), 1)
        ])), [
          [A]
        ]),
        r.value ? (E(), k("div", Cl, [
          _.params.enableSorting && l.value === 0 ? (E(), k("span", Ll)) : R("", !0),
          _.params.enableSorting && l.value === 1 ? (E(), k("span", _l, M[3] || (M[3] = [
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
          _.params.enableSorting && l.value === 2 ? (E(), k("span", El, M[4] || (M[4] = [
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
            onClick: M[1] || (M[1] = (ee) => x()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !i.value
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
          ]), 8, kl)), [
            [K, { placement: "top" }]
          ]),
          F((E(), k("button", {
            type: "button",
            content: h(n)("grid.header.reorder.right"),
            "aria-label": h(n)("grid.header.reorder.right"),
            onClick: M[2] || (M[2] = (ee) => y()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !d.value
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
          ]), 8, Ml)), [
            [K, { placement: "top" }]
          ])
        ])) : R("", !0)
      ], 512);
    };
  }
}), Fl = ["content", "aria-label"], Tl = /* @__PURE__ */ D({
  __name: "details-button-renderer",
  props: ["params"],
  setup(_) {
    const n = _, { t: e } = N(), a = oe("iApi"), l = C(), r = async () => {
      const i = n.params.data, d = i.rvUid, v = a.geo.layer.getLayer(d), b = v.oidField, y = n.params.layerCols[v.id].find(
        (c) => c.origAttr === b
      )?.mappedAttr || b, L = await v.getGraphic(i[y], {
        getAttribs: !0
      });
      a.event.emit(
        Q.DETAILS_TOGGLE,
        {
          data: L.attributes,
          uid: d,
          format: At.ESRI
        },
        !0
      ), n.params.isTeleport && a.scrollToInstance();
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (i) => {
        i.key === "Enter" && r();
      }), n.params.eGridCell.addEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (i) => {
        i.key === "Enter" && r();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), (i, d) => {
      const v = U("tippy");
      return F((E(), k("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: h(e)("grid.cells.details"),
        onClick: r,
        tabindex: "-1",
        ref_key: "el",
        ref: l,
        "aria-label": h(e)("grid.cells.details")
      }, d[0] || (d[0] = [
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
      ]), 8, Fl)), [
        [v, { placement: "top" }]
      ]);
    };
  }
}), $l = ["content", "aria-label"], Rl = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Sl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Dl = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, Il = ["innerHTML"], Gl = /* @__PURE__ */ D({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(_) {
    const n = C("none"), e = _, a = oe("iApi"), l = Ft(), r = C(), { t: i } = N(), d = O(() => {
      const x = l.getLayerByUid(e.params.data.rvUid);
      return !!x && x.mapLayer;
    }), v = () => {
      if (n.value !== "none")
        return;
      n.value = "zooming";
      const x = l.getLayerByUid(e.params.data.rvUid);
      if (x === void 0 || !x.isLoaded) {
        b("error");
        return;
      }
      const y = e.params.layerCols[x.id].find((M) => M.origAttr === x.oidField), L = e.params.data[y ? y.mappedAttr ?? y.origAttr : x.oidField], c = () => {
        const M = { getGeom: !0 };
        x.getGraphic(L, M).then((A) => {
          A.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${L}`), b("error")) : (a.geo.map.zoomMapTo(A.geometry), b("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance());
        }).catch(() => {
          b("error");
        });
      };
      x.layerType === Tt.FEATURE && x.geomType !== $t.POINT ? x.getGraphicExtent(L).then((M) => {
        a.geo.map.zoomMapTo(M), b("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance();
      }).catch(() => {
        c();
      }) : c();
    }, b = (x) => {
      x === "zoomed" || x === "error" ? setTimeout(() => {
        n.value = x, r.value?._tippy.show(), setTimeout(() => {
          r.value?._tippy.hide(), n.value = "none";
        }, 3e3);
      }, 300) : n.value = x;
    };
    return X(() => {
      d.value && (e.params.eGridCell.addEventListener("keydown", (x) => {
        x.key === "Enter" && n.value === "none" && v();
      }), e.params.eGridCell.addEventListener("focus", () => {
        r.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        r.value?._tippy.hide();
      }));
    }), J(() => {
      d.value && (e.params.eGridCell.removeEventListener("keydown", (x) => {
        x.key === "Enter" && v();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        r.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        r.value?._tippy.hide();
      }));
    }), (x, y) => {
      const L = U("tippy");
      return d.value ? F((E(), k("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: h(i)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`),
        onClick: v,
        tabindex: "-1",
        ref_key: "button",
        ref: r,
        "aria-label": h(i)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`)
      }, [
        n.value === "zooming" ? (E(), k("div", Rl)) : n.value === "zoomed" ? (E(), k("svg", Sl, y[0] || (y[0] = [
          o("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : n.value === "error" ? (E(), k("svg", Dl, y[1] || (y[1] = [
          o("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (E(), k("span", {
          key: 3,
          innerHTML: h(a).ui.getZoomIcon()
        }, null, 8, Il))
      ], 8, $l)), [
        [L, { placement: "top" }]
      ]) : R("", !0);
    };
  }
}), Vl = ["content"], Pl = ["innerHTML"], Hl = /* @__PURE__ */ D({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(_) {
    const n = _, e = oe("iApi"), a = C(), l = O(() => {
      const i = Object.assign({}, n.params.data), d = e.geo.layer.getLayer(i.rvUid), v = n.params.config.displayOn;
      return !(!d || v === "geo" && !d.mapLayer || v === "data" && d.mapLayer);
    }), r = () => {
      const i = Object.assign({}, n.params.data), d = e.geo.layer.getLayer(i.rvUid), v = n.params.layerCols[d.id].find((x) => x.origAttr === d.oidField), b = v.mappedAttr ? i[v.mappedAttr] : i[v.origAttr];
      d.getGraphic(b, { getAttribs: !0 }).then((x) => {
        e.event.emit(n.params.config.actionEvent, {
          data: x.attributes,
          layer: d,
          uid: n.params.data.rvUid,
          oid: b
        });
      });
    };
    return X(() => {
      n.params.eGridCell.addEventListener("keydown", (i) => {
        i.key === "Enter" && r();
      }), n.params.eGridCell.addEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), J(() => {
      n.params.eGridCell.removeEventListener("keydown", (i) => {
        i.key === "Enter" && r();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (i, d) => {
      const v = U("tippy");
      return l.value ? F((E(), k("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-42 h-38",
        content: n.params.config.tooltip,
        onClick: r,
        tabindex: "-1",
        ref_key: "el",
        ref: a
      }, [
        o("span", {
          innerHTML: n.params.config.icon
        }, null, 8, Pl)
      ], 8, Vl)), [
        [v, { placement: "top" }]
      ]) : R("", !0);
    };
  }
}), Nl = ["name", "content", "innerHTML"], Bl = ["content"], Ge = /* @__PURE__ */ D({
  __name: "cell-renderer",
  props: ["params"],
  setup(_) {
    const n = fe(), e = oe("iApi"), { t: a } = N(), l = C(), r = C(), i = C(!1), d = _, v = O(() => n.mobileView), b = () => {
      r.value?.textContent && (i.value = !0, l.value?._tippy.show(), navigator.clipboard.writeText(r.value?.textContent), setTimeout(() => {
        i.value = !1;
      }, 2e3));
    }, x = O(() => d.params.type === "number" ? d.params.value == null ? "" : e.ui.formatNumber(d.params.value) : d.params.type === "date" ? d.params.value == null ? "" : new Date(d.params.value).toISOString().slice(0, 10) : d.params.type === "string" ? !d.params.value || /<a[^>]*>[^<]+<\/a>/g.test(d.params.value) ? d.params.value : St(d.params.value, {
      target: "_blank",
      validate: {
        url: (L) => /^https?:\/\//.test(L)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), y = O(() => /<a[^>]*>[^<]+<\/a>/g.test(d.params.value) || /(http(s)?:\/\/.*)/g.test(d.params.value));
    return X(() => {
      d.params.eGridCell.addEventListener("dblclick", () => {
        b();
      }), d.params.eGridCell.addEventListener("keydown", (L) => {
        L.ctrlKey && L.code === "KeyC" && b();
      }), d.params.eGridCell.addEventListener("blur", () => {
        r.value._tippy.hide(), l.value?._tippy.hide();
      }), d.params.eGridCell.addEventListener("focus", () => {
        r.value?._tippy.show(), setTimeout(() => {
          document.activeElement === d.params.eGridCell && l.value?._tippy.show();
        }, 1e3), r.value._tippy.reference.clientWidth >= r.value._tippy.reference.scrollWidth && r.value._tippy.hide();
      });
    }), J(() => {
      d.params.eGridCell.removeEventListener("dblclick", () => {
        b();
      }), d.params.eGridCell.removeEventListener("keydown", (L) => {
        L.ctrlKey && L.code === "KeyC" && b();
      }), d.params.eGridCell.removeEventListener("blur", () => {
        r.value._tippy.hide(), l.value?._tippy.hide();
      }), d.params.eGridCell.removeEventListener("focus", () => {
        r.value._tippy.show(), l.value?._tippy.show();
      });
    }), (L, c) => {
      const M = U("truncate"), A = U("tippy");
      return E(), k("div", null, [
        F(o("div", {
          name: x.value,
          content: x.value,
          tabindex: "-1",
          innerHTML: x.value,
          ref_key: "el",
          ref: r
        }, null, 8, Nl), [
          [M, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              maxWidth: v.value ? 300 : 700,
              // remove this once scrollable tooltip option is implemented
              animation: "scale",
              interactive: y.value
            }
          }]
        ]),
        r.value?.textContent ? F((E(), k("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: l,
          content: h(a)(`grid.label.${i.value ? "copied" : "copy"}`)
        }, null, 8, Bl)), [
          [A, {
            triggerTarget: r.value,
            placement: "bottom",
            theme: "ramp4",
            hideOnClick: !1,
            delay: [1e3, 0]
          }]
        ]) : R("", !0)
      ]);
    };
  }
}), zl = { class: "pl-8" }, Ol = { class: "flex flex-col justify-center items-center h-full" }, Ul = { class: "flex flex-row" }, Kl = { class: "font-bold text-2xl" }, jl = { class: "mt-20 text-xl" }, ql = { class: "my-20" }, Wl = { class: "text-sm" }, Yl = ["aria-label"], Zl = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, Ql = { class: "flex flex-1 flex-col max-w-full mr-8" }, Xl = { class: "w-full font-bold" }, Jl = { class: "w-full text-sm" }, ea = { key: 0 }, ta = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, la = { class: "flex flex-1 min-w-0 items-center pb-4 mr-8" }, aa = ["aria-label", "placeholder"], ra = { class: "-ml-30" }, sa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, na = ["aria-label"], oa = { class: "pb-2 flex ml-auto justify-end" }, ia = ["content", "aria-label"], ua = ["aria-label"], da = { class: "md-icon-small inline items-start" }, pa = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, ca = ["aria-label"], ma = { class: "md-icon-small inline items-start" }, va = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, fa = ["aria-label"], ga = { class: "md-icon-small inline items-start" }, ha = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, ya = ["aria-label"], ba = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
}, wa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
}, xa = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, Ca = ["aria-label"], La = ["content"], _a = /* @__PURE__ */ D({
  __name: "table-component",
  props: {
    panel: {
      type: et,
      required: !0
    },
    gridId: {
      type: String,
      required: !0
    }
  },
  setup(_) {
    const n = [re.OID, re.DOUBLE, re.SINGLE, re.INTEGER], e = oe("iApi"), a = tt(), l = fe(), r = O(() => l.mobileView), i = C(!r.value), d = C(), v = kt("gridContainer"), { t: b, locale: x } = N(), y = () => Mt()?.proxy?.$forceUpdate(), L = _, c = C({
      id: "dummy",
      layerIds: [],
      state: new It(),
      fieldMap: {}
    }), M = C(!0), A = C(new Ht()), K = C(), ee = C(), j = C(!1), te = C(!1), ie = C([]), Ee = C(0), W = C([]), he = C([]), ke = C(""), I = C(new Nt()), le = C([]), ue = C([]), ye = C("OBJECTID"), Me = C(void 0), lt = Ze.onCellKeyPress, q = C({ firstRow: 0, lastRow: 0, visibleRows: 0 }), be = C({}), at = e.geo.layer.getLayer(L.gridId), de = C({}), rt = C(a.grids[L.gridId].layerIds), G = O(() => a.grids[L.gridId] ? a.grids[L.gridId].layerIds.map((s) => e.geo.layer.getLayer(s)).filter((s) => s !== void 0) : []), Ae = C(/* @__PURE__ */ new Set()), we = C([]), st = (s) => {
      A.value = s.api, I.value = s.columnApi, ke.value = c.value.state.title || at?.name || L.gridId, Te(), ue.value.length > 0 && I.value.autoSizeAllColumns();
      const t = () => {
        e.$vApp.$el.querySelectorAll(
          ".ag-input-field-input.ag-checkbox-input"
        ).forEach((u, p) => {
          const w = I.value.getAllDisplayedColumns()[p].getColDef();
          u.setAttribute("aria-label", w.headerName ?? b("grid.label.specialColumn"));
        });
      };
      t(), A.value.addEventListener("rowDataChanged", t), W.value.push(
        e.event.on(Q.FILTER_CHANGE, ({ uid: m, filterKey: u }) => {
          u !== Ce.GRID && m && G.value.map((p) => p.uid).includes(m) && Y();
        })
      ), W.value.push(
        e.event.on(
          Q.LAYER_VISIBILITYCHANGE,
          ({ layer: m }) => {
            m.uid && G.value.map((u) => u.uid).includes(m.uid) && Y();
          }
        )
      ), W.value.push(
        e.event.on(Q.LAYER_RELOAD_END, (m) => {
          m.loadPromise().then(() => {
            G.value.map((u) => u.uid).includes(m.uid) && Y();
          });
        })
      ), W.value.push(
        e.event.on(Q.CONFIG_CHANGE, () => {
          A.value.redrawRows({
            force: !0
          });
        })
      ), W.value.push(
        e.event.on(
          Q.MAP_EXTENTCHANGE,
          Ye(100, () => {
            c.value.state.filterByExtent && Y();
          })
        )
      ), W.value.push(
        e.event.on(Q.LAYER_REMOVE, (m) => {
          rt.value.includes(m.id) && G.value.length !== 0 && Oe();
        })
      ), Y();
    }, nt = () => {
      I.value.autoSizeAllColumns(), Me.value = new Ze(
        d.value,
        A.value,
        I.value
      );
    }, Fe = () => {
      A.value.setQuickFilter(c.value.state.searchFilter);
    }, Pe = () => {
      c.value.state.searchFilter = "", Fe();
    }, ot = () => {
      Pe(), Ne(), Y();
    }, it = () => {
      c.value.state.filterByExtent = !c.value.state.filterByExtent, Y();
    }, ut = () => {
      const s = K.value.api.getColumnDefs();
      c.value.state.colFilter = !c.value.state.colFilter, s.forEach((t) => {
        t.floatingFilter = c.value.state.colFilter;
      }), K.value.api.setColumnDefs(s);
    }, Te = () => {
      A.value && !j.value && (c.value.state.searchFilter !== "" && Fe(), c.value.state.applyToMap && $e(), Le(() => {
        const s = I.value.getAllDisplayedColumns();
        K.value.api.refreshCells({
          columns: [s[0]]
          // Limits the refresh action to the row number column.
        }), He();
      }));
    }, He = () => {
      q.value.firstRow = A.value.getFirstDisplayedRow() + 1, q.value.lastRow = A.value.getLastDisplayedRow() + 1, q.value.visibleRows = A.value.getDisplayedRowCount();
    }, Ne = () => {
      A.value.setFilterModel({}), c.value.state.clearFilters(), A.value.refreshHeader();
    }, dt = () => {
      i.value = !i.value;
      const s = i.value ? "left" : null, t = I.value.getAllDisplayedColumns();
      I.value.setColumnsPinned(t.slice(1, 3), s);
    }, pt = () => {
      const s = I.value.getAllDisplayedColumns().filter((t) => !t.getColDef().preventExport);
      A.value.exportDataAsCsv({
        columnKeys: s,
        suppressQuotes: !0,
        processCellCallback: (t) => {
          const m = t.column.getColDef().cellRendererParams;
          return !t.value || m && m.type === "number" ? t.value : m && m.type === "date" ? `"${new Date(t.value).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}"` : `"${t.value.toString().replace(/"/g, '""')}"`;
        }
      });
    }, ct = (s, t) => {
      s.floatingFilterComponent = "dateFloatingFilter", s.filterParams.comparator = function(m, u) {
        const p = new Date(u);
        return p.getUTCFullYear() > m.getUTCFullYear() ? 1 : p.getUTCFullYear() < m.getUTCFullYear() ? -1 : p.getUTCMonth() > m.getUTCMonth() ? 1 : p.getUTCMonth() < m.getUTCMonth() ? -1 : p.getUTCDate() - m.getUTCDate();
      }, s.filterParams.inRangeInclusive = !0, s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      };
    }, mt = (s, t, m) => {
      s.floatingFilterComponent = "selectorFloatingFilter", s.filterParams.inRangeInclusive = !0, s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: m,
        rowData: t
      };
    }, vt = (s, t) => {
      s.floatingFilterComponent = "numberFloatingFilter", s.filterParams.inRangeInclusive = !0, s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      };
    }, ft = (s, t) => {
      s.floatingFilterComponent = "textFloatingFilter", s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      }, s.filterParams.textMatcher = function(u) {
        const p = u.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${p}.*`).test(u.value);
      };
      const m = function(u) {
        let p = u.toLowerCase();
        return p = p.replace(new RegExp("[àáâãäå]", "g"), "a"), p = p.replace(new RegExp("æ", "g"), "ae"), p = p.replace(new RegExp("ç", "g"), "c"), p = p.replace(new RegExp("[èéêë]", "g"), "e"), p = p.replace(new RegExp("[ìíîï]", "g"), "i"), p = p.replace(new RegExp("ñ", "g"), "n"), p = p.replace(new RegExp("[òóôõö]", "g"), "o"), p = p.replace(new RegExp("œ", "g"), "oe"), p = p.replace(new RegExp("[ùúûü]", "g"), "u"), p = p.replace(new RegExp("[ýÿ]", "g"), "y"), p;
      };
      s.filterParams.textFormatter = function(u) {
        return m(u);
      };
    }, gt = (s, t, m) => {
      if (s.field === "rvRowIndex") {
        const u = {
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
            stateManager: m,
            clearFilters: Ne,
            suppressFilterButton: !0
          },
          filter: !0,
          preventExport: !0
        };
        t.push(u);
      }
      if (s.field === "rvInteractive") {
        const u = c.value.state.controls, p = {
          sortable: !1,
          pinned: r.value ? "" : "left",
          filter: !1,
          lockPosition: !0,
          isStatic: !0,
          maxWidth: 42,
          cellStyle: () => ({
            padding: "0px"
          }),
          cellRenderer: Tl,
          cellRendererParams: {
            $iApi: e,
            t: b,
            layerCols: de.value,
            isTeleport: L.panel.teleport !== void 0
          },
          preventExport: !0
        };
        if (u.includes("details") && t.push(p), _t.value) {
          const f = {
            sortable: !1,
            pinned: r.value ? "" : "left",
            filter: !1,
            lockPosition: !0,
            isStatic: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Gl,
            cellRendererParams: {
              $iApi: e,
              layerCols: de.value,
              isTeleport: L.panel.teleport !== void 0
            },
            preventExport: !0
          };
          u.includes("zoom") && t.push(f);
        }
        u.forEach((f) => {
          if (f === "zoom" || f === "details") return;
          const w = {
            sortable: !1,
            pinned: r.value ? "" : "left",
            filter: !1,
            lockPosition: !0,
            isStatic: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Hl,
            cellRendererParams: {
              $iApi: e,
              t: b,
              layerCols: de.value,
              config: f
            },
            preventExport: !0
          };
          t.push(w);
        });
      }
      if (s.field === "rvSymbol") {
        const u = {
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          isStatic: !0,
          maxWidth: 42,
          cellRenderer: (p) => {
            const f = e.geo.layer.getLayer(p.data.rvUid);
            if (f === void 0) return;
            const w = document.createElement("span"), S = p.data[ye.value];
            return f.getIcon(S).then((g) => {
              w.innerHTML = g;
            }), w;
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
        t.push(u);
      }
    }, ht = () => !Object.values(be.value).every((s) => s === void 0), yt = (s) => {
      const t = be.value[s.data.rvUid];
      return t === void 0 || t.includes(s.data[ye.value]);
    }, Y = async () => {
      const s = new Rt(), t = we.value.slice().map((u) => u.getPromise());
      we.value.push(s), await Promise.all(t), await Promise.all(
        G.value.map(async (u) => {
          u && u.visibility ? await u.getFilterOIDs(
            [Ce.GRID],
            c.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((p) => {
            be.value[u.uid] = p;
          }) : be.value[u.uid] = [];
        })
      ), A.value.onFilterChanged(), s.resolveMe();
      const m = we.value.indexOf(s);
      m === -1 ? console.error("Grid could not find filter blocker in filter queue") : we.value.splice(m, 1);
    }, bt = () => {
      c.value.state.applyToMap = !c.value.state.applyToMap, $e();
    }, $e = () => {
      G.value.filter((s) => s.mapLayer).forEach((s) => {
        if (!c.value.state.applyToMap)
          s.setSqlFilter(Ce.GRID, "");
        else {
          const t = wt(s.id);
          s.setSqlFilter(Ce.GRID, t);
        }
      });
    }, wt = (s) => {
      const t = A.value.getFilterModel(), m = [];
      if (Object.keys(t).forEach((u) => {
        const p = Re(s, u);
        p ? m.push(xt(p.origAttr, t[u])) : m.push("1=2");
      }), c.value.state.searchFilter && c.value.state.searchFilter.length > 0) {
        const u = Ct(s) || "1=2";
        u.length > 0 && m.push(`(${u})`);
      }
      return m.join(" AND ");
    }, xt = (s, t) => {
      switch (t.filterType) {
        case "number": {
          switch (t.type) {
            case "greaterThanOrEqual":
              return `${s} >= ${t.filter}`;
            case "lessThanOrEqual":
              return `${s} <= ${t.filter}`;
            case "inRange":
              return `${s} >= ${t.filter} AND ${s} <= ${t.filterTo}`;
          }
          break;
        }
        case "text": {
          const m = t.filter.replace(/'/g, /''/);
          if (m !== "") {
            const u = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let p = m, f = "", w = u.exec(m), S = 0;
            for (; w; )
              f = f + m.substr(S, w.index - S) + w[0].slice(-1), S = w.index + 2, p = m.substr(w.index + 2), w = u.exec(m);
            f = f + p, f = f.replace(/%/g, "ௌ%"), f = f.replace(/_/g, "ௌ_"), f = `*${f}`;
            const g = `UPPER(${s}) LIKE '${f.replace(/\*/g, "%").toUpperCase()}%'`;
            return g.includes("ௌ%") || g.includes("ௌ_") ? `${g} ESCAPE 'ௌ'` : g;
          }
          break;
        }
        case "date": {
          const m = new Date(t.dateFrom ?? 0), u = new Date(t.dateTo ?? 864e13), p = m ? `${m.getMonth() + 1}/${m.getDate()}/${m.getFullYear()}` : void 0, f = u ? `${u.getMonth() + 1}/${u.getDate()}/${u.getFullYear()}` : void 0;
          switch (t.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${s} >= DATE '${p}'`;
            case "lessThan":
              return `${s} <= DATE '${p}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${s} >= DATE '${p}' AND ${s} <= DATE '${f}'`;
          }
        }
      }
    }, Ct = (s) => {
      const m = c.value.state.searchFilter.replace(/'/g, "''").split(" "), u = A.value.rowModel.rowsToDisplay, p = I.value.getAllDisplayedColumns().filter(
        (w) => (w.colDef.filter === "agTextColumnFilter" || w.colDef.filter === "agNumberColumnFilter") && Re(s, w.getColId())
      ), f = [];
      return u.forEach((w) => {
        let S = !0, g = "";
        for (const $ of m) {
          const pe = new RegExp(`.*${$.split(" ").join(".*").toUpperCase()}`), je = `%${$.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let ce = !1;
          for (const Se of p) {
            const me = Se.getColId(), xe = Re(s, Se.getColId())?.origAttr, qe = Se.getColDef();
            if (w.data[me] === void 0)
              ce = !1;
            else if (qe.filter === "agTextColumnFilter") {
              const Z = w.data[me] === null ? null : w.data[me].toString();
              if (Z !== null && pe.test(Z.toUpperCase())) {
                g ? g = g.concat(" AND ", `(UPPER(${xe}) LIKE '${je}%')`) : g = g.concat("(", `(UPPER(${xe}) LIKE '${je}%')`), f.includes(g + ")") ? ce = !1 : ce = !0;
                break;
              }
            } else if (qe.filter === "agNumberColumnFilter") {
              const Z = w.data[me] === null ? null : w.data[me];
              if (Z !== null && pe.test(Z)) {
                g ? g = g.concat(" AND ", `(${xe} = ${Z})`) : g = g.concat("(", `(${xe} = ${Z})`), ce = !f.includes(g + ")");
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
    }, Lt = (s) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(s.key) && s.stopPropagation();
    }, Be = () => {
      ze(), L.panel.isOpen && L.panel.close();
    }, ze = () => {
      (j.value || te.value) && G.value.forEach((s) => {
        s.abortAttributeLoad(), s.clearFeatureCache();
      });
    }, B = O(() => {
      const s = G.value.map((u) => u.visibility && u.canModifyLayer && u.mapLayer), t = G.value.some(
        (u) => u.visibility && u.mapLayer && !u.canModifyLayer
      ), m = s.some(Boolean);
      return t && m ? "partial" : m ? "enabled" : "disabled";
    }), _t = O(
      () => G.value.some((s) => s.isLoaded && s.supportsFeatures && s.mapLayer)
    ), Re = (s, t) => de.value[s].find((m) => (m.mappedAttr ?? m.origAttr) === t), Oe = () => {
      const s = G.value.filter(
        (t) => t && t.supportsFeatures && t.isLoaded
      );
      s.length === 0 && Be(), Ee.value = s.reduce((t, { featureCount: m }) => t + m, 0), ie.value = new Array(G.value.length).fill(0), s.forEach((t, m) => ie.value[m] += t.downloadedAttributes()), s.forEach((t, m) => {
        he.value.push(
          De(
            () => t.downloadedAttributes(),
            (u) => {
              ie.value[m] = u;
            }
          )
        );
      }), Promise.all(s.map((t) => t.loadPromise())).then(() => {
        const t = s.map((m) => Ie(m).getTabularAttributes().then((u) => {
          const p = c?.value?.state?.state;
          if (p?.columns && p.columnMetadata?.exclusiveColumns) {
            const f = p.columns.map((w) => w.field);
            u.columns = u.columns.filter(
              (w) => f.includes(w.data)
            );
          }
          return u;
        }));
        Promise.all(t).then((m) => {
          if (s.every((p) => p.attribLoadAborted())) {
            j.value = !1;
            return;
          }
          const u = {
            columns: [],
            rows: [],
            fields: [],
            oidField: ""
          };
          m.forEach((p, f) => {
            const w = [], S = s[f].id;
            p.columns.forEach((g) => {
              c.value.fieldMap && c.value.fieldMap[g.data] ? (w.push({
                origAttr: g.data,
                mappedAttr: c.value.fieldMap[g.data]
              }), g.data = c.value.fieldMap[g.data], g.title = g.data) : w.push({
                origAttr: g.data,
                mappedAttr: void 0
              }), u.columns.map(($) => $.data).includes(g.data) || u.columns.push(g);
            }), u.rows = u.rows.concat(
              p.rows.map((g) => {
                if (c.value.fieldMap)
                  for (const [$, pe] of Object.entries(c.value.fieldMap))
                    g[$] !== void 0 && g[pe] === void 0 && (g[pe] = g[$], delete g[$]);
                return g;
              })
            );
            for (let g = 0; g < u.rows.length; g++)
              for (const [$] of Object.entries(u.rows[g]))
                e.ui.isPlainText(u.rows[g][$]) && (u.rows[g][$] = e.ui.escapeHtml(u.rows[g][$]));
            u.fields = u.fields.concat(
              p.fields.map((g) => ((!e.ui.exposeOids && g.type === "oid" || !e.ui.exposeMeasurements && (g.name.toLowerCase() === "shape_length" || g.name.toLowerCase() === "shape_area")) && Ae.value.add(g.name), {
                name: c.value.fieldMap && c.value.fieldMap[g.name] ? c.value.fieldMap[g.name] : g.name,
                type: g.type,
                alias: g.alias ?? void 0,
                length: g.length ?? void 0
              }))
            ), u.oidField = c.value.fieldMap && c.value.fieldMap[p.oidField] ? c.value.fieldMap[p.oidField] : p.oidField, de.value[S] = w;
          }), ye.value = u.oidField, ["rvRowIndex", "rvInteractive", "rvSymbol", ...u.columns].forEach((p) => {
            c.value.state?.columns[p.data] === void 0 && (c.value.state.columns[p.data] = new Gt({
              field: p.data,
              title: p.title
            })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && Ae.value.has(p.data) && (c.value.state.columns[p.data].visible = !1);
            const f = c.value.state?.columns[p.data], w = {
              headerName: f.title ?? p.title,
              headerComponent: "agColumnHeader",
              headerComponentParams: {
                sort: f.sort
              },
              field: p.data ?? p,
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
            }, S = u.fields.find((g) => g.name === w.field);
            p === "rvRowIndex" || p === "rvSymbol" || p === "rvInteractive" ? gt(w, le.value, c.value.state) : (n.indexOf(S.type) > -1 ? (vt(w, c.value.state), w.filter = "agNumberColumnFilter", w.autoHeight = !0, w.cellRenderer = f.template === "" ? Ge : e.component(f.template), w.cellRendererParams = {
              type: "number"
            }) : S.type === re.DATE ? (ct(w, c.value.state), w.filter = "agDateColumnFilter", w.autoHeight = !0, w.minWidth = 400, w.cellRenderer = f.template === "" ? Ge : e.component(f.template), w.cellRendererParams = {
              type: "date"
            }) : S.type === re.STRING && (w.isSelector ? mt(w, u.rows, c.value.state) : ft(w, c.value.state), w.filter = "agTextColumnFilter", w.autoHeight = !0, w.cellRenderer = f.template === "" ? Ge : e.component(f.template), w.cellRendererParams = {
              type: "string"
            }), le.value.push(w));
          }), ue.value = Ie(u.rows), le.value = Ie(le.value), Te(), j.value = !1;
        }).catch((m) => {
          console.error(m), te.value = !0, j.value = !1;
        });
      });
    }, Ue = (s) => {
      s.key === "Tab" && v.value?.matches(":focus") && v.value._tippy.show();
    }, Ke = () => {
      v.value._tippy.hide();
    };
    return X(() => {
      v.value?.addEventListener("keyup", Ue), v.value?.addEventListener("blur", Ke);
    }), ve(() => {
      c.value = a.grids[L.gridId], j.value = !0, y(), q.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, ee.value = {
        agColumnHeader: Al,
        numberFloatingFilter: el,
        textFloatingFilter: rl,
        selectorFloatingFilter: dl,
        dateFloatingFilter: gl,
        clearFloatingFilter: yl
      }, K.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: !0,
        rowHeight: 40,
        suppressRowTransform: !0,
        onFilterChanged: () => {
          $e(), Te();
        },
        onBodyScroll: () => {
          [...e.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((s) => {
            s._tippy && d.value?.contains(s._tippy.reference) && s._tippy.hide();
          });
        },
        onBodyScrollEnd: () => {
          He();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: !0,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: Wt,
        // tab vertically instead of horizontally
        tabToNextHeader: qt,
        onModelUpdated: Ye(300, () => I.value.autoSizeAllColumns())
      }, Oe(), B.value === "partial" && e.notify.show(We.WARNING, e.$i18n.t("layer.filterwarning")), he.value.push(
        De(x, () => {
          M.value = !1, setTimeout(() => {
            M.value = !0;
          }, 10);
        })
      ), he.value.push(
        De(B, (s) => {
          s === "partial" && e.notify.show(We.WARNING, e.$i18n.t("layer.filterwarning"));
        })
      );
    }), J(() => {
      ze(), W.value.forEach((s) => e.event.off(s)), he.value.forEach((s) => s()), Me.value?.removeAccessibilityListeners(), Me.value?.removeScrollListeners(), v.value?.removeEventListener("keyup", Ue), v.value?.removeEventListener("blur", Ke);
    }), (s, t) => {
      const m = Ve("dropdown-menu"), u = U("truncate"), p = U("tippy");
      return E(), k("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: d
      }, [
        F(o("div", null, [
          o("p", zl, T(h(b)("grid.splash.error")), 1)
        ], 512), [
          [ae, te.value]
        ]),
        F(o("div", Ol, [
          o("div", Ul, [
            o("span", Kl, T(ie.value.reduce((f, w) => f + w, 0)), 1),
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
            o("span", jl, T(Ee.value), 1)
          ]),
          o("div", ql, [
            o("span", Wl, T(ie.value.reduce((f, w) => f + w, 0) < Ee.value ? h(b)("grid.splash.loading") : h(b)("grid.splash.building")), 1)
          ]),
          o("div", null, [
            o("button", {
              type: "button",
              onClick: Be,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": h(b)("grid.splash.cancel")
            }, T(h(b)("grid.splash.cancel")), 9, Yl)
          ])
        ], 512), [
          [ae, j.value && !te.value]
        ]),
        F(o("div", Zl, [
          o("div", Ql, [
            F((E(), k("div", Xl, [
              H(T(ke.value), 1)
            ])), [
              [ae, ke.value !== ""],
              [u]
            ]),
            F((E(), k("div", Jl, [
              H(T(h(b)("grid.filters.label.info", {
                range: q.value.visibleRows !== 0 ? `${q.value.firstRow} - ${q.value.lastRow}` : "0",
                total: q.value.visibleRows
              })) + " ", 1),
              q.value.visibleRows !== ue.value.length ? (E(), k("span", ea, T(h(b)("grid.filters.label.filtered", {
                max: ue.value.length
              })), 1)) : R("", !0)
            ])), [
              [u]
            ])
          ]),
          o("div", ta, [
            F(o("div", la, [
              F(o("input", {
                onInput: t[0] || (t[0] = (f) => Fe()),
                onKeypress: t[1] || (t[1] = P(V(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: t[2] || (t[2] = P((f) => {
                  h(l).mobileView && f?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": t[3] || (t[3] = (f) => c.value.state.searchFilter = f),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": h(b)("grid.filters.label.global"),
                placeholder: h(b)("grid.filters.label.global")
              }, null, 40, aa), [
                [ne, c.value.state.searchFilter]
              ]),
              o("div", ra, [
                c.value.state.searchFilter.length < 3 ? (E(), k("svg", sa, t[13] || (t[13] = [
                  o("g", { id: "search_cache224" }, [
                    o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (E(), k("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer",
                  onClick: t[4] || (t[4] = (f) => Pe()),
                  "aria-label": h(b)("grid.search.clear")
                }, t[14] || (t[14] = [
                  o("svg", {
                    "data-v-486a0302": "",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 352 512",
                    class: "w-18 h-18 mt-2"
                  }, [
                    o("path", {
                      "data-v-486a0302": "",
                      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    })
                  ], -1)
                ]), 8, na))
              ])
            ], 512), [
              [ae, c.value.state.search]
            ]),
            o("div", oa, [
              _e(Ut, {
                columnApi: I.value,
                columnDefs: le.value,
                systemCols: Ae.value,
                onRefreshHeaders: t[5] || (t[5] = (f) => A.value.refreshHeader())
              }, null, 8, ["columnApi", "columnDefs", "systemCols"]),
              F((E(), k("button", {
                type: "button",
                class: "grid-clearall p-4 h-40 text-gray-500 hover:text-black",
                onClick: t[6] || (t[6] = (f) => ot()),
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
              ]), 8, ia)), [
                [p, {
                  placement: "bottom"
                }]
              ]),
              _e(m, {
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
                    onClick: t[7] || (t[7] = (f) => B.value !== "disabled" && bt()),
                    role: "button",
                    "aria-label": h(b)("grid.label.filters.apply")
                  }, [
                    o("div", da, [
                      t[18] || (t[18] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      H(" " + T(h(b)("grid.label.filters.apply")) + " ", 1),
                      B.value !== "disabled" && c.value.state.applyToMap ? (E(), k("svg", pa, t[17] || (t[17] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 10, ua),
                  o("a", {
                    href: "javascript:;",
                    class: "flex leading-snug items-center w-256 hover:text-black",
                    onClick: t[8] || (t[8] = (f) => ut()),
                    role: "button",
                    "aria-label": h(b)("grid.label.filters.show")
                  }, [
                    o("div", ma, [
                      t[20] || (t[20] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      H(" " + T(h(b)("grid.label.filters.show")) + " ", 1),
                      c.value.state.colFilter ? (E(), k("svg", va, t[19] || (t[19] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 8, ca),
                  o("a", {
                    href: "javascript:;",
                    class: z(["flex leading-snug items-center w-256", {
                      hover: B.value !== "disabled" ? "none" : "text-black",
                      disabled: B.value === "disabled"
                    }]),
                    onClick: t[9] || (t[9] = (f) => B.value !== "disabled" && it()),
                    role: "button",
                    "aria-label": h(b)("grid.filters.label.extent")
                  }, [
                    o("div", ga, [
                      t[22] || (t[22] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      H(" " + T(h(b)("grid.filters.label.extent")) + " ", 1),
                      B.value !== "disabled" && c.value.state.filterByExtent ? (E(), k("svg", ha, t[21] || (t[21] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 10, fa),
                  o("a", {
                    href: "javascript:;",
                    class: z(["flex leading-snug items-center w-256", { hover: "text-black" }]),
                    onClick: t[10] || (t[10] = (f) => dt()),
                    role: "button",
                    "aria-label": h(b)("grid.label.pinColumns")
                  }, [
                    i.value ? (E(), k("svg", ba, t[23] || (t[23] = [
                      o("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                    ]))) : i.value ? R("", !0) : (E(), k("svg", wa, t[24] || (t[24] = [
                      o("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                    ]))),
                    H(" " + T(h(b)("grid.label.pinColumns")) + " ", 1),
                    i.value ? (E(), k("svg", xa, t[25] || (t[25] = [
                      o("g", { id: "done" }, [
                        o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                      ], -1)
                    ]))) : R("", !0)
                  ], 8, ya),
                  o("a", {
                    href: "javascript:;",
                    class: z(["flex leading-snug items-center w-256", { hover: "text-black" }]),
                    onClick: t[11] || (t[11] = (f) => pt()),
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
                  ], 8, Ca)
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
          ref: v,
          tabIndex: "-1"
        }, [
          _e(h(Dt), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: "true",
            accentedSort: "true",
            localeText: h(x) === "en" ? h(Vt) : h(Pt),
            gridOptions: K.value,
            columnDefs: le.value,
            rowData: ue.value,
            components: ee.value,
            onGridReady: st,
            onKeydown: Lt,
            onFirstDataRendered: nt,
            onCellKeyPress: h(lt),
            doesExternalFilterPass: yt,
            isExternalFilterPresent: ht
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, La)), [
          [p, {
            placement: "top",
            trigger: "manual",
            touch: !1
          }],
          [ae, !j.value && !te.value]
        ]) : R("", !0)
      ], 512);
    };
  }
}), Ea = /* @__PURE__ */ ge(_a, [["__scopeId", "data-v-edc29631"]]), ka = /* @__PURE__ */ D({
  __name: "screen",
  props: {
    panel: {
      type: et,
      required: !0
    }
  },
  setup(_) {
    const n = tt(), { t: e } = N(), a = O(() => n.currentId);
    return (l, r) => {
      const i = Ve("panel-screen");
      return E(), Qe(i, { panel: _.panel }, {
        header: se(() => [
          H(T(h(e)("grid.title")), 1)
        ]),
        content: se(() => [
          _e(Ea, {
            class: "rv-grid",
            gridId: a.value,
            panel: _.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), vr = /* @__PURE__ */ ge(ka, [["__scopeId", "data-v-904e67ef"]]);
export {
  vr as default
};
