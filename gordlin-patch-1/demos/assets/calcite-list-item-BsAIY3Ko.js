import { cI as proxyCustomElement, cJ as H, eL as createEvent, cG as h, cK as Host } from './main-BpBTVFw9.js';
import { t as toAriaBoolean, s as slotChangeHasAssignedElement, r as getFirstTabbable, g as getElementDir } from './dom-ukL0J7Ft.js';
import { c as connectInteractive, u as updateHostInteraction, d as disconnectInteractive, I as InteractiveContainer } from './interactive-CGyTl5ep.js';
import { a as activeCellTestAttribute, g as getDepth, I as ICONS$1, C as CSS$1, S as SLOTS, b as getListItemChildren, c as getListItemChildLists, u as updateListItemChildren } from './utils3-DrcpjEOc.js';
import { a as connectMessages, c as connectLocalized, s as setUpMessages, b as disconnectMessages, d as disconnectLocalized, u as updateMessages } from './t9n-g_juf4B0.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentFocusable } from './loadable-CFWqCd3s.js';
import { d as defineCustomElement$5 } from './action-Ce_s00xX.js';
import { d as defineCustomElement$3 } from './icon-NXbV3HNw.js';
import { d as defineCustomElement$4 } from './loader-Dkmf3fi8.js';
import './preload-helper-dJJaZANz.js';
import './guid-CUTKWB2E.js';
import './observers-CbX5_k0w.js';
import './component-e8PY7-zZ.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    handle: "handle",
    handleSelected: "handle--selected",
};
const ICONS = {
    drag: "drag",
};
const SUBSTITUTIONS = {
    itemLabel: "{itemLabel}",
    position: "{position}",
    total: "{total}",
};

const handleCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.handle{display:flex;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-color-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle calcite-icon{color:inherit}:host(:not([disabled])) .handle{cursor:move}:host(:not([disabled])) .handle:hover{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host(:not([disabled])) .handle:focus{color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host(:not([disabled])) .handle--selected{background-color:var(--calcite-color-foreground-3);color:var(--calcite-color-text-1)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";

const Handle = /*@__PURE__*/ proxyCustomElement(class Handle extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteHandleChange = createEvent(this, "calciteHandleChange", 6);
        this.calciteHandleNudge = createEvent(this, "calciteHandleNudge", 6);
        this.calciteInternalAssistiveTextChange = createEvent(this, "calciteInternalAssistiveTextChange", 6);
        this.handleKeyDown = (event) => {
            if (this.disabled) {
                return;
            }
            switch (event.key) {
                case " ":
                    this.selected = !this.selected;
                    this.calciteHandleChange.emit();
                    event.preventDefault();
                    break;
                case "ArrowUp":
                    if (!this.selected) {
                        return;
                    }
                    event.preventDefault();
                    this.calciteHandleNudge.emit({ direction: "up" });
                    break;
                case "ArrowDown":
                    if (!this.selected) {
                        return;
                    }
                    event.preventDefault();
                    this.calciteHandleNudge.emit({ direction: "down" });
                    break;
            }
        };
        this.handleBlur = () => {
            if (this.blurUnselectDisabled || this.disabled) {
                return;
            }
            if (this.selected) {
                this.selected = false;
                this.calciteHandleChange.emit();
            }
        };
        this.selected = false;
        this.disabled = false;
        this.dragHandle = undefined;
        this.messages = undefined;
        this.setPosition = undefined;
        this.setSize = undefined;
        this.label = undefined;
        this.blurUnselectDisabled = false;
        this.messageOverrides = undefined;
        this.effectiveLocale = undefined;
        this.defaultMessages = undefined;
    }
    handleAriaTextChange() {
        const message = this.getAriaText("live");
        if (message) {
            this.calciteInternalAssistiveTextChange.emit({
                message,
            });
        }
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        connectInteractive(this);
        connectMessages(this);
        connectLocalized(this);
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        await setUpMessages(this);
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    componentDidRender() {
        updateHostInteraction(this);
    }
    disconnectedCallback() {
        disconnectInteractive(this);
        disconnectMessages(this);
        disconnectLocalized(this);
    }
    effectiveLocaleChange() {
        updateMessages(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await componentFocusable(this);
        this.handleButton?.focus();
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    getTooltip() {
        const { label, messages } = this;
        if (!messages) {
            return "";
        }
        if (!label) {
            return messages.dragHandleUntitled;
        }
        return messages.dragHandle.replace(SUBSTITUTIONS.itemLabel, label);
    }
    getAriaText(type) {
        const { setPosition, setSize, label, messages, selected } = this;
        if (!messages || !label || typeof setSize !== "number" || typeof setPosition !== "number") {
            return null;
        }
        const text = type === "label"
            ? selected
                ? messages.dragHandleChange
                : messages.dragHandleIdle
            : selected
                ? messages.dragHandleActive
                : messages.dragHandleCommit;
        const replacePosition = text.replace(SUBSTITUTIONS.position, setPosition.toString());
        const replaceLabel = replacePosition.replace(SUBSTITUTIONS.itemLabel, label);
        return replaceLabel.replace(SUBSTITUTIONS.total, setSize.toString());
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        return (
        // Needs to be a span because of https://github.com/SortableJS/Sortable/issues/1486
        h("span", { "aria-disabled": this.disabled ? toAriaBoolean(this.disabled) : null, "aria-label": this.disabled ? null : this.getAriaText("label"), "aria-pressed": this.disabled ? null : toAriaBoolean(this.selected), class: { [CSS.handle]: true, [CSS.handleSelected]: !this.disabled && this.selected }, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, role: "button", tabIndex: this.disabled ? null : 0, title: this.getTooltip(),
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => {
                this.handleButton = el;
            } }, h("calcite-icon", { icon: ICONS.drag, scale: "s" })));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "messages": ["handleAriaTextChange"],
        "label": ["handleAriaTextChange"],
        "selected": ["handleAriaTextChange"],
        "setPosition": ["handleAriaTextChange"],
        "setSize": ["handleAriaTextChange"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return handleCss; }
}, [1, "calcite-handle", {
        "selected": [1540],
        "disabled": [516],
        "dragHandle": [513, "drag-handle"],
        "messages": [16],
        "setPosition": [2, "set-position"],
        "setSize": [2, "set-size"],
        "label": [1],
        "blurUnselectDisabled": [4, "blur-unselect-disabled"],
        "messageOverrides": [16],
        "effectiveLocale": [32],
        "defaultMessages": [32],
        "setFocus": [64]
    }, undefined, {
        "messages": ["handleAriaTextChange"],
        "label": ["handleAriaTextChange"],
        "selected": ["handleAriaTextChange"],
        "setPosition": ["handleAriaTextChange"],
        "setSize": ["handleAriaTextChange"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement$2() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-handle", "calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-handle":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Handle);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
    } });
}
defineCustomElement$2();

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const listItemCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-color-brand);--calcite-list-item-spacing-indent:1rem}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-color-foreground-2)}.container:active{background-color:var(--calcite-color-foreground-1)}.container--border{border-inline-start-width:4px;border-inline-start-style:solid}.container--border-selected{border-inline-start-color:var(--calcite-color-brand)}.container--border-unselected{border-inline-start-color:transparent}.container:hover.container--border-unselected{border-color:var(--calcite-color-border-1)}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-color-text-1)}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}.description{margin-block-start:0.125rem;color:var(--calcite-color-text-3)}:host([selected]) .description{color:var(--calcite-color-text-2)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-bottom{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-color-border-input)}.selection-container--single{color:transparent}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-color-border-1)}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-item-icon-color)}.open-container{color:var(--calcite-color-text-3)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-color-text-1)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list-item),::slotted(calcite-list){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3)}::slotted(calcite-list:empty){padding-block:0.75rem}:host([hidden]){display:none}[hidden]{display:none}";

