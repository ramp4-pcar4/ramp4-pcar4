import { defineComponent as P, ref as x, onMounted as ne, createElementBlock as l, openBlock as t, createElementVNode as _, normalizeClass as V, createCommentVNode as j, Fragment as W, renderList as K, normalizeStyle as me, toDisplayString as S, computed as E, resolveDirective as q, withDirectives as A, withModifiers as fe, createVNode as ae, onBeforeMount as Q, watch as R, onBeforeUnmount as ee, unref as L, createBlock as Z, inject as te, resolveDynamicComponent as de, nextTick as ye, createTextVNode as ie, resolveComponent as $e, withCtx as ve } from "vue";
import { _ as oe, e as se, X as re, a0 as Ee, L as Me, Y as Ie, G as J } from "./main-mgxqA_dp.js";
import { useI18n as Y } from "vue-i18n";
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
import "tiny-emitter";
import "throttle-debounce";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import he from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { T as Ce } from "./toggle-switch-control-Dp2dZVTZ.js";
const ze = {
  key: 0,
  class: "relative"
}, De = {
  key: 0,
  class: "relative"
}, He = ["innerHTML"], Se = ["src"], je = {
  key: 1,
  class: "w-32 h-32"
}, Ne = { class: "symbologyIcon" }, Be = ["innerHTML"], Oe = ["src"], Ae = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, qe = {
  key: 0,
  class: "px-5"
}, Fe = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Ge = /* @__PURE__ */ P({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(v) {
    const b = v, i = x([]);
    return ne(() => {
      i.value = b.layer.legend;
    }), (u, m) => v.result.loaded ? (t(), l("div", ze, [
      _("div", {
        class: V(v.result.items.length === 0 ? "opacity-50" : "")
      }, [
        i.value.length > 1 ? (t(), l("div", De, [
          (t(!0), l(W, null, K(i.value.slice(0, 3).reverse(), (w, h) => (t(), l("div", {
            class: V(["absolute", [h == 0 ? "symbol-0" : h == 1 ? "left-3" : "left-6"]]),
            style: me({ "z-index": 3 - h }),
            key: h
          }, [
            i.value[h].svgcode ? (t(), l("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: i.value[h].svgcode
            }, null, 8, He)) : i.value[h].imgUrl ? (t(), l("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: i.value[h].imgUrl
            }, null, 8, Se)) : j("", !0)
          ], 6))), 128))
        ])) : i.value.length > 0 ? (t(), l("div", je, [
          _("div", Ne, [
            i.value[0].svgcode ? (t(), l("span", {
              key: 0,
              innerHTML: i.value[0].svgcode
            }, null, 8, Be)) : i.value[0].imgUrl ? (t(), l("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: i.value[0].imgUrl
            }, null, 8, Oe)) : j("", !0)
          ])
        ])) : j("", !0)
      ], 2),
      _("div", Ae, [
        v.result.loaded ? (t(), l("div", qe, S(v.result.items.length), 1)) : j("", !0)
      ])
    ])) : (t(), l("div", Fe, m[0] || (m[0] = [
      _("div", { class: "symbologyIcon h-32 w-32" }, [
        _("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Pe = /* @__PURE__ */ oe(Ge, [["__scopeId", "data-v-496d788d"]]), Ue = ["content"], Re = { class: "symbologyLayerName truncate" }, Ve = /* @__PURE__ */ P({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(v) {
    const b = se(), i = E(() => b.properties), u = v, m = () => {
      const w = u.layer;
      return w && i.value[w.id] && i.value[w.id].name ? i.value[w.id].name : w?.name ?? "";
    };
    return (w, h) => {
      const T = q("tippy");
      return A((t(), l("button", {
        class: V(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", v.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: h[0] || (h[0] = fe(() => {
        }, ["stop"])),
        content: m()
      }, [
        ae(Pe, {
          class: "symbStack w-32 h-32 mr-10",
          layer: v.layer,
          result: v.result
        }, null, 8, ["layer", "result"]),
        _("div", Re, S(m()), 1)
      ], 10, Ue)), [
        [T, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Ze = ["content"], Ye = /* @__PURE__ */ P({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(v, { emit: b }) {
    const { t: i } = Y(), u = re(), m = x(), w = () => {
      m.value._tippy.hide();
    }, h = (g) => {
      g.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
    }, T = b, y = v, s = x(""), f = x([]), o = x(!1), e = x(!1), r = (g) => u.getLayerByUid(g), $ = (g) => {
      s.value = g, T("selection-changed", g), o.value = !1;
    }, N = () => {
      e.value || setTimeout(() => {
        o.value = e.value;
      }, 500), e.value = !0;
    }, C = () => {
      o.value = e.value = !1;
    }, O = () => {
      e.value || (o.value = !0), e.value = !0;
    }, d = () => {
      o.value = e.value = !1;
    };
    return Q(() => {
      f.value.push(
        R(y, () => {
          s.value = y.selected;
        })
      );
    }), ne(() => {
      m.value?.addEventListener("blur", w), m.value?.addEventListener("keyup", h);
    }), ee(() => {
      f.value.forEach((g) => g()), m.value?.removeEventListener("blur", w), m.value?.removeEventListener("keyup", h);
    }), (g, M) => {
      const B = q("focus-item"), F = q("focus-list"), D = q("tippy");
      return A((t(), l("div", {
        class: V(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": o.value }]),
        onMouseover: N,
        onMouseleave: C,
        onFocus: O,
        onBlur: fe(d, ["self"]),
        content: L(i)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: m
      }, [
        (t(!0), l(W, null, K(y.results, (I, n) => (t(), l("div", {
          class: "flex justify-start relative",
          key: n
        }, [
          A((t(), Z(Ve, {
            key: I.uid,
            layer: r(I.uid),
            result: I,
            selected: I.uid === s.value,
            onClick: (c) => $(I.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [B]
          ])
        ]))), 128))
      ], 42, Ze)), [
        [F],
        [D, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), We = { class: "inline font-bold" }, Xe = ["innerHTML"], Je = /* @__PURE__ */ P({
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
    const { t: b } = Y(), i = te("iApi"), u = v, m = (s, f, o, e) => {
      const r = s.find(($) => $[f].toLowerCase() === o.toLowerCase());
      r && delete e[r.name];
    }, w = () => {
      const s = Object.assign({}, u.identifyData.data);
      m(u.fields, "type", "geometry", s), i.ui.exposeOids || m(u.fields, "type", "oid", s), i.ui.exposeMeasurements || (m(u.fields, "name", "shape_length", s), m(u.fields, "name", "shape_area", s));
      const f = {};
      u.fields.forEach((e) => {
        const r = u.fixtureFields?.find(($) => e.name === $.field);
        f[e.name] = {
          name: r?.alias || e.alias || e.name,
          type: e.type,
          visible: r?.visible ?? !0
        };
      });
      const o = {};
      Object.keys(s).forEach((e) => {
        const r = f[e];
        if (r && r.visible) {
          const $ = s[e];
          o[e] = {
            value: typeof $ == "number" ? i.ui.formatNumber($) : $,
            alias: r.name,
            type: r.type
          };
        }
      });
      for (const [e] of Object.entries(o))
        i.ui.isPlainText(o[e].value) && (o[e].value = i.ui.escapeHtml(o[e].value));
      return o;
    }, h = (s, f, o) => {
      switch (o) {
        case "date":
          return y(s);
        default:
          return T(s, f);
      }
    }, T = (s, f) => {
      if (!s)
        return s;
      if (s.trim().match(/\.(jpeg|jpg|gif|png)$/) || s.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${s}" alt="${b("details.item.alert.defaultAltText", { alias: f })}" />`;
      const o = "underline text-blue-700 break-all", e = document.createElement("div");
      return e.innerHTML = s.trim(), e.firstElementChild?.tagName == "A" ? (e.firstElementChild.className = o, e.innerHTML) : he(s, {
        className: o,
        target: "_blank",
        validate: {
          url: ($) => /^https?:\/\//.test($)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, y = (s) => {
      const f = parseInt(s);
      return isNaN(f) ? s : new Date(f).toISOString().split("T")[0];
    };
    return (s, f) => (t(), l("div", null, [
      (t(!0), l(W, null, K(w(), (o, e, r) => (t(), l("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: r
      }, [
        _("span", We, S(o.alias), 1),
        f[0] || (f[0] = _("span", { class: "flex-auto" }, null, -1)),
        _("span", {
          class: "inline",
          innerHTML: h(o.value, o.alias, o.type)
        }, null, 8, Xe)
      ]))), 128))
    ]));
  }
}), Ke = ["innerHTML"], Qe = { key: 1 }, et = /* @__PURE__ */ P({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: b } = Y();
    return (i, u) => v.identifyData ? (t(), l("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: v.identifyData.data.data ?? v.identifyData.data
    }, null, 8, Ke)) : (t(), l("div", Qe, S(L(b)("details.layers.results.empty")), 1));
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
}, pt = ["innerHTML"], pe = /* @__PURE__ */ P({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(v) {
    const b = re(), i = v, u = te("iApi"), m = x([]), w = se(), { t: h } = Y(), T = x(!1), y = x(""), s = x("none"), f = x(), o = () => b.getLayerByUid(i.uid), e = E(() => w.properties), r = E(() => w.defaultTemplates), $ = E(() => o()?.supportsFeatures ?? !1), N = E(() => o()?.mapLayer ?? !1), C = E(() => {
      const n = o();
      let c = n && i.data.loaded ? n.nameValue(i.data.data) : u.$i18n.t("details.items.title");
      return u.ui.isPlainText(c) && (c = u.ui.escapeHtml(c)), c;
    }), O = (n) => {
      if (typeof n == "string") {
        const c = "underline text-blue-700 break-all", p = document.createElement("div");
        return p.innerHTML = n.trim(), p.firstElementChild?.tagName == "A" ? (p.firstElementChild.className = c, p.innerHTML) : he(n, {
          className: c,
          target: "_blank",
          validate: {
            url: (z) => /^https?:\/\//.test(z)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return n;
    }, d = () => {
      D("none"), i.data.loaded ? g() : i.data.load().then(() => {
        g();
      });
    }, g = () => {
      if (y.value = "", !(i.data && i.data.loaded))
        return;
      const n = o();
      if (n === void 0) {
        console.warn(`could not find layer for uid ${i.uid} during icon lookup`);
        return;
      }
      if (n.supportsFeatures) {
        const c = n.oidField;
        n.getIcon(i.data.data[c]).then((p) => {
          y.value = p;
        });
      }
    }, M = E(() => {
      const n = o(), c = n && e.value[n.id] && e.value[n.id].template;
      if (c) {
        if (typeof de(c) != "string")
          return c;
        ye(
          () => u.notify.show(
            Ee.WARNING,
            u.$i18n.t("details.template.notFound", { layer: c })
          )
        );
      }
      return r.value && r.value[i.data.format] ? r.value[i.data.format] : $.value ? Je : et;
    }), B = E(() => $.value ? o()?.fields || [] : []), F = E(() => {
      const n = o();
      if (n && e.value[n.id] && e.value[n.id].fields)
        return e.value[n.id].fields;
    }), D = (n) => {
      n === "zoomed" || n === "error" ? setTimeout(() => {
        s.value = n, f.value?._tippy.show(), setTimeout(() => {
          f.value?._tippy.hide(), s.value = "none";
        }, 3e3);
      }, 300) : s.value = n;
    }, I = () => {
      if (s.value !== "none")
        return;
      D("zooming");
      const n = o();
      if (n === void 0 || !n.isLoaded) {
        console.warn(`Could not find layer for uid ${i.uid} during zoom geometry lookup`), D("error");
        return;
      }
      if (!i.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), D("error");
        return;
      }
      const c = i.data.data[n.oidField], p = () => {
        const H = { getGeom: !0 };
        n.getGraphic(c, H).then((z) => {
          z.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${c}`), D("error")) : (u.geo.map.zoomMapTo(z.geometry), D("zoomed"), u.updateAlert(u.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          D("error");
        });
      };
      n.layerType === Me.FEATURE && n.geomType !== Ie.POINT ? n.getGraphicExtent(c).then((H) => {
        u.geo.map.zoomMapTo(H), D("zoomed"), u.updateAlert(u.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        p();
      }) : p();
    };
    return Q(() => {
      m.value.push(
        R(
          i,
          () => {
            d();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), ee(() => {
      m.value.forEach((n) => n());
    }), (n, c) => {
      const p = q("truncate"), H = q("tippy");
      return t(), l(W, null, [
        _("div", tt, [
          $.value ? (t(), l("div", st, [
            _("div", lt, [
              v.data.loaded && y.value ? (t(), l("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: y.value
              }, null, 8, at)) : (t(), l("div", it, c[3] || (c[3] = [
                _("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            v.data.loaded ? A((t(), l("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: C.value,
              innerHTML: O(C.value),
              onTouchstart: c[0] || (c[0] = (z) => T.value = !0),
              onTouchend: c[1] || (c[1] = (z) => T.value = !1),
              tabindex: v.inList ? -1 : 0
            }, null, 40, nt)), [
              [p, {
                options: {
                  placement: "top-start",
                  // Offset more for touch devices so tooltip is visible above finger
                  offset: () => T.value ? [0, 25] : [0, 0]
                }
              }]
            ]) : (t(), l("div", ot, S(L(h)("details.loading")), 1)),
            v.data.loaded ? (t(), l("span", rt, [
              N.value ? A((t(), l("button", {
                key: 0,
                type: "button",
                content: L(h)(`details.item.zoom${s.value === "none" ? "" : `.${s.value}`}`),
                "aria-label": L(h)(`grid.cells.zoom${s.value === "none" ? "" : `.${s.value}`}`),
                ref_key: "zoomButton",
                ref: f,
                onClick: c[2] || (c[2] = (z) => {
                  z.stopPropagation(), I();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                s.value === "zooming" ? (t(), l("div", ct)) : s.value === "zoomed" ? (t(), l("svg", dt, c[4] || (c[4] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : s.value === "error" ? (t(), l("svg", vt, c[5] || (c[5] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (t(), l("span", {
                  key: 3,
                  innerHTML: L(u).ui.getZoomIcon()
                }, null, 8, pt))
              ], 8, ut)), [
                [H, { placement: "bottom" }]
              ]) : j("", !0)
            ])) : j("", !0)
          ])) : j("", !0)
        ]),
        v.open ? (t(), Z(de(M.value), {
          key: 0,
          identifyData: v.data,
          fields: B.value,
          fixtureFields: F.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : j("", !0)
      ], 64);
    };
  }
}), mt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, ft = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, yt = { for: "toggle" }, ht = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, gt = { class: "flex" }, _t = ["aria-label"], bt = ["content", "aria-label", "disabled"], kt = { class: "px-3 text-center flex-grow" }, xt = ["content", "aria-label", "disabled"], Lt = { key: 3 }, wt = { key: 0 }, Tt = ["content"], $t = ["onClick"], Et = {
  key: 1,
  class: "text-center"
}, Mt = {
  key: 4,
  class: "p-5"
}, It = /* @__PURE__ */ P({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(v) {
    const b = x(), i = () => {
      b.value._tippy.hide();
    }, u = (a) => {
      a.key === "Tab" && b.value?.matches(":focus") && b.value._tippy.show();
    }, m = te("iApi"), w = se(), h = re(), T = v, { t: y } = Y(), s = x(!1), f = x(m.fixture.get("details")), o = x(!0), e = x(!1), r = x(0), $ = x(20), N = x([]), C = x([]), O = E(() => w.activeGreedy), d = E(() => w.properties), g = E(() => r.value + $.value), M = () => h.getLayerByUid(T.uid), B = () => T.results.find((a) => a.uid === T.uid), F = E(() => B()?.loaded ?? !1), D = E(() => B()?.requestTime), I = E(
      () => s.value && (!e.value && p().length > 1 || e.value && p().length > $.value)
    ), n = E(() => {
      const a = M();
      return a && d.value[a.id] && d.value[a.id].name ? d.value[a.id].name : a?.name ?? "";
    }), c = E(() => T.uid), p = () => {
      const a = B();
      return a ? a.items : [];
    }, H = E(() => p()[r.value]), z = E(() => {
      if (f.value.hasHilighter()) {
        const a = M();
        if (a)
          return a.mapLayer && a.supportsFeatures;
      }
      return !1;
    }), ge = (a) => {
      o.value = a, w.hilightToggle = a, G();
    }, _e = () => {
      const a = M();
      r.value = r.value ?? 0, o.value = w.hilightToggle ?? o.value, e.value = !1, s.value = !!a, G();
    }, ue = (a) => {
      e.value ? (r.value += a * $.value, G()) : r.value += a;
    }, G = async (a = !1) => {
      if (o.value && z.value) {
        if (a) {
          const U = B();
          U && await U.loading;
        }
        const k = p();
        if (F.value && k.length > 0) {
          if (e.value)
            f.value.hilightDetailsItems(k.slice(r.value, g.value), T.uid);
          else {
            const U = k[r.value];
            U && f.value.hilightDetailsItems([U], T.uid);
          }
          return;
        }
      }
      f.value.removeDetailsHilight();
    }, be = () => {
      e.value = !0, r.value = Math.floor(r.value / $.value) * $.value, G();
    }, ke = () => {
      f.value.removeDetailsHilight(), C.value.forEach((a) => a()), N.value.forEach((a) => m.event.off(a));
    }, xe = () => {
      f.value.removeDetailsHilight();
    }, Le = (a) => {
      const k = r.value;
      r.value = a, e.value = !1, k === a && G();
    };
    return ne(() => {
      N.value.push(
        m.event.on(J.LAYER_REMOVE, (a) => {
          const k = m.panel.get("details");
          T.uid === a.uid && k && k.close();
        })
      ), N.value.push(
        m.event.on(J.PANEL_CLOSED, (a) => {
          a.id === "details" && ke();
        })
      ), N.value.push(
        m.event.on(J.PANEL_MINIMIZED, (a) => {
          a.id === "details" && xe();
        })
      ), N.value.push(
        m.event.on(J.MAP_BASEMAPCHANGE, (a) => {
          o.value && a.schemaChanged && G();
        })
      ), b.value?.addEventListener("blur", i), b.value?.addEventListener("keyup", u);
    }), Q(() => {
      C.value.push(
        R(
          H,
          () => {
            e.value || (_e(), H.value === void 0 && f.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        R(
          c,
          () => {
            const a = T.uid;
            if (e.value && a) {
              const k = B();
              k && k.loading.then(() => {
                T.uid === a && e.value && G();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        R(D, () => {
          r.value = 0, e.value && G(!0);
        })
      ), C.value.push(
        R(
          () => T.uid,
          () => {
            r.value = 0;
          }
        )
      );
    }), ee(() => {
      b.value?.removeEventListener("blur", i), b.value?.removeEventListener("keyup", u);
    }), (a, k) => {
      const U = q("truncate"), le = q("tippy"), we = q("focus-item"), Te = q("focus-list");
      return F.value && O.value === 0 ? (t(), l("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: me(v.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        s.value ? A((t(), l("h1", mt, [
          ie(S(n.value), 1)
        ])), [
          [U, { options: { placement: "top-start" } }]
        ]) : j("", !0),
        z.value ? (t(), l("div", ft, [
          _("label", yt, S(L(y)("details.togglehilight.title")), 1),
          ae(Ce, {
            config: {
              value: o.value,
              disabled: !1
            },
            onToggled: ge
          }, null, 8, ["config"])
        ])) : j("", !0),
        I.value ? (t(), l("div", ht, [
          _("div", gt, [
            e.value ? j("", !0) : (t(), l("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(y)("details.item.see.list"),
              onClick: k[0] || (k[0] = (X) => be())
            }, S(L(y)("details.item.see.list")), 9, _t)),
            _("div", {
              class: V(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": e.value }])
            }, [
              A((t(), l("button", {
                type: "button",
                content: L(y)(e.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: k[1] || (k[1] = (X) => ue(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(y)(e.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: r.value === 0
              }, k[3] || (k[3] = [
                _("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  _("g", null, [
                    _("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, bt)), [
                [le, { placement: "top" }]
              ]),
              _("span", kt, S(e.value ? L(y)("details.items.range", [
                r.value + 1,
                Math.min(g.value, p().length),
                p().length
              ]) : L(y)("details.item.count", [r.value + 1, p().length])), 1),
              A((t(), l("button", {
                type: "button",
                content: L(y)(e.value ? "details.items.next" : "details.item.next.item"),
                onClick: k[2] || (k[2] = (X) => ue(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(y)(e.value ? "details.items.next" : "details.item.next.item"),
                disabled: !e.value && r.value === p().length - 1 || e.value && g.value >= p().length
              }, k[4] || (k[4] = [
                _("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  _("g", null, [
                    _("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, xt)), [
                [le, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : j("", !0),
        s.value ? (t(), l("div", Lt, [
          p().length > 0 ? (t(), l("div", wt, [
            e.value ? A((t(), l("div", {
              key: 0,
              class: "flex flex-col",
              content: L(y)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: b
            }, [
              (t(!0), l(W, null, K(p().slice(r.value, g.value), (X, ce) => A((t(), l("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: ce,
                onClick: (St) => Le(r.value + ce)
              }, [
                ae(pe, {
                  data: X,
                  uid: v.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, $t)), [
                [we, "show-truncate"]
              ])), 128))
            ], 8, Tt)), [
              [Te],
              [le, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (t(), Z(pe, {
              key: 1,
              data: H.value,
              uid: v.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (t(), l("div", Et, S(L(y)("details.layers.results.empty.currentLayer")), 1))
        ])) : (t(), l("div", Mt, S(L(y)("details.item.no.data")), 1))
      ], 4)) : (t(), l("div", {
        key: 1,
        class: V(["flex justify-center py-10 items-center", v.results.length > 1 ? "ml-42" : ""])
      }, [
        k[5] || (k[5] = _("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        ie(" " + S(L(y)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Ct = /* @__PURE__ */ oe(It, [["__scopeId", "data-v-1efeb63f"]]), zt = { class: "relative h-full" }, Dt = { class: "detailsContentSection overflow-y-auto h-full" }, Ht = /* @__PURE__ */ P({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(v) {
    const { t: b } = Y(), i = te("iApi"), u = se(), m = x([]), w = x([]), h = x([]), T = x(!1), y = x(""), s = E(() => u.activeGreedy), f = E(() => u.payload), o = E(() => u.properties), e = (d) => {
      y.value = d;
    }, r = (d) => h.value.find((g) => g.uid === d), $ = (d) => {
      d !== void 0 && (u.activeGreedy = d.length === 0 ? 0 : d[0].requestTime, h.value = d, N(d));
    }, N = (d) => {
      if (y.value) {
        const g = r(y.value);
        g ? g.loading.then(() => {
          g.requestTime === s.value && (g.items.length > 0 ? O(!1) : C(d));
        }) : C(d);
      } else
        C(d);
    }, C = (d, g) => {
      let M;
      if (g)
        M = g;
      else {
        const I = u.properties, n = d.map((p) => [
          I[p.layerId]?.priority ?? 50,
          p.layerId
        ]), c = new Set(n.map((p) => p[0]));
        M = [], c.forEach((p) => {
          const H = n.filter((z) => z[0] === p).map((z) => z[1]);
          M.push([p, H]);
        }), M.sort((p, H) => H[0] - p[0]);
      }
      if (M.length === 0) {
        f.value.length ? O(!0) : ye().then(() => {
          O(!0);
        });
        return;
      }
      const B = M[M.length - 1][1], F = d.filter((I) => B.includes(I.layerId)).map(
        (I) => I.loading.then(() => I.items.length > 0 ? Promise.resolve(I) : Promise.reject())
      ), D = d.length === 0 ? 0 : d[0].requestTime;
      Promise.any(F).then((I) => {
        I.requestTime === s.value && (y.value = I.uid, O(!1));
      }).catch(() => {
        D === s.value && (M.pop(), C(d, M));
      });
    }, O = (d) => {
      u.activeGreedy = 0, T.value = d;
    };
    return Q(() => {
      w.value.push(
        R(
          f,
          (d) => {
            $(d);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), ee(() => {
      m.value.forEach((d) => i.event.off(d)), w.value.forEach((d) => d());
    }), (d, g) => {
      const M = $e("panel-screen");
      return t(), Z(M, { panel: v.panel }, {
        header: ve(() => [
          ie(S(
            // Show different titles based on what requested the panel
            L(u).origin === "toggleEvent" ? L(b)("details.layers.title.gridOrigin") : L(b)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ve(() => [
          _("div", zt, [
            h.value.length > 1 ? (t(), Z(Ye, {
              key: 0,
              results: h.value,
              detailsProperties: o.value,
              selected: y.value,
              onSelectionChanged: e
            }, null, 8, ["results", "detailsProperties", "selected"])) : j("", !0),
            _("div", Dt, [
              T.value ? (t(), l("div", {
                key: 1,
                class: V(["text-center", { "ml-42": h.value.length > 1 }])
              }, S(h.value.length >= 1 ? L(b)("details.layers.results.empty") : L(b)("details.layers.results.empty.noLayers")), 3)) : (t(), Z(Ct, {
                key: 0,
                uid: y.value,
                results: h.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), _s = /* @__PURE__ */ oe(Ht, [["__scopeId", "data-v-059182ed"]]);
export {
  _s as default
};
