import { d2 as proxyCustomElement, d3 as H, c_ as h } from './main-CaWYn_3L.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-BWlsF_pL.js';
import { c as componentFocusable, s as setUpLoadableComponent, a as setComponentLoaded } from './loadable-EWERFCHc.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale-Cc9P43hL.js';
import { u as updateMessages, c as connectMessages, d as disconnectMessages, s as setUpMessages } from './t9n-N19U7byR.js';
import { d as defineCustomElement$1, a as defineCustomElement$4, S as SLOTS$1 } from './action-menu-B1s_ukob.js';
import { l as slotChangeHasAssignedElement } from './dom-BGy5LjKF.js';
import { d as defineCustomElement$5 } from './action-NQuJHKtm.js';
import { d as defineCustomElement$3 } from './icon-BvbvdXrV.js';
import { d as defineCustomElement$2 } from './loader-6UCOfKt1.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const SLOTS = {
    menuActions: "menu-actions",
    menuTooltip: "menu-tooltip",
};
const ICONS = {
    menu: "ellipsis",
};
const CSS = {
    container: "container",
};

const actionGroupCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns=\"1\"]){--calcite-internal-action-group-columns:1}:host([columns=\"2\"]){--calcite-internal-action-group-columns:2}:host([columns=\"3\"]){--calcite-internal-action-group-columns:3}:host([columns=\"4\"]){--calcite-internal-action-group-columns:4}:host([columns=\"5\"]){--calcite-internal-action-group-columns:5}:host([columns=\"6\"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteActionGroupStyle0 = actionGroupCss;

const ActionGroup = /*@__PURE__*/ proxyCustomElement(class ActionGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.setMenuOpen = (event) => {
            this.menuOpen = !!event.target.open;
        };
        this.handleMenuActionsSlotChange = (event) => {
            this.hasMenuActions = slotChangeHasAssignedElement(event);
        };
        this.expanded = false;
        this.label = undefined;
        this.layout = "vertical";
        this.columns = undefined;
        this.menuOpen = false;
        this.overlayPositioning = "absolute";
        this.scale = undefined;
        this.menuFlipPlacements = undefined;
        this.menuPlacement = undefined;
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.effectiveLocale = "";
        this.defaultMessages = undefined;
        this.hasMenuActions = false;
    }
    expandedHandler() {
        this.menuOpen = false;
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    effectiveLocaleChange() {
        updateMessages(this, this.effectiveLocale);
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component's first focusable element. */
    async setFocus() {
        await componentFocusable(this);
        this.el.focus();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        connectLocalized(this);
        connectMessages(this);
        connectConditionalSlotComponent(this);
    }
    disconnectedCallback() {
        disconnectLocalized(this);
        disconnectMessages(this);
        disconnectConditionalSlotComponent(this);
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        await setUpMessages(this);
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Component Methods
    //
    // --------------------------------------------------------------------------
    renderMenu() {
        const { expanded, menuOpen, scale, layout, messages, overlayPositioning, hasMenuActions, menuFlipPlacements, menuPlacement, } = this;
        return (h("calcite-action-menu", { expanded: expanded, flipPlacements: menuFlipPlacements ?? (layout === "horizontal" ? ["top", "bottom"] : ["left", "right"]), hidden: !hasMenuActions, label: messages.more, onCalciteActionMenuOpen: this.setMenuOpen, open: menuOpen, overlayPositioning: overlayPositioning, placement: menuPlacement ?? (layout === "horizontal" ? "bottom-start" : "leading-start"), scale: scale }, h("calcite-action", { icon: ICONS.menu, scale: scale, slot: SLOTS$1.trigger, text: messages.more, textEnabled: expanded }), h("slot", { name: SLOTS.menuActions, onSlotchange: this.handleMenuActionsSlotChange }), h("slot", { name: SLOTS.menuTooltip, slot: SLOTS$1.tooltip })));
    }
    render() {
        return (h("div", { key: '8143606c5745053f15140f34ff5ea375a683325f', "aria-label": this.label, class: CSS.container, role: "group" }, h("slot", { key: 'e8c2821b9ce2e9d0293478989fc31d24f043f9c3' }), this.renderMenu()));
    }
    static get delegatesFocus() { return true; }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "expanded": ["expandedHandler"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteActionGroupStyle0; }
}, [17, "calcite-action-group", {
        "expanded": [516],
        "label": [1],
        "layout": [513],
        "columns": [514],
        "menuOpen": [1540, "menu-open"],
        "overlayPositioning": [513, "overlay-positioning"],
        "scale": [513],
        "menuFlipPlacements": [16],
        "menuPlacement": [513, "menu-placement"],
        "messages": [1040],
        "messageOverrides": [1040],
        "effectiveLocale": [32],
        "defaultMessages": [32],
        "hasMenuActions": [32],
        "setFocus": [64]
    }, undefined, {
        "expanded": ["expandedHandler"],
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-action-group", "calcite-action", "calcite-action-menu", "calcite-icon", "calcite-loader", "calcite-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-action-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ActionGroup);
            }
            break;
        case "calcite-action":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "calcite-action-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "calcite-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { ActionGroup as A, SLOTS as S, defineCustomElement as d };
