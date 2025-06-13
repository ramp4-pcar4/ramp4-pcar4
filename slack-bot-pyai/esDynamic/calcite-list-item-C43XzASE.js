import { cF as A, cG as k, eH as r, cD as s, cH as N } from "./main-DhLeoxL5.js";
import { t as b, s as m, r as L, g as Q } from "./dom-DkH2gtZS.js";
import { c as H, u as D, d as w, I as V } from "./interactive-GJ4eQ_FD.js";
import { a as y, g as x, I as f, C as i, S as C, b as X, c as Y, u as Z } from "./utils3-BvKqLBrg.js";
import { a as T, c as M, s as F, b as P, d as z, u as B } from "./t9n-C_Rgwg9e.js";
import { s as O, a as U, c as G } from "./loadable-Bai05tuj.js";
import { d as ee } from "./action-huQT49AY.js";
import { d as $ } from "./icon-C0Vd5HHY.js";
import { d as te } from "./loader-fsl6a7Pq.js";
const E = {
  handle: "handle",
  handleSelected: "handle--selected"
}, ne = {
  drag: "drag"
}, p = {
  itemLabel: "{itemLabel}",
  position: "{position}",
  total: "{total}"
}, se = `:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`, ie = /* @__PURE__ */ A(class extends k {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteHandleChange = r(this, "calciteHandleChange", 6), this.calciteHandleNudge = r(this, "calciteHandleNudge", 6), this.calciteInternalAssistiveTextChange = r(this, "calciteInternalAssistiveTextChange", 6), this.handleKeyDown = (e) => {
      if (!this.disabled)
        switch (e.key) {
          case " ":
            this.selected = !this.selected, this.calciteHandleChange.emit(), e.preventDefault();
            break;
          case "ArrowUp":
            if (!this.selected)
              return;
            e.preventDefault(), this.calciteHandleNudge.emit({ direction: "up" });
            break;
          case "ArrowDown":
            if (!this.selected)
              return;
            e.preventDefault(), this.calciteHandleNudge.emit({ direction: "down" });
            break;
        }
    }, this.handleBlur = () => {
      this.blurUnselectDisabled || this.disabled || this.selected && (this.selected = !1, this.calciteHandleChange.emit());
    }, this.selected = !1, this.disabled = !1, this.dragHandle = void 0, this.messages = void 0, this.setPosition = void 0, this.setSize = void 0, this.label = void 0, this.blurUnselectDisabled = !1, this.messageOverrides = void 0, this.effectiveLocale = void 0, this.defaultMessages = void 0;
  }
  handleAriaTextChange() {
    const e = this.getAriaText("live");
    e && this.calciteInternalAssistiveTextChange.emit({
      message: e
    });
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    H(this), T(this), M(this);
  }
  async componentWillLoad() {
    O(this), await F(this);
  }
  componentDidLoad() {
    U(this);
  }
  componentDidRender() {
    D(this);
  }
  disconnectedCallback() {
    w(this), P(this), z(this);
  }
  effectiveLocaleChange() {
    B(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await G(this), this.handleButton?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getTooltip() {
    const { label: e, messages: t } = this;
    return t ? e ? t.dragHandle.replace(p.itemLabel, e) : t.dragHandleUntitled : "";
  }
  getAriaText(e) {
    const { setPosition: t, setSize: n, label: l, messages: a, selected: o } = this;
    return !a || !l || typeof n != "number" || typeof t != "number" ? null : (e === "label" ? o ? a.dragHandleChange : a.dragHandleIdle : o ? a.dragHandleActive : a.dragHandleCommit).replace(p.position, t.toString()).replace(p.itemLabel, l).replace(p.total, n.toString());
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (
      // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
      s("span", {
        "aria-disabled": this.disabled ? b(this.disabled) : null,
        "aria-label": this.disabled ? null : this.getAriaText("label"),
        "aria-pressed": this.disabled ? null : b(this.selected),
        class: { [E.handle]: !0, [E.handleSelected]: !this.disabled && this.selected },
        onBlur: this.handleBlur,
        onKeyDown: this.handleKeyDown,
        role: "button",
        tabIndex: this.disabled ? null : 0,
        title: this.getTooltip(),
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: (e) => {
          this.handleButton = e;
        }
      }, s("calcite-icon", { icon: ne.drag, scale: "s" }))
    );
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      messages: ["handleAriaTextChange"],
      label: ["handleAriaTextChange"],
      selected: ["handleAriaTextChange"],
      setPosition: ["handleAriaTextChange"],
      setSize: ["handleAriaTextChange"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return se;
  }
}, [1, "calcite-handle", {
  selected: [1540],
  disabled: [516],
  dragHandle: [513, "drag-handle"],
  messages: [16],
  setPosition: [2, "set-position"],
  setSize: [2, "set-size"],
  label: [1],
  blurUnselectDisabled: [4, "blur-unselect-disabled"],
  messageOverrides: [16],
  effectiveLocale: [32],
  defaultMessages: [32],
  setFocus: [64]
}, void 0, {
  messages: ["handleAriaTextChange"],
  label: ["handleAriaTextChange"],
  selected: ["handleAriaTextChange"],
  setPosition: ["handleAriaTextChange"],
  setSize: ["handleAriaTextChange"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function K() {
  if (typeof customElements > "u")
    return;
  ["calcite-handle", "calcite-icon"].forEach((e) => {
    switch (e) {
      case "calcite-handle":
        customElements.get(e) || customElements.define(e, ie);
        break;
      case "calcite-icon":
        customElements.get(e) || $();
        break;
    }
  });
}
K();
const le = `:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-color-brand);--calcite-list-item-spacing-indent:1rem}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-bottom{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-color-border-input)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list-item),::slotted(calcite-list){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3)}::slotted(calcite-list:empty){padding-block:0.75rem}:host([hidden]){display:none}[hidden]{display:none}`, I = /* @__PURE__ */ new Map(), ae = "calcite-list", _ = /* @__PURE__ */ A(class extends k {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteListItemSelect = r(this, "calciteListItemSelect", 6), this.calciteListItemClose = r(this, "calciteListItemClose", 6), this.calciteListItemDragHandleChange = r(this, "calciteListItemDragHandleChange", 6), this.calciteListItemToggle = r(this, "calciteListItemToggle", 6), this.calciteInternalListItemSelect = r(this, "calciteInternalListItemSelect", 6), this.calciteInternalListItemSelectMultiple = r(this, "calciteInternalListItemSelectMultiple", 6), this.calciteInternalListItemActive = r(this, "calciteInternalListItemActive", 6), this.calciteInternalFocusPreviousItem = r(this, "calciteInternalFocusPreviousItem", 6), this.calciteInternalListItemChange = r(this, "calciteInternalListItemChange", 6), this.dragHandleSelectedChangeHandler = (e) => {
      this.dragSelected = e.target.selected, this.calciteListItemDragHandleChange.emit(), e.stopPropagation();
    }, this.emitInternalListItemActive = () => {
      this.calciteInternalListItemActive.emit();
    }, this.focusCellHandle = () => {
      this.handleCellFocusIn(this.handleGridEl);
    }, this.focusCellActionsStart = () => {
      this.handleCellFocusIn(this.actionsStartEl);
    }, this.focusCellContent = () => {
      this.handleCellFocusIn(this.contentEl);
    }, this.focusCellActionsEnd = () => {
      this.handleCellFocusIn(this.actionsEndEl);
    }, this.handleCloseClick = () => {
      this.closed = !0, this.calciteListItemClose.emit();
    }, this.handleContentSlotChange = (e) => {
      this.hasCustomContent = m(e);
    }, this.handleActionsStartSlotChange = (e) => {
      this.hasActionsStart = m(e);
    }, this.handleActionsEndSlotChange = (e) => {
      this.hasActionsEnd = m(e);
    }, this.handleContentStartSlotChange = (e) => {
      this.hasContentStart = m(e);
    }, this.handleContentEndSlotChange = (e) => {
      this.hasContentEnd = m(e);
    }, this.handleContentBottomSlotChange = (e) => {
      this.hasContentBottom = m(e);
    }, this.handleDefaultSlotChange = (e) => {
      this.handleOpenableChange(e.target);
    }, this.handleToggleClick = () => {
      this.toggle();
    }, this.toggle = (e = !this.open) => {
      this.open = e, this.calciteListItemToggle.emit();
    }, this.handleItemClick = (e) => {
      e.defaultPrevented || this.toggleSelected(e.shiftKey);
    }, this.toggleSelected = (e) => {
      const { selectionMode: t, selected: n } = this;
      this.disabled || (t === "multiple" || t === "single" ? this.selected = !n : t === "single-persist" && (this.selected = !0), this.calciteInternalListItemSelectMultiple.emit({
        selectMultiple: e && t === "multiple"
      }), this.calciteListItemSelect.emit());
    }, this.handleItemKeyDown = (e) => {
      if (e.defaultPrevented)
        return;
      const { key: t } = e, n = e.composedPath(), { containerEl: l, actionsStartEl: a, actionsEndEl: o, open: d, openable: g } = this, c = this.getGridCells(), h = c.findIndex((u) => n.includes(u));
      if (t === "Enter" && !n.includes(a) && !n.includes(o))
        e.preventDefault(), this.toggleSelected(e.shiftKey);
      else if (t === "ArrowRight") {
        e.preventDefault();
        const u = h + 1;
        h === -1 ? !d && g ? (this.toggle(!0), this.focusCell(null)) : c[0] && this.focusCell(c[0]) : c[h] && c[u] && this.focusCell(c[u]);
      } else if (t === "ArrowLeft") {
        e.preventDefault();
        const u = h - 1;
        h === -1 ? (this.focusCell(null), d && g ? this.toggle(!1) : this.calciteInternalFocusPreviousItem.emit()) : h === 0 ? (this.focusCell(null), l.focus()) : c[h] && c[u] && this.focusCell(c[u]);
      }
    }, this.focusCellNull = () => {
      this.focusCell(null);
    }, this.handleCellFocusIn = (e) => {
      this.setFocusCell(e, L(e), !0);
    }, this.setFocusCell = (e, t, n) => {
      const { parentListEl: l } = this;
      n && I.set(l, null);
      const a = this.getGridCells();
      a.forEach((o) => {
        o.tabIndex = -1, o.removeAttribute(y);
      }), e && (e.tabIndex = e === t ? 0 : -1, e.setAttribute(y, ""), n && I.set(l, a.indexOf(e)));
    }, this.focusCell = (e, t = !0) => {
      const n = L(e);
      this.setFocusCell(e, n, t), n?.focus();
    }, this.active = !1, this.closable = !1, this.closed = !1, this.description = void 0, this.disabled = !1, this.dragDisabled = !1, this.dragHandle = !1, this.dragSelected = !1, this.filterHidden = !1, this.label = void 0, this.metadata = void 0, this.open = !1, this.setSize = null, this.setPosition = null, this.selected = !1, this.value = void 0, this.selectionMode = null, this.selectionAppearance = null, this.messageOverrides = void 0, this.messages = void 0, this.effectiveLocale = "", this.defaultMessages = void 0, this.level = null, this.visualLevel = null, this.parentListEl = void 0, this.openable = !1, this.hasActionsStart = !1, this.hasActionsEnd = !1, this.hasCustomContent = !1, this.hasContentStart = !1, this.hasContentEnd = !1, this.hasContentBottom = !1;
  }
  activeHandler(e) {
    e || this.focusCell(null, !1);
  }
  handleClosedChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleDisabledChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleSelectedChange() {
    this.calciteInternalListItemSelect.emit();
  }
  onMessagesChange() {
  }
  handleCalciteInternalListDefaultSlotChanges(e) {
    e.stopPropagation(), this.handleOpenableChange(this.defaultSlotEl);
  }
  effectiveLocaleChange() {
    B(this, this.effectiveLocale);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    H(this), M(this), T(this);
    const { el: e } = this;
    this.parentListEl = e.closest(ae), this.level = x(e) + 1, this.visualLevel = x(e, !0), this.setSelectionDefaults();
  }
  async componentWillLoad() {
    O(this), await F(this);
  }
  componentDidLoad() {
    U(this);
  }
  componentDidRender() {
    D(this);
  }
  disconnectedCallback() {
    w(this), z(this), P(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await G(this);
    const { containerEl: e, parentListEl: t } = this, n = I.get(t);
    if (typeof n == "number") {
      const l = this.getGridCells();
      l[n] ? this.focusCell(l[n]) : e?.focus();
      return;
    }
    e?.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderSelected() {
    const { selected: e, selectionMode: t, selectionAppearance: n } = this;
    return t === "none" || n === "border" ? null : s("td", { class: {
      [i.selectionContainer]: !0,
      [i.selectionContainerSingle]: t === "single" || t === "single-persist"
    }, key: "selection-container", onClick: this.handleItemClick }, s("calcite-icon", { icon: e ? t === "multiple" ? f.selectedMultiple : f.selectedSingle : t === "multiple" ? f.unselectedMultiple : f.unselectedSingle, scale: "s" }));
  }
  renderDragHandle() {
    const { label: e, dragHandle: t, dragSelected: n, dragDisabled: l, setPosition: a, setSize: o } = this;
    return t ? s("td", {
      "aria-label": e,
      class: i.dragContainer,
      key: "drag-handle-container",
      onFocusin: this.focusCellHandle,
      role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (d) => this.handleGridEl = d
    }, s("calcite-handle", { disabled: l, label: e, onCalciteHandleChange: this.dragHandleSelectedChangeHandler, selected: n, setPosition: a, setSize: o })) : null;
  }
  renderOpen() {
    const { el: e, open: t, openable: n, messages: l } = this, a = Q(e), o = t ? f.open : a === "rtl" ? f.closedRTL : f.closedLTR, d = t ? l.collapse : l.expand;
    return n ? s("td", { class: i.openContainer, key: "open-container", onClick: this.handleToggleClick, title: d }, s("calcite-icon", { icon: o, key: o, scale: "s" })) : null;
  }
  renderActionsStart() {
    const { label: e, hasActionsStart: t } = this;
    return s("td", {
      "aria-label": e,
      class: i.actionsStart,
      hidden: !t,
      key: "actions-start-container",
      onFocusin: this.focusCellActionsStart,
      role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (n) => this.actionsStartEl = n
    }, s("slot", { name: C.actionsStart, onSlotchange: this.handleActionsStartSlotChange }));
  }
  renderActionsEnd() {
    const { label: e, hasActionsEnd: t, closable: n, messages: l } = this;
    return s("td", {
      "aria-label": e,
      class: i.actionsEnd,
      hidden: !(t || n),
      key: "actions-end-container",
      onFocusin: this.focusCellActionsEnd,
      role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (a) => this.actionsEndEl = a
    }, s("slot", { name: C.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), n ? s("calcite-action", { appearance: "transparent", icon: f.close, key: "close-action", label: l.close, onClick: this.handleCloseClick, text: l.close }) : null);
  }
  renderContentStart() {
    const { hasContentStart: e } = this;
    return s("div", { class: i.contentStart, hidden: !e }, s("slot", { name: C.contentStart, onSlotchange: this.handleContentStartSlotChange }));
  }
  renderCustomContent() {
    const { hasCustomContent: e } = this;
    return s("div", { class: i.customContent, hidden: !e }, s("slot", { name: C.content, onSlotchange: this.handleContentSlotChange }));
  }
  renderContentEnd() {
    const { hasContentEnd: e } = this;
    return s("div", { class: i.contentEnd, hidden: !e }, s("slot", { name: C.contentEnd, onSlotchange: this.handleContentEndSlotChange }));
  }
  renderContentBottom() {
    const { hasContentBottom: e, visualLevel: t } = this;
    return s("div", { class: i.contentBottom, hidden: !e, style: { "--calcite-list-item-spacing-indent-multiplier": `${t}` } }, s("slot", { name: C.contentBottom, onSlotchange: this.handleContentBottomSlotChange }));
  }
  renderDefaultContainer() {
    return s("div", { class: {
      [i.nestedContainer]: !0,
      [i.nestedContainerHidden]: this.openable && !this.open
    } }, s("slot", { onSlotchange: this.handleDefaultSlotChange, ref: (e) => this.defaultSlotEl = e }));
  }
  renderContentProperties() {
    const { label: e, description: t, hasCustomContent: n } = this;
    return !n && (e || t) ? s("div", { class: i.content, key: "content" }, e ? s("div", { class: i.label, key: "label" }, e) : null, t ? s("div", { class: i.description, key: "description" }, t) : null) : null;
  }
  renderContentContainer() {
    const { description: e, label: t, selectionMode: n, hasCustomContent: l } = this, a = l || !!t || !!e, o = [
      this.renderContentStart(),
      this.renderCustomContent(),
      this.renderContentProperties(),
      this.renderContentEnd()
    ];
    return s("td", {
      "aria-label": t,
      class: {
        [i.contentContainer]: !0,
        [i.contentContainerSelectable]: n !== "none",
        [i.contentContainerHasCenterContent]: a
      },
      key: "content-container",
      onClick: this.handleItemClick,
      onFocusin: this.focusCellContent,
      role: "gridcell",
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (d) => this.contentEl = d
    }, o);
  }
  render() {
    const { openable: e, open: t, level: n, setPosition: l, setSize: a, active: o, label: d, selected: g, selectionAppearance: c, selectionMode: h, closed: u, visualLevel: j } = this, S = h !== "none" && c === "border", W = S && g, q = S && !g;
    return s(N, null, s(V, { disabled: this.disabled }, s("tr", {
      "aria-expanded": e ? b(t) : null,
      "aria-label": d,
      "aria-level": n,
      "aria-posinset": l,
      "aria-selected": b(g),
      "aria-setsize": a,
      class: {
        [i.container]: !0,
        [i.containerHover]: !0,
        [i.containerBorder]: S,
        [i.containerBorderSelected]: W,
        [i.containerBorderUnselected]: q
      },
      hidden: u,
      onFocus: this.focusCellNull,
      onFocusin: this.emitInternalListItemActive,
      onKeyDown: this.handleItemKeyDown,
      role: "row",
      style: { "--calcite-list-item-spacing-indent-multiplier": `${j}` },
      tabIndex: o ? 0 : -1,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (J) => this.containerEl = J
    }, this.renderDragHandle(), this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), this.renderContentBottom(), this.renderDefaultContainer()));
  }
  emitCalciteInternalListItemChange() {
    this.calciteInternalListItemChange.emit();
  }
  setSelectionDefaults() {
    const { parentListEl: e, selectionMode: t, selectionAppearance: n } = this;
    e && (t || (this.selectionMode = e.selectionMode), n || (this.selectionAppearance = e.selectionAppearance));
  }
  handleOpenableChange(e) {
    if (!e)
      return;
    const t = X(e), n = Y(e);
    Z(t), this.openable = !!t.length || !!n.length;
  }
  getGridCells() {
    return [this.handleGridEl, this.actionsStartEl, this.contentEl, this.actionsEndEl].filter((e) => e && !e.hidden);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      active: ["activeHandler"],
      closed: ["handleClosedChange"],
      disabled: ["handleDisabledChange"],
      selected: ["handleSelectedChange"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return le;
  }
}, [1, "calcite-list-item", {
  active: [4],
  closable: [516],
  closed: [1540],
  description: [1],
  disabled: [516],
  dragDisabled: [516, "drag-disabled"],
  dragHandle: [4, "drag-handle"],
  dragSelected: [1540, "drag-selected"],
  filterHidden: [516, "filter-hidden"],
  label: [1],
  metadata: [16],
  open: [1540],
  setSize: [2, "set-size"],
  setPosition: [2, "set-position"],
  selected: [1540],
  value: [8],
  selectionMode: [1025, "selection-mode"],
  selectionAppearance: [1025, "selection-appearance"],
  messageOverrides: [1040],
  messages: [1040],
  effectiveLocale: [32],
  defaultMessages: [32],
  level: [32],
  visualLevel: [32],
  parentListEl: [32],
  openable: [32],
  hasActionsStart: [32],
  hasActionsEnd: [32],
  hasCustomContent: [32],
  hasContentStart: [32],
  hasContentEnd: [32],
  hasContentBottom: [32],
  setFocus: [64]
}, [[0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"], [0, "calciteInternalListDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"]], {
  active: ["activeHandler"],
  closed: ["handleClosedChange"],
  disabled: ["handleDisabledChange"],
  selected: ["handleSelectedChange"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function R() {
  if (typeof customElements > "u")
    return;
  ["calcite-list-item", "calcite-action", "calcite-handle", "calcite-icon", "calcite-loader"].forEach((e) => {
    switch (e) {
      case "calcite-list-item":
        customElements.get(e) || customElements.define(e, _);
        break;
      case "calcite-action":
        customElements.get(e) || ee();
        break;
      case "calcite-handle":
        customElements.get(e) || K();
        break;
      case "calcite-icon":
        customElements.get(e) || $();
        break;
      case "calcite-loader":
        customElements.get(e) || te();
        break;
    }
  });
}
R();
const be = _, ve = R;
export {
  be as CalciteListItem,
  ve as defineCustomElement
};
//# sourceMappingURL=calcite-list-item-C43XzASE.js.map
