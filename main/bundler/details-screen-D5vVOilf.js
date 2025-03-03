import { defineComponent as F, ref as w, onMounted as ae, openBlock as t, createElementBlock as a, createElementVNode as g, normalizeClass as U, Fragment as Z, renderList as K, normalizeStyle as ve, createCommentVNode as j, toDisplayString as S, computed as M, resolveDirective as q, withDirectives as A, withModifiers as me, createVNode as se, onBeforeMount as Q, watch as P, onBeforeUnmount as W, unref as L, createBlock as R, inject as X, resolveDynamicComponent as we, createTextVNode as le, resolveComponent as $e, withCtx as ce } from "vue";
import { _ as ie, e as ee, N as ne, L as Te, O as Me, G as J } from "./main-lcO-efBh.js";
import { useI18n as V } from "vue-i18n";
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
import pe from "linkify-html";
import { T as Ee } from "./toggle-switch-control-DkJMxVM5.js";
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "@popperjs/core";
import "throttle-debounce";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const Ie = {
  key: 0,
  class: "relative"
}, Ce = {
  key: 0,
  class: "relative"
}, ze = ["innerHTML"], De = ["src"], He = {
  key: 1,
  class: "w-32 h-32"
}, Se = { class: "symbologyIcon" }, je = ["innerHTML"], Oe = ["src"], Be = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ne = {
  key: 0,
  class: "px-5"
}, Ae = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, qe = /* @__PURE__ */ F({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(v) {
    const b = v, i = w([]);
    return ae(() => {
      i.value = b.layer.legend;
    }), (c, m) => v.result.loaded ? (t(), a("div", Ie, [
      g("div", {
        class: U(v.result.items.length === 0 ? "opacity-50" : "")
      }, [
        i.value.length > 1 ? (t(), a("div", Ce, [
          (t(!0), a(Z, null, K(i.value.slice(0, 3).reverse(), ($, f) => (t(), a("div", {
            class: U(["absolute", [f == 0 ? "symbol-0" : f == 1 ? "left-3" : "left-6"]]),
            style: ve({ "z-index": 3 - f }),
            key: f
          }, [
            i.value[f].svgcode ? (t(), a("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: i.value[f].svgcode
            }, null, 8, ze)) : i.value[f].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: i.value[f].imgUrl
            }, null, 8, De)) : j("", !0)
          ], 6))), 128))
        ])) : i.value.length > 0 ? (t(), a("div", He, [
          g("div", Se, [
            i.value[0].svgcode ? (t(), a("span", {
              key: 0,
              innerHTML: i.value[0].svgcode
            }, null, 8, je)) : i.value[0].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: i.value[0].imgUrl
            }, null, 8, Oe)) : j("", !0)
          ])
        ])) : j("", !0)
      ], 2),
      g("div", Be, [
        v.result.loaded ? (t(), a("div", Ne, S(v.result.items.length), 1)) : j("", !0)
      ])
    ])) : (t(), a("div", Ae, m[0] || (m[0] = [
      g("div", { class: "symbologyIcon h-32 w-32" }, [
        g("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Fe = /* @__PURE__ */ ie(qe, [["__scopeId", "data-v-496d788d"]]), Ge = ["content"], Pe = { class: "symbologyLayerName truncate" }, Ue = /* @__PURE__ */ F({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(v) {
    const b = ee(), i = M(() => b.properties), c = v, m = () => {
      const $ = c.layer;
      return $ && i.value[$.id] && i.value[$.id].name ? i.value[$.id].name : $?.name ?? "";
    };
    return ($, f) => {
      const _ = q("tippy");
      return A((t(), a("button", {
        class: U(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", v.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: f[0] || (f[0] = me(() => {
        }, ["stop"])),
        content: m()
      }, [
        se(Fe, {
          class: "symbStack w-32 h-32 mr-10",
          layer: v.layer,
          result: v.result
        }, null, 8, ["layer", "result"]),
        g("div", Pe, S(m()), 1)
      ], 10, Ge)), [
        [_, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Re = ["content"], Ve = /* @__PURE__ */ F({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(v, { emit: b }) {
    const { t: i } = V(), c = ne(), m = w(), $ = () => {
      m.value._tippy.hide();
    }, f = (h) => {
      h.key === "Tab" && m.value?.matches(":focus") && m.value._tippy.show();
    }, _ = b, u = v, r = w(""), d = w([]), n = w(!1), e = w(!1), o = (h) => c.getLayerByUid(h), E = (h) => {
      r.value = h, _("selection-changed", h), n.value = !1;
    }, O = () => {
      e.value || setTimeout(() => {
        n.value = e.value;
      }, 500), e.value = !0;
    }, D = () => {
      n.value = e.value = !1;
    }, p = () => {
      e.value || (n.value = !0), e.value = !0;
    }, I = () => {
      n.value = e.value = !1;
    };
    return Q(() => {
      d.value.push(
        P(u, () => {
          r.value = u.selected;
        })
      );
    }), ae(() => {
      m.value?.addEventListener("blur", $), m.value?.addEventListener("keyup", f);
    }), W(() => {
      d.value.forEach((h) => h()), m.value?.removeEventListener("blur", $), m.value?.removeEventListener("keyup", f);
    }), (h, B) => {
      const N = q("focus-item"), z = q("focus-list"), C = q("tippy");
      return A((t(), a("div", {
        class: U(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": n.value }]),
        onMouseover: O,
        onMouseleave: D,
        onFocus: p,
        onBlur: me(I, ["self"]),
        content: L(i)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: m
      }, [
        (t(!0), a(Z, null, K(u.results, (s, y) => (t(), a("div", {
          class: "flex justify-start relative",
          key: y
        }, [
          A((t(), R(Ue, {
            key: s.uid,
            layer: o(s.uid),
            result: s,
            selected: s.uid === r.value,
            onClick: (k) => E(s.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [N]
          ])
        ]))), 128))
      ], 42, Re)), [
        [z],
        [C, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), Ze = { class: "inline font-bold" }, Ye = ["innerHTML"], Je = /* @__PURE__ */ F({
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
    const { t: b } = V(), i = X("iApi"), c = v, m = (r, d, n, e) => {
      const o = r.find((E) => E[d].toLowerCase() === n.toLowerCase());
      o && delete e[o.name];
    }, $ = () => {
      const r = Object.assign({}, c.identifyData.data);
      m(c.fields, "type", "geometry", r), i?.ui.exposeOids || m(c.fields, "type", "oid", r), i?.ui.exposeMeasurements || (m(c.fields, "name", "shape_length", r), m(c.fields, "name", "shape_area", r));
      const d = {};
      c.fields.forEach((e) => {
        const o = c.fixtureFields?.find((E) => e.name === E.field);
        d[e.name] = {
          name: o?.alias || e.alias || e.name,
          type: e.type,
          visible: o?.visible ?? !0
        };
      });
      const n = {};
      Object.keys(r).forEach((e) => {
        const o = d[e];
        if (o && o.visible) {
          const E = r[e];
          n[e] = {
            value: typeof E == "number" ? i?.ui.formatNumber(E) : E,
            alias: o.name,
            type: o.type
          };
        }
      });
      for (const [e] of Object.entries(n))
        i.ui.isPlainText(n[e].value) && (n[e].value = i.ui.escapeHtml(n[e].value));
      return n;
    }, f = (r, d, n) => {
      switch (n) {
        case "date":
          return u(r);
        default:
          return _(r, d);
      }
    }, _ = (r, d) => {
      if (!r)
        return r;
      if (r.trim().match(/\.(jpeg|jpg|gif|png)$/) || r.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${r}" alt="${b("details.item.alert.defaultAltText", { alias: d })}" />`;
      const n = "underline text-blue-700 break-all", e = document.createElement("div");
      return e.innerHTML = r.trim(), e.firstElementChild?.tagName == "A" ? (e.firstElementChild.className = n, e.innerHTML) : pe(r, {
        className: n,
        target: "_blank",
        validate: {
          url: (E) => /^https?:\/\//.test(E)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, u = (r) => {
      const d = parseInt(r);
      return isNaN(d) ? r : new Date(d).toISOString().split("T")[0];
    };
    return (r, d) => (t(), a("div", null, [
      (t(!0), a(Z, null, K($(), (n, e, o) => (t(), a("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: o
      }, [
        g("span", Ze, S(n.alias), 1),
        d[0] || (d[0] = g("span", { class: "flex-auto" }, null, -1)),
        g("span", {
          class: "inline",
          innerHTML: f(n.value, n.alias, n.type)
        }, null, 8, Ye)
      ]))), 128))
    ]));
  }
}), Ke = ["innerHTML"], Qe = { key: 1 }, We = /* @__PURE__ */ F({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: b } = V();
    return (i, c) => v.identifyData ? (t(), a("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: v.identifyData.data.data ?? v.identifyData.data
    }, null, 8, Ke)) : (t(), a("div", Qe, S(L(b)("details.layers.results.empty")), 1));
  }
}), Xe = { class: "relative flex flex-grow truncate" }, et = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, tt = { class: "flex p-8 items-center" }, st = ["innerHTML"], lt = {
  key: 1,
  class: "symbologyIcon p-6"
}, at = ["content", "innerHTML", "tabindex"], it = {
  key: 1,
  class: "flex p-6 flex-grow"
}, nt = {
  key: 2,
  class: "zoomButton text-center p-3"
}, ot = ["content", "aria-label"], rt = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, ut = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, ct = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, dt = ["innerHTML"], de = /* @__PURE__ */ F({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(v) {
    const b = ne(), i = v, c = X("iApi"), m = w([]), $ = ee(), { t: f } = V(), _ = w(""), u = w("none"), r = w(), d = () => b.getLayerByUid(i.uid), n = M(() => $.properties), e = M(() => $.defaultTemplates), o = M(() => d()?.supportsFeatures ?? !1), E = M(() => d()?.mapLayer ?? !1), O = M(() => {
      const s = d()?.nameField;
      let y = s && i.data.loaded ? i.data.data[s] : c.$i18n.t("details.items.title");
      return c.ui.isPlainText(y) && (y = c.ui.escapeHtml(y)), y;
    }), D = (s) => {
      if (typeof s == "string") {
        const y = "underline text-blue-700 break-all", k = document.createElement("div");
        return k.innerHTML = s.trim(), k.firstElementChild?.tagName == "A" ? (k.firstElementChild.className = y, k.innerHTML) : pe(s, {
          className: y,
          target: "_blank",
          validate: {
            url: (H) => /^https?:\/\//.test(H)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return s;
    }, p = () => {
      z("none"), i.data.loaded ? I() : i.data.load().then(() => {
        I();
      });
    }, I = () => {
      if (_.value = "", !(i.data && i.data.loaded))
        return;
      const s = d();
      if (s === void 0) {
        console.warn(`could not find layer for uid ${i.uid} during icon lookup`);
        return;
      }
      if (s.supportsFeatures) {
        const y = s.oidField;
        s.getIcon(i.data.data[y]).then((k) => {
          _.value = k;
        });
      }
    }, h = M(() => {
      const s = d();
      return s && n.value[s.id] && n.value[s.id].template ? n.value[s.id].template : e.value && e.value[i.data.format] ? e.value[i.data.format] : o.value ? Je : We;
    }), B = M(() => o.value ? d()?.fields || [] : []), N = M(() => {
      const s = d();
      if (s && n.value[s.id] && n.value[s.id].fields)
        return n.value[s.id].fields;
    }), z = (s) => {
      s === "zoomed" || s === "error" ? setTimeout(() => {
        u.value = s, r.value?._tippy.show(), setTimeout(() => {
          r.value?._tippy.hide(), u.value = "none";
        }, 3e3);
      }, 300) : u.value = s;
    }, C = () => {
      if (u.value !== "none")
        return;
      z("zooming");
      const s = d();
      if (s === void 0 || !s.isLoaded) {
        console.warn(`Could not find layer for uid ${i.uid} during zoom geometry lookup`), z("error");
        return;
      }
      if (!i.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), z("error");
        return;
      }
      const y = i.data.data[s.oidField], k = () => {
        const T = { getGeom: !0 };
        s.getGraphic(y, T).then((H) => {
          H.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${y}`), z("error")) : (c.geo.map.zoomMapTo(H.geometry), z("zoomed"), c.updateAlert(c.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          z("error");
        });
      };
      s.layerType === Te.FEATURE && s.geomType !== Me.POINT ? s.getGraphicExtent(y).then((T) => {
        c.geo.map.zoomMapTo(T), z("zoomed"), c.updateAlert(c.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        k();
      }) : k();
    };
    return Q(() => {
      m.value.push(
        P(
          i,
          () => {
            p();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), W(() => {
      m.value.forEach((s) => s());
    }), (s, y) => {
      const k = q("truncate"), T = q("tippy");
      return t(), a(Z, null, [
        g("div", Xe, [
          o.value ? (t(), a("div", et, [
            g("div", tt, [
              v.data.loaded && _.value ? (t(), a("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: _.value
              }, null, 8, st)) : (t(), a("div", lt, y[1] || (y[1] = [
                g("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            v.data.loaded ? A((t(), a("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: O.value,
              innerHTML: D(O.value),
              tabindex: v.inList ? -1 : 0
            }, null, 8, at)), [
              [k, {
                options: { placement: "right" }
              }]
            ]) : (t(), a("div", it, S(L(f)("details.loading")), 1)),
            v.data.loaded ? (t(), a("span", nt, [
              E.value ? A((t(), a("button", {
                key: 0,
                type: "button",
                content: L(f)(`details.item.zoom${u.value === "none" ? "" : `.${u.value}`}`),
                "aria-label": L(f)(`grid.cells.zoom${u.value === "none" ? "" : `.${u.value}`}`),
                ref_key: "zoomButton",
                ref: r,
                onClick: y[0] || (y[0] = (H) => {
                  H.stopPropagation(), C();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                u.value === "zooming" ? (t(), a("div", rt)) : u.value === "zoomed" ? (t(), a("svg", ut, y[2] || (y[2] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : u.value === "error" ? (t(), a("svg", ct, y[3] || (y[3] = [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (t(), a("span", {
                  key: 3,
                  innerHTML: L(c).ui.getZoomIcon()
                }, null, 8, dt))
              ], 8, ot)), [
                [T, { placement: "bottom" }]
              ]) : j("", !0)
            ])) : j("", !0)
          ])) : j("", !0)
        ]),
        v.open ? (t(), R(we(h.value), {
          key: 0,
          identifyData: v.data,
          fields: B.value,
          fixtureFields: N.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : j("", !0)
      ], 64);
    };
  }
}), vt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, mt = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, pt = { for: "toggle" }, ft = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, yt = { class: "flex" }, ht = ["aria-label"], gt = ["content", "aria-label", "disabled"], _t = { class: "px-3 text-center flex-grow" }, bt = ["content", "aria-label", "disabled"], kt = { key: 3 }, xt = { key: 0 }, Lt = ["content"], wt = ["onClick"], $t = {
  key: 1,
  class: "text-center"
}, Tt = {
  key: 4,
  class: "p-5"
}, Mt = /* @__PURE__ */ F({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(v) {
    const b = w(), i = () => {
      b.value._tippy.hide();
    }, c = (l) => {
      l.key === "Tab" && b.value?.matches(":focus") && b.value._tippy.show();
    }, m = X("iApi"), $ = ee(), f = ne(), _ = v, { t: u } = V(), r = w(!1), d = w(m.fixture.get("details")), n = w(!0), e = w(!1), o = w(0), E = w(20), O = w([]), D = w([]), p = M(() => $.activeGreedy), I = M(() => $.properties), h = M(() => o.value + E.value), B = () => f.getLayerByUid(_.uid), N = () => _.results.find((l) => l.uid === _.uid), z = M(() => N()?.loaded ?? !1), C = M(() => N()?.requestTime), s = M(
      () => r.value && (!e.value && T().length > 1 || e.value && T().length > E.value)
    ), y = M(() => {
      const l = B();
      return l && I.value[l.id] && I.value[l.id].name ? I.value[l.id].name : l?.name ?? "";
    }), k = M(() => _.uid), T = () => {
      const l = N();
      return l ? l.items : [];
    }, H = M(() => T()[o.value]), oe = M(() => {
      if (d.value.hasHilighter()) {
        const l = B();
        if (l)
          return l.mapLayer && l.supportsFeatures;
      }
      return !1;
    }), fe = (l) => {
      n.value = l, $.hilightToggle = l, G();
    }, ye = () => {
      const l = B();
      o.value = o.value ?? 0, n.value = $.hilightToggle ?? n.value, e.value = !1, r.value = !!l, G();
    }, re = (l) => {
      e.value ? (o.value += l * E.value, G()) : o.value += l;
    }, G = () => {
      const l = T();
      if (n.value && z.value && l.length > 0 && oe.value)
        if (e.value)
          d.value.hilightDetailsItems(l.slice(o.value, h.value), _.uid);
        else {
          const x = l[o.value];
          x && d.value.hilightDetailsItems([x], _.uid);
        }
      else
        d.value.removeDetailsHilight();
    }, he = () => {
      e.value = !0, o.value = Math.floor(o.value / E.value) * E.value, G();
    }, ge = () => {
      d.value.removeDetailsHilight();
    }, _e = () => {
      d.value.removeDetailsHilight();
    }, be = (l) => {
      const x = o.value;
      o.value = l, e.value = !1, x === l && G();
    };
    return ae(() => {
      O.value.push(
        m.event.on(J.LAYER_REMOVE, (l) => {
          const x = m.panel.get("details");
          _.uid === l.uid && x && x.close();
        })
      ), O.value.push(
        m.event.on(J.PANEL_CLOSED, (l) => {
          l.id === "details" && ge();
        })
      ), O.value.push(
        m.event.on(J.PANEL_MINIMIZED, (l) => {
          l.id === "details" && _e();
        })
      ), O.value.push(
        m.event.on(J.MAP_BASEMAPCHANGE, (l) => {
          n.value && l.schemaChanged && G();
        })
      ), b.value?.addEventListener("blur", i), b.value?.addEventListener("keyup", c);
    }), Q(() => {
      D.value.push(
        P(
          H,
          () => {
            e.value || (ye(), H.value === void 0 && d.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), D.value.push(
        P(
          k,
          () => {
            const l = _.uid;
            if (e.value && l) {
              const x = N();
              x && x.loading.then(() => {
                _.uid === l && e.value && G();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), D.value.push(
        P(C, () => {
          o.value = 0;
        })
      ), D.value.push(
        P(
          () => _.uid,
          () => {
            o.value = 0;
          }
        )
      );
    }), W(() => {
      D.value.forEach((l) => l()), O.value.forEach((l) => m.event.off(l)), b.value?.removeEventListener("blur", i), b.value?.removeEventListener("keyup", c);
    }), (l, x) => {
      const ke = q("truncate"), te = q("tippy"), xe = q("focus-item"), Le = q("focus-list");
      return z.value && p.value === 0 ? (t(), a("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: ve(v.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        r.value ? A((t(), a("h1", vt, [
          le(S(y.value), 1)
        ])), [
          [ke, { options: { placement: "top-start" } }]
        ]) : j("", !0),
        oe.value ? (t(), a("div", mt, [
          g("label", pt, S(L(u)("details.togglehilight.title")), 1),
          se(Ee, {
            config: {
              value: n.value,
              disabled: !1
            },
            onToggled: fe
          }, null, 8, ["config"])
        ])) : j("", !0),
        s.value ? (t(), a("div", ft, [
          g("div", yt, [
            e.value ? j("", !0) : (t(), a("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(u)("details.item.see.list"),
              onClick: x[0] || (x[0] = (Y) => he())
            }, S(L(u)("details.item.see.list")), 9, ht)),
            g("div", {
              class: U(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": e.value }])
            }, [
              A((t(), a("button", {
                type: "button",
                content: L(u)(e.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: x[1] || (x[1] = (Y) => re(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(u)(e.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: o.value === 0
              }, x[3] || (x[3] = [
                g("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  g("g", null, [
                    g("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, gt)), [
                [te, { placement: "top" }]
              ]),
              g("span", _t, S(e.value ? L(u)("details.items.range", [
                o.value + 1,
                Math.min(h.value, T().length),
                T().length
              ]) : L(u)("details.item.count", [o.value + 1, T().length])), 1),
              A((t(), a("button", {
                type: "button",
                content: L(u)(e.value ? "details.items.next" : "details.item.next.item"),
                onClick: x[2] || (x[2] = (Y) => re(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(u)(e.value ? "details.items.next" : "details.item.next.item"),
                disabled: !e.value && o.value === T().length - 1 || e.value && h.value >= T().length
              }, x[4] || (x[4] = [
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
                [te, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : j("", !0),
        r.value ? (t(), a("div", kt, [
          T().length > 0 ? (t(), a("div", xt, [
            e.value ? A((t(), a("div", {
              key: 0,
              class: "flex flex-col",
              content: L(u)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: b
            }, [
              (t(!0), a(Z, null, K(T().slice(o.value, h.value), (Y, ue) => A((t(), a("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: ue,
                onClick: (Dt) => be(o.value + ue)
              }, [
                se(de, {
                  data: Y,
                  uid: v.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, wt)), [
                [xe, "show-truncate"]
              ])), 128))
            ], 8, Lt)), [
              [Le],
              [te, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (t(), R(de, {
              key: 1,
              data: H.value,
              uid: v.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (t(), a("div", $t, S(L(u)("details.layers.results.empty.currentLayer")), 1))
        ])) : (t(), a("div", Tt, S(L(u)("details.item.no.data")), 1))
      ], 4)) : (t(), a("div", {
        key: 1,
        class: U(["flex justify-center py-10 items-center", v.results.length > 1 ? "ml-42" : ""])
      }, [
        x[5] || (x[5] = g("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        le(" " + S(L(u)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Et = /* @__PURE__ */ ie(Mt, [["__scopeId", "data-v-988d2967"]]), It = { class: "relative h-full" }, Ct = { class: "detailsContentSection overflow-y-auto h-full" }, zt = /* @__PURE__ */ F({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(v) {
    const { t: b } = V(), i = X("iApi"), c = ee(), m = w([]), $ = w([]), f = w([]), _ = w(!1), u = w(""), r = M(() => c.activeGreedy), d = M(() => c.payload), n = M(() => c.properties), e = (p) => {
      u.value = p;
    }, o = (p) => f.value.find((I) => I.uid === p), E = (p) => {
      p !== void 0 && (c.activeGreedy = p.length === 0 ? 0 : p[0].requestTime, f.value = p, O(p));
    }, O = (p) => {
      if (u.value) {
        const I = o(u.value);
        I ? I.loading.then(() => {
          I.requestTime === r.value && (I.items.length > 0 ? (c.activeGreedy = 0, _.value = !1) : D(p));
        }) : D(p);
      } else
        D(p);
    }, D = (p, I) => {
      let h;
      if (I)
        h = I;
      else {
        const C = c.properties, s = p.map((k) => [
          C[k.layerId]?.priority ?? 50,
          k.layerId
        ]), y = new Set(s.map((k) => k[0]));
        h = [], y.forEach((k) => {
          const T = s.filter((H) => H[0] === k).map((H) => H[1]);
          h.push([k, T]);
        }), h.sort((k, T) => T[0] - k[0]);
      }
      if (h.length === 0) {
        c.activeGreedy = 0, _.value = !0;
        return;
      }
      const B = h[h.length - 1][1], N = p.filter((C) => B.includes(C.layerId)).map(
        (C) => C.loading.then(() => C.items.length > 0 ? Promise.resolve(C) : Promise.reject())
      ), z = p.length === 0 ? 0 : p[0].requestTime;
      Promise.any(N).then((C) => {
        C.requestTime === r.value && (c.activeGreedy = 0, u.value = C.uid, _.value = !1);
      }).catch(() => {
        z === r.value && (h.pop(), D(p, h));
      });
    };
    return Q(() => {
      $.value.push(
        P(
          d,
          (p) => {
            E(p);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), W(() => {
      m.value.forEach((p) => i.event.off(p)), $.value.forEach((p) => p());
    }), (p, I) => {
      const h = $e("panel-screen");
      return t(), R(h, { panel: v.panel }, {
        header: ce(() => [
          le(S(
            // Show different titles based on what requested the panel
            L(c).origin === "toggleEvent" ? L(b)("details.layers.title.gridOrigin") : L(b)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ce(() => [
          g("div", It, [
            f.value.length > 1 ? (t(), R(Ve, {
              key: 0,
              results: f.value,
              detailsProperties: n.value,
              selected: u.value,
              onSelectionChanged: e
            }, null, 8, ["results", "detailsProperties", "selected"])) : j("", !0),
            g("div", Ct, [
              _.value ? (t(), a("div", {
                key: 1,
                class: U(["text-center", { "ml-42": f.value.length > 1 }])
              }, S(f.value.length >= 1 ? L(b)("details.layers.results.empty") : L(b)("details.layers.results.empty.noLayers")), 3)) : (t(), R(Et, {
                key: 0,
                uid: u.value,
                results: f.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), ps = /* @__PURE__ */ ie(zt, [["__scopeId", "data-v-150a1d19"]]);
export {
  ps as default
};
