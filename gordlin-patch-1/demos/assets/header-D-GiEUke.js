import { bF as defineComponent, i6 as useLegendStore, bG as useI18n, bH as inject, bL as computed, bM as resolveComponent, bN as resolveDirective, bQ as openBlock, bW as createElementBlock, fG as createBaseVNode, bV as withDirectives, i7 as vShow, bT as unref, bU as createVNode, bP as withCtx, bS as toDisplayString, fO as GlobalEvents, i8 as _export_sfc } from './main-BpBTVFw9.js';
import './preload-helper-dJJaZANz.js';

const _hoisted_1 = { class: "relative legend-header flex align-middle" };
const _hoisted_2 = ["content", "aria-label"];
const _hoisted_3 = ["content", "aria-label"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "header",
  setup(__props) {
    const legendStore = useLegendStore();
    const { t } = useI18n();
    const iApi = inject("iApi");
    const legendApi = computed(() => iApi.fixture.get("legend"));
    const toggleWizard = () => {
      iApi.event.emit(GlobalEvents.WIZARD_TOGGLE);
    };
    const getWizardExists = () => {
      try {
        return iApi.fixture.exists("wizard");
      } catch (e) {
        return false;
      }
    };
    const toggleLayerReorder = () => {
      iApi.event.emit(GlobalEvents.REORDER_TOGGLE);
    };
    const getLayerReorderExists = () => {
      try {
        return iApi.fixture.exists("layer-reorder");
      } catch (e) {
        return false;
      }
    };
    const isControlAvailable = (control) => {
      const hc = legendStore.headerControls;
      return hc.includes(control);
    };
    return (_ctx, _cache) => {
      const _component_dropdown_menu = resolveComponent("dropdown-menu");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", null, [
          withDirectives((openBlock(), createElementBlock("button", {
            type: "button",
            onClick: toggleWizard,
            class: "relative mr-auto text-gray-500 hover:text-black",
            content: unref(t)("legend.header.addlayer"),
            "aria-label": unref(t)("legend.header.addlayer")
          }, _cache[4] || (_cache[4] = [
            createBaseVNode("div", { class: "p-8" }, [
              createBaseVNode("svg", {
                class: "fill-current w-18 h-18 flip",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
              ])
            ], -1)
          ]), 8, _hoisted_2)), [
            [vShow, getWizardExists() && isControlAvailable("wizard")],
            [_directive_tippy, { placement: "right" }]
          ])
        ]),
        createBaseVNode("div", null, [
          withDirectives((openBlock(), createElementBlock("button", {
            type: "button",
            onClick: toggleLayerReorder,
            class: "relative mr-auto text-gray-500 hover:text-black flex justify-center items-center",
            content: unref(t)("legend.header.reorderlayers"),
            "aria-label": unref(t)("legend.header.reorderlayers")
          }, _cache[5] || (_cache[5] = [
            createBaseVNode("div", { class: "p-8" }, [
              createBaseVNode("svg", {
                class: "fill-current w-18 h-18 flip",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", {
                  d: "M0 0h24v24H0z",
                  fill: "none"
                }),
                createBaseVNode("path", { d: "M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" })
              ])
            ], -1)
          ]), 8, _hoisted_3)), [
            [vShow, getLayerReorderExists() && isControlAvailable("layerReorder")],
            [_directive_tippy, { placement: "right" }]
          ])
        ]),
        _cache[8] || (_cache[8] = createBaseVNode("span", { class: "flex-1" }, null, -1)),
        withDirectives(createVNode(_component_dropdown_menu, {
          class: "relative",
          position: "left-start",
          tooltip: unref(t)("legend.header.groups"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: withCtx(() => _cache[6] || (_cache[6] = [
            createBaseVNode("div", { class: "p-8" }, [
              createBaseVNode("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
              ])
            ], -1)
          ])),
          default: withCtx(() => [
            createBaseVNode("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: _cache[0] || (_cache[0] = ($event) => legendApi.value.expandItems(true))
            }, toDisplayString(unref(t)("legend.header.groups.expand")), 1),
            createBaseVNode("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: _cache[1] || (_cache[1] = ($event) => legendApi.value.expandItems(false))
            }, toDisplayString(unref(t)("legend.header.groups.collapse")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [vShow, isControlAvailable("groupToggle")]
        ]),
        withDirectives(createVNode(_component_dropdown_menu, {
          class: "relative",
          position: "left-start",
          tooltip: unref(t)("legend.header.visible"),
          tooltipPlacement: "left-start",
          tooltipPlacementAlt: "bottom-end"
        }, {
          header: withCtx(() => _cache[7] || (_cache[7] = [
            createBaseVNode("div", { class: "flex p-8" }, [
              createBaseVNode("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })
              ])
            ], -1)
          ])),
          default: withCtx(() => [
            createBaseVNode("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: _cache[2] || (_cache[2] = ($event) => legendApi.value.showItems(true))
            }, toDisplayString(unref(t)("legend.header.visible.show")), 1),
            createBaseVNode("a", {
              href: "javascript:;",
              class: "flex leading-snug items-center overflow-hidden whitespace-nowrap",
              onClick: _cache[3] || (_cache[3] = ($event) => legendApi.value.showItems(false))
            }, toDisplayString(unref(t)("legend.header.visible.hide")), 1)
          ]),
          _: 1
        }, 8, ["tooltip"]), [
          [vShow, isControlAvailable("visibilityToggle")]
        ])
      ]);
    };
  }
});

const header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fadfb124"]]);

export { header as default };
