import { bF as defineComponent, bG as useI18n, bI as ref, bJ as onMounted, bN as resolveDirective, bQ as openBlock, bW as createElementBlock, bV as withDirectives, fG as createBaseVNode, bT as unref, im as withModifiers, io as withKeys, fH as normalizeClass, iD as LegendItem, iC as LayerItem, ly as CoreFilter, bH as inject, fE as usePanelStore, bL as computed, lz as LayerControl, kS as toRaw, bM as resolveComponent, bU as createVNode, bP as withCtx, bR as createTextVNode, bS as toDisplayString, fO as GlobalEvents, i8 as _export_sfc, bX as Fragment, bY as renderList, iK as normalizeStyle, fM as createCommentVNode, lA as useLayerStore, i6 as useLegendStore, fL as watch, lB as LegendType, lC as LegendControl, lD as createStaticVNode, bO as createBlock, iB as SectionItem, lE as InfoType, kL as resolveDynamicComponent, lF as to, lG as InitiationState } from './main-48Jy8Lgr.js';
import { m as marked } from './marked.esm-DcwJ8j7Z.js';
import './preload-helper-dJJaZANz.js';

const _hoisted_1$3 = ["type", "aria-label", "checked", "disabled", "content"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "checkbox",
  props: {
    value: {
      type: Object,
      required: true
    },
    legendItem: {
      type: Object,
      required: true
    },
    checked: { type: Boolean },
    label: { type: String },
    isRadio: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const initialChecked = ref(props.legendItem.visibility);
    onMounted(() => {
      props.legendItem.checkVisibilityRules();
      initialChecked.value = props.legendItem.visibility === props.checked;
    });
    const _noSymbolsVisible = (item) => {
      return !item.symbologyStack.some((item2) => item2.visibility);
    };
    const toggleVisibility = () => {
      if (props.value instanceof LegendItem) {
        props.legendItem.toggleVisibility();
      } else if (props.legendItem instanceof LayerItem) {
        if (_noSymbolsVisible(props.legendItem)) {
          props.legendItem.setSymbologyVisibility(void 0, false);
          props.legendItem.setSymbologyVisibility(props.value.uid, true);
          props.legendItem.toggleVisibility(true);
        } else {
          props.legendItem.setSymbologyVisibility(props.value.uid, !props.value.lastVisbility);
        }
        if (_noSymbolsVisible(props.legendItem)) {
          props.legendItem.toggleVisibility(false);
        }
        if (props.legendItem.layer?.supportsFeatures) {
          const filterGuts = props.legendItem.symbologyStack.filter((item) => item.lastVisbility === true).map((item) => item.definitionClause || "");
          let sql = "";
          if (filterGuts.length === 0) {
            sql = "1=2";
          } else if (filterGuts.length < props.legendItem.symbologyStack.length) {
            sql = filterGuts.join(" OR ");
          }
          props.legendItem.layer?.setSqlFilter(CoreFilter.SYMBOL, sql);
        }
        initialChecked.value = true;
      }
    };
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", {
        class: "relative",
        onMouseover: _cache[3] || (_cache[3] = withModifiers(() => {
        }, ["stop"]))
      }, [
        withDirectives(createBaseVNode("input", {
          type: __props.isRadio ? "radio" : "checkbox",
          "aria-label": unref(t)(__props.checked ? `legend.visibility.hide${__props.label}` : `legend.visibility.show${__props.label}`),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => toggleVisibility(), ["stop"])),
          checked: __props.checked && initialChecked.value,
          onKeypress: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onKeyup: _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => toggleVisibility(), ["stop"]), ["enter"])),
          class: normalizeClass([[
            __props.disabled ? "text-gray-400 border-gray-300" : "text-black cursor-pointer border-gray-500 hover:border-black"
          ], "mx-5 h-15 w-15"]),
          tabindex: "-1",
          disabled: __props.disabled,
          content: unref(t)(__props.checked ? `legend.visibility.hide${__props.label}` : `legend.visibility.show${__props.label}`)
        }, null, 42, _hoisted_1$3), [
          [_directive_tippy, { placement: "top-end", hideOnClick: false }]
        ])
      ], 32);
    };
  }
});

