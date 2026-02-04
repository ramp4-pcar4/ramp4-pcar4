import { bA as FixtureInstance, nP as useDetailsStore, nQ as ReactiveIdentifyFactory, bF as defineComponent, bI as ref, bJ as onMounted, bQ as openBlock, bW as createElementBlock, fG as createBaseVNode, bX as Fragment, bY as renderList, fH as normalizeClass, iK as normalizeStyle, fM as createCommentVNode, bS as toDisplayString, i8 as _export_sfc, bL as computed, bN as resolveDirective, bV as withDirectives, bU as createVNode, im as withModifiers, bG as useI18n, lA as useLayerStore, fK as onBeforeMount, fL as watch, bK as onBeforeUnmount, bO as createBlock, bT as unref, bH as inject, nR as linkifyHtml, kL as resolveDynamicComponent, iF as LayerType, nS as GeometryType, fO as GlobalEvents, bR as createTextVNode, bM as resolveComponent, bP as withCtx, he as markRaw, hf as useAppbarStore } from './main-BpBTVFw9.js';
import { H as HilightMode } from './hilight-defs-BwAFwTg8.js';
import { T as ToggleSwitchControl } from './toggle-switch-control-CTLWhcDZ.js';
import './preload-helper-dJJaZANz.js';

class DetailsItemInstance {
  id;
  name;
  template;
  fields;
  componentId;
  constructor(value) {
    const params = {
      ...typeof value === "string" ? { id: value, template: "", name: "" } : value
    };
    ({ template: this.template, id: this.id, name: this.name, fields: this.fields } = params);
  }
}

const ORIGIN_DETAILS = "details";
class DetailsAPI extends FixtureInstance {
  detailsStore = useDetailsStore(this.$vApp.$pinia);
  get config() {
    return super.config;
  }
  /**
   * Updates the identify result in the store, and then opens the details panel.
   *
   * @param {IdentifyResult[]} payload
   * @memberof DetailsAPI
   */
  openDetails(payload) {
    this.detailsStore.payload = payload;
    const panel = this.$iApi.panel.get("details");
    this.detailsStore.origin = "identify";
    panel.button.tooltip = "details.layers.title.identifyOrigin";
    payload.forEach((p) => {
      const layer = this.$iApi.useStore("layer").getLayerByUid(p.uid);
      this._loadDetailsConfig(layer);
    });
    const detailsPanel = this.$iApi.panel.get("details");
    if (!detailsPanel.isOpen) {
      this.$iApi.panel.open({
        id: "details"
      });
    }
  }
  /**
   * Provided with the data for a single feature, shows or hides details panel.
   * If panel is closed or incoming data is different than current content, panel is shown.
   * If panel open and incoming data is what is currently shown, panel closes.
   * The `open` parameter can override the behavior.
   * featureData payload (can be empty if forcing closed)
   * - uid     : uid string of the layer hosting the feature
   * - format  : structure of the data. IdentifyResultFormat value.
   * - data    : source information for the feature. Analogous to the data property of an IdentifyItem
   * - layerId : optional layerId string of the layer hosting the feature. Will be looked up if not provided
   *
   * @param {{data: any, uid: string, format: IdentifyResultFormat}} featureData
   * @param {boolean | undefined} open can force the panel to open (true) or close (false) regardless of current panel state
   * @memberof DetailsAPI
   */
  toggleFeature(featureData, open) {
    const panel = this.$iApi.panel.get("details");
    if (open === false) {
      panel.close();
      this.detailsStore.currentFeatureId = void 0;
      return;
    }
    const layer = this.$iApi.geo.layer.getLayer(featureData.uid);
    const currFeatureId = `${featureData.uid}-${// see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
    layer?.supportsFeatures ? featureData.data[layer?.oidField ?? ""] : JSON.stringify(featureData.data)}`;
    if (panel.isOpen && currFeatureId === this.detailsStore.currentFeatureId && !(open === true)) {
      panel.close();
      this.detailsStore.currentFeatureId = void 0;
      return;
    }
    this.detailsStore.origin = "toggleEvent";
    panel.button.tooltip = "details.layers.title.gridOrigin";
    this.detailsStore.currentFeatureId = currFeatureId;
    this._loadDetailsConfig(layer);
    const fakeResult = {
      items: [ReactiveIdentifyFactory.makeRawItem(featureData.format, featureData.data)],
      uid: featureData.uid,
      layerId: featureData.layerId || layer?.id || "error-not-found",
      loading: Promise.resolve(),
      loaded: true,
      errored: false,
      requestTime: Date.now()
    };
    this.detailsStore.payload = [fakeResult];
    if (!panel.isOpen) {
      panel.open();
    }
  }
  /**
   * Read the details section of the layers' fixture config
   *
   * @param {DetailsConfig} [config]
   * @memberof DetailsAPI
   */
  _parseConfig(config) {
    if (config && config.templates) {
      this.detailsStore.defaultTemplates = config.templates;
    }
    this.handlePanelWidths(["details"]);
    this.handlePanelTeleports(["details"]);
    const layerDetailsConfigs = this.getLayerFixtureConfigs();
    const detailsConfigItems = [];
    Object.keys(layerDetailsConfigs).forEach((layerId) => {
      detailsConfigItems.push({
        id: layerId,
        name: layerDetailsConfigs[layerId].name,
        template: layerDetailsConfigs[layerId].template,
        fields: layerDetailsConfigs[layerId].fields
      });
    });
    const detailsItems = detailsConfigItems.map((item) => new DetailsItemInstance(item));
    this.detailsStore.properties = detailsItems.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, {});
    this._validateItems();
  }
  _loadDetailsConfig(layer) {
    if (layer) {
      const detailsItem = this.detailsStore.properties[layer.id];
      if (detailsItem === void 0) {
        const layerDetailsConfigs = this.getLayerFixtureConfigs();
        if (layerDetailsConfigs[layer.id] !== void 0) {
          this.detailsStore.addConfigProperty({
            id: layer.id,
            name: layerDetailsConfigs[layer.id].name,
            template: layerDetailsConfigs[layer.id].template,
            fields: layerDetailsConfigs[layer.id].fields
          });
        }
      }
    }
  }
  /**
   * Check to see if the stored components are registered properly.
   *
   * @memberof DetailsAPI
   */
  _validateItems() {
    Object.values(this.detailsStore.properties).forEach((item) => {
      if (item.template in this.$vApp.$options.components) {
        this.detailsStore.properties[item.id].componentId = item.template;
      }
    });
  }
  /**
   * Highlight identified items
   * @param items items to add
   * @param layerUid uid of layer the items belong to
   */
  async hilightDetailsItems(items, layerUid) {
    const hItems = items instanceof Array ? items : [items];
    const hilightFix = this.$iApi.fixture.get("hilight");
    if (hilightFix) {
      const gsByKey = await hilightFix.getGraphicsByKey(ORIGIN_DETAILS);
      await hilightFix.removeHilight(gsByKey);
      const thisHighlight = Date.now();
      this.detailsStore.lastHilight = thisHighlight;
      const graphics = await this.getHilightGraphics(hItems, layerUid);
      if (this.detailsStore.lastHilight === thisHighlight) {
        await hilightFix.addHilight(graphics);
        if (this.detailsStore.lastHilight !== thisHighlight) {
          hilightFix.removeHilight(graphics);
        }
      }
    }
  }
  /**
   * Remove all details panel map hilights.
   */
  async removeDetailsHilight() {
    const hilightFix = this.$iApi.fixture.get("hilight");
    if (hilightFix) {
      this.detailsStore.lastHilight = Date.now();
      const gsByKey = await hilightFix.getGraphicsByKey(ORIGIN_DETAILS);
      await hilightFix.removeHilight(gsByKey);
    }
  }
  /**
   * Reload map elements of the hilighter for a set of identify items.
   *
   * @param {IdentifyItem | Array<IdentifyItem>} items items to reload
   * @param {string} layerUid uid of layer the items belong to
   */
  async reloadDetailsHilight(items, layerUid) {
    const hItems = items instanceof Array ? items : [items];
    const hilightFix = this.$iApi.fixture.get("hilight");
    if (hilightFix) {
      const graphics = await this.getHilightGraphics(hItems, layerUid);
      hilightFix.reloadHilight(graphics);
    }
  }
  /**
   * Return the graphics of the given IdentifyItems once the items have loaded.
   * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
   * @param layerUid uid of layer the items belong to
   * @returns {Promise<Array<Graphic>>} resolves with array of graphics
   */
  async getHilightGraphics(items, layerUid) {
    const layer = this.$iApi.geo.layer.getLayer(layerUid);
    const hilightFix = this.$iApi.fixture.get("hilight");
    const gs = [];
    if (layer) {
      await Promise.all(
        items.map(async (item) => {
          await item.loading;
          const oid = item.data[layer.oidField];
          const g = await layer.getGraphic(oid, {
            getGeom: true,
            getAttribs: true,
            getStyle: true
          });
          g.id = hilightFix.constructGraphicKey(ORIGIN_DETAILS, layerUid, oid);
          gs.push(g);
        })
      );
    }
    return gs;
  }
  /**
   * Updates hilighted graphics when the hilight toggler is toggled.
   *
   * @param {boolean} hilightOn Whether the toggler has been turned on/off
   * @param {IdentifyItem | Array<IdentifyItem>} items The identify items to highlight. Only required if turning on
   * @param {string} layerUid the layer UID that owns the items. Only required if turning on
   */
  onHilightToggle(hilightOn, items, layerUid) {
    this.detailsStore.hilightToggle = hilightOn;
    if (hilightOn && items && layerUid) {
      this.hilightDetailsItems(items, layerUid);
    } else if (!hilightOn) {
      this.removeDetailsHilight();
    }
  }
  /**
   * Return whether or not a HilightMode has been defined (other than NONE)
   */
  hasHilighter() {
    const hilightFix = this.$iApi.fixture.get("hilight");
    return hilightFix && hilightFix.hilightMode.mode !== HilightMode.NONE;
  }
}

