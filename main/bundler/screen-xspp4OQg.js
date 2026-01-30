import { defineComponent as ne, ref as b, watch as ge, toRef as Ye, createElementBlock as g, openBlock as p, createElementVNode as s, toDisplayString as y, unref as o, inject as he, useTemplateRef as le, reactive as se, onMounted as we, onBeforeUnmount as de, resolveDirective as Te, createCommentVNode as F, createVNode as $, withCtx as C, withDirectives as ye, normalizeClass as re, createTextVNode as Se, Fragment as Ke, renderList as Je, vShow as $e, Transition as Ze, renderSlot as Ce, computed as W, provide as Qe, useId as Xe, onErrorCaptured as et, resolveComponent as tt, createBlock as D, withModifiers as Oe, nextTick as lt } from "vue";
import { ColorPicker as at } from "vue-accessible-color-picker";
import { _ as ce, M as ot, L as S, a5 as Y, G as Ie, a0 as fe } from "./main-CBWdV-Iy.js";
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
import { useI18n as xe } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import rt from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
const st = { class: "flex justify-end mb-20" }, nt = ["disabled", "animation"], it = { class: "button-text" }, ut = /* @__PURE__ */ ne({
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
  setup(r) {
    const { t: v } = xe(), l = r, w = b();
    ge(Ye(l, "disabled"), (h) => {
      !h && w.value.classList.contains("button--loading") && w.value.classList.remove("button--loading");
    });
    const z = () => {
      l.animation && w.value.classList.toggle("button--loading");
    };
    return (h, f) => (p(), g("div", st, [
      s("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: f[0] || (f[0] = (O) => h.$emit("cancel"))
      }, y(o(v)("wizard.step.cancel")), 1),
      s("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: w,
        type: "button",
        disabled: r.disabled,
        animation: r.animation,
        onClick: f[1] || (f[1] = (O) => {
          h.$emit("submit"), z();
        })
      }, [
        s("span", it, y(o(v)("wizard.step.continue")), 1)
      ], 8, nt)
    ]));
  }
}), me = /* @__PURE__ */ ce(ut, [["__scopeId", "data-v-5e77d8d6"]]), dt = { key: 0 }, ct = { class: "text-base font-bold" }, vt = {
  class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
  "data-type": "file"
}, pt = ["aria-label"], ft = { class: "text-gray-500 text-xs mb-1" }, mt = { key: 1 }, bt = { class: "text-base font-bold" }, yt = {
  class: "mb-0.5",
  "data-type": "url"
}, gt = ["value", "aria-label"], ht = {
  key: 0,
  class: "text-red-900 text-xs"
}, wt = { key: 2 }, St = { class: "text-base font-bold" }, xt = {
  class: "relative mb-0.5",
  "data-type": "select"
}, zt = { key: 0 }, Et = {
  key: 0,
  class: "text-red-900 text-xs"
}, kt = { key: 1 }, Ft = ["size", "value", "aria-label"], At = ["value"], Lt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Vt = {
  key: 1,
  class: "text-red-900 text-xs"
}, $t = { key: 3 }, Ot = ["aria-label"], It = { class: "text-base font-bold" }, Tt = { key: 4 }, Ct = { class: "text-base font-bold" }, Mt = { class: "relative mb-0.5" }, Rt = ["value", "aria-label"], Nt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Ut = /* @__PURE__ */ ne({
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
  setup(r, { expose: v, emit: l }) {
    const w = he("iApi"), { t: z } = xe(), h = l, f = r, O = b(), A = le("textInput"), M = le("selectInput"), q = le("urlInput");
    v({ selectInput: M, textInput: A, urlInput: q });
    const L = b(!1), T = b(!1), K = b(!1), J = b(!1), H = b([...f.selectedValues]), ie = b("value-label"), P = b("option-label"), _ = b(void 0), R = b(null), N = se([]);
    if (f.defaultOption && f.modelValue === "" && f.options.length) {
      let i = f.options[0].value;
      if (f.name === "latField") {
        const u = new RegExp(/^(y|lat.*)$/i);
        i = f.options.find((c) => u.test(c.label))?.value || i;
      } else if (f.name === "longField") {
        const u = new RegExp(/^(x|long.*)$/i);
        i = f.options.find((c) => u.test(c.label))?.value || i;
      }
      h("update:modelValue", i);
    }
    const Z = (i) => {
      i.trim() !== "" ? L.value = !0 : (L.value = !1, w.updateAlert(z("wizard.configure.name.error.required")));
    }, Q = (i) => {
      let u;
      try {
        u = new URL(i);
      } catch {
        return L.value = !1, !1;
      }
      L.value = u.protocol === "http:" || u.protocol === "https:";
    }, ae = (i) => {
      h("upload", i.target.files[0]), i.target.value = "";
    }, ue = (i) => {
      Q(i.target.value), h("link", i.target.value, L), T.value = !1;
    }, X = (i, u) => {
      h(i ? "select" : "update:modelValue", u.target.value);
    }, x = (i) => {
      h("nested", i.target.checked);
    }, oe = (i) => {
      Z(i.target.value), h("link", i.target.value, L), K.value = !1;
    }, ee = () => {
      h("select", f.sublayerOptions(H.value)), J.value = H.value && H.value.length === 0;
    }, V = (i) => i.length > 5 ? `${i.slice(0, 5)}...` : i;
    function G() {
      _.value = new ResizeObserver(function() {
        E();
      }), _.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__control")), _.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const E = () => {
      const u = w.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight ?? 0, c = w.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight ?? 0;
      O.value.style.height = `${u + c + 30}px`;
    };
    N.push(
      ge(R, (i) => {
        i && a();
      })
    );
    const a = () => {
      if (R.value) {
        const i = R.value.querySelector('input[type="text"]');
        i && i.setAttribute("aria-label", z("wizard.configure.sublayers.select"));
      }
    };
    return we(() => {
      f.step === 2 && f.step === f.activeStep && h("focusElement");
    }), de(() => {
      _.value.disconnect(), N.forEach((i) => i());
    }), (i, u) => {
      const B = Te("truncate");
      return p(), g("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: O
      }, [
        r.type === "file" ? (p(), g("div", dt, [
          s("label", ct, y(r.label), 1),
          s("div", vt, [
            s("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": f.ariaLabel,
              onInput: u[0] || (u[0] = (c) => {
                ae(c);
              })
            }, null, 40, pt),
            u[11] || (u[11] = s("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
              s("svg", {
                class: "w-30 h-30 m-auto",
                fill: "#a8a8a8",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 58 58"
              }, [
                s("path", { d: "M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z" }),
                s("polygon", { points: "27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22" })
              ])
            ], -1))
          ]),
          s("div", ft, y(r.help), 1)
        ])) : r.type === "url" ? (p(), g("div", mt, [
          s("label", bt, y(r.label), 1),
          s("div", yt, [
            s("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: r.modelValue,
              "aria-label": f.ariaLabel,
              onChange: u[1] || (u[1] = (c) => L.value ? T.value = !1 : T.value = !0),
              onInput: u[2] || (u[2] = (c) => {
                ue(c);
              }),
              ref_key: "urlInput",
              ref: q
            }, null, 40, gt)
          ]),
          T.value ? (p(), g("div", ht, y(r.modelValue ? r.validationMessages?.invalid : r.validationMessages?.required), 1)) : F("", !0)
        ])) : r.type === "select" ? (p(), g("div", wt, [
          s("label", St, y(r.label), 1),
          s("div", xt, [
            r.multiple ? (p(), g("div", zt, [
              s("div", {
                ref_key: "treeWrapper",
                ref: R
              }, [
                $(o(rt), {
                  modelValue: H.value,
                  "onUpdate:modelValue": u[3] || (u[3] = (c) => H.value = c),
                  multiple: !0,
                  options: r.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: r.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: o(z)("wizard.configure.sublayers.select"),
                  noResultsText: o(z)("wizard.configure.sublayers.results"),
                  clearAllText: o(z)("wizard.configure.sublayers.clearAll"),
                  onSelect: u[4] || (u[4] = (c) => {
                    i.$nextTick(() => {
                      ee();
                    });
                  }),
                  onDeselect: u[5] || (u[5] = (c) => {
                    i.$nextTick(() => {
                      ee();
                    });
                  }),
                  onOpen: u[6] || (u[6] = (c) => {
                    i.$nextTick(() => {
                      G();
                    });
                  })
                }, {
                  [ie.value]: C(({ node: c }) => [
                    s("label", null, y(V(c.label)), 1)
                  ]),
                  [P.value]: C(({ node: c, labelClassName: ve }) => [
                    ye((p(), g("label", {
                      class: re(ve)
                    }, [
                      Se(y(c.label), 1)
                    ], 2)), [
                      [B, {
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
              r.validation && J.value ? (p(), g("div", Et, y(r.validationMessages?.required), 1)) : F("", !0)
            ])) : (p(), g("div", kt, [
              s("select", {
                class: re(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", r.size && "configure-select"]),
                size: r.size,
                value: r.modelValue,
                onInput: u[7] || (u[7] = (c) => X(r.size, c)),
                "aria-label": f.ariaLabel,
                ref_key: "selectInput",
                ref: M
              }, [
                (p(!0), g(Ke, null, Je(r.options, (c) => (p(), g("option", {
                  class: "p-6",
                  key: c.label,
                  value: c.value
                }, y(c.label), 9, At))), 128))
              ], 42, Ft),
              r.validation && r.formatError ? (p(), g("div", Lt, y(r.validationMessages?.invalid), 1)) : F("", !0),
              r.validation && r.failureError ? (p(), g("div", Vt, y(r.validationMessages?.failure), 1)) : F("", !0)
            ]))
          ])
        ])) : r.type === "checkbox" ? (p(), g("div", $t, [
          s("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": f.ariaLabel,
            onChange: u[8] || (u[8] = (c) => {
              x(c);
            })
          }, null, 40, Ot),
          s("label", It, y(r.label), 1)
        ])) : (p(), g("div", Tt, [
          s("label", Ct, y(r.label), 1),
          s("div", Mt, [
            s("input", {
              class: re(["border-solid border-gray-300 p-3 w-full", { "error-border": !L.value && !r.modelValue }]),
              type: "text",
              value: r.modelValue,
              "aria-label": f.ariaLabel,
              onChange: u[9] || (u[9] = (c) => L.value ? K.value = !1 : K.value = !0),
              onInput: u[10] || (u[10] = (c) => {
                oe(c);
              }),
              ref_key: "textInput",
              ref: A
            }, null, 42, Rt)
          ]),
          r.validation && !r.modelValue ? (p(), g("div", Nt, y(r.validationMessages?.required), 1)) : F("", !0)
        ]))
      ], 512);
    };
  }
}), U = /* @__PURE__ */ ce(Ut, [["__scopeId", "data-v-e4aa1c54"]]), _t = { class: "step relative flex flex-col px-12" }, Bt = { class: "stepper-header flex pb-24" }, qt = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Ht = { class: "flex flex-col overflow-hidden" }, Dt = { class: "pl-12 flex items-center text-md" }, Wt = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Pt = /* @__PURE__ */ ne({
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
  setup(r, { emit: v }) {
    const l = he("stepper"), w = b(), z = v, h = b(-1), f = (M) => {
      A() || (M.stopPropagation(), z("focusPanel"), z("focusFirstElement"));
    };
    we(() => {
      h.value = l.numSteps++, w.value?.addEventListener("focusout", f);
    }), de(() => {
      w.value?.removeEventListener("focusout", f);
    });
    const O = () => l.activeIndex > h.value, A = () => l.activeIndex === h.value;
    return (M, q) => {
      const L = Te("truncate");
      return p(), g("div", _t, [
        s("div", Bt, [
          O() ? (p(), g("div", qt, q[0] || (q[0] = [
            s("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              height: "100%",
              width: "100%",
              preserveAspectRatio: "xMidYMid meet",
              viewBox: "0 0 24 24",
              focusable: "false"
            }, [
              s("g", { id: "check_circle" }, [
                s("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
              ])
            ], -1)
          ]))) : (p(), g("div", {
            key: 0,
            class: re(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": A }])
          }, y(h.value + 1), 3)),
          s("div", Ht, [
            s("div", Dt, y(r.title), 1),
            ye((p(), g("div", Wt, [
              Se(y(r.summary), 1)
            ])), [
              [$e, !A()],
              [L]
            ])
          ])
        ]),
        $(Ze, {
          name: "step",
          mode: "out-in"
        }, {
          default: C(() => [
            ye(s("div", {
              class: "pl-36",
              ref_key: "stepItem",
              ref: w
            }, [
              Ce(M.$slots, "default", {}, void 0, !0)
            ], 512), [
              [$e, A()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), be = /* @__PURE__ */ ce(Pt, [["__scopeId", "data-v-53b5c8d8"]]), Gt = { class: "py-12 h-auto stepper" }, jt = /* @__PURE__ */ ne({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(r) {
    const v = r, l = W(() => v.activeStep), w = se([]), z = se({
      activeIndex: v.activeStep,
      numSteps: 0
    });
    return Qe("stepper", z), w.push(
      ge(l, () => {
        z.activeIndex = v.activeStep;
      })
    ), de(() => {
      w.forEach((h) => h());
    }), (h, f) => (p(), g("div", Gt, [
      Ce(h.$slots, "default")
    ]));
  }
}), Yt = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Kt = { class: "px-5 text-xs" }, Jt = { key: 5 }, Zt = ["for"], Qt = {
  key: 6,
  class: "text-base font-bold"
}, Xt = { class: "sr-only" }, el = { class: "sr-only" }, tl = /* @__PURE__ */ ne({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(r) {
    const v = ot(), { t: l } = xe(), w = he("iApi"), z = b(), h = Xe(), f = b([]), O = W(() => v.layerSource), A = W(() => v.currStep), M = b(null), q = b(), L = b(0), T = b(!1), K = b(), J = le("stepOneStart"), H = le("stepTwoStart"), ie = le("stepThreeStart"), P = b(!1), _ = b(!1), R = b(!1), N = b(!1), Z = b(!1), Q = b(!1), ae = b(!0), ue = b(""), X = b(""), x = b([]), oe = se([
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
    ]), ee = se([
      {
        value: S.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: S.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: S.CSV, label: l("wizard.fileType.csv") }
    ]), V = W({
      get() {
        return v.url;
      },
      set(e) {
        v.url = e;
      }
    }), G = W({
      get() {
        return v.fileData;
      },
      set(e) {
        v.fileData = e;
      }
    }), E = W({
      get() {
        return v.typeSelection;
      },
      set(e) {
        v.typeSelection = e;
      }
    }), a = W({
      get() {
        return v.layerInfo;
      },
      set(e) {
        v.layerInfo = e;
      }
    }), i = W(() => {
      const e = w.geo.proxy !== "";
      switch (E.value) {
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
          return !!(j() && !G.value);
        default:
          return !1;
      }
    });
    et(() => ((A.value === Y.FORMAT || A.value === Y.CONFIGURE) && (P.value = !0, v.goToStep(Y.FORMAT)), !1)), we(() => {
      f.value.push(
        w.event.on(Ie.LAYER_LAYERSTATECHANGE, (e) => {
          e.layer.userAdded && (ue.value = e.layer.name, Q.value = e.state !== fe.LOADING && e.state !== fe.NEW, ae.value = Q.value && e.state === fe.LOADED);
        })
      ), A.value === Y.CONFIGURE && (a.value?.configOptions.includes("colour") && Ve(), N.value = !a.value?.configOptions.includes("sublayers") && !!a.value?.config.name);
    }), de(() => {
      f.value.forEach((e) => w.event.off(e));
    });
    const u = () => {
      K.value.el.dispatchEvent(new MouseEvent("click"));
    }, B = () => {
      switch (A.value) {
        case 0:
          c(J);
          break;
        case 1:
          c(H);
          break;
        case 2:
          c(ie);
          break;
      }
    };
    function c(e) {
      e.value?.$el.querySelectorAll("input, select")[0]?.focus();
    }
    const ve = async (e) => {
      const t = new FileReader();
      t.onload = (d) => {
        G.value = t.result, V.value = e.name, pe(d);
      }, t.readAsArrayBuffer(e);
    }, pe = (e) => {
      e?.preventDefault(), E.value = O.value.guessFormatFromURL(V.value), v.goToStep(Y.FORMAT);
    }, ze = async (e) => {
      e?.preventDefault(), M.value = new AbortController(), T.value = !0, _.value = !1, N.value = !1, Z.value = !0, v.goToStep(Y.CONFIGURE), X.value = j() ? ee.find((d) => d.value === E.value)?.label : oe.find((d) => d.value === E.value)?.label;
      try {
        a.value = j() ? await O.value.fetchFileInfo(V.value, E.value, G.value) : await O.value.fetchServiceInfo(
          V.value,
          E.value,
          v.nested,
          M.value.signal
        ), j() && G.value && (a.value.config.url = "");
      } catch {
        T.value = !1, _.value = !0;
        return;
      }
      const t = E.value === S.FEATURE && !(a.value && a.value.fields);
      if (!a.value || t) {
        P.value = !0, a.value = {
          config: {
            id: "Placeholder",
            layerType: S.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, T.value = !1;
        return;
      }
      Ve(), N.value = !(a.value.configOptions.includes("sublayers") || !a.value.config.name), T.value = !1, Z.value = !1;
    }, Ee = async (e) => {
      e?.preventDefault();
      const t = Object.assign(a.value.config, e);
      x.value = [], X.value = "";
      const d = w.geo.layer.createLayer(t);
      w.geo.map.addLayer(d).catch(() => {
      }), d.userAdded = !0, w.event.emit(Ie.USER_LAYER_ADDED, d), R.value = !1, v.goToStep(Y.UPLOAD);
    }, ke = () => a.value?.fields.map((e) => ({
      value: e.name,
      label: e.alias || e.name
    })), Fe = (e) => a.value?.latLonFields[e].map((t) => ({
      value: t,
      label: t
    })), j = () => G.value || V.value.match(/\.(zip|csv|json|geojson)$/), Me = (e) => {
      ve(e), V.value = "";
    }, Re = (e, t) => {
      V.value = e.trim(), R.value = t;
    }, Ne = (e) => {
      E.value = e, P.value = !1;
    }, Ue = (e) => {
      a.value.config.name = e.trim();
      const t = a.value?.config.sublayers, d = t ? e && t.length > 0 : e.trim();
      N.value = !!d;
    }, Ae = (e) => {
      a.value.config.sublayers = e, N.value = !!(e.length > 0 && a.value?.config.name);
    }, _e = (e) => {
      if (v.nested = e, x.value = [], L.value += 1, E.value === S.MAPIMAGE) {
        a.value.layers = O.value.createLayerHierarchy(
          a.value.layersRaw,
          v.nested
        );
        const t = new Set(
          (a.value?.config?.sublayers ?? []).map((d) => d.index)
        );
        v.nested ? Be(a, t) : He(a, t);
      } else if (E.value === S.WMS) {
        a.value.layers = O.value.mapWmsLayerList(
          a.value.layersRaw,
          v.nested
        );
        const t = new Set((a.value?.config?.sublayers ?? []).map((d) => d.id));
        v.nested ? qe(a, t) : De(a, t);
      }
      Ae(Le(x.value));
    }, Be = (e, t) => {
      const d = /* @__PURE__ */ new Map();
      for (const n of e.value.layersRaw)
        if (n.parentLayerId !== -1) {
          const I = d.get(n.parentLayerId) || [];
          I.push(n.id), d.set(n.parentLayerId, I);
        }
      const m = (n) => {
        const I = d.get(n);
        return I ? I.every((te) => d.has(te) ? m(te) : t.has(te)) : !1;
      }, k = (n) => {
        if (m(n))
          x.value.push(n);
        else {
          const I = d.get(n);
          if (I)
            for (const te of I)
              t.has(te) && x.value.push(te);
        }
      };
      for (const n of d.keys()) k(n);
      for (const n of e.value.layersRaw)
        n.parentLayerId === -1 && !d.has(n.id) && t.has(n.id) && x.value.push(n.id);
      x.value = Array.from(new Set(x.value));
    }, qe = (e, t) => {
      const d = (n) => !n.layers || n.layers.length === 0 ? t.has(n.name) : n.layers.every((I) => d(I)), m = (n) => {
        d(n) ? x.value.push(n.name) : n.layers && n.layers.forEach(m);
      }, k = e.value.layersRaw[0];
      k && k.layers && k.layers.forEach((n) => m(n)), x.value = Array.from(new Set(x.value));
    }, He = (e, t) => {
      const d = (m) => {
        const k = e.value.layersRaw.filter((n) => n.parentLayerId === m);
        if (k.length > 0)
          for (const n of k)
            t.has(n.id) ? x.value.push(n.id) : d(n.id);
        else x.value.push(m);
      };
      for (const m of e.value.layersRaw)
        t.has(m.id) && d(m.id);
      x.value = Array.from(new Set(x.value));
    }, De = (e, t) => {
      const d = (k) => {
        k.layers && k.layers.length > 0 ? k.layers.forEach(d) : x.value.push(k.name);
      }, m = e.value.layersRaw[0];
      for (const k of t) {
        const n = m.layers.find((I) => I.name === k);
        n && n.layers && n.layers.length > 0 ? d(n) : n && x.value.push(n.name);
      }
      x.value = Array.from(new Set(x.value));
    }, Le = (e) => e.map((t) => {
      switch (E.value) {
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
      q.value = a.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    }, We = (e) => {
      a.value.config.colour = e.colors.hex.substring(0, 7), lt(() => {
        z.value.querySelector(".vacp-copy-button").style.backgroundColor = a.value?.config.colour;
      });
    }, Pe = () => {
      R.value = !1, v.goToStep(0), c(J);
    }, Ge = () => {
      T.value = !1, P.value = !1, _.value = !1, R.value = !!V.value, Z.value = !1, v.goToStep(0), X.value = "";
    }, je = () => {
      x.value = [], N.value = !1, M.value?.abort(), v.goToStep(1);
    };
    return (e, t) => {
      const d = tt("panel-screen");
      return p(), D(d, {
        panel: r.panel,
        ref_key: "thePanel",
        ref: K
      }, {
        header: C(() => [
          Se(y(o(l)("wizard.title")), 1)
        ]),
        content: C(() => [
          $(jt, { activeStep: A.value }, {
            default: C(() => [
              $(be, {
                title: o(l)("wizard.upload.title"),
                summary: V.value,
                onFocusPanel: u,
                onFocusFirstElement: B
              }, {
                default: C(() => [
                  s("form", {
                    name: "upload",
                    onSubmit: pe,
                    onClick: t[1] || (t[1] = (m) => Q.value = !1)
                  }, [
                    $(U, {
                      type: "file",
                      name: "file",
                      label: o(l)("wizard.upload.file.label"),
                      help: o(l)("wizard.upload.file.help"),
                      onUpload: Me,
                      "aria-label": o(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    t[11] || (t[11] = s("span", { class: "block text-center mb-10" }, "or", -1)),
                    $(U, {
                      type: "url",
                      name: "url",
                      modelValue: V.value,
                      "onUpdate:modelValue": t[0] || (t[0] = (m) => V.value = m),
                      label: o(l)("wizard.upload.url.label"),
                      onLink: Re,
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.upload.url.error.required"),
                        invalid: o(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": o(l)("wizard.upload.url.label"),
                      ref_key: "stepOneStart",
                      ref: J
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    $(me, {
                      onSubmit: pe,
                      onCancel: Pe,
                      disabled: !R.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              $(be, {
                title: o(l)("wizard.format.title"),
                summary: X.value,
                onFocusFirstElement: B
              }, {
                default: C(() => [
                  s("form", {
                    name: "format",
                    onSubmit: ze
                  }, [
                    i.value ? (p(), g("div", Yt, [
                      t[12] || (t[12] = s("svg", {
                        class: "inline-block fill-current w-16 h-16",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24"
                      }, [
                        s("path", {
                          d: "M0 0h24v24H0z",
                          fill: "none"
                        }),
                        s("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                      ], -1)),
                      s("span", Kt, y(o(l)("wizard.format.info.cors")), 1)
                    ])) : F("", !0),
                    $(U, {
                      type: "select",
                      name: "type",
                      modelValue: E.value,
                      "onUpdate:modelValue": t[2] || (t[2] = (m) => E.value = m),
                      onSelect: Ne,
                      size: j() ? ee.length : oe.length,
                      label: j() ? o(l)("wizard.format.type.file") : o(l)("wizard.format.type.service"),
                      options: j() ? ee : oe,
                      formatError: P.value,
                      failureError: _.value,
                      validation: Z.value,
                      "validation-messages": {
                        required: o(l)("wizard.format.type.error.required"),
                        invalid: o(l)("wizard.format.type.error.invalid"),
                        failure: `${o(l)("wizard.format.type.error.failure")}.${i.value ? " " + o(l)("wizard.format.warn.cors") + "." : ""}${" " + o(l)("wizard.format.warn.vpn") + "."}`
                      },
                      onKeydown: t[3] || (t[3] = Oe(() => {
                      }, ["stop"])),
                      "aria-label": o(l)("wizard.format.type.service"),
                      ref_key: "stepTwoStart",
                      ref: H
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    $(me, {
                      onSubmit: ze,
                      onCancel: Ge,
                      animation: !0,
                      disabled: T.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              $(be, {
                title: o(l)("wizard.configure.title"),
                onFocusFirstElement: B
              }, {
                default: C(() => [
                  s("form", {
                    name: "configure",
                    onSubmit: Ee,
                    ref_key: "formElement",
                    ref: z
                  }, [
                    a.value?.configOptions.includes("name") ? (p(), D(U, {
                      key: 0,
                      type: "text",
                      name: "name",
                      modelValue: a.value.config.name,
                      "onUpdate:modelValue": t[4] || (t[4] = (m) => a.value.config.name = m),
                      onLink: Ue,
                      label: o(l)("wizard.configure.name.label"),
                      "aria-label": o(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: o(l)("wizard.configure.name.error.required")
                      },
                      ref_key: "stepThreeStart",
                      ref: ie,
                      onFocusElement: B,
                      activeStep: A.value,
                      step: 2
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages", "activeStep"])) : F("", !0),
                    a.value?.configOptions.includes("nameField") ? (p(), D(U, {
                      key: 1,
                      type: "select",
                      name: "nameField",
                      modelValue: a.value.config.nameField,
                      "onUpdate:modelValue": t[5] || (t[5] = (m) => a.value.config.nameField = m),
                      label: o(l)("wizard.configure.nameField.label"),
                      "aria-label": o(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: ke()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : F("", !0),
                    a.value?.configOptions.includes("maptipField") ? (p(), D(U, {
                      key: 2,
                      type: "select",
                      name: "maptipField",
                      modelValue: a.value.config.maptipField,
                      "onUpdate:modelValue": t[6] || (t[6] = (m) => a.value.config.maptipField = m),
                      label: o(l)("wizard.configure.maptipField.label"),
                      "aria-label": o(l)("wizard.configure.maptipField.label"),
                      options: ke()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : F("", !0),
                    a.value?.configOptions.includes("latField") ? (p(), D(U, {
                      key: 3,
                      type: "select",
                      name: "latField",
                      modelValue: a.value.config.latField,
                      "onUpdate:modelValue": t[7] || (t[7] = (m) => a.value.config.latField = m),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.latField.label"),
                      "aria-label": o(l)("wizard.configure.latField.label"),
                      options: Fe("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : F("", !0),
                    a.value?.configOptions.includes("longField") ? (p(), D(U, {
                      key: 4,
                      type: "select",
                      name: "longField",
                      modelValue: a.value.config.longField,
                      "onUpdate:modelValue": t[8] || (t[8] = (m) => a.value.config.longField = m),
                      defaultOption: !0,
                      label: o(l)("wizard.configure.longField.label"),
                      "aria-label": o(l)("wizard.configure.longField.label"),
                      options: Fe("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : F("", !0),
                    a.value?.configOptions.includes("sublayers") ? (p(), g("div", Jt, [
                      $(U, {
                        type: "checkbox",
                        name: "nested",
                        onNested: _e,
                        label: o(l)("wizard.configure.sublayers.nested"),
                        "aria-label": o(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (p(), D(U, {
                        type: "select",
                        key: L.value,
                        name: "sublayers",
                        modelValue: a.value.config.sublayers,
                        "onUpdate:modelValue": t[9] || (t[9] = (m) => a.value.config.sublayers = m),
                        onSelect: Ae,
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
                        onKeydown: t[10] || (t[10] = Oe(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : F("", !0),
                    s("label", {
                      class: "sr-only",
                      for: `${o(h)}-color-hex`
                    }, y(o(l)("wizard.configure.colour.hex")), 9, Zt),
                    a.value?.configOptions.includes("colour") ? (p(), g("label", Qt, y(o(l)("wizard.configure.colour.label")), 1)) : F("", !0),
                    a.value?.configOptions.includes("colour") ? (p(), D(o(at), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: o(h) + "-hue-slider",
                      color: q.value,
                      onColorChange: We
                    }, {
                      "hue-range-input-label": C(() => [
                        s("span", Xt, y(o(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": C(() => [
                        s("span", el, y(o(l)("wizard.configure.colour.copy")), 1),
                        t[13] || (t[13] = s("svg", {
                          "aria-hidden": "true",
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "15",
                          height: "15",
                          viewBox: "0 0 15 15"
                        }, [
                          s("path", {
                            d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
                            fill: "currentColor"
                          }),
                          s("path", {
                            d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
                            fill: "currentColor"
                          })
                        ], -1))
                      ]),
                      _: 1
                    }, 8, ["id", "color"])) : F("", !0),
                    $(me, {
                      onSubmit: Ee,
                      onCancel: je,
                      disabled: !N.value
                    }, null, 8, ["disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          Q.value ? (p(), g("div", {
            key: 0,
            class: re(["p-3 border-solid border-2", ae.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, y(ue.value) + " " + y(o(l)(`wizard.upload.${ae.value ? "success" : "fail"}`)), 3)) : F("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), ql = /* @__PURE__ */ ce(tl, [["__scopeId", "data-v-2a071b63"]]);
export {
  ql as default
};
