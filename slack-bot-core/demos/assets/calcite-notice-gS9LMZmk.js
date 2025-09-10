import { cI as proxyCustomElement, cJ as H, eL as createEvent, cG as h } from './main-B92PJIAd.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-BvI_wLYD.js';
import { o as setRequestedIcon, a as getSlotted } from './dom-ukL0J7Ft.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentFocusable } from './loadable-CT7WLKO0.js';
import { c as connectLocalized, a as connectMessages, d as disconnectLocalized, b as disconnectMessages, s as setUpMessages, u as updateMessages } from './t9n-CEjHhkAy.js';
import { o as onToggleOpenCloseComponent } from './openCloseComponent-8gHKfT2t.js';
import { g as getIconScale } from './component-e8PY7-zZ.js';
import { d as defineCustomElement$2 } from './icon-DvdILIoK.js';
import './preload-helper-dJJaZANz.js';
import './observers-OTdU3cLZ.js';
import './guid-CUTKWB2E.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
var KindIcons;
(function (KindIcons) {
    KindIcons["brand"] = "lightbulb";
    KindIcons["danger"] = "exclamationMarkTriangle";
    KindIcons["info"] = "information";
    KindIcons["success"] = "checkCircle";
    KindIcons["warning"] = "exclamationMarkTriangle";
})(KindIcons || (KindIcons = {}));

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
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

const noticeCss = ":host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-color-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.notice-close:active{background-color:var(--calcite-color-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}";

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
        const closeButton = (h("button", { "aria-label": this.messages.close, class: CSS.close, onClick: this.close,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.closeButton = el) }, h("calcite-icon", { icon: "x", scale: getIconScale(this.scale) })));
        const hasActionEnd = getSlotted(el, SLOTS.actionsEnd);
        return (h("div", { class: CSS.container,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: this.setTransitionEl }, this.requestedIcon ? (h("div", { class: CSS.icon }, h("calcite-icon", { flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: getIconScale(this.scale) }))) : null, h("div", { class: CSS.content }, h("slot", { name: SLOTS.title }), h("slot", { name: SLOTS.message }), h("slot", { name: SLOTS.link })), hasActionEnd ? (h("div", { class: CSS.actionsEnd }, h("slot", { name: SLOTS.actionsEnd }))) : null, this.closable ? closeButton : null));
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
    static get style() { return noticeCss; }
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