const _hoisted_1$2 = ["aria-label"];
const _hoisted_2$2 = ["aria-label"];
const _hoisted_3$2 = ["aria-label"];
const _hoisted_4$2 = ["aria-label"];
const _hoisted_5$2 = ["aria-label"];
const _hoisted_6$2 = ["aria-label"];
const _hoisted_7$2 = ["content", "aria-label"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "legend-options",
  props: {
    legendItem: LayerItem
  },
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const dropdown = ref();
    const hovered = ref(false);
    const panelStore = usePanelStore();
    const mobileMode = ref(panelStore.mobileView);
    const props = __props;
    const toggleSymbology = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Symbology)) {
        props.legendItem.toggleSymbology();
      }
    };
    const toggleGrid = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Datatable) && getFixtureExists("grid")) {
        iApi.event.emit(GlobalEvents.GRID_TOGGLE, props.legendItem.layer);
      }
    };
    const toggleSettings = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Settings) && getFixtureExists("settings")) {
        iApi.event.emit(GlobalEvents.SETTINGS_TOGGLE, props.legendItem.layer);
      }
    };
    const toggleMetadata = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Metadata) && getFixtureExists("metadata")) {
        const metaConfig = props.legendItem?.layer?.config.metadata || props.legendItem?.layer?.parentLayer?.config?.metadata || {};
        const name = metaConfig?.name || props.legendItem?.layer?.name || "";
        const catalogueUrl = props.legendItem?.layer?.config?.catalogueUrl || props.legendItem?.layer?.layerType === "sublayer" && props.legendItem?.layer?.parentLayer?.config?.catalogueUrl || void 0;
        if (metaConfig.url) {
          const parseUrl = metaConfig.url.split(".");
          const metadataExtension = parseUrl[parseUrl.length - 1];
          const metadataType = metadataExtension === "xml" || metadataExtension === "md" ? metadataExtension : "html";
          iApi.event.emit(GlobalEvents.METADATA_TOGGLE, {
            type: metadataType,
            layerName: name,
            url: metaConfig.url,
            catalogueUrl,
            layer: props.legendItem.layer
          });
        } else {
          console.warn("Layer does not have a metadata url defined");
        }
      }
    };
    const zoomToLayerBoundary = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.BoundaryZoom)) {
        props.legendItem?.layer?.zoomToLayerBoundary();
      }
    };
    const removeLayer = () => {
      if (props.legendItem.layerControlAvailable(LayerControl.Remove)) {
        iApi.geo.map.removeLayer(props.legendItem.layerUid);
      }
    };
    const reloadLayer = () => {
      if (reloadableLayer.value) {
        toRaw(props.legendItem.layer).reload();
        dropdown.value.open = false;
      }
    };
    const reloadableLayer = computed(() => {
      return props.legendItem.layerControlAvailable(LayerControl.Reload) && props.legendItem instanceof LayerItem && toRaw(props.legendItem.layer)?.canReload;
    });
    const hover = (t2) => {
      hovered.value = true;
      setTimeout(() => {
        if (hovered.value) mobileMode.value ? null : t2._tippy?.show();
      }, 300);
    };
    const getFixtureExists = (fixtureName) => {
      try {
        return iApi.fixture.exists(fixtureName);
      } catch (e) {
        return false;
      }
    };
    return (_ctx, _cache) => {
      const _component_dropdown_menu = resolveComponent("dropdown-menu");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", {
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["stop"])),
        onMouseover: _cache[3] || (_cache[3] = withModifiers(() => {
        }, ["stop"])),
        class: "options display-block cursor-auto"
      }, [
        createVNode(_component_dropdown_menu, {
          class: "flex-shrink-0",
          position: "bottom-end",
          tooltip: unref(t)("legend.layer.options"),
          tooltipPlacement: "left",
          tooltipPlacementAlt: "left",
          ref_key: "dropdown",
          ref: dropdown
        }, {
          header: withCtx(() => _cache[4] || (_cache[4] = [
            createBaseVNode("div", { class: "flex p-4 justify-center items-center" }, [
              createBaseVNode("svg", {
                class: "inline-block fill-current w-18 h-18 mx-4",
                viewBox: "0 0 23 21"
              }, [
                createBaseVNode("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
              ])
            ], -1)
          ])),
          default: withCtx(() => [
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(unref(LayerControl).Metadata) || !getFixtureExists("metadata")
              }]),
              onClick: toggleMetadata,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.metadata")
            }, [
              _cache[5] || (_cache[5] = createBaseVNode("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                createBaseVNode("path", { d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.metadata")), 1)
            ], 10, _hoisted_1$2),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(unref(LayerControl).Settings) || !getFixtureExists("settings")
              }]),
              onClick: toggleSettings,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.settings")
            }, [
              _cache[6] || (_cache[6] = createBaseVNode("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                createBaseVNode("g", null, [
                  createBaseVNode("path", { d: "M 3,17L 3,19L 9,19L 9,17L 3,17 Z M 3,5L 3,7L 13,7L 13,5L 3,5 Z M 13,21L 13,19L 21,19L 21,17L 13,17L 13,15L 11,15L 11,21L 13,21 Z M 7,9L 7,11L 3,11L 3,13L 7,13L 7,15L 9,15L 9,9L 7,9 Z M 21,13L 21,11L 11,11L 11,13L 21,13 Z M 15,9L 17,9L 17,7L 21,7L 21,5L 17,5L 17,3L 15,3L 15,9 Z " })
                ])
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.settings")), 1)
            ], 10, _hoisted_2$2),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(unref(LayerControl).Datatable) || !getFixtureExists("grid")
              }]),
              onClick: toggleGrid,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.datatable")
            }, [
              _cache[7] || (_cache[7] = createBaseVNode("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                createBaseVNode("path", { d: "M 4.00002,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,20C 22,21.1046 21.1046,22 20,22L 4.00001,22C 2.89544,22 2.00001,21.1046 2.00001,20L 2.00002,5C 2.00002,3.89543 2.89545,3 4.00002,3 Z M 4.00002,7L 4.00001,10L 8,10L 8,7.00001L 4.00002,7 Z M 10,7.00001L 9.99999,10L 14,10L 14,7.00001L 10,7.00001 Z M 20,10L 20,7L 16,7.00001L 16,10L 20,10 Z M 4.00002,12L 4.00002,15L 8,15L 8,12L 4.00002,12 Z M 4.00001,20L 8,20L 8,17L 4.00002,17L 4.00001,20 Z M 9.99999,12L 9.99999,15L 14,15L 14,12L 9.99999,12 Z M 9.99999,20L 14,20L 14,17L 9.99999,17L 9.99999,20 Z M 20,20L 20,17L 16,17L 16,20L 20,20 Z M 20,12L 16,12L 16,15L 20,15L 20,12 Z " })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.datatable")), 1)
            ], 10, _hoisted_3$2),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(unref(LayerControl).Symbology)
              }]),
              onClick: toggleSymbology,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.symbology")
            }, [
              _cache[8] || (_cache[8] = createBaseVNode("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                createBaseVNode("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.symbology")), 1)
            ], 10, _hoisted_4$2),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(unref(LayerControl).BoundaryZoom)
              }]),
              onClick: zoomToLayerBoundary,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.boundaryzoom")
            }, [
              _cache[9] || (_cache[9] = createBaseVNode("svg", {
                class: "setting-svg",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                createBaseVNode("path", {
                  d: "M0 0h24v24H0V0z",
                  fill: "none"
                }),
                createBaseVNode("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.boundaryzoom")), 1)
            ], 10, _hoisted_5$2),
            createBaseVNode("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !__props.legendItem.layerControlAvailable(unref(LayerControl).Remove)
              }]),
              onClick: removeLayer,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.remove")
            }, [
              _cache[10] || (_cache[10] = createBaseVNode("svg", {
                class: "setting-svg",
                viewBox: "0 0 23 21"
              }, [
                createBaseVNode("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.remove")), 1)
            ], 10, _hoisted_6$2),
            withDirectives((openBlock(), createElementBlock("a", {
              href: "javascript:;",
              class: normalizeClass(["flex leading-snug items-center text-left w-auto", {
                disabled: !reloadableLayer.value
              }]),
              content: !reloadableLayer.value ? unref(t)("legend.layer.controls.reloadDisabled") : "",
              onMouseover: _cache[0] || (_cache[0] = withModifiers(($event) => hover($event.currentTarget), ["stop"])),
              onMouseout: _cache[1] || (_cache[1] = ($event) => (
                //@ts-ignore
                (mobileMode.value ? null : $event.currentTarget?._tippy?.hide(), hovered.value = false)
              )),
              onClick: reloadLayer,
              role: "button",
              "aria-label": unref(t)("legend.layer.controls.reload")
            }, [
              _cache[11] || (_cache[11] = createBaseVNode("svg", {
                class: "setting-svg",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
              ], -1)),
              createTextVNode(" " + toDisplayString(unref(t)("legend.layer.controls.reload")), 1)
            ], 42, _hoisted_7$2)), [
              [_directive_tippy, {
                placement: "top-start",
                trigger: "manual focus",
                aria: "describedby"
              }]
            ])
          ]),
          _: 1
        }, 8, ["tooltip"])
      ], 32);
    };
  }
});

