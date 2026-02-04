import { _ as __vitePreload } from './preload-helper-a4975f27.js';
import { bG as defineComponent, bH as useI18n, bI as inject, bJ as ref, bK as onMounted, bL as onBeforeUnmount, bM as computed, bN as resolveComponent, bO as resolveDirective, bP as openBlock, bQ as createBlock, bR as withCtx, bS as createTextVNode, bT as toDisplayString, bU as unref, bV as createVNode, bW as withDirectives, bX as createElementBlock, bY as Fragment, bZ as renderList, b_ as defineAsyncComponent } from './main-ba570a3b.js';

const _hoisted_1 = ["content"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const legendHeader = defineAsyncComponent(() => __vitePreload(() => import('./header-8f42988b.js'),true?["./header-8f42988b.js","./main-ba570a3b.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./header-9648bea9.css"]:void 0,import.meta.url));
    const legendItem = defineAsyncComponent(() => __vitePreload(() => import('./item-c778c856.js'),true?["./item-c778c856.js","./main-ba570a3b.js","./preload-helper-a4975f27.js","./main-5c005d17.css","./marked.esm-4889c960.js","./item-c1880561.css"]:void 0,import.meta.url));
    const { t } = useI18n();
    const iApi = inject("iApi");
    const el = ref();
    const blurEvent = () => {
      el.value._tippy.hide();
    };
    const keyupEvent = (e) => {
      const evt = e;
      if (evt.key === "Tab" && el.value?.matches(":focus")) {
        el.value._tippy.show();
      }
    };
    onMounted(() => {
      el.value?.addEventListener("blur", blurEvent);
      el.value?.addEventListener("keyup", keyupEvent);
    });
    onBeforeUnmount(() => {
      el.value?.removeEventListener("blur", blurEvent);
      el.value?.removeEventListener("keyup", keyupEvent);
    });
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
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("legend.title")), 1)
        ]),
        content: withCtx(() => [
          createVNode(unref(legendHeader)),
          withDirectives((openBlock(), createElementBlock("div", {
            content: unref(t)("panels.controls.items"),
            ref_key: "el",
            ref: el
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(children.value, (item) => {
              return openBlock(), createBlock(unref(legendItem), {
                legendItem: item,
                key: item.uid
              }, null, 8, ["legendItem"]);
            }), 128))
          ], 8, _hoisted_1)), [
            [_directive_focus_list],
            [_directive_tippy, {
              trigger: "manual",
              placement: "top-end",
              maxWidth: 190
            }]
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

export { _sfc_main as _ };
