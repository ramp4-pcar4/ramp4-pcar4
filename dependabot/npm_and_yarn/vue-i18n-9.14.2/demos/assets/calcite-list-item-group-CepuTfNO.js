import { d2 as proxyCustomElement, d3 as H, f2 as createEvent, c_ as h, d4 as Host } from './main-C4Zge2Yj.js';
import { u as updateHostInteraction, I as InteractiveContainer } from './interactive-DNMhmiGt.js';
import { M as MAX_COLUMNS } from './resources4-DVAnfH27.js';
import './preload-helper-dJJaZANz.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const CSS = {
    container: "container",
    heading: "heading",
};

const listItemGroupCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteListItemGroupStyle0 = listItemGroupCss;

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
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    componentDidRender() {
        updateHostInteraction(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { disabled, heading } = this;
        return (h(Host, { key: 'e1e0304c3d4fe02909fd0075de2e4f5ef806be39' }, h(InteractiveContainer, { key: '5fb0861fb58de90808e98b7061d3c906c822203c', disabled: disabled }, h("tr", { key: 'c77af78f937c3135601df2c4574b858662d5fcdb', class: CSS.container }, h("td", { key: 'f1ae6b9e09e78f87b814287f8eaeb0a105575c7a', class: CSS.heading, colSpan: MAX_COLUMNS }, heading)), h("slot", { key: '7346d5d774173403910eddd35bf700ccd1437c4f', onSlotchange: this.handleDefaultSlotChange }))));
    }
    get el() { return this; }
    static get style() { return CalciteListItemGroupStyle0; }
}, [1, "calcite-list-item-group", {
        "disabled": [516],
        "filterHidden": [516, "filter-hidden"],
        "heading": [513]
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
