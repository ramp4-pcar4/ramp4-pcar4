import { defineComponent as I, inject as ne, resolveComponent as Ge, openBlock as _, createBlock as Ve, unref as y, withCtx as re, createElementVNode as o, createElementBlock as E, Fragment as Ye, renderList as Ze, createTextVNode as N, toDisplayString as T, createCommentVNode as R, ref as C, onBeforeMount as me, withDirectives as k, normalizeClass as O, withModifiers as P, withKeys as H, vModelText as se, vModelSelect as Ct, onMounted as oe, nextTick as Ce, onBeforeUnmount as Q, resolveDirective as K, computed as U, watch as Re, vShow as le, createVNode as Ie, getCurrentInstance as Lt, markRaw as Se } from "vue";
import "tiny-emitter";
import { a as ve, _ as fe, G as Z, K as _t, M as Et, L as Mt, N as kt, O as Qe, Q as ae, i as Xe, V as je, W as xe, X as At } from "./main-Cj14oOvS.js";
import "@arcgis/core/Basemap";
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
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import { debounce as qe } from "throttle-debounce";
import "pinia";
import { useI18n as B } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import Ft from "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { AgGridVue as Tt } from "ag-grid-vue3";
import { T as $t, C as Rt } from "./table-state-manager-CQv-OGS1.js";
import { AG_GRID_LOCALE_EN as St, AG_GRID_LOCALE_FR as Dt } from "@ag-grid-community/locale";
import { GridApi as It, ColumnApi as Gt } from "ag-grid-community";
const Vt = ["onClick"], Pt = { class: "md-icon-small inline" }, Ht = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, Nt = /* @__PURE__ */ I({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    columnApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(L) {
    const n = ne("iApi"), { t: e } = B();
    return (a, l) => {
      const r = Ge("dropdown-menu");
      return _(), Ve(r, {
        class: "relative",
        position: "bottom-end",
        tooltip: y(e)("grid.label.columns"),
        tooltipPlacementAlt: "left",
        centered: !1
      }, {
        header: re(() => l[0] || (l[0] = [
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
        default: re(() => [
          (_(!0), E(Ye, null, Ze(L.columnDefs.filter(
            (u) => u.headerName && u.headerName.length > 0 && !(!y(n).ui.exposeOids && L.systemCols?.has(u.headerName)) && !(!y(n).ui.exposeMeasurements && (L.systemCols?.has(u.headerName) || L.systemCols?.has(u.field)))
          ), (u) => (_(), E("a", {
            key: u.headerName,
            onClick: (c) => {
              L.columnApi?.setColumnVisible(u.field, u.hide), u.hide = !u.hide, a.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center w-256"
          }, [
            o("div", Pt, [
              N(T(u.headerName) + " ", 1),
              u.hide ? R("", !0) : (_(), E("svg", Ht, l[1] || (l[1] = [
                o("g", { id: "done" }, [
                  o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ])))
            ])
          ], 8, Vt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), Bt = ".ag-root", zt = ".ag-header-viewport .ag-header-row";
class We {
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
    this.element = n, this.agGridApi = e, this.agColumnApi = a, this.agGrid = this.element.querySelector(Bt), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(zt)
    ), this.element.querySelector(".ag-body-horizontal-scroll-viewport")?.setAttribute("tabindex", "-1"), this.initAccessibilityListeners(), this.initScrollListeners();
  }
  /**
   * Set up the listeners for the grid
   */
  initAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, a) => {
      if (a < 3)
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
   * Remove all accessibility listeners from the grid
   */
  removeAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, a) => {
      if (a < 3)
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
    const r = (c) => {
      const d = c.clientX - l;
      e.scrollLeft = a - d;
    }, u = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", r), this.agGrid.removeEventListener("mouseup", u), this.agGrid.removeEventListener("mouseleave", u);
    };
    this.agGrid.addEventListener("mousemove", r), this.agGrid.addEventListener("mouseup", u), this.agGrid.addEventListener("mouseleave", u);
  }
}
function Ot(L) {
  const n = L.previousHeaderPosition.column, e = L.previousHeaderPosition.headerRowIndex;
  let a = L.backwards ? e - 1 : e + 1;
  return a === -1 ? null : (a === L.headerRowCount && (a = -1), { headerRowIndex: a, column: n });
}
function Ut(L) {
  return L.backwards ? { column: L.previousCellPosition.column, rowIndex: -1 } : null;
}
const Kt = { class: "h-full flex items-center justify-center" }, jt = ["placeholder", "aria-label", "disabled"], qt = ["placeholder", "aria-label", "disabled"], Wt = {
  methods: {
    onParentModelChanged() {
    }
  }
}, Yt = /* @__PURE__ */ I({
  ...Wt,
  __name: "custom-number-filter",
  props: ["params"],
  setup(L) {
    const n = ve(), { t: e } = B(), a = L, l = C(""), r = C(""), u = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), c = () => {
      l.value = l.value !== "" && !isNaN(l.value) ? l.value : null, a.params.parentFilterInstance((w) => {
        M(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
      });
    }, d = () => {
      r.value = r.value !== "" && !isNaN(r.value) ? r.value : null, a.params.parentFilterInstance((w) => {
        M(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, r.value, "max");
      });
    }, M = (w) => {
      (isNaN(l.value) || l.value === null) && (l.value = ""), (isNaN(r.value) || r.value === null) && (r.value = ""), r.value !== "" && l.value !== "" ? w.setModel({
        filterType: "number",
        type: "inRange",
        filter: l.value,
        filterTo: r.value
      }) : l.value === "" ? w.setModel({
        filterType: "number",
        type: "lessThanOrEqual",
        filter: r.value
      }) : r.value === "" ? w.setModel({
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: l.value
      }) : w.setModel(null), a.params.api.onFilterChanged();
    };
    return me(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min"), r.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max"), c(), d();
    }), (w, v) => (_(), E("div", Kt, [
      k(o("input", {
        class: O(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": v[0] || (v[0] = (i) => l.value = i),
        onInput: v[1] || (v[1] = (i) => c()),
        onMousedown: v[2] || (v[2] = P(() => {
        }, ["stop"])),
        onKeypress: v[3] || (v[3] = H(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: v[4] || (v[4] = H((i) => {
          y(n).mobileView && i.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: y(e)("grid.filters.number.min"),
        "aria-label": y(e)("grid.filters.number.min"),
        disabled: u.value
      }, null, 42, jt), [
        [se, l.value]
      ]),
      v[10] || (v[10] = o("span", { class: "w-12" }, null, -1)),
      k(o("input", {
        class: O(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": v[5] || (v[5] = (i) => r.value = i),
        onInput: v[6] || (v[6] = (i) => d()),
        onMousedown: v[7] || (v[7] = P(() => {
        }, ["stop"])),
        onKeypress: v[8] || (v[8] = H(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: v[9] || (v[9] = H((i) => {
          y(n).mobileView && i.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: y(e)("grid.filters.number.max"),
        "aria-label": y(e)("grid.filters.number.max"),
        disabled: u.value
      }, null, 42, qt), [
        [se, r.value]
      ])
    ]));
  }
}), Zt = /* @__PURE__ */ fe(Yt, [["__scopeId", "data-v-6583eadd"]]), Qt = { class: "h-full flex items-center justify-center" }, Xt = ["placeholder", "aria-label", "disabled"], Jt = {
  methods: {
    onParentModelChanged() {
    }
  }
}, el = /* @__PURE__ */ I({
  ...Jt,
  __name: "custom-text-filter",
  props: ["params"],
  setup(L) {
    const n = ve(), { t: e } = B(), a = L, l = C(""), r = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), u = () => {
      a.params.parentFilterInstance((c) => {
        l.value = l.value ? l.value : "", c.setModel({
          filterType: "text",
          type: "contains",
          filter: l.value
        }), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value), a.params.api.onFilterChanged();
      });
    };
    return me(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field), u();
    }), (c, d) => (_(), E("div", Qt, [
      k(o("input", {
        class: O(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": r.value
        }]),
        type: "text",
        onInput: d[0] || (d[0] = (M) => u()),
        "onUpdate:modelValue": d[1] || (d[1] = (M) => l.value = M),
        onMousedown: d[2] || (d[2] = P(() => {
        }, ["stop"])),
        onKeypress: d[3] || (d[3] = H(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: d[4] || (d[4] = H((M) => {
          y(n).mobileView && M.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: y(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        "aria-label": y(e)("grid.filters.column.label.text", [L.params.column.colDef.headerName]),
        disabled: r.value
      }, null, 42, Xt), [
        [se, l.value]
      ])
    ]));
  }
}), tl = { class: "h-full flex items-center justify-center" }, ll = ["aria-label", "disabled"], al = ["value"], rl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, sl = /* @__PURE__ */ I({
  ...rl,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(L) {
    const n = L, e = C(""), a = C([]), l = C(n.params.stateManager.columns[n.params.column.colDef.field].filter.static), r = () => {
      e.value = e.value ? e.value : "", n.params.parentFilterInstance((u) => {
        e.value === "..." ? (u.setModel(null), e.value = "") : u.setModel({
          filterType: "text",
          type: "contains",
          filter: e.value
        }), n.params.stateManager.setColumnFilterValue(n.params.column.colDef.field, e.value), n.params.api.onFilterChanged();
      });
    };
    return me(() => {
      e.value = n.params.stateManager.getColumnFilterValue(n.params.column.colDef.field);
      let u = n.params.rowData;
      u = u.map((c) => c[n.params.column.colId]), a.value = u.filter((c, d) => u.indexOf(c) === d), a.value.unshift("..."), r();
    }), (u, c) => (_(), E("div", tl, [
      k(o("select", {
        class: O(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": l.value
        }]),
        "onUpdate:modelValue": c[0] || (c[0] = (d) => e.value = d),
        onChange: c[1] || (c[1] = (d) => r()),
        onMousedown: c[2] || (c[2] = P(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: l.value
      }, [
        (_(!0), E(Ye, null, Ze(a.value, (d) => (_(), E("option", {
          value: d,
          key: d
        }, T(d), 9, al))), 128))
      ], 42, ll), [
        [Ct, e.value]
      ])
    ]));
  }
}), nl = /* @__PURE__ */ fe(sl, [["__scopeId", "data-v-f1c7aa13"]]), ol = { class: "h-full flex items-center justify-center w-full" }, il = ["placeholder", "aria-label", "disabled"], ul = ["placeholder", "aria-label", "disabled"], dl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, pl = /* @__PURE__ */ I({
  ...dl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(L) {
    const n = ve(), { t: e } = B(), a = L, l = C(""), r = C(""), u = C(a.params.stateManager.columns[a.params.column.colDef.field].filter.static), c = () => {
      a.params.parentFilterInstance((w) => {
        M(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, l.value, "min");
      });
    }, d = () => {
      a.params.parentFilterInstance((w) => {
        M(w), a.params.stateManager.setColumnFilterValue(a.params.column.colDef.field, r.value, "max");
      });
    }, M = (w) => {
      r.value === "" && l.value === "" ? w.setModel(null) : r.value !== "" && l.value !== "" ? w.setModel({
        filterType: "date",
        type: "inRange",
        dateFrom: l.value,
        dateTo: r.value
      }) : l.value === "" ? w.setModel({
        filterType: "date",
        type: "lessThan",
        dateFrom: r.value
      }) : r.value === "" && w.setModel({
        filterType: "date",
        type: "greaterThan",
        dateFrom: l.value
      }), a.params.api.onFilterChanged();
    };
    return me(() => {
      l.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "min") || "", r.value = a.params.stateManager.getColumnFilterValue(a.params.column.colDef.field, "max") || "", c(), d();
    }), (w, v) => (_(), E("div", ol, [
      k(o("input", {
        class: O(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        type: "date",
        placeholder: y(e)("grid.filters.date.min"),
        "aria-label": y(e)("grid.filters.date.min"),
        "onUpdate:modelValue": v[0] || (v[0] = (i) => l.value = i),
        onInput: v[1] || (v[1] = (i) => c()),
        onMousedown: v[2] || (v[2] = P(() => {
        }, ["stop"])),
        onKeypress: v[3] || (v[3] = H(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: v[4] || (v[4] = H((i) => {
          y(n).mobileView && i.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: u.value
      }, null, 42, il), [
        [se, l.value]
      ]),
      v[10] || (v[10] = o("span", { class: "w-12" }, null, -1)),
      k(o("input", {
        class: O(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": u.value
        }]),
        type: "date",
        placeholder: y(e)("grid.filters.date.max"),
        "aria-label": y(e)("grid.filters.date.max"),
        "onUpdate:modelValue": v[5] || (v[5] = (i) => r.value = i),
        onInput: v[6] || (v[6] = (i) => d()),
        onMousedown: v[7] || (v[7] = P(() => {
        }, ["stop"])),
        onKeypress: v[8] || (v[8] = H(P(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: v[9] || (v[9] = H((i) => {
          y(n).mobileView && i.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: u.value
      }, null, 42, ul), [
        [se, r.value]
      ])
    ]));
  }
}), cl = /* @__PURE__ */ fe(pl, [["__scopeId", "data-v-9db9be0a"]]), ml = ["content", "disabled"], vl = /* @__PURE__ */ I({
  __name: "clear-filter",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = B(), a = C(), l = () => n.params.clearFilters();
    return oe(async () => {
      await Ce();
      const r = a.value?.closest(".ag-header-cell"), u = r.closest(".ag-pinned-left-header");
      r.addEventListener("keydown", async (c) => {
        c.key === "Enter" && (c.stopPropagation(), l(), await Ce(), u.querySelector(".ag-header-cell.ag-floating-filter").focus());
      }), r.addEventListener("focus", () => {
        a.value._tippy.show();
      }), r.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), Q(() => {
      const r = a.value?.closest(".ag-header-cell"), u = r.closest(".ag-pinned-left-header");
      r.removeEventListener("keydown", async (c) => {
        c.key === "Enter" && (c.stopPropagation(), l(), await Ce(), u.querySelector(".ag-header-cell.ag-floating-filter").focus());
      }), r.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), r.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (r, u) => {
      const c = K("tippy");
      return k((_(), E("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: l,
        content: y(e)("grid.filters.clear"),
        disabled: !L.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: a
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
      ]), 8, ml)), [
        [c, { placement: "bottom" }]
      ]);
    };
  }
}), fl = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, gl = ["content", "aria-label"], hl = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, yl = {
  key: 2,
  class: "flex"
}, bl = {
  key: 0,
  class: "w-24 inline-block"
}, wl = {
  key: 1,
  class: "customSortDownLabel"
}, xl = {
  key: 2,
  class: "customSortUpLabel"
}, Cl = ["content", "aria-label", "disabled"], Ll = ["content", "aria-label", "disabled"], _l = /* @__PURE__ */ I({
  __name: "custom-header",
  props: ["params"],
  setup(L) {
    const { t: n } = B(), e = L, a = C(), l = C(0), r = C(!1), u = C(!1), c = C(!1), d = C(null), M = () => {
      const A = d.value.getAllDisplayedColumns(), x = A.indexOf(e.params.column);
      u.value = x > 3 && !A[x - 1].colDef.isStatic, c.value = x < A.length - 1 && !A[x + 1].colDef.isStatic;
    }, w = () => {
      const A = d.value.getAllDisplayedColumns(), x = d.value.getAllGridColumns(), F = x.indexOf(A[A.indexOf(e.params.column) - 1]);
      u.value && (d.value.moveColumn(e.params.column, F), e.params.api.ensureColumnVisible(x[F]), a.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, v = () => {
      const A = d.value.getAllDisplayedColumns(), x = d.value.getAllGridColumns(), F = x.indexOf(A[A.indexOf(e.params.column) + 1]);
      c.value && (d.value.moveColumn(e.params.column, F), e.params.api.ensureColumnVisible(x[F]));
    }, i = (A) => {
      l.value = (l.value + 1) % 3, l.value === 1 ? e.params.setSort("asc", A.shiftKey) : l.value === 2 ? e.params.setSort("desc", A.shiftKey) : e.params.setSort("none", A.shiftKey);
    };
    return oe(() => {
      r.value = e.params.column.colDef.sortable, d.value = e.params.columnApi, e.params.sort === "asc" ? (l.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (l.value = 2, e.params.setSort("desc")), M(), e.params.column.addEventListener("leftChanged", () => {
        M();
      });
    }), Q(() => {
      e.params.column.removeEventListener("leftChanged", () => {
        M();
      });
    }), (A, x) => {
      const F = K("truncate"), X = K("tippy");
      return _(), E("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: a
      }, [
        r.value ? (_(), E("div", fl, [
          k((_(), E("button", {
            type: "button",
            onClick: x[0] || (x[0] = (D) => i(D)),
            content: y(n)(`grid.header.sort.${l.value}`),
            "aria-label": y(n)(`grid.header.sort.${l.value}`),
            class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
            role: "columnheader",
            tabindex: "-1"
          }, [
            k((_(), E("div", null, [
              N(T(L.params.displayName), 1)
            ])), [
              [F, { externalTrigger: !0 }]
            ])
          ], 8, gl)), [
            [X, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : k((_(), E("span", hl, [
          N(T(L.params.displayName), 1)
        ])), [
          [F]
        ]),
        r.value ? (_(), E("div", yl, [
          L.params.enableSorting && l.value === 0 ? (_(), E("span", bl)) : R("", !0),
          L.params.enableSorting && l.value === 1 ? (_(), E("span", wl, x[3] || (x[3] = [
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
          L.params.enableSorting && l.value === 2 ? (_(), E("span", xl, x[4] || (x[4] = [
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
          k((_(), E("button", {
            type: "button",
            content: y(n)("grid.header.reorder.left"),
            "aria-label": y(n)("grid.header.reorder.left"),
            onClick: x[1] || (x[1] = (D) => w()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !u.value
          }, x[5] || (x[5] = [
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
          ]), 8, Cl)), [
            [X, { placement: "top" }]
          ]),
          k((_(), E("button", {
            type: "button",
            content: y(n)("grid.header.reorder.right"),
            "aria-label": y(n)("grid.header.reorder.right"),
            onClick: x[2] || (x[2] = (D) => v()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !c.value
          }, x[6] || (x[6] = [
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
          ]), 8, Ll)), [
            [X, { placement: "top" }]
          ])
        ])) : R("", !0)
      ], 512);
    };
  }
}), El = ["content"], Ml = /* @__PURE__ */ I({
  __name: "details-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, { t: e } = B(), a = ne("iApi"), l = C(), r = async () => {
      const u = n.params.data, c = u.rvUid, d = a.geo.layer.getLayer(c), M = d.oidField, v = n.params.layerCols[d.id].find(
        (A) => A.origAttr === M
      )?.mappedAttr || M, i = await d.getGraphic(u[v], {
        getAttribs: !0
      });
      a.event.emit(
        Z.DETAILS_TOGGLE,
        {
          data: i.attributes,
          uid: c,
          format: _t.ESRI
        },
        !0
      ), n.params.isTeleport && a.scrollToInstance();
    };
    return oe(() => {
      n.params.eGridCell.addEventListener("keydown", (u) => {
        u.key === "Enter" && r();
      }), n.params.eGridCell.addEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), Q(() => {
      n.params.eGridCell.removeEventListener("keydown", (u) => {
        u.key === "Enter" && r();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        l.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        l.value._tippy.hide();
      });
    }), (u, c) => {
      const d = K("tippy");
      return k((_(), E("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: y(e)("grid.cells.details"),
        onClick: r,
        tabindex: "-1",
        ref_key: "el",
        ref: l
      }, c[0] || (c[0] = [
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
      ]), 8, El)), [
        [d, { placement: "top" }]
      ]);
    };
  }
}), kl = ["content"], Al = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Fl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Tl = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, $l = ["innerHTML"], Rl = /* @__PURE__ */ I({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = C("none"), e = L, a = ne("iApi"), l = Et(), r = C(), { t: u } = B(), c = U(() => {
      const w = l.getLayerByUid(e.params.data.rvUid);
      return !!w && w.mapLayer;
    }), d = () => {
      if (n.value !== "none")
        return;
      n.value = "zooming";
      const w = l.getLayerByUid(e.params.data.rvUid);
      if (w === void 0 || !w.isLoaded) {
        M("error");
        return;
      }
      const v = e.params.layerCols[w.id].find((x) => x.origAttr === w.oidField), i = e.params.data[v ? v.mappedAttr ?? v.origAttr : w.oidField], A = () => {
        const x = { getGeom: !0 };
        w.getGraphic(i, x).then((F) => {
          F.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${i}`), M("error")) : (a.geo.map.zoomMapTo(F.geometry), M("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance());
        }).catch(() => {
          M("error");
        });
      };
      w.layerType === Mt.FEATURE && w.geomType !== kt.POINT ? w.getGraphicExtent(i).then((x) => {
        a.geo.map.zoomMapTo(x), M("zoomed"), a.updateAlert(a.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && a.scrollToInstance();
      }).catch(() => {
        A();
      }) : A();
    }, M = (w) => {
      w === "zoomed" || w === "error" ? setTimeout(() => {
        n.value = w, r.value?._tippy.show(), setTimeout(() => {
          r.value?._tippy.hide(), n.value = "none";
        }, 3e3);
      }, 300) : n.value = w;
    };
    return oe(() => {
      c.value && (e.params.eGridCell.addEventListener("keydown", (w) => {
        w.key === "Enter" && n.value === "none" && d();
      }), e.params.eGridCell.addEventListener("focus", () => {
        r.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        r.value?._tippy.hide();
      }));
    }), Q(() => {
      c.value && (e.params.eGridCell.removeEventListener("keydown", (w) => {
        w.key === "Enter" && d();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        r.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        r.value?._tippy.hide();
      }));
    }), (w, v) => {
      const i = K("tippy");
      return c.value ? k((_(), E("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: y(u)(`grid.cells.zoom${n.value === "none" ? "" : `.${n.value}`}`),
        onClick: d,
        tabindex: "-1",
        ref_key: "button",
        ref: r
      }, [
        n.value === "zooming" ? (_(), E("div", Al)) : n.value === "zoomed" ? (_(), E("svg", Fl, v[0] || (v[0] = [
          o("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : n.value === "error" ? (_(), E("svg", Tl, v[1] || (v[1] = [
          o("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (_(), E("span", {
          key: 3,
          innerHTML: y(a).ui.getZoomIcon()
        }, null, 8, $l))
      ], 8, kl)), [
        [i, { placement: "top" }]
      ]) : R("", !0);
    };
  }
}), Sl = ["content"], Dl = ["innerHTML"], Il = /* @__PURE__ */ I({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(L) {
    const n = L, e = ne("iApi"), a = C(), l = U(() => {
      let u = Object.assign({}, n.params.data);
      const c = e.geo.layer.getLayer(u.rvUid), d = n.params.config.displayOn;
      return !(!c || d === "geo" && !c.mapLayer || d === "data" && c.mapLayer);
    }), r = () => {
      let u = Object.assign({}, n.params.data);
      const c = e.geo.layer.getLayer(u.rvUid), d = n.params.layerCols[c.id].find((w) => w.origAttr === c.oidField), M = d.mappedAttr ? u[d.mappedAttr] : u[d.origAttr];
      c.getGraphic(M, { getAttribs: !0 }).then((w) => {
        e.event.emit(n.params.config.actionEvent, {
          data: w.attributes,
          layer: c,
          uid: n.params.data.rvUid,
          oid: M
        });
      });
    };
    return oe(() => {
      n.params.eGridCell.addEventListener("keydown", (u) => {
        u.key === "Enter" && r();
      }), n.params.eGridCell.addEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.addEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), Q(() => {
      n.params.eGridCell.removeEventListener("keydown", (u) => {
        u.key === "Enter" && r();
      }), n.params.eGridCell.removeEventListener("focus", () => {
        a.value._tippy.show();
      }), n.params.eGridCell.removeEventListener("blur", () => {
        a.value._tippy.hide();
      });
    }), (u, c) => {
      const d = K("tippy");
      return l.value ? k((_(), E("button", {
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
        }, null, 8, Dl)
      ], 8, Sl)), [
        [d, { placement: "top" }]
      ]) : R("", !0);
    };
  }
}), Gl = ["name", "content", "innerHTML"], Vl = ["content"], De = /* @__PURE__ */ I({
  __name: "cell-renderer",
  props: ["params"],
  setup(L) {
    const n = ve(), e = ne("iApi"), { t: a } = B(), l = C(), r = C(), u = C(!1), c = L, d = U(() => n.mobileView), M = () => {
      r.value?.textContent && (u.value = !0, l.value?._tippy.show(), navigator.clipboard.writeText(r.value?.textContent), setTimeout(() => {
        u.value = !1;
      }, 2e3));
    }, w = U(() => c.params.type === "number" ? c.params.value == null ? "" : e.ui.formatNumber(c.params.value) : c.params.type === "date" ? c.params.value == null ? "" : new Date(c.params.value).toISOString().slice(0, 10) : c.params.type === "string" ? !c.params.value || /<a[^>]*>[^<]+<\/a>/g.test(c.params.value) ? c.params.value : Ft(c.params.value, {
      target: "_blank",
      validate: {
        url: (i) => /^https?:\/\//.test(i)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), v = U(() => /<a[^>]*>[^<]+<\/a>/g.test(c.params.value) || /(http(s)?:\/\/.*)/g.test(c.params.value));
    return oe(() => {
      c.params.eGridCell.addEventListener("dblclick", () => {
        M();
      }), c.params.eGridCell.addEventListener("keydown", (i) => {
        i.ctrlKey && i.code === "KeyC" && M();
      }), c.params.eGridCell.addEventListener("blur", () => {
        r.value._tippy.hide(), l.value?._tippy.hide();
      }), c.params.eGridCell.addEventListener("focus", () => {
        r.value?._tippy.show(), setTimeout(() => {
          document.activeElement === c.params.eGridCell && l.value?._tippy.show();
        }, 1e3), r.value._tippy.reference.clientWidth >= r.value._tippy.reference.scrollWidth && r.value._tippy.hide();
      });
    }), Q(() => {
      c.params.eGridCell.removeEventListener("dblclick", () => {
        M();
      }), c.params.eGridCell.removeEventListener("keydown", (i) => {
        i.ctrlKey && i.code === "KeyC" && M();
      }), c.params.eGridCell.removeEventListener("blur", () => {
        r.value._tippy.hide(), l.value?._tippy.hide();
      }), c.params.eGridCell.removeEventListener("focus", () => {
        r.value._tippy.show(), l.value?._tippy.show();
      });
    }), (i, A) => {
      const x = K("truncate"), F = K("tippy");
      return _(), E("div", null, [
        k(o("div", {
          name: w.value,
          content: w.value,
          tabindex: "-1",
          innerHTML: w.value,
          ref_key: "el",
          ref: r
        }, null, 8, Gl), [
          [x, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              maxWidth: d.value ? 300 : 700,
              // remove this once scrollable tooltip option is implemented
              animation: "scale",
              interactive: v.value
            }
          }]
        ]),
        r.value?.textContent ? k((_(), E("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: l,
          content: y(a)(`grid.label.${u.value ? "copied" : "copy"}`)
        }, null, 8, Vl)), [
          [F, {
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
}), Pl = { class: "pl-8" }, Hl = { class: "flex flex-col justify-center items-center h-full" }, Nl = { class: "flex flex-row" }, Bl = { class: "font-bold text-2xl" }, zl = { class: "mt-20 text-xl" }, Ol = { class: "my-20" }, Ul = { class: "text-sm" }, Kl = ["aria-label"], jl = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, ql = { class: "flex flex-1 flex-col max-w-full mr-8" }, Wl = { class: "w-full font-bold" }, Yl = { class: "w-full text-sm" }, Zl = { key: 0 }, Ql = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, Xl = { class: "flex flex-1 min-w-0 items-center pb-4 mr-8" }, Jl = ["aria-label", "placeholder"], ea = { class: "-ml-30" }, ta = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, la = { class: "pb-2 flex ml-auto justify-end" }, aa = ["content", "aria-label"], ra = ["aria-label"], sa = { class: "md-icon-small inline items-start" }, na = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, oa = ["aria-label"], ia = { class: "md-icon-small inline items-start" }, ua = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, da = ["aria-label"], pa = { class: "md-icon-small inline items-start" }, ca = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, ma = ["aria-label"], va = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
}, fa = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
}, ga = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24",
  class: "inline float-right"
}, ha = ["aria-label"], ya = /* @__PURE__ */ I({
  __name: "table-component",
  props: {
    panel: {
      type: Qe,
      required: !0
    },
    gridId: {
      type: String,
      required: !0
    }
  },
  setup(L) {
    const n = [ae.OID, ae.DOUBLE, ae.SINGLE, ae.INTEGER], e = ne("iApi"), a = Xe(), l = ve(), r = U(() => l.mobileView), u = C(!r.value), c = C(), { t: d, locale: M } = B(), w = () => Lt()?.proxy?.$forceUpdate(), v = L, i = C({
      id: "dummy",
      layerIds: [],
      state: new $t(),
      fieldMap: {}
    }), A = C(!0), x = C(new It()), F = C(), X = C(), D = C(!1), J = C(!1), ie = C([]), Le = C(0), q = C([]), ge = C([]), _e = C(""), G = C(new Gt()), ee = C([]), ue = C([]), he = C("OBJECTID"), Ee = C(void 0), Je = We.onCellKeyPress, j = C({ firstRow: 0, lastRow: 0, visibleRows: 0 }), ye = C({}), et = e.geo.layer.getLayer(v.gridId), de = C({}), tt = C(a.grids[v.gridId].layerIds), V = U(() => a.grids[v.gridId] ? a.grids[v.gridId].layerIds.map((s) => e.geo.layer.getLayer(s)).filter((s) => s !== void 0) : []), Me = C(/* @__PURE__ */ new Set()), be = C([]), lt = (s) => {
      x.value = s.api, G.value = s.columnApi, _e.value = i.value.state.title || et?.name || v.gridId, Ae(), ue.value.length > 0 && G.value.autoSizeAllColumns();
      const t = () => {
        e.$vApp.$el.querySelectorAll(
          ".ag-input-field-input.ag-checkbox-input"
        ).forEach((p, m) => {
          const b = G.value.getAllDisplayedColumns()[m].getColDef();
          p.setAttribute("aria-label", b.headerName ?? d("grid.label.specialColumn"));
        });
      };
      t(), x.value.addEventListener("rowDataChanged", t), q.value.push(
        e.event.on(Z.FILTER_CHANGE, ({ uid: f, filterKey: p }) => {
          p !== xe.GRID && f && V.value.map((m) => m.uid).includes(f) && W();
        })
      ), q.value.push(
        e.event.on(
          Z.LAYER_VISIBILITYCHANGE,
          ({ layer: f }) => {
            f.uid && V.value.map((p) => p.uid).includes(f.uid) && W();
          }
        )
      ), q.value.push(
        e.event.on(Z.LAYER_RELOAD_END, (f) => {
          f.loadPromise().then(() => {
            V.value.map((p) => p.uid).includes(f.uid) && W();
          });
        })
      ), q.value.push(
        e.event.on(Z.CONFIG_CHANGE, () => {
          x.value.redrawRows({
            force: !0
          });
        })
      ), q.value.push(
        e.event.on(
          Z.MAP_EXTENTCHANGE,
          qe(100, () => {
            i.value.state.filterByExtent && W();
          })
        )
      ), q.value.push(
        e.event.on(Z.LAYER_REMOVE, (f) => {
          tt.value.includes(f.id) && V.value.length !== 0 && Oe();
        })
      ), W();
    }, at = () => {
      G.value.autoSizeAllColumns(), Ee.value = new We(
        c.value,
        x.value,
        G.value
      );
    }, ke = () => {
      x.value.setQuickFilter(i.value.state.searchFilter);
    }, Pe = () => {
      i.value.state.searchFilter = "", ke();
    }, rt = () => {
      Pe(), Ne(), W();
    }, st = () => {
      i.value.state.filterByExtent = !i.value.state.filterByExtent, W();
    }, nt = () => {
      let s = F.value.api.getColumnDefs();
      i.value.state.colFilter = !i.value.state.colFilter, s.forEach((t) => {
        t.floatingFilter = i.value.state.colFilter;
      }), F.value.api.setColumnDefs(s);
    }, Ae = () => {
      x.value && !D.value && (i.value.state.searchFilter !== "" && ke(), i.value.state.applyToMap && Fe(), Ce(() => {
        let s = G.value.getAllDisplayedColumns();
        F.value.api.refreshCells({
          columns: [s[0]]
          // Limits the refresh action to the row number column.
        }), He();
      }));
    }, He = () => {
      j.value.firstRow = x.value.getFirstDisplayedRow() + 1, j.value.lastRow = x.value.getLastDisplayedRow() + 1, j.value.visibleRows = x.value.getDisplayedRowCount();
    }, Ne = () => {
      x.value.setFilterModel({}), i.value.state.clearFilters(), x.value.refreshHeader();
    }, ot = () => {
      u.value = !u.value;
      let s = G.value.getAllDisplayedColumns();
      G.value.setColumnsPinned(s.slice(1, 3), u.value ? "left" : "");
    }, it = () => {
      const s = G.value.getAllDisplayedColumns().filter((t) => !t.getColDef().preventExport);
      x.value.exportDataAsCsv({
        columnKeys: s,
        suppressQuotes: !0,
        processCellCallback: (t) => {
          let f = t.column.getColDef().cellRendererParams;
          return !t.value || f && f.type === "number" ? t.value : f && f.type === "date" ? `"${new Date(t.value).toLocaleDateString("en-CA", {
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
    }, ut = (s, t) => {
      s.floatingFilterComponent = "dateFloatingFilter", s.filterParams.comparator = function(f, p) {
        let m = new Date(p);
        return m.getUTCFullYear() > f.getUTCFullYear() ? 1 : m.getUTCFullYear() < f.getUTCFullYear() ? -1 : m.getUTCMonth() > f.getUTCMonth() ? 1 : m.getUTCMonth() < f.getUTCMonth() ? -1 : m.getUTCDate() - f.getUTCDate();
      }, s.filterParams.inRangeInclusive = !0, s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      };
    }, dt = (s, t, f) => {
      s.floatingFilterComponent = "selectorFloatingFilter", s.filterParams.inRangeInclusive = !0, s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: f,
        rowData: t
      };
    }, pt = (s, t) => {
      s.floatingFilterComponent = "numberFloatingFilter", s.filterParams.inRangeInclusive = !0, s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      };
    }, ct = (s, t) => {
      s.floatingFilterComponent = "textFloatingFilter", s.floatingFilterComponentParams = {
        suppressFilterButton: !0,
        stateManager: t
      }, s.filterParams.textMatcher = function(p) {
        const m = p.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${m}.*`).test(p.value);
      };
      let f = function(p) {
        let m = p.toLowerCase();
        return m = m.replace(new RegExp("[àáâãäå]", "g"), "a"), m = m.replace(new RegExp("æ", "g"), "ae"), m = m.replace(new RegExp("ç", "g"), "c"), m = m.replace(new RegExp("[èéêë]", "g"), "e"), m = m.replace(new RegExp("[ìíîï]", "g"), "i"), m = m.replace(new RegExp("ñ", "g"), "n"), m = m.replace(new RegExp("[òóôõö]", "g"), "o"), m = m.replace(new RegExp("œ", "g"), "oe"), m = m.replace(new RegExp("[ùúûü]", "g"), "u"), m = m.replace(new RegExp("[ýÿ]", "g"), "y"), m;
      };
      s.filterParams.textFormatter = function(p) {
        return f(p);
      };
    }, mt = (s, t, f) => {
      if (s.field === "rvRowIndex") {
        let p = {
          sortable: !1,
          lockPosition: !0,
          valueGetter: "node.rowIndex + 1",
          suppressMovable: !0,
          suppressMenu: !0,
          floatingFilter: i.value.state.colFilter,
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
            stateManager: f,
            clearFilters: Ne,
            suppressFilterButton: !0
          },
          filter: !0,
          preventExport: !0
        };
        t.push(p);
      }
      if (s.field === "rvInteractive") {
        const p = i.value.state.controls;
        let m = {
          sortable: !1,
          pinned: r.value ? "" : "left",
          filter: !1,
          lockPosition: !0,
          isStatic: !0,
          maxWidth: 42,
          cellStyle: () => ({
            padding: "0px"
          }),
          cellRenderer: Ml,
          cellRendererParams: {
            $iApi: e,
            t: d,
            layerCols: de.value,
            isTeleport: v.panel.teleport !== void 0
          },
          preventExport: !0
        };
        if (p.includes("details") && t.push(m), xt.value) {
          let g = {
            sortable: !1,
            pinned: r.value ? "" : "left",
            filter: !1,
            lockPosition: !0,
            isStatic: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Rl,
            cellRendererParams: {
              $iApi: e,
              layerCols: de.value,
              isTeleport: v.panel.teleport !== void 0
            },
            preventExport: !0
          };
          p.includes("zoom") && t.push(g);
        }
        p.forEach((g) => {
          if (g === "zoom" || g === "details") return;
          let b = {
            sortable: !1,
            pinned: r.value ? "" : "left",
            filter: !1,
            lockPosition: !0,
            isStatic: !0,
            maxWidth: 42,
            cellStyle: () => ({
              padding: "0px"
            }),
            cellRenderer: Il,
            cellRendererParams: {
              $iApi: e,
              t: d,
              layerCols: de.value,
              config: g
            },
            preventExport: !0
          };
          t.push(b);
        });
      }
      if (s.field === "rvSymbol") {
        let p = {
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          isStatic: !0,
          maxWidth: 42,
          cellRenderer: (m) => {
            const g = e.geo.layer.getLayer(m.data.rvUid);
            if (g === void 0) return;
            const b = document.createElement("span"), S = m.data[he.value];
            return g.getIcon(S).then((h) => {
              b.innerHTML = h;
            }), b;
          },
          cellStyle: () => ({
            paddingTop: "3px",
            textAlign: "center",
            paddingLeft: "5px",
            paddingRight: "0px"
          }),
          cellRendererParams: {
            $iApi: e,
            oidField: he.value
          },
          preventExport: !0
        };
        t.push(p);
      }
    }, vt = () => !Object.values(ye.value).every((s) => s === void 0), ft = (s) => {
      const t = ye.value[s.data.rvUid];
      return t === void 0 || t.includes(s.data[he.value]);
    }, W = async () => {
      const s = new At(), t = be.value.slice().map((p) => p.getPromise());
      be.value.push(s), await Promise.all(t), await Promise.all(
        V.value.map(async (p) => {
          p && p.visibility ? await p.getFilterOIDs(
            [xe.GRID],
            i.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((m) => {
            ye.value[p.uid] = m;
          }) : ye.value[p.uid] = [];
        })
      ), x.value.onFilterChanged(), s.resolveMe();
      const f = be.value.indexOf(s);
      f === -1 ? console.error("Grid could not find filter blocker in filter queue") : be.value.splice(f, 1);
    }, gt = () => {
      i.value.state.applyToMap = !i.value.state.applyToMap, Fe();
    }, Fe = () => {
      V.value.filter((s) => s.mapLayer).forEach((s) => {
        if (!i.value.state.applyToMap)
          s.setSqlFilter(xe.GRID, "");
        else {
          const t = ht(s.id);
          s.setSqlFilter(xe.GRID, t);
        }
      });
    }, ht = (s) => {
      const t = x.value.getFilterModel();
      let f = [];
      if (Object.keys(t).forEach((p) => {
        const m = Te(s, p);
        m ? f.push(yt(m.origAttr, t[p])) : f.push("1=2");
      }), i.value.state.searchFilter && i.value.state.searchFilter.length > 0) {
        const p = bt(s) || "1=2";
        p.length > 0 && f.push(`(${p})`);
      }
      return f.join(" AND ");
    }, yt = (s, t) => {
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
          let f = t.filter.replace(/'/g, /''/);
          if (f !== "") {
            const p = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let m = f, g = "", b = p.exec(f), S = 0;
            for (; b; )
              g = g + f.substr(S, b.index - S) + b[0].slice(-1), S = b.index + 2, m = f.substr(b.index + 2), b = p.exec(f);
            g = g + m, g = g.replace(/%/g, "ௌ%"), g = g.replace(/_/g, "ௌ_"), g = `*${g}`;
            let h = `UPPER(${s}) LIKE '${g.replace(/\*/g, "%").toUpperCase()}%'`;
            return h.includes("ௌ%") || h.includes("ௌ_") ? `${h} ESCAPE 'ௌ'` : h;
          }
          break;
        }
        case "date": {
          const f = new Date(t.dateFrom ?? 0), p = new Date(t.dateTo ?? 864e13), m = f ? `${f.getMonth() + 1}/${f.getDate()}/${f.getFullYear()}` : void 0, g = p ? `${p.getMonth() + 1}/${p.getDate()}/${p.getFullYear()}` : void 0;
          switch (t.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${s} >= DATE '${m}'`;
            case "lessThan":
              return `${s} <= DATE '${m}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${s} >= DATE '${m}' AND ${s} <= DATE '${g}'`;
          }
        }
      }
    }, bt = (s) => {
      const f = i.value.state.searchFilter.replace(/'/g, "''").split(" "), p = x.value.rowModel.rowsToDisplay, m = G.value.getAllDisplayedColumns().filter(
        (b) => (b.colDef.filter === "agTextColumnFilter" || b.colDef.filter === "agNumberColumnFilter") && Te(s, b.getColId())
      );
      let g = [];
      return p.forEach((b) => {
        let S = !0, h = "";
        for (let $ of f) {
          const pe = new RegExp(`.*${$.split(" ").join(".*").toUpperCase()}`), Ue = `%${$.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let te = !1;
          for (let $e of m) {
            const ce = $e.getColId(), we = Te(s, $e.getColId())?.origAttr, Ke = $e.getColDef();
            if (b.data[ce] === void 0)
              te = !1;
            else if (Ke.filter === "agTextColumnFilter") {
              const Y = b.data[ce] === null ? null : b.data[ce].toString();
              if (Y !== null && pe.test(Y.toUpperCase())) {
                h ? h = h.concat(" AND ", `(UPPER(${we}) LIKE '${Ue}%')`) : h = h.concat("(", `(UPPER(${we}) LIKE '${Ue}%')`), g.includes(h + ")") ? te = !1 : te = !0;
                break;
              }
            } else if (Ke.filter === "agNumberColumnFilter") {
              const Y = b.data[ce] === null ? null : b.data[ce];
              if (Y !== null && pe.test(Y)) {
                h ? h = h.concat(" AND ", `(${we} = ${Y})`) : h = h.concat("(", `(${we} = ${Y})`), g.includes(h + ")") ? te = !1 : te = !0;
                break;
              }
            }
          }
          if (!te) {
            S = !1;
            break;
          }
        }
        S && g.push(h + ")");
      }), g.join(" OR ");
    }, wt = (s) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(s.key) && s.stopPropagation();
    }, Be = () => {
      ze(), v.panel.isOpen && v.panel.close();
    }, ze = () => {
      (D.value || J.value) && V.value.forEach((s) => {
        s.abortAttributeLoad(), s.clearFeatureCache();
      });
    }, z = U(() => {
      const s = V.value.map((p) => p.visibility && p.canModifyLayer && p.mapLayer), t = V.value.some(
        (p) => p.visibility && p.mapLayer && !p.canModifyLayer
      ), f = s.some(Boolean);
      return t && f ? "partial" : f ? "enabled" : "disabled";
    }), xt = U(
      () => V.value.some((s) => s.isLoaded && s.supportsFeatures && s.mapLayer)
    ), Te = (s, t) => de.value[s].find((f) => (f.mappedAttr ?? f.origAttr) === t), Oe = () => {
      const s = V.value.filter(
        (t) => t && t.supportsFeatures && t.isLoaded
      );
      s.length === 0 && Be(), Le.value = s.reduce((t, { featureCount: f }) => t + f, 0), ie.value = new Array(V.value.length).fill(0), s.forEach((t, f) => ie.value[f] += t.downloadedAttributes()), s.forEach((t, f) => {
        ge.value.push(
          Re(
            () => t.downloadedAttributes(),
            (p) => {
              ie.value[f] = p;
            }
          )
        );
      }), Promise.all(s.map((t) => t.loadPromise())).then(() => {
        const t = s.map((f) => Se(f).getTabularAttributes().then((p) => {
          const m = i?.value?.state?.state;
          if (m?.columns && m.columnMetadata?.exclusiveColumns) {
            const g = m.columns.map((b) => b.field);
            p.columns = p.columns.filter(
              (b) => g.includes(b.data)
            );
          }
          return p;
        }));
        Promise.all(t).then((f) => {
          if (s.every((m) => m.attribLoadAborted())) {
            D.value = !1;
            return;
          }
          const p = {
            columns: [],
            rows: [],
            fields: [],
            oidField: ""
          };
          f.forEach((m, g) => {
            const b = [], S = s[g].id;
            m.columns.forEach((h) => {
              i.value.fieldMap && i.value.fieldMap[h.data] ? (b.push({
                origAttr: h.data,
                mappedAttr: i.value.fieldMap[h.data]
              }), h.data = i.value.fieldMap[h.data], h.title = h.data) : b.push({
                origAttr: h.data,
                mappedAttr: void 0
              }), p.columns.map(($) => $.data).includes(h.data) || p.columns.push(h);
            }), p.rows = p.rows.concat(
              m.rows.map((h) => {
                if (i.value.fieldMap)
                  for (const [$, pe] of Object.entries(i.value.fieldMap))
                    h[$] !== void 0 && h[pe] === void 0 && (h[pe] = h[$], delete h[$]);
                return h;
              })
            );
            for (let h = 0; h < p.rows.length; h++)
              for (const [$] of Object.entries(p.rows[h]))
                e.ui.isPlainText(p.rows[h][$]) && (p.rows[h][$] = e.ui.escapeHtml(p.rows[h][$]));
            p.fields = p.fields.concat(
              m.fields.map((h) => ((!e.ui.exposeOids && h.type === "oid" || !e.ui.exposeMeasurements && (h.name.toLowerCase() === "shape_length" || h.name.toLowerCase() === "shape_area")) && Me.value.add(h.name), {
                name: i.value.fieldMap && i.value.fieldMap[h.name] ? i.value.fieldMap[h.name] : h.name,
                type: h.type,
                alias: h.alias ?? void 0,
                length: h.length ?? void 0
              }))
            ), p.oidField = i.value.fieldMap && i.value.fieldMap[m.oidField] ? i.value.fieldMap[m.oidField] : m.oidField, de.value[S] = b;
          }), he.value = p.oidField, ["rvRowIndex", "rvInteractive", "rvSymbol", ...p.columns].forEach((m) => {
            i.value.state?.columns[m.data] === void 0 && (i.value.state.columns[m.data] = new Rt({
              field: m.data,
              title: m.title
            })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && Me.value.has(m.data) && (i.value.state.columns[m.data].visible = !1);
            let g = i.value.state?.columns[m.data], b = {
              headerName: g.title ?? m.title,
              headerComponent: "agColumnHeader",
              headerComponentParams: {
                sort: g.sort
              },
              field: m.data ?? m,
              isSelector: g.filter.type === "selector",
              sortable: !0,
              lockPosition: !0,
              filterParams: {},
              floatingFilter: i.value.state.colFilter && g.searchable,
              hide: !g?.visible,
              minWidth: g.width,
              maxWidth: g.width ?? 400,
              cellRenderer: (h) => h.value,
              suppressHeaderKeyboardEvent: (h) => {
                const $ = h.event;
                return h.headerRowIndex === 0 && ($.key === "Enter" || !$.target.classList.contains("ag-header-cell") && $.key === "Tab");
              }
            }, S = p.fields.find((h) => h.name === b.field);
            m === "rvRowIndex" || m === "rvSymbol" || m === "rvInteractive" ? mt(b, ee.value, i.value.state) : (n.indexOf(S.type) > -1 ? (pt(b, i.value.state), b.filter = "agNumberColumnFilter", b.autoHeight = !0, b.cellRenderer = g.template === "" ? De : e.component(g.template), b.cellRendererParams = {
              type: "number"
            }) : S.type === ae.DATE ? (ut(b, i.value.state), b.filter = "agDateColumnFilter", b.autoHeight = !0, b.minWidth = 400, b.cellRenderer = g.template === "" ? De : e.component(g.template), b.cellRendererParams = {
              type: "date"
            }) : S.type === ae.STRING && (b.isSelector ? dt(b, p.rows, i.value.state) : ct(b, i.value.state), b.filter = "agTextColumnFilter", b.autoHeight = !0, b.cellRenderer = g.template === "" ? De : e.component(g.template), b.cellRendererParams = {
              type: "string"
            }), ee.value.push(b));
          }), ue.value = Se(p.rows), ee.value = Se(ee.value), Ae(), D.value = !1;
        }).catch((f) => {
          console.error(f), J.value = !0, D.value = !1;
        });
      });
    };
    return me(() => {
      i.value = a.grids[v.gridId], D.value = !0, w(), j.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, X.value = {
        agColumnHeader: _l,
        numberFloatingFilter: Zt,
        textFloatingFilter: el,
        selectorFloatingFilter: nl,
        dateFloatingFilter: cl,
        clearFloatingFilter: vl
      }, F.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: !0,
        rowHeight: 40,
        suppressRowTransform: !0,
        onFilterChanged: () => {
          Fe(), Ae();
        },
        onBodyScroll: () => {
          [...e.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((s) => {
            s._tippy && c.value?.contains(s._tippy.reference) && s._tippy.hide();
          });
        },
        onBodyScrollEnd: () => {
          He();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: !0,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: Ut,
        // tab vertically instead of horizontally
        tabToNextHeader: Ot,
        onModelUpdated: qe(300, () => G.value.autoSizeAllColumns())
      }, Oe(), z.value === "partial" && e.notify.show(je.WARNING, e.$i18n.t("layer.filterwarning")), ge.value.push(
        Re(M, () => {
          A.value = !1, setTimeout(() => {
            A.value = !0;
          }, 10);
        })
      ), ge.value.push(
        Re(z, (s) => {
          s === "partial" && e.notify.show(je.WARNING, e.$i18n.t("layer.filterwarning"));
        })
      );
    }), Q(() => {
      ze(), q.value.forEach((s) => e.event.off(s)), ge.value.forEach((s) => s()), Ee.value?.removeAccessibilityListeners(), Ee.value?.removeScrollListeners();
    }), (s, t) => {
      const f = Ge("dropdown-menu"), p = K("truncate"), m = K("tippy");
      return _(), E("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: c
      }, [
        k(o("div", null, [
          o("p", Pl, T(y(d)("grid.splash.error")), 1)
        ], 512), [
          [le, J.value]
        ]),
        k(o("div", Hl, [
          o("div", Nl, [
            o("span", Bl, T(ie.value.reduce((g, b) => g + b, 0)), 1),
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
            o("span", zl, T(Le.value), 1)
          ]),
          o("div", Ol, [
            o("span", Ul, T(ie.value.reduce((g, b) => g + b, 0) < Le.value ? y(d)("grid.splash.loading") : y(d)("grid.splash.building")), 1)
          ]),
          o("div", null, [
            o("button", {
              type: "button",
              onClick: Be,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": y(d)("grid.splash.cancel")
            }, T(y(d)("grid.splash.cancel")), 9, Kl)
          ])
        ], 512), [
          [le, D.value && !J.value]
        ]),
        k(o("div", jl, [
          o("div", ql, [
            k((_(), E("div", Wl, [
              N(T(_e.value), 1)
            ])), [
              [le, _e.value !== ""],
              [p]
            ]),
            k((_(), E("div", Yl, [
              N(T(y(d)("grid.filters.label.info", {
                range: j.value.visibleRows !== 0 ? `${j.value.firstRow} - ${j.value.lastRow}` : "0",
                total: j.value.visibleRows
              })) + " ", 1),
              j.value.visibleRows !== ue.value.length ? (_(), E("span", Zl, T(y(d)("grid.filters.label.filtered", {
                max: ue.value.length
              })), 1)) : R("", !0)
            ])), [
              [p]
            ])
          ]),
          o("div", Ql, [
            k(o("div", Xl, [
              k(o("input", {
                onInput: t[0] || (t[0] = (g) => ke()),
                onKeypress: t[1] || (t[1] = H(P(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: t[2] || (t[2] = H((g) => {
                  y(l).mobileView && g?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": t[3] || (t[3] = (g) => i.value.state.searchFilter = g),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": y(d)("grid.filters.label.global"),
                placeholder: y(d)("grid.filters.label.global")
              }, null, 40, Jl), [
                [se, i.value.state.searchFilter]
              ]),
              o("div", ea, [
                i.value.state.searchFilter.length < 3 ? (_(), E("svg", ta, t[13] || (t[13] = [
                  o("g", { id: "search_cache224" }, [
                    o("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (_(), E("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer",
                  onClick: t[4] || (t[4] = (g) => Pe())
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
                ])))
              ])
            ], 512), [
              [le, i.value.state.search]
            ]),
            o("div", la, [
              Ie(Nt, {
                columnApi: G.value,
                columnDefs: ee.value,
                systemCols: Me.value,
                onRefreshHeaders: t[5] || (t[5] = (g) => x.value.refreshHeader())
              }, null, 8, ["columnApi", "columnDefs", "systemCols"]),
              k((_(), E("button", {
                type: "button",
                class: "grid-clearall p-4 h-40 text-gray-500 hover:text-black",
                onClick: t[6] || (t[6] = (g) => rt()),
                content: y(d)("grid.clearAll"),
                "aria-label": y(d)("grid.clearAll")
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
              ]), 8, aa)), [
                [m, {
                  placement: "bottom"
                }]
              ]),
              Ie(f, {
                class: "h-40 w-40",
                position: "bottom-end",
                tooltip: y(d)("panels.controls.optionsMenu"),
                centered: !1
              }, {
                header: re(() => t[16] || (t[16] = [
                  o("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    class: "fill-current m-8 w-24 h-24"
                  }, [
                    o("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
                  ], -1)
                ])),
                default: re(() => [
                  o("a", {
                    href: "javascript:;",
                    class: O(["flex leading-snug items-center w-256", {
                      hover: z.value !== "disabled" ? "none" : "text-black",
                      disabled: z.value === "disabled"
                    }]),
                    onClick: t[7] || (t[7] = (g) => z.value !== "disabled" && gt()),
                    role: "button",
                    "aria-label": y(d)("grid.label.filters.apply")
                  }, [
                    o("div", sa, [
                      t[18] || (t[18] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      N(" " + T(y(d)("grid.label.filters.apply")) + " ", 1),
                      z.value !== "disabled" && i.value.state.applyToMap ? (_(), E("svg", na, t[17] || (t[17] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 10, ra),
                  o("a", {
                    href: "javascript:;",
                    class: "flex leading-snug items-center w-256 hover:text-black",
                    onClick: t[8] || (t[8] = (g) => nt()),
                    role: "button",
                    "aria-label": y(d)("grid.label.filters.show")
                  }, [
                    o("div", ia, [
                      t[20] || (t[20] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      N(" " + T(y(d)("grid.label.filters.show")) + " ", 1),
                      i.value.state.colFilter ? (_(), E("svg", ua, t[19] || (t[19] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 8, oa),
                  o("a", {
                    href: "javascript:;",
                    class: O(["flex leading-snug items-center w-256", {
                      hover: z.value !== "disabled" ? "none" : "text-black",
                      disabled: z.value === "disabled"
                    }]),
                    onClick: t[9] || (t[9] = (g) => z.value !== "disabled" && st()),
                    role: "button",
                    "aria-label": y(d)("grid.filters.label.extent")
                  }, [
                    o("div", pa, [
                      t[22] || (t[22] = o("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current inline w-20 h-20 mr-2 text-gray-500"
                      }, [
                        o("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      N(" " + T(y(d)("grid.filters.label.extent")) + " ", 1),
                      z.value !== "disabled" && i.value.state.filterByExtent ? (_(), E("svg", ca, t[21] || (t[21] = [
                        o("g", { id: "done" }, [
                          o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : R("", !0)
                    ])
                  ], 10, da),
                  o("a", {
                    href: "javascript:;",
                    class: O(["flex leading-snug items-center w-256", { hover: "text-black" }]),
                    onClick: t[10] || (t[10] = (g) => ot()),
                    role: "button",
                    "aria-label": y(d)("grid.label.pinColumns")
                  }, [
                    u.value ? (_(), E("svg", va, t[23] || (t[23] = [
                      o("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                    ]))) : u.value ? R("", !0) : (_(), E("svg", fa, t[24] || (t[24] = [
                      o("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                    ]))),
                    N(" " + T(y(d)("grid.label.pinColumns")) + " ", 1),
                    u.value ? (_(), E("svg", ga, t[25] || (t[25] = [
                      o("g", { id: "done" }, [
                        o("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                      ], -1)
                    ]))) : R("", !0)
                  ], 8, ma),
                  o("a", {
                    href: "javascript:;",
                    class: O(["flex leading-snug items-center w-256", { hover: "text-black" }]),
                    onClick: t[11] || (t[11] = (g) => it()),
                    role: "button",
                    "aria-label": y(d)("grid.label.export")
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
                    N(" " + T(y(d)("grid.label.export")), 1)
                  ], 8, ha)
                ]),
                _: 1
              }, 8, ["tooltip"])
            ])
          ])
        ], 512), [
          [le, !D.value && !J.value]
        ]),
        A.value ? k((_(), Ve(y(Tt), {
          key: 0,
          class: "ag-theme-material flex-grow",
          enableCellTextSelection: "true",
          accentedSort: "true",
          localeText: y(M) === "en" ? y(St) : y(Dt),
          gridOptions: F.value,
          columnDefs: ee.value,
          rowData: ue.value,
          components: X.value,
          onGridReady: lt,
          onKeydown: wt,
          onFirstDataRendered: at,
          onCellKeyPress: y(Je),
          doesExternalFilterPass: ft,
          isExternalFilterPresent: vt
        }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])), [
          [le, !D.value && !J.value]
        ]) : R("", !0)
      ], 512);
    };
  }
}), ba = /* @__PURE__ */ fe(ya, [["__scopeId", "data-v-eef18a1a"]]), wa = /* @__PURE__ */ I({
  __name: "screen",
  props: {
    panel: {
      type: Qe,
      required: !0
    }
  },
  setup(L) {
    const n = Xe(), { t: e } = B(), a = U(() => n.currentId);
    return (l, r) => {
      const u = Ge("panel-screen");
      return _(), Ve(u, { panel: L.panel }, {
        header: re(() => [
          N(T(y(e)("grid.title")), 1)
        ]),
        content: re(() => [
          Ie(ba, {
            class: "rv-grid",
            gridId: a.value,
            panel: L.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Er = /* @__PURE__ */ fe(wa, [["__scopeId", "data-v-904e67ef"]]);
export {
  Er as default
};
