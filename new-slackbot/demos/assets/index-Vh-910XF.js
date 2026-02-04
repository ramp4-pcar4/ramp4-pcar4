const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./p2-screen-1-D8S5O4H-.js","./main-CjrSZKDN.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { bF as defineComponent, bH as inject, bM as resolveComponent, bO as createBlock, bP as withCtx, bQ as openBlock, fG as createBaseVNode, iK as normalizeStyle, bR as createTextVNode, bG as useI18n, bS as toDisplayString, bT as unref, bA as FixtureInstance, he as markRaw } from './main-CjrSZKDN.js';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "appbar-button",
  props: {
    options: {
      type: Object
    }
  },
  setup(__props) {
    const iApi = inject("iApi");
    const onClick = () => {
      iApi.panel.toggle({ id: "p2", screen: "p-2-screen-2" });
    };
    return (_ctx, _cache) => {
      const _component_appbar_button = resolveComponent("appbar-button", true);
      return openBlock(), createBlock(_component_appbar_button, {
        onClickFunction: onClick,
        tooltip: "Gazebo"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", {
            style: normalizeStyle({ color: __props.options?.colour ?? "#BDBDBD" })
          }, "G ", 4)
        ]),
        _: 1
      });
    };
  }
});

const _hoisted_1$3 = { class: "flex flex-col items-center" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "p1-screen-1",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(" Gazebo/Panel 1/Screen A ")
        ])),
        controls: withCtx(() => _cache[2] || (_cache[2] = [
          createBaseVNode("a", { href: "javascript:;" }, "Option 1", -1),
          createBaseVNode("a", { href: "javascript:;" }, "Option 2", -1),
          createBaseVNode("a", { href: "javascript:;" }, "Option 3", -1)
        ])),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({ screen: "p-1-screen-2" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 2 "),
            _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
            _cache[4] || (_cache[4] = createBaseVNode("img", {
              src: "https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif",
              alt: "Gazebo1"
            }, null, -1))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const _hoisted_1$2 = { class: "flex flex-col items-center" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "p1-screen-2",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(" Gazebo/Panel 1/Screen B ")
        ])),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({ screen: "p-1-screen-1" })),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
            }, " See Gazebo 1 "),
            _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
            _cache[3] || (_cache[3] = createBaseVNode("img", {
              src: "http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif",
              alt: "Gazebo2"
            }, null, -1))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const _hoisted_1$1 = { class: "flex flex-row justify-center items-center mt-16" };
const _hoisted_2$1 = { class: "mt-16" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "p2-screen-2",
  props: {
    panel: { type: Object, required: true },
    greeting: { type: String }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const iApi = inject("iApi");
    const enhancedCatActivities = () => {
      props.panel.show("p-2-screen-3");
      iApi.event.emit("gazebo/beholdMyText", "I am a cat");
    };
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode(" Gazebo/Panel 2/Screen B ")
        ])),
        content: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("gz.hello2")) + " ", 1),
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen B" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => enhancedCatActivities()),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " See a cat ")
          ]),
          createBaseVNode("p", _hoisted_2$1, toDisplayString(__props.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const _hoisted_1 = { class: "flex flex-col items-center mt-16" };
const _hoisted_2 = { class: "ml-32 font-bold" };
const _hoisted_3 = { class: "ml-32 font-bold" };
const _hoisted_4 = { class: "ml-32 font-bold" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "p2-screen-3",
  props: {
    panel: { type: Object, required: true }
  },
  setup(__props) {
    const { t } = useI18n({
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
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode(" Gazebo/Panel 2/Screen C ")
        ])),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({
                screen: "p-2-screen-1",
                props: { greeting: "Greeting from Screen C" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
            }, " Switch to Screen A "),
            _cache[5] || (_cache[5] = createBaseVNode("img", {
              class: "my-16",
              src: "https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif",
              alt: "",
              srcset: ""
            }, null, -1)),
            _cache[6] || (_cache[6] = createBaseVNode("p", null, "Locale merging:", -1)),
            createBaseVNode("dl", null, [
              _cache[2] || (_cache[2] = createBaseVNode("dt", null, "global locale:", -1)),
              createBaseVNode("dd", _hoisted_2, toDisplayString(unref(t)("lang_native")), 1),
              _cache[3] || (_cache[3] = createBaseVNode("dt", null, "fixture locale:", -1)),
              createBaseVNode("dd", _hoisted_3, toDisplayString(unref(t)("gz.hello")), 1),
              _cache[4] || (_cache[4] = createBaseVNode("dt", null, "common panels locale:", -1)),
              createBaseVNode("dd", _hoisted_4, toDisplayString(unref(t)("who")), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const messages = {"en":{"gz.hello":"I'm a simple panel - but from a locale file","gz.hello2":"I'm a simple panel","gz.alert1":"Gazebo","gz.alert2":"Gazebo two"},"fr":{"gz.hello":"Bonjour. Je suis un panel\"","gz.hello2":"Bonjour. Je suis un panel\"","gz.alert1":"Gazebo","gz.alert2":"Gazebo deux"}};

const BEHOLD_TEXT_EVENT = "gazebo/beholdMyText";
class GazeboFixture extends FixtureInstance {
  added() {
    this.$iApi.event.registerEventName(BEHOLD_TEXT_EVENT);
    this.$iApi.component("gazebo-appbar-button", _sfc_main$4);
    this.$iApi.panel.register(
      {
        // panel-1 has examples of how not to bind things and interact with stuff; bad panel ❌
        // it generally avoids using API and goes straight to the store; fixtures/panels/screens should not do that;
        id: "p1",
        config: {
          screens: {
            "p-1-screen-1": markRaw(_sfc_main$3),
            "p-1-screen-2": markRaw(_sfc_main$2)
          },
          style: {
            "flex-grow": "1",
            "max-width": "500px"
          },
          alertName: "gz.alert1"
        }
      },
      { i18n: { messages } }
    );
    this.$iApi.panel.register(
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
            "p-2-screen-1": () => {
              return new Promise(
                (resolve) => setTimeout(
                  () => __vitePreload(() => import('./p2-screen-1-D8S5O4H-.js'),true?__vite__mapDeps([0,1,2,3]):void 0,import.meta.url).then((data) => {
                    resolve(data);
                  }),
                  2e3
                )
              );
            },
            /**
             * // This should work:
             * letting the core to lazy-load a screen component; need to provide a path relative to the fixtures home folder
             */
            "p-2-screen-2": markRaw(_sfc_main$1),
            /**
             * // This should work:
             * returning a `VueConstructor` in a promise
             */
            "p-2-screen-3": () => {
              return new Promise((resolve) => resolve(markRaw(_sfc_main)));
            }
          },
          style: {
            "flex-grow": "1",
            "max-width": "500px"
          },
          alertName: "gz.alert2"
        }
      },
      { i18n: { messages } }
    );
    this.handlePanelTeleports(["p1", "p2"]);
  }
}

export { GazeboFixture as default };
