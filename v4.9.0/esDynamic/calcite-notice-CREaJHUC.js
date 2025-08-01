import { cF as p, cG as u, eH as s, cD as t } from "./main-DIdq27YS.js";
import { c as v, d as k } from "./conditionalSlot-D4LZhoz-.js";
import { o as a, a as b } from "./dom-C63VhwMK.js";
import { s as x, a as w, c as C } from "./loadable-GQNtv4z3.js";
import { c as z, a as y, d as E, b as L, s as O, u as B } from "./t9n-EYvFS4s3.js";
import { o as l } from "./openCloseComponent-9TjryvhA.js";
import { g as r } from "./component-CR3VB33V.js";
import { d as N } from "./icon-Bn5GhQSU.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
var c;
(function(o) {
  o.brand = "lightbulb", o.danger = "exclamationMarkTriangle", o.info = "information", o.success = "checkCircle", o.warning = "exclamationMarkTriangle";
})(c || (c = {}));
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
const i = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
}, n = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
}, q = `:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}`, d = /* @__PURE__ */ p(class extends u {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteNoticeBeforeClose = s(this, "calciteNoticeBeforeClose", 6), this.calciteNoticeBeforeOpen = s(this, "calciteNoticeBeforeOpen", 6), this.calciteNoticeClose = s(this, "calciteNoticeClose", 6), this.calciteNoticeOpen = s(this, "calciteNoticeOpen", 6), this.setTransitionEl = (e) => {
      this.transitionEl = e;
    }, this.close = () => {
      this.open = !1;
    }, this.openTransitionProp = "opacity", this.open = !1, this.kind = "brand", this.closable = !1, this.icon = void 0, this.iconFlipRtl = !1, this.scale = "m", this.width = "auto", this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = void 0, this.defaultMessages = void 0;
  }
  openHandler() {
    l(this);
  }
  onMessagesChange() {
  }
  updateRequestedIcon() {
    this.requestedIcon = a(c, this.icon, this.kind);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    v(this), z(this), y(this);
  }
  disconnectedCallback() {
    k(this), E(this), L(this);
  }
  async componentWillLoad() {
    x(this), this.requestedIcon = a(c, this.icon, this.kind), await O(this), this.open && l(this);
  }
  componentDidLoad() {
    w(this);
  }
  render() {
    const { el: e } = this, g = t("button", {
      "aria-label": this.messages.close,
      class: n.close,
      onClick: this.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (f) => this.closeButton = f
    }, t("calcite-icon", { icon: "x", scale: r(this.scale) })), m = b(e, i.actionsEnd);
    return t("div", {
      class: n.container,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl
    }, this.requestedIcon ? t("div", { class: n.icon }, t("calcite-icon", { flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: r(this.scale) })) : null, t("div", { class: n.content }, t("slot", { name: i.title }), t("slot", { name: i.message }), t("slot", { name: i.link })), m ? t("div", { class: n.actionsEnd }, t("slot", { name: i.actionsEnd })) : null, this.closable ? g : null);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await C(this);
    const e = this.el.querySelector("calcite-link");
    if (!(!this.closeButton && !e)) {
      if (e)
        return e.setFocus();
      this.closeButton && this.closeButton.focus();
    }
  }
  onBeforeClose() {
    this.calciteNoticeBeforeClose.emit();
  }
  onBeforeOpen() {
    this.calciteNoticeBeforeOpen.emit();
  }
  onClose() {
    this.calciteNoticeClose.emit();
  }
  onOpen() {
    this.calciteNoticeOpen.emit();
  }
  effectiveLocaleChange() {
    B(this, this.effectiveLocale);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      open: ["openHandler"],
      messageOverrides: ["onMessagesChange"],
      icon: ["updateRequestedIcon"],
      kind: ["updateRequestedIcon"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return q;
  }
}, [1, "calcite-notice", {
  open: [1540],
  kind: [513],
  closable: [516],
  icon: [520],
  iconFlipRtl: [516, "icon-flip-rtl"],
  scale: [513],
  width: [513],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  setFocus: [64]
}, void 0, {
  open: ["openHandler"],
  messageOverrides: ["onMessagesChange"],
  icon: ["updateRequestedIcon"],
  kind: ["updateRequestedIcon"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function h() {
  if (typeof customElements > "u")
    return;
  ["calcite-notice", "calcite-icon"].forEach((e) => {
    switch (e) {
      case "calcite-notice":
        customElements.get(e) || customElements.define(e, d);
        break;
      case "calcite-icon":
        customElements.get(e) || N();
        break;
    }
  });
}
h();
const U = d, $ = h;
export {
  U as CalciteNotice,
  $ as defineCustomElement
};
//# sourceMappingURL=calcite-notice-CREaJHUC.js.map