const _hoisted_1$7 = {
  key: 0,
  class: "relative"
};
const _hoisted_2$6 = {
  key: 0,
  class: "relative"
};
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$2 = ["src"];
const _hoisted_5$2 = {
  key: 1,
  class: "w-32 h-32"
};
const _hoisted_6$2 = { class: "symbologyIcon" };
const _hoisted_7$2 = ["innerHTML"];
const _hoisted_8$2 = ["src"];
const _hoisted_9$2 = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" };
const _hoisted_10$2 = {
  key: 0,
  class: "px-5"
};
const _hoisted_11$2 = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: true },
    result: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const stack = ref([]);
    onMounted(() => {
      stack.value = props.layer.legend;
    });
    return (_ctx, _cache) => {
      return __props.result.loaded ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", {
          class: normalizeClass(__props.result.items.length === 0 ? "opacity-50" : "")
        }, [
          stack.value.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(stack.value.slice(0, 3).reverse(), (item, idx) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["absolute", [idx == 0 ? "symbol-0" : idx == 1 ? "left-3" : "left-6"]]),
                style: normalizeStyle({ "z-index": 3 - idx }),
                key: idx
              }, [
                stack.value[idx].svgcode ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "symbologyIcon w-28 h-28",
                  innerHTML: stack.value[idx].svgcode
                }, null, 8, _hoisted_3$2)) : stack.value[idx].imgUrl ? (openBlock(), createElementBlock("img", {
                  key: 1,
                  class: "symbologyIcon w-28 h-28",
                  src: stack.value[idx].imgUrl
                }, null, 8, _hoisted_4$2)) : createCommentVNode("", true)
              ], 6);
            }), 128))
          ])) : stack.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
            createBaseVNode("div", _hoisted_6$2, [
              stack.value[0].svgcode ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: stack.value[0].svgcode
              }, null, 8, _hoisted_7$2)) : stack.value[0].imgUrl ? (openBlock(), createElementBlock("img", {
                key: 1,
                class: "symbologyIcon w-full h-full",
                src: stack.value[0].imgUrl
              }, null, 8, _hoisted_8$2)) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", _hoisted_9$2, [
          __props.result.loaded ? (openBlock(), createElementBlock("div", _hoisted_10$2, toDisplayString(__props.result.items.length), 1)) : createCommentVNode("", true)
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_11$2, _cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "symbologyIcon h-32 w-32" }, [
          createBaseVNode("div", { class: "relative animate-spin spinner h-24 w-24" })
        ], -1)
      ])));
    };
  }
});

