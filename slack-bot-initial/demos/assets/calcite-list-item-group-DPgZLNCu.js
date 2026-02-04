import { cI as proxyCustomElement, cJ as H, eL as createEvent, cG as h, cK as Host } from './main-h0RsJOaN.js';
import { c as connectInteractive, u as updateHostInteraction, d as disconnectInteractive, I as InteractiveContainer } from './interactive-DlHW60wu.js';
import { g as getDepth, M as MAX_COLUMNS } from './utils3-qPFUNyPJ.js';
import './preload-helper-dJJaZANz.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    container: "container",
    heading: "heading",
};

const listItemGroupCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:nth-child(1 of :not([hidden]))){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}:host([hidden]){display:none}[hidden]{display:none}";

const ListItemGroup = /*@__PURE__*/ proxyCustomElement(class ListItemGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteInternalListItemGroupDefaultSlotChange = createEvent(this, "calciteInternalListItemGroupDefaultSlotChange", 6);
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleDefaultSlotChange = () => {
            this.calciteInternalListItemGroupDefaultSlotChange.emit();
        };
        this.disabled = false;
        this.filterHidden = false;
        this.heading = undefined;
        this.visualLevel = null;
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        const { el } = this;
        this.visualLevel = getDepth(el, true);
        connectInteractive(this);
    }
    componentDidRender() {
        updateHostInteraction(this);
    }
    disconnectedCallback() {
        disconnectInteractive(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { disabled, heading, visualLevel } = this;
        return (h(Host, null, h(InteractiveContainer, { disabled: disabled }, h("tr", { class: CSS.container, style: { "--calcite-list-item-spacing-indent-multiplier": `${visualLevel}` } }, h("td", { class: CSS.heading, colSpan: MAX_COLUMNS }, heading)), h("slot", { onSlotchange: this.handleDefaultSlotChange }))));
    }
    get el() { return this; }
    static get style() { return listItemGroupCss; }
}, [1, "calcite-list-item-group", {
        "disabled": [516],
        "filterHidden": [516, "filter-hidden"],
        "heading": [513],
        "visualLevel": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-list-item-group"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-list-item-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, ListItemGroup);
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteListItemGroup = ListItemGroup;
const defineCustomElement = defineCustomElement$1;

export { CalciteListItemGroup, defineCustomElement };
