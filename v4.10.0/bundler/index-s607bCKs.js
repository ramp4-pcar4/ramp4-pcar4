import { defineComponent as m, inject as z, resolveComponent as c, openBlock as u, createBlock as b, withCtx as p, createElementVNode as e, normalizeStyle as v, createTextVNode as a, toDisplayString as s, unref as d, markRaw as g } from "vue";
import "tiny-emitter";
import { F as _ } from "./main-C-NQiA0Q.js";
import "@arcgis/core/Basemap";
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
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "pinia";
import { useI18n as h } from "vue-i18n";
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
const G = /* @__PURE__ */ m({
  __name: "appbar-button",
  props: {
    options: {
      type: Object
    }
  },
  setup(o) {
    const r = z("iApi"), t = () => {
      r.panel.toggle({ id: "p2", screen: "p-2-screen-2" });
    };
    return (n, l) => {
      const f = c("appbar-button", !0);
      return u(), b(f, {
        onClickFunction: t,
        tooltip: "Gazebo"
      }, {
        default: p(() => [
          e("span", {
            style: v({ color: o.options?.colour ?? "#BDBDBD" })
          }, "G ", 4)
        ]),
        _: 1
      });
    };
  }
}), $ = { class: "flex flex-col items-center" }, A = /* @__PURE__ */ m({
  __name: "p1-screen-1",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(o) {
    return (r, t) => {
      const n = c("panel-screen");
      return u(), b(n, { panel: o.panel }, {
        header: p(() => t[1] || (t[1] = [
          a(" Gazebo/Panel 1/Screen A ")
        ])),
        controls: p(() => t[2] || (t[2] = [
          e("a", { href: "javascript:;" }, "Option 1", -1),
          e("a", { href: "javascript:;" }, "Option 2", -1),
          e("a", { href: "javascript:;" }, "Option 3", -1)
        ])),
        content: p(() => [
          e("div", $, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (l) => o.panel.show({ screen: "p-1-screen-2" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 2 "),
            t[3] || (t[3] = e("br", null, null, -1)),
            t[4] || (t[4] = e("img", {
              src: "https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",
              alt: "Gazebo1"
            }, null, -1))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), S = { class: "flex flex-col items-center" }, C = /* @__PURE__ */ m({
  __name: "p1-screen-2",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(o) {
    return (r, t) => {
      const n = c("panel-screen");
      return u(), b(n, { panel: o.panel }, {
        header: p(() => t[1] || (t[1] = [
          a(" Gazebo/Panel 1/Screen B ")
        ])),
        content: p(() => [
          e("div", S, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (l) => o.panel.show({ screen: "p-1-screen-1" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 1 "),
            t[2] || (t[2] = e("br", null, null, -1)),
            t[3] || (t[3] = e("img", {
              src: "http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",
              alt: "Gazebo2"
            }, null, -1))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), j = { class: "flex flex-row justify-center items-center mt-16" }, B = { class: "mt-16" }, k = /* @__PURE__ */ m({
  __name: "p2-screen-2",
  props: {
    panel: { type: Object, required: !0 },
    greeting: { type: String }
  },
  setup(o) {
    const r = o, { t } = h(), n = z("iApi"), l = () => {
      r.panel.show("p-2-screen-3"), n.event.emit("gazebo/beholdMyText", "I am a cat");
    };
    return (f, i) => {
      const y = c("panel-screen");
      return u(), b(y, { panel: o.panel }, {
        header: p(() => i[2] || (i[2] = [
          a(" Gazebo/Panel 2/Screen B ")
        ])),
        content: p(() => [
          a(s(d(t)("gz.hello2")) + " ", 1),
          e("div", j, [
            e("button", {
              type: "button",
              onClick: i[0] || (i[0] = (w) => o.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen B" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            e("button", {
              type: "button",
              onClick: i[1] || (i[1] = (w) => l()),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " See a cat ")
          ]),
          e("p", B, s(o.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), O = { class: "flex flex-col items-center mt-16" }, T = { class: "ml-32 font-bold" }, D = { class: "ml-32 font-bold" }, E = { class: "ml-32 font-bold" }, N = /* @__PURE__ */ m({
  __name: "p2-screen-3",
  props: {
    panel: { type: Object, required: !0 }
  },
  setup(o) {
    const { t: r } = h({
      messages: {
        en: {
          lang_native: "En",
          who: "[me cat]"
        },
        fr: {
          lang_native: "Fr",
          who: "[moi chat]"
        }
      }
    });
    return (t, n) => {
      const l = c("panel-screen");
      return u(), b(l, { panel: o.panel }, {
        header: p(() => n[1] || (n[1] = [
          a(" Gazebo/Panel 2/Screen C ")
        ])),
        content: p(() => [
          e("div", O, [
            e("button", {
              type: "button",
              onClick: n[0] || (n[0] = (f) => o.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen C" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            n[5] || (n[5] = e("img", {
              class: "my-16",
              src: "https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",
              alt: "",
              srcset: ""
            }, null, -1)),
            n[6] || (n[6] = e("p", null, "Locale merging:", -1)),
            e("dl", null, [
              n[2] || (n[2] = e("dt", null, "global locale:", -1)),
              e("dd", T, s(d(r)("lang_native")), 1),
              n[3] || (n[3] = e("dt", null, "fixture locale:", -1)),
              e("dd", D, s(d(r)("gz.hello")), 1),
              n[4] || (n[4] = e("dt", null, "common panels locale:", -1)),
              e("dd", E, s(d(r)("who")), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), x = { en: { "gz.hello": "I'm a simple panel - but from a locale file", "gz.hello2": "I'm a simple panel", "gz.alert1": "Gazebo", "gz.alert2": "Gazebo two" }, fr: { "gz.hello": 'Bonjour. Je suis un panel"', "gz.hello2": 'Bonjour. Je suis un panel"', "gz.alert1": "Gazebo", "gz.alert2": "Gazebo deux" } }, P = "gazebo/beholdMyText";
class Ne extends _ {
  added() {
    this.$iApi.event.registerEventName(P), this.$iApi.component("gazebo-appbar-button", G), this.$iApi.panel.register(
      {
        // panel-1 has examples of how not to bind things and interact with stuff; bad panel ❌
        // it generally avoids using API and goes straight to the store; fixtures/panels/screens should not do that;
        id: "p1",
        config: {
          screens: {
            "p-1-screen-1": g(A),
            "p-1-screen-2": g(C)
          },
          style: {
            "flex-grow": "1",
            "max-width": "500px"
          },
          alertName: "gz.alert1"
        }
      },
      { i18n: { messages: x } }
    ), this.$iApi.panel.register(
      {
        // panel-2 has examples of how properly bind things and interact with stuff; good panel ✔
        // use API functions; underlying store structure might change and all the code accessing the store directly will break
        id: "p2",
        config: {
          screens: {
            /**
             * // This should work:
             * manually lazy-loading a screen component
             */
            //'p-2-screen-1': () => import(/* webpackChunkName: "p-2-screen-1" */ `./p2-screen-1.vue`),
            /**
             * // This should work:
             * for the demo purposes, delay resolution of a component by 2 seconds
             */
            "p-2-screen-1": () => new Promise(
              (r) => setTimeout(
                () => import("./p2-screen-1-D9AobeRi.js").then((t) => {
                  r(t);
                }),
                2e3
              )
            ),
            /**
             * // This should work:
             * letting the core to lazy-load a screen component; need to provide a path relative to the fixtures home folder
             */
            "p-2-screen-2": g(k),
            /**
             * // This should work:
             * returning a `VueConstructor` in a promise
             */
            "p-2-screen-3": () => new Promise((r) => r(g(N)))
          },
          style: {
            "flex-grow": "1",
            "max-width": "500px"
          },
          alertName: "gz.alert2"
        }
      },
      { i18n: { messages: x } }
    ), this.handlePanelTeleports(["p1", "p2"]);
  }
}
export {
  Ne as default
};
