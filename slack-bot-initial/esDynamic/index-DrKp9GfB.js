import { bC as c, bE as h, bJ as b, bL as u, bM as l, bN as m, fC as e, iG as v, bO as i, bD as z, bP as p, bQ as d, bx as _, ha as g } from "./main-3gzXighg.js";
const G = /* @__PURE__ */ c({
  __name: "appbar-button",
  props: {
    options: {
      type: Object
    }
  },
  setup(o) {
    const s = h("iApi"), n = () => {
      s.panel.toggle({ id: "p2", screen: "p-2-screen-2" });
    };
    return (t, r) => {
      const f = b("appbar-button", !0);
      return m(), u(f, {
        onClickFunction: n,
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
}), $ = { class: "flex flex-col items-center" }, A = /* @__PURE__ */ c({
  __name: "p1-screen-1",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(o) {
    return (s, n) => {
      const t = b("panel-screen");
      return m(), u(t, { panel: o.panel }, {
        header: l(() => n[1] || (n[1] = [
          i(" Gazebo/Panel 1/Screen A ")
        ])),
        controls: l(() => n[2] || (n[2] = [
          e("a", { href: "javascript:;" }, "Option 1", -1),
          e("a", { href: "javascript:;" }, "Option 2", -1),
          e("a", { href: "javascript:;" }, "Option 3", -1)
        ])),
        content: l(() => [
          e("div", $, [
            e("button", {
              type: "button",
              onClick: n[0] || (n[0] = (r) => o.panel.show({ screen: "p-1-screen-2" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 2 "),
            n[3] || (n[3] = e("br", null, null, -1)),
            n[4] || (n[4] = e("img", {
              src: "https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",
              alt: "Gazebo1"
            }, null, -1))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), C = { class: "flex flex-col items-center" }, S = /* @__PURE__ */ c({
  __name: "p1-screen-2",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(o) {
    return (s, n) => {
      const t = b("panel-screen");
      return m(), u(t, { panel: o.panel }, {
        header: l(() => n[1] || (n[1] = [
          i(" Gazebo/Panel 1/Screen B ")
        ])),
        content: l(() => [
          e("div", C, [
            e("button", {
              type: "button",
              onClick: n[0] || (n[0] = (r) => o.panel.show({ screen: "p-1-screen-1" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 1 "),
            n[2] || (n[2] = e("br", null, null, -1)),
            n[3] || (n[3] = e("img", {
              src: "http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",
              alt: "Gazebo2"
            }, null, -1))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), j = { class: "flex flex-row justify-center items-center mt-16" }, B = { class: "mt-16" }, k = /* @__PURE__ */ c({
  __name: "p2-screen-2",
  props: {
    panel: { type: Object, required: !0 },
    greeting: { type: String }
  },
  setup(o) {
    const s = o, { t: n } = z(), t = h("iApi"), r = () => {
      s.panel.show("p-2-screen-3"), t.event.emit("gazebo/beholdMyText", "I am a cat");
    };
    return (f, a) => {
      const y = b("panel-screen");
      return m(), u(y, { panel: o.panel }, {
        header: l(() => a[2] || (a[2] = [
          i(" Gazebo/Panel 2/Screen B ")
        ])),
        content: l(() => [
          i(p(d(n)("gz.hello2")) + " ", 1),
          e("div", j, [
            e("button", {
              type: "button",
              onClick: a[0] || (a[0] = (w) => o.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen B" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            e("button", {
              type: "button",
              onClick: a[1] || (a[1] = (w) => r()),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " See a cat ")
          ]),
          e("p", B, p(o.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), O = { class: "flex flex-col items-center mt-16" }, D = { class: "ml-32 font-bold" }, N = { class: "ml-32 font-bold" }, P = { class: "ml-32 font-bold" }, T = /* @__PURE__ */ c({
  __name: "p2-screen-3",
  props: {
    panel: { type: Object, required: !0 }
  },
  setup(o) {
    const { t: s } = z({
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
    return (n, t) => {
      const r = b("panel-screen");
      return m(), u(r, { panel: o.panel }, {
        header: l(() => t[1] || (t[1] = [
          i(" Gazebo/Panel 2/Screen C ")
        ])),
        content: l(() => [
          e("div", O, [
            e("button", {
              type: "button",
              onClick: t[0] || (t[0] = (f) => o.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen C" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            t[5] || (t[5] = e("img", {
              class: "my-16",
              src: "https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",
              alt: "",
              srcset: ""
            }, null, -1)),
            t[6] || (t[6] = e("p", null, "Locale merging:", -1)),
            e("dl", null, [
              t[2] || (t[2] = e("dt", null, "global locale:", -1)),
              e("dd", D, p(d(s)("lang_native")), 1),
              t[3] || (t[3] = e("dt", null, "fixture locale:", -1)),
              e("dd", N, p(d(s)("gz.hello")), 1),
              t[4] || (t[4] = e("dt", null, "common panels locale:", -1)),
              e("dd", P, p(d(s)("who")), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), x = { en: { "gz.hello": "I'm a simple panel - but from a locale file", "gz.hello2": "I'm a simple panel", "gz.alert1": "Gazebo", "gz.alert2": "Gazebo two" }, fr: { "gz.hello": 'Bonjour. Je suis un panel"', "gz.hello2": 'Bonjour. Je suis un panel"', "gz.alert1": "Gazebo", "gz.alert2": "Gazebo deux" } }, E = "gazebo/beholdMyText";
class q extends _ {
  added() {
    this.$iApi.event.registerEventName(E), this.$iApi.component("gazebo-appbar-button", G), this.$iApi.panel.register(
      {
        // panel-1 has examples of how not to bind things and interact with stuff; bad panel ❌
        // it generally avoids using API and goes straight to the store; fixtures/panels/screens should not do that;
        id: "p1",
        config: {
          screens: {
            "p-1-screen-1": g(A),
            "p-1-screen-2": g(S)
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
              (s) => setTimeout(
                () => import("./p2-screen-1-4xOyLlFC.js").then((n) => {
                  s(n);
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
            "p-2-screen-3": () => new Promise((s) => s(g(T)))
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
  q as default
};
//# sourceMappingURL=index-DrKp9GfB.js.map
