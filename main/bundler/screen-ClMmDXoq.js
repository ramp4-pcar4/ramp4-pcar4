import { defineComponent as ie, createElementBlock as y, openBlock as v, createElementVNode as s, toDisplayString as b, unref as r, normalizeClass as ae, inject as ge, ref as m, useTemplateRef as oe, reactive as ne, watch as Ie, onMounted as he, onBeforeUnmount as ce, resolveDirective as Te, createCommentVNode as E, createVNode as $, withCtx as T, withDirectives as ye, createTextVNode as we, Fragment as Ke, renderList as Je, vShow as Le, Transition as Ze, renderSlot as Ce, computed as B, provide as Qe, useId as Xe, onErrorCaptured as et, resolveComponent as tt, createBlock as P, withModifiers as $e, nextTick as lt } from "vue";
import { ColorPicker as at } from "vue-accessible-color-picker";
import { _ as ve, M as ot, L as w, a5 as Y, G as Oe, a0 as fe } from "./main-6dWPqJr6.js";
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
const st = { class: "flex justify-end mb-20" }, nt = ["disabled", "animation"], it = { class: "button-text" }, ut = /* @__PURE__ */ ie({
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
  setup(o) {
    const { t: p } = Se();
    return (l, h) => (v(), y("div", st, [
      s("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: h[0] || (h[0] = (z) => l.$emit("cancel"))
      }, b(r(p)("wizard.step.cancel")), 1),
      s("button", {
        class: ae(["button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400", { "button--loading": o.animation && o.disabled }]),
        type: "button",
        disabled: o.disabled,
        animation: o.animation,
        onClick: h[1] || (h[1] = (z) => l.$emit("submit"))
      }, [
        s("span", it, b(r(p)("wizard.step.continue")), 1)
      ], 10, nt)
    ]));
  }
}), me = /* @__PURE__ */ ve(ut, [["__scopeId", "data-v-4802f647"]]), dt = { key: 0 }, ct = { class: "text-base font-bold" }, vt = {
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
}, kt = { key: 1 }, Ft = ["size", "value", "aria-label"], At = ["value"], Vt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Lt = {
  key: 1,
  class: "text-red-900 text-xs"
}, $t = { key: 3 }, Ot = ["aria-label"], It = { class: "text-base font-bold" }, Tt = { key: 4 }, Ct = { class: "text-base font-bold" }, Mt = { class: "relative mb-0.5" }, Rt = ["value", "aria-label"], Nt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Ut = /* @__PURE__ */ ie({
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
  setup(o, { expose: p, emit: l }) {
    const h = ge("iApi"), { t: z } = Se(), x = l, g = o, C = m(), A = oe("textInput"), M = oe("selectInput"), H = oe("urlInput");
    p({ selectInput: M, textInput: A, urlInput: H });
    const V = m(!1), O = m(!1), K = m(!1), J = m(!1), D = m([...g.selectedValues]), ue = m("value-label"), R = m("option-label"), N = m(void 0), U = m(null), _ = ne([]);
    if (g.defaultOption && g.modelValue === "" && g.options.length) {
      let i = g.options[0].value;
      if (g.name === "latField") {
        const u = new RegExp(/^(y|lat.*)$/i);
        i = g.options.find((c) => u.test(c.label))?.value || i;
      } else if (g.name === "longField") {
        const u = new RegExp(/^(x|long.*)$/i);
        i = g.options.find((c) => u.test(c.label))?.value || i;
      }
      x("update:modelValue", i);
    }
    const W = (i) => {
      i.trim() !== "" ? V.value = !0 : (V.value = !1, h.updateAlert(z("wizard.configure.name.error.required")));
    }, Z = (i) => {
      let u;
      try {
        u = new URL(i);
      } catch {
        return V.value = !1, !1;
      }
      V.value = u.protocol === "http:" || u.protocol === "https:";
    }, re = (i) => {
      x("upload", i.target.files[0]), i.target.value = "";
    }, de = (i) => {
      Z(i.target.value), x("link", i.target.value, V), O.value = !1;
    }, Q = (i, u) => {
      x(i ? "select" : "update:modelValue", u.target.value);
    }, S = (i) => {
      x("nested", i.target.checked);
    }, se = (i) => {
      W(i.target.value), x("link", i.target.value, V), K.value = !1;
    }, X = () => {
      x("select", g.sublayerOptions(D.value)), J.value = D.value && D.value.length === 0;
    }, L = (i) => i.length > 5 ? `${i.slice(0, 5)}...` : i;
    function G() {
      N.value = new ResizeObserver(function() {
        k();
      }), N.value.observe(h.$vApp.$el.querySelector(".vue-treeselect__control")), N.value.observe(h.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const k = () => {
      const u = h.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight ?? 0, c = h.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight ?? 0;
      C.value.style.height = `${u + c + 30}px`;
    };
    _.push(
      Ie(U, (i) => {
        i && a();
      })
    );
    const a = () => {
      if (U.value) {
        const i = U.value.querySelector('input[type="text"]');
        i && i.setAttribute("aria-label", z("wizard.configure.sublayers.select"));
      }
    };
    return he(() => {
      g.step === 2 && g.step === g.activeStep && x("focusElement");
    }), ce(() => {
      N.value.disconnect(), _.forEach((i) => i());
    }), (i, u) => {
      const ee = Te("truncate");
      return v(), y("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: C
      }, [
        o.type === "file" ? (v(), y("div", dt, [
          s("label", ct, b(o.label), 1),
          s("div", vt, [
            s("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": g.ariaLabel,
              onInput: u[0] || (u[0] = (c) => {
                re(c);
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
          s("div", ft, b(o.help), 1)
        ])) : o.type === "url" ? (v(), y("div", mt, [
          s("label", bt, b(o.label), 1),
          s("div", yt, [
            s("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: o.modelValue,
              "aria-label": g.ariaLabel,
              onChange: u[1] || (u[1] = (c) => V.value ? O.value = !1 : O.value = !0),
              onInput: u[2] || (u[2] = (c) => {
                de(c);
              }),
              ref_key: "urlInput",
              ref: H
            }, null, 40, gt)
          ]),
          O.value ? (v(), y("div", ht, b(o.modelValue ? o.validationMessages?.invalid : o.validationMessages?.required), 1)) : E("", !0)
        ])) : o.type === "select" ? (v(), y("div", wt, [
          s("label", St, b(o.label), 1),
          s("div", xt, [
            o.multiple ? (v(), y("div", zt, [
              s("div", {
                ref_key: "treeWrapper",
                ref: U
              }, [
                $(r(rt), {
                  modelValue: D.value,
                  "onUpdate:modelValue": u[3] || (u[3] = (c) => D.value = c),
                  multiple: !0,
                  options: o.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: o.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: r(z)("wizard.configure.sublayers.select"),
                  noResultsText: r(z)("wizard.configure.sublayers.results"),
                  clearAllText: r(z)("wizard.configure.sublayers.clearAll"),
                  onSelect: u[4] || (u[4] = (c) => {
                    i.$nextTick(() => {
                      X();
                    });
                  }),
                  onDeselect: u[5] || (u[5] = (c) => {
                    i.$nextTick(() => {
                      X();
                    });
                  }),
                  onOpen: u[6] || (u[6] = (c) => {
                    i.$nextTick(() => {
                      G();
                    });
                  })
                }, {
                  [ue.value]: T(({ node: c }) => [
                    s("label", null, b(L(c.label)), 1)
                  ]),
                  [R.value]: T(({ node: c, labelClassName: te }) => [
                    ye((v(), y("label", {
                      class: ae(te)
                    }, [
                      we(b(c.label), 1)
                    ], 2)), [
                      [ee, {
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
              o.validation && J.value ? (v(), y("div", Et, b(o.validationMessages?.required), 1)) : E("", !0)
            ])) : (v(), y("div", kt, [
              s("select", {
                class: ae(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", o.size && "configure-select"]),
                size: o.size,
                value: o.modelValue,
                onInput: u[7] || (u[7] = (c) => Q(o.size, c)),
                "aria-label": g.ariaLabel,
                ref_key: "selectInput",
                ref: M
              }, [
                (v(!0), y(Ke, null, Je(o.options, (c) => (v(), y("option", {
                  class: "p-6",
                  key: c.label,
                  value: c.value
                }, b(c.label), 9, At))), 128))
              ], 42, Ft),
              o.validation && o.formatError ? (v(), y("div", Vt, b(o.validationMessages?.invalid), 1)) : E("", !0),
              o.validation && o.failureError ? (v(), y("div", Lt, b(o.validationMessages?.failure), 1)) : E("", !0)
            ]))
          ])
        ])) : o.type === "checkbox" ? (v(), y("div", $t, [
          s("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": g.ariaLabel,
            onChange: u[8] || (u[8] = (c) => {
              S(c);
            })
          }, null, 40, Ot),
          s("label", It, b(o.label), 1)
        ])) : (v(), y("div", Tt, [
          s("label", Ct, b(o.label), 1),
          s("div", Mt, [
            s("input", {
              class: ae(["border-solid border-gray-300 p-3 w-full", { "error-border": !V.value && !o.modelValue }]),
              type: "text",
              value: o.modelValue,
              "aria-label": g.ariaLabel,
              onChange: u[9] || (u[9] = (c) => V.value ? K.value = !1 : K.value = !0),
              onInput: u[10] || (u[10] = (c) => {
                se(c);
              }),
              ref_key: "textInput",
              ref: A
            }, null, 42, Rt)
          ]),
          o.validation && !o.modelValue ? (v(), y("div", Nt, b(o.validationMessages?.required), 1)) : E("", !0)
        ]))
      ], 512);
    };
  }
}), q = /* @__PURE__ */ ve(Ut, [["__scopeId", "data-v-e4aa1c54"]]), _t = { class: "step relative flex flex-col px-12" }, qt = { class: "stepper-header flex pb-24" }, Bt = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Ht = { class: "flex flex-col overflow-hidden" }, Dt = { class: "pl-12 flex items-center text-md" }, Wt = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Pt = /* @__PURE__ */ ie({
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
  setup(o, { emit: p }) {
    const l = ge("stepper"), h = m(), z = p, x = m(-1), g = (M) => {
      A() || (M.stopPropagation(), z("focusPanel"), z("focusFirstElement"));
    };
    he(() => {
      x.value = l.numSteps++, h.value?.addEventListener("focusout", g);
    }), ce(() => {
      h.value?.removeEventListener("focusout", g);
    });
    const C = () => l.activeIndex > x.value, A = () => l.activeIndex === x.value;
    return (M, H) => {
      const V = Te("truncate");
      return v(), y("div", _t, [
        s("div", qt, [
          C() ? (v(), y("div", Bt, H[0] || (H[0] = [
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
          ]))) : (v(), y("div", {
            key: 0,
            class: ae(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": A }])
          }, b(x.value + 1), 3)),
          s("div", Ht, [
            s("div", Dt, b(o.title), 1),
            ye((v(), y("div", Wt, [
              we(b(o.summary), 1)
            ])), [
              [Le, !A()],
              [V]
            ])
          ])
        ]),
        $(Ze, {
          name: "step",
          mode: "out-in"
        }, {
          default: T(() => [
            ye(s("div", {
              class: "pl-36",
              ref_key: "stepItem",
              ref: h
            }, [
              Ce(M.$slots, "default", {}, void 0, !0)
            ], 512), [
              [Le, A()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), be = /* @__PURE__ */ ve(Pt, [["__scopeId", "data-v-53b5c8d8"]]), Gt = { class: "py-12 h-auto stepper" }, jt = /* @__PURE__ */ ie({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(o) {
    const p = o, l = B(() => p.activeStep), h = ne([]), z = ne({
      activeIndex: p.activeStep,
      numSteps: 0
    });
    return Qe("stepper", z), h.push(
      Ie(l, () => {
        z.activeIndex = p.activeStep;
      })
    ), ce(() => {
      h.forEach((x) => x());
    }), (x, g) => (v(), y("div", Gt, [
      Ce(x.$slots, "default")
    ]));
  }
}), Yt = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, Kt = { class: "px-5 text-xs" }, Jt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Zt = { key: 6 }, Qt = ["for"], Xt = {
  key: 7,
  class: "text-base font-bold"
}, el = { class: "sr-only" }, tl = { class: "sr-only" }, ll = /* @__PURE__ */ ie({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(o) {
    const p = ot(), { t: l } = Se(), h = ge("iApi"), z = m(), x = Xe(), g = m([]), C = B(() => p.layerSource), A = B(() => p.currStep), M = m(null), H = m(), V = m(0), O = m(!1), K = m(), J = oe("stepOneStart"), D = oe("stepTwoStart"), ue = oe("stepThreeStart"), R = m(!1), N = m(!1), U = m(!1), _ = m(!1), W = m(!1), Z = m(!1), re = m(!0), de = m(""), Q = m(""), S = m([]), se = ne([
      {
        value: w.FEATURE,
        label: l("wizard.layerType.esriFeature")
      },
      {
        value: w.MAPIMAGE,
        label: l("wizard.layerType.esriMapImage")
      },
      {
        value: w.TILE,
        label: l("wizard.layerType.esriTile")
      },
      {
        value: w.IMAGERY,
        label: l("wizard.layerType.esriImagery")
      },
      {
        value: w.WMS,
        label: l("wizard.layerType.ogcWms")
      },
      {
        value: w.WFS,
        label: l("wizard.layerType.ogcWfs")
      }
    ]), X = ne([
      {
        value: w.GEOJSON,
        label: l("wizard.fileType.geojson")
      },
      {
        value: w.SHAPEFILE,
        label: l("wizard.fileType.shapefile")
      },
      { value: w.CSV, label: l("wizard.fileType.csv") }
    ]), L = B({
      get() {
        return p.url;
      },
      set(e) {
        p.url = e;
      }
    }), G = B({
      get() {
        return p.fileData;
      },
      set(e) {
        p.fileData = e;
      }
    }), k = B({
      get() {
        return p.typeSelection;
      },
      set(e) {
        p.typeSelection = e;
      }
    }), a = B({
      get() {
        return p.layerInfo;
      },
      set(e) {
        p.layerInfo = e;
      }
    }), i = B(() => {
      const e = h.geo.proxy !== "";
      switch (k.value) {
        // ESRI ArcGIS Server
        // required only if no proxy is set
        case w.FEATURE:
        case w.MAPIMAGE:
        case w.TILE:
        case w.IMAGERY:
          return !e;
        // WFS Server
        // always required
        case w.WFS:
          return !0;
        // WMS Server
        // required only if proxy is set
        case w.WMS:
          return !e;
        // Files
        // always required for files from hosted services
        case w.GEOJSON:
        case w.SHAPEFILE:
        case w.CSV:
          return !!(j() && !G.value);
        default:
          return !1;
      }
    }), u = B(() => {
      const e = [l("wizard.format.type.error.failure")];
      return i.value && e.push(l("wizard.format.warn.cors")), e.push(l("wizard.format.warn.vpn")), e.join(". ") + ".";
    });
    et(() => ((A.value === Y.FORMAT || A.value === Y.CONFIGURE) && (R.value = !0, p.goToStep(Y.FORMAT)), !1)), he(() => {
      g.value.push(
        h.event.on(Oe.LAYER_LAYERSTATECHANGE, (e) => {
          e.layer.userAdded && (de.value = e.layer.name, Z.value = e.state !== fe.LOADING && e.state !== fe.NEW, re.value = Z.value && e.state === fe.LOADED);
        })
      ), A.value === Y.CONFIGURE && (a.value?.configOptions.includes("colour") && Ve(), _.value = !a.value?.configOptions.includes("sublayers") && !!a.value?.config.name);
    }), ce(() => {
      g.value.forEach((e) => h.event.off(e));
    });
    const ee = () => {
      K.value.el.dispatchEvent(new MouseEvent("click"));
    }, c = () => {
      switch (A.value) {
        case 0:
          te(J);
          break;
        case 1:
          te(D);
          break;
        case 2:
          te(ue);
          break;
      }
    };
    function te(e) {
      e.value?.$el.querySelectorAll("input, select")[0]?.focus();
    }
    const Me = async (e) => {
      const t = new FileReader();
      t.onload = (d) => {
        G.value = t.result, L.value = e.name, pe(d);
      }, t.readAsArrayBuffer(e);
    }, pe = (e) => {
      e?.preventDefault(), k.value = C.value.guessFormatFromURL(L.value), p.goToStep(Y.FORMAT);
    }, xe = async (e) => {
      e?.preventDefault(), M.value = new AbortController(), O.value = !0, R.value = !1, N.value = !1, _.value = !1, W.value = !0, p.goToStep(Y.CONFIGURE), Q.value = j() ? X.find((d) => d.value === k.value)?.label : se.find((d) => d.value === k.value)?.label;
      try {
        a.value = j() ? await C.value.fetchFileInfo(L.value, k.value, G.value) : await C.value.fetchServiceInfo(
          L.value,
          k.value,
          p.nested,
          M.value.signal
        ), j() && G.value && (a.value.config.url = "");
      } catch (d) {
        d.name === "AbortError" ? W.value = !1 : N.value = !0, O.value = !1;
        return;
      }
      const t = k.value === w.FEATURE && !(a.value && a.value.fields);
      if (!a.value || t) {
        R.value = !0, a.value = {
          config: {
            id: "Placeholder",
            layerType: w.UNKNOWN,
            url: ""
          },
          configOptions: []
        }, O.value = !1;
        return;
      }
      Ve(), _.value = !(a.value.configOptions.includes("sublayers") || !a.value.config.name), O.value = !1, W.value = !1;
    }, ze = async (e) => {
      e?.preventDefault();
      const t = Object.assign(a.value.config, e);
      S.value = [], Q.value = "";
      const d = h.geo.layer.createLayer(t);
      h.geo.map.addLayer(d).catch(() => {
      }), d.userAdded = !0, h.event.emit(Oe.USER_LAYER_ADDED, d), U.value = !1, p.goToStep(Y.UPLOAD);
    }, Ee = () => a.value?.fields.map((e) => ({
      value: e.name,
      label: e.alias || e.name
    })), ke = (e) => a.value?.latLonFields[e].map((t) => ({
      value: t,
      label: t
    })), j = () => G.value || L.value.match(/\.(zip|csv|json|geojson)$/), Re = (e) => {
      Me(e), L.value = "";
    }, Ne = (e, t) => {
      L.value = e.trim(), U.value = t;
    }, Ue = (e) => {
      k.value = e, R.value = !1;
    }, _e = (e) => {
      a.value.config.name = e.trim();
      const t = a.value?.config.sublayers, d = t ? e && t.length > 0 : e.trim();
      _.value = !!d;
    }, Fe = (e) => {
      a.value.config.sublayers = e, _.value = !!(e.length > 0 && a.value?.config.name);
    }, qe = (e) => {
      if (p.nested = e, S.value = [], V.value += 1, k.value === w.MAPIMAGE) {
        a.value.layers = C.value.createLayerHierarchy(
          a.value.layersRaw,
          p.nested
        );
        const t = new Set(
          (a.value?.config?.sublayers ?? []).map((d) => d.index)
        );
        p.nested ? Be(a, t) : De(a, t);
      } else if (k.value === w.WMS) {
        a.value.layers = C.value.mapWmsLayerList(
          a.value.layersRaw,
          p.nested
        );
        const t = new Set((a.value?.config?.sublayers ?? []).map((d) => d.id));
        p.nested ? He(a, t) : We(a, t);
      }
      Fe(Ae(S.value));
    }, Be = (e, t) => {
      const d = /* @__PURE__ */ new Map();
      for (const n of e.value.layersRaw)
        if (n.parentLayerId !== -1) {
          const I = d.get(n.parentLayerId) || [];
          I.push(n.id), d.set(n.parentLayerId, I);
        }
      const f = (n) => {
        const I = d.get(n);
        return I ? I.every((le) => d.has(le) ? f(le) : t.has(le)) : !1;
      }, F = (n) => {
        if (f(n))
          S.value.push(n);
        else {
          const I = d.get(n);
          if (I)
            for (const le of I)
              t.has(le) && S.value.push(le);
        }
      };
      for (const n of d.keys()) F(n);
      for (const n of e.value.layersRaw)
        n.parentLayerId === -1 && !d.has(n.id) && t.has(n.id) && S.value.push(n.id);
      S.value = Array.from(new Set(S.value));
    }, He = (e, t) => {
      const d = (n) => !n.layers || n.layers.length === 0 ? t.has(n.name) : n.layers.every((I) => d(I)), f = (n) => {
        d(n) ? S.value.push(n.name) : n.layers && n.layers.forEach(f);
      }, F = e.value.layersRaw[0];
      F && F.layers && F.layers.forEach((n) => f(n)), S.value = Array.from(new Set(S.value));
    }, De = (e, t) => {
      const d = (f) => {
        const F = e.value.layersRaw.filter((n) => n.parentLayerId === f);
        if (F.length > 0)
          for (const n of F)
            t.has(n.id) ? S.value.push(n.id) : d(n.id);
        else S.value.push(f);
      };
      for (const f of e.value.layersRaw)
        t.has(f.id) && d(f.id);
      S.value = Array.from(new Set(S.value));
    }, We = (e, t) => {
      const d = (F) => {
        F.layers && F.layers.length > 0 ? F.layers.forEach(d) : S.value.push(F.name);
      }, f = e.value.layersRaw[0];
      for (const F of t) {
        const n = f.layers.find((I) => I.name === F);
        n && n.layers && n.layers.length > 0 ? d(n) : n && S.value.push(n.name);
      }
      S.value = Array.from(new Set(S.value));
    }, Ae = (e) => e.map((t) => {
      switch (k.value) {
        case w.MAPIMAGE:
          return {
            index: t,
            state: { opacity: 1, visibility: !0 }
          };
        case w.WMS: {
          const d = t.lastIndexOf("#");
          return { id: t.substring(0, d) };
        }
        default:
          return {
            id: t
          };
      }
    }), Ve = () => {
      H.value = a.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    }, Pe = (e) => {
      a.value.config.colour = e.colors.hex.substring(0, 7), lt(() => {
        z.value.querySelector(".vacp-copy-button").style.backgroundColor = a.value?.config.colour;
      });
    }, Ge = () => {
      U.value = !1, p.goToStep(0), te(J);
    }, je = () => {
      O.value = !1, R.value = !1, N.value = !1, U.value = !!L.value, W.value = !1, p.goToStep(0), Q.value = "";
    }, Ye = () => {
      S.value = [], _.value = !1, M.value?.abort(), p.goToStep(1);
    };
    return (e, t) => {
      const d = tt("panel-screen");
      return v(), P(d, {
        panel: o.panel,
        ref_key: "thePanel",
        ref: K
      }, {
        header: T(() => [
          we(b(r(l)("wizard.title")), 1)
        ]),
        content: T(() => [
          $(jt, { activeStep: A.value }, {
            default: T(() => [
              $(be, {
                title: r(l)("wizard.upload.title"),
                summary: L.value,
                onFocusPanel: ee,
                onFocusFirstElement: c
              }, {
                default: T(() => [
                  s("form", {
                    name: "upload",
                    onSubmit: pe,
                    onClick: t[1] || (t[1] = (f) => Z.value = !1)
                  }, [
                    $(q, {
                      type: "file",
                      name: "file",
                      label: r(l)("wizard.upload.file.label"),
                      help: r(l)("wizard.upload.file.help"),
                      onUpload: Re,
                      "aria-label": r(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    t[11] || (t[11] = s("span", { class: "block text-center mb-10" }, "or", -1)),
                    $(q, {
                      type: "url",
                      name: "url",
                      modelValue: L.value,
                      "onUpdate:modelValue": t[0] || (t[0] = (f) => L.value = f),
                      label: r(l)("wizard.upload.url.label"),
                      onLink: Ne,
                      validation: !0,
                      "validation-messages": {
                        required: r(l)("wizard.upload.url.error.required"),
                        invalid: r(l)("wizard.upload.url.error.url")
                      },
                      "aria-label": r(l)("wizard.upload.url.label"),
                      ref_key: "stepOneStart",
                      ref: J
                    }, null, 8, ["modelValue", "label", "validation-messages", "aria-label"]),
                    $(me, {
                      onSubmit: pe,
                      onCancel: Ge,
                      disabled: !U.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              $(be, {
                title: r(l)("wizard.format.title"),
                summary: Q.value,
                onFocusFirstElement: c
              }, {
                default: T(() => [
                  s("form", {
                    name: "format",
                    onSubmit: xe
                  }, [
                    i.value ? (v(), y("div", Yt, [
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
                      s("span", Kt, b(r(l)("wizard.format.info.cors")), 1)
                    ])) : E("", !0),
                    $(q, {
                      type: "select",
                      name: "type",
                      modelValue: k.value,
                      "onUpdate:modelValue": t[2] || (t[2] = (f) => k.value = f),
                      onSelect: Ue,
                      size: j() ? X.length : se.length,
                      label: j() ? r(l)("wizard.format.type.file") : r(l)("wizard.format.type.service"),
                      options: j() ? X : se,
                      formatError: R.value,
                      failureError: N.value,
                      validation: W.value,
                      "validation-messages": {
                        required: r(l)("wizard.format.type.error.required"),
                        invalid: r(l)("wizard.format.type.error.invalid"),
                        failure: u.value
                      },
                      onKeydown: t[3] || (t[3] = $e(() => {
                      }, ["stop"])),
                      "aria-label": r(l)("wizard.format.type.service"),
                      ref_key: "stepTwoStart",
                      ref: D
                    }, null, 8, ["modelValue", "size", "label", "options", "formatError", "failureError", "validation", "validation-messages", "aria-label"]),
                    $(me, {
                      onSubmit: xe,
                      onCancel: je,
                      animation: !0,
                      disabled: O.value
                    }, null, 8, ["disabled"])
                  ], 32)
                ]),
                _: 1
              }, 8, ["title", "summary"]),
              $(be, {
                title: r(l)("wizard.configure.title"),
                onFocusFirstElement: c
              }, {
                default: T(() => [
                  s("form", {
                    name: "configure",
                    onSubmit: ze,
                    ref_key: "formElement",
                    ref: z
                  }, [
                    W.value && (R.value || N.value) ? (v(), y("div", Jt, b(R.value ? r(l)("wizard.format.type.error.invalid") : u.value), 1)) : E("", !0),
                    a.value?.configOptions.includes("name") ? (v(), P(q, {
                      key: 1,
                      type: "text",
                      name: "name",
                      modelValue: a.value.config.name,
                      "onUpdate:modelValue": t[4] || (t[4] = (f) => a.value.config.name = f),
                      onLink: _e,
                      label: r(l)("wizard.configure.name.label"),
                      "aria-label": r(l)("wizard.configure.name.label"),
                      validation: !0,
                      "validation-messages": {
                        required: r(l)("wizard.configure.name.error.required")
                      },
                      ref_key: "stepThreeStart",
                      ref: ue,
                      onFocusElement: c,
                      activeStep: A.value,
                      step: 2
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages", "activeStep"])) : E("", !0),
                    a.value?.configOptions.includes("nameField") ? (v(), P(q, {
                      key: 2,
                      type: "select",
                      name: "nameField",
                      modelValue: a.value.config.nameField,
                      "onUpdate:modelValue": t[5] || (t[5] = (f) => a.value.config.nameField = f),
                      label: r(l)("wizard.configure.nameField.label"),
                      "aria-label": r(l)("wizard.configure.nameField.label"),
                      defaultOption: !0,
                      options: Ee()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : E("", !0),
                    a.value?.configOptions.includes("maptipField") ? (v(), P(q, {
                      key: 3,
                      type: "select",
                      name: "maptipField",
                      modelValue: a.value.config.maptipField,
                      "onUpdate:modelValue": t[6] || (t[6] = (f) => a.value.config.maptipField = f),
                      label: r(l)("wizard.configure.maptipField.label"),
                      "aria-label": r(l)("wizard.configure.maptipField.label"),
                      options: Ee()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : E("", !0),
                    a.value?.configOptions.includes("latField") ? (v(), P(q, {
                      key: 4,
                      type: "select",
                      name: "latField",
                      modelValue: a.value.config.latField,
                      "onUpdate:modelValue": t[7] || (t[7] = (f) => a.value.config.latField = f),
                      defaultOption: !0,
                      label: r(l)("wizard.configure.latField.label"),
                      "aria-label": r(l)("wizard.configure.latField.label"),
                      options: ke("lat")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : E("", !0),
                    a.value?.configOptions.includes("longField") ? (v(), P(q, {
                      key: 5,
                      type: "select",
                      name: "longField",
                      modelValue: a.value.config.longField,
                      "onUpdate:modelValue": t[8] || (t[8] = (f) => a.value.config.longField = f),
                      defaultOption: !0,
                      label: r(l)("wizard.configure.longField.label"),
                      "aria-label": r(l)("wizard.configure.longField.label"),
                      options: ke("lon")
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : E("", !0),
                    a.value?.configOptions.includes("sublayers") ? (v(), y("div", Zt, [
                      $(q, {
                        type: "checkbox",
                        name: "nested",
                        onNested: qe,
                        label: r(l)("wizard.configure.sublayers.nested"),
                        "aria-label": r(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (v(), P(q, {
                        type: "select",
                        key: V.value,
                        name: "sublayers",
                        modelValue: a.value.config.sublayers,
                        "onUpdate:modelValue": t[9] || (t[9] = (f) => a.value.config.sublayers = f),
                        onSelect: Fe,
                        label: r(l)("wizard.configure.sublayers.label"),
                        "aria-label": r(l)("wizard.configure.sublayers.label"),
                        options: a.value.layers,
                        selectedValues: S.value,
                        sublayerOptions: Ae,
                        multiple: !0,
                        searchable: !0,
                        validation: !0,
                        "validation-messages": {
                          required: r(l)("wizard.configure.sublayers.error.required")
                        },
                        onKeydown: t[10] || (t[10] = $e(() => {
                        }, ["stop"]))
                      }, null, 8, ["modelValue", "label", "aria-label", "options", "selectedValues", "validation-messages"]))
                    ])) : E("", !0),
                    s("label", {
                      class: "sr-only",
                      for: `${r(x)}-color-hex`
                    }, b(r(l)("wizard.configure.colour.hex")), 9, Qt),
                    a.value?.configOptions.includes("colour") ? (v(), y("label", Xt, b(r(l)("wizard.configure.colour.label")), 1)) : E("", !0),
                    a.value?.configOptions.includes("colour") ? (v(), P(r(at), {
                      key: 8,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: r(x) + "-hue-slider",
                      color: H.value,
                      onColorChange: Pe
                    }, {
                      "hue-range-input-label": T(() => [
                        s("span", el, b(r(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": T(() => [
                        s("span", tl, b(r(l)("wizard.configure.colour.copy")), 1),
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
                    }, 8, ["id", "color"])) : E("", !0),
                    $(me, {
                      onSubmit: ze,
                      onCancel: Ye,
                      animation: O.value,
                      disabled: !_.value
                    }, null, 8, ["animation", "disabled"])
                  ], 544)
                ]),
                _: 1
              }, 8, ["title"])
            ]),
            _: 1
          }, 8, ["activeStep"]),
          Z.value ? (v(), y("div", {
            key: 0,
            class: ae(["p-3 border-solid border-2", re.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, b(de.value) + " " + b(r(l)(`wizard.upload.${re.value ? "success" : "fail"}`)), 3)) : E("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Hl = /* @__PURE__ */ ve(ll, [["__scopeId", "data-v-b3297e6c"]]);
export {
  Hl as default
};