const SymbologyStack = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e0b0309a"]]);

const _hoisted_1$6 = ["content"];
const _hoisted_2$5 = { class: "symbologyLayerName truncate" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: true },
    result: { type: Object, required: true },
    selected: { type: Boolean, required: true }
  },
  setup(__props) {
    const detailsStore = useDetailsStore();
    const detailProperties = computed(() => detailsStore.properties);
    const props = __props;
    const layerName = () => {
      const layer = props.layer;
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].name) {
        return detailProperties.value[layer.id].name;
      }
      return layer?.name ?? "";
    };
    return (_ctx, _cache) => {
      const _directive_tippy = resolveDirective("tippy");
      return withDirectives((openBlock(), createElementBlock("button", {
        class: normalizeClass(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", __props.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"])),
        content: layerName()
      }, [
        createVNode(SymbologyStack, {
          class: "symbStack w-32 h-32 mr-10",
          layer: __props.layer,
          result: __props.result
        }, null, 8, ["layer", "result"]),
        createBaseVNode("div", _hoisted_2$5, toDisplayString(layerName()), 1)
      ], 10, _hoisted_1$6)), [
        [_directive_tippy, { placement: "right", sticky: true }]
      ]);
    };
  }
});

const _hoisted_1$5 = ["content"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: true },
    selected: { type: String, required: true }
  },
  emits: ["selection-changed"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const layerStore = useLayerStore();
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
    const emit = __emit;
    const props = __props;
    const selectedLayer = ref("");
    const watchers = ref([]);
    const expanded = ref(false);
    const hovering = ref(false);
    const getLayerInfo = (uid) => {
      let layer = layerStore.getLayerByUid(uid);
      return layer;
    };
    const handleItemClick = (uid) => {
      selectedLayer.value = uid;
      emit("selection-changed", uid);
      expanded.value = false;
    };
    const handleMouseOver = () => {
      if (!hovering.value) {
        setTimeout(() => {
          expanded.value = hovering.value;
        }, 500);
      }
      hovering.value = true;
    };
    const handleMouseLeave = () => {
      expanded.value = hovering.value = false;
    };
    const handleItemFocus = () => {
      if (!hovering.value) {
        expanded.value = true;
      }
      hovering.value = true;
    };
    const handleItemBlur = () => {
      expanded.value = hovering.value = false;
    };
    onBeforeMount(() => {
      watchers.value.push(
        watch(props, () => {
          selectedLayer.value = props.selected;
        })
      );
    });
    onMounted(() => {
      el.value?.addEventListener("blur", blurEvent);
      el.value?.addEventListener("keyup", keyupEvent);
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
      el.value?.removeEventListener("blur", blurEvent);
      el.value?.removeEventListener("keyup", keyupEvent);
    });
    return (_ctx, _cache) => {
      const _directive_focus_item = resolveDirective("focus-item");
      const _directive_focus_list = resolveDirective("focus-list");
      const _directive_tippy = resolveDirective("tippy");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": expanded.value }]),
        onMouseover: handleMouseOver,
        onMouseleave: handleMouseLeave,
        onFocus: handleItemFocus,
        onBlur: withModifiers(handleItemBlur, ["self"]),
        content: unref(t)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: el
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.results, (item, idx) => {
          return openBlock(), createElementBlock("div", {
            class: "flex justify-start relative",
            key: idx
          }, [
            withDirectives((openBlock(), createBlock(_sfc_main$6, {
              key: item.uid,
              layer: getLayerInfo(item.uid),
              result: item,
              selected: item.uid === selectedLayer.value,
              onClick: ($event) => handleItemClick(item.uid)
            }, null, 8, ["layer", "result", "selected", "onClick"])), [
              [_directive_focus_item]
            ])
          ]);
        }), 128))
      ], 42, _hoisted_1$5)), [
        [_directive_focus_list],
        [_directive_tippy, {
          trigger: "manual",
          placement: "top-start"
        }]
      ]);
    };
  }
});

const _hoisted_1$4 = { class: "inline font-bold" };
const _hoisted_2$4 = ["innerHTML"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: false
    },
    fields: {
      type: Object,
      required: true
    },
    identifyData: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const props = __props;
    const findAndDelete = (fields, propertyType, property, helper) => {
      const field = fields.find((f) => f[propertyType].toLowerCase() === property.toLowerCase());
      if (field) delete helper[field.name];
    };
    const itemData = () => {
      const clonePayload = Object.assign({}, props.identifyData.data);
      findAndDelete(props.fields, "type", "geometry", clonePayload);
      if (!iApi?.ui.exposeOids) {
        findAndDelete(props.fields, "type", "oid", clonePayload);
      }
      if (!iApi?.ui.exposeMeasurements) {
        findAndDelete(props.fields, "name", "shape_length", clonePayload);
        findAndDelete(props.fields, "name", "shape_area", clonePayload);
      }
      const fieldsMetadata = {};
      props.fields.forEach((field) => {
        const checkField = props.fixtureFields?.find((item) => field.name === item.field);
        fieldsMetadata[field.name] = {
          name: checkField?.alias || field.alias || field.name,
          type: field.type,
          visible: checkField?.visible ?? true
        };
      });
      const displayMetadata = {};
      Object.keys(clonePayload).forEach((key) => {
        const fieldMD = fieldsMetadata[key];
        if (fieldMD && fieldMD.visible) {
          const cloneValue = clonePayload[key];
          displayMetadata[key] = {
            value: typeof cloneValue === "number" ? iApi?.ui.formatNumber(cloneValue) : cloneValue,
            alias: fieldMD.name,
            type: fieldMD.type
          };
        }
      });
      for (const [key] of Object.entries(displayMetadata)) {
        if (iApi.ui.isPlainText(displayMetadata[key].value)) {
          displayMetadata[key].value = iApi.ui.escapeHtml(displayMetadata[key].value);
        }
      }
      return displayMetadata;
    };
    const formatValues = (html, alias, type) => {
      switch (type) {
        case "date":
          return makeDate(html);
        default:
          return makeHtmlLink(html, alias);
      }
    };
    const makeHtmlLink = (html, alias) => {
      if (!html) {
        return html;
      }
      if (!!html.trim().match(/\.(jpeg|jpg|gif|png)$/) || !!html.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        //eslint-disable-line
      )) {
        return `<img src="${html}" alt="${t("details.item.alert.defaultAltText", { alias })}" />`;
      }
      const classes = "underline text-blue-700 break-all";
      const div = document.createElement("div");
      div.innerHTML = html.trim();
      if (div.firstElementChild?.tagName == "A") {
        div.firstElementChild.className = classes;
        return div.innerHTML;
      } else {
        const options = {
          className: classes,
          target: "_blank",
          validate: {
            url: (value) => /^https?:\/\//.test(value)
            // only links that begin with a protocol will be hyperlinked
          }
        };
        return linkifyHtml(html, options);
      }
    };
    const makeDate = (html) => {
      const numericDate = parseInt(html);
      if (isNaN(numericDate)) {
        return html;
      }
      const formattedDate = new Date(numericDate);
      return formattedDate.toISOString().split("T")[0];
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(itemData(), (val, name, itemIdx) => {
          return openBlock(), createElementBlock("div", {
            class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
            key: itemIdx
          }, [
            createBaseVNode("span", _hoisted_1$4, toDisplayString(val.alias), 1),
            _cache[0] || (_cache[0] = createBaseVNode("span", { class: "flex-auto" }, null, -1)),
            createBaseVNode("span", {
              class: "inline",
              innerHTML: formatValues(val.value, val.alias, val.type)
            }, null, 8, _hoisted_2$4)
          ]);
        }), 128))
      ]);
    };
  }
});

