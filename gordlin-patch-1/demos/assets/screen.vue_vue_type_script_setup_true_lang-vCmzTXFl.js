import { bF as defineComponent, bG as useI18n, iv as useGeosearchStore, fE as usePanelStore, bL as computed, fJ as debounce, bN as resolveDirective, bQ as openBlock, bW as createElementBlock, fG as createBaseVNode, fH as normalizeClass, bT as unref, io as withKeys, im as withModifiers, bV as withDirectives, bR as createTextVNode, fM as createCommentVNode, bH as inject, bI as ref, fK as onBeforeMount, fL as watch, bK as onBeforeUnmount, bS as toDisplayString, bX as Fragment, bY as renderList, bJ as onMounted, fO as GlobalEvents, i8 as _export_sfc, ir as renderSlot, bM as resolveComponent, bO as createBlock, bP as withCtx, bU as createVNode, jX as Polygon, jY as SpatialReference } from './main-BpBTVFw9.js';

const _hoisted_1$4 = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" };
const _hoisted_2$4 = ["placeholder", "value", "aria-label"];
const _hoisted_3$4 = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" };
const _hoisted_4$3 = ["aria-label", "content"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "search-bar",
  setup(__props) {
    const { t } = useI18n();
    const geosearchStore = useGeosearchStore();
    const panelStore = usePanelStore();
    const searchVal = computed(() => geosearchStore.searchVal);
    const badChars = computed(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((bc) => geosearchStore.searchVal.includes(bc)).join("")
    );
    const setSearchTerm = (value) => {
      geosearchStore.setSearchTerm(value);
      geosearchStore.setSearchRegex(value);
    };
    const onSearchTermChange = debounce(500, (searchTerm) => {
      setSearchTerm(searchTerm);
    });
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("input", {
          type: "text",
          class: normalizeClass(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": badChars.value }]),
          placeholder: unref(t)("geosearch.searchText"),
          value: searchVal.value,
          onInput: _cache[0] || (_cache[0] = ($event) => unref(onSearchTermChange)($event.target.value)),
          onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => {
            if (unref(panelStore).mobileView) {
              $event.target.blur();
            }
          }, ["enter"])),
          "aria-label": unref(t)("geosearch.searchText"),
          onKeypress: _cache[2] || (_cache[2] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, _hoisted_2$4),
        createBaseVNode("span", _hoisted_3$4, [
          badChars.value ? withDirectives((openBlock(), createElementBlock("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": unref(t)("geosearch.badChars", { chars: badChars.value }),
            content: unref(t)("geosearch.badChars", { chars: badChars.value })
          }, _cache[3] || (_cache[3] = [
            createTextVNode(" ⚠ ")
          ]), 8, _hoisted_4$3)), [
            [_directive_tippy]
          ]) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});

const _hoisted_1$3 = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" };
const _hoisted_2$3 = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" };
const _hoisted_3$3 = ["value", "aria-label"];
const _hoisted_4$2 = {
  value: "",
  disabled: "",
  hidden: ""
};
const _hoisted_5$1 = { class: "sm:w-1/2 h-26 sm:mx-16 flex" };
const _hoisted_6$1 = ["value", "aria-label"];
const _hoisted_7$1 = {
  value: "",
  disabled: "",
  hidden: ""
};
const _hoisted_8$1 = ["disabled", "content", "aria-label"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "top-filters",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const geosearchStore = useGeosearchStore();
    const provinces = ref([]);
    const types = ref([]);
    const watchers = ref([]);
    const queryParams = computed(() => geosearchStore.queryParams);
    const language = computed(() => iApi.language);
    const setProvince = (payload) => geosearchStore.setProvince(payload);
    const setType = (payload) => geosearchStore.setType(payload);
    const clearFilters = () => {
      setProvince({});
      setType({});
    };
    const updateProvincesAndTypes = () => {
      geosearchStore.initService(iApi.language, iApi.fixture.get("geosearch").config);
      const queryProvCode = provinces.value.find((prov) => queryParams.value.province === prov.name)?.code;
      const queryTypeCode = types.value.find((type) => queryParams.value.type === type.name)?.code;
      geosearchStore.getProvinces.then((provs) => {
        provinces.value = provs;
        setProvince({
          province: provs.find((prov) => prov.code === queryProvCode)?.name,
          forceReRun: true
        });
      });
      geosearchStore.getTypes.then((typs) => {
        types.value = typs;
        setType({
          type: typs.find((type) => type.code === queryTypeCode)?.name,
          forceReRun: true
        });
      });
    };
    onBeforeMount(() => {
      updateProvincesAndTypes();
      watchers.value.push(watch(language, updateProvincesAndTypes));
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      const _directive_truncate = resolveDirective("truncate");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          withDirectives((openBlock(), createElementBlock("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: queryParams.value.province,
            "aria-label": unref(t)("geosearch.filters.province"),
            onChange: _cache[0] || (_cache[0] = ($event) => setProvince({
              province: $event.target.value
            }))
          }, [
            withDirectives((openBlock(), createElementBlock("option", _hoisted_4$2, [
              createTextVNode(toDisplayString(unref(t)("geosearch.filters.province")), 1)
            ])), [
              [_directive_truncate]
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(provinces.value, (province) => {
              return withDirectives((openBlock(), createElementBlock("option", {
                key: province.code
              }, [
                createTextVNode(toDisplayString(province.name), 1)
              ])), [
                [_directive_truncate]
              ]);
            }), 128))
          ], 40, _hoisted_3$3)), [
            [_directive_truncate]
          ])
        ]),
        createBaseVNode("div", _hoisted_5$1, [
          withDirectives((openBlock(), createElementBlock("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: queryParams.value.type,
            "aria-label": unref(t)("geosearch.filters.type"),
            onChange: _cache[1] || (_cache[1] = ($event) => setType({
              type: $event.target.value
            }))
          }, [
            createBaseVNode("option", _hoisted_7$1, toDisplayString(unref(t)("geosearch.filters.type")), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(types.value, (t2) => {
              return openBlock(), createElementBlock("option", {
                key: t2.code
              }, toDisplayString(t2.name), 1);
            }), 128))
          ], 40, _hoisted_6$1)), [
            [_directive_truncate]
          ]),
          withDirectives((openBlock(), createElementBlock("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !queryParams.value.type && !queryParams.value.province,
            onClick: clearFilters,
            content: unref(t)("geosearch.filters.clear"),
            "aria-label": unref(t)("geosearch.filters.clear")
          }, _cache[2] || (_cache[2] = [
            createBaseVNode("div", { class: "rv-geosearch-icon" }, [
              createBaseVNode("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                createBaseVNode("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, _hoisted_8$1)), [
            [_directive_tippy, { placement: "bottom" }]
          ])
        ])
      ]);
    };
  }
});

