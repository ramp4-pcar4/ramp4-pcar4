import { cI as proxyCustomElement, cJ as H, cH as forceUpdate, cG as h, cK as Host } from './main-CjrSZKDN.js';
import { t as toAriaBoolean } from './dom-ukL0J7Ft.js';
import { g as guid } from './guid-CUTKWB2E.js';
import { c as connectInteractive, d as disconnectInteractive, u as updateHostInteraction, I as InteractiveContainer } from './interactive-C14-HBtP.js';
import { s as setUpLoadableComponent, a as setComponentLoaded, c as componentFocusable } from './loadable-Dmuy3EQf.js';
import { u as updateMessages, c as connectLocalized, a as connectMessages, s as setUpMessages, d as disconnectLocalized, b as disconnectMessages } from './t9n-9AVjr2HN.js';
import { c as createObserver } from './observers-i1G0OCb0.js';
import { g as getIconScale } from './component-e8PY7-zZ.js';
import { d as defineCustomElement$2 } from './icon-tqxXvXKa.js';
import { d as defineCustomElement$1 } from './loader-BRJCTc9O.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    button: "button",
    buttonTextVisible: "button--text-visible",
    buttonCompact: "button--compact",
    indicatorText: "indicator-text",
    iconContainer: "icon-container",
    slotContainer: "slot-container",
    slotContainerHidden: "slot-container--hidden",
    textContainer: "text-container",
    textContainerVisible: "text-container--visible",
    indicatorWithIcon: "indicator-with-icon",
    indicatorWithoutIcon: "indicator-without-icon",
};
const SLOTS = {
    tooltip: "tooltip",
};

const actionCss = ":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent;--calcite-action-indicator-color:var(--calcite-color-brand);--calcite-action-color-transparent-hover:var(--calcite-color-transparent-hover);--calcite-action-color-transparent-press:var(--calcite-color-transparent-press)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;background-color:var(--calcite-color-foreground-1);fill:var(--calcite-color-text-3);font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-3);outline-color:transparent;text-align:unset;flex:1 0 auto}.button:hover{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}.button:focus{background-color:var(--calcite-color-foreground-2);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.button:active{background-color:var(--calcite-color-foreground-3)}.button .icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1rem}.button .text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.button .text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{background-color:var(--calcite-color-foreground-3);fill:var(--calcite-color-text-1);color:var(--calcite-color-text-1)}:host([active]) .button:active{background-color:var(--calcite-color-foreground-1)}:host([appearance=transparent]) .button{background-color:transparent}:host([appearance=transparent][active]) .button,:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-action-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-action-color-transparent-press)}:host([appearance=transparent][disabled]) .button{background-color:transparent}:host([loading][appearance=solid]) .button,:host([loading][appearance=solid]) .button:hover,:host([loading][appearance=solid]) .button:focus{background-color:var(--calcite-color-foreground-1)}:host([loading][appearance=solid]) .button .text-container,:host([loading][appearance=solid]) .button:hover .text-container,:host([loading][appearance=solid]) .button:focus .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-color-text-3);margin-inline-end:0px}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:\"\";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:\"\";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color)}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}";

