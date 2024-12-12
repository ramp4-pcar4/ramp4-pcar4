import { cI as proxyCustomElement, cJ as H, cG as h } from './main-BpBTVFw9.js';
import { c as createObserver } from './observers-CbX5_k0w.js';
import { c as componentFocusable, s as setUpLoadableComponent, a as setComponentLoaded } from './loadable-CFWqCd3s.js';
import './preload-helper-dJJaZANz.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    frame: "frame",
    frameAdvancing: "frame--advancing",
    frameRetreating: "frame--retreating",
};

const flowCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";

const Flow = /*@__PURE__*/ proxyCustomElement(class Flow extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.itemMutationObserver = createObserver("mutation", () => this.updateFlowProps());
        this.getFlowDirection = (oldFlowItemCount, newFlowItemCount) => {
            const allowRetreatingDirection = oldFlowItemCount > 1;
            const allowAdvancingDirection = oldFlowItemCount && newFlowItemCount > 1;
            if (!allowAdvancingDirection && !allowRetreatingDirection) {
                return null;
            }
            return newFlowItemCount < oldFlowItemCount ? "retreating" : "advancing";
        };
        this.updateFlowProps = () => {
            const { customItemSelectors, el, items } = this;
            const newItems = Array.from(el.querySelectorAll(`calcite-flow-item${customItemSelectors ? `,${customItemSelectors}` : ""}`)).filter((flowItem) => flowItem.closest("calcite-flow") === el);
            const oldItemCount = items.length;
            const newItemCount = newItems.length;
            const activeItem = newItems[newItemCount - 1];
            const previousItem = newItems[newItemCount - 2];
            if (newItemCount && activeItem) {
                newItems.forEach((itemNode) => {
                    itemNode.showBackButton = itemNode === activeItem && newItemCount > 1;
                    itemNode.hidden = itemNode !== activeItem;
                });
            }
            if (previousItem) {
                previousItem.menuOpen = false;
            }
            this.items = newItems;
            if (oldItemCount !== newItemCount) {
                const flowDirection = this.getFlowDirection(oldItemCount, newItemCount);
                this.itemCount = newItemCount;
                this.flowDirection = flowDirection;
            }
        };
        this.customItemSelectors = undefined;
        this.flowDirection = null;
        this.itemCount = 0;
        this.items = [];
    }
    // --------------------------------------------------------------------------
    //
    //  Public Methods
    //
    // --------------------------------------------------------------------------
    /**
     * Removes the currently active `calcite-flow-item`.
     */
    async back() {
        const { items } = this;
        const lastItem = items[items.length - 1];
        if (!lastItem) {
            return;
        }
        const beforeBack = lastItem.beforeBack
            ? lastItem.beforeBack
            : () => Promise.resolve();
        try {
            await beforeBack.call(lastItem);
        }
        catch (_error) {
            // back prevented
            return;
        }
        lastItem.remove();
        return lastItem;
    }
    /**
     * Sets focus on the component.
     */
    async setFocus() {
        await componentFocusable(this);
        const { items } = this;
        const activeItem = items[items.length - 1];
        return activeItem?.setFocus();
    }
    // --------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    // --------------------------------------------------------------------------
    connectedCallback() {
        this.itemMutationObserver?.observe(this.el, { childList: true, subtree: true });
        this.updateFlowProps();
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    disconnectedCallback() {
        this.itemMutationObserver?.disconnect();
    }
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    async handleItemBackClick(event) {
        if (event.defaultPrevented) {
            return;
        }
        await this.back();
        return this.setFocus();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    render() {
        const { flowDirection } = this;
        const frameDirectionClasses = {
            [CSS.frame]: true,
            [CSS.frameAdvancing]: flowDirection === "advancing",
            [CSS.frameRetreating]: flowDirection === "retreating",
        };
        return (h("div", { class: frameDirectionClasses }, h("slot", null)));
    }
    get el() { return this; }
    static get style() { return flowCss; }
}, [1, "calcite-flow", {
        "customItemSelectors": [1, "custom-item-selectors"],
        "flowDirection": [32],
        "itemCount": [32],
        "items": [32],
        "back": [64],
        "setFocus": [64]
    }, [[0, "calciteFlowItemBack", "handleItemBackClick"]]]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-flow"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-flow":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Flow);
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteFlow = Flow;
const defineCustomElement = defineCustomElement$1;

export { CalciteFlow, defineCustomElement };