const _hoisted_1$3 = ["innerHTML"];
const _hoisted_2$3 = { key: 1 };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return __props.identifyData ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "whitespace-pre-wrap break-words h-full overflow-auto",
        innerHTML: __props.identifyData.data.data ?? __props.identifyData.data
      }, null, 8, _hoisted_1$3)) : (openBlock(), createElementBlock("div", _hoisted_2$3, toDisplayString(unref(t)("details.layers.results.empty")), 1));
    };
  }
});

const _hoisted_1$2 = { class: "relative flex flex-grow truncate" };
const _hoisted_2$2 = {
  key: 0,
  class: "flex flex-grow items-center truncate"
};
const _hoisted_3$1 = { class: "flex p-8 items-center" };
const _hoisted_4$1 = ["innerHTML"];
const _hoisted_5$1 = {
  key: 1,
  class: "symbologyIcon p-6"
};
const _hoisted_6$1 = ["content", "innerHTML", "tabindex"];
const _hoisted_7$1 = {
  key: 1,
  class: "flex p-6 flex-grow"
};
const _hoisted_8$1 = {
  key: 2,
  class: "zoomButton text-center p-3"
};
const _hoisted_9$1 = ["content", "aria-label"];
const _hoisted_10$1 = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
};
const _hoisted_11$1 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
};
const _hoisted_12$1 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
};
const _hoisted_13$1 = ["innerHTML"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "result-item",
  props: {
    uid: { type: String, required: true },
    data: { type: Object, required: true },
    open: { type: Boolean, required: false },
    inList: { type: Boolean, required: false }
  },
  setup(__props) {
    const layerStore = useLayerStore();
    const props = __props;
    const iApi = inject("iApi");
    const watchers = ref([]);
    const detailsStore = useDetailsStore();
    const { t } = useI18n();
    const icon = ref("");
    const zoomStatus = ref("none");
    const zoomButton = ref();
    const getLayerInfo = () => {
      let layer = layerStore.getLayerByUid(props.uid);
      return layer;
    };
    const detailProperties = computed(() => detailsStore.properties);
    const defaultTemplates = computed(() => detailsStore.defaultTemplates);
    const supportsFeatures = computed(() => {
      return getLayerInfo()?.supportsFeatures ?? false;
    });
    const isMapLayer = computed(() => {
      return getLayerInfo()?.mapLayer ?? false;
    });
    const itemName = computed(() => {
      const nameField = getLayerInfo()?.nameField;
      let returnValue = nameField && props.data.loaded ? props.data.data[nameField] : iApi.$i18n.t("details.items.title");
      if (iApi.ui.isPlainText(returnValue)) {
        returnValue = iApi.ui.escapeHtml(returnValue);
      }
      return returnValue;
    });
    const makeHtmlLink = (html) => {
      if (typeof html === "string") {
        const classes = "underline text-blue-700 break-all";
        const div = document.createElement("div");
        div.innerHTML = html.trim();
        if (div.firstElementChild?.tagName == "A") {
          div.firstElementChild.className = classes;
          return div.innerHTML;
        } else {
          const options = {
            className: classes,
            target: "_blank",
            validate: {
              url: (value) => /^https?:\/\//.test(value)
              // only links that begin with a protocol will be hyperlinked
            }
          };
          return linkifyHtml(html, options);
        }
      }
      return html;
    };
    const itemChanged = () => {
      updateZoomStatus("none");
      if (props.data.loaded) {
        fetchIcon();
      } else {
        props.data.load().then(() => {
          fetchIcon();
        });
      }
    };
    const fetchIcon = () => {
      icon.value = "";
      if (!(props.data && props.data.loaded)) {
        return;
      }
      const layer = getLayerInfo();
      if (layer === void 0) {
        console.warn(`could not find layer for uid ${props.uid} during icon lookup`);
        return;
      }
      if (layer.supportsFeatures) {
        const oidField = layer.oidField;
        layer.getIcon(props.data.data[oidField]).then((value) => {
          icon.value = value;
        });
      }
    };
    const detailsTemplate = computed(() => {
      const layer = getLayerInfo();
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].template) {
        return detailProperties.value[layer.id].template;
      }
      if (defaultTemplates.value && defaultTemplates.value[props.data.format]) {
        return defaultTemplates.value[props.data.format];
      }
      if (!supportsFeatures.value) {
        return _sfc_main$3;
      } else {
        return _sfc_main$4;
      }
    });
    const fieldsList = computed(() => {
      if (!supportsFeatures.value) {
        return [];
      }
      const layer = getLayerInfo();
      const fields = layer?.fields;
      return fields || [];
    });
    const fixtureFields = computed(() => {
      const layer = getLayerInfo();
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].fields) {
        return detailProperties.value[layer.id].fields;
      }
      return void 0;
    });
    const updateZoomStatus = (value) => {
      if (value === "zoomed" || value === "error") {
        setTimeout(() => {
          zoomStatus.value = value;
          zoomButton.value?._tippy.show();
          setTimeout(() => {
            zoomButton.value?._tippy.hide();
            zoomStatus.value = "none";
          }, 3e3);
        }, 300);
      } else {
        zoomStatus.value = value;
      }
    };
    const zoomToFeature = () => {
      if (zoomStatus.value !== "none") {
        return;
      }
      updateZoomStatus("zooming");
      const layer = getLayerInfo();
      if (layer === void 0 || !layer.isLoaded) {
        console.warn(`Could not find layer for uid ${props.uid} during zoom geometry lookup`);
        updateZoomStatus("error");
        return;
      }
      if (!props.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.");
        updateZoomStatus("error");
        return;
      }
      const oid = props.data.data[layer.oidField];
      const zoomUsingGraphic = () => {
        const opts = { getGeom: true };
        layer.getGraphic(oid, opts).then((g) => {
          if (g.geometry.invalid()) {
            console.error(`Could not find graphic for objectid ${oid}`);
            updateZoomStatus("error");
          } else {
            iApi.geo.map.zoomMapTo(g.geometry);
            updateZoomStatus("zoomed");
            iApi.updateAlert(iApi.$i18n.t("details.item.alert.zoom"));
          }
        }).catch(() => {
          updateZoomStatus("error");
        });
      };
      if (layer.layerType === LayerType.FEATURE && layer.geomType !== GeometryType.POINT) {
        layer.getGraphicExtent(oid).then((e) => {
          iApi.geo.map.zoomMapTo(e);
          updateZoomStatus("zoomed");
          iApi.updateAlert(iApi.$i18n.t("details.item.alert.zoom"));
        }).catch(() => {
          zoomUsingGraphic();
        });
      } else {
        zoomUsingGraphic();
      }
    };
    onBeforeMount(() => {
      watchers.value.push(
        watch(
          props,
          () => {
            itemChanged();
          },
          {
            deep: false,
            immediate: true
          }
        )
      );
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      const _directive_truncate = resolveDirective("truncate");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$2, [
          supportsFeatures.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            createBaseVNode("div", _hoisted_3$1, [
              __props.data.loaded && icon.value ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: icon.value
              }, null, 8, _hoisted_4$1)) : (openBlock(), createElementBlock("div", _hoisted_5$1, _cache[1] || (_cache[1] = [
                createBaseVNode("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            __props.data.loaded ? withDirectives((openBlock(), createElementBlock("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: itemName.value,
              innerHTML: makeHtmlLink(itemName.value),
              tabindex: __props.inList ? -1 : 0
            }, null, 8, _hoisted_6$1)), [
              [_directive_truncate, {
                options: { placement: "right" }
              }]
            ]) : (openBlock(), createElementBlock("div", _hoisted_7$1, toDisplayString(unref(t)("details.loading")), 1)),
            __props.data.loaded ? (openBlock(), createElementBlock("span", _hoisted_8$1, [
              isMapLayer.value ? withDirectives((openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                content: unref(t)(`details.item.zoom${zoomStatus.value === "none" ? "" : `.${zoomStatus.value}`}`),
                "aria-label": unref(t)(`grid.cells.zoom${zoomStatus.value === "none" ? "" : `.${zoomStatus.value}`}`),
                ref_key: "zoomButton",
                ref: zoomButton,
                onClick: _cache[0] || (_cache[0] = (e) => {
                  e.stopPropagation();
                  zoomToFeature();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                zoomStatus.value === "zooming" ? (openBlock(), createElementBlock("div", _hoisted_10$1)) : zoomStatus.value === "zoomed" ? (openBlock(), createElementBlock("svg", _hoisted_11$1, _cache[2] || (_cache[2] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : zoomStatus.value === "error" ? (openBlock(), createElementBlock("svg", _hoisted_12$1, _cache[3] || (_cache[3] = [
                  createBaseVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (openBlock(), createElementBlock("span", {
                  key: 3,
                  innerHTML: unref(iApi).ui.getZoomIcon()
                }, null, 8, _hoisted_13$1))
              ], 8, _hoisted_9$1)), [
                [_directive_tippy, { placement: "bottom" }]
              ]) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        !!__props.open ? (openBlock(), createBlock(resolveDynamicComponent(detailsTemplate.value), {
          key: 0,
          identifyData: __props.data,
          fields: fieldsList.value,
          fixtureFields: fixtureFields.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});

const _hoisted_1$1 = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
};
const _hoisted_2$1 = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
};
const _hoisted_3 = { for: "toggle" };
const _hoisted_4 = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
};
const _hoisted_5 = { class: "flex" };
const _hoisted_6 = ["aria-label"];
const _hoisted_7 = ["content", "aria-label", "disabled"];
const _hoisted_8 = { class: "px-3 text-center flex-grow" };
const _hoisted_9 = ["content", "aria-label", "disabled"];
const _hoisted_10 = { key: 3 };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = ["content"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = {
  key: 1,
  class: "text-center"
};
const _hoisted_15 = {
  key: 4,
  class: "p-5"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "result-list",
  props: {
    uid: { type: String, required: true },
    results: { type: Object, required: true }
  },
  setup(__props) {
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
    const iApi = inject("iApi");
    const detailsStore = useDetailsStore();
    const layerStore = useLayerStore();
    const props = __props;
    const { t } = useI18n();
    const layerExists = ref(false);
    const detailsFixture = ref(iApi.fixture.get("details"));
    const hilightToggle = ref(true);
    const showList = ref(false);
    const currentIdx = ref(0);
    const itemsPerPage = ref(20);
    const handlers = ref([]);
    const watchers = ref([]);
    const activeGreedy = computed(() => detailsStore.activeGreedy);
    const detailProperties = computed(() => detailsStore.properties);
    const endIdx = computed(() => currentIdx.value + itemsPerPage.value);
    const getBoundLayer = () => {
      return layerStore.getLayerByUid(props.uid);
    };
    const getBoundLayerResult = () => {
      return props.results.find((layerIR) => {
        return layerIR.uid === props.uid;
      });
    };
    const isLayerResultLoaded = computed(() => {
      const results = getBoundLayerResult();
      return results?.loaded ?? false;
    });
    const itemRequestTime = computed(() => {
      const results = getBoundLayerResult();
      return results?.requestTime;
    });
    const showPaginator = computed(
      () => layerExists.value && (!showList.value && getLayerIdentifyItems().length > 1 || showList.value && getLayerIdentifyItems().length > itemsPerPage.value)
    );
    const layerName = computed(() => {
      const layer = getBoundLayer();
      if (layer && detailProperties.value[layer.id] && detailProperties.value[layer.id].name) {
        return detailProperties.value[layer.id].name;
      }
      return layer?.name ?? "";
    });
    const uidCompute = computed(() => {
      return props.uid;
    });
    const getLayerIdentifyItems = () => {
      const results = getBoundLayerResult();
      return results ? results.items : [];
    };
    const currentIdentifyItem = computed(() => {
      return getLayerIdentifyItems()[currentIdx.value];
    });
    const canHighlight = computed(() => {
      if (detailsFixture.value.hasHilighter()) {
        const layer = getBoundLayer();
        if (layer) {
          return layer.mapLayer && layer.supportsFeatures;
        }
      }
      return false;
    });
    const onHilightToggle = (value) => {
      hilightToggle.value = value;
      detailsStore.hilightToggle = value;
      updateHighlight();
    };
    const initDetails = () => {
      const layer = getBoundLayer();
      currentIdx.value = currentIdx.value ?? 0;
      hilightToggle.value = detailsStore.hilightToggle ?? hilightToggle.value;
      showList.value = false;
      layerExists.value = !!layer;
      updateHighlight();
    };
    const advanceItemIndex = (direction) => {
      if (showList.value) {
        currentIdx.value += direction * itemsPerPage.value;
        updateHighlight();
      } else {
        currentIdx.value += direction;
      }
    };
    const updateHighlight = () => {
      const resultItems = getLayerIdentifyItems();
      if (hilightToggle.value && isLayerResultLoaded.value && resultItems.length > 0 && canHighlight.value) {
        if (showList.value) {
          detailsFixture.value.hilightDetailsItems(resultItems.slice(currentIdx.value, endIdx.value), props.uid);
        } else {
          const currItem = resultItems[currentIdx.value];
          if (currItem) {
            detailsFixture.value.hilightDetailsItems([currItem], props.uid);
          }
        }
      } else {
        detailsFixture.value.removeDetailsHilight();
      }
    };
    const clickShowList = () => {
      showList.value = true;
      currentIdx.value = Math.floor(currentIdx.value / itemsPerPage.value) * itemsPerPage.value;
      updateHighlight();
    };
    const detailsClosed = () => {
      detailsFixture.value.removeDetailsHilight();
    };
    const detailsMinimized = () => {
      detailsFixture.value.removeDetailsHilight();
    };
    const clickListItem = (idx) => {
      const secretIdx = currentIdx.value;
      currentIdx.value = idx;
      showList.value = false;
      if (secretIdx === idx) {
        updateHighlight();
      }
    };
    onMounted(() => {
      handlers.value.push(
        iApi.event.on(GlobalEvents.LAYER_REMOVE, (removedLayer) => {
          const detailsPanel = iApi.panel.get("details");
          if (props.uid === removedLayer.uid && !!detailsPanel) {
            detailsPanel.close();
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_CLOSED, (panel) => {
          if (panel.id === "details") {
            detailsClosed();
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_MINIMIZED, (panel) => {
          if (panel.id === "details") {
            detailsMinimized();
          }
        })
      );
      handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, (payload) => {
          if (hilightToggle.value && payload.schemaChanged) {
            updateHighlight();
          }
        })
      );
      el.value?.addEventListener("blur", blurEvent);
      el.value?.addEventListener("keyup", keyupEvent);
    });
    onBeforeMount(() => {
      watchers.value.push(
        watch(
          currentIdentifyItem,
          () => {
            if (!showList.value) {
              initDetails();
              if (currentIdentifyItem.value === void 0) {
                detailsFixture.value.removeDetailsHilight();
              }
            }
          },
          {
            deep: false,
            immediate: true
          }
        )
      );
      watchers.value.push(
        watch(
          uidCompute,
          () => {
            const localUid = props.uid;
            if (showList.value && localUid) {
              const layerIR = getBoundLayerResult();
              if (layerIR) {
                layerIR.loading.then(() => {
                  if (props.uid === localUid && showList.value) {
                    updateHighlight();
                  }
                });
              }
            }
          },
          {
            deep: false,
            immediate: true
          }
        )
      );
      watchers.value.push(
        watch(itemRequestTime, () => {
          currentIdx.value = 0;
        })
      );
      watchers.value.push(
        watch(
          () => props.uid,
          () => {
            currentIdx.value = 0;
          }
        )
      );
    });
    onBeforeUnmount(() => {
      watchers.value.forEach((unwatch) => unwatch());
      handlers.value.forEach((handler) => iApi.event.off(handler));
      el.value?.removeEventListener("blur", blurEvent);
      el.value?.removeEventListener("keyup", keyupEvent);
    });
    return (_ctx, _cache) => {
      const _directive_truncate = resolveDirective("truncate");
      const _directive_tippy = resolveDirective("tippy");
      const _directive_focus_item = resolveDirective("focus-item");
      const _directive_focus_list = resolveDirective("focus-list");
      return isLayerResultLoaded.value && activeGreedy.value === 0 ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: normalizeStyle(__props.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        layerExists.value ? withDirectives((openBlock(), createElementBlock("h1", _hoisted_1$1, [
          createTextVNode(toDisplayString(layerName.value), 1)
        ])), [
          [_directive_truncate, { options: { placement: "top-start" } }]
        ]) : createCommentVNode("", true),
        canHighlight.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("label", _hoisted_3, toDisplayString(unref(t)("details.togglehilight.title")), 1),
          createVNode(ToggleSwitchControl, {
            config: {
              value: hilightToggle.value,
              disabled: false
            },
            onToggled: onHilightToggle
          }, null, 8, ["config"])
        ])) : createCommentVNode("", true),
        showPaginator.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            !showList.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": unref(t)("details.item.see.list"),
              onClick: _cache[0] || (_cache[0] = ($event) => clickShowList())
            }, toDisplayString(unref(t)("details.item.see.list")), 9, _hoisted_6)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": showList.value }])
            }, [
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                content: unref(t)(showList.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: _cache[1] || (_cache[1] = ($event) => advanceItemIndex(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": unref(t)(showList.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: currentIdx.value === 0
              }, _cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  createBaseVNode("g", null, [
                    createBaseVNode("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, _hoisted_7)), [
                [_directive_tippy, { placement: "top" }]
              ]),
              createBaseVNode("span", _hoisted_8, toDisplayString(showList.value ? unref(t)("details.items.range", [
                currentIdx.value + 1,
                Math.min(endIdx.value, getLayerIdentifyItems().length),
                getLayerIdentifyItems().length
              ]) : unref(t)("details.item.count", [currentIdx.value + 1, getLayerIdentifyItems().length])), 1),
              withDirectives((openBlock(), createElementBlock("button", {
                type: "button",
                content: unref(t)(showList.value ? "details.items.next" : "details.item.next.item"),
                onClick: _cache[2] || (_cache[2] = ($event) => advanceItemIndex(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": unref(t)(showList.value ? "details.items.next" : "details.item.next.item"),
                disabled: !showList.value && currentIdx.value === getLayerIdentifyItems().length - 1 || showList.value && endIdx.value >= getLayerIdentifyItems().length
              }, _cache[4] || (_cache[4] = [
                createBaseVNode("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  createBaseVNode("g", null, [
                    createBaseVNode("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, _hoisted_9)), [
                [_directive_tippy, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : createCommentVNode("", true),
        layerExists.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
          getLayerIdentifyItems().length > 0 ? (openBlock(), createElementBlock("div", _hoisted_11, [
            showList.value ? withDirectives((openBlock(), createElementBlock("div", {
              key: 0,
              class: "flex flex-col",
              content: unref(t)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: el
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(getLayerIdentifyItems().slice(currentIdx.value, endIdx.value), (item, idx) => {
                return withDirectives((openBlock(), createElementBlock("button", {
                  class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                  key: idx,
                  onClick: ($event) => clickListItem(currentIdx.value + idx)
                }, [
                  createVNode(_sfc_main$2, {
                    data: item,
                    uid: __props.uid,
                    open: false,
                    "in-list": true
                  }, null, 8, ["data", "uid"])
                ], 8, _hoisted_13)), [
                  [_directive_focus_item, "show-truncate"]
                ]);
              }), 128))
            ], 8, _hoisted_12)), [
              [_directive_focus_list],
              [_directive_tippy, {
                trigger: "manual",
                placement: "top-start"
              }]
            ]) : (openBlock(), createBlock(_sfc_main$2, {
              key: 1,
              data: currentIdentifyItem.value,
              uid: __props.uid,
              open: true,
              "in-list": false
            }, null, 8, ["data", "uid"]))
          ])) : (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(unref(t)("details.layers.results.empty.currentLayer")), 1))
        ])) : (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(unref(t)("details.item.no.data")), 1))
      ], 4)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(["flex justify-center py-10 items-center", __props.results.length > 1 ? "ml-42" : ""])
      }, [
        _cache[5] || (_cache[5] = createBaseVNode("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        createTextVNode(" " + toDisplayString(unref(t)("details.item.loading")), 1)
      ], 2));
    };
  }
});

const ResultList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bc907db1"]]);

const _hoisted_1 = { class: "relative h-full" };
const _hoisted_2 = { class: "detailsContentSection overflow-y-auto h-full" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const detailsStore = useDetailsStore();
    const handlers = ref([]);
    const watchers = ref([]);
    const layerResults = ref([]);
    const noResults = ref(false);
    const selectedLayer = ref("");
    const userSelectedLayer = ref(false);
    const activeGreedy = computed(() => detailsStore.activeGreedy);
    const payload = computed(() => detailsStore.payload);
    const detailProperties = computed(() => detailsStore.properties);
    const changeLayerSelection = (uid) => {
      selectedLayer.value = uid;
      userSelectedLayer.value = true;
    };
    const loadPayloadItems = (newPayload) => {
      if (newPayload === void 0) {
        return;
      }
      const greedyMode = newPayload.length === 0 ? 0 : newPayload[0].requestTime;
      detailsStore.activeGreedy = greedyMode;
      detailsStore.slowLoadingFlag = false;
      layerResults.value = newPayload;
      autoOpen(newPayload);
    };
    const autoOpen = (newPayload) => {
      if (userSelectedLayer.value) {
        const lastIdx = layerResults.value.findIndex((item) => item.uid === selectedLayer.value);
        if (lastIdx !== -1) {
          const lastIdentify = layerResults.value[lastIdx];
          lastIdentify.loading.then(() => {
            if (lastIdentify.requestTime !== activeGreedy.value) {
              return;
            }
            if (lastIdentify.items.length > 0) {
              detailsStore.activeGreedy = 0;
              userSelectedLayer.value = false;
              noResults.value = false;
            } else {
              autoOpenAny(newPayload);
            }
          });
        } else {
          autoOpenAny(newPayload);
        }
      } else {
        autoOpenAny(newPayload);
      }
      setTimeout(() => {
        if (activeGreedy.value !== 0 && newPayload[0].requestTime === activeGreedy.value) {
          detailsStore.slowLoadingFlag = true;
        }
      }, 500);
    };
    const autoOpenAny = (newPayload) => {
      const loadingResults = newPayload.map(
        (item) => item.loading.then(() => item.items.length > 0 ? Promise.resolve(item) : Promise.reject())
      );
      const lastTime = newPayload.length === 0 ? 0 : newPayload[0].requestTime;
      Promise.any(loadingResults).then((res) => {
        if (res.requestTime !== activeGreedy.value) {
          return;
        }
        const idx = layerResults.value.find((item) => item.uid === res.uid);
        detailsStore.activeGreedy = 0;
        if (idx !== void 0) {
          selectedLayer.value = idx.uid;
          noResults.value = false;
        }
      }).catch(() => {
        if (lastTime !== activeGreedy.value) {
          return;
        }
        detailsStore.activeGreedy = 0;
        noResults.value = true;
      });
    };
    onBeforeMount(() => {
      watchers.value.push(
        watch(
          payload,
          (newPayload) => {
            loadPayloadItems(newPayload);
          },
          {
            deep: false,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: true
          }
        )
      );
      watchers.value.push(
        watch(activeGreedy, (newGreedy) => {
          if (newGreedy === 0) {
            detailsStore.slowLoadingFlag = false;
          }
        })
      );
    });
    onBeforeUnmount(() => {
      handlers.value.forEach((handler) => iApi.event.off(handler));
      watchers.value.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(
            // Show different titles based on what requested the panel
            unref(detailsStore).origin === "toggleEvent" ? unref(t)("details.layers.title.gridOrigin") : unref(t)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            layerResults.value.length > 1 ? (openBlock(), createBlock(_sfc_main$5, {
              key: 0,
              results: layerResults.value,
              detailsProperties: detailProperties.value,
              selected: selectedLayer.value,
              onSelectionChanged: changeLayerSelection
            }, null, 8, ["results", "detailsProperties", "selected"])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_2, [
              !noResults.value ? (openBlock(), createBlock(ResultList, {
                key: 0,
                uid: selectedLayer.value,
                results: layerResults.value
              }, null, 8, ["uid", "results"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["text-center", { "ml-42": layerResults.value.length > 1 }])
              }, toDisplayString(layerResults.value.length >= 1 ? unref(t)("details.layers.results.empty") : unref(t)("details.layers.results.empty.noLayers")), 3))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const DetailsScreenV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1aa5ce6"]]);

const messages = {"en":{"details.layers.title.identifyOrigin":"Identify Details","details.layers.title.gridOrigin":"Details","details.layers.found":"Found {numResults} results in {numLayers} layers","details.layers.loading":"The layer is loading...","details.layers.error":"Error","details.layers.results.empty":"No results found for any layer.","details.layers.results.empty.currentLayer":"No results found for the selected layer.","details.layers.results.empty.noLayers":"No layers for identification.","details.layers.results.list.tooltip":"Use the arrow keys to navigate the items","details.result.default.name":"Identify Item {0}","details.loading":"Loading...","details.items.title":"Details","details.items.range":"{0} - {1} of {2}","details.items.next":"Next page","details.items.previous":"Previous page","details.items.page":"Items per page","details.item.see.list":"See List","details.item.zoom":"Zoom to feature","details.item.zoom.zooming":"Zooming...","details.item.zoom.error":"Zoom failed","details.item.zoom.zoomed":"Zoomed","details.item.previous.item":"Previous item","details.item.next.item":"Next item","details.item.count":"{0} of {1}","details.item.loading":"Loading results...","details.item.no.data":"No data to show because the layer has been removed","details.item.alert.zoom":"Zoomed into feature","details.item.alert.show.item":"Showing result {itemName}","details.item.alert.show.list":"Showing all results for {layerName}","details.item.alert.defaultAltText":"Image associated with {alias} field","details.togglehilight.title":"Toggle Highlight","details.item.open":"Expand","details.item.collapse":"Collapse"},"fr":{"details.layers.title.identifyOrigin":"Identifier les détails","details.layers.title.gridOrigin":"Détails","details.layers.found":"{numResults} résultats trouvés dans {numLayers} couches","details.layers.loading":"La couche est en cours de chargement...","details.layers.error":"Erreur","details.layers.results.empty":"Aucun résultat trouvé pour aucune couche.","details.layers.results.empty.currentLayer":"Aucun résultat trouvé pour la couche sélectionnée.","details.layers.results.empty.noLayers":"Pas de couches pour l'identification.","details.layers.results.list.tooltip":"Utilisez les touches fléchées pour naviguer entre les éléments","details.result.default.name":"Désigner l'élément {0}","details.loading":"Chargement en cours...","details.items.title":"Détails","details.items.range":"{0} - {1} de {2}","details.items.next":"Page suivante","details.items.previous":"Page précédente","details.items.page":"éléments par page","details.item.see.list":"Voir la liste","details.item.zoom":"Zoom à l'élément","details.item.zoom.zooming":"Zoom en cours...","details.item.zoom.error":"Échec du zoom","details.item.zoom.zoomed":"Zoom terminé","details.item.previous.item":"Élément précédent","details.item.next.item":"Élément suivant","details.item.count":"{0} de {1}","details.item.loading":"Chargement des résultats...","details.item.no.data":"Aucune donnée à afficher","details.item.alert.zoom":"Zoom sur la caractéristique","details.item.alert.show.item":"Affichage du résultat {itemName}","details.item.alert.show.list":"Affichage de tous les résultats pour {layerName}","details.item.alert.defaultAltText":"Image associée au champ {alias}","details.togglehilight.title":"Basculer vers l'élément principal","details.item.open":"Développer","details.item.collapse":"Réduire"}};

class DetailsFixture extends DetailsAPI {
  async added() {
    this.$iApi.panel.register(
      {
        details: {
          screens: {
            "details-screen": markRaw(DetailsScreenV)
          },
          style: {
            width: "425px"
          },
          button: {
            tooltip: "details.layers.title.identifyOrigin",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Aarticle%3A
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'
          },
          alertName: "details.items.title"
        }
      },
      { i18n: { messages } }
    );
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    this.removed = () => {
      unwatch();
      this.$iApi.panel.remove("details");
      if (this.$iApi.fixture.exists("appbar")) {
        const appbarStore = useAppbarStore(this.$vApp.$pinia);
        appbarStore.removeButton("details");
      }
      const detailsStore = useDetailsStore(this.$vApp.$pinia);
      detailsStore.$reset();
    };
  }
}

export { DetailsFixture as default };
