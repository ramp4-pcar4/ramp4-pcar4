import { c_ as h, d0 as forceUpdate, d2 as proxyCustomElement, d3 as H, f2 as createEvent, d4 as Host, hA as DEBOUNCE } from './main-CaWYn_3L.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-BWlsF_pL.js';
import { g as getElementDir, u as slotChangeGetAssignedElements, l as slotChangeHasAssignedElement, o as focusFirstTabbable } from './dom-BGy5LjKF.js';
import { a as setComponentLoaded, s as setUpLoadableComponent, c as componentFocusable } from './loadable-EWERFCHc.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale-Cc9P43hL.js';
import { c as createObserver } from './observers-DDSQJqJ_.js';
import { u as updateMessages, c as connectMessages, s as setUpMessages, d as disconnectMessages } from './t9n-N19U7byR.js';
import { S as SLOTS$1, d as defineCustomElement$6 } from './action-group-DfLDRxbI.js';
import { S as SLOTS$2, d as defineCustomElement$2, a as defineCustomElement$5 } from './action-menu-B1s_ukob.js';
import { d as defineCustomElement$7 } from './action-NQuJHKtm.js';
import { d as defineCustomElement$4 } from './icon-BvbvdXrV.js';
import { d as defineCustomElement$3 } from './loader-6UCOfKt1.js';
import { d as debounce } from './debounce-GuTLDsIU.js';
import './preload-helper-dJJaZANz.js';
import './focusTrapComponent-BWkZpXpk.js';
import './openCloseComponent-BJmcPwom.js';
import './component-Dp1lfHT8.js';
import './interactive-CZmayDke.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const groupBufferPx = 2;
const getAverage = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
const geActionDimensions = (actions) => {
    const actionsNotSlotted = actions.filter((action) => action.slot !== SLOTS$1.menuActions);
    const actionLen = actionsNotSlotted?.length;
    return {
        actionWidth: actionLen ? getAverage(actionsNotSlotted.map((action) => action.clientWidth || 0)) : 0,
        actionHeight: actionLen ? getAverage(actionsNotSlotted.map((action) => action.clientHeight || 0)) : 0,
    };
};
const getMaxActionCount = ({ width, actionWidth, layout, height, actionHeight, groupCount, }) => {
    const maxContainerPx = layout === "horizontal" ? width : height;
    const avgItemPx = layout === "horizontal" ? actionWidth : actionHeight;
    return Math.floor((maxContainerPx - groupCount * groupBufferPx) / avgItemPx);
};
const getOverflowCount = ({ layout, actionCount, actionWidth, width, actionHeight, height, groupCount, }) => {
    return Math.max(actionCount - getMaxActionCount({ width, actionWidth, layout, height, actionHeight, groupCount }), 0);
};
const queryActions = (el) => {
    return Array.from(el.querySelectorAll("calcite-action")).filter((action) => action.closest("calcite-action-menu") ? action.slot === SLOTS$2.trigger : true);
};
const overflowActions = ({ actionGroups, expanded, overflowCount, }) => {
    let needToSlotCount = overflowCount;
    actionGroups.reverse().forEach((group) => {
        let slottedWithinGroupCount = 0;
        const groupActions = queryActions(group).reverse();
        groupActions.forEach((groupAction) => {
            if (groupAction.slot === SLOTS$1.menuActions) {
                groupAction.removeAttribute("slot");
                groupAction.textEnabled = expanded;
            }
        });
        if (needToSlotCount > 0) {
            groupActions.some((groupAction) => {
                const unslottedActions = groupActions.filter((action) => !action.slot);
                if (unslottedActions.length > 1 && groupActions.length > 2 && !groupAction.closest("calcite-action-menu")) {
                    groupAction.textEnabled = true;
                    groupAction.setAttribute("slot", SLOTS$1.menuActions);
                    slottedWithinGroupCount++;
                    if (slottedWithinGroupCount > 1) {
                        needToSlotCount--;
                    }
                }
                return needToSlotCount < 1;
            });
        }
        forceUpdate(group);
    });
};

