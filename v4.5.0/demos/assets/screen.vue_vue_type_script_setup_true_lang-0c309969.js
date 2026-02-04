import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { c2 as defineComponent, c3 as useI18n, c4 as inject, c5 as computed, c6 as resolveComponent, c7 as resolveDirective, c8 as openBlock, c9 as createBlock, ca as withCtx, cb as createTextVNode, cc as toDisplayString, cd as unref, ce as createVNode, cf as withDirectives, cg as createElementBlock, ch as Fragment, ci as renderList, cj as defineAsyncComponent } from './main-5658cd6e.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const legendHeader = defineAsyncComponent(() => __vitePreload(() => import('./header-fe17cec9.js'),true?["./header-fe17cec9.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./header-bde5f6ca.css"]:void 0,import.meta.url));
    const legendItem = defineAsyncComponent(() => __vitePreload(() => import('./item-de6e339a.js'),true?["./item-de6e339a.js","./main-5658cd6e.js","./preload-helper-a4975f27.js","./main-2af48127.css","./marked.esm-4889c960.js","./item-f09930ab.css"]:void 0,import.meta.url));
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
