import { cF as x, cG as y, cE as C, cD as o, cH as k } from "./main-BpIyUAdL.js";
import { t as p } from "./dom-DkH2gtZS.js";
import { g as z } from "./guid-Dls486Er.js";
import { c as w, d as I, u as E, I as L } from "./interactive-DvjzvdHh.js";
import { s as T, a as S, c as M } from "./loadable-mV3e0zNp.js";
import { u as O, c as $, a as F, s as H, d as D, b as R } from "./t9n-DZy8an7K.js";
import { c as W } from "./observers-BKbzQbLw.js";
import { g as j } from "./component-CWGf1hug.js";
import { d as A } from "./icon-vgnKLT3A.js";
import { d as V } from "./loader-D5UFN86B.js";
const n = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  indicatorText: "indicator-text",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible",
  indicatorWithIcon: "indicator-with-icon",
  indicatorWithoutIcon: "indicator-without-icon"
}, _ = {
  tooltip: "tooltip"
}, U = `:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-color-brand);--calcite-action-color-transparent-hover:var(--calcite-color-transparent-hover);--calcite-action-color-transparent-press:var(--calcite-color-transparent-press)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-color-foreground-1);fill:var(--calcite-color-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.button:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.button:active{background-color:var(--calcite-color-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-color-foreground-3);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}:host([active]) .button:active{background-color:var(--calcite-color-foreground-1)}:host([appearance=transparent]) .button{background-color:transparent}:host([appearance=transparent][active]) .button,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-action-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-action-color-transparent-press)}:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading][appearance=solid]) .button,:host([loading][appearance=solid]) .button:hover,:host([loading][appearance=solid]) .button:focus{background-color:var(--calcite-color-foreground-1)}:host([loading][appearance=solid]) .button .text-container,:host([loading][appearance=solid]) .button:hover .text-container,:host([loading][appearance=solid]) .button:focus .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-color-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`, B = /* @__PURE__ */ x(class extends y {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.mutationObserver = W("mutation", () => C(this)), this.guid = `calcite-action-${z()}`, this.indicatorId = `${this.guid}-indicator`, this.buttonId = `${this.guid}-button`, this.handleTooltipSlotChange = (t) => {
      const e = t.target.assignedElements({
        flatten: !0
      }).filter((a) => a?.matches("calcite-tooltip"))[0];
      e && (e.referenceElement = this.buttonEl);
    }, this.active = !1, this.alignment = void 0, this.appearance = "solid", this.compact = !1, this.disabled = !1, this.icon = void 0, this.iconFlipRtl = !1, this.indicator = !1, this.label = void 0, this.loading = !1, this.scale = "m", this.text = void 0, this.textEnabled = !1, this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = "", this.defaultMessages = void 0;
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    O(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    w(this), $(this), F(this), this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 });
  }
  async componentWillLoad() {
    T(this), await H(this);
  }
  componentDidLoad() {
    S(this);
  }
  disconnectedCallback() {
    I(this), D(this), R(this), this.mutationObserver?.disconnect();
  }
  componentDidRender() {
    E(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await M(this), this.buttonEl?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTextContainer() {
    const { text: t, textEnabled: i } = this, e = {
      [n.textContainer]: !0,
      [n.textContainerVisible]: i
    };
    return t ? o("div", { class: e, key: "text-container" }, t) : null;
  }
  renderIndicatorText() {
    const { indicator: t, messages: i, indicatorId: e, buttonId: a } = this;
    return o("div", { "aria-labelledby": a, "aria-live": "polite", class: n.indicatorText, id: e, role: "region" }, t ? i.indicator : null);
  }
  renderIconContainer() {
    const { loading: t, icon: i, scale: e, el: a, iconFlipRtl: s, indicator: l } = this, d = e === "l" ? "l" : "m", u = t ? o("calcite-loader", { inline: !0, label: this.messages.loading, scale: d }) : null, c = i ? o("calcite-icon", { class: { [n.indicatorWithIcon]: l }, flipRtl: s, icon: i, scale: j(this.scale) }) : null, r = u || c, h = r || a.children?.length, b = o("div", { class: {
      [n.slotContainer]: !0,
      [n.slotContainerHidden]: t
    } }, o("slot", null));
    return h ? o("div", { "aria-hidden": "true", class: n.iconContainer, key: "icon-container" }, r, b) : null;
  }
  render() {
    const { active: t, compact: i, disabled: e, icon: a, loading: s, textEnabled: l, label: d, text: u, indicator: c, indicatorId: r, buttonId: h, messages: b } = this, m = `${d || u}${c ? ` (${b.indicator})` : ""}`, g = {
      [n.button]: !0,
      [n.buttonTextVisible]: l,
      [n.buttonCompact]: i
    };
    return o(k, null, o(L, { disabled: e }, o("button", {
      "aria-busy": p(s),
      "aria-controls": c ? r : null,
      "aria-disabled": p(e),
      "aria-label": m,
      "aria-pressed": p(t),
      class: g,
      disabled: e,
      id: h,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (v) => this.buttonEl = v
    }, this.renderIconContainer(), this.renderTextContainer(), !a && c && o("div", { class: n.indicatorWithoutIcon, key: "indicator-no-icon" })), o("slot", { name: _.tooltip, onSlotchange: this.handleTooltipSlotChange }), this.renderIndicatorText()));
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
    return U;
  }
}, [1, "calcite-action", {
  active: [516],
  alignment: [513],
  appearance: [513],
  compact: [516],
  disabled: [516],
  icon: [1],
  iconFlipRtl: [516, "icon-flip-rtl"],
  indicator: [516],
  label: [1],
  loading: [516],
  scale: [513],
  text: [1],
  textEnabled: [516, "text-enabled"],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  setFocus: [64]
}, void 0, {
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function G() {
  if (typeof customElements > "u")
    return;
  ["calcite-action", "calcite-icon", "calcite-loader"].forEach((t) => {
    switch (t) {
      case "calcite-action":
        customElements.get(t) || customElements.define(t, B);
        break;
      case "calcite-icon":
        customElements.get(t) || A();
        break;
      case "calcite-loader":
        customElements.get(t) || V();
        break;
    }
  });
}
G();
export {
  B as A,
  G as d
};
//# sourceMappingURL=action-CjDCgE6r.js.map
