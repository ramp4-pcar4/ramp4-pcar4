import { i8 as _export_sfc, bQ as openBlock, bW as createElementBlock, bF as defineComponent, bG as useI18n, bH as inject, kK as throttle, bM as resolveComponent, bU as createVNode, bP as withCtx, fG as createBaseVNode, bT as unref, hg as useMapnavStore, bI as ref, bJ as onMounted, bK as onBeforeUnmount, bL as computed, bN as resolveDirective, bV as withDirectives, bX as Fragment, bY as renderList, bO as createBlock, kL as resolveDynamicComponent, fM as createCommentVNode, bA as FixtureInstance, fO as GlobalEvents } from './main-48Jy8Lgr.js';
import './preload-helper-dJJaZANz.js';

const _sfc_main$2 = {};

const _hoisted_1$1 = { class: "border-b p-0 self-center w-2/3" };

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("span", _hoisted_1$1))
}
const DividerNav = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render]]);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "zoom-nav",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const zoomIn = throttle(400, true, () => iApi.geo.map.zoomIn());
    const zoomOut = throttle(400, true, () => iApi.geo.map.zoomOut());
    return (_ctx, _cache) => {
      const _component_mapnav_button = resolveComponent("mapnav-button");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_mapnav_button, {
          onClickFunction: unref(zoomIn),
          tooltip: unref(t)("mapnav.zoomIn")
        }, {
          default: withCtx(() => _cache[0] || (_cache[0] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              createBaseVNode("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
              createBaseVNode("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        createVNode(DividerNav),
        createVNode(_component_mapnav_button, {
          onClickFunction: unref(zoomOut),
          tooltip: unref(t)("mapnav.zoomOut")
        }, {
          default: withCtx(() => _cache[1] || (_cache[1] = [
            createBaseVNode("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              class: "fill-current w-32 h-20"
            }, [
              createBaseVNode("path", { d: "M19 13H5v-2h14v2z" }),
              createBaseVNode("path", {
                d: "M0 0h24v24H0z",
                fill: "none"
              })
            ], -1)
          ])),
          _: 1
        }, 8, ["onClickFunction", "tooltip"])
      ]);
    };
  }
});

const _hoisted_1 = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" };
const _hoisted_2 = ["content"];
const _hoisted_3 = { class: "mapnav-section bg-white-75 hover:bg-white" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mapnav",
  setup(__props) {
    const mapnavStore = useMapnavStore();
    const { t } = useI18n();
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
    const visible = computed(() => mapnavStore.order.map((id) => mapnavStore.items[id]).filter((item) => item.componentId));
    return (_ctx, _cache) => {
      const _directive_focus_list = resolveDirective("focus-list");
      const _directive_tippy = resolveDirective("tippy");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        withDirectives((openBlock(), createElementBlock("div", {
          class: "flex flex-col",
          content: unref(t)("panels.controls.items"),
          ref_key: "el",
          ref: el
        }, [
          createVNode(_sfc_main$1, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          _cache[0] || (_cache[0] = createBaseVNode("span", { class: "py-1" }, null, -1)),
          createBaseVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(visible.value, (button, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: button.id + "button"
              }, [
                (openBlock(), createBlock(resolveDynamicComponent(button.id + "-nav-button"))),
                index !== visible.value.length - 1 ? (openBlock(), createBlock(DividerNav, {
                  key: 0,
                  class: "mapnav-divider"
                })) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ], 8, _hoisted_2)), [
          [_directive_focus_list],
          [_directive_tippy, {
            trigger: "manual",
            placement: "top-end",
            maxWidth: 190
          }]
        ])
      ]);
    };
  }
});

const MapnavV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e993307a"]]);

class MapnavAPI extends FixtureInstance {
  mapnavStore = useMapnavStore(this.$vApp.$pinia);
  /**
   * Returns `MapnavFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {MapnavFixtureConfig}
   * @memberof MapnavFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {MapnavFixtureConfig} [mapnavConfig]
   * @returns
   * @memberof MapnavAPI
   */
  _parseConfig(mapnavConfig) {
    if (!mapnavConfig) {
      return;
    }
    const mapnavItems = mapnavConfig.items.map((item) => ({
      id: item
    }));
    this.mapnavStore.items = mapnavItems.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, {});
    this.mapnavStore.order = mapnavItems.map((item) => item.id);
    this._validateItems();
  }
  /**
   * Checks if components specified as mapnav items are registered or not.
   * Will check the literal id values, and id values with `-nav-button` suffixes appended.
   *
   * @memberof MapnavAPI
   */
  _validateItems() {
    const systemControls = ["geolocator", "zoom", "home", "fullscreen"];
    this.mapnavStore.order.forEach((id) => {
      if (this.$iApi.fixture.exists(id) || systemControls.includes(id)) {
        this.mapnavStore.items[id].componentId = `${id}-nav-button`;
      }
    });
  }
}

const messages = {"en":{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen","mapnav.geolocator":"Your Location","mapnav.geolocator.error.permission":"The location request was denied. Please check your browser permission settings.","mapnav.geolocator.error.internal":"Your location could not be found."},"fr":{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arrière","mapnav.home":"Accueil","mapnav.fullscreen":"Plein Écran","mapnav.geolocator":"Votre position","mapnav.geolocator.error.permission":"Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.","mapnav.geolocator.error.internal":"Votre emplacement n'a pu être trouvé."}};

class MapnavFixture extends MapnavAPI {
  async added() {
    Object.entries(messages).forEach((value) => this.$iApi.$i18n.mergeLocaleMessage(...value));
    const { destroy, el } = this.mount(MapnavV, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    innerShell.appendChild(el.childNodes[0]);
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    const handler = this.$iApi.event.on(GlobalEvents.COMPONENT, () => {
      this._parseConfig(this.config);
    });
    this.removed = () => {
      unwatch();
      this.$iApi.event.off(handler);
      const mapnavStore = useMapnavStore(this.$vApp.$pinia);
      const items = { ...mapnavStore.items };
      Object.keys(items).forEach((item) => mapnavStore.removeItem(item));
      mapnavStore.$reset();
      destroy();
    };
  }
}

export { MapnavFixture as default };