const ICONS = {
    chevronsLeft: "chevrons-left",
    chevronsRight: "chevrons-right",
};
function getCalcitePosition(position, el) {
    return position || el.closest("calcite-shell-panel")?.position || "start";
}
function toggleChildActionText({ el, expanded, }) {
    queryActions(el)
        .filter((el) => el.slot !== SLOTS$1.menuActions)
        .forEach((action) => (action.textEnabled = expanded));
    el.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((el) => (el.expanded = expanded));
}
const setTooltipReference = ({ tooltip, referenceElement, expanded, ref, }) => {
    if (tooltip) {
        tooltip.referenceElement = !expanded && referenceElement ? referenceElement : null;
    }
    if (ref) {
        ref(referenceElement);
    }
    return referenceElement;
};
const ExpandToggle = ({ expanded, expandText, collapseText, expandLabel, collapseLabel, toggle, el, position, tooltip, ref, scale, }) => {
    const rtl = getElementDir(el) === "rtl";
    const text = expanded ? collapseText : expandText;
    const label = expanded ? collapseLabel : expandLabel;
    const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
    if (rtl) {
        icons.reverse();
    }
    const end = getCalcitePosition(position, el) === "end";
    const expandIcon = end ? icons[1] : icons[0];
    const collapseIcon = end ? icons[0] : icons[1];
    const actionNode = (h("calcite-action", { icon: expanded ? expandIcon : collapseIcon, id: "expand-toggle", label: label, onClick: toggle, ref: (referenceElement) => setTooltipReference({ tooltip, referenceElement, expanded, ref }), scale: scale, text: text, textEnabled: expanded, title: !expanded && !tooltip ? text : null }));
    return actionNode;
};

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const CSS = {
    actionGroupEnd: "action-group--end",
};
const SLOTS = {
    actionsEnd: "actions-end",
    bottomActions: "bottom-actions",
    expandTooltip: "expand-tooltip",
};

const actionBarCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteActionBarStyle0 = actionBarCss;

