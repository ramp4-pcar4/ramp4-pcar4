import { c2 as defineComponent, hp as useLegendStore, c3 as useI18n, c4 as inject, c5 as computed, c6 as resolveComponent, c7 as resolveDirective, c8 as openBlock, cg as createElementBlock, fn as createBaseVNode, cf as withDirectives, hq as vShow, cd as unref, c9 as createBlock, ca as withCtx, cc as toDisplayString, hr as GlobalEvents, hs as pushScopeId, ht as popScopeId, hu as _export_sfc } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

const _withScopeId = (n) => (pushScopeId("data-v-f9f7226b"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "relative legend-header flex align-middle" };
const _hoisted_2 = ["content", "aria-label"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "p-8" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "fill-current w-18 h-18 flip",
    viewBox: "0 0 23 21"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
  ])
], -1));
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = ["content", "aria-label"];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "p-8" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "fill-current w-18 h-18 flip",
    viewBox: "0 0 23 21"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }),
    /* @__PURE__ */ createBaseVNode("path", { d: "M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" })
  ])
], -1));
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "flex-1" }, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "p-8" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "fill-current w-18 h-18",
    viewBox: "0 0 23 21"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
  ])
], -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex p-8" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "fill-current w-18 h-18",
    viewBox: "0 0 23 21"
  }, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" })
  ])
], -1));
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
        return !!iApi.fixture.get("wizard");
      } catch (e) {
        return false;
      }
    };
    const toggleLayerReorder = () => {
      iApi.event.emit(GlobalEvents.REORDER_TOGGLE);
    };
    const getLayerReorderExists = () => {
      try {
        return !!iApi.fixture.get("layer-reorder");
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
          }, _hoisted_4, 8, _hoisted_2)), [
            [vShow, getWizardExists() && isControlAvailable("wizard")],
            [_directive_tippy, { placement: "right" }]
          ])
        ]),
        createBaseVNode("div", null, [
          withDirectives((openBlock(), createElementBlock("button", {
            type: "button",
            onClick: toggleLayerReorder,
            class: "relative mr-auto text-gray-500 hover:text-black",
            content: unref(t)("legend.header.reorderlayers"),
            "aria-label": unref(t)("legend.header.reorderlayers")
          }, _hoisted_7, 8, _hoisted_5)), [
            [
              vShow,
              getLayerReorderExists() && isControlAvailable("layerReorder")
            ],
            [_directive_tippy, { placement: "right" }]
          ])
        ]),
        _hoisted_8,
        withDirectives((openBlock(), createBlock(_component_dropdown_menu, {
          class: "relative",
          position: "left-start",
          content: unref(t)("legend.header.groups")
        }, {
          header: withCtx(() => [
            _hoisted_9
          ]),
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
        }, 8, ["content"])), [
          [_directive_tippy, { placement: "left" }],
          [vShow, isControlAvailable("groupToggle")]
        ]),
        withDirectives((openBlock(), createBlock(_component_dropdown_menu, {
          class: "relative",
          position: "left-start",
          content: unref(t)("legend.header.visible")
        }, {
          header: withCtx(() => [
            _hoisted_10
          ]),
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
        }, 8, ["content"])), [
          [_directive_tippy, { placement: "left" }],
          [vShow, isControlAvailable("visibilityToggle")]
        ])
      ]);
    };
  }
});

const header_vue_vue_type_style_index_0_scoped_f9f7226b_lang = '';

const header = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f9f7226b"]]);

export { header as default };
