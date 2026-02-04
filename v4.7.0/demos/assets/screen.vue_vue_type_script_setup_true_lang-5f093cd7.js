import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { bG as defineComponent, bH as useI18n, bI as inject, bJ as computed, bK as resolveComponent, bL as resolveDirective, bM as openBlock, bN as createBlock, bO as withCtx, bP as createTextVNode, bQ as toDisplayString, bR as unref, bS as createVNode, bT as withDirectives, bU as createElementBlock, bV as Fragment, bW as renderList, bX as defineAsyncComponent } from './main-b03b5063.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const legendHeader = defineAsyncComponent(() => __vitePreload(() => import('./header-5946fd24.js'),true?["./header-5946fd24.js","./main-b03b5063.js","./preload-helper-a4975f27.js","./main-5a0b2c49.css","./header-9648bea9.css"]:void 0,import.meta.url));
    const legendItem = defineAsyncComponent(() => __vitePreload(() => import('./item-c5af4a85.js'),true?["./item-c5af4a85.js","./main-b03b5063.js","./preload-helper-a4975f27.js","./main-5a0b2c49.css","./marked.esm-4889c960.js","./item-d5e7f431.css"]:void 0,import.meta.url));
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
