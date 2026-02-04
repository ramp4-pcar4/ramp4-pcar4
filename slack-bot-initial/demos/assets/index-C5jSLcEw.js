import { bA as FixtureInstance, hd as useAreasOfInterestStore, he as markRaw, hf as useAppbarStore } from './main-h0RsJOaN.js';
import { _ as _sfc_main } from './screen.vue_vue_type_script_setup_true_lang-DCQD0-b-.js';
import './preload-helper-dJJaZANz.js';

const messages = {"en":{"areas-of-interest.title":"Areas of Interest","areas-of-interest.select":"Select area of interest"},"fr":{"areas-of-interest.title":"Zones d'intérêt","areas-of-interest.select":"Sélectionner la zone d'intérêt"}};

class AreasOfInterestAPI extends FixtureInstance {
  /**
   * Get the current areas of interest config
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the areas of interest config snippet from the config json
   */
  _parseConfig(areasOfInterest) {
    if (!areasOfInterest) {
      return;
    }
    const areasOfInterestStore = useAreasOfInterestStore(this.$vApp.$pinia);
    areasOfInterestStore.areas = areasOfInterest.areas;
    this.handlePanelTeleports(["areas-of-interest"]);
  }
}

class AreasOfInterestFixture extends AreasOfInterestAPI {
  added() {
    this.$iApi.panel.register(
      {
        "areas-of-interest": {
          screens: {
            "areas-of-interest-screen": markRaw(_sfc_main)
          },
          style: {
            width: "350px"
          },
          button: {
            tooltip: "areas-of-interest.title",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>'
          },
          alertName: "areas-of-interest.title"
        }
      },
      {
        i18n: { messages }
      }
    );
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    this.removed = () => {
      unwatch();
      if (this.$iApi.fixture.exists("appbar")) {
        const appbarStore = useAppbarStore(this.$vApp.$pinia);
        appbarStore.removeButton("areas-of-interest");
      }
      this.$iApi.panel.remove("areas-of-interest");
      const areasOfInterestStore = useAreasOfInterestStore(this.$vApp.$pinia);
      areasOfInterestStore.$reset();
    };
  }
}

export { AreasOfInterestFixture as default };