const LegendOptions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1131239b"]]);

const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = {
  key: 0,
  class: "relative left-3"
};
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = {
  key: 1,
  class: "symbologyIcon w-32 h-32"
};
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7$1 = ["src"];
const _hoisted_8$1 = {
  key: 1,
  class: "h-32 w-32 inline-flex justify-center items-center"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "symbology-stack",
  props: {
    visible: { type: Boolean, required: true },
    legendItem: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const stack = ref([]);
    onMounted(() => {
      props.legendItem.loadPromise.then(() => {
        if (props.legendItem.layerUid !== void 0) {
          Promise.all(toRaw(props.legendItem.symbologyStack).map((l) => l.drawPromise)).then(() => {
            stack.value = toRaw(props.legendItem).symbologyStack;
          });
        }
      });
    });
    return (_ctx, _cache) => {
      return !__props.visible ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        stack.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(stack.value.slice(0, 3).reverse(), (item, idx) => {
            return openBlock(), createElementBlock("div", {
              class: normalizeClass(["absolute", [idx == 0 ? "symbol-0" : idx == 1 ? "left-3 symbol-1" : "left-6 symbol-2"]]),
              style: normalizeStyle({ "z-index": 3 - idx }),
              key: idx
            }, [
              stack.value[idx].svgcode ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "symbologyIcon w-28 h-28",
                innerHTML: stack.value[idx].svgcode
              }, null, 8, _hoisted_3$1)) : stack.value[idx].imgUrl ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "symbologyIcon w-28 h-28",
                src: stack.value[idx].imgUrl
              }, null, 8, _hoisted_4$1)) : createCommentVNode("", true)
            ], 6);
          }), 128))
        ])) : stack.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
          stack.value[0].svgcode ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: stack.value[0].svgcode
          }, null, 8, _hoisted_6$1)) : stack.value[0].imgUrl ? (openBlock(), createElementBlock("img", {
            key: 1,
            class: "symbologyIcon w-full h-full",
            src: stack.value[0].imgUrl
          }, null, 8, _hoisted_7$1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_8$1, _cache[0] || (_cache[0] = [
        createBaseVNode("svg", {
          class: "fill-current w-16 h-16",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 352 512"
        }, [
          createBaseVNode("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
        ], -1)
      ])));
    };
  }
});

const SymbologyStack = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-09193b9e"]]);

