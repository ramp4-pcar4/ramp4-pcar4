import { openBlock as s, createElementBlock as p, defineComponent as x, inject as E, resolveComponent as A, createVNode as u, unref as l, withCtx as f, createElementVNode as a, ref as M, onMounted as S, onBeforeUnmount as O, computed as F, resolveDirective as _, withDirectives as N, Fragment as g, renderList as V, createBlock as b, resolveDynamicComponent as B, createCommentVNode as L } from "vue";
import { _ as y, d, F as D, G as H } from "./main-lcO-efBh.js";
import { useI18n as $ } from "vue-i18n";
import { throttle as w } from "throttle-debounce";
import "tiny-emitter";
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
import "pinia";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const P = {}, Z = { class: "border-b p-0 self-center w-2/3" };
function j(v, n) {
  return s(), p("span", Z);
}
const z = /* @__PURE__ */ y(P, [["render", j]]), T = /* @__PURE__ */ x({
  __name: "zoom-nav",
  setup(v) {
    const { t: n } = $(), o = E("iApi"), e = w(400, !0, () => o.geo.map.zoomIn()), i = w(400, !0, () => o.geo.map.zoomOut());
    return (m, t) => {
      const r = A("mapnav-button");
      return s(), p("div", null, [
        u(r, {
          onClickFunction: l(e),
          tooltip: l(n)("mapnav.zoomIn")
        }, {
          default: f(() => t[0] || (t[0] = [
            a("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              a("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              a("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        u(z),
        u(r, {
          onClickFunction: l(i),
          tooltip: l(n)("mapnav.zoomOut")
        }, {
          default: f(() => t[1] || (t[1] = [
            a("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              a("path", { d: "M19 13H5v-2h14v2z" }),
              a("path", {
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
}), G = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" }, Y = ["content"], q = { class: "mapnav-section bg-white-75 hover:bg-white" }, U = /* @__PURE__ */ x({
  __name: "mapnav",
  setup(v) {
    const n = d(), { t: o } = $(), e = M(), i = () => {
      e.value._tippy.hide();
    }, m = (r) => {
      r.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    S(() => {
      e.value?.addEventListener("blur", i), e.value?.addEventListener("keyup", m);
    }), O(() => {
      e.value?.removeEventListener("blur", i), e.value?.removeEventListener("keyup", m);
    });
    const t = F(() => n.order.map((r) => n.items[r]).filter((r) => r.componentId));
    return (r, c) => {
      const k = _("focus-list"), C = _("tippy");
      return s(), p("div", G, [
        N((s(), p("div", {
          class: "flex flex-col",
          content: l(o)("panels.controls.items"),
          ref_key: "el",
          ref: e
        }, [
          u(T, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          c[0] || (c[0] = a("span", { class: "py-1" }, null, -1)),
          a("div", q, [
            (s(!0), p(g, null, V(t.value, (h, I) => (s(), p(g, {
              key: h.id + "button"
            }, [
              (s(), b(B(h.id + "-nav-button"))),
              I !== t.value.length - 1 ? (s(), b(z, {
                key: 0,
                class: "mapnav-divider"
              })) : L("", !0)
            ], 64))), 128))
          ])
        ], 8, Y)), [
          [k],
          [C, {
            trigger: "manual",
            placement: "top-end",
            touch: !1,
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
}), W = /* @__PURE__ */ y(U, [["__scopeId", "data-v-41a5c7b7"]]);
class J extends D {
  mapnavStore = d(this.$vApp.$pinia);
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
  _parseConfig(n) {
    if (!n)
      return;
    const o = n.items.map((e) => ({
      id: e
    }));
    this.mapnavStore.items = o.reduce((e, i) => (e[i.id] = i, e), {}), this.mapnavStore.order = o.map((e) => e.id), this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const n = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((o) => {
      (this.$iApi.fixture.exists(o) || n.includes(o)) && (this.mapnavStore.items[o].componentId = `${o}-nav-button`);
    });
  }
}
const K = { en: { "mapnav.zoomIn": "Zoom In", "mapnav.zoomOut": "Zoom Out", "mapnav.home": "Home", "mapnav.fullscreen": "Full Screen", "mapnav.geolocator": "Your Location", "mapnav.geolocator.error.permission": "The location request was denied. Please check your browser permission settings.", "mapnav.geolocator.error.internal": "Your location could not be found." }, fr: { "mapnav.zoomIn": "Zoom avant", "mapnav.zoomOut": "Zoom arrière", "mapnav.home": "Accueil", "mapnav.fullscreen": "Plein Écran", "mapnav.geolocator": "Votre position", "mapnav.geolocator.error.permission": "Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.", "mapnav.geolocator.error.internal": "Votre emplacement n'a pu être trouvé." } };
class Oe extends J {
  async added() {
    Object.entries(K).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t));
    const { destroy: n, el: o } = this.mount(W, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(o.childNodes[0]), this._parseConfig(this.config);
    const i = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    ), m = this.$iApi.event.on(H.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      i(), this.$iApi.event.off(m);
      const t = d(this.$vApp.$pinia), r = { ...t.items };
      Object.keys(r).forEach((c) => t.removeItem(c)), t.$reset(), n();
    };
  }
}
export {
  Oe as default
};
