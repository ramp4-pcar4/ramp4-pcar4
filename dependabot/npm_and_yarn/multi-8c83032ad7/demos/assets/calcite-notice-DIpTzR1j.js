import { d2 as proxyCustomElement, d3 as H, f2 as createEvent, c_ as h } from './main-CaWYn_3L.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-BWlsF_pL.js';
import { r as setRequestedIcon, n as getSlotted } from './dom-BGy5LjKF.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentFocusable } from './loadable-EWERFCHc.js';
import { c as connectLocalized, d as disconnectLocalized } from './locale-Cc9P43hL.js';
import { c as connectMessages, d as disconnectMessages, s as setUpMessages, u as updateMessages } from './t9n-N19U7byR.js';
import { o as onToggleOpenCloseComponent } from './openCloseComponent-BJmcPwom.js';
import { g as getIconScale } from './component-Dp1lfHT8.js';
import { d as defineCustomElement$2 } from './icon-BvbvdXrV.js';
import './preload-helper-dJJaZANz.js';
import './observers-DDSQJqJ_.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
const KindIcons = {
    brand: "lightbulb",
    danger: "exclamationMarkTriangle",
    info: "information",
    success: "checkCircle",
    warning: "exclamationMarkTriangle",
};

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const SLOTS = {
    title: "title",
    message: "message",
    link: "link",
    actionsEnd: "actions-end",
};
const CSS = {
    actionsEnd: "actions-end",
    close: "notice-close",
    container: "container",
    content: "notice-content",
    icon: "notice-icon",
};

const noticeCss = ":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;overflow:hidden;max-block-size:0;transition-property:opacity, max-block-size;transition-duration:var(--calcite-animation-timing);text-align:start;border-inline-start:var(--calcite-border-width-md) solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;max-block-size:100%;align-items:center;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);overflow:visible}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}";
const CalciteNoticeStyle0 = noticeCss;

const Notice = /*@__PURE__*/ proxyCustomElement(class Notice extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteNoticeBeforeClose = createEvent(this, "calciteNoticeBeforeClose", 6);
        this.calciteNoticeBeforeOpen = createEvent(this, "calciteNoticeBeforeOpen", 6);
        this.calciteNoticeClose = createEvent(this, "calciteNoticeClose", 6);
        this.calciteNoticeOpen = createEvent(this, "calciteNoticeOpen", 6);
        this.setTransitionEl = (el) => {
            this.transitionEl = el;
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        this.close = () => {
            this.open = false;
        };
        this.openTransitionProp = "opacity";
        this.open = false;
        this.kind = "brand";
        this.closable = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.scale = "m";
        this.width = "auto";
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.effectiveLocale = undefined;
        this.defaultMessages = undefined;
    }
    openHandler() {
        onToggleOpenCloseComponent(this);
    }
    onMessagesChange() {
        /* wired up by t9n util */
    }
    updateRequestedIcon() {
        this.requestedIcon = setRequestedIcon(KindIcons, this.icon, this.kind);
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        connectConditionalSlotComponent(this);
        connectLocalized(this);
        connectMessages(this);
    }
    disconnectedCallback() {
        disconnectConditionalSlotComponent(this);
        disconnectLocalized(this);
        disconnectMessages(this);
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        this.requestedIcon = setRequestedIcon(KindIcons, this.icon, this.kind);
        await setUpMessages(this);
        if (this.open) {
            onToggleOpenCloseComponent(this);
        }
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    render() {
        const { el } = this;
        const closeButton = (h("button", { key: '52f9306ebe945398929f68fe66615359836ba2d8', "aria-label": this.messages.close, class: CSS.close, onClick: this.close, ref: (el) => (this.closeButton = el) }, h("calcite-icon", { key: 'f3601ac9547c73219661eebc7e7470db5dee7b52', icon: "x", scale: getIconScale(this.scale) })));
        const hasActionEnd = getSlotted(el, SLOTS.actionsEnd);
        return (h("div", { key: '3f8117ff7cdd08c92ce804ef4ac8af83003156a4', class: CSS.container, ref: this.setTransitionEl }, this.requestedIcon ? (h("div", { class: CSS.icon }, h("calcite-icon", { flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: getIconScale(this.scale) }))) : null, h("div", { key: '1b614ee86618bd5ce6e8834b466baf7d2564b5a1', class: CSS.content }, h("slot", { key: '19467ed9718a78c7530c2a08c727028d565dee7b', name: SLOTS.title }), h("slot", { key: '191e71caf2f2147c62fd6b73602e41d95dc27558', name: SLOTS.message }), h("slot", { key: 'd4fbf2b8aaa980cd24c5be89c6c8a36d091658f3', name: SLOTS.link })), hasActionEnd ? (h("div", { class: CSS.actionsEnd }, h("slot", { name: SLOTS.actionsEnd }))) : null, this.closable ? closeButton : null));
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component's first focusable element. */
    async setFocus() {
        await componentFocusable(this);
        const noticeLinkEl = this.el.querySelector("calcite-link");
        if (!this.closeButton && !noticeLinkEl) {
            return;
        }
        if (noticeLinkEl) {
            return noticeLinkEl.setFocus();
        }
        else if (this.closeButton) {
            this.closeButton.focus();
        }
    }
    onBeforeClose() {
        this.calciteNoticeBeforeClose.emit();
    }
    onBeforeOpen() {
        this.calciteNoticeBeforeOpen.emit();
    }
    onClose() {
        this.calciteNoticeClose.emit();
    }
    onOpen() {
        this.calciteNoticeOpen.emit();
    }
    effectiveLocaleChange() {
        updateMessages(this, this.effectiveLocale);
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "open": ["openHandler"],
        "messageOverrides": ["onMessagesChange"],
        "icon": ["updateRequestedIcon"],
        "kind": ["updateRequestedIcon"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return CalciteNoticeStyle0; }
}, [1, "calcite-notice", {
        "open": [1540],
        "kind": [513],
        "closable": [516],
        "icon": [520],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "scale": [513],
        "width": [513],
        "messages": [1040],
        "messageOverrides": [1040],
        "effectiveLocale": [32],
        "defaultMessages": [32],
        "setFocus": [64]
    }, undefined, {
        "open": ["openHandler"],
        "messageOverrides": ["onMessagesChange"],
        "icon": ["updateRequestedIcon"],
        "kind": ["updateRequestedIcon"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-notice", "calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-notice":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Notice);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}
defineCustomElement$1();

const CalciteNotice = Notice;
const defineCustomElement = defineCustomElement$1;

export { CalciteNotice, defineCustomElement };
