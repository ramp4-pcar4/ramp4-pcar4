import { cF as u, cG as p, cD as m } from "./main-CmejC-so.js";
import { c as g } from "./observers-OveN7-P6.js";
import { c as w, s as v, a as b } from "./loadable-D5MppyB3.js";
const c = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
}, y = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}", f = /* @__PURE__ */ u(class extends p {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.itemMutationObserver = g("mutation", () => this.updateFlowProps()), this.getFlowDirection = (t, e) => {
      const n = t > 1;
      return !(t && e > 1) && !n ? null : e < t ? "retreating" : "advancing";
    }, this.updateFlowProps = () => {
      const { customItemSelectors: t, el: e, items: n } = this, o = Array.from(e.querySelectorAll(`calcite-flow-item${t ? `,${t}` : ""}`)).filter((i) => i.closest("calcite-flow") === e), r = n.length, s = o.length, a = o[s - 1], l = o[s - 2];
      if (s && a && o.forEach((i) => {
        i.showBackButton = i === a && s > 1, i.hidden = i !== a;
      }), l && (l.menuOpen = !1), this.items = o, r !== s) {
        const i = this.getFlowDirection(r, s);
        this.itemCount = s, this.flowDirection = i;
      }
    }, this.customItemSelectors = void 0, this.flowDirection = null, this.itemCount = 0, this.items = [];
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-flow-item`.
   */
  async back() {
    const { items: t } = this, e = t[t.length - 1];
    if (!e)
      return;
    const n = e.beforeBack ? e.beforeBack : () => Promise.resolve();
    try {
      await n.call(e);
    } catch {
      return;
    }
    return e.remove(), e;
  }
  /**
   * Sets focus on the component.
   */
  async setFocus() {
    await w(this);
    const { items: t } = this;
    return t[t.length - 1]?.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.itemMutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.updateFlowProps();
  }
  async componentWillLoad() {
    v(this);
  }
  componentDidLoad() {
    b(this);
  }
  disconnectedCallback() {
    this.itemMutationObserver?.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  async handleItemBackClick(t) {
    if (!t.defaultPrevented)
      return await this.back(), this.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { flowDirection: t } = this, e = {
      [c.frame]: !0,
      [c.frameAdvancing]: t === "advancing",
      [c.frameRetreating]: t === "retreating"
    };
    return m("div", { class: e }, m("slot", null));
  }
  get el() {
    return this;
  }
  static get style() {
    return y;
  }
}, [1, "calcite-flow", {
  customItemSelectors: [1, "custom-item-selectors"],
  flowDirection: [32],
  itemCount: [32],
  items: [32],
  back: [64],
  setFocus: [64]
}, [[0, "calciteFlowItemBack", "handleItemBackClick"]]]);
function d() {
  if (typeof customElements > "u")
    return;
  ["calcite-flow"].forEach((t) => {
    switch (t) {
      case "calcite-flow":
        customElements.get(t) || customElements.define(t, f);
        break;
    }
  });
}
d();
const F = f, I = d;
export {
  F as CalciteFlow,
  I as defineCustomElement
};
//# sourceMappingURL=calcite-flow-CSA4-J4W.js.map
