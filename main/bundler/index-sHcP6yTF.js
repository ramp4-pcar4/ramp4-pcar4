import { createElementBlock as r, openBlock as t, defineComponent as T, inject as S, resolveComponent as N, createVNode as b, unref as v, withCtx as O, createElementVNode as m, useTemplateRef as Q, markRaw as g, defineAsyncComponent as _, computed as A, normalizeClass as M, Fragment as z, renderList as F, createBlock as y, normalizeStyle as j, resolveDynamicComponent as I, ref as $, onMounted as U, nextTick as J, onBeforeUnmount as K, resolveDirective as V, withDirectives as P, createCommentVNode as w } from "vue";
import { _ as H, d as L, F as X, G as ee } from "./main-6dWPqJr6.js";
import { useI18n as B } from "vue-i18n";
import { throttle as R } from "throttle-debounce";
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
import "pinia";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { u as te } from "./draw-store-DYkFY3w9.js";
import { k as oe } from "./keyboard-O-FN7ZtD.js";
const ne = {}, ie = { class: "border-b p-0 self-center w-2/3" };
function ae(h, i) {
  return t(), r("span", ie);
}
const G = /* @__PURE__ */ H(ne, [["render", ae]]), se = /* @__PURE__ */ T({
  __name: "zoom-nav",
  setup(h) {
    const { t: i } = B(), o = S("iApi"), e = R(400, !0, () => o.geo.map.zoomIn()), p = R(400, !0, () => o.geo.map.zoomOut());
    return (a, n) => {
      const l = N("mapnav-button");
      return t(), r("div", null, [
        b(l, {
          onClickFunction: v(e),
          tooltip: v(i)("mapnav.zoomIn")
        }, {
          default: O(() => n[0] || (n[0] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              m("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              m("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        b(G),
        b(l, {
          onClickFunction: v(p),
          tooltip: v(i)("mapnav.zoomOut")
        }, {
          default: O(() => n[1] || (n[1] = [
            m("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              m("path", { d: "M19 13H5v-2h14v2z" }),
              m("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"])
      ]);
    };
  }
}), re = /* @__PURE__ */ T({
  __name: "draw-nav-section",
  props: {
    showOutline: {
      type: Boolean,
      default: !1
    }
  },
  setup(h) {
    const i = S("iApi"), { t: o } = B(), e = te();
    e.mapNavEl = Q("mapNavEl");
    const p = [
      {
        type: "point",
        icon: g(_(() => import("./point-icon-CIRT86WR.js")))
      },
      {
        type: "polyline",
        icon: g(_(() => import("./polyline-icon-DD61ksCC.js")))
      },
      {
        type: "polygon",
        icon: g(_(() => import("./polygon-icon-BuvUtbak.js")))
      },
      {
        type: "circle",
        icon: g(_(() => import("./circle-icon-lKyvGm2S.js")))
      },
      {
        type: "rectangle",
        icon: g(_(() => import("./rectangle-icon-CfLgn9gg.js")))
      }
    ], a = A(() => {
      const s = p.filter((u) => e.supportedTypes.some((x) => x.type === u.type));
      return s.push({
        type: "edit",
        icon: g(_(() => import("./edit-icon-4M1ZX-wY.js")))
      }), s;
    }), n = (s) => {
      e.activeTool === s ? e.setActiveTool(null) : e.setActiveTool(s);
    }, l = () => {
      i.geo.map.setMouseFocus();
    };
    return (s, u) => {
      const x = N("mapnav-button");
      return t(), r("div", {
        class: M([{ active: v(e).activeTool || v(e).activeTool == "" }, "mapnav-section bg-white-75 hover:bg-white"])
      }, [
        (t(!0), r(z, null, F(a.value, (d, C) => (t(), y(x, {
          key: d.type,
          onMousedown: l,
          onClickFunction: () => n(d.type),
          tooltip: v(o)(`draw.${d.type}.tooltip`),
          style: j({ marginBottom: C !== a.value.length - 1 ? "0px" : "0" }),
          showOutline: h.showOutline,
          class: M({ "active-tool": v(e).activeTool === d.type }),
          ref_for: !0,
          ref: "mapNavEl"
        }, {
          default: O(() => [
            (t(), y(I(d.icon), { class: "fill-current w-32 h-20" }))
          ]),
          _: 2
        }, 1032, ["onClickFunction", "tooltip", "style", "showOutline", "class"]))), 128))
      ], 2);
    };
  }
}), Z = /* @__PURE__ */ H(re, [["__scopeId", "data-v-2036016d"]]), le = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, pe = ["content"], ce = { class: "mapnav-section bg-white-75 hover:bg-white" }, me = {
  key: 1,
  class: "mapnav-section bg-white-75 hover:bg-white"
}, ve = ["content"], ue = { key: 0 }, de = /* @__PURE__ */ T({
  __name: "mapnav",
  setup(h) {
    const i = $(void 0), o = S("iApi"), e = L(), { t: p } = B(), a = $(), n = A(() => o.getConfig().fixtures.mapnav.items.some((c) => c === "draw")), l = $(o.$rootEl?.clientHeight), s = $(!1), u = $(0), x = () => {
      l.value = o.$rootEl?.clientHeight;
    }, d = () => {
      a.value._tippy.hide();
    }, C = (c) => {
      oe(c, a.value) && a.value._tippy.show();
    };
    U(() => {
      a.value?.addEventListener("blur", d), a.value?.addEventListener("keyup", C), i.value = new ResizeObserver(x), i.value.observe(o.$rootEl), J(() => {
        u.value = E.value.length * 82;
      });
    }), K(() => {
      a.value?.removeEventListener("blur", d), a.value?.removeEventListener("keyup", C), i.value.disconnect();
    });
    const E = A(
      () => e.order.map((c) => e.items[c]).filter((c) => c.componentId && c.id !== "draw")
    );
    return (c, f) => {
      const W = N("mapnav-button"), Y = V("focus-list"), D = V("tippy");
      return t(), r("div", le, [
        P((t(), r("div", {
          class: "mapnav-section flex flex-col",
          content: v(p)("panels.controls.items"),
          ref_key: "el",
          ref: a
        }, [
          n.value && l.value > u.value ? (t(), r(z, { key: 0 }, [
            b(Z),
            f[0] || (f[0] = m("span", { class: "py-1" }, null, -1))
          ], 64)) : w("", !0),
          b(se, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          f[2] || (f[2] = m("span", { class: "py-1" }, null, -1)),
          m("div", ce, [
            l.value <= u.value ? (t(), y(W, {
              key: 0,
              class: "self-center",
              onClickFunction: () => {
                s.value = !s.value;
              },
              tooltip: s.value ? c.$t("mapnav.closeMenu") : c.$t("mapnav.openMenu")
            }, {
              default: O(() => [
                (t(), r("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "shape-rendering": "geometricPrecision",
                  "text-rendering": "geometricPrecision",
                  "image-rendering": "optimizeQuality",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  viewBox: "0 0 319 511.61",
                  class: M(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": s.value }])
                }, f[1] || (f[1] = [
                  m("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)
                ]), 2))
              ]),
              _: 1
            }, 8, ["onClickFunction", "tooltip"])) : w("", !0)
          ]),
          l.value > u.value ? (t(), r("div", me, [
            (t(!0), r(z, null, F(E.value, (k, q) => (t(), r(z, {
              key: k.id + "button"
            }, [
              (t(), y(I(k.id + "-nav-button"))),
              q !== E.value.length - 1 ? (t(), y(G, {
                key: 0,
                class: "mapnav-divider"
              })) : w("", !0)
            ], 64))), 128))
          ])) : w("", !0)
        ], 8, pe)), [
          [Y],
          [D, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ]),
        l.value <= u.value && s.value ? P((t(), r("div", {
          key: 0,
          class: "mapnav-section flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0.5",
          style: j({ maxHeight: `${(l.value - 70) * 0.8}px`, height: "fit-content", width: "fit-content" }),
          content: v(p)("panels.controls.items")
        }, [
          n.value ? (t(), r("div", ue, [
            b(Z, { showOutline: "" })
          ])) : w("", !0),
          (t(!0), r(z, null, F(E.value, (k) => (t(), y(I(k.id + "-nav-button"), {
            key: k.id + "button",
            class: "mapnav-section bg-white-75 hover:bg-white",
            showOutline: ""
          }))), 128))
        ], 12, ve)), [
          [D, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]) : w("", !0)
      ]);
    };
  }
}), he = /* @__PURE__ */ H(de, [["__scopeId", "data-v-7a8c17a8"]]);
class fe extends X {
  mapnavStore = L(this.$vApp.$pinia);
  /**
   * Returns `MapnavFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {MapnavFixtureConfig}
   * @memberof MapnavFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {MapnavFixtureConfig} [mapnavConfig]
   * @returns
   * @memberof MapnavAPI
   */
  _parseConfig(i) {
    if (!i)
      return;
    const o = i.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = o.reduce((e, p) => (e[p.id] = p, e), {}), this.mapnavStore.order = o.map((e) => e.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const i = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((o) => {
      (this.$iApi.fixture.exists(o) || i.includes(o)) && (this.mapnavStore.items[o].componentId = `${o}-nav-button`);
    });
  }
}
const ge = { en: { "mapnav.openMenu": "Open navigation", "mapnav.closeMenu": "Close navigation", "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.openMenu": "Ouvrir la navigation", "mapnav.closeMenu": "Fermer la navigation", "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class nt extends fe {
  async added() {
    Object.entries(ge).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: i, el: o } = this.mount(he, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]), this._parseConfig(this.config);
    const p = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), a = this.$iApi.event.on(ee.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      p(), this.$iApi.event.off(a);
      const n = L(this.$vApp.$pinia), l = { ...n.items };
      Object.keys(l).forEach((s) => n.removeItem(s)), n.$reset(), i();
    };
  }
}
export {
  nt as default
};
