const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./header-B94Bfvlv.js","./main-B92PJIAd.js","./preload-helper-dJJaZANz.js","./main-BjH693uE.css","./header-DCuaZtjJ.css","./item-oCC6mi0V.js","./marked.esm-DcwJ8j7Z.js","./item-EOH1U8SX.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { bF as defineComponent, bG as useI18n, bH as inject, bI as ref, bJ as onMounted, bK as onBeforeUnmount, bL as computed, bM as resolveComponent, bN as resolveDirective, bO as createBlock, bP as withCtx, bQ as openBlock, bR as createTextVNode, bS as toDisplayString, bT as unref, bU as createVNode, bV as withDirectives, bW as createElementBlock, bX as Fragment, bY as renderList, bZ as defineAsyncComponent } from './main-B92PJIAd.js';

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
    const legendHeader = defineAsyncComponent(() => __vitePreload(() => import('./header-B94Bfvlv.js'),true?__vite__mapDeps([0,1,2,3,4]):void 0,import.meta.url));
    const legendItem = defineAsyncComponent(() => __vitePreload(() => import('./item-oCC6mi0V.js'),true?__vite__mapDeps([5,1,2,3,6,7]):void 0,import.meta.url));
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
