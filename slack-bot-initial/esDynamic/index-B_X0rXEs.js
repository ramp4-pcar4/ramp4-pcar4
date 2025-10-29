import { bx as a, h9 as s, ha as i, hb as n } from "./main-3gzXighg.js";
import { _ as o } from "./screen.vue_vue_type_script_setup_true_lang-Cv2eWiTE.js";
const p = { en: { "areas-of-interest.title": "Areas of Interest", "areas-of-interest.select": "Select area of interest" }, fr: { "areas-of-interest.title": "Zones d'intérêt", "areas-of-interest.select": "Sélectionner la zone d'intérêt" } };
class f extends a {
  /**
   * Get the current areas of interest config
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the areas of interest config snippet from the config json
   */
  _parseConfig(e) {
    if (!e)
      return;
    const t = s(this.$vApp.$pinia);
    t.areas = e.areas, this.handlePanelTeleports(["areas-of-interest"]);
  }
}
class g extends f {
  added() {
    this.$iApi.panel.register(
      {
        "areas-of-interest": {
          screens: {
            "areas-of-interest-screen": i(o)
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
        i18n: { messages: p }
      }
    ), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    );
    this.removed = () => {
      e(), this.$iApi.fixture.exists("appbar") && n(this.$vApp.$pinia).removeButton("areas-of-interest"), this.$iApi.panel.remove("areas-of-interest"), s(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  g as default
};
//# sourceMappingURL=index-B_X0rXEs.js.map
