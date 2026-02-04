import { defineComponent as G, ref as b, onMounted as re, createElementBlock as a, openBlock as s, createElementVNode as g, normalizeClass as Z, createCommentVNode as N, Fragment as X, renderList as Q, normalizeStyle as ge, toDisplayString as j, computed as w, resolveDirective as q, withDirectives as A, withModifiers as he, createVNode as ie, onBeforeMount as ee, watch as V, onBeforeUnmount as te, unref as L, createBlock as Y, inject as se, resolveDynamicComponent as pe, nextTick as ne, createTextVNode as oe, resolveComponent as Ie, withCtx as fe } from "vue";
import { _ as ue, e as le, X as ce, a1 as Me, L as Ce, Y as ze, G as K } from "./main-6dWPqJr6.js";
import { useI18n as W } from "vue-i18n";
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
import "lodash-es";
import "vue-tippy";
import _e from "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { T as De } from "./toggle-switch-control-ByqqIuAV.js";
const Se = {
  key: 0,
  class: "relative"
}, He = {
  key: 0,
  class: "relative"
}, je = ["innerHTML"], Ne = ["src"], Be = {
  key: 1,
  class: "w-32 h-32"
}, Oe = { class: "symbologyIcon" }, Ae = ["innerHTML"], qe = ["src"], Fe = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Pe = {
  key: 0,
  class: "px-5"
}, Ge = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Ue = /* @__PURE__ */ G({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(m) {
    const E = m, l = b([]);
    return re(() => {
      l.value = E.layer.legend;
    }), (v, y) => m.result.loaded ? (s(), a("div", Se, [
      g("div", {
        class: Z(m.result.items.length === 0 ? "opacity-50" : "")
      }, [
        l.value.length > 1 ? (s(), a("div", He, [
          (s(!0), a(X, null, Q(l.value.slice(0, 3).reverse(), (h, p) => (s(), a("div", {
            class: Z(["absolute", [p == 0 ? "symbol-0" : p == 1 ? "left-3" : "left-6"]]),
            style: ge({ "z-index": 3 - p }),
            key: p
          }, [
            l.value[p].svgcode ? (s(), a("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: l.value[p].svgcode
            }, null, 8, je)) : l.value[p].imgUrl ? (s(), a("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: l.value[p].imgUrl
            }, null, 8, Ne)) : N("", !0)
          ], 6))), 128))
        ])) : l.value.length > 0 ? (s(), a("div", Be, [
          g("div", Oe, [
            l.value[0].svgcode ? (s(), a("span", {
              key: 0,
              innerHTML: l.value[0].svgcode
            }, null, 8, Ae)) : l.value[0].imgUrl ? (s(), a("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: l.value[0].imgUrl
            }, null, 8, qe)) : N("", !0)
          ])
        ])) : N("", !0)
      ], 2),
      g("div", Fe, [
        m.result.loaded ? (s(), a("div", Pe, j(m.result.items.length), 1)) : N("", !0)
      ])
    ])) : (s(), a("div", Ge, y[0] || (y[0] = [
      g("div", { class: "symbologyIcon h-32 w-32" }, [
        g("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Re = /* @__PURE__ */ ue(Ue, [["__scopeId", "data-v-496d788d"]]), Ve = ["content"], Ze = { class: "symbologyLayerName truncate" }, Ye = /* @__PURE__ */ G({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(m) {
    const E = le(), l = w(() => E.properties), v = m, y = () => {
      const h = v.layer;
      return h && l.value[h.id] && l.value[h.id].name ? l.value[h.id].name : h?.name ?? "";
    };
    return (h, p) => {
      const D = q("tippy");
      return A((s(), a("button", {
        class: Z(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", m.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: p[0] || (p[0] = he(() => {
        }, ["stop"])),
        content: y()
      }, [
        ie(Re, {
          class: "symbStack w-32 h-32 mr-10",
          layer: m.layer,
          result: m.result
        }, null, 8, ["layer", "result"]),
        g("div", Ze, j(y()), 1)
      ], 10, Ve)), [
        [D, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), We = ["content"], Xe = /* @__PURE__ */ G({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(m, { emit: E }) {
    const { t: l } = W(), v = ce(), y = b(), h = () => {
      y.value._tippy.hide();
    }, p = (r) => {
      r.key === "Tab" && y.value?.matches(":focus") && y.value._tippy.show();
    }, D = E, z = m, e = b(""), u = b([]), o = b(!1), n = b(!1), f = (r) => v.getLayerByUid(r), c = (r) => {
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
        V(z, () => {
          e.value = z.selected;
        })
      );
    }), re(() => {
      y.value?.addEventListener("blur", h), y.value?.addEventListener("keyup", p);
    }), te(() => {
      u.value.forEach((r) => r()), y.value?.removeEventListener("blur", h), y.value?.removeEventListener("keyup", p);
    }), (r, T) => {
      const $ = q("focus-item"), F = q("focus-list"), I = q("tippy");
      return A((s(), a("div", {
        class: Z(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": o.value }]),
        onMouseover: _,
        onMouseleave: B,
        onFocus: S,
        onBlur: he(H, ["self"]),
        content: L(l)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: y
      }, [
        (s(!0), a(X, null, Q(z.results, (O, t) => (s(), a("div", {
          class: "flex justify-start relative",
          key: t
        }, [
          A((s(), Y(Ye, {
            key: O.uid,
            layer: f(O.uid),
            result: O,
            selected: O.uid === e.value,
            onClick: (d) => c(O.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [$]
          ])
        ]))), 128))
      ], 42, We)), [
        [F],
        [I, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), Je = { class: "inline font-bold" }, Ke = ["innerHTML"], Qe = /* @__PURE__ */ G({
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
  setup(m) {
    const { t: E } = W(), l = se("iApi"), v = m, y = (e, u, o, n) => {
      const f = e.find((c) => c[u].toLowerCase() === o.toLowerCase());
      f && delete n[f.name];
    }, h = () => {
      const e = Object.assign({}, v.identifyData.data);
      y(v.fields, "type", "geometry", e), l.ui.exposeOids || y(v.fields, "type", "oid", e), l.ui.exposeMeasurements || (y(v.fields, "name", "shape_length", e), y(v.fields, "name", "shape_area", e));
      const u = {};
      v.fields.forEach((n) => {
        const f = v.fixtureFields?.find((c) => n.name === c.field);
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
            value: typeof c == "number" ? l.ui.formatNumber(c) : c,
            alias: f.name,
            type: f.type
          };
        }
      });
      for (const [n] of Object.entries(o))
        l.ui.isPlainText(o[n].value) && (o[n].value = l.ui.escapeHtml(o[n].value));
      return o;
    }, p = (e, u, o) => {
      switch (o) {
        case "date":
          return z(e);
        default:
          return D(e, u);
      }
    }, D = (e, u) => {
      if (!e)
        return e;
      if (e.trim().match(/\.(jpeg|jpg|gif|png)$/) || e.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${e}" alt="${E("details.item.alert.defaultAltText", { alias: u })}" />`;
      const o = "underline text-blue-700 break-all", n = document.createElement("div");
      return n.innerHTML = e.trim(), n.firstElementChild?.tagName == "A" ? (n.firstElementChild.className = o, n.innerHTML) : _e(e, {
        className: o,
        target: "_blank",
        validate: {
          url: (c) => /^https?:\/\//.test(c)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, z = (e) => {
      const u = parseInt(e);
      return isNaN(u) ? e : new Date(u).toISOString().split("T")[0];
    };
    return (e, u) => (s(), a("div", null, [
      (s(!0), a(X, null, Q(h(), (o, n, f) => (s(), a("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: f
      }, [
        g("span", Je, j(o.alias), 1),
        u[0] || (u[0] = g("span", { class: "flex-auto" }, null, -1)),
        g("span", {
          class: "inline ml-8",
          innerHTML: p(o.value, o.alias, o.type)
        }, null, 8, Ke)
      ]))), 128))
    ]));
  }
}), et = ["innerHTML"], tt = { key: 1 }, st = /* @__PURE__ */ G({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(m) {
    const { t: E } = W();
    return (l, v) => m.identifyData ? (s(), a("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: m.identifyData.data.data ?? m.identifyData.data
    }, null, 8, et)) : (s(), a("div", tt, j(L(E)("details.layers.results.empty")), 1));
  }
}), lt = { class: "relative flex flex-grow truncate" }, at = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, it = { class: "flex p-8 items-center" }, nt = ["innerHTML"], ot = {
  key: 1,
  class: "symbologyIcon p-6"
}, rt = ["content", "innerHTML", "tabindex"], ut = {
  key: 1,
  class: "flex p-6 flex-grow"
}, ct = {
  key: 2,
  class: "zoomButton text-center p-3"
}, dt = ["content", "aria-label"], vt = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, mt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, pt = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, ft = ["innerHTML"], ye = /* @__PURE__ */ G({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(m) {
    const E = ce(), l = m, v = se("iApi"), y = b([]), h = le(), { t: p } = W(), D = b(!1), z = b(""), e = b("none"), u = b(), o = () => E.getLayerByUid(l.uid), n = w(() => h.properties), f = w(() => h.defaultTemplates), c = w(() => o()?.supportsFeatures ?? !1), _ = w(() => o()?.mapLayer ?? !1), B = w(() => {
      const t = o();
      let d = t && l.data.loaded ? t.nameValue(l.data.data) : v.$i18n.t("details.items.title");
      return v.ui.isPlainText(d) && (d = v.ui.escapeHtml(d)), d;
    }), S = (t) => {
      if (typeof t == "string") {
        const d = "underline text-blue-700 break-all", C = document.createElement("div");
        return C.innerHTML = t.trim(), C.firstElementChild?.tagName == "A" ? (C.firstElementChild.className = d, C.innerHTML) : _e(t, {
          className: d,
          target: "_blank",
          validate: {
            url: (x) => /^https?:\/\//.test(x)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return t;
    }, H = () => {
      I("none"), l.data.loaded ? r() : l.data.load().then(() => {
        r();
      });
    }, r = () => {
      if (z.value = "", !(l.data && l.data.loaded))
        return;
      const t = o();
      if (t === void 0) {
        console.warn(`could not find layer for uid ${l.uid} during icon lookup`);
        return;
      }
      if (t.supportsFeatures) {
        const d = t.oidField;
        t.getIcon(l.data.data[d]).then((C) => {
          z.value = C;
        });
      }
    }, T = w(() => {
      const t = o(), d = t && n.value[t.id] && n.value[t.id].template;
      if (d) {
        if (typeof pe(d) != "string")
          return d;
        ne(
          () => v.notify.show(
            Me.WARNING,
            v.$i18n.t("details.template.notFound", { layer: d })
          )
        );
      }
      return f.value && f.value[l.data.format] ? f.value[l.data.format] : c.value ? Qe : st;
    }), $ = w(() => c.value ? o()?.fields || [] : []), F = w(() => {
      const t = o();
      if (t && n.value[t.id] && n.value[t.id].fields)
        return n.value[t.id].fields;
    }), I = (t) => {
      t === "zoomed" || t === "error" ? setTimeout(() => {
        e.value = t, u.value?._tippy.show(), setTimeout(() => {
          u.value?._tippy.hide(), e.value = "none";
        }, 3e3);
      }, 300) : e.value = t;
    }, O = () => {
      if (e.value !== "none")
        return;
      I("zooming");
      const t = o();
      if (t === void 0 || !t.isLoaded) {
        console.warn(`Could not find layer for uid ${l.uid} during zoom geometry lookup`), I("error");
        return;
      }
      if (!l.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), I("error");
        return;
      }
      const d = l.data.data[t.oidField], C = () => {
        const M = { getGeom: !0 };
        t.getGraphic(d, M).then((x) => {
          x.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${d}`), I("error")) : (v.geo.map.zoomMapTo(x.geometry), I("zoomed"), v.updateAlert(v.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          I("error");
        });
      };
      t.layerType === Ce.FEATURE && t.geomType !== ze.POINT ? t.getGraphicExtent(d).then((M) => {
        v.geo.map.zoomMapTo(M), I("zoomed"), v.updateAlert(v.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        C();
      }) : C();
    };
    return ee(() => {
      y.value.push(
        V(
          l,
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
      y.value.forEach((t) => t());
    }), (t, d) => {
      const C = q("truncate"), M = q("tippy");
      return s(), a(X, null, [
        g("div", lt, [
          c.value ? (s(), a("div", at, [
            g("div", it, [
              m.data.loaded && z.value ? (s(), a("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: z.value
              }, null, 8, nt)) : (s(), a("div", ot, d[3] || (d[3] = [
                g("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            m.data.loaded ? A((s(), a("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: B.value,
              innerHTML: S(B.value),
              onTouchstart: d[0] || (d[0] = (x) => D.value = !0),
              onTouchend: d[1] || (d[1] = (x) => D.value = !1),
              tabindex: m.inList ? -1 : 0
            }, null, 40, rt)), [
              [C, {
                options: {
                  placement: "top-start",
                  // Offset more for touch devices so tooltip is visible above finger
                  offset: () => D.value ? [0, 25] : [0, 0]
                }
              }]
            ]) : (s(), a("div", ut, j(L(p)("details.loading")), 1)),
            m.data.loaded ? (s(), a("span", ct, [
              _.value ? A((s(), a("button", {
                key: 0,
                type: "button",
                content: L(p)(`details.item.zoom${e.value === "none" ? "" : `.${e.value}`}`),
                "aria-label": L(p)(`grid.cells.zoom${e.value === "none" ? "" : `.${e.value}`}`),
                ref_key: "zoomButton",
                ref: u,
                onClick: d[2] || (d[2] = (x) => {
                  x.stopPropagation(), O();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                e.value === "zooming" ? (s(), a("div", vt)) : e.value === "zoomed" ? (s(), a("svg", mt, d[4] || (d[4] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : e.value === "error" ? (s(), a("svg", pt, d[5] || (d[5] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (s(), a("span", {
                  key: 3,
                  innerHTML: L(v).ui.getZoomIcon()
                }, null, 8, ft))
              ], 8, dt)), [
                [M, { placement: "bottom" }]
              ]) : N("", !0)
            ])) : N("", !0)
          ])) : N("", !0)
        ]),
        m.open ? (s(), Y(pe(T.value), {
          key: 0,
          identifyData: m.data,
          fields: $.value,
          fixtureFields: F.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : N("", !0)
      ], 64);
    };
  }
}), yt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, gt = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, ht = { for: "toggle" }, _t = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, bt = { class: "flex" }, kt = ["aria-label"], xt = ["content", "aria-label", "disabled"], Lt = { class: "px-3 text-center flex-grow" }, wt = ["content", "aria-label", "disabled"], Tt = { key: 3 }, $t = { key: 0 }, Et = ["content"], It = ["onClick"], Mt = {
  key: 1,
  class: "text-center"
}, Ct = {
  key: 4,
  class: "p-5"
}, zt = /* @__PURE__ */ G({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  emits: ["item-selected"],
  setup(m, { emit: E }) {
    const l = b(), v = () => {
      l.value._tippy.hide();
    }, y = (i) => {
      i.key === "Tab" && l.value?.matches(":focus") && l.value._tippy.show();
    }, h = se("iApi"), p = le(), D = ce(), z = E, e = m, { t: u } = W(), o = b(!1), n = b(h.fixture.get("details")), f = b(!0), c = b(!1), _ = b(0), B = b(20), S = b([]), H = b([]), r = w(() => p.activeGreedy), T = w(() => p.properties), $ = w(() => _.value + B.value), F = () => D.getLayerByUid(e.uid), I = () => e.results.find((i) => i.uid === e.uid), O = w(() => I()?.loaded ?? !1), t = w(() => I()?.requestTime), d = w(
      () => o.value && (!c.value && x().length > 1 || c.value && x().length > B.value)
    ), C = w(() => {
      const i = F();
      return i && T.value[i.id] && T.value[i.id].name ? T.value[i.id].name : i?.name ?? "";
    }), M = w(() => e.uid), x = () => {
      const i = I();
      return i ? i.items : [];
    }, U = w(() => x()[_.value]), de = w(() => {
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
          const R = I();
          R && await R.loading;
        }
        const k = x();
        if (O.value && k.length > 0) {
          if (c.value)
            n.value.hilightDetailsItems(k.slice(_.value, $.value), e.uid);
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
    }, Te = (i) => {
      const k = _.value;
      _.value = i, c.value = !1, k === i && P(), z("item-selected");
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
      ), l.value?.addEventListener("blur", v), l.value?.addEventListener("keyup", y);
    }), ee(() => {
      H.value.push(
        V(
          U,
          () => {
            c.value || (ke(), U.value === void 0 && n.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), H.value.push(
        V(
          M,
          () => {
            const i = e.uid;
            if (c.value && i) {
              const k = I();
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
        V(t, () => {
          _.value = 0, c.value && P(!0);
        })
      ), H.value.push(
        V(
          () => e.uid,
          () => {
            _.value = 0;
          }
        )
      );
    }), te(() => {
      l.value?.removeEventListener("blur", v), l.value?.removeEventListener("keyup", y);
    }), (i, k) => {
      const R = q("truncate"), ae = q("tippy"), $e = q("focus-item"), Ee = q("focus-list");
      return O.value && r.value === 0 ? (s(), a("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: ge(m.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        o.value ? A((s(), a("h1", yt, [
          oe(j(C.value), 1)
        ])), [
          [R, { options: { placement: "top-start" } }]
        ]) : N("", !0),
        de.value ? (s(), a("div", gt, [
          g("label", ht, j(L(u)("details.togglehilight.title")), 1),
          ie(De, {
            config: {
              value: f.value,
              disabled: !1
            },
            onToggled: be
          }, null, 8, ["config"])
        ])) : N("", !0),
        d.value ? (s(), a("div", _t, [
          g("div", bt, [
            c.value ? N("", !0) : (s(), a("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(u)("details.item.see.list"),
              onClick: k[0] || (k[0] = (J) => xe())
            }, j(L(u)("details.item.see.list")), 9, kt)),
            g("div", {
              class: Z(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": c.value }])
            }, [
              A((s(), a("button", {
                type: "button",
                content: L(u)(c.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: k[1] || (k[1] = (J) => ve(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(u)(c.value ? "details.items.previous" : "details.item.previous.item"),
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
              ]), 8, xt)), [
                [ae, { placement: "top" }]
              ]),
              g("span", Lt, j(c.value ? L(u)("details.items.range", [
                _.value + 1,
                Math.min($.value, x().length),
                x().length
              ]) : L(u)("details.item.count", [_.value + 1, x().length])), 1),
              A((s(), a("button", {
                type: "button",
                content: L(u)(c.value ? "details.items.next" : "details.item.next.item"),
                onClick: k[2] || (k[2] = (J) => ve(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(u)(c.value ? "details.items.next" : "details.item.next.item"),
                disabled: !c.value && _.value === x().length - 1 || c.value && $.value >= x().length
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
              ]), 8, wt)), [
                [ae, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : N("", !0),
        o.value ? (s(), a("div", Tt, [
          x().length > 0 ? (s(), a("div", $t, [
            c.value ? A((s(), a("div", {
              key: 0,
              class: "flex flex-col",
              content: L(u)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: l
            }, [
              (s(!0), a(X, null, Q(x().slice(_.value, $.value), (J, me) => A((s(), a("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: me,
                onClick: (jt) => Te(_.value + me)
              }, [
                ie(ye, {
                  data: J,
                  uid: m.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, It)), [
                [$e, "show-truncate"]
              ])), 128))
            ], 8, Et)), [
              [Ee],
              [ae, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (s(), Y(ye, {
              key: 1,
              data: U.value,
              uid: m.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (s(), a("div", Mt, j(L(u)("details.layers.results.empty.currentLayer")), 1))
        ])) : (s(), a("div", Ct, j(L(u)("details.item.no.data")), 1))
      ], 4)) : (s(), a("div", {
        key: 1,
        class: Z(["flex justify-center py-10 items-center", m.results.length > 1 ? "ml-42" : ""])
      }, [
        k[5] || (k[5] = g("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        oe(" " + j(L(u)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Dt = /* @__PURE__ */ ue(zt, [["__scopeId", "data-v-60b1b8a2"]]), St = { class: "relative h-full" }, Ht = /* @__PURE__ */ G({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(m) {
    const { t: E } = W(), l = se("iApi"), v = le(), y = b([]), h = b([]), p = b([]), D = b(!1), z = b(null), e = b(""), u = w(() => v.activeGreedy), o = w(() => v.payload), n = w(() => v.properties), f = (r) => {
      e.value = r;
    }, c = (r) => p.value.find((T) => T.uid === r), _ = (r) => {
      r !== void 0 && (v.activeGreedy = r.length === 0 ? 0 : r[0].requestTime, p.value = r, B(r));
    }, B = (r) => {
      if (e.value) {
        const T = c(e.value);
        T ? T.loading.then(() => {
          T.requestTime === u.value && (T.items.length > 0 ? H(!1) : S(r));
        }) : S(r);
      } else
        S(r);
    }, S = (r, T) => {
      let $;
      if (T)
        $ = T;
      else {
        const t = v.properties, d = r.map((M) => [
          t[M.layerId]?.priority ?? 50,
          M.layerId
        ]), C = new Set(d.map((M) => M[0]));
        $ = [], C.forEach((M) => {
          const x = d.filter((U) => U[0] === M).map((U) => U[1]);
          $.push([M, x]);
        }), $.sort((M, x) => x[0] - M[0]);
      }
      if ($.length === 0) {
        o.value.length ? H(!0) : ne().then(() => {
          H(!0);
        });
        return;
      }
      const F = $[$.length - 1][1], I = r.filter((t) => F.includes(t.layerId)).map(
        (t) => t.loading.then(() => t.items.length > 0 ? Promise.resolve(t) : Promise.reject())
      ), O = r.length === 0 ? 0 : r[0].requestTime;
      Promise.any(I).then((t) => {
        t.requestTime === u.value && (e.value = t.uid, H(!1));
      }).catch(() => {
        O === u.value && ($.pop(), S(r, $));
      });
    }, H = (r) => {
      v.activeGreedy = 0, D.value = r;
    };
    return ee(() => {
      h.value.push(
        V(
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
      y.value.forEach((r) => l.event.off(r)), h.value.forEach((r) => r());
    }), (r, T) => {
      const $ = Ie("panel-screen");
      return s(), Y($, { panel: m.panel }, {
        header: fe(() => [
          oe(j(
            // Show different titles based on what requested the panel
            L(v).origin === "toggleEvent" ? L(E)("details.layers.title.gridOrigin") : L(E)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: fe(() => [
          g("div", St, [
            p.value.length > 1 ? (s(), Y(Xe, {
              key: 0,
              results: p.value,
              detailsProperties: n.value,
              selected: e.value,
              onSelectionChanged: f
            }, null, 8, ["results", "detailsProperties", "selected"])) : N("", !0),
            g("div", {
              class: "detailsContentSection overflow-y-auto h-full",
              ref_key: "detailsPanel",
              ref: z
            }, [
              D.value ? (s(), a("div", {
                key: 1,
                class: Z(["text-center", { "ml-42": p.value.length > 1 }])
              }, j(p.value.length >= 1 ? L(E)("details.layers.results.empty") : L(E)("details.layers.results.empty.noLayers")), 3)) : (s(), Y(Dt, {
                key: 0,
                uid: e.value,
                results: p.value,
                onItemSelected: T[0] || (T[0] = () => ne(() => z.value?.scrollTo({ top: 0 })))
              }, null, 8, ["uid", "results"]))
            ], 512)
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), bs = /* @__PURE__ */ ue(Ht, [["__scopeId", "data-v-e4b92b97"]]);
export {
  bs as default
};
