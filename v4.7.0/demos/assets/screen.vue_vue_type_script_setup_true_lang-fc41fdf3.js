import { bG as defineComponent, bH as useI18n, bI as inject, ir as useConfigStore, bJ as computed, bL as resolveDirective, bM as openBlock, bU as createElementBlock, bT as withDirectives, bR as unref, fE as createBaseVNode, fD as normalizeClass, bV as Fragment, bW as renderList, bQ as toDisplayString, ip as withModifiers, iq as withKeys, fL as createCommentVNode, i8 as pushScopeId, i9 as popScopeId, ia as _export_sfc, fF as ref, fJ as onMounted, bK as resolveComponent, bN as createBlock, bO as withCtx, bP as createTextVNode, bS as createVNode } from './main-b03b5063.js';

const _withScopeId = (n) => (pushScopeId("data-v-73c5c8cf"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "mb-10" };
const _hoisted_2$1 = ["aria-label"];
const _hoisted_3$1 = {
  key: 0,
  class: "w-full h-30"
};
const _hoisted_4 = ["alt", "src"];
const _hoisted_5 = ["alt", "src"];
const _hoisted_6 = ["alt"];
const _hoisted_7 = { class: "pl-5" };
const _hoisted_8 = { class: "ml-auto pr-5" };
const _hoisted_9 = ["content"];
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "fill-current w-16 h-16",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
], -1));
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
};
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "fill-current w-25 h-25 relative",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
], -1));
const _hoisted_14 = [
  _hoisted_13
];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "item",
  props: {
    basemap: {
      type: Object,
      required: true
    },
    tileSchema: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const configStore = useConfigStore();
    const selectedBasemap = computed(
      () => configStore.activeBasemapConfig
    );
    const selectBasemap = (basemap) => {
      if (basemap.id !== selectedBasemap.value.id) {
        iApi?.geo.map.setBasemap(basemap.id);
      }
    };
    return (_ctx, _cache) => {
      const _directive_truncate = resolveDirective("truncate");
      const _directive_tippy = resolveDirective("tippy");
      const _directive_focus_item = resolveDirective("focus-item");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        withDirectives((openBlock(), createElementBlock("button", {
          class: "basemap-item-button bg-gray-300 w-full h-full",
          type: "button",
          "aria-label": unref(t)("basemap.select"),
          onClick: _cache[2] || (_cache[2] = ($event) => selectBasemap(__props.basemap))
        }, [
          createBaseVNode("div", null, [
            createBaseVNode("div", {
              class: normalizeClass(["flex hover:opacity-50 basemap-item-image basemap-item-container", !__props.basemap.hideThumbnail ? "h-180" : "h-30"])
            }, [
              __props.basemap.hideThumbnail ? (openBlock(), createElementBlock("img", _hoisted_3$1)) : __props.basemap.thumbnailUrl ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "w-full h-180",
                alt: __props.basemap.altText,
                src: __props.basemap.thumbnailUrl
              }, null, 8, _hoisted_4)) : __props.tileSchema.thumbnailTileUrls && __props.tileSchema.thumbnailTileUrls.length > 0 && __props.basemap.layers.every(
                (layer) => layer.layerType === "esri-tile"
              ) ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(__props.basemap.layers, (layer) => {
                return openBlock(), createElementBlock("div", {
                  key: layer.id,
                  class: "flex basemap-item-inner h-180"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tileSchema.thumbnailTileUrls, (url, idx) => {
                    return openBlock(), createElementBlock("img", {
                      class: "w-full",
                      alt: __props.basemap.altText,
                      src: layer.url + url,
                      key: idx
                    }, null, 8, _hoisted_5);
                  }), 128))
                ]);
              }), 128)) : (openBlock(), createElementBlock("img", {
                key: 3,
                class: "w-full bg-white h-180",
                alt: __props.basemap.altText,
                src: "https://openclipart.org/image/800px/275366"
              }, null, 8, _hoisted_6))
            ], 2)
          ]),
          createBaseVNode("div", {
            class: normalizeClass([
              "absolute flex w-full bg-black text-white h-30 bottom-6 items-center",
              __props.basemap.hideThumbnail && __props.basemap.id === selectedBasemap.value.id ? "opacity-85" : "opacity-75"
            ])
          }, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_7, [
              createBaseVNode("span", null, toDisplayString(__props.basemap.name), 1)
            ])), [
              [_directive_truncate]
            ]),
            createBaseVNode("div", _hoisted_8, [
              withDirectives((openBlock(), createElementBlock("a", {
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                }, ["stop"])),
                onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: __props.basemap.description
              }, _hoisted_11, 40, _hoisted_9)), [
                [_directive_tippy, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ])
          ], 2),
          __props.basemap.id === selectedBasemap.value.id && !__props.basemap.hideThumbnail ? (openBlock(), createElementBlock("div", _hoisted_12, _hoisted_14)) : createCommentVNode("", true)
        ], 8, _hoisted_2$1)), [
          [_directive_focus_item]
        ])
      ]);
    };
  }
});

const item_vue_vue_type_style_index_0_scoped_73c5c8cf_lang = '';

const BasemapItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-73c5c8cf"]]);

const _hoisted_1 = { class: "h-600 overflow-y-auto" };
const _hoisted_2 = { class: "font-bold text-xl" };
const _hoisted_3 = {
  key: 0,
  class: "border-t border-b border-gray-600"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const configStore = useConfigStore();
    const tileSchemas = ref([]);
    const basemaps = ref([]);
    onMounted(() => {
      const mapConfig = configStore.config.map;
      tileSchemas.value = mapConfig.tileSchemas;
      basemaps.value = mapConfig.basemaps;
    });
    const filterBasemaps = (schemaId) => basemaps.value.filter(
      (basemap) => basemap.tileSchemaId === schemaId
    );
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      const _directive_truncate = resolveDirective("truncate");
      const _directive_focus_list = resolveDirective("focus-list");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("basemap.title")), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tileSchemas.value, (tileSchema, idx) => {
              return openBlock(), createElementBlock("div", {
                class: "mx-5",
                key: tileSchema.id
              }, [
                createBaseVNode("div", {
                  class: normalizeClass((idx === 0 ? "mt-5" : "mt-36") + " flex mb-5")
                }, [
                  withDirectives((openBlock(), createElementBlock("h3", _hoisted_2, [
                    createTextVNode(toDisplayString(tileSchema.name), 1)
                  ])), [
                    [_directive_truncate]
                  ])
                ], 2),
                basemaps.value.length > 0 ? withDirectives((openBlock(), createElementBlock("ul", _hoisted_3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(filterBasemaps(tileSchema.id), (basemap) => {
                    return openBlock(), createElementBlock("li", {
                      key: basemap.id
                    }, [
                      createVNode(BasemapItem, {
                        basemap,
                        tileSchema,
                        class: "block relative overflow-hidden"
                      }, null, 8, ["basemap", "tileSchema"])
                    ]);
                  }), 128))
                ])), [
                  [_directive_focus_list]
                ]) : createCommentVNode("", true)
              ]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

export { _sfc_main as _ };
