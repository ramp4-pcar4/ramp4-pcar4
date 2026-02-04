import { bA as FixtureInstance, iw as useHelpStore, bF as defineComponent, bH as inject, bG as useI18n, bM as resolveComponent, bO as createBlock, bP as withCtx, bT as unref, fO as GlobalEvents, bQ as openBlock, fG as createBaseVNode, he as markRaw, hg as useMapnavStore } from './main-48Jy8Lgr.js';
import { _ as _sfc_main$1 } from './screen.vue_vue_type_script_setup_true_lang-MPhJ0HrC.js';
import './preload-helper-dJJaZANz.js';
import './marked.esm-DcwJ8j7Z.js';

class HelpAPI extends FixtureInstance {
  /**
   * Toggles help panel
   *
   * @param {boolean} [open] force panel open or closed
   * @memberof HelpAPI
   */
  toggleHelp(open) {
    const panel = this.$iApi.panel.get("help");
    this.$iApi.panel.toggle(panel, open);
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
  _parseConfig(helpConfig) {
    const helpStore = useHelpStore(this.$vApp.$pinia);
    helpStore.location = helpConfig?.location ?? "./help/";
    this.handlePanelWidths(["help"]);
    this.handlePanelTeleports(["help"]);
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nav-button",
  setup(__props) {
    const iApi = inject("iApi");
    const { t } = useI18n();
    const onClick = () => iApi.event.emit(GlobalEvents.HELP_TOGGLE);
    return (_ctx, _cache) => {
      const _component_mapnav_button = resolveComponent("mapnav-button");
      return openBlock(), createBlock(_component_mapnav_button, {
        onClickFunction: onClick,
        tooltip: unref(t)("help.title")
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            class: "fill-current w-32 h-20"
          }, [
            createBaseVNode("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            createBaseVNode("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
});

const messages = {"en":{"help.title":"Help","help.search":"Search Help","help.section.expand":"Expand section","help.section.collapse":"Collapse section","help.noResults":"Nothing is found. Please try a different search."},"fr":{"help.title":"Aide","help.search":"Aide à la recherche","help.section.expand":"Développer une section","help.section.collapse":"Réduire une section","help.noResults":"Aucun résultat. Veuillez essayer une autre recherche."}};

class HelpFixture extends HelpAPI {
  added() {
    this.$iApi.component("help-nav-button", _sfc_main);
    this.$iApi.panel.register(
      {
        help: {
          screens: {
            "help-screen": markRaw(_sfc_main$1)
          },
          style: {
            "flex-grow": "1",
            "max-width": "750px"
          },
          alertName: "help.title"
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
      if (this.$iApi.fixture.exists("mapnav")) {
        const mapnavStore = useMapnavStore(this.$vApp.$pinia);
        mapnavStore.removeItem("help");
      }
      const helpStore = useHelpStore(this.$vApp.$pinia);
      helpStore.$reset();
      this.$iApi.panel.remove("help");
    };
  }
}

export { HelpFixture as default };
