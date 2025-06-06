import { cF as o, cG as r, cD as t } from "./main-BEi6lHs4.js";
import { u as l, c as d, a as h, s as m, d as f, b as g } from "./t9n-wk_2R-n-.js";
import { c as u } from "./observers-BPw2GLxd.js";
import { n as p } from "./dom-DkH2gtZS.js";
import { d as v } from "./loader-BEWHquV9.js";
const i = {
  scrim: "scrim",
  content: "content"
}, a = {
  s: 72,
  // medium is assumed default.
  l: 480
  // Greater than or equal to 480px.
}, C = ":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}", b = /* @__PURE__ */ o(class extends r {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.resizeObserver = u("resize", () => this.handleResize()), this.handleDefaultSlotChange = (e) => {
      this.hasContent = p(e);
    }, this.storeLoaderEl = (e) => {
      this.loaderEl = e, this.handleResize();
    }, this.loading = !1, this.messages = void 0, this.messageOverrides = void 0, this.loaderScale = void 0, this.defaultMessages = void 0, this.effectiveLocale = "", this.hasContent = !1;
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    l(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    d(this), h(this), this.resizeObserver?.observe(this.el);
  }
  async componentWillLoad() {
    await m(this);
  }
  disconnectedCallback() {
    f(this), g(this), this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { hasContent: e, loading: s, messages: c } = this;
    return t("div", { class: i.scrim }, s ? t("calcite-loader", {
      label: c.loading,
      scale: this.loaderScale,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.storeLoaderEl
    }) : null, t("div", { class: i.content, hidden: !e }, t("slot", { onSlotchange: this.handleDefaultSlotChange })));
  }
  getScale(e) {
    return e < a.s ? "s" : e >= a.l ? "l" : "m";
  }
  handleResize() {
    const { loaderEl: e, el: s } = this;
    e && (this.loaderScale = this.getScale(Math.min(s.clientHeight, s.clientWidth) ?? 0));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return C;
  }
}, [1, "calcite-scrim", {
  loading: [516],
  messages: [1040],
  messageOverrides: [1040],
  loaderScale: [32],
  defaultMessages: [32],
  effectiveLocale: [32],
  hasContent: [32]
}, void 0, {
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function S() {
  if (typeof customElements > "u")
    return;
  ["calcite-scrim", "calcite-loader"].forEach((e) => {
    switch (e) {
      case "calcite-scrim":
        customElements.get(e) || customElements.define(e, b);
        break;
      case "calcite-loader":
        customElements.get(e) || v();
        break;
    }
  });
}
S();
export {
  S as d
};
//# sourceMappingURL=scrim-BnH1DNqs.js.map
