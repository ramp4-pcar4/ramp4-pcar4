import { bB as FixtureInstance, he as markRaw, hf as useAppbarStore } from './main-b03b5063.js';
import { _ as _sfc_main } from './screen.vue_vue_type_script_setup_true_lang-4bd93ad3.js';
import './preload-helper-a4975f27.js';
import './vue.esm-bundler-efce35a9.js';

const messages = {"en":{"layer-reorder.title":"Reorder Layers","layer-reorder.nolayers":"No Layers","layer-reorder.loading":"Loading","layer-reorder.expand":"Expand Sublayers","layer-reorder.expanded":"{name} sublayers expanded","layer-reorder.collapse":"Collapse Sublayers","layer-reorder.collapsed":"{name} sublayers collapsed","layer-reorder.move.up":"Move up","layer-reorder.move.down":"Move down","layer-reorder.layermoved":"{name} moved to index {index}"},"fr":{"layer-reorder.title":"Réorganiser les couches","layer-reorder.nolayers":"Aucune couche","layer-reorder.loading":"Chargement","layer-reorder.expand":"Développer les sous-couches","layer-reorder.expanded":"Sous-couches {name} développées","layer-reorder.collapse":"Réduire les sous-couches","layer-reorder.collapsed":"Sous-couches {name} réduites","layer-reorder.move.up":"Déplacer vers le haut","layer-reorder.move.down":"Déplacer vers le bas","layer-reorder.layermoved":"{name} déplacé vers l'index {index}"}};

class LayerReorderAPI extends FixtureInstance {
  /**
   * Opens or closes the layer reorder fixture panel
   *
   * @param {boolean} [open] force panel open or closed
   * @memberof LayerReorderAPI
   */
  toggleLayerReorder(open) {
    const panel = this.$iApi.panel.get("layer-reorder");
    this.$iApi.panel.toggle(panel, open);
  }
}

class LayerReorderFixture extends LayerReorderAPI {
  added() {
    this.$iApi.panel.register(
      {
        "layer-reorder": {
          screens: {
            "layer-reorder-screen": markRaw(_sfc_main)
          },
          style: {
            width: "350px"
          },
          button: {
            tooltip: "layer-reorder.title",
            // https://fonts.google.com/icons?selected=Material+Icons:low_priority
            icon: '<svg class="flip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z" /></svg>'
          },
          alertName: "layer-reorder.title"
        }
      },
      {
        i18n: { messages }
      }
    );
    this.handlePanelTeleports(["layer-reorder"]);
  }
  removed() {
    if (this.$iApi.fixture.exists("appbar")) {
      const appbarStore = useAppbarStore(this.$vApp.$pinia);
      appbarStore.removeButton("layer-reorder");
    }
    this.$iApi.panel.remove("layer-reorder");
  }
}

export { LayerReorderFixture as default };
