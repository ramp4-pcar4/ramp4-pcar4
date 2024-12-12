import { bC as d, jY as l, bD as p, bE as u, bF as g, bI as h, bG as v, fK as f, bH as m, bT as b, fC as $, bP as _, bQ as A, bN as S, i4 as w, bx as C } from "./main-DIdq27YS.js";
const E = { en: { "scrollguard.instructions": "Use ctrl + scroll to zoom the map" }, fr: { "scrollguard.instructions": "Utilisez les touches Ctrl et + pour faire un zoom de la carte" } }, x = { class: "sg-label" }, y = /* @__PURE__ */ d({
  __name: "map-scrollguard",
  setup(c) {
    const e = l(), { t: a } = p(), s = u("iApi"), n = g(), t = h(() => e.enabled);
    v(() => {
      s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
        "wheel",
        o,
        {
          capture: !0
        }
      ), s.event.on(f.MAP_CREATED, () => {
        s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.addEventListener(
          "wheel",
          o,
          {
            capture: !0
          }
        );
      });
    }), m(() => {
      s.$vApp.$el.querySelector(".inner-shell + .esri-view")?.removeEventListener(
        "wheel",
        o,
        {
          capture: !0
        }
      );
    });
    const o = (i) => {
      if (!t.value) return;
      const r = n.value.classList;
      i.ctrlKey ? (r.remove("sg-active"), r.add("sg-scrolling")) : (i.stopPropagation(), r.remove("sg-scrolling"), r.add("sg-active"), window.setTimeout(() => r.remove("sg-active"), 2e3));
    };
    return (i, r) => (S(), b("div", {
      class: "sg",
      ref_key: "scrollGuard",
      ref: n
    }, [
      $("p", x, _(A(a)("scrollguard.instructions")), 1)
    ], 512));
  }
}), L = /* @__PURE__ */ w(y, [["__scopeId", "data-v-bf6386a4"]]);
class B extends C {
  /**
   * Enables the scrollguard on the map if set to true.
   *
   * @param {boolean} value
   * @memberof ScrollguardAPI
   */
  setEnabled(e) {
    l(this.$vApp.$pinia).enabled = e;
  }
  /**
   * Parses the scrollguard config JSON snippet from the config file and save to the fixture store.
   *
   * @param {ScrollguardConfig} [ScrollguardConfig]
   * @memberof ScrollguardAPI
   */
  _parseConfig(e) {
    l(this.$vApp.$pinia).enabled = e?.enabled || !1;
  }
  get config() {
    return super.config;
  }
}
class I extends B {
  added() {
    Object.entries(E).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t)), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    ), { destroy: a, el: s } = this.mount(L, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(s.childNodes[0]), this.removed = () => {
      e(), a(), l(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  I as default
};
//# sourceMappingURL=index-Bm5Lk-Vv.js.map
