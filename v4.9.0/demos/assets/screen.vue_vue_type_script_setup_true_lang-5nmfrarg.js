import { bF as defineComponent, bG as useI18n, bH as inject, bN as resolveDirective, bQ as openBlock, bW as createElementBlock, bV as withDirectives, fH as normalizeClass, bT as unref, fG as createBaseVNode, fM as createCommentVNode, bS as toDisplayString, im as withModifiers, io as withKeys, i7 as vShow, fP as Extent, i8 as _export_sfc, hd as useAreasOfInterestStore, bL as computed, bI as ref, bJ as onMounted, bM as resolveComponent, bO as createBlock, bP as withCtx, bR as createTextVNode, bX as Fragment, bY as renderList, bU as createVNode } from './main-DbwmOBz5.js';

const _hoisted_1$1 = { class: "mt-10" };
const _hoisted_2$1 = ["aria-label"];
const _hoisted_3$1 = ["alt", "src"];
const _hoisted_4 = ["alt"];
const _hoisted_5 = { class: "absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center" };
const _hoisted_6 = { class: "pl-5" };
const _hoisted_7 = { class: "ml-auto pr-5" };
const _hoisted_8 = ["content"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "item",
  props: {
    area: {
      type: Object,
      required: true
    },
    showThumbnail: {
      type: Boolean
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const selectAreaOfInterest = (area) => {
      if (!area.extent) {
        console.error("selected area of interest doesn't have an extent specified.");
        return;
      }
      iApi?.geo.map.zoomMapTo(Extent.fromConfig(`area-of-interest-extent`, area.extent));
    };
    return (_ctx, _cache) => {
      const _directive_truncate = resolveDirective("truncate");
      const _directive_tippy = resolveDirective("tippy");
      const _directive_focus_item = resolveDirective("focus-item");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        withDirectives((openBlock(), createElementBlock("button", {
          type: "button",
          class: normalizeClass(["area-of-interest-item-button bg-gray-300 w-full", { "border border-gray-300": __props.showThumbnail }]),
          "aria-label": unref(t)("areas-of-interest.select"),
          onClick: _cache[2] || (_cache[2] = ($event) => selectAreaOfInterest(__props.area))
        }, [
          createBaseVNode("div", null, [
            createBaseVNode("div", {
              class: normalizeClass(["flex hover:opacity-50 area-of-interest-item-image", __props.showThumbnail ? "h-180" : "h-30"])
            }, [
              __props.area.thumbnail ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "w-full bg-white object-contain",
                alt: __props.area.altText || __props.area.title,
                src: __props.area.thumbnail
              }, null, 8, _hoisted_3$1)) : __props.showThumbnail ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "w-full bg-white object-contain py-30",
                alt: __props.area.altText || __props.area.title,
                src: "https://openclipart.org/image/800px/160615"
              }, null, 8, _hoisted_4)) : createCommentVNode("", true)
            ], 2)
          ]),
          createBaseVNode("div", _hoisted_5, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("span", null, toDisplayString(__props.area.title), 1)
            ])), [
              [_directive_truncate]
            ]),
            withDirectives(createBaseVNode("div", _hoisted_7, [
              withDirectives((openBlock(), createElementBlock("a", {
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"])),
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: __props.area.description
              }, _cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  createBaseVNode("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  createBaseVNode("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, _hoisted_8)), [
                [_directive_tippy, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ], 512), [
              [vShow, __props.area.description]
            ])
          ])
        ], 10, _hoisted_2$1)), [
          [_directive_focus_item]
        ])
      ]);
    };
  }
});

const AreaItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7082d36c"]]);

const _hoisted_1 = { class: "h-600 overflow-y-auto" };
const _hoisted_2 = { class: "mx-5" };
const _hoisted_3 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const areasOfInterestStore = useAreasOfInterestStore();
    const areas = computed(() => areasOfInterestStore.areas);
    let showThumbnail = ref(false);
    onMounted(() => {
      showThumbnail.value = !!areas.value?.some((area) => area.thumbnail);
    });
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      const _directive_focus_list = resolveDirective("focus-list");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("areas-of-interest.title")), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              areas.value.length > 0 ? withDirectives((openBlock(), createElementBlock("ul", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(areas.value, (area, idx) => {
                  return openBlock(), createElementBlock("li", { key: idx }, [
                    createVNode(AreaItem, {
                      area,
                      "show-thumbnail": unref(showThumbnail),
                      class: "block relative overflow-hidden"
                    }, null, 8, ["area", "show-thumbnail"])
                  ]);
                }), 128))
              ])), [
                [_directive_focus_list]
              ]) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

export { _sfc_main as _ };
