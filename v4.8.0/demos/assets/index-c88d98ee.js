import { bG as defineComponent, bH as useI18n, bI as inject, bN as resolveComponent, bP as openBlock, bQ as createBlock, bR as withCtx, bU as unref, fH as createBaseVNode, bB as FixtureInstance, he as markRaw, hf as useAppbarStore, hg as useMapnavStore } from './main-ba570a3b.js';
import { _ as _sfc_main$1 } from './screen.vue_vue_type_script_setup_true_lang-2ef5f16c.js';
import './preload-helper-a4975f27.js';

const _hoisted_1 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "fill-current w-32 h-20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }),
  /* @__PURE__ */ createBaseVNode("path", { d: "M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" })
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nav-button",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const togglePanel = () => iApi?.panel.toggle("basemap");
    return (_ctx, _cache) => {
      const _component_mapnav_button = resolveComponent("mapnav-button");
      return openBlock(), createBlock(_component_mapnav_button, {
        onClickFunction: togglePanel,
        tooltip: unref(t)("basemap.title")
      }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
});

const messages = {"en":{"basemap.select":"Select basemap","basemap.title":"Basemap"},"fr":{"basemap.select":"Sélectionner la carte de base","basemap.title":"Carte de base"}};

class BasemapFixture extends FixtureInstance {
  added() {
    this.$iApi.component("basemap-nav-button", _sfc_main);
    this.$iApi.panel.register(
      {
        id: "basemap",
        config: {
          screens: { "basemap-component": markRaw(_sfc_main$1) },
          button: {
            tooltip: "basemap.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "basemap.title"
        }
      },
      { i18n: { messages } }
    );
    this.handlePanelTeleports(["basemap"]);
  }
  removed() {
    if (this.$iApi.fixture.exists("appbar")) {
      const appbarStore = useAppbarStore(this.$vApp.$pinia);
      appbarStore.removeButton("basemap");
    }
    if (this.$iApi.fixture.exists("mapnav")) {
      const mapnavStore = useMapnavStore(this.$vApp.$pinia);
      mapnavStore.removeItem("basemap");
    }
    this.$iApi.panel.remove("basemap");
  }
}

export { BasemapFixture as default };
