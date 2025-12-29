import { bA as FixtureInstance, bF as defineComponent, bG as useI18n, bH as inject, bM as resolveComponent, bO as createBlock, bP as withCtx, bT as unref, bQ as openBlock, fG as createBaseVNode, iv as useGeosearchStore, he as markRaw, hf as useAppbarStore, hg as useMapnavStore } from './main-BpBTVFw9.js';
import { _ as _sfc_main$1 } from './screen.vue_vue_type_script_setup_true_lang-vCmzTXFl.js';
import './preload-helper-dJJaZANz.js';

class GeosearchAPI extends FixtureInstance {
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nav-button",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const togglePanel = () => {
      iApi?.panel.toggle("geosearch");
    };
    return (_ctx, _cache) => {
      const _component_mapnav_button = resolveComponent("mapnav-button");
      return openBlock(), createBlock(_component_mapnav_button, {
        onClickFunction: togglePanel,
        tooltip: unref(t)("geosearch.title")
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createBaseVNode("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
            createBaseVNode("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
});

const messages = {"en":{"geosearch.title":"Geolocation Search","geosearch.noResults":"No results to show for ","geosearch.searchText":"Search for a location...","geosearch.visible":"Visible on map","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Clear filters","geosearch.serviceError":"No response from {services} service(s)","geosearch.badChars":"The character(s) {chars} are not supported and will be ignored"},"fr":{"geosearch.title":"Recherche géolocalisée","geosearch.noResults":"Aucun résultat à afficher pour ","geosearch.searchText":"Rechercher un emplacement...","geosearch.visible":"Visible sur la carte","geosearch.filters.province":"Province","geosearch.filters.type":"Type","geosearch.filters.clear":"Effacer les filtres","geosearch.serviceError":"Pas de réponse de la part des services de {services}","geosearch.badChars":"Les caractères {chars} ne sont pas pris en charge et seront ignorés"}};

class GeosearchFixture extends GeosearchAPI {
  async added() {
    const geosearchStore = useGeosearchStore(this.$vApp.$pinia);
    geosearchStore.initService(this.$iApi.language, this.config);
    this.$iApi.component("geosearch-nav-button", _sfc_main);
    this.$iApi.panel.register(
      {
        id: "geosearch",
        config: {
          screens: {
            "geosearch-component": markRaw(_sfc_main$1)
          },
          button: {
            tooltip: "geosearch.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>'
          },
          alertName: "geosearch.title"
        }
      },
      { i18n: { messages } }
    );
    this.handlePanelTeleports(["geosearch"]);
  }
  removed() {
    if (this.$iApi.fixture.exists("appbar")) {
      const appbarStore = useAppbarStore(this.$vApp.$pinia);
      appbarStore.removeButton("geosearch");
    }
    if (this.$iApi.fixture.exists("mapnav")) {
      const mapnavStore = useMapnavStore(this.$vApp.$pinia);
      mapnavStore.removeItem("geosearch");
    }
    const geosearchStore = useGeosearchStore(this.$vApp.$pinia);
    geosearchStore.$reset();
    this.$iApi.panel.remove("geosearch");
  }
}

export { GeosearchFixture as default };
