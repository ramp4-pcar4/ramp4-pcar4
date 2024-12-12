import { c4 as defineComponent, c5 as useI18n, c6 as inject, iP as useConfigStore, ca as computed, cc as resolveDirective, cf as openBlock, cl as createElementBlock, ck as withDirectives, ci as unref, fZ as createBaseVNode, f_ as normalizeClass, cm as Fragment, cn as renderList, ch as toDisplayString, iN as withModifiers, iO as withKeys, g3 as createCommentVNode, iB as _export_sfc, f$ as useTemplateRef, c7 as ref, c8 as onMounted, c9 as onBeforeUnmount, cb as resolveComponent, cd as createBlock, ce as withCtx, cg as createTextVNode, cj as createVNode } from './main-YSH8Qvd0.js';

const _hoisted_1$1 = { class: "mb-10" };
const _hoisted_2$1 = ["aria-label"];
const _hoisted_3$1 = {
  key: 0,
  class: "w-full h-30 hidden"
};
const _hoisted_4$1 = ["alt", "src"];
const _hoisted_5 = ["alt", "src"];
const _hoisted_6 = ["alt"];
const _hoisted_7 = { class: "pl-5" };
const _hoisted_8 = { class: "ml-auto pr-5" };
const _hoisted_9 = ["content"];
const _hoisted_10 = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
};
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
    const selectedBasemap = computed(() => configStore.activeBasemapConfig);
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
              __props.basemap.hideThumbnail ? (openBlock(), createElementBlock("div", _hoisted_3$1)) : __props.basemap.thumbnailUrl ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "w-full h-180",
                alt: __props.basemap.altText,
                src: __props.basemap.thumbnailUrl
              }, null, 8, _hoisted_4$1)) : __props.tileSchema.thumbnailTileUrls && __props.tileSchema.thumbnailTileUrls.length > 0 && __props.basemap.layers.every((layer) => layer.layerType === "esri-tile") ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(__props.basemap.layers, (layer) => {
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
            class: normalizeClass(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", __props.basemap.hideThumbnail && __props.basemap.id === selectedBasemap.value.id ? "opacity-85" : "opacity-75"])
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
              ]), 40, _hoisted_9)), [
                [_directive_tippy, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ])
          ], 2),
          __props.basemap.id === selectedBasemap.value.id && !__props.basemap.hideThumbnail ? (openBlock(), createElementBlock("div", _hoisted_10, _cache[4] || (_cache[4] = [
            createBaseVNode("svg", {
              class: "fill-current w-25 h-25 relative",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              createBaseVNode("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
            ], -1)
          ]))) : createCommentVNode("", true)
        ], 8, _hoisted_2$1)), [
          [_directive_focus_item]
        ])
      ]);
    };
  }
});

const BasemapItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-15c7e811"]]);

const _hoisted_1 = ["content"];
const _hoisted_2 = { class: "h-600 overflow-y-auto" };
const _hoisted_3 = { class: "font-bold text-xl" };
const _hoisted_4 = {
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
    const el = useTemplateRef("el");
    const tileSchemas = ref([]);
    const basemaps = ref([]);
    const keyupEvent = (e) => {
      const evt = e;
      if (evt.key === "Tab" && el.value?.matches(":focus")) {
        el.value._tippy.show();
      }
    };
    const blurEvent = () => {
      el.value._tippy.hide();
    };
    onMounted(() => {
      const mapConfig = configStore.config.map;
      tileSchemas.value = mapConfig.tileSchemas;
      basemaps.value = mapConfig.basemaps;
      el.value?.addEventListener("blur", blurEvent);
      el.value?.addEventListener("keyup", keyupEvent);
    });
    onBeforeUnmount(() => {
      el.value?.removeEventListener("blur", blurEvent);
      el.value?.removeEventListener("keyup", keyupEvent);
    });
    const filterBasemaps = (schemaId) => basemaps.value.filter((basemap) => basemap.tileSchemaId === schemaId);
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      const _directive_truncate = resolveDirective("truncate");
      const _directive_focus_list = resolveDirective("focus-list");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("basemap.title")), 1)
        ]),
        content: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            content: unref(t)("panels.controls.items"),
            ref_key: "el",
            ref: el
          }, [
            createBaseVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(tileSchemas.value, (tileSchema, idx) => {
                return openBlock(), createElementBlock("div", {
                  class: "mx-5",
                  key: tileSchema.id
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass((idx === 0 ? "mt-5" : "mt-36") + " flex mb-5")
                  }, [
                    withDirectives((openBlock(), createElementBlock("h3", _hoisted_3, [
                      createTextVNode(toDisplayString(tileSchema.name), 1)
                    ])), [
                      [_directive_truncate]
                    ])
                  ], 2),
                  basemaps.value.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_4, [
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
                  ])) : createCommentVNode("", true)
                ]);
              }), 128))
            ])
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
