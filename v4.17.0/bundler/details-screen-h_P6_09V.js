import { defineComponent as G, ref as b, onMounted as re, createElementBlock as a, openBlock as t, createElementVNode as g, normalizeClass as Z, createCommentVNode as N, Fragment as Y, renderList as Q, normalizeStyle as ge, toDisplayString as z, computed as L, resolveDirective as A, withDirectives as q, withModifiers as he, createVNode as ie, onBeforeMount as ee, watch as U, onBeforeUnmount as te, unref as x, createBlock as W, inject as se, resolveDynamicComponent as pe, nextTick as ne, createTextVNode as oe, resolveComponent as Me, withCtx as fe } from "vue";
import { _ as ue, e as le, X as ce, a0 as Ee, G as K } from "./main-2rKSs2tc.js";
import { useI18n as X } from "vue-i18n";
import "tiny-emitter";
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
import "throttle-debounce";
import "pinia";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import _e from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { T as Ce } from "./toggle-switch-control-DUF0sEoz.js";
const De = {
  key: 0,
  class: "relative"
}, Se = {
  key: 0,
  class: "relative"
}, He = ["innerHTML"], je = ["src"], ze = {
  key: 1,
  class: "w-32 h-32"
}, Ne = { class: "symbologyIcon" }, Be = ["innerHTML"], Oe = ["src"], qe = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ae = {
  key: 0,
  class: "px-5"
}, Fe = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Pe = /* @__PURE__ */ G({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(v) {
    const I = v, s = b([]);
    return re(() => {
      s.value = I.layer.legend;
    }), (m, y) => v.result.loaded ? (t(), a("div", De, [
      g("div", {
        class: Z(v.result.items.length === 0 ? "opacity-50" : "")
      }, [
        s.value.length > 1 ? (t(), a("div", Se, [
          (t(!0), a(Y, null, Q(s.value.slice(0, 3).reverse(), (h, p) => (t(), a("div", {
            class: Z(["absolute", [p == 0 ? "symbol-0" : p == 1 ? "left-3" : "left-6"]]),
            style: ge({ "z-index": 3 - p }),
            key: p
          }, [
            s.value[p].svgcode ? (t(), a("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: s.value[p].svgcode
            }, null, 8, He)) : s.value[p].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: s.value[p].imgUrl
            }, null, 8, je)) : N("", !0)
          ], 6))), 128))
        ])) : s.value.length > 0 ? (t(), a("div", ze, [
          g("div", Ne, [
            s.value[0].svgcode ? (t(), a("span", {
              key: 0,
              innerHTML: s.value[0].svgcode
            }, null, 8, Be)) : s.value[0].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: s.value[0].imgUrl
            }, null, 8, Oe)) : N("", !0)
          ])
        ])) : N("", !0)
      ], 2),
      g("div", qe, [
        v.result.loaded ? (t(), a("div", Ae, z(v.result.items.length), 1)) : N("", !0)
      ])
    ])) : (t(), a("div", Fe, y[0] || (y[0] = [
      g("div", { class: "symbologyIcon h-32 w-32" }, [
        g("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Ge = /* @__PURE__ */ ue(Pe, [["__scopeId", "data-v-496d788d"]]), Ve = ["content"], Re = { class: "symbologyLayerName truncate" }, Ue = /* @__PURE__ */ G({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(v) {
    const I = le(), s = L(() => I.properties), m = v, y = () => {
      const h = m.layer;
      return h && s.value[h.id] && s.value[h.id].name ? s.value[h.id].name : h?.name ?? "";
    };
    return (h, p) => {
      const D = A("tippy");
      return q((t(), a("button", {
        class: Z(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", v.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: p[0] || (p[0] = he(() => {
        }, ["stop"])),
        content: y()
      }, [
        ie(Ge, {
          class: "symbStack w-32 h-32 mr-10",
          layer: v.layer,
          result: v.result
        }, null, 8, ["layer", "result"]),
        g("div", Re, z(y()), 1)
      ], 10, Ve)), [
        [D, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Ze = ["content"], We = /* @__PURE__ */ G({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(v, { emit: I }) {
    const { t: s } = X(), m = ce(), y = b(), h = () => {
      y.value._tippy.hide();
    }, p = (r) => {
      r.key === "Tab" && y.value?.matches(":focus") && y.value._tippy.show();
    }, D = I, E = v, e = b(""), u = b([]), o = b(!1), n = b(!1), f = (r) => m.getLayerByUid(r), c = (r) => {
      e.value = r, D("selection-changed", r), o.value = !1;
    }, _ = () => {
      n.value || setTimeout(() => {
        o.value = n.value;
      }, 500), n.value = !0;
    }, B = () => {
      o.value = n.value = !1;
    }, S = () => {
      n.value || (o.value = !0), n.value = !0;
    }, H = () => {
      o.value = n.value = !1;
    };
    return ee(() => {
      u.value.push(
        U(E, () => {
          e.value = E.selected;
        })
      );
    }), re(() => {
      y.value?.addEventListener("blur", h), y.value?.addEventListener("keyup", p);
    }), te(() => {
      u.value.forEach((r) => r()), y.value?.removeEventListener("blur", h), y.value?.removeEventListener("keyup", p);
    }), (r, w) => {
      const T = A("focus-item"), F = A("focus-list"), M = A("tippy");
      return q((t(), a("div", {
        class: Z(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": o.value }]),
        onMouseover: _,
        onMouseleave: B,
        onFocus: S,
        onBlur: he(H, ["self"]),
        content: x(s)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: y
      }, [
        (t(!0), a(Y, null, Q(E.results, (O, l) => (t(), a("div", {
          class: "flex justify-start relative",
          key: l
        }, [
          q((t(), W(Ue, {
            key: O.uid,
            layer: f(O.uid),
            result: O,
            selected: O.uid === e.value,
            onClick: (d) => c(O.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [T]
          ])
        ]))), 128))
      ], 42, Ze)), [
        [F],
        [M, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), Xe = { class: "inline font-bold" }, Ye = ["innerHTML"], Je = /* @__PURE__ */ G({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: !1
    },
    fields: {
      type: Object,
      required: !0
    },
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: I } = X(), s = se("iApi"), m = v, y = (e, u, o, n) => {
      const f = e.find((c) => c[u].toLowerCase() === o.toLowerCase());
      f && delete n[f.name];
    }, h = () => {
      const e = Object.assign({}, m.identifyData.data);
      y(m.fields, "type", "geometry", e), s.ui.exposeOids || y(m.fields, "type", "oid", e), s.ui.exposeMeasurements || (y(m.fields, "name", "shape_length", e), y(m.fields, "name", "shape_area", e));
      const u = {};
      m.fields.forEach((n) => {
        const f = m.fixtureFields?.find((c) => n.name === c.field);
        u[n.name] = {
          name: f?.alias || n.alias || n.name,
          type: n.type,
          visible: f?.visible ?? !0
        };
      });
      const o = {};
      Object.keys(e).forEach((n) => {
        const f = u[n];
        if (f && f.visible) {
          const c = e[n];
          o[n] = {
            value: typeof c == "number" ? s.ui.formatNumber(c) : c,
            alias: f.name,
            type: f.type
          };
        }
      });
      for (const [n] of Object.entries(o))
        s.ui.isPlainText(o[n].value) && (o[n].value = s.ui.escapeHtml(o[n].value));
      return o;
    }, p = (e, u, o) => {
      switch (o) {
        case "date":
          return E(e);
        default:
          return D(e, u);
      }
    }, D = (e, u) => {
      if (!e)
        return e;
      if (e.trim().match(/\.(jpeg|jpg|gif|png)$/) || e.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${e}" alt="${I("details.item.alert.defaultAltText", { alias: u })}" />`;
      const o = "underline text-blue-700 break-all", n = document.createElement("div");
      return n.innerHTML = e.trim(), n.firstElementChild?.tagName == "A" ? (n.firstElementChild.className = o, n.innerHTML) : _e(e, {
        className: o,
        target: "_blank",
        validate: {
          url: (c) => /^https?:\/\//.test(c)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, E = (e) => {
      const u = parseInt(e);
      return isNaN(u) ? e : new Date(u).toISOString().split("T")[0];
    };
    return (e, u) => (t(), a("div", null, [
      (t(!0), a(Y, null, Q(h(), (o, n, f) => (t(), a("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: f
      }, [
        g("span", Xe, z(o.alias), 1),
        u[0] || (u[0] = g("span", { class: "flex-auto" }, null, -1)),
        g("span", {
          class: "inline ml-8",
          innerHTML: p(o.value, o.alias, o.type)
        }, null, 8, Ye)
      ]))), 128))
    ]));
  }
}), Ke = ["innerHTML"], Qe = { key: 1 }, et = /* @__PURE__ */ G({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: I } = X();
    return (s, m) => v.identifyData ? (t(), a("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: v.identifyData.data.data ?? v.identifyData.data
    }, null, 8, Ke)) : (t(), a("div", Qe, z(x(I)("details.layers.results.empty")), 1));
  }
}), tt = { class: "relative flex flex-grow truncate" }, st = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, lt = { class: "flex p-8 items-center" }, at = ["innerHTML"], it = {
  key: 1,
  class: "symbologyIcon p-6"
}, nt = ["content", "innerHTML", "tabindex"], ot = {
  key: 1,
  class: "flex p-6 flex-grow"
}, rt = {
  key: 2,
  class: "zoomButton text-center p-3"
}, ut = ["content", "aria-label"], ct = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, dt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, vt = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, mt = ["innerHTML"], ye = /* @__PURE__ */ G({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(v) {
    const I = ce(), s = v, m = se("iApi"), y = b([]), h = le(), { t: p } = X(), D = b(!1), E = b(""), e = b("none"), u = b(), o = () => I.getLayerByUid(s.uid), n = L(() => h.properties), f = L(() => h.defaultTemplates), c = L(() => o()?.supportsFeatures ?? !1), _ = L(() => o()?.mapLayer ?? !1), B = L(() => {
      const l = o();
      let d = l && s.data.loaded ? l.nameValue(s.data.data) : m.$i18n.t("details.items.title");
      return m.ui.isPlainText(d) && (d = m.ui.escapeHtml(d)), d;
    }), S = (l) => {
      if (typeof l == "string") {
        const d = "underline text-blue-700 break-all", C = document.createElement("div");
        return C.innerHTML = l.trim(), C.firstElementChild?.tagName == "A" ? (C.firstElementChild.className = d, C.innerHTML) : _e(l, {
          className: d,
          target: "_blank",
          validate: {
            url: ($) => /^https?:\/\//.test($)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return l;
    }, H = () => {
      M("none"), s.data.loaded ? r() : s.data.load().then(() => {
        r();
      });
    }, r = () => {
      if (E.value = "", !(s.data && s.data.loaded))
        return;
      const l = o();
      if (l === void 0) {
        console.warn(`could not find layer for uid ${s.uid} during icon lookup`);
        return;
      }
      if (l.supportsFeatures) {
        const d = l.oidField;
        l.getIcon(s.data.data[d]).then((C) => {
          E.value = C;
        });
      }
    }, w = L(() => {
      const l = o(), d = l && n.value[l.id] && n.value[l.id].template;
      if (d) {
        if (typeof pe(d) != "string")
          return d;
        ne(
          () => m.notify.show(
            Ee.WARNING,
            m.$i18n.t("details.template.notFound", { layer: d })
          )
        );
      }
      return f.value && f.value[s.data.format] ? f.value[s.data.format] : c.value ? Je : et;
    }), T = L(() => c.value ? o()?.fields || [] : []), F = L(() => {
      const l = o();
      if (l && n.value[l.id] && n.value[l.id].fields)
        return n.value[l.id].fields;
    }), M = (l) => {
      l === "zoomed" || l === "error" ? setTimeout(() => {
        e.value = l, u.value?._tippy.show(), setTimeout(() => {
          u.value?._tippy.hide(), e.value = "none";
        }, 3e3);
      }, 300) : e.value = l;
    }, O = () => {
      if (e.value !== "none")
        return;
      M("zooming");
      const l = o();
      if (l === void 0 || !l.isLoaded) {
        console.warn(`Could not find layer for uid ${s.uid} during zoom geometry lookup`), M("error");
        return;
      }
      if (!s.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), M("error");
        return;
      }
      const d = s.data.data[l.oidField];
      l.zoomToFeature(d).then((C) => {
        C ? (M("zoomed"), m.updateAlert(m.$i18n.t("details.item.alert.zoom"))) : M("error");
      });
    };
    return ee(() => {
      y.value.push(
        U(
          s,
          () => {
            H();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), te(() => {
      y.value.forEach((l) => l());
    }), (l, d) => {
      const C = A("truncate"), j = A("tippy");
      return t(), a(Y, null, [
        g("div", tt, [
          c.value ? (t(), a("div", st, [
            g("div", lt, [
              v.data.loaded && E.value ? (t(), a("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: E.value
              }, null, 8, at)) : (t(), a("div", it, d[3] || (d[3] = [
                g("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            v.data.loaded ? q((t(), a("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: B.value,
              innerHTML: S(B.value),
              onTouchstart: d[0] || (d[0] = ($) => D.value = !0),
              onTouchend: d[1] || (d[1] = ($) => D.value = !1),
              tabindex: v.inList ? -1 : 0
            }, null, 40, nt)), [
              [C, {
                options: {
                  placement: "top-start",
                  // Offset more for touch devices so tooltip is visible above finger
                  offset: () => D.value ? [0, 25] : [0, 0]
                }
              }]
            ]) : (t(), a("div", ot, z(x(p)("details.loading")), 1)),
            v.data.loaded ? (t(), a("span", rt, [
              _.value ? q((t(), a("button", {
                key: 0,
                type: "button",
                content: x(p)(`details.item.zoom${e.value === "none" ? "" : `.${e.value}`}`),
                "aria-label": x(p)(`grid.cells.zoom${e.value === "none" ? "" : `.${e.value}`}`),
                ref_key: "zoomButton",
                ref: u,
                onClick: d[2] || (d[2] = ($) => {
                  $.stopPropagation(), O();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                e.value === "zooming" ? (t(), a("div", ct)) : e.value === "zoomed" ? (t(), a("svg", dt, d[4] || (d[4] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : e.value === "error" ? (t(), a("svg", vt, d[5] || (d[5] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (t(), a("span", {
                  key: 3,
                  innerHTML: x(m).ui.getZoomIcon()
                }, null, 8, mt))
              ], 8, ut)), [
                [j, { placement: "bottom" }]
              ]) : N("", !0)
            ])) : N("", !0)
          ])) : N("", !0)
        ]),
        v.open ? (t(), W(pe(w.value), {
          key: 0,
          identifyData: v.data,
          fields: T.value,
          fixtureFields: F.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : N("", !0)
      ], 64);
    };
  }
}), pt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, ft = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, yt = { for: "toggle" }, gt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, ht = { class: "flex" }, _t = ["aria-label"], bt = ["content", "aria-label", "disabled"], kt = { class: "px-3 text-center flex-grow" }, xt = ["content", "aria-label", "disabled"], Lt = { key: 3 }, wt = { key: 0 }, $t = ["content"], Tt = ["onClick"], It = {
  key: 1,
  class: "text-center"
}, Mt = {
  key: 4,
  class: "p-5"
}, Et = /* @__PURE__ */ G({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  emits: ["item-selected"],
  setup(v, { emit: I }) {
    const s = b(), m = () => {
      s.value._tippy.hide();
    }, y = (i) => {
      i.key === "Tab" && s.value?.matches(":focus") && s.value._tippy.show();
    }, h = se("iApi"), p = le(), D = ce(), E = I, e = v, { t: u } = X(), o = b(!1), n = b(h.fixture.get("details")), f = b(!0), c = b(!1), _ = b(0), B = b(20), S = b([]), H = b([]), r = L(() => p.activeGreedy), w = L(() => p.properties), T = L(() => _.value + B.value), F = () => D.getLayerByUid(e.uid), M = () => e.results.find((i) => i.uid === e.uid), O = L(() => M()?.loaded ?? !1), l = L(() => M()?.requestTime), d = L(
      () => o.value && (!c.value && $().length > 1 || c.value && $().length > B.value)
    ), C = L(() => {
      const i = F();
      return i && w.value[i.id] && w.value[i.id].name ? w.value[i.id].name : i?.name ?? "";
    }), j = L(() => e.uid), $ = () => {
      const i = M();
      return i ? i.items : [];
    }, V = L(() => $()[_.value]), de = L(() => {
      if (n.value.hasHilighter()) {
        const i = F();
        if (i)
          return i.mapLayer && i.supportsFeatures;
      }
      return !1;
    }), be = (i) => {
      f.value = i, p.hilightToggle = i, P();
    }, ke = () => {
      const i = F();
      _.value = _.value ?? 0, f.value = p.hilightToggle ?? f.value, c.value = !1, o.value = !!i, P();
    }, ve = (i) => {
      c.value ? (_.value += i * B.value, P()) : _.value += i;
    }, P = async (i = !1) => {
      if (f.value && de.value) {
        if (i) {
          const R = M();
          R && await R.loading;
        }
        const k = $();
        if (O.value && k.length > 0) {
          if (c.value)
            n.value.hilightDetailsItems(k.slice(_.value, T.value), e.uid);
          else {
            const R = k[_.value];
            R && n.value.hilightDetailsItems([R], e.uid);
          }
          return;
        }
      }
      n.value.removeDetailsHilight();
    }, xe = () => {
      c.value = !0, _.value = Math.floor(_.value / B.value) * B.value, P();
    }, Le = () => {
      n.value.removeDetailsHilight(), H.value.forEach((i) => i()), S.value.forEach((i) => h.event.off(i));
    }, we = () => {
      n.value.removeDetailsHilight();
    }, $e = (i) => {
      const k = _.value;
      _.value = i, c.value = !1, k === i && P(), E("item-selected");
    };
    return re(() => {
      S.value.push(
        h.event.on(K.LAYER_REMOVE, (i) => {
          const k = h.panel.get("details");
          e.uid === i.uid && k && k.close();
        })
      ), S.value.push(
        h.event.on(K.PANEL_CLOSED, (i) => {
          i.id === "details" && Le();
        })
      ), S.value.push(
        h.event.on(K.PANEL_MINIMIZED, (i) => {
          i.id === "details" && we();
        })
      ), S.value.push(
        h.event.on(K.MAP_BASEMAPCHANGE, (i) => {
          f.value && i.schemaChanged && P();
        })
      ), s.value?.addEventListener("blur", m), s.value?.addEventListener("keyup", y);
    }), ee(() => {
      H.value.push(
        U(
          V,
          () => {
            c.value || (ke(), V.value === void 0 && n.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), H.value.push(
        U(
          j,
          () => {
            const i = e.uid;
            if (c.value && i) {
              const k = M();
              k && k.loading.then(() => {
                e.uid === i && c.value && P();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), H.value.push(
        U(l, () => {
          _.value = 0, c.value && P(!0);
        })
      ), H.value.push(
        U(
          () => e.uid,
          () => {
            _.value = 0;
          }
        )
      );
    }), te(() => {
      s.value?.removeEventListener("blur", m), s.value?.removeEventListener("keyup", y);
    }), (i, k) => {
      const R = A("truncate"), ae = A("tippy"), Te = A("focus-item"), Ie = A("focus-list");
      return O.value && r.value === 0 ? (t(), a("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: ge(v.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        o.value ? q((t(), a("h1", pt, [
          oe(z(C.value), 1)
        ])), [
          [R, { options: { placement: "top-start" } }]
        ]) : N("", !0),
        de.value ? (t(), a("div", ft, [
          g("label", yt, z(x(u)("details.togglehilight.title")), 1),
          ie(Ce, {
            config: {
              value: f.value,
              disabled: !1
            },
            onToggled: be
          }, null, 8, ["config"])
        ])) : N("", !0),
        d.value ? (t(), a("div", gt, [
          g("div", ht, [
            c.value ? N("", !0) : (t(), a("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": x(u)("details.item.see.list"),
              onClick: k[0] || (k[0] = (J) => xe())
            }, z(x(u)("details.item.see.list")), 9, _t)),
            g("div", {
              class: Z(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": c.value }])
            }, [
              q((t(), a("button", {
                type: "button",
                content: x(u)(c.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: k[1] || (k[1] = (J) => ve(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": x(u)(c.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: _.value === 0
              }, k[3] || (k[3] = [
                g("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  g("g", null, [
                    g("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, bt)), [
                [ae, { placement: "top" }]
              ]),
              g("span", kt, z(c.value ? x(u)("details.items.range", [
                _.value + 1,
                Math.min(T.value, $().length),
                $().length
              ]) : x(u)("details.item.count", [_.value + 1, $().length])), 1),
              q((t(), a("button", {
                type: "button",
                content: x(u)(c.value ? "details.items.next" : "details.item.next.item"),
                onClick: k[2] || (k[2] = (J) => ve(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": x(u)(c.value ? "details.items.next" : "details.item.next.item"),
                disabled: !c.value && _.value === $().length - 1 || c.value && T.value >= $().length
              }, k[4] || (k[4] = [
                g("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  g("g", null, [
                    g("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, xt)), [
                [ae, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : N("", !0),
        o.value ? (t(), a("div", Lt, [
          $().length > 0 ? (t(), a("div", wt, [
            c.value ? q((t(), a("div", {
              key: 0,
              class: "flex flex-col",
              content: x(u)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: s
            }, [
              (t(!0), a(Y, null, Q($().slice(_.value, T.value), (J, me) => q((t(), a("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: me,
                onClick: (Ht) => $e(_.value + me)
              }, [
                ie(ye, {
                  data: J,
                  uid: v.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, Tt)), [
                [Te, "show-truncate"]
              ])), 128))
            ], 8, $t)), [
              [Ie],
              [ae, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (t(), W(ye, {
              key: 1,
              data: V.value,
              uid: v.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (t(), a("div", It, z(x(u)("details.layers.results.empty.currentLayer")), 1))
        ])) : (t(), a("div", Mt, z(x(u)("details.item.no.data")), 1))
      ], 4)) : (t(), a("div", {
        key: 1,
        class: Z(["flex justify-center py-10 items-center", v.results.length > 1 ? "ml-42" : ""])
      }, [
        k[5] || (k[5] = g("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        oe(" " + z(x(u)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Ct = /* @__PURE__ */ ue(Et, [["__scopeId", "data-v-60b1b8a2"]]), Dt = { class: "relative h-full" }, St = /* @__PURE__ */ G({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(v) {
    const { t: I } = X(), s = se("iApi"), m = le(), y = b([]), h = b([]), p = b([]), D = b(!1), E = b(null), e = b(""), u = L(() => m.activeGreedy), o = L(() => m.payload), n = L(() => m.properties), f = (r) => {
      e.value = r;
    }, c = (r) => p.value.find((w) => w.uid === r), _ = (r) => {
      r !== void 0 && (m.activeGreedy = r.length === 0 ? 0 : r[0].requestTime, p.value = r, B(r));
    }, B = (r) => {
      if (e.value) {
        const w = c(e.value);
        w ? w.loading.then(() => {
          w.requestTime === u.value && (w.items.length > 0 ? H(!1) : S(r));
        }) : S(r);
      } else
        S(r);
    }, S = (r, w) => {
      let T;
      if (w)
        T = w;
      else {
        const l = m.properties, d = r.map((j) => [
          l[j.layerId]?.priority ?? 50,
          j.layerId
        ]), C = new Set(d.map((j) => j[0]));
        T = [], C.forEach((j) => {
          const $ = d.filter((V) => V[0] === j).map((V) => V[1]);
          T.push([j, $]);
        }), T.sort((j, $) => $[0] - j[0]);
      }
      if (T.length === 0) {
        o.value.length ? H(!0) : ne().then(() => {
          H(!0);
        });
        return;
      }
      const F = T[T.length - 1][1], M = r.filter((l) => F.includes(l.layerId)).map(
        (l) => l.loading.then(() => l.items.length > 0 ? Promise.resolve(l) : Promise.reject())
      ), O = r.length === 0 ? 0 : r[0].requestTime;
      Promise.any(M).then((l) => {
        l.requestTime === u.value && (e.value = l.uid, H(!1));
      }).catch(() => {
        O === u.value && (T.pop(), S(r, T));
      });
    }, H = (r) => {
      m.activeGreedy = 0, D.value = r;
    };
    return ee(() => {
      h.value.push(
        U(
          o,
          (r) => {
            _(r);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), te(() => {
      y.value.forEach((r) => s.event.off(r)), h.value.forEach((r) => r());
    }), (r, w) => {
      const T = Me("panel-screen");
      return t(), W(T, { panel: v.panel }, {
        header: fe(() => [
          oe(z(
            // Show different titles based on what requested the panel
            x(m).origin === "toggleEvent" ? x(I)("details.layers.title.gridOrigin") : x(I)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: fe(() => [
          g("div", Dt, [
            p.value.length > 1 ? (t(), W(We, {
              key: 0,
              results: p.value,
              detailsProperties: n.value,
              selected: e.value,
              onSelectionChanged: f
            }, null, 8, ["results", "detailsProperties", "selected"])) : N("", !0),
            g("div", {
              class: "detailsContentSection overflow-y-auto h-full",
              ref_key: "detailsPanel",
              ref: E
            }, [
              D.value ? (t(), a("div", {
                key: 1,
                class: Z(["text-center", { "ml-42": p.value.length > 1 }])
              }, z(p.value.length >= 1 ? x(I)("details.layers.results.empty") : x(I)("details.layers.results.empty.noLayers")), 3)) : (t(), W(Ct, {
                key: 0,
                uid: e.value,
                results: p.value,
                onItemSelected: w[0] || (w[0] = () => ne(() => E.value?.scrollTo({ top: 0 })))
              }, null, 8, ["uid", "results"]))
            ], 512)
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), hs = /* @__PURE__ */ ue(St, [["__scopeId", "data-v-e4b92b97"]]);
export {
  hs as default
};
