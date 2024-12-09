import { c1 as d, kh as l, c2 as p, c3 as u, c4 as g, c7 as h, c5 as v, g1 as f, c6 as m, ci as $, fV as _, ce as A, cf as S, cc as b, ix as w, bY as E } from "./main-DMoCLB29.js";
const C = { en: { "scrollguard.instructions": "Use ctrl + scroll to zoom the map" }, fr: { "scrollguard.instructions": "Utilisez les touches Ctrl et + pour faire un zoom de la carte" } }, x = { class: "sg-label" }, y = /* @__PURE__ */ d({
  __name: "map-scrollguard",
  setup(i) {
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
    const o = (c) => {
      if (!t.value) return;
      const r = n.value.classList;
      c.ctrlKey ? (r.remove("sg-active"), r.add("sg-scrolling")) : (c.stopPropagation(), r.remove("sg-scrolling"), r.add("sg-active"), window.setTimeout(() => r.remove("sg-active"), 2e3));
    };
    return (c, r) => (b(), $("div", {
      class: "sg",
      ref_key: "scrollGuard",
      ref: n
    }, [
      _("p", x, A(S(a)("scrollguard.instructions")), 1)
    ], 512));
  }
}), L = /* @__PURE__ */ w(y, [["__scopeId", "data-v-bf6386a4"]]);
class B extends E {
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
class G extends B {
  added() {
    Object.entries(C).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t)), this._parseConfig(this.config);
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
  G as default
};
//# sourceMappingURL=index-C-8p7gSe.js.map
