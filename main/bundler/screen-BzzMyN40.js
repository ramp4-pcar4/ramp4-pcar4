import { defineComponent as ie, ref as b, watch as ye, toRef as je, openBlock as v, createElementBlock as g, createElementVNode as s, toDisplayString as y, unref as o, inject as ge, useTemplateRef as ee, reactive as re, onMounted as he, onBeforeUnmount as ce, resolveDirective as Oe, createCommentVNode as L, createVNode as $, withCtx as C, withDirectives as be, normalizeClass as se, createTextVNode as we, Fragment as Ye, renderList as Ke, vShow as Ae, Transition as Ze, renderSlot as Te, computed as H, provide as Je, onErrorCaptured as Qe, resolveComponent as Xe, createBlock as q, withModifiers as $e, nextTick as et } from "vue";
import { ColorPicker as tt } from "vue-accessible-color-picker";
import { _ as ve, I as lt, L as S, a0 as K, G as Ie, Z as pe } from "./main-lcO-efBh.js";
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
import "pinia";
import { useI18n as Se } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import at from "@ramp4-pcar4/vue3-treeselect";
import "@ramp4-pcar4/vue3-treeselect/dist/vue3-treeselect.css";
const ot = { class: "flex justify-end mb-20" }, nt = ["disabled", "animation"], st = { class: "button-text" }, rt = /* @__PURE__ */ ie({
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
  setup(n) {
    const { t: c } = Se(), l = n, w = b();
    ye(je(l, "disabled"), (h) => {
      !h && w.value.classList.contains("button--loading") && w.value.classList.remove("button--loading");
    });
    const E = () => {
      l.animation && w.value.classList.toggle("button--loading");
    };
    return (h, p) => (v(), g("div", ot, [
      s("button", {
        class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
        type: "button",
        onClick: p[0] || (p[0] = (A) => h.$emit("cancel"))
      }, y(o(c)("wizard.step.cancel")), 1),
      s("button", {
        class: "button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400",
        ref_key: "submitButton",
        ref: w,
        type: "button",
        disabled: n.disabled,
        animation: n.animation,
        onClick: p[1] || (p[1] = (A) => {
          h.$emit("submit"), E();
        })
      }, [
        s("span", st, y(o(c)("wizard.step.continue")), 1)
      ], 8, nt)
    ]));
  }
}), fe = /* @__PURE__ */ ve(rt, [["__scopeId", "data-v-5e77d8d6"]]), it = { key: 0 }, ut = { class: "text-base font-bold" }, dt = {
  class: "relative py-8 mb-0.5 h-75 hover:bg-gray-200 focus-within:bg-gray-200",
  "data-type": "file"
}, ct = ["aria-label"], vt = { class: "text-gray-500 text-xs mb-1" }, pt = { key: 1 }, ft = { class: "text-base font-bold" }, mt = {
  class: "mb-0.5",
  "data-type": "url"
}, bt = ["value", "aria-label"], yt = {
  key: 0,
  class: "text-red-900 text-xs"
}, gt = { key: 2 }, ht = { class: "text-base font-bold" }, wt = {
  class: "relative mb-0.5",
  "data-type": "select"
}, St = { key: 0 }, xt = {
  key: 0,
  class: "text-red-900 text-xs"
}, zt = { key: 1 }, Et = ["size", "value", "aria-label"], kt = ["value"], Ft = {
  key: 0,
  class: "text-red-900 text-xs"
}, Lt = {
  key: 1,
  class: "text-red-900 text-xs"
}, Vt = { key: 3 }, At = ["aria-label"], $t = { class: "text-base font-bold" }, It = { key: 4 }, Ot = { class: "text-base font-bold" }, Tt = { class: "relative mb-0.5" }, Ct = ["value", "aria-label"], Mt = {
  key: 0,
  class: "text-red-900 text-xs"
}, Rt = /* @__PURE__ */ ie({
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
  setup(n, { expose: c, emit: l }) {
    const w = ge("iApi"), { t: E } = Se(), h = l, p = n, A = b(), M = ee("textInput"), O = ee("selectInput"), _ = ee("urlInput");
    c({ selectInput: O, textInput: M, urlInput: _ });
    const z = b(!1), D = b(!1), W = b(!1), te = b(!1), B = b([...p.selectedValues]), P = b("value-label"), Z = b("option-label"), R = b(void 0), T = b(null), G = re([]);
    if (p.defaultOption && p.modelValue === "" && p.options.length) {
      let u = p.options[0].value;
      if (p.name === "latField") {
        const i = new RegExp(/^(y|lat.*)$/i);
        u = p.options.find((f) => i.test(f.label))?.value || u;
      } else if (p.name === "longField") {
        const i = new RegExp(/^(x|long.*)$/i);
        u = p.options.find((f) => i.test(f.label))?.value || u;
      }
      h("update:modelValue", u);
    }
    const J = (u) => {
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
      J(u.target.value), h("link", u.target.value, z), W.value = !1;
    }, V = () => {
      h("select", p.sublayerOptions(B.value)), te.value = B.value && B.value.length === 0;
    }, j = (u) => u.length > 5 ? `${u.slice(0, 5)}...` : u;
    function k() {
      R.value = new ResizeObserver(function() {
        a();
      }), R.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__control")), R.value.observe(w.$vApp.$el.querySelector(".vue-treeselect__menu"));
    }
    const a = () => {
      const i = w.$vApp.$el.querySelector(".vue-treeselect__menu")?.clientHeight ?? 0, f = w.$vApp.$el.querySelector(".vue-treeselect__control")?.clientHeight ?? 0;
      A.value.style.height = `${i + f + 30}px`;
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
      p.step === 2 && p.step === p.activeStep && h("focusElement");
    }), ce(() => {
      R.value.disconnect(), G.forEach((u) => u());
    }), (u, i) => {
      const U = Oe("truncate");
      return v(), g("div", {
        class: "input-wrapper mb-12",
        ref_key: "el",
        ref: A
      }, [
        n.type === "file" ? (v(), g("div", it, [
          s("label", ut, y(n.label), 1),
          s("div", dt, [
            s("input", {
              class: "absolute w-full opacity-0 inset-0 cursor-pointer",
              type: "file",
              name: "file",
              accept: ".geojson,.json,.csv,.zip",
              "aria-label": p.ariaLabel,
              onInput: i[0] || (i[0] = (f) => {
                ue(f);
              })
            }, null, 40, ct),
            i[11] || (i[11] = s("div", { class: "upload-mask absolute inset-0 flex border-dashed border-2 border-gray-400 pointer-events-none justify-center" }, [
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
          s("div", vt, y(n.help), 1)
        ])) : n.type === "url" ? (v(), g("div", pt, [
          s("label", ft, y(n.label), 1),
          s("div", mt, [
            s("input", {
              class: "text-sm w-full border-solid border-gray-300 mb-5 focus:border-green-500",
              type: "url",
              name: "url",
              value: n.modelValue,
              "aria-label": p.ariaLabel,
              onChange: i[1] || (i[1] = (f) => z.value ? D.value = !1 : D.value = !0),
              onInput: i[2] || (i[2] = (f) => {
                Q(f);
              }),
              ref_key: "urlInput",
              ref: _
            }, null, 40, bt)
          ]),
          D.value ? (v(), g("div", yt, y(n.modelValue ? n.validationMessages?.invalid : n.validationMessages?.required), 1)) : L("", !0)
        ])) : n.type === "select" ? (v(), g("div", gt, [
          s("label", ht, y(n.label), 1),
          s("div", wt, [
            n.multiple ? (v(), g("div", St, [
              s("div", {
                ref_key: "treeWrapper",
                ref: T
              }, [
                $(o(at), {
                  modelValue: B.value,
                  "onUpdate:modelValue": i[3] || (i[3] = (f) => B.value = f),
                  multiple: !0,
                  options: n.options,
                  "default-expand-level": 1,
                  "always-open": !0,
                  "open-direction": "bottom",
                  "max-height": 300,
                  limit: 4,
                  disableFuzzyMatching: !0,
                  searchable: n.searchable,
                  childrenIgnoreDisabled: !0,
                  placeholder: o(E)("wizard.configure.sublayers.select"),
                  noResultsText: o(E)("wizard.configure.sublayers.results"),
                  clearAllText: o(E)("wizard.configure.sublayers.clearAll"),
                  onSelect: i[4] || (i[4] = (f) => {
                    u.$nextTick(() => {
                      V();
                    });
                  }),
                  onDeselect: i[5] || (i[5] = (f) => {
                    u.$nextTick(() => {
                      V();
                    });
                  }),
                  onOpen: i[6] || (i[6] = (f) => {
                    u.$nextTick(() => {
                      k();
                    });
                  })
                }, {
                  [P.value]: C(({ node: f }) => [
                    s("label", null, y(j(f.label)), 1)
                  ]),
                  [Z.value]: C(({ node: f, labelClassName: ne }) => [
                    be((v(), g("label", {
                      class: se(ne)
                    }, [
                      we(y(f.label), 1)
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
              n.validation && te.value ? (v(), g("div", xt, y(n.validationMessages?.required), 1)) : L("", !0)
            ])) : (v(), g("div", zt, [
              s("select", {
                class: se(["block border-solid border-gray-300 w-full p-3 overflow-y-auto", n.size && "configure-select"]),
                size: n.size,
                value: n.modelValue,
                onInput: i[7] || (i[7] = (f) => x(n.size, f)),
                "aria-label": p.ariaLabel,
                ref_key: "selectInput",
                ref: O
              }, [
                (v(!0), g(Ye, null, Ke(n.options, (f) => (v(), g("option", {
                  class: "p-6",
                  key: f.label,
                  value: f.value
                }, y(f.label), 9, kt))), 128))
              ], 42, Et),
              n.validation && n.formatError ? (v(), g("div", Ft, y(n.validationMessages?.invalid), 1)) : L("", !0),
              n.validation && n.failureError ? (v(), g("div", Lt, y(n.validationMessages?.failure), 1)) : L("", !0)
            ]))
          ])
        ])) : n.type === "checkbox" ? (v(), g("div", Vt, [
          s("input", {
            class: "text-sm border-solid border-gray-300 mb-5 focus:border-green-500 mr-10",
            type: "checkbox",
            name: "nested",
            checked: !0,
            "aria-label": p.ariaLabel,
            onChange: i[8] || (i[8] = (f) => {
              ae(f);
            })
          }, null, 40, At),
          s("label", $t, y(n.label), 1)
        ])) : (v(), g("div", It, [
          s("label", Ot, y(n.label), 1),
          s("div", Tt, [
            s("input", {
              class: se(["border-solid border-gray-300 p-3 w-full", { "error-border": !z.value && !n.modelValue }]),
              type: "text",
              value: n.modelValue,
              "aria-label": p.ariaLabel,
              onChange: i[9] || (i[9] = (f) => z.value ? W.value = !1 : W.value = !0),
              onInput: i[10] || (i[10] = (f) => {
                oe(f);
              }),
              ref_key: "textInput",
              ref: M
            }, null, 42, Ct)
          ]),
          n.validation && !n.modelValue ? (v(), g("div", Mt, y(n.validationMessages?.required), 1)) : L("", !0)
        ]))
      ], 512);
    };
  }
}), N = /* @__PURE__ */ ve(Rt, [["__scopeId", "data-v-9b2786ed"]]), Nt = { class: "step relative flex flex-col px-12" }, Ut = { class: "stepper-header flex pb-24" }, _t = {
  key: 1,
  class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, Bt = { class: "flex flex-col overflow-hidden" }, qt = { class: "pl-12 flex items-center text-md" }, Ht = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, Dt = /* @__PURE__ */ ie({
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
  setup(n, { emit: c }) {
    const l = ge("stepper"), w = b(), E = c, h = b(-1), p = (O) => {
      M() || (O.stopPropagation(), E("focusPanel"), E("focusFirstElement"));
    };
    he(() => {
      h.value = l.numSteps++, w.value?.addEventListener("focusout", p);
    }), ce(() => {
      w.value?.removeEventListener("focusout", p);
    });
    const A = () => l.activeIndex > h.value, M = () => l.activeIndex === h.value;
    return (O, _) => {
      const z = Oe("truncate");
      return v(), g("div", Nt, [
        s("div", Ut, [
          A() ? (v(), g("div", _t, _[0] || (_[0] = [
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
          ]))) : (v(), g("div", {
            key: 0,
            class: se(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": M }])
          }, y(h.value + 1), 3)),
          s("div", Bt, [
            s("div", qt, y(n.title), 1),
            be((v(), g("div", Ht, [
              we(y(n.summary), 1)
            ])), [
              [Ae, !M()],
              [z]
            ])
          ])
        ]),
        $(Ze, {
          name: "step",
          mode: "out-in"
        }, {
          default: C(() => [
            be(s("div", {
              class: "pl-36",
              ref_key: "stepItem",
              ref: w
            }, [
              Te(O.$slots, "default", {}, void 0, !0)
            ], 512), [
              [Ae, M()]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
}), me = /* @__PURE__ */ ve(Dt, [["__scopeId", "data-v-53b5c8d8"]]), Wt = { class: "py-12 h-auto stepper" }, Pt = /* @__PURE__ */ ie({
  __name: "stepper",
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  },
  setup(n) {
    const c = n, l = H(() => c.activeStep), w = re([]), E = re({
      activeIndex: c.activeStep,
      numSteps: 0
    });
    return Je("stepper", E), w.push(
      ye(l, () => {
        E.activeIndex = c.activeStep;
      })
    ), ce(() => {
      w.forEach((h) => h());
    }), (h, p) => (v(), g("div", Wt, [
      Te(h.$slots, "default")
    ]));
  }
}), Gt = {
  key: 0,
  class: "inline-flex items-center mb-10"
}, jt = { class: "px-5 text-xs" }, Yt = { key: 5 }, Kt = ["for"], Zt = {
  key: 6,
  class: "text-base font-bold"
}, Jt = { class: "sr-only" }, Qt = { class: "sr-only" }, Xt = /* @__PURE__ */ ie({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(n) {
    const c = lt(), { t: l } = Se(), w = ge("iApi"), E = b(), h = b([]), p = H(() => c.layerSource), A = H(() => c.currStep), M = b(), O = b(), _ = b(0), z = b(!1), D = b(), W = ee("stepOneStart"), te = ee("stepTwoStart"), B = ee("stepThreeStart"), P = b(!1), Z = b(!1), R = b(!1), T = b(!1), G = b(!1), J = b(!1), le = b(!0), ue = b(""), Q = b(""), x = b([]), ae = re([
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
    ]), V = H({
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
    Qe(() => ((A.value === K.FORMAT || A.value === K.CONFIGURE) && (P.value = !0, c.goToStep(K.FORMAT)), !1)), he(() => {
      h.value.push(
        w.event.on(Ie.LAYER_LAYERSTATECHANGE, (e) => {
          e.layer.userAdded && (ue.value = e.layer.name, J.value = e.state !== pe.LOADING && e.state !== pe.NEW, le.value = J.value && e.state === pe.LOADED);
        })
      ), A.value === K.CONFIGURE && (a.value?.configOptions.includes("colour") && Ve(), T.value = !a.value?.configOptions.includes("sublayers") && !!a.value?.config.name);
    }), ce(() => {
      h.value.forEach((e) => w.event.off(e));
    });
    const u = () => {
      D.value.el.dispatchEvent(new MouseEvent("click"));
    }, i = () => {
      switch (A.value) {
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
    const f = async (e) => {
      const t = new FileReader();
      t.onload = (d) => {
        j.value = t.result, V.value = e.name, ne(d);
      }, t.readAsArrayBuffer(e);
    }, ne = (e) => {
      e?.preventDefault(), k.value = p.value.guessFormatFromURL(V.value), c.goToStep(K.FORMAT);
    }, xe = async (e) => {
      e?.preventDefault(), z.value = !0, Z.value = !1, G.value = !0, c.goToStep(K.CONFIGURE), Q.value = Y() ? oe.find((d) => d.value === k.value)?.label : ae.find((d) => d.value === k.value)?.label;
      try {
        a.value = Y() ? await p.value.fetchFileInfo(V.value, k.value, j.value) : await p.value.fetchServiceInfo(
          V.value,
          k.value,
          c.nested
        ), Y() && j.value && (a.value.config.url = "");
      } catch {
        z.value = !1, Z.value = !0;
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
      }), d.userAdded = !0, w.event.emit(Ie.USER_LAYER_ADDED, d), R.value = !1, c.goToStep(K.UPLOAD);
    }, Ee = () => a.value?.fields.map((e) => ({
      value: e.name,
      label: e.alias || e.name
    })), ke = (e) => a.value?.latLonFields[e].map((t) => ({
      value: t,
      label: t
    })), Y = () => j.value || V.value.match(/\.(zip|csv|json|geojson)$/), Ce = (e) => {
      f(e), V.value = "";
    }, Me = (e, t) => {
      V.value = e.trim(), R.value = t;
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
        a.value.layers = p.value.createLayerHierarchy(
          a.value.layersRaw,
          c.nested
        );
        const t = new Set(
          (a.value?.config?.sublayers ?? []).map((d) => d.index)
        );
        c.nested ? _e(a, t) : qe(a, t);
      } else if (k.value === S.WMS) {
        a.value.layers = p.value.mapWmsLayerList(
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
      M.value = a.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
      do
        O.value = Math.random().toString(36).substring(2, 9);
      while (document.getElementById(O.value + "-hue-slider") !== null);
    }, De = (e) => {
      a.value.config.colour = e.colors.hex.substring(0, 7), et(() => {
        E.value.querySelector(".vacp-copy-button").style.backgroundColor = a.value?.config.colour;
      });
    }, We = () => {
      R.value = !1, c.goToStep(0), U(W);
    }, Pe = () => {
      z.value = !1, P.value = !1, Z.value = !1, R.value = !!V.value, G.value = !1, c.goToStep(0), Q.value = "";
    }, Ge = () => {
      x.value = [], T.value = !1, c.goToStep(1);
    };
    return (e, t) => {
      const d = Xe("panel-screen");
      return v(), q(d, {
        panel: n.panel,
        ref_key: "thePanel",
        ref: D
      }, {
        header: C(() => [
          we(y(o(l)("wizard.title")), 1)
        ]),
        content: C(() => [
          $(Pt, { activeStep: A.value }, {
            default: C(() => [
              $(me, {
                title: o(l)("wizard.upload.title"),
                summary: V.value,
                onFocusPanel: u,
                onFocusFirstElement: i
              }, {
                default: C(() => [
                  s("form", {
                    name: "upload",
                    onSubmit: ne,
                    onClick: t[1] || (t[1] = (m) => J.value = !1)
                  }, [
                    $(N, {
                      type: "file",
                      name: "file",
                      label: o(l)("wizard.upload.file.label"),
                      help: o(l)("wizard.upload.file.help"),
                      onUpload: Ce,
                      "aria-label": o(l)("wizard.upload.file.label")
                    }, null, 8, ["label", "help", "aria-label"]),
                    t[11] || (t[11] = s("span", { class: "block text-center mb-10" }, "or", -1)),
                    $(N, {
                      type: "url",
                      name: "url",
                      modelValue: V.value,
                      "onUpdate:modelValue": t[0] || (t[0] = (m) => V.value = m),
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
                      onSubmit: ne,
                      onCancel: We,
                      disabled: !R.value
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
                  s("form", {
                    name: "format",
                    onSubmit: xe
                  }, [
                    de.value ? (v(), g("div", Gt, [
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
                      s("span", jt, y(o(l)("wizard.format.info.cors")), 1)
                    ])) : L("", !0),
                    $(N, {
                      type: "select",
                      name: "type",
                      modelValue: k.value,
                      "onUpdate:modelValue": t[2] || (t[2] = (m) => k.value = m),
                      onSelect: Re,
                      size: Y() ? oe.length : ae.length,
                      label: Y() ? o(l)("wizard.format.type.file") : o(l)("wizard.format.type.service"),
                      options: Y() ? oe : ae,
                      formatError: P.value,
                      failureError: Z.value,
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
                  s("form", {
                    name: "configure",
                    onSubmit: ze,
                    ref_key: "formElement",
                    ref: E
                  }, [
                    a.value?.configOptions.includes("name") ? (v(), q(N, {
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
                      activeStep: A.value,
                      step: 2
                    }, null, 8, ["modelValue", "label", "aria-label", "validation-messages", "activeStep"])) : L("", !0),
                    a.value?.configOptions.includes("nameField") ? (v(), q(N, {
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
                    a.value?.configOptions.includes("tooltipField") ? (v(), q(N, {
                      key: 2,
                      type: "select",
                      name: "tooltipField",
                      modelValue: a.value.config.tooltipField,
                      "onUpdate:modelValue": t[6] || (t[6] = (m) => a.value.config.tooltipField = m),
                      label: o(l)("wizard.configure.tooltipField.label"),
                      "aria-label": o(l)("wizard.configure.tooltipField.label"),
                      options: Ee()
                    }, null, 8, ["modelValue", "label", "aria-label", "options"])) : L("", !0),
                    a.value?.configOptions.includes("latField") ? (v(), q(N, {
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
                    a.value?.configOptions.includes("longField") ? (v(), q(N, {
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
                    a.value?.configOptions.includes("sublayers") ? (v(), g("div", Yt, [
                      $(N, {
                        type: "checkbox",
                        name: "nested",
                        onNested: Ue,
                        label: o(l)("wizard.configure.sublayers.nested"),
                        "aria-label": o(l)("wizard.configure.sublayers.nested")
                      }, null, 8, ["label", "aria-label"]),
                      (v(), q(N, {
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
                    s("label", {
                      class: "sr-only",
                      for: `${O.value}-color-hex`
                    }, y(o(l)("wizard.configure.colour.hex")), 9, Kt),
                    a.value?.configOptions.includes("colour") ? (v(), g("label", Zt, y(o(l)("wizard.configure.colour.label")), 1)) : L("", !0),
                    a.value?.configOptions.includes("colour") ? (v(), q(o(tt), {
                      key: 7,
                      "alpha-channel": "hide",
                      "visible-formats": ["hex"],
                      "default-format": "hex",
                      id: O.value,
                      color: M.value,
                      onColorChange: De
                    }, {
                      "hue-range-input-label": C(() => [
                        s("span", Jt, y(o(l)("wizard.configure.colour.hue")), 1)
                      ]),
                      "copy-button": C(() => [
                        s("span", Qt, y(o(l)("wizard.configure.colour.copy")), 1),
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
          J.value ? (v(), g("div", {
            key: 0,
            class: se(["p-3 border-solid border-2", le.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
          }, y(ue.value) + " " + y(o(l)(`wizard.upload.${le.value ? "success" : "fail"}`)), 3)) : L("", !0)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Nl = /* @__PURE__ */ ve(Xt, [["__scopeId", "data-v-b4e000a5"]]);
export {
  Nl as default
};
