import { cF as c, cG as r, eH as d, cD as e, cH as h } from "./main-BEi6lHs4.js";
import { c as u, u as m, d as p, I as f } from "./interactive--pJFgQAV.js";
import { g, M as v } from "./utils3-CQT-CUN1.js";
const i = {
  container: "container",
  heading: "heading"
}, w = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:nth-child(1 of :not([hidden]))){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}:host([hidden]){display:none}[hidden]{display:none}", a = /* @__PURE__ */ c(class extends r {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteInternalListItemGroupDefaultSlotChange = d(this, "calciteInternalListItemGroupDefaultSlotChange", 6), this.handleDefaultSlotChange = () => {
      this.calciteInternalListItemGroupDefaultSlotChange.emit();
    }, this.disabled = !1, this.filterHidden = !1, this.heading = void 0, this.visualLevel = null;
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    const { el: t } = this;
    this.visualLevel = g(t, !0), u(this);
  }
  componentDidRender() {
    m(this);
  }
  disconnectedCallback() {
    p(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { disabled: t, heading: o, visualLevel: l } = this;
    return e(h, null, e(f, { disabled: t }, e("tr", { class: i.container, style: { "--calcite-list-item-spacing-indent-multiplier": `${l}` } }, e("td", { class: i.heading, colSpan: v }, o)), e("slot", { onSlotchange: this.handleDefaultSlotChange })));
  }
  get el() {
    return this;
  }
  static get style() {
    return w;
  }
}, [1, "calcite-list-item-group", {
  disabled: [516],
  filterHidden: [516, "filter-hidden"],
  heading: [513],
  visualLevel: [32]
}]);
function s() {
  if (typeof customElements > "u")
    return;
  ["calcite-list-item-group"].forEach((t) => {
    switch (t) {
      case "calcite-list-item-group":
        customElements.get(t) || customElements.define(t, a);
        break;
    }
  });
}
s();
const I = a, L = s;
export {
  I as CalciteListItemGroup,
  L as defineCustomElement
};
//# sourceMappingURL=calcite-list-item-group-BCiZOPrf.js.map
