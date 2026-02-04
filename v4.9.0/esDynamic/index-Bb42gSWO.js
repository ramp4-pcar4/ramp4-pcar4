import { bx as o, is as a, bC as h, bE as c, bD as r, bJ as u, bL as m, bM as f, bQ as v, fK as d, bN as g, fC as s, ha as x, hc as _ } from "./main-DIdq27YS.js";
import { _ as A } from "./screen.vue_vue_type_script_setup_true_lang-B6dmVZbj.js";
class $ extends o {
  /**
   * Toggles help panel
   *
   * @param {boolean} [open] force panel open or closed
   * @memberof HelpAPI
   */
  toggleHelp(t) {
    const e = this.$iApi.panel.get("help");
    this.$iApi.panel.toggle(e, t);
  }
  /**
   * Returns `HelpConfig` section of the global config file.
   *
   * @readonly
   * @type {HelpConfig}
   * @memberof HelpAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the help config JSON snippet from the config file and save to the fixture store.
   *
   * @param {HelpConfig} [helpConfig]
   * @memberof HelpAPI
   */
  _parseConfig(t) {
    const e = a(this.$vApp.$pinia);
    e.location = t?.location ?? "./help/", this.handlePanelWidths(["help"]), this.handlePanelTeleports(["help"]);
  }
}
const b = /* @__PURE__ */ h({
  __name: "nav-button",
  setup(n) {
    const t = c("iApi"), { t: e } = r(), i = () => t.event.emit(d.HELP_TOGGLE);
    return (w, p) => {
      const l = u("mapnav-button");
      return g(), m(l, {
        onClickFunction: i,
        tooltip: v(e)("help.title")
      }, {
        default: f(() => p[0] || (p[0] = [
          s("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "fill-current w-32 h-20"
          }, [
            s("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            s("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), C = { en: { "help.title": "Help", "help.search": "Search Help", "help.section.expand": "Expand section", "help.section.collapse": "Collapse section", "help.noResults": "Nothing is found. Please try a different search." }, fr: { "help.title": "Aide", "help.search": "Aide à la recherche", "help.section.expand": "Développer une section", "help.section.collapse": "Réduire une section", "help.noResults": "Aucun résultat. Veuillez essayer une autre recherche." } };
class k extends $ {
  added() {
    this.$iApi.component("help-nav-button", b), this.$iApi.panel.register(
      {
        help: {
          screens: {
            "help-screen": x(A)
          },
          style: {
            "flex-grow": "1",
            "max-width": "750px"
          },
          alertName: "help.title"
        }
      },
      {
        i18n: { messages: C }
      }
    ), this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    );
    this.removed = () => {
      t(), this.$iApi.fixture.exists("mapnav") && _(this.$vApp.$pinia).removeItem("help"), a(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("help");
    };
  }
}
export {
  k as default
};
//# sourceMappingURL=index-Bb42gSWO.js.map
