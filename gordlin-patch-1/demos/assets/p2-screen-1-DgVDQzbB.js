import { bF as defineComponent, bG as useI18n, bM as resolveComponent, bO as createBlock, bP as withCtx, bQ as openBlock, bR as createTextVNode, bS as toDisplayString, bT as unref, fG as createBaseVNode } from './main-BpBTVFw9.js';
import './preload-helper-dJJaZANz.js';

const _hoisted_1 = { class: "flex flex-row justify-center items-center mt-16" };
const _hoisted_2 = { class: "mt-16" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "p2-screen-1",
  props: {
    panel: { type: Object, required: true },
    greeting: { type: String }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode(" Gazebo/Panel 2/Screen A ")
        ])),
        content: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("gz.hello")) + " ", 1),
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => __props.panel.show({
                screen: "p-2-screen-2",
                props: { greeting: "Howdy?" }
              })),
              class: "bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
            }, " Go back to B "),
            createBaseVNode("button", {
              type: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => __props.panel.show("p-2-screen-3")),
              class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
            }, " Go to C ")
          ]),
          createBaseVNode("p", _hoisted_2, toDisplayString(__props.greeting), 1)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

export { _sfc_main as default };