const focusMap = new Map();
const listSelector = "calcite-list";
const ListItem = /*@__PURE__*/ proxyCustomElement(class ListItem extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteListItemSelect = createEvent(this, "calciteListItemSelect", 6);
        this.calciteListItemClose = createEvent(this, "calciteListItemClose", 6);
        this.calciteListItemDragHandleChange = createEvent(this, "calciteListItemDragHandleChange", 6);
        this.calciteListItemToggle = createEvent(this, "calciteListItemToggle", 6);
        this.calciteInternalListItemSelect = createEvent(this, "calciteInternalListItemSelect", 6);
        this.calciteInternalListItemSelectMultiple = createEvent(this, "calciteInternalListItemSelectMultiple", 6);
        this.calciteInternalListItemActive = createEvent(this, "calciteInternalListItemActive", 6);
        this.calciteInternalFocusPreviousItem = createEvent(this, "calciteInternalFocusPreviousItem", 6);
        this.calciteInternalListItemChange = createEvent(this, "calciteInternalListItemChange", 6);
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.dragHandleSelectedChangeHandler = (event) => {
            this.dragSelected = event.target.selected;
            this.calciteListItemDragHandleChange.emit();
            event.stopPropagation();
        };
        this.emitInternalListItemActive = () => {
            this.calciteInternalListItemActive.emit();
        };
        this.focusCellHandle = () => {
            this.handleCellFocusIn(this.handleGridEl);
        };
        this.focusCellActionsStart = () => {
            this.handleCellFocusIn(this.actionsStartEl);
        };
        this.focusCellContent = () => {
            this.handleCellFocusIn(this.contentEl);
        };
        this.focusCellActionsEnd = () => {
            this.handleCellFocusIn(this.actionsEndEl);
        };
        this.handleCloseClick = () => {
            this.closed = true;
            this.calciteListItemClose.emit();
        };
        this.handleContentSlotChange = (event) => {
            this.hasCustomContent = slotChangeHasAssignedElement(event);
        };
        this.handleActionsStartSlotChange = (event) => {
            this.hasActionsStart = slotChangeHasAssignedElement(event);
        };
        this.handleActionsEndSlotChange = (event) => {
            this.hasActionsEnd = slotChangeHasAssignedElement(event);
        };
        this.handleContentStartSlotChange = (event) => {
            this.hasContentStart = slotChangeHasAssignedElement(event);
        };
        this.handleContentEndSlotChange = (event) => {
            this.hasContentEnd = slotChangeHasAssignedElement(event);
        };
        this.handleContentBottomSlotChange = (event) => {
            this.hasContentBottom = slotChangeHasAssignedElement(event);
        };
        this.handleDefaultSlotChange = (event) => {
            this.handleOpenableChange(event.target);
        };
        this.handleToggleClick = () => {
            this.toggle();
        };
        this.toggle = (value = !this.open) => {
            this.open = value;
            this.calciteListItemToggle.emit();
        };
        this.handleItemClick = (event) => {
            if (event.defaultPrevented) {
                return;
            }
            this.toggleSelected(event.shiftKey);
        };
        this.toggleSelected = (shiftKey) => {
            const { selectionMode, selected } = this;
            if (this.disabled) {
                return;
            }
            if (selectionMode === "multiple" || selectionMode === "single") {
                this.selected = !selected;
            }
            else if (selectionMode === "single-persist") {
                this.selected = true;
            }
            this.calciteInternalListItemSelectMultiple.emit({
                selectMultiple: shiftKey && selectionMode === "multiple",
            });
            this.calciteListItemSelect.emit();
        };
        this.handleItemKeyDown = (event) => {
            if (event.defaultPrevented) {
                return;
            }
            const { key } = event;
            const composedPath = event.composedPath();
            const { containerEl, actionsStartEl, actionsEndEl, open, openable } = this;
            const cells = this.getGridCells();
            const currentIndex = cells.findIndex((cell) => composedPath.includes(cell));
            if (key === "Enter" &&
                !composedPath.includes(actionsStartEl) &&
                !composedPath.includes(actionsEndEl)) {
                event.preventDefault();
                this.toggleSelected(event.shiftKey);
            }
            else if (key === "ArrowRight") {
                event.preventDefault();
                const nextIndex = currentIndex + 1;
                if (currentIndex === -1) {
                    if (!open && openable) {
                        this.toggle(true);
                        this.focusCell(null);
                    }
                    else if (cells[0]) {
                        this.focusCell(cells[0]);
                    }
                }
                else if (cells[currentIndex] && cells[nextIndex]) {
                    this.focusCell(cells[nextIndex]);
                }
            }
            else if (key === "ArrowLeft") {
                event.preventDefault();
                const prevIndex = currentIndex - 1;
                if (currentIndex === -1) {
                    this.focusCell(null);
                    if (open && openable) {
                        this.toggle(false);
                    }
                    else {
                        this.calciteInternalFocusPreviousItem.emit();
                    }
                }
                else if (currentIndex === 0) {
                    this.focusCell(null);
                    containerEl.focus();
                }
                else if (cells[currentIndex] && cells[prevIndex]) {
                    this.focusCell(cells[prevIndex]);
                }
            }
        };
        this.focusCellNull = () => {
            this.focusCell(null);
        };
        this.handleCellFocusIn = (focusEl) => {
            this.setFocusCell(focusEl, getFirstTabbable(focusEl), true);
        };
        // Only one cell within a list-item should be focusable at a time. Ensures the active cell is focusable.
        this.setFocusCell = (focusEl, focusedEl, saveFocusIndex) => {
            const { parentListEl } = this;
            if (saveFocusIndex) {
                focusMap.set(parentListEl, null);
            }
            const gridCells = this.getGridCells();
            gridCells.forEach((tableCell) => {
                tableCell.tabIndex = -1;
                tableCell.removeAttribute(activeCellTestAttribute);
            });
            if (!focusEl) {
                return;
            }
            focusEl.tabIndex = focusEl === focusedEl ? 0 : -1;
            focusEl.setAttribute(activeCellTestAttribute, "");
            if (saveFocusIndex) {
                focusMap.set(parentListEl, gridCells.indexOf(focusEl));
            }
        };
        this.focusCell = (focusEl, saveFocusIndex = true) => {
            const focusedEl = getFirstTabbable(focusEl);
            this.setFocusCell(focusEl, focusedEl, saveFocusIndex);
            focusedEl?.focus();
        };
        this.active = false;
        this.closable = false;
        this.closed = false;
        this.description = undefined;
        this.disabled = false;
        this.dragDisabled = false;
        this.dragHandle = false;
        this.dragSelected = false;
        this.filterHidden = false;
        this.label = undefined;
        this.metadata = undefined;
        this.open = false;
        this.setSize = null;
        this.setPosition = null;
        this.selected = false;
        this.value = undefined;
        this.selectionMode = null;
        this.selectionAppearance = null;
        this.messageOverrides = undefined;
        this.messages = undefined;
        this.effectiveLocale = "";
        this.defaultMessages = undefined;
        this.level = null;
        this.visualLevel = null;
        this.parentListEl = undefined;
        this.openable = false;
        this.hasActionsStart = false;
        this.hasActionsEnd = false;
        this.hasCustomContent = false;
        this.hasContentStart = false;
        this.hasContentEnd = false;
        this.hasContentBottom = false;
    }
    activeHandler(active) {
        if (!active) {
            this.focusCell(null, false);
        }
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
        /* wired up by t9n util */
    }
    handleCalciteInternalListDefaultSlotChanges(event) {
        event.stopPropagation();
        this.handleOpenableChange(this.defaultSlotEl);
    }
    effectiveLocaleChange() {
        updateMessages(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        connectInteractive(this);
        connectLocalized(this);
        connectMessages(this);
        const { el } = this;
        this.parentListEl = el.closest(listSelector);
        this.level = getDepth(el) + 1;
        this.visualLevel = getDepth(el, true);
        this.setSelectionDefaults();
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        await setUpMessages(this);
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    componentDidRender() {
        updateHostInteraction(this);
    }
    disconnectedCallback() {
        disconnectInteractive(this);
        disconnectLocalized(this);
        disconnectMessages(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await componentFocusable(this);
        const { containerEl, parentListEl } = this;
        const focusIndex = focusMap.get(parentListEl);
        if (typeof focusIndex === "number") {
            const cells = this.getGridCells();
            if (cells[focusIndex]) {
                this.focusCell(cells[focusIndex]);
            }
            else {
                containerEl?.focus();
            }
            return;
        }
        containerEl?.focus();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderSelected() {
        const { selected, selectionMode, selectionAppearance } = this;
        if (selectionMode === "none" || selectionAppearance === "border") {
            return null;
        }
        return (h("td", { class: {
                [CSS$1.selectionContainer]: true,
                [CSS$1.selectionContainerSingle]: selectionMode === "single" || selectionMode === "single-persist",
            }, key: "selection-container", onClick: this.handleItemClick }, h("calcite-icon", { icon: selected
                ? selectionMode === "multiple"
                    ? ICONS$1.selectedMultiple
                    : ICONS$1.selectedSingle
                : selectionMode === "multiple"
                    ? ICONS$1.unselectedMultiple
                    : ICONS$1.unselectedSingle, scale: "s" })));
    }
    renderDragHandle() {
        const { label, dragHandle, dragSelected, dragDisabled, setPosition, setSize } = this;
        return dragHandle ? (h("td", { "aria-label": label, class: CSS$1.dragContainer, key: "drag-handle-container", onFocusin: this.focusCellHandle, role: "gridcell",
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.handleGridEl = el) }, h("calcite-handle", { disabled: dragDisabled, label: label, onCalciteHandleChange: this.dragHandleSelectedChangeHandler, selected: dragSelected, setPosition: setPosition, setSize: setSize }))) : null;
    }
    renderOpen() {
        const { el, open, openable, messages } = this;
        const dir = getElementDir(el);
        const icon = open ? ICONS$1.open : dir === "rtl" ? ICONS$1.closedRTL : ICONS$1.closedLTR;
        const tooltip = open ? messages.collapse : messages.expand;
        return openable ? (h("td", { class: CSS$1.openContainer, key: "open-container", onClick: this.handleToggleClick, title: tooltip }, h("calcite-icon", { icon: icon, key: icon, scale: "s" }))) : null;
    }
    renderActionsStart() {
        const { label, hasActionsStart } = this;
        return (h("td", { "aria-label": label, class: CSS$1.actionsStart, hidden: !hasActionsStart, key: "actions-start-container", onFocusin: this.focusCellActionsStart, role: "gridcell",
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.actionsStartEl = el) }, h("slot", { name: SLOTS.actionsStart, onSlotchange: this.handleActionsStartSlotChange })));
    }
    renderActionsEnd() {
        const { label, hasActionsEnd, closable, messages } = this;
        return (h("td", { "aria-label": label, class: CSS$1.actionsEnd, hidden: !(hasActionsEnd || closable), key: "actions-end-container", onFocusin: this.focusCellActionsEnd, role: "gridcell",
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.actionsEndEl = el) }, h("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), closable ? (h("calcite-action", { appearance: "transparent", icon: ICONS$1.close, key: "close-action", label: messages.close, onClick: this.handleCloseClick, text: messages.close })) : null));
    }
    renderContentStart() {
        const { hasContentStart } = this;
        return (h("div", { class: CSS$1.contentStart, hidden: !hasContentStart }, h("slot", { name: SLOTS.contentStart, onSlotchange: this.handleContentStartSlotChange })));
    }
    renderCustomContent() {
        const { hasCustomContent } = this;
        return (h("div", { class: CSS$1.customContent, hidden: !hasCustomContent }, h("slot", { name: SLOTS.content, onSlotchange: this.handleContentSlotChange })));
    }
    renderContentEnd() {
        const { hasContentEnd } = this;
        return (h("div", { class: CSS$1.contentEnd, hidden: !hasContentEnd }, h("slot", { name: SLOTS.contentEnd, onSlotchange: this.handleContentEndSlotChange })));
    }
    renderContentBottom() {
        const { hasContentBottom, visualLevel } = this;
        return (h("div", { class: CSS$1.contentBottom, hidden: !hasContentBottom, style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` } }, h("slot", { name: SLOTS.contentBottom, onSlotchange: this.handleContentBottomSlotChange })));
    }
    renderDefaultContainer() {
        return (h("div", { class: {
                [CSS$1.nestedContainer]: true,
                [CSS$1.nestedContainerHidden]: this.openable && !this.open,
            } }, h("slot", { onSlotchange: this.handleDefaultSlotChange, ref: (el) => (this.defaultSlotEl = el) })));
    }
    renderContentProperties() {
        const { label, description, hasCustomContent } = this;
        return !hasCustomContent && (!!label || !!description) ? (h("div", { class: CSS$1.content, key: "content" }, label ? (h("div", { class: CSS$1.label, key: "label" }, label)) : null, description ? (h("div", { class: CSS$1.description, key: "description" }, description)) : null)) : null;
    }
    renderContentContainer() {
        const { description, label, selectionMode, hasCustomContent } = this;
        const hasCenterContent = hasCustomContent || !!label || !!description;
        const content = [
            this.renderContentStart(),
            this.renderCustomContent(),
            this.renderContentProperties(),
            this.renderContentEnd(),
        ];
        return (h("td", { "aria-label": label, class: {
                [CSS$1.contentContainer]: true,
                [CSS$1.contentContainerSelectable]: selectionMode !== "none",
                [CSS$1.contentContainerHasCenterContent]: hasCenterContent,
            }, key: "content-container", onClick: this.handleItemClick, onFocusin: this.focusCellContent, role: "gridcell",
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.contentEl = el) }, content));
    }
    render() {
        const { openable, open, level, setPosition, setSize, active, label, selected, selectionAppearance, selectionMode, closed, visualLevel, } = this;
        const showBorder = selectionMode !== "none" && selectionAppearance === "border";
        const borderSelected = showBorder && selected;
        const borderUnselected = showBorder && !selected;
        return (h(Host, null, h(InteractiveContainer, { disabled: this.disabled }, h("tr", { "aria-expanded": openable ? toAriaBoolean(open) : null, "aria-label": label, "aria-level": level, "aria-posinset": setPosition, "aria-selected": toAriaBoolean(selected), "aria-setsize": setSize, class: {
                [CSS$1.container]: true,
                [CSS$1.containerHover]: true,
                [CSS$1.containerBorder]: showBorder,
                [CSS$1.containerBorderSelected]: borderSelected,
                [CSS$1.containerBorderUnselected]: borderUnselected,
            }, hidden: closed, onFocus: this.focusCellNull, onFocusin: this.emitInternalListItemActive, onKeyDown: this.handleItemKeyDown, role: "row", style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` }, tabIndex: active ? 0 : -1,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.containerEl = el) }, this.renderDragHandle(), this.renderSelected(), this.renderOpen(), this.renderActionsStart(), this.renderContentContainer(), this.renderActionsEnd()), this.renderContentBottom(), this.renderDefaultContainer())));
    }
    emitCalciteInternalListItemChange() {
        this.calciteInternalListItemChange.emit();
    }
    setSelectionDefaults() {
        const { parentListEl, selectionMode, selectionAppearance } = this;
        if (!parentListEl) {
            return;
        }
        if (!selectionMode) {
            this.selectionMode = parentListEl.selectionMode;
        }
        if (!selectionAppearance) {
            this.selectionAppearance = parentListEl.selectionAppearance;
        }
    }
    handleOpenableChange(slotEl) {
        if (!slotEl) {
            return;
        }
        const listItemChildren = getListItemChildren(slotEl);
        const listItemChildLists = getListItemChildLists(slotEl);
        updateListItemChildren(listItemChildren);
        this.openable = !!listItemChildren.length || !!listItemChildLists.length;
    }
    getGridCells() {
        return [this.handleGridEl, this.actionsStartEl, this.contentEl, this.actionsEndEl].filter((el) => el && !el.hidden);
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "active": ["activeHandler"],
        "closed": ["handleClosedChange"],
        "disabled": ["handleDisabledChange"],
        "selected": ["handleSelectedChange"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return listItemCss; }
}, [1, "calcite-list-item", {
        "active": [4],
        "closable": [516],
        "closed": [1540],
        "description": [1],
        "disabled": [516],
        "dragDisabled": [516, "drag-disabled"],
        "dragHandle": [4, "drag-handle"],
        "dragSelected": [1540, "drag-selected"],
        "filterHidden": [516, "filter-hidden"],
        "label": [1],
        "metadata": [16],
        "open": [1540],
        "setSize": [2, "set-size"],
        "setPosition": [2, "set-position"],
        "selected": [1540],
        "value": [8],
        "selectionMode": [1025, "selection-mode"],
        "selectionAppearance": [1025, "selection-appearance"],
        "messageOverrides": [1040],
        "messages": [1040],
        "effectiveLocale": [32],
        "defaultMessages": [32],
        "level": [32],
        "visualLevel": [32],
        "parentListEl": [32],
        "openable": [32],
        "hasActionsStart": [32],
        "hasActionsEnd": [32],
        "hasCustomContent": [32],
        "hasContentStart": [32],
        "hasContentEnd": [32],
        "hasContentBottom": [32],
        "setFocus": [64]
    }, [[0, "calciteInternalListItemGroupDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"], [0, "calciteInternalListDefaultSlotChange", "handleCalciteInternalListDefaultSlotChanges"]], {
        "active": ["activeHandler"],
        "closed": ["handleClosedChange"],
        "disabled": ["handleDisabledChange"],
        "selected": ["handleSelectedChange"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-list-item", "calcite-action", "calcite-handle", "calcite-icon", "calcite-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-list-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ListItem);
            }
            break;
        case "calcite-action":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "calcite-handle":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteListItem = ListItem;
const defineCustomElement = defineCustomElement$1;

export { CalciteListItem, defineCustomElement };