const _hoisted_1$2 = { class: "rv-geosearch-bottom-filters" };
const _hoisted_2$2 = { class: "bg-white" };
const _hoisted_3$2 = { class: "ml-8 cursor-pointer font-normal" };
const _hoisted_4$1 = ["checked"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "bottom-filters",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const geosearchStore = useGeosearchStore();
    const resultsVisible = computed(() => geosearchStore.resultsVisible);
    const onMapExtentChange = debounce(300, (newExtent) => {
      latLongExtent(newExtent).then((e) => {
        setMapExtent({
          extent: e,
          visible: resultsVisible.value
        });
      });
    });
    const setMapExtent = (mapExtent) => {
      geosearchStore.setMapExtent(mapExtent);
    };
    const latLongExtent = async (ext) => {
      if (ext.sr.wkid === 4326) {
        return ext;
      } else {
        const pExt = await iApi.geo.proj.projectGeometry(4326, ext);
        return pExt;
      }
    };
    const updateMapExtent = (visible) => {
      latLongExtent(iApi.geo.map.getExtent()).then((e) => {
        setMapExtent({
          extent: e,
          visible
        });
      });
    };
    onMounted(() => {
      iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, onMapExtentChange, "geosearch_map_extent");
    });
    onBeforeUnmount(() => {
      iApi.event.off("geosearch_map_extent");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("label", _hoisted_3$2, [
            createBaseVNode("input", {
              type: "checkbox",
              class: "border-2 mx-8 border-gray-600 cursor-pointer",
              checked: resultsVisible.value,
              onChange: _cache[0] || (_cache[0] = ($event) => updateMapExtent($event.target.checked)),
              onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"]))
            }, null, 40, _hoisted_4$1),
            createTextVNode(toDisplayString(unref(t)("geosearch.visible")), 1)
          ])
        ])
      ]);
    };
  }
});

const _sfc_main$1 = {};

const _hoisted_1$1 = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" };
const _hoisted_2$1 = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
};
const _hoisted_3$1 = { class: "flex items-center h-full" };

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("span", _hoisted_3$1, [
        renderSlot(_ctx.$slots, "default", {}, undefined, true)
      ])
    ])
  ]))
}
const LoadingBar = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__scopeId',"data-v-64b4e253"]]);

