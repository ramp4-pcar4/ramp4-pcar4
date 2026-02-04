import { aG as proxyCustomElement, aH as H, eK as createEvent, aI as h, aJ as Host } from './main-8822140d.js';
import { b as slotChangeHasAssignedElement, t as toAriaBoolean } from './dom-ba684384.js';
import { c as connectConditionalSlotComponent, d as disconnectConditionalSlotComponent } from './conditionalSlot-e66e6f08.js';
import { a as setComponentLoaded, s as setUpLoadableComponent, c as componentFocusable } from './loadable-de7051ca.js';
import { i as isActivationKey, u as updateMessages, c as connectLocalized, a as connectMessages, d as disconnectLocalized, b as disconnectMessages, s as setUpMessages } from './t9n-fd482b58.js';
import { c as connectInteractive, u as updateHostInteraction, d as disconnectInteractive, I as InteractiveContainer } from './interactive-a9750567.js';
import { c as createObserver } from './observers-57685080.js';
import { g as getIconScale } from './component-4e5553a7.js';
import { d as defineCustomElement$2 } from './icon-ae67fd75.js';
import './preload-helper-a4975f27.js';
import './guid-5c74a29c.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    title: "title",
    close: "close",
    imageContainer: "image-container",
    chipIcon: "chip-icon",
    textSlotted: "text--slotted",
    container: "container",
    imageSlotted: "image--slotted",
    closable: "closable",
    multiple: "multiple",
    selectable: "selectable",
    selectIcon: "select-icon",
    selectIconActive: "select-icon--active",
    nonInteractive: "non-interactive",
    isCircle: "is-circle",
};
const SLOTS = {
    image: "image",
};
const ICONS = {
    close: "x",
    unchecked: "circle",
    checkedSingle: "circle-f",
    checked: "check-circle-f",
};

const chipCss = ":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]){block-size:1.5rem;font-size:var(--calcite-font-size--2);--calcite-chip-spacing-s-internal:0.25rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=s]) .close,:host([scale=s]) .select-icon--active{block-size:1rem;inline-size:1rem}:host([scale=s]) .image-container{block-size:1.25rem;inline-size:1.25rem}:host([scale=s]) .container.is-circle{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]){block-size:2rem;font-size:var(--calcite-font-size--1);--calcite-chip-spacing-s-internal:0.375rem;--calcite-chip-spacing-l-internal:0.5rem}:host([scale=m]) .close,:host([scale=m]) .image-container,:host([scale=m]) .select-icon--active{block-size:1.5rem;inline-size:1.5rem}:host([scale=m]) .container.is-circle{block-size:2rem;inline-size:2rem}:host([scale=l]){block-size:2.75rem;font-size:var(--calcite-font-size-0);--calcite-chip-spacing-s-internal:0.5rem;--calcite-chip-spacing-l-internal:0.75rem}:host([scale=l]) .image-container,:host([scale=l]) .close,:host([scale=l]) .select-icon--active{block-size:2rem;inline-size:2rem}:host([scale=l]) .container.is-circle{block-size:2.75rem;inline-size:2.75rem}:host{display:inline-flex;cursor:default;border-radius:9999px}.container{box-sizing:border-box;display:inline-flex;block-size:100%;max-inline-size:100%;align-items:center;justify-content:center;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-1);font-weight:var(--calcite-font-weight-medium);outline-color:transparent}.container:not(.is-circle){padding-inline:var(--calcite-chip-spacing-s-internal)}.container.selectable{cursor:pointer}.container:not(.non-interactive):focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .container.image--slotted{padding-inline-start:calc(0.125rem / 2)}:host([scale=s]) .container.is-circle{padding-inline:0}.container.text--slotted .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:var(--calcite-chip-spacing-s-internal)}.container:not(.text--slotted) .title{display:none}.container:not(.image--slotted) .image-container{display:none}.container.closable{padding-inline-end:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted{padding-inline-start:calc(var(--calcite-chip-spacing-l-internal) / 2)}.container:not(.is-circle).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).image--slotted .image-container~.chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle).selectable:not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.selectable):not(.text--slotted) .chip-icon{margin-inline-start:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text--slotted) .chip-icon{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.text-slotted).image--slotted .image-container{margin-inline-end:var(--calcite-chip-spacing-s-internal)}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container{margin-inline-end:0}.container:not(.is-circle):not(.closable):not(.text--slotted).image--slotted.selectable .image-container~.chip-icon{margin-inline-start:calc(var(--calcite-chip-spacing-s-internal) * 2)}.chip-icon{position:relative;margin-block:0px;display:inline-flex;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline:var(--calcite-chip-spacing-s-internal)}.image-container{display:inline-flex;overflow:hidden;align-items:center;justify-content:center;pointer-events:none}.close{margin:0px;cursor:pointer;align-items:center;border-style:none;background-color:transparent;color:var(--calcite-color-text-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;-webkit-appearance:none;display:flex;border-radius:50%;align-content:center;justify-content:center;--calcite-chip-transparent-hover:var(--calcite-color-transparent-hover);--calcite-chip-transparent-press:var(--calcite-color-transparent-press)}.close:hover{background-color:var(--calcite-chip-transparent-hover)}.close:focus{background-color:var(--calcite-chip-transparent-hover);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:active{background-color:var(--calcite-chip-transparent-press)}.close calcite-icon{color:inherit}.select-icon{align-self:center;justify-content:center;align-items:center;display:flex;inset-block-start:-1px;position:relative;visibility:hidden;inline-size:0;opacity:0;transition:opacity 0.15s ease-in-out, inline-size 0.15s ease-in-out}.select-icon.select-icon--active{visibility:visible;opacity:0.5}.container:not(.is-circle).image--slotted .select-icon.select-icon--active{margin-inline-end:var(--calcite-chip-spacing-s-internal)}:host([selected]) .select-icon{opacity:1}.container:hover .select-icon--active{opacity:1}slot[name=image]::slotted(*){display:flex;block-size:100%;inline-size:100%;overflow:hidden;border-radius:50%}:host([kind=neutral]){background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}:host([kind=neutral]) .container{border-color:transparent}:host([kind=neutral]) .close{color:var(--calcite-color-text-3)}:host([kind=neutral]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-3))}:host([kind=inverse]){background-color:var(--calcite-color-inverse);color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .container{border-color:transparent}:host([kind=inverse]) .close{color:var(--calcite-color-text-inverse)}:host([kind=inverse]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-inverse))}:host([kind=brand]){background-color:var(--calcite-color-brand);color:var(--calcite-color-text-inverse)}:host([kind=brand]) .container{border-color:transparent}:host([kind=brand]) .close{color:var(--calcite-color-text-inverse)}:host([kind=brand]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-inverse))}:host([appearance=outline-fill]),:host([appearance=outline]){background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-1)}:host([appearance=outline-fill]) .close,:host([appearance=outline]) .close{color:var(--calcite-color-text-3)}:host([appearance=outline-fill]) .chip-icon,:host([appearance=outline]) .chip-icon{color:var(--calcite-ui-icon-color, var(--calcite-color-text-3))}:host([appearance=outline-fill]){background-color:var(--calcite-color-foreground-1)}:host([appearance=outline]){background-color:transparent}:host([kind=neutral][appearance=outline-fill]) .container,:host([kind=neutral][appearance=outline]) .container{border-color:var(--calcite-color-border-1)}:host([kind=inverse][appearance=outline-fill]) .container,:host([kind=inverse][appearance=outline]) .container{border-color:var(--calcite-color-border-inverse)}:host([kind=brand][appearance=outline-fill]) .container,:host([kind=brand][appearance=outline]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand][appearance=solid]) button,:host([kind=inverse][appearance=solid]) button{outline-color:var(--calcite-color-text-inverse)}:host([closed]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}";

