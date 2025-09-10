import { cD as h, cE as L, cF as T, cG as D, eH as O, cH as B } from "./main-DhLeoxL5.js";
import { c as G, d as M } from "./conditionalSlot-B2BTmOLn.js";
import { g as k, p as A, s as E, f as P } from "./dom-DkH2gtZS.js";
import { a as $, s as q, c as R } from "./loadable-Bai05tuj.js";
import { u as W, c as F, a as I, s as _, d as U, b as j } from "./t9n-C_Rgwg9e.js";
import { c as y } from "./observers-Cg_752lJ.js";
import { S as m, d as J } from "./action-group-DBwBnx6_.js";
import { S as K, d as Q, a as V } from "./action-menu-BxzjzR-y.js";
import { d as X } from "./action-huQT49AY.js";
import { d as Y } from "./icon-C0Vd5HHY.js";
import { d as Z } from "./loader-fsl6a7Pq.js";
import { d as N } from "./debounce-DSwYeavs.js";
const ee = 150, te = 2, C = (s) => s.reduce((e, t) => e + t, 0) / s.length, oe = (s) => {
  const e = s.filter((o) => o.slot !== m.menuActions), t = e?.length;
  return {
    actionWidth: t ? C(e.map((o) => o.clientWidth || 0)) : 0,
    actionHeight: t ? C(e.map((o) => o.clientHeight || 0)) : 0
  };
}, se = ({ width: s, actionWidth: e, layout: t, height: o, actionHeight: a, groupCount: c }) => {
  const n = t === "horizontal" ? s : o, i = t === "horizontal" ? e : a;
  return Math.floor((n - c * te) / i);
}, ne = ({ layout: s, actionCount: e, actionWidth: t, width: o, actionHeight: a, height: c, groupCount: n }) => Math.max(e - se({ width: o, actionWidth: t, layout: s, height: c, actionHeight: a, groupCount: n }), 0), x = (s) => Array.from(s.querySelectorAll("calcite-action")).filter((e) => e.closest("calcite-action-menu") ? e.slot === K.trigger : !0), ie = ({ actionGroups: s, expanded: e, overflowCount: t }) => {
  let o = t;
  s.reverse().forEach((a) => {
    let c = 0;
    const n = x(a).reverse();
    n.forEach((i) => {
      i.slot === m.menuActions && (i.removeAttribute("slot"), i.textEnabled = e);
    }), o > 0 && n.some((i) => (n.filter((u) => !u.slot).length > 1 && n.length > 2 && !i.closest("calcite-action-menu") && (i.textEnabled = !0, i.setAttribute("slot", m.menuActions), c++, c > 1 && o--), o < 1)), L(a);
  });
}, w = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};
function ae(s, e) {
  return s || e.closest("calcite-shell-panel")?.position || "start";
}
function f({ el: s, expanded: e }) {
  x(s).filter((t) => t.slot !== m.menuActions).forEach((t) => t.textEnabled = e), s.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t) => t.expanded = e);
}
const ce = ({ tooltip: s, referenceElement: e, expanded: t, ref: o }) => (s && (s.referenceElement = !t && e ? e : null), o && o(e), e), le = ({ expanded: s, expandText: e, collapseText: t, toggle: o, el: a, position: c, tooltip: n, ref: i, scale: l }) => {
  const u = k(a) === "rtl", r = s ? t : e, d = [w.chevronsLeft, w.chevronsRight];
  u && d.reverse();
  const p = ae(c, a) === "end", g = p ? d[1] : d[0], b = p ? d[0] : d[1];
  return h("calcite-action", {
    icon: s ? g : b,
    onClick: o,
    scale: l,
    text: r,
    textEnabled: s,
    title: !s && !n ? r : null,
    // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
    ref: (H) => ce({ tooltip: n, referenceElement: H, expanded: s, ref: i })
  });
};
const re = {
  actionGroupEnd: "action-group--end"
}, v = {
  actionsEnd: "actions-end",
  bottomActions: "bottom-actions",
  expandTooltip: "expand-tooltip"
}, de = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}", S = /* @__PURE__ */ T(class extends D {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteActionBarToggle = O(this, "calciteActionBarToggle", 6), this.mutationObserver = y("mutation", () => {
      const { el: e, expanded: t } = this;
      f({ el: e, expanded: t }), this.overflowActions();
    }), this.resizeObserver = y("resize", (e) => this.resizeHandlerEntries(e)), this.actionMenuOpenHandler = (e) => {
      if (e.target.menuOpen) {
        const t = e.composedPath();
        Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((o) => {
          t.includes(o) || (o.menuOpen = !1);
        });
      }
    }, this.resizeHandlerEntries = (e) => {
      e.forEach(this.resizeHandler);
    }, this.resizeHandler = (e) => {
      const { width: t, height: o } = e.contentRect;
      this.resize({ width: t, height: o });
    }, this.resize = N(({ width: e, height: t }) => {
      const { el: o, expanded: a, expandDisabled: c, layout: n, overflowActionsDisabled: i } = this;
      if (i || n === "vertical" && !t || n === "horizontal" && !e)
        return;
      const l = x(o), u = c ? l.length : l.length + 1, r = Array.from(o.querySelectorAll("calcite-action-group"));
      this.setGroupLayout(r);
      const d = this.hasActionsEnd || this.hasBottomActions || !c ? r.length + 1 : r.length, { actionHeight: p, actionWidth: g } = oe(l), b = ne({
        layout: n,
        actionCount: u,
        actionHeight: p,
        actionWidth: g,
        height: t,
        width: e,
        groupCount: d
      });
      ie({
        actionGroups: r,
        expanded: a,
        overflowCount: b
      });
    }, ee), this.toggleExpand = () => {
      this.expanded = !this.expanded, this.calciteActionBarToggle.emit();
    }, this.setExpandToggleRef = (e) => {
      this.expandToggleEl = e;
    }, this.handleDefaultSlotChange = (e) => {
      const t = A(e).filter((o) => o.matches("calcite-action-group"));
      this.setGroupLayout(t);
    }, this.handleActionsEndSlotChange = (e) => {
      this.hasActionsEnd = E(e);
    }, this.handleBottomActionsSlotChange = (e) => {
      this.hasBottomActions = E(e);
    }, this.handleTooltipSlotChange = (e) => {
      const t = A(e).filter((o) => o?.matches("calcite-tooltip"));
      this.expandTooltip = t[0];
    }, this.actionsEndGroupLabel = void 0, this.expandDisabled = !1, this.expanded = !1, this.layout = "vertical", this.overflowActionsDisabled = !1, this.overlayPositioning = "absolute", this.position = void 0, this.scale = void 0, this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = void 0, this.hasActionsEnd = !1, this.hasBottomActions = !1, this.expandTooltip = void 0, this.defaultMessages = void 0;
  }
  expandHandler() {
    this.overflowActions();
  }
  expandedHandler() {
    const { el: e, expanded: t } = this;
    f({ el: e, expanded: t }), this.overflowActions();
  }
  layoutHandler() {
    this.updateGroups();
  }
  overflowDisabledHandler(e) {
    if (e) {
      this.resizeObserver?.disconnect();
      return;
    }
    this.resizeObserver?.observe(this.el), this.overflowActions();
  }
  onMessagesChange() {
  }
  effectiveLocaleChange() {
    W(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentDidLoad() {
    const { el: e, expanded: t } = this;
    $(this), f({ el: e, expanded: t }), this.overflowActions();
  }
  connectedCallback() {
    const { el: e, expanded: t } = this;
    F(this), I(this), f({ el: e, expanded: t }), this.mutationObserver?.observe(e, { childList: !0, subtree: !0 }), this.overflowActionsDisabled || this.resizeObserver?.observe(e), this.overflowActions(), G(this);
  }
  async componentWillLoad() {
    q(this), await _(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect(), this.resizeObserver?.disconnect(), M(this), U(this), j(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Overflows actions that won't fit into menus.
   *
   * @internal
   */
  async overflowActions() {
    this.resize({ width: this.el.clientWidth, height: this.el.clientHeight });
  }
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await R(this), P(this.el);
  }
  updateGroups() {
    this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")));
  }
  setGroupLayout(e) {
    e.forEach((t) => t.layout = this.layout);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBottomActionGroup() {
    const { expanded: e, expandDisabled: t, el: o, position: a, toggleExpand: c, scale: n, layout: i, messages: l, actionsEndGroupLabel: u, overlayPositioning: r } = this, d = t ? null : h(le, {
      collapseText: l.collapse,
      el: o,
      expandText: l.expand,
      expanded: e,
      position: a,
      scale: n,
      toggle: c,
      tooltip: this.expandTooltip,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setExpandToggleRef
    });
    return h("calcite-action-group", { class: re.actionGroupEnd, hidden: this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions), label: u, layout: i, overlayPositioning: r, scale: n }, h("slot", { name: v.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), h("slot", { name: v.bottomActions, onSlotchange: this.handleBottomActionsSlotChange }), h("slot", { name: v.expandTooltip, onSlotchange: this.handleTooltipSlotChange }), d);
  }
  render() {
    return h(B, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, h("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup());
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      expandDisabled: ["expandHandler"],
      expanded: ["expandedHandler"],
      layout: ["layoutHandler"],
      overflowActionsDisabled: ["overflowDisabledHandler"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return de;
  }
}, [1, "calcite-action-bar", {
  actionsEndGroupLabel: [1, "actions-end-group-label"],
  expandDisabled: [516, "expand-disabled"],
  expanded: [1540],
  layout: [513],
  overflowActionsDisabled: [516, "overflow-actions-disabled"],
  overlayPositioning: [513, "overlay-positioning"],
  position: [513],
  scale: [513],
  messages: [1040],
  messageOverrides: [1040],
  effectiveLocale: [32],
  hasActionsEnd: [32],
  hasBottomActions: [32],
  expandTooltip: [32],
  defaultMessages: [32],
  overflowActions: [64],
  setFocus: [64]
}, void 0, {
  expandDisabled: ["expandHandler"],
  expanded: ["expandedHandler"],
  layout: ["layoutHandler"],
  overflowActionsDisabled: ["overflowDisabledHandler"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function z() {
  if (typeof customElements > "u")
    return;
  ["calcite-action-bar", "calcite-action", "calcite-action-group", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"].forEach((e) => {
    switch (e) {
      case "calcite-action-bar":
        customElements.get(e) || customElements.define(e, S);
        break;
      case "calcite-action":
        customElements.get(e) || X();
        break;
      case "calcite-action-group":
        customElements.get(e) || J();
        break;
      case "calcite-action-menu":
        customElements.get(e) || V();
        break;
      case "calcite-icon":
        customElements.get(e) || Y();
        break;
      case "calcite-loader":
        customElements.get(e) || Z();
        break;
      case "calcite-popover":
        customElements.get(e) || Q();
        break;
    }
  });
}
z();
const Se = S, ze = z;
export {
  Se as CalciteActionBar,
  ze as defineCustomElement
};
//# sourceMappingURL=calcite-action-bar-DKI9myTB.js.map
