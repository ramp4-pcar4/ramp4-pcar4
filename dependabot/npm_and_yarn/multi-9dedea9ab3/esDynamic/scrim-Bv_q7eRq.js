import { c$ as o, d0 as r, cX as t } from "./main-DMoCLB29.js";
import { c as l, d } from "./locale-DoJiEr9A.js";
import { u as h, c as m, s as f, d as g } from "./t9n-CT5lrU7g.js";
import { c as u } from "./observers-Dk-NQcVU.js";
import { s as p } from "./dom-BHTTQ4_z.js";
import { d as v } from "./loader-Us479FYz.js";
const i = {
  scrim: "scrim",
  content: "content"
}, a = {
  s: 72,
  // Less than 72px.
  // medium is assumed default.
  l: 480
  // Greater than or equal to 480px.
}, b = ":host{--calcite-scrim-background:var(--calcite-color-transparent-scrim);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity:0}100%{--tw-text-opacity:1}}.scrim{position:absolute;inset:0px;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}", C = b, y = /* @__PURE__ */ o(class extends r {
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
    h(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    l(this), m(this), this.resizeObserver?.observe(this.el);
  }
  async componentWillLoad() {
    await f(this);
  }
  disconnectedCallback() {
    d(this), g(this), this.resizeObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Method
  //
  // --------------------------------------------------------------------------
  render() {
    const { hasContent: e, loading: s, messages: c } = this;
    return t("div", { key: "286b03bb4a18b45f1b6914684a5178e952a44127", class: i.scrim }, s ? t("calcite-loader", { label: c.loading, ref: this.storeLoaderEl, scale: this.loaderScale }) : null, t("div", { key: "0f8cd111720239b204d0d201610c4145d5616753", class: i.content, hidden: !e }, t("slot", { key: "fe7bbced9871c9179971da0ef7ca07ea1c9ac33e", onSlotchange: this.handleDefaultSlotChange })));
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
        customElements.get(e) || customElements.define(e, y);
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
//# sourceMappingURL=scrim-Bv_q7eRq.js.map