const Chip = /*@__PURE__*/ proxyCustomElement(class Chip extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.calciteChipClose = createEvent(this, "calciteChipClose", 6);
        this.calciteChipSelect = createEvent(this, "calciteChipSelect", 6);
        this.calciteInternalChipKeyEvent = createEvent(this, "calciteInternalChipKeyEvent", 6);
        this.mutationObserver = createObserver("mutation", () => this.updateHasText());
        // --------------------------------------------------------------------------
        //
        //  Private Methods
        //
        // --------------------------------------------------------------------------
        this.close = () => {
            this.calciteChipClose.emit();
            this.selected = false;
            this.closed = true;
        };
        this.closeButtonKeyDownHandler = (event) => {
            if (isActivationKey(event.key)) {
                event.preventDefault();
                this.close();
            }
        };
        this.handleSlotImageChange = (event) => {
            this.hasImage = slotChangeHasAssignedElement(event);
        };
        this.handleEmittingEvent = () => {
            if (this.interactive) {
                this.calciteChipSelect.emit();
            }
        };
        this.disabled = false;
        this.appearance = "solid";
        this.kind = "neutral";
        this.closable = false;
        this.icon = undefined;
        this.iconFlipRtl = false;
        this.scale = "m";
        this.label = undefined;
        this.value = undefined;
        this.closed = false;
        this.selectionMode = "none";
        this.selected = false;
        this.messageOverrides = undefined;
        this.messages = undefined;
        this.interactive = false;
        this.defaultMessages = undefined;
        this.effectiveLocale = undefined;
        this.hasText = false;
        this.hasImage = false;
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
        connectConditionalSlotComponent(this);
        connectInteractive(this);
        connectLocalized(this);
        connectMessages(this);
        this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
    }
    componentDidLoad() {
        setComponentLoaded(this);
    }
    componentDidRender() {
        updateHostInteraction(this);
    }
    disconnectedCallback() {
        disconnectConditionalSlotComponent(this);
        disconnectInteractive(this);
        disconnectLocalized(this);
        disconnectMessages(this);
        this.mutationObserver?.disconnect();
    }
    async componentWillLoad() {
        setUpLoadableComponent(this);
        {
            await setUpMessages(this);
            this.updateHasText();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Event Listeners
    //
    //--------------------------------------------------------------------------
    keyDownHandler(event) {
        if (event.target === this.el) {
            switch (event.key) {
                case " ":
                case "Enter":
                    this.handleEmittingEvent();
                    event.preventDefault();
                    break;
                case "ArrowRight":
                case "ArrowLeft":
                case "Home":
                case "End":
                    this.calciteInternalChipKeyEvent.emit(event);
                    event.preventDefault();
                    break;
            }
        }
    }
    clickHandler() {
        if (!this.interactive && this.closable) {
            this.closeButtonEl.focus();
        }
    }
    //--------------------------------------------------------------------------
    //
    //  Public Methods
    //
    //--------------------------------------------------------------------------
    /** Sets focus on the component. */
    async setFocus() {
        await componentFocusable(this);
        if (!this.disabled && this.interactive) {
            this.containerEl?.focus();
        }
        else if (!this.disabled && this.closable) {
            this.closeButtonEl?.focus();
        }
    }
    updateHasText() {
        this.hasText = this.el.textContent.trim().length > 0;
    }
    //--------------------------------------------------------------------------
    //
    //  Render Methods
    //
    //--------------------------------------------------------------------------
    renderChipImage() {
        return (h("div", { class: CSS.imageContainer }, h("slot", { name: SLOTS.image, onSlotchange: this.handleSlotImageChange })));
    }
    renderSelectionIcon() {
        const icon = this.selectionMode === "multiple" && this.selected
            ? ICONS.checked
            : this.selectionMode === "multiple"
                ? ICONS.unchecked
                : this.selected
                    ? ICONS.checkedSingle
                    : undefined;
        return (h("div", { class: {
                [CSS.selectIcon]: true,
                [CSS.selectIconActive]: this.selectionMode === "multiple" || this.selected,
            } }, icon ? h("calcite-icon", { icon: icon, scale: getIconScale(this.scale) }) : null));
    }
    renderCloseButton() {
        return (h("button", { "aria-label": this.messages.dismissLabel, class: CSS.close, onClick: this.close, onKeyDown: this.closeButtonKeyDownHandler, tabIndex: this.disabled ? -1 : 0,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.closeButtonEl = el) }, h("calcite-icon", { icon: ICONS.close, scale: getIconScale(this.scale) })));
    }
    renderIcon() {
        return (h("calcite-icon", { class: CSS.chipIcon, flipRtl: this.iconFlipRtl, icon: this.icon, scale: getIconScale(this.scale) }));
    }
    render() {
        const { disabled } = this;
        const disableInteraction = disabled || (!disabled && !this.interactive);
        const role = this.selectionMode === "multiple" && this.interactive
            ? "checkbox"
            : this.selectionMode !== "none" && this.interactive
                ? "radio"
                : this.interactive
                    ? "button"
                    : undefined;
        return (h(Host, null, h(InteractiveContainer, { disabled: disabled }, h("div", { "aria-checked": this.selectionMode !== "none" && this.interactive
                ? toAriaBoolean(this.selected)
                : undefined, "aria-disabled": disableInteraction ? toAriaBoolean(disabled) : undefined, "aria-label": this.label, class: {
                [CSS.container]: true,
                [CSS.textSlotted]: this.hasText,
                [CSS.imageSlotted]: this.hasImage,
                [CSS.selectable]: this.selectionMode !== "none",
                [CSS.multiple]: this.selectionMode === "multiple",
                [CSS.closable]: this.closable,
                [CSS.nonInteractive]: !this.interactive,
                [CSS.isCircle]: !this.closable &&
                    !this.hasText &&
                    (!this.icon || !this.hasImage) &&
                    (this.selectionMode === "none" ||
                        (!!this.selectionMode && this.selectionMode !== "multiple" && !this.selected)),
            }, onClick: this.handleEmittingEvent, role: role, tabIndex: disableInteraction ? -1 : 0,
            // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
            ref: (el) => (this.containerEl = el) }, this.selectionMode !== "none" && this.renderSelectionIcon(), this.renderChipImage(), this.icon && this.renderIcon(), h("span", { class: CSS.title }, h("slot", null)), this.closable && this.renderCloseButton()))));
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }; }
    static get style() { return chipCss; }
}, [1, "calcite-chip", {
        "disabled": [516],
        "appearance": [513],
        "kind": [513],
        "closable": [516],
        "icon": [513],
        "iconFlipRtl": [516, "icon-flip-rtl"],
        "scale": [513],
        "label": [1],
        "value": [8],
        "closed": [1540],
        "selectionMode": [1, "selection-mode"],
        "selected": [1540],
        "messageOverrides": [1040],
        "messages": [1040],
        "interactive": [4],
        "defaultMessages": [32],
        "effectiveLocale": [32],
        "hasText": [32],
        "hasImage": [32],
        "setFocus": [64]
    }, [[0, "keydown", "keyDownHandler"], [0, "click", "clickHandler"]], {
        "messageOverrides": ["onMessagesChange"],
        "effectiveLocale": ["effectiveLocaleChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-chip", "calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-chip":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Chip);
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

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CalciteChip = Chip;
const defineCustomElement = defineCustomElement$1;

export { CalciteChip, defineCustomElement };
