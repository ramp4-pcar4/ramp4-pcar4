import { defineComponent as ie, ref as b, watch as ye, toRef as je, createElementBlock as g, openBlock as v, createElementVNode as n, toDisplayString as y, unref as o, inject as ge, useTemplateRef as ee, reactive as re, onMounted as he, onBeforeUnmount as ce, resolveDirective as Ie, createCommentVNode as L, createVNode as $, withCtx as C, withDirectives as be, normalizeClass as ne, createTextVNode as we, Fragment as Ye, renderList as Ke, vShow as Ae, Transition as Je, renderSlot as Te, computed as H, provide as Ze, useId as Qe, onErrorCaptured as Xe, resolveComponent as et, createBlock as q, withModifiers as $e, nextTick as tt } from "vue";
import { ColorPicker as lt } from "vue-accessible-color-picker";
import { _ as ve, M as at, L as S, a5 as K, G as Oe, a3 as pe } from "./main-MXZmlokj.js";
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
import "pinia";
import { useI18n as Se } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import ot from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
const st = { class: "flex justify-end mb-20" }, nt = ["disabled", "animation"], rt = { class: "button-text" }, it = /* @__PURE__ */ ie({
  __name: "form-footer",
  props: {
    animation: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !0
    }
  },
  setup(s) {
    const { t: c } = Se(), l = s, w = b();
    ye(je(l, "disabled"), (h) => {
      !h && w.value.classList.contains("button--loading") && w.value.classList.remove("button--loading");
    });
    const E = () => {
      l.animation && w.value.classList.toggle("button--loading");
    };
    return (h, f) => (v(), g("div", st, [
      n("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: f[0] || (f[0] = (O) => h.$emit("cancel"))
      }, y(o(c)("wizard.step.cancel")), 1),
      n("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: w,
        type: "button",
        disabled: s.disabled,
        animation: s.animation,
        onClick: f[1] || (f[1] = (O) => {
          h.$emit("submit"), E();
        })
      }, [
        n("span", rt, y(o(c)("wizard.step.continue")), 1)
      ], 8, nt)
    ]));
  }
}), fe = /* @__PURE__ */ ve(it, [["__scopeId", "data-v-5e77d8d6"]]), ut = { key: 0 }, dt = { class: "text-base font-bold" }, ct = {
  class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
  "data-type": "file"
}, vt = ["aria-label"], pt = { class: "text-gray-500 text-xs mb-1" }, ft = { key: 1 }, mt = { class: "text-base font-bold" }, bt = {
  class: "mb-0.5",
  "data-type": "url"
}, yt = ["value", "aria-label"], gt = {
  key: 0,
  class: "text-red-900 text-xs"
}, ht = { key: 2 }, wt = { class: "text-base font-bold" }, St = {
  class: "relative mb-0.5",
  "data-type": "select"
}, xt = { key: 0 }, zt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Et = { key: 1 }, kt = ["size", "value", "aria-label"], Ft = ["value"], Lt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Vt = {
  key: 1,
  class: "text-red-900 text-xs"
}, At = { key: 3 }, $t = ["aria-label"], Ot = { class: "text-base font-bold" }, It = { key: 4 }, Tt = { class: "text-base font-bold" }, Ct = { class: "relative mb-0.5" }, Mt = ["value", "aria-label"], Rt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Nt = /* @__PURE__ */ ie({
  __name: "form-input",
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    defaultOption: {
      type: Boolean,
      default: !1
    },
    formatError: {
      type: Boolean,
      default: !1
    },
    failureError: {
      type: Boolean,
      default: !1
    },
    help: {
      type: [String, Boolean],
      default: !1
    },
    label: {
      type: [String, Boolean],
      default: !1
    },
    modelValue: {
      type: [String, Array],
      default: ""
    },
    name: {
      type: [String, Boolean],
      default: !1
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedValues: {
      type: Array,
      default: () => []
    },
    size: {
      type: [Number, String],
      default: 0
    },
    sublayerOptions: {
      type: Function,
      default() {
        return [];
      }
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    searchable: {
      type: Boolean,
      default: !1
    },
    step: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: "text"
    },
    url: {
      type: [String, Boolean],
      default: !1
    },
    validation: {
      type: Boolean,
      default: !1
    },
    validationMessages: {
      type: Object
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "link", "select", "upload", "text", "nested", "focusElement"],
  setup(s, { expose: c, emit: l }) {
    const w = ge("iApi"), { t: E } = Se(), h = l, f = s, O = b(), V = ee("textInput"), N = ee("selectInput"), _ = ee("urlInput");
    c({ selectInput: N, textInput: V, urlInput: _ });
    const z = b(!1), D = b(!1), W = b(!1), te = b(!1), B = b([...f.selectedValues]), P = b("value-label"), J = b("option-label"), M = b(void 0), T = b(null), G = re([]);
    if (f.defaultOption && f.modelValue === "" && f.options.length) {
      let u = f.options[0].value;
      if (f.name === "latField") {
        const i = new RegExp(/^(y|lat.*)$/i);
        u = f.options.find((p) => i.test(p.label))?.value || u;
      } else if (f.name === "longField") {
        const i = new RegExp(/^(x|long.*)$/i);
        u = f.options.find((p) => i.test(p.label))?.value || u;
      }
      h("update:modelValue", u);
    }
    const Z = (u) => {
      u.trim() !== "" ? z.value = !0 : (z.value = !1, w.updateAlert(E("wizard.configure.name.error.required")));
    }, le = (u) => {
      let i;
      try {
        i = new URL(u);
      } catch {
        return z.value = !1, !1;
      }
      z.value = i.protocol === "http:" || i.protocol === "https:";
    }, ue = (u) => {
      h("upload", u.target.files[0]), u.target.value = "";
    }, Q = (u) => {
      le(u.target.value), h("link", u.target.value, z), D.value = !1;
    }, x = (u, i) => {
      h(u ? "select" : "update:modelValue", i.target.value);
    }, ae = (u) => {
      h("nested", u.target.checked);
    }, oe = (u) => {
      Z(u.target.value), h("link", u.target.value, z), W.value = !1;
    }, A = () => {
      h("select", f.sublayerOptions(B.value)), te.value = B.value && B.value.length === 0;
    }, j = (u) => u.length > 5 ? `${u.slice(0, 5)}...` : u;
    function k() {
      M.value = new ResizeObserver(function() {
        a();
      }), M.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__control")), M.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const a = () => {
      const i = w.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight ?? 0, p = w.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight ?? 0;
      O.value.style.height = `${i + p + 30}px`;
    };
    G.push(
      ye(T, (u) => {
        u && de();
      })
    );
    const de = () => {
      if (T.value) {
        const u = T.value.querySelector('input[type="text"]');
        u && u.setAttribute("aria-label", E("wizard.configure.sublayers.select"));
      }
    };
    return he(() => {
      f.step === 2 && f.step === f.activeStep && h("focusElement");
    }), ce(() => {
      M.value.disconnect(), G.forEach((u) => u());
    }), (u, i) => {
      const U = Ie("truncate");
      return v(), g("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: O
      }, [
        s.type === "file" ? (v(), g("div", ut, [
          n("label", dt, y(s.label), 1),
          n("div", ct, [
            n("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": f.ariaLabel,
              onInput: i[0] || (i[0] = (p) => {
                ue(p);
              })
            }, null, 40, vt),
            i[11] || (i[11] = n("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              n("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                n("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                n("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          n("div", pt, y(s.help), 1)
        ])) : s.type === "url" ? (v(), g("div", ft, [
          n("label", mt, y(s.label), 1),
          n("div", bt, [
            n("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: s.modelValue,
              "aria-label": f.ariaLabel,
              onChange: i[1] || (i[1] = (p) => z.value ? D.value = !1 : D.value = !0),
              onInput: i[2] || (i[2] = (p) => {
                Q(p);
              }),
              ref_key: "urlInput",
              ref: _
            }, null, 40, yt)
          ]),
          D.value ? (v(), g("div", gt, y(s.modelValue ? s.validationMessages?.invalid : s.validationMessages?.required), 1)) : L("", !0)
        ])) : s.type === "select" ? (v(), g("div", ht, [
          n("label", wt, y(s.label), 1),
          n("div", St, [
            s.multiple ? (v(), g("div", xt, [
              n("div", {
                ref_key: "treeWrapper",
                ref: T
              }, [
                $(o(ot), {
                  modelValue: B.value,
                  "onUpdate:modelValue": i[3] || (i[3] = (p) => B.value = p),
                  multiple: !0,
                  options: s.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: s.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: o(E)("wizard.configure.sublayers.select"),
                  noResultsText: o(E)("wizard.configure.sublayers.results"),
                  clearAllText: o(E)("wizard.configure.sublayers.clearAll"),
                  onSelect: i[4] || (i[4] = (p) => {
                    u.$nextTick(() => {
                      A();
                    });
                  }),
                  onDeselect: i[5] || (i[5] = (p) => {
                    u.$nextTick(() => {
                      A();
                    });
                  }),
                  onOpen: i[6] || (i[6] = (p) => {
                    u.$nextTick(() => {
                      k();
                    });
                  })
                }, {
                  [P.value]: C(({ node: p }) => [
                    n("label", null, y(j(p.label)), 1)
                  ]),
                  [J.value]: C(({ node: p, labelClassName: se }) => [
                    be((v(), g("label", {
                      class: ne(se)
                    }, [
                      we(y(p.label), 1)
                    ], 2)), [
                      [U, {
                        options: {
                          placement: "top",
                          hideOnClick: !1,
                          theme: "ramp4",
                          animation: "scale"
                        }
                      }]
                    ])
                  ]),
                  _: 2
                }, 1032, ["modelValue", "options", "searchable", "placeholder", "noResultsText", "clearAllText"])
              ], 512),
              s.validation && te.value ? (v(), g("div", zt, y(s.validationMessages?.required), 1)) : L("", !0)
            ])) : (v(), g("div", Et, [
              n("select", {
                class: ne(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", s.size && "configure-select"]),
                size: s.size,
                value: s.modelValue,
                onInput: i[7] || (i[7] = (p) => x(s.size, p)),
                "aria-label": f.ariaLabel,
                ref_key: "selectInput",
                ref: N
              }, [
                (v(!0), g(Ye, null, Ke(s.options, (p) => (v(), g("option", {
                  class: "p-6",
                  key: p.label,
                  value: p.value
                }, y(p.label), 9, Ft))), 128))
              ], 42, kt),
              s.validation && s.formatError ? (v(), g("div", Lt, y(s.validationMessages?.invalid), 1)) : L("", !0),
              s.validation && s.failureError ? (v(), g("div", Vt, y(s.validationMessages?.failure), 1)) : L("", !0)
            ]))
          ])
        ])) : s.type === "checkbox" ? (v(), g("div", At, [
          n("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": f.ariaLabel,
            onChange: i[8] || (i[8] = (p) => {
              ae(p);
            })
          }, null, 40, $t),
          n("label", Ot, y(s.label), 1)
        ])) : (v(), g("div", It, [
          n("label", Tt, y(s.label), 1),
          n("div", Ct, [
            n("input", {
              class: ne(["border-solid border-gray-300 p-3 w-full", { "error-border": !z.value && !s.modelValue }]),
              type: "text",
              value: s.modelValue,
              "aria-label": f.ariaLabel,
              onChange: i[9] || (i[9] = (p) => z.value ? W.value = !1 : W.value = !0),
              onInput: i[10] || (i[10] = (p) => {
                oe(p);
              }),
              ref_key: "textInput",
              ref: V
            }, null, 42, Mt)
          ]),
          s.validation && !s.modelValue ? (v(), g("div", Rt, y(s.validationMessages?.required), 1)) : L("", !0)
        ]))
      ], 512);
    };
  }
}), R = /* @__PURE__ */ ve(Nt, [["__scopeId", "data-v-e4aa1c54"]]), Ut = { class: "step relative flex flex-col px-12" }, _t = { class: "stepper-header flex pb-24" }, Bt = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, qt = { class: "flex flex-col overflow-hidden" }, Ht = { class: "pl-12 flex items-center text-md" }, Dt = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Wt = /* @__PURE__ */ ie({
  __name: "stepper-item",
  props: {
    title: {
      type: String,
      required: !0
    },
    summary: {
      type: String
    }
  },
  emits: ["focusPanel", "focusFirstElement"],
  setup(s, { emit: c }) {
    const l = ge("stepper"), w = b(), E = c, h = b(-1), f = (N) => {
      V() || (N.stopPropagation(), E("focusPanel"), E("focusFirstElement"));
    };
    he(() => {
      h.value = l.numSteps++, w.value?.addEventListener("focusout", f);
    }), ce(() => {
      w.value?.removeEventListener("focusout", f);
    });
    const O = () => l.activeIndex > h.value, V = () => l.activeIndex === h.value;
    return (N, _) => {
      const z = Ie("truncate");
      return v(), g("div", Ut, [
        n("div", _t, [
          O() ? (v(), g("div", Bt, _[0] || (_[0] = [
            n("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              n("g", { id: "check_circle" }, [
                n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (v(), g("div", {
            key: 0,
            class: ne(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": V }])
          }, y(h.value + 1), 3)),
          n("div", qt, [
            n("div", Ht, y(s.title), 1),
            be((v(), g("div", Dt, [
              we(y(s.summary), 1)
            ])), [
              [Ae, !V()],
              [z]
            ])
          ])
        ]),
        $(Je, {
          name: "step",
          mode: "out-in"
        }, {
          default: C(() => [
            be(n("div", {
              class: "pl-36",
              ref_key: "stepItem",
              ref: w
            }, [
              Te(N.$slots, "default", {}, void 0, !0)
            ], 512), [
              [Ae, V()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), me = /* @__PURE__ */ ve(Wt, [["__scopeId", "data-v-53b5c8d8"]]), Pt = { class: "py-12 h-auto stepper" }, Gt = /* @__PURE__ */ ie({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(s) {
    const c = s, l = H(() => c.activeStep), w = re([]), E = re({
      activeIndex: c.activeStep,
      numSteps: 0
    });
    return Ze("stepper", E), w.push(
      ye(l, () => {
        E.activeIndex = c.activeStep;
      })
    ), ce(() => {
      w.forEach((h) => h());
    }), (h, f) => (v(), g("div", Pt, [
      Te(h.$slots, "default")
    ]));
  }
}), jt = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Yt = { class: "px-5 text-xs" }, Kt = { key: 5 }, Jt = ["for"], Zt = {
  key: 6,
  class: "text-base font-bold"
}, Qt = { class: "sr-only" }, Xt = { class: "sr-only" }, el = /* @__PURE__ */ ie({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(s) {
    const c = at(), { t: l } = Se(), w = ge("iApi"), E = b(), h = Qe(), f = b([]), O = H(() => c.layerSource), V = H(() => c.currStep), N = b(), _ = b(0), z = b(!1), D = b(), W = ee("stepOneStart"), te = ee("stepTwoStart"), B = ee("stepThreeStart"), P = b(!1), J = b(!1), M = b(!1), T = b(!1), G = b(!1), Z = b(!1), le = b(!0), ue = b(""), Q = b(""), x = b([]), ae = re([
      {
        value: S.FEATURE,
        label: l("wizard.layerType.esriFeature")
      },
      {
        value: S.MAPIMAGE,
        label: l("wizard.layerType.esriMapImage")
      },
      {
        value: S.TILE,
        label: l("wizard.layerType.esriTile")
      },
      {
        value: S.IMAGERY,
        label: l("wizard.layerType.esriImagery")
      },
      {
        value: S.WMS,
        label: l("wizard.layerType.ogcWms")
      },
      {
        value: S.WFS,
        label: l("wizard.layerType.ogcWfs")
      }
    ]), oe = re([
      {
        value: S.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: S.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: S.CSV, label: l("wizard.fileType.csv") }
    ]), A = H({
      get() {
        return c.url;
      },
      set(e) {
        c.url = e;
      }
    }), j = H({
      get() {
        return c.fileData;
      },
      set(e) {
        c.fileData = e;
      }
    }), k = H({
      get() {
        return c.typeSelection;
      },
      set(e) {
        c.typeSelection = e;
      }
    }), a = H({
      get() {
        return c.layerInfo;
      },
      set(e) {
        c.layerInfo = e;
      }
    }), de = H(() => {
      const e = w.geo.proxy !== "";
      switch (k.value) {
        // ESRI ArcGIS Server
        // required only if no proxy is set
        case S.FEATURE:
        case S.MAPIMAGE:
        case S.TILE:
        case S.IMAGERY:
          return !e;
        // WFS Server
        // always required
        case S.WFS:
          return !0;
        // WMS Server
        // required only if proxy is set
        case S.WMS:
          return !e;
        // Files
        // always required for files from hosted services
        case S.GEOJSON:
        case S.SHAPEFILE:
        case S.CSV:
          return !!(Y() && !j.value);
        default:
          return !1;
      }
    });
    Xe(() => ((V.value === K.FORMAT || V.value === K.CONFIGURE) && (P.value = !0, c.goToStep(K.FORMAT)), !1)), he(() => {
      f.value.push(
        w.event.on(Oe.LAYER_LAYERSTATECHANGE, (e) => {
          e.layer.userAdded && (ue.value = e.layer.name, Z.value = e.state !== pe.LOADING && e.state !== pe.NEW, le.value = Z.value && e.state === pe.LOADED);
        })
      ), V.value === K.CONFIGURE && (a.value?.configOptions.includes("colour") && Ve(), T.value = !a.value?.configOptions.includes("sublayers") && !!a.value?.config.name);
    }), ce(() => {
      f.value.forEach((e) => w.event.off(e));
    });
    const u = () => {
      D.value.el.dispatchEvent(new MouseEvent("click"));
    }, i = () => {
      switch (V.value) {
        case 0:
          U(W);
          break;
        case 1:
          U(te);
          break;
        case 2:
          U(B);
          break;
      }
    };
    function U(e) {
      e.value?.$el.querySelectorAll("input, select")[0]?.focus();
    }
    const p = async (e) => {
      const t = new FileReader();
      t.onload = (d) => {
        j.value = t.result, A.value = e.name, se(d);
      }, t.readAsArrayBuffer(e);
    }, se = (e) => {
      e?.preventDefault(), k.value = O.value.guessFormatFromURL(A.value), c.goToStep(K.FORMAT);
    }, xe = async (e) => {
      e?.preventDefault(), z.value = !0, J.value = !1, G.value = !0, c.goToStep(K.CONFIGURE), Q.value = Y() ? oe.find((d) => d.value === k.value)?.label : ae.find((d) => d.value === k.value)?.label;
      try {
        a.value = Y() ? await O.value.fetchFileInfo(A.value, k.value, j.value) : await O.value.fetchServiceInfo(
          A.value,
          k.value,
          c.nested
        ), Y() && j.value && (a.value.config.url = "");
      } catch {
        z.value = !1, J.value = !0;
        return;
      }
      const t = k.value === S.FEATURE && !(a.value && a.value.fields);
      if (!a.value || t) {
        P.value = !0, a.value = {
          config: {
            id: "Placeholder",
            layerType: S.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, z.value = !1;
        return;
      }
      Ve(), T.value = !(a.value.configOptions.includes("sublayers") || !a.value.config.name), z.value = !1, G.value = !1;
    }, ze = async (e) => {
      e?.preventDefault();
      const t = Object.assign(a.value.config, e);
      x.value = [], Q.value = "";
      const d = w.geo.layer.createLayer(t);
      w.geo.map.addLayer(d).catch(() => {
      }), d.userAdded = !0, w.event.emit(Oe.USER_LAYER_ADDED, d), M.value = !1, c.goToStep(K.UPLOAD);
    }, Ee = () => a.value?.fields.map((e) => ({
      value: e.name,
      label: e.alias || e.name
    })), ke = (e) => a.value?.latLonFields[e].map((t) => ({
      value: t,
      label: t
    })), Y = () => j.value || A.value.match(/\.(zip|csv|json|geojson)$/), Ce = (e) => {
      p(e), A.value = "";
    }, Me = (e, t) => {
      A.value = e.trim(), M.value = t;
    }, Re = (e) => {
      k.value = e, P.value = !1;
    }, Ne = (e) => {
      a.value.config.name = e.trim();
      const t = a.value?.config.sublayers, d = t ? e && t.length > 0 : e.trim();
      T.value = !!d;
    }, Fe = (e) => {
      a.value.config.sublayers = e, T.value = !!(e.length > 0 && a.value?.config.name);
    }, Ue = (e) => {
      if (c.nested = e, x.value = [], _.value += 1, k.value === S.MAPIMAGE) {
        a.value.layers = O.value.createLayerHierarchy(
          a.value.layersRaw,
          c.nested
        );
        const t = new Set(
          (a.value?.config?.sublayers ?? []).map((d) => d.index)
        );
        c.nested ? _e(a, t) : qe(a, t);
      } else if (k.value === S.WMS) {
        a.value.layers = O.value.mapWmsLayerList(
          a.value.layersRaw,
          c.nested
        );
        const t = new Set((a.value?.config?.sublayers ?? []).map((d) => d.id));
        c.nested ? Be(a, t) : He(a, t);
      }
      Fe(Le(x.value));
    }, _e = (e, t) => {
      const d = /* @__PURE__ */ new Map();
      for (const r of e.value.layersRaw)
        if (r.parentLayerId !== -1) {
          const I = d.get(r.parentLayerId) || [];
          I.push(r.id), d.set(r.parentLayerId, I);
        }
      const m = (r) => {
        const I = d.get(r);
        return I ? I.every((X) => d.has(X) ? m(X) : t.has(X)) : !1;
      }, F = (r) => {
        if (m(r))
          x.value.push(r);
        else {
          const I = d.get(r);
          if (I)
            for (const X of I)
              t.has(X) && x.value.push(X);
        }
      };
      for (const r of d.keys()) F(r);
      for (const r of e.value.layersRaw)
        r.parentLayerId === -1 && !d.has(r.id) && t.has(r.id) && x.value.push(r.id);
      x.value = Array.from(new Set(x.value));
    }, Be = (e, t) => {
      const d = (r) => !r.layers || r.layers.length === 0 ? t.has(r.name) : r.layers.every((I) => d(I)), m = (r) => {
        d(r) ? x.value.push(r.name) : r.layers && r.layers.forEach(m);
      }, F = e.value.layersRaw[0];
      F && F.layers && F.layers.forEach((r) => m(r)), x.value = Array.from(new Set(x.value));
    }, qe = (e, t) => {
      const d = (m) => {
        const F = e.value.layersRaw.filter((r) => r.parentLayerId === m);
        if (F.length > 0)
          for (const r of F)
            t.has(r.id) ? x.value.push(r.id) : d(r.id);
        else x.value.push(m);
      };
      for (const m of e.value.layersRaw)
        t.has(m.id) && d(m.id);
      x.value = Array.from(new Set(x.value));
    }, He = (e, t) => {
      const d = (F) => {
        F.layers && F.layers.length > 0 ? F.layers.forEach(d) : x.value.push(F.name);
      }, m = e.value.layersRaw[0];
      for (const F of t) {
        const r = m.layers.find((I) => I.name === F);
        r && r.layers && r.layers.length > 0 ? d(r) : r && x.value.push(r.name);
      }
      x.value = Array.from(new Set(x.value));
    }, Le = (e) => e.map((t) => {
      switch (k.value) {
        case S.MAPIMAGE:
          return {
            index: t,
            state: { opacity: 1, visibility: !0 }
          };
        case S.WMS: {
          const d = t.lastIndexOf("#");
          return { id: t.substring(0, d) };
        }
        default:
          return {
            id: t
          };
      }
    }), Ve = () => {
      N.value = a.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    }, De = (e) => {
      a.value.config.colour = e.colors.hex.substring(0, 7), tt(() => {
        E.value.querySelector(".vacp-copy-button").style.backgroundColor = a.value?.config.colour;
      });
    }, We = () => {
      M.value = !1, c.goToStep(0), U(W);
    }, Pe = () => {
      z.value = !1, P.value = !1, J.value = !1, M.value = !!A.value, G.value = !1, c.goToStep(0), Q.value = "";
    }, Ge = () => {
      x.value = [], T.value = !1, c.goToStep(1);
    };
    return (e, t) => {
      const d = et("panel-screen");
      return v(), q(d, {
        panel: s.panel,
        ref_key: "thePanel",
        ref: D
      }, {
        header: C(() => [
          we(y(o(l)("wizard.title")), 1)
        ]),
        content: C(() => [
          $(Gt, { activeStep: V.value }, {
            default: C(() => [
              $(me, {
                title: o(l)("wizard.upload.title"),
                summary: A.value,
                onFocusPanel: u,
                onFocusFirstElement: i
              }, {
                default: C(() => [
                  n("form", {
                    name: "upload",
                    onSubmit: se,
                    onClick: t[1] || (t[1] = (m) => Z.value = !1)
                  }, [
                    $(R, {
                      type: "file",
                      name: "file",
                      label: o(l)("wizard.upload.file.label"),
                      help: o(l)("wizard.upload.file.help"),
                      onUpload: Ce,
                      "aria-label": o(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    t[11] || (t[11] = n("span", { class: "block text-center mb-10" }, "or", -1)),
                    $(R, {
                      type: "url",
                      name: "url",
                      modelValue: A.value,
                      "onUpdate:modelValue": t[0] || (t[0] = (m) => A.value = m),
                      label: o(l)("wizard.upload.url.label"),
                      onLink: Me,
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.upload.url.error.required"),
                        invalid: o(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": o(l)("wizard.upload.url.label"),
                      ref_key: "stepOneStart",
                      ref: W
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    $(fe, {
                      onSubmit: se,
                      onCancel: We,
                      disabled: !M.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              $(me, {
                title: o(l)("wizard.format.title"),
                summary: Q.value,
                onFocusFirstElement: i
              }, {
                default: C(() => [
                  n("form", {
                    name: "format",
                    onSubmit: xe
                  }, [
                    de.value ? (v(), g("div", jt, [
                      t[12] || (t[12] = n("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        n("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      n("span", Yt, y(o(l)("wizard.format.info.cors")), 1)
                    ])) : L("", !0),
                    $(R, {
                      type: "select",
                      name: "type",
                      modelValue: k.value,
                      "onUpdate:modelValue": t[2] || (t[2] = (m) => k.value = m),
                      onSelect: Re,
                      size: Y() ? oe.length : ae.length,
                      label: Y() ? o(l)("wizard.format.type.file") : o(l)("wizard.format.type.service"),
                      options: Y() ? oe : ae,
                      formatError: P.value,
                      failureError: J.value,
                      validation: G.value,
                      "validation-messages": {
                        required: o(l)("wizard.format.type.error.required"),
                        invalid: o(l)("wizard.format.type.error.invalid"),
                        failure: `${o(l)("wizard.format.type.error.failure")}.${de.value ? " " + o(l)("wizard.format.warn.cors") + "." : ""}${" " + o(l)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: t[3] || (t[3] = $e(() => {
                      }, ["stop"])),
                      "aria-label": o(l)("wizard.format.type.service"),
                      ref_key: "stepTwoStart",
                      ref: te
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    $(fe, {
                      onSubmit: xe,
                      onCancel: Pe,
                      animation: !0,
                      disabled: z.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              $(me, {
                title: o(l)("wizard.configure.title"),
                onFocusFirstElement: i
              }, {
                default: C(() => [
                  n("form", {
                    name: "configure",
                    onSubmit: ze,
                    ref_key: "formElement",
                    ref: E
                  }, [
                    a.value?.configOptions.includes("name") ? (v(), q(R, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: a.value.config.name,
                      "onUpdate:modelValue": t[4] || (t[4] = (m) => a.value.config.name = m),
                      onLink: Ne,
                      label: o(l)("wizard.configure.name.label"),
                      "aria-label": o(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.configure.name.error.required")
                      },
                      ref_key: "stepThreeStart",
                      ref: B,
                      onFocusElement: i,
                      activeStep: V.value,
                      step: 2
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages", "activeStep"])) : L("", !0),
                    a.value?.configOptions.includes("nameField") ? (v(), q(R, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: a.value.config.nameField,
                      "onUpdate:modelValue": t[5] || (t[5] = (m) => a.value.config.nameField = m),
                      label: o(l)("wizard.configure.nameField.label"),
                      "aria-label": o(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: Ee()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("tooltipField") ? (v(), q(R, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: a.value.config.tooltipField,
                      "onUpdate:modelValue": t[6] || (t[6] = (m) => a.value.config.tooltipField = m),
                      label: o(l)("wizard.configure.tooltipField.label"),
                      "aria-label": o(l)("wizard.configure.tooltipField.label"),
                      options: Ee()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("latField") ? (v(), q(R, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: a.value.config.latField,
                      "onUpdate:modelValue": t[7] || (t[7] = (m) => a.value.config.latField = m),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.latField.label"),
                      "aria-label": o(l)("wizard.configure.latField.label"),
                      options: ke("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("longField") ? (v(), q(R, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: a.value.config.longField,
                      "onUpdate:modelValue": t[8] || (t[8] = (m) => a.value.config.longField = m),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.longField.label"),
                      "aria-label": o(l)("wizard.configure.longField.label"),
                      options: ke("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("sublayers") ? (v(), g("div", Kt, [
                      $(R, {
                        type: "checkbox",
                        name: "nested",
                        onNested: Ue,
                        label: o(l)("wizard.configure.sublayers.nested"),
                        "aria-label": o(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (v(), q(R, {
                        type: "select",
                        key: _.value,
                        name: "sublayers",
                        modelValue: a.value.config.sublayers,
                        "onUpdate:modelValue": t[9] || (t[9] = (m) => a.value.config.sublayers = m),
                        onSelect: Fe,
                        label: o(l)("wizard.configure.sublayers.label"),
                        "aria-label": o(l)("wizard.configure.sublayers.label"),
                        options: a.value.layers,
                        selectedValues: x.value,
                        sublayerOptions: Le,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: o(l)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: t[10] || (t[10] = $e(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : L("", !0),
                    n("label", {
                      class: "sr-only",
                      for: `${o(h)}-color-hex`
                    }, y(o(l)("wizard.configure.colour.hex")), 9, Jt),
                    a.value?.configOptions.includes("colour") ? (v(), g("label", Zt, y(o(l)("wizard.configure.colour.label")), 1)) : L("", !0),
                    a.value?.configOptions.includes("colour") ? (v(), q(o(lt), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: o(h) + "-hue-slider",
                      color: N.value,
                      onColorChange: De
                    }, {
                      "hue-range-input-label": C(() => [
                        n("span", Qt, y(o(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": C(() => [
                        n("span", Xt, y(o(l)("wizard.configure.colour.copy")), 1),
                        t[13] || (t[13] = n("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          n("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          n("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : L("", !0),
                    $(fe, {
                      onSubmit: ze,
                      onCancel: Ge,
                      disabled: !T.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          Z.value ? (v(), g("div", {
            key: 0,
            class: ne(["p-3 border-solid border-2", le.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, y(ue.value) + " " + y(o(l)(`wizard.upload.${le.value ? "success" : "fail"}`)), 3)) : L("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Bl = /* @__PURE__ */ ve(el, [["__scopeId", "data-v-d5692e59"]]);
export {
  Bl as default
};
