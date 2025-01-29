import { cF as d, cG as m, cD as t } from "./main-3gzXighg.js";
import { c as p, d as h } from "./conditionalSlot-CJ4XoAWj.js";
import { c as g, s as f, a as b } from "./loadable-72a05l4A.js";
import { u as x, c as v, a as C, d as y, b as M, s as E } from "./t9n-Bmc-S3O4.js";
import { d as L, a as O, S as s } from "./action-menu-CNKmziAm.js";
import { s as S } from "./dom-DkH2gtZS.js";
import { d as A } from "./action-DyurvyKq.js";
import { d as k } from "./icon-BG2DgcVx.js";
import { d as z } from "./loader-D7hBe6l4.js";
const a = {
  menuActions: "menu-actions",
  menuTooltip: "menu-tooltip"
}, w = {
  menu: "ellipsis"
}, H = {
  container: "container"
}, $ = ':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-color-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}', F = /* @__PURE__ */ d(class extends m {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.setMenuOpen = (e) => {
      this.menuOpen = !!e.target.open;
    }, this.handleMenuActionsSlotChange = (e) => {
      this.hasMenuActions = S(e);
    }, this.expanded = !1, this.label = void 0, this.layout = "vertical", this.columns = void 0, this.menuOpen = !1, this.overlayPositioning = "absolute", this.scale = void 0, this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = "", this.defaultMessages = void 0, this.hasMenuActions = !1;
  }
  expandedHandler() {
    this.menuOpen = !1;
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    x(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await g(this), this.el.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    v(this), C(this), p(this);
  }
  disconnectedCallback() {
    y(this), M(this), h(this);
  }
  async componentWillLoad() {
    f(this), await E(this);
  }
  componentDidLoad() {
    b(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  renderMenu() {
    const { expanded: e, menuOpen: c, scale: o, layout: l, messages: n, overlayPositioning: r, hasMenuActions: u } = this;
    return t("calcite-action-menu", { expanded: e, flipPlacements: ["left", "right"], hidden: !u, label: n.more, onCalciteActionMenuOpen: this.setMenuOpen, open: c, overlayPositioning: r, placement: l === "horizontal" ? "bottom-start" : "leading-start", scale: o }, t("calcite-action", { icon: w.menu, scale: o, slot: s.trigger, text: n.more, textEnabled: e }), t("slot", { name: a.menuActions, onSlotchange: this.handleMenuActionsSlotChange }), t("slot", { name: a.menuTooltip, slot: s.tooltip }));
  }
  render() {
    return t("div", { "aria-label": this.label, class: H.container, role: "group" }, t("slot", null), this.renderMenu());
  }
  static get delegatesFocus() {
    return !0;
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      expanded: ["expandedHandler"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return $;
  }
}, [17, "calcite-action-group", {
  expanded: [516],
  label: [1],
  layout: [513],
  columns: [514],
  menuOpen: [1540, "menu-open"],
  overlayPositioning: [513, "overlay-positioning"],
  scale: [513],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  hasMenuActions: [32],
  setFocus: [64]
}, void 0, {
  expanded: ["expandedHandler"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function P() {
  if (typeof customElements > "u")
    return;
  ["calcite-action-group", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"].forEach((e) => {
    switch (e) {
      case "calcite-action-group":
        customElements.get(e) || customElements.define(e, F);
        break;
      case "calcite-action":
        customElements.get(e) || A();
        break;
      case "calcite-action-menu":
        customElements.get(e) || O();
        break;
      case "calcite-icon":
        customElements.get(e) || k();
        break;
      case "calcite-loader":
        customElements.get(e) || z();
        break;
      case "calcite-popover":
        customElements.get(e) || L();
        break;
    }
  });
}
P();
export {
  F as A,
  a as S,
  P as d
};
//# sourceMappingURL=action-group-BmHPPAbM.js.map