const _hoisted_1 = { class: "flex flex-col h-full" };
const _hoisted_2 = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
};
const _hoisted_3 = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
};
const _hoisted_4 = { class: "relative h-48" };
const _hoisted_5 = { class: "font-bold text-blue-600" };
const _hoisted_6 = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "rv-result-description px-8" };
const _hoisted_9 = { class: "flex-1 text-left truncate font-bold leading-tight" };
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = {
  key: 0,
  class: "text-gray-600 text-sm"
};
const _hoisted_12 = {
  key: 1,
  class: "hidden"
};
const _hoisted_13 = {
  key: 2,
  class: "text-sm font-normal"
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
    const iApi = inject("iApi");
    const geosearchStore = useGeosearchStore();
    const cleanedSearchVal = computed(() => geosearchStore.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim());
    const searchResults = computed(() => geosearchStore.searchResults);
    const loadingResults = computed(() => geosearchStore.loadingResults);
    const failedServices = computed(() => geosearchStore.failedServices);
    const zoomIn = (result) => {
      let zoom = new Polygon(
        "zoomies",
        [
          [
            [result.bbox[0], result.bbox[1]],
            [result.bbox[0], result.bbox[3]],
            [result.bbox[2], result.bbox[3]],
            [result.bbox[2], result.bbox[1]],
            [result.bbox[0], result.bbox[1]]
          ]
        ],
        SpatialReference.latLongSR(),
        true
      );
      iApi.geo.map.zoomMapTo(zoom);
    };
    const highlightSearchTerm = (name, province) => {
      const highlightedResult = name.replace(
        new RegExp(`${geosearchStore.searchRegex}`, "gi"),
        (match) => '<span class="font-bold text-blue-600">' + match + "</span>"
      );
      return province ? highlightedResult + "," : highlightedResult;
    };
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      const _directive_truncate = resolveDirective("truncate");
      const _directive_focus_item = resolveDirective("focus-item");
      const _directive_focus_list = resolveDirective("focus-list");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("geosearch.title")), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_sfc_main$4),
            createVNode(_sfc_main$3),
            loadingResults.value ? (openBlock(), createBlock(LoadingBar, {
              key: 0,
              class: "flex-none"
            })) : createCommentVNode("", true),
            failedServices.value.length > 0 && !loadingResults.value ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(unref(t)("geosearch.serviceError", {
              services: failedServices.value.join(", ")
            })), 1)) : createCommentVNode("", true),
            cleanedSearchVal.value && searchResults.value.length === 0 && !loadingResults.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode("span", _hoisted_4, [
                createTextVNode(toDisplayString(unref(t)("geosearch.noResults")), 1),
                createBaseVNode("span", _hoisted_5, '"' + toDisplayString(cleanedSearchVal.value) + '"', 1)
              ])
            ])) : createCommentVNode("", true),
            searchResults.value.length > 0 ? withDirectives((openBlock(), createElementBlock("ul", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, (result, idx) => {
                return openBlock(), createElementBlock("li", {
                  class: "relative h-56",
                  key: idx
                }, [
                  withDirectives((openBlock(), createElementBlock("button", {
                    type: "button",
                    class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                    onClick: ($event) => zoomIn(result),
                    style: { "border-bottom": "1px solid lightgray" },
                    "truncate-trigger": ""
                  }, [
                    createBaseVNode("div", _hoisted_8, [
                      withDirectives((openBlock(), createElementBlock("div", _hoisted_9, [
                        createBaseVNode("span", {
                          innerHTML: highlightSearchTerm(result.name, result.location.province)
                        }, null, 8, _hoisted_10),
                        result.location.province ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(result.location.city ? " " + result.location.city + ", " + result.location.province.abbr : " " + result.location.province.abbr), 1)) : createCommentVNode("", true),
                        result.type ? (openBlock(), createElementBlock("span", _hoisted_12, "; ")) : createCommentVNode("", true),
                        result.type ? (openBlock(), createElementBlock("span", _hoisted_13, [
                          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
                          createTextVNode(toDisplayString(result.type), 1)
                        ])) : createCommentVNode("", true)
                      ])), [
                        [_directive_truncate, {
                          externalTrigger: true,
                          options: { placement: "top-start" }
                        }]
                      ])
                    ])
                  ], 8, _hoisted_7)), [
                    [_directive_focus_item, "show-truncate"]
                  ])
                ]);
              }), 128))
            ])), [
              [_directive_focus_list]
            ]) : createCommentVNode("", true),
            createVNode(_sfc_main$2, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

export { _sfc_main as _ };