const _hoisted_1 = { class: "relative" };
const _hoisted_2 = ["content"];
const _hoisted_3 = {
  key: 0,
  class: "flex p-5 mr-[13px]"
};
const _hoisted_4 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
};
const _hoisted_5 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "black",
  width: "24px",
  height: "24px"
};
const _hoisted_6 = ["disabled", "content", "aria-label"];
const _hoisted_7 = ["src"];
const _hoisted_8 = { class: "h-auto break-words text-ellipsis" };
const _hoisted_9 = {
  key: 4,
  class: "flex-1 pointer-events-none p-5"
};
const _hoisted_10 = {
  key: 5,
  class: "flex-1"
};
const _hoisted_11 = {
  key: 0,
  class: "text-lg font-bold"
};
const _hoisted_12 = { key: 1 };
const _hoisted_13 = { key: 2 };
const _hoisted_14 = ["src"];
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = {
  key: 6,
  class: "relative"
};
const _hoisted_17 = ["content", "aria-label"];
const _hoisted_18 = {
  key: 8,
  class: "relative"
};
const _hoisted_19 = ["content", "aria-label"];
const _hoisted_20 = { class: "flex p-5" };
const _hoisted_21 = {
  key: 0,
  class: "fill-current w-18 h-18",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 352 512"
};
const _hoisted_22 = {
  key: 1,
  class: "inline-block fill-current w-18 h-18 mr-1",
  viewBox: "0 1 23 22"
};
const _hoisted_23 = ["content"];
const _hoisted_24 = ["content"];
const _hoisted_25 = {
  key: 11,
  class: "relative top-1"
};
const _hoisted_26 = ["content"];
const _hoisted_27 = {
  key: 0,
  class: "h-3 w-full absolute bottom-0"
};
const _hoisted_28 = {
  key: 0,
  class: "symbology-stack default-focus-style"
};
const _hoisted_29 = { key: 0 };
const _hoisted_30 = {
  key: 0,
  class: "m-5"
};
const _hoisted_31 = {
  key: 0,
  class: "items-center grid-cols-1"
};
const _hoisted_32 = {
  key: 0,
  class: "symbologyIcon w-full p-5"
};
const _hoisted_33 = ["src"];
const _hoisted_34 = ["innerHTML"];
const _hoisted_35 = {
  key: 2,
  class: "flex-1 p-5 bg-black-75 text-white"
};
const _hoisted_36 = {
  key: 1,
  class: "flex items-center"
};
const _hoisted_37 = {
  key: 0,
  class: "symbologyIcon"
};
const _hoisted_38 = ["src"];
const _hoisted_39 = {
  key: 1,
  class: "symbologyIcon"
};
const _hoisted_40 = ["innerHTML"];
const _hoisted_41 = { class: "flex-1 ml-15" };
const _hoisted_42 = { key: 1 };
const _hoisted_43 = { class: "flex p-5 ml-48" };
const _hoisted_44 = {
  key: 0,
  class: "relative animate-spin spinner h-20 w-20 mr-10 pt-2"
};
const _hoisted_45 = { class: "flex-1 text-gray-500" };
const _hoisted_46 = {
  key: 1,
  class: "legend-group border-l-2 ml-4 pl-4"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "item",
  props: {
    legendItem: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const layerStore = useLayerStore();
    const panelStore = usePanelStore();
    const { t } = useI18n();
    const iApi = inject("iApi");
    const el = ref();
    const props = __props;
    const legendStore = useLegendStore();
    const allowMultilineItems = legendStore.multilineItems;
    const maxLines = (props.legendItem instanceof LayerItem && props.legendItem.maxLines) ?? legendStore.maxLines;
    const mobileMode = ref(panelStore.mobileView);
    const layerConfigs = computed(() => layerStore.layerConfigs);
    const symbologyStack = ref([]);
    const symbologyStackLoaded = ref(false);
    const hovered = ref(false);
    const layerType = computed(() => {
      return props.legendItem instanceof LayerItem ? toRaw(props.legendItem.layer)?.layerType : "";
    });
    const modifiableLayer = computed(() => {
      return props.legendItem instanceof LayerItem && toRaw(props.legendItem.layer)?.canModifyLayer;
    });
    const reloadableLayer = computed(() => {
      if (props.legendItem instanceof LayerItem) {
        const rawLayer = toRaw(props.legendItem.layer);
        if (rawLayer) {
          return rawLayer.canReload;
        } else {
          return true;
        }
      } else {
        return false;
      }
    });
    const isAnimationEnabled = computed(() => {
      return iApi.animate;
    });
    const isGroup = computed(() => {
      return props.legendItem.children.length > 0 || // TODO: Determine why Vue reactivity isn't picking updates to the children property of the parent.
      // isGroup is being called on the parent before the children are mapped in legend.ts. After they're mapped, isGroup isn't called again.
      props.legendItem instanceof LayerItem && toRaw(props.legendItem.layer)?.sublayers.length > 0;
    });
    const controlAvailable = (control) => {
      if (control === LegendControl.Expand || control === LegendControl.Visibility)
        return props.legendItem.controlAvailable(control);
      else return props.legendItem.layerControlAvailable(control);
    };
    const markdownToHtml = (md) => {
      return marked(md);
    };
    const toggleExpand = () => {
      if (props.legendItem.children.length === 0 || !controlAvailable(LegendControl.Expand)) {
        return;
      }
      props.legendItem.toggleExpanded();
      iApi.updateAlert(t(`legend.alert.group${props.legendItem.expanded ? "Expanded" : "Collapsed"}`));
    };
    const toggleSymbology = () => {
      if (controlAvailable(LayerControl.Symbology)) {
        const expanded = props.legendItem.toggleSymbology();
        iApi.updateAlert(t(`legend.alert.symbology${expanded ? "Expanded" : "Collapsed"}`));
      }
    };
    const toggleGrid = () => {
      if (controlAvailable(LayerControl.Datatable) && getDatagridExists()) {
        iApi.event.emit(GlobalEvents.GRID_TOGGLE, props.legendItem.layer);
      }
    };
    const getLegendGraphic = (item) => {
      const span = document.createElement("span");
      span.innerHTML = item.svgcode;
      const svg = span.firstElementChild;
      svg?.classList.add("max-w-full");
      svg?.classList.add("h-full");
      svg?.setAttribute("height", item.imgHeight);
      svg?.setAttribute("width", item.imgWidth);
      return span.outerHTML;
    };
    const getDatagridExists = () => {
      try {
        return iApi.fixture.exists("grid");
      } catch (e) {
        return false;
      }
    };
    const reloadLayer = () => {
      props.legendItem.reload();
      setTimeout(() => {
        const layerItemProp = props.legendItem;
        let recreateFromConfig = true;
        if (layerItemProp.layer) {
          toRaw(layerItemProp.layer).reload();
          recreateFromConfig = false;
        } else if (layerItemProp.isSublayer && layerItemProp.parentLayerId) {
          const testParent = iApi.geo.layer.getLayer(layerItemProp.parentLayerId);
          if (testParent) {
            toRaw(testParent).reload();
            recreateFromConfig = false;
          }
        }
        if (recreateFromConfig) {
          const targetId = layerItemProp.isSublayer ? layerItemProp.parentLayerId : layerItemProp.layerId;
          const layerConfig = layerConfigs.value.find((lc) => lc.id === targetId);
          if (layerConfig !== void 0) {
            recreateLayer(layerConfig);
          }
        }
        props.legendItem.loadPromise.catch(() => {
        });
      }, 400);
    };
    const recreateLayer = async (layerConfig) => {
      try {
        const checkLayer = iApi.geo.layer.getLayer(layerConfig.id);
        if (checkLayer) {
          const [reloadErr] = await to(toRaw(checkLayer).reload());
          if (reloadErr) {
            throw new Error();
          } else {
            return checkLayer;
          }
        } else {
          const layer = iApi.geo.layer.createLayer(layerConfig);
          await iApi.geo.map.addLayer(layer).catch(() => {
            throw new Error();
          });
          return layer;
        }
      } catch {
        return;
      }
    };
    const cancelOrRemoveLayer = () => {
      const layerItem = toRaw(props.legendItem);
      let safetyCount = 0;
      if (layerItem.type === LegendType.Error) {
        props.legendItem.toggleHidden(true);
        const removalWatcher = setInterval(() => {
          const rampL = layerItem.layer;
          if (rampL && (rampL.layerExists || rampL.initiationState === InitiationState.NEW || rampL.initiationState === InitiationState.TERMINATING || rampL.initiationState === InitiationState.TERMINATED) || safetyCount > 1200) {
            clearInterval(removalWatcher);
            if (rampL) {
              iApi.geo.map.removeLayer(rampL);
            }
            layerStore.removeLayerConfig(layerItem.layerId);
            iApi.fixture.get("legend")?.removeLayerItem(layerItem.layerId);
          }
          safetyCount++;
        }, 250);
      } else {
        props.legendItem.error();
        const cancelWatcher = setInterval(() => {
          const parentmostId = layerItem.parentLayerId || layerItem.layerId;
          const parentLayer = iApi.geo.layer.getLayer(parentmostId);
          if (parentLayer) {
            clearInterval(cancelWatcher);
            parentLayer.cancelLoad();
            const affectedBlocks = iApi.fixture.get("legend")?.getLayerBoundItems(parentLayer) || [];
            affectedBlocks.forEach((block) => block.error());
          }
          if (safetyCount > 1200) {
            clearInterval(cancelWatcher);
          }
          safetyCount++;
        }, 50);
      }
    };
    const loadSymbologyStack = () => {
      props.legendItem.loadPromise.then(() => {
        symbologyStack.value = [];
        if (!props.legendItem.layer) {
          console.warn("Attempted to mount legend item component with undefined layer");
          return;
        }
        Promise.all(
          toRaw(props.legendItem.symbologyStack.map((item) => item.drawPromise))
        ).then(() => {
          symbologyStack.value = props.legendItem.symbologyStack;
          symbologyStackLoaded.value = true;
        });
      }).catch(() => {
      });
    };
    const hover = (t2) => {
      hovered.value = true;
      setTimeout(() => {
        if (hovered.value) mobileMode.value ? null : t2._tippy?.show();
      }, 300);
    };
    if (props.legendItem instanceof LayerItem) {
      loadSymbologyStack();
      watch(
        () => props.legendItem.symbologyStack,
        () => {
          loadSymbologyStack();
        }
      );
    }
    return (_ctx, _cache) => {
      const _component_item = resolveComponent("item", true);
      const _directive_tippy = resolveDirective("tippy");
      const _directive_truncate = resolveDirective("truncate");
      const _directive_focus_item = resolveDirective("focus-item");
      return !__props.legendItem.hidden ? (openBlock(), createElementBlock("div", {
        key: `${__props.legendItem.uid}-${__props.legendItem.visibility}`,
        ref_key: "el",
        ref: el
      }, [
        createBaseVNode("div", _hoisted_1, [
          withDirectives((openBlock(), createElementBlock("div", {
            class: normalizeClass(["flex items-center hover:bg-gray-200 default-focus-style !p-5", [
              __props.legendItem.type === unref(LegendType).Item ? "loaded-item" : __props.legendItem.type === unref(LegendType).Error ? "non-loaded-item bg-red-200" : "non-loaded-item",
              isGroup.value && controlAvailable(unref(LegendControl).Expand) || !isGroup.value && __props.legendItem instanceof unref(LayerItem) && controlAvailable(unref(LayerControl).Datatable) && getDatagridExists() && __props.legendItem.type === unref(LegendType).Item ? "cursor-pointer" : "cursor-default",
              unref(allowMultilineItems) ? "multilined" : "singlelined"
            ]]),
            onMouseover: _cache[9] || (_cache[9] = withModifiers(($event) => hover($event.currentTarget), ["stop"])),
            onMouseout: _cache[10] || (_cache[10] = ($event) => (
              //@ts-ignore
              (mobileMode.value ? null : $event.currentTarget?._tippy?.hide(), hovered.value = false)
            )),
            onClick: _cache[11] || (_cache[11] = () => {
              if (!isGroup.value && __props.legendItem instanceof unref(LayerItem) && controlAvailable(unref(LayerControl).Datatable) && getDatagridExists() && __props.legendItem.type === unref(LegendType).Item) {
                toggleGrid();
              } else if (isGroup.value) {
                toggleExpand();
              }
            }),
            content: isGroup.value && controlAvailable(unref(LegendControl).Expand) ? unref(t)(__props.legendItem.expanded ? "legend.group.collapse" : "legend.group.expand") : __props.legendItem instanceof unref(LayerItem) && __props.legendItem.type === unref(LegendType).Item && controlAvailable(unref(LayerControl).Datatable) && getDatagridExists() ? unref(t)("legend.layer.data") : "",
            "truncate-trigger": ""
          }, [
            __props.legendItem.type !== unref(LegendType).Item ? (openBlock(), createElementBlock("div", _hoisted_3, [
              __props.legendItem.type === unref(LegendType).Placeholder ? (openBlock(), createElementBlock("svg", _hoisted_4, _cache[12] || (_cache[12] = [
                createStaticVNode('<path d="M0 0h24v24H0V0z" fill="none" data-v-304c294b></path><path d="M0 0h24v24H0V0z" fill="none" data-v-304c294b></path><circle cx="15.5" cy="9.5" r="1.5" data-v-304c294b></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-304c294b></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-304c294b></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-304c294b></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z" data-v-304c294b></path>', 7)
              ]))) : (openBlock(), createElementBlock("svg", _hoisted_5, _cache[13] || (_cache[13] = [
                createStaticVNode('<path d="M0 0h24v24H0V0z" fill="none" data-v-304c294b></path><path d="M0 0h24v24H0V0z" fill="none" data-v-304c294b></path><circle cx="15.5" cy="9.5" r="1.5" data-v-304c294b></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-304c294b></circle><circle cx="15.5" cy="9.5" r="1.5" data-v-304c294b></circle><circle cx="8.5" cy="9.5" r="1.5" data-v-304c294b></circle><path d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z" data-v-304c294b></path>', 7)
              ])))
            ])) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layer.legend.length > 0 ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: "relative w-32 h-32 mr-15",
              onMouseover: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["stop"]))
            }, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                onClick: withModifiers(toggleSymbology, ["stop"]),
                class: normalizeClass([controlAvailable(unref(LayerControl).Symbology) ? "cursor-pointer" : "cursor-default"]),
                disabled: !controlAvailable(unref(LayerControl).Symbology),
                content: __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded ? unref(t)("legend.symbology.hide") : unref(t)("legend.symbology.expand"),
                "aria-label": __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded ? unref(t)("legend.symbology.hide") : unref(t)("legend.symbology.expand")
              }, [
                !__props.legendItem.coverIcon ? (openBlock(), createBlock(SymbologyStack, {
                  key: 0,
                  class: normalizeClass([{
                    "pointer-events-none": !controlAvailable(unref(LayerControl).Symbology)
                  }, "w-32 h-32"]),
                  visible: __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded,
                  legendItem: __props.legendItem
                }, null, 8, ["class", "visible", "legendItem"])) : (openBlock(), createElementBlock("img", {
                  key: 1,
                  class: normalizeClass([{
                    "pointer-events-none": !controlAvailable(unref(LayerControl).Symbology)
                  }, "w-32 h-32 hover:scale-105"]),
                  src: __props.legendItem.coverIcon,
                  alt: "Cover icon not found :("
                }, null, 10, _hoisted_7))
              ], 10, _hoisted_6)), [
                [_directive_tippy, {
                  placement: "top-start"
                }]
              ])
            ], 32)) : createCommentVNode("", true),
            isGroup.value && controlAvailable(unref(LegendControl).Expand) ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(["expand-toggle p-8 pointer-events-none", { "rotate-180": __props.legendItem.expanded }])
            }, _cache[14] || (_cache[14] = [
              createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 0 24 24",
                width: "18"
              }, [
                createBaseVNode("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)) : createCommentVNode("", true),
            __props.legendItem instanceof unref(LayerItem) && unref(allowMultilineItems) ? withDirectives((openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(["flex-1 pointer-events-none m-5", `line-clamp-${unref(maxLines)}`])
            }, [
              createBaseVNode("span", _hoisted_8, toDisplayString(__props.legendItem.name ?? (!__props.legendItem?.layer?.name ? __props.legendItem.layerId : __props.legendItem.layer?.name)), 1)
            ], 2)), [
              [_directive_truncate, {
                externalTrigger: true,
                noTruncateClass: true
              }]
            ]) : __props.legendItem instanceof unref(LayerItem) ? withDirectives((openBlock(), createElementBlock("div", _hoisted_9, [
              createBaseVNode("span", null, toDisplayString(__props.legendItem.name ?? (!__props.legendItem.layer || __props.legendItem?.layer?.name === "" ? __props.legendItem.layerId : __props.legendItem.layer?.name)), 1)
            ])), [
              [_directive_truncate, { externalTrigger: true }]
            ]) : __props.legendItem instanceof unref(SectionItem) ? (openBlock(), createElementBlock("div", _hoisted_10, [
              __props.legendItem.infoType === unref(InfoType).Title && __props.legendItem.content ? (openBlock(), createElementBlock("h3", _hoisted_11, toDisplayString(__props.legendItem.content), 1)) : __props.legendItem.infoType === unref(InfoType).Title ? (openBlock(), createElementBlock("h3", _hoisted_12, toDisplayString(__props.legendItem.name), 1)) : __props.legendItem.infoType === unref(InfoType).Text ? (openBlock(), createElementBlock("p", _hoisted_13, toDisplayString(__props.legendItem.content), 1)) : __props.legendItem.infoType === unref(InfoType).Image ? (openBlock(), createElementBlock("img", {
                key: 3,
                src: __props.legendItem.content,
                alt: "InfoType image not found :("
              }, null, 8, _hoisted_14)) : __props.legendItem.infoType === unref(InfoType).Markdown ? (openBlock(), createElementBlock("div", {
                key: 4,
                class: "ramp-markdown",
                innerHTML: markdownToHtml(__props.legendItem.content)
              }, null, 8, _hoisted_15)) : (openBlock(), createBlock(resolveDynamicComponent(`${__props.legendItem.uid}-info-section`), { key: 5 }))
            ])) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Error && reloadableLayer.value ? (openBlock(), createElementBlock("div", _hoisted_16, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: unref(t)("legend.layer.controls.reload"),
                onMouseover: _cache[1] || (_cache[1] = withModifiers(() => {
                }, ["stop"])),
                onClick: withModifiers(reloadLayer, ["stop"]),
                "aria-label": unref(t)("legend.layer.controls.reload")
              }, _cache[15] || (_cache[15] = [
                createBaseVNode("div", { class: "flex p-8" }, [
                  createBaseVNode("svg", {
                    class: "inline-block fill-current w-18 h-18",
                    viewBox: "0 0 24 24"
                  }, [
                    createBaseVNode("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
                  ])
                ], -1)
              ]), 40, _hoisted_17)), [
                [_directive_tippy, {
                  placement: "top-start"
                }]
              ])
            ])) : createCommentVNode("", true),
            (__props.legendItem.type === unref(LegendType).Item || __props.legendItem.type === unref(LegendType).Placeholder && unref(allowMultilineItems)) && __props.legendItem instanceof unref(LayerItem) ? (openBlock(), createBlock(LegendOptions, {
              key: 7,
              class: normalizeClass({
                invisible: __props.legendItem.type === unref(LegendType).Placeholder
              }),
              legendItem: __props.legendItem
            }, null, 8, ["class", "legendItem"])) : createCommentVNode("", true),
            __props.legendItem.type !== unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) ? (openBlock(), createElementBlock("div", _hoisted_18, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                class: "text-gray-500 hover:text-black",
                content: __props.legendItem.type === unref(LegendType).Error ? unref(t)("legend.layer.controls.remove") : unref(t)("legend.layer.controls.cancel"),
                onMouseover: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop"])),
                onClick: withModifiers(cancelOrRemoveLayer, ["stop"]),
                "aria-label": __props.legendItem.type === unref(LegendType).Error ? unref(t)("legend.layer.controls.remove") : unref(t)("legend.layer.controls.cancel")
              }, [
                createBaseVNode("div", _hoisted_20, [
                  __props.legendItem.type === unref(LegendType).Placeholder ? (openBlock(), createElementBlock("svg", _hoisted_21, _cache[16] || (_cache[16] = [
                    createBaseVNode("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" }, null, -1)
                  ]))) : (openBlock(), createElementBlock("svg", _hoisted_22, _cache[17] || (_cache[17] = [
                    createBaseVNode("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }, null, -1)
                  ])))
                ])
              ], 40, _hoisted_19)), [
                [_directive_tippy, {
                  placement: "top-start"
                }]
              ])
            ])) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layerOffscale ? withDirectives((openBlock(), createElementBlock("div", {
              key: 9,
              class: "relative p-4 cursor-default",
              content: unref(t)("legend.layer.offscale"),
              onMouseover: _cache[3] || (_cache[3] = withModifiers(() => {
              }, ["stop"])),
              onClick: _cache[4] || (_cache[4] = withModifiers(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, _cache[18] || (_cache[18] = [
              createBaseVNode("svg", {
                class: "inline-block fill-gray-400 w-18 h-18",
                viewBox: "0 0 24 24"
              }, [
                createBaseVNode("path", { d: "M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z" })
              ], -1)
            ]), 40, _hoisted_23)), [
              [_directive_tippy, {
                placement: "top-start"
              }]
            ]) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && !__props.legendItem.layer?.mapLayer ? withDirectives((openBlock(), createElementBlock("div", {
              key: 10,
              class: "relative p-4 cursor-default",
              content: unref(t)("legend.layer.data.only"),
              onMouseover: _cache[5] || (_cache[5] = withModifiers(() => {
              }, ["stop"])),
              onClick: _cache[6] || (_cache[6] = withModifiers(() => {
              }, ["stop"])),
              "focus-icon": ""
            }, _cache[19] || (_cache[19] = [
              createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "18",
                viewBox: "0 -960 960 960",
                width: "18",
                class: "inline-block fill-gray-400"
              }, [
                createBaseVNode("path", { d: "m776.109-63.565-73.435-69.196q-51.302 32.573-106.091 59.145-54.788 26.572-116.255 26.572-88.94 0-167.803-33.893-78.862-33.894-138.052-93.239-59.19-59.346-93.19-138.205-34-78.86-34-167.619 0-64.607 19.12-125.521Q85.521-666.435 120-719.674l-50.848-50.848 68.761-68.761L844.87-132.326l-68.761 68.76Zm-345.392-92.653v-72.5l-52.25-52.086v-50.009l-219.01-218.752q-3 17.015-5 34.031-2 17.015-2 35.136 0 124.449 78.826 214.674 78.826 90.224 199.434 109.506Zm410.392-85.412-76.739-77.74q21.288-37.275 32.35-77.847 11.062-40.572 11.062-84.059 0-95.003-56.304-169.853-56.304-74.849-145.391-108.893v.522l-174.413 76.087v31.348L241.87-842.109q52.483-34.989 113.387-52.918 60.903-17.93 125.159-17.93 89.709 0 168.127 33.869 78.418 33.868 137.435 93.28 59.016 59.413 92.997 137.683 33.982 78.269 33.982 167.993 0 64.203-18.43 125.111-18.429 60.907-53.418 113.391Z" })
              ], -1)
            ]), 40, _hoisted_24)), [
              [_directive_tippy, {
                placement: "top-end"
              }]
            ]) : createCommentVNode("", true),
            __props.legendItem.type === unref(LegendType).Item && __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layerOffscale ? (openBlock(), createElementBlock("div", _hoisted_25, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                class: "p-4",
                content: unref(t)("legend.layer.zoomToVisible"),
                onMouseover: _cache[7] || (_cache[7] = withModifiers(() => {
                }, ["stop"])),
                onClick: _cache[8] || (_cache[8] = withModifiers(($event) => __props.legendItem.layer.zoomToVisibleScale(), ["stop"]))
              }, _cache[20] || (_cache[20] = [
                createBaseVNode("svg", {
                  class: "m-auto",
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "18",
                  viewBox: "0 0 24 24",
                  width: "18"
                }, [
                  createBaseVNode("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                  createBaseVNode("path", {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                  }),
                  createBaseVNode("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })
                ], -1)
              ]), 40, _hoisted_26)), [
                [_directive_tippy, {
                  placement: "top-start"
                }]
              ])
            ])) : __props.legendItem.type === unref(LegendType).Item && controlAvailable(unref(LegendControl).Visibility) ? (openBlock(), createBlock(_sfc_main$3, {
              key: 12,
              checked: __props.legendItem.visibility,
              value: __props.legendItem,
              isRadio: __props.legendItem.parent && __props.legendItem.parent.exclusive,
              legendItem: __props.legendItem,
              disabled: __props.legendItem instanceof unref(LayerItem) && !__props.legendItem.layerControlAvailable(unref(LayerControl).Visibility),
              label: isGroup.value ? "Group" : "Layer"
            }, null, 8, ["checked", "value", "isRadio", "legendItem", "disabled", "label"])) : createCommentVNode("", true)
          ], 42, _hoisted_2)), [
            [_directive_focus_item, "show-truncate"],
            [_directive_tippy, {
              placement: "top-start",
              trigger: "manual focus",
              aria: "describedby"
            }]
          ]),
          __props.legendItem.type === unref(LegendType).Placeholder || __props.legendItem instanceof unref(LayerItem) && __props.legendItem.layerRedrawing && __props.legendItem.visibility ? (openBlock(), createElementBlock("div", _hoisted_27, _cache[21] || (_cache[21] = [
            createBaseVNode("div", { class: "progress-line" }, null, -1)
          ]))) : createCommentVNode("", true)
        ]),
        __props.legendItem instanceof unref(LayerItem) && __props.legendItem.symbologyExpanded ? withDirectives((openBlock(), createElementBlock("div", _hoisted_28, [
          symbologyStack.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_29, [
            __props.legendItem instanceof unref(LayerItem) && __props.legendItem.description ? (openBlock(), createElementBlock("p", _hoisted_30, toDisplayString(__props.legendItem.description), 1)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(symbologyStack.value, (item) => {
              return openBlock(), createElementBlock("div", {
                class: "m-5",
                key: item.uid
              }, [
                item.imgUrl && __props.legendItem.symbologyRenderStyle === "images" || !item.imgUrl && layerType.value === "ogc-wms" ? (openBlock(), createElementBlock("div", _hoisted_31, [
                  item.imgUrl ? (openBlock(), createElementBlock("div", _hoisted_32, [
                    createBaseVNode("img", {
                      class: "max-w-full",
                      src: item.imgUrl
                    }, null, 8, _hoisted_33)
                  ])) : item.imgHeight ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: "symbologyIcon w-full p-5",
                    innerHTML: getLegendGraphic(item)
                  }, null, 8, _hoisted_34)) : createCommentVNode("", true),
                  item.label ? withDirectives((openBlock(), createElementBlock("div", _hoisted_35, [
                    createBaseVNode("span", null, toDisplayString(item.label), 1),
                    !item.imgUrl && symbologyStack.value.length > 1 || item.imgUrl && item.definitionClause ? (openBlock(), createBlock(_sfc_main$3, {
                      key: 0,
                      class: "float-right",
                      value: item,
                      legendItem: __props.legendItem,
                      checked: item.visibility,
                      disabled: !controlAvailable(unref(LayerControl).Visibility),
                      label: "Symbol"
                    }, null, 8, ["value", "legendItem", "checked", "disabled"])) : createCommentVNode("", true)
                  ])), [
                    [_directive_truncate]
                  ]) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_36, [
                  item.imgUrl ? (openBlock(), createElementBlock("div", _hoisted_37, [
                    createBaseVNode("img", {
                      class: "w-32 h-32",
                      src: item.imgUrl
                    }, null, 8, _hoisted_38)
                  ])) : item.svgcode ? (openBlock(), createElementBlock("div", _hoisted_39, [
                    createBaseVNode("span", {
                      innerHTML: item.svgcode
                    }, null, 8, _hoisted_40)
                  ])) : createCommentVNode("", true),
                  withDirectives((openBlock(), createElementBlock("div", _hoisted_41, [
                    createTextVNode(toDisplayString(item.label), 1)
                  ])), [
                    [_directive_truncate]
                  ]),
                  modifiableLayer.value && __props.legendItem.layer.supportsFeatures && (!item.imgUrl && symbologyStack.value.length > 1 || item.imgUrl && item.definitionClause) ? (openBlock(), createBlock(_sfc_main$3, {
                    key: 2,
                    value: item,
                    legendItem: __props.legendItem,
                    checked: item.visibility,
                    disabled: !controlAvailable(unref(LayerControl).Visibility),
                    label: "Symbol"
                  }, null, 8, ["value", "legendItem", "checked", "disabled"])) : createCommentVNode("", true)
                ]))
              ]);
            }), 128))
          ])) : createCommentVNode("", true),
          !symbologyStackLoaded.value ? (openBlock(), createElementBlock("div", _hoisted_42, [
            withDirectives((openBlock(), createElementBlock("div", _hoisted_43, [
              isAnimationEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_44)) : createCommentVNode("", true),
              withDirectives((openBlock(), createElementBlock("div", _hoisted_45, [
                createBaseVNode("span", null, toDisplayString(unref(t)("legend.symbology.loading")), 1)
              ])), [
                [_directive_truncate]
              ])
            ])), [
              [_directive_truncate]
            ])
          ])) : createCommentVNode("", true)
        ])), [
          [_directive_focus_item]
        ]) : createCommentVNode("", true),
        __props.legendItem.expanded ? (openBlock(), createElementBlock("div", _hoisted_46, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.legendItem.children, (item) => {
            return openBlock(), createBlock(_component_item, {
              legendItem: item,
              key: item.uid
            }, null, 8, ["legendItem"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
});

const item = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-304c294b"]]);

export { item as default };
