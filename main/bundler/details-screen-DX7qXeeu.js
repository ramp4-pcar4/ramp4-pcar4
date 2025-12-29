import { defineComponent as G, ref as x, onMounted as ne, createElementBlock as l, openBlock as t, createElementVNode as _, normalizeClass as R, createCommentVNode as j, Fragment as W, renderList as K, normalizeStyle as pe, toDisplayString as S, computed as E, resolveDirective as q, withDirectives as A, withModifiers as fe, createVNode as ae, onBeforeMount as Q, watch as V, onBeforeUnmount as ee, unref as L, createBlock as Z, inject as te, resolveDynamicComponent as de, createTextVNode as ie, resolveComponent as $e, withCtx as ve, nextTick as Te } from "vue";
import { _ as oe, e as se, X as re, L as Ee, Y as Me, G as J } from "./main-CDBGYV0n.js";
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
import ye from "linkify-html";
import { T as Ie } from "./toggle-switch-control-elOGvZa5.js";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "@popperjs/core";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const Ce = {
  key: 0,
  class: "relative"
}, ze = {
  key: 0,
  class: "relative"
}, De = ["innerHTML"], He = ["src"], Se = {
  key: 1,
  class: "w-32 h-32"
}, je = { class: "symbologyIcon" }, Be = ["innerHTML"], Oe = ["src"], Ne = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ae = {
  key: 0,
  class: "px-5"
}, qe = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Fe = /* @__PURE__ */ G({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(v) {
    const b = v, i = x([]);
    return ne(() => {
      i.value = b.layer.legend;
    }), (d, p) => v.result.loaded ? (t(), l("div", Ce, [
      _("div", {
        class: R(v.result.items.length === 0 ? "opacity-50" : "")
      }, [
        i.value.length > 1 ? (t(), l("div", ze, [
          (t(!0), l(W, null, K(i.value.slice(0, 3).reverse(), (w, g) => (t(), l("div", {
            class: R(["absolute", [g == 0 ? "symbol-0" : g == 1 ? "left-3" : "left-6"]]),
            style: pe({ "z-index": 3 - g }),
            key: g
          }, [
            i.value[g].svgcode ? (t(), l("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: i.value[g].svgcode
            }, null, 8, De)) : i.value[g].imgUrl ? (t(), l("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: i.value[g].imgUrl
            }, null, 8, He)) : j("", !0)
          ], 6))), 128))
        ])) : i.value.length > 0 ? (t(), l("div", Se, [
          _("div", je, [
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
      _("div", Ne, [
        v.result.loaded ? (t(), l("div", Ae, S(v.result.items.length), 1)) : j("", !0)
      ])
    ])) : (t(), l("div", qe, p[0] || (p[0] = [
      _("div", { class: "symbologyIcon h-32 w-32" }, [
        _("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Pe = /* @__PURE__ */ oe(Fe, [["__scopeId", "data-v-496d788d"]]), Ge = ["content"], Ue = { class: "symbologyLayerName truncate" }, Ve = /* @__PURE__ */ G({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(v) {
    const b = se(), i = E(() => b.properties), d = v, p = () => {
      const w = d.layer;
      return w && i.value[w.id] && i.value[w.id].name ? i.value[w.id].name : w?.name ?? "";
    };
    return (w, g) => {
      const $ = q("tippy");
      return A((t(), l("button", {
        class: R(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", v.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: g[0] || (g[0] = fe(() => {
        }, ["stop"])),
        content: p()
      }, [
        ae(Pe, {
          class: "symbStack w-32 h-32 mr-10",
          layer: v.layer,
          result: v.result
        }, null, 8, ["layer", "result"]),
        _("div", Ue, S(p()), 1)
      ], 10, Ge)), [
        [$, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Re = ["content"], Ze = /* @__PURE__ */ G({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(v, { emit: b }) {
    const { t: i } = Y(), d = re(), p = x(), w = () => {
      p.value._tippy.hide();
    }, g = (h) => {
      h.key === "Tab" && p.value?.matches(":focus") && p.value._tippy.show();
    }, $ = b, y = v, s = x(""), f = x([]), o = x(!1), e = x(!1), r = (h) => d.getLayerByUid(h), T = (h) => {
      s.value = h, $("selection-changed", h), o.value = !1;
    }, B = () => {
      e.value || setTimeout(() => {
        o.value = e.value;
      }, 500), e.value = !0;
    }, C = () => {
      o.value = e.value = !1;
    }, N = () => {
      e.value || (o.value = !0), e.value = !0;
    }, c = () => {
      o.value = e.value = !1;
    };
    return Q(() => {
      f.value.push(
        V(y, () => {
          s.value = y.selected;
        })
      );
    }), ne(() => {
      p.value?.addEventListener("blur", w), p.value?.addEventListener("keyup", g);
    }), ee(() => {
      f.value.forEach((h) => h()), p.value?.removeEventListener("blur", w), p.value?.removeEventListener("keyup", g);
    }), (h, M) => {
      const O = q("focus-item"), F = q("focus-list"), D = q("tippy");
      return A((t(), l("div", {
        class: R(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": o.value }]),
        onMouseover: B,
        onMouseleave: C,
        onFocus: N,
        onBlur: fe(c, ["self"]),
        content: L(i)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: p
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
            onClick: (u) => T(I.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [O]
          ])
        ]))), 128))
      ], 42, Re)), [
        [F],
        [D, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), Ye = { class: "inline font-bold" }, We = ["innerHTML"], Xe = /* @__PURE__ */ G({
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
    const { t: b } = Y(), i = te("iApi"), d = v, p = (s, f, o, e) => {
      const r = s.find((T) => T[f].toLowerCase() === o.toLowerCase());
      r && delete e[r.name];
    }, w = () => {
      const s = Object.assign({}, d.identifyData.data);
      p(d.fields, "type", "geometry", s), i.ui.exposeOids || p(d.fields, "type", "oid", s), i.ui.exposeMeasurements || (p(d.fields, "name", "shape_length", s), p(d.fields, "name", "shape_area", s));
      const f = {};
      d.fields.forEach((e) => {
        const r = d.fixtureFields?.find((T) => e.name === T.field);
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
          const T = s[e];
          o[e] = {
            value: typeof T == "number" ? i.ui.formatNumber(T) : T,
            alias: r.name,
            type: r.type
          };
        }
      });
      for (const [e] of Object.entries(o))
        i.ui.isPlainText(o[e].value) && (o[e].value = i.ui.escapeHtml(o[e].value));
      return o;
    }, g = (s, f, o) => {
      switch (o) {
        case "date":
          return y(s);
        default:
          return $(s, f);
      }
    }, $ = (s, f) => {
      if (!s)
        return s;
      if (s.trim().match(/\.(jpeg|jpg|gif|png)$/) || s.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${s}" alt="${b("details.item.alert.defaultAltText", { alias: f })}" />`;
      const o = "underline text-blue-700 break-all", e = document.createElement("div");
      return e.innerHTML = s.trim(), e.firstElementChild?.tagName == "A" ? (e.firstElementChild.className = o, e.innerHTML) : ye(s, {
        className: o,
        target: "_blank",
        validate: {
          url: (T) => /^https?:\/\//.test(T)
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
        _("span", Ye, S(o.alias), 1),
        f[0] || (f[0] = _("span", { class: "flex-auto" }, null, -1)),
        _("span", {
          class: "inline",
          innerHTML: g(o.value, o.alias, o.type)
        }, null, 8, We)
      ]))), 128))
    ]));
  }
}), Je = ["innerHTML"], Ke = { key: 1 }, Qe = /* @__PURE__ */ G({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: b } = Y();
    return (i, d) => v.identifyData ? (t(), l("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: v.identifyData.data.data ?? v.identifyData.data
    }, null, 8, Je)) : (t(), l("div", Ke, S(L(b)("details.layers.results.empty")), 1));
  }
}), et = { class: "relative flex flex-grow truncate" }, tt = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, st = { class: "flex p-8 items-center" }, lt = ["innerHTML"], at = {
  key: 1,
  class: "symbologyIcon p-6"
}, it = ["content", "innerHTML", "tabindex"], nt = {
  key: 1,
  class: "flex p-6 flex-grow"
}, ot = {
  key: 2,
  class: "zoomButton text-center p-3"
}, rt = ["content", "aria-label"], ut = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, ct = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, dt = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, vt = ["innerHTML"], me = /* @__PURE__ */ G({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(v) {
    const b = re(), i = v, d = te("iApi"), p = x([]), w = se(), { t: g } = Y(), $ = x(!1), y = x(""), s = x("none"), f = x(), o = () => b.getLayerByUid(i.uid), e = E(() => w.properties), r = E(() => w.defaultTemplates), T = E(() => o()?.supportsFeatures ?? !1), B = E(() => o()?.mapLayer ?? !1), C = E(() => {
      const n = o();
      let u = n && i.data.loaded ? n.nameValue(i.data.data) : d.$i18n.t("details.items.title");
      return d.ui.isPlainText(u) && (u = d.ui.escapeHtml(u)), u;
    }), N = (n) => {
      if (typeof n == "string") {
        const u = "underline text-blue-700 break-all", m = document.createElement("div");
        return m.innerHTML = n.trim(), m.firstElementChild?.tagName == "A" ? (m.firstElementChild.className = u, m.innerHTML) : ye(n, {
          className: u,
          target: "_blank",
          validate: {
            url: (z) => /^https?:\/\//.test(z)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return n;
    }, c = () => {
      D("none"), i.data.loaded ? h() : i.data.load().then(() => {
        h();
      });
    }, h = () => {
      if (y.value = "", !(i.data && i.data.loaded))
        return;
      const n = o();
      if (n === void 0) {
        console.warn(`could not find layer for uid ${i.uid} during icon lookup`);
        return;
      }
      if (n.supportsFeatures) {
        const u = n.oidField;
        n.getIcon(i.data.data[u]).then((m) => {
          y.value = m;
        });
      }
    }, M = E(() => {
      const n = o(), u = n && e.value[n.id] && e.value[n.id].template;
      if (u) {
        if (typeof de(u) != "string")
          return u;
        console.error(`Could not find custom details template named ${u}. Was it registered correctly?`);
      }
      return r.value && r.value[i.data.format] ? r.value[i.data.format] : T.value ? Xe : Qe;
    }), O = E(() => T.value ? o()?.fields || [] : []), F = E(() => {
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
      const u = i.data.data[n.oidField], m = () => {
        const H = { getGeom: !0 };
        n.getGraphic(u, H).then((z) => {
          z.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${u}`), D("error")) : (d.geo.map.zoomMapTo(z.geometry), D("zoomed"), d.updateAlert(d.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          D("error");
        });
      };
      n.layerType === Ee.FEATURE && n.geomType !== Me.POINT ? n.getGraphicExtent(u).then((H) => {
        d.geo.map.zoomMapTo(H), D("zoomed"), d.updateAlert(d.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        m();
      }) : m();
    };
    return Q(() => {
      p.value.push(
        V(
          i,
          () => {
            c();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), ee(() => {
      p.value.forEach((n) => n());
    }), (n, u) => {
      const m = q("truncate"), H = q("tippy");
      return t(), l(W, null, [
        _("div", et, [
          T.value ? (t(), l("div", tt, [
            _("div", st, [
              v.data.loaded && y.value ? (t(), l("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: y.value
              }, null, 8, lt)) : (t(), l("div", at, u[3] || (u[3] = [
                _("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            v.data.loaded ? A((t(), l("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: C.value,
              innerHTML: N(C.value),
              onTouchstart: u[0] || (u[0] = (z) => $.value = !0),
              onTouchend: u[1] || (u[1] = (z) => $.value = !1),
              tabindex: v.inList ? -1 : 0
            }, null, 40, it)), [
              [m, {
                options: {
                  placement: "top-start",
                  // Offset more for touch devices so tooltip is visible above finger
                  offset: () => $.value ? [0, 25] : [0, 0]
                }
              }]
            ]) : (t(), l("div", nt, S(L(g)("details.loading")), 1)),
            v.data.loaded ? (t(), l("span", ot, [
              B.value ? A((t(), l("button", {
                key: 0,
                type: "button",
                content: L(g)(`details.item.zoom${s.value === "none" ? "" : `.${s.value}`}`),
                "aria-label": L(g)(`grid.cells.zoom${s.value === "none" ? "" : `.${s.value}`}`),
                ref_key: "zoomButton",
                ref: f,
                onClick: u[2] || (u[2] = (z) => {
                  z.stopPropagation(), I();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                s.value === "zooming" ? (t(), l("div", ut)) : s.value === "zoomed" ? (t(), l("svg", ct, u[4] || (u[4] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : s.value === "error" ? (t(), l("svg", dt, u[5] || (u[5] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (t(), l("span", {
                  key: 3,
                  innerHTML: L(d).ui.getZoomIcon()
                }, null, 8, vt))
              ], 8, rt)), [
                [H, { placement: "bottom" }]
              ]) : j("", !0)
            ])) : j("", !0)
          ])) : j("", !0)
        ]),
        v.open ? (t(), Z(de(M.value), {
          key: 0,
          identifyData: v.data,
          fields: O.value,
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
}, pt = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, ft = { for: "toggle" }, yt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, gt = { class: "flex" }, ht = ["aria-label"], _t = ["content", "aria-label", "disabled"], bt = { class: "px-3 text-center flex-grow" }, kt = ["content", "aria-label", "disabled"], xt = { key: 3 }, Lt = { key: 0 }, wt = ["content"], $t = ["onClick"], Tt = {
  key: 1,
  class: "text-center"
}, Et = {
  key: 4,
  class: "p-5"
}, Mt = /* @__PURE__ */ G({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(v) {
    const b = x(), i = () => {
      b.value._tippy.hide();
    }, d = (a) => {
      a.key === "Tab" && b.value?.matches(":focus") && b.value._tippy.show();
    }, p = te("iApi"), w = se(), g = re(), $ = v, { t: y } = Y(), s = x(!1), f = x(p.fixture.get("details")), o = x(!0), e = x(!1), r = x(0), T = x(20), B = x([]), C = x([]), N = E(() => w.activeGreedy), c = E(() => w.properties), h = E(() => r.value + T.value), M = () => g.getLayerByUid($.uid), O = () => $.results.find((a) => a.uid === $.uid), F = E(() => O()?.loaded ?? !1), D = E(() => O()?.requestTime), I = E(
      () => s.value && (!e.value && m().length > 1 || e.value && m().length > T.value)
    ), n = E(() => {
      const a = M();
      return a && c.value[a.id] && c.value[a.id].name ? c.value[a.id].name : a?.name ?? "";
    }), u = E(() => $.uid), m = () => {
      const a = O();
      return a ? a.items : [];
    }, H = E(() => m()[r.value]), z = E(() => {
      if (f.value.hasHilighter()) {
        const a = M();
        if (a)
          return a.mapLayer && a.supportsFeatures;
      }
      return !1;
    }), ge = (a) => {
      o.value = a, w.hilightToggle = a, P();
    }, he = () => {
      const a = M();
      r.value = r.value ?? 0, o.value = w.hilightToggle ?? o.value, e.value = !1, s.value = !!a, P();
    }, ue = (a) => {
      e.value ? (r.value += a * T.value, P()) : r.value += a;
    }, P = async (a = !1) => {
      if (o.value && z.value) {
        if (a) {
          const U = O();
          U && await U.loading;
        }
        const k = m();
        if (F.value && k.length > 0) {
          if (e.value)
            f.value.hilightDetailsItems(k.slice(r.value, h.value), $.uid);
          else {
            const U = k[r.value];
            U && f.value.hilightDetailsItems([U], $.uid);
          }
          return;
        }
      }
      f.value.removeDetailsHilight();
    }, _e = () => {
      e.value = !0, r.value = Math.floor(r.value / T.value) * T.value, P();
    }, be = () => {
      f.value.removeDetailsHilight(), C.value.forEach((a) => a()), B.value.forEach((a) => p.event.off(a));
    }, ke = () => {
      f.value.removeDetailsHilight();
    }, xe = (a) => {
      const k = r.value;
      r.value = a, e.value = !1, k === a && P();
    };
    return ne(() => {
      B.value.push(
        p.event.on(J.LAYER_REMOVE, (a) => {
          const k = p.panel.get("details");
          $.uid === a.uid && k && k.close();
        })
      ), B.value.push(
        p.event.on(J.PANEL_CLOSED, (a) => {
          a.id === "details" && be();
        })
      ), B.value.push(
        p.event.on(J.PANEL_MINIMIZED, (a) => {
          a.id === "details" && ke();
        })
      ), B.value.push(
        p.event.on(J.MAP_BASEMAPCHANGE, (a) => {
          o.value && a.schemaChanged && P();
        })
      ), b.value?.addEventListener("blur", i), b.value?.addEventListener("keyup", d);
    }), Q(() => {
      C.value.push(
        V(
          H,
          () => {
            e.value || (he(), H.value === void 0 && f.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        V(
          u,
          () => {
            const a = $.uid;
            if (e.value && a) {
              const k = O();
              k && k.loading.then(() => {
                $.uid === a && e.value && P();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        V(D, () => {
          r.value = 0, e.value && P(!0);
        })
      ), C.value.push(
        V(
          () => $.uid,
          () => {
            r.value = 0;
          }
        )
      );
    }), ee(() => {
      b.value?.removeEventListener("blur", i), b.value?.removeEventListener("keyup", d);
    }), (a, k) => {
      const U = q("truncate"), le = q("tippy"), Le = q("focus-item"), we = q("focus-list");
      return F.value && N.value === 0 ? (t(), l("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: pe(v.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        s.value ? A((t(), l("h1", mt, [
          ie(S(n.value), 1)
        ])), [
          [U, { options: { placement: "top-start" } }]
        ]) : j("", !0),
        z.value ? (t(), l("div", pt, [
          _("label", ft, S(L(y)("details.togglehilight.title")), 1),
          ae(Ie, {
            config: {
              value: o.value,
              disabled: !1
            },
            onToggled: ge
          }, null, 8, ["config"])
        ])) : j("", !0),
        I.value ? (t(), l("div", yt, [
          _("div", gt, [
            e.value ? j("", !0) : (t(), l("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(y)("details.item.see.list"),
              onClick: k[0] || (k[0] = (X) => _e())
            }, S(L(y)("details.item.see.list")), 9, ht)),
            _("div", {
              class: R(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": e.value }])
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
              ]), 8, _t)), [
                [le, { placement: "top" }]
              ]),
              _("span", bt, S(e.value ? L(y)("details.items.range", [
                r.value + 1,
                Math.min(h.value, m().length),
                m().length
              ]) : L(y)("details.item.count", [r.value + 1, m().length])), 1),
              A((t(), l("button", {
                type: "button",
                content: L(y)(e.value ? "details.items.next" : "details.item.next.item"),
                onClick: k[2] || (k[2] = (X) => ue(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(y)(e.value ? "details.items.next" : "details.item.next.item"),
                disabled: !e.value && r.value === m().length - 1 || e.value && h.value >= m().length
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
              ]), 8, kt)), [
                [le, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : j("", !0),
        s.value ? (t(), l("div", xt, [
          m().length > 0 ? (t(), l("div", Lt, [
            e.value ? A((t(), l("div", {
              key: 0,
              class: "flex flex-col",
              content: L(y)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: b
            }, [
              (t(!0), l(W, null, K(m().slice(r.value, h.value), (X, ce) => A((t(), l("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: ce,
                onClick: (Ht) => xe(r.value + ce)
              }, [
                ae(me, {
                  data: X,
                  uid: v.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, $t)), [
                [Le, "show-truncate"]
              ])), 128))
            ], 8, wt)), [
              [we],
              [le, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (t(), Z(me, {
              key: 1,
              data: H.value,
              uid: v.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (t(), l("div", Tt, S(L(y)("details.layers.results.empty.currentLayer")), 1))
        ])) : (t(), l("div", Et, S(L(y)("details.item.no.data")), 1))
      ], 4)) : (t(), l("div", {
        key: 1,
        class: R(["flex justify-center py-10 items-center", v.results.length > 1 ? "ml-42" : ""])
      }, [
        k[5] || (k[5] = _("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        ie(" " + S(L(y)("details.item.loading")), 1)
      ], 2));
    };
  }
}), It = /* @__PURE__ */ oe(Mt, [["__scopeId", "data-v-1efeb63f"]]), Ct = { class: "relative h-full" }, zt = { class: "detailsContentSection overflow-y-auto h-full" }, Dt = /* @__PURE__ */ G({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(v) {
    const { t: b } = Y(), i = te("iApi"), d = se(), p = x([]), w = x([]), g = x([]), $ = x(!1), y = x(""), s = E(() => d.activeGreedy), f = E(() => d.payload), o = E(() => d.properties), e = (c) => {
      y.value = c;
    }, r = (c) => g.value.find((h) => h.uid === c), T = (c) => {
      c !== void 0 && (d.activeGreedy = c.length === 0 ? 0 : c[0].requestTime, g.value = c, B(c));
    }, B = (c) => {
      if (y.value) {
        const h = r(y.value);
        h ? h.loading.then(() => {
          h.requestTime === s.value && (h.items.length > 0 ? N(!1) : C(c));
        }) : C(c);
      } else
        C(c);
    }, C = (c, h) => {
      let M;
      if (h)
        M = h;
      else {
        const I = d.properties, n = c.map((m) => [
          I[m.layerId]?.priority ?? 50,
          m.layerId
        ]), u = new Set(n.map((m) => m[0]));
        M = [], u.forEach((m) => {
          const H = n.filter((z) => z[0] === m).map((z) => z[1]);
          M.push([m, H]);
        }), M.sort((m, H) => H[0] - m[0]);
      }
      if (M.length === 0) {
        f.value.length ? N(!0) : Te().then(() => {
          N(!0);
        });
        return;
      }
      const O = M[M.length - 1][1], F = c.filter((I) => O.includes(I.layerId)).map(
        (I) => I.loading.then(() => I.items.length > 0 ? Promise.resolve(I) : Promise.reject())
      ), D = c.length === 0 ? 0 : c[0].requestTime;
      Promise.any(F).then((I) => {
        I.requestTime === s.value && (y.value = I.uid, N(!1));
      }).catch(() => {
        D === s.value && (M.pop(), C(c, M));
      });
    }, N = (c) => {
      d.activeGreedy = 0, $.value = c;
    };
    return Q(() => {
      w.value.push(
        V(
          f,
          (c) => {
            T(c);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), ee(() => {
      p.value.forEach((c) => i.event.off(c)), w.value.forEach((c) => c());
    }), (c, h) => {
      const M = $e("panel-screen");
      return t(), Z(M, { panel: v.panel }, {
        header: ve(() => [
          ie(S(
            // Show different titles based on what requested the panel
            L(d).origin === "toggleEvent" ? L(b)("details.layers.title.gridOrigin") : L(b)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ve(() => [
          _("div", Ct, [
            g.value.length > 1 ? (t(), Z(Ze, {
              key: 0,
              results: g.value,
              detailsProperties: o.value,
              selected: y.value,
              onSelectionChanged: e
            }, null, 8, ["results", "detailsProperties", "selected"])) : j("", !0),
            _("div", zt, [
              $.value ? (t(), l("div", {
                key: 1,
                class: R(["text-center", { "ml-42": g.value.length > 1 }])
              }, S(g.value.length >= 1 ? L(b)("details.layers.results.empty") : L(b)("details.layers.results.empty.noLayers")), 3)) : (t(), Z(It, {
                key: 0,
                uid: y.value,
                results: g.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), gs = /* @__PURE__ */ oe(Dt, [["__scopeId", "data-v-059182ed"]]);
export {
  gs as default
};