const ActionBar = /*@__PURE__*/ proxyCustomElement(class ActionBar extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteActionBarToggle = createEvent(this, "calciteActionBarToggle", 6);
        this.mutationObserver = createObserver("mutation", () => {
            const { el, expanded } = this;
            toggleChildActionText({ el, expanded });
            this.overflowActions();
        });
        this.resizeObserver = createObserver("resize", (entries) => this.resizeHandlerEntries(entries));
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.actionMenuOpenHandler = (event) => {
            if (event.target.menuOpen) {
                const composedPath = event.composedPath();
                Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((group) => {
                    if (!composedPath.includes(group)) {
                        group.menuOpen = false;
                    }
                });
            }
        };
        this.resizeHandlerEntries = (entries) => {
            entries.forEach(this.resizeHandler);
        };
        this.resizeHandler = (entry) => {
            const { width, height } = entry.contentRect;
            this.resize({ width, height });
        };
        this.resize = debounce(({ width, height }) => {
            const { el, expanded, expandDisabled, layout, overflowActionsDisabled } = this;
            if (overflowActionsDisabled ||
                (layout === "vertical" && !height) ||
                (layout === "horizontal" && !width)) {
                return;
            }
            const actions = queryActions(el);
            const actionCount = expandDisabled ? actions.length : actions.length + 1;
            const actionGroups = Array.from(el.querySelectorAll("calcite-action-group"));
            this.setGroupLayout(actionGroups);
            const groupCount = this.hasActionsEnd || this.hasBottomActions || !expandDisabled
                ? actionGroups.length + 1
                : actionGroups.length;
            const { actionHeight, actionWidth } = geActionDimensions(actions);
            const overflowCount = getOverflowCount({
                layout,
                actionCount,
                actionHeight,
                actionWidth,
                height,
                width,
                groupCount,
            });
            overflowActions({
                actionGroups,
                expanded,
                overflowCount,
            });
        }, DEBOUNCE.resize);
        this.toggleExpand = () => {
            this.expanded = !this.expanded;
            this.calciteActionBarToggle.emit();
        };
        this.handleDefaultSlotChange = (event) => {
            const groups = slotChangeGetAssignedElements(event).filter((el) => el.matches("calcite-action-group"));
            this.setGroupLayout(groups);
        };
        this.handleActionsEndSlotChange = (event) => {
            this.hasActionsEnd = slotChangeHasAssignedElement(event);
        };
        this.handleBottomActionsSlotChange = (event) => {
            this.hasBottomActions = slotChangeHasAssignedElement(event);
        };
        this.handleTooltipSlotChange = (event) => {
            const tooltips = slotChangeGetAssignedElements(event).filter((el) => el?.matches("calcite-tooltip"));
            this.expandTooltip = tooltips[0];
        };
        this.actionsEndGroupLabel = undefined;
        this.expandDisabled = false;
        this.expanded = false;
        this.layout = "vertical";
        this.overflowActionsDisabled = false;
        this.overlayPositioning = "absolute";
        this.position = undefined;
        this.scale = undefined;
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.effectiveLocale = undefined;
        this.hasActionsEnd = false;
        this.hasBottomActions = false;
        this.expandTooltip = undefined;
        this.defaultMessages = undefined;
    }
    expandHandler() {
        this.overflowActions();
    }
    expandedHandler() {
        const { el, expanded } = this;
        toggleChildActionText({ el, expanded });
        this.overflowActions();
    }
    layoutHandler() {
        this.updateGroups();
    }
    overflowDisabledHandler(overflowActionsDisabled) {
        if (overflowActionsDisabled) {
            this.resizeObserver?.disconnect();
            return;
        }
        this.resizeObserver?.observe(this.el);
        this.overflowActions();
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    effectiveLocaleChange() {
        updateMessages(this, this.effectiveLocale);
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidLoad() {
        const { el, expanded } = this;
        setComponentLoaded(this);
        toggleChildActionText({ el, expanded });
        this.overflowActions();
    }
    connectedCallback() {
        const { el, expanded } = this;
        connectLocalized(this);
        connectMessages(this);
        toggleChildActionText({ el, expanded });
        this.mutationObserver?.observe(el, { childList: true, subtree: true });
        if (!this.overflowActionsDisabled) {
            this.resizeObserver?.observe(el);
        }
        this.overflowActions();
        connectConditionalSlotComponent(this);
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        await setUpMessages(this);
    }
    disconnectedCallback() {
        this.mutationObserver?.disconnect();
        this.resizeObserver?.disconnect();
        disconnectConditionalSlotComponent(this);
        disconnectLocalized(this);
        disconnectMessages(this);
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
        await componentFocusable(this);
        focusFirstTabbable(this.el);
    }
    updateGroups() {
        this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")));
    }
    setGroupLayout(groups) {
        groups.forEach((group) => (group.layout = this.layout));
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderBottomActionGroup() {
        const { expanded, expandDisabled, el, position, toggleExpand, scale, layout, messages, actionsEndGroupLabel, overlayPositioning, } = this;
        const expandToggleNode = !expandDisabled ? (h(ExpandToggle, { collapseLabel: messages.collapseLabel, collapseText: messages.collapse, el: el, expandLabel: messages.expandLabel, expandText: messages.expand, expanded: expanded, position: position, scale: scale, toggle: toggleExpand, tooltip: this.expandTooltip })) : null;
        return (h("calcite-action-group", { class: CSS.actionGroupEnd, hidden: this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions), label: actionsEndGroupLabel, layout: layout, overlayPositioning: overlayPositioning, scale: scale }, h("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), h("slot", { name: SLOTS.bottomActions, onSlotchange: this.handleBottomActionsSlotChange }), h("slot", { name: SLOTS.expandTooltip, onSlotchange: this.handleTooltipSlotChange }), expandToggleNode));
    }
    render() {
        return (h(Host, { key: 'ff6e365531a0ed2032864bb0777910c3932e9c6b', onCalciteActionMenuOpen: this.actionMenuOpenHandler }, h("slot", { key: 'f12b2f455752a62ee32b65224bed385940135a49', onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup()));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "expandDisabled": ["expandHandler"],
        "expanded": ["expandedHandler"],
        "layout": ["layoutHandler"],
        "overflowActionsDisabled": ["overflowDisabledHandler"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteActionBarStyle0; }
}, [1, "calcite-action-bar", {
        "actionsEndGroupLabel": [1, "actions-end-group-label"],
        "expandDisabled": [516, "expand-disabled"],
        "expanded": [1540],
        "layout": [513],
        "overflowActionsDisabled": [516, "overflow-actions-disabled"],
        "overlayPositioning": [513, "overlay-positioning"],
        "position": [513],
        "scale": [513],
        "messages": [1040],
        "messageOverrides": [1040],
        "effectiveLocale": [32],
        "hasActionsEnd": [32],
        "hasBottomActions": [32],
        "expandTooltip": [32],
        "defaultMessages": [32],
        "overflowActions": [64],
        "setFocus": [64]
    }, undefined, {
        "expandDisabled": ["expandHandler"],
        "expanded": ["expandedHandler"],
        "layout": ["layoutHandler"],
        "overflowActionsDisabled": ["overflowDisabledHandler"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-action-bar", "calcite-action", "calcite-action-group", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-action-bar":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ActionBar);
            }
            break;
        case "calcite-action":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "calcite-action-group":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "calcite-action-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "calcite-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteActionBar = ActionBar;
const defineCustomElement = defineCustomElement$1;

export { CalciteActionBar, defineCustomElement };
