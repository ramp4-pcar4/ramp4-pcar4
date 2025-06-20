import { hu as _export_sfc, c8 as openBlock, cg as createElementBlock, c2 as defineComponent, c3 as useI18n, c4 as inject, k7 as throttle, c6 as resolveComponent, ce as createVNode, ca as withCtx, cd as unref, fn as createBaseVNode, gH as useMapnavStore, c5 as computed, c7 as resolveDirective, cf as withDirectives, ch as Fragment, ci as renderList, c9 as createBlock, k8 as resolveDynamicComponent, hE as createCommentVNode, hs as pushScopeId, ht as popScopeId, bZ as FixtureInstance, hr as GlobalEvents } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

const _sfc_main$2 = {};

const _hoisted_1$2 = { class: "border-b p-0 self-center w-2/3" };

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("span", _hoisted_1$2))
}
const DividerNav = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render]]);

const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-32 h-20"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })
], -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  class: "fill-current w-32 h-20"
}, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M19 13H5v-2h14v2z" }),
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })
], -1);
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
          default: withCtx(() => [
            _hoisted_1$1
          ]),
          _: 1
        }, 8, ["onClickFunction", "tooltip"]),
        createVNode(DividerNav),
        createVNode(_component_mapnav_button, {
          onClickFunction: unref(zoomOut),
          tooltip: unref(t)("mapnav.zoomOut")
        }, {
          default: withCtx(() => [
            _hoisted_2$1
          ]),
          _: 1
        }, 8, ["onClickFunction", "tooltip"])
      ]);
    };
  }
});

const _withScopeId = (n) => (pushScopeId("data-v-70c3f04e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12" };
const _hoisted_2 = { class: "flex flex-col" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "py-1" }, null, -1));
const _hoisted_4 = { class: "mapnav-section bg-white-75 hover:bg-white" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mapnav",
  setup(__props) {
    const mapnavStore = useMapnavStore();
    const visible = computed(
      () => mapnavStore.order.map((id) => mapnavStore.items[id]).filter((item) => item.componentId)
    );
    return (_ctx, _cache) => {
      const _directive_focus_list = resolveDirective("focus-list");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        withDirectives((openBlock(), createElementBlock("div", _hoisted_2, [
          createVNode(_sfc_main$1, { class: "mapnav-section bg-white-75 hover:bg-white" }),
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
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
        ])), [
          [_directive_focus_list]
        ])
      ]);
    };
  }
});

const mapnav_vue_vue_type_style_index_0_scoped_70c3f04e_lang = '';

const MapnavV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-70c3f04e"]]);

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
    const mapnavItems = mapnavConfig.items.map(
      (item) => ({
        id: item
      })
    );
    this.mapnavStore.items = mapnavItems.reduce(
      (map, item) => {
        map[item.id] = item;
        return map;
      },
      {}
    );
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
    const systemControls = [
      "geolocator",
      "zoom",
      "home",
      "fullscreen"
    ];
    this.mapnavStore.order.forEach((id) => {
      if (this.$iApi.fixture.get(id) || systemControls.includes(id)) {
        this.mapnavStore.items[id].componentId = `${id}-nav-button`;
      }
    });
  }
}

const messages = {"en":{"mapnav.zoomIn":"Zoom In","mapnav.zoomOut":"Zoom Out","mapnav.home":"Home","mapnav.fullscreen":"Full Screen","mapnav.geolocator":"Your Location","mapnav.geolocator.error.permission":"The location request was denied. Please check your browser permission settings.","mapnav.geolocator.error.internal":"Your location could not be found."},"fr":{"mapnav.zoomIn":"Zoom avant","mapnav.zoomOut":"Zoom arrière","mapnav.home":"Accueil","mapnav.fullscreen":"Plein Écran","mapnav.geolocator":"Votre position","mapnav.geolocator.error.permission":"Demande de localisation refusée. Veuillez vérifier les paramètres d'autorisation de votre navigateur.","mapnav.geolocator.error.internal":"Votre emplacement n'a pu être trouvé."}};

class MapnavFixture extends MapnavAPI {
  async added() {
    Object.entries(messages).forEach(
      (value) => this.$iApi.$i18n.mergeLocaleMessage(...value)
    );
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
