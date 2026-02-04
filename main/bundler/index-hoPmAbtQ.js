import { defineComponent as m, inject as z, resolveComponent as c, createBlock as u, openBlock as b, withCtx as l, createElementVNode as e, normalizeStyle as v, createTextVNode as a, toDisplayString as i, unref as d, markRaw as g } from "vue";
import "tiny-emitter";
import { F as _ } from "./main-6dWPqJr6.js";
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
import "throttle-debounce";
import "pinia";
import { useI18n as h } from "vue-i18n";
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
    return (n, p) => {
      const f = c("appbar-button", !0);
      return b(), u(f, {
        onClickFunction: t,
        tooltip: "Gazebo"
      }, {
        default: l(() => [
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
      return b(), u(n, { panel: o.panel }, {
        header: l(() => t[1] || (t[1] = [
          a(" Gazebo/Panel 1/Screen A ")
        ])),
        controls: l(() => t[2] || (t[2] = [
          e("a", { href: "javascript:;" }, "Option 1", -1),
          e("a", { href: "javascript:;" }, "Option 2", -1),
          e("a", { href: "javascript:;" }, "Option 3", -1)
        ])),
        content: l(() => [
          e("div", $, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (p) => o.panel.show({ screen: "p-1-screen-2" })),
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
      return b(), u(n, { panel: o.panel }, {
        header: l(() => t[1] || (t[1] = [
          a(" Gazebo/Panel 1/Screen B ")
        ])),
        content: l(() => [
          e("div", S, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (p) => o.panel.show({ screen: "p-1-screen-1" })),
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
    const r = o, { t } = h(), n = z("iApi"), p = () => {
      r.panel.show("p-2-screen-3"), n.event.emit("gazebo/beholdMyText", "I am a cat");
    };
    return (f, s) => {
      const y = c("panel-screen");
      return b(), u(y, { panel: o.panel }, {
        header: l(() => s[2] || (s[2] = [
          a(" Gazebo/Panel 2/Screen B ")
        ])),
        content: l(() => [
          a(i(d(t)("gz.hello2")) + " ", 1),
          e("div", j, [
            e("button", {
              type: "button",
              onClick: s[0] || (s[0] = (w) => o.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen B" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            e("button", {
              type: "button",
              onClick: s[1] || (s[1] = (w) => p()),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " See a cat ")
          ]),
          e("p", B, i(o.greeting), 1)
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
      const p = c("panel-screen");
      return b(), u(p, { panel: o.panel }, {
        header: l(() => n[1] || (n[1] = [
          a(" Gazebo/Panel 2/Screen C ")
        ])),
        content: l(() => [
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
              e("dd", T, i(d(r)("lang_native")), 1),
              n[3] || (n[3] = e("dt", null, "fixture locale:", -1)),
              e("dd", D, i(d(r)("gz.hello")), 1),
              n[4] || (n[4] = e("dt", null, "common panels locale:", -1)),
              e("dd", E, i(d(r)("who")), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), x = { en: { "gz.hello": "I'm a simple panel - but from a locale file", "gz.hello2": "I'm a simple panel", "gz.alert1": "Gazebo", "gz.alert2": "Gazebo two" }, fr: { "gz.hello": 'Bonjour. Je suis un panel"', "gz.hello2": 'Bonjour. Je suis un panel"', "gz.alert1": "Gazebo", "gz.alert2": "Gazebo deux" } }, P = "gazebo/beholdMyText";
class we extends _ {
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
                () => import("./p2-screen-1-e8gc1uPc.js").then((t) => {
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
  we as default
};
