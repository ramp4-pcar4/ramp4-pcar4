import { openBlock as e, createElementBlock as r, defineComponent as O, inject as S, resolveComponent as T, createVNode as y, unref as d, withCtx as M, createElementVNode as m, markRaw as f, defineAsyncComponent as g, computed as E, Fragment as z, renderList as F, createBlock as w, normalizeClass as R, normalizeStyle as G, resolveDynamicComponent as I, ref as $, onMounted as Q, nextTick as U, onBeforeUnmount as J, resolveDirective as V, withDirectives as P, createCommentVNode as _ } from "vue";
import { _ as H, d as L, F as K, G as X } from "./main-BpzGZ2XL.js";
import { useI18n as N } from "vue-i18n";
import { throttle as Z } from "throttle-debounce";
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
function ne(b, i) {
  return e(), r("span", oe);
}
const W = /* @__PURE__ */ H(te, [["render", ne]]), ie = /* @__PURE__ */ O({
  __name: "zoom-nav",
  setup(b) {
    const { t: i } = N(), t = S("iApi"), o = Z(400, !0, () => t.geo.map.zoomIn()), p = Z(400, !0, () => t.geo.map.zoomOut());
    return (a, n) => {
      const l = T("mapnav-button");
      return e(), r("div", null, [
        y(l, {
          onClickFunction: d(o),
          tooltip: d(i)("mapnav.zoomIn")
        }, {
          default: M(() => n[0] || (n[0] = [
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
        y(W),
        y(l, {
          onClickFunction: d(p),
          tooltip: d(i)("mapnav.zoomOut")
        }, {
          default: M(() => n[1] || (n[1] = [
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
}), ae = { class: "mapnav-section bg-white-75 hover:bg-white" }, se = /* @__PURE__ */ O({
  __name: "draw-nav-section",
  setup(b) {
    const i = S("iApi"), { t } = N(), o = ee(), p = [
      {
        type: "point",
        icon: f(g(() => import("./point-icon-aRKK618k.js")))
      },
      {
        type: "polyline",
        icon: f(g(() => import("./polyline-icon-SUf9kSUe.js")))
      },
      {
        type: "polygon",
        icon: f(g(() => import("./polygon-icon-C9braC4C.js")))
      },
      {
        type: "circle",
        icon: f(g(() => import("./circle-icon-o6kfW8CI.js")))
      },
      {
        type: "rectangle",
        icon: f(g(() => import("./rectangle-icon-Dq9L9VFh.js")))
      }
    ], a = E(() => {
      const s = p.filter((v) => o.supportedTypes.some((x) => x.type === v.type));
      return s.push({
        type: "edit",
        icon: f(g(() => import("./edit-icon-Dxm-GMPk.js")))
      }), s;
    }), n = (s) => {
      o.activeTool === s ? o.setActiveTool(null) : o.setActiveTool(s);
    }, l = () => {
      i.geo.map.setMouseFocus();
    };
    return (s, v) => {
      const x = T("mapnav-button");
      return e(), r("div", ae, [
        (e(!0), r(z, null, F(a.value, (u, C) => (e(), w(x, {
          key: u.type,
          onMousedown: l,
          onClickFunction: () => n(u.type),
          tooltip: d(t)(`draw.${u.type}.tooltip`),
          class: R({
            "active-tool": d(o).activeTool === u.type
          }),
          style: G({ marginBottom: C !== a.value.length - 1 ? "0px" : "0" })
        }, {
          default: M(() => [
            (e(), w(I(u.icon), { class: "fill-current w-32 h-20" }))
          ]),
          _: 2
        }, 1032, ["onClickFunction", "tooltip", "class", "style"]))), 128))
      ]);
    };
  }
}), j = /* @__PURE__ */ H(se, [["__scopeId", "data-v-13aefb77"]]), re = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, le = ["content"], pe = { class: "mapnav-section bg-white-75 hover:bg-white" }, ce = {
  key: 1,
  class: "mapnav-section bg-white-75 hover:bg-white"
}, me = ["content"], ve = { key: 0 }, ue = /* @__PURE__ */ O({
  __name: "mapnav",
  setup(b) {
    const i = $(void 0), t = S("iApi"), o = L(), { t: p } = N(), a = $(), n = E(() => t.getConfig().fixtures.mapnav.items.some((c) => c === "draw")), l = $(t.$rootEl?.clientHeight), s = $(!1), v = $(0), x = () => {
      l.value = t.$rootEl?.clientHeight;
    }, u = () => {
      a.value._tippy.hide();
    }, C = (c) => {
      c.key === "Tab" && a.value?.matches(":focus") && a.value._tippy.show();
    };
    Q(() => {
      a.value?.addEventListener("blur", u), a.value?.addEventListener("keyup", C), i.value = new ResizeObserver(x), i.value.observe(t.$rootEl), U(() => {
        v.value = A.value.length * 82;
      });
    }), J(() => {
      a.value?.removeEventListener("blur", u), a.value?.removeEventListener("keyup", C), i.value.disconnect();
    });
    const A = E(
      () => o.order.map((c) => o.items[c]).filter((c) => c.componentId && c.id !== "draw")
    );
    return (c, h) => {
      const Y = T("mapnav-button"), q = V("focus-list"), B = V("tippy");
      return e(), r("div", re, [
        P((e(), r("div", {
          class: "mapnav-section flex flex-col",
          content: d(p)("panels.controls.items"),
          ref_key: "el",
          ref: a
        }, [
          n.value && l.value > v.value ? (e(), r(z, { key: 0 }, [
            y(j),
            h[0] || (h[0] = m("span", { class: "py-1" }, null, -1))
          ], 64)) : _("", !0),
          y(ie, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          h[2] || (h[2] = m("span", { class: "py-1" }, null, -1)),
          m("div", pe, [
            l.value <= v.value ? (e(), w(Y, {
              key: 0,
              class: "self-center",
              onClickFunction: () => {
                s.value = !s.value;
              },
              tooltip: s.value ? c.$t("mapnav.closeMenu") : c.$t("mapnav.openMenu")
            }, {
              default: M(() => [
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
            }, 8, ["onClickFunction", "tooltip"])) : _("", !0)
          ]),
          l.value > v.value ? (e(), r("div", ce, [
            (e(!0), r(z, null, F(A.value, (k, D) => (e(), r(z, {
              key: k.id + "button"
            }, [
              (e(), w(I(k.id + "-nav-button"))),
              D !== A.value.length - 1 ? (e(), w(W, {
                key: 0,
                class: "mapnav-divider"
              })) : _("", !0)
            ], 64))), 128))
          ])) : _("", !0)
        ], 8, le)), [
          [q],
          [B, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ]),
        l.value <= v.value && s.value ? P((e(), r("div", {
          key: 0,
          class: "mapnav-section flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0.5",
          style: G({ maxHeight: `${(l.value - 70) * 0.8}px`, height: "fit-content", width: "fit-content" }),
          content: d(p)("panels.controls.items")
        }, [
          n.value ? (e(), r("div", ve, [
            y(j)
          ])) : _("", !0),
          (e(!0), r(z, null, F(A.value, (k, D) => (e(), w(I(k.id + "-nav-button"), {
            key: k.id + "button",
            class: "mapnav-section bg-white-75 hover:bg-white",
            showOutline: ""
          }))), 128))
        ], 12, me)), [
          [B, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ]) : _("", !0)
      ]);
    };
  }
}), de = /* @__PURE__ */ H(ue, [["__scopeId", "data-v-2e9df1e2"]]);
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
