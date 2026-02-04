import { bF as defineComponent, bG as useI18n, fE as usePanelStore, fF as useExportStore, bL as computed, bM as resolveComponent, bN as resolveDirective, bV as withDirectives, bQ as openBlock, bO as createBlock, bP as withCtx, fG as createBaseVNode, bW as createElementBlock, bY as renderList, fH as normalizeClass, bS as toDisplayString, bT as unref, bX as Fragment, bH as inject, bI as ref, fI as useTemplateRef, fJ as debounce, fK as onBeforeMount, fL as watch, bJ as onMounted, bK as onBeforeUnmount, bU as createVNode, bR as createTextVNode, fM as createCommentVNode } from './main-48Jy8Lgr.js';

const _hoisted_1$1 = ["onClick", "aria-label"];
const _hoisted_2$1 = { class: "md-icon-small inline" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "settings-button",
  props: {
    componentSelectedState: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const panelStore = usePanelStore();
    const exportStore = useExportStore();
    const dropdownPlacement = computed(() => panelStore.mobileView ? "top-end" : "left-end");
    const toggleComponent = (component) => {
      if (!component.selectable) {
        return;
      }
      exportStore.toggleSelected({
        name: component.name
      });
    };
    return (_ctx, _cache) => {
      const _component_dropdown_menu = resolveComponent("dropdown-menu");
      const _directive_focus_item = resolveDirective("focus-item");
      return withDirectives((openBlock(), createBlock(_component_dropdown_menu, {
        position: dropdownPlacement.value,
        tooltip: unref(t)("export.menu"),
        tooltipPlacement: "top"
      }, {
        header: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "flex items-center text-gray-400 w-full h-full hover:text-black p-4 sm:p-8" }, [
            createBaseVNode("svg", {
              class: "fill-current w-24 h-24 m-auto",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              createBaseVNode("g", null, [
                createBaseVNode("path", {
                  d: "M0,0h24v24H0V0z",
                  fill: "none"
                }),
                createBaseVNode("path", { d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" })
              ])
            ])
          ], -1)
        ])),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.componentSelectedState, (component) => {
            return openBlock(), createElementBlock("a", {
              key: component.name,
              onClick: ($event) => toggleComponent(component),
              href: "javascript:;",
              class: normalizeClass(`text-left text-sm sm:text-base ${component.selectable ? "cursor-pointer" : "cursor-default"}`),
              "aria-label": component.name
            }, [
              createBaseVNode("div", _hoisted_2$1, [
                (openBlock(), createElementBlock("svg", {
                  height: "20",
                  width: "20",
                  viewBox: "0 0 24 24",
                  class: normalizeClass(`inline mx-8 ${!component.selected ? "invisible" : ""}`)
                }, _cache[1] || (_cache[1] = [
                  createBaseVNode("g", null, [
                    createBaseVNode("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
                  ], -1)
                ]), 2)),
                createBaseVNode("span", {
                  class: normalizeClass(`inline ${!component.selectable ? "text-gray-300" : ""}
                    `)
                }, toDisplayString(unref(t)(`export.menu.component.${component.name}`)), 3)
              ])
            ], 10, _hoisted_1$1);
          }), 128))
        ]),
        _: 1
      }, 8, ["position", "tooltip"])), [
        [_directive_focus_item]
      ]);
    };
  }
});

const _hoisted_1 = { ref: "componentEl" };
const _hoisted_2 = { class: "flex" };
const _hoisted_3 = ["aria-label"];
const _hoisted_4 = ["aria-label"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const iApi = inject("iApi");
    const exportStore = useExportStore();
    const fixture = ref();
    const resizeObserver = ref(void 0);
    const watchers = ref([]);
    const el = useTemplateRef("componentEl");
    const componentSelectedState = computed(() => exportStore.componentSelectedState);
    const selectedComponents = computed(() => {
      let state = {};
      if (fixture.value) {
        Object.keys(componentSelectedState.value).forEach((component) => {
          state[component] = {
            name: component,
            selected: componentSelectedState.value[component] ?? false,
            selectable: (fixture.value?.config)[component]?.selectable ?? true
          };
        });
      }
      return state;
    });
    const hasCustomRenderer = computed(() => {
      return !!fixture.value?.customRendererFunc;
    });
    const make = debounce(300, () => {
      if (!fixture.value || !el.value) {
        return;
      }
      const canvasElement = el.value.querySelector(".export-canvas");
      fixture.value.make(canvasElement, el.value.clientWidth);
    });
    onBeforeMount(() => {
      props.panel.exportMake = make;
      watchers.value.push(
        // Listen for any changes to the settings, and refresh the image when they do change
        watch(selectedComponents, () => {
          make();
        })
      );
    });
    onMounted(() => {
      fixture.value = iApi.fixture.get("export");
      resizeObserver.value = new ResizeObserver(() => {
        make();
      });
      resizeObserver.value.observe(iApi?.$vApp.$root?.$el);
    });
    onBeforeUnmount(() => {
      resizeObserver.value.disconnect();
      watchers.value.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_panel_screen, {
          panel: __props.panel,
          footer: true
        }, {
          header: withCtx(() => [
            createTextVNode(toDisplayString(unref(t)("export.title")), 1)
          ]),
          content: withCtx(() => _cache[2] || (_cache[2] = [
            createBaseVNode("div", { class: "overflow-hidden border border-gray-200" }, [
              createBaseVNode("canvas", { class: "export-canvas !w-[100%]" })
            ], -1)
          ])),
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("button", {
                type: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => fixture.value?.export()),
                class: "bg-green-700 hover:bg-green-800 text-white font-bold py-8 px-4 sm:px-16 mr-8 sm:mr-16",
                "aria-label": unref(t)("export.download")
              }, toDisplayString(unref(t)("export.download")), 9, _hoisted_3),
              createBaseVNode("button", {
                type: "button",
                onClick: _cache[1] || (_cache[1] = ($event) => unref(make)()),
                class: "py-8 px-4 sm:px-16",
                "aria-label": unref(t)("export.refresh")
              }, toDisplayString(unref(t)("export.refresh")), 9, _hoisted_4),
              !hasCustomRenderer.value ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                componentSelectedState: selectedComponents.value,
                class: "ml-auto flex px-4 sm:px-8"
              }, null, 8, ["componentSelectedState"])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["panel"])
      ], 512);
    };
  }
});

export { _sfc_main as _ };