const Action = /*@__PURE__*/ proxyCustomElement(class Action extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.mutationObserver = createObserver("mutation", () => forceUpdate(this));
        this.guid = `calcite-action-${guid()}`;
        this.indicatorId = `${this.guid}-indicator`;
        this.buttonId = `${this.guid}-button`;
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.handleTooltipSlotChange = (event) => {
            const tooltips = event.target
                .assignedElements({
                flatten: true,
            })
                .filter((el) => el?.matches("calcite-tooltip"));
            const tooltip = tooltips[0];
            if (tooltip) {
                tooltip.referenceElement = this.buttonEl;
            }
        };
        this.active = false;
        this.alignment = undefined;
        this.appearance = "solid";
        this.compact = false;
        this.disabled = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.indicator = false;
        this.label = undefined;
        this.loading = false;
        this.scale = "m";
        this.text = undefined;
        this.textEnabled = false;
        this.messages = undefined;
        this.messageOverrides = undefined;
        this.effectiveLocale = "";
        this.defaultMessages = undefined;
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
    connectedCallback() {
        connectInteractive(this);
        connectLocalized(this);
        connectMessages(this);
        this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        {
            await setUpMessages(this);
        }
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    disconnectedCallback() {
        disconnectInteractive(this);
        disconnectLocalized(this);
        disconnectMessages(this);
        this.mutationObserver?.disconnect();
    }
    componentDidRender() {
        updateHostInteraction(this);
    }
    // --------------------------------------------------------------------------
    //
    //  Methods
    //
    // --------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await componentFocusable(this);
        this.buttonEl?.focus();
    }
    // --------------------------------------------------------------------------
    //
    //  Render Methods
    //
    // --------------------------------------------------------------------------
    renderTextContainer() {
        const { text, textEnabled } = this;
        const textContainerClasses = {
            [CSS.textContainer]: true,
            [CSS.textContainerVisible]: textEnabled,
        };
        return text ? (h("div", { class: textContainerClasses, key: "text-container" }, text)) : null;
    }
    renderIndicatorText() {
        const { indicator, messages, indicatorId, buttonId } = this;
        return (h("div", { "aria-labelledby": buttonId, "aria-live": "polite", class: CSS.indicatorText, id: indicatorId, role: "region" }, indicator ? messages.indicator : null));
    }
    renderIconContainer() {
        const { loading, icon, scale, el, iconFlipRtl, indicator } = this;
        const loaderScale = scale === "l" ? "l" : "m";
        const calciteLoaderNode = loading ? (h("calcite-loader", { inline: true, label: this.messages.loading, scale: loaderScale })) : null;
        const calciteIconNode = icon ? (h("calcite-icon", { class: { [CSS.indicatorWithIcon]: indicator }, flipRtl: iconFlipRtl, icon: icon, scale: getIconScale(this.scale) })) : null;
        const iconNode = calciteLoaderNode || calciteIconNode;
        const hasIconToDisplay = iconNode || el.children?.length;
        const slotContainerNode = (h("div", { class: {
                [CSS.slotContainer]: true,
                [CSS.slotContainerHidden]: loading,
            } }, h("slot", null)));
        return hasIconToDisplay ? (h("div", { "aria-hidden": "true", class: CSS.iconContainer, key: "icon-container" }, iconNode, slotContainerNode)) : null;
    }
    render() {
        const { active, compact, disabled, icon, loading, textEnabled, label, text, indicator, indicatorId, buttonId, messages, } = this;
        const ariaLabel = `${label || text}${indicator ? ` (${messages.indicator})` : ""}`;
        const buttonClasses = {
            [CSS.button]: true,
            [CSS.buttonTextVisible]: textEnabled,
            [CSS.buttonCompact]: compact,
        };
        return (h(Host, null, h(InteractiveContainer, { disabled: disabled }, h("button", { "aria-busy": toAriaBoolean(loading), "aria-controls": indicator ? indicatorId : null, "aria-disabled": toAriaBoolean(disabled), "aria-label": ariaLabel, "aria-pressed": toAriaBoolean(active), class: buttonClasses, disabled: disabled, id: buttonId,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (buttonEl) => (this.buttonEl = buttonEl) }, this.renderIconContainer(), this.renderTextContainer(), !icon && indicator && h("div", { class: CSS.indicatorWithoutIcon, key: "indicator-no-icon" })), h("slot", { name: SLOTS.tooltip, onSlotchange: this.handleTooltipSlotChange }), this.renderIndicatorText())));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return actionCss; }
}, [1, "calcite-action", {
        "active": [516],
        "alignment": [513],
        "appearance": [513],
        "compact": [516],
        "disabled": [516],
        "icon": [1],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "indicator": [516],
        "label": [1],
        "loading": [516],
        "scale": [513],
        "text": [1],
        "textEnabled": [516, "text-enabled"],
        "messages": [1040],
        "messageOverrides": [1040],
        "effectiveLocale": [32],
        "defaultMessages": [32],
        "setFocus": [64]
    }, undefined, {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-action", "calcite-icon", "calcite-loader"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-action":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Action);
            }
            break;
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "calcite-loader":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}
defineCustomElement();

export { Action as A, defineCustomElement as d };
