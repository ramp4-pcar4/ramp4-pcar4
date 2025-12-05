import { defineComponent as G, ref as x, onMounted as ie, createElementBlock as a, openBlock as t, createElementVNode as _, normalizeClass as V, createCommentVNode as H, Fragment as Y, renderList as J, normalizeStyle as me, toDisplayString as D, computed as M, resolveDirective as q, withDirectives as A, withModifiers as pe, createVNode as le, onBeforeMount as K, watch as U, onBeforeUnmount as Q, unref as w, createBlock as R, inject as ee, resolveDynamicComponent as ce, createTextVNode as ae, resolveComponent as $e, withCtx as de } from "vue";
import { _ as ne, e as te, X as oe, L as Te, Y as Ee, G as X } from "./main-MXZmlokj.js";
import { useI18n as Z } from "vue-i18n";
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
import fe from "linkify-html";
import { T as Me } from "./toggle-switch-control-9y3d4kJw.js";
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
const Ie = {
  key: 0,
  class: "relative"
}, Ce = {
  key: 0,
  class: "relative"
}, ze = ["innerHTML"], De = ["src"], He = {
  key: 1,
  class: "w-32 h-32"
}, Se = { class: "symbologyIcon" }, je = ["innerHTML"], Be = ["src"], Oe = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ne = {
  key: 0,
  class: "px-5"
}, Ae = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, qe = /* @__PURE__ */ G({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(d) {
    const b = d, i = x([]);
    return ie(() => {
      i.value = b.layer.legend;
    }), (c, v) => d.result.loaded ? (t(), a("div", Ie, [
      _("div", {
        class: V(d.result.items.length === 0 ? "opacity-50" : "")
      }, [
        i.value.length > 1 ? (t(), a("div", Ce, [
          (t(!0), a(Y, null, J(i.value.slice(0, 3).reverse(), ($, y) => (t(), a("div", {
            class: V(["absolute", [y == 0 ? "symbol-0" : y == 1 ? "left-3" : "left-6"]]),
            style: me({ "z-index": 3 - y }),
            key: y
          }, [
            i.value[y].svgcode ? (t(), a("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: i.value[y].svgcode
            }, null, 8, ze)) : i.value[y].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: i.value[y].imgUrl
            }, null, 8, De)) : H("", !0)
          ], 6))), 128))
        ])) : i.value.length > 0 ? (t(), a("div", He, [
          _("div", Se, [
            i.value[0].svgcode ? (t(), a("span", {
              key: 0,
              innerHTML: i.value[0].svgcode
            }, null, 8, je)) : i.value[0].imgUrl ? (t(), a("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: i.value[0].imgUrl
            }, null, 8, Be)) : H("", !0)
          ])
        ])) : H("", !0)
      ], 2),
      _("div", Oe, [
        d.result.loaded ? (t(), a("div", Ne, D(d.result.items.length), 1)) : H("", !0)
      ])
    ])) : (t(), a("div", Ae, v[0] || (v[0] = [
      _("div", { class: "symbologyIcon h-32 w-32" }, [
        _("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Fe = /* @__PURE__ */ ne(qe, [["__scopeId", "data-v-496d788d"]]), Ge = ["content"], Pe = { class: "symbologyLayerName truncate" }, Ue = /* @__PURE__ */ G({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(d) {
    const b = te(), i = M(() => b.properties), c = d, v = () => {
      const $ = c.layer;
      return $ && i.value[$.id] && i.value[$.id].name ? i.value[$.id].name : $?.name ?? "";
    };
    return ($, y) => {
      const k = q("tippy");
      return A((t(), a("button", {
        class: V(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", d.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: y[0] || (y[0] = pe(() => {
        }, ["stop"])),
        content: v()
      }, [
        le(Fe, {
          class: "symbStack w-32 h-32 mr-10",
          layer: d.layer,
          result: d.result
        }, null, 8, ["layer", "result"]),
        _("div", Pe, D(v()), 1)
      ], 10, Ge)), [
        [k, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Ve = ["content"], Re = /* @__PURE__ */ G({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(d, { emit: b }) {
    const { t: i } = Z(), c = oe(), v = x(), $ = () => {
      v.value._tippy.hide();
    }, y = (g) => {
      g.key === "Tab" && v.value?.matches(":focus") && v.value._tippy.show();
    }, k = b, p = d, l = x(""), f = x([]), r = x(!1), e = x(!1), u = (g) => c.getLayerByUid(g), T = (g) => {
      l.value = g, k("selection-changed", g), r.value = !1;
    }, j = () => {
      e.value || setTimeout(() => {
        r.value = e.value;
      }, 500), e.value = !0;
    }, C = () => {
      r.value = e.value = !1;
    }, m = () => {
      e.value || (r.value = !0), e.value = !0;
    }, I = () => {
      r.value = e.value = !1;
    };
    return K(() => {
      f.value.push(
        U(p, () => {
          l.value = p.selected;
        })
      );
    }), ie(() => {
      v.value?.addEventListener("blur", $), v.value?.addEventListener("keyup", y);
    }), Q(() => {
      f.value.forEach((g) => g()), v.value?.removeEventListener("blur", $), v.value?.removeEventListener("keyup", y);
    }), (g, O) => {
      const N = q("focus-item"), F = q("focus-list"), E = q("tippy");
      return A((t(), a("div", {
        class: V(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": r.value }]),
        onMouseover: j,
        onMouseleave: C,
        onFocus: m,
        onBlur: pe(I, ["self"]),
        content: w(i)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: v
      }, [
        (t(!0), a(Y, null, J(p.results, (S, n) => (t(), a("div", {
          class: "flex justify-start relative",
          key: n
        }, [
          A((t(), R(Ue, {
            key: S.uid,
            layer: u(S.uid),
            result: S,
            selected: S.uid === l.value,
            onClick: (o) => T(S.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [N]
          ])
        ]))), 128))
      ], 42, Ve)), [
        [F],
        [E, {
          trigger: "manual",
          placement: "top-start",
          touch: !1
        }]
      ]);
    };
  }
}), Ze = { class: "inline font-bold" }, Ye = ["innerHTML"], We = /* @__PURE__ */ G({
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
  setup(d) {
    const { t: b } = Z(), i = ee("iApi"), c = d, v = (l, f, r, e) => {
      const u = l.find((T) => T[f].toLowerCase() === r.toLowerCase());
      u && delete e[u.name];
    }, $ = () => {
      const l = Object.assign({}, c.identifyData.data);
      v(c.fields, "type", "geometry", l), i.ui.exposeOids || v(c.fields, "type", "oid", l), i.ui.exposeMeasurements || (v(c.fields, "name", "shape_length", l), v(c.fields, "name", "shape_area", l));
      const f = {};
      c.fields.forEach((e) => {
        const u = c.fixtureFields?.find((T) => e.name === T.field);
        f[e.name] = {
          name: u?.alias || e.alias || e.name,
          type: e.type,
          visible: u?.visible ?? !0
        };
      });
      const r = {};
      Object.keys(l).forEach((e) => {
        const u = f[e];
        if (u && u.visible) {
          const T = l[e];
          r[e] = {
            value: typeof T == "number" ? i.ui.formatNumber(T) : T,
            alias: u.name,
            type: u.type
          };
        }
      });
      for (const [e] of Object.entries(r))
        i.ui.isPlainText(r[e].value) && (r[e].value = i.ui.escapeHtml(r[e].value));
      return r;
    }, y = (l, f, r) => {
      switch (r) {
        case "date":
          return p(l);
        default:
          return k(l, f);
      }
    }, k = (l, f) => {
      if (!l)
        return l;
      if (l.trim().match(/\.(jpeg|jpg|gif|png)$/) || l.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
      ))
        return `<img src="${l}" alt="${b("details.item.alert.defaultAltText", { alias: f })}" />`;
      const r = "underline text-blue-700 break-all", e = document.createElement("div");
      return e.innerHTML = l.trim(), e.firstElementChild?.tagName == "A" ? (e.firstElementChild.className = r, e.innerHTML) : fe(l, {
        className: r,
        target: "_blank",
        validate: {
          url: (T) => /^https?:\/\//.test(T)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, p = (l) => {
      const f = parseInt(l);
      return isNaN(f) ? l : new Date(f).toISOString().split("T")[0];
    };
    return (l, f) => (t(), a("div", null, [
      (t(!0), a(Y, null, J($(), (r, e, u) => (t(), a("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: u
      }, [
        _("span", Ze, D(r.alias), 1),
        f[0] || (f[0] = _("span", { class: "flex-auto" }, null, -1)),
        _("span", {
          class: "inline",
          innerHTML: y(r.value, r.alias, r.type)
        }, null, 8, Ye)
      ]))), 128))
    ]));
  }
}), Xe = ["innerHTML"], Je = { key: 1 }, Ke = /* @__PURE__ */ G({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const { t: b } = Z();
    return (i, c) => d.identifyData ? (t(), a("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: d.identifyData.data.data ?? d.identifyData.data
    }, null, 8, Xe)) : (t(), a("div", Je, D(w(b)("details.layers.results.empty")), 1));
  }
}), Qe = { class: "relative flex flex-grow truncate" }, et = {
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
}, dt = ["innerHTML"], ve = /* @__PURE__ */ G({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(d) {
    const b = oe(), i = d, c = ee("iApi"), v = x([]), $ = te(), { t: y } = Z(), k = x(!1), p = x(""), l = x("none"), f = x(), r = () => b.getLayerByUid(i.uid), e = M(() => $.properties), u = M(() => $.defaultTemplates), T = M(() => r()?.supportsFeatures ?? !1), j = M(() => r()?.mapLayer ?? !1), C = M(() => {
      const n = r();
      let o = n && i.data.loaded ? n.nameValue(i.data.data) : c.$i18n.t("details.items.title");
      return c.ui.isPlainText(o) && (o = c.ui.escapeHtml(o)), o;
    }), m = (n) => {
      if (typeof n == "string") {
        const o = "underline text-blue-700 break-all", h = document.createElement("div");
        return h.innerHTML = n.trim(), h.firstElementChild?.tagName == "A" ? (h.firstElementChild.className = o, h.innerHTML) : fe(n, {
          className: o,
          target: "_blank",
          validate: {
            url: (B) => /^https?:\/\//.test(B)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return n;
    }, I = () => {
      E("none"), i.data.loaded ? g() : i.data.load().then(() => {
        g();
      });
    }, g = () => {
      if (p.value = "", !(i.data && i.data.loaded))
        return;
      const n = r();
      if (n === void 0) {
        console.warn(`could not find layer for uid ${i.uid} during icon lookup`);
        return;
      }
      if (n.supportsFeatures) {
        const o = n.oidField;
        n.getIcon(i.data.data[o]).then((h) => {
          p.value = h;
        });
      }
    }, O = M(() => {
      const n = r(), o = n && e.value[n.id] && e.value[n.id].template;
      if (o) {
        if (typeof ce(o) != "string")
          return o;
        console.error(`Could not find custom details template named ${o}. Was it registered correctly?`);
      }
      return u.value && u.value[i.data.format] ? u.value[i.data.format] : T.value ? We : Ke;
    }), N = M(() => T.value ? r()?.fields || [] : []), F = M(() => {
      const n = r();
      if (n && e.value[n.id] && e.value[n.id].fields)
        return e.value[n.id].fields;
    }), E = (n) => {
      n === "zoomed" || n === "error" ? setTimeout(() => {
        l.value = n, f.value?._tippy.show(), setTimeout(() => {
          f.value?._tippy.hide(), l.value = "none";
        }, 3e3);
      }, 300) : l.value = n;
    }, S = () => {
      if (l.value !== "none")
        return;
      E("zooming");
      const n = r();
      if (n === void 0 || !n.isLoaded) {
        console.warn(`Could not find layer for uid ${i.uid} during zoom geometry lookup`), E("error");
        return;
      }
      if (!i.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), E("error");
        return;
      }
      const o = i.data.data[n.oidField], h = () => {
        const z = { getGeom: !0 };
        n.getGraphic(o, z).then((B) => {
          B.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${o}`), E("error")) : (c.geo.map.zoomMapTo(B.geometry), E("zoomed"), c.updateAlert(c.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          E("error");
        });
      };
      n.layerType === Te.FEATURE && n.geomType !== Ee.POINT ? n.getGraphicExtent(o).then((z) => {
        c.geo.map.zoomMapTo(z), E("zoomed"), c.updateAlert(c.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        h();
      }) : h();
    };
    return K(() => {
      v.value.push(
        U(
          i,
          () => {
            I();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), Q(() => {
      v.value.forEach((n) => n());
    }), (n, o) => {
      const h = q("truncate"), z = q("tippy");
      return t(), a(Y, null, [
        _("div", Qe, [
          T.value ? (t(), a("div", et, [
            _("div", tt, [
              d.data.loaded && p.value ? (t(), a("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: p.value
              }, null, 8, st)) : (t(), a("div", lt, o[3] || (o[3] = [
                _("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            d.data.loaded ? A((t(), a("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: C.value,
              innerHTML: m(C.value),
              onTouchstart: o[0] || (o[0] = (B) => k.value = !0),
              onTouchend: o[1] || (o[1] = (B) => k.value = !1),
              tabindex: d.inList ? -1 : 0
            }, null, 40, at)), [
              [h, {
                options: {
                  placement: "top-start",
                  // Offset more for touch devices so tooltip is visible above finger
                  offset: () => k.value ? [0, 25] : [0, 0]
                }
              }]
            ]) : (t(), a("div", it, D(w(y)("details.loading")), 1)),
            d.data.loaded ? (t(), a("span", nt, [
              j.value ? A((t(), a("button", {
                key: 0,
                type: "button",
                content: w(y)(`details.item.zoom${l.value === "none" ? "" : `.${l.value}`}`),
                "aria-label": w(y)(`grid.cells.zoom${l.value === "none" ? "" : `.${l.value}`}`),
                ref_key: "zoomButton",
                ref: f,
                onClick: o[2] || (o[2] = (B) => {
                  B.stopPropagation(), S();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                l.value === "zooming" ? (t(), a("div", rt)) : l.value === "zoomed" ? (t(), a("svg", ut, o[4] || (o[4] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : l.value === "error" ? (t(), a("svg", ct, o[5] || (o[5] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (t(), a("span", {
                  key: 3,
                  innerHTML: w(c).ui.getZoomIcon()
                }, null, 8, dt))
              ], 8, ot)), [
                [z, { placement: "bottom" }]
              ]) : H("", !0)
            ])) : H("", !0)
          ])) : H("", !0)
        ]),
        d.open ? (t(), R(ce(O.value), {
          key: 0,
          identifyData: d.data,
          fields: N.value,
          fixtureFields: F.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : H("", !0)
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
}, yt = { class: "flex" }, gt = ["aria-label"], ht = ["content", "aria-label", "disabled"], _t = { class: "px-3 text-center flex-grow" }, bt = ["content", "aria-label", "disabled"], kt = { key: 3 }, xt = { key: 0 }, Lt = ["content"], wt = ["onClick"], $t = {
  key: 1,
  class: "text-center"
}, Tt = {
  key: 4,
  class: "p-5"
}, Et = /* @__PURE__ */ G({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(d) {
    const b = x(), i = () => {
      b.value._tippy.hide();
    }, c = (s) => {
      s.key === "Tab" && b.value?.matches(":focus") && b.value._tippy.show();
    }, v = ee("iApi"), $ = te(), y = oe(), k = d, { t: p } = Z(), l = x(!1), f = x(v.fixture.get("details")), r = x(!0), e = x(!1), u = x(0), T = x(20), j = x([]), C = x([]), m = M(() => $.activeGreedy), I = M(() => $.properties), g = M(() => u.value + T.value), O = () => y.getLayerByUid(k.uid), N = () => k.results.find((s) => s.uid === k.uid), F = M(() => N()?.loaded ?? !1), E = M(() => N()?.requestTime), S = M(
      () => l.value && (!e.value && h().length > 1 || e.value && h().length > T.value)
    ), n = M(() => {
      const s = O();
      return s && I.value[s.id] && I.value[s.id].name ? I.value[s.id].name : s?.name ?? "";
    }), o = M(() => k.uid), h = () => {
      const s = N();
      return s ? s.items : [];
    }, z = M(() => h()[u.value]), B = M(() => {
      if (f.value.hasHilighter()) {
        const s = O();
        if (s)
          return s.mapLayer && s.supportsFeatures;
      }
      return !1;
    }), ye = (s) => {
      r.value = s, $.hilightToggle = s, P();
    }, ge = () => {
      const s = O();
      u.value = u.value ?? 0, r.value = $.hilightToggle ?? r.value, e.value = !1, l.value = !!s, P();
    }, re = (s) => {
      e.value ? (u.value += s * T.value, P()) : u.value += s;
    }, P = () => {
      const s = h();
      if (r.value && F.value && s.length > 0 && B.value)
        if (e.value)
          f.value.hilightDetailsItems(s.slice(u.value, g.value), k.uid);
        else {
          const L = s[u.value];
          L && f.value.hilightDetailsItems([L], k.uid);
        }
      else
        f.value.removeDetailsHilight();
    }, he = () => {
      e.value = !0, u.value = Math.floor(u.value / T.value) * T.value, P();
    }, _e = () => {
      f.value.removeDetailsHilight(), C.value.forEach((s) => s()), j.value.forEach((s) => v.event.off(s));
    }, be = () => {
      f.value.removeDetailsHilight();
    }, ke = (s) => {
      const L = u.value;
      u.value = s, e.value = !1, L === s && P();
    };
    return ie(() => {
      j.value.push(
        v.event.on(X.LAYER_REMOVE, (s) => {
          const L = v.panel.get("details");
          k.uid === s.uid && L && L.close();
        })
      ), j.value.push(
        v.event.on(X.PANEL_CLOSED, (s) => {
          s.id === "details" && _e();
        })
      ), j.value.push(
        v.event.on(X.PANEL_MINIMIZED, (s) => {
          s.id === "details" && be();
        })
      ), j.value.push(
        v.event.on(X.MAP_BASEMAPCHANGE, (s) => {
          r.value && s.schemaChanged && P();
        })
      ), b.value?.addEventListener("blur", i), b.value?.addEventListener("keyup", c);
    }), K(() => {
      C.value.push(
        U(
          z,
          () => {
            e.value || (ge(), z.value === void 0 && f.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        U(
          o,
          () => {
            const s = k.uid;
            if (e.value && s) {
              const L = N();
              L && L.loading.then(() => {
                k.uid === s && e.value && P();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        U(E, () => {
          u.value = 0;
        })
      ), C.value.push(
        U(
          () => k.uid,
          () => {
            u.value = 0;
          }
        )
      );
    }), Q(() => {
      b.value?.removeEventListener("blur", i), b.value?.removeEventListener("keyup", c);
    }), (s, L) => {
      const xe = q("truncate"), se = q("tippy"), Le = q("focus-item"), we = q("focus-list");
      return F.value && m.value === 0 ? (t(), a("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: me(d.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        l.value ? A((t(), a("h1", vt, [
          ae(D(n.value), 1)
        ])), [
          [xe, { options: { placement: "top-start" } }]
        ]) : H("", !0),
        B.value ? (t(), a("div", mt, [
          _("label", pt, D(w(p)("details.togglehilight.title")), 1),
          le(Me, {
            config: {
              value: r.value,
              disabled: !1
            },
            onToggled: ye
          }, null, 8, ["config"])
        ])) : H("", !0),
        S.value ? (t(), a("div", ft, [
          _("div", yt, [
            e.value ? H("", !0) : (t(), a("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": w(p)("details.item.see.list"),
              onClick: L[0] || (L[0] = (W) => he())
            }, D(w(p)("details.item.see.list")), 9, gt)),
            _("div", {
              class: V(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": e.value }])
            }, [
              A((t(), a("button", {
                type: "button",
                content: w(p)(e.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: L[1] || (L[1] = (W) => re(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": w(p)(e.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: u.value === 0
              }, L[3] || (L[3] = [
                _("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  _("g", null, [
                    _("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, ht)), [
                [se, { placement: "top" }]
              ]),
              _("span", _t, D(e.value ? w(p)("details.items.range", [
                u.value + 1,
                Math.min(g.value, h().length),
                h().length
              ]) : w(p)("details.item.count", [u.value + 1, h().length])), 1),
              A((t(), a("button", {
                type: "button",
                content: w(p)(e.value ? "details.items.next" : "details.item.next.item"),
                onClick: L[2] || (L[2] = (W) => re(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": w(p)(e.value ? "details.items.next" : "details.item.next.item"),
                disabled: !e.value && u.value === h().length - 1 || e.value && g.value >= h().length
              }, L[4] || (L[4] = [
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
                [se, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : H("", !0),
        l.value ? (t(), a("div", kt, [
          h().length > 0 ? (t(), a("div", xt, [
            e.value ? A((t(), a("div", {
              key: 0,
              class: "flex flex-col",
              content: w(p)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: b
            }, [
              (t(!0), a(Y, null, J(h().slice(u.value, g.value), (W, ue) => A((t(), a("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: ue,
                onClick: (Dt) => ke(u.value + ue)
              }, [
                le(ve, {
                  data: W,
                  uid: d.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, wt)), [
                [Le, "show-truncate"]
              ])), 128))
            ], 8, Lt)), [
              [we],
              [se, {
                trigger: "manual",
                placement: "top-start",
                touch: !1
              }]
            ]) : (t(), R(ve, {
              key: 1,
              data: z.value,
              uid: d.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (t(), a("div", $t, D(w(p)("details.layers.results.empty.currentLayer")), 1))
        ])) : (t(), a("div", Tt, D(w(p)("details.item.no.data")), 1))
      ], 4)) : (t(), a("div", {
        key: 1,
        class: V(["flex justify-center py-10 items-center", d.results.length > 1 ? "ml-42" : ""])
      }, [
        L[5] || (L[5] = _("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        ae(" " + D(w(p)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Mt = /* @__PURE__ */ ne(Et, [["__scopeId", "data-v-b02a05d4"]]), It = { class: "relative h-full" }, Ct = { class: "detailsContentSection overflow-y-auto h-full" }, zt = /* @__PURE__ */ G({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(d) {
    const { t: b } = Z(), i = ee("iApi"), c = te(), v = x([]), $ = x([]), y = x([]), k = x(!1), p = x(""), l = M(() => c.activeGreedy), f = M(() => c.payload), r = M(() => c.properties), e = (m) => {
      p.value = m;
    }, u = (m) => y.value.find((I) => I.uid === m), T = (m) => {
      m !== void 0 && (c.activeGreedy = m.length === 0 ? 0 : m[0].requestTime, y.value = m, j(m));
    }, j = (m) => {
      if (p.value) {
        const I = u(p.value);
        I ? I.loading.then(() => {
          I.requestTime === l.value && (I.items.length > 0 ? (c.activeGreedy = 0, k.value = !1) : C(m));
        }) : C(m);
      } else
        C(m);
    }, C = (m, I) => {
      let g;
      if (I)
        g = I;
      else {
        const E = c.properties, S = m.map((o) => [
          E[o.layerId]?.priority ?? 50,
          o.layerId
        ]), n = new Set(S.map((o) => o[0]));
        g = [], n.forEach((o) => {
          const h = S.filter((z) => z[0] === o).map((z) => z[1]);
          g.push([o, h]);
        }), g.sort((o, h) => h[0] - o[0]);
      }
      if (g.length === 0) {
        c.activeGreedy = 0, k.value = !0;
        return;
      }
      const O = g[g.length - 1][1], N = m.filter((E) => O.includes(E.layerId)).map(
        (E) => E.loading.then(() => E.items.length > 0 ? Promise.resolve(E) : Promise.reject())
      ), F = m.length === 0 ? 0 : m[0].requestTime;
      Promise.any(N).then((E) => {
        E.requestTime === l.value && (c.activeGreedy = 0, p.value = E.uid, k.value = !1);
      }).catch(() => {
        F === l.value && (g.pop(), C(m, g));
      });
    };
    return K(() => {
      $.value.push(
        U(
          f,
          (m) => {
            T(m);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), Q(() => {
      v.value.forEach((m) => i.event.off(m)), $.value.forEach((m) => m());
    }), (m, I) => {
      const g = $e("panel-screen");
      return t(), R(g, { panel: d.panel }, {
        header: de(() => [
          ae(D(
            // Show different titles based on what requested the panel
            w(c).origin === "toggleEvent" ? w(b)("details.layers.title.gridOrigin") : w(b)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: de(() => [
          _("div", It, [
            y.value.length > 1 ? (t(), R(Re, {
              key: 0,
              results: y.value,
              detailsProperties: r.value,
              selected: p.value,
              onSelectionChanged: e
            }, null, 8, ["results", "detailsProperties", "selected"])) : H("", !0),
            _("div", Ct, [
              k.value ? (t(), a("div", {
                key: 1,
                class: V(["text-center", { "ml-42": y.value.length > 1 }])
              }, D(y.value.length >= 1 ? w(b)("details.layers.results.empty") : w(b)("details.layers.results.empty.noLayers")), 3)) : (t(), R(Mt, {
                key: 0,
                uid: p.value,
                results: y.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), ys = /* @__PURE__ */ ne(zt, [["__scopeId", "data-v-60c889f3"]]);
export {
  ys as default
};
