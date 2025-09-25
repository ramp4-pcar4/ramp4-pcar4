import { bG as defineComponent, bH as useI18n, bK as resolveComponent, bM as openBlock, bN as createBlock, bO as withCtx, bP as createTextVNode, bQ as toDisplayString, bR as unref, fE as createBaseVNode } from './main-b03b5063.js';
import './preload-helper-a4975f27.js';

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
        header: withCtx(() => [
          createTextVNode(" Gazebo/Panel 2/Screen A ")
        ]),
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
