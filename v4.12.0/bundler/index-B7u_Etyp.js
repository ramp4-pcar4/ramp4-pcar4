import { openBlock as r, createElementBlock as l, defineComponent as $, inject as k, resolveComponent as M, createVNode as g, unref as u, withCtx as b, createElementVNode as m, markRaw as h, defineAsyncComponent as f, computed as x, Fragment as w, renderList as T, createBlock as y, normalizeClass as V, resolveDynamicComponent as O, ref as B, onMounted as H, onBeforeUnmount as P, resolveDirective as E, withDirectives as Z, createCommentVNode as F } from "vue";
import { _ as C, d as A, F as j, G } from "./main-QMUrUWN5.js";
import { useI18n as z } from "vue-i18n";
import { throttle as S } from "throttle-debounce";
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
import { u as Y } from "./draw-store-BEUmwV44.js";
const q = {}, R = { class: "border-b p-0 self-center w-2/3" };
function U(_, i) {
  return r(), l("span", R);
}
const D = /* @__PURE__ */ C(q, [["render", U]]), W = /* @__PURE__ */ $({
  __name: "zoom-nav",
  setup(_) {
    const { t: i } = z(), t = k("iApi"), e = S(400, !0, () => t.geo.map.zoomIn()), o = S(400, !0, () => t.geo.map.zoomOut());
    return (d, n) => {
      const p = M("mapnav-button");
      return r(), l("div", null, [
        g(p, {
          onClickFunction: u(e),
          tooltip: u(i)("mapnav.zoomIn")
        }, {
          default: b(() => n[0] || (n[0] = [
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
        g(D),
        g(p, {
          onClickFunction: u(o),
          tooltip: u(i)("mapnav.zoomOut")
        }, {
          default: b(() => n[1] || (n[1] = [
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
}), J = { class: "mapnav-section bg-white-75 hover:bg-white" }, K = /* @__PURE__ */ $({
  __name: "draw-nav-section",
  setup(_) {
    const i = k("iApi"), { t } = z(), e = Y(), o = [
      {
        type: "point",
        icon: h(f(() => import("./point-icon-BofSdn2M.js")))
      },
      {
        type: "polyline",
        icon: h(f(() => import("./polyline-icon-B9iB5wrD.js")))
      },
      {
        type: "polygon",
        icon: h(f(() => import("./polygon-icon-DTu8ml-2.js")))
      },
      {
        type: "circle",
        icon: h(f(() => import("./circle-icon-CXhZ8-Vi.js")))
      },
      {
        type: "rectangle",
        icon: h(f(() => import("./rectangle-icon-DP1fKDYs.js")))
      }
    ], d = x(() => {
      const a = o.filter((s) => e.supportedTypes.some((c) => c.type === s.type));
      return a.push({
        type: "edit",
        icon: h(f(() => import("./edit-icon-9tskLLQk.js")))
      }), a;
    }), n = (a) => {
      e.activeTool === a ? e.setActiveTool(null) : e.setActiveTool(a);
    }, p = () => {
      i.geo.map.setMouseFocus();
    };
    return (a, s) => {
      const c = M("mapnav-button");
      return r(), l("div", J, [
        (r(!0), l(w, null, T(d.value, (v) => (r(), y(c, {
          key: v.type,
          onMousedown: p,
          onClickFunction: () => n(v.type),
          tooltip: u(t)(`draw.${v.type}.tooltip`),
          class: V({ "active-tool": u(e).activeTool === v.type })
        }, {
          default: b(() => [
            (r(), y(O(v.icon), { class: "fill-current w-32 h-20" }))
          ]),
          _: 2
        }, 1032, ["onClickFunction", "tooltip", "class"]))), 128))
      ]);
    };
  }
}), Q = /* @__PURE__ */ C(K, [["__scopeId", "data-v-033c1fd2"]]), X = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, tt = ["content"], et = { class: "mapnav-section bg-white-75 hover:bg-white" }, ot = /* @__PURE__ */ $({
  __name: "mapnav",
  setup(_) {
    const i = k("iApi"), t = A(), { t: e } = z(), o = B(), d = x(() => i.getConfig().fixtures.mapnav.items.some((s) => s === "draw")), n = () => {
      o.value._tippy.hide();
    }, p = (s) => {
      s.key === "Tab" && o.value?.matches(":focus") && o.value._tippy.show();
    };
    H(() => {
      o.value?.addEventListener("blur", n), o.value?.addEventListener("keyup", p);
    }), P(() => {
      o.value?.removeEventListener("blur", n), o.value?.removeEventListener("keyup", p);
    });
    const a = x(
      () => t.order.map((s) => t.items[s]).filter((s) => s.componentId && s.id !== "draw")
    );
    return (s, c) => {
      const v = E("focus-list"), N = E("tippy");
      return r(), l("div", X, [
        Z((r(), l("div", {
          class: "flex flex-col",
          content: u(e)("panels.controls.items"),
          ref_key: "el",
          ref: o
        }, [
          d.value ? (r(), l(w, { key: 0 }, [
            g(Q),
            c[0] || (c[0] = m("span", { class: "py-1" }, null, -1))
          ], 64)) : F("", !0),
          g(W, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          c[1] || (c[1] = m("span", { class: "py-1" }, null, -1)),
          m("div", et, [
            (r(!0), l(w, null, T(a.value, (I, L) => (r(), l(w, {
              key: I.id + "button"
            }, [
              (r(), y(O(I.id + "-nav-button"))),
              L !== a.value.length - 1 ? (r(), y(D, {
                key: 0,
                class: "mapnav-divider"
              })) : F("", !0)
            ], 64))), 128))
          ])
        ], 8, tt)), [
          [v],
          [N, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
}), nt = /* @__PURE__ */ C(ot, [["__scopeId", "data-v-96b1b7dc"]]);
class it extends j {
  mapnavStore = A(this.$vApp.$pinia);
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
    const t = i.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = t.reduce((e, o) => (e[o.id] = o, e), {}), this.mapnavStore.order = t.map((e) => e.id), this._validateItems();
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
const rt = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class Gt extends it {
  async added() {
    Object.entries(rt).forEach((n) => this.$iApi.$i18n.mergeLocaleMessage(...n));
    const { destroy: i, el: t } = this.mount(nt, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), this._parseConfig(this.config);
    const o = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), d = this.$iApi.event.on(G.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      o(), this.$iApi.event.off(d);
      const n = A(this.$vApp.$pinia), p = { ...n.items };
      Object.keys(p).forEach((a) => n.removeItem(a)), n.$reset(), i();
    };
  }
}
export {
  Gt as default
};
