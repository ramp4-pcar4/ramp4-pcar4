import { cF as w, cG as S, eH as m, cD as t, cH as V } from "./main-DhLeoxL5.js";
import { s as p, p as X, f as Y, t as x, g as Z } from "./dom-DkH2gtZS.js";
import { c as E, u as A, d as H, I as F } from "./interactive-GJ4eQ_FD.js";
import { s as B, a as z, c as L } from "./loadable-Bai05tuj.js";
import { c as P, a as I, s as M, d as O, b as D, u as T } from "./t9n-C_Rgwg9e.js";
import { c as N } from "./observers-Cg_752lJ.js";
import { d as $, a as R, S as ee, H as te } from "./action-menu-BxzjzR-y.js";
import { d as _ } from "./action-huQT49AY.js";
import { d as W } from "./icon-C0Vd5HHY.js";
import { d as K } from "./loader-fsl6a7Pq.js";
import { d as j } from "./scrim-BskyDJEs.js";
const a = {
  actionBarContainer: "action-bar-container",
  backButton: "back-button",
  container: "container",
  header: "header",
  headerContainer: "header-container",
  headerContainerBorderEnd: "header-container--border-end",
  heading: "heading",
  summary: "summary",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  fabContainer: "fab-container",
  footer: "footer"
}, v = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right",
  expand: "chevron-down",
  collapse: "chevron-up"
}, s = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
}, ne = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-color-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-color-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}", oe = /* @__PURE__ */ w(class extends S {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calcitePanelClose = m(this, "calcitePanelClose", 6), this.calcitePanelToggle = m(this, "calcitePanelToggle", 6), this.calcitePanelScroll = m(this, "calcitePanelScroll", 6), this.resizeObserver = N("resize", () => this.resizeHandler()), this.resizeHandler = () => {
      const { panelScrollEl: e } = this;
      !e || typeof e.scrollHeight != "number" || typeof e.offsetHeight != "number" || (e.tabIndex = e.scrollHeight > e.offsetHeight ? 0 : -1);
    }, this.setContainerRef = (e) => {
      this.containerEl = e;
    }, this.panelKeyDownHandler = (e) => {
      this.closable && e.key === "Escape" && !e.defaultPrevented && (this.close(), e.preventDefault());
    }, this.close = () => {
      this.closed = !0, this.calcitePanelClose.emit();
    }, this.collapse = () => {
      this.collapsed = !this.collapsed, this.calcitePanelToggle.emit();
    }, this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    }, this.handleHeaderActionsStartSlotChange = (e) => {
      this.hasStartActions = p(e);
    }, this.handleHeaderActionsEndSlotChange = (e) => {
      this.hasEndActions = p(e);
    }, this.handleHeaderMenuActionsSlotChange = (e) => {
      this.hasMenuItems = p(e);
    }, this.handleActionBarSlotChange = (e) => {
      const n = X(e).filter((o) => o?.matches("calcite-action-bar"));
      n.forEach((o) => o.layout = "horizontal"), this.hasActionBar = !!n.length;
    }, this.handleHeaderContentSlotChange = (e) => {
      this.hasHeaderContent = p(e);
    }, this.handleFooterSlotChange = (e) => {
      this.hasFooterContent = p(e);
    }, this.handleFooterActionsSlotChange = (e) => {
      this.hasFooterActions = p(e);
    }, this.handleFabSlotChange = (e) => {
      this.hasFab = p(e);
    }, this.setPanelScrollEl = (e) => {
      this.panelScrollEl = e, this.resizeObserver?.disconnect(), e && (this.resizeObserver?.observe(e), this.resizeHandler());
    }, this.closed = !1, this.disabled = !1, this.closable = !1, this.collapsed = !1, this.collapseDirection = "down", this.collapsible = !1, this.headingLevel = void 0, this.loading = !1, this.heading = void 0, this.description = void 0, this.menuOpen = !1, this.messageOverrides = void 0, this.messages = void 0, this.overlayPositioning = "absolute", this.hasStartActions = !1, this.hasEndActions = !1, this.hasMenuItems = !1, this.hasHeaderContent = !1, this.hasActionBar = !1, this.hasFooterContent = !1, this.hasFooterActions = !1, this.hasFab = !1, this.defaultMessages = void 0, this.effectiveLocale = "", this.showHeaderContent = !1;
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    E(this), P(this), I(this);
  }
  async componentWillLoad() {
    B(this), await M(this);
  }
  componentDidLoad() {
    z(this);
  }
  componentDidRender() {
    A(this);
  }
  disconnectedCallback() {
    H(this), O(this), D(this), this.resizeObserver?.disconnect();
  }
  effectiveLocaleChange() {
    T(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component's first focusable element.
   */
  async setFocus() {
    await L(this), Y(this.containerEl);
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(e) {
    this.panelScrollEl?.scrollTo(e);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeaderContent() {
    const { heading: e, headingLevel: n, description: o, hasHeaderContent: c } = this, l = e ? t(te, { class: a.heading, level: n }, e) : null, i = o ? t("span", { class: a.description }, o) : null;
    return !c && (l || i) ? t("div", { class: a.headerContent, key: "header-content" }, l, i) : null;
  }
  renderActionBar() {
    return t("div", { class: a.actionBarContainer, hidden: !this.hasActionBar }, t("slot", { name: s.actionBar, onSlotchange: this.handleActionBarSlotChange }));
  }
  renderHeaderSlottedContent() {
    return t("div", { class: a.headerContent, hidden: !this.hasHeaderContent, key: "slotted-header-content" }, t("slot", { name: s.headerContent, onSlotchange: this.handleHeaderContentSlotChange }));
  }
  renderHeaderStartActions() {
    const { hasStartActions: e } = this;
    return t("div", { class: { [a.headerActionsStart]: !0, [a.headerActions]: !0 }, hidden: !e, key: "header-actions-start" }, t("slot", { name: s.headerActionsStart, onSlotchange: this.handleHeaderActionsStartSlotChange }));
  }
  renderHeaderActionsEnd() {
    const { hasEndActions: e, messages: n, closable: o, collapsed: c, collapseDirection: l, collapsible: i, hasMenuItems: r } = this, { collapse: d, expand: f, close: u } = n, g = [v.expand, v.collapse];
    l === "up" && g.reverse();
    const b = i ? t("calcite-action", { "aria-expanded": x(!c), "aria-label": d, "data-test": "collapse", icon: c ? g[0] : g[1], onClick: this.collapse, text: d, title: c ? f : d }) : null, C = o ? t("calcite-action", { "aria-label": u, "data-test": "close", icon: v.close, onClick: this.close, text: u, title: u }) : null, J = t("slot", { name: s.headerActionsEnd, onSlotchange: this.handleHeaderActionsEndSlotChange }), Q = e || b || C || r;
    return t("div", { class: { [a.headerActionsEnd]: !0, [a.headerActions]: !0 }, hidden: !Q, key: "header-actions-end" }, J, this.renderMenu(), b, C);
  }
  renderMenu() {
    const { hasMenuItems: e, messages: n, menuOpen: o } = this;
    return t("calcite-action-menu", { flipPlacements: ["top", "bottom"], hidden: !e, key: "menu", label: n.options, open: o, overlayPositioning: this.overlayPositioning, placement: "bottom-end" }, t("calcite-action", { icon: v.menu, slot: ee.trigger, text: n.options }), t("slot", { name: s.headerMenuActions, onSlotchange: this.handleHeaderMenuActionsSlotChange }));
  }
  renderHeaderNode() {
    const { hasHeaderContent: e, hasStartActions: n, hasEndActions: o, closable: c, collapsible: l, hasMenuItems: i, hasActionBar: r } = this, d = this.renderHeaderContent(), f = e || !!d || n || o || l || c || i;
    return this.showHeaderContent = f, t("header", { class: a.header, hidden: !(f || r) }, t("div", { class: { [a.headerContainer]: !0, [a.headerContainerBorderEnd]: r }, hidden: !f }, this.renderHeaderStartActions(), this.renderHeaderSlottedContent(), d, this.renderHeaderActionsEnd()), this.renderActionBar());
  }
  renderFooterNode() {
    const { hasFooterContent: e, hasFooterActions: n } = this, o = e || n;
    return t("footer", { class: a.footer, hidden: !o }, t("slot", { key: "footer-slot", name: s.footer, onSlotchange: this.handleFooterSlotChange }), t("slot", { key: "footer-actions-slot", name: s.footerActions, onSlotchange: this.handleFooterActionsSlotChange }));
  }
  renderContent() {
    return t("div", {
      class: a.contentWrapper,
      hidden: this.collapsible && this.collapsed,
      onScroll: this.panelScrollHandler,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setPanelScrollEl
    }, t("slot", null), this.renderFab());
  }
  renderFab() {
    return t("div", { class: a.fabContainer, hidden: !this.hasFab }, t("slot", { name: s.fab, onSlotchange: this.handleFabSlotChange }));
  }
  render() {
    const { disabled: e, loading: n, panelKeyDownHandler: o, closed: c, closable: l } = this, i = t("article", {
      "aria-busy": x(n),
      class: a.container,
      hidden: c,
      onKeyDown: o,
      tabIndex: l ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setContainerRef
    }, this.renderHeaderNode(), this.renderContent(), this.renderFooterNode());
    return t(F, { disabled: e }, n ? t("calcite-scrim", { loading: n }) : null, i);
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
    return ne;
  }
}, [1, "calcite-panel", {
  closed: [1540],
  disabled: [516],
  closable: [516],
  collapsed: [516],
  collapseDirection: [1, "collapse-direction"],
  collapsible: [516],
  headingLevel: [514, "heading-level"],
  loading: [516],
  heading: [1],
  description: [1],
  menuOpen: [516, "menu-open"],
  messageOverrides: [1040],
  messages: [1040],
  overlayPositioning: [513, "overlay-positioning"],
  hasStartActions: [32],
  hasEndActions: [32],
  hasMenuItems: [32],
  hasHeaderContent: [32],
  hasActionBar: [32],
  hasFooterContent: [32],
  hasFooterActions: [32],
  hasFab: [32],
  defaultMessages: [32],
  effectiveLocale: [32],
  showHeaderContent: [32],
  setFocus: [64],
  scrollContentTo: [64]
}, void 0, {
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function G() {
  if (typeof customElements > "u")
    return;
  ["calcite-panel", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-panel":
        customElements.get(e) || customElements.define(e, oe);
        break;
      case "calcite-action":
        customElements.get(e) || _();
        break;
      case "calcite-action-menu":
        customElements.get(e) || R();
        break;
      case "calcite-icon":
        customElements.get(e) || W();
        break;
      case "calcite-loader":
        customElements.get(e) || K();
        break;
      case "calcite-popover":
        customElements.get(e) || $();
        break;
      case "calcite-scrim":
        customElements.get(e) || j();
        break;
    }
  });
}
G();
const ae = {
  backButton: "back-button"
}, y = {
  backLeft: "chevron-left",
  backRight: "chevron-right"
}, h = {
  actionBar: "action-bar",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
}, se = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}", U = /* @__PURE__ */ w(class extends S {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteFlowItemBack = m(this, "calciteFlowItemBack", 7), this.calciteFlowItemScroll = m(this, "calciteFlowItemScroll", 6), this.calciteFlowItemClose = m(this, "calciteFlowItemClose", 6), this.calciteFlowItemToggle = m(this, "calciteFlowItemToggle", 6), this.handlePanelScroll = (e) => {
      e.stopPropagation(), this.calciteFlowItemScroll.emit();
    }, this.handlePanelClose = (e) => {
      e.stopPropagation(), this.calciteFlowItemClose.emit();
    }, this.handlePanelToggle = (e) => {
      e.stopPropagation(), this.collapsed = e.target.collapsed, this.calciteFlowItemToggle.emit();
    }, this.backButtonClick = () => {
      this.calciteFlowItemBack.emit();
    }, this.setBackRef = (e) => {
      this.backButtonEl = e;
    }, this.setContainerRef = (e) => {
      this.containerEl = e;
    }, this.closable = !1, this.closed = !1, this.collapsed = !1, this.collapseDirection = "down", this.collapsible = !1, this.beforeBack = void 0, this.description = void 0, this.disabled = !1, this.heading = void 0, this.headingLevel = void 0, this.loading = !1, this.menuOpen = !1, this.messageOverrides = void 0, this.messages = void 0, this.overlayPositioning = "absolute", this.showBackButton = !1, this.defaultMessages = void 0, this.effectiveLocale = "";
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    E(this), P(this), I(this);
  }
  async componentWillLoad() {
    await M(this), B(this);
  }
  componentDidRender() {
    A(this);
  }
  disconnectedCallback() {
    H(this), O(this), D(this);
  }
  componentDidLoad() {
    z(this);
  }
  effectiveLocaleChange() {
    T(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Sets focus on the component.
   *
   * @returns promise.
   */
  async setFocus() {
    await L(this);
    const { backButtonEl: e, containerEl: n } = this;
    if (e)
      return e.setFocus();
    if (n)
      return n.setFocus();
  }
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(e) {
    await this.containerEl?.scrollContentTo(e);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el: e } = this, n = Z(e) === "rtl", { showBackButton: o, backButtonClick: c, messages: l } = this, i = l.back, r = n ? y.backRight : y.backLeft;
    return o ? t("calcite-action", {
      "aria-label": i,
      class: ae.backButton,
      icon: r,
      key: "flow-back-button",
      onClick: c,
      scale: "s",
      slot: "header-actions-start",
      text: i,
      title: i,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setBackRef
    }) : null;
  }
  render() {
    const { collapsed: e, collapseDirection: n, collapsible: o, closable: c, closed: l, description: i, disabled: r, heading: d, headingLevel: f, loading: u, menuOpen: g, messages: b, overlayPositioning: C } = this;
    return t(V, null, t(F, { disabled: r }, t("calcite-panel", {
      closable: c,
      closed: l,
      collapseDirection: n,
      collapsed: e,
      collapsible: o,
      description: i,
      disabled: r,
      heading: d,
      headingLevel: f,
      loading: u,
      menuOpen: g,
      messageOverrides: b,
      onCalcitePanelClose: this.handlePanelClose,
      onCalcitePanelScroll: this.handlePanelScroll,
      onCalcitePanelToggle: this.handlePanelToggle,
      overlayPositioning: C,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setContainerRef
    }, this.renderBackButton(), t("slot", { name: h.actionBar, slot: s.actionBar }), t("slot", { name: h.headerActionsStart, slot: s.headerActionsStart }), t("slot", { name: h.headerActionsEnd, slot: s.headerActionsEnd }), t("slot", { name: h.headerContent, slot: s.headerContent }), t("slot", { name: h.headerMenuActions, slot: s.headerMenuActions }), t("slot", { name: h.fab, slot: s.fab }), t("slot", { name: h.footerActions, slot: s.footerActions }), t("slot", { name: h.footer, slot: s.footer }), t("slot", null))));
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
    return se;
  }
}, [1, "calcite-flow-item", {
  closable: [516],
  closed: [516],
  collapsed: [516],
  collapseDirection: [1, "collapse-direction"],
  collapsible: [516],
  beforeBack: [16],
  description: [1],
  disabled: [516],
  heading: [1],
  headingLevel: [514, "heading-level"],
  loading: [516],
  menuOpen: [516, "menu-open"],
  messageOverrides: [1040],
  messages: [1040],
  overlayPositioning: [513, "overlay-positioning"],
  showBackButton: [4, "show-back-button"],
  defaultMessages: [32],
  effectiveLocale: [32],
  setFocus: [64],
  scrollContentTo: [64]
}, void 0, {
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function q() {
  if (typeof customElements > "u")
    return;
  ["calcite-flow-item", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-panel", "calcite-popover", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-flow-item":
        customElements.get(e) || customElements.define(e, U);
        break;
      case "calcite-action":
        customElements.get(e) || _();
        break;
      case "calcite-action-menu":
        customElements.get(e) || R();
        break;
      case "calcite-icon":
        customElements.get(e) || W();
        break;
      case "calcite-loader":
        customElements.get(e) || K();
        break;
      case "calcite-panel":
        customElements.get(e) || G();
        break;
      case "calcite-popover":
        customElements.get(e) || $();
        break;
      case "calcite-scrim":
        customElements.get(e) || j();
        break;
    }
  });
}
q();
const ve = U, ke = q;
export {
  ve as CalciteFlowItem,
  ke as defineCustomElement
};
//# sourceMappingURL=calcite-flow-item-BbuMv5QM.js.map
