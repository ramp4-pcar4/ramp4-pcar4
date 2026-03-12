import { defineComponent as H, inject as de, resolveComponent as Pe, resolveDirective as U, createBlock as lt, openBlock as C, unref as f, withCtx as oe, createElementBlock as _, Fragment as at, renderList as rt, createElementVNode as n, withDirectives as $, createTextVNode as ie, toDisplayString as D, normalizeClass as B, ref as w, onBeforeMount as fe, withKeys as N, withModifiers as O, vModelText as ue, vModelSelect as At, onMounted as ee, nextTick as Ee, onBeforeUnmount as te, createCommentVNode as I, computed as P, useTemplateRef as $t, getCurrentInstance as Tt, watch as Ie, vShow as se, createVNode as ke, markRaw as Ve } from "vue";
import "tiny-emitter";
import { a as ge, _ as he, G as J, W as Rt, X as St, Y as st, Z as ne, i as nt, $ as Dt, a0 as Je, a1 as _e, a2 as Gt } from "./main-DEZKkTlX.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-sketch";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import { debounce as et } from "throttle-debounce";
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
import Vt from "await-to-js";
import "svg.js";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridVue as Pt } from "ag-grid-vue3";
import { T as Ht, C as Bt } from "./table-state-manager-BxfbugKY.js";
import { AG_GRID_LOCALE_EN as Nt, AG_GRID_LOCALE_FR as Ot } from "@ag-grid-community/locale";
import { ModuleRegistry as Ut, AllCommunityModule as zt, provideGlobalGridOptions as Kt } from "ag-grid-community";
function ot(b, r, e) {
  return b[r].find(
    (s) => (s.mappedAttr ?? s.origAttr) === e
  );
}
function He(b, r) {
  const e = ot(b, r.id, r.oidField);
  return e ? e.mappedAttr ?? e.origAttr : r.oidField;
}
const jt = ".ag-root", qt = ".ag-header-viewport .ag-header-row";
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
  static onCellKeyPress({ event: r }) {
    function e(s) {
      s.forEach((t) => {
        t.href && window.open(t.href), t.childNodes.length > 0 && e(t.childNodes);
      });
    }
    r.key == "Enter" && e(r.target.childNodes);
  }
  /**
   * Initializes focus lists and listeners for grid keyboard navigation.
   *
   * @param {HTMLElement} element The grid element
   * @param {GridApi} agGridApi The ag-grid grid api
   * @param {ColumnApi} agColumnApi The ag-grid column api
   */
  constructor(r, e) {
    this.element = r, this.agGridApi = e, this.agGrid = this.element.querySelector(jt), this.headerRows = Array.prototype.slice.call(
      this.element.querySelectorAll(qt)
    ), this.initAccessibilityListeners(), this.initScrollListeners();
  }
  /**
   * Set up the listeners for the grid.
   */
  initAccessibilityListeners() {
    Array.prototype.slice.call(
      this.headerRows[0].querySelectorAll(".ag-header-cell")
    ).forEach((e, s) => {
      const t = Array.prototype.slice.call(e.querySelectorAll("button"));
      s < 1 || t.length === 0 || (e.addEventListener("keydown", (o) => {
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
    ).forEach((e, s) => {
      const t = Array.prototype.slice.call(e.querySelectorAll("button"));
      s < 1 || t.length === 0 || (e.removeEventListener("keydown", (o) => {
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
  cellKeydownHandler(r, e, s) {
    r.key === "Enter" && r.target === e && (r.preventDefault(), s.forEach((t) => {
      t.setAttribute("tabindex", "0");
    }), s[0].focus());
  }
  /**
   * Removes ability to tab to inner items when focus leaves the cell (and inner items)
   *
   * @param {FocusEvent} event The event to handle
   * @param {HTMLElement} cell The grid header cell
   * @param {HTMLElement[]} buttons The list of buttons in the cell
   */
  cellBlurHandler(r, e, s) {
    r.target === e && !s.includes(r.relatedTarget) && s.forEach((t) => {
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
  cellButtonTabHandler(r, e, s, t) {
    r.key === "Tab" && (t && r.shiftKey || !t && !r.shiftKey) && (r.preventDefault(), e.focus(), s.forEach((o) => {
      o.setAttribute("tabindex", "-1");
    }));
  }
  //  **** CLICK & DRAG SCROLLING ****
  /**
   * Initializes the handlers needed for click + drag scrolling
   */
  initScrollListeners() {
    this.agGrid.style.cursor = "grab", this.agGrid.addEventListener("mousedown", (r) => {
      this.scrollMouseDownHandler(r);
    });
  }
  /**
   * Removes the handlers for click + drag scrolling
   */
  removeScrollListeners() {
    this.agGrid.style.cursor = "default", this.agGrid.removeEventListener("mousedown", (r) => {
      this.scrollMouseDownHandler(r);
    });
  }
  /**
   * Handles starting click + drag scrolling on mousedown
   *
   * @param {MouseEvent} event The mousedown event
   */
  scrollMouseDownHandler(r) {
    const e = this.element.querySelector(".ag-body-horizontal-scroll-viewport"), s = e.scrollLeft, t = r.clientX;
    this.agGrid.style.cursor = "grabbing";
    const o = (i) => {
      const m = i.clientX - t;
      e.scrollLeft = s - m;
    }, v = () => {
      this.agGrid.style.cursor = "grab", this.agGrid.removeEventListener("mousemove", o), this.agGrid.removeEventListener("mouseup", v), this.agGrid.removeEventListener("mouseleave", v);
    };
    this.agGrid.addEventListener("mousemove", o), this.agGrid.addEventListener("mouseup", v), this.agGrid.addEventListener("mouseleave", v);
  }
}
function Wt(b) {
  const r = b.previousHeaderPosition.column, e = b.previousHeaderPosition.headerRowIndex;
  let s = b.backwards ? e - 1 : e + 1;
  return s === -1 ? !1 : (s === b.headerRowCount && (s = -1), { headerRowIndex: s, column: r });
}
function Yt(b) {
  return b.backwards ? { column: b.previousCellPosition.column, rowIndex: -1 } : !1;
}
const Zt = ["onClick"], Qt = { class: "md-icon-small flex w-full" }, Xt = { class: "flex-1 truncate whitespace-nowrap overflow-hidden pr-4" }, Jt = /* @__PURE__ */ H({
  __name: "column-dropdown",
  props: {
    columnDefs: { type: Object, required: !0 },
    gridApi: { type: Object },
    systemCols: { type: Object }
  },
  setup(b) {
    const r = de("iApi"), { t: e } = z();
    return (s, t) => {
      const o = Pe("dropdown-menu"), v = U("truncate");
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
            (i) => i.headerName && i.headerName.length > 0 && !(!f(r).ui.exposeOids && b.systemCols?.has(i.headerName)) && !(!f(r).ui.exposeMeasurements && (b.systemCols?.has(i.headerName) || b.systemCols?.has(i.field)))
          ), (i) => (C(), _("a", {
            "truncate-trigger": "",
            tabindex: "0",
            key: i.headerName,
            onClick: (m) => {
              b.gridApi?.setColumnsVisible([i.field], i.hide), i.hide = !i.hide, s.$emit("refreshHeaders");
            },
            href: "javascript:;",
            class: "flex leading-snug items-center max-w-[268px]"
          }, [
            n("div", Qt, [
              $((C(), _("span", Xt, [
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
          ], 8, Zt))), 128))
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), el = { class: "h-full flex items-center justify-center" }, tl = ["placeholder", "aria-label", "disabled"], ll = ["placeholder", "aria-label", "disabled"], al = {
  methods: {
    onParentModelChanged() {
    }
  }
}, rl = /* @__PURE__ */ H({
  ...al,
  __name: "custom-number-filter",
  props: ["params"],
  setup(b) {
    const r = ge(), { t: e } = z(), s = b, t = w(""), o = w(""), v = w(!!s.params.stateManager.columns[s.params.column.colDef.field].filter.static), i = () => {
      k(), s.params.stateManager.setColumnFilterValue(s.params.column.colDef.field, t.value, "min");
    }, m = () => {
      k(), s.params.stateManager.setColumnFilterValue(s.params.column.colDef.field, o.value, "max");
    }, g = (L) => typeof L != "number" || isNaN(L), k = () => {
      t.value !== "" && g(t.value) && (t.value = ""), o.value !== "" && g(o.value) && (o.value = "");
      const L = s.params.column.colDef.field;
      o.value === "" && t.value === "" ? s.params.api.setColumnFilterModel(L, null) : o.value !== "" && t.value !== "" ? s.params.api.setColumnFilterModel(L, {
        filterType: "number",
        type: "inRange",
        filter: t.value,
        filterTo: o.value
      }) : t.value === "" ? s.params.api.setColumnFilterModel(L, {
        filterType: "number",
        type: "lessThanOrEqual",
        filter: o.value
      }) : s.params.api.setColumnFilterModel(L, {
        filterType: "number",
        type: "greaterThanOrEqual",
        filter: t.value
      }), s.params.api.onFilterChanged();
    };
    return fe(() => {
      t.value = s.params.stateManager.getColumnFilterValue(s.params.column.colDef.field, "min"), o.value = s.params.stateManager.getColumnFilterValue(s.params.column.colDef.field, "max"), i(), m();
    }), (L, h) => (C(), _("div", el, [
      $(n("input", {
        class: B(["rv-min rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        style: { width: "45%" },
        type: "number",
        "onUpdate:modelValue": h[0] || (h[0] = (u) => t.value = u),
        onInput: h[1] || (h[1] = (u) => i()),
        onMousedown: h[2] || (h[2] = O(() => {
        }, ["stop"])),
        onKeypress: h[3] || (h[3] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[4] || (h[4] = N((u) => {
          f(r).mobileView && u.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.min"),
        "aria-label": f(e)("grid.filters.number.min"),
        disabled: v.value
      }, null, 42, tl), [
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
        onMousedown: h[7] || (h[7] = O(() => {
        }, ["stop"])),
        onKeypress: h[8] || (h[8] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: h[9] || (h[9] = N((u) => {
          f(r).mobileView && u.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.number.max"),
        "aria-label": f(e)("grid.filters.number.max"),
        disabled: v.value
      }, null, 42, ll), [
        [ue, o.value]
      ])
    ]));
  }
}), sl = /* @__PURE__ */ he(rl, [["__scopeId", "data-v-ab99947a"]]), nl = { class: "h-full flex items-center justify-center" }, ol = ["placeholder", "aria-label", "disabled"], il = {
  methods: {
    onParentModelChanged() {
    }
  }
}, ul = /* @__PURE__ */ H({
  ...il,
  __name: "custom-text-filter",
  props: ["params"],
  setup(b) {
    const r = ge(), { t: e } = z(), s = b, t = w(""), o = w(s.params.stateManager.columns[s.params.column.colDef.field].filter.static), v = () => {
      t.value = t.value ? t.value : "";
      const i = s.params.column.colDef.field;
      t.value ? s.params.api.setColumnFilterModel(i, {
        filterType: "text",
        type: "contains",
        filter: t.value
      }) : s.params.api.setColumnFilterModel(i, null), s.params.stateManager.setColumnFilterValue(s.params.column.colDef.field, t.value), s.params.api.onFilterChanged();
    };
    return fe(() => {
      t.value = s.params.stateManager.getColumnFilterValue(s.params.column.colDef.field).toString(), v();
    }), (i, m) => (C(), _("div", nl, [
      $(n("input", {
        class: B(["rv-input w-full bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": o.value
        }]),
        type: "text",
        onInput: m[0] || (m[0] = (g) => v()),
        "onUpdate:modelValue": m[1] || (m[1] = (g) => t.value = g),
        onMousedown: m[2] || (m[2] = O(() => {
        }, ["stop"])),
        onKeypress: m[3] || (m[3] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: m[4] || (m[4] = N((g) => {
          f(r).mobileView && g.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        placeholder: f(e)("grid.filters.column.label.text", [b.params.column.colDef.headerName]),
        "aria-label": f(e)("grid.filters.column.label.text", [b.params.column.colDef.headerName]),
        disabled: o.value
      }, null, 42, ol), [
        [ue, t.value]
      ])
    ]));
  }
}), dl = { class: "h-full flex items-center justify-center" }, pl = ["aria-label", "disabled"], cl = ["value"], ml = {
  methods: {
    onParentModelChanged() {
    }
  }
}, vl = /* @__PURE__ */ H({
  ...ml,
  __name: "custom-selector-filter",
  props: ["params"],
  setup(b) {
    const r = b, e = w(""), s = w([]), t = w(r.params.stateManager.columns[r.params.column.colDef.field].filter.static), o = () => {
      e.value = e.value ? e.value : "";
      const v = r.params.column.colDef.field;
      e.value === "..." || !e.value ? (r.params.api.setColumnFilterModel(v, null), e.value = "") : r.params.api.setColumnFilterModel(v, {
        filterType: "text",
        type: "contains",
        filter: e.value
      }), r.params.stateManager.setColumnFilterValue(r.params.column.colDef.field, e.value), r.params.api.onFilterChanged();
    };
    return fe(() => {
      e.value = r.params.stateManager.getColumnFilterValue(r.params.column.colDef.field);
      const v = r.params.rowData, i = new Set(v.map((m) => m[r.params.column.colId]));
      s.value = Array.from(i), s.value.unshift("..."), o();
    }), (v, i) => (C(), _("div", dl, [
      $(n("select", {
        class: B(["rv-input w-full bg-white text-black-75 h-24 py-0 px-8 border-2 rounded", {
          "cursor-not-allowed": t.value
        }]),
        "onUpdate:modelValue": i[0] || (i[0] = (m) => e.value = m),
        onChange: i[1] || (i[1] = (m) => o()),
        onMousedown: i[2] || (i[2] = O(() => {
        }, ["stop"])),
        "aria-label": e.value,
        disabled: t.value
      }, [
        (C(!0), _(at, null, rt(s.value, (m) => (C(), _("option", {
          value: m,
          key: m
        }, D(m), 9, cl))), 128))
      ], 42, pl), [
        [At, e.value]
      ])
    ]));
  }
}), fl = /* @__PURE__ */ he(vl, [["__scopeId", "data-v-46624a34"]]), gl = { class: "h-full flex items-center justify-center w-full" }, hl = ["placeholder", "aria-label", "disabled"], yl = ["placeholder", "aria-label", "disabled"], bl = {
  methods: {
    onParentModelChanged() {
    }
  }
}, wl = /* @__PURE__ */ H({
  ...bl,
  __name: "custom-date-filter",
  props: ["params"],
  setup(b) {
    const r = ge(), { t: e } = z(), s = b, t = w(""), o = w(""), v = w(s.params.stateManager.columns[s.params.column.colDef.field].filter.static), i = () => {
      g(), s.params.stateManager.setColumnFilterValue(s.params.column.colDef.field, t.value, "min");
    }, m = () => {
      g(), s.params.stateManager.setColumnFilterValue(s.params.column.colDef.field, o.value, "max");
    }, g = () => {
      const k = s.params.column.colDef.field;
      o.value === "" && t.value === "" ? s.params.api.setColumnFilterModel(k, null) : o.value !== "" && t.value !== "" ? s.params.api.setColumnFilterModel(k, {
        filterType: "date",
        type: "inRange",
        dateFrom: t.value,
        dateTo: o.value
      }) : t.value === "" ? s.params.api.setColumnFilterModel(k, {
        filterType: "date",
        type: "lessThan",
        dateFrom: o.value
      }) : s.params.api.setColumnFilterModel(k, {
        filterType: "date",
        type: "greaterThan",
        dateFrom: t.value
      }), s.params.api.onFilterChanged();
    };
    return fe(() => {
      t.value = s.params.stateManager.getColumnFilterValue(s.params.column.colDef.field, "min") || "", o.value = s.params.stateManager.getColumnFilterValue(s.params.column.colDef.field, "max") || "", i(), m();
    }), (k, L) => (C(), _("div", gl, [
      $(n("input", {
        class: B(["m-0 py-1 w-1/2 rv-input bg-white text-black-75 h-24 py-16 px-8 border-2 rounded", {
          "cursor-not-allowed": v.value
        }]),
        type: "date",
        placeholder: f(e)("grid.filters.date.min"),
        "aria-label": f(e)("grid.filters.date.min"),
        "onUpdate:modelValue": L[0] || (L[0] = (h) => t.value = h),
        onInput: L[1] || (L[1] = (h) => i()),
        onMousedown: L[2] || (L[2] = O(() => {
        }, ["stop"])),
        onKeypress: L[3] || (L[3] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: L[4] || (L[4] = N((h) => {
          f(r).mobileView && h.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: v.value
      }, null, 42, hl), [
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
        onMousedown: L[7] || (L[7] = O(() => {
        }, ["stop"])),
        onKeypress: L[8] || (L[8] = N(O(() => {
        }, ["prevent"]), ["enter"])),
        onKeyup: L[9] || (L[9] = N((h) => {
          f(r).mobileView && h.target.blur();
        }, ["enter"])),
        enterkeyhint: "done",
        disabled: v.value
      }, null, 42, yl), [
        [ue, o.value]
      ])
    ]));
  }
}), xl = /* @__PURE__ */ he(wl, [["__scopeId", "data-v-4019b3f7"]]), Cl = ["content", "disabled", "aria-label"], Ll = /* @__PURE__ */ H({
  __name: "clear-filter",
  props: ["params"],
  setup(b) {
    const r = b, { t: e } = z(), s = w(), t = w(), o = w(), v = () => r.params.clearFilters();
    return ee(async () => {
      await Ee(), t.value = s.value?.closest(".ag-header-cell"), o.value = t.value.closest(".ag-pinned-left-header"), t.value.addEventListener("keydown", async (i) => {
        i.key === "Enter" && (i.stopPropagation(), v(), await Ee(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), t.value.addEventListener("focus", () => {
        s.value._tippy.show();
      }), t.value.addEventListener("blur", () => {
        s.value._tippy.hide();
      });
    }), te(() => {
      t.value && (t.value.removeEventListener("keydown", async (i) => {
        i.key === "Enter" && (i.stopPropagation(), v(), await Ee(), (o.value?.querySelector(".ag-header-cell.ag-floating-filter")).focus());
      }), t.value.removeEventListener("focus", () => {
        s.value._tippy.show();
      }), t.value.removeEventListener("blur", () => {
        s.value._tippy.hide();
      }));
    }), (i, m) => {
      const g = U("tippy");
      return $((C(), _("button", {
        type: "button",
        class: "clearFilterButton flex items-center justify-center w-full h-full disabled:opacity-30 disabled:cursor-default text-gray-500 hover:text-black",
        onClick: v,
        content: f(e)("grid.filters.clear"),
        disabled: !b.params.stateManager.filtered,
        tabindex: "-1",
        ref_key: "el",
        ref: s,
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
      ]), 8, Cl)), [
        [g, { placement: "bottom" }]
      ]);
    };
  }
}), _l = {
  key: 0,
  class: "flex flex-1 items-center min-w-0",
  "truncate-trigger": ""
}, El = ["content", "aria-label"], kl = {
  key: 1,
  class: "customHeaderLabel",
  role: "columnheader"
}, Ml = {
  key: 2,
  class: "flex"
}, Fl = {
  key: 0,
  class: "w-24 inline-block"
}, Al = {
  key: 1,
  class: "customSortDownLabel"
}, $l = {
  key: 2,
  class: "customSortUpLabel"
}, Tl = ["content", "aria-label", "disabled"], Rl = ["content", "aria-label", "disabled"], Sl = /* @__PURE__ */ H({
  __name: "custom-header",
  props: ["params"],
  setup(b) {
    const { t: r } = z(), e = b, s = w(), t = w(0), o = w(!1), v = w(!1), i = w(!1), m = w(null), g = () => {
      const u = m.value?.getAllDisplayedColumns(), A = u.indexOf(e.params.column), S = u[A - 1]?.colDef, q = u[A + 1]?.colDef;
      v.value = A > 3 && !(S?.headerComponentParams?.isStatic ?? S?.isStatic), i.value = A < u.length - 1 && !(q?.headerComponentParams?.isStatic ?? q?.isStatic);
    }, k = () => {
      const u = m.value?.getAllDisplayedColumns(), A = m.value?.getAllGridColumns(), S = A.indexOf(u[u.indexOf(e.params.column) - 1]);
      v.value && (m.value?.moveColumns([e.params.column], S), e.params.api.ensureColumnVisible(A[S]), s.value?.closest(".ag-header-row")?.querySelector(`[col-id="${e.params.column.colId}"]`)?.querySelector(".move-left")?.focus());
    }, L = () => {
      const u = m.value?.getAllDisplayedColumns(), A = m.value?.getAllGridColumns(), S = A.indexOf(u[u.indexOf(e.params.column) + 1]);
      i.value && (m.value?.moveColumns([e.params.column], S), e.params.api.ensureColumnVisible(A[S]));
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
    }), (u, A) => {
      const S = U("truncate"), q = U("tippy");
      return C(), _("div", {
        class: "ag-custom-header flex flex-1 items-center h-full w-full",
        ref_key: "el",
        ref: s
      }, [
        o.value ? (C(), _("div", _l, [
          $((C(), _("button", {
            type: "button",
            onClick: A[0] || (A[0] = (le) => h(le)),
            content: f(r)(`grid.header.sort.${t.value}`),
            "aria-label": f(r)(`grid.header.sort.${t.value}`),
            class: "customHeaderLabel hover:bg-gray-300 font-bold p-8 max-w-full",
            role: "columnheader",
            tabindex: "-1"
          }, [
            $((C(), _("div", null, [
              ie(D(b.params.displayName), 1)
            ])), [
              [S, { externalTrigger: !0 }]
            ])
          ], 8, El)), [
            [q, { placement: "top", hideOnClick: !1 }]
          ])
        ])) : $((C(), _("span", kl, [
          ie(D(b.params.displayName), 1)
        ])), [
          [S]
        ]),
        o.value ? (C(), _("div", Ml, [
          b.params.enableSorting && t.value === 0 ? (C(), _("span", Fl)) : I("", !0),
          b.params.enableSorting && t.value === 1 ? (C(), _("span", Al, A[3] || (A[3] = [
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
          b.params.enableSorting && t.value === 2 ? (C(), _("span", $l, A[4] || (A[4] = [
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
            content: f(r)("grid.header.reorder.left"),
            "aria-label": f(r)("grid.header.reorder.left"),
            onClick: A[1] || (A[1] = (le) => k()),
            class: "move-left opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !v.value
          }, A[5] || (A[5] = [
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
          ]), 8, Tl)), [
            [q, { placement: "top" }]
          ]),
          $((C(), _("button", {
            type: "button",
            content: f(r)("grid.header.reorder.right"),
            "aria-label": f(r)("grid.header.reorder.right"),
            onClick: A[2] || (A[2] = (le) => L()),
            class: "move-right opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default flex justify-center items-center",
            tabindex: "-1",
            disabled: !i.value
          }, A[6] || (A[6] = [
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
          ]), 8, Rl)), [
            [q, { placement: "top" }]
          ])
        ])) : I("", !0)
      ], 512);
    };
  }
}), Dl = ["content", "aria-label"], Gl = /* @__PURE__ */ H({
  __name: "details-button-renderer",
  props: ["params"],
  setup(b) {
    const r = b, { t: e } = z(), s = de("iApi"), t = w(), o = async () => {
      const v = r.params.data, i = v.rvUid, m = s.geo.layer.getLayer(i), g = He(r.params.layerCols, m), k = await m.getGraphic(v[g], {
        getAttribs: !0
      });
      s.event.emit(
        J.DETAILS_TOGGLE,
        {
          data: k.attributes,
          uid: i,
          format: Rt.ESRI
        },
        !0
      ), r.params.isTeleport && s.scrollToInstance();
    };
    return ee(() => {
      r.params.eGridCell.addEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), r.params.eGridCell.addEventListener("focus", () => {
        t.value._tippy.show();
      }), r.params.eGridCell.addEventListener("blur", () => {
        t.value._tippy.hide();
      });
    }), te(() => {
      r.params.eGridCell.removeEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), r.params.eGridCell.removeEventListener("focus", () => {
        t.value._tippy.show();
      }), r.params.eGridCell.removeEventListener("blur", () => {
        t.value._tippy.hide();
      });
    }), (v, i) => {
      const m = U("tippy");
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
      ]), 8, Dl)), [
        [m, { placement: "top" }]
      ]);
    };
  }
}), Il = ["content", "aria-label"], Vl = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, Pl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "w-20 h-20"
}, Hl = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "w-20 h-20"
}, Bl = ["innerHTML"], Nl = /* @__PURE__ */ H({
  __name: "zoom-button-renderer",
  props: ["params"],
  setup(b) {
    const r = w("none"), e = b, s = de("iApi"), t = St(), o = w(), { t: v } = z(), i = P(() => {
      const k = t.getLayerByUid(e.params.data.rvUid);
      return !!k && k.mapLayer;
    }), m = () => {
      if (r.value !== "none")
        return;
      r.value = "zooming";
      const k = t.getLayerByUid(e.params.data.rvUid);
      if (k === void 0 || !k.isLoaded) {
        g("error");
        return;
      }
      const L = He(e.params.layerCols, k), h = e.params.data[L];
      k.zoomToFeature(h).then((u) => {
        u ? (g("zoomed"), s.updateAlert(s.$i18n.t("grid.cells.alert.zoom")), e.params.isTeleport && s.scrollToInstance()) : g("error");
      });
    }, g = (k) => {
      k === "zoomed" || k === "error" ? setTimeout(() => {
        r.value = k, o.value?._tippy.show(), setTimeout(() => {
          o.value?._tippy.hide(), r.value = "none";
        }, 3e3);
      }, 300) : r.value = k;
    };
    return ee(() => {
      i.value && (e.params.eGridCell.addEventListener("keydown", (k) => {
        k.key === "Enter" && r.value === "none" && m();
      }), e.params.eGridCell.addEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.addEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), te(() => {
      i.value && (e.params.eGridCell.removeEventListener("keydown", (k) => {
        k.key === "Enter" && m();
      }), e.params.eGridCell.removeEventListener("focus", () => {
        o.value?._tippy.show();
      }), e.params.eGridCell.removeEventListener("blur", () => {
        o.value?._tippy.hide();
      }));
    }), (k, L) => {
      const h = U("tippy");
      return i.value ? $((C(), _("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-40 h-36",
        content: f(v)(`grid.cells.zoom${r.value === "none" ? "" : `.${r.value}`}`),
        onClick: m,
        tabindex: "-1",
        ref_key: "button",
        ref: o,
        "aria-label": f(v)(`grid.cells.zoom${r.value === "none" ? "" : `.${r.value}`}`)
      }, [
        r.value === "zooming" ? (C(), _("div", Vl)) : r.value === "zoomed" ? (C(), _("svg", Pl, L[0] || (L[0] = [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M4.5 12.75l6 6 9-13.5"
          }, null, -1)
        ]))) : r.value === "error" ? (C(), _("svg", Hl, L[1] || (L[1] = [
          n("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
          }, null, -1)
        ]))) : (C(), _("span", {
          key: 3,
          innerHTML: f(s).ui.getZoomIcon()
        }, null, 8, Bl))
      ], 8, Il)), [
        [h, { placement: "top" }]
      ]) : I("", !0);
    };
  }
}), Ol = ["content"], Ul = ["innerHTML"], zl = /* @__PURE__ */ H({
  __name: "custom-button-renderer",
  props: ["params"],
  setup(b) {
    const r = b, e = de("iApi"), s = w(), t = P(() => {
      const v = Object.assign({}, r.params.data), i = e.geo.layer.getLayer(v.rvUid), m = r.params.config.displayOn;
      return !(!i || m === "geo" && !i.mapLayer || m === "data" && i.mapLayer);
    }), o = () => {
      const v = Object.assign({}, r.params.data), i = v.rvUid, m = e.geo.layer.getLayer(i), g = He(r.params.layerCols, m), k = v[g];
      m.getGraphic(k, { getAttribs: !0 }).then((L) => {
        e.event.emit(r.params.config.actionEvent, {
          data: L.attributes,
          layer: m,
          uid: i,
          oid: k
        });
      });
    };
    return ee(() => {
      r.params.eGridCell.addEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), r.params.eGridCell.addEventListener("focus", () => {
        s.value._tippy.show();
      }), r.params.eGridCell.addEventListener("blur", () => {
        s.value._tippy.hide();
      });
    }), te(() => {
      r.params.eGridCell.removeEventListener("keydown", (v) => {
        v.key === "Enter" && o();
      }), r.params.eGridCell.removeEventListener("focus", () => {
        s.value._tippy.show();
      }), r.params.eGridCell.removeEventListener("blur", () => {
        s.value._tippy.hide();
      });
    }), (v, i) => {
      const m = U("tippy");
      return t.value ? $((C(), _("button", {
        key: 0,
        type: "button",
        class: "flex items-center justify-center w-42 h-38",
        content: r.params.config.tooltip,
        onClick: o,
        tabindex: "-1",
        ref_key: "el",
        ref: s
      }, [
        n("span", {
          innerHTML: r.params.config.icon
        }, null, 8, Ul)
      ], 8, Ol)), [
        [m, { placement: "top" }]
      ]) : I("", !0);
    };
  }
}), Kl = ["name", "content", "innerHTML"], jl = ["content"], ql = /* @__PURE__ */ H({
  __name: "cell-renderer",
  props: ["params"],
  setup(b) {
    const r = ge(), e = de("iApi"), { t: s } = z(), t = w(), o = w(), v = w(!1), i = b, m = P(() => r.mobileView), g = () => {
      o.value?.textContent && (v.value = !0, t.value?._tippy.show(), navigator.clipboard.writeText(o.value?.textContent), setTimeout(() => {
        v.value = !1;
      }, 2e3));
    }, k = P(() => i.params.type === "number" ? i.params.value == null ? "" : e.ui.formatNumber(i.params.value) : i.params.type === "date" ? i.params.value == null ? "" : new Date(i.params.value).toISOString().slice(0, 10) : i.params.type === "string" ? !i.params.value || /<a[^>]*>[^<]+<\/a>/g.test(i.params.value) ? i.params.value : It(i.params.value, {
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
      const A = U("truncate"), S = U("tippy");
      return C(), _("div", null, [
        $(n("div", {
          name: k.value,
          content: k.value,
          tabindex: "-1",
          innerHTML: k.value,
          ref_key: "el",
          ref: o
        }, null, 8, Kl), [
          [A, {
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
          content: f(s)(`grid.label.${v.value ? "copied" : "copy"}`)
        }, null, 8, jl)), [
          [S, {
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
}), Wl = { class: "pl-8" }, Yl = { class: "flex flex-col justify-center items-center h-full" }, Zl = { class: "flex flex-row" }, Ql = { class: "font-bold text-2xl" }, Xl = { class: "mt-20 text-xl" }, Jl = { class: "my-20" }, ea = { class: "text-sm" }, ta = ["aria-label"], la = { class: "flex flex-wrap gap-y-8 items-center pl-8 pb-8" }, aa = { class: "flex flex-1 flex-col max-w-full mr-8" }, ra = { class: "w-full font-bold" }, sa = { class: "w-full text-sm" }, na = { key: 0 }, oa = { class: "flex flex-1 grow-[1.4] items-center max-w-full" }, ia = { class: "search-bar flex flex-1 min-w-0 items-center pb-4 mr-8" }, ua = ["aria-label", "placeholder"], da = { class: "-ml-30 text-gray-500 search-clear-container" }, pa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  fit: "",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24",
  focusable: "false",
  class: "fill-current w-24 h-24 flex-shrink-0"
}, ca = ["aria-label"], ma = { class: "pb-2 flex ml-auto justify-end" }, va = ["content", "aria-label"], fa = ["aria-label"], ga = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, ha = { class: "grow" }, ya = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, ba = ["aria-label"], wa = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, xa = { class: "grow" }, Ca = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, La = ["aria-label"], _a = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ea = { class: "grow" }, ka = {
  key: 0,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Ma = ["aria-label"], Fa = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Aa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, $a = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-20 h-20 mr-2 text-gray-500"
}, Ta = { class: "grow" }, Ra = {
  key: 2,
  height: "18",
  width: "18",
  viewBox: "0 0 24 24"
}, Sa = ["aria-label"], Da = { class: "md-icon-small flex flex-nowrap items-center gap-x-4" }, Ga = { class: "grow" }, Ia = ["content"], Va = /* @__PURE__ */ H({
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
    Ut.registerModules([zt]), Kt({ theme: "legacy" });
    const r = [ne.OID, ne.DOUBLE, ne.SINGLE, ne.INTEGER], e = de("iApi"), s = nt(), t = ge(), o = P(() => t.mobileView), v = w(!o.value), i = w(), m = $t("gridContainer"), { t: g, locale: k } = z(), L = () => Tt()?.proxy?.$forceUpdate(), h = b, u = w({
      id: "dummy",
      layerIds: [],
      state: new Ht(),
      fieldMap: {}
    }), A = w(!0), S = w(null), q = w(), le = w(), W = w(!1), ae = w(!1), pe = w([]), Me = w(0), Z = w([]), ye = w([]), Fe = w(""), re = w([]), ce = w([]), be = w("OBJECTID"), Ae = w(void 0), it = tt.onCellKeyPress, K = w({ firstRow: 0, lastRow: 0, visibleRows: 0 }), we = w({}), me = w({}), Be = w(s.grids[h.gridId].layerIds), V = P(() => s.grids[h.gridId] ? Be.value.map((a) => e.geo.layer.getLayer(a)).filter((a) => a !== void 0) : []), Ne = P(
      () => u.value.state.filtered || u.value.state.searchFilter
    ), $e = w(/* @__PURE__ */ new Set()), xe = w([]), T = P(() => S.value), Ce = () => {
      e.$vApp.$el.querySelectorAll(
        ".ag-input-field-input.ag-checkbox-input"
      ).forEach((l, y) => {
        const d = T.value.getAllDisplayedColumns()?.[y].getColDef();
        l.setAttribute("aria-label", d?.headerName ?? g("grid.label.specialColumn"));
      });
    }, Oe = () => {
      i.value?.querySelectorAll('[data-ref$="Viewport"]')?.forEach((l) => {
        l.setAttribute("tabindex", "-1");
      });
    }, Ue = P(
      () => V.value.some((a) => a.layerState === Dt.LOADED && a.visibility)
    ), ut = (a) => {
      S.value = a.api;
      let l = u.value.state.title;
      l || (l = e.geo.layer.getLayer(h.gridId)?.name || h.gridId), Fe.value = l, Re(), ce.value.length > 0 && T.value.autoSizeAllColumns(), Ce(), Oe(), T.value.addEventListener("rowDataUpdated", Ce), Z.value.push(
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
      T.value.autoSizeAllColumns(), Ae.value = new tt(i.value, S.value), Ce(), Oe();
    }, Te = () => {
      T.value.setGridOption("quickFilterText", u.value.state.searchFilter);
    }, ze = () => {
      u.value.state.searchFilter = "", Te();
    }, pt = () => {
      ze(), je(), Q();
    }, ct = () => {
      u.value.state.filterByExtent = !u.value.state.filterByExtent, Q();
    }, mt = () => {
      const a = T.value.getColumnDefs();
      u.value.state.colFilter = !u.value.state.colFilter, a?.forEach((l) => {
        l.floatingFilter = u.value.state.colFilter;
      }), T.value.setGridOption("columnDefs", a);
    }, Re = () => {
      S.value && !W.value && (u.value.state.searchFilter !== "" && Te(), u.value.state.applyToMap && Se(), Ee(() => {
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
          cellRenderer: Gl,
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
            cellRenderer: Nl,
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
            cellRenderer: zl,
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
            const c = document.createElement("span"), M = d.data[be.value];
            return x.getIcon(M).then((F) => {
              c.innerHTML = F;
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
      const a = new Gt(), l = xe.value.slice().map((p) => p.getPromise());
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
        const p = kt(a) || "1=2";
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
            let d = y, x = "", c = p.exec(y), M = 0;
            for (; c; )
              x = x + y.substr(M, c.index - M) + c[0].slice(-1), M = c.index + 2, d = y.substr(c.index + 2), c = p.exec(y);
            x = x + d, x = x.replace(/%/g, "ௌ%"), x = x.replace(/_/g, "ௌ_"), x = `*${x}`;
            const F = `UPPER(${a}) LIKE '${x.replace(/\*/g, "%").toUpperCase()}%'`;
            return F.includes("ௌ%") || F.includes("ௌ_") ? `${F} ESCAPE 'ௌ'` : F;
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
    }, kt = (a) => {
      const y = u.value.state.searchFilter.replace(/'/g, "''").split(" "), p = [];
      T.value.forEachNodeAfterFilterAndSort((c) => {
        p.push(c);
      });
      const d = T.value.getAllDisplayedColumns().filter(
        (c) => (c.colDef.filter === "agTextColumnFilter" || c.colDef.filter === "agNumberColumnFilter") && De(a, c.getColId())
      ), x = [];
      return p.forEach((c) => {
        let M = !0, F = "";
        for (const R of y) {
          const E = new RegExp(`.*${R.split(" ").join(".*").toUpperCase()}`), G = `%${R.replace(/\*/g, "%").split(" ").join("%").toUpperCase()}`;
          let Y = !1;
          for (const Ge of d ?? []) {
            const ve = Ge.getColId(), Le = De(a, Ge.getColId())?.origAttr, Xe = Ge.getColDef();
            if (c.data[ve] === void 0)
              Y = !1;
            else if (Xe.filter === "agTextColumnFilter") {
              const X = c.data[ve] === null ? null : c.data[ve].toString();
              if (X !== null && E.test(X.toUpperCase())) {
                F ? F = F.concat(" AND ", `(UPPER(${Le}) LIKE '${G}%')`) : F = F.concat("(", `(UPPER(${Le}) LIKE '${G}%')`), x.includes(F + ")") ? Y = !1 : Y = !0;
                break;
              }
            } else if (Xe.filter === "agNumberColumnFilter") {
              const X = c.data[ve] === null ? null : c.data[ve];
              if (X !== null && E.test(X)) {
                F ? F = F.concat(" AND ", `(${Le} = ${X})`) : F = F.concat("(", `(${Le} = ${X})`), Y = !x.includes(F + ")");
                break;
              }
            }
          }
          if (!Y) {
            M = !1;
            break;
          }
        }
        M && x.push(F + ")");
      }), x.join(" OR ");
    }, Mt = (a) => {
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
      a.length === 0 && qe(), Me.value = a.reduce((c, { featureCount: M }) => c + M, 0), pe.value = new Array(V.value.length).fill(0), a.forEach((c, M) => pe.value[M] += c.downloadedAttributes()), a.forEach((c, M) => {
        ye.value.push(
          Ie(
            () => c.downloadedAttributes(),
            (F) => {
              pe.value[M] = F;
            }
          )
        );
      }), await Promise.all(a.map((c) => c.loadPromise()));
      const l = a.map(async (c) => {
        const M = await Ve(c).getTabularAttributes(), F = u?.value?.state?.state;
        if (F?.columns && F.columnMetadata?.exclusiveColumns) {
          const R = F.columns.map((E) => E.field);
          M.columns = M.columns.filter((E) => R.includes(E.data));
        }
        return M;
      }), [y, p] = await Vt(Promise.all(l));
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
      p.forEach((c, M) => {
        const F = [], R = a[M].id;
        c.columns.forEach((E) => {
          u.value.fieldMap && u.value.fieldMap[E.data] ? (F.push({
            origAttr: E.data,
            mappedAttr: u.value.fieldMap[E.data]
          }), E.data = u.value.fieldMap[E.data], E.title = E.data) : F.push({
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
        ), d.oidField = u.value.fieldMap && u.value.fieldMap[c.oidField] ? u.value.fieldMap[c.oidField] : c.oidField, me.value[R] = F;
      }), be.value = d.oidField;
      for (let c = 0; c < d.rows.length; c++)
        for (const [M] of Object.entries(d.rows[c]))
          e.ui.isPlainText(d.rows[c][M]) && (d.rows[c][M] = e.ui.escapeHtml(d.rows[c][M]));
      ["rvRowIndex", "rvInteractive", "rvSymbol"].map((c) => ({
        data: c,
        title: "",
        special: !0
      })).concat(d.columns).forEach((c) => {
        u.value.state.columns[c.data] === void 0 && (u.value.state.columns[c.data] = new Bt({
          field: c.data,
          title: c.title
        })), (!e.ui.exposeOids || !e.ui.exposeMeasurements) && $e.value.has(c.data) && (u.value.state.columns[c.data].visible = !1);
        const M = u.value.state.columns[c.data], F = M.filter.type === "selector", R = {
          headerName: M.title ?? c.title,
          headerComponent: "agColumnHeader",
          headerComponentParams: {
            sort: M.sort
          },
          field: c.data ?? c,
          sortable: !0,
          lockPosition: !0,
          filterParams: {},
          floatingFilter: u.value.state.colFilter && M.searchable,
          hide: !M.visible,
          minWidth: M.width,
          maxWidth: M.width ?? 400,
          cellRenderer: (E) => E.value,
          suppressHeaderKeyboardEvent: (E) => {
            const G = E.event;
            return E.headerRowIndex === 0 && (G.key === "Enter" || !G.target.classList.contains("ag-header-cell") && G.key === "Tab");
          }
        };
        if (c.special)
          wt(R, re.value, u.value.state);
        else {
          const E = d.fields.find((G) => G.name === R.field);
          R.cellRenderer = M.template === "" ? ql : e.component(M.template), R.autoHeight = !0, r.indexOf(E.type) > -1 ? (yt(R, u.value.state), R.filter = "agNumberColumnFilter", R.cellRendererParams = {
            type: "number"
          }) : E.type === ne.DATE ? (gt(R, u.value.state), R.filter = "agDateColumnFilter", R.minWidth = 400, R.cellRendererParams = {
            type: "date"
          }) : E.type === ne.STRING && (F ? ht(R, d.rows, u.value.state) : bt(R, u.value.state), R.filter = "agTextColumnFilter", R.cellRendererParams = {
            type: "string"
          }), re.value.push(R);
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
      u.value = s.grids[h.gridId], W.value = !0, L(), K.value = {
        firstRow: 0,
        lastRow: 0,
        visibleRows: 0
      }, le.value = {
        agColumnHeader: Sl,
        numberFloatingFilter: sl,
        textFloatingFilter: ul,
        selectorFloatingFilter: fl,
        dateFloatingFilter: xl,
        clearFloatingFilter: Ll
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
        tabToNextCell: Yt,
        // tab vertically instead of horizontally
        tabToNextHeader: Wt,
        onModelUpdated: et(300, () => {
          T.value.autoSizeAllColumns(), Ce();
        })
      }, Ye(), j.value === "partial" && e.notify.show(Je.WARNING, e.$i18n.t("layer.filterwarning")), ye.value.push(
        Ie(k, () => {
          A.value = !1, setTimeout(() => {
            A.value = !0;
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
      const y = Pe("dropdown-menu"), p = U("truncate"), d = U("tippy");
      return C(), _("div", {
        class: "flex flex-col w-full h-full bg-white",
        ref_key: "el",
        ref: i
      }, [
        $(n("div", null, [
          n("p", Wl, D(f(g)("grid.splash.error")), 1)
        ], 512), [
          [se, ae.value]
        ]),
        $(n("div", Yl, [
          n("div", Zl, [
            n("span", Ql, D(pe.value.reduce((x, c) => x + c, 0)), 1),
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
            n("span", Xl, D(Me.value), 1)
          ]),
          n("div", Jl, [
            n("span", ea, D(pe.value.reduce((x, c) => x + c, 0) < Me.value ? f(g)("grid.splash.loading") : f(g)("grid.splash.building")), 1)
          ]),
          n("div", null, [
            n("button", {
              type: "button",
              onClick: qe,
              class: "py-8 px-8 sm:px-16 bg-gray-300",
              "aria-label": f(g)("grid.splash.cancel")
            }, D(f(g)("grid.splash.cancel")), 9, ta)
          ])
        ], 512), [
          [se, W.value && !ae.value]
        ]),
        $(n("div", la, [
          n("div", aa, [
            $((C(), _("div", ra, [
              ie(D(Fe.value), 1)
            ])), [
              [se, Fe.value !== ""],
              [p]
            ]),
            $((C(), _("div", sa, [
              ie(D((!Ue.value && K.value.visibleRows === 0 ? `${f(g)("grid.filters.label.hidden")} — ` : "") + f(g)("grid.filters.label.info", {
                range: K.value.visibleRows !== 0 ? `${K.value.firstRow} - ${K.value.lastRow}` : "0",
                total: K.value.visibleRows
              })) + " ", 1),
              K.value.visibleRows !== ce.value.length && Ue.value ? (C(), _("span", na, D(f(g)("grid.filters.label.filtered", {
                max: ce.value.length
              })), 1)) : I("", !0)
            ])), [
              [p]
            ])
          ]),
          n("div", oa, [
            $(n("div", ia, [
              $(n("input", {
                onInput: l[0] || (l[0] = (x) => Te()),
                onKeypress: l[1] || (l[1] = N(O(() => {
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
              }, null, 40, ua), [
                [ue, u.value.state.searchFilter]
              ]),
              n("div", da, [
                u.value.state.searchFilter.length < 3 ? (C(), _("svg", pa, l[13] || (l[13] = [
                  n("g", { id: "search_cache224" }, [
                    n("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
                  ], -1)
                ]))) : (C(), _("button", {
                  key: 1,
                  class: "flex justify-center fill-current ml-6 cursor-pointer text-gray-500 hover:text-black",
                  onClick: l[4] || (l[4] = (x) => ze()),
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
                ]), 8, ca))
              ])
            ], 512), [
              [se, u.value.state.search]
            ]),
            n("div", ma, [
              ke(Jt, {
                gridApi: S.value,
                columnDefs: re.value,
                systemCols: $e.value,
                onRefreshHeaders: l[5] || (l[5] = (x) => S.value.refreshHeader())
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
              ]), 10, va)), [
                [d, {
                  placement: "bottom"
                }]
              ]),
              ke(y, {
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
                    n("div", ga, [
                      l[18] || (l[18] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("path", { d: "m 15.585999,21.223066 2.414,-2.414 v 1.811 A 3.616,3.616 0 0 0 21.2,15.309066 l 0.881,-0.881 a 4.82,4.82 0 0 1 -4.080001,7.4 v 1.811 z m -13.5859988,-9.224 a 10,10 0 1 1 19.9999998,0 c 0,0.172 0,0.346 -0.013,0.517 a 5.971,5.971 0 0 0 -2.014001,-1.184001 7.935,7.935 0 0 0 -4.973,-6.742999 v 0.41 a 2,2 0 0 1 -2,2 h -2 v 2 A 1,1 0 0 1 10,9.9990662 H 8.0000002 v 1.9999998 h 5.9999988 a 1,1 0 0 1 0.495,0.131 6,6 0 0 0 -0.184,9.6 10.009,10.009 0 0 1 -12.3109988,-9.731 z m 2,0 a 8,8 0 0 0 6.9999988,7.93 v -1.93 a 2,2 0 0 1 -1.9999988,-2 v -1 l -4.79,-4.79 a 8.07,8.07 0 0 0 -0.21,1.79 z m 9.1729988,5 a 4.827,4.827 0 0 1 4.827,-4.828 v -1.81 l 2.414,2.414 -2.414,2.413 v -1.809 a 3.623,3.623 0 0 0 -3.62,3.62 3.537,3.537 0 0 0 0.42,1.69 l -0.881,0.881 a 4.787,4.787 0 0 1 -0.746,-2.571 z" })
                      ], -1)),
                      n("span", ha, D(f(g)("grid.label.filters.apply")), 1),
                      j.value !== "disabled" && u.value.state.applyToMap ? (C(), _("svg", ya, l[17] || (l[17] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 10, fa),
                  n("a", {
                    href: "javascript:;",
                    class: "leading-snug w-256 hover:text-black",
                    onClick: l[8] || (l[8] = (x) => mt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.filters.show")
                  }, [
                    n("div", wa, [
                      l[20] || (l[20] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("path", { d: "M 3,2L 20.9888,2L 21,2L 21,2.01122L 21,3.99999L 20.9207,3.99999L 14,10.9207L 14,22.909L 9.99999,18.909L 10,10.906L 3.09405,3.99999L 3,3.99999L 3,2 Z " })
                      ], -1)),
                      n("span", xa, D(f(g)("grid.label.filters.show")), 1),
                      u.value.state.colFilter ? (C(), _("svg", Ca, l[19] || (l[19] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 8, ba),
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
                    n("div", _a, [
                      l[22] || (l[22] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("path", { d: "M 4 10 Z M 2 2 L 19.9888 2 L 20 2 L 20 2.0112 L 20 4 L 19.9207 4 L 13 10.9207 L 13 22.909 L 9 18.909 L 9 10.906 L 2.0941 4 L 2 4 L 2 2 Z M 24 13 L 21 14 L 18 13 L 15 14 V 22 L 18 21 l 3 1 l 3 -1 z M 21 21 l -3 -1 V 14 l 3 1.055 z" })
                      ], -1)),
                      n("span", Ea, D(f(g)("grid.filters.label.extent")), 1),
                      j.value !== "disabled" && u.value.state.filterByExtent ? (C(), _("svg", ka, l[21] || (l[21] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 10, La),
                  n("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: l[10] || (l[10] = (x) => vt()),
                    role: "button",
                    "aria-label": f(g)("grid.label.pinColumns")
                  }, [
                    n("div", Fa, [
                      v.value ? (C(), _("svg", Aa, l[23] || (l[23] = [
                        n("path", { d: "M18,8H17V6A5,5 0 0,0 12,1A5,5 0 0,0 7,6V8H6A2,2 0 0,0 4,10V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V10A2,2 0 0,0 18,8M12,3A3,3 0 0,1 15,6V8H9V6A3,3 0 0,1 12,3Z" }, null, -1)
                      ]))) : v.value ? I("", !0) : (C(), _("svg", $a, l[24] || (l[24] = [
                        n("path", { d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 01-1.5 0V6.75a3.75 3.75 0 10-7.5 0v3a3 3 0 013 3v6.75a3 3 0 01-3 3H3.75a3 3 0 01-3-3v-6.75a3 3 0 013-3h9v-3c0-2.9 2.35-5.25 5.25-5.25z" }, null, -1)
                      ]))),
                      n("span", Ta, D(f(g)("grid.label.pinColumns")), 1),
                      v.value ? (C(), _("svg", Ra, l[25] || (l[25] = [
                        n("g", { id: "done" }, [
                          n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                        ], -1)
                      ]))) : I("", !0)
                    ])
                  ], 8, Ma),
                  n("a", {
                    href: "javascript:;",
                    class: B(["leading-snug w-256", { hover: "text-black" }]),
                    onClick: l[11] || (l[11] = (x) => ft()),
                    role: "button",
                    "aria-label": f(g)("grid.label.export")
                  }, [
                    n("div", Da, [
                      l[26] || (l[26] = n("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        class: "fill-current w-20 h-20 mr-2 text-gray-500"
                      }, [
                        n("g", null, [
                          n("path", { d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z" })
                        ])
                      ], -1)),
                      n("span", Ga, D(f(g)("grid.label.export")), 1)
                    ])
                  ], 8, Sa)
                ]),
                _: 1
              }, 8, ["tooltip"])
            ])
          ])
        ], 512), [
          [se, !W.value && !ae.value]
        ]),
        A.value ? $((C(), _("div", {
          key: 0,
          content: f(g)("grid.cells.controls"),
          class: "w-full h-full flex flex-col",
          ref_key: "gridContainer",
          ref: m,
          tabIndex: "-1"
        }, [
          ke(f(Pt), {
            class: "ag-theme-material flex-grow",
            enableCellTextSelection: !0,
            accentedSort: !0,
            localeText: f(k) === "en" ? f(Nt) : f(Ot),
            gridOptions: q.value,
            columnDefs: re.value,
            rowData: ce.value,
            components: le.value,
            onGridReady: ut,
            onKeydown: Mt,
            onFirstDataRendered: dt,
            onCellKeyPress: f(it),
            doesExternalFilterPass: Ct,
            isExternalFilterPresent: xt,
            tabIndex: -1
          }, null, 8, ["localeText", "gridOptions", "columnDefs", "rowData", "components", "onCellKeyPress"])
        ], 8, Ia)), [
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
}), Pa = /* @__PURE__ */ he(Va, [["__scopeId", "data-v-7664f6eb"]]), Ha = /* @__PURE__ */ H({
  __name: "screen",
  props: {
    panel: {
      type: st,
      required: !0
    }
  },
  setup(b) {
    const r = nt(), { t: e } = z(), s = P(() => r.currentId);
    return (t, o) => {
      const v = Pe("panel-screen");
      return C(), lt(v, { panel: b.panel }, {
        header: oe(() => [
          ie(D(f(e)("grid.title")), 1)
        ]),
        content: oe(() => [
          ke(Pa, {
            class: "rv-grid",
            gridId: s.value,
            panel: b.panel
          }, null, 8, ["gridId", "panel"])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), $r = /* @__PURE__ */ he(Ha, [["__scopeId", "data-v-904e67ef"]]);
export {
  $r as default
};
