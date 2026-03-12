import { createElementBlock as r, openBlock as e, defineComponent as I, inject as S, resolveComponent as T, createVNode as b, unref as d, withCtx as A, createElementVNode as m, markRaw as g, defineAsyncComponent as _, computed as M, Fragment as z, renderList as E, createBlock as y, normalizeStyle as j, normalizeClass as R, resolveDynamicComponent as F, ref as $, onMounted as Q, nextTick as U, onBeforeUnmount as J, resolveDirective as D, withDirectives as V, createCommentVNode as w } from "vue";
import { _ as H, d as L, F as K, G as X } from "./main-E8ivnWBI.js";
import { useI18n as B } from "vue-i18n";
import { throttle as P } from "throttle-debounce";
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
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { u as ee } from "./draw-store-BEUmwV44.js";
const te = {}, oe = { class: "border-b p-0 self-center w-2/3" };
function ne(f, i) {
  return e(), r("span", oe);
}
const G = /* @__PURE__ */ H(te, [["render", ne]]), ie = /* @__PURE__ */ I({
  __name: "zoom-nav",
  setup(f) {
    const { t: i } = B(), t = S("iApi"), o = P(400, !0, () => t.geo.map.zoomIn()), p = P(400, !0, () => t.geo.map.zoomOut());
    return (a, n) => {
      const l = T("mapnav-button");
      return e(), r("div", null, [
        b(l, {
          onClickFunction: d(o),
          tooltip: d(i)("mapnav.zoomIn")
        }, {
          default: A(() => n[0] || (n[0] = [
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
          onClickFunction: d(p),
          tooltip: d(i)("mapnav.zoomOut")
        }, {
          default: A(() => n[1] || (n[1] = [
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
}), ae = { class: "mapnav-section bg-white-75 hover:bg-white" }, se = /* @__PURE__ */ I({
  __name: "draw-nav-section",
  props: {
    showOutline: {
      type: Boolean,
      default: !1
    }
  },
  setup(f) {
    const i = S("iApi"), { t } = B(), o = ee(), p = [
      {
        type: "point",
        icon: g(_(() => import("./point-icon-WaEY1rH5.js")))
      },
      {
        type: "polyline",
        icon: g(_(() => import("./polyline-icon-Co6T38mc.js")))
      },
      {
        type: "polygon",
        icon: g(_(() => import("./polygon-icon-kze9RU3Z.js")))
      },
      {
        type: "circle",
        icon: g(_(() => import("./circle-icon-p8gQwG7R.js")))
      },
      {
        type: "rectangle",
        icon: g(_(() => import("./rectangle-icon-qjkHLuTG.js")))
      }
    ], a = M(() => {
      const s = p.filter((u) => o.supportedTypes.some((x) => x.type === u.type));
      return s.push({
        type: "edit",
        icon: g(_(() => import("./edit-icon-CPPd2nHf.js")))
      }), s;
    }), n = (s) => {
      o.activeTool === s ? o.setActiveTool(null) : o.setActiveTool(s);
    }, l = () => {
      i.geo.map.setMouseFocus();
    };
    return (s, u) => {
      const x = T("mapnav-button");
      return e(), r("div", ae, [
        (e(!0), r(z, null, E(a.value, (v, C) => (e(), y(x, {
          key: v.type,
          onMousedown: l,
          onClickFunction: () => n(v.type),
          tooltip: d(t)(`draw.${v.type}.tooltip`),
          class: R({
            "active-tool": d(o).activeTool === v.type
          }),
          style: j({ marginBottom: C !== a.value.length - 1 ? "0px" : "0" }),
          showOutline: f.showOutline
        }, {
          default: A(() => [
            (e(), y(F(v.icon), { class: "fill-current w-32 h-20" }))
          ]),
          _: 2
        }, 1032, ["onClickFunction", "tooltip", "class", "style", "showOutline"]))), 128))
      ]);
    };
  }
}), Z = /* @__PURE__ */ H(se, [["__scopeId", "data-v-0dac0135"]]), re = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, le = ["content"], pe = { class: "mapnav-section bg-white-75 hover:bg-white" }, ce = {
  key: 1,
  class: "mapnav-section bg-white-75 hover:bg-white"
}, me = ["content"], ue = { key: 0 }, ve = /* @__PURE__ */ I({
  __name: "mapnav",
  setup(f) {
    const i = $(void 0), t = S("iApi"), o = L(), { t: p } = B(), a = $(), n = M(() => t.getConfig().fixtures.mapnav.items.some((c) => c === "draw")), l = $(t.$rootEl?.clientHeight), s = $(!1), u = $(0), x = () => {
      l.value = t.$rootEl?.clientHeight;
    }, v = () => {
      a.value._tippy.hide();
    }, C = (c) => {
      c.key === "Tab" && a.value?.matches(":focus") && a.value._tippy.show();
    };
    Q(() => {
      a.value?.addEventListener("blur", v), a.value?.addEventListener("keyup", C), i.value = new ResizeObserver(x), i.value.observe(t.$rootEl), U(() => {
        u.value = O.value.length * 82;
      });
    }), J(() => {
      a.value?.removeEventListener("blur", v), a.value?.removeEventListener("keyup", C), i.value.disconnect();
    });
    const O = M(
      () => o.order.map((c) => o.items[c]).filter((c) => c.componentId && c.id !== "draw")
    );
    return (c, h) => {
      const W = T("mapnav-button"), Y = D("focus-list"), N = D("tippy");
      return e(), r("div", re, [
        V((e(), r("div", {
          class: "mapnav-section flex flex-col",
          content: d(p)("panels.controls.items"),
          ref_key: "el",
          ref: a
        }, [
          n.value && l.value > u.value ? (e(), r(z, { key: 0 }, [
            b(Z),
            h[0] || (h[0] = m("span", { class: "py-1" }, null, -1))
          ], 64)) : w("", !0),
          b(ie, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          h[2] || (h[2] = m("span", { class: "py-1" }, null, -1)),
          m("div", pe, [
            l.value <= u.value ? (e(), y(W, {
              key: 0,
              class: "self-center",
              onClickFunction: () => {
                s.value = !s.value;
              },
              tooltip: s.value ? c.$t("mapnav.closeMenu") : c.$t("mapnav.openMenu")
            }, {
              default: A(() => [
                (e(), r("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  "shape-rendering": "geometricPrecision",
                  "text-rendering": "geometricPrecision",
                  "image-rendering": "optimizeQuality",
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  viewBox: "0 0 319 511.61",
                  class: R(["fill-current w-6 mx-auto transition-all transform", { "rotate-180": s.value }])
                }, h[1] || (h[1] = [
                  m("path", { d: "m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z" }, null, -1)
                ]), 2))
              ]),
              _: 1
            }, 8, ["onClickFunction", "tooltip"])) : w("", !0)
          ]),
          l.value > u.value ? (e(), r("div", ce, [
            (e(!0), r(z, null, E(O.value, (k, q) => (e(), r(z, {
              key: k.id + "button"
            }, [
              (e(), y(F(k.id + "-nav-button"))),
              q !== O.value.length - 1 ? (e(), y(G, {
                key: 0,
                class: "mapnav-divider"
              })) : w("", !0)
            ], 64))), 128))
          ])) : w("", !0)
        ], 8, le)), [
          [Y],
          [N, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ]),
        l.value <= u.value && s.value ? V((e(), r("div", {
          key: 0,
          class: "mapnav-section flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0.5",
          style: j({ maxHeight: `${(l.value - 70) * 0.8}px`, height: "fit-content", width: "fit-content" }),
          content: d(p)("panels.controls.items")
        }, [
          n.value ? (e(), r("div", ue, [
            b(Z, { showOutline: "" })
          ])) : w("", !0),
          (e(!0), r(z, null, E(O.value, (k) => (e(), y(F(k.id + "-nav-button"), {
            key: k.id + "button",
            class: "mapnav-section bg-white-75 hover:bg-white",
            showOutline: ""
          }))), 128))
        ], 12, me)), [
          [N, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]) : w("", !0)
      ]);
    };
  }
}), de = /* @__PURE__ */ H(ve, [["__scopeId", "data-v-d62d1b77"]]);
class he extends K {
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
    const t = i.items.map((o) => ({
      id: o
    }));
    this.mapnavStore.items = t.reduce((o, p) => (o[p.id] = p, o), {}), this.mapnavStore.order = t.map((o) => o.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const i = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((t) => {
      (this.$iApi.fixture.exists(t) || i.includes(t)) && (this.mapnavStore.items[t].componentId = `${t}-nav-button`);
    });
  }
}
const fe = { en: { "mapnav.openMenu": "Open navigation", "mapnav.closeMenu": "Close navigation", "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.openMenu": "Ouvrir la navigation", "mapnav.closeMenu": "Fermer la navigation", "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class tt extends he {
  async added() {
    Object.entries(fe).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: i, el: t } = this.mount(de, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this._parseConfig(this.config);
    const p = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), a = this.$iApi.event.on(X.COMPONENT, () => {
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
  tt as default
};
