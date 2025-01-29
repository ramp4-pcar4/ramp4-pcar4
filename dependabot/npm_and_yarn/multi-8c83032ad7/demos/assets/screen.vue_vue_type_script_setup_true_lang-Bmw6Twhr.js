const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./header-h8Poj5p3.js","./main-CaWYn_3L.js","./preload-helper-dJJaZANz.js","./main-CRG1_KF0.css","./header-DCuaZtjJ.css","./item-BQ640TDp.js","./marked.esm-DcwJ8j7Z.js","./item-EOH1U8SX.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './preload-helper-dJJaZANz.js';
import { c4 as defineComponent, c5 as useI18n, c6 as inject, c7 as ref, c8 as onMounted, c9 as onBeforeUnmount, ca as computed, cb as resolveComponent, cc as resolveDirective, cd as createBlock, ce as withCtx, cf as openBlock, cg as createTextVNode, ch as toDisplayString, ci as unref, cj as createVNode, ck as withDirectives, cl as createElementBlock, cm as Fragment, cn as renderList, co as defineAsyncComponent } from './main-CaWYn_3L.js';

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
    const legendHeader = defineAsyncComponent(() => __vitePreload(() => import('./header-h8Poj5p3.js'),true?__vite__mapDeps([0,1,2,3,4]):void 0,import.meta.url));
    const legendItem = defineAsyncComponent(() => __vitePreload(() => import('./item-BQ640TDp.js'),true?__vite__mapDeps([5,1,2,3,6,7]):void 0,import.meta.url));
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
