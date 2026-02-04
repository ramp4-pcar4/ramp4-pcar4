import { bF as defineComponent, k0 as useScrollguardStore, bG as useI18n, bH as inject, bI as ref, bL as computed, bJ as onMounted, fO as GlobalEvents, bK as onBeforeUnmount, bW as createElementBlock, fG as createBaseVNode, bS as toDisplayString, bT as unref, bQ as openBlock, i8 as _export_sfc, bA as FixtureInstance } from './main-CjrSZKDN.js';
import './preload-helper-dJJaZANz.js';

const messages = {"en":{"scrollguard.instructions":"Use ctrl + scroll to zoom the map"},"fr":{"scrollguard.instructions":"Utilisez les touches Ctrl et + pour faire un zoom de la carte"}};

const _hoisted_1 = { class: "sg-label" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "map-scrollguard",
  setup(__props) {
    const scrollguardStore = useScrollguardStore();
    const { t } = useI18n();
    const iApi = inject("iApi");
    const scrollGuard = ref();
    const enabled = computed(() => scrollguardStore.enabled);
    onMounted(() => {
      iApi.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
        "wheel",
        wheelHandler,
        {
          capture: true
        }
      );
      iApi.event.on(GlobalEvents.MAP_CREATED, () => {
        iApi.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
          "wheel",
          wheelHandler,
          {
            capture: true
          }
        );
      });
    });
    onBeforeUnmount(() => {
      iApi.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener(
        "wheel",
        wheelHandler,
        {
          capture: true
        }
      );
    });
    const wheelHandler = (event) => {
      if (!enabled.value) return;
      const scrollGuardClassList = scrollGuard.value.classList;
      if (!event.ctrlKey) {
        event.stopPropagation();
        scrollGuardClassList.remove("sg-scrolling");
        scrollGuardClassList.add("sg-active");
        window.setTimeout(() => scrollGuardClassList.remove("sg-active"), 2e3);
      } else {
        scrollGuardClassList.remove("sg-active");
        scrollGuardClassList.add("sg-scrolling");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "sg",
        ref_key: "scrollGuard",
        ref: scrollGuard
      }, [
        createBaseVNode("p", _hoisted_1, toDisplayString(unref(t)("scrollguard.instructions")), 1)
      ], 512);
    };
  }
});

const ScrollguardV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cd7bd252"]]);

class ScrollguardAPI extends FixtureInstance {
  /**
   * Enables the scrollguard on the map if set to true.
   *
   * @param {boolean} value
   * @memberof ScrollguardAPI
   */
  setEnabled(value) {
    useScrollguardStore(this.$vApp.$pinia).enabled = value;
  }
  /**
   * Parses the scrollguard config JSON snippet from the config file and save to the fixture store.
   *
   * @param {ScrollguardConfig} [ScrollguardConfig]
   * @memberof ScrollguardAPI
   */
  _parseConfig(scrollguardConfig) {
    useScrollguardStore(this.$vApp.$pinia).enabled = scrollguardConfig?.enabled || false;
  }
  get config() {
    return super.config;
  }
}

class ScrollguardFixture extends ScrollguardAPI {
  added() {
    Object.entries(messages).forEach((value) => this.$iApi.$i18n.mergeLocaleMessage(...value));
    this._parseConfig(this.config);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value)
    );
    const { destroy, el } = this.mount(ScrollguardV, {
      app: this.$element
    });
    const innerShell = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    innerShell.appendChild(el.childNodes[0]);
    this.removed = () => {
      unwatch();
      destroy();
      const scrollguardStore = useScrollguardStore(this.$vApp.$pinia);
      scrollguardStore.$reset();
    };
  }
}

export { ScrollguardFixture as default };
