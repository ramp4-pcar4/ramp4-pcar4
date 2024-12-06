import { cX as d, cZ as T, c$ as B, d0 as G, e_ as k, d1 as M, hw as P } from "./main-uCo5F72j.js";
import { c as $, d as q } from "./conditionalSlot-DOgr18ah.js";
import { g as W, u as y, l as E, o as _ } from "./dom-BHTTQ4_z.js";
import { a as F, s as I, c as R } from "./loadable-C72a-yGb.js";
import { c as U, d as j } from "./locale-Dozpwu8q.js";
import { c as C } from "./observers-DC3me885.js";
import { u as X, c as Z, s as J, d as K } from "./t9n-DUY03U5N.js";
import { S as g, d as Q } from "./action-group-Dqtwk2ug.js";
import { S as V, d as Y, a as N } from "./action-menu-DkHZGmlM.js";
import { d as ee } from "./action-69RLmg9m.js";
import { d as te } from "./icon-Buh41rZt.js";
import { d as oe } from "./loader-DKIf8bm7.js";
import { d as se } from "./debounce-27Hmkkyg.js";
const ne = 2, w = (s) => s.reduce((e, t) => e + t, 0) / s.length, ie = (s) => {
  const e = s.filter((o) => o.slot !== g.menuActions), t = e?.length;
  return {
    actionWidth: t ? w(e.map((o) => o.clientWidth || 0)) : 0,
    actionHeight: t ? w(e.map((o) => o.clientHeight || 0)) : 0
  };
}, ae = ({ width: s, actionWidth: e, layout: t, height: o, actionHeight: c, groupCount: a }) => {
  const n = t === "horizontal" ? s : o, i = t === "horizontal" ? e : c;
  return Math.floor((n - a * ne) / i);
}, ce = ({ layout: s, actionCount: e, actionWidth: t, width: o, actionHeight: c, height: a, groupCount: n }) => Math.max(e - ae({ width: o, actionWidth: t, layout: s, height: a, actionHeight: c, groupCount: n }), 0), x = (s) => Array.from(s.querySelectorAll("calcite-action")).filter((e) => e.closest("calcite-action-menu") ? e.slot === V.trigger : !0), le = ({ actionGroups: s, expanded: e, overflowCount: t }) => {
  let o = t;
  s.reverse().forEach((c) => {
    let a = 0;
    const n = x(c).reverse();
    n.forEach((i) => {
      i.slot === g.menuActions && (i.removeAttribute("slot"), i.textEnabled = e);
    }), o > 0 && n.some((i) => (n.filter((h) => !h.slot).length > 1 && n.length > 2 && !i.closest("calcite-action-menu") && (i.textEnabled = !0, i.setAttribute("slot", g.menuActions), a++, a > 1 && o--), o < 1)), T(c);
  });
}, S = {
  chevronsLeft: "chevrons-left",
  chevronsRight: "chevrons-right"
};
function re(s, e) {
  return s || e.closest("calcite-shell-panel")?.position || "start";
}
function m({ el: s, expanded: e }) {
  x(s).filter((t) => t.slot !== g.menuActions).forEach((t) => t.textEnabled = e), s.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((t) => t.expanded = e);
}
const de = ({ tooltip: s, referenceElement: e, expanded: t, ref: o }) => (s && (s.referenceElement = !t && e ? e : null), o && o(e), e), he = ({ expanded: s, expandText: e, collapseText: t, expandLabel: o, collapseLabel: c, toggle: a, el: n, position: i, tooltip: l, ref: h, scale: r }) => {
  const f = W(n) === "rtl", p = s ? t : e, b = s ? c : o, u = [S.chevronsLeft, S.chevronsRight];
  f && u.reverse();
  const A = re(i, n) === "end", H = A ? u[1] : u[0], O = A ? u[0] : u[1];
  return d("calcite-action", { icon: s ? H : O, id: "expand-toggle", label: b, onClick: a, ref: (D) => de({ tooltip: l, referenceElement: D, expanded: s, ref: h }), scale: r, text: p, textEnabled: s, title: !s && !l ? p : null });
};
const ue = {
  actionGroupEnd: "action-group--end"
}, v = {
  actionsEnd: "actions-end",
  bottomActions: "bottom-actions",
  expandTooltip: "expand-tooltip"
}, fe = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}", pe = fe, L = /* @__PURE__ */ B(class extends G {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteActionBarToggle = k(this, "calciteActionBarToggle", 6), this.mutationObserver = C("mutation", () => {
      const { el: e, expanded: t } = this;
      m({ el: e, expanded: t }), this.overflowActions();
    }), this.resizeObserver = C("resize", (e) => this.resizeHandlerEntries(e)), this.actionMenuOpenHandler = (e) => {
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
    }, this.resize = se(({ width: e, height: t }) => {
      const { el: o, expanded: c, expandDisabled: a, layout: n, overflowActionsDisabled: i } = this;
      if (i || n === "vertical" && !t || n === "horizontal" && !e)
        return;
      const l = x(o), h = a ? l.length : l.length + 1, r = Array.from(o.querySelectorAll("calcite-action-group"));
      this.setGroupLayout(r);
      const f = this.hasActionsEnd || this.hasBottomActions || !a ? r.length + 1 : r.length, { actionHeight: p, actionWidth: b } = ie(l), u = ce({
        layout: n,
        actionCount: h,
        actionHeight: p,
        actionWidth: b,
        height: t,
        width: e,
        groupCount: f
      });
      le({
        actionGroups: r,
        expanded: c,
        overflowCount: u
      });
    }, P.resize), this.toggleExpand = () => {
      this.expanded = !this.expanded, this.calciteActionBarToggle.emit();
    }, this.handleDefaultSlotChange = (e) => {
      const t = y(e).filter((o) => o.matches("calcite-action-group"));
      this.setGroupLayout(t);
    }, this.handleActionsEndSlotChange = (e) => {
      this.hasActionsEnd = E(e);
    }, this.handleBottomActionsSlotChange = (e) => {
      this.hasBottomActions = E(e);
    }, this.handleTooltipSlotChange = (e) => {
      const t = y(e).filter((o) => o?.matches("calcite-tooltip"));
      this.expandTooltip = t[0];
    }, this.actionsEndGroupLabel = void 0, this.expandDisabled = !1, this.expanded = !1, this.layout = "vertical", this.overflowActionsDisabled = !1, this.overlayPositioning = "absolute", this.position = void 0, this.scale = void 0, this.messages = void 0, this.messageOverrides = void 0, this.effectiveLocale = void 0, this.hasActionsEnd = !1, this.hasBottomActions = !1, this.expandTooltip = void 0, this.defaultMessages = void 0;
  }
  expandHandler() {
    this.overflowActions();
  }
  expandedHandler() {
    const { el: e, expanded: t } = this;
    m({ el: e, expanded: t }), this.overflowActions();
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
    X(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  componentDidLoad() {
    const { el: e, expanded: t } = this;
    F(this), m({ el: e, expanded: t }), this.overflowActions();
  }
  connectedCallback() {
    const { el: e, expanded: t } = this;
    U(this), Z(this), m({ el: e, expanded: t }), this.mutationObserver?.observe(e, { childList: !0, subtree: !0 }), this.overflowActionsDisabled || this.resizeObserver?.observe(e), this.overflowActions(), $(this);
  }
  async componentWillLoad() {
    I(this), await J(this);
  }
  disconnectedCallback() {
    this.mutationObserver?.disconnect(), this.resizeObserver?.disconnect(), q(this), j(this), K(this);
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
    await R(this), _(this.el);
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
    const { expanded: e, expandDisabled: t, el: o, position: c, toggleExpand: a, scale: n, layout: i, messages: l, actionsEndGroupLabel: h, overlayPositioning: r } = this, f = t ? null : d(he, { collapseLabel: l.collapseLabel, collapseText: l.collapse, el: o, expandLabel: l.expandLabel, expandText: l.expand, expanded: e, position: c, scale: n, toggle: a, tooltip: this.expandTooltip });
    return d("calcite-action-group", { class: ue.actionGroupEnd, hidden: this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions), label: h, layout: i, overlayPositioning: r, scale: n }, d("slot", { name: v.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), d("slot", { name: v.bottomActions, onSlotchange: this.handleBottomActionsSlotChange }), d("slot", { name: v.expandTooltip, onSlotchange: this.handleTooltipSlotChange }), f);
  }
  render() {
    return d(M, { key: "ff6e365531a0ed2032864bb0777910c3932e9c6b", onCalciteActionMenuOpen: this.actionMenuOpenHandler }, d("slot", { key: "f12b2f455752a62ee32b65224bed385940135a49", onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup());
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
    return pe;
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
        customElements.get(e) || customElements.define(e, L);
        break;
      case "calcite-action":
        customElements.get(e) || ee();
        break;
      case "calcite-action-group":
        customElements.get(e) || Q();
        break;
      case "calcite-action-menu":
        customElements.get(e) || N();
        break;
      case "calcite-icon":
        customElements.get(e) || te();
        break;
      case "calcite-loader":
        customElements.get(e) || oe();
        break;
      case "calcite-popover":
        customElements.get(e) || Y();
        break;
    }
  });
}
z();
const De = L, Te = z;
export {
  De as CalciteActionBar,
  Te as defineCustomElement
};
//# sourceMappingURL=calcite-action-bar-B4fXgk_p.js.map
