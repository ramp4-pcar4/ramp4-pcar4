import { defineComponent as H, inject as de, resolveComponent as Pe, resolveDirective as O, createBlock as lt, openBlock as C, unref as f, withCtx as oe, createElementBlock as _, Fragment as at, renderList as rt, createElementVNode as n, withDirectives as $, createTextVNode as ie, toDisplayString as D, normalizeClass as B, ref as w, onBeforeMount as fe, withKeys as N, withModifiers as z, vModelText as ue, vModelSelect as At, onMounted as ee, nextTick as Ee, onBeforeUnmount as te, createCommentVNode as I, computed as P, useTemplateRef as $t, getCurrentInstance as Tt, watch as Ie, vShow as se, createVNode as Me, markRaw as Ve } from "vue";
import "tiny-emitter";
import { a as ge, _ as he, G as J, W as Rt, X as St, L as Dt, Y as Gt, Z as st, $ as ne, i as nt, a0 as It, a1 as Je, a2 as _e, a3 as Vt } from "./main-C_bHinLl.js";
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
import { debounce as et } from "throttle-debounce";
import "pinia";
import { useI18n as U } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import Pt from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import Ht from "await-to-js";
import "svg.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as Bt } from "ag-grid-vue3";
import { T as Nt, C as zt } from "./table-state-manager-BxfbugKY.js";
import { AG_GRID_LOCALE_EN as Ot, AG_GRID_LOCALE_FR as Ut } from "@ag-grid-community/locale";
import { ModuleRegistry as Kt, AllCommunityModule as jt, provideGlobalGridOptions as qt } from "ag-grid-community";
function ot(b, s, e) {
  return b[s].find(
    (r) => (r.mappedAttr ?? r.origAttr) === e
  );
}
function He(b, s) {
  const e = ot(b, s.id, s.oidField);
  return e ? e.mappedAttr ?? e.origAttr : s.oidField;
}
const Wt = ".ag-root", Yt = ".ag-header-viewport .ag-header-row";
class tt {
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
  static onCellKeyPress({ event: s }) {
    function e(r) {
      r.forEach((t) => {
        t.href && window.open(t.href), t.childNodes.length > 0 && e(t.childNodes);
      });
    }
    s.key == "Enter" && e(s.target.childNodes);
  }
  /**
   * Initializes focus lists and listeners for grid keyboard navigation.
   *
   * @param {HTMLElement} element The grid element
   * @param {GridApi} agGridApi The ag-grid grid api
   * @param {ColumnApi} agColumnApi The ag-grid column api
   */
  constructor(s, e) {
    this.element = s, this.agGridApi = e, this.agGrid = this.element.querySelector(Wt), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(Yt)
    ), this.initAccessibilityListeners(), this.initScrollListeners();
  }
  /**
   * Set up the listeners for the grid.
   */
  initAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, r) => {
      const t = Array.prototype.slice.call(e.querySelectorAll("button"));
      r < 1 || t.length === 0 || (e.addEventListener("keydown", (o) => {
        this.cellKeydownHandler(o, e, t);
      }), e.addEventListener("blur", (o) => {
        this.cellBlurHandler(o, e, t);
      }), t[t.length - 1].addEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, t, !1);
      }), t[0].addEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, t, !0);
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
      const t = Array.prototype.slice.call(e.querySelectorAll("button"));
      r < 1 || t.length === 0 || (e.removeEventListener("keydown", (o) => {
        this.cellKeydownHandler(o, e, t);
      }), e.removeEventListener("blur", (o) => {
        this.cellBlurHandler(o, e, t);
      }), t[t.length - 1].removeEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, t, !1);
      }), t[0].removeEventListener("keydown", (o) => {
        this.cellButtonTabHandler(o, e, t, !0);
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
  cellKeydownHandler(s, e, r) {
    s.key === "Enter" && s.target === e && (s.preventDefault(), r.forEach((t) => {
      t.setAttribute("tabindex", "0");
    }), r[0].focus());
  }
  /**
   * Removes ability to tab to inner items when focus leaves the cell (and inner items)
   *
   * @param {FocusEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellBlurHandler(s, e, r) {
    s.target === e && !r.includes(s.relatedTarget) && r.forEach((t) => {
      t.setAttribute("tabindex", "-1");
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
  cellButtonTabHandler(s, e, r, t) {
    s.key === "Tab" && (t && s.shiftKey || !t && !s.shiftKey) && (s.preventDefault(), e.focus(), r.forEach((o) => {
      o.setAttribute("tabindex", "-1");
    }));
  }
  //  **** CLICK & DRAG SCROLLING ****
  /**
   * Initializes the handlers needed for click + drag scrolling
   */
  initScrollListeners() {
    this.agGrid.style.cursor = "grab", this.agGrid.addEventListener("mousedown", (s) => {
      this.scrollMouseDownHandler(s);
    });
  }
  /**
   * Removes the handlers for click + drag scrolling
   */
  removeScrollListeners() {
    this.agGrid.style.cursor = "default", this.agGrid.removeEventListener("mousedown", (s) => {
      this.scrollMouseDownHandler(s);
    });
  }
  /**
   * Handles starting click + drag scrolling on mousedown
   *
   * @param {MouseEvent} event The mousedown event
   */
  scrollMouseDownHandler(s) {
    const e = this.element.querySelector(".ag-body-horizontal-scroll-viewport"), r = e.scrollLeft, t = s.clientX;
    this.agGrid.style.cursor = "grabbing";
    const o = (i) => {
      const m = i.clientX - t;
      e.scrollLeft = r - m;
    }, v = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", o), this.agGrid.removeEventListener("mouseup", v), this.agGrid.removeEventListener("mouseleave", v);
    };
    this.agGrid.addEventListener("mousemove", o), this.agGrid.addEventListener("mouseup", v), this.agGrid.addEventListener("mouseleave", v);
  }
}
function Zt(b) {
  const s = b.previousHeaderPosition.column, e = b.previousHeaderPosition.headerRowIndex;
  let r = b.backwards ? e - 1 : e + 1;
  return r === -1 ? !1 : (r === b.headerRowCount && (r = -1), { headerRowIndex: r, column: s });
}
function Qt(b) {
  return b.backwards ? { column: b.previousCellPosition.column, rowIndex: -1 } : !1;
}
const Xt = ["onClick"], Jt = { class: "md-icon-small flex w-full" }, el = { class: "flex-1 truncate whitespace-nowrap overflow-hidden pr-4" }, tl = /* @__PURE__ */ H({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    gridApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(b) {
    const s = de("iApi"), { t: e } = U();
    return (r, t) => {
      const o = Pe("dropdown-menu"), v = O("truncate");
      return C(), lt(o, {
        class: "relative",
        position: "bottom-end",
        tooltip: f(e)("grid.label.columns"),
        tooltipPlacementAlt: "left",
        centered: !1
      }, {
        header: oe(() => t[0] || (t[0] = [
          n("div", { class: "flex p-8" }, [
            n("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fit: "",
              height: "24px",
              width: "24px",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 23 24",
              focusable: "false",
              class: "inline fill-current"
            }, [
              n("g", { id: "format-list-checks_cache966" }, [
                n("path", { d: "M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z" })
              ])
            ])
          ], -1)
        ])),
        default: oe(() => [
          (C(!0), _(at, null, rt(b.columnDefs.filter(
            (i) => i.headerName && i.headerName.length > 0 && !(!f(s).ui.exposeOids && b.systemCols?.has(i.headerName)) && !(!f(s).ui.exposeMeasurements && (b.systemCols?.has(i.headerName) || b.systemCols?.has(i.field)))
          ), (i) => (C(), _("a", {
            "truncate-trigger": "",
            tabindex: "0",
            key: i.headerName,
            onClick: (m) => {
              b.gridApi?.setColumnsVisible([i.field], i.hide), i.hide = !i.hide, r.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center max-w-[268px]"
          }, [
            n("div", Jt, [
              $((C(), _("span", el, [
                ie(D(i.headerName), 1)
              ])), [
                [v, {
                  externalTrigger: !0,
                  options: {
                    placement: "left"
                  }
                }]
              ]),
              (C(), _("svg", {
                height: "18",
                width: "18",
                viewBox: "0 0 24 24",
                class: B({ invisible: i.hide })
              }, t[1] || (t[1] = [
                n("g", { id: "done" }, [
                  n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                ], -1)
              ]), 2))
            ])
          ], 8, Xt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), ll = { class: "h-full flex items-center justify-center" }, al = ["placeholder", "aria-label", "disabled"], rl = ["placeholder", "aria-label", "disabled"], sl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, nl = /* @__PURE__ */ H({
  ...sl,
  __name: "custom-number-filter",
  props: ["params"],
  setup(b) {
    const s = ge(), { t: e } = U(), r = b, t = w(""), o = w(""), v = w(!!r.params.stateManager.columns[r.params.column.colDef.field].filter.static), i = () => {
      M(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, t.value, "min");
    }, m = () => {
      M(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, o.value, "max");
    }, g = (L) => typeof L != "number" || isNaN(L), M = () => {
      t.value !== "" && g(t.value) && (t.value = ""), o.value !== "" && g(o.value) && (o.value = "");
      const L = r.params.column.colDef.field;
      o.value === "" && t.value === "" ? r.params.api.setColumnFilterModel(L, null) : o.value !== "" && t.value !== "" ? r.params.api.setColumnFilterModel(L, {
        filterType: "number",
        type: "inRange",
        filter: t.value,
        filterTo: o.value
      }) : t.value === "" ? r.params.api.setColumnFilterModel(L, {
        filterType: "number",
        type: "lessThanOrEqual",
        filter: o.value
      }) : r.params.api.setColumnFilterModel(L, {
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: t.value
      }), r.params.api.onFilterChanged();
    };
    return fe(() => {
      t.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "min"), o.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "max"), i(), m();
    }), (L, h) => (C(), _("div", ll, [
      $(n("input", {
        class: B(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": h[0] || (h[0] = (u) => t.value = u),
        onInput: h[1] || (h[1] = (u) => i()),
        onMousedown: h[2] || (h[2] = z(() => {
        }, ["stop"])),
        onKeypress: h[3] || (h[3] = N(z(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[4] || (h[4] = N((u) => {
          f(s).mobileView && u.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.min"),
        "aria-label": f(e)("grid.filters.number.min"),
        disabled: v.value
      }, null, 42, al), [
        [ue, t.value]
      ]),
      h[10] || (h[10] = n("span", { class: "w-12" }, null, -1)),
      $(n("input", {
        class: B(["rv-max rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": h[5] || (h[5] = (u) => o.value = u),
        onInput: h[6] || (h[6] = (u) => m()),
        onMousedown: h[7] || (h[7] = z(() => {
        }, ["stop"])),
        onKeypress: h[8] || (h[8] = N(z(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[9] || (h[9] = N((u) => {
          f(s).mobileView && u.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.max"),
        "aria-label": f(e)("grid.filters.number.max"),
        disabled: v.value
      }, null, 42, rl), [
        [ue, o.value]
      ])
    ]));
  }
}), ol = /* @__PURE__ */ he(nl, [["__scopeId", "data-v-ab99947a"]]), il = { class: "h-full flex items-center justify-center" }, ul = ["placeholder", "aria-label", "disabled"], dl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, pl = /* @__PURE__ */ H({
  ...dl,
  __name: "custom-text-filter",
  props: ["params"],
  setup(b) {
    const s = ge(), { t: e } = U(), r = b, t = w(""), o = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), v = () => {
      t.value = t.value ? t.value : "";
      const i = r.params.column.colDef.field;
      t.value ? r.params.api.setColumnFilterModel(i, {
        filterType: "text",
        type: "contains",
        filter: t.value
      }) : r.params.api.setColumnFilterModel(i, null), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, t.value), r.params.api.onFilterChanged();
    };
    return fe(() => {
      t.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field).toString(), v();
    }), (i, m) => (C(), _("div", il, [
      $(n("input", {
        class: B(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": o.value
        }]),
        type: "text",
        onInput: m[0] || (m[0] = (g) => v()),
        "onUpdate:modelValue": m[1] || (m[1] = (g) => t.value = g),
        onMousedown: m[2] || (m[2] = z(() => {
        }, ["stop"])),
        onKeypress: m[3] || (m[3] = N(z(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: m[4] || (m[4] = N((g) => {
          f(s).mobileView && g.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.column.label.text", [b.params.column.colDef.headerName]),
        "aria-label": f(e)("grid.filters.column.label.text", [b.params.column.colDef.headerName]),
        disabled: o.value
      }, null, 42, ul), [
        [ue, t.value]
      ])
    ]));
  }
}), cl = { class: "h-full flex items-center justify-center" }, ml = ["aria-label", "disabled"], vl = ["value"], fl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, gl = /* @__PURE__ */ H({
  ...fl,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(b) {
    const s = b, e = w(""), r = w([]), t = w(s.params.stateManager.columns[s.params.column.colDef.field].filter.static), o = () => {
      e.value = e.value ? e.value : "";
      const v = s.params.column.colDef.field;
      e.value === "..." || !e.value ? (s.params.api.setColumnFilterModel(v, null), e.value = "") : s.params.api.setColumnFilterModel(v, {
        filterType: "text",
        type: "contains",
        filter: e.value
      }), s.params.stateManager.setColumnFilterValue(s.params.column.colDef.field, e.value), s.params.api.onFilterChanged();
    };
    return fe(() => {
      e.value = s.params.stateManager.getColumnFilterValue(s.params.column.colDef.field);
      const v = s.params.rowData, i = new Set(v.map((m) => m[s.params.column.colId]));
      r.value = Array.from(i), r.value.unshift("..."), o();
    }), (v, i) => (C(), _("div", cl, [
      $(n("select", {
        class: B(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": t.value
        }]),
        "onUpdate:modelValue": i[0] || (i[0] = (m) => e.value = m),
        onChange: i[1] || (i[1] = (m) => o()),
        onMousedown: i[2] || (i[2] = z(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: t.value
      }, [
        (C(!0), _(at, null, rt(r.value, (m) => (C(), _("option", {
          value: m,
          key: m
        }, D(m), 9, vl))), 128))
      ], 42, ml), [
        [At, e.value]
      ])
    ]));
  }
}), hl = /* @__PURE__ */ he(gl, [["__scopeId", "data-v-46624a34"]]), yl = { class: "h-full flex items-center justify-center w-full" }, bl = ["placeholder", "aria-label", "disabled"], wl = ["placeholder", "aria-label", "disabled"], xl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, Cl = /* @__PURE__ */ H({
  ...xl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(b) {
    const s = ge(), { t: e } = U(), r = b, t = w(""), o = w(""), v = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), i = () => {
      g(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, t.value, "min");
    }, m = () => {
      g(), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, o.value, "max");
    }, g = () => {
      const M = r.params.column.colDef.field;
      o.value === "" && t.value === "" ? r.params.api.setColumnFilterModel(M, null) : o.value !== "" && t.value !== "" ? r.params.api.setColumnFilterModel(M, {
        filterType: "date",
        type: "inRange",
        dateFrom: t.value,
        dateTo: o.value
      }) : t.value === "" ? r.params.api.setColumnFilterModel(M, {
        filterType: "date",
        type: "lessThan",
        dateFrom: o.value
      }) : r.params.api.setColumnFilterModel(M, {
        filterType: "date",
        type: "greaterThan",
        dateFrom: t.value
      }), r.params.api.onFilterChanged();
    };
    return fe(() => {
      t.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "min") || "", o.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field, "max") || "", i(), m();
    }), (M, L) => (C(), _("div", yl, [
      $(n("input", {
        class: B(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        type: "date",
        placeholder: f(e)("grid.filters.date.min"),
        "aria-label": f(e)("grid.filters.date.min"),
        "onUpdate:modelValue": L[0] || (L[0] = (h) => t.value = h),
        onInput: L[1] || (L[1] = (h) => i()),
        onMousedown: L[2] || (L[2] = z(() => {
        }, ["stop"])),
        onKeypress: L[3] || (L[3] = N(z(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: L[4] || (L[4] = N((h) => {
          f(s).mobileView && h.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: v.value
      }, null, 42, bl), [
        [ue, t.value]
      ]),
      L[10] || (L[10] = n("span", { class: "w-12" }, null, -1)),
      $(n("input", {
        class: B(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        type: "date",
        placeholder: f(e)("grid.filters.date.max"),
        "aria-label": f(e)("grid.filters.date.max"),
        "onUpdate:modelValue": L[5] || (L[5] = (h) => o.value = h),
        onInput: L[6] || (L[6] = (h) => m()),
        onMousedown: L[7] || (L[7] = z(() => {
        }, ["stop"])),
        onKeypress: L[8] || (L[8] = N(z(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: L[9] || (L[9] = N((h) => {
          f(s).mobileView && h.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: v.value
      }, null, 42, wl), [
        [ue, o.value]
      ])
    ]));
  }
}), Ll = /* @__PURE__ */ he(Cl, [["__scopeId", "data-v-4019b3f7"]]), _l = ["content", "disabled", "aria-label"], El = /* @__PURE__ */ H({
  __name: "clear-filter",
  props: ["params"],
  setup(b) {
    const s = b, { t: e } = U(), r = w(), t = w(), o = w(), v = () => s.params.clearFilters();
    return ee(async () => {
      await Ee(), t.value = r.value?.closest(".ag-header-cell"), o.value = t.value.closest(".ag-pinned-left-header"), t.value.addEventListener("keydown", async (i) => {
        i.key === "Enter" && (i.stopPropagation(), v(), await Ee(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), t.value.addEventListener("focus", () => {
        r.value._tippy.show();
      }), t.value.addEventListener("blur", () => {
        r.value._tippy.hide();
      });
    }), te(() => {
      t.value && (t.value.removeEventListener("keydown", async (i) => {
        i.key === "Enter" && (i.stopPropagation(), v(), await Ee(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), t.value.removeEventListener("focus", () => {
        r.value._tippy.show();
      }), t.value.removeEventListener("blur", () => {
        r.value._tippy.hide();
      }));
    }), (i, m) => {
      const g = O("tippy");
      return $((C(), _("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: v,
        content: f(e)("grid.filters.clear"),
        disabled: !b.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: r,
        "aria-label": f(e)("grid.filters.clear")
      }, m[0] || (m[0] = [
        n("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          "enable-background": "new 0 0 24 24",
          class: "h-24 w-24 fill-current",
          viewBox: "0 0 24 24"
        }, [
          n("g", null, [
            n("rect", {
              fill: "none",
              height: "24",
              width: "24"
            })
          ]),
          n("g", null, [
            n("g", null, [
              n("path", { d: "M19.79,5.61C20.3,4.95,19.83,4,19,4H6.83l7.97,7.97L19.79,5.61z" }),
              n("path", { d: "M2.81,2.81L1.39,4.22L10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-2.17l5.78,5.78l1.41-1.41L2.81,2.81z" })
            ])
          ])
        ], -1)
      ]), 8, _l)), [
        [g, { placement: "bottom" }]
      ]);
    };
  }
}), Ml = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, kl = ["content", "aria-label"], Fl = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, Al = {
  key: 2,
  class: "flex"
}, $l = {
  key: 0,
  class: "w-24 inline-block"
}, Tl = {
  key: 1,
  class: "customSortDownLabel"
}, Rl = {
  key: 2,
  class: "customSortUpLabel"
}, Sl = ["content", "aria-label", "disabled"], Dl = ["content", "aria-label", "disabled"], Gl = /* @__PURE__ */ H({
  __name: "custom-header",
  props: ["params"],
  setup(b) {
    const { t: s } = U(), e = b, r = w(), t = w(0), o = w(!1), v = w(!1), i = w(!1), m = w(null), g = () => {
      const u = m.value?.getAllDisplayedColumns(), k = u.indexOf(e.params.column), R = u[k - 1]?.colDef, q = u[k + 1]?.colDef;
      v.value = k > 3 && !(R?.headerComponentParams?.isStatic ?? R?.isStatic), i.value = k < u.length - 1 && !(q?.headerComponentParams?.isStatic ?? q?.isStatic);
    }, M = () => {
      const u = m.value?.getAllDisplayedColumns(), k = m.value?.getAllGridColumns(), R = k.indexOf(u[u.indexOf(e.params.column) - 1]);
      v.value && (m.value?.moveColumns([e.params.column], R), e.params.api.ensureColumnVisible(k[R]), r.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, L = () => {
      const u = m.value?.getAllDisplayedColumns(), k = m.value?.getAllGridColumns(), R = k.indexOf(u[u.indexOf(e.params.column) + 1]);
      i.value && (m.value?.moveColumns([e.params.column], R), e.params.api.ensureColumnVisible(k[R]));
    }, h = (u) => {
      t.value = (t.value + 1) % 3, t.value === 1 ? e.params.setSort("asc", u.shiftKey) : t.value === 2 ? e.params.setSort("desc", u.shiftKey) : e.params.setSort("none", u.shiftKey);
    };
    return ee(() => {
      o.value = e.params.column.colDef.sortable, m.value = e.params.api, e.params.sort === "asc" ? (t.value = 1, e.params.setSort("asc")) : e.params.sort === "desc" && (t.value = 2, e.params.setSort("desc")), g(), e.params.column.addEventListener("leftChanged", () => {
        g();
      });
    }), te(() => {
      e.params.column.removeEventListener("leftChanged", () => {
        g();
      });
    }), (u, k) => {
      const R = O("truncate"), q = O("tippy");
      return C(), _("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: r
      }, [
        o.value ? (C(), _("div", Ml, [
          $((C(), _("button", {
            type: "button",
            onClick: k[0] || (k[0] = (le) => h(le)),
            content: f(s)(`grid.header.sort.${t.value}`),
            "aria-label": f(s)(`grid.header.sort.${t.value}`),
            class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
            role: "columnheader",
            tabindex: "-1"
          }, [
            $((C(), _("div", null, [
              ie(D(b.params.displayName), 1)
            ])), [
              [R, { externalTrigger: !0 }]
            ])
          ], 8, kl)), [
            [q, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : $((C(), _("span", Fl, [
          ie(D(b.params.displayName), 1)
        ])), [
          [R]
        ]),
        o.value ? (C(), _("div", Al, [
          b.params.enableSorting && t.value === 0 ? (C(), _("span", $l)) : I("", !0),
          b.params.enableSorting && t.value === 1 ? (C(), _("span", Tl, k[3] || (k[3] = [
            n("div", { class: "md-icon-small" }, [
              n("svg", {
                height: "24",
                width: "24"
              }, [
                n("g", { id: "arrow_upward" }, [
                  n("path", { d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })
                ])
              ])
            ], -1)
          ]))) : I("", !0),
          b.params.enableSorting && t.value === 2 ? (C(), _("span", Rl, k[4] || (k[4] = [
            n("div", { class: "md-icon-small" }, [
              n("svg", {
                height: "24",
                width: "24"
              }, [
                n("g", { id: "arrow_downward" }, [
                  n("path", { d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })
                ])
              ])
            ], -1)
          ]))) : I("", !0),
          $((C(), _("button", {
            type: "button",
            content: f(s)("grid.header.reorder.left"),
            "aria-label": f(s)("grid.header.reorder.left"),
            onClick: k[1] || (k[1] = (le) => M()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !v.value
          }, k[5] || (k[5] = [
            n("div", { class: "inline-block" }, [
              n("svg", {
                height: "24",
                width: "24"
              }, [
                n("g", { id: "keyboard_arrow_left" }, [
                  n("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Sl)), [
            [q, { placement: "top" }]
          ]),
          $((C(), _("button", {
            type: "button",
            content: f(s)("grid.header.reorder.right"),
            "aria-label": f(s)("grid.header.reorder.right"),
            onClick: k[2] || (k[2] = (le) => L()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !i.value
          }, k[6] || (k[6] = [
            n("div", { class: "inline-block" }, [
              n("svg", {
                height: "24",
                width: "24"
              }, [
                n("g", { id: "keyboard_arrow_right" }, [
                  n("path", { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" })
                ])
              ])
            ], -1)
          ]), 8, Dl)), [
            [q, { placement: "top" }]
          ])
        ])) : I("", !0)
      ], 512);
    };
  }
}), Il = ["content", "aria-label"], Vl = /* @__PURE__ */ H({
  __name: "details-button-renderer",
  props: ["params"],
  setup(b) {
    const s = b, { t: e } = U(), r = de("iApi"), t = w(), o = async () => {
      const v = s.params.data, i = v.rvUid, m = r.geo.layer.getLayer(i), g = He(s.params.layerCols, m), M = await m.getGraphic(v[g], {
        getAttribs: !0
      });
      r.event.emit(
        J.DETAILS_TOGGLE,
        {
          data: M.attributes,
          uid: i,
          format: Rt.ESRI
        },
        !0
      ), s.params.isTeleport && r.scrollToInstance();
    };
    return ee(() => {
      s.params.eGridCell.addEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), s.params.eGridCell.addEventListener("focus", () => {
        t.value._tippy.show();
      }), s.params.eGridCell.addEventListener("blur", () => {
        t.value._tippy.hide();
      });
    }), te(() => {
      s.params.eGridCell.removeEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), s.params.eGridCell.removeEventListener("focus", () => {
        t.value._tippy.show();
      }), s.params.eGridCell.removeEventListener("blur", () => {
        t.value._tippy.hide();
      });
    }), (v, i) => {
      const m = O("tippy");
      return $((C(), _("button", {
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: f(e)("grid.cells.details"),
        onClick: o,
        tabindex: "-1",
        ref_key: "el",
        ref: t,
        "aria-label": f(e)("grid.cells.details")
      }, i[0] || (i[0] = [
        n("svg", {
          class: "m-auto",
          xmlns: "http://www.w3.org/2000/svg",
          height: "16",
          viewBox: "0 0 24 24",
          width: "16"
        }, [
          n("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
          }),
          n("path", {
            style: { fill: "#979797" },
            d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
          })
        ], -1)
      ]), 8, Il)), [
        [m, { placement: "top" }]
      ]);
    };
  }
}), Pl = ["content", "aria-label"], Hl = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Bl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Nl = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, zl = ["innerHTML"], Ol = /* @__PURE__ */ H({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(b) {
    const s = w("none"), e = b, r = de("iApi"), t = St(), o = w(), { t: v } = U(), i = P(() => {
      const M = t.getLayerByUid(e.params.data.rvUid);
      return !!M && M.mapLayer;
    }), m = () => {
      if (s.value !== "none")
        return;
      s.value = "zooming";
      const M = t.getLayerByUid(e.params.data.rvUid);
      if (M === void 0 || !M.isLoaded) {
        g("error");
        return;
      }
      const L = He(e.params.layerCols, M), h = e.params.data[L], u = () => {
        const k = { getGeom: !0 };
        M.getGraphic(h, k).then((R) => {
          R.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${h}`), g("error")) : (r.geo.map.zoomMapTo(R.geometry), g("zoomed"), r.updateAlert(r.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && r.scrollToInstance());
        }).catch(() => {
          g("error");
        });
      };
      M.layerType === Dt.FEATURE && M.geomType !== Gt.POINT ? M.getGraphicExtent(h).then((k) => {
        r.geo.map.zoomMapTo(k), g("zoomed"), r.updateAlert(r.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && r.scrollToInstance();
      }).catch(() => {
        u();
      }) : u();
    }, g = (M) => {
      M === "zoomed" || M === "error" ? setTimeout(() => {
        s.value = M, o.value?._tippy.show(), setTimeout(() => {
          o.value?._tippy.hide(), s.value = "none";
        }, 3e3);
      }, 300) : s.value = M;
    };
    return ee(() => {
      i.value && (e.params.eGridCell.addEventListener("keydown", (M) => {
        M.key === "Enter" && s.value === "none" && m();
      }), e.params.eGridCell.addEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), te(() => {
      i.value && (e.params.eGridCell.removeEventListener("keydown", (M) => {
        M.key === "Enter" && m();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), (M, L) => {
      const h = O("tippy");
      return i.value ? $((C(), _("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: f(v)(`grid.cells.zoom${s.value === "none" ? "" : `.${s.value}`}`),
        onClick: m,
        tabindex: "-1",
        ref_key: "button",
        ref: o,
        "aria-label": f(v)(`grid.cells.zoom${s.value === "none" ? "" : `.${s.value}`}`)
      }, [
        s.value === "zooming" ? (C(), _("div", Hl)) : s.value === "zoomed" ? (C(), _("svg", Bl, L[0] || (L[0] = [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : s.value === "error" ? (C(), _("svg", Nl, L[1] || (L[1] = [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (C(), _("span", {
          key: 3,
          innerHTML: f(r).ui.getZoomIcon()
        }, null, 8, zl))
      ], 8, Pl)), [
        [h, { placement: "top" }]
      ]) : I("", !0);
    };
  }
}), Ul = ["content"], Kl = ["innerHTML"], jl = /* @__PURE__ */ H({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(b) {
    const s = b, e = de("iApi"), r = w(), t = P(() => {
      const v = Object.assign({}, s.params.data), i = e.geo.layer.getLayer(v.rvUid), m = s.params.config.displayOn;
      return !(!i || m === "geo" && !i.mapLayer || m === "data" && i.mapLayer);
    }), o = () => {
      const v = Object.assign({}, s.params.data), i = v.rvUid, m = e.geo.layer.getLayer(i), g = He(s.params.layerCols, m), M = v[g];
      m.getGraphic(M, { getAttribs: !0 }).then((L) => {
        e.event.emit(s.params.config.actionEvent, {
          data: L.attributes,
          layer: m,
          uid: i,
          oid: M
        });
      });
    };
    return ee(() => {
      s.params.eGridCell.addEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), s.params.eGridCell.addEventListener("focus", () => {
        r.value._tippy.show();
      }), s.params.eGridCell.addEventListener("blur", () => {
        r.value._tippy.hide();
      });
    }), te(() => {
      s.params.eGridCell.removeEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), s.params.eGridCell.removeEventListener("focus", () => {
        r.value._tippy.show();
      }), s.params.eGridCell.removeEventListener("blur", () => {
        r.value._tippy.hide();
      });
    }), (v, i) => {
      const m = O("tippy");
      return t.value ? $((C(), _("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-42 h-38",
        content: s.params.config.tooltip,
        onClick: o,
        tabindex: "-1",
        ref_key: "el",
        ref: r
      }, [
        n("span", {
          innerHTML: s.params.config.icon
        }, null, 8, Kl)
      ], 8, Ul)), [
        [m, { placement: "top" }]
      ]) : I("", !0);
    };
  }
}), ql = ["name", "content", "innerHTML"], Wl = ["content"], Yl = /* @__PURE__ */ H({
  __name: "cell-renderer",
  props: ["params"],
  setup(b) {
    const s = ge(), e = de("iApi"), { t: r } = U(), t = w(), o = w(), v = w(!1), i = b, m = P(() => s.mobileView), g = () => {
      o.value?.textContent && (v.value = !0, t.value?._tippy.show(), navigator.clipboard.writeText(o.value?.textContent), setTimeout(() => {
        v.value = !1;
      }, 2e3));
    }, M = P(() => i.params.type === "number" ? i.params.value == null ? "" : e.ui.formatNumber(i.params.value) : i.params.type === "date" ? i.params.value == null ? "" : new Date(i.params.value).toISOString().slice(0, 10) : i.params.type === "string" ? !i.params.value || /<a[^>]*>[^<]+<\/a>/g.test(i.params.value) ? i.params.value : Pt(i.params.value, {
      target: "_blank",
      validate: {
        url: (h) => /^https?:\/\//.test(h)
        // only links that begin with a protocol will be hyperlinked
      }
    }) : ""), L = P(() => /<a[^>]*>[^<]+<\/a>/g.test(i.params.value) || /(http(s)?:\/\/.*)/g.test(i.params.value));
    return ee(() => {
      i.params.eGridCell.addEventListener("dblclick", () => {
        g();
      }), i.params.eGridCell.addEventListener("keydown", (h) => {
        h.ctrlKey && h.code === "KeyC" && g();
      }), i.params.eGridCell.addEventListener("blur", () => {
        o.value._tippy.hide(), t.value?._tippy.hide();
      }), i.params.eGridCell.addEventListener("focus", () => {
        o.value?._tippy.show(), setTimeout(() => {
          document.activeElement === i.params.eGridCell && t.value?._tippy.show();
        }, 1e3), o.value._tippy.reference.clientWidth >= o.value._tippy.reference.scrollWidth && o.value._tippy.hide();
      });
    }), te(() => {
      i.params.eGridCell.removeEventListener("dblclick", () => {
        g();
      }), i.params.eGridCell.removeEventListener("keydown", (h) => {
        h.ctrlKey && h.code === "KeyC" && g();
      }), i.params.eGridCell.removeEventListener("blur", () => {
        o.value._tippy.hide(), t.value?._tippy.hide();
      }), i.params.eGridCell.removeEventListener("focus", () => {
        o.value._tippy.show(), t.value?._tippy.show();
      });
    }), (h, u) => {
      const k = O("truncate"), R = O("tippy");
      return C(), _("div", null, [
        $(n("div", {
          name: M.value,
          content: M.value,
          tabindex: "-1",
          innerHTML: M.value,
          ref_key: "el",
          ref: o
        }, null, 8, ql), [
          [k, {
            options: {
              placement: "top",
              hideOnClick: !1,
              theme: "ramp4",
              maxWidth: m.value ? 300 : 700,
              // remove this once scrollable tooltip option is implemented
              animation: "scale",
              interactive: L.value
            }
          }]
        ]),
        o.value?.textContent ? $((C(), _("div", {
          key: 0,
          ref_key: "copyTooltip",
          ref: t,
          content: f(r)(`grid.label.${v.value ? "copied" : "copy"}`)
        }, null, 8, Wl)), [
          [R, {
            triggerTarget: o.value,
            placement: "bottom",
            theme: "ramp4",
            hideOnClick: !1,
            delay: [1e3, 0]
          }]
        ]) : I("", !0)
      ]);
    };
  }
}), Zl = { class: "pl-8" }, Ql = { class: "flex flex-col justify-center items-center h-full" }, Xl = { class: "flex flex-row" }, Jl = { class: "font-bold text-2xl" }, ea = { class: "mt-20 text-xl" }, ta = { class: "my-20" }, la = { class: "text-sm" }, aa = ["aria-label"], ra = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, sa = { class: "flex flex-1 flex-col max-w-full mr-8" }, na = { class: "w-full font-bold" }, oa = { class: "w-full text-sm" }, ia = { key: 0 }, ua = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, da = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, pa = ["aria-label", "placeholder"], ca = { class: "-ml-30 text-gray-500 search-clear-container" }, ma = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, va = ["aria-label"], fa = { class: "pb-2 flex ml-auto justify-end" }, ga = ["content", "aria-label"], ha = ["aria-label"], ya = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ba = { class: "grow" }, wa = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, xa = ["aria-label"], Ca = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, La = { class: "grow" }, _a = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Ea = ["aria-label"], Ma = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ka = { class: "grow" }, Fa = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Aa = ["aria-label"], $a = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ta = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Ra = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Sa = { class: "grow" }, Da = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Ga = ["aria-label"], Ia = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Va = { class: "grow" }, Pa = ["content"], Ha = /* @__PURE__ */ H({
  __name: "table-component",
  props: {
    panel: {
      type: st,
      required: !0
    },
    gridId: {
      type: String,
      required: !0
    }
  },
  setup(b) {
    Kt.registerModules([jt]), qt({ theme: "legacy" });
    const s = [ne.OID, ne.DOUBLE, ne.SINGLE, ne.INTEGER], e = de("iApi"), r = nt(), t = ge(), o = P(() => t.mobileView), v = w(!o.value), i = w(), m = $t("gridContainer"), { t: g, locale: M } = U(), L = () => Tt()?.proxy?.$forceUpdate(), h = b, u = w({
      id: "dummy",
      layerIds: [],
      state: new Nt(),
      fieldMap: {}
    }), k = w(!0), R = w(null), q = w(), le = w(), W = w(!1), ae = w(!1), pe = w([]), ke = w(0), Z = w([]), ye = w([]), Fe = w(""), re = w([]), ce = w([]), be = w("OBJECTID"), Ae = w(void 0), it = tt.onCellKeyPress, K = w({ firstRow: 0, lastRow: 0, visibleRows: 0 }), we = w({}), me = w({}), Be = w(r.grids[h.gridId].layerIds), V = P(() => r.grids[h.gridId] ? Be.value.map((a) => e.geo.layer.getLayer(a)).filter((a) => a !== void 0) : []), Ne = P(
      () => u.value.state.filtered || u.value.state.searchFilter
    ), $e = w(/* @__PURE__ */ new Set()), xe = w([]), T = P(() => R.value), Ce = () => {
      e.$vApp.$el.querySelectorAll(
        ".ag-input-field-input.ag-checkbox-input"
      ).forEach((l, y) => {
        const d = T.value.getAllDisplayedColumns()?.[y].getColDef();
        l.setAttribute("aria-label", d?.headerName ?? g("grid.label.specialColumn"));
      });
    }, ze = () => {
      i.value?.querySelectorAll('[data-ref$="Viewport"]')?.forEach((l) => {
        l.setAttribute("tabindex", "-1");
      });
    }, Oe = P(
      () => V.value.some((a) => a.layerState === It.LOADED && a.visibility)
    ), ut = (a) => {
      R.value = a.api;
      let l = u.value.state.title;
      l || (l = e.geo.layer.getLayer(h.gridId)?.name || h.gridId), Fe.value = l, Re(), ce.value.length > 0 && T.value.autoSizeAllColumns(), Ce(), ze(), T.value.addEventListener("rowDataUpdated", Ce), Z.value.push(
        e.event.on(J.FILTER_CHANGE, ({ uid: y, filterKey: p }) => {
          p !== _e.GRID && y && V.value.map((d) => d.uid).includes(y) && Q();
        })
      ), Z.value.push(
        e.event.on(
          J.LAYER_VISIBILITYCHANGE,
          ({ layer: y }) => {
            y.uid && V.value.map((p) => p.uid).includes(y.uid) && Q();
          }
        )
      ), Z.value.push(
        e.event.on(J.LAYER_RELOAD_END, (y) => {
          y.loadPromise().then(() => {
            V.value.map((p) => p.uid).includes(y.uid) && Q();
          });
        })
      ), Z.value.push(
        e.event.on(J.LANG_CHANGE, () => {
          T.value.redrawRows({
            force: !0
          });
        })
      ), Z.value.push(
        e.event.on(
          J.MAP_EXTENTCHANGE,
          et(100, () => {
            u.value.state.filterByExtent && Q();
          })
        )
      ), Z.value.push(
        e.event.on(J.LAYER_REMOVE, (y) => {
          Be.value.includes(y.id) && V.value.length !== 0 && Ye();
        })
      ), Q();
    }, dt = () => {
      T.value.autoSizeAllColumns(), Ae.value = new tt(i.value, R.value), Ce(), ze();
    }, Te = () => {
      T.value.setGridOption("quickFilterText", u.value.state.searchFilter);
    }, Ue = () => {
      u.value.state.searchFilter = "", Te();
    }, pt = () => {
      Ue(), je(), Q();
    }, ct = () => {
      u.value.state.filterByExtent = !u.value.state.filterByExtent, Q();
    }, mt = () => {
      const a = T.value.getColumnDefs();
      u.value.state.colFilter = !u.value.state.colFilter, a?.forEach((l) => {
        l.floatingFilter = u.value.state.colFilter;
      }), T.value.setGridOption("columnDefs", a);
    }, Re = () => {
      R.value && !W.value && (u.value.state.searchFilter !== "" && Te(), u.value.state.applyToMap && Se(), Ee(() => {
        const a = T.value.getAllDisplayedColumns();
        a && a.length > 0 && T.value.refreshCells({
          columns: [a[0]]
          // Limits the refresh action to the row number column.
        }), Ke();
      }));
    }, Ke = () => {
      K.value.firstRow = T.value.getFirstDisplayedRowIndex() + 1, K.value.lastRow = T.value.getLastDisplayedRowIndex() + 1, K.value.visibleRows = T.value.getDisplayedRowCount();
    }, je = () => {
      T.value.setFilterModel({}), u.value.state.clearFilters(), T.value.refreshHeader();
    }, vt = () => {
      v.value = !v.value;
      const a = v.value ? "left" : null, l = T.value.getAllDisplayedColumns();
      l && l.length >= 3 && T.value.setColumnsPinned(l.slice(1, 3), a);
    }, ft = () => {
      const a = T.value.getAllDisplayedColumns().filter((p) => !p.getColDef().headerComponentParams?.preventExport), l = document.createElement("p"), y = (p) => (l.innerHTML = p, l.textContent || l.innerText);
      T.value.exportDataAsCsv({
        columnKeys: a,
        suppressQuotes: !0,
        processCellCallback: (p) => {
          const d = p.column.getColDef().cellRendererParams;
          return !p.value || d && d.type === "number" ? p.value : d && d.type === "date" ? `"${new Date(p.value).toLocaleDateString("en-CA", {
            timeZone: "UTC",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })}"` : `"${y(p.value).replace(/"/g, '""')}"`;
        }
      });
    }, gt = (a, l) => {
      a.floatingFilterComponent = "dateFloatingFilter", a.filterParams.comparator = function(y, p) {
        const d = new Date(p);
        return d.getUTCFullYear() > y.getUTCFullYear() ? 1 : d.getUTCFullYear() < y.getUTCFullYear() ? -1 : d.getUTCMonth() > y.getUTCMonth() ? 1 : d.getUTCMonth() < y.getUTCMonth() ? -1 : d.getUTCDate() - y.getUTCDate();
      }, a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: l
      };
    }, ht = (a, l, y) => {
      a.floatingFilterComponent = "selectorFloatingFilter", a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: y,
        rowData: l
      };
    }, yt = (a, l) => {
      a.floatingFilterComponent = "numberFloatingFilter", a.filterParams.inRangeInclusive = !0, a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: l
      };
    }, bt = (a, l) => {
      a.floatingFilterComponent = "textFloatingFilter", a.suppressFloatingFilterButton = !0, a.floatingFilterComponentParams = {
        stateManager: l
      }, a.filterParams.textMatcher = function(p) {
        if (!p.filterText || typeof p.filterText != "string") return !0;
        const d = p.filterText.replace(/\*/, "\\*").replace(/[()\[\]]/g, "\\$&");
        return new RegExp(`^.*${d}.*`).test(p.value);
      };
      const y = function(p) {
        if (!p || typeof p != "string") return p;
        let d = p.toLowerCase();
        return d = d.replace(new RegExp("[àáâãäå]", "g"), "a"), d = d.replace(new RegExp("æ", "g"), "ae"), d = d.replace(new RegExp("ç", "g"), "c"), d = d.replace(new RegExp("[èéêë]", "g"), "e"), d = d.replace(new RegExp("[ìíîï]", "g"), "i"), d = d.replace(new RegExp("ñ", "g"), "n"), d = d.replace(new RegExp("[òóôõö]", "g"), "o"), d = d.replace(new RegExp("œ", "g"), "oe"), d = d.replace(new RegExp("[ùúûü]", "g"), "u"), d = d.replace(new RegExp("[ýÿ]", "g"), "y"), d;
      };
      a.filterParams.textFormatter = function(p) {
        return y(p);
      };
    }, wt = (a, l, y) => {
      if (a.field === "rvRowIndex") {
        const p = {
          field: "rvRowIndex",
          headerName: "",
          headerComponentParams: { preventExport: !0 },
          sortable: !1,
          lockPosition: !0,
          valueGetter: "node.rowIndex + 1",
          suppressMovable: !0,
          suppressHeaderMenuButton: !0,
          suppressHeaderContextMenu: !0,
          floatingFilter: u.value.state.colFilter,
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
            stateManager: y,
            clearFilters: je
          },
          filter: !0
        };
        l.push(p);
      }
      if (a.field === "rvInteractive") {
        const p = u.value.state.controls, d = {
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
          cellRenderer: Vl,
          cellRendererParams: {
            $iApi: e,
            t: g,
            layerCols: me.value,
            isTeleport: h.panel.teleport !== void 0
          }
        };
        if (p.includes("details") && l.push(d), Ft.value) {
          const x = {
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
            cellRenderer: Ol,
            cellRendererParams: {
              $iApi: e,
              layerCols: me.value,
              isTeleport: h.panel.teleport !== void 0
            }
          };
          p.includes("zoom") && l.push(x);
        }
        p.forEach((x) => {
          if (x === "zoom" || x === "details") return;
          const c = {
            field: `rvCustomButton_${typeof x == "string" ? x : x.actionEvent}`,
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
            cellRenderer: jl,
            cellRendererParams: {
              $iApi: e,
              t: g,
              layerCols: me.value,
              config: x
            }
          };
          l.push(c);
        });
      }
      if (a.field === "rvSymbol") {
        const p = {
          field: "rvSymbol",
          headerName: "",
          headerComponentParams: { isStatic: !0, preventExport: !0 },
          sortable: !1,
          filter: !1,
          lockPosition: !0,
          maxWidth: 42,
          cellDataType: !1,
          cellRenderer: (d) => {
            const x = e.geo.layer.getLayer(d.data.rvUid);
            if (x === void 0) return;
            const c = document.createElement("span"), F = d.data[be.value];
            return x.getIcon(F).then((A) => {
              c.innerHTML = A;
            }), c;
          },
          cellStyle: () => ({
            paddingTop: "3px",
            textAlign: "center",
            paddingLeft: "5px",
            paddingRight: "0px"
          }),
          cellRendererParams: {
            $iApi: e,
            oidField: be.value
          }
        };
        l.push(p);
      }
    }, xt = () => !Object.values(we.value).every((a) => a === void 0), Ct = (a) => {
      const l = we.value[a.data.rvUid];
      return l === void 0 || l.includes(a.data[be.value]);
    }, Q = async () => {
      const a = new Vt(), l = xe.value.slice().map((p) => p.getPromise());
      xe.value.push(a), await Promise.all(l), await Promise.all(
        V.value.map(async (p) => {
          p && p.visibility ? await p.getFilterOIDs(
            [_e.GRID],
            u.value.state.filterByExtent ? e.geo.map.getExtent() : void 0
          ).then((d) => {
            we.value[p.uid] = d;
          }) : we.value[p.uid] = [];
        })
      ), T.value.onFilterChanged(), a.resolveMe();
      const y = xe.value.indexOf(a);
      y === -1 ? console.error("Grid could not find filter blocker in filter queue") : xe.value.splice(y, 1);
    }, Lt = () => {
      u.value.state.applyToMap = !u.value.state.applyToMap, Se();
    }, Se = () => {
      V.value.filter((a) => a.mapLayer).forEach((a) => {
        if (!u.value.state.applyToMap)
          a.setSqlFilter(_e.GRID, "");
        else {
          const l = _t(a.id);
          a.setSqlFilter(_e.GRID, l);
        }
      });
    }, _t = (a) => {
      const l = T.value.getFilterModel(), y = [];
      if (Object.keys(l || {}).forEach((p) => {
        const d = De(a, p);
        d ? y.push(Et(d.origAttr, l[p])) : y.push("1=2");
      }), u.value.state.searchFilter && u.value.state.searchFilter.length > 0) {
        const p = Mt(a) || "1=2";
        p.length > 0 && y.push(`(${p})`);
      }
      return y.join(" AND ");
    }, Et = (a, l) => {
      switch (l.filterType) {
        case "number": {
          switch (l.type) {
            case "greaterThanOrEqual":
              return `${a} >= ${l.filter}`;
            case "lessThanOrEqual":
              return `${a} <= ${l.filter}`;
            case "inRange":
              return `${a} >= ${l.filter} AND ${a} <= ${l.filterTo}`;
          }
          break;
        }
        case "text": {
          const y = l.filter.replace(/'/g, /''/);
          if (y !== "") {
            const p = /\\[(!"#$&'+,.\\/:;<=>?@[\]^`{|}~)]/g;
            let d = y, x = "", c = p.exec(y), F = 0;
            for (; c; )
              x = x + y.substr(F, c.index - F) + c[0].slice(-1), F = c.index + 2, d = y.substr(c.index + 2), c = p.exec(y);
            x = x + d, x = x.replace(/%/g, "ௌ%"), x = x.replace(/_/g, "ௌ_"), x = `*${x}`;
            const A = `UPPER(${a}) LIKE '${x.replace(/\*/g, "%").toUpperCase()}%'`;
            return A.includes("ௌ%") || A.includes("ௌ_") ? `${A} ESCAPE 'ௌ'` : A;
          }
          break;
        }
        case "date": {
          const y = new Date(l.dateFrom ?? 0), p = new Date(l.dateTo ?? 864e13), d = y ? `${y.getMonth() + 1}/${y.getDate()}/${y.getFullYear()}` : void 0, x = p ? `${p.getMonth() + 1}/${p.getDate()}/${p.getFullYear()}` : void 0;
          switch (l.type) {
            // cases are functionally greaterThanOrEqual or lessThanOrEqual
            case "greaterThan":
              return `${a} >= DATE '${d}'`;
            case "lessThan":
              return `${a} <= DATE '${d}'`;
            // ag-grid uses from for a single upper limit as well
            case "inRange":
              return `${a} >= DATE '${d}' AND ${a} <= DATE '${x}'`;
          }
        }
      }
    }, Mt = (a) => {
      const y = u.value.state.searchFilter.replace(/'/g, "''").split(" "), p = [];
      T.value.forEachNodeAfterFilterAndSort((c) => {
        p.push(c);
      });
      const d = T.value.getAllDisplayedColumns().filter(
        (c) => (c.colDef.filter === "agTextColumnFilter" || c.colDef.filter === "agNumberColumnFilter") && De(a, c.getColId())
      ), x = [];
      return p.forEach((c) => {
        let F = !0, A = "";
        for (const S of y) {
          const E = new RegExp(`.*${S.split(" ").join(".*").toUpperCase()}`), G = `%${S.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let Y = !1;
          for (const Ge of d ?? []) {
            const ve = Ge.getColId(), Le = De(a, Ge.getColId())?.origAttr, Xe = Ge.getColDef();
            if (c.data[ve] === void 0)
              Y = !1;
            else if (Xe.filter === "agTextColumnFilter") {
              const X = c.data[ve] === null ? null : c.data[ve].toString();
              if (X !== null && E.test(X.toUpperCase())) {
                A ? A = A.concat(" AND ", `(UPPER(${Le}) LIKE '${G}%')`) : A = A.concat("(", `(UPPER(${Le}) LIKE '${G}%')`), x.includes(A + ")") ? Y = !1 : Y = !0;
                break;
              }
            } else if (Xe.filter === "agNumberColumnFilter") {
              const X = c.data[ve] === null ? null : c.data[ve];
              if (X !== null && E.test(X)) {
                A ? A = A.concat(" AND ", `(${Le} = ${X})`) : A = A.concat("(", `(${Le} = ${X})`), Y = !x.includes(A + ")");
                break;
              }
            }
          }
          if (!Y) {
            F = !1;
            break;
          }
        }
        F && x.push(A + ")");
      }), x.join(" OR ");
    }, kt = (a) => {
      ["ArrowDown", "Down", "ArrowLeft", "Left", "ArrowUp", "Up", "ArrowRight", "Right"].includes(a.key) && a.stopPropagation();
    }, qe = () => {
      We(), h.panel.isOpen && h.panel.close();
    }, We = () => {
      (W.value || ae.value) && V.value.forEach((a) => {
        a.abortAttributeLoad(), a.clearFeatureCache();
      });
    }, j = P(() => {
      const a = V.value.map((p) => p.visibility && p.canModifyLayer && p.mapLayer), l = V.value.some(
        (p) => p.visibility && p.mapLayer && !p.canModifyLayer
      ), y = a.some(Boolean);
      return l && y ? "partial" : y ? "enabled" : "disabled";
    }), Ft = P(
      () => V.value.some((a) => a.isLoaded && a.supportsFeatures && a.mapLayer)
    ), De = (a, l) => ot(me.value, a, l), Ye = async () => {
      const a = V.value.filter((c) => c.supportsFeatures && c.isLoaded);
      a.length === 0 && qe(), ke.value = a.reduce((c, { featureCount: F }) => c + F, 0), pe.value = new Array(V.value.length).fill(0), a.forEach((c, F) => pe.value[F] += c.downloadedAttributes()), a.forEach((c, F) => {
        ye.value.push(
          Ie(
            () => c.downloadedAttributes(),
            (A) => {
              pe.value[F] = A;
            }
          )
        );
      }), await Promise.all(a.map((c) => c.loadPromise()));
      const l = a.map(async (c) => {
        const F = await Ve(c).getTabularAttributes(), A = u?.value?.state?.state;
        if (A?.columns && A.columnMetadata?.exclusiveColumns) {
          const S = A.columns.map((E) => E.field);
          F.columns = F.columns.filter((E) => S.includes(E.data));
        }
        return F;
      }), [y, p] = await Ht(Promise.all(l));
      if (y) {
        console.error(y), ae.value = !0, W.value = !1;
        return;
      }
      if (a.every((c) => c.attribLoadAborted())) {
        W.value = !1;
        return;
      }
      const d = {
        columns: [],
        rows: [],
        fields: [],
        oidField: ""
      };
      p.forEach((c, F) => {
        const A = [], S = a[F].id;
        c.columns.forEach((E) => {
          u.value.fieldMap && u.value.fieldMap[E.data] ? (A.push({
            origAttr: E.data,
            mappedAttr: u.value.fieldMap[E.data]
          }), E.data = u.value.fieldMap[E.data], E.title = E.data) : A.push({
            origAttr: E.data,
            mappedAttr: void 0
          }), d.columns.map((G) => G.data).includes(E.data) || d.columns.push(E);
        }), d.rows = d.rows.concat(
          c.rows.map((E) => {
            if (u.value.fieldMap)
              for (const [G, Y] of Object.entries(u.value.fieldMap))
                E[G] !== void 0 && E[Y] === void 0 && (E[Y] = E[G], delete E[G]);
            return E;
          })
        ), d.fields = d.fields.concat(
          c.fields.map((E) => ((!e.ui.exposeOids && E.type === "oid" || !e.ui.exposeMeasurements && (E.name.toLowerCase() === "shape_length" || E.name.toLowerCase() === "shape_area")) && $e.value.add(E.name), {
            name: u.value.fieldMap && u.value.fieldMap[E.name] ? u.value.fieldMap[E.name] : E.name,
            type: E.type,
            alias: E.alias ?? void 0,
            length: E.length ?? void 0
          }))
        ), d.oidField = u.value.fieldMap && u.value.fieldMap[c.oidField] ? u.value.fieldMap[c.oidField] : c.oidField, me.value[S] = A;
      }), be.value = d.oidField;
      for (let c = 0; c < d.rows.length; c++)
        for (const [F] of Object.entries(d.rows[c]))
          e.ui.isPlainText(d.rows[c][F]) && (d.rows[c][F] = e.ui.escapeHtml(d.rows[c][F]));
      ["rvRowIndex", "rvInteractive", "rvSymbol"].map((c) => ({
        data: c,
        title: "",
        special: !0
      })).concat(d.columns).forEach((c) => {
        u.value.state.columns[c.data] === void 0 && (u.value.state.columns[c.data] = new zt({
          field: c.data,
          title: c.title
        })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && $e.value.has(c.data) && (u.value.state.columns[c.data].visible = !1);
        const F = u.value.state.columns[c.data], A = F.filter.type === "selector", S = {
          headerName: F.title ?? c.title,
          headerComponent: "agColumnHeader",
          headerComponentParams: {
            sort: F.sort
          },
          field: c.data ?? c,
          sortable: !0,
          lockPosition: !0,
          filterParams: {},
          floatingFilter: u.value.state.colFilter && F.searchable,
          hide: !F.visible,
          minWidth: F.width,
          maxWidth: F.width ?? 400,
          cellRenderer: (E) => E.value,
          suppressHeaderKeyboardEvent: (E) => {
            const G = E.event;
            return E.headerRowIndex === 0 && (G.key === "Enter" || !G.target.classList.contains("ag-header-cell") && G.key === "Tab");
          }
        };
        if (c.special)
          wt(S, re.value, u.value.state);
        else {
          const E = d.fields.find((G) => G.name === S.field);
          S.cellRenderer = F.template === "" ? Yl : e.component(F.template), S.autoHeight = !0, s.indexOf(E.type) > -1 ? (yt(S, u.value.state), S.filter = "agNumberColumnFilter", S.cellRendererParams = {
            type: "number"
          }) : E.type === ne.DATE ? (gt(S, u.value.state), S.filter = "agDateColumnFilter", S.minWidth = 400, S.cellRendererParams = {
            type: "date"
          }) : E.type === ne.STRING && (A ? ht(S, d.rows, u.value.state) : bt(S, u.value.state), S.filter = "agTextColumnFilter", S.cellRendererParams = {
            type: "string"
          }), re.value.push(S);
        }
      }), ce.value = Ve(d.rows), re.value = Ve(re.value), Re(), W.value = !1;
    }, Ze = (a) => {
      a.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
    }, Qe = () => {
      m.value._tippy.hide();
    };
    return ee(() => {
      m.value?.addEventListener("keyup", Ze), m.value?.addEventListener("blur", Qe);
    }), fe(() => {
      u.value = r.grids[h.gridId], W.value = !0, L(), K.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, le.value = {
        agColumnHeader: Gl,
        numberFloatingFilter: ol,
        textFloatingFilter: pl,
        selectorFloatingFilter: hl,
        dateFloatingFilter: Ll,
        clearFloatingFilter: El
      }, q.value = {
        // lets header navigation be predictable, otherwise focus lists will be out of sync as soon as a column is shifted
        ensureDomOrder: !0,
        rowHeight: 40,
        suppressRowTransform: !0,
        onFilterChanged: () => {
          Se(), Re();
        },
        onBodyScroll: () => {
          [...e.$vApp.$el.querySelectorAll("[id^=tippy]")].forEach((a) => {
            a._tippy && i.value?.contains(a._tippy.reference) && a._tippy.hide();
          });
        },
        onBodyScrollEnd: () => {
          Ke();
        },
        rowBuffer: 0,
        suppressColumnVirtualisation: !0,
        // shift tab -> header, tab -> out of grid
        tabToNextCell: Qt,
        // tab vertically instead of horizontally
        tabToNextHeader: Zt,
        onModelUpdated: et(300, () => {
          T.value.autoSizeAllColumns(), Ce();
        })
      }, Ye(), j.value === "partial" && e.notify.show(Je.WARNING, e.$i18n.t("layer.filterwarning")), ye.value.push(
        Ie(M, () => {
          k.value = !1, setTimeout(() => {
            k.value = !0;
          }, 10);
        })
      ), ye.value.push(
        Ie(j, (a) => {
          a === "partial" && e.notify.show(Je.WARNING, e.$i18n.t("layer.filterwarning"));
        })
      );
    }), te(() => {
      We(), Z.value.forEach((a) => e.event.off(a)), ye.value.forEach((a) => a()), Ae.value?.removeAccessibilityListeners(), Ae.value?.removeScrollListeners(), m.value?.removeEventListener("keyup", Ze), m.value?.removeEventListener("blur", Qe);
    }), (a, l) => {
      const y = Pe("dropdown-menu"), p = O("truncate"), d = O("tippy");
      return C(), _("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: i
      }, [
        $(n("div", null, [
          n("p", Zl, D(f(g)("grid.splash.error")), 1)
        ], 512), [
          [se, ae.value]
        ]),
        $(n("div", Ql, [
          n("div", Xl, [
            n("span", Jl, D(pe.value.reduce((x, c) => x + c, 0)), 1),
            l[12] || (l[12] = n("svg", {
              class: "stroke-black stroke-1",
              height: "50",
              width: "25"
            }, [
              n("line", {
                x1: "0",
                y1: "50",
                x2: "25",
                y2: "0"
              })
            ], -1)),
            n("span", ea, D(ke.value), 1)
          ]),
          n("div", ta, [
            n("span", la, D(pe.value.reduce((x, c) => x + c, 0) < ke.value ? f(g)("grid.splash.loading") : f(g)("grid.splash.building")), 1)
          ]),
          n("div", null, [
            n("button", {
              type: "button",
              onClick: qe,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": f(g)("grid.splash.cancel")
            }, D(f(g)("grid.splash.cancel")), 9, aa)
          ])
        ], 512), [
          [se, W.value && !ae.value]
        ]),
        $(n("div", ra, [
          n("div", sa, [
            $((C(), _("div", na, [
              ie(D(Fe.value), 1)
            ])), [
              [se, Fe.value !== ""],
              [p]
            ]),
            $((C(), _("div", oa, [
              ie(D((!Oe.value && K.value.visibleRows === 0 ? `${f(g)("grid.filters.label.hidden")} — ` : "") + f(g)("grid.filters.label.info", {
                range: K.value.visibleRows !== 0 ? `${K.value.firstRow} - ${K.value.lastRow}` : "0",
                total: K.value.visibleRows
              })) + " ", 1),
              K.value.visibleRows !== ce.value.length && Oe.value ? (C(), _("span", ia, D(f(g)("grid.filters.label.filtered", {
                max: ce.value.length
              })), 1)) : I("", !0)
            ])), [
              [p]
            ])
          ]),
          n("div", ua, [
            $(n("div", da, [
              $(n("input", {
                onInput: l[0] || (l[0] = (x) => Te()),
                onKeypress: l[1] || (l[1] = N(z(() => {
                }, ["prevent"]), ["enter"])),
                onKeyup: l[2] || (l[2] = N((x) => {
                  f(t).mobileView && x?.target?.blur();
                }, ["enter"])),
                enterkeyhint: "done",
                "onUpdate:modelValue": l[3] || (l[3] = (x) => u.value.state.searchFilter = x),
                class: "rv-global-search rv-input pr-32 min-w-0",
                "aria-invalid": "false",
                "aria-label": f(g)("grid.filters.label.global"),
                placeholder: f(g)("grid.filters.label.global")
              }, null, 40, pa), [
                [ue, u.value.state.searchFilter]
              ]),
              n("div", ca, [
                u.value.state.searchFilter.length < 3 ? (C(), _("svg", ma, l[13] || (l[13] = [
                  n("g", { id: "search_cache224" }, [
                    n("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (C(), _("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
                  onClick: l[4] || (l[4] = (x) => Ue()),
                  "aria-label": f(g)("grid.search.clear")
                }, l[14] || (l[14] = [
                  n("svg", {
                    "data-v-486a0302": "",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 352 512",
                    class: "fill-current w-18 h-18 mt-2"
                  }, [
                    n("path", {
                      "data-v-486a0302": "",
                      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    })
                  ], -1)
                ]), 8, va))
              ])
            ], 512), [
              [se, u.value.state.search]
            ]),
            n("div", fa, [
              Me(tl, {
                gridApi: R.value,
                columnDefs: re.value,
                systemCols: $e.value,
                onRefreshHeaders: l[5] || (l[5] = (x) => R.value.refreshHeader())
              }, null, 8, ["gridApi", "columnDefs", "systemCols"]),
              $((C(), _("button", {
                type: "button",
                class: B(["grid-clearall p-4 h-40", Ne.value ? "text-gray-500 hover:text-black" : "text-gray-300 cursor-default"]),
                onClick: l[6] || (l[6] = (x) => Ne.value && pt()),
                content: f(g)("grid.clearAll"),
                "aria-label": f(g)("grid.clearAll")
              }, l[15] || (l[15] = [
                n("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24px",
                  width: "24px",
                  viewBox: "0 0 24 24",
                  class: "inline fill-current"
                }, [
                  n("g", { id: "filter_cache958" }, [
                    n("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
                  ])
                ], -1)
              ]), 10, ga)), [
                [d, {
                  placement: "bottom"
                }]
              ]),
              Me(y, {
                class: "h-40 w-40",
                position: "bottom-end",
                tooltip: f(g)("panels.controls.optionsMenu"),
                centered: !1
              }, {
                header: oe(() => l[16] || (l[16] = [
                  n("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    class: "fill-current m-8 w-24 h-24"
                  }, [
                    n("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
                  ], -1)
                ])),
                default: oe(() => [
                  n("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", {
                      hover: j.value !== "disabled" ? "none" : "text-black",
                      disabled: j.value === "disabled"
                    }]),
                    onClick: l[7] || (l[7] = (x) => j.value !== "disabled" && Lt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.filters.apply")
                  }, [
                    n("div", ya, [
                      l[18] || (l[18] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      n("span", ba, D(f(g)("grid.label.filters.apply")), 1),
                      j.value !== "disabled" && u.value.state.applyToMap ? (C(), _("svg", wa, l[17] || (l[17] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 10, ha),
                  n("a", {
                    href: "javascript:;",
                    class: "leading-snug w-256 hover:text-black",
                    onClick: l[8] || (l[8] = (x) => mt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.filters.show")
                  }, [
                    n("div", Ca, [
                      l[20] || (l[20] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      n("span", La, D(f(g)("grid.label.filters.show")), 1),
                      u.value.state.colFilter ? (C(), _("svg", _a, l[19] || (l[19] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 8, xa),
                  n("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", {
                      hover: j.value !== "disabled" ? "none" : "text-black",
                      disabled: j.value === "disabled"
                    }]),
                    onClick: l[9] || (l[9] = (x) => j.value !== "disabled" && ct()),
                    role: "button",
                    "aria-label": f(g)("grid.filters.label.extent")
                  }, [
                    n("div", Ma, [
                      l[22] || (l[22] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      n("span", ka, D(f(g)("grid.filters.label.extent")), 1),
                      j.value !== "disabled" && u.value.state.filterByExtent ? (C(), _("svg", Fa, l[21] || (l[21] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 10, Ea),
                  n("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: l[10] || (l[10] = (x) => vt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.pinColumns")
                  }, [
                    n("div", $a, [
                      v.value ? (C(), _("svg", Ta, l[23] || (l[23] = [
                        n("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                      ]))) : v.value ? I("", !0) : (C(), _("svg", Ra, l[24] || (l[24] = [
                        n("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                      ]))),
                      n("span", Sa, D(f(g)("grid.label.pinColumns")), 1),
                      v.value ? (C(), _("svg", Da, l[25] || (l[25] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 8, Aa),
                  n("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: l[11] || (l[11] = (x) => ft()),
                    role: "button",
                    "aria-label": f(g)("grid.label.export")
                  }, [
                    n("div", Ia, [
                      l[26] || (l[26] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("g", null, [
                          n("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })
                        ])
                      ], -1)),
                      n("span", Va, D(f(g)("grid.label.export")), 1)
                    ])
                  ], 8, Ga)
                ]),
                _: 1
              }, 8, ["tooltip"])
            ])
          ])
        ], 512), [
          [se, !W.value && !ae.value]
        ]),
        k.value ? $((C(), _("div", {
          key: 0,
          content: f(g)("grid.cells.controls"),
          class: "w-full h-full flex flex-col",
          ref_key: "gridContainer",
          ref: m,
          tabIndex: "-1"
        }, [
          Me(f(Bt), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: !0,
            accentedSort: !0,
            localeText: f(M) === "en" ? f(Ot) : f(Ut),
            gridOptions: q.value,
            columnDefs: re.value,
            rowData: ce.value,
            components: le.value,
            onGridReady: ut,
            onKeydown: kt,
            onFirstDataRendered: dt,
            onCellKeyPress: f(it),
            doesExternalFilterPass: Ct,
            isExternalFilterPresent: xt,
            tabIndex: -1
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, Pa)), [
          [d, {
            placement: "top",
            trigger: "manual",
            touch: !1
          }],
          [se, !W.value && !ae.value]
        ]) : I("", !0)
      ], 512);
    };
  }
}), Ba = /* @__PURE__ */ he(Ha, [["__scopeId", "data-v-7664f6eb"]]), Na = /* @__PURE__ */ H({
  __name: "screen",
  props: {
    panel: {
      type: st,
      required: !0
    }
  },
  setup(b) {
    const s = nt(), { t: e } = U(), r = P(() => s.currentId);
    return (t, o) => {
      const v = Pe("panel-screen");
      return C(), lt(v, { panel: b.panel }, {
        header: oe(() => [
          ie(D(f(e)("grid.title")), 1)
        ]),
        content: oe(() => [
          Me(Ba, {
            class: "rv-grid",
            gridId: r.value,
            panel: b.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Tr = /* @__PURE__ */ he(Na, [["__scopeId", "data-v-904e67ef"]]);
export {
  Tr as default
};
