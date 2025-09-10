import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { co as defineComponent, cp as useI18n, cq as inject, cr as computed, cs as resolveComponent, ct as resolveDirective, cu as openBlock, cv as createBlock, cw as withCtx, cx as createTextVNode, cy as toDisplayString, cz as unref, cA as createVNode, cB as withDirectives, cC as createElementBlock, cD as Fragment, cE as renderList, cF as defineAsyncComponent } from './main-8822140d.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const legendHeader = defineAsyncComponent(() => __vitePreload(() => import('./header-93324081.js'),true?["./header-93324081.js","./main-8822140d.js","./preload-helper-a4975f27.js","./main-4fa92696.css","./header-bde5f6ca.css"]:void 0,import.meta.url));
    const legendItem = defineAsyncComponent(() => __vitePreload(() => import('./item-79f61690.js'),true?["./item-79f61690.js","./main-8822140d.js","./preload-helper-a4975f27.js","./main-4fa92696.css","./marked.esm-4889c960.js","./item-549a1a2f.css"]:void 0,import.meta.url));
    const { t } = useI18n();
    const iApi = inject("iApi");
    const children = computed(() => {
      let legendApi = iApi.fixture.get("legend");
      if (legendApi) {
        return [...legendApi.getLegend()];
      }
      return [];
    });
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      const _directive_focus_list = resolveDirective("focus-list");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("legend.title")), 1)
        ]),
        content: withCtx(() => [
          createVNode(unref(legendHeader)),
          withDirectives((openBlock(), createElementBlock("div", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(children.value, (item) => {
              return openBlock(), createBlock(unref(legendItem), {
                legendItem: item,
                key: item.uid
              }, null, 8, ["legendItem"]);
            }), 128))
          ])), [
            [_directive_focus_list]
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

export { _sfc_main as _ };
