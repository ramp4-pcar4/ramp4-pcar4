import { cG as h, cH as forceUpdate, cI as proxyCustomElement, cJ as H, eL as createEvent, cK as Host } from './main-B92PJIAd.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-BvI_wLYD.js';
import { g as getElementDir, p as slotChangeGetAssignedElements, s as slotChangeHasAssignedElement, f as focusFirstTabbable } from './dom-ukL0J7Ft.js';
import { a as setComponentLoaded, s as setUpLoadableComponent, c as componentFocusable } from './loadable-CT7WLKO0.js';
import { u as updateMessages, c as connectLocalized, a as connectMessages, s as setUpMessages, d as disconnectLocalized, b as disconnectMessages } from './t9n-CEjHhkAy.js';
import { c as createObserver } from './observers-OTdU3cLZ.js';
import { S as SLOTS$1, d as defineCustomElement$6 } from './action-group-DT9ZZiXb.js';
import { S as SLOTS$2, d as defineCustomElement$2, a as defineCustomElement$5 } from './action-menu-DqOUXZJt.js';
import { d as defineCustomElement$7 } from './action-Civ5PGt-.js';
import { d as defineCustomElement$4 } from './icon-DvdILIoK.js';
import { d as defineCustomElement$3 } from './loader-Dayf6A9H.js';
import { d as debounce } from './debounce-Df76R_Om.js';
import './preload-helper-dJJaZANz.js';
import './guid-CUTKWB2E.js';
import './focusTrapComponent-ig0TGBh-.js';
import './openCloseComponent-8gHKfT2t.js';
import './component-e8PY7-zZ.js';
import './interactive-CsvOx-dK.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const overflowActionsDebounceInMs = 150;
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
const ExpandToggle = ({ expanded, expandText, collapseText, toggle, el, position, tooltip, ref, scale, }) => {
    const rtl = getElementDir(el) === "rtl";
    const text = expanded ? collapseText : expandText;
    const icons = [ICONS.chevronsLeft, ICONS.chevronsRight];
    if (rtl) {
        icons.reverse();
    }
    const end = getCalcitePosition(position, el) === "end";
    const expandIcon = end ? icons[1] : icons[0];
    const collapseIcon = end ? icons[0] : icons[1];
    const actionNode = (h("calcite-action", { icon: expanded ? expandIcon : collapseIcon, onClick: toggle, scale: scale, text: text, textEnabled: expanded, title: !expanded && !tooltip ? text : null, 
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: (referenceElement) => setTooltipReference({ tooltip, referenceElement, expanded, ref }) }));
    return actionNode;
};

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    actionGroupEnd: "action-group--end",
};
const SLOTS = {
    actionsEnd: "actions-end",
    bottomActions: "bottom-actions",
    expandTooltip: "expand-tooltip",
};

const actionBarCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;--calcite-action-bar-expanded-max-width:auto}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=vertical][overflow-actions-disabled]){overflow-y:auto}:host([layout=horizontal][overflow-actions-disabled]){overflow-x:auto}:host([layout=vertical][expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width)}::slotted(calcite-action-group){border-block-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-block-end:0;border-inline-end:1px solid var(--calcite-color-border-3)}:host([layout=horizontal][expand-disabled]) ::slotted(calcite-action-group:last-of-type){border-inline-end:0}::slotted(calcite-action-group:last-child){border-block-end:0;border-inline-end:0}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}";

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
        }, overflowActionsDebounceInMs);
        this.toggleExpand = () => {
            this.expanded = !this.expanded;
            this.calciteActionBarToggle.emit();
        };
        this.setExpandToggleRef = (el) => {
            this.expandToggleEl = el;
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
        const expandToggleNode = !expandDisabled ? (h(ExpandToggle, { collapseText: messages.collapse, el: el, expandText: messages.expand, expanded: expanded, position: position, scale: scale, toggle: toggleExpand, tooltip: this.expandTooltip,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: this.setExpandToggleRef })) : null;
        return (h("calcite-action-group", { class: CSS.actionGroupEnd, hidden: this.expandDisabled && !(this.hasActionsEnd || this.hasBottomActions), label: actionsEndGroupLabel, layout: layout, overlayPositioning: overlayPositioning, scale: scale }, h("slot", { name: SLOTS.actionsEnd, onSlotchange: this.handleActionsEndSlotChange }), h("slot", { name: SLOTS.bottomActions, onSlotchange: this.handleBottomActionsSlotChange }), h("slot", { name: SLOTS.expandTooltip, onSlotchange: this.handleTooltipSlotChange }), expandToggleNode));
    }
    render() {
        return (h(Host, { onCalciteActionMenuOpen: this.actionMenuOpenHandler }, h("slot", { onSlotchange: this.handleDefaultSlotChange }), this.renderBottomActionGroup()));
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
    static get style() { return actionBarCss; }
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
